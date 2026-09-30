const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:207:-2',
        `소논${era.get('cflag:207:성별') === 1 ? ' 선생님' : ' 씨'}`,
      );
    }
  }
};
