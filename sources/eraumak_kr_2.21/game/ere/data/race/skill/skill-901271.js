const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901271,
  '대상 포착! 정의 수행!',
  '레이스 후반의 직선에서 중위권 그룹에 있으면 속도가 약간 상승하고, 장거리 레이스라면 효과가 증가한다',
  90127,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner === 0 &&
      args.order_rate <= 70 &&
      args.order_rate >= 30 &&
      args.distance_type === 4,
    (args) =>
      args.distance_rate >= 50 &&
      args.corner === 0 &&
      args.order_rate <= 70 &&
      args.order_rate >= 30,
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
  [5],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
