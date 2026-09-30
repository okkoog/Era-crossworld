const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101131,
  '홉 스텝・겟츄♡',
  '레이스 전반 코너에서 좋은 위치에 있으면 속도가 상승하고, 2200m 레이스라면 계속해서 상승한다',
  10113,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.distance_rate <= 50 &&
      args.corner !== 0 &&
      args.course_distance === 2200,
    (args) =>
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.distance_rate <= 50 &&
      args.corner !== 0,
  ],
  [6, 5],
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
    [0.35, 0, 0],
    [0.35, 0, 0],
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
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
