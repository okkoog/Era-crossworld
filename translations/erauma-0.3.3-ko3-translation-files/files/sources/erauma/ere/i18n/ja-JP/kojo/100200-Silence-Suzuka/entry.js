// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/100200-Silence-Suzuka/entry.js
// 대상 함수/속성: debuff1, debuff1_desc, debuff2, debuff2_desc, debuff3, debuff3_desc, report_begin_race
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100200-Silence-Suzuka/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/rec-2.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/daily-2.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/edu-2.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/love-2.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/ero-2.kojo');

  // [번역 대상] debuff1 — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff1 = 'つらい';
  // [번역 대상] debuff1_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff1_desc = 'やる気上限が1段階下がる。';

  // [번역 대상] debuff2 — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff2 = '失意';
  // [번역 대상] debuff2_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff2_desc = 'やる気上限が2段階下がる。';

  // [번역 대상] debuff3 — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff3 = '古傷の脚';
  // [번역 대상] debuff3_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff3_desc = '定められた終点。';

  // [번역 대상] report_begin_race — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_begin_race = (suzuka) => [
    suzuka,
    { color: suzuka.color, content: ' が鮮やかに初勝利！' },
  ];
};
