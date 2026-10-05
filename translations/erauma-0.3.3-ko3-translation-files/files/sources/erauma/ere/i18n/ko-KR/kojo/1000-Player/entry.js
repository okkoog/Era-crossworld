// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/1000-Player/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/1000-Player/daily-0.js'));

  // [번역 완료] akuochi
  akuochi = '악타락';

  // [번역 완료] akuochi_desc
  akuochi_desc = '즐기면 된다.';

  // [번역 완료] b_l_stamina
  b_l_stamina = '피로곤비';

  // [번역 완료] b_l_stamina_desc
  b_l_stamina_desc = '더는 움직일 수 없다. 기력 소비가 크게 증가한다!';

  // [번역 완료] b_l_time
  b_l_time = '졸림';

  // [번역 완료] b_l_time_desc
  b_l_time_desc = '머리가 멍해서 언제 쓰러져도 이상하지 않다!';

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/1000-Player/ero-0"));

  // [번역 완료] pn_1
  pn_1 = '레이스용 암말';

  // [번역 완료] pn_1_desc
  pn_1_desc =
    '현역 우마무스메지만 시니어급 레이스에만 출주할 수 있다. 급여는 없으며, 출주 시 상금 배분+400%.';

  // [번역 완료] pn_2_desc
  pn_2_desc =
    '현역 성노예. 시니어급 레이스에만 출주할 수 있다. 급여는 없으며, 출주 시 상금 배분+400%. 성적 봉사로 명성을 얻는다.';

  // [번역 완료] pn_3_desc
  pn_3_desc =
    '현역 임신 주머니. 시니어급 레이스에만 출주할 수 있다. 급여는 없으며, 출주 시 상금 배분+400%. 우마무스메와의 성교·출산으로 명성을 얻고, 자식의 출주 명성 보상+100%.';

  // [번역 완료] rape
  rape = '악행 용이';

  // [번역 완료] rape_desc
  rape_desc = '「Dirty Deeds Done Dirt Cheap……」범해라, 유린해라, 정복해라!';
};
