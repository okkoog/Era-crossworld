const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900371,
  'Schwarzes Schwert',
  '냉정하게 레이스를 운영해 최종 직선에서 3등 이후라면 속도가 약간 상승하며, 중위권 그룹 위치를 유지하고 있으면 다소 상승한다',
  90037,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.temptation_count === 0 &&
      args.order >= 3 &&
      args.is_last_straight === 1 &&
      args.order_rate_in80_continue === 1 &&
      args.order_rate_out40_continue === 1,
    (args) =>
      args.temptation_count === 0 &&
      args.order >= 3 &&
      args.is_last_straight === 1,
  ],
  [3, 3],
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
    [0.25, 0, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
