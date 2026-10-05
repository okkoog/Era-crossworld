// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/200700-Sonon-Elfie/entry.js
// 대상 함수/속성: uaf_star, uaf_star_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200700-Sonon-Elfie/entry')
) {
  // [번역 대상] uaf_star — 함수/속성 전체 문맥에서 남은 원문을 번역
  uaf_star = 'U.A.F.の星';
  // [번역 대상] uaf_star_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  uaf_star_desc = (buff, you) =>
    buff
      ? `チームメンバーの減量速度が上がる。${you} の体力・気力上限+200。`
      : 'チームメンバーの減量速度が上がる。';
};
