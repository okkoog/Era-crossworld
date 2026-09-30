const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    switch (era.get('flag:현재레이스')) {
      case race_enum.mile_cha:
        if (edu_weeks < 96) {
          return [new LegendUmaSelector(53, 1.05)];
        }
        break;
      case race_enum.kiku_sho:
        return [340, 341, 342].map((e) => new LegendUmaSelector(e, 1.1));
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          return [2, 21, 45, 63].map((e) => new LegendUmaSelector(e, 1.05));
        } else {
          return [27, 71, 72].map((e) => new LegendUmaSelector(e, 1.1));
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:육성턴수합산`) > 96
    ) {
      return [
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 1착!',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 1착!',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 1착!',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 1착! 오른손을 높이 든 승자는 바로, 슈퍼 우마무스메, ',
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
    if (show_train_buff) {
      const color = get_chara_color(this.id);
      const ret = [
        {
          color,
          content: '신데렐라',
          title: '턴 시작 시 스트레스가 자동으로 우울 이하로 떨어지고, 컨디션이 자동으로 저조 이상으로 상승함.',
        },
      ];
      if (era.get(`cflag:${this.id}:육성횟수`) === 0) {
        ret.push({
          color,
          content: '지각생',
          title:
            '육성이 클래식 시즌부터 시작되며, 클래식 3관(사츠키상, 일본 더비, 국화상)에 출주할 수 없음',
        });
      }
      const { train_buff } = new OguriEduMarks();
      if (train_buff > 0) {
        ret.push({
          color,
          content: `전학생 (${train_buff})`,
          title: `${train_buff}턴 동안 트레이닝 효과+100%`,
        });
      }
      return ret;
    }
    return [];
  }

  get_train_buff() {
    if (new OguriEduMarks().train_buff > 0) {
      return 100;
    }
    return 0;
  }

  is_race_disabled(race) {
    if (era.get(`cflag:${this.id}:육성횟수`) === 0) {
      switch (race) {
        case race_enum.sats_sho:
        case race_enum.toky_yus:
        case race_enum.kiku_sho:
          return true;
      }
    }
    return false;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:6:0', '트레이너');
    }
  }
};
