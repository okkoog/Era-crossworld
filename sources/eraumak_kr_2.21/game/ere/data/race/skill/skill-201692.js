const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201692,
  '조용한 호흡',
  '레이스 중반이 다가올 때 중위권 그룹 이후에 있으면 지구력을 약간 회복한다',
  20169,
  1,
  8,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate >= 40,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
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
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
  180,
  false,
  false,
  [8],
  [UmaSkill.ability_tag_enum.hpRate],
);
