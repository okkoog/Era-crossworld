// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/100300-Tokai-Teio/entry.js
// 대상 함수/속성: hurt, hurt_desc, notify_leg_hurt, report_arim_kin, report_long_dis
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100300-Tokai-Teio/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/rec-3.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/daily-3.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3.js'));
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/love-3.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/ero-3.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/base-3.js'),
  );

  // [번역 대상] notify_leg_hurt — 함수/속성 전체 문맥에서 남은 원문을 번역
  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    ' が ',
    s_hurt,
    ' を発症した！】',
  ];

  // [번역 대상] hurt — 함수/속성 전체 문맥에서 남은 원문을 번역
  hurt = '脚部負傷！';
  // [번역 대상] hurt_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  hurt_desc =
    '重い脚の怪我。三女神でも完治できない。トレーニング効果-20%、体力・気力上限-200、消費+10%、ストレス取得+10%。目標レースで1着以外は名声-5。着外はストレス+25%、名声-10。';

  // [번역 대상] report_arim_kin — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_arim_kin = (teio) => [
    teio,
    { color: teio.color, content: '、奇跡の復活！' },
  ];
  // [번역 대상] report_long_dis — 함수/속성 전체 문맥에서 남은 원문을 번역
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
