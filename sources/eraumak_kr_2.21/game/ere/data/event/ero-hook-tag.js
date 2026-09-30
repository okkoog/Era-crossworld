const era = require('#/era-electron');

const { sys_check_distance } = require('#/system/ero/sys-calc-distance');
const {
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');

const EroTouch = require('#/data/ero/ero-touch');
const { item_enum } = require('#/data/ero/item-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  part_talents,
  part_touch,
} = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { get_breast_cup } = require('#/data/info-generator');

class EroHookTag {
  /** @type {(number|function(number,number):boolean)[]} */
  attacker_tags;
  /** @type {(number|function(number,number):boolean)[]} */
  defender_tags;
  /** @type {number} */
  condition;

  static condition_type = { no: 0, active: 1, in_active: 2 };
  static default_tags = new EroHookTag(
    [],
    [],
    EroHookTag.condition_type.active,
  );

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static ask_blow_job_check(cid, oid) {
    const ctouch = era.get(`tcvar:${cid}:음경접촉부위`);
    const otouch = era.get(`tcvar:${oid}:구강접촉부위`);
    return (
      era.get('tflag:주도권') === cid ||
      (ctouch === -1 &&
        (otouch === -1 || otouch.item === item_enum.gag) &&
        sys_check_distance(cid, oid, {
          a: part_enum.penis,
          d: part_enum.mouth,
        })) ||
      (ctouch.owner === oid && ctouch.part === part_enum.mouth)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static bite_nipple_check(cid, oid) {
    const touch = new EroTouch(cid, part_enum.breast);
    return touch.owner === oid && touch.part === part_enum.mouth;
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static blow_job_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:구강접촉부위`);
    return (
      (touch.owner === oid && touch.part === part_enum.penis) ||
      touch.item === item_enum.gag
    );
  }

  /**
   * @param {number} cpart
   * @returns {function(number):boolean}
   */
  static generate_self_talent_check(cpart) {
    return (cid) => {
      return (
        !cid ||
        era.get(`talent:${cid}:${part_talents[cpart]}`) === 2 ||
        era.get(`palam:${cid}:${part_names[cpart]}쾌감`) >=
          era.get(`tcvar:${cid}:${part_names[cpart]}쾌감상한`) *
            lust_palam_border
      );
    };
  }

  /**
   * @param {number} cpart
   * @returns {function(number):boolean}
   */
  static generate_self_touch_check(cpart) {
    return (cid) => {
      const touch = era.get(`tcvar:${cid}:손부접촉부위`);
      const otouch = era.get(`tcvar:${cid}:${part_touch[cpart]}접촉부위`);
      return (
        era.get('tflag:주도권') === cid ||
        ((touch === -1 || touch.owner === cid) &&
          (otouch === -1 ||
            (otouch.owner === cid && otouch.part !== part_enum.item)))
      );
    };
  }

  /**
   * @param {number} cpart
   * @param {number} opart
   * @returns {function(number,number):boolean}
   */
  static generate_touch_check(cpart, opart) {
    return (cid, oid) => {
      const touch = era.get(`tcvar:${cid}:${part_touch[cpart]}접촉부위`);
      return (
        era.get('tflag:주도권') === cid ||
        (touch === -1 &&
          era.get(`tcvar:${oid}:${part_touch[opart]}접촉부위`) === -1 &&
          sys_check_distance(cid, oid, { a: cpart, d: opart })) ||
        (touch.owner === oid && touch.part === opart)
      );
    };
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static hand_and_blow_job_check(cid, oid) {
    const touch = era.get(`tcvar:${oid}:음경접촉부위`);
    return (
      touch.owner === cid &&
      (touch.part === part_enum.mouth || touch.part === part_enum.hand)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static hand_touch_check_for_body(cid, oid) {
    const touch = era.get(`tcvar:${cid}:손부접촉부위`);
    return (
      era.get('tflag:주도권') === cid ||
      touch === -1 ||
      (touch.owner === oid && touch.part === part_enum.body)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static npc_anal_sex_check(cid, oid) {
    if (!cid) {
      return true;
    }
    if (era.get(`status:${cid}:슈퍼우마뾰이Z`) > 0) {
      return true;
    }
    if (era.get(`ex:${cid}:애널파열`)) {
      return false;
    }
    let upper_border = 1;
    if (!era.get(`exp:${cid}:애널횟수`)) {
      if (
        era.get(`talent:${cid}:음란한엉덩이`) !== 2 &&
        !era.get(`talent:${cid}:음란`)
      ) {
        upper_border = 0;
      }
      upper_border += Math.min(era.get(`exp:${cid}:애널절정횟수`) / 5, 2);
    }
    upper_border += Math.min(era.get(`ex:${cid}:애널절정`) / 2, 2);
    return (
      get_expansion(get_penis_size(oid), cid, part_enum.anal) <= upper_border
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static npc_virgin_sex_check(cid, oid) {
    if (!cid) {
      return true;
    }
    if (era.get(`status:${cid}:슈퍼우마뾰이Z`) > 0) {
      return true;
    }
    if (era.get(`ex:${cid}:질파열`)) {
      return false;
    }
    const virgin_state = era.get(`talent:${cid}:처녀`);
    let upper_border = 1;
    if (
      virgin_state === vp_status_enum.yes ||
      virgin_state === vp_status_enum.dont_know
    ) {
      if (
        !era.get(`talent:${cid}:음란`) &&
        era.get(`talent:${cid}:음란한자궁`) !== 2
      ) {
        upper_border = 0;
      }
      upper_border += Math.min(era.get(`exp:${cid}:질구절정횟수`) / 5, 2);
    }
    upper_border += Math.min(era.get(`ex:${cid}:질구절정`) / 2, 2);
    return (
      get_expansion(get_penis_size(oid), cid, part_enum.virgin) <= upper_border
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static penis_in_anal_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:항문접촉부위`);
    return touch.owner === oid && touch.part === part_enum.penis;
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static penis_in_virgin_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:질구접촉부위`);
    return touch.owner === oid && touch.part === part_enum.penis;
  }

  /**
   * @param {number} cid
   * @returns {boolean}
   */
  static speak_check(cid) {
    return (
      era.get('tflag:주도권') === cid ||
      era.get(`tcvar:${cid}:구강접촉부위`) === -1
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static tit_and_blow_job_check(cid, oid) {
    const touch = era.get(`tcvar:${oid}:음경접촉부위`);
    return (
      touch.owner === cid &&
      (touch.part === part_enum.mouth || touch.part === part_enum.breast) &&
      get_breast_cup(cid, true).charCodeAt(0) >= 'C'.charCodeAt(0) &&
      get_penis_size(oid) >= 3
    );
  }

  /**
   * @param {(number|function(number,number):boolean)[]} attacker_tags
   * @param {(number|function(number,number):boolean)[]} defender_tags
   * @param {number} condition
   */
  constructor(
    attacker_tags,
    defender_tags,
    condition = EroHookTag.condition_type.active,
  ) {
    this.attacker_tags = attacker_tags.filter((e, i, l) => l.indexOf(e) === i);
    this.defender_tags = defender_tags.filter((e, i, l) => l.indexOf(e) === i);
    this.condition = condition;
  }
}

module.exports = EroHookTag;
