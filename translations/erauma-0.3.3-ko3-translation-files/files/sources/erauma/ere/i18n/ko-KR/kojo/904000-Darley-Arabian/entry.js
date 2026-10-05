// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/904000-Darley-Arabian/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/904000-Darley-Arabian/rec-340.kojo');

  // [번역 대상] bt_pray
  bt_pray = '「ああ、女神さま、お助けください——」';

  // [번역 대상] buff
  buff = '望';

  // [번역 대상] buff_desc
  buff_desc = (buff) =>
    `チームメンバーのスピードとパワーのトレーニング効果+${buff}%。`;

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/904000-Darley-Arabian/ero-340.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/904000-Darley-Arabian/love-340.kojo");
};
