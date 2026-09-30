const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110411,
  'CHERRY☆스크램블',
  '남은 거리 400m 지점에서 3위 이내에 있으면 짧은 시간 동안 가속력이 아주 조금 상승하며, 레이스 중반에 연속해서 경합한 시간이 길수록 효과와 시간이 증가한다',
  11041,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order <= 3 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399,
    () => false,
  ],
  [1, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.blocked_side_continuetime,
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
      UmaSkill.ability_usage_enum
        .MultiplyBlockedSideMaxContinueTimePhaseMiddleRun1,
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
    [0.1, 0, 0],
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
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.accel],
);
