/**
 * @file 아키카와 야요이 - 애정
 * @author 黑奴队长（临时）
 */
const era = require('#/era-electron');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

module.exports = class extends CustomizedLove {
  async 49(taste, me) {
    const life_marks = new TasteLifeMarks();
    await print_event_name('발정!', taste);
    if (life_marks.who_am_i === 0) {
      await era.printAndWait([
        '우연한 기회에 ',
        me.get_colored_name(),
        '은(는) ',
        taste.get_colored_name(),
        '의 진짜 정체가 ',
        taste.get_uma_sex_title(),
        ' ',
        { color: taste.color, content: '노던 테이스트', fontWeight: 'bold' },
        '임을 알아냈다.',
      ]);
      era.set('callname:302:-1', '노던 테이스트');
      await era.printAndWait([
        taste.get_colored_name(),
        '는 좌절한 표정으로 ',
        me.get_colored_name(),
        '에게 ',
        taste.sex,
        '의 비밀을 지켜달라고 말했다.',
      ]);
    }
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      taste.get_colored_name(),
      '의 관계에 획기적인 변화가 생겼다……',
    ]);
    await era.printAndWait([
      taste.get_colored_name(),
      '는「팟」하고 부채를 펼쳐 반짝이는 눈빛을 가렸다……',
    ]);
    life_marks.who_am_i = 2;
    await this.common_result();
  }

  async 74(taste) {
    await print_event_name('애정!', taste);
    await this.common_result();
  }

  async 89(taste) {
    await print_event_name('사랑!', taste);
    await this.common_result();
  }

  async 99(taste) {
    await print_event_name('의존!', taste);
    await this.common_result();
  }
};
