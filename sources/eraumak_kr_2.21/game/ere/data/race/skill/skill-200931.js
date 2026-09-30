const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200931,
  '추입 긴장',
  '레이스 중반에 작전・추입인 우마무스메를 긴장하게 해서 약간 지치기 쉽게 만든다',
  20093,
  1,
  24,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_oikomi_otherself >= 1 && args.phase_random === 1,
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
      UmaSkill.ability_type_enum.HpRate,
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
    [-0.01, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.RunningStyleOtherSelf,
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
    [4, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
  130,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate],
);
