const { get } = require('#/era-electron');

const { pregnant_stage_enum } = require('#/data/ero/status-const');

/** @param {number} cid */
function get_action_debuff(cid) {
  return (
    get(`status:${cid}:편두통`) ||
    get(`status:${cid}:피로`) > 0 ||
    get(`status:${cid}:부상`) > 0 ||
    (!get(`cflag:${cid}:종족`) &&
      get(`cflag:${cid}:임신단계`) !== 1 << pregnant_stage_enum.no)
  );
}

module.exports = get_action_debuff;
