const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101161,
  '열화의 세례',
  '레이스 전반 코너에서 전방에 있으면 속도가 다소 상승하고, 그 후 종반의 최종 직선에서 선두 그룹에 있으면 짧은 시간 동안 속도가 많이 상승한다',
  10116,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 && args.corner !== 0 && args.order_rate <= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.order_rate <= 40 &&
      args.phase >= 2 &&
      args.is_last_straight === 1,
  ],
  [5, 3],
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
  true,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
