module.exports = class extends require('#/i18n/ja-JP/race/inherit') {
  addition_jewel = ' (+%COUNT%)';
  gene_available_template = '앞으로 %COUNT%회 상속 가능';

  ui_inherit_enabled = '인자 상속 가능';
  select_inherit_or_god = '인자 상속 시기다. 진행할까?';
  sig_inherit = '인자 상속!';
  sig_god = '평범하게 참배한다';

  get_jewel_list = (pink, blue, white) => [pink, ' · ', blue, ' · ', white];

  header_template = '%NAME%에게 인자 상속';
  get_gene_list = (genes) => ['인자 능력: ', ...genes];
  list_header = '인자 능력 목록';
  hd_name = '명칭';
  hd_learnt = '습득';
  hd_count = '수량';
  hd_price = '가격';
  bt_learn = '습득';
  bt_convert = '남은 인자를 스킬 Pt로 변환';
  inherit_tip =
    '* 담당의 인자가 부족하면 차액의 2배를 지불해 상속을 도울 수 있다';

  bt_select_chara = '상속할 캐릭터 선택';
  not_enough_chara_tip = '【상속 가능한 캐릭터가 2명 이상 필요】';

  bt_remove_genes = '인자 능력을 모두 잊는다';
  player_genes_limit_tip_template =
    '* 우마무스메 트레이너가 상속할 수 있는 인자 능력은 최대 %COUNT%개';

  inherit_chara_header = '인자를 상속할 수 있는 캐릭터';

  have_inherited = '상속 완료';
  select_chara_tip =
    '* 2명을 동시에 선택해야 인자 상속을 시작할 수 있다\n** 상속을 받은 쪽은 상속을 해준 쪽의 육성이 끝날 때까지 재육성할 수 없다!';

  get_inherit_success = (chara, jewels) => [
    '상속 성공!',
    chara,
    '은(는) 다음을 얻었다:',
    { isBr: true },
    ...jewels,
  ];

  remove_genes_confirm =
    '인자 능력을 모두 잊을까? 이미 상승한 능력 상한은 사라지지 않는다';
  get_remove_genes_result = (you) => [
    '【',
    you,
    '은(는) 모든 인자 능력을 잊었다…… 적성, 상속 능력, 상속 스킬이 사라졌다】',
  ];
  convert_jewels_confirm_template = '남은 인자를 스킬 Pt %PT%로 변환할까?';

  get_inherit_result = (chara, attr_or_adapt, result) => [
    chara,
    '의 ',
    attr_or_adapt,
    '은(는) 현재 ',
    result,
  ];

  get_price_info = (jewel_name, cost, all) => [jewel_name, '×', cost, '/', all];
  get_price_info_additional = (jewel_name, cost, you, you_cost, you_all) => [
    ...this.get_price_info(jewel_name, cost, cost),
    '(',
    you,
    '의 ',
    ...this.get_price_info(jewel_name, you_cost, you_all),
    ')',
  ];
  get_inherit_confirm = (price, chara, gene, available_info) => [
    ...price,
    '을(를) 사용해 ',
    chara,
    '에게 ',
    ...gene,
    '을(를) 상속할까?',
    available_info,
  ];
};
