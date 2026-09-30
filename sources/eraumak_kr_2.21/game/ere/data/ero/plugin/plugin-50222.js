const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50222,
  '영구발기',
  502,
  2,
  2,
  '계속해서 발기한 상태를 유지한다.',
  (args) => args.sex > 0,
  220,
);
