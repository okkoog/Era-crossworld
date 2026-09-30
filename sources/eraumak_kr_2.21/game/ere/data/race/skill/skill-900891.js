const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900891,
  'Celeste Oath',
  '레이스 중간 부근에서 전방에 있으면 속도가 약간 상승하고 추가로 지구력을 아주 약간 회복하며, 2400m 이상 레이스라면 회복량이 증가한다',
  90089,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.course_distance >= 2400,
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
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
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.HpRate,
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
    [0.15, 0.005, 0],
    [0.15, 0.0035, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
