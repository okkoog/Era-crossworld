const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  104402111,
  '실피드・마기아',
  '레이스 종반이 시작될 때 가속력이 상승하며, 2200m 레이스라면 지구력을 다소 사용해서 종반이 시작될 때 일찍 많이 상승한다',
  10440211,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.course_distance === 2200 &&
      args.running_style === 4 &&
      args.phase_firstquarter_random === 2,
    (args) =>
      args.course_distance !== 2200 &&
      args.running_style === 4 &&
      args.phase_firsthalf_random === 2,
  ],
  [1.2, 1.2],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.5, -0.02, 0],
    [0.4, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [60, 0],
  1,
  0,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.accel],
);
