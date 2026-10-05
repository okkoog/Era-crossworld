// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/105200-Haru-Urara/ero-52"),

  // [번역 대상] zero_stamina
  async zero_stamina(urara, you) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……あっ……あっ……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '壊された人形のように、気絶した ',
          urara.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の腕の中で、止まらず痙攣している',
        ]);
      } else {
        await era.printAndWait([
          '壊された人形のように、気絶した ',
          urara.get_colored_name(),
          ' が止まらず痙攣している',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '全身が力なく解け、',
          you.get_colored_name(),
          ' にいじられ尽くした ',
          urara.get_colored_name(),
          ' は、もうすっかり気を失っている',
        ]);
      } else {
        await era.printAndWait([
          '全身が力なく解け、',
          urara.get_colored_name(),
          ' はもうすっかり気を失っている',
        ]);
      }
    }
  },
};
