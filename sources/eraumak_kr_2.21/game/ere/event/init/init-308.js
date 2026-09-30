const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

const { adaptability_names } = require('#/data/train-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:308:-2',
        `라이트${era.get('cflag:308:성별') === 1 ? ' 선생님' : ' 씨'}`,
      );

      adaptability_names.forEach((e) =>
        era.set(`cflag:308:${e}적성`, get_random_value(0, 5)),
      );
      // BASENAME:5 - 7 = 스피드 - 파워
      era.set('maxbase:308:5', 800);
      era.set('maxbase:308:6', 800);
      era.set('maxbase:308:7', 800);
    }
  }
};
