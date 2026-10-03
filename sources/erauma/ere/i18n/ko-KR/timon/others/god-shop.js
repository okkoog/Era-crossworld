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


ko.pray_your_power = async (
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
  printButton('スピード（+80）', 0, { disabled: disabled_list[0] });
  printButton('スタミナ（+80）', 1, { disabled: disabled_list[1] });
  printButton('パワー（+80）', 2, { disabled: disabled_list[2] });
  printButton('根性（+80）', 3, { disabled: disabled_list[3] });
  printButton('賢さ（+80）', 4, { disabled: disabled_list[4] });
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
    await god.say_as_unknown_and_wait('これからも、頑張れ……');
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

ko.common_start_pray = (chara, you) => {
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
      ' はひとり、三女神像の前で静かに祈った……',
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

module.exports = ko;
