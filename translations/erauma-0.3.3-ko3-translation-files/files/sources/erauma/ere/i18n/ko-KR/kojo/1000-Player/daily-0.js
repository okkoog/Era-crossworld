// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
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

  // [번역 대상] o_c_pray
  async o_c_pray(you, dice) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで神社へ祈願に行く。',
    ]);
    if (dice < 0.5) {
      await printAndWait('吉のおみくじが出た！ 来た甲斐はあった。');
    } else {
      await printAndWait(
        '凶のおみくじが出た！ この数日は尻尾を巻いておとなしくしていよう……',
      );
    }
  },

  // [번역 대상] o_r_fishing
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで川辺へ釣りに行く。ボウズだけは避けたいところだ。',
    ]);
  },

  // [번역 대상] o_r_walking
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで川辺を散歩し、特にすることもなくしばらく時を過ごした。',
    ]);
  },

  // [번역 대상] o_s_arcade
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街のゲームセンターへ行く。何をやって暇をつぶそうか。',
    ]);
  },

  // [번역 대상] o_s_drawing
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街のくじ引きへ行く。いいものが当たれ！',
    ]);
  },

  // [번역 대상] o_s_ero_item
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街へ行き、目立たないピンクの小さな店へ真っ直ぐ向かった……',
    ]);
  },

  // [번역 대상] o_s_ktv
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街のカラオケへ行く。こんな退屈なことを、なぜしているのだろう……',
    ]);
  },

  // [번역 대상] o_s_movie
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街の映画館へ行く。人混みの中で浮いている感じが、どうしても拭えない。',
    ]);
  },

  // [번역 대상] o_s_restaurant
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで駅前で食事をする。お気に入りの店は、いつもの味のままだった。',
    ]);
  },

  // [번역 대상] o_s_shopping
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで駅前のデパートを歩き、買い物リストを確認する。',
    ]);
  },

  // [번역 대상] office_cook
  async office_cook(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりでトレーナー室で料理をする。たまには自分へのご褒美に、揚げ物でも作ろう。',
    ]);
  },

  // [번역 대상] school_atrium
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで中庭へ行き、特にすることもなくしばらく時を過ごした。',
    ]);
  },

  // [번역 대상] school_rooftop
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで屋上へ上がり、「禁煙学園」の看板を無視して一服するか考える。',
    ]);
  },
};
