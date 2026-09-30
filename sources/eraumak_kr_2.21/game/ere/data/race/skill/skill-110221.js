const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110221,
  'Best day ever',
  '종반 이후면서 최종 코너 이후에 좋은 위치에 있으면 속도가 상승하며, 추가로 결승점까지 멀면 최고의 달리기로 가속력이 아주 조금 상승한다',
  11022,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 401 &&
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
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
    [0.35, 0.1, 0],
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
  [1, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
