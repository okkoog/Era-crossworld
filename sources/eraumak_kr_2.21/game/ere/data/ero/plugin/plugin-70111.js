const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  70111,
  '참치',
  701,
  1,
  2,
  '조교 중 더 이상 반응하지 않음.',
  (args) => args.id > 0,
  160,
);
