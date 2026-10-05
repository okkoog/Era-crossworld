// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/200600-Dancing-Brave/entry") {

  // [번역 대상] get_rec_enable_notification
  get_rec_enable_notification(brave) {
    return [
      '【中央へ交流に来た ',
      { color: brave.color, content: '優秀なフランスの幼駒' },
      ' がいるらしい。トレーニング場で出会えるかもしれない】',
    ];
  }
};
