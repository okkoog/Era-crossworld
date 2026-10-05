// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { printAndWait } = require('#/era-electron');
const base = require('#/i18n/ja-JP/timon/sex/act-desc-sleep');

module.exports = {
  ...base,

  async kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '에게 키스했다】',
    ]);
  },

  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '에게 딥키스했다】',
    ]);
  },

  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 따뜻한 귀를 만지작거리고 있다】',
    ]);
  },

  async pull_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 따뜻한 귀를 잡아당기고 있다】',
    ]);
  },

  async pet_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 부드러운 가슴을 만지작거리고 있다】',
    ]);
  },

  async pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 민감한 유두를 만지작거리고 있다】',
    ]);
  },

  async pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 요염한 클리토리스를 만지작거리고 있다】',
    ]);
  },

  async finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락을 잠든 ',
      defender.get_colored_name(),
      '의 요염한 보지에 삽입했다】',
    ]);
  },

  async prepare_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 부끄러워하는 음순을 벌렸다】',
    ]);
  },

  async stimulate_g_spot_by_finger(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락으로 잠든 ',
      defender.get_colored_name(),
      '의 은밀한 G스팟을 만지작거리고 있다】',
    ]);
  },

  async pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 조그만 애널을 만지작거리고 있다】',
    ]);
  },

  async prepare_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 부끄러워하는 애널을 벌렸다】',
    ]);
  },

  async pet_leg(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 풍만한 허벅지를 쓰다듬고 있다】',
    ]);
  },

  async pet_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 향기로운 꼬리를 만지작거리고 있다】',
    ]);
  },

  async pull_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 약한 꼬리를 잡아당기고 있다】',
    ]);
  },

  async cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 잠든 ',
        defender.get_colored_name(),
        '의 들썩이는 클리토리스를 입에 머금었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 요염한 클리토리스를 빨고 있다】',
      ]);
  },

  async force_deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 살짝 벌어진 작은 입에 육봉을 삽입했다】',
    ]);
  },

  async blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 잠든 ',
        defender.get_colored_name(),
        '의 우뚝 솟은 육봉을 입에 머금었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 잠든 ',
        defender.get_colored_name(),
        '의 우뚝 솟은 육봉을 핥고 있다】',
      ]);
  },

  async deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 깊숙이 입에 머금었다】',
    ]);
  },

  async hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손바닥으로 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 어루만지고 있다】',
    ]);
  },

  async hand_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손과 입을 모두 사용하여 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉에 봉사하고 있다】',
    ]);
  },

  async fuck_tit(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 양 가슴을 모아 자신의 육봉을 문지르고 있다】',
    ]);
  },

  async tit_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 양 가슴을 모아 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 문지르고 있다】',
    ]);
  },

  async tit_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 가슴으로 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 문지르면서, 입을 벌려 잠든 귀두를 빨고 있다】',
    ]);
  },

  async bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 민감한 유두를 살짝 깨물고 있다】',
    ]);
  },

  async force_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 무방비한 손을 들어 올린 채, 육봉으로 겨드랑이를 문지르고 있다】',
    ]);
  },

  async force_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 건강한 두 발을 끌어당겨 자신의 육봉을 밟게 하고 있다】',
    ]);
  },

  async foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 발로 밟고 있다】',
    ]);
  },

  async tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 꼬리로 잠든 ',
      defender.get_colored_name(),
      '의 우뚝 솟은 육봉을 휘감아 만지작거리고 있다】',
    ]);
  },

  async stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 잠든 ',
      defender.get_colored_name(),
      '의 깊은 곳에 있는 G스팟을 자극하고 있다】',
    ]);
  },

  async stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 애널 벽 너머로 잠든 ',
      defender.get_colored_name(),
      '의 민감한 자궁을 자극하고 있다】',
    ]);
  },

  // [번역 완료] cowgirl
  async cowgirl(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 위에 올라타 음부로 육봉을 받아들였다】',
    ]);
  },

  // [번역 완료] cowgirl_anal_sex
  async cowgirl_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 위에 올라타 항문으로 육봉을 받아들였다】',
    ]);
  },

  // [번역 완료] doggy_style
  async doggy_style(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 엎드려 잠든 ',
      defender.get_colored_name(),
      '의 위에 올라타 음부를 범했다】',
    ]);
  },

  // [번역 완료] doggy_style_anal_sex
  async doggy_style_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 엎드려 잠든 ',
      defender.get_colored_name(),
      '의 위에 올라타 항문을 범했다】',
    ]);
  },

  // [번역 완료] missionary
  async missionary(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 위에 올라타 음부를 범했다】',
    ]);
  },

  // [번역 완료] missionary_anal_sex
  async missionary_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 잠든 ',
      defender.get_colored_name(),
      '의 위에 올라타 항문을 범했다】',
    ]);
  },

  // [번역 완료] stimulate_glans_by_anal
  async stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 항문으로, 잠든 ',
      defender.get_colored_name(),
      '의 발기한 육봉을 받아들였다】',
    ]);
  },

  // [번역 완료] stimulate_glans_by_virgin
  async stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 음부로, 잠든 ',
      defender.get_colored_name(),
      '의 발기한 육봉을 받아들였다】',
    ]);
  },
};
