const era = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (era.get(`cflag:${this.id}:모집상태`) !== recruit_flags.yes) {
      if (
        era.get(`love:${this.id}`) >= 50 ||
        era.get('flag:턴당애정도패널티') > 0
      ) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    const { buff } = new MayLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '꿈의 추격자',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `팀월들이 해외 원정에서 받는 부정적 영향 ${buff > 0 ? '감소' : '반감'}.`,
      },
    ];
  }
};
