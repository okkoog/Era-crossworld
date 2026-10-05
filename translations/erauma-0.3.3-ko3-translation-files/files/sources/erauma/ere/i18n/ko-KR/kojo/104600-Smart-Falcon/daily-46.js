// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/104600-Smart-Falcon/daily-46.js
// 대상 함수/속성: good_morning
/**
 * @file スマートファルコン - 日常
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/104600-Smart-Falcon/daily-46.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] good_morning — 함수/속성 전체 문맥에서 남은 원문을 번역
  good_morning(falcon, you, callname) {
    const buffer = [];
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(`はぁ～朝って、ほんと眠いよね`);
          falcon.say("어제 라이브를 하다가 나도 모르게 너무 늦게까지 노래했나 봐.");
          falcon.say(`今日のトレーニング、ちょっと後ろにずらしてもいい？`);
          era.print([
            you.get_colored_name(),
            ` は、ファル子のまん丸い頭を自分の太ももに預け、ソファで少しでも楽に眠れるようにした`,
          ]);
        });
      } else {
        buffer.push(() => {
          falcon.say(
            `このくらい、${falcon.uma_sex_title}アイドルのファル子には問題ないよ⭐`,
          );
          era.print([
            '口ではそう言うのに、ふらつく体が本音を漏らしてしまい、仕方なく ',
            you.get_colored_name(),
            ' は',
            falcon.sex,
            'をソファで先に休ませることにした',
          ]);
        });
      }
    } else {
      buffer.push(
        () => {
          falcon.say(`${callname}、ファル子、準備ばっちりだよ！`);
          era.print(`腕を鳴らすファル子は、ずいぶん調子が良さそうだ`);
        },
        () => {
          falcon.say(
            'ダートを走るずっしり感、可愛いファル子とはちょっと合わないかも……',
          );
          falcon.say(
            `強いファル子も可愛い？ さすがファン1号の${callname}だね！ 日常のトレーニングでも、ファル子は輝いちゃうよ！`,
          );
          era.print(
            `迷いが晴れて、可愛い笑顔を取り戻したファル子は、再びトレーニングへの熱を燃やした`,
          );
        },
      );
      // 恋慕100の暗示
      if (era.get('love:46') === 100) {
        buffer.push(() => {
          falcon.say(`おはよう、大好き。今日は何するの？`);
          falcon.say(
            `アイドルでも、ただの小さな${falcon.uma_sex_title}でも、${callname}に出会えたおかげで、ふわふわしてた世界にも、だんだん手触りが出てきたんだよ`,
          );
          era.print(
            `朝から元気いっぱいの${falcon.name}が、${you.name}にあいさつした`,
          );
        });
      } else if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(`${callname}、おはよう⭐`);
          falcon.say(
            `${falcon.uma_sex_title}アイドルのファル子、今日もキラキラ頑張るよ！`,
          );
          falcon.say(
            `だからファン1号の${callname}も、頑張ってるファル子をちゃんと見ててね！`,
          );
          era.print(
            `ファル子が${you.name}の周りではしゃぐ様子に、周囲の視線が集まった`,
          );
        });
      } else if (era.get('love:46') >= 50) {
        buffer.push(
          () => {
            falcon.say(`フラッシュさんって、歩いてる予定表みたいだよね`);
            falcon.say(
              `ファル子も${falcon.sex}みたいに、きちんと物事を片付けられたら、悩みも減るのに`,
            );
            era.print(`トレーナー室で、ファル子が${you.name}に話しかけた`);
          },
          () => {
            falcon.say(`アイドルの道って、ずっと辛さと痛みでいっぱいなんだよ`);
            falcon.say(
              'ファル子も、ときどき、このまま続けられるかわからなくなる',
            );
            era.print(
              `トレーナー室でファル子と雑談していると、${falcon.sex}は${you.name}に悩みを打ち明けた`,
            );
          },
        );
      } else {
        buffer.push(() => {
          falcon.say(`${callname}、おはよう！`);
          falcon.say(
            `昨日の夜、よく眠れた？ 今日も輝くファル子を見て、ちゃんと笑ってね`,
          );
          era.print(
            `トレセンへ向かう途中、${falcon.name}とばったり出会い、並んで歩くことになった。`,
          );
        });
      }
    }
    get_random_entry(buffer)();
  },
};
