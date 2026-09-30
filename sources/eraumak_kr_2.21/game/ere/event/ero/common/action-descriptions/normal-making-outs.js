const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 귀를 쓰다듬었다】',
    ]);

  handlers[ero_hooks.pull_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 귀를 잡아당겼다】',
    ]);

  handlers[ero_hooks.pet_breast] = (attacker, defender) => {
    const touched = era.get(`tcvar:${defender.id}:질구접촉부위`);
    if (touched.part === part_enum.penis && touched.owner === attacker.id) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 가슴을 주물렀다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 가슴을 애무했다】',
    ]);
  };

  handlers[ero_hooks.pet_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 유두를 만지작거렸다】',
    ]);

  handlers[ero_hooks.pet_clitoris] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 민감한 클리토리스를 애무했다】',
    ]);

  handlers[ero_hooks.finger_fuck] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 비소에 손가락을 삽입했다】',
    ]);

  handlers[ero_hooks.prepare_virgin] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 음순을 벌렸다】',
    ]);

  handlers[ero_hooks.stimulate_g_spot_by_finger] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락으로 ',
      defender.get_colored_name(),
      '의 G스팟을 자극했다】',
    ]);

  handlers[ero_hooks.pet_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 애널을 부드럽게 쓰다듬었다】',
    ]);

  handlers[ero_hooks.prepare_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 애널을 벌렸다】',
    ]);

  handlers[ero_hooks.pet_leg] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 허벅지를 애무했다】',
    ]);

  handlers[ero_hooks.pet_tail] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 꼬리를 쓰다듬었다】',
    ]);

  handlers[ero_hooks.pull_tail] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 꼬리를 잡아당겼다】',
    ]);

  handlers[ero_hooks.cunnilingus] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 클리토리스를 핥았다】',
    ]);

  handlers[ero_hooks.ask_cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 클리토리스를 핥아달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 계속해서 클리토리스를 핥아달라고 졸랐다】',
    ]);
  };

  handlers[ero_hooks.force_cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 얼굴에 클리토리스를 들이밀었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 혀와 입술에 클리토리스를 문질렀다】',
    ]);
  };

  handlers[ero_hooks.suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 비소에 혀를 집어넣었다】',
      ]);
    }
    return era.printAndWait([
      '//【',
      attacker.get_colored_name(),
      '은(는) 혀로 ',
      defender.get_colored_name(),
      '의 비소를 희롱했다】',
    ]);
  };

  handlers[ero_hooks.ask_suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 비소를 핥아달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 계속 비소를 핥아달라고 졸랐다】',
    ]);
  };

  handlers[ero_hooks.force_suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 입술에 비소를 밀착시켰다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 혀와 입술에 비소를 문질렀다】',
    ]);
  };

  handlers[ero_hooks.ask_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 페니스를 물어달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 페니스를 핥아달라고 요청했다】',
    ]);
  };

  handlers[ero_hooks.ask_deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 깊숙이 물어달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 목구멍 깊은 곳까지 봉사해달라고 요청했다】',
    ]);
  };

  handlers[ero_hooks.force_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 입술에 페니스를 밀어 넣었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 페니스로 ',
      defender.get_colored_name(),
      '의 입안을 헤집었다】',
    ]);
  };

  handlers[ero_hooks.force_deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 목구멍 깊숙이 페니스를 쑤셔 넣었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 목구멍 안쪽을 휘저었다】',
    ]);
  };

  handlers[ero_hooks.blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 페니스를 입에 물었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 페니스를 핥았다】',
    ]);
  };

  handlers[ero_hooks.deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 페니스를 깊숙이 머금었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 목구멍 깊은 곳으로 ',
      defender.get_colored_name(),
      '의 페니스를 받아냈다】',
    ]);
  };

  handlers[ero_hooks.ask_hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 페니스를 쥐어달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 페니스를 계속해서 흔들어달라고 졸랐다】',
    ]);
  };

  handlers[ero_hooks.ask_hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 페니스를 만지면서 귀두를 물어달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 페니스를 흔들면서 귀두를 빨아달라고 졸랐다】',
    ]);
  };

  handlers[ero_hooks.force_hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 손에 페니스를 쥐어줬다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 페니스를 ',
      defender.get_colored_name(),
      '의 양손에 비벼댔다】',
    ]);
  };

  handlers[ero_hooks.force_hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 양손을 뿌리치고 입안에 페니스를 삽입했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '의 페니스가 ',
      defender.get_colored_name(),
      '의 손을 때리며 혀와 입술을 휘저었다】',
    ]);
  };

  handlers[ero_hooks.hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 페니스를 손으로 쥐었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 페니스를 흔들어주었다】',
    ]);
  };

  handlers[ero_hooks.hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 페니스를 만지며 입을 맞췄다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 페니스를 애무하며 핥았다】',
    ]);
  };

  handlers[ero_hooks.ask_tit_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 가슴으로 페니스를 끼워달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 가슴으로 봉사해달라고 졸랐다】',
    ]);
  };

  handlers[ero_hooks.ask_tit_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 가슴으로 비비며 귀두에 키스해달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 가슴으로 비비며 귀두를 빨아달라고 졸랐다】',
    ]);
  };

  handlers[ero_hooks.fuck_tit] = (attacker, defender, hook) => {
    if (hook.arg && defender.sex_code !== 1) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 가슴을 모아 페니스를 끼웠다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 페니스로 ',
      defender.get_colored_name(),
      '의 가슴을 문질렀다】',
    ]);
  };

  handlers[ero_hooks.fuck_tit_and_mouth] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 가슴 사이에 페니스를 끼워 입에 삽입했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 가슴을 문지르며 입안을 페니스로 헤집었다】',
    ]);
  };

  handlers[ero_hooks.tit_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 가슴을 모아 ',
        defender.get_colored_name(),
        '의 페니스를 감쌌다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 가슴을 위아래로 움직여 ',
      defender.get_colored_name(),
      '의 페니스를 문질렀다】',
    ]);
  };

  handlers[ero_hooks.tit_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 가슴으로 ',
        defender.get_colored_name(),
        '의 페니스를 문지르며 귀두를 입에 물었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 가슴으로 ',
      defender.get_colored_name(),
      '의 페니스를 문지르며 귀두를 빨았다】',
    ]);
  };

  handlers[ero_hooks.suck_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 애널을 핥았다】',
    ]);

  handlers[ero_hooks.suck_nipple] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      hook.arg ? '은(는) ' : '은(는) ',
      defender.get_colored_name(),
      hook.arg ? '의 유두를 입에 머금었다】' : '의 유두를 빨았다】',
    ]);

  handlers[ero_hooks.bite_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 유두를 살짝 깨물었다】',
    ]);

  handlers[ero_hooks.ask_milk_and_hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 유두를 빨게 해주면서 페니스를 만져달라고 요청했다】',
    ]);

  handlers[ero_hooks.milk] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 입에 유두를 밀어 넣었다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 자신의 유두를 빨게 했다】',
    ]);
  };

  handlers[ero_hooks.ask_bite_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 자신의 유두를 깨물어달라고 요청했다】',
    ]);

  handlers[ero_hooks.milk_and_hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 유두를 빨게 하면서 ',
      defender.get_colored_name(),
      '의 페니스를 애무했다】',
    ]);

  handlers[ero_hooks.ask_non_penetrative] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 허벅지로 페니스를 끼워달라고 요청했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 허벅지로 페니스를 문질러달라고 요청했다】',
    ]);
  };

  handlers[ero_hooks.non_penetrative] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 허벅지로 ',
        defender.get_colored_name(),
        '의 페니스를 꽉 끼웠다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 허벅지로 ',
      defender.get_colored_name(),
      '의 페니스를 문질렀다】',
    ]);
  };

  handlers[ero_hooks.sixty_nine] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '와(과) ',
        defender.get_colored_name(),
        '은(는) 69자세를 취했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      defender.get_colored_name(),
      '은(는) 69자세로 서로를 애무했다】',
    ]);
  };

  handlers[ero_hooks.ask_hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 머리카락으로 페니스를 감싸달라고 요구했다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 손바닥과 머리카락으로 페니스를 문질러달라고 요구했다】',
    ]);
  };

  handlers[ero_hooks.force_hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 머리카락으로 페니스를 감쌌다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 페니스를 ',
      defender.get_colored_name(),
      '의 머리카락에 문질렀다】',
    ]);
  };

  handlers[ero_hooks.hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 머리카락으로 ',
        defender.get_colored_name(),
        '의 페니스를 감쌌다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손바닥과 머리카락으로 ',
      defender.get_colored_name(),
      '의 페니스를 문질러주었다】',
    ]);
  };

  handlers[ero_hooks.ask_armpit_intercourse] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 겨드랑이로 페니스를 문질러달라고 요청했다】',
    ]);

  handlers[ero_hooks.force_armpit_intercourse] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 팔을 들어 올려 겨드랑이에 페니스를 문질렀다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 계속해서 ',
      defender.get_colored_name(),
      '의 겨드랑이에 페니스를 비벼댔다】',
    ]);
  };

  handlers[ero_hooks.armpit_intercourse] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 겨드랑이로 ',
      defender.get_colored_name(),
      '의 페니스를 문질렀다】',
    ]);

  handlers[ero_hooks.ask_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 발로 페니스를 밟아달라고 요청했다】',
    ]);

  handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 페니스로 ',
      defender.get_colored_name(),
      '의 발을 자극했다】',
    ]);

  handlers[ero_hooks.foot_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 발이 ',
        defender.get_colored_name(),
        '의 페니스를 밟았다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 발로 ',
      defender.get_colored_name(),
      '의 페니스를 밟아 문질렀다】',
    ]);
  };

  handlers[ero_hooks.ask_tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 꼬리로 봉사해달라고 요청했다】',
    ]);

  handlers[ero_hooks.force_tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 꼬리를 끌어당겨 페니스를 감쌌다】',
    ]);

  handlers[ero_hooks.tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 꼬리로 ',
      defender.get_colored_name(),
      '의 페니스를 휘감아 애무했다】',
    ]);

  handlers[ero_hooks.tribbing] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 하체에 밀착해 서로의 음핵을 맞대어 문질렀다】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      defender.get_colored_name(),
      '은(는) 계속해서 서로의 음핵을 비벼댔다】',
    ]);
  };

  handlers[ero_hooks.self_pet_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 가슴을 만지작거렸다】',
    ]);

  handlers[ero_hooks.self_hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 페니스를 흔들었다】',
    ]);

  handlers[ero_hooks.self_pet_clitoris] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 음핵을 만지작거렸다】',
    ]);

  handlers[ero_hooks.self_finger_fuck] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 비소에 손가락을 쑤셔 넣었다】',
    ]);

  handlers[ero_hooks.self_pet_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 항문을 자극했다】',
    ]);
};