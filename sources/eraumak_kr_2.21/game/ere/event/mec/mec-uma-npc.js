const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

module.exports = class extends CustomizedMec {
  get_train_buff() {
    const debuff = EduEventMarks.get_marks(this.id).get('debuff');
    if (debuff) {
      return Math.floor(
        -debuff *
          Math.max(
            Math.min((675 - get(`relation:${this.id}:0`)) / 600, 1),
            0.5,
          ),
      );
    }
    return 0;
  }

  get_status(show_train_buff) {
    if (show_train_buff) {
      const debuff = EduEventMarks.get_marks(this.id).get('debuff');
      if (debuff) {
        const val = Math.floor(
          -debuff *
            Math.max(
              Math.min((675 - get(`relation:${this.id}:0`)) / 600, 1),
              0.5,
            ),
        );
        if (val < 0) {
          return [
            {
              color: buff_colors[0],
              content: '낯가림',
              fontWeight: 'bold',
              title: `서로 아직 잘 알지 못한다……트레이닝 효과 ${val}%; 관계를 개선하거나 담당 트레이너와 이 문제에 대해 이야기하면 이 상태를 개선할 수 있다.`,
            },
          ];
        }
      }
    }
    return [];
  }
};
