const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101191,
  '『그럼, 좋은 여행을』',
  '종반 돌입 시 후방에 있을 때 결승점까지의 거리가 멀면 짧은 시간 동안 다소 앞으로 나가고, 나카야마나 한신 경기장의 중거리나 장거리 레이스라면 그 후 직선에서 짧은 시간 동안 많이 앞으로 나간다',
  10119,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.order_rate >= 50 &&
      args.remain_distance >= 500,
    (args) =>
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10005 &&
        args.distance_type === 3) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10005 &&
        args.distance_type === 4) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10009 &&
        args.distance_type === 3) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10009 &&
        args.distance_type === 4),
  ],
  [3, 3],
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
    [0.25, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  true,
  false,
  [4, 5],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
