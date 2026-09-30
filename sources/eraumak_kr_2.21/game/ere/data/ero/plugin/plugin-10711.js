const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10711,
  '질구 감각Ⅰ',
  107,
  1,
  2,
  '질구 쾌감 획득+100%.',
  (args) => args.sex !== 1,
  160,
);
