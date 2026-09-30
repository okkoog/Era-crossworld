/**
 * @file 어드마이어 베가 - 育成
 * @author 雞雞
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_value } = require('#/utils/value-utils');

const VegaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-33');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedEdu {
  /**
   * @author 雞雞
   * @param {CharaTalk} vega
   * @param {CharaTalk} me
   * */
  async meteor(vega, me) {
    await print_event_name('혜성 관측', vega);
    await printAndWait([
      '어느 날 밤, ',
      me.get_colored_name(),
      '은(는) 고목의 구멍 옆에서 밤하늘을 올려다보고 있는 ',
      vega.get_colored_name(),
      '를 발견했다.',
    ]);
    await printAndWait('시선을 따라가다 보니, 눈의 구석으로 유성이 스쳐 지나가는 것을 포착했다.');
    printButton('「이건 분명 무슨 징조다!」（육성 중인 우마무스메의 컨디션+1 or -1）', 1);
    printButton('「별거 아니네.」（안정도+1）', 2); //유로파4 드립
    if ((await input()) === 1) {
      const edu_list = sys_filter_chara(
        'cflag',
        '모집상태',
        recruit_flags.yes,
      ).filter((e) => get(`cflag:${e}:육성턴수합산`) < 3 * 48);
      let wait_flag;
      if (Math.random() < 0.5) {
        await printAndWait('좋은 일이 생긴 것 같다!');
        println();
        wait_flag = edu_list.reduce(
          (p, c) => sys_change_motivation(c, 1) || p,
          false,
        );
      } else {
        await printAndWait('안 좋은 일이 생겼다...');
        println();
        wait_flag = edu_list.reduce(
          (p, c) => sys_change_motivation(c, -1) || p,
          false,
        );
      }
      wait_flag && (await waitAnyKey());
    } else {
      await printAndWait('별일 아닌 일이 일어난 것 같다!');
    }
    new VegaEduMarks().meteor = get_random_value(24, 48);
  }
};
