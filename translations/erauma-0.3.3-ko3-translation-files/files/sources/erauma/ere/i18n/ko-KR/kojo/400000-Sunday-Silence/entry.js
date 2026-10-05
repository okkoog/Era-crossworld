// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/entry')
) {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/rec-400.js'),
  );
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/daily-400.js'));

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/400000-Sunday-Silence/edu-400.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/400000-Sunday-Silence/love-400.js"),
  );

  // [번역 완료] win
  win = (t) => `승리의 약속(${t})`;

  // [번역 완료] win_desc
  win_desc = (t, a_buff, r_buff) =>
    `출주 시 능력+${a_buff}%(최대25%), 호감 획득+${r_buff}%(최대30%). 클래식급 이후 연승 수에 따라 효과가 강해진다.`;
};
