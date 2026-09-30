const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SuzukaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-2');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {

  get_motivation_limit() {
    const { debuff } = new SuzukaEduMarks();
    if (debuff === 1 || debuff === 2) {
      return -debuff;
    }
    return 0;
  }

  is_train_enabled() {
    return new SuzukaEduMarks().debuff < 3;
  }

  get_race_contestants() {
    if (
      era.get('flag:7') === race_enum.takz_kin &&
      era.get(`cflag:${this.id}:48`) > 96
    ) {
      return [new LegendUmaSelector(11, 1.05), new LegendUmaSelector(18, 1.05)];
    }
    return [];
  }

  get_race_finish_report(uma, rid) {
    if (rid === race_enum.begin_race) {
      return [
        uma.get_colored_name(),
        { color: uma.color, content: ' 압도적인 첫 승리!' },
      ];
    }
    return super.get_race_finish_report(uma, rid);
  }

  get_status(show_train_buff) {
    const { debuff } = new SuzukaEduMarks();
    if (show_train_buff) {
      let content = '';
      let title = '';
      switch (debuff) {
        case 2:
          content = '실의';
          title = '컨디션 상한 -2단계';
          break;
        case 1:
          content = '슬픔';
          title = '컨디션 상한 -1단계';
          break;
        case 3:
          content = '오래된 다리 부상';
          title = '운명의 종착점.';
      }
      if (content) {
        return [{ color: get_chara_color(this.id), content, title }];
      }
    }
    return super.get_status(show_train_buff);
  }
};
