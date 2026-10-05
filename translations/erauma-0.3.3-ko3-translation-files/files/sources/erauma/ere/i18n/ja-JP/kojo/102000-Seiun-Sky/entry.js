// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/102000-Seiun-Sky/entry.js
// 대상 함수/속성: easy_go, easy_go_desc, jess, jess_desc, radiant, radiant_desc, soft_be, soft_be_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102000-Seiun-Sky/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/rec-20.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/daily-20.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/edu-20.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/love-20.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/ero-20.kojo');

  // [번역 대상] radiant — 함수/속성 전체 문맥에서 남은 원문을 번역
  radiant = (c) => `艶やか${c > 1 ? `(${c})` : ''}`;
  // [번역 대상] radiant_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  radiant_desc = (c) =>
    `体力・気力上限+${50 * c}（1層につき+50）、トレーニングで得るスキルPt+${c}（1層につき+1）。最大10層。毎週2層減る。`;

  // [번역 대상] easy_go — 함수/속성 전체 문맥에서 남은 원문을 번역
  easy_go = (c) => `自由気まま${c > 1 ? `(${c})` : ''}`;
  // [번역 대상] easy_go_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  easy_go_desc = (c) =>
    `体力・気力消費-${5 * c}%（1層につき-5%）、トレーニング効果-${5 * c}%（1層につき-5%）。最大10層。トレーニング／勉強以外の行動で1層減り、小休憩と釣りでは2層減る。`;

  // [번역 대상] jess — 함수/속성 전체 문맥에서 남은 원문을 번역
  jess = '見えない枷';
  // [번역 대상] jess_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  jess_desc = 'トレーニング効果+100%、体力・気力消費+100%。サボらない。';

  // [번역 대상] soft_be — 함수/속성 전체 문맥에서 남은 원문을 번역
  soft_be = '永遠の自由';
  // [번역 대상] soft_be_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  soft_be_desc = 'もう頑張らなくていい。トレーニングも出走もできない。';
};
