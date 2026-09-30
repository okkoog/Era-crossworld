const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroSleepCommunications = require('#/event/ero/common/sleep/communications');

module.exports = class extends EroSleepCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.kiss(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '평온하게 누워 있는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 새근새근 숨을 쉬고 있다.',
    ]);
    await attacker.print_and_wait('분홍빛 입술이 달싹거리는 게, 마치 무언가를 기대하는 듯하다.');
    await attacker.print_and_wait('가까이 다가가, 그 분홍빛 입술에 살며시 입을 맞춘다——');
    await attacker.print_and_wait([
      '고개를 들자, 여전히 달싹거리는 분홍빛 입술에는 이미 자신의 흔적이 새겨져 있었다.',
    ]);
  }

  async french_kiss(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.french_kiss(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '단순히 분홍빛 입술을 더럽히는 것만으로는 만족할 수 없어, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 혀를 탐하고 싶어진다.',
    ]);
    await attacker.print_and_wait(
      '입안으로 미끄러져 들어간 혀는 치열의 방해를 받지도 않은 채, 오히려 부드럽게 문을 열고 혀가 있는 곳까지 도달했다.',
    );
    await attacker.print_and_wait([
      '',
      sys_get_colored_callname(attacker.id, defender.id),
      '가 아직 깊이 잠든 틈을 타, 이리저리 휘저으며 얽혀들고 깊은 곳에 자신의 흔적을 남긴다.',
    ]);
    await attacker.print_and_wait('입술이 떨어질 때, 타액의 실이 서로의 혀끝을 길게 잇는다.');
    await attacker.print_and_wait([
      '——봐봐, ',
      sys_get_colored_callname(attacker.id, defender.id),
      ', 딥키스로는 내가 이겼다고.',
    ]);
    await attacker.print_and_wait([
      '……비록 마음속으로 이렇게 외치고 싶었지만, 이건 결국 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '에게는 절대로 말할 수 없는 일이다.',
    ]);
  }
};