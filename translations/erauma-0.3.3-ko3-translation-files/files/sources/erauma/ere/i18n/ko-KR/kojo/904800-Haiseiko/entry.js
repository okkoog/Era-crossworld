// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/904800-Haiseiko/entry") {

  // [번역 완료] buff
  buff = '레이스장의 아이돌';

  // [번역 완료] buff_desc
  buff_desc = (buff) =>
    buff
      ? '절호조인 팀원의 트레이닝 성공률과 효과가 상승한다.'
      : '절호조인 팀원의 트레이닝 성공률과 효과가 조금 상승한다.';

  // [번역 완료] get_achieve_track_aim
  get_achieve_track_aim = (honour) => ['G1 승리로 명성 획득: ', honour];

  // [번역 완료] get_visit_notification
  get_visit_notification(haiseiko, you) {
    return [
      '【전설의 ',
      { color: haiseiko.color, content: haiseiko.uma_sex_title },
      '이(가) ',
      you.get_colored_name(),
      '의 업적에 관심을 가진 듯하다. 응접실에서 만날 수 있을지도 모른다】',
    ];
  }
};
