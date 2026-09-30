/**
 * @file 오구리 캡 - 애정
 * @author 雞雞
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const lines = require('#/event/love/love-6.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');

module.exports = class extends CustomizedLove {
  async 49(chara, me) {
    const dict = {};
    dict['대표색'] = chara.color;
    dict['플레이어이름'] = me.actual_name;
    dict['당신'] = me.name;
    dict['그녀'] = chara.sex;
    dict['우마무스메'] = chara.get_uma_sex_title();
    begin_and_init_ero(this.id);
    dict['第二性征'] = chara.sex_code === 1 ? '육봉' : '보지';
    await masturbate(this.id);
    end_ero_and_train();
    await print_event_name('그리움', chara);
    if ((await lines['그리움구상'](dict))[0] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:호감거절`, 49);
    }
  }

  async 74(chara, me, callname, stage, extra_flag, event_object) {
    const dict = {};
    dict['대표색'] = chara.color;
    dict['플레이어이름'] = me.actual_name;
    dict['당신'] = me.name;
    dict['그녀'] = chara.sex;
    dict['우마무스메'] = chara.get_uma_sex_title();
    if (stage === event_hooks.week_end) {
      await print_event_name('애정', chara);
      if ((await lines['사랑구상'](dict))[0] === 1) {
        add_event(event_hooks.back_school, event_object);
      } else {
        era.set(`cflag:${this.id}:호감거절`, 74);
      }
    } else {
      await print_event_name('고백', chara);
      if ((await lines['고백구상'](dict))[1] === 1) {
        await sys_love_uma_in_event(this.id);
        begin_and_init_ero(0, this.id);
        await quick_make_love(
          new EroParticipant(this.id, part_enum.mouth),
          new EroParticipant(0, part_enum.mouth),
          false,
        );
        end_ero_and_train();
      } else {
        era.set(`cflag:${this.id}:호감거절`, 74);
        await punish_rejecting_love(this.id);
      }
    }
  }

  async 89(chara, me, callname) {
    const dict = {};
    dict['대표색'] = chara.color;
    dict['호칭'] = callname;
    dict['그'] = me.sex;
    dict['우마무스메'] = chara.get_uma_sex_title();
    await print_event_name('연인', chara);
    await lines['연인구상'](dict);
    await sys_love_uma_in_event(this.id);
  }
};
