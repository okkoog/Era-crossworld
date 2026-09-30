const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100971,
  '스칼렛 릴리의 고양',
  '남은 거리 300m 지점에서 중위권 그룹에 있으면 속도가 많이 상승하고, 또는 중거리 레이스에서 「충동」이 발동했다면 종반 이후 코너에서 순위에 관계없이 가속력이 상승한다',
  10097,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_used_skill_id.indexOf(203781) !== -1 &&
      args.phase >= 2 &&
      args.corner !== 0,
    (args) =>
      args.order_rate >= 20 &&
      args.order_rate <= 70 &&
      args.remain_distance >= 299 &&
      args.remain_distance <= 301,
  ],
  [4, 5],
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
    [0.4, 0, 0],
    [0.45, 0, 0],
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
  [1, 3],
  [30, 30],
  0,
  0,
  false,
  false,
  [4],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
