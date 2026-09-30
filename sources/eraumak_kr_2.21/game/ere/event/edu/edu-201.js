/**
 * @file 해피 미쿠 - 育成
 * @author イーウィヤ
 */
const { printAndWait, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_value } = require('#/utils/value-utils');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');

module.exports = class extends CustomizedEdu {
  /**
   * @author イーウィヤ
   * @param {CharaTalk} meek
   */
  async all_round(meek) {
    await print_event_name('뭐든지 다 잘하는 미쿠', meek);
    await printAndWait('갑자기 어디선가 꽤 오래된 느낌의 종이 하나가 날아왔다!?');
    await printAndWait('……손을 뻗어서 잡았다.');
    await printAndWait(
      '왜 단거리, 중거리, 장거리에 대한 내용이 한 페이지에 다 나와 있는 거지——',
    );
    await meek.say_and_wait('아, 그거 돌려주실 수 있나요……');
    await printAndWait([
      '페이지의 내용에 놀라고 있을 때 ',
      meek.get_colored_name(),
      '가 다가와 말을 걸었다.',
    ]);
    await printAndWait('……음. 남의 보물을 훔쳐본 듯한 죄책감이 들어 얌전히 돌려주었다.');
    println();
    await printAndWait('……아, 설마 그 페이지가 그 키류인 가문의 트레이너 백서인 건가!?');
    await printAndWait('오랜 시간이 지난 후에야 문득 그런 생각이 떠올라 손바닥을 세게 쳤다.');
    println();
    let wait_flag = get_attr_and_print_in_event(
      0,
      [0, 0, 0, 0, 3],
      get_random_value(0, 10),
      undefined,
      true,
    );
    wait_flag = sys_like_chara(201, 0, get_random_value(5, 15)) || wait_flag;
    wait_flag && (await waitAnyKey());
    new MeekEduMarks().all_round = get_random_value(36, 60);
  }
};
