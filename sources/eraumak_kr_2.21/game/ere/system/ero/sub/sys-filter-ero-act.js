const era = require('#/era-electron');

const {
  check_erect,
  check_lubrication,
  check_virgin_enabled,
  get_penis_size,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { part_enum } = require('#/data/ero/part-const');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_actions,
  ero_hook_tags,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');
const { get_breast_cup } = require('#/data/info-generator');

/**
 * @param {(number|function)[]} tags
 * @param {number} cid
 * @param {number} oid
 * @param {boolean[]} chara_check
 * @param {boolean[]} common_check
 * @returns {boolean}
 */
function check_tags(tags, cid, oid, chara_check, common_check) {
  const fail = tags.findIndex((tag) => {
    let ret;
    if (typeof tag === 'function') {
      ret = !tag(cid, oid);
    } else {
      ret = chara_check[tag] === false || common_check[tag] === false;
    }
    return ret;
  });
  return fail === -1;
}

const c_cup_code = 'C'.charCodeAt(0);

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {boolean[]} filters
 * @returns {number[]}
 */
function sys_filter_ero_act(
  attacker,
  defender,
  [d_vir, d_anal, d_sm, d_pet, d_tit, d_ask, d_for],
) {
  /** @type {Record<string,boolean[]>} */
  const tag_checks = {};
  [attacker, defender].forEach((cid) => {
    tag_checks[cid] = [];
    tag_checks[cid][ero_hook_tags.anal] =
      !d_anal &&
      era.get(`tequip:${cid}:항문`) === -1 &&
      (!attacker || check_lubrication(cid, part_enum.anal));
    tag_checks[cid][ero_hook_tags.awake] =
      sys_check_awake(cid) &&
      !era.get(`tcvar:${cid}:탈력`) &&
      !era.get(`tcvar:${cid}:실신`);
    tag_checks[cid][ero_hook_tags.body] = true;
    tag_checks[cid][ero_hook_tags.breast] =
      era.get(`cflag:${cid}:성별`) !== 1 &&
      (!d_tit ||
        (get_breast_cup(cid).charCodeAt(0) >= c_cup_code &&
          check_lubrication(cid, part_enum.breast)));
    tag_checks[cid][ero_hook_tags.clitoris] =
      !d_vir &&
      check_virgin_enabled(cid) &&
      !get_penis_size(cid) &&
      era.get(`tequip:${cid}:클리`) === -1;
    tag_checks[cid][ero_hook_tags.foot] = true;
    tag_checks[cid][ero_hook_tags.hand] = true;
    tag_checks[cid][ero_hook_tags.m_abused] =
      !d_sm && (!attacker || era.get(`talent:${cid}:매도좋아함`) > 0);
    tag_checks[cid][ero_hook_tags.m_hit] =
      !d_sm && (!attacker || era.get(`talent:${cid}:고통좋아함`) > 0);
    tag_checks[cid][ero_hook_tags.mouth] = era.get(`tequip:${cid}:구강`) === -1;
    tag_checks[cid][ero_hook_tags.nipple] =
      era.get(`tequip:${cid}:가슴`) === -1;
    tag_checks[cid][ero_hook_tags.touched_nipple] =
      (era.get(`talent:${cid}:유두타입`) !== 2 ||
        era.get(`tcvar:${cid}:유두돌출`) > 0) &&
      tag_checks[cid][ero_hook_tags.nipple];
    tag_checks[cid][ero_hook_tags.penis] =
      get_penis_size(cid) > 0 && era.get(`tequip:${cid}:음경`) === -1;
    tag_checks[cid][ero_hook_tags.insert] =
      tag_checks[cid][ero_hook_tags.penis] && check_erect(cid);
    tag_checks[cid][ero_hook_tags.pet] = !d_pet;
    tag_checks[cid][ero_hook_tags.race] = era.get(`cflag:${cid}:종족`) > 0;
    tag_checks[cid][ero_hook_tags.super_sadism] =
      !attacker ||
      (era.get('tflag:강간') === attacker && get_sex_acceptable(cid) < 0) ||
      era.get(`mark:${cid}:반발`) >= 2 ||
      era.get(`base:${cid}:스트레스`) >= 5000 ||
      (era.get(`talent:${cid}:도S`) > 0 &&
        era.get(`talent:${cid}:반항의사`) === 1);
    tag_checks[cid][ero_hook_tags.sadism] =
      tag_checks[cid][ero_hook_tags.super_sadism] ||
      era.get(`talent:${cid}:도S`) > 0 ||
      era.get(`talent:${cid}:반항의사`) === 1 ||
      (cid > 0 && era.get('flag:징벌강도') >= 2);
    tag_checks[cid][ero_hook_tags.imp] =
      tag_checks[cid][ero_hook_tags.sadism] ||
      era.get(`talent:${cid}:소악마`) > 0;
    tag_checks[cid][ero_hook_tags.super_sadism] &&= !d_sm;
    tag_checks[cid][ero_hook_tags.sadism] &&= !d_sm;
    tag_checks[cid][ero_hook_tags.imp] &&= !d_sm;
    tag_checks[cid][ero_hook_tags.sex_check] =
      !d_vir && (get_penis_size(cid) > 0 || check_virgin_enabled(cid));
    tag_checks[cid][ero_hook_tags.tongue] = true;
    tag_checks[cid][ero_hook_tags.virgin] =
      !d_vir &&
      check_virgin_enabled(cid) &&
      era.get(`tequip:${cid}:질구`) === -1 &&
      (!attacker || check_lubrication(cid, part_enum.virgin));
  });
  tag_checks[attacker][ero_hook_tags.height_check] =
    era.get(`cflag:${attacker}:키`) > era.get(`cflag:${defender}:키`) + 20;
  const supporter = era.get('tflag:현재조수');
  const supporter_tag_checks = {};
  supporter_tag_checks[ero_hook_tags.supporter_awake] =
    supporter > 0 &&
    sys_check_awake(supporter) &&
    !era.get(`tcvar:${supporter}:탈력`) &&
    !era.get(`tcvar:${supporter}:실신`);
  supporter_tag_checks[ero_hook_tags.supporter_mouth] =
    supporter > 0 && era.get(`tequip:${supporter}:구강`) === -1;
  supporter_tag_checks[ero_hook_tags.supporter_breast] =
    supporter > 0 &&
    era.get(`cflag:${supporter}:성별`) !== 1 &&
    (!d_tit ||
      (get_breast_cup(supporter).charCodeAt(0) >= c_cup_code &&
        check_lubrication(supporter, part_enum.breast)));
  supporter_tag_checks[ero_hook_tags.supporter_insert] =
    supporter > 0 && get_penis_size(supporter) > 0 && check_erect(supporter);
  supporter_tag_checks[ero_hook_tags.supporter_sex_check] =
    supporter > 0 &&
    !d_vir &&
    (get_penis_size(supporter) > 0 || check_virgin_enabled(supporter));
  supporter_tag_checks[ero_hook_tags.supporter_virgin] =
    supporter > 0 &&
    !d_vir &&
    check_virgin_enabled(supporter) &&
    (!attacker || check_lubrication(supporter, part_enum.virgin));

  const is_master = attacker === era.get('tflag:주도권');
  return ero_actions.filter((e) => {
    const tags = ero_tagged_hooks[e] || default_tags;
    const hook_name = ero_hooks.keys[e];
    return (
      (tags.condition === condition_type.no ||
        (is_master && tags.condition === condition_type.active) ||
        (!is_master && tags.condition === condition_type.in_active)) &&
      (!hook_name.startsWith('ask_') || !d_ask) &&
      (!hook_name.startsWith('force_') || !d_for) &&
      check_tags(
        tags.attacker_tags,
        attacker,
        defender,
        tag_checks[attacker],
        supporter_tag_checks,
      ) &&
      check_tags(
        tags.defender_tags,
        defender,
        attacker,
        tag_checks[defender],
        supporter_tag_checks,
      )
    );
  });
}

module.exports = sys_filter_ero_act;
