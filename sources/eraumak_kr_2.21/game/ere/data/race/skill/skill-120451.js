const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120451,
  '인법・미소로 맺는 마음의 인',
  '레이스 중반 코너에서 좋은 위치에 있으면 지구력을 회복하며, 추가로 중・장거리 레이스라면 속도가 계속해서 다소 상승한다',
  12045,
  1,
  10,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase === 1 &&
        args.distance_type === 3 &&
        args.corner !== 0 &&
        args.order_rate >= 20 &&
        args.order_rate <= 50) ||
      (args.phase === 1 &&
        args.distance_type === 4 &&
        args.corner !== 0 &&
        args.order_rate >= 20 &&
        args.order_rate <= 50),
    (args) =>
      args.phase === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
  ],
  [6, 0],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.055, 0.25, 0],
    [0.055, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
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
  [1, 2],
  [30, 30],
  0,
  0,
  false,
  false,
  [4, 5],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.targetSpeed],
);
