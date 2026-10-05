// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/904700-Speed-Symboli/entry.js
// 대상 함수/속성: buff, buff_desc, get_visit_notification
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904700-Speed-Symboli/entry')
) {
  // [번역 대상] buff — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff = '遠征の先駆';
  // [번역 대상] buff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff_desc = (buff) =>
    buff
      ? '絶好調のチームメンバーのトレーニング成功率と効果が上がる。'
      : '絶好調のチームメンバーのトレーニング成功率と効果が少し上がる。';

  /**
   * @param {CharaTalk} speed
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  // [번역 대상] get_visit_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_visit_notification(speed, you) {
    return [
      '【伝説の',
      { color: speed.color, content: speed.uma_sex_title },
      ' が ',
      you.get_colored_name(),
      ' の事績に興味を持っているらしい。応接室で会えるかもしれない】',
    ];
  }
};
