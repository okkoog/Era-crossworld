const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40111,
  '쵸로인',
  401,
  2,
  10,
  '모든 캐릭터에 대한 호감도 획득+100%.',
  (args) => args.id > 0,
  620,
);
