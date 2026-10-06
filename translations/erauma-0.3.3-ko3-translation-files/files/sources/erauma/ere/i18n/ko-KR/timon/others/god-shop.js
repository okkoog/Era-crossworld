// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const money_color = require('#/data/color-const')["money_color"];
/**
 * Partial Korean reuse from EraUmaK 2.21.
 * Unmatched/new 3.113 entries inherit from ja-JP.
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/others/god-shop');

const ko = Object.create(ja);

Object.assign(ko, {
  get_chara_react(chara, you, chara_chara) {
    switch (chara_chara) {
      case 1:
      case 3:
        return [
          '곁에 있는 ',
          chara.get_colored_name(),
          '은(는) 자신감 넘치는 미소를 지으며 ',
          you.get_colored_name(),
          '에게 신뢰의 시선을 보낸다.',
        ];
      case -1:
      case 0:
      case 2:
        return [
          '곁에 있는 ',
          chara.get_colored_name(),
          '은(는) 세 여신상을 진지하게 응시하다가, 시선을 다시 ',
          you.get_colored_name(),
          '에게 돌렸다. 마치 ',
          you.get_colored_name(),
          '이(가) 무언가 하기를 기다리는 듯하다.',
        ];
      case -3:
      case -2:
        return [
          '곁에 있는 ',
          chara.get_colored_name(),
          '은(는) 조용히 꼬리를 흔들며 ',
          you.get_colored_name(),
          '의 다음 행동을 기다리고 있다.',
        ];
    }
  },

  start(chara, god, you, has_prayed, chara_react) {
    if (chara.id > 0) {
      if (has_prayed) {
        god.say_as_unknown('……');
        print('세 여신상의 위에서 수수께끼 같은 기운이 감돌고 있다……');
        print([
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '을(를) 누군가 지켜보고 있는 걸까……',
        ]);
      } else {
        print([
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 함께 세 여신상 앞에 도착했다.',
        ]);
        print(chara_react);
      }
    } else if (has_prayed) {
      god.say_as_unknown('……');
      print('세 여신상의 위에서 수수께끼 같은 기운이 감돌고 있다……');
      print([you.get_colored_name(), '을(를) 누군가 지켜보고 있는 걸까……']);
    } else {
      print([you.get_colored_name(), '은(는) 홀로 세 여신상 앞에 섰다.']);
      print(
        '엄숙하고 위엄 있는 세 여신상의 어깨의 병 속의 물이 끊임없이 흘러나오고 있다.',
      );
      god.say_as_unknown('……');
    }
  },

  bt_pray_honour_buff: '유명해지기를 기원하기（1000 명성）',
  bt_pray_money_buff: '부자가 되기를 기원하기（500 명성）',
  bt_pray_money: '즉시 부자가 되기를 기원하기（50+ 명성）',
  bt_pray_your_power: '더 강해지기를 기원하기（200 명성）',
  get_bt_pray_over_limit: (name) =>
    `${name}의 한계돌파를 기원하기（50-500 명성）`,
  bt_pray_self_over_limit: '한계돌파를 기원하기（50-500 명성）',
  get_bt_pray_heal: (name) =>
    `${name}의 건강 회복을 기원하기（800 명성）`,
  bt_pray_self_heal: '건강 회복을 기원하기（800 명성）',
});

ko.pray_honour_buff = async (you, uma, finish_cb) => {
  print(
    '（이것이 내가 갈망하는 것인가?）\n머릿속에, 왠지 모르게 이런 생각이 스쳐 지나갔다……',
  );
  printButton(
    `그래（명성 획득량+${get('global:声望加成')}%->${get('global:声望加成') + 1}%）`,
    1,
  );
  printButton('아마 아닐지도……', 2);
  const ret = await input();
  if (ret === 1) {
    await printAndWait(
      '마음속으로 많은 사람들에게 둘러싸여 칭찬받는 장면을 상상했다……',
    );
    await finish_cb();
    println();
    const honour = get('flag:当前声望');
    if (honour >= 2000) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 휴대폰을 켜고, 자신의 명성이 일본을 벗어나 세계로 뻗어나가지 못한 것을 한탄했다.',
      ]);
    } else if (honour >= 1000) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 휴대폰을 켜고, 자신의 명성이 직접적으로 더 많은 우수한 학생을 유치해 주지 못했다는 사실에 한숨을 내쉬었다.',
      ]);
    } else if (honour >= 500) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 휴대폰을 켜고, 절친과 가족을 제외하면 자신을 진심으로 신경 써주는 사람이 거의 없다는 사실에 한숨을 내쉬었다.',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 휴대폰을 켜고, 절친과 가족을 제외하면 연락처가 거의 없다는 사실에 한숨을 내쉬었다.',
      ]);
    }
    await printAndWait(
      '그렇게 생각하고 있을 때, 휴대폰에 낯선 사람으로부터 메시지가 갑자기 도착했다.',
    );
    await printAndWait([
      you.get_colored_name(),
      '이(가) 어떻게 ',
      uma,
      '를 육성하고, 또 ',
      you.get_colored_name(),
      '이(가) 키운 ',
      uma,
      '의 성적을 보고 싶어 하는 사람이 보낸 것이었다.',
    ]);
    await printAndWait(
      '그 후, 예전보다 더 많은 이런 메시지를 받게 되었다……',
    );
  }
  return ret;
};

ko.pray_money_buff = async (you, finish_cb) => {
  print(
    '（이것이, 나의 진심인가?）\n머릿속에, 왠지 모르게 이런 생각이 스쳐 지나갔다……',
  );
  printButton(
    `그래（우마코인 획득량+${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%）`,
    1,
  );
  printButton('아닐지도', 2);
  const ret = await input();
  if (ret === 1) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 머릿속으로 저금통이 날마다 쌓여 점점 무거워지는 모습을 상상해 봤다……',
    ]);
    await finish_cb();
    println();
    await printAndWait(
      '왠지 모르게 머릿속에 당신의 월급과 배당금 숫자가 떠올랐는데, 어렴풋이 예전보다 수치가 높아진 것 같은 느낌이 든다.',
    );
    await printAndWait(
      '트레센 월급은 예전부터 이랬으니 아마 착각이겠지……',
    );
  }
  return ret;
};


ko.pray_your_power = // [번역 완료] pray_your_power
  async (
  you,
  god,
  uma,
  disabled_list,
  random_select,
  pray_cb,
  finish_cb,
) => {
  print('（어떤 부분을 개선해야 할까?）');
  print('머릿속에 이런 의문이 떠올랐다...');
  printButton('스피드（+80）', 0, { disabled: disabled_list[0] });
  printButton('스태미나（+80）', 1, { disabled: disabled_list[1] });
  printButton('파워（+80）', 2, { disabled: disabled_list[2] });
  printButton('근성（+80）', 3, { disabled: disabled_list[3] });
  printButton('지능（+80）', 4, { disabled: disabled_list[4] });
  printButton('아마 전부……（무작위 능력치+100）', 5);
  printButton('더 이상 강해질 필요는 없을지도……', 99);
  const ret = [await input(), 0];
  ret[1] = ret[0];
  if (ret[0] <= 5) {
    switch (ret[0]) {
      case 0:
        await printAndWait([
          '조깅하는 담당 ',
          uma,
          '와 나란히 걸으며 지도해 주는 것을 상상했다……',
        ]);
        break;
      case 1:
        await printAndWait([
          '지치지 않고 담당 ',
          uma,
          '를 가르치는 모습을 상상했다……',
        ]);
        break;
      case 2:
        await printAndWait([
          '자신의 담당 ',
          uma,
          '의 줄다리기 대회 우승을 돕는 모습을 상상했다……',
        ]);
        break;
      case 3:
        await printAndWait([
          '목이 터져라 담당',
          uma,
          '를 응원하는 모습을 상상했다……',
        ]);
        break;
      case 4:
        await printAndWait([
          '담당 ',
          uma,
          '를 위해 완벽한 트레이닝 계획을 짜는 것을 상상했다……',
        ]);
        break;
      case 5:
        await printAndWait([
          '머릿속에 담당 ',
          uma,
          '가 자신을 위로하는 모습이 스쳐 지나갔다……',
        ]);
        ret[1] = random_select;
    }
    await pray_cb();
    println();
    await finish_cb();
    switch (ret[1]) {
      case 0:
        await printAndWait([
          '따뜻한 여운이 여전히 머릿속에 남은 ',
          you.get_colored_name(),
          '은(는) 몸이 더 가벼워지는 것을 느꼈다……',
        ]);
        break;
      case 1:
        await printAndWait([
          '따뜻한 여운이 여전히 머릿속에 남은 ',
          you.get_colored_name(),
          '은(는) 호흡이 더 차분해지는 것을 느꼈다……',
        ]);
        break;
      case 2:
        await printAndWait([
          '따뜻한 여운이 여전히 머릿속에 남은 ',
          you.get_colored_name(),
          '은(는) 근육이 더 단단해진 것을 느꼈다……',
        ]);
        break;
      case 3:
        await printAndWait([
          '따뜻한 여운이 여전히 머릿속에 남은 ',
          you.get_colored_name(),
          '은(는) 마음 속에서 뜨거운 열기가 솟구치는 것을 느꼈다……',
        ]);
        break;
      case 4:
        await printAndWait([
          '따뜻한 여운이 여전히 머릿속에 남은',
          you.get_colored_name(),
          '은(는)  머릿속이 유난히 맑아지는 것을 느꼈다……',
        ]);
    }
  } else {
    await god.say_as_unknown_and_wait('앞으로도 힘내라……');
    await printAndWait('그런 목소리가 들리는 것 같다.');
    println();
    await finish_cb();
    await printAndWait('세 여신상은 여전히 고요하게 서있다……');
  }
  return ret;
};

ko.pray_heal = async (chara, god, you, uma, chara_react, finish_cb) => {
  print([
    '（역시, 가장 바라는 건……)',
    { isBr: true },
    you.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '을(를) 걱정하며 건강을 떠올렸다.',
  ]);
  printButton('만약, 기도가 소용이 있다면……', 1);
  printButton('기도보다는, 역시 다른 노력이 더 필요하겠지……', 2);
  const ret = await input();
  if (ret === 1) {
    await printAndWait([
      chara.get_colored_name(),
      '가 다시 건강하고 활기차게 변해가는 모습을 그렸다……',
    ]);
    await printAndWait([
      '기도를 마친 후 ',
      you.get_colored_name(),
      '은(는) 눈을 떴다.',
    ]);
    println();
    if (chara.id > 0) {
      await printAndWait([
        '활력이 넘치는 몸을 느끼며 ',
        you.get_colored_name(),
        '은(는) 세 여신상 앞에 온 목적이 무엇인지 문득 의문이 들었다.',
      ]);
    } else {
      await printAndWait(chara_react);
      println();
      await printAndWait([
        '방금 활력이 넘치는 ',
        chara.get_colored_name(),
        '과(와) 함께 세 여신상 앞에 온 ',
        you.get_colored_name(),
        '은(는) 도대체 뭘 하러 온 걸까?',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 다음에 할 일을 고민해 봤다.',
      ]);
    }
  } else {
    await printAndWait([
      chara.get_colored_name(),
      '이(가) 휴식을 취한 후 상태가 점점 회복되는 모습을 상상했다……',
    ]);
    println();
    await god.say_as_unknown_and_wait('너라면…… 해낼 수 있어……');
    await printAndWait('이런 소리가 들린 것 같다.');
    println();
    await finish_cb();
    println();
    await printAndWait('세 여신상은 여전히 고요히 서 있다……');
  }
  return ret;
};

ko.common_start_pray = // [번역 완료] common_start_pray
  (chara, you) => {
  if (chara.id > 0) {
    print([
      you.get_colored_name(),
      '의 지시에 따라,',
      chara.get_colored_name(),
      '은(는) 함께 눈을 감고, 세 여신상 앞에서 조용히 기도를 올리고 있다……',
    ]);
  } else {
    print([
      you.get_colored_name(),
      '은(는) 홀로 세 여신상 앞에서 조용히 기도했다……',
    ]);
  }
};

ko.common_finish_pray = async (chara, you) => {
  if (chara.id > 0) {
    await printAndWait([
      '기도를 마친 후 ',
      you.get_colored_name(),
      '과(와) 곁에 있던 ',
      chara.get_colored_name(),
      '은(는) 동시에 눈을 떴다.',
    ]);
  } else {
    await printAndWait([
      '기도를 마친 후 ',
      you.get_colored_name(),
      '은(는) 천천히 눈을 떴다.',
    ]);
  }
};

ko.common_pray_your_power = async (you) => {
  await printAndWait([
    '어둠 속에서 희미한 빛이 일렁이며, 서서히 ',
    you.get_colored_name(),
    '의 몸속으로 흘러들어갔다!',
  ]);
};

ko.common_pray_peace = async () => {
  await printAndWait('트레센 학원의 평안을 기원했다');
};

ko.start_with_no_god = async (you, god) => {
  await printAndWait('세 여신상이 고요히 서 있다...');
  if (typeof god === 'object') {
    await printAndWait([
      you.get_colored_name(),
      ' 갑자기 뒤에서 누군가 말을 거는 소리가 들려...',
    ]);
    await printAndWait([
      '뒤를 돌아보니 ',
      god.get_colored_name(),
      '이(가) 어느새 ',
      you.get_colored_name(),
      '의 뒤에 서 있었다...',
    ]);
  }
};


ko.pray_over_limit = // [번역 완료] pray_over_limit
  async (chara, you, uma, limited, cost) => {
  print([
    '（',
    limited,
    '개 항목의 능력이 한계에 도달한 ',
    chara.get_colored_name(),
    '에게 더 높은 한계를 요구할 것인가?）',
    { isBr: 1 },
    '머릿속에 그런 질문이 떠올랐다……',
  ]);
  printButton(`동의한다（${cost} 명성, 트레이닝 보정-10%）`, 1);
  printButton('조금은 속도를 늦춰도 괜찮다', 2);
  const ret = await input();
  if (ret === 1) {
    if (chara.id > 0) {
      await printAndWait([
        '곁에서 ',
        chara.uma_sex_title,
        '가 선배들을 끊임없이 뛰어넘고, 경기장에서 기록을 경신하는 모습을 상상했다...',
      ]);
      await printAndWait([
        '기도를 마친 후, 곁에 있던 ',
        chara.get_colored_name(),
        '과(와) 동시에 눈을 떴다.',
      ]);
      println();
      await printAndWait([
        '눈을 뜬 ',
        you.get_colored_name(),
        '은(는), 곁에 있는 ',
        chara.get_colored_name(),
        '에게서 드러나는 새로운 잠재력을 분명히 감지했다!',
      ]);
    } else {
      await printAndWait(
        '등불을 켜고 밤을 새워가며, 하나하나 새로운 훈련서를 작성하는 모습을 상상해 보았다……',
      );
      await printAndWait([
        '어둠 속에서 희미한 빛이 솟아올라, 천천히 ',
        you.get_colored_name(),
        '의 몸 속으로 들어갔다!',
      ]);
      println();
      await printAndWait('기도를 마친 후 천천히 눈을 뜨자...');
      await printAndWait([
        '따뜻한 여운이 여전히 머릿속에 남아 있는 ',
        you.get_colored_name(),
        '은(는) 자신이 한 단계 더 성장할 수 있다는 사실을 확신하게 되었다.',
      ]);
    }
  } else if (chara.id > 0) {
    await printAndWait([
      '곁에 있는 ',
      chara.get_colored_name(),
      '이(가) 매일 성실하게 훈련하는 모습을 떠올렸다……',
    ]);
    await printAndWait([
      '기도를 마친 후 ',
      you.get_colored_name(),
      '과(와) 곁에 있는 ',
      chara.get_colored_name(),
      '은(는) 동시에 눈을 떴다.',
    ]);
  } else {
    await printAndWait([
      '자신과 ',
      uma,
      '들이 함께 보낸 셀 수 없는 나날을 떠올렸다……',
    ]);
    await printAndWait('기도를 마치고 천천히 눈을 떴다.');
  }
  return ret;
};


ko.pray_money = // [번역 완료] pray_money
  async (you, uma, finish_cb) => {
  print(
    '（그럼, 대략 얼마나 필요하지?）\n머릿속에 갑자기 그런 질문이 떠올랐다……',
  );
  const honour = get('flag:当前声望');
  printButton('250 우마코인이면 돼……（50 명성）', 1, {
    disabled: honour <= 50,
  });
  printButton('500 우마코인이면 돼……（100 명성）', 2, {
    disabled: honour <= 100,
  });
  printButton('750 우마코인이면 돼……（150 명성）', 3, {
    disabled: honour <= 150,
  });
  printButton('1,000 우마코인이면 돼……（200 명성）', 4, {
    disabled: honour <= 200,
  });
  printButton('그만둔다', 99);
  const ret = await input();
  switch (ret) {
    case 1:
    case 2:
      await printAndWait([
        you.get_colored_name(),
        '은(는) 손에 넣은 돈으로 ',
        uma,
        '에게 트레이닝 장비를 사 주는 모습을 떠올렸다……',
      ]);
      await finish_cb();
      println();
      await printAndWait([
        '얼마 지나지 않아 ',
        you.get_colored_name(),
        '은(는) 학원에서 연락을 받았다. 지도 방식이 부상으로 이어질 수 있다는 내용이었다.',
      ]);
      await printAndWait([
        '이어서 ',
        (250 * ret).toString(),
        ' 우마코인이 지급되었고, 트레이닝 방침을 개선하라는 요청을 받았다……',
      ]);
      break;
    case 3:
    case 4:
      await printAndWait([
        you.get_colored_name(),
        '은(는) 돈의 바다를 거니는 모습을 머릿속으로 그렸다...',
      ]);
      await finish_cb();
      println();
      await printAndWait([
        '얼마 지나지 않아 ',
        you.get_colored_name(),
        '은(는) 학원에서 특별 수당으로 ',
        (250 * ret).toString(),
        ' 우마코인을 받았다.',
      ]);
      await printAndWait([
        '단, 트레센 학원의 트레이너로서 더 이상 이상한 소문을 만들지 않는 것이 조건인 듯하다……',
      ]);
  }
  return ret;
};

ko.leave = // [번역 완료] leave
  async (chara, you, has_prayed) => {
  if (chara.id > 0) {
    if (has_prayed) {
      await printAndWait([
        chara.get_colored_name(),
        '과(와) ',
        you.get_colored_name(),
        '은(는) 함께 세 여신상을 떠났다.',
      ]);
    } else {
      await printAndWait([
        '세 여신상 앞에서 간단히 경의를 표한 뒤 ',
        chara.get_colored_name(),
        '과(와) ',
        you.get_colored_name(),
        '은(는) 함께 세 여신상을 떠났다.',
      ]);
    }
  } else if (has_prayed) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 돌아서서 트레이너실 쪽으로 향했다.',
    ]);
  } else {
    await printAndWait([
      '세 여신상에 가볍게 예를 올린 뒤, ',
      you.get_colored_name(),
      '은(는) 돌아서서 트레이너실 쪽으로 향했다.',
    ]);
  }
};

module.exports = ko;

module.exports = {
  ...module.exports,

  // [번역 완료] borrow_money
  async borrow_money(god, you) {
    const honour = get('flag:当前声望');
    if (honour < 50) {
      return await printAndWait('명성이 부족하다');
    }
    print('우마코인이 얼마나 필요한가?');
    printButton('400 우마코인（50 명성）', 1);
    printButton('800 우마코인（100 명성）', 2, { disabled: honour < 100 });
    printButton('1200 우마코인（150 명성）', 2, { disabled: honour < 150 });
    printButton('1600 우마코인（200 명성）', 2, { disabled: honour < 200 });
    printButton('그만둔다', 99);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        god.get_colored_name(),
        '에게 우마코인을 바라는 기도를 포기했다……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 트레센에서 추가 수당 ',
        { color: money_color, content: (400 * ret).toLocaleString() },
        ' 우마코인 지급 통지를 받았다…… 다만 문면에는 어딘가 깔보는 듯한 뉘앙스가 묻어 있었다……',
      ]);
    }
    return ret;
  },

  // [번역 완료] bt_pray
  bt_pray: '여신에게 기도한다',

  // [번역 완료] get_target_entry_heal
  get_target_entry_heal: (name, cost) => `${name}（${cost} 명성）`,

  // [번역 완료] get_target_entry_over_limit
  get_target_entry_over_limit: (name, cost) =>
    `${name}（-${cost} 명성, 트레이닝 보정-10%）`,

  // [번역 완료] handle_pray_end
  handle_pray_end(god, you, has_prayed) {
    if (has_prayed) {
      print([
        god.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 소원을 이루어 주었다',
      ]);
    } else {
      print([
        you.get_colored_name(),
        '은(는) ',
        god.get_colored_name(),
        '에게 올리던 기도를 포기했다……',
      ]);
    }
  },

  // [번역 완료] handle_pray_honour_buff
  async handle_pray_honour_buff() {
    print('정말로?');
    printButton(
      `확정（명성 획득+${get('global:声望加成')}%→${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('그만둔다', 2);
    return await input();
  },

  // [번역 완료] handle_pray_money_buff
  async handle_pray_money_buff() {
    print('정말로?');
    printButton(
      `확정（우마코인 획득+${get('global:金钱加成')}%→${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('그만둔다', 2);
    return await input();
  },

  // [번역 완료] handle_pray_over_limit
  handle_pray_over_limit(chara) {
    print([chara.get_colored_name(), '은(는) 한계를 넘어선 듯하다']);
  },

  // [번역 완료] handle_pray_your_power
  async handle_pray_your_power(disabled_list, random_select) {
    print('어떤 능력이 필요한가?');
    printButton('스피드（+80）', 0, { disabled: disabled_list[0] });
    printButton('스태미나（+80）', 1, { disabled: disabled_list[1] });
    printButton('파워（+80）', 2, { disabled: disabled_list[2] });
    printButton('근성（+80）', 3, { disabled: disabled_list[3] });
    printButton('지능（+80）', 4, { disabled: disabled_list[4] });
    printButton('아무거나 괜찮아!（무작위 능력치+100）', 5);
    printButton('그만둔다', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] === 5) {
      ret[1] = random_select;
    }
    return ret;
  },

  // [번역 완료] no_targets
  no_targets: '조건을 만족하는 대상이 없다',

  // [번역 완료] pray_heal_no_need
  async pray_heal_no_need(chara, you, finish_cb) {
    await printAndWait([
      '여신님께서 앞으로도 ',
      chara.get_colored_name(),
      '의 건강을 지켜 주시길 기도한다……',
    ]);
    println();
    await finish_cb();
    println();
    await printAndWait('세 여신상은 지금도 조용히 서 있다……');
  },

  // [번역 완료] pray_select
  pray_select: '무엇을 기도할까?',

  // [번역 완료] select_target
  select_target: '대상을 선택해 주세요',
};
