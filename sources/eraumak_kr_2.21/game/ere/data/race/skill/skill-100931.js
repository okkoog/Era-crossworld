const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100931,
  '행복의 푸른 빛',
  '종반이 시작되는 어딘가에서 전방에 있으면 다소 앞으로 나가며, 단거리나 마일 레이스인 경우 효과가 증가한다',
  10093,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20) ||
      (args.distance_type === 2 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20),
    (args) =>
      (args.distance_type === 3 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20) ||
      (args.distance_type === 4 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20),
  ],
  [5, 5],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.35, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [2, 3, 4, 5],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
