const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[143 + 1] = async (urara, me, _, callname) => {
    await print_event_name('완결된 이야기를 넘어——', urara);
    await era.printAndWait([
      '대기용 통로 안, ',
      me.get_colored_name(),
      '은(는) 워밍업 중인 ',
      urara.get_colored_name(),
      '에게 평소와 다름없는 당부를 건넸다.',
    ]);

    era.printButton('「우라라, 오늘 기분은 어때? 무슨 일이 있으면 꼭 말해줘야 해.」', 1);
    await era.input();

    await urara.say_and_wait(
      '아무 문제 없어! 지난번처럼 달리면 되는 거지? 그럼 오늘도 『우라라』하게 가보자고!',
    );
    await era.printAndWait([
      '그래, 지금은 평소처럼만 하면 된다…… 비록 ',
      me.get_colored_name(),
      '의 기억으로는 이 「지난번」이 바로 지난달 말의 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '였지만 말이다.',
    ]);
    const rank = RaceHistory.get(52).get_result(95 + 48)?.rank;
    if (rank === 1) {
      await era.printAndWait([
        urara.get_colored_name(),
        '가 일궈낸 「기적의 우승」 덕분에, 그 레이스의 열기는 오늘날까지도 가라앉지 않고 있었다.',
      ]);
      await era.printAndWait([
        '하지만 사람들의 마음을 뒤흔든 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '의 1착보다도, ',
        urara.get_colored_name(),
        '는 모두의 도움 속에서 더욱 소중한 보물들을 얻었다.',
      ]);
      await era.printAndWait([
        '레이스가 끝난 뒤, 분명 모두가 웃고 있었음에도 ',
        urara.get_colored_name(),
        '와 ',
        me.get_colored_name(),
        '은(는) 가득 찬 관객들 앞에서 서로를 껴안고 울음바다가 되고 말았다.',
      ]);
      await era.printAndWait(
        '당시 포착된 그 꼴사나우면서도 눈부신 모습은, 지금도 여러 인터넷 커뮤니티에서 널리 회자되고 있다……',
      );
    } else if (rank <= 5) {
      await era.printAndWait(
        '비록 레이스 결과는 약간의 아쉬움이 남는 위치였으나, 모든 이들의 마음속에는 그 무엇보다도 값진 성적이었다.',
      );
      await era.printAndWait([
        '게다가 그 이전에 ',
        urara.get_colored_name(),
        '는 모두의 도움을 받아 승리보다 소중한 것을 수확했다.',
      ]);
      await era.printAndWait([
        '별일 아니라고 애써 말해 보아도, 꼬마 ',
        urara.get_uma_sex_title(),
        '가 결승선을 통과하는 순간, 모두가 약속이라도 한 듯 눈물을 터뜨리고 말았다.',
      ]);
      await era.printAndWait([
        '눈물에 담긴 감정은 다양했으나, 오직 변하지 않는 것은 ',
        urara.get_colored_name(),
        '의 성장을 지켜본 감동이었으리라……',
      ]);
    } else if (rank !== undefined) {
      await era.printAndWait([
        '레이스 결과는 어느 정도 예상 범위 내였으나, ',
        urara.get_colored_name(),
        '는 여전히 모든 이들의 축복을 받았다.',
      ]);
      await era.printAndWait([
        '게다가 그 이전에 ',
        urara.get_colored_name(),
        '는 모두의 도움을 받아 승리보다 소중한 것을 수확했다.',
      ]);
      await era.printAndWait([
        '별일 아니라고 애써 말해 보아도, 꼬마 ',
        urara.get_uma_sex_title(),
        '가 결승선을 통과하는 순간, 모두가 약속이라도 한 듯 눈물을 터뜨리고 말았다.',
      ]);
      await era.printAndWait([
        '눈물에 담긴 감정은 다양했으나, 오직 변하지 않는 것은 ',
        urara.get_colored_name(),
        '의 성장을 지켜본 감동이었으리라……',
      ]);
    }
    await era.printAndWait([
      '그리고 시니어 시즌이 끝난 지금, ',
      urara.get_colored_name(),
      '의 검사 결과는 더욱 놀라웠다.',
    ]);
    await era.printAndWait([
      '분명 3년 동안 달려왔음에도 불구하고, ',
      urara.sex,
      '의 본격화는 쇠퇴할 기미를 보이기는커녕 오히려 새로운 상승의 여지를 보이고 있었다.',
    ]);
    await era.printAndWait([
      '물론 최근의 일을 겪으며 ',
      urara.get_colored_name(),
      '와 가깝게 지낸 이들이라면 누구나 이 현상의 근원을 짐작할 수 있을 것이다.',
    ]);
    await era.printAndWait([
      '비록 「',
      urara.sex,
      '」는 여전히 부끄러움을 타며 모습을 숨기고 있었지만, 예전의 「폐쇄적」이었던 때와 달리 가끔은 시선 끝에서 또 다른 분홍색 잔상을 엿볼 수 있었다.',
    ]);
    await era.printAndWait([
      '물론 지금 「아리마 직후 여세를 몰아」출주 하는 것 같지만…… 사실 ',
      urara.get_colored_name(),
      '가 달리고 싶다고 떼를 쓰는 바람에 ',
      me.get_colored_name(),
      '이(가) ',
      urara.sex,
      '를 이기지 못했을 뿐이다.',
    ]);

    era.printButton(
      '「하지만 지금 생각해보면, 이야기에 마침표를 찍기에는 확실히 이른 것 같네……」',
      1,
    );
    await era.input();

    await era.printAndWait([
      urara.get_colored_name(),
      '의 결정을 따르며 ',
      me.get_colored_name(),
      '은(는) 최근의 변화들을 떠올렸다. 단 한 달이라는 짧은 시간도 많은 것을 바꾸기에 충분했다.',
    ]);
    await era.printAndWait(
      '트레센의 친구들은 말할 것도 없고, 다리 부상으로 은퇴했던 동급생도 기운을 차려 미래의 목표를 찾은 듯했다.',
    );
    await era.printAndWait([
      '트레이너가 되기 위한 먼 길은 이제 막 시작되었을 뿐이지만, ',
      me.get_colored_name(),
      '은(는) 언젠가 다시 ',
      urara.sex,
      '를 만나게 될 것이라 직감했다.',
    ]);
    await era.printAndWait(
      '상점가 사람들은 현대식 쇼핑몰을 어떻게 도입할지 논의 중이었다. 이는 타협하려는 것이 아니라, 변화가 가져올 잠재력을 탐색하려는 시도였다.',
    );
    await era.printAndWait([
      '기존의 대항과 부흥보다는, 이제 모두가 ',
      urara.get_colored_name(),
      '에게 영감을 받아 신시대와의 협력과 상생을 시도하기 시작한 것이다.',
    ]);
    await urara.say_and_wait(
      '맞아! 모두가 앞으로 나아가고 있으니까, 내가 할 수 있는 한 나도 계속 달릴 거야!',
    );
    await urara.say_and_wait([
      '게다가 ',
      urara.sex,
      '도 계속 이쪽을 지켜봐 주고 있어. 이젠 슬픈 표정이 아니라 아주 즐거워 보여!',
    ]);
    await urara.say_and_wait([
      '그러니까 이전에 무슨 일이 있었든 간에, 지금은 ',
      callname,
      '도 우라라가 달리는 모습을 똑똑히 지켜봐 줘야 해!',
    ]);

    era.printButton('「당연하지, 지금의 우라라는 『무적』이니까!」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 인정을 받으며 호흡을 가다듬고 승부복을 정리한 ',
      urara.get_colored_name(),
      '는 안내 방송의 입장 신호에 맞춰 앞으로 발을 내디뎠다.',
    ]);

    era.printButton('「이제 나갈 차례네. 우라라, 이길 수 있을 것 같아?」', 1);
    await era.input();

    await urara.say_and_wait(
      '응! 오늘의 나는 반드시 이길 거야! 아주 가뿐하게 이겨버릴 테니까!',
    );
    await era.printAndWait([
      '햇살을 받으며 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 처음 만났을 때와 다름없는 순수한 미소를 지어 보였다.',
    ]);
    await urara.say_and_wait([
      '그럼 다녀올게! 질문! ',
      callname,
      ', 우라라는 어떻게 달려야 할까——?',
    ]);
    await era.printAndWait([
      '빛 속에 서 있는 ',
      urara.get_colored_name(),
      '의 웃는 얼굴을 마주하며, ',
      me.get_colored_name(),
      '은(는) 다시 한번 힘차게 ',
      urara.sex,
      '에게 응답했다.',
    ]);

    era.printButton('「어찌 됐든, 즐겁게 가보자——!」', 1);
    await era.input();
    sys_like_chara(52, 0, 20, true, 10) && (await era.waitAnyKey());
  };

  handlers.ticket = async (urara, me, in_urara, callname) => {
    await print_event_name('마음이 편안해지는 안개 너머', urara);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 함께 수많은 레이스를 달려온 어느 날, ',
      me.get_colored_name(),
      '은(는) 트레이닝실 서랍 속에서 낯익은 추첨권 한 장을 찾아냈다.',
    ]);
    await era.printAndWait([
      '그와 동시에 트레이닝실 문이 「쾅」 소리를 내며 열리더니, 벚꽃색 번개 하나가 실내로 날아 들어왔다.',
    ]);
    await urara.say_and_wait([
      callname,
      '! 자율 트레이닝 다 끝냈어──! 이제 뭐 하면 될까?',
    ]);
    await era.printAndWait([
      '웃는 얼굴에 맺힌 땀방울을 닦아내며, 땀에 젖은 체육복 차림의 ',
      urara.get_colored_name(),
      '는 오늘도 힘차게 반짝이고 있었다.',
    ]);

    era.printButton('「오! 수고했어! 일단 좀 쉬자!」', 1);
    await era.input();

    await urara.say_and_wait(['알았어──!']);
    await era.printAndWait([
      '다른 잡동사니들을 서랍 속으로 밀어 넣으며, ',
      me.get_colored_name(),
      '은(는) 자리에서 일어나 평소보다 더욱 노력한 꼬마 ',
      urara.get_uma_sex_title(),
      '를 맞이했다.',
    ]);
    await era.printAndWait([
      '그러다 문득 책상 위에 꺼내둔 「작은 보상」을 본 ',
      me.get_colored_name(),
      '은(는) 좋은 생각이 떠오른 듯 자신의 주위를 맴도는 꼬마 ',
      urara.get_uma_sex_title(),
      '에게 말을 건넸다.',
    ]);

    era.printButton(
      '「우라라, 이제 슬슬 좀 쉬어줘야 하지 않겠어? 우리 온천권 있었던 거 기억나?」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '온천권…… 아! 그때 상점가에서 뽑았던 거? 우라라, 하마터면 잊어버릴 뻔했어!',
    ]);
    await urara.say_and_wait([
      '그런데 왜 갑자기 지금 가자는 거야? 설마 ',
      callname,
      '도 잊고 있다가 이제야 생각난 거야?',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 갈수록 예리해지는군. 유효 기간이 임박한 티켓 날짜를 훑어보며 ',
      me.get_colored_name(),
      '은(는) 쓴웃음을 지었다.',
    ]);
    await era.printAndWait([
      '하지만 지금의 ',
      urara.get_colored_name(),
      '는 예전보다 스케줄에 여유가 있는 편이었고, 기분 전환을 하러 가는 것도 좋은 일이기에 티켓을 묵혀둘 이유는 없었다.',
    ]);

    era.printButton(
      '「아무튼…… 늦게나마 주는 상이라고 생각하고, 우라라는 어떤 친구랑 같이 가고 싶어?」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '에? ',
      callname,
      '는 안 가? 나는 친구들보다는 ',
      callname,
      '랑 같이 가고 싶은걸!',
    ]);

    era.printButton('「어른이랑 가는 것보다 친구들이랑 가는 게 더 자유롭지 않겠어?」', 1);
    await era.input();

    await era.printAndWait([
      '「어른」의 관점에서 질문을 던지는 ',
      me.get_colored_name(),
      '에게, 여전히 「아이」를 대변하는 ',
      urara.get_colored_name(),
      '는 당연하다는 듯이 대답했다.',
    ]);

    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        '하지만 ',
        callname,
        '도 휴식이 필요하잖아? 우라라만 상을 받는 건 안 돼!',
      ]);
      await urara.say_and_wait([
        '방금 ',
        callname,
        '가 말한 것처럼, ',
        callname,
        '에게도 이건 뒤늦게 찾아온 상이야!',
      ]);
    } else {
      await urara.say_and_wait([
        '이건 우라라랑 ',
        callname,
        '가 같이 뽑은 거니까, 처음부터 우라라만의 것이 아니었어!',
      ]);
      await urara.say_and_wait([
        '그러니까 이 티켓에는 ',
        callname,
        '의 몫도 있는 거니까, 당연히 ',
        callname,
        '와 같이 가야 한다고 생각해!',
      ]);
    }
    if (era.get('love:52') >= 75) {
      await era.printAndWait([
        '말을 마친 뒤 잠시 머뭇거리던 ',
        urara.get_colored_name(),
        '는 이내 「연인」으로서의 미소를 지었다.',
      ]);
      await urara.say_and_wait([
        '그리고 내 생각엔, 좋아하는 사람이랑 같이 온천에 가는 데 많은 이유는 필요 없다고 보거든. 그치?',
      ]);
    }

    await era.printAndWait([
      '이토록 간곡한 권유를 받으니 더는 거절하기 어려웠다. 담당 우마무스메의 기대 어린 시선을 받으며 ',
      me.get_colored_name(),
      '은(는) 의자 등받이에 걸쳐둔 외투를 집어 들었다.',
    ]);

    era.printButton('「준비할 게 뭐가 있는지 좀 생각해볼게. 내일 바로 출발해도 괜찮을까?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 그럼 우라라도 돌아가서 준비할게! 내일 정문 앞에서 봐──',
    ]);
    await era.printAndWait([
      '꼬마 ',
      urara.get_uma_sex_title(),
      '는 ',
      me.get_colored_name(),
      '의 대답을 듣자마자 다시 문밖으로 날아갔다. 저렇게 좋아하는 모습을 보니 아무런 문제 없이 지나가면 좋으련만.',
    ]);
    await era.printAndWait([
      '하지만 두 사람이 짐을 들고 한껏 들뜬 마음으로 여관 안내 데스크에 도착했을 때, 예외 없이 「예외적인 상황」이 그들을 기다리고 있었다.',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '종업원',
      '정말 죄송합니다. 현재 본 여관의 싱글룸은 모두 만실이라……',
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '종업원',
      '대신 보상의 의미로, 작은 개인 온천탕이 딸린 트윈룸을 제공해 드릴 수 있습니다만, 손님들께선 어떠신가요?',
    );

    if (me.sex_code === 1) {
      await era.printAndWait([
        '오자마자 이런 당황스러운 전개가 펼쳐지다니, 여행운이 참 지독하게도 없다. 하지만 여기까지 온 이상 별다른 방도가 없었다.',
      ]);
      await era.printAndWait([
        '게다가 옆에서 여전히 기대로 가득 찬 눈을 하고 있는 꼬마 ',
        urara.get_colored_name(),
        '를 보니, ',
        me.get_colored_name(),
        '에게 그냥 돌아간다는 선택지는 없었다.',
      ]);
      await era.printAndWait(['그나저나 이런 상황에서 오늘 밤 공간 배분은 또 어떻게 해야 할지……']);
      await era.printAndWait([
        '안내 데스크에서 방 열쇠를 건네받은 ',
        me.get_colored_name(),
        '은(는) 약간 복잡한 심경으로 짐을 들고 ',
        urara.get_colored_name(),
        '와 함께 여관 복도로 들어섰다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        '보다 한발 앞서 방으로 돌아온 ',
        me.get_colored_name(),
        '은(는) 옷을 벗고 수건을 챙겨 온천탕으로 이어지는 미닫이문을 열었다.',
      ]);
      await era.printAndWait([
        '길게 숨을 내쉬며 따뜻한 온천수에 몸을 담그고, 별이 쏟아지는 밤하늘을 올려다보며 ',
        me.get_colored_name(),
        '은(는) 편안하게 눈을 감았다.',
      ]);
      await era.printAndWait([
        '벌써 3년이라니. 처음 만났을 때는 그저 어린아이 같았던 ',
        urara.get_colored_name(),
        '도 이제 서서히 성숙한 자태를 갖춰가고 있구나……',
      ]);
      await era.printAndWait([
        '그렇게 한가로운 평화에 젖어 있을 무렵, 미닫이문이 ',
        urara.get_teen_sex_title(),
        '의 즐거운 외침과 함께 「거칠게」 열려 젖혀졌다.',
      ]);
      await urara.say_and_wait([
        '헤헤～ ',
        callname,
        '가 돌아오기 전에 우라라가 먼저 들어가 있어야지──!',
      ]);
      await era.printAndWait([
        '눈을 뜰 새도 없이, 평온한 분위기를 깨뜨린 꼬마 ',
        urara.get_uma_sex_title(),
        '는 탕가에서 훌쩍 뛰어올라 거센 물보라를 일으키며 탕 안으로 뛰어들었다.',
      ]);
      await era.printAndWait([
        '방금 한 말 취소다. 이건 전혀 자라지 않았잖아. 얼굴에 묻은 물기를 닦아내며 ',
        me.get_colored_name(),
        '은(는) 어이없다는 듯 눈앞의 무단 입수자 ',
        urara.get_colored_name(),
        '를 바라보았다……',
      ]);
      await era.printAndWait([
        '……잠깐, ',
        urara.get_colored_name(),
        '가 들어왔다고?! 상황 파악이 끝난 ',
        me.get_colored_name(),
        '은(는) 서둘러 일어나 탕 옆에 두었던 수건을 허리에 둘렀다.',
      ]);
    } else {
      await era.printAndWait([
        '응? 방이 추첨권에 적힌 것보다 훨씬 호화로운 데다 온천 이용도 더 자유롭잖아. 이거 완전 운 좋은 거 아닌가?',
      ]);
      await urara.say_and_wait([
        '어라? 북적거리는 맛은 좀 없겠지만, 우라라랑 ',
        callname,
        '만 있으면 안에서 수영도 할 수 있는 거 아냐?',
      ]);
      era.printButton('「온천탕에서 수영하면 안 돼.」', 1);
      await era.input();

      await era.printAndWait([
        '너무 들뜬 꼬마 ',
        urara.get_uma_sex_title(),
        '의 머리를 가볍게 쓰다듬어 준 ',
        me.get_colored_name(),
        '은(는) 웃으며 짐을 챙겨 ',
        urara.get_colored_name(),
        '와 함께 여관 복도로 향했다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '밝은 달빛 아래서 한참 산책을 즐긴 뒤, ',
        me.get_colored_name(),
        '은(는) 방으로 돌아와 천천히 옷을 벗고 수건을 집어 들었다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 지금쯤 이미 탕에 들어갔겠지? 얌전하게 잘 있을까? 설마 진짜로 물속에서 첨벙거리며 난리를 피우는 건 아니겠지?',
      ]);
      await era.printAndWait([
        '온천탕 문에 손을 얹으며 생각했다. 3년이나 지났는데 설마 그럴까. ',
        urara.get_colored_name(),
        '도 이제 다 컸으니……',
      ]);
      await era.printAndWait([
        '문을 열자마자 ',
        me.get_colored_name(),
        '의 귓가에 들려온 것은, 온천을 수영장 삼아 격렬하게 물을 끼얹는 ',
        urara.get_colored_name(),
        '의 소리였다.',
      ]);
      await urara.say_and_wait(['헤헤～ 왠지 너무 즐거워──!']);
      await era.printAndWait([
        '방금 한 생각 취소. 역시 전혀 자라지 않았다. 천천히 물속으로 들어가며 ',
        me.get_colored_name(),
        '은(는) 어이없다는 듯 눈앞에서 규칙 위반 중인 ',
        urara.get_colored_name(),
        '를 바라보았다.',
      ]);
    }
    await era.printAndWait([
      '피어오르는 물안개 사이로, 아직 다른 사람이 들어온 줄 모르는 꼬마 ',
      urara.get_uma_sex_title(),
      '는 자신의 건강하고 탄력 있는 육체를 아낌없이 드러내고 있었다.',
    ]);
    await era.printAndWait([
      '풀어헤쳐진 벚꽃색 머리카락이 ',
      urara.get_teen_sex_title(),
      '의 매끄러운 피부에 젖어 붙었고, 흘러내리는 물방울은 ',
      urara.sex,
      '의 천진난만한 미소에 몽환적인 분위기를 덧씌웠다.',
    ]);
    await era.printAndWait([
      '3년 동안의 단련은 부드러움을 딱딱함으로 바꾸지 않았고, 오히려 꼬마 ',
      urara.get_uma_sex_title(),
      ' 특유의 육감적인 허리와 엉덩이, 아랫배를 더욱 풍만하고 사랑스럽게 빚어놓았다.',
    ]);
    await era.printAndWait([
      '유려한 곡선을 따라 시선을 옮기면, ',
      urara.get_teen_sex_title(),
      '의 가랑이 사이 은밀하고 어린 비밀의 화원이 꼬리가 일으키는 잔물결에 절묘하게 가려져 수면 위아래를 넘나들었다.',
    ]);
    await era.printAndWait([
      '물놀이를 할 때마다 부드럽게 흔들리는 가슴 위로, 두 송이의 귀여운 꽃봉오리와 열매 또한 안개 속에서 보일 듯 말 듯 존재감을 과시했다.',
    ]);
    await era.printAndWait([
      '하지만 이 천진하면서도 금기시되는 풍경에 화룡점정을 찍은 것은 조명과 수면, 그리고 달빛이 교차하는 지점에서 빛나는 것이었다.',
    ]);
    await era.printAndWait([
      '앙증맞은 귀를 쫑긋거리며, ',
      urara.get_teen_sex_title(),
      '의 평소처럼 활짝 핀 벚꽃 같은 눈동자가 마치 채색 유리처럼 아름다운 색채를 발하고 있었다.',
    ]);
    await era.printAndWait([
      '유일하게 아쉬운 점이 있다면, 이 찬란하고도 에로틱한 풍경화의 주인공이 서서히 고개를 돌려 당혹해하는 ',
      me.get_colored_name(),
      '에게 시선을 고정하기 시작했다는 것뿐이었다……',
    ]);

    if (me.sex_code === 1) {
      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '응? 아…… ',
          callname,
          '였구나. 벌써 들어왔네. 언제 온 거야?',
        ]);
        await era.printAndWait([
          '자신의 몸이 보이고 있다는 사실에 부끄러워하지도, 몰래 지켜보려던 것에 죄책감을 느끼지도 않은 채 꼬마 ',
          urara.get_uma_sex_title(),
          '는 안개를 헤치며 천천히 ',
          me.get_colored_name(),
          '에게 다가왔다.',
        ]);
        await urara.say_and_wait([
          '헤헤～ 방금 ',
          callname,
          ', 나를 빤히 쳐다보고 있었던 것 같은데? 정말로 그랬던 거야?',
        ]);
        await era.printAndWait([
          '방금 막 일어서려던 ',
          callname,
          '를 대담하게 다시 물속으로 눌러 앉히며, ',
          urara.get_teen_sex_title(),
          '는 애정 어린 미소를 띤 채 실오라기 하나 걸치지 않은 몸으로 ',
          me.get_colored_name(),
          '의 무릎 위에 살며시 올라탔다.',
        ]);
        await era.printAndWait([
          '도대체 언제부터 ',
          urara.get_colored_name(),
          '가 이렇게 대담해진 것일까……',
        ]);
      } else {
        await urara.say_and_wait([
          '에? ',
          callname,
          '? 왜 ',
          callname,
          '가…… 아, 아니, 이건……',
        ]);
        await era.printAndWait([
          '타인의 시선으로부터 실오라기 하나 걸치지 않은 몸을 급히 가리려 애쓰는 ',
          urara.get_colored_name(),
          '의 작은 얼굴은, 열기 속에서 보기 드물게 잘 익은 사과처럼 붉게 달아올랐다.',
        ]);
        await urara.say_and_wait([
          callname,
          '…… 변태…… 보지 마, 얼른 뒤돌아 있어…… 우라라, 부끄럽단 말이야……',
        ]);
        await era.printAndWait([
          '물속에서 건져 올린 수건으로 황급히 몸을 가린 뒤, 방금 전 처음 만났을 때처럼 천진했던 꼬마는 사춘기 ',
          urara.get_teen_sex_title(),
          '다운 투덜거림을 나직이 내뱉었다.',
        ]);
        await era.printAndWait([
          '아무래도 이래저래 말은 많아도, ',
          urara.get_colored_name(),
          '는 나름대로 성장한 모양이었다……',
        ]);
      }
    } else if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '응? ',
        callname,
        ' 왔구나! 우라라가 이미 확인해 봤어! 물이 아주 기분 좋아!',
      ]);
      await era.printAndWait([
        '자신의 무단 입수 행위에 대해서는 딱히 설명할 생각이 없는지, ',
        urara.get_colored_name(),
        '는 안개 속에서 물살을 가르며 ',
        me.get_colored_name(),
        '에게 천천히 다가왔다.',
      ]);
      await urara.say_and_wait([
        '그나저나 ',
        callname,
        ', 발밑 조심해야 해? 자, 내 손 잡아! 영차～',
      ]);
      await era.printAndWait([
        '손을 잡고 ',
        me.get_colored_name(),
        '을(를) 탕 안으로 이끌던 ',
        urara.get_colored_name(),
        '는 묘한 미소를 지으며, 가장 좋아하는 ',
        callname,
        '를 입수하는 순간 물속으로 덮치듯 끌어안았다.',
      ]);
      await era.printAndWait([
        '마치 「',
        urara.get_colored_name(),
        '에게 적극적인 권유를 받은」 듯한 기분이 들었지만, 역시 이건 위험한 행동이 아닐까 싶은 생각이 스쳐 지나갔다……',
      ]);
    } else {
      await urara.say_and_wait([
        callname,
        ' 왔어? 무슨 일이야? 왜 그렇게 계속 우라라만 쳐다봐…… 어라?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 시선을 받고서야 ',
        urara.get_colored_name(),
        '는 자신의 수건이 몸에 얌전히 감겨있지 않고 어느샌가 물밑으로 가라앉아 버렸다는 사실을 깨달았다.',
      ]);
      await urara.say_and_wait([
        '언제 떨어진 거지? 뭐, 여기엔 다른 사람도 없으니까! 안 감아도…… 에? 안 돼?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 도움으로 겨우 수건을 두르고 머리를 정리하자마자, ',
        urara.get_colored_name(),
        '는 다시금 힘차게 물속으로 뛰어들었다.',
      ]);
      await era.printAndWait([
        '하긴, 가끔은 이렇게 철부지 아이 같기도 하지만, 역시나 사랑스러운 구석이 있었다……',
      ]);
    }

    await era.printAndWait([
      '그 후로 한바탕 소동…… 정확히는 달래고 어르는 과정을 거친 뒤에야 ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '를 물속에서 얌전하게 만들 수 있었다.',
    ]);
    await era.printAndWait([
      '아무리 개인탕이라 할지라도 탕 안을 난장판으로 만드는 것은 절대 금지된 행위였기 때문이다.',
    ]);
    await era.printAndWait([
      '안개가 다시금 서로에게 기대앉은 두 사람을 감싸 안자, 이 온천수는 비로소 본연의 용도를 발휘하기 시작했다.',
    ]);
    await era.printAndWait([
      '따스한 수증기는 겨울과 봄이 교차하는 계절의 추위를 덮어주었고, 밤하늘의 별들은 안개 너머에서 적절한 타이밍에 반짝이고 있었다.',
    ]);
    await era.printAndWait([
      '따뜻한 흐름에 몸을 맡긴 채 신체 대부분을 물속에 담그고, 드디어 담당과 함께 평온함을 만끽하게 된 ',
      me.get_colored_name(),
      '은(는) 온기 속에서 완전히 긴장을 풀었다.',
    ]);
    await era.printAndWait([
      '괜찮다. ',
      urara.get_colored_name(),
      '와 함께 훈련해온 3년 동안 체력이 몰라보게 좋아졌으니, 쉽게 현기증을 느끼지 않을 것이라는 자신감 정도는 있었다.',
    ]);
    await era.printAndWait([
      '비록 이것이 설령 은퇴하지 않는다 하더라도, ',
      urara.get_colored_name(),
      '가 레이스 ',
      urara.get_uma_sex_title(),
      '로서 보낸 최초의 3년이 완전히 끝났음을 의미한다 할지라도 말이다.',
    ]);
    await era.printAndWait([
      '이제 ',
      urara.sex,
      '는 스스로 향후의 레이스와 훈련을 결정할 수 있는 능력을 갖추었고, 트레이너인 ',
      me.get_colored_name(),
      ' 또한 더 많은 ',
      urara.get_uma_sex_title(),
      '와 인연을 맺게 될 것이다.',
    ]);
    await era.printAndWait([
      '두 사람의 사이가 멀어질까 걱정하는 것은 아니지만, 좋든 싫든 이렇게 무방비하게 속살을 드러내 보이는 꼬마 ',
      urara.get_uma_sex_title(),
      '는 아마 이 아이 하나뿐일지도 모른다.',
    ]);
    await era.printAndWait([
      '어찌 되었든 이미 이인삼각으로 여기까지 걸어왔으니, ',
      me.get_colored_name(),
      '에게는 ',
      urara.get_colored_name(),
      '를 계속 곁에 두는 것 말고는 다른 선택지가 없을 터였다.',
    ]);

    if (
      era
        .getAddedCharacters()
        .filter(
          (e) =>
            era.get(`cflag:${e}:부계캐릭`) === 52 ||
            era.get(`cflag:${e}:모계캐릭`) === 52,
        ).length > 0
    ) {
      await era.printAndWait([
        '게다가 잘못된 시간과 장소에서 금단의 열매를 맺기로 선택한 이상, 향후의 행복 여부와 상관없이 ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 이미 되돌아갈 수 없는 길을 걷고 있었다……',
      ]);
    }

    await era.printAndWait([
      '하아, 도대체 무슨 생각을 하는 건가. 모처럼 담당과 온천에 왔으면서, 왜 갑자기 「입욕 중의 사색」에 빠져 우울해하는지 모를 일이었다.',
    ]);
    await era.printAndWait([
      '만난 이후로 좋은 일들이 얼마나 많았는가. 예컨대 우울할 때 눈을 감기만 해도 마음속은 온통 ',
      urara.get_colored_name(),
      '의 웃는 얼굴로 가득 찼다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 떨어지고 싶지 않다. 비록 그런 일이 일어나지 않는다 해도, 여전히 그렇게 읊조리고 싶었다.',
    ]);
    await era.printAndWait([
      '다만 이제 와서 지난 과거의 일들을 다시 되돌아보니, 확실히 이전만큼 초조하게 느껴지지는 않았다.',
    ]);
    await era.printAndWait([
      '안도감과 만족감 때문일까? 어쩌면 온천에서 하는 이런저런 공상은 정말로 따뜻한 물줄기를 빌려 마음의 짐을 씻어내 주는 것일지도 모른다.',
    ]);
    await era.printAndWait(['……그런데 그건 그렇고, 착각인가? 물이 점점 뜨거워지는 것 같은데?']);
    await urara.say_and_wait([
      '응? ',
      callname,
      ' 얼굴이 엄청 빨개! 내가 알기론 온천에서 어지러운 건 체력이랑 별로 상관없대. 그러니까 무리하면 안 돼?',
    ]);
    await era.printAndWait([
      '어찌 된 일인지 몸이 노곤해지며 갑자기 졸음이 쏟아졌다. 당장이라도 잠들 것만 같았다……',
    ]);
    await urara.say_and_wait([
      '그리고 말이야, 거기서 더 미끄러지면 코가 물에 잠겨버릴걸? ',
      callname,
      ', 내 말 들려?',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 목소리가 아주 멀게 느껴졌다. 마치 점점 더 멀어지는 듯한……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '누군가 벌써 콧구멍으로 보글보글 거품을 만들고 있는데, 들려도 대답할 상태가 아닌 것 같네요?!',
    ]);
    await era.printAndWait([
      '그 말이 맞다. 결국 이번에도 자신의 한계를 과대평가한 모양이다. 그대로 가라앉을 것만 같았다……',
    ]);
    await urara.say_and_wait([
      '아! 왔구나! 온천 정말 기분 좋아! 하지만…… 지금 ',
      callname,
      ' 상태가 좀 이상한 거 같아 보여?',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '온천 타령은 나중에 하시고, 아무튼 어서 트레이너 ',
      me.get_adult_sex_title(),
      '을(를) 끌어올리세요!',
    ]);
    await era.printAndWait([
      '미안하게도 오늘도 「너」에게 폐를 끼치고 말았다. 느릿하게 흘러가는 분위기 속에서 자신이 이리저리 건져 올려지고 있음을 감지하며, ',
      me.get_colored_name(),
      '은(는) 안심하고 몸을 맡겼다.',
    ]);

    await era.printAndWait([
      '다시 깨어났을 때, 머리 위의 빛은 별빛에서 따스한 노란색 천장 조명으로 바뀌어 있었다.',
    ]);
    await era.printAndWait([
      '다행히 눈에 들어온 풍경은 병원의 낯선 하얀 벽이 아니라 온천 여관의 일본식 인테리어였다.',
    ]);
    await era.printAndWait([
      '얼마나 누워 있었던 걸까. ',
      urara.get_colored_name(),
      '는 어디 있지? 일단 일어나야겠어……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 약간 흐릿한 시야를 무릅쓰고 몸을 일으키려던 찰나, 아래에서 느껴지는 저항감이 뺨을 부드럽게 눌러왔다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 아직 움직이지 마. 쉴 때는 무리하지 않아도 괜찮아.',
    ]);
    await era.printAndWait([
      '부드러운 목소리를 따라 시선을 위로 올리자, 이번에 보인 것은 꼬마 ',
      urara.get_uma_sex_title(),
      '의 내려다보는 웃는 얼굴이었다.',
    ]);
    await era.printAndWait([
      '정갈한 자세로 앉아 베개 역할을 대신하고 있는 ',
      urara.get_teen_sex_title(),
      '의, 조금 전까지 물속에 감춰져 있던 탄탄한 다리가 지금은 부드럽게 ',
      me.get_colored_name(),
      '의 뒷머리를 받쳐주고 있었다.',
    ]);
    await era.printAndWait([
      '헐렁한 일본식 의상을 입은 채, ',
      urara.get_colored_name(),
      '는 보채는 아이를 달래는 어머니처럼 ',
      me.get_colored_name(),
      '의 뺨을 쓰다듬으며 한 손에는 귀이개를 치켜들었다.',
    ]);
    await urara.say_and_wait([
      '헤헤～ ',
      callname,
      ', 지금 꼭 어린아이 같아. 그동안 계속 힘들었기 때문일까?',
    ]);
    await urara.say_and_wait([
      '사람들한테 들었는데, 이렇게 하면 마음이 편해진대. ',
      callname,
      ', 몸을 살짝 옆으로 돌려봐.',
    ]);
    await urara.say_and_wait([
      '괜찮아, 오늘의 ',
      callname,
      '는 마음껏 어리광 부려도 돼. 부끄러우면 우라라의 꼬리를 꽉 잡아도 된다고?',
    ]);
    await era.printAndWait([
      '다정한 권유에 몸이 절로 움직였다. ',
      me.get_colored_name(),
      '은(는) 마치 어머니의 위로에 순응하는 아이처럼 눈앞의 부드러운 꼬리털을 쥐었다.',
    ]);
    await urara.say_and_wait([
      '우라라도 처음 해보는 거니까, 혹시 아프면 꼭 말해줘야 해?',
    ]);
    await era.printAndWait([
      '섬세한 손가락이 귓바퀴를 훑고 솜방망이로 겉귀의 먼지를 털어낸 뒤, ',
      urara.get_teen_sex_title(),
      '는 귀이개로 귓길을 부드럽게 긁어내기 시작했다.',
    ]);
    await era.printAndWait([
      '짜릿한 촉각이 온몸으로 퍼져나갔고, ',
      urara.get_teen_sex_title(),
      '의 맑고 달콤한 품 안에서 의식은 점차 붕 떠오르는 해방감으로 바뀌어 갔다.',
    ]);
    await era.printAndWait([
      '어린아이의 무릎을 베고 마음껏 어리광을 부리는 게 과연 어른다운 행동인가 싶었지만, 반박하려 해도 이미 두뇌는 사고하기를 거부하고 있었다.',
    ]);
    await urara.say_and_wait([
      '이전에 무슨 일이 있었든, 앞으로 무슨 일이 일어나든, 우라라는 늘 ',
      callname,
      '에게 감사하고 싶어.',
    ]);
    await urara.say_and_wait([
      '앞으로도 ',
      callname,
      '가 언제나 안심하고 웃을 수 있으면 좋겠어. 이게 내가 ',
      callname,
      '에게 주고 싶은 선물이야.',
    ]);
    await urara.say_and_wait([
      '우라라의 곁에는 언제나 ',
      callname,
      '가 쉴 수 있는 자리를 비워둘 테니까, 나중에 또 불안해지면 우라라를 찾아와줘.',
    ]);
    await era.printAndWait([
      '부드러운 입김과 종이 타월로 귀 주변을 정리하며, ',
      urara.get_teen_sex_title(),
      '는 자신의 품속에 잠겨가는 어른을 보고 살며시 웃으며 손가락으로 쿡 찔렀다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 금방 잠들면 안 돼? 아직 다른 쪽 귀도 남았으니까.',
    ]);
    await urara.say_and_wait(['오늘 밤은 아주 길거든?']);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 만들어낸 다정한 안식처에 푹 빠진 채, ',
      me.get_colored_name(),
      '은(는) 평온하게 눈을 감았다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '후훗～ 온천은 정말 좋네요. 특히나 큰 고비들을 넘기고 난 뒤라 그런지 제 기분까지 상쾌해지는 것 같아요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '비록 불청객이긴 합니다만, 이미 쉬고 계시니 제가 잠시 온천을 빌려 쓰는 것 정도는 이해해 주시겠죠?',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '아! 그리고 이것도…… 『이 시간을 통해, 당신은 우라라와의 사이에 그 무엇과도 바꿀 수 없는 유대감을 깊이 느꼈습니다～』',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '흠…… 비록 들리는 말투는 가벼울지 몰라도, 그 무엇과도 바꿀 수 없는 소중한 인연이 이곳에 깃든 것은 분명한 사실입니다……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '적어도 지금 이 순간만큼은, 틀림없이 평온하고 행복하겠지요.',
    ]);
  };
};