// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/daily-32.js'));

  // 한국어 작업 모듈 연결: basement
  basement = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/base-32.js"),
  );

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/edu-32.js"),
  );

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/ero-32.js"),
  );

  // [번역 대상] limited_tachyon
  limited_tachyon = '限界で止まった光子';

  // [번역 대상] limited_tachyon_desc
  limited_tachyon_desc = (uma) =>
    `明るく、熱く、眩しい。だが、それまでだ。これがウマ${uma}アグネスタキオンの限界。トレーニング効果+50%。`;

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/love-32.js"),
  );

  // [번역 대상] uma_limit
  uma_limit = (uma) => `${uma}の限界`;

  // [번역 대상] uma_limit_desc
  uma_limit_desc = (uma) =>
    `${uma}の限界。だが、ウマ${uma}アグネスタキオンの限界ではない。レース時のみ、全能力が極めて大きく上昇する。`;
};
