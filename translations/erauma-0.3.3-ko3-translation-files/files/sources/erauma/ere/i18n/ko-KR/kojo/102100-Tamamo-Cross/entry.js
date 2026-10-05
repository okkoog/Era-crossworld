// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/entry') {
  recruit = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/rec-21.kojo');
  // 한국어 작업 모듈 연결: daily
  daily = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/daily-21.kojo');
  // 한국어 작업 모듈 연결: ero
  ero = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/ero-21.kojo');
  // 한국어 작업 모듈 연결: love
  love = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/love-21.kojo');

  // [번역 완료] aim_desc_1
  aim_desc_1 = '클래식급 3월까지 OP 이상 레이스에서 1착';

  // [번역 완료] aim_desc_2
  aim_desc_2 = '시니어급까지 G3 이상 레이스에서 1착';

  // 한국어 작업 모듈 연결: edu
  edu = ({ ...require("#/i18n/ja-JP/kojo/102100-Tamamo-Cross/edu-21.kojo"), ...require("#/i18n/ko-KR/kojo/102100-Tamamo-Cross/edu-21.kojo") });

  // [번역 완료] flash
  flash = '섬광';

  // [번역 완료] flash_desc
  flash_desc = '하얀 번개. 모든 레이스에 출주할 수 있다';

  // [번역 완료] lightning
  lightning = '뇌격';

  // [번역 완료] lightning_desc
  lightning_desc =
    '전류가 약해진다. 트레이닝 효과-20%, 체력·기력 상한-200, 소비+10%, 스트레스 획득+10%';

  // [번역 완료] pilot
  pilot = '선도';

  // [번역 완료] pilot_desc
  pilot_desc = '뇌광이 막 생겨나기 시작했다. 지금은 OP~G3급 레이스에만 출주할 수 있다';

  // [번역 완료] report_tenn_spr
  report_tenn_spr = (tama) => [
    {
      color: tama.color,
      content: '말 그대로 하얀 번개가 경기장을 밝혔다! 이제 누가 내를 얕볼 수 있겠노!',
    },
    tama,
    {
      color: tama.color,
      content: '！',
    },
  ];

  // [번역 완료] spartan
  spartan = '스파르타';

  // [번역 완료] spartan_desc
  spartan_desc = '트레이닝 효과+20%, 체력·기력 소비+5%';

  // [번역 완료] thundercloud
  thundercloud = '뇌운';

  // [번역 완료] thundercloud_desc
  thundercloud_desc = '폭풍 전야. 지금은 OP급 레이스에만 출주할 수 있다';

  // [번역 완료] uma_first
  uma_first = '우마무스메 우선';

  // [번역 완료] uma_first_desc
  uma_first_desc = '매 턴 자동으로 의욕이 올라간다. 체력·기력 소비-10%';
};
