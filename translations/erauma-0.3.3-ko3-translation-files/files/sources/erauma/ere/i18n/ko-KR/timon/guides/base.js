// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/timon/guides/base"),

  // [번역 완료] battle
  async battle(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '무릇 전쟁은 정공법으로 맞서고, 기책으로 승리한다.',
    );
    await era.printAndWait(
      '힘에 자신이 있다면 정면으로 저항하는 것은 언제나 유효하다. 특히 장치가 거의 해제된 상황이라면 더욱 그렇다.',
    );
    await era.printAndWait(
      '하지만 장치를 완전히 해제하지 못한 채 주인에게 전열을 가다듬을 틈을 준다면, 그 끝은 상상하기 어렵지 않다……',
    );
    await you.say_as_passer_by_and_wait(
      '？？？',
      '관계를 가진 횟수가 많을수록 급소를 찌를 확률도 올라갈지 모른다.',
    );
  },

  // [번역 완료] eat
  async eat(you) {
    await you.say_as_passer_by_and_wait('병법에 이르길', '군에 군량이 없으면 망한다.');
    await era.printAndWait([
      '장기전에 대비하려면,',
      you.get_colored_name(),
      '은(는) 식사로 몸의 소모를 보충해야 한다. 한 번 먹으면 한동안 체력이 계속 회복된다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '다만 주인이 무언가를 섞어 넣지는 않았는지 조심해야 한다…… 상대의 경계가 높을 때는 특히.',
    );
  },

  // [번역 완료] flatter
  async flatter(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '최상의 병법은 적의 계책을 꺾고, 그다음은 외교를 깨뜨리는 것이다.',
    );
    await era.printAndWait([
      '지하실의 주인과 좋은 관계를 맺는 것은,',
      you.get_colored_name(),
      '에게 결코 손해가 되지 않는다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '그렇게 하면 주인의 경계를 누그러뜨릴 수 있을지도 모른다.',
    );
  },

  // [번역 완료] get_intro
  get_intro: (you) => [
    you.get_colored_name(),
    '은(는) 아무래도,',
    { content: '【누군가】', fontWeight: 'bold' },
    '에게 납치되어 이 지하실로 끌려온 듯하다.',
    { isBr: true },
    '햇빛이 들지 않는 이곳에서는,',
    { content: '【시간조차 정확히 느낄 수 없다】', fontWeight: 'bold' },
    '. 앞으로 꽤 힘든 나날이 이어질 듯하다.',
    { isBr: true },
    '도움이 필요한가?',
  ],

  // [번역 완료] relax
  async relax(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '승리는 알 수는 있어도 억지로 만들어낼 수는 없다.',
    );
    await era.printAndWait([
      '도망칠 곳이 없을 때는,',
      you.get_colored_name(),
      '은(는) 조용히 앉아 기운을 기르고 대책을 세우는 것이 좋다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '그렇게 해두면 《지하실의 주인》이 돌아온 순간이나 깨어난 순간을 놓치지 않을 수 있다.',
    );
  },

  // [번역 완료] release
  async release(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '최상의 병법은 적의 계책을 꺾고, 그다음은 외교를 깨뜨리는 것이다.',
    );
    await era.printAndWait([
      '지하실의 주인이 ',
      you.get_colored_name(),
      '에게서 원하는 것을 이미 손에 넣었다면, 풀어달라는 부탁을 들어줄지도 모른다.',
    ]);
  },

  // [번역 완료] sex
  async sex(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '적을 잘 움직이는 자는 미끼를 내밀면 적이 반드시 그것을 취하게 한다.',
    );
    await era.printAndWait(
      '지하실의 주인에게 몸을 내어주면 거기서 역전의 실마리를 찾을 수도 있다.',
    );
  },

  // [번역 완료] sleep
  async sleep(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '삼가 기르고 수고하지 않으며, 기를 모아 힘을 쌓는다.',
    );
    await era.printAndWait([
      '지쳤을 때는,',
      you.get_colored_name(),
      '은(는) 순순히 잠을 자며 체력과 기력을 보충하는 것이 가장 좋다.',
    ]);
  },

  // [번역 완료] strike
  async strike(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '기책을 잘 쓰는 자는 천지처럼 끝이 없고, 강과 바다처럼 마르지 않는다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 자신의 힘과 지혜에 자신이 있다면 지하실의 주인을 기습해 활로를 찾는 것도 한 방법이다. 다만 실패했을 때의 결말은 상상하기 어렵지 않다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '관계를 가진 횟수가 많을수록 급소를 찌를 확률도 올라갈지 모른다.',
    );
  },

  // [번역 완료] unlock
  async unlock(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르길',
      '전쟁은 승리를 귀하게 여기지, 오래 끄는 것을 귀하게 여기지 않는다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 손에 있는 수단으로 그대로 탈출을 시도할 수 있다. 다만 《지하실의 주인》이 돌아오면 일단 포기할 수밖에 없다. 운 나쁘게 마주치기라도 하면 보복을 당할 우려도 있다……',
    ]);
  },
};
