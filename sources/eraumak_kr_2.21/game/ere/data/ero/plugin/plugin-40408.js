const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40408,
  '궁극의 S',
  404,
  3,
  8,
  '모든 부정적인 감정 인자를 가학쾌감으로 전환.',
  (args) => args.id > 0,
  580,
);
