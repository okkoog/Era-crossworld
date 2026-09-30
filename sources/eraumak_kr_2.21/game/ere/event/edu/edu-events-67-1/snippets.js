const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} me
   * @param {CharaTalk} kita
   * @param {boolean} [is_race_end]
   */
  async takz_kin_common(daiya, me, kita, is_race_end) {
    await kita.say_and_wait('…………윽!');
    await daiya.say_and_wait('키타짱!!');
    await era.printAndWait(
      '오늘 키타산 블랙의 움직임에선 평소 같은 날카로움이 느껴지지 않았다. 실력을 제대로 발휘하지 못한 원인은 아마──',
    );
    await daiya.say_and_wait('하아, 하아………… 키타짱.');
    await kita.say_and_wait('관, 관객분들이 하시는 말씀…… 도저히 듣고 있을 수가 없어……');
    await kita.say_and_wait('내 실력이 부족했던 건 알고 있지만, 알고는 있는데……');
    await kita.say_and_wait('……윽…… 하지만…………');
    await kita.say_and_wait('내가 모두를 실망시켜 버렸어────!!');
    await kita.say_and_wait('우아아아앙──!');
    await daiya.say_and_wait('……키타짱……');
    await daiya.say_and_wait(
      '……키타짱, 오늘 컨디션이 최상은 아니었지……?',
    );
    await kita.say_and_wait('응…… 으윽…… 오늘은 왠지…… 이상하게 몸이 무거웠어……');
    await kita.say_and_wait(
      '페이스를 올려야 한다는 건 머리로는 알겠는데…… 윽, 다리에…… 점점 힘이 안 들어가서……!',
    );
    await kita.say_and_wait('……나 정말 열심히 노력했는데……');
    await kita.say_and_wait(
      '……『타카라즈카 기념』…… 으윽…… 팬 투표 1위를 해서…… 정말 기뻤단 말이야……!',
    );
    await kita.say_and_wait(
      '모두의 기대에 꼭 부응하고 싶어서…… 그래서 정말, 정말 열심히 했단 말이야!!',
    );
    await kita.say_and_wait('그런데 왜 이렇게 된 거야!?');
    await daiya.say_and_wait(
      '내 생각엔…… 몸에 피로가 쌓여 있었던 게 아닐까? 나도 지난번 『텐노상(봄)』 때 피로가 남아서 고생했었잖아.',
    );
    await era.printAndWait(
      `『텐노상(봄)』의 격전으로 인해 키타산 블랙의 몸에도 피로가 쌓여 있었다. ${kita.sex} 본인은 눈치채지 못했지만 말이다.`,
    );
    await era.printAndWait(
      `${kita.sex}는 모두의 기대에 부응하고 싶은 마음이 너무 커서 피로를 느끼지 못했을 뿐, 피로는 사라지지 않고 ${kita.sex}의 몸속에 차곡차곡 쌓여 가고 있었다.`,
    );
    await daiya.say_and_wait('너답게 너무 무리해 버린 거야…… 정말 키타짱답네.');
    await kita.say_and_wait('……내가 지쳐 있었다고……? 말도 안 돼…… 하지만……');
    await kita.say_and_wait(
      '내 몸이 힘든 줄도 모르고…… 결국 이렇게 모두의 기대를 배신하다니……',
    );
    await kita.say_and_wait('분해…… 정말 너무 분해……!');
    await daiya.say_and_wait(
      '──괜찮아. 키타짱이 얼마나 노력했는지는 팬분들도 분명히 알고 계실 거야.',
    );
    await daiya.say_and_wait(
      '다들 언제나 노력하는 키타짱을 지켜보며 응원을 얻던 사람들이잖아.',
    );
    await kita.say_and_wait(
      '……하지만, 소중한 표를 던져주셨는데 이렇게 망쳐버렸으니…… 다들 나한테 실망했을 거야……',
    );
    await daiya.say_and_wait('……기대에 부응하지 못했다고 해서, 더 이상 널 응원하지 않을까……?');
    await kita.say_and_wait(
      '응…… 왜냐하면, 주목받지 못하던 내가 관심을 받기 시작한 건 계속 레이스에서 이겼기 때문인걸……',
    );
    await kita.say_and_wait('계속 이겼으니까 지지해 주는 사람들도 늘어난 거야!');
    await kita.say_and_wait(
      `레이스에서 이기지 못한다면, 난 그냥 눈에 띄지도 않는 평범한 ${daiya.get_uma_sex_title()}일 뿐이야……`,
    );
    await kita.say_and_wait(
      '난 다이아짱처럼 엄청난 뒷심이 있는 것도 아니고, 그런 무기도 없이 그저 노력밖에 모르는 평범한……',
    );
    await daiya.say_and_wait('그게 바로 키타짱의 대단한 점이야.');
    await kita.say_and_wait('어……?');
    await daiya.say_and_wait(
      '흔들림 없이 노력할 수 있다는 것. 사람들은 바로 그런 네 모습을 보고 응원하고 싶어진 걸 거라고 생각해.',
    );
    await daiya.say_and_wait(
      '키타짱이 지금까지 걸어온 노력의 발자취를 보며 다들 너에게 깊은 유대감을 느낀 거야.',
    );
    await era.printAndWait(
      `방금 관람을 마친 남성 관객 A 「키타산 블랙이 매번 저렇게 필사적으로 달리는 걸 보면 나도 모르게 응원하게 된다니까. 정말 한결같은 모습이야.」`,
    );
    await era.printAndWait(
      `방금 관람을 마친 남성 관객 B 「그 기분 알지! 특별히 화려한 점은 없어도, 평범하고 우리랑 비슷한 느낌이 들어서 말이야.」`,
    );
    await era.printAndWait(
      `방금 관람을 마친 남성 관객 B 「그래서 더 이겼으면 좋겠어! 마치 내가 성공한 것 같은 기분이 들거든!」`,
    );
    await daiya.say_and_wait(
      '팬분들은 키타짱이 이기면 마치 자기 일처럼 기뻐해 주고 있어.',
    );
    await daiya.say_and_wait(
      '『키타산이 노력하니까, 나도 힘낼 수 있어.』…… 키타짱은 나랑 다르게, 이런 방식으로 지지받고 있는 거야.',
    );
    await daiya.say_and_wait('가끔은 그런 네가 조금 부럽기도 해.');
    await kita.say_and_wait('아……');
    await era.printAndWait(
      '관객 A 「이제 『봄 시니어 삼관』이 코앞이네! 꼭 따내자, 키타산!!」',
    );
    await era.printAndWait('관객 A 「키타산──! 작년의 설욕을 꼭 갚아줘!!」');
    await daiya.say_and_wait(
      '팬들이 자신을 투영하며 응원해 준다는 건 정말 멋진 일이야.',
    );
    await daiya.say_and_wait(
      '팬분들은 단순히 네 실력이 강해서 좋아하는 게 아니라, 너라는 존재 자체를 사랑해 주고 있어.',
    );
    await daiya.say_and_wait('그러니까, 괜찮아.');
    await kita.say_and_wait('다이아짱……');
    await daiya.say_and_wait(
      '비록 오늘은 실망하셨을지 몰라도, 팬분들은 여전히 키타짱에게 커다란 『기대』를 품고 계실 거야.',
    );
    await kita.say_and_wait('……기대……');
    await daiya.say_and_wait('나도 기대하고 있어.');
    await kita.say_and_wait('…………');
    await daiya.say_and_wait('……난 키타짱을 믿으니까.');
    era.drawLine();
    await era.printAndWait(
      `${is_race_end ? '대기실' : '지하 통로'}에서 나온 뒤, 사토노 다이아몬드는 무언가 생각에 잠긴 듯했다.`,
    );
    await daiya.say_and_wait('……트레이너 선생님은 어떤 저를 보고 싶으신가요?');
    era.printButton('「음……? 무슨 뜻이야?」', 1);
    await era.input();
    await era.printAndWait(`${me.name}은(는) 의미를 이해하지 못해 ${daiya.sex}에게 되물었다.`);
    await daiya.say_and_wait(
      '방금 전부터 생각했어요. 다들 키타짱에게서 자신의 모습을 보며 응원한다면, 저를 지지해 주시는 분들은 무엇 때문에 응원하시는 걸까 하고요.',
    );
    await daiya.say_and_wait(
      `『명문 ${daiya.get_uma_sex_title()}』로서의 공헌…… 키타짱은 이미 사람들에게 웃음을 주는 공헌을 하고 있어요.`,
    );
    await daiya.say_and_wait('그런데 저는 제가 무엇을 해야 할지 아직 떠오르지 않아서……');
    await daiya.say_and_wait(
      `우마무스메계의 발전을 위해 제가 해야 할 일……`,
    );
    await daiya.say_and_wait(
      `우마무스메로서 제 레이스가 사람들에게 전해줄 수 있는 게 대체 무엇일지……`,
    );
    await era.printAndWait(
      `사람들이 사토노 다이아몬드에게 바라는 것. ${daiya.sex}의 레이스가 팬들에게 어떤 꿈을 줄 수 있을지.`,
    );
    await era.printAndWait(
      `「명문 우마무스메」들은 저마다 각기 다른 꿈을 사람들에게 전달한다.`,
    );
    era.printButton('「난 너에게서 『가능성』을 느껴」', 1);
    await era.input();
    await daiya.say_and_wait('가능성……');
    await era.printAndWait(
      `흔들림 없는 의지를 간직한 ${daiya.sex}에게선 불가능마저 뒤엎을 수 있는 에너지가 느껴진다.`,
    );
    await era.printAndWait(
      `사토노 가문의 오랜 징크스를 극복해낸 ${daiya.sex}라면, 그 무엇이라도 해낼 수 있을 것만 같은 기분이 든다.`,
    );
    await daiya.say_and_wait('그렇군요…… 감사합니다.');
    await daiya.say_and_wait('……혼자서 좀 더 깊이 생각해 볼게요……');
    await era.printAndWait(
      `사토노 다이아몬드는 다시 생각에 잠겼다. ${
        daiya.sex
      }의 생각을 방해하지 않기 위해, ${me.get_couple_title()}은 정적 속에서 함께 역으로 향했다.`,
    );
  },
  async japa_cup_common(daiya, me, kita, teio) {
    await teio.say_and_wait('각오해 두라고!!');
    await daiya.say_and_wait('──윽! 네!!');
    await kita.say_and_wait('좋아요!! 저도 전력을 다해 상대해 주겠어요!');
    await daiya.say_and_wait(
      `어떤 순간에도 도전을 잊지 않는 마음…… 그것이 테이오 씨가『명문 우마무스메』로서 나아가는 방식……`,
    );
    await daiya.say_and_wait(
      '맥퀸 씨가 도전을 받아들이는 입장이라면, 테이오 씨는 도전자로서의 입장.',
      true,
    );
    await daiya.say_and_wait('그렇다면 저는……', true);
    await daiya.say_and_wait(
      '사토노 가문 최초의 G1 승리…… 징크스에 도전하고, 징크스를 깨부수며, 승리를 쟁취한다.',
      true,
    );
    await daiya.say_and_wait(
      '키타짱을 쫓아, 꿈에 그리던 트윙클 시리즈의 무대에서 레이스를 펼친다.',
      true,
    );
    await daiya.say_and_wait('저에게 가장 어울리는 방식은……!', true);
    await daiya.say_and_wait('……트레이너 선생님.');
    await era.printAndWait(
      '잠시 침묵이 흐른 뒤, 사토노 다이아몬드는 결의에 찬 표정으로 입을 열었다.',
    );
    await daiya.say_and_wait('전 앞으로도 멈추지 않고 계속해서 도전해 나가기로 마음먹었어요.');
    era.printButton('「멈추지 않고 도전한다니……?」', 1);
    await era.input();
    await daiya.say_and_wait(
      '네. 전 지금까지 여러 가지 일에 도전해 왔어요. 사토노 가문을 가로막던 징크스, 그리고 키타짱에게도요.',
    );
    await daiya.say_and_wait(
      `그러니 제가 『명문 우마무스메』로서 계속해서 무언가에 도전하는 것이 저에게 가장 어울리는 길 아닐까요?`,
    );
    await daiya.say_and_wait(
      '맥퀸 씨와 테이오 씨에게 도전하며 사토노 가문의 역사에 새로운 장을 열었던 것처럼 말이에요.',
    );
    await daiya.say_and_wait(
      `전 수많은 것들에 도전하며 사토노 가문과 우마무스메계의 새로운 역사를 개척하고 싶어요.`,
    );
    await daiya.say_and_wait(
      '그렇게 생각하니 다시금 깨달았어요. 제가 해외 레이스에 도전하고 싶어 한다는 사실을요.',
    );
    await daiya.say_and_wait(
      '단순히 모두에게 가능성을 보여주기 위해서가 아니라, 제 자신의 진심 어린 염원을 이루기 위해서예요.',
    );
    await daiya.say_and_wait(
      `역사 깊은 해외 레이스에서 승리해 사토노의 이름을 우마무스메계의 역사에 새기고 싶어요.`,
    );
    await daiya.say_and_wait(
      `그리고 사토노 가문과 일본 우마무스메계의 새로운 지평을 여는 것──`,
    );
    await daiya.say_and_wait(
      `그것이 바로 제가 우마무스메계를 위해 할 수 있는 공헌이라고 생각해요.`,
    );
    era.printButton('「자신만의 답을 찾아냈구나」', 1);
    await era.input();
    await daiya.say_and_wait('네!');
    await daiya.say_and_wait(
      `『명문 우마무스메』 사토노 다이아몬드로서 지녀야 할 모습…… 이제 목표가 확실해졌어요.`,
    );
    await daiya.say_and_wait(
      `전 반드시 『아리마 기념』에서 우승해 당당히 『명문 우마무스메』의 대열에 합류하겠어요!`,
    );
  },
};