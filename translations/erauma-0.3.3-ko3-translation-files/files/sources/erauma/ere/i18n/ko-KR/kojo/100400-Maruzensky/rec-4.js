/**
 * @file 마루젠스키 - 모집
 * @author 黑奴一号
 * @author Claude (번역 구조 이식)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_start(maru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '에게 말을 걸어 보았다.',
    ]);
    era.println();
    you.say([
      maru.get_colored_name(),
      ', 너라면 분명 무패의 삼관 ',
      maru.uma_sex_title,
      '가 될 수 있어. 부디 내 팀에 들어와 줘.',
    ]);
    await maru.say_and_wait([
      '어머나, 나도 삼관 ',
      maru.uma_sex_title,
      '가 될 수 있다면 멋지겠지. 하지만 트레이너 군, 날 너무 높이 평가하는 거 아닐까? 미안하지만 계약은 사양할게. 그래도 그렇게 자신 있는 트레이너 군이라면 분명 딱 맞는 담당을 찾을 거야.',
    ]);
    await you.say_and_wait(
      ['……', maru.get_colored_name(), '에게 거절당하고 말았다.'],
      true,
    );
  },

  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_leave_playground(maru, you) {
    await era.printAndWait(
      `${you.name}이(가) 훈련장을 떠나려 할 때, ${maru.name}가 ${you.name}에게 말을 걸어왔다.`,
    );
    era.println();
    maru.say(
      '저기, 거기 트레이너 군, 시간 좀 내줄 수 있을까? 혹시 너도 딱 맞는 담당을 찾으러 온 거니?',
    );
    era.print(
      `${you.name}은(는) 담당할 우마무스메를 찾기 위해 트레센 학원의 선발 레이스를 보러 왔다. 그중 ${maru.name}는 독보적인 주법으로 다른 우마무스메들을 멀리 따돌렸다. 달리는 모습은 마치 가속 페달을 끝까지 밟은 붉은 스포츠카 같았다. 하지만 무엇보다 ${you.name}의 시선을 사로잡은 것은, 달릴 때 보여 준 만족스러운 표정이었다.`,
    );
    maru.say(
      '음…… 트레이너 군도 삼관을 차지할 우마무스메를 찾는 거야? 아니면 해외 무대에서 개선문상까지 노릴 아이를 찾는 거니?',
    );
    era.print(
      `${you.name}은(는) 고개를 가로저었다. 바람과 자유를 만끽하며 만족스러운 표정을 짓던 그 붉은 뒷모습이 왠지 모르게 뇌리에 깊게 박혀 있었다.`,
    );
    maru.say('어머, 참 이상한 트레이너네……');
    era.print(`${maru.name}는 고민하는 듯한 표정을 지었지만, 금방 평소의 모습으로 돌아왔다.`);
    maru.say('미안하지만, 트레이너 군은 어떤 우마무스메를 찾고 있는 거니?');
    era.print(
      `${you.name}은(는) ${maru.name}가 달릴 때 보여 준 만족스러운 표정에 매료되었다고 솔직히 털어놓았다.`,
    );
    await maru.say_and_wait(
      '……그런 거였니, 넌 정말 이상한 트레이너구나. 그럼, 앞으로도 내가 달리는 모습을 많이 지켜봐 줘.',
    );
  },

  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_rooftop(maru, you, callname) {
    await era.printAndWait(
      `${you.name}이(가) 옥상으로 향했을 때, 다시 ${maru.name}를 만났다.`,
    );
    await maru.say_and_wait([
      '……응응, 후배들 모두 정말 귀엽네♪ 혹시 궁금한 게 있다면 언제든지 이 ',
      maru.elder_sibling_sex_title,
      '한테 물어보렴♪',
    ]);
    era.print(
      `${maru.name}는 스마트폰을 내려놓고, 운동장에서 연습하는 후배 우마무스메들을 바라보며 콧노래에 맞춰 꼬리를 살랑살랑 흔들고 있었다.`,
    );
    await maru.say_and_wait('역시 맑은 날 야외에서 먹는 도시락이 최고야♪');
    era.print(
      `${maru.name}는 도시락통을 열며 무심코 시선을 앞으로 던지다가 ${you.name}의 존재를 눈치챘다.`,
    );
    await maru.say_and_wait([
      '궁금한 게…… 어라♪ 지난번 훈련장에서 만났던 트레이너 ',
      callname,
      ' 아니니? 너도 옥상에서 도시락을 먹으려고? 정말 센스 있네♪',
    ]);
    era.print(
      `그렇게 두 사람은 나란히 앉아 운동장에서 연습하는 우마무스메들을 바라보며 도시락을 먹었다. 따스한 봄바람이 ${maru.name}의 치맛자락을 흔들었고, 귀는 음악의 리듬에 맞춰 쫑긋거렸다.`,
    );
    era.print(
      `두 사람은 한동안 말이 없었다. 도시락을 다 비운 뒤, 마루젠스키는 젓가락을 내려놓고 일어서서 ${you.name}을(를) 바라보았다.`,
    );
    await maru.say_and_wait(
      '자, 그래서 트레이너 군, 너도 딱 맞는 담당을 찾고 있는 거니? 목표가 뭐야?',
    );
    await maru.say_and_wait(
      '무패 삼관? 심볼리 루돌프를 넘어서는 것? 아니면 담당과 함께 세계라는 큰 무대를 향해 노력하는 것?',
    );
    await maru.say_and_wait('뭐든지 좋으니까 이 언니한테 상담해 보렴♪');
    era.print(`${maru.name}는 미소 지으며 ${you.name}을(를) 찬찬히 살펴보았다.`);
    era.print(
      `${you.name}의 뇌리에는 자신이 보았던 그 붉은 뒷모습과, 달릴 때 보여준 만족스러운 미소가 떠올랐다.`,
    );
    era.printButton(
      '담당이 달릴 때 달리기의 즐거움을 마음껏 만끽하는 모습을 보고 싶어.',
      1,
    );
    await era.input();
    await maru.say_and_wait('!');
    era.print(
      `${maru.name}의 귀가 눈에 띄게 파르르 떨렸고, ${maru.name}가 ${you.name}을(를) 유심히 살피는 동안 꼬리가 리듬에 맞춰 흔들렸다.`,
    );
    await maru.say_and_wait(
      '……그럼 이렇게 하자, 차라리 네가 나의 트레이너가 되어줄래?',
    );

    era.print(
      `${you.name}은(는) ${maru.name}의 진지한 모습에 조금 놀랐지만, 결국 손을 내밀었다.`,
    );
    await maru.say_and_wait(['그럼, 앞으로 잘 부탁해, 트레이너 ', callname, '♪']);
  },
};
