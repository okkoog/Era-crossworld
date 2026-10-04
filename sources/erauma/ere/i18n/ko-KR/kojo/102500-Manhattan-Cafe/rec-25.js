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
