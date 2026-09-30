const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210051,
  '아오하루 연소・지',
  '레이스 초반에 아오하루 혼이 불타 잠시 동안 레이스 중 팀 멤버의 지능 합계가 높을수록 앞을 내다보며 달린다',
  21005,
  2,
  17,
  633,
  [() => true, () => true],
  [(args) => args.phase_random === 0, () => false],
  [4, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.LaneMoveSpeed,
      UmaSkill.ability_type_enum.VisibleDistance,
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
      UmaSkill.ability_usage_enum.MultiplyTeamTotalWiz,
      UmaSkill.ability_usage_enum.MultiplyTeamTotalWiz,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.035, 15, 0],
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
  [5, 3],
  [30, 30],
  1,
  200,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.visible, UmaSkill.ability_tag_enum.laneMove],
);
