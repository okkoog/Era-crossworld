const { input, printAndWait, printButton } = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/sex/system');

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
};
