// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/200500-Treve/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/rec-205.js'));
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/daily-205.js'));

  // [번역 대상] aim_desc
  aim_desc = 'その他のG1を5鞍 1着';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(require("#/i18n/ko-KR/kojo/200500-Treve/edu-205.js"));

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/200500-Treve/ero-205.js"));

  // [번역 대상] get_rec_enable_notification
  get_rec_enable_notification(treve) {
    return [
      '【中央へ交流に来た ',
      { color: treve.color, content: '優秀なフランスの幼駒' },
      ' がいるらしい。トレーニング場で出会えるかもしれない】',
    ];
  }

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(require("#/i18n/ko-KR/kojo/200500-Treve/love-205.js"));
};
