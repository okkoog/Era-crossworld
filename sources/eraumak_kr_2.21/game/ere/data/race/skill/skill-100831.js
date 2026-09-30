const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100831,
  'Mission: Triumph',
  '레이스 중간 부근 이후 직선에서 중위권 그룹에 있으면 속도가 상승하며 추가로 그곳이 내리막이라면 계속해서 상승한다',
  10083,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.slope === 2 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
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
