const I18nCharaFeature = require('#/i18n/ja-JP/chara/feature');

module.exports = class extends I18nCharaFeature {
  hair_color_template = '%COLOR% 머리';
  uma_hair_color_template = '%COLOR% 털';
  ahoge_hair_template = '%LONG% 아호게';
  chara_template = '[%NAME%]: %DESC%';

  n_sex = '성별';

  h_sex_0 = '여성';
  h_sex_1 = '남성';
  h_sex_10 = '여성?';

  u_sex_0 = '우마무스메';
  u_sex_1 = '우마무스코';
  u_sex_10 = '우마무스메?';

  n_age = '연령';

  h_age_0 = '유년';
  h_age_1 = '소년';
  h_age_2 = '청년';

  u_age_0 = '어린 시절';
  u_age_1 = '성장기';
  u_age_2 = '본격화';

  baby_uma_adjective = '어린';

  n_height_with_cm = '키 (cm)';

  n_hair_color = '머리색';
  hc_black = '검정';
  hc_dark_brown = '진갈색';
  hc_light_brown = '연갈색';
  hc_auburn = '적갈색';
  hc_blue = '파랑';
  hc_purple = '보라';
  hc_orange = '주황';
  hc_pink = '분홍';
  hc_green = '초록';
  hc_gold = '금색';
  hc_white = '흰색';

  hc_aoge = '청모';
  hc_aokage = '청록모';
  hc_kurokage = '흑록모';
  hc_kage = '갈색';
  hc_tochikurige = '짙은 밤색';
  hc_kurige = '밤색';
  hc_ashike = '회색';

  hair_splitter = '+';

  n_ahoge_hair = '아호게';
  th_none = '없음';
  th_short = '짧음';
  th_middle = '중간';
  th_long = '김';
  th_white = '흰색';

  n_front_hair = '앞머리';
  fh_thic_bangs = '두꺼운 앞머리';
  fh_even_bangs = '일자 앞머리';
  fh_side_part = '사이드 가르마';
  fh_exha_ports = '배기구';
  fh_midd_part = '가운데 가르마';

  n_back_hair = '뒷머리';
  bh_shor_hair = '숏컷';
  bh_long_straight = '롱 스트레이트';
  bh_twin_tails = '트윈테일';
  bh_high_ponytail = '하이 포니테일';
  bh_hair_bun = '당고머리';
  bh_side_ponytail = '사이드 포니테일';
  bh_puf_twintails = '풍성한 트윈테일';
  bh_wing_style = '바깥 뻗침';
  bh_single_braid = '한 갈래 땋은 머리';
  bh_twin_braids = '양 갈래 땋은 머리';
  bh_doub_odango = '더블 당고머리';

  n_skin_color = '피부색';
  skin_0 = '흰 피부';
  skin_1 = '건강한 피부';
  skin_2 = '혈색이 좋음';
  skin_3 = '구릿빛';

  n_armpit_hair = '겨드랑이털';
  n_pubic_hair = '음모';
  body_hair_talent_0 = '선천적으로 매끈함';
  body_hair_talent_1 = '보통';
  body_hair_talent_2 = '짙고 뻣뻣함';

  body_hair_0 = '성긴 솜털';
  body_hair_1 = '정돈된 짧은 털';
  body_hair_2 = '짙은 숲';
  body_hair_3 = '헝클어진 곱슬털';
  body_hair_4 = '뻣뻣한 털';

  body_hair_talent_suffix = '게다가 빠르게 자라는 중';

  n_sex_organ_color = '성기 색';
  p_color_0 = '분홍색';
  p_color_1 = '보라빛';
  p_color_2 = '거무스름함';

  breast_AA = '귀여움';
  breast_A = '아담함';
  breast_B = '작은 편';
  breast_C = '적당함';
  breast_D = '볼륨감';
  breast_E = '풍만함';
  breast_F = '매우 풍만함';
  breast_G = '극도로 큼';

  penis_1 = '안쓰러움';
  penis_2 = '빈약함';
  penis_3 = '당당함';
  penis_4 = '흉악함';
  penis_5 = '두려움';

  n_chara = '기질';
  'chara_-3' = '소심함';
  'chara_-2' = '겁쟁이';
  'chara_-1' = '성실함';
  chara_0 = '보통';
  chara_1 = '기가 셈';
  chara_2 = '완고함';
  chara_3 = '열혈';

  'chara_-3_desc' = '트레이닝과 조교의 효과가 소폭 상승한다';
  'chara_-2_desc' =
    '레이스에서 늦은 출발 확률이 소폭 감소하고, 블록됐을 때 돌파 확률이 소폭 상승하지만 출주마가 많으면 능력이 소폭 감소한다';
  'chara_-1_desc' =
    '레이스 중 스킬 재사용 대기시간이 소폭 단축되고, 트레이닝 효과가 소폭 상승한다';
  chara_0_desc =
    '레이스 중 초조 상태가 될 확률이 소폭 감소하고, 스킬 발동률이 소폭 상승한다';
  chara_1_desc =
    '레이스 중 능력이 소폭 상승하지만, 패배했을 때 받는 스트레스도 소폭 증가한다';
  chara_2_desc =
    '강적을 상대할 때 레이스 능력이 소폭 상승하고, 의욕의 영향도 소폭 커진다';
  chara_3_desc =
    '강적을 상대할 때 레이스 능력이 상승하지만, 강적이 없는 레이스에서는 능력이 소폭 감소한다';

  chara_twisted = '(음문·기질 전환 발동 중)';
};
