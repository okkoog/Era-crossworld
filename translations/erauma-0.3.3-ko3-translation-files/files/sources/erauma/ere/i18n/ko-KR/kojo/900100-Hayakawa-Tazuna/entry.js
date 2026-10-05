// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/900100-Hayakawa-Tazuna/entry") {

  // [번역 대상] assist
  assist = '専属アシスタント';

  // [번역 대상] assist_desc
  assist_desc = (buff, you) =>
    `自身の体力・気力消費+${buff}%。${you} の体力・気力消費-${buff}%。`;

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/900100-Hayakawa-Tazuna/daily-301.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/900100-Hayakawa-Tazuna/love-301.kojo");
};
