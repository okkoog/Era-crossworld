const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900961,
  '지소기적, 백전불태',
  '레이스 후반의 제3 코너에서 중위권 그룹에 있으면 잠시 동안 속도가 약간 상승하고, 그 후 종반 이후의 최종 직선에서 추월하려고 하면 속도가 아주 약간 상승한다',
  90096,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.corner === 3 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.distance_rate >= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.is_overtake === 1,
  ],
  [2.4, 3],
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
    [0.15, 0, 0],
    [0.035, 0, 0],
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
  true,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
