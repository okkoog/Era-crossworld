// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/102000-Seiun-Sky/entry") {

  // 한국어 작업 모듈 연결: daily
  daily = ({ ...require("#/i18n/ja-JP/kojo/102000-Seiun-Sky/daily-20.kojo"), ...require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/daily-20.kojo") });

  // [번역 완료] easy_go
  easy_go = (c) => `자유분방${c > 1 ? `(${c})` : ''}`;

  // [번역 완료] easy_go_desc
  easy_go_desc = (c) =>
    `체력·기력 소비-${5 * c}%(1중첩당 -5%), 트레이닝 효과-${5 * c}%(1중첩당 -5%). 최대 10중첩. 트레이닝/공부 이외의 행동으로 1중첩 감소하고, 짧은 휴식과 낚시에서는 2중첩 감소한다.`;

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/edu-20.kojo");

  // 한국어 작업 모듈 연결: ero
  ero = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/ero-20.kojo");

  // [번역 완료] jess
  jess = '보이지 않는 족쇄';

  // [번역 완료] jess_desc
  jess_desc = '트레이닝 효과+100%, 체력·기력 소비+100%. 농땡이치지 않는다.';

  // 한국어 작업 모듈 연결: love
  love = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/love-20.kojo");

  // [번역 완료] radiant
  radiant = (c) => `윤택함${c > 1 ? `(${c})` : ''}`;

  // [번역 완료] radiant_desc
  radiant_desc = (c) =>
    `체력·기력 상한+${50 * c}(1중첩당 +50), 트레이닝으로 얻는 스킬 Pt+${c}(1중첩당 +1). 최대 10중첩. 매주 2중첩 감소한다.`;

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/102000-Seiun-Sky/rec-20.kojo");

  // [번역 완료] soft_be
  soft_be = '영원한 자유';

  // [번역 완료] soft_be_desc
  soft_be_desc = '이제 더 노력하지 않아도 된다. 트레이닝도 출주도 할 수 없다.';
};
