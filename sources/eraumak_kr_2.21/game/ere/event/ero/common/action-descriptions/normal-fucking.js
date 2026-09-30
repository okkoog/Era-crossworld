const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = handlers[ero_hooks.missionary_anal_sex] =
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

  handlers[ero_hooks.doggy_style] = handlers[ero_hooks.doggy_style_anal_sex] =
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

  handlers[ero_hooks.sitting] = handlers[ero_hooks.sitting_anal_sex] = async (
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

  handlers[ero_hooks.hug_sitting] = handlers[ero_hooks.hug_sitting_anal_sex] =
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

  handlers[ero_hooks.standing] = handlers[ero_hooks.standing_anal_sex] = async (
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

  handlers[ero_hooks.hug_standing] = handlers[ero_hooks.hug_standing_anal_sex] =
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

  handlers[ero_hooks.suspended_congress] = handlers[
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

  handlers[ero_hooks.fucked_suspended_congress] = handlers[
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

  handlers[ero_hooks.hug_suspended_congress] = handlers[
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

  handlers[ero_hooks.ask_cowgirl] = handlers[ero_hooks.ask_cowgirl_anal_sex] =
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

  handlers[ero_hooks.ask_stimulate_glans_by_virgin] = handlers[
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

  handlers[ero_hooks.stimulate_g_spot] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 ',
      defender.get_colored_name(),
      ' 의 G스팟을 집요하게 자극했다】',
    ]);

  handlers[ero_hooks.stimulate_large_intestine] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 ',
      defender.get_colored_name(),
      ' 의 S상 결장을 찔러댔다】',
    ]);

  handlers[ero_hooks.stimulate_womb] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) 육봉으로 항문을 통해 ',
      defender.get_colored_name(),
      ' 의 자궁 부근을 자극했다】',
    ]);

  handlers[ero_hooks.ask_fuck] = handlers[ero_hooks.ask_fuck_anal] = async (
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

  handlers[ero_hooks.cowgirl] = handlers[ero_hooks.cowgirl_anal_sex] = async (
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

  handlers[ero_hooks.stimulate_glans_by_virgin] = handlers[
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

  handlers[ero_hooks.ask_stimulate_g_spot] = async (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '에게 육봉으로 G스팟을 자극해달라고 요청했다】',
    ]);

  handlers[ero_hooks.ask_stimulate_large_intestine] = async (
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

  handlers[ero_hooks.ask_stimulate_womb] = async (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '이(가) ',
      defender.get_colored_name(),
      '에게 육봉으로 항문을 통해 자궁을 자극해달라고 요청했다】',
    ]);
};