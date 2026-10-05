// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/904400-Tsurugi-Ryoka/entry") {

  // [번역 대상] photographer
  photographer = '光を追う者';

  // [번역 대상] photographer_desc
  photographer_desc = (buff) =>
    buff
      ? 'チームメンバーの気力消費によるストレス解消が効きやすく、ストレス取得-20%。'
      : 'チームメンバーの気力消費によるストレス解消が効きやすい。';
};
