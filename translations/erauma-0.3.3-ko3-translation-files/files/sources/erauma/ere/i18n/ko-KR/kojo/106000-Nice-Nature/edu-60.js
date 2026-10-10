// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/106000-Nice-Nature/edu-60"),

  // [번역 완료] arim_kin_classical
  arim_kin_classical: (() => {
    const title = '遠望';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await nature.say_and_wait('이, 이겨 버렸어……! 『아리마 기념』에서 우승했어……');
      era.printButton('「축하해!」', 1);
      await era.input();
      await nature.say_and_wait('트레이너! 들어 봐, 나……!');
      await nature.say_and_wait('전부 들렸어. 모두가 응원하는 목소리!');
      await nature.say_and_wait('거짓말 같지? 하지만 진짜야!');
      await nature.say_and_wait(
        '평소에는 내 심장 소리와 숨소리, 바람 소리밖에 들리지 않았는데.',
      );
      await nature.say_and_wait(
        '오늘은…… 똑똑히 들렸어. 『네이처, 힘내!』라고 외치는 소리가!',
      );
      await nature.say_and_wait(
        '그래서 체력이 바닥날 것 같을 때도 버틸 수 있었어. 정말…… 즐겁게 달렸어!',
      );
      await era.printAndWait(
        `나이스 네이처와 응원하는 사람들 사이에는 깊은 유대가 있다. ${nature.sex}에게 오늘의 『아리마 기념』은 특별한 경기였던 듯하다.`,
      );
      await nature.say_and_wait('아직 더 달리고 싶어. 내년에도…… 이 무대에 서고 싶어!');
      await nature.say_and_wait('……아, 바보야! 너무 앞서갔잖아!');
      await nature.say_and_wait('하지만 정말 즐거웠단 말이야…… (우물쭈물)');
      await era.printAndWait(
        '확실히 지금부터 내년 『아리마 기념』을 목표로 삼는 건 조금 이르다. 그 사이 지금의 기세를 유지할 레이스를 넣는다면……',
      );
      era.printButton('「『다카라즈카 기념』도 있어!」', 1);
      await era.input();
      await nature.say_and_wait(
        '『다카라즈카 기념』…… 팬 투표로 출전 선수를 정하는 레이스 맞지? 『아리마 기념』처럼……',
      );
      await nature.say_and_wait(
        '나, 이런 레이스에서 더 힘을 낼 수 있을지도 몰라. 응, 출전하고 싶어…… 『다카라즈카 기념』!',
      );
      await era.printAndWait(
        `하지만 그 레이스까지는 아직 시간이 조금 남았다. ${you.name}와 나이스 네이처는 그동안 여러 레이스에 출전하며 『다카라즈카 기념』을 향해 성장하기로 했다.`,
      );
      await nature.say_and_wait(
        '우리 너무 앞서가나? 여기서 다음 레이스까지 정하다니──',
      );
      await era.printAndWait(
        '상점가 사람들 「네이처──! 멋진 달리기였어──!」',
      );
      await era.printAndWait(
        `상점가 사람들 「세계 최고의 ${nature.uma_sex_title}야! 우리의 자랑이야──!」`,
      );
      await nature.say_and_wait(
        '잠깐, 모, 모두들……! 너무 시끄러워, 여긴 가게 안도 아니잖아!',
      );
      await nature.say_and_wait('그보다 세계 최고라니 너무 과장하잖아! 정말, 부끄러워!');
      await nature.say_and_wait('정말이지…… 에헤헤.');
      era.printButton('「지금은 마음껏 기뻐하자.」', 1);
      await era.input();
      await nature.say_and_wait(
        '그게 나한테는 제일 어렵다니까! 알고 있지? 하지만 지금은…… 그래. 네 말이 맞아.',
      );
      await nature.say_and_wait(
        '지금은…… 마음껏 기뻐해야겠지. 여기서 모든 게 끝나는 것도 아니니까.',
      );
      await era.printAndWait(
        `나이스 네이처는 나지막이 중얼거리며 『아리마 기념』에서 함께 달렸던 ${nature.uma_sex_title}들을 바라보았다……`,
      );
      await nature.say_and_wait('오늘도…… 울퉁불퉁한 트로피, 준비해 뒀어?');
      era.printButton('「물론이지!」', 1);
      await era.input();
      await nature.say_and_wait(
        '……에헤헤. 고마워. 그럼…… 먼저 반성회부터 하자.',
      );
      await nature.say_and_wait(
        '테이오와의 차이에만 신경 쓰다가 다른 라이벌들을 잊고 있었어.',
      );
      await nature.say_and_wait(
        '오늘 레이스에서 그걸 깨달았지. 조금이라도 방심했다면 졌을 거야.',
      );
      await nature.say_and_wait(
        '지금은 이겼지만…… 앞으로 주변 선수들은 더 강해질 테니까.',
      );
      await nature.say_and_wait(
        '이대로는 안 돼. 테이오에게 이기겠다고 말하는 것만으로는 부족해.',
      );
      await era.printAndWait(
        `세대를 넘어 경쟁하는 『아리마 기념』에 출전하면서 ${nature.sex}의 시야가 넓어졌다…… 성장했다는 증거다!`,
      );
      await nature.say_and_wait('다른 선수들에 관해서도 더 많이 알아야겠어……!');
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그것도——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] arim_kin_senior
  arim_kin_senior: (() => {
    const title = '아리마의 승자는……';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, callname) => {
      await nature.say_and_wait('아……');
      await nature.say_and_wait('나…… 이긴 거 맞지?');
      era.printButton('「네이처, 네가 해냈어!」', 1);
      await era.input();
      await nature.say_and_wait(`${callname}……`);
      await nature.say_and_wait('현실감이 전혀 안 느껴져…… 나 정말 이긴 거야?');
      await era.printAndWait(
        '관객들 「나이스 네이처──!! 축하해──!!」',
      );
      await nature.say_and_wait('──윽! 어? 세상에…… 이렇게 많은 사람이……');
      await era.printAndWait('상점가 사람들 「네이처──! 축하한다──!!」');
      await nature.say_and_wait('상점가 사람들도…… 다들 와주셨구나.');
      await nature.say_and_wait(
        '모두가 나를 기다려준 거였어. 그리고 난…… 드디어 모두에게 보답했어.',
      );
      era.printButton('「전부 네가 노력해서 쟁취한 결과야」', 1);
      await era.input();
      await nature.say_and_wait('……');
      await nature.say_and_wait(`으아아앙～～～～! ${callname}……!`);
      await nature.say_and_wait(
        '포기하지 않길 정말 잘했어……! 꿈을 계속 쫓길 정말 잘했어～～!',
      );
      await era.printAndWait(
        `이건 ${nature.sex}가 예전에 흘린 불안한 눈물이 아니다. 기쁨의 눈물이 땀과 함께 햇살 아래서 반짝이고 있었다. 그때——`,
      );
      await teio.say_and_wait('──정말이지, 왜 울고 그러는 거야!?');
      await nature.say_and_wait('……! 테이오……!');
      await teio.say_and_wait(
        '너는 나를 꺾고 1등을 한 거라고? 나를…… 이겼단 말이야……! 승리자라면 위풍당당하게 웃어야지!',
      );
      await nature.say_and_wait(
        '……응, 응, 맞아. 너도 항상 웃고 있었지……',
      );
      await nature.say_and_wait('미안, 이제 괜찮아. 나…… 더는 안 울게.');
      await teio.say_and_wait(
        '그래야지. 계속 울고 있으면 안 들린다고. 이 소리가──',
      );
      await era.printAndWait('관객들의 환호 「와아아아아…… 네이처──!」');
      await teio.say_and_wait('──이 뜨거운 환호성! 이건 전부 네 거야!');
      await nature.say_and_wait('알고 있어. 아주…… 잘 들려.');
      await nature.say_and_wait(
        '……고마워, 테이오. 네가 없었으면 난…… 여기까지 올 수 없었을 거야. 항상 내가 뒤쫓을 수 있게 해줘서 고마워. 솔직히 네 뒤를 달리는 건 정말 힘들었어. 하지만…… 비겁했던 예전의 나는 그 위치가 편안하다고 생각하기도 했었지. 하지만 이제부터는 어떤 도전이든 당당하게 맞설 거야.',
      );
      await nature.say_and_wait('내 이야기 속에서는, 내가 바로 주인공이야!');
      await era.printAndWait(
        '레이스가 끝난 후 승리자 인터뷰 시간. 지금의 나이스 네이처는 수많은 플래시 세례를 받고 있었다.',
      );
      await era.printAndWait(
        '기자A 「──이번 『아리마 기념』은 정말 쟁쟁한 라이벌들이 많았습니다. 자신이 우승할 수 있었던 원동력이 무엇이라고 생각하시나요?」',
      );
      await nature.say_and_wait('글쎄요…… 저도 다들 정말 강하다고 생각했어요.');
      await nature.say_and_wait(
        `하지만 저도 『강한』 ${nature.uma_sex_title}인걸요. 제 실력을 모두 발휘했으니까요.`,
      );
      await nature.say_and_wait('음, 제가 정말 노력했기 때문이라고…… 당당히 말할 수 있어요!');
      await era.printAndWait(
        '기자A 「그럼 나이스 네이처 씨, 마지막으로 팬들에게 한마디 부탁드립니다!」',
      );
      await nature.say_and_wait(
        '저기, 항상 저를 응원해주신 여러분, 감사합니다.',
      );
      await nature.say_and_wait(
        '제가 기대를 저버릴 때도 많았지만, 여러분은 변함없이 저를 지지해주셨어요.',
      );
      await nature.say_and_wait(
        '여러분 덕분에 오늘 제가 여기 올 수 있었어요…… 비록 우여곡절도 많았지만요!',
      );
      await nature.say_and_wait('……조금 이기적인 부탁 하나 해도 될까요?');
      await nature.say_and_wait(
        '그게…… 앞으로도 여러분이 계속 저를 응원해주셨으면 좋겠어요──',
      );
      await nature.say_and_wait(
        '물론 앞으로 컨디션이 안 좋거나 완전히 망칠 때도 있겠죠.',
      );
      await nature.say_and_wait(
        '전 타고난 천재도 아니고, 엄청난 노력가도 아니니까요.',
      );
      await nature.say_and_wait('하지만…… 하지만 말이죠, 이것 하나만큼은 약속할게요.');
      await nature.say_and_wait(
        `——전 여러분의 신뢰를 저버리지 않는 ${nature.uma_sex_title}가 될게요!`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] begin_race
  begin_race: (() => {
    const title = '평소처럼';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await nature.say_and_wait(
        `응응. ${self_call}, 무사히 데뷔전을 치렀네……`,
      );
      era.printButton('「수고했어.」', 1);
      await era.input();
      await nature.say_and_wait('고마워. 제대로 한판 붙고 왔어—— 하하.');
      await nature.say_and_wait('어때? 내 달리기…… 어땠어?');
      era.printButton('「정말 좋았어!」', 1);
      await era.input();
      await nature.say_and_wait('아하하! 대답이 시원시원하네——');
      await nature.say_and_wait(
        `나도 먼저 ${callname}의 앞으로의 계획을 알고 싶은걸.`,
      );
      era.printButton('「먼저 물어볼게. 뛰고 싶은 레이스가 있어?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……뛰고 싶은 레이스라…… 지금의 나한테 목표를 말할 자격이 있다고 생각해?',
      );
      await nature.say_and_wait(
        '그런 건 트레이너가 정해 주면 돼. 자, 이제 실력을 보여 줄 차례야~',
      );
      await era.printAndWait(
        `데뷔 전부터 ${you.name}은(는) ${nature.sex}가 중거리 레이스에 적합하다고 생각했다. ${nature.sex}의 막판 추입은 날카롭고 버텨야 할 때도 잘 버틴다.`,
      );
      await era.printAndWait(
        '앞으로 클래식 전선을 내다보면 첫 번째로 고를 레이스는——',
      );
      era.printButton('「『와카고마 스테이크스』에 출전해 볼까?」', 1);
      await era.input();
      await nature.say_and_wait('오, 그렇군. 오픈 레이스에서 실력을 시험하자는 거네.');
      await nature.say_and_wait('나쁘지 않은데? 그렇게 하자.');
      era.printButton('「그럼 평소처럼 좋은 성적을 내 보자.」', 1);
      await era.input();
      await nature.say_and_wait(
        '평소처럼이라니…… 그게 3착이면 된다는 뜻이야? 내 목표는 3착이 아니거든.',
      );
      await nature.say_and_wait('하아, 매번 1착을 차지하는 괴물도 있긴 하지……');
      await nature.say_and_wait(
        `……테이오는 어떻게 하려나. ${nature.sex}는 어느 레이스에 나갈까?`,
      );
      await era.printAndWait(
        `토카이 테이오는 나이스 네이처와 같은 세대에 데뷔했으니 ${nature.sex}가 신경 쓰는 것도 무리는 아니다. 하지만……`,
      );
      era.printButton('「가장 중요한 건 훈련이야!」', 1);
      await era.input();
      await nature.say_and_wait(
        `알고 있다니까. 서로 맞붙지 않았으면 좋겠다는 생각뿐이야~ 그럼 앞으로도 잘 부탁해~`,
      );
      await era.printAndWait(
        '그렇게 다음 목표는 『와카고마 스테이크스』로 정해졌다!',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] chun_hai
  chun_hai: (() => {
    const title = '마지막 대무대를 향해';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('해냈어!');
      await nature.say_and_wait('1착. 온 힘을 다해 따낸…… 1착!');
      await nature.say_and_wait('길었네, 정말……');
      await nature.say_and_wait(
        '그렇게 약했던 내가 격려받고, 이끌려서 필사적으로 뒤를 쫓아왔는데……',
      );
      await nature.say_and_wait('——이제야 내 힘으로 이 자리에 섰어!');
      await nature.say_and_wait(
        '이제 가슴을 펴고 싸울 수 있어. 그 무대에서…… 모두와 함께!',
      );
      era.printButton('「드디어 이 날이 왔구나!」', 1);
      await era.input();
      await nature.say_and_wait(
        '응! 이제 도망치지 않을 거고, 모두의 기대도 저버릴 수 없으니까.',
      );
      await nature.say_and_wait('반드시…… 이길 거야.');
      await nature.say_and_wait('——『아리마 기념』에서 빛나는 주인공이 될 거야!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] grass_baseball
  grass_baseball: (() => {
    const title = '동네 야구로 응원!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait('경기장이 여기야? 오～ 정말 사람이 많이 모였네～');
      await nature.say_and_wait(
        '그건 그렇고, 동네 야구를 도와주기로 하다니…… 트레이너 일만으로도 충분히 바쁠 텐데.',
      );
      await era.printAndWait(
        `며칠 전 상점가 사람들의 초대를 받은 ${you.name}은(는) 동네 야구 대회에 출전하기로 했다.`,
      );
      era.printButton('「다들 항상 널 응원해 주시니까」', 1);
      await era.input();
      await nature.say_and_wait('에휴, 다들 나한테 잘해주시긴 하지만……');
      await nature.say_and_wait('……그래도, 너무 무리해서 다치지는 마～?');
      await nature.say_and_wait('평소에도 이미 충분히 무리하고 있으니까……');
      await era.printAndWait('그렇게 상점가 동네 야구 대항전이 막을 올렸다.');
      era.drawLine();
      await era.printAndWait(
        '두 팀 모두 한 치의 양보도 없이 0대 0의 팽팽한 접전이 이어졌다.',
      );
      await nature.say_and_wait(
        '와, 레이스가 점점 뜨거워지네～ 근데 트레이너 쌤, 엄청 지쳐 보이는데.',
      );
      await nature.say_and_wait(
        '편드는 건 아니지만, 이미 충분히 노력했으니까 이제 교체하는 게 낫지 않아?',
      );
      era.printButton('「아직 더 할 수 있어!……」', 1);
      await era.input();
      await nature.say_and_wait(
        '에휴, 열혈이시긴…… 아, 알았어. 내가 챙겨주면 더 힘내겠다는 거지?',
      );
      await nature.say_and_wait(
        '마실 것 좀 챙겨올 테니까 얌전히 여기 앉아 있어～?',
      );
      await nature.say_and_wait('정말이지…… 어디 보자, 집행위원회 텐트가……');
      await era.printAndWait(
        `상점가 아저씨 「이런~ 조금만 더 하면 되는데. ${you.sex}도 열심히 하는데 좀처럼 점수가 안 나네……」`,
      );
      await nature.say_and_wait('오, 쌤 이야기를 하고 계시나……?', true);
      await era.printAndWait(
        '상점가 아주머니 「긴장해서 그럴 거야. 도와주러 온 건데 주변에 모르는 사람들뿐이니……」',
      );
      await era.printAndWait(
        `상점가 아저씨 「음…… 어떻게 하면 ${you.sex}가 기운을 차릴 수 있을까?」`,
      );
      await nature.say_and_wait('어쩐지…… 꽤 익숙한 상황이네……', true);
      await era.printAndWait(
        '이 대화를 들은 나이스 네이처는 자신이 레이스할 때 받았던 모두의 응원을 떠올렸다……',
      );
      await nature.say_and_wait(
        '내 등을 밀어주고, 계속 노력하게 해준 사람이 바로 모두와 트레이너 쌤이였지……',
        true,
      );
      await nature.say_and_wait(
        '걱정만 하고 있을 게 아니라, 이번에는 내가──',
        true,
      );
      era.drawLine();
      await era.printAndWait(
        `드디어 9회 말. 1점만 내면 끝나는 상황에서 ${you.name}의 타석이 돌아왔다.`,
      );
      await era.printAndWait(
        '마운드에 서 있는 아저씨는 과거 고시엔 후보 선수였던 실력자.',
      );
      await era.printAndWait(
        `${you.name}은(는) 이미 투 스트라이크로 몰려, 이대로 끝날 것 같던 그때──`,
      );
      await nature.say_and_wait('힘내──!!');
      // Do not translate this
      era.printWholeImage('内恰_应援_半身', {
        width: 8,
        offset: 8,
      });
      await era.printAndWait(
        '뒤를 돌아보니, 어느새 치어리더 복장으로 갈아입은 네이처가 관객석에 있었다.',
      );
      await era.printAndWait(`그녀는 온 힘을 다해 ${you.name}을(를) 응원하고 있었다.`);
      await nature.say_and_wait(
        '지지 마, 트레이너 쌤! 한 공만 더! 치면 이기는 거야!',
      );
      await nature.say_and_wait('기운 내! 기운! 다 같이 외쳐요!');
      await era.printAndWait('사람들 「와아아～! Go Fight Win!」');
      await nature.say_and_wait('히, 힘내! 트레이너!');
      await era.printAndWait(
        `나이스 네이처가 부끄러워하면서도 크게 응원했고, ${nature.sex} 주위의 사람들도 한마음이었다. 기대에 부응해야 한다……!`,
      );
      era.printButton('「흐아아압──!!」', 1);
      await era.input();
      await nature.say_and_wait('날려버려──!!');
      await era.printAndWait('깡──!');
      await nature.say_and_wait(
        '해냈어～! 성공이야! 쌤 대단해! 홈런! 끝내기 홈런이야!',
      );
      era.drawLine();
      era.printButton(
        '「응원해 줘서 고마워!」',
        1,
      );
      era.printButton(
        '「네 응원 덕분이야!」',
        2,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「네이처～! 고마워～!」', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            '으윽…… 그렇게 뜨거운 눈빛으로 쳐다보니까 민망하잖아……',
          );
          await nature.say_and_wait(
            '……고맙다는 말을 해야 할 건 내 쪽이야. 항상 응원해 줘서 고마워.',
          );
          await nature.say_and_wait(
            '아무튼, 앞으로도 계속 힘낼 테니까…… 아～ 나답지 않은 소리를 해버렸네, 정말이지～!',
          );
          await era.printAndWait(
            `나이스 네이처는 쑥스러워하면서도 진심으로 ${you.name}을(를) 응원했다. 오늘 하루, ${you.name}은(는) 무엇과도 바꿀 수 없는 소중한 추억을 남겼다!`,
          );
          break;
        case 2:
          await nature.say_and_wait(
            `아냐 아냐, 그런 말은 하지 마. ${callname}은(는) 이미 충분히 열심히 했고 자신의 실력으로 따낸 성과니까. 하지만……`,
          );
          await era.printAndWait('나이스 네이처는 부끄러운 듯 시선을 돌렸다.');
          await nature.say_and_wait(
            '응원하는 보람이 있네. 다음에 야구 할 때도 응원하러 가줄까…… 그냥 해본 소리야.',
          );
          await era.printAndWait(
            `${you.name}은(는) 서로의 깊은 유대감을 느꼈다. 정말 멋진 하루였다!`,
          );
          break;
        case 3:
          await nature.say_and_wait(
            '앗, 그렇게 크게 소리 지르지 마～ 이목이 집중되잖아!',
          );
          await era.printAndWait(
            `나이스 네이처는 붉어진 얼굴로 ${you.name}의 외침에 답했다.`,
          );
          await nature.say_and_wait('정말이지～ 나 옷 갈아입으러 갈 거야!');
          era.printButton('「옷 갈아입는 건 조금 나중에 하면 안 될까?」', 1);
          await era.input();
          await nature.say_and_wait(
            '왜 그래? 이 옷 엄청 부끄럽단 말이야. 게다가 혼자만 휑해서 추운 것 같기도 하고……',
          );
          await era.printAndWait(
            `나이스 네이처는 투덜거리며 발걸음을 멈추고 ${you.name}을(를) 돌아보았다.`,
          );
          era.printButton('「그게…… 이 차림의 네이처가 너무 귀여워서……」', 1);
          await era.input();
          await nature.say_and_wait('윽! 하아? 그런 기습은 반칙이라고……');
          await era.printAndWait(
            '예상치 못한 말에 나이스 네이처는 한동안 어쩔 줄 몰라 했다.',
          );
          era.printButton('「……욕구가…… 좀 억제가 안 되네……」', 1);
          await era.input();
          await nature.say_and_wait(
            '……ㅆ,쌔,쌤 갑자기 또 무슨 소리를 하는 거야아아아아!',
          );
          await era.printAndWait('연이은 기습에 나이스 네이처는 비명을 질렀다. ');
          await era.printAndWait(
            '하지만 이내 상점가 사람들의 시선이 집중된 것을 깨닫고는 ',
          );
          await era.printAndWait('황급히 주변에 웃으며 수습한 뒤 다시 고개를 돌려 ');
          await era.printAndWait('둘만 들릴 정도의 작은 목소리로 투덜거렸다.');
          await nature.say_and_wait(
            `이 변태 ${callname}! 이런 데서 그런 말 하지 마!`,
          );
          era.printButton('「하지만 네이처 차림이 너무 야한걸……」', 1);
          await era.input();
          await nature.say_and_wait(
            '으냐아아아! 알았으니까! 더 말하지 마!',
          );
          await era.printAndWait(
            `얼굴이 새빨개진 네이처가 필사적으로 손을 휘두르며 ${you.name}의 말을 막았다.`,
          );
          await nature.say_and_wait(
            `으으…… ${callname}을(를) 이렇게 흥분시킨 건 내 탓이기도 하지.`,
          );
          await nature.say_and_wait(
            '책임지고 해결해 줄 테니까…… 그래도 이런 데서 할 순 없잖아?',
          );
          era.printButton('「탈의실로 가자」', 1);
          await era.input();
          await nature.say_and_wait('거기도 들키기 쉬운 곳이잖아!');
          era.printButton('「그럼 목소리를 죽여달라고 부탁할게」', 1);
          await era.input();
          await nature.say_and_wait(`그게 무슨 소리야! 잠깐…… ${callname}!?`);
          await era.printAndWait(
            `${you.name}은(는) 나이스 네이처의 반대를 기다리지 않고 ${nature.sex}를 안아 들고 탈의실로 뛰어들어 문을 잠갔다.`,
          );
          await era.printAndWait('다행히 이 모습을 본 사람은 없는 것 같다.');
          await era.printAndWait(
            '좁은 공간 안에서 폭풍 같은 전투가 시작되려 하고 있었다……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hard_work_trainer
  hard_work_trainer: (() => {
    const title = (self_call) => `${self_call}와 고생한 트레이너`;
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait('며칠간 꽉 찬 일정으로 이어지던 업무가 드디어 일단락되었다……');
      await era.printAndWait(
        `${you.name}은(는) 스스로에게 줄 보상으로 맛있는 음식을 사기 위해 무거운 몸을 이끌고 상점가로 향했는데──`,
      );
      await nature.say_and_wait(
        '실례합니다, 거기 트레이너님, 잠시만 기다려 주세요!',
      );
      era.printButton('「네이처……?」', 1);
      await era.input();
      await nature.say_and_wait(
        '에휴── 일하느라 바쁘다는 얘기는 들었지만, 이렇게 초췌해질 때까지 일만 한 거야?',
      );
      await nature.say_and_wait(
        `어쩔 수 없네. ${self_call}가 한턱 쏠게. 자, 이쪽으로 와.`,
      );
      await nature.say_and_wait(
        '지금은 개점 준비 중이라 손님은 안 올 거야. 제일 안쪽 가라오케석에 앉아 있어.',
      );
      await nature.say_and_wait(
        `이 가게 사장님이랑 아는 사이거든. 사정을 말씀드렸더니 빌려주신대.`,
      );
      await era.printAndWait(
        `나이스 네이처는 ${you.name}을(를) 어느 가게의 구석 자리로 안내했다.`,
      );
      await nature.say_and_wait(
        `그럼 ${callname}은(는) 뭘 먹고 싶어? 뭐든 괜찮아. 내가 만들 수 있는 거라면 말이야.`,
      );
      era.println();
      era.printButton('「아무거나 좋아, 배고파서 죽을 것 같아……」', 1);
      if (era.get('love:60') >= 75) {
        era.printButton('「네이처……」', 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait(
          '정말이지…… 잠깐만 기다려 봐, 간단하게 뭐 좀 만들어 올게…… 맛은 보장 못 하지만.',
        );
        await era.printAndWait(
          `몇 분 뒤 나이스 네이처는 ${nature.sex}가 직접 만든 볶음밥을 ${you.name}에게 내왔다.`,
        );
        era.printButton('「양이 이렇게 많은데, 괜찮아?」', 1);
        await era.input();
        await nature.say_and_wait(
          '어차피 사장님도 『마음껏 대접하렴』이라고 하셨으니까.',
        );
        await nature.say_and_wait('자 자, 식기 전에 어서 먹어.');
        await era.printAndWait(
          `나온 볶음밥은 비주얼과 맛 모두 훌륭해서, ${you.name}의 젓가락…… 아니, 숟가락이 멈출 줄 몰랐다.`,
        );
        await nature.say_and_wait(
          '너무 과장하는 거 아냐? 그냥 어릴 때부터 엄마를 도와드려서 좀 할 줄 아는 것뿐이야.',
        );
        await nature.say_and_wait('……어라, 벌써 다 먹었어!?');
        era.printButton('「너무 맛있어서 순식간에 다 먹었어」', 1);
        await era.input();
        await nature.say_and_wait(
          '괜찮아 괜찮아, 정말 배고팠던 거지? 주방 정리하고 올 테니까 그릇 이리 줘.',
        );
        await era.printAndWait(`${you.name}은(는) 멀어지는 나이스 네이처의 뒷모습을 배웅했습니다.`);
        await era.printAndWait(
          '배가 불러서인지 갑자기 졸음이 쏟아지며 의식이 멀어진다──',
        );
        await nature.say_and_wait('……라……라라……♪');
        await nature.say_and_wait('우와! 나 때문에 깬 거야?');
        era.printButton('「……그 노래는?」', 1);
        await era.input();
        await nature.say_and_wait(
          '사실 나도 잘 몰라. 옛날에 엄마가 카운터에서 바쁘실 때 자주 부르시던 노래거든.',
        );
        await nature.say_and_wait(
          '옛날 생각이 나서 나도 모르게 흥얼거려 버렸네…… 미안.',
        );
        era.printButton('「오히려 계속 듣고 싶은데」', 1);
        await era.input();
        await nature.say_and_wait(
          `또 그런다～ ${self_call}한테 그런 빈말 안 해도 돼.`,
        );
        era.printButton(
          '「하지만 난 정말 네이처의 노랫소리가 좋은걸. 이 정도 실력이면 위닝 라이브도 문제없겠어!」',
          1,
        );
        await era.input();
        await nature.say_and_wait('흐, 흐응~ 그래? 트레이너 쌤은 참 특이한 취향이라니까.');
        await nature.say_and_wait(
          '……그래도, 『잘한다』가 아니라 『좋다』라고 해준 건 좀 안심되네. 참 편리한 말이야.',
        );
        await nature.say_and_wait(
          '그러면 누구와 비교당할 일도 없고, 누군가를 실망시키지도 않고, 기대에 못 미치는 자신에게 실망할 일도 없으니까.',
        );
        await nature.say_and_wait('아하하. 미안, 말이 너무 안 귀여웠지.');
        era.printButton('「그런 점도 포함해서 네이처가 좋은걸」', 1);
        await era.input();
        await nature.say_and_wait('바…… 바보야!');
        await nature.say_and_wait('그런 말 자꾸 하면 금방 의미가 없어진다고?');
        await era.printAndWait('가게 주인 「준비 다 됐니, 네이처?」');
        await nature.say_and_wait('아주머니, 감사합니다. 정말 큰 도움이 됐어요.');
        await era.printAndWait(
          '가게 주인 「옆에 이분이 소문으로 듣던 그 트레이너군이지? 네이처한테 얘기 많이 들었단다──」',
        );
        await nature.say_and_wait(
          '정말이지──! 그런 얘기 안 하셔도 돼요! 가자, 쌤!',
        );
        era.printButton('「소문……?」', 1);
        await era.input();
        await nature.say_and_wait('가, 자, 고, 요!');
        await era.printAndWait(
          `그렇게 사장님의 따뜻한 시선을 뒤로하며, ${you.name}과(와) 나이스 네이처는 가게를 나섰습니다.`,
        );
      } else {
        await nature.say_and_wait('에…… 에엣?! 나를?!');
        await era.printAndWait(
          '대답을 듣자마자 나이스 네이처의 놀란 얼굴이 순식간에 붉게 물들었다.',
        );
        await nature.say_and_wait(
          '손님이 안 올 거라고는 했지만…… 여기는 엄연히 다른 사람 가게인데……',
        );
        era.printButton('「네이처가 뭐든 된다고 했잖아?」', 1);
        await era.input();
        await nature.say_and_wait('윽…… 그건 그렇지만…… 하지만……');
        await nature.say_and_wait(
          '으으…… 알았어…… 어른의 스트레스와 피로는 이런 걸로 풀어야 효율적이라는 거지……',
        );
        await era.printAndWait(
          `나이스 네이처는 입술을 깨물며 결심한 듯 소파에 지친 채 앉은 ${you.name}에게 다가가 몸을 기댄 뒤 귀에 속삭였다.`,
        );
        await nature.say_and_wait(
          '너무 격렬한 건 안 돼…… 옷이랑 방 치우는 거 귀찮으니까……',
        );
        await nature.say_and_wait('그리고, 아주머니한테 들킬지도 모른단 말이야……');
        await era.printAndWait(
          `물론, ${you.name}이(가) 그 말을 들었는지 어땠는지는 또 별개의 이야기……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] kiku_sho
  kiku_sho: (() => {
    const title = '自分のレース';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '観客「ナイスネイチャ、お疲れさま──！ いい走りだったよ──！」',
      );
      await era.printAndWait(
        'レース後、観客席からの声は、ナイスネイチャが『自分のレース』を走れた証だ。そして──',
      );
      await nature.say_and_wait(
        'トレーナー、あたし……勝った……ちゃんと自分のレースを走れた……よね？',
      );
      era.printButton('「うん！」', 1);
      await era.input();
      await nature.say_and_wait('よかった……えへへ。');
      await nature.say_and_wait(
        '『菊花賞』でこの結果、申し分ない！ あたし、ほんと頑張った！',
      );
      await nature.say_and_wait('今日も……いびつなトロフィー、用意してある？');
      era.printButton('「もちろん、『頑張った賞』だよ！」', 1);
      await era.input();
      await nature.say_and_wait('あ……トレーナーの手づくりトロフィー！');
      await era.printAndWait(
        `『小倉記念』のとき、ナイスネイチャに自信を持たせるため、${you.name} は折り紙のトロフィーを作って渡した。前回${nature.sex}が楽しみにしていたから、${you.name} は今回も作った……`,
      );
      await nature.say_and_wait(
        '……ほんとに作ったんだ。えへへ、相変わらずいびつ。',
      );
      await nature.say_and_wait('いいねいいね。あとで授賞式しよ。');
      await nature.say_and_wait(
        `ネイチャ${nature.sex_code === 1 ? '' : 'さん'}の活躍を祝って♪`,
      );
      await nature.say_and_wait(
        `……今は調子乗れてるけど、テイオーも出てたら、こんなにうまくいかなかったかも……テイオー${nature.sex}、大丈夫かな。怪我、どれくらいなんだろ。`,
      );
      era.printButton(`「${nature.sex}なら大丈夫だよ」`, 1);
      await era.input();
      await nature.say_and_wait('うん……そうだね。');
      await nature.say_and_wait(
        `だって${nature.sex}はテイオーだもん。すぐ復活して、『ボクは無敵だよ！』とか言いそう。`,
      );
      await nature.say_and_wait('……その前に、あたしももう少し強くならないと。');
      era.printButton('「まだ大一番が残ってる」', 1);
      await era.input();
      await nature.say_and_wait(
        'なに？ 冬も近いのに、最近まだ大一番？……あ！ もしかして……',
      );
      era.printButton('「『有馬記念』、挑戦しない？」', 1);
      await era.input();
      await era.printAndWait(
        `ナイスネイチャには厚いファンがいて、『菊花賞』でも実力を出せた。今の${
          nature.sex
        }なら『有馬記念』に挑める！ それだけでなく、『有馬記念』の出走者は今年注目の${nature.uma_sex_title}たちだ。${
          nature.couple_title
        }と走ることで、さらに成長できるはず。`,
      );
      await nature.say_and_wait('『有馬記念』か……');
      await nature.say_and_wait(
        'いつもの応援に報いるなら、いちばんいい舞台……だよね？',
      );
      await nature.say_and_wait(
        '……できないかもしれない。出ても全然力を出せないかも。でも……',
      );
      await nature.say_and_wait('──『有馬記念』に出たい！');
      era.printButton('「じゃあ、挑もう！」', 1);
      await era.input();
      await era.printAndWait(
        `こうして、${you.name} とナイスネイチャはクラシック級最後の挑戦を『有馬記念』に決めた！`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「それから……これも祝いだ」', 1);
        await era.input();
        await nature.say_and_wait('えっ？ なになに？');
        await era.printAndWait(
          'ナイスネイチャの疑問にはすぐ答えず、背後で控え室の鍵をかけた',
        );
        era.printButton('「うちの家系、自慢の染色体だよ」', 1);
        await era.input();
        await nature.say_and_wait(
          '……えっ？ 待って待って待って？ ここでするの？ ここ控え室だよ！',
        );
        await era.printAndWait(
          `${you.name} がいきなり服を脱ぎはじめると、ナイスネイチャの頬が一気に赤くなり、ソファの後ろへ縮こまる。`,
        );
        era.printButton(
          '「大丈夫、ここは防音もいいし、誰も来ない……君も、欲しいんだろ？」',
          1,
        );
        await era.printAndWait(
          `レースを終えたばかりの${nature.uma_sex_title}は、高速で駆けた熱をまだ体に溜め、発情に近い状態になる。今がまさにそれで、勝負服の下のスパッツさえ、わずかに湿っているのがわかる`,
        );
        await nature.say_and_wait('で……でも、汗臭くて——');
        era.printButton(
          '「ネイチャの汗が臭いはずない。むしろそれがいい！」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `ナイスネイチャが言い切る前に、${you.name} はソファへ押し倒し、勝負服の内側へ両手を滑り込ませる。ナイスネイチャもすぐ抵抗をやめ、体を ${you.name} に委ねた……`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] koku_kin
  koku_kin: (() => {
    const title = '도금일지라도';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait(
        `헤헤…… 해냈어, ${callname}. 확실히 성과를 냈다고!`,
      );
      era.printButton('「정말 잘했어!」', 1);
      await era.input();
      await nature.say_and_wait('응!');
      await nature.say_and_wait(
        '후훗…… 저기 말이야, 코쿠라 상점가 분들도 나를 보러 와주셨어. 그냥 한두 마디 나눠본 사이일 뿐인데? 다들 바쁘실 텐데도……',
      );
      await nature.say_and_wait(
        '……그분들이 이렇게 응원해주시는 걸 보니, 이런 것도 나쁘지 않다는 생각이 들어. 나는 그냥 내 방식대로 한 걸음씩…… 천천히 나아가면 되는 거지?',
      );
      await nature.say_and_wait('언젠가 도달할 수 있을지 없을지는 모르겠지만……');
      await nature.say_and_wait(
        `……저기, ${callname}. 조금 한심한 소리 좀 해도 될까?`,
      );
      era.printButton('「뭔데?」', 1);
      await era.input();
      await nature.say_and_wait('……내가 테이오를 이길 수 있을까?');
      await nature.say_and_wait('……농담이야! 그냥 해본 소리니까 잊어버려──');
      era.printButton('「넌 할 수 있어」', 1);
      await era.input();
      await nature.say_and_wait('……아야야…… 아우.');
      await nature.say_and_wait(`……응, ${callname}이라면 분명 그렇게 말해줄 줄 알았어.`);
      await nature.say_and_wait('답을 알고 있으면서도 묻다니, 그래, 나 참 비겁하지. 하지만……');
      await nature.say_and_wait('누군가 나를 밀어주지 않으면 앞으로 나아갈 수가 없거든.');
      await nature.say_and_wait(
        `……테이오가 클래식 전선을 질주하고 있으니, 다음번에 ${nature.sex}는 분명── 『국화상』을 목표로 하겠지.`,
      );
      await nature.say_and_wait(
        '그래서 나도 다음엔…… 『국화상』에서…… 달리고 싶어. 쌤 생각은…… 어때……?',
      );
      era.printButton('「거리가 꽤 늘어날 텐데, 괜찮겠어?」', 1);
      await era.input();
      await era.printAndWait(
        `국화상은 3000미터 레이스다. 이번에 참가한 코쿠라 기념보다 거리가 1000미터나 늘어난다. 나이스 네이처에게는 힘든 싸움이 될지도 모른다. 하지만 ${nature.sex}가 결심했다면……!`,
      );
      await nature.say_and_wait(
        '물론 문제는 아주 많을 거야. 난 아마 그렇게 긴 거리는 잘 못 달릴 테니까.',
      );
      await nature.say_and_wait(
        '그래도…… 이번엔 물러서고 싶지 않아. ──『국화상』에 나가자!',
      );
      era.printButton('「좋아!」', 1);
      await era.input();
      await nature.say_and_wait('하아～～～ 결정됐다. 정말 결정해버렸어.');
      await nature.say_and_wait(
        '네이처짱, 이제 도망갈 곳은 없어. 큰 무대에서 직접 맞붙게 됐다고……',
      );
      await nature.say_and_wait('그래도…… 응. 이것도 나쁘지…… 않으려나?');
      await era.printAndWait(
        `……${nature.sex}가 자신감을 조금 되찾았지만, 『국화상』을 앞두고 ${you.name}은(는) ${nature.sex}를 위해 더 할 일이 있을 것이라 생각했다. 그러다 문득 떠오른 것은——`,
      );
      await nature.used_to_say_and_wait('내가 어떤 성적을 내든, 사람들은 다 기뻐해 줘.');
      await nature.used_to_say_and_wait(
        '다들 웃으면서 노력했다고 칭찬해줘. 하지만 난 스스로 확신이 안 서.',
      );
      await nature.used_to_say_and_wait(
        '음…… 내가 정말 노력했다고 말하기가 좀 그렇단 말이지── 예를 들어, 1등은 아주 명확하잖아? 트로피를 받고, 텐노상이라면 방패 모양 메달 같은 걸 받으니까.',
      );
      await nature.used_to_say_and_wait(
        '그런 걸 보면, 아, 내가 정말 노력했구나, 싶겠지.',
      );
      await nature.used_to_say_and_wait('……하지만 그런 기분은 1등만의 특권이니까.');
      await era.printAndWait(
        `……${you.name}은(는) 분명 ${nature.sex}를 위해 무언가 더 할 수 있을 것이다!`,
      );
      await era.printAndWait('──그렇게, 코쿠라에서 중앙으로 돌아가는 길에……');
      await nature.say_and_wait(
        '아, 트레이너 쌤. 쌤한테 맡겨둔 간식 좀 꺼내도 될까──?',
      );
      await nature.say_and_wait(
        '코쿠라 사람들이 준 일본 과자 말이야. 신칸센 타는 동안 먹을까 해서──',
      );
      era.printButton('「알았어」', 1);
      await era.input();
      await era.printAndWait('（부스럭부스럭…… 툭）');
      await nature.say_and_wait('앗, 뭐가 떨어지려고 해.');
      await nature.say_and_wait('……종이로 접은 트로피……야? 좀 삐뚤삐뚤하네.');
      era.printButton('「……그거, 내가 만든 거야」', 1);
      await era.input();
      await nature.say_and_wait(
        '오~ 트레이너가 만든 거라고? 후훗── 의외로 귀여운 취미가 있네~',
      );
      era.printButton('「네이처 너에게 선물하려고 만든 거야」', 1);
      await era.input();
      await nature.say_and_wait('그렇구나……');
      await nature.say_and_wait('엣!? 나한테!? 왜……?');
      era.printButton('「자신감을 가졌으면 해서」', 1);
      await era.input();
      await nature.say_and_wait('자신감……');
      await you.say_and_wait(
        '어떤 성과를 내더라도 스스로 자신을 갖기 힘든 그 마음, 이해해.',
      );
      await you.say_and_wait(
        '그렇다면 쌓아온 성적을 형태로 만든다면, 조금이라도 자신감이 생기지 않을까 했어.',
      );
      await nature.say_and_wait('……나를 위해…… 일부러 만든……');
      await nature.say_and_wait(
        '……그러니까, 다 큰 어른이 호텔에서 끙끙거리며 종이를 접어 트로피를 만들었다는 거지?',
      );
      await nature.say_and_wait('나 초등학생 아니거든.');
      era.printButton('「그건 그렇네……」', 1);
      await era.input();
      await era.printAndWait(
        `……맞는 말이었다. 만들기는 했지만 어린애 취급하는 것 같아 ${you.name}은(는) 건네줘야 할지 망설이고 있었다……`,
      );
      await nature.say_and_wait('……후훗.');
      await nature.say_and_wait(
        '정말 어쩔 수 없네. 쌤을 봐서 받아줄게.',
      );
      era.printButton('「어?」', 1);
      await era.input();
      await nature.say_and_wait(
        '어라? 왜 놀라고 그래? 나 주려고 만든 거 아냐?',
      );
      await nature.say_and_wait('자자, 어서 이리 내놔. 안 주면 안 돌아갈 거야.');
      era.printButton('「받아주는 거야?」', 1);
      await era.input();
      await nature.say_and_wait('……그야……');
      await nature.say_and_wait(
        '삐뚤삐뚤한 트로피라니, 딱 나한테 어울리잖아?',
      );
      await nature.say_and_wait(
        '도금된 듯한 금색에, 모서리가 비뚤어진 느낌 같은 거. 이거…… 전부 나랑 닮지 않았어?',
      );
      await nature.say_and_wait(
        '어쩐지 친근감이 든달까? ……응, 그러니까, 말하자면. ──고마워.',
      );
      await nature.say_and_wait('……다음 트로피는 더~ 잘 만들길 기대할게.');
      era.printButton('「다음이라니!?」', 1);
      await era.input();
      await nature.say_and_wait(
        '나 레이스 계속 나갈 거니까. 트레이너 쌤도 더 분발하라고! 나도 레이스에서 힘낼 테니까.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] o_s_95_10
  o_s_95_10: (() => {
    const title = '네이처 in 메지로';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await era.printAndWait('오늘 나이스 네이처는 나타나지 않았다. 왜냐하면──');
      await era.printAndWait(
        '「아리마 기념」 이후, 나이스 네이처는 메지로 맥퀸과 메지로 라이언에게 강함의 비결을 물었다.',
      );
      await era.printAndWait(
        `오늘 ${nature.sex}는 두 사람의 초대를 받아 강해지는 비결을 배우러 갔다. 메지로가로 하루 유학을 떠난 셈이다.`,
      );
      await era.printAndWait(
        `나이스 네이처는 성실하다. ${nature.sex}는 분명 무언가를 배워 올 것이다. ${you.name}은(는) 그렇게 믿으며 조용히 기다리기로 했다——`,
      );
      era.drawLine();
      await mcqueen.say_and_wait(
        '──방금 그 다즐링 티는 역시 향기부터가 다르군요. 풍미가 아주 깊어요.',
      );
      await ryan.say_and_wait(
        '전부 수작업으로 만든 차라고 하더라고! 전문가의 기술은 역시 믿음직해.',
      );
      await nature.say_and_wait(
        '……저기── 이게 무슨 상황인가요? 왜 차를 마시고 계시죠?',
      );
      await nature.say_and_wait('전 당연히 훈련 코스로 갈 줄 알았는데……');
      await mcqueen.say_and_wait(
        '다 마신 뒤엔 물론 갈 겁니다. 하지만 홍차를 즐기는 것도 일과의 일부예요.',
      );
      await nature.say_and_wait('일과…… 요?');
      await mcqueen.say_and_wait(
        '오늘은 네이처 씨에게 저희의 평소 모습을 보여드리고 싶었습니다.',
      );
      await ryan.say_and_wait(
        '바로 그거야! 하지만 시간도 다 됐으니, 이제 훈련하러 가자!',
      );
      await nature.say_and_wait('아, 네, 넵……!');
      era.drawLine();
      await mcqueen.say_and_wait('하아…… 하아…… 하아……');
      await ryan.say_and_wait('수고했어, 맥퀸! 다음엔 뭐 할 거야?');
      await mcqueen.say_and_wait('……물론 한 바퀴 더 도는 거죠.');
      await mcqueen.say_and_wait(
        '방금 바퀴는 열 바퀴째라 그런지 속도가 조금 떨어졌어요…… 그렇죠?',
      );
      await ryan.say_and_wait('아하하! 좋아, 네가 만족할 때까지 달려보자고!');
      await mcqueen.say_and_wait('네, 다녀오겠습니다!');
      await nature.say_and_wait('하아…… 하아…… 하아악……!');
      await ryan.say_and_wait(
        '오, 네이처! 어서 와! 맥퀸은 막 다시 출발했어!',
      );
      await nature.say_and_wait(`보였어…… ${mcqueen.sex}, 아직도 달리는 거야……!?`);
      await ryan.say_and_wait(
        `아직도 달린다기보다는 부족하다고 느끼는 걸까? ${mcqueen.sex}가 『속도를 더 올리고 싶다』고 했으니까.`,
      );
      await nature.say_and_wait(
        `${mcqueen.sex}의 지구력은 이미 엄청난데 더 높이려 하다니……`,
      );
      await ryan.say_and_wait(
        `……맥퀸 ${mcqueen.sex}는 아무리 강해져도 현재의 자신에 만족하지 않는 것 같아.`,
      );
      await ryan.say_and_wait(
        `그 애의 목표는 그만큼 높아. 그래서 ${mcqueen.sex}는 멈추지 않고 노력하는 거지.`,
      );
      await ryan.say_and_wait(
        '그런 모습을 계속 보고 있으면, 나도 힘내야겠다는 생각이 들거든.',
      );
      await nature.say_and_wait('……으으～～～～ 저도 다시 뛰러 갈게요……!');
      await ryan.say_and_wait('아하하하! 역시 지기 싫어한다니까! 조심히 다녀와──!');
      era.drawLine();
      await nature.say_and_wait('──오늘 정말 감사했습니다, 두 분 다!');
      await ryan.say_and_wait('에이── 결국 하루 종일 우리 훈련에 어울리게 해버렸네.');
      await nature.say_and_wait('아니요, 오히려 좋았어요!');
      await nature.say_and_wait(
        '……드디어 알 것 같아요. 전 지금까지 정말 제 생각만 하고 있었네요──',
      );
      await nature.say_and_wait(
        '두 분은 서로를 제대로 바라보고 계세요. 서로의 강함을 인정하고, 경쟁하고 있죠.',
      );
      await nature.say_and_wait('하지만 저는…… 그저 남의 강함을 부러워하기만 했어요.');
      await nature.say_and_wait(
        '늘 자신의 부족한 점만 보고…… 자신이 가진 재능이 무엇인지는 생각도 안 해봤거든요.',
      );
      await mcqueen.say_and_wait('……그래서요?');
      await nature.say_and_wait(
        '앞으로는 그런 것들을 제대로 직시하려고 해요. 타인도…… 그리고 저 자신도요.',
      );
      await ryan.say_and_wait('음, 좋아! 그게 분명 네이처가 강해지는 밑거름이 될 거야!');
      await nature.say_and_wait('저기…… 마지막으로 하나만 여쭤봐도 될까요?');
      await nature.say_and_wait('왜 두 분은 저를 도와주신 건가요?');
      await mcqueen.say_and_wait('……그건 저희에게 귀족의 의무가 있기 때문입니다.');
      await ryan.say_and_wait('푸핫! 지금 쑥스러워서 그러는 거야?');
      await ryan.say_and_wait(
        '진짜 이유는 말이야, 강해진 너와 대결해서 나도 더 강해지고 싶기 때문이야!',
      );
      await ryan.say_and_wait(
        '──우리도 다음 『타카라즈카 기념』에 나갈 생각이니까!',
      );
      await nature.say_and_wait('……윽!');
      await mcqueen.say_and_wait(
        '후후, 표정 좋은걸요. 그럼 다음엔 한신에서 뵙죠.',
      );
      await nature.say_and_wait('네……!');
      era.drawLine();
      await era.printAndWait(
        `다음 날 아침 ${you.name}이(가) 나이스 네이처를 만났을 때 ${nature.sex}의 표정은 한층 밝아 보였다.`,
      );
      await nature.say_and_wait(
        '나…… 그 두 사람을 이기고 싶어. ──『타카라즈카 기념』에서!',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_win
  race_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await nature.say_and_wait(
        `1착…… 내가 1착이야! ${callname}, 봤어? 내가 1착이라고!`,
      );
      era.printButton('「축하해. 네가 강하기 때문에 이긴 거야.」', 1);
      era.printButton('「네 실력으로 따낸 승리야.」', 2);
      if ((await era.input()) === 1) {
        await nature.say_and_wait(
          '응, 내가 강하다……고 할 수 있을지는 모르겠지만. 그래도…… 가끔은 트레이너의 칭찬을 받아들이는 것도 좋겠지.',
        );
      } else {
        await nature.say_and_wait(
          `뭐야~ 그건 마치 『내가 강하니까』라고 큰소리로 선언하는 것 같잖아! 나중에 지면 부끄러워.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] s_a_47_33
  s_a_47_33: (() => {
    const title = '마음을 다잡고 앞으로!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        `강가 근처에서 나이스 네이처를 봤다는 소문을 듣고, ${you.name}은(는) ${nature.sex}를 찾아갔다──`,
      );
      await nature.say_and_wait('허억, 허억…… 후우……');
      await nature.say_and_wait('안 돼, 달릴 때는…… 머리를 더 써야 해……');
      await nature.say_and_wait(
        '기운 내자. 네이처, 풀 죽어 있잖아. 처져 있지 말고, 기운 차려야지~',
      );
      await nature.say_and_wait(
        '떠올려봐, 어서. 내가 어떻게 달렸더라?',
      );
      await nature.say_and_wait(
        '그저 나답게, 한 걸음씩…… 천천히 나아가면 되는 거야. 그치?',
      );
      await nature.say_and_wait('언젠가 도달할 수 있을지 없을지는 모르겠지만……');
      await nature.say_and_wait('……내가 할 수 있는 최선을 다해 용기 있게 마주하는 거야.');
      await nature.say_and_wait(
        '아직 가슴을 펴고 자신 있게 레이스에 임할 수 있는 수준은 아니지만……',
      );
      await nature.say_and_wait('도망칠 수는 없어. 그러니까, 난 반드시 테이오와──');
      era.printButton('「네이처라면 분명 할 수 있어」', 1);
      await era.input();
      await nature.say_and_wait(
        `아…… ${callname}은 정말이지, 틈만 나면 이렇게 응석을 받아준다니까~`,
      );
      await nature.say_and_wait(
        '이러면 곤란해~ 나 같은 애한테 꽉 붙잡혀 버릴지도 모른다고……',
      );
      era.printButton('「자율 학습 수고했어!」', 1);
      await era.input();
      await nature.say_and_wait('으왓! 쌔, 쌤 언제 온 거야!?');
      await nature.say_and_wait(
        '아…… 됐어, 말하지 마. 알게 되면 아마 가슴이 턱 막힐 것 같으니까.',
      );
      era.printButton('「방금 한 건 무슨 훈련이야?」', 1);
      await era.input();
      await nature.say_and_wait('……훈련이라고 한다면, 그런 셈이지.');
      await nature.say_and_wait(
        '승리하기 위한 힘을 조금이라도 더 기르고 싶어서. 나만의 무기를 찾고 싶거든.',
      );
      await nature.say_and_wait(
        '결국 핵심은 골인 지점 앞이야. 마지막 직선주로를 확실히 잡아야 해.',
      );
      await nature.say_and_wait(
        '그걸 전제로 한 3000미터라니…… 하하. 생각만 해도 정말 기네.',
      );
      await era.printAndWait(
        '3000미터…… 스퍼트 타이밍을 놓치면 직선에서 승부를 보기가 쉽지 않을 것이다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 나이스 네이처가 즐겁게 달릴 수 있기를 바랐다. 레이스가 끝난 후 평소처럼 밝은 미소를 지을 수 있기를.`,
      );
      await nature.say_and_wait(`${callname}?`);
      era.printButton('「힘내자!」', 1);
      await era.input();
      await nature.say_and_wait('응?');
      await nature.say_and_wait('힘내자니…… 너무 성의 없는 조언 아냐……?');
      era.printButton('「아니, 방금 그건……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 스스로를 격려하려던 것이 그만 입 밖으로 튀어나오고 말았다.`,
      );
      await nature.say_and_wait(
        '푸훗, 후훗…… 아하하하! 정말! 그런 『망했다』는 표정 짓지 마.',
      );
      await nature.say_and_wait('휴…… 응, 쌤 말이 맞아. 힘내야지.');
      await nature.say_and_wait('도망칠 수 없다면 앞으로 나아가는 수밖에 없으니까.');
      await nature.say_and_wait(`${callname}, 지금 잠깐 같이 있어 줄래?`);
      await nature.say_and_wait(
        `${self_call}, 열심히 할게. 곁에서 지켜봐 준다면 기쁠 거야.`,
      );
      era.printButton('「나야말로 잘 부탁해」', 1);
      await era.input();
      await nature.say_and_wait('하하, 센스 있네.');
      await nature.say_and_wait(' 좋아, 그럼 시작해볼까!');
      await nature.say_and_wait(
        '열심히 할수록 트레이너 트로피를 딸 확률도 높아진다고?',
      );
      era.printButton('「……나도 정진할게」', 1);
      await era.input();
      await nature.say_and_wait('아하하하하!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] s_a_47_42
  s_a_47_42: (() => {
    const title = '왕좌의 이면';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, luna, maya, you, callname) => {
      await era.printAndWait(
        `${you.name}과(와) 나이스 네이처가 다음 목표인 「아리마 기념」을 위해 훈련을 이어가던 어느 날……`,
      );
      await nature.say_and_wait(
        `벤치 프레스 끝~ ${callname}, 잠깐 쉬어도 될까?`,
      );
      era.printButton('「물론이지」', 1);
      await era.input();
      await nature.say_and_wait('그럼 딱 10분만 쉴게.');
      await teio.say_and_wait('허억…… 후우……! 이제 세 세트 남았다……!');
      await nature.say_and_wait('응? 저건……');
      await era.printAndWait(
        `${you.name}이(가) 네이처의 시선을 따라가자 토카이 테이오가 필사적으로 훈련하고 있었다. ${teio.sex}는 몸을 지탱하는 특수 기구를 쓰고 있는 듯했다……`,
      );
      await maya.say_and_wait('앗, 네이처 짱이다~♪ 같이 쉬자──!');
      await nature.say_and_wait(
        '오~ 마야노, 잘 왔어. 저기 봐, 테이오가 지금 뭐 하고 있는 거야?',
      );
      await maya.say_and_wait(
        `${teio.sex}는 지금 재활 훈련 중이야——! 크게 다쳤거든.`,
      );
      await nature.say_and_wait('어……');
      await maya.say_and_wait(
        '테이오짱이 꽤 오랫동안 침대 신세를 졌었잖아──',
      );
      await nature.say_and_wait('그렇구나……');
      await teio.say_and_wait('……아파라, 다리가 너무 무거워~~! 조금 너무 무리했나──?');
      await luna.say_and_wait('테이오, 아주 열심히 하고 있구나.');
      await teio.say_and_wait(
        '와앗, 회장님! 당연하죠, 최상의 컨디션으로 노력 중이에요! ……라고 말하고 싶지만, 사실 최상의 컨디션까지는 아직 멀었어요.',
      );
      await teio.say_and_wait(
        '그래도 완전 부활의 길이 보여요! 예전보다 더 강해질 수 있을 것 같아요♪',
      );
      await luna.say_and_wait('음…… 곧장 칭찬해달라고 조를 줄 알았는데……');
      await teio.say_and_wait(
        '에이── 그런 거 안 바란다니까요! 저는 이겼을 때 칭찬받고 싶어요!',
      );
      await teio.say_and_wait(
        '노력하는 건 당연한 거니까요! 저도 언제까지고 여기 멈춰 있을 수는 없고요.',
      );
      await teio.say_and_wait(
        '빨리 낫지 않으면 달릴 수 없잖아요. 달리지 못하면…… 회장님을 따라잡을 수 없게 되니까. 안 그래요?',
      );
      await luna.say_and_wait(
        '……과연 그렇군. 실례했다. 내가 너의 정신력을 과소평가했던 모양이구나.',
      );
      await luna.say_and_wait(
        '실력이 안정되고 심신이 충실한 시기에 닥친 부상은 나조차 고통스러울 터인데.',
      );
      await teio.say_and_wait(
        '……그래서 저를 응원하러 오신 거예요? 헤헤. 회장님도 참, 제가 누구라고 생각하세요?',
      );
      await teio.say_and_wait(
        '레이스에서도 공연에서도 대활약! 누구보다 빠르고, 강하고, 멋진.',
      );
      await teio.say_and_wait(
        '저는…… 이 몸은 무적의 테이오 님이라고요! 어떤 일이 생겨도 가볍게 이겨낼 수 있어요!',
      );
      await luna.say_and_wait(
        '훗…… 그렇군. 기대하마, 토카이 테이오!',
      );
      await teio.say_and_wait('네!');
      await nature.say_and_wait(`……${teio.sex}, 전보다 더 빛나지 않아?`);
      await nature.say_and_wait(
        `한계에 부딪혔기 때문에 ${teio.sex}가 더 강해진 걸까……`,
      );
      await nature.say_and_wait(
        '나 같은 조연은…… 벽에 부딪히기만 해도 온갖 잡생각이 다 드는데.',
      );
      await nature.say_and_wait(
        `……하지만 ${teio.sex}는 금세 다시 일어서지. 역시 주인공은 뭔가 달라.`,
      );
      await maya.say_and_wait(
        `음——쉬웠을까? 테이오짱 ${teio.sex}, 그때 정말 많이 울었잖아.`,
      );
      await nature.say_and_wait('어……?');
      await maya.say_and_wait(
        `소중한 레이스에 나갈 수 없었으니까. ${teio.sex}는 그때 정말 괴로워 보였어.`,
      );
      await nature.say_and_wait('……그…… 그렇구나. 그 테이오가 말이지……');
      await era.printAndWait(
        '이어진 훈련 도중, 나이스 네이처는 깊은 생각에 잠긴 듯 보였다.',
      );
      await era.printAndWait(
        `──훈련이 끝난 후, ${nature.sex}는 천천히 ${you.name} 에게 자신의 속마음을 털어놓았다.`,
      );
      await nature.say_and_wait(
        '……지금까지 오해하고 있었어. 아니, 어쩌면…… 일부러 오해하고 있었던 걸지도 몰라.',
      );
      await nature.say_and_wait(
        `테이오는 주인공이니까 강한 거야. ${teio.sex}는 타고난 재능이 있고 처음부터 특별하니까.`,
      );
      await nature.say_and_wait(
        `${teio.sex}는 나 같은 조연과 달라. 그렇게 생각하며 나약한 자신을 지켜 왔어.`,
      );
      await nature.say_and_wait('하지만…… 사실은 내가 틀렸어. 테이오도 나랑 똑같았어.');
      await nature.say_and_wait(
        `${teio.sex}도 아무리 노력해도 지거나 다칠 수 있어…… 그런 고통이 얼마나 큰지도 알고 있지.`,
      );
      await nature.say_and_wait(
        `${teio.sex}가 나와 다른 건…… 좌절한 뒤의 태도야. 스스로 다시 일어서는 게 바로 ${teio.sex}의 강함이지.`,
      );
      await nature.say_and_wait(
        '……정말이지, 이제 와서 생각해도 무서워. 내가 저렇게 강한 애를 이길 수 있다고 생각했다니.',
      );
      await nature.say_and_wait(
        '나란 녀석은 의지도 용기도 없으면서, 앞서가는 사람만 쳐다보며 불공평하다고 투덜대기나 하고.',
      );
      await nature.say_and_wait(
        '──내가 그 무대에 설 수 없는 게 아니라, 내 스스로 무대에서 내려왔던 거야.',
      );
      await nature.say_and_wait(
        '분수도 모르고, 욕심만 많고, 응석받이에…… 하지만, 하지만……',
      );
      era.printButton('「그래도 이기고 싶지」', 1);
      await era.input();
      await nature.say_and_wait('……응.');
      await nature.say_and_wait(
        '저 아이와 아주 조금이라도 공통점이 있다면, 나도……',
      );
      await nature.say_and_wait('나도……!');
      await era.printAndWait(
        `비록 말은 끝맺지 못했지만, 결의에 찬 ${nature.sex}의 눈동자가 모든 것을 말해주고 있었다.`,
      );
      era.printButton('「꼭 이기자!」', 1);
      await era.input();
      await nature.say_and_wait('──응!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] s_a_95_42
  s_a_95_42: (() => {
    const title = '반짝반짝 빛나기를';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string[]} trophies ナイスネイチャに作ったトロフィー一覧、最大4件
     */
    const f = async (nature, you, callname, trophies) => {
      await era.printAndWait(
        `그날, 훈련 시간이 되었는데도 나이스 네이처가 나타나지 않았다. 평소라면 누구보다 일찍 왔을 ${nature.sex}인데……`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${nature.sex}가 걱정되어 학원 안을 찾아다녔다——`,
      );
      await era.printAndWait(
        `——그러다 마른 나무의 구멍 앞에서 ${nature.sex}를 발견했다. ${nature.uma_sex_title}라면 누구나 알 만한, 속마음을 털어놓으러 오는 곳이다.`,
      );
      await nature.say_and_wait('……주변에 아무도 없겠지?');
      await nature.say_and_wait('좋아……!');
      await nature.say_and_wait(
        '도대체── 왜! 그런 소릴 한 거야!? 나 이 멍청아──!!',
      );
      await nature.say_and_wait('감히 그 정통파 주인공에게 선전포고를 하다니……!');
      await era.printAndWait(
        `사건의 발단은 텐노상(가을)이 끝난 후였다. ${you.name}과(와) 나이스 네이처는 돌아가는 길에 토카이 테이오를 만났고,`,
      );
      await era.printAndWait(
        `${nature.sex}가 올해 아리마 기념에 출주한다는 소식을 듣게 되었다. 분위기에 휩쓸린 나이스 네이처는 그만 「아리마 기념에선 반드시 널 이기겠어」라고 선언해버렸는데──`,
      );
      await nature.say_and_wait(
        '나 같은 조연이 너무 들떠버렸어!! 정말 못 봐주겠네…… 바보────!!',
      );
      await nature.say_and_wait(
        '아직 반짝반짝하지도 않으면서…… 바보 바보 바보 바보! 바보──!!',
      );
      await nature.say_and_wait('허억…… 허억……');
      await nature.say_and_wait('안 돼, 전혀 시원하지가 않아……');
      era.printButton('「네이처!」', 1);
      await era.input();
      await nature.say_and_wait(
        `으악!? ${callname.substring(0, 1).repeat(4)}, ${callname}!?`,
      );
      await nature.say_and_wait('쌤이 여긴 왜…… 아, 앗!');
      await nature.say_and_wait('설마 벌써 트레이닝 시간이야……?');
      era.printButton('「응, 맞아」', 1);
      await era.input();
      await nature.say_and_wait(
        '아아아아아아아아아…… 아──!? 전에도 똑같은 일이 있지 않았어!?',
      );
      await nature.say_and_wait(
        '아우우…… 왜 항상 쌤한테만 이런 창피한 꼴을 보일까……',
      );
      era.printButton('「괜찮아」', 1);
      await era.input();
      await nature.say_and_wait('어……');
      era.printButton('「내 앞에서는 얼마든지 한심한 모습 보여줘도 돼」', 1);
      await era.input();
      await nature.say_and_wait('……윽!!');
      await nature.say_and_wait('으으윽…… 으아아아앙～～!!');
      await nature.say_and_wait(`${callname}, 나……`);
      await nature.say_and_wait('달리기 싫어! 너무 무서워……!');
      await nature.say_and_wait('으와아아앙……!');
      await era.printAndWait(
        '그 후 나이스 네이처는 아이처럼 격식 없이 한참을 울어댔다. 그리고──',
      );
      await era.printAndWait(
        `마음이 좀 진정되자, ${nature.sex}는 ${you.name} 에게 솔직한 심정을 털어놓았다……`,
      );
      await nature.say_and_wait(
        '……지금 내 컨디션 정말 최고로 좋지? 내 생각에도…… 지금까지 중에 가장 완벽한 상태야.',
      );
      await nature.say_and_wait(
        '실력도 늘었고, 나 자신을 믿어보려고도 했어. 이번엔 정말 진지하게 부딪쳐보겠다고 결심도 했고.',
      );
      await nature.say_and_wait('하지만…… 만약 이래도 지면 어떡해?');
      await nature.say_and_wait(
        '최강의 상태인 지금의 나조차, 여전히 저 반짝이는 빛과는 거리가 한참 멀다면……?',
      );
      await nature.say_and_wait('……그게 너무 무서워.');
      await nature.say_and_wait(
        '여기서 지게 되면, 지금까지의 내 모습들까지 전부 부정당하는 기분이 들 것 같아.',
      );
      await nature.say_and_wait(
        '『난 아직 진심을 다하지 않았어』, 『아직 성장할 여지가 있어』, 『이건 내 실력의 전부가 아니야』……',
      );
      await nature.say_and_wait(
        '지금까지 그런 식으로 필사적으로 나를 보호해왔어. 하지만 그런 핑계…… 이제는 통하지 않잖아.',
      );
      era.printButton('「그만큼 진심이라는 거네」', 1);
      await era.input();
      await nature.say_and_wait('……! 그래, 나 정말 진심이야!');
      await nature.say_and_wait(
        '이렇게까지 진심인데 지게 된다면…… 또다시 『잘은 하지만 최고는 아닌』 예전의 나로 돌아가게 되잖아.',
      );
      await nature.say_and_wait('무서워. 정말 무서워……');
      era.printButton('「걱정 마, 넌 지지 않아」', 1);
      await era.input();
      await nature.say_and_wait('……미안, 이번만큼은 예전처럼 그 말을 곧이곧대로 받아들이기가 힘드네.');
      await nature.say_and_wait(
        '결과로 보답할 자신이 없거든. 이제는 더는 한 걸음도 못 나갈 것 같아……',
      );
      era.printButton('「그래도 널 믿고 싶은데, 안 될까?」', 1);
      await era.input();
      await nature.say_and_wait('……윽. 쌤이 나를 믿는 근거가 뭔데?');
      era.printButton('「여기 근거가 잔뜩 있어」', 1);
      await era.input();
      await nature.say_and_wait('──이건……');
      await nature.say_and_wait('……종이로 접은 트로피……야? 여전히 삐뚤삐뚤하네.');
      await nature.say_and_wait(
        '……정말 계속 만들고 있었구나? 헤헤, 역시 비뚤어져 있어.',
      );
      await nature.say_and_wait('오늘도 나를 위해 준비해준 거야? ……그 삐뚤삐뚤한 트로피를.');
      await nature.say_and_wait('쌤이 직접 만든 트로피……');
      await era.printAndWait(
        `${you.name}은(는) 자신이 그동안 ${you.name}의 손으로 만들어 ${nature.sex}에게 건넸던 트로피의 시제품들을 보여 주었다.`,
      );
      await nature.say_and_wait([
        trophies.map((e) => `『${e}』`).join('·'),
        '……이 밖에도 수없이 많다……',
      ]);
      await era.printAndWait('……날 위해 이렇게까지 해줬구나……');
      era.printButton('「이게 바로 내가 널 계속 믿어온 증거들이야」', 1);
      await era.input();
      await nature.say_and_wait('──지금까지 내가 쌓아온 것들……');
      await nature.say_and_wait(
        '……중간에 나를 포기할 수도 있었을 텐데. 왜 쌤은 나를 계속 믿어주는 거야?',
      );
      era.printButton('「그야 널 정말 좋아하니까」', 1);
      await era.input();
      await nature.say_and_wait('……뭐!? 왜 이런 타이밍에……');
      await era.printAndWait(
        `${you.name}은(는) 네이처에게 전했다. 트레이너로서 ${you.name}은(는) 승리를 포기하지 않고 여기까지 달려온 ${nature.sex}를 진심으로 응원한다고……`,
      );
      await nature.say_and_wait(
        '……응, 무슨 뜻인지 알겠어. 대충 예상은 했지만.',
      );
      await nature.say_and_wait('휴우…… 응, 미안해. 내가 너무 당황했나 봐.');
      await nature.say_and_wait('『이기겠다』고 큰소리치는 건 역시 정말 무서운 일이네.');
      await nature.say_and_wait(
        `……테이오 ${nature.sex}는 계속 이런 압박감과 싸웠던 거구나.`,
      );
      await nature.say_and_wait('대단해…… 하지만, 나도 더는 두려워하지 않을래.');
      await nature.say_and_wait(
        '나를 좋아해 주는 사람이 이렇게 곁에 있으니까!',
      );
      await nature.say_and_wait('이겨야겠어. 나한테는 이제 정말 중요하고…… 아주 소중한 이유가 생겼으니까.');
      await nature.say_and_wait(
        '……그나저나, 트레이너도 참 고생이 많네. 내 멘탈 관리까지 해줘야 하고.',
      );
      await nature.say_and_wait('물론 이것도 당신 일 중 하나겠지만.');
      era.printButton('「내 일은 널 반짝이게 만드는 거니까」', 1);
      await era.input();
      await nature.say_and_wait('……그냥 일이라서 그런 거라고?');
      await nature.say_and_wait(
        '……농, 담, 이야──! 방금 한 말은 못 들은 걸로 해줘!',
      );
      await nature.say_and_wait(
        '이제 훈련해야지! 나, 어서 가서 옷 갈아입고 올게!',
      );
      await era.printAndWait(
        `……${nature.sex}는 다시 기운을 차린 듯하다. 그렇다면 앞으로도 함께 나아가자!`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] see_fish
  see_fish: (() => {
    const title = '물고기 보러 가자';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(`${you.name}이(가) 나이스 네이처와 함께 돌아가는 길에──`);
      await nature.say_and_wait(
        '저기, 어차피 시간도 좀 남았는데…… 그게……………… 물고기 보러 안 갈래?',
      );
      await nature.say_and_wait(
        `생선 가게 아주머니가 말이야, 『다 같이 보러 오렴』이라고 하셨거든.`,
      );
      era.printButton('「물론이지」', 1);
      await era.input();
      await nature.say_and_wait('……좋아, 그럼 가자.');
      era.drawLine();
      await era.printAndWait(
        `${you.name}은(는) 생선 가게에서 ${nature.sex}가 원하는 생선을 파는 줄 알았지만, 따라가 보니……`,
      );
      await nature.say_and_wait(
        '오오～ 헤엄친다 헤엄쳐～～ 한 무리 가득 맛있어 보이는 물고기들이네～～',
      );
      era.printButton('「설마 수족관에 올 줄이야……!!」', 1);
      await era.input();
      await nature.say_and_wait('……아하하.');
      await nature.say_and_wait(
        '아── 알았어 알았다고! 나도 알아. 조금 더 근사한 권유 방법이 있었겠지～ 싶지?',
      );
      await nature.say_and_wait(
        `그게 말이야, ${self_call}는 귀엽게 초대하는 건 잘 못한단 말이지──`,
      );
      await nature.say_and_wait(
        '그래도 말이야, 모처럼 아주머니가 티켓도 주셨고, 둘이서 푹 쉬다 오라고 하셨으니까……',
      );
      await nature.say_and_wait('절대로 속이려던 건 아냐. 정말이라니까.');
      era.printButton('「초대해 줘서 고마워」', 1);
      await era.input();
      await nature.say_and_wait('오…… 오오…… 이게 어른의 여유인가? 제법인걸……');
      await nature.say_and_wait('알았어, 응. 쌤이 괜찮다면 다행이고.');
      await nature.say_and_wait(
        '그러니까, 뭐 사과라고 하긴 좀 그렇지만…… 쌤이 보고 싶은 걸 보러 가자!',
      );
      await nature.say_and_wait(
        '좀 찾아봤더니 재미있는 전시가 많더라고. 역시 데이…… 놀러 오는 인기 장소라 그런가.',
      );
      await nature.say_and_wait('해파리 전시나 가오리…… 도미…… 전부 꽤 맛있어 보이네.');
      await nature.say_and_wait('아, 표준 코스로 가려면 돌고래 쇼 같은 걸 볼까?');
      await nature.say_and_wait(
        '……아니, 나랑 그렇게 귀여운 공연을 보는 건 좀 안 어울리나.',
      );
      await nature.say_and_wait(`좋아, ${callname}에게 맡길게! 뭘 보고 싶어?`);
      era.println();
      era.printButton('「돌고래 쇼」', 1);
      era.printButton('「……공포의 식인어(?) 특별전!!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait('……저기 말이야. 내 말 듣고 있었어?');
        era.printButton('「듣고 있었어」', 1);
        await era.input();
        await nature.say_and_wait(
          '응, 알고 있어. 하지만 그런 뜻이 아니었거든?',
        );
        await nature.say_and_wait('아니, 뭐…… 결국 내가 맞춰준다고 말하긴 했으니까.');
        await nature.say_and_wait(
          '알았어 알았어. 쌤이 보면서 힐링할 수 있다면, 뭐.',
        );
        await nature.say_and_wait(
          '난 『꺄아～』 같은 귀여운 반응은 못 해주니까, 그 점은 이해해 줘──',
        );
        era.drawLine();
        await nature.say_and_wait(
          '오오, 힘이 넘치는 돌고래네～ 어? 푸핫!? 잠깐만, 물! 물이──',
        );
        await nature.say_and_wait('가아아악──!!?');
        await nature.say_and_wait('제길…… 저 물보라는 반칙이잖아.');
        await nature.say_and_wait(
          '원래 돌고래 쇼가 이렇게 스릴 넘치는 오락이었나……',
        );
        await nature.say_and_wait(
          '정말이지…… 『꺄아～』는커녕, 단전에서 비명이 터져 나왔네.',
        );
        era.printButton('「즐거워 보이네」', 1);
        await era.input();
        await nature.say_and_wait(
          '후후…… 응, 그러게. 나한텐 이런 방식이 더 잘 맞는 것 같아.',
        );
        await era.printAndWait(
          `${you.name}과(와) 나이스 네이처는 수족관에서 즐거운 시간을 보내며 푹 쉬었다.`,
        );
      } else {
        await nature.say_and_wait('오～ 재밌어 보이는데!');
        await nature.say_and_wait(
          '게다가 무려 『공포의』 전시라니. 얼마나 무서운지 실력 좀 감상해 볼까～',
        );
        await era.printAndWait(
          `그렇게 ${you.name}과(와) 나이스 네이처는 전시 구역으로 향했다……`,
        );
        await nature.say_and_wait('귀!');
        era.printButton('「……귀?」', 1);
        await era.input();
        await nature.say_and_wait('귀, 여, 워, 죽, 겠, 어!!');
        await nature.say_and_wait(
          '우와아아～～～!! 뭐야 이거! 동글동글한 눈 좀 봐! 『우무문어』라고 하는구나～',
        );
        await nature.say_and_wait('꺄아～～～～');
        await nature.say_and_wait('──앗!!');
        era.printButton('「네가 즐거워하니 다행이야」', 1);
        await era.input();
        await nature.say_and_wait(
          '너…… 너무 반칙이잖아! 공포의 전시라더니, 결과적으로 다 이렇게 귀여운 생물들뿐이고!',
        );
        await nature.say_and_wait('제길………… 너무 귀여워.');
        era.printButton('「저쪽 물고기도 나쁘지 않은데……」', 1);
        await era.input();
        await nature.say_and_wait(
          '우와, 진짜네! 못생겨서 더 귀여워～～!',
        );
        await era.printAndWait(
          `${you.name}과(와) 나이스 네이처는 수족관에서 즐거운 시간을 보내며 푹 쉬었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin
  takz_kin: (() => {
    const title = '닿은 손끝';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await nature.say_and_wait('──다행이다……! 나…… 이겼어!');
      era.printButton('「대단해!」', 1);
      await era.input();
      await nature.say_and_wait('왜일까. 지금까지보다 훨씬 기뻐……');
      era.printButton('「필사적으로 달려서 마침내 손에 넣은 승리니까.」', 1);
      await era.input();
      await nature.say_and_wait('응, 그렇네.');
      await nature.say_and_wait(
        '『어차피 나 같은 건』이라든가 『무리야』라든가……',
      );
      await nature.say_and_wait(
        '오늘은 그런 생각이 전혀 안 들었어. 그저 따라잡겠다고 마음속으로 계속 외치면서……',
      );
      await mcqueen.say_and_wait(
        '──인상적인 달리기였어요, 네이처. 다시 승부할 수 있다면 다음에는 지지 않겠어요.',
      );
      await ryan.say_and_wait(
        '맞아, 맞아! 나도 다시 단련해야겠어! 고마워, 네이처!',
      );
      await nature.say_and_wait('아니, 나야말로…… 고마워!');
      era.drawLine();
      await nature.say_and_wait(
        `저 둘, 끝까지 상쾌했지. ${mcqueen.couple_title}는 벌써 앞을 바라보고 있어.`,
      );
      await nature.say_and_wait(
        '패배해도 곧바로 미래를 바라봐. 다음 단계에 손을 뻗고 다음에는 반드시 이기겠다고 생각하지.',
      );
      await nature.say_and_wait('……테이오도 그래. 그래서 그렇게 강한 거야.');
      await nature.say_and_wait(
        '나는 멋대로 내 한계를 정해 버렸어. 아무리 노력해도 여기까지라고.',
      );
      await nature.say_and_wait(
        '3착도 그랬기 때문이야. 더 이상은 무리라고…… 스스로 포기했던 거지.',
      );
      await nature.say_and_wait(
        '하지만 그래서는 안 돼. 빛에 닿고 싶다면 계속 나를 믿어야 해.',
      );
      await nature.say_and_wait(
        '1착을 각오하고 달려서 얻은 3착이라면 분명…… 다음으로 이어질 거야.',
      );
      await era.printAndWait(
        `나이스 네이처도 앞을 바라보고 있다. 지금이라면 큰 무대에 올라도 ${nature.sex}는 두려워하지 않고 도전할 것이다.`,
      );
      await era.printAndWait(
        `다음 그 레이스라면 지금 ${nature.sex}의 자신감과 빛을 더욱 끌어낼 수 있을 것이다……!`,
      );
      era.printButton('「다음에는 『텐노상 (가을)』에 도전해 볼래?」', 1);
      await era.input();
      await nature.say_and_wait('『天皇賞（秋）』……！');
      await nature.say_and_wait('내가…… 역사와 전통이 있는 『텐노상』에?');
      await nature.say_and_wait('……안 돼, 안 돼. 내가 왜 주눅 드는 거야.');
      await nature.say_and_wait(
        '이럴 때…… 자격이 있는지 의심하면 안 되지. 나가겠어! 스스로 기운을 내야지!',
      );
      await nature.say_and_wait('가자. 가을의 큰 무대로……!');
      await era.printAndWait(
        `──그렇게 ${you.name}와 나이스 네이처는 중거리 최강을 다투는 『텐노상 (가을)』에 도전하기로 했다!`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그것도——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] tenn_sho
  tenn_sho: (() => {
    const title = '황혼의 하늘에 울려 퍼져라';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait('끝까지 달렸어……');
      await nature.say_and_wait(
        '수준 높은 레이스에서 진지하게 싸워…… 결과를 냈어.',
      );
      await nature.say_and_wait('한계 따위는 생각하지 않고…… 내 손으로 결과를 붙잡았어.');
      await nature.say_and_wait(
        '……이대로라면 닿을지도 몰라? 빛나고 싶다는…… 그 꿈에……',
      );
      await nature.say_and_wait(
        '……더 가까이. 아직 더 가까이—— 그 빛에 한층 가까이 다가가고 싶어……!',
      );
      await nature.say_and_wait(`${callname}, 부탁이 하나 있어.`);
      await nature.say_and_wait(
        '시니어급 마지막 『아리마 기념』 전에 레이스를 한 번 더 뛰고 싶어.',
      );
      era.printButton('「어째서?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……좀 더 자신감을 얻고 싶어. 1착을 차지하겠다는 각오로 나가서 이기고 싶거든.',
      );
      await era.printAndWait(
        '예전의 나이스 네이처라면 자신이 없어서 『인정받고 싶다』고 바랐을 것이다.',
      );
      await era.printAndWait(
        `하지만 지금의 ${nature.sex}는 『이기기 위해』 강해지고 싶어 한다.`,
      );
      era.printButton('「연속 출전이 되는데 괜찮겠어?」', 1);
      await era.input();
      await nature.say_and_wait('괜찮아, 분명히!');
      await nature.say_and_wait(
        `왜냐면 ${self_call}의 특기는 보기 흉해도 끝까지 달리는 거니까.`,
      );
      era.printButton('「알았어.」', 1);
      await era.input();
      await nature.say_and_wait('고마워! 어느 레이스에 나갈지는 네게 맡길게.');
      await nature.say_and_wait(
        `쓸데없는 생각은 이제 ${callname}에게 떠넘기겠어!`,
      );
      await era.printAndWait(
        `${nature.sex}의 지금까지 경향과 『아리마 기념』까지 남은 시간을 고려하면 선택해야 할 레이스는——`,
      );
      era.printButton('「『주니치 신문배』는 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '격은 조금 낮지만 나이스 네이처라면 여기서 성적을 낼 수 있다. 1착을 안정적으로 노릴 수 있다!',
      );
      await nature.say_and_wait('좋아, 『주니치 신문배』…… 거기서 1착을 차지할 거야.');
      await nature.say_and_wait(`이겨서 당당하게 ${nature.sex}에게 도전하겠어……!`);
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그것——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] waka_sta_lose
  waka_sta_lose: (() => {
    const title = '져도 여름은 온다';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, teio, you, callname, self_call) => {
      await nature.say_and_wait('하아…… 하아…… 하아……');
      await nature.say_and_wait(
        `……음, 나쁘지 않아, ${self_call}, 확실히 성과는 냈어──`,
      );
      await era.printAndWait('???「와아아아아아……!!」');
      await nature.say_and_wait('……어라!? 이 소리는 뭐야──');
      await teio.say_and_wait(
        '내 실력은 이 정도가 아니라고! 앞으로도 내 활약을 눈여겨봐 줘! 너희의 상상을 계속 뛰어넘겠다고 약속할게! 다음에 봐! 다들 고마워♪',
      );
      await era.printAndWait('???「와아아아아아……!!」');
      await nature.say_and_wait('…………');
      await nature.say_and_wait(
        '분위기 엄청 뜨겁네. 역시 테이오야──',
      );
      await nature.say_and_wait(
        '……난 정말 바보야. 그런 상대에게 도전하겠다고 하다니. 그리고 역시 난 고작 이 정도구나. 주제 파악을 너무 못했어. 정말 한심해……',
      );
      await nature.say_and_wait('……아── 테이오…… 정말 눈부시네……');
      era.drawLine();
      await nature.say_and_wait(
        `──아, ${callname}……, 저기…… ${self_call}가 레이스 마치고 돌아왔어──`,
      );
      era.printButton(`「${nature.sex}에게 바짝 붙어서 쫓아간 것만으로도 대단해」`, 1);
      await era.input();
      await nature.say_and_wait(
        '하하── 됐어, 그렇게 위로 안 해줘도 돼. 그리고 봐봐, 당신 요구대로 제대로 했지?',
      );
      await nature.say_and_wait(
        '『언제나처럼』 결과를 남겼잖아. 응, 내 할 일은 다 했어.',
      );
      await nature.say_and_wait(
        '……그러니까, 위를 향해 도전하는 건 역시 나한테 과분한 일이었어. 도전 같은 걸 생각 안 했으면 정말 모든 게 평소 같았을 텐데.',
      );
      await nature.say_and_wait(
        '……내 마음도 포함해서 말이야. 정말이지── 난 반짝이는 거랑은 거리가 너무 멀어──',
      );
      await era.printAndWait(
        `실제로 ${nature.sex}의 말대로 이번 성과는 꽤 훌륭했다. 비록 1등은 아니지만, 이번 성적을 좀 더 긍정적으로 바라봐도 좋다.`,
      );
      await nature.say_and_wait('……하아.');
      await era.printAndWait(
        `그런데 ${nature.sex}는 이렇게 낙담하고 있다. 원래 자신감이 부족하기 때문일 것이다. 그렇다면 지금 필요한 건——`,
      );
      era.printButton('「네이처, 원정 가보지 않을래?」', 1);
      await era.input();
      await nature.say_and_wait('원정……? 어? 왜……');
      era.printButton('「여름에도 성과를 남겨보자」', 1);
      await era.input();
      await era.printAndWait(
        `지금 ${nature.sex}를 클래식 전선에 내보내는 것은 위험한 도박이다. 남은 자신감까지 잃게 할 수도 있다. 차라리 지방 레이스에 도전해 꾸준히 성적을 쌓고 ${nature.sex}의 성장으로 이어 가고 싶다.`,
      );
      await nature.say_and_wait(
        '그러니까…… 목표는 『사츠키상』도 아니고, 『일본 더비』도 아니라고……? ……내 실력이 부족하니까.',
      );
      era.printButton('「지금은 조급해하지 말고, 자신이 정말 강해졌는지 확인부터 하자」', 1);
      await era.input();
      await nature.say_and_wait('……알겠어.');
      await nature.say_and_wait(
        '그렇네. 지금 내 상태로는 설령 다음에 또 이긴다 해도…… 스스로 납득하기 힘들 테니까.',
      );
      era.printButton('「이 여름을 이겨내면 반드시 강해질 수 있어」', 1);
      await era.input();
      await nature.say_and_wait('……그러면 좋겠네.');
      await era.printAndWait('말을 마치고, 나이스 네이처는 길게 한숨을 내쉬었다.');
      await nature.say_and_wait(
        '응, OKOK! 각지를 도는 순회 공연도 나한테 어울릴지 몰라. 그래서? 설마 정말로 나를 계속 여기저기 뺑뺑이 돌릴 건 아니지? 어느 레이스에 나갈지 정했어?',
      );
      era.printButton('「『코쿠라 기념』은 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '코쿠라에서 열리는 중상 레이스. 나이스 네이처의 자신감을 높여주기에 이보다 적합한 레이스는 없다.',
      );
      await nature.say_and_wait(
        '과연, 거리도 와카고마랑 같았던가? 응, 거기로 가자. 근데 여름에 코쿠라라니…… 더워서 쓰러지는 거 아냐……?',
      );
      await era.printAndWait([
        '그렇게, ',
        you.get_colored_name(),
        ' 와 ',
        nature.get_colored_name(),
        ' 는 다음 목표를 「코쿠라 기념」으로 결정했다!',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] waka_sta_win
  waka_sta_win: (() => {
    const title = '「偶然」から';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, teio, you) => {
      await nature.say_and_wait('勝っちゃった……あたし……テイオーに勝った？');
      await nature.say_and_wait(
        'は、はは……はは……！ すごい、ほんとに……！？ あたしが勝った……',
      );
      await teio.say_and_wait('いやー負けちゃった！');
      await nature.say_and_wait('……うっ！ テイオー……！ あたし──');
      await teio.say_and_wait('──強くなるきっかけ、見つけちゃった！');
      await nature.say_and_wait('えっ……');
      await teio.say_and_wait(
        'ボク、まだ強くなれるんだ！ へへ、楽しみになってきた──！',
      );
      await teio.say_and_wait('最強まであと何キロ？ 一気に駆け上がるよ！');
      await nature.say_and_wait('あ……');
      await nature.say_and_wait(
        '危ない危ない。あたし、得意げになるとこだった。',
      );
      await nature.say_and_wait('ちがう。今回勝てたの……ただの偶然。');
      await nature.say_and_wait(
        'だって、どう考えても──あの子のほうが輝いてるし……',
      );
      era.printButton('「勝ったね、ネイチャ！」', 1);
      await era.input();
      await nature.say_and_wait('……うん。');
      era.printButton('「嬉しくないの？」', 1);
      await era.input();
      await nature.say_and_wait(
        '勝った直後は嬉しかったよ。嬉しいけど……この勝ち、絶対に偶然。実力で勝ったんじゃない。',
      );
      era.printButton('「どうしてそう思うの？」', 1);
      await era.input();
      await nature.say_and_wait(
        'だって……おかしいでしょ？ あたしがテイオーより強いなんて。',
      );
      await nature.say_and_wait(
        'これっぽっちも輝いてないあたしだよ？ どこかで間違えてる。──もう！ 勘違いして、恥ずかしい──！',
      );
      await era.printAndWait(
        `ナイスネイチャは確かに勝った。そしてその理由は間違いなく${nature.sex}の実力だ。でも${nature.sex}は……`,
      );
      await nature.say_and_wait('……ほんと恥ずかしい。');
      await era.printAndWait(
        `勝ったのに負けたみたいに沈むのは、${nature.sex}がまだ自分の実力を信じきれないからだ。つまり自信不足。なら、今必要なのは──`,
      );
      era.printButton('「ネイチャ、遠征しない？」', 1);
      await era.input();
      await nature.say_and_wait('遠征……？ えっ？ どうして……');
      era.printButton('「夏も、結果を残そう」', 1);
      await era.input();
      await era.printAndWait(
        `今${nature.sex}をクラシック戦線に乗せると危険な賭けになる。残っているわずかな自信まで失わせかねない。それより地方競走に挑んで堅実に結果を残し、最後は${nature.sex}の成長につなげたい。`,
      );
      await nature.say_and_wait(
        'つまり……目標は『皐月賞』でも『日本ダービー』でもない……？……あたし、まだ実力が足りないから。',
      );
      era.printButton('「今は焦らず、本当に強くなったことを確かめよう」', 1);
      await era.input();
      await nature.say_and_wait('……わかった。');
      await nature.say_and_wait(
        'そうだね。今のあたしじゃ、次また勝っても……受け止められない。',
      );
      era.printButton('「この夏を乗り越えれば、きっと強くなれる」', 1);
      await era.input();
      await nature.say_and_wait('……そうだといいけど。');
      await era.printAndWait('そう言って、ナイスネイチャは長く息を吐いた');
      await nature.say_and_wait(
        'うん、OKOK！ 各地巡回、あたしも向いてるかも。それで？ ずっと巡回させるつもりじゃないよね？ どのレースにするか、決めた？',
      );
      era.printButton('「『小倉記念』はどう？」', 1);
      await era.input();
      await era.printAndWait(
        '小倉で行われる重賞。ナイスネイチャの自信を育てるには、これ以上ない一戦だ。',
      );
      await nature.say_and_wait(
        'なるほど、距離も若駒ステークスと同じだったよね？ うん、そこにしよう。でも、夏の小倉か……熱中症になりそう……',
      );
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        nature.get_colored_name(),
        ' は次の目標を『小倉記念』に決めた！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_se
  we_se: (() => {
    const title = '夏季合宿終了';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await era.printAndWait(
        '오늘은 여름 합숙 마지막 날이다. 기념으로 학원에서 성대한 불꽃놀이를 준비했다.',
      );
      await era.printAndWait(
        '나이스 네이처와 나란히 해안가에 서서 바다 위에 피어나는 불꽃을 올려다보았다.',
      );
      await nature.say_and_wait(
        `——여름이 끝나 버렸네. 뭐랄까, 청춘이라는 느낌이야—— 나는 그런 역할이 아니지만. 그래도 ${callname}——`,
      );
      await era.printAndWait(
        `곁에 있던 나이스 네이처는 감탄하고 있었지만 불꽃이 터지는 소리 때문에 ${nature.sex}의 목소리가 잘 들리지 않았다.`,
      );
      await era.printAndWait(
        `${nature.sex}의 마지막 말을 다시 물으려 했지만, 나이스 네이처는 작게 웃으며 얼버무렸다.`,
      );
      await era.printAndWait(
        '나이스 네이처와 함께한 여름 합숙은 이렇게 끝났다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_ny
  ws_ny: (() => {
    const title = '새해';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`${callname}, 새해 다짐 안 써볼래?`);
      await era.printAndWait(
        '나이스 네이처가 그렇게 말하며 붓과 종이를 내밀었다.',
      );
      await era.printAndWait(
        '새해 다짐——새로운 한 해에 거는 기대와 축복을 종이에 담는다. 무엇을 쓸까——',
      );
      era.printButton('「건강」(체력 +300)', 1);
      era.printButton('「강해지자」(모든 능력치 +10)', 2);
      era.printButton('「다재다능」(스킬 Pt +70)', 3);
      if (era.get('love:60') >= 75) {
        era.printButton('「자손 번창」', 4);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            `건강이라니…… ${callname}도 이제 그런 걸 챙길 나이가 됐구나. 허리 아픈 건 귀찮지? ${self_call}도 알아——`,
          );
          await nature.say_and_wait([
            '어? 본인 걸 쓴 게 아냐? 그럼……? 엣!? 나? 잠깐, 그게……',
            callname,
            '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 건 반칙이야!',
            callname,
            '도 나도 새해에는 건강하게 지내자!',
          ]);
          break;
        case 2:
          await nature.say_and_wait([
            '강해지자는 거구나~',
            callname,
            ', 의외로 열혈인걸? 아니면 보기보다 정신 연령이…… 하하하, 농담이야……',
          ]);
          await nature.say_and_wait([
            '어? 본인 걸 쓴 게 아냐? 그럼……? 엣!? 나? 잠깐, 그게……',
            callname,
            '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 건 반칙이야!',
            callname,
            '도 나도 새해에는 즐겁게 지내자!',
          ]);
          break;
        case 3:
          await nature.say_and_wait(
            `다재다능? 확실히 재능 많은 사람이 ${nature.child_sex_title}에게도 인기가 많겠지. ${callname}도 이제 그런 걸 신경 쓸 나이니까 자기 ${
              nature.sex
            }를 생각해 봐야 할 텐데…… 내가 이런 말 하는 것도 이상하지만, 하하하하……`,
          );
          await nature.say_and_wait([
            '어? 본인 걸 쓴 게 아냐? 그럼……? 엣!? 나? 잠깐, 그게……',
            callname,
            '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 건 반칙이야!',
            callname,
            '도 나도 새해에는 즐겁게 지내자!',
          ]);
          break;
        case 4:
          await nature.say_and_wait(
            `자, 자손 번창? ${callname}도 참, 아침부터 대담한 화제네…… 그래도 ${callname}이(가) 원한다면 나도 괜찮아. 아니면…… 지금부터?`,
          );
          await era.printAndWait(
            '얼굴이 붉어진 나이스 네이처가 한 걸음씩 다가왔다. 아무래도 한판 대결을 피하기는 어려울 것 같다……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_ss_1
  ws_ss_1: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '오늘부터 『여름 합숙』—— 실력을 끌어올리는 집중 훈련이 시작된다.',
      );
      await nature.say_and_wait('더워……');
      await nature.say_and_wait(
        '햇볕이 너무 기운차네. 음지 생활이 익숙한 나한테는 너무 눈부셔……',
      );
      await nature.say_and_wait(
        '벌써부터 마지막까지 무사히 버틸 수 있을지 걱정된다.',
      );
      era.printButton('「『고쿠라 기념』도 있으니 기합을 넣어야겠네.」', 1);
      await era.input();
      await nature.say_and_wait(
        '아니, 바로 그게 문제라니까. 합숙 중에 레이스까지 뛰면 일정이 너무 빡빡해.',
      );
      await nature.say_and_wait(
        '여기는 고쿠라에서 멀어서 이동하다 보면 훈련량도 줄어들고……',
      );
      await nature.say_and_wait(
        '원래도 구름 위에 있는 녀석들한테 금세 뒤처질 거야——',
      );
      era.printButton('「그럼 고쿠라까지 계속 달려가자!」', 1);
      await era.input();
      await nature.say_and_wait(
        '아, 그거 좋네! 달리면서 훈련도 하고 일석이조잖아.',
      );
      await nature.say_and_wait('고작 천 킬로미터 정도겠지? 응응, 거뜬해——');
      await nature.say_and_wait('그럴 리가 없잖아—— 갑자기 이상한 계획 좀 꺼내지 마.');
      await nature.say_and_wait('트레이너, 속으로 재미있어하고 있지……?');
      await era.printAndWait(
        `그렇게 ${you.name}와 나이스 네이처의 뜨거운 여름 합숙이 시작되었다.`,
      );
      await nature.say_and_wait(
        '아, 열혈은 적당히 부탁할게. 그럼 잘 부탁해——',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_ss_2
  ws_ss_2: (() => {
    const title = '夏季合宿';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await era.printAndWait(
        '또다시 합숙의 계절이 찾아왔다. 나이스 네이처는 작년과는 달리 적극적인 태도를 보였다.',
      );
      await era.printAndWait(
        '『천황상(가을)』…… 그리고 그다음 『아리마 기념』을 향해——',
      );
      await nature.say_and_wait('천황상(가을)이라……');
      await era.printAndWait(`${nature.sex}는 자기 자신과 마주하는 뜨거운 여름을 시작했다!`);
    };
    f.title = title;
    return f;
  })(),
};
