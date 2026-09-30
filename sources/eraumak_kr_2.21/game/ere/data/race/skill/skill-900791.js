const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900791,
  '『후나바시 최강!』',
  '레이스 중반에 전방에서 경합하면 레이스 후반에 잠시 동안 속도가 약간 상승하며, 오이, 가와사키, 후나바시 경기장이라면 계속해서 약간 상승한다',
  90079,
  1,
  16,
  180,
  [
    (args) =>
      args.phase === 1 &&
      args.order_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
    (args) =>
      args.phase === 1 &&
      args.order_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
  ],
  [
    (args) =>
      (args.distance_rate >= 50 && args.track_id === 10101) ||
      (args.distance_rate >= 50 && args.track_id === 10103) ||
      (args.distance_rate >= 50 && args.track_id === 10104),
    (args) => args.distance_rate >= 50,
  ],
  [3.6, 2.4],
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
