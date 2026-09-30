const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const {
  sys_change_attr_and_print,
  sys_handle_action,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_act_disabled,
  sys_check_awake,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const take_care = require('#/page/components/take-care');
const print_juel_shop_page = require('#/page/page-juel-shop');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const {
  attr_background_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_celebration,
  get_love_info,
  get_relation_info,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

/**
 * @param {CharaTalk} chara
 * @param {{color:string,content:string,[title]:string}|string|undefined} title
 * @param {{name:string,[handle]:function():Promise}} talk_cb
 * @param {{name:string,handle:function():Promise}|{name:string,[loc]:number,fail_cb:function()}} sex_cb
 * @param {{name:string,handle:function():Promise}|{name:string,loc:number,print_out_page:function():Promise}} out_cb
 * @param {{name:string,[handle]:function():Promise}} cele_cb
 * @param {{name:string,handle:function():Promise,[disabled]:boolean}|{}} func_cb
 * @param {{name:string,[handle]:function():Promise}} back_cb
 * @param {function()} [birth_cb]
 * @returns {Promise<boolean|void>}
 */
async function npc_common(
  chara,
  title,
  talk_cb,
  sex_cb,
  out_cb,
  cele_cb,
  func_cb,
  back_cb,
  birth_cb,
) {
  const relation = get_relation_info(chara.id);
  const celebration_cost = 50 * (era.get('cflag:0:축제이벤트표시') + 1);
  const love = get_love_info(chara.id);
  const relation_check =
    era.get(`relation:${chara.id}:0`) <= 225 &&
    era.get(`love:${chara.id}`) < 50;
  const is_awake = sys_check_awake(chara.id);
  const player_base = {
    stamina: era.get('base:0:체력'),
    time: era.get('base:0:기력'),
  };
  const chara_base = {
    stamina: era.get(`base:${chara.id}:체력`),
    time: era.get(`base:${chara.id}:기력`),
  };
  const is_recruit =
    era.get(`cflag:${chara.id}:모집상태`) === recruit_flags.yes;
  const image = era.get(`cstr:${chara.id}:이미지`);
  era.setVerticalAlign('middle');
  const buttons = [
    {
      b: {
        config: { disabled: era.get('base:0:기력') < 200 || !is_awake },
        content: talk_cb.name,
      },
      async h() {
        sys_change_attr_and_print(0, '기력', -200);
        talk_cb.handle && (await talk_cb.handle());
        era.println();
        sys_like_chara(chara.id, 0, get_random_value(5, 20)) &&
          (await era.waitAnyKey());
      },
    },
    {
      b: { content: sex_cb.name },
      async h() {
        if (sex_cb.handle) {
          await sex_cb.handle();
        } else {
          const temp = era.get('flag:현재위치');
          switch (
            await goto_sex(chara.id, sex_cb.loc || era.get('flag:현재위치'))
          ) {
            case true:
              await era.printAndWait([
                chara.get_colored_name(),
                ' 与 ',
                get_chara_talk(0).get_colored_name(),
                ' 约定晚上在家见面……',
              ]);
              break;
            case 2:
              sex_cb.fail_cb();
          }
          era.set('flag:현재위치', temp);
        }
      },
    },
    {
      b: {
        config: { disabled: era.get('base:0:기력') < 200 || !is_awake },
        content: '선물 주기',
      },
      async h() {
        era.drawLine();
        era.print([
          get_chara_talk(chara.id).get_colored_name(),
          '에게 선물을 주었다...',
        ]);
        era.println();
        await run_custom_daily(chara.id, event_hooks.office_gift);
      },
    },
    {
      b: {
        config: {
          disabled:
            !is_awake ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.gate, chara.id),
              player_base,
              chara_base,
            ) > 0 ||
            relation_check,
          buttonType: EventMarks.get(chara.id).check(
            event_hooks.out_start,
            event_hooks.out_river,
            event_hooks.out_shopping,
            event_hooks.out_church,
            event_hooks.out_station,
            event_hooks.back_school,
          )
            ? 'danger'
            : 'warning',
        },
        content: out_cb.name,
      },
      async h() {
        const temp = era.get('flag:현재상호작용캐릭터');
        era.set('flag:현재상호작용캐릭터', chara.id);
        if (out_cb.handle) {
          await out_cb.handle();
        } else {
          sys_handle_action(
            sys_get_move_cost(location_enum.gate, chara.id),
            chara.id,
          );
          era.set('flag:현재위치', location_enum.gate);
          await out_cb.print_out_page();
          era.set('flag:현재위치', out_cb.loc);
        }
        era.set('flag:현재상호작용캐릭터', temp);
      },
    },
  ];
  if (func_cb.handle !== undefined) {
    buttons.push({
      b: {
        config: { disabled: !is_awake || func_cb.disabled },
        content: func_cb.name,
      },
      h: func_cb.handle,
    });
  }
  if (era.get(`cflag:${chara.id}:축제이벤트표시`) > 0) {
    buttons.push({
      b: {
        config: {
          buttonType: 'danger',
          disabled:
            !is_awake ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost ||
            relation_check,
        },
        content: cele_cb.name,
      },
      async h() {
        if (cele_cb.handle) {
          await cele_cb.handle();
        }
        sys_change_attr_and_print(0, '기력', -celebration_cost);
        sys_change_attr_and_print(chara.id, '기력', -50);
        era.drawLine();
        if (
          !(await sys_get_random_event(event_hooks.celebration, chara.id)())
        ) {
          era.drawLine();
          era.print([
            '【',
            chara.get_colored_name(),
            '과(와) 함께 ',
            get_celebration(),
            '을(를) 축하했다】',
          ]);
          await run_custom_daily(chara.id, event_hooks.celebration, {});
        }
      },
    });
  }
  if (era.get(`status:${chara.id}:생일`) === 2) {
    buttons.push({
      b: {
        config: {
          buttonType: 'danger',
          disabled:
            !is_awake ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost ||
            relation_check,
        },
        content: '생일 축하',
      },
      async h() {
        birth_cb && (await birth_cb());
        sys_change_attr_and_print(0, '기력', -celebration_cost);
        sys_change_attr_and_print(chara.id, '기력', -50);
        era.print(['【', chara.get_colored_name(), '의 생일을 축하해 주었다】']);
        await run_custom_daily(chara.id, event_hooks.birthday, {});
      },
    });
  }
  if (era.get(`cflag:${chara.id}:모집상태`) === recruit_flags.yes) {
    if (
      era.get(`cflag:${chara.id}:재육성가능`) > 0 ||
      !era.get(`cflag:${chara.id}:종족`)
    ) {
      buttons.push({
        b: {
          config: { disabled: era.get(`relation:${chara.id}:0`) < 76 },
          content:
            era.get(`cflag:${chara.id}:돌봄`) > 0 ? '돌보는 캐릭터 변경' : '돌봄 부탁',
        },
        h: take_care.bind(void 0, chara),
      });
    }
    if (
      era.get(`exp:${chara.id}:성관계횟수`) > era.get(`exp:${chara.id}:수면간횟수`)
    ) {
      buttons.push({
        b: { content: '상대 성적 능력 향상' },
        h: print_juel_shop_page.bind(void 0, chara.id),
      });
    }
  }
  if (
    era.get(`cflag:${chara.id}:호감거절`) > 0 &&
    era.get(`cflag:${chara.id}:호감거절`) === era.get(`love:${chara.id}`)
  ) {
    buttons.push({
      b: { content: '애정 이벤트 재발동' },
      async h() {
        era.set(`cflag:${chara.id}:호감거절`, 0);
        get_custom_check(chara.id).check_love_events();
        await era.printAndWait([
          chara.get_colored_name(),
          { content: '과(와) 의 관계를 다시 한번 되돌아보자……' },
        ]);
      },
    });
  }
  era.printInColRows(
    [
      {
        type: 'divider',
      },
    ],
    {
      columns: [
        {
          config: { width: 21, align: 'center' },
          content: [...(title ? [title, ' '] : []), chara.get_colored_name()],
          type: 'text',
        },
        {
          config: { width: 21 },
          names: `${image}_私_半身\t${image}_半身`,
          type: 'image.whole',
        },
      ],
      config: { width: 4 },
    },
    {
      columns: [
        { content: '\n', type: 'text' },
        ...(is_recruit
          ? [
              {
                config: { width: 2 },
                content: '체력',
                type: 'text',
              },
              {
                config: {
                  color: attr_background_colors['체력'],
                  height: 22,
                  width: 12,
                },
                inContent: `${Math.floor(era.get(`base:${chara.id}:체력`))}/${era.get(
                  `maxbase:${chara.id}:체력`,
                )}`,
                percentage:
                  (era.get(`base:${chara.id}:체력`) * 100) /
                  era.get(`maxbase:${chara.id}:체력`),
                type: 'progress',
              },
              { content: '', type: 'text' },
              {
                config: { width: 2 },
                content: '기력',
                type: 'text',
              },
              {
                config: {
                  color: attr_background_colors['기력'],
                  height: 22,
                  width: 12,
                },
                inContent: `${Math.floor(era.get(`base:${chara.id}:기력`))}/${era.get(
                  `maxbase:${chara.id}:기력`,
                )}`,
                percentage:
                  (era.get(`base:${chara.id}:기력`) * 100) /
                  era.get(`maxbase:${chara.id}:기력`),
                type: 'progress',
              },
              { content: '', type: 'text' },
              {
                config: { width: 2 },
                content: '상태',
                type: 'text',
              },
              {
                config: { width: 22 },
                content: get_status(chara.id),
                type: 'text',
              },
            ]
          : []),
        {
          config: { width: 2 },
          content: '호감',
          type: 'text',
        },
        {
          config: {
            color: relation_colors[relation[0]],
            width: is_recruit ? 4 : 22,
          },
          content: relation.join(' '),
          type: 'text',
        },
        { config: { width: 2 }, content: '애정', type: 'text' },
        {
          config: {
            color: love_colors[love[0]],
            width: is_recruit ? 4 : 22,
          },
          content: love.join(' '),
          type: 'text',
        },
      ],
      config: { width: 16 },
    },
    [
      { type: 'divider' },
      ...buttons.map((e, i) => ({
        ...e.b,
        config: { ...(e.b.config ?? {}), width: 8 },
        accelerator: i + 1,
        type: 'button',
      })),
      {
        accelerator: 99,
        content: back_cb.name,
        type: 'button',
      },
    ],
  );
  era.setVerticalAlign('top');
  const ret = await era.input();
  era.drawLine();
  if (ret === 99) {
    if (back_cb.handle) {
      await back_cb.handle();
    }
    return false;
  } else {
    await buttons[ret - 1].h();
  }
  if (!era.get(`base:${chara.id}:체력`)) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 체력이 다해 쉬러 갔다...',
    ]);
    era.set(`status:${chara.id}:숙면`, 1);
  }
  return sys_check_awake(chara.id);
}

module.exports = npc_common;
