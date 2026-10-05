// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/entry") {

  // [번역 대상] chairman
  chairman = 'わたくしが上司よ';

  // [번역 대상] chairman_desc
  chairman_desc = '理事長の権限は無限。学園指名でのウマ娘募集の名声消費-25%。';

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/daily-302.kojo");

  // [번역 대상] get_npc_celebration
  get_npc_celebration = (celebration) =>
    `「祝 賀！${celebration}、おめでとう！」`;

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/love-302.kojo");

  // [번역 대상] npc_bye
  npc_bye = '「再 会！行ってくるわよ！」';

  // [번역 대상] npc_func
  npc_func = '「抗 議！トレしたい愛馬がいない！」';

  // [번역 대상] npc_out
  npc_out = '「お 出 かけ！一緒に歩きましょう！」';

  // [번역 대상] npc_sex
  npc_sex = '「情 事！わたくしが犯してあげる！」';

  // [번역 대상] npc_talk
  npc_talk = '「雑 談！暇なら遊びに来なさい！」';

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/rec-302.kojo");
};
