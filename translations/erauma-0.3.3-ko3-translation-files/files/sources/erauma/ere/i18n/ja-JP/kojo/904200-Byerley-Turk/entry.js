// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/904200-Byerley-Turk/entry.js
// 대상 함수/속성: bt_pray, buff, buff_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904200-Byerley-Turk/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/904200-Byerley-Turk/rec-342.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/904200-Byerley-Turk/love-342.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/904200-Byerley-Turk/ero-342.kojo');

  // [번역 대상] buff — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff = '信';
  // [번역 대상] buff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff_desc = (buff) =>
    `チームメンバーのスタミナと根性のトレーニング効果+${buff}%。`;

  // [번역 대상] bt_pray — 함수/속성 전체 문맥에서 남은 원문을 번역
  bt_pray = '「女神さま、お助けください。」';
};
