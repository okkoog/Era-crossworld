const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  111901211,
  '꿈꾸는 듯한 기분',
  '레이스 종반 이후 코너에서 추월하려고 하면 한동안 앞으로 나가며, 나카야마 경기장에서 지능이 더욱 높으면 효과가 증가한다',
  11190121,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.is_overtake === 1 &&
      args.track_id === 10005 &&
      args.base_wiz >= 1200,
    (args) =>
      args.running_style === 4 &&
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.is_overtake === 1,
  ],
  [4, 4],
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
    [0.4, 0, 0],
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
  1,
  0,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
