const { printAndWait } = require('#/era-electron');
const base = require('#/i18n/ja-JP/timon/sex/act-desc-common');

const era = require('#/era-electron');
const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const reused_make_handlers = {};

(() => {
  reused_make_handlers[ero_hooks.pet_ear] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 귀를 쓰다듬었다】',
      ]);

  reused_make_handlers[ero_hooks.pull_ear] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 귀를 잡아당겼다】',
      ]);

  reused_make_handlers[ero_hooks.pet_breast] = (attacker, defender) => {
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

  reused_make_handlers[ero_hooks.pet_nipple] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 유두를 만지작거렸다】',
      ]);

  reused_make_handlers[ero_hooks.pet_clitoris] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 민감한 클리토리스를 애무했다】',
      ]);

  reused_make_handlers[ero_hooks.finger_fuck] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 비소에 손가락을 삽입했다】',
      ]);

  reused_make_handlers[ero_hooks.prepare_virgin] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 음순을 벌렸다】',
      ]);

  reused_make_handlers[ero_hooks.stimulate_g_spot_by_finger] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 손가락으로 ',
        defender.get_colored_name(),
        '의 G스팟을 자극했다】',
      ]);

  reused_make_handlers[ero_hooks.pet_anal] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 애널을 부드럽게 쓰다듬었다】',
      ]);

  reused_make_handlers[ero_hooks.prepare_anal] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 애널을 벌렸다】',
      ]);

  reused_make_handlers[ero_hooks.pet_leg] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 허벅지를 애무했다】',
      ]);

  reused_make_handlers[ero_hooks.pet_tail] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 꼬리를 쓰다듬었다】',
      ]);

  reused_make_handlers[ero_hooks.pull_tail] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 꼬리를 잡아당겼다】',
      ]);

  reused_make_handlers[ero_hooks.cunnilingus] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 클리토리스를 핥았다】',
      ]);

  reused_make_handlers[ero_hooks.ask_cunnilingus] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_cunnilingus] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.suck_virgin] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_suck_virgin] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_suck_virgin] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_deep_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_deep_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.deep_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_hand_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_hand_and_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_hand_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_hand_and_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.hand_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.hand_and_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_tit_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_tit_and_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.fuck_tit] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.fuck_tit_and_mouth] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.tit_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.tit_and_blow_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.suck_anal] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 애널을 핥았다】',
      ]);

  reused_make_handlers[ero_hooks.suck_nipple] = (attacker, defender, hook) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        hook.arg ? '은(는) ' : '은(는) ',
        defender.get_colored_name(),
        hook.arg ? '의 유두를 입에 머금었다】' : '의 유두를 빨았다】',
      ]);

  reused_make_handlers[ero_hooks.bite_nipple] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 유두를 살짝 깨물었다】',
      ]);

  reused_make_handlers[ero_hooks.ask_milk_and_hand_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 유두를 빨게 해주면서 페니스를 만져달라고 요청했다】',
      ]);

  reused_make_handlers[ero_hooks.milk] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_bite_nipple] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 자신의 유두를 깨물어달라고 요청했다】',
      ]);

  reused_make_handlers[ero_hooks.milk_and_hand_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 유두를 빨게 하면서 ',
        defender.get_colored_name(),
        '의 페니스를 애무했다】',
      ]);

  reused_make_handlers[ero_hooks.ask_non_penetrative] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.non_penetrative] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.sixty_nine] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_hair_fuck] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.force_hair_fuck] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.hair_fuck] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_armpit_intercourse] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 겨드랑이로 페니스를 문질러달라고 요청했다】',
      ]);

  reused_make_handlers[ero_hooks.force_armpit_intercourse] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.armpit_intercourse] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 겨드랑이로 ',
        defender.get_colored_name(),
        '의 페니스를 문질렀다】',
      ]);

  reused_make_handlers[ero_hooks.ask_foot_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 발로 페니스를 밟아달라고 요청했다】',
      ]);

  reused_make_handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 페니스로 ',
        defender.get_colored_name(),
        '의 발을 자극했다】',
      ]);

  reused_make_handlers[ero_hooks.foot_job] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.ask_tail_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 꼬리로 봉사해달라고 요청했다】',
      ]);

  reused_make_handlers[ero_hooks.force_tail_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 꼬리를 끌어당겨 페니스를 감쌌다】',
      ]);

  reused_make_handlers[ero_hooks.tail_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 꼬리로 ',
        defender.get_colored_name(),
        '의 페니스를 휘감아 애무했다】',
      ]);

  reused_make_handlers[ero_hooks.tribbing] = (attacker, defender, hook) => {
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

  reused_make_handlers[ero_hooks.self_pet_nipple] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 앞에서 자신의 가슴을 만지작거렸다】',
      ]);

  reused_make_handlers[ero_hooks.self_hand_job] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 앞에서 자신의 페니스를 흔들었다】',
      ]);

  reused_make_handlers[ero_hooks.self_pet_clitoris] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 앞에서 자신의 음핵을 만지작거렸다】',
      ]);

  reused_make_handlers[ero_hooks.self_finger_fuck] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 앞에서 자신의 비소에 손가락을 쑤셔 넣었다】',
      ]);

  reused_make_handlers[ero_hooks.self_pet_anal] = (attacker, defender) =>
      era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 앞에서 자신의 항문을 자극했다】',
      ]);
})();


const reused_fuck_handlers = {};

(() => {
  reused_fuck_handlers[ero_hooks.missionary] = reused_fuck_handlers[ero_hooks.missionary_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 정상위로 ',
          defender.get_colored_name(),
          `의 ${hook.hook === ero_hooks.missionary ? '보지' : '항문'}에 삽입했다】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 정상위로 ',
          defender.get_colored_name(),
          `의 ${hook.hook === ero_hooks.missionary ? '보지' : '항문'}를 유린하고 있다】`,
        ]);
      }
    };

  reused_fuck_handlers[ero_hooks.doggy_style] = reused_fuck_handlers[ero_hooks.doggy_style_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 후배위로 ',
          defender.get_colored_name(),
          `의 ${hook.hook === ero_hooks.doggy_style ? '보지' : '항문'}에 삽입했다】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 후배위로 ',
          defender.get_colored_name(),
          `의 ${hook.hook === ero_hooks.doggy_style ? '보지' : '항문'}를 유린하고 있다】`,
        ]);
      }
    };

  reused_fuck_handlers[ero_hooks.sitting] = reused_fuck_handlers[ero_hooks.sitting_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 앉아, 육봉을 ',
        defender.get_colored_name(),
        `의 ${hook.hook === ero_hooks.sitting ? '보지' : '항문'}에 삽입했다】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 와(과) ',
        defender.get_colored_name(),
        `이(가) 마주 앉은 채, 육봉으로 ${
          hook.hook === ero_hooks.sitting ? '보지' : '항문'
        }를 유린하고 있다】`,
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.hug_sitting] = reused_fuck_handlers[ero_hooks.hug_sitting_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 등을 돌리고 앉은 ',
          defender.get_colored_name(),
          `을(를) 품에 안은 채, ${
            hook.hook === ero_hooks.hug_sitting ? '보지' : '항문'
          }에 육봉을 삽입했다】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) ',
          defender.get_colored_name(),
          `을(를) 품에 안고 앉아, 육봉으로 ${
            hook.hook === ero_hooks.hug_sitting ? '보지' : '항문'
          }를 유린하고 있다】`,
        ]);
      }
    };

  reused_fuck_handlers[ero_hooks.standing] = reused_fuck_handlers[ero_hooks.standing_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 와(과) ',
        defender.get_colored_name(),
        `이(가) 마주 선 채로, ${
          hook.hook === ero_hooks.standing ? '보지' : '항문'
        }에 육봉을 삽입했다】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) 마주 선 채로 육봉을 움직여 ',
        defender.get_colored_name(),
        `의 ${hook.hook === ero_hooks.standing ? '보지' : '항문'}를 유린하고 있다】`,
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.hug_standing] = reused_fuck_handlers[ero_hooks.hug_standing_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 선 채로 ',
          defender.get_colored_name(),
          `을(를) 품에 끼고, 육봉을 ${
            hook.hook === ero_hooks.hug_standing ? '보지' : '항문'
          }에 삽입했다】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 뒤에서 육봉으로 ',
          defender.get_colored_name(),
          `의 ${hook.hook === ero_hooks.hug_standing ? '보지' : '항문'}를 유린하자, `,
          defender.get_colored_name(),
          '은(는) 양손으로 벽을 짚으며 버텼다】',
        ]);
      }
    };

  reused_fuck_handlers[ero_hooks.suspended_congress] = reused_fuck_handlers[
    ero_hooks.suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) ',
        defender.get_colored_name(),
        `을(를) 들어 올려 고정한 채, 육봉을 ${
          hook.hook === ero_hooks.suspended_congress ? '보지' : '항문'
        }에 삽입했다】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 의 육봉이 공중에 들린 ',
        defender.get_colored_name(),
        `의 ${
          hook.hook === ero_hooks.suspended_congress ? '보지' : '항문'
        }를 유린하고 있다】`,
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.fucked_suspended_congress] = reused_fuck_handlers[
    ero_hooks.fucked_suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) ',
        defender.get_colored_name(),
        ' 를 들어 올려 고정한 채, 자신의 ',
        hook.hook === ero_hooks.fucked_suspended_congress ? '보지' : '항문',
        '로 ',
        defender.get_colored_name(),
        ' 의 육봉을 받아들였다】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) 자신의 ',
        hook.hook === ero_hooks.fucked_suspended_congress ? '질' : '직장',
        '로 ',
        defender.get_colored_name(),
        ' 의 공중에 뜬 육봉을 조여댔다】',
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.hug_suspended_congress] = reused_fuck_handlers[
    ero_hooks.hug_suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) 등을 돌린 ',
        defender.get_colored_name(),
        `을(를) 들어 올려 고정하고, 육봉을 ${
          hook.hook === ero_hooks.hug_suspended_congress ? '보지' : '항문'
        }에 삽입했다】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 의 육봉이 등을 돌린 채 공중에 들린 ',
        defender.get_colored_name(),
        `의 ${
          hook.hook === ero_hooks.hug_suspended_congress ? '보지' : '항문'
        }를 유린하고 있다】`,
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.ask_cowgirl] = reused_fuck_handlers[ero_hooks.ask_cowgirl_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) ',
          defender.get_colored_name(),
          ` 에게 위에 올라타서 ${
            hook.hook === ero_hooks.ask_cowgirl ? '보지' : '항문'
          }로 육봉을 삼켜달라고 요청했다】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          '이(가) 위에 올라탄 ',
          defender.get_colored_name(),
          ` 에게 계속해서 ${
            hook.hook === ero_hooks.ask_cowgirl ? '보지' : '항문'
          }로 육봉을 조여달라고 요청했다】`,
        ]);
      }
    };

  reused_fuck_handlers[ero_hooks.ask_stimulate_glans_by_virgin] = reused_fuck_handlers[
    ero_hooks.ask_stimulate_glans_by_anal
  ] = async (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ` 에게 ${
        hook.hook === ero_hooks.ask_stimulate_glans_by_virgin ? '보지' : '항문'
      }로 육봉을 자극해달라고 요청했다】`,
    ]);

  reused_fuck_handlers[ero_hooks.stimulate_g_spot] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 ',
      defender.get_colored_name(),
      ' 의 G스팟을 집요하게 자극했다】',
    ]);

  reused_fuck_handlers[ero_hooks.stimulate_large_intestine] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 ',
      defender.get_colored_name(),
      ' 의 S상 결장을 찔러댔다】',
    ]);

  reused_fuck_handlers[ero_hooks.stimulate_womb] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 항문을 통해 ',
      defender.get_colored_name(),
      ' 의 자궁 부근을 자극했다】',
    ]);

  reused_fuck_handlers[ero_hooks.ask_fuck] = reused_fuck_handlers[ero_hooks.ask_fuck_anal] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) ',
        defender.get_colored_name(),
        ` 에게 자신의 ${hook.hook === ero_hooks.ask_fuck ? '보지' : '항문'}에 삽입해달라고 요청했다】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) ',
        defender.get_colored_name(),
        ` 에게 계속해서 자신의 ${
          hook.hook === ero_hooks.ask_fuck ? '보지' : '항문'
        }를 범해달라고 요청했다】`,
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.cowgirl] = reused_fuck_handlers[ero_hooks.cowgirl_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) ',
        defender.get_colored_name(),
        `의 위에 올라타, ${
          hook.hook === ero_hooks.cowgirl ? '보지' : '항문'
        }로 육봉을 삼켰다】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '이(가) ',
        defender.get_colored_name(),
        `의 위에 올라탄 채, 자신의 ${
          hook.hook === ero_hooks.cowgirl ? '보지' : '항문'
        }로 육봉을 조여댔다】`,
      ]);
    }
  };

  reused_fuck_handlers[ero_hooks.stimulate_glans_by_virgin] = reused_fuck_handlers[
    ero_hooks.stimulate_glans_by_anal
  ] = async (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      `이(가) ${
        hook.hook === ero_hooks.stimulate_glans_by_virgin ? '보지' : '항문'
      }로 `,
      defender.get_colored_name(),
      ' 의 육봉을 조여 자극했다】',
    ]);

  reused_fuck_handlers[ero_hooks.ask_stimulate_g_spot] = async (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '에게 육봉으로 G스팟을 자극해달라고 요청했다】',
    ]);

  reused_fuck_handlers[ero_hooks.ask_stimulate_large_intestine] = async (
    attacker,
    defender,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '에게 육봉으로 S자 결장을 자극해달라고 요청했다】',
    ]);

  reused_fuck_handlers[ero_hooks.ask_stimulate_womb] = async (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '에게 육봉으로 항문을 통해 자궁을 자극해달라고 요청했다】',
    ]);
})();

module.exports = {
  ...base,

  async go_on(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 저항을 포기하고 ',
      defender.get_colored_name(),
      '의 뜻대로 내버려 두었다】',
    ]);
  },

  async kiss(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      is_first ? '은(는) ' : '은(는) 계속 ',
      defender.get_colored_name(),
      '의 입술에 키스했다】',
    ]);
  },

  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) 혀를 섞었다】',
    ]);
  },

  async lure(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '을(를) 유혹했다】',
    ]);
  },

  async talk(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과 같이 대화했다】',
    ]);
  },

  async passive_switch(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 당분간 하고 싶지 않아하는 것 같다】',
    ]);
  },

  async active_switch(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 주도권을 넘겨주었다】',
    ]);
  },

  async resist(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 주도권을 잡기 위해 저항을 시도했다】',
    ]);
  },

  async gargle(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는)',
      defender.get_colored_name(),
      '과 함께 양치질했다】',
    ]);
  },

  async wipe_body(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 자신과 ',
      defender.get_colored_name(),
      '의 몸을 닦았다】',
    ]);
  },

  async ask_supporter_prepare_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '의 지시 아래, ',
      supporter.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 음순을 벌렸다】',
    ]);
  },

  async ask_double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 자신의 유두를 함께 핥고 빨아달라고 요구했다】',
    ]);
  },

  async double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 유두를 핥고 빨고 있다】',
    ]);
  },

  async ask_double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      supporter.get_colored_name(),
      '과(와) ',
      defender.get_colored_name(),
      '에게 자신의 육봉에 함께 봉사할 것을 요구했다】',
    ]);
  },

  async double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 육봉에 봉사하고 있다】',
    ]);
  },

  async ask_double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 자신의 클리토리스를 함께 핥아달라고 요구했다】',
    ]);
  },

  async double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 클리토리스를 핥고 있다】',
    ]);
  },

  async ask_double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 혀로 자신의 보지를 함께 핥아달라고 요구했다】',
    ]);
  },

  async double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) 함께 혀로 ',
      defender.get_colored_name(),
      '의 보지를 핥고 있다】',
    ]);
  },

  async ask_double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 가슴으로 자신의 육봉에 함께 봉사할 것을 요구했다】',
    ]);
  },

  async double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) 함께 가슴으로 ',
      defender.get_colored_name(),
      '의 육봉에 봉사하고 있다】',
    ]);
  },

  async ask_double_cowgirl(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 ',
      is_first ? '' : '계속해서 ',
      '교대로 보지로 육봉을 삼켜달라고 요구했다】',
    ]);
  },

  async ask_double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 ',
      is_first ? '' : '계속해서 ',
      '번갈아 가며 자신의 보지를 박아달라고 요구했다】',
    ]);
  },

  async ask_double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 ',
      is_first ? '' : '계속해서 ',
      '앞뒤로 자신의 두 음란한 구멍을 박아달라고 요구했다】',
    ]);
  },

  async ask_spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 ',
      is_first ? '' : '계속해서 ',
      '위아래로 자신의 입과 보지를 박아달라고 요구했다】',
    ]);
  },

  async ask_spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '에게 ',
      is_first ? '' : '계속해서 ',
      '위아래로 자신의 입과 애널을 박아달라고 요구했다】',
    ]);
  },

  async ask_cunnilingus_with_fucking(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      supporter.get_colored_name(),
      '에게 자신이 ',
      is_first ? '삽입할 ' : '박아댈 ',
      '때 ',
      defender.get_colored_name(),
      '의 요염한 클리토리스를 핥아달라고 요구했다】',
    ]);
  },

  async fuck_69(attacker, defender, supporter, is_first) {
    if (is_first) {
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '과(와) ',
        supporter.get_colored_name(),
        '에게 69 자세를 취하게 한 뒤 자신이 삽입하겠다고 요구했다】',
      ]);
    } else {
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        supporter.get_colored_name(),
        '과(와) 69 자세로 서로 오랄을 해주고 있는 ',
        defender.get_colored_name(),
        '를 계속해서 박아대고 있다】',
      ]);
    }
  },

  async double_cowgirl(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '의 보지가 교대로 ',
      defender.get_colored_name(),
      '의 육봉을 삼키고 있다】',
    ]);
  },

  async double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) ',
      is_first ? '' : '계속해서 ',
      '번갈아 가며 ',
      defender.get_colored_name(),
      '의 보지를 박아대고 있다】',
    ]);
  },

  async double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) ',
      is_first ? '' : '계속해서 ',
      '앞뒤로 ',
      defender.get_colored_name(),
      '의 두 음란한 구멍을 박아대고 있다】',
    ]);
  },

  async spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) ',
      is_first ? '' : '계속해서 ',
      '위아래로 ',
      defender.get_colored_name(),
      '의 입과 보지를 박아대고 있다】',
    ]);
  },

  async spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '은(는) ',
      is_first ? '' : '계속해서 ',
      '위아래로 ',
      defender.get_colored_name(),
      '의 입과 애널을 박아대고 있다】',
    ]);
  },

  async insult(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 이(가) ',
      defender.get_colored_name(),
      '을(를) 매도했다】',
    ]);
  },

  async ask_insult(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      is_first ? '' : '계속해서 ',
      '자신을 매도해달라고 요청했다】',
    ]);
  },

  async hit_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 엉덩이를 때렸다】',
    ]);
  },

  async hit_anal_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 힘껏 ',
      defender.get_colored_name(),
      '의 엉덩이를 때렸다】',
    ]);
  },

  async ask_hit_anal(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      is_first ? '' : '계속해서 ',
      '자신의 엉덩이를 때려달라고 요청했다】',
    ]);
  },

  async hit_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 가슴을 때렸다】',
    ]);
  },

  async hit_breast_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 힘껏 ',
      defender.get_colored_name(),
      '의 가슴을 때렸다】',
    ]);
  },

  async ask_hit_breast(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      is_first ? '' : '계속해서 ',
      '자신의 가슴을 때려달라고 요청했다】',
    ]);
  },

  async hit_face(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 뺨을 후려갈겼다】',
    ]);
  },

  async hit_face_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 뺨을 힘껏 후려갈겼다】',
    ]);
  },

  async hit_face_by_penis(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 ',
      defender.get_colored_name(),
      '의 뺨을 때렸다】',
    ]);
  },

  async ask_hit_face(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      is_first ? '' : '다시 계속해서 ',
      '자신의 뺨을 때려달라고 요청했다】',
    ]);
  },

  async virgin_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '의 음부를 짓밟았다】',
    ]);
  },

  async ask_virgin_foot_job(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      ' 에게 ',
      is_first ? '' : '계속해서 ',
      '자신의 음부를 짓밟아달라고 요청했다】',
    ]);
  },


  // Reused from EraUmaK 2.21 normal-making-outs.js
  async pet_ear(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_ear](attacker, defender);
  },

  async pull_ear(attacker, defender) {
    return reused_make_handlers[ero_hooks.pull_ear](attacker, defender);
  },

  async pet_breast(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_breast](attacker, defender);
  },

  async pet_nipple(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_nipple](attacker, defender);
  },

  async pet_clitoris(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_clitoris](attacker, defender);
  },

  async finger_fuck(attacker, defender) {
    return reused_make_handlers[ero_hooks.finger_fuck](attacker, defender);
  },

  async prepare_virgin(attacker, defender) {
    return reused_make_handlers[ero_hooks.prepare_virgin](attacker, defender);
  },

  async stimulate_g_spot_by_finger(attacker, defender) {
    return reused_make_handlers[ero_hooks.stimulate_g_spot_by_finger](attacker, defender);
  },

  async pet_anal(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_anal](attacker, defender);
  },

  async prepare_anal(attacker, defender) {
    return reused_make_handlers[ero_hooks.prepare_anal](attacker, defender);
  },

  async pet_leg(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_leg](attacker, defender);
  },

  async pet_tail(attacker, defender) {
    return reused_make_handlers[ero_hooks.pet_tail](attacker, defender);
  },

  async pull_tail(attacker, defender) {
    return reused_make_handlers[ero_hooks.pull_tail](attacker, defender);
  },

  async cunnilingus(attacker, defender) {
    return reused_make_handlers[ero_hooks.cunnilingus](attacker, defender);
  },

  async ask_cunnilingus(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_cunnilingus](attacker, defender, { arg: is_first });
  },

  async force_cunnilingus(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_cunnilingus](attacker, defender, { arg: is_first });
  },

  async suck_virgin(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.suck_virgin](attacker, defender, { arg: is_first });
  },

  async ask_suck_virgin(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_suck_virgin](attacker, defender, { arg: is_first });
  },

  async force_suck_virgin(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_suck_virgin](attacker, defender, { arg: is_first });
  },

  async ask_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_blow_job](attacker, defender, { arg: is_first });
  },

  async ask_deep_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_deep_blow_job](attacker, defender, { arg: is_first });
  },

  async force_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_blow_job](attacker, defender, { arg: is_first });
  },

  async force_deep_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_deep_blow_job](attacker, defender, { arg: is_first });
  },

  async blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.blow_job](attacker, defender, { arg: is_first });
  },

  async deep_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.deep_blow_job](attacker, defender, { arg: is_first });
  },

  async ask_hand_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_hand_job](attacker, defender, { arg: is_first });
  },

  async ask_hand_and_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_hand_and_blow_job](attacker, defender, { arg: is_first });
  },

  async force_hand_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_hand_job](attacker, defender, { arg: is_first });
  },

  async force_hand_and_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_hand_and_blow_job](attacker, defender, { arg: is_first });
  },

  async hand_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.hand_job](attacker, defender, { arg: is_first });
  },

  async hand_and_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.hand_and_blow_job](attacker, defender, { arg: is_first });
  },

  async ask_tit_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_tit_job](attacker, defender, { arg: is_first });
  },

  async ask_tit_and_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_tit_and_blow_job](attacker, defender, { arg: is_first });
  },

  async fuck_tit(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.fuck_tit](attacker, defender, { arg: is_first });
  },

  async fuck_tit_and_mouth(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.fuck_tit_and_mouth](attacker, defender, { arg: is_first });
  },

  async tit_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.tit_job](attacker, defender, { arg: is_first });
  },

  async tit_and_blow_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.tit_and_blow_job](attacker, defender, { arg: is_first });
  },

  async suck_anal(attacker, defender) {
    return reused_make_handlers[ero_hooks.suck_anal](attacker, defender);
  },

  async suck_nipple(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.suck_nipple](attacker, defender, { arg: is_first });
  },

  async bite_nipple(attacker, defender) {
    return reused_make_handlers[ero_hooks.bite_nipple](attacker, defender);
  },

  async ask_milk_and_hand_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.ask_milk_and_hand_job](attacker, defender);
  },

  async milk(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.milk](attacker, defender, { arg: is_first });
  },

  async ask_bite_nipple(attacker, defender) {
    return reused_make_handlers[ero_hooks.ask_bite_nipple](attacker, defender);
  },

  async milk_and_hand_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.milk_and_hand_job](attacker, defender);
  },

  async ask_non_penetrative(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_non_penetrative](attacker, defender, { arg: is_first });
  },

  async non_penetrative(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.non_penetrative](attacker, defender, { arg: is_first });
  },

  async sixty_nine(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.sixty_nine](attacker, defender, { arg: is_first });
  },

  async ask_hair_fuck(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.ask_hair_fuck](attacker, defender, { arg: is_first });
  },

  async force_hair_fuck(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_hair_fuck](attacker, defender, { arg: is_first });
  },

  async hair_fuck(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.hair_fuck](attacker, defender, { arg: is_first });
  },

  async ask_armpit_intercourse(attacker, defender) {
    return reused_make_handlers[ero_hooks.ask_armpit_intercourse](attacker, defender);
  },

  async force_armpit_intercourse(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.force_armpit_intercourse](attacker, defender, { arg: is_first });
  },

  async armpit_intercourse(attacker, defender) {
    return reused_make_handlers[ero_hooks.armpit_intercourse](attacker, defender);
  },

  async ask_foot_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.ask_foot_job](attacker, defender);
  },

  async force_foot_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.force_foot_job](attacker, defender);
  },

  async foot_job(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.foot_job](attacker, defender, { arg: is_first });
  },

  async ask_tail_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.ask_tail_job](attacker, defender);
  },

  async force_tail_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.force_tail_job](attacker, defender);
  },

  async tail_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.tail_job](attacker, defender);
  },

  async tribbing(attacker, defender, is_first) {
    return reused_make_handlers[ero_hooks.tribbing](attacker, defender, { arg: is_first });
  },

  async self_pet_nipple(attacker, defender) {
    return reused_make_handlers[ero_hooks.self_pet_nipple](attacker, defender);
  },

  async self_hand_job(attacker, defender) {
    return reused_make_handlers[ero_hooks.self_hand_job](attacker, defender);
  },

  async self_pet_clitoris(attacker, defender) {
    return reused_make_handlers[ero_hooks.self_pet_clitoris](attacker, defender);
  },

  async self_finger_fuck(attacker, defender) {
    return reused_make_handlers[ero_hooks.self_finger_fuck](attacker, defender);
  },

  async self_pet_anal(attacker, defender) {
    return reused_make_handlers[ero_hooks.self_pet_anal](attacker, defender);
  },


  // Reused from EraUmaK 2.21 normal-fucking.js
  async missionary(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.missionary](
      attacker,
      defender,
      { hook: ero_hooks.missionary, arg: is_first },
    );
  },

  async missionary_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.missionary_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.missionary_anal_sex, arg: is_first },
    );
  },

  async doggy_style(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.doggy_style](
      attacker,
      defender,
      { hook: ero_hooks.doggy_style, arg: is_first },
    );
  },

  async doggy_style_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.doggy_style_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.doggy_style_anal_sex, arg: is_first },
    );
  },

  async sitting(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.sitting](
      attacker,
      defender,
      { hook: ero_hooks.sitting, arg: is_first },
    );
  },

  async sitting_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.sitting_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.sitting_anal_sex, arg: is_first },
    );
  },

  async hug_sitting(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.hug_sitting](
      attacker,
      defender,
      { hook: ero_hooks.hug_sitting, arg: is_first },
    );
  },

  async hug_sitting_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.hug_sitting_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.hug_sitting_anal_sex, arg: is_first },
    );
  },

  async standing(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.standing](
      attacker,
      defender,
      { hook: ero_hooks.standing, arg: is_first },
    );
  },

  async standing_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.standing_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.standing_anal_sex, arg: is_first },
    );
  },

  async hug_standing(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.hug_standing](
      attacker,
      defender,
      { hook: ero_hooks.hug_standing, arg: is_first },
    );
  },

  async hug_standing_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.hug_standing_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.hug_standing_anal_sex, arg: is_first },
    );
  },

  async suspended_congress(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.suspended_congress](
      attacker,
      defender,
      { hook: ero_hooks.suspended_congress, arg: is_first },
    );
  },

  async suspended_congress_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.suspended_congress_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.suspended_congress_anal_sex, arg: is_first },
    );
  },

  async fucked_suspended_congress(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.fucked_suspended_congress](
      attacker,
      defender,
      { hook: ero_hooks.fucked_suspended_congress, arg: is_first },
    );
  },

  async fucked_suspended_congress_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.fucked_suspended_congress_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.fucked_suspended_congress_anal_sex, arg: is_first },
    );
  },

  async hug_suspended_congress(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.hug_suspended_congress](
      attacker,
      defender,
      { hook: ero_hooks.hug_suspended_congress, arg: is_first },
    );
  },

  async hug_suspended_congress_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.hug_suspended_congress_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.hug_suspended_congress_anal_sex, arg: is_first },
    );
  },

  async ask_cowgirl(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.ask_cowgirl](
      attacker,
      defender,
      { hook: ero_hooks.ask_cowgirl, arg: is_first },
    );
  },

  async ask_cowgirl_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.ask_cowgirl_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.ask_cowgirl_anal_sex, arg: is_first },
    );
  },

  async ask_stimulate_glans_by_virgin(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.ask_stimulate_glans_by_virgin](
      attacker,
      defender,
      { hook: ero_hooks.ask_stimulate_glans_by_virgin },
    );
  },

  async ask_stimulate_glans_by_anal(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.ask_stimulate_glans_by_anal](
      attacker,
      defender,
      { hook: ero_hooks.ask_stimulate_glans_by_anal },
    );
  },

  async stimulate_g_spot(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.stimulate_g_spot](
      attacker,
      defender,
      { hook: ero_hooks.stimulate_g_spot },
    );
  },

  async stimulate_large_intestine(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.stimulate_large_intestine](
      attacker,
      defender,
      { hook: ero_hooks.stimulate_large_intestine },
    );
  },

  async stimulate_womb(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.stimulate_womb](
      attacker,
      defender,
      { hook: ero_hooks.stimulate_womb },
    );
  },

  async ask_fuck(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.ask_fuck](
      attacker,
      defender,
      { hook: ero_hooks.ask_fuck, arg: is_first },
    );
  },

  async ask_fuck_anal(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.ask_fuck_anal](
      attacker,
      defender,
      { hook: ero_hooks.ask_fuck_anal, arg: is_first },
    );
  },

  async cowgirl(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.cowgirl](
      attacker,
      defender,
      { hook: ero_hooks.cowgirl, arg: is_first },
    );
  },

  async cowgirl_anal_sex(attacker, defender, is_first) {
    return reused_fuck_handlers[ero_hooks.cowgirl_anal_sex](
      attacker,
      defender,
      { hook: ero_hooks.cowgirl_anal_sex, arg: is_first },
    );
  },

  async stimulate_glans_by_virgin(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.stimulate_glans_by_virgin](
      attacker,
      defender,
      { hook: ero_hooks.stimulate_glans_by_virgin },
    );
  },

  async stimulate_glans_by_anal(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.stimulate_glans_by_anal](
      attacker,
      defender,
      { hook: ero_hooks.stimulate_glans_by_anal },
    );
  },

  async ask_stimulate_g_spot(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.ask_stimulate_g_spot](
      attacker,
      defender,
      { hook: ero_hooks.ask_stimulate_g_spot },
    );
  },

  async ask_stimulate_large_intestine(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.ask_stimulate_large_intestine](
      attacker,
      defender,
      { hook: ero_hooks.ask_stimulate_large_intestine },
    );
  },

  async ask_stimulate_womb(attacker, defender) {
    return reused_fuck_handlers[ero_hooks.ask_stimulate_womb](
      attacker,
      defender,
      { hook: ero_hooks.ask_stimulate_womb },
    );
  },

};
