const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10623,
  '클리 불감Ⅲ',
  106,
  3,
  16,
  '클리 쾌감 획득-80%.',
  (args) => args.sex === 0,
  980,
);
