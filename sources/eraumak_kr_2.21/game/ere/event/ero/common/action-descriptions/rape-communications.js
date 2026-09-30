const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 입술에 강제로 키스했다】',
    ]);

  handlers[ero_hooks.french_kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 입안 깊숙한 곳을 강제로 유린했다】',
    ]);

  handlers[ero_hooks.relax] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 여유만만한 태도로 ',
      defender.get_colored_name(),
      '의 지금 모습을 감상했다】',
    ]);

  handlers[ero_hooks.talk] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 말을 걸었다】',
    ]);
};