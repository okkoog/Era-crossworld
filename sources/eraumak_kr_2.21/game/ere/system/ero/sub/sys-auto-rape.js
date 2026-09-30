const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const use_item_by_character = require('#/system/ero/ero-act-handler/use-item-by-chara');
const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const {
  check_satisfied,
  check_want_to_escape,
  get_penis_size,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { get_characters_in_train } = require('#/system/ero/sys-prepare-ero');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_ero, run_custom_ero } = require('#/event/ero/ero-factory');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { medicine_enum, tequip_parts } = require('#/data/ero/item-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_action_names,
  ero_hook_tags,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');

/**
 * @param {number} master
 * @param {number[]} act_list
 * @param {number} last_action
 * @param {function(number):boolean} filters
 * @returns {number}
 */
function get_random_act(master, act_list, last_action, ...filters) {
  const change_action =
    last_action === ero_hooks.relax ? 1 : era.get(`tcvar:${master}:체위변경`);
  let ret;
  filters.push(undefined);
  let filtered_list;
  for (const f of filters) {
    filtered_list = f ? act_list.filter(f) : act_list;
    if (
      filtered_list.indexOf(last_action) !== -1 &&
      change_action < 1 &&
      Math.random() > change_action
    ) {
      ret = last_action;
      break;
    }
    ret = get_random_entry(filtered_list);
    if (ret !== undefined) {
      break;
    }
  }
  era.logger.debug(
    '角色 ' +
      master +
      ' 思考：\n可用指令：' +
      act_list.map((e) => ero_action_names[e]).join(',') +
      '\n筛选结果：' +
      filtered_list.map((e) => ero_action_names[e]).join(',') +
      '\n前回行动：' +
      (ero_action_names[last_action] ?? '없음') +
      '\n变招概率：' +
      (change_action * 100).toFixed(2) +
      '%\n最终选择：' +
      ero_action_names[ret],
  );
  return ret;
}

const want_list_entry_getter = {};
want_list_entry_getter[part_enum.mouth] = [
  ero_hook_tags.mouth,
  ero_hook_tags.tongue,
];
want_list_entry_getter[part_enum.breast] = [
  ero_hook_tags.breast,
  ero_hook_tags.nipple,
  ero_hook_tags.touched_nipple,
];
want_list_entry_getter[part_enum.body] = [ero_hook_tags.body];
want_list_entry_getter[part_enum.penis] = [ero_hook_tags.insert];
want_list_entry_getter[part_enum.clitoris] = [ero_hook_tags.clitoris];
want_list_entry_getter[part_enum.virgin] = [ero_hook_tags.virgin];
want_list_entry_getter[part_enum.anal] = [ero_hook_tags.anal];
want_list_entry_getter[part_enum.sadism] = [
  ero_hook_tags.hand,
  ero_hook_tags.foot,
  ero_hook_tags.sadism,
];
want_list_entry_getter[part_enum.masochism] = [
  ero_hook_tags.m_abused,
  ero_hook_tags.m_hit,
];

/** @param {boolean} shown */
async function sys_auto_rape(shown) {
  const current = new Date().getTime();
  const master = era.get('tflag:주도권');
  /** @type {number[]} */
  const chara_list_in_train = get_characters_in_train().filter(
    (e) =>
      e > 0 &&
      e !== master &&
      sys_check_awake(e) &&
      !era.get(`tcvar:${e}:탈력`) &&
      !era.get(`tcvar:${e}:실신`),
  );
  if (check_satisfied(master) > 0) {
    await run_custom_ero(master, ero_hooks.switch, {
      attacker: master,
      defender: 0,
      shown,
    });
    if (shown) {
      era.println();
    }
    return;
  }
  let temp;
  if (
    era.get(`mark:${master}:동심`) <= 2 &&
    era.get(`mark:${master}:쾌락`) <= 2 &&
    era.get(`mark:${master}:음문`) <= 2 &&
    (era.get(`mark:${master}:반발`) >= 2 ||
      era.get(`talent:${master}:성적성향`) === -1 ||
      era.get(`talent:${master}:반감획득`) === 1 ||
      era.get(`talent:${master}:반항의사`) === 1 ||
      era.get(`talent:${master}:정조관념`) === 1)
  ) {
    const tequip_list = tequip_parts
      .map((part) => {
        return {
          part,
          user: master,
          item: era.get(`tequip:${master}:${part_names[part] || part}`),
        };
      })
      .filter((e) => e.item !== -1);
    if (tequip_list.length) {
      await run_custom_ero(
        master,
        ero_hooks.take_off_item,
        get_random_entry(tequip_list),
      );
      shown && era.println();
      return;
    }
  }
  if (check_want_to_escape(master)) {
    await run_custom_ero(master, ero_hooks.relax, {
      attacker: master,
      defender: 0,
      shown,
    });
    return;
  }
  let cur_supporter = era.get('tflag:현재조수');
  if (!chara_list_in_train.length) {
    cur_supporter = era.set('tflag:현재조수', 0);
  } else if (chara_list_in_train.indexOf(cur_supporter) === -1) {
    cur_supporter = era.set(
      'tflag:현재조수',
      get_random_entry(chara_list_in_train),
    );
  }
  if (
    era.get(`status:0:숙면`) > 0 &&
    !era.get('status:0:우마뾰이S') &&
    era.get(`status:${master}:애정억제`) > 0
  ) {
    await run_custom_ero(master, ero_hooks.use_medicine, {
      item: medicine_enum.uma_s,
      user: 0,
      shown,
    });
    return;
  }
  if ((temp = era.get('flag:징벌강도')) >= 2) {
    let ret_flag = false;
    if (!get_penis_size(master)) {
      await run_custom_ero(master, ero_hooks.use_medicine, {
        item:
          temp === 3
            ? medicine_enum.fron_p
            : medicine_enum.fron_k + get_random_value(0, 1),
        user: master,
        shown,
      });
      ret_flag = true;
    }
    if (cur_supporter > 0 && !get_penis_size(cur_supporter)) {
      ret_flag && shown && era.println();
      await run_custom_ero(cur_supporter, ero_hooks.use_medicine, {
        item:
          temp === 3
            ? medicine_enum.fron_p
            : medicine_enum.fron_k + get_random_value(0, 1),
        user: cur_supporter,
        shown,
      });
      ret_flag = true;
    }
    if (ret_flag) {
      shown && era.println();
      return;
    }
  }
  const want_list = {};
  const poison_list = { lover: {}, master: {} };
  const sensitive_list = { lover: {}, master: {} };
  const white_list = {};
  const black_list = {};
  const week_list = {};
  get_custom_ero(master).set_preference(white_list, week_list);
  (era.get(`tcvar:${master}:절정임박`) || []).forEach((p) =>
    want_list_entry_getter[p].forEach((k) => (want_list[k] = true)),
  );
  if (era.get(`talent:${master}:정액음용중독`)) {
    poison_list.master[ero_hook_tags.mouth] = true;
    poison_list.master[ero_hook_tags.tongue] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:정액착취중독`)) {
    poison_list.master[ero_hook_tags.virgin] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:정액관장`)) {
    poison_list.master[ero_hook_tags.anal] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:정액욕중독`)) {
    poison_list.master[ero_hook_tags.breast] = true;
    poison_list.master[ero_hook_tags.nipple] = true;
    poison_list.master[ero_hook_tags.touched_nipple] = true;
    poison_list.master[ero_hook_tags.body] = true;
    poison_list.master[ero_hook_tags.hand] = true;
    poison_list.master[ero_hook_tags.foot] = true;
    poison_list.master[ero_hook_tags.clitoris] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:목구멍민감`)) {
    sensitive_list.master[ero_hook_tags.mouth] = true;
    sensitive_list.master[ero_hook_tags.tongue] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:자궁민감`)) {
    sensitive_list.master[ero_hook_tags.virgin] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:창자민감`)) {
    sensitive_list.master[ero_hook_tags.anal] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:냄새민감`)) {
    sensitive_list.master[ero_hook_tags.breast] = true;
    sensitive_list.master[ero_hook_tags.nipple] = true;
    sensitive_list.master[ero_hook_tags.touched_nipple] = true;
    sensitive_list.master[ero_hook_tags.body] = true;
    sensitive_list.master[ero_hook_tags.hand] = true;
    sensitive_list.master[ero_hook_tags.foot] = true;
    sensitive_list.master[ero_hook_tags.clitoris] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (
    (temp = era.get(`talent:${master}:음란한입`)) === 2 ||
    era.get(`talent:${master}:방탕한입술`)
  ) {
    white_list[ero_hook_tags.mouth] = true;
    white_list[ero_hook_tags.tongue] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.mouth] = true;
    black_list[ero_hook_tags.tongue] = true;
  }
  if (
    (temp = era.get(`talent:${master}:음란한가슴`)) === 2 ||
    era.get(`talent:${master}:요염한유방`)
  ) {
    white_list[ero_hook_tags.breast] = true;
    white_list[ero_hook_tags.nipple] = true;
    white_list[ero_hook_tags.touched_nipple] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.breast] = true;
    black_list[ero_hook_tags.nipple] = true;
    black_list[ero_hook_tags.touched_nipple] = true;
  } else if (era.get(`talent:${master}:유방사이즈`) > 0) {
    white_list[ero_hook_tags.breast] = true;
    white_list[ero_hook_tags.nipple] = true;
    white_list[ero_hook_tags.touched_nipple] = true;
  }
  if ((temp = era.get(`talent:${master}:음란한몸`)) === 2) {
    white_list[ero_hook_tags.body] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.body] = true;
  }
  if (era.get(`talent:${master}:신의손`)) {
    white_list[ero_hook_tags.hand] = true;
  }
  if (era.get(`talent:${master}:신의발`)) {
    white_list[ero_hook_tags.foot] = true;
  }
  if ((temp = era.get(`talent:${master}:음란한클리토리스`)) === 2) {
    white_list[ero_hook_tags.clitoris] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.clitoris] = true;
  }
  if (
    (temp = era.get(`talent:${master}:조루`)) === 2 ||
    era.get(`talent:${master}:흉기`)
  ) {
    white_list[ero_hook_tags.penis] = true;
    white_list[ero_hook_tags.insert] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.penis] = true;
    black_list[ero_hook_tags.insert] = true;
  }
  if (
    (temp = era.get(`talent:${master}:음란한자궁`)) === 2 ||
    era.get(`talent:${master}:명기`)
  ) {
    white_list[ero_hook_tags.clitoris] = true;
    white_list[ero_hook_tags.virgin] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.clitoris] = true;
    black_list[ero_hook_tags.virgin] = true;
  }
  if (
    (temp = era.get(`talent:${master}:음란한엉덩이`)) === 2 ||
    era.get(`talent:${master}:마성의엉덩이`)
  ) {
    white_list[ero_hook_tags.anal] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.anal] = true;
  }
  if (
    Object.keys(week_list).length === 0 &&
    (era.get(`talent:${master}:도S`) ||
      era.get(`talent:${master}:소악마`) ||
      era.get(`talent:${master}:반항의사`) > 0 ||
      era.get('tflag:강간') === master)
  ) {
    if (era.get('talent:0:음란한입') > 0) {
      week_list[ero_hook_tags.mouth] = week_list[ero_hook_tags.tongue] = true;
    }
    if (era.get('talent:0:음란한가슴') > 0 || era.get('talent:0:모유분비')) {
      week_list[ero_hook_tags.breast] =
        week_list[ero_hook_tags.nipple] =
        week_list[ero_hook_tags.touched_nipple] =
          true;
    }
    if (era.get('talent:0:음란한몸') > 0) {
      week_list[ero_hook_tags.body] =
        week_list[ero_hook_tags.hand] =
        week_list[ero_hook_tags.foot] =
          true;
    }
    if (era.get('talent:0:음란한클리토리스') > 0) {
      week_list[ero_hook_tags.clitoris] = true;
    }
    if (era.get('talent:0:음란한자궁') > 0 || era.get('talent:0:자궁민감')) {
      week_list[ero_hook_tags.clitoris] = true;
      week_list[ero_hook_tags.virgin] = true;
    }
    if (era.get('talent:0:음란한엉덩이') > 0 || era.get('talent:0:창자민감')) {
      week_list[ero_hook_tags.anal] = true;
    }
    if (era.get('talent:0:조루') > 0) {
      week_list[ero_hook_tags.insert] = week_list[ero_hook_tags.penis] = true;
    }
  }
  /** @type {(function(number):boolean)[]} */
  const filters = [];
  if (!era.get('tflag:강간') && get_sex_acceptable(master) < 0) {
    filters.push((e) => e === ero_hooks.insult || e === ero_hooks.hit_face);
  }
  if (cur_supporter > 0) {
    filters.push(
      (e) =>
        e >= ero_hooks.double_cowgirl && e <= ero_hooks.spit_roast_anal_sex,
      (e) =>
        e >= ero_hooks.ask_supporter_prepare_virgin && e <= ero_hooks.fuck_69,
    );
  }
  const second_filter = get_custom_ero(master).filter_in_rape();
  const temp_filters = [];
  if (Object.keys(poison_list.master).length > 0) {
    temp_filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.findIndex((t) => poison_list.master[t]) !== -1 &&
        tags.defender_tags.findIndex((t) => poison_list.lover[t]) !== -1
      );
    });
  }
  if (Object.keys(sensitive_list.master).length) {
    temp_filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.findIndex((t) => sensitive_list.master[t]) === -1 ||
        tags.defender_tags.findIndex((t) => sensitive_list.lover[t]) === -1
      );
    });
  }
  if (Object.keys(white_list).length > 0 || Object.keys(week_list).length > 0) {
    temp_filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.findIndex((t) => white_list[t]) !== -1 ||
        tags.defender_tags.findIndex((t) => week_list[t]) !== -1
      );
    });
  }
  if (temp_filters.length > 0) {
    filters.push(
      ...temp_filters.map((f) => (a) => second_filter(a) && f(a)),
      second_filter,
      ...temp_filters,
    );
  } else {
    filters.push(second_filter);
  }
  if (Object.keys(black_list).length) {
    filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return tags.attacker_tags.findIndex((t) => black_list[t]) === -1;
    });
  }
  const random_list = sys_filter_ero_act(master, 0, [
    false,
    false,
    false,
    false,
    true,
    false,
    false,
  ]).filter(
    (e) =>
      era.get(`love:${master}`) >= 75 ||
      (e !== ero_hooks.kiss && e !== ero_hooks.french_kiss),
  );
  const last_action = era.get('tflag:이전행동');
  const action = get_random_act(master, random_list, last_action, ...filters);
  (last_action === action ? era.add : era.set)(
    `tcvar:${master}:체위변경`,
    0.16 - 0.08 * era.get(`talent:${master}:성적흥미`),
  );
  era.logger.debug(
    `角色 ${master} 思考主动行为结束!${(new Date().getTime() - current).toLocaleString()}ms`,
  );
  if (
    ero_tagged_hooks[action] !== undefined &&
    !sys_check_yandere(master, (y) => y > 0) &&
    !era.get(`status:${master}:슈퍼우마뾰이Z`) &&
    (master < 340 || master > 342)
  ) {
    const ero = era.get(`talent:${master}:성적성향`),
      love = era.get(`love:${master}`);
    if (
      ero_tagged_hooks[action].attacker_tags.indexOf(ero_hook_tags.virgin) !==
        -1 &&
      ero_tagged_hooks[action].defender_tags.indexOf(ero_hook_tags.insert) !==
        -1
    ) {
      // T插马娘，<생리,非经期>x<炮友,恋人,未婚>x<정조관념,공용,호색>
      let relation = 1;
      if (love < 75) {
        relation = 0;
      } else if (love >= 90) {
        relation = 2;
      }
      relation =
        ((ero + 1) << 3) + // 0b00000 0b01000 0b10000
        (relation << 1) + // 0b00000 0b00010 0b00100
        (era.get(`status:${master}:생리`) ||
          era.get(`cflag:${master}:임신단계`) !== 1 << pregnant_stage_enum.no); // 0b00000 0b00001
      /** @type {0|1|2} 0 - 不避孕，1 - 戴套，2 - 吃药 */
      let anti_p_type = 0;
      switch (relation) {
        case 0b01010: // 非经期x恋人x普通
          anti_p_type = 2;
          break;
        case 0b00000: // 非经期x炮友x性保守
        case 0b00001: // 经期x炮友x性保守
        case 0b00010: // 非经期x恋人x性保守
        case 0b00011: // 经期x恋人x性保守
        case 0b01000: // 非经期x炮友x普通
          anti_p_type = 1;
          break;
        case 0b10000: // 非经期x炮友x好色
          if (era.get(`status:${master}:배란기`)) {
            anti_p_type = 1;
          }
          break;
        case 0b10010: // 非经期x恋人x好色
          if (era.get(`status:${master}:배란기`)) {
            anti_p_type = 2;
          }
          break;
        case 0b00100: // 非经期x未婚x性保守
        case 0b00101: // 经期x未婚x性保守
        case 0b01001: // 经期x炮友x普通
        case 0b01011: // 经期x恋人x普通
        case 0b01100: // 非经期x未婚x普通
        case 0b01101: // 经期x未婚x普通
        case 0b10001: // 经期x炮友x好色
        case 0b10011: // 经期x恋人x好色
        case 0b10100: // 非经期x未婚x好色
        case 0b10101: // 经期x未婚x好色
      }
      if (anti_p_type > 0) {
        if (era.get(`talent:${master}:정액착취중독`) > 0) {
          anti_p_type = 2;
        } else if (era.get(`talent:${master}:자궁민감`) > 0) {
          anti_p_type = 1;
        }
        if (anti_p_type === 1 && !era.get('tcvar:0:콘돔')) {
          await run_custom_ero(master, ero_hooks.other_condom, {
            shown,
          });
          era.set('tflag:이전행동', ero_hooks.other_condom);
        } else if (
          !era.get(`status:${master}:사후피임약`) &&
          !era.get(`status:${master}:경구피임약`)
        ) {
          await run_custom_ero(master, ero_hooks.use_medicine, {
            item: medicine_enum.anti_p_s,
            user: master,
            shown,
          });
          era.set('tflag:이전행동', ero_hooks.use_medicine);
        } else {
          anti_p_type = 0;
        }
      }
      if (anti_p_type > 0) {
        era.set('tflag:이전턴의조수', cur_supporter);
        return;
      }
    } else if (
      ero_tagged_hooks[action].attacker_tags.indexOf(ero_hook_tags.insert) !==
        -1 &&
      ero_tagged_hooks[action].defender_tags.indexOf(ero_hook_tags.virgin) !==
        -1 &&
      !era.get(`tcvar:${master}:콘돔`) &&
      (era.get(`cflag:${master}:성별`) || era.get(`status:${master}:펄롱P`)) &&
      ((love < 90 && ero === -1) ||
        (love >= 75 && love < 90 && !era.get('status:0:생리'))) &&
      !era.get(`tcvar:${master}:콘돔`)
    ) {
      await run_custom_ero(master, ero_hooks.condom, {
        shown,
      });
      era.set('tflag:이전행동', ero_hooks.condom);
      era.set('tflag:이전턴의조수', cur_supporter);
      return;
    }
  }
  if (action === ero_hooks.use_item) {
    const random_item = use_item_by_character();
    await run_custom_ero(master, ero_hooks.use_item, {
      item: get_random_entry(random_item.items),
      part: random_item.part,
      shown,
    });
  } else if (
    (ero_tagged_hooks[action] || default_tags).condition !==
    condition_type.active
  ) {
    await run_custom_ero(master, action, {
      attacker: master,
      defender: 0,
      shown,
    });
  } else {
    await run_custom_ero(master, action, {
      supporter: cur_supporter,
      shown,
    });
  }
  era.set('tflag:이전행동', action);
  era.set('tflag:이전턴의조수', cur_supporter);
  if (shown) {
    era.println();
  }
}

module.exports = sys_auto_rape;
