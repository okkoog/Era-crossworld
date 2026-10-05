// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/200400-Montjeu/entry") {

  // [번역 완료] get_visit_notification
  get_visit_notification(montjeu) {
    return [
      '【중앙에 교류하러 온 ',
      {
        color: montjeu.color,
        content: `프랑스의 전설적인${montjeu.uma_sex_title}`,
      },
      '이(가) 있는 듯하다. 응접실에서 만날 수 있을지도 모른다】',
    ];
  }
};
