const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202711,
  '결정적인 한 수',
  '종반의 최종 코너에서 중위권 그룹 이전에 있을 때 결승점까지 멀면 가속력이 상승한다',
  20271,
  2,
  17,
  508,
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
    () => false,
  ],
  [0.9, 0],
  [500, 0],
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
    [0.4, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
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
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
  180,
  false,
  false,
  [7, 8],
  [UmaSkill.ability_tag_enum.accel],
);
