const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      if (era.get('status:37:영광의 더비')) {
        ret.push({
          color: get_chara_color(this.id),
          content: '영광의 더비',
          title: '레이스 참가 시 능력치+50%',
        });
      }
      if (era.get('status:37:반드시 해야 할 일')) {
        ret.push({
          color: get_chara_color(this.id),
          content: '반드시 해야 할 일',
          title: '트레이닝 성공률+5%.',
        });
      }
      if (era.get('status:37:허약')) {
        ret.push({
          color: buff_colors[0],
          content: '허약',
          title: '컨디션 상한 1단계 하락.',
        });
      }
      if (era.get('status:37:염려')) {
        ret.push({
          color: buff_colors[0],
          content: '염려',
          title: '트레이닝 성공률-5%.',
        });
      }
    }
    return ret;
  }

  get_motivation_limit() {
    return -1 * era.get('status:37:허약');
  }

  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
      case race_enum.japa_cup:
        if (era.get('cflag:37:육성턴수합산') < 96) {
          return [1, 47].map((e) => new LegendUmaSelector(e, 1.1));
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:37:육성턴수합산') < 96) {
          return [1, 5, 18, 47].map((e) => new LegendUmaSelector(e, 1.05));
        }
        break;
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(25, 1.05)];
    }
    return super.get_race_contestants(info);
  }

  get_success_rate_buff() {
    return 5 * (era.get('status:37:반드시 해야 할 일') - era.get('status:37:염려'));
  }

  set_callname() {
    if (era.get('love:37') >= 75) {
      era.set('callname:37:0', [
        `트레이너 ${get_chara_talk(0).get_adult_sex_title()}`,
        get_chara_talk(0).sex_code - 1 ? 'Mein Lieben' : 'Mein Lieber',
      ]);
    } else if (!this.set_callname_from_src()) {
      era.set(
        'callname:37:0',
        `트레이너 ${get_chara_talk(0).get_adult_sex_title()}`,
      );
    }
  }

  set_pseudo_uma(uma) {
    if (era.get('status:37:영광의 더비')) {
      uma.attr_buffs.forEach((l) => l.push('+50%[영광의 더비]'));
    }
  }
};
