// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/102500-Manhattan-Cafe/rec-25.js
// 대상 함수/속성: rec_start
/**
 * @file マンハッタンカフェ - 募集
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/rec-25.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] rec_start — 함수/속성 전체 문맥에서 남은 원문을 번역
  async rec_start(coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 검은 머리의 ",
      coffee.uma_sex_title,
      "를 발견했다.",
    ]);
    await era.printAndWait([
      'だが近づこうとした瞬間、',
      coffee.sex,
      'の姿はもうなかった。最初からいなかったように。',
    ]);
    await you.say_and_wait('目の錯覚か？ 帰って休もう', true);
  },
};
