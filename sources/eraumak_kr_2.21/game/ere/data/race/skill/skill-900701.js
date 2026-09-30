const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900701,
  '세이리오스',
  '남은 거리 800m 지점에서 중위권 그룹에 있으면 가속력이 아주 약간 상승하며, 2400m 레이스에서 인기가 높으면 다소 상승한다',
  90070,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.order_rate >= 30 &&
      args.order_rate <= 60 &&
      args.course_distance === 2400 &&
      args.popularity <= 3,
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.order_rate >= 30 &&
      args.order_rate <= 60,
  ],
  [2.4, 2.4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.3, 0, 0],
    [0.07, 0, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.accel],
);
