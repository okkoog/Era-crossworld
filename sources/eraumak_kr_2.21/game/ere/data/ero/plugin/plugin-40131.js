const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40131,
  '자애',
  401,
  2,
  10,
  '모든 캐릭터에 대한 호감도 감소-50%.',
  (args) => args.id > 0,
  620,
);
