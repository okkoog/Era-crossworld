/**
 * @file 메지로 아르당 - 애정
 * @author 洛洛
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/love/love-71.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const ArdanLifeMarks = require('#/data/event/life-event-marks/life-event-marks-71');

module.exports = class extends CustomizedLove {
  get #dict() {
    const o = {};
    const ardan = get_chara_talk(this.id),
      me = get_chara_talk(0);
    o['대표색'] = ardan.color;
    o['당신'] = me.name;
    o['호칭'] = sys_get_callname(this.id, 0);
    o['그녀'] = ardan.sex;
    o['우마무스메'] = ardan.get_uma_sex_title();
    o['씨'] = ardan.sex_code === 1 ? '少爷' : '씨';
    o['그'] = me.sex;
    return o;
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async bearing(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    new ArdanLifeMarks().love_1 = 2;
    const name = '추구하는 것은 품격';
    await print_event_name(name, ardan);
    await kojo[name](this.#dict);
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async theater(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '황혼 속의 한 장면';
    await print_event_name(name, ardan);
    const dict = this.#dict;
    get_chara_talk(86);
    dict['阿尔丹称呼高峰'] = sys_get_callname(this.id, 86);
    await kojo[name](dict);
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async travel(ardan, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    const name = '여행';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[0] === 2) {
      add_event(stage, event_object);
      return;
    }
    era.println();
    add_jewel_reward(this.id, '순종', 500);
    return true;
  }

  async 49(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '가까워지는 둘';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[2] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:호감거절`, 49);
      await punish_rejecting_love(this.id);
    }
  }

  async 74(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '공포 속에서의 고백';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[3] === 1) {
      await sys_love_uma_in_event(this.id);
      get_custom_mec(this.id).set_callname();
    } else {
      era.set(`cflag:${this.id}:호감거절`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '둘만의 그림';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[1] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:호감거절`, 89);
      await punish_rejecting_love(this.id);
    }
  }

  async 99(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    await print_event_name(`고난을 겪던 유리새의 안식처`, ardan);
    const ret = await kojo['坎坷的琉璃鸟找到了她的归宿'](this.#dict);
    if (ret[2] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:호감거절`, 99);
      await punish_rejecting_love(this.id);
    }
  }
};
