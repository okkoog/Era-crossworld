const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const HelloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-308');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new HelloLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '꿈의 개척자',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title:
          buff > 0
            ? '팀원이 그랜드 라이브가 마련된 레이스에 출주 시 명성 보상+100%，본인 및 본인의 후손이 출주 시는 명성 보상+200%.'
            : '본인 및 본인의 후손이 그랜드 라이브가 마련된 레이스에 출주 시 명성 보상+100%.',
      },
    ];
  }
};
