// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/200700-Sonon-Elfie/entry") {

  // [번역 대상] uaf_star
  uaf_star = 'U.A.F.の星';

  // [번역 대상] uaf_star_desc
  uaf_star_desc = (buff, you) =>
    buff
      ? `チームメンバーの減量速度が上がる。${you} の体力・気力上限+200。`
      : 'チームメンバーの減量速度が上がる。';
};
