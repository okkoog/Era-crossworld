/**
 * @file 조교 명령어 - 수면간 성교계
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');
const {
  stimulate_glans_by_hole_1,
  stimulate_glans_by_hole_2,
} = require('#/event/ero/common/snippets');

const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_missionary(attacker, defender, hook) {
  await attacker.print_and_wait('어쩌면 이것이…… 서로의 체온을 가장 잘 느낄 수 있는 자세일지도 모르겠다.');
  await attacker.print_and_wait([
    '이른바 정상위, 혹은 선교사 체위라고 불리는 이 자세는 얽혀있는 두 사람을 앞쪽에서 바라본다면, 마치 ',
    attacker.get_colored_name(),
    '이(가) 품에 안겨 모유를 빠는 듯한 모습처럼 보인다.',
  ]);
  await attacker.print_and_wait([
    attacker.get_colored_name(),
    '의 몸이 ',
    sys_get_colored_callname(attacker.id, defender.id),
    `의 몸을 덮고, 단단한 육봉이 가차 없이 ${
      hook.hook === ero_hooks.missionary ? '보지' : '뒷구멍'
    } 안에 삽입되어, 무의식 상태인 `,
    sys_get_colored_callname(attacker.id, defender.id),
    '의 길고 가녀리며 탄력 있는 다리가 다소 꼴사나운 자세로 ',
    attacker.get_colored_name(),
    '의 허리 양옆으로 뻗어 나와, 발바닥이 하늘을 향한 채 뻣뻣하게 굳어있다……',
  ]);
  await attacker.print_and_wait([
    '믿을 수 없을 정도로 순종적으로, ',
    sys_get_colored_callname(attacker.id, defender.id),
    '의 몸이 사뿐히 품에 안겨 들어왔다.',
  ]);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function common_doggy_style(attacker, defender) {
  await attacker.print_and_wait('마치 강아지처럼……');
  await attacker.print_and_wait(
    '그 두 다리…… 앞발바닥에 힘을 주고 까치발을 든 채, 무릎을 굽혀 땀에 젖은 허리를 높이 치켜든 그 다리……'
  );
  await attacker.print_and_wait(
    '그 위로 떠받들려 있는 것은…… 강아지처럼 무의식적으로 흔들리는 엉덩이다.'
  );
  await attacker.print_and_wait([
    '하지만 다소 아쉽게도, ',
    sys_get_colored_callname(attacker.id, defender.id),
    '이(가) 아직 제때 깨어나지 못한 탓에, 이 자세를 유지하는 것은 전적으로 ',
    attacker.get_colored_name(),
    '의 허리를 감싼 두 손에 의존하고 있다.',
  ]);
  await attacker.print_and_wait([
    '선정적인 자세로 인형처럼 침대에서 안겨 올려진 ',
    sys_get_colored_callname(attacker.id, defender.id),
    '은(는) 몸의 떨림을 멈추지 못해, 그 모습을 본 사람이라면 무심코 마른 입술을 축이고 싶게 만든다.',
  ]);
  await attacker.print_and_wait('완전히 일방적인 폭력처럼 되어버렸네……');
  await attacker.print_and_wait('하지만…… 이걸로 좋아……');
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_cowgirl(attacker, defender, hook) {
  await attacker.print_and_wait('삼켜버렸네……');
  await attacker.print_and_wait([
    '반듯하게 누워 있는 ',
    sys_get_colored_callname(attacker.id, defender.id),
    '과(와) 제멋대로 깍지를 낀 채, ',
    attacker.get_colored_name(),
    '의 탄력 있고 윤기 나는 두 다리가 아래로 쪼그려 앉아, 구멍 입구로 비비적거리며 육봉의 거대한 귀두를 머금으려는 기회를 엿본다……',
  ]);
  if (hook.hook === ero_hooks.cowgirl_anal_sex) {
    await attacker.print_and_wait('여기는, 몰래…… 엉덩이 구멍으로……❤️');
  }
  await attacker.print_and_wait([
    '이번에는 ',
    sys_get_colored_callname(attacker.id, defender.id),
    '의 느릿하고 부드러운 움직임을 기다릴 필요 없이, 좁은 구멍 안에 머금어진 육봉이 민감한 질벽을 향해 가볍게 찌르기만 하면, ',
    attacker.get_colored_name(),
    '의 도망칠 곳 없는 허리는 마치 태엽이 감긴 것처럼 끊임없이 ',
    sys_get_colored_callname(attacker.id, defender.id),
    '의 눈앞에서 춤을 추듯 흔들릴 수밖에 없다…',
  ]);
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
      '게다가, ',
      attacker.get_colored_name(),
      '을(를) 이 지경으로 만든 건, 그저 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 잠결에 몽롱한 육봉일 뿐인가❤️',
    ]);
    await attacker.print_and_wait('하아…… 숨을 깊게 들이마시면……');
    await stimulate_glans_by_hole_2(attacker, defender, hook);
    await attacker.print_and_wait([
      '분명 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 위에 올라타, 자세의 주도권을 쥐고 있음에도, ',
      attacker.get_colored_name(),
      '의 얼굴은 어느새 크게 동요한 붉은빛으로 가득하다.',
    ]);
  }
}

class EroSleepFucking extends EroFucking {
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
  // eslint-disable-next-line no-unused-vars
  async doggy_style(attacker, defender, hook) {
    await common_doggy_style(attacker, defender);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async doggy_style_anal_sex(attacker, defender, hook) {
    await common_doggy_style(attacker, defender);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async stimulate_g_spot(attacker, defender, hook) {
    await attacker.print_and_wait('조금 더 깊이.');
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '(으)로부터 애원하는 소리를 들을 일이 없기에, 육봉이 뿌리까지 다 잠길 때까지 마음껏 깊이 박아 넣으며, 눈앞에서 깊이 잠든 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '을(를) 자신의 몸 안으로 품어버릴 수 있다.',
    ]);
    await attacker.print_and_wait([
      '만족을 모르는 ',
      attacker.get_colored_name(),
      '은(는) 제로의 거리를 돌파했음에도 일말의 망설임 없이, 허리를 쳐올림과 동시에 사타구니의 단단한 육봉을 앞으로 밀어넣어, 소녀의 입술과 보지, 그리고 자궁마저 매료된 신음을 내뱉게 만든다……',
    ]);
    await defender.say_and_wait('————❤️❤️');
    await attacker.print_and_wait(
      '이른바 G스팟이란 건 이런 것이다. 그 전까지 어떤 성격의 소녀였든, 상냥하든 발랄하든 상관없이, 수컷 냄새가 물씬 풍기는 단단한 육봉이 그곳의 주름을 벌리고 찌르는 순간, 단숨에 성애에 푹 빠진 천박한 암컷으로 타락해 버린다.'
    );
    await attacker.print_and_wait(
      '아름다운 몸은 육봉의 맹렬한 찌르기에 둥글게 움츠러들고, 목구멍에서는 탁한 음란한 신음만이 새어 나오며, 오직 지척에 맞닿은 자궁만이 델 듯이 뜨거워진다.'
    );
    era.println();
    await attacker.print_and_wait(
      '…………하지만, 이렇게 여자가 잠든 틈을 타 몰래 육봉과 쾌감으로 그녀의 몸을 길들이는 짓은……'
    );
    await attacker.say_and_wait(
      '비록 이러고 있는 게 나 자신이라 해도, 정말이지 비열하다고 할 수밖에 없네❤️'
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_stimulate_womb(attacker, defender, hook) {
    await attacker.print_and_wait('육봉 없이도 보지를 기분 좋게 만드는 마법.');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '은(는) 자신감 넘치는 미소를 지으며 다섯 손가락을 펴, 넓은 손바닥으로 아랫배를 덮었다.',
    ]);
    await attacker.print_and_wait('확실히 매우 따스한 감촉이긴 한데……');
    await defender.say_and_wait('으흣 으음——');
    await attacker.print_and_wait('볼썽사나운 소리가 갑자기 새어 나왔다——');
    await attacker.print_and_wait([
      defender.get_colored_name(),
      '의 평온하던 수면 호흡의 리듬이 갑자기 빠르고 초조해졌다.',
    ]);
    await attacker.print_and_wait([
      '거의 파묻힐 것 같아…… ',
      attacker.get_colored_name(),
      '의 손바닥에……',
    ]);
    await attacker.print_and_wait('그리고 그에 대비되듯, 자궁은 쿵쾅거리며 달아올랐다……');
    await attacker.print_and_wait([
      '마치 ',
      attacker.get_colored_name(),
      '의 마법 같은 손에 붙잡힌 것처럼……',
    ]);
    await defender.say_and_wait('————❤️');
    await attacker.print_and_wait([
      '아마 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '은(는) 잠에서 깬 후에도 이 두 다리가 덜덜 떨리게 만든 쾌감을 기억해 낼 수 있겠지.',
    ]);
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
}

module.exports = EroSleepFucking;