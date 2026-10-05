// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/106799-Satono-Diamond/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/106799-Satono-Diamond/rec-67-99.js'));

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/106799-Satono-Diamond/edu-67-99.js"),
  );

  // [번역 완료] notify_bs_event
  notify_bs_event = (daiya) => [
    daiya.get_colored_name(),
    '은(는) 외출을 기대하고 있다……',
  ];
};
