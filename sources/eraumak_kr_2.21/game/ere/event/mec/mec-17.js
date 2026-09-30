const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  init_love() {
    era.set('love:17', 40 + era.get('flag:우마무스메초기애정도'));
  }

  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
      case race_enum.hoch_sho:
      case race_enum.sats_sho:
        return [new LegendUmaSelector(65, 1.05)];
      case race_enum.toky_yus:
        return [
          new LegendUmaSelector(57, 1.05),
          new LegendUmaSelector(104, 1.05),
        ];
      case race_enum.arim_kin:
        if (era.get(`cflag:${this.id}:육성턴수합산`) < 96) {
          return [
            new LegendUmaSelector(57, 1.05),
            new LegendUmaSelector(104, 1.05),
          ];
        }
        return [
          new LegendUmaFilter(
            '미호 신잔',
            1.05,
            (e) =>
              e.adapt_ground[0] >= 6 &&
              e.adapt_distance[3] >= 6 &&
              e.adapt_style[2] >= 6,
          ).set_image('麦昆_半身'),
        ];
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(57, 1.05)];
      case race_enum.takz_kin:
        if (era.get('cflag:17:육성턴수합산') >= 96) {
          return [new LegendUmaSelector(70, 1.05)];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:17:육성턴수합산') >= 96) {
          return [
            new LegendUmaFilter(
              '러닝 데이나',
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 5 &&
                e.adapt_style[3] >= 6,
            ).set_image('老爹_半身'),
            new LegendUmaSelector(78, 1.05),
          ];
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:17:육성턴수합산') >= 96) {
          return [
            new LegendUmaFilter(
              '러닝 데이나',
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 5 &&
                e.adapt_style[3] >= 6,
            ).set_image('老爹_半身'),
            new LegendUmaSelector(6, 1.05),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_love_buff() {
    return 20 * era.get('status:17:미련');
  }

  get_love_limit() {
    if (era.get('status:17:심술') > 0) {
      return 40;
    }
    return super.get_love_limit();
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.kiku_sho) {
      return [
        {
          color: uma.color,
          content: ' 위대한 붉은 꽃이 교토의 먹구름 아래 만개했습니다!',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_relation_buff() {
    return -20 * era.get('status:17:심술');
  }

  get_status() {
    const ret_list = [];
    era.get('status:17:자멸') &&
      ret_list.push({
        color: color_17[0],
        content: '자멸',
        title:
          '운명에 대한 저항으로 인해 자멸 중; 트레이닝 성공률 -5%, 트레이닝 효과 -8%, 레이스 참가 시 능력치 -5%',
      });
    era.get('status:17:미련') &&
      ret_list.push({
        color: color_17[0],
        content: '미련',
        title: '당신을 향한 이 거센 마음을 더 이상 숨기거나 억누를 수 없다; 초기 호감도 +40, 호감도 획득량 +20%',
      });
    era.get('status:17:황제') &&
      ret_list.push({
        color: color_17[1],
        content: '황제',
        title:
          '이곳에 군림하니, 무릎 꿇어라; 트레이닝 성공률 +5%, 트레이닝 효과 +4%, 레이스 참가 시 능력치 +2%, 7턴마다 이 형태로 활동할 때마다 [정신손상] 1단계가 쌓인다',      });
    era.get('status:17:심술') &&
      ret_list.push({
        color: color_17[1],
        content: '심술',
        title: '짐작할 필요 없이, 그저 복종하라; 호감도 획득 -20%, 호감도 상한선 40',
      });
    let debuff_count = era.get('status:17:정신손상');
    if (debuff_count) {
      ret_list.push({
        color: buff_colors[0],
        content: `정신손상${debuff_count === 1 ? '' : `(${debuff_count})`}`,
        title: `루나 훈련 효과 -${debuff_count * 5}%, 황제 훈련 효과 + ${debuff_count * 3}%; [정신손상] 6중첩 시 [신경쇠약] 획득`,
      });
    }
    era.get('status:17:신경쇠약') &&
      ret_list.push({
        color: buff_colors[3],
        content: '신경쇠약!',
        fontWeight: 'bold',
        title: '이미 되돌릴 수 없다…… 루나 출주 시 능력치-8%',
      });
    return ret_list;
  }

  get_success_rate_buff() {
    return 5 * (era.get('status:17:황제') - era.get('status:17:자멸'));
  }

  get_train_buff() {
    let train_buff = era.get('status:17:정신손상');
    if (train_buff) {
      if (new LunaEduMarks().emperor) {
        train_buff *= 3;
      } else {
        train_buff *= -5;
      }
    }
    train_buff += 4 * era.get('status:17:황제') - 8 * era.get('status:17:자멸');
    return train_buff;
  }

  set_pseudo_uma(uma) {
    const emperor = era.get('status:17:황제'),
      self_destruct = era.get('status:17:자멸'),
      debuff = era.get('status:17:신경쇠약') * !new LunaEduMarks().emperor;
    if (emperor) {
      uma.attr_buffs.forEach((l) => l.push('+2%[황제]'));
    }
    if (self_destruct) {
      uma.attr_buffs.forEach((l) => l.push('-5%[자멸]'));
    }
    if (debuff) {
      uma.attr_buffs.forEach((l) =>
        l.push(`-${8 * debuff}%[신경쇠약(${debuff})]`),
      );
    }
  }
};
