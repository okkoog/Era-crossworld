const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100781,
  '빛나는 바람',
  '레이스 전반에 대기하고, 최종 코너 후반에 전방이라면 오랫동안 가속력이 계속해서 아주 조금 상승하며, 2등이라면 효과가 상승한다',
  10078,
  1,
  18,
  340,
  [
    (args) => args.distance_rate >= 50 && args.order_rate_out20_continue === 1,
    (args) => args.distance_rate >= 50 && args.order_rate_out20_continue === 1,
  ],
  [
    (args) =>
      args.is_finalcorner_laterhalf === 1 &&
      args.distance_diff_rate <= 50 &&
      args.order === 2,
    (args) =>
      args.is_finalcorner_laterhalf === 1 && args.distance_diff_rate <= 50,
  ],
  [8, 8],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.2, 0, 0],
    [0.1, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.accel],
);
