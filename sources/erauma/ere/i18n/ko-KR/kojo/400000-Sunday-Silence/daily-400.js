/**
 * @file サンデーサイレンス - 日常
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/daily-400.js');

module.exports = {
  ...__JaOriginal,
  async office_study(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(`学習指導……${callname} の宿題を、私が見るの？`);
      await ss.say_and_wait(
        `冗談よ。${callname} が勉強を見てくれるなら、ありがたい。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        "는 기지개를 켜며 즐거운 표정을 지었다.",
      ]);
    } else {
      await ss.say_and_wait("공부라니, 우리 집안엔 학업 성적이 안 좋은 사람이 거의 없는데 말이야,");
      await ss.say_and_wait(
        `そうだ、${callname} がトレーナーの知識を教えてくれない？`,
      );
      await ss.say_and_wait(`いつか自分で自分を鍛えられるようになるかも！`);
      await era.printAndWait([
        ss.get_colored_name(),
        ' の言葉に、',
        you.get_colored_name(),
        ' は失業する惨めな未来を幻視した。',
      ]);
    }
  },
  async talk(ss, you, s_call_c) {
    const buffer = [];
    if (era.get('base:400:体力') < era.get('maxbase:400:体力') / 3) {
      buffer.push(async () => {
        await ss.say_and_wait(
          "그다지 현명한 생각 같지는 않네. 그리고 확실히 해두겠는데, 우리 둘은 대등한 관계야. 네 책무를 제대로 기억해 줬으면 좋겠어.",
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の指示に、あまり乗り気ではなさそうだ。',
        ]);
      });
      if (era.get('love:400') >= 50) {
        buffer.push(async () => {
          await ss.say_and_wait(
            "네가 정 그렇게 하겠다면…… 알았어. 네 생각에 따라잡을 수 있도록 내 온 힘을 다할게.",
          );
          await era.printAndWait([
            ss.get_colored_name(),
            ' は少し考え、',
            you.get_colored_name(),
            ' の要求を受けた。',
          ]);
        });
      }
    } else {
      switch (era.get('cflag:400:干劲')) {
        case -2:
          buffer.push(
            () =>
              ss.say_and_wait(
                'あ……今は全身が苛立っている。用事があるなら早く言って。',
              ),
            () =>
              ss.say_and_wait(
                '私の好みに合うことを言ったほうがいい。でないと、手が出るのを止められる自信がない。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              ss.say_and_wait(
                'ん……今、何て言った？ ごめん、気力がわかない。もう一度お願い。',
              ),
            () =>
              ss.say_and_wait([
                'けほけほ、',
                s_call_c,
                ' のコーヒーを飲みすぎた……喉が少しおかしい。',
              ]),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ss.say_and_wait(
                '頭はまだはっきりしている。予定や日程があるなら、早く言って。',
              ),
            () =>
              ss.say_and_wait(
                'またこんな平凡な一日。こういう日が、もう少し少なければいいのに。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              ss.say_and_wait(
                '空がいい。気に入った。だからトレーニングで、この気持ちを保たせてほしい。',
              ),
            () =>
              ss.say_and_wait(
                '早く始めないと、気力を発散するために柵を蹴るわよ。弁償？ もちろんあなたよ！',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              ss.say_and_wait(
                '今日は活力十分。トレーナーとして、こんな好機を無駄にしないでしょう？',
              ),
            () =>
              ss.say_and_wait(
                '今日の量は倍でもいい。調子はあなたの想像よりずっと上。甘やかされた人間だと思わないで。勝てるなら、量はいくら増えても構わない。',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  async office_gift(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        "나한테 주는 선물이야? ……고마워. 근데 이런 선물을 주다니, 나한테 잘 보이려고 아양이라도 떠는 거야?",
      );
      await era.printAndWait([
        '乗り気だった ',
        ss.get_colored_name(),
        ' は、Ｓ〇ＧＡのゲーム機だとわかると、すぐに耳を伏せた。',
      ]);
    } else {
      await ss.say_and_wait(
        '贈り物ね。他人からこんなものを受け取るのは珍しい。',
      );
      await ss.say_and_wait(
        'それに、なぜ……あなたの手からこれを受け取ると、心臓がこんなに激しく打つの？',
      );
    }
  },
  async office_rest(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `ごめん、休むなら、カーテンは開けたままでいい？ 私……少し闇が苦手。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        "는 다소 부끄러워했다.",
      ]);
    } else {
      await ss.say_and_wait('……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' の眠った顔は穏やかではない。悪夢を見ているみたいだ。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の袖に触れた瞬間、',
        ss.sex,
        'は袖をしっかり掴み、表情が緩んだ。',
      ]);
    }
  },
};
