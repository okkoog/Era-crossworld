const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101201,
  '무이무삼한 한줄기 길',
  '4펄롱째에 전방에 있으면 잠시 동안 속도가 상승하고, 「무이」, 「무삼」을 둘 다 발동하고 있다면 효과량이 바뀌어 잠시동안 속도가 엄청나게 상승한다',
  10120,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.furlong === 3 &&
      args.order_rate <= 50 &&
      args.is_used_skill_id.indexOf(203061) !== -1 &&
      args.is_used_skill_id.indexOf(203071) !== -1,
    (args) => args.furlong === 3 && args.order_rate <= 50,
  ],
  [4, 4],
  [500, 500],
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
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.65, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
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
  [1, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
