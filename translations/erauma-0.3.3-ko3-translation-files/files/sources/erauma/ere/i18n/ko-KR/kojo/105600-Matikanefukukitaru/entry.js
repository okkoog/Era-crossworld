// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/rec-56.js'));

  // [번역 완료] achieve_track_aim_template
  achieve_track_aim_template = '절호조로 출주한 G2 이상 레이스 수: %COUNT%';

  // [번역 완료] antei
  antei = '안정';

  // [번역 완료] antei_desc
  antei_desc =
    '트레이너가 곁에 있다면 틀림없이 대길! 트레이닝 성공률+10%, 모든 트레이닝 효과+5%, 호감 획득+10%, 출주 시 능력+5%';

  // [번역 완료] chuukichi
  chuukichi = '중길';

  // [번역 완료] chuukichi_desc
  chuukichi_desc =
    '좋은 운세다! 트레이닝 성공률+5%, 모든 트레이닝 효과+5%, 출주 시 능력+3%';

  // [번역 완료] daikichi
  daikichi = '대길';

  // [번역 완료] daikichi_desc
  daikichi_desc =
    '영력이 가득하다! 트레이닝 성공률+10%, 모든 트레이닝 효과+5%, 호감 획득+10%, 출주 시 능력+5%';

  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/daily-56.js"),
  );

  // [번역 완료] dependency
  dependency = '운세 의존';

  // [번역 완료] dependency_desc
  dependency_desc = '오늘의 운세는 뭘까?';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/edu-56.js"),
  );

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/ero-56.js"),
  );

  // [번역 완료] kyou
  kyou = '흉';

  // [번역 완료] kyou_desc
  kyou_desc =
    '이럴 때는 후쿠키타루를 위로해 주는 게 어때? 트레이닝 성공률-10%, 모든 트레이닝 효과-10%, 출주 시 능력-10%, 호감 획득+20%';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/love-56.js"),
  );

  // [번역 완료] ptsd_desc
  ptsd_desc =
    '마주할 수밖에 없는 그림자. 트레이닝 성공률-10%, 모든 트레이닝 효과-10%, 출주 시 능력-10%, 의욕 상한-3';

  // [번역 완료] shoukichi
  shoukichi = '소길';

  // [번역 완료] shoukichi_desc
  shoukichi_desc = '나쁘지 않다! 트레이닝 성공률+5%, 출주 시 능력+1%';
};
