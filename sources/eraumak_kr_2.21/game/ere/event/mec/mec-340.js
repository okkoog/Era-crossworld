const { set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const { get_chara_color } = require('#/data/chara-colors');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');

module.exports = class extends MecGod {
  get_talents() {
    const { buff } = new DarleyLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '용기',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `팀원들의 스피드 및 파워 트레이닝 효과+${50 * (buff + 1)}%.`,
      },
    ];
  }

  set_callname() {
    set(`callname:${this.id}:0`, '어린양 군');
  }
};
