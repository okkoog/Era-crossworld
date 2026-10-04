/**
 * @file プレイヤー - 日常
 * @author 雞雞
 * @author 黑奴队长（改编）
 */
const { printAndWait } = require('#/era-electron');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/1000-Player/daily-0.js');

module.exports = {
  ...__JaOriginal,
  async office_rest(you) {
    await printAndWait([
      you.get_colored_name(),
      "은(는) 트레이닝실에서 혼자 쉬며, 머릿속을 비우고 시간을 보냈다.",
    ]);
  },
  async office_game(you) {
    await printAndWait([
      you.get_colored_name(),
      "은(는) 트레이닝실에서 혼자 게임을 하며, 상사에게 들키지 않기를 바랬다.",
    ]);
  },
};
