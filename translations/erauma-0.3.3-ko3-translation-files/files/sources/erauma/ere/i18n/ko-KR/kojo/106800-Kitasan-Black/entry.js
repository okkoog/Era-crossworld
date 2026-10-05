// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/106800-Kitasan-Black/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/106800-Kitasan-Black/rec-68.js'),
  );
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/106800-Kitasan-Black/daily-68.js'));

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/106800-Kitasan-Black/edu-68.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/106800-Kitasan-Black/love-68.js"),
  );

  // [번역 대상] report_arim_kin
  report_arim_kin = (kita) => [
    { color: kita.color, content: 'これぞ！巨星の、幕引きだ！' },
  ];
};
