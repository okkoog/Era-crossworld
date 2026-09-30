const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroSleepFucking = require('#/event/ero/common/sleep/fucking');

module.exports = class extends EroSleepFucking {
  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.stimulate_glans_by_virgin(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['하아……하아……']);
      await attacker.print_and_wait([
        '어느 정도 적응이 되네, 아무래도',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 자지는 아직 잠에서 덜 깬 것 같아.',
      ]);
      await attacker.print_and_wait(['이럴 땐, 내가 도와줘야겠지.']);
      await attacker.print_and_wait([
        '심호흡을 하고, 배를 살짝 조여, 꿈틀거리는 보지가 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 자지를 깨우게 했다.',
      ]);
      await attacker.say_and_wait(['읏!!!히얏!!!']);
      await attacker.print_and_wait([
        '깨어난 괴물의 자지가 원래는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 리듬을 따라갈 수 있었던 나에게 거의 의식을 잃을 듯한 쾌감을 안겨주었다.',
      ]);
    } else {
      return await this.root.root.normal.stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
  }
};
