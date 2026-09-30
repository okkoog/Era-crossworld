const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101141,
  'To Our Vista',
  '레이스 중간 지점에서 중위권 그룹 이후에 있으면 다소 앞으로 나가고, 마일이나 중거리 레이스라면 많이 앞으로 나간다',
  10114,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_rate >= 50 &&
        args.distance_rate <= 51 &&
        args.order_rate >= 40 &&
        args.distance_type === 2) ||
      (args.distance_rate >= 50 &&
        args.distance_rate <= 51 &&
        args.order_rate >= 40 &&
        args.distance_type === 3),
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 40,
  ],
  [5, 5],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.45, 0, 0],
    [0.25, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [3, 4],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
