const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60112,
  '겁쟁이',
  601,
  2,
  4,
  '성격이 겁쟁이가 된다',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== -2,
  320,
);
