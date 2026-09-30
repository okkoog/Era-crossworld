const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_supporter_prepare_virgin] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '의 지시 아래, ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 음순을 벌렸다】',
    ]);

  handlers[ero_hooks.ask_double_suck_nipple] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 자신의 유두를 함께 핥고 빨아달라고 요구했다】',
    ]);

  handlers[ero_hooks.double_suck_nipple] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 유두를 핥고 빨고 있다】',
    ]);

  handlers[ero_hooks.ask_double_blow_job] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '과(와) ',
      defender.get_colored_name(),
      '에게 자신의 육봉에 함께 봉사할 것을 요구했다】',
    ]);

  handlers[ero_hooks.double_blow_job] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 육봉에 봉사하고 있다】',
    ]);

  handlers[ero_hooks.ask_double_cunnilingus] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 자신의 클리토리스를 함께 핥아달라고 요구했다】',
    ]);

  handlers[ero_hooks.double_cunnilingus] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 클리토리스를 핥고 있다】',
    ]);

  handlers[ero_hooks.ask_double_suck_virgin] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 혀로 자신의 보지를 함께 핥아달라고 요구했다】',
    ]);

  handlers[ero_hooks.double_suck_virgin] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) 함께 혀로 ',
      defender.get_colored_name(),
      '의 보지를 핥고 있다】',
    ]);

  handlers[ero_hooks.ask_double_tit_job] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 가슴으로 자신의 육봉에 함께 봉사할 것을 요구했다】',
    ]);

  handlers[ero_hooks.double_tit_job] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) 함께 가슴으로 ',
      defender.get_colored_name(),
      '의 육봉에 봉사하고 있다】',
    ]);

  handlers[ero_hooks.ask_double_cowgirl] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 ',
      !hook.arg ? '계속해서 ' : '',
      '교대로 보지로 육봉을 삼켜달라고 요구했다】',
    ]);

  handlers[ero_hooks.ask_double_fuck] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 ',
      !hook.arg ? '계속해서 ' : '',
      '번갈아 가며 자신의 보지를 박아달라고 요구했다】',
    ]);

  handlers[ero_hooks.ask_double_penetration] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 ',
      !hook.arg ? '계속해서 ' : '',
      '앞뒤로 자신의 두 음란한 구멍을 박아달라고 요구했다】',
    ]);

  handlers[ero_hooks.ask_spit_roast] = handlers[
    ero_hooks.ask_spit_roast_anal_sex
  ] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 ',
      !hook.arg ? '계속해서 ' : '',
      '위아래로 자신의 입과 ',
      hook.hook === ero_hooks.ask_spit_roast ? '보지' : '애널',
      '를 박아달라고 요구했다】',
    ]);

  handlers[ero_hooks.ask_cunnilingus_with_fucking] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '에게 자신이 ',
      hook.arg ? '삽입할 ' : '박아댈 ',
      '때 ',
      defender.get_colored_name(),
      '의 요염한 클리토리스를 핥아달라고 요구했다】',
    ]);

  handlers[ero_hooks.fuck_69] = (attacker, defender, hook, extra_flag) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '과(와) ',
        get_chara_talk(extra_flag.supporter).get_colored_name(),
        '에게 69 자세를 취하게 한 뒤 자신이 삽입하겠다고 요구했다】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        get_chara_talk(extra_flag.supporter).get_colored_name(),
        '과(와) 69 자세로 서로 오랄을 해주고 있는 ',
        defender.get_colored_name(),
        '를 계속해서 박아대고 있다】',
      ]);
    }
  };

  handlers[ero_hooks.double_cowgirl] = (atk, def, hook, extra) =>
    era.printAndWait([
      '【',
      atk.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra.supporter).get_colored_name(),
      '의 보지가 교대로 ',
      def.get_colored_name(),
      '의 육봉을 삼키고 있다】',
    ]);

  handlers[ero_hooks.double_fuck] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) ',
      !hook.arg ? '계속해서 ' : '',
      '번갈아 가며 ',
      defender.get_colored_name(),
      '의 보지를 박아대고 있다】',
    ]);

  handlers[ero_hooks.double_penetration] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) ',
      !hook.arg ? '계속해서 ' : '',
      '앞뒤로 ',
      defender.get_colored_name(),
      '의 두 음란한 구멍을 박아대고 있다】',
    ]);

  handlers[ero_hooks.spit_roast] = handlers[ero_hooks.spit_roast_anal_sex] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      '은(는) ',
      !hook.arg ? '계속해서 ' : '',
      '위아래로 ',
      defender.get_colored_name(),
      '의 입과 ',
      hook.hook === ero_hooks.spit_roast ? '보지' : '애널',
      '를 박아대고 있다】',
    ]);
};