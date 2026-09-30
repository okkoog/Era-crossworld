const { bonus_params, id2bonus } = require('#/data/race/race-attr-bonus');
const { lane_params, slope_params } = require('#/data/race/race-params');
const race_rewards = require('#/data/race/race-rewards');

// GENERATED START
const race_enum = {
  // 데뷔전
  begin_race: 0,
  // 주니어컵
  juni_cup: 1,
  // 교토 금배
  kyot_kim: 2,
  // 나카야마 금배
  naka_kim: 3,
  // 페어리 스테이크스
  fair_sta: 4,
  // 신잔 기념
  shin_kin: 5,
  // 아이치배
  aich_hai: 6,
  // 블루버드 컵
  blue_cup: 7,
  // 케이세이배
  keis_hai: 8,
  // 닛케이 신춘배
  nikk_hai: 9,
  // 와카고마 스테이크스
  waka_sta: 10,
  // 실크로드 스테이크스
  silk_sta: 11,
  // 네기시 스테이크스
  negi_sta: 12,
  // 토카이 스테이크스
  toka_sta: 13,
  // 아메리카 JCC
  amer_cup: 14,
  // 키사라기상
  kisa_sho: 15,
  // 가와사키 기념
  kawa_kin: 16,
  // 도쿄 신문배
  toky_hai: 17,
  // 퀸컵
  quee_cup: 18,
  // 쿄도통신배
  kyod_hai: 19,
  // 교토 기념
  kyot_kin: 20,
  // 쿠모토리상
  kumo_sho: 21,
  // 히아신스 스테이크스
  hyac_sta: 22,
  // 페브러리 스테이크스
  febr_sta: 23,
  // 교토 우마무스메 스테이크스
  kyo_sta: 24,
  // 코쿠라 대상전
  koku_dai: 25,
  // 다이아몬드 스테이크스
  diam_sta: 26,
  // 제비꽃 스테이크스
  viol_sta: 27,
  // 나카야마 기념
  naka_kin: 28,
  // 한큐배
  hank_hai: 29,
  // 튤립상
  tuli_sho: 30,
  // 야요이상
  hoch_sho: 31,
  // 오션 스테이크스
  ocae_sta: 32,
  // 필리스 레뷰
  hoch_rev: 33,
  // 킨코상
  kink_sho: 34,
  // 나카야마 우마무스메 스테이크스
  irc_sho: 35,
  // 케이힌배
  keii_hai: 36,
  // 스프링 스테이크스
  sprg_sta: 37,
  // 팔콘 스테이크스
  falc_sta: 38,
  // 플라워컵
  flow_cup: 39,
  // 복룡 스테이크스
  huku_sta: 40,
  // 다이올라이트 기념
  dio_kin: 41,
  // 한신 대상전
  hans_dai: 42,
  // 도쿄 스프린트
  toky_spr: 43,
  // 마이니치배
  main_hai: 44,
  // 타카마츠노미야 기념
  takm_kin: 45,
  // 닛케이상
  nikk_sho: 46,
  // 마치 스테이크스
  marc_sta: 47,
  // 오사카배
  sank_hai: 48,
  // 더비 경 챌린지 트로피
  lord_tro: 49,
  // 벚꽃상
  oka_sho: 50,
  // 뉴질랜드 트로피
  new_tro: 51,
  // 마린컵
  mari_cup: 52,
  // 한신 우마무스메 스테이크스
  hans_sta: 53,
  // 사츠키상
  sats_sho: 54,
  // 알링턴컵
  arli_cup: 55,
  // 안타레스 스테이크스
  anta_sta: 56,
  // 플로라 스테이크스
  flor_sta: 57,
  // 청엽상
  aoba_sho: 58,
  // 텐노상 (봄)
  tenn_spr: 59,
  // 마일러스컵
  mile_cup: 60,
  // 후쿠시마 우마무스메 스테이크스
  fuku_sta: 61,
  // NHK 마일 컵
  nhk_cup: 62,
  // 켄터키 더비
  kent_der: 63,
  // 도쿄 신문배
  kyot_hai: 64,
  // 카시와 기념
  kash_kin: 65,
  // 니이가타 대상전
  niig_dai: 66,
  // 하네다배
  hane_hai: 67,
  // 파랑앵무상
  prix_prb: 68,
  // 케이오배 스프링 컵
  keio_cup: 69,
  // 오크스
  yush_him: 70,
  // 봉추 스테이크스
  hous_sta: 71,
  // 빅토리아 마일
  vict_mile: 72,
  // 헤이안 스테이크스
  heia_sta: 73,
  // 일본 더비
  toky_yus: 74,
  // 접시꽃 스테이크스
  aoi_sta: 75,
  // 메구로 기념
  megu_kin: 76,
  // 프리크니스 스테이크스
  prea_sta: 77,
  // 도쿄 더비
  toky_der: 78,
  // 야스다 기념
  yasu_kin: 79,
  // 나루오 기념
  naru_kin: 80,
  // 하코다테 스프린트 스테이크스
  haks_sta: 81,
  // 엡섬컵
  epso_cup: 82,
  // 디안상
  prix_dia: 83,
  // 유니콘 스테이크스
  unic_sta: 84,
  // 머메이드 스테이크스
  merm_sta: 85,
  // 타카라즈카 기념
  takz_kin: 86,
  // 제왕상
  teio_sho: 87,
  // 벨몬트 스테이크스
  belm_sta: 88,
  // 라디오 NIKKEI상
  radi_shi: 89,
  // CBC상
  cbc_sho: 90,
  // 재팬 더트 클래식
  japa_dir: 91,
  // 프로시온 스테이크스
  proc_sta: 92,
  // 칠석상
  tana_sho: 93,
  // 하코다테 주니어 스테이크스
  hak2_sta: 94,
  // 하코다테 기념
  hako_kin: 95,
  // 이비스 서머 대시
  ibis_das: 96,
  // 츄쿄기념
  toyo_kin: 97,
  // 퀸 스테이크스
  quee_sta: 98,
  // 레오파드 스테이크스
  leop_sta: 99,
  // 엘름 스테이크스
  elm_sta: 100,
  // 세키야 기념
  seki_kin: 101,
  // 키타큐슈 기념
  kita_kin: 102,
  // 코쿠라 기념
  koku_kin: 103,
  // 니이가타 주니어 스테이크스
  niig_sta: 104,
  // 삿포로 기념
  sapp_kin: 105,
  // 킨랜드컵
  keen_cup: 106,
  // 코쿠라 주니어 스테이크스
  koku_sta: 107,
  // 삿포로 주니어 스테이크스
  sapp_sta: 108,
  // 니이가타 기념
  niig_kin: 109,
  // 개미취 스테이크스
  shio_sta: 110,
  // 센토 스테이크스
  cent_sta: 111,
  // 케이세이배 오텀 핸디캡
  keis_han: 112,
  // 로즈 스테이크스
  rose_sta: 113,
  // 세인트 라이트 기념
  stli_kin: 114,
  // 고베 신문배
  kobe_hai: 115,
  // 올 커머스
  all_com: 116,
  // 스프린터스 스테이크스
  sprt_sta: 117,
  // 개선문상
  prix_lat: 118,
  // 시리우스 스테이크스
  siri_sta: 119,
  // 마일 챔피언십 남부배
  mile_nbh: 120,
  // 사우디아라비아 로얄컵
  saud_cup: 121,
  // 후츄 우마무스메 스테이크스
  fuch_sta: 122,
  // 마이니치 왕관
  main_oka: 123,
  // 교토 대상전
  kyot_dai: 124,
  // 추화상
  shuk_sho: 125,
  // 후지 스테이크스
  fuji_sta: 126,
  // 아르테미스 스테이크스
  arte_sta: 127,
  // 국화상
  kiku_sho: 128,
  // 텐노상 (가을)
  tenn_sho: 129,
  // 스완 스테이크스
  swan_sta: 130,
  // 케이오배 주니어 스테이크스
  keio_sta: 131,
  // 판타지 스테이크스
  fant_sta: 132,
  // JBC 스프린트
  jbc_spr: 133,
  // JBC 레이디스 클래식
  jbc_lad: 134,
  // JBC 클래식
  jbc_cls: 135,
  // 아르헨티나 공화국배
  copa_arg: 136,
  // 미야코 스테이크스
  miya_sta: 137,
  // 콩코드 스테이크스
  chn_frt: 138,
  // 데일리배 주니어 스테이크스
  dail_sta: 139,
  // 엘리자베스 여왕배
  eliz_cup: 140,
  // 무사시노 스테이크스
  musa_sta: 141,
  // 후쿠시마 기념
  fuku_kin: 142,
  // 도쿄 스포츠배 주니어 스테이크스
  toky_sta: 143,
  // 마일 챔피언십
  mile_cha: 144,
  // 교토 주니어 스테이크스
  kyot_sta: 145,
  // 재팬컵
  japa_cup: 146,
  // 케이한배
  keih_hai: 147,
  // 챔피언스 컵
  cham_cup: 148,
  // 스테이어스 스테이크스
  stay_sta: 149,
  // 챌린지컵
  asah_cup: 150,
  // 전 일본 주니어 우준
  zeni_you: 151,
  // 한신 쥬버나일 필리스
  hans_fil: 152,
  // 홍콩 스프린트
  hk_spr: 153,
  // 홍콩 마일
  hk_mil: 154,
  // 홍콩컵
  hk_cup: 155,
  // 홍콩 바즈
  hk_vas: 156,
  // 카펠라 스테이크스
  cape_sta: 157,
  // 츄니치 신문배
  chun_hai: 158,
  // 아사히배 퓨처리티 스테이크스
  asah_sta: 159,
  // 터키석 스테이크스
  turq_sta: 160,
  // 호프풀 스테이크스
  hope_sta: 161,
  // 도쿄 대상전
  toky_dai: 162,
  // 아리마 기념
  arim_kin: 163,
  // 아메리칸 오크스
  usa_oks: 164,
  // 한신컵
  hans_cup: 165,
  // 迪拜世界杯
  duba_cup: 166,
  // 두바이 골든 샤힌
  duba_sha: 167,
  // 두바이 시마 클래식
  duba_cls: 168,
  // 두바이 터프
  duba_tur: 169,
  // 알코즈 스프린트
  alqu_spr: 170,
  // 부용꽃 스테이크스
  fuyo_sta: 171,
};

const current = new Date().getTime();

/** @type {RaceInfo[]} */
const race_infos = [];
race_infos[race_enum.juni_cup] = require('#/data/race/op/race-juni-cup');
race_infos[race_enum.kyot_kim] = require('#/data/race/g3/race-kyot-kim');
race_infos[race_enum.naka_kim] = require('#/data/race/g3/race-naka-kim');
race_infos[race_enum.fair_sta] = require('#/data/race/g3/race-fair-sta');
race_infos[race_enum.shin_kin] = require('#/data/race/g3/race-shin-kin');
race_infos[race_enum.aich_hai] = require('#/data/race/g3/race-aich-hai');
race_infos[race_enum.blue_cup] = require('#/data/race/g3/race-blue-cup');
race_infos[race_enum.keis_hai] = require('#/data/race/g3/race-keis-hai');
race_infos[race_enum.nikk_hai] = require('#/data/race/g2/race-nikk-hai');
race_infos[race_enum.waka_sta] = require('#/data/race/op/race-waka-sta');
race_infos[race_enum.silk_sta] = require('#/data/race/g2/race-silk-sta');
race_infos[race_enum.negi_sta] = require('#/data/race/g2/race-negi-sta');
race_infos[race_enum.toka_sta] = require('#/data/race/g2/race-toka-sta');
race_infos[race_enum.amer_cup] = require('#/data/race/g2/race-amer-cup');
race_infos[race_enum.kisa_sho] = require('#/data/race/g3/race-kisa-sho');
race_infos[race_enum.kawa_kin] = require('#/data/race/g1/race-kawa-kin');
race_infos[race_enum.toky_hai] = require('#/data/race/g3/race-toky-hai');
race_infos[race_enum.quee_cup] = require('#/data/race/g3/race-quee-cup');
race_infos[race_enum.kyod_hai] = require('#/data/race/g3/race-kyod-hai');
race_infos[race_enum.kyot_kin] = require('#/data/race/g2/race-kyot-kin');
race_infos[race_enum.kumo_sho] = require('#/data/race/g3/race-kumo-sho');
race_infos[race_enum.hyac_sta] = require('#/data/race/op/race-hyac-sta');
race_infos[race_enum.febr_sta] = require('#/data/race/g1/race-febr-sta');
race_infos[race_enum.kyo_sta] = require('#/data/race/g3/race-kyo-sta');
race_infos[race_enum.koku_dai] = require('#/data/race/g3/race-koku-dai');
race_infos[race_enum.diam_sta] = require('#/data/race/g3/race-diam-sta');
race_infos[race_enum.viol_sta] = require('#/data/race/op/race-viol-sta');
race_infos[race_enum.naka_kin] = require('#/data/race/g2/race-naka-kin');
race_infos[race_enum.hank_hai] = require('#/data/race/g3/race-hank-hai');
race_infos[race_enum.tuli_sho] = require('#/data/race/g2/race-tuli-sho');
race_infos[race_enum.hoch_sho] = require('#/data/race/g2/race-hoch-sho');
race_infos[race_enum.ocae_sta] = require('#/data/race/g3/race-ocae-sta');
race_infos[race_enum.hoch_rev] = require('#/data/race/g2/race-hoch-rev');
race_infos[race_enum.kink_sho] = require('#/data/race/g2/race-kink-sho');
race_infos[race_enum.irc_sho] = require('#/data/race/g3/race-irc.-sho');
race_infos[race_enum.keii_hai] = require('#/data/race/g2/race-keii-hai');
race_infos[race_enum.sprg_sta] = require('#/data/race/g2/race-sprg-sta');
race_infos[race_enum.falc_sta] = require('#/data/race/g3/race-falc-sta');
race_infos[race_enum.flow_cup] = require('#/data/race/g3/race-flow-cup');
race_infos[race_enum.huku_sta] = require('#/data/race/op/race-huku-sta');
race_infos[race_enum.dio_kin] = require('#/data/race/g2/race-dio-kin');
race_infos[race_enum.hans_dai] = require('#/data/race/g2/race-hans-dai');
race_infos[race_enum.toky_spr] = require('#/data/race/g3/race-toky-spr');
race_infos[race_enum.main_hai] = require('#/data/race/g3/race-main-hai');
race_infos[race_enum.takm_kin] = require('#/data/race/g1/race-takm-kin');
race_infos[race_enum.nikk_sho] = require('#/data/race/g2/race-nikk-sho');
race_infos[race_enum.marc_sta] = require('#/data/race/g3/race-marc-sta');
race_infos[race_enum.sank_hai] = require('#/data/race/g1/race-sank-hai');
race_infos[race_enum.lord_tro] = require('#/data/race/g3/race-lord-tro');
race_infos[race_enum.oka_sho] = require('#/data/race/g1/race-oka-sho');
race_infos[race_enum.new_tro] = require('#/data/race/g2/race-new-tro');
race_infos[race_enum.mari_cup] = require('#/data/race/g3/race-mari-cup');
race_infos[race_enum.hans_sta] = require('#/data/race/g2/race-hans-sta');
race_infos[race_enum.sats_sho] = require('#/data/race/g1/race-sats-sho');
race_infos[race_enum.arli_cup] = require('#/data/race/g3/race-arli-cup');
race_infos[race_enum.anta_sta] = require('#/data/race/g3/race-anta-sta');
race_infos[race_enum.flor_sta] = require('#/data/race/g2/race-flor-sta');
race_infos[race_enum.aoba_sho] = require('#/data/race/g2/race-aoba-sho');
race_infos[race_enum.tenn_spr] = require('#/data/race/g1/race-tenn-spr');
race_infos[race_enum.mile_cup] = require('#/data/race/g2/race-mile-cup');
race_infos[race_enum.fuku_sta] = require('#/data/race/g3/race-fuku-sta');
race_infos[race_enum.nhk_cup] = require('#/data/race/g1/race-nhk-cup');
race_infos[race_enum.kent_der] = require('#/data/race/g1/race-kent-der');
race_infos[race_enum.kyot_hai] = require('#/data/race/g2/race-kyot-hai');
race_infos[race_enum.kash_kin] = require('#/data/race/g1/race-kash-kin');
race_infos[race_enum.niig_dai] = require('#/data/race/g3/race-niig-dai');
race_infos[race_enum.hane_hai] = require('#/data/race/g1/race-hane-hai');
race_infos[race_enum.prix_prb] = require('#/data/race/op/race-prix-prb');
race_infos[race_enum.keio_cup] = require('#/data/race/g2/race-keio-cup');
race_infos[race_enum.yush_him] = require('#/data/race/g1/race-yush-him');
race_infos[race_enum.hous_sta] = require('#/data/race/op/race-hous-sta');
race_infos[race_enum.vict_mile] = require('#/data/race/g1/race-vict-mile');
race_infos[race_enum.heia_sta] = require('#/data/race/g3/race-heia-sta');
race_infos[race_enum.toky_yus] = require('#/data/race/g1/race-toky-yus');
race_infos[race_enum.aoi_sta] = require('#/data/race/g3/race-aoi-sta');
race_infos[race_enum.megu_kin] = require('#/data/race/g2/race-megu-kin');
race_infos[race_enum.prea_sta] = require('#/data/race/g1/race-prea-sta');
race_infos[race_enum.toky_der] = require('#/data/race/g1/race-toky-der');
race_infos[race_enum.yasu_kin] = require('#/data/race/g1/race-yasu-kin');
race_infos[race_enum.naru_kin] = require('#/data/race/g3/race-naru-kin');
race_infos[race_enum.haks_sta] = require('#/data/race/g3/race-haks-sta');
race_infos[race_enum.epso_cup] = require('#/data/race/g3/race-epso-cup');
race_infos[race_enum.prix_dia] = require('#/data/race/g1/race-prix-dia');
race_infos[race_enum.unic_sta] = require('#/data/race/g3/race-unic-sta');
race_infos[race_enum.merm_sta] = require('#/data/race/g3/race-merm-sta');
race_infos[race_enum.takz_kin] = require('#/data/race/g1/race-takz-kin');
race_infos[race_enum.teio_sho] = require('#/data/race/g1/race-teio-sho');
race_infos[race_enum.belm_sta] = require('#/data/race/g1/race-belm-sta');
race_infos[race_enum.radi_shi] = require('#/data/race/g3/race-radi-shi');
race_infos[race_enum.cbc_sho] = require('#/data/race/g3/race-cbc-sho');
race_infos[race_enum.japa_dir] = require('#/data/race/g1/race-japa-dir');
race_infos[race_enum.proc_sta] = require('#/data/race/g3/race-proc-sta');
race_infos[race_enum.tana_sho] = require('#/data/race/g3/race-tana-sho');
race_infos[race_enum.hak2_sta] = require('#/data/race/g3/race-hak2-sta');
race_infos[race_enum.hako_kin] = require('#/data/race/g3/race-hako-kin');
race_infos[race_enum.ibis_das] = require('#/data/race/g3/race-ibis-das');
race_infos[race_enum.toyo_kin] = require('#/data/race/g3/race-toyo-kin');
race_infos[race_enum.quee_sta] = require('#/data/race/g3/race-quee-sta');
race_infos[race_enum.leop_sta] = require('#/data/race/g3/race-leop-sta');
race_infos[race_enum.elm_sta] = require('#/data/race/g3/race-elm-sta');
race_infos[race_enum.seki_kin] = require('#/data/race/g3/race-seki-kin');
race_infos[race_enum.kita_kin] = require('#/data/race/g3/race-kita-kin');
race_infos[race_enum.koku_kin] = require('#/data/race/g3/race-koku-kin');
race_infos[race_enum.niig_sta] = require('#/data/race/g3/race-niig-sta');
race_infos[race_enum.sapp_kin] = require('#/data/race/g2/race-sapp-kin');
race_infos[race_enum.keen_cup] = require('#/data/race/g3/race-keen-cup');
race_infos[race_enum.koku_sta] = require('#/data/race/g3/race-koku-sta');
race_infos[race_enum.sapp_sta] = require('#/data/race/g3/race-sapp-sta');
race_infos[race_enum.niig_kin] = require('#/data/race/g3/race-niig-kin');
race_infos[race_enum.shio_sta] = require('#/data/race/g3/race-shio-sta');
race_infos[race_enum.cent_sta] = require('#/data/race/g2/race-cent-sta');
race_infos[race_enum.keis_han] = require('#/data/race/g3/race-keis-han');
race_infos[race_enum.rose_sta] = require('#/data/race/g2/race-rose-sta');
race_infos[race_enum.stli_kin] = require('#/data/race/g2/race-stli-kin');
race_infos[race_enum.kobe_hai] = require('#/data/race/g2/race-kobe-hai');
race_infos[race_enum.all_com] = require('#/data/race/g2/race-all-com');
race_infos[race_enum.sprt_sta] = require('#/data/race/g1/race-sprt-sta');
race_infos[race_enum.prix_lat] = require('#/data/race/g1/race-prix-lat');
race_infos[race_enum.siri_sta] = require('#/data/race/g3/race-siri-sta');
race_infos[race_enum.mile_nbh] = require('#/data/race/g1/race-mile-nbh');
race_infos[race_enum.saud_cup] = require('#/data/race/g3/race-saud-cup');
race_infos[race_enum.fuch_sta] = require('#/data/race/g2/race-fuch-sta');
race_infos[race_enum.main_oka] = require('#/data/race/g2/race-main-oka');
race_infos[race_enum.kyot_dai] = require('#/data/race/g2/race-kyot-dai');
race_infos[race_enum.shuk_sho] = require('#/data/race/g1/race-shuk-sho');
race_infos[race_enum.fuji_sta] = require('#/data/race/g2/race-fuji-sta');
race_infos[race_enum.arte_sta] = require('#/data/race/g3/race-arte-sta');
race_infos[race_enum.kiku_sho] = require('#/data/race/g1/race-kiku-sho');
race_infos[race_enum.tenn_sho] = require('#/data/race/g1/race-tenn-sho');
race_infos[race_enum.swan_sta] = require('#/data/race/g2/race-swan-sta');
race_infos[race_enum.keio_sta] = require('#/data/race/g2/race-keio-sta');
race_infos[race_enum.fant_sta] = require('#/data/race/g3/race-fant-sta');
race_infos[race_enum.jbc_spr] = require('#/data/race/g1/race-jbc-spr');
race_infos[race_enum.jbc_lad] = require('#/data/race/g1/race-jbc-lad');
race_infos[race_enum.jbc_cls] = require('#/data/race/g1/race-jbc-cls');
race_infos[race_enum.copa_arg] = require('#/data/race/g2/race-copa-arg');
race_infos[race_enum.miya_sta] = require('#/data/race/g3/race-miya-sta');
race_infos[race_enum.chn_frt] = require('#/data/race/g1/race-chn-frt');
race_infos[race_enum.dail_sta] = require('#/data/race/g2/race-dail-sta');
race_infos[race_enum.eliz_cup] = require('#/data/race/g1/race-eliz-cup');
race_infos[race_enum.musa_sta] = require('#/data/race/g3/race-musa-sta');
race_infos[race_enum.fuku_kin] = require('#/data/race/g3/race-fuku-kin');
race_infos[race_enum.toky_sta] = require('#/data/race/g2/race-toky-sta');
race_infos[race_enum.mile_cha] = require('#/data/race/g1/race-mile-cha');
race_infos[race_enum.kyot_sta] = require('#/data/race/g3/race-kyot-sta');
race_infos[race_enum.japa_cup] = require('#/data/race/g1/race-japa-cup');
race_infos[race_enum.keih_hai] = require('#/data/race/g3/race-keih-hai');
race_infos[race_enum.cham_cup] = require('#/data/race/g1/race-cham-cup');
race_infos[race_enum.stay_sta] = require('#/data/race/g2/race-stay-sta');
race_infos[race_enum.asah_cup] = require('#/data/race/g3/race-asah-cup');
race_infos[race_enum.zeni_you] = require('#/data/race/g1/race-zeni-you');
race_infos[race_enum.hans_fil] = require('#/data/race/g1/race-hans-fil');
race_infos[race_enum.hk_spr] = require('#/data/race/g1/race-hk-spr');
race_infos[race_enum.hk_mil] = require('#/data/race/g1/race-hk-mil');
race_infos[race_enum.hk_cup] = require('#/data/race/g1/race-hk-cup');
race_infos[race_enum.hk_vas] = require('#/data/race/g1/race-hk-vas');
race_infos[race_enum.cape_sta] = require('#/data/race/g3/race-cape-sta');
race_infos[race_enum.chun_hai] = require('#/data/race/g3/race-chun-hai');
race_infos[race_enum.asah_sta] = require('#/data/race/g1/race-asah-sta');
race_infos[race_enum.turq_sta] = require('#/data/race/g3/race-turq-sta');
race_infos[race_enum.hope_sta] = require('#/data/race/g1/race-hope-sta');
race_infos[race_enum.toky_dai] = require('#/data/race/g1/race-toky-dai');
race_infos[race_enum.arim_kin] = require('#/data/race/g1/race-arim-kin');
race_infos[race_enum.usa_oks] = require('#/data/race/g1/race-usa-oks');
race_infos[race_enum.hans_cup] = require('#/data/race/g2/race-hans-cup');
race_infos[race_enum.duba_cup] = require('#/data/race/g1/race-duba-cup');
race_infos[race_enum.duba_sha] = require('#/data/race/g1/race-duba-sha');
race_infos[race_enum.duba_cls] = require('#/data/race/g1/race-duba-cls');
race_infos[race_enum.duba_tur] = require('#/data/race/g1/race-duba-tur');
race_infos[race_enum.alqu_spr] = require('#/data/race/g1/race-alqu-spr');
race_infos[race_enum.fuyo_sta] = require('#/data/race/op/race-fuyo-sta');
// GENERATED END

race_infos.forEach((e) => {
  const param_id = e.param_id;
  e.attr_bonus = bonus_params[id2bonus[param_id]] || [];
  e.lanes = lane_params[param_id];
  e.slopes = slope_params[param_id];
  e.phases = [
    Math.ceil((e.span * 4) / 24),
    Math.ceil((e.span * 16) / 24),
    Math.ceil((e.span * 20) / 24),
  ];
});

race_infos[race_enum.begin_race] = require('#/data/race/race-begin-race');

console.log(
  '比赛信息注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  race_enum,
  race_infos,
  race_rewards,
  race_difficulty: {
    easy: -20,
    hard: 10,
    normal: 0,
  },
};
