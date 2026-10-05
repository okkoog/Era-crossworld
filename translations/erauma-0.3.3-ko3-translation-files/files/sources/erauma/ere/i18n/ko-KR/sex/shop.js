module.exports = class extends require('#/i18n/ja-JP/sex/shop') {
  abl_tab = '능력 습득';
  talent_tab = '특성 변경';
  mark_tab = (has_inmon) => (has_inmon ? '각인 조정' : '각인 제거');
  transfer_tab = '인자 채보';
  update_end = '강화 종료';

  jewel_header_template = '%NAME%의 인자';
  abl_header_template = '%NAME%의 능력';
  talent_header_template = '%NAME%의 특성';
  mark_header_template = '%NAME%의 각인';
  inmon_header_template = '%NAME%의 음문';
  transfer_header = '채보의 술법';

  price_tip_template = '필요: %PRICE%';
  cond_tip_template = '%COND% %EXP% (현재 %NOW%)';
  multi_cond_tip_template = '%COND% 정액 총 부착량(ml) (현재 %ALL% = %NOW%)';
  jewel_price_template = '%JEWEL%×%COUNT%';
  price_splitter = ' + ';

  get_price_info = (jewel_name, cost, all, chara) => [
    jewel_name,
    ': ',
    ...this.get_addition_price_info(cost, all, chara),
  ];
  get_addition_price_info = (cost, all, chara) => [
    cost,
    '/',
    all,
    ' (',
    chara,
    ')',
  ];

  bt_upgrade = '↑';
  bt_downgrade = '↓';

  abl_tab_tooltip =
    '* 능력명을 누르면 설명 표시. ↑/↓로 올리고 내리기\n' +
    '** 해당 부위의 조교 인자가 부족하면 2배의 인자를 사용해 차액을 보충할 수 있다';
  cf_upgrade = '강화';
  cf_downgrade = '약화';
  get_abl_upgrade_confirm = (chara, abl, upgrade, new_level) => [
    chara,
    '의 ',
    abl,
    '을(를) ',
    upgrade,
    '해 ',
    new_level,
    '(으)로 만들까? 소비: ',
  ];

  bt_add = '특성 획득';
  bt_remove = '특성 제거';
  bt_t_up = '감도 올리기';
  bt_t_down = '감도 내리기';
  milk_other_condition = '[모유약제]에 의해 약물 수유 중 (현재: %STATUS%)';
  get_talent_tab_tooltip = (limit) =>
    '* 특성명을 누르면 설명 표시. 뒤쪽 버튼으로 감도나 특성 조작\n' +
    '** 해당 부위의 조교 인자가 부족하면 2배의 인자를 사용해 차액을 보충할 수 있다\n' +
    `*** 최고 감도로 만들 수 있는 부위 수: ${limit}`;
  cf_add = '획득';
  cf_remove = '제거';
  cf_s_up = '상승';
  cf_s_down = '하락';
  get_talent_change_confirm = (chara, talent, change) => [
    chara,
    '의 ',
    talent,
    ' 특성을 ',
    change,
    '할까? 소비: ',
  ];
  get_sens_change_confirm = (chara, talent, change) => [
    chara,
    '의 ',
    talent,
    '을(를) ',
    change,
    '시킬까? 소비: ',
  ];
  milk_slave_warning = '(음문 옵션 [젖노예]가 해제된다!)';

  ch_cost_meek = '순종 인자로 반항 각인 제거';
  ch_cost_pain = '고통 인자로 반항 각인 제거';
  ch_cost_fear = '공포 인자로 반항 각인 제거';
  ch_cost_shame = '수치 인자로 반항 각인 제거';
  clean_hate_tooltip =
    '* 각인이 있을 때 대응하는 인자를 사용해 반항 각인을 제거할 수 있다\n** 같은 등급이라면 고통·공포·수치가 순종보다 저렴하지만 부작용이 생길 수 있다';
  bt_clean_pain = '순종 인자로 고통 각인 제거';
  bt_clean_shame = '순종 인자로 수치 각인 제거';
  clean_other_tooltip =
    '* 제거할 각인이 낮고 동심 각인이 높을수록 순종 인자 소비량이 줄어든다';
  bt_upgrade_inmon = '음문 등급 올리기';
  bt_get_inmon = '쾌락 각인을 음문으로 변환';
  unlock_inmon_tooltip =
    '* 일심동체의 정도(동심 각인)가 높을수록 음문 강화 비용이 저렴하다';
  sticker_tooltip = '음문 스티커에는 옵션을 붙일 수 없다';
  inmon_slave_template = '현재 옵션: %SLAVE%';
  inmon_slave_desc_template = '효과: %DESC%';
  inmon_plugin_header = '사용 가능한 플러그인';
  inmon_plugin_tooltip =
    '* 구매로 해금한 플러그인은 이후 순종 인자를 소비하지 않는다\n** 같은 계통 효과는 한 번에 하나만 장착할 수 있다';
  get_inmon_warning =
    '음문을 새겨 상대를 예속시키는 것은 극도로 비도덕적이며 사회적 평가에도 큰 영향을 준다! 계속할까?';
  new_option_header = '새 음문 옵션 선택';
  change_option_tooltip =
    '* 옵션 변경에는 순종 인자 1,000 필요\n** 옵션 해제는 무료';
  get_clean_hate_confirm = (chara, jewel, hate) => [
    chara,
    '의 ',
    jewel,
    '을(를) 사용해 ',
    hate,
    '을(를) 1단계 제거할까? 소비: ',
  ];
  get_clean_other_confirm = (chara, jewel, mark) => [
    chara,
    '의 ',
    jewel,
    '을(를) 사용해 ',
    mark,
    '을(를) 1단계 제거할까? 소비: ',
  ];
  get_get_inmon_confirm = (chara, m_pleasure, m_inmon) => [
    chara,
    '의 ',
    m_pleasure,
    '을(를) ',
    m_inmon,
    '(으)로 바꿀까? 소비: ',
  ];
  get_upgrade_inmon_confirm = (chara, m_inmon, new_inmon) => [
    chara,
    '의 ',
    m_inmon,
    '을(를) ',
    new_inmon,
    '(으)로 강화할까? 소비: ',
  ];
  get_change_option_confirm = (chara, option) => [
    chara,
    '의 음문 옵션을 ',
    option,
    '(으)로 바꿀까? 소비: ',
  ];
  get_load_plugin_confirm = (chara, plugin) => [
    chara,
    '에게 ',
    plugin,
    '을(를) 해금하고 장착할까? 소비: ',
  ];
  clean_slave_option_confirm = '옵션을 해제할까?';
  s_milk_warning_man = '남성은 모유를 상납할 수 없다';
  s_preg_warning_man = '남성은 임신할 수 없다';
  s_milk_warning_milk = '[모유체질]만 모유를 상납할 수 있다';
  s_preg_warning_plugin = '불임의 가호를 받고 있다';
  s_inherit_warning_race = '%UMA%만 인자를 상납할 수 있다';
  s_assi_warning_dup = '이미 보조노예가 한 명 있다';

  bt_transfer = '%NAME%의 %JEWEL%을(를) %YOU%에게 이전';
  transfer_tab_tooltip =
    '* 캐릭터의 부위 인자와 순종 인자 10,000을 %YOU%의 인자 10으로 바꿀 수 있다\n' +
    '** 캐릭터의 고통·공포·수치 인자 10,000을 %YOU%의 순종 인자 1로 바꿀 수 있다';
  get_transfer_confirm = (chara, cost, all, you, you_get) => [
    chara,
    '의 ',
    cost,
    ' (합계 ',
    all,
    ')을(를) ',
    you,
    '의 ',
    you_get,
    '(으)로 바꿀까?',
  ];
};
