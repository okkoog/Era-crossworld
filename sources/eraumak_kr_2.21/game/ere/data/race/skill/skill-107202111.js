const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  107202111,
  '무사의 세찬 칼날',
  '종반 이후의 최종 코너에서 중위권 그룹 이전에 있을 때 결승점까지 멀면 가속력이 상승하고, 그 후 최종반이 시작될 때 라스트 스퍼트에서 속도가 약간 상승한다',
  10720211,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner !== 0 &&
        args.remain_distance >= 600 &&
        args.order_rate <= 70) ||
      (args.running_style === 3 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner !== 0 &&
        args.remain_distance >= 600 &&
        args.order_rate <= 70),
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.is_lastspurt === 1 &&
      args.phase_firsthalf_random === 3,
  ],
  [0.9, 3],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.4, 0, 0],
    [0.15, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
  0,
  true,
  false,
  [7, 8],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
