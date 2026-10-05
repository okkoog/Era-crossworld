// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/entry") {

  // [번역 완료] chairman
  chairman = '내가 상사랍니다';

  // [번역 완료] chairman_desc
  chairman_desc = '이사장의 권한은 무한. 학원 지명 우마무스메 모집의 명성 소비-25%.';

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/daily-302.kojo");

  // [번역 완료] get_npc_celebration
  get_npc_celebration = (celebration) =>
    `「축 하! ${celebration}, 축하해요!」`;

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/love-302.kojo");

  // [번역 완료] npc_bye
  npc_bye = '「재 회! 다녀오겠어요!」';

  // [번역 완료] npc_func
  npc_func = '「항 의! 트레이닝하고 싶은 애마가 없어요!」';

  // [번역 완료] npc_out
  npc_out = '「외 출! 함께 걸어요!」';

  // [번역 완료] npc_sex
  npc_sex = '「정 사! 내가 범해드리겠어요!」';

  // [번역 완료] npc_talk
  npc_talk = '「잡 담! 한가하면 놀러 오세요!」';

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/rec-302.kojo");
};
