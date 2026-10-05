// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/106400-Mejiro-Palmer/entry.js
// 대상 함수/속성: aim_desc, dependence, dependence_desc, get_basement_info
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/rec-64.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/love-64.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/base-64.kojo');

  // [번역 대상] aim_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  aim_desc = 'クラシック級 6月第2週まで G3以上のレース 1着';

  // [번역 대상] dependence — 함수/속성 전체 문맥에서 남은 원문을 번역
  dependence = '依存心';
  // [번역 대상] dependence_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  dependence_desc = 'あなただけが……';

  // [번역 대상] get_basement_info — 함수/속성 전체 문맥에서 남은 원문을 번역
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
};
