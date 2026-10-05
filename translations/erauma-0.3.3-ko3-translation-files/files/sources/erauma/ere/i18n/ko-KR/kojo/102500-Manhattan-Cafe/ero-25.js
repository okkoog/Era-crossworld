// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = {
  ...require("#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/ero-25"),

  // [번역 완료] ero_start
  async ero_start(coffee, callname, c_call_t) {
    await coffee.say_and_wait([c_call_t, '、여기에 엎드려 주시겠어요……?']);
    await coffee.say_and_wait(
      '네, 그 자세예요. 엎드려 절한 자세 그대로, 엉덩이를 이쪽으로……',
    );
    await coffee.say_and_wait([
      '이제 ',
      callname,
      '에게 사랑받을 가치도 없으니까…… 무기물 받침대로서 거기에 있어 주세요……',
    ]);
  },
};
