const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  113301211,
  '창세기의 한 페이지',
  '2000m~2500m 레이스에서, 종반이 시작될 때 일찍 추월하려고 할 때 또는 종반이 시작될 때 일찍 가속력이 상승한다',
  11330121,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.course_distance >= 2000 &&
        args.course_distance <= 2500 &&
        args.is_overtake === 1 &&
        args.phase_firstquarter === 2) ||
      (args.running_style === 2 &&
        args.course_distance >= 2000 &&
        args.course_distance <= 2500 &&
        args.phase_firstquarter_random === 2),
    () => false,
  ],
  [1.2, 0],
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
  1,
  0,
  false,
  false,
  [7],
  [UmaSkill.ability_tag_enum.accel],
);
