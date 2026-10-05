// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/905100-Yunohana-Bloom/entry") {

  // [번역 완료] buff
  buff = '요양은 기적을 낳는다';

  // [번역 완료] buff_desc
  buff_desc = (buff) =>
    buff
      ? '더 충분한 의욕으로 비탕을 정비해 최대 연속 이용 횟수+1, 효력 회복 속도와 스트레스 해소 효과를 높이고, 요양을 받은 뒤 대상의 트레이닝 보정을 높인다.'
      : '충분한 의욕으로 비탕을 정비해 최대 연속 이용 횟수+1, 효력 회복 속도와 스트레스 해소 효과를 높인다.';

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/905100-Yunohana-Bloom/daily-351.kojo");

  // [번역 완료] npc_func
  npc_func = '비탕 요양';
};
