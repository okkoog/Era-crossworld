// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/daily-37.js'));
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/rec-37.js'));

  // [번역 완료] derby
  derby = '영광의 더비';

  // [번역 완료] derby_desc
  derby_desc = '출주 시 능력+50%.';

  // [번역 완료] distracted
  distracted = '산만함';

  // [번역 완료] distracted_desc
  distracted_desc = '트레이닝 성공률-5%';

  // [번역 완료] duty
  duty = '해야 할 일';

  // [번역 완료] duty_desc
  duty_desc = '트레이닝 성공률+5%';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103700-Eishin-Flash/edu-37.js"),
  );

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/103700-Eishin-Flash/love-37.js"),
  );

  // [번역 완료] notify_black_treasure
  notify_black_treasure = (flash) => [
    flash.get_colored_name(),
    '은(는) 이곳이 신경 쓰이는 모양이다…… 다음에 혼자 외출하다 만나면 물어보자',
  ];

  // [번역 완료] weak
  weak = '허약';

  // [번역 완료] week_desc
  week_desc = '의욕 상한이 1단계 내려간다.';
};
