// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/103000-Rice-Shower/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103000-Rice-Shower/rec-30.js'),
  );

  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103000-Rice-Shower/daily-30.js"),
  );

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103000-Rice-Shower/edu-30.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103000-Rice-Shower/love-30.js"),
  );
};
