const era = require('#/era-electron');

const sys_handle_prison_guides = require('#/system/basement/sys-handle-prison-guides');
const sys_handle_time_in_basement = require('#/system/basement/sys-handle-time-in-basement');
const sys_get_status = require('#/system/chara/sys-get-status');
const sys_get_intelligence_ratio_in_fight = require('#/system/ero/fight/sys-get-intelligence-ratio');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const {
  sys_change_attr_and_print,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');

const print_cur_chara_info = require('#/page/components/cur-chara-info');
const { get_progress_bar } = require('#/page/components/page-header');
const { print_chara_info } = require('#/page/page-exp');
const print_load_page = require('#/page/page-load-game');
const print_save_page = require('#/page/page-save-game');

const basement_queue = require('#/event/basement-queue');
const { get_custom_basement } = require('#/event/basement/basement-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');
const { log_max_wp, minutes_in_a_day } = require('#/utils/value-utils');

const {
  action_type_enum,
  basement_status_enum,
  escape_enum,
} = require('#/data/basement-const');
const BasementAction = require('#/data/event/basement-action');
const basement_owners = require('#/data/event/basement-owners');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const basement_desc = [
  '완전히 무방비한 상태다',
  '약간의 잔꾀만으로도 충분해 보인다',
  '문이 견고하여 열기 어려워 보인다',
  '까다로운 장애물들이 다수 존재한다',
  '모든 시설이 철통같이 요새화되어 있다',
  '어떠한 반항도 이곳에는 무의미해 보인다',
];

/**
 * @param {[]} info_list
 * @param info
 */
function handle_push_info(info_list, ...info) {
  if (info_list.length > 0) {
    info_list.push({ isBr: true });
  }
  info_list.push(...info);
}

/**
 * @param {number} min
 * @param {number} max
 * @param {boolean} [is_float]
 * @returns {number}
 */
function get_random_value(min, max, is_float) {
  if (min >= max) {
    return min;
  }
  const life_marks = LifeEventMarks.get_marks(0);
  life_marks.b_r_seed = (life_marks.b_r_seed * 9301 + 49297) % 233280;
  const value = min + ((max - min + 1) * life_marks.b_r_seed) / 233280;
  if (is_float) {
    return (value * (max - min)) / (max - min + 1);
  }
  return Math.floor(value);
}

function page_header() {
  const status_list = sys_get_status(0);
  era.printInColRows(
    [{ type: 'divider' }],
    {
      columns: [
        ...get_progress_bar(),
        {
          config: { width: 2 },
          content: '상태',
          type: 'text',
        },
        {
          config: { width: 22 },
          content: status_list.length > 0 ? status_list : '정상',
          type: 'text',
        },
      ],
      config: { width: 16 },
    },
    {
      columns: [
        {
          content: [
            '현재위치 ',
            {
              content: '지하실',
              fontWeight: 'bold',
            },
          ],
          type: 'text',
        },
      ],
      config: { width: 8 },
    },
  );
}

sys_handle_time_in_basement.init(get_random_value);

/**
 * @param _
 * @param {function():Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (_, save_and_next_week, flags) => {
  const my_life_marks = LifeEventMarks.get_marks(0),
    basement_info = [],
    me = get_chara_talk(0);
  if (flags.week_start) {
    my_life_marks.b_r_seed = (era.get('flag:랜덤시드') * 9301 + 49297) % 233280;
    flags.week_start = false;
  }
  if (my_life_marks.b_timer >= 7 * minutes_in_a_day) {
    flags.week_start = true;
    return await save_and_next_week();
  }
  while (!sys_check_awake(0)) {
    await sys_handle_time_in_basement(my_life_marks, basement_owners);
  }
  basement_queue.clean_actions(
    (e) => e.chara_id === 0 && e.type === action_type_enum.action_end,
  );
  my_life_marks.b_status = 1 << action_type_enum.idle;
  my_life_marks.b_stamina_buff = 0;
  my_life_marks.b_time_buff = 0;
  await era.clear();
  page_header();
  const chara_list = [
    0,
    ...sort_list(
      basement_owners.filter(
        (e) =>
          LifeEventMarks.get_marks(e).b_status !==
          1 << basement_status_enum.outside,
      ),
      (e, i) => (!sys_check_awake(e) << 1) + i,
      true,
    ),
  ];
  if (chara_list.length > 1) {
    print_cur_chara_info(chara_list[1], undefined, chara_list[2]);
  }
  let strike = false,
    is_awake = 0;
  if (chara_list.length > 1) {
    if (
      chara_list.length === 2 &&
      LifeEventMarks.get_marks(chara_list[1]).b_status ===
        1 << basement_status_enum.just_back
    ) {
      strike = true;
      is_awake = 1;
      handle_push_info(
        basement_info,
        ...get_custom_basement(chara_list[1]).get_basement_info(true),
      );
    } else {
      chara_list.slice(1).forEach((chara_id) => {
        is_awake += sys_check_awake(chara_id);
        handle_push_info(
          basement_info,
          ...get_custom_basement(chara_id).get_basement_info(),
        );
      });
    }
    handle_push_info(
      basement_info,
      '어스름한 방 안…… ',
      basement_desc[my_life_marks.b_now],
      '……',
    );
  } else {
    handle_push_info(
      basement_info,
      '어둡고 텅 빈 방 안…… ',
      basement_desc[my_life_marks.b_now],
      '……',
    );
  }
  const action_list = [];
  if (is_awake > 0) {
    action_list.push({
      async h() {
        action_time = get_random_value(30, 60);
        my_life_marks.b_time_buff = -1;
        const chara = get_chara_talk(chara_list[1]);
        await era.printAndWait([
          '【',
          me.get_colored_name(),
          '은(는)',
          ...(is_awake === 2
            ? [chara.sex, '들']
            : [' ', chara.get_colored_name()]),
          '의 비위를 맞추려 시도했다】',
        ]);
        await get_custom_basement(chara_list[1]).flatter(
          is_awake === 2 ? chara_list[2] : undefined,
        );
        chara_list
          .slice(1)
          .filter((_, i) => i < is_awake)
          .forEach((e) => {
            sys_like_chara(e, 0, get_random_value(10, 20), false);
            const life_marks = LifeEventMarks.get_marks(e),
              relation = era.get(`relation:${e}:0`);
            if (
              relation > 0 &&
              life_marks.b_s_level > 1 &&
              get_random_value(0, 100) <
                (100 * relation) /
                  ((era.get('flag:극단적행위제한') || 1) * era.get(`love:${e}`))
            ) {
              life_marks.b_s_level--;
            }
          });
      },
      n: '비위 맞추기',
    });
  } else {
    action_list.push({
      async h() {
        action_time = Math.ceil(
          get_random_value(60, 90) *
            (1 - (0.5 * Math.log(era.get('base:0:스피드'))) / log_max_wp),
        );
        my_life_marks.b_status = 1 << basement_status_enum.escape;
        my_life_marks.b_stamina_buff = -3;
        my_life_marks.b_time_buff = -1.5;
        if (
          get_random_value(0, 100) <
          (100 -
            10 * era.get('flag:극단적행위제한') -
            50 * (era.get('base:0:체력') / era.get('maxbase:0:체력') < 0.3)) /
            Math.max(my_life_marks.b_now + !!my_life_marks.b_now + 1, 2)
        ) {
          my_life_marks.b_now--;
          if (my_life_marks.b_now < 0) {
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 성공적으로 잠금을 해제하고 지하실에서 탈출했다!',
            ]);
            basement_owners.for_each((e) =>
              sys_change_pressure(e, get_random_value(100, 500)),
            );
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 한 층의 잠금 장치를 파악했다!',
            ]);
          }
        } else {
          await era.printAndWait([me.get_colored_name(), '은(는) 잠금 해제에 실패했다……']);
        }
      },
      n: '탈출 시도',
    });
  }
  action_list.push(
    {
      async h() {
        action_time = get_random_value(15, 30);
        my_life_marks.b_time_buff = 1;
      },
      n: '우두커니 앉아있기',
    },
    {
      async h() {
        action_time = get_random_value(45, 90);
        era.set('status:0:숙면', 1);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 기력을 회복하기 위해 침대에 누워 잠을 청하기로 했다……',
        ]);
      },
      n: '잠깐 자기',
    },
  );
  if (!my_life_marks.b_food_buff) {
    action_list.push({
      async h() {
        action_time = get_random_value(5, 10);
        await era.printAndWait([
          '지하실 주인이 ',
          me.get_colored_name(),
          '에게 남겨둔 음식이 있다. ',
          me.get_colored_name(),
          '은(는) 그것을 조금 먹기로 했다……',
        ]);
        if (my_life_marks.b_food_medicine) {
          await era.printAndWait([
            me.get_colored_name(),
            '의 심박수가 빨라지고 몸이 뜨거워지기 시작했다. 동시에 강한 현기증이 몰려온다……',
          ]);
          era.set('status:0:우마뾰이S', 1);
          action_time = Math.ceil(
            get_random_value(240, 360) *
              (1 - (0.5 * Math.log(era.get('base:0:근성'))) / log_max_wp),
          );
          my_life_marks.b_food_medicine = 0;
        }
        my_life_marks.b_food_buff = 3.5;
        basement_queue.add_action(
          new BasementAction(
            0,
            my_life_marks.b_timer + 4 * 60,
            action_type_enum.digestive_end,
          ),
        );
      },
      n: '음식 섭취',
    });
  }
  let action_time;
  if (is_awake > 0) {
    action_list.push({
      async h() {
        await sys_handle_time_in_basement.handle_rape(
          chara_list.filter(sys_check_awake),
          my_life_marks,
        );
      },
      n: '침대로 유혹',
    });
    if (strike && chara_list.length === 2) {
      action_list.push({
        async h() {
          sys_change_attr_and_print(0, '체력', -get_random_value(75, 125));
          sys_change_attr_and_print(0, '기력', -get_random_value(75, 125));
          sys_like_chara(chara_list[1], 0, -get_random_value(75, 125), false);
          sys_change_pressure(chara_list[1], get_random_value(1000, 2000));
          if (
            get_random_value(0, 100) <
            60 *
              (sys_get_strength_ratio_in_fight(0, chara_list[1]) +
                sys_get_intelligence_ratio_in_fight(0, chara_list[1]))
          ) {
            LifeEventMarks.get_marks(chara_list[1]).b_escape =
              escape_enum.strike;
            era.print('【기습 성공】');
            await get_custom_basement(chara_list[1]).strike_success();
            my_life_marks.b_status = 1 << basement_status_enum.escape;
            my_life_marks.b_now = -1;
            action_time = get_random_value(5, 10);
          } else {
            era.print('【기습 실패】');
            await get_custom_basement(chara_list[1]).strike_fail();
          }
          if (my_life_marks.b_now >= 0) {
            my_life_marks.b_enhance = Math.min(
              my_life_marks.b_enhance +
                basement_owners.get().reduce((p, c) => {
                  const life_marks = LifeEventMarks.get_marks(c);
                  life_marks.b_s_level = Math.min(5, life_marks.b_s_level + 2);
                  return (
                    p + (get_random_value(0, 100) < life_marks.b_s_level * 40)
                  );
                }, 0) +
                1,
              5,
            );
            era.set('status:0:숙면', 2);
            basement_queue.add_action(
              new BasementAction(
                0,
                my_life_marks.b_timer + get_random_value(180, 240),
                action_type_enum.get_up,
              ),
            );
          }
        },
        n: '기습 공격',
      });
    } else {
      action_list.push({
        async h() {
          sys_change_attr_and_print(0, '체력', -get_random_value(125, 175));
          sys_change_attr_and_print(0, '기력', -get_random_value(100, 150));
          const beat_list = chara_list.slice(1).filter(sys_check_awake);
          let win = true;
          for (const chara_id of beat_list) {
            sys_like_chara(chara_id, 0, -get_random_value(75, 125), false);
            sys_change_pressure(chara_id, get_random_value(1000, 1500));
            win =
              get_random_value(0, 100) <
                100 * sys_get_strength_ratio_in_fight(0, chara_id) && win;
            if (win) {
              era.print('【반항 성공】');
              await get_custom_basement(chara_id).battle_success();
            } else {
              era.print('【반항 실패】');
              await get_custom_basement(chara_id).battle_fail();
              break;
            }
          }
          if (win) {
            era.drawLine();
            if (
              get_random_value(0, 100) <
              (100 +
                era.get('base:0:스피드') / 20 -
                10 * era.get('flag:극단적행위제한')) /
                Math.max(my_life_marks.b_now + !!my_life_marks.b_now + 1, 2)
            ) {
              beat_list.forEach(
                (e) =>
                  (LifeEventMarks.get_marks(e).b_escape = escape_enum.beat),
              );
              era.print('【잠금 해제 성공】');
              await get_custom_basement(beat_list[0]).battle_escape();
              my_life_marks.b_status = 1 << basement_status_enum.escape;
              my_life_marks.b_now = -1;
              action_time = get_random_value(10, 15);
            } else {
              era.print('【잠금 해제 실패】');
              await get_custom_basement(beat_list[0]).battle_prison();
            }
            era.drawLine();
          }
          if (my_life_marks.b_now >= 0) {
            my_life_marks.b_enhance = Math.min(
              my_life_marks.b_enhance +
                basement_owners.get().reduce((p, c) => {
                  const life_marks = LifeEventMarks.get_marks(c);
                  life_marks.b_s_level = Math.min(
                    5,
                    life_marks.b_s_level + 1 + (chara_list.indexOf(c) !== -1),
                  );
                  return (
                    p + (get_random_value(0, 100) < life_marks.b_s_level * 40)
                  );
                }, 0),
              5,
            );
            era.set('status:0:숙면', 2);
            basement_queue.add_action(
              new BasementAction(
                0,
                my_life_marks.b_timer + get_random_value(180, 240),
                action_type_enum.get_up,
              ),
            );
          }
        },
        n: '정면으로 반항',
      });
    }
    if (is_awake === 1) {
      action_list.push({
        async h() {
          action_time = get_random_value(5, 10);
          era.print([
            '【',
            get_chara_talk(0).get_colored_name(),
            '은(는) 해방을 요청했다】',
          ]);
          if (
            era.get(`relation:${chara_list[1]}:0`) >
            (era.get('flag:극단적행위제한') || 1) *
              era.get(`love:${chara_list[1]}`)
          ) {
            await get_custom_basement(chara_list[1]).ask_release_agree();
            my_life_marks.b_now = -1;
            LifeEventMarks.get_marks(chara_list[1]).b_escape = -1;
            my_life_marks.b_status = 1 << basement_status_enum.escape;
          } else {
            await get_custom_basement(chara_list[1]).ask_release_reject();
            sys_like_chara(chara_list[1], 0, -get_random_value(25, 75), false);
          }
        },
        n: '해방 요청',
      });
    }
    action_list.push({
      async h() {
        action_time = get_random_value(1, 5);
        era.print([
          '【',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          get_chara_talk(chara_list[1]).get_colored_name(),
          '에게 시간을 물었다】',
        ]);
        await get_custom_basement(chara_list[1]).ask_time(
          my_life_marks.b_timer / minutes_in_a_day + 1,
          Math.floor((my_life_marks.b_timer % minutes_in_a_day) / 60),
          my_life_marks.b_timer % 60,
        );
      },
      n: '시간 확인',
    });
  }
  era.printInColRows(
    [
      { type: 'divider' },
      {
        content: basement_info,
        type: 'text',
      },
      { type: 'divider' },
    ],
    action_list.map((e, i) => ({
      accelerator: 100 + i,
      config: { width: 6 },
      content: e.n,
      type: 'button',
    })),
    [
      {
        accelerator: 400,
        config: { width: 6 },
        content: '개인정보',
        type: 'button',
      },
      chara_list.length > 1
        ? {
            accelerator: 401,
            config: { width: 6 },
            content: '상대정보',
            type: 'button',
          }
        : undefined,
      {
        accelerator: 500,
        config: { width: 6 },
        content: '탈출 가이드',
        type: 'button',
      },
      {
        accelerator: 900,
        config: { width: 6 },
        content: '저장',
        type: 'button',
      },
      {
        accelerator: 901,
        config: { width: 6 },
        content: '불러오기',
        type: 'button',
      },
    ].filter((e) => e),
  );
  const ret = await era.input();
  switch (ret) {
    case 400:
      await print_chara_info(0, chara_list);
      break;
    case 401:
      await print_chara_info(chara_list[1], chara_list);
      break;
    case 500:
      await sys_handle_prison_guides();
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
    default:
      era.drawLine();
      await action_list[ret - 100].h();
  }
  if (action_time) {
    basement_queue.add_action(
      new BasementAction(
        0,
        my_life_marks.b_timer + action_time,
        sys_check_awake(0)
          ? action_type_enum.action_end
          : action_type_enum.get_up,
      ),
    );
  }
  if (ret < 400) {
    do {
      await sys_handle_time_in_basement(my_life_marks, basement_owners);
    } while (
      !sys_check_awake(0) ||
      my_life_marks.b_status === 1 << basement_status_enum.sex ||
      my_life_marks.b_status === 1 << basement_status_enum.escape
    );
  }
  flags.after_select = true;
};

module.exports.page_header = page_header;