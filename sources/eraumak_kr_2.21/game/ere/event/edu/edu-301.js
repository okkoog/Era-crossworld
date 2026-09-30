/**
 * @file 하야카와 타즈나 - 育成
 * @author 雞雞
 */
const {
  input,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

module.exports = class extends CustomizedEdu {
  /**
   * @author 雞雞
   * @param {CharaTalk} tokino
   * @param {CharaTalk} me
   */
  async shadow(tokino, me) {
    await print_event_name('초록색 실루엣', tokino);
    const life_marks = new TokinoLifeMarks(),
      taiki = get_chara_talk(10);
    if (life_marks.who_am_i >= 1) {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 멀리서 두 개의 초록색 실루엣이 점점 가까워지는 것이 보였다. 알고 보니 ',
        taiki.get_colored_name(),
        '이 알 수 없는 이유로 ',
        tokino.get_colored_name(),
        '에게 쫒기고 있는 것이었다...여전하구나!',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 멀리서 두 개의 초록색 실루엣이 점점 가까워지는 것이 보였다. 알고 보니 ',
        taiki.get_colored_name(),
        '이 알 수 없는 이유로 ',
        tokino.get_colored_name(),
        '에게 쫓기고 있는 것이었다…… 말이 나온 김에, 도대체 어떻게 인간이 ',
        taiki.get_uma_sex_title(),
        '의 속도를 따라잡을 수 있는 걸까?',
      ]);
    }
    printButton('「천천히 가! 다치면 안돼!」', 1);
    await input();
    await printAndWait([
      '앞에 가던 ',
      taiki.get_colored_name(),
      '이 서서히 속도를 줄이자 초록색 옷을 입은 비서가 서둘러 ',
      me.get_colored_name(),
      '에게 감사를 표했다. 오늘도 착한 일 하나 했다!',
    ]);
    println();
    let wait_flag = sys_like_chara(10, 0, get_random_value(5, 15));
    wait_flag = sys_like_chara(301, 0, get_random_value(5, 15)) || wait_flag;
    wait_flag && (await waitAnyKey());
    life_marks.shadow = get_random_value(36, 60);
  }
};
