const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110441,
  'Do!sirak-magic☆',
  '레이스 후반에 전방에서 추월하려고 하면 다소 앞으로 나가며, 단거리나 마일 레이스라면 그 후 최종 코너에서 추월했을 때 속도가 약간 상승한다',
  11044,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase >= 1 && args.slope === 2 && args.order_rate >= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.motivation >= 4,
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
      UmaSkill.ability_type_enum.HpRate,
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
    [0.35, -0.02, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  true,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.hpRate,
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.targetSpeed,
  ],
);
