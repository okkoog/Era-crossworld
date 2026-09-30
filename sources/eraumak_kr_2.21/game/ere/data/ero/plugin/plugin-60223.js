const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60223,
  '한계 돌파',
  602,
  3,
  19,
  '트레이닝 성공률과 효과+270%, 모든 체력과 기력을 소모하고 부상 1을 얻으며, 명성-1.',
  (args) => args.id > 0,
  1130,
);
