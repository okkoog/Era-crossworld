// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/400000-Sunday-Silence/entry.js
// 대상 함수/속성: win, win_desc
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/rec-400.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/daily-400.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/edu-400.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/love-400.js'),
  );

  // [번역 대상] win — 함수/속성 전체 문맥에서 남은 원문을 번역
  win = (t) => `勝利の約束(${t})`;
  // [번역 대상] win_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  win_desc = (t, a_buff, r_buff) =>
    `出走時の能力+${a_buff}%（最大25%）、好感取得+${r_buff}%（最大30%）。クラシック級以降の連勝数に応じて効果が強くなる。`;
};
