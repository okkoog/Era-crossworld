const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40222,
  '냉랭',
  402,
  3,
  18,
  '애정도 획득-100%.',
  (args) => args.id > 0 && args.love < 100,
  1080,
);
