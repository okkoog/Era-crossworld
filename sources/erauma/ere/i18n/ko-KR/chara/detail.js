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
  base_body_weight_fat = '행복해서 살이 쪘다……';
  base_body_weight_heavy = '소폭 증가';
  base_body_weight_normal = '잘 관리되고 있다';
  base_body_hidden = '더 이상의 데이터는 없다';
  get_base_female_info = (bust, cup, waist, hip) => [
    '쓰리 사이즈: B',
    bust,
    ' (',
    cup,
    ' Cup) · W',
    waist,
    ' · H',
    hip,
  ];
  get_base_hair_select = (chara) => [
    chara.get_colored_name(),
    '의 새 헤어스타일 선택',
  ];
  get_base_clothe_auto_select = (chara, clothe) => [
    '현재 ',
    chara.get_colored_name(),
    '은(는) 출주 시 상황과 기념일에 맞춰 옷을 입고, URA 시상식과 육성 종료 후 명예의 전당 주간에는 승부복 [',
    clothe,
    ']을(를) 입는다.',
  ];
  get_base_clothe_keep_some = (chara, clothe) => [
    '현재 ',
    chara.get_colored_name(),
    '은(는) 출주 시, URA 시상식, 육성 종료 후 명예의 전당 주간에 승부복 [',
    clothe,
    ']을(를) 입는다.',
  ];
  base_clothe_change_confirm = '갈아입을까?';
  base_clothe_bt_auto_select = '상황에 맞춰 선택';
  base_clothe_bt_keep_current = '그대로 유지';
  base_bt_comb_hair = '머리 빗기';

  edu_title = '육성 현황';
  get_edu_score = (score) => ['평가: ', score];
  edu_date_template = '%YEAR%년 %MONTH%월 %WEEK%주차';
  edu_date_with_playthrough_template =
    '%YEAR%년 %MONTH%월 %WEEK%주차 (%PLAYTHROUGH%회차)';
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
  skill_header_gene = '인자 상속';
  skill_no_gene = '미상속';
  skill_header_gene_available = '상속 가능한 인자';

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
  relation_no_relation = '신경 쓰이는 캐릭터가 없다';
  get_relation_take_care = (chara) => [chara, '을(를) 돌보는 중'];
  get_relation_be_taken_care = (chara) => [chara, '에게 돌봄받는 중'];
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
    '을(를) 출산',
  ];
  relation_family_children_template = '현재 %INFO%';
  relation_family_as_father_template = '자녀 %COUNT%명의 아버지';
  relation_family_as_mother_template = '자녀 %COUNT%명의 어머니';
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
  relation_no_family = '소개할 수 있는 캐릭터가 없다';
  relation_bt_change_callname_to_you_template = '%YOU%을(를) 부르는 호칭 변경';
  relation_bt_reset_callname_to_you_template = '%YOU%을(를) 부르는 호칭 초기화';
  relation_bt_change_callname_template =
    '이 캐릭터를 부르는 호칭 변경 (%CALLNAME%)';
  relation_bt_reset_callname = '이 캐릭터를 부르는 호칭 초기화';
  get_relation_change_callname_to_you_confirm = (chara, you) => [
    chara,
    '에게 ',
    you,
    '을(를) 뭐라고 부르게 할까?',
  ];
  get_relation_change_callname_confirm = (chara) => [chara, '을(를) 뭐라고 부를까?'];
  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    '은(는) 이제 ',
    callee,
    '을(를) ',
    callname,
    '이라고 부른다',
  ];

  sex_title = '성적 경험';
  sex_exp_slave_2_accept =
    '성노예의 역할을 받아들이고, 우마무스메님에게 봉사하는 것을 즐기고 있다';
  sex_exp_slave_2_reject =
    '성노예라는 신분에 저항하며, 비정상적으로 강렬한 육체의 쾌감에도 아직 빠져들지 않았다';
  sex_exp_slave_3_accept =
    '임신용 몸의 역할을 받아들이고, 우마무스메님의 새로운 생명을 잉태하는 기쁨을 맛보고 있다';
  sex_exp_slave_3_reject =
    '임신용 몸이라는 신분에 저항하며, 인간으로서의 긍지를 아직 버리지 않았다';
  sex_header_inmon = '음문 조정';
  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    you,
    '과(와) ',
    sex_count,
    '회 잠자리를 가졌다',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp = (sleep_count) => [', 그중 수면간 ', sleep_count, '회'];
  get_sex_prison_exp = (prison_count) => [', 감금 ', prison_count, '회'];
  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    '다른 캐릭터와 합계 ',
    sex_count,
    '회 잠자리를 가졌다',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp_you = (sleep_count) => [', 그중 수면간을 당한 횟수 ', sleep_count];
  get_sex_prison_exp_you = (prison_count) => [', 감금당한 횟수 ', prison_count];
  sex_header_abl = '성적 능력';
  get_sex_abl_entry = (abl, level) => [abl, ': ', level];
  sex_header_jewel = '보유 인자';
  sex_header_mark = '획득 각인';
  sex_image_bt_change_template = '조교 스탠딩 CG 변경 (현재: %CURRENT%)';
  sex_image_set_template = '%SET%번 세트';
  sex_image_set_common = '공용';
  sex_image_common_info = '공용 조교 스탠딩 CG 사용';
  sex_image_personal_info = '전용 조교 스탠딩 CG 사용 가능';

  exp_mouth_title = '정보【입】';
  exp_mouth_gift_desc =
    '모양이 잘 잡힌 입술과 구강. 타고난 흡착력은 어떤 상대라도 무장해제시킨다';
  exp_mouth_trained_desc = '언제 어디서든 근질거리고 허전하다…… 이미 음란한 입술이다';
  exp_mouth_drink_semen = '입술에 옅은 백탁이 남아 있다……';
  exp_mouth_drink_semen_template = '조금 전 정액 %SEMEN%ml를 마신 모양이다';
  get_exp_mouth_kiss = (date, chara) => [
    '첫 키스는 ',
    date,
    ', ',
    chara,
    '에게 바쳤다',
  ];
  get_exp_mouth_unknown_kiss = (date, chara) => [
    '사실 첫 키스는 ',
    date,
    '에 이미 ',
    chara,
    '에게 빼앗겼다',
  ];
  get_exp_mouth_kiss_count = (count) => ['키스한 횟수 ', count];
  get_exp_mouth_blow_job = (date, chara) => [
    date,
    ', ',
    chara,
    '과(와) 이 입의 다른 사용법을 탐구했다',
  ];
  get_exp_mouth_be_blow_job = (date, chara) => [
    date,
    ', ',
    chara,
    '에게 이 입의 다른 사용법을 배웠다',
  ];
  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    '사실 ',
    date,
    '에 이미 처음으로 ',
    chara,
    '에게 사용당했다',
  ];
  get_exp_mouth_suck_count = (count) => ['몸을 달래 준 횟수 ', count];
  get_exp_mouth_blow_job_count = (count) => ['성기를 빨아 준 횟수 ', count];
  get_exp_mouth_drink_semen = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '의 정액을 맛봤고 그 비릿한 냄새에도 모르게 끌렸다',
  ];
  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    '사실 ',
    date,
    '에는 이미 ',
    chara,
    '의 정액 맛에 익숙해져 있었다',
  ];
  get_exp_mouth_drink_semen_count = (count) => ['마신 정액 ', count, 'ml'];
  exp_mouth_poisoned_sens = '따뜻한 정액을 마실 때마다 목이 근질거려 견딜 수 없다';
  exp_mouth_poisoned_meek = '따뜻한 정액을 마실 때마다 행복을 느낀다';
  exp_mouth_poisoned_both = '따뜻한 정액을 마실 때마다 목이 행복하게 근질거린다';
  get_exp_mouth_drink_secretion = (date, chara) => [
    date,
    ', ',
    chara,
    '의 질구에서 처음으로 쾌락의 꿀을 빨아 마셨다',
  ];
  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    '사실 ',
    date,
    '에 이미 ',
    chara,
    '의 애액을 마시게 됐다',
  ];
  get_exp_mouth_drink_secretion_count = (count) => ['마신 애액 ', count, 'ml'];
  get_exp_mouth_drink_milk = (date, chara) => [
    date,
    ', 배가 고파서가 아니라 처음으로 ',
    chara,
    '의 가슴을 빨았다. 맛은 마음에 들었을까?',
  ];
  get_exp_mouth_drink_milk_count = (count) => ['마신 모유 ', count, 'ml'];
  get_exp_mouth_orgasm = (count) => ['쾌감으로 절정한 횟수 ', count];

  exp_breast_title = '정보【가슴】';
  exp_breast_summary_man = '탄탄한 가슴 근육';
  exp_breast_nipple_pink = '분홍빛 작은 딸기';
  exp_breast_nipple_deep = '짙은 색의 작은 버찌';
  exp_breast_nipple_inverted = '깊은 화산호';
  get_exp_breast_summary_woman = (nipple, size) => [
    '끝은 ',
    nipple,
    '이고 ',
    size,
    '인 유방',
  ];
  exp_breast_gift_desc =
    '곡선이 아름다운 천부적인 풍유. 완벽한 탄력은 어떤 방문객도 발길을 멈추게 한다';
  exp_breast_trained_desc =
    '언제 어디서든 근질거리고 허전하다…… 이미 음란한 유방이다';
  exp_breast_milk = '앞섶이 조금 젖어 있어도…… 의심하지 마. 땀이니까……';
  exp_breast_milk_template =
    '클립에 막혀 지금 %MILK%ml의 모유가 고여 있다…… 유두가 아프다';
  get_exp_breast_self_milk = (date) => [
    date,
    ', 처음으로 스스로 유두를 애무해 세웠다',
  ];
  get_exp_breast_be_milk = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 유두를 애무당해 세워졌다',
  ];
  get_exp_breast_unknown_be_milk = (date, chara) => [
    '사실 그 가슴은 이미 ',
    chara,
    '의 장난감이다. ',
    date,
    '부터',
  ];
  get_exp_milk_count = (count) => ['농락당한 횟수 ', count];
  get_exp_breast_tit_job = (date, chara) => [
    chara,
    '의 성기는 가슴으로 흥분한다. ',
    date,
    '에 그 사실을 알게 됐다',
  ];
  get_exp_breast_be_tit_job = (date, chara) => [
    chara,
    '의 성기는 가슴으로 흥분한다. ',
    date,
    '에 그것을 배웠다',
  ];
  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    '사실 ',
    date,
    ' 이후로 가슴은 ',
    chara,
    '의 성기를 섬기는 데 익숙해져 있다. 본인은 모르지만',
  ];
  get_exp_breast_tit_job_count = (count) => ['성기를 달래 준 횟수 ', count];
  get_exp_breast_semen_count = (count) => ['묻은 정액 ', count, 'ml'];
  get_exp_breast_milking = (date, chara, _, cup) => [
    date,
    ', ',
    chara,
    '에게 자신의 ',
    cup,
    ' 가슴에서 나온 것을 처음 맛보게 했다',
  ];
  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    date,
    ', ',
    chara,
    '과(와) ',
    supporter,
    '에게 자신의 ',
    cup,
    ' 가슴에서 나온 것을 처음 맛보게 했다',
  ];
  get_exp_breast_milking_count = (count) => ['수유한 횟수 ', count];
  get_exp_breast_milking_amount = (amount) => ['분비한 모유 ', amount, 'ml'];
  get_exp_breast_orgasm = (count) => ['쾌감으로 절정한 횟수 ', count];

  exp_body_title = '정보【몸】';
  exp_body_no_armpit_hair = '선천적으로 털 없이 매끈한 겨드랑이';
  exp_body_clean_armpit_hair = '겨드랑이는 지금 털 없이 매끈하다';
  get_exp_body_armpit_hair = (armpit_hair) => ['겨드랑이에는 ', armpit_hair];
  exp_body_trained_desc =
    '다른 사람의 온기를 원하고 있다…… 육체 자체가 음욕에 물들어 가고 있다';
  get_exp_body_face_semen = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 정액으로 얼굴을 뒤덮였다',
  ];
  get_exp_body_unknown_face_semen = (date, chara) => [
    '사실 얼굴은 ',
    date,
    '에 이미 ',
    chara,
    '의 정액으로 뒤덮였다',
  ];
  get_exp_body_face_semen_count = (count, amount) => [
    '얼굴에 사정당한 횟수 ',
    count,
    ', 묻은 정액 ',
    amount,
    'ml',
  ];
  get_exp_body_body_sex = (date, chara) => [
    date,
    '은(는) 처음으로 몸으로 ',
    chara,
    '의 성기와 욕망을 받아들인 날',
  ];
  get_exp_body_be_body_sex = (date, chara) => [
    date,
    '은(는) 몸이 처음으로 ',
    chara,
    '의 성기와 욕망으로 채워진 날',
  ];
  get_exp_body_unknown_be_body_sex = (date, chara) => [
    '사실 ',
    date,
    '부터 잠든 얼굴도 숨결도 무방비한 몸도 이미 ',
    chara,
    '의 욕망을 받아들이고 있었다',
  ];
  get_exp_body_body_sex_count = (count) => ['성기를 달래 준 횟수 ', count];
  get_exp_body_semen_amount = (amount) => ['묻은 정액 ', amount, 'ml'];
  exp_body_poisoned_sens = '따뜻한 정액이 닿을 때마다 피부가 근질거려 견딜 수 없다';
  exp_body_poisoned_meek = '따뜻한 정액이 닿을 때마다 행복을 느낀다';
  exp_body_poisoned_both = '따뜻한 정액이 닿을 때마다 피부가 행복하게 근질거린다';
  get_exp_body_orgasm = (count) => ['쾌감으로 절정한 횟수 ', count];

};
