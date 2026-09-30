const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50211,
  '금강불괴',
  502,
  1,
  6,
  '부상입지 않음.',
  (args) => args.id > 0 && args.chara !== undefined,
  360,
);
