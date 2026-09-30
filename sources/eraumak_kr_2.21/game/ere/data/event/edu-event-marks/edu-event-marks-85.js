const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class RubyEduMarks extends EduEventMarks {
  // 역 - 쇼핑몰방문
  station;

  rest_day;
  wait_station;
  sugu;
  shopping_together;

  constructor() {
    super(85);
    EduEventMarks.register_marks(this);
  }
}

module.exports = RubyEduMarks;
