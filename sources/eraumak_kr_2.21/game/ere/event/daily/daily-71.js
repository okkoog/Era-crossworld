/**
 * @file 메지로 아르당 - 日常
 * @author 洛洛
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/daily/daily-71.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const ArdanLifeMarks = require('#/data/event/life-event-marks/life-event-marks-71');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const o = {};
    o['대표색'] = get_chara_color(this.id);
    o['당신'] = era.get('callname:0:-2');
    o['호칭'] = sys_get_callname(this.id, 0);
    if (era.get(`cflag:${this.id}:성별`) === 1) {
      o['그녀'] = '그';
      o['우마무스메'] = '우마무스코';
    } else {
      o['그녀'] = '그녀';
      o['우마무스메'] = '우마무스메';
    }
    return o;
  }

  #get_callname(id) {
    get_chara_talk(id);
    return sys_get_callname(this.id, id);
  }

  select() {
    if (era.get('status:0:생일') > 0) {
      kojo['生日选中互动'](this.#dict);
    } else {
      kojo['回合开始'](this.#dict);
    }
  }

  good_morning() {
    if (era.get('status:0:생일') > 0) {
      kojo['生日选中互动'](this.#dict);
    } else {
      kojo['回合开始'](this.#dict);
    }
  }

  async good_night() {
    kojo['回合结束'](this.#dict);
  }

  async talk() {
    const dict = this.#dict;
    dict['阿尔丹称呼小栗帽'] = this.#get_callname(6);
    dict['阿尔丹称呼玉藻十字'] = this.#get_callname(21);
    dict['阿尔丹称呼速子'] = this.#get_callname(32);
    dict['阿尔丹称呼善信'] = this.#get_callname(64);
    dict['阿尔丹称呼千代王'] = this.#get_callname(69);
    dict['阿尔丹称呼八重无敌'] = this.#get_callname(72);
    dict['阿尔丹称呼高峰'] = this.#get_callname(86);
    await kojo['잡담'](dict);
  }

  async office_gift() {
    await kojo['선물하기'](this.#dict);
  }

  async out_church() {
    await kojo['외출신사기도'](this.#dict);
  }

  async out_river(hook) {
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await kojo['산책'](this.#dict);
    } else {
      await kojo['강가낚시'](this.#dict);
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await kojo['게임센터'](this.#dict);
        break;
      case 1:
        await kojo['경품추첨'](this.#dict);
        break;
      case 2:
        await kojo['노래방'](this.#dict);
        break;
      case 3:
        await kojo['영화관람'](this.#dict);
    }
  }

  async out_station(hook) {
    switch ((hook.arg = await select_action_in_station(3))) {
      case 0:
        await kojo['식사'](this.#dict);
        break;
      case 1:
        await kojo['데이트'](this.#dict);
        break;
      case 2:
        await kojo['쇼핑몰방문'](this.#dict);
    }
  }

  async school_atrium(hook) {
    if (!(hook.arg = await select_action_in_atrium())) {
      await kojo['고목나무구멍'](this.#dict);
    } else {
      await kojo['안뜰데이트'](this.#dict);
    }
  }

  async school_rooftop() {
    await kojo['도시락먹기'](this.#dict);
  }

  async office_cook() {
    await kojo['함께요리하기'](this.#dict);
  }

  async office_study() {
    await kojo['학습지도'](this.#dict);
  }

  async office_rest() {
    await kojo['함께휴식하기'](this.#dict);
  }

  async office_game() {
    await kojo['함께게임하기'](this.#dict);
  }

  async celebration(hook) {
    let name;
    switch (era.get('flag:현재턴수') % 48) {
      case 1:
        name = '새해';
        break;
      case 6:
        name = '발렌타인데이';
        break;
      case 14:
        name = '팬 대감사제';
        break;
      case 30:
        name = '축제';
        break;
      case 40:
        name = '할로윈';
        break;
      case 0:
        name = '크리스마스';
    }
    if (!name) {
      return await super.celebration(hook);
    }
    await print_event_name(name, get_chara_talk(this.id));
    await kojo[name](this.#dict);
  }

  async birthday() {
    await print_event_name('생일', get_chara_talk(this.id));
    const life_marks = new ArdanLifeMarks();
    if (era.get(`love:${this.id}`) === 100 && !life_marks.birthday) {
      life_marks.birthday = 1;
      await kojo['特殊生日'](this.#dict);
    } else {
      await kojo['普通生日'](this.#dict);
    }
  }
};
