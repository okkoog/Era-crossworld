// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/entry') {
  recruit = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/rec-21.kojo');
  // 한국어 작업 모듈 연결: daily
  daily = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/daily-21.kojo');
  // 한국어 작업 모듈 연결: ero
  ero = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/ero-21.kojo');
  // 한국어 작업 모듈 연결: love
  love = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/love-21.kojo');

  // [번역 대상] aim_desc_1
  aim_desc_1 = 'クラシック級 3月まで OP以上のレース 1着';

  // [번역 대상] aim_desc_2
  aim_desc_2 = 'シニア級まで G3以上のレース 1着';

  // 한국어 작업 모듈 연결: edu
  edu = ({ ...require("#/i18n/ja-JP/kojo/102100-Tamamo-Cross/edu-21.kojo"), ...require("#/i18n/ko-KR/kojo/102100-Tamamo-Cross/edu-21.kojo") });

  // [번역 대상] flash
  flash = '閃光';

  // [번역 대상] flash_desc
  flash_desc = '白い稲妻。すべてのレースに出走できる';

  // [번역 대상] lightning
  lightning = '雷撃';

  // [번역 대상] lightning_desc
  lightning_desc =
    '電流が衰える。トレーニング効果-20%、体力・気力上限-200、消費+10%、ストレス取得+10%';

  // [번역 대상] pilot
  pilot = '先導';

  // [번역 대상] pilot_desc
  pilot_desc = '雷光、成り始め。いまはOP〜G3級のレースにしか出走できない';

  // [번역 대상] report_tenn_spr
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

  // [번역 대상] spartan
  spartan = 'スパルタ';

  // [번역 대상] spartan_desc
  spartan_desc = 'トレーニング効果+20%、体力・気力消費+5%';

  // [번역 대상] thundercloud
  thundercloud = '雷雲';

  // [번역 대상] thundercloud_desc
  thundercloud_desc = '山雨来たらんとす。いまはOP級のレースにしか出走できない';

  // [번역 대상] uma_first
  uma_first = 'ウマ娘優先';

  // [번역 대상] uma_first_desc
  uma_first_desc = '毎ターン自動でやる気が上がる。体力・気力消費-10%';
};
