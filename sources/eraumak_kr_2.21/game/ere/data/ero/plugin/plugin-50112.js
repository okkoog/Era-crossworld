const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50112,
  '절정 제어Ⅱ',
  501,
  2,
  12,
  '2턴마다 1번씩만 절정 가능.',
  (args) => args.id > 0,
  720,
);
