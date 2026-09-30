/**
 * @file 에어 샤커 - 招募
 * @author 幽白書
 */
const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-36.kojo');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const shakur = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const dict = {
      COLOR: shakur.color,
      SHE: shakur.sex,
      SIR: me.adult_sex_title,
      TEEN: shakur.teen_sex_title,
      HE: me.sex,
      UMA: shakur.uma_sex_title,
      YOU: me.name,
    };
    switch (stage) {
      case event_hooks.recruit:
        if (era.get(`cflag:${this.id}:모집상태`) === recruit_flags.no) {
          if (
            (await print_name_and_show_kojo('운명', shakur, kojo, dict)).at(
              -1,
            ) === 1
          ) {
            return;
          }
          era.set(`cflag:${this.id}:무작위모집`, 0);
          EventMarks.get(0).add(event_hooks.recruit_start);
          era.set('flag:대상물색', this.id);
          add_event(
            event_hooks.recruit_start,
            new EventObject(this.id, cb_enum.recruit),
          );
        } else {
          await print_name_and_show_kojo('변인 투입', shakur, kojo, dict);
          era.set('flag:대상물색', 0);
          era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
        }
        break;
      case event_hooks.recruit_start:
        await print_name_and_show_kojo('가설 설정', shakur, kojo, dict);
        EventMarks.get(0)
          .sub(event_hooks.recruit_start)
          .add(event_hooks.school_atrium);
        add_event(event_hooks.school_atrium, event_object);
        break;
      case event_hooks.school_atrium:
        if (era.get('flag:현재상호작용캐릭터') > 0) {
          add_event(stage, event_object);
          return false;
        }
        await print_name_and_show_kojo('가설 검증', shakur, kojo, dict);
        EventMarks.get(0).sub(event_hooks.school_atrium);
        era.set(`cflag:${this.id}:모집상태`, -1);
    }
    return true;
  }
};
