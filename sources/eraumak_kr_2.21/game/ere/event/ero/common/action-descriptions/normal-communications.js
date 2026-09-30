const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.go_on] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 저항을 포기하고 ',
      defender.get_colored_name(),
      '의 뜻대로 내버려 두었다】',
    ]);

  handlers[ero_hooks.kiss] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      hook.arg ? '' : '은(는) 계속 ',
      '은(는) ',
      defender.get_colored_name(),
      '의 입술에 키스했다】',
    ]);

  handlers[ero_hooks.french_kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) 혀를 섞었다】',
    ]);

  handlers[ero_hooks.relax] = (attacker, _, hook) => {
    if (
      sys_check_awake(attacker.id) &&
      !era.get(`tcvar:${attacker.id}:탈력`) &&
      !era.get(`tcvar:${attacker.id}:실신`)
    ) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 한숨 돌렸다】',
      ]);
    } else {
      hook.arg = false;
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 아무것도 안했다】',
      ]);
    }
  };

  handlers[ero_hooks.lure] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '을(를) 유혹했다】',
    ]);

  handlers[ero_hooks.talk] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과 같이 대화했다】',
    ]);

  handlers[ero_hooks.switch] = (attacker, defender) => {
    if (
      !defender.id &&
      (era.get(`tcvar:${defender.id}:탈력`) ||
        era.get(`tcvar:${defender.id}:실신`))
    ) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 당분간 하고 싶지 않아하는 것 같다】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 주도권을 넘겨주었다】',
      ]);
    }
  };

  handlers[ero_hooks.resist] = (attacker) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 주도권을 잡기 위해 저항을 시도했다】',
    ]);

  handlers[ero_hooks.gargle] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는)',
      defender.get_colored_name(),
      '과 함께 양치질했다】',
    ]);

  handlers[ero_hooks.wipe_body] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 자신과 ',
      defender.get_colored_name(),
      '의 몸을 닦았다】',
    ]);
};
