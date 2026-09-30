const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_awake,
  sys_check_train_enabled,
} = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const select_target = require('#/page/components/select-target');
const { generate_race_button } = require('#/page/homepage/snippets');
const print_exp_page = require('#/page/page-exp');
const print_load_page = require('#/page/page-load-game');
const race_page = require('#/page/page-race');
const reg_race_page = require('#/page/page-register-race');
const report_race_page = require('#/page/page-report-race');
const print_save_page = require('#/page/page-save-game');
const print_storage_page = require('#/page/page-storage');
const print_train_page = require('#/page/page-train');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

/**
 * @param {number} cid
 * @param {function(number,number,number):Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async function (cid, save_and_next_week, flags) {
  const celebration = get_celebration();
  const celebration_cost = 50 * (era.get('cflag:0:축제이벤트표시') + 1);
  const cur_weeks = era.get('flag:현재턴수');
  const event_marks = EventMarks.get(cid);
  const growth_stage = era.get(`cflag:${cid}:성장단계`);
  const not_in_same_loc =
    era.get(`cflag:${cid}:위치`) !== era.get('cflag:0:위치');
  const personal_action = get_custom_check(cid).get_personal_action();
  const registered_race = sys_reg_race(cid).curr;
  era.drawLine();
  era.printInColRows(
    [
      {
        accelerator: 100,
        content: '팀 목록 보기',
        type: 'button',
      },
      {
        accelerator: 101,
        config: {
          disabled: !sys_check_train_enabled(cid) || !sys_check_awake(0),
          width: 6,
        },
        // 训自己的话显示自主训练
        content: `${!cid && sys_check_train_enabled(cid) ? '스스로 ' : ''}트레이닝`,
        type: 'button',
      },
      generate_race_button(cid, registered_race.week, cur_weeks),
      {
        accelerator: 103,
        config: {
          disabled:
            // 当然不能上自己
            !cid ||
            // 没有性成熟不能上
            growth_stage < 2 ||
            !sys_check_awake(0) ||
            not_in_same_loc,
          width: 6,
        },
        content: '우마뾰이 제안',
        type: 'button',
      },
      {
        accelerator: 999,
        config: {
          buttonType: event_marks.check(event_hooks.week_end)
            ? 'danger'
            : 'warning',
          width: 6,
        },
        content: '다음 주까지 휴식',
        type: 'button',
      },
    ],
    [
      {
        accelerator: 201,
        // 虚空聊天就更过分了!
        config: { disabled: !cid || !sys_check_awake(0), width: 6 },
        content: '잡담',
        type: 'button',
      },
      cid > 0 && era.get(`cflag:${cid}:축제이벤트표시`) > 0
        ? {
            accelerator: 202,
            config: {
              buttonType: 'danger',
              disabled:
                !sys_check_awake(cid) ||
                !sys_check_awake(0) ||
                era.get(`base:${cid}:기력`) < 50 ||
                era.get('base:0:기력') < celebration_cost ||
                not_in_same_loc,
              width: 6,
            },
            content: `같이 ${celebration} 축하`,
            type: 'button',
          }
        : { content: [], type: 'text' },
      cid > 0 && era.get(`status:${cid}:생일`) === 2
        ? {
            accelerator: 203,
            config: {
              buttonType: 'danger',
              disabled:
                !sys_check_awake(cid) ||
                !sys_check_awake(0) ||
                era.get(`base:${cid}:기력`) < 50 ||
                era.get('base:0:기력') < celebration_cost,
              width: 6,
            },
            content: '생일 축하',
            type: 'button',
          }
        : { content: [], type: 'text' },
      personal_action.name
        ? {
            accelerator: 204,
            config: { width: 6 },
            content: personal_action.name,
            type: 'button',
          }
        : { content: [], type: 'text' },
    ],
    [
      {
        accelerator: 401,
        config: { width: 6 },
        content: '캐릭터 정보',
        type: 'button',
      },
      {
        accelerator: 402,
        config: { width: 6 },
        content: '레이스 정보',
        type: 'button',
      },
      {
        accelerator: 403,
        config: { disabled: !sys_check_awake(0), width: 6 },
        content: '소지품',
        type: 'button',
      },
      {
        accelerator: 900,
        config: { width: 6 },
        content: '세이브',
        type: 'button',
      },
      {
        accelerator: 901,
        config: { width: 6 },
        content: '로드',
        type: 'button',
      },
    ],
  );
  const ret = await era.input();

  switch (ret) {
    case 100:
      flags.after_select =
        era.set('flag:현재상호작용캐릭터', await select_target()) !== cid;
      break;
    case 101:
      era.set('flag:현재위치', location_enum.beach_train);
      await print_train_page();
      era.set('flag:현재위치', location_enum.beach);
      break;
    case 102:
      if (registered_race.week === cur_weeks) {
        era.set('flag:현재위치', location_enum.race);
        await race_page(registered_race.race);
        era.set('flag:현재위치', location_enum.beach);
      } else {
        await reg_race_page();
      }
      break;
    case 103:
      if (await goto_sex(cid, location_enum.summer_home)) {
        flags.week_start = true;
      }
      era.set('flag:현재위치', location_enum.beach);
      break;
    case 201:
      era.drawLine();
      await run_custom_daily(cid, event_hooks.talk);
      break;
    case 202:
      era.set('flag:현재위치', location_enum.beach_market);
      sys_change_attr_and_print(0, '기력', -celebration_cost);
      sys_change_attr_and_print(cid, '기력', -50);
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.celebration, cid)())) {
        era.drawLine();
        era.print([
          '【',
          get_chara_talk(cid).get_colored_name(),
          '과(와) 같이 ',
          celebration,
          '을(를) 축하했다】',
        ]);
        await run_custom_daily(cid, event_hooks.celebration, {});
      }
      era.set('flag:현재위치', location_enum.beach);
      break;
    case 203:
      era.drawLine();
      sys_change_attr_and_print(0, '기력', -celebration_cost);
      sys_change_attr_and_print(cid, '기력', -50);
      era.print([
        '【向 ',
        get_chara_talk(cid).get_colored_name(),
        ' 祝贺生日快乐】',
      ]);
      await run_custom_daily(cid, event_hooks.birthday, {});
      break;
    case 204:
      era.drawLine();
      await personal_action.handle();
      await era.waitAnyKey();
      break;
    case 401:
      await print_exp_page();
      break;
    case 402:
    case 991:
      await report_race_page();
      break;
    case 403:
      await print_storage_page();
      break;
    case 900:
      await print_save_page();
      break;
    case 901:
      await print_load_page();
      break;
    case 990:
      switch_image();
      break;
    case 999:
      flags.week_start = true;
  }
  if (flags.week_start) {
    await save_and_next_week(
      cid,
      location_enum.beach,
      location_enum.summer_home,
    );
  }
};
