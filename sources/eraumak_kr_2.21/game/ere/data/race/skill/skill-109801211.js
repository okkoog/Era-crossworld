const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  109801211,
  '용맥의 파도',
  '파워가 충분히 강하면 스피드가 많이 상승하고 파워가 더욱 충분히 갖춰져 있는 경우는 아주 많이 상승한다',
  10980121,
  1,
  3,
  508,
  [() => true, () => true],
  [
    (args) => args.ground_type === 2 && args.base_power >= 1200,
    (args) =>
      args.ground_type === 2 &&
      args.base_power >= 1000 &&
      args.base_power < 1200,
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
    [100, 0, 0],
    [80, 0, 0],
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
  [60, 0],
  0,
  0,
  false,
  false,
  [1],
  [UmaSkill.ability_tag_enum.speed],
);
