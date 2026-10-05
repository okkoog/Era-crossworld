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

  // [번역 대상] hurt
  hurt = '脚部負傷！';

  // [번역 대상] hurt_desc
  hurt_desc =
    '重い脚の怪我。三女神でも完治できない。トレーニング効果-20%、体力・気力上限-200、消費+10%、ストレス取得+10%。目標レースで1着以外は名声-5。着外はストレス+25%、名声-10。';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/love-3.js"),
  );

  // [번역 대상] notify_leg_hurt
  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    ' が ',
    s_hurt,
    ' を発症した！】',
  ];

  // [번역 대상] report_arim_kin
  report_arim_kin = (teio) => [
    teio,
    { color: teio.color, content: '、奇跡の復活！' },
  ];

  // [번역 대상] report_long_dis
  report_long_dis = (teio) => [
    {
      color: teio.color,
      content: '限界を超えて、世界の果てへ——',
    },
    teio,
    {
      color: teio.color,
      content: ' がまた一つ勝った！',
    },
  ];
};
