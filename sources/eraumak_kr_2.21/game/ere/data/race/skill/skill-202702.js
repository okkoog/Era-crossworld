const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202702,
  '탐구심',
  '스피드가 더욱 높으면 스피드가 약간 상승하고, 지능도 더욱 높다면 스피드가 다소 상승한다',
  20270,
  1,
  0,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 3 &&
      args.base_speed >= 1200 &&
      args.base_wiz >= 1200,
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 3 &&
      args.base_speed >= 1200 &&
      args.base_wiz < 1200,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.no,
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
    [40, 0, 0],
    [20, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  0,
  120,
  false,
  false,
  [4, 7],
  [UmaSkill.ability_tag_enum.speed],
);
