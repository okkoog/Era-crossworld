// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/entry.js
// 대상 함수/속성: chairman, chairman_desc, get_npc_celebration, npc_bye, npc_func, npc_out, npc_sex, npc_talk
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900200-Akikawa-Yayoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/rec-302.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/daily-302.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/love-302.kojo');

  // [번역 대상] chairman — 함수/속성 전체 문맥에서 남은 원문을 번역
  chairman = 'わたくしが上司よ';
  // [번역 대상] chairman_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  chairman_desc = '理事長の権限は無限。学園指名でのウマ娘募集の名声消費-25%。';

  // [번역 대상] npc_talk — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_talk = '「雑 談！暇なら遊びに来なさい！」';
  // [번역 대상] npc_sex — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_sex = '「情 事！わたくしが犯してあげる！」';
  // [번역 대상] npc_out — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_out = '「お 出 かけ！一緒に歩きましょう！」';
  // [번역 대상] get_npc_celebration — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_npc_celebration = (celebration) =>
    `「祝 賀！${celebration}、おめでとう！」`;
  // [번역 대상] npc_func — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_func = '「抗 議！トレしたい愛馬がいない！」';
  // [번역 대상] npc_bye — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_bye = '「再 会！行ってくるわよ！」';
};
