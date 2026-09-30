/**
 * @file 달리 아라비안 - 조교
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');

module.exports = class extends CustomizedEro {
  /** @author 黑奴队长 */
  async cum_in_womb(god, me, callname, hook, extra_flag) {
    if (extra_flag.father_id || !sys_check_awake(extra_flag.mother_id)) {
      return await super.cum_in_womb(god, me, callname, hook, extra_flag);
    }
    await era.printAndWait([
      '따뜻한 정액이 자궁을 가득 채우자，',
      god.get_colored_name(),
      '은 미소지었다……',
    ]);
  }
};
