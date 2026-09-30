const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  107102111,
  '아름다운 인광',
  '레이스 종반이 다가올 때 지구력을 회복하고 속도가 약간 상승한다',
  10710211,
  1,
  11,
  633,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.phase_laterhalf_random === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.055, 0.15, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [60, 0],
  1,
  0,
  false,
  false,
  [7],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
