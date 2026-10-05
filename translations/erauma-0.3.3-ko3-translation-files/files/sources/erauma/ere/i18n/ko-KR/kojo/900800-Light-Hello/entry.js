// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/900800-Light-Hello/rec-308.kojo');

  // [번역 대상] dreamer
  dreamer = '夢の開拓者';

  // [번역 대상] dreamer_desc
  dreamer_desc = (buff) =>
    buff
      ? 'チームメンバーが大舞台に出走したときの名声報酬+100%。自身と子孫は+200%。'
      : '自身と子孫が大舞台に出走したときの名声報酬+100%。';

  // [번역 대상] dreamer_junior
  dreamer_junior = '夢の継承者';

  // [번역 대상] dreamer_junior_desc
  dreamer_junior_desc = (buff) => `大舞台出走時の名声報酬+${buff}%。`;

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/900800-Light-Hello/edu-308.kojo");
};
