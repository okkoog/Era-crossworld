const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common/normal/sm');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = class extends EroNormalSm {
  async insult(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.insult(attacker, defender, hook);
    }
    const message = [
      async () => {
        await attacker.say_and_wait('욕먹는 걸 좋아하는 변태 녀석!');
        await defender.say_and_wait(
          '좋아하는 건 아니란다? 그저 아주 조금 흥분될 뿐이란다~',
        );
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
        ]);
        await attacker.print_and_wait('……그게 좋아하는 거잖아!');
      },
      async () => {
        await attacker.say_and_wait('전투력도 엄청나면서 기어코 유혹하는 도M을 자처하다니!');
        await defender.say_and_wait('전투력이 엄청나다니? 전혀 그렇지 않단다~');
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
        ]);
        await attacker.print_and_wait([
          '……조만간 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '가 복싱 챔피언십에 나가는 걸 보게 될지도 모르겠다.',
        ]);
      },
    ];
    if (attacker.sex_code > 0) {
      message.push(async () => {
        await attacker.say_and_wait('한 번 넣으면 놔주질 않는 음탕한 엉덩이!');
        await defender.say_and_wait([
          '헤헤~ 여긴 음탕한 엉덩이의 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '란다~',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
        ]);
        await attacker.print_and_wait('……그걸 칭호처럼 쓰지 마!');
      });
    }
    if (defender.sex_code !== 1) {
      message.push(
        async () => {
          await attacker.say_and_wait('이 음란한 암퇘지!');
          await defender.say_and_wait('암퇘지가 아니란다, 그저 평범한 우마무스메란다❤️~');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
          ]);
          await attacker.print_and_wait('……「음란」하다는 건 부정하지 않는 건가.');
        },
        async () => {
          await attacker.say_and_wait('멋대로 발정하는 발정난 짐승!');
          await defender.say_and_wait('음…… 아무한테나 다 발정하는 건 아니란다~');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
          ]);
          await attacker.print_and_wait('……짐승이라는 점을 반박하라고.');
        },
        async () => {
          await attacker.say_and_wait(
            '겉으로는 성숙하고 점잖은 척하지만 평소 훈련할 때도 분명 야한 생각이나 하고 있을 몹쓸 할망구!',
          );
          await defender.say_and_wait(
            '우응…… 훈련할 때는 나름 집중하고 있단다~ 고목나무 구멍에 있을 때만 가끔 야한 생각이 드는 거란다~',
          );
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
          ]);
          await attacker.print_and_wait([
            '……',
            sys_get_colored_callname(attacker.id, defender.id),
            '의 남모를 이면을 발견해 버렸다!',
          ]);
        },
        async () => {
          await attacker.say_and_wait('다루기 쉬운 배달용 보지!');
          await defender.say_and_wait(
            '웅…… 배달 보지? 배달 음식만 먹으면 몸에 안 좋단다~',
          );
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
          ]);
          await attacker.print_and_wait(
            '……적어도 이번엔 정말로 「배달용 보지」가 무슨 뜻인지 모르는 모양이다.',
          );
        },
        async () => {
          await attacker.say_and_wait('엉덩이만 때려도 꽉 조여대는 허접 보지!');
          await defender.say_and_wait('뭐…… 너무 기분이 좋으니까, 어쩔 수 없잖니~');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 온화하게 미소 지을 뿐, 딱히 모욕감을 느낀 것 같지 않다.',
          ]);
          await attacker.print_and_wait('……그게 어쩔 수 없는 일인 거야?');
        },
      );
    }
    await get_random_entry(message)();
  }

  async ask_insult(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    return super.insult(defender, attacker, hook);
  }

  async hit_anal(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait([
        '손바닥으로 엉덩이를 내리치자, 풍만한 엉덩이에서 출렁이는 파동이 손끝으로 전해진다.',
      ]);
      await attacker.print_and_wait([
        '원래는 새하얬던 엉덩이가 이제는 새빨갛게 달아올랐고, 단순한 접촉만으로도 그 옆의 보지가 무의식적으로 씰룩거린다.',
      ]);
      await attacker.print_and_wait([
        '짝! 다시 한번 내리치는 소리와 함께 매끄러운 음순이 움찔거리고, 투명한 애액이 방탕한 신음과 함께 흘러내린다——',
      ]);
      await defender.say_and_wait([
        '호호호~❤️ 안 된단다❤️ 엉덩이를 맞는 것만으로 가버리는 변태가 되어버리겠어❤️ 약점을 들켜버렸구나❤️, 완전히 암컷이 되어버리겠어~❤️',
      ]);
    } else {
      await attacker.print_and_wait([
        '이미 붉게 부어올랐음에도 불구하고, 엉덩이는 여전히 높이 치켜들려 있다.',
      ]);
      await attacker.print_and_wait([
        '마치 아직 만족하지 못했다는 듯, 풍만한 엉덩이를 일부러 이쪽을 향해 좌우로 흔들어댄다.',
      ]);
      await defender.say_and_wait([
        '있잖니❤️ ',
        sys_get_colored_callname(defender.id, attacker.id),
        ', 아직 만족하지 못했지?',
      ]);
      await defender.say_and_wait([
        '나는 말이다, 네가 평소에 적잖은 스트레스를 안고 있다는 걸 알고 있단다…… 그러니까 말이다, 마음껏 여기에 스트레스를 풀려무나~❤️',
      ]);
      await defender.say_and_wait(['내 몸은, 네 것이니까 말이란다❤️~']);
    }
  }

  async ask_hit_anal(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    return super.hit_anal(defender, attacker, hook);
  }

  async hit_anal_hard(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.hit_anal_hard(attacker, defender, hook);
    }
    await defender.print_and_wait(['고통스러울수록, 더욱 흥분한다.']);
    await defender.print_and_wait([
      '엉덩이는 이미 감각을 잃었음에도, 매번 내리칠 때마다 하반신에 찌릿한 진동이 느껴진다.',
    ]);
    await defender.print_and_wait([
      '마치 기계 장치처럼, 풍만한 엉덩이를 때릴 때마다 매끄러운 보지에서 음란한 애액이 뚝뚝 떨어진다.',
    ]);
    await defender.print_and_wait([
      '그리고 바닥에 엎드린 채 온화했던 이목구비는 쾌감에 무너져 내렸고, 두 눈을 까뒤집은 채 혀를 내밀고는 때리는 리듬에 맞춰 신음을 내뱉고 있다.',
    ]);
    await defender.print_and_wait([
      '하지만 그 신음 속에는 이미 산산조각 난 말들이 섞여 있었다——',
    ]);
    await defender.say_and_wait([
      '후~후후~ ',
      sys_get_colored_callname(defender.id, attacker.id),
      '……정말 행복하구나❤️~',
    ]);
  }

  async hit_face_by_penis(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.hit_face_by_penis(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '뺨을 찌르는 것은, 「양기」를 내뿜는 육봉이었다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 미동도 하지 않은 채 육봉을 응시하며, 치구와 오물이 자신의 뺨에 묻어나는 것을 그대로 내버려 두고 있다.',
      ]);
      await defender.say_and_wait(['아주 기운찬 냄새구나…… 이걸로 뭘 하려——']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 말이 채 끝나기도 전에, 뺨에 대고 문지르며 더러움을 닦아낸 육봉이 곧장 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 뺨을 세차게 때렸다.',
      ]);
      await attacker.print_and_wait([
        '뺨의 통증은 아마도 ',
        defender.sex,
        '에게 약간의 놀라움을 안겨주었을 것이다. 하지만 이내, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 놀란 기색을 지우고, 무언가 깨달았다는 듯 온화한 미소를 지었다.',
      ]);
      await defender.say_and_wait(['그렇구나…… 정말이지 『기운찬』 육봉이네❤️']);
    } else if (defender.sex_code !== 1) {
      await attacker.say_and_wait([
        '이제부터 육봉으로 뺨을 때릴 거야. ',
        sys_get_colored_callname(attacker.id, defender.id),
        '가 울 때까지.',
      ]);
      await defender.print_and_wait(['자신을 향한 육봉이, 그렇게 선고했다.']);
      await defender.say_and_wait(['울 때까지…… 말이니?']);
      await defender.print_and_wait([
        '그런 말을 듣는 것만으로도, 아랫배에서 뜨거운 열기가 달아오른다.',
      ]);
      await defender.print_and_wait([
        '육봉에 뺨이 비벼지고, 희롱당하며, 따귀를 맞는 와중에 후각마저 온전히 양기에 점령당한 상황이라면 더 말할 것도 없다.',
      ]);
      await defender.say_and_wait(
        ['울 때까지, 계속 육봉으로 뺨을 맞게 되는 거니……'],
        true,
      );
      await defender.say_and_wait(['큰일이구나…… 전혀, 눈물이 날 것 같지 않단다❤️'], true);
    }
  }
};