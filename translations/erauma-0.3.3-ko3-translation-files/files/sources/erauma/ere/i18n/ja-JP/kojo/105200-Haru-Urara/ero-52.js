// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/105200-Haru-Urara/ero-52.js
// 대상 함수/속성: zero_stamina
/**
 * @file ハルウララ - 調教
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} you
   */
  // [번역 대상] zero_stamina — 함수/속성 전체 문맥에서 남은 원문을 번역
  async zero_stamina(urara, you) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……あっ……あっ……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '壊された人形のように、気絶した ',
          urara.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の腕の中で、止まらず痙攣している',
        ]);
      } else {
        await era.printAndWait([
          '壊された人形のように、気絶した ',
          urara.get_colored_name(),
          ' が止まらず痙攣している',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '全身が力なく解け、',
          you.get_colored_name(),
          ' にいじられ尽くした ',
          urara.get_colored_name(),
          ' は、もうすっかり気を失っている',
        ]);
      } else {
        await era.printAndWait([
          '全身が力なく解け、',
          urara.get_colored_name(),
          ' はもうすっかり気を失っている',
        ]);
      }
    }
  },
};
