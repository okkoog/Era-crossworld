const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10712,
  '질구 감각Ⅱ',
  107,
  2,
  6,
  '질구 쾌감 획득+200%.',
  (args) => args.sex !== 1,
  420,
);
