const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50113,
  '절정 제어Ⅲ',
  501,
  3,
  32,
  '4턴마다 1번씩만 절정 가능.',
  (args) => args.id > 0,
  1780,
);
