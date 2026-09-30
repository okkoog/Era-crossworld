const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120681,
  '모두의 나에게!',
  '초・중반에 전방에서 추월당하거나 경합했을 때 짧은 시간 동안 속도가 상승하고, 그 후 장거리 레이스에서 레이스 후반에 2위 이내면 속도가 계속해서 다소 상승한다',
  12068,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase <= 1 &&
        args.change_order_onetime > 0 &&
        args.accumulatetime >= 5 &&
        args.order_rate <= 50) ||
      (args.phase <= 1 &&
        args.blocked_side_continuetime >= 2 &&
        args.accumulatetime >= 5 &&
        args.order_rate <= 50),
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.order <= 2 &&
      args.distance_rate >= 50 &&
      args.distance_type === 4,
  ],
  [3, 6],
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
    [0.35, 0, 0],
    [0.25, 0, 0],
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
  [5],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
