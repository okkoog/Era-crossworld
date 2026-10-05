// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900600-Kashimoto-Riko/entry.js
// 대상 함수/속성: buff, buff_desc, npc_talk_about_trainer, npc_talk_about_uma, select_talk_about
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/rec-306.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/daily-306.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/edu-306.kojo');

  // [번역 대상] buff — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff = '鉄面の代理';
  // [번역 대상] buff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  buff_desc = (buff) =>
    `トレーナー称号のトレーニング成功率・効果補正が1段階上がり、見守り時のトレーニング効果+${buff}%。`;

  // [번역 대상] select_talk_about — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_talk_about = '誰の話をする？';

  // [번역 대상] npc_talk_about_trainer — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_talk_about_trainer = 'トレーナーの仕事を聞く';
  // [번역 대상] npc_talk_about_uma — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_talk_about_uma = '担当たちの話';
};
