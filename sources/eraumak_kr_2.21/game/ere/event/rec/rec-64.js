/**
 * @file 메지로 파머 - 招募
 * @author Bottle
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-64.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const dict = {};
    const pama = get_chara_talk(this.id);
    dict['대표색'] = pama.color;
    dict['그녀'] = pama.sex;
    dict['우마무스메'] = pama.uma_sex_title;
    dict['당신'] = era.get('callname:0:-2');
    dict['善信称呼骏川'] = sys_get_callname(this.id, 301);
    dict['호칭'] = sys_get_callname(this.id, 0);
    if (era.get(`cflag:${this.id}:모집상태`) === 0) {
      let ret;
      switch (stage) {
        case event_hooks.recruit:
          era.set('flag:대상물색', this.id);
          era.set(`cflag:${this.id}:무작위모집`, 0);
          await kojo['前置']();
          EventMarks.get(0).add(event_hooks.school_rooftop);
          add_event(
            event_hooks.school_rooftop,
            new EventObject(this.id, cb_enum.recruit),
          );
          return true;
        case event_hooks.school_rooftop:
          if (era.get('flag:5') > 0) {
            add_event(stage, event_object);
            return;
          }
          EventMarks.get(0).sub(event_hooks.school_rooftop);
          EventMarks.get(0).add(event_hooks.school_atrium);
          ret = await kojo['招募1'](dict);
          if (ret[0] === 2) {
            era.println();
            ret = sys_like_chara(this.id, 0, -15);
          } else if (ret[0] === 3) {
            era.println();
            ret = sys_like_chara(this.id, 0, 10);
          } else {
            ret = false;
          }
          if (ret) {
            await era.waitAnyKey();
          }
          add_event(event_hooks.school_atrium, event_object);
          return true;
        case event_hooks.school_atrium:
          if (era.get('flag:5') > 0) {
            add_event(stage, event_object);
            return;
          }
          EventMarks.get(0).sub(event_hooks.school_atrium);
          if ((await kojo['招募2'](dict))[0] === 3) {
            era.println();
            if (sys_like_chara(this.id, 0, 10)) {
              await era.waitAnyKey();
            }
          }
          era.set('flag:대상물색', 0); //이대로면 파머는 랜덤으로 찾거나 이사장으로 고정해야되는데, 의도한것??
          era.set(`cflag:${this.id}:무작위모집`, 1);
          era.set(`cflag:${this.id}:모집상태`, -1);
          return true;
      }
    } else {
      const ret = await kojo['招募3'](dict);
      if (ret[0] === 2) {
        era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
        );
        era.println();
        let wait_flag;
        if (ret[1] === 1) {
          wait_flag = sys_love_uma(this.id, 2);
        } else {
          wait_flag = sys_like_chara(this.id, 0, 15);
        }
        if (wait_flag) {
          await era.waitAnyKey();
        }
      }
    }
  }
};
