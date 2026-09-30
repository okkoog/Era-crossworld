const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100841,
  '벽력의 아우프헤벤',
  '레이스 종반에 후방에 있으면 최종 직선에서 힘을 해방해 앞으로 나가며, 도쿄 경기장의 중거리 레이스라면 아주 많이 앞으로 나간다',
  10084,
  1,
  18,
  340,
  [
    (args) => args.phase >= 2 && args.order_rate >= 50,
    (args) => args.phase >= 2 && args.order_rate >= 50,
  ],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.track_id === 10006 &&
      args.distance_type === 3,
    (args) => args.is_last_straight === 1,
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
    [0.55, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [4],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
