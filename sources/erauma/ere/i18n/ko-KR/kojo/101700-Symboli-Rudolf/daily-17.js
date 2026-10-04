/**
 * @file シンボリルドルフ - 日常
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/daily-17.js');

module.exports = {
  ...__JaOriginal,
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say("시간을 낭비하지 마라."),
      () => emperor.say("실수를 범하지 마라."),
      () => emperor.say("짐을 실망시키지 마라."),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => emperor.say("잠든 시간이 점점 줄어드는군. 좋다."),
        () => emperor.say("광대여, 내 상태가 좋을 때 사냥을 더 많이 준비해라!"),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => emperor.say('軟弱を消し、皇帝の名を遠くまで響かせよ！'),
        () =>
          emperor.say(`誰が吾の脳裏で騒いでいる。${emperor.sex}を黙らせよ。`),
      );
    }
    get_random_entry(buffer)();
  },
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}？`),
      () => luna.say("썰렁한 농담이 떠오르지 않네..."),
      () => luna.say("오늘 일정은 어떻게 돼?"),
    ];
    get_random_entry(buffer)();
  },
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say("네놈이냐, 광대여."),
      () => emperor.say("짐은 지금 기분이 좋다, 흥을 깨지 마라."),
      () =>
        emperor.say(
          "만물에는 시작과 끝이 있는 법. 설령 내가 결국 지게 되더라도 후배들에게 향기를 남기리라.",
        ),
    ];
    get_random_entry(buffer)();
  },
  async office_study_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          "당신이 심리학 책을 볼 줄은 몰랐는데. 나도 좀 가르쳐줄래?",
        ),
      () =>
        luna.say_and_wait(
          "트레이너 면허 시험 문제 중 몇 개는 내가 출제한 거야.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait("짐은 실력 없는 교수를 필요로 하지 않는다."),
      () => emperor.say_and_wait("어느 시대든 현자는 마땅히 존경받아야 하는 법."),
    ];
    await get_random_entry(buffer)();
  },
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait("나도 한때는 달리는 것을 참 좋아했었지..."),
      () => luna.say_and_wait("우리의 공통된 이상을 위해서라면, 난 물러서지 않아."),
    ];
    await get_random_entry(buffer)();
  },
  async office_prepare_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait("지금 이 순간, 피가 끓어오르는구나!"),
      () =>
        emperor.say_and_wait(
          "자, 영웅과 용자들의 발버둥을 내게 보여다오!!!",
        ),
    ];
    await get_random_entry(buffer)();
  },
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait("난 아직 더 할 수 있어!"),
        () =>
          luna.say_and_wait(
            "훈련을 한 세션 더 추가하자. 내 실력은 아직 이정도가 아니야.",
          ),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '調子は『極めて』良い。訓練への心が『昂って』います！ ふふ……',
              ),
            () =>
              luna.say_and_wait('普段より調子が良い。良い走りができそうです。'),
          );
          break;
        case 1:
          buffer.push(
            () => luna.say_and_wait('日々の積み重ねが大切です。'),
            () =>
              luna.say_and_wait(
                '訓練が終わったら、一緒に散歩でも……時間が空くなら、ですが。',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              luna.say_and_wait(
                '完璧な調子とは言えませんが、弱音は吐けません。',
              ),
            () => luna.say_and_wait('一歩ずつ行きましょう。私は耐えます。'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                '勝負服を着るのは身分の切り替えです。また皇帝にならねばなりません……',
              ),
            () =>
              luna.say_and_wait(
                'む……どうも調子が悪い。ですが、この疲れで弱音を吐くわけにはいきません。',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '困りました……身体が重い。それでも一日たりとも、無駄にしたくなくて……',
              ),
            () =>
              luna.say_and_wait(
                'いつもの調子が掴めません……このままではいけないとわかっているのに、それでも……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait("피로가 쌓이는 것이 느껴지는군."),
        () => emperor.say_and_wait("네놈은 믿을 필요 없다, 그저 따르기만 해라."),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('出征の時は来た。'),
            () => emperor.say_and_wait('皇帝の名を、天まで響かせよ！'),
          );
          break;
        case 1:
          buffer.push(
            () => emperor.say_and_wait('帝国は、一磚一瓦より始まる。'),
            () =>
              emperor.say_and_wait('ん……？ 弄臣よ、笑話のひとつでも聞かせよ。'),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('興が乗らぬ。'),
            () => emperor.say_and_wait('吾の興を殺すな。'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('ふん……'),
            () => emperor.say_and_wait('吾の視界から消えろ。'),
          );
          break;
        case -2:
          buffer.push(
            () => emperor.say_and_wait('弄臣よ、すべてを台無しにしたな？'),
            () => emperor.say_and_wait('吾に無礼を働くな。'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
};
