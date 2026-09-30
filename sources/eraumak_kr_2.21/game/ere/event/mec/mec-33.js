const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    const ret = super.get_race_finish_report(uma, race_id);
    if (ret) {
      return ret;
    }
    return [{ color: uma.color, content: '구름이 짙게 낀 하늘, 일등성이 반짝입니다!!!' }];
  }
};
