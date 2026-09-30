/**
 * @file 조교 지문 - 애무계 3
 * @author 天马闪光蹄 (천마섬광제)
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts2 = require('#/event/ero/common/normal/making-outs-2');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function armpit_intercourse(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('최악이야.');
    await defender.print_and_wait([
      '앞에서 손을 높게 치켜든 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 부끄러운 듯 떨리는 엉덩이에서 그런 불평이 읽혀온다.',
    ]);
    await defender.print_and_wait('하지만 이건 어쩔 수 없는 일이다.');
    await attacker.say_and_wait('으으—');
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
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
      sys_get_colored_callname(defender.id, attacker.id),
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function foot_job(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('미소 짓게 되겠지.');
    await defender.print_and_wait([
      '언제나 ',
      attacker.get_colored_name(),
      '이(가) ',
      era.get(`cflag:${defender.id}:종족`) > 0 ? '경기장을 달리던 그 두 발로 ' : '',
      '눈앞의 육봉을 밟았을 때, 그 나쁜 녀석이 흥분해서 오히려 발바닥을 밀어 올리고 있다는 걸 알게 되면 분명 미소 짓게 될 것이다.',
    ]);
    await defender.print_and_wait(
      '저속한 것을 보았을 때의 혐오와 경멸 섞인 미소…… 취향이 이상한 연인에게 보여주는 흥미로운 포용의 미소…… 천진난만하게 그저 이것이 재밌어서 짓는 미소……',
    );
    await defender.print_and_wait([
      '앞에 있는 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '은(는) 어느 쪽일까… 어쨌든 육봉을 더욱 흥분하게 만드는 쪽이겠지.',
    ]);
  } else {
    await defender.print_and_wait('아마 눈치챘을 것이다.');
    await defender.print_and_wait('자신의 발바닥을 침범하고 있는 이 육봉이 결코 약한 물건이 아니라는 것을.');
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function non_penetrative(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('정말로 들어가 버렸어.');
    await defender.print_and_wait([
      '육봉을…… ',
      sys_get_colored_callname(defender.id, attacker.id),
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
      sys_get_colored_callname(defender.id, attacker.id),
      '의 가랑이 사이를 앞뒤로 문지르고 있다.',
    ]);
  } else {
    await defender.print_and_wait('매끈매끈하고 반짝반짝하게 변해버렸어.');
    await defender.print_and_wait('어느 정도 숙련되어 버렸어.');
    await defender.print_and_wait('얌전하게 참을 수 없게 되어버렸어.');
    await defender.print_and_wait('조금…… 외로워진 걸까……');
    await attacker.say_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '……',
    ]);
    await defender.print_and_wait('눈빛도…… 촉촉하게 젖어 있어……');
    await defender.print_and_wait('다리를 이런 식으로 사용당하면 역시 이렇게 되어버리는구나.');
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function tail_job(attacker, defender, hook) {
  if (hook.arg) {
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
      sys_get_colored_callname(defender.id, attacker.id),
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
}

class EroNormalMakingOuts extends EroNormalMakingOuts2 {
  /**
   * @author O口口口口口
   */
  async non_penetrative(attacker, defender, hook) {
    await non_penetrative(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   */
  async ask_non_penetrative(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.clitoris,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait(
        [
          '자기가 무슨 말을 하는지 알고 있는 건가……? ',
          sys_get_colored_callname(defender.id, attacker.id),
          '……',
        ],
        true,
      );
      if (!attacker.id && era.get(`cflag:${defender.id}:종족`)) {
        await defender.say_and_wait(
          `아…… 아…… 담당의 다리를 그렇게 보고 있었던 거구나.`,
          true,
        );
      }
    }
    await non_penetrative(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   */
  async sixty_nine(attacker, defender, hook) {
    if (((attacker.sex_code > 0) ^ (defender.sex_code > 0)) === 0) {
      return;
    }
    if (hook.arg) {
      await era.printAndWait('끈적끈적한 몸이 서로 겹쳐졌다.');
      await era.printAndWait('입술은 보지에 닿고, 입술은 또 육봉에 닿는다.');
      await era.printAndWait('비릿한 애액이 두 사람의 몸속에서 소용돌이친다…… 마치 짐승처럼.');
      await era.printAndWait(
        '어느 쪽이 먼저 시작했는지 모를 정도로, 일부러 낼름낼름거리며 음란한 소리를 내어 상대방도 이를 따라 하게 만든다.',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: '낼름낼름' },
        { color: defender.color, content: '으응, 츄릅……' },
        '……」',
      ]);
      await era.printAndWait('서로 밀착된 몸이 뜨겁게 달아오르고 있다.');
      await era.printAndWait('정신이 아득해질 정도로 뜨겁게……');
    } else {
      await era.printAndWait('본래 청순했던 일자형 꽃잎은 계속된 핥음으로 인해 활짝 벌어진 채 느슨해진 모습이 되었다.');
      await era.printAndWait(
        '본래 흉측하게 충혈되었던 육봉은 그 기특한 혀 덕분에 귀여운 광택이 감돌고 있다.',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: '하아……' },
        { color: defender.color, content: '하아……' },
        '……」',
      ]);
      await era.printAndWait(
        '땀에 젖은 두 육체가 서로 맞닿아 부비며, 이 소중한 휴전 시간을 만끽하고 있다……',
      );
    }
  }

  /**
   * @author O口口口口口
   */
  async armpit_intercourse(attacker, defender, hook) {
    await armpit_intercourse(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   */
  async ask_armpit_intercourse(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait('에?');
      await attacker.print_and_wait('다시 한번 말해줄래……?');
      await attacker.print_and_wait([
        '앞에 선 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 조금 난처한 표정이 그렇게 재촉하고 있다. 그래서……',
      ]);
      await attacker.say_and_wait('겨드랑이에 육봉을 비비게 해주세요!');
      await defender.say_and_wait('……');
    }
    await armpit_intercourse(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   */
  async force_armpit_intercourse(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '강제로 팔이 들어 올려진 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 지금 무슨 생각을 하고 있을까…',
      ]);
      await attacker.print_and_wait('아마 좋은 소리는 아니겠지……');
    }
    await armpit_intercourse(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   */
  async foot_job(attacker, defender, hook) {
    await foot_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   */
  async ask_foot_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.foot,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait('……역시?');
      await attacker.print_and_wait([
        '분명 상식을 벗어난 음란한 요구를 들었음에도, 앞에 있는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 마치 예상했다는 듯 여유로운 표정을 지었다.',
      ]);
      await attacker.print_and_wait('원래…… 이렇게 티가 많이 났던 걸까……');
    }
    await foot_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   */
  async force_foot_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        '이런 요구가 불만스러워 고개를 돌려버리는 건 당연한 반응이겠지.',
      );
      await attacker.print_and_wait(
        '하지만 이쪽 업계에서는 밟힐 때 고개를 돌려주는 게 포상이라고.',
      );
      await attacker.print_and_wait('아…… 이쪽을 봐버렸다……');
    }
    await foot_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   */
  async tail_job(attacker, defender, hook) {
    await tail_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   */
  async ask_tail_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait('하아……');
      await attacker.print_and_wait([
        '앞에 선 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 긴 한숨 소리가 들려오는 것만 같다.',
      ]);
      await attacker.print_and_wait('역시 좀 심했던 걸까……');
      await attacker.print_and_wait([
        '참지 못한 자신에 대해 반성하고 있는 것 같지만, 그럼에도 ',
        attacker.get_colored_name(),
        '은(는) 여전히 앞에 있는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 를 뚫어지게 쳐다보고 있다.',
      ]);
    }
    await tail_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   */
  async force_tail_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('의외로 조용하다?');
      await attacker.print_and_wait([
        '아마도 ',
        attacker.get_colored_name(),
        '의 저속한 성적 취향에 대해 어느 정도 마음의 준비가 된 모양인지, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 이번에 의외로 순순히 따르고 있다.',
      ]);
    }
    await tail_job(defender, attacker, hook);
  }

  /**
   * @author 天马闪光蹄 (천마섬광제)
   */
  async hair_fuck(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('우으—');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) 바닥에 반쯤 주저앉아 익숙한 인영을 올려다보며, 마음속 깊은 곳에서 약간의 두려움을 느꼈다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 즐거운 듯 미소 지으며 허리를 내밀어 ',
        attacker.get_colored_name(),
        ' 에게 다가온다.',
      ]);
      await attacker.print_and_wait([
        '거부할 수 없는 의지를 담은 따뜻한 막대기가 이마를 향해 다가오자, ',
        attacker.get_colored_name(),
        '은(는) 마른침을 삼키며 스스로 머리를 들어 마주하고, 조심스럽게 손가락으로 자신의 머리카락을 모아 그 창을 휘감으며 작업을 시작했다.',
      ]);
    } else {
      await attacker.print_and_wait('스윽스윽……');
      await attacker.print_and_wait('손바닥과 머리카락이 반복해서 그것을 비빈다.');
      await attacker.print_and_wait('이 촉감…… 그것이…… 계속 팽창하고 있어……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) 머리카락 끝이 근질거리는 것을 느끼며 호흡이 거칠어졌다.',
      ]);
    }
  }

  /**
   * @author 天马闪光蹄 (천마섬광제)
   */
  async ask_hair_fuck(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      switch (era.get(`cflag:${defender.id}:머리길이`)) {
        case 0: // 단발
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            '……?',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            '이(가) 기대와 부끄러움이 뒤섞인 표정으로 고개를 살짝 들자, 정수리에 뜨겁고 보기보다 묵직한(심리적인 이유일까?) 물체가 느껴졌다. 너무나 가까운 거리와 농밀한 호르몬 냄새가 정보를 처리하고 사고해야 할 두뇌를 완전히 어지럽힌다.',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            '이(가) ',
            attacker.get_colored_name(),
            '의 가랑이 사이에 주저앉아, 표정이 저절로 음란하게 변해버렸다……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            '은(는) 자신도 모르게 미소를 지었다. 양손을 뻗어 상대방의 두 귀 옆에 가만히 대고 머리를 부드럽게 고정시킨 뒤…… 허리를 움직이기 시작했다.',
          ]);
          await attacker.print_and_wait([
            `성기가 머리카락 사이를 오가며 잘 정돈된 단발머리를 엉망으로 흩트려놓고, 자신이 움직일 경로를 닦아낸다. 머리카락과 피부의 마찰 자극으로 인해 그곳의 끝에서 액체가 흘러나와 운동이 더욱 매끄러워진다. 액체는 정수리에서 타고 내려와 이미 제정신이 아닌 채 헐떡이는 상대방의 속눈썹 위로 흐르다 뚝뚝 떨어진다……`,
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            '은(는) 이런 광경을 보며 다시 한번 성기가 단단해지는 것을 느꼈다.',
          ]);
          break;
        case 1: // 중단발
          await defender.say_and_wait('그걸…… 하고 싶다고?!');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 앞에 앉은 ',
            sys_get_colored_callname(attacker.id, defender.id),
            '이(가) 「변태 같아」와 「정말 어쩔 수 없네」가 섞인 어조로 말하더니, 한숨을 내쉬며 머리를 가볍게 흔들었다. 기분 좋은 향기를 머금은 부드러운 머리카락이 이미 꼿꼿이 서 있는 ',
            attacker.get_colored_name(),
            '의 성기를 스치고 멈춰 섰다.',
          ]);
          await attacker.print_and_wait('이제 자기 차례다.');
          await attacker.print_and_wait([
            '허리를 내밀어 자신의 물건이 비스듬히 미끄러져 내려가 목덜미에 닿게 하자, 촘촘한 머리카락과 매끄러운 피부의 이중 자극에 ',
            attacker.get_colored_name(),
            '은(는) 자신도 모르게 탄성을 내뱉었다.',
          ]);
          await attacker.print_and_wait([
            `상대방은 `,
            attacker.get_colored_name(),
            '의 그런 모습을 보더니 눈썹을 치켜올리고는, 목을 살짝 틀어 한 손으로 ',
            attacker.get_colored_name(),
            '의 그것을 가볍게 눌렀다. 삼중의 압박이 그것을 가운데에 끼워버리자 여러 감각이 동시에 습격해 왔고, ',
            attacker.get_colored_name(),
            '은(는) 만족스럽게 숨을 내뱉었다.',
          ]);
          break;
        case 2: // 장발
          await defender.say_and_wait('후훗……');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '이(가) 웃는 건지 마는 건지 모를 표정으로 ',
            attacker.get_colored_name(),
            ' 를 바라보자, ',
            attacker.get_colored_name(),
            ` 는 조금 찔렸지만 여전히 몸짓으로 그렇게 해달라고 간청했다.`,
          ]);
          await attacker.print_and_wait([
            `상대방은 일부러 몇 초간 `,
            attacker.get_colored_name(),
            ' 를 애태우는 듯하더니, 이내 두 손을 등 뒤로 돌려 긴 머리카락을 쓸어올리고는 단숨에 위로 쳐올렸다—',
          ]);
          await attacker.print_and_wait([
            '수만 가닥의 머리카락이 ',
            attacker.get_colored_name(),
            '의 민감한 부위 위로 쏟아져 내렸다. 시원하고도 간지러운 느낌에 ',
            attacker.get_colored_name(),
            '은(는) 숨을 들이켰다. 아니, 아직 끝이 아니다—',
          ]);
          await attacker.print_and_wait([
            `자신의 머리카락을 움켜쥔 상대방의 손이 이어서 다가와 열 손가락으로 감싸 쥐고, 머리카락과 함께 하나의 뭉치를 만들어 `,
            attacker.get_colored_name(),
            '의 하반신을 완전히, 세밀하게 감싼 뒤 흔들기 시작했다—',
          ]);
          await attacker.print_and_wait([
            '이번 자극은 ',
            attacker.get_colored_name(),
            ' 에게 있어 과분할 정도로 강렬했다.',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:머리길이`)) {
        case 0:
          await attacker.print_and_wait(
            '귀 끝을 가볍게 어루만진다. 손끝에 닿는 솜털의 섬세함을 느끼는 것이 아니라, 그것을 살짝 굽혀 자신의 보물에 비빈다.',
          );
          await attacker.print_and_wait([
            '미끄러지듯 움직이며, 평소에는 경험하기 힘든 신체 털의 자극에 ',
            attacker.get_colored_name(),
            '은(는) 몹시 흥분했다.',
          ]);
          await attacker.print_and_wait([
            `아래에 있는 상대방이 들릴 듯 말 듯 한 신음 소리를 내자, `,
            attacker.get_colored_name(),
            '의 욕망은 더욱 불타올랐다.',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            `세 부위…… 세 종류의 촉감…… 눈앞의 상대방이 직접 `,
            attacker.get_colored_name(),
            ' 를 위해 이런 봉사를 해주고 있다……',
          ]);
          await attacker.print_and_wait('세상에 이보다 더 기분 좋은 일은 없을 것이다.');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            '은(는) 입가에 옅은 미소를 띠며 눈을 감고 즐겼다.',
          ]);
          break;
        case 2:
          await attacker.print_and_wait('시냇물처럼 흐르는 물결 같고, 부드럽게 감기는 비단 같다.');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            '의 그것은 아주 기묘한 구멍 속으로 들어갔다.',
          ]);
          await attacker.print_and_wait([
            '반복되는 마찰에 ',
            attacker.get_colored_name(),
            '은(는) 자신도 모르게 다리에 힘을 주었고, 성기 끝에서 무색의 액체가 조금씩 흘러나왔다……',
          ]);
      }
    }
  }

  /**
   * @author 天马闪光蹄 (천마섬광제)
   */
  async force_hair_fuck(attacker, defender, hook) {
    if (hook.arg) {
      switch (era.get(`cflag:${defender.id}:머리길이`)) {
        case 0:
          await defender.say_and_wait('엣…… 윽!');
          await attacker.print_and_wait([
            '갑작스럽게, ',
            attacker.get_colored_name(),
            ` 가 앞에 선 상대방의 얼굴을 붙잡고는 자신의 뜨겁게 충혈된 물건을 귓바퀴와 머리카락 사이의 틈에 끼워 넣었다. 상대방의 머리를 가볍게 흔드는 동시에 허리의 움직임을 가속한다. 피부와 머리카락 사이에 끼여 반복해서 마찰되는 성기는 즉시 흥분하여 팽창하기 시작했다.`,
          ]);
          await attacker.print_and_wait([
            `상대방은 무슨 일이 일어난 건지 이해하기도 전에 사고를 포기해야 했다. 외부 정보를 받아들이고 처리해야 할 부위가 이미 `,
            attacker.get_colored_name(),
            '의 하반신이 날뛰는 장소가 되어버렸기 때문이다.',
          ]);
          break;
        case 1:
          await defender.say_and_wait('하아, 잠, 잠시만!');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ` 의 눈빛을 보고 상대방은 다음에 무슨 일이 일어날지 예감한 듯, 한 손으로는 뒷머리를 감싸고 다른 한 손으로는 황급히 손사래를 쳤다. 하지만 `,
            attacker.get_colored_name(),
            '은(는) 아랑곳하지 않았다.',
          ]);
          await attacker.print_and_wait([
            `성큼 다가가 어깨를 꽉 누르고 허리를 내밀어, 자신의 분신을 상대방에게 있어 은밀한 부위인 뒷목에 밀어 넣었다. 부드러운 머릿결과 매끄럽고 하얀 피부 사이에서 즐겁게 미끄러지기 시작했다.`,
          ]);
          break;
        case 2:
          await defender.say_and_wait('알았어…… 정 그렇다면야.', true);
          await attacker.print_and_wait([
            `잠시 대치한 끝에 상대방이 물러나자, `,
            attacker.get_colored_name(),
            '은(는) 승리자의 기분으로 전리품을 즐기기 시작했다.',
          ]);
          await attacker.print_and_wait([
            '주로 사용하는 손을 뻗어, ',
            attacker.get_colored_name(),
            ` 는 상대방의 수려하고 은은한 향기가 나는 긴 머리카락을 만지작거리며 나쁜 미소를 지었다. 머리카락을 한 움큼 집어 들어 상대방이 평소 정성껏 관리하던 것을 자신의 물건에 거칠게 감았고, 동시에 살짝 잡아당기며 색다른 자위의 쾌감을 맛보았다.`,
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:머리길이`)) {
        case 0:
          await attacker.print_and_wait([
            '가랑이 사이에 있는 ',
            sys_get_colored_callname(attacker.id, defender.id),
            '의 은밀한 곳을 가로지르며, ',
            attacker.get_colored_name(),
            '의 성기는 눈에 띄게 더 흥분했다.',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 에게 눌려 있는 ',
            sys_get_colored_callname(attacker.id, defender.id),
            '의 표정은 이제 분간하기 어렵지만…… 수줍게 붉어진 얼굴과 귓가에서 현재 상태를 엿볼 수 있다.',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            '은(는) 입술을 핥으며 더욱 열정적으로 비벼댔다.',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            '은(는) 미끄러운 피부 위를 반복해서 문지르며…… 분신을 어루만지는 가느다란 머리카락 끝을 느끼고 육체의 아름다운 감각, 그리고 정신적인 정복의 만족감을 만끽했다.',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            '평소 정갈하고 부드럽게 관리되었던 머릿결이 ',
            attacker.get_colored_name(),
            ' 에 의해 엉망진창으로 헝클어졌다.',
          ]);
          await attacker.print_and_wait([
            '음모와 몇 가닥의 머리카락이 엉키면서, ',
            attacker.get_colored_name(),
            ` 의 수컷 냄새가 상대방의 향기 위를 덮어씌웠다.`,
          ]);
          await attacker.print_and_wait([
            '야만적으로 움직이고, 야만적으로 낙인찍으며…… ',
            attacker.get_colored_name(),
            ` 는 야만적으로 상대방의 소중한 것을 이용해 성욕을 발산했다.`,
          ]);
      }
    }
  }
}

module.exports = EroNormalMakingOuts;