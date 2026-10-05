// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/entry') {
  daily = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/daily-6.kojo');
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/rec-6.kojo');

  // [번역 대상] aim_desc
  aim_desc = '1〜6月のG1で3着以内';

  // [번역 대상] cinderella
  cinderella = 'シンデレラ';

  // [번역 대상] cinderella_desc
  cinderella_desc =
    'ターン開始時、ストレスがうつ以下まで自動で下がり、やる気が不調以上まで自動で上がる。';

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/100600-Oguri-Cap/edu-6.kojo");

  // [번역 대상] latecomer
  latecomer = '遅れてきた者';

  // [번역 대상] latecomer_desc
  latecomer_desc =
    '育成はクラシック級から始まり、クラシック三冠（皐月賞、日本ダービー、菊花賞）には出走できない。';

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/100600-Oguri-Cap/love-6.kojo");

  // [번역 대상] palace_race
  palace_race = '擬・日本ダービー';

  // [번역 대상] report_arim_kin
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

  // [번역 대상] transfer
  transfer = (timer) => `転入生 (${timer})`;

  // [번역 대상] transfer_desc
  transfer_desc = (timer) => `${timer} ターンの間、トレーニング効果+100%。`;
};
