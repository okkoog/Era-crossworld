const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60221,
  '신뢰',
  602,
  1,
  6,
  '트레이닝 성공률과 효과+10%.',
  (args) => args.id > 0 && args.edu,
  360,
);
