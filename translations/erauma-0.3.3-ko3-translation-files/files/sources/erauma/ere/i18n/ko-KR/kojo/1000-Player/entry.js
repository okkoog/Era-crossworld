// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/1000-Player/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/1000-Player/daily-0.js'));

  // [번역 대상] akuochi
  akuochi = '悪堕';

  // [번역 대상] akuochi_desc
  akuochi_desc = '楽しめばいい。';

  // [번역 대상] b_l_stamina
  b_l_stamina = '疲労困憊';

  // [번역 대상] b_l_stamina_desc
  b_l_stamina_desc = 'もう動けない。気力消費が大きく上がる！';

  // [번역 대상] b_l_time
  b_l_time = '眠気';

  // [번역 대상] b_l_time_desc
  b_l_time_desc = '頭がぼんやりして、いつ倒れてもおかしくない！';

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(require("#/i18n/ko-KR/kojo/1000-Player/ero-0"));

  // [번역 대상] pn_1
  pn_1 = 'レース用の牝馬';

  // [번역 대상] pn_1_desc
  pn_1_desc =
    '現役ウマ娘だが、シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。';

  // [번역 대상] pn_2_desc
  pn_2_desc =
    '現役の性奴。シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。性奉仕で名声を得る。';

  // [번역 대상] pn_3_desc
  pn_3_desc =
    '現役の孕袋。シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。ウマ娘との性交・出産で名声を得て、子の出走名声報酬+100%。';

  // [번역 대상] rape
  rape = '悪行容易';

  // [번역 대상] rape_desc
  rape_desc = '「Dirty Deeds Done Dirt Cheap……」犯せ、蹂躙しろ、征服しろ！';
};
