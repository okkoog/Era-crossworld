const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_get_billings,
  sys_handle_action,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_act_disabled,
  sys_check_awake,
  sys_check_train_enabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const select_target = require('#/page/components/select-target');
const select_yes_or_no = require('#/page/components/select-yes-or-no');
const take_care = require('#/page/components/take-care');
const { generate_race_button } = require('#/page/homepage/snippets');
const page_chairman_office = require('#/page/page-chairman-office');
const page_clinic = require('#/page/page-clinic');
const print_exp_page = require('#/page/page-exp');
const print_god_shop = require('#/page/page-god-shop');
const print_inherit_page = require('#/page/page-inherit');
const print_juel_shop_page = require('#/page/page-juel-shop');
const print_load_page = require('#/page/page-load-game');
const print_out_page = require('#/page/page-out');
const race_page = require('#/page/page-race');
const print_recruit_page = require('#/page/page-recruit-rand');
const reg_race_page = require('#/page/page-register-race');
const report_race_page = require('#/page/page-report-race');
const print_save_page = require('#/page/page-save-game');
const print_school_page = require('#/page/page-school');
const print_shop_page = require('#/page/page-shop');
const print_storage_page = require('#/page/page-storage');
const print_train_page = require('#/page/page-train');
const page_trainer_office = require('#/page/page-trainer-office');
const page_visitors = require('#/page/page-visitors');

const { common_no_action_check } = require('#/event/check/check-common');
const { get_custom_check } = require('#/event/check/check-factory');
const {
  get_custom_daily,
  run_custom_daily,
} = require('#/event/daily/daily-factory');
const game_guides = require('#/event/others/game-guides');
const { shop_end, shop_start } = require('#/event/shop/tachyon-shop');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const basement_owners = require('#/data/event/basement-owners');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const loc_characters = require('#/data/event/loc-characters');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { pressure_border } = require('#/data/train-const');

function generate_button_title(...tlist) {
  return tlist.filter((x) => x).join('\n') || void 0;
}

/**
 * @param {Record<string,number>} dict
 * @param {string} k
 * @param {number[]} l
 */
function fill_npc_dict(dict, k, l) {
  dict[k] = l.length;
  dict[k + 'e'] = l.filter((nid) => EventMarks.get(nid).count() > 0).length;
}

/**
 * @param {number} cid
 * @param {function(number,number,number):Promise} next_cb
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (cid, next_cb, flags) => {
  const awake = { chara: sys_check_awake(cid), me: sys_check_awake(0) };
  const celebration = get_celebration();
  const celebration_cost = 50 * (era.get('cflag:0:축제이벤트표시') + 1);
  const cur_weeks = era.get('flag:현재턴수');
  const event_marks = EventMarks.get(cid);
  const my_event_marks = EventMarks.get(0);
  const growth_stage = era.get(`cflag:${cid}:성장단계`);
  const is_love_rejected = era.get(`cflag:${cid}:호감거절`);
  const jpy = era.get('flag:현재코인');
  const not_in_same_loc =
    era.get(`cflag:${cid}:위치`) !== era.get('cflag:0:위치');
  const office_activity_filter = era.get('flag:트레이닝실활동제외');
  const out_activity_filter = era.get('flag:외출활동제외');
  const personal_action = get_custom_check(cid).get_personal_action();
  const registered_race = sys_reg_race(cid).curr;
  const player_base = {
    stamina: era.get('base:0:체력'),
    time: era.get('base:0:기력'),
  };
  const chara_base =
    cid > 0
      ? {
          stamina: era.get(`base:${cid}:체력`),
          time: era.get(`base:${cid}:기력`),
        }
      : void 0;
  const train_enabled = sys_check_train_enabled(cid);
  const chara = get_chara_talk(cid);
  /** @type {Record<string,number>} */
  const npc = {};
  fill_npc_dict(npc, 'c', loc_characters.get(location_enum.clinic));
  fill_npc_dict(npc, 'l', loc_characters.get(location_enum.chairman));
  fill_npc_dict(npc, 't', loc_characters.get(location_enum.trainer));
  fill_npc_dict(npc, 'v', loc_characters.get(location_enum.visitor));
  /** @type {{[acc],[config]:Record<string,any>,content:string,h:function():Promise}[][]} */
  const buttons = [];
  buttons.push([
    {
      config: { width: 24 },
      content: '팀 목록 확인',
      async h() {
        flags.after_select =
          era.set('flag:현재상호작용캐릭터', await select_target()) !== cid;
      },
    },
    {
      config: {
        buttonType: my_event_marks.check(event_hooks.train)
          ? 'danger'
          : 'warning',
        disabled: !train_enabled || !awake.me,
      },
      // 训自己的话显示自主训练
      content: `${!cid && train_enabled ? '자율' : ''}트레이닝`,
      async h() {
        era.set('flag:현재위치', location_enum.playground);
        await print_train_page();
        era.set('flag:현재위치', location_enum.office);
      },
    },
    {
      ...generate_race_button(cid, registered_race.week, cur_weeks),
      async h() {
        if (registered_race.week === era.get('flag:현재턴수')) {
          era.set('flag:현재위치', location_enum.race);
          await race_page(registered_race.race);
          era.set('flag:현재위치', location_enum.office);
        } else {
          await reg_race_page();
        }
      },
    },
    {
      config: {
        disabled:
          // 当然不能上自己
          !cid ||
          // 没有性成熟不能上
          growth_stage < 2 ||
          !awake.me ||
          not_in_same_loc,
      },
      content: '우마뾰이 제안',
      async h() {
        if (await goto_sex(cid, location_enum.restroom)) {
          flags.week_start = true;
        }
        era.set('flag:현재위치', location_enum.office);
      },
    },
    {
      acc: 999,
      config: {
        buttonType:
          event_marks.check(event_hooks.week_end) ||
          my_event_marks.check(event_hooks.week_end)
            ? 'danger'
            : 'warning',
      },
      content: '다음 주까지 휴식',
      async h() {
        flags.week_start = true;
      },
    },
  ]);
  if (!office_activity_filter) {
    const group = [];
    buttons.push(group);
    group.push(
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_study)
            ? 'danger'
            : 'warning',
          disabled:
            !cid ||
            era.get(`cflag:${cid}:육성턴수합산`) >= 48 * 3 ||
            !awake.chara ||
            !awake.me ||
            player_base.time < 300 ||
            (chara_base && chara_base.time) < 300,
        },
        content: '학습지도',
        async h() {
          if (!(await sys_get_random_event(event_hooks.office_study, cid)())) {
            era.drawLine();
            era.print(['【',chara.get_colored_name(), '의 학습을 지도했다】']);
            await run_custom_daily(cid, event_hooks.office_study);
          }
        },
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_prepare)
            ? 'danger'
            : 'warning',
          disabled:
            !cid ||
            era.get(`cflag:${cid}:육성턴수합산`) >= 48 * 3 ||
            !awake.chara ||
            !awake.me ||
            jpy < 20 ||
            player_base.time < 300 ||
            (chara_base && chara_base.time) < 300,
          width: 6,
        },
        content: '레이스 전 준비',
        async h() {
          if (
            !(await sys_get_random_event(event_hooks.office_prepare, cid)())
          ) {
            era.drawLine();
            era.print([
              '【',
              chara.get_colored_name(),
              '의 레이스 전 준비를 도왔다】',
            ]);
            await run_custom_daily(cid, event_hooks.office_prepare);
          }
        },
      },
      {
        // 虚空聊天就更过分了!
        config: { disabled: !cid || !awake.me, width: 6 },
        content: '대화',
        async h() {
          era.print(['【', chara.get_colored_name(), '과(와) 대화했다】']);
          await get_custom_daily(cid).talk();
        },
      },
      {
        config: {
          disabled:
            // 不能给自己送礼
            !cid ||
            // 幼年期不能送礼
            growth_stage < 1 ||
            jpy < 10 ||
            !awake.me ||
            !awake.chara ||
            not_in_same_loc ||
            player_base.time < 200,
          width: 6,
        },
        content: '선물 주기',
        async h() {
          era.print(['【', chara.get_colored_name(), '에게 선물을 주었다】']);
          await run_custom_daily(cid, event_hooks.office_gift);
        },
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_cook)
            ? 'danger'
            : 'warning',
          disabled:
            !awake.chara ||
            !awake.me ||
            not_in_same_loc ||
            player_base.stamina < 100,
        },
        content: `${cid > 0 ? '함께' : ''} 식사`,
        async h() {
          if (!(await sys_get_random_event(event_hooks.office_cook, cid)())) {
            era.drawLine();
            era.print(
              cid > 0
                ? ['【', chara.get_colored_name(), '과(와) 함께 식사했다】']
                : '【혼자 식사했다】',
            );
            await run_custom_daily(cid, event_hooks.office_cook);
          }
        },
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_rest)
            ? 'danger'
            : 'warning',
          disabled:
            !awake.chara ||
            !awake.me ||
            not_in_same_loc ||
            player_base.time < 100,
        },
        content: `${cid > 0 ? '함께' : ''} 휴식`,
        async h() {
          if (!(await sys_get_random_event(event_hooks.office_rest, cid)())) {
            era.drawLine();
            era.print(
              cid > 0
                ? ['【',chara.get_colored_name(), '과(와) 함께 쉬었다】']
                : '【혼자서 휴식을 취했다】',
            );
            await run_custom_daily(cid, event_hooks.office_rest);
          }
        },
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_game)
            ? 'danger'
            : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            player_base.time < 300 ||
            (chara_base && chara_base.time) < 300,
        },
        content: `${cid > 0 ? '함께' : ''} 게임하기`,
        async h() {
          if (!(await sys_get_random_event(event_hooks.office_game, cid)())) {
            era.drawLine();
            era.print(
              cid > 0
                ? ['【', chara.get_colored_name(), '과(와) 함께 게임했다】']
                : '【혼자서 게임했다】',
            );
            await run_custom_daily(cid, event_hooks.office_game);
          }
        },
      },
    );
    if (cid > 0 && era.get(`cflag:${cid}:재육성가능`) > 0) {
      group.push({
        config: {
          disabled:
            !awake.chara || !awake.me || era.get(`relation:${cid}:0`) < 76,
        },
        content: era.get(`cflag:${cid}:돌봄`) > 0 ? '돌봄 대상 변경' : '돌봄 요청',
        async h() {
          await take_care(get_chara_talk(cid));
        },
      });
    }
    if (
      !cid ||
      (growth_stage > 1 &&
        era.get(`exp:${cid}:성관계횟수`) > era.get(`exp:${cid}:수면간횟수`))
    ) {
      group.push({
        content: `${cid ? '상대' : '자신'} 성적 능력 향상`,
        h: print_juel_shop_page,
      });
    }
    if (
      era.get('flag:징벌강도') <= 1 &&
      cid > 0 &&
      !sys_get_billings()[0].creditor &&
      growth_stage >= 2
    ) {
      group.push({
        config: {
          disabled: !cid || !awake.chara || !awake.me || not_in_same_loc,
        },
        content: '돈빌리기',
        async h() {
          await get_custom_daily(cid).borrow_money();
        },
      });
    }
    if (cid > 0 && era.get(`cflag:${cid}:축제이벤트표시`) > 0) {
      group.push({
        config: {
          buttonType: 'danger',
          disabled:
            !awake.chara ||
            !awake.me ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost ||
            not_in_same_loc,
        },
        content: `함께 ${celebration} 축하`,
        async h() {
          sys_change_attr_and_print(0, '기력', -celebration_cost);
          sys_change_attr_and_print(cid, '기력', -50);
          if (!(await sys_get_random_event(event_hooks.celebration, cid)())) {
            era.drawLine();
            era.print([
              '【',
              chara.get_colored_name(),
              '과(와) 함께 ',
              celebration,
              '을(를) 축하했다】',
            ]);
            await run_custom_daily(cid, event_hooks.celebration, {});
          }
        },
      });
    }
    if (cid > 0 && era.get(`status:${cid}:생일`) === 2) {
      group.push({
        config: {
          buttonType: 'danger',
          disabled:
            !awake.chara ||
            !awake.me ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost,
        },
        content: '생일 축하',
        async h() {
          sys_change_attr_and_print(0, '기력', -celebration_cost);
          sys_change_attr_and_print(cid, '기력', -50);
          era.print(['【', chara.get_colored_name(), '의 생일을 축하했다】']);
          await run_custom_daily(cid, event_hooks.birthday, {});
        },
      });
    }
    if (personal_action.name !== undefined) {
      group.push({
        content: personal_action.name,
        async h() {
          await personal_action.handle();
          await era.waitAnyKey();
        },
      });
    }
    if (is_love_rejected > 0 && is_love_rejected === era.get(`love:${cid}`)) {
      group.push({
        config: { disabled: not_in_same_loc },
        content: '애정 이벤트 재발동',
        async h() {
          era.set(`cflag:${cid}:호감거절`, 0);
          get_custom_check(cid).check_love_events();
          await era.printAndWait([
            get_chara_talk(cid).get_colored_name(),
            { content: '과(와)의 관계를 다시 되돌아보자...' },
          ]);
        },
      });
    }
    if (
      cid > 0 &&
      !common_no_action_check(cid) &&
      basement_owners.is_empty() &&
      era.get('flag:징벌강도') >= 2 &&
      !era.get(`status:${cid}:부상`) &&
      era.get(`base:${cid}:스트레스`) < pressure_border.depression
    ) {
      group.push({
        config: {
          disabled: !cid || !awake.chara || !awake.me || not_in_same_loc,
        },
        content: '乞求狂爱',
        async h() {
          basement_owners.push(cid);
          await era.printAndWait([
            { content: '听了 ' },
            get_chara_talk(0).get_colored_name(),
            { content: ' 的请求，' },
            get_chara_talk(cid).get_colored_name(),
            { content: ' 似乎有些意动……' },
          ]);
        },
      });
    }
  }
  if (!out_activity_filter) {
    const group = [];
    buttons.push(group);
    group.push(
      {
        config: {
          buttonType: my_event_marks.check(
            event_hooks.recruit_start,
            event_hooks.recruit,
          )
            ? 'danger'
            : 'warning',
          disabled:
            era.get('flag:현재월') >= 4 ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.playground),
              player_base,
            ) > 0,
        },
        content: '훈련장으로 이동 (모집)',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.playground));
          await print_recruit_page();
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            my_event_marks.check(event_hooks.school_trainer_office) ||
            npc.te > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.trainer),
              player_base,
            ) > 0 ||
            npc.t === 0,
          title: generate_button_title(
            npc.t > 0 ? `이 장소에 있는 사람 ${npc.t} 명` : void 0,
            event_marks.check(event_hooks.back_school)
              ? '돌아올 때 트리거되는 이벤트 존재'
              : void 0,
            my_event_marks.check(event_hooks.school_trainer_office)
              ? '이 장소에 이벤트 존재'
              : void 0,
            npc.te > 0 ? `이 장소에서 ${npc.te} 명이 기념일 이벤트가 있음` : void 0,
          ),
        },
        content: '트레이너 사무실로 이동',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.trainer));
          if (!(await game_guides.school_trainer_office())) {
            await page_trainer_office();
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(
              event_hooks.school_clinic,
              event_hooks.back_school,
            ) ||
            my_event_marks.check(event_hooks.school_clinic) ||
            npc.ce > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.clinic),
              player_base,
            ) > 0 ||
            npc.c === 0,
          title: generate_button_title(
            npc.c > 0 ? `이 장소에 있는 사람 ${npc.c} 명` : void 0,
            event_marks.check(event_hooks.back_school)
              ? '돌아올 때 트리거되는 이벤트 존재'
              : void 0,
            event_marks.check(event_hooks.school_clinic) ||
              my_event_marks.check(event_hooks.school_chairman)
              ? '이 장소에 이벤트 존재'
              : void 0,
            npc.ce > 0 ? `이 장소에서 ${npc.ce} 명이 기념일 이벤트가 있음` : void 0,
          ),
        },
        content: '보건실로 이동',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.clinic));
          if (
            !(await game_guides.school_clinic()) &&
            !(await sys_get_random_event(event_hooks.school_clinic)())
          ) {
            await page_clinic();
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            era.get('flag:현재월') === 3 ||
            my_event_marks.check(event_hooks.school_god)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            (cid && !train_enabled) ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.god),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '함께' : ''} 세 여신상으로 이동`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.god, cid), cid);
          if (
            !(await game_guides.school_god()) &&
            !(await sys_get_random_event(event_hooks.school_god, cid)())
          ) {
            if (
              era.get('flag:현재월') === 3 &&
              (await select_yes_or_no(
                '인자 계승이 가능합니다! 진행하시겠습니까?',
                '인자 계승!',
                '평범한 방문으로 하겠습니다',
              ))
            ) {
              await print_inherit_page();
            } else {
              await print_god_shop();
            }
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(
              event_hooks.school_atrium,
              event_hooks.back_school,
            ) || my_event_marks.check(event_hooks.school_atrium)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.atrium, cid),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '함께' : ''} 안뜰로 이동`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.atrium, cid), cid);
          if (!(await game_guides.school_atrium())) {
            await print_school_page(location_enum.atrium);
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(
              event_hooks.school_rooftop,
              event_hooks.back_school,
            ) || my_event_marks.check(event_hooks.school_rooftop)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.rooftop, cid),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '함께' : ''} 옥상으로 이동`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.rooftop, cid), cid);
          if (!(await game_guides.school_rooftop())) {
            await print_school_page(location_enum.rooftop);
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            my_event_marks.check(event_hooks.school_chairman) ||
            npc.le > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.chairman),
              player_base,
            ) > 0 ||
            npc.l === 0,
          title: generate_button_title(
            npc.l > 0 ? `이 장소에 있는 사람 ${npc.l} 명` : void 0,
            event_marks.check(event_hooks.back_school)
              ? '돌아올 때 트리거되는 이벤트 존재'
              : void 0,
            my_event_marks.check(event_hooks.school_chairman)
              ? '이 장소에 이벤트 존재'
              : void 0,
            npc.le > 0 ? `이 장소에서 ${npc.le} 명이 기념일 이벤트가 있음` : void 0,
          ),
        },
        content: '이사장실로 이동',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.chairman));
          if (
            !(await game_guides.school_chairman()) &&
            !(await sys_get_random_event(event_hooks.school_chairman)())
          ) {
            await page_chairman_office();
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            my_event_marks.check(event_hooks.school_visitors) ||
            npc.ve > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.visitor),
              player_base,
            ) > 0 ||
            (npc.v === 0 && !my_event_marks.check(event_hooks.school_visitors)),
          title: generate_button_title(
            npc.v > 0 ? `이 장소에 있는 사람 ${npc.v} 명` : void 0,
            event_marks.check(event_hooks.back_school)
              ? '돌아올 때 트리거되는 이벤트 존재'
              : void 0,
            my_event_marks.check(event_hooks.school_visitors)
              ? '이 장소에 이벤트 존재'
              : void 0,
            npc.ve > 0 ? `이 장소에서 ${npc.ve} 명이 기념일 이벤트가 있음` : void 0,
          ),
        },
        content: '응접실로 이동',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.visitor));
          if (!(await game_guides.school_visitors())) {
            await page_visitors();
          }
        },
      },
      {
        config: {
          disabled: !awake.me,
        },
        content: '매점으로 이동',
        async h() {
          era.set('flag:현재위치', location_enum.school_shop);
          const item_list = [
            ...new Array(8).fill(0).map((_, i) => i),
            ...new Array(11).fill(0).map((_, i) => i + 10),
            25,
            { id: 26, limit: true },
            ...new Array(3).fill(0).map((_, i) => i + 27),
            ...new Array(12).fill(0).map((_, i) => i + 30),
            { id: 42, limit: true },
            43,
          ];
          era.set('flag:현재상호작용캐릭터', 0);
          if (era.get('cflag:0:템플릿캐릭터') !== 32) {
            await shop_start();
            await shop_end(await print_shop_page(item_list));
          } else {
            await print_shop_page(item_list);
          }
          era.set('flag:현재상호작용캐릭터', cid);
          era.set('flag:현재위치', location_enum.office);
        },
      },
      {
        // 幼年期只能呆在训练室
        config: {
          buttonType:
            event_marks.check(
              event_hooks.out_start,
              event_hooks.out_river,
              event_hooks.out_shopping,
              event_hooks.out_church,
              event_hooks.out_station,
              event_hooks.back_school,
            ) || my_event_marks.check(event_hooks.out_start)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.gate, cid),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '함께' : ''} 외출`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.gate, cid), cid);
          era.set('flag:현재위치', location_enum.gate);
          await print_out_page();
          era.set('flag:현재위치', location_enum.office);
        },
      },
    );
  }
  buttons.push([
    {
      content: '캐릭터 정보',
      h: print_exp_page,
    },
    {
      config: { disabled: !awake.me },
      content: '소지품',
      h: print_storage_page,
    },
    {
      content: '레이스 정보',
      h: report_race_page,
    },
    {
      config: {
        buttonType: office_activity_filter ? 'warning' : 'info',
      },
      content: `트레이닝실 활동 제외 [${office_activity_filter ? 'ON' : 'OFF'}]`,
      h() {
        era.set('flag:트레이닝실활동제외', !era.get('flag:트레이닝실활동제외'));
      },
    },
    {
      config: {
        buttonType: out_activity_filter ? 'warning' : 'info',
      },
      content: `외출 제외 [${out_activity_filter ? 'ON' : 'OFF'}]`,
      h() {
        era.set('flag:외출활동제외', !era.get('flag:외출활동제외'));
      },
    },
    {
      content: '저장',
      h: print_save_page,
    },
    {
      content: '불러오기',
      h: print_load_page,
    },
  ]);

  era.printInColRows(
    [{ type: 'divider' }],
    ...buttons.map((g, gi) =>
      g.map((b, bi) => ({
        accelerator: b.acc || (gi + 1) * 100 + bi,
        config: {
          ...b.config,
          width: (b.config || {}).width || 6,
        },
        content: b.content,
        type: 'button',
      })),
    ),
  );

  const ret = await era.input();
  era.drawLine();
  let button;
  switch (ret) {
    case 990:
      switch_image();
      break;
    case 991:
      await report_race_page();
      break;
    default:
      if (ret === 999) {
        button = buttons[0].find((e) => e.acc === ret);
      } else {
        button = buttons[Math.floor(ret / 100) - 1][ret % 100];
      }
      await button.h();
  }
  if (flags.week_start) {
    await next_cb(cid, location_enum.office, location_enum.home);
  }
};
