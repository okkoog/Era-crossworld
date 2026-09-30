/** @author O口口口口口 */
const era = require('#/era-electron');

const { add_juel } = require('#/system/ero/sys-calc-juel');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_touch } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

module.exports = {
  /**
   * @param {CharaTalk} attacker
   * @param _
   * @param {HookArg} hook
   */
  async after_refusing_by_attacker(attacker, _, hook) {
    await attacker.say_and_wait('역시 안 되는 걸까……');
    await attacker.print_and_wait(
      '분위기에 휩쓸려 던진 음란한 부탁도, 역시 한계가 있는 법이네……',
    );
    await attacker.print_and_wait(
      '이대로, 몸은 아직 달아올라 있지만 어쩔 수 없이 끝내는 수밖에.',
    );
    await attacker.print_and_wait('하지만……');
    hook.override = true;
    add_juel(attacker.id, '공포', base_emotion_juel * 2);
    sys_change_lust(attacker.id, 100);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async after_refusing_by_defender(attacker, defender, hook) {
    await defender.print_and_wait('그런 눈으로 쳐다보지 마……');
    await defender.print_and_wait('어떤 부탁이든 이쪽에서 고분고분 들어줄 거라고 생각한 건 아니겠지!');
    await defender.print_and_wait('……정말이지');
    hook.override = true;
    add_juel(attacker.id, '공포', base_emotion_juel * 2);
    sys_change_lust(attacker.id, 100);
  },
  /**
   * @param {number} attacker
   * @param {number} [defender]
   * @param {number} [attacker_part]
   * @param {number} [defender_part]
   * @returns {Promise<boolean>}
   */
  async ask_action(attacker, defender, attacker_part, defender_part) {
    let temp;
    if (
      !attacker ||
      era.get('tflag:강간') > 0 ||
      (defender !== undefined &&
        (temp = era.get(
          `tcvar:${attacker}:${part_touch[attacker_part]}접촉부위`,
        )).owner === defender &&
        temp.part === defender_part)
    ) {
      return false;
    }
    era.printMultiColumns([
      {
        accelerator: 0,
        config: { align: 'center', width: 12 },
        content: '동의',
        type: 'button',
      },
      {
        accelerator: 100,
        config: { align: 'center', width: 12 },
        content: '거절',
        type: 'button',
      },
    ]);
    return (await era.input()) > 0;
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('어쩐지');
      await attacker.print_and_wait('놀라울 정도로 자연스러운 동작이네……');
      await attacker.print_and_wait(
        '양손으로 육봉을 붙잡고 나니, 머리가 어느샌가 저절로 다가가고 있어.',
      );
      await attacker.print_and_wait('손가락 사이의 체온으로 데우고, 문지르고, 그리고……');
      await attacker.say_and_wait('쪽~');
      await attacker.print_and_wait('엄청 진해……');
    } else {
      await attacker.print_and_wait(
        '육봉을 한쪽으로 젖히고, 고개를 돌려 위아래로 정성스럽게 핥는다. 마치 가장자리가 녹아내리기 시작한 아이스크림을 다루듯이.',
      );
      await attacker.say_and_wait('할짝할짝──');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ` 의 귀두가 번들거리기 시작했어. 위에 맺힌 이 광택은 대체 누구의 탓이 더 큰 걸까……`,
      ]);
      await attacker.print_and_wait('전혀…… 알 수 없게 되어버려……❤️');
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_leg(attacker, defender, hook) {
    if (hook.arg) {
      if (attacker.id === 0 && era.get(`cflag:${defender.id}:종족`)) {
        await attacker.print_and_wait(
          '트레이너로서, 담당의 다리를 성적인 의미를 담아 감상하고 쓰다듬는다……',
        );
        await attacker.print_and_wait(
          '지금 하고 있는 일을 절제된 언어로 묘사하는 것만으로도, 몸이 서늘해지는 배덕감이 오한과 함께 전신을 훑고 지나간다.',
        );
        await attacker.print_and_wait(
          '분명 훈련 후에 상태를 확인하기 위해, 가끔은 손을 대고 어루만지는 친밀한 동작이 있었을 텐데……',
        );
        await attacker.print_and_wait(
          '하지만 신기하게도, 지금 머릿속에서는 이 다리와 「레이스」를 도저히 연결 지을 수가 없다.',
        );
      }
      await attacker.print_and_wait('지금의 내 머릿속은 온통……');
      await attacker.print_and_wait('이 다리가 내 허리를 교차하며 휘감는다면, 분명 기분 좋을 거라는 생각뿐이다.');
    } else {
      await attacker.print_and_wait('부드럽고 탄력적이다.');
      await attacker.print_and_wait('곡선은 우아하고 길게 뻗어 있다.');
      await attacker.print_and_wait(
        '손가락의 애무만으로도 파르르 떨리는 최상의 민감함.',
      );
      if (era.get(`cflag:${defender.id}:종족`)) {
        await attacker.print_and_wait('정말 아깝네……');
        await attacker.print_and_wait('이런 다리가 오직 레이스만을 위해 존재한다니……');
      }
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async pet_tail(attacker, defender) {
    await defender.say_and_wait('으으──');
    await attacker.print_and_wait(
      '살짝만 더 힘을 주면 엉덩이가 치켜 올라가지만, 그때 손을 놓아버리면 허리까지 푹 꺾여버린다……',
    );
    await attacker.print_and_wait([
      '이봐…… 정말로 자신이 ',
      attacker.get_phy_sex_title(),
      '의 앞에서 어떤 동작을 보이고 있는지 알고 있는 거야, 가여운 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '?',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_hole_1(attacker, defender, hook) {
    await attacker.print_and_wait('솔직히 말해서…… 지금 이대로도 가버릴 것 같아……');
    await attacker.print_and_wait([
      '엉망진창이야…… 범해지고 있는 ',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '비소' : '항문',
      '의 현상태도, 지나치게 기분 좋은 이 몸도……',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_hole_2(attacker, defender, hook) {
    await attacker.print_and_wait([
      '「쪼옥」 소리를 내며 조여졌다. 비록 1초도 버티지 못하고 몸이 경련하며 무너져 내렸지만, 그 순간만큼은 ',
      attacker.get_colored_name(),
      ' 의 ',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '비소' : '항문',
      '이(가) ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 의 귀두를 깊게 머금었다.',
    ]);
    await attacker.print_and_wait('하아…… 귀두가 움찔거리는 걸 보니, 꽤 기쁜가 봐……');
  },
};