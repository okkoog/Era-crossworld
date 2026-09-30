const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (
      get('cflag:68:육성턴수합산') > 96 &&
      get('flag:현재레이스') === race_enum.takz_kin
    ) {
      return [new LegendUmaSelector(108, 1.1)];
    } else if ( //여기부터 한판 커스텀, 스토리 상 언급되는 사츠키, 일본더비에서 두라멘테 구현
      get('cflag:68:육성턴수합산') < 96 &&
      get('flag:현재레이스') === race_enum.sats_sho
    ) {
      return [new LegendUmaSelector(108, 1.1)];
    } else if ( 
      get('cflag:68:육성턴수합산') < 96 &&
      get('flag:현재레이스') === race_enum.toky_yus
    ) {
      return [new LegendUmaSelector(108, 1.1)];
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      get(`cflag:${this.id}:육성턴수합산`) > 96
    ) {
      return [{ color: uma.color, content: '황혼의 하늘에 울려펴지는 소리! 이것이 거성의 마지막 무대입니다!' }];
    }
    return super.get_race_finish_report(uma, race_id);
  }
};
