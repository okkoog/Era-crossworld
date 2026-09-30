const era = require('#/era-electron');

const sys_handle_escape_basement = require('#/system/basement/sys-handle-escape-basement');
const {
  sys_check_cuckold,
  sys_check_yandere,
} = require('#/system/chara/sys-calc-cheat');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_status_by_base,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const print_curr_chara = require('#/page/components/cur-chara-info');
const check_game_over = require('#/page/components/game-over');
const page_header = require('#/page/components/page-header');
const basement = require('#/page/homepage/basement');
const print_ero_page = require('#/page/page-ero');

const basement_queue = require('#/event/basement-queue');
const { common_no_action_check } = require('#/event/check/check-common');
const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');
const { get_custom_edu } = require('#/event/edu/edu-factory');
const { get_custom_ero } = require('#/event/ero/ero-factory');
const anniversary = require('#/event/others/anniversary');
const aps_kojo = require('#/event/others/as-pregnant-slave.kojo');
const game_guides = require('#/event/others/game-guides');
const { start_machine_gun, stop_machine_gun } = require('#/event/queue');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');
const { get_random_value, minutes_in_a_day } = require('#/utils/value-utils');

const {
  action_type_enum,
  basement_status_enum,
} = require('#/data/basement-const');
const { buff_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const BasementAction = require('#/data/event/basement-action');
const basement_owners = require('#/data/event/basement-owners');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_save_name } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const notes = require('#/data/notes.json');
const { first_child_id } = require('#/data/other-const');
const { pressure_border } = require('#/data/train-const');

let notes_index = 0;
let random_event;

async function next_week() {
  era.drawLine();
  era.print('【시간이 흐르기 시작한다】', {
    align: 'center',
    fontSize: '1.5rem',
  });
  era.println();
  await sys_next_week();
  era.drawLine();
  await era.printAndWait('【새로운 한 주가 시작되었다】', {
    align: 'center',
    fontSize: '1.5rem',
  });
}

/**
 * @param {number} cid
 * @param {number} cur_loc
 * @param {number} rest_loc
 */
async function save_and_next_week(cid, cur_loc, rest_loc) {
  if (!era.get('flag:강제배드엔딩')) {
    await era.saveData(0, `${get_save_name()} (자동저장)`);
  }
  era.drawLine();
  era.set('flag:현재상호작용캐릭터', 0);
  era.set('flag:현재위치', rest_loc);
  let lover = +(sys_check_awake(0) && era.get('flag:잠자리파트너'));
  era.set('flag:잠자리파트너', lover);
  const punish = era.get('flag:징벌강도') >= 2 && check_pregnant_unprotect(0);
  if (punish) {
    await aps_kojo['工作']({
      SLAVE: era.get('flag:징벌강도') === 2 ? '성노예' : '임신주머니',
      YOU: era.get('callname:0:-2'),
      ...(era.get('flag:캐릭터성별') === 1
        ? { SHE: '그', UMA: '우마무스코' }
        : { SHE: '그녀', UMA: '우마무스메' }),
    });
  }
  if (cid > 0 && !sys_check_remote(cid) && !lover) {
    if (punish) {
      era.drawLine();
    }
    await run_custom_daily(cid, event_hooks.good_night);
  }
  let continue_flag = true;
  if (era.get('flag:현재위치') !== location_enum.basement) {
    start_machine_gun(event_hooks.week_end);
    while (
      continue_flag &&
      (random_event = sys_get_random_event(event_hooks.week_end)) !== undefined
    ) {
      era.drawLine();
      continue_flag = !(await random_event(cid));
    }
    stop_machine_gun(event_hooks.week_end);
  }
  if ((lover = era.get('flag:잠자리파트너')) > 0) {
    era.set(`cflag:${lover}:자율훈련`, 0);
    const life_marks = LifeEventMarks.get_marks(lover);
    begin_and_init_ero(0, lover);
    if (life_marks.marital_rape) {
      era.set('tflag:강간', lover);
      era.set('tflag:주도권', lover);
    }
    const inmon = CharaInmon.get(lover);
    const orgy = sys_check_yandere(lover, (y) => y === 2, inmon)
      ? void 0
      : get_random_entry(
          sys_filter_chara('cflag', '모집상태', recruit_flags.yes)
            .map((e) => {
              return {
                id: e,
                check:
                  e > 0 &&
                  e !== lover &&
                  sys_check_awake(e) &&
                  (era.get(`relation:${e}:${lover}`) > 225 ||
                    era.get(`base:${e}:성욕`) >= lust_border.absent_mind ||
                    sys_check_cuckold(e)) &&
                  get_custom_check(e).is_want_make_love(),
              };
            })
            .filter((e) => e.check),
        );
    if (orgy !== void 0) {
      era.drawLine();
      let wait_flag = false;
      if (await get_custom_ero(orgy.id).join_3p(lover)) {
        await get_custom_ero(orgy.id).join_3p_accept(lover);
        init_ero(orgy.id);
        era.println();
        wait_flag =
          sys_like_chara(orgy.id, 0, get_random_value(50, 150)) || wait_flag;
        wait_flag =
          sys_like_chara(orgy.id, lover, get_random_value(50, 150)) ||
          wait_flag;
        const yandere = era.get(`talent:${lover}:얀데레`);
        if (sys_check_cuckold(lover, inmon)) {
          wait_flag =
            sys_like_chara(lover, 0, get_random_value(10, 25)) || wait_flag;
          wait_flag =
            sys_like_chara(lover, orgy.id, get_random_value(0, 25)) ||
            wait_flag;
        } else if (
          !inmon.on(plugin_enum.no_yand) &&
          era.get(`relation:${lover}:${orgy.id}`) > 375
        ) {
          wait_flag =
            sys_like_chara(
              lover,
              0,
              -get_random_value(25, 75 + 25 * yandere),
            ) || wait_flag;
        }
        era.set(`cflag:${orgy.id}:자율훈련`, 0);
      } else if (
        orgy.check === 2 &&
        era.get(`relation:${lover}:${orgy.id}`) > 375
      ) {
        await get_custom_ero(orgy.id).join_3p_force(lover);
        init_ero(orgy.id);
        era.println();
        wait_flag =
          sys_like_chara(
            lover,
            orgy.id,
            -get_random_value(0, 25 * era.get(`talent:${lover}:얀데레`)),
          ) || wait_flag;
        wait_flag =
          sys_like_chara(
            lover,
            0,
            -get_random_value(50, 100 + 25 * era.get(`talent:${lover}:얀데레`)),
          ) || wait_flag;
        era.set(`cflag:${orgy.id}:자율훈련`, 0);
      } else {
        await get_custom_ero(orgy.id).join_3p_reject(lover);
        era.println();
        wait_flag =
          sys_like_chara(
            orgy.id,
            0,
            -get_random_value(25, 50 + 25 * era.get(`talent:${orgy.id}:얀데레`)),
          ) || wait_flag;
        wait_flag =
          sys_like_chara(
            lover,
            0,
            get_random_value(50, 100 + 25 * era.get(`talent:${lover}:얀데레`)),
          ) || wait_flag;
      }
      wait_flag && (await era.waitAnyKey());
    }
    await print_ero_page(lover);
    await end_ero_and_show_result(true);
    life_marks.marital_rape = 0;
  }
  if (continue_flag) {
    await next_week();
    if (era.get('flag:현재위치') === rest_loc) {
      era.set('flag:현재위치', cur_loc);
    }
  }
}

/** @type {Record<string,function(number,function(number,number,number):Promise,{after_select:boolean,homepage:boolean,week_start:boolean}):Promise<*>>} */
const handlers = {};

handlers[location_enum.basement] = basement;
handlers[location_enum.beach] = require('#/page/homepage/beach');
handlers[location_enum.guangzhou] =
  handlers[location_enum.hongkong] =
  handlers[location_enum.paris] =
  handlers[location_enum.new_york] =
  handlers[location_enum.dubai] =
    require('#/page/homepage/foreign');
handlers[location_enum.office] = require('#/page/homepage/office');

/** @type {Record<string,function:Promise>} */
const basement_handlers = {};

basement_handlers[location_enum.basement] = async () => {
  await era.saveData(0, `${get_save_name()} (자동저장)`);
  era.set('flag:현재상호작용캐릭터', 0);
  await next_week();
};

module.exports = async () => {
  const flags = {
    after_select: true,
    homepage: true,
    week_start: false,
  };
  await game_guides.game_start();
  while (flags.homepage) {
    await era.clear();
    let flag_skip_this_week = false;
    let cur_location = era.get('flag:현재위치');

    if (!handlers[cur_location]) {
      cur_location = location_enum.office;
    }

    const my_life_marks = LifeEventMarks.get_marks(0);
    if (flags.week_start) {
      let count = 0;
      if (
        era.get('flag:게임오버') < 3 &&
        cur_location === location_enum.basement
      ) {
        era.set('flag:현재위치', location_enum.office);
      }
      page_header();
      if (await check_game_over()) {
        return;
      }
      if (
        cur_location === location_enum.basement &&
        my_life_marks.b_timer > 0
      ) {
        cur_location = location_enum.office;
        era.drawLine();
        await era.printAndWait([
          '소름 끼치는 일주일을 보낸 뒤 ',
          get_chara_talk(0).get_colored_name(),
          '은(는) 학원의 구조대에 의해 지하실에서 구출되었다……',
        ]);
        const jpy = Math.ceil(era.get('flag:현재코인') / 2);
        if (jpy > 0) {
          await era.printAndWait('……하지만 지난주 결근에 대한 벌금으로 예금의 절반이 공제되었다.');
          era.add('flag:현재코인', -jpy);
        }
        sys_handle_escape_basement(false);
      }
      if (era.get('flag:현재월') <= 3 && era.get('flag:현재주') === 1) {
        const added_list = era.getAddedCharacters();
        gacha(
          era
            .getAllCharacters()
            .filter((x) => !added_list.includes(x) && x < first_child_id),
          get_random_value(2, 5),
        ).forEach((chara_id) => init_chara(chara_id));
      }
      start_machine_gun(event_hooks.week_start);
      while (
        !flag_skip_this_week &&
        (random_event = sys_get_random_event(event_hooks.week_start)) !==
          undefined
      ) {
        era.drawLine();
        flag_skip_this_week = (await random_event()) || flag_skip_this_week;
        count++;
      }
      stop_machine_gun(event_hooks.week_start);
      const force_be = era.get('flag:강제배드엔딩');
      if (force_be) {
        await era.clear();
        era.drawLine();
        await get_custom_edu(force_be).crazy_fan_end();
        era.print('GAME OVER', {
          align: 'center',
          color: buff_colors[3],
          fontSize: '3rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait(
          get_random_entry([
            '일식이 시작되면 만물은 빛을 잃는다. —— 데니스 오켈리',
            '두견새가 울지 않으면 죽여버리겠다. —— 오다 노부나가',
            '수사 과정에서 나는 최후이자 최고의 상소 법원이다. —— 셜록 홈즈',
            '세상은 성패로 인물을 논하니, 조조 또한 영웅의 반열에 든다. —— 소식',
            '위대한 우마무스메를 소유한 자는 가장 위대한 옥좌를 소유한 것이다. —— 처칠',
          ]),
          {
            align: 'center',
          },
        );
        return;
      }
      if (await check_game_over(true)) {
        return;
      }
      await anniversary();
      if (cur_location === location_enum.basement) {
        era.set('flag:현재위치', location_enum.basement);
        await era.clear();
        basement.page_header();
        my_life_marks.b_timer = get_random_value(
          Math.min(23, count + 6) * 60,
          24 * 60 - 1,
        );
        const owners = basement_owners.get(),
          owner = owners[0],
          owner_marks = LifeEventMarks.get_marks(owner);
        basement_owners.clear();
        basement_owners.push(owner);
        era.add('exp:0:감금횟수', 1);
        era.add(`exp:${owner}:감금횟수`, 1);
        era.set('status:0:숙면', 1);
        basement_queue.add_action(
          new BasementAction(0, my_life_marks.b_timer, action_type_enum.get_up),
        );
        owner_marks.b_s_level = Math.max(
          Math.floor(
            (era.get(`love:${owner}`) * (era.get('flag:극단적행위제한') || 1) -
              era.get(`relation:${owner}:0`)) /
              200,
          ),
          1,
        );
        my_life_marks.b_now = my_life_marks.b_enhance = Math.max(
          owner_marks.b_s_level + get_random_value(-1, 1),
          1,
        );
        my_life_marks.b_start = owner_marks.b_start = 1;
        my_life_marks.b_status = owner_marks.b_status =
          1 << basement_status_enum.idle;
        owner_marks.b_escape = 0;
        if (
          era.get('flag:현재턴수') % 48 > 0 &&
          my_life_marks.b_timer > 6 * 60 + 30 &&
          my_life_marks.b_timer < 17 * 60
        ) {
          owner_marks.b_status = 1 << basement_status_enum.outside;
          basement_queue.add_action(
            new BasementAction(owner, 17 * 60, action_type_enum.back_basement),
            true,
          );
        }
        const rescue_chara =
          owners[1] ||
          get_random_entry(
            sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
              (e) =>
                e > 0 &&
                e !== owner &&
                !common_no_action_check(e) &&
                era.get(`love:${e}`) >= 75 &&
                !era.get(`status:${e}:부상`) &&
                era.get(`base:${e}:스트레스`) < pressure_border.depression,
            ),
          );
        if (rescue_chara) {
          basement_queue.add_action(
            new BasementAction(
              rescue_chara,
              3 * minutes_in_a_day + get_random_value(0, minutes_in_a_day),
              action_type_enum.rescue,
            ),
          );
        }
      }
    }
    era.set('flag:현재위치', cur_location);
    if (flag_skip_this_week) {
      era.drawLine();
      await next_week();
      continue;
    }

    const chara_id = era.get('flag:현재상호작용캐릭터');

    if (cur_location !== location_enum.basement) {
      sys_change_status_by_base(0);
      if (chara_id > 0) {
        sys_change_status_by_base(chara_id);
      }
      await era.clear();
      page_header(true);
      print_curr_chara(chara_id);
      era.drawLine();
      let hook = -1;
      if (flags.week_start) {
        if (chara_id) {
          hook = event_hooks.good_morning;
        }
      } else if (flags.after_select) {
        if (chara_id) {
          hook = event_hooks.select;
        }
      }
      flags.week_start = flags.after_select = false;
      if (hook > 0) {
        await run_custom_daily(chara_id, hook);
      } else {
        const note_list = [...notes.common];
        if (era.get('flag:메지로성스타일') === 1) {
          note_list.push(...notes.call);
        }
        sys_filter_chara('cflag', '모집상태', recruit_flags.yes).forEach(
          (e) => {
            if (era.get(`cflag:${e}:육성턴수합산`) < 3 * 48 && notes[e]) {
              note_list.push(...notes[e]);
            }
          },
        );
        const note = note_list[notes_index++ % note_list.length];
        say_by_passer_by(...note);
      }
    }

    await handlers[cur_location](
      chara_id,
      basement_handlers[cur_location] || save_and_next_week,
      flags,
    );
  }
};
