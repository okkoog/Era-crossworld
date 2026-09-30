/**
 * @file 조교 지문 - 수면간 애무계
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common/interface/ero-making-outs');
const {
  hand_and_blow_job,
  pet_leg,
  pet_tail,
} = require('#/event/ero/common/snippets');

class EroSleepMakingOuts extends EroMakingOuts {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_ear(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('정말 좋네……');
      await attacker.print_and_wait('부드럽고, 따뜻하고, 게다가…… 지금은 도망치지 않아.');
      await defender.say_and_wait('으음……');
      await attacker.print_and_wait(
        '괴로운 듯 살짝 벌어진 입술 사이로 새어 나오는 숨결이, 이 귀가 두 손에 어떻게 다뤄지길 원하는지 충분히 깨닫게 해준다.',
      );
    } else {
      await defender.say_and_wait('하아……❤️');
      await attacker.print_and_wait(
        '처음에는…… 그저 이 따뜻한 귀가 손에 착 감기는 느낌이 좋아서 놓지 못했을 뿐인데.',
      );
      await attacker.print_and_wait([
        '점점, 깊이 잠든 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 이(가) 무의식중에 흘리는 귀여운 표정과 목소리를 전부 수집하고 싶어졌다.',
      ]);
      await attacker.print_and_wait('괜찮아…… 시간은 아주 많으니까.');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async pull_ear(attacker, defender, hook) {
    const is_trainer =
      attacker.id === 0 &&
      !era.get(`cflag:${attacker.id}:종족`) &&
      era.get(`cflag:${defender.id}:종족`);
    await attacker.print_and_wait('이러면 안 되는데……');
    await attacker.print_and_wait(
      `……이건 연인${is_trainer ? '이나 트레이너' : ''}로서 해서는 안 될 짓이야……`,
    );
    await attacker.print_and_wait('……그래도');
    await attacker.print_and_wait([
      '눈앞에서 무방비하게 괴로운 표정을 짓고 있는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ` 의 자는 얼굴을 보니, 이런 ${
        is_trainer ? '트레이너 실격인 ' : ''
      }장난을 도저히 멈출 수가 없어.`,
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_breast(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        '조심스러워할 필요는 없어. 호흡에 맞춰 얕게 오르내리는 이 가슴은 이 손아귀에서 도망칠 수 없으니까.',
      );
      await attacker.print_and_wait(
        '그러니 마음껏 손가락을 펼쳐, 손가락 사이로 빠져나갈 듯한 부드러움과 온기를 느껴보자.',
      );
      await attacker.print_and_wait(
        '심지어 코와 입을 바짝 대고, 평소라면 절대로 허락되지 않았을 살결 사이의 짙은 살냄새를 들이마시는 것조차 거절당하지 않는다.',
      );
    } else {
      await attacker.print_and_wait([
        '한심하기도 하지. 잠든 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 을(를) 몸 아래 깔고, 두 손을 저 부드러운 살덩어리 속에 깊이 파묻은 채 헤어나오지 못하는 나 자신.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 얼굴에 점차 잡히는 미간의 주름을 못 본 척하고, 아래에서 점점 달아오르는 부드러운 몸을 방치한 채……',
      ]);
      await attacker.print_and_wait(
        '심지어 이런 행위에 대해 어떤 허락도, 수줍은 묵인조차 받지 않았는데……',
      );
      await attacker.print_and_wait('……위험해, 갑자기 더 흥분되기 시작했어.');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_nipple(attacker, defender, hook) {
    if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait('음…… 기분 탓인가……');
      await attacker.print_and_wait(
        '유두가 딱딱해지는 속도가 깨어있을 때보다 좀 더 느린 것 같네.',
      );
      await attacker.print_and_wait(
        '불평을 듣거나 본능적인 저항에 부딪힐 걱정이 없으니, 분홍빛 돌기를 따라 위로 잡아당기는 두 손가락의 움직임이 우아하고 능숙해진다.',
      );
      await attacker.print_and_wait('에…… 그렇다는 건……');
      await attacker.print_and_wait([
        '내 손에 유두가 만져질 때 밑에 깔린 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 이(가) 대체 어떤 애틋한 생각을 하고 있을지 곱씹으며, ',
        ...(!era.get(`cflag:${attacker.id}:종족`) &&
        era.get(`cflag:${defender.id}:종족`)
          ? ['실격인 하급 트레이너']
          : [attacker.get_colored_name(), ' ']),
        '은(는) 눈을 가늘게 뜨고 웃었다.',
      ]);
    } else {
      if (defender.sex_code === 1) {
        await attacker.print_and_wait(
          '눈앞의 음란한 유두가 끊임없는 애무에 딱딱하게 굳어버렸다.',
        );
        await attacker.print_and_wait('이렇게나 빳빳하게 긴장한 몸은, 마치……');
      } else {
        await attacker.print_and_wait('이대로 모유라도 짤 수 있을 것 같아……');
        await attacker.print_and_wait(
          '연속된 애무로 딱딱해진 눈앞의 음란한 유두를 보고 있으면 그런 생각이 절로 든다……',
        );
        await attacker.print_and_wait(
          '게다가 이렇게나 빳빳하게 긴장한 몸은, 마치……',
        );
      }
      await defender.used_to_say_and_wait('여기는 건드리면 안 되는 민감한 약점이라니까!');
      await attacker.print_and_wait('정말 귀여워 죽겠네ㅋㅋ');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_clitoris(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        '기억하지 못할 테니까, 지금이라도 그만둘 기회는 있어……',
      );
      await attacker.print_and_wait([
        '눈앞의 요염한 풍경을 몰래 눈에 담고, 서둘러 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 옷을 다시 입혀주는 것도 방법이지.',
      ]);
      await attacker.print_and_wait(
        '손가락으로 저 분홍색 작은 살덩이를 덮은 가죽을 밀어내고, 공기 중에 노출되어 귀여운 분홍색에서 점차 요염한 핏빛으로 충혈되는 음핵을 지켜본다.',
      );
      await attacker.print_and_wait([
        '배덕감에 몸을 가늘게 떨면서도 ',
        attacker.get_colored_name(),
        ' 은(는), 역시 계속하기를 선택했다.',
      ]);
    } else {
      await defender.say_and_wait('으음……');
      await attacker.print_and_wait(
        '아아, 어느새 이렇게 빨갛게 부어오른 가련한 모습이 되어버렸네.',
      );
      await attacker.print_and_wait([
        '그저 가벼운 손길과 약간의 인내심만으로도, 이 작은 민감한 돌기는 혼수상태인 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 순결한 몸을 더욱 방탕하게 움직이게 만든다……',
      ]);
      await attacker.print_and_wait('부스럭부스럭……');
      await attacker.print_and_wait(
        '의식 없이 오로지 쾌락에 이끌린 몸이 시트와의 마찰을 통해 이 답답함을 해소하고 싶어 한다.',
      );
      await attacker.say_and_wait('정말 미안해……', true);
      await attacker.say_and_wait('하지만 한 번만 더 보여줘, 마지막으로.', true);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async finger_fuck(attacker, defender, hook) {
    await attacker.print_and_wait('원래…… 이런 느낌이었나……');
    await attacker.print_and_wait(
      '예상했던 것과 달리, 젖고 조여진 살벽이 손가락 끝을 밀어내려는 저항감이 전혀 느껴지지 않아.',
    );
    await attacker.print_and_wait(
      '오히려 이성의 제약이 사라져 솔직해진 비소는 살며시 파고든 손가락에 간절하게 입을 맞추고 있다.',
    );
    await attacker.print_and_wait(
      '위로 긁어 올리고, 아래로 문지르고, 꿈틀거리는 결을 따라 양옆으로……',
    );
    await attacker.print_and_wait('하아…… 다리를 이렇게 꽉 조이면, 더 계속할 수 없잖아.');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prepare_virgin(attacker, defender, hook) {
    await attacker.print_and_wait([
      '숨기거나 부끄러워하며 얼굴을 붉힐 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 눈치를 볼 필요는 없다.',
    ]);
    await attacker.print_and_wait('지금 이 순간, 내 처분만을 기다리는 무방비한 몸을 마주하며.');
    await attacker.print_and_wait(
      `해야 할 일은 그저, 호흡에 따라 얕게 일렁이는 좁은 틈새의 비소를 충분히 감상한 뒤, 손가락 끝에 힘을 주어 ${defender.sex}을(를) 더욱 요염하고 축축한 모양으로 피어나게 만드는 것뿐이다.`,
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        `${defender.sex}을(를) 더 기분 좋게 해주고 싶어, ${defender.sex}의 비소를 더 부드럽게 만들고 싶어, 이 아름다운 몸이 내 손길에 더 정신없이 뒤틀리는 걸 보고 싶어……`,
      );
      await attacker.say_and_wait('하아…… 하아……');
      await attacker.print_and_wait(
        '그저 손가락을 움직일 뿐인데, 뇌내에서 폭주하는 욕망 때문에 숨이 가빠온다.',
      );
      await attacker.print_and_wait('어디일까…… 이제 곧 닿을 텐데……');
      await defender.say_and_wait('………');
      await defender.say_and_wait('──❤️');
      await attacker.print_and_wait([
        '주변 살결보다 살짝 도드라진 돌기감이 손가락을 자석처럼 끌어당기고, 곧이어 그곳 특유의 뜨거운 온도와 끈적한 촉감이 전해진다…… 그리고 정답을 알려주듯, 솔직해진 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 아랫배가 갑자기 활처럼 휘어올랐다.',
      ]);
      await attacker.print_and_wait('……찾았다.');
    } else {
      await attacker.print_and_wait('짓누르고.');
      await attacker.print_and_wait('문지르고.');
      await attacker.print_and_wait('쑤시고.');
      await attacker.print_and_wait('뭉툭한 손톱으로 자극한다.');
      await attacker.print_and_wait(
        '의식이 없기에 언제 어디를 건드려도, 땀에 젖어 부드러워진 눈앞의 몸은 손가락에 가장 솔직하고 격렬한 피드백을 돌려준다.',
      );
      await attacker.print_and_wait('만족할 때까지 계속하다 멈추면 그만……');
      await attacker.print_and_wait('하지만 정말로 멈추고 싶어지는 순간이 올까……');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_anal(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        '아아, 역시 잘 때조차 이곳은 유독 예민하게 신경 쓰고 있네……',
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 의 손가락이 애매하게 다가와, 몸이 딱 경계할 정도의 거친 감촉으로 좁은 입구 주변을 빙글빙글 맴돌자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 한가로웠던 두 다리가 당황한 듯 침대 위에서 꼿꼿하게 펴졌다.',
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('드디어……라고 해야 할까?');
      await attacker.print_and_wait([
        '더는 긴장을 유지하지 못한 채, ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 그 미묘한 애무에 녹아버린 항문은 어느새 슬며시 이완되어, 본인은 기억도 못 하는 사이에 무엇을 삼켜도 이상하지 않을 섹스용 구멍으로 변해버렸다.',
      ]);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prepare_anal(attacker, defender, hook) {
    await attacker.print_and_wait([
      '눈앞에서 오물거리는 구멍이 내뿜는 아찔한 열기를 손바닥으로 느끼며, ',
      attacker.get_colored_name(),
      ' 의 네 손가락이 말뚝처럼 부끄러운 구멍을 억지로 벌리고, ',
      attacker.get_colored_name(),
      ' 의 시선을 피하려는 엉덩이살을 고정했다.',
    ]);
    await attacker.print_and_wait(
      '오직 유독 굵고 긴 중지만이 다른 할 일이 있다는 듯, 전갈의 꼬리처럼 미세하게 굽힌 채 후장으로 조금씩 다가가더니, 이내 느릿하고 단호하게 삽입되었다.',
    );
    await attacker.print_and_wait('저항감이 강하다.');
    await attacker.print_and_wait([
      '자발적으로 꿈틀거리는 장벽이 마치 살아있는 생명체처럼 숨을 몰아쉬며 ',
      attacker.get_colored_name(),
      ' 의 손가락을 밀어낸다. 분명 옆의 비소처럼 섹스를 위해 존재하는 음란한 살점이 아닐 텐데도, 지금 ',
      attacker.get_colored_name(),
      ' 의 손가락을 맞이하는 모습은 놀라울 정도로 적극적이다.',
    ]);
    await attacker.print_and_wait('두려워하고 있는 건가…… 아니면 기뻐하고 있는 건가……?');
    await attacker.print_and_wait('안타깝게도 지금 당장 여주인공의 입을 통해 답을 들을 수는 없네……');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await pet_leg(attacker, defender, hook);
    if (hook.arg) {
      await attacker.print_and_wait('하아…… 다행히 지금은 잠들어 있네.');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async pet_tail(attacker, defender, hook) {
    await attacker.print_and_wait('정말…… 위험하네……');
    await attacker.print_and_wait([
      '단순히 눈앞의 촉감 좋은, ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 체취가 가득 밴 꼬리털만을 말하는 게 아니야.',
    ]);
    await attacker.print_and_wait([
      '잠든 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 을(를) 침대 위에서 뒤집어 놓은 채, 엉덩이를 치켜세우고 옷까지 벗겨서, ',
      defender.get_teen_sex_title(),
      '의 은밀한 곳을 이런 난폭한 방식으로 마음껏 감상하고 있는 나 자신을 말하는 거지……',
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async pull_tail(attacker, defender, hook) {
    await pet_tail(attacker, defender);
    await attacker.print_and_wait('하지만 동시에 미묘한 허탈감도 느껴져.');
    await attacker.print_and_wait('왜냐하면……');
    await attacker.say_and_wait(
      [
        sys_get_colored_callname(attacker.id, defender.id),
        ' 은(는) 나의 이런 거친 장난에 훨씬 더 많은 반응을 보여줘야 마땅하니까……',
      ],
      true,
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cunnilingus(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '이성의 지배가 없기에, 뜨거운 숨을 내뿜는 입술이 다가와도 아무것도 모르는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 의 비소는 그저 아랫배의 움직임에 맞춰 얕게 숨을 들이켜고 내쉴 뿐이다.',
      ]);
      await attacker.print_and_wait(
        '심장 박동을 빠르게 만드는 체취…… 혀끝에서 온몸으로 녹아드는 새콤달콤하고 비릿한 맛……',
      );
      await attacker.print_and_wait(
        '휘파람을 불듯 오므린 입술 모양으로 구도 안에 억지로 말려 들어가 천천히 나아가는 혀와, 그 뜨거운 자극에 서툴게 꿈틀거리며 저항하는 비소……',
      );
      await attacker.print_and_wait([
        '두 사람분의 숨소리 속에서, 오직 한 사람만이 볼 수 있는 이 음란한 풍경을 독점한 ',
        attacker.get_colored_name(),
        '의 혀끝이 조금씩 조금씩 앞으로 나아간다.',
      ]);
    } else {
      await attacker.print_and_wait(
        '처음에 어떻게 좁은 틈새처럼 청순한 모양으로 닫혀 있었는지 기억조차 나지 않을 정도로, 끊임없이 몰아치는 혀에 핥아져 안팎이 축축해진 구멍은 이제 겉으로 뒤집힌 채 미세하게 떨리고 있다……',
      );
      await attacker.print_and_wait(
        '침대 위에 편안하게 벌려져 있던 그 두 다리는, 가랑이 사이의 젖어 드는 쾌감에 어떻게 반응해야 할지 전혀 모르는 채, 그저 떨며 나쁜 아이의 어깨를 꽉 감싸 안았다.',
      );
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('눈앞의 모습을 보고 있으니, 정말 죄책감이 치밀어 오르네……');
      await attacker.say_and_wait([
        '하아…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 이(가) 잠든 사이에 이런 짓을 하는 나는…… 정말……',
      ]);
      if (era.get(`cflag:${defender.id}:종족`) && attacker.sex_code !== 1) {
        await attacker.print_and_wait([
          '우마무스메와 육봉, 거의 접점이 없던 이 두 단어가 지금 ',
          attacker.get_colored_name(),
          ' 의 입술을 통해 끈적하게 이어졌다……',
        ]);
      }
      await attacker.print_and_wait([
        '혼수상태 중에도 봉사를 받으면 허리를 꼿꼿이 세울 정도의 본능이 남아 있는지, ',
        attacker.get_colored_name(),
        ' 의 입술은 스스로 움직이는 육봉에 의해 강제로 벌려졌고, 원래 영양분을 섭취해야 할 곳은 그 딱딱하게 발기한 위험한 녀석에게 점령당해 몸을 이상하게 만드는 하류한 냄새를 제멋대로 풍기고 있다.',
      ]);
      await attacker.print_and_wait(
        '눈앞의 자는 얼굴 때문에 수치심이 더 느껴지냐고……? 당연하지.',
      );
      await attacker.print_and_wait('하지만 어떤 욕망은 바로 그 때문에 조절이 안 되는 법이야……');
    } else {
      await attacker.say_and_wait('할짝할짝~');
      await attacker.print_and_wait('어느새 좀 더 능숙해진 것 같아……');
      await attacker.print_and_wait(
        '고개를 좀 더 들면, 눈앞의 육봉을 더 많이 머금을 수 있어……',
      );
      await attacker.print_and_wait(
        '눌린 혀로 옆면을 살살 핥으면, 기분 좋은 듯 파르르 떨려와.',
      );
      await attacker.print_and_wait('입술을 잘 활용하면…… 흡……');
      await attacker.print_and_wait(
        '콜록…… 입안으로 밀려 들어오는 진하고 부끄러운 맛 때문에 머리가 어질어질해져……',
      );
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async deep_blow_job(attacker, defender, hook) {
    await attacker.say_and_wait('더, 깊은 곳까지 원해……');
    await attacker.print_and_wait([
      '탐욕스럽게 잠꼬대를 하며, 쾌락을 갈구하는 본능에 지배당한 ',
      attacker.get_colored_name(),
      ' 이(가) 고개를 숙였다.',
    ]);
    await attacker.say_and_wait('할짝할짝……');
    await attacker.print_and_wait([
      '……그리하여, ',
      attacker.get_colored_name(),
      ' 의 이 작은 입은 이 순간부터 영양 섭취 외의 또 다른 의미를 부여받아, 끈적한 소리를 내며 꿈틀거리고 육봉을 휘감는 하류한 성기관으로 전락했다는 사실은 이제 돌이킬 수 없는 현실이 되었다❤️',
    ]);
    await attacker.print_and_wait(
      '목구멍의 연한 살로 귀두를 맞이하고, 영리한 혀끝으로 육봉 위의 충혈된 핏줄을 부드럽게 어루만지며, 공기 한 점 허락하지 않는 꽉 조인 흡입으로 기둥을 받쳐 올린다……',
    );
    await attacker.print_and_wait([
      '무엇을 배우고, 무엇을 기억하며, 어떤 모습으로 변해가고 있는 걸까…… 지금 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 곁에 웅크리고 앉은 ',
      attacker.get_colored_name(),
      ' 은(는)……',
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async force_deep_blow_job(attacker, defender, hook) {
    await attacker.print_and_wait('눈앞의 모습을 보고 있으니, 정말 죄책감이 치밀어 오르네……');
    if (defender.sex_code === 0 && era.get(`cflag:${defender.id}:종족`)) {
      await attacker.print_and_wait(
        '우마무스메와 육봉, 거의 접점이 없던 이 두 단어가 지금 끈적하게 이어져 버렸어……',
      );
    }
    await attacker.print_and_wait([
      defender.get_teen_sex_title(),
      '의 입술은 육봉에 의해 강제로 벌려졌고, 원래 영양분을 섭취해야 할 곳은 그 딱딱하게 발기한 위험한 녀석에게 점령당해 몸을 이상하게 만드는 하류한 냄새를 제멋대로 풍기고 있다.',
    ]);
    await attacker.print_and_wait(
      '눈앞의 자는 얼굴 때문에 추가적인 가책이 느껴지냐고……? 당연하지.',
    );
    await attacker.print_and_wait('하지만 어떤 욕망은 바로 그 때문에 조절이 안 되는 법이야……');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async hand_job(attacker, defender, hook) {
    await attacker.print_and_wait([
      '잠든 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 은(는) 아무 말도 하지 않았지만, ',
      attacker.get_colored_name(),
      ' 은(는) 눈앞의 붉게 달아오른 육봉을 바라보며, 이미 예열을 마친 듯 움직이기 시작한 열 손가락으로 자신이 무엇을 해야 할지 완벽히 이해했다.',
    ]);
    await defender.say_and_wait('으음──');
    await attacker.print_and_wait([
      '그 뜨거운 열기에 놀라, ',
      attacker.get_colored_name(),
      ' 의 육봉을 붙잡으려던 손이 본능적으로 움츠러들었다. 그러고 나서야, 마치 겨울날 두 발을 이불 속으로 들이밀듯 조금씩 다시 다가갔다.',
    ]);
    await attacker.print_and_wait(
      '분명 상당히 흉악하고…… 여자아이의 아랫배를 쿡쿡 찌를 것 같은 모양인데……',
    );
    await attacker.print_and_wait(
      '하지만…… 손가락으로 감싸 쥐고 가볍게 흔들자 손가락 사이에서 쿠퍼액을 흘리며 춤추는 모습은…… 조금 귀엽네.',
    );
    await defender.say_and_wait('하아…… 하아…… 으음──');
    await attacker.print_and_wait('이제 알아들을 수 있게 됐어……');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    await hand_and_blow_job(attacker, defender, hook);
    if (hook.arg) {
      await attacker.print_and_wait('완전히 몰래 훔쳐 먹기나 하는 음란한 녀석이 되어버렸어……');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async fuck_tit(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await attacker.print_and_wait('멋지다고 생각하지 않아?');
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ` 이(가) 내 밑에 깔린 채, 두 손으로 ${defender.get_teen_sex_title()}만의 부드러운 가슴을 모아 뜨거운 육봉을 감싸 쥐고 있는 이 자태……`,
    ]);
    await defender.say_and_wait('으음……');
    await attacker.print_and_wait(
      '육봉의 귀두에서 피어오르는, 애욕이 가득 담긴 뜨거운 하얀 김이 제대로 전달되고 있는 것 같네.',
    );
    await attacker.print_and_wait(
      '숨기기에 급급했던 깨어있을 때와 달리, 완전히 무방비한 자는 얼굴은 흥분될 정도로 솔직해.',
    );
    await attacker.print_and_wait('응, 확실히 아주 맛있게 익은 표정이 되었어.');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async tit_job(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await attacker.print_and_wait(
      '딱히 그런 요구를 들은 것도 아닌데, 제멋대로 상의를 내리고 가슴을 드러내 버렸어……',
    );
    await attacker.say_and_wait('도대체 육봉 앞에 얼마나 굴복해버린 거야, 나란 녀석은……', true);
    await attacker.print_and_wait(
      '그 부드러움에 감싸인 육봉은 비소를 떨게 할 만큼 오만하게 꼿꼿이 서 있다.',
    );
    await attacker.print_and_wait([
      '스스로 두 손으로 가슴을 모아 쥐고 고개를 들지 못하는 ',
      attacker.get_colored_name(),
      ' 은(는), 만약 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 이(가) 지금 깨어있다면 지었을 표정을 상상해 본다.',
    ]);
    await attacker.print_and_wait([
      '어떤 표정을 예견했는지, 고요한 방안에 ',
      attacker.get_colored_name(),
      ' 의 심장 소리가 쿵쿵 울려 퍼진다.',
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await attacker.print_and_wait([
      `가슴 사이에 끼워진 육봉을 기분 좋게 세워주는 것만으로는 부족한 걸까…… 평소에 도대체 어떤 눈으로 자신의 ${
        era.get(`cflag:${defender.id}:종족`) ? '담당' : '파트너'
      }을(를) 보고 있었던 거야……`,
    ]);
    await attacker.say_and_wait('할짝할짝할짝……');
    await attacker.print_and_wait([
      '육봉 줄기에서 흘러나온 쿠퍼액 때문에 가슴이 미끈거리고 번들거리지만, 고생하는 가슴보다 가장 뜨겁고 팽팽한 귀두를 ',
      attacker.get_colored_name(),
      ' 은(는) 두 손으로 정성스레 입안에 모셔 들였다.',
    ]);
    await defender.say_and_wait('으음……');
    await attacker.print_and_wait(
      '혀가 마음대로 움직이지 않기 시작했지만, 입에 물린 귀두가 조금이라도 외로움을 느끼는 것 같으면 유두를 비비며 육봉의 기분을 맞추는 동작을 멈출 수가 없어……',
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async suck_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await attacker.print_and_wait([
      era.get(`talent:${defender.id}:유두타입`) > 0 ? '분홍' : '갈' + '색의 예쁜 유두가 다가오는 ',
      attacker.get_colored_name(),
      ` 를 피하려는 본능은 전혀 보이지 않았고, 얕게 오르내리는 ${defender.get_teen_sex_title()}의 부드러움은 고분고분 나쁜 녀석의 입속으로 빨려 들어갔다.`,
    ]);
    await attacker.say_and_wait('쭈욱──');
    await attacker.print_and_wait([
      '점차 혀끝에서 뜨겁게 달아오르던 붉은 점이 딱딱하게 서 있는 실감이 나자, ',
      attacker.get_colored_name(),
      ' 은(는) 조심스럽게 치아 사이에 그 살점을 물고 슉 하고 빨아당겼다──',
    ]);
    await defender.say_and_wait('으음──');
    await attacker.print_and_wait('하아…… 이제 와서 저항해 봤자 이미 너무 늦었어ㅋㅋ');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await attacker.print_and_wait([
      '치아 사이에 딱딱해진 유두를 물고 입안에 넣는 순간, 눈앞에 똑바로 누워 있던 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 몸이 순식간에 굳어버렸다.',
    ]);
    await attacker.print_and_wait('에…… 그래?……');
    await attacker.print_and_wait(
      `살살 치아를 놀려 민감한 유두 주변에 울긋불긋한 흔적을 남기며…… 품 안의 ${defender.get_teen_sex_title()} 몸이 끊임없이 떨리게 만든다……`,
    );
    await attacker.print_and_wait([
      '아마 이쪽의 다음 목표를 눈치챈 거겠지. 유두가 혀에 꼼꼼히 핥아지며 미끈거리는 순간, ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 두 다리가 ',
      attacker.get_colored_name(),
      ' 의 허리를 감싸 안았다……',
    ]);
    await defender.say_and_wait('으음──');
    await attacker.print_and_wait('정말 귀여워.');
    await attacker.print_and_wait([
      '품 안의 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 뿐만 아니라, 그 붉게 부어오른 흔적들이 가득한 유두까지 말이야.',
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async force_armpit_intercourse(attacker, defender, hook) {
    await attacker.print_and_wait([
      '잠든 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 무방비한 손을, 성욕에 눈이 먼 ',
      attacker.get_colored_name(),
      ' 이(가) 위로 곧게 들어 올렸다.',
    ]);
    await attacker.print_and_wait([
      '곧이어 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 겨드랑이는 육봉의 거대한 귀두에 의해 책임지고 깨끗하게 닦여졌다.',
    ]);
    await attacker.print_and_wait(
      '열기를 띤 겨드랑이 살이 피스톤 운동을 따라 붉게 물드는 것이, 정말로 성과 관련된 음란한 기관으로 변해버린 것만 같아……',
    );
    await attacker.print_and_wait([
      '이것을 완전히 당연한 일로 받아들이지는 못한 듯, ',
      attacker.get_colored_name(),
      ' 의 동작에는 약간의 망설임이 섞여 있다……',
    ]);
    await attacker.print_and_wait([
      '……망설이면서도 자신을 등지고 있는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 겨드랑이 구멍을 육봉으로 비비며 쑤셔대고 있다……',
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async force_foot_job(attacker, defender, hook) {
    await attacker.print_and_wait('후우…… 이건 이제 완전히 이른바 변태라고 부를 만하네.');
    await attacker.print_and_wait([
      '잠든 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 두 발을 손으로 받쳐 들어 자신의 육봉을 봉사하게 하는 것은, 눈앞의 무자각한 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 이(가) 직접적으로 혐오 섞인 시선을 던질 수 없다는 것을 알기에 낼 수 있는 용기일까……',
    ]);
    await attacker.print_and_wait([
      '처음에는 낯선 열감이 닿자 두 발이 겁을 먹고 피하려 했지만, ',
      attacker.get_colored_name(),
      ' 의 두 손에 의해 다시 붙잡혔다.',
    ]);
    await attacker.print_and_wait('그 후에는 아마 눈치챈 거겠지.');
    await attacker.print_and_wait('자신의 발바닥을 침범하고 있는 이 육봉이 연약한 물건이 아니라는 것을.');
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 이(가) 육봉을 짓밟는 움직임이 훨씬 자연스러워졌다.',
    ]);
    await attacker.print_and_wait([
      '마치 ',
      attacker.get_colored_name(),
      ' 의 육봉을 발밑에 두는 것이 타고난 천성이라도 되는 것처럼.',
    ]);
    await attacker.print_and_wait('씁……');
    await attacker.print_and_wait([
      '단순히 그 생각만으로도, ',
      attacker.get_colored_name(),
      ' 은(는) 다시 아랫배가 뜨거워지는 것을 느꼈다.',
    ]);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async foot_job(attacker, defender, hook) {
    await attacker.print_and_wait(
      '침대 위에 일어선 덕분에, 시야 아래에서 작아진 육봉조차 훨씬 귀엽게 느껴져.',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' 은(는) 발을 들어 붉게 부풀어 오른 육봉을 발밑에 깔고 뭉개버렸다.',
    ]);
    await attacker.print_and_wait(
      '에헤…… 이런 대단한 육봉조차 발밑에 짓밟힐 때는 이렇게나 귀엽게 흔들리는구나ㅋㅋ',
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async tail_job(attacker, defender, hook) {
    await attacker.print_and_wait('유연해……');
    await attacker.print_and_wait([
      ' ',
      attacker.get_colored_name(),
      ' 조차 예상하지 못한 영리한 움직임으로, 구부러진 털이 섞인 꼬리가 육봉을 휘감았다.',
    ]);
    await attacker.print_and_wait([
      '육봉의 머리가 어질어질할 정도로 짙은 냄새가 꼬리에 의해 한 겹의 보호색을 띠게 되었지만, 이것은 오히려 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 육봉을 전례 없이 흥분시키고 있다.',
    ]);
    await attacker.print_and_wait(
      `원래…… ${defender.get_uma_sex_title()}들의 꼬리가 정말 이런 일까지 할 수 있었던 거야……?`,
    );
    await attacker.print_and_wait([
      '……폭발적인 열기를 느끼며, 뒤돌아서 엉덩이를 치켜세운 ',
      attacker.get_colored_name(),
      ' 은(는) 붉게 달아오른 귀의 움직임마저 귀여워 보였다.',
    ]);
  }
}

module.exports = EroSleepMakingOuts;