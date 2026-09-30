const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100711,
  '일생의 꿈, 찰나의 비상',
  '최종 직선일 때 뒤에 있는 우마무스메와의 거리가 가까우면 그 순간에 지구력을 약간 사용해 잠시 동안 속도가 많이 상승한다',
  10071,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.is_last_straight === 1 && args.bashin_diff_behind <= 1,
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
    [0.45, -0.01, 0],
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
  [1, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
