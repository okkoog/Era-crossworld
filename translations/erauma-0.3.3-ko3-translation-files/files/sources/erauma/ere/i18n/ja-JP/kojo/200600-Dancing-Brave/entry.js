// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/200600-Dancing-Brave/entry.js
// 대상 함수/속성: get_rec_enable_notification
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200600-Dancing-Brave/entry')
) {
  // [번역 대상] get_rec_enable_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_rec_enable_notification(brave) {
    return [
      '【中央へ交流に来た ',
      { color: brave.color, content: '優秀なフランスの幼駒' },
      ' がいるらしい。トレーニング場で出会えるかもしれない】',
    ];
  }
};
