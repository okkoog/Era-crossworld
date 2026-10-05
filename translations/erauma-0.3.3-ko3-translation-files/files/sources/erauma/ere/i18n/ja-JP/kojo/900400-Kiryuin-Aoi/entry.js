// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/entry.js
// 대상 함수/속성: buff, buff_desc, npc_talk_about_meek, npc_talk_about_trainer
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900400-Kiryuin-Aoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/rec-304.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/daily-304.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/edu-304.kojo');

  // [번역 대상] buff — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff = 'トレーナー名門';
  // [번역 대상] buff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff_desc = (buff) =>
    `トレーナー称号のトレーニング成功率・効果補正が1段階上がり、見守り時のトレーニング効果+${buff}%。`;

  // [번역 대상] npc_talk_about_trainer — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_talk_about_trainer = 'トレーナーの仕事の話';
  // [번역 대상] npc_talk_about_meek — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_talk_about_meek = 'ハッピーミークの話';
};
