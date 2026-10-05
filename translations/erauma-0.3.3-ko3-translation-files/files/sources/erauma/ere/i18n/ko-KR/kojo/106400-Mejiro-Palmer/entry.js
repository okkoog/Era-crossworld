// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  // 한국어 작업 모듈 연결: edu
  edu = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  // 한국어 작업 모듈 연결: ero
  ero = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  // 한국어 작업 모듈 연결: love
  love = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/love-64.kojo');
  recruit = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/rec-64.kojo');

  // [번역 대상] aim_desc
  aim_desc = 'クラシック級 6月第2週まで G3以上のレース 1着';

  // 한국어 작업 모듈 연결: basement
  basement = require("#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/base-64.kojo");

  // [번역 대상] dependence
  dependence = '依存心';

  // [번역 대상] dependence_desc
  dependence_desc = 'あなただけが……';

  // [번역 대상] get_basement_info
  get_basement_info(pama, you, security_level) {
    switch (security_level) {
      case 1:
        return [
          pama.get_colored_name(),
          ' は静かに ',
          you.get_colored_name(),
          ' のそばに座っている。だが、',
          you.get_colored_name(),
          ' がこちらを見る目を、不安げに避けている……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          ' は不安そうに ',
          you.get_colored_name(),
          ' の顔を見ている。それでも、手を離すつもりはないらしい……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          ' は相変わらず ',
          you.get_colored_name(),
          ' を見つめ、曖昧に微笑んでいる……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          ' の顔には、ふわりとした笑みが浮かんでいる。視線を逸らす気配はない……',
        ];
      case 5:
        return [
          '静かな待ち時間。絶え間ない視線。そして……',
          pama.get_colored_name(),
          ' の、悪意のない微笑み……',
        ];
    }
    return [];
  }

  // [번역 대상] notify_go_shopping
  notify_go_shopping = (pama) => [
    '【和 ',
    pama.get_colored_name(),
    ' 去买东西吧！】',
  ];

  // [번역 대상] notify_rooftop
  notify_rooftop = (pama) => ['【', pama.get_colored_name(), ' 在天台等待】'];
};
