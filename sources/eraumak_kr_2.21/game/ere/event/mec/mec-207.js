const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const ElfieLifeMarks = require('#/data/event/life-event-marks/life-event-marks-207');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new ElfieLifeMarks();
    let title = '팀원들의 체중 감량 속도 증가';
    if (buff > 0) {
      title += ',' + get('callname:0:-1') + '의 체력, 기력 최대치+200';
    }
    title += '.';
    return [
      {
        color: get_chara_color(this.id),
        content: get(`staticcstr:${this.id}:칭호`),
        fontWeight: buff > 0 ? 'bold' : undefined,
        title,
      },
    ];
  }
};
