const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && era.get('cflag:0:템플릿캐릭터') !== 37) {
      era.set('callname:0:37', '플래시');
    }
    new FlashEduMarks().train_with_festa = 1;
    era.set('status:37:허약', 0);
    era.set('status:37:영광의 더비', 0);
    era.set('status:37:반드시 해야 할 일', 0);
    era.set('status:37:염려', 0);
  }
};
