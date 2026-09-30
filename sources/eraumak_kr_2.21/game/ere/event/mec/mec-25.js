const era = require('#/era-electron');

const { race_enum } = require('#/data/race/race-const');
const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_pregnant_ratio() {
    if (era.get('item:「웨딩드레스」')) {
      era.set('item:「웨딩드레스」', 0);
      era.set('item:빈시험관', 1);
      return 1;
    }
    return 0;
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:육성턴수합산`) < 96
    ) {
      return [
        {
          color: uma.color,
          content: '승자는 ',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: '! 세대 교체가 이것으로 증명됩니다!',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }
};
