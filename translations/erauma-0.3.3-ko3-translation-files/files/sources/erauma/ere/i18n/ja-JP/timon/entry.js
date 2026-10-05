// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/timon/entry.js
// 대상 함수/속성: bt_god_love_event_fuck_me, bt_god_love_event_preg_me, fc_mejiro_confirm, fc_mejiro_cum, fc_mejiro_free, fc_race_item_confirm, fc_race_item_no, fc_race_item_yes, get_it_arrive_location, get_it_basement_me, get_it_birthday, get_it_bs_awake, get_it_bs_back, get_it_bs_chara_eat, get_it_bs_chara_leave, get_it_bs_chara_sleep, get_it_bs_clock, get_it_bs_downgrade_security, get_it_bs_eat, get_it_bs_eat_uma_s, get_it_bs_fall_asleep, get_it_bs_find_escape, get_it_bs_fix, get_it_bs_lure, get_it_bs_rape, get_it_bs_release, get_it_bs_sleep, get_it_celebration, get_it_chara_not_in_recruit, get_it_chara_rape_in_sleeping, get_it_check_love, get_it_flatter, get_it_flatter_masters, get_it_goto_location, get_it_hb_info, get_it_heal_yandere, get_it_home_sex, get_it_in_recruit, get_it_income_annal_bonus, get_it_income_invest, get_it_income_salary, get_it_moon_well_together, get_it_multi_rape_in_sleeping, get_it_name_result, get_it_no_chara_in_recruit, get_it_npc_sleep, get_it_nt_back_info_from_foreign, get_it_nt_become_fat, get_it_nt_become_headache, get_it_nt_celebration_notification, get_it_nt_foreign_race_notification, get_it_nt_get_jewel, get_it_nt_get_milk, get_it_nt_have_penis, get_it_nt_inmon_inhert_slave, get_it_nt_inmon_milk_slave, get_it_nt_love_unlimit, get_it_nt_not_be_fat, get_it_nt_not_be_headache, get_it_nt_race_notification, get_it_nt_summer_confirm, get_it_nt_to_foreign_confirm, get_it_nt_train_level_up, get_it_office_cook, get_it_office_game, get_it_office_gift, get_it_office_prepare, get_it_office_rest, get_it_office_study, get_it_pregnant_slave_punish, get_it_pregnant_slave_reward, get_it_punish_avoid_race, get_it_recruit_disabled, get_it_self_goto_location, get_it_talk, get_it_train_lonely, get_it_train_take_care, get_it_train_together, get_it_unlock_escape, get_it_unlock_fail, get_it_unlock_success, get_npc_celebration, it_back_office, it_bs_battle_escape, it_bs_battle_fail, it_bs_battle_prison, it_bs_battle_success, it_bs_final_escape, it_bs_rescue, it_bs_strike_fail, it_bs_strike_success, it_force_back_office, it_hb_let_dad_name, it_hb_let_mom_name, it_hb_name_tip, it_hb_rename, it_hb_you_name, it_nt_back_info, it_nt_back_info_summer, it_nt_foreign_avoid_notification, it_nt_moon_well_cool_down, it_nt_race_contestants, it_nt_summer_chara_list_follow, it_nt_summer_chara_list_start, it_nt_summer_start_notification, it_pregnant_trainer_punish, it_pregnant_uma_punish, it_self_cook, it_self_game, it_self_rest, it_sell_fish_template, npc_accept_task, npc_bye, npc_out, npc_recruit_in_school, npc_recruit_out_school, npc_retry_task, npc_select, npc_sex, npc_talk, rec_km_b, rec_km_d, rec_km_ed, rec_km_er, rec_km_i, rec_km_l, rec_km_r, report_invincible_g1, report_invincible_three_crowns, report_tenn_sho, report_tenn_spr, strange, strange_desc
const { proxy_kojo_js } = require('#/i18n/tools');

class I18nTimon {
  static _ = new I18nTimon();

  recruit = proxy_kojo_js(require('#/i18n/ja-JP/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/ja-JP/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/ja-JP/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ja-JP/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/ja-JP/timon/base'));

  ero_c = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-others'));

  ero_sys = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/system'));
  act_desc_c = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/act-desc-common'));
  act_desc_r = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/act-desc-rape'));
  act_desc_s = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/act-desc-sleep'));

  daily_child = proxy_kojo_js(require('#/i18n/ja-JP/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/ja-JP/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/ja-JP/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/ja-JP/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/ending'));

  storage = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/god-shop'));
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/ja-JP/timon/others/tachyon-shop'),
  );
  race = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/race'));
  others = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/others'));
  random_events = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/random'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/ja-JP/timon/others/pregnant-slave'),
  );
  cum = proxy_kojo_js(require('#/i18n/ja-JP/timon/mejiro/cum'));
  /** @type {KojoFile} */
  cum_events = require('#/i18n/ja-JP/timon/mejiro/cum-events.kojo');

  // [번역 대상] strange — 함수/속성 전체 문맥에서 남은 원문을 번역
  strange = '疎遠';
  // [번역 대상] strange_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  strange_desc = (debuff) =>
    `まだお互いによく知らない……トレーニング効果-${debuff}%。関係を改善するか、担当トレーナーに相談すると、この状態は和らぐ。`;

  // [번역 대상] report_tenn_spr — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_tenn_spr = '春の長距離の王が誕生した！';
  // [번역 대상] report_tenn_sho — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_tenn_sho = (uma) => [
    'ここに、府中の秋の魔物は ',
    uma,
    ' に討たれた！',
  ];
  // [번역 대상] report_invincible_g1 — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_invincible_g1 = (uma) => [
    '強い者は強い、強い者は強い！',
    uma,
    ' 無傷でG1を制した！',
  ];
  // [번역 대상] report_invincible_three_crowns — 함수/속성 전체 문맥에서 남은 원문을 번역
  report_invincible_three_crowns =
    'これは無敗三冠！ ウマ娘史に消えない大記録が達成された！！！';

  // [번역 대상] npc_select — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_select = '誰と話す？';
  // [번역 대상] npc_talk — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_talk = '雑談';
  // [번역 대상] npc_sex — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_sex = '求愛';
  // [번역 대상] npc_out — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_out = 'デート';
  // [번역 대상] get_npc_celebration — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_npc_celebration = (celebration) => `${celebration}を祝う`;
  // [번역 대상] npc_bye — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_bye = 'さようなら';

  // [번역 대상] npc_recruit_in_school — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_recruit_in_school = '「一緒に頑張ろう！」（募集）';
  // [번역 대상] npc_recruit_out_school — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_recruit_out_school = '「力を貸してほしい！」（募集）';

  // [번역 대상] npc_accept_task — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_accept_task = '依頼を受ける';
  // [번역 대상] npc_retry_task — 함수/속성 전체 문맥에서 남은 원문을 번역
  npc_retry_task = 'もう一度挑む';

  // [번역 대상] bt_god_love_event_fuck_me — 함수/속성 전체 문맥에서 남은 원문을 번역
  bt_god_love_event_fuck_me = '自ら神の子を宿す';
  // [번역 대상] bt_god_love_event_preg_me — 함수/속성 전체 문맥에서 남은 원문을 번역
  bt_god_love_event_preg_me = '腹の子を神の子にする';

  // it = information timon
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_office_study — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_office_study = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の学習を指導した】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_office_prepare — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_office_prepare = (chara) => [
    '【',
    chara.get_colored_name(),
    ' のレース前準備を手伝った】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_talk — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_talk = (chara) => ['【', chara.get_colored_name(), ' に声をかけた】'];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_office_gift — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_office_gift = (chara) => [
    '【',
    chara.get_colored_name(),
    ' に小さな贈り物をした】',
  ];
  // [번역 대상] it_self_cook — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_self_cook = '【ひとりでご飯を作って食べた】';
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_office_cook — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_office_cook = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒にご飯を作って食べた】',
  ];
  // [번역 대상] it_self_rest — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_self_rest = '【ひとりで休んだ】';
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_office_rest — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_office_rest = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に休んだ】',
  ];
  // [번역 대상] it_self_game — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_self_game = '【ひとりでゲームをした】';
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_office_game — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_office_game = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒にゲームをした】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  // [번역 대상] get_it_celebration — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_celebration = (chara, celebration) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に ',
    celebration,
    ' を祝った】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_birthday — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_birthday = (chara) => [
    '【',
    chara.get_colored_name(),
    ' に誕生日おめでとうを伝えた】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_check_love — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' は、ふたりの関係を改めて見つめ直すつもりらしい……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_basement_me — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_basement_me = (chara, you) => [
    you.get_colored_name(),
    ' の頼みを聞き、',
    chara.get_colored_name(),
    ' は少し心を動かしたようだ……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_home_sex — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    'と、夜に家で会う約束をした……',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  // [번역 대상] get_it_arrive_location — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_arrive_location = (vehicle, location) => [
    '【',
    vehicle,
    'は ',
    location,
    ' に着いた】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  // [번역 대상] get_it_goto_location — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_goto_location = (chara, vehicle, location) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に',
    vehicle,
    'で ',
    location,
    ' へ向かった】',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  // [번역 대상] get_it_self_goto_location — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_self_goto_location = (vehicle, location) => [
    '【ひとりで',
    vehicle,
    'で ',
    location,
    ' へ向かった】',
  ];
  // [번역 대상] it_back_office — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_back_office = '【引き返した】';
  // [번역 대상] it_force_back_office — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_force_back_office = '【誰もいないようだ……引き返した】';
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_npc_sleep — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_npc_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は体力が持たず、休むために戻る】',
  ];

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  // [번역 대상] get_it_in_recruit — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_in_recruit = (you, uma) => [
    '【トレーニング場で何人かの',
    uma,
    'を見かけた。誰が ',
    you.get_colored_name(),
    ' の目を引いたのだろう？】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_chara_not_in_recruit — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    ' はトレーニング場にいないようだ】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  // [번역 대상] get_it_recruit_disabled — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_recruit_disabled = (you, uma) => [
    '【',
    you.get_colored_name(),
    ' にはすでに十分な担当がいる。ほかの',
    uma,
    'は ',
    you.get_colored_name(),
    ' の募集には応じないだろう】',
  ];
  /** @param {string} uma */
  // [번역 대상] get_it_no_chara_in_recruit — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_no_chara_in_recruit = (uma) => [
    '【トレーニング場に目を引く',
    uma,
    'はいない】',
  ];

  rec_kojo_mark_border = ['[', ']'];
  // [번역 대상] rec_km_r — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_r = '募';
  // [번역 대상] rec_km_d — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_d = '常';
  // [번역 대상] rec_km_ed — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_ed = '育';
  // [번역 대상] rec_km_l — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_l = '恋';
  // [번역 대상] rec_km_er — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_er = '性';
  // [번역 대상] rec_km_b — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_b = '監';
  // [번역 대상] rec_km_i — 함수/속성 전체 문맥에서 남은 원문을 번역
  rec_km_i = '絵';

  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_heal_yandere — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_heal_yandere = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は再び穏やかになった】',
  ];
  /** @param {PrintedSpan} income */
  // [번역 대상] get_it_income_invest — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_income_invest = (income) => [
    '【投資の収益 ',
    income,
    ' ウマコインを受け取った】',
  ];
  /** @param {PrintedSpan} income */
  // [번역 대상] get_it_income_annal_bonus — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_income_annal_bonus = (income) => [
    '【学園からトレーナー給与と年末賞与 ',
    income,
    ' ウマコインを受け取った】',
  ];
  /** @param {PrintedSpan} income */
  // [번역 대상] get_it_income_salary — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_income_salary = (income) => [
    '【学園からトレーナー給与 ',
    income,
    ' ウマコインを受け取った】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {[]} chara_list
   * @returns {TextContent}
   */
  // [번역 대상] get_it_punish_avoid_race — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_punish_avoid_race = (you, chara_list) => [
    '【',
    ...chara_list,
    ' の避戦により、社会の ',
    you.get_colored_name(),
    ' への評価が下がった！】',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_pregnant_slave_reward — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_pregnant_slave_reward = (you) => [
    '【',
    you.get_colored_name(),
    ' は務めを果たし、孕袋としての評価が上がった】',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_pregnant_slave_punish — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_pregnant_slave_punish = (you) => [
    '【ウマ娘の主人を妊娠させた ',
    you.get_colored_name(),
    ' は孕袋失格として、トレセンの処分を受けた！】',
  ];
  // [번역 대상] it_pregnant_trainer_punish — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_pregnant_trainer_punish =
    '【現役トレーナーの隠し子スキャンダルが、世間で物議を醸した】';
  // [번역 대상] it_pregnant_uma_punish — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_pregnant_uma_punish =
    '【現役ウマ娘の隠し子スキャンダルが、各界で取り沙汰されている】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} teacher
   * @param {PrintedSpan} train
   */
  // [번역 대상] get_it_train_take_care — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_train_take_care = (chara, teacher, train) => [
    '【',
    teacher.get_colored_name(),
    ' の見守りのなか、',
    chara.get_colored_name(),
    ' は ',
    train,
    ' のトレーニングをした】',
  ];
  /**
   * @param {[]} chara_list
   * @param {PrintedSpan} train
   */
  // [번역 대상] get_it_train_together — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_train_together = (chara_list, train) => [
    '【',
    ...chara_list,
    ' は一緒に ',
    train,
    ' の自主トレーニングをした】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} train
   */
  // [번역 대상] get_it_train_lonely — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_train_lonely = (chara, train) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    train,
    ' の自主トレーニングをした】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} item 母乳药剂
   * @param {string} talent 母乳体质特性名
   */
  // [번역 대상] get_it_nt_get_milk — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_get_milk = (chara, item, talent) => [
    '【',
    chara.get_colored_name(),
    ' は',
    item,
    'の影響で ',
    talent,
    ' になった！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  // [번역 대상] get_it_nt_become_fat — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_become_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    status,
    ' になった！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  // [번역 대상] get_it_nt_not_be_fat — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_not_be_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' の体重は元に戻った】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  // [번역 대상] get_it_nt_become_headache — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_become_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    status,
    ' を患った！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  // [번역 대상] get_it_nt_not_be_headache — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_not_be_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' の ',
    status,
    ' は治った】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_nt_have_penis — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_have_penis = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の陰核が一本の肉棒に育った！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_nt_love_unlimit — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_love_unlimit = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' に飲ませた抑制薬が切れた……',
    chara.get_colored_name(),
    'の ',
    you.get_colored_name(),
    ' への恋心が、どっと溢れてくる】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} up_info
   */
  // [번역 대상] get_it_nt_train_level_up — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_train_level_up = (chara, up_info) => [
    '【',
    chara.get_colored_name(),
    ' の ',
    up_info,
    '】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_nt_get_jewel — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_get_jewel = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は新しい因子を継承した！】',
  ];
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} father
   */
  // [번역 대상] get_it_hb_info — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_hb_info = (mother, father) => [
    '【',
    mother.get_colored_name(),
    ' は、どこか ',
    father.get_colored_name(),
    ' に似た健康な子を産んだ！】',
  ];
  // [번역 대상] it_hb_let_mom_name — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_hb_let_mom_name = '母親に名付けさせる';
  // [번역 대상] it_hb_let_dad_name — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_hb_let_dad_name = '父親に名付けさせる';
  // [번역 대상] it_hb_you_name — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_hb_you_name = '自分で名付ける';
  // [번역 대상] it_hb_name_tip — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_hb_name_tip = '子供にどんな名前をつける？';
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} child
   */
  // [번역 대상] get_it_name_result — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    ' の子供の名は ',
    child.get_colored_name(),
  ];
  // [번역 대상] it_hb_rename — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_hb_rename = '名付け直す？';
  /** @param {PrintedSpan} celebration */
  // [번역 대상] get_it_nt_celebration_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_celebration_notification = (celebration) => [
    '【今週は ',
    celebration,
    '。チームの面々にも、目を向けてほしい行事があるかもしれない】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} race
   */
  // [번역 대상] get_it_nt_race_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_race_notification = (chara, race) => [
    '【今週は ',
    chara.get_colored_name(),
    ' が出走登録した ',
    race,
    ' がある】',
  ];
  /** @param {PrintedSpan} race */
  // [번역 대상] get_it_nt_foreign_race_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_foreign_race_notification = (race) => [
    '【',
    race,
    ' がまもなく開催される。出走する選手たちは遠征の途につく】',
  ];
  // [번역 대상] it_nt_race_contestants — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_race_contestants = 'チームのうち、次の面々がこのレースに登録した：';
  /**
   * @param {PrintedSpan} race
   * @param {boolean} you_in_race プレイヤーが出走するか
   */
  // [번역 대상] get_it_nt_to_foreign_confirm — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race ? [' ', race, ' に出走する？'] : [' ', race, ' に同行する？'];
  // [번역 대상] it_nt_foreign_avoid_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_foreign_avoid_notification =
    'これらの選手の欠場が、世論に噂を広げている：';
  // [번역 대상] it_nt_back_info — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_back_info = '【トレセンへ戻った】';
  /** @param {PrintedSpan} race */
  // [번역 대상] get_it_nt_back_info_from_foreign — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_back_info_from_foreign = (race) => [
    '【',
    race,
    ' へ遠征していた面々がトレセンへ戻った】',
  ];
  // [번역 대상] it_nt_summer_start_notification — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_summer_start_notification = '【年に一度の夏合宿が今週から始まる】';
  // [번역 대상] it_nt_summer_chara_list_start — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_summer_chara_list_start = '今年、チームのうち次の面々が夏合宿に出る：';
  /** @param {boolean} just_you */
  // [번역 대상] get_it_nt_summer_confirm — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? '夏合宿に参加する？' : '夏合宿に同行する？';
  // [번역 대상] it_nt_summer_chara_list_follow — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_summer_chara_list_follow = '今年、次の面々が夏合宿に同行する：';
  // [번역 대상] it_nt_back_info_summer — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_back_info_summer = '【夏合宿へ向かった面々がトレセンへ戻った】';

  // [번역 대상] it_nt_moon_well_cool_down — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_nt_moon_well_cool_down = '【秘湯の効能が戻った】';
  // [번역 대상] get_it_moon_well_together — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_moon_well_together = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と秘湯の受付にいる】',
  ];

  /**
   * @param {string} title
   * @param {[]} chara_list
   * @param {string} item
   */
  // [번역 대상] get_it_nt_inmon_milk_slave — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_inmon_milk_slave = (title, chara_list, item) =>
    chara_list.length > 1
      ? [
          '【',
          title,
          ' ',
          ...chara_list,
          ' はそれぞれ ',
          item,
          ' を一杯献上した】',
        ]
      : ['【', title, ' ', ...chara_list, ' は ', item, ' を一杯献上した】'];
  /**
   * @param {string} title
   * @param {CharaTalk} chara
   * @param {PrintedSpan} jewel
   */
  // [번역 대상] get_it_nt_inmon_inhert_slave — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_nt_inmon_inhert_slave = (title, chara, jewel) => [
    '【',
    title,
    ' ',
    chara.get_colored_name(),
    ' は ',
    jewel,
    ' を献上した】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  // [번역 대상] get_it_chara_rape_in_sleeping — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '【強い刺激で ',
    you.get_colored_name(),
    ' は眠りから飛び起き、',
    chara.get_colored_name(),
    ' が体の上に伏せているのを見つけた！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   * @returns {TextContent}
   */
  // [번역 대상] get_it_multi_rape_in_sleeping — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '【強い刺激で ',
    you.get_colored_name(),
    ' は眠りから飛び起き、',
    chara.get_colored_name(),
    ' と ',
    supporter.get_colored_name(),
    ' が体の上に伏せているのを見つけた！】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_flatter — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_flatter = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に取り入ろうとした】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_flatter_masters — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_flatter_masters = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.couple_title,
    ' に取り入ろうとした】',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_unlock_success — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    ' は機関を一層解いた！',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_unlock_fail — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_unlock_fail = (you) => [
    you.get_colored_name(),
    ' は仕掛けを解けなかった……',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_unlock_escape — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    ' は機関を解き、地下室から逃れた！',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_bs_sleep — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    ' はベッドに横になり、少し眠って気力を戻すことにした……',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_bs_eat — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_eat = (you) => [
    '地下室の主人は ',
    you.get_colored_name(),
    ' に食料を残していた。',
    you.get_colored_name(),
    ' は少しだけ食べることにした……',
  ];
  /** @param {CharaTalk} you */
  // [번역 대상] get_it_bs_eat_uma_s — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    ' は突然、心拍が速まり、熱い血が上り、強い眩暈に襲われた……',
  ];
  // [번역 대상] it_bs_strike_success — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_strike_success = '【奇襲成功】';
  // [번역 대상] it_bs_strike_fail — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_strike_fail = '【奇襲失敗】';
  // [번역 대상] it_bs_battle_success — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_battle_success = '【反抗成功】';
  // [번역 대상] it_bs_battle_fail — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_battle_fail = '【反抗失敗】';
  // [번역 대상] it_bs_battle_escape — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_battle_escape = '【機関の解除に成功】';
  // [번역 대상] it_bs_battle_prison — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_battle_prison = '【機関の解除に失敗】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_bs_release — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_release = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に解放を願った】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_bs_clock — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_clock = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に今の時刻を尋ねた】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_bs_find_escape — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_find_escape = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' にその場で捕まった！】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_awake — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_awake = (chara) => [
    '【',
    chara.get_colored_name(),
    ' が目覚めた】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_back — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_back = (chara) => [
    '【',
    chara.get_colored_name(),
    ' が戻ってきた】',
  ];
  // [번역 대상] it_bs_rescue — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_rescue = '【救援が到着した】';
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_fall_asleep — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_fall_asleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は気力が尽きて昏睡した】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_chara_eat — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_chara_eat = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は少し食事をした】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_chara_sleep — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_chara_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' はベッドに横になり眠った】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_bs_lure — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_lure = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' を挑発した】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  // [번역 대상] get_it_bs_rape — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_rape = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' を犯すことにした】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_fix — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_fix = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は地下室の補強を始めた】',
  ];
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_chara_leave — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_chara_leave = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は立ち去った】',
  ];
  // [번역 대상] it_bs_final_escape — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_bs_final_escape = '【トレーナー室へ無事に戻った】';
  /** @param {CharaTalk} chara */
  // [번역 대상] get_it_bs_downgrade_security — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_it_bs_downgrade_security = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の警戒が緩んだ】',
  ];

  // [번역 대상] it_sell_fish_template — 함수/속성 전체 문맥에서 남은 원문을 번역
  it_sell_fish_template = '【釣った魚を売り、%MONEY% ウマコインになった】';

  ed_saying_01 = '九尺二間の陋室に、紅唇竹に依りて恩情を共にす。——高杉晋作';
  ed_saying_02 =
    '金とウマ娘と女。男にはこの三つが永遠にわからない。——ウィル・ロ〇ス';
  ed_saying_03 = '一文銭、英雄漢を倒す。——李緑園';
  ed_saying_04 =
    '縛られた奴隷はみな、自ら鎖を外すことができる。——ウィリアム・シェイクスピア';
  ed_saying_05 =
    'もう独りではない。いま、生涯の最愛がこれほど近くにいる。——レ・ミゼラブル';
  ed_saying_06 = 'エクリプス先んず、万物光なし。——デニス・オケリー';
  ed_saying_07 = '鳴かぬなら殺してしまえ時鳥。——織田信長';
  ed_saying_08 =
    '捜査において、私は最後にして最高の上訴裁判所である。——シャーロック・ホームズ';
  ed_saying_09 = '世は成敗をもって人物を論ず、故に操は英雄の列にあり。——蘇軾';
  ed_saying_10 =
    '偉大なウマ娘を持つ者は、最も偉大な玉座を持つ。——ウィンストン・〇チル';
  ed_saying_11 =
    '人が真に下劣になると、他人の不幸を喜ぶほかに楽しみは残らない。——ヨハン・ヴォルフガング・フォン・ゲーテ';
  ed_saying_12 =
    '自由とは思いのままにすることではなく、己を失わずに済むことだ。——イマヌエル・カント';
  ed_saying_13 = '私は自分自身の最大の敵である。——ナポレオン・ボナパルト';

  // Forward Compatibility - 前方互換
  // [번역 대상] fc_mejiro_confirm — 함수/속성 전체 문맥에서 남은 원문을 번역
  fc_mejiro_confirm = 'メジロシティの方針を選んでください';
  // [번역 대상] fc_mejiro_free — 함수/속성 전체 문맥에서 남은 원문을 번역
  fc_mejiro_free = '「自由」';
  // [번역 대상] fc_mejiro_cum — 함수/속성 전체 문맥에서 남은 원문을 번역
  fc_mejiro_cum = '「慈愛」';

  // [번역 대상] fc_race_item_confirm — 함수/속성 전체 문맥에서 남은 원문을 번역
  fc_race_item_confirm = '玩具を付けて出走したときの影響を選んでください';
  // [번역 대상] fc_race_item_yes — 함수/속성 전체 문맥에서 남은 원문을 번역
  fc_race_item_yes = '影響あり';
  // [번역 대상] fc_race_item_no — 함수/속성 전체 문맥에서 남은 원문을 번역
  fc_race_item_no = '影響なし';
}

module.exports = I18nTimon;
