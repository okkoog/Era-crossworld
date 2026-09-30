const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const RikoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-306');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (get(`cflag:${this.id}:모집상태`) === recruit_flags.yes) {
      return 0;
    }
    return 76;
  }

  get_take_care_buff(chara_id) {
    let base = 50 + 30 * new RikoLifeMarks().buff;
    if (chara_id === 202 || chara_id === 203) {
      return base + 20;
    }
    return 50;
  }

  get_talents() {
    const buff = this.get_take_care_buff();
    return [
      {
        color: get_chara_color(this.id),
        content: '철의 대행',
        fontWeight: buff > 50 ? 'bold' : undefined,
        title: `트레이너 칭호가 트레이닝 성공률과 효과에 주는 보너스가 상승하며, 돌봄 시 효과+${buff}%.`,
      },
    ];
  }
};
