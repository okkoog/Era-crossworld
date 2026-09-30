const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100661,
  '엔진 전개! 대분사!',
  '중반의 중간에 거리를 벌린 채 선두라면 아주 오랫동안 속도가 계속해서 약간 상승하지만 종반의 끝에 아주 조금 뒤처져 버린다',
  10066,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 34 &&
      args.distance_rate <= 36 &&
      args.order === 1 &&
      args.bashin_diff_behind >= 1,
    (args) => args.phase === 3 && args.is_activate_other_skill_detail === 1,
  ],
  [13, 500],
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
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.15, 0, 0],
    [-0.05, 0, 0],
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
  [60, 0],
  0,
  0,
  true,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.targetSpeed,
  ],
);
