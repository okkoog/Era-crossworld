const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const AcuteNormalMakingOuts1 = require('#/event/ero/ero-lines-100/normal-making-outs-1');

const { get_breast_cup } = require('#/data/info-generator');

module.exports = class extends AcuteNormalMakingOuts1 {
  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    if (get_breast_cup(100, true) >= 'C') {
      await attacker.print_and_wait([
        '풍만한 가슴이 붉은 구릿빛 육봉을 감싸고, 매끄러운 귀두 위에는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 상냥한 얼굴이 비친다.',
      ]);
      await defender.say_and_wait([
        '설마 내 가슴으로 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 그곳을 감쌀 수 있는 날이 올 줄은 몰랐구먼～',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 상냥하게 웃으며, 손가락 하나로 귀두 위에 가볍게 원을 그린다.',
      ]);
      await attacker.say_and_wait(['……이제 슬슬 시작하자.']);
      await defender.say_and_wait(['좋단다～']);
      await attacker.print_and_wait([
        '가볍게 고개를 끄덕이며 화답한 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 두 손을 자신의 가슴 옆에 대고 가슴을 모아 쥐어짜며 압박한다.',
      ]);
      await defender.say_and_wait([
        '내 가슴은 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 덕분에 이렇게 커진 거란다～ 그러니 마음껏 즐기려무나❤️～',
      ]);
    } else {
      await defender.print_and_wait([
        '작은 가슴으로 붉은 구릿빛 육봉을 감싸기에는 물리적으로 역시 너무 벅찼다.',
      ]);
      await defender.print_and_wait([
        '너무 무리하게 하다간 마치 줄톱처럼 육봉에 고통만을 안겨줄 뿐이리라.',
      ]);
      await defender.print_and_wait(['……하지만 가슴으로 아예 할 수 없는 것은 아니다.']);
      await defender.print_and_wait([
        '가슴을 쥐어짜 모아 분홍빛 유두를 육봉 기둥에 밀착시키고, 부드러운 가슴 사이로 육봉을 위아래로 문지르게 한다.',
      ]);
      await defender.say_and_wait(['영차, 영차～']);
      await defender.print_and_wait(['유두가 스치며 자극하는 와중에 육봉은 조금씩 부풀어 오른다……']);
    }
  }

  async ask_tit_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_tit_and_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait(['가슴살을 쥐어짜 모으는 한편, 혀를 길게 내밀며,']);
    await attacker.print_and_wait([
      '마치 미끼에 걸려든 물고기처럼, 귀두가 위아래로 움직이는 모양에 맞춰 혀를 흔든다.',
    ]);
    await attacker.print_and_wait(['입앞에 닿을 때마다 혀는 어김없이 귀두 테두리 안으로 파고들었다.']);
    await defender.say_and_wait(['으음❤️……웁, 우붑❤️～푸하❤️～하아❤️～']);
    await attacker.print_and_wait([
      '표정에서는 음란함을 찾아볼 수 없는데도, ',
      defender.get_child_sex_title(),
      '가 내서는 안 될 야릇하고 외설적인 소리를 연신 흘리고 있다.',
    ]);
  }

  async fuck_tit(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.fuck_tit(attacker, defender, hook);
    }
    if (get_breast_cup(100, true) >= 'C') {
      await attacker.print_and_wait([
        '거칠게 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '를 밀어 넘어뜨리고, 끊임없는 「트레이닝」 덕분에 풍만해진 가슴 사이로 육봉을 밀어 넣는다.',
      ]);
      await attacker.print_and_wait([
        '양손으로 분홍빛 유두를 잡아당기며 가슴 골 사이로 하반신을 연신 왕복해, 가슴의 부드러움을 마음껏 만끽한다.',
      ]);
      await attacker.say_and_wait(
        [
          '…… ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 가슴은 나 때문에 커진 거니까 내 거야. 내가 마음껏 즐겨도 되는 거라고——',
        ],
        true,
      );
      await defender.say_and_wait([
        '그러게 말이다, 내 가슴은 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 것이지……',
      ]);
      await attacker.print_and_wait([
        '얼굴을 붉히면서도 자신이 억지로 파이즈리를 당하고 있다는 사실을 전혀 개의치 않는 듯한 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 여전히 미소를 짓고 있다.',
      ]);
      await defender.say_and_wait([
        '응❤️…… 그러니까 그렇게 서두르지 않아도 된단다. ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 원한다면 언제든 가슴으로 해줄 테니까～.',
      ]);
      await attacker.print_and_wait([
        '유두를 붙잡힌 채 통증으로 눈가에 눈물까지 고인 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는, 여전히 오른손을 뻗어 침범자의 이마를 어루만지려 한다.',
      ]);
      await attacker.print_and_wait([
        '……하고 싶다, 더욱더 깊숙이 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '를 범하고 싶다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '거칠게 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가슴에 삽입하고 싶다.',
      ]);
      await attacker.print_and_wait([
        '울고 싶어도 눈물이 나지 않고, 혐오스러우면서도 어쩔 도리가 없으며, 미소를 지으면서도 겁먹은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 표정을 바라본다. 그런 표정을 즐기며 가슴 사이에 대고 거칠게 피스톤 운동을 한다.',
      ]);
      await attacker.print_and_wait([
        '하지만 막상 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '를 밀어 넘어뜨리고 육봉을 가슴 앞에 들이밀자, 도저히 불가능하다는 것을 깨닫는다.',
      ]);
      await attacker.print_and_wait([
        '첫째는 가슴이 너무 작아 끼울 수가 없고, 둘째는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 여전히 미소를 띤 채 조금도 두려워하지 않기 때문이다.',
      ]);
      await defender.say_and_wait([
        '비록 끼우지는 못하겠지만 말이다, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 꼭 가슴으로 하고 싶다면 여기에 찔러넣어 보렴❤️～',
      ]);
      await attacker.print_and_wait([
        '말을 마치며, 마치 방향을 안내하듯이. ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 자신의 유두 앞에 육봉이 딱 지나갈 만한 크기의 하트를 만들어 보인다.',
      ]);
    }
  }

  async fuck_tit_and_mouth(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.fuck_tit_and_mouth(attacker, defender, hook);
    }
    await attacker.print_and_wait(['유두를 잡아당기고 가슴을 드나드는 것만으로는 성에 차지 않는다.']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '도 음란한 표정을 짓게 만들고 싶다, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 미소를 무너뜨리고 싶다.',
    ]);
    await attacker.print_and_wait([
      '굵직한 육봉이 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 미소를 향해 거칠게 돌진한다.',
    ]);
    await attacker.print_and_wait([
      '문을 부수고 입안으로 난입했으나 상상했던 저항은 없었고, 오히려 혀와 타액의 극진한 봉사가 맞이한다.',
    ]);
    await attacker.print_and_wait([
      '순리에 따르는 듯, 혹은 이미 예상했다는 듯, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 눈가에 부드러운 미소가 번진다.',
    ]);
  }

  async suck_anal(attacker, defender, hook) {
    if (attacker.id !== 100) {
      return await super.suck_anal(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.say_and_wait([
        '으음…… 정말로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '에게 이런 취향이 있을 줄은 몰랐는데……',
      ]);
      await defender.print_and_wait([
        '역시 이런 플레이는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '라 해도 받아들이기 힘든 걸까……',
      ]);
      await defender.print_and_wait([
        '……하지만 말로는 툴툴대면서도, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '는 스스로 당신의 뒤에 무릎을 꿇었다.',
      ]);
      await attacker.say_and_wait([
        '으음…… 이런 짓은 다른 ',
        attacker.get_child_sex_title(),
        '한테 하면 안 된단다?',
      ]);
      await defender.print_and_wait([
        '잔소리를 늘어놓으면서도, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '는 혀를 내밀어 애널 주위를 위아래로 핥아 올린다——',
      ]);
    } else {
      await defender.say_and_wait(['우붑…… 으음❤️～쪼옥～푸풉……']);
      await attacker.print_and_wait([
        '당신의 엉덩이를 붙잡고 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 정성껏 애널을 핥아대기 시작했다. 이따금씩 입을 맞출 때마다 전류 같은 쾌감이 두뇌를 강타한다.',
      ]);
      await attacker.print_and_wait(['……잠깐, 이거 자극이 너무 강한데.']);
      await defender.say_and_wait([
        '웁…… 저기, ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 이왕 나한테 이런 일을 시켰으니 쉽게 보내주진 않을 거란다? 쪼옥❤️～～～',
      ]);
      await attacker.print_and_wait([
        '눈앞의 트레이너가 쾌감으로 목소리를 잃어가는 것을 보며, ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 역시 흥분으로 인해 조금씩 「축축하게」 젖어 들었다.',
      ]);
      await attacker.print_and_wait([
        '뚝, 뚝. 누구에게서 흘러내리는지 모를 액체 떨어지는 소리가 울린다.',
      ]);
      await attacker.print_and_wait([
        '……아무래도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 「잠재력」을 조금 과소평가했던 모양이다.',
      ]);

      await defender.say_and_wait(['응…… 으으, 푸루루, 웁~']);
      await attacker.print_and_wait([
        '당신의 뒤에 엎드린 채, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 탐욕스럽게 입술과 혀를 놀린다——',
      ]);
    }
  }

  async suck_nipple(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.suck_nipple(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.print_and_wait([
        '그저 유두를 빨고 싶다고 말했을 뿐인데, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 순순히 가슴을 모아 받쳐 들고 다가왔다.',
      ]);
      await defender.say_and_wait([
        '살살 해주려무나, ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 나한테도 그렇고, 다른 ',
        defender.get_uma_sex_title(),
        '한테도 말이란다～',
      ]);
      await attacker.print_and_wait(['의미심장한 대사는 애써 무시하며 얼굴을 가까이 대고 살짝 빨아들인다.']);
    } else {
      await attacker.print_and_wait([
        '충혈되어 단단해진 붉은 유두는 마치 하루라도 빨리 입술과 혀의 포로가 되고 싶어 안달이 난 것처럼 보인다.',
      ]);
      await defender.say_and_wait(['어라라…… 딱히 기대하진 않았단다.']);
      await attacker.print_and_wait(['이윽고 얼굴을 가까이 대고 살짝 빨아들인다.']);
      await defender.say_and_wait(['아❤️～']);
      await attacker.print_and_wait(['그 뒤를 이어 감전된 듯한 신음이 터져 나온다.']);
    }
  }

  async bite_nipple(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.bite_nipple(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '유두를 가볍게 깨물자, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 민감하게 반응하며 신음을 흘렸다.',
    ]);
    if (Math.random() < 0.5) {
      await defender.say_and_wait([
        '으음❤️…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 그렇게 세게 깨물면…… 응～ 꼭지가 떨어져 나가겠어?',
      ]);
      await attacker.print_and_wait([
        '민감함이 유발하는 찌릿함과 통증을 참아내며, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 여전히 가슴에 얼굴을 묻은 당신을 부드럽게 쓰다듬어 준다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '아무래도 너무 세게 깨문 모양인지, 신음 소리 사이에 아파하는 기색이 섞여 든다.',
      ]);
      await defender.say_and_wait([
        '후우❤️…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 그렇게 깨물어도 모유는 안 나온단다?',
      ]);
      await attacker.print_and_wait([
        '당신의 뒤통수를 가볍게 콩 쥐어박고는, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 변함없이 당신을 상냥하게 가슴으로 품어준다.',
      ]);
      await attacker.print_and_wait(['정말로 아파서 그런 것인지, 아니면 부끄러워서 짐짓 튕기는 것인지 분간이 가지 않는다.']);
    }
  }

  async ask_milk_and_hand_job(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.ask_milk_and_hand_job(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await defender.say_and_wait(['가슴을 빨면서 거길 만져달라는 게냐…… 좋단다～']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 무릎을 베고 누워 눈앞의 가슴을 안심하고 빠는 한편, 아래쪽의 굵직한 육봉은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 부드러운 손길로 애무받는다.',
      ]);
      await defender.say_and_wait(['어머나…… 아주 기분 좋아 보이는구나～']);
      await attacker.print_and_wait([
        '상냥해 보이는 목소리 뒤로 가슴 옆을 통해 슬쩍 훔쳐보니, 얼굴을 붉힌 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 서서히 단단하게 부풀어 오르는 육봉 쪽으로 이따금 시선을 던지는 모습이 보였다.',
      ]);
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 무릎을 옆으로 벤 채, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가슴을 탐욕스럽게 양쪽 번갈아 가며 빨아대며 흔적을 남긴다.',
      ]);
      await attacker.print_and_wait([
        '가슴의 민감함을 견뎌내며 필사적으로 미소를 유지하는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 다른 한 손을 아래쪽으로 뻗었다.',
      ]);
      await attacker.print_and_wait(['쥐고, 붙잡고, 감싸고, 돌리고, 매만지는 다양한 손길이 오가는 와중에 육봉은 금세 충혈되어 우뚝 솟아오른다.']);
      await defender.say_and_wait([
        '으음～ 싸고 싶은게냐? 괜찮단다～ 참지 않아도 괜찮아～',
      ]);
      await attacker.print_and_wait(['몸과 마음이 한결 가벼워졌지만, 지나친 안도감 탓인지 은근히 장난기가 발동해 입안에 머금은 유두를 핥으면서 슬쩍 힘을 주어 깨물었다……']);
    }
  }

  async milk(attacker, defender, hook) {
    if (attacker.id !== 100 || attacker.sex_code === 1) {
      return await super.milk(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 무릎을 베고 누워, 마치 갓난아기처럼 충혈된 분홍빛 유두에서 흘러나오는 모유를 빨아들인다,',
      ]);
      await defender.print_and_wait([
        '약간 쌉싸름한 맛이 나지만 부드러운 우유 향이 감돌아, 오랫동안 음미하다 보니 목구멍 너머로 도리어 달콤함이 맴돈다.',
      ]);
      await attacker.say_and_wait([
        '으음…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 그렇게 좋다면야, 매일 아침 트레이닝 전에 몇 병씩 따로 짜서 보관해 둘까나……',
      ]);
      await defender.print_and_wait([
        '두 손으로 가슴을 모아 쥐어짜며 수유를 해주는 한편, 고개를 갸우뚱하는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '는 깊은 고민에 빠졌다.',
      ]);
    } else {
      await defender.print_and_wait([
        '자신의 담당 ',
        attacker.get_uma_sex_title(),
        '에게 수유를 받는다니, 부끄러운 감정이 들까? 당연히 든다.',
      ]);
      await attacker.say_and_wait([
        '요즘 가슴에서 나오는 우유가 좀 많아졌단다……',
        sys_get_colored_callname(attacker.id, defender.id),
        ', 괜찮다면 내가 처리하는 걸 좀 도와주지 않겠니?',
      ]);
      await defender.print_and_wait([
        '하지만 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 부탁이라면 그것 또한 트레이너의 책무이기에, 안심하고 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 무릎에 누운 채 분홍빛 유두에서 배어 나오는 우유를 계속해서 들이킨다.',
      ]);
      await defender.print_and_wait([
        '다른 한편으로, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '는 무릎 위에 놓인 당신의 머리를 지탱해 주며 자애로운 미소를 짓고 있다……',
      ]);
    }
  }

  async ask_non_penetrative(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_non_penetrative(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '팽팽하게 선 기둥이 뒤쪽에서 곧장 파고들어 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 허벅지 사이에 끼인다.',
      ]);
      await attacker.print_and_wait([
        '기둥 표면에 밀착된 음순이 애액을 흘려보내며 위아래로 움직여 봉사한다.',
      ]);
      await defender.say_and_wait([
        '에헤헤…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '은 정말 기운차구먼～',
      ]);
      await attacker.print_and_wait([
        '손바닥으로 육봉의 귀두 부분을 어루만지며, 골반과 엉덩이를 흔들어 육봉 기둥을 위아래로 정성껏 섬긴다……',
      ]);
      await attacker.print_and_wait([
        '…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 여전히 참 상냥하다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '기둥을 음순에 밀착시킨 채 앞뒤로 비벼대자, 눈앞에 있는 ',
        defender.get_teen_sex_title(),
        '의 몸에서 이따금 푸념 섞인 질척한 소리가 울려 퍼진다.',
      ]);
      await defender.say_and_wait(['으음❤️……아❤️～']);
      await attacker.print_and_wait([
        '지나치게 애를 태운 탓인지, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 신음을 흘릴 때마다 육봉 기둥 주변으로 뜨거운 열기가 훅 끼쳐온다.',
      ]);
      await defender.say_and_wait(['으음❤️…… 자궁 쪽이…… 조금 간질거리는구나～']);
      await attacker.print_and_wait([
        '자신의 아랫배를 살포시 어루만지며, 다소 감질난다는 듯이, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 더욱 적극적으로 육봉을 향해 골반을 흔들어댄다.',
      ]);
    }
  }

  async sixty_nine(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.sixty_nine(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '풍만하고 즙이 넘쳐나는 남국의 과일 같은 그곳을 연신 핥아대자, 아래에 누운 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 역시 지지 않겠다는 듯 받아친다.',
    ]);
    await attacker.print_and_wait([
      '두 육체가 한데 겹쳐진 채 서로 혀를 내밀며 겨루기를 시작한다.',
    ]);
    await defender.say_and_wait(['우붑❤️～ 지지 않을 게다…… 우붑❤️～']);
    await attacker.print_and_wait([
      '이미 그곳이 홍수처럼 범람했음에도, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 반대편에서 여전히 열심히 봉사하고 있다.',
    ]);
    await attacker.print_and_wait([
      '지고 싶지 않아서일까? 아니면 그저 성욕에 굴복한 걸까? 어느 쪽이든 상관없다——',
    ]);
    await attacker.print_and_wait([
      '…… 온 얼굴이 하얀 얼룩으로 뒤덮이기 전까지는 절대로 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '를 놓아주지 않을 것이다.',
    ]);
  }

  async ask_hair_fuck(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_hair_fuck(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '고개를 돌리자 찰랑이는 은빛 장발이 육봉 위로 흘러내린다. 그중 한 가닥을 붙잡아 육봉에 세 바퀴 감아올리니, 마치 꽁꽁 묶어버리려는 형상이다.',
    ]);
    await defender.say_and_wait([
      '으음…… 여기에 싸 버리면, 내 머리카락에 절대로 씻겨 나가지 않을 육봉의 냄새가 배어버리겠지……',
    ]);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '는 그렇게 말하면서도, 머리카락을 감아쥔 손으로 육봉을 쓸어내리는 동작을 멈추지 않았다.',
    ]);
    await defender.say_and_wait([
      '만약 ',
      sys_get_colored_callname(defender.id, 301),
      '나…… 다른 ',
      defender.get_uma_sex_title(),
      '한테 머리카락에서 나는 냄새를 들키면…… 어떻게 되려나?',
    ]);
    await attacker.print_and_wait([
      '…… 생각하지 말자, 아무것도 생각하고 싶지 않다. ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 손가락 끝에 감겨오는 은빛 머리타래가 점점 더 빽빽하게 꼬여간다……',
    ]);
  }

  async force_hair_fuck(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_hair_fuck(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 머리카락을 낚아채 육봉 기둥 위로 흩뜨린 뒤 한 움큼 거머쥔다. 은백색 머리카락을 감싸 쥔 채 거칠게 비벼댄다.',
    ]);
    await attacker.print_and_wait([
      '다른 한 손으로는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 머리를 눌러 육봉에 밀착시키고, ',
      defender.sex,
      '의 머리카락이 「사용」당하는 이 광경을 똑똑히 지켜보게 만든다.',
    ]);
    await attacker.print_and_wait([
      '…… ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 몸 곳곳에 흔적을 남기겠다…… 머리카락 역시 예외는 아니다.',
    ]);
    await defender.say_and_wait([
      '머리카락마저 차지하려는 게냐…… ',
      sys_get_colored_callname(defender.id, attacker.id),
      '은 정말 욕심쟁이구나～',
    ]);
    await attacker.print_and_wait([
      '미소를 지으며 말하더니, 누구의 강요도 없이, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 스스로 육봉을 향해 정수리를 숙여온다.',
    ]);
    await attacker.print_and_wait([
      '마치 시집갈 날을 기다리는 ',
      defender.get_teen_sex_title(),
      '처럼, 분출을 앞둔 육봉이 ',
      defender.sex,
      '의 머리카락 위에 순백의 무구를 씌워주기를 기다린다.',
    ]);
    await attacker.print_and_wait([
      '…… ',
      defender.sex,
      '의 원래 회백색이던 머리카락 위에, 평생 지워지지 않을 표식을 새겨넣는다.',
    ]);
  }

  async ask_armpit_intercourse(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_armpit_intercourse(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '는 순순히 팔을 높이 들어 올려 매끄러운 겨드랑이를 드러내 보였다.',
    ]);
    await attacker.print_and_wait([
      '육봉이 이내 그곳으로 파고들어 겨드랑이 골을 따라 앞뒤로 비벼대기 시작한다.',
    ]);
    await attacker.print_and_wait([
      '거부감을 느끼기는커녕, 도리어 꽤 흥미롭다는 듯 겨드랑이 사이를 드나드는 육봉으로 시선을 옮긴다.',
    ]);
    await defender.say_and_wait([
      '이게 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '이 좋아하는 놀이인 게냐…… 왠지 좀 귀엽구나～',
    ]);
  }

  async force_armpit_intercourse(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_armpit_intercourse(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '강제로 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 오른팔을 들어 올린 뒤, 잔뜩 부풀어 오른 육봉을 겨드랑이 사이에 끼워 넣고 노골적으로 문지른다.',
    ]);
    await attacker.print_and_wait([
      '마치 일부러 냄새를 묻히려는 것처럼, 육봉을 겨드랑이 구석구석에 문지르고 비벼댄다.',
    ]);
    await attacker.print_and_wait([
      '하지만 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 평소처럼 전혀 불쾌해하지 않고, 도리어 코를 킁킁거리며 냄새를 맡기까지 한다——',
    ]);
    await defender.say_and_wait(['아, 이 향기는 절대로 씻기지 않을 것 같구나❤️～']);
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '매끄러운 발바닥은 경기장을 거침없이 내달리던 흔적을 조금도 찾아볼 수 없을 정도다.',
    ]);
    await attacker.print_and_wait([
      '그리고 지금은 양발을 한데 모아, 유연한 발가락으로 붉게 달아오른 육봉 기둥을 위아래로 농락하고 있다.',
    ]);
    await defender.say_and_wait(['영차, 영차…… 위아래로 흔들어주면 더 기분이 좋으냐?']);
    await attacker.print_and_wait([
      '발가락으로 육봉 기둥을 붙잡고 마치 장난감처럼 위아래로 흔들어댄다. 겨우 발가락일 뿐인데도 육봉을 다루는 솜씨가 마치 타고난 천성 같다.',
    ]);
    await defender.say_and_wait([
      '다음번에 발로 해줄 때는 스타킹을 신어달라고? 내 참…… ',
      sys_get_colored_callname(defender.id, attacker.id),
      ', 어쩔 수가 없는 아이구나~',
    ]);
  }

  async force_foot_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_foot_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '스타킹을 신은 두 발을 붙잡아, 육봉 주변을 억지로 비비게 만든다.',
    ]);
    await attacker.print_and_wait([
      '교합을 위한 기관도 아니고, 당장 다음 레이스에서 질주해야 할 두 다리이며, 심지어 검은색 스타킹에 가려져 있음에도 불구하고, 걷잡을 수 없는 흥분감이 발 사이의 육봉을 더욱 거대하게 팽창시킨다.',
    ]);
    await defender.say_and_wait([
      '어라라…… 네가 무슨 생각을 하는지 다 안단다, ',
      sys_get_colored_callname(defender.id, attacker.id),
      '.',
    ]);
    await attacker.print_and_wait([
      '그 이면에는 마치 「난 오직 너만을 위해 이 검은 스타킹을 신은 거란다」라고 속삭이는 듯한 미소가 걸려 있다.',
    ]);
    await defender.say_and_wait([
      '다음 레이스 말이다…… 이 스타킹을 신은 채로 나가고 싶은데, 괜찮겠니❤️～',
    ]);
    await attacker.print_and_wait([
      '……그런 소리를 해버린 이상, 이 스타킹이 앞으로 어떻게 망가지게 될지는 아무도 모른다고?',
    ]);
  }

  async ask_tail_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_tail_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '스스로 육봉을 휘감아오는 은회색 꼬리. 몇 번 거칠게 움직이자 이내 꼬리 전체가 끈적한 액체로 뒤범벅이 된다.',
    ]);
    await defender.say_and_wait([
      '저기, ',
      sys_get_colored_callname(defender.id, attacker.id),
      '…… 슬슬 때가 된 것 같구나? 꼬리 말고 다른 곳도……',
    ]);
    await attacker.print_and_wait([
      '……아니, 아직 부족해. 훨씬 더 많이…… 꼬리에 더 많은 낙인을 찍어야겠어.',
    ]);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 꼬리 틈새로 육봉을 밀어 넣고 다시 한번 휘젓는다. ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 꼬리가 더 많은 액체에 푹 절여지도록.',
    ]);
    await attacker.print_and_wait([
      '…… 누구든 꼬리를 보자마자 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 자신의 소유라는 걸 한눈에 알 수 있게 만들어야 하니까.',
    ]);
  }

  async force_tail_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_tail_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '손으로 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 꼬리를 붙잡아 육봉에 감고 위아래로 문지르며, ',
      defender.sex,
      '의 꼬리에 다시 한번 하얀 액체를 흩뿌린다.',
    ]);
    await attacker.print_and_wait([
      '바라보니 은회색 꼬리 전체가 마치 하얀 범벅 속에 푹 담겼다 나온 듯한 형상이다.',
    ]);
    await attacker.print_and_wait(['…… 하지만 여전히 부족하다. 원하는 수준에는 한참 미치지 못한다.']);
    await defender.say_and_wait([
      '하아…… 정말 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '한테는 못 당하겠구먼.',
    ]);
    await attacker.print_and_wait([
      '그 말을 들은 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 한숨을 쉬면서도, 몸에서는 정직하게 액체를 뚝뚝 흘리고 만다.',
    ]);
    await defender.say_and_wait([
      '다음 레이스가 끝날 때까지는 꼬리를 씻지 않을 테니까…… 그러니——',
    ]);
    await defender.say_and_wait(['꼬리 말고 다른 곳도 봐주려무나❤️～?']);
  }
};