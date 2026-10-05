// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/904300-Satake-Mei/entry.js
// 대상 함수/속성: dream_chaser, dream_chaser_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904300-Satake-Mei/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/904300-Satake-Mei/rec-343.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/904300-Satake-Mei/love-343.kojo');

  // [번역 대상] dream_chaser — 함수/속성 전체 문맥에서 남은 원문을 번역
  dream_chaser = '夢を追う者';
  // [번역 대상] dream_chaser_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  dream_chaser_desc = (buff) =>
    buff
      ? 'チームメンバーの海外遠征の悪影響が半減する。'
      : 'チームメンバーの海外遠征の悪影響が軽くなる。';
};
