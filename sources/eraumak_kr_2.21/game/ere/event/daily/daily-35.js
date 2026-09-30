/**
 * @file 위닝 티켓 - 日常
 * @author 幽白書
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  /** @author 幽白書 */
  good_morning() {
    const life_marks = LifeEventMarks.get_marks(35);
    if (!life_marks.b_escape) {
      return super.good_morning();
    }
    const callname = sys_get_callname(35, 0),
      ticket = get_chara_talk(35);
    ticket.say(['에?', callname, ', 내 얼굴을 보고 왜 그렇게 놀라는 표정을 짓는 거야?']);
    ticket.say('설마…… 날 다시는 보고 싶지 않은 거야? 내 곁에서 영원히 도망치고 싶은 거야?');
    ticket.say([
      '에…… 에헤헤, 응, 그럴 줄 알았어. 계속 나와 함께 있어 줄 거지, 그지?',
    ]);
    life_marks.b_escape = 0;
  }

  /** @author 幽白書 */
  select() {
    const life_marks = LifeEventMarks.get_marks(35);
    if (!sys_check_awake(35) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const callname = sys_get_callname(35, 0),
      ticket = get_chara_talk(35);
    ticket.say(['우와아아아아아앙, ', callname, '이 날 무시해서 너무 슬퍼……']);
    ticket.say(['하마터면', callname, '을 다시 우리의 사랑의 보금자리로 데려갈 뻔했잖아……']);
    ticket.say([
      '다행히 이렇게 날 찾아와 주었네! 우리는 진심으로 사랑하는 사이니까, 그렇지!',
    ]);
    life_marks.b_escape = 0;
  }
};