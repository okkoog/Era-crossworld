// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/904800-Haiseiko/entry") {

  // [번역 대상] buff
  buff = 'レース場のアイドル';

  // [번역 대상] buff_desc
  buff_desc = (buff) =>
    buff
      ? '絶好調のチームメンバーのトレーニング成功率と効果が上がる。'
      : '絶好調のチームメンバーのトレーニング成功率と効果が少し上がる。';

  // [번역 대상] get_achieve_track_aim
  get_achieve_track_aim = (honour) => ['G1勝利で名声を得る：', honour];

  // [번역 대상] get_visit_notification
  get_visit_notification(haiseiko, you) {
    return [
      '【伝説の',
      { color: haiseiko.color, content: haiseiko.uma_sex_title },
      ' が ',
      you.get_colored_name(),
      ' の事績に興味を持っているらしい。応接室で会えるかもしれない】',
    ];
  }
};
