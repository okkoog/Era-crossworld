const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');

module.exports = class extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.kiss(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait('으응……');
      await attacker.print_and_wait('가까운 거리에서 상대의 반짝이는 눈동자에 서린 물안개가 또렷하게 보였다.');
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait([
        '무의식적으로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '을 품에 안고, ',
        defender.sex,
        '의 입안 깊숙이 밀어 넣은 혀에 필사적으로 응답했다.',
      ]);
      await attacker.print_and_wait([
        '입술이 떨어지자 두 사람의 혀 사이로 은색 다리가 놓였다가, 내뱉는 숨결에 녹아내렸다.',
      ]);
      await defender.say_and_wait('음하…… 츄하……❤️');
      await attacker.print_and_wait([
        '겨우 숨을 고른 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 다시금 입맞춤을 졸라왔다.',
      ]);
    } else {
      await defender.say_and_wait('츄릅…… 응…… 푸하…… 츄릅…… 꿀꺽');
      await defender.print_and_wait([
        '분명 나는 장거리를 뛰는 ',
        defender.get_uma_sex_title(),
        '니까, 주도권을 잡아야 할 쪽일 텐데……',
      ]);
      await defender.print_and_wait([
        '하지만 운명의 사람에게서 풍기는 어른스러운 안심감이 교환하는 타액과 숨결을 타고 몸속으로 흘러들어오자……',
      ]);
      await defender.print_and_wait(['……노…… 녹아버릴 것 같아……']);
      await attacker.print_and_wait([
        '잠시 입술이 떨어질 때마다, 얼굴이 붉게 달아오른 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 입을 반쯤 벌린 채 거친 숨을 몰아쉬었고, 눈가에는 눈물이 맺혀 있었다.',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 좋아해요……',
      ]);
    }
  }

  async french_kiss(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.french_kiss(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait('가벼운 입맞춤만으로는 만족할 수 없었다.');
      await attacker.print_and_wait([
        '혀를 더욱 깊숙이 밀어 넣어 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입안을 마음껏 유린했다.',
      ]);
      await attacker.print_and_wait(
        '적나라한 마찰음과 함께 혀를 움직이며 추잡한 소리를 냈다.',
      );
      await defender.say_and_wait('으읍!❤️');
      await attacker.print_and_wait([
        '두 사람의 혀가 얽힐 때마다 품 안의 밤색 ',
        defender.get_uma_sex_title(),
        '가 목구멍으로 끈적한 신음을 흘렸다.',
      ]);
      await attacker.print_and_wait([
        '몸을 밀착시킨 채 혀와 혀, 점막과 치아가 맞닿을 때마다 쾌감이 전달되었고, 그에 응답하려는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸이 쉼 없이 떨리기 시작했다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '이 퍼붓는 공격적인 입맞춤을 그저 받아들이는 수밖에 없었다.',
      ]);
    } else {
      await defender.say_and_wait('음…… 츄릅…… 꿀꺽……');
      if (!era.get(`cflag:${attacker.id}:종족`)) {
        await defender.print_and_wait([
          '분명 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '은 인간인데…… 폐활량이 반칙급으로 대단하네……',
        ]);
      }
      await defender.print_and_wait([
        '의식이라도 치르듯 치아 하나하나를 핥고, 혀를 휘감으며 부드럽게 문질렀다……',
      ]);
      await defender.print_and_wait([
        '입안으로 흘러들어오는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 끈적한 타액이 느껴졌다……',
      ]);
      await defender.say_and_wait('꿀꺽…… 으음하……❤️');
      await defender.print_and_wait([
        '입맞춤의 여운 속에서 거친 숨을 내뱉으며, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 호르몬 향기가 전신을 감싸도록 내버려 두었다.',
      ]);
      await defender.say_and_wait('계속, 계속 더 하고 싶어……❤️', true);
    }
  }

  async talk(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.talk(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('후쿠는 강아지계야, 아니면 고양이계야?');
      await defender.say_and_wait('엣! 그건 말이죠!');
      await attacker.say_and_wait('……오히려 여우계에 가깝나?');
      attacker.print([
        '정체를 간파당한 듯한 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 얼굴이 더욱 붉게 타올랐다.',
      ]);
    } else {
      await attacker.say_and_wait('이러면 마치 시라오키 님에게서 사람을 가로채는 기분인걸……');
      await attacker.print_and_wait([
        '온몸이 연분홍빛으로 물든 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '을 보며 무심코 중얼거렸다.',
      ]);
      await attacker.print_and_wait('……뒷발질은 없었지만…… 대답도 돌아오지 않았다.');
      attacker.print('……하지만 얼굴은 지독할 정도로 붉어져 있었다.');
    }
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.lure(attacker, defender, hook);
    }
    await attacker.say_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '.',
    ]);
    await attacker.print_and_wait(
      '길쭉한 귀를 향해 나직하게 담당 우마무스메의 이름을 불렀다.',
    );
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    if (hook.arg || era.get(`tcvar:${defender.id}:발정`)) {
      await defender.say_and_wait([
        '저…… 저기, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '가 옷자락을 움켜쥐고 여우처럼 가슴에 밀착하며, 기대감 섞인 눈빛으로 응답했다.',
      ]);
      await attacker.print_and_wait(['이제 무언가 말을 해야 할 타이밍이다.']);
      if (defender.sex_code - 1) {
        await attacker.print_and_wait([
          '품에 안긴 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 부드러운 몸을 만끽하며, 커다란 손을 점술 소녀의 몸 곳곳으로 옮겼다. 순산형의 엉덩이 살집부터 평소 옷에 가려져 있던 풍만한 가슴, 그리고 매끄럽게 뻗은 다리까지 훑었다.',
        ]);
      }
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 눈동자 속 별들이 손길에 맞춰 반짝이는 것이 보였다.',
      ]);
    }
  }
};