const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100311,
  '충전 완료! 전속 전진!',
  '남은 거리 300m 부근에서 전방이라면 속도가 다소 상승하고, 그때에 맞춰 오르막길을 올랐을 경우는 많이 상승한다',
  10031,
  1,
  18,
  340,
  [
    (args) =>
      args.remain_distance <= 305 &&
      args.remain_distance >= 300 &&
      args.slope === 1,
    () => true,
  ],
  [
    (args) =>
      (args.remain_distance <= 299 &&
        args.remain_distance >= 295 &&
        args.order <= 2 &&
        args.slope === 0) ||
      (args.remain_distance <= 299 &&
        args.remain_distance >= 295 &&
        args.order <= 2 &&
        args.slope === 2),
    (args) =>
      args.remain_distance <= 299 &&
      args.remain_distance >= 295 &&
      args.order <= 2,
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
