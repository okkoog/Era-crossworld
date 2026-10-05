// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/904400-Tsurugi-Ryoka/entry.js
// 대상 함수/속성: photographer, photographer_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904400-Tsurugi-Ryoka/entry')
) {
  // [번역 대상] photographer — 함수/속성 전체 문맥에서 남은 원문을 번역
  photographer = '光を追う者';
  // [번역 대상] photographer_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  photographer_desc = (buff) =>
    buff
      ? 'チームメンバーの気力消費によるストレス解消が効きやすく、ストレス取得-20%。'
      : 'チームメンバーの気力消費によるストレス解消が効きやすい。';
};
