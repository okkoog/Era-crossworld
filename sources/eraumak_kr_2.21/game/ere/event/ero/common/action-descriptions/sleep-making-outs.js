const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 따뜻한 귀를 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.pull_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 따뜻한 귀를 잡아당기고 있다】',
    ]);

  handlers[ero_hooks.pet_breast] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 부드러운 가슴을 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.pet_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 민감한 유두를 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.pet_clitoris] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 요염한 클리토리스를 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.finger_fuck] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락을 잠든 ',
      defender.get_colored_name(),
      '의 요염한 보지에 삽입했다】',
    ]);

  handlers[ero_hooks.prepare_virgin] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 부끄러워하는 음순을 벌렸다】',
    ]);

  handlers[ero_hooks.stimulate_g_spot_by_finger] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락으로 잠든 ',
      defender.get_colored_name(),
      '의 은밀한 G스팟을 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.pet_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 조그만 애널을 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.prepare_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 부끄러워하는 애널을 벌렸다】',
    ]);

  handlers[ero_hooks.pet_leg] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 풍만한 허벅지를 쓰다듬고 있다】',
    ]);

  handlers[ero_hooks.pet_tail] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 향기로운 꼬리를 만지작거리고 있다】',
    ]);

  handlers[ero_hooks.pull_tail] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 약한 꼬리를 잡아당기고 있다】',
    ]);

  handlers[ero_hooks.cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 잠든 ',
        defender.get_colored_name(),
        '의 들썩이는 클리토리스를 입에 머금었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 요염한 클리토리스를 빨고 있다】',
    ]);
  };

  handlers[ero_hooks.force_deep_blow_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 살짝 벌어진 작은 입에 육봉을 삽입했다】',
    ]);

  handlers[ero_hooks.blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 잠든 ',
        defender.get_colored_name(),
        '의 우뚝 솟은 육봉을 입에 머금었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 핥고 있다】',
    ]);
  };

  handlers[ero_hooks.deep_blow_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 깊숙이 입에 머금었다】',
    ]);

  handlers[ero_hooks.hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손바닥으로 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 어루만지고 있다】',
    ]);

  handlers[ero_hooks.hand_and_blow_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손과 입을 모두 사용하여 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉에 봉사하고 있다】',
    ]);

  handlers[ero_hooks.fuck_tit] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 양 가슴을 모아 자신의 육봉을 문지르고 있다】',
    ]);

  handlers[ero_hooks.tit_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 양 가슴을 모아 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 문지르고 있다】',
    ]);

  handlers[ero_hooks.tit_and_blow_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 가슴으로 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 문지르면서, 입을 벌려 잠든 귀두를 빨고 있다】',
    ]);

  handlers[ero_hooks.bite_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 민감한 유두를 살짝 깨물고 있다】',
    ]);

  handlers[ero_hooks.force_armpit_intercourse] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 무방비한 손을 들어 올린 채, 육봉으로 겨드랑이를 문지르고 있다】',
    ]);

  handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 건강한 두 발을 끌어당겨 자신의 육봉을 밟게 하고 있다】',
    ]);

  handlers[ero_hooks.foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 발로 밟고 있다】',
    ]);

  handlers[ero_hooks.tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 꼬리로 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 휘감아 만지작거리고 있다】',
    ]);
};