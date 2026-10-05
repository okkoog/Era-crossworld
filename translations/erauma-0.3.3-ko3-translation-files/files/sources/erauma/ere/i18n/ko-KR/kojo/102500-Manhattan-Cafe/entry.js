// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/daily-25.js'));
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/rec-25.js'));

  // 한국어 작업 모듈 연결: basement
  basement = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/base-25.js"),
  );

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/edu-25.js"),
  );

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/ero-25.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/love-25.js"),
  );

  // [번역 대상] report_arim_kin
  report_arim_kin = (cafe) => [
    '勝ったのは ',
    cafe,
    '！世代交代は、ここで証明された！',
  ];
};
