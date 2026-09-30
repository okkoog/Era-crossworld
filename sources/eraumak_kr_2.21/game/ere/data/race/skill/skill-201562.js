const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201562,
  '럭키 세븐',
  '그룹 번호가 7일 때 다소 좋은 일이 생기기도 한다',
  20156,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.random_lot <= 50 && args.post_number === 7, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.Stamina,
      UmaSkill.ability_type_enum.Power,
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
    [40, 40, 40],
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
  [1, 2],
  [15, 15],
  1,
  110,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.speed,
    UmaSkill.ability_tag_enum.stamina,
    UmaSkill.ability_tag_enum.power,
  ],
);
