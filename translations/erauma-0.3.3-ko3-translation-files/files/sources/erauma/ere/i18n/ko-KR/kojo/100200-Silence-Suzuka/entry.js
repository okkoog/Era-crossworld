// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/daily-2.kojo');
  // 한국어 작업 모듈 연결: edu
  edu = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/edu-2.kojo');
  ero = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/ero-2.kojo');
  // 한국어 작업 모듈 연결: love
  love = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/love-2.kojo');
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/rec-2.kojo');

  // [번역 대상] debuff1
  debuff1 = 'つらい';

  // [번역 대상] debuff1_desc
  debuff1_desc = 'やる気上限が1段階下がる。';

  // [번역 대상] debuff2
  debuff2 = '失意';

  // [번역 대상] debuff2_desc
  debuff2_desc = 'やる気上限が2段階下がる。';

  // [번역 대상] debuff3
  debuff3 = '古傷の脚';

  // [번역 대상] debuff3_desc
  debuff3_desc = '定められた終点。';

  // [번역 대상] report_begin_race
  report_begin_race = (suzuka) => [
    suzuka,
    { color: suzuka.color, content: ' が鮮やかに初勝利！' },
  ];
};
