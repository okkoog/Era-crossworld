const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101331,
  'Weaving History',
  '레이스 중간 부근에서 잠시 동안 속도가 다소 상승하고, 중거리나 장거리 레이스라면 효과 시간이 2배가 된다',
  10133,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.ground_type === 1 &&
        args.running_style === 2 &&
        args.distance_rate >= 40 &&
        args.distance_rate <= 41) ||
      (args.distance_type === 4 &&
        args.ground_type === 1 &&
        args.running_style === 2 &&
        args.distance_rate >= 40 &&
        args.distance_rate <= 41),
    (args) =>
      args.ground_type === 1 &&
      args.running_style === 2 &&
      args.distance_rate >= 40 &&
      args.distance_rate <= 41,
  ],
  [8, 4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Genesis,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.25, 2, 0],
    [0.25, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [0, 4, 5, 7],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
