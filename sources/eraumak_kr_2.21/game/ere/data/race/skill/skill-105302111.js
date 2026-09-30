const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105302111,
  '열혈 진화 라이딩!',
  '레이스 종반이 시작될 때 중위권 그룹 이후에 있으면 가속력이 상승하며 그 후 남은 거리가 200m일 때 속도가 약간 상승한다',
  10530211,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate >= 40,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
  ],
  [1.8, 3],
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
    [0.15, 0, 0],
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
  1,
  0,
  true,
  false,
  [8],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
