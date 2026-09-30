const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');
const { transform } = require('#/event/snippets/17');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      CustomizedInit.init_chara(9017);
      era.set('callname:9017:0', '재상');
      era.set('relation:9017:0', -95);
      era.set('status:17:자멸', 1);
      era.set('status:17:미련', 1);
      era.set('status:9017:황제', 1);
      era.set('status:9017:심술', 1);
      if (era.get('cflag:0:템플릿캐릭터') !== 17) {
        era.set('callname:0:17', '루나');
        era.set('callname:0:9017', '폐하');
      }
    } else if (era.get('status:17:황제') > 0) {
      const edu_marks = new LunaEduMarks();
      edu_marks.emperor = 1;
      transform(edu_marks);
      era.set('callname:17:-1', era.set('callname:17:-2', '루나'));
    }
    era.set('status:17:정신손상', 0);
    era.set('status:17:신경쇠약', 0);
    era.set('status:17:영역', 0);
  }
};
