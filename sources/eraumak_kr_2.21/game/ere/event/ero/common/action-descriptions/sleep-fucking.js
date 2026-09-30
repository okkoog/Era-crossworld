const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = handlers[ero_hooks.missionary_anal_sex] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 몸 위에 엎드려 ',
      hook.hook === ero_hooks.missionary ? '보지' : '애널',
      '을(를) 범하고 있다】',
    ]);

  handlers[ero_hooks.doggy_style] = handlers[ero_hooks.doggy_style_anal_sex] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 엎드려 있는 ',
      defender.get_colored_name(),
      '의 몸 위에 올라타 ',
      hook.hook === ero_hooks.doggy_style ? '보지' : '애널',
      '을(를) 범하고 있다】',
    ]);

  handlers[ero_hooks.stimulate_g_spot] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 잠든 ',
      defender.get_colored_name(),
      '의 깊은 곳에 있는 G스팟을 자극하고 있다】',
    ]);

  handlers[ero_hooks.stimulate_womb] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 애널 벽 너머로 잠든 ',
      defender.get_colored_name(),
      '의 민감한 자궁을 자극하고 있다】',
    ]);

  handlers[ero_hooks.cowgirl] = handlers[ero_hooks.cowgirl_anal_sex] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 몸 위에 올라타 ',
      hook.hook === ero_hooks.cowgirl ? '보지' : '애널',
      '로 육봉을 훑고 있다】',
    ]);

  handlers[ero_hooks.stimulate_glans_by_virgin] = handlers[
    ero_hooks.stimulate_glans_by_anal
  ] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '보지' : '애널',
      '(으)로 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 훑고 있다】',
    ]);
};