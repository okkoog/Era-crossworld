const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202392,
  '안간힘',
  '레이스 중반이 시작될 때 지구력을 많이 사용해서 속도가 다소 상승한다',
  20239,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) => args.phase_firsthalf_random === 1 && args.running_style === 1,
    () => false,
  ],
  [2.7, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.HpRate,
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
    [0.25, -0.04, 0],
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
  [1, 0],
  [20, 0],
  1,
  180,
  false,
  false,
  [6],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
