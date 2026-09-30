/**
 * @file 드림 저니 - 일상
 * @author 幽白書
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/daily/daily-119.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const r = {};
    r['당신'] = get_chara_talk(0).name;
    r['호칭'] = sys_get_callname(this.id, 0);
    r['대표색'] = get_chara_color(this.id);
    return r;
  }

  select() {
    const life_marks = LifeEventMarks.get_marks(119);
    if (!sys_check_awake(119) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const callname = sys_get_callname(119, 0);
    const dj = get_chara_talk(119);
    dj.say([
      '응? ',
      callname,
      '……설마 당신은 조금도 두렵지 않으신가요? 예를 들면, 예전 일이 다시 되풀이된다던가.',
    ]);
    dj.say('……후후, 당신은 정말 다정한 사람이군요.');
    life_marks.b_escape = 0;
  }

  good_morning() {
    const life_marks = LifeEventMarks.get_marks(119);
    const callname = sys_get_callname(119, 0),
      dj = get_chara_talk(119);
    if (life_marks.b_escape) {
      dj.say(['무슨 일이시죠, ', callname, '?']);
      dj.say(
        '안색이 별로 안 좋으시네요…… 설마, 너무 오랫동안 바깥세상과 단절되어 있어서 오히려 환경이 두려워지신 건가요?',
      );
      dj.say('두려워 마세요, 두려워 마세요…… 제 곁에 기대기만 하시면…… 아무것도 무서울 게 없답니다……');
      life_marks.b_escape = 0;
    } else {
      kojo['good_morning'](this.#dict);
    }
  }

  async end_talk() {
    await kojo['end_talk'](this.#dict);
  }
};