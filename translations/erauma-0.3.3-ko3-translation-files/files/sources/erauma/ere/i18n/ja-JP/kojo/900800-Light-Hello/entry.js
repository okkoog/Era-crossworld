// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900800-Light-Hello/entry.js
// 대상 함수/속성: dreamer, dreamer_desc, dreamer_junior, dreamer_junior_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900800-Light-Hello/rec-308.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/900800-Light-Hello/edu-308.kojo');

  // [번역 대상] dreamer — 함수/속성 전체 문맥에서 남은 원문을 번역
  dreamer = '夢の開拓者';
  // [번역 대상] dreamer_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  dreamer_desc = (buff) =>
    buff
      ? 'チームメンバーが大舞台に出走したときの名声報酬+100%。自身と子孫は+200%。'
      : '自身と子孫が大舞台に出走したときの名声報酬+100%。';

  // [번역 대상] dreamer_junior — 함수/속성 전체 문맥에서 남은 원문을 번역
  dreamer_junior = '夢の継承者';
  // [번역 대상] dreamer_junior_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  dreamer_junior_desc = (buff) => `大舞台出走時の名声報酬+${buff}%。`;
};
