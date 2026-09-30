const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202734,
  '롱샹이 점지한 아이',
  '롱샹 경기장에 강해져서 스태미나, 지능, 스피드가 상승한다',
  20273,
  3,
  1,
  461,
  [() => true, () => true],
  [(args) => args.track_id === 10201, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Stamina,
      UmaSkill.ability_type_enum.Wiz,
      UmaSkill.ability_type_enum.Speed,
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
    [60, 60, 60],
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
  [2, 5],
  [30, 30],
  0,
  130,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.speed,
    UmaSkill.ability_tag_enum.stamina,
    UmaSkill.ability_tag_enum.wiz,
  ],
);
