/**
 * @file 오구리 캡 - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const lines = require('#/event/daily/daily-6.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends CustomizedDaily {
  good_morning() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    lines['턴 시작 상호작용 대화'](dict);
  }

  async office_cook() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['함께요리하기'](dict);
  }

  async office_game() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['함께게임하기'](dict);
  }

  async office_gift() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['선물하기'](dict);
  }

  async office_prepare() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['레이스전 준비'](dict);
  }

  async office_rest() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['함께휴식하기'](dict);
  }

  async office_study() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['학습지도'](dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = { dice: hook.arg };
    dict['대표색'] = get_chara_color(this.id);
    dict['당신'] = era.get('callname:0:-2');
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
    dict['대표색'] = get_chara_color(this.id);
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await lines['게임센터'](dict);
        break;
      case 1:
        await lines['경품추첨'](dict);
        break;
      case 2:
        await lines['노래방'](dict);
        break;
      case 3:
        await lines['영화관람'](dict);
    }
  }

  async out_station(hook) {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
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
      dict['당신'] = era.get('callname:0:-2');
      await lines['고목나무구멍'](dict);
    } else {
      await lines['안뜰데이트'](dict);
    }
  }

  async school_rooftop() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['도시락먹기'](dict);
  }

  select() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    lines['상호작용 대상 선택'](dict);
  }

  async talk() {
    const dict = {};
    dict['대표색'] = get_chara_color(this.id);
    await lines['잡담'](dict);
  }
};
