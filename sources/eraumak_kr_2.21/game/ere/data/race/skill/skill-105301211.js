const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105301211,
  '가죠! 기합은 충분함다!',
  '최종 코너에서 후방에 있으면 속도가 상승하고 가속력이 약간 상승한다',
  10530121,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate >= 50,
    () => false,
  ],
  [1.8, 0],
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
    [0.35, 0.2, 0],
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
  [60, 0],
  1,
  0,
  false,
  false,
  [3],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
