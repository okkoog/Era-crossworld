const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.force_cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 클리토리스를 ',
        defender.get_colored_name(),
        '의 얼굴에 짓눌렀다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 입술과 혀에 클리토리스를 문질렀다】',
    ]);
  };

  handlers[ero_hooks.force_suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 비소를 ',
        defender.get_colored_name(),
        '의 입술에 짓눌렀다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 입술과 혀에 비소를 문질렀다】',
    ]);
  };

  handlers[ero_hooks.force_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 입술 사이로 밀어 넣었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 육봉을 휘둘러 ',
      defender.get_colored_name(),
      '의 입안을 유린했다】',
    ]);
  };

  handlers[ero_hooks.force_deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 목구멍 깊숙이 쑤셔 넣었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 목구멍 깊은 곳을 헤집었다】',
    ]);
  };

  handlers[ero_hooks.force_hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 손에 쥐여주었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 육봉을 ',
      defender.get_colored_name(),
      '의 양손에 비벼댔다】',
    ]);
  };

  handlers[ero_hooks.force_hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 ',
        defender.get_colored_name(),
        '의 양손을 밀어내고 입안에 육봉을 삽입했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 ',
      defender.get_colored_name(),
      '의 손을 털어내며 입술과 혀를 휘저었다】',
    ]);
  };

  handlers[ero_hooks.fuck_tit] = (attacker, defender, hook) => {
    if (hook.arg && defender.sex_code !== 1) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 ',
        defender.get_colored_name(),
        '의 가슴을 모아 육봉을 끼웠다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 육봉을 ',
      defender.get_colored_name(),
      '의 가슴에 문질렀다】',
    ]);
  };

  handlers[ero_hooks.force_hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 ',
        defender.get_colored_name(),
        '의 머리카락으로 육봉을 휘감았다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 육봉을 ',
      defender.get_colored_name(),
      '의 머리카락에 문질렀다】',
    ]);
  };

  handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 두 발을 끌어당겨 육봉을 애무하게 했다】',
    ]);

  handlers[ero_hooks.force_tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 꼬리를 끌어와 육봉에 휘감았다】',
    ]);
};