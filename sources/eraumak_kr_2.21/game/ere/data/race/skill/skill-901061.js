const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901061,
  'Bang☆전 미라클!',
  '최종 코너 후반에 중위권 그룹에 있으면 속도가 계속해서 아주 조금 상승하며, 장거리 레이스에서 인기가 낮을 경우 계속해서 다소 상승한다',
  90106,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.popularity >= 4,
    (args) =>
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.is_finalcorner_laterhalf === 1,
  ],
  [3.6, 3.6],
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
    [0.05, 0, 0],
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
  [5],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
