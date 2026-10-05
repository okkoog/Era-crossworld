// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/rec-56.js'));

  // [번역 대상] achieve_track_aim_template
  achieve_track_aim_template = '絶好調で出走した G2以上のレース数：%COUNT%';

  // [번역 대상] antei
  antei = '安定';

  // [번역 대상] antei_desc
  antei_desc =
    'トレーナーがそばにいれば、間違いなく大吉！トレーニング成功率+10%、全トレーニング効果+5%、好感取得+10%、出走時の能力+5%';

  // [번역 대상] chuukichi
  chuukichi = '中吉';

  // [번역 대상] chuukichi_desc
  chuukichi_desc =
    'いい運勢だ！トレーニング成功率+5%、全トレーニング効果+5%、出走時の能力+3%';

  // [번역 대상] daikichi
  daikichi = '大吉';

  // [번역 대상] daikichi_desc
  daikichi_desc =
    '霊力が満ちている！トレーニング成功率+10%、全トレーニング効果+5%、好感取得+10%、出走時の能力+5%';

  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/daily-56.js"),
  );

  // [번역 대상] dependency
  dependency = '運勢依存';

  // [번역 대상] dependency_desc
  dependency_desc = '今日の運勢は、なんだろう？';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/edu-56.js"),
  );

  // 한국어 작업 모듈 연결: ero
  ero = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/ero-56.js"),
  );

  // [번역 대상] kyou
  kyou = '凶';

  // [번역 대상] kyou_desc
  kyou_desc =
    'こんなときは、フクキタルを慰めてあげたら？トレーニング成功率-10%、全トレーニング効果-10%、出走時の能力-10%、好感取得+20%';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/love-56.js"),
  );

  // [번역 대상] ptsd_desc
  ptsd_desc =
    '向き合わざるを得ない影。トレーニング成功率-10%、全トレーニング効果-10%、出走時の能力-10%、やる気上限-3';

  // [번역 대상] shoukichi
  shoukichi = '小吉';

  // [번역 대상] shoukichi_desc
  shoukichi_desc = '悪くはない！トレーニング成功率+5%、出走時の能力+1%';
};
