const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalItems = require('#/event/ero/common/normal/items');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends EroNormalItems {
  async use_item(attacker, defender, hook, extra_flag) {
    if (
      attacker.id === 0 &&
      defender.id === 32 &&
      extra_flag.stay === undefined &&
      extra_flag.item === item_enum.love_eggs &&
      extra_flag.part === part_enum.anal
    ) {
      await defender.say_and_wait('오오오❤️똥구멍❤️안 돼❤️');
      era.println();
      await attacker.print_and_wait([
        '진동 바이브레이터를 삽입하는 순간, 장내로 전해지는 진동 때문에',
        sys_get_colored_callname(attacker.id, defender.id),
        '은 고개를 들지 않을 수 없게 되었다.',
      ]);
      era.println();
      await defender.say_and_wait('안 돼❤️몸이❤️이상해져 가❤️');
    }
    return await super.use_item(attacker, defender, hook, extra_flag);
  }
};
