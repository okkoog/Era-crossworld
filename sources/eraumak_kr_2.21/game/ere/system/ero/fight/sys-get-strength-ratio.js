const era = require('#/era-electron');

/**
 * @param {number} attacker
 * @param {number} defender
 * @returns {number}
 */
function sys_get_strength_ratio_in_fight(attacker, defender) {
  return (
    (Math.max(
      era.get(`base:${attacker}:체력`) *
        era.get(`base:${attacker}:파워`) *
        (1 +
          0.15 * era.get(`mark:${attacker}:반발`) -
          0.25 * era.get(`mark:${attacker}:고통`) +
          era.get(`base:${attacker}:스트레스`) / 50000 -
          0.5 * (era.get(`tcvar:${attacker}:방금절정`) || 0) -
          0.2 * !!era.get(`tcvar:${attacker}:절정임박`) -
          0.05 * Math.min(era.get(`status:${attacker}:피로`), 6) -
          0.1 * era.get(`status:${attacker}:발정`) -
          0.5 * era.get(`status:${attacker}:부상`)),
      1,
    ) *
      era.get(`maxbase:${defender}:체력`)) /
    (Math.max(
      era.get(`base:${defender}:체력`) *
        era.get(`base:${defender}:파워`) *
        (1 +
          0.15 * era.get(`mark:${defender}:반발`) -
          0.25 * era.get(`mark:${defender}:고통`) +
          era.get(`base:${defender}:스트레스`) / 50000 -
          0.5 * (era.get(`tcvar:${defender}:방금절정`) || 0) -
          0.2 * !!era.get(`tcvar:${defender}:절정임박`) -
          0.05 * Math.min(era.get(`status:${defender}:피로`), 6) -
          0.1 * era.get(`status:${defender}:발정`) -
          0.5 * era.get(`status:${defender}:부상`)),
      1,
    ) *
      era.get(`maxbase:${attacker}:체력`))
  );
}

module.exports = sys_get_strength_ratio_in_fight;
