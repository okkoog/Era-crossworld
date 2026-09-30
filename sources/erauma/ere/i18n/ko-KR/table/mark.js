module.exports = class extends require('#/i18n/ja-JP/table/mark') {
  name_template = '%NAME% 각인';
  lv_template = 'Lv.%LEVEL%';

  n_pleasure = '쾌락';
  n_ero = '음문';
  n_meek = '동심';
  n_pain = '고통';
  n_shame = '수치';
  n_hate = '반발';

  a_pleasure = '쾌';
  a_ero = '음';
  a_meek = '동';
  a_pain = '고';
  a_shame = '치';
  a_hate = '반';
  a_iron = '강';

  abbr_template = '[%MARK%%LEVEL%]';
  mark_with_level = '%MARK% Lv.%LEVEL%';

  get_mark_with_level_stars = (
    mark_with_level,
    full_stars,
    empty_stars,
    divider = ' ',
  ) => [mark_with_level, divider, full_stars, empty_stars];

  s_title_name = '별칭';

  s_t_no = '성처리용 암말';
  s_t_milk = '착유용 암말';
  s_t_pregnant = '번식용 암말';
  s_t_worker = '헌금용 암말';
  s_t_inherit = '상속용 암말';
  s_t_furniture = '베개용 암말';
  s_t_assistant = '동석용 암말';

  s_option_name = '옵션';

  s_o_no = '없음';
  s_o_milk = '착유노예';
  s_o_pregnant = '임신노예';
  s_o_worker = '헌금노예';
  s_o_inherit = '인자노예';
  s_o_furniture = '베개노예';
  s_o_assistant = '보조노예';

  s_description_name = '효과';

  s_d_no = '-';
  s_d_milk = '매주 모유 한 잔을 바친다.';
  s_d_pregnant = '미임신 상태에서는 항상 위험기. 임신 확률 +10%, 임신 진행 속도 +100%.';
  s_d_worker = '매주 일정량의 우마코인을 바친다.';
  s_d_inherit = '매주 일정량의 상속 인자를 바친다.';
  s_d_furniture = '동침 중 수면간과 납치를 모두 막고, 휴식 시 체력 회복량을 높인다.';
  s_d_assistant = '기본 조수로 지정되어 다른 캐릭터와의 조교에 부를 수 있다. 한 명만 지정 가능.';
};
