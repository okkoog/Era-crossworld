const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  109401111,
  '맹습의 송곳니',
  '레이스 종반이 다가왔을 때 중위권 그룹 이후에 있으면 한동안 속도가 상승하며, 파워가 더욱 높으면 효과가 증가한다',
  10940111,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 3 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 40 &&
      args.base_power >= 1200,
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 3 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 40,
  ],
  [4, 4],
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
    [0.4, 0, 0],
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
  1,
  0,
  false,
  false,
  [4, 8],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
