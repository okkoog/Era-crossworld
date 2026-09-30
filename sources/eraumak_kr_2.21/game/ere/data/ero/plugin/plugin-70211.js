const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  70211,
  '상식 개변',
  702,
  3,
  30,
  '효과 없음.',
  (args) => args.id > 0 && false,
  1680,
);
