const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100331,
  '디오스쿠로이의 유성',
  '최종 직선일 때 선두로부터 거리가 벌어져 있으면 별에 이끌리는 것처럼 속도가 상승한다. 최후방 부근이라면 많이 상승한다',
  10033,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.distance_diff_top >= 5 &&
      args.order_rate < 80,
    (args) =>
      args.is_last_straight === 1 &&
      args.distance_diff_top >= 5 &&
      args.order_rate >= 80,
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
    [0.45, 0, 0],
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
