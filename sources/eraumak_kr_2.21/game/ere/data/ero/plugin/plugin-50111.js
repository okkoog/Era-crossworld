const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50111,
  '절정 제어Ⅰ',
  501,
  1,
  4,
  '한 턴에 한 번씩만 절정 가능.',
  (args) => args.id > 0,
  260,
);
