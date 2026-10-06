// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file アグネスデジタル - 募集
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  // [번역 완료] rec_start
  rec_start: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      const ret = [];
      await era.printAndWait(`훈련장, 본래 ${digital.uma_sex_title}들이 평소 훈련하는 장소였지만, 오늘만은 트레이너들로 가득 찼다. 오늘은 훈련뿐만 아니라 중요한 활동인 선발 레이스가 열리기 때문이다.`, );
      await era.printAndWait(`재능 있는 ${digital.uma_sex_title}들은 뛰어난 트레이너와 조우하기 위해 자연스레 자신의 실력을 뽐내야 했고, 선발 레이스는 그야말로 절호의 기회였다.`, );
      await era.printAndWait(['트레이너인 ', you.get_colored_name(), ' 역시 질주하는 ', digital.uma_sex_title, '들을 주시하고 있었으나, 우연히 시야 끝에 관중석 그늘 아래 숨어있는 분홍색 그림자가 포착되었다.']);
      era.println();
      await you.say_and_wait(`음…… ${digital.uma_sex_title}인가?`);

      await era.printAndWait(`\\n선발 레이스는 원칙적으로 트레이너를 찾지 못한 모든 ${digital.uma_sex_title}들이 공동으로 참가하는 것이며, 트레이너를 구한 ${digital.uma_sex_title}들은 대개 이런 아마추어 같은 레이스에는 관심을 두지 않는다.`, );
      await era.printAndWait(`${you.name}은(는) 한 번 가보기로 했다.`);
      await digital.say_and_wait("우후후후, 서로 교차하는 다리, 약간 흐트러진 숨소리, 서로 양보 없는 각오, 그리고 꿈에 그리던 만남, 너무너무너무너무 고귀해요……", );
      await era.printAndWait(` ${you.name}이(가) 뒤쪽 계단을 돌아 관중석으로 올라가니 분홍색 머리에 눈에 띄는 붉은 리본을 맨 ${digital.uma_sex_title}가 보였다. 두 손을 높게 들고…… 응원 중인가?`, );

      era.println();
      await era.printAndWait(`\\n${you.name}의 선택:`);
      era.printButton("（응원이라면 나보다 용기 있는 자는 없다!）", 1);
      era.printButton(`「너, ${digital.uma_sex_title} 아니야? 왜 여기서 이러고 있어?」`, 2, );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(`${you.name}은(는) 존재하지 않는 가방에서 응원봉을 꺼내더니……`, );
        await era.printAndWait(`오타게와 믹스 콜을 ${digital.sex} 앞에서 화려하게 선보였다!`, );
        await you.say_and_wait("응 하이 오 하이…… 우랴 하이!");
        await era.printAndWait("응원봉을 휘두르는 모습은 마치 떡을 치는 것 같았다. 전신의 근육을 활용해 다리에서 허리, 그리고 팔로 힘을 전달해야만 가장 강력한 콜을 보낼 수 있는 법이다!", );
        await digital.say_and_wait("에? 여기 누가 있었나요? 설마……");
        await era.printAndWait(`의아한 목소리를 내며, 분홍색 ${digital.uma_sex_title}가 좌우를 살피다 몸을 돌려 당신을 발견했다.`, );
        await digital.say_and_wait(`와아! 콘서트 응원 방식을 레이스에 접목하다니, 정말 멋지네요! 당신! 분명 ${digital.uma_sex_title}를 무척 좋아하는 트레이너님이시군요!`, );
        await era.printAndWait(`당연하다. ${you.name}은(는) 백 명 중 한 명꼴이라는 중앙 트레이너니까. ${you.name}은(는) 자랑스럽게 응원봉을 거두어들였다.`, );
        await you.say_and_wait("그런데 궁금한 게 있는데, 넌 왜 선발 레이스에 참가하지 않은거야?");
        await digital.say_and_wait(
          `에? 저요? 아니아니, 저는 어디에나 있는 평범한 ${digital.uma_sex_title}${
            digital.name
          }일 뿐이에요. 레이스장에 설 만한 ${digital.uma_sex_title}가 아니에요.`,
        );
        await era.printAndWait(`${digital.sex}는 자신은 전혀 어울리지 않는다는 듯 격렬하게 양손을 흔들었다.`, );
      } else {
        await digital.say_and_wait("와아아악, 정말 죄송합니다! 보기 안 좋은 걸 보여드렸네요, 당장 자리를 옮길게요!", );
        await era.printAndWait(`${digital.sex}는 당황하며 양손을 흔들었고, 당장이라도 자리를 뜨려 했다.`, );
        await you.say_and_wait("잠깐 기다려!");
        await digital.say_and_wait("히익?");
        await you.say_and_wait("너는 선발 레이스에 참가 안 하는 거야?");
        await digital.say_and_wait(
          `아니에요, 아니라고요! 저는 그냥 평범한 ${digital.uma_sex_title}${
            digital.name
          }일 뿐이에요. 이렇게 ${
            digital.couple_title
          }를 방해하면 안 돼요! 디지는 멀리서 바라보는 것만으로 충분해요! 천상인 같은 ${digital.uma_sex_title}들은 멀리서 감상하는 전용이라구요!`,
        );
        await era.printAndWait(`${digital.sex}는 고개를 세차게 가로저었다.`, );
      }
      await era.printAndWait(
        `${you.name}은(는) ${digital.sex}가 무슨 말을 하는지 잘 이해할 수 없었다.${
          digital.sex
        }는 ${digital.uma_sex_title}를 무척 좋아하는 것 같은데도 가까이 다가가려 하지 않는다. 게다가 ${
          digital.sex
        } 자신도 ${digital.uma_sex_title}다.`,
      );
      await you.say_and_wait(`왜 참가해서 가까운 거리에서 ${digital.couple_title}들을 관찰할 생각은 안 하는 거야?`, );
      await digital.say_and_wait("에? 그 말씀도 일리가 있긴 한데…… 하지만 전 데뷔하고 싶지 않아요.", );
      await digital.say_and_wait(`제가 데뷔해 버리면, 저- 저- 저-는 반대편에 있는 ${digital.uma_sex_title}를 근거리에서 덕질할 수 없게 된다구요!`, );
      await digital.say_and_wait(`저에겐 도저히 받아들일 수 없는 일이에요. 잔디 위든, 더트 위든 달리는 ${digital.uma_sex_title}들은 모두 최고란 말입니다!`, );
      await digital.say_and_wait("우오오오오……");
      await era.printAndWait(`${digital.sex}는 머리를 감싸 쥐며 무척 괴로워해 하는 것 같아 보였다.`);
      await era.printAndWait(`${digital.sex}의 고민을 완전히 이해한 것은 아니었지만, 잔디와 더트 중 단 하나만을 선택해야 한다는 사실에 불안해하는 듯 보였다.`, );
      await era.printAndWait(`확실히 이전까지는 두 종류의 마장 모두에서 훌륭하게 달릴 수 있는 ${digital.uma_sex_title}에 대해 들어본 적이 없었다…… 적어도 중앙 레이스에서는 말이다.`, );
      await digital.say_and_wait("그러니까, 전 이만 가볼게요!");
      await era.printAndWait(`어째서 선발 레이스에 나가지 않는 거지? 적합한 트레이너를 만나 데뷔하고, 레이스에 이름을 남기는 것은 모든 ${digital.uma_sex_title}들의 꿈이 아니었나?`, );
      return ret;
    };
    f.title = "변태다! 변…… 변태인가? (전편)";
    return f;
  })(),
  // [번역 완료] rec_end
  rec_end: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      await era.printAndWait(`${you.name}은(는) ${digital.name}에게 호기심이 생겼다. 선발 레이스가 끝난 지 하루 뒤, 운 좋게 공용 훈련장에서 ${digital.sex}를 발견했다.`, );
      await digital.say_and_wait(`하아하아, 이것이 ${digital.uma_sex_title}가 달려간 더트구나. 이 몸으로 감히 범접할 수 없는 진흙 위를 달릴 수 있다니, 정말 세 여신의 은총이야……`, );
      await era.printAndWait("힘이 실린 두 다리가 더트를 딛으며 먼지를 일으켰다. 각력이 강한 것이, 딱 봐도 더트에 매우 적합한 타입이었다.", );
      await digital.say_and_wait(`야하, ${digital.uma_sex_title}짱이 달렸던 잔디라니, 정말 최고야…… 이 정도라면 어떤 레이스에서도 좋은 성적을 낼 수 있겠어요. 정말 덕을 쌓았네~`, );
      await era.printAndWait(`이마의 땀을 닦으며 하늘을 보고 크게 웃는 ${digital.sex}는 무척 즐거워 보였다.`, );
      await era.printAndWait("잠깐만, 방금 잔디 코스로 옮겨가서 뛴 거야?! 아니, 그 말은 즉……");
      await era.printAndWait(`이는 ${digital.sex}가 남들보다 두 배의 훈련량을 소화하고 있다는 뜻이었다!`, );
      era.println();
      await you.say_and_wait("그 정도 실력을 갖추고도 선발 레이스에 나갈 생각이 없는 거야? 그건 재능 낭비라고!", );
      era.println();
      await digital.say_and_wait("아뇨 아뇨 아뇨, 만약 참가했다간 제 뇌가 팝콘처럼 튀겨져 버릴 거예요!", );
      await digital.say_and_wait("음…… 에! 당신은 누구였죠?");
      await era.printAndWait(`아마도 이전에 좋은 인상을 남겼기 때문인지, 아니면 그저 설명하고 싶어서인지. ${digital.sex}는 눈짓으로 조금 저쪽에서 이야기하자고 했다.`, );
      era.drawLine();
      await era.printAndWait(`${digital.sex}를 따라 훈련장 관중석으로 향했다.`, );
      await era.printAndWait(`대부분의 트레이너는 ${digital.uma_sex_title}들의 훈련을 가까운 곳에서 관찰하기 때문에, 관중석은 오히려 사람이 드문 장소가 되었다.`, );
      await era.printAndWait(`난간에 손을 얹고, 디지털은 훈련장에서 훈련 중인 ${digital.uma_sex_title}들을 바라보았다.`, );
      era.println();
      await digital.say_and_wait("사실 전 최애에 대한 망상을 품고 달리고 있어요.");
      await era.printAndWait("이 말을 내뱉는 디지털은 깊은 생각에 잠긴 듯했다.");
      await you.say_and_wait("최애에 대한 망상?");
      await digital.say_and_wait("에? 특수한 용어가 나왔나요? 음, 간단히 말하자면……", );
      await era.printAndWait(`${digital.sex}는 ${digital.uma_sex_title}에 대한 사랑, 어떻게 좋아하게 되었는지, 그리고 그 사랑 때문에 얼마나 노력해서 트레센에 합격했는지 쉴 새 없이 떠들기 시작했다. 그러다 데뷔를 결심했을 때 갑자기 깨달은 것이……`, );
      await digital.say_and_wait("보시다시피 전 잔디와 더트 적성이 모두 괜찮아요. 하지만 둘 다 가능하기 때문에 선택하기가 너무 어려운 거예요! 하나를 선택하면 다른 하나를 포기해야 하니까요!", );
      await era.printAndWait(`디지는 어쩔 수 없다는 듯 두 손을 펼쳤다.`);
      await digital.say_and_wait(`모든 ${digital.uma_sex_title}짱들은 각자의 마장에서 저마다의 매력이 있다구요! 전부 너무 고귀하다고요!`, );
      await digital.say_and_wait("전 도저히 받아들일 수 없었어요! 그래서 각오를 버리고, 아무것도 선택하지 않기로 했답니다!", );
      await digital.say_and_wait("아하하하하!");
      await era.printAndWait(`허리에 손을 올리고 고개를 젖히며, ${digital.sex}는 자조 섞인 웃음을 터뜨렸다.`, );
      await digital.say_and_wait(`어때요? 이제 저에겐 방법이 없겠죠? 전 이런 각오조차 없는 ${digital.uma_sex_title}라고요!`, );
      await you.say_and_wait("각오가 없다고……?");
      await era.printAndWait(`트레이너로서 ${you.name}은(는) 이미 수많은 더트 ${digital.uma_sex_title}나 단거리 ${digital.uma_sex_title}들이 트윙클 시리즈에서 가장 인기 있는 중거리 잔디 레이스에 나가지 못해 고뇌하는 것을 보거나 들어왔다.`, );
      await era.printAndWait(`하지만 결국 ${digital.couple_title}들은 깨닫게 된다. 레이스 그 자체의 거대한 의미, 즉 레이스가 가져다주는 가치는 인기에 비할 바가 아니라는 것을.`, );
      await era.printAndWait(`그런데 이 ${digital.uma_sex_title}는 어떤가? ${digital.name} 이라 자칭하는 이 ${digital.uma_sex_title}는 잔디와 더트를 동시에 달릴 수 없음을 고민하고 있다. 하지만 다른 ${digital.uma_sex_title}들과 결정적으로 다른 점은, ${digital.sex}에겐 그럴 재능이 있다는 것이다.`, );
      await era.printAndWait(`게다가…… ${digital.sex}는 이를 위해 남들의 두 배로 노력해왔다.`, );
      await digital.say_and_wait("후후후, 할 말이 없으신 모양이네요? 그럼 전 이만 실례할게요~", );
      era.println();
      await you.say_and_wait("아니, 반대로 말하면 네가 가장 각오가 되어 있는 거야!");
      await digital.say_and_wait("에? 그게 무슨 뜻이죠?");
      await era.printAndWait("그래, 방금 전 그 작은 몸으로 더트 위를 힘차게 질주하는 모습을 봤다.", );
      await era.printAndWait("그리고 더트 못지않게 잔디 위를 가볍게 질주하는 모습도.");
      await era.printAndWait(`선택을 내리지 못한 채, ${digital.sex}는 지금까지 양쪽 모두에서 최선을 다해온 것이다.`, );
      await era.printAndWait("그건 바로 이번 기회에 활용될 수 있다!");
      await you.say_and_wait("선택하지 않겠다는 각오!");
      await era.printAndWait(`그래, 선택하지 않는 것 그 자체가 하나의 선택이다. 하지만 ${digital.sex}가 말하는 「선택하지 않음」은 남들보다 두 배의 노력이 필요하지 않은가!`, );
      await digital.say_and_wait("에?");
      await you.say_and_wait("선택하지 않는다는 것! 잔디와 더트 중 하나를 고르지 않는다는 건, 곧 잔디와 더트 둘 다를 선택하겠다는 거 아니겠어!", );
      await era.printAndWait("디지털은 얼어붙었다. 힘없이 축 처져 가끔 움찔거리던 꼬리마저 딱딱하게 굳었다.", );
      await digital.say_and_wait("에? 잔디와 더트 둘 다 선택한다니, 설마……");
      await you.say_and_wait("맞아, 바로 올라운더라는 뜻이지!");
      await digital.say_and_wait("아뇨 아뇨 아뇨, 불가능해요.");
      await digital.say_and_wait("지어낸 이야기에서도 감히 나오기 힘든 올라운더라고요?!");
      await era.printAndWait("음, 아무리 그래도 좀 비현실적이었나……");
      await digital.say_and_wait("당신 천재예요?!");
      await digital.say_and_wait(`제가 잔디 위에서 잔디를 박차고 나가는 ${digital.uma_sex_title}를 관찰하는 동시에, 더트 위에서 먼지를 일으키는 ${digital.uma_sex_title}도 관찰할 수 있다는 건가요?!`, );
      await digital.say_and_wait("히야————!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", );
      await era.printAndWait(`디지털의 말이 너무 빨라 ${you.name}이(가) 반응할 틈도 없이, ${digital.sex}는 환성을 지르며 두 손을 높이 들고 제자리에서 한 바퀴를 돌았다.`, );
      await era.printAndWait(`${digital.sex}가 당신의 말을 이해한 것 같았다. 설마 도전해 보려는 건가?!`, );
      await digital.say_and_wait(`평소 ${digital.uma_sex_title}짱들을 정성껏 보필한 대가가 마침내 풍성한 결실을 맺는 건가요!`, );
      await digital.say_and_wait("우야————————!");
      await digital.say_and_wait("결정했어요! 저, 디지땅은 올라운더 왕이 되겠어요!");
      await digital.say_and_wait("모든 최애를 근거리에서 접하기 위해서요!");
      await you.say_and_wait("정말 흥미롭네. 내 담당 우마무스메가 되지 않겠어?");
      await era.printAndWait(`${you.name}이(가) 오른손을 내밀었다.`);
      await era.printAndWait(`비록 아까 더트와 잔디에서 보여준 활약이 대단했지만, 실전 레이스는 훈련과는 또 다른 법이다. ${digital.sex}의 미래가 과연 어떻게 될지 커다란 호기심이 일었다.`, );
      await digital.say_and_wait("……미리 말씀드리자면, 전 그저 최단 거리에서 제 최애들을 덕질하고 싶을 뿐이니 저에게 너무 큰 기대는 하지 마세요……", );
      await era.printAndWait("시작부터 밑밥을 깔다니……");
      await era.printAndWait(`하지만 ${digital.sex}의 눈빛만은 더없이 확고했고, 가녀린 작은 손이 당신의 손을 맞잡았다.`, );
      await era.printAndWait(`조금 이상해 보일지 몰라도, ${digital.sex} 라면 경기장에서 남다른 불꽃을 일으킬 수 있을 것이라고 ${you.name}은(는) 확신했다.`, );
    };
    f.title = "변태다! 변…… 변태인가? (후편)";
    return f;
  })(),
};
