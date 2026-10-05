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

  // [번역 완료] limited_tachyon
  limited_tachyon = '한계에 멈춘 광자';

  // [번역 완료] limited_tachyon_desc
  limited_tachyon_desc = (uma) =>
    `밝고, 뜨겁고, 눈부시다. 하지만 거기까지다. 이것이 우마${uma}아그네스 타키온의 한계. 트레이닝 효과+50%.`;

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/love-32.js"),
  );

  // [번역 완료] uma_limit
  uma_limit = (uma) => `${uma}의 한계`;

  // [번역 완료] uma_limit_desc
  uma_limit_desc = (uma) =>
    `${uma}의 한계. 하지만 우마${uma}아그네스 타키온의 한계는 아니다. 레이스 시에만 모든 능력이 매우 크게 상승한다.`;
};
