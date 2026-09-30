const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110151,
  '복을 베푸는 바르카롤',
  '남은 거리가 400m일 때 선두 그룹에 있다면 속도가 상승한다. 그때까지 스킬을 7번 이상 사용했을 경우에는 많이 상승한다',
  11015,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40 &&
      args.activate_count_all >= 7,
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40 &&
      args.activate_count_all <= 6,
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
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
