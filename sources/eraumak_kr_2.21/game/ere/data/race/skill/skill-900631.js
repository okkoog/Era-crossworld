const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900631,
  '정금백련',
  '레이스를 침착하게 진행하면 라스트 스퍼트가 한창일 때 속도가 계속해서 아주 조금 상승한다',
  90063,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.is_lastspurt === 1 &&
      args.phase === 3 &&
      args.temptation_count === 0,
    () => false,
  ],
  [3.6, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
