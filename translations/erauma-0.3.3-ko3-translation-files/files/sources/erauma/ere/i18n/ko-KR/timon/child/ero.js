// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = {
  ...require("#/i18n/ja-JP/timon/child/ero"),

  // [번역 대상] estrus_for_slave
  async estrus_for_slave(child, callname) {
    await child.say_and_wait([
      'はぁ……はぁ……どうしてだろう、',
      callname,
      'を見ると、下が熱くて苦しい……もう……我慢できない！',
    ]);
  },
};
