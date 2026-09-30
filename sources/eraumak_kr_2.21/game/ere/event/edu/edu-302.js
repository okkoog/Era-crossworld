/**
 * @file 아키카와 야요이 - 育成
 * @author 雞雞
 */
const {
  add,
  get,
  input,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const CustomizedEdu = require('#/event/edu/edu-common');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedEdu {
  /**
   * @author 雞雞
   * @param {CharaTalk} taste
   */
  async annoyance1(taste) {
    new TasteLifeMarks().annoyance = -get_random_value(5, 12);
    EventMarks.get(0).sub(event_hooks.school_chairman);
    await print_event_name(
      [taste.get_teen_sex_title(), ' 이사장의 고민 1'],
      taste,
    );
    await printAndWait([
      '학원 이사장 ',
      taste.get_colored_actual_name(),
      '가 고민에 빠져 있다. 재정 문제 때문인데, 또 다시 트레센의 예산이 초과되고 말았다——!!',
    ]);
    await printAndWait(
      '지금 이 주황머리 꼬마는 초록색 비서의 질책에 벌벌 떨고 있다…… 하지만 무시할 수 없는 재정 문제를 도대체 어떻게 해결해야 할까?',
    );
    printButton(
      '「수입 증대와 지출 절감이다. 내 급여를 먼저 삭감해!」（부채+40, 현재 육성중인 우마무스메의 스킬포인트+10)',
      1,
    );
    printButton('「별로 할 건 없네……」', 2);
    if ((await input()) === 1) {
      await printAndWait('좋은 일을 한 것 같다!');
      await printAndWait('..하지만 이번 달은 컵라면으로 버텨야 할지도.');
      sys_filter_chara('cflag', '모집상태', recruit_flags.yes)
        .filter((e) => get(`cflag:${e}:육성턴수합산`) < 3 * 48)
        .forEach((e) => add(`exp:${e}:스킬포인트`, 10));
      sys_get_billings().push({ creditor: 302, repay: -10, timer: 4 });
      println();
      sys_like_chara(302, 0, get_random_value(10, 20)) && (await waitAnyKey());
    } else {
      await printAndWait('딱히 할 수 있는 건 없는 것 같다.');
    }
    return true;
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} taste
   */
  async annoyance2(taste) {
    EventMarks.get(0).sub(event_hooks.school_chairman);
    await print_event_name(
      [taste.get_teen_sex_title(), ' 이사장의 고민 2'],
      taste,
    );
    await printAndWait([
      '학원 이사장 ',
      taste.get_colored_actual_name(),
      '의 고양이가 실종되었다! 고양이가 없어져 우울해하는 이사장 때문에 트레센의 운영 효율도 크게 떨어져 버렸다!',
    ]);
    printButton(
      '「모든 인력을 동원해서 반드시 고양이를 찾아내야 돼!」（기력-50，호감+40～60）',
      1,
    );
    printButton('「그래서?」', 2);
    if ((await input()) === 1) {
      await printAndWait([
        '고양이를 찾은 후 ',
        taste.get_colored_name(),
        '은 매우 기뻐했고 트레센도 다시 정상적으로 돌아왔다.',
      ]);
      println();
      sys_change_attr_and_print(0, '기력', -50);
      sys_like_chara(302, 0, get_random_value(40, 60)) && (await waitAnyKey());
    } else {
      await printAndWait('별 거 아닌 것 같은데...애초에 이사장님 평소에 일 하시기는 하나?');
    }
    return true;
  }
};
