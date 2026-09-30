const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { vehicle_enum } = require('#/data/move-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (era.get('cflag:0:템플릿캐릭터') !== 64) {
        era.set('callname:0:64', '파머');
      }
      if (era.get('flag:캐릭터성별') === 1) {
        era.set('callname:64:301', '하야카와 선생님');
        era.set('callname:64:64', '파머 씨');
      } else {
        era.set('callname:64:301', '하야카와 씨');
        era.set('callname:64:64', '파머 씨');
      }
    }
    era.set('item:파머호', 0);
    if (era.get('flag:다인용탈것') === vehicle_enum.pama) {
      era.set('flag:다인용탈것', 0);
    }
  }
};
