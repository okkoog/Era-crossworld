/**
 * @file 젠노 롭 로이 - 招募
 * @author 某不思议的大嘴鸥
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-47.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const dict = {};
    const rob = get_chara_talk(this.id);
    dict['대표색'] = rob.color;
    dict['그녀'] = rob.sex;
    dict['우마무스메'] = rob.get_uma_sex_title();
    dict['소녀'] = rob.get_teen_sex_title();
    const me = get_chara_talk(0);
    dict['당신'] = me.name;
    dict['호칭'] = sys_get_callname(this.id, 0);
    let temp;
    switch (era.get(`cflag:${this.id}:모집상태`)) {
      case recruit_flags.no:
        dict['하야카와'] = sys_get_callname(0, 301);
        temp = await kojo['招募1'](dict);
        era.println();
        if (temp[3] === 1) {
          if (sys_like_chara(this.id, 0, 5)) {
            await era.waitAnyKey();
          }
        } else if (sys_love_uma(this.id, 1)) {
          await era.waitAnyKey();
        }
        era.set(`cflag:${this.id}:무작위모집`, 0);
        era.set(`cflag:${this.id}:모집상태`, -1);
        EventMarks.get(0).add(event_hooks.school_atrium);
        add_event(
          event_hooks.school_atrium,
          new EventObject(this.id, cb_enum.recruit),
        );
        era.set('flag:대상물색', this.id);
        return true;
      case -1:
        if (era.get('flag:현재상호작용캐릭터') > 0) {
          add_event(stage, event_object);
          return false;
        }
        await kojo['招募2'](dict);
        era.set(`cflag:${this.id}:모집상태`, -2);
        add_event(stage, event_object);
        return true;
      case -2:
        if (era.get('flag:현재상호작용캐릭터') > 0) {
          add_event(stage, event_object);
          return false;
        }
        await kojo['招募3'](dict);
        era.set(`cflag:${this.id}:무작위모집`, 1);
        era.set(`cflag:${this.id}:모집상태`, -3);
        EventMarks.get(0).sub(event_hooks.school_atrium);
        era.set('flag:대상물색', 0);
        return true;
      case -3:
        if (await this.check_before_rec()) {
          return false;
        }
        dict['그'] = me.sex;
        dict['吉兆色'] = get_chara_color(83);
        temp = await kojo['招募4'](dict);
        if (temp[3] === 1) {
          if (sys_like_chara(this.id, 0, 5, true, 1)) {
            await era.waitAnyKey();
          }
        } else {
          sys_change_fame(-5);
          if (sys_love_uma(this.id, 2)) {
            await era.waitAnyKey();
          }
        }
        era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
    }
  }
};
