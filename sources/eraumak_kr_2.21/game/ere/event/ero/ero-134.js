/**
 * @file 카렌 부케도르 - 조교
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');

const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

module.exports = class extends CustomizedEro {
  async orgasm(bouquetd) {
    if (
      sys_check_awake(this.id) &&
      era.get(`cflag:${this.id}:성별`) !== 1 &&
      era.get(`talent:${this.id}:모유분비`) === 0 &&
      (era.get(`nowex:${this.id}:가슴절정`) > 0 ||
        era.get(`nowex:${this.id}:질구절정`) > 0)
    ) {
      era.println();
      await bouquetd.say_and_wait('……어?');
      await era.printAndWait([
        bouquetd.get_colored_name(),
        '의 가슴에서 액체가 뿜어져 나왔다……',
      ]);
      await era.printAndWait([
        '여운 속에 있는 ',
        bouquetd.get_colored_name(),
        '는 초유가 공기를 가르며 나아간 궤적을 멍하니 바라보고 있다……',
      ]);
      await era.printAndWait([
        bouquetd.get_colored_name(),
        '의 가슴에서 젖이 나오기 시작했다……',
      ]);
      era.set(`cflag:${this.id}:모유분비`, 3);
      era.set(
        `palam:${this.id}:가슴쾌감`,
        Math.floor(
          Math.min(
            era.get(`palam:${this.id}:가슴쾌감`),
            era.get(`tcvar:${this.id}:가슴쾌감상한`) / 2,
          ),
        ),
      );
      set_stain(this.id, part_enum.breast, stain_enum.milk);
      era.println();
    }
  }
};
