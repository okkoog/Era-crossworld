/**
 * @file トレヴ - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/200500-Treve/daily-205.js');

module.exports = {
  ...__JaOriginal,
  good_morning(treve) {
    const buffer = [
      () => treve.say("그럼 다음엔 뭘 하고 놀까요?"),
      () => treve.say("지금 힘이 넘쳐나서, 에너지가 너무 가득해 조금 곤란할 정도예요."),
    ];
    if (era.get('love:205') >= 50) {
      buffer.push(
        () => treve.say("절 너무 예뻐해 주시는 거 아닌가요…… 조금 과보호일지도?"),
        () =>
          treve.say('朝から夕方まで、一分一秒、あなたのことばかり思ってる。'),
      );
    }
    if (era.get('love:205') >= 75) {
      buffer.push(
        () => treve.say('私は一途な人間だと思っていた。あなたに会うまでは。'),
        () =>
          treve.say('あなたの方へ歩くとき、心臓が初恋みたいにどきどきする。'),
      );
    }
    get_random_entry(buffer)();
  },
  async office_prepare(treve, callname) {
    const buffer = [
      () => treve.say_and_wait("당신에게 최고의 선물을 선사할 수 있게 해 주세요."),
      () =>
        treve.say_and_wait(`今日の勝ちは、私が取る。${callname} のために。`),
    ];
    await get_random_entry(buffer)();
  },
  async office_gift(treve) {
    const buffer = [
      () => treve.say_and_wait("세상이 변해도, 사랑만은 영원한 흔적으로 남는 법이죠."),
      () => treve.say_and_wait("이걸 사랑이라고 생각해도 될까요?"),
    ];
    await get_random_entry(buffer)();
  },
  async office_rest(treve) {
    const buffer = [
      () => treve.say_and_wait('これからどうなるか、分からない。'),
      () => treve.say_and_wait("저랑 같이 쉬니까 즐거우신가요?"),
    ];
    await get_random_entry(buffer)();
  },
  async office_game(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `${callname}！なんで Umaisoft をクソゲーメーカーって呼ぶ人がいるの？`,
        ),
      () =>
        treve.say_and_wait(
          "《어쌔신 크리드: 트레센》…… 모든 면에서 시리즈의 전작들을 완벽하게 뛰어넘은 역작이에요——",
        ),
    ];
    await get_random_entry(buffer)();
  },
};
