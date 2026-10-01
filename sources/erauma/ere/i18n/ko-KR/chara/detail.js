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
};
