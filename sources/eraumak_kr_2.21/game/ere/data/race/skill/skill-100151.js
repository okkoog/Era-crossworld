const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100151,
  '빅토리아에게 바치는 무도',
  '최종 코너 이후에 전방에서 앞 혹은 뒤의 우마무스메와 거리가 가까우면 왕에 걸맞은 광채로 속도가 상승한다',
  10015,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.is_finalcorner === 1 &&
        args.bashin_diff_behind <= 1 &&
        args.order <= 4) ||
      (args.is_finalcorner === 1 &&
        args.bashin_diff_infront <= 1 &&
        args.order <= 4),
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
    [0.35, 0, 0],
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
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
