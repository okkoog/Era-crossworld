// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/rec-306.kojo');

  // [번역 대상] buff
  buff = '鉄面の代理';

  // [번역 대상] buff_desc
  buff_desc = (buff) =>
    `トレーナー称号のトレーニング成功率・効果補正が1段階上がり、見守り時のトレーニング効果+${buff}%。`;

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/daily-306.kojo");

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/edu-306.kojo");

  // [번역 대상] npc_talk_about_trainer
  npc_talk_about_trainer = 'トレーナーの仕事を聞く';

  // [번역 대상] npc_talk_about_uma
  npc_talk_about_uma = '担当たちの話';

  // [번역 대상] select_talk_about
  select_talk_about = '誰の話をする？';
};
