const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const sys_count_juels = require('#/system/chara/sys-count-juels');
const get_ex_result_in_the_end = require('#/system/ero/sub-begin-and-end/get-ex-result-in-the-end');
const get_jewel_result = require('#/system/ero/sub-begin-and-end/get-jewel-result');
const sys_calc_ero_items = require('#/system/ero/sys-calc-ero-item');
const {
  clean_all_parts,
  reset_parts,
} = require('#/system/ero/sys-calc-ero-part');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { clean_juels, init_juels } = require('#/system/ero/sys-calc-juel');
const { clean_palams, init_palams } = require('#/system/ero/sys-calc-palam');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const { item_enum } = require('#/data/ero/item-const');
const {
  base_limit,
  erect_border,
  lust_border,
  lust_from_palam,
  lust_palam_border,
  palam2juel,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  part_talents,
  pleasure_list,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { gene_juel_names } = require('#/data/other-const');
const { attr_enum } = require('#/data/train-const');

let j_names;

/** @param {number} ids */
function update_ero_status(...ids) {
  for (const cid of ids) {
    const iron_will = era.get(`talent:${cid}:강철의의지`);
    const p_size = get_penis_size(cid);
    let base_buf = 5 * iron_will; // 钢之意志全上限+50%
    if (era.get(`status:${cid}:슈퍼우마뾰이Z`)) {
      base_buf -= 3;
    } else if (
      era.get(`status:${cid}:우마뾰이Z`) ||
      era.get(`status:${cid}:우마뾰이S`)
    ) {
      base_buf -= 2;
    } else if (
      era.get(`status:${cid}:펄롱K`) ||
      era.get(`status:${cid}:펄롱P`) ||
      era.get(`status:${cid}:생리`)
    ) {
      base_buf -= 1;
    }
    const c_mec = get_custom_mec(cid);
    pleasure_list.forEach((part) => {
      let limit = base_buf;
      const t_name = part_talents[part];
      if (
        part === part_enum.penis &&
        !era.get(`cflag:${cid}:성별`) &&
        p_size > 0
      ) {
        limit -= Math.max(Math.floor(2.5 * era.get(`talent:${cid}:음란한클리토리스`)), 1);
      } else if (t_name) {
        limit -= Math.floor(2.5 * era.get(`talent:${cid}:${t_name}`));
      }
      limit = (base_limit * (10 + limit)) / 10;
      const rand_range = Math.min(limit / 10, 100);
      limit += get_random_value(-rand_range, rand_range);
      limit = Math.max(limit + c_mec.get_param_limit_buff(part), 100);
      era.set(`tcvar:${cid}:${part_names[part]}쾌감상한`, limit);
    });
    if (!era.get(`status:${cid}:숙면`) && !era.get(`base:${cid}:기력`)) {
      era.set(`tcvar:${cid}:실신`, get_random_value(1, 5));
      era.set(`tcvar:${cid}:기력부족`, 1);
    }
    const i_estrus = era.set(
      `tcvar:${cid}:발정`,
      era.get(`tcvar:${cid}:발정`) ||
        (!era.get('flag:강간저항') && cid > 0) ||
        era.get(`base:${cid}:성욕`) >= lust_border.absent_mind ||
        era.get(`status:${cid}:발정`) ||
        era.get(`status:${cid}:우마뾰이Z`) ||
        era.get(`status:${cid}:슈퍼우마뾰이Z`) ||
        era.get(`status:${cid}:우마뾰이S`) ||
        era.get(`status:${cid}:펄롱K`) ||
        era.get(`status:${cid}:펄롱P`),
    );
    if (i_estrus && era.get(`talent:${cid}:음란한입`) > 0) {
      set_stain(cid, part_enum.mouth, stain_enum.saliva);
    }
    if (
      i_estrus &&
      era.get(`talent:${cid}:음란한가슴`) > 0 &&
      era.get(`talent:${cid}:모유분비`) > 0
    ) {
      set_stain(cid, part_enum.breast, stain_enum.milk);
    }
    if (
      era.get(`talent:${cid}:유두타입`) === 2 &&
      (i_estrus || era.get(`talent:${cid}:음란한가슴`) > 0)
    ) {
      era.set(`tcvar:${cid}:유두돌출`, 1);
    }
    if (
      p_size > 0 &&
      (i_estrus ||
        era.get(`status:${cid}:펄롱K`) ||
        era.get(`status:${cid}:펄롱P`))
    ) {
      era.set(
        `param:${cid}:음경쾌감`,
        Math.max(
          Math.ceil(
            (era.get(`tcvar:${cid}:음경쾌감상한`) * erect_border) / 2 + 0.9,
          ),
          era.get(`param:${cid}:음경쾌감`),
        ),
      );
      set_stain(cid, part_enum.penis, stain_enum.semen);
    }
    if (
      era.get(`cflag:${cid}:질크기`) > 0 &&
      (i_estrus ||
        era.get(`talent:${cid}:음란한자궁`) > 0 ||
        era.get(`status:${cid}:반콘돔`) > 0)
    ) {
      set_stain(cid, part_enum.virgin, stain_enum.secretion);
    }
    if (
      (i_estrus && era.get(`exp:${cid}:애널횟수`) > get_random_value(5, 15)) ||
      era.get(`talent:${cid}:음란한엉덩이`) === 2
    ) {
      set_stain(cid, part_enum.anal, stain_enum.anal);
    }
    if (era.get(`cflag:${cid}:겨드랑이털`) >= 3) {
      set_stain(cid, part_enum.body, stain_enum.dirt);
    }
    if (era.get(`cflag:${cid}:음모`) >= 3) {
      set_stain(
        cid,
        p_size ? part_enum.penis : part_enum.clitoris,
        stain_enum.dirt,
      );
    }
  }
}

/**
 * @param {number} cid
 * @param {number} ratio
 */
function update_temp_base(cid, ratio) {
  let temp = era.set(
    `tcvar:${cid}:임시체력`,
    Math.floor(era.get(`maxbase:${cid}:체력`) * ratio * 0.8),
  );
  era.add(`maxbase:${cid}:체력`, temp);
  era.add(`base:${cid}:체력`, temp);
  temp = era.set(
    `tcvar:${cid}:임시기력`,
    Math.floor(era.get(`maxbase:${cid}:기력`) * ratio),
  );
  era.add(`maxbase:${cid}:기력`, temp);
  era.add(`base:${cid}:기력`, temp);
}

/**
 * @param {number} cid
 * @param {string} jewel_name
 * @param {number} val
 * @param {Record<string,number>} dict
 */
function set_juel_buff(cid, jewel_name, val, dict) {
  if (dict !== undefined) {
    dict[jewel_name] = Math.min(Math.max(val, -0.99), 1);
  } else {
    era.set(
      `tcvar:${cid}:${jewel_name}인자보정`,
      Math.min(Math.max(val, -0.99), 1),
    );
  }
}

/**
 * @param {number} cid
 * @param {Record<string,any>} [dict]
 */
function update_c_j_buff(cid, dict) {
  const l_hate = era.get(`mark:${cid}:반발`);
  const in_train = era.getCharactersInTrain().length > 0;
  const i_rape = in_train && era.get('tflag:강간') === 0 && cid > 0;
  const lust = era.get(`base:${cid}:성욕`);
  const lust_buf =
    era.get(`talent:${cid}:음란`) / 5 +
    (lust >= lust_border.itch) / 10 +
    ((lust >= lust_border.absent_mind) * 3) / 20 +
    (lust >= lust_border.want_sex) / 4;
  const l_meek = era.get(`mark:${cid}:동심`);
  const l_pain = era.get(`mark:${cid}:고통`);
  const l_pleasure = era.get(`mark:${cid}:쾌락`);
  const l_shame = era.get(`mark:${cid}:수치`);
  const l_slave = era.get(`mark:${cid}:음문`);
  let love_buff = 0;
  if (cid > 0) {
    love_buff = era.get(`love:${cid}`);
    if (love_buff === 100) {
      love_buff = 0.9;
    } else if (love_buff >= 90) {
      love_buff = 0.5;
    } else if (love_buff >= 75) {
      love_buff = 0.2;
    } else {
      love_buff = 0;
    }
  }
  set_juel_buff(
    cid,
    '순종',
    ((era.get(`talent:${cid}:자신감`) +
      era.get(`talent:${cid}:솔직함정도`) +
      era.get(`talent:${cid}:성적흥미`) +
      era.get(`talent:${cid}:감정활동`)) *
      3) /
      10 +
      (l_slave === 0
        ? lust_buf / 2 +
          l_pleasure / 10 +
          Math.max(l_pain, l_shame) / 20 +
          l_hate / 20 -
          i_rape
        : l_slave / 10 - 0.1) +
      !cid / 2,
    dict,
  );
  set_juel_buff(
    cid,
    '고통',
    ((era.get(`talent:${cid}:고통감수`) +
      era.get(`talent:${cid}:미래에대한기대`) +
      era.get(`talent:${cid}:감정활동`)) *
      3) /
      10 +
      (l_slave * -0.16 ||
        i_rape / 2 +
          l_pain / 10 -
          (l_meek * 3) / 20 -
          l_hate / 20 -
          love_buff / 2 -
          lust_buf / 2),
    dict,
  );
  set_juel_buff(
    cid,
    '공포',
    ((era.get(`talent:${cid}:공포감수`) +
      era.get(`talent:${cid}:미래에대한기대`) +
      era.get(`talent:${cid}:사교태도`) +
      era.get(`talent:${cid}:감정활동`)) *
      3) /
      10 +
      (l_slave * -0.33 ||
        i_rape / 2 +
          (era.get(`tequip:${cid}:안대`) === item_enum.blindfold) / 2 +
          l_pain / 10 -
          (l_meek * 3) / 20 -
          l_hate / 20 -
          love_buff / 2 -
          lust_buf / 2),
    dict,
  );
  set_juel_buff(
    cid,
    '수치',
    ((era.get(`talent:${cid}:수치내성`) +
      era.get(`talent:${cid}:정조관념`) +
      era.get(`talent:${cid}:사교태도`) +
      era.get(`talent:${cid}:감정활동`)) *
      3) /
      10 +
      i_rape / 2 +
      (l_slave * -0.33 ||
        (in_train && era.get('tflag:전신거울') > 0) / 2 +
          l_shame / 10 -
          (l_meek * 3) / 20 -
          l_hate / 20 -
          (love_buff * 4) / 5 -
          lust_buf / 2),
    dict,
  );
  set_juel_buff(
    cid,
    '반감',
    0.3 *
      (era.get(`talent:${cid}:반감획득`) +
        era.get(`talent:${cid}:정조관념`) +
        era.get(`talent:${cid}:솔직함정도`) +
        era.get(`talent:${cid}:성적흥미`) +
        era.get(`talent:${cid}:감정활동`)) +
      (l_slave * -0.33 ||
        i_rape +
          l_hate / 10 +
          l_pain / 20 +
          l_shame / 20 -
          l_meek / 4 -
          love_buff -
          lust_buf / 2),
    dict,
  );
  set_juel_buff(
    cid,
    '가학',
    lust_buf +
      (era.get(`talent:${cid}:소악마`) + era.get(`talent:${cid}:변태`)) / 2,
    dict,
  );
  set_juel_buff(
    cid,
    '피학',
    lust_buf +
      (era.get(`talent:${cid}:성모`) + era.get(`talent:${cid}:변태`)) / 2,
    dict,
  );
  set_juel_buff(cid, '구강', lust_buf, dict);
  set_juel_buff(
    cid,
    '가슴',
    lust_buf + era.get(`talent:${cid}:유방사이즈`) / 5,
    dict,
  );
  set_juel_buff(cid, '신체', lust_buf, dict);
  set_juel_buff(cid, '클리', lust_buf, dict);
  set_juel_buff(cid, '질구', lust_buf, dict);
  set_juel_buff(cid, '항문', lust_buf, dict);
  set_juel_buff(cid, '음경', lust_buf, dict);
}

/** @param {number} ids */
function update_juel_buff(...ids) {
  ids.forEach((cid) => update_c_j_buff(cid));
}

/** @param {number} ids */
function init_ero(...ids) {
  ids = ids.filter((cid) => era.get(`tcvar:${cid}`) === undefined);
  era.addCharacterForTrain(...ids);
  update_ero_status(...ids);
  update_juel_buff(...ids);
  init_palams(...ids);
  init_juels(...ids);
  reset_parts(...ids);
  sys_calc_ero_items.init_items(...ids);
  for (const cid of ids) {
    const height = era.get(`cflag:${cid}:키`);
    era.set(
      `tcvar:${cid}:체중`,
      20 * (height / 100) ** 2 + (era.get(`base:${cid}:체중 편차`) * 10) / 2000,
    );
    era.set(`tcvar:${cid}:입술위치`, height * 0.12);
    era.set(`tcvar:${cid}:어깨위치`, height * 0.2);
    era.set(`tcvar:${cid}:유방위치`, height * 0.28);
    era.set(`tcvar:${cid}:회음위치`, height * 0.5);
    era.set(`tcvar:${cid}:팔길이`, height * 0.4);
    era.set(`tcvar:${cid}:성욕저장`, era.get(`base:${cid}:성욕`));
    era.set(`tcvar:${cid}:스트레스저장`, era.get(`base:${cid}:스트레스`));
    let temp;
    era.set(
      `tcvar:${cid}:체력저장`,
      Math.max(
        Math.min(
          (temp = era.set(
            `base:${cid}:체력`,
            Math.floor(era.get(`base:${cid}:체력`)),
          )) * get_random_value(0.6, 0.8, true),
          temp - 100,
        ),
        1,
      ),
    );
    era.set(
      `tcvar:${cid}:기력저장`,
      Math.max(
        Math.min(
          (temp = era.set(`base:${cid}:기력`, era.get(`base:${cid}:기력`))) *
            get_random_value(0.6, 0.8, true),
          temp - 100,
        ),
        1,
      ),
    );
    if (era.get(`status:${cid}:슈퍼우마뾰이Z`)) {
      update_temp_base(cid, 0.4);
    }
    if (cid > 0 && era.get(`cflag:${cid}:종족`) > 0) {
      let edu_phase = era.get(`cflag:${cid}:육성턴수합산`);
      if (edu_phase < 3 * 48) {
        const juels = sys_count_juels(cid, Math.floor(edu_phase / 48) / 3);
        era.set(`tcvar:${cid}:분홍색인자`, Math.floor(juels.pink));
        era.set(`tcvar:${cid}:푸른색인자`, Math.floor(juels.blue));
        era.set(`tcvar:${cid}:흰색인자`, Math.floor(juels.white));
      } else {
        gene_juel_names.forEach((e) =>
          era.set(`tcvar:${cid}:${e}인자`, era.get(`jewel:${cid}:${e}`)),
        );
      }
    }
    if (
      cid > 0 &&
      era.get(`love:${cid}`) >= 90 &&
      era.get(`cflag:${cid}:성별`) !== 1 &&
      era.get(`status:${cid}:생리`) === 0 &&
      era.get(`cflag:${cid}:임신단계`) === 1 << pregnant_stage_enum.no &&
      sys_check_yandere(cid, (y) => y > 0)
    ) {
      const yandere = era.get(`talent:${cid}:얀데레`);
      if (Math.random() < yandere * 0.4) {
        era.set(`status:${cid}:반콘돔`, 1);
      }
    }
    if (
      era.get(`status:${cid}:애정억제`) > 0 &&
      era.getCharactersInTrain().findIndex((e) => !e) !== -1 &&
      sys_check_awake(0)
    ) {
      era.set(`status:${cid}:애정억제`, 0);
    }
  }
}

/** @param {number} ids */
function begin_and_init_ero(...ids) {
  if (j_names === undefined) {
    j_names = era.get('jewelnames').slice(0, 13);
  }
  era.beginTrain();
  era.set('tflag:턴', 1);
  era.set('tflag:이전행동', -1);
  era.set('tflag:상대의행동', -1);
  era.set('tflag:강간', -1);
  init_ero(...ids);
}

/**
 * @param {boolean} skip_jewels
 * @param {boolean} log_jewels
 * @param {number[]} ids
 * @returns {{attr:Record<string,(PrintedSpan|string)[][]>,[jewel]:Record<string,Record<string,number>>}}
 */
function end_ero(skip_jewels, log_jewels, ids) {
  let ret = { attr: {}, jewel: {} };
  sys_calc_ero_items.remove_all_items(...ids);
  clean_all_parts(...ids);
  const includes_me = ids.includes(0);
  const is_slave = includes_me && era.get('flag:징벌강도') >= 2;
  const is_sex = includes_me && ids.length > 1;
  const is_sleeping = is_sex && !sys_check_awake(0);
  for (const cid of ids) {
    if (is_sex) {
      era.add(`exp:${cid}:성관계횟수`, 1);
    }
    if (is_sleeping) {
      era.add(`exp:${cid}:수면간횟수`, 1);
    }
    era.add(`love:${cid}`, !era.get(`love:${cid}`));
    pleasure_list.forEach((part) => {
      const part_name = part_names[part];
      if (
        era.get(`param:${cid}:${part_name}쾌감`) >
        era.get(`tcvar:${cid}:${part_name}쾌감상한`) * lust_palam_border
      ) {
        let times = 1;
        const talent_name = part_talents[part];
        if (talent_name) {
          switch (era.get(`talent:${cid}:${talent_name}`)) {
            case -4:
              times += 1;
              break;
            case 1:
              times += 0.2;
              break;
            case 2:
              times += 0.5;
          }
        }
        sys_change_lust(cid, lust_from_palam * times);
      }
    });
    const got = new Array(13).fill(0);
    const un_got = new Array(13).fill(0);
    ret.jewel[cid] = {};
    for (let i = 12; i >= 0; --i) {
      got[i] = Math.floor(
        era.get(`gotjewel:${cid}:${j_names[i]}`) / palam2juel,
      );
      if (!skip_jewels && i < 12) {
        un_got[i] = got[i + 1] + un_got[i + 1];
      }
    }
    const got_self_protect = Math.floor(
      era.get(`gotjewel:${cid}:자위`) / palam2juel,
    );
    let self_protect =
      skip_jewels || !cid
        ? 0
        : Math.min(
            era.get(`jewel:${cid}:자위`) + got_self_protect,
            un_got[0] + got[0],
          );
    era.add(`jewel:${cid}:자위`, got_self_protect - self_protect);
    if (log_jewels) {
      ret.jewel[cid]['자위'] = got_self_protect;
      ret.jewel[cid]['-자위'] = self_protect;
    }
    j_names.forEach((j_name, i) => {
      const lost = get_random_value(
        Math.max(self_protect - un_got[i], 0),
        Math.min(got[i], self_protect),
      );
      got[i] -= lost;
      self_protect -= lost;
      era.add(`jewel:${cid}:${j_name}`, got[i]);
      if (log_jewels) {
        ret.jewel[cid][j_name] = got[i];
        ret.jewel[cid][`-${j_name}`] = lost;
      }
    });
    const s_orgasm_count = era.get(`ex:${cid}:가학절정`);
    const m_orgasm_count = era.get(`ex:${cid}:피학절정`);
    if (s_orgasm_count) {
      sys_change_pressure(
        cid,
        -100 * (1 + 3 * era.get(`talent:${cid}:도S`)) * s_orgasm_count,
      );
    }
    if (m_orgasm_count) {
      sys_change_pressure(
        cid,
        -100 *
          (1 +
            3 *
              (era.get(`talent:${cid}:매도좋아함`) ||
                era.get(`talent:${cid}:고통좋아함`))) *
          m_orgasm_count,
      );
    }
    sys_change_pressure(
      cid,
      -200 * (era.get(`ex:${cid}:TotalEX`) - s_orgasm_count - m_orgasm_count),
    );
    let temp;
    if ((temp = era.get(`tcvar:${cid}:임시체력`))) {
      era.add(`base:${cid}:체력`, -temp);
      era.add(`maxbase:${cid}:체력`, -temp);
    }
    if ((temp = era.get(`tcvar:${cid}:임시기력`))) {
      era.add(`base:${cid}:기력`, -temp);
      era.add(`maxbase:${cid}:기력`, -temp);
    }
    era.get(`tcvar:${cid}:기력부족`) && era.set(`base:${cid}:기력`, 0);
    era.set(
      `base:${cid}:체력`,
      Math.floor(
        Math.min(era.get(`base:${cid}:체력`), era.get(`tcvar:${cid}:체력저장`)),
      ),
    );
    era.set(
      `base:${cid}:기력`,
      Math.floor(
        Math.min(era.get(`base:${cid}:기력`), era.get(`tcvar:${cid}:기력저장`)),
      ),
    );
    if (cid > 0 && is_slave) {
      sys_change_fame(
        Math.max(
          era.get(`tcvar:${cid}:성욕저장`) - era.get(`base:${cid}:성욕`),
          0,
        ) /
          200 +
          Math.max(
            era.get(`tcvar:${cid}:스트레스저장`) - era.get(`base:${cid}:스트레스`),
            0,
          ) /
            100,
      );
    }
    ret.attr[cid] = Object.values(attr_enum).map((a, i) =>
      sys_change_attr_and_print(
        cid,
        a,
        // EXNAME:27 - 31 = 스피드획득 - 지능획득
        era.get(`ex:${cid}:${27 + i}`) / get_random_value(4, 6),
      ),
    );
    let pt = era.get(`ex:${cid}:스킬포인트획득`);
    if (pt > 0) {
      pt = Math.floor(pt / get_random_value(8, 12));
      ret.attr[cid].push(`획득 ${pt.toLocaleString()} 스킬 포인트 획득`);
      era.add(`exp:${cid}:스킬포인트`, pt);
    }
  }
  if (includes_me) {
    for (const cid of ids) {
      if (cid > 0 && era.get(`cflag:${cid}:종족`) > 0) {
        let got = Math.floor(era.get(`tcvar:${cid}:획득인자`) / palam2juel);
        let jewels = new Array(3)
          .fill(0)
          // TCVARNAME:70 - 72 = 분홍색인자 - 흰색인자
          .map((_, i) => era.get(`tcvar:${cid}:${70 + i}`));
        if (got > 0) {
          if (got < jewels.reduce((p, c) => p + c, 0)) {
            jewels = jewels.map((e, i, l) => {
              const val = get_random_value(
                Math.max(got - l.slice(i + 1).reduce((p, c) => p + c, 0), 0),
                got,
              );
              got -= val;
              return val;
            });
          }
          // JEWELNAME:20 - 22 = 분홍색 - 흰색
          jewels.forEach((e, i) => era.add(`gotjewel:0:${20 + i}`, e));
          if (era.get(`cflag:${cid}:명예의전당`) > 0) {
            CharaAvailableGenes.merge_into_player(new CharaAvailableGenes(cid));
          }
        }
      }
    }
    // JEWELNAME:20 - 22 = 분홍색 - 흰색
    for (let jid = 20; jid <= 22; ++jid) {
      era.add(
        `jewel:0:${jid}`,
        (ret.jewel[0][jid] = era.get(`gotjewel:0:${jid}`)),
      );
    }
  }
  if (!log_jewels) {
    ret.jewel = void 0;
  }
  era
    .get('paramkeys')
    .forEach((v) => ids.forEach((cid) => era.set(`gotjewel:${cid}:${v}`, 0)));
  return ret;
}

/** @param {boolean} [skip_juels=false] */
function end_ero_and_train(skip_juels = false) {
  clean_juels();
  clean_palams();
  end_ero(skip_juels, false, era.getCharactersInTrain());
  era.endTrain();
}

/** @param {boolean} [shown=true] */
async function end_ero_and_show_result(shown = true) {
  clean_juels();
  clean_palams();
  const chara_list = era.getCharactersInTrain();
  const info = end_ero(false, shown, chara_list);
  if (shown) {
    if (era.get('flag:우마뾰이결과요약표시') > 0) {
      for (const cid of chara_list) {
        const buffer = get_jewel_result(
          cid,
          j_names,
          info.jewel[cid],
          info.attr[cid],
        );
        era.printMultiColumns(buffer, { width: 18 });
        await era.waitAnyKey();
      }
    } else {
      let result_flag = true;
      let page = 0;
      let chara_index = 0;
      era.println();
      get_chara_talk(302).say_as_unknown('발표! 하이라이트 중계~♫');
      get_chara_talk(301).say_as_unknown('이제 이번 우마뾰이 보고를 전해 드립니다~');
      const reporter = get_chara_talk(306);
      if (Math.random() < 0.01) {
        await reporter.say_as_unknown_and_wait('마……마음에 안……들면……');
        await get_chara_talk(203).say_as_unknown_and_wait('트레이너~');
        await get_chara_talk(202).say_as_unknown_and_wait(
          '힘내세요! 트레이너님~ 힘내세요!',
        );
        await reporter.say_as_unknown_and_wait(
          '……다음 우마뾰이 시 인터페이스 설정에서 【우마뾰이 결과 요약】을 켜주세요……',
        );
        await reporter.say_as_unknown_and_wait('……오～');
      } else {
        await reporter.say_as_unknown_and_wait(
          '마음에 들지 않으시면 우마뾰이에서 인터페이스 설정에서 【우마뾰이 결과 요약】을 켜주세요~',
        );
      }

      while (result_flag) {
        await era.clear();
        era.setToBottom();
        era.drawLine({ content: '우마뾰이 결과', position: 'left' });
        switch (page) {
          case 0:
            era.printMultiColumns(
              get_jewel_result(
                chara_list[chara_index],
                j_names,
                info.jewel[chara_list[chara_index]],
                info.attr[chara_list[chara_index]],
              ),
              {
                width: 18,
              },
            );
            break;
          case 1:
            era.printMultiColumns(
              get_ex_result_in_the_end(chara_list[chara_index]),
              {
                width: 18,
              },
            );
        }
        era.setVerticalAlign('middle');
        era.printInColRows(
          [{ type: 'divider' }],
          {
            columns: [{ accelerator: 4, content: '이전 페이지', type: 'button' }],
            config: { width: 6 },
          },
          {
            columns: [
              {
                accelerator: 8,
                config: { disabled: chara_list[chara_index - 1] === undefined },
                content: `이전 - ${era.get(
                  `callname:${chara_list[chara_index - 1]}:-2`,
                )}`,
                type: 'button',
              },
              {
                accelerator: 2,
                config: { disabled: chara_list[chara_index + 1] === undefined },
                content: `다음 - ${era.get(
                  `callname:${chara_list[chara_index + 1]}:-2`,
                )}`,
                type: 'button',
              },
            ],
            config: { width: 6 },
          },
          {
            columns: [{ accelerator: 6, content: '다음 페이지', type: 'button' }],
            config: { width: 6 },
          },
          {
            columns: [
              {
                accelerator: 999,
                config: { align: 'right' },
                content: '종료',
                type: 'button',
              },
            ],
            config: { width: 6 },
          },
        );
        era.setVerticalAlign('top');
        const ret = await era.input();
        switch (ret) {
          case 2:
            chara_index++;
            break;
          case 4:
            page = (page + 1) % 2;
            break;
          case 6:
            page = (page + 1) % 2;
            break;
          case 8:
            chara_index--;
            break;
          case 999:
          default:
            result_flag = false;
        }
      }
    }
  }
  era.endTrain();
}

module.exports = {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  get_characters_in_train() {
    return era
      .getCharactersInTrain()
      .filter((e) => !era.get(`tcvar:${e}:도주`));
  },
  init_ero,
  set_palam_to_max(cid, ...parts) {
    parts.forEach((part) => {
      if (
        part_names[part] &&
        era.get(`tcvar:${cid}:${part_names[part]}쾌감상한`)
      ) {
        era.set(
          `param:${cid}:${part_names[part]}쾌감`,
          Math.max(
            era.get(`param:${cid}:${part_names[part]}쾌감`),
            era.get(`tcvar:${cid}:${part_names[part]}쾌감상한`),
          ),
        );
      }
    });
  },
  update_c_j_buff,
  update_ero_status,
  update_juel_buff,
  update_temp_base,
};
