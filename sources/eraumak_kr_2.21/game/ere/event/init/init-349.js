const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:349:-2',
        '터커' + (era.get('cflag:349:성별') === 1 ? ' 선생님' : ' 씨'),
      );
    }
  }
};
