const era = require('#/era-electron');

const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /** @param {number} delta */
  sys_change_fame(delta) {
    if (!delta) {
      return 0;
    }
    const has_etsuko =
      (era.get('cflag:303:모집상태') === recruit_flags.yes) *
      (1 + new EtsukoLifeMarks().buff);
    if (delta < 0) {
      if (era.get('flag:징벌강도') === 3) {
        return 0;
      }
      delta = Math.min(delta * (1 - has_etsuko * 0.1), -1);
    } else {
      delta = Math.max(
        delta * (1 + has_etsuko * 0.1 + era.get('global:명성보너스') / 100),
        1,
      );
    }
    delta = Math.floor(delta);
    era.add('flag:현재명성', delta);
    return delta;
  },
  /**
   * @param {number} _val
   * @param {number} [cid]
   * @returns {number}
   */
  sys_change_money(_val, cid) {
    if (_val === 0) {
      return 0;
    }
    let val = _val;
    const cur_chara = era.get('flag:현재상호작용캐릭터') || cid;
    if (val > 0) {
      val = (val * (100 + era.get('global:자금보너스'))) / 100;
    } else {
      const debuff =
        (cid !== -1 ? era.get('talent:0:소비관념') : 0) +
        (cur_chara > 0 ? era.get(`talent:${cur_chara}:소비관념`) : 0);
      if (debuff > 0) {
        val -= Math.max(1, -val * 0.05) * debuff;
      }
    }
    val = Math.floor(val);
    era.add('flag:현재코인', val);
    return val;
  },
};
