// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/101900-Agnes-Digital/entry.js
// 대상 함수/속성: aim_desc
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101900-Agnes-Digital/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/rec-19.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/daily-19.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/edu-19.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/love-19.js'),
  );

  // シニア級1〜6月のG1で3着以内を3回
  // [번역 대상] aim_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  aim_desc = 'シニア級1〜6月のG1で3着以内';
};
