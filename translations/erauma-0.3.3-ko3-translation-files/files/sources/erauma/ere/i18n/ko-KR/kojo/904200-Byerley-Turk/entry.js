// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/904200-Byerley-Turk/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/904200-Byerley-Turk/rec-342.kojo');

  // [번역 대상] bt_pray
  bt_pray = '「女神さま、お助けください。」';

  // [번역 대상] buff
  buff = '信';

  // [번역 대상] buff_desc
  buff_desc = (buff) =>
    `チームメンバーのスタミナと根性のトレーニング効果+${buff}%。`;

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/904200-Byerley-Turk/ero-342.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/904200-Byerley-Turk/love-342.kojo");
};
