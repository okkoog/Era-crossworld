const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  910321,
  '여름 하늘 헐레이션',
  '후반 코너에서 좋은 위치에 있으면 잠시 동안 속도가 다소 상승하며, 나카야마 경기장이라면 스피드 능력에 따라 가속력도 상승한다',
  91032,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.track_id === 10005,
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
  ],
  [2.4, 2.4],
  [500, 500],
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
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
  ],
  [
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.MultiplyBaseSpeedForAcc,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.25, 0.025, 0],
    [0.25, 0, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
