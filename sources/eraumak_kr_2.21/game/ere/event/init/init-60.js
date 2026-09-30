const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (era.get('cflag:60:성별') - 1) {
        era.set('callname:60:60', '네이처 씨');
      } else {
        era.set('callname:60:60', '네이처 씨');
      }
      era.set('callname:0:60', '네이처');
    }
  }
};
