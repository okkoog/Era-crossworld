const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (era.get('flag:캐릭터성별') === 1) {
        era.set('callname:68:301', '하야카와 선생');
      } else {
        era.set('callname:68:301', '하야카와 씨');
      }
    }
  }
};
