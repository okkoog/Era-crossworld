// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/104400-Sweep-Tosho/entry") {

  // [번역 대상] agreement
  agreement = '大魔法使いの約束';

  // [번역 대상] agreement_desc
  agreement_desc =
    'どうやら大事な約束らしい。約束を守るため、やる気が上がっている。';

  // [번역 대상] cuckold
  cuckold = '「魔法癖」';

  // [번역 대상] cuckold_desc
  cuckold_desc = '「なんで、なんで魔法癖って呼んじゃいけないの！」';

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/daily-44.kojo");

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/edu-44.kojo");

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/ero-44.kojo");

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/love-44.kojo");

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/104400-Sweep-Tosho/rec-44.kojo");

  // [번역 대상] report_eliz_cup_s
  report_eliz_cup_s = (sweep) => [
    sweep,
    '！',
    sweep,
    'です！',
    '実力者たちを打ち破り、優勝！ 本当に強い！',
    'この衝撃、もしかして本当に『魔法』！？',
  ];

  // [번역 대상] report_takz_kin_s
  report_takz_kin_s = (sweep) => [
    sweep,
    '、',
    sweep,
    'ですか？！！！',
    '強豪たちの壁を越えて、',
    sweep,
    ' が宝塚記念を制しました！',
    'この衝撃的な勝利こそ、『奇跡』の証明です！！',
  ];
};
