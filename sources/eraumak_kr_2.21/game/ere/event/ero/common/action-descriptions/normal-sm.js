const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.insult] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 이(가) ',
      defender.get_colored_name(),
      '을(를) 매도했다】',
    ]);

  handlers[ero_hooks.ask_insult] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      !hook.arg ? '계속해서 ' : '',
      '자신을 매도해달라고 요청했다】',
    ]);

  handlers[ero_hooks.hit_anal] = handlers[ero_hooks.hit_anal_hard] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      hook.hook === ero_hooks.hit_anal_hard ? '힘껏 ' : '',
      defender.get_colored_name(),
      '의 엉덩이를 때렸다】',
    ]);

  handlers[ero_hooks.ask_hit_anal] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      !hook.arg ? '계속해서 ' : '',
      '자신의 엉덩이를 때려달라고 요청했다】',
    ]);

  handlers[ero_hooks.hit_breast] = handlers[ero_hooks.hit_breast_hard] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      hook.hook === ero_hooks.hit_breast_hard ? '힘껏 ' : '',
      defender.get_colored_name(),
      '의 가슴을 때렸다】',
    ]);

  handlers[ero_hooks.ask_hit_breast] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      !hook.arg ? '계속해서 ' : '',
      '자신의 가슴을 때려달라고 요청했다】',
    ]);

  handlers[ero_hooks.hit_face] = handlers[ero_hooks.hit_face_hard] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 뺨을 ',
      hook.hook === ero_hooks.hit_face_hard ? '힘껏 ' : '',
      '후려갈겼다】',
    ]);

  handlers[ero_hooks.hit_face_by_penis] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 ',
      defender.get_colored_name(),
      '의 뺨을 때렸다】',
    ]);

  handlers[ero_hooks.ask_hit_face] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      !hook.arg ? '다시 계속해서 ' : '',
      '자신의 뺨을 때려달라고 요청했다】',
    ]);

  handlers[ero_hooks.virgin_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 음부를 짓밟았다】',
    ]);

  handlers[ero_hooks.ask_virgin_foot_job] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      !hook.arg ? '계속해서 ' : '',
      '자신의 음부를 짓밟아달라고 요청했다】',
    ]);
};