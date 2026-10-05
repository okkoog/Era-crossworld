// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/106100-King-Halo/entry.js
// 대상 함수/속성: gu_mild, gu_mild_desc, gu_moderate, gu_moderate_desc, gu_serve, gu_serve_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106100-King-Halo/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/106100-King-Halo/rec-61.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/106100-King-Halo/daily-61.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/106100-King-Halo/edu-61.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/106100-King-Halo/love-61.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/106100-King-Halo/ero-61.kojo');

  // [번역 대상] gu_mild — 함수/속성 전체 문맥에서 남은 원문을 번역
  gu_mild = '自暴自棄・軽';
  // [번역 대상] gu_mild_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  gu_mild_desc =
    '私は、一流の何なの……やる気上限が2段階下がる。\n短距離・マイルで勝つと消える。負けると重くなる。三年の終わりに、まだこの状態なら……';

  // [번역 대상] gu_moderate — 함수/속성 전체 문맥에서 남은 원문을 번역
  gu_moderate = '自暴自棄・中';
  // [번역 대상] gu_moderate_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  gu_moderate_desc =
    'もう、何も残っていない……やる気上限が3段階下がる。\n短距離・マイルで勝つと軽くなる。負けると重くなる。三年の終わりに、まだこの状態なら……';

  // [번역 대상] gu_serve — 함수/속성 전체 문맥에서 남은 원문을 번역
  gu_serve = '自暴自棄・重';
  // [번역 대상] gu_serve_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  gu_serve_desc =
    'お願い、もう終わらせて！やる気上限が4段階下がる。\n短距離・マイルで勝つと軽くなる。負けたら……三年の終わりに、まだこの状態なら……';
};
