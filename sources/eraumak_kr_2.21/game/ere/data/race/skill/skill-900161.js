const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900161,
  'Shadow Break',
  '최종 코너 이후에 중위권 그룹이며 바깥쪽에서 추월하면 속도가 약간 상승하며 중반 경합을 했을 경우에는 다소 상승한다',
  90016,
  1,
  16,
  180,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order >= 2 &&
      args.order_rate <= 75 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    (args) =>
      args.is_finalcorner === 1 &&
      args.order >= 2 &&
      args.order_rate <= 75 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
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
