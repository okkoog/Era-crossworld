const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function common_continue_fucking_kitaru(attacker, defender) {
  if (era.get(`tcvar:${defender.id}:절정임박`)) {
    await defender.say_and_wait('하❤️아아~');
    await defender.print_and_wait([
      defender.get_colored_name(),
      '가 파렴치하게도 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '앞에서 경련하듯 격렬하게 몸을 뒤척이며, 젖은 몸에 맺힌 뜨겁고 투명한 물방울을 사방에 흩뿌렸다.',
    ]);
    await defender.print_and_wait(
      '평소의 활기찬 얼굴에는 정욕에 완전히 지배된 아헤가오만이 남았고, 분홍빛 입술은 놀라울 정도로 크게 O자 모양으로 벌어져 파편화된 고백을 끊임없이 흘려보냈다.',
    );
    if (era.get('love:56') > 75) {
      await defender.say_and_wait([
        '좋아해요 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 정말 좋아해요 ',
        attacker.get_colored_actual_name(),
        '❤️',
      ]);
    } else {
      await defender.say_and_wait(['자지…… 좋아…… 하앗, 망가져, 망가져 버려요❤️']);
    }
    await defender.print_and_wait([
      '아마 시라오키 님께 조금은 부끄러움을 느끼고 있겠지만, 그 수치심은 곧 연료가 되어 육봉을 맞이하기 위해 몸을 더욱 천박하게 비트는 동력이 되었다.',
    ]);
    await defender.say_and_wait(
      [
        '점점 더 거칠어지시네, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '.',
      ],
      true,
    );

    await defender.say_and_wait(
      '점술가와 무녀라는 이중적인 신비를 지닌 나를 발정 난 암컷처럼 타락시켜 버리는, 샘물처럼 겹겹이 밀려오는 쾌감.',
      true,
    );
    await defender.say_and_wait(
      '아니…… 어쩌면 간단한 예언 같은 건, 아직 할 수 있을지도 모르겠네. 이를테면 내가 곧 가버릴 거라는 사실 같은 거.',
      true,
    );
    await defender.say_and_wait('가요…… 곧…… 가버려요……');
    await defender.say_and_wait('으으윽, 응으으윽❤️❤️❤️……');
  } else {
    await defender.print_and_wait([
      '아마도 도 M 기질이 있는 자신은 오래전부터 트레이너에게 이렇게 지배당하기를 바랐던 것이리라.',
    ]);
    await defender.say_and_wait(['아하……❤️ 하아, 하아……']);
    await defender.print_and_wait([
      '조여지는 보지 살이 무정하게 벌어지자, 연달아 밀려오는 쾌감 때문에 평소 외우던 복잡한 축문조차 머릿속에서 하얗게 지워져 버렸다.',
    ]);
    await defender.say_and_wait(['하…… 하아…… 하아❤️']);
    await defender.print_and_wait([
      '무녀의 성결한 얼굴은 자지 님의 공격 앞에 아첨하는 듯한 미소로 바뀌었다.',
    ]);
    await defender.say_and_wait(['자지…… 님?'], true);
    await defender.say_and_wait(['이렇게 부르면…… 시라오키 님이 분명 노하실 텐데 말이지.'], true);
    await defender.print_and_wait([
      '하지만 천박한 냄새를 풍기며 땀에 젖어 열을 내뿜는 발정 난 밤색 털 우마무스메 무녀의 몸은 솔직하게 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '에게 좀 더 가까이 밀착되었다.',
    ]);
    await defender.say_and_wait(['설령, 오나홀처럼 쓰인다고 해도 상관없으니까요……']);
    await defender.print_and_wait([
      '파렴치하게도 그런 말을 내뱉었다. 결국 언제 내릴지 모를 신벌보다는, 지금 자신을 몽롱하게 만드는 쾌감이 훨씬 더 중요했다.',
    ]);
  }
}

module.exports = class extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.missionary(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait('으으…… 괜찮아요.');
      await attacker.print_and_wait([
        '두 팔을 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 등 뒤로 둘렀고, 발갛게 달아오른 얼굴을 보이고 싶지 않은 듯 머리를 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 어깨에 기댔다.',
      ]);
      await attacker.print_and_wait([
        '육봉이 음란한 물소리와 함께 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 좁은 보지에 삽입되자, 그녀는 등에 두른 양손에 힘을 주었고, 고른 두 다리까지 당신의 등 뒤에서 꼿꼿하게 펴지며 육봉이 더욱 깊숙한 곳까지 찔러 들어오게 만들었다.',
      ]);
      await defender.say_and_wait('으우으! 뜨거워……❤️');
      await attacker.print_and_wait([
        '고개를 돌려도 소용없었다. 귓가에 새어 나오는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귀여운 신음만으로도, 뜨거운 육봉의 갑작스러운 쾌감에 눈을 뒤집고 있는 밤색 털 우마무스메의 모습이 뇌리에 선명하게 그려졌다.',
      ]);
      await defender.say_and_wait('……하응❤️');
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['……이렇게 엎드리면 되나요?']);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 지시대로 어린 강아지처럼 바닥에 엎드렸다.',
      ]);
      await defender.print_and_wait([
        '음…… 딱히 훈련한 적은 없지만, 마치 묘한 신의 계시라도 받은 것처럼 둥근 엉덩이를 적당한 높이로 치켜들었고, 젖은 꼬리를 옆으로 치워 굶주린 보지를 훤히 드러냈다.',
      ]);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 얼굴이 보이지 않아서……',
      ]);
      await defender.print_and_wait(['하지만…… 응…… 흥분되네.']);
      await defender.say_and_wait('으아……');
      await defender.print_and_wait([
        '육봉이 깊숙이 밀려들자 하반신의 팽창감과 충족감이 신경을 타고 뇌로 전달되었고, 그녀의 입가에는 행복하고 멍한 미소가 번졌다.',
      ]);
      await defender.print_and_wait(['정, 정말 강아지처럼 되어버렸네.']);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async sitting(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '자신의 허벅지 위로 눌러 붙는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이 살에서 마시멜로 같은 감촉이 느껴졌다.',
      ]);
      await attacker.print_and_wait([
        '가슴의 하얀 두 토끼도 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 피스톤질에 맞춰 출렁였고, 딱딱해진 유두도 함께 튀어 올랐다.',
      ]);
      await attacker.print_and_wait([
        '그뿐만 아니라 이 체위의 장점은 저 별 모양의 눈이 어떻게 서서히 하트로 변해가는지를 똑똑히 볼 수 있다는 점이다.',
      ]);
      await defender.say_and_wait([
        '으하…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      await attacker.print_and_wait([
        '아랫배가 육봉에 눌려 선명하게 윤곽이 드러난 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 멍하면서도 귀여운 표정을 지었다.',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async hug_sitting(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '천천히 몸을 가라앉히자 충혈된 귀두가 엉덩이 사이를 파고들었고, 엉덩이 살을 끝까지 눌렀다가 다시 밀어냈다……',
      ]);
      await defender.say_and_wait(['하❤️아아~']);
      await defender.print_and_wait([
        '육봉이 예고도 없이 직접 밀고 들어오자, 발정하여 젖은 보지가 단숨에 꿰뚫리는 듯한 감각이 전해졌다.',
      ]);
      await defender.say_and_wait('으우…… 으❤️…… 하아…… 하아……❤️');
      await defender.print_and_wait([
        '자포자기한 듯 머리를 뒤에 있는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 가슴에 기댄 채, 등 뒤의 남자가 허리를 흔드는 동작에 몸을 맡겼다.',
      ]);
      await defender.print_and_wait([
        '그래도 이 자세라면 엉망이 된 자신의 표정을 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '에게 들킬 걱정은 없겠지만……',
      ]);
      await defender.print_and_wait([
        '하지만 입에서 새어 나오는 음탕한 목소리, 쾌감에 꼿꼿이 선 귀, 그리고 트레이너의 허리를 능숙하게 감싸는 꼬리까지.',
      ]);
      await defender.print_and_wait([
        '아무리 둔한 사람이라도 자신이 지금 얼마나 꼴사나운 상태인지 짐작하고도 남을 것이었다.',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async standing(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.standing(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 오른쪽 발목을 잡고 다리를 들어 올리자, 소녀는 금방이라도 쓰러질 듯 비틀거렸고 가슴의 묵직한 두 덩이도 흔들거렸다.',
      ]);
      await defender.say_and_wait(['우와아…… 이런 자세로 하는 건가요?']);
      await attacker.print_and_wait([
        '카구라 춤으로 단련된 실력으로 겨우 한 발로 균형을 잡으며 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 우뚝 솟은 물건을 바라보았다.',
      ]);
      await defender.print_and_wait(['잠깐…… 잠깐만요, 으앗❤️!']);
      await attacker.print_and_wait([
        '우마무스메 특유의 유연함 덕분에 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '은 가볍게 매끄러운 다리를 보지 옆까지 눌렀고, 이어 육봉이 질척이는 좁은 보지 속으로 구쥬구쥬 소리를 내며 삽입되었다.',
      ]);
      await attacker.print_and_wait([
        '음란하고 경쾌한 찰딱거리는 물소리가 울려 퍼지는 가운데, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '에게 한 발 균형을 이용한 춤 기술을 전수하기 시작했다.',
      ]);
    } else if (era.get(`tcvar:${defender.id}:절정임박`)) {
      await defender.say_and_wait(['하~응, 하아~❤️']);
      await attacker.print_and_wait([
        '눈의 초점이 풀린 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 목을 껴안았고, 밤색의 두 귀는 머리에 바짝 붙었으며 팔에 걸친 다리마저 파르르 떨렸다.',
      ]);
      await attacker.print_and_wait([
        '이 체위는 육봉이 더 깊숙이 찔러 넣기에 용이했다. 보지는 애원하듯 육봉에 입을 맞추었고, 피스톤질이 반복될 때마다 어깨에 머리를 기댄 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 리듬에 맞춰 귓가에 달콤한 신음을 흘렸다.',
      ]);
      await defender.say_and_wait('너무…… 빨라요❤️ 운명의 사람…… 이건 너무 빠르다구요❤️');
      await attacker.print_and_wait([
        '당황한 표정을 지은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 모습은 오히려 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 가학심을 자극했다. 엉덩이를 받쳐 들어 애원하는 우마무스메를 살짝 띄운 뒤, 다시 한번 허리를 쳐올려 가장 깊은 곳의 무녀의 신성한 자궁경부에 닿아 문지르고 회전시켰다.',
      ]);
      await defender.say_and_wait('가요~ 가버려요~❤️');
    } else {
      await attacker.print_and_wait([
        '키 차이 덕분에 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '에게 다리가 들린 채 박히는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 발끝은 겨우 땅에 닿을락 말락 했다.',
      ]);
      await defender.say_and_wait(['꼬, 꽉 안아주세요❤️.']);
      await attacker.print_and_wait([
        '부탁대로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 허리를 꽉 껴안고 격렬하게 허리를 놀렸다. 가장 깊은 곳에 닿을 때마다 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 뱃속 깊은 곳에서 전해지는 충격에 교태 섞인 신음을 내뱉었다.',
      ]);
      await defender.say_and_wait('응아…… 하아아아……');
      await attacker.print_and_wait([
        '평소 활기차던 귀여운 얼굴은 지금 음란한 기운으로 가득 찼다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 팔에 걸쳐진 다리는 떨림을 멈추지 않았고, 끈적한 애액이 결합부에서 끊임없이 흘러내렸다.',
      ]);
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.hug_standing(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '이렇게 어려운 자세가 되었는데, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '은 다음엔 어떻게 할까?',
      ]);
      await defender.print_and_wait([
        '민감한 귀 끝? 치켜든 엉덩이? 아니면 스스로도 천박하다고 생각하는 가슴? 그것도 아니면……',
      ]);
      await defender.print_and_wait([
        '당장이라도 다리에 힘이 풀려 쓰러질 것 같은 지금, 등 뒤에 있는 운명의 상대의 행동을 도저히 점칠 수가 없었다……',
      ]);
      await defender.say_and_wait(['이이이익——아앗❤️!']);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 뜨거운 육봉이 푸슉푸슉 소리를 내며 뿌리 끝까지 보지 속으로 박혀 들어왔다.',
      ]);
      await defender.print_and_wait([
        '용서를 빌 겨를도 없이, 이미 상황을 파악한 몸은 본능적으로 허리를 굽혀 엉덩이를 더욱 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '쪽으로 밀착시켰다.',
      ]);
    } else if (era.get(`tcvar:${defender.id}:절정임박`)) {
      await defender.say_and_wait(['이이이익——아앗❤️!']);
      await attacker.print_and_wait([
        '담당의 두 팔을 붙잡고 끊임없이 허리를 흔들자, 피스톤질이 반복될 때마다 흔들리는 허리와 복숭아 같은 두 엉덩이 살이 격렬하게 충돌했다.',
      ]);
      await attacker.print_and_wait([
        '훌륭한 라스트 스퍼트를 보여주던 다리도 버티지 못하고 경련했고, 열 개의 발가락마저 오그라들었다. 육봉이 뽑혀 나갈 때면 격렬한 결합부 사이로 애액이 천박한 은색 실을 만들어냈다.',
      ]);
      await defender.say_and_wait('으으…… 으하……❤️');
      await attacker.print_and_wait([
        '아쉽게도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 얼굴은 보이지 않았지만, 입에서 새어 나오는 소리만으로도 이 녀석이 절정까지 단 한 걸음만을 남겨두었다는 사실을 알 수 있었다.',
      ]);
    } else {
      await defender.print_and_wait([
        '기, 깊어…… 몸속이…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 감촉으로 가득해서…… 너무 기분 좋아.',
      ]);
      await defender.print_and_wait([
        '살짝 접힌 귀로 허리와 다리, 엉덩이가 부딪칠 때마다 나는 질척한 액체 소리가 끊임없이 들려왔다.',
      ]);
      await defender.print_and_wait([
        '유린당하는 아랫배에서 전해지는 충실감이 그녀를 안심시켰다.',
      ]);
      await defender.print_and_wait(['조금 더 빨리해도 괜찮아요……']);
      await defender.print_and_wait(['그러자 운명의 사람의 허리를 감싼 꼬리에 살짝 힘이 들어갔다.']);
      await defender.say_and_wait('으에?!!❤️ 오오……!❤️');
      await defender.print_and_wait([
        '쾌감이 둑이 터진 것처럼 뇌로 밀려왔다. 멈춰달라고 외치고 싶어도 목소리가 나오지 않았고, 스스로 초래한 결과에 그저 상대의 품에 안겨 격렬하게 박힐 뿐이었다.',
      ]);
    }
  }

  async suspended_congress(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.suspended_congress(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['으야!']);
      await attacker.print_and_wait([
        '환상 속에 빠져 있던 나른한 몸을 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 단번에 들어 올렸다. 갑작스러운 실중력 상태에 그녀는 앞을 향해 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 몸을 껴안았고, 매끄럽고 육감적인 두 다리는 자연스럽게 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 허리를 감싸 잠갔다.',
      ]);
      await defender.say_and_wait(['으오오오❤️!']);
      await attacker.print_and_wait([
        '중력을 이용해 담당의 육체를 흔들어 딱딱한 육봉을 단숨에 젖은 보지 속 뿌리까지 밀어 넣었다. 육봉은 자궁구를 강하게 때렸고, 주름진 속살과 육봉이 빈틈없이 밀착되어 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 배 위로 옅은 융기가 나타났다.',
      ]);
      await attacker.print_and_wait([
        '육봉이 빠져나가려 할 때마다 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 허리에 감긴 두 다리는 아쉬운 듯 살짝 펴졌다가, 이어지는 맹렬한 삽입에 다시 단단히 매달렸다.',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async hug_suspended_congress(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.hug_suspended_congress(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '에 의해 벌려져 들어 올려진 두 다리와, 매우 어정쩡한 자세로 그의 목을 감싼 두 손.',
      ]);
      await defender.print_and_wait([
        '이런…… 마치 어린아이 소변을 뉘이는 듯한, 그리고 당장이라도 중심을 잃고 바닥에 떨어질 것만 같은 수치스러운 자세라니……',
      ]);
      await defender.say_and_wait(['응앗——❤️']);
      await defender.print_and_wait([
        '육봉이 삽입되는 순간, 그녀는 마치 날아가 버릴 것만 같이 통제할 수 없을 정도로 몸을 젖혔다. 하지만 중력 때문에 다시 흔들거리며 내려앉았고, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 육봉을 지탱점 삼아 공중에 떠 있는 의자에 앉은 꼴이 되었다.',
      ]);
      await defender.print_and_wait(['하아아❤️…… 하❤️ 이건...']);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 표정은 보이지 않지만, 무중력과 쾌감의 이중 작용을 겪는 몸은 이미 그 대단한 육봉의 모양을 선명하게 기억하고 있었다.',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.virgin,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait(['제가 직접 하면 되나요?']);
      await defender.say_and_wait(['으음……']);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 위를 향해 솟구친 웅장한 물건을 바라보는 것만으로도, 얼굴이 붉어지고 호흡이 가빠졌다.',
      ]);
      await defender.print_and_wait(['자신이 곧 이 위에 올라타게 될 거라 생각하니……']);
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ', 왜 그래?',
      ]);
      await defender.say_and_wait(['츄릅, 넹?']);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '의 재촉을 받고서야 입가에 침이 흐르고 있다는 것을 깨달았다.',
      ]);
      await defender.print_and_wait(['자신이 이렇게나 음란할 줄은 몰랐다.']);
      await defender.print_and_wait([
        '한시도 기다릴 수 없다는 듯, 떨리는 허리가 「쿵」 하고 내려앉았다. 아래에 있는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '을 미소 띤 얼굴로 내려다보며, 마음이 통한 듯 허리로 제례의 동작을 흉내 내어 끈적한 보지 살이 육봉을 이끌고 구석구석 탐색하게 만들었다.',
      ]);
      await defender.print_and_wait([
        '덕분에 그녀의 영리한 보지는 다시 한번 육봉의 형태를 철저하게 복습할 수 있었다.',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          hook.hook === ero_hooks.ask_stimulate_glans_by_virgin
            ? part_enum.virgin
            : part_enum.anal,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        '자신의 몸 안에 삽입된 육봉은 여전히 그렇게 딱딱한데……',
      ]);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '은 짓궂게 웃으며 동작을 멈추고는, 내 허벅지를 가볍게 쳤다.',
      ]);
      await defender.print_and_wait(['으으, 트레이너 선생님은 절 괴롭히는 걸 그렇게 좋아하시나요?']);
      await defender.print_and_wait([
        '심술부리며 확 뽑아버려서…… 내 몸 안의 나쁜 녀석을 좀 진정시켜 줄까 생각도 들지만.',
      ]);
      await attacker.say_and_wait(['질퍽~']);
      await defender.print_and_wait([
        '허리…… 내 허리가 왜 벌써 흔들리고 있는 거지? 하아…… 하아……',
      ]);
      await defender.print_and_wait(['원해……']);
      await defender.print_and_wait([
        '서둘러 힘이 풀린 근육을 재촉하여, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 육봉을 정성껏 모시라고 명령했다. 결국 심술부리며 뽑아버리는 짓은, 절대 절대로 「대흉」일 테니까!',
      ]);

      if (era.get(`cflag:${defender.id}:종족`)) {
        await defender.print_and_wait(
          '하얀 엉덩이가 젖은 꼬리의 반주에 맞춰 춤을 추었다.',
        );
      }
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_stimulate_glans_by_anal(attacker, defender, hook) {
    return await this.ask_stimulate_glans_by_virgin(attacker, defender, hook);
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.stimulate_g_spot(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '계속 허리를 쳐올려, 가랑이 사이의 육봉을 보지 깊숙한 곳의 연약한 속살로 짓이겨 넣었다. 귀두가 거친 질벽을 스칠 때마다 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 신음을 흘리며 파르르 떨었다.',
      ]);
      await defender.say_and_wait(['으아❤️~ 아아']);
      await attacker.print_and_wait([
        '우마무스메의 몸속을 종횡무진하던 육봉 요괴는 드디어 ',
        defender.get_colored_name(),
        '라는 무녀의 약점을 찾아내고 말았다.',
      ]);
      await defender.say_and_wait(['이이익, 아아아❤️~']);
      await attacker.print_and_wait([
        '경련을 멈추지 않는, 애액으로 번들거리는 풍만한 두 다리, 쾌감에 꼿꼿이 선 꼬리와 두 귀, 그리고 눈동자의 별조차 핑크빛 하트에 밀려나 버렸다.',
      ]);
      await attacker.print_and_wait([
        '말할 것도 없이, 현인신이라 불리던 존재는 지금 침을 흘리는 발정 난 암컷으로 타락해 있었다.',
      ]);
      await attacker.print_and_wait([
        '육봉이 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 말랑한 자궁을 칠 때마다, 혀를 반쯤 내민 그녀는 리듬에 맞춰 엉덩이를 치켜들며 교성을 질렀다.',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_fuck(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_fuck(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_fuck ? part_enum.virgin : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait(['하고 싶어……']);
      await attacker.say_and_wait(['엣!']);
      await attacker.print_and_wait([
        '즉시 입을 틀어막았다. 신사의 무녀인 자신이 이런 말을 내뱉었다는 사실이 믿기지 않았고, 마치 무언가에 씌인 것만 같은 기분이었다.',
      ]);
      await attacker.print_and_wait([
        '정신을 차려보니 풍만하고 부드러운 다리는 이미 스스로 벌어져 있었고, 끈적한 보지 입구 사이로는 농익은 은사가 늘어져 있었으며, 입구는 외로운 듯 벙긋거리고 있었다.',
      ]);
      await attacker.print_and_wait([
        '음…… 정말 음란하네, 내 몸. 하지만 대단한 육봉을 가진 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 이해해 주시겠지……?',
      ]);
      await attacker.say_and_wait(['넣어주세요……']);
      await attacker.print_and_wait([
        '오른손의 검지와 중지로 살짝 힘을 주어 영롱하게 빛나는 음순을 벌렸고, 갈증을 느끼는 분홍빛 속살을 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '에게 보여주며, 삽입을 간청하는 동작의 마지막 조각을 채웠다.',
      ]);
      await attacker.say_and_wait(['오늘의 대길을 위해…… 제발 넣어주세요.']);
    } else {
      await common_continue_fucking_kitaru(defender, attacker);
    }
  }

  async cowgirl(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '두 손을 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 가슴 위에 올리고 내려다보았다.',
      ]);
      await attacker.print_and_wait(['자신이 우위에 서 있는 기분이 들었다.']);
      await attacker.print_and_wait([
        '자, 이제 어떻게 해야 아래에서 자신을 괴롭히기만 하던 남자를 항복하게 만들 수 있을까?',
      ]);
      await attacker.print_and_wait(['좌우로? 위아래로? 아니면 원을 그리듯 허리를 돌릴까? 그것도 아니면……']);
      await attacker.say_and_wait(['꺄아앗!~❤️']);
      await attacker.print_and_wait([
        '다른 사람이 생각하는 도중에 갑자기 움직이는 건 반칙이라구요!',
      ]);
      await attacker.print_and_wait([
        '움직이지 마세요! 으으❤️! 분명……❤️ 이잇~❤️ 내가 위인데❤️!',
      ]);
      await attacker.say_and_wait(['으으응~ 너무 좋아❤️!']);
      await attacker.print_and_wait(['자제력을 잃은 신음이 벌어진 입술 사이로 끊임없이 새어 나왔다.']);
    } else {
      await common_continue_fucking_kitaru(defender, attacker);
    }
  }

  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.stimulate_glans_by_virgin(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '항상 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 일방적으로 노력하게 하는 건 조금 미안한 마음이 들었다.',
      ]);
      await attacker.print_and_wait([
        '현역 우마무스메와 트레이너에게 있어 이 행위가 배덕적이라 할지라도, 이인삼각의 법칙은 변하지 않는 법이니까.',
      ]);
      await attacker.say_and_wait(['하아……❤️']);
      await attacker.print_and_wait([
        '충혈되어 딱딱해진 육봉이 다음번에 찔러 들어올 때 심호흡을 하며, 「쪽」 하고 조여드는 보지로 자궁경부를 때리는 귀두를 정성껏 빨아들였다.',
      ]);
      await attacker.say_and_wait(['으아아아아……']);
      await attacker.print_and_wait([
        '뜨거운 육봉을 휘감고 있는 보지 내부에서 정신을 잃을 것만 같은 쾌감이 전해졌다.',
      ]);
      await attacker.print_and_wait([
        '육봉이 더 세차게 뛰기 시작했네요. 저기, 저도 도움이 된 거죠, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '.',
      ]);
    } else if (era.get(`tcvar:${defender.id}:절정임박`)) {
      await attacker.print_and_wait(['안 돼, 안 돼, 안 돼……']);
      await attacker.print_and_wait([
        '단지 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 리듬에 맞추려 했을 뿐인데, 안쪽 속살이 얼마나 민감한지를 그만 깜빡하고 말았다.',
      ]);
      await attacker.print_and_wait([
        '휘감는 힘이 풀린 것을 눈치챈 것인지, 자궁구 앞에 버티고 있던 귀두는 앞쪽의 연약한 살을 향해 무례할 정도의 기세로 돌진하기 시작했다.',
      ]);
      await attacker.print_and_wait([
        '방금 전까지만 해도 육봉에 반격을 가하던 보지 살은 뜨겁고 거대한 물건에 완전히 짓눌렸고, 굵다란 귀두가 자궁경부를 사정없이 때렸다.',
      ]);
      await attacker.print_and_wait(['가요…… 가버려요……']);
    } else {
      await attacker.print_and_wait(['심호흡…… 심호흡……']);
      await attacker.print_and_wait([
        '최대한 맞추려 노력하지만, 정작 동작을 제대로 하고 있는지도 모르겠다. 몸 안에 박힌 육봉이 조금만 꿈틀거려도 쾌감에 뇌가 하얘졌고, 입에서는 천박한 신음이 흘러나왔다.',
      ]);
      await attacker.print_and_wait([
        '하지만 질척질척한 천박한 소리가 들리는 걸 보면, 끈적한 보지가 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 육봉을 잘 모시고 있는 모양이었다.',
      ]);
    }
  }

  async ask_stimulate_g_spot(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_stimulate_g_spot(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_stimulate_g_spot
            ? part_enum.virgin
            : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait(
        '보지 안의 성감대를 육봉이 스칠 때마다 느껴지는 중독적인 쾌감.',
      );
      await attacker.say_and_wait('그러니까……');
      await attacker.say_and_wait('부탁드려요……');
      await attacker.print_and_wait(
        `명색이 ${attacker.get_uma_sex_title()}인데, 이렇게 꼴사납게 굴다니……`,
      );
      await attacker.print_and_wait([
        '하지만 도저히 참을 수가 없어서—— 침을 흘리며 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귓가에 쾌감을 달라고 애원했다.',
      ]);
      await attacker.print_and_wait('왜냐하면 정말로 원하고 있으니까요——');
      await attacker.print_and_wait(
        '자궁 안쪽을 대단한 육봉으로, 대단하게, 난폭하게, 힘껏……',
      );
      await attacker.print_and_wait('「츗—— 하고 끝까지 찔러주세요❤️');
      await attacker.print_and_wait('몸이 「팟」 하고 웅크려지게——');
      await attacker.print_and_wait('세상에서 가장 기분 좋은 보지로 만들어주세요——');
      await attacker.print_and_wait(
        `그러니까 부탁이에요…… 그 뒤에 시라오키 님께 벌을 받게 된다 해도 상관없으니까요`,
      );
    } else if (era.get(`tcvar:${defender.id}:절정임박`)) {
      await common_continue_fucking_kitaru(defender, attacker);
    } else {
      await attacker.say_and_wait('천천, 아하❤️, 천천히요❤️~!');
      await attacker.print_and_wait(
        '간절한 애원에도 불구하고 육봉은 짧고 정확하게 약점을 공략했다. 흐릿해진 눈동자는 성감대가 주는 쾌감에 절어 오렌지색을 지워버릴 정도의 핑크빛으로 물들었다.',
      );
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 형태에 맞춰 길들여진 보지는 은혜를 갚기라도 하듯 부드럽게 수축하고 꿈틀대며, 자신의 몸에 끝없는 즐거움을 선사하는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 뜨거운 기둥을 기쁘게 했다.',
      ]);
    }
  }

  async ask_stimulate_womb(attacker, defender, hook) {
    await this.ask_stimulate_g_spot(attacker, defender, hook);
  }
};