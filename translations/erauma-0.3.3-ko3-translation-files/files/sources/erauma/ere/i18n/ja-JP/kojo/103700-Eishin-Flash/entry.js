// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/103700-Eishin-Flash/entry.js
// 대상 함수/속성: derby, derby_desc, distracted, distracted_desc, duty, duty_desc, notify_black_treasure, weak, week_desc
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103700-Eishin-Flash/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/rec-37.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/daily-37.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/edu-37.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/love-37.js'),
  );

  // [번역 대상] notify_black_treasure — 함수/속성 전체 문맥에서 남은 원문을 번역
  notify_black_treasure = (flash) => [
    flash.get_colored_name(),
    ' は、ここのことが気になっているらしい……次にひとりで出かけて出会ったとき、聞いてみよう',
  ];

  // [번역 대상] weak — 함수/속성 전체 문맥에서 남은 원문을 번역
  weak = '虚弱';
  // [번역 대상] week_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  week_desc = 'やる気上限が1段階下がる。';

  // [번역 대상] derby — 함수/속성 전체 문맥에서 남은 원문을 번역
  derby = '栄光のダービー';
  // [번역 대상] derby_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  derby_desc = '出走時の能力+50%。';

  // [번역 대상] distracted — 함수/속성 전체 문맥에서 남은 원문을 번역
  distracted = '散漫';
  // [번역 대상] distracted_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  distracted_desc = 'トレーニング成功率-5%';

  // [번역 대상] duty — 함수/속성 전체 문맥에서 남은 원문을 번역
  duty = '為すべきこと';
  // [번역 대상] duty_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  duty_desc = 'トレーニング成功率+5%';
};
