const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10721,
  '질구 불감Ⅰ',
  107,
  1,
  2,
  '질구 쾌감 획득-20%.',
  (args) => args.sex !== 1,
  160,
);
