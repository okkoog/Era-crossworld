const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50213,
  '봉래',
  502,
  3,
  32,
  '피로하거나 부상입지 않고, 임신하지 않음.',
  (args) => args.id > 0 && args.sex !== 1 && args.pregnant === false,
  1780,
);
