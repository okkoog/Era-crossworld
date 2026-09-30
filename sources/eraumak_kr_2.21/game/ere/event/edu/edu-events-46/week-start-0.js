const era = require('#/era-electron');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.next_beginning = async (falcon, me, callname) => {
    await print_event_name(`First! 아이돌의 첫걸음`, falcon);
    await era.printAndWait(`훈련장\n`);
    era.printButton(`조금만 더 버텨! 마지막 한 바퀴!`, 1);
    await era.input();
    await falcon.say_and_wait(`……하아아아앗!`);
    await era.printAndWait(
      `${falcon.name}은 몸을 앞으로 기울이며 지면의 저항을 이겨내려 애썼고, 발밑의 대지에서는 묵직한 진동이 전해졌다.`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `이를 악물고 속도를 유지하려 노력한 ${falcon.name}은 모래판 위의 선명한 흰 선을 통과했다.`,
    );
    await me.say_and_wait(`수고했어!`);
    await era.printAndWait(
      `${me.name}은(는) 준비해둔 수건을 ${falcon.name}에게 건넸고, 팔코는 이마의 땀을 정성스럽게 닦아냈다.`,
    );
    await era.printAndWait(
      `모래 먼지와 땀이 뒤섞인 흔적이 ${falcon.sex}의 체육복에 딱 달라붙어 있었다.`,
    );
    await era.printAndWait(
      `격렬한 운동 직후 갑자기 앉는 것은 몸에 해롭기에, ${me.name}과(와) ${falcon.name}은 훈련장을 돌며 도란도란 이야기를 나누었다.`,
    );
    await falcon.say_and_wait(
      `${callname}⭐, 이번에는 지난번보다 더 나아졌어?`,
    );
    await era.printAndWait(
      `${me.name}은(는) 타이머를 꺼내 시간을 확인하고, 마지막 스퍼트가 남긴 깊은 발자국을 본 뒤 조용히 고개를 끄덕였다. 긍정적인 답변을 들은 ${falcon.get_teen_sex_title()}는 벅찬 마음을 주체하지 못하는지 ${me.name}의 앞을 앞질러 걸어갔다.`,
    );
    await falcon.say_and_wait(
      `야호⭐, 이제 ${falcon.get_uma_sex_title()} 아이돌의 길을 향해 나아갈 수 있겠어!`,
    );
    await me.say_and_wait(`${falcon.get_uma_sex_title()} 아이돌?`);
    await era.printAndWait(
      `${falcon.name}이 예전에 ${falcon.get_uma_sex_title()} 아이돌이라는 개념을 언급하긴 했지만, ${me.name}은(는) 그것이 정확히 무엇인지 확신이 서지 않았다.`,
    );
    await falcon.say_and_wait(
      `${falcon.get_uma_sex_title()} 아이돌, 줄여서 우마돌은 팔코가 만든 개념이야! 반짝반짝 빛나면서도 친근하고, 팬들과 함께 성장하며 곁에서 사랑과 희망을 주는 존재라구!`,
    );
    await me.say_and_wait(`개성을 강조하는 신인 아이돌 같은 느낌인가?`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 아이돌의 개념은 연예계의 신인 아이돌과 비슷해 보였다.`,
    );
    await me.say_and_wait(
      `${falcon.get_uma_sex_title()} 아이돌만의 특별한 점은 무엇일까?`,
      true,
    );
    await era.printAndWait(`그 생각을 하며 ${me.name}은(는) 광천수를 ${falcon.sex}에게 건넸다.`,);
    await me.say_and_wait(`일단 이 개념을 수첩에 적어둬야겠어.`, true);
    await falcon.say_and_wait(`팔코는 관객석의 모두에게 팔코가 반짝이는 모습을 계속 보여주고 싶어!`);
    await era.printAndWait(`도주 주법은 ${falcon.name}의 요구와 딱 맞아떨어졌다.`,);
    await me.say_and_wait(`모든 각질 중에서 가장 어울리는 건 역시 도주일 거야.`, true);
    await me.say_and_wait(`확실히 팔코다운 스타일이네.`);
    await era.printAndWait(
      `경기장이든 무대든 그 누구보다 빛나는 존재가 되기 위해 ${falcon.sex}는 이 방향을 선택한 것이었다.`,
    );
    await falcon.say_and_wait(
      `그야 팔코는 반짝반짝 빛나는 우마돌이니까⭐`,
    );
    await falcon.say_and_wait(
      `과거부터 지금까지, 그리고 앞으로의 미래까지 쭉 빛나게 될 ${falcon.get_uma_sex_title()} 아이돌이야!`,
    );
    await me.say_and_wait(
      `네가 도달할 곳이 어떤 풍경일지 나도 기대되기 시작했어.`,
    );
    await falcon.say_and_wait(`분명 최고의 장면이 될 거야!`);
    await falcon.say_and_wait(
      `아아, 팔코가 ${falcon.get_uma_sex_title()} 아이돌로서 무대에 선 장면을 상상만 해도 힘이 막~ 솟구쳐 나오는 기분이야!`,
    );
    await falcon.say_and_wait(
      `${callname}, 다음 목표는 뭐야?`,
    );
    await era.printAndWait(
      `${falcon.name}이 기운을 차린 듯 보이자, ${me.name}은(는) ${falcon.sex}가 억지로 힘을 내는 건 아닌지 조금 걱정되었다.`,
    );
    await me.say_and_wait(`그래도 이런 게 팔코다운 방식이겠지.`, true);
    era.printButton(`그럼 다시 측정을 시작하자`, 1);
    await era.input();
    await falcon.say_and_wait(
      `${callname}! 팔코는 이제 준비됐어!`,
    );
    await me.say_and_wait(`준비!`);
    await era.printAndWait(
      `${falcon.name}의 몸이 팽팽하게 긴장되었고, 눈동자는 정면의 코스를 날카롭게 응시했다.`,
    );
    await era.printAndWait(
      `출발 신호와 함께 피어오른 흙먼지는 더트 아이돌이 내디딘 첫걸음의 증거가 되었다.`,
    );
  };

  handlers[7] = async (falcon, me, callname) => {
    const tokino = get_chara_talk(301);
    await print_event_name(`앞으로도 잘 부탁해⭐`, falcon);
    await era.printAndWait(`2월 말은 1년 중 가장 추운 시기였다.`);
    await era.printAndWait(
      `도시의 하늘은 두꺼운 구름에 뒤덮였고, 갑자기 내린 폭설은 온 세상을 순백색으로 물들였다.`,
    );
    await era.printAndWait(
      `추운 날씨는 사람을 긴장하게 만들었고, 비록 휴일이었지만 ${me.name}은(는) 일찍 트레이닝실로 향했다.`,
    );
    await era.printAndWait(
      `${falcon.name}의 트레이닝은 궤도에 올랐고, 곧 있을 데뷔전도 큰 문제는 없을 터였다.`,
    );
    await era.printAndWait(`다만 신경 쓰이는 점은 ${falcon.name}의 발걸음이 꽤나 무겁다는 것이었다.`);
    await era.printAndWait(
      `덕분에 ${falcon.sex}를 위해 준비한 모래판 위의 스피드와 파워 트레이닝은 빠르게 진척되었다.`,
    );
    await era.printAndWait(
      `아마도 그런 튼튼한 기초가 있기에 장시간의 ${falcon.get_uma_sex_title()} 아이돌 활동 중에도 활기를 유지할 수 있는 것이리라.`,
    );
    await tokino.say_and_wait(`어머나, 오늘은 꽤 일찍 오셨네요?`);
    await era.printAndWait(
      `생각에 잠겨 있던 사이 시간은 금방 흘렀고, 타즈나 씨가 마치 당연하다는 듯 트레센 정문에 나타나 미소를 지으며 ${me.name}을(를) 바라보았다.`,
    );
    era.printButton(
      `귀여운 ${falcon.get_uma_sex_title()}들이 하루빨리 꿈을 향해 출발할 수 있기를 바라며 일찍 온 것뿐입니다. 그러고 보니 오늘 타즈나 씨도 정말 아름답군요.`,
      1,
    );
    await era.input();
    await tokino.say_and_wait(`후훗. 그런 빈말을 하셔도 좋은 건 안 나온다구요?`);
    await era.printAndWait(
      `가볍게 웃는 타즈나 씨는 흔들림 없는 태도를 보여주었다. 어떤 의미에서 ${falcon.sex}는 이상적인 성인 여성의 모습이었다.`,
    );
    await era.printAndWait(`서로 가볍게 목례를 나누는 것으로 예의상의 의식은 끝이 났다.`);
    await era.printAndWait(
      `${me.name}이(가) 어깨에 쌓인 눈을 털어내고 에어컨 온도를 30도로 올렸을 때——`,
    );
    await falcon.say_and_wait(`실례합니다⭐`);
    await era.printAndWait(`${falcon.name}이 트레이닝실 문을 벌컥 열고 들어왔다.`);
    era.printButton(`좋은 아침!`, 1);
    await era.input();
    await era.printAndWait(
      `문소리에 놀랄 틈도 없이, ${falcon.get_teen_sex_title()}의 입가에서 새어 나온 하얀 입김이 차가운 공기 속으로 흩어졌다. 하지만 ${falcon.name}의 열정은 식지 않은 상태였다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 좋은 아침! 오늘도 정말 기운차 보이네!`,
    );
    await era.printAndWait(`곧이어 ${falcon.name}의 활기찬 인사가 돌아왔다.`,);
    await era.printAndWait(
      `웃고 있는 ${falcon.name}의 손을 따라 시선을 내리자, ${me.name}의 눈은 ${falcon.sex}가 들고 있는 작은 양동이와 빗자루에 고정되었다.`,
    );
    await falcon.say_and_wait(
      `평소에 도움을 많이 받고 있으니까, 팔코는 오늘 봉사활동을 하려고 해!`,
    );
    await era.printAndWait(
      `${falcon.name}은 손에 든 양동이를 흔들었다. 만약 그 안에 물이 가득 차 있었다면 분명 밖으로 쏟아졌을 것이다.`,
    );
    await me.say_and_wait(`구체적으로 어떤 활동인데?`);
    await falcon.say_and_wait(
      `음— 다들 일어나기 전에 고가교랑 풀밭에 흘러 들어온 쓰레기들을 분리수거해서 버리려고⭐`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 아이돌이란 대체 무엇일까...(먼산)`,
    );
    await falcon.say_and_wait(
      `맞다, ${callname}도 같이 갈래?`,
    );
    era.printButton(`좋아.`, 1);
    era.printButton(`가고 싶지만, 처리해야 할 업무가 남았어.`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await falcon.say_and_wait(`그거 정말 잘됐다!`);
      await falcon.say_and_wait(`그럼 지체하지 말고 지금 당장 출발하자!`);
      await era.printAndWait(
        `${me.name}의 동의를 얻자 ${falcon.name}의 미소는 더욱 밝아졌다.`,
      );
      era.drawLine();
      await falcon.say_and_wait(`${callname}, 도망가게 두지 않을 거야⭐`);
      await era.printAndWait(
        `${falcon.name}은 마지막 쓰레기 조각까지 모아 검은 비닐봉지에 담았다.`,
      );
      await falcon.say_and_wait(`이제 이 쓰레기들을 전부 버리기만 하면 끝이야!`);
      await falcon.say_and_wait(`${callname}, 수고했어!`);
      await era.printAndWait(
        `그 후 ${falcon.sex}는 검은 비닐봉지를 예쁜 리본 모양으로 조심스럽게 묶었다.`,
      );
      await era.printAndWait(
        `평소 환경 보호에 대해 들어본 적은 많았지만, 직접 쓰레기를 주워보니 ${me.name}은(는) 그 의미를 더 깊이 이해할 수 있었다.`,
      );
      await era.printAndWait(
        `하지만 팔코에게 있어 이것은 자신을 응원해주는 팬들에게 보답하는 자신만의 방식일 것이다.`,
      );
      await era.printAndWait(
        `……이런 부분에서 의외로 ${falcon.get_teen_sex_title()}다운 고집이 있는 걸까?`,
      );
      await falcon.say_and_wait(
        `${callname}이 없었다면 라이브 시작 전까지 전부 처리하기 힘들었을 거야……`,
      );
      await falcon.say_and_wait(
        `팔코는 ${callname}한테 어떻게 감사를 표해야 할지 모르겠어.`,
      );
      await era.printAndWait(
        `사실 대부분의 쓰레기는 ${falcon.name}이 치웠기에, 도움을 받았다는 말은 겸손에 가까웠다.`,
      );
      await era.printAndWait(`어떻게 대답해주는 게 좋을까?\n`);
      era.printButton(`팔코의 공연을 미리 감상하게 해줄래?`, 1);
      era.printButton(`이번 중간고사에서 전부 합격해줘!`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await falcon.say_and_wait(
          `어라? 겨우 그걸로 되겠어? ${callname}의 요청이라면 기꺼이 들어줄게!`,
        );
        await me.say_and_wait(`팔코의 팬 1호로서 하는 요청이야!`);
        await falcon.say_and_wait(`에헤? 팬 1호라니…… 팔코, 좋은 생각이 났어!`);
        await era.printAndWait(
          `팬 1호라는 호칭이 팔코의 영감을 자극했는지, ${falcon.name}의 꼬리가 빳빳하게 섰다.`,
        );
        await falcon.say_and_wait(`음…… 그러니까…… 아냐…… 이게 더 좋겠다.`);
        await era.printAndWait(
          `${falcon.name}은 무대 뒤편(고작 고가교 밑 5제곱미터의 빈터)에 비닐봉지를 두고, 교복 주머니에서 마이크를 꺼냈다.`,
        );
        await falcon.say_and_wait(
          `지금부터 보여드릴 곡은 팔코가 방금 막 생각해낸 노래야♪ 팬 1호인 ${callname}의 요청으로 만든 베타 버전 노래라구♪`,
        );
        await falcon.say_and_wait(`그럼, 하나, 둘, 셋!`);
        await era.printAndWait(
          `아직 흩어지지 않은 하얀 안개, 희뿌연 하늘, 그리고 작은 빈터가 만들어낸 라이브가 지금 시작되었다.`,
        );
      } else if (ret1 === 2) {
        await falcon.say_and_wait(
          `에에에?! 설마 그런 요청을 할 줄이야.`,
        );
        await me.say_and_wait(
          `모르는 게 있으면 내가 가르쳐 줄 테니까, 도망칠 생각 같은 건 하지 마.`,
        );
        await era.printAndWait(`${falcon.name}은 조금 난처한 기색을 보였다.`);
        await falcon.say_and_wait(`그래도 팔코 노력해볼게! 팔코! 파이팅!`);
        await era.printAndWait(
          `활기찬 목소리에 놀란 근처 공원의 새들이 한참 동안 나무 위를 맴돌다 둥지로 돌아갔다.`,
        );
        await era.printAndWait(
          `트레센으로 돌아가는 길에 ${falcon.name}의 기분은 이전보다 훨씬 좋아 보였다.`,
        );
        await falcon.say_and_wait(
          `그러고 보니, ${callname}.`,
        );
        await falcon.say_and_wait(
          `${callname}도 따로 지켜보는 아이돌이 있어?`,
        );
        await era.printAndWait(
          `왜 갑자기 이런 질문을 하는지 알 수 없었지만...`,
        );
        await falcon.say_and_wait(`아, 대답 안 해도 돼! 아니, 역시 대답하지 말아줘.`);
        await era.printAndWait(
          `${me.name}이(가) 대답하려 하자 ${falcon.name}은 왠지 당황하며 안절부절못했다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 하늘을 바라보았다. 남빛 하늘은 지평선의 금빛에 서서히 자리를 내어주고 있었고, 곧 다시 세상의 소음이 시작될 터였다.`,
        );
      }
    } else {
      await falcon.say_and_wait(
        `${callname}, 역시 정말 바쁘구나.`,
      );
      await falcon.say_and_wait(
        `팔코가 멋대로 부탁한 거니까 ${callname}은 신경 쓰지 않아도 돼!`,
      );
      await era.printAndWait(
        `${falcon.name}은 약간 아쉬운 표정을 지었으나, 이내 평소의 밝은 모습으로 돌아왔다.`,
      );
      await me.say_and_wait(`조심해서 다녀와!`);
      await falcon.say_and_wait(
        `응! 팔코가 ${callname} 몫까지 힘내서 다 치우고 올게!`,
      );
      await era.printAndWait(
        `${me.name}은(는) ${falcon.name}의 귀가 쫑긋거리는 것을 보며 조용히 트레이닝실 문을 닫았다.`,
      );
      await era.printAndWait(
        `팔코의 노력 덕분에 강가에 떠다니던 쓰레기들은 전부 자취를 감추었다.`,
      );
    }
  };

  handlers[18] = async (falcon, me, callname, flags) => {
    await print_event_name(
      `${falcon.name} 대위기!?`,
      falcon,
    );
    await era.printAndWait(`5월 중순의 어느 날.`);
    await era.printAndWait(
      `트레이닝 계획은 착실히 진행되었고, ${falcon.name}이 아낌없이 홍보한 덕분에 강변의 거리 공연에도 조금씩 충성스러운 팬들이 생겨나기 시작했다.`,
    );
    await era.printAndWait(
      `현실은 예상보다 낙관적이었고, 어떤 답은 오직 실천을 통해서만 얻을 수 있다는 것을 깨달았다.`,
    );
    await era.printAndWait(
      `만족스러운 한숨을 내뱉고 나서야 ${me.name}은(는) 등에 땀이 흥건하다는 것을 알아차렸다.`,
    );
    await era.printAndWait(`봄에서 여름으로 넘어가는 시기는 확실히 작년보다 더 덥게 느껴졌다.`);
    await me.say_and_wait(
      `데뷔전도 머지않았으니, 이제 그동안의 성과를 증명할 때야!`,
    );
    await falcon.say_and_wait(`${callname}, 큰일 났어!`);
    await era.printAndWait(
      `그 생각을 하던 중, 갑자기 트레이닝실로 뛰어 들어온 그림자에 ${me.name}은(는) 깜짝 놀랐다.`,
    );
    await me.say_and_wait(`또 테스트 점수가 안 좋게 나왔나?`, true);
    await era.printAndWait(`예상 밖의 일이 아니었기에 어느 정도 각오는 하고 있었다.`);
    await falcon.say_and_wait(`그것도 중요하지만, 팔코가 마주한 건 그게 아냐!`);
    await era.printAndWait(
      `${me.name}은(는) 그제야 ${falcon.get_teen_sex_title()}가 거친 숨을 몰아쉬며 이마의 땀방울이 목덜미로 흘러내리는 것을 발견했다.`,
    );
    await era.printAndWait(`팔코는 이곳까지 한달음에 달려온 모양이었다.`);
    await me.say_and_wait(`무슨 일이야?`);
    await falcon.say_and_wait(
      `하아, 하아…… 그게, 팔코가 트레센 주변 사람들에게 ${falcon.get_uma_sex_title()} 아이돌을 알리려고 직접 만든 포스터랑 작은 사은품들을 나눠주고 있었거든.`,
    );
    await falcon.say_and_wait(
      `그런데 팔코에게 아주 싼 가격에 물건을 넘겨주던 잡화점이 갑자기 이사를 가버렸지 뭐야. 다른 가게들은 가격이 너무 비싸서 도저히 감당이 안 돼.`,
    );
    await falcon.say_and_wait(
      `지금까지는 어떻게든 버텨왔는데, 최근에는 원자재 가격까지 올라서 가격이 더 뛴대.`,
    );
    await falcon.say_and_wait(`이대로라면 팔코, 대위기야!`);
    await era.printAndWait(
      `상황을 파악하니 ${falcon.name}은 안정적인 공급처가 사라진 탓에 큰 혼란에 빠진 상태였다.`,
    );
    await era.printAndWait(`잠시 고민한 끝에 ${me.name}은(는) 결론을 내렸다.\n`);
    era.printButton(`다른 가게들을 한번 알아볼까?`, 1);
    era.printButton(`가장 중요한 건 팔코의 아이돌로서의 마음가짐이야!`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`그동안 ${falcon.name}이 쌓아온 인기를 고려해 보았다.`);
      await me.say_and_wait(
        `${falcon.get_uma_sex_title()} 아이돌로서 상점가 점포들과 협업 이벤트를 열어 자금을 마련하는 건 어때?`,
      );
      await me.say_and_wait(
        `팔코는 분위기를 띄우는 데 능숙하니까, 가게 홍보를 도와주면서 동시에 인지도도 쌓는 거지.`,
      );
      await me.say_and_wait(`그렇게 번 수익으로 이 시기를 잘 넘겨보자!`);
      await falcon.say_and_wait(`하지만 어디를 찾아가야 할까?`);
      await era.printAndWait(`이미 쌓인 인기를 활용할 구체적인 방안을 제시했다.`);
      await me.say_and_wait(`내가 옆에서 같이 도와줄게.`);
      await falcon.say_and_wait(`후우~ 살았다…… 정말 고마워!`);
      await era.printAndWait(
        `${falcon.name}은 기뻐하며 ${me.name}의 손을 잡고 뱅글뱅글 돌았다.`,
      );
      await era.printAndWait(`그러고 보니——`);
      await era.printAndWait(
        `모든 팬에게 평등한 팔코와, 나의 담당 ${falcon.get_uma_sex_title()}인 ${falcon.name}.`,
      );
      await era.printAndWait(`${falcon.name}에게는 어느 쪽이 더 중요할까?`);
      await era.printAndWait(
        `어지러운 회전 속의 여유 속에서 ${me.name}은(는) 문득 그런 의문이 들었다.`,
      );
      await me.say_and_wait(`……일단 눈앞의 일부터 처리하자.`, true);
      await era.printAndWait(
        `그 후 ${me.name}은(는) 아르바이트를 하는 다른 ${falcon.get_uma_sex_title()}들에게서 홍보 부족으로 고민하던 점주에 대한 정보를 얻었다.`,
      );
      await era.printAndWait(
        `결국 콜라보레이션은 수많은 방문객을 끌어들이며 대성공을 거두었고, 팔코는 정당한 보수와 보너스뿐만 아니라 우마터에서도 새로운 팬들을 대거 확보했다.`,
      );
    } else {
      await me.say_and_wait(`가장 중요한 건 팔코의 아이돌로서의 진심이야!`);
      await falcon.say_and_wait(`에헤?`);
      await me.say_and_wait(
        `겉모습과 화려함만 강조하는 모델보다는, 풋풋하고 귀여우며 팬들에게 더 가깝게 다가가는 게 바로 ${falcon.get_uma_sex_title()} 아이돌의 매력이라구!`,
      );
      await era.printAndWait(
        `열변을 토하던 ${me.name}이(가) 기세 좋게 책상을 내리쳤으나, 이내 손바닥에 전해지는 통증에 인상을 찌푸렸다.`,
      );
      await falcon.say_and_wait(
        `에? ${callname}의 말은 팔코가 홍보 수단에 너무 치중하느라 ${falcon.get_uma_sex_title()} 아이돌의 핵심을 놓치고 있다는 뜻이야?`,
      );
      await me.say_and_wait(
        `맞아! 모두에게 ${falcon.get_uma_sex_title()} 아이돌로서 활약하는 진정한 ${falcon.name}을 보여주자!`,
      );
      await falcon.say_and_wait(
        `알았어! 팔코, 진정한 ${falcon.get_uma_sex_title()} 아이돌이 되기 위해 더 노력할게!`,
      );
      await era.printAndWait(`그러고 보니——`);
      await era.printAndWait(
        `모든 팬에게 평등한 팔코와, 나의 담당 ${falcon.get_uma_sex_title()}인 ${falcon.name}.`,
      );
      await era.printAndWait(`${falcon.name}에게는 어느 쪽이 더 중요할까?`);
      await me.say_and_wait(`조금 분하긴 하지만, 아마 팔코에게는……`, true);
      await era.printAndWait(
        `이런 생각은 곧 팔코가 흥분해서 쏟아내는 수많은 아이디어 속에 묻혀버렸다.`,
      );
      await era.printAndWait(
        `${falcon.get_uma_sex_title()} 아이돌의 진심을 깨달은 ${falcon.name}은 특유의 섬세함과 감수성을 발휘해 수많은 팬들을 매료시켰다.`,
      );
    }
    flags.wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 10) ||
      flags.wait_flag;
  };

  handlers[23] = async (falcon, me, callname, flags) => {
    await print_event_name(`라벤더`, falcon);
    await era.printAndWait(`강가 풀밭.\n`);
    await falcon.say_and_wait(`줄곧 팔코를 응원해준 팬 여러분! 팔코가 드디어……`);
    await era.printAndWait(
      `계획대로 착실히 트레이닝을 진행한 ${falcon.name}은 이제 상당한 성과를 거두고 있었다.`,
    );
    await era.printAndWait(`곧 있을 데뷔전 준비도 이제 완벽했다.`);
    await falcon.say_and_wait(`${callname}?`);
    await era.printAndWait(
      `평소처럼 트레센으로 돌아가는 길을 함께 걷던 중, ${falcon.name}이 갑자기 ${me.name}을(를) 빤히 바라보았다.`,
    );
    await era.printAndWait(`레이스가 다가오니 불안해지는 것도 어쩔 수 없는 일이리라.`);
    await era.printAndWait(`지극히 자연스러운 현상이었다.`);
    await falcon.say_and_wait(`그러고 보니, 이건 팔코의 첫 무대네.`);
    await era.printAndWait(
      `${falcon.name}은 ${falcon.get_uma_sex_title()} 아이돌이라는 목표를 향해 곧장 달려왔다.`,
    );
    await falcon.say_and_wait(
      `${falcon.get_uma_sex_title()} 아이돌의 길을 걷기로 결심했을 때는 너무 설레서 밤잠을 설칠 정도였는데, 달력을 한 장 한 장 넘기다 보니 팔코, 지금은 조금……`,
    );
    era.printButton(`데뷔전이라서 무서운 거야?`, 1);
    await era.input();
    await falcon.say_and_wait(`아니, 무섭다기보다 그냥 기분이…… 조금 묘해.`);
    await era.printAndWait(
      `마치 제 꼬리를 쫓아 뱅글뱅글 돌던 아기 고양이가 실수로 종이 상자에 부딪혀 '타닥' 소리가 난 것 같은 느낌이었다.`,
    );
    era.printButton(`그렇구나.`, 1);
    await era.input();
    await falcon.say_and_wait(`하지만 팔코의 텐션은 지금 최고조라구!`);
    await falcon.say_and_wait(
      `아이돌 인생의 첫 데뷔 무대라니, 꼭 소설 속 주인공이 된 기분이야!`,
    );
    await falcon.say_and_wait(`이제 팔코가 반짝반짝 빛날 시간이야!`);
    await era.printAndWait(`${falcon.name}은 ${me.name}에게 미소를 지어 보였다.`);
    await falcon.say_and_wait(
      `……${callname}은(는) 앞으로도 계속 팔코 곁에서 팔코를 응원해줄 거지?`,
    );
    era.printButton(`당연하지.`, 1);
    await era.input();
    await falcon.say_and_wait(
      `우으— ${callname}은 다른 ${falcon.get_uma_sex_title()}들에게도 그렇게 말해?`,
    );
    await era.printAndWait(`${me.name}은(는) ${falcon.name}의 혼잣말을 못 들은 척 넘겼다.`);
    flags.wait_flag =
      get_attr_and_print_in_event(46, [0, 0, 10, 0, 0], 0) || flags.wait_flag;
  };

  handlers[30] = async (falcon, me, callname, flags) => {
    await print_event_name('영원히 계속되길 바라는 일상', falcon);
    await falcon.say_and_wait(
      `${callname}, 팔코가 이번에 공연하기 딱 좋은 장소를 찾았는데, 같이 가서 봐줄 수 있어?`,
    );
    await era.printAndWait(
      `${me.name}은(는) 서류 더미에서 고개를 들어 ${falcon.name}과 눈을 맞추었다.`,
    );
    await me.say_and_wait(`우와앗.`);
    await era.printAndWait(
      `갑자기 얼굴을 쑥 들이민 ${falcon.name}은 장난에 성공했다는 듯 미소를 지었다.`,
    );
    await me.say_and_wait(`너무 가깝잖아!`, true);
    await era.printAndWait(
      `곰곰이 생각해보니 ${falcon.sex}도 한창 감수성이 예민할 시기이니 이런 행동도 자연스러운 일이었다.`,
    );
    await me.say_and_wait(
      `팔코의 노력을 부정하는 건 아니지만, 요즘 아이돌 활동이 너무 잦은 거 아냐?`,
    );
    await me.say_and_wait(
      `이상적인 미래를 향해 나아가는 건 좋지만, 시험에서 낙제하면 발목을 잡힐 수도 있어.`,
    );
    await falcon.say_and_wait(
      `앗! ……그게…… 팔코도 반성 중이야. 그러니까 아이돌 활동도 시간과 장소를 잘 고려해서 하고 있다구.`,
    );
    await era.printAndWait(
      `${falcon.name}은 딴청을 피우는 듯 보였으나, ${me.name}이(가) 헛기침을 하자 그제야 허둥지둥 변명을 늘어놓았다.`,
    );
    await me.say_and_wait(`거짓말하는 사람은 눈을 못 마주친다던데.`);
    await era.printAndWait(
      `그 말에 당황하며 ${me.name}의 두 눈을 똑바로 응시하려 애쓰는 ${falcon.name}의 모습을 보고 ${me.name}은(는) 한 가지 확신을 가졌다.`,
    );
    await me.say_and_wait(
      `역시…… 공부는 안 하고 있구나. 만약 팔코가 이번 중간고사를 제대로 공부하겠다고 약속한다면, 나도 ${me.name}의 부탁을 들어줄게.`,
    );
    await falcon.say_and_wait(
      `에에에? ${callname}, 어떻게 안 거야?`,
    );
    await era.printAndWait(
      `${falcon.name}의 표정은 연기가 아닌 것 같았지만, 가슴 한구석에는 여전히 알 수 없는 불안감이 남았다.`,
    );
    await me.say_and_wait(`이대로라면 팔코, 정말 괜찮은 걸까?`, true);
    await era.printAndWait(`앞으로의 계획을 조금 수정해야 할지도 모르겠다.`);
    await me.say_and_wait(`당분간 돌발 라이브는 좀 쉬는 게 어때?`);
    await falcon.say_and_wait(`싫어!`);
    await era.printAndWait(`${falcon.name}의 반응은 생각보다 훨씬 격렬했다.`);
    await falcon.say_and_wait(
      `아니! 팔코 말은 그런 뜻이 아냐! 공부도 열심히 할게! 그러니까 라이브는 꼭 해야만 한다구!`,
    );
    await era.printAndWait(
      `일단 ${falcon.name}의 약속을 받아내긴 했다. 아이돌 활동을 이토록 소중히 여기는 팔코의 성격상, 당분간 담임 선생님과 추격전을 벌일 걱정은 덜어도 될 듯했다.`,
    );
    await falcon.say_and_wait(
      `으음— 팔코가 무슨 말을 하려고 했더라…… 아, 맞다! ${callname}?`,
    );
    await era.printAndWait(`${falcon.name}이 ${me.name}의 눈을 똑바로 쳐다보았다.`);
    await falcon.say_and_wait(
      `팔코, ${callname}과 꼭 같이 가보고 싶은 곳이 있어.\n\n\n`,
    );
    await era.printAndWait(
      `${falcon.name}의 손에 이끌려 ${me.name}이(가) 도착한 곳은 어느 넓은 빈터였다.`,
    );
    await era.printAndWait(
      `주변에 높은 건물이 없어서 그런지, 평소보다 하늘이 훨씬 가깝게 느껴졌다.`,
    );
    await era.printAndWait(
      `여름이 다가와서인지 공기는 이전보다 습했고, 구름 사이를 뚫고 내려온 햇살이 풀밭 위에 얇은 안개 층을 만들고 있었다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 여기 어때 보여?`,
    );
    await era.printAndWait(
      `${falcon.name}은 ${me.name}의 손목을 흔들며 억누를 수 없는 설렘을 담아 의견을 물었다.`,
    );
    await era.printAndWait(
      `이 번화한 도심 한복판에서 이런 빈터를 찾아내기까지 팔코도 꽤나 많은 시간을 들였을 터였다.`,
    );
    await era.printAndWait(
      `아니, 생각해보면 원래 대형 쇼핑몰이 들어설 예정이었으나 여러 사정으로 방치되어 식물들의 낙원이 된 땅인 듯했다.`,
    );
    await falcon.say_and_wait(
      `음— 연습의 일환으로 ${callname}이 팔코의 파트너가 되어줄 수 있어?`,
    );
    await me.say_and_wait(`응?`);
    await era.printAndWait(
      `태양을 등지고 선 ${falcon.name}의 표정은 잘 보이지 않았으나, 끊임없이 실룩거리는 귀를 보니 ${falcon.sex}가 큰 용기를 내어 내린 결정임을 알 수 있었다.`,
    );
    await era.printAndWait(
      `핑계를 대려면 좀 더 그럴싸한 걸 찾지 싶었지만, ${falcon.sex}의 그 진심 어린 마음을 거절하기란 참 어려운 일이었다.`,
    );
    era.printButton(`좋아, 맡겨줘. 팔코.`, 1);
    await era.input();
    await falcon.say_and_wait(
      `${callname}이 싫다면 어쩔 수 없지만…… 에?`,
    );
    await era.printAndWait(
      `${me.name}이(가) 이렇게 흔쾌히 수락할 줄은 몰랐는지 ${falcon.name}은 잠시 멍하니 있다가 이내 수줍게 ${me.name}의 손을 잡았다.`,
    );
    await falcon.say_and_wait(`정말 영광이야⭐`);
    await era.printAndWait(
      `${falcon.sex}는 묘하게 들뜬 목소리로 ${me.name}에게 대답했다.`,
    );
    await era.printAndWait(
      `하늘은 그 어느 때보다 지면과 가까웠고, 풀과 흙이 뒤섞인 숨결 속에 녹아들었다. 처음에는 ${falcon.name}의 리듬에 맞추려 노력했으나, 격렬한 몸짓 끝에 결국 기운이 다한 ${me.name}은(는) 풀밭 위에 털썩 주저앉고 말았다.`,
    );
    await falcon.say_and_wait(`${callname}!`);
    await era.printAndWait(
      `비록 어지럼증이 가시지 않았지만, ${falcon.name}의 흥분과 기쁨만큼은 고스란히 전해졌다.`,
    );
    await falcon.say_and_wait(`미안해, 팔코가 너무 신났나 봐.`);
    await era.printAndWait(`가느다란 팔의 조심스러운 이끌림에 다시 몸을 일으켰다.`);
    era.printButton(`아이돌이라는 게 생각보다 그렇게 멀게만 느껴지는 존재는 아니네.`, 1);
    await era.input();
    await era.printAndWait(`털썩.`);
    await era.printAndWait(
      `혼잣말 섞인 만족감과 함께, 어린 시절 운동장을 전력 질주한 뒤 그랬던 것처럼 풀밭 위에 그대로 누워버렸다.`,
    );
    await era.printAndWait(`황홀경 속에서 마치 아무 걱정 없던 어린 시절로 돌아간 것 같았다.`);
    await era.printAndWait(`세차게 뛰는 심장 소리가 자신의 존재를 힘있게 증명하고 있었다.`);
    await era.printAndWait(`그래, 이 행복한 기분을 그대로 간직한 채 영원히——`);
    await falcon.say_and_wait(
      `엣! ${callname}, 격렬한 운동 후에 풀밭에 바로 누우면 안 돼!`,
    );
    await era.printAndWait(`가느다란 팔에서 느껴지는 엄청난 힘에 이끌려 다시 상체가 일으켜졌다.`);
    await era.printAndWait(`으음, 왠지 좀 그리운 기분이네.`);
    await era.printAndWait(`슬픔과 그리움, 그리고 후련함이 뒤섞인 복잡한 감정이 마음속에 차올랐다.`);
    await me.say_and_wait(`하지만 지금의 나도 딱히 불행하지는 않아.`, true);
    await era.printAndWait(`이런 일상이 영원히 계속될 수만 있다면.`);
    await era.printAndWait(
      `무심코 고개를 들어 바라본 새파란 하늘 위로 뭉게구름 몇 점이 자유롭게 흘러가고 있었다.`,
    );
    flags.wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 10) ||
      flags.wait_flag;
  };

  handlers[40] = async (falcon, me, callname, flags) => {
    await print_event_name('야래향', falcon);
    await era.printAndWait(
      `더트 레이스에서 ${falcon.name}의 이름을 알리기 위해 ${me.name} 일행은 앞으로 참가할 레이스들을 계획하기 시작했다.`,
    );
    await era.printAndWait(`심야 트레이너 기숙사\n`);
    await era.printAndWait(
      `데뷔전에서 수집한 데이터들을 다시 정리한 후, 다음 날의 계획을 메모장에 기록했다.`,
    );
    await era.printAndWait(`막 휴식을 취하려던 찰나——`);
    await era.printAndWait(`——위잉, 위잉`);
    await era.printAndWait(`스마트폰이 진동하기 시작했다.`);
    await era.printAndWait(`이미 깊은 밤인데, 이 시간에 전화를 받아야 할까?`);
    era.printButton(`받는다`, 1);
    era.printButton(`받지 않는다`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`심야에 온 메시지라면 받지 않을 이유가 없겠지.`);
      await era.printAndWait(`그렇게 생각하며 ${me.name}은(는) 스마트폰을 확인했다.`);
      await falcon.say_and_wait(
        `안녕! ${callname}, 자고 있었어?`,
      );
      await era.printAndWait(
        `시계를 보니 이미 자정이 넘은 시각이었다. 밀려오는 졸음에 당신도 모르게 하품이 나왔다.`,
      );
      await era.printAndWait(
        `${falcon.name}이 왜 이렇게 늦은 시간에 연락을 했을까? 급한 일이 있다면 룸메이트에게 먼저 물어봤을 텐데 왜 나를 찾은 걸까?`,
      );
      await era.printAndWait(`아니면 오직 나만이 해결해줄 수 있는 일인 걸까?`);
      await era.printAndWait(
        `말투를 어떻게 해야 할지 고민하며 ${falcon.name}의 의도를 곰곰이 생각해보았다.`,
      );
      await era.printAndWait(`메시지를 보낸 지 얼마 지나지 않아 다시 진동이 울렸다.`);
      await falcon.say_and_wait(
        `대단한 일은 아니지만, 팔코는 역시 ${callname}에게 물어보는 게 가장 좋을 것 같아서.`,
      );
      await era.printAndWait(
        `${falcon.name}은 ${me.name}을(를) 의지할 수 있는 어른으로 생각하고 있는 모양이었다.`,
      );
      await era.printAndWait(`조금 뿌듯하기도 했지만…… 한편으론 어떻게 대처해야 할지 망설여졌다.`);
      era.printButton(`무슨 일이 있었는지 말해줘.`, 1);
      era.printButton(`오늘은 자고 내일 직접 이야기해야지...`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await me.say_and_wait(
          `팔코에게 어려운 일이 있다면 언제 어디서든 나랑 상담해도 좋아.`,
        );
        await era.printAndWait(
          `답장을 기다리는 시간은 생각보다 길었다. ${me.name}이(가) 깜빡 잠들기 직전, 한꺼번에 10개 이상의 메시지가 쏟아졌다.`,
        );
        await falcon.say_and_wait(
          `……${callname}에게라면 가끔은 약한 소리를 해도 괜찮겠지?`,
        );
        await falcon.say_and_wait(
          `데뷔전이 끝난 뒤에 팔코는 새로운 더트 아이돌로서 꽤 많은 팬을 얻었어.`,
        );
        await falcon.say_and_wait(
          `덕분에 매일 아침 열리는 라이브를 보러 오는 사람들도 점점 늘어났구.`,
        );
        await falcon.say_and_wait(
          `그런데 어제 라이브에서는 늘 보이던 익숙한 얼굴들이 몇 명 안 보이더라고.`,
        );
        await falcon.say_and_wait(
          `팬들과 소통하는 시간에도 「실제 아이돌은 버추얼 아이돌보다 못하다」라는 평가를 들었어.`,
        );
        await falcon.say_and_wait(
          `팔코는 딱히 그런 일에 신경 쓰지 않지만⭐, 그래도 왠지 마음 한구석이 텅 빈 느낌이야.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 상대방이 몇 번이고 문장을 고쳐 쓰며 감정을 억눌렀을 모습을 거의 상상할 수 있었다.`,
        );
        await era.printAndWait(
          `요즘 학생들은 타자 속도가 나 때보다 훨씬 빠르구나 감탄하며, 신중하게 한 자 한 자 답장을 적어 내려갔다.`,
        );
        await era.printAndWait(
          `전통적인 아이돌은 버추얼 아이돌보다 훨씬 더 생생한 「실재감」을 가지고 있었다. 비록 버추얼 아이돌의 등장이 커다란 열풍을 일으키긴 했지만.`,
        );
        await era.printAndWait(`그럼에도 버추얼 아이돌에게는 분명한 한계가 존재했다.`);
        await era.printAndWait(
          `가장 결정적인 점은 버추얼 아이돌은 레이스 참가자로서 직접 무대 위에 설 수 없다는 사실이었다.`,
        );
        await era.printAndWait(
          `레이스 ${falcon.get_uma_sex_title()}인 ${falcon.name}은 레이스 속에서의 활약을 통해 관객들에게 자신만의 이야기를 직접 들려줄 수 있었다.`,
        );
        await era.printAndWait(
          `기술이 나날이 발전하는 세상이라 해도, 그것만으로 전통적인 아이돌의 자리는 충분히 지켜질 수 있었다.`,
        );
        await era.printAndWait(
          `적절한 논거를 선택하며 전통적인 아이돌의 강점을 머릿속으로 정리해나갔다.`,
        );
        await falcon.say_and_wait(
          `고마워, ${callname}! 이제 팔코는 아이돌의 길을 더 열심히 걸어갈 수 있을 것 같아!`,
        );
        await era.printAndWait(`곧이어 팔코에게서 기뻐하는 표정의 이모티콘이 도착했다.`);
        await falcon.say_and_wait(`팔코, 하루빨리 톱 우마돌이 되고 싶어!`);
        await era.printAndWait(
          `다음 날, 다시 활기를 되찾은 ${falcon.name}은 자신을 응원해주는 팬들에게 최고의 퍼포먼스를 선사했다.`,
        );
      }
    } else {
      await era.printAndWait(`이미 너무 늦은 시간이다. 할 말이 있다면 내일 하는 게 낫겠지.`);
      await era.printAndWait(
        `스마트폰을 방해 금지 모드로 설정한 뒤, ${me.name}은(는) 다시 깊은 잠에 빠져들었다.`,
      );
    }
    flags.wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 10) ||
      flags.wait_flag;
  };
};