// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');
const JaTimon = require('#/i18n/ja-JP/timon/entry');

module.exports = class extends JaTimon {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/timon/recruit'));
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/timon/daily'));
  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(require('#/i18n/ko-KR/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ko-KR/timon/love'));
  // 한국어 작업 모듈 연결: basement
  basement = proxy_kojo_js(require('#/i18n/ko-KR/timon/base'));
  // 한국어 작업 모듈 연결: game_guides
  game_guides = proxy_kojo_js(require('#/i18n/ko-KR/timon/guides/game'));
  // 한국어 작업 모듈 연결: ending
  ending = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/ending'));
  // 한국어 작업 모듈 연결: storage
  storage = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/storage'));
  // 한국어 작업 모듈 연결: god_shop
  god_shop = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/god-shop'));
  // 한국어 작업 모듈 연결: race
  race = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/race'));
  // 한국어 작업 모듈 연결: others
  others = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/others'));
  // 한국어 작업 모듈 연결: random_events
  random_events = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/random'));
  // 한국어 작업 모듈 연결: cum
  cum = proxy_kojo_js(require('#/i18n/ko-KR/timon/mejiro/cum'));
  // 한국어 작업 모듈 연결: pregnant_slave
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/others/pregnant-slave'),
  );
  // 한국어 작업 모듈 연결: tachyon_shop
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/others/tachyon-shop'),
  );
  // 한국어 작업 모듈 연결: ero_c
  ero_c = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-common'));
  // 한국어 작업 모듈 연결: ero_r
  ero_r = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-rape'));
  // 한국어 작업 모듈 연결: ero_s
  ero_s = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-sleep'));
  // 한국어 작업 모듈 연결: ero_o
  ero_o = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-others'));
  // 한국어 작업 모듈 연결: ero_sys
  ero_sys = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/system'));
  // 한국어 작업 모듈 연결: act_desc_c
  act_desc_c = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/sex/act-desc-common'),
  );
  // 한국어 작업 모듈 연결: act_desc_r
  act_desc_r = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/sex/act-desc-rape'),
  );
  // 한국어 작업 모듈 연결: act_desc_s
  act_desc_s = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/sex/act-desc-sleep'),
  );

  // 한국어 작업 모듈 연결: daily_child
  daily_child = proxy_kojo_js(require('#/i18n/ko-KR/timon/child/daily'));
  /** @type {KojoFile} */
  // 한국어 작업 모듈 연결: cum_events
  cum_events = require('#/i18n/ko-KR/timon/mejiro/cum-events.kojo');

  ed_saying_01 =
    '좁은 방 안에서 붉은 입술이 대나무와 어우러져 은혜를 나누네. —— 타카스기 신사쿠';
  ed_saying_02 =
    '돈, 우마무스메, 여자. 남자는 영원히 이 세 가지를 이해하지 못한다. —— 윌 로저스';
  ed_saying_03 = '한 푼의 돈이 영웅을 무릎 꿇게 만든다. —— 리루위안';
  ed_saying_04 =
    '속박된 노예는 누구나 자신의 손으로 사슬을 끊어버릴 수 있다. —— 셰익스피어';
  ed_saying_05 =
    '난 이제 더 이상 외롭지 않아. 내 생애 최고의 사랑이 지금 내 곁에 있으니. —— 레 미제라블';
  ed_saying_06 = '일식이 시작되면 만물은 빛을 잃는다. —— 데니스 오켈리';
  ed_saying_07 = '두견새가 울지 않으면 죽여버리겠다. —— 오다 노부나가';
  ed_saying_08 =
    '수사 과정에서 나는 최후이자 최고의 상소 법원이다. —— 셜록 홈즈';
  ed_saying_09 =
    '세상은 성패로 인물을 논하니, 조조 또한 영웅의 반열에 든다. —— 소식';
  ed_saying_10 =
    '위대한 우마무스메를 소유한 자는 가장 위대한 옥좌를 소유한 것이다. —— 처칠';
  ed_saying_11 =
    '인간이 진정으로 저질러질 때, 타인의 불행을 기뻐하는 것 외에 다른 즐거움이란 없다. —— 괴테';
  ed_saying_12 =
    '자유란 제멋대로 하는 것이 아니라, 남의 뜻에 휘둘리지 않는 것이다. —— 칸트';
  ed_saying_13 = '나의 가장 큰 적은 바로 나 자신이다. —— 나폴레옹';


  // 한국어 작업 모듈 연결: base_guides
  base_guides = proxy_kojo_js(require("#/i18n/ko-KR/timon/guides/base"));

  // [번역 대상] bt_god_love_event_fuck_me
  bt_god_love_event_fuck_me = '自ら神の子を宿す';

  // [번역 대상] bt_god_love_event_preg_me
  bt_god_love_event_preg_me = '腹の子を神の子にする';

  // 한국어 작업 모듈 연결: ero_child
  ero_child = proxy_kojo_js(require("#/i18n/ko-KR/timon/child/ero"));

  // [번역 대상] fc_mejiro_confirm
  fc_mejiro_confirm = 'メジロシティの方針を選んでください';

  // [번역 대상] fc_mejiro_cum
  fc_mejiro_cum = '「慈愛」';

  // [번역 대상] fc_mejiro_free
  fc_mejiro_free = '「自由」';

  // [번역 대상] fc_race_item_confirm
  fc_race_item_confirm = '玩具を付けて出走したときの影響を選んでください';

  // [번역 대상] fc_race_item_no
  fc_race_item_no = '影響なし';

  // [번역 대상] fc_race_item_yes
  fc_race_item_yes = '影響あり';

  // [번역 대상] get_it_arrive_location
  get_it_arrive_location = (vehicle, location) => [
    '【',
    vehicle,
    'は ',
    location,
    ' に着いた】',
  ];

  // [번역 대상] get_it_basement_me
  get_it_basement_me = (chara, you) => [
    you.get_colored_name(),
    ' の頼みを聞き、',
    chara.get_colored_name(),
    ' は少し心を動かしたようだ……',
  ];

  // [번역 대상] get_it_birthday
  get_it_birthday = (chara) => [
    '【',
    chara.get_colored_name(),
    ' に誕生日おめでとうを伝えた】',
  ];

  // [번역 대상] get_it_bs_awake
  get_it_bs_awake = (chara) => [
    '【',
    chara.get_colored_name(),
    ' が目覚めた】',
  ];

  // [번역 대상] get_it_bs_back
  get_it_bs_back = (chara) => [
    '【',
    chara.get_colored_name(),
    ' が戻ってきた】',
  ];

  // [번역 대상] get_it_bs_chara_eat
  get_it_bs_chara_eat = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は少し食事をした】',
  ];

  // [번역 대상] get_it_bs_chara_leave
  get_it_bs_chara_leave = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は立ち去った】',
  ];

  // [번역 대상] get_it_bs_chara_sleep
  get_it_bs_chara_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' はベッドに横になり眠った】',
  ];

  // [번역 대상] get_it_bs_clock
  get_it_bs_clock = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に今の時刻を尋ねた】',
  ];

  // [번역 대상] get_it_bs_downgrade_security
  get_it_bs_downgrade_security = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の警戒が緩んだ】',
  ];

  // [번역 대상] get_it_bs_eat
  get_it_bs_eat = (you) => [
    '地下室の主人は ',
    you.get_colored_name(),
    ' に食料を残していた。',
    you.get_colored_name(),
    ' は少しだけ食べることにした……',
  ];

  // [번역 대상] get_it_bs_eat_uma_s
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    ' は突然、心拍が速まり、熱い血が上り、強い眩暈に襲われた……',
  ];

  // [번역 대상] get_it_bs_fall_asleep
  get_it_bs_fall_asleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は気力が尽きて昏睡した】',
  ];

  // [번역 대상] get_it_bs_find_escape
  get_it_bs_find_escape = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' にその場で捕まった！】',
  ];

  // [번역 대상] get_it_bs_fix
  get_it_bs_fix = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は地下室の補強を始めた】',
  ];

  // [번역 대상] get_it_bs_lure
  get_it_bs_lure = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' を挑発した】',
  ];

  // [번역 대상] get_it_bs_rape
  get_it_bs_rape = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' を犯すことにした】',
  ];

  // [번역 대상] get_it_bs_release
  get_it_bs_release = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に解放を願った】',
  ];

  // [번역 대상] get_it_bs_sleep
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    ' はベッドに横になり、少し眠って気力を戻すことにした……',
  ];

  // [번역 대상] get_it_celebration
  get_it_celebration = (chara, celebration) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に ',
    celebration,
    ' を祝った】',
  ];

  // [번역 대상] get_it_chara_not_in_recruit
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    ' はトレーニング場にいないようだ】',
  ];

  // [번역 대상] get_it_chara_rape_in_sleeping
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '【強い刺激で ',
    you.get_colored_name(),
    ' は眠りから飛び起き、',
    chara.get_colored_name(),
    ' が体の上に伏せているのを見つけた！】',
  ];

  // [번역 대상] get_it_check_love
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' は、ふたりの関係を改めて見つめ直すつもりらしい……',
  ];

  // [번역 대상] get_it_flatter
  get_it_flatter = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に取り入ろうとした】',
  ];

  // [번역 대상] get_it_flatter_masters
  get_it_flatter_masters = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.couple_title,
    ' に取り入ろうとした】',
  ];

  // [번역 대상] get_it_goto_location
  get_it_goto_location = (chara, vehicle, location) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に',
    vehicle,
    'で ',
    location,
    ' へ向かった】',
  ];

  // [번역 대상] get_it_hb_info
  get_it_hb_info = (mother, father) => [
    '【',
    mother.get_colored_name(),
    ' は、どこか ',
    father.get_colored_name(),
    ' に似た健康な子を産んだ！】',
  ];

  // [번역 대상] get_it_heal_yandere
  get_it_heal_yandere = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は再び穏やかになった】',
  ];

  // [번역 대상] get_it_home_sex
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    'と、夜に家で会う約束をした……',
  ];

  // [번역 대상] get_it_in_recruit
  get_it_in_recruit = (you, uma) => [
    '【トレーニング場で何人かの',
    uma,
    'を見かけた。誰が ',
    you.get_colored_name(),
    ' の目を引いたのだろう？】',
  ];

  // [번역 대상] get_it_income_annal_bonus
  get_it_income_annal_bonus = (income) => [
    '【学園からトレーナー給与と年末賞与 ',
    income,
    ' ウマコインを受け取った】',
  ];

  // [번역 대상] get_it_income_invest
  get_it_income_invest = (income) => [
    '【投資の収益 ',
    income,
    ' ウマコインを受け取った】',
  ];

  // [번역 대상] get_it_income_salary
  get_it_income_salary = (income) => [
    '【学園からトレーナー給与 ',
    income,
    ' ウマコインを受け取った】',
  ];

  // [번역 대상] get_it_moon_well_together
  get_it_moon_well_together = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と秘湯の受付にいる】',
  ];

  // [번역 대상] get_it_multi_rape_in_sleeping
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '【強い刺激で ',
    you.get_colored_name(),
    ' は眠りから飛び起き、',
    chara.get_colored_name(),
    ' と ',
    supporter.get_colored_name(),
    ' が体の上に伏せているのを見つけた！】',
  ];

  // [번역 대상] get_it_name_result
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    ' の子供の名は ',
    child.get_colored_name(),
  ];

  // [번역 대상] get_it_no_chara_in_recruit
  get_it_no_chara_in_recruit = (uma) => [
    '【トレーニング場に目を引く',
    uma,
    'はいない】',
  ];

  // [번역 대상] get_it_npc_sleep
  get_it_npc_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は体力が持たず、休むために戻る】',
  ];

  // [번역 대상] get_it_nt_back_info_from_foreign
  get_it_nt_back_info_from_foreign = (race) => [
    '【',
    race,
    ' へ遠征していた面々がトレセンへ戻った】',
  ];

  // [번역 대상] get_it_nt_become_fat
  get_it_nt_become_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    status,
    ' になった！】',
  ];

  // [번역 대상] get_it_nt_become_headache
  get_it_nt_become_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    status,
    ' を患った！】',
  ];

  // [번역 대상] get_it_nt_celebration_notification
  get_it_nt_celebration_notification = (celebration) => [
    '【今週は ',
    celebration,
    '。チームの面々にも、目を向けてほしい行事があるかもしれない】',
  ];

  // [번역 대상] get_it_nt_foreign_race_notification
  get_it_nt_foreign_race_notification = (race) => [
    '【',
    race,
    ' がまもなく開催される。出走する選手たちは遠征の途につく】',
  ];

  // [번역 대상] get_it_nt_get_jewel
  get_it_nt_get_jewel = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は新しい因子を継承した！】',
  ];

  // [번역 대상] get_it_nt_get_milk
  get_it_nt_get_milk = (chara, item, talent) => [
    '【',
    chara.get_colored_name(),
    ' は',
    item,
    'の影響で ',
    talent,
    ' になった！】',
  ];

  // [번역 대상] get_it_nt_have_penis
  get_it_nt_have_penis = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の陰核が一本の肉棒に育った！】',
  ];

  // [번역 대상] get_it_nt_inmon_inhert_slave
  get_it_nt_inmon_inhert_slave = (title, chara, jewel) => [
    '【',
    title,
    ' ',
    chara.get_colored_name(),
    ' は ',
    jewel,
    ' を献上した】',
  ];

  // [번역 대상] get_it_nt_inmon_milk_slave
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

  // [번역 대상] get_it_nt_love_unlimit
  get_it_nt_love_unlimit = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' に飲ませた抑制薬が切れた……',
    chara.get_colored_name(),
    'の ',
    you.get_colored_name(),
    ' への恋心が、どっと溢れてくる】',
  ];

  // [번역 대상] get_it_nt_not_be_fat
  get_it_nt_not_be_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' の体重は元に戻った】',
  ];

  // [번역 대상] get_it_nt_not_be_headache
  get_it_nt_not_be_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' の ',
    status,
    ' は治った】',
  ];

  // [번역 대상] get_it_nt_race_notification
  get_it_nt_race_notification = (chara, race) => [
    '【今週は ',
    chara.get_colored_name(),
    ' が出走登録した ',
    race,
    ' がある】',
  ];

  // [번역 대상] get_it_nt_summer_confirm
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? '夏合宿に参加する？' : '夏合宿に同行する？';

  // [번역 대상] get_it_nt_to_foreign_confirm
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race ? [' ', race, ' に出走する？'] : [' ', race, ' に同行する？'];

  // [번역 대상] get_it_nt_train_level_up
  get_it_nt_train_level_up = (chara, up_info) => [
    '【',
    chara.get_colored_name(),
    ' の ',
    up_info,
    '】',
  ];

  // [번역 대상] get_it_office_cook
  get_it_office_cook = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒にご飯を作って食べた】',
  ];

  // [번역 대상] get_it_office_game
  get_it_office_game = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒にゲームをした】',
  ];

  // [번역 대상] get_it_office_gift
  get_it_office_gift = (chara) => [
    '【',
    chara.get_colored_name(),
    ' に小さな贈り物をした】',
  ];

  // [번역 대상] get_it_office_prepare
  get_it_office_prepare = (chara) => [
    '【',
    chara.get_colored_name(),
    ' のレース前準備を手伝った】',
  ];

  // [번역 대상] get_it_office_rest
  get_it_office_rest = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に休んだ】',
  ];

  // [번역 대상] get_it_office_study
  get_it_office_study = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の学習を指導した】',
  ];

  // [번역 대상] get_it_pregnant_slave_punish
  get_it_pregnant_slave_punish = (you) => [
    '【ウマ娘の主人を妊娠させた ',
    you.get_colored_name(),
    ' は孕袋失格として、トレセンの処分を受けた！】',
  ];

  // [번역 대상] get_it_pregnant_slave_reward
  get_it_pregnant_slave_reward = (you) => [
    '【',
    you.get_colored_name(),
    ' は務めを果たし、孕袋としての評価が上がった】',
  ];

  // [번역 대상] get_it_punish_avoid_race
  get_it_punish_avoid_race = (you, chara_list) => [
    '【',
    ...chara_list,
    ' の避戦により、社会の ',
    you.get_colored_name(),
    ' への評価が下がった！】',
  ];

  // [번역 대상] get_it_recruit_disabled
  get_it_recruit_disabled = (you, uma) => [
    '【',
    you.get_colored_name(),
    ' にはすでに十分な担当がいる。ほかの',
    uma,
    'は ',
    you.get_colored_name(),
    ' の募集には応じないだろう】',
  ];

  // [번역 대상] get_it_self_goto_location
  get_it_self_goto_location = (vehicle, location) => [
    '【ひとりで',
    vehicle,
    'で ',
    location,
    ' へ向かった】',
  ];

  // [번역 대상] get_it_talk
  get_it_talk = (chara) => ['【', chara.get_colored_name(), ' に声をかけた】'];

  // [번역 대상] get_it_train_lonely
  get_it_train_lonely = (chara, train) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    train,
    ' の自主トレーニングをした】',
  ];

  // [번역 대상] get_it_train_take_care
  get_it_train_take_care = (chara, teacher, train) => [
    '【',
    teacher.get_colored_name(),
    ' の見守りのなか、',
    chara.get_colored_name(),
    ' は ',
    train,
    ' のトレーニングをした】',
  ];

  // [번역 대상] get_it_train_together
  get_it_train_together = (chara_list, train) => [
    '【',
    ...chara_list,
    ' は一緒に ',
    train,
    ' の自主トレーニングをした】',
  ];

  // [번역 대상] get_it_unlock_escape
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    ' は機関を解き、地下室から逃れた！',
  ];

  // [번역 대상] get_it_unlock_fail
  get_it_unlock_fail = (you) => [
    you.get_colored_name(),
    ' は仕掛けを解けなかった……',
  ];

  // [번역 대상] get_it_unlock_success
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    ' は機関を一層解いた！',
  ];

  // [번역 대상] get_npc_celebration
  get_npc_celebration = (celebration) => `${celebration}を祝う`;

  // [번역 대상] it_back_office
  it_back_office = '【引き返した】';

  // [번역 대상] it_bs_battle_escape
  it_bs_battle_escape = '【機関の解除に成功】';

  // [번역 대상] it_bs_battle_fail
  it_bs_battle_fail = '【反抗失敗】';

  // [번역 대상] it_bs_battle_prison
  it_bs_battle_prison = '【機関の解除に失敗】';

  // [번역 대상] it_bs_battle_success
  it_bs_battle_success = '【反抗成功】';

  // [번역 대상] it_bs_final_escape
  it_bs_final_escape = '【トレーナー室へ無事に戻った】';

  // [번역 대상] it_bs_rescue
  it_bs_rescue = '【救援が到着した】';

  // [번역 대상] it_bs_strike_fail
  it_bs_strike_fail = '【奇襲失敗】';

  // [번역 대상] it_bs_strike_success
  it_bs_strike_success = '【奇襲成功】';

  // [번역 대상] it_force_back_office
  it_force_back_office = '【誰もいないようだ……引き返した】';

  // [번역 대상] it_hb_let_dad_name
  it_hb_let_dad_name = '父親に名付けさせる';

  // [번역 대상] it_hb_let_mom_name
  it_hb_let_mom_name = '母親に名付けさせる';

  // [번역 대상] it_hb_name_tip
  it_hb_name_tip = '子供にどんな名前をつける？';

  // [번역 대상] it_hb_rename
  it_hb_rename = '名付け直す？';

  // [번역 대상] it_hb_you_name
  it_hb_you_name = '自分で名付ける';

  // [번역 대상] it_nt_back_info
  it_nt_back_info = '【トレセンへ戻った】';

  // [번역 대상] it_nt_back_info_summer
  it_nt_back_info_summer = '【夏合宿へ向かった面々がトレセンへ戻った】';

  // [번역 대상] it_nt_foreign_avoid_notification
  it_nt_foreign_avoid_notification =
    'これらの選手の欠場が、世論に噂を広げている：';

  // [번역 대상] it_nt_moon_well_cool_down
  it_nt_moon_well_cool_down = '【秘湯の効能が戻った】';

  // [번역 대상] it_nt_race_contestants
  it_nt_race_contestants = 'チームのうち、次の面々がこのレースに登録した：';

  // [번역 대상] it_nt_summer_chara_list_follow
  it_nt_summer_chara_list_follow = '今年、次の面々が夏合宿に同行する：';

  // [번역 대상] it_nt_summer_chara_list_start
  it_nt_summer_chara_list_start = '今年、チームのうち次の面々が夏合宿に出る：';

  // [번역 대상] it_nt_summer_start_notification
  it_nt_summer_start_notification = '【年に一度の夏合宿が今週から始まる】';

  // [번역 대상] it_pregnant_trainer_punish
  it_pregnant_trainer_punish =
    '【現役トレーナーの隠し子スキャンダルが、世間で物議を醸した】';

  // [번역 대상] it_pregnant_uma_punish
  it_pregnant_uma_punish =
    '【現役ウマ娘の隠し子スキャンダルが、各界で取り沙汰されている】';

  // [번역 대상] it_self_cook
  it_self_cook = '【ひとりでご飯を作って食べた】';

  // [번역 대상] it_self_game
  it_self_game = '【ひとりでゲームをした】';

  // [번역 대상] it_self_rest
  it_self_rest = '【ひとりで休んだ】';

  // [번역 대상] it_sell_fish_template
  it_sell_fish_template = '【釣った魚を売り、%MONEY% ウマコインになった】';

  // [번역 대상] npc_accept_task
  npc_accept_task = '依頼を受ける';

  // [번역 대상] npc_bye
  npc_bye = 'さようなら';

  // [번역 대상] npc_out
  npc_out = 'デート';

  // [번역 대상] npc_recruit_in_school
  npc_recruit_in_school = '「一緒に頑張ろう！」（募集）';

  // [번역 대상] npc_recruit_out_school
  npc_recruit_out_school = '「力を貸してほしい！」（募集）';

  // [번역 대상] npc_retry_task
  npc_retry_task = 'もう一度挑む';

  // [번역 대상] npc_select
  npc_select = '誰と話す？';

  // [번역 대상] npc_sex
  npc_sex = '求愛';

  // [번역 대상] npc_talk
  npc_talk = '雑談';

  // [번역 대상] rec_km_b
  rec_km_b = '監';

  // [번역 대상] rec_km_d
  rec_km_d = '常';

  // [번역 대상] rec_km_ed
  rec_km_ed = '育';

  // [번역 대상] rec_km_er
  rec_km_er = '性';

  // [번역 대상] rec_km_i
  rec_km_i = '絵';

  // [번역 대상] rec_km_l
  rec_km_l = '恋';

  // [번역 대상] rec_km_r
  rec_km_r = '募';

  // [번역 대상] report_invincible_g1
  report_invincible_g1 = (uma) => [
    '強い者は強い、強い者は強い！',
    uma,
    ' 無傷でG1を制した！',
  ];

  // [번역 대상] report_invincible_three_crowns
  report_invincible_three_crowns =
    'これは無敗三冠！ ウマ娘史に消えない大記録が達成された！！！';

  // [번역 대상] report_tenn_sho
  report_tenn_sho = (uma) => [
    'ここに、府中の秋の魔物は ',
    uma,
    ' に討たれた！',
  ];

  // [번역 대상] report_tenn_spr
  report_tenn_spr = '春の長距離の王が誕生した！';

  // [번역 대상] strange
  strange = '疎遠';

  // [번역 대상] strange_desc
  strange_desc = (debuff) =>
    `まだお互いによく知らない……トレーニング効果-${debuff}%。関係を改善するか、担当トレーナーに相談すると、この状態は和らぐ。`;
};
