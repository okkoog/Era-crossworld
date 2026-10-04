/**
 * @file アグネスタキオン - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（改訂）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require('#/i18n/ja-JP/snippets');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/daily-32.js');

module.exports = {
  ...__JaOriginal,
  good_morning(tachyon) {
    tachyon.say(
      "왔는가, 그럼 온 김에 문 앞에 있는 쓰레기 봉투 세 개 좀 버려주게…… 실험을 돕겠다고? 자네가 필요해지면 자연스럽게 부를 테니 걱정 말게.",
    );
    era.print([tachyon.get_colored_name(), "은 실험으로 한창 바쁜 모양이었다."]);
  },
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        "준비? 준비는 약자나 하는 것이네, ",
        callname,
        ". 자네는 사자가 훈련하는 걸 본 적이 있는가?",
      ]);
    } else {
      await tachyon.say_and_wait(
        'ええ？ なぜまだレース前の準備をするのです？ レースは試験と同じ、普段の蓄積を測るものですわ……',
      );
      await tachyon.say_and_wait(
        'もしかしてあなた、試験前になって慌てて詰め込んで単位を祈るタイプですの？',
      );
    }
  },
  async office_rest(tachyon, you, callname) {
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait("나에게 휴식은 필요 없네.");
      await era.printAndWait([
        '明らかに調子の悪い ',
        tachyon.get_colored_name(),
        ' は、強がってそう言った。',
      ]);
      await tachyon.say_and_wait(
        'できること、やるべきことが山ほどあるのに、休めるはずが……',
      );
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は実験机の前に居座る ',
          tachyon.get_colored_name(),
          ' を、後ろから抱きしめた。',
        ]);
        await era.printAndWait([tachyon.sex, 'の体が、小さく震えた。']);
        await tachyon.say_and_wait([
          '……',
          callname,
          '、色仕掛けでも無駄ですわよ。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は実験机に座り続ける',
          tachyon.sex,
          'を、無理に立たせた。',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '疲れましたわ、',
            callname,
            '。紅茶を淹れてきなさい。',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            ' は自分で淹れた紅茶を飲み、',
            tachyon.get_colored_name(),
            ' とソファで緩い午後を過ごした。',
          ]),
        async () => {
          await tachyon.say_and_wait('閑ですわね。');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は日常に、そんな感想を漏らした。',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
};
