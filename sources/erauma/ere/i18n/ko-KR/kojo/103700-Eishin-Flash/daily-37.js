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
