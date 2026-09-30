const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const { buff_colors } = require('#/data/color-const');
const { race_infos } = require('#/data/race/race-const');

function race_indicator(chara_id) {
  const registered_race = sys_reg_race(chara_id).curr,
    race_delta = registered_race.week - era.get('flag:현재턴수');
  if (registered_race.week < 0) {
    return [];
  }
  if (race_delta > 0) {
    return [
      ' (',
      race_infos[registered_race.race].get_colored_name(),
      '까지 앞으로 ',
      {
        content: race_delta,
        color: buff_colors[3],
      },
      ' 주)',
    ];
  }
  return [
    ' (이번 주 ',
    race_infos[registered_race.race].get_colored_name(),
    ')',
  ];
}

module.exports = race_indicator;
