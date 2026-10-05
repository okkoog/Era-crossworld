// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/103700-Eishin-Flash/daily-37.js
// 대상 함수/속성: office_gift, office_prepare
/**
 * @file エイシンフラッシュ - 日常
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');
const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/daily-37.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] office_prepare — 함수/속성 전체 문맥에서 남은 원문을 번역
  async office_prepare(flash, you, callname) {
    era.print(
      `${you.name} とエイシンフラッシュは、トレーナールームでレース前の準備をした。`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          "현재 기상 상태, 예보와 일치. 경기장 상황, 예상 범위 내. 본인 컨디션…… 완벽.",
        );
        await flash.say_and_wait(
          `ふ……すべて、計画どおりのようです。それでは、行ってまいります、${callname}。`,
        );
      },
      () =>
        flash.say_and_wait(
          `toi、toi、toi……ふ……よし！ ${callname}、行ってまいります。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  // [번역 대상] office_gift — 함수/속성 전체 문맥에서 남은 원문을 번역
  async office_gift(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          "어머, 선물인가요? 저에게 주시는……? 후훗, 알겠습니다. 마음 써주셔서 감사해요. 이 호의에 반드시 보답할게요, 약속하죠.",
        ),
      () =>
        flash.say_and_wait(
          `besten Dank！ ${callname}、お気持ちに、背きません。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
};
