const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');

module.exports = async () => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0);
  await me.say_and_wait('또 졌어?');
  await era.printAndWait([
    '벌써 몇 번째인지 모를 정도로 패배한 ',
    kitaru.get_colored_name(),
    '를 위로했다. 그녀에게 있어 지극히 중요했던 그 레이스의 패배 이후, 무참히 깨져버린 자신감의 파편은 다시는 합쳐지지 않는 듯했다.',
  ]);
  await era.printAndWait([
    kitaru.sex,
    '의 눈물이 서류에 떨어지지 않도록 책상 위의 서류를 슬쩍 옮겼다.',
  ]);
  await me.say_and_wait(['……이번에는 이유가 뭐야?']);
  await kitaru.say_and_wait(['운이 나빴어요.']);
  await era.printAndWait([
    '그렇겠지. ',
    me.get_colored_name(),
    '이(가) ',
    kitaru.sex,
    '의 입에서 들을 수 있는 대답은 뻔했다.',
  ]);
  await era.printAndWait([
    kitaru.sex,
    '가 입버릇처럼 운명의 사람이라고 부르는 ',
    me.get_colored_name(),
    '이라 할지라도, 이제는 조금 질리는 기분이었다.',
  ]);
  await era.printAndWait(['어떻게 하면 좋을까?']);
  await era.printAndWait(['자신감…… 자신감…… 자신감……']);
  await era.printAndWait([
    '눈앞의 이 아이는 분명 강할 텐데. 어째서 ',
    me.get_colored_name(),
    ' 같은 평범한 인간에게조차 사육장의 토끼처럼 굴고 있는 것일까. 이제는 ',
    kitaru.sex,
    '에게 그 사실을 깨닫게 해 줄 때가 왔다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    kitaru.sex,
    '의 앞으로 걸어가 허리를 숙였다. 그리고 시선을 피하는 ',
    kitaru.sex,
    '의 두 손을 들어 자신의 목 위에 올렸다.',
  ]);
  await me.say_and_wait([
    '느껴져? ',
    sys_get_colored_callname(0, 56),
    '.',
  ]);
  await kitaru.say_and_wait(['저기, 저기, ', callname, '. 이번엔 저를 어떻게 벌주실 건가요?']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    kitaru.sex,
    '의 약간 기대 섞인 눈빛을 받으며 대답했다.',
  ]);
  await me.say_and_wait(['나를 한 번 목 졸라 봐.']);
  await era.printAndWait([
    '이것으로 충분하다. 레이스 ',
    kitaru.get_uma_sex_title(),
    '가 마음 깊은 곳에 묻어두었던 지배욕을 자극한다.',
  ]);
  await era.printAndWait([
    '자신을 계속해서 억눌러 온 ',
    kitaru.get_colored_name(),
    '에게 있어, 갑작스럽게 해방된 결과와 그에 뒤따르는 쾌감은 더욱 강렬할 수밖에 없다.',
  ]);
  await era.printAndWait([
    '자신이 가장 경외하는 ',
    callname,
    ' 조차 발밑에 둘 수 있다면, 당연하게 여겼던 열등감 따위는 존재하지 않게 된다.',
  ]);
  await era.printAndWait([
    '질식감이 서서히 밀려왔다. 의식을 잃기 전 마지막으로 기억나는 것은, 눈앞에서 사랑스러운 미소를 짓고 있는 ',
    kitaru.get_colored_name(),
    '의 예쁜 얼굴이었다.',
  ]);
  era.drawLine();
  await era.printAndWait('계획은 성공적이었다.');
  await era.printAndWait([
    kitaru.get_colored_name(),
    '는 확실히 훨씬 강압적으로 변했다. 선입 주자로서 디버프 스킬을 사용하는 것에 더욱 능숙해졌고, 혹은…… 잔인해졌다고 해야 할까?',
  ]);
  await era.printAndWait([
    '집 문을 열기 전, ',
    me.get_colored_name(),
    '은(는) 그 일에 대해 생각했다.',
  ]);
  await era.printAndWait([
    '집에서 ',
    me.get_colored_name(),
    '을(를) 맞이한 것은 가차 없는 주먹 한 방이었다. 뺨을 감싸 쥐자, 붉게 물든 입가에서 피 섞인 침이 조금씩 흘러내렸다.',
  ]);
  await era.printAndWait([
    '고개를 들자, 눈앞의 ',
    kitaru.get_colored_name(),
    '는 입술을 핥으며 ',
    me.get_colored_name(),
    '의 눈에 여전히 태양처럼 밝게 비치는 미소를 지어 보였다.',
  ]);
  await era.printAndWait([
    kitaru.sex,
    '의 다음 발길질이 ',
    me.get_colored_name(),
    '의 배에 꽂히기 직전, ',
    me.get_colored_name(),
    '은(는) 오늘의 세이프 워드를 정하지 않았다는 사실을 문득 떠올렸다.',
  ]);
  await print_event_name(
    [{ content: '현인신을 위한 제물', color: buff_colors[3] }],
    kitaru,
  );
};