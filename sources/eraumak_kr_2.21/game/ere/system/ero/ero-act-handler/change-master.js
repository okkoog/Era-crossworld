const era = require('#/era-electron');

const {
  change_ero_master,
  check_satisfied,
} = require('#/system/ero/sys-calc-ero-status');
const { get_characters_in_train } = require('#/system/ero/sys-prepare-ero');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} without
 * @param {boolean} [shown=true]
 */
function change_master(without, shown = true) {
  const master = era.get('tflag:주도권');
  const can_list = get_characters_in_train().filter((cid) => {
    const inmon = CharaInmon.get(cid);
    return (
      cid !== without &&
      sys_check_awake(cid) &&
      check_satisfied(cid) < 2 &&
      (master === cid ||
        era.get(`tcvar:${master}:탈력`) > 0 ||
        era.get(`tcvar:${master}:실신`) > 0 ||
        (inmon.slave === 0 &&
          !inmon.on(plugin_enum.tuna) &&
          !inmon.on(plugin_enum.meek)))
    );
  });
  let _new = master;
  if (!can_list.length) {
    _new = 0;
  } else if (can_list.indexOf(master) === -1) {
    _new = get_random_entry(can_list);
  }
  if (master !== _new) {
    change_ero_master(_new);
    if (shown) {
      era.print([get_chara_talk(_new).get_colored_name(), ' 은(는) 주도권을 잡았다...']);
    }
  }
}

module.exports = change_master;
