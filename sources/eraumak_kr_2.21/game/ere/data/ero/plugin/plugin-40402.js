const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40402,
  '공포 애호',
  404,
  2,
  2,
  '모든 공포 인자를 피학쾌감으로 전환.',
  (args) => args.id > 0,
  220,
);
