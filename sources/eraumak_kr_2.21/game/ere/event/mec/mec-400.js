const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const { location_enum } = require('#/data/locations');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { mess_enum, weather_enum } = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {number} [wins]
 * @returns {number}
 */
function get_attr_buff(wins) {
  return Math.min(wins || new SSEduMarks().wins, 25);
}

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (era.get('flag:현재레이스') === race_enum.tenn_spr) {
      info.weather = weather_enum.rain;
      info.mess = mess_enum.bad;
      return [new LegendUmaSelector(25, 1.1)];
    }
    return super.get_race_contestants(info);
  }

  get_relation_buff() {
    return Math.min(new SSEduMarks().wins, 30);
  }

  get_status(show_train_buff) {
    const ret_list = [];
    if (show_train_buff) {
      const { wins } = new SSEduMarks();
      if (wins) {
        ret_list.push({
          color: get_chara_color(this.id),
          content: `승리의 약속 (${wins})`,
          title: `출주 시 능력치+${get_attr_buff()}%, 호감도 획득+${this.get_relation_buff()}%, 연승 횟수에 따라 효과 상승`,
        });
      }
    }
    return ret_list;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:400:0', '토레나 군');
    }
  }

  set_foreign_debuff(before_race, loc) {
    if (loc !== location_enum.new_york) {
      return super.set_foreign_debuff(before_race, loc);
    }
    era.set('status:400:현지적응실패', 2 - era.get('talent:400:신체소질'));
  }

  set_pseudo_uma(uma) {
    const { wins } = new SSEduMarks();
    if (wins > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(`+${get_attr_buff(wins)}%[승리의 약속]`),
      );
    }
  }
};
