const era = require('#/era-electron');

const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const { sys_get_ero_image } = require('#/system/ero/sys-calc-ero-image');
const {
  check_satisfied,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const check_ero_enabled = require('#/system/ero/sys-check-ero-action');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  get_characters_in_train,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero, run_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors, palam_colors } = require('#/data/color-const');
const {
  attr_background_colors,
  love_colors,
  mark_colors,
  relation_colors,
} = require('#/data/const.json');
const date_indicator = require('#/data/date-indicator');
const { mark_abbr, part_abbr } = require('#/data/ero/ero-alias.json');
const { lust_border, lust_from_palam } = require('#/data/ero/orgasm-const');
const {
  motion_enum,
  part_enum,
  part_names,
  up_enum,
} = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const {
  ero_action_names,
  ero_derive_check,
  ero_hooks,
} = require('#/data/event/ero-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_ero_status,
  get_love_info,
  get_relation_info,
} = require('#/data/info-generator');
const { location_enum, location_name } = require('#/data/locations');

/**
 * @param {number} cid
 * @returns {string}
 */
function get_chr(cid) {
  if (!cid) {
    return 'default';
  }
  const img = era.get(`cstr:${cid}:이미지`);
  const ret = [];
  switch (era.get('flag:현재위치')) {
    case location_enum.summer_home:
      ret.push(`${img}_夏私`, `${img}_泳`, `${img}_私`, `${img}`, `${img}_夏`);
      break;
    default:
      ret.push(
        `${img}_私`,
        `${img}`,
        `${img}_${era.get('flag:계절') > 0 ? '夏' : '冬'}`,
      );
  }
  ret.push('\tdefault');
  return ret.join('\t');
}

/**
 * @param cid
 * @returns {PrintedSpan[]}
 */
function get_ero_marks(cid) {
  const status_list = [];
  new Array(6).fill(0).forEach((_, i) => {
    const mark_name = era.get(`markname:${i}`);
    const mark = era.get(`mark:${cid}:${i}`);
    if (mark) {
      status_list.push({
        color: get_color(undefined, mark_colors[mark_name], mark / 3),
        content: `[${mark_abbr[mark_name]}${mark}]`,
      });
    }
  });
  if (era.get(`talent:${cid}:강철의의지`) > 0) {
    status_list.push({ color: mark_colors['강철'], content: '[강철]' });
  }
  return status_list.map((e) => {
    e.display = 'inline-block';
    return e;
  });
}

/**
 * @param {number} cid
 * @param {number} part
 * @param {number} offset
 * @returns {[TextObject,ProgressObject]}
 */
function get_palam_progress(cid, part, offset = 0) {
  const part_name = part_names[part];
  const param = Math.floor(era.get(`param:${cid}:${part_name}쾌감`));
  const limit = era.get(`tcvar:${cid}:${part_name}쾌감상한`);
  return [
    {
      config: { offset, width: 1 },
      content: part_abbr[part_name],
      type: 'text',
    },
    {
      config: {
        color: get_color(...palam_colors.progress, param / limit),
        height: 22,
        width: 3,
      },
      inContent: `${param}/${limit}`,
      outContent: '',
      percentage: (param * 100) / limit,
      type: 'progress',
    },
  ];
}

/** @returns {ColumnObject[]} */
function get_chara_info(cid) {
  /** @type {*[]} */
  const ret = [
    {
      config: { width: 4 },
      content: [get_chara_talk(cid).get_colored_name()],
      type: 'text',
    },
    {
      config: { width: 20 },
      content: get_ero_status(cid),
      type: 'text',
    },
  ];
  ['체력', '기력'].forEach((e) => {
    const val = era.get(`base:${cid}:${e}`);
    const limit = era.get(`maxbase:${cid}:${e}`);
    ret.push(
      { config: { width: 1 }, content: e.substring(0, 1), type: 'text' },
      {
        config: { color: attr_background_colors[e], height: 22, width: 3 },
        inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
        percentage: (val * 100) / limit,
        type: 'progress',
      },
    );
  });
  const s_penis = get_penis_size(cid);
  const s_virgin = era.get(`cflag:${cid}:질크기`);
  const l_param = [part_enum.mouth, part_enum.breast, part_enum.body];
  if (s_penis > 0) {
    l_param.push(part_enum.penis);
  }
  if (s_virgin > 0) {
    if (!s_penis) {
      l_param.push(part_enum.clitoris);
    }
    l_param.push(part_enum.virgin);
  }
  l_param.push(part_enum.anal, part_enum.sadism, part_enum.masochism);
  l_param.splice(0, 4).forEach((e) => ret.push(...get_palam_progress(cid, e)));
  ret.push({
    config: { width: 1 },
    content: '욕',
    type: 'text',
  });
  if (era.get('flag:현재위치') === location_enum.mejiro) {
    ret.push({
      config: { color: palam_colors.progress[1], height: 22, width: 3 },
      inContent: '일심동체',
      percentage: 100,
      type: 'progress',
    });
  } else if (
    (sys_check_hide_relation_and_love(cid) & 0b1) > 0 ||
    sys_check_limit_relation_and_love(cid)
  ) {
    const random_lust = get_random_value(0, lust_border.max) / lust_border.max;
    ret.push({
      config: {
        color: get_color(...palam_colors.progress, random_lust),
        height: 22,
        width: 3,
      },
      inContent: '?',
      percentage: random_lust * 100,
      type: 'progress',
    });
  } else {
    const lust = era.get(`base:${cid}:성욕`);
    const l_percent = Math.min(lust / lust_border.max, 1);
    ret.push({
      config: {
        color: get_color(...palam_colors.progress, l_percent),
        height: 22,
        width: 3,
      },
      inContent:
        lust === lust_border.limit ? '!' : `${(l_percent * 100).toFixed(2)}%`,
      percentage: l_percent * 100,
      type: 'progress',
    });
  }
  ret.push(...get_palam_progress(cid, l_param.shift(), 4));
  l_param.forEach((e) => ret.push(...get_palam_progress(cid, e)));
  ret.push({
    config: { width: 9 * (10 - l_param) },
    content: [],
    type: 'text',
  });
  return ret;
}

/**
 * @param {string} type
 * @param {number} size
 * @param {{count:number}} counter
 * @returns {boolean}
 */
function print_milking(type, size, counter) {
  const my_milk = era.get(`tflag:${type}可卖`);
  const milk = era.get(`tflag:${type}产量`) + my_milk;
  if (milk > 0) {
    const got = Math.floor(milk / size);
    const got_me = Math.floor(my_milk / size);
    const buffer = [];
    buffer.push(
      '착유기로 우유를 짜서 모았다: ',
      {
        color: palam_colors.notifications[1],
        content: `${milk.toLocaleString()}ml`,
        fontWeight: 'bold',
      },
      ' ',
      type,
    );
    if (got > 0) {
      buffer.push(
        '포장해서 처리했다. ',
        {
          color: palam_colors.notifications[1],
          content: got.toString(),
          fontWeight: 'bold',
        },
        ' 획득【',
        type,
        '】',
      );
    }
    if (got_me > 0) {
      buffer.push(
        '（그중 ',
        {
          color: palam_colors.notifications[1],
          content: got_me.toString(),
          fontWeight: 'bold',
        },
        ' 병은 ',
        get_chara_talk(0).get_colored_name(),
        '의 것이다）',
      );
      counter.count += got_me;
    }
    buffer.push('!');
    era.println();
    era.print(buffer);
    era.add(`item:${type}`, got - got_me);
    era.add(`item:갓짠${type}`, got_me);
    return true;
  }
}

/**
 * @param {number} [lover]
 * @param {boolean} [skip_start_end=false]
 */
async function page_ero(lover, skip_start_end = false) {
  const loc = era.get('flag:현재위치');
  const in_base = loc === location_enum.basement;
  const rape = era.get('tflag:강간');
  lover ||= era.get('tflag:현재상대') || era.get('flag:현재상호작용캐릭터');
  let ero_flag = true;
  const assist = era.get('flag:조수');
  era.set('tflag:현재상대', lover);
  if (
    !in_base &&
    loc !== location_enum.mejiro &&
    assist !== lover &&
    era.getCharactersInTrain().length === 2 &&
    assist > 0 &&
    sys_check_awake(assist) &&
    !sys_check_remote(assist) &&
    rape <= 0 &&
    (await select_yes_or_no([
      { content: '조수', color: mark_colors['음문'] },
      ' ',
      get_chara_talk(assist).get_colored_name(),
      '을(를) 불러 함께 할까?',
    ]))
  ) {
    init_ero(assist);
    era.set('tflag:현재조수', assist);
    const my_marks = new MyEduMarks();
    if (!global_achievement.slav_ass && ++my_marks.a_s_ass >= 100) {
      global_achievement.slav_ass = 1;
    }
  }
  if (!skip_start_end) {
    era.drawLine();
    await get_custom_ero(lover).ero_start(sys_handle_ero_act);
  }

  let master = era.get('tflag:주도권');
  get_characters_in_train().forEach((cid) => {
    era.set(
      `tcvar:${cid}:체위`,
      get_random_entry([motion_enum.lie, motion_enum.sit, motion_enum.rev]),
    );
    era.set(`tcvar:${cid}:방향`, get_random_value(0, 1));
    era.set(`tcvar:${cid}:상하`, up_enum.down);
  });
  era.set(`tcvar:${master}:상하`, up_enum.up);
  era.set('status:0:숙면', era.set('status:0:우마뾰이S', 0));
  while (ero_flag) {
    await era.clear();

    lover = era.get('tflag:현재상대');
    let curr_supporter = era.get('tflag:현재조수');

    const filters = new Array(7)
      .fill(0)
      .map((_, i) => era.get(`flag:${70 + i}`));
    const l_cols = [];
    const lost_mind = era.get('tcvar:0:실신');
    const love = get_love_info(lover);
    const marks = get_ero_marks(lover);
    const relation = get_relation_info(lover);
    if (!in_base) {
      l_cols.push({
        config: { width: 8 },
        content: date_indicator(),
        type: 'text',
      });
    }
    l_cols.push(
      {
        config: { align: in_base ? 'left' : 'right', width: 16 },
        content: [
          `현재위치 ${location_name[era.get('flag:현재위치')]} `,
          {
            content: era.get('tflag:전신거울') > 0 ? '전신거울 앞' : '',
            color: buff_colors[2],
          },
        ],
        type: 'text',
      },
      { type: 'divider' },
      ...get_chara_info(0),
      {
        content: [{ isBr: true }],
        type: 'text',
      },
      ...get_chara_info(lover),
    );
    l_cols.push({
      config: { width: 12 },
      content: [`제 ${era.get('tflag:턴')} 턴 `],
      type: 'text',
    });
    if (rape === 0) {
      l_cols.at(-1).content.push({
        color: buff_colors[2],
        content: '강간 사건 발생!',
        fontWeight: 'bold',
      });
    } else if (rape > 0) {
      l_cols.at(-1).content.push({
        color: buff_colors[2],
        content: '역강간 사건 발생!',
        fontWeight: 'bold',
      });
    }
    l_cols.push({
      config: { align: 'right', width: 12 },
      content: [
        '🤝 ',
        {
          color: relation_colors[relation[0]],
          content: relation[0],
          title: `호감：${relation.join(' ')}`,
        },
        ' · ❤️ ',
        {
          color: love_colors[love[0]],
          content: love[0],
          title: `애정：${love.join(' ')}`,
        },
        ' ',
        ...marks,
      ],
      type: 'text',
    });

    /** @type {number[]} */
    const characters_in_train = get_characters_in_train();
    master = era.get('tflag:주도권');
    if (master === 0) {
      if (characters_in_train.length > 2) {
        l_cols.push(
          { type: 'divider' },
          { config: { width: 6 }, content: '상대', type: 'text' },
          ...characters_in_train
            .filter((v) => v)
            .map((id, i) => {
              return {
                accelerator: id + 1000,
                config: {
                  disabled: lost_mind > 0,
                  buttonType: id !== lover ? 'info' : 'warning',
                  offset: !i || i % 3 ? 0 : 6,
                  width: 6,
                },
                content: era.get(`callname:${id}:-2`),
                type: 'button',
              };
            }),
        );
        if ((characters_in_train.length - 1) % 3) {
          l_cols.push({
            config: { width: 18 - ((characters_in_train.length - 1) % 3) * 6 },
            content: '',
            type: 'text',
          });
        }
        l_cols.push(
          { config: { width: 6 }, content: '협력자', type: 'text' },
          ...characters_in_train
            .filter((v) => v)
            .map((id, i) => {
              return {
                accelerator: id + 2000,
                config: {
                  disabled: id === lover || lost_mind > 0,
                  buttonType: id === curr_supporter ? 'warning' : 'info',
                  offset: !i || i % 3 ? 0 : 6,
                  width: 6,
                },
                content: era.get(`callname:${id}:-2`),
                type: 'button',
              };
            }),
        );
      }
    } else if (curr_supporter) {
      l_cols.push(
        { type: 'divider' },
        {
          content: [
            '조수：',
            get_chara_talk(curr_supporter).get_colored_name(),
          ],
          type: 'text',
        },
      );
    }

    const base_check =
      rape === -1 &&
      sys_check_awake(lover) &&
      !era.get(`tcvar:${lover}:탈력`) &&
      !era.get(`tcvar:${lover}:실신`) &&
      !era.get(`status:${lover}:슈퍼우마뾰이Z`) &&
      era.get(`mark:${lover}:동심`) < 3 &&
      era.get(`mark:${lover}:쾌락`) < 3;
    const current = new Date().getTime();
    const filtered_ero_actions = sys_filter_ero_act(0, lover, filters);
    const { last_action, lover_action } =
      master > 0
        ? {
            last_action: era.get('tflag:상대의행동'),
            lover_action: era.get('tflag:이전행동'),
          }
        : {
            last_action: era.get('tflag:이전행동'),
            lover_action: era.get('tflag:상대의행동'),
          };
    let a_disabled = true;
    const action_bar = [];
    action_bar.push({
      content:
        last_action >= 0
          ? [
              get_chara_talk(0).get_colored_name(),
              '의 행동: ',
              ero_action_names[last_action],
            ]
          : [],
      type: 'text',
    });
    if (filtered_ero_actions.indexOf(last_action) !== -1 && !master) {
      action_bar.push({
        accelerator: last_action,
        config: {
          disabled:
            lost_mind > 0 ||
            (base_check &&
              check_ero_enabled(lover, curr_supporter, last_action) < 0),
          disableWarning: true,
        },
        content: `다시 ${ero_action_names[last_action]}`,
        type: 'button',
      });
    }
    action_bar.push({
      content:
        lover_action >= 0
          ? [
              get_chara_talk(lover).get_colored_name(),
              '의 행동: ',
              ero_action_names[lover_action],
            ]
          : '',
      type: 'text',
    });
    const setting_bar = [
      '설정',
      '신체접촉',
      '불결검사',
      '자신정보',
      '상대정보',
    ];
    if (!master) {
      setting_bar.unshift('뒤돌기');
    }
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: l_cols,
        config: { width: 16, gutter: 10 },
      },
      {
        columns:
          curr_supporter > 0
            ? [
                {
                  config: { offset: 1, width: 18 },
                  names: sys_get_ero_image(lover),
                  type: 'image.whole',
                },
                {
                  config: { width: 5 },
                  names: get_chr(curr_supporter),
                  type: 'image.whole',
                },
              ]
            : [
                {
                  config: {
                    offset: 1,
                    width: !master && characters_in_train.length > 2 ? 22 : 19,
                  },
                  names: sys_get_ero_image(lover),
                  type: 'image.whole',
                },
              ],
        config: { verticalAlign: 'bottom', width: 8 },
      },
      [{ type: 'divider' }],
      filtered_ero_actions.map((a) => {
        const check_val = check_ero_enabled(lover, curr_supporter, a);
        if (isNaN(check_val)) {
          console.error(
            '对角色',
            lover,
            '调教指令实行值计算错误!',
            ero_hooks.keys[a],
            check_val,
          );
        }
        const action_disabled = lost_mind > 0 || (base_check && check_val < 0);
        a_disabled &&= action_disabled;
        return {
          accelerator: a,
          config: {
            buttonType: ero_derive_check[a] ? 'danger' : 'warning',
            disabled: action_disabled,
            width: 4,
          },
          content: ero_action_names[a],
          type: 'button',
        };
      }),
      action_bar.map((e) => {
        (e.config ||= {}).width = 8;
        return e;
      }),
      [{ type: 'divider' }],
      setting_bar.map((e, i) => ({
        accelerator: 900 + i + (master > 0),
        config: { disabled: lost_mind > 0, width: 4 },
        content: e,
        type: 'button',
      })),
      [
        {
          accelerator: 999,
          config: { disabled: master > 0 || lost_mind > 0 },
          content: '돌아가기',
          type: 'button',
        },
      ],
    );

    era.logger.debug(
      `调教指令列表计算完成!${(
        new Date().getTime() - current
      ).toLocaleString()}ms`,
    );
    let ret;
    if (a_disabled) {
      ret = ero_hooks.relax;
    } else {
      ret = await era.input();
    }
    ero_flag =
      (await sys_handle_ero_act(ret, filters)) &&
      get_characters_in_train().length > 1;
    if (era.get('tflag:항복') > 0) {
      era.set('tflag:항복', 0);
      do {
        await sys_handle_ero_act(ero_hooks.relax, filters);
        master = era.get('tflag:주도권');
        ero_flag &&=
          sys_check_awake(master) &&
          !era.get(`tcvar:${master}:탈력`) &&
          !era.get(`tcvar:${master}:도주`);
      } while (master > 0 && ero_flag);
    } else {
      master = era.get('tflag:주도권');
      ero_flag &&=
        sys_check_awake(master) &&
        !era.get(`tcvar:${master}:탈력`) &&
        !era.get(`tcvar:${master}:도주`);
    }
  }
  era.drawLine();
  await era.printAndWait('【性事结束了】');
  if (!skip_start_end) {
    await get_custom_ero(lover).ero_end(sys_handle_ero_act);
  }
  era.println();
  let wait_flag = false;
  const partner_list = get_characters_in_train().filter((e) => e > 0);
  for (const cid of partner_list) {
    if (sys_check_awake(cid)) {
      let temp;
      if (!check_satisfied(cid)) {
        sys_change_lust(cid, lust_from_palam / 2);
        wait_flag =
          sys_like_chara(cid, 0, -get_random_value(50, 100)) || wait_flag;
      } else if ((temp = era.get(`talent:${cid}:얀데레`)) > 0) {
        wait_flag =
          sys_like_chara(cid, 0, get_random_value(25, 50) * temp, temp === 2) ||
          wait_flag;
      }
    }
  }
  if (!in_base) {
    let temp_chara_list = era.getCharactersInTrain();
    const punish_list = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        temp_chara_list.indexOf(cid) === -1 && era.get(`love:${cid}`) >= 75,
    );
    for (const cid of punish_list) {
      const is_aware =
        get_custom_mec(cid).is_anger_for_unfaithful(partner_list) &&
        get_custom_check(cid).is_aware_unfaithful(partner_list);
      get_custom_check(cid).check_after_betrayed(partner_list, is_aware);
      if (is_aware) {
        wait_flag =
          (await run_custom_ero(cid, ero_hooks.after_betrayed, {
            partners: partner_list,
          })) || wait_flag;
      }
    }
  }
  const size = 200 + 300 * !era.get('item:모유처리기');
  const achieve = { count: 0 };
  wait_flag = print_milking('모유', size, achieve) || wait_flag;
  wait_flag = print_milking('마유', size, achieve) || wait_flag;
  if (achieve.count >= 1) {
    global_achievement.play_mil1 = 1;
  }
  if (achieve.count >= 4) {
    global_achievement.play_mil3 = 1;
  }
  if (wait_flag) {
    await era.waitAnyKey();
  }
}

module.exports = page_ero;
