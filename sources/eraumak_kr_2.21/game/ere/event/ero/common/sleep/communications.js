/**
 * @file 调教指令 - 睡奸沟通系
 * @author O口口口口口
 */
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroCommunications = require('#/event/ero/common/interface/ero-communications');

class EroSleepCommunications extends EroCommunications {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async kiss(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('입을 맞췄다.');
      await attacker.print_and_wait([
        '꿈결에 무의식적으로 살짝 벌어진 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 두 입술이 무척이나 맞추기 좋아 보였기 때문이다.',
      ]);
      await defender.say_and_wait('으음……');
      await attacker.print_and_wait(
        '팟 하고 튀어 오르려던 오른손을 다시 눌러 내렸다. 몸을 옆으로 틀어 조금 더 깊숙이 숙이면 이 입술 사이의 온기를 완전히 독점할 수 있을 것이다.',
      );
      await attacker.print_and_wait('다만…… 혼자서만 하는 건 역시 조금 쓸쓸하네.');
    } else {
      await defender.say_and_wait('으음——');
      await attacker.print_and_wait(
        '머리를 무의식적으로 흔들기 시작하더니 얼굴색도 살짝 붉어졌다. 호흡이 조금 가빠진 모양이다.',
      );
      await attacker.print_and_wait('슬슬 멈춰야 할까…… 아니면 다른 짓을 좀 더 해볼까.');
      await defender.say_and_wait('쪽……');
      await attacker.print_and_wait('그럼 진짜 마지막으로 한 번만 더……?');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async french_kiss(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        '뺨을 감싸 쥐고 한층 더 깊은 곳까지 입을 맞추고 있음에도, 오히려 어딘가 공허한 기분이 든다……',
      );
      await attacker.print_and_wait([
        '눈앞의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입술과 치열 사이에 자신의 흔적을 가득 남겨두었으니, 몰래 훔쳐 먹는 입장에서는 대승리라고 할 수 있겠지만……',
      ]);
      await attacker.print_and_wait([
        '하아…… 하지만 차라리 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 이대로 깨어나서, 당황한 기색으로 이쪽을 바라봐 주었으면 좋겠다는 생각이 든다…… 그러면 참 재밌을 텐데 말이지ㅋㅋ',
      ]);
    } else {
      await defender.say_and_wait('하아…… 하아……');
      await attacker.print_and_wait('몸을 꼿꼿이 굳혔다가, 바둥거리다, 이내 포기한다.');
      await attacker.print_and_wait([
        '뺨을 붙잡힌 채 혀로 농락당해 얼굴까지 붉어진 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 신체 반응은 의외로 알기 쉬웠다.',
      ]);
    }
  }
}

module.exports = EroSleepCommunications;