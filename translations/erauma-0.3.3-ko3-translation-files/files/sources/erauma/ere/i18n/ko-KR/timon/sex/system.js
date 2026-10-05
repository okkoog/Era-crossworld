// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { get, input, printAndWait, printButton } = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/sex/system');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  ...ja,


  // Reused from EraUmaK 2.21 page/components/goto-sex.js.
  bt_back_home: '하룻밤을 보낸다',
  bt_rape_play: '강간 플레이',
  bt_use_medicine: '미약 사용',

  get_want_sex_as_lover: (chara, you) => [
    [
      chara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 애틋한 눈빛으로 바라본다...',
      { isBr: true },
      '어떻게 할까?',
    ],
    '구애한다',
  ],

  get_want_sex_as_slave: (chara, you) => [
    [
      chara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 약간 경박한 눈빛으로 바라본다...',
      { isBr: true },
      '어떻게 할까?',
    ],
    '헌신한다',
  ],

  async choose_who_to_rape(chara, you) {
    printButton(`${chara.sex}를 거칠게 다룬다`, 1);
    printButton('거칠게 다뤄달라고 한다', 2);
    const ret = (await input()) === 1;
    if (ret) {
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 곧 강간당할 것 같은 공포에 질린 표정을 지었다……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 공포에 질린 표정을 지어',
        chara.get_colored_name(),
        '의 야성을 자극했다……',
      ]);
    }
    return ret;
  },

  use_medicine_header: '어떤 약을 쓸까?',
  no_medicine_notification: '쓸 약이 없다……',

  async use_super_uma_z(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      '은(는)【',
      item,
      '】을(를) 얌전히 마셨다……',
    ]);
    await printAndWait([chara.get_colored_name(), '은(는) 엄청나게 흥분했다!']);
  },

  async use_uma_s(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      '은(는)【',
      item,
      '】을(를) 얌전히 마셨다……',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      '은(는) 얼굴이 붉게 달아오른 채 잠들었다……',
    ]);
  },

  get_want_sex_as_master_by_pleasure: (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 우마뾰이 하기 싫은 것 같다...',
    { isBr: true },
    '하지만 육체의 쾌락에 굴복한 마음 탓에 거절할 수 없게 되었다...',
  ],

  get_want_sex_as_master_by_meek: (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 우마뾰이 하기 싫은 것 같다...',
    { isBr: true },
    '하지만 순종적으로 몸을 내어 주었다...',
  ],

  bt_start_train: '조교 시작',
  bt_train_back_home: '하룻밤 묵게 하기',

  get_want_sex_as_raper: (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 우마뾰이 하기 싫은 것 같다...',
    { isBr: true },
    '어떻게 할까?',
  ],

  bt_rape: '강간 시도',
  bt_drug: '약물 투여 시도',

  async rape(chara, you, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        '의 힘이 ',
        you.get_colored_name(),
        '의 뻔뻔한 욕망을 뒷받침했다...',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 공포에 질린 표정이다...',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '을(를) 제압하지 못했다...',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 재빨리 밀어 쓰러뜨리고 자리를 떠났다……',
      ]);
      await printAndWait([
        '바록 ',
        chara.get_colored_name(),
        '은(는) 이 일을 공개적으로 발설하진 않았지만 ',
        you.get_colored_name(),
        '의 사회적 평판은 떨어졌다!',
      ]);
    }
  },

  async drug(chara, you, medicine_type, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        '의 비열한 잔재주가 통했다...',
      ]);
      if (medicine_type === 1) {
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 약이 든 차를 마시고 솟구친 욕망에 이성을 잃어버렸다...',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 약이 든 차를 마시고 깊게 잠들었다...',
        ]);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 재빨리 이상함을 감지했다...',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 재빨리 밀어 쓰러뜨리고 자리를 떠났다……',
      ]);
      await printAndWait([
        '바록 ',
        chara.get_colored_name(),
        '은(는) 이 일을 공개적으로 발설하진 않았지만 ',
        you.get_colored_name(),
        '의 사회적 평판은 떨어졌다!',
      ]);
    }
  },

  async after_rape_by_super_uma_z(chara) {
    await printAndWait([
      '비록 순간적인 감정에 휩쓸렸지만 ',
      chara.get_colored_name(),
      '은(는) 정신을 차리고 나면 이 일에 부끄러움과 분노를 느낄 것이다...',
    ]);
  },

  // Reused from EraUmaK 2.21 ero-act-handler/use-ero-medicine.js.
  med_no_medicines: '사용 가능한 약이 없다……',
  med_select_target: '누구에게 약을 먹일까?',

  get_med_select_medicine: (chara) => [
    chara.get_colored_name(),
    '에게 어떤 약을 먹일까?',
  ],
  med_select_medicine_for_you: '어떤 약을 사용할까?',
  get_med_confirm_for_chara: (chara, item) => [
    chara.get_colored_name(),
    '에게 ',
    item,
    '을(를) 사용할까?',
  ],
  get_med_confirm_for_you: (item) => [item, '을(를) 사용할까?'],

  // Reused from EraUmaK 2.21 ero-act-handler/use-ero-item.js.
  itm_no_items: '사용할 장난감이 없다……',
  itm_select_item: '어떤 장난감을 착용시킬까?',
  get_itm_confirm_with_part: (chara, item, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '에게 ',
    item,
    ' 착용시키겠습니까?',
  ],
  get_itm_confirm_without_part: (chara, item) => [
    chara.get_colored_name(),
    '에게 ',
    item,
    ' 착용시키겠습니까?',
  ],

  // Reused from EraUmaK 2.21 ero-act-handler/change-master.js.
  get_change_master_info: (chara) => [
    chara.get_colored_name(),
    ' 은(는) 주도권을 잡았다...',
  ],

  // Reused from EraUmaK 2.21 sub-calc-ero-orgasm/update-orgasms.js.
  orgasm: '절정했다',
  orgasm_template: '%TIME%중 절정이 발생했다',

  get_chara_total_orgasm: (chara, orgasm) => [
    chara.get_colored_name(),
    ' 에게 ',
    orgasm,
    '이 발생했다!',
  ],
  get_chara_part_orgasm: (chara, part, orgasm) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '가 ',
    orgasm,
  ],
  get_chara_spirit_orgasm: (chara, cause, orgasm) => [
    chara.get_colored_name(),
    ' 이(가) ',
    cause,
    ' 로 인해 ',
    orgasm,
  ],

  // Reused from EraUmaK 2.21 sub-calc-ero-orgasm/update-orgasms.js.
  get_chara_cum_on_face: (chara, targets, semen) => [
    chara.get_colored_name(),
    ' 이(가) ',
    ...targets,
    ' 의 얼굴에 ',
    semen,
    '의 정액을 사정했다!',
  ],
  get_chara_cum_in_condom: (chara, semen) => [
    chara.get_colored_name(),
    ' 이(가) 콘돔 안에 ',
    semen,
    '의 정액을 사정했다!',
  ],
  get_chara_cum_in_artificial_vagina: (chara, item, semen) => [
    chara.get_colored_name(),
    ' 이(가) ',
    item,
    ' 안에 ',
    semen,
    '의 정액을 사정했다!',
  ],
  get_chara_cum_in_part: (chara, target, part, semen) => [
    chara.get_colored_name(),
    ' 이(가) ',
    target.get_colored_name(),
    ' 의 ',
    part,
    ' ',
    semen,
    '의 정액을 사정했다!',
  ],
  get_chara_cum: (chara, semen) => [
    chara.get_colored_name(),
    ' 이(가) ',
    semen,
    '의 정액을 사정했다!',
  ],
  cum_in_anal: '애널 안에',
  cum_in_body: '몸 위에',
  cum_in_breast: '가슴 안에',
  cum_in_clitoris: '음핵 위에',
  cum_in_foot: '발 위에',
  cum_in_hand: '손 안에',
  cum_in_mouth: '입안에',
  cum_in_penis: '자지 위에',
  cum_in_virgin: '보지 안에',

  // Reused from EraUmaK 2.21 sub-calc-ero-orgasm/update-orgasms.js.
  get_milk_info(cid, targets, part, amount, is_orgasm) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push(' ', ...targets, ' 의 입안에 ');
        break;
      case part_enum.hand:
        actions.push(' ', ...targets, ' 의 손가락 사이에 ');
        break;
      case item_enum.milk_pump:
        actions.push(
          ' ',
          { content: '착유기', color: buff_colors[2] },
          ' 안에 ',
        );
    }
    if (get(`ex:${cid}:喷奶阻碍`) > 0) {
      actions.push('기세 좋게 뿜어냈다 ');
    } else if (is_orgasm) {
      actions.push('뿜어냈다 ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case part_enum.hand:
        case part_enum.item:
          actions.push('배어 나왔다 ');
          break;
        default:
          actions.push('흘러나왔다 ');
      }
    }
    actions.push(' ', amount, ' 의 모유');
    return actions;
  },

  get_squirt_info(cid, targets, part, amount) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push(' ', ...targets, ' 의 입안을 향해 ');
        break;
      case part_enum.hand:
        actions.push(' ', ...targets, ' 의 손가락 사이에 ');
        break;
      case part_enum.foot:
        actions.push(' ', ...targets, ' 의 발밑에 ');
        break;
      case part_enum.penis:
        return [amount, ' 의 애액을 ', ...targets, ' 의 귀두에 쏟아부었다'];
      case 100:
        actions.push(' ', ...targets, ' 의 입술을 향해 ');
        break;
      case 101:
        actions.push(' ', ...targets, ' 의 자지를 향해 ');
    }
    if (get(`nowex:${cid}:潮吹`) > 0) {
      actions.push('뿜어냈다 ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case 100:
          actions.push('튀어 나왔다 ');
          break;
        default:
          actions.push('흘러나왔다 ');
      }
    }
    actions.push(' ', amount, ' 의 애액');
    return actions;
  },

  // Reused from EraUmaK 2.21 sub-begin-and-end/get-ex-result-in-the-end.js.
  unsatisfied_mouth:
    '만족하지 못한 입술이 여전히 살짝 벌어진 채 무언가를 기대하는 듯하다……',
  unsatisfied_body:
    '충분히 사랑받지 못한 몸이 번들거리는 땀과 홍조를 띠고 있다……',
  unsatisfied_penis:
    '한계 직전의 페니스는 여전히 사정을 갈망하고 있다……',
  unsatisfied_clitoris:
    '완전히 부풀어 오른 붉은 클리토리스가 요염하면서도 고통스러워 보인다……',
  unsatisfied_vagina: '달싹이는 보지가 연신 열기를 내뿜고 있다……',

  // Reused from EraUmaK 2.21 page-ero.js print_milking().
  get_milk_ml: (amount, item) => [
    '착유기로 우유를 짜서 모았다: ',
    amount,
    'ml ',
    item,
  ],
  get_milk_item: (amount, item) => [
    '포장해서 처리했다. ',
    amount,
    ' 획득【',
    item,
    '】',
  ],
  get_your_milk_info: (amount, you) => [
    '（그중 ',
    amount,
    ' 병은 ',
    you.get_colored_name(),
    '의 것이다）',
  ],

  // Reused from EraUmaK 2.21 sys-prepare-ero.js result reporter block.
  async ero_report(taste, minoru, riko, glasse, cocon) {
    taste.say_as_unknown('발표! 하이라이트 중계~♫');
    minoru.say_as_unknown('이제 이번 우마뾰이 보고를 전해 드립니다~');
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait('마……마음에 안……들면……');
      await cocon.say_as_unknown_and_wait('트레이너~');
      await glasse.say_as_unknown_and_wait(
        '힘내세요! 트레이너님~ 힘내세요!',
      );
      await riko.say_as_unknown_and_wait(
        '……다음 우마뾰이 시 인터페이스 설정에서 【우마뾰이 결과 요약】을 켜주세요……',
      );
      await riko.say_as_unknown_and_wait('……오～');
    } else {
      await riko.say_as_unknown_and_wait(
        '마음에 들지 않으시면 우마뾰이에서 인터페이스 설정에서 【우마뾰이 결과 요약】을 켜주세요~',
      );
    }
  },

  // [번역 대상] bt_rape_in_sleeping
  bt_rape_in_sleeping: '襲う！',

  // [번역 대상] get_chara_have_liquid
  get_chara_have_liquid: (chara, part, change) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' が',
    ...change,
  ],

  // [번역 대상] get_escape_info
  get_escape_info: (chara) => [chara.get_colored_name(), ' は逃げた'],

  // [번역 대상] get_itm_give_up_item
  get_itm_give_up_item: (you, item) => [
    you.get_colored_name(),
    ' は ',
    item,
    ' を使うのをやめた',
  ],

  // [번역 대상] get_itm_give_up_take_off
  get_itm_give_up_take_off: (you) => [
    you.get_colored_name(),
    ' は性玩具を外すのをやめた',
  ],

  // [번역 대상] get_itm_no_item_to_take_off
  get_itm_no_item_to_take_off: (you) => [
    you.get_colored_name(),
    ' には性玩具がついていない',
  ],

  // [번역 대상] get_itm_select_part
  get_itm_select_part: (chara, item) => [
    chara.get_colored_name(),
    ' のどの部位に ',
    item,
    ' を使う？',
  ],

  // [번역 대상] get_itm_take_off_confirm
  get_itm_take_off_confirm: (chara, part, item) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' から ',
    item,
    ' を外す？',
  ],

  // [번역 대상] get_itm_take_off_give_up
  get_itm_take_off_give_up: (you, item) => [
    you.get_colored_name(),
    ' は ',
    item,
    ' を外すのをやめた',
  ],

  // [번역 대상] get_lub_confirm
  get_lub_confirm: (chara, part) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' を潤滑する？',
  ],

  // [번역 대상] get_lub_give_up
  get_lub_give_up: (you) => [
    you.get_colored_name(),
    ' は潤滑液を使うのをやめた',
  ],

  // [번역 대상] get_lub_select_part
  get_lub_select_part: (chara) => [
    chara.get_colored_name(),
    ' のどの部位を潤滑する？',
  ],

  // [번역 대상] get_med_give_up
  get_med_give_up: (you) => [you.get_colored_name(), ' は薬を使うのをやめた'],

  // [번역 대상] get_med_give_up_medicine
  get_med_give_up_medicine: (item) => [item, 'を使うのをやめた'],

  // [번역 대상] get_med_no_medicines_for_chara
  get_med_no_medicines_for_chara: (chara) => [
    chara.get_colored_name(),
    ' に飲ませられる薬がない',
  ],

  // [번역 대상] get_want_sex_sleep
  get_want_sex_sleep: (chara) => [
    chara.get_colored_name(),
    ' は気持ちよく眠っている。',
    { isBr: true },
    '襲うか？',
  ],

  // [번역 대상] itm_no_parts
  itm_no_parts: 'その性玩具を使える部位がない',

  // [번역 대상] itm_take_off_mirror_confirm
  itm_take_off_mirror_confirm: '【全身鏡】を外す？',

  // [번역 대상] itm_take_off_select_item
  itm_take_off_select_item: 'どの性玩具を外す？',

  // [번역 대상] itm_take_off_select_target
  itm_take_off_select_target: '誰の性玩具を外す？',

  // [번역 대상] lub_no_parts
  lub_no_parts: '潤滑が必要な部位がない',

  // [번역 대상] lub_select_target
  lub_select_target: '誰に潤滑液を使う？',

  // [번역 대상] med_no_medicines_for_you
  med_no_medicines_for_you: '服用できる薬がない',

  // [번역 대상] unsatisfied_hidden_nipple
  unsatisfied_hidden_nipple:
    '飽くなき木の実が、守る窪みの外で微かに震えながら尖っている……',

  // [번역 대상] unsatisfied_lose_virgin_p
  unsatisfied_lose_virgin_p:
    'だがそのなかに籠もっていた荒ぶる力は、完全には解放されなかった……',

  // [번역 대상] unsatisfied_lose_virgin_v
  unsatisfied_lose_virgin_v:
    '破瓜の体は、初めて禁果を噛んだ体験のなかで、快楽の甘さを味わいきれなかった……',

  // [번역 대상] unsatisfied_masochism
  unsatisfied_masochism: '被虐で味わうはずだった快楽が、まだ消えない……',

  // [번역 대상] unsatisfied_masochism_zero_stamina
  unsatisfied_masochism_zero_stamina: '被虐の夢が、静まりかけた体を騒がせる……',

  // [번역 대상] unsatisfied_nipple
  unsatisfied_nipple: '飽くなき木の実が、微かに震えながら尖っている……',

  // [번역 대상] unsatisfied_sadism
  unsatisfied_sadism: '加虐で味わうはずだった快楽が、まだ消えない……',

  // [번역 대상] unsatisfied_sadism_zero_stamina
  unsatisfied_sadism_zero_stamina: '加虐の夢が、静まりかけた体を騒がせる……',
};
