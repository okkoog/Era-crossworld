const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0);
  if (love > 49) {
    await me.say_and_wait('다 됐니? 후쿠짱.');
    await kitaru.say_and_wait('으음~~ 음~♪');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 라는 이름의 밤색 털뭉치가 ',
      me.get_colored_name(),
      '의 몸 위에 엎드려 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '의 요청에 따라 자신의 담당 ',
      kitaru.get_uma_sex_title(),
      '의 부드러운 머리카락을 정성껏 쓰다듬어 주었다.',
    ]);
    await era.printAndWait([
      '가끔 손가락 끝이 ',
      kitaru.get_colored_name(),
      '의 민감한 귓뿌리를 스칠 때마다, ',
      kitaru.sex,
      '의 몸이 미세하게 떨렸다.',
    ]);
    await kitaru.say_and_wait(['후후…… ', callname, '……']);
    await era.printAndWait([kitaru.sex, '가 충분히 휴식을 마칠 때까지는 아직 시간이 한참 걸릴 듯했다.']);
  } else {
    await kitaru.say_and_wait('스으…… 후우……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 드물게 차분해져서는, 마치 사찰의 불상처럼 깊은 명상 상태에 빠져 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이전에 두 사람이 함께 사 왔던 사과를 깎을 준비를 하기 시작했다.',
    ]);
  }
};