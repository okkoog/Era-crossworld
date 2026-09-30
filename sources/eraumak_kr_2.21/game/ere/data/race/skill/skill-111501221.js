const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  111501221,
  '…경외하라, 그리고 꿇어라',
  '레이스 중반이 시작될 때 중위권 그룹 이후에 있으면 속도가 많이 상승하고 지구력을 다소 회복한다',
  11150122,
  1,
  19,
  758,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase_firsthalf_random === 1 &&
        args.order_rate >= 40) ||
      (args.distance_type === 4 &&
        args.phase_firsthalf_random === 1 &&
        args.order_rate >= 40),
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
    [0.45, 0.035, 0],
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
  [1, 2],
  [30, 30],
  1,
  0,
  false,
  false,
  [4, 5],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
