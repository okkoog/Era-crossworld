const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100901,
  "Queen's Rebirth",
  '레이스 전반 코너에서 전방이라면 짧은 시간 동안 속도가 상승하고, 마일이나 중거리 레이스라면 그 후 종반 이후의 최종 직선에서 따라잡히려 할 때 잠시 동안 다소 앞으로 나간다',
  10090,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.ground_type === 1,
    (args) =>
      (args.is_activate_other_skill_detail === 1 &&
        args.phase >= 2 &&
        args.is_last_straight === 1 &&
        args.overtake_target_time >= 1 &&
        args.distance_type === 2) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.phase >= 2 &&
        args.is_last_straight === 1 &&
        args.overtake_target_time >= 1 &&
        args.distance_type === 3),
  ],
  [3, 4],
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
    [0.35, 0, 0],
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
  [1, 3],
  [30, 30],
  0,
  0,
  true,
  false,
  [0, 3, 4],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.targetSpeed,
  ],
);
