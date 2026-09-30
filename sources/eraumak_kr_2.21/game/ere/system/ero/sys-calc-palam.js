const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const {
  get_penis_size,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const { palam_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  lust_border,
  palam_from_orgasm,
  palam_from_semen_on_part,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  pleasure_list,
} = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

const temp = [
  part_enum.mouth,
  part_enum.breast,
  part_enum.body,
  part_enum.anal,
  part_enum.sadism,
  part_enum.masochism,
];

const a_p_list = [
  void 0,
  [...temp, part_enum.penis],
  [...temp, part_enum.clitoris, part_enum.virgin],
  [...temp, part_enum.penis, part_enum.virgin],
];

let tmp = {};

/**
 * @param {number} cid
 * @param {number} part
 * @param {number} _attack hurt value
 */
function add_palam(cid, part, _attack) {
  let attack = _attack;
  if (part === part_enum.breast) {
    attack /= 1 + 0.2 * era.get(`talent:${cid}:유방사이즈`);
  }
  attack *= 1 - 0.2 * era.get(`talent:${cid}:정조관념`);
  const key = part_names[part];
  if (!key) {
    return;
  }
  // 欲求不满+25%快感累积
  // 발정+25%快感累积
  // 여운+20%快感累积
  // 절정억제-10%快感累积
  let coff =
    1 +
    0.25 * (era.get(`base:${cid}:성욕`) >= lust_border.want_sex) +
    0.25 * era.get(`tcvar:${cid}:발정`) +
    0.2 * (era.get(`tcvar:${cid}:여운`) > 0) -
    0.1 * (era.get(`tcvar:${cid}:절정억제`) > 0);
  if (part === part_enum.penis) {
    // 不应期内阴茎快感提升-90%
    if (era.get(`tcvar:${cid}:불응기`)) {
      coff -= 0.9;
    } else if (era.get(`tcvar:${cid}:콘돔`)) {
      // 콘돔-10%쾌감
      coff -= 0.1;
    }
  }
  // 自己拿自己的宝珠
  // 淫纹不会加成宝珠获取
  add_juel(cid, `${key}쾌감`, attack * coff);
  const inmon = CharaInmon.get(cid);
  if (inmon.on(plugin_enum.al_u1)) {
    coff += 0.5;
  } else if (inmon.on(plugin_enum.al_u2)) {
    coff += 1;
  } else if (inmon.on(plugin_enum.al_u3)) {
    coff += 2;
  } else if (inmon.on(plugin_enum.al_d1)) {
    coff -= 0.1;
  } else if (inmon.on(plugin_enum.al_d2)) {
    coff -= 0.3;
  } else if (inmon.on(plugin_enum.al_d3)) {
    coff -= 0.7;
  }
  const plug_key = part_enum.keys[part].substring(0, 2);
  if (inmon.on(plugin_enum[`${plug_key}_u1`])) {
    coff += 1;
  } else if (inmon.on(plugin_enum[`${plug_key}_u2`])) {
    coff += 2;
  } else if (inmon.on(plugin_enum[`${plug_key}_u3`])) {
    coff += 4;
  } else if (inmon.on(plugin_enum[`${plug_key}_d1`])) {
    coff -= 0.2;
  } else if (inmon.on(plugin_enum[`${plug_key}_d2`])) {
    coff -= 0.4;
  } else if (inmon.on(plugin_enum[`${plug_key}_d3`])) {
    coff -= 0.8;
  }
  attack *= coff;
  if (inmon.on(plugin_enum.tzt)) {
    a_p_list[
      (get_penis_size(cid) > 0) + (era.get(`cflag:${cid}:성별`) !== 1) * 2
    ].forEach((p, _, l) => (tmp[cid][part_names[p]] += attack / l.length));
  } else {
    tmp[cid][key] += attack;
  }
}

/**
 * 结算部位快感
 * @param {number} chara_id
 * @param {number} part
 * @param {number} attack hurt value
 * @param {boolean} [pass_transfer]
 */
function calc_pleasure(chara_id, part, attack, pass_transfer) {
  attack = Math.max(attack, 0);
  add_palam(chara_id, part, attack);
  if (!pass_transfer) {
    // 有阴茎未攻击，联动增加阴茎快感
    if (get_penis_size(chara_id) > 0 && part !== part_enum.penis) {
      // 除肛门和阴道快感，其他折半增加
      switch (part) {
        case part_enum.anal:
        case part_enum.virgin:
          add_palam(
            chara_id,
            part_enum.penis,
            (attack * era.get(`tcvar:${chara_id}:음경쾌감상한`) * 0.7) /
              era.get(`tcvar:${chara_id}:${part_names[part]}쾌감상한`),
          );
          break;
        default:
          add_palam(
            chara_id,
            part_enum.penis,
            (attack * era.get(`tcvar:${chara_id}:음경쾌감상한`) * 0.2) /
              era.get(`tcvar:${chara_id}:${part_names[part]}쾌감상한`),
          );
      }
    }
    // 有阴道未攻击，联动增加阴道快感
    if (
      era.get(`cflag:${chara_id}:질크기`) > 0 &&
      part !== part_enum.virgin
    ) {
      // 除外阴和牛子快感，其他折半增加
      switch (part_enum) {
        case part_enum.clitoris:
        case part_enum.penis:
          add_palam(
            chara_id,
            part_enum.virgin,
            (attack * era.get(`tcvar:${chara_id}:질구쾌감상한`) * 0.7) /
              era.get(`tcvar:${chara_id}:${part_names[part]}쾌감상한`),
          );
          break;
        default:
          add_palam(
            chara_id,
            part_enum.virgin,
            (attack * era.get(`tcvar:${chara_id}:질구쾌감상한`) * 0.2) /
              era.get(`tcvar:${chara_id}:${part_names[part]}쾌감상한`),
          );
      }
    }
  }
}

/**
 * @param {number} chara_id
 * @param {number} part
 * @param {boolean} shown
 * @returns {{max: number, old: number, curr: number}}
 */
function update_palam(chara_id, part, shown) {
  const key = part_names[part];
  const param_name = key + '쾌감';
  // 快感加成已在 sys-calc-ero.js 中计算，因子加成在 sys-calc-juel.js 中计算，不重复计算
  let attack =
    tmp[chara_id][key] * (1 + 0.1 * (sys_get_chara(chara_id) === -3));
  switch (part) {
    case part_enum.sadism:
      add_juel(chara_id, '수치', attack / 2);
      break;
    case part_enum.masochism:
      add_juel(chara_id, '반감', attack / 2);
      break;
    case part_enum.body:
    case part_enum.anal:
    case part_enum.clitoris:
      add_juel(chara_id, '순종', attack / 2);
      add_juel(chara_id, '공포', attack / 2);
      break;
    case part_enum.penis:
    case part_enum.virgin:
      add_juel(chara_id, '순종', attack / 2);
      add_juel(chara_id, '수치', attack / 2);
      break;
    default:
      add_juel(chara_id, '순종', attack / 2);
  }
  tmp[chara_id][key] = 0;
  const old_val = era.get(`param:${chara_id}:${param_name}`);
  const new_val = era.add(`param:${chara_id}:${param_name}`, attack);
  const _new = Math.floor(new_val);
  const _old = Math.floor(old_val);
  const limit = era.get(`tcvar:${chara_id}:${param_name}상한`);
  if (shown && _new !== _old) {
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      `의 ${param_name}：`,
      _old.toLocaleString(),
      ' + ',
      {
        content: (_new - _old).toLocaleString(),
        color: palam_colors.notifications[1],
      },
      ' → ',
      {
        content: `${_new.toLocaleString()}`,
        color: get_color(...palam_colors.notifications, new_val / limit),
      },
      `/${limit.toLocaleString()}`,
    ]);
  }
  return { curr: new_val, max: limit, old: old_val };
}

module.exports = {
  add_palam,
  calc_pleasure,
  clean_palams: () => (tmp = {}),
  /** @param {number} ids */
  init_palams: (...ids) =>
    ids.forEach((chara_id) => {
      tmp[chara_id] = {};
      pleasure_list.forEach((part) => (tmp[chara_id][part_names[part]] = 0));
    }),
  update_palam,
  /**
   * @param {number} cid
   * @param {number} part
   * @param {number} orgasm
   * @param {CharaInmon} inmon
   */
  update_palam_from_main_orgasm(
    cid,
    part,
    orgasm,
    inmon = CharaInmon.get(cid),
  ) {
    let add = Math.min(orgasm, 6) * palam_from_orgasm;
    const penis = get_penis_size(cid) > 0;
    const virgin = era.get(`cflag:${cid}:질크기`) > 0;
    if (inmon.on(plugin_enum.nrg)) {
      if (
        part !== part_enum.penis &&
        part !== part_enum.virgin &&
        penis &&
        virgin
      ) {
        add *= 2;
      }
      a_p_list[penis + virgin * 2].forEach((p, _, l) => {
        if (part !== p) {
          tmp[cid][part_names[p]] += add / (l.length - 1);
        }
      });
    } else if (part !== part_enum.penis && part !== part_enum.virgin) {
      // 次要部位高潮会增加主要部位快感，无任何加减成
      // 只有本人能获得次要部位高潮获取的快感宝珠
      if (penis > 0) {
        // 男性和扶她加牛子快感
        add_palam(cid, part_enum.penis, add);
      }
      if (virgin > 0) {
        // 女性和扶她加浦西快感
        add_palam(cid, part_enum.virgin, add);
      }
    }
  },
  /**
   * @param {number} chara_id
   * @param {string} talent
   * @param {number} parts
   */
  update_palam_from_talent(chara_id, talent, ...parts) {
    if (era.get(`talent:${chara_id}:${talent}`)) {
      parts.forEach((part) =>
        add_palam(
          chara_id,
          part,
          (era.get(`tcvar:${chara_id}:${part_names[part]}쾌감상한`) *
            palam_from_semen_on_part) /
            parts.length,
        ),
      );
    }
  },
  /**
   * @param {boolean} shown
   * @param {number} ids
   */
  update_palams(shown, ...ids) {
    ids.forEach((chara_id) =>
      orgasm_check_list.forEach((part) => update_palam(chara_id, part, shown)),
    );
  },
};
