const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900591,
  '저편, 그 너머로…',
  '흥분하지 않고 중반의 최종 코너 혹은 종반의 최종 코너가 아닌 코너를 중위권 그룹에서 달리면 가속력이 약간 상승한다',
  90059,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      (args.phase >= 2 &&
        args.corner !== 0 &&
        args.is_finalcorner === 0 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70) ||
      (args.phase === 1 &&
        args.corner !== 0 &&
        args.is_finalcorner === 1 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70),
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
    [0.2, 0, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.accel],
);
