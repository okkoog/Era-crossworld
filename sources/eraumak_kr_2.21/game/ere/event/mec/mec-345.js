const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new LightLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '천재 박사',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `팀원 트레이닝 경험치 획득량+${25 * (buff + 1)}%.`,
      },
    ];
  }
};
