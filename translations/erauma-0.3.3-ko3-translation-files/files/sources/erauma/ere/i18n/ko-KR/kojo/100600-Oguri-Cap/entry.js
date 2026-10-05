// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/entry') {
  daily = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/daily-6.kojo');
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/rec-6.kojo');

  // [번역 완료] aim_desc
  aim_desc = '1~6월 G1에서 3착 이내';

  // [번역 완료] cinderella
  cinderella = '신데렐라';

  // [번역 완료] cinderella_desc
  cinderella_desc =
    '턴 시작 시 스트레스가 우울 이하까지 자동으로 내려가고, 의욕이 부진 이상까지 자동으로 올라간다.';

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/100600-Oguri-Cap/edu-6.kojo");

  // [번역 완료] latecomer
  latecomer = '뒤늦게 온 자';

  // [번역 완료] latecomer_desc
  latecomer_desc =
    '육성은 클래식급부터 시작하며, 클래식 삼관(사츠키상, 일본 더비, 킷카상)에는 출주할 수 없다.';

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/100600-Oguri-Cap/love-6.kojo");

  // [번역 완료] palace_race
  palace_race = '모의·일본 더비';

  // [번역 완료] report_arim_kin
  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' 1착!' },
      oguri,
      { color: oguri.color, content: ' 1착!' },
      oguri,
      { color: oguri.color, content: ' 1착!' },
      oguri,
      {
        color: oguri.color,
        content: ' 1착! 오른손을 높이 치켜든 승자, 슈퍼 우마무스메 ',
      },
      oguri,
      { color: oguri.color, content: '！' },
    ];
  }

  // [번역 완료] transfer
  transfer = (timer) => `전입생 (${timer})`;

  // [번역 완료] transfer_desc
  transfer_desc = (timer) => `${timer}턴 동안 트레이닝 효과+100%.`;
};
