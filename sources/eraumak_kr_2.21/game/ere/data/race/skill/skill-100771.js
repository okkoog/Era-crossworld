const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100771,
  'Road to Glory',
  '레이스 종반 직전에 좋은 위치에 있는 경우 남은 거리 400m 지점에서 속도가 많이 상승하며, 장거리에서 스킬 발동 시 선두이거나 선두로부터 1마신 이내에 있으면 아주 많이 상승한다',
  10077,
  1,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 40,
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 40,
  ],
  [
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.distance_diff_top_float <= 25 &&
      args.distance_type === 4,
    (args) => args.remain_distance <= 401 && args.remain_distance >= 399,
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
    [0.55, 0, 0],
    [0.45, 0, 0],
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
  [5],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
