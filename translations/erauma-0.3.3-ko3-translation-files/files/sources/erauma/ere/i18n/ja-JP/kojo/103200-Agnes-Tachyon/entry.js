// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/103200-Agnes-Tachyon/entry.js
// 대상 함수/속성: limited_tachyon, limited_tachyon_desc, uma_limit, uma_limit_desc
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/daily-32.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/love-32.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/ero-32.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/base-32.js'),
  );

  // [번역 대상] uma_limit — 함수/속성 전체 문맥에서 남은 원문을 번역
  uma_limit = (uma) => `${uma}の限界`;
  // [번역 대상] uma_limit_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  uma_limit_desc = (uma) =>
    `${uma}の限界。だが、ウマ${uma}アグネスタキオンの限界ではない。レース時のみ、全能力が極めて大きく上昇する。`;

  // [번역 대상] limited_tachyon — 함수/속성 전체 문맥에서 남은 원문을 번역
  limited_tachyon = '限界で止まった光子';
  // [번역 대상] limited_tachyon_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  limited_tachyon_desc = (uma) =>
    `明るく、熱く、眩しい。だが、それまでだ。これがウマ${uma}アグネスタキオンの限界。トレーニング効果+50%。`;
};
