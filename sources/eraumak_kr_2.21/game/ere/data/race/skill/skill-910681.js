const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  910681,
  '훌륭한 진수성찬!',
  '종반 코너에서 전방에 있을 때 결승점까지의 거리가 멀면 잠시 동안 약간 앞으로 나오며 추가로 가속력이 매우 조금 상승한다',
  91068,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.remain_distance >= 600 &&
      args.order <= 3,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.15, 0.05, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed, UmaSkill.ability_tag_enum.accel],
);
