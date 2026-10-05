// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends (
  require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/rec-306.kojo');

  // [번역 완료] buff
  buff = '철면의 대리';

  // [번역 완료] buff_desc
  buff_desc = (buff) =>
    `트레이너 칭호의 트레이닝 성공률·효과 보정이 1단계 올라가고, 지켜보기 시 트레이닝 효과+${buff}%。`;

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/daily-306.kojo");

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/edu-306.kojo");

  // [번역 완료] npc_talk_about_trainer
  npc_talk_about_trainer = '트레이너의 일에 대해 묻는다';

  // [번역 완료] npc_talk_about_uma
  npc_talk_about_uma = '담당들 이야기';

  // [번역 완료] select_talk_about
  select_talk_about = '누구 이야기를 할까?';
};
