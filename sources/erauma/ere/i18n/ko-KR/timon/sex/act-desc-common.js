const { printAndWait } = require('#/era-electron');
const base = require('#/i18n/ja-JP/timon/sex/act-desc-common');

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
};
