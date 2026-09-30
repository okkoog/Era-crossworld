const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900551,
  '만색찬란☆마블러스★세계',
  '레이스 중반 부근에 중위권 그룹에 있을 때 가까이에 우마무스메가 있으면 속도가 약간 상승하며, 시야 내에 우마무스메가 4명 이상 있으면 효과가 증가한다',
  90055,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 40 &&
      args.order_rate <= 80 &&
      args.order_rate >= 50 &&
      args.near_count >= 1 &&
      args.visiblehorse >= 4,
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 40 &&
      args.order_rate <= 80 &&
      args.order_rate >= 50 &&
      args.near_count >= 1,
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
    [0.2, 0, 0],
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
