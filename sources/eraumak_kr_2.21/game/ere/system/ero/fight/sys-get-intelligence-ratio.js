const era = require('#/era-electron');

/**
 * @param {number} attacker
 * @param {number} defender
 * @returns {number}
 */
function sys_get_intelligence_ratio_in_fight(attacker, defender) {
  return (
    (Math.max(
      era.get(`base:${attacker}:기력`) *
        era.get(`base:${attacker}:지능`) *
        (1 +
          0.1 * era.get(`mark:${attacker}:반발`) -
          0.25 * era.get(`mark:${attacker}:수치`) -
          era.get(`base:${attacker}:스트레스`) / 100000 -
          0.3 * (era.get(`tcvar:${attacker}:방금절정`) || 0) -
          0.5 * !!era.get(`tcvar:${attacker}:절정임박`) -
          0.1 * era.get(`status:${attacker}:편두통`) -
          0.1 * era.get(`status:${attacker}:발정`)),
      1,
    ) *
      era.get(`maxbase:${defender}:기력`)) /
    (Math.max(
      era.get(`base:${defender}:기력`) *
        era.get(`base:${defender}:지능`) *
        (1 +
          0.1 * era.get(`mark:${defender}:반발`) -
          0.25 * era.get(`mark:${defender}:수치`) -
          era.get(`base:${defender}:스트레스`) / 100000 -
          0.3 * (era.get(`tcvar:${defender}:방금절정`) || 0) -
          0.5 * !!era.get(`tcvar:${defender}:절정임박`) -
          0.1 * era.get(`status:${defender}:편두통`) -
          0.1 * era.get(`status:${attacker}:발정`)),
      1,
    ) *
      era.get(`maxbase:${attacker}:기력`))
  );
}

module.exports = sys_get_intelligence_ratio_in_fight;
