/**
 * @file 사타케 메이 - 育成
 * @author 黑奴队长（临时）
 */
const { get, printAndWait } = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

module.exports = class extends CustomizedEdu {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} may
   * @param {CharaTalk} me
   * @param _
   * @param {HookArg} hook
   * @param __
   * @param {EventObject} event_object
   */
  async welcome(may, me, _, hook, __, event_object) {
    if (get('cflag:0:위치') > 0) {
      add_event(hook.hook, event_object);
      return;
    }
    const chairman = get_chara_talk(302);
    await print_event_name('개선문 프로젝트', may);
    await printAndWait([
      '이번 주 첫 근무일, ',
      me.get_colored_name(),
      '은(는) 학원애서 ',
      chairman.get_colored_name(),
      '을 만났다. ',
      chairman.sex,
      '는 노란 모자를 쓴 한 ',
      may.get_phy_sex_title(),
      '과 함께 있었다.',
    ]);
    if (new MayLifeMarks().who_am_i) {
      await printAndWait([
        me.get_colored_name(),
        '은(는) ',
        may.sex,
        '를 알아봤다. 예전에 만났던 ',
        may.get_colored_name(),
        '였다.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '이 알기로는',
        may.get_colored_name(),
        '는 주로 해외 원정 지원 업무를 맡고 있다.',
      ]);
    } else {
      await printAndWait([
        chairman.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '에게 다가와 인사를 건네며, ',
        me.get_colored_name(),
        '에게 이 ',
        may.get_phy_sex_title(),
        '은 ',
        may.get_colored_actual_name(),
        '이며, 오랫동안 해외 원정 지원 업무를 맡아왔다고 말했다.',
      ]);
    }
    await printAndWait([
      chairman.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '에게 일본 내에서만 경쟁하는 것에 그치지 말고 해외의 최정상급 대회로 시야를 넓혀 일본의 ',
      chairman.get_uma_sex_title(),
      '를 세계 무대로 이끌어 달라고 격려했다.',
    ]);
  }
};
