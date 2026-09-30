const { get, set } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  is_race_register_enabled() {
    return !new TachyonEduMarks().plan_b;
  }

  is_train_enabled() {
    const edu_marks = new TachyonEduMarks();
    return !edu_marks.train_stop && !edu_marks.glass_leg;
  }

  set_callname() {
    if (get('cflag:32:모집상태') !== recruit_flags.yes) {
      return super.set_callname();
    }
    if (!this.set_callname_from_src()) {
      if (get('flag:징벌강도') === 3) {
        set('callname:32:0', ['모르모트 군', '임신주머니 군']);
      } else if (get('flag:징벌강도') === 2) {
        set('callname:32:0', ['모르모트 군', '성노예 군']);
      } else if (get('mark:32:동심') === 3) {
        set('callname:32:0', ['모르모트 군', '주인님']);
      } else {
        set('callname:32:0', '모르모트 군');
      }
    }
  }

  get_status(show_train_buff) {
    const ret_list = [];
    if (show_train_buff) {
      const edu_marks = new TachyonEduMarks(),
        uma_sex = get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
      if (edu_marks.uma_limit) {
        ret_list.push({
          color: buff_colors[1],
          content: `${uma_sex}의 한계`,
          title: `${uma_sex}의 한계. 그러나 레이스 ${uma_sex} 아그네스 타키온의 한계는 아니다；레이스 중에만, 모든 능력치가 극적으로 상승함`,
        });
      }
      if (edu_marks.limited) {
        ret_list.push({
          color: buff_colors[1],
          content: '극한에 달한 광자',
          title: `밝고, 뜨겁고, 눈부시다. 그게 전부다: 이것이 바로 레이스 ${uma_sex} 아그네스 타키온의 한계；트레이닝 효과+50%`,
        });
      }
    }
    return ret_list;
  }

  get_train_buff() {
    return new TachyonEduMarks().limited * 50;
  }

  set_pseudo_uma(uma) {
    if (new TachyonEduMarks().uma_limit) {
      uma.attr_buffs.forEach((l, i) => {
        const val = Math.ceil(1200 - uma.attrs[i]);
        if (val > 0) {
          l.push(`+${val}[우마무스메의 한계]`);
        }
      });
    }
  }
};
