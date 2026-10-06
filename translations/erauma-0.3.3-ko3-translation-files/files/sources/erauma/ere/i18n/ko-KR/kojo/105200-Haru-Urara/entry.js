// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/105200-Haru-Urara/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105200-Haru-Urara/rec-52.js'));

  // [번역 완료] achieve_track_aim_template
  achieve_track_aim_template = '팬 수: %COUNT%';

  // 한국어 작업 모듈 연결: basement
  basement = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105200-Haru-Urara/base-52.js"),
  );

  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105200-Haru-Urara/daily-52.js"),
  );

  // [번역 완료] echo
  echo = (c) => `잔향(${c})`;

  // [번역 완료] echo_desc
  echo_desc = (_, g_buff, d_buff) =>
    `？？？「서로 이해할 수 있다면, 현실도 공명한다.」 출주 시: ${[
      g_buff > 0 ? `잔디 적성+${g_buff}` : '',
      d_buff > 0 ? `중·장거리 적성+${d_buff}` : '',
    ]
      .filter((e) => e)
      .join(', ')}。`;

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(require("#/i18n/ko-KR/kojo/105200-Haru-Urara/edu-52.js"));

  // [번역 완료] edu_aim_1
  edu_aim_1 = '클래식급 7월 3주차까지 팬 수';

  // [번역 완료] edu_aim_2
  edu_aim_2 = '클래식급 11월 3주차까지 팬 수';

  // [번역 완료] edu_aim_3
  edu_aim_3 = '시니어급까지 팬 수';

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/105200-Haru-Urara/ero-52.js"));

  // [번역 완료] fans_buff
  fans_buff = '팬들의 응원';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105200-Haru-Urara/love-52.js"),
  );

  // [번역 완료] notify_back_school_event
  notify_back_school_event = (urara, you) => [
    urara.get_colored_name(),
    '은(는) 최근, ',
    you.get_colored_name(),
    '와(과) 함께 외출하고 싶어 하는 듯하다……',
  ];

  // [번역 완료] notify_break_loop
  notify_break_loop = (urara) => [
    urara.get_colored_name(),
    '은(는) 팬들의 응원에서 더 강한 힘을 얻을 수 있게 되었다!',
  ];

  // [번역 완료] notify_bs_challenge
  notify_bs_challenge =
    '최근 학생들이 특별한 도전을 하고 있는 듯하다. 다음에 혼자 행동할 때는 신경 써 보자……';

  // [번역 완료] notify_bs_dance
  notify_bs_dance = (urara) => [
    '방과 후, ',
    urara.get_colored_name(),
    '이(가) 혼자 춤 연습을 하고 있는 듯하다…… 다음에 혼자 외출할 때는 상태를 살펴보자',
  ];

  // [번역 완료] notify_bs_mother
  notify_bs_mother =
    '최근 이사장실 근처에 낯선 사람이 나타나는 듯하다…… 다음에 혼자 이사장실로 갈 때는 접촉해 보자';

  // [번역 완료] notify_bs_park
  notify_bs_park = (urara, you) => [
    urara.get_colored_name(),
    '은(는) 최근, ',
    you.get_colored_name(),
    '와(과) 상점가에 가고 싶어 하는 듯하다……',
  ];

  // [번역 완료] notify_bs_stair
  notify_bs_stair =
    '학생들 사이에 계단 수와 관련된 괴담이 있는 듯하다…… 다음에 혼자 이사장실로 갈 때는 신경 써 보자';

  // [번역 완료] notify_fan_reward
  notify_fan_reward = (urara, fan) => [
    urara.get_colored_name(),
    '의 팬 수가 ',
    fan,
    ' 늘었다!',
  ];

  // [번역 완료] notify_os_all_like
  notify_os_all_like = (urara) => [
    '最近、',
    urara.get_colored_name(),
    '이(가) 학원 근처의 작은 공원에 자주 가는 듯하다…… 다음에 혼자 외출할 때는 신경 써 보자',
  ];

  // [번역 완료] notify_sa_vs
  notify_sa_vs =
    '최근 중정에서 팔씨름 승부를 시작하는 학생이 있는 듯하다…… 다음에 혼자 외출할 때는 신경 써 보자';

  // [번역 완료] report_arim_kin
  report_arim_kin = (urara) => [
    {
      color: urara.color,
      content:
        '연말의 나카야마, 봄의 벚꽃이 만개! 아리마 기념! 영광의 무대 한가운데 서는 이는——',
    },
    urara,
    { color: urara.color, content: '！！！' },
  ];
};
