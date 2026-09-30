const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900531,
  '열혈!! 선도 어택',
  '종반 최종 코너 이후에 후방에서 따라붙으면 짧은 시간 동안 가속력이 매우 조금 상승하며, 효과 중에 추월하면 3회까지 효과와 시간이 증가한다',
  90053,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate >= 50 &&
      args.is_finalcorner === 1 &&
      args.bashin_diff_infront <= 1,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.order_change,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.05, 0.05, 0],
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
  [UmaSkill.ability_tag_enum.accel],
);
