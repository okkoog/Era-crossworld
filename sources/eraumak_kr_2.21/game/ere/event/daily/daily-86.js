/**
 * @file 메지로 라모누 - 日常
 * @author イーウィヤ
 */
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  /** @author イーウィヤ */
  good_morning() {
    const life_marks = LifeEventMarks.get_marks(86);
    if (!sys_check_awake(86) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.good_morning();
    }
    super.select();
  }

  /** @author イーウィヤ */
  select() {
    const life_marks = LifeEventMarks.get_marks(86);
    if (!sys_check_awake(86) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const ramonu = get_chara_talk(86);
    ramonu.say('……놀랐어? 무서웠어? 나의 당신을 향한『사랑』이 두려웠어?');
    ramonu.say(
      '후후. 그렇구나. 나도 나와 당신 사이의 사랑이 결코 변하지 않을 것이라고 굳게 믿고 있어. 당연하지.',
    );
    ramonu.say('……앞으로도, 나는 당신의 모든 지시를 따르고 당신의 모든『사랑』을 받을 거야.');
    life_marks.b_escape = 0;
  }
};
