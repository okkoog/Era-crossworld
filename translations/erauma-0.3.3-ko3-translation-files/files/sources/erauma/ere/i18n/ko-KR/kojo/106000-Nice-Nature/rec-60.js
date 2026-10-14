/**
 * @file 나이스 네이처 - 모집
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} nature
   * @param {CharaTalk} you
   * @param {string} self_call
   */
  async rec(nature, you, self_call) {
    await you.say_as_unknown_and_wait([
      '……그리고 이번 선발 레이스의 3착은…… ',
      nature.get_colored_name(),
      '!',
    ]);
    await nature.say_as_unknown_and_wait('으음— 뭐, 평소처럼 달렸네.');
    await era.printAndWait([
      '목소리가 들린 쪽을 바라보니, 풍성한 트윈 테일을 한 붉은 머리의 ',
      nature.uma_sex_title,
      '가 게시판의 순위를 바라보며 혼잣말을 하고 있었다.',
    ]);
    await nature.say_and_wait(
      '또 평소처럼 3착이네. 이 성적이면 이번에도 날 맡아 줄 트레이너는 없겠지……',
    );
    await era.printAndWait([
      nature.uma_sex_title,
      '의 자조 섞인 말투에는 약간의 자책과 쓸쓸함이 섞여 있는 듯했다. 그 말을 듣고, 선발 레이스 과정을 모두 지켜본 ',
      you.get_colored_name(),
      '은(는) 자신도 모르게 다가가 말을 걸었다……',
    ]);
    await nature.say_and_wait([
      '아, 그러니까…… 트레이너 ',
      you.adult_sex_title,
      '…… 맞지? ',
      self_call,
      '한테 무슨 볼일 있어?',
    ]);
    await era.printAndWait([
      nature.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 갑작스러운 부름에 어리둥절한 표정을 지었다.',
    ]);
    await nature.say_and_wait(
      '음…… 내 트레이닝을 맡고 싶다고…… 그렇구나…… 엣?! 잠깐! 나 3착인데? 나 같은 애를 담당으로 골라도 정말 괜찮아? ………… 으음— 알겠어. 하지만 불만이 생기거나 싫증 나면 꼭 말해 줘, 알겠지? 억지로 참지는 말고.',
    );
    await era.printAndWait([
      '이렇게 해서, ',
      nature.get_colored_name(),
      '와의 파트너 생활이 막을 올렸다.',
    ]);
  },
};
