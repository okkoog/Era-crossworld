const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  203371,
  '반격',
  '종반의 최종 코너 이후에 있을 때 라이벌 우마무스메가 속도 스킬을 발동하면 한동안 다소 앞으로 나간다',
  20337,
  2,
  17,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 27) ||
      (args.distance_type === 4 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 27) ||
      (args.distance_type === 3 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 22) ||
      (args.distance_type === 4 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 22),
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
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.25, 0, 0],
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
  [60, 0],
  1,
  180,
  false,
  false,
  [4, 5],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
