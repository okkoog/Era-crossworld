const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202972,
  '좋은 기회를 붙잡고서',
  '레이스 종반이 시작될 때 일찍 중위권 그룹 이후에 있으면 가속력이 약간 상승한다',
  20297,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.distance_type === 4 &&
      args.phase_firstquarter_random === 2 &&
      args.order_rate >= 40,
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
    [0.2, 0, 0],
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
  [20, 0],
  1,
  160,
  false,
  false,
  [5, 9],
  [UmaSkill.ability_tag_enum.accel],
);
