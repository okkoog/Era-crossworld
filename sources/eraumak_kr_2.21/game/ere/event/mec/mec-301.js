const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_action_debuff() {
    return (
      0.1 *
      (new TokinoLifeMarks().buff + 1) *
      (get('cflag:301:모집상태') === recruit_flags.yes)
    );
  }

  get_love_limit() {
    if (get(`cflag:${this.id}:모집상태`) !== recruit_flags.yes) {
      if (get(`love:${this.id}`) >= 50 || get('flag:턴당애정도패널티') > 0) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    const buff = this.get_action_debuff();
    return [
      {
        color: get_chara_color(this.id),
        content: '개인 비서',
        fontWeight: buff > 0.1 ? 'bold' : undefined,
        title: `자신의 체력과 기력 소모량+${buff * 100}%, ${get('callname:0:-1')}의 체력과 기력 소모량-${buff * 100}%.`,
      },
    ];
  }
};
