// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/108500-Daiichi-Ruby/daily-85.js
// 대상 함수/속성: good_morning, office_gift
/**
 * @file ダイイチルビー - 日常
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/108500-Daiichi-Ruby/daily-85.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] good_morning — 함수/속성 전체 문맥에서 남은 원문을 번역
  good_morning(ruby) {
    const buffer = [
      () => ruby.say("안녕하신가요, 그럼 훈련을 시작하도록 하죠."),
      () =>
        ruby.say(
          "오늘도 잘 부탁드립니다. 지난날의 일족에 걸맞은 수준에 도달할 수 있도록, 저를 철저하게 지도해 주십시오.",
        ),
      () =>
        ruby.say(
          "저의 트레이너가 되신 이상, 이미 마음의 준비는 끝마치셨으리라 생각합니다. 후회 없이 당신의 능력을 발휘해 주시길 바랍니다.",
        ),
      () =>
        ruby.say(
          '皆様の威光を継ぐには、より多くの努力が要りますわ。ですが今のこの体なら、それも可能ですわ。',
        ),
      () =>
        ruby.say(
          'レースで成果を出すのは責務ですわ。目的は明らか。でしたら、怠らず進むだけですわ。',
        ),
      () =>
        ruby.say(
          'スポーツ医学会の最新発表はもちろん確認済みですわ。あとで一緒に検討いたしましょう？',
        ),
      () =>
        ruby.say(
          'わたくしは、ただ勝つことだけを求めませんわ。鮮やかな輝きを残せなければ、一族にとって勝利とは呼べません……ですわね？',
        ),
    ];
    if (era.get('flag:当前声望') >= 500) {
      buffer.push(() =>
        ruby.say(
          'あなたはすでに、人々へ資格をお示しになりましたわ。恐れる必要も、怯える必要もありません。使命だけですわ。一緒に、これを成し遂げましょう。',
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() => ruby.say('あなたの道にも、輝く光が満ちますように。'));
    }
    get_random_entry(buffer)();
  },
  // [번역 대상] office_gift — 함수/속성 전체 문맥에서 남은 원문을 번역
  async office_gift(ruby) {
    const buffer = [
      () => ruby.say_and_wait("당신의 지원에 진심으로 감사드립니다."),
      () =>
        ruby.say_and_wait(
          "답례품은 당신에 대한 제 인상에 맞추어 골라도 괜찮을까요?",
        ),
    ];
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '何を仰りたいかは分かっておりますわ。恥ずかしがる必要はありません。この国では、早婚などごく普通のことですもの。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
};
