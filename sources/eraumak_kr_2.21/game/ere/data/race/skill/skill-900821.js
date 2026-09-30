const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900821,
  'Shining Runway',
  '최종 코너에서 좋은 위치에 있으면 잠시 동안 속도가 약간 상승한다. 마일 레이스라면 효과 시간이 증가한다',
  90082,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.order_rate >= 20,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.order_rate >= 20,
  ],
  [3, 2.4],
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
  [3],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
