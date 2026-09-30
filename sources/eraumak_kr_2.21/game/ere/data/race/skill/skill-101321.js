const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101321,
  'Loves Only You♡',
  '종반이 다가오는 어딘가에서 속도가 약간 상승하고, 중거리 레이스라면 트레이너와의 애정에 따라 최대 3배까지 효과가 증가한다',
  10132,
  1,
  18,
  340,
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 3 &&
      args.ground_type === 1,
    () => true,
  ],
  [
    (args) => args.phase_laterhalf_random === 1,
    (args) =>
      args.running_style === 3 &&
      args.ground_type === 1 &&
      args.phase_laterhalf_random === 1,
  ],
  [5, 5],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
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
      UmaSkill.ability_usage_enum.MultiplyLove,
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
    [0.15, 0, 0],
    [0.15, 0, 0],
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
  [0, 8],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
