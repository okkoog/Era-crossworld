// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/105200-Haru-Urara/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105200-Haru-Urara/rec-52.js'));

  // [번역 대상] achieve_track_aim_template
  achieve_track_aim_template = 'ファン数：%COUNT%';

  // 한국어 작업 모듈 연결: basement
  basement = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105200-Haru-Urara/base-52.js"),
  );

  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105200-Haru-Urara/daily-52.js"),
  );

  // [번역 대상] echo
  echo = (c) => `残響(${c})`;

  // [번역 대상] echo_desc
  echo_desc = (_, g_buff, d_buff) =>
    `？？？「分かり合えれば、現実も共鳴する。」出走時：${[
      g_buff > 0 ? `芝適性+${g_buff}` : '',
      d_buff > 0 ? `中・長距離適性+${d_buff}` : '',
    ]
      .filter((e) => e)
      .join('、')}。`;

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(require("#/i18n/ko-KR/kojo/105200-Haru-Urara/edu-52.js"));

  // [번역 대상] edu_aim_1
  edu_aim_1 = 'クラシック級 7月第3週まで ファン数';

  // [번역 대상] edu_aim_2
  edu_aim_2 = 'クラシック級 11月第3週まで ファン数';

  // [번역 대상] edu_aim_3
  edu_aim_3 = 'シニア級まで ファン数';

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/105200-Haru-Urara/ero-52.js"));

  // [번역 대상] fans_buff
  fans_buff = 'ファンの応援';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105200-Haru-Urara/love-52.js"),
  );

  // [번역 대상] notify_back_school_event
  notify_back_school_event = (urara, you) => [
    urara.get_colored_name(),
    ' は最近、',
    you.get_colored_name(),
    ' と一緒に外出したがっているようだ……',
  ];

  // [번역 대상] notify_break_loop
  notify_break_loop = (urara) => [
    urara.get_colored_name(),
    ' は、ファンの応援からより強い力を得られるようになった！',
  ];

  // [번역 대상] notify_bs_challenge
  notify_bs_challenge =
    '最近、生徒たちが特別な挑戦をしているらしい。次にひとりで行動するときは、気にかけてみよう……';

  // [번역 대상] notify_bs_dance
  notify_bs_dance = (urara) => [
    '放課後、',
    urara.get_colored_name(),
    ' がひとりでダンスの練習をしているらしい……次にひとりで出かけるときは、様子を見てみよう',
  ];

  // [번역 대상] notify_bs_mother
  notify_bs_mother =
    '理事長室の近くに、最近見知らぬ人が出没しているらしい……次にひとりで理事長室へ行くときは、接触してみよう';

  // [번역 대상] notify_bs_park
  notify_bs_park = (urara, you) => [
    urara.get_colored_name(),
    ' は最近、',
    you.get_colored_name(),
    ' と商店街へ行きたいと思っている……',
  ];

  // [번역 대상] notify_bs_stair
  notify_bs_stair =
    '生徒の間で、階段の段数にまつわる怪談があるらしい……次にひとりで理事長室へ行くときは、気にかけてみよう';

  // [번역 대상] notify_fan_reward
  notify_fan_reward = (urara, fan) => [
    urara.get_colored_name(),
    ' のファン数が ',
    fan,
    ' 増えた！',
  ];

  // [번역 대상] notify_os_all_like
  notify_os_all_like = (urara) => [
    '最近、',
    urara.get_colored_name(),
    ' が学園近くの小さな公園へよく行くらしい……次にひとりで出かけるときは、気にかけてみよう',
  ];

  // [번역 대상] notify_sa_vs
  notify_sa_vs =
    '最近、中庭で腕相撲の勝負を始める生徒がいるらしい……次にひとりで出かけるときは、気にかけてみよう';

  // [번역 대상] report_arim_kin
  report_arim_kin = (urara) => [
    {
      color: urara.color,
      content:
        '年の瀬の中山、春の桜が満開！有馬記念！栄誉の舞台の中央に立つのは——',
    },
    urara,
    { color: urara.color, content: '！！！' },
  ];
};
