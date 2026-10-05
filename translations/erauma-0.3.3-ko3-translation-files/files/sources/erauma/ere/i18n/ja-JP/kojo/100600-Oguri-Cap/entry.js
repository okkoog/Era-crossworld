// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/100600-Oguri-Cap/entry.js
// 대상 함수/속성: aim_desc, cinderella, cinderella_desc, latecomer, latecomer_desc, palace_race, report_arim_kin, transfer, transfer_desc
const I18nKojo100600 = require('#/i18n/zh-CN/kojo/100600-Oguri-Cap/entry');

module.exports = class extends I18nKojo100600 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/rec-6.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/daily-6.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/edu-6.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/love-6.kojo');

  // [번역 대상] aim_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  aim_desc = '1〜6月のG1で3着以内';

  // [번역 대상] cinderella — 함수/속성 전체 문맥에서 남은 원문을 번역
  cinderella = 'シンデレラ';
  // [번역 대상] cinderella_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  cinderella_desc =
    'ターン開始時、ストレスがうつ以下まで自動で下がり、やる気が不調以上まで自動で上がる。';
  // [번역 대상] latecomer — 함수/속성 전체 문맥에서 남은 원문을 번역
  latecomer = '遅れてきた者';
  // [번역 대상] latecomer_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  latecomer_desc =
    '育成はクラシック級から始まり、クラシック三冠（皐月賞、日本ダービー、菊花賞）には出走できない。';
  // [번역 대상] transfer — 함수/속성 전체 문맥에서 남은 원문을 번역
  transfer = (timer) => `転入生 (${timer})`;
  // [번역 대상] transfer_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  transfer_desc = (timer) => `${timer} ターンの間、トレーニング効果+100%。`;

  // [번역 대상] report_arim_kin — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      {
        color: oguri.color,
        content: ' 一着！右手を高く掲げた勝者、スーパーウマ娘 ',
      },
      oguri,
      { color: oguri.color, content: '！' },
    ];
  }

  // [번역 대상] palace_race — 함수/속성 전체 문맥에서 남은 원문을 번역
  palace_race = '擬・日本ダービー';
};
