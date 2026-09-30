/**
 * @file 하야카와 타즈나 - 애정
 * @author 黑奴队长（临时）
 */
const era = require('#/era-electron');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

module.exports = class extends CustomizedLove {
  async 49(tokino, me) {
    const life_marks = new TokinoLifeMarks();
    await print_event_name('욕망', tokino);
    if (life_marks.who_am_i === 0) {
      await era.printAndWait([
        '어느 날 ',
        tokino.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '에게 자신의 진짜 정체를 털어놓았다.',
      ]);
      era.set('callname:301:-1', '토키노 미노루');
      await era.printAndWait([
        tokino.get_uma_sex_title(),
        ' ',
        tokino.get_colored_actual_name(),
        ', 그것이 ',
        tokino.sex,
        '의 진정한 이름이다.',
      ]);
    }
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tokino.get_colored_name(),
      ' 사이의 관계가 진전되었다....',
    ]);
    await era.printAndWait([
      tokino.get_colored_name(),
      '의 완벽한 영업용 미소 아래, 무언가가 변했다...',
    ]);
    life_marks.who_am_i = 2;
    await this.common_result();
  }

  async 74(tokino) {
    await print_event_name('열애', tokino);
    await this.common_result();
  }

  async 89(tokino) {
    await print_event_name('연인', tokino);
    await this.common_result();
  }

  async 99(tokino) {
    await print_event_name('애착', tokino);
    await this.common_result();
  }
};
