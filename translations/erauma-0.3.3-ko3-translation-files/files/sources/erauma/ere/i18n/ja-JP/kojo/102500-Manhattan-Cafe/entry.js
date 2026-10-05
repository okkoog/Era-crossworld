// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/102500-Manhattan-Cafe/entry.js
// 대상 함수/속성: report_arim_kin
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102500-Manhattan-Cafe/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/rec-25.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/daily-25.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/edu-25.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/love-25.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/ero-25.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/base-25.js'),
  );

  // [번역 대상] report_arim_kin — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_arim_kin = (cafe) => [
    '勝ったのは ',
    cafe,
    '！世代交代は、ここで証明された！',
  ];
};
