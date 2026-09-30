const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:24:0', '트레이너 쌤');
    }
  }

  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
      case race_enum.arim_kin:
        return [
          new LegendUmaSelector(12, 1.05),
          new LegendUmaSelector(16, 1.05),
        ];
      case race_enum.hans_dai:
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(16, 1.1)];
    }
    return super.get_race_contestants(info);
  }
};
