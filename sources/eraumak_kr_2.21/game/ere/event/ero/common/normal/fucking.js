/**
 * @file 조교 지문 - 성교계
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
  stimulate_glans_by_hole_1,
  stimulate_glans_by_hole_2,
} = require('#/event/ero/common/snippets');

const {
  motion_enum,
  part_enum,
  towards_enum,
} = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function continue_fucking_common(attacker, defender) {
  if (era.get(`tcvar:${defender.id}:절정임박`)) {
    await defender.say_and_wait('오오오오오오————❤️');
    await defender.print_and_wait([
      defender.get_colored_name(),
      '의 몸이 파렴치하게 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 앞에서 경련하듯 격렬하게 뒤틀리며, 젖은 몸에서 배어 나온 따뜻하고 투명한 물방울을 사방으로 흩뿌리고 있다.',
    ]);
    await defender.print_and_wait(
      '하지만 본인은 지금 그런 격식을 차릴 여유가 전혀 없다. 끈적해진 머리카락은 한 줄기씩 엉겨 이마에 드리워졌고, 아랫배 안쪽에서는 두근거리는 고동 소리가 울려 퍼진다. 안에 페니스나 손가락, 혹은 짓궂은 혀가 없더라도, 벌름거리는 보지는 연근처럼 실을 길게 뽑아내며 뜨거운 열기를 내뿜고 있다.',
    );
    await defender.say_and_wait('가버려…… 곧…… 가버릴 것 같아……', true);
    await defender.say_and_wait('빨리…… 더 빨리…… 보내줘❤️', true);
    await defender.print_and_wait([
      '힘이 빠졌다가도 이내 원치 않게 다시 팽팽하게 조여진다. 스스로도 왜 몸이 이런 반응을 보이는지 알 수 없지만, ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 에 의해 이 지경까지 몰린 몸은 오직 야성적인 본능에만 충실할 뿐이다.',
    ]);
    await defender.print_and_wait('어떤 식으로 가버리게 될까, 언제쯤 가버리게 될까.');
    await defender.print_and_wait(
      '하얗게 질린 머릿속은 멈췄다 돌아가기를 반복하며, 오직 그런 생각밖에 할 수 없는 바보가 되어버렸다.',
    );
    await defender.say_and_wait('——❤️');
    await defender.say_and_wait('……오는…… 오는 거야?❤️', true);
  } else {
    await defender.say_and_wait('하아……');
    await defender.print_and_wait(
      '평범한 호흡이라 생각했지만, 목구멍에서는 스스로도 깜짝 놀랄 정도로 요염한 목소리가 새어 나왔다……❤️',
    );
    await defender.print_and_wait('몸은…… 제대로 즐기고 있구나……');
    await defender.print_and_wait('부끄러움……? 저항……?');
    await defender.print_and_wait(
      '그런 감정은 어느샌가 흘러나오는 신음 소리와 함께 사라졌고, 이제…… 솔직해진 자신은 더 많은 것을 원하고 있다…… 더, 더 많이❤️',
    );
    await defender.print_and_wait([
      '더 많이 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 몸에 밀착해 그 온기를 느끼고 싶고, 더 많이 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '에게 저질스러운 일들을 배우고 싶다. 이 젖어버린 뜨거운 몸이 차라리 남부끄러운 모습이 될 때까지 마음껏 유린당하고 싶다……',
    ]);
    await defender.say_and_wait('……하아…… 나중에 제정신이 들었을 때의 자신을 설득할 자신이 없으니까……', true);
    await defender.say_and_wait('……그러니 지금, 마음껏…… 서둘러 주세요❤️', true);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_missionary(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('어쩌면 이것이…… 서로의 체온을 가장 잘 느낄 수 있는 자세일지도 모르겠네요.');
    if (hook.hook === ero_hooks.missionary_anal_sex) {
      await defender.say_and_wait(
        '하지만, 그런 구멍의 온도까지 기억하고 싶은 건가요…❤️',
        true,
      );
    }
    await defender.print_and_wait([
      '소위 정상위, 혹은 선교사 자세라 불리는 이 자세는, 엉겨 붙은 두 사람의 정면에서 바라보면 마치 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '이(가) 품 안에 파고들어 모유를 마시는 듯한 모습과도 같다.',
    ]);
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '의 몸이 ',
      defender.get_colored_name(),
      '의 몸을 덮었고, 단단한 페니스가 가차 없이 보지 안으로 파고든다. ',
      defender.get_colored_name(),
      '의 길고 매끄러운 다리는 다소 볼품없는 모양새로 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 허리 양옆으로 뻗어 나가, 발바닥이 하늘을 향한 채 빳빳하게 굳어버렸다……',
    ]);
    await defender.print_and_wait('뜨거워…… 너무 뜨거워……');
    await defender.print_and_wait('……너무 뜨거워❤️');
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_doggy_style(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait('마치 강아지처럼……');
    await attacker.print_and_wait(
      '그 다리…… 앞발 끝을 바짝 세운 채 무릎을 굽히고, 젖은 허리를 높게 치켜든 그 다리……',
    );
    await attacker.print_and_wait(
      '그 위에서 지탱되고 있는 것은…… 강아지처럼 무의식적으로 흔들리고 있는 엉덩이다.',
    );
    await attacker.print_and_wait([
      '선정적인 자세로 깔려 있는 ',
      era.get(`cflag:${defender.id}:종족`) ? '귀 ' : '',
      defender.get_adult_sex_title(),
      ', 몸의 떨림이 멈추지 않아, 보는 것만으로도 마른 입술을 축이고 싶게 만든다. 페니스의 미약이 되어버린 그녀를 보며, 뒤에서 거친 숨을 내뱉는 ',
      attacker.get_colored_name(),
      '은(는) 고환까지 통째로 집어넣을 듯 달려들었다.',
    ]);
    if (hook.hook === ero_hooks.doggy_style_anal_sex) {
      await attacker.print_and_wait(
        '……어라, 이런 식이면 엉덩이로 불알까지 짜낼 수 있겠는데.',
      );
      await attacker.print_and_wait('이건 뭐 질 나쁜 농담도 아니고 말이지.');
    }
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_sitting(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('예상보다 훨씬 더 부끄러워……');
    await defender.print_and_wait(
      `${
        hook.hook === ero_hooks.sitting ? '보지' : '엉덩이'
      }가 격렬하게 유린당하는 와중에, 뚫어지게 쳐다봐지다니……❤️`,
    );
    await defender.print_and_wait([
      '심술궂은 페니스 때문에 온몸에 힘이 빠져 흐물흐물해졌음에도, ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 시선을 받으니 억지로라도 허리를 꼿꼿이 세우게 된다.',
    ]);
    await defender.print_and_wait(
      `미소를 머금은 그 시선이 붉게 달아오른 얼굴 위를…… ${
        defender.sex_code - 1 ? '출렁이는 부드러운 가슴 위를…… ' : ''
      }페니스의 형태가 비쳐 보이는 아랫배 위를… 탐욕스럽게 훑고 지나간다……`,
    );
    await defender.print_and_wait('설마 아직도 부족한 건가요——');
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_sitting(attacker, defender, hook) {
  if (hook.arg) {
    await defender.print_and_wait('시선을 피하기 위해 선택한 자세.');
    await defender.print_and_wait('하지만 결국 계속 쳐다보고 있잖아요——');
    await defender.print_and_wait([
      '몸을 뒤로 젖힌 채 양손으로 바닥을 짚고 지탱하며, ',
      defender.get_colored_name(),
      '은(는) 페니스를 삼키고 내뱉는 엉덩이를 무의식적으로 흔든다.',
    ]);
    await defender.print_and_wait([
      '그러다 문득 뒤에서 느껴지는 ',
      attacker.get_colored_name(),
      '의 뜨거운 시선이 다시 그곳에 집중된 것을 발견한다…… 정작 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '에게 보이지 않는 얼굴은, 이미 쾌락에 녹아버린 저질스러운 표정을 짓고 있다.',
    ]);
    if (hook.hook === ero_hooks.hug_sitting_anal_sex) {
      await defender.print_and_wait('위험해❤️ 왜 하필 페니스에게 괴롭힘당하는 게 그곳인 거야……');
    }
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_standing(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait('다른 자세보다 더 자궁 깊숙이 닿는 것 같아.');
    await attacker.print_and_wait([
      '무의식적으로 깊은 숨을 내뱉으며, ',
      attacker.get_colored_name(),
      '은(는) 한쪽 다리를 머리 높이까지 치켜든 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 와 몸을 바짝 밀착시켰다.',
    ]);
    await attacker.print_and_wait([
      '팽팽하게 부풀어 오른 고환이 질 입구에 밀착되었고, 페니스 모양대로 불룩해진 아랫배 또한 ',
      attacker.get_colored_name(),
      '의 아랫배와 빈틈없이 맞닿았다.',
    ]);
    await defender.say_and_wait('후우…… 하아……❤️');
    if (hook.hook === ero_hooks.standing_anal_sex) {
      await defender.say_and_wait('분명히…… 보지와는 다른 곳일 텐데❤️', true);
      await defender.say_and_wait('어째서……❤️', true);
    }
    await attacker.print_and_wait(
      '지나치게 가까운 거리 덕분에, 두 사람이 아랫배를 들썩이며 내뱉는 모든 숨결이 이 성애의 풍미를 더하는 양념이 되었다.',
    );
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_standing(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait('허리가 금방 꺾여버렸어.');
    await attacker.print_and_wait(
      `분명 ${
        era.get(`cflag:${defender.id}:종족`)
          ? defender.get_uma_sex_title()
          : '어른'
      }임에도 불구하고, 스스로 두 발로 서 있을 능력조차 잃은 채 무언가에 매달려 엉덩이를 치켜들어야만 겨우 서 있을 수 있는 비참한 꼴이 되었다.`,
    );
    await attacker.print_and_wait(
      '레이스나 트레이닝과는 전혀 상관없는 안짱다리로 버티고 서서, 앞발 끝에 실린 과도한 체중 때문에 바닥에 파묻힐 듯하면서도, 페니스의 삽입에 맞춰 뒤꿈치는 높게 들썩인다.',
    );
    await attacker.print_and_wait(
      `마치 자발적으로 페니스 아래에 굴복하는 듯한 형국이다. ${
        hook.hook === ero_hooks.hug_standing ? '보지' : '항문'
      }의 주인은 무릎을 앞으로 내밀고, 연약한 안짱다리 자세 때문에 페니스가 깊숙이 박힐 때마다 양 무릎이 서로 맞닿을 정도로 땀에 젖은 몸을 휘청거리고 있다……`,
    );
    if (hook.hook === ero_hooks.hug_standing_anal_sex) {
      await defender.say_and_wait(
        '이러면 안 되는데…… 하지만, 이런 자세에…… 페니스에 유린당하고 있는 항문이라니…… 너무 위험해……',
        true,
      );
    }
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_suspended_congress(attacker, defender, hook) {
  await defender.print_and_wait('도망칠 수 없어……');
  await defender.print_and_wait('이 자세가 된 순간부터, 도망칠 곳은 없다.');
  await defender.print_and_wait([
    '몸이 높게 들려 올려진 채, ',
    sys_get_colored_callname(defender.id, attacker.id),
    '이(가) 엉덩이를 받치고 페니스 위에 꽂아 넣었다.',
  ]);
  if (hook.hook === ero_hooks.suspended_congress_anal_sex) {
    await defender.print_and_wait(
      '수치스러운 항문이 강제로 페니스 케이스가 되어버렸다…… 하지만 그게 끝이 아니다……',
    );
  }
  await defender.print_and_wait([
    sys_get_colored_callname(defender.id, attacker.id),
    '의 허리 양옆으로 벌어진 두 다리에게 남은 자유라고는 허리를 감싸 안을지 말지뿐이다. 그리고 몸이 페니스 아래로 완전히 떨어지지 않게 하기 위해, 양손 또한 ',
    sys_get_colored_callname(defender.id, attacker.id),
    ' 를 꽉 껴안는 것 외에는 선택지가 없다.',
  ]);
  await defender.print_and_wait([
    sys_get_colored_callname(defender.id, attacker.id),
    '의 허리를 타고 아래로 흘러내릴까…… 반드시…… 그러겠지❤️',
  ]);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_suspended_congress(attacker, defender, hook) {
  if (hook.arg) {
    await common_suspended_congress(attacker, defender, hook);
    await defender.print_and_wait([
      '하아…… 하필 지금 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 표정이 보이질 않아.',
    ]);
    await defender.print_and_wait([
      '거친 숨소리 속에 의식은 점점 몽롱해지고, ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 를 등진 ',
      defender.get_colored_name(),
      '은(는) 점차 허리를 굽히며, 무너져가는 표정을 흩날리는 머리카락 그림자 속에 숨겼다.',
    ]);
    await defender.say_and_wait('하아……❤️');
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_cowgirl(attacker, defender, hook) {
  if (hook.arg) {
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        hook.hook === ero_hooks.ask_cowgirl ? part_enum.virgin : part_enum.anal,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await defender.print_and_wait('집어삼켰어……');
    await defender.print_and_wait([
      '평소처럼 누워있는 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '과(와) 손가락을 맞물려 깍지를 낀 채, 매끄럽고 탄력 있는 다리를 아래로 깊게 굽혀, 구멍을 요리조리 비비며 페니스의 커다란 귀두를 받아들일 틈을 찾는다……',
    ]);
    await defender.print_and_wait([
      '자신이 직접 올라타라니…… ',
      sys_get_colored_callname(defender.id, attacker.id),
      '은(는) 정말 심술쟁이야……',
    ]);
    if (hook.hook === ero_hooks.ask_cowgirl_anal_sex) {
      await defender.say_and_wait('게다가, 항문으로 하라니……', true);
    }
    await attacker.say_and_wait('허리도 좀 흔들어봐.');
    await defender.print_and_wait([
      '이번에는 ',
      defender.get_colored_name(),
      '의 느릿느릿한 동작을 기다릴 필요가 없다. 그저 좁은 질 내벽에 박힌 페니스가 민감한 곳을 살짝 찔러주는 것만으로도, ',
      defender.get_colored_name(),
      '의 허리는 마치 태엽이 감긴 것처럼 쉴 새 없이 ',
      sys_get_colored_callname(defender.id, attacker.id),
      '의 눈앞에서 춤추기 시작한다……',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function ask_stimulate_glans_by_hole(attacker, defender, hook) {
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
    await attacker.say_and_wait('아…… 힘들다……');
    await defender.print_and_wait([
      '연신 질척거리는 소리를 내며 ',
      defender.get_colored_name(),
      '의 소중한 보지를 엉망진창으로 헤집던 페니스가 갑자기 멈췄다.',
    ]);
    await defender.print_and_wait(
      '입으로는 힘들다고 말하면서도, 사타구니 사이의 페니스는 정직하게 빳빳함을 유지하고 있다.',
    );
    await attacker.say_and_wait('나머지는 부탁할게.');
    await defender.print_and_wait(
      '심술궂은 페니스를 그대로 뽑아버리고 싶다는 오기도 생겼지만, 찌르르 소리를 내며 페니스가 보지에서 아주 살짝만 떨어져도…… 몸은 지독한 외로움을 느낀다……',
    );
    await defender.print_and_wait([
      '결국, ',
      defender.get_colored_name(),
      '은(는) 스스로 허리를 흔들기 시작했다.',
    ]);
    if (era.get(`cflag:${defender.id}:종족`)) {
      await defender.print_and_wait(
        '하얀 엉덩이가 젖은 꼬리의 반주에 맞춰 춤을 춘다.',
      );
    }
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_fuck(attacker, defender, hook) {
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
    const motion = era.get(`tcvar:${attacker}:체위`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:방향`) === towards_enum.right;
    await attacker.print_and_wait('정말 한심해……');
    await attacker.print_and_wait('쾌락을 구걸하기 위해, 이런 짓까지 하게 되다니……');
    await attacker.say_and_wait('하아……❤️');
    await attacker.print_and_wait([
      '항복이라도 하는 듯 ',
      (motion ^ towards) > 0 ? '허벅지를 벌리고' : '엉덩이를 높게 치켜들고',
      ', 떨리는 손가락으로 오므라든 ',
      hook.hook === ero_hooks.ask_fuck ? '음순' : '항문',
      '을 양옆으로 벌려, 안쪽의 분홍빛 속살을 고스란히 드러냈다.',
    ]);
    await attacker.say_and_wait('제발, 박아주세요……');
    await attacker.say_and_wait('페니스를…… 넣어줘——');
  } else {
    await continue_fucking_common(defender, attacker);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_cowgirl(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait('하아……');
    await attacker.print_and_wait([
      '이렇게 가까운 거리에서…… 아래에 깔린 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 얼굴을 보고 있으면…… 자신이 얼마나 끔찍한 녀석인지 자각하게 되잖아❤️',
    ]);
    await attacker.print_and_wait([
      '자포자기한 심정으로 몸을 흔들기 시작한다. 배덕감에 굴복한 ',
      attacker.get_colored_name(),
      ` 의 몸은 옅은 분홍빛으로 물든 채, ${
        hook.hook === ero_hooks.cowgirl ? '보지' : '항문'
      }에 박힌 페니스를 필사적으로 봉사하고 있다.`,
    ]);
  } else {
    await continue_fucking_common(defender, attacker);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function stimulate_glans_by_hole(attacker, defender, hook) {
  if (hook.arg) {
    await stimulate_glans_by_hole_1(attacker, defender, hook);
    await attacker.print_and_wait([
      '그리고 더욱 엉망진창이 된 것은…… 무언가 더 할 수 있을 것만 같은 ',
      attacker.get_colored_name(),
      ' 자신이었다……',
    ]);
    await attacker.print_and_wait('하아…… 싫다고 소리치는 게 아니라, 숨을 깊게 들이마시면……');
    await stimulate_glans_by_hole_2(attacker, defender, hook);
  } else {
    await continue_fucking_common(defender, attacker);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_stimulate_hole(attacker, defender, hook) {
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
    await attacker.say_and_wait('부탁이야……');
    await attacker.say_and_wait('부탁해……');
    if (era.get(`cflag:${attacker.id}:종족`) && attacker.id) {
      await attacker.print_and_wait(
        `명색이 ${attacker.get_uma_sex_title()}인데, 이건 너무 한심하잖아……`,
      );
    } else {
      await attacker.print_and_wait(
        '어른으로서, 트레이너로서, 이건 너무 한심하잖아……',
      );
    }
    await attacker.print_and_wait('하지만 도저히 참을 수가 없어——');
    await attacker.print_and_wait('왜냐하면, 너무나도 갖고 싶은걸——');
    await attacker.print_and_wait(
      '자궁 안쪽까지, 대단한 페니스로, 아주 대단하게, 난폭하게, 힘껏……',
    );
    await attacker.print_and_wait('「쮸욱— 하고 맨 안쪽까지 찔러줘❤️');
    await attacker.print_and_wait('몸이 「휘익」 하고 웅크러들 정도로——');
    await attacker.print_and_wait('세상에서 가장 기분 좋은 보지가 될 수 있게——');
    await attacker.print_and_wait('그러니 부탁이야…… 그 뒤에는, 하고 싶은 대로 뭐든 해도 좋으니까❤️');
  } else {
    await continue_fucking_common(defender, attacker);
  }
}

class EroNormalFucking extends EroFucking {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async missionary(attacker, defender, hook) {
    await common_missionary(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async missionary_anal_sex(attacker, defender, hook) {
    await common_missionary(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async doggy_style(attacker, defender, hook) {
    await common_doggy_style(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async doggy_style_anal_sex(attacker, defender, hook) {
    await common_doggy_style(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async sitting(attacker, defender, hook) {
    await common_sitting(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async sitting_anal_sex(attacker, defender, hook) {
    await common_sitting(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_sitting(attacker, defender, hook) {
    await common_hug_sitting(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_sitting_anal_sex(attacker, defender, hook) {
    await common_hug_sitting(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async standing(attacker, defender, hook) {
    await common_standing(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async standing_anal_sex(attacker, defender, hook) {
    await common_standing(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_standing(attacker, defender, hook) {
    await common_hug_standing(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_standing_anal_sex(attacker, defender, hook) {
    await common_hug_standing(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suspended_congress(attacker, defender, hook) {
    if (hook.arg) {
      await common_suspended_congress(attacker, defender, hook);
    } else {
      await continue_fucking_common(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suspended_congress_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await common_suspended_congress(attacker, defender, hook);
    } else {
      await continue_fucking_common(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fucked_suspended_congress(attacker, defender, hook) {
    if (!hook.arg) {
      await continue_fucking_common(defender, attacker);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fucked_suspended_congress_anal_sex(attacker, defender, hook) {
    if (!hook.arg) {
      await continue_fucking_common(defender, attacker);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_suspended_congress(attacker, defender, hook) {
    await common_hug_suspended_congress(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_suspended_congress_anal_sex(attacker, defender, hook) {
    await common_hug_suspended_congress(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_cowgirl(attacker, defender, hook) {
    await common_ask_cowgirl(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_cowgirl_anal_sex(attacker, defender, hook) {
    await common_ask_cowgirl(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    await ask_stimulate_glans_by_hole(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_glans_by_anal(attacker, defender, hook) {
    await ask_stimulate_glans_by_hole(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('더 깊게.');
      await defender.say_and_wait('아윽——');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 거의 ',
        attacker.get_colored_name(),
        '의 몸속으로 파고들 기세다. 만족을 모르는 ',
        attacker.get_colored_name(),
        '은(는) 0의 거리조차 가차 없이 돌파하며, 가랑이 사이의 페니스를 치켜든 허리에 맞춰 단단하게 밀어 넣는다. 소녀의 입술, 보지, 자궁이 모두 그 감각에 도취되어 신음을 내지른다……',
      ]);
      await defender.say_and_wait('우오오오오오오오옷————❤️❤️');
      await attacker.print_and_wait(
        '소위 G스팟이라는 것은 이런 것이다. 그전까지 어떤 소녀였든, 상냥했든 활기찼든 상관없다. 수컷의 냄새가 물씬 풍기는 단단한 페니스가 그곳의 살점을 짓이기며 파고드는 순간, 한순간에 성교에 미쳐버린 저질스러운 암컷으로 타락하고 만다.',
      );
      await attacker.print_and_wait(
        '아름다운 몸이 페니스의 충돌에 맞춰 웅크러들고, 목구멍에서는 탁한 신음만이 새어 나온다. 오직 지척에 있는 자궁만이 뜨겁게 달아오를 뿐이다.',
      );
    } else {
      await continue_fucking_common(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_womb(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('페니스 없이도 보지를 기분 좋게 만드는 마법.');
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '이(가) 자신만만하게 미소 지으며 다섯 손가락을 펴서, 듬직한 손바닥을 아랫배 위에 얹었다.',
      ]);
      await defender.print_and_wait('확실히 따뜻한 감촉이지만……');
      await defender.say_and_wait('으으으으——');
      await defender.print_and_wait('꼴사나운 목소리가 갑자기 튀어나왔다——');
      await defender.print_and_wait([
        '거의 파묻힐 것 같아…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 손바닥……',
      ]);
      await defender.print_and_wait('마치 대조적으로, 자궁은 쿵쾅거리며 흥분하기 시작한다……');
      await defender.print_and_wait([
        '마치 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 마술 같은 손에 붙잡힌 것처럼……❤️',
      ]);
      await defender.print_and_wait('……거짓말이죠?❤️');
    } else {
      await continue_fucking_common(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_fuck(attacker, defender, hook) {
    await common_ask_fuck(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_fuck_anal(attacker, defender, hook) {
    await common_ask_fuck(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cowgirl(attacker, defender, hook) {
    await common_cowgirl(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cowgirl_anal_sex(attacker, defender, hook) {
    await common_cowgirl(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_virgin(attacker, defender, hook) {
    await stimulate_glans_by_hole(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_anal(attacker, defender, hook) {
    await stimulate_glans_by_hole(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_g_spot(attacker, defender, hook) {
    await common_ask_stimulate_hole(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_womb(attacker, defender, hook) {
    await common_ask_stimulate_hole(attacker, defender, hook);
  }
}

module.exports = EroNormalFucking;