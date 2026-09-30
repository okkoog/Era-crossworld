const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900421,
  "『I'm possible』",
  '남은 거리 200m 지점에서 선두가 아닐 때 선두로부터 4마신 이내라면 속도가 약간 상승하며 2마신 이내면 다소 상승한다',
  90042,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.distance_diff_top <= 5 &&
      args.order >= 2,
    (args) =>
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.distance_diff_top <= 10 &&
      args.order >= 2,
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
    [0.25, 0, 0],
    [0.15, 0, 0],
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
