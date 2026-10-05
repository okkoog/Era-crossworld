// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/904000-Darley-Arabian/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/904000-Darley-Arabian/rec-340.kojo');

  // [번역 완료] bt_pray
  bt_pray = '「아아, 여신님, 도와주세요——」';

  // [번역 완료] buff
  buff = '소망';

  // [번역 완료] buff_desc
  buff_desc = (buff) =>
    `팀원의 스피드와 파워 트레이닝 효과+${buff}%。`;

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/904000-Darley-Arabian/ero-340.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/904000-Darley-Arabian/love-340.kojo");
};
