const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedInit = require('#/event/init/customized-init');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const { attr_names } = require('#/data/train-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      if (sys_personal_achievement.get(301)) {
        new TokinoLifeMarks().who_am_i = 1;
        era.set('callname:301:-1', '토키노 미노루');
        era.set('callname:301:-2', '하야카와 타즈나');
      } else {
        era.set(
          'callname:301:-2',
          `하야카와 ${era.get('cflag:301:성별') === 1 ? ' 선생님' : ' 씨'}`,
        );
      }
      era.set(
        'callname:301:305',
        `안심자와${era.get('cflag:301:성별') === 1 ? ' 선생님' : ' 씨'}`,
      );
      attr_names.forEach((e) => era.set(`base:301:${e}`, 1200));
    }
  }
};
