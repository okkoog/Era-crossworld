// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/900800-Light-Hello/rec-308.kojo');

  // [번역 완료] dreamer
  dreamer = '꿈의 개척자';

  // [번역 완료] dreamer_desc
  dreamer_desc = (buff) =>
    buff
      ? '팀원이 큰 무대에 출주했을 때 명성 보상+100%. 자신과 자손은 +200%.'
      : '자신과 자손이 큰 무대에 출주했을 때 명성 보상+100%.';

  // [번역 완료] dreamer_junior
  dreamer_junior = '꿈의 계승자';

  // [번역 완료] dreamer_junior_desc
  dreamer_junior_desc = (buff) => `큰 무대 출주 시 명성 보상+${buff}%。`;

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/900800-Light-Hello/edu-308.kojo");
};
