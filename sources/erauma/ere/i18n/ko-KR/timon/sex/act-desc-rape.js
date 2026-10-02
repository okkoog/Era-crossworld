const { printAndWait } = require('#/era-electron');
const base = require('#/i18n/ja-JP/timon/sex/act-desc-rape');

module.exports = {
  ...base,

  async kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 입술에 강제로 키스했다】',
    ]);
  },

  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 입안 깊숙한 곳을 강제로 유린했다】',
    ]);
  },

  async relax(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 여유만만한 태도로 ',
      defender.get_colored_name(),
      '의 지금 모습을 감상했다】',
    ]);
  },

  async talk(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 말을 걸었다】',
    ]);
  },

  async force_cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 클리토리스를 ',
        defender.get_colored_name(),
        '의 얼굴에 짓눌렀다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 ',
        defender.get_colored_name(),
        '의 입술과 혀에 클리토리스를 문질렀다】',
      ]);
  },

  async force_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 비소를 ',
        defender.get_colored_name(),
        '의 입술에 짓눌렀다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 ',
        defender.get_colored_name(),
        '의 입술과 혀에 비소를 문질렀다】',
      ]);
  },

  async force_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 입술 사이로 밀어 넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 휘둘러 ',
        defender.get_colored_name(),
        '의 입안을 유린했다】',
      ]);
  },

  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 목구멍 깊숙이 쑤셔 넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 ',
        defender.get_colored_name(),
        '의 목구멍 깊은 곳을 헤집었다】',
      ]);
  },

  async force_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 손에 쥐여주었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 양손에 비벼댔다】',
      ]);
  },

  async fuck_tit(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 ',
        defender.get_colored_name(),
        '의 가슴을 모아 육봉을 끼웠다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 가슴에 문질렀다】',
      ]);
  },

  async force_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 ',
        defender.get_colored_name(),
        '의 머리카락으로 육봉을 휘감았다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 강제로 육봉을 ',
        defender.get_colored_name(),
        '의 머리카락에 문질렀다】',
      ]);
  },

  async force_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 두 발을 끌어당겨 육봉을 애무하게 했다】',
    ]);
  },

  async force_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 강제로 ',
      defender.get_colored_name(),
      '의 꼬리를 끌어와 육봉에 휘감았다】',
    ]);
  },
};
