// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/200400-Montjeu/entry") {

  // [번역 대상] get_visit_notification
  get_visit_notification(montjeu) {
    return [
      '【中央へ交流に来る ',
      {
        color: montjeu.color,
        content: `フランスの伝説的な${montjeu.uma_sex_title}`,
      },
      ' がいるらしい。応接室で出会えるかもしれない】',
    ];
  }
};
