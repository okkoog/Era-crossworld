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
      '가 되는 건 멋진 일이라고 생각하지만 말이야, 그런데 트레이너 군, 나를 너무 과대평가하는 거 아니니…… 미안하지만, 너와 계약할 수는 없겠어…… 하지만 이렇게 자신만만한 트레이너 군이라면, 분명 딱 맞는 담당을 찾을 수 있을 거야.',
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
      `${you.name}은(는) 적절한 우마무스메를 물색하기 위해 트레센 학원의 경기장에 선발 레이스를 보러 왔다. ${maru.name}라는 이름의 우마무스메는 이 선발 레이스에서 독보적으로 앞서나가며 다른 우마무스메들을 멀리 따돌렸다. 레이스 중의 그녀는 마치 풀가동 중인 붉은 스포츠카처럼 보였다. 하지만 무엇보다 당신의 마음을 끈 것은, 달릴 때 그녀가 보여준 만족스러운 표정이었다.`,
    );
    maru.say(
      '음…… 그래서 트레이너 군도 삼관을 차지하거나, 나아가 해외를 무대로 개선문상까지 노릴 수 있는 우마무스메를 찾고 있는 거니?',
    );
    era.print(
      `${you.name}은(는) 고개를 가로저었다. 바람과 자유를 만끽하며 만족스러운 표정을 짓던 그 붉은 뒷모습이 왠지 모르게 뇌리에 깊게 박혀 있었다.`,
    );
    maru.say('어머, 참 이상한 트레이너네……');
    era.print(`${maru.name}는 고민하는 듯한 표정을 지었지만, 금방 평소의 모습으로 돌아왔다.`);
    maru.say('미안하지만, 트레이너 군은 어떤 우마무스메를 찾고 있는 거니?');
    era.print(
      `${you.name}은(는) 솔직하게 ${maru.name}에게 그녀가 달릴 때의 만족스러운 모습에 매료되었다는 이야기를 털어놓았다.`,
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
    await maru.say_and_wait('역시 맑은 날씨에 먹는 도시락이 제일 즐거워♪');
    era.print(
      `${maru.name}는 도시락통을 열며 무심코 시선을 앞으로 던지다가 ${you.name}의 존재를 눈치챘다.`,
    );
    await maru.say_and_wait([
      '궁금한 게…… 어라♪ 지난번 훈련장에서 만났던 트레이너 ',
      callname,
      ' 아니니? 너도 옥상에서 도시락을 먹으려고? 정말 센스 있네♪',
    ]);
    era.print(
      `그렇게 두 사람은 나란히 앉아 운동장에서 노력하는 우마무스메들을 바라보며 도시락을 먹었다. 화창한 봄바람이 ${maru.name}의 치맛자락을 흔들었고, 그녀의 귀는 음악 리듬에 맞춰 쫑긋거렸다.`,
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
    era.print(`${maru.name}는 미소 지으며 ${you.name}을(를) 살폈다.`);
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
      `${maru.name}의 귀가 눈에 띄게 파르르 떨렸고, ${maru.name}가 ${you.name}을(를) 유심히 살핌에 따라 꼬리가 리드미컬하게 흔들렸다.`,
    );
    await maru.say_and_wait(
      '……그럼 이렇게 하자, 차라리 네가 나의 트레이너가 되어줄래?',
    );

    era.print(
      `${you.name}은(는) 진지한 그녀의 모습에 조금 놀랐지만, 결국 그녀에게 손을 내밀었다.`,
    );
    await maru.say_and_wait(['그럼, 앞으로 잘 부탁해, 트레이너 ', callname, '♪']);
  },
};
