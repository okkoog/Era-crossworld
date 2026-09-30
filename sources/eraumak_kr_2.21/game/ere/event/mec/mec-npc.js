const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

class MecNpc extends CustomizedMec {
  init_love() {
    if (get(`cflag:${this.id}:종족`) > 0) {
      set(
        `love:${this.id}`,
        Math.min(
          get('flag:우마무스메초기애정도') + sys_personal_achievement.get(this.id) * 20,
          30,
        ),
      );
    } else {
      set(`love:${this.id}`, sys_personal_achievement.get(this.id) * 20);
    }
  }

  is_able_to_be_selected() {
    return (
      get(`cflag:${this.id}:위치`) > 0 ||
      get(`cflag:${this.id}:육성턴수합산`) < 3 * 48
    );
  }

  set_my_sex() {
    if (get(`cflag:${this.id}:종족`) > 0) {
      return super.set_my_sex();
    }
    return 0;
  }
}

module.exports = MecNpc;
