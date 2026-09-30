const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110081,
  'Into High Gear!',
  '레이스 중반 이후 내리막에서 중위권 그룹이면 언덕을 내려간 후 잠시 동안 속도가 상승하며 도쿄 경기장이라면 추가로 기어를 올린다',
  11008,
  1,
  18,
  340,
  [
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80 &&
      args.track_id === 10006,
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
  ],
  [
    (args) => args.slope === 0 || args.slope === 1,
    (args) => args.slope === 0 || args.slope === 1,
  ],
  [5, 4],
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
