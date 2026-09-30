const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100881,
  'Reversal Illusion',
  '최종 코너에서 중위권 그룹에 있는 경우 남은 거리 400m 이하부터 속도가 상승하며, 중거리 레이스에서 중반에 추월하면 많이 상승한다',
  10088,
  1,
  18,
  340,
  [
    (args) =>
      args.change_order_up_middle >= 1 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 70 &&
      args.order_rate >= 40,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 70 &&
      args.order_rate >= 40,
  ],
  [
    (args) => args.distance_type === 3 && args.remain_distance <= 400,
    (args) => args.remain_distance <= 400,
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
    [0.45, 0, 0],
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
  [4],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
