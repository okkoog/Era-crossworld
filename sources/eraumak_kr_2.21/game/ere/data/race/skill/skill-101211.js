const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101211,
  'Lame de vent',
  '최종 코너에서 추월하면 라스트 스퍼트에서 속도가 상승한다. 단거리나 마일 레이스에서 스킬 발동 시 중위권 그룹에 있으면 많이 상승한다',
  10121,
  1,
  18,
  340,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.change_order_onetime < 0,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.change_order_onetime < 0,
  ],
  [
    (args) =>
      (args.is_lastspurt === 1 &&
        args.phase === 3 &&
        args.order_rate >= 40 &&
        args.order_rate <= 80 &&
        args.distance_type === 1) ||
      (args.is_lastspurt === 1 &&
        args.phase === 3 &&
        args.order_rate >= 40 &&
        args.order_rate <= 80 &&
        args.distance_type === 2),
    (args) => args.is_lastspurt === 1 && args.phase === 3,
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
  [2, 3],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
