/**
 * @file 스마트 팔콘 - 애정
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CharaTalk = require('#/utils/chara-talk');
const CharaTalkFactory = require('#/utils/chara-talk-factory');
const get_chara_talk = CharaTalkFactory.get_chara_talk;

module.exports = class extends CustomizedLove {
  async run() {
    const callname = sys_get_callname(46, 0),
      me = get_chara_talk(0),
      falcon = new CharaTalk(46),
      love = era.get('love:46');

    if (love === 49) {
      //자신의 연심을 깨달은 팔코가 트레이너를 피크닉에 초대하려 한다
      await print_event_name(`잎새 하나는 요청을 상징해!`, falcon);
      await era.printAndWait(
        `어느 휴일, ${me.name}이(가) 트레이닝실 문을 열자 맑은 날씨가 반겨주었다.`,
      );
      await falcon.say_and_wait(`${callname}♪`);
      await era.printAndWait(
        `의외로 ${falcon.name}은 ${me.name}보다 먼저 도착해 있었다.`,
      );
      await falcon.say_and_wait(`이렇게 좋은 날씨인데, 같이 피크닉 가자♪`);
      await era.printAndWait(`확실히 피크닉 가기 딱 좋은 날씨였다.`);
      era.printButton(`하지만 재료가 부족할 것 같은데`, 1);
      await era.input();
      await era.printAndWait(`피크닉을 갈 거라면 미리 말이라도 해주지 그랬어.`);
      await falcon.say_and_wait(`쨔쟌♪`);
      await era.printAndWait(`팔코는 마술사처럼 테이블보로 감싸진 피크닉 박스를 열어 보였다.`);
      await falcon.say_and_wait(`이미 전부 준비해 뒀어!`);
      await era.printAndWait(`무척 기대하고 있는 모양이었다.`);
      await falcon.say_and_wait(
        `그러니까, ${callname}, 팔코랑 같이 가줄 수 있어?`,
      );
      await era.printAndWait(`대답은 당연히..`);
      era.printButton(`좋아.`, 1);
      await era.input();
      await falcon.say_and_wait(`야호⭐`);
      await era.printAndWait(
        `조용히 트레이닝실 문을 닫고, ${falcon.name}의 안내에 따라 트레센을 나섰다.`,
      );
      era.drawLine({ content: '잠시 후' });
      await falcon.say_and_wait(`준비 끝!`);
      await era.printAndWait(`근처의 어느 공원에 도착했다.`);
      era.printButton(`잔디밭에 피크닉 온 사람들이 정말 많네.`, 1);
      await era.input();
      await era.printAndWait(`쉼터 잔디밭에는 곳곳에 돗자리를 펴고 앉은 관광객들이 가득했다.`);
      await falcon.say_and_wait(`그치만 오늘 날씨는 피크닉 하기에 정말 최고인걸♪`);
      await me.say_and_wait(`팔코, 피크닉을 정말 기대했나 보네.`);
      await falcon.say_and_wait(`팔코는 계속 둘이서 피크닉 가기를 기다려 왔으니까.`);
      await me.say_and_wait(`음, 룸메이트랑은 피크닉 안 가봤어?`);
      await era.printAndWait(`바구니에서 음식을 꺼내던 ${falcon.name}의 동작이 굳었다.`);
      await falcon.say_and_wait(
        `아, 아니야! 달라! 플래시 씨 일행이랑 가는 건 친구로서 가는 거고, ${callname} 이랑은……`,
      );
      await me.say_and_wait(`내가 ${falcon.sex}과는 다른 거야?`);
      await falcon.say_and_wait(
        `그…… 그게…… 아, 맞다! 트레이너와 ${falcon.get_uma_sex_title()} 사이의 유대감! 유대감 때문이야!`,
      );
      await era.printAndWait(`필사적으로 변명하는 팔코의 모습은 무척 귀여웠다.`);
      await me.say_and_wait(`오, 그 렇 구 나?`);
      await falcon.say_and_wait(
        `에? ${callname}, 팔코 놀리지 마!`,
      );
      await falcon.say_and_wait(
        `${callname}, 정말 싫어!`,
      );
      await me.say_and_wait(`팔코, 나를 싫어하는 거야?`);
      await falcon.say_and_wait(`아니야! 그건 그거고 이건 이거지!`);
      await me.say_and_wait(`정말 슬프네. 그럼 이 고기는 내 거야!`);
      await era.printAndWait(
        `${me.name}은(는) 팔코의 도시락에서 갑자기 고기 한 점을 집어 갔다.`,
      );
      await falcon.say_and_wait(`${callname} 심술쟁이!`);
      await falcon.say_and_wait(`그럼 팔코도 복수할 거야!`);
      await era.printAndWait(
        `${me.name}의 도시락에서 초밥 두 개를 집어 간 ${falcon.name}은 기세등등한 표정을 지었다.`,
      );
      await falcon.say_and_wait(
        `흐흥♪ 이제 ${callname}도 팔코의 무서움을 알겠지!`,
      );
      era.printButton(`장난해? 이제부터가 진짜 승부야!`, 1);
      await era.input();
      await era.printAndWait(
        `순식간에 결투 태세를 갖춘 ${me.name}은(는) 흥분 상태가 되어 팔코의 도시락을 조준했다!`,
      );
      await falcon.say_and_wait(`우마돌의 이름을 걸고! 팔코는 절대 지지 않아!`);
      await era.printAndWait(`두 사람 사이의 전쟁(?)에 주변 사람들의 시선이 쏠렸다.`);
      await era.printAndWait(`결국`);
      era.printButton(
        `큭! 인간은 역시 ${falcon.get_uma_sex_title()}를 이길 수 없는 건가?`,
        1,
      );
      await era.input();
      await era.printAndWait(`${me.name}의 완패로 끝났다.`);
      await falcon.say_and_wait(`이번 대결은 팔코의 승리야!`);
      await falcon.say_and_wait(`에? 이거 왠지 서로 도시락을 먹여주는 꼴 아냐?`, true);
      await era.printAndWait(`그 점을 깨달은 팔코의 얼굴이 순식간에 새빨개졌다.`);
      await falcon.say_and_wait(`아! 아니야! 이런 건 아직 너무 이르다구!`);
      await falcon.say_and_wait(`${callname} 변태!`);
      await era.printAndWait(
        `왠지 모르게 도망치듯 달려가는 팔코는 어안이 벙벙해진 ${me.name}과(와) 엉망진창이 된 전장만을 남겨두었다.`,
      );
      await me.say_and_wait(`오늘 하늘은 유리처럼 맑고 예쁘네.`);
      await era.printAndWait(
        `어느덧 하늘의 뭉게구름에 시선을 뺏긴 ${me.name}은(는) 어느 ${falcon.get_uma_sex_title()}의 뒷모습을 잊어버린 듯했다.`,
      );
      await era.printAndWait(`참 좋은 날씨였다.`);
      await sys_love_uma_in_event(46);
    } else if (love === 74) {
      //트레이너가 자신의 진심을 알아주길 바라는 팔코는 남몰래 기대하고 있다
      await print_event_name(`두 잎새는 희망을 상징해⭐`, falcon);
      await falcon.print_and_wait(
        `${callname}은 생각보다 훨씬 더 둔하네.`,
      );
      await falcon.print_and_wait(
        `그렇게나 노골적으로 힌트를 줬는데, 왜 그 사람 눈동자는 아무런 반응이 없는 거야?`,
      );
      await falcon.print_and_wait(
        `아니! 포기하면 안 돼. 톱 우마돌로서의 명예를 걸고, 반드시 이 나무토막 같은 팬 1호를 깨우쳐 주겠어!`,
      );
      era.drawLine();
      await era.printAndWait(`다시 비가 내리는 휴일이었다.`);
      await falcon.say_and_wait(`에에— 분명 오늘은 맑음이어야 했는데.`);
      await me.say_and_wait(
        `뭐, 일기예보가 항상 맞는 건 아니니까. 낮은 확률의 사건이 일어난 셈이지.`,
      );
      await era.printAndWait(
        `비 때문에 바닥이 미끄러워지는 바람에 팔코의 거리 라이브도 무산되었다.`,
      );
      await era.printAndWait(
        `이번 공연에 무척 공을 들였는지, 2주 전부터 연습했던 안무도 선보일 기회를 잃고 말았다.`,
      );
      await falcon.say_and_wait(`우으— 정말 분해.`);
      await era.printAndWait(
        `창밖을 노려보는 ${falcon.name}은 굵어지는 빗줄기를 보며 힘없이 꼬리를 늘어뜨렸다.`,
      );
      await me.say_and_wait(
        `그래도 팔코, 긍정적으로 생각해보자. 비록 야외에서 팬들과 소통할 기회는 잃었지만.`,
      );
      await me.say_and_wait(`대신 실내에서라면 더 좋은 일이 생길지도 모르잖아!`);
      await falcon.say_and_wait(
        `${callname}이(가) 그렇게 말한다면…… 아, 맞다!`,
      );
      await era.printAndWait(`축 처져 있던 귀가 순식간에 쫑긋 살아났다.`);
      await falcon.say_and_wait(`그럼 그냥 트레이닝실에서 공연하면 되겠다!`);
      await falcon.say_and_wait(`${callname}, 잠깐만 기다려 줘♪`);
      await era.printAndWait(`한번 생각나면 바로 행동에 옮기는 것이 팔코의 특징이었다.`);
      await me.say_and_wait(`하지만, 창밖의 빗소리가 심상치 않은데?`);
      await era.printAndWait(
        `흔들리는 나무처럼 ${me.name}의 마음도 술렁이기 시작했다.`,
      );
      await falcon.say_and_wait(`팔코 왔어♪`);
      await era.printAndWait(`승부복으로 갈아입은 ${falcon.name}이 트레이닝실로 돌아왔다.`);
      await me.say_and_wait(`이제 펼쳐질 춤이 기대되네.`);
      await falcon.say_and_wait(`팬 여러분을 위해서 팔코, 엄청 오랫동안 연습했다구♪`);
      await me.say_and_wait(`오오오! 팔코! 팔코!`);
      await era.printAndWait(`거리 공연 때와 똑같이 호응해주었다.`);
      await falcon.say_and_wait(`그럼, 팔코 노래 시작할게♪`);
      era.drawLine();
      await falcon.say_and_wait(`～～～♪ 모두 고마워!`);
      era.printButton(`팔코 파이팅!`, 1);
      era.printButton(`……`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await falcon.say_and_wait(
          `응응, 팬들의 감사를 받으니 팔코도 정말 기뻐!`,
        );
        await falcon.say_and_wait(`에? 왠지 하려던 걸 잊어버린 것 같은데?`, true);
        await falcon.say_and_wait(
          `우마돌이 팬들을 가만히 서 있게 둘 순 없지, 에이 몰라!`,
          true,
        );
        await falcon.say_and_wait(`자, 그럼 다음 곡 간다, 하나 둘!`);
        era.printButton(`팔코!`, 1);
        await era.input();
        await era.printAndWait(`감동적인 노랫소리가 다시 한번 트레이닝실에 울려 퍼졌다.`);
        era.set('cflag:46:호감거절', 74);
      } else {
        await me.say_and_wait(`팔코는 생각보다 훨씬 더 귀엽네.`);
        await falcon.say_and_wait(`……?`);
        await falcon.say_and_wait(
          `${callname}, 언제부터 바보가 된 거야? 팔코는 원래 항상 귀엽다구!`,
        );
        await me.say_and_wait(
          `아니, 내 말은 팔코가 소녀로서 보여주는 모습 말이야.`,
        );
        await me.say_and_wait(
          `감수성이 풍부한 나이대의 천진난만함이 마치 예술품 같아.`,
          true,
        );
        await era.printAndWait(`팔코의 얼굴이 서서히 붉어졌다.`);
        await falcon.say_and_wait(
          `${callname} 변태! H!`,
        );
        await falcon.say_and_wait(`이제 ${callname}이랑은 안 놀 거야!`);
        await era.printAndWait(
          `${me.name}이(가) 반응할 틈도 없이 ${falcon.name}은 트레이닝실 문을 박차고 나가버렸다.`,
        );
        await me.say_and_wait(`아, 이거 오해가 생겨버렸네.`);
        await era.printAndWait(
          `${falcon.get_uma_sex_title()} 소녀의 마음은 지금 밖에서 쏟아지는 폭우와도 같았다.`,
        );
        await me.say_and_wait(`근데 비가 정말 엄청나게 쏟아지네.`);
        await me.say_and_wait(`……팔코.`);
        await era.printAndWait(`트레이너인 ${me.name}은(는) 결국 결단을 내렸다.`);
        era.printButton(`뒤쫓아가는 수밖에 없어!`, 1);
        era.printButton(`……일단 전화부터 해볼까?`, 2);
        const ret2 = await era.input();
        if (ret2 === 1) {
          await falcon.say_and_wait(`만약 팔코가 도망간다면?`);
          await me.say_and_wait(`그럼 쫓아가서 잡아야지!`);
          await era.printAndWait(
            `매일 함께 지내온 ${me.name}은(는) 당연히 ${falcon.name}이 어디에 있을지 짐작이 갔다.`,
          );
          await me.say_and_wait(`……왜 여기에 없지?`);
          await era.printAndWait(`강변에는 ${falcon.sex}의 모습이 보이지 않았다.`);
          await era.printAndWait(`캐모마일 군락은 불어난 강물에 거의 잠겨 있었다.`);
          await me.say_and_wait(`……팔코, 어디에 있는 거야?`);
          await falcon.say_and_wait(
            `……${callname}이라면, 어쩌면 팔코의 꿈을 이루어줄 수 있을지도 몰라.`,
          );
          await me.say_and_wait(`……맞아! 분명 거기야!`);
          await era.printAndWait(
            `직감이 번개처럼 스쳐 지나가며 ${me.name}에게 방향을 제시했다.`,
          );
          await era.printAndWait(
            `고민할 시간조차 아까웠던 ${me.name}은(는) 즉시 그곳을 향해 달렸다.`,
          );
          era.drawLine({ content: '옥상' });
          await era.printAndWait(
            `빗속에 우두커니 서 있는 조각상처럼, ${falcon.name}은 미동도 하지 않았다.`,
          );
          await me.say_and_wait(`팔코!`);
          await falcon.say_and_wait(
            `……${callname}, 제발 더 이상 오지 마.`,
          );
          await era.printAndWait(
            `무언가 겁이 난 듯 ${me.name}에게서 멀어지려던 ${falcon.name}은 천천히 난간 쪽으로 물러났다.`,
          );
          await falcon.say_and_wait(`팔코에게 가까이 오지 말아줘!`);
          await era.printAndWait(
            `앞으로 다가가는 ${me.name}과(와) 한 걸음씩 뒤로 물러나는 팔코.`,
          );
          await falcon.say_and_wait(
            `팔코…… 팔코도 화나면 ${callname}을 차버릴 거야!`,
          );
          await era.printAndWait(
            `${me.name}은(는) 알고 있었다. 인간은 결코 ${falcon.get_uma_sex_title()}를 이길 수 없다는 것을.`,
          );
          await era.printAndWait(`하지만 지금 이 순간, 할 수 있는 유일한 일은.`);
          await falcon.say_and_wait(`……윽!`);
          await era.printAndWait(
            `흠뻑 젖은 ${falcon.name}을(를) 꽉 껴안고, 강압적으로 입을 맞추었다.`,
          );
          await falcon.say_and_wait(`……`);
          await era.printAndWait(`의외로 ${falcon.name}은 강하게 거부하지 않았다.`);
          await me.say_and_wait(`미안해, 이제야 팔코의 마음을 알 것 같아.`);
          await me.say_and_wait(`진작 알았어야 했는데. 그 수많은 힌트들을.`);
          await me.say_and_wait(
            `나는 비겁한 사람이라, 희망찬 길이 존재할 거란 상상조차 못 했어.`,
          );
          await me.say_and_wait(
            `그래서 팔코에게 너무 많은 상처를 줬어. 정말 미안해.`,
          );
          await me.say_and_wait(`하지만 지금 이 순간만큼은 바라고 있어.`);
          await me.say_and_wait(`진심으로 바라고 있어.`);
          await me.say_and_wait(`${falcon.name}, 나와 사귀어 줄래?`);
          await era.printAndWait(
            `${falcon.name}의 두 눈을 똑바로 응시하며, ${falcon.name}이 답을 내리도록 몰아붙였다.`,
          );
          await falcon.say_and_wait(`……`);
          await falcon.say_and_wait(
            `……${callname}은 정말 심술쟁이야.`,
          );
          await falcon.say_and_wait(`대답은 이미 하나뿐이잖아?`);
          await era.printAndWait(
            [falcon.get_colored_name(), `「${me.actual_name}을(를) 제일 좋아해!」`],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.375rem',
            },
          );
          await me.say_and_wait(`얼마나 좋은데!`);
          await era.printAndWait(
            [falcon.get_colored_name(), `「이마안큼 좋아해❤」`],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.875rem',
            },
          );
          await era.printAndWait(
            `빗속에서 바보 커플처럼 서로에게 고백한 두 사람은 드디어 연인 사이로 발전하게 되었다.`,
          );
          await sys_love_uma_in_event(46);
        } else {
          await era.printAndWait(
            `그 후 팔코가 무사히 기숙사로 돌아갔다는 소식을 듣고 ${me.name}은(는) 안도의 한숨을 내쉬었다.`,
          );
          era.set('cflag:46:호감거절', 74);
        }
      }
    } else if (love === 89) {
      await print_event_name(`세 잎새는 사랑을 대표해❤`, falcon);
      await falcon.say_and_wait(`메이드 팔코 등장⭐`);
      await falcon.say_and_wait(
        `${callname}, 팔코의 이 차림 어때 보여?`,
      );
      await era.printAndWait(
        `귀여운 스타일의 메이드복을 입은 ${falcon.name}은 가터벨트까지 착용하고 있었다.`,
      );
      await me.say_and_wait(`팔코, 정말 잘 어울리네.`);
      await falcon.say_and_wait(
        `지금 여기 서있는 건 ${falcon.name}이야. 트레이너 ${me.get_adult_sex_title()}♪`,
      );
      await me.say_and_wait(
        `여전히 ${falcon.name}과 아이돌 팔코를 확실히 구분하고 있네.`,
        true,
      );
      await era.printAndWait(
        `${falcon.name}은 잠시 멈칫하더니, 메이드의 정석적인 인사 포즈를 취했다.`,
      );
      await falcon.say_and_wait(
        `주인님, 지금까지 보살펴 주셔서 감사합니다. 메이드 ${falcon.name}은 아직 초보지만, 주인님을 모시는 데 전력을 다할게요.`,
      );
      await era.printAndWait(`오오, 벌써 역할에 몰입한 건가?`);
      await me.say_and_wait(
        `수고했어, ${falcon.name}. 그럼 오늘 일정표 좀 가져다줄래?`,
      );
      await falcon.say_and_wait(`네, 주인님.`);
      await era.printAndWait(
        `선반에서 자료를 꺼낸 ${falcon.name}이 서류를 ${me.name}의 손에 건넸다.`,
      );
      await me.say_and_wait(`정말 고마워.`);
      await falcon.say_and_wait(
        `에헤헤⭐ 주인님, ${falcon.name}을 조금 더 칭찬해 줘♪`,
      );
      await me.say_and_wait(`위험해! 너무 귀엽잖아.`, true);
      await me.say_and_wait(`고생했어, 이제 소파에서 좀 쉬고 있어.`);
      await falcon.say_and_wait(`지시를 따를게요♪`);
      await era.printAndWait(
        `어디선가 솟구치는 묘한 기분을 억누르며, 억지로 자료에 집중하려 애썼다.`,
      );
      era.drawLine();
      await falcon.say_and_wait(`정말 팔코가 옆에서 안 도와줘도 괜찮겠어?`);
      await era.printAndWait(`어느샌가 다가온 팔코가 ${me.name}과(와) 눈을 맞추었다.`);
      await me.say_and_wait(`제길! 아직은 때가 아니야.`, true);
      await me.say_and_wait(`아니야, 팔코는 그냥 거기 얌전히 앉아 있으면 돼.`);
      era.drawLine();
      await falcon.say_and_wait(`주인님, 업무 보느라 고생하셨어요♪`);
      await era.printAndWait(
        `잘 우려낸 홍차를 책상 위에 올려둔 ${falcon.name}이 기대 섞인 눈빛으로 ${me.actual_name}을(를) 바라보았다.`,
      );
      await me.say_and_wait(`정말 고마워.`);
      await era.printAndWait(`차를 한 모금 머금자, 의외의 달콤함이 느껴졌다.`);
      era.printButton(`정말 맛있어.`, 1);
      await era.input();
      await falcon.say_and_wait(`정말?! 팔코의 노력이 드디어 보상받았나 봐♪`);
      await me.say_and_wait(`안에 뭘 넣은 거야?`);
      await falcon.say_and_wait(`레몬이랑 설탕, 그리고 홍차 잎이야♪`);
      await me.say_and_wait(`팔코도 여기 앉아서 같이 마시자.`);
      await falcon.say_and_wait(`빤히————`);
      await era.printAndWait(`부풀린 볼이 무척이나 귀여웠다.`);
      await me.say_and_wait(
        `흠! 주인으로서 특별히 메이드 ${falcon.name}에게 나와 함께 홍차를 즐길 권한을 주마.`,
      );
      await falcon.say_and_wait(`주인님의 총애를 입게 되어 ${falcon.name}은 정말 영광이에요!`);
      await era.printAndWait(`자리에 앉아 함께 차를 마시는 ${falcon.name}은 무척 행복해 보였다.`);
      await me.say_and_wait(`다음엔 어떤 코스프레를 시킬까.`, true);
      await era.printAndWait(
        `왠지 찔리는 마음에 차를 몇 모금 더 마시며, 곁눈질로 슬쩍 ${falcon.name}을 살폈다.`,
      );
      await era.printAndWait(
        `${me.name}을(를) 뚫어지게 쳐다보던 ${falcon.name}이 예쁜 미소를 지었고, 앞에 놓인 홍차에서는 여전히 따뜻한 김이 올라오고 있었다.`,
      );
      await era.printAndWait(`미묘한 분위기 속에서 시간은 조금씩 흘러갔다.`);
      era.drawLine();
      await me.say_and_wait(
        `후우— 오전 일은 대충 끝났네. 같이 식당에 가자, ${falcon.name}.`,
      );
      await falcon.say_and_wait(`네, 주인님!`);
      await era.printAndWait(
        `식당으로 가는 길에 수많은 시선이 ${me.name}들에게 꽂히는 것 같았다.`,
      );
      await me.say_and_wait(`?`, true);
      await era.printAndWait(
        `의아함을 느낀 ${me.name}은(는) 무의식적으로 곁에 있는 ${falcon.name}을 보았다.`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `메이드복 차림의 ${falcon.name}이 미소를 지으며 ${me.name}을(를) 바라보고 있었다.`,
      );
      await me.say_and_wait(`이거 무슨 벌칙 게임인가.`, true);
      await era.printAndWait(
        `${falcon.sex}에게 옷을 갈아입으라고 할지 고민하는 사이 식당에 들어섰다.`,
      );
      await falcon.say_and_wait(`주인님은 어떤 걸 드시고 싶으세요?`);
      await me.say_and_wait(`어제랑 같은 걸로.`);
      await era.printAndWait(`무심코 말이 툭 튀어나왔다.`);
      await falcon.say_and_wait(`그럼 ${falcon.name}이 지금 바로 준비해 올게요♪`);
      await era.printAndWait(
        `교복 무리 사이에서 메이드복을 입고 타다닥 줄을 서러 가는 팔코는 유독 눈에 띄었다.`,
      );
      await me.say_and_wait(`세상아 망해라, 왜 다들 나를 쳐다보는 거야.`, true);
      await me.say_and_wait(`오늘 날씨도 곧 비가 올 것 같네.`, true);
      await era.printAndWait(`우중충한 날씨가 의외로 ${me.name}에게는 즐거움을 주었다.`);
      await falcon.say_and_wait(`오래 기다리셨어요, ${callname}♪`);
      await era.printAndWait(
        `두 사람의 점심을 식탁에 내려놓은 ${falcon.name}이 기대 어린 눈빛으로 ${me.name}을(를) 바라보았다.`,
      );
      await me.say_and_wait(`수고했어, 팔코.`);
      await falcon.say_and_wait(`으으음—`);
      await era.printAndWait(
        `팔코의 머리를 살포시 쓰다듬자, ${falcon.name}의 불만 섞인 표정은 금세 황홀한 표정으로 바뀌었다.`,
      );
      await falcon.say_and_wait(`그럼 보답으로 팔코가 ${callname}에게 먹여줄게!`);
      await era.printAndWait(
        `${falcon.name}은 ${me.name}의 식판으로 젓가락을 뻗어 고기 한 점을 집더니 ${me.name}의 입가로 가져왔다.`,
      );
      await falcon.say_and_wait(`아～～～ 해봐.`);
      await era.printAndWait(
        `젓가락이 입안에 닿는 이질감은 곧 가득한 행복감으로 바뀌었다.`,
      );
      era.printButton(`이번엔 내가 ${falcon.name}에게 먹여줄게.`, 1);
      await era.input();
      await falcon.say_and_wait(`아～～～ 냠!`);
      await era.printAndWait(
        `남은 맛을 음미하는 ${falcon.name}이 눈을 가늘게 뜨고 이 순간을 즐겼다.`,
      );
      await falcon.say_and_wait(`이제 내 차례야!`);
      era.drawLine();
      await me.say_and_wait(`정말 고마워!`);
      await falcon.say_and_wait(`팔코도 고마워!`);
      await era.printAndWait(
        `서로 음식을 먹여주는 동안, 주변 사람들은 약속이라도 한 듯 ${me.name}들과 거리를 두었다.`,
      );
      await me.say_and_wait(
        `저 사람들은 그저 이렇게 귀여운 애인을 구하지 못해서 질투하는 것뿐이야.`,
        true,
      );
      await era.printAndWait(`${me.name}은(는) 속으로 애써 생각했다.`);
      await me.say_and_wait(`그럼 이제 뭘 하면 좋을까?`);
      await falcon.say_and_wait(
        `그것보다, ${callname} 입가에 소스가 덜 닦였어!`,
      );
      await era.printAndWait(
        `팔코는 순식간에 ${me.name}의 곁으로 다가와 혀를 내밀어 소스를 말끔히 핥아냈다.`,
      );
      await falcon.say_and_wait(`잘 먹었습니다!`);
      await era.printAndWait(`뒤로 물러나려던 팔코의 허리를 꽉 끌어안았다.`);
      await me.say_and_wait(`${falcon.name}의 입가에도 소스가 남았는데?`);
      await falcon.say_and_wait(`에헤~ ${callname}❤`);
      await era.printAndWait(`다시 한번 팔코의 입가에 남은 맛을 음미한 뒤.`);
      await me.say_and_wait(`${falcon.name}.`);
      await falcon.say_and_wait(`${me.actual_name}❤`);
      await era.printAndWait(
        `식당 한복판에서 남들의 시선은 아랑곳하지 않고 입을 맞추는 연인은 이 달콤한 시간을 만끽했다.`,
      );
      await sys_love_uma_in_event(46);
    } else if (love === 99) {
      //소원대로 트레이너와 결혼하게 된 팔코는 행복을 느꼈다
      await print_event_name(`네 잎새는 행복을 대표해♪`, falcon);
      era.printButton(`막상 닥치니 좀 긴장되네.`, 1);
      await era.input();
      await falcon.say_and_wait(`괜찮아, 팔코도 지금 엄청 긴장되거든♪`);
      await era.printAndWait(`서로 사랑하는 두 사람은 마침내 결혼 날짜를 확정했다.`);
      era.printButton(`처음 우마스타에 발표했을 때는 팬들이 보복할까 봐 얼마나 걱정했는지 몰라.`, 1);
      await era.input();
      await era.printAndWait(
        `우마스타에 결혼 소식을 올린 뒤, 받아들이지 못하는 소수의 팬도 있었지만 대다수의 팬은 진심 어린 축복을 보내주었다.`,
      );
      await falcon.say_and_wait(`에이. 안 그랬을 거야?`);
      era.printButton(
        `팔코가 곁에 있으면 어떤 고난도 다 이겨낼 수 있을 것 같은 안도감이 들어.`,
        1,
      );
      await era.input();
      await me.say_and_wait(
        `그러니까, 팔코를 만난 건 내 인생에서 가장 행복한 순간이야.`,
      );
      await falcon.say_and_wait(
        `이제 와서 그런 낯간지러운 소리를 하면 팔코가 곤란해진다구?`,
      );
      await me.say_and_wait(`영원히 팔코 곁을 지켜줄게.`);
      await falcon.say_and_wait(
        `그럼 앞으로도 팔코를 가장 소중하게 여겨줘야 해?`,
      );
      await me.say_and_wait(
        `응, 둘 다 늙어서 움직이지 못하게 될 때까지, 마지막 순간에도 오늘을 떠올릴 거야.`,
      );
      await falcon.say_and_wait(`팔코도 그럴 거야.`);
      await era.printAndWait(`두 사람은 맞잡은 두 손에 힘을 주며 오늘의 맹세를 영원히 기억할 것을 다짐했다.`);
      await me.say_and_wait(`미안, 분위기가 너무 무거워졌네. 화제를 바꿔보자.`);
      era.printButton(`팔코는 어떤 스타일의 웨딩드레스가 좋아?`, 1);
      await era.input();
      await falcon.say_and_wait(`트레이너는 어떤 스타일의 웨딩드레스가 좋은데?`);
      await era.printAndWait(`질문이 되돌아왔다.`);
      await me.say_and_wait(`음, 어디 보자.`);
      era.printButton(`하트넥 드레스는 달콤하면서도 섹시해서 좋아.`, 1);
      era.printButton(`스트레이트는 섹시하고 우아하면서 쇄골이 보여서 좋아.`, 2);
      era.printButton(`역시 풍성한 궁정 스타일에 트레인이 긴 게 예쁘지.`, 3);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await falcon.say_and_wait(`팔코에게 그렇게 과감한 복장은 NG라구!`);
        await era.printAndWait(`맞잡은 손바닥에서 전해지는 압력이 점점 세졌다.`);
        await me.say_and_wait(`미, 미안해! 정말 미안!`);
      } else if (ret1 === 2) {
        await falcon.say_and_wait(`일단 한번 입어볼까?`);
        await me.say_and_wait(`그래.`);
        await falcon.say_and_wait(`……아무래도 다른 걸로 입어야겠어⭐`);
        await me.say_and_wait(`설마 가슴이 너무 작아서 안 걸리는 건가?`, true);
        await era.printAndWait(
          `무례한 말은 입 밖으로 내지 않고, 그저 응원하는 눈빛으로 팔코를 바라보았다.`,
        );
      } else {
        await falcon.say_and_wait(`으음, 팔코의 분위기랑은 좀 안 어울리는 것 같아.`);
      }
      era.printButton(`다른 종류도 더 둘러보자.`, 1);
      await era.input();
      await falcon.say_and_wait(`응, 이건 어때?`);
      await era.printAndWait(
        `퍼프 소매 드레스로 갈아입은 팔코가 당신 앞에서 자랑스럽게 한 바퀴 돌았다.`,
      );
      await me.say_and_wait(`천사처럼 귀엽네.`);
      await falcon.say_and_wait(
        `아, 그러고 보니 ${callname}은 턱시도 다 골랐어?`,
      );
      await me.say_and_wait(`응, 이미 골라뒀지.`);
      await falcon.say_and_wait(`시간이 좀 남았는데 근처 좀 더 둘러보자!`);
      await falcon.say_and_wait(
        `이렇게 ${callname}과 함께 보내는 시간, 정말 행복해!`,
      );
      await me.say_and_wait(`그러고 보니 팔코, 앞으로의 계획은 뭐야?`);
      await falcon.say_and_wait(
        `팔코는 앞으로도 더트 우마돌로서 선배가 되어 경기장에서 후배 ${falcon.get_uma_sex_title()}들을 격려해주고 싶어!`,
      );
      await falcon.say_and_wait(
        `그 과정이 힘들 수도 있겠지만, ${callname}이 곁에 있다면 어떤 어려움도 다 이겨낼 수 있을 거야!`,
      );
      await falcon.say_and_wait(`그리고 팔코는 오늘보다 내일이 더 기대돼!`);
      await me.say_and_wait(`나도 그래!`);
      await era.printAndWait(`그 후 두 사람은 근처 공원에서 데이트를 즐겼다.`);
      era.drawLine({ content: '황혼 무렵' });
      await falcon.say_and_wait(`팔코, 이제 슬슬 돌아가야겠어!`);
      await era.printAndWait(
        `맞잡았던 손을 아쉽게 놓으며, ${falcon.name}은 붉어진 얼굴로 당신을 바라보았다.`,
      );
      await me.say_and_wait(`그럼 돌아가기 전에.`);
      await era.printAndWait(`황혼의 노을 속에서 두 사람은 행복하게 입을 맞추었다.`);
      await falcon.say_and_wait(`자, 이제 팔코 정말 갈게!`);
      await me.say_and_wait(`내일은 분명 행복한 기운이 가득한 날이 될 거야.`);
      await falcon.say_and_wait(`팔코도 그렇게 생각해.`);
      await era.printAndWait(`황혼의 노을 속에서 두 사람은 행복하게 입을 맞추었다.`);
      await falcon.say_and_wait(`팔코도 내일이 오는 게 너무 기다려져⭐`);
      await falcon.say_and_wait(`${callname}, 내일 봐⭐`);
      era.drawLine({ content: '다음 날' });
      await era.printAndWait(
        `너무 긴장해서 잠을 설칠 줄 알았는데, 의외로 ${me.name}은(는) 평소보다 더 깊이 잠들었다.`,
      );
      await era.printAndWait(
        `비몽사몽 중에 알람 소리를 듣고 깨어나 서둘러 옷을 갈아입고 예식장으로 향했다.`,
      );
      await me.say_and_wait(`한 시간이나 일찍 왔는데 너무 빨리 온 건가?`);
      await era.printAndWait(`오히려 시간이 딱 맞았다. 안내를 받아 대기실로 향했다.`);
      await era.printAndWait(
        `예식장 안은 축하하러 온 ${falcon.get_uma_sex_title()}들로 가득 찼다.`,
      );
      era.printButton(`좀 긴장되네.`, 1);
      await era.input();
      await era.printAndWait(`얌전히 자리에 앉아 메이크업을 기다렸다.`);
      await falcon.say_and_wait(`${callname}⭐`);
      await me.say_and_wait(`에? 팔코, 네가 왜 여기 있어?`);
      await falcon.say_and_wait(
        `한시라도 빨리 ${callname}의 얼굴이 보고 싶어서!`,
      );
      await falcon.say_and_wait(
        `${callname}의 상냥한 미소를 생각하면 팔코 심장이 너무 빨리 뛰어.`,
      );
      await falcon.say_and_wait(
        `그러다가 갑자기 불안해졌어. 만약 ${callname}이 여기 없으면 어쩌나 하고.`,
      );
      await falcon.say_and_wait(`팔코는 그럼 어떻게 해야 할까?`);
      await falcon.say_and_wait(`기다리고 기다릴수록 팔코 마음이 점점 더 불안해져서.`);
      await falcon.say_and_wait(
        `빨리 ${callname}의 모습을 보고 싶어! 빨리 그 따뜻한 품에 안기고 싶어!`,
      );
      await falcon.say_and_wait(`그래서 팔코는 더 이상 못 기다리겠어!`);
      await era.printAndWait(
        `흥분한 ${falcon.name}을 보며, ${me.name}은(는) 상냥하게 ${falcon.sex}의 머리를 쓰다듬어 주었다.`,
      );
      await me.say_and_wait(`안심해. 여기 있잖아. 영원히 네 곁을 떠나지 않을게.`);
      await era.printAndWait(
        `차츰 평정을 되찾은 ${falcon.name}은 비로소 안심한 듯 ${me.name}을(를) 쳐다보았다.`,
      );
      await era.printAndWait(`여성 메이크업 아티스트 「죄송합니다, 혹시 어디 계신지 보셨……」`);
      await era.printAndWait(
        `여성 메이크업 아티스트 「${falcon.name} 씨! 어서 오세요, 곧 시작한다고요!」`,
      );
      await me.say_and_wait(
        `이제부터 내가 계속 네 곁에 있을 테니까, 긴장하지 마.`,
      );
      await falcon.say_and_wait(
        `응! ${callname}, 이따 봐♪`,
      );
      await era.printAndWait(
        `드레스 자락을 살짝 들어 올린 ${falcon.name}이(가) 자신의 대기실로 돌아갔다.`,
      );
      await me.say_and_wait(`${falcon.name}`, true);
      await era.printAndWait(
        `방금 달려왔던 ${falcon.name}의 귀여운 모습이 뇌리에 스쳐 지나갔다.`,
      );
      era.drawLine();
      await era.printAndWait(`양가의 촛불을 밝힌 뒤,`);
      await era.printAndWait(
        `세 여신의 증언 아래, ${me.name}과(와) ${falcon.name}이 예식장으로 입장했다.`,
      );
      await era.printAndWait(
        `신부 「세 여신의 뜻에 따라 이 거룩한 혼인을 증명하겠습니다.」`,
      );
      await era.printAndWait(
        `신부 「${falcon.get_uma_sex_title()}는 이계의 영혼을 인도하여 어머니의 축복을 부여한 존재입니다.」`,
      );
      await era.printAndWait(
        `신부 「세 여신의 축복 아래 아름답고 강인하며, 달리는 것을 사랑하는 ${falcon.get_uma_sex_title()}가 탄생했습니다.」`,
      );
      await era.printAndWait(
        `신부 「세 여신께서는 인간과 ${falcon.get_uma_sex_title()}가 평생을 함께하며 일편단심으로 결합하기를 바라십니다.」`,
      );
      await era.printAndWait(
        `신부 「태어난 자녀 또한 세 여신의 축복을 받을 것이니, 결코 저버리지 말고 정성껏 키워야 합니다.」`,
      );
      await era.printAndWait(
        `신부 「그럼, ${me.actual_name}, 당신은 ${falcon.name}을 아내로 맞이하여 친구이자 반려자로서 함께 살아가겠습니까?」`,
      );
      await era.printAndWait(
        `신부 「당신은 ${falcon.sex}를 사랑하고 존중합니까? 고통이나 승리, 혹은 혼란 속에서도 ${falcon.sex}와 평등하게 기쁨을 나누겠습니까?」`,
      );
      era.printButton(`네, 맹세합니다.`, 1);
      await era.input();
      era.printButton(`${falcon.name}, 당신을 나의 아내로 맞이합니다.`, 1);
      await era.input();
      era.printButton(
        `오늘부터 당신을 얻고 지키며, 좋을 때나 나쁠 때나, 부유할 때나 가난할 때나, 병들거나 건강하거나 당신을 사랑하고 아끼며 죽음이 우리를 갈라놓을 때까지 함께하겠습니다.`,
        1,
      );
      await era.input();
      era.printButton(`세 여신의 뜻을 따라, 당신에 대한 나의 사랑과 충성을 약속합니다.`, 1);
      await era.input();
      await era.printAndWait(
        `신부 「그럼, ${falcon.name}, 당신은 ${me.actual_name}을(를) 남편으로 맞이하여 친구이자 반려자로서 함께 살아가겠습니까?」`,
      );
      await era.printAndWait(
        `신부 「당신은 그를 사랑하고 존중합니까? 고통이나 승리, 혹은 혼란 속에서도 그와 평등하게 기쁨을 나누겠습니까?」`,
      );
      await falcon.say_and_wait(`응, 맹세할게.`);
      await falcon.say_and_wait(`${me.actual_name}, 당신을 나의 남편으로 맞이할게.`);
      await falcon.say_and_wait(
        `오늘부터 당신을 지키며, 좋을 때나 나쁠 때나, 부유할 때나 가난할 때나, 병들거나 건강하거나 당신을 사랑하고 아끼며 죽음이 우리를 갈라놓을 때까지 함께할 거야.`,
      );
      await era.printAndWait(
        `신부 「결혼 반지는 영원함을 상징하며, 끝없는 사랑을 가진 두 마음과 영혼의 영원한 결합을 의미합니다. 이제 당신의 사랑과 두 영혼이 하나 되기를 바라는 간절한 염원을 담아 ${falcon.sex}에게 선물하십시오.」`,
      );
      await era.printAndWait(`신부 「신부에게 이 결혼 반지를 끼워주십시오.」`);
      await era.printAndWait(
        `허락이 떨어진 뒤, 반지 케이스에서 조심스럽게 반지를 꺼내 ${falcon.name}의 약지에 끼워주었다.`,
      );
      era.printButton(`${falcon.name}의 손가락에 반지를 끼워준다`, 1);
      await era.input();
      await era.printAndWait(
        `왼손 약지를 뚫어지게 쳐다보던 ${falcon.name}의 눈가에서 행복의 눈물이 흘러내렸다.`,
      );
      await era.printAndWait(
        `미래에 대한 약간의 두려움과 막막함은 여전했지만, 지금 이 순간의 ${falcon.name}은 의심할 여지 없이 세상에서 가장 행복해 보였다.`,
      );
      await era.printAndWait(
        `신부 「똑같이 당신의 사랑과 두 영혼이 하나 되기를 바라는 간절한 염원을 담아 그에게 선물하십시오.」`,
      );
      await era.printAndWait(`신부 「신랑에게 이 결혼 반지를 끼워주십시오.」`);
      await era.printAndWait(
        `${falcon.name} 역시 반지 케이스에서 다른 반지를 꺼내 당신의 손가락에 끼워주었다.`,
      );
      await era.printAndWait(`그리고 ${me.name}의 생각은……`);
      era.printButton(`${falcon.name}을 만난 것은 내 인생 최대의 영광이야.`, 1);
      await era.input();
      await era.printAndWait(
        `신부 「이제부터 두 사람은 자신만이 아닌 서로를 먼저 생각해야 합니다. 같은 이상을 가지고 기쁨과 슬픔을 함께 나누십시오.」`,
      );
      await era.printAndWait(
        `신부 「각자의 촛불로 가운데의 큰 촛불을 밝힐 때, 자신을 상징하던 기존의 촛불은 꺼야 합니다.」`,
      );
      await era.printAndWait(
        `신부 「가운데의 촛불을 밝히는 것은 두 분의 새로운 생활의 시작이며, 결코 나눌 수 없는 하나의 결합이 되었음을 증명하는 것입니다.」`,
      );
      await era.printAndWait(`신부 「이 촛불의 광채가 두 분의 결합을 증명하기를.」`);
      await era.printAndWait(
        `신부 「세상의 그 무엇도 두 분을 갈라놓을 수 없습니다. 축하합니다.」`,
      );
      await era.printAndWait(`두 사람은 축복 속에 입을 맞추었고, 사람들의 환호성이 쏟아졌다.`);
      await era.printAndWait(
        `신부 「세 여신의 축복이 함께하기를 바라며, 두 분의 가정이 사랑의 귀감이 되기를 기원합니다.」`,
      );
      await era.printAndWait(`부케를 품에 안은 ${falcon.name}은 세상에서 가장 행복한 미소를 지었다.`);
      await sys_love_uma_in_event(46);
    }
  }
};