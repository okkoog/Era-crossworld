const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60211,
  '성애 훈련',
  602,
  1,
  6,
  '성애를 통해 획득하는 기본 능력치 x6, 스킬 포인트를 획득할 수 있으며, 훈련 보너스 -50%.',
  (args) => args.edu,
  360,
);
