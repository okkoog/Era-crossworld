const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const RyokaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-344');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new RyokaLifeMarks();
    let title = '팀원들의 기력 소모량 증가, 스트레스 감소 효율 증가';
    if (buff > 0) {
      title += ', 스트레스 획득량-20%';
    }
    title += '.';
    return [
      {
        color: get_chara_color(this.id),
        content: '光影捕手',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title,
      },
    ];
  }
};
