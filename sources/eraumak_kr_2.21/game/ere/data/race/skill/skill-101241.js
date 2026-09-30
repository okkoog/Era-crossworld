const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101241,
  '부풀어오르는 꿈, 선구자의 길',
  '종반이 다가오는 어딘가에서 전방에 있으면 속도가 다소 상승하고, 1600m~2000m 레이스에서 스킬 발동 시, 선두이거나 선두로부터 4마신 이내라면 많이 상승한다',
  10124,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 50 &&
      args.course_distance >= 1600 &&
      args.course_distance <= 2000 &&
      args.distance_diff_top <= 10,
    (args) => args.phase_laterhalf_random === 1 && args.order_rate <= 50,
  ],
  [5, 5],
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
    [0.45, 0, 0],
    [0.25, 0, 0],
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
  [UmaSkill.ability_tag_enum.targetSpeed],
);
