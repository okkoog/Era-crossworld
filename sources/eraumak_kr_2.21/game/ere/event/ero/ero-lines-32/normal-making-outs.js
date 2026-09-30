const era = require('#/era-electron');

const {
  check_erect,
  check_lubrication,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');

const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (defender.id !== 32 || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    await defender.say_and_wait('그렇게나 가슴이 좋은 건가……❤️');
    era.println();
    await attacker.print_and_wait('눈앞의 잘 익은 과실이, 양손의 움직임에 따라 이리저리 흔들렸다.');
    await attacker.print_and_wait('부드러운 유육이 영리한 손길 아래에서 온갖 모양으로 변해갔다.');
    era.println();
    await defender.say_and_wait('아…… 그렇게 고개를 파묻지는……');
    era.println();
    await attacker.print_and_wait('가슴 사이의 계곡에 머리를 파묻고, 깊게 숨을 들이마셨다.');
    await attacker.print_and_wait('소녀의 향기와 우마무스메의 발정취가 한데 뒤섞여 있었다.');
    await attacker.print_and_wait('이미 충분히 성숙한 과실은, 이제 맛볼 준비가 끝난 듯했다.');
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        '손가락이 삽입되는 순간, 애액이 마치 배출구를 찾은 것처럼 구멍에서 꿀꺽꿀꺽 흘러나왔다.',
      );
      era.println();
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은 정말 야하구나.',
      ]);
      await attacker.say_and_wait('여기가 이렇게나 젖어 있어.');
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……그런 건, 굳이 입 밖으로 내지 않아도 괜찮잖아……',
      ]);
    } else {
      await defender.say_and_wait('응……❤️');
      era.println();
      await attacker.print_and_wait(
        '손가락이 마치 진흙탕 속에 들어간 것 같았다. 젖어있는 비옥한 토양이 개발되기를 기다리고 있었다.',
      );
      era.println();
      await defender.say_and_wait([
        '빨리…… 어서 와주게, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait('투명한 애액이 은밀한 틈새에서 끊임없이 떨어졌다.');
      await attacker.print_and_wait([
        '엉덩이를 계속해서 흔들며, ',
        attacker.get_colored_name(),
        '이(가) 자신에게 손을 대도록 유혹했다.',
      ]);
      await attacker.print_and_wait('아무래도 완전히 교미할 준비가 된 모양이었다.');
    }
  }

  async prepare_virgin(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    if (era.get('mark:32:동심') <= 1) {
      await defender.say_and_wait('……너무하군……');
      era.println();
      await attacker.print_and_wait([
        '얼굴을 붉히면서도 거절하지 않는 것을 보니, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 속마음은 이미 정해진 것 아닐까?',
      ]);
      await attacker.print_and_wait('하지만, 그냥 하는 건 별로 재미가 없는데……');
      await attacker.print_and_wait('차라리, 간청하는 말을 해보는 건 어때?');
      era.println();
      await defender.say_and_wait('정말 악취미적인 놀이로군……');
      await defender.say_and_wait([
        '부디…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 전용의 구멍이, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '을 위해 봉사할 수 있도록……',
      ]);
      await defender.say_and_wait('마음껏…… 나의 암컷구멍을 유린해 주게❤️');
      era.println();
      await attacker.print_and_wait('자신의 요구 때문에 억지로 내뱉은 말이었지만……');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 반응을 보니, 본인도 이런 음란한 말에 흥분해버린 듯했다.',
      ]);
    } else {
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait('지금 이 순간에도 끊임없이 흘러내리는 음액으로 가득 젖어 있었다.');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '이 자신의 하체에 달린 요염한 작은 입을 벌렸다.',
      ]);
      await attacker.print_and_wait('오랫동안 기다려온 무언가가 들어오기만을 기다리고 있었다.');
    }
  }

  async pet_anal(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.pet_anal(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 발정난 애액을 윤활제 삼아 묻힌 뒤, 손을 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 항문 앞에 갖다 대었다.',
    ]);
    if (era.get('abl:32:항문내성') >= 3) {
      await attacker.print_and_wait(
        '분명 출구여야 할 곳이 압박에 의해 자연스럽게 살짝 벌어졌다.',
      );
      await attacker.print_and_wait('엉덩이도 무의식중에 압박의 리듬에 맞춰 흔들리기 시작했다.');
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️ 거긴 안 돼❤️',
      ]);
      era.println();
      await attacker.print_and_wait(
        '거절하는 말이었지만, 목소리에 담긴 의미는 완전히 계속해달라는 뜻이었다.',
      );
      await attacker.print_and_wait(
        '하지만 더 나아가지 않고, 애를 태우듯 가볍게 압박만을 반복했다.',
      );
    } else {
      era.println();
      await defender.say_and_wait('잠깐! 그곳은!');
      era.println();
      await attacker.print_and_wait([
        '못 들은 척하며 손가락으로 가볍게 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 항문을 압박했다.',
      ]);
      await attacker.print_and_wait('굳게 닫힌 입구가 익숙치 않은 자극에 가늘게 떨리고 있었다.');
      await attacker.print_and_wait(
        '하지만 이런 풋풋함이야말로, 조교할 가치가 있는 법 아니겠는가?',
      );
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    if (era.get('abl:32:항문내성') >= 3) {
      await defender.say_and_wait('빨리…… 어서 이 저속하고 발정난 음란한 항문을 벌해 주게❤️');
      era.println();
      await attacker.print_and_wait([
        '힘껏 국부를 벌린 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 갈구하듯 음탕한 말을 내뱉으며, 성기가 삽입되기를 애타게 간청했다.',
      ]);
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '에 의해 개발된…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 취향대로 마음껏 사용하는 항문이야…… 어서, 빨리 박아주게❤️',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 커다란 성기로 격렬하게…… 박아줘❤️',
      ]);
      await defender.say_and_wait([
        '나를…… 항문만으로도 끊임없이 가버리는 음란한 ',
        defender.get_uma_sex_title(),
        '로 만들어주게❤️',
      ]);
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '이 미친 듯이 갈구하는 모습을 여유롭게 감상하며, 떨리는 항문 주름에 이따금 바람을 불어넣어 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 온몸을 떨며 반응하는 것을 지켜보았다.',
      ]);
      await attacker.print_and_wait([
        '늘 당당하던 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 이렇게 애원하는 모습은 참으로 보기 드문 광경이었다.',
      ]);
      await attacker.print_and_wait(
        '더욱이 간청하는 내용이 오로지 쾌락만을 위한, 어떠한 생식적 의미도 없는 행위라는 점이 각별했다.',
      );
      await attacker.print_and_wait([
        '다만, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 정말로 화나지 않도록 주의해야겠지만…… 역시 조금만 더 즐겨보기로 했다.',
      ]);
    } else {
      await defender.say_and_wait([
        '……정말로 이럴 셈인가, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await defender.say_and_wait('이곳은…… 들어갈 리가 없잖아…… 절대로……');
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은 시키는 대로 손으로 둔부를 벌려, 항문을 완전히 노출시켰다.',
      ]);
      await attacker.print_and_wait('하지만 얼굴에는 여전히 두려운 기색이 역력했다.');
      await attacker.print_and_wait(
        '그도 그럴 것이, 갑자기 누군가가 자신의 배설구를 성기관으로 쓰겠다고 한다면 누구라도 겁을 먹을 것이다.',
      );
      await attacker.print_and_wait('하지만……');
      era.println();
      await attacker.print_and_wait('기분 좋을 테니까, 안심해.');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이를 툭툭 치며 안심시켰다.',
      ]);
      await attacker.print_and_wait(
        '항문의 주름이 움찔 떨린 것은, 마치 그 말에 대답하는 것처럼 보였다.',
      );
    }
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await defender.say_and_wait('정말이지…… 자네는 어쩔 수가 없군……');
    await defender.say_and_wait('오게나…… 마치, 내 입안에 자네의 각인을 새기려는 것처럼……');
    await defender.say_and_wait(
      '마음껏, 나의 식도와 위장까지 전부 자네의 인자로 가득 채워주게❤️',
    );
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait([
      '자신이 인정한 ',
      attacker.get_phy_sex_title(),
      '가 자신을 미치게 만드는 향기를 풍기고 있었다.',
    ]);
    await defender.print_and_wait('자신을 미치게 만드는 요청을 해왔다.');
    era.println();
    await defender.say_and_wait('응…… 아❤️');
    era.println();
    await defender.print_and_wait(
      '마치 「나만이 너를 이렇게 기분 좋게 할 수 있다」는 관념을 상대의 뇌리에 낙인찍으려는 듯이……',
    );
    await defender.print_and_wait('이따금 타액을 머금어 음란한 물소리를 내며, 정성스럽게 빨아 올렸다.');
    await defender.print_and_wait(
      '때로는 목구멍 깊숙이 삼키며, 상대의 수컷 냄새 짙은 체모가 비강을 간지럽히는 감각과 생사여탈권을 상대가 쥐고 있다는 감각을 즐겼다.',
    );
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '에 대한 갈망, 그리고 이런 천박한 행위를 하고 싶다는 충동―― 그 외에는, 자신의 영리한 머릿속에 그 어떤 것도 들어올 자리가 없었다……',
    ]);
  }

  async force_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.force_blow_job(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '왜 그러나? ',
      sys_get_colored_callname(defender.id, attacker.id),
      ', 들어오지 않는 건가?',
    ]);
    await defender.say_and_wait('설마, 시간이 너무 짧아서 비웃음당할까 봐 겁나는 건가?');
    await defender.say_and_wait(
      '괜찮네, 이런 개체 차이의 문제는 나도 이해할 수…… 우윽…… 음푸…… 푸쥬……',
    );
    era.println();
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 도발을 참을 수 없었다.',
    ]);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 시끄러운 입을 겨냥해, 억지로 성기를 밀어 넣었다.',
    ]);
    await attacker.print_and_wait('젖고 부드러운 구강 안을 난폭하게 앞뒤로 쑤셔댔다.');
    await attacker.print_and_wait('이 입은…… 말하는 데 쓰기엔 역시 너무 아깝군……');
    await attacker.print_and_wait('역시 고기 구멍이 그 가치에 더 어울린다.');
    if (
      era.get('talent:32:매도좋아함') > 0 ||
      era.get('talent:32:고통좋아함') > 0
    ) {
      era.println();
      await attacker.print_and_wait('음?');
      await attacker.print_and_wait('어느샌가, 마음대로 구강을 유린당하는 감각뿐만 아니라.');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입도 동작에 맞춰, 스스로 빨아올리며 쾌감을 안겨주기 시작했다.',
      ]);
      era.println();
      await defender.say_and_wait('더…… 좀 더 침범해주게…… 나의 천박한 입 구멍을……', true);
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은 황홀한 표정을 짓고 있었다……',
      ]);
    }
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '강압적인 행위였음에도 불구하고, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '은 오히려 능동적으로 협조하며 빨아올렸다.',
    ]);
    await attacker.print_and_wait('혀로 성기를 휘감아 목구멍 깊은 곳까지 유도했다.');
    await attacker.print_and_wait('얼굴의 황홀한 표정이 가학적인 욕구를 끊임없이 자극했다……');
  }

  async blow_job(attacker, defender, hook) {
    if (attacker.id !== 32) {
      return await super.blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait('성기가 탱글 하며 튀어 올랐다.');
      await defender.print_and_wait([
        '요도구에서 배어 나오는 정액 냄새가 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 비강을 자극했다.',
      ]);
      era.println();
      await attacker.say_and_wait('후후, 튀어 올랐군 그래.');
      await attacker.say_and_wait('모르모트 군…… 그렇게나 나의 입안이 기대되는 건가?');
      era.println();
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '이 ',
        defender.get_colored_name(),
        '의 얼굴을 올려다보며, 요염한 표정으로 말했다.',
      ]);
      await defender.print_and_wait(
        '블라인드 같은 그 광기 어린 눈동자가, 지금은 매혹적인 색기를 발산하고 있었다.',
      );
    } else if (
      Array.isArray(era.get('tcvar:0:절정임박')) &&
      era.get('tcvar:0:절정임박').indexOf(part_enum.penis) !== -1
    ) {
      await defender.print_and_wait(
        '혀끝에 전해지는 감각으로, 허리를 흔드는 속도가 빨라진 것을 감지했다.',
      );
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '은(는) 속도를 높여, 얼굴로 성기를 반복해서 삼키고 내뱉었다. 성기에 눌려 불룩해진 뺨이 귀두 끝에 한층 깊은 쾌감을 선사했다.',
      ]);
      await defender.print_and_wait('추삽질과 흡입의 이중 쾌감이 자신을 극락으로 몰아넣었다……');
      era.println();
      await attacker.say_and_wait('으음…… 응츄…… 웁……');
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의…… 전부 다……',
      ]);
    } else {
      await defender.print_and_wait(
        '조그마한 입안에서, 젖고 부드러운 혀가 쉴 새 없이 귀두 위를 유영하며 집중적인 자극을 주었다.',
      );
      await defender.print_and_wait([
        '허리를 끊임없이 흔들어, 성기가 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 주는 최상의 쾌감을 더 깊숙이 느낄 수 있게 했다.',
      ]);
    }
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await defender.say_and_wait('정말이지……');
    await defender.say_and_wait('어차피 내 얼굴에 사정하고 싶은 거겠지❤️');
    await defender.say_and_wait('괜찮네…… 나의 얼굴이, 모르모트 군의 냄새 나는 정액으로 덮이는 것도……');
    await defender.say_and_wait('아주 진한 냄새로군❤️');
    await defender.say_and_wait('마음껏, 내 몸에 쏟아내 주게❤️');
    if (era.get('tcvar:32:매도좋아함') || era.get('tcvar:32:고통좋아함')) {
      await defender.say_and_wait('나를 걸레처럼 취급하며, 마음대로 닦아내도 상관없으니까❤️');
    }
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    await defender.say_and_wait('정말 이해할 수 없군, 이런 지방 덩어리가 대체 뭐가 좋다고……');
    await defender.say_and_wait('좋네, 어서 오게❤️');
    era.println();
    await attacker.print_and_wait([
      '유방에 감싸인 성기는, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '이 가슴을 주무르며 발생하는 마찰 덕분에 점차 더욱 단단하게 발기했다.',
    ]);
    await attacker.print_and_wait('하지만 겨우 이 정도로…… 만족할 수는 없었다……');
    era.println();
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 가슴을 양손으로 움켜잡고, 유육을 압박해 성기를 강하게 조였다.',
    ]);
    await attacker.print_and_wait([
      '눈앞의 담당 ',
      defender.get_uma_sex_title(),
      '를 철저히 성처리 도구로 취급하기 시작했다……',
    ]);
  }

  async fuck_tit(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.fuck_tit(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait('아, 잠까……');
      era.println();
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 요청을 무시한 채, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 봉긋한 유육을 향해 맹렬한 피스톤질을 시작했다.',
      ]);
      await attacker.print_and_wait([
        '그 과정에서 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 마치 완전히 자신의 성욕 분출구가 된 것처럼 순종적으로 따랐다.',
      ]);
      await attacker.print_and_wait([
        '자신의 담당 ',
        defender.get_uma_sex_title(),
        '를 도구처럼 사용하는 감각에 흥분이 멈추지 않아 몸이 떨려왔다……',
      ]);
    } else {
      await defender.say_and_wait('으음……❤️');
      era.println();
      await attacker.print_and_wait(
        '먼저 가슴 전체를 들어 올려 마찰하며 압박한 뒤, 푸슉 소리를 내며 자연스러운 위치로 되돌렸다.',
      );
      await attacker.print_and_wait(' 이어서 앞뒤 가리지 않는, 폭력적이기까지 한 피스톤질을 이어갔다……');
    }
  }

  async tit_job(attacker, defender, hook) {
    if (attacker.id !== 32 || !hook.arg) {
      return await super.tit_job(attacker, defender, hook);
    }
    if (check_erect(0)) {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        '의 유육으로 아플 정도로 단단해진 성기를 감싸 안았다.',
      ]);
    }
    await defender.print_and_wait([
      attacker.get_colored_name(),
      '이 손으로 자신의 양 가슴을 받쳐 들었다.',
    ]);
    await defender.print_and_wait('가슴 구멍이 성기의 줄기를 크게 휘감으며 유린했다.');
    await defender.print_and_wait('흘러나온 쿠퍼액이 가슴 구멍의 움직임을 더욱 매끄럽게 했다.');
    era.println();
    await attacker.say_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '……기분 좋은가?❤️',
    ]);
    era.println();
    await defender.print_and_wait('굳이 대답할 필요가 있을까?');
    await defender.print_and_wait('이보다 더 기분 좋은 일이 또 있을까 싶을 정도였다.');
  }

  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 32 || !hook.arg) {
      return await super.tit_and_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '이 살짝 위로 밀어 올리자, 원래 끝부분만 살짝 보였던 성기 끝이 순식간에 자신의 목에 닿았다.',
    ]);
    await attacker.print_and_wait(
      '요도구에서 떨어지는 쿠퍼액이 성기의 반복되는 자극 속에 자신의 턱에서 목까지 적셨고, 가슴팍의 유구로 흘러내려 윤활감을 더했다.',
    );
    await attacker.print_and_wait(
      '성기와 가슴이 마찰하는 음란한 소리가 유육이 부딪히는 소리와 뒤섞였다.',
    );
    await attacker.print_and_wait('점점 실내에 정액 특유의 비릿한 냄새가 짙게 깔리기 시작했다.');
    era.println();
    await attacker.say_and_wait('츄…… 츕……');
    era.println();
    await attacker.print_and_wait('입술은 마르고 혀는 타올랐다.');
    await attacker.print_and_wait('이렇게나 많은 액체가 그냥 흘러가 버리게 두는 건…… 너무 낭비겠지……');
    await attacker.print_and_wait('그러니 입을 맞추고 머금는 것은 지극히 당연한 귀결일 터였다……');
    await attacker.print_and_wait(
      '귀두가 타액으로 젖어 들면서, 가슴의 움직임 또한 한층 더 부드러워졌다……',
    );
  }

  async ask_non_penetrative(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.ask_non_penetrative(attacker, defender, hook);
    }
    await defender.say_and_wait('후후, 마치 원숭이 같군……');
    await defender.say_and_wait(
      '아니, 이렇게 허리만 흔들어대서야…… 강아지 같다고 하는 게 맞겠어❤️',
    );
  }

  async non_penetrative(attacker, defender, hook) {
    return super.non_penetrative(defender, attacker, hook);
  }

  async self_finger_fuck(attacker, defender, hook) {
    if (defender.sex_code === 0) {
      return await super.self_finger_fuck(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.say_and_wait([
        '보게나…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        '……',
      ]);
      await attacker.say_and_wait('나의 암컷구멍은 어떻게 보이나?❤️');
      era.println();
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 영리한 손가락이 자신의 암컷구멍을 이리저리 희롱하며 쾌감을 불러일으켰다.',
      ]);
      await defender.print_and_wait(
        '양다리를 옆으로 벌린 채, 손가락은 마치 유혹이라도 하듯 구멍 안쪽으로 점점 더 깊게 파고들었다.',
      );
      await defender.print_and_wait([
        attacker.sex,
        '의 손가락 끝이 조명을 받아 번들거렸고, 암컷구멍에서 음란한 실선을 끌어당겼다.',
      ]);
      if (check_lubrication(32, part_enum.virgin) && defender.sex_code > 0) {
        era.println();
        await attacker.say_and_wait('벌써 준비는 끝났네…… 박아주지 않겠나?❤️');
        era.println();
        await defender.print_and_wait(
          '애액으로 완전히 젖어버린 하체는 이미 언제라도 우마뾰이할 수 있는 상태였다……',
        );
      }
    } else {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '……❤️',
      ]);
      await attacker.say_and_wait('빨리…… 박아주게❤️');
      era.println();
      await defender.print_and_wait('타키온은 스스로 둔부를 벌렸다.');
      await defender.print_and_wait(
        '이미 젖어버린 암컷구멍과 가늘게 움찔거리는 항문이 눈앞의 수컷에게 복종에 가까운 자세로 바쳐졌다.',
      );
      await defender.print_and_wait('정신과 육체 양면에서의 충족감이 성기를 더욱 단단하게 만들었다.');
      if (check_lubrication(32, part_enum.virgin)) {
        era.println();
        await defender.print_and_wait('찌걱……');
        await defender.print_and_wait(
          '암컷구멍이 질척이는 소리를 내며 두 손가락에 의해 끊임없이 벌어졌다 닫혔다를 반복했다.',
        );
        await defender.print_and_wait('색정적인 즙이 벌어진 국부의 살결 사이로 천천히 흘러나왔다……');
      }
    }
  }
};