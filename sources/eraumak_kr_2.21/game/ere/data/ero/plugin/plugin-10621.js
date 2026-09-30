const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10621,
  '클리 불감Ⅰ',
  106,
  1,
  2,
  '클리 쾌감 획득-20%.',
  (args) => args.sex === 0,
  160,
);
