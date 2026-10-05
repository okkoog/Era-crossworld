// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/timon/child/ero.js
// 대상 함수/속성: estrus_for_slave
/**
 * @file 調教の地の文 - 子供
 * @author 雞雞
 * @author 黑奴队长
 */
module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   */
  // [번역 대상] estrus_for_slave — 함수/속성 전체 문맥에서 남은 원문을 번역
  async estrus_for_slave(child, callname) {
    await child.say_and_wait([
      'はぁ……はぁ……どうしてだろう、',
      callname,
      'を見ると、下が熱くて苦しい……もう……我慢できない！',
    ]);
  },
};
