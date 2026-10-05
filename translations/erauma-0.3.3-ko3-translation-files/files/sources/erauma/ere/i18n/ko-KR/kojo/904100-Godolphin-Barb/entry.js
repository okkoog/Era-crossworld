// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/904100-Godolphin-Barb/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/904100-Godolphin-Barb/rec-341.kojo');

  // [번역 완료] bt_pray
  bt_pray = '「신이시여, 부디 자비를……」';

  // [번역 완료] buff
  buff = '사랑';

  // [번역 완료] buff_desc
  buff_desc = (buff, buff2) =>
    `팀원의 지능 트레이닝 효과+${buff}%. 트레이닝으로 얻는 스킬 Pt+${buff2}%。`;

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/904100-Godolphin-Barb/ero-341.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/904100-Godolphin-Barb/love-341.kojo");
};
