/**
 * @file 드림 저니 - 招募
 * @author 幽白書
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/rec/rec-119.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const dict = {};
    const dj = get_chara_talk(this.id);
    dict['대표색'] = dj.color;
    dict['그녀'] = dj.sex;
    dict['우마무스메'] = dj.get_uma_sex_title();
    dict['호칭'] = sys_get_callname(this.id, 0);
    const me = get_chara_talk(0);
    dict['당신'] = me.name;
    dict['舍妹'] = dj.sex_code === 1 ? '제 남동생' : '제 여동생';
    if (era.get(`cflag:${this.id}:모집상태`) === recruit_flags.no) {
      await print_name_and_show_kojo('불행한 영입운', dj, kojo, dict);
      era.set('flag:대상물색', this.id);
      era.set(`cflag:${this.id}:모집상태`, -1);
      era.set(`cflag:${this.id}:무작위모집`, 0);
      return true;
    } else {
      await print_name_and_show_kojo('안배된 운명?', dj, kojo, dict);
      EventMarks.get(0).sub(event_hooks.recruit);
      era.set('flag:대상물색', 0);
      era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
    }
  }
};
