const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40403,
  '노출증',
  404,
  2,
  2,
  '모든 수치 인자를 피학쾌감으로 전환.',
  (args) => args.id > 0,
  220,
);
