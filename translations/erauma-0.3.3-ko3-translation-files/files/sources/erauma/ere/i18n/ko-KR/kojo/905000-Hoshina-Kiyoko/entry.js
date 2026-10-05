// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/905000-Hoshina-Kiyoko/entry") {

  // [번역 대상] buff
  buff = '療養は奇跡を生む';

  // [번역 대상] buff_desc
  buff_desc = (buff) =>
    buff
      ? 'より十分なやる気で秘湯を整え、最大連続利用回数+1、効力の回復速度とストレス解消を上げ、療養後に受けた者のトレーニング補正を上げる。'
      : '十分なやる気で秘湯を整え、最大連続利用回数+1、効力の回復速度とストレス解消を上げる。';

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/905000-Hoshina-Kiyoko/daily-350.kojo");

  // [번역 대상] npc_func
  npc_func = '秘湯療養';
};
