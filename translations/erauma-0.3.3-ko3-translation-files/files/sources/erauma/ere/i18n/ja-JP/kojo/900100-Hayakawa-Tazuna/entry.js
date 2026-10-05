// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900100-Hayakawa-Tazuna/entry.js
// 대상 함수/속성: assist, assist_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/900100-Hayakawa-Tazuna/love-301.kojo');

  // [번역 대상] assist — 함수/속성 전체 문맥에서 남은 원문을 번역
  assist = '専属アシスタント';
  // [번역 대상] assist_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  assist_desc = (buff, you) =>
    `自身の体力・気力消費+${buff}%。${you} の体力・気力消費-${buff}%。`;
};
