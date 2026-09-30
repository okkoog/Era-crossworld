const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (era.get('cflag:206:무작위모집') < 0 && era.get('flag:현재명성') >= 1000) {
      era.set('cflag:206:무작위모집', 1);
      era.print([
        '소문애 따르면 ',
        { color: get_chara_color(this.id), content: '프랑스에서 온 훌륭한 어린 우마무스메 하나가' },
        ' 중앙 트레센에 나타날 준비를 마쳤다고 하니, 어쩌면 훈련장에서 만날 수 있을지도...',
      ]);
    }
    super.check_next_week();
  }

  is_prison() {
    if (era.get('cflag:206:모집상태') !== recruit_flags.yes) {
      return false;
    }
    return super.is_prison();
  }

  is_rape_in_sleeping() {
    if (era.get('cflag:206:모집상태') !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};
