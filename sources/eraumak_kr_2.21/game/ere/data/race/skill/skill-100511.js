const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100511,
  '꽃봉오리, 피어날 때',
  '레이스 중반 코너에서 경합할 경우, 종반이면서 최종 코너 절반 이후에 좋은 위치에 있으면 가속력이 상승한다',
  10051,
  1,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.corner !== 0,
    () => true,
  ],
  [
    (args) =>
      (args.phase >= 2 &&
        args.is_finalcorner_laterhalf === 1 &&
        args.order >= 3 &&
        args.order_rate <= 40) ||
      (args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner === 0 &&
        args.order >= 3 &&
        args.order_rate <= 40),
    () => false,
  ],
  [4, 0],
  [500, 0],
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
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.accel],
);
