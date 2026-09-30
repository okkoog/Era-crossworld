const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { sort_list } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceHistory = require('#/data/race/model/race-history');
const { race_infos } = require('#/data/race/race-const');
const { track2location } = require('#/data/race/race-location');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names, attr_names } = require('#/data/train-const');

/**
 * @param {number} cid
 * @returns {PseudoUma}
 */
function sys_get_chara_pseudo(cid) {
  const adapt_list = adaptability_names.map((adapt) =>
    era.get(`cflag:${cid}:${adapt}적성`),
  );
  const debuff = era.get(`status:${cid}:원정레이스`);
  const uma = new PseudoUma(
    cid,
    era.get(`callname:${cid}:-1`),
    cid === 0
      ? get_chara_color(Math.max(era.get(`cflag:0:템플릿캐릭터`), 0))
      : get_chara_color(cid),
    era.get(`cflag:${cid}:컨디션`),
    attr_names.map((attr) => era.get(`base:${cid}:${attr}`)),
    era.get(`cflag:${cid}:각질`),
    adapt_list.slice(6, 10),
    adapt_list.slice(2, 6).map((adapt) => adapt - debuff),
    adapt_list.slice(0, 2).map((adapt) => adapt - debuff),
    CharaSkills.get(cid)
      .get()
      .map((e) => skills_dict[e]),
  );
  uma.chara = sys_get_chara(cid);
  uma.base.winCount = RaceHistory.get(cid)
    .get_values()
    .filter((e) => e.rank === 1).length;
  if (debuff) {
    uma.ground_buffs.push(`-${debuff}[원정레이스(${debuff})]`);
    uma.dis_buffs.push(`-${debuff}[원정레이스${debuff}]`);
  }
  let temp;
  if ((temp = era.get(`status:${cid}:피로`))) {
    uma.attr_buffs.forEach((l) => l.push(`-${5 * temp}%[피로(${temp})]`));
  }
  if (era.get(`status:${cid}:영역`)) {
    uma.attr_buffs.forEach((l) => l.push('+5%[영역!]'));
  }
  if ((temp = era.get(`status:${cid}:현지적응실패`))) {
    uma.attr_buffs
      .slice(0, 3)
      .forEach((l) => l.push(`-${5 * temp}%[현지적응실패(${temp})]`));
  }
  if ((temp = era.get(`status:${cid}:언어장벽`))) {
    uma.attr_buffs
      .slice(3)
      .forEach((l) => l.push(`-${5 * temp}%[언어장벽(${temp})]`));
  }
  const stamina_ratio =
      era.get(`base:${cid}:체력`) / era.get(`maxbase:${cid}:체력`),
    time_ratio = era.get(`base:${cid}:기력`) / era.get(`maxbase:${cid}:기력`);
  if (stamina_ratio < 0.3) {
    uma.attr_buffs.slice(0, 3).forEach((l) => l.push('-50%[체력 저하]'));
  } else if (stamina_ratio < 0.5) {
    uma.attr_buffs.slice(0, 3).forEach((l) => l.push('-20%[체력 부족]'));
  }
  if (time_ratio < 0.3) {
    uma.attr_buffs.slice(3).forEach((l) => l.push('-50%[기력 저하]'));
  } else if (time_ratio < 0.5) {
    uma.attr_buffs.slice(3).forEach((l) => l.push('-20%[기력 부족]'));
  }
  switch (era.get(`cflag:${cid}:임신단계`)) {
    // 早期
    case 0b100:
      uma.attr_buffs.forEach((l) => l.push('-5%[임신 초기]'));
      break;
    // 安定
    case 0b1000:
      uma.attr_buffs.forEach((l) => l.push('+5%[안정기]'));
      break;
    // 晚期
    case 0b10000:
      uma.attr_buffs.forEach((l) => l.push('-10%[임신 말기]'));
  }
  get_custom_mec(uma.index_chara).set_pseudo_uma(uma);
  uma.calc_attrs();
  uma.adapt_ground_list = uma.adapt_ground_list.map((e) =>
    Math.min(Math.max(e, 0), 7),
  );
  uma.ground_buffs = sort_list(
    uma.ground_buffs,
    (buff) => Number(buff.substring(0, buff.indexOf('['))),
    false,
  );
  uma.adapt_distance_list = uma.adapt_distance_list.map((e) =>
    Math.min(Math.max(e, 0), 7),
  );
  uma.dis_buffs = sort_list(
    uma.dis_buffs,
    (buff) => Number(buff.substring(0, buff.indexOf('['))),
    false,
  );
  temp = track2location[race_infos[era.get('flag:현재레이스')].track];
  if (temp) {
    uma.base.language = era.get(`abl:${cid}:${temp.lan}어`);
  }
  temp = uma.attrs.reduce((p, c) => p + c, 0) / 5;
  uma.base.attr_err = uma.attrs.reduce((p, c) => p + (c - temp) ** 2, 0) / 5;
  uma.base.research_lv = attr_names.reduce(
    (p, c) => p + era.get(`abl:${cid}:${c}트레이닝레벨`),
    0,
  );

  // 带玩具比赛
  uma.ero.main = [];
  if (era.get(`talent:${cid}:강철의의지`) > 0) {
    uma.ero.buff.sex = -0.5;
  }
  if (
    era.get(`status:${cid}:우마뾰이Z`) > 0 ||
    era.get(`base:${cid}:성욕`) >= lust_border.absent_mind ||
    era.get(`status:${cid}:발정`) > 0
  ) {
    uma.ero.buff.sex += 0.25;
  } else if (
    era.get(`status:${cid}:펄롱K`) > 0 ||
    era.get(`status:${cid}:펄롱P`) > 0 ||
    era.get(`status:${cid}:생리`) > 0
  ) {
    uma.ero.buff.sex += 0.1;
  }
  const inmon = CharaInmon.get(cid);
  if (inmon.on(plugin_enum.al_u1)) {
    uma.ero.buff.sex += 0.5;
  } else if (inmon.on(plugin_enum.al_u2)) {
    uma.ero.buff.sex += 1;
  } else if (inmon.on(plugin_enum.al_u3)) {
    uma.ero.buff.sex += 2;
  } else if (inmon.on(plugin_enum.al_d1)) {
    uma.ero.buff.sex -= 0.1;
  } else if (inmon.on(plugin_enum.al_d2)) {
    uma.ero.buff.sex -= 0.3;
  } else if (inmon.on(plugin_enum.al_d3)) {
    uma.ero.buff.sex -= 0.7;
  }
  uma.ero.buff.penis =
    uma.ero.buff.clitoris =
    uma.ero.buff.anal =
      uma.ero.buff.sex;
  const a_talent = era.get(`talent:${cid}:음란한엉덩이`);
  if (a_talent >= 0) {
    uma.ero.buff.anal += a_talent / 2;
  } else {
    uma.ero.buff.anal -= 0.5;
  }
  if (inmon.on(plugin_enum.an_u1)) {
    uma.ero.buff.anal += 1;
  } else if (inmon.on(plugin_enum.an_u2)) {
    uma.ero.buff.anal += 2;
  } else if (inmon.on(plugin_enum.an_u3)) {
    uma.ero.buff.anal += 4;
  } else if (inmon.on(plugin_enum.an_d1)) {
    uma.ero.buff.anal -= 0.2;
  } else if (inmon.on(plugin_enum.an_d2)) {
    uma.ero.buff.anal -= 0.4;
  } else if (inmon.on(plugin_enum.an_d3)) {
    uma.ero.buff.anal -= 0.8;
  }
  uma.ero.cost.anal = -0.1 * era.get(`abl:${cid}:항문내성`);
  const sex = era.get(`cflag:${cid}:성별`);
  if (sex !== 1) {
    uma.ero.buff.breast = uma.ero.buff.virgin = uma.ero.buff.sex;
    const b_talent = era.get(`talent:${cid}:음란한가슴`);
    if (b_talent >= 0) {
      uma.ero.buff.breast += b_talent / 2;
    } else {
      uma.ero.buff.breast -= 0.5;
    }
    if (inmon.on(plugin_enum.br_u1)) {
      uma.ero.buff.breast += 1;
    } else if (inmon.on(plugin_enum.br_u2)) {
      uma.ero.buff.breast += 2;
    } else if (inmon.on(plugin_enum.br_u3)) {
      uma.ero.buff.breast += 4;
    } else if (inmon.on(plugin_enum.br_d1)) {
      uma.ero.buff.breast -= 0.2;
    } else if (inmon.on(plugin_enum.br_d2)) {
      uma.ero.buff.breast -= 0.4;
    } else if (inmon.on(plugin_enum.br_d3)) {
      uma.ero.buff.breast -= 0.8;
    }
    uma.ero.cost.breast = -0.1 * era.get(`abl:${cid}:가슴내성`);
    const v_talent = era.get(`talent:${cid}:음란한자궁`);
    if (v_talent >= 0) {
      uma.ero.buff.virgin += v_talent / 2;
    } else {
      uma.ero.buff.virgin -= 0.5;
    }
    if (inmon.on(plugin_enum.vi_u1)) {
      uma.ero.buff.virgin += 1;
    } else if (inmon.on(plugin_enum.vi_u2)) {
      uma.ero.buff.virgin += 2;
    } else if (inmon.on(plugin_enum.vi_u3)) {
      uma.ero.buff.virgin += 4;
    } else if (inmon.on(plugin_enum.vi_d1)) {
      uma.ero.buff.virgin -= 0.2;
    } else if (inmon.on(plugin_enum.vi_d2)) {
      uma.ero.buff.virgin -= 0.4;
    } else if (inmon.on(plugin_enum.vi_d3)) {
      uma.ero.buff.virgin -= 0.8;
    }
    uma.ero.cost.virgin = -0.1 * era.get(`abl:${cid}:질구내성`);
    uma.ero.main.push('virgin');
  }
  const is_drug_penis =
    era.get(`status:${cid}:펄롱K`) > 0 || era.get(`status:${cid}:펄롱P`) > 0;
  if (sex > 0 || is_drug_penis) {
    uma.ero.buff.penis = uma.ero.buff.sex;
    const p_talent =
      sex === 0 ? era.get(`talent:${cid}:음란한클리토리스`) : era.get(`talent:${cid}:조루`);
    if (p_talent >= 0) {
      uma.ero.buff.penis += p_talent / 2;
    } else {
      uma.ero.buff.penis -= 0.5;
    }
    if (inmon.on(plugin_enum.pe_u1)) {
      uma.ero.buff.penis += 1;
    } else if (inmon.on(plugin_enum.pe_u2)) {
      uma.ero.buff.penis += 2;
    } else if (inmon.on(plugin_enum.pe_u3)) {
      uma.ero.buff.penis += 4;
    } else if (inmon.on(plugin_enum.pe_d1)) {
      uma.ero.buff.penis -= 0.2;
    } else if (inmon.on(plugin_enum.pe_d2)) {
      uma.ero.buff.penis -= 0.4;
    } else if (inmon.on(plugin_enum.pe_d3)) {
      uma.ero.buff.penis -= 0.8;
    }
    uma.ero.cost.penis = -0.1 * era.get(`abl:${cid}:음경내성`);
    uma.ero.main.push('penis');
  } else {
    uma.ero.buff.clitoris = uma.ero.buff.sex;
    const c_talent = era.get(`talent:${cid}:음란한클리토리스`);
    if (c_talent >= 0) {
      uma.ero.buff.clitoris += c_talent / 2;
    } else {
      uma.ero.buff.clitoris -= 0.5;
    }
    if (inmon.on(plugin_enum.cl_u1)) {
      uma.ero.buff.clitoris += 1;
    } else if (inmon.on(plugin_enum.cl_u2)) {
      uma.ero.buff.clitoris += 2;
    } else if (inmon.on(plugin_enum.cl_u3)) {
      uma.ero.buff.clitoris += 4;
    } else if (inmon.on(plugin_enum.cl_d1)) {
      uma.ero.buff.clitoris -= 0.2;
    } else if (inmon.on(plugin_enum.cl_d2)) {
      uma.ero.buff.clitoris -= 0.4;
    } else if (inmon.on(plugin_enum.cl_d3)) {
      uma.ero.buff.clitoris -= 0.8;
    }
    uma.ero.cost.clitoris = -0.1 * era.get(`abl:${cid}:클리내성`);
  }
  Object.keys(uma.ero.buff).forEach(
    (k) => (uma.ero.buff[k] = Math.max(uma.ero.buff[k], -0.99)),
  );
  return uma;
}

module.exports = sys_get_chara_pseudo;
