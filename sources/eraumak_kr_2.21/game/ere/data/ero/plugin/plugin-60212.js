const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60212,
  '금단의 열매',
  602,
  3,
  16,
  '성애를 통해 획득하는 기본 능력치 x16, 스킬 포인트를 획득할 수 있으며, 더 이상 자율 트래이닝이 불가능하고 모든 훈련 보너스가 최하로 떨어진다.',
  (args) => args.edu,
  980,
);
