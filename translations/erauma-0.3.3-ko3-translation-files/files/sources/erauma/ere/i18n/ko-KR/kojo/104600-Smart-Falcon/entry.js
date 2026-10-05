// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/104600-Smart-Falcon/entry')
) {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/104600-Smart-Falcon/rec-46.js'),
  );
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/104600-Smart-Falcon/daily-46.js'));

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/104600-Smart-Falcon/edu-46.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/104600-Smart-Falcon/love-46.js"),
  );
};
