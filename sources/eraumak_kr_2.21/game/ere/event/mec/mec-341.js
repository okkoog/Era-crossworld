const { get, set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const { get_chara_color } = require('#/data/chara-colors');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');

module.exports = class extends MecGod {
  get_talents() {
    let { buff } = new GodolphinLifeMarks();
    buff += 1;
    return [
      {
        color: get_chara_color(this.id),
        content: '애정',
        fontWeight: buff > 1 ? 'bold' : undefined,
        title: `팀월들의 지능 트레이닝 효과+${50 * buff}%，트레이닝을 통해 획득하는 스킬 포인트+${25 * buff}%.`,
      },
    ];
  }

  set_callname() {
    set(`callname:${this.id}:0`, get('callname:0:-1') + ' 군');
  }
};
