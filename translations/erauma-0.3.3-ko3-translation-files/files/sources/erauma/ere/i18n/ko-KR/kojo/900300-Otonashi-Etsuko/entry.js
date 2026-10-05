// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/900300-Otonashi-Etsuko/rec-303.kojo');

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/900300-Otonashi-Etsuko/love-303.kojo");

  // [번역 완료] npc_func
  npc_func = '모집 허가를 늘린다';

  // [번역 완료] reporter
  reporter = '전속 기자';

  // [번역 완료] reporter_desc
  reporter_desc = (buff) => `명성 획득+${buff}%, 명성 감소-${buff}%。`;
};
