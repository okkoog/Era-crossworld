const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10722,
  '질구 불감Ⅱ',
  107,
  2,
  6,
  '질구 쾌감 획득-40%.',
  (args) => args.sex !== 1,
  420,
);
