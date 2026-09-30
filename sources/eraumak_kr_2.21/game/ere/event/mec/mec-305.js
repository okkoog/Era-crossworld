const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: get(`staticcstr:${this.id}:칭호`),
        fontWeight: new SasamiLifeMarks().buff > 0 ? 'bold' : undefined,
        title: '팀원들의 편두통, 부상, 피로 회복을 촉진하고 편두통 발생을 줄여줌',
      },
    ];
  }
};
