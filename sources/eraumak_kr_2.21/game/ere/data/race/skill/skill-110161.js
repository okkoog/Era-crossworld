const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110161,
  '회색 임계점',
  '종반 이후의 최종 코너 후반에 선두 그룹에 있으면 속도가 상승하며, 장거리 레이스에서 중반에 경합을 했을 경우에는 아주 많이 상승한다',
  11016,
  1,
  18,
  340,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 40,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 40,
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
    [0.55, 0, 0],
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
  [5],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
