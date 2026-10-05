// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = {
  ...require("#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/ero-25"),

  // [번역 대상] ero_start
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
