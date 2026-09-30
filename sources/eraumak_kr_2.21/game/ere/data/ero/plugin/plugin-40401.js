const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40401,
  '마조',
  404,
  2,
  2,
  '모든 고통 인자를 피학쾌감으로 전환.',
  (args) => args.id > 0,
  220,
);
