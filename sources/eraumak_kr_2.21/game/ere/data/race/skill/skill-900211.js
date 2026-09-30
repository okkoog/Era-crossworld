const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900211,
  '하얀 번개, 보여 주꾸마!',
  '레이스 후반 직선에서 좋은 위치에 있거나 중위권 그룹에서 앞을 노리면 약간 달려 나간다',
  90021,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_rate >= 50 &&
        args.corner === 0 &&
        args.order_rate >= 70 &&
        args.order_rate <= 75 &&
        args.is_overtake === 1) ||
      (args.distance_rate >= 50 &&
        args.corner === 0 &&
        args.order_rate <= 30 &&
        args.order_rate >= 20),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.no,
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
    [0.15, 0.05, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.no,
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
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
