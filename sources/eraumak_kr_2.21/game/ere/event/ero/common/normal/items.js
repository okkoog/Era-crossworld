/**
 * @file  - 道具系
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const EroItems = require('#/event/ero/common/interface/ero-items');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');

class EroNormalItems extends EroItems {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.user
   */
  async use_medicine(attacker, defender, hook, extra_flag) {
    let aim_chara = extra_flag.user === defender.id ? defender : attacker;
    switch (extra_flag.item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (era.get(`cflag:${aim_chara.id}:성별`) === 0) {
          await era.printAndWait([
            aim_chara.get_colored_name(),
            '에게 ',
            { color: buff_colors[2], content: '사나운 거근' },
            '이 생겼다!',
          ]);
        } else {
          await era.printAndWait([
            aim_chara.get_colored_name(),
            '의 육봉이 더 굵어졌다……',
          ]);
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait([
          aim_chara.get_colored_name(),
          '의 가슴에서 ',
          { color: buff_colors[2], content: '모유' },
          '가 흘러나오기 시작했다……',
        ]);
    }
    if (
      !era.get(`tcvar:${aim_chara.id}:발정`) &&
      (extra_flag.item === medicine_enum.uma_z ||
        extra_flag.item === medicine_enum.fron_k ||
        extra_flag.item === medicine_enum.fron_p)
    ) {
      await era.printAndWait([
        aim_chara.get_colored_name(),
        '은(는) 점점 흥분되기 시작헸다……',
      ]);
    }
  }
}

module.exports = EroNormalItems;
