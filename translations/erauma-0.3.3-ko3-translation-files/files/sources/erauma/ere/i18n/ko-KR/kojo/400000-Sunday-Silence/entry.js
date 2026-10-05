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

  // [번역 대상] win
  win = (t) => `勝利の約束(${t})`;

  // [번역 대상] win_desc
  win_desc = (t, a_buff, r_buff) =>
    `出走時の能力+${a_buff}%（最大25%）、好感取得+${r_buff}%（最大30%）。クラシック級以降の連勝数に応じて効果が強くなる。`;
};
