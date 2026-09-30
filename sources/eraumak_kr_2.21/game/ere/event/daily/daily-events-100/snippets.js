const era = require('#/era-electron');
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} acute
   * @param {CharaTalk} me
   */
  async date_common(acute, me) {
    await printAndWait([
      '사람들이 오가는 안뜰에서 다른',
      acute.get_uma_sex_title(),
      '의 시선을 견디며 데이트하려면 꽤나 강한 의지가 필요한 것 같다……',
    ]);
    await acute.say_and_wait('아……여기서 대이트할 거나? 나는 상관 없단다~');
    await printAndWait([
      acute.get_colored_name(),
      '는 주변의 시선을 별로 신경쓰지 않는 것 같다……',
    ]);
    if (era.get('love:100') < 90) {
      await printAndWait([
        '하지만 진정으로 마지막 한 걸음을 내딛을 용기가 없는 것은 ',
        me.get_colored_name(),
        ' 자신일지도 모른다.',
      ]);
    }
  },
};
