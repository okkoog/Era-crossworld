// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3-give-up"),

  // [번역 완료] arim_kin_win_g_s
  arim_kin_win_g_s: (() => {
    const title = '달리는 소원 (하)';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('기적은 누구에게나 찾아올 수 있다.');
      await era.printAndWait(
        '하지만 이 레이스장에서는 단 하나의 기적만 탄생한다.',
      );
      era.println();

      await teio.say_and_wait('후우——');
      era.println();

      await teio.say_and_wait('압박이 거세', true);
      await teio.say_and_wait('전보다 훨씬 심해——', true);
      await teio.say_and_wait(
        '자리를 떼어낼 수 없어…… 앞에서 끌고 가는 도주도, 나와 같은 선행도…… 뒤에서 기회를 노리는 선입, 추입도……',
        true,
      );
      await teio.say_and_wait('모두…… 필사적으로 쫓아오고 있어', true);
      era.println();

      await era.printAndWait(
        `앞쪽의 ${teio.uma_sex_title}은(는) 바람처럼 달리고, 흩날리는 은빛 머리카락 끝이 코앞에 닿을 듯하다. 옆의 붉은 머리 ${teio.uma_sex_title}은(는) 튀어 오르는 붉은 불꽃처럼 몸에 달라붙어 앞의 모든 것을 삼키려 한다.`,
      );
      await era.printAndWait(
        '타고난 재능을 최대한으로 끌어내고 단련해, 절대 지지 않겠다는 각오로 무대에 선다——그 정도라면 오히려 화가 날 지경이다.',
      );
      await era.printAndWait(
        `그런 건 이 무대에 서기 위한 최소 조건일 뿐, 특별할 것도 없으니까.`,
      );
      era.println();

      await teio.say_and_wait('큭……', true);
      await teio.say_and_wait(
        `트레이너가 전에 말한 대로일지도…… 이 세상에는 나보다 강한 ${teio.uma_sex_title}이(가) 있었고, 지금도 있어`,
        true,
      );
      await teio.say_and_wait(
        '하지만 오늘은…… 진심으로, 지고 싶지 않아, 지지 않아, 질 수 없어!',
        true,
      );
      era.println();

      await era.printAndWait(
        '크게 숨을 들이마시고 산소를 탐욕스럽게 끌어들여 힘으로 바꾸며 한계를 넘어선다.',
      );
      era.println();

      await teio.say_and_wait('모두가 빛나는 순간은…… 언제일까?', true);
      await teio.say_and_wait('내 순간은…… 지금이야!', true);
      era.println();

      era.printButton('「테이오!」', 1);
      await era.input();
      await era.printAndWait(`실황「——${teio.name}——」`);
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 몸을 낮추고 마지막 스퍼트를 건다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_arim_kin_g_s
  before_arim_kin_g_s: (() => {
    const title = '달리는 소원 (상)';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        '트레이너, 기억해? 첫 레이스가 끝난 뒤…… 계속 같이 달리자고 말해줬잖아.',
      );
      era.println();

      await era.printAndWait(
        `입구에서 햇빛이 쏟아져 들어와 ${teio.sex}의 온몸을 금빛으로 감싼다. ${teio.sex}은(는) 돌아보며 미소 짓고 ${you.name}에게 말을 건다.`,
      );
      era.println();

      await teio.say_and_wait(
        '나 진심이야…… 지금, 다시 한 번 물을게. 나와 함께 달려줄래?',
      );
      era.println();

      era.printButton('「달릴게. 반드시…… 계속, 달릴 거야」', 1);
      await era.input();
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 턱을 가볍게 당긴 뒤 돌아서며 크게 팔을 휘두른다. 망토가 활짝 휘날리고, 치솟는 불꽃처럼 무대로 뛰어들어 앞쪽의 빛 속으로 녹아든다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_14_g
  ws_95_14_g: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `이미 ${you.name}와(과) 토카이 테이오는 불참을 발표했지만, 팬들의 열기는 평소와 다름없었다.`,
      );
      await era.printAndWait(
        `다리 부상 때문이라는 걸 알자 모두 이해를 보이며 두 사람에게 축복을 보내주었다.`,
      );
      await era.printAndWait(
        `테이오의 표정도 예전의 활기를 되찾은 듯 보인다……`,
      );
      await era.printAndWait(
        `아마, 그럴 것이다. ${you.name}이(가) 한 번 악역을 떠맡는 것으로 ${teio.sex}이(가) 계속 이렇게 지낼 수 있다면, 그 정도는 싼 대가다……`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_palace_g
  async ws_palace_g(teio) {
    await teio.say_and_wait(
      '내 이름은 토카이 테이오. 토카이——테이오!',
    );
  },
};
