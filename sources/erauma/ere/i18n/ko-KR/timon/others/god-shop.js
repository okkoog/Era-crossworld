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

module.exports = ko;
