const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && era.get('cflag:0:템플릿캐릭터') !== 56) {
      era.set('callname:0:56', '후쿠짱');
    }
    era.set('status:56:운세의존', 1);
    era.set('status:56:대길', 0);
    era.set('status:56:중길', 0);
    era.set('status:56:소길', 0);
    era.set('status:56:흉', 0);
    era.set('status:56:PTSD', 0);
    era.set('status:56:안정', 0);
  }
};
