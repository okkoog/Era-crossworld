const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  203822,
  '내면의 짐승',
  '종반 이후의 최종 직선에서 약간 앞으로 나가고, 레이스 종반에 돌입할 때까지 중위권 그룹 이후에서 계속 대기하면 다소 앞으로 나간다',
  20382,
  1,
  16,
  217,
  [
    (args) => args.distance_rate >= 66 && args.order_rate_out40_continue === 1,
    () => true,
  ],
  [
    (args) =>
      args.running_style === 3 &&
      args.distance_type === 3 &&
      args.phase >= 2 &&
      args.is_last_straight === 1,
    (args) =>
      args.running_style === 3 &&
      args.distance_type === 3 &&
      args.phase >= 2 &&
      args.is_last_straight === 1,
  ],
  [2.4, 2.4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
  [3, 0],
  [30, 0],
  1,
  180,
  false,
  false,
  [4, 8],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
