const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { distance_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return 0.1 * era.get('status:3:다리부상');
  }

  get_maxbase_buff() {
    return -200 * era.get('status:3:다리부상');
  }

  get_pressure_buff() {
    return 0.1 * era.get('status:3:다리부상');
  }

  get_race_cloth() {
    if (
      !era.get('status:3:다리부상') ||
      era.get('cflag:3:육성턴수합산') !==
        race_infos[race_enum.arim_kin].date + 95 ||
      era.get('flag:현재레이스') !== race_enum.arim_kin
    ) {
      return super.get_race_cloth();
    }
    return ['帝王2'];
  }

  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(13, 1.1)];
      case race_enum.tenn_sho:
        if (era.get('cflag:3:육성턴수합산') > 96) {
          return [64, 65].map((e) => new LegendUmaSelector(e, 1.05));
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:3:육성턴수합산') > 96) {
          return [
            new LegendUmaSelector(23, 1.1),
            ...[35, 60, 64].map((e) => new LegendUmaSelector(e, 1.05)),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.arim_kin && era.get(`status:${this.id}:다리부상`)) {
      return [
        uma.get_colored_name(),
        { color: uma.color, content: ', 기적의 부활!' },
      ];
    } else if (
      era.get(`cflag:${this.id}:육성턴수합산`) > 96 &&
      race_infos[race_id]?.distance === distance_enum.long
    ) {
      return [
        {
          color: uma.color,
          content: '한계를 넘어, 세상의 끝까지——',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 또 한번의 승리!',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status() {
    if (era.get('status:3:다리부상')) {
      return [
        {
          color: buff_colors[3],
          content: '다리부상!',
          fontWeight: 'bold',
          title:
            '심각한 다리 부상, 치료 불가, 세 여신이라 해도. 트레이닝 보너스 -20%, 체력/기력 상한 -200, 소모 +10%, 스트레스 획득 +10%, 목표 대회 1착 외 -5 명성, 2착 이하 +25% 스트레스, -10 명성',
        },
      ];
    }
    return [];
  }

  get_train_buff() {
    return -20 * era.get('status:3:다리부상');
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get('relation:3:0') > 375) {
        era.set('callname:3:0', '또~레~나~');
      } else {
        era.set('callname:3:0', '트레이너');
      }
    }
  }
};
