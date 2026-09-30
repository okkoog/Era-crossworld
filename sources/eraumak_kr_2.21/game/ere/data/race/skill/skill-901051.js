const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901051,
  '애드・아스트라',
  '레이스 중간 부근에서 중위권 그룹에 있으면 속도가 약간 상승하며, 중거리 레이스에서 스킬을 7회 이상 발동했다면 다소 상승한다',
  90105,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3 &&
      args.activate_count_all >= 7,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [3, 3],
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
  [4],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
