const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100981,
  '운이 트여 날아오르리',
  '종반이 다가올 때 어딘가에서 속도가 다소 상승하며, 추가로 능력을 끌어내는 스킬의 발동 횟수에 따라 속도와 가속력이 상승한다',
  10098,
  1,
  18,
  340,
  [() => true, () => true],
  [(args) => args.phase_laterhalf_random === 1, () => false],
  [5, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
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
      UmaSkill.ability_usage_enum.MultiplyActivateSpecificTagSkillCount,
      UmaSkill.ability_usage_enum.MultiplyActivateSpecificTagSkillCount,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.25, 0.05, 0.05],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [1, 3],
  [30, 30],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed, UmaSkill.ability_tag_enum.accel],
);
