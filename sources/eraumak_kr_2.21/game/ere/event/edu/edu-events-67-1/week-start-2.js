const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (daiya, me, flags) => {
    await print_event_name('발렌타인', daiya);
    await daiya.say_and_wait('해피 발렌타인♪ 트레이너 선생님!');
    await daiya.say_and_wait('자, 출발해요!');
    era.printButton('「어디로 가는데!?」', 1);
    await era.input();
    await daiya.say_and_wait('후후후, 도착하면 알게 되실 거예요♪');
    await era.printAndWait(
      `발렌타인데이. 사토노 다이아몬드가 웬일인지 갑자기 ${
        me.name
      }을(를) 데리고 밖으로 나섰다. ${me.get_couple_title()}(이)가 도착한 곳은……`,
    );
    await era.printAndWait(
      '특별할 것 없는 릿토 생활관 앞이었다. 그런데 생활관 정문 앞에 낯선 거대 기계가 놓여 있었다.',
    );
    era.printButton('「저 기중기랑 산더미 같은 상자들은 뭐야!?」', 1);
    await era.input();
    await daiya.say_and_wait('헤헤, 트레이너 선생님을 위해 준비한 발렌타인 서프라이즈예요!');
    await daiya.say_and_wait('트레이너 선생님을 위해 특별히 준비한 거대 인형 뽑기 기계랍니다!');
    await daiya.say_and_wait(
      '규칙은 일반 인형 뽑기와 같아요. 이제부터 사람을 기중기에 매달아서, 직접 아래로 내려가 경품을 집어 올리는 방식이죠.',
    );
    await era.printAndWait('즉, 사람이 직접 집게가 되는 게임이라는 뜻이다.');
    await daiya.say_and_wait(
      '모처럼 맞이한 발렌타인이잖아요. 역시 깜짝 놀랄 만한 이벤트가 좋을 것 같아서 조사를 좀 해봤거든요.',
    );
    await daiya.say_and_wait(
      '그러다 사토노 그룹 계열사에서 예전에 거대 인형 뽑기 이벤트를 열었다는 기사를 발견했지 뭐예요!',
    );
    await daiya.say_and_wait(
      '무척 재미있어 보여서 장비랑 스태프분들을 좀 빌려왔어요♪',
    );
    await daiya.say_and_wait(
      '경품은 발렌타인 초콜릿이에요! 아주 다양한 종류를 준비했으니, 트레이너 선생님이 원하시는 걸 마음껏 골라 보세요!',
    );
    await daiya.say_and_wait(
      '단골 가게의 초콜릿부터 유명 브랜드의 한정판까지, 구성이 아주 알차답니다.',
    );
    await daiya.say_and_wait(
      '움직이고 싶은 방향을 말씀하시면, 스태프분이 기중기를 조종해 주실 거예요♪',
    );
    era.printButton('「설마 집게 역할을 하는 사람이……」', 1);
    await era.input();
    await daiya.say_and_wait(
      '네, 바로 트레이너 선생님이에요! 다이아가 준비한 특별한 발렌타인이니 마음껏 즐겨주세요!',
    );
    await era.printAndWait(
      `……확실히 호기심 왕성한 사토노 다이아몬드다운 발상이다. ${daiya.sex}의 트레이너로서, ${me.name}은(는) 각오를 다질 수밖에 없었다……!`,
    );
    await daiya.say_and_wait('트레이너 선생님~! 이동하고 싶은 방향을 말씀해 주세요~!');
    era.printButton('「이, 이 근처면 될 것 같아……!」', 1);
    await era.input();
    await daiya.say_and_wait(`알겠습니~~다! 그럼 천천히 내려드릴게요──!`);
    await era.printAndWait(
      `과연 기중기 조작에 능숙한 스태프들이었다. 안정적인 조작 덕분에 ${me.name}은(는) 안심하고 초콜릿 산속으로 내려갈 수 있었다.`,
    );
    await era.printAndWait(
      `오히려 ${me.name}은(는) 재미를 느끼기 시작했다! 손에 잡히는 초콜릿들을 양손 가득 움켜쥐었다.`,
    );
    await daiya.say_and_wait(
      '와아! 트레이너 선생님 대단해요! 완벽한 균형 감각…… 정말 한 솜씨 하시는데요!',
    );
    await daiya.say_and_wait('어머, 하나 더 집으시게요!? 떨어뜨리지 않게 조심하세요……!');
    await daiya.say_and_wait(
      `후후, 정말 열중하고 계시네요. 즐거워하시니 정말 다행이에요♪`,
    );
    era.drawLine();
    await daiya.say_and_wait('트레이너 선생님, 정말 대단했어요! 넋을 잃고 바라봤다니까요!');
    await daiya.say_and_wait('게다가…… 후후후, 무척 즐거워 보이셨고요.');
    era.printButton('「정말 재미있었어!」', 1);
    await era.input();
    await daiya.say_and_wait('헤헤헤, 기뻐요……♪');
    await daiya.say_and_wait(
      '레이스 말고도 이렇게 즐거운 일을…… 트레이너 선생님과 함께 나눌 수 있다면 참 좋겠어요.',
    );
    era.printButton('「그러게 말이야!」', 1);
    await era.input();
    await daiya.say_and_wait('아, 초콜릿! 사양 말고 마음껏 드세요!');
    await daiya.say_and_wait(
      '저도 돌아가서 오늘 일을 떠올리며 초콜릿을 맛볼게요.',
    );
    await era.printAndWait(
      `거대 인형 뽑기로 얻은 수많은 초콜릿. ${me.name}은(는) 앞으로 이 초콜릿을 먹을 때마다 ${daiya.sex}의 미소를 떠올리게 될 것이라 생각했다.`,
    );
    await era.printAndWait(
      `다시 한번, ${me.name}은(는) 재미를 느끼며 손 근처에 있는 초콜릿을 수집했다.`,
    );
    era.printButton('「이건……?」', 1);
    await era.input();
    await daiya.say_and_wait('앗……! 그 초콜릿은……!');
    await era.printAndWait(
      `유독 하나만 포장이 조금 삐뚤빼뚤한 초콜릿이 있었다. ${me.name}은(는) 몸을 흔들어 그 수제 느낌이 물씬 풍기는 초콜릿을 향해 손을 뻗었다.`,
    );
    await daiya.say_and_wait('트, 트레이너 선생님! 무리하게 잡으려 하지 마세요……!');
    await daiya.say_and_wait('아아, 방금 공들여 잡은 초콜릿들을 다 떨어뜨리셨잖아요……');
    await daiya.say_and_wait(`……설마 눈치채신 건가요……?`);
    await era.printAndWait(
      `${me.name}은(는) 거대 인형 뽑기에서 훌륭한 전과를 올렸다. 무엇보다, 포장이 조금 서툰 그 초콜릿을 손에 넣는 데 성공했다!`,
    );
    era.drawLine();
    await daiya.say_and_wait('……그건…… 제가 직접 만든 초콜릿이에요.');
    era.printButton('「그럴 줄 알았어!」', 1);
    await era.input();
    await daiya.say_and_wait('역시 제가 만든 줄 알고 가지러 가신 거였군요……');
    await daiya.say_and_wait('정말이지……');
    era.printButton('「먹어도 될까?」', 1);
    await era.input();
    await daiya.say_and_wait('……네, 맛있게 드셔주세요.');
    await era.printAndWait(
      `${me.name}은(는) 포장을 뜯고, 정렬된 초콜릿 중 하나를 집어 입에 넣었다.`,
    );
    await era.printAndWait(
      '……뭐라고 해야 할까? 무척 묘한 맛이었다. 맛이 없는 건 아니었지만, 말로 설명하기 어려운 오묘함이 있었다.',
    );
    await daiya.say_and_wait('맛이 좀 이상하죠……?');
    era.printButton('「맛있긴 한데, 신기한 맛이네……」', 1);
    await era.input();
    await daiya.say_and_wait(
      '그렇죠. 색다른 맛에 도전해 보려다가 이렇게 묘한 결과가 나와버렸거든요……',
    );
    await daiya.say_and_wait(
      '직접 먹어봤을 때 못 먹을 맛은 아니었지만, 이걸 정말 드려도 될지 고민이 많았어요……',
    );
    await daiya.say_and_wait(
      '그래도 기쁘게 드셔주셔서 정말 감사해요! 그것만으로도 제겐 충분해요……!',
    );
    era.printButton('「이 초콜릿에 어울리는 조합을 같이 찾아볼까?」', 1);
    await era.input();
    await daiya.say_and_wait('어……?');
    await era.printAndWait(
      `${me.name}은(는) 어떤 맛을 하나만 더하면 이 초콜릿이 훨씬 맛있어질 것 같다고 느꼈다. 그래서 ${me.name}은(는) 함께 식재료를 찾아보자고 제안했다.`,
    );
    await daiya.say_and_wait(
      '과연 그렇군요…… 과일이나 다른 간식을 곁들여서 어떤 조합이 제일 좋을지 찾아보자는 말씀이죠?',
    );
    await daiya.say_and_wait('재미있을 것 같아요! 그렇게 해요!');
    await era.printAndWait(
      `${me.get_couple_title()}은 초콜릿을 더 맛있게 만들기 위해 다양한 시도를 시작했다.`,
    );
    await era.printAndWait('결국, 사토노 다이아몬드가 만든 초콜릿과 가장 잘 어울리는 것은 용과였다.');
    await daiya.say_and_wait(
      '후후후, 이건 트레이너 선생님과 제가 함께 완성한 세상에 단 하나뿐인 초콜릿이네요.',
    );
    await daiya.say_and_wait(
      '무척 맛있긴 하지만…… 이 레시피는 절대 아무에게도 가르쳐주지 않을 거예요. 이건 우리 둘만의 비밀이니까요♪',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
    era.set('cflag:67:축제이벤트표시', 0);
  };

  handlers[95 + 14] = async (daiya, me, flags) => {
    await print_event_name('팬 대감사제', daiya);
    era.println();
    const gold_ship = get_chara_talk(7);
    const condor_pasa = get_chara_talk(14);
    const coffee = get_chara_talk(25);
    const festa = get_chara_talk(49);
    const sirius = get_chara_talk(70);
    await era.printAndWait(
      `오늘은 봄철 팬 대감사제 날이다. ${daiya.get_uma_sex_title()}들은 현장을 찾은 수많은 팬과 다양한 이벤트를 즐기고 있다.`,
    );
    await era.printAndWait(
      `사토노 다이아몬드 역시 여성 팬들에게 둘러싸여 즐겁게 대화를 나누고 있었다.`,
    );
    await era.printAndWait('다이아의 팬A 「저, 다이아 양이 달리는 모습을 정말 좋아해요!!」');
    await era.printAndWait(
      '다이아의 팬A 「앞만 보고 달려 나가는 모습이 정말 아름답고 멋있어서……!」',
    );
    await daiya.say_and_wait('와아아, 정말 기뻐요!! 계속 응원해 주셨군요!');
    await era.printAndWait(
      `다이아의 팬A 「네! 다이아 양을 직접 보고 싶어서, 이번에 처음으로 경기장에도 가봤는걸요!」`,
    );
    await era.printAndWait(
      '다이아의 팬B 「저희 둘이 같이 『국화상』을 보러 갔다가 저도 입덕해 버렸어요!! 위닝 라이브 때 모습도 너무 귀여웠고요!」',
    );
    await daiya.say_and_wait(
      '어머, 경기장에 오신 게 처음이셨나요!? 저를 응원하러 와주셔서 정말 감사해요!',
    );
    await era.printAndWait(
      '다이아의 팬A 「방해될까 봐 조심스러웠는데…… 이렇게 직접 얘기할 수 있다니, 너, 너무 감동이에요……!」',
    );
    await daiya.say_and_wait(
      '헤헤헤, 먼저 말을 걸어주셔서 저도 무척 즐거운걸요♪',
    );
    await era.printAndWait(
      '다이아의 팬B 「혹시 다이아 양은 오늘 어떤 이벤트에 참여하시나요?」',
    );
    await daiya.say_and_wait(
      '저는 『무자비한 대형 카드 뒤집기 게임』에 나가요! 운동장에 커다란 카드들을 깔아놓고 뒤집기 시합을 할 예정이랍니다♪',
    );
    await era.printAndWait('다이아의 팬B 「……『무자비』하다는 건……?」');
    await daiya.say_and_wait(
      '달리면서 카드를 뒤집는 속도를 겨루는 시합이거든요. 순서를 기다리지 않고 먼저 쟁탈하는 방식이죠.',
    );
    await daiya.say_and_wait(
      '만약 『도전장 카드』를 뒤집으면 다른 선수와 승부를 겨뤄야 해요. 이긴 사람이 상대의 카드를 뺏어올 수 있답니다♪',
    );
    await era.printAndWait('다이아의 팬B 「그, 그거 꽤 치열하겠는데요……」');
    await era.printAndWait(
      '다이아의 팬A 「하지만 다이아 양이라면 분명 이길 수 있을 거예요! 저희가 응원하러 갈게요!」',
    );
    await daiya.say_and_wait(
      '후후후후후! 두 분이 응원해 주신다면 저도 힘이 불끈 솟을 것 같아요♪',
    );
    await era.printAndWait('다이아의 팬들 「너…… 너무 귀여워～～!」');
    await daiya.say_and_wait('정말이지! 몰래 지켜만 보고 계시다니, 트레이너 선생님도 참 얄미워요!');
    era.printButton('「방해하면 안 될 것 같아서 그랬지」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${daiya.sex}와 팬들이 즐겁게 대화하는 모습에 방해하기 미안했다고 전했다.`,
    );
    await daiya.say_and_wait('저도 모르게 너무 들떠버렸네요…… 부끄러워라……');
    await era.printAndWait(
      `안내 방송 「알립니다. 『무자비한 대형 카드 뒤집기 게임』 참가 선수들은 준비 구역으로 집합해 주시기 바랍니다.」`,
    );
    await daiya.say_and_wait('아, 집합 시간이네요. 그럼 다녀올게요!');
    era.drawLine();
    await era.printAndWait(
      `안내 방송 「──다음은 지략과 체력의 한계에 도전하는 『무자비한 대형 카드 뒤집기 게임』! 참가 선수 6명을 소개합니다!」`,
    );
    await condor_pasa.say_and_wait(
      '직감, 책략, 열정! 승자의 자리는 이 엘 콘도르 파사가 가져가겠습니DA────!!',
    );
    await gold_ship.say_and_wait(
      '꽃게, 대게, 킹크랩!! 좋아, 게 축제 가즈아!!',
    );
    await festa.say_and_wait('허…… 재미있는 녀석들이 모였구만.');
    await sirius.say_and_wait('어이어이…… 꼬맹이들 장난질에는 관심 없는데.');
    await coffee.say_and_wait('……음, 그래…… 똑같은 그림을……');
    await daiya.say_and_wait('? 카페 씨, 누구랑 대화하시는 거예요……?');
    await era.printAndWait(
      `안내 방송 「6명의 선수가 각자 출발선에 섰습니다! 그럼, 『무자비한 대형 카드 뒤집기 게임』 시작합니다!!」`,
    );
    await era.printAndWait('탕!!');
    await era.printAndWait(
      `안내 방송 「자, 이 경기는 트랙 위에 놓인 카드들을 뒤집어 같은 그림을 맞추면 득점하는 방식입니다!」`,
    );
    await condor_pasa.say_and_wait('No──────!! 그림이 다르잖아YO────!!');
    await era.printAndWait(
      `안내 방송 「모든 선수가 동시에 카드를 뒤집기 때문에 일반적인 게임보다 훨씬 고도의 기억력이 요구됩니다!」`,
    );
    await daiya.say_and_wait('……좋아! 한 쌍 맞췄어요♪');
    await era.printAndWait(
      `안내 방송 「사토노 다이아몬드, 착실하게 점수를 쌓아갑니다!」`,
    );
    await era.printAndWait(
      `안내 방송 「……아니, 이건!? 맨하탄 카페 선수가 연전연승! 현재 득점 1위로 치고 나갑니다!」`,
    );
    await coffee.say_and_wait(
      '……같은 그림은…… 저기 오른쪽 구석에…… 그래, 알았어…… 고마워……',
    );
    await era.printAndWait(
      `안내 방송 「경기 시작 후 단 한 번의 실수도 없습니다! 혼잣말로 판단하는 듯한 저 신중함이 무결점의 비결인 걸까요!」`,
    );
    await era.printAndWait(
      `안내 방송 「남은 시간 5분 미만!…… 어라? 나카야마 페스타 선수가 움직입니다! 방금 뒤집은 그 카드를 쓰려는 걸까요!?」`,
    );
    await festa.say_and_wait('미안하게 됐어, 아가씨. 조커를 좀 써야겠거든.');
    await daiya.say_and_wait('!! 도전장……!');
    await era.printAndWait(
      `안내 방송 「아── 나카야마 페스타! 사토노 다이아몬드 선수에게 도전장을 던졌습니다!」`,
    );
    await era.printAndWait(
      `안내 방송 「도전장 카드는 양측의 합의 하에 점수를 걸고 대결을 펼쳐, 승자가 건 점수를 모두 가져가는 규칙입니다!」`,
    );
    await sirius.say_and_wait('잠깐!! 나도 도전장을 쓰지.');
    await era.printAndWait(
      `안내 방송 「시리우스 심볼리 선수까지 난입!! 도전장 대결이 삼파전으로 번집니다!」`,
    );
    await sirius.say_and_wait('그래서? 몇 점이나 걸 생각이지?');
    await daiya.say_and_wait(
      '저는……',);
    era.printButton('적당히 건다', 1);
    era.printButton('올인!', 2);
    const ret = await era.input();
    if (ret === 1) {
    await daiya.say_and_wait(
      '……500점은 어떨까요? 그 정도면 맨하탄 카페 씨의 점수를 따라잡기에 충분하니까요.',
    );
    await sirius.say_and_wait(
      '훗, 꽤 냉정하군. 홧김에 올인이라도 했다면 판이 더 재밌었을 텐데.',
    );
    await festa.say_and_wait('그럼 한 판 승부다. 간다──');
    await era.printAndWait('세 사람 「가위바위보!!」');
    await daiya.say_and_wait('해냈다!! 제가 이겼어요!');
    await sirius.say_and_wait('오? 내 유도에 안 넘어왔군. 좋아, 점수 가져가라!');
    await era.printAndWait(
      `안내 방송 「사토노 다이아몬드, 1000점 획득! 1위인 맨하탄 카페와 동점이 됩니다──!!──하지만!!」`,
    );
    await coffee.say_and_wait('…………이겼어요.');
    await gold_ship.say_and_wait(
      '아아아아아아 제기랄────!! 1위한테서 점수 뺏으려던 계획 실패다!',
    );
    await era.printAndWait(
      `안내 방송 「맨하탄 카페와 골드 쉽의 도전장 대결, 승자는 맨하탄 카페!! 골드 쉽의 모든 점수를 가져갑니다!」`,
    );
    await era.printAndWait(
      `안내 방송 「경기 종료!! 『무자비한 대형 카드 뒤집기 게임』의 우승자는── 맨하탄 카페!」`,
    );
    await era.printAndWait('다이아의 팬B 「다이아 양, 정말 아쉬워요!」');
    await era.printAndWait(
      '다이아의 팬A 「그래도 다이아 양의 다양한 표정을 볼 수 있어서 정말 만족스러웠어요!」',
    );
    await daiya.say_and_wait('후후후, 여러분이 즐거우셨다면 그걸로 됐어요!');
    await era.printAndWait(
      '팬들과 직접 교류한 시간은 사토노 다이아몬드에게도 무척 소중하고 즐거운 추억이 되었다.'); 
    } else {
    await daiya.say_and_wait('모든 점수를 걸겠어요!!');
    await festa.say_and_wait('하하! 전부 거는 거냐, 짜릿하구만! 나도 콜!!');
    await sirius.say_and_wait('나도 상관없어! 해보자고!!');
    await era.printAndWait('세 사람 「가위바위보!!」');
    await daiya.say_and_wait('해냈다!! 제가 이겼어요!');
    await festa.say_and_wait(
      '……심리전에서 나를 이기다니…… 대단한 아가씨네 정말.',
    );
    await festa.say_and_wait('내 점수, 몽땅 가져가라구.');
    await era.printAndWait(
      `안내 방송 「사토노 다이아몬드, 나카야마 페스타와 시리우스 심볼리의 점수를 모두 획득!! 맨하탄 카페를 제치고 1위로 등극합니다──!」`,
    );
    await gold_ship.say_and_wait(
      '아──하하하하하!! 이 순간만을 기다렸다! THE · 어부지리! 사토노에게 도전장을 던진다──!',
    );
    await gold_ship.say_and_wait('가즈아 가즈아 한 판 붙자──!!');
    await gold_ship.say_and_wait('가위바위보!!');
    await daiya.say_and_wait('후후후, 제가 이겼네요♪');
    await era.printAndWait(
      `안내 방송 「이럴 수가── 사토노 다이아몬드 선수가 골드 쉽의 전략을 완전히 간파했습니다!! 마지막 자객까지 격파합니다!」`,
    );
    await era.printAndWait(
      `안내 방송 「경기 종료!! 『무자비한 대형 카드 뒤집기 게임』의 최종 우승자는── 사토노 다이아몬드!」`,
    );
    await era.printAndWait('다이아의 팬B 「다이아 양, 우승 축하해요!」');
    await era.printAndWait('다이아의 팬A 「다이아 양에게 저런 대담한 면이 있을 줄이야……!」');
    await daiya.say_and_wait('헤헤헤♪ 팬 여러분이 응원해 주신 덕분에 용기를 냈어요!');
    await era.printAndWait(
      '다이아의 팬A 「저…… 정말 멋있어요～～!! 앞으로도 계속 응원할게요!」',
    );
    await daiya.say_and_wait(
      '저야말로 계속 지켜봐 주시길 부탁드릴게요! 앞으로도 잘 부탁드려요♪',
    );
    await era.printAndWait(
      '팬들과 직접 마음을 나눈 이 축제는 사토노 다이아몬드에게 최고의 하루가 되었다.',
    ); }
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
    era.set('cflag:67:축제이벤트표시', 0);
  };

  handlers[95 + 29] = async (daiya, me, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:67:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 시작!', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait('매년 찾아오는 정례 행사인 여름 합숙이 올해도 시작되었다!');
    await kita.say_and_wait('다이아짱, 시간 있어?');
    await daiya.say_and_wait('왜 그래?');
    await kita.say_and_wait([
      '그게…… 예전에 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 때 나한테 해줬던 말 있잖아.',
    ]);
    await kita.say_and_wait('모두가 나에게 『기대』하고 있다고……');
    await daiya.say_and_wait('응.');
    await kita.say_and_wait('나 스스로도 생각해 봤어. 사람들이 나한테 거는 『기대』가 대체 뭘까 하고.');
    await kita.say_and_wait('그러다가…… 결심했어!!');
    await kita.say_and_wait(
      '내가 노력하는 모습이 누군가에게 힘이 된다면, 난 끝까지 포기하지 않는 모습을 보여줄 거야!',
    );
    await kita.say_and_wait(
      '내 생각엔, 다들 내가 바닥에서부터 다시 치고 올라가 역전하는 모습을 기대하시는 것 같아!',
    );
    await kita.say_and_wait(
      '의지로 절대 포기하지 않고 끈질기게 매달리는 것, 그게 바로 나다운 거니까!',
    );
    await daiya.say_and_wait('후후후! 역시 우리 키타짱다워!');
    await kita.say_and_wait([
      '그래서 내 목표는 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ', ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ', ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '을 전부 우승하는 거야!',
    ]);
    await kita.say_and_wait('그건 곧, 테이오 씨랑 맥퀸 씨를 반드시 이기겠다는 뜻이기도 해!!');
    await kita.say_and_wait(
      '줄곧 동경해 온 분들이니까 그 강함을 누구보다 잘 알고, 이기는 게 얼마나 어려운지도 잘 알지만……',
    );
    await kita.say_and_wait(
      '그렇기 때문에 더더욱 이기고 싶어!! 동경하는 대상을 뛰어넘고 싶어!',
    );
    await kita.say_and_wait([
      '내가 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 때 실망시켜 드린 만큼, 이번엔 동경하는 대상을 뛰어넘는 모습을 꼭 보여드리고 싶어!',
    ]);
    await daiya.say_and_wait('……나도 같은 생각이야. 나도 동경하는 대상을 뛰어넘고 싶어.');
    await daiya.say_and_wait('우승 자리를 키타짱에게 양보하진 않을 거야!');
    await kita.say_and_wait('응!! 우리 같이 힘내자! 그럼 나중에 봐!');
    await daiya.say_and_wait('헤헤헤, 정말 다행이야……!');
    await daiya.say_and_wait('아, 맞다. 트레이너 선생님, 부탁드리고 싶은 게 있는데요……');
    await daiya.say_and_wait(
      '앞으로의 훈련 방침 말인데, 어떤 상황에서도 대응할 수 있도록 파워를 강화하고 싶어요.',
    );
    await daiya.say_and_wait('얼마 전에 연구를 위해 맥퀸 씨의 레이스 영상을 좀 봤거든요……');
    await daiya.say_and_wait(
      '거친 노면에서도 끄떡없는 강력한 다리 힘과 힘 있는 발걸음이 정말 인상 깊었어요.',
    );
    await daiya.say_and_wait(
      '저에게도 그런 각력이 있다면…… 무리 속에서도 더 쉽게 치고 나갈 수 있고, 앞으로의 레이스에서도 큰 무기가 될 것 같아요.',
    );
    await daiya.say_and_wait(
      '……아니, 지금 부족한 부분을 보완하는 건 맥퀸 씨 같은 분들을 이기기 위해 반드시 해야만 하는 일이에요.',
    );
    era.printButton('「그렇구나」', 1);
    await era.input();
    await daiya.say_and_wait(
      '맥퀸 씨가 주신 이 소중한 기회를 완벽한 상태로 맞이하고 싶어요. 꼭 이기고 싶으니까요……!',
    );
    await daiya.say_and_wait(
      `그리고 저도 『명문 ${daiya.get_uma_sex_title()}』로서, 언젠가는 해외 진출도 고려해야 하거든요.`,
    );
    await era.printAndWait(
      `이 말에 ${me.name}은(는) 신년 파티에서 누군가 해외 원정 이야기를 꺼냈던 것을 떠올렸다.`,
    );
    await era.printAndWait(
      '더 험난한 해외 경기장에서 좋은 성적을 내려면 확실히 강력한 파워가 필요하다.',
    );
    era.printButton('「갑자기 해외 레이스를 목표로 잡은 이유가 있어?」', 1);
    await era.input();
    await daiya.say_and_wait(
      '완전히 결정한 건 아니지만…… 예전에 제가 레이스를 통해 무엇을 전해줄 수 있을지 상담한 적 있었죠?',
    );
    await daiya.say_and_wait(
      '그때 트레이너 선생님이 주신 답이 『가능성』이었잖아요. 그게 계기가 되어 해외 원정을 생각하게 됐어요.',
    );
    await daiya.say_and_wait(
      `일본 ${daiya.get_uma_sex_title()}계가 아직 정복하지 못한 프랑스의 전통 있는 커다란 레이스──`,
    );
    await daiya.say_and_wait(
      '사토노 가문의 징크스를 깬 저라면, 사람들에게 새로운 역사를 만드는 가능성을 보여줄 수 있지 않을까 싶어서요.',
    );
    await daiya.say_and_wait(
      '그렇다면 지금부터 해외 원정까지 염두에 두고 목표를 잡아야 한다고 생각했어요.',
    );
    era.printButton('「알겠어」', 1);
    await era.input();
    await era.printAndWait(
      `파워 단련은 그녀의 말대로 다양한 상황에 대처하는 능력을 키워줄 것이다. ${me.name}이(가) 거절할 이유는 전혀 없었다.`,
    );
    await daiya.say_and_wait('갑자기 무리한 부탁을 드려서 죄송해요. 잘 부탁드릴게요.');
    await daiya.say_and_wait('파워가 넘치는 새로운 주법…… 반드시 익히고 말겠어요!');
    await daiya.say_and_wait('그러지 않으면 맥퀸 씨를 뵐 낯이 없으니까요!');
    await era.printAndWait(
      '동경에 도전하기로 결심하고 장래의 방향성을 확립한 사토노 다이아몬드는 의욕으로 가득 차 있었다.',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[95 + 33] = async (daiya, me, flags) => {
    await print_event_name('머나먼 앞을 향해, 계속 쫓으며', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait('…………후우!');
    await era.printAndWait(
      '잔디 훈련 코스로 돌아왔음에도 사토노 다이아몬드의 주행 상태는 여전히 위태로웠다.',
    );
    await era.printAndWait(
      '단순히 이상한 정도를 넘어 폼이 완전히 무너진 수준이었다. 기록 또한 형편없이 떨어졌다.',
    );
    await daiya.say_and_wait('………………트레이너 선생님.');
    await daiya.say_and_wait([
      '제가 과연 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 전까지 컨디션을 회복할 수 있을까요……?',
    ]);
    era.printButton('「지금부터 조절하면 맞출 수 있을 거야」', 1);
    await era.input();
    await era.printAndWait([
      '전초전인 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      '은 100%가 아니어도 괜찮지만, ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '까지는 정말 시간이 얼마 남지 않았다.',
    ]);
    await daiya.say_and_wait('…………');
    await daiya.say_and_wait('……주법부터 다시 바로잡을게요.');
    await daiya.say_and_wait('이런 상태로는 맥퀸 씨와의 승부에 나설 수 없으니까요……!');
    era.printButton(
      `「그래, 텐노상 전까지는 꼭 되찾자!」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `그녀에게도 무척 고통스러운 결정일 것이다. 그 마음에 보답하기 위해서라도, ${me.name}은(는) 반드시 ${daiya.sex}를 만전의 상태로 「텐노상(가을)」에 내보내겠다고 다짐했다.`,
    );
    await daiya.say_and_wait('후우, 후우………… 어째서지……?');
    await daiya.say_and_wait('전에는 피치가 훨씬 빨랐는데…… 그래서……');
    await daiya.say_and_wait('으윽……!');
    await era.printAndWait(`${daiya.sex}는 좀처럼 예전의 주법을 찾지 못했다.`);
    await era.printAndWait(
      `${daiya.sex}는 조급한 마음에 억지로 원래 폼을 되찾으려 했고, 그럴수록 몸의 균형은 더 어지러워졌다. 결국 초조함만 더해가는 악순환에 빠지고 말았다.`,
    );
    await era.printAndWait(
      '어떻게 이 악순환을 끊어낼 수 있을까? ──만약 사토노 다이아몬드가 원래의 주법을 잊어버린 것이라면, 차라리……',
    );
    era.drawLine();
    await kita.say_and_wait('실례할게요. 트레이너 선생님, 저한테 상의하고 싶은 게 뭔가요?');
    era.printButton('「실은 다이아의 달리기에 대해서인데……」', 1);
    await era.input();
    await kita.say_and_wait(
      '아── 대충 무슨 말인지 알 것 같아요. 요즘 다이아짱 주행이 좀 이상하긴 했죠.',
    );
    await era.printAndWait(
      `${me.name}은(는) ${daiya.sex}에게 설명했다. 현재 사토노 다이아몬드가 예전의 달리기를 되찾으려 노력 중이지만, 심한 슬럼프에 빠져 진전이 없다는 사실을.`,
    );
    await kita.say_and_wait(
      '흐음…… 그렇다면 저랑 한 번 같이 달려보는 건 어떨까요?',
    );
    await kita.say_and_wait(
      '해결 방법까지는 모르겠지만, 직접 같이 뛰다 보면 뭔가 실마리가 보일지도 모르잖아요!',
    );
    era.drawLine();
    await daiya.say_and_wait('나랑 키타짱이 같이 달린다고?');
    await kita.say_and_wait([
      '응! ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 때랑 똑같은 2200m로 말이야. 그때 감각을 다시 되새겨보고 싶거든.',
    ]);
    await daiya.say_and_wait('……트레이너 선생님.');
    era.printButton('「키타산의 제안을 받아들이자!」', 1);
    await era.input();
    await daiya.say_and_wait([
      '……그러게요. 거리도 마침 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '과 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      '의 딱 중간이기도 하니까요. 저에게도 좋은 훈련이 될 것 같아요.',
    ]);
    await kita.say_and_wait('고마워, 다이아짱!!');
    await daiya.say_and_wait('정말이지…… 고맙다는 말은 내가 해야 하는데.');
    await era.printAndWait('그렇게 키타산 블랙과의 2200m 병주 트레이닝이 시작되었다.');
    await kita.say_and_wait('이랴아아아아아아!');
    await daiya.say_and_wait('여기서 거리가 벌어지면 안 돼, 페이스를 조금 더 올려서……', true);
    await daiya.say_and_wait('하아아…… 윽! 으윽……!');
    await daiya.say_and_wait(
      '……몸이 안 나가! 발걸음이 너무 무거운 건가?…… 안 돼, 거리가 점점 더 벌어지고 있어……!',
      true,
    );
    await daiya.say_and_wait('……생각한 대로 달릴 수가 없어……', true);
    await daiya.say_and_wait('……후우, 후우………………');
    await kita.say_and_wait('음── 다이아짱 상태가 정말 안 좋아 보이네.');
    await kita.say_and_wait('너무 무리하지 말자, 오늘은 여기까지 해!');
    await daiya.say_and_wait('안 돼, 아직 더 할 수……');
    await kita.say_and_wait('하지만 다이아짱, 지금 달리기에 집중을 전혀 못 하고 있잖아.');
    await kita.say_and_wait(
      '집중력이 떨어진 상태로 달리면 다칠 수도 있어. 오늘은 일단 쉬자.',
    );
    era.printButton('「그래, 일단 멈추자. 푹 쉬렴」', 1);
    await era.input();
    await daiya.say_and_wait('네…… 알겠어요. 수고하셨습니다.');
    await era.printAndWait(
      `사토노 다이아몬드는 ${me.get_couple_title()}이 혹시 모를 부상을 걱정하고 있다는 것을 깨닫고 얌전하게 수긍했다.`,
    );
    await kita.say_and_wait('음, 마침 시간도 좀 남았는데 같이 구경이나 좀 하다가 돌아가자!');
    await daiya.say_and_wait('키타짱…… 미안하지만 난──');
    await kita.say_and_wait('가자니까!!');
    await daiya.say_and_wait('앗!…… 키타짱, 나……!');
    await kita.say_and_wait('배고프다! 일단 상가 쪽으로 가자!');
    era.drawLine();
    await kita.say_and_wait('음～～～! 진짜 맛있다!');
    await kita.say_and_wait('다이아짱이 고른 건 무슨 맛이야?');
    await daiya.say_and_wait('매운 치즈 핫도그랑 민트 초코를 반반씩 섞은 거야.');
    await kita.say_and_wait('또, 또 그런 이상한 조합을……');
    await daiya.say_and_wait(
      '이런 특이한 조합이 더 재미있을 것 같아서 골라봤어. 매콤하면서도 시원한 자극적인 맛이야♪',
    );
    await kita.say_and_wait('너 정말 도전 정신 하나는 알아줘야 한다니까.');
    await kita.say_and_wait(
      '목마르다, 음료수 사자! 사고 나서 경치 좋은 곳에 가서 마시자!',
    );
    await daiya.say_and_wait('키타짱! 손…… 갑자기 잡아끌면 붕어빵 떨어뜨린단 말이야!');
    await kita.say_and_wait('미안 미안! 그래도 안 떨어뜨렸잖아!');
    await daiya.say_and_wait('……어릴 때도 이랬지. 키타짱 손에 이끌려서……', true);
    await daiya.print_and_wait('【어린 다이아 「키타짱…… 얼마나 더 가야 해……?」】');
    await kita.print_and_wait('【어린 키타산 「거의 다 왔어. 봐봐……」】');
    await daiya.print_and_wait('【어린 다이아 「와아～! 높다……!」】');
    await kita.print_and_wait(
      '【어린 키타산 「여기가 내 비밀기지야! 예전부터 다이아짱을 꼭 데려오고 싶었어!」】',
    );
    await daiya.say_and_wait('정말 여기저기 많이 데리고 다녀줬지……', true);
    await kita.say_and_wait('후우, 후우…… 단숨에 올라오려니까 진짜 힘들다……!');
    await daiya.say_and_wait('응…… 후우, 후우……');
    await daiya.say_and_wait('예전에도 여기 왔었어…… 그때도 키타짱 손에 이끌려 왔었지.');
    await daiya.say_and_wait(
      '여기뿐만이 아냐. 키타짱은 날 여기저기 많이 데리고 다녀줬어. 바깥세상을 가르쳐준 건 언제나 키타짱이었지.',
    );
    await daiya.say_and_wait('……난 항상 키타짱을 언니처럼 생각했어.');
    await kita.say_and_wait(
      '아하하, 나도 다이아짱이랑 같이 있을 때는 항상 멋진 언니처럼 보이고 싶어서 노력했다구!',
    );
    await kita.say_and_wait('내가 다이아짱보다 앞서서 이곳저곳 데려다줘야 하니까……');
    await kita.say_and_wait('──앗, 다이아짱! 우리 달리기 시합할래? 누가 먼저 강가까지 가나 내기하자!');
    await daiya.say_and_wait('에? 갑자기 달리기 시합? 왜 그렇게 뜬금없어?');
    await kita.say_and_wait('한 번 뛰는 건 괜찮잖아. 자! 그럼, 제자리에…… 땅!!');
    await daiya.say_and_wait('잠깐…… 치사해, 키타짱!!');
    await kita.say_and_wait('헤헤헤, 내가 이겼네! 그럼 다음은…… 공원까지 누가 먼저 가나 시합이다!');
    await daiya.say_and_wait('뭐!? 정말이지……!');
    await kita.say_and_wait('빨리 안 오면 두고 간다!');
    await kita.print_and_wait(
      '【어린 키타산 「빨리 빨리, 다이아짱! 더 빨리──! 안 그러면 두고 갈 거야!」】',
    );
    await daiya.print_and_wait('【어린 다이아 「기다려 줘──! 키타짱!!」】');
    await daiya.print_and_wait(
      '【어린 다이아 「후우, 후우…… 헤헤, 이제 조금만 더……!」】',
    );
    await daiya.say_and_wait('후우…… 절대 뒤처지지 않을 거야!');
    await kita.say_and_wait('그럼 마지막은 기숙사까지! 기숙사가 결승점이야!');
    await daiya.say_and_wait('……후후, 이번엔 꼭 따라잡을 테니까.');
    await daiya.say_and_wait('……기억나. 예전에도 이렇게 그 뒷모습만 쫓아 달렸었지……', true);
    await daiya.say_and_wait('그저 키타짱을 따라잡고 싶다는 마음 하나로.', true);
    await daiya.say_and_wait('……좋아──!');
    await daiya.say_and_wait('……어라? 나…… 평범하게 달리고 있어……', true);
    await daiya.say_and_wait('아무런 잡념 없이…… 그저 자연스럽게 달리고 있어……!', true);
    await daiya.say_and_wait(
      '……그랬구나. 내가 키타짱을 쫓아 달릴 때는 언제나 달리기에만 온전히 집중하고 있었어……',
      true,
    );
    await daiya.say_and_wait(
      '그저 그 뒷모습을 따라잡았을 때, 그리고 추월했을 때 키타짱이 어떤 표정을 지을지 상상하면서.',
      true,
    );
    await daiya.say_and_wait('그게 너무 즐거워서…… 달리는 게 마냥 즐거웠던 거야!!', true);
    await kita.say_and_wait('골인────!');
    await daiya.say_and_wait('후우, 후우, 후우…………');
    await daiya.say_and_wait('…………키타짱.');
    await kita.say_and_wait('왜 그래? 다이아짱.');
    await daiya.say_and_wait('헤헤헤, 나 정말 즐겁게 달렸어!');
    await kita.say_and_wait('응!! 나도!');
    await daiya.say_and_wait('다음번엔 반드시 추월해 버릴 테니까!');
    await kita.say_and_wait('…………! 헤헤, 어디 한 번 도전해 보시지!!');
    await daiya.say_and_wait('내 마음이 이끄는 대로 달리는 거야, 예전처럼……', true);
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

handlers[95 + 48] = async (daiya, me, flags) => {
    await print_event_name('크리스마스', daiya);
    const kita = get_chara_talk(68);
    const nice_nature = get_chara_talk(60);
    const tannhauser = get_chara_talk(62);
    const dictus = get_chara_talk(63);
    const palmer = get_chara_talk(64);
    const helios = get_chara_talk(65);
    const turbo = get_chara_talk(66);

    await palmer.say_and_wait('안녕──! 실례할게──! 트레이너, 크리스마스 파티 시작한다구!');
    era.printButton('「……뭐?」', 1);
    await era.input();
    await era.printAndWait(
      '갑자기 나타난 메지로 파머가 그렇게 말하더니 제멋대로 방 안으로 들어왔다. 이어서 나이스 네이처와 다른 우마무스메들도 뒤따라 들어왔다.',
    );
    await daiya.say_and_wait(
      '예고도 없이 찾아와서 정말 죄송해요. 파머 씨 일행과 함께 크리스마스 파티를 열기로 했거든요.',
    );
    await daiya.say_and_wait('트레이너 선생님도 함께하시지 않을래요?');
    await palmer.say_and_wait('이왕이면 여기를 파티 장소로 빌려주면 더 좋고!');
    await nice_nature.say_and_wait('어라라, 트레이너 쌤이 멍해지셨네.');
    await daiya.say_and_wait('저기, 사실은 말이죠……');
    await tannhauser.say_and_wait('에엣!? 다이아 양네 집은 크리스마스 파티를 안 한다고!?');
    await daiya.say_and_wait(
      '네. 크리스마스 때는 아버지와 어머니께서 업무를 보시거나 자선 행사에 참여하시거든요.',
    );
    await daiya.say_and_wait(
      '가끔 아버지를 따라 협력사에서 여는 파티에 가거나 사토노 그룹 주최 파티에 참석하긴 하지만……',
    );
    await daiya.say_and_wait('가족끼리 오붓하게 파티를 해본 적은 없어요.');
    await helios.say_and_wait('진심? 선물도 못 받으면 너무 에바인데!');
    await daiya.say_and_wait(
      '아, 선물은 받아요! 산타 할아버지가 밤에 제 양말 속에 선물을 넣어주시거든요!',
    );
    await daiya.say_and_wait(
      '하지만 영화에 나오는 것 같은 홈 파티는 경험해 본 적이 없어서…… 사실 조금 동경하고 있었어요.',
    );
    await palmer.say_and_wait('그럼 우리가 열어주면 되겠네!');
    await daiya.say_and_wait('어머!?');
    await dictus.say_and_wait(
      '그래요. 사토노의 부모님을 모셔올 순 없지만, 가족 같은 파티라면 우리도 해줄 수 있습니다.',
    );
    await nice_nature.say_and_wait(
      '소박하고 따뜻한 홈 파티라면 우리가 전문이지── 그러니까 한판 벌여보자고.',
    );
    await turbo.say_and_wait('오예──! 파티다 파티!');
    await tannhauser.say_and_wait(
      '아, 다이아 양의 부모님 대신에 다이아 양의 트레이너 선생님을 초대하는 건 어때?',
    );
    await helios.say_and_wait(
      `뭉뭉이 완전 천재 아님!? 그럼 바로 부탁하자!`,
    );
    await dictus.say_and_wait('──그렇게 된 겁니다. 장소 제공 겸 참가, 해주실 거죠?');
    era.printButton('「물론이지!」', 1);
    await era.input();
    await daiya.say_and_wait('와아, 정말인가요!? 감사합니다!');
    await dictus.say_and_wait('그럼 얼른 장식부터 시작하죠.');
    await nice_nature.say_and_wait('휴── 대충 이런 느낌일까.');
    await daiya.say_and_wait(
      '멋져라…… 정말 멋져요! 전부 수제 장식인데도 이렇게나 예쁘게 꾸밀 수 있다니……!',
    );
    await tannhauser.say_and_wait('다녀왔습니다～! 요리랑 간식 사 왔어요──!');
    await helios.say_and_wait('치킨에 피자☆ 개꿀맛!');
    await kita.say_and_wait('안녕──!');
    await daiya.say_and_wait('어? 키타짱!?');
    await kita.say_and_wait('헤헤헤, 아까 교문에서 다들 만났는데 같이 가자고 해서 왔지!');
    await daiya.say_and_wait('완전 환영이야! 어서 와, 키타짱!');
    await kita.say_and_wait('그나저나 이 멤버, 신입생 환영회 때랑 똑같네!');
    await daiya.say_and_wait('응, 그때 생각이 나서 정말 그리워!');
    await tannhauser.say_and_wait('와～ 그때 신입생들이 벌써 이렇게 훌륭하게 자라다니……');
    await palmer.say_and_wait('자자, 추억담은 나중에 하고! 식기 전에 먹자구!');
    await daiya.say_and_wait(
      '피자, 샐러드, 치킨…… 마른 오징어, 가오리 지느러미, 다시마……?',
    );
    await daiya.say_and_wait('과연, 이게 바로 일반적인 홈 파티 메뉴군요.');
    await kita.say_and_wait(
      '아니…… 그게 맞기도 한데, 우리 집 크리스마스 때도 술안주가 올라오니까 부정할 수가 없네……!',
    );
    await tannhauser.say_and_wait(
      '아하하～ 상가 분들이 이것저것 많이 챙겨주셨거든요～ 그중에 옛날 과자랑 안주가 섞여버렸네요. 정말 감사한 일이죠～',
    );
    await daiya.say_and_wait(
      '패 다 냈다! 이제 키타짱이랑 터보 씨 중에 누가 꼴찌인지 가리기만 하면 돼!',
    );
    await kita.say_and_wait('음── 그럼 난 제일 오른쪽 거……');
    await kita.say_and_wait('아니면 제일 왼쪽 거……');
    await kita.say_and_wait('음, 역시 제일 왼쪽 거로 할래!');
    await turbo.say_and_wait('안 돼 안 돼 안 돼 안 돼──!! 왼쪽 거는 가져가면 안 된다구!');
    await nice_nature.say_and_wait(
      '……터보, 그냥 포기해. 얼굴에 너무 다 쓰여 있거든……',
    );
    await era.printAndWait(
      `그렇게 ${me.get_couple_title()}은 함께 즐거운 시간을 보냈고…… 크리스마스 파티는 막을 내렸다.`,
    );
    era.drawLine();
    await era.printAndWait(
      '뒷정리를 돕기 위해 남은 사토노 다이아몬드와 키타산 블랙을 기숙사까지 배웅해 주기로 했다.',
    );
    await daiya.say_and_wait('헤헤헤, 오늘 정말 즐거웠어요!');
    await daiya.say_and_wait('원래 저에게 크리스마스는 일하는 날이라는 이미지였는데……');
    await kita.say_and_wait('맞아, 매년 크리스마스 때마다 다이아짱은 일이 있다면서 어디론가 갔었지.');
    await daiya.say_and_wait('응. 다음에는 남동생도 같이 불렀으면 좋겠어.');
    await kita.say_and_wait(
      '아, 맞다! 걔도 분명 좋아할 거야! 내년에도 같이 크리스마스 파티 하자!',
    );
    await daiya.say_and_wait('내년에도…… 트레이너 선생님도 함께해주실 건가요?');
    era.printButton('「좋아!」', 1);
    await era.input();
    await daiya.say_and_wait('정말요? 그럼 약속한 거예요?');
    await daiya.say_and_wait(
      '제가 제일 먼저 예약한 거니까, 다른 분이랑 약속 잡으시면 안 돼요.',
    );
    await era.printAndWait(
      '아무 계획도 없던 내년의 일정에, 사토노 다이아몬드와 함께 크리스마스를 보낸다는 약속이 추가되었다.',
    );
    await dictus.say_and_wait('그럼 슬슬 케이크를 먹을 시간인데──');
    await tannhauser.say_and_wait('앗!? 케이크…… 사는 거 깜빡했다!!');
    await era.printAndWait(
      `${me.name}과(와) 사토노 다이아몬드는 함께 케이크를 사러 밖으로 나갔다. 하지만 근처 가게는 이미 품절이라 조금 먼 곳까지 가기로 했다.`,
    );
    await daiya.say_and_wait('조명이 참 예쁘네요.');
    await daiya.say_and_wait(
      '후후, 이렇게 크리스마스 거리를 걷는 것도 제가 늘 동경하던 영화 속 한 장면 같아요.',
    );
    await daiya.say_and_wait(
      '아, 그렇다고 아버님 일행이 자선 활동을 하시는 게 불만이라는 건 아니에요.',
    );
    await daiya.say_and_wait(
      '함께 활동하면서 배운 점도 많고, 저도 자랑스럽게 돕고 있으니까요.',
    );
    await daiya.say_and_wait('다만, 이런 느낌도 참 좋구나 싶어서요……');
    era.printButton('「천천히 걷자」', 1);
    await era.input();
    await daiya.say_and_wait('하지만…… 다들 케이크를 기다리고 있을 텐데……');
    era.printButton('「아직 안주가 많이 남았으니까 괜찮아」', 1);
    await era.input();
    await daiya.say_and_wait('후후후, 그렇네요. 간식이 다 못 먹을 정도로 잔뜩 있었죠!');
    await daiya.say_and_wait('……그럼, 조금만 천천히 걸을까요.');
    await daiya.say_and_wait('크리스마스의 거리는 마치 외국에 온 것 같은 기분이 들게 하네요.');
    await daiya.say_and_wait('그래서 그런지…… 예전에 해외 여행을 갔을 때 걸었던 거리가 떠올라요.');
    await daiya.say_and_wait('……저…… 트레이너 선생님과 함께 이국적인 거리를 걷고 싶어요.');
    await daiya.say_and_wait('트레이너 선생님은 어떠신가요?');
    await daiya.say_and_wait(
      '처음 제 전속 트레이너 계약을 맺어주셨을 때는, 사실 조금 억지로 부탁드린 느낌이었잖아요.',
    );
    await daiya.say_and_wait('그래서 이번엔 트레이너 선생님의 진심을 확인하고 싶어요.');
    await daiya.say_and_wait('저와 함께 해외로 가주시겠어요?');
    era.printButton('「네가 원한다면 어디든 함께 갈게」', 1);
    await era.input();
    await daiya.say_and_wait('……헤헤헤.');
    await daiya.say_and_wait('다행이다! 트레이너 선생님, 앞으로도 잘 부탁드릴게요!');
    await daiya.say_and_wait('나중에는 꼭 외국 거리를 함께 산책하는 거예요!');
    await era.printAndWait(
      `이국적인 분위기의 크리스마스 거리를 바라보며, ${me.name}과(와) 사토노 다이아몬드는 머지않은 미래의 약속을 나누었다.`,
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
    era.set('cflag:67:축제이벤트표시', 0);
  };
};