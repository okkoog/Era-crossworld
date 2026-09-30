const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60117,
  '열혈',
  601,
  2,
  4,
  '성격이 열혈로 바뀐다',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== 3,
  320,
);
