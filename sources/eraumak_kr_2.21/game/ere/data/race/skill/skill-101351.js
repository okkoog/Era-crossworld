const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101351,
  '황금을 찾아서',
  '레이스 후반에 속도가 계속해서 다소 상승하고, 2000m 이상 레이스라면 그 후 라스트 스퍼트가 한창일 때 짧은 시간 동안 가속력이 다소 상승한다',
  10135,
  1,
  18,
  340,
  [(args) => args.running_style === 3 || args.running_style === 4, () => true],
  [
    (args) => args.distance_rate >= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.course_distance >= 2000 &&
      args.is_lastspurt === 1,
  ],
  [6, 2],
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
    [0.25, 0, 0],
    [0.3, 0, 0],
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
  [1, 3],
  [30, 30],
  0,
  0,
  true,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
