const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50212,
  '불멸',
  502,
  2,
  14,
  '피로하거나 부상입지 않음.',
  (args) => args.id > 0 && args.chara !== undefined,
  820,
);
