const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class AcuteEduMarks extends EduEventMarks {
  // 日常
  // 안뜰 - 고목나무구멍 - 占有欲
  possessive;
  // 안뜰 - 데이트 - 키스
  kiss;
  // 상점가 - 게임센터 - 打拳机
  boxing;
  // 结局点数
  ending;

  constructor() {
    super(100);
    EduEventMarks.register_marks(this);
  }
}

module.exports = AcuteEduMarks;
