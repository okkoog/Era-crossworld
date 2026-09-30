const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10713,
  '질구 감각Ⅲ',
  107,
  3,
  16,
  '질구 쾌감 획득+400%.',
  (args) => args.sex !== 1,
  980,
);
