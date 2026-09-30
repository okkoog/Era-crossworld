const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { distance_enum, ground_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:육성턴수합산`) > 96
    ) {
      return [
        {
          color: uma.color,
          content: '연말의 나캬아마, 벚꽃이 만개합니다! 아리마 기념! 영광의 무대 중앙에 서 있는 이는——',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: '!!!',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status(show_train_buff) {
    const ret_list = [];
    if (show_train_buff) {
      const { gad, dad } = new UraraEduMarks();
      if (gad + dad > 0) {
        ret_list.push({
          color: get_chara_color(52),
          content: `메아리 (${gad + dad})`,
          title:
            `???「서로 이해한다면, 현실에서도 공명할 수 있겠지.」레이스 참가 시:` +
            [
              gad ? `잔디 적성 ${gad}단계 상승` : '',
              dad ? `중&장거리 적성 ${dad}단계 상승` : '',
            ]
              .filter((e) => e)
              .join(','),
        });
      }
    }
    return ret_list;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:52:0', '트레이너');
    }
  }

  set_my_name() {}

  set_pseudo_uma(uma) {
    const { dad, fans, gad, sbuff } = new UraraEduMarks(),
      attr_buff = Math.min(Math.floor(fans / 500), 200 * (1 + sbuff));
    if (attr_buff) {
      uma.attr_buffs.forEach((l) => l.push(`+${attr_buff}[팬들의 지지]`));
    }
    const info = race_infos[era.get('flag:현재레이스')];
    uma.adapt_ground_list[ground_enum.grass] = Math.min(
      uma.adapt_ground_list[ground_enum.grass] + gad,
      7,
    );
    if (gad && info.ground === ground_enum.grass) {
      uma.ground_buffs.push(`+${gad}[메아리 (${gad})]`);
    }
    uma.adapt_distance_list[distance_enum.long] = Math.min(
      uma.adapt_distance_list[distance_enum.long] + dad,
      7,
    );
    uma.adapt_distance_list[distance_enum.medium] = Math.min(
      uma.adapt_distance_list[distance_enum.medium] + dad,
      7,
    );
    if (
      dad &&
      (info.distance === distance_enum.long ||
        info.distance === distance_enum.medium)
    ) {
      uma.dis_buffs.push(`+${dad}[메아리 (${dad})]`);
    }
  }
};
