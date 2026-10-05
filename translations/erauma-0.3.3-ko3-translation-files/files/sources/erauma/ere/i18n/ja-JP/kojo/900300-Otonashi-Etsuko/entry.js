// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/entry.js
// 대상 함수/속성: npc_func, reporter, reporter_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/rec-303.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/love-303.kojo');

  // [번역 대상] reporter — 함수/속성 전체 문맥에서 남은 원문을 번역
  reporter = '専属記者';
  // [번역 대상] reporter_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  reporter_desc = (buff) => `名声取得+${buff}%、名声低下-${buff}%。`;

  // [번역 대상] npc_func — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_func = '許可を増やす（募集）';
};
