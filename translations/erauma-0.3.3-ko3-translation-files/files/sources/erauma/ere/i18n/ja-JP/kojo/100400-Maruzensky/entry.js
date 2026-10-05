// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/100400-Maruzensky/entry.js
// 대상 함수/속성: mygo
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100400-Maruzensky/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100400-Maruzensky/rec-4.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100400-Maruzensky/daily-4.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/100400-Maruzensky/edu-4.js'));
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100400-Maruzensky/love-4.js'),
  );

  // [번역 대상] mygo — 함수/속성 전체 문맥에서 남은 원문을 번역
  mygo = '迷い';
};
