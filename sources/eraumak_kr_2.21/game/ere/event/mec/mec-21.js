const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    const edu_marks = new TamaEduMarks();
    return (
      0.1 * (edu_marks.lightning === 1) +
      0.05 * (edu_marks.heal === 1) -
      0.1 * (edu_marks.heal === -1)
    );
  }

  get_maxbase_buff() {
    return -200 * (new TamaEduMarks().lightning === 1);
  }

  get_pressure_buff() {
    return 0.1 * (new TamaEduMarks().lightning === 1);
  }

  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
      case race_enum.takz_kin:
        if (era.get('cflag:21:육성턴수합산') > 96) {
          return [
            new LegendUmaFilter(
              '아키츠 테이오',
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 6 &&
                e.adapt_style[1] >= 6,
            ).set_image('秋津帝王'),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.tenn_spr) {
      return [
        {
          color: uma.color,
          content: ', 그야말로 백색 번개가 경기장을 환히 밝힙니다! 누가 그녀를 얕볼 수 있겠습니까!',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: '!',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      const { lightning, heal } = new TamaEduMarks();
      switch (lightning) {
        default:
          ret.push({
            color: get_chara_color(this.id),
            content: '섬광',
            title: '하얀 번개. 모든 대회에 참가 가능',
          });
          break;
        case 1:
          ret.push({
            color: get_chara_color(this.id),
            content: '낙뢰',
            fontWeight: 'bold',
            title:
              '전류 약화; 트레이닝 효과 -20%, 체력/정신력 상한 -200, 소모 +10%, 스트레스 획득 +10%',
          });
          break;
        case 2:
          ret.push({
            color: get_chara_color(this.id),
            content: '뇌운',
            fontWeight: 'bold',
            title: '폭풍우가 몰려오고 있다. 현재는 OP급 레이스만 참가할 수 있다',
          });
          break;
        case 3:
          ret.push({
            color: get_chara_color(this.id),
            content: '전도',
            fontWeight: 'bold',
            title: '번개가 막 형성되었다. 현재는 OP-G3급 대회에만 참가할 수 있다',
          });
      }
      if (heal === 1) {
        ret.push({
          color: get_chara_color(this.id),
          content: '스파르타식',
          title: '트레이닝 효과+20%，체력 소모+5%',
        });
      } else if (heal === -1) {
        ret.push({
          color: get_chara_color(this.id),
          content: '우마무스메 우선',
          title: '매 턴 자동으로 컨디션 상승, 체력 및 정신력 소모 -10%',
        });
      }
    }
    return ret;
  }

  get_train_buff() {
    const edu_marks = new TamaEduMarks();
    return -20 * (edu_marks.lightning === 1) + 20 * (edu_marks.heal === 1);
  }

  is_race_disabled(race) {
    switch (new TamaEduMarks().lightning) {
      case 1:
        return (
          era.get(`cflag:${this.id}:육성횟수`) === 0 &&
          race_infos[race].race_class < class_enum.OP
        );
      case 2:
        return race_infos[race].race_class < class_enum.OP;
      case 3:
        return race_infos[race].race_class < class_enum.G3;
    }
    return false;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:21:0', '트레이너');
    }
  }
};
