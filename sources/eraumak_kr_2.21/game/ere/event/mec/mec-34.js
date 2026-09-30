const { race_enum } = require('#/data/race/race-const');
const era = require('#/era-electron');
const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.tenn_spr) {
      return [
        {
          color: uma.color,
          content: '이나리 원이 통과합니다!',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 정수를 다한 달리기로 천하무적의 실력을 보여주었다앗!',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, '서방님');
    }
  }
};
