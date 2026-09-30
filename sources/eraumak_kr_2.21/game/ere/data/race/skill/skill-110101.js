const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110101,
  'Joyful Voyage!',
  '남은 거리 200m 지점에서 전방에 있으면 속도가 상승하며, 추가로 선두 우마무스메와 가까울 경우 파워풀하게 약간 앞으로 나간다',
  11010,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_diff_top <= 5 &&
      args.order >= 2 &&
      args.order_rate <= 40 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
    (args) =>
      args.order >= 2 &&
      args.order_rate <= 40 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
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
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.35, 0.15, 0],
    [0.35, 0, 0],
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
  [],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.targetSpeed,
  ],
);
