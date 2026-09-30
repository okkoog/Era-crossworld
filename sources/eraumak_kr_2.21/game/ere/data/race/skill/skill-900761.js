const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900761,
  '꽃피는, 세계',
  '레이스 중간 지점에서 중위권 그룹에 있으면 속도가 아주 조금 상승하며, 장거리 레이스라면 효과 시간이 증가하고 추가로 지구력을 다소 회복한다',
  90076,
  1,
  16,
  180,
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
  [3.6, 3],
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
    [0.05, 0.035, 0],
    [0.05, 0, 0],
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
  [7, 7],
  1,
  200,
  false,
  true,
  [5],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
