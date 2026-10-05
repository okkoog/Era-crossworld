// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/104400-Sweep-Tosho/entry.js
// 대상 함수/속성: agreement, agreement_desc, cuckold, cuckold_desc, report_eliz_cup_s, report_takz_kin_s
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/104400-Sweep-Tosho/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/rec-44.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/daily-44.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/edu-44.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/love-44.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/ero-44.kojo');

  // [번역 대상] agreement — 함수/속성 전체 문맥에서 남은 원문을 번역
  agreement = '大魔法使いの約束';
  // [번역 대상] agreement_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  agreement_desc =
    'どうやら大事な約束らしい。約束を守るため、やる気が上がっている。';

  // [번역 대상] cuckold — 함수/속성 전체 문맥에서 남은 원문을 번역
  cuckold = '「魔法癖」';
  // [번역 대상] cuckold_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  cuckold_desc = '「なんで、なんで魔法癖って呼んじゃいけないの！」';

  // [번역 대상] report_takz_kin_s — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] report_eliz_cup_s — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_eliz_cup_s = (sweep) => [
    sweep,
    '！',
    sweep,
    'です！',
    '実力者たちを打ち破り、優勝！ 本当に強い！',
    'この衝撃、もしかして本当に『魔法』！？',
  ];
};
