const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');

const { get_breast_cup } = require('#/data/info-generator');

module.exports = class extends EroNormalMakingOuts {
  async pet_ear(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_ear(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귀를 쓰다듬는다…… 뭐랄까, 정말 중독성 있는 감촉이다.',
      ]);
      await attacker.print_and_wait(
        '복슬복슬한 귓바퀴를 따라 부드러운 귓속으로 손을 넣어, 집게손가락으로 귀 안의 여러 작은 뼈들의 구조를 느껴본다.',
      );
      await attacker.print_and_wait(
        '……이 손바닥 절반만 한 귀로, 성기를 감싼다면——',
      );
      await attacker.print_and_wait([
        '머릿속에 불건전한 장면이 스쳐 지나가자, 손에 닿아있던 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귀가 순식간에 경계하듯 「쫑긋」 섰다.',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……방금 아주 불건전한 생각을 한 거 아니니?',
      ]);
      await attacker.print_and_wait('……아하하, 들켰네.');
    } else {
      await defender.say_and_wait([
        '응❤️~ ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 손길, 조금 불건전하구나.',
      ]);
      await attacker.print_and_wait('불건전하다고? 음……');
      await attacker.say_and_wait('그럼 살짝 핥아봐도 돼? 귀?');
      await defender.say_and_wait('안 된단다~');
      await attacker.print_and_wait('다정한 목소리 속에는, 범접할 수 없는 단호함이 숨어있다.');
      await attacker.print_and_wait('……게다가 귀로 손을 한 대 맞아서, 조금 아프다.');
    }
  }

  async pull_ear(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pull_ear(attacker, defender, hook);
    }
    if (era.get('mark:100:동심') - era.get('mark:100:반발') === 3) {
      await attacker.print_and_wait([
        defender.get_uma_sex_title(),
        '에게 있어 귀는 외부에 노출된 약점이다. 하지만 어째서 ',
        defender.get_uma_sex_title(),
        '는 태생적으로 이런 약점을 가지고 있는 걸까?',
      ]);
      await attacker.print_and_wait('분명 트레이너가 귀를 잡고 채찍질하기 위해 존재하는 거겠지?');
      await attacker.print_and_wait([
        '눈앞에서, 귀가 당겨져 눈물을 흘리면서도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 여전히 미소 지으며 이쪽을 바라보고 있다.',
      ]);
      await defender.say_and_wait([
        '저기, ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 다음엔 뭘 할 거니? ……꼬리를 잡아당길 거니? 뺨을 때릴 거니? 아니면 날 발밑에 짓밟을 거니?',
      ]);
      await defender.say_and_wait(
        '뭐가 됐든, 난 다 견딜 수 있단다~ 네가 즐거울 수 있다면, 그것보다 좋은 건 없잖니❤️~',
      );
      await attacker.print_and_wait('……마음속에서 알 수 없는 가학심이 솟아올랐다.');
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귀를 세게 잡아당겼다.',
      ]);
      await attacker.print_and_wait([
        defender.get_uma_sex_title(),
        '에게 있어 겉으로 드러난 약점인 귀가 이렇게 강하게 당겨지니, 평소 고통을 잘 참는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '조차도 견디기 힘든 모양이다.',
      ]);
      await defender.say_and_wait([
        '살살, 조금만 살살 다뤄주렴, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 이러면 무척 아프단다……',
      ]);
      await attacker.print_and_wait([
        '겉으로는 평소와 다름없어 보여도, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 눈가에는 귀가 당겨지는 고통에 무의식적으로 눈물이 맺혔다……',
      ]);
    }
  }

  async pet_breast(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    if (hook.arg) {
      if (get_breast_cup(100, true) >= 'C') {
        await attacker.print_and_wait(
          '한 손으로는 다 감쌀 수 없어, 손가락 틈새로 젖가슴이 삐져나올 정도의 크기.',
        );
      } else {
        await attacker.print_and_wait(
          '작지도 크지도 않아, 손바닥에 딱 들어맞게 감싸지는 크기.',
        );
      }
      await attacker.print_and_wait(
        '부드러운 감촉, 이리저리 주무르면 손바닥 안에서 물결처럼 출렁인다.\n',
      );
      await defender.say_and_wait([
        '저기…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 한 번 주물러 볼 테니?❤️~',
      ]);
      await attacker.print_and_wait(
        '비취 같은 눈동자 아래 숨겨진 것은, 모든 것을 손바닥 위에 올려둔 듯한 자신감일까, 아니면 끝을 알 수 없는 욕망일까?',
      );
      await attacker.print_and_wait(
        '……누가 알겠는가? 그저 손바닥 안에 있는 충혈된 유두가 뜨겁게 달아오를 뿐이다.',
      );
    } else {
      await attacker.print_and_wait('조물조물……');
      await attacker.print_and_wait('경단 같은 감촉이지만, 경단의 규격을 아득히 뛰어넘는다.');
      await attacker.print_and_wait('반죽보다 훨씬 뜨겁고 한층 더 쫄깃하다.');
      await attacker.print_and_wait('간식이 아닌데도, 식욕을 크게 돋운다.');
      await defender.say_and_wait('얘야, 가슴은 먹는게 아니란다?❤️~');
      await attacker.print_and_wait('……또 속마음을 들키고 말았다.');
    }
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait('문질문질……');
      await attacker.print_and_wait('충혈된 유두가 의외로 몹시 뜨겁다.');
      await attacker.print_and_wait('손끝으로 신기한 감촉이 전해진다.');
      await defender.say_and_wait('읏❤️');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 이를 악물며, 가슴에서 전해지는 간지러움을 참아내고 있다.',
      ]);
      await attacker.print_and_wait(
        '계속 개발하다 보면, 언젠가 유두가 활짝 피어나는 날을 볼 수 있겠지.',
      );
      await attacker.print_and_wait('……그때까지는, 계속 문지르고 싶다.');
    } else {
      await attacker.print_and_wait('유두를 꼬집어 위로 들어 올린다.');
      await attacker.print_and_wait(
        '마치 수도꼭지를 쥔 것처럼, 가슴 전체가 이끌려 올라간다.',
      );
      await attacker.print_and_wait(
        '유두를 쥔 채 이리저리 흔들자, 손끝에서 가슴이 춤을 추듯 출렁인다.',
      );
      await defender.say_and_wait([
        '읏❤️~ ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 가슴 가지고 장난치면…… 안 된단다❤️…… 무척 간지러우니까❤️~',
      ]);
      await attacker.print_and_wait([
        '유두가 유린당하는 대로 내버려 둔 채, 입술을 깨물고 손으로 달아오른 얼굴을 가린 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 연신 신음을 흘렸다.',
      ]);
      await attacker.print_and_wait([
        '……더 나아가, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 육욕에 빠져드는 표정을 보고 싶다.',
      ]);
    }
  }

  async pet_clitoris(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['새빨갛게 부어올라, 꼿꼿하게 서 있다.']);
      await attacker.print_and_wait(['살짝 건드리기만 해도, 오랫동안 좌우로 흔들린다.']);
      await defender.say_and_wait(['응…… 그렇게 빤히 보지 말아 주련? 조금 부끄럽구나……']);
      await attacker.print_and_wait([
        '말은 그렇게 해도, 손끝은 여전히 음핵을 위아래로 문지르고 있다.',
      ]);
      await attacker.print_and_wait([
        '……기묘한 감촉, 조금 더 진지하게 탐구해 보고 싶다——',
      ]);
    } else {
      await attacker.print_and_wait([
        '힘주어 꾹 눌러보았지만, 금세 더욱 붉게 부어오르며 튕겨 나왔다.',
      ]);
      await attacker.print_and_wait([
        '선홍빛으로 물든 것이 무척 예쁘다. 스마트폰으로 사진을 찍고 싶어질 정도로……',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ', 안 된단다~',
      ]);
      await attacker.print_and_wait([
        '속마음을 꿰뚫어 본 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '에게 거절당했다.',
      ]);
      await attacker.print_and_wait(['……그렇다면 아쉬운 대로 만지작거릴 수밖에.']);
    }
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['손가락이 아주 부드럽게 삼켜졌다.']);
      await attacker.print_and_wait(['위아래로 휘저으니, 질 내의 꿈틀거림이 선명하게 느껴진다.']);
      await defender.say_and_wait(['읏❤️~, 응❤️~.']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 가늘게 신음을 흘리며, 자기도 모르게 두 다리를 오므렸다.',
      ]);
      await attacker.print_and_wait(['……신음 소리를 조금 더 크게 내줄 수 있을까?']);
    } else {
      await attacker.print_and_wait(['가운데 손가락을 질 내로 삽입하고, 엄지로 음핵을 건드린다.']);
      await attacker.print_and_wait([
        '확실히, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 신음이 아까보다 더 커졌다.',
      ]);
      await defender.say_and_wait(['아앗❤️~, 읏❤️~ 거긴❤️~ 굉장하잖니……']);
      await attacker.print_and_wait([
        '손끝으로 따뜻한 애액이 흘러내리는 것이 느껴진다…… 조금 더 깊숙이 들어갈 수 있을 것 같다.',
      ]);
    }
  }

  async prepare_virgin(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '응…… ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 명령이라면야……',
    ]);
    await attacker.print_and_wait(['양손으로 스스로 하반신의 좁은 틈새를 벌리자,']);
    await attacker.print_and_wait([
      '축축한 점액이 뜨거운 숨결과 함께 문이 열리듯 모습을 드러낸다.',
    ]);
    await defender.say_and_wait(['그렇게 뚫어져라 쳐다보면…… 조금 부끄러운걸~']);
  }

  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.stimulate_g_spot_by_finger(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['읏❤️~~~~~~~']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가장 민감한 곳을 찾아내, 살짝 긁어내기만 해도 질 내의 꿈틀거림을 느낄 수 있다.',
      ]);
      await attacker.print_and_wait([
        '혀를 내민 채 가쁘게 숨을 몰아쉬고, G스팟을 희롱할 때마다 허리가 활처럼 높이 휜다.',
      ]);
      await attacker.print_and_wait(['……이미 꽤 음탕한 표정이 되어버렸네.']);
    } else {
      await attacker.print_and_wait([
        '건드리기만 해도, 손끝에서 뜨거운 열기가 소용돌이치는 것이 느껴진다.',
      ]);
      await attacker.print_and_wait([
        '손가락을 빼내자, 집게손가락과 가운데 손가락 사이에 묻은 점액이 끈적하게 실을 그렸다.',
      ]);
      await attacker.say_and_wait([
        '있잖아…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        ', 여자아이의 몸 속에는 어째서 이런 곳이 있는 걸까?',
      ]);
      await defender.say_and_wait([
        '하아, 하앗~❤️…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 너무 능숙하구나.',
      ]);
      await attacker.print_and_wait([
        '거친 숨을 내쉬며 신음하던 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는, 동문서답을 내놓았다——',
      ]);
    }
  }

  async pet_anal(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '불쾌한 냄새는 나지 않고, 오히려 꼼꼼하게 관리한 덕에 유난히 깨끗하다.',
      ]);
      await attacker.print_and_wait([
        '하지만 그럼에도, 살짝 쓰다듬는 것만으로 경계하듯 꼬리가 바짝 섰다.',
      ]);
      await defender.say_and_wait([
        '저기…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 그럴 리는 없겠지만, 설마 그곳에 흥미가 있는 거니—— 히익❤️~!',
      ]);
      await attacker.print_and_wait([
        '말이 끝나기도 전에 집게손가락을 밀어 넣자, 자극에 놀란 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 날카로운 비명을 질렀다.',
      ]);
    } else {
      await defender.say_and_wait(['그곳은…… 내가 미리 깨끗하게 해뒀단다.']);
      await attacker.print_and_wait([
        '무언가 눈치챈 듯, 고개를 숙이고 일부러 시선을 피하던 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 먼저 대답했다.',
      ]);
      await attacker.print_and_wait([
        '그거 참 다행이네, 라며 손가락이 아무런 거침 없이 ',
        defender.sex,
        '의 뒷구멍으로 향했다.',
      ]);
      await attacker.print_and_wait([
        '손가락 하나, 손가락 둘, 첫 번째 관절, 두 번째 관절…… 한 단계 깊어질 때마다 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 앓는 소리가 들려온다.',
      ]);
      await defender.say_and_wait([
        '하아…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 역시 변태였구나.',
      ]);
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '양손으로 스스로의 엉덩이를 벌리자, 선홍빛 뒷구멍에서 간간이 「찌그덕, 찌그덕」 하는 소리가 울린다.',
    ]);
    await attacker.print_and_wait([
      '만약 저 뜨거운 입김을 내뿜는 뒷구멍 안에다, 입으로 공기를 불어 넣는다면……',
    ]);
    await defender.say_and_wait(['만약 그런 짓을 한다면, 내일은 무말랭이 간식 안 줄 거란다……']);
    await attacker.print_and_wait([
      '아무리 그 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '라 해도, 스스로 엉덩이를 벌리고 있는 상황에선 그런 짓까진 허락하지 않는 건가……',
    ]);
    await attacker.print_and_wait(['……그러면 그 구멍에 더더욱 바람을 불어넣고 싶어지잖아.']);
  }

  async pet_leg(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_leg(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '가늘고 매끄러운 허벅지, 훈련으로 굵어졌을 흔적은 전혀 찾아볼 수 없다.',
      ]);
      await attacker.print_and_wait([
        '위아래로 쓰다듬는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 다리, 어째서인지 「윈~ 윈~」 하는 소리를 내고 싶어진다.',
      ]);
      await attacker.print_and_wait([
        '하지만 더 나아가려던 찰나, 이 새하얗고 아름다운 두 다리가 비단뱀처럼 허리를 휘감아 왔다.',
      ]);
      await defender.say_and_wait([
        '저기, 아까부터 계속 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '만 만지고 있잖니…… 나도 만져봐도 될까?',
      ]);
      await attacker.print_and_wait([
        '……큰일 났다, 허리가 감긴 상태에서 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '를 이길 수 있을 거란 생각이 전혀 들지 않는다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '매끄러운 발가락과 발바닥, 오랫동안 달린 흔적이 전혀 보이지 않아 정말 신기하다.',
      ]);
      await attacker.print_and_wait([
        '딱히 특이한 취향이 있는 건 아니지만, 이런 발을 내 입안에 넣고 싶어졌다.',
      ]);
      await defender.say_and_wait(['세균에 감염될지도 모른단다?']);
      await attacker.say_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        ', 이렇게 예쁘고 냄새도 안 나는 발인데, 그럴 리 없잖아.',
      ]);
      await defender.say_and_wait(['어머…… 그런 거니?']);
      await attacker.print_and_wait([
        '그 말을 끝으로, 반대편에서 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 망설임 없이 ',
        attacker.get_colored_name(),
        '의 발을 끌어안고 똑같이 입에 넣으려 한다.',
      ]);
      await attacker.say_and_wait(['……아니아니, 역시 그만둘게.']);
    }
  }

  async pet_tail(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_tail(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['네 손가락을 꼬리 안쪽 털뿌리에 넣고, 아래로 빗어내린다.']);
      await attacker.print_and_wait([
        '정말 훌륭한 감촉, 부드럽고 갈라진 곳도 없다…… 그동안 얼마나 정성껏 관리해 왔는지 알 수 있다.',
      ]);
      await attacker.print_and_wait([
        '……일부 ',
        defender.get_uma_sex_title(),
        '에게 꼬리는 만져선 안 될 금기라서, 건드리기만 해도 공격받는다던데…… 사실일까?',
      ]);
      await defender.say_and_wait(['사실이란다~']);
      await attacker.print_and_wait([
        '미소를 지으며 대답하지만, 꼬리는 입과 다르게 기분 좋은 듯 좌우로 살랑살랑 흔들리고 있다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '꼬리 끝부분에 코를 가져다 대고, 그 냄새를 가볍게 맡아본다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 꼬리에서는 봄비 내린 흙처럼 싱그러운 냄새가 난다.',
      ]);
      await attacker.print_and_wait([
        '꼬리에 얼굴을 파묻고, 마음껏 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 체향을 즐기고 싶다.',
      ]);
      await defender.say_and_wait([
        '얘야…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 취향은 참 특이하구나~',
      ]);
      await attacker.print_and_wait([
        '그렇게 말하면서도, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 꼬리는 위아래로 흔들리며 뺨을 스치고 코끝을 간지럽혔다……',
      ]);
    }
  }

  async pull_tail(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pull_tail(attacker, defender, hook);
    }
    if (era.get('mark:100:동심') - era.get('mark:100:반발') === 3) {
      await defender.print_and_wait([
        defender.get_uma_sex_title(),
        '의 꼬리는, 분명 트레이너 전용 스위치가 아닐 텐데.',
      ]);
      await defender.print_and_wait([
        '하지만 지금은 어디에 있든 꼬리를 살짝 당기기만 하면, 자기도 모르게 엉덩이가 들썩인다.',
      ]);
      if (defender.sex_code !== 1) {
        await defender.say_and_wait(
          ['으음. 나 말야, 뭔가 무척 쉬운 여자가 되어버린 것 같구나——'],
          true,
        );
        await defender.print_and_wait([
          '꼬리가 당겨지는 통증과 함께 높이 치켜든 엉덩이가 좌우로 흔들리고, 애가 타는 하반신은 이미 애액을 뚝뚝 흘리고 있다.',
        ]);
        await defender.print_and_wait([
          '한 발짝 더 나아가, 꼬리가 당겨지고, 엉덩이를 맞으며, 음부를 희롱당하고 싶다. 머리부터 발끝까지 철저하게 유린당하며 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '의 냄새로 물들고, 머릿속이 하얘질 때까지 범해지고 싶다.',
        ]);
        await defender.print_and_wait([
          '……이런 생각을 하는 ',
          defender.get_uma_sex_title(),
          '가, 분명 나 하나만은 아니겠지?',
        ]);
      }
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 꼬리를 힘껏 잡아당긴다.',
      ]);
      await attacker.print_and_wait(['조금만 힘을 주어도, 엉덩이가 번쩍 치켜올라간다.']);
      await attacker.print_and_wait([
        '분명 ',
        defender.get_uma_sex_title(),
        '의 금역이자, 닿기만 해도 공격받는 부위일 텐데,',
      ]);
      await attacker.print_and_wait([
        '이 잿빛 꼬리를 거칠게 잡아당겨도, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 전혀 반항하지 않는다.',
      ]);
      await defender.say_and_wait(['으음…… 내일은 무말랭이 안 줄 거란다?']);
      await attacker.print_and_wait([
        '입술을 삐죽이며 소심하게 항의하고 있지만, 높이 치켜든 엉덩이는 벌써 알아서 요염하게 흔들리고 있다.',
      ]);
      await attacker.print_and_wait([
        '……너도 잔뜩 기대하고 있는 거지, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '?',
      ]);
    }
  }

  async cunnilingus(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.cunnilingus(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '의외로 부드러운 선홍빛에, ',
      defender.get_child_sex_title(),
      ' 특유의 향기가 피어오른다.',
    ]);
    await attacker.print_and_wait([
      '작은 혀로 핥아 올려본다…… 도대체 무슨 맛인지 말로 설명하기 어렵다.',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '의 혀 말야…… 무척 간지럽구나.',
    ]);
    await attacker.print_and_wait([
      '반대편에서는, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 손을 뻗어 얼굴을 파묻은 채 애쓰는 이의 머리를 쓰다듬고 있다.',
    ]);
    await attacker.print_and_wait([
      '……분명 주도하는 쪽은 이쪽인데, 오히려 길들여지는 듯한 안도감이 든다.',
    ]);
  }

  async suck_virgin(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.suck_virgin(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '반사적으로 오므려지는 두 다리를 억지로 벌리고, ',
      defender.get_child_sex_title(),
      ' 특유의 기관에 입을 가져다 댄다.',
    ]);
    await attacker.print_and_wait([
      '크게 입술을 벌려 핥고, 거친 입김을 불어넣는다. 촉촉한 입구에는 곧바로 끈적한 애액이 섞여 나온다.',
    ]);
    await defender.say_and_wait(['아앗…… 거긴❤️, 약점인데…… 닿아버렸잖니❤️~']);
    await attacker.print_and_wait([
      '무의식적으로 고개가 위로 들리고, 머리를 쓰다듬던 두 손도 처음처럼 여유롭지 못한 채 뒷머리를 감싸 안으며 가볍게 밀어붙인다.',
    ]);
    await attacker.print_and_wait([
      '아무리 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '라도, 더 높은 쾌감을 좇고 싶어지는 법이구나.',
    ]);
    await attacker.print_and_wait([
      '……그렇게 생각하며, 뜨거운 물결이 쏟아지기 전에 다시 한번 진득하게 핥아 올렸다.',
    ]);
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.print_and_wait(['바닥에 쪼그려 앉은 채, 토끼처럼 두 다리를 활짝 벌리고 있다.']);
      await attacker.print_and_wait(['고개를 들자, 눈앞에 역광을 받은 「거대한 육봉」이 서 있다.']);
      await defender.say_and_wait(['어머나…… 정말 늠름하구나.']);
      await attacker.print_and_wait([
        '명령에 따라, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 새빨개진 얼굴을 육봉에 가져다 댄다. 기둥뿌리를 핥아 올리면서 코끝으로 위아래를 비비적대며 그 「늠름한」 체취를 탐욕스럽게 들이마신다.',
      ]);
      await defender.say_and_wait(['하앗❤️…… 무척 신선한 냄새란다❤️~']);
      await attacker.print_and_wait([
        '고환에 애정 어린 입맞춤을 남기자, 이내 질척이는 물소리가 들려오기 시작했다……',
      ]);
    } else {
      await defender.say_and_wait([
        '『육봉 청소』 같은 걸 시키다니…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 취향도 참 남다르구나.',
      ]);
      await attacker.print_and_wait([
        '육봉 앞에 엎드려, 코끝으로 귀두를 꾹 누른 채 체취를 맡으며 대답한다.',
      ]);
      await attacker.print_and_wait([
        '이윽고 붉은 입술 사이로 혀가 튀어나와 귀두의 테두리를 핥았다. 마치 정말로 청소를 하듯 좌우로 훑으며 한 바퀴 빙글 돌렸다.',
      ]);
      await attacker.print_and_wait([
        '치구가 혀끝에 모여들었지만, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 전혀 거부감 없이 몽롱한 눈빛으로 그것을 입에 머금더니 꿀꺽 삼켜버렸다.',
      ]);
      await defender.say_and_wait([
        '자, 『창끝』 손질이 다 끝났단다. 이 정도면 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 누구를 상대로 『영토 확장』을 하든 문제없을 게야~',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 미소 지으며 말했지만, ',
        defender.sex,
        '의 코는 여전히 육봉에 닿은 채 떨어질 기미를 보이지 않는다……',
      ]);
    }
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait([
      '딥스로트를 해달라는 요구를 듣고는, 가벼운 항의의 뜻으로 육봉을 살짝 깨물었다.',
    ]);
    await defender.print_and_wait([
      '하지만 진심으로 항의하는 건 아니었는지, 이내 스스로 기둥을 끝까지 삼켜 넣었다.',
    ]);
    await defender.print_and_wait([
      '목구멍 깊숙이 들어온 육봉을 위아래로 삼키며, 잠수 훈련이라도 하듯 일정한 리듬으로 숨을 고른다.',
    ]);
    await defender.print_and_wait([
      '코로는 육봉에서 풍겨오는 「수컷의 냄새」를 탐하고, 입가에는 목구멍까지 삼키려다 무의식중에 뽑힌 음모가 묻어 있다……',
    ]);
    await defender.say_and_wait(['아아…… 이거, 어쩌면 훈련으로 써먹을 수도 있겠구나.'], true);
    await defender.print_and_wait([
      '훈련장에서 스스로 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 육봉을 삼키는 상상이 머릿속을 스쳤지만, 산소 부족으로 인한 몽롱함 탓에 금세 흩어져버렸다.',
    ]);
    await defender.print_and_wait(['……이미 언제든 분출할 준비가 끝났다.']);
  }

  async force_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '「찰싹, 찰싹」 그리 크지 않은 소리와 함께, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 뺨에 육봉이 부딪혀 남긴 붉은 자국이 피어올랐다.',
    ]);
    await attacker.print_and_wait([
      '꼿꼿하게 선 육봉을 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 코끝에 들이대자, 정신이 아득해질 만큼 진한 「수컷의 체취」가 풍겨온다.',
    ]);
    await defender.say_and_wait([
      '으음…… 정말 너무하잖니, ',
      sys_get_colored_callname(defender.id, attacker.id),
      '. ',
      defender.get_child_sex_title(),
      '의 얼굴을 육봉으로 때리다니…… 이러면 미움받을지도 모른단다?',
    ]);
    if (era.get('mark:100:동심') - era.get('mark:100:반발') === 3) {
      await attacker.print_and_wait([
        '입으로는 그렇게 말하면서도, 육봉을 뚫어져라 바라보는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 두 눈은 이미 속마음을 다 드러내고 있었다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '는 스스로 자세를 고쳐 잡고, 귀두를 머금은 채 위아래로 핥기 시작했다——',
      ]);
      await defender.say_and_wait([
        '다른❤️…… ',
        defender.get_child_sex_title(),
        '에게는❤️, 이러면 안 된단다❤️?',
      ]);
      await attacker.print_and_wait([
        '흥분한 꼬리가 좌우로 거세게 흔들리고, 육봉을 삼키는 몸짓도 한층 격렬해졌다. 뺨에 남은 자국 아래에는 마음속 깊은 곳의 갈망이 숨어 있었다.',
      ]);
    } else {
      await attacker.print_and_wait(['……하지만 지금의 네가, 정말 그런 걸 신경이나 쓸까?']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 머리채를 잡고, 육봉을 연분홍빛 입술 속으로 거칠게 쑤셔 넣었다. 이빨에 부딪히지도 않고, 무척 수월하게 입안으로 파고들었다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '가 웅얼거리며 뭐라 말하지만, 전혀 알아들을 수 없다. 따뜻한 입안에서 잠들어 있던 혀가 강제로 깨어나 침입한 육봉을 받들며 봉사한다—— 그저 그 감촉을 음미하는 것만으로 충분하다.',
      ]);
      await defender.say_and_wait(['읏❤️…… 츄릅, 츄루룹❤️~']);
      await defender.say_and_wait(
        [
          sys_get_colored_callname(defender.id, attacker.id),
          '에게, 도구로 쓰이고 있구나❤️~',
        ],
        true,
      );
    }
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait([
      '항의 따위는, 쾌감 앞에서는 이미 아무런 의미도 없었다.',
    ]);
    await defender.print_and_wait(['머리채를 붙잡힌 채, 육봉이 아주 손쉽게 목구멍 깊숙이 쑤셔 박혔다.']);
    await defender.print_and_wait([
      '위아래로 오가는 피스톤질, 혀놀림, 육봉의 기둥뿌리 너머로 이따금 들려오는 신음소리…… 저 아이를 흥분시키기엔 충분하겠지?',
    ]);
    await defender.print_and_wait([
      '질식하지 않으려 안간힘을 쓰며 작은 입을 벌리고, 거친 피스톤질 사이사이로 간신히 숨을 몰아쉰다.',
    ]);
    await defender.say_and_wait(
      ['사용당하고 있어, 사용당하고 있어, 사용당하고 있어, 사용당하고 있어, 사용당하고 있어❤️~'],
      true,
    );
    await defender.print_and_wait(['불쾌한 걸까? 전혀 그렇지 않아…… 정말 이상하구나.']);
    await defender.print_and_wait(['오히려…… 도구로 쓰여진다는 쾌감마저 드는걸.']);
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '손끝이 기둥을 미끄러지듯 훑어내릴 때마다, 귀두 끝에 닿으면 붉게 달아오른 육봉이 펄떡인다.',
    ]);
    await defender.say_and_wait(['응…… 자꾸 보니까, 어쩐지 묘하게 귀여워 보이기도 하네~']);
    await attacker.print_and_wait([
      '그렇게 말하며 육봉에 입김을 살짝 불어넣고는, 오른손을 뻗어 기둥을 다정하게 감싸 쥐며 흔들었다……',
    ]);
    await defender.say_and_wait([
      '저기, ',
      sys_get_colored_callname(defender.id, attacker.id),
      ', 이 정도면 충분할까?',
    ]);
    await attacker.print_and_wait([
      '마치 육봉에게 속삭이듯, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 눈웃음을 지으며,',
    ]);
    await attacker.print_and_wait(['요염한 눈빛으로 제 손안의 「물건」을 바라보고 있다……']);
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait(['귀두를 머금자, 기둥이 펄떡거리며 부풀어 오른다.']);
    await defender.print_and_wait([
      '펄떡이는 핏줄을 따라 두 손을 교대로 미끄러뜨리자, 사내의 체취가 한층 짙어진다.',
    ]);
    await defender.say_and_wait([
      '츄릅❤️~ ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 꼬마 트레이너는 이미 참을 수 없는 것 같아 보이는구나——',
    ]);
    await defender.print_and_wait(['그렇게 말하며 귀두에 입을 맞췄다.']);
    await defender.say_and_wait([
      '쪽❤️~~~ 힘내렴, 잔뜩 뿜어내 주면~ 남김없이 마셔줄 테니까❤️~',
    ]);
  }

  async force_hand_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_hand_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 손을 억지로 붙잡아, 육봉에 얹고 위아래로 흔들게 했다.',
    ]);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '는 반항하지 않고 순순히 두 손으로 훑어 내렸다. 하지만 언제나 자애롭던 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 의미심장한 미소를 지었다.',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '……정말 쉽게 만족해 버리는구나❤️~',
    ]);
    await attacker.print_and_wait([
      '여전히 평화로운 미소를 지은 채 바라보고 있지만, 그 미소 속에 묘하게 도발적인 기색이 섞여 있다.',
    ]);
    await attacker.print_and_wait([
      '……',
      sys_get_colored_callname(attacker.id, defender.id),
      '에게 더 심한 짓을 하고 싶어졌다.',
    ]);
    await attacker.print_and_wait([
      '기둥을 쓸어내리는 손가락의 쾌감과 함께, 그런 욕망이 점점 더 크게 부풀어 오른다——',
    ]);
  }

  async force_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_hand_and_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 손이 여전히 육봉을 흔들고 있음에도, 반대쪽 손으로 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 머리채를 잡아 귀두를 입안으로 쑤셔 박았다.',
    ]);
    await attacker.print_and_wait([
      '……이건 전부 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 나쁜 거야. ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 너무 야해서, 너무 다정해서, 날 유혹해서 그런 거잖아——',
    ]);
    await attacker.print_and_wait([
      '귀가 쫑긋쫑긋 떨리는 와중에도, 계속해서 힘을 주어 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 머리를 짓눌렀다.',
    ]);
    await attacker.print_and_wait([
      '아무런 저항도 받지 않았고, 오히려 입안의 귀두는 혀의 열렬한 환영을 받으며, 기둥을 문지르는 두 손은 묵묵히 자신의 사명을 다하고 있었다.',
    ]);
    await defender.say_and_wait(['읏❤️~~~ 도구처럼, 범해지고 있잖니❤️~'], true);
    await defender.say_and_wait(['이 쾌락을 잊지 못하게 되어버릴 것만 같구나❤️~~~'], true);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 비취색 눈동자 속에, 몽롱한 분홍빛 욕망이 일렁인다……',
    ]);
  }
};