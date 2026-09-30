const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900911,
  '디럭스☆파운틴',
  '레이스 종반의 최종 직선에 들어왔을 때 중위권 그룹에 있으면 남은 거리 300m 이하부터 속도가 아주 조금 상승하며, 레이스를 침착하게 진행했다면 다소 상승한다',
  90091,
  1,
  16,
  180,
  [
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight_onetime === 1 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70 &&
      args.temptation_count === 0,
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight_onetime === 1 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70,
  ],
  [
    (args) => args.remain_distance <= 300,
    (args) => args.remain_distance <= 300,
  ],
  [3, 3],
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
    [0.25, 0, 0],
    [0.05, 0, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
