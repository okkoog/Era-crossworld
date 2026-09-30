const { get, set } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (get(`cflag:${this.id}:모집상태`) !== recruit_flags.yes) {
      if (get(`love:${this.id}`) >= 50 || get('flag:턴당애정도패널티') > 0) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '나는 네 상사',
        title: '이사장의 권한은 무한하다; 학원을 통해 우마무스메를 지명 모집할 때 명성 소모-25%.',
      },
    ];
  }

  set_callname() {
    set('callname:302:0', `${get('callname:0:-1')}군`);
  }
};
