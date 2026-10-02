const era = require('#/era-electron');
const JaEroCommon = require('#/i18n/ja-JP/timon/sex/ero-common');

module.exports = {
  ...JaEroCommon,

  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('이런 순간에는 역시 그게 하고 싶어져…');
      await attacker.print_and_wait([
        '시선이 머무는 곳을 눈치챘는지, 살며시 눈을 감은 ',
        a_call_d,
        '이(가) 까치발을 들고 먼저 입술을 부딪쳐 왔다…',
      ]);
      await defender.say_and_wait('쪽……❤️');
      await attacker.print_and_wait('마음이 놓이는 달콤한 맛…');
      await attacker.print_and_wait(
        '신음과 함께 섞여 나오는 숨결이 상대의 매끄러운 목덜미에 닿고, 고운 속눈썹이 그에 반응하듯 파르르 떨린다…',
      );
      await attacker.print_and_wait(
        '…입술을 떼고 싶지 않아… 이대로 욕심껏 계속 맞대고 있자…',
      );
    } else {
      await defender.say_and_wait('하아…… 하아……❤️');
      await defender.print_and_wait(
        '슬슬 만족할 때도 됐잖아… 자꾸만 뒤쫓아오는 그 입술…',
      );
      await defender.print_and_wait(
        '코와 입… 숨을 쉬어야 할 통로를 욕심 많은 저 녀석에게 대부분 빼앗겨 버리고, 아랫배를 간지럽히는 묘한 숨결이 머릿속까지 짓궂게 파고든다…',
      );
      await defender.print_and_wait(
        '으음… 나중에 혼자 숨 쉬는 게 외로워지면, 당신이 책임져야 해…❤️',
      );
    }
  },

  async french_kiss(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait('입술만으로는 부족해.');
      await defender.say_and_wait('으응──?');
      await attacker.print_and_wait([
        `키스 도중 ${attacker.phy_sex_title}의 품 안에 갇힌 `,
        defender.get_colored_name(),
        '이(가) 조금 당황한 듯 ',
        attacker.get_colored_name(),
        '의 이름을 부르려 했지만, 침략적으로 얽혀오는 혀 때문에 그 목소리는 그저 눅진하고 달콤하게 뭉개질 뿐이었다.',
      ]);
      await attacker.print_and_wait(
        '입술이 맞닿은 채 서로를 마주하다, 고개를 더 깊게 비틀며… 마지막에는 뒤를 감싸 안은 손으로 힘이 풀린 연인을 지탱하는, 정열적인 입맞춤.',
      );
      await defender.say_and_wait('……숨이 막힐 것 같아……', true);
    } else {
      await defender.print_and_wait('머릿속이 어질어질해…');
      await defender.print_and_wait(
        '품에 안겨, 얼마나 지났는지 모를 정도로… 혀까지 깊숙이 섞어오는 긴 키스…',
      );
      await defender.print_and_wait(
        '정말 얼마나 지난 걸까… 아주 가끔 입술이 떨어질 때도 끈적한 은사로 이어져 있어, 마치 이 두 입술은 처음부터 하나였던 것처럼… 얼굴이 뜨겁게 달아오른다.',
      );
      await defender.print_and_wait('그래도… 전혀 싫지 않아…');
    }
  },

  async lure(attacker, defender, success, a_call_d) {
    if (success) {
      await attacker.print_and_wait([a_call_d, '의 흥분이 고조되고 있다…']);
    } else if (era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([
        a_call_d,
        '은(는) 이미 최고조에 달해 있다…',
      ]);
    } else {
      await attacker.print_and_wait('하지만 별로 효과가 없는 것 같다…');
    }
  },

  async talk(attacker, defender, a_call_d) {
    if (
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`) > 0 &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.uma_sex_title,
        '가 귀로 감정을 표현하는 방식은 도대체 어떤 동물의 것과 더 비슷할까?',
      ]);
      await attacker.print_and_wait('불만스러운 눈초리를 받았다.');
      await attacker.say_and_wait('음...예를 들면..고양이의 귀가 젖혀지면...');
      attacker.print('엉덩이를 걷어차였다.');
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait('앞으로 아이를 몇 명이나 낳는 게 좋을까…');
      await attacker.print_and_wait([
        '맞은편에 있는 ',
        a_call_d,
        '의 배를 바라보며, 진심이 무심코 새어 나왔다.',
      ]);
      await attacker.print_and_wait('……차이지도 않았고……대답도 없네');
      attacker.print('……하지만 얼굴이 엄청 빨개졌네.');
    }
  },

  async switch(attacker, defender, d_call_a) {
    await defender.say_and_wait('에……?');
    await defender.print_and_wait([
      '방금 전까지 바로 눈앞에 있던 ',
      d_call_a,
      '이(가) 갑자기 거리를 두자, 깔려 있던 ',
      defender.get_colored_name(),
      '은(는) 눈을 깜빡이며 상황을 파악하지 못했다.',
    ]);
    await defender.print_and_wait('그리고, 눈앞의 시야가 순식간에 뒤집히고…');
    await attacker.say_and_wait('이제, 네 시간이야.');
    await defender.print_and_wait([
      '양팔을 벌린 ',
      d_call_a,
      '이(가) 부추기는 듯한 미소를 지었다.',
    ]);
    attacker.say('……하고 싶은 대로 해도 좋아.');
  },

  async gargle(attacker, defender, a_call_d, d_call_a) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: '쪽……' },
      { color: defender.color, content: '으읍……!?' },
      '」',
    ]);
    await era.printAndWait(
      '욕망에 몸을 맡겼던 두 사람, 다시 한번 맞닿으려던 입술이 이번엔 채 닿기도 전에 떨어졌다.',
    );
    await era.printAndWait('당황한 듯 눈을 깜빡이고, 머리를 긁적이며 시선을 피한다…');
    await attacker.say_and_wait([a_call_d, '……']);
    await defender.say_and_wait([d_call_a, '……']);
    await era.printAndWait('다다다다……');
    await era.printAndWait('보글보글보글────');
    await era.printAndWait(
      '잠시 후, 세면대 앞에 나란히 서서 햄스터처럼 볼을 부풀린 채 얼굴을 붉히는 바보 커플의 모습이 있었다.',
    );
  },

  async wipe_body(attacker, defender) {
    await defender.say_and_wait('더…… 계속할 거야……?❤️');
    await attacker.print_and_wait(
      '상대의 매끄러웠던 몸에는 어느새 묘한 흔적들이 가득하다… 조금 너무 과하게 해버린 걸까…',
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      '……손에 들린 수건은 상대의 몸에서 묻어난, 자신이 남긴 음란한 향기로 엉망이 되어 있다. 조금이라도 양심이 있는 녀석이라면 이쯤에서 그만둬야 한다는 생각이 들 텐데.',
    );
    await attacker.print_and_wait('……그런가……?');
  },

  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.uma_sex_title,
        '의 귀는 역시 동경하게 되는 것이군. 신체의 연장선으로서든, 표정의 연장선으로서든, 아니면…… 성감대의 연장선으로서든……',
      ]);
      await attacker.print_and_wait([
        '그저 손가락 끝으로 스치듯 부드럽게 만졌을 뿐인데, ',
        attacker.get_colored_name(),
        `이(가) 손끝에 닿는 그 섬세한 감촉을 채 느끼기도 전에, 그 뾰족하고 긴 귀는 부끄러운 듯 ${attacker.phy_sex_title} 의 손가락 사이에서 빠져나갔다.`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait(
        '부디…… 한 번 더 만져주세요. 이번에는 도망치지 않을게요.',
      );
      await attacker.print_and_wait([
        '품 안의 ',
        a_call_d,
        '는 지금 얼굴이 매우 붉다.',
      ]);
    } else {
      await attacker.print_and_wait('후후……');
      await attacker.print_and_wait(
        '손안에 도망가지 않는 귀가 있다. 조밀한 솜털이 손가락 마디를 애무하는 듯한…… 몸과 마음이 모두 치유되는 기분이다.',
      );
      await attacker.print_and_wait('이것이 연인으로서의 특권인가……');
      await attacker.print_and_wait('그나저나, 지금 그곳의 상태가 궁금하군……');
      await attacker.print_and_wait([
        '마치 보이지 않는 실로 이어진 것처럼, ',
        a_call_d,
        '의 두 다리는 귀를 붙잡고 있는 ',
        attacker.phy_sex_title,
        ' 의 손에 맞춰 부끄럽게 파르르 떨리고 있다.',
      ]);
    }
  },

  async pull_ear(attacker, defender) {
    await attacker.print_and_wait('이러면 안 되는데……');
    await attacker.print_and_wait('……이건 연인으로서 해야 할 일이 아니야……');
    await attacker.print_and_wait('……하지만');
    await attacker.print_and_wait([
      '단순하고 부드러운 애무에 만족하지 못하고, 하반신에서 치밀어 오르는 지배욕에 사로잡힌 ',
      attacker.phy_sex_title,
      '는, 점점 안전하게 손가락 사이의 힘을 주는 법을 깨달아갔다……',
    ]);
    await attacker.print_and_wait([
      '……그렇게 하면 발치 아래의 동물귀 달린 ',
      defender.phy_sex_title,
      '에게 깨닫게 해 줄 수 있다. 몸속에서 서서히 깨어나는, 인간을 향해 꼬리를 흔드는 혈통의 기억이 대체 언제, 어디서부터 시작된 것인지……',
    ]);
  },

  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        a_call_d,
        '의 다리를 벌리고, 이렇게 뚫어지게 ',
        defender.sex,
        '의 벌거벗은 하반신을 쳐다보다니……',
      ]);
      await attacker.print_and_wait(
        '이제 되돌아갈 기회는 없어…… 하지만 오히려 그 사실이 나를 더 흥분시킨다……',
      );
      await attacker.print_and_wait(
        '손가락으로 그 분홍색 작은 돌기를 덮고 있는 표피를 문질러 벌리고, 민감한 클리토리스가 공기 중에 노출되면서 귀여운 분홍색에서 점점 더 요염하고 충혈된 붉은색으로 변하는 것을 지켜본다.',
      );
      await attacker.print_and_wait('……안심해, 부드럽게 해 줄 테니까.');
    } else {
      await defender.say_and_wait('으으……');
      await attacker.print_and_wait(
        '아아, 어느샌가 벌써 이렇게 빨갛고 퉁퉁 부은 불쌍한 모습이 되어버렸군.',
      );
      await attacker.print_and_wait([
        '그저 간단한 접촉과 약간의 인내심만으로도, 이 작은 민감한 살덩이는 ',
        a_call_d,
        '의 깨끗한 몸을 방탕하게 움직이게 만든다……',
      ]);
      await defender.say_and_wait('꺄아—');
      await attacker.print_and_wait('한 번만 더 보자, 마지막으로.');
    }
  },

  async finger_fuck(attacker, defender) {
    await defender.say_and_wait('으으……');
    await attacker.print_and_wait(
      '몸의 반응은 아직 뻣뻣한데, 보지는 아무런 저항 없이 이 검지 손가락 끝부터 첫 번째 마디까지 꿀꺽 집어삼켜 버렸다……',
    );
    await attacker.print_and_wait('손가락이 뜨겁게 키스당하고 있다.');
    await attacker.print_and_wait(
      '위로 긁고, 아래로 문지르고, 질 근육의 꿈틀거림에 맞춰 양옆으로……',
    );
    await attacker.print_and_wait(
      '하아…… 다리를 이렇게 꽉 조이면 더 이상 계속할 수 없잖아.',
    );
  },

  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.sex,
        '를 더 기분 좋게 해주고 싶어, ',
        defender.sex,
        '의 보지를 더 부드럽게 만들고 싶어, 이 아름다운 몸이 내 움직임 때문에 더 정신없이 뒤틀리게 만들고 싶어……',
      ]);
      await defender.say_and_wait('하아…… 하아……');
      await attacker.print_and_wait(
        '단지 손가락만 움직일 뿐인데, 뇌 속에서 폭주하는 욕망 때문에 숨이 가빠진다.',
      );
      await attacker.print_and_wait('어디 있을까…… 이제 곧 닿을 텐데……');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('으으—');
      await attacker.print_and_wait([
        '주변의 질 근육에 비해 미세하게 돌출된 감촉이 손가락을 자석처럼 끌어당겼고, 그 불룩한 살결 특유의 뜨거운 온도와 끈적한 촉감이 느껴졌다…… 그리고 정답을 확인해 준 것은 ',
        a_call_d,
        '이 갑자기 들어 올린 허리와 범행 중인 팔을 꽉 조여오는 두 다리였다.',
      ]);
      await attacker.print_and_wait('……찾았다.');
    } else {
      await attacker.print_and_wait('압박한다.');
      await attacker.print_and_wait('비벼댄다.');
      await attacker.print_and_wait('찌른다.');
      await attacker.print_and_wait('두꺼운 손톱으로 자극한다.');
      await attacker.print_and_wait([
        '이 손이 만족할 때까지, 어느새 땀에 젖어 흐물흐물해진 ',
        defender.get_colored_name(),
        '에게 왜 쾌락이 독약이라 불리는지 확실히 가르쳐 주도록 하자.',
      ]);
    }
  },

  async pet_anal(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('으응——!?');
      await attacker.print_and_wait([
        '조금 늦긴 했지만, 눈앞의 엉덩이 ',
        defender.adult_sex_title,
        '는 확실히 이쪽의 의도를 눈치챘다. ',
        attacker.get_colored_name(),
        '의 손가락이 묘하게 가까이 다가와, 몸이 적당히 경계할 만한 거친 촉감으로 그 작은 항문 주위를 맴돌고 있다.',
      ]);
      await attacker.print_and_wait([
        '그리고 이 「적당한」 경계심은…… ',
        a_call_d,
        '가 무의식적으로 손가락을 향해 아양 떨 듯 치켜올린 엉덩이와…… ',
        defender.race > 0 ? '정신없이 흔들리는 말 꼬리에서 드러나고 있다……' : '',
      ]);
    } else {
      await defender.print_and_wait(
        '그래서…… 대체 거기를 공격하고 싶은 건가요 아닌가요……',
      );
      await defender.print_and_wait([
        '이건…… 착각일까요…… ',
        d_call_a,
        '…… 마치 이런 애타게 만드는 리듬을 유독 즐기는 것 같은데……',
      ]);
      await defender.print_and_wait(
        '긴장을 유지하지 못한 채, 묘한 애무에 녹아버린 엉덩이 구멍은 이미 살며시 이완되어, 무엇을 삼켜도 이상하지 않을 성애의 구멍으로 변해버렸다.',
      );
    }
  },

  async prepare_anal(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      `손바닥으로 벌름거리는 구멍에서 뿜어져 나오는 노골적인 열기를 느끼며, 네 손가락으로 부끄러운 구멍을 억지로 다물게 하려 하거나 ${attacker.phy_sex_title} 의 시선을 피하려는 둔부를 단단히 고정했다.`,
    );
    await attacker.print_and_wait(
      '유독 굵고 긴 중지만은 따로 할 일이 있다. 전갈 꼬리처럼 살짝 굽힌 채 항문으로 조금씩 다가간 뒤, 느리지만 단호하게 삽입했다.',
    );
    await attacker.print_and_wait('저항감이 강하다.');
    await attacker.print_and_wait([
      '자발적으로 꿈틀대는 구멍의 살결이 마치 살아있는 생명체처럼 숨을 몰아쉬며 ',
      attacker.get_colored_name(),
      `의 손가락을 밀어내려 한다. 옆에 있는 보지처럼 성교를 위해 존재하는 음란한 살점이 아님에도, 지금 ${attacker.phy_sex_title}의 손가락을 대하는 태도는 놀라울 정도로 적극적이다.`,
    ]);
    await attacker.print_and_wait('무서워하고 있는 걸까…… 아니면 기뻐하고 있는 걸까……?');
    await attacker.print_and_wait([
      '헐떡이는 ',
      a_call_d,
      ' 자신조차 알 수 없다. 수치심에 꿈틀거리는 항문 안쪽에서 전해져 와, 등줄기를 타고 몸을 떨게 만드는 이 전류가 대체 무엇을 의미하는지.',
    ]);
    await defender.say_and_wait(
      '또…… 안으로 들어왔어…… 첫 번째 마디가…… 벌써 전부 다……',
      true,
    );
  },

  async pet_tail(attacker, defender) {
    await attacker.print_and_wait('상당히 신선한 체험이다.');
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait([
        '결국 ',
        defender.uma_sex_title,
        '의 미추 끝에서 뻗어 나와, 평소 교복 치마 뒤에서 눈에 보이는 바람처럼 흔들리던 그 꼬리니까.',
      ]);
    }
    await attacker.print_and_wait(
      '콧노래를 흥얼거리며 부드럽게 쓰다듬는다. 손가락으로 부드러운 꼬리털을 따라 점점 위로 쓸어 올리며, 자신의 양손을 꼬리 뿌리에서 배어 나오는 은밀한 냄새로 마음껏 마킹한다……',
    );
    await attacker.print_and_wait('아…… 그러고 보니……');
    await defender.say_and_wait('냄새 맡지 마세요!', true);
    await attacker.print_and_wait(
      '마치 그렇게 꾸짖는 듯, 들어 올리려던 손이 꼬리에 꽉 붙잡혀 꼼짝도 할 수 없게 되었다.',
    );
  },
};
