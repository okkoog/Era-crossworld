const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  103703211,
  '섬광의 분류',
  '레이스 중반에 지구력을 사용해서 한동안 속도가 많이 상승하며, 도쿄 경기장이라면 지구력을 사용하지 않고 약간 회복한다',
  10370321,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 1 &&
      args.track_id === 10006,
    (args) => args.running_style === 3 && args.phase_random === 1,
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
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.HpRate,
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
    [0.45, 0.015, 0],
    [0.45, -0.03, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [8],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
