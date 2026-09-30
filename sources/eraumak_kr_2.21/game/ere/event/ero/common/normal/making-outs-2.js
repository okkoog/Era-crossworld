/**
 * @file 조교 지문 - 애무계 2
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts1 = require('#/event/ero/common/normal/making-outs-1');
const { hand_and_blow_job } = require('#/event/ero/common/snippets');
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
async function ask_milk_and_hand_job(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '눈앞이 온통 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 새하얀 피부와 가슴으로 가득해, 분명 맛있을 게 틀림없는 지금의 표정을 볼 수 없다는 게 아쉽다.',
    ]);
    await attacker.print_and_wait([
      '혀끝에서 희롱당하며 춤추는 유두조차 한순간 허무하게 느껴졌지만, ',
      attacker.get_colored_name(),
      '은(는) 곧바로 새로운 즐거움을 찾아냈다.',
    ]);
    await attacker.print_and_wait('대체 어떤 표정을 짓고 있을까.');
    await attacker.print_and_wait(
      `유두를 빨리는${
        era.get(`talent:${defender.id}:모유분비`) ? '(모유가 나오는)' : ''
      } 쾌감에 휩쓸려 하류의 저편으로 가라앉는 듯한 실신 직전의 표정일까…… 손바닥 안에서 꿈틀대는 뜨거운 성기에 어찌할 바를 몰라 하는 부끄러운 표정일까…… 아니면, 이미 완전히 빠져버린 음란한 향락의 표정일까……`,
    );
    await defender.say_and_wait('에!?');
    await attacker.print_and_wait([
      '정답을 알 수 없는 질문이었지만, ',
      attacker.get_colored_name(),
      '의 손가락 사이로 간신히 감싸진 성기는 갑자기 평소보다 더욱 빳빳하게 곤두섰다.',
    ]);
  } else {
    await defender.print_and_wait('이런 자신을 기뻐해야 할지 모르겠다……');
    await defender.print_and_wait([
      '빨리고 있는 ',
      era.get(`talent:${attacker.id}:모유분비`) ? '젖이 배어 나오는 ' : '',
      '유두 옆으로, 혀의 움직임을 통해 겨우 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 표정이 어렴풋이 보인다.',
    ]);
    await defender.print_and_wait(
      '손바닥에 전해지는 성기의 뜨거운 온도와 불거진 핏줄을 통해, 지금 그곳이 어떤 모습일지 머릿속에 그려본다.',
    );
    await defender.print_and_wait('하아… 부디 책임져주세요……');
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function bite_nipple(attacker, defender) {
  await attacker.print_and_wait([
    `치아 사이에 딱딱해진 유두를 머금은 순간, 품 안의 `,
    sys_get_colored_callname(attacker.id, defender.id),
    `의 몸이 단번에 굳어졌다.`,
  ]);
  await attacker.print_and_wait('에헤… 그런가……');
  await attacker.print_and_wait(
    `치아를 살짝 세워 예민한 유두 주위에 울긋불긋한 자국을 남기자… 품 안의 ${defender.get_teen_sex_title()}의 몸이 끊임없이 떨린다……`,
  );
  await attacker.print_and_wait('다음 목표를 눈치챈 걸까, 혀가 유두를 세밀하게 핥으며 적시는 순간, ');
  await defender.print_and_wait([
    defender.get_colored_name(),
    '은(는) 양손을 뻗어 ',
    attacker.get_colored_name(),
    '의 허리를 껴안았다……',
  ]);
  await defender.say_and_wait('으으——');
  await attacker.print_and_wait('귀여워.');
  await attacker.print_and_wait([
    '품 안의 ',
    sys_get_colored_callname(attacker.id, defender.id),
    ' 뿐만 아니라, 빨갛게 부어오른 자국이 가득한 유두도 마찬가지다.',
  ]);
}

async function deep_blow_job_common(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.say_and_wait('츄릅, 츄르릅……');
    await attacker.print_and_wait(
      '이 자리에 있는 두 사람 중 적어도 한 명의 음란한 녀석은 벌써 앞서나가, 이 외설적인 체위에서 츗츗 소리를 내며 미간이 펴질 정도의 금기된 쾌감을 짜내고 있다.',
    );
    await attacker.print_and_wait([
      '……그리하여, ',
      attacker.get_colored_name(),
      '의 이 작은 입은 이 순간부터 영양 섭취 외의 또 다른 의미를 부여받아, 끈적끈적한 소리를 내며 성기를 휘감는 외설적인 성기관으로 전락해 버렸다❤️',
    ]);
    await attacker.print_and_wait(
      '목구멍의 여린 살로 귀두를 맞이하고, 영리한 혀끝으로 성기의 충혈된 핏줄을 부드럽게 훑으며, 공기 한 점 허용하지 않는 조임으로 기둥을 들어 올린다……',
    );
    await attacker.print_and_wait([
      '무엇을 배우고, 무엇을 기억하며, 어떤 모습으로 변해가고 있는 걸까…… 지금 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 가랑이 사이에 웅크리고 있는 ',
      attacker.get_colored_name(),
      '은(는).',
    ]);
  } else {
    await attacker.say_and_wait('하아…… 하아……❤️');
    await attacker.print_and_wait('꿀꺽……');
    await attacker.print_and_wait([
      '산소를 보충하기 위해, 성기를 문 ',
      attacker.get_colored_name(),
      '은(는) 크게 숨을 들이켰다. 성기 냄새가 섞인… 아니, 산소가 섞인 성기 비린내라고 하는 게 더 정확하겠지.',
    ]);
    await attacker.print_and_wait([
      '쿠퍼액과 성기로 입안이 가득 찬 ',
      attacker.get_colored_name(),
      '의 입가에서 억제하지 못한 타액이 흘러나와, 반복되는 구강 삽입 속에서 길게 실을 뽑는 투명하고 걸쭉한 점액질로 변해갔다……',
    ]);
    await attacker.say_and_wait('읍…… 으읍, 으으윽……');
    await attacker.print_and_wait(
      '뭐, 이렇게 몇 번을 반복한다 해도 설마 말하는 법까지 잊어버리지는 않겠지.',
    );
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function hand_job(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.say_and_wait('으음——');
    await attacker.print_and_wait([
      '그 뜨거운 온도에 놀란 듯, ',
      attacker.get_colored_name(),
      '이(가) 성기를 쥐려던 손이 본능적으로 뒤로 움찔했다. 그러고 나서야 겨울날 이불 속으로 발을 밀어 넣듯 조금씩 다시 다가간다.',
    ]);
    await attacker.print_and_wait(
      '분명 꽤 흉악하고…… 여자아이의 아랫배를 욱신거리게 만드는 모양인데……',
    );
    await attacker.print_and_wait(
      '하지만…… 손가락으로 감싸 쥐고 가볍게 흔들자 쿠퍼액을 흘리며 손가락 사이에서 춤추는 모습은… 조금 귀여울지도.',
    );
    await attacker.say_and_wait('하아…… 하아…… 으음——');
    await attacker.print_and_wait('그 기분을 이해할 수 있게 되었다……');
  } else {
    await attacker.print_and_wait('정말 이런 것만으로 괜찮은 걸까……');
    await attacker.print_and_wait(
      `${attacker.get_child_sex_title()}의 손에 쥐여 흔들리는 것만으로 만족하는 거야……?`,
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait('정말로…… 다른 하고 싶은 일은 없는 거야……?');
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function suck_nipple(attacker, defender) {
  if (Math.random() < 0.5) {
    await attacker.say_and_wait('츄릅——');
    await attacker.print_and_wait(
      '눈앞의 하얀 살결과 붉은 점이 본능적으로 피하려 하지만, 혀는 그렇게 쉽게 만족할 수 있는 게 아니다.',
    );
    await attacker.print_and_wait(
      `${defender.get_teen_sex_title()}의 부드러운 가슴이 좌우로 달아나 보지만, 결국 체념한 듯 혀끝에 얌전히 머물렀다.`,
    );
    await attacker.say_and_wait('쫍——');
    await attacker.print_and_wait(
      '점차 혀끝에서 열을 내뿜던 붉은 점이 딱딱하게 곤두서는 실감이 전해졌고, 조심스레 치아 사이에 그 살덩이를 물고는 쭈욱 빨아올렸다——',
    );
    await defender.say_and_wait('으응——!');
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 몸무게가 순식간에 묵직하게 이쪽으로 쏠렸다.',
    ]);
    await attacker.print_and_wait('아마 다리에 힘이 풀린 모양이다.');
  } else {
    const is_milking = era.get(`talent:${defender.id}:모유분비`);
    await attacker.print_and_wait('부끄럽지 않아?');
    await attacker.print_and_wait(
      `무릎베개 서비스를 받으며, ${
        is_milking ? '모유가 배어 나오는' : '하얀'
      } 가슴을 내밀고 있는 거 말이야.`,
    );
    await attacker.print_and_wait(
      '게다가 나 때문인지, 요염하게 물든 유두는 빨기 좋게 길쭉하고 퉁퉁하게 부어올랐는데……',
    );
    await attacker.print_and_wait('……정말로 부끄럽지 않은 거야?');
    await attacker.print_and_wait('전혀 그렇지 않다는 듯.');
    await attacker.print_and_wait('기분 좋게 눈을 가늘게 뜨고, 입을 벌려 그 붉은 돌기를 머금고는 빨아올렸다.');
    if (is_milking) {
      await attacker.print_and_wait('「퓨븃, 퓨뷰븃——」');
      await attacker.print_and_wait([
        `보이지는 않지만 머릿속은 이미, 처음으로 젖이 뿜어져 나왔을 때의 `,
        sys_get_colored_callname(attacker.id, defender.id),
        `의 수치심 섞인 표정과, 하얀 가슴에서 뿜어져 나와 시선을 뗄 수 없게 만들었던 가느다랗고 아름다운 포물선으로 가득 찼다……`,
      ]);
      await attacker.print_and_wait('게다가 조금 달콤하다.');
    }
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function tit_and_blow_job(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait('정말이지…… 가슴이 그렇게 좋은 거야……?');
    await attacker.print_and_wait(
      '정말 디저트 위의 생크림처럼 어디에 묻혀도 맛있다고 생각하는 것 같네……',
    );
    await attacker.say_and_wait('낼름, 츄릅, 츄릅……');
    await attacker.print_and_wait([
      '성기 기둥에 떨어진 쿠퍼액 때문에 가슴 살결이 미끈거리고 번들거렸지만, ',
      attacker.get_colored_name(),
      '은(는) 고생하는 가슴보다는 가장 뜨겁고 팽팽해진 귀두를 양손으로 정성스레 입안으로 모셨다.',
    ]);
    await attacker.say_and_wait('으응……');
    await attacker.print_and_wait(
      '혀가 마음대로 움직이지 않기 시작했지만, 입에 닿은 귀두가 조금이라도 외로움을 느끼는 게 싫어 유두를 모아 성기를 모시는 손길을 멈출 수 없었다……',
    );
  } else {
    await attacker.say_and_wait('츄릅, 낼름……');
    await attacker.print_and_wait(
      '몇 번을 맛봐도 이걸 맛있다고 하기는 어려울 텐데…… 비릿하면서도 음란한 맛이 뇌까지 직접 전해진다……',
    );
    await attacker.print_and_wait('하지만……');
    await attacker.print_and_wait('하지만…………');
    await attacker.print_and_wait('하지만………………');
    await attacker.say_and_wait(
      [
        '왜 멈추지 않는 걸까…… 나도, ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 도……',
      ],
      true,
    );
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function tit_job(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('멋지다고 생각하지 않아?');
    await defender.print_and_wait([
      '이 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '이(가) 내 아래에 엎드려, 소녀만의 부드러운 가슴으로 뜨거운 성기를 감싸 쥐고 있는 모습 말이야……',
    ]);
    await attacker.say_and_wait('으응……');
    await defender.print_and_wait(
      '제대로 전해지는 모양이네. 성기 귀두 끝에서 피어오르는, 애욕이 가득 담긴 뜨거운 열기가.',
    );
    await defender.print_and_wait([
      '손을 뻗어 아래에 있는 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 고개를 들어 올렸다.',
    ]);
    await defender.print_and_wait('음, 아주 맛있게 익은 표정이 되었네.');
  } else {
    await attacker.say_and_wait('……');
    await attacker.print_and_wait([
      '전해져 온다. ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 허리가 뒤로 젖혀지는 것이.',
    ]);
    if (era.get(`cflag:${attacker.id}:종족`)) {
      await attacker.print_and_wait(
        '예민한 귀가 위에서 뿜어져 나오는 거친 콧김에 후우후우 흔들리고 있다.',
      );
    }
    await attacker.print_and_wait(
      '부드러움에 감싸인 성기 역시, 보지를 간단히 떨게 만들 수 있을 정도로 빳빳하게 곤두섰다.',
    );
    await attacker.print_and_wait(
      '무슨 생각을 한 걸까, 심장이 쿵쿵 뛴다. 하지만 이것도 그저 「장님 코끼리 만지기」 같은 거겠지……',
    );
    await attacker.print_and_wait([
      '그리하여 ',
      attacker.get_colored_name(),
      '은(는) 고개를 위로 들었다.',
    ]);
    await attacker.print_and_wait('역시, 짐승 같은 표정이야……');
  }
}

module.exports = class extends EroNormalMakingOuts1 {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async deep_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('이렇게 하면……');
      await attacker.say_and_wait('으읍……');
      await attacker.print_and_wait('역시 조금 힘드네…… 하지만……');
      await attacker.print_and_wait('더 깊숙이 물었어……');
      await attacker.say_and_wait(
        [
          '분명 기분 좋겠지…… 나의…… ',
          sys_get_colored_callname(attacker.id, defender.id),
          '❤️',
        ],
        true,
      );
    } else if (era.get(`cflag:${attacker.id}:종족`)) {
      await attacker.print_and_wait([
        '목구멍을 울리며 성기를 봉사하는 동시에 꼬리를 흔들 정도의 여유가 생겼다. ',
        attacker.get_colored_name(),
        '은(는) 이 방면에 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 예상을 뛰어넘는 재능이 있는 것 같다.',
      ]);
      await attacker.print_and_wait([
        '곁눈질로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        `이(가) 숨을 몰아쉬며 고개를 젖히는 모습을 보며, 콧노래를 부를 틈이 없는 `,
        attacker.get_colored_name(),
        '은(는) 알기 쉽게 귀를 쫑긋거렸다.',
      ]);
    }
    await deep_blow_job_common(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_deep_blow_job(attacker, defender, hook) {
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
      await attacker.say_and_wait('더, 더 깊은 곳까지 원해……');
      await defender.print_and_wait([
        '탐욕스럽게 중얼거리며, 쾌감을 갈구하는 본능에 지배된 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이(가) 허리를 내밀었다.',
      ]);
      await defender.print_and_wait('더 깊숙이 머금어졌다……');
      await defender.print_and_wait('가장 안쪽까지 닿았어……');
    } else {
      await defender.print_and_wait([
        '목구멍을 울리며 성기를 봉사하는 동시에 꼬리를 흔들 정도의 여유가 생긴 모양이다. ',
        defender.get_colored_name(),
        `은(는) 이 방면에 ${attacker.get_phy_sex_title()}의 예상을 뛰어넘는 재능이 있었다.`,
      ]);
      await defender.print_and_wait([
        `곁눈질로 `,
        sys_get_colored_callname(defender.id, attacker.id),
        `이(가) 숨을 몰아쉬며 고개를 젖히는 모습을 보며, 콧노래를 부를 틈이 없는 `,
        defender.get_colored_name(),
        '은(는) 알기 쉽게 귀를 파르르 떨었다.',
      ]);
      await defender.print_and_wait('어때요?');
      await defender.print_and_wait([
        `지금 그 입에는 말할 틈이 없었지만, 자신의 ${
          era.get(`cflag:${defender.id}:종족`) ? '담당' : '파트너'
        } 와(과) 음의 거리로 접촉 중인 `,
        sys_get_colored_callname(defender.id, attacker.id),
        `은(는) 혀끝으로 귀두에 새겨지는 그 공치사 같은 언어를 완벽하게 이해했다.`,
      ]);
    }
    await deep_blow_job_common(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_deep_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('고개 들어.');
      await defender.print_and_wait('더 깊숙이 물게 되었다……');
      await defender.print_and_wait('여전히 다정함이라고는 찾아볼 수 없는 단호한 명령조다.');
      await defender.print_and_wait([
        '하지만 ',
        defender.get_colored_name(),
        '의 몸은 거부할 수 없이 그 명령에 지배당하고 있다.',
      ]);
    } else {
      await defender.print_and_wait(
        `무언의 압박과 함께, ${attacker.get_phy_sex_title()}은(는) 다시 한번 강압적으로 눈앞의 ${defender.get_teen_sex_title()}을(를) 자신의 가랑이 사이에 고정했다. 자신이 만족할 때까지.`,
      );
    }
    await deep_blow_job_common(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_job(attacker, defender, hook) {
    await hand_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hand_job(attacker, defender, hook) {
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
      await attacker.say_and_wait('제발, 도와주세요……', true);
      await defender.print_and_wait([
        `비록 `,
        sys_get_colored_callname(defender.id, attacker.id),
        `이(가) 아무런 말도 하지 않았지만, `,
        defender.get_colored_name(),
        '은(는) 눈앞에서 시뻘겋게 충혈되어 부풀어 오른 성기를 바라보며, 이미 예열을 마친 열 손가락으로 자신이 무엇을 해야 할지 완벽히 이해했다.',
      ]);
    }
    await hand_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_hand_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('손으로 해, 할 수 있지?');
      await defender.print_and_wait([
        `거절할 틈도 주지 않고, `,
        sys_get_colored_callname(defender.id, attacker.id),
        `의 손이 이미 `,
        defender.get_colored_name(),
        '의 앞으로 뻗어왔다. 고분고분하게 손을 뻗어 봉사하거나, 음란한 즙을 흘리는 성기가 궁금해하는 모든 곳을 문지르게 하거나. ',
        defender.get_colored_name(),
        ' 에게 남은 선택지는 그 두 가지뿐이었다.',
      ]);
    }
    await hand_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    await hand_and_blow_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hand_and_blow_job(attacker, defender, hook) {
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
      await defender.say_and_wait('머금어 지고 싶어……?');
      await defender.print_and_wait('아… 그런 건가.');
    }
    await hand_and_blow_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_hand_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('나도 모르게 웅크리고 앉는 자세가 되었다.');
      await defender.print_and_wait(
        '조금 이상하다…… 명확한 요구를 듣지 못했는데도, 몸은 다음에 무엇을 해야 할지 완벽히 알고 있다.',
      );
    }
    await hand_and_blow_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_job(attacker, defender, hook) {
    await tit_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_tit_job(attacker, defender, hook) {
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
        '눈앞의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 유두가 뜨겁게 달아올라 꼿꼿이 설 정도의 강렬한 눈빛으로, 부탁하듯 빤히 바라보았다.',
      ]);
      await attacker.print_and_wait([
        '상대방인 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 역시 견디지 못하고 항복한 모양이다. 나이스.',
      ]);
      await defender.say_and_wait('……');
    }
    await tit_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fuck_tit(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '참지 못하고 허리를 흔들기 시작했다. 차가운 공기보다는 눈앞의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸 위가 분명 성기에 있어 더 어울리는 곳일 테니까.',
      ]);
      await attacker.print_and_wait('알고 있잖아?');
      await attacker.print_and_wait(
        '군더더기 없는 대화는 필요 없다. 그저 눈빛만으로 거부할 수 없는 지시를 전달할 뿐.',
      );
    }
    await tit_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_and_blow_job(attacker, defender, hook) {
    await tit_and_blow_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
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
        '의 가슴 살결 사이로 고개를 내민 귀두가 조금 기운이 없는 모습이다.',
      ]);
      await defender.print_and_wait('게다가 본인도 알기 쉽게 두 손을 모아 간절히 부탁하고 있다.');
    }
    await tit_and_blow_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fuck_tit_and_mouth(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait('뭐라고요……!?');
      await defender.print_and_wait(
        '이쪽의 의사는 전혀 들어줄 생각이 없는 것 같다. 그저 거칠게 자신의 욕망을 실현할 뿐이다.',
      );
    }
    await tit_and_blow_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async suck_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await suck_nipple(attacker, defender);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await bite_nipple(attacker, defender);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_milk_and_hand_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.breast,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    if (defender.sex_code === 1) {
      return;
    }
    await ask_milk_and_hand_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async milk(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await suck_nipple(defender, attacker);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_bite_nipple(attacker, defender, hook) {
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.breast,
        part_enum.mouth,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    if (attacker.sex_code === 1) {
      return;
    }
    await bite_nipple(defender, attacker);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async milk_and_hand_job(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.print_and_wait('알기 쉽네요.');
      await defender.print_and_wait(
        '무릎베개로 수유를 권유받은 뒤, 빳빳하게 곤두선 가랑이 사이 말이에요.',
      );
      await defender.print_and_wait('정말 알기 쉬워요……');
    }
    await ask_milk_and_hand_job(defender, attacker, hook);
  }
};