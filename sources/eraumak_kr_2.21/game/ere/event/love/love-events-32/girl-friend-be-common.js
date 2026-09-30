const era = require('#/era-electron');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
module.exports = async (tachyon, me) => {
  await tachyon.say_as_unknown_and_wait('……눈');
  await tachyon.say_as_unknown_and_wait('………눈을 뜨게');
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 깨어났다.']);
  await era.printAndWait([
    '어떤 목소리에 의해 깨어난 ',
    me.get_colored_name(),
    '은(는), 눈을 뜨자마자 낯선 천장이 보인다는 것을 깨달았다.',
  ]);
  era.printButton('「여기는 어디지?」', 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait('……여기는 나의 실험실이라네.');
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 목소리가 들려오는 방향을 바라보았다.']);
  await era.printAndWait([
    '눈앞에는 밤색 털의 ',
    tachyon.get_uma_sex_title(),
    '가 서 있었다. 단정한 숏컷과 몸에 걸친 하얀 가운은 ',
    tachyon.sex,
    '의 연구자로서의 신분을 증명하고 있었다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '는 살피는 듯한 눈빛으로 ',
    me.get_colored_name(),
    '을(를) 바라보았다. 왠지 모르게 ',
    me.get_colored_name(),
    '은(는) 소름 끼치는 기분을 느꼈다.',
  ]);
  era.printButton('「너는 누구지?」', 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait(
    '그 질문은 내가 자네에게 먼저 해야겠군…… 자네는 누구인가? 왜 나의 실험실에 누워 있는 거지?',
  );
  await era.printAndWait(['밤색 털의 ', tachyon.get_uma_sex_title(), '가 말했다.']);
  await era.printAndWait([
    '그제야 ',
    me.get_colored_name(),
    '은(는) 자신이 여전히 바닥에 누워 있었다는 것을 깨닫고 서둘러 몸을 일으켰다',
  ]);
  era.printButton(`「나는 ${me.actual_name}, 트레이너야.」`, 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait(
    '…………호오? 그렇다면 트레이너 군, 자네가 여기에 누워 있는 것에는 어떤 용건이 있는 건가?',
  );
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 이곳에 쓰러지기 전에 ',
    me.get_colored_name(),
    '이(가) 대체 무엇을 하고 있었는지 떠올리려 애썼으나, 전혀 기억나지 않았다.',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait(
    '…………기억나지 않는다면 관두게나. 왠지 나도 기억을 잃은 것처럼, 이전에 무엇을 하고 있었는지 기억나지 않는군……',
  );
  await tachyon.say_as_unknown_and_wait([
    '뭐, 됐네. 그 이야기는 접어두고, 어쨌든 내 이름은 ',
    tachyon.get_colored_name(),
    '이라네. 트레이너 군, 잘 부탁하네',
  ]);
  era.println();
  await era.printAndWait([tachyon.get_colored_name()]);
};