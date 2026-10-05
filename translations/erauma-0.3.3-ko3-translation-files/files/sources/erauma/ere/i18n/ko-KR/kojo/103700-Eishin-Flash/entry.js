// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/daily-37.js'));
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/rec-37.js'));

  // [번역 대상] derby
  derby = '栄光のダービー';

  // [번역 대상] derby_desc
  derby_desc = '出走時の能力+50%。';

  // [번역 대상] distracted
  distracted = '散漫';

  // [번역 대상] distracted_desc
  distracted_desc = 'トレーニング成功率-5%';

  // [번역 대상] duty
  duty = '為すべきこと';

  // [번역 대상] duty_desc
  duty_desc = 'トレーニング成功率+5%';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103700-Eishin-Flash/edu-37.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103700-Eishin-Flash/love-37.js"),
  );

  // [번역 대상] notify_black_treasure
  notify_black_treasure = (flash) => [
    flash.get_colored_name(),
    ' は、ここのことが気になっているらしい……次にひとりで出かけて出会ったとき、聞いてみよう',
  ];

  // [번역 대상] weak
  weak = '虚弱';

  // [번역 대상] week_desc
  week_desc = 'やる気上限が1段階下がる。';
};
