// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/entry')
) {
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/daily-3.js'),
  );
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/rec-3.js'),
  );

  // 한국어 작업 모듈 연결: basement
  basement = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/base-3.js"),
  );

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3.js"));

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/ero-3.js"));

  // [번역 완료] hurt
  hurt = '다리 부상!';

  // [번역 완료] hurt_desc
  hurt_desc =
    '심각한 다리 부상. 삼여신도 완치할 수 없다. 트레이닝 효과-20%, 체력·기력 상한-200, 소비+10%, 스트레스 획득+10%. 목표 레이스에서 1착이 아니면 명성-5. 착외 시 스트레스+25%, 명성-10.';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/love-3.js"),
  );

  // [번역 완료] notify_leg_hurt
  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    '이(가) ',
    s_hurt,
    '을(를) 앓기 시작했다!】',
  ];

  // [번역 완료] report_arim_kin
  report_arim_kin = (teio) => [
    teio,
    { color: teio.color, content: ', 기적의 부활!' },
  ];

  // [번역 완료] report_long_dis
  report_long_dis = (teio) => [
    {
      color: teio.color,
      content: '한계를 넘어, 세계의 끝으로——',
    },
    teio,
    {
      color: teio.color,
      content: '이(가) 또 하나의 승리를 거뒀다!',
    },
  ];
};
