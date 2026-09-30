const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201022,
  '앞지르기 금지',
  '레이스 초반에 후방에 있으면 전방의 우마무스메를 약간 긴장하게 해서 움직임을 아주 조금 둔하게 한다',
  20102,
  1,
  24,
  262,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 0 &&
      args.order_rate > 50 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.Accel,
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
    [-0.01, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.SelfInfront,
      UmaSkill.target_type_enum.SelfInfront,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [18, 18, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
  170,
  false,
  false,
  [2],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.accel],
);
