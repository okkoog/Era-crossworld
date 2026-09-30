const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10612,
  '클리 감각Ⅱ',
  106,
  2,
  6,
  '클리 쾌감 획득+200%.',
  (args) => args.sex === 0,
  420,
);
