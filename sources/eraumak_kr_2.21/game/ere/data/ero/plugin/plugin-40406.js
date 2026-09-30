const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40406,
  '궁극의 마조',
  404,
  3,
  6,
  '모든 부정적인 감정 인자를 피학쾌감으로 전환.',
  (args) => args.id > 0,
  480,
);
