// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/102000-Seiun-Sky/entry") {

  // 한국어 작업 모듈 연결: daily
  daily = ({ ...require("#/i18n/ja-JP/kojo/102000-Seiun-Sky/daily-20.kojo"), ...require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/daily-20.kojo") });

  // [번역 대상] easy_go
  easy_go = (c) => `自由気まま${c > 1 ? `(${c})` : ''}`;

  // [번역 대상] easy_go_desc
  easy_go_desc = (c) =>
    `体力・気力消費-${5 * c}%（1層につき-5%）、トレーニング効果-${5 * c}%（1層につき-5%）。最大10層。トレーニング／勉強以外の行動で1層減り、小休憩と釣りでは2層減る。`;

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/edu-20.kojo");

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/ero-20.kojo");

  // [번역 대상] jess
  jess = '見えない枷';

  // [번역 대상] jess_desc
  jess_desc = 'トレーニング効果+100%、体力・気力消費+100%。サボらない。';

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/love-20.kojo");

  // [번역 대상] radiant
  radiant = (c) => `艶やか${c > 1 ? `(${c})` : ''}`;

  // [번역 대상] radiant_desc
  radiant_desc = (c) =>
    `体力・気力上限+${50 * c}（1層につき+50）、トレーニングで得るスキルPt+${c}（1層につき+1）。最大10層。毎週2層減る。`;

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/rec-20.kojo");

  // [번역 대상] soft_be
  soft_be = '永遠の自由';

  // [번역 대상] soft_be_desc
  soft_be_desc = 'もう頑張らなくていい。トレーニングも出走もできない。';
};
