/**
 * @file 爱慕织姬产驹，爱慕彦星的日常口上（临时）
 * 设定是织姬的第一个产驹是妹妹<br>
 * 示例用的日常事件口上<br>
 * 欢迎创作替代
 * @author 黑奴队长（临时）
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const DailyChild = require('#/event/daily/daily-child');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends DailyChild {
  select() {
    if (
      !sys_check_awake(0) ||
      !sys_check_awake(this.id) ||
      era.get(`cflag:${this.id}:성장단계`) < 1
    ) {
      return super.select();
    }
    const father = era.get(`cflag:${this.id}:부계캐릭`),
      mother = era.get(`cflag:${this.id}:모계캐릭`);
    if (father && mother) {
      return super.select();
    }
    get_chara_talk(this.id).say([
      '오늘도 잘 부탁해, ',
      era.get('cflag:0:성별') === 1 ? '오빠' : '언니',
      '……아，이게 아니지，',
      father > 0 ? '마마' : '파파',
      '～❤️',
    ]);
  }
};
