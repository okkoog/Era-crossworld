const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  107701111,
  '잔디 위의 주인공',
  '파워와 스피드가 다소 상승하며 「양호」 상태인 경기장이라면 많이 상승한다',
  10770111,
  1,
  3,
  508,
  [() => true, () => true],
  [
    (args) => args.ground_condition === 1 && args.ground_type === 1,
    (args) => args.ground_condition !== 1 && args.ground_type === 1,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Power,
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Power,
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.no,
    ],
  ],
  [
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [80, 80, 0],
    [40, 40, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  0,
  false,
  false,
  [0],
  [UmaSkill.ability_tag_enum.speed, UmaSkill.ability_tag_enum.power],
);
