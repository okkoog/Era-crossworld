// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { motion_enum, towards_enum } = require('#/data/ero/part-const');
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

  async hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('으음——');
      await attacker.print_and_wait([
        '그 뜨거운 온도에 놀란 듯, ',
        attacker.get_colored_name(),
        '이(가) 성기를 쥐려던 손이 본능적으로 뒤로 움찔했다. 그러고 나서야 겨울날 이불 속으로 발을 밀어 넣듯 조금씩 다시 다가간다.',
      ]);
      await attacker.print_and_wait(
        '분명 꽤 흉악하고…… 여자아이의 아랫배를 욱신거리게 만드는 모양인데……',
      );
      await attacker.print_and_wait(
        '하지만…… 손가락으로 감싸 쥐고 가볍게 흔들자 쿠퍼액을 흘리며 손가락 사이에서 춤추는 모습은… 조금 귀여울지도.',
      );
      await attacker.say_and_wait('하아…… 하아…… 으음——');
      await attacker.print_and_wait('그 기분을 이해할 수 있게 되었다……');
    } else {
      await attacker.print_and_wait('정말 이런 것만으로 괜찮은 걸까……');
      await attacker.print_and_wait([
        attacker.child_sex_title,
        '의 손에 쥐여 흔들리는 것만으로 만족하는 거야……?',
      ]);
      await attacker.print_and_wait('……');
      await attacker.print_and_wait('정말로…… 다른 하고 싶은 일은 없는 거야……?');
    }
  },

  async tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('멋지다고 생각하지 않아?');
      await defender.print_and_wait([
        '이 ',
        d_call_a,
        '이(가) 내 아래에 엎드려, 소녀만의 부드러운 가슴으로 뜨거운 성기를 감싸 쥐고 있는 모습 말이야……',
      ]);
      await attacker.say_and_wait('으응……');
      await defender.print_and_wait(
        '제대로 전해지는 모양이네. 성기 귀두 끝에서 피어오르는, 애욕이 가득 담긴 뜨거운 열기가.',
      );
      await defender.print_and_wait([
        '손을 뻗어 아래에 있는 ',
        d_call_a,
        '의 고개를 들어 올렸다.',
      ]);
      await defender.print_and_wait('음, 아주 맛있게 익은 표정이 되었네.');
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        '전해져 온다. ',
        a_call_d,
        '의 허리가 뒤로 젖혀지는 것이.',
      ]);
      if (attacker.race > 0) {
        await attacker.print_and_wait(
          '예민한 귀가 위에서 뿜어져 나오는 거친 콧김에 후우후우 흔들리고 있다.',
        );
      }
      await attacker.print_and_wait(
        '부드러움에 감싸인 성기 역시, 보지를 간단히 떨게 만들 수 있을 정도로 빳빳하게 곤두섰다.',
      );
      await attacker.print_and_wait(
        '무슨 생각을 한 걸까, 심장이 쿵쿵 뛴다. 하지만 이것도 그저 「장님 코끼리 만지기」 같은 거겠지……',
      );
      await attacker.print_and_wait([
        '그리하여 ',
        attacker.get_colored_name(),
        '은(는) 고개를 위로 들었다.',
      ]);
      await attacker.print_and_wait('역시, 짐승 같은 표정이야……');
    }
  },

  async tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('정말이지…… 가슴이 그렇게 좋은 거야……?');
      await attacker.print_and_wait(
        '정말 디저트 위의 생크림처럼 어디에 묻혀도 맛있다고 생각하는 것 같네……',
      );
      await attacker.say_and_wait('낼름, 츄릅, 츄릅……');
      await attacker.print_and_wait([
        '성기 기둥에 떨어진 쿠퍼액 때문에 가슴 살결이 미끈거리고 번들거렸지만, ',
        attacker.get_colored_name(),
        '은(는) 고생하는 가슴보다는 가장 뜨겁고 팽팽해진 귀두를 양손으로 정성스레 입안으로 모셨다.',
      ]);
      await attacker.say_and_wait('으응……');
      await attacker.print_and_wait(
        '혀가 마음대로 움직이지 않기 시작했지만, 입에 닿은 귀두가 조금이라도 외로움을 느끼는 게 싫어 유두를 모아 성기를 모시는 손길을 멈출 수 없었다……',
      );
    } else {
      await attacker.say_and_wait('츄릅, 낼름……');
      await attacker.print_and_wait(
        '몇 번을 맛봐도 이걸 맛있다고 하기는 어려울 텐데…… 비릿하면서도 음란한 맛이 뇌까지 직접 전해진다……',
      );
      await attacker.print_and_wait('하지만……');
      await attacker.print_and_wait('하지만…………');
      await attacker.print_and_wait('하지만………………');
      await attacker.say_and_wait(
        ['왜 멈추지 않는 걸까…… 나도, ', a_call_d, ' 도……'],
        true,
      );
    }
  },

  async suck_nipple(attacker, defender, a_call_d) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('츄릅——');
      await attacker.print_and_wait(
        '눈앞의 하얀 살결과 붉은 점이 본능적으로 피하려 하지만, 혀는 그렇게 쉽게 만족할 수 있는 게 아니다.',
      );
      await attacker.print_and_wait([
        defender.teen_sex_title,
        '의 부드러운 가슴이 좌우로 달아나 보지만, 결국 체념한 듯 혀끝에 얌전히 머물렀다.',
      ]);
      await attacker.say_and_wait('쫍——');
      await attacker.print_and_wait(
        '점차 혀끝에서 열을 내뿜던 붉은 점이 딱딱하게 곤두서는 실감이 전해졌고, 조심스레 치아 사이에 그 살덩이를 물고는 쭈욱 빨아올렸다——',
      );
      await defender.say_and_wait('으응——!');
      await attacker.print_and_wait([
        a_call_d,
        '의 몸무게가 순식간에 묵직하게 이쪽으로 쏠렸다.',
      ]);
      await attacker.print_and_wait('아마 다리에 힘이 풀린 모양이다.');
    } else {
      await attacker.print_and_wait('부끄럽지 않아?');
      await attacker.print_and_wait([
        '무릎베개 서비스를 받으며, ',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '모유가 배어 나오는' : '하얀',
        ' 가슴을 내밀고 있는 거 말이야.',
      ]);
      await attacker.print_and_wait(
        '게다가 나 때문인지, 요염하게 물든 유두는 빨기 좋게 길쭉하고 퉁퉁하게 부어올랐는데……',
      );
      await attacker.print_and_wait('……정말로 부끄럽지 않은 거야?');
      await attacker.print_and_wait('전혀 그렇지 않다는 듯.');
      await attacker.print_and_wait(
        '기분 좋게 눈을 가늘게 뜨고, 입을 벌려 그 붉은 돌기를 머금고는 빨아올렸다.',
      );
      if (era.get(`talent:${defender.id}:泌乳`) > 0) {
        await attacker.print_and_wait('「퓨븃, 퓨뷰븃——」');
        await attacker.print_and_wait([
          '보이지는 않지만 머릿속은 이미, 처음으로 젖이 뿜어져 나왔을 때의 ',
          a_call_d,
          '의 수치심 섞인 표정과, 하얀 가슴에서 뿜어져 나와 시선을 뗄 수 없게 만들었던 가느다랗고 아름다운 포물선으로 가득 찼다……',
        ]);
        await attacker.print_and_wait('게다가 조금 달콤하다.');
      }
    }
  },

  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '치아 사이에 딱딱해진 유두를 머금은 순간, 품 안의 ',
      a_call_d,
      '의 몸이 단번에 굳어졌다.',
    ]);
    await attacker.print_and_wait('에헤… 그런가……');
    await attacker.print_and_wait([
      '치아를 살짝 세워 예민한 유두 주위에 울긋불긋한 자국을 남기자… 품 안의 ',
      defender.teen_sex_title,
      '의 몸이 끊임없이 떨린다……',
    ]);
    await attacker.print_and_wait([
      '다음 목표를 눈치챈 걸까, 혀가 유두를 세밀하게 핥으며 적시는 순간, ',
      defender.get_colored_name(),
      '은(는) 양손을 뻗어 ',
      attacker.get_colored_name(),
      '의 허리를 껴안았다……',
    ]);
    await defender.say_and_wait('으으——');
    await attacker.print_and_wait('귀여워.');
    await attacker.print_and_wait([
      '품 안의 ',
      a_call_d,
      ' 뿐만 아니라, 빨갛게 부어오른 자국이 가득한 유두도 마찬가지다.',
    ]);
  },

  async ask_milk_and_hand_job(
    attacker,
    defender,
    is_first,
    a_call_d,
    d_call_a,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        '눈앞이 온통 ',
        a_call_d,
        '의 새하얀 피부와 가슴으로 가득해, 분명 맛있을 게 틀림없는 지금의 표정을 볼 수 없다는 게 아쉽다.',
      ]);
      await attacker.print_and_wait([
        '혀끝에서 희롱당하며 춤추는 유두조차 한순간 허무하게 느껴졌지만, ',
        attacker.get_colored_name(),
        '은(는) 곧바로 새로운 즐거움을 찾아냈다.',
      ]);
      await attacker.print_and_wait('대체 어떤 표정을 짓고 있을까.');
      await attacker.print_and_wait([
        '유두를 빨리는',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '(모유가 나오는)' : '',
        ' 쾌감에 휩쓸려 하류의 저편으로 가라앉는 듯한 실신 직전의 표정일까…… 손바닥 안에서 꿈틀대는 뜨거운 성기에 어찌할 바를 몰라 하는 부끄러운 표정일까…… 아니면, 이미 완전히 빠져버린 음란한 향락의 표정일까……',
      ]);
      await defender.say_and_wait('에!?');
      await attacker.print_and_wait([
        '정답을 알 수 없는 질문이었지만, ',
        attacker.get_colored_name(),
        '의 손가락 사이로 간신히 감싸진 성기는 갑자기 평소보다 더욱 빳빳하게 곤두섰다.',
      ]);
    } else {
      await defender.print_and_wait('이런 자신을 기뻐해야 할지 모르겠다……');
      await defender.print_and_wait([
        '빨리고 있는 ',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? '젖이 배어 나오는 ' : '',
        '유두 옆으로, 혀의 움직임을 통해 겨우 ',
        d_call_a,
        '의 표정이 어렴풋이 보인다.',
      ]);
      await defender.print_and_wait(
        '손바닥에 전해지는 성기의 뜨거운 온도와 불거진 핏줄을 통해, 지금 그곳이 어떤 모습일지 머릿속에 그려본다.',
      );
      await defender.print_and_wait('하아… 부디 책임져주세요……');
    }
  },

  async non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('정말로 들어가 버렸어.');
      await defender.print_and_wait([
        '육봉을…… ',
        d_call_a,
        '의 오므린 허벅지 살 사이에 삽입한다.',
      ]);
      await defender.print_and_wait('부드럽고, 따뜻하고, 최고야, 최고, 최고야……');
      await defender.print_and_wait('살짝 엇갈린 두 다리는 부끄러워하고 있는 거겠지……');
      await defender.print_and_wait(
        '단순히 부드러울 뿐만 아니라, 평소 단련된 성과인지 육봉이 단단하게 지탱되고 있다.',
      );
      await defender.print_and_wait([
        '마치 발정 난 원숭이처럼,',
        defender.get_colored_name(),
        '의 육봉이 열광적으로 ',
        d_call_a,
        '의 가랑이 사이를 앞뒤로 문지르고 있다.',
      ]);
    } else {
      await defender.print_and_wait('매끈매끈하고 반짝반짝하게 변해버렸어.');
      await defender.print_and_wait('어느 정도 숙련되어 버렸어.');
      await defender.print_and_wait('얌전하게 참을 수 없게 되어버렸어.');
      await defender.print_and_wait('조금…… 외로워진 걸까……');
      await attacker.say_and_wait([a_call_d, '……']);
      await defender.print_and_wait('눈빛도…… 촉촉하게 젖어 있어……');
      await defender.print_and_wait('다리를 이런 식으로 사용당하면 역시 이렇게 되어버리는구나.');
    }
  },

  async armpit_intercourse(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('최악이야.');
      await defender.print_and_wait([
        '앞에서 손을 높게 치켜든 ',
        d_call_a,
        '의 부끄러운 듯 떨리는 엉덩이에서 그런 불평이 읽혀온다.',
      ]);
      await defender.print_and_wait('하지만 이건 어쩔 수 없는 일이다.');
      await attacker.say_and_wait('으으—');
      await defender.print_and_wait([
        d_call_a,
        '의 겨드랑이가, 지금 육봉의 거대한 귀두에 닦여지고 있다.',
      ]);
      await defender.print_and_wait(
        '열기가 오르는 겨드랑이 살이 삽입에 따라 비색으로 물들어가며, 마치 정말 성적인 색기 어린 기관으로 변해버린 것 같다……',
      );
      await defender.print_and_wait([
        '이것을 완전히 당연한 일로 받아들이지는 못한 채,',
        defender.get_colored_name(),
        '의 동작에는 약간의 망설임이 섞여 있다……',
      ]);
      await defender.print_and_wait([
        '……망설이면서도 육봉으로 등을 돌린 채 서 있는 ',
        d_call_a,
        '의 겨드랑이 구멍을 비비며 삽입을 이어간다……',
      ]);
    } else {
      await attacker.print_and_wait('기분이…… 조금 이상해져……');
      await attacker.print_and_wait('겨드랑이가, 원래 이런 걸 하기 위한 기관이었나……');
      await attacker.print_and_wait('게다가, 원래 이런 촉감을 느낄 수 있는 거였어……?');
      await attacker.print_and_wait([
        '육봉에 침범당하며 확실하게 무언가가 변해가고 있는 듯, 얼굴이 붉게 달아오른 ',
        attacker.get_colored_name(),
        '이(가) 불안해하면서도 이미 미끈미끈하게 익숙해진 육봉님을 모시고 있다.',
      ]);
    }
  },

  async foot_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('미소 짓게 되겠지.');
      await defender.print_and_wait([
        '언제나 ',
        attacker.get_colored_name(),
        '이(가) ',
        defender.race > 0 ? '경기장을 달리던 그 두 발로 ' : '',
        '눈앞의 육봉을 밟았을 때, 그 나쁜 녀석이 흥분해서 오히려 발바닥을 밀어 올리고 있다는 걸 알게 되면 분명 미소 짓게 될 것이다.',
      ]);
      await defender.print_and_wait(
        '저속한 것을 보았을 때의 혐오와 경멸 섞인 미소…… 취향이 이상한 연인에게 보여주는 흥미로운 포용의 미소…… 천진난만하게 그저 이것이 재밌어서 짓는 미소……',
      );
      await defender.print_and_wait([
        '앞에 있는 ',
        d_call_a,
        '은(는) 어느 쪽일까… 어쨌든 육봉을 더욱 흥분하게 만드는 쪽이겠지.',
      ]);
    } else {
      await defender.print_and_wait('아마 눈치챘을 것이다.');
      await defender.print_and_wait('자신의 발바닥을 침범하고 있는 이 육봉이 결코 약한 물건이 아니라는 것을.');
      await defender.print_and_wait([
        d_call_a,
        '이(가) 육봉을 짓밟는 동작이 훨씬 자연스러워졌다.',
      ]);
      await defender.print_and_wait([
        '마치 ',
        defender.get_colored_name(),
        '의 육봉을 발바닥 아래에 두는 것이 타고난 재능인 것처럼.',
      ]);
      await defender.print_and_wait('쓰읍……');
      await defender.print_and_wait([
        '그저 상상하는 것만으로,',
        defender.get_colored_name(),
        '은(는) 또다시 아랫배가 뜨거워지는 것을 느꼈다.',
      ]);
    }
  },

  async tail_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('유연해……');
      await defender.print_and_wait([
        '요구를 제안한 ',
        defender.get_colored_name(),
        '조차 예상치 못한 기민함으로, 구불구불한 털의 꼬리가 육봉을 휘감았다.',
      ]);
      await defender.print_and_wait('이 각도에서 보이는 엉덩이도 각별한 풍미가 있다.');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          '길다란 꼬리에 어쩔 수 없이 배어든 여자아이의 냄새가 은은하게 느껴지자, ',
          defender.get_colored_name(),
          '의 육봉은 유례없을 정도로 흥분하고 있다.',
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        '……그리고 이 폭발적인 열기를 느꼈는지, 등을 돌린 ',
        d_call_a,
        '은(는) 붉게 물든 귀의 움직임마저 사랑스럽게 느껴진다.',
      ]);
    } else {
      await defender.print_and_wait('동작이 거칠어지고 있다…… 혹은 숙련되었다고 해야 할까.');
      await defender.print_and_wait(
        '꼬리가 음란한 애액으로 끈적하게 젖은 뒤, 털을 반짝이게 만드는 이 보양품으로부터 무언가를 깨달은 모양이다.',
      );
      await defender.print_and_wait('예를 들면, 이 육봉이 좋아하는 휘감는 강도라던가.');
      await defender.print_and_wait('예를 들면, 이 육봉이 자극받으면 바르르 떨리는 위치라던가.');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          '예를 들면, 꼬리 아래의 보지에도 더 많고…… 더 격렬한 것이 필요한지 어떤지 같은 것들 말이다.',
        );
      }
    }
  },


  async missionary(attacker, defender, d_call_a, is_anal_sex = false) {
      await defender.print_and_wait(
        '어쩌면 이것이…… 서로의 체온을 가장 잘 느낄 수 있는 자세일지도 모르겠네요.',
      );
      if (is_anal_sex) {
        await defender.say_and_wait(
          '하지만, 그런 구멍의 온도까지 기억하고 싶은 건가요…❤️',
          true,
        );
      }
      await defender.print_and_wait([
        '소위 정상위, 혹은 선교사 자세라 불리는 이 자세는, 엉겨 붙은 두 사람의 정면에서 바라보면 마치 ',
        d_call_a,
        '이(가) 품 안에 파고들어 모유를 마시는 듯한 모습과도 같다.',
      ]);
      await defender.print_and_wait([
        d_call_a,
        '의 몸이 ',
        defender.get_colored_name(),
        '의 몸을 덮었고, 단단한 페니스가 가차 없이 보지 안으로 파고든다. ',
        defender.get_colored_name(),
        '의 길고 매끄러운 다리는 다소 볼품없는 모양새로 ',
        d_call_a,
        '의 허리 양옆으로 뻗어 나가, 발바닥이 하늘을 향한 채 빳빳하게 굳어버렸다……',
      ]);
      await defender.print_and_wait('뜨거워…… 너무 뜨거워……');
      await defender.print_and_wait('……너무 뜨거워❤️');
    },

  async doggy_style(attacker, defender, is_anal_sex = false) {
      await attacker.print_and_wait('마치 강아지처럼……');
      await attacker.print_and_wait(
        '그 다리…… 앞발 끝을 바짝 세운 채 무릎을 굽히고, 젖은 허리를 높게 치켜든 그 다리……',
      );
      await attacker.print_and_wait(
        '그 위에서 지탱되고 있는 것은…… 강아지처럼 무의식적으로 흔들리고 있는 엉덩이다.',
      );
      await attacker.print_and_wait([
        '선정적인 자세로 깔려 있는 ',
        defender.race > 0 ? '귀 ' : '',
        defender.adult_sex_title,
        ', 몸의 떨림이 멈추지 않아, 보는 것만으로도 마른 입술을 축이고 싶게 만든다. 페니스의 미약이 되어버린 그녀를 보며, 뒤에서 거친 숨을 내뱉는 ',
        attacker.get_colored_name(),
        '은(는) 고환까지 통째로 집어넣을 듯 달려들었다.',
      ]);
      if (is_anal_sex) {
        await attacker.print_and_wait(
          '……어라, 이런 식이면 엉덩이로 불알까지 짜낼 수 있겠는데.',
        );
        await attacker.print_and_wait('이건 뭐 질 나쁜 농담도 아니고 말이지.');
      }
    },

  async sitting(attacker, defender, d_call_a, is_vagina = true) {
      await defender.print_and_wait('예상보다 훨씬 더 부끄러워……');
      await defender.print_and_wait(
        (is_vagina ? '보지' : '엉덩이') +
          '가 격렬하게 유린당하는 와중에, 뚫어지게 쳐다봐지다니……❤️',
      );
      await defender.print_and_wait([
        '심술궂은 페니스 때문에 온몸에 힘이 빠져 흐물흐물해졌음에도, ',
        d_call_a,
        '의 시선을 받으니 억지로라도 허리를 꼿꼿이 세우게 된다.',
      ]);
      await defender.print_and_wait(
        '미소를 머금은 그 시선이 붉게 달아오른 얼굴 위를…… ' +
          (defender.sex_code - 1 ? '출렁이는 부드러운 가슴 위를…… ' : '') +
          '페니스의 형태가 비쳐 보이는 아랫배 위를… 탐욕스럽게 훑고 지나간다……',
      );
      await defender.print_and_wait('설마 아직도 부족한 건가요——');
    },

  async hug_sitting(attacker, defender, d_call_a, is_anal_sex = false) {
      await defender.print_and_wait('시선을 피하기 위해 선택한 자세.');
      await defender.print_and_wait('하지만 결국 계속 쳐다보고 있잖아요——');
      await defender.print_and_wait([
        '몸을 뒤로 젖힌 채 양손으로 바닥을 짚고 지탱하며, ',
        defender.get_colored_name(),
        '은(는) 페니스를 삼키고 내뱉는 엉덩이를 무의식적으로 흔든다.',
      ]);
      await defender.print_and_wait([
        '그러다 문득 뒤에서 느껴지는 ',
        attacker.get_colored_name(),
        '의 뜨거운 시선이 다시 그곳에 집중된 것을 발견한다…… 정작 ',
        d_call_a,
        '에게 보이지 않는 얼굴은, 이미 쾌락에 녹아버린 저질스러운 표정을 짓고 있다.',
      ]);
      if (is_anal_sex) {
        await defender.print_and_wait(
          '위험해❤️ 왜 하필 페니스에게 괴롭힘당하는 게 그곳인 거야……',
        );
      }
    },

  async standing(attacker, defender, a_call_d, is_anal_sex = false) {
      await attacker.print_and_wait('다른 자세보다 더 자궁 깊숙이 닿는 것 같아.');
      await attacker.print_and_wait([
        '무의식적으로 깊은 숨을 내뱉으며, ',
        attacker.get_colored_name(),
        '은(는) 한쪽 다리를 머리 높이까지 치켜든 ',
        a_call_d,
        ' 와 몸을 바짝 밀착시켰다.',
      ]);
      await attacker.print_and_wait([
        '팽팽하게 부풀어 오른 고환이 질 입구에 밀착되었고, 페니스 모양대로 불룩해진 아랫배 또한 ',
        attacker.get_colored_name(),
        '의 아랫배와 빈틈없이 맞닿았다.',
      ]);
      await defender.say_and_wait('후우…… 하아……❤️');
      if (is_anal_sex) {
        await defender.say_and_wait('분명히…… 보지와는 다른 곳일 텐데❤️', true);
        await defender.say_and_wait('어째서……❤️', true);
      }
      await attacker.print_and_wait(
        '지나치게 가까운 거리 덕분에, 두 사람이 아랫배를 들썩이며 내뱉는 모든 숨결이 이 성애의 풍미를 더하는 양념이 되었다.',
      );
    },

  async hug_standing(attacker, defender, is_anal_sex = false) {
      await attacker.print_and_wait('허리가 금방 꺾여버렸어.');
      await attacker.print_and_wait(
        '분명 ' +
          (defender.race > 0 ? defender.uma_sex_title : '어른') +
          '임에도 불구하고, 스스로 두 발로 서 있을 능력조차 잃은 채 무언가에 매달려 엉덩이를 치켜들어야만 겨우 서 있을 수 있는 비참한 꼴이 되었다.',
      );
      await attacker.print_and_wait(
        '레이스나 트레이닝과는 전혀 상관없는 안짱다리로 버티고 서서, 앞발 끝에 실린 과도한 체중 때문에 바닥에 파묻힐 듯하면서도, 페니스의 삽입에 맞춰 뒤꿈치는 높게 들썩인다.',
      );
      await attacker.print_and_wait(
        '마치 자발적으로 페니스 아래에 굴복하는 듯한 형국이다. ' +
          (is_anal_sex ? '항문' : '보지') +
          '의 주인은 무릎을 앞으로 내밀고, 연약한 안짱다리 자세 때문에 페니스가 깊숙이 박힐 때마다 양 무릎이 서로 맞닿을 정도로 땀에 젖은 몸을 휘청거리고 있다……',
      );
      if (is_anal_sex) {
        await defender.say_and_wait(
          '이러면 안 되는데…… 하지만, 이런 자세에…… 페니스에 유린당하고 있는 항문이라니…… 너무 위험해……',
          true,
        );
      }
    },

  async suspended_congress(attacker, defender, d_call_a, is_anal_sex = false) {
      await defender.print_and_wait('도망칠 수 없어……');
      await defender.print_and_wait('이 자세가 된 순간부터, 도망칠 곳은 없다.');
      await defender.print_and_wait([
        '몸이 높게 들려 올려진 채, ',
        d_call_a,
        '이(가) 엉덩이를 받치고 페니스 위에 꽂아 넣었다.',
      ]);
      if (is_anal_sex) {
        await defender.print_and_wait(
          '수치스러운 항문이 강제로 페니스 케이스가 되어버렸다…… 하지만 그게 끝이 아니다……',
        );
      }
      await defender.print_and_wait([
        d_call_a,
        '의 허리 양옆으로 벌어진 두 다리에게 남은 자유라고는 허리를 감싸 안을지 말지뿐이다. 그리고 몸이 페니스 아래로 완전히 떨어지지 않게 하기 위해, 양손 또한 ',
        d_call_a,
        ' 를 꽉 껴안는 것 외에는 선택지가 없다.',
      ]);
      await defender.print_and_wait([
        d_call_a,
        '의 허리를 타고 아래로 흘러내릴까…… 반드시…… 그러겠지❤️',
      ]);
    },

  async hug_suspended_congress(
      attacker,
      defender,
      d_call_a,
      is_anal_sex = false,
    ) {
      await defender.print_and_wait('도망칠 수 없어……');
      await defender.print_and_wait('이 자세가 된 순간부터, 도망칠 곳은 없다.');
      await defender.print_and_wait([
        '몸이 높게 들려 올려진 채, ',
        d_call_a,
        '이(가) 엉덩이를 받치고 페니스 위에 꽂아 넣었다.',
      ]);
      if (is_anal_sex) {
        await defender.print_and_wait(
          '수치스러운 항문이 강제로 페니스 케이스가 되어버렸다…… 하지만 그게 끝이 아니다……',
        );
      }
      await defender.print_and_wait([
        d_call_a,
        '의 허리 양옆으로 벌어진 두 다리에게 남은 자유라고는 허리를 감싸 안을지 말지뿐이다. 그리고 몸이 페니스 아래로 완전히 떨어지지 않게 하기 위해, 양손 또한 ',
        d_call_a,
        ' 를 꽉 껴안는 것 외에는 선택지가 없다.',
      ]);
      await defender.print_and_wait([
        d_call_a,
        '의 허리를 타고 아래로 흘러내릴까…… 반드시…… 그러겠지❤️',
      ]);
      await defender.print_and_wait([
        '하아…… 하필 지금 ',
        d_call_a,
        '의 표정이 보이질 않아.',
      ]);
      await defender.print_and_wait([
        '거친 숨소리 속에 의식은 점점 몽롱해지고, ',
        d_call_a,
        ' 를 등진 ',
        defender.get_colored_name(),
        '은(는) 점차 허리를 굽히며, 무너져가는 표정을 흩날리는 머리카락 그림자 속에 숨겼다.',
      ]);
      await defender.say_and_wait('하아……❤️');
    },

  async ask_cowgirl(attacker, defender, d_call_a, is_anal_sex = false) {
      await defender.print_and_wait('집어삼켰어……');
      await defender.print_and_wait([
        '평소처럼 누워있는 ',
        d_call_a,
        '과(와) 손가락을 맞물려 깍지를 낀 채, 매끄럽고 탄력 있는 다리를 아래로 깊게 굽혀, 구멍을 요리조리 비비며 페니스의 커다란 귀두를 받아들일 틈을 찾는다……',
      ]);
      await defender.print_and_wait([
        '자신이 직접 올라타라니…… ',
        d_call_a,
        '은(는) 정말 심술쟁이야……',
      ]);
      if (is_anal_sex) {
        await defender.say_and_wait('게다가, 항문으로 하라니……', true);
      }
      await attacker.say_and_wait('허리도 좀 흔들어봐.');
      await defender.print_and_wait([
        '이번에는 ',
        defender.get_colored_name(),
        '의 느릿느릿한 동작을 기다릴 필요가 없다. 그저 좁은 질 내벽에 박힌 페니스가 민감한 곳을 살짝 찔러주는 것만으로도, ',
        defender.get_colored_name(),
        '의 허리는 마치 태엽이 감긴 것처럼 쉴 새 없이 ',
        d_call_a,
        '의 눈앞에서 춤추기 시작한다……',
      ]);
    },

  async stimulate_g_spot(attacker, defender, a_call_d) {
      await attacker.print_and_wait('더 깊게.');
      await defender.say_and_wait('아윽——');
      await attacker.print_and_wait([
        a_call_d,
        '이(가) 거의 ',
        attacker.get_colored_name(),
        '의 몸속으로 파고들 기세다. 만족을 모르는 ',
        attacker.get_colored_name(),
        '은(는) 0의 거리조차 가차 없이 돌파하며, 가랑이 사이의 페니스를 치켜든 허리에 맞춰 단단하게 밀어 넣는다. 소녀의 입술, 보지, 자궁이 모두 그 감각에 도취되어 신음을 내지른다……',
      ]);
      await defender.say_and_wait('우오오오오오오오옷————❤️❤️');
      await attacker.print_and_wait(
        '소위 G스팟이라는 것은 이런 것이다. 그전까지 어떤 소녀였든, 상냥했든 활기찼든 상관없다. 수컷의 냄새가 물씬 풍기는 단단한 페니스가 그곳의 살점을 짓이기며 파고드는 순간, 한순간에 성교에 미쳐버린 저질스러운 암컷으로 타락하고 만다.',
      );
      await attacker.print_and_wait(
        '아름다운 몸이 페니스의 충돌에 맞춰 웅크러들고, 목구멍에서는 탁한 신음만이 새어 나온다. 오직 지척에 있는 자궁만이 뜨겁게 달아오를 뿐이다.',
      );
    },

  async ask_double_blow_job(attacker, defender, supporter, is_first, a_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(), '이(가) 다리를 벌리자 ', a_penis,
        ' 크기의 성기가 당당하게 고개를 쳐들었고, ', defender.get_colored_name(),
        ' 와(과) ', supporter.get_colored_name(), ' 은(는) ', attacker.get_colored_name(),
        '의 신호에 맞춰 입을 벌리고 다가갔다……',
      ]);
    } else {
      await attacker.print_and_wait([
        attacker.get_colored_name(), '의 지시에 따라 ', defender.get_colored_name(),
        ' 와(과) ', supporter.get_colored_name(),
        ' 은(는) 번갈아 가며 성기를 입으로 봉사하고 있다……',
      ]);
    }
  },

  async ask_double_fuck(attacker, defender, supporter, is_first, d_penis, s_penis) {
    const buffer = [];
    if (is_first) {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(), ' 은(는) 다리를 크게 벌려 ',
            defender.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
            '에게 보지를 보여주며, 두 사람의 빳빳한 성기를 보며 입술을 핥았다.',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(), '의 노골적인 유혹에 ',
            defender.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
            ' 은(는) 참지 못하고 ', attacker.get_colored_name(),
            '에게 달려들어 유혹적인 보지에 번갈아 가며 추삽질을 시작했다……',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? '이(가) 다리를 벌리고' : '이(가) 엎드린 채로',
            ' 엉덩이를 흔들며, ', defender.get_colored_name(), ' 와(과) ',
            supporter.get_colored_name(), '에게 교대로 자신의 깊은 곳을 유린해달라고 청했다.',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(), ' 은(는) ', defender.get_colored_name(),
            ' 와(과) ', supporter.get_colored_name(), ' 사이에 끼어, ',
            ...(d_penis === s_penis ? ['두 자루의 ', d_penis, ' 모양'] : [d_penis, ' 와(과) ', s_penis, ' ']),
            '의 성기를 번갈아 가며 음탕한 보지로 삼켜내고 있다.',
          ]);
          await attacker.print_and_wait([
            '애액이 세 사람의 하반신을 엉망진창으로 적셨고, 간간이 ',
            attacker.get_colored_name(), '의 교성이 울려 퍼졌다……',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            defender.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
            '의 서로 다른 성기와 삽입 방식,',
          ]);
          await attacker.print_and_wait('그리고 자신이 두 사람에게 연달아 범해지고 있다는 배덕감이,');
          await attacker.print_and_wait([
            attacker.get_colored_name(), '에게 삽입될 때마다 평소와는 다른 비정상적인 쾌감을 안겨주었다.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },

  async ask_double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(), ' 은(는) 기승위로 ', defender.get_colored_name(),
        ' 를 보지 깊숙이 받아들인 뒤, ', supporter.get_colored_name(),
        '에게 자신의 항문에도 삽입해달라고 신호를 보냈다……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
        ' 은(는) 함께 ', attacker.get_colored_name(), '의 앞뒤 구멍을 끊임없이 공격하고 있다.',
      ]);
      await attacker.print_and_wait('이중의 쾌감과 동시에 두 사람에게 범해지고 있다는 배덕감이,');
      await attacker.print_and_wait([
        attacker.get_colored_name(), ' 로 하여금 삽입될 때마다 절로 비명을 지르게 만들었다……',
      ]);
    }
  },

  async ask_spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? '보지' : '애널';
    if (is_first) {
      const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
      const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        (motion ^ towards) > 0 ? '이(가) 다리를 벌리고' : '이(가) 엎드린 채로',
        ' 엉덩이를 흔들며, ', defender.get_colored_name(), '에게 자신의 ',
        part_name, '을(를) 삽입해달라고 조르면서, 탐욕스럽게 ',
        supporter.get_colored_name(), '의 성기를 입에 물었다……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
        ' 은(는) 함께 ', attacker.get_colored_name(), '의 입과 ', part_name,
        '을(를) 끊임없이 공격하고 있다……',
      ]);
      await attacker.print_and_wait([
        '아래에서 느껴지는 쾌감과 입안을 가득 채운 성기의 숨 막히는 충격에 ',
        attacker.get_colored_name(), '의 뇌 속은 이미 성기 생각밖에 남지 않게 되었다……',
      ]);
    }
  },

  async fuck_69(attacker, defender, supporter, is_first, d_has_penis, s_has_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.get_colored_name(), ' 은(는) 침대에 누워 ', supporter.get_colored_name(),
        ' 와(과) 서로의 ',
        d_has_penis ? (s_has_penis ? '성기' : '성기와 보지') : (s_has_penis ? '보지와 성기' : '보지'),
        '을(를) 핥고 있으며,',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(), ' 은(는) 흥분해서 부풀어 오른 성기를 참지 못하고 ',
        defender.get_colored_name(), '의 보지에 처박았다……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(), '의 보지에서 튀긴 애액이, ',
        supporter.get_colored_name(), '이(가) 열심히 ', attacker.get_colored_name(),
        '의 성기가 삽입되는 곳을 핥고 있는 얼굴을 적셨다.',
      ]);
      await attacker.print_and_wait([
        supporter.get_colored_name(), ' 역시 ', defender.get_colored_name(),
        '의 입에 봉사 받으며 가냘픈 신음을 내뱉고 있다……',
      ]);
    }
  },

  async double_fuck(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(), ' 은(는) ', attacker.get_colored_name(),
        ' 와(과) ', supporter.get_colored_name(), '에게 억눌렸다.',
      ]);
      await defender.print_and_wait(['두 사람은 ', defender.get_colored_name(), '의 기분은 안중에도 없다는 듯,']);
      await defender.print_and_wait([
        '그저 번갈아 가며 흥분으로 곧게 선 성기를 ', defender.get_colored_name(),
        '의 보지에 쑤셔 넣고 격렬하게 추삽질했다……',
      ]);
    } else {
      await defender.print_and_wait([
        defender.get_colored_name(), ' 은(는) 끊임없이 ', attacker.get_colored_name(),
        ' 와(과) ', supporter.get_colored_name(), '의 성기에 번갈아 침범당하고 있다.',
      ]);
      await defender.print_and_wait('두 사람 중 한쪽이 조금이라도 피로를 느끼면 바로 교대를 반복했고,');
      await defender.print_and_wait([
        '오직 ', defender.get_colored_name(), '의 애액으로 범벅이 된 보지만이 쉴 틈 없이 유린당해,',
      ]);
      await defender.print_and_wait('이제 의식마저 아득해지려 하고 있었다……');
    }
  },

  async double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(), ' 은(는) ', attacker.get_colored_name(), '의 위로 끌려가 보지에 삽입당했고,',
      ]);
      await defender.print_and_wait([
        supporter.get_colored_name(), ' 역시 동시에 ', defender.get_colored_name(), '의 항문에 성기를 집어넣었다……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
        ' 은(는) 함께 ', defender.get_colored_name(), '의 앞뒤 구멍을 계속해서 공격하고 있다.',
      ]);
      await defender.print_and_wait('이중의 쾌감과 동시에 두 사람에게 범해지고 있다는 배덕감에,');
      await defender.print_and_wait([
        defender.get_colored_name(), ' 은(는) 삽입이 반복될 때마다 비명을 지르며 흐느꼈다……',
      ]);
    }
  },

  async spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? '보지' : '애널';
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(), ' 은(는) ', attacker.get_colored_name(),
        ' 와(과) ', supporter.get_colored_name(), '에게 단번에 붙잡혔다.',
      ]);
      await defender.print_and_wait(['두 사람은 ', defender.get_colored_name(), '의 기분은 전혀 고려하지 않은 채,']);
      await defender.print_and_wait([
        '그저 앞뒤에서 흥분으로 빳빳하게 일어선 성기를 ', defender.get_colored_name(),
        '의 ', part_name, '와 입속에 찔러넣고 격렬하게 추삽질하기 시작했다……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(), ' 와(과) ', supporter.get_colored_name(),
        ' 은(는) 함께 끊임없이 ', defender.get_colored_name(), '의 ', part_name, '와 입을 유린하고 있다.',
      ]);
      await defender.print_and_wait([
        '아래에서 느껴지는 쾌감과 입안의 성기가 주는 숨 막히는 충격 때문에 ',
        defender.get_colored_name(), '의 머릿속은 이미 성기로 가득 차 버렸다……',
      ]);
    }
  },

  async insult(attacker, defender) {
    const buffer = [];
    if (era.get('tflag:强奸') === defender.id) {
      buffer.push(() => attacker.say_and_wait('쓰레기! 강간범! 죽어버려!'));
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      buffer.push(() => attacker.say_and_wait('허접~ 허접~'));
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      buffer.push(() => attacker.say_and_wait([
        '멍청이! 무능한 ', defender.sex_slave_title, '! 박히고 싶어 안달 난 변태 자식!',
      ]));
    }
    if (buffer.length === 0) {
      buffer.push(() => attacker.say_and_wait([
        '그렇게 매도당하고 싶은 거냐, ', defender.sex_slave_title, '?',
      ]));
    }
    await get_random_entry(buffer)();
  },

  async hit_face_by_penis(attacker, defender, a_call_d, d_call_a) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        d_call_a, '에게 머리카락을 붙잡혔다. 자신의 힘으로는 도저히 저항할 수 없음을 깨닫고, ',
        d_call_a, '의 가랑이 사이에서 흉하게 고개를 치켜든 페니스를 바라보며 ',
        defender.get_colored_name(), '은(는) 불길한 예감이 들기 시작했다.',
      ]);
      await attacker.say_and_wait([a_call_d, '~ 내 냄새를 똑똑히 기억해 두라고~']);
      await defender.print_and_wait([
        '저항하지 못한 채 뺨을 때리는 듯한 감촉이 전해졌고, ', d_call_a,
        '의 페니스에서 풍기는 지독한 냄새에 ', defender.get_colored_name(),
        '은(는) 자신도 모르게 굴복하고 싶어졌다.',
      ]);
      await defender.print_and_wait([
        '얼굴에 ', d_call_a, '의 성기 자국을 남긴 채, ', defender.get_colored_name(),
        '은(는) 얼굴을 치켜들고 다음 매가 날아오기를 기다리고 있다.',
      ]);
    } else {
      await attacker.print_and_wait([
        a_call_d, '의 머리카락을 쥐고, ', attacker.get_colored_name(),
        '은(는) 강압적으로 자신의 성기를 ', defender.sex, '의 얼굴에 들이밀었다. 자신의 성기에 유린당하는 ',
        defender.sex, '의 얼굴을 보며 ', attacker.get_colored_name(), '은(는) 미소를 지었다.',
      ]);
      await defender.say_and_wait('으으윽...!!!');
      await attacker.print_and_wait([
        '수컷의 냄새가 물씬 풍기는 페니스에 ', a_call_d, '의 코가 쉴 새 없이 움찔거렸다. ',
        attacker.get_colored_name(), '이(가) ', a_call_d,
        '의 머리카락을 잡고 허리를 흔들기 시작하자, 성기와 ', a_call_d,
        '의 매끄러운 뺨이 부딪히며 음란한 소리를 내었고, ', a_call_d,
        '의 눈동자 또한 몽롱하게 풀리기 시작했다.',
      ]);
    }
  },

  async use_medicine(chara, item) {
    switch (item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (chara.sex_code === 0) {
          await era.printAndWait([chara.get_colored_name(), '에게 사나운 거근이 생겼다!'], { color: buff_colors[2] });
        } else {
          await era.printAndWait([chara.get_colored_name(), '의 육봉이 더 굵어졌다……']);
        }
      // eslint-disable-next-line no-fallthrough
      case medicine_enum.uma_z:
        if (!era.get(`tcvar:${chara.id}:发情`)) {
          await era.printAndWait([chara.get_colored_name(), '은(는) 점점 흥분되기 시작헸다……'], { color: buff_colors[2] });
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait([chara.get_colored_name(), '의 가슴에서 모유가 흘러나오기 시작했다……'], { color: buff_colors[2] });
    }
  },


  async pet_breast_from_back(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      a_call_d,
      '이(가) 보여주는 나약한 모습에 조금의 동정이나 만족도 느끼지 못한 채, 쉽게 만족할 줄 모르는 ',
      attacker.get_colored_name(),
      '은(는) 그저 사과가 떨어지듯 아래로 툭 불거진 모양의 아름다운 가슴으로 양손을 더 깊숙이 뻗었다.',
    ]);
    await defender.say_and_wait('하아……');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '은(는) 풍만한 가슴 살을 거머쥔 다섯 손가락에 더욱 힘을 주어, ',
      a_call_d,
      ' 자신의 부드러움을 오직 자신만이 좋아하는 모양으로 제멋대로 바꾸어버렸다.',
    ]);
  },

  async pet_breast_first(attacker, defender, a_call_d) {
    if (era.get(`cflag:${defender.id}:成长阶段`) < 5) {
      await attacker.print_and_wait([
        defender.teen_sex_title,
        '의 부드러움이…… 지금 자신의 손바닥 안으로 떨어졌다.',
      ]);
    } else {
      await attacker.print_and_wait(
        '유혹적인 부드러움이…… 지금 자신의 손바닥 안으로 떨어졌다.',
      );
    }
    await attacker.print_and_wait(
      '참을 수 없는 손가락 끝이 저절로 움직이기 시작했다. 하루빨리 눈앞의 부드러운 살결에 지문을 새기고, 자신에게 더 어울리는 모양으로 만들고 싶어 안달이 났다.',
    );
    await defender.say_and_wait('으으……');
    await attacker.print_and_wait([
      a_call_d,
      '의 몸이 자신의 손가락을 따라 흔들리며 묘한 소리를 내고 있다…… 하아, 인정할 수밖에 없군. 이 감각은 멈추고 싶지 않을 정도로 환상적이야……',
    ]);
  },

  async pet_breast(attacker, defender, a_call_d, d_call_a) {
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait([
      '아, 이쪽도 슬슬 느껴지는군…… 눈앞의 ',
      a_call_d,
      '의 몸이, 자신의 손길에 긴장하고 있으며, 또한 자신의 손길에 외로워하고 있다는 것을……',
    ]);
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait('하지만, 역시 조금 더 제멋대로 굴고 싶어.');
  },

  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('으으으으————');
      await attacker.print_and_wait(
        '그것을 입에 담지 않을 이유가 없다. 눈앞에서 음란한 암컷의 냄새를 풍기며 충혈된 클리토리스를 보호막에서 끄집어낸 뒤, 그것을 외롭게 내버려 둔 채 떨게 놔둘 이유 따위는 없다.',
      );
      await attacker.print_and_wait([
        '그래서 ',
        attacker.get_colored_name(),
        '은(는) 몸을 깊게 숙여, ',
        a_call_d,
        '의 넓게 벌어진 가랑이 사이로 머리를 묻었다.',
      ]);
      await attacker.print_and_wait('반사적으로 오므린 허벅지 사이가 떨리고 있다.');
      await attacker.print_and_wait('이쪽의 허리를 감싼 무릎이 떨리고 있다.');
      await attacker.print_and_wait('허리 뒤로 돌린 두 발이 떨리고 있다.');
      await attacker.print_and_wait('아…… 왜 갑자기 이렇게 된 걸까……');
      await attacker.print_and_wait(
        '설마 혀끝에 닿아 점점 더 젖어가는 이 작은 돌기 때문은 아니겠지.',
      );
    } else {
      await attacker.print_and_wait('혀끝으로 가볍게 건드린다.');
      await attacker.print_and_wait('빨아올려 세운다.');
      await attacker.print_and_wait('살짝 숨을 불어넣는다.');
      await attacker.print_and_wait('조금 고민되는군……');
      await attacker.print_and_wait([
        '눈앞의 클리토리스를 어떤 방식으로 자극하든, 앞에 있는 ',
        a_call_d,
        '이(가) 똑같이 쾌락 속에서 떨고 있다면, 어떤 것을 더 좋아하는지 알 수 없지 않은가.',
      ]);
    }
  },

  async ask_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('부탁해……');
      await defender.print_and_wait([
        '비록 아직 부끄러움이 남아있지만, 앞에 있는 ',
        d_call_a,
        '은(는) 스스로 양손을 사용해 떨리는 두 다리를 이쪽으로 벌렸다.',
      ]);
      await defender.say_and_wait('으으으으————');
      await defender.print_and_wait(
        '그것을 입에 담지 않을 이유가 없다. 눈앞에서 음란한 암컷의 냄새를 풍기며 충혈된 클리토리스를 보호막에서 끄집어낸 뒤, 그것을 외롭게 내버려 둔 채 떨게 놔둘 이유 따위는 없다.',
      );
      await defender.print_and_wait([
        '그래서 ',
        defender.get_colored_name(),
        '은(는) 몸을 깊게 숙여, ',
        d_call_a,
        '의 넓게 벌어진 가랑이 사이로 머리를 묻었다.',
      ]);
      await defender.print_and_wait('반사적으로 오므린 허벅지 사이가 떨리고 있다.');
      await defender.print_and_wait('이쪽의 허리를 감싼 무릎이 떨리고 있다.');
      await defender.print_and_wait('허리 뒤로 돌린 두 발이 떨리고 있다.');
      await defender.print_and_wait('아…… 왜 갑자기 이렇게 된 걸까……');
      await defender.print_and_wait(
        '설마 혀끝에 닿아 점점 더 젖어가는 이 작은 돌기 때문은 아니겠지.',
      );
    } else {
      await defender.print_and_wait('혀끝으로 가볍게 건드린다.');
      await defender.print_and_wait('빨아올려 세운다.');
      await defender.print_and_wait('살짝 숨을 불어넣는다.');
      await defender.print_and_wait('조금 고민되는군……');
      await defender.print_and_wait([
        '눈앞의 클리토리스를 어떤 방식으로 자극하든, 앞에 있는 ',
        d_call_a,
        '이(가) 똑같이 쾌락 속에서 떨고 있다면, 어떤 것을 더 좋아하는지 알 수 없지 않은가.',
      ]);
    }
  },

  async force_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('부탁할게~');
      await defender.print_and_wait([
        '주도적으로 다리를 벌린 ',
        d_call_a,
        '이(가) 기대 섞인 눈빛으로 자신의 아래에 있는 담당을 바라보며, 시선을 회피하는 ',
        defender.get_colored_name(),
        '의 머리를 손으로 눌러 내렸다.',
      ]);
      await defender.say_and_wait('으으으으————');
      await defender.print_and_wait(
        '그것을 입에 담지 않을 이유가 없다. 눈앞에서 음란한 암컷의 냄새를 풍기며 충혈된 클리토리스를 보호막에서 끄집어낸 뒤, 그것을 외롭게 내버려 둔 채 떨게 놔둘 이유 따위는 없다.',
      );
      await defender.print_and_wait([
        '그래서 ',
        defender.get_colored_name(),
        '은(는) 몸을 깊게 숙여, ',
        d_call_a,
        '의 넓게 벌어진 가랑이 사이로 머리를 묻었다.',
      ]);
      await attacker.say_and_wait('하아❤️');
      await defender.print_and_wait(
        '민망한 요구를 한 쪽이면서, 지금은 정신없이 몸을 흔들고 있다……',
      );
      await defender.print_and_wait('반사적으로 오므린 허벅지 사이가 떨리고 있다.');
      await defender.print_and_wait('이쪽의 허리를 감싼 무릎이 떨리고 있다.');
      await defender.print_and_wait('허리 뒤로 돌린 두 발이 떨리고 있다.');
      await defender.print_and_wait('아…… 왜 갑자기 이렇게 된 걸까……');
      await defender.print_and_wait(
        '설마 혀끝에 닿아 점점 더 젖어가는 이 작은 돌기 때문은 아니겠지.',
      );
    } else {
      await defender.print_and_wait('혀끝으로 가볍게 건드린다.');
      await defender.print_and_wait('빨아올려 세운다.');
      await defender.print_and_wait('살짝 숨을 불어넣는다.');
      await defender.print_and_wait('조금 고민되는군……');
      await defender.print_and_wait([
        '눈앞의 클리토리스를 어떤 방식으로 자극하든, 앞에 있는 ',
        d_call_a,
        '이(가) 똑같이 쾌락 속에서 떨고 있다면, 어떤 것을 더 좋아하는지 알 수 없지 않은가.',
      ]);
    }
  },

  async suck_virgin(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        '심장 박동을 빠르게 만드는 냄새…… 혀끝에서 온몸으로 녹아드는 새콤달콤하고 비릿한 맛……',
      );
      await attacker.print_and_wait(
        '혀로 음부를 핥는 이 애매한 연결 자세 속에서, 과연 어느 쪽이 먼저 가버리는 걸까……',
      );
      await attacker.print_and_wait('부드러움과 부드러움의 대결.');
      await attacker.print_and_wait(
        '휘파람을 불 듯 오므린 입술 모양으로 질구 안쪽을 향해 강제로 말려 들어가 천천히 나아가는 혀와, 따뜻한 자극에 대응해 서투르게 꿈틀대며 맞서는 구멍……',
      );
      await attacker.print_and_wait('어느 쪽도 쉽게 물러날 수 없는 이유가 있다……');
    } else {
      await attacker.print_and_wait('슬슬 다른 일을 해도 좋겠군.');
      await attacker.print_and_wait(
        '처음에 어떻게 한 줄 좁은 틈처럼 청순한 형태를 유지했는지 기억나지 않을 정도로, 계속되는 혀의 애무에 안팎으로 흠뻑 젖어버린 구멍은 이제 밖으로 뒤집힌 채 파르르 떨리고 있다……',
      );
      await attacker.print_and_wait(
        '그리고 그 나쁜 아이의 허리를 꽉 조이고 있던 두 다리도, 어느샌가 힘이 풀려 발레리나처럼 발끝만 높게 세운 모양새로 남았다.',
      );
    }
  },

  async ask_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('하아……');
      await defender.print_and_wait([
        d_call_a,
        '이(가) 지금 자신의 눈앞에서 손가락으로 분홍빛 비순을 벌리고 있다. 그렇다면 이쪽에서 무엇을 해야 할지는 불 보듯 뻔한 일이다……',
      ]);
      await defender.print_and_wait(
        '심장 박동을 빠르게 만드는 냄새…… 혀끝에서 온몸으로 녹아드는 새콤달콤하고 비릿한 맛……',
      );
      await defender.print_and_wait(
        '혀로 음부를 핥는 이 애매한 연결 자세 속에서, 과연 어느 쪽이 먼저 가버리는 걸까……',
      );
      await defender.print_and_wait('부드러움과 부드러움의 대결.');
      await defender.print_and_wait(
        '휘파람을 불 듯 오므린 입술 모양으로 질구 안쪽을 향해 강제로 말려 들어가 천천히 나아가는 혀와, 따뜻한 자극에 대응해 서투르게 꿈틀대며 맞서는 구멍……',
      );
      await defender.print_and_wait('어느 쪽도 쉽게 물러날 수 없는 이유가 있다……');
    } else {
      await defender.print_and_wait(
        '그만하라는 요청이 좀처럼 들리지 않기에, 이쪽의 혀도 중도에 멈출 이유가 없다.',
      );
      await defender.print_and_wait('하지만……');
      await defender.print_and_wait('슬슬 다른 일을 해도 좋겠군.');
      await defender.print_and_wait(
        '처음에 어떻게 한 줄 좁은 틈처럼 청순한 형태를 유지했는지 기억나지 않을 정도로, 계속되는 혀의 애무에 안팎으로 흠뻑 젖어버린 구멍은 이제 밖으로 뒤집힌 채 파르르 떨리고 있다……',
      );
      await defender.print_and_wait(
        '그리고 그 나쁜 아이의 허리를 꽉 조이고 있던 두 다리도, 어느샌가 힘이 풀려 발레리나처럼 발끝만 높게 세운 모양새로 남았다.',
      );
    }
  },

  async force_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('으으—');
      await defender.print_and_wait(
        '강제로 머리가 눌렸고, 비명을 지르며 벌리려던 입술은 그대로 노골적인 보지와 맞닥뜨렸다.',
      );
      await defender.print_and_wait(
        '심장 박동을 빠르게 만드는 냄새…… 혀끝에서 온몸으로 녹아드는 새콤달콤하고 비릿한 맛……',
      );
      await defender.print_and_wait(
        '혀로 음부를 핥는 이 애매한 연결 자세 속에서, 과연 어느 쪽이 먼저 가버리는 걸까……',
      );
      await defender.print_and_wait('부드러움과 부드러움의 대결.');
      await defender.print_and_wait(
        '휘파람을 불 듯 오므린 입술 모양으로 질구 안쪽을 향해 강제로 말려 들어가 천천히 나아가는 혀와, 따뜻한 자극에 대응해 서투르게 꿈틀대며 맞서는 구멍……',
      );
      await defender.print_and_wait('어느 쪽도 쉽게 물러날 수 없는 이유가 있다……');
    } else {
      await attacker.say_and_wait('하아~');
      await defender.print_and_wait([
        '만족스러웠는지, 시원한 맥주라도 들이킨 것처럼 ',
        d_call_a,
        '이(가) 상쾌한 숨을 내뱉었다.',
      ]);
      await defender.print_and_wait('슬슬 다른 일을 해도 좋겠군.');
      await defender.print_and_wait(
        '처음에 어떻게 한 줄 좁은 틈처럼 청순한 형태를 유지했는지 기억나지 않을 정도로, 계속되는 혀의 애무에 안팎으로 흠뻑 젖어버린 구멍은 이제 밖으로 뒤집힌 채 파르르 떨리고 있다……',
      );
      await defender.print_and_wait(
        '그리고 그 나쁜 아이의 허리를 꽉 조이고 있던 두 다리도, 어느샌가 힘이 풀려 발레리나처럼 발끝만 높게 세운 모양새로 남았다.',
      );
    }
  },

  async blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(
        '눈앞의 광경을 보니, 정말이지 죄책감이 울컥 솟구치는군요……',
        true,
      );
      if (attacker.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait(
          '우마무스메와 페니스, 거의 접점이 존재하지 않던 이 두 단어가 지금 이 순간 끈적하게 이어져 있다……',
        );
      }
      await attacker.print_and_wait(
        '자신의 입술이 페니스에 의해 강제로 벌어지고, 원래는 영양분을 섭취해야 할 자리에 딱딱하게 발기한 불길한 녀석이 자리 잡아, 몸을 이상하게 만드는 저질스러운 냄새를 제멋대로 풍기고 있다.',
      );
      await attacker.print_and_wait('웅크린 몸이 떨리기 시작했다…… 어째서일까……');
      await attacker.print_and_wait('이런 일, 역시 좀 이상한 걸까……?');
    } else {
      await attacker.say_and_wait('츄릅, 츄르릅~~');
      await attacker.print_and_wait('어느샌가 조금 더 능숙해졌다……');
      await attacker.print_and_wait(
        '고개를 약간 들어 올리면 눈앞의 페니스를 더 깊숙이 머금울 수 있다……',
      );
      await attacker.print_and_wait(
        '눌린 혀로 측면을 살짝 핥으면, 기분 좋은 듯 파르르 떨린다.',
      );
      await attacker.print_and_wait('입술을 좀 더 활용해 본다면…… 쪽……');
      await attacker.print_and_wait(
        '콜록, 콜록…… 밀려 들어오는 진하고 부끄러운 냄새에 머릿속이 어질어질해진다……',
      );
    }
  },

  async ask_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('부탁이야—');
      await defender.print_and_wait([
        '앞에 있는 ',
        d_call_a,
        '이(가) 갑자기 얼굴이 붉어질 만한 말을 꺼냈다.',
      ]);
      await defender.print_and_wait(
        '갑자기 이런 요구를 하다니, 거절당하고 걷어차여도 할 말 없다고……',
      );
      await attacker.say_and_wait(
        '눈앞의 광경을 보니, 정말이지 죄책감이 울컥 솟구치는군요……',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          '우마무스메와 페니스, 거의 접점이 존재하지 않던 이 두 단어가 지금 이 순간 끈적하게 이어져 있다……',
        );
      }
      await defender.print_and_wait(
        '자신의 입술이 페니스에 의해 강제로 벌어지고, 원래는 영양분을 섭취해야 할 자리에 딱딱하게 발기한 불길한 녀석이 자리 잡아, 몸을 이상하게 만드는 저질스러운 냄새를 제멋대로 풍기고 있다.',
      );
      await defender.print_and_wait('웅크린 몸이 떨리기 시작했다…… 어째서일까……');
      await defender.print_and_wait('이런 일, 역시 좀 이상한 걸까……?');
    } else {
      await defender.print_and_wait('같은 요구를 몇 번이고 반복하는 건 너무 반칙인데……');
      await defender.say_and_wait('츄릅, 츄르릅~~');
      await defender.print_and_wait('어느샌가 조금 더 능숙해졌다……');
      await defender.print_and_wait(
        '고개를 약간 들어 올리면 눈앞의 페니스를 더 깊숙이 머금울 수 있다……',
      );
      await defender.print_and_wait(
        '눌린 혀로 측면을 살짝 핥으면, 기분 좋은 듯 파르르 떨린다.',
      );
      await defender.print_and_wait('입술을 좀 더 활용해 본다면…… 쪽……');
      await defender.print_and_wait(
        '콜록, 콜록…… 밀려 들어오는 진하고 부끄러운 냄새에 머릿속이 어질어질해진다……',
      );
    }
  },

  async force_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('입 벌려.');
      await defender.print_and_wait(
        '저항하면 소용이 있을지도 모른다고 생각했지만, 몸은 조금씩 그 손에 눌려 아래로 내려가고 있다……',
      );
      await defender.say_and_wait('으으……');
      await attacker.say_and_wait(
        '눈앞의 광경을 보니, 정말이지 죄책감이 울컥 솟구치는군요……',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          '우마무스메와 페니스, 거의 접점이 존재하지 않던 이 두 단어가 지금 이 순간 끈적하게 이어져 있다……',
        );
      }
      await defender.print_and_wait(
        '자신의 입술이 페니스에 의해 강제로 벌어지고, 원래는 영양분을 섭취해야 할 자리에 딱딱하게 발기한 불길한 녀석이 자리 잡아, 몸을 이상하게 만드는 저질스러운 냄새를 제멋대로 풍기고 있다.',
      );
      await defender.print_and_wait('웅크린 몸이 떨리기 시작했다…… 어째서일까……');
      await defender.print_and_wait('이런 일, 역시 좀 이상한 걸까……?');
    } else {
      await defender.say_and_wait('하아……', true);
      await defender.say_and_wait('더…… 계속할 건가요……', true);
      await defender.say_and_wait('츄릅, 츄르릅~~');
      await defender.print_and_wait('어느샌가 조금 더 능숙해졌다……');
      await defender.print_and_wait(
        '고개를 약간 들어 올리면 눈앞의 페니스를 더 깊숙이 머금울 수 있다……',
      );
      await defender.print_and_wait(
        '눌린 혀로 측면을 살짝 핥으면, 기분 좋은 듯 파르르 떨린다.',
      );
      await defender.print_and_wait('입술을 좀 더 활용해 본다면…… 쪽……');
      await defender.print_and_wait(
        '콜록, 콜록…… 밀려 들어오는 진하고 부끄러운 냄새에 머릿속이 어질어질해진다……',
      );
    }
  },


  // [번역 대상] after_refused
  async after_refused(chara, is_attacker = true) {
    if (is_attacker) {
      await chara.say_and_wait('やっぱり、だめだったか……');
      await chara.print_and_wait(
        '空気に乗せて口にした下品なねだりも、さすがに限度があるらしい……',
      );
      await chara.print_and_wait(
        'こうして、体の奥はまだざわついたまま、今日はここで終わりにするしかない。',
      );
      await chara.print_and_wait('ただ……');
    } else {
      await chara.print_and_wait('そんな目をしないでほしい……');
      await chara.print_and_wait(
        '何でもこちらが従うとでも思っているのだろう！',
      );
      await chara.print_and_wait('……まったく');
    }
  },

  // [번역 대상] ask_armpit_intercourse
  async ask_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('えっ？');
      await attacker.print_and_wait('もう一度言ってくれるか……');
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' の気が進まなそうな顔が無言で急かすので……',
      ]);
      await attacker.say_and_wait('腋を肉棒で擦らせてください！');
      await defender.say_and_wait('……');
      await attacker.print_and_wait('最低だ。');
      await attacker.print_and_wait([
        '目の前で腕を高く上げた ',
        a_call_d,
        ' の、恥ずかしそうに揺れる尻から、そんな不満が読める。',
      ]);
      await attacker.print_and_wait('こればかりは仕方ない。');
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait([
        a_call_d,
        ' の腋が、肉棒の大きな亀頭に洗われている。',
      ]);
      await attacker.print_and_wait(
        '湯気立つ腋肉が抽送に合わせて薄く赤らみ、本当に性の器官へ変わっていくみたいだ……',
      );
      await attacker.print_and_wait([
        'これを当然だと思いきれず、',
        attacker.get_colored_name(),
        ' の動きには、まだ迷いがある……',
      ]);
      await attacker.print_and_wait([
        '……迷いながら肉棒で擦り、背を向けた ',
        a_call_d,
        ' の腋の穴を……',
      ]);
    } else {
      await defender.print_and_wait('なんだか……おかしくなってきた……');
      await defender.print_and_wait('腋は、こんなことに使う器官だったのか……');
      await defender.print_and_wait('それに、こんな感触があったなんて……');
      await defender.print_and_wait([
        '肉棒に染まって何かが変わっていくらしい。顔を真っ赤にした ',
        defender.get_colored_name(),
        ' は不安げに、もうちゅるちゅると手慣れた肉棒殿に仕えている。',
      ]);
    }
  },

  // [번역 대상] ask_deep_blow_job
  async ask_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('もっと、奥がほしい……');
      await defender.print_and_wait([
        '欲張って呟き、快感を求める本能に支配された ',
        d_call_a,
        ' は腰を突き出した。',
      ]);
      await defender.print_and_wait('もっと深く含んだ……');
      await defender.print_and_wait('当たった、いちばん奥……');
      await defender.say_and_wait('ちゅるちゅる……');
      await defender.print_and_wait(
        'この場のふたりのうち、少なくとも一人の名もなき下品な誰かが先走って、この淫らな体勢からちゅうちゅうと、眉をほどく禁忌の快感を搾り出している。',
      );
      await defender.print_and_wait([
        '……こうして、',
        defender.get_colored_name(),
        ' のこの小さな口は、今この瞬間から、養分を取る以外の意味を与えられ、ねちねちとした音を立てて肉棒に絡みつく下品な性器へと堕ちた。もう取り返しはつかない❤️',
      ]);
      await defender.print_and_wait(
        '喉の柔らかさで亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さないほどきつい吸いで柱を支える……',
      );
      await defender.print_and_wait([
        '何を学び、何を覚え、どんな姿になっていくのだろう……今、',
        d_call_a,
        ' の下に屈む ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        '喉でごくごくと肉棒に仕えながら尻尾を揺らせる余裕まで出てきた。',
        defender.get_colored_name(),
        ' はこの点で、',
        attacker.phy_sex_title,
        'の予想通り、才能がある。',
      ]);
      await defender.print_and_wait([
        'ちらりと ',
        d_call_a,
        ' が息を吸って顔を上げる姿をちらりと見ながら、鼻歌の暇もない ',
        defender.get_colored_name(),
        ' は分かりやすく耳を震わせる。',
      ]);
      await defender.print_and_wait('どう～');
      await defender.print_and_wait([
        '今の小さな口に話す暇はない。だが、自分の',
        defender.race > 0 ? '担当' : '仲間',
        '零距離で触れている ',
        d_call_a,
        ' は、舌先で肉棒の亀頭に描かれた手柄話を、完全に理解した。',
      ]);
      await defender.say_and_wait('はぁ……はぁ……❤️');
      await defender.print_and_wait('飲み込む……');
      await defender.print_and_wait([
        '必要な空気を得るため、肉棒を含んだ ',
        defender.get_colored_name(),
        ' が大きく飲み込み、肉棒の匂いが混じった……いや、酸素が混じった肉棒臭と言った方が正確だろう。',
      ]);
      await defender.print_and_wait([
        '先走りと、小さな口を塞がれた ',
        defender.get_colored_name(),
        ' が抑えきれず溢す涎は、口穴への抽送のたび、長い糸を引きやすい粘る透明へと搗き混ぜられていく……',
      ]);
      await defender.say_and_wait('ん……んんんん……');
      await defender.print_and_wait(
        'まあ、何度こうしても、最後に口の開け方まで忘れることはないだろう。',
      );
    }
  },

  // [번역 대상] ask_foot_job
  async ask_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('……やっぱり？');
      await attacker.print_and_wait([
        '度を越した下品なお願いを聞いたはずなのに、目の前の ',
        a_call_d,
        ' は、予想していたかのような余裕の顔を見せる。',
      ]);
      await attacker.print_and_wait('こんなに……露骨だったのか……');
      await attacker.print_and_wait('笑みを浮かべるだろう。');
      await attacker.print_and_wait([
        '',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? 'あの、レースで疾走する両足で' : '',
        '目の前の肉棒に足を乗せ、その悪いものが興奮して逆に足裏を持ち上げたとき、きっと笑みを浮かべるだろう。',
      ]);
      await attacker.print_and_wait(
        '下品なものを見たときの嫌悪と軽蔑の笑み……性癖の変わった恋人への、興味と包容の笑み……無邪気に面白いと笑うだけの笑み……',
      );
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' はどれだろう…とにかく、肉棒がさらに昂ぶる種類だろう。',
      ]);
    } else {
      await attacker.print_and_wait('察したのだろう。');
      await attacker.print_and_wait(
        '自分の足裏を侵しているこの肉棒は、脆いものではない。',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' が肉棒を踏む動きは、ずいぶん自然になった。',
      ]);
      await attacker.print_and_wait([
        'まるで ',
        attacker.get_colored_name(),
        ' の肉棒を足裏に乗せるのが、生まれつきの才能であるかのように。',
      ]);
      await attacker.print_and_wait('すぅ……');
      await attacker.print_and_wait([
        'ただ想像しただけで、',
        attacker.get_colored_name(),
        ' はまた下腹が熱くなる。',
      ]);
    }
  },

  // [번역 대상] ask_fuck
  async ask_fuck(attacker, defender, is_vagina = true) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await attacker.print_and_wait('みっともない……');
    await attacker.print_and_wait('快感を乞うために、こんなことまで……');
    await attacker.say_and_wait('はぁ……❤️');
    await attacker.print_and_wait([
      '降伏するように',
      (motion ^ towards) > 0 ? '両脚を開く' : '尻を高く上げる',
      '。震える指で縮んだ',
      is_vagina ? '陰唇' : '尻穴',
      'を外へ開き、内側の桃色の肉を見せる。',
    ]);
    await attacker.say_and_wait('お願い、入れて……');
    await attacker.say_and_wait('肉棒を……入れて——');
  },

  // [번역 대상] ask_hair_fuck
  async ask_hair_fuck(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([d_call_a, '……？']);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' は期待と羞じらいの混じった顔でわずかに顔を上げる。頭頂に熱く、見た目より重い（気のせいだろうか？）感触。近さと濃いフェロモンが、情報を処理する頭をかき乱す。',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' はしゃがみ込み、 ',
            attacker.get_colored_name(),
            ' の股下で、顔が勝手に下品になっていく……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は思わず微笑む。両手を伸ばし、そっと',
            defender.sex,
            'の両耳の脇に置き、優しく頭を支える……それから腰を動かし始める。',
          ]);
          await attacker.print_and_wait([
            '股間が髪の間を往き来し、整えられた短髪を乱し、自分のための道を作る。毛と肌の摩擦で先が濡れ、動きが滑らかになる。液が頂から流れ、もう意識の薄い、喘ぐ',
            defender.phy_sex_title,
            'の睫毛を伝い、さらに下へ滴る……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' はその光景を見て、さらに硬くなる。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('そんなこと……したいの？！');
          await attacker.print_and_wait([
            '',
            attacker.get_colored_name(),
            ' の目の前の ',
            a_call_d,
            ' は「変態だ」と「仕方ないな」が混じった声で言い終え、溜息をつき、軽く頭を振る。滑らかな髪がいい匂いを乗せて ',
            attacker.get_colored_name(),
            ' の、すでに外へ起立した肉根に触れ、そこで止まる。',
          ]);
          await attacker.print_and_wait('自分の番だ。');
          await attacker.print_and_wait([
            '腰を一突きし、自分のそれを斜めに滑らせて首筋へ。細かな髪と滑らかな肌の二重の刺激に ',
            attacker.get_colored_name(),
            ' は思わず溜息をつく。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            'は ',
            attacker.get_colored_name(),
            ' のその顔に眉を上げ、わずかに首を傾け、片手を軽く ',
            attacker.get_colored_name(),
            ' のそれに軽く押し、三重の力で挟み、いくつもの感触が同時に襲い、',
            attacker.get_colored_name(),
            ' は満足げに息を吐く。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('ふふ……');
          await attacker.print_and_wait([
            a_call_d,
            ' は、笑っているとも言えない目で ',
            attacker.get_colored_name(),
            '、',
            attacker.get_colored_name(),
            ' は少し後ろめたいが、それでも体で',
            defender.sex,
            'に、そうしてほしいと頼む。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            'はわざと ',
            attacker.get_colored_name(),
            ' を数秒焦らし、両手を後ろへ回して長い髪をすくい、一気に振り上げる——',
          ]);
          await attacker.print_and_wait([
            '幾筋もの髪が ',
            attacker.get_colored_name(),
            ' の敏感な場所へ落ち、冷たく、くすぐったく、',
            attacker.get_colored_name(),
            ' が、すう、と息を吸う。いや、まだ終わらない——',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '髪を掬った手が続き、十指が髪ごと筒を作り、',
            attacker.get_colored_name(),
            ' の股間を完全に、隙間なく包み、それから扱き始める——',
          ]);
          await attacker.print_and_wait([
            '今度の刺激は、',
            attacker.get_colored_name(),
            ' には、たぶん多すぎた。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            '耳先を撫でるのは、産毛の感触を楽しむためではない。わずかに曲げ、自分の大切なものに擦りつけるためだ。',
          );
          await attacker.print_and_wait([
            '滑らせる。普段は味わえない体毛の刺激に ',
            attacker.get_colored_name(),
            ' は異常なほど昂ぶる。',
          ]);
          await attacker.print_and_wait([
            '下の',
            defender.phy_sex_title,
            'がかすかな喘ぎを漏らし、さらに ',
            attacker.get_colored_name(),
            ' の欲を煽る。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            '三つの部位……三重の感触……眼前の',
            defender.phy_sex_title,
            '自ら ',
            attacker.get_colored_name(),
            ' が、こんな奉仕をしてくれる……',
          ]);
          await attacker.print_and_wait('これ以上気持ちのいいことはない。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は思わず口角を上げ、目を閉じて味わう。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait(
            '細く落ちる水幕のように、柔らかく巻く薄絹のように。',
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' のそれは、奇妙な穴へ入った。',
          ]);
          await attacker.print_and_wait([
            '繰り返し擦り、',
            attacker.get_colored_name(),
            ' は思わず両脚を縮め、無色の液が肉根の先から溢れる……',
          ]);
      }
    }
  },

  // [번역 대상] ask_hand_and_blow_job
  async ask_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('含んで……ほしい……？');
      await defender.print_and_wait('そう……なの');
      era.println();
      await defender.print_and_wait('なんだか');
      await defender.print_and_wait('意外なほど自然な動きだ……');
      await defender.print_and_wait(
        '両手で肉棒を起こしたあと、頭が知らず寄っていく。',
      );
      await defender.print_and_wait('指の体温で温め、擦り開き、それから……');
      await defender.say_and_wait('ちゅ～');
      await defender.print_and_wait('超浓厚……');
    } else {
      await defender.print_and_wait(
        '肉棒を脇へずらし、首を傾けて上から下まで丁寧に舐める。角が溶けて垂れたアイスのように。',
      );
      await defender.say_and_wait('ちゅるちゅる——');
      await defender.print_and_wait([
        d_call_a,
        ' の亀頭がきらきらしている。光る濡れ跡は、どちらが悪いのだろう……',
      ]);
      await defender.print_and_wait('もう完全に……分からなくなってきた……❤️');
    }
  },

  // [번역 대상] ask_hand_job
  async ask_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('助けて……お願い……', true);
      await defender.print_and_wait([
        d_call_a,
        ' は何も言わなかった。だが ',
        defender.get_colored_name(),
        ' は目の前の赤く脹れた充血の肉棒を見て、温め始めた十指が、自分がすべきことをもう完全に理解している。',
      ]);
      await defender.say_and_wait('ん——');
      await defender.print_and_wait([
        'その熱さに驚いたように、',
        defender.get_colored_name(),
        ' が肉棒に添えた手が、本能で後ろへ引く。それから冬に足を布団へ入れるように、少しずつ再び近づく。',
      ]);
      await defender.print_and_wait(
        'かなり凶悪だ……女の子の下腹を跳ねさせる形なのに……',
      );
      await defender.print_and_wait(
        'なのに……指で輪に握って軽く扱けば、先走りが指の間で踊る様子が……少し可愛い。',
      );
      await defender.say_and_wait('はぁ……はぁ……ん——');
      await defender.print_and_wait('聞き分けられるようになった……');
    } else {
      await defender.print_and_wait('本当に、これだけでいいのだろうか……');
      await defender.print_and_wait([
        defender.child_sex_title,
        'の手に肉棒を包まれて扱かれるだけで満足できる……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('本当に……他にしたいことはないのか……');
    }
  },

  // [번역 대상] ask_non_penetrative
  async ask_non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ['自分が何を言っているか分かっているのか……', d_call_a, '……'],
        true,
      );
      if (!attacker.id && defender.race > 0) {
        await defender.say_and_wait(
          `ああ……ああ……そう見ていたのか、自分の担当の両脚を。`,
          true,
        );
      }
      await attacker.print_and_wait('本当に挿し入れた。');
      await attacker.print_and_wait([
        '肉棒を……',
        a_call_d,
        ' の閉じた太股の間へ挿し入れる。',
      ]);
      await attacker.print_and_wait(
        '柔らかい。温かい。すごい、すごい、すごい……',
      );
      await attacker.print_and_wait(
        'わずかに交差した両脚は、羞じているのだろう……',
      );
      await attacker.print_and_wait(
        '柔らかいだけではない。日頃の成果として、肉棒はしっかりと支えられている。',
      );
      await attacker.print_and_wait([
        '発情した猿のように、',
        attacker.get_colored_name(),
        ' の肉棒が熱に狂って ',
        a_call_d,
        ' の股間を前後に擦る。',
      ]);
    } else {
      await attacker.print_and_wait('ぬるぬるして、きらきらしてきた。');
      await attacker.print_and_wait('少し上手くなってきた。');
      await attacker.print_and_wait('もう素直に耐えられない。');
      await attacker.print_and_wait('少し……寂しくなってきたのだろうか……');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait('目まで……濡れている……');
      await attacker.print_and_wait('両脚をこう使われれば、こうなるものだ。');
    }
  },

  // [번역 대상] ask_stimulate_glans_by_hole
  async ask_stimulate_glans_by_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('あぁ……疲れた……');
    await defender.print_and_wait([
      'ちゅくちゅくと ',
      defender.get_colored_name(),
      ' の大切な',
      is_vagina ? '秘部' : '尻穴',
      'を乱れて濡れるまで搗いていた肉棒が、突然止まる。',
    ]);
    await defender.print_and_wait(
      '口では疲れたと言うのに、股間の肉棒は正直に硬い。',
    );
    await attacker.say_and_wait('あとは頼む。');
    await defender.print_and_wait(
      '意地を張って、悪い肉棒を抜いてやれと思う瞬間もある。だが、ちゅる、と秘部から一寸離れただけで……体がたまらなく寂しい……',
    );
    await defender.print_and_wait([
      'だから、',
      defender.get_colored_name(),
      ' は腰を捻る。',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait(
        '白い尻が、濡れた馬の尻尾の伴奏で舞い踊る。',
      );
    }
  },

  // [번역 대상] ask_stimulate_hole
  async ask_stimulate_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('お願い……');
    await attacker.say_and_wait('お願い……');
    if (attacker.race > 0 && attacker.id) {
      await attacker.print_and_wait([
        'この',
        attacker.uma_sex_title,
        'として、これはあまりにみっともない……',
      ]);
    } else {
      await attacker.print_and_wait(
        '大人として、トレーナーとして、これはあまりにみっともない……',
      );
    }
    await attacker.print_and_wait('でも、まったく耐えられない——');
    await attacker.print_and_wait('欲しいんだから——');
    await attacker.print_and_wait(
      '子宮の奥を、すごい肉棒に、すごく、乱暴に、強く……',
    );
    await attacker.print_and_wait('「ちゅ——と、いちばん奥まで届いて❤️');
    await attacker.print_and_wait('体を「しゅっ」と丸めて——');
    await attacker.print_and_wait([
      '世界でいちばん気持ちいい',
      is_vagina ? '秘部' : '秘部と尻穴',
      '——',
    ]);
    await attacker.print_and_wait(
      'だからお願い……そのあと、どうされてもいいから❤️',
    );
  },

  // [번역 대상] ask_tail_job
  async ask_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('はぁ……');
      await attacker.print_and_wait(['目の前の ', a_call_d, ' の長い溜息。']);
      await attacker.print_and_wait('少しやりすぎだろうか……');
      await attacker.print_and_wait([
        '抑えきれない自分を反省しているようだが、今の ',
        attacker.get_colored_name(),
        ' は、それでもじっと目の前の ',
        a_call_d,
        '。',
      ]);
      await attacker.print_and_wait('器用だ……');
      await attacker.print_and_wait([
        'お願いした ',
        attacker.get_colored_name(),
        ' すら意外に思うほど器用に、曲がる毛の馬の尻尾が肉棒に巻きつく。',
      ]);
      await attacker.print_and_wait('この角度から見る尻も、また格別だ。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          'ほのかに嗅げる、長い馬の尻尾にどうしても染みる女の子の匂いが、',
          attacker.get_colored_name(),
          ' の肉棒を、かつてないほど昂ぶらせる。',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……その膨れ上がる熱を感じたのだろう。背を向けた ',
        a_call_d,
        ' は、赤らんだ耳の動きまで可愛くなった。',
      ]);
    } else {
      await attacker.print_and_wait(
        '動きが乱暴になってきた……あるいは、上手くなった。',
      );
      await attacker.print_and_wait(
        '淫らな汁でべたべたにされた尻尾は、毛を光らせるその手入れから、何かを悟るものだ。',
      );
      await attacker.print_and_wait('たとえば、この肉棒が好む巻き方の強さ。');
      await attacker.print_and_wait('たとえば、ここを掻かれると震える場所。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'たとえば、尻尾の下の秘部も、もっと……激しく……',
        );
      }
    }
  },

  // [번역 대상] ask_tit_and_blow_job
  async ask_tit_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        d_call_a,
        ' の、乳肉から覗く亀頭が少し元気なさそうだ。',
      ]);
      await defender.print_and_wait(
        '本人も分かりやすく、掌を合わせてお願いしている。',
      );
      await defender.print_and_wait('もう……そんなに胸が好きなの……');
      await defender.print_and_wait(
        'スイーツのクリームみたいだ。どこに絞っても美味しそう……',
      );
      await defender.say_and_wait('じゅるじゅるじゅる……');
      await defender.print_and_wait([
        '乳肉は肉棒の竿に垂れた先走りでぬめぬめと光っている。苦労する胸より、いちばん熱く膨らんだ亀頭は ',
        defender.get_colored_name(),
        ' が両手で口へ迎え入れた。',
      ]);
      await defender.say_and_wait('ん……');
      await defender.print_and_wait(
        '舌がもう言うことを聞かない。口の上の亀頭が少し寂しそうなだけで、乳首を寄せて肉棒に媚びる動きが止まらなくなる……',
      );
    } else {
      await defender.say_and_wait('じゅるじゅる……');
      await defender.print_and_wait(
        '何度味わっても、美味しいとは言いがたい……塩辛く下品な味が、まっすぐ頭へ走る……',
      );
      await defender.print_and_wait('でも……');
      await defender.print_and_wait('でも…………');
      await defender.print_and_wait('でも………………');
      await defender.say_and_wait(
        ['どうして動きが止まらないのだろう……私も ', d_call_a, '……'],
        true,
      );
    }
  },

  // [번역 대상] ask_tit_job
  async ask_tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        '熱い視線で目の前の ',
        a_call_d,
        ' の乳首が熱く立つほど、お願いするようにじっと見つめる。',
      ]);
      await attacker.print_and_wait([
        '向かいの ',
        a_call_d,
        ' はやはり抗いきれず、負けてくれた。やった。',
      ]);
      await defender.say_and_wait('……');
      era.println();
      await attacker.print_and_wait('すごくないか。');
      await attacker.print_and_wait([
        'この ',
        a_call_d,
        ' が自分の下に屈み、少女だけの柔らかさで熱い肉棒を包む姿……',
      ]);
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        'ちゃんと伝わっているみたいだ。肉棒の亀頭から立ち上る、愛欲を満載した熱い白い息。',
      );
      await attacker.print_and_wait([
        '手を添えて、下の ',
        a_call_d,
        ' の顔を上げる。',
      ]);
      await attacker.print_and_wait(
        'うん、もう十分に燻された、美味しそうな顔だ。',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        '分かる。',
        d_call_a,
        ' の腰が後ろへ反る。',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          '敏感な馬耳が、上から吐かれる乱れた熱い息にふぅふぅと撫でられている。',
        );
      }
      await defender.print_and_wait(
        '柔らかさに包まれた肉棒も、秘部を簡単に震わせそうな形まで起立している。',
      );
      await defender.print_and_wait(
        '何を思ったのか、胸がどきどきしている。だが、これもいわゆる「群盲象を撫でる」ようなものだろう……',
      );
      await defender.print_and_wait([
        'だから ',
        defender.get_colored_name(),
        ' は顔を上げる。',
      ]);
      await defender.print_and_wait('やっぱり、獣のような顔だ……');
    }
  },

  // [번역 대상] continue_fucking
  async continue_fucking(attacker, defender, d_call_a) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('おおおおおお————❤️');
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' の体が破廉恥に ',
        d_call_a,
        ' の前で痙攣するように激しく捻れ、濡れた体の温かい雫を周囲へ飛ばす。',
      ]);
      await defender.print_and_wait(
        '当の本人に、そんな体裁を気にする余裕はない。粘る髪が額に寄り、下腹でどきどきが暴れている。中に肉棒も指も意地悪な舌がなくても、開閉する秘部は蓮根のように長い銀糸を引き、熱い蒸気を吐く。',
      );
      await defender.say_and_wait('イく……もう……イく……', true);
      await defender.say_and_wait('早く……早く……イかせて❤️', true);
      await defender.print_and_wait([
        '一度力を失い、それから嫌々また張りつめる。自分でも、なぜこの体がそう動くのか分からない。',
        d_call_a,
        ' にそこまで弄ばれた体は、もう野性に従っているだけなのだろう。',
      ]);
      await defender.print_and_wait('どうイくのか、いつイかされるのか');
      await defender.print_and_wait(
        '真っ白になった頭は、止まって再起動したあと、そんなことしか考えられない廃脳になる。',
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait('……来……来るの❤️', true);
    } else {
      await defender.say_and_wait('はぁ……');
      await defender.print_and_wait(
        'ただの呼吸のつもりが、喉から自分でも驚くほど淫らな声が絞り出た……❤️',
      );
      await defender.print_and_wait('ちゃんと悦んでいる……体が……');
      await defender.print_and_wait('羞じらい……？抵抗……？');
      await defender.print_and_wait(
        'いつからだろう、そんな感情は漏れた喘ぎと一緒に消えていた。今の……正直な自分は、もっと欲しい……もっともっと❤️',
      );
      await defender.print_and_wait([
        'もっと密着したい。',
        d_call_a,
        ' の体に密着してその熱を感じたい。もっと、',
        d_call_a,
        ' にもっと下品なことを教えてほしい。この濡れて熱い体を、人前に出せないほど恥ずかしい姿に弄んでほしい……',
      ]);
      await defender.say_and_wait(
        '……はぁ……このあとの自分を説得できる保証がないから……',
        true,
      );
      await defender.say_and_wait('……だから、しっかり……今のうちに❤️', true);
    }
  },

  // [번역 대상] cowgirl
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('はぁ……');
    await attacker.print_and_wait([
      'こんなに近くで見る……下の ',
      a_call_d,
      ' の顔を見る……自分がどれほど最低か、思い知らされるだけだ❤️',
    ]);
    await attacker.print_and_wait([
      '自暴自棄に体を揺らし、背徳に屈した ',
      attacker.get_colored_name(),
      ' の体は淡い桃色を帯び、',
      is_vagina ? '秘部' : '尻穴',
      'に含んだ肉棒へ必死に仕えている。',
    ]);
  },

  // [번역 대상] deep_blow_job
  async deep_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('こうすれば……');
      await attacker.say_and_wait('ん……');
      await attacker.print_and_wait('やっぱり少し難しい……でも……');
      await attacker.print_and_wait('もっと深く含んだ……');
      await attacker.say_and_wait(
        ['気持ちいいでしょう……わたしの……', a_call_d, '❤️'],
        true,
      );
      await attacker.say_and_wait('ちゅるちゅる……');
      await attacker.print_and_wait(
        'この場のふたりのうち、少なくとも一人の名もなき下品な誰かが先走って、この淫らな体勢からちゅうちゅうと、眉をほどく禁忌の快感を搾り出している。',
      );
      await attacker.print_and_wait([
        '……こうして、',
        attacker.get_colored_name(),
        ' のこの小さな口は、今この瞬間から、養分を取る以外の意味を与えられ、ねちねちとした音を立てて肉棒に絡みつく下品な性器へと堕ちた。もう取り返しはつかない❤️',
      ]);
      await attacker.print_and_wait(
        '喉の柔らかさで亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さないほどきつい吸いで柱を支える……',
      );
      await attacker.print_and_wait([
        '何を学び、何を覚え、どんな姿になっていくのだろう……今、',
        a_call_d,
        ' の下に屈む ',
        attacker.get_colored_name(),
        '。',
      ]);
    } else {
      if (defender.race > 0) {
        await attacker.print_and_wait([
          '喉でごくごくと肉棒に仕えながら尻尾を揺らせる余裕まで出てきた。',
          attacker.get_colored_name(),
          ' はこの点で、',
          a_call_d,
          ' の予想通り、才能がある。',
        ]);
        await attacker.print_and_wait([
          'ちらりと ',
          a_call_d,
          ` が息を吸って顔を上げる姿をちらりと見ながら、鼻歌の暇もない `,
          attacker.get_colored_name(),
          ' は分かりやすく耳を震わせる。',
        ]);
      }
      await attacker.say_and_wait('はぁ……はぁ……❤️');
      await attacker.print_and_wait('飲み込む……');
      await attacker.print_and_wait([
        '必要な空気を得るため、肉棒を含んだ ',
        attacker.get_colored_name(),
        ' が大きく飲み込み、肉棒の匂いが混じった……いや、酸素が混じった肉棒臭と言った方が正確だろう。',
      ]);
      await attacker.print_and_wait([
        '先走りと、小さな口を塞がれた ',
        attacker.get_colored_name(),
        ' が抑えきれず溢す涎は、口穴への抽送のたび、長い糸を引きやすい粘る透明へと搗き混ぜられていく……',
      ]);
      await attacker.say_and_wait('ん……んんんん……');
      await attacker.print_and_wait(
        'まあ、何度こうしても、最後に口の開け方まで忘れることはないだろう。',
      );
    }
  },

  // [번역 대상] force_armpit_intercourse
  async force_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '腕を引き上げられた ',
        a_call_d,
        'は、今何を思っているのだろう…',
      ]);
      await attacker.print_and_wait('きっとろくな言葉ではあるまい……');
      await attacker.print_and_wait('最低だ。');
      await attacker.print_and_wait([
        '目の前で腕を高く上げた ',
        a_call_d,
        ' の、恥ずかしそうに揺れる尻から、そんな不満が読める。',
      ]);
      await attacker.print_and_wait('こればかりは仕方ない。');
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait([
        a_call_d,
        ' の腋が、肉棒の大きな亀頭に洗われている。',
      ]);
      await attacker.print_and_wait(
        '湯気立つ腋肉が抽送に合わせて薄く赤らみ、本当に性の器官へ変わっていくみたいだ……',
      );
      await attacker.print_and_wait([
        'これを当然だと思いきれず、',
        attacker.get_colored_name(),
        ' の動きには、まだ迷いがある……',
      ]);
      await attacker.print_and_wait([
        '……迷いながら肉棒で擦り、背を向けた ',
        a_call_d,
        ' の腋の穴を……',
      ]);
    } else {
      await defender.print_and_wait('なんだか……おかしくなってきた……');
      await defender.print_and_wait('腋は、こんなことに使う器官だったのか……');
      await defender.print_and_wait('それに、こんな感触があったなんて……');
      await defender.print_and_wait([
        '肉棒に染まって何かが変わっていくらしい。顔を真っ赤にした ',
        defender.get_colored_name(),
        ' は不安げに、もうちゅるちゅると手慣れた肉棒殿に仕えている。',
      ]);
    }
  },

  // [번역 대상] force_deep_blow_job
  async force_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('顔を上げて。');
      await defender.print_and_wait('もっと深く含んだ……');
      await defender.print_and_wait(
        '相変わらず、温情など聞き取れない短い命令だ。',
      );
      await defender.print_and_wait([
        'だが ',
        defender.get_colored_name(),
        ' の体は抗いがたく、それに支配されている。',
      ]);
      await defender.say_and_wait('ちゅるちゅる……');
      await defender.print_and_wait(
        'この場のふたりのうち、少なくとも一人の名もなき下品な誰かが先走って、この淫らな体勢からちゅうちゅうと、眉をほどく禁忌の快感を搾り出している。',
      );
      await defender.print_and_wait([
        '……こうして、',
        defender.get_colored_name(),
        ' のこの小さな口は、今この瞬間から、養分を取る以外の意味を与えられ、ねちねちとした音を立てて肉棒に絡みつく下品な性器へと堕ちた。もう取り返しはつかない❤️',
      ]);
      await defender.print_and_wait(
        '喉の柔らかさで亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さないほどきつい吸いで柱を支える……',
      );
      await defender.print_and_wait([
        '何を学び、何を覚え、どんな姿になっていくのだろう……今、',
        d_call_a,
        ' の下に屈む ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        '無言で急かし、',
        attacker.phy_sex_title,
        '再び強引に手で、目の前の',
        defender.teen_sex_title,
        'を自分の股間に固定する。満足するまで。',
      ]);
      await defender.say_and_wait('はぁ……はぁ……❤️');
      await defender.print_and_wait('飲み込む……');
      await defender.print_and_wait([
        '必要な空気を得るため、肉棒を含んだ ',
        defender.get_colored_name(),
        ' が大きく飲み込み、肉棒の匂いが混じった……いや、酸素が混じった肉棒臭と言った方が正確だろう。',
      ]);
      await defender.print_and_wait([
        '先走りと、小さな口を塞がれた ',
        defender.get_colored_name(),
        ' が抑えきれず溢す涎は、口穴への抽送のたび、長い糸を引きやすい粘る透明へと搗き混ぜられていく……',
      ]);
      await defender.say_and_wait('ん……んんんん……');
      await defender.print_and_wait(
        'まあ、何度こうしても、最後に口の開け方まで忘れることはないだろう。',
      );
    }
  },

  // [번역 대상] force_foot_job
  async force_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'こんな要求に不満で、顔を背けるのも当然だろう。',
      );
      await attacker.print_and_wait(
        'ただこちらの業界では、踏むときに顔を逸らすのはご褒美なのだ。',
      );
      await attacker.print_and_wait('ああ……こちらを見た……');
      await attacker.print_and_wait('笑みを浮かべるだろう。');
      await attacker.print_and_wait([
        '',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? 'あの、レースで疾走する両足で' : '',
        '目の前の肉棒に足を乗せ、その悪いものが興奮して逆に足裏を持ち上げたとき、きっと笑みを浮かべるだろう。',
      ]);
      await attacker.print_and_wait(
        '下品なものを見たときの嫌悪と軽蔑の笑み……性癖の変わった恋人への、興味と包容の笑み……無邪気に面白いと笑うだけの笑み……',
      );
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' はどれだろう…とにかく、肉棒がさらに昂ぶる種類だろう。',
      ]);
    } else {
      await attacker.print_and_wait('察したのだろう。');
      await attacker.print_and_wait(
        '自分の足裏を侵しているこの肉棒は、脆いものではない。',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' が肉棒を踏む動きは、ずいぶん自然になった。',
      ]);
      await attacker.print_and_wait([
        'まるで ',
        attacker.get_colored_name(),
        ' の肉棒を足裏に乗せるのが、生まれつきの才能であるかのように。',
      ]);
      await attacker.print_and_wait('すぅ……');
      await attacker.print_and_wait([
        'ただ想像しただけで、',
        attacker.get_colored_name(),
        ' はまた下腹が熱くなる。',
      ]);
    }
  },

  // [번역 대상] force_hair_fuck
  async force_hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('えっ……ん！');
          await attacker.print_and_wait([
            '突然、',
            attacker.get_colored_name(),
            ' が目の前のこの',
            defender.phy_sex_title,
            'の顔を掴み、熱く充血したそれを',
            defender.sex,
            'の耳と髪の隙間へ置き、',
            defender.sex,
            'の頭を揺らしながら腰の抽送を速める。肌と毛の間で擦られる肉根はすぐ興奮し、膨らみ始める。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            'は何が起きたかも分からないまま思考を諦める。外界を受け取る部位が、もう ',
            attacker.get_colored_name(),
            ' の股間の馳せ場になっている。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('はぁ、待っ、待って！');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' の目を見て、',
            defender.sex,
            'は次に何が起きるか察したように、片手で後頭部を守り、片手を慌てて振る。だが、',
            attacker.get_colored_name(),
            ' は構わない。',
          ]);
          await attacker.print_and_wait([
            '大股で寄り、',
            defender.sex,
            'の肩を押さえ、腰を入れて、それを',
            defender.phy_sex_title,
            'にとって秘めやかな後頸で、滑らかな髪と白い肌の間を、快楽に滑らせる。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('いいわ……どうしてもというなら', true);
          await attacker.print_and_wait([
            '見つめ合った末、目の前の',
            defender.phy_sex_title,
            'は後ずさりし、',
            attacker.get_colored_name(),
            ' は勝者の顔で、戦利品に手をつける。',
          ]);
          await attacker.print_and_wait([
            '利き手を伸ばし、',
            attacker.get_colored_name(),
            ' は',
            defender.sex,
            'の麗しく淡い香りの長い髪を弄び、意地悪く笑い、一握りすくって乱暴に',
            defender.phy_sex_title,
            'が普段丁寧に整えたそれを自分のモノに巻き、軽く引っ張り、いつもと違う扱きの快感を得る。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            '股下の ',
            a_call_d,
            ' の秘めやかな場所を縦横に、',
            attacker.get_colored_name(),
            ' の肉根はさらに興奮している。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' に下から押さえられた ',
            a_call_d,
            ' の表情はもう判別しにくい……赤らんだ顔と耳根だけが、',
            defender.sex,
            'の今を覗かせる。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は口角を舐め、さらに熱心に擦りつける。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は滑る肌の上を繰り返し擦る……分身を撫でる細い髪先を抜け、肉体の心地よさと、精神の征服を味わう。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            '普段は整って滑らかな髪が、',
            attacker.get_colored_name(),
            ' にめちゃくちゃにされる。',
          ]);
          await attacker.print_and_wait([
            '陰毛と数本の髪が絡み、',
            attacker.get_colored_name(),
            ' の雄の気配を',
            defender.sex,
            'の匂いの上に被せる。',
          ]);
          await attacker.print_and_wait([
            '野蛮に動き、野蛮に印す……',
            attacker.get_colored_name(),
            ' は野蛮に',
            defender.sex,
            'の大切なもので欲を晴らす。',
          ]);
      }
    }
  },

  // [번역 대상] force_hand_and_blow_job
  async force_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('いつの間にか、蹲る姿勢になっていた。');
      await defender.print_and_wait(
        '不思議だ……はっきりした要求は聞いていないのに、体は次にすべきことを完全に分かっている。',
      );
      era.println();
      await defender.print_and_wait('なんだか');
      await defender.print_and_wait('意外なほど自然な動きだ……');
      await defender.print_and_wait(
        '両手で肉棒を起こしたあと、頭が知らず寄っていく。',
      );
      await defender.print_and_wait('指の体温で温め、擦り開き、それから……');
      await defender.say_and_wait('ちゅ～');
      await defender.print_and_wait('超浓厚……');
    } else {
      await defender.print_and_wait(
        '肉棒を脇へずらし、首を傾けて上から下まで丁寧に舐める。角が溶けて垂れたアイスのように。',
      );
      await defender.say_and_wait('ちゅるちゅる——');
      await defender.print_and_wait([
        d_call_a,
        ' の亀頭がきらきらしている。光る濡れ跡は、どちらが悪いのだろう……',
      ]);
      await defender.print_and_wait('もう完全に……分からなくなってきた……❤️');
    }
  },

  // [번역 대상] force_hand_job
  async force_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('手でして。いいだろう。');
      await defender.print_and_wait([
        `拒む余地は与えられない。`,
        d_call_a,
        ` の言葉とともに、すでに `,
        defender.get_colored_name(),
        ' の前で素直に両手を出して仕えるか、先走りを垂らす肉棒に好奇の隅々まで擦られるか。',
        defender.get_colored_name(),
        ' に残された選択肢は、その二つだけだ。',
      ]);
      await defender.say_and_wait('ん——');
      await defender.print_and_wait([
        'その熱さに驚いたように、',
        defender.get_colored_name(),
        ' が肉棒に添えた手が、本能で後ろへ引く。それから冬に足を布団へ入れるように、少しずつ再び近づく。',
      ]);
      await defender.print_and_wait(
        'かなり凶悪だ……女の子の下腹を跳ねさせる形なのに……',
      );
      await defender.print_and_wait(
        'なのに……指で輪に握って軽く扱けば、先走りが指の間で踊る様子が……少し可愛い。',
      );
      await defender.say_and_wait('はぁ……はぁ……ん——');
      await defender.print_and_wait('聞き分けられるようになった……');
    } else {
      await defender.print_and_wait('本当に、これだけでいいのだろうか……');
      await defender.print_and_wait([
        defender.child_sex_title,
        'の手に肉棒を包まれて扱かれるだけで満足できる……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('本当に……他にしたいことはないのか……');
    }
  },

  // [번역 대상] force_tail_job
  async force_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('意外な沈黙？');
      await attacker.print_and_wait([
        'おそらく ',
        attacker.get_colored_name(),
        ' の下品な性癖には、もう少し覚悟ができていたらしく、',
        a_call_d,
        ' は、今回は意外なほど従順だ。',
      ]);
      await attacker.print_and_wait('器用だ……');
      await attacker.print_and_wait([
        'お願いした ',
        attacker.get_colored_name(),
        ' すら意外に思うほど器用に、曲がる毛の馬の尻尾が肉棒に巻きつく。',
      ]);
      await attacker.print_and_wait('この角度から見る尻も、また格別だ。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          'ほのかに嗅げる、長い馬の尻尾にどうしても染みる女の子の匂いが、',
          attacker.get_colored_name(),
          ' の肉棒を、かつてないほど昂ぶらせる。',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……その膨れ上がる熱を感じたのだろう。背を向けた ',
        a_call_d,
        ' は、赤らんだ耳の動きまで可愛くなった。',
      ]);
    } else {
      await attacker.print_and_wait(
        '動きが乱暴になってきた……あるいは、上手くなった。',
      );
      await attacker.print_and_wait(
        '淫らな汁でべたべたにされた尻尾は、毛を光らせるその手入れから、何かを悟るものだ。',
      );
      await attacker.print_and_wait('たとえば、この肉棒が好む巻き方の強さ。');
      await attacker.print_and_wait('たとえば、ここを掻かれると震える場所。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'たとえば、尻尾の下の秘部も、もっと……激しく……',
        );
      }
    }
  },

  // [번역 대상] fuck_tit
  async fuck_tit(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        '待ちきれずに腰を揺らす。冷たい空気より、目の前の ',
        a_call_d,
        ' の体には、肉棒がいるべき場所が、もっとある。',
      ]);
      await attacker.print_and_wait('分かっているだろう。');
      await attacker.print_and_wait(
        '無駄な会話はいらない。揺るがない命令を、視線だけで伝える。',
      );
      era.println();
      await attacker.print_and_wait('すごくないか。');
      await attacker.print_and_wait([
        'この ',
        a_call_d,
        ' が自分の下に屈み、少女だけの柔らかさで熱い肉棒を包む姿……',
      ]);
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        'ちゃんと伝わっているみたいだ。肉棒の亀頭から立ち上る、愛欲を満載した熱い白い息。',
      );
      await attacker.print_and_wait([
        '手を添えて、下の ',
        a_call_d,
        ' の顔を上げる。',
      ]);
      await attacker.print_and_wait(
        'うん、もう十分に燻された、美味しそうな顔だ。',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        '分かる。',
        d_call_a,
        ' の腰が後ろへ反る。',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          '敏感な馬耳が、上から吐かれる乱れた熱い息にふぅふぅと撫でられている。',
        );
      }
      await defender.print_and_wait(
        '柔らかさに包まれた肉棒も、秘部を簡単に震わせそうな形まで起立している。',
      );
      await defender.print_and_wait(
        '何を思ったのか、胸がどきどきしている。だが、これもいわゆる「群盲象を撫でる」ようなものだろう……',
      );
      await defender.print_and_wait([
        'だから ',
        defender.get_colored_name(),
        ' は顔を上げる。',
      ]);
      await defender.print_and_wait('やっぱり、獣のような顔だ……');
    }
  },

  // [번역 대상] fuck_tit_and_mouth
  async fuck_tit_and_mouth(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('なに……！？');
      await defender.print_and_wait(
        'こちらの意向を聞く気などなく、ただ乱暴に自分のしたいことを通す。',
      );
      await defender.print_and_wait('もう……そんなに胸が好きなの……');
      await defender.print_and_wait(
        'スイーツのクリームみたいだ。どこに絞っても美味しそう……',
      );
      await defender.say_and_wait('じゅるじゅるじゅる……');
      await defender.print_and_wait([
        '乳肉は肉棒の竿に垂れた先走りでぬめぬめと光っている。苦労する胸より、いちばん熱く膨らんだ亀頭は ',
        defender.get_colored_name(),
        ' が両手で口へ迎え入れた。',
      ]);
      await defender.say_and_wait('ん……');
      await defender.print_and_wait(
        '舌がもう言うことを聞かない。口の上の亀頭が少し寂しそうなだけで、乳首を寄せて肉棒に媚びる動きが止まらなくなる……',
      );
    } else {
      await defender.say_and_wait('じゅるじゅる……');
      await defender.print_and_wait(
        '何度味わっても、美味しいとは言いがたい……塩辛く下品な味が、まっすぐ頭へ走る……',
      );
      await defender.print_and_wait('でも……');
      await defender.print_and_wait('でも…………');
      await defender.print_and_wait('でも………………');
      await defender.say_and_wait(
        ['どうして動きが止まらないのだろう……私も ', d_call_a, '……'],
        true,
      );
    }
  },

  // [번역 대상] hair_fuck
  async hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('うっ——');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は中腰になり、目の前の見慣れた影を見ながら、わずかな恐れを覚える。',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' は含み笑いを浮かべ、腰を突き出し、 ',
        attacker.get_colored_name(),
        ' へ迫る。',
      ]);
      await attacker.print_and_wait([
        '熱い棒状のものが、抗えない意思を乗せて額へ突き出し、',
        attacker.get_colored_name(),
        ' は唾を飲み、自ら顔を上げて迎え、指で髪をすくい、突いてくる長槍に巻きつけて作業を始める。',
      ]);
    } else {
      await attacker.print_and_wait('さらさら……');
      await attacker.print_and_wait('掌と髪が、それを繰り返し揉み擦る。');
      await attacker.print_and_wait('この感触……あれが……まだ膨らんでいる……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は髪先がくすぐったく、息も荒くなる。',
      ]);
    }
  },

  // [번역 대상] hand_and_blow_job
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('なんだか');
      await attacker.print_and_wait('意外なほど自然な動きだ……');
      await attacker.print_and_wait(
        '両手で肉棒を起こしたあと、頭が知らず寄っていく。',
      );
      await attacker.print_and_wait('指の体温で温め、擦り開き、それから……');
      await attacker.say_and_wait('ちゅ～');
      await attacker.print_and_wait('超浓厚……');
    } else {
      await attacker.print_and_wait(
        '肉棒を脇へずらし、首を傾けて上から下まで丁寧に舐める。角が溶けて垂れたアイスのように。',
      );
      await attacker.say_and_wait('ちゅるちゅる——');
      await attacker.print_and_wait([
        a_call_d,
        ` の亀頭がきらきらしている。光る濡れ跡は、どちらが悪いのだろう……`,
      ]);
      await attacker.print_and_wait('もう完全に……分からなくなってきた……❤️');
    }
  },

  // [번역 대상] milk_and_hand_job
  async milk_and_hand_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('分かりやすいだろう');
      await defender.print_and_wait(
        '膝枕で乳を含まされたあと、高く起立した股間。',
      );
      await defender.print_and_wait('分かりやすいだろう……');
      await defender.print_and_wait([
        '目の前がすべて ',
        d_call_a,
        ' の白い肌と乳肉ばかりで、今の美味しいはずの顔が見えないのが惜しい。',
      ]);
      await defender.print_and_wait([
        '舌先でくすぐられ踊る乳首まで、一瞬そっけなく感じる。だが ',
        defender.get_colored_name(),
        ' はすぐ、新しい注意の向け先を見つける。',
      ]);
      await defender.print_and_wait('では、今はどんな顔をしているのだろう。');
      await defender.print_and_wait([
        '吸われる',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? '母乳' : '乳首',
        'の快感に、下品の彼方へ引きずられる失神と抗いの顔……掌で跳ねる熱い肉棒に戸惑う羞じらいの顔……あるいは、もう完全に浸かった下品な享受の顔だろうか……',
      ]);
      await attacker.say_and_wait('えっ！？');
      await defender.print_and_wait([
        '答えのない問いだと分かっている。それでも ',
        defender.get_colored_name(),
        ' を',
        d_call_a,
        ' の指にかろうじて包まれた肉棒が、突然いつもより高く立ち上がる。',
      ]);
    } else {
      await attacker.print_and_wait('こんな自分を喜んでいいのか分からない……');
      await attacker.print_and_wait([
        '銜えられた',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '乳の溢れる' : '',
        '乳首の横、舌の動きからおぼろに見える ',
        a_call_d,
        ' の表情。',
      ]);
      await attacker.print_and_wait(
        '掌の肉棒の熱さと膨らんだ筋から、今の形をおぼろに描ける。',
      );
      await attacker.print_and_wait('はぁ……責任、取ってよ……');
    }
  },

  // [번역 대상] pet_leg
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          'トレーナーとして、目の前の担当の両脚を、性の意味で眺め、撫でる……',
        );
        await attacker.print_and_wait(
          '今していることを、抑えた言葉で言い表すだけで、体が冷える背徳が寒気となって全身を走る。',
        );
        await attacker.print_and_wait(
          '調教後に状態を確かめるため、たまに手で撫でる親しみはあったはずなのに……',
        );
        await attacker.print_and_wait(
          '不思議なことに、今の頭は、この両脚を「レース」と結びつけることができない',
        );
      }
      await attacker.print_and_wait('今の自分の頭にあるのは……');
      await attacker.print_and_wait(
        'この脚に交差して腰を絡まれたら、きっとたまらない、という想像だけだ。',
      );
    } else {
      await attacker.print_and_wait('柔らかく、弾力がある。');
      await attacker.print_and_wait('曲線は優雅で、長い。');
      await attacker.print_and_wait('指の愛撫で震える、見事な敏感さがある。');
      if (defender.race > 0) {
        await attacker.print_and_wait('惜しいな……');
        await attacker.print_and_wait(
          'こんな脚が、レースのためだけにあるなんて……',
        );
      }
    }
  },

  // [번역 대상] pet_nipple
  async pet_nipple(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait('熱い……');
      await attacker.print_and_wait(
        '白い乳肉に埋まった小さな肉粒なのに、とんでもない熱を放っている',
      );
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        '指で乳輪を円に撫で、桃色の点を指腹で押さえ、少しずつ腫れ、少しずつ立ち、指に抗う硬さになっていくのを見る……',
      );
      await attacker.print_and_wait('……それから力を足して、潰すように揉む。');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait(
        defender.race > 0 ? 'ああ、尻尾でお仕置きされた。' : 'ああ、叩かれた。',
      );
    } else {
      await attacker.print_and_wait('このまま搾れば、乳が出るかもしれない……');
      await attacker.print_and_wait(
        '連なる愛撫で硬くなった、下品な乳首を見ていると、ついそう思ってしまう……',
      );
      await defender.say_and_wait('やぁ——');
      await attacker.print_and_wait([
        a_call_d,
        ' が俯いて息を乱している隙に、指で乳首を上へ引き上げてみる……',
      ]);
      await attacker.print_and_wait('慌てた顔が、とても美味しい。');
    }
  },

  // [번역 대상] prepare_virgin_uma
  async prepare_virgin_uma(attacker, defender) {
    await attacker.print_and_wait([
      '慎重に二本の指を入れ、自分の前に開かれた、',
      defender.teen_sex_title,
      'の細い一本の縫い目のような狭い秘部を、裏返すように開く。',
    ]);
    await attacker.print_and_wait('きれいだ……');
    await defender.say_and_wait('そんなにじっと見ないで……');
    await attacker.print_and_wait(
      '狂ったように揺れる尻尾がそう呟いた。けれど……',
    );
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait(
      'ふぅ。指で秘部を押し広げるほど、指の間に、蠕動するなかから押し出される熱い息が吹き、くすぐったいほどに誘ってくる。',
    );
    await attacker.print_and_wait('もう一本足しても、いいだろう。');
  },

  // [번역 대상] pull_tail
  async pull_tail(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('おぉ～');
      await attacker.print_and_wait([
        '下の ',
        a_call_d,
        ' の口から漏れる、蕩けた喘ぎは毒だ。',
      ]);
      await attacker.print_and_wait(
        `尻尾を引けば目の前の${defender.uma_sex_title}が素直に従うと知ったあと、下腹から突き上げる熱は、さらに止めにくくなった。`,
      );
    } else {
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait(
        '少し力を足せば尻が上がり、そこで手を緩めれば、腰まで落ちる……',
      );
      await attacker.print_and_wait([
        'おいおい……自分が今、',
        attacker.phy_sex_title,
        'の前でどんな動きをしているか、分かっているのか、可哀想な ',
        a_call_d,
        '？',
      ]);
    }
  },

  // [번역 대상] resist
  async resist(attacker, defender, is_first, success, a_call_d) {
    if (era.get('flag:惩戒力度') === 3) {
      // @author 幽白書
      if (attacker.id === 0) {
        // 孕袋が主人に抵抗
        if (success) {
          // 抵抗成功、孕袋の主視点
          await attacker.print_and_wait('孕袋のくせに、主導を奪おうとする');
          await attacker.print_and_wait('この大逆も、主人は黙って許してくれた');
          await attacker.print_and_wait('淫らな母畜への恩寵だろうか？');
          await attacker.print_and_wait(
            'それとも……自ら欲に沈む姿を、もう少し見物したいだけか？',
          );
        } else {
          // 抵抗失敗、孕袋の主視点
          await attacker.print_and_wait(
            '孕袋である以上、服従と従順は精神の底に焼き付いた刻印のはずなのに',
          );
          await attacker.print_and_wait('どうして、それでも抗おうとしたのか？');
          await attacker.print_and_wait(
            'まだ堕ちたくないという、細い糸が残っていたのか？',
          );
          await attacker.print_and_wait(
            'それとも……無理やり従わされる快感を、もっと深く味わいたかっただけか？',
          );
        }
        // 主人が孕袋に抵抗
      } else if (success) {
        // 抵抗成功、孕袋の主視点
        await defender.print_and_wait(
          'どれだけ抗っても、心の底の服従には勝てない',
        );
        await defender.print_and_wait(
          '主人のひと動作で、抵抗などきれいさっぱり手放してしまう',
        );
        await defender.print_and_wait(
          '主導を許されたのも、孕袋である自分が服従の性を思い知るためだろう……',
        );
      } else {
        // 抵抗失敗、主人の主視点
        await attacker.print_and_wait([
          a_call_d,
          ' が体を揺らし、欲と肉体に溺れている様',
        ]);
        await attacker.print_and_wait(
          'かつてのトレーナーとしての矜持など、もはや見当たらない',
        );
        await attacker.print_and_wait('もう少し見ていよう、ほんの少しだけ');
        await attacker.print_and_wait([
          '指導者であるはずの ',
          a_call_d,
          ' が、どこまで堕ちられるかを',
        ]);
      }
    } else {
      // @author O口口口口口
      if (is_first) {
        await defender.say_and_wait('動かない方がいいよ。');
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          ' に跨った ',
          a_call_d,
          ' が、唇を舐めて、どこか見知らぬ表情を浮かべている。',
        ]);
        await attacker.print_and_wait(
          '一方的に下に押さえられるなんて……簡単に慣れてたまるか！',
        );
        await attacker.print_and_wait('……');
      }
      if (success) {
        await attacker.say_and_wait('動かない方がいいよ。');
        await attacker.print_and_wait([
          'さっきの言葉を、目の前の ',
          a_call_d,
          ' にそっくり返す。戸惑う顔を見て、今の ',
          attacker.get_colored_name(),
          ' の顔は、得意げな笑いでいっぱいだ。',
        ]);
      } else {
        const a_race = era.get(`cflag:${attacker.id}:种族`);
        const d_race = era.get(`cflag:${defender.id}:种族`);
        if (a_race === 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['やっぱり、人間は', defender.uma_sex_title, 'には敵わない……'],
            true,
          );
        } else {
          await attacker.say_and_wait(
            ['やっぱり、自分は ', a_call_d, ' には敵わない……'],
            true,
          );
        }
        await attacker.print_and_wait([
          'あっさりと再び下に押し戻され、',
          attacker.get_colored_name(),
          ' の頭に、そんな一文が閃いた。',
        ]);
        if (a_race === 0 && d_race === 0) {
          await attacker.say_and_wait(
            [
              'おかしいだろ、そっちだって',
              defender.uma_sex_title,
              'じゃない！',
            ],
            true,
          );
        } else if (a_race > 0 && d_race === 0) {
          await attacker.say_and_wait(
            ['おかしいだろ、こちらこそが', attacker.uma_sex_title, 'なのに！'],
            true,
          );
        } else if (a_race > 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['おかしいだろ、こっちだって', attacker.uma_sex_title, 'なのに！'],
            true,
          );
        }
        await attacker.say_and_wait('ぐっ……', true);
      }
    }
  },

  // [번역 대상] sixty_nine
  async sixty_nine(attacker, defender, is_first) {
    if (is_first) {
      await era.printAndWait('ぬるぬると重なった体。');
      await era.printAndWait('唇が穴に当たり、唇が肉棒にも当たる。');
      await era.printAndWait('塩辛い汁がふたりの体を巡る……獣のように');
      await era.printAndWait(
        'どちらが先かは分からない。わざとちゅるちゅると淫らな音を立て、もう一方も見よう見まねで続く。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'ちゅるちゅる' },
        { color: defender.color, content: 'んんんちゅる……' },
        '……」',
      ]);
      await era.printAndWait('寄り添う体が、熱を帯びていく。');
      await era.printAndWait('熱くて、頭が蕩ける……');
    } else {
      await era.printAndWait(
        'もともと清楚な一本の縫い目だった弁が、舐められて開き、緩んでいる。',
      );
      await era.printAndWait(
        'もともとは獰猛な充血の肉棒が、跳ねる小さな舌のせいで、可愛い光を纏っている。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'はぁ……' },
        { color: defender.color, content: 'はぁ……' },
        '……」',
      ]);
      await era.printAndWait(
        '汗ばむ二つの体が擦り合い、めったにない休戦を貪っている……',
      );
    }
  },

  // [번역 대상] stimulate_glans_by_hole
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait('正直……今のこれだけで昇天しそうだ……');
    await attacker.print_and_wait([
      'めちゃくちゃだ……犯されている',
      is_vagina ? '秘部' : '尻穴',
      'の今の有様も、蕩けきった体も……',
    ]);
    await attacker.print_and_wait([
      'さらに滅茶苦茶なのは……まだ何かできそうな ',
      attacker.get_colored_name(),
      ' 自身……',
    ]);
    await attacker.print_and_wait(
      'はぁ……ただおかしいと叫ぶだけでなく、深く息を吸えば……',
    );
    await attacker.print_and_wait([
      '「ちゅ」と縮まった。一秒も持たず体は痙攣して崩れる。だがその一瞬、',
      attacker.get_colored_name(),
      ' の',
      is_vagina ? '秘部' : '尻穴',
      'が、深く口づけするように ',
      a_call_d,
      ' の亀頭。',
    ]);
    await attacker.print_and_wait(
      'はぁ……亀頭が跳ねている。喜んでいるのだろう……',
    );
  },

  // [번역 대상] stimulate_womb
  async stimulate_womb(attacker, defender, d_call_a) {
    await defender.print_and_wait('肉棒なしで秘部を気持ちよくする魔法。');
    await defender.print_and_wait([
      d_call_a,
      ' は自信げに笑い、五指を開いて大きな掌を下腹に重ねる。',
    ]);
    await defender.print_and_wait('確かに温かい。でも……');
    await defender.say_and_wait('んほっんん——');
    await defender.print_and_wait('みっともない声が、突然漏れた——');
    await defender.print_and_wait(['沈み込みそうだ……', d_call_a, ' の掌……']);
    await defender.print_and_wait('対比のように、子宮だけがどきどきと昂ぶる……');
    await defender.print_and_wait([
      'まるで ',
      d_call_a,
      ' の手品の手に掴まれたみたい……❤️',
    ]);
    await defender.print_and_wait('……嘘でしょう❤️');
  },
};
