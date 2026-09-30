const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110531,
  '오의・늘 여름 버닝!!',
  '남은 거리가 200m일 때 전방에 있으면 속도가 다소 상승하며, 단거리 레이스에서 종반 이후에 추월했을 경우에는 많이 상승한다',
  11053,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.change_order_up_end_after >= 1,
    (args) =>
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
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
  [60, 0],
  0,
  0,
  false,
  false,
  [2],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
