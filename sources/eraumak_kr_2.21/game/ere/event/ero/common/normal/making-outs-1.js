/**
 * @file 조교 지문 - 애무계 1
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common/interface/ero-making-outs');
const { pet_leg, pet_tail } = require('#/event/ero/common/snippets');
const {
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function blow_job(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait(
      '눈앞의 광경을 보니, 정말이지 죄책감이 울컥 솟구치는군요……',
      true,
    );
    if (
      era.get(`cflag:${attacker.id}:종족`) &&
      era.get(`cflag:${attacker.id}:성별`) - 1
    ) {
      await attacker.print_and_wait(
        '우마무스메와 페니스, 거의 접점이 존재하지 않던 이 두 단어가 지금 이 순간 끈적하게 이어져 있다……',
      );
    }
    await attacker.print_and_wait(
      `자신의 입술이 페니스에 의해 강제로 벌어지고, 원래는 영양분을 섭취해야 할 자리에 딱딱하게 발기한 불길한 녀석이 자리 잡아, 몸을 이상하게 만드는 저질스러운 냄새를 제멋대로 풍기고 있다.`,
    );
    await attacker.print_and_wait('웅크린 몸이 떨리기 시작했다…… 어째서일까……');
    await attacker.print_and_wait('이런 일, 역시 좀 이상한 걸까……?');
  } else {
    await attacker.say_and_wait('츄릅, 츄르릅~~');
    await attacker.print_and_wait('어느샌가 조금 더 능숙해졌다……');
    await attacker.print_and_wait(
      '고개를 약간 들어 올리면 눈앞의 페니스를 더 깊숙이 머금울 수 있다……',
    );
    await attacker.print_and_wait(
      '눌린 혀로 측면을 살짝 핥으면, 기분 좋은 듯 파르르 떨린다.',
    );
    await attacker.print_and_wait('입술을 좀 더 활용해 본다면…… 쪽……');
    await attacker.print_and_wait(
      '콜록, 콜록…… 밀려 들어오는 진하고 부끄러운 냄새에 머릿속이 어질어질해진다……',
    );
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_blow_job(attacker, defender, hook) {
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
      await attacker.say_and_wait('부탁이야—');
      await defender.print_and_wait([
        '앞에 있는 ',
        sys_get_colored_callname(defender.id, attacker.id),
        `이(가) 갑자기 얼굴이 붉어질 만한 말을 꺼냈다.`,
      ]);
      await defender.print_and_wait(
        '갑자기 이런 요구를 하다니, 거절당하고 걷어차여도 할 말 없다고……',
      );
    } else {
      await attacker.say_and_wait('입 벌려.');
      await defender.print_and_wait(
        '저항하면 소용이 있을지도 모른다고 생각했지만, 몸은 조금씩 그 손에 눌려 아래로 내려가고 있다……',
      );
      await defender.say_and_wait('으으……');
    }
  } else {
    if (is_asking) {
      await defender.print_and_wait('같은 요구를 몇 번이고 반복하는 건 너무 반칙인데……');
    } else {
      await defender.say_and_wait('하아……', true);
      await defender.say_and_wait('더…… 계속할 건가요……', true);
    }
  }
  await blow_job(defender, attacker, hook);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_cunnilingus(attacker, defender, hook) {
  const is_asking = hook.hook === ero_hooks.ask_cunnilingus;
  if (hook.arg) {
    if (is_asking) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.clitoris,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('부탁해……');
      await defender.print_and_wait([
        `비록 아직 부끄러움이 남아있지만, 앞에 있는 `,
        sys_get_colored_callname(defender.id, attacker.id),
        `은(는) 스스로 양손을 사용해 떨리는 두 다리를 이쪽으로 벌렸다.`,
      ]);
    } else {
      await attacker.say_and_wait('부탁할게~');
      await defender.print_and_wait([
        `주도적으로 다리를 벌린 `,
        sys_get_colored_callname(defender.id, attacker.id),
        `이(가) 기대 섞인 눈빛으로 자신의 아래에 있는 담당을 바라보며, 시선을 회피하는 `,
        defender.get_colored_name(),
        '의 머리를 손으로 눌러 내렸다.',
      ]);
    }
    await defender.say_and_wait('으으으으————');
    await defender.print_and_wait(
      '그것을 입에 담지 않을 이유가 없다. 눈앞에서 음란한 암컷의 냄새를 풍기며 충혈된 클리토리스를 보호막에서 끄집어낸 뒤, 그것을 외롭게 내버려 둔 채 떨게 놔둘 이유 따위는 없다.',
    );
    await defender.print_and_wait([
      '그래서 ',
      defender.get_colored_name(),
      '은(는) 몸을 깊게 숙여, ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 넓게 벌어진 가랑이 사이로 머리를 묻었다.',
    ]);
    if (!is_asking) {
      await attacker.say_and_wait('하아❤️');
      await defender.print_and_wait(
        '민망한 요구를 한 쪽이면서, 지금은 정신없이 몸을 흔들고 있다……',
      );
    }
    await defender.print_and_wait('반사적으로 오므린 허벅지 사이가 떨리고 있다.');
    await defender.print_and_wait('이쪽의 허리를 감싼 무릎이 떨리고 있다.');
    await defender.print_and_wait('허리 뒤로 돌린 두 발이 떨리고 있다.');
    await defender.print_and_wait('아…… 왜 갑자기 이렇게 된 걸까……');
    await defender.print_and_wait(
      '설마 혀끝에 닿아 점점 더 젖어가는 이 작은 돌기 때문은 아니겠지.',
    );
  } else {
    await continue_cunnilingus(defender, attacker);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_suck_virgin(attacker, defender, hook) {
  const is_asking = hook.hook === ero_hooks.ask_suck_virgin;
  if (hook.arg) {
    if (is_asking) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.virgin,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait('하아……');
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        `이(가) 지금 자신의 눈앞에서 손가락으로 분홍빛 비순을 벌리고 있다. 그렇다면 이쪽에서 무엇을 해야 할지는 불 보듯 뻔한 일이다……`,
      ]);
    } else {
      await defender.say_and_wait('으으—');
      await defender.print_and_wait(
        '강제로 머리가 눌렸고, 비명을 지르며 벌리려던 입술은 그대로 노골적인 보지와 맞닥뜨렸다.',
      );
    }
  } else {
    if (is_asking) {
      await defender.print_and_wait(
        '그만하라는 요청이 좀처럼 들리지 않기에, 이쪽의 혀도 중도에 멈출 이유가 없다.',
      );
      await defender.print_and_wait('하지만……');
    } else {
      await attacker.say_and_wait('하아~');
      await defender.print_and_wait([
        `만족스러웠는지, 시원한 맥주라도 들이킨 것처럼 `,
        sys_get_colored_callname(defender.id, attacker.id),
        `이(가) 상쾌한 숨을 내뱉었다.`,
      ]);
    }
  }
  await suck_virgin(defender, attacker, hook);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function continue_cunnilingus(attacker, defender) {
  await attacker.print_and_wait('혀끝으로 가볍게 건드린다.');
  await attacker.print_and_wait('빨아올려 세운다.');
  await attacker.print_and_wait('살짝 숨을 불어넣는다.');
  await attacker.print_and_wait('조금 고민되는군……');
  await attacker.print_and_wait([
    '눈앞의 클리토리스를 어떤 방식으로 자극하든, 앞에 있는 ',
    sys_get_colored_callname(attacker.id, defender.id),
    '이(가) 똑같이 쾌락 속에서 떨고 있다면, 어떤 것을 더 좋아하는지 알 수 없지 않은가.',
  ]);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function suck_virgin(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait(
      '심장 박동을 빠르게 만드는 냄새…… 혀끝에서 온몸으로 녹아드는 새콤달콤하고 비릿한 맛……',
    );
    await attacker.print_and_wait(
      '혀로 음부를 핥는 이 애매한 연결 자세 속에서, 과연 어느 쪽이 먼저 가버리는 걸까……',
    );
    await attacker.print_and_wait('부드러움과 부드러움의 대결.');
    await attacker.print_and_wait(
      '휘파람을 불 듯 오므린 입술 모양으로 질구 안쪽을 향해 강제로 말려 들어가 천천히 나아가는 혀와, 따뜻한 자극에 대응해 서투르게 꿈틀대며 맞서는 구멍……',
    );
    await attacker.print_and_wait('어느 쪽도 쉽게 물러날 수 없는 이유가 있다……');
  } else {
    await attacker.print_and_wait('슬슬 다른 일을 해도 좋겠군.');
    await attacker.print_and_wait(
      '처음에 어떻게 한 줄 좁은 틈처럼 청순한 형태를 유지했는지 기억나지 않을 정도로, 계속되는 혀의 애무에 안팎으로 흠뻑 젖어버린 구멍은 이제 밖으로 뒤집힌 채 파르르 떨리고 있다……',
    );
    await attacker.print_and_wait(
      '그리고 그 나쁜 아이의 허리를 꽉 조이고 있던 두 다리도, 어느샌가 힘이 풀려 발레리나처럼 발끝만 높게 세운 모양새로 남았다.',
    );
  }
}

module.exports = class extends EroMakingOuts {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:종족`)) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        `${defender.get_uma_sex_title()}의 귀는 역시 동경하게 되는 것이군. 신체의 연장선으로서든, 표정의 연장선으로서든, 아니면…… 성감대의 연장선으로서든……`,
      );
      await attacker.print_and_wait([
        `그저 손가락 끝으로 스치듯 부드럽게 만졌을 뿐인데, `,
        attacker.get_colored_name(),
        `이(가) 손끝에 닿는 그 섬세한 감촉을 채 느끼기도 전에, 그 뾰족하고 긴 귀는 부끄러운 듯 ${attacker.get_phy_sex_title()} 의 손가락 사이에서 빠져나갔다.`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait('부디…… 한 번 더 만져주세요. 이번에는 도망치지 않을게요.');
      await attacker.print_and_wait([
        '품 안의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 지금 얼굴이 매우 붉다.',
      ]);
    } else {
      await attacker.print_and_wait('후후……');
      await attacker.print_and_wait(
        '손안에 도망가지 않는 귀가 있다. 조밀한 솜털이 손가락 마디를 애무하는 듯한…… 몸과 마음이 모두 치유되는 기분이다.',
      );
      await attacker.print_and_wait('이것이 연인으로서의 특권인가……');
      await attacker.print_and_wait('그나저나, 지금 그곳의 상태가 궁금하군……');
      await attacker.print_and_wait([
        '마치 보이지 않는 실로 이어진 것처럼, ',
        sys_get_colored_callname(attacker.id, defender.id),
        `의 두 다리는 귀를 붙잡고 있는 ${attacker.get_phy_sex_title()} 의 손에 맞춰 부끄럽게 파르르 떨리고 있다.`,
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
  async pull_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:종족`)) {
      return;
    }
    await attacker.print_and_wait('이러면 안 되는데……');
    await attacker.print_and_wait('……이건 연인으로서 해야 할 일이 아니야……');
    await attacker.print_and_wait('……하지만');
    await attacker.print_and_wait(
      `단순하고 부드러운 애무에 만족하지 못하고, 하반신에서 치밀어 오르는 지배욕에 사로잡힌 ${attacker.get_phy_sex_title()}는, 점점 안전하게 손가락 사이의 힘을 주는 법을 깨달아갔다……`,
    );
    await attacker.print_and_wait(
      `……그렇게 하면 발치 아래의 동물귀 달린 ${defender.get_phy_sex_title()}에게 깨닫게 해 줄 수 있다. 몸속에서 서서히 깨어나는, 인간을 향해 꼬리를 흔드는 혈통의 기억이 대체 언제, 어디서부터 시작된 것인지……`,
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_breast(attacker, defender, hook) {
    const touched = era.get(`tcvar:${defender.id}:질구접촉부위`);
    if (
      touched.part === part_enum.penis &&
      touched.owner === attacker.id &&
      defender.sex_code !== 1
    ) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 보여주는 나약한 모습에 조금의 동정이나 만족도 느끼지 못한 채, 쉽게 만족할 줄 모르는 ',
        attacker.get_colored_name(),
        '은(는) 그저 사과가 떨어지듯 아래로 툭 불거진 모양의 아름다운 가슴으로 양손을 더 깊숙이 뻗었다.',
      ]);
      await defender.say_and_wait('하아……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) 풍만한 가슴 살을 거머쥔 다섯 손가락에 더욱 힘을 주어, ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 자신의 부드러움을 오직 자신만이 좋아하는 모양으로 제멋대로 바꾸어버렸다.',
      ]);
    } else if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait([
        era.get(`cflag:${defender.id}:성장단계`) < 5
          ? defender.get_teen_sex_title()
          : '유혹적인',
        '의 부드러움이…… 지금 자신의 손바닥 안으로 떨어졌다.',
      ]);
      await attacker.print_and_wait(
        '참을 수 없는 손가락 끝이 저절로 움직이기 시작했다. 하루빨리 눈앞의 부드러운 살결에 지문을 새기고, 자신에게 더 어울리는 모양으로 만들고 싶어 안달이 났다.',
      );
      await defender.say_and_wait('으으……');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸이 자신의 손가락을 따라 흔들리며 묘한 소리를 내고 있다…… 하아, 인정할 수밖에 없군. 이 감각은 멈추고 싶지 않을 정도로 환상적이야……',
      ]);
    } else {
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait([
        '아, 이쪽도 슬슬 느껴지는군…… 눈앞의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸이, 자신의 손길에 긴장하고 있으며, 또한 자신의 손길에 외로워하고 있다는 것을……',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait('하지만, 역시 조금 더 제멋대로 굴고 싶어.');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      if (!era.get(`cflag:${defender.id}:종족`)) {
        return;
      }
      await attacker.print_and_wait('뜨거워……');
      await attacker.print_and_wait(
        '비록 하얀 가슴 위에 박힌 작은 살덩이에 불과하지만, 엄청난 열기를 내뿜고 있다.',
      );
      await defender.say_and_wait('으으……');
      await attacker.print_and_wait(
        '손가락으로 유륜 주위에 원을 그리며, 그 분홍색 작은 점이 손가락의 압박 아래 조금씩 부풀어 오르고, 조금씩 곧추세워지며, 조금씩 손가락에 대항하는 단단한 경도를 갖추는 것을 지켜본다……',
      );
      await attacker.print_and_wait('……그러고 나서 힘을 조금 더 주어 그것을 짓눌렀다.');
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait('아, 꼬리로 한 대 맞았다.');
    } else {
      await attacker.print_and_wait('이대로 젖이라도 짤 수 있을 것 같군……');
      await attacker.print_and_wait(
        '연속된 애무로 딱딱하게 변해버린 저질스러운 유두를 보니 그런 생각이 절로 든다……',
      );
      await defender.say_and_wait('꺄아—');
      await attacker.print_and_wait([
        '',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 가 고개를 숙인 채 숨을 헐떡이며 한눈을 파는 사이, 손가락으로 유두를 위로 끌어올려 본다……',
      ]);
      await attacker.print_and_wait('당황하는 모습이 참 맛있군.');
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
      await attacker.print_and_wait([
        '',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 다리를 벌리고, 이렇게 뚫어지게 ',
        defender.sex,
        '의 벌거벗은 하반신을 쳐다보다니……',
      ]);
      await attacker.print_and_wait(
        '이제 되돌아갈 기회는 없어…… 하지만 오히려 그 사실이 나를 더 흥분시킨다……',
      );
      await attacker.print_and_wait(
        '손가락으로 그 분홍색 작은 돌기를 덮고 있는 표피를 문질러 벌리고, 민감한 클리토리스가 공기 중에 노출되면서 귀여운 분홍색에서 점점 더 요염하고 충혈된 붉은색으로 변하는 것을 지켜본다.',
      );
      await attacker.print_and_wait('……안심해, 부드럽게 해 줄 테니까.');
    } else {
      await defender.say_and_wait('으으……');
      await attacker.print_and_wait(
        '아아, 어느샌가 벌써 이렇게 빨갛고 퉁퉁 부은 불쌍한 모습이 되어버렸군.',
      );
      await attacker.print_and_wait([
        '그저 간단한 접촉과 약간의 인내심만으로도, 이 작은 민감한 살덩이는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 깨끗한 몸을 방탕하게 움직이게 만든다……',
      ]);
      await defender.say_and_wait('꺄아—');
      await attacker.print_and_wait('한 번만 더 보자, 마지막으로.');
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
    await defender.say_and_wait('으으……');
    await attacker.print_and_wait(
      '몸의 반응은 아직 뻣뻣한데, 보지는 아무런 저항 없이 이 검지 손가락 끝부터 첫 번째 마디까지 꿀꺽 집어삼켜 버렸다……',
    );
    await attacker.print_and_wait('손가락이 뜨겁게 키스당하고 있다.');
    await attacker.print_and_wait(
      '위로 긁고, 아래로 문지르고, 질 근육의 꿈틀거림에 맞춰 양옆으로……',
    );
    await attacker.print_and_wait('하아…… 다리를 이렇게 꽉 조이면 더 이상 계속할 수 없잖아.');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prepare_virgin(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:종족`)) {
      return;
    }
    await attacker.print_and_wait(
      `조심스럽게 손가락 두 개를 밀어 넣어, 눈앞에 드러난 ${defender.get_teen_sex_title()}의 한 줄기 좁은 틈 같은 좁은 보지를 헤집어 벌린다.`,
    );
    await attacker.print_and_wait('아름다워……');
    await defender.say_and_wait('그렇게 빤히 쳐다보지 마세요……', true);
    await attacker.print_and_wait('거칠게 흔들리는 꼬리가 그렇게 불평했지만, 그래도……');
    await defender.say_and_wait('으으—');
    await attacker.print_and_wait(
      '후우, 손가락으로 보지를 넓히는 정도가 깊어질수록, 손가락 사이로 꿈틀대는 구멍 내부에서 뿜어져 나오는 열기와 매혹적이고 가려운 느낌을 느낄 수 있다.',
    );
    await attacker.print_and_wait('손가락 하나 더 넣어도 괜찮겠지?');
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
        `${defender.sex}를 더 기분 좋게 해주고 싶어, ${defender.sex}의 보지를 더 부드럽게 만들고 싶어, 이 아름다운 몸이 내 움직임 때문에 더 정신없이 뒤틀리게 만들고 싶어……`,
      );
      await defender.say_and_wait('하아…… 하아……');
      await attacker.print_and_wait(
        '단지 손가락만 움직일 뿐인데, 뇌 속에서 폭주하는 욕망 때문에 숨이 가빠진다.',
      );
      await attacker.print_and_wait('어디 있을까…… 이제 곧 닿을 텐데……');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('으으—');
      await attacker.print_and_wait([
        '주변의 질 근육에 비해 미세하게 돌출된 감촉이 손가락을 자석처럼 끌어당겼고, 그 불룩한 살결 특유의 뜨거운 온도와 끈적한 촉감이 느껴졌다…… 그리고 정답을 확인해 준 것은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이 갑자기 들어 올린 허리와 범행 중인 팔을 꽉 조여오는 두 다리였다.',
      ]);
      await attacker.print_and_wait('……찾았다.');
    } else {
      await attacker.print_and_wait('압박한다.');
      await attacker.print_and_wait('비벼댄다.');
      await attacker.print_and_wait('찌른다.');
      await attacker.print_and_wait('두꺼운 손톱으로 자극한다.');
      await attacker.print_and_wait([
        '이 손이 만족할 때까지, 어느새 땀에 젖어 흐물흐물해진 ',
        defender.get_colored_name(),
        '에게 왜 쾌락이 독약이라 불리는지 확실히 가르쳐 주도록 하자.',
      ]);
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
      await defender.say_and_wait('으응——!?');
      await attacker.print_and_wait([
        '조금 늦긴 했지만, 눈앞의 엉덩이 ',
        defender.get_adult_sex_title(),
        '는 확실히 이쪽의 의도를 눈치챘다. ',
        attacker.get_colored_name(),
        '의 손가락이 묘하게 가까이 다가와, 몸이 적당히 경계할 만한 거친 촉감으로 그 작은 항문 주위를 맴돌고 있다.',
      ]);
      await attacker.print_and_wait([
        '그리고 이 「적당한」 경계심은…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 가 무의식적으로 손가락을 향해 아양 떨 듯 치켜올린 엉덩이와…… ',
        era.get(`cflag:${defender.id}:종족`) ? '정신없이 흔들리는 말 꼬리에서 드러나고 있다……' : '',
      ]);
    } else {
      await defender.print_and_wait('그래서…… 대체 거기를 공격하고 싶은 건가요 아닌가요……');
      await defender.print_and_wait([
        `이건…… 착각일까요…… `,
        sys_get_colored_callname(defender.id, attacker.id),
        `…… 마치 이런 애타게 만드는 리듬을 유독 즐기는 것 같은데……`,
      ]);
      await defender.print_and_wait(
        '긴장을 유지하지 못한 채, 묘한 애무에 녹아버린 엉덩이 구멍은 이미 살며시 이완되어, 무엇을 삼켜도 이상하지 않을 성애의 구멍으로 변해버렸다.',
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
  async prepare_anal(attacker, defender, hook) {
    await attacker.print_and_wait(
      `손바닥으로 벌름거리는 구멍에서 뿜어져 나오는 노골적인 열기를 느끼며, 네 손가락으로 부끄러운 구멍을 억지로 다물게 하려 하거나 ${attacker.get_phy_sex_title()} 의 시선을 피하려는 둔부를 단단히 고정했다.`,
    );
    await attacker.print_and_wait(
      '유독 굵고 긴 중지만은 따로 할 일이 있다. 전갈 꼬리처럼 살짝 굽힌 채 항문으로 조금씩 다가간 뒤, 느리지만 단호하게 삽입했다.',
    );
    await attacker.print_and_wait('저항감이 강하다.');
    await attacker.print_and_wait([
      '자발적으로 꿈틀대는 구멍의 살결이 마치 살아있는 생명체처럼 숨을 몰아쉬며 ',
      attacker.get_colored_name(),
      `의 손가락을 밀어내려 한다. 옆에 있는 보지처럼 성교를 위해 존재하는 음란한 살점이 아님에도, 지금 ${attacker.get_phy_sex_title()}의 손가락을 대하는 태도는 놀라울 정도로 적극적이다.`,
    ]);
    await attacker.print_and_wait('무서워하고 있는 걸까…… 아니면 기뻐하고 있는 걸까……?');
    await attacker.print_and_wait([
      '헐떡이는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 자신조차 알 수 없다. 수치심에 꿈틀거리는 항문 안쪽에서 전해져 와, 등줄기를 타고 몸을 떨게 만드는 이 전류가 대체 무엇을 의미하는지.',
    ]);
    await defender.say_and_wait(
      '또…… 안으로 들어왔어…… 첫 번째 마디가…… 벌써 전부 다……',
      true,
    );
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
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async pet_tail(attacker, defender, hook) {
    await attacker.print_and_wait('상당히 신선한 체험이다.');
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait(
        `결국 ${defender.uma_sex_title}의 미추 끝에서 뻗어 나와, 평소 교복 치마 뒤에서 눈에 보이는 바람처럼 흔들리던 그 꼬리니까.`,
      );
    }
    await attacker.print_and_wait(
      '콧노래를 흥얼거리며 부드럽게 쓰다듬는다. 손가락으로 부드러운 꼬리털을 따라 점점 위로 쓸어 올리며, 자신의 양손을 꼬리 뿌리에서 배어 나오는 은밀한 냄새로 마음껏 마킹한다……',
    );
    await attacker.print_and_wait('아…… 그러고 보니……');
    await defender.say_and_wait('냄새 맡지 마세요!', true);
    await attacker.print_and_wait(
      '마치 그렇게 꾸짖는 듯, 들어 올리려던 손이 꼬리에 꽉 붙잡혀 꼼짝도 할 수 없게 되었다.',
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_tail(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait('오오~');
      await attacker.print_and_wait([
        '발치 아래의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입에서 새어 나오는 황홀한 신음 소리에는 독이 있다.',
      ]);
      await attacker.print_and_wait(
        `꼬리를 잡아당기는 것으로 눈앞의 ${defender.get_uma_sex_title()}를 온순하고 고분고분하게 만들 수 있다는 것을 알게 되자, 아랫배에서 치밀어 오르는 열기가 더욱 막기 힘들어졌다.`,
      );
    } else {
      await pet_tail(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cunnilingus(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('으으으으————');
      await attacker.print_and_wait(
        '그것을 입에 담지 않을 이유가 없다. 눈앞에서 음란한 암컷의 냄새를 풍기며 충혈된 클리토리스를 보호막에서 끄집어낸 뒤, 그것을 외롭게 내버려 둔 채 떨게 놔둘 이유 따위는 없다.',
      );
      await attacker.print_and_wait([
        '그래서 ',
        attacker.get_colored_name(),
        '은(는) 몸을 깊게 숙여, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 넓게 벌어진 가랑이 사이로 머리를 묻었다.',
      ]);
      await attacker.print_and_wait('반사적으로 오므린 허벅지 사이가 떨리고 있다.');
      await attacker.print_and_wait('이쪽의 허리를 감싼 무릎이 떨리고 있다.');
      await attacker.print_and_wait('허리 뒤로 돌린 두 발이 떨리고 있다.');
      await attacker.print_and_wait('아…… 왜 갑자기 이렇게 된 걸까……');
      await attacker.print_and_wait(
        '설마 혀끝에 닿아 점점 더 젖어가는 이 작은 돌기 때문은 아니겠지.',
      );
    } else {
      await continue_cunnilingus(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_cunnilingus(attacker, defender, hook) {
    await common_ask_cunnilingus(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_cunnilingus(attacker, defender, hook) {
    await common_ask_cunnilingus(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suck_virgin(attacker, defender, hook) {
    await suck_virgin(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_suck_virgin(attacker, defender, hook) {
    await common_ask_suck_virgin(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_suck_virgin(attacker, defender, hook) {
    await common_ask_suck_virgin(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async blow_job(attacker, defender, hook) {
    await blow_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_blow_job(attacker, defender, hook) {
    await common_ask_blow_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_blow_job(attacker, defender, hook) {
    await common_ask_blow_job(attacker, defender, hook);
  }
};