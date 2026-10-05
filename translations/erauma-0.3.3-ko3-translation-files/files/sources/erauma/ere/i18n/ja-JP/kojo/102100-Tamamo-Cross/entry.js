// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/102100-Tamamo-Cross/entry.js
// 대상 함수/속성: aim_desc_1, aim_desc_2, flash, flash_desc, lightning, lightning_desc, pilot, pilot_desc, report_tenn_spr, spartan, spartan_desc, thundercloud, thundercloud_desc, uma_first, uma_first_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102100-Tamamo-Cross/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/rec-21.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/daily-21.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/edu-21.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/love-21.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/ero-21.kojo');

  // [번역 대상] aim_desc_1 — 함수/속성 전체 문맥에서 남은 원문을 번역
  aim_desc_1 = 'クラシック級 3月まで OP以上のレース 1着';
  // [번역 대상] aim_desc_2 — 함수/속성 전체 문맥에서 남은 원문을 번역
  aim_desc_2 = 'シニア級まで G3以上のレース 1着';

  // [번역 대상] flash — 함수/속성 전체 문맥에서 남은 원문을 번역
  flash = '閃光';
  // [번역 대상] flash_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  flash_desc = '白い稲妻。すべてのレースに出走できる';

  // [번역 대상] lightning — 함수/속성 전체 문맥에서 남은 원문을 번역
  lightning = '雷撃';
  // [번역 대상] lightning_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  lightning_desc =
    '電流が衰える。トレーニング効果-20%、体力・気力上限-200、消費+10%、ストレス取得+10%';

  // [번역 대상] thundercloud — 함수/속성 전체 문맥에서 남은 원문을 번역
  thundercloud = '雷雲';
  // [번역 대상] thundercloud_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  thundercloud_desc = '山雨来たらんとす。いまはOP級のレースにしか出走できない';

  // [번역 대상] pilot — 함수/속성 전체 문맥에서 남은 원문을 번역
  pilot = '先導';
  // [번역 대상] pilot_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  pilot_desc = '雷光、成り始め。いまはOP〜G3級のレースにしか出走できない';

  // [번역 대상] spartan — 함수/속성 전체 문맥에서 남은 원문을 번역
  spartan = 'スパルタ';
  // [번역 대상] spartan_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  spartan_desc = 'トレーニング効果+20%、体力・気力消費+5%';

  // [번역 대상] uma_first — 함수/속성 전체 문맥에서 남은 원문을 번역
  uma_first = 'ウマ娘優先';
  // [번역 대상] uma_first_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  uma_first_desc = '毎ターン自動でやる気が上がる。体力・気力消費-10%';

  // [번역 대상] report_tenn_spr — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_tenn_spr = (tama) => [
    {
      color: tama.color,
      content: 'まさに白い稲妻が、場を照らした！誰がまだ、私を見くびれる！',
    },
    tama,
    {
      color: tama.color,
      content: '！',
    },
  ];
};
