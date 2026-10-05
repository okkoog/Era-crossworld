// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/1000-Player/entry.js
// 대상 함수/속성: akuochi, akuochi_desc, b_l_stamina, b_l_stamina_desc, b_l_time, b_l_time_desc, pn_1, pn_1_desc, pn_2_desc, pn_3_desc, rape, rape_desc
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/ja-JP/kojo/1000-Player/daily-0'));
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/1000-Player/edu-0'));
  ero = proxy_kojo_js(require('#/i18n/ja-JP/kojo/1000-Player/ero-0'));

  // [번역 대상] akuochi — 함수/속성 전체 문맥에서 남은 원문을 번역
  akuochi = '悪堕';
  // [번역 대상] akuochi_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  akuochi_desc = '楽しめばいい。';

  // [번역 대상] b_l_time — 함수/속성 전체 문맥에서 남은 원문을 번역
  b_l_time = '眠気';
  // [번역 대상] b_l_time_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  b_l_time_desc = '頭がぼんやりして、いつ倒れてもおかしくない！';

  // [번역 대상] b_l_stamina — 함수/속성 전체 문맥에서 남은 원문을 번역
  b_l_stamina = '疲労困憊';
  // [번역 대상] b_l_stamina_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  b_l_stamina_desc = 'もう動けない。気力消費が大きく上がる！';

  // [번역 대상] pn_1 — 함수/속성 전체 문맥에서 남은 원문을 번역
  pn_1 = 'レース用の牝馬';
  // [번역 대상] pn_1_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  pn_1_desc =
    '現役ウマ娘だが、シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。';
  // [번역 대상] pn_2_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  pn_2_desc =
    '現役の性奴。シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。性奉仕で名声を得る。';
  // [번역 대상] pn_3_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  pn_3_desc =
    '現役の孕袋。シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。ウマ娘との性交・出産で名声を得て、子の出走名声報酬+100%。';

  // [번역 대상] rape — 함수/속성 전체 문맥에서 남은 원문을 번역
  rape = '悪行容易';
  // [번역 대상] rape_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  rape_desc = '「Dirty Deeds Done Dirt Cheap……」犯せ、蹂躙しろ、征服しろ！';
};
