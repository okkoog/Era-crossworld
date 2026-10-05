// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const print = require('#/era-electron')["print"];
/**
 * Partial Korean reuse from EraUmaK 2.21.
 * Unmatched/new 3.113 entries inherit from ja-JP.
 */
const { printAndWait } = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/others/storage');

const ko = Object.create(ja);

Object.assign(ko, {
  single_vehicle_info_template:
    '현재 %ITEM%을(를) 1인용 탈것으로 이용하고 있습니다! 장비 해제하겠습니까?',
  single_vehicle_replace_confirm_template:
    '현재 외출 시 탑승하는 1인승 탈것은 %ITEM%입니다! %NEW%(으)로 변경할까요?',
  single_vehicle_equip_confirm_template:
    '외출할 때 %ITEM%을(를) 타고 나갈까요?',
  single_vehicle_equip_template:
    '%ITEM%을(를) 1인용 탈것으로 사용하기로 했다',

  multiple_vehicle_info_template:
    '현재 외출할 때 %ITEM%을(를) 사용 중입니다! 장비 해제하겠습니까?',
  multiple_vehicle_replace_confirm_template:
    '현재 외출 시 탑승하는 다인승 탈것은 %ITEM%입니다! %NEW%(으)로 변경할까요?',
  multiple_vehicle_equip_confirm_template:
    '외출할 때 %ITEM%을(를) 타고 나갈까요?',
  multiple_vehicle_equip_template:
    '%ITEM%을(를) 다인승 탈것으로 사용하기로 했다.',

  no_glass_template: '%LENS%을(를) 설치할 안경테가 없습니다!',
  glass_replace_confirm_template:
    '%GLASS%에 %NEW%을(를) 장착하시겠습니까? 기존 %LENS%은(는) 파손될 수 있습니다!',
  glass_equip_template: '%GLASS%에 %LENS%을(를) 장착했습니다……',

  use_mind_reader_select: '사용할 우마토커 포인트 카드 수를 선택하세요.',
  use_mind_reader_confirm_template:
    '우마토커 카드를 %COUNT%장 사용하시겠습니까?',
  mind_reader_welcome_timer_template:
    '【우마토커】앱을 이용해 주셔서 감사합니다! 회원 자격은 %TIMER%주 후에 만료됩니다.',
  mind_reader_continue_timer_template:
    '【우마토커】앱의 구독을 갱신해 주셔서 감사합니다! 회원 자격은 %TIMER%주 후에 만료됩니다.',
  mind_reader_notify_timer_template:
    '회원 자격은 %TIMER%주 후에 만료됩니다.',

  in_ero_item_common_description: '우마뾰이 도중에만 사용할 수 있다',

  eat_chocolate_confirm: '【발렌타인초콜릿】을 먹을까요?',
  get_eat_chocolate_disabled: (you) => [
    you.get_colored_name(),
    '은(는) 이미 배부르다……',
  ],

  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    '의 스트레스가 줄어들었다……',
  ],
  get_chara_lust_down: (chara) => [
    chara.get_colored_name(),
    '의 성욕이 줄어들었다...',
  ],
  get_chara_all_down: (chara) => [
    chara.get_colored_name(),
    '의 마음이 차분해졌다……',
  ],
  get_chara_lust_up: (chara) => [
    chara.get_colored_name(),
    '은(는) 조금 흥분하고 있다……',
  ],
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    '은(는) 더 이상 살찐 상태가 아닐 것이다……',
  ],
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    '은(는) 더 이상 편두통을 겪지 않을 것이다……',
  ],
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    '은(는)【건강차】를 먹었다……',
  ],

  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    '은(는) 당분간 살찌지 않을 것 같다……',
  ],
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    '의 편두통이 일단 사라졌다……',
  ],

  to_sell_milk_template: '판매할 %ITEM%의 수량은?',

  fixer_start: '【현실 침투 시작...】',
  fixer_stop: '【현실 법칙 복원 완료.】',
});

ko.drink_hate_drug = async (chara, you) => {
  await printAndWait([
    chara.get_colored_name(),
    '에게 몰래【혐오약】을 먹였다……',
  ]);
  await printAndWait([
    chara.sex,
    '의 ',
    you.get_colored_name(),
    '에 대한 호감이 사라지기 시작했다……',
  ]);
};

ko.drink_limit_drug = async (chara, you) => {
  await printAndWait([
    chara.get_colored_name(),
    '에게 몰래【억제약】을 먹였다……',
  ]);
  await printAndWait([
    chara.sex,
    '의 ',
    you.get_colored_name(),
    '에 대한 애정이 억눌렸다……',
  ]);
};

module.exports = ko;

module.exports = {
  ...module.exports,

  // [번역 대상] anti_condom_confirm
  anti_condom_confirm: '【コンドーム溶解剤】を使う？',

  // [번역 대상] anti_condom_duplicate
  anti_condom_duplicate: 'すでに【コンドーム溶解剤】を使っている',

  // [번역 대상] anti_condom_for_man
  anti_condom_for_man: '男性は【コンドーム溶解剤】を使えない',

  // [번역 대상] before_ero_item_common_description
  before_ero_item_common_description: '調教前にのみ使える',

  // [번역 대상] drop_confirm_template
  drop_confirm_template: '%ITEM%を捨てる？',

  // [번역 대상] drop_family_uma_s
  async drop_family_uma_s() {
    await printAndWait('【ウマ跳びS ファミリーパック】を捨てた……');
    await printAndWait(
      '……そして化学製剤の不法投棄で 100 ウマコインの罰金を科された',
    );
  },

  // [번역 대상] drop_quilt
  async drop_quilt() {
    await printAndWait('【透明な布団】を捨てた……');
    await printAndWait('……だが捨てる前に、中から何枚かの紙幣が出てきた……');
  },

  // [번역 대상] get_chara_use_medicine
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    ' は',
    iname,
    'を服用した',
  ],

  // [번역 대상] get_chara_use_milk_medicine
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    ' は母乳を分泌し始めた！',
  ],

  // [번역 대상] get_sell_milk_confirm
  get_sell_milk_confirm: (count, item) => [
    '闇網で ',
    count,
    ' 本の',
    item,
    'を売る？',
  ],

  // [번역 대상] get_sell_milk_result
  get_sell_milk_result: (count, item, money) => [
    count,
    ' 本の',
    item,
    'を売り、',
    money,
    ' ウマコインを得た',
  ],

  // [번역 대상] glass_equip_confirm_template
  glass_equip_confirm_template: '%GLASS%に%LENS%を取り付ける？',

  // [번역 대상] glass_have_lens_template
  glass_have_lens_template: 'すでに%GLASS%へ%LENS%を取り付けてある',

  // [번역 대상] glass_lens_broken_template
  glass_lens_broken_template: '%LENS%が壊れた',

  // [번역 대상] make_armpit_hair_longer
  async make_armpit_hair_longer(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【発毛クリーム】を使った',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' の腋毛がより旺盛に伸びるようになった',
    ]);
  },

  // [번역 대상] make_armpit_hair_shorter
  async make_armpit_hair_shorter(chara, talent) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【脱毛クリーム】を使った',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' の腋毛の伸びが遅くなった',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' の腋は滑らかで毛がなくなった！',
      ]);
    }
  },

  // [번역 대상] make_pubic_hair_longer
  async make_pubic_hair_longer(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【局部発毛クリーム】を使った',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' の陰毛がより旺盛に伸びるようになった',
    ]);
  },

  // [번역 대상] make_pubic_hair_shorter
  async make_pubic_hair_shorter(chara, talent) {
    await printAndWait([
      chara.get_colored_name(),
      ' に【局部脱毛クリーム】を使った',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' の陰毛の伸びが遅くなった',
      ]);
    } else if (chara.sex_code > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' の局部は滑らかで毛がなくなった！',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' の局部は、粉膩で愛らしい白虎になった！',
      ]);
    }
  },

  // [번역 대상] multiple_vehicle_canceled
  multiple_vehicle_canceled: '%ITEM%の装備を外した',

  // [번역 대상] single_vehicle_canceled
  single_vehicle_canceled: '%ITEM%の装備を外した',

  // [번역 대상] use_anti_condom
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      ' は',
      iname,
      'を数滴、陰唇のそばに垂らした',
    ]);
  },

  // [번역 대상] use_inmon_item
  use_inmon_item(chara, iname) {
    print([
      chara.get_colored_name(),
      ' に「お腹温め」の名目で',
      iname,
      'を貼った……',
    ]);
    print([
      chara.get_colored_name(),
      ' の下腹に、複雑な模様の淫紋が浮かんだ……',
    ]);
  },
};
