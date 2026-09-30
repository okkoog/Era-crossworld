const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100851,
  '최상이어라',
  '침착하게 달려 종반에 돌입할 때 후방 부근이라면 다소 앞으로 나가며, 선두로부터 4명까지의 우마무스메를 아주 조금 위축시킨다',
  10085,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.order_rate >= 60 &&
      args.order_rate <= 90 &&
      args.temptation_count === 0,
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
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.25, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.OrderInfront,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
