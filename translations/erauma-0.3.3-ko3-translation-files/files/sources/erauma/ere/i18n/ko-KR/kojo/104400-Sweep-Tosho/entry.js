// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/104400-Sweep-Tosho/entry") {

  // [번역 완료] agreement
  agreement = '대마법사의 약속';

  // [번역 완료] agreement_desc
  agreement_desc =
    '아무래도 소중한 약속인 듯하다. 약속을 지키기 위해 의욕이 올라가 있다.';

  // [번역 완료] cuckold
  cuckold = '「마법 버릇」';

  // [번역 완료] cuckold_desc
  cuckold_desc = '「왜, 왜 마법 버릇이라고 부르면 안 되는 거야!」';

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/daily-44.kojo");

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/edu-44.kojo");

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/ero-44.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/love-44.kojo");

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/rec-44.kojo");

  // [번역 완료] report_eliz_cup_s
  report_eliz_cup_s = (sweep) => [
    sweep,
    '！',
    sweep,
    '입니다!',
    '실력자들을 꺾고 우승! 정말 강합니다!',
    '이 충격, 설마 정말 『마법』인가요!?',
  ];

  // [번역 완료] report_takz_kin_s
  report_takz_kin_s = (sweep) => [
    sweep,
    '、',
    sweep,
    '인가요?!!!',
    '강호들의 벽을 넘어,',
    sweep,
    '이(가) 다카라즈카 기념을 제패했습니다!',
    '이 충격적인 승리야말로 『기적』의 증명입니다!!',
  ];
};
