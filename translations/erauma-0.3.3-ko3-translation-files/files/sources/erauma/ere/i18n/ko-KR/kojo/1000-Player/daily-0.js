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

  // [번역 완료] o_c_pray
  async o_c_pray(you, dice) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 신사에 기원하러 갔다.',
    ]);
    if (dice < 0.5) {
      await printAndWait('길(吉) 운세가 나왔다! 온 보람이 있었다.');
    } else {
      await printAndWait(
        '흉(凶) 운세가 나왔다! 며칠 동안은 꼬리를 말고 얌전히 지내자……',
      );
    }
  },

  // [번역 완료] o_r_fishing
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 강변으로 낚시를 갔다. 빈손만은 피하고 싶다.',
    ]);
  },

  // [번역 완료] o_r_walking
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 강변을 산책하며 특별히 하는 일 없이 한동안 시간을 보냈다.',
    ]);
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 게임센터에 갔다. 뭘 하며 시간을 때울까.',
    ]);
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 뽑기 행사에 갔다. 좋은 게 당첨돼라!',
    ]);
  },

  // [번역 완료] o_s_ero_item
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가로 가서 눈에 띄지 않는 분홍색 작은 가게로 곧장 향했다……',
    ]);
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 노래방에 갔다. 이런 따분한 일을 왜 하고 있는 걸까……',
    ]);
  },

  // [번역 완료] o_s_movie
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 영화관에 갔다. 사람들 속에서 혼자 붕 뜬 듯한 느낌을 도저히 떨칠 수 없다.',
    ]);
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 역 앞에서 식사를 했다. 단골 가게는 언제나 같은 맛이었다.',
    ]);
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 역 앞 백화점을 돌아다니며 장보기 목록을 확인했다.',
    ]);
  },

  // [번역 완료] office_cook
  async office_cook(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 트레이너실에서 요리를 했다. 가끔은 자신에게 주는 보상으로 튀김이라도 만들어 보자.',
    ]);
  },

  // [번역 완료] school_atrium
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 중정으로 가서 특별히 하는 일 없이 한동안 시간을 보냈다.',
    ]);
  },

  // [번역 완료] school_rooftop
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 옥상에 올라가 「금연 학원」 표지판을 무시하고 한 대 피울지 고민했다.',
    ]);
  },
};
