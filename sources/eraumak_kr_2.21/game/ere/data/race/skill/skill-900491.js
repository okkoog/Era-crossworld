const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900491,
  '벼랑 끝에서 광기를 비웃어라',
  '최종 코너 이후에 추월하려고 하는 경우 남은 거리가 400m 이하일 때 좋은 위치에 있으면 속도가 약간 상승하며, 인기가 낮으면 다소 상승한다',
  90049,
  1,
  16,
  180,
  [
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
  ],
  [
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity >= 4,
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity < 4,
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
