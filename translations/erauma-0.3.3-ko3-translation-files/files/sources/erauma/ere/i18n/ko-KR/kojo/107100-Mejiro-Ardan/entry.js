// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/daily-71.kojo');
  // 한국어 작업 모듈 연결: edu
  edu = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/edu-71.kojo');
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/rec-71.kojo');

  // [번역 대상] achieve_track_aim_template_1
  achieve_track_aim_template_1 = 'トレーニング失敗回数：%COUNT%';

  // [번역 대상] achieve_track_aim_template_2
  achieve_track_aim_template_2 = '絶好調以外で完走した回数：%COUNT%';

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/love-71.kojo");

  // [번역 대상] sick
  sick = '病気';

  // [번역 대상] sick_desc
  sick_desc = 'トレーニングと出走ができない';
};
