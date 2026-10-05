// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/107100-Mejiro-Ardan/entry.js
// 대상 함수/속성: achieve_track_aim_template_1, achieve_track_aim_template_2, sick, sick_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/107100-Mejiro-Ardan/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/rec-71.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/daily-71.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/edu-71.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/love-71.kojo');

  // [번역 대상] achieve_track_aim_template_1 — 함수/속성 전체 문맥에서 남은 원문을 번역
  achieve_track_aim_template_1 = 'トレーニング失敗回数：%COUNT%';
  // [번역 대상] achieve_track_aim_template_2 — 함수/속성 전체 문맥에서 남은 원문을 번역
  achieve_track_aim_template_2 = '絶好調以外で完走した回数：%COUNT%';

  // [번역 대상] sick — 함수/속성 전체 문맥에서 남은 원문을 번역
  sick = '病気';
  // [번역 대상] sick_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  sick_desc = 'トレーニングと出走ができない';
};
