// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/102500-Manhattan-Cafe/ero-25.js
// 대상 함수/속성: ero_start
/**
 * @file マンハッタンカフェ - 調教
 * @author Necroz
 * @author Claude (翻訳)
 */
module.exports = {
  /**
   * @param coffee
   * @param callname
   * @param c_call_t
   */
  // [번역 대상] ero_start — 함수/속성 전체 문맥에서 남은 원문을 번역
  async ero_start(coffee, callname, c_call_t) {
    await coffee.say_and_wait([c_call_t, '、ここに伏せてもらえますか……？']);
    await coffee.say_and_wait(
      'ええ、その姿勢です。土下座のまま、お尻をこちらへ……',
    );
    await coffee.say_and_wait([
      'もう ',
      callname,
      ' に愛される価値もないのですから……無機物の台として、そこにいてください……',
    ]);
  },
};
