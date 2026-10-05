// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = {
  ...require("#/i18n/ja-JP/timon/child/ero"),

  // [번역 완료] estrus_for_slave
  async estrus_for_slave(child, callname) {
    await child.say_and_wait([
      '하아……하아…… 왜 이러지,',
      callname,
      '을(를) 보면 아래가 뜨겁고 괴로워…… 이제…… 못 참겠어!',
    ]);
  },
};
