const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40112,
  '충성',
  401,
  3,
  26,
  '매주 종료 시 호감도가 최대로 회복됨.',
  (args) => args.id > 0,
  1480,
);
