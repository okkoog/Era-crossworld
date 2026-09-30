const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101311,
  '¡Qué alegría!',
  '레이스 중간 지점에서 중위권 그룹 이후에 있으면 짧은 시간 동안 앞으로 나가며, 단거리나 마일 레이스라면 그 후 최종반에 라스트 스퍼트가 한창일 때 짧은 시간 동안 많이 앞으로 나간다',
  10131,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 40,
    (args) =>
      (args.distance_type === 1 &&
        args.is_activate_other_skill_detail === 1 &&
        args.phase === 3 &&
        args.is_lastspurt === 1) ||
      (args.distance_type === 2 &&
        args.is_activate_other_skill_detail === 1 &&
        args.phase === 3 &&
        args.is_lastspurt === 1),
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
    [0.35, 0, 0],
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
  [2, 3],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
