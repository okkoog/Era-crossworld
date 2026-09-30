const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');

module.exports = class extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.kiss(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        '맞닿은 코끝, 뜨거운 숨결이 상대의 매끄러운 목덜미를 부드럽게 스쳐 지나간다.',
      );
      await attacker.print_and_wait('숨이 막힐 것만 같은 뜨거운 사랑의 감정.');
      await defender.say_and_wait('음…… 하아, 하아……❤️');
      await attacker.print_and_wait(
        '두 손으로 머리 뒤를 감싸 안았고, 새빨갛게 물든 뺨에는 욕망의 색채가 가득하다.',
      );
      await attacker.print_and_wait('……보아하니 아직 만족하지 못한 모양이네.');
    } else {
      await attacker.print_and_wait(
        '또다시 입을 맞추고, 또다시 서로를 끌어안으며, 상대의 입술에 자신의 흔적을 남기려 한다.',
      );
      await defender.say_and_wait([
        '……있잖아, 알고 있니, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '.',
      ]);
      await attacker.print_and_wait([
        '짧은 입맞춤이 끝난 후, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 그윽하게 속삭였다.',
      ]);
      await defender.say_and_wait('겨우 이 정도로는…… 날 만족시킬 수 없단다❤️');
    }
  }

  async french_kiss(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.french_kiss(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait('자신의 혀로 상대의 구강 내부를 더듬어 탐색한다.');
      await attacker.print_and_wait('조금 더 깊숙이, 더욱 깊은 곳으로.');
      await attacker.print_and_wait([
        '그러나 얼마 지나지 않아, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 혀에 들키고 만다.',
      ]);
      await attacker.print_and_wait(
        '혀가 상대의 입안에 꾹 눌린 채, 어큐트의 가냘프고 작은 혀에 아래턱 쪽으로 붙잡혀 끊임없이 얽혀든다.',
      );
      await defender.say_and_wait('……❤️～');
      await attacker.print_and_wait([
        '눈을 뜨자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 눈동자 속에 어린 미소가 눈에 들어온다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '치열의 방어선은 농락하는 혀끝에 금세 무너졌고, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 자신의 구강 안으로 거침없이 파고들었다.',
      ]);
      await attacker.print_and_wait(
        '마치 침범당하듯, 이빨 깊숙한 곳에 숨어 있던 혀가 위아래로 농락당하며 얽힌다.',
      );
      await attacker.print_and_wait(
        '입안의 타액마저 전리품처럼 상대에게 빼앗기고, 오직 상대의 타액만이 남겨져 강제적인 교환이 이루어진다.',
      );
      await attacker.print_and_wait([
        '눈을 뜨니, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 요염한 눈빛은 여전했고 머리 뒤를 감싸 안은 두 손에는 더욱 힘이 들어간다.',
      ]);
      await attacker.print_and_wait([
        '……키스에서 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '를 이길 자신은 전혀 들지 않는다.',
      ]);
    }
  }

  async relax(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.relax(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '후우…… ',
      sys_get_colored_callname(defender.id, attacker.id),
      ', 물이라도 좀 마시겠니?',
    ]);
    await attacker.print_and_wait([
      '잠시 쉬는 시간, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 부드러운 목소리로 수분을 보충할 것인지 묻는다.',
    ]);
    await attacker.print_and_wait([
      '이마에서 작은 땀방울이 흘러내린다. ',
      defender.sex,
      '의 나체인 하얗고 매끄러운 몸을 바라본다.',
    ]);
    await attacker.print_and_wait('——심장이 왼쪽에서 쿵쾅거린다.');
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.lure(attacker, defender, hook);
    }
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await attacker.print_and_wait([
          '손가락 끝으로 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 유두 주위에 원을 그리며, ',
          sys_get_colored_callname(attacker.id, defender.id),
          '가 꾹 참다못해 신음을 흘리는 모습을 보고 싶어 한다.',
        ]);
        await attacker.print_and_wait([
          '그러나, ',
          sys_get_colored_callname(attacker.id, defender.id),
          '는 오히려 자신의 손을 움켜잡고, 아랫배의 자궁 쪽으로 이끌었다.',
        ]);
        await defender.say_and_wait([
          '있잖아…… ',
          sys_get_colored_callname(defender.id, attacker.id),
          '. 여기는…… 안 되겠니?',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '가 고개를 살짝 숙인 채 위로 올려다보며, 발그레해진 뺨 사이로 매혹적인 신음을 흘려보낸다——',
        ]);
      } else {
        await attacker.print_and_wait([
          '유혹하기 위해 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '에게 뻗었던 손가락은, 얼마 안 가 ',
          defender.sex,
          '의 입술과 혀에 집어삼켜졌다.',
        ]);
        await attacker.print_and_wait(
          '검지, 엄지, 중지, 약지, 새끼손가락, 손바닥, 손등—— 하나하나 핥고 빨아들이며 타액의 흔적을 아로새긴다.',
        );
        await attacker.print_and_wait([
          '하지만 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '는 아직 만족하지 못한 듯, 팔에 밀착해 손목을 혀로 핥아 올리는 ',
          defender.sex,
          '는 마치 발정 난 야수처럼 두 눈을 크게 뜨고 있다.',
        ]);
        await defender.say_and_wait([
          '하아, 하아…… ',
          sys_get_colored_callname(defender.id, attacker.id),
          '의 냄새…… ',
          sys_get_colored_callname(defender.id, attacker.id),
          ', 계속해도 되겠니?',
        ]);
      }
    } else {
      await attacker.print_and_wait('아무런 효과가 없는 듯하다……');
    }
  }

  async talk(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.talk(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await defender.say_and_wait([
        '에구.. ',
        sys_get_colored_callname(defender.id, attacker.id),
        '과 이런 데까지 오게 될 줄은 정말 몰랐구나……',
      ]);
      await attacker.print_and_wait([
        '두 손을 앞쪽에서 맞잡은 채, 자신의 알몸을 가릴 생각이 전혀 없어 보이는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 고개를 살짝 갸웃했다.',
      ]);
      await defender.say_and_wait('하지만 기왕 하는 거라면…… 끝까지 즐겨야 하지 않겠니.');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          defender.sex,
          '는 부드럽게 미소 지으며 곧바로 손을 등 뒤로 돌렸고, 분홍빛 유두가 고스란히 드러났다.',
        ]);
      }
    } else {
      await attacker.say_and_wait('부드럽게 해줄까?');
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 고개를 숙인 채, 아무런 반응이 없다.',
      ]);
      await attacker.say_and_wait('그럼 좀 더 거칠게 해볼까?');
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 꼬리가 살랑살랑 흔들리기 시작했다.',
      ]);
      await attacker.print_and_wait(
        '알몸일 때는 부끄러워하지도 않으면서, 이런 대화에서는 정면으로 대답해 주려 하지 않는다.',
      );
      await attacker.print_and_wait(
        '신선한 느낌이 들어 풍만하고 매끄러운 엉덩이를 찰싹 때렸다. 찰진 파찰음이 대답을 대신한다——',
      );
    }
  }

  async switch(attacker, defender) {
    if (defender.id !== 100) {
      return await super.switch(attacker, defender);
    }
    await defender.say_and_wait('어라? 주도권을 나한테 넘겨주는 거니?…… 으음——');
    await attacker.say_and_wait('안 돼?');
    if (Math.random() < 0.5) {
      await defender.say_and_wait([
        '안 되는 건 아니지만 말이란다…… 그치만, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await defender.say_and_wait('앞으로 무슨 일이 일어나든…… 꼭 버텨내야 한단다~?');
      await attacker.print_and_wait([
        '말을 마친 ',
        defender.sex,
        '는 두 손을 가슴께로 뻗으며 가슴팍 위로 엎드려왔다.',
      ]);
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 두 눈동자 속에서 붉은 안광이 번뜩였다.',
      ]);
    } else {
      await defender.say_and_wait('안 되는 건 아니지만 말이란다……');
      await attacker.print_and_wait([
        '찰나의 순간, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 눈빛 속에 아쉬운 기색이 스쳐 지나갔다——',
      ]);
      await defender.say_and_wait([
        '그러면, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 아프면 꼭 말해야 한단다~?',
      ]);
    }
  }

  async resist(attacker, defender, hook, extra_flag) {
    if (defender.id !== 100) {
      return await super.resist(attacker, defender, hook, extra_flag);
    }
    await defender.say_and_wait([
      '있잖아, ',
      sys_get_colored_callname(defender.id, attacker.id),
      '…… 반항하지 않는 편이 좋단다?',
    ]);
    await attacker.print_and_wait([
      '눈동자 속에 요염한 빛을 번뜩이는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 자신을 바닥에 덮쳐 누른다.',
    ]);
    await defender.say_and_wait('안 그러면…… 네가 다칠지도 모르잖니.');
    await attacker.print_and_wait([
      '두 손을 꽉 붙잡힌 채, ',
      defender.sex,
      '의 입술과 혀가 목덜미를 향해 다가온다……',
    ]);
    era.println();
    if (
      (extra_flag.success = EroNormalCommunications.check_resist_success(
        0,
        100,
      ))
    ) {
      await attacker.print_and_wait('부상? 그딴 건 아무래도 상관없어.');
      await attacker.print_and_wait([
        '양쪽 손목이 탈구될지도 모른다는 각오로 억지로 몸을 일으켜 세우고, 고개를 들어 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '에게 입을 맞추었다.',
      ]);
      await defender.say_and_wait('웁!……❤️');
      await defender.say_and_wait('❤️～');
      await defender.say_and_wait([
        '……',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 정말 교활하구나.',
      ]);
    } else {
      await attacker.print_and_wait('온 힘을 다해 버둥거려 보았지만, 모든 것이 허사로 돌아갔다.');
      await attacker.print_and_wait(
        '거대한 맹수에게 붙잡힌 사냥감처럼, 발버둥 치면 칠수록 상대를 흥분시킬 뿐이다.',
      );
      await defender.say_and_wait([
        '하아❤️~ 내가 상냥하게 해 줄 테니까 말이다, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '.',
      ]);
      await attacker.print_and_wait([
        '뜨거운 숨결과 함께, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 자신의 목덜미에 자국을 남겼다……',
      ]);
    }
  }

  async gargle(attacker, defender) {
    const { me, acute } =
      attacker.id === 0
        ? { me: attacker, acute: defender }
        : { me: defender, acute: attacker };
    await me.print_and_wait([
      '세면대 앞, 콸콸 쏟아지는 물소리와 함께 컵 한가득 물이 채워질 즈음, ',
      sys_get_colored_callname(0, 100),
      '가 거울 속에 모습을 드러냈다.',
    ]);
    await acute.say_and_wait('깨끗하게 헹궈야 한단다~ 안 규칙하게 충치가 생기면 안 되니까 말이란다……');
    await me.print_and_wait([
      '그렇게 말하며, ',
      acute.sex,
      '는 능숙하게 세면대 옆에서 칫솔 하나를 짜잔하고 꺼냈다.',
    ]);
    await acute.say_and_wait([
      '있잖니, 이빨 닦아줄까? 나, 이빨 구석구석 잘 닦는단다~',
    ]);
    await me.print_and_wait('……굳이 그렇게까지 전부 해줄 필요는 없는데?');
  }

  async wipe_body(attacker, defender) {
    const { me, acute } =
      attacker.id === 0
        ? { me: attacker, acute: defender }
        : { me: defender, acute: attacker };
    await acute.say_and_wait('영차, 영차……');
    await me.print_and_wait([
      '말차색 수건으로 ',
      sys_get_colored_callname(0, 100),
      '가 정성스럽게 몸을 닦아주고 있다.',
    ]);
    await acute.say_and_wait([
      '후우, 후우…… 이제 깨끗해졌구나~ 있잖아, ',
      sys_get_colored_callname(100, 0),
      ', 더 청소해야 할 곳은 없니?',
    ]);
    await me.print_and_wait(
      '……알몸이면서도 청소를 좋아하는 본성은 어디 안 가는구나.',
    );
  }
};