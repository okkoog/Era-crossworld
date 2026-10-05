// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/102500-Manhattan-Cafe/daily-25.js
// 대상 함수/속성: good_morning, office_gift
/**
 * @file マンハッタンカフェ - 日常
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/daily-25.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] good_morning — 함수/속성 전체 문맥에서 남은 원문을 번역
  good_morning(coffee, callname, b_escape) {
    if (b_escape > 0) {
      coffee.say([callname, '……休みは、取れましたか？']);
      coffee.say('……勝手に出ていってしまいましたが、何もしませんよ……');
    } else {
      const buffer = [];
      if (era.get('base:25:体力') < era.get('maxbase:25:体力') * 0.45) {
        buffer.push(
          () => coffee.say("아무래도…… 무리할 수는 없을 것 같네요……"),
          () =>
            coffee.say('少し、時間をください……コーヒーを一杯、飲みたいので。'),
          () => coffee.say('足が、重い……根を張ったみたいです……'),
        );
      } else {
        buffer.push(
          () => coffee.say('あの子に……追いつくために。'),
          () => coffee.say('星を掴むなら、空へ飛べるかもしれません……！'),
          () => coffee.say('追うべき影は……もう、見えています。'),
          () => coffee.say('……始めましょう。友達も、そう言っています……'),
          () => coffee.say('竜には翼が、私にはコーヒーが……ふふ。'),
        );
      }
      get_random_entry(buffer)();
    }
  },
  // [번역 대상] office_gift — 함수/속성 전체 문맥에서 남은 원문을 번역
  async office_gift(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        'これは……私に、ですか？ 贈り物、ありがとうございます、',
        callname,
        '。',
      ]);
    } else {
      await coffee.say_and_wait(
        "제게 주는 선물……? 아, 친구! 함부로 열지 마!",
      );
    }
  },
};
