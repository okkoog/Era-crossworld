const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110061,
  '크리스마스 이브의 미라클 런!',
  '스킬로 지구력을 3회 이상 회복하면 레이스 후반에 승리를 향해 호흡을 가다듬고 힘차게 앞으로 달려 나간다',
  11006,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.activate_count_heal >= 3 && args.distance_rate >= 50,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.HpRate,
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
    [0.25, 0.3, 0.035],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [1, 3],
  [30, 30],
  0,
  0,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.hpRate,
    UmaSkill.ability_tag_enum.targetSpeed,
    UmaSkill.ability_tag_enum.accel,
  ],
);
