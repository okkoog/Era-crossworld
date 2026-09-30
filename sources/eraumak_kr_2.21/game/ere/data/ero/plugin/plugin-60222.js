const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60222,
  '사랑의 기적',
  602,
  2,
  16,
  '트레이닝 성공률과 효과+20%.',
  (args) => args.id > 0 && args.edu && args.love >= 75,
  920,
);
