// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const proxy_kojo_js = require('#/i18n/tools')["proxy_kojo_js"];
module.exports = class extends require("#/i18n/ja-JP/kojo/100900-Daiwa-Scarlet/entry") {

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/100900-Daiwa-Scarlet/ero-9.js"),
  );
};
