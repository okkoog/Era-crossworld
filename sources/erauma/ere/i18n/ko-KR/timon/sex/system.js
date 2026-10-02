const ja = require('#/i18n/ja-JP/timon/sex/system');

module.exports = {
  ...ja,

  // Reused from EraUmaK 2.21 page-ero.js print_milking().
  get_milk_ml: (amount, item) => [
    '착유기로 우유를 짜서 모았다: ',
    amount,
    'ml ',
    item,
  ],
  get_milk_item: (amount, item) => [
    '포장해서 처리했다. ',
    amount,
    ' 획득【',
    item,
    '】',
  ],
  get_your_milk_info: (amount, you) => [
    '（그중 ',
    amount,
    ' 병은 ',
    you.get_colored_name(),
    '의 것이다）',
  ],

  // Reused from EraUmaK 2.21 sys-prepare-ero.js result reporter block.
  async ero_report(taste, minoru, riko, glasse, cocon) {
    taste.say_as_unknown('발표! 하이라이트 중계~♫');
    minoru.say_as_unknown('이제 이번 우마뾰이 보고를 전해 드립니다~');
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait('마……마음에 안……들면……');
      await cocon.say_as_unknown_and_wait('트레이너~');
      await glasse.say_as_unknown_and_wait(
        '힘내세요! 트레이너님~ 힘내세요!',
      );
      await riko.say_as_unknown_and_wait(
        '……다음 우마뾰이 시 인터페이스 설정에서 【우마뾰이 결과 요약】을 켜주세요……',
      );
      await riko.say_as_unknown_and_wait('……오～');
    } else {
      await riko.say_as_unknown_and_wait(
        '마음에 들지 않으시면 우마뾰이에서 인터페이스 설정에서 【우마뾰이 결과 요약】을 켜주세요~',
      );
    }
  },
};
