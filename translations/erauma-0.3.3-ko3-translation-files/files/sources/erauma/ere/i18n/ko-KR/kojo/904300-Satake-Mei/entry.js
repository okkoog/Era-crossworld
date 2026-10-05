// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/904300-Satake-Mei/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/904300-Satake-Mei/rec-343.kojo');

  // [번역 완료] dream_chaser
  dream_chaser = '꿈을 좇는 자';

  // [번역 완료] dream_chaser_desc
  dream_chaser_desc = (buff) =>
    buff
      ? '팀원의 해외 원정 악영향이 절반으로 줄어든다.'
      : '팀원의 해외 원정 악영향이 줄어든다.';

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/904300-Satake-Mei/love-343.kojo");
};
