/**
 * @file 메지로 맥퀸 - 日常
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const lines = require('#/event/daily/daily-13.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    dict['트레이너'] = era.get('callname:0:-2');
    if (era.get('flag:캐릭터성별') === 1) {
      dict['그녀'] = '그';
      dict['우마무스메'] = '우마무스코';
      dict['아가씨'] = '도련님';
    } else {
      dict['그녀'] = '그녀';
      dict['우마무스메'] = '우마무스메';
      dict['아가씨'] = '아가씨';
    }
    return dict;
  }

  good_morning() {
    lines['턴 시작 상호작용 대화'](this.#dict);
  }

  good_night() {
    lines['턴종료대화'](this.#dict);
  }

  async office_cook() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    await lines['함께요리하기'](dict);
  }

  async office_game() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['트레이너'] = era.get('callname:0:-2');
    await lines['함께게임하기'](dict);
  }

  async office_gift() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    await lines['선물하기'](dict);
  }

  async office_rest() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    dict['트레이너'] = era.get('callname:0:-2');
    dict['그녀'] = era.get('flag:캐릭터성별') === 1 ? '그' : '그녀';
    await lines['함께휴식하기'](dict);
  }

  async office_study() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    dict['우마무스메'] = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
    await lines['학습지도'](dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = { dice: hook.arg };
    dict['대표색'] = get_chara_color(this.id);
    dict['트레이너'] = era.get('callname:0:-2');
    dict['플레이어이름'] = era.get('callname:0:-1');
    dict['그녀'] = era.get(`cflag:${this.id}:성별`) === 1 ? '그' : '그녀';
    await lines['외출신사기도'](dict);
  }

  async out_river(hook) {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await lines['산책'](dict);
    } else {
      await lines['강가낚시'](dict);
    }
  }

  async out_shopping(hook) {
    const dict = {};
    const temp = await select_action_in_shopping_street();
    const edu_marks = EduEventMarks.get_marks(this.id);
    dict['대표색'] = get_chara_color(this.id);
    dict['트레이너'] = era.get('callname:0:-2');
    dict['호칭'] = sys_get_callname(this.id, 0);
    dict['아버님'] = era.get('cflag:0:성별') === 1 ? '아버님' : '어머님';
    dict['그녀'] = era.get('flag:캐릭터성별') === 1 ? '그' : '그녀';
    let name;
    switch (temp) {
      default:
      case 0:
        name = '게임센터';
        break;
      case 1:
        dict.hot_spring =
          !edu_marks.hot_spring &&
          era.get(`cflag:${this.id}:육성턴수합산`) >= 96 &&
          Math.random() < 0.25;
        if (dict.hot_spring) {
          edu_marks.hot_spring = 1;
        }
        name = '경품추첨';
        break;
      case 2:
        name = '노래방';
        break;
      case 3:
        name = '영화관람';
    }
    hook.arg = temp <= 1;
    await lines[name](dict);
  }

  async out_station(hook) {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['트레이너'] = era.get('callname:0:-2');
    dict['호칭'] = sys_get_callname(this.id, 0);
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await lines['식사'](dict);
        break;
      case 1:
        await lines['데이트'](dict);
        break;
      case 2:
        await lines['쇼핑몰방문'](dict);
    }
  }

  async school_atrium(hook) {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['그녀'] = era.get(`cflag:${this.id}:성별`) === 1 ? '그' : '그녀';
    if ((hook.arg = !(await select_action_in_atrium()))) {
      dict['트레이너'] = era.get('callname:0:-2');
      await lines['고목나무구멍'](dict);
    } else {
      await lines['안뜰데이트'](dict);
    }
  }

  async school_rooftop() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['트레이너'] = era.get('callname:0:-2');
    dict['호칭'] = sys_get_callname(this.id, 0);
    await lines['도시락먹기'](dict);
  }

  select() {
    const dict = {};
    dict['트레이너'] = era.get('callname:0:-2');
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    lines['상호작용 대상 선택'](dict);
  }

  async talk() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    dict['호칭'] = sys_get_callname(this.id, 0);
    dict['우마무스메'] = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
    get_chara_talk(7);
    get_chara_talk(63);
    dict['麦昆称呼船'] = sys_get_callname(this.id, 7);
    dict['麦昆称呼狄杜斯'] = sys_get_callname(this.id, 63);
    dict.check = new McqueenLifeMarks().love_40;
    await lines['잡담'](dict);
  }

  async birthday(hook) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    if (edu_weeks < 48) {
      const dict = this.#dict;
      dict['高峰色'] = get_chara_talk(86).color;
      await print_name_and_show_kojo(
        '첫생일',
        get_chara_talk(this.id),
        lines,
        dict,
      );
    } else if (edu_weeks < 96) {
      await print_name_and_show_kojo(
        '생일2년차',
        get_chara_talk(this.id),
        lines,
        this.#dict,
      );
    } else if (edu_weeks <= 144) {
      await print_name_and_show_kojo(
        '생일3년차',
        get_chara_talk(this.id),
        lines,
        this.#dict,
      );
    } else {
      await super.birthday(hook);
    }
  }
};
