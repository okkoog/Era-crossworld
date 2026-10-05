// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/200500-Treve/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/rec-205.js'));
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/daily-205.js'));

  // [번역 완료] aim_desc
  aim_desc = '그 외 G1 5경기에서 1착';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(require("#/i18n/ko-KR/kojo/200500-Treve/edu-205.js"));

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/200500-Treve/ero-205.js"));

  // [번역 완료] get_rec_enable_notification
  get_rec_enable_notification(treve) {
    return [
      '【중앙에 교류하러 온 ',
      { color: treve.color, content: '프랑스의 뛰어난 어린 우마무스메' },
      '이(가) 있는 듯하다. 트레이닝장에서 만날 수 있을지도 모른다】',
    ];
  }

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(require("#/i18n/ko-KR/kojo/200500-Treve/love-205.js"));
};
