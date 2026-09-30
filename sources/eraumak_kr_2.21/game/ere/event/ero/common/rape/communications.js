/**
 * @file 调教指令 - 强奸沟通系
 * @author ALEX
 */
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroCommunications = require('#/event/ero/common/interface/ero-communications');
const EroRapedCommunications = require('#/event/ero/common/rape/raped-communications');

class EroRapeCommunications extends EroCommunications {
  /** @type {EroCommunications} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedCommunications(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  /** @author ALEX */
  async kiss(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '아름다운 눈동자가 공포로 크게 확장되고, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 두 팔에 구속된 몸이 바들바들 떨린다.',
      ]);
      await defender.say_and_wait('우으……');
      await defender.print_and_wait(
        '짙은 숨결이 섞인 혀가 입안으로 들어오고, 억지로 밀고 들어온 혀끝이 필사적으로 막으려던 하얀 이를 넘어, 매우 공격적으로 잇몸 뿌리를 따라 핥고 지나간다.'
      );
      await defender.print_and_wait([
        '상대에게 완전히 제압당한 지금, 입술 사이로 마찰음과 타액이 흘러나오는 것을 그저 내버려둘 수밖에 없었다.',
      ]);
    } else {
      await defender.say_and_wait(['크읏……']);
      await defender.print_and_wait([
        '꼴사납게 비명을 지르던 입술은, 이내 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 입술에 의해 틀어막힌다.',
      ]);
      await defender.print_and_wait([
        '자신은 그저 무력하게 두 눈을 감고, 몸에 얹힌 팔을 꽉 쥘 수밖에 없었다.',
      ]);
      await defender.print_and_wait([
        '상대가 입안을 유린하도록 내버려 두자, 혀와 입술이 얽히는 낮은 키스 소리가 울려 퍼진다.',
      ]);
    }
  }

  /** @author ALEX */
  async french_kiss(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.say_and_wait('하아……');
      await defender.print_and_wait([
        '아무런 자비도 없이 난폭하게 턱을 벌리고, 엉망진창이 된 머릿속은 한동안 상황을 받아들이지 못한 채 상대가 제멋대로 굴도록 내버려 둔다.',
      ]);
      await defender.print_and_wait([
        '입안 구석구석을 핥고, 푹 늘어진 혀를 머금고 얼마나 빨았는지……',
      ]);
      await defender.print_and_wait([
        '정신을 차리고 반항을 시도하려 했을 땐, 입안에 남아있는 짜릿한 쾌감에 무의식적으로 침을 삼키다 하마터면 신음을 흘릴 뻔했다.',
      ]);
    } else {
      await defender.say_and_wait('당장…… 그만…… 둬…… 츄웁……');
      await attacker.print_and_wait([
        '혀가 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입안을 끊임없이 탐하고, 억지로 버티는 반항은 그저 혀가 얽히고 밀리는 사이로 더욱 끈적한 물소리를 만들어낼 뿐이다.',
      ]);
      await attacker.print_and_wait([
        '농밀한 호르몬 냄새를 띤 타액이 강제로 입안에 흘러들어오고, 숨을 쉬기 위해 끊임없이 삼키는 목구멍은 그 강제로 부어진 타액을 전부 마실 수밖에 없었다.',
      ]);
      await attacker.print_and_wait([
        '기나긴 딥키스가 계속되고, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 눈물과 입가에서 흘러넘친 투명한 타액이 끊임없이 바닥으로 뚝뚝 떨어진다.',
      ]);
    }
  }
}

module.exports = EroRapeCommunications;