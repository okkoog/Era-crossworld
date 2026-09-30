const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110021,
  '수평선 저 너머로',
  '종반 돌입 시 선두라면 다소 앞으로 나가며 그곳이 제3 코너이고 중반에 크게 거리를 벌린 선두일 경우에는 많이 앞으로 나간다',
  11002,
  1,
  18,
  340,
  [
    (args) =>
      args.phase === 1 && args.bashin_diff_behind >= 3 && args.order === 1,
    () => true,
  ],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.corner === 3 &&
      args.order === 1,
    (args) =>
      args.distance_rate >= 66 && args.distance_rate <= 68 && args.order === 1,
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
