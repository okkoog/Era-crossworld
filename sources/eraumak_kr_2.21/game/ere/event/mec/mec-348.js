const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = LifeEventMarks.get_marks(this.id);
    return [
      {
        color: get_chara_color(this.id),
        content: '경기장의 아이돌',
        fontWeight: buff > 0 ? 'bold' : void 0,
        title:
          '컨디션이 높은 팀원들의 트레이닝 효과가' +
          (buff > 0 ? '상승' : '약간 상승.'),
      },
    ];
  }
};
