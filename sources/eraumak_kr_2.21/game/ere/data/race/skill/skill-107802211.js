const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  107802211,
  '실프・스피릿',
  '레이스 종반 직전 이후에 선두이거나 선두로부터 4마신 이내라면 한동안 속도가 다소 상승한다',
  10780221,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 2 &&
      args.distance_diff_top <= 10 &&
      args.distance_rate >= 60,
    () => false,
  ],
  [4, 0],
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
  [60, 0],
  1,
  0,
  false,
  false,
  [3, 7],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
