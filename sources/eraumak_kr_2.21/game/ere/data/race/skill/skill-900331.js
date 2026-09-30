const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900331,
  '디오스쿠로이의 유성',
  '최종 직선일 때 선두로부터 거리가 벌어져 있으면 속도가 약간 상승한다. 최후방 부근이라면 다소 상승한다',
  90033,
  1,
  16,
  180,
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
    [0.15, 0, 0],
    [0.25, 0, 0],
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
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
