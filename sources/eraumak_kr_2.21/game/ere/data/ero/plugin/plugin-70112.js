const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  70112,
  '온순',
  701,
  3,
  10,
  '먼저 구애하지 않으며, 조교 시에도 반응하지 않는다.',
  (args) => args.id > 0,
  680,
);
