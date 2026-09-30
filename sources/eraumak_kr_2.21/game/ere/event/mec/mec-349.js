const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new BryneLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '투자 자문',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `제공된 우마코인으로 투자하고 매주 ${buff > 0 ? '더 많은' : '일정'} 양의 수입을 얻음.`,
      },
    ];
  }
};
