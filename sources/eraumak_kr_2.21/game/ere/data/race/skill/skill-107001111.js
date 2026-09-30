const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  107001111,
  '흔들림 없는 애스터',
  '종반 이후의 최종 직선에서 좋은 위치에 있으면 속도가 많이 상승한다',
  10700111,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 60,
    () => false,
  ],
  [3, 0],
  [500, 0],
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
    [0.45, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
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
  [4],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
