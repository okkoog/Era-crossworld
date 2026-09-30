const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
      case race_enum.arim_kin:
        if (era.get('cflag:7:육성턴수합산') < 96) {
          return [new LegendUmaSelector(37, 1.05)];
        }
        return [
          new LegendUmaSelector(37, 1.05),
          new LegendUmaSelector(48, 1.05),
        ];
      case race_enum.takz_kin:
        if (era.get('cflag:7:육성턴수합산') > 96) {
          return [new LegendUmaSelector(48, 1.05)];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:7:육성턴수합산') > 96) {
          return [new LegendUmaSelector(48, 1.05)];
        }
    }
    return super.get_race_contestants(info);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:7:0', '트레짱');
    }
  }

  get_race_cloth() {
    if (era.get('flag:현재레이스') !== race_enum.prix_lat) {
      return super.get_race_cloth();
    }
    return ['阿船2'];
  }
};
