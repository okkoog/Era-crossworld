const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100541,
  '질풍폭주 페가수스 대시!',
  '레이스 후반에 후방에서 추월한 경우, 남은 거리가 150m 이하일 때 전방에 있으면 잠시 동안 속도가 많이 상승한다',
  10054,
  1,
  18,
  340,
  [
    (args) =>
      args.order_rate >= 45 &&
      args.distance_rate >= 50 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.remain_distance <= 150 && args.order_rate <= 50, () => false],
  [4, 0],
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
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
