// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/105000-Narita-Taishin/entry") {

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/daily-50.kojo");

  // [번역 완료] debuff
  debuff = '폐출혈';

  // [번역 완료] debuff_desc
  debuff_desc =
    '체력·기력 상한-300, 의욕 상한이 2단계 내려간다. 부상이 치료되면 자연스럽게 사라진다.';

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/edu-50.kojo");

  // [번역 완료] frog
  frog = '황홀';

  // [번역 완료] frog_desc
  frog_desc = '트레이닝 효과-100%. 레이스에 출주할 수 없다.';

  // 한국어 작업 모듈 연결: love
  love = ({ ...require("#/i18n/ja-JP/kojo/105000-Narita-Taishin/love-50.kojo"), ...require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/love-50.kojo") });

  // [번역 완료] new_goal
  new_goal = '재기';

  // [번역 완료] new_goal_desc
  new_goal_desc = '트레이닝 효과+10%.';

  // [번역 완료] notify_debuff
  notify_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    '이(가) ',
    s_debuff,
    '을(를) 앓기 시작했다!】',
  ];

  // [번역 완료] notify_love_event_50
  notify_love_event_50 =
    '(지금은 아직 이르다. 선을 넘는 일은 하지 않는 편이 좋아……)';

  // [번역 완료] notify_remove_debuff
  notify_remove_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    '의 ',
    s_debuff,
    '이(가) 나았다】',
  ];

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/rec-50.kojo");

  // [번역 완료] resist
  resist = '차가운 거절';

  // [번역 완료] resist_desc
  resist_desc =
    '갑작스러운 친밀한 접촉을 좋아하지 않는다. 선을 넘지 않는 편이 좋다. 하지만 계기만 있다면……';

  // [번역 완료] swim_up
  swim_up = '거슬러 올라가며';

  // [번역 완료] swim_up_desc
  swim_up_desc =
    '얕보였군! 출주 시 승부욕으로 모든 기초 능력의 발휘가 상승한다.';

  // [번역 완료] together
  together = '너와 함께';

  // [번역 완료] together_desc
  together_desc = '트레이닝 효과+5%.';
};
