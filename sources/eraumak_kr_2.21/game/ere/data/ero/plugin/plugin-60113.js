const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60113,
  '성실',
  601,
  2,
  4,
  '성격이 성실해진다.',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== -1,
  320,
);
