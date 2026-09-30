const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900471,
  '치켜들어라, 내 영혼의 검을!',
  '레이스 종반 남은 거리 400m 지점에서 전방에 있으면 속도가 약간 상승하며, 추가로 GⅠ등 큰 무대에서 인기가 높은 경우 다소 상승한다',
  90047,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40 &&
      args.grade === 100 &&
      args.popularity <= 3,
    (args) =>
      args.phase >= 2 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40,
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
