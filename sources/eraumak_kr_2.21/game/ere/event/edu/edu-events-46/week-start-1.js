const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (falcon, me, callname) => {
    await print_event_name('새해의 기분!', falcon);
    await era.printAndWait(`${me.name}은(는) ${falcon.name}과 함께 새로운 한 해를 맞이했다.`);
    await era.printAndWait(`트레이닝실\n`);
    await falcon.say_and_wait(`해피 뉴 이어!`);
    await era.printAndWait(
      `트레이닝실 문을 열자, 코타츠 옆에 앉아 있는 ${falcon.name}이 보였다.`,
    );
    era.printButton(`팔코, 새해 복 많이 받아!`, 1);
    await era.input();
    await era.printAndWait(`인사를 건네며 당신도 코타츠 속으로 파고들었다.`);
    await era.printAndWait(
      `따뜻한 코타츠가 바깥의 추위를 쫓아주었다. 새해에는 어떤 변화가 생길지 상상하던 중, ${falcon.name}의 눈과 마주쳤고, ${falcon.name}은 당신을 향해 미소 지었다.`,
    );
    await me.say_and_wait(`연말연시 신년 라이브는 어땠어?`);
    await era.printAndWait(
      `차갑게 식었던 손의 감각이 서서히 돌아왔다. 당신은 곁에 있던 귤을 하나 집어 까먹기 시작했다.`,
    );
    await falcon.say_and_wait(
      `어제 공연은 생각했던 것보다 훨씬 멋졌어! 팔코도 노래랑 춤에 대해서 공부가 많이 됐어!`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}는 말을 하면서, 너무 흥분한 나머지 삐져나온 꼬리를 다시 코타츠 속으로 집어넣었다.`,
    );
    await falcon.say_and_wait(`아차, 깜빡할 뻔했다!`);
    await era.printAndWait(`${falcon.name}이 교복 주머니 속에서 부스럭거리며 무언가를 찾기 시작했다.`);
    await falcon.say_and_wait(
      `선물을 고를 때 뭘 줄지 엄청 고민했지만, 팔코는 역시 소중한 사람에게는 직접 만든 선물을 주는 게 정답이라고 생각했어.`,
    );
    await falcon.say_and_wait(
      `${callname}, 지난 한 해 동안 수고 많았어. 새로운 한 해도 잘 부탁해!`,
    );
    await era.printAndWait(`팔코는 미소를 지으며 ${me.name}에게 카드를 건넸다.`);
    await me.say_and_wait(`그럼 감사히 받을게.`);
    await era.printAndWait(
      `코타츠의 온기가 남아있는 카드를 건네받았다. ${falcon.name}이 쥐고 있던 모서리 부분에는 기분 좋은 부드러움이 느껴졌다.`,
    );
    await me.say_and_wait(`올해 계획은 뭐야?`);
    await falcon.say_and_wait(
      `올해도 팔코는 팬 여러분 모두에게 귀여운 모습을 잔뜩 보여줄 거야!`,
    );
    await era.printAndWait(
      `말이 끝나기도 전에 ${falcon.name}은 아주 빠른 속도로 질문에 대답했다.`,
    );
    await me.say_and_wait(`평소에 고생하는 팔코니까, 지금은 좀 쉬어도 괜찮아.`);
    await era.printAndWait(
      `당신은 ${falcon.name}의 동글동글한 머리를 쓰다듬었고, ${falcon.sex}는 거부하지 않은 채 기분 좋은 표정을 지었다.`,
    );
    await falcon.say_and_wait(`에헤? 음― 팔코는 이제 어린애가 아닌걸.`);
    await era.printAndWait(
      `입으로는 항의하고 있었지만, 코타츠 밖으로 다시 탈출한 꼬리는 흥분한 듯 위아래로 살랑거렸다.`,
    );
    await me.say_and_wait(`팔코가 조금 기분 전환이 필요한 것 같은데…\n`);
    era.printButton(`아이돌의 길은 꾸준한 연습에 있지`, 1);
    era.printButton(`어디 놀러라도 갈까?`, 2);
    era.printButton(`같이 영화 보러 갈래?`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `꾸준한 훈련은 탁월함으로 나아가는 열쇠이며, ${falcon.name}의 아이돌 인생에 있어 한순간도 소홀히 할 수 없었다.`,
      );
      await me.say_and_wait(`오늘은 스피드 연습을 좀 해보자.`);
      await era.printAndWait(`코타츠의 따스함이 아쉬웠지만, 다리를 밖으로 뺐다.`);
      await falcon.say_and_wait(`${callname}?`);
      await era.printAndWait(`어느새 ${falcon.name}은 운동복으로 갈아입은 상태였다.`);
      await era.printAndWait(
        `생각보다 훨씬 활기찬 ${falcon.name}의 모습에 ${me.name}은(는) 안심했다.`,
      );
      await era.printAndWait(`그 후, ${me.name}과(와) ${falcon.name}은 함께 훈련장으로 향했다.`);
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`응! 어디로 가는 게 좋을까?`);
      await era.printAndWait(
        `${falcon.name}은 주머니에서 스마트폰을 꺼내 혼잣말을 중얼거리며 빠르게 화면을 넘겼다.`,
      );
      await era.printAndWait(
        `언제나 빛나는 팔코와 비교했을 때, 이렇게 집중해서 고민하는 팔코의 모습은 매우 희귀했다.`,
      );
      await falcon.say_and_wait(`점심은 여기로 가자!`);
      await era.printAndWait(
        `${falcon.name}이 스마트폰 화면을 돌려 ${me.name}에게 보여주었다. 화면에는 근처에서 화제가 되고 있는 인기 밀크티 가게가 띄워져 있었다.`,
      );
      await me.say_and_wait(`자기도 모르게 미소 짓는 팔코는 평소보다 더 귀여운데?`);
      await era.printAndWait(`어느덧 미소를 띠고 있는 ${falcon.name}.`);
      await falcon.say_and_wait(`아…`);
      await era.printAndWait(`${falcon.name}의 얼굴이 갑자기 붉어졌다.`);
      await falcon.say_and_wait(`심장이 너무 빨리 뛰어……`, true);
      await falcon.say_and_wait(`에에? 팔코, 아이돌 실격인 표정 짓지는 않았지?`);
      await era.printAndWait(
        `허둥지둥 표정 관리를 하며 팔코는 서둘러 꼬리를 코타츠 속으로 밀어 넣었다.`,
      );
      await falcon.say_and_wait(`${callname}!`);
      await era.printAndWait(
        `${me.name}의 표정을 살핀 듯, ${falcon.name}은 다시 평소의 모습으로 돌아왔다.`,
      );
      await era.printAndWait(`잠시 후 두 사람은 카페에서 즐거운 하루를 보냈다.`);
    } else {
      await falcon.say_and_wait(
        `${falcon.get_uma_sex_title()}와 트레이너가 같이 보기 좋은 영화는――`,
      );
      await falcon.say_and_wait(`팔코도 딱히 좋은 아이디어가 안 떠오르네?`);
      await era.printAndWait(`${me.name} 역시 딱히 좋은 생각이 나지 않았다.`);
    }
    era.set('cflag:46:축제이벤트표시', 0);
  };

  handlers[47 + 6] = async (falcon, me, callname) => {
    era.set('cflag:46:축제이벤트표시', 0);
    await print_event_name('연심! 팔코의 선물!', falcon);
    await falcon.say_and_wait(`――안녕⭐!`);
    await falcon.say_and_wait(`그러고 보니 오늘은 발렌타인데이네― 다들 초콜릿 받았어?`);
    await falcon.say_and_wait(
      `못 받았어도 괜찮아! 왜냐면 지금부터 등장할 건 팔코가 직접 준비한 초콜릿이니까―.`,
    );
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await falcon.say_and_wait(`앞으로도 팔코를 계속 응원해줘야 해♪`);
    await say_by_passer_by(`팬A`, `이거 팔코의 수제 초콜릿인가요?`);
    await falcon.say_and_wait(
      `아니지~ 팔코는 모든 팬분들을 평등하게 사랑하니까, 초콜릿 가게에서 대량으로 구매한 초콜릿이야.`,
    );
    await falcon.say_and_wait(`게다가 상자 안에는 팔코가 정성껏 준비한 엽서랑 사인도 있어⭐!`);
    await say_by_passer_by(`팬B`, `팔코의 발렌타인 기념행사에 참가할 수 있어서 다행이야!`);
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await era.printAndWait(`현장의 분위기가 더욱 뜨거워졌다.`);
    await falcon.say_and_wait(`앞으로도 팔코를 많이 응원해줘♪`);
    await say_by_passer_by(`팬들`, `오오오오!!!`);
    await falcon.say_and_wait(
      `바로 이거야♪ 부끄러움과 사랑이 담긴 팔코의 퍼포먼스를 감상해줘!`,
    );
    await era.printAndWait(
      `팬들의 환호 속에서 ${falcon.name}의 발렌타인 기념 라이브가 막을 올렸다.`,
    );
    await falcon.say_and_wait(`수고했어! 앞으로도 팔코를 계속 응원해줄 거지?`);
    await era.printAndWait(
      `마지막 팬까지 배웅하고 나서야, 근처에서 기다리던 ${me.name}이 다가갔다.`,
    );
    await falcon.say_and_wait(
      `팔코의 노래가 ${callname}의 마음속까지 전달됐을까?`,
    );
    era.printButton(`충분히 느꼈어.`, 1);
    await era.input();
    await falcon.say_and_wait(
      `……그러고 보니, ${callname}에게 줄 게 또 있어.`,
    );
    await era.printAndWait(
      `${falcon.name}은 눈에 띄지 않는 구석에 놓여 있던 종이상자에서 정성스럽게 포장된 선물 상자를 꺼냈다.`,
    );
    await falcon.say_and_wait(
      `이건 ${falcon.name}이 담당 ${falcon.get_uma_sex_title()}로서 ${callname}에게 주는 ㅈ…… 의리 초콜릿이야!`,
    );
    await era.printAndWait(
      `선물 상자를 열자 하트 모양의 초콜릿과 그 옆에 놓인 카드가 보였다.`,
    );
    await falcon.say_and_wait(`앞으로도 팔코를 계속 응원해줘!`);
    await era.printAndWait(`${falcon.name}은 달콤한 미소를 지었다.`);
    era.printButton(`공연장 정리 끝나면 같이 밥 먹으러 갈까?`, 1);
    await era.input();
    await falcon.say_and_wait(
      `트레이너랑 ${falcon.get_uma_sex_title()} 콤비에게 할인 혜택을 주는 가게가 있다고 들었어, 같이 가보자!`,
    );
    await era.printAndWait(`${falcon.name}이 ${me.name}의 손을 잡았다.`);
    await falcon.say_and_wait(
      `팬들이 팔코에게 꼭 먹어보라고 추천해준 곳이야. 거기에도 팔코의 팬들이 있을까? 너무 기대돼.`,
    );
    era.printButton(`분명히 있을 거야.`, 1);
    await era.input();
    await falcon.say_and_wait(`그러고 보니 팔코는…… 아니, 팔코는 아무 말도 안 했어⭐.`);
    await era.printAndWait(`두 사람은 근처의 인기 식당에서 발렌타인데이를 보냈다.`);
  };
  //이건 왜 만들어놓고 check에서 빠져있을까...
  handlers[47 + 9] = async (falcon, me, callname) => { 
    const suzuka = get_chara_talk(2);
    await print_event_name('잔디 도전?', falcon);
    await era.printAndWait(
      `가지 위에 쌓였던 두꺼운 눈이 마침내 녹아내리고, 정막했던 트레센에 다시 새들의 지저귐이 찾아왔다.`,
    );
    await era.printAndWait(`따뜻한 트레이닝실에서 당신이 다음 레이스를 고민하고 있을 때였다.`);
    await falcon.say_and_wait(`${callname}, 팔코 왔어!`);
    await suzuka.say_and_wait(`실례하겠습니다.`);
    await era.printAndWait(`트레이닝실에 두 명의 방문객이 찾아왔다.`);
    await me.say_and_wait(`오늘도 팔코는 활기차네.`);
    await falcon.say_and_wait(
      `응! 역시 활기와 귀여움이야말로 ${falcon.get_uma_sex_title()} 아이돌의 매력이니까.`,
    );
    await era.printAndWait(
      `${falcon.name}은 트레이닝실을 한 바퀴 돌더니 소파에 푹 파묻혔고, 사일런스 스즈카는 소파 옆에 조용히 앉아 트레이닝실 안을 찬찬히 둘러보았다.`,
    );
    await falcon.say_and_wait(`소파에 누워 있으니까 진짜 편하다―.`);
    await me.say_and_wait(`오늘 아이돌 활동은 뭐야?`);
    await era.printAndWait(`${me.name}은(는) 플라스틱 컵 두 개를 꺼내 편의점에서 산 홍차를 우려냈다.`);
    await falcon.say_and_wait(`음―― 팔코, 사츠키상에 나가고 싶어.`);
    await me.say_and_wait(`뭐라고?`);
    await suzuka.say_and_wait(`에?`);
    await era.printAndWait(`곁에 있던 사일런스 스즈카가 살짝 입을 가렸다.`);
    await falcon.say_and_wait(`팔코, 사츠키상에 나가고 싶어!`);
    await era.printAndWait(
      `${falcon.name}은 꽤 기백 있는 목소리로 트레이닝실에 있는 사람들에게 선언했다.`,
    );
    await suzuka.say_and_wait(`팔코 양이 저를 데려온 게 바로 이 일 때문이었나요?`);
    await suzuka.say_and_wait(
      `하지만 팔코 양은 더트 레이스에서 활약하고 있잖아요, 왜 잔디 레이스에 나가고 싶은 거죠?`,
    );
    await era.printAndWait(`${me.name} 역시 같은 의문을 담아 ${falcon.sex}를 바라보았다.`);
    await falcon.say_and_wait(
      `그동안 팔코는 계속 더트 레이스에서만 활동했으니까, 더트 쪽 팬들은 이제 팔코를 다 알고 있거든⭐`,
    );
    await falcon.say_and_wait(
      `하지만 잔디 쪽 관객분들은 아직 팔코를 잘 모르는 것 같아. 그래서 이번 기회에 잔디 레이스에 나가서, 잔디 레이스를 좋아하는 팬분들도 팔코를 응원하게 만들고 싶어!`,
    );
    era.printButton(`그렇다면 나도 찬성할게.`, 1);
    await era.input();
    await era.printAndWait(
      `잔디 쪽 관객들에게도 이렇게 귀여운 ${falcon.get_uma_sex_title()}를 알릴 수 있다면, 팔코의 아이돌 인생에도 큰 도움이 될 것이다.`,
    );
    await suzuka.say_and_wait(
      `그렇군요. 그래서 저에게 잔디 레이스 기교를 가르쳐 달라는 건가요?`,
    );
    await falcon.say_and_wait(
      `그러니까 이차원의 도망자를 팔코에게 빌려줘!`,
    );
    await suzuka.say_and_wait(`……에?`);
    await falcon.say_and_wait(
      `사츠키상을 뛸 때 팔코 스스로 이차원의 도망자라고 자칭하면서, 스즈카한테서 힘을 얻고 싶어!`,
    );
    await era.printAndWait(
      `사일런스 스즈카뿐만 아니라 너 역시 ${falcon.name}의 엉뚱함에 머리가 지끈거렸다.`,
    );
    await suzuka.say_and_wait(`팔콘 씨, 다른 사람의 이명을 함부로 빌려서 이상한 짓 하지 마세요!`);
    await era.printAndWait(`사일런스 스즈카가 화가 났다.\n`);
    era.printButton(`미안해, 나중에 팔코를 잘 타이를게.`, 1);
    era.printButton(`잔디 레이스 팁을 좀 전수해줄 수 있을까?`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`어떤 이유에서건 다른 사람의 이름을 사칭하는 건 좋은 일이 아니었다.`);
      await era.printAndWait(`이대로 두었다가는 불필요한 분쟁이 생길 수도 있었다.`);
      await suzuka.say_and_wait(`아니요, 너무 걱정하지 마세요.`);
      await suzuka.say_and_wait(
        `팔콘 씨는 활기차고 좀 엉뚱한 면이 있지만, 남의 명예를 실추시킬 나쁜 사람은 아니니까요.`,
      );
      await suzuka.say_and_wait(
        `도주 시스터즈 활동을 하면서 팔콘 씨의 텐션을 따라가는 게 가끔 힘들긴 하지만요.`,
      );
      await suzuka.say_and_wait(
        `하지만 부디 자신의 이름으로 그 길을 걸어가 주세요. 자신이 진심으로 납득하지 못한 이명은 이상적인 결말로 이끌어주지 않아요.`,
      );
      await falcon.say_and_wait(`우우. 스즈카, 화나니까 너무 무서워!`);
      await me.say_and_wait(`그렇구나.`);
      await era.printAndWait(`${me.name}은(는) 다시 자리에 앉았다.`);
      await suzuka.say_and_wait(
        `제 이명을 빌려줄 수는 없지만, 잔디 레이스에 관한 기술은 제대로 가르쳐 드릴게요.`,
      );
      await era.printAndWait(
        `그 후 3시간 동안, ${me.name}들은 사일런스 스즈카를 통해 잔디 레이스에 관한 지식을 배웠다.`,
      );
    } else {
      await suzuka.say_and_wait(`그 정도라면 물론 괜찮아요.`);
      await era.printAndWait(`사일런스 스즈카의 화가 풀린 것 같았다.`);
      await suzuka.say_and_wait(
        `자신이 진심으로 납득하지 못한 이명은 결코 좋은 결과를 낳지 않는다는 걸, 엉뚱한 팔콘 씨는 꼭 기억해두세요.`,
      );
      await suzuka.say_and_wait(`그리고…\n`);
      await suzuka.say_and_wait(
        `앞으로 펼쳐질 풍경은 누구에게도 양보하지 않을 거예요! 이 점도 팔콘 씨의 가슴속에 새겨두길 바라요.`,
      );
      await falcon.say_and_wait(`히이익? 스즈카, 화나니까 너무 무서워!`);
      await era.printAndWait(`……설마 방금 그게 본론이었던 걸까?`);
      await me.say_and_wait(`앞으로 팔코가 꽤 고생하겠네.`, true);
      await era.printAndWait(`${falcon.name}이 도움을 요청하는 눈빛으로 ${me.name}을(를) 쳐다보았다.`);
      await me.say_and_wait(`(시선을 피한다)`, true);
      era.drawLine();
      await suzuka.say_and_wait(`벌써 8시간이나 훈련했는데, 팔콘 씨는 아직도 그렇게 활기찬가요?`);
      await falcon.say_and_wait(`인내심을 요구하는 라이브에 비하면, 이 정도는 아직 한계가 아니야!`);
      await suzuka.say_and_wait(`그렇다면 계속하죠.`);
      await era.printAndWait(`그 후 잔디 레이스 특훈은 통금 시간이 다 되어서야 끝이 났다.`);
    }
  };

  handlers[47 + 12] = async (falcon, me, callname) => {
    await print_event_name(`목표! 사츠키상!`, falcon);
    await era.printAndWait(`훈련장\n`);
    await falcon.say_and_wait(`하아, 하아……`);
    await me.say_and_wait(`수고했어.`);
    await falcon.say_and_wait(
      `${callname}, 팔코 저번 연습 때보다 더 빨라졌네?`,
    );
    await era.printAndWait(`${me.name}은(는) 스톱워치를 확인했다.`);
    await me.say_and_wait(`……승리하기까지는 아직 거리가 좀 있네.`);
    await era.printAndWait(
      `사일런스 스즈카가 가르쳐 준 주법 기술이 있다 해도, 더트 레이스에 적응된 ${falcon.name}에게 잔디 레이스는 매우 힘든 일이었다.`,
    );
    await falcon.say_and_wait(`……${callname}?`);
    await era.printAndWait(
      `${falcon.name}은 ${me.name}의 표정에서 무언가를 읽어냈는지, 물을 마시며 ${me.name}의 반응을 살폈다.`,
    );
    await me.say_and_wait(`조금 어렵긴 하지만, 연습을 더 하면 극복할 수 있을 거야.`);
    await era.printAndWait(`${me.name}은(는) 서류철을 내려놓고 ${falcon.sex}를 진지하게 바라보았다.`);
    await falcon.say_and_wait(
      `${callname}, 지금 표정 되게 수상한데?`,
    );
    await falcon.say_and_wait(`설마 벌써 좋아하는 사람이라도 생긴 거야?`);
    await era.printAndWait(
      `어째서 팔코가 그런 결론에 도달했는지는 모르겠지만, 왠지 모르게 안심이 되었다.`,
    );
    await me.say_and_wait(`그냥 좀 피곤해서 그래, 조금만 쉬면 괜찮아질 거야.`);
    await falcon.say_and_wait(`……정말 그것뿐이야?`);
    await era.printAndWait(
      `의심을 지우기는 어려워 보였다. ${me.name}은(는) 점점 의혹에 찬 눈초리로 변하는 ${falcon.name}을 보며 화제를 돌렸다.`,
    );
    await me.say_and_wait(
      `그보다 팔코, 신곡 제작 소식을 기다려주는 팬분들한테 얼른 알려줘야 하지 않아?`,
    );
    await me.say_and_wait(`더 늦으면 다들 목 빠지게 기다릴 텐데.`);
    await falcon.say_and_wait(`에? 그러면 얼른 서둘러야겠네.`);
    await era.printAndWait(
      `입으로는 그렇게 말하면서도 ${falcon.sex}는 움직일 기미가 없었다. 꼬리만 의자를 탁탁 때리고 있을 뿐이었다.`,
    );
    await me.say_and_wait(`더 늦으면 다들 목 빠지게 기다릴 거라니까.`);
    await falcon.say_and_wait(`알았어~`);
    await era.printAndWait(
      `못 들었나 싶어 다시 한번 말했지만, ${falcon.name}은 여전히 그 자리에 앉아 있었다.`,
    );
    await era.printAndWait(`무슨 말을 더 해야 할까 고민하던 중, ${falcon.name}이 일어났다.`);
    await falcon.say_and_wait(`그럼 팔코 다녀올게~`);
    await falcon.say_and_wait(`정말 아쉽네.`, true);
    await era.printAndWait(`그 후 ${falcon.name}은 석양을 등에 지고 탈의실로 달려갔다.`);
    era.drawLine({ content: '라이브 공연 종료 후' });
    await falcon.say_and_wait(`모두 고마워⭐ 오늘 콘서트도 아주 대성황이었어⭐`);
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await era.printAndWait(`주위에서 끊임없는 박수 소리가 들려왔다.`);
    await falcon.say_and_wait(
      `그럼 팔코가 노래 한 곡 더 부를게♪―― 언제나 팔코를 응원해주는 당신에게 바칠게⭐`,
    );
    await era.printAndWait(`오늘의 공연도 대성공이었다.`);
    await era.printAndWait(
      `구경하던 인파가 서서히 흩어지자, 멀리서 지켜보던 네가 ${falcon.name}에게 다가갔다.`,
    );
    await me.say_and_wait(`수고했어, 오늘 공연도 정말 인기가 많더라.`);
    await era.printAndWait(
      `언제나 무대만을 생각하는 ${falcon.teen_sex_title}는 정말 사랑스러웠다.`,
    );
    await falcon.say_and_wait(
      `천만에! 만약 ${callname}이(가) 팔코를 발굴해주지 않았다면, 팔코는 지금도 공연 때문에 고민하고 있었을 거야.`,
    );
    await era.printAndWait(
      `자신은 그저 당연한 일을 했을 뿐이라고 말하려다, ${me.name}은(는) 입을 다물었다.`,
    );
    await falcon.say_and_wait(
      `오늘 콘서트도 끝났으니, 이제부턴 사츠키상을 위해 전력을 다해 준비하자!`,
    );
    await era.printAndWait(
      `${falcon.name}의 종이 가방을 건네받은 뒤, 너희는 트레센으로 돌아가는 길을 말없이 걸었다.`,
    );
    falcon.print(`손에 든 종이 가방이 어째서 이렇게나 무거운 걸까?`);
    falcon.print(
      `지나치게 흥분한 뇌는 마치 종이컵 속에서 끊임없이 소용돌이치는 검은 물체처럼 빙글빙글 돌고 있었다.`,
    );
    await say_by_passer_by(`앳된 목소리`, `실례합니다!`);
    await era.printAndWait(
      `뒤에서 들려온 목소리에 ${me.name}과(와) ${falcon.name}은 서로 눈을 맞춘 뒤 뒤를 돌아보았다.`,
    );
    await say_by_passer_by(
      `어린 ${falcon.get_uma_sex_title()}`,
      `${falcon.name} 언니 공연 정말 멋졌어요! 저도 팔코 언니 같은 아이돌이 되고 싶어요!`,
    );
    await era.printAndWait(
      `중등부처럼 보이는 어린 ${falcon.get_uma_sex_title()}였다. ${falcon.name}의 팬인 모양이었다.`,
    );
    await falcon.say_and_wait(`고마워! 내일도 꼭 팔코 응원해줘야 해, 여기서 기다릴게⭐`);
    await era.printAndWait(
      `다시 아이돌 모드로 돌아온 ${falcon.name}이 기쁘게 양손을 흔들었다.`,
    );
    await say_by_passer_by(
      `어린 ${falcon.get_uma_sex_title()}`,
      `어떻게 하면 팔코 언니 같은 대단한 아이돌이 될 수 있나요?`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}는 ${me.name}들에 대해 더 알고 싶어 하는 것 같았다.`,
    );
    await falcon.say_and_wait(
      `최고의 ${falcon.get_uma_sex_title()} 아이돌이 되겠다는 목표를 세우고, 그걸 가슴속에 꼭 새긴 다음에 바로 행동에 옮기면 돼!`,
    );
    await era.printAndWait(
      `그렇구나, 하고 어린 ${falcon.get_uma_sex_title()}는 고개를 끄덕였다.`,
    );
    await say_by_passer_by(
      `어린 ${falcon.get_uma_sex_title()}`,
      `옆에 계신 분은 팔코 언니한테 아주 소중한 사람이죠?`,
    );
    await falcon.say_and_wait(`정말 아주아주 소중한 사람이야!`);
    await era.printAndWait(
      `${falcon.name}은 주체할 수 없이 들뜬 목소리로 ${falcon.sex}의 의문에 대답했다.`,
    );
    await say_by_passer_by(
      `어린 ${falcon.get_uma_sex_title()}`,
      `팬들보다 더 소중한가요?`,
    );
    await falcon.say_and_wait(`에? 그건 말이지…`);
    await era.printAndWait(`${falcon.name}이 드물게 말을 멈췄다. 그리고,`);
    era.printButton(`팬들보다 더 소중한 사람이야.`, 1);
    era.printButton(`팬들과는 다른 의미로 똑같이 소중한 사람이야.`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await say_by_passer_by(
        `어린 ${falcon.get_uma_sex_title()}`,
        `팬들보다 더 소중하다는 건 무슨 뜻이에요?`,
      );
      await falcon.say_and_wait(`트레이닝이나 일상생활에서 나를 이끌어주는 분이라는 뜻이야.`);
    } else {
      await say_by_passer_by(
        `어린 ${falcon.get_uma_sex_title()}`,
        `다른 의미라는 건 무슨 뜻이에요?`,
      );
      await falcon.say_and_wait(`트레이닝이나 일상생활에서 나를 이끌어주는 분이라는 뜻이야.`);
    }
    await say_by_passer_by(`어린 ${falcon.get_uma_sex_title()}`, `아, 트레이너님이시구나!`);
    await era.printAndWait(
      `즐거운 듯 ${me.name}의 주위를 맴돌던 어린 ${falcon.get_uma_sex_title()}가 갑자기 ${me.name}의 손을 붙잡았다.`,
    );
    await say_by_passer_by(
      `어린 ${falcon.get_uma_sex_title()}`,
      `제가 입학하면 아저씨가 제 전속 트레이너가 되어주실래요?`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}를 육성하려면 이사장님께 신청해야 하고, 앞으로 꼬박 3년 동안의 훈련을 책임져야 한다.`,
    );
    await era.printAndWait(`솔직히 말해 꽤나 힘든 일이었다.`);
    await me.say_and_wait(`네가 트레센에 들어오면 나보다 훨씬 훌륭한 트레이너를 만나게 될 거야.`);
    await era.printAndWait(`그건 그렇고, 왠지 모르게 등 뒤가 서늘했다.`);
    await say_by_passer_by(`어린 ${falcon.get_uma_sex_title()}`, `알겠어요!`);
    await era.printAndWait(
      `감사인사를 전한 뒤, 어린 ${falcon.get_uma_sex_title()}는 쏜살같이 자리를 떠났다.`,
    );
    await me.say_and_wait(`팔코―`);
    await falcon.say_and_wait(`아무 일도 없었어⭐`);
    await era.printAndWait(`${falcon.name}은 마치 아무 일도 없었다는 듯 너를 빤히 쳐다보았다.`);
    await me.say_and_wait(`이거 큰일 났군.`, true);
    await era.printAndWait(
      `나중에 사과를 겸해, 다음 휴일에 ${falcon.name}과 함께 외출하기로 약속했다.`,
    );
  };

  handlers[47 + 40] = async (falcon, me, callname) => {
    await print_event_name(`팔콘의 결단`, falcon);
    await era.printAndWait(`상점가 광장\n`);
    await falcon.say_and_wait(`언제나 묵묵히 팔코를 응원해주셔서 정말 고마워⭐`);
    await falcon.say_and_wait(
      `이건 팔코가 어제 밤새도록 만든 작은 선물이야, 팔코의 자그마한 정성을 받아줬으면 좋겠어❤`,
    );
    await era.printAndWait(
      `${me.name}과(와) ${falcon.name}의 끊임없는 홍보 덕분에 점점 더 많은 사람이 소문을 듣고 찾아왔다. 작은 잔디밭은 이제 엄청난 인파로 가득 찼다.`,
    );
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await era.printAndWait(
      `인파에 둘러싸인 채 ${falcon.get_uma_sex_title()} 아이돌의 길을 걷기 위해 노력하는 ${falcon.name}.`,
    );
    await era.printAndWait(
      `비록 잔디의 스타 아이돌들에 비하면 인지도는 떨어졌지만, 더트 팬들이 공연을 보러 오는 열정만큼은 잔디 팬들보다 훨씬 뜨거웠다.`,
    );
    await era.printAndWait(
      `그럴 만도 한 것이, 잔디 레이스를 좋아하는 팬들에게는 비슷한 시기에 선택할 수 있는 유명 ${falcon.get_uma_sex_title()}가 많았지만, 더트 전문 ${falcon.get_uma_sex_title()} 아이돌이자 실력과 인기를 겸비한 우마무스메는 ${falcon.name}뿐이었기 때문이다.`,
    );
    await era.printAndWait(`${falcon.name}이 받고 있을 압박감이 어느 정도일지 짐작이 갔다.`);
    await era.printAndWait(`마치 돋보기로 모은 햇빛이 한 점에 집중되는 것과 같았다.`);
    await me.say_and_wait(
      `팔코, 요즘 수면 시간이 점점 줄어들고 있는데 정말 괜찮은 건가?`,
    );
    await era.printAndWait(
      `최근 트레이닝실은 ${me.name}의 강요에 못 이긴 ${falcon.name}이 부족한 잠을 보충하는 장소가 되어버렸다.`,
    );
    await era.printAndWait(
      `훈련, 아이돌 활동, 팬레터 답장(${me.name}이(가) 검토한 뒤), 다음 게릴라 공연을 위한 준비까지.`,
    );
    await era.printAndWait(`번거로운 활동들이 ${falcon.sex}의 심신을 갉아먹고 있었다.`);
    await falcon.say_and_wait(`……그뿐만 아니야! 팔코가 여러분께 들려드릴 기쁜 소식이 하나 더 있어!`);
    await falcon.say_and_wait(
      `팔코, 다음에 열릴 JBC 클래식하고 도쿄 대상전에 출주하기로 했어!`,
    );
    await say_by_passer_by(
      `팬들`,
      `앞으로도 팔코의 활약하는 모습을 볼 수 있다니! 정말 최고야!`,
    );
    await falcon.say_and_wait(
      `다음 레이스에서도 팔코는 계속해서 빛날 거야! 여러분 모두 꼭 현장에 보러 와줘야 해!`,
    );
    await say_by_passer_by(`팬들`, `꼭 갈게요!`);
    await falcon.say_and_wait(`정말 고마워⭐`);
    await era.printAndWait(
      `마지막 팬이 떠나고 나서야, ${me.name}은(는) 조금 떨어진 곳에서 ${falcon.name}에게 다가갔다.`,
    );
    era.printButton(`수고했어.`, 1);
    await era.input();
    await era.printAndWait(
      `정리란, 구경꾼들이 남기고 간 쓰레기를 전부 깨끗하게 치우는 것을 의미한다.`,
    );
    await era.printAndWait(
      `처음엔 ${falcon.name}도 직접 청소하겠다고 고집을 피웠지만, ${me.name}은(는) 이제 한계일 거라며 강제로 만류했다.`,
    );
    await falcon.say_and_wait(`……${callname}?`);
    await era.printAndWait(
      `평소 나무 아래서 졸던 피곤한 모습의 ${falcon.name}과는 달랐다. ${falcon.sex}는 갈구하는 듯한 눈빛으로 ${me.name}dmf(를) 빤히 쳐다보았다.`,
    );
    await falcon.say_and_wait(
      `팔코는 이제 합격점인 ${falcon.get_uma_sex_title()} 아이돌이 된 걸까?`,
    );
    await me.say_and_wait(
      `${falcon.get_uma_sex_title()} 아이돌로서는 세상에 단 하나뿐인 존재야.`,
    );
    await falcon.say_and_wait(
      `……조금만 더 버티면 돼. 그러니까 ${callname}, 너무 걱정하지 마!`,
    );
    await era.printAndWait(
      `……${falcon.sex}의 눈은 ${me.name}이(가) 아니라 ${me.name}의 뒤에 있는 무언가를 향해 있었다.`,
    );
    await falcon.say_and_wait(
      `사실 팔코는 외로운 걸 정말 싫어하거든. 그래서 어떻게 해서든 가장 큰 무대 위에서 빛나고 싶어.`,
    );
    await falcon.say_and_wait(`……불꽃놀이처럼, 싫어하는 어두운 밤을 가로지르면서 말이야.`);
    await falcon.say_and_wait(`팔코 같은 사람들에게 더 많은 정답을 알려주고 싶어.`);
    await era.printAndWait(`말을 하던 도중 ${falcon.sex}가 갑자기 눈물을 흘렸다.`);
    await falcon.say_and_wait(`팔코가 노력할 수 있는 방향은 더트뿐이지만 말이야.`);
    await falcon.say_and_wait(`……사츠키상 같은 커다란 무대에 다시 한번 서보고 싶어.`);
    await era.printAndWait(
      `그 후 피로가 한계에 달한 ${falcon.teen_sex_title}는 눈을 감았다.`,
    );
    await era.printAndWait(
      `트레이너로서 담당 ${falcon.get_uma_sex_title()}를 이런 지경까지 몰아넣은 것은 명백한 실책이었다.`,
    );
    await era.printAndWait(
      `담당의 의견을 존중한다는 핑계를 댔지만, 결국 그것은 자기 합리화의 산물에 불과했다.`,
    );
    await era.printAndWait(`이전보다 더 자신의 나약함이 증오스러워졌다.`);
    await me.say_and_wait(`……이대로 둘 수는 없어.`);
    await era.printAndWait(
      `사랑스러운 ${falcon.teen_sex_title}를 조심스럽게 안아 올렸다. 품 안에서 느껴지는 무게는 트레이너로서 짊어진 책임의 무게였다.`,
    );
    await me.say_and_wait(`……적어도 트레이너로서의 책임은 다하겠어.`);
    await era.printAndWait(
      `결연한 각오를 다지자 팔 근육에 통증이 전해져 왔지만, 내심 해방감을 느꼈다.`,
    );
  };

  handlers[47 + 41] = async (falcon, me, callname) => {
    await print_event_name(`결단의 대가`, falcon);
    await era.printAndWait(
      `11월의 날씨 변화와는 대조적으로, ${falcon.name}의 아이돌 활동 중단에 관한 보도가 쏟아졌다.`,
    );
    await era.printAndWait(
      `경기장과 무대를 가리지 않고 쉼 없이 빛나기로 유명했던 ${falcon.name}도 마침내 한계에 도달했다.`,
    );
    await era.printAndWait(`적어도 대외적으로는 그렇게 홍보되었다.`);
    await era.printAndWait(
      `갑작스러운 일인 데다 당사자들이 입을 굳게 다물고 있었기에, 상황은 점점 더 기괴하게 흘러갔다.`,
    );
    await era.printAndWait(`지나치게 터무니없는 추측을 제외하면 주된 설은 두 가지였다.`);
    await era.printAndWait(`${falcon.name}에게 남자친구가 생겼고 곧 은퇴할 것이라는 설.`);
    await era.printAndWait(
      `${falcon.name}이 다리에 심각한 부상을 입어 현재 입원 중이며, 완치 가능성이 낮아 은퇴할 것이라는 설.`,
    );
    await era.printAndWait(`어느 쪽이든 아이돌 활동에는 치명적인 타격이었다.`);
    await me.say_and_wait(`이미 결정을 내린 이상 되돌아갈 길은 없어.`);
    await era.printAndWait(
      `잠정적인 아이돌 활동 중단을 선언했을 때, 예상했던 다툼은 일어나지 않았다. ${falcon.sex}는 그저 차분하게 사실을 받아들였다.`,
    );
    await era.printAndWait(
      `……하지만 나의 독단적인 행동 때문에 ${falcon.sex}가 성장할 기회를 잃게 된 건 아닐까.`,
    );
    await era.printAndWait(
      `나의 주장이 결국 이렇게 심각한 결과를 초래했다면, 돌이켜봤을 때 그 결정은 옳았던 것일까?`,
    );
    await me.say_and_wait(
      `그러한 의문들이 ${me.name}을(를) 괴롭혔지만……당신은 당신이 옳다고 믿는 일을 했을 뿐이라고 생각했다.`,
    );
    await era.printAndWait(`설령 그로 인해 대가를 치러야 한다 할지라도.`);
    await say_by_passer_by(
      `${falcon.name}의 팬`,
      `아, 안녕하세요. 혹시 ${falcon.name}의 트레이너님이신가요?`,
    );
    await era.printAndWait(
      `어느샌가 복도에 나타난 남자가 마치 마침내 목표를 찾았다는 듯 눈을 빛내며 ${me.name}에게 빠르게 다가왔다. 이상하다, 이번 일정은 아무에게도 알리지 않았을 텐데.`,
    );
    await me.say_and_wait(
      `맞습니다만, 무슨 일이시죠? 혹시 팔코의 사인을 받으러 오신 거라면 죄송하지만 ${falcon.sex}는 방금 내려갔습니다.`,
    );
    await era.printAndWait(
      `……그러고 보니 이 대기실은 복도 가장 안쪽이다. ${falcon.name}을 찾으러 온 거라면 길에서 마주쳤어야 정상이다.`,
    );
    await say_by_passer_by(
      `${falcon.name}의 팬`,
      `아…… 죄송합니다. 그저 개인적인 호기심일 뿐입니다.`,
    );
    await say_by_passer_by(
      `${falcon.name}의 팬`,
      `팔코보다 ${falcon.sex}의 트레이너에게 더 흥미가 있거든요.`,
    );
    await era.printAndWait(`무언가를 감추려는 듯 마스크와 장갑까지 착용하고 있었다. 어딘가 수상했다.`);
    await me.say_and_wait(`……아니, 안 돼. 뭔가 잘못됐어.`);
    await say_by_passer_by(`${falcon.name}의 팬`, `그대로 지옥에나 떨어져라!`);
    await era.printAndWait(`한 가닥의 하얀 빛이 예고도 없이 번뜩였다.`);
    await me.say_and_wait(`윽.`);
    await era.printAndWait(
      `팬들의 보복이 있을지도 모른다고 생각은 했지만, 설마 이렇게 극단적인 일이 일어날 줄은 몰랐다.`,
    );
    await era.printAndWait(`두뇌가 눈앞에서 벌어진 비현실적인 사건을 처리하느라 멈춰버렸다.`);
    await era.printAndWait(`${me.name}은(는) 그저 멍하니 서서 작은 칼날이 ${me.name}의 복부를 찌르는 것을 바라볼 수밖에 없었다.`);
    await era.printAndWait(`이렇게 허망하게 최후를 맞이하는 것인가.`);
    await me.say_and_wait(`윽!`);
    await era.printAndWait(`――만약 ${me.name}이(가) 무의식적으로 서류 가방을 방패 삼아 충격을 완화하지 않았다면 말이다.`);
    await era.printAndWait(`칼날은 가죽 서류 가방에 깊은 자국을 남겼다.`);
    await say_by_passer_by(`광신도 팬`, `제길.`);
    await era.printAndWait(
      `그럼에도 불구하고 갑작스러운 충격에 ${me.name}은(는) 무의식적으로 고개를 젖혔고, 하마터면 뒤로 넘어질 뻔했다.`,
    );
    await say_by_passer_by(
      `광신도 팬`,
      `팔코는 저렇게 완벽한데, 왜 너 같은 걸 좋아하는 거지?`,
    );
    await era.printAndWait(`공격이 빗나갔다는 것을 깨달은 폭도는 실패에 분노했다.`);
    await say_by_passer_by(`광신도 팬`, `지옥에나 가버려!`);
    await era.printAndWait(
      `칼을 뽑지 않은 채, 그는 그 기세를 몰아 ${me.name}을(를) 벽으로 밀어붙였다.`,
    );
    await me.say_and_wait(`제길, 도망칠 곳이 없어.`);
    await era.printAndWait(
      `칼을 뽑지 않은 채 ${me.name}이(가) 중심을 잃은 틈을 타 ${me.name}을(를) 벽으로 강하게 압박했다.`,
    );
    await say_by_passer_by(
      `광신도 팬`,
      `그 풋풋하고 섬세했던 팔코가 어째서 갑자기 활동 중단을 선언한 거냐고――`,
    );
    await era.printAndWait(
      `이성이 분노에 잠식된 탓인지, 흥분한 팬은 칼을 더 깊숙이 밀어 넣으려 힘을 주었다.`,
    );
    await say_by_passer_by(`광신도 팬`, `――과연 그렇군, 이제 알겠어.`);
    await era.printAndWait(`한순간 당혹스러운 표정을 지었던 광신도는 무언가 깨달은 듯했다.`);
    await say_by_passer_by(
      `광신도 팬`,
      `다 네가 존재하기 때문이야. 너 때문에 우리 팔코가 저렇게 변해버린 거라고.`,
    );
    await say_by_passer_by(
      `광신도 팬`,
      `네가 사라지면 팔코는 예전의 모습으로 돌아오겠지?`,
    );
    await era.printAndWait(`아드레날린이 솟구치는 가운데 ${me.name}은(는) 절망적인 상황을 마주했다.`);
    await era.printAndWait(
      `아랫배에서 미세한 마비 증상이 느껴졌다. 마치 누군가 얼음을 쑤셔 넣은 듯한 감각이었다. 방패로 썼던 서류 가방 아래로 미끄러진 칼날이 결국 목표를 맞춘 것이다.`,
    );
    await say_by_passer_by(`광신도 팬`, `쳇.`);
    await era.printAndWait(
      `본래 심장을 노린 일격이었으나 서류 가방에 막히자 차선책으로 복부를 노린 모양이었다.`,
    );
    await me.say_and_wait(`가르쳐 줘, 어째서 팔코가 돌아오지 않는 거야.`);
    await era.printAndWait(`상황은 압도적으로 불리했지만, ${me.name}은(는) 오히려 냉정해졌다.`);
    await era.printAndWait(
      `격렬하게 뛰는 심장, 쌓인 눈처럼 흩어지는 체력, 마비되어가는 신체 속에서 ${me.name}은(는) 전례 없는 집중력으로 돌파구를 생각했다.`,
    );
    await say_by_passer_by(
      `광신도 팬`,
      `……너 같은 죄인에게 설명해 줄 필요는 없다.`,
    );
    await me.say_and_wait(`지금이야!`, true);
    await era.printAndWait(
      `방금 전의 대화는 상대를 방심하게 만들기 위한 것이었다. 상대가 대답을 생각하느라 몸의 방어를 소홀히 하게 만든 것이다.`,
    );
    await era.printAndWait(
      `오히려 상대를 더 자극할 위험도 있었지만, 지금은 단 하나의 가능성에 도박을 걸 수밖에 없었다.`,
    );
    await era.printAndWait(
      `상대가 기습에 성공했다는 생각에 잠시 경계심을 늦춘 틈을 타, ${me.name}은(는) 상대의 급소를 온 힘을 다해 걷어찼다.`,
    );
    await say_by_passer_by(`광신도 팬`, `아아아악!`);
    await era.printAndWait(
      `마비된 쾌락보다 고통이 더 컸는지, 상대의 손이 단번에 풀렸다.`,
    );
    await me.say_and_wait(`기회다!`, true);
    await era.printAndWait(`상대가 고통으로 몸을 굽힌 틈을 타, ${me.name}은(는) 서류 가방을 상대에게 강하게 휘둘렀다.`);
    await say_by_passer_by(`광신도 팬`, `윽――`);
    await era.printAndWait(
      `손에 전해지는 둔탁한 감각으로 보아, 이번 일격은 확실히 치명상을 입혔을 것이다.`,
    );
    await say_by_passer_by(`광신도 팬`, `……거의 다 왔는데!`);
    await era.printAndWait(
      `물러날 곳이 없어 억지로 일어난 악마는 금방이라도 쓰러질 것 같았다.`,
    );
    await era.printAndWait(`하지만 ${me.name}의 상태는 더 좋지 않았다.`);
    await me.say_and_wait(`이렇게 끝나는 건가?`, true);
    await era.printAndWait(`현기증이 눈보라처럼 몰려왔다.`);
    await era.printAndWait(
      `혀끝을 깨물어 그 통증으로 정신을 붙잡은 뒤, 온 힘을 다해 서류 가방을 내던졌다.`,
    );
    await era.printAndWait(
      `첫 번째 공격은 상대가 고개를 돌려 피했지만, 곧바로 ${me.name}은(는) 온몸을 무기로 삼아 상대에게 돌진했다.`,
    );
    await era.printAndWait(
      `상대의 뒷머리가 유리 테이블에 강하게 부딪혔고, 그는 완전히 기절했다.`,
    );
    await me.say_and_wait(`구급차를 불러야 해…`, true);
    await era.printAndWait(`간신히 전화를 건 뒤에야 ${me.name} 역시 쓰러졌다.`);
    await era.printAndWait(`시야가 점점 흐릿해졌다.`);
    await era.printAndWait(`멀어져가는 의식 속에서 마지막으로 본 것은――`);
    await era.printAndWait(`신시대의 배를 타지 못한 승객의 모습이었다.`);
  };
  handlers[47 + 42] = async (falcon, me, callname) => {
    // 내가 더 좋아할수록, "내가 견딜 수 없는 방식"에 대한 정의는 더 엄격해진다. 무언가를 하려는 동력은 더 강해진다.
    // 아무것도 하지 않는 것은 나에게 고통이며, 내면 깊은 곳에는 이중의 죄책감이 존재한다. 첫 번째는 내가 좋아하는 대상에 대한 배신감, 두 번째는 내 '좋아함' 그 자체에 대한 배신감이다.
    await print_event_name(`수선화`, falcon);
    await era.printAndWait(`팬 습격 사건이 일어난 지 일주일이 지났다.`);
    await era.printAndWait(
      `사건의 폭풍우 한복판에 서 있는 ${me.name}과(와) ${falcon.name}의 신변 안전을 고려하여,`,
    );
    await era.printAndWait(`학원 측은 당분간 두 사람의 외출을 제한하기로 결정했다.`);
    await era.printAndWait(`……어떤 의미에서는 해방이기도 했다.`);
    await era.printAndWait(
      `마음속으로는 이 일을 잊자고 되뇌었지만, 자기도 모르게 그 광신도의 공허했던 모습이 자꾸만 떠올랐다.`,
    );
    await me.say_and_wait(`존재에 대한 불안이었을까?`, true);
    await era.printAndWait(
      `어떤 각도에서 봐도 아무 것도 없는, 기술도 경력도 전무한 상태에서는 어떤 기회조차 처음부터 입장권조차 없었을 것이다.`,
    );
    await era.printAndWait(
      `처음에는 그저 이 일이 적성에 맞지 않는 것이라며 다른 길을 찾으려 했을지도 모른다.`,
    );
    await era.printAndWait(`하지만 새로운 업계에서도 똑같은 곤경에 처하게 되기 전까지는 말이다.`);
    await era.printAndWait(`돌이켜보면 그저 헛되이 몇 년의 세월을 보낸 셈이었다.`);
    await era.printAndWait(
      `한때는 뜨거운 열정으로 무언가를 이루고 싶었겠지만, 현실 앞에서 자신은 아무것도 할 수 없다는 사실을 강제로 인정해야만 했다.`,
    );
    await era.printAndWait(
      `현상에 만족하지 못하는 사람에게는, 자신의 존재를 증명하는 것이 생명보다 더 중요했을 것이다.`,
    );
    await era.printAndWait(
      `존재하지 않는다면, 생명이란 그저 표시 장치도 출력 장치도 없이 에너지만 낭비하는 과정에 불과하기 때문이다.`,
    );
    await era.printAndWait(`만약 이럴 때 스포트라이트 아래에 설 기회가 생긴다면?`);
    await era.printAndWait(`설령 그 일이 당신들에게 큰 상처를 준다고 해도.`);
    await era.printAndWait(`정말 미안해, 하지만 나는 존재해야만 해.`);
    await era.printAndWait(
      `미망 속에서 자신의 존재를 증명할 대상을 찾아, 스스로를 그 색으로 물들이고, 같은 색을 가진 군중 속에 섞여 미망하는 존재가 아닌 척 연기한다.`,
    );
    await era.printAndWait(
      `자신이 내린 결론이 틀렸을지도 모른다는 것을 알지만, 지금은 스스로를 설득하기 위해 이 관점을 받아들일 수밖에 없었다.`,
    );
    await era.printAndWait(
      `이런 관점에서 본다면, 지난주의 습격 사건은 단지 존재감을 증명하고 싶었던 절망적인 사람이 가장 화제가 될 만한 주제를 찾은 것에 불과했다.`,
    );
    await era.printAndWait(`단지 그 대상이 운 나쁘게 ${falcon.name}의 팬이었을 뿐이었다.`);
    await era.printAndWait(
      `${falcon.name}이 조심스럽게 트레이닝실 문을 열고 들어와, 네게 억지로 미소를 지어 보였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) ${falcon.name}을(를) 향했던 시선을 아래로 떨구고, 트레이닝 계획표를 보며 멍하니 있었다.`,
    );
    await era.printAndWait(
      `지난주의 습격은 무척 아찔했으나, 실제로 입은 부상은 아랫배 쪽에 살짝 긁힌 상처뿐이었다.`,
    );
    await era.printAndWait(
      `트레센 학원이 트레이너와 소속 ${falcon.get_uma_sex_title()} 사이의 마찰로 발생할 수 있는 폭력 사태를 고려하여, 트레이너 제복의 일부에 케블라 섬유를 사용한 덕분이었다.`,
    );
    await era.printAndWait(
      `분노한 ${falcon.get_uma_sex_title()}의 발길질에 의한 중상을 방지하기 위함이었으나, 뜻밖에도 칼날을 막는 데 큰 성능을 발휘했다.`,
    );
    await era.printAndWait(`뭐랄까, 불행 중 다행이라고 해야 할까?`);
    await me.say_and_wait(`팔코…… 아니, ${falcon.name}.`);
    await era.printAndWait(
      `분산된 생각을 눈앞의 ${falcon.get_teen_sex_title()}에게 집중했다. ${me.name}은(는) 애칭으로 ${falcon.name}을 불러야 할지 망설였다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 팔코는 괜찮아.`,
    );
    await era.printAndWait(
      `생각보다 훨씬 강인한 ${falcon.get_teen_sex_title()}의 모습에 ${me.name}은(는) 안도하면서도 한편으론 슬픔을 느꼈다.`,
    );
    await era.printAndWait(`그늘진 표정의 ${falcon.get_teen_sex_title()}가 고개를 숙였다.`);
    await falcon.say_and_wait(
      `팔코는 ${falcon.get_uma_sex_title()} 아이돌로서 마음 한구석에 늘 이런 불안함이 있었어. 아니, 이런 일은 언젠가 반드시 일어날 거라 생각했거든.`,
    );
    await falcon.say_and_wait(
      `그러니까 ${callname}이 사과할 게 아니라, 오히려 팔코가 사과해야 할 쪽이야.`,
    );
    await era.printAndWait(
      `${falcon.name}의 시선이 불안하게 흔들렸다. 이런 대화에는 서툰 모양이었다.`,
    );
    await era.printAndWait(`${me.name}이(가) 숨을 깊게 들이마시고 말을 이으려던 찰나――`);
    await falcon.say_and_wait(`팔코는 알고 있어.`);
    await era.printAndWait(
      `거울 같은 호수보다 더 고요해진 ${falcon.name}이 고개를 들어 ${me.name}의 눈을 똑바로 응시했다.`,
    );
    await falcon.say_and_wait(
      `팔코의 팬분들은 팔코에게 희망을 걸고 있어. 그러니까 팔코에게는 그 어떤 오점도 있어서는 안 돼.`,
    );
    await falcon.say_and_wait(
      `하지만 팔코는 그렇게 생각하지 않아. 아이돌이 되기 위해 흘린 땀방울이 있고, 거기에 아주 약간의 운만 따라준다면,`,
    );
    await falcon.say_and_wait(
      `팔코 같은 ${falcon.get_uma_sex_title()}도 무대 중심에서 빛날 수 있을 거라 생각했어…… 하지만…… 이런 일이 일어나는 건 역시 이상하잖아.`,
    );
    await era.printAndWait(`${me.name}은(는) 슬픔이 서린 그 눈을 피하고 싶었지만, 시선을 뗄 수 없었다.`);
    era.printButton(`팔코는 왜 아이돌이 되고 싶어 했어?`, 1);
    await era.input();
    await era.printAndWait(`회피하는 것은 회피하지 않는 것보다 더 비참한 결과를 낳을 뿐이었다.`);
    await falcon.say_and_wait(
      `……팔코처럼 외로운 사람들도 잠시나마 고독한 고통을 잊게 해주고 싶어서.`,
    );
    await era.printAndWait(`그랬다. 바로 그것 때문이었다.`);
    await era.printAndWait(`자신의 불행을 아무리 한탄해도, 짊어진 책임은 변하지 않는다.`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 아이돌로서 지금까지 순탄하게 걸어온 것 자체가 이미 상상할 수 없을 만큼 기적 같은 행운이었다.`,
    );
    await me.say_and_wait(
      `나도 알아. 심장이 뚫린 것 같은 그 캄캄한 상처에서 언제나 피가 흐르고 있다는 걸.`,
    );
    await me.say_and_wait(
      `아무리 수많은 꽃다발과 박수갈채가 그 판단을 부정하더라도, 공연이 끝나고 무대에서 내려올 때면 그 상처에서 흐르는 피가 자신에게 질문을 던지겠지.`,
    );
    era.printButton(`죄책감을 덜기 위해 눈물을 흘리는 것보다, 아이돌로서 해야 할 더 중요한 일이 있어.`, 1);
    await era.input();
    await me.say_and_wait(
      `팔코가 생각해야 할 건 앞으로 있을 레이스에서 이기는 법, 그리고 3년 차의 더트 레이스들이야.`,
    );
    await me.say_and_wait(
      `팬들의 기대에 부응하는 것뿐만 아니라, 더 중요한 건 더트 ${falcon.get_uma_sex_title()} 아이돌을 목표로 하는 후배들을 위해서야.`,
    );
    await me.say_and_wait(
      `방향이 보이지 않으면 어때, 좀 틀리면 또 어때! 이 상처를 안은 채 그냥 계속 나아가는 거야! 그렇게 경기장 위에서, 무대 중심에서 계속 빛나는 거야!`,
    );
    await me.say_and_wait(
      `사람들에게 1세대 ${falcon.get_uma_sex_title()} 아이돌인 ${falcon.name}이 대체 어디까지 해낼 수 있는지 보여주자고!`,
    );
    await era.printAndWait(
      `세상에는 올바른 방향과 올바른 목표를 동시에 만족하여 이뤄지는 성공이란 존재하지 않는다.`,
    );
    await era.printAndWait(
      `엄밀히 따지면 올바른 방향도, 올바른 목표도 실재하지 않을지도 모른다.`,
    );
    await era.printAndWait(
      `하지만 방향과 목표가 틀렸을지라도 우리는 수많은 성공을 일궈내지 않았는가?`,
    );
    await era.printAndWait(
      `여정의 전반부에 거둔 성공들이 다 그렇게 이뤄진 것이라면, 후반부의 성공 역시 잘못된 방향과 잘못된 목표를 따라 성취되지 못할 이유가 어디 있겠는가?`,
    );
  };

  handlers[47 + 48] = async (falcon, me, callname) => {
    await print_event_name(`크리스마스의 기도`, falcon);
    await era.printAndWait(`나카야마 경마장 · 아리마 기념`);
    await era.printAndWait(
      `관객석의 관객들이 내뱉는 숨결이 하얀 안개가 되어 겨울날의 경기장을 가득 채웠다.`,
    );
    await era.printAndWait(`올해의 아리마 기념 열기 또한 여전히 뜨거웠다.`);
    await era.printAndWait(
      `${me.name}은(는) ${falcon.name}과 함께 관객석에 앉아, 아리마 기념에 출주하는 스타 레이스 ${falcon.get_uma_sex_title()}들의 소개를 듣고 있었다.`,
    );
    await me.say_and_wait(
      `올해 아리마 기념에서 가장 주목받는 ${falcon.get_uma_sex_title()}는 다이와 스칼렛이야.`,
    );
    await falcon.say_and_wait(`스칼렛 씨 말이지?`);
    await era.printAndWait(
      `떠들썩한 소음 속에서 ${falcon.get_uma_sex_title()}의 자랑인 청력은 오히려 굴레가 되기도 했다.`,
    );
    await me.say_and_wait(`귀는 잘 보호하고 있어?`);
    await falcon.say_and_wait(`팔코, 귀마개 예쁘게 잘 찼어!`);
    await era.printAndWait(
      `리본이 달린 귀여운 귀마개 덕분에 팔코는 너무 격렬한 함성으로 인해 일시적으로 청력을 잃을 걱정을 덜 수 있었다.`,
    );
    await me.say_and_wait(`그럼 이제 우리 자리를 찾으러 가자.`);
    await falcon.say_and_wait(`응! 저기…… ${callname}.`);
    await falcon.say_and_wait(`오늘만큼은 그냥 팔코 이름으로 불러줄 수 있어?`);
    await era.printAndWait(`의외로 ${falcon.name}은(는) 더 이상 아이돌이라는 이름의 틀에 집착하지 않는 듯했다.`);
    await me.say_and_wait(`${falcon.name}, 같이 가자.`);
    await falcon.say_and_wait(`응!`);
    await era.printAndWait(`관객들이 대충 자리를 잡은 뒤에야 ${me.name}들은 자신의 좌석을 찾았다.`);
    await me.say_and_wait(`올해 아리마 기념도 여전히 성황이네.`);
    await falcon.say_and_wait(`스칼렛 양도 나온다니까 더 기대돼!`);
    await era.printAndWait(
      `파란색과 흰색이 섞인 승부복을 입은레이스 ${falcon.get_uma_sex_title()}가 경기장에 들어섰다.`,
    );
    await era.printAndWait(`가장 눈에 띄는 것은 역시 ${falcon.sex}의 길게 늘어진 갈색 트윈테일이었다.`);
    await falcon.say_and_wait(`스칼렛 씨의 승부복, TV에서 보던 것보다 훨씬 예쁘다!`);
    await me.say_and_wait(`이번에 스칼렛은 어떤 작전으로 달릴까?`);
    era.drawLine({ content: '위닝 라이브 후' });
    await era.printAndWait(`다이와 스칼렛은 멋지게 1위를 차지했다.`);
    await era.printAndWait(`무대 위에서의 퍼포먼스 또한 사람들의 가슴을 뛰게 만들었다.`);
    await era.printAndWait(`모든 것이 끝난 후,`);
    await falcon.say_and_wait(`아리마 기념 무대는 정말 크네.`);
    await falcon.say_and_wait(`팔코도 언젠가 저런 무대에 설 수 있으면 좋을 텐데.`);
    await era.printAndWait(
      `스마트폰으로 확인한 정보에 따르면 올해 관객 수는 11만 명을 넘었다고 한다.`,
    );
    await era.printAndWait(`그에 비하면 도쿄 대상전의 관객은 고작 2~3만 명 수준이었다.`);
    await falcon.say_and_wait(
      `그래도 팔코는 톱 아이돌로서 더트 레이스도 인기 있게 만들 거야!`,
    );
    await era.printAndWait(`이른바 정통파 아이돌의 기개라는 것일까?`);
    await me.say_and_wait(`그럼 먼저 도쿄 대상전부터 시작해서, 그 목표를 향해 조금씩 나아가자!`);
    await falcon.say_and_wait(`응!`);
    await era.printAndWait(`스마트폰을 꺼내 시간을 확인하니 벌써 통금 시간이 다 되어가고 있었다.`);
    await me.say_and_wait(
      `지금 돌아가기엔 너무 늦은 것 같아. 그냥 근처에서 하룻밤 묵고 가자.`,
    );
    await falcon.say_and_wait(
      `음― ${callname}, 분명 방을 미리 예약해 뒀겠지?`,
    );
    await me.say_and_wait(`방 예약?`);
    await era.printAndWait(`황급히 스마트폰을 뒤져보았지만, 근처 호텔들은 이미 만실이었다.`);
    await era.printAndWait(
      `거기에 시간을 지체하는 바람에, 지금 당장 역으로 달려간다 해도 트레센으로 돌아가는 마지막 열차를 탈 수 없는 상황이었다.`,
    );
    await falcon.say_and_wait(
      `……괘, 괜찮아, ${callname}.`,
    );
    await era.printAndWait(
      `힘없이 처진 ${me.name}의 어깨를 보며, ${falcon.name}은 잠시 머뭇거리더니 가방에서 카드 한 장을 꺼내 건네주었다.`,
    );
    await falcon.say_and_wait(
      `깜빡할 뻔했다! 이거 ${callname}에게 주려고 만든 거야.`,
    );
    await era.printAndWait(`${me.name}은(는) ${falcon.name}의 크리스마스 복장이 인쇄된 작은 카드를 받았다.`);
    await falcon.say_and_wait(
      `${callname}이 갑자기 일깨워주지 않았으면 팔코, 정말 잊어버릴 뻔했어…… 아하하.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 팔코의 수줍은 미소를 보며, ${falcon.sex}의 기대 어린 시선을 따라 카드의 뒷면에도 글자가 적혀 있음을 알아차렸다.`,
    );
    era.printButton(`「고마워.」`, 1);
    await era.input();
    await era.printAndWait(
      `약간은 휘갈겨 쓴 예술적인 사인과, 「오늘 하루도 파이팅」이라고 적힌 팔코의 SD 캐릭터가 그려져 있었다.`,
    );
    await falcon.say_and_wait(`기분이 우울할 때 팔코를 보면 다시 힘이 날 거야!`);
    await era.printAndWait(`정말 고마울 따름이었다. 자, 그러면――`);
    await me.say_and_wait(`일단 근처 여관이라도 돌아다니며 남는 방이 있는지 물어보자.`);
    await era.printAndWait(
      `주변 호텔들이 다 예약되어 있긴 하지만, 사정이 생겨서 못 오는 손님들도 있을 테니 그 기회를 노려보기로 했다.`,
    );
    await era.printAndWait(
      `그렇게 결정한 뒤 두 사람은 발걸음을 재촉했다. 세 군데 여관을 돌아다닌 끝에, 마침 예약 취소로 비게 된 방 하나를 찾아낼 수 있었다.`,
    );
    await falcon.say_and_wait(`정말 이래도 괜찮은 걸까?`);
    await era.printAndWait(`머리 장식을 풀고 머리카락을 늘어뜨린 ${falcon.name}이 혼잣말을 중얼거렸다.`);
    await era.printAndWait(
      `어쩔 수 없는 상황이었기에, ${me.name}은(는) ${falcon.name}을 쓰다듬어 주었다.`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `역시 전차를 놓친 것 때문에 기분이 좀 가라앉은 모양이었다. 나중에 어떻게든 ${falcon.sex}에게 보답해야겠다고 생각했다.`,
    );
    era.set('cflag:46:축제이벤트표시', 0);
  };
};