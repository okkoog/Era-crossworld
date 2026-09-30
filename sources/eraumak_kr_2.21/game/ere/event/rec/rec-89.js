/**
 * @file 슈발 그랑 - 招募
 * @author 無奈
 */
const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-89.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_obj) {
    const dict = {};
    const grand = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    dict['당신'] = era.get('callname:0:-2');
    dict['우마무스메'] = grand.get_uma_sex_title();
    dict['소녀'] = grand.get_teen_sex_title();
    dict['그녀'] = grand.sex;
    dict['여자아이'] = grand.get_baby_sex_title();
    dict['대표색'] = grand.color;
    switch (stage) {
      case event_hooks.recruit:
        if (
          sys_filter_chara('cflag', '모집상태', recruit_flags.yes).length ===
            1 &&
          era.get('flag:현재명성') < 500
        ) {
          await print_event_name('슈발 그랑 등장!：「새로운 시작」', grand);
          if ((await kojo['开头'](dict)).at(-1) === 1) {
            era.set('flag:대상물색', this.id);
            add_event(
              event_hooks.school_atrium,
              new EventObject(this.id, cb_enum.recruit),
            );
            new EventMarks(0).add(event_hooks.school_atrium);
            era.set(`cflag:${this.id}:무작위모집`, 0);
          }
        } else {
          dict['트레이너칭호'] = get_trainer_title();
          await print_event_name('슈발 그랑 등장!：「시작」', grand);
          if ((await kojo['开端'](dict)).at(-1) <= 2) {
            await kojo['开端结束'](dict);
            era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
          }
        }
        break;
      case event_hooks.school_atrium:
        if (era.get('flag:当前互动') > 0) {
          add_event(stage, event_obj);
          return;
        }
        new EventMarks(0).sub(event_hooks.school_atrium);
        await print_event_name('슈발 그랑 등장!：「발묘」', grand);
        if ((await kojo['起锚'](dict)).at(-1) === 2) {
          add_event(event_hooks.recruit_start, event_obj);
          new EventMarks(0).add(event_hooks.recruit_start);
          return true;
        } else {
          era.set('flag:대상물색', 0);
          era.set(`cflag:${this.id}:무작위모집`, 1);
        }
        break;
      case event_hooks.recruit_start:
        new EventMarks(0).sub(event_hooks.recruit_start);
        await print_event_name('슈발 그랑 등장!：「출항」', grand);
        dict['强击代表色'] = get_chara_color(91);
        dict['极峰代表色'] = get_chara_color(90);
        dict['언니'] = grand.get_bigger_sibling_sex_title();
        dict['남성'] = me.get_phy_sex_title();
        dict['그'] = me.sex;
        dict['플레이어이름'] = me.actual_name;
        dict['训练员先生'] = '트레이너' + me.get_adult_sex_title();
        if ((await kojo['入海'](dict))[1] === 1) {
          era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
        } else {
          era.set(`cflag:${this.id}:무작위모집`, 1);
        }
        era.set('flag:대상물색', 0);
    }
    if (era.get(`cflag:${this.id}:모집상태`) === recruit_flags.yes) {
      await this.recruit_end();
      if (stage !== event_hooks.recruit) {
        return true;
      }
    }
  }
};
