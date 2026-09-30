const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  990021,
  '애달픈 마생',
  '레이스 막판에 갑자기 속도가 떨어지고, 능욕당하는 듯한 혐오 섞인 시선을 상상하며 가버릴 것 같게 된다. 만약 이전에 절정을 경험했다면, 모든 우마무스메의 속도가 떨어지게 된다',
  99002,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.cheat,
  ),
  1,
  [(args) => args.phase < 2 && args.orgasm === 1, () => true],
  [(args) => args.phase === 2, (args) => args.phase === 2],
  [60, 60],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.HpRate,
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
    [-1, -0.5, 0],
    [-1, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.All,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [0, 0],
  [0, 0],
  0,
  9999,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.ero],
);
