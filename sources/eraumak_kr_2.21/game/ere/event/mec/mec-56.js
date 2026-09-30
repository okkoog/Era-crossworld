const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const CharaTalk = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, motivation_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!super.set_callname_from_src()) {
      if (era.get('love:56') < 75) {
        return super.set_callname();
      }
      era.set('callname:56:0', [
        '운명의 사람',
        `트레이너 ${CharaTalk.me.get_adult_sex_title()}`,
      ]);
    }
  }

  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      if (era.get('status:56:운세의존')) {
        ret.push({
          color: get_chara_color(56),
          content: '운세의존',
          title: '오늘의 운세는 뭘까?',
        });
      }
      if (era.get('status:56:대길')) {
        ret.push({
          color: motivation_colors.at(-1),
          content: '대길',
          title:
            '영력이 넘쳐흐른다! 트레이닝 성공률 +10%, 모든 트레이닝 효과 +5%, 호감도 획득 +10%, 레이스 출주 시 능력치 +5%',
        });
      }
      if (era.get('status:56:중길')) {
        ret.push({
          color: motivation_colors.at(-2),
          content: '중길',
          title: '운이 좋네! 트레이닝 성공률 +5%, 모든 트레이닝 효과 +5%, 레이스 출주 시 능력치 +3%',
        });
      }
      if (era.get('status:56:소길')) {
        ret.push({
          color: motivation_colors.at(-3),
          content: '소길',
          title: '나쁘지 않네! 트레이닝 성공률 +5%, 레이스 출주 시 능력치 +1%',
        });
      }
      if (era.get('status:56:흉')) {
        ret.push({
          color: motivation_colors.at(-4),
          content: '흉',
          title:
            '이때 후쿠를 위로한다면? 트레이닝 성공률 -10%, 모든 트레이닝 효과 -10%, 레이스 출주 시 능력치 -10%, 호감도 획득 +20%',
        });
      }
      if (era.get('status:56:PTSD')) {
        ret.push({
          color: buff_colors[3],
          content: 'PTSD',
          title:
            '피할 수 없는 그림자. 트레이닝 성공률 -10%, 모든 트레이닝 효과 -10%, 레이스 출주 시 능력치 -10%, 컨디션 상한 -3',
        });
      }
      if (era.get('status:56:안정')) {
        ret.push({
          color: buff_colors[1],
          content: '안정',
          title:
            '트레이너가 곁에 있다면, 의심할 여지 없이 대길! 트레이닝 성공률 +10%, 모든 트레이닝 효과 +5%, 호감도 획득 +10%, 레이스 출주 시 능력치 +5%',
        });
      }
    }
    return ret;
  }

  get_motivation_limit() {
    return -3 * era.get('status:56:PTSD');
  }

  get_success_rate_buff() {
    return (
      10 * era.get('status:56:대길') +
      5 * era.get('status:56:중길') +
      5 * era.get('status:56:소길') -
      10 * era.get('status:56:흉') -
      10 * era.get('status:56:PTSD') +
      10 * era.get('status:56:안정')
    );
  }

  get_train_buff() {
    return (
      5 * era.get('status:56:대길') +
      5 * era.get('status:56:중길') -
      10 * era.get('status:56:PTSD') +
      5 * era.get('status:56:안정') -
      10 * era.get('status:56:흉')
    );
  }
  get_relation_buff() {
    return (
      5 * era.get('status:56:대길') +
      10 * era.get('status:56:흉') +
      5 * era.get('status:56:안정')
    );
  }

  set_pseudo_uma(uma) {
    if (era.get('status:56:PTSD')) {
      uma.attr_buffs.forEach((l) => l.push('-5%[PTSD]'));
    }
    if (era.get('status:56:대길')) {
      uma.attr_buffs.forEach((l) => l.push('+5%[대길]'));
    }
    if (era.get('status:56:중길')) {
      uma.attr_buffs.forEach((l) => l.push('+3%[중길]'));
    }
    if (era.get('status:56:소길')) {
      uma.attr_buffs.forEach((l) => l.push('+1%[소길]'));
    }
    if (era.get('status:56:흉')) {
      uma.attr_buffs.forEach((l) => l.push('-5%[흉]'));
    }
    if (era.get('status:56:안정')) {
      uma.attr_buffs.forEach((l) => l.push('+5%[안정]'));
    }
  }
};
