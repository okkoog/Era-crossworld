const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101101,
  'Guiding Sea',
  '남은 거리 800m 지점에서 중위권 그룹이면 잠시 동안 다소 앞으로 나가고 가속력이 아주 조금 상승한다. 추가로 근간거리 레이스에서 후방이면 거기에 더해 가속력이 약간 상승한다',
  10110,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.is_basis_distance === 1 &&
      args.order_rate >= 70 &&
      args.order_rate <= 80,
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
  ],
  [4, 4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.Accel,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.Accel,
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
    [0.25, 0.1, 0.2],
    [0.25, 0.1, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed, UmaSkill.ability_tag_enum.accel],
);
