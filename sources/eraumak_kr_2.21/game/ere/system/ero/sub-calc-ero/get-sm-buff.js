const era = require('#/era-electron');

/**
 * @param {number} cid
 * @param {boolean} [is_masochism]
 * @returns {number}
 */
function get_sm_buff(cid, is_masochism = false) {
  if (
    !era.get(`status:${cid}:숙면`) &&
    !era.get(`status:${cid}:우마뾰이S`) &&
    !era.get(`tcvar:${cid}:탈력`)
  ) {
    if (is_masochism && era.get(`tequip:${cid}:목줄`) !== -1) {
      return 0.2;
    }
    if (era.get('tflag:전신거울') && era.get(`tequip:${cid}:안대`) === -1) {
      return 0.2;
    }
  }
  return 0;
}

module.exports = get_sm_buff;
