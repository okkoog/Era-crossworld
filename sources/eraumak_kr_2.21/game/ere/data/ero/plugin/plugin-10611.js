const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10611,
  '클리 감각Ⅰ',
  106,
  1,
  2,
  '클리 쾌감 획득+100%.',
  (args) => args.sex === 0,
  160,
);
