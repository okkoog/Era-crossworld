const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110721,
  '강용과단, 열화의 칼',
  '레이스 중간 부근에서 경합하면 레이스 후반의 어딘가에서 속도가 상승하며, 스킬 발동 시 레인 안쪽에 있으면 효과가 증가한다',
  11072,
  1,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
  ],
  [
    (args) => args.distance_rate_after_random === 50 && args.lane_type === 0,
    (args) => args.distance_rate_after_random === 50,
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
    [0.35, 0, 0],
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
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
