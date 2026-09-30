const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110301,
  'Drain for rose',
  '레이스 중반에 좋은 위치에 있으면 전방의 우마무스메에게서 지구력을 흡수하고 자신의 속도가 다소 상승한다',
  11030,
  1,
  10,
  340,
  [() => true, () => true],
  [
    (args) => args.phase === 1 && args.order >= 2 && args.order_rate <= 50,
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
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.055, -0.005, 0.25],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.SelfInfront,
      UmaSkill.target_type_enum.Self,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 18, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
