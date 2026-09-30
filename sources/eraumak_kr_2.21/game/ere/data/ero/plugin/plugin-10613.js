const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10613,
  '클리 감각Ⅲ',
  106,
  3,
  16,
  '클리 쾌감 획득+400%.',
  (args) => args.sex === 0,
  980,
);
