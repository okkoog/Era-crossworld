// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/904900-Tucker-Bryne/entry.js
// 대상 함수/속성: buff, buff_desc, npc_func
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904900-Tucker-Bryne/entry')
) {
  // [번역 대상] buff — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff = '投資顧問';
  // [번역 대상] buff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff_desc = (buff) =>
    buff
      ? '預けた資金で投資し、毎週かなりの収益を得る。'
      : '預けた資金で投資し、毎週一定の収益を得る。';

  // [번역 대상] npc_func — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_func = '投資・運用';
};
