const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10622,
  '클리 불감Ⅱ',
  106,
  2,
  6,
  '클리 쾌감 획득-40%.',
  (args) => args.sex === 0,
  420,
);
