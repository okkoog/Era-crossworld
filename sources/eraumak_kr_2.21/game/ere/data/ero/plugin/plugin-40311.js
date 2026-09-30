const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40311,
  '포용',
  403,
  2,
  12,
  '얀데레화 하지 않음.',
  (args) => args.id > 0,
  720,
);
