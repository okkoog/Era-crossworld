const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_cloth() {
    if (era.get('flag:현재레이스') !== race_enum.prix_lat) {
      return super.get_race_cloth();
    }
    return ['光钻2'];
  }
};
