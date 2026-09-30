const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50221,
  '속사',
  502,
  1,
  2,
  '현자타임이 오지 않는다.',
  (args) => args.sex > 0,
  160,
);
