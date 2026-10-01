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
};
