/**
 * @file 윈 바리아시옹 - 조교
 * @author ALEX
 */
const EroRapeFucking = require('#/event/ero/common/rape/fucking');
const RapeCommandLines = require('#/event/ero/common/rape/rape-common');
const CustomizedEro = require('#/event/ero/ero-common');

class VariationRapeFucking extends EroRapeFucking {
  async standing(attacker, defender, hook) {
    if (hook.arg && defender.id === 117) {
      await attacker.print_and_wait(
        '유연성과 균형감이 뛰어난 무용수가 당신의 앞에서 자신의 춤을 선보이고 있다',
      );
    }
    return await super.standing(attacker, defender, hook);
  }
}

class VariationRapeLines extends RapeCommandLines {
  constructor(root) {
    super(root, { fucking: true });
    this.fucking = new VariationRapeFucking(root);
  }
}

module.exports = class extends CustomizedEro {
  constructor(arg) {
    super(arg, { rape: true });
    this.rape = new VariationRapeLines(this);
  }
};
