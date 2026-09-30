const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60114,
  '평범',
  601,
  2,
  4,
  '성격이 평범해진다.',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== 0,
  320,
);
