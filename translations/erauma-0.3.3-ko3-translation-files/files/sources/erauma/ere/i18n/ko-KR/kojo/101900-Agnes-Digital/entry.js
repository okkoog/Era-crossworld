// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/entry')
) {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101900-Agnes-Digital/rec-19.js'),
  );
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/101900-Agnes-Digital/daily-19.js'));

  // [번역 대상] aim_desc
  aim_desc = 'シニア級1〜6月のG1で3着以内';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/101900-Agnes-Digital/edu-19.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/101900-Agnes-Digital/love-19.js"),
  );
};
