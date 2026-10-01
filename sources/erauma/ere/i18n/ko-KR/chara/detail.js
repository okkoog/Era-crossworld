module.exports = class extends require('#/i18n/ja-JP/chara/detail') {
  base_title = '개인 정보';

  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    '피부색 ',
    skin,
    '의 ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];

  base_hair_info_template = '헤어스타일: %HAIR%';
  base_birthday_info_template = '%YEAR%년 %MONTH%월 %DATE%일생';
  base_birthday_info_no_year_template = '%MONTH%월 %DATE%일생';
  base_header_body = '신체 치수';

  get_base_body_info = (height, weight) => [
    '키: ',
    height,
    'cm',
    { isDivider: true },
    '체중: ',
    weight,
  ];

  base_body_weight_fat = '……행복하게 살이 쪘다';
  base_body_weight_heavy = '소폭 증가';
  base_body_weight_normal = '잘 관리되고 있다';
  base_body_hidden = '이 이상의 데이터는 없다';

  get_base_female_info = (bust, cup, waist, hip) => [
    '쓰리사이즈: B',
    bust,
    ' (',
    cup,
    ' Cup) · W',
    waist,
    ' · H',
    hip,
  ];

  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    chara.get_colored_name(),
    '의 새 헤어스타일을 선택',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    '현재 ',
    chara.get_colored_name(),
    '은(는) 출주 시 장소와 행사에 맞춰 복장을 고르고, URA 시상식과 육성 종료 후 전당 주간에는 승부복 [',
    clothe,
    ']을(를) 입는다.',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    '현재 ',
    chara.get_colored_name(),
    '은(는) 출주 시와 URA 시상식, 육성 종료 후 전당 주간에 승부복 [',
    clothe,
    ']을(를) 입는다.',
  ];

  base_clothe_change_confirm = '옷을 갈아입을까?';
  base_clothe_bt_auto_select = '상황에 맞춰 선택';
  base_clothe_bt_keep_current = '현재 복장 유지';
  base_bt_comb_hair = '머리 빗기';

  edu_title = '육성 상황';
  get_edu_score = (score) => ['평가: ', score];
  edu_date_template = '%YEAR%년 %MONTH%월 제%WEEK%주';
  edu_date_with_playthrough_template =
    '%YEAR%년 %MONTH%월 제%WEEK%주 (%PLAYTHROUGH%회차)';
  get_edu_pt = (pt) => ['스킬 Pt ', pt, ' 보유'];
  edu_header_attr = '기초 능력';
  get_edu_attr = (attr_name, attr) => [attr_name, ': ', attr];
  edu_header_adapt = '레이스 적성';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, ': ', adapt];
  edu_header_aim_template = '육성 목표 (%CURRENT%/%TOTAL%)';
  edu_header_aim_finished = '육성 목표 (달성!)';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'G1 입착';
  edu_aim_common_desc_2 = 'G2 이상 3착 이내';
  edu_aim_common_desc_3 = '임의의 레이스 1착';
  edu_aim_require_template = '%REQUIRE%회';
  edu_aim_require_1 = '1착';
  edu_aim_require_2 = '2착 이내';
  edu_aim_require_3 = '3착 이내';
  edu_aim_require_4 = '4착 이내';
  edu_aim_require_5 = '입착';
  edu_aim_require_20 = '출주';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = '언어 스킬';

  skill_title = '레이스 기술';
  skill_header_learnt = '습득 스킬';
  skill_no_skill = '미습득';
  skill_header_available = '미해금 스킬';
  skill_header_gene = '인자 계승';
  skill_no_gene = '미계승';
  skill_header_gene_available = '계승 가능한 인자';

  race_title = '출주 성적';
  race_header_race = '레이스 전적';
  race_no_race = '미출주';

  get_race_summary = (race_count, win, reward) => [
    race_count,
    '전 ',
    win,
    '승, 총상금 ',
    reward,
  ];

  get_race_result = (year, race, result) => [
    year,
    '년 ',
    race,
    ' · ',
    result,
  ];

  race_result_tip_template = '인기 %POP%위 · %STYLE%';
  race_header_title = '전용 칭호';

  relation_title = '교우 관계';
  relation_header_relation = '대인 관계';
  get_relation_entry = (name, relation) => [name, ': ', relation];
  relation_no_relation = '신경 쓰고 있는 캐릭터가 없다';
  get_relation_take_care = (chara) => [chara, '을(를) 돌보는 중'];
  get_relation_be_taken_care = (chara) => [chara, '에게 돌봄을 받고 있다'];
  relation_header_family = '직계 가족';

  get_relation_family_parents = (father, mother) => [
    '아버지는 ',
    father,
    ', 어머니는 ',
    mother,
  ];

  get_relation_first_child_as_father = (date, _, __, chara, is_boy) => [
    is_boy ? '장남' : '장녀',
    ' ',
    chara,
    '은(는) ',
    date,
    ' 출생',
  ];

  get_relation_first_child_as_mother = (date, _, __, chara, is_boy) => [
    date,
    '에 ',
    is_boy ? '장남' : '장녀',
    ' ',
    chara,
    '을(를) 낳았다',
  ];

  relation_family_children_template = '현재 %INFO%';
  relation_family_as_father_template = '%COUNT%명의 아이의 아버지';
  relation_family_as_mother_template = '%COUNT%명의 아이의 어머니';
  relation_family_child_boy_title_template = '%NUMBER%남';
  relation_family_child_girl_title_template = '%NUMBER%녀';

  get_relation_family_child_entry_as_father = (title, child, mother) => [
    title,
    ' ',
    child,
    ', 어머니는 ',
    mother,
  ];

  get_relation_family_child_entry_as_mother = (title, child, father) => [
    title,
    ' ',
    child,
    ', 아버지는 ',
    father,
  ];

  relation_no_family = '소개할 수 있는 가족이 없다';
  relation_bt_change_callname_to_you_template = '%YOU%에 대한 호칭 변경';
  relation_bt_reset_callname_to_you_template = '%YOU%에 대한 호칭 초기화';
  relation_bt_change_callname_template =
    '이 캐릭터에 대한 호칭 변경 (%CALLNAME%)';
  relation_bt_reset_callname = '이 캐릭터에 대한 호칭 초기화';

  get_relation_change_callname_to_you_confirm = (chara, you) => [
    chara,
    '에게 ',
    you,
    '을(를) 뭐라고 부르게 할까?',
  ];

  get_relation_change_callname_confirm = (chara) => [
    chara,
    '을(를) 뭐라고 부를까?',
  ];

  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    '은(는) ',
    callee,
    '을(를) ',
    callname,
    '(이)라고 부르게 됐다',
  ];

  sex_title = '성애 상황';
  sex_exp_slave_2_accept =
    '성노예의 역할을 받아들이고, 우마무스메님께 봉사하는 것을 즐기고 있다';
  sex_exp_slave_2_reject =
    '성노예라는 처지에 저항하며, 비정상적으로 강한 육체적 쾌감에도 아직 완전히 빠지지 않았다';
  sex_exp_slave_3_accept =
    '임신 노예의 역할을 받아들이고, 우마무스메님의 새로운 생명을 품는 기쁨을 누리고 있다';
  sex_exp_slave_3_reject =
    '임신 노예라는 처지에 저항하며, 인간으로서의 자긍심을 아직 버리지 않았다';
  sex_header_inmon = '음문 조정';

  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    you,
    '과(와) ',
    sex_count,
    '회 관계를 가졌다',
    ...sleep_info,
    ...prison_info,
  ];

  get_sex_sleep_exp = (sleep_count) => [
    ', 그중 수면 중 관계 ',
    sleep_count,
    '회',
  ];

  get_sex_prison_exp = (prison_count) => [
    ', 감금 ',
    prison_count,
    '회',
  ];

  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    '다른 캐릭터와 총 ',
    sex_count,
    '회 관계를 가졌다',
    ...sleep_info,
    ...prison_info,
  ];

  get_sex_sleep_exp_you = (sleep_count) => [
    ', 그중 수면 중 관계를 당한 횟수 ',
    sleep_count,
  ];

  get_sex_prison_exp_you = (prison_count) => [
    ', 감금당한 횟수 ',
    prison_count,
  ];

  sex_header_abl = '성애 능력';
  get_sex_abl_entry = (abl, level) => [abl, ': ', level];
  sex_header_jewel = '보유 인자';
  sex_header_mark = '획득 각인';
  sex_image_bt_change_template = '조교 스탠딩 CG 변경 (현재: %CURRENT%)';
  sex_image_set_template = '제%SET%세트';
  sex_image_set_common = '공용';
  sex_image_common_info = '공용 조교 스탠딩 CG 사용';
  sex_image_personal_info = '전용 조교 스탠딩 CG 사용 가능';

  exp_mouth_title = '정보【입】';
  exp_mouth_gift_desc =
    '매끈하게 생긴 입술과 구강. 타고난 흡입력만으로도 상대의 힘을 빼놓는다';
  exp_mouth_trained_desc =
    '언제 어디서나 근질거리고 허전하다…… 이미 음란한 입술이 되었다';
  exp_mouth_drink_semen = '입술에 옅은 백탁이 남아 있다……';
  exp_mouth_drink_semen_template =
    '조금 전 정액 %SEMEN%ml를 마신 흔적이 있다';

  get_exp_mouth_kiss = (date, chara) => [
    '첫 키스는 ',
    date,
    ', ',
    chara,
    '에게 바쳤다',
  ];

  get_exp_mouth_unknown_kiss = (date, chara) => [
    '실은 첫 키스는 이미 ',
    date,
    '에 ',
    chara,
    '에게 빼앗겼다',
  ];

  get_exp_mouth_kiss_count = (count) => ['키스 횟수 ', count];

  get_exp_mouth_blow_job = (date, chara) => [
    date,
    ', ',
    chara,
    '과(와) 이 입의 또 다른 사용법을 알아냈다',
  ];

  get_exp_mouth_be_blow_job = (date, chara) => [
    date,
    ', ',
    chara,
    '에게 이 입의 또 다른 사용법을 배웠다',
  ];

  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    '실은 ',
    date,
    '에 이미 처음으로 ',
    chara,
    '에게 사용되고 있었다',
  ];

  get_exp_mouth_suck_count = (count) => ['몸을 애무한 횟수 ', count];
  get_exp_mouth_blow_job_count = (count) => ['성기를 입으로 애무한 횟수 ', count];

  get_exp_mouth_drink_semen = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '의 정액 맛을 보았고, 그 비릿한 냄새에도 점차 끌리기 시작했다',
  ];

  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    '실은 ',
    date,
    '부터 이미 ',
    chara,
    '의 정액 맛에 익숙해져 있었다',
  ];

  get_exp_mouth_drink_semen_count = (count) => ['마신 정액 ', count, 'ml'];
  exp_mouth_poisoned_sens =
    '따뜻한 정액을 마실 때마다 목구멍이 견딜 수 없이 근질거린다';
  exp_mouth_poisoned_meek =
    '따뜻한 정액을 마실 때마다 행복감을 느낀다';
  exp_mouth_poisoned_both =
    '따뜻한 정액을 마실 때마다 목구멍이 행복하게 근질거린다';

  get_exp_mouth_drink_secretion = (date, chara) => [
    date,
    ', ',
    chara,
    '의 은밀한 곳에서 처음으로 쾌락의 꿀을 맛보았다',
  ];

  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    '실은 ',
    date,
    '에 이미 ',
    chara,
    '의 애액을 마시게 되었다',
  ];

  get_exp_mouth_drink_secretion_count = (count) => ['마신 애액 ', count, 'ml'];

  get_exp_mouth_drink_milk = (date, chara) => [
    date,
    ', 배고픔 때문이 아니라 처음으로 ',
    chara,
    '의 가슴에서 젖을 마셨다. 맛은 마음에 들었을까?',
  ];

  get_exp_mouth_drink_milk_count = (count) => ['마신 모유 ', count, 'ml'];
  get_exp_mouth_orgasm = (count) => ['구강 쾌감으로 절정한 횟수 ', count];

  exp_breast_title = '정보【가슴】';
  exp_breast_summary_man = '단단한 흉근';
  exp_breast_nipple_pink = '분홍빛 작은 딸기';
  exp_breast_nipple_deep = '짙은 색의 작은 체리';
  exp_breast_nipple_inverted = '깊숙이 들어간 유두';

  get_exp_breast_summary_woman = (nipple, size) => [
    '끝에는 ',
    nipple,
    '가 있는 ',
    size,
    ' 가슴',
  ];

  exp_breast_gift_desc =
    '아름다운 곡선의 타고난 풍만한 가슴. 완벽한 탄력은 누구라도 시선을 멈추게 한다';
  exp_breast_trained_desc =
    '언제 어디서나 근질거리고 허전하다…… 이미 음란한 가슴이 되었다';
  exp_breast_milk =
    '옷 앞부분이 조금 젖어 있어도…… 의심하지 말자. 땀일 뿐이다……';
  exp_breast_milk_template =
    '클립 때문에 빠져나가지 못해 현재 모유 %MILK%ml가 고여 있다…… 유두가 아프다';

  get_exp_breast_self_milk = (date) => [
    date,
    ', 처음으로 스스로 유두를 자극해 세웠다',
  ];

  get_exp_breast_be_milk = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 유두를 자극받아 세워졌다',
  ];

  get_exp_breast_unknown_be_milk = (date, chara) => [
    '실은 이 가슴은 이미 ',
    chara,
    '의 장난감이다. ',
    date,
    '부터',
  ];

  get_exp_milk_count = (count) => ['가슴을 자극받은 횟수 ', count];

  get_exp_breast_tit_job = (date, chara) => [
    chara,
    '의 성기를 가슴으로 자극하는 법을 ',
    date,
    '에 알게 되었다',
  ];

  get_exp_breast_be_tit_job = (date, chara) => [
    chara,
    '에게 가슴으로 성기를 자극하는 법을 ',
    date,
    '에 배웠다',
  ];

  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    '실은 ',
    date,
    ' 이후로 가슴은 ',
    chara,
    '의 성기를 상대하는 데 익숙해져 있었다. 본인은 모르지만',
  ];

  get_exp_breast_tit_job_count = (count) => ['가슴으로 성기를 자극한 횟수 ', count];
  get_exp_breast_semen_count = (count) => ['가슴에 묻은 정액 ', count, 'ml'];

  get_exp_breast_milking = (date, chara, _, cup) => [
    date,
    ', ',
    chara,
    '에게 자신의 ',
    cup,
    ' 가슴에서 나온 모유를 처음 맛보게 했다',
  ];

  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    date,
    ', ',
    chara,
    '과(와) ',
    supporter,
    '에게 자신의 ',
    cup,
    ' 가슴에서 나온 모유를 처음 맛보게 했다',
  ];

  get_exp_breast_milking_count = (count) => ['수유한 횟수 ', count];
  get_exp_breast_milking_amount = (amount) => ['분비한 모유 ', amount, 'ml'];
  get_exp_breast_orgasm = (count) => ['가슴 쾌감으로 절정한 횟수 ', count];

  exp_body_title = '정보【몸】';
  exp_body_no_armpit_hair = '타고나길 털 없이 매끈한 겨드랑이';
  exp_body_clean_armpit_hair = '겨드랑이는 현재 매끈하게 제모되어 있다';
  get_exp_body_armpit_hair = (armpit_hair) => ['겨드랑이에는 ', armpit_hair];
  exp_body_trained_desc =
    '다른 사람의 체온을 갈망한다…… 육체 자체가 욕망에 물들어가고 있다';

  get_exp_body_face_semen = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '의 정액을 얼굴에 받았다',
  ];

  get_exp_body_unknown_face_semen = (date, chara) => [
    '실은 얼굴은 이미 ',
    date,
    '에 ',
    chara,
    '의 정액에 뒤덮였었다',
  ];

  get_exp_body_face_semen_count = (count, amount) => [
    '얼굴에 사정받은 횟수 ',
    count,
    ', 묻은 정액 ',
    amount,
    'ml',
  ];

  get_exp_body_body_sex = (date, chara) => [
    date,
    '은(는) 처음으로 몸으로 ',
    chara,
    '의 욕망을 받아들인 날',
  ];

  get_exp_body_be_body_sex = (date, chara) => [
    date,
    '은(는) 몸이 처음으로 ',
    chara,
    '의 욕망에 휘둘린 날',
  ];

  get_exp_body_unknown_be_body_sex = (date, chara) => [
    '실은 ',
    date,
    '부터 잠든 얼굴도, 숨결도, 무방비한 몸도 이미 ',
    chara,
    '에게 맡겨지고 있었다',
  ];

  get_exp_body_body_sex_count = (count) => ['몸으로 상대를 자극한 횟수 ', count];
  get_exp_body_semen_amount = (amount) => ['몸에 묻은 정액 ', amount, 'ml'];
  exp_body_poisoned_sens =
    '따뜻한 정액이 피부에 닿을 때마다 견딜 수 없이 근질거린다';
  exp_body_poisoned_meek =
    '따뜻한 정액이 피부에 닿을 때마다 행복감을 느낀다';
  exp_body_poisoned_both =
    '따뜻한 정액이 피부에 닿을 때마다 행복하게 근질거린다';
  get_exp_body_orgasm = (count) => ['신체 쾌감으로 절정한 횟수 ', count];

  exp_hf_title = '정보【손발】';
  exp_hf_header_hand = '정보【손】';
  exp_hand_gift_desc =
    '애무는 신기에 가깝다. 손가락의 움직임만으로도 상대의 정신을 녹인다';

  get_exp_hf_hand_job = (date, chara) => [
    '손가락은 가장 원초적이고 다루기 쉬운 도구다. ',
    date,
    ', ',
    chara,
    ' 덕분에 그 사실을 알게 됐다',
  ];

  get_exp_hf_self_hand_job = (date) => [
    '손가락은 가장 원초적이고 다루기 쉬운 도구다. ',
    date,
    ', 스스로 그 사실을 알게 됐다',
  ];

  get_exp_hf_be_hand_job = (date, chara) => [
    '손가락은 가장 원초적이고 다루기 쉬운 도구다. ',
    chara,
    '에게 ',
    date,
    '에 그것을 배웠다',
  ];

  get_exp_hf_unknown_be_hand_job = (date, chara) => [
    '실은 ',
    date,
    ', 손가락은 이미 ',
    chara,
    '의 애액 냄새가 배어 있었다',
  ];

  get_exp_hf_hand_job_count = (count) => ['손으로 성기를 자극한 횟수 ', count];
  get_exp_hf_touch_vagina_count = (count) => ['여성기를 자극한 횟수 ', count];
  get_exp_hf_touch_anal_count = (count) => ['항문을 자극한 횟수 ', count];
  get_exp_hf_touch_body_count = (count) => ['몸을 어루만진 횟수 ', count];
  get_exp_hf_touch_breast_count = (count) => ['가슴을 만진 횟수 ', count];

  exp_hf_header_foot = '정보【발】';
  exp_foot_gift_desc =
    '다리의 움직임에는 조금의 오차도 없다. 발을 이용한 자극은 신기에 가깝다';

  get_exp_hf_foot_job = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '의 성기를 발밑에서 자극했다',
  ];

  get_exp_hf_unknown_be_foot_job = (date, chara) => [
    '실은 발과 발가락도 이미 ',
    chara,
    '의 장난감이 됐다. ',
    date,
    ' 이후로 걸을 때조차 허전함을 느낀다',
  ];

  get_exp_hf_foot_job_count = (count) => ['발로 성기를 자극한 횟수 ', count];
  get_exp_hf_step_on_vagina_count = (count) => ['발로 여성기를 자극한 횟수 ', count];
  get_exp_hf_step_on_body_count = (count) => ['몸을 밟은 횟수 ', count];

  get_exp_pv_pubic_hair = (pubic_hair) => ['하복부에는 ', pubic_hair];

  exp_penis_title = '정보【음경】';
  exp_penis_no_pubic_hair = '타고나길 매끈하고 무모';
  exp_penis_clean_pubic_hair = '하복부는 현재 매끈하게 제모되어 있다';
  exp_penis_drug = '약의 힘으로 생긴';

  get_exp_penis_summary = (drug, color, size) => [
    '아래에는 ',
    drug,
    ' ',
    color,
    '빛의 ',
    size,
    ' 음경이 있다',
  ];

  exp_penis_gift_desc =
    '흠잡을 데 없이 강인한 성기. 흘러나오는 분비액만으로도 생명력이 느껴질 정도다';
  exp_penis_trained_desc =
    '사정 조절이 느슨해져 조금만 자극해도 쉽게 흘러나온다';

  get_exp_penis_lose_virgin = (date, chara) => [
    date,
    ', 동정을 ',
    chara,
    '에게 바쳤다',
  ];

  get_exp_penis_lose_virgin_sleep = (date, chara) => [
    date,
    ', 잠든 사이 동정을 ',
    chara,
    '에게 바쳤다',
  ];

  get_exp_penis_be_lose_virgin = (date, chara) => [
    '동정은 ',
    date,
    '에 ',
    chara,
    '에게 빼앗겼다',
  ];

  get_exp_penis_unknown_be_lose_virgin = (date, chara) => [
    '실은 이미 ',
    date,
    '에 ',
    chara,
    '에게 동정을 잃고 있었다',
  ];

  get_exp_penis_fuck_body_count = (count) => ['몸에 삽입한 횟수 ', count];
  get_exp_penis_fuck_vagina_count = (count) => ['질에 삽입한 횟수 ', count];
  get_exp_penis_fuck_anal_count = (count) => ['항문에 삽입한 횟수 ', count];

  get_exp_penis_cum_semen_exp = (date, chara, _, amount) => [
    '처음으로 ',
    chara,
    '의 몸에 정액 ',
    amount,
    'ml를 남긴 날은 ',
    date,
  ];

  get_exp_penis_unknown_cum_semen_exp = (date, chara, _, amount) => [
    '실은 ',
    date,
    '에 이미 ',
    chara,
    '에게 정액 ',
    amount,
    'ml를 짜내고 있었다',
  ];

  get_exp_penis_cum_count = (count) => ['사정 횟수 ', count];
  get_exp_penis_cum_amount = (amount) => ['사정한 정액 총량 ', amount, 'ml'];

  get_exp_penis_fuck_sleep_vagina = (count, you) => [
    '잠든 틈에 ',
    you,
    '에게 삽입한 횟수 ',
    count,
  ];

  get_exp_penis_fuck_sleep_vagina_you = (count) => [
    '잠든 틈에 다른 캐릭터에게 삽입한 횟수 ',
    count,
  ];

  get_exp_penis_be_sleep_fuck = (count) => [
    '잠든 틈에 관계를 당하고도 눈치채지 못한 횟수 ',
    count,
  ];

  exp_vagina_title = '정보【여성기】';
  exp_vagina_no_pubic_hair = '타고나길 털 없이 매끈하다';
  exp_vagina_clean_pubic_hair = '현재 매끈하게 제모되어 있다';
  exp_vagina_pink = '옅고 사랑스러운 색';
  exp_vagina_purple = '붉고 보랏빛을 띤 색';
  exp_vagina_deep = '짙고 성숙한 색';
  get_exp_vagina_summary = (color) => [color, '의 여성기를 지녔다'];
  exp_vagina_gift_desc =
    '살아 있는 듯 조여드는 타고난 명기. 한 번 들어온 상대는 쉽게 빠져나가기 어렵다';
  exp_vagina_clitoris_trained_desc =
    '가볍게 스치기만 해도 금세 충혈된다…… 이미 몹시 예민해졌다';
  exp_vagina_vagina_trained_desc =
    '하루 종일 애액을 흘리며 언제든 삽입을 기다리는 듯하다…… 이미 몹시 예민해졌다';
  exp_vagina_semen = '허벅지 안쪽에 희끗한 흔적이 남아 있다……';
  exp_vagina_semen_template =
    '안에는 아직 정액이 약 %SEMEN%ml 남아 있다';

  get_exp_vagina_lose_virgin = (date, chara, _, penis) => [
    date,
    ', 처녀를 ',
    chara,
    '의 ',
    penis,
    ' 크기의 성기에 바쳤다',
  ];

  get_exp_vagina_lose_virgin_sleep = (date, chara, _, penis) => [
    date,
    ', 잠든 사이 처녀를 ',
    chara,
    '의 ',
    penis,
    ' 크기의 성기에 잃었다',
  ];

  get_exp_vagina_be_lose_virgin = (date, chara, _, penis) => [
    '처녀는 ',
    date,
    '에 ',
    chara,
    '의 ',
    penis,
    ' 크기의 성기에 빼앗겼다',
  ];

  get_exp_vagina_unknown_be_lose_virgin = (date, chara, _, penis) => [
    '실은 이미 ',
    date,
    '에 ',
    chara,
    '의 ',
    penis,
    ' 크기의 성기에 처녀를 잃고 있었다',
  ];

  get_exp_vagina_vagina_touched_count = (count) => ['여성기를 자극받은 횟수 ', count];
  get_exp_vagina_fucked_count = (count) => ['삽입받은 횟수 ', count];

  get_exp_vagina_cumed_exp = (date, chara, _, amount) => [
    chara,
    '의 정액 ',
    amount,
    'ml를 처음 받아들인 날은 ',
    date,
  ];

  get_exp_vagina_unknown_cumed_exp = (date, chara, _, amount) => [
    '실은 소중한 질과 자궁은 이미 ',
    date,
    '에 ',
    chara,
    '의 정액 ',
    amount,
    'ml를 받아들였다',
  ];

  get_exp_vagina_out_semen = (amount) => ['밖에 묻은 정액 ', amount, 'ml'];

  get_exp_vagina_cumed_semen = (count, amount) => [
    '내부 사정을 받은 횟수 ',
    count,
    ', 안에 들어온 정액 ',
    amount,
    'ml',
  ];

  exp_vagina_poisoned_sens =
    '따뜻한 정액을 받을 때마다 자궁이 견딜 수 없이 근질거린다';
  exp_vagina_poisoned_meek =
    '따뜻한 정액을 받을 때마다 행복감을 느낀다';
  exp_vagina_poisoned_both =
    '따뜻한 정액을 받을 때마다 자궁이 행복하게 근질거린다';

  get_exp_vagina_squirt_exp = (date, chara) => [
    date,
    ', ',
    chara,
    '의 앞에서 처음으로 분비액을 뿜었다',
  ];

  get_exp_vagina_squirt_exp_both = (date, chara, supporter) => [
    date,
    ', ',
    chara,
    '과(와) ',
    supporter,
    '의 앞에서 처음으로 분비액을 뿜었다',
  ];

  get_exp_vagina_squirt_exp_self = (date) => [
    date,
    ', 처음으로 스스로 분비액을 뿜었다',
  ];

  get_exp_vagina_unknown_squirt_exp = (date, chara) => [
    '실은 ',
    date,
    '에 이미 ',
    chara,
    '에게 첫 분비를 보이고 있었다',
  ];

  get_exp_vagina_unknown_squirt_exp_both = (date, chara, supporter) => [
    '실은 ',
    date,
    '에 이미 ',
    chara,
    '과(와) ',
    supporter,
    '에게 첫 분비를 보이고 있었다',
  ];

  get_exp_vagina_unknown_squirt_exp_self = (date) => [
    '실은 ',
    date,
    '에 자신도 모르게 첫 분비를 하고 있었다',
  ];

  get_exp_vagina_clitoris_orgasm = (count) => ['클리토리스로 절정한 횟수 ', count];
  get_exp_vagina_vagina_orgasm = (count) => ['질로 절정한 횟수 ', count];

  get_exp_vagina_squirt_count = (count, amount) => [
    '분출 횟수 총 ',
    count,
    '회, 분비한 애액 ',
    amount,
    'ml',
  ];

  get_exp_vagina_squirt_amount = (amount) => [
    '분비한 애액 총량 ',
    amount,
    'ml',
  ];

  get_exp_vagina_fuck_sleep_penis = (count, you) => [
    '잠든 틈에 ',
    you,
    '에게 관계를 시도한 횟수 ',
    count,
  ];

  get_exp_vagina_fuck_sleep_penis_you = (count) => [
    '잠든 틈에 다른 캐릭터에게 관계를 시도한 횟수 ',
    count,
  ];

  get_exp_vagina_be_sleep_fuck = (count) => [
    '잠든 틈에 관계를 당하고도 눈치채지 못한 횟수 ',
    count,
  ];

  exp_vagina_pregnant_in_growth = '아직 초경 전';
  exp_vagina_pregnant_menstrual_period = '생리 중';
  exp_vagina_pregnant_too_many_birth = '더 이상 임신할 수 없다';
  exp_vagina_pregnant_timer_template = '%DESC% (%TIMER%주)';
  exp_vagina_pregnant_egg_prepared = '난자가 수정을 기다리고 있다❤️';
  exp_vagina_pregnant_egg_growth = '새로운 난자가 자라는 중';
  exp_vagina_pregnant_egg_out = '난자가 기능을 잃어 배출을 기다리고 있다';
  exp_vagina_pregnant_prob_template = '%DESC% (임신 확률 %PROB%%)';
  exp_vagina_pregnant_desc_resume =
    '아이는 무사히 태어났다. 지금은 몸을 회복하는 데 집중할 때';
  exp_vagina_pregnant_desc_no =
    '아기방은 새로운 생명을 기다리고 있다❤️';
  exp_vagina_pregnant_desc_embryo =
    '작은 새 생명이 이미 자라고 있다';
  exp_vagina_pregnant_desc_fetal =
    '태반이 완전히 형성됐다. 산모와 아이 모두 충분한 영양이 필요하다';
  exp_vagina_pregnant_desc_late =
    '태아는 마지막 성숙 단계에 들어섰고, 배는 크게 불러 있다';
  exp_vagina_pregnant_desc_pre_birth =
    '새 생명을 맞이할 때가 가까워졌다. 준비를 갖출 때다';
  exp_vagina_pregnant_desc_showing =
    '배가 눈에 띄게 크게 불러 있다';
  exp_vagina_pregnant_desc_known =
    '겉으로는 아직 큰 변화가 없지만 생활의 미묘한 변화와 검진 결과가 새 생명을 알리고 있다';

  get_exp_vagina_pregnant_father = (chara) => [
    '아이의 아버지는 ',
    chara,
    '인 것으로 확인됐다',
  ];

  get_exp_vagina_pregnant_father_you = (you) => [
    you,
    '은(는) 아이의 아버지가 ',
    you,
    ' 자신이라는 것을 알고 있다',
  ];

  exp_anal_title = '정보【항문】';
  exp_anal_gift_desc =
    '단단하게 조여드는 타고난 항문. 한 번 받아들인 상대를 쉽게 놓아주지 않는다';
  exp_anal_trained_desc =
    '체온으로 가득 채워지기를 갈망한다…… 이미 몹시 예민해졌다';
  exp_anal_semen = '바지 뒤쪽이 조금 젖어 있다……';
  exp_anal_semen_template =
    '항문 안에 정액 %SEMEN%ml가 남아 있기 때문일 것이다';

  get_exp_anal_anal_sex_exp = (date, chara) => [
    date,
    ', ',
    chara,
    ' 덕분에 처음으로 항문의 성적 의미를 알게 됐다',
  ];

  get_exp_anal_be_anal_sex_exp = (date, chara) => [
    date,
    ', ',
    chara,
    '에게 처음으로 항문의 성적 의미를 배웠다',
  ];

  get_exp_anal_unknown_be_anal_sex_exp = (date, chara) => [
    '실은 ',
    date,
    '에 이미 ',
    chara,
    '에게 자극받고 있었다. 이제 이전으로 돌아가긴 어렵다',
  ];

  get_exp_anal_anal_sex_count = (count) => ['항문으로 상대를 자극한 횟수 ', count];

  get_exp_anal_cum_in_anal_count = (count, amount) => [
    '내부 사정을 받은 횟수 ',
    count,
    ', 안에 들어온 정액 ',
    amount,
    'ml',
  ];

  exp_anal_poisoned_sens =
    '따뜻한 정액을 받을 때마다 직장이 견딜 수 없이 근질거린다';
  exp_anal_poisoned_meek =
    '따뜻한 정액을 받을 때마다 행복감을 느낀다';
  exp_anal_poisoned_both =
    '따뜻한 정액을 받을 때마다 직장이 행복하게 근질거린다';
  get_exp_anal_orgasm = (count) => ['항문 쾌감으로 절정한 횟수 ', count];

  exp_sm_title = '정보【가학·피학】';
  exp_sm_sex_title_0 = '암말';
  exp_sm_sex_title_1 = '수말';
  exp_sm_sex_title_10 = '후타나리 암말';
  exp_sm_sadism_talent_template =
    '타고나길 가학을 자신의 본분처럼 여기는 도S %TITLE%. 상대를 괴롭히는 상상만으로도 흥분한다';
  exp_sm_machoism_abuse_talent_template =
    '타고나길 피학을 자신의 본분처럼 여기는 도M %TITLE%. 모욕당하는 상상만으로도 흥분한다';
  exp_sm_machoism_hit_talent_template =
    '타고나길 피학을 자신의 본분처럼 여기는 도M %TITLE%. 맞는 상상만으로도 흥분한다';
  exp_sm_machoism_all_talent_template =
    '타고나길 피학을 자신의 본분처럼 여기는 도M %TITLE%. 괴롭힘당하는 상상만으로도 흥분한다';

  get_exp_sm_sadism_exp = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '을(를) 괴롭혔다',
  ];

  get_exp_sm_abuse_count = (count) => ['다른 사람을 모욕한 횟수 ', count];
  get_exp_sm_hit_count = (count) => ['다른 사람을 때린 횟수 ', count];
  get_exp_sm_sadism_count = (count) => ['가학감으로 절정한 횟수 ', count];

  get_exp_sm_machoism_exp = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 괴롭힘을 당했다',
  ];

  get_exp_sm_be_abused_count = (count) => ['모욕당한 횟수 ', count];
  get_exp_sm_be_hit_count = (count) => ['맞은 횟수 ', count];
  get_exp_sm_machoism_count = (count) => ['피학감으로 절정한 횟수 ', count];

  desc_conjunction = '\n동시에, ';
  human_info = '그저 평범한 인간이다';
  no_reward_info = '아직 자랑할 만한 전적은 없다';
  cannot_join_race_info = '레이스에 출주할 수 없다';
  growth_info = '아직 성장 중이다';
  no_exp_info = '아직 관련 경험이 없다';
  no_known_info = '아직 충분히 파악하지 못했다';
  no_part_info = '이 부위는 존재하지 않는다';

  prev_template = '이전 캐릭터 - %NAME%';
  next_template = '다음 캐릭터 - %NAME%';

  get_child_number(num) {
    const first = '장';
    const second = '차';
    const n10 = ['십', '이십', '삼십', '사십'];
    const n0 = ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    if (num === 1) {
      return first;
    } else if (num === 2) {
      return second;
    } else if (num < 10) {
      return n0[num - 1];
    } else if (num < 50) {
      let ret = n10[Math.floor(num / 10) - 1];
      if (num % 10 > 0) {
        ret += n0[(num % 10) - 1];
      }
      return ret;
    }
    return num.toString();
  }
};
