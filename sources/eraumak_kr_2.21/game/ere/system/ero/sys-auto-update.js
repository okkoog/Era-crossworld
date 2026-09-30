const era = require('#/era-electron');

const { get_skill_price } = require('#/system/ero/sys-get-juel-price');

const { get_random_entry } = require('#/utils/list-utils');

const skill_names = require('#/data/ero/shop-desc.json').skill_desc.map((e) =>
  e.substring(0, 4),
);
const { part_names, pleasure_list } = require('#/data/ero/part-const');

/** @param {number} cid */
function sys_auto_update(cid) {
  if (!cid) {
    return;
  }
  const sex = era.get(`cflag:${cid}:성별`);
  const my_sex = era.get('cflag:0:성별');
  let cand_list;
  /** @type {Record<string,Record<string,number>>} */
  const s_p_dict = {};
  skill_names.forEach((skill) => {
    const level = era.get(`abl:${cid}:${skill}`);
    if (level === 5) {
      s_p_dict[skill] = undefined;
    } else {
      s_p_dict[skill] = get_skill_price(cid, skill, level + 1, true);
    }
  });
  const pref_dict = {};
  if (
    era.get(`talent:${cid}:성적성향`) === 1 ||
    era.get(`talent:${cid}:음란`) ||
    era.get(`talent:${cid}:수치내성`) === -1 ||
    era.get(`talent:${cid}:사교태도`) === -1 ||
    era.get(`love:${cid}`) >= 75
  ) {
    pref_dict['달콤한말'] = true;
  }
  if (era.get(`talent:${cid}:방탕한입술`)) {
    pref_dict['키스기술'] = true;
    pref_dict['구강기술'] = true;
  }
  if (era.get(`talent:${cid}:정액음용중독`)) {
    pref_dict['구강기술'] = true;
    pref_dict['음경숙련'] = true;
  }
  era.get('talent:0:음란한입') > 0 && (pref_dict['구강숙련'] = true);
  if (era.get(`talent:${cid}:음란한입`) > 0 || era.get(`talent:${cid}:목구멍민감`)) {
    pref_dict['구강내성'] = true;
  }
  era.get(`talent:${cid}:요염한유방`) && (pref_dict['유방기술'] = true);
  era.get('talent:0:음란한가슴') > 0 && (pref_dict['가슴숙련'] = true);
  era.get(`talent:${cid}:음란한가슴`) > 0 && (pref_dict['가슴내성'] = true);
  era.get(`talent:${cid}:신의손`) && (pref_dict['수음기술'] = true);
  era.get(`talent:${cid}:신의발`) && (pref_dict['다리기술'] = true);
  era.get('talent:0:음란한몸') > 0 && (pref_dict['신체숙련'] = true);
  era.get(`talent:${cid}:음란한몸`) > 0 && (pref_dict['신체내성'] = true);
  if (era.get(`talent:${cid}:정액욕중독`)) {
    pref_dict['유방기술'] = true;
    pref_dict['수음기술'] = true;
    pref_dict['다리기술'] = true;
    pref_dict['신체기술'] = true;
  }
  if (era.get(`talent:${cid}:냄새민감`)) {
    pref_dict['가슴내성'] = true;
    pref_dict['신체내성'] = true;
    !sex && (pref_dict['클리내성'] = true);
  }
  if (sex) {
    era.get(`talent:${cid}:흉기`) && (pref_dict['삽입기술'] = true);
    era.get(`talent:${cid}:조루`) > 0 && (pref_dict['음경내성'] = true);
  }
  my_sex && era.get('talent:0:조루') > 0 && (pref_dict['음경숙련'] = true);
  if (sex - 1) {
    if (era.get(`talent:${cid}:명기`)) {
      pref_dict['성교기술'] = true;
    }
    if (era.get(`talent:${cid}:정액착취중독`)) {
      pref_dict['성교기술'] = true;
      pref_dict['음경숙련'] = true;
    }
  }
  !my_sex && era.get('talent:0:음란한클리토리스') > 0 && (pref_dict['클리숙련'] = true);
  my_sex - 1 && era.get('talent:0:음란한자궁') > 0 && (pref_dict['질구숙련'] = true);
  !sex && era.get(`talent:${cid}:음란한클리토리스`) > 0 && (pref_dict['클리내성'] = true);
  if (
    sex - 1 &&
    (era.get(`talent:${cid}:음란한자궁`) > 0 || era.get(`talent:${cid}:자궁민감`))
  ) {
    pref_dict['질구내성'] = true;
  }
  era.get(`talent:${cid}:마성의엉덩이`) && (pref_dict['항문기술'] = true);
  if (era.get(`talent:${cid}:정액관장`)) {
    pref_dict['항문기술'] = true;
    pref_dict['음경숙련'] = true;
  }
  era.get('talent:0:음란한엉덩이') > 0 && (pref_dict['항문숙련'] = true);
  if (era.get(`talent:${cid}:음란한엉덩이`) > 0 || era.get(`talent:${cid}:창자민감`)) {
    pref_dict['항문내성'] = true;
  }
  if (
    era.get(`talent:${cid}:도S`) ||
    era.get(`talent:${cid}:소악마`) ||
    era.get(`talent:${cid}:변태`)
  ) {
    pref_dict['가학기술'] = true;
    pref_dict['피학숙련'] = true;
  }
  if (
    era.get(`talent:${cid}:매도좋아함`) > 0 ||
    era.get(`talent:${cid}:고통좋아함`) > 0
  ) {
    pref_dict['피학내성'] = true;
  }
  const u_rec = {};
  do {
    /** @type {Record<string,number>} */
    const j_dict = {};
    pleasure_list.forEach((part) => {
      const key = `${part_names[part]}쾌감`;
      j_dict[key] = era.get(`jewel:${cid}:${key}`);
    });

    cand_list = [];
    cand_list = Object.keys(pref_dict);

    if (!cand_list.length) {
      cand_list.push(
        '달콤한말',
        '키스기술',
        '구강기술',
        '구강숙련',
        '구강내성',
        '유방기술',
        '가슴숙련',
        '가슴내성',
        '수음기술',
        '다리기술',
        '신체기술',
        '신체숙련',
        '신체내성',
        '음경숙련',
        '클리숙련',
        '질구숙련',
        '항문기술',
        '항문숙련',
        '항문내성',
        '가학기술',
        '피학숙련',
        '피학내성',
      );
      if (sex) {
        cand_list.push('삽입기술', '음경내성');
      }
      if (!sex) {
        cand_list.push('클리내성');
      }
      if (sex !== 1) {
        cand_list.push('성교기술', '질구내성');
      }
    }
    cand_list = cand_list.filter(
      (skill) =>
        typeof s_p_dict[skill] === 'object' &&
        Object.entries(s_p_dict[skill]).filter(([j, p]) => p > j_dict[j])
          .length === 0,
    );
    const u_skill = get_random_entry(cand_list);
    if (u_skill) {
      u_rec[u_skill] = (u_rec[u_skill] || 0) + 1;
      Object.entries(s_p_dict[u_skill]).forEach((e) =>
        era.add(`juel:${cid}:${e[0]}`, -e[1]),
      );
      const level = era.add(`abl:${cid}:${u_skill}`, 1);
      if (level === 5) {
        delete s_p_dict[u_skill];
      } else {
        s_p_dict[u_skill] = get_skill_price(cid, u_skill, level + 1, true);
      }
    }
  } while (cand_list.length > 0);
  era.logger.debug(
    `角色 ${cid} 性技学习完毕!\n${Object.entries(u_rec)
      .map(([s, l]) => `${s}+${l}`)
      .join('，')}`,
  );
}

module.exports = sys_auto_update;
