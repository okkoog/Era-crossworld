const era = require('#/era-electron');

const { sys_get_debuff } = require('#/system/sys-calc-chara-param');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { attr_change_colors, motivation_colors } = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const RyokaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-344');
const recruit_flags = require('#/data/event/recruit-flags');
const extra_base = require('#/data/extra-base');
const { location_enum } = require('#/data/locations');
const {
  attr_enum,
  attr_names,
  motivation_names,
} = require('#/data/train-const');

/**
 * @param {number} cid
 * @param {number} val
 * @returns {boolean}
 */
function sys_change_motivation(cid, val) {
  if (!cid || !(era.get(`cflag:${cid}:육성턴수합산`) < 3 * 48)) {
    return false;
  }
  if (val > 0 && era.get(`status:${cid}:편두통`)) {
    return false;
  }
  const delta_change = era.get(`talent:${cid}:감정활동`);
  let delta = val;
  if (delta > 1) {
    delta += delta_change;
  }
  if (delta < -1) {
    delta -= delta_change;
  }
  const motivation = era.get(`cflag:${cid}:컨디션`);
  const motivation_limit = Math.max(
    Math.min(
      2 -
        Math.floor(era.get(`base:${cid}:스트레스`) / 2500) +
        get_custom_mec(cid).get_motivation_limit(),
      2,
    ),
    -2,
  );
  const new_val = Math.max(Math.min(motivation + delta, motivation_limit), -2);
  if (new_val !== motivation) {
    era.set(`cflag:${cid}:컨디션`, new_val);
    era.print([
      get_chara_talk(cid).get_colored_name(),
      '의 현재 컨디션은 ',
      {
        content: `${motivation_names[new_val + 2]}`,
        color: motivation_colors[new_val + 2],
      },
    ]);
    return true;
  }
  return false;
}

/**
 * @param {number} cid
 * @param {number} _val
 */
function sys_change_lust(cid, _val) {
  let val = _val;
  if (_val > 0) {
    val *=
      1 +
      0.2 * era.get(`talent:${cid}:음란`) +
      0.5 * era.get(`status:${cid}:발정`) +
      0.1 * era.get(`status:${cid}:배란기`) +
      0.05 * era.get(`status:${cid}:생리`);
  }
  era.add(`base:${cid}:성욕`, val);
}

/**
 * @param {number} cid
 * @param {number} _val
 */
function sys_change_pressure(cid, _val) {
  if (!_val) {
    return era.get(`base:${cid}:스트레스`);
  }
  if (_val > 0) {
    const { buff } = new RyokaLifeMarks();
    _val *=
      1 +
      0.2 * era.get(`talent:${cid}:수치내성`) +
      get_custom_mec(cid).get_pressure_buff() -
      0.2 * buff;
    if (era.get(`cflag:${cid}:육성턴수합산`) >= 3 * 48) {
      _val /= 2;
    }
  }
  const ret =
    era.get('flag:스트레스획득') && cid && era.add(`base:${cid}:스트레스`, _val);
  sys_change_motivation(cid, 0);
  return ret;
}

module.exports = {
  /**
   * @param {number} cid
   * @param {string|number} attr_id_or_name
   * @param {number} change
   * @returns {(PrintedSpan|string)[]}
   */
  sys_change_attr_and_print(cid, attr_id_or_name, change) {
    if (!change) {
      return [];
    }
    let attr_name = attr_id_or_name;
    if (typeof attr_id_or_name === 'number') {
      attr_name = attr_names[attr_id_or_name];
    }
    const val = era.get(`base:${cid}:${attr_name}`),
      max = era.get(`maxbase:${cid}:${attr_name}`),
      ret = [];
    if (typeof attr_id_or_name === 'string') {
      if (change < 0) {
        const in_train = era.get(`tcvar:${cid}:탈력`) !== undefined;
        let debuff =
          sys_get_debuff(cid) +
          (era.get('flag:현재위치') === location_enum.beach &&
            attr_id_or_name === '체력') *
            0.2;
        if (debuff <= 10) {
          change = Math.floor(change * (debuff + 1));
        }
        if (attr_id_or_name === '체력') {
          let lose_weight =
            1 -
            0.4 * era.get(`status:${cid}:살찜`) +
            era.get(`status:${cid}:건강차`);
          if (era.get('cflag:207:모집상태') === recruit_flags.yes) {
            lose_weight += 0.5;
          }
          era.add(`base:${cid}:체중 편차`, lose_weight * change);
          sys_change_pressure(cid, get_random_value(change / 5, 0));
          let delta = Math.min(-change / 500, 1);
          if (era.get(`base:${cid}:체력`) < 0.45 * max) {
            delta += Math.random();
          }
          if (in_train) {
            add_attr_exp(cid, attr_enum.endurance, delta);
          } else {
            era.add(`base:${cid}:스태미나`, delta);
          }
        } else {
          sys_change_lust(cid, get_random_value(change, 0) / 4);
          let lose_pressure = get_random_value(change / 10, 0);
          if (era.get('cflag:344:모집상태') === recruit_flags.yes) {
            lose_pressure *= 1.5;
          }
          sys_change_pressure(cid, lose_pressure);
          let delta = Math.min(-change / 500, 1);
          if (era.get(`base:${cid}:기력`) < 0.5 * max) {
            delta += Math.random();
          }
          if (in_train) {
            add_attr_exp(cid, attr_enum.intelligence, delta);
          } else {
            era.add(`base:${cid}:지능`, delta);
          }
        }
      }
      if (change > 0) {
        change = Math.max(change, 1);
      } else {
        change = Math.min(change, -1);
      }
    } else if (cid && !(era.get(`cflag:${cid}:육성턴수합산`) < 3 * 48)) {
      return [];
    } else if (
      attr_id_or_name === attr_enum.speed &&
      era.get(`status:${cid}:살찜`)
    ) {
      return [];
    }
    if (change > max - val) {
      change = max - val;
    }
    if (change + val < 0) {
      change = 0 - val;
    }
    if (change) {
      era.add(`base:${cid}:${attr_name}`, change);
      const stat = Math.floor(Math.abs(change));
      ret.push(
        {
          color: attr_colors[attr_name],
          content: attr_name,
        },
        change > 0
          ? {
              color: attr_change_colors.up,
              content: ' 상승',
            }
          : {
              color: attr_change_colors.down,
              content: ' 하강',
            },
        ':',
        stat >= 1
          ? {
              color: attr_colors[attr_name],
              content: ` ${stat.toLocaleString()}`,
            }
          : '',
      );
    }
    return ret;
  },
  sys_change_lust,
  sys_change_motivation,
  sys_change_pressure,
  /**
   * @param {number} cid
   * @param {number} val
   */
  sys_change_weight(cid, val) {
    era.add(
      `base:${cid}:체중 편차`,
      val * (10 + era.get(`talent:${cid}:식습관조절`)),
    );
  },
  /** @param {number} cid */
  sys_fix_chara_base(cid) {
    let src_id = era.get(`cflag:${cid}:템플릿캐릭터`);
    if (src_id === -1) {
      src_id = cid;
    }
    const maxbase_buff =
      get_custom_mec(cid).get_maxbase_buff() -
      (era.get(`cflag:${cid}:임신단계`) === 1 << pregnant_stage_enum.resume &&
        (era.get(`cflag:${cid}:임신주수`) - 1) * 100);
    const { stamina: extra_stamina, time: extra_time } =
      cid === 0 ? extra_base : { stamina: 0, time: 0 };
    era.set(
      `maxbase:${cid}:체력`,
      Math.max(
        Math.floor(
          era.get(`staticbase:${src_id}:체력`) +
            era.get(`base:${cid}:스태미나`) / 2 +
            maxbase_buff +
            extra_stamina,
        ),
        200,
      ),
    );
    era.set(
      `maxbase:${cid}:기력`,
      Math.max(
        Math.floor(
          era.get(`staticbase:${src_id}:기력`) +
            era.get(`base:${cid}:지능`) / 2 +
            maxbase_buff +
            extra_time,
        ),
        200,
      ),
    );
  },
  /** @returns {{creditor:number,repay:number,timer:number}[]} */
  sys_get_billings() {
    // FLAGNAME:17 = 청구서
    return (
      era.get('flag:17') ||
      era.set('flag:17', [{ creditor: 0, repay: 0, timer: 0 }])
    );
  },
  /**
   * @param {{stamina:number,time:number}} cost
   * @param {number} cid
   */
  sys_handle_action(cost, cid = 0) {
    era.add('base:0:체력', -cost.stamina);
    era.add('base:0:기력', -cost.time);
    if (cid > 0) {
      era.add(`base:${cid}:체력`, -cost.stamina);
      era.add(`base:${cid}:기력`, -cost.time);
    }
  },
  /**
   * @param {number} cid
   * @returns {{curr:{race:number,week:number},last:{race:number,week:number}}}
   */
  sys_reg_race(cid) {
    const ret =
      era.get(`cflag:${cid}:출주등록`) ||
      era.set(`cflag:${cid}:출주등록`, {
        curr: {
          race: -1,
          week: -1,
        },
        last: {
          race: -1,
          week: -1,
        },
      });
    Object.preventExtensions(ret);
    Object.preventExtensions(ret.curr);
    Object.preventExtensions(ret.last);
    return ret;
  },
};
