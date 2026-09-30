const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');

module.exports = class extends MecNpc {
  get_talents() {
    let { buff } = new EtsukoLifeMarks();
    buff += 1;
    return [
      {
        color: get_chara_color(this.id),
        content: '전담 기자',
        fontWeight: buff > 1 ? 'bold' : undefined,
        title: `명성 획득+${10 * buff}%, 명성 감소-${10 * buff}%.`,
      },
    ];
  }
};
