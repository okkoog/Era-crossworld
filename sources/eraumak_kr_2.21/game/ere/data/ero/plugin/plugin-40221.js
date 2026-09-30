const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40221,
  '권태',
  402,
  2,
  12,
  '애정도 획득-80%.',
  (args) => args.id > 0 && args.love < 100,
  720,
);
