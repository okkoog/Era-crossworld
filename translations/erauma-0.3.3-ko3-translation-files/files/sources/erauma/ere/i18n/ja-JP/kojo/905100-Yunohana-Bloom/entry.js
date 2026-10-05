// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/905100-Yunohana-Bloom/entry.js
// 대상 함수/속성: buff, buff_desc, npc_func
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/905100-Yunohana-Bloom/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/905100-Yunohana-Bloom/daily-351.kojo');

  // [번역 대상] npc_func — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_func = '秘湯療養';

  // [번역 대상] buff — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff = '療養は奇跡を生む';
  // [번역 대상] buff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff_desc = (buff) =>
    buff
      ? 'より十分なやる気で秘湯を整え、最大連続利用回数+1、効力の回復速度とストレス解消を上げ、療養後に受けた者のトレーニング補正を上げる。'
      : '十分なやる気で秘湯を整え、最大連続利用回数+1、効力の回復速度とストレス解消を上げる。';
};
