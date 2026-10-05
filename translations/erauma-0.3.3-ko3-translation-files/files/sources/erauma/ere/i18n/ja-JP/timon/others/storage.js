// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/timon/others/storage.js
// 대상 함수/속성: anti_condom_confirm, anti_condom_duplicate, anti_condom_for_man, before_ero_item_common_description, drop_confirm_template, drop_family_uma_s, drop_quilt, get_chara_use_medicine, get_chara_use_milk_medicine, get_sell_milk_confirm, get_sell_milk_result, glass_equip_confirm_template, glass_have_lens_template, glass_lens_broken_template, make_armpit_hair_longer, make_armpit_hair_shorter, make_pubic_hair_longer, make_pubic_hair_shorter, multiple_vehicle_canceled, single_vehicle_canceled, use_anti_condom, use_inmon_item
/**
 * @file 所持道具 - システム提示
 * @author 黑奴队长
 */
const { print, printAndWait } = require('#/era-electron');

module.exports = {
  single_vehicle_info_template:
    'いま単独行動では%ITEM%を使っている！ 装備を外す？',
  // [번역 대상] single_vehicle_canceled — 함수/속성 전체 문맥에서 남은 원문을 번역
  single_vehicle_canceled: '%ITEM%の装備を外した',
  single_vehicle_replace_confirm_template:
    'いま単独行動では%ITEM%を使っている！ %NEW%に替える？',
  single_vehicle_equip_confirm_template: '以後、%ITEM%で単独行動する？',
  single_vehicle_equip_template: '%ITEM%を単独用の乗物として装備した',

  multiple_vehicle_info_template:
    'いま他人と外出するときは%ITEM%に乗っている！ 装備を外す？',
  // [번역 대상] multiple_vehicle_canceled — 함수/속성 전체 문맥에서 남은 원문을 번역
  multiple_vehicle_canceled: '%ITEM%の装備を外した',
  multiple_vehicle_replace_confirm_template:
    'いま他人と外出するときは%ITEM%に乗っている！ %NEW%に替える？',
  multiple_vehicle_equip_confirm_template: '以後、%ITEM%で他人と外出する？',
  multiple_vehicle_equip_template: '%ITEM%を複数用の乗物として装備した',

  no_glass_template: '%LENS%を取り付ける場所がない！',
  // [번역 대상] glass_have_lens_template — 함수/속성 전체 문맥에서 남은 원문을 번역
  glass_have_lens_template: 'すでに%GLASS%へ%LENS%を取り付けてある',
  // [번역 대상] glass_equip_confirm_template — 함수/속성 전체 문맥에서 남은 원문을 번역
  glass_equip_confirm_template: '%GLASS%に%LENS%を取り付ける？',
  glass_replace_confirm_template:
    '%GLASS%に%NEW%を取り付ける？ 元の%LENS%は壊れる！',
  glass_equip_template: '%GLASS%に%LENS%を取り付けた',
  // [번역 대상] glass_lens_broken_template — 함수/속성 전체 문맥에서 남은 원문을 번역
  glass_lens_broken_template: '%LENS%が壊れた',

  use_mind_reader_select: '使うウマ語りポイントカードの枚数を選んでください',
  use_mind_reader_confirm_template: 'ウマ語りポイントカードを %COUNT% 枚使う？',
  mind_reader_welcome_timer_template:
    '【ウマ語り】Appへようこそ！ 会員資格は %TIMER% 週後に期限切れになります。',
  mind_reader_continue_timer_template:
    '【ウマ語り】Appの継続、ありがとうございます！ 会員資格は %TIMER% 週後に期限切れになります。',
  mind_reader_notify_timer_template:
    '会員資格は %TIMER% 週後に期限切れになります。',

  in_ero_item_common_description: '調教中にのみ使える',
  // [번역 대상] before_ero_item_common_description — 함수/속성 전체 문맥에서 남은 원문을 번역
  before_ero_item_common_description: '調教前にのみ使える',

  // [번역 대상] drop_confirm_template — 함수/속성 전체 문맥에서 남은 원문을 번역
  drop_confirm_template: '%ITEM%を捨てる？',
  // [번역 대상] drop_quilt — 함수/속성 전체 문맥에서 남은 원문을 번역
  async drop_quilt() {
    await printAndWait('【透明な布団】を捨てた……');
    await printAndWait('……だが捨てる前に、中から何枚かの紙幣が出てきた……');
  },
  // [번역 대상] drop_family_uma_s — 함수/속성 전체 문맥에서 남은 원문을 번역
  async drop_family_uma_s() {
    await printAndWait('【ウマ跳びS ファミリーパック】を捨てた……');
    await printAndWait(
      '……そして化学製剤の不法投棄で 100 ウマコインの罰金を科された',
    );
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  // [번역 대상] use_inmon_item — 함수/속성 전체 문맥에서 남은 원문을 번역
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

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  // [번역 대상] get_chara_use_medicine — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    ' は',
    iname,
    'を服用した',
  ],
  /** @param {CharaTalk} chara */
  // [번역 대상] get_chara_use_milk_medicine — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    ' は母乳を分泌し始めた！',
  ],

  // [번역 대상] anti_condom_for_man — 함수/속성 전체 문맥에서 남은 원문을 번역
  anti_condom_for_man: '男性は【コンドーム溶解剤】を使えない',
  // [번역 대상] anti_condom_duplicate — 함수/속성 전체 문맥에서 남은 원문을 번역
  anti_condom_duplicate: 'すでに【コンドーム溶解剤】を使っている',
  // [번역 대상] anti_condom_confirm — 함수/속성 전체 문맥에서 남은 원문을 번역
  anti_condom_confirm: '【コンドーム溶解剤】を使う？',
  /**
   * @param {CharaTalk} you
   * @param {string} iname
   */
  // [번역 대상] use_anti_condom — 함수/속성 전체 문맥에서 남은 원문을 번역
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      ' は',
      iname,
      'を数滴、陰唇のそばに垂らした',
    ]);
  },

  eat_chocolate_confirm: '【バレンタインチョコ】を食べる？',
  /** @param {CharaTalk} you */
  get_eat_chocolate_disabled: (you) => [
    you.get_colored_name(),
    ' はもう満腹だ',
  ],

  /** @param {CharaTalk} chara */
  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    ' のストレスが下がった',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_down: (chara) => [
    chara.get_colored_name(),
    ' の性欲が下がった',
  ],
  /** @param {CharaTalk} chara */
  get_chara_all_down: (chara) => [
    chara.get_colored_name(),
    ' はより冷静になった',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_up: (chara) => [chara.get_colored_name(), ' は少し興奮した'],
  /** @param {CharaTalk} chara */
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' はもう太らない',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' はもう偏頭痛にならない',
  ],
  /** @param {CharaTalk} chara */
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    ' は【健康茶】を飲んだ',
  ],

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_hate_drug(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' にこっそり【嫌い薬】を盛った',
    ]);
    await printAndWait([
      chara.sex,
      'の ',
      you.get_colored_name(),
      ' への好感が薄れていく……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_limit_drug(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' にこっそり【抑制薬】を盛った',
    ]);
    await printAndWait([
      chara.sex,
      'の ',
      you.get_colored_name(),
      ' への恋心が抑えられた……',
    ]);
  },
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' はしばらく太らない',
  ],
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' はしばらく偏頭痛にならない',
  ],

  to_sell_milk_template: '売りに出す%ITEM%の本数を選んでください',
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   */
  // [번역 대상] get_sell_milk_confirm — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_sell_milk_confirm: (count, item) => [
    '闇網で ',
    count,
    ' 本の',
    item,
    'を売る？',
  ],
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   * @param {PrintedSpan} money
   */
  // [번역 대상] get_sell_milk_result — 함수/속성 전체 문맥에서 남은 원문을 번역
  get_sell_milk_result: (count, item, money) => [
    count,
    ' 本の',
    item,
    'を売り、',
    money,
    ' ウマコインを得た',
  ],

  /** @param {CharaTalk} chara */
  // [번역 대상] make_armpit_hair_longer — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛後の腋毛成長等級
   */
  // [번역 대상] make_armpit_hair_shorter — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  /** @param {CharaTalk} chara */
  // [번역 대상] make_pubic_hair_longer — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛後の陰毛成長等級
   */
  // [번역 대상] make_pubic_hair_shorter — 함수/속성 전체 문맥에서 남은 원문을 번역
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

  fixer_start: '【現実透孔、起動中……】',
  fixer_stop: '【現実の法則、修復完了。】',
};
