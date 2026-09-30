const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');

module.exports = class extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (attacker.id !== 32) {
      return await super.kiss(attacker, defender, hook);
    }
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '이 부드럽고 촉촉한 입술을 당신의 입술 위에 포개어 왔다.',
    ]);
    await attacker.say_and_wait('쥬웁…… 츄릅…… 츄……');
    await defender.print_and_wait('처음에는 가볍게 부딪히는 정도였으나, 점차 혀가 얽히기 시작했다.');
  }

  async lure(attacker, defender, hook) {
    if (attacker.id === 32) {
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '이 요염한 눈빛으로 자신을 유혹하듯 바라보았다.',
      ]);
      if (attacker.sex_code > 0 && era.get('tcvar:32:발정')) {
        await defender.print_and_wait(
          '달싹이는 입술은 위아래 할 것 없이 꿀을 흘리며, 채워질 행복을 기다리고 있었다.',
        );
      }
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이에 손을 뻗어 부드럽게 쓰다듬었다.',
      ]);
      hook.arg = EroNormalCommunications.check_lure_success(
        attacker.id,
        defender.id,
      );
      if (hook.arg || era.get(`tcvar:${defender.id}:발정`)) {
        era.println();
        await defender.say_and_wait([
          '응…… ',
          sys_get_colored_callname(defender.id, attacker.id),
          '❤️',
        ]);
        era.println();
        await attacker.print_and_wait([
          '좀 더 만지기 쉽도록, ',
          sys_get_colored_callname(attacker.id, defender.id),
          '은 기꺼이 엉덩이를 내밀었다.',
        ]);
        await attacker.print_and_wait('손바닥 전체로 풍만한 둔부의 감촉이 고스란히 전해져 왔다.');
      }
    }
  }
};