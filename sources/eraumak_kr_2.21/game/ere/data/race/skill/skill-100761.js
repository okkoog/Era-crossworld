const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100761,
  '꽃피는, 세계',
  '레이스 중간 지점에서 중위권 그룹에 있으면 속도가 다소 상승하며, 장거리 레이스라면 효과 시간이 증가하고 추가로 지구력을 많이 회복한다',
  10076,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 30 &&
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
    [0.25, 0.075, 0],
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
  [1, 2],
  [30, 30],
  0,
  0,
  false,
  false,
  [5],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
