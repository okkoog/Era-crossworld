const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60115,
  '자존심',
  601,
  2,
  4,
  '자존심 강한 성격이 된다.',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== 1,
  320,
);
