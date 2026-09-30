const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (
      era.get('cflag:204:무작위모집') <= -2 &&
      era.get('flag:현재명성') >= 1000
    ) {
      era.set('cflag:204:모집상태', -1);
      era.set('cflag:204:무작위모집', 0);
      const montjeu = get_chara_talk(204);
      era.print([
        '전설적인 ',
        {
          color: get_chara_color(this.id),
          content: '한 프랑스 ' + montjeu.get_uma_sex_title(),
        },
        '가 중앙 트레센으로 와서 교류할 준비가 되어 있다는데, 어쩌면 응접실에서 만날 수 있을지도...',
      ]);
    }
    super.check_next_week();
  }

  is_prison() {
    if (era.get('cflag:204:모집상태') !== recruit_flags.yes) {
      return false;
    }
    return super.is_prison();
  }

  is_rape_in_sleeping() {
    if (era.get('cflag:204:모집상태') !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};
