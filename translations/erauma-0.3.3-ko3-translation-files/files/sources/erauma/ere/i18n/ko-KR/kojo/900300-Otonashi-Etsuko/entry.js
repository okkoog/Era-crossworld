// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/900300-Otonashi-Etsuko/rec-303.kojo');

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/900300-Otonashi-Etsuko/love-303.kojo");

  // [번역 대상] npc_func
  npc_func = '許可を増やす（募集）';

  // [번역 대상] reporter
  reporter = '専属記者';

  // [번역 대상] reporter_desc
  reporter_desc = (buff) => `名声取得+${buff}%、名声低下-${buff}%。`;
};
