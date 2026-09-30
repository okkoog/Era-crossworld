const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202412,
  '향상심',
  '레이스 종반 직전에 2위 이후로 대기하며 선두로부터 2마신 이내라면 한동안 속도가 아주 조금 상승한다',
  20241,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.order >= 2 &&
      args.distance_diff_top <= 5 &&
      args.distance_rate >= 60 &&
      args.phase === 1,
    () => false,
  ],
  [4, 0],
  [500, 0],
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
    [0.05, 0, 0],
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
  [1, 0],
  [20, 0],
  1,
  180,
  false,
  false,
  [7],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
