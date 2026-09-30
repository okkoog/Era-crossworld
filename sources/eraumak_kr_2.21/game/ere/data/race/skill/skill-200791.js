const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200791,
  '도주 심리전',
  '작전이 도주인 우마무스메가 흥분하면 진정될 때까지 시간이 걸린다',
  20079,
  1,
  24,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_temptation_opponent_count_nige >= 1 &&
      args.is_temptation === 0,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TemptationEndTime,
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
    [5, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.RunningStyleTemptationOtherSelf,
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
    [1, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [15, 15],
  1,
  130,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.temp],
);
