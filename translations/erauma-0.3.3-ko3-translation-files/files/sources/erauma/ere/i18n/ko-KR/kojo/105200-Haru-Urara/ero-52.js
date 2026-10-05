// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/105200-Haru-Urara/ero-52"),

  // [번역 완료] zero_stamina
  async zero_stamina(urara, you) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……앗……앗……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '망가진 인형처럼, 기절한 ',
          urara.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '의 품 안에서 계속 경련하고 있다',
        ]);
      } else {
        await era.printAndWait([
          '망가진 인형처럼, 기절한 ',
          urara.get_colored_name(),
          '이(가) 계속 경련하고 있다',
        ]);
      }
    } else {
      await urara.say_and_wait('……');
      if (era.get('flag:主导权') === 0) {
        await era.printAndWait([
          '온몸의 힘이 풀려,',
          you.get_colored_name(),
          '에게 온몸을 농락당한 ',
          urara.get_colored_name(),
          '은(는) 이미 완전히 정신을 잃고 있다',
        ]);
      } else {
        await era.printAndWait([
          '온몸의 힘이 풀려,',
          urara.get_colored_name(),
          '은(는) 이미 완전히 정신을 잃고 있다',
        ]);
      }
    }
  },
};
