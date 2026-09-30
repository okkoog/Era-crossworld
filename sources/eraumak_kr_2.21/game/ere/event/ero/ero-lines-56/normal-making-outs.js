const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

async function deep_blow_job_kitaru(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '머리 위로 쓰다듬어지는 감각이 전해졌다. ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 커다란 손이 폭신폭신한 오렌지색 머리카락을 부드럽게 누르며, 마치 격려하듯 쓰다듬는다. 자신의 동작에 맞춰 때때로 축 늘어진 두 귀를 툭툭 건드린다.',
    ]);
    await attacker.print_and_wait([
      '마치…… 으으, 아냐…… 이런 자세는, 영락없는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 애완동물이잖아. 꼬마 여우 취급을 당하는 건가?',
    ]);
    await attacker.print_and_wait([
      '이윽고 육봉의 냄새에 길들여진 자신은 주인의 지시 하나하나를 이해하기 시작했다.',
    ]);
    await attacker.print_and_wait([
      '왼쪽 귀를 당길 때는 입술을 굳게 다물어 성기를 압박하고, 젖은 핑크빛 혀로 민감한 귀두를 감싼다.',
    ]);
    await attacker.print_and_wait([
      '오른쪽 귀를 잡아당길 때는 머리를 좌우로 흔들며, 뺨 안쪽의 부드러운 살과 혀로 육봉을 정성껏 모신다.',
    ]);
    await attacker.print_and_wait([
      '그리고 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '이 짧게 머리를 쓰다듬을 때는, 성기 끝부분을 강하게 빨아들여 뺨이 음란하게 움푹 패이게 만들고, 혀끝으로 요도구를 문지른다.',
    ]);
    await attacker.say_and_wait(['우구웃──']);
    await attacker.print_and_wait([
      '다리에 힘이 풀려 떨리기 시작하고, 머리가 멍해진 채 육봉을 삼키고 내뱉는 동작이 빨라졌다.',
    ]);
  } else {
    await attacker.say_and_wait(['우구웃──']);
    await defender.print_and_wait([
      '다리에 힘이 풀려 떨리기 시작한다. 장거리도 거뜬히 달릴 수 있는 몸임에도 지탱하지 못하는 듯 앞으로 쓰러지며, 예쁜 얼굴이 육봉의 뿌리 근처로 점점 더 가까워졌다.',
    ]);
    await defender.print_and_wait([
      '육봉의 냄새에 취해 제대로 뜨지 못하는 별 모양의 눈을 가늘게 뜨고, 호흡할 때마다 입가로 옅은 정액 냄새가 섞인 침이 흘러나온다. 침은 매끄러운 목을 타고 흘러내려 풍만한 가슴 위에 걸렸다.',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '?',
    ]);
    await attacker.say_and_wait(['으으…… 읍, 으으으……']);
    await defender.print_and_wait([
      '조심스레 발치에 있는 상대의 상태를 물었지만, 웅얼거리는 대답만이 돌아올 뿐이었다. 작은 얼굴은 완전히 ',
      defender.get_colored_name(),
      '의 가랑이 사이 음모 숲에 파묻혔다.',
    ]);
    await defender.print_and_wait([
      '뭐, 별일 없는 것 같으니 계속하기로 하자. 담당의 머리를 자신의 가랑이 사이에 단단히 고정하고, 끊임없이 허리를 앞뒤로 흔든다. 마치 정말로 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 입 구멍에 삽입하듯, 육봉으로 담당의 입과 목구멍을 동시에 침범하는 쾌감을 마음껏 즐겼다.',
    ]);
  }
}

module.exports = class extends EroNormalMakingOuts {
  async pet_ear(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.pet_ear(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '평소에는 벌칙 때문에 몇 번이고 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귀를 만진 적이 있었다.',
      ]);
      await attacker.print_and_wait([
        '하지만 지금처럼 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의, ',
        defender.get_uma_sex_title(),
        '중에서도 꽤 긴 편인 귀를 성적인 의미를 담아 제멋대로 주무르고 만지는 것은 처음이었다.',
      ]);
      await defender.say_and_wait(['으으얏❤️……']);
      await attacker.print_and_wait([
        '밤색 꼬리가 단숨에 꼿꼿이 서고, 혀끝까지 삐죽 튀어나와 위아래로 파르르 떨렸다.',
      ]);
      await attacker.print_and_wait(['오른쪽 귀가 훨씬 더 민감한 모양이다.']);
    } else {
      await defender.print_and_wait([
        '먼저 귓바퀴 가장자리를 살짝 만지작거리더니, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 직접 손가락을 안으로 밀어 넣었다.',
      ]);
      await defender.say_and_wait(['이얏❤️!']);
      await defender.print_and_wait([
        '쓰다듬는 손길은 점차 비비는 동작으로 변했고, 손가락은 짓궂게 솜털을 문지른다. 따스한 감각이 귀에서부터 끊임없이 전해졌다.',
      ]);
      await defender.print_and_wait([
        '피하고 싶었지만, 마음과 달리 귀는 솔직하게 쫑긋 펴진 채 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '에게 구석구석 농락당했다.',
      ]);
      await defender.print_and_wait(['너무 자극적이라, 시야가…… 시야가 점점 안개라도 낀 것처럼 흐릿해져……']);
      await defender.print_and_wait(['딱 붙인 두 다리 사이도 끈적하게 젖어버렸다.']);
    }
  }

  async pull_ear(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.pull_ear(attacker, defender, hook);
    }
    await attacker.print_and_wait(['한번 잡아당겨 볼까……']);
    await attacker.print_and_wait([
      '그저 흉내만 낼 생각이었지만, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 똑같이 기대에 찬 눈빛을 마주하자 상상은 현실이 되었다.',
    ]);
    await attacker.print_and_wait([
      '난폭하게, 마치 농장의 토끼를 다루듯 강제로 ',
      defender.sex,
      '의 고개를 치켜들게 했다.',
    ]);
    await attacker.print_and_wait([
      '민감한 귓뿌리가 ',
      attacker.get_colored_name(),
      '에게 붙잡혀 끌어올려질 때마다, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 뇌로 쾌감으로 착각될 법한 고통이 전달되었다.',
    ]);
    await defender.say_and_wait(['으으으읏❤️…… 윽❤️……']);
    await attacker.print_and_wait(['장난이 좀 심했나?']);
    await attacker.print_and_wait([
      '하지만 손을 놓자마자, 잡아당겨진 탓에 체리색으로 달아오른 밤색 귀가 즐겁게 살랑거린다. 주인의 기분이 아주 좋다는 사실을 대변해주고 있었다.',
    ]);
  }

  async pet_breast(attacker, defender, hook) {
    const touched = era.get(`tcvar:${defender.id}:질구접촉부위`);
    if (attacker.id === 0) {
      if (touched.part === part_enum.penis && touched.owner === attacker.id) {
        await attacker.print_and_wait([
          '평소 옷 아래 숨겨져 있던 풍만한 유방을 거의 무질서하게 주무른다. 땀 때문에 매끄럽고 탄력 있는 가슴을 완전히 자신의 뜻대로 모양을 바꾸게 만들며, 손가락은 이따금 베리 같은 유두를 스치고 지나간다.',
        ]);
        await defender.say_and_wait(['으으……! ❤️ 여기……! ❤️❤️']);
        await attacker.print_and_wait([
          '약점을 잡힌 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '은 달콤한 신음을 내뱉으며 몸을 뒤로 휘게 하더니, 이내 앙탈 섞인 소리를 내며 품 안으로 무너져 내렸다.',
        ]);
      } else if (hook.arg) {
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 가슴에 있는 묵직한 쌍봉이 지금 손안에 들어왔다.',
        ]);
        await attacker.print_and_wait([
          '평소 옷 위로 볼 때는 그렇게 거대해 보이지 않았지만, 손바닥에 전해지는 꽉 찬 촉감을 통해 이 담당 우마무스메가 숨겨진 거유를 가진 음란한 몸이라는 것을 다시 한번 확신했다.',
        ]);
        await defender.say_and_wait(['으응……❤️']);
        await attacker.print_and_wait([
          '푸슬푸슬 주무르며 손바닥 사이로 느껴지는 따스하고 수분기 가득한 살결의 파동을 즐겼다.',
        ]);
        await attacker.print_and_wait([
          '손가락이 부드러운 살 속에 파묻힐 때마다 흥분한 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '은 잘게 몸을 떨며 목구멍으로 묘한 신음을 흘렸다.',
        ]);
      } else {
        await attacker.print_and_wait([
          '완전히 젖어버린 황옥빛 눈동자와 콧소리 섞인 유혹적인 신음. ',
          sys_get_colored_callname(attacker.id, defender.id),
          '은 꽤 민감한 가슴을 가지고 있는 모양이다.',
        ]);
        await attacker.print_and_wait(['멈춰줄까? 손의 움직임을 조금 늦추며 물었다.']);
        await defender.say_and_wait(['하아❤️…… 저기……']);
        await defender.say_and_wait(['그게, 계속하셔도 돼요……']);
        await attacker.print_and_wait(['욕정에 가득 찬 목소리로 간청하는 말을 내뱉었다.']);
        await attacker.print_and_wait([
          '이에 더욱 기세를 몰아 고정된 형태조차 유지하지 못할 정도로 부드러운 유방을 자신의 취향에 맞는 모양으로 잡아당겼다. 새하얀 가슴팍이 손자국과 붉은 흔적으로 뒤덮였다. 이 정사가 끝난 뒤에도 자국이 남지 않을까?',
        ]);
        await defender.say_and_wait(['으하아……❤️']);
      }
    } else if (defender.sex_code === 1) {
      await attacker.print_and_wait([
        '무엇을 해야 할지 몰라, 일단 검지로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가슴 위에 원을 그렸다.',
      ]);
      await attacker.print_and_wait(['눈치챈 걸까?']);
      await attacker.print_and_wait([
        '그러자 아예 얼굴을 가슴팍에 기대고 응석 부리듯 비벼댔다.',
      ]);
    } else {
      return await super.pet_breast(attacker, defender, hook);
    }
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '가슴을 만지는 것만으로도 이렇게 민감하게 반응하는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 유두를 공략당하면 어떻게 될까?',
      ]);
      await attacker.print_and_wait([
        '망설임 없이 잔뜩 부풀어 오른 유두를 붙잡아, 마치 액운을 쫓는 콩을 비비듯 으깨었다.',
      ]);
      await defender.say_and_wait(['아아~! …… 하아❤️, 하아, 으으응~❤️']);
      await attacker.print_and_wait([
        '담당의 목소리는 점차 높아졌고, 얼굴에는 쾌감 과부하로 인한 황홀한 표정이 떠올랐다.',
      ]);
      await attacker.print_and_wait(['그럼 이번엔 잡아당겨 볼까?']);
      await attacker.print_and_wait([
        '결국 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 전기에 감전된 듯 고개를 뒤로 젖히며, 정신을 못 차린 채 몸을 맡겨왔다.',
      ]);
    } else {
      await defender.say_and_wait(['…… 꺄아~❤️']);
      await attacker.print_and_wait([
        '심술궂게도, 오로지 담당의 민감한 유두만을 집중적으로 괴롭혔다.',
      ]);
      await attacker.print_and_wait([
        '앙증맞은 유두를 엄지와 검지로 집어 올려, 마치 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 승부복에 달린 염주처럼 좌우로 비틀며 단단하고 탄력 있는 촉감을 즐겼다.',
      ]);
      await defender.say_and_wait(['…… 아❤️~ 으응, 으으~ 꺄아❤️']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은 ',
        attacker.get_colored_name(),
        '의 동작에 맞춰 몸을 비틀었고, 마치 기도문을 외우듯 입술 사이로 리듬감 있는 쾌락의 신음을 흘렸다.',
      ]);
    }
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '손가락이 살짝 스치기만 했는데도, 눈앞의 ',
      defender.get_colored_name(),
      '의 보지 구멍은 즉시 흠뻑 젖어 들었다.',
    ]);
    await defender.say_and_wait(['꺄아……']);
    await attacker.print_and_wait(['자신의 무녀가 내뱉는 젖어 있는 교성이 귓가에 울려 퍼졌다.']);
    await attacker.print_and_wait([
      '검지를 넣고, 이어 중지까지 밀어 넣는다. 때때로 손가락 끝을 구부려 주름진 육벽의 감촉을 느끼며 끊임없이 자극을 주었다.',
    ]);
    await defender.say_and_wait(['후우, 후우, 아…… 운명의 사람…… 손가락, 너무 굉장해요']);
    await attacker.print_and_wait([
      '질척해진 작은 구멍 안은 이미 ',
      attacker.get_colored_name(),
      '의 손가락이 휘젓는 것인지, 자극을 갈구하는 구멍의 속살이 능동적으로 손가락을 빨아들이는 것인지 분간할 수 없게 되었다.',
    ]);
  }

  async blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '무녀는 온갖 의식을 익혀야 하니 기초적인 비유 학습 능력이 필수적이지만…… 이런 곳에 쓰게 될 줄은 몰랐다.',
      ]);
      await attacker.print_and_wait([
        '당근이라 상상하며 혀끝으로 성기 뿌리를 살짝 건드린 뒤, 그대로 휘감아 핥으며 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 수컷 호르몬 향기를 음미했다.',
      ]);
      await attacker.say_and_wait(['하아, 우웁, 쮸읍……']);
      await attacker.print_and_wait([
        '육봉을 핥고 삼키는 과정에서 입안 가득 음탕하고 방탕한 타액 흡입음이 울려 퍼졌다.',
      ]);
    } else {
      await defender.say_and_wait(['습득이 빠르구나.']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은 자신의 발기한 성기를 정성껏 모시고 있는 상대를 내려다보며, 칭찬하듯 머리를 쓰다듬었다.',
      ]);
      await attacker.print_and_wait(['으응…… 후후, 기분 좋으시죠?']);
      await attacker.print_and_wait([
        '음란한 혀를 내밀어 요도구를 조금씩 핥아 올리거나, 귀두를 입에 머금고 혀로 살짝 누른다. 때로는 소악마처럼 살짝 이빨을 세워 ',
        defender.get_colored_name(),
        '의 민감한 부위를 긁어내렸다.',
      ]);
      await attacker.print_and_wait([
        '매번 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 반응을 보일 때마다, 자신은 즐거운 듯 미소 지었다.',
      ]);
    }
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    const is_asking = hook.hook === ero_hooks.ask_blow_job;
    if (hook.arg) {
      if (is_asking) {
        if (
          await ask_action(
            attacker.id,
            defender.id,
            part_enum.penis,
            part_enum.mouth,
          )
        ) {
          await after_refusing_by_defender(attacker, defender, hook);
          return;
        }
        await defender.say_and_wait(['입으로요?']);
        await defender.say_and_wait(['네. 최선을 다할게요.']);
        await defender.print_and_wait([
          '바닥에 무릎을 꿇고 앉아 머리를 가까이 가져갔다. 내뱉는 숨결이 육봉에 닿자 그것이 조금 더 커진 것 같았다.',
        ]);
        await defender.print_and_wait(['그리고……']);
        await defender.say_and_wait(['꿀꺽!']);
        await defender.print_and_wait([
          '단숨에 성기를 입안으로 집어넣었다. 참배 때 기도문을 외우던 작은 입이 육봉으로 가득 찼고, 질척거리는 소리와 함께 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '에게 구강 성교를 하기 시작했다.',
        ]);
      } else {
        await attacker.say_and_wait('입 벌려.');
        await defender.print_and_wait(
          '저항하면 될지도 모른다고…… 그렇게 생각은 했지만, 몸은 서서히 그 손에 밀려 아래로 내려갔다……',
        );
        await defender.say_and_wait('으으……');
      }
      await this.blow_job(defender, attacker, hook);
    } else {
      if (is_asking) {
        await defender.say_and_wait(['알겠어요, 알겠다니까요.']);
        await attacker.print_and_wait(['조금 건성으로 육봉을 삼켰다.']);
        await defender.say_and_wait(['…… 구악, 쿨럭, 츄읍, 우읍!']);
        await attacker.print_and_wait([
          '준비가 덜 된 모양인지, 육봉을 뱉어내려 애쓰는 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '은 코로 숨을 몰아쉬며 조금씩 발기한 성기를 입 밖으로 밀어냈다.',
        ]);
        await attacker.print_and_wait([
          '하지만 벌름거리는 콧망울과 흔들리는 꼬리를 보니, 꽤 즐기고 있는 모양이다.',
        ]);
      } else {
        await defender.say_and_wait('하아……', true);
        await defender.say_and_wait('계속…… 하실 건가요……', true);
      }
      await this.blow_job(defender, attacker, hook);
    }
  }

  async force_blow_job(attacker, defender, hook) {
    await this.ask_blow_job(attacker, defender, hook);
  }

  async deep_blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.deep_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['후우…… 이렇게 숨 쉬는 건 조금 힘드네요.']);
      await attacker.print_and_wait([
        '머리를 조금 더 뒤로 젖히고 혀를 강하게 오므려, 육봉이 입안 깊숙이 밀려 들어오게 했다.',
      ]);
      await attacker.print_and_wait(['아직도 끝이 안 닿은 건가요?']);
      await attacker.print_and_wait([
        '눈을 감은 채 몰아치듯 다가오는 체모가 코끝을 간지럽히는 감각과, 점점 더 강해지는, 왠지 모르게 도취되는 비릿한 냄새를 감지했다.',
      ]);
      await attacker.print_and_wait([
        '머릿속이 하얘진다. 이렇게, 조금 더 깊어도 괜찮겠지?',
      ]);
    } else {
      await attacker.say_and_wait(['구우웃──!']);
      await attacker.print_and_wait([
        '별 모양의 눈동자가 살짝 뒤집혔음에도 불구하고, 목구멍은 쉴 새 없이 수축과 이완을 반복했다. 평소라면 공기 외에는 아무것도 닿지 않았을 목 안쪽 살로 귀두를 조이며 자극했다.',
      ]);
      await attacker.say_and_wait(['읍~ 쮸읍~ 으으─!']);
      await attacker.print_and_wait([
        '음모 속에 파묻힌 분홍빛 입술과 육봉 사이의 틈새로 음란한 숨결이 새어 나오고, 치켜 올라간 밤색 꼬리가 칭찬을 바라는 듯 살랑살랑 흔들렸다.',
      ]);
    }
    await deep_blow_job_kitaru(attacker, defender, hook);
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('좀 더, 깊은 곳까지 원해……');
      await defender.print_and_wait([
        '탐욕스럽게 잠꼬대 같은 소리를 하며, 쾌락을 갈구하는 본능에 지배된 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이(가) 허리를 들이밀었다.',
      ]);
      await defender.print_and_wait('더 깊게 물었다……');
      await defender.print_and_wait('가장 안쪽까지 닿았다……');
    } else {
      await defender.print_and_wait([
        '목구멍을 울리며 육봉을 모시는 동시에 꼬리를 흔들 수 있을 정도의 여유가 생겼다. ',
        defender.get_colored_name(),
        '는 이 방면에 ',
        attacker.get_phy_sex_title(),
        '의 예상을 뛰어넘는 재능이 있었다.',
      ]);
      await defender.print_and_wait([
        '곁눈질로 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 숨을 들이켜며 고개를 젖히는 모습을 확인한 뒤, ',
        defender.get_colored_name(),
        '는 알기 쉽게 귀를 파르르 떨었다.',
      ]);
      await defender.print_and_wait('어때요~');
      await defender.print_and_wait([
        '비록 그 작은 입은 지금 말을 할 여유가 없었지만, 자신의 담당과 밀착해 있는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '은 귀두를 혀끝으로 훑으며 공치사를 늘어놓는 그 의도를 완벽히 이해했다.',
      ]);
    }
    await deep_blow_job_kitaru(defender, attacker, hook);
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait('고개 들어.');
      await defender.print_and_wait('더 깊게 물었다……');
      await defender.print_and_wait('여전히 온기라곤 느껴지지 않는 단호한 명령조였다.');
      await defender.print_and_wait([
        '하지만 ',
        defender.get_colored_name(),
        '의 몸은 거부할 수 없이 그 명령에 지배당하고 있었다.',
      ]);
    } else {
      await defender.print_and_wait([
        '무언의 재촉과 함께, ',
        attacker.get_phy_sex_title(),
        '은 다시 한번 강압적으로 눈앞의 ',
        defender.get_teen_sex_title(),
        '를 자신의 가랑이 사이에 고정했다. 자신이 만족할 때까지.',
      ]);
    }
    await deep_blow_job_kitaru(defender, attacker, hook);
  }

  async hand_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.hand_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait([
        '저기, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '…… 저 잘하고 있나요?',
      ]);
      await attacker.print_and_wait([
        '대답은 들리지 않았지만, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 허리가 살짝 들리는 것을 보았다.',
      ]);
      await attacker.say_and_wait(['그럼 계속할게요……']);
      await attacker.print_and_wait([
        '오른손의 새끼손가락과 검지로 육봉을 가볍게 감싸 쥐고 천천히 위아래로 흔든다. 이따금 다른 손가락 끝으로 귀두의 틈새를 문지르거나 긁어내며 두 사람의 몸을 떨게 만드는 질척한 마찰음을 냈다. 결국 두 손은 새빨간 귀두에서 떨어지는 투명한 쿠퍼액으로 범벅이 되었다.',
      ]);
      await attacker.say_and_wait(['으음…… 이건 마치, 참배 전의 손 씻기 같네요.']);
      await attacker.print_and_wait([
        '무녀의 정성스러운 손길을 받는 육봉도 더 많은 쿠퍼액을 내뿜으며 화답했다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '더욱 팽창한 성기를 왼손으로 살짝 받쳐 들고, 이전의 봉사로 인해 이미 끈적해진 오른손으로 수정처럼 빛나는 귀두를 직접 덮었다.',
      ]);
      await attacker.print_and_wait([
        '타로 카드를 섞을 때 그토록 기민하게 움직이던 가느다란 다섯 손가락이 굴복한 듯 무력하게 내려앉아, 하얗고 부드러운 손바닥을 흉측한 귀두 관에 단단히 밀착시켰다.',
      ]);
      await attacker.print_and_wait([
        '손을 놀리는 속도를 높이자, 눈앞의 남자가 허리를 주체하지 못하고 더 높이 들이미는 것을 느꼈다.',
      ]);
      await attacker.print_and_wait([
        '하아…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        '도 정말 기뻐하시네요……',
      ]);
      await attacker.print_and_wait([
        '제 아랫배도 욱신거려요. 그러니까, 어서 싸버려 주세요……',
      ]);
    }
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.hand,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        '쳐다보는 것만으로도 아랫배가 욱신거리는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 그것을 빤히 바라보자, 열 손가락이 평소 신탁을 받을 때처럼 저절로 리듬을 타며 움직이기 시작했다.',
      ]);
      await defender.say_and_wait(['저기, 손으로 해주길 원하시나요?']);
      await defender.print_and_wait([
        '말하지 않아도 점괘로 다 알 수 있었다. 핏대가 선 육봉을 손으로 달래며, 그것이 서서히 자신의 비구를 억지로 벌려 보기 흉한 모양으로 바꿀 괴물처럼 변해가는 과정을 지켜보았다.',
      ]);
    }
    await this.hand_job(defender, attacker, hook);
  }

  async force_hand_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.force_hand_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ', 손 펴봐.',
      ]);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '이 꽤 강압적으로 자신의 펼쳐진 양손 사이에 육봉을 밀어 넣었다. 풍겨오는 진한 냄새는 맡는 것만으로도 머리를 뜨겁게 달구었다.',
      ]);
      await defender.print_and_wait([
        '조금은 내키지 않는 표정을 지어야 할까? 이런 강압적인 태도로 명령하다니.',
      ]);
      await defender.print_and_wait([
        '하지만 오른손은 이미 경건하게 귀두의 민감한 골을 부드럽게 문지르기 시작했고, 왼손은 묵직한 고환 주머니와 함께 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 육봉을 부드러운 손바닥 위로 받쳐 들었다.',
      ]);
    }
    await this.hand_job(defender, attacker, hook);
  }

  async hand_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.hand_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['육봉이 더 커졌네……']);
      await attacker.print_and_wait([
        '그리고 자신을 엉망으로 만들고 중독되게 하는 그 냄새도……']);
      await attacker.print_and_wait([
        '성기 몸통을 쥐고 있던 양손을 살짝 뒤로 물려 단단해진 귀두를 드러낸 뒤, 입술로 가볍게 머금었다. 혀끝에서 나오는 열기가 체온이 담긴 호흡과 함께 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 성기 뿌리로 전해졌다.',
      ]);
      await attacker.say_and_wait(['쮸읍~']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '도 이걸 아주 좋아하시는 모양이네.',
      ]);
    } else {
      await attacker.say_and_wait(['쮸릅, 쮸르릅──']);
      await defender.print_and_wait([
        '발치에 있는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '은 뺨을 조금 높게 들고 성기 뿌리 주변을 핥으며, 혀끝에 힘을 주어 관상구와 요도구를 가볍게 건드렸다.',
      ]);
      await defender.print_and_wait([
        '입술이 잠시 떨어질 때면 기다렸다는 듯 양손이 빈자리를 메우며, 가느다란 손가락이 혼신을 다해 성기를 만져 쾌감을 번갈아 선사했다.',
      ]);
    }
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('한번 핥아봐.');
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '으로부터 그런 지시를 받자, 한 치의 의심도 없이 혀끝을 내밀어 요도구에서 떨어지는 액체를 말아 삼켰다.',
      ]);
      await defender.print_and_wait([
        '하아, 됐나요? 제 혀가 벌써 끈적끈적해졌는데…… 엣! 좀 더 대담하게요?',
      ]);
      await defender.print_and_wait([
        '다시 손으로 각도를 조절한 뒤, 마치 막대사탕을 다루듯 혀끝으로 귀두와 관상구를 끊임없이 핥아 올렸다.',
      ]);
    }
    await this.hand_and_blow_job(defender, attacker, hook);
  }

  async force_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.force_hand_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait(['손이랑 입, 동시에 써. 할 수 있지?']);
      await defender.print_and_wait([
        '내려다보는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 시선 아래에서, 자신도 모르게 두 다리를 M자 형태로 활짝 벌렸다. 육봉은 딱 혀를 내밀면 닿을 수 있는 곳에 있었다.',
      ]);
      await defender.print_and_wait([
        '으으, 태도가 너무 나쁘잖아요, 라고 속으로 투덜대면서도, 마조히스트인 자신은 이미 조심스레 육봉 위에 불거진 혈관들을 문지르며 요도구를 혀끝으로 톡톡 건드리기 시작했다.',
      ]);
      await defender.print_and_wait(['우으…… 당연히, 당연히 할 수 있죠.']);
    }
    await this.hand_and_blow_job(defender, attacker, hook);
  }

  async tit_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.tit_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '담당이 자신의 육봉을 가슴골 사이에 통째로 끼워 넣고는, 평소 교복 아래 숨겨져 있던 커다랗고 탐스러운 유방을 혼신의 힘을 다해 압박하는 모습을 지켜보았다.',
      ]);
      await attacker.say_and_wait([
        '으응~ 으랏차, 후우, 으음~ ',
        defender.get_colored_name(),
        ', 기분…… 괜찮으신가요?',
      ]);
      await defender.print_and_wait([
        '이에 보답하듯 자신을 모시는 소녀를 다정하게 쓰다듬어 주었고, 손바닥으로 밝은 오렌지색 머리카락을 마구 헝클어뜨렸다.',
      ]);
      await defender.print_and_wait(['윽…… 더 열심히 하기 시작했네.']);
    } else {
      await attacker.print_and_wait([
        '육봉이 움찔거리는 걸 보니 자신의 봉사가 효과가 있는 모양이다. 하지만 혹시라도 ',
        defender.get_colored_name(),
        '이 불편해하지는 않을까 계속 걱정되었다.',
      ]);
      await attacker.print_and_wait([
        '그래서 이미 딱딱하게 세워진 두 개의 체리를 육봉에 밀착시켜, 그 유두가 파이즈리 과정에서 색다른 자극을 줄 수 있도록 시도했다.',
      ]);
      await attacker.print_and_wait([
        '유두 끝이 뜨겁게 달아오른 육봉과 부딪힐 때마다 전해지는 전류 같은 감각이 뇌를 마비시켰고, 가랑이 사이도 어느덧 축축하게 젖어 들었다.',
      ]);
      await attacker.print_and_wait([
        '하아…… 하아, 이런 식이면, 나도 정말 즐기고 있는 거겠지.',
      ]);
    }
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait([
        '자신의 점술사의 가슴에 있는, 움직일 때마다 출렁이는 둥글고 부드러운 유방을 빤히 바라보았다. 꼿꼿이 선 유두 주변은 건강한 분홍빛을 띠고 있었다.',
      ]);
      await attacker.print_and_wait(['육봉을 저 가슴 사이에 끼우면 어떻게 될까.']);
      await defender.say_and_wait(['좋아요~!']);
      await attacker.print_and_wait([
        '말을 꺼내기도 전에 담당의 익숙한 대답이 돌아왔다. ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 역시 눈치 빠른 우마무스메다.',
      ]);
    }
    await this.tit_job(defender, attacker, hook);
  }

  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.tit_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '허리를 위아래로 움직이며 투명한 쿠퍼액을 육봉이 낀 부드러운 가슴골에 골고루 발랐다. 쿠퍼액은 가슴과 육봉의 열기로 인해 증발하며 머릿속까지 어질어질하게 만들었다.',
      ]);
      await attacker.print_and_wait(['냄새가…… 평소보다 훨씬 진하네.']);
      await attacker.print_and_wait([
        '조심스럽게 위치를 조정하여 끊임없이 쿠퍼액이 흐르는 귀두만을 입 앞에 노출했다. 몸을 살짝 앞으로 숙여 그것을 입안에 머금고, 혀를 딱 관상구 위치에 갖다 대었다.',
      ]);
      await attacker.print_and_wait([
        '아…… 아무리 생각해도 맛있다고는 할 수 없지만…… 그래도 조금 더 많이 삼켜버릴 것 같아.',
      ]);
    } else {
      await attacker.say_and_wait(['쮸릅, 쮸르릅……']);
      await attacker.print_and_wait([
        '흘러내리는 짭짤하고 비릿한 액체는 낭비되지 않고 한 방울도 남김없이 뱃속으로 들어갔다. 가끔 귀두가 입에서 빠져나올 때면 분홍빛 혀가 즉시 따라붙어, 그 액체가 이미 번들거리는 가슴 위로 떨어지기 전에 가로챘다.',
      ]);
      await attacker.print_and_wait(['머릿속이 이 음란한 냄새로 가득 찰 때까지 계속했다.']);
      await attacker.print_and_wait([
        '결국…… 이건 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 저를 인정해주시는 포상이니까요.',
      ]);
    }
  }

  async ask_tit_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 유방 사이로 삐져나온 귀두가 어쩐지 기운이 없어 보였다.',
      ]);
      await defender.print_and_wait('게다가 본인도 알기 쉽게 두 손을 모아 간절히 부탁하고 있었다.');
    }
    await this.tit_and_blow_job(defender, attacker, hook);
  }

  async foot_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '~ 이렇게 하면…… 기분 어때요?',
      ]);
      await defender.print_and_wait([
        '가늘게 뜬 오렌지색 눈동자가 장난기 있게 빛났다. 훌륭한 라스트 스퍼트를 내는 그 두 발이 ',
        defender.get_colored_name(),
        '의 육봉 위에 올라탔다.',
      ]);
      await defender.print_and_wait([
        '한 발은 귀두를 애무하고, 다른 한 발은 성기 몸통을 받쳐 든다. 서걱거리는 발바닥 마찰로 귀두를 충분히 예열한 뒤, 이내 팽창하여 붉어진 육봉 위에 툭 튀어나온 굵은 힘줄을 따라 감각이 둔한 끝부분까지 훑어 내려갔다.',
      ]);
      await attacker.say_and_wait(['…… 정말 뜨거워요…… 녹아버릴 것 같아……']);
      await defender.print_and_wait([
        '우마무스메들이 그토록 소중히 여기는 발이, 지금은 그저 우마뾰이의 흥취를 위해 너무나도 쉽게 사용되고 있었다. 그 덕분에 귀두 끝에서는 끈적한 쿠퍼액이 더 많이, 더 빠르게 생산되었다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '선입 전술에 능한 자신은 평소 레이스 중에도 주변 라이벌들의 움직임에 늘 신경을 써야 했기 때문일까?',
      ]);
      await attacker.print_and_wait([
        '그래서 온 정신을 다해 두 발로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 육봉을 돌보는 와중에도, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 상태를 살필 여유가 있었다.',
      ]);
      await attacker.print_and_wait([
        '처음에는 그저 발바닥으로 육봉을 끼워 쥐고 끊임없이 문지르다가, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 거친 숨소리가 들려오기 시작하자 자세를 바꿔 민감한 부위를 다시 자극했다.',
      ]);
      await attacker.print_and_wait([
        '부드러운 발바닥 중앙으로 귀두를 밟고 있다가, 육봉이 심하게 떨리기 시작하면 짓궂게 마찰을 멈추고 발가락을 구부려 귀두를 꽉 움켜쥐었다.',
      ]);
      await attacker.say_and_wait(
        [
          '하아…… 이런 식으로 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 딱딱한 육봉을 발밑에 두는 건, 왠지 모를 우월감이 느껴지네.',
        ],
        true,
      );
      await attacker.say_and_wait(
        ['…… 이상해, 분명 발로만 하고 있는데도 심장이 너무 빨리 뛰고 몸이 뜨거워.'],
        true,
      );
    }
  }
};