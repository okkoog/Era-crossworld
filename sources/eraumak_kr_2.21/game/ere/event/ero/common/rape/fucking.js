/**
 * @file 调教指令 - 强奸性交系
 * @author ALEX
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');
const EroRapedFucking = require('#/event/ero/common/rape/raped-fucking');

const { get_random_entry } = require('#/utils/list-utils');

const { get_hair_color, get_skin_color } = require('#/data/info-generator');

const skin_color_desc = ['상아색', '하얀', '붉은기가 도는', '연갈색'];

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function continue_fucking_common(attacker, defender) {
  if (era.get(`tcvar:${defender.id}:절정임박`)) {
    await defender.say_and_wait('흣…… 하아❤️…… 그만해……');
    await defender.print_and_wait([
      '부풀어 오른 육봉이 전혀 신사적이지 않게 자신의 체내를 들락날락하고, 심지어 질 주름에 밀착해 뛰는 충혈된 핏줄까지 선명하게 느껴진다.',
    ]);
    await defender.say_and_wait('우하앗…… 응❤️');
    await defender.say_and_wait('안 돼…… 이대로면……', true);
    await defender.print_and_wait([
      '마치 정교한 오나홀처럼 난폭하게 다뤄지며, 뜨거운 귀두와 단단한 육봉이 질 속의 모든 주름을 긁고 지나간다.',
    ]);

    await defender.print_and_wait(
      '밀려오는 것은 예상했던 극심한 고통이 아니라, 오히려 뇌수를 마비시킬 듯한 짜릿한 쾌감의 연속이었다.',
    );

    await defender.say_and_wait('안 돼❤️ 더는…… 더 이대로면……', true);
    await defender.say_and_wait('이대로 계속하면, 나…… 가버려❤️', true);
    await defender.print_and_wait([
      '반항하고 싶지만, 통제력을 잃은 표정도, 내뱉는 요염한 신음도, 꼿꼿하게 펴진 가느다란 발가락도, 이미 몸에 조금의 여유도 남아있지 않다는 사실을 증명하고 있었다.',
    ]);
  } else {
    const message = [
      async () => {
        await defender.say_and_wait('으구우웃!!');
        await attacker.print_and_wait([
          '굵고 거대한 육봉이 가차 없이 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 암컷구멍을 쑤시자, 그녀는 음탕한 교성을 지르며 아름다운 눈동자를 하얗게 뒤집었다.',
        ]);
        await attacker.print_and_wait([
          '뜨겁고 굵은 육봉이 좁은 구멍 안을 헤집으며, 귀두로 질벽을 찌르고 위로 솟은 귀두관으로 요염한 살결을 문지르며 자궁구까지 곧장 찔러 들어간다……',
        ]);
        await attacker.print_and_wait([
          '전력으로 돌진하는 귀두가 애액에 젖은 채 연약한 자궁경부에 무겁게 입을 맞췄고, 심지어 평평한 아랫배에 귀두관의 실루엣이 희미하게 떠오를 정도였다.',
        ]);
        await defender.say_and_wait(['앗! 잠…… 천천히…… 조금만! 제발……']);
        await attacker.print_and_wait([
          '쾌감으로 가득 찬 뇌에서는 부서진 말들만 새어 나왔고, 입가에서는 투명한 타액이 함께 흘러내렸다.',
        ]);
      },
      async () => {
        await defender.print_and_wait([
          '마치 인형처럼 마음대로 휘둘리거나, 말 잘 듣는 성노예처럼 희롱당하며 음란한 소리를 낸다.',
        ]);
        await defender.print_and_wait([
          {
            color: get_skin_color(defender.id),
            content:
              skin_color_desc[era.get(`cflag:${defender.id}:피부색`) + 1],
          },
          ' 육체가 떨리며 몸을 비튼다.',
        ]);
        await defender.say_and_wait(['으, 으앗……']);
        await defender.print_and_wait([
          '분명 몸이 가장 간절히 바라는 것은 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '의 힘에서 벗어나는 것임에도, 쾌감에 휩쓸려 남은 힘마저 발가락을 오므리는 데 쓰고 만다.',
        ]);
        await defender.print_and_wait([
          '강간당하고 범해지는 감각과 애무받으며 농락당하는 쾌감이, 자신의 두 다리와 전신을 점차 쾌락만을 좇는 한 덩이의 암컷 고기 수준으로 끌어내리고 있었다.',
        ]);
        await defender.say_and_wait(['하아앗!']);
        await defender.print_and_wait(['스스로 수치심도 없는 신음 소리를 내는 것을 들었다.']);
      },
    ];
    if (era.get(`cflag:${defender.id}:종족`)) {
      message.push(async () => {
        await defender.say_and_wait('응아앗…… 안 돼…… 그만해…… 제발…… 흐윽……');
        await defender.print_and_wait([
          '입으로는 싫다고 교성을 지르면서도, 잔뜩 긴장했던 질 고기는 이미 부드럽게 침입자를 껴안으며 육봉이 더 깊은 곳까지 닿을 수 있게 허락하고 있었다.',
        ]);
        await defender.print_and_wait([
          '뜨거운 자궁경부가 육봉에 의해 끊임없이 두드려지고, 귀두관이 자궁구의 살덩이에 깊게 입 맞추며, 닫히려는 자궁구마저 함께 위로 움푹 패일 정도로 찔려 들어갔다.',
        ]);
        await defender.print_and_wait(
          '쾌감에 빳빳하게 곤두선 말의 귀에는 육봉이 질 내의 체액을 밀어내며 짜내는 「찌걱찌걱」하는 단조로운 소리만이 들려왔다.',
        );
        await defender.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '은(는) 달리기 위해 단련된 자신의 유연한 육체가, 지금 이 순간 교미를 위한 훌륭한 받침대라는 사실을 깨달았다.',
        ]);
      });
    }
    await get_random_entry(message)();
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_missionary(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait('쓰레기! 내게서 떨어져, 꺼지라고!');
    await defender.print_and_wait([
      '발을 들어 차려 했지만, 너무도 쉽게 발목을 잡혀 위로 들려버렸다.',
    ]);
    if (era.get(`cflag:${defender.id}:종족`) > 0) {
      const body_hair_color = era.get(`cstr:${defender.id}:털색`);
      await defender.print_and_wait([
        {
          color: get_hair_color(body_hair_color),
          content: `${body_hair_color} 털이 난`,
        },
        ' 꼬리로 가려져 있던 암컷 구멍을 억지로 드러내고 말았다.',
      ]);
    } else {
      await defender.print_and_wait('자신의 천박한 암컷구멍을 억지로 드러내고 말았다.');
    }
    await defender.print_and_wait([
      '모아진 손목마저 눈앞의 녀석에게 결박당하자, 이제 완벽히 반항할 수 없다는 사실을 깨달았다.',
    ]);
    await defender.say_and_wait('히잇, 오오오오옷!!❤️');
    await defender.print_and_wait(
      '원래라면 튀어나왔을 욕설, 저항, 꾸짖음은 작열하는 육봉이 삽입되는 순간, 듣기에 너무나도 아양 떠는 듯한 음란한 교성으로 변해버렸다.',
    );
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_standing(attacker, defender, hook) {
  if (hook.arg) {
    if (era.get(`cflag:${defender.id}:종족`) > 0) {
      await attacker.print_and_wait([
        '역시, 우마무스메는 다들 훌륭한 유연성과 균형 감각을 가지고 있네.',
      ]);
    }
    await attacker.print_and_wait([
      '발끝만 땅에 닿게 한 채 허벅지 안쪽 근육을 늘리고, 오른쪽 다리를 천천히 수평 위치까지 들어올린다.',
    ]);

    await attacker.print_and_wait([
      '필사적으로 옆으로 다리를 들어 올리는 자세를 취한 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '은(는) 가느다란 허리와 매혹적인 옆태의 엉덩이를 눈앞에 고스란히 드러냈다.',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:음모`) >= 1 ? '음모로 덮인' : '매끄럽고 귀여운',
      ' 좁은 구멍이 잔뜩 긴장한 동작에 맞춰 움찔움찔 벌어졌다 닫히고 있다.',
    ]);
    await defender.say_and_wait('이러면 만족하냐…… 쓰레기 자식!');
    await attacker.print_and_wait([
      '아직 한계가 아닌 것 같아, 스스로 손을 뻗어 자세를 교정해 준다. 수평을 유지하던 오른쪽 다리를 천천히 받쳐 올려, 위를 향해 수직으로 뻗어 왼쪽 다리와 일직선이 될 때까지.',
    ]);
    await defender.say_and_wait('만, 만지지 마……');
    await attacker.print_and_wait([
      '육봉이 곧장 삽입되며 좁고 부드러운 질강이 강제로 벌어지고, 뜨거운 귀두관은 겹겹이 꿈틀거리며 조여오는 질 고기들을 무시한 채 그대로 자궁구를 들이받았다.',
    ]);
    await defender.say_and_wait('……으구웃❤️!!');
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_standing(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait([
      '두 손으로 벽을 짚고 엉덩이를 높이 치켜든 채, 조금의 감정도 담지 않으려 애쓰며 물었다.',
    ]);
    await defender.say_and_wait(['이러면 되는 거지?']);
    await defender.print_and_wait([
      '아마 후배위를 하려는 거라 짐작했지만…… 그래도 바닥에 짓눌리는 것보다는 낫겠지……',
    ]);
    await defender.print_and_wait([
      '그렇게 애써 스스로를 설득하려던 찰나, 갑자기 허리를 쓰다듬는 감촉이 전해지더니 이내 주무르기로 변하며 강제로 엉덩이를 더 높이 치켜들게 만들었다.',
    ]);
    await defender.say_and_wait(['응웃❤️!']);
    const body_hair_color = era.get(`cstr:${defender.id}:털색`);
    if (era.get(`cflag:${defender.id}:종족`) > 0) {
      await defender.print_and_wait([
        '이런 자세, 육봉이 자신의 구멍을 완전히 꿰뚫게 만드는 이 자세는 우마무스메에게 너무나도 반칙이잖아! 심지어 ',
        {
          color: get_hair_color(body_hair_color),
          content: `${body_hair_color}`,
        },
        ' 꼬리조차 채찍처럼 붙잡혀 자신의 엉덩이를 찰싹찰싹 때리고 있었다.',
      ]);
    } else {
      await defender.print_and_wait(
        '이런 자세, 육봉이 자신의 구멍을 완전히 꿰뚫게 만드는 이 자세는 정말이지 너무나도 반칙이잖아!',
      );
    }
    await defender.print_and_wait([
      '상반신은 곧바로 그 충격에 허물어져 내렸고, 오직 붙잡힌 두 손에만 의지해 간신히 버티고 있었다.',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}
/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_doggy_style(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 두 팔을 붙잡고 살짝 힘을 주어, 억지로 암캐처럼 엉덩이를 치켜든 채 무릎 꿇게 만들었다.',
    ]);
    await attacker.print_and_wait([
      '반항하려는 암컷은 견디기 힘들다는 듯 엉덩이를 비틀며 도망치려 했지만, 당신에게는 오히려 스스로 농락해 달라며 유혹하는 것처럼 보였다.',
    ]);
    await attacker.print_and_wait([
      '허리를 앞으로 튕기자, 육봉이 거침없이 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 구멍 안으로 밀려 들어갔다.',
    ]);
    await defender.say_and_wait(['히아아앗❤️!']);
    const hair_color = era.get(`cstr:${defender.id}:머리색`);
    await attacker.print_and_wait([
      '마치 감전된 것처럼 허리를 활처럼 휘었고, ',
      {
        color: get_hair_color(hair_color),
        content: `${hair_color}`,
      },
      ' 머릿결이 그에 맞춰 흔들렸다.',
    ]);
    if (era.get(`cflag:${defender.id}:종족`) > 0) {
      await attacker.print_and_wait(['꼬리마저 빳빳하게 곤두섰다……']);
    }
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_sitting(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.say_and_wait('도망치려는 거야?');
    await attacker.print_and_wait([
      '비틀비틀 일어나 도망치려던 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 정강이를 붙잡고, 가볍게 당겨 억지로 품에 안기게 만들었다.',
    ]);
    await attacker.print_and_wait([
      '육봉이 그녀의 평평한 배를 강하게 때리자, 두려움에 아랫배가 움푹 들어가는 것마저 느껴졌다.',
    ]);
    await attacker.print_and_wait(['그럼, 말 안 듣는 나쁜 아이에겐 당연히 벌을 줘야겠지.']);
    await defender.say_and_wait(['우앗…… 빼줘!']);
    await attacker.print_and_wait([
      '허리가 갑자기 활처럼 휘더니, ',
      era.get(`cflag:${defender.id}:종족`) ? '경기장에서 오랫동안 단련된 ' : '',
      ' 두 다리가 허리에 단단히 감겨왔다.',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_sitting(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.say_and_wait('기분 좋지?');
    await attacker.print_and_wait([
      '뒤에서 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 ',
      era.get(`cflag:${defender.id}:종족`) ? '쫑긋 세워진 귀에 ' : '귀에 ',
      ' 밀착한 채 물었다.',
    ]);
    await defender.say_and_wait('쓰레기! 변태!');
    await defender.say_and_wait('응아앗❤️……');
    await attacker.print_and_wait([
      '단속적으로 이어지던 반박은 교태로운 음란한 신음소리에 막혀버렸고, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 푹 숙인 고개는 조금 더 아래로 꺾인 듯했다.',
    ]);
    await attacker.print_and_wait([
      '피스톤 질을 할 때마다 구멍이 꽉꽉 조여오는 이 ',
      era.get(`cflag:${defender.id}:종족`) ? '암컷이' : '암컷이',
      ' 대체 얼마나 황홀한 표정을 짓고 있는지 들키고 싶지 않다는 듯이.',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_suspended_congress(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait('안 돼…… 우앗!?');
    await defender.print_and_wait([
      '피하려고 했지만, 결국 뒤에 있는 사람에게 오금 쪽을 붙잡혀 번쩍 안겨 들고 말았다.',
    ]);
    await defender.print_and_wait([
      '유연한 몸은 거의 통째로 접히다시피 했고, 무릎은 거의 어깨에 짓눌린 채, 어깨에 걸쳐진 두 다리는 육봉이 들락거리는 동작에 맞춰 위아래로 크게 흔들렸다.',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_suspended_congress(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '이 자세라면, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '은(는) 마치 상대의 몸에 매달려 있는 것처럼 된다.',
    ]);
    const body_hair_color = era.get(`cstr:${defender.id}:털색`),
      hair_color = era.get(`cstr:${defender.id}:머리색`);
    if (era.get(`cflag:${defender.id}:종족`) > 0) {
      await attacker.print_and_wait([
        '장점이라면, 육봉이 중력을 빌려 곧장 ',
        {
          color: get_hair_color(body_hair_color),
          content: `${body_hair_color} 털이 난`,
        },
        ' 우마무스메의 가장 깊은 곳까지 찌르고 들어가, 서로의 성기를 빈틈없이 밀착시킬 수 있다는 점이다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '장점이라면, 육봉이 중력을 빌려 곧장 ',
        {
          color: get_hair_color(hair_color),
          content: `${hair_color} 머리카락을 가진`,
        },
        ' 여성의 가장 깊은 곳까지 찌르고 들어가, 서로의 성기를 빈틈없이 밀착시킬 수 있다는 점이다.',
      ]);
    }
    await defender.say_and_wait('떨어져!…… 무조건 떨어진다고!');
    await attacker.print_and_wait([
      '무중력감과 하반신의 강렬한 쾌감이 동시에 덮쳐오는 충격 속에서, 눈앞에서 거의 판단력을 잃은 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '은(는) 무의식적으로 팔을 뒤로 뻗어 목을 껴안았다.',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_cowgirl(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait(
      '허리 위에 올라탄 소녀는 그저 몸을 지탱한 채 엉덩이를 조금씩 움직일 뿐이었고, 심지어 입술을 손으로 틀어막으며 아무렇지 않은 척 필사적으로 버티고 있었다.',
    );
    await attacker.print_and_wait(['처음 좁은 구멍이 그걸 삼켜낼 때는 분명 소리를 질러댔으면서.']);
    await attacker.print_and_wait(['그렇다면, 이쪽에서 먼저 적극적으로 나서야겠지.']);
    await attacker.print_and_wait([
      '양쪽 엉덩이를 살짝 받쳐 들고, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 비명 소리에 맞춰 허리를 위로 강하게 쳐올렸다.',
    ]);
    await defender.say_and_wait(['으앗❤️!!!']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 비명 속에서 이 과정을 끊임없이 반복했다. 허리를 튕기고, 오르내리며, 짓이기듯 돌리는 동안 달콤한 땀방울이 비 오듯 가슴팍으로 떨어졌고, 극히 리드미컬한 육체 충돌음이 공기 중에 울려 퍼졌다.',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

class EroRapeFucking extends EroFucking {
  /** @type {EroFucking} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedFucking(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  /** @author ALEX */
  async missionary(attacker, defender, hook) {
    await common_missionary(attacker, defender, hook);
  }

  /** @author ALEX */
  async doggy_style(attacker, defender, hook) {
    await common_doggy_style(attacker, defender, hook);
  }

  /** @author ALEX */
  async sitting(attacker, defender, hook) {
    await common_sitting(attacker, defender, hook);
  }

  /** @author ALEX */
  async hug_sitting(attacker, defender, hook) {
    await common_hug_sitting(attacker, defender, hook);
  }

  /** @author ALEX */
  async standing(attacker, defender, hook) {
    await common_standing(attacker, defender, hook);
  }

  /** @author ALEX */
  async hug_standing(attacker, defender, hook) {
    await common_hug_standing(attacker, defender, hook);
  }

  /** @author ALEX */
  async suspended_congress(attacker, defender, hook) {
    await common_suspended_congress(attacker, defender, hook);
  }

  /** @author ALEX */
  async hug_suspended_congress(attacker, defender, hook) {
    await common_hug_suspended_congress(attacker, defender, hook);
  }

  /** @author ALEX */
  async ask_cowgirl(attacker, defender, hook) {
    await common_ask_cowgirl(attacker, defender, hook);
  }

  /** @author ALEX */
  async stimulate_g_spot(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait(['앗❤️! 안 돼……❤️ 거긴 찌르지 마……❤️!']);
      await attacker.print_and_wait(['그러니까 여기가 성감대라는 거네?']);
      await attacker.print_and_wait([
        '육봉에 부풀어 오른 핏줄로 긁어내리거나, 아예 귀두로 직접 두드리듯 자극을 계속하자, 신경이 밀집된 질 고기들이 기쁘다는 듯 떨리며 조여오기 시작했다.',
      ]);
      await defender.say_and_wait('응오오옷, 호오오오오옷————❤️❤️❤️');
      await attacker.print_and_wait([
        '가설을 증명하기라도 하듯, ',
        defender.get_colored_name(),
        '(이)라는 이름의 여성은 스스로 고개를 쳐들고 고음의 음란한 비명을 질렀고, 피스톤 질에 맞춰 엉덩이를 치켜들며 육봉이 민감한 곳을 더 많이 찌를 수 있도록 도왔다.',
      ]);
      await attacker.print_and_wait([
        '아름다운 눈동자는 반쯤 풀린 채, 얼마 남지 않은 이성과 자존심마저 애액과 함께 체외로 배출되어 버렸다.',
      ]);
    } else {
      await continue_fucking_common(attacker, defender);
    }
  }
}

module.exports = EroRapeFucking;