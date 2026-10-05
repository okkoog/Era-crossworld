// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/105600-Matikanefukukitaru/entry.js
// 대상 함수/속성: achieve_track_aim_template, antei, antei_desc, chuukichi, chuukichi_desc, daikichi, daikichi_desc, dependency, dependency_desc, kyou, kyou_desc, ptsd_desc, shoukichi, shoukichi_desc
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/rec-56.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/daily-56.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/edu-56.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/love-56.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/ero-56.js'),
  );

  // [번역 대상] dependency — 함수/속성 전체 문맥에서 남은 원문을 번역
  dependency = '運勢依存';
  // [번역 대상] dependency_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  dependency_desc = '今日の運勢は、なんだろう？';

  // [번역 대상] daikichi — 함수/속성 전체 문맥에서 남은 원문을 번역
  daikichi = '大吉';
  // [번역 대상] daikichi_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  daikichi_desc =
    '霊力が満ちている！トレーニング成功率+10%、全トレーニング効果+5%、好感取得+10%、出走時の能力+5%';

  // [번역 대상] chuukichi — 함수/속성 전체 문맥에서 남은 원문을 번역
  chuukichi = '中吉';
  // [번역 대상] chuukichi_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  chuukichi_desc =
    'いい運勢だ！トレーニング成功率+5%、全トレーニング効果+5%、出走時の能力+3%';

  // [번역 대상] shoukichi — 함수/속성 전체 문맥에서 남은 원문을 번역
  shoukichi = '小吉';
  // [번역 대상] shoukichi_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  shoukichi_desc = '悪くはない！トレーニング成功率+5%、出走時の能力+1%';

  // [번역 대상] kyou — 함수/속성 전체 문맥에서 남은 원문을 번역
  kyou = '凶';
  // [번역 대상] kyou_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  kyou_desc =
    'こんなときは、フクキタルを慰めてあげたら？トレーニング成功率-10%、全トレーニング効果-10%、出走時の能力-10%、好感取得+20%';

  ptsd = 'PTSD';
  // [번역 대상] ptsd_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  ptsd_desc =
    '向き合わざるを得ない影。トレーニング成功率-10%、全トレーニング効果-10%、出走時の能力-10%、やる気上限-3';

  // [번역 대상] antei — 함수/속성 전체 문맥에서 남은 원문을 번역
  antei = '安定';
  // [번역 대상] antei_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  antei_desc =
    'トレーナーがそばにいれば、間違いなく大吉！トレーニング成功率+10%、全トレーニング効果+5%、好感取得+10%、出走時の能力+5%';

  // [번역 대상] achieve_track_aim_template — 함수/속성 전체 문맥에서 남은 원문을 번역
  achieve_track_aim_template = '絶好調で出走した G2以上のレース数：%COUNT%';
};
