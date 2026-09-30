const { set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const { get_chara_color } = require('#/data/chara-colors');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');

module.exports = class extends MecGod {
  get_talents() {
    const { buff } = new ByerleyLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '규율',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `팀원들의 스태미나 및 근성 트레이닝 효과+${50 * (buff + 1)}%.`,
      },
    ];
  }

  set_callname() {
    set(`callname:${this.id}:0`, '트레이너');
  }
};
