const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202491,
  '뛰어난 추입력',
  '레이스 종반에 돌입할 때까지 흥분하지 않고 후방에서 계속 대기하면, 종반이 시작될 때 가속력이 상승한다',
  20249,
  2,
  17,
  508,
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.order_rate_out50_continue === 1 &&
      args.temptation_count === 0,
    () => true,
  ],
  [
    (args) => args.running_style === 4 && args.phase_firsthalf_random === 2,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
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
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
  180,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.accel],
);
