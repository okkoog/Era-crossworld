const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202882,
  '끓어오르는 피',
  '최종 직선에서 2위 이후이고 선두로부터 4마신 이내에 있으면 속도가 다소 상승한다',
  20288,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.is_last_straight === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
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
    [0.25, 0, 0],
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
  [1, 0],
  [30, 0],
  1,
  180,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
