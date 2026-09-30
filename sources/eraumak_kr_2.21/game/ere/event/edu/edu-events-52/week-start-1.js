const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.after_begin = async (urara, me, in_urara, callname) => {
    await print_event_name('우라라식 트레이닝', urara);
    await in_urara.say_as_unknown_and_wait([
      '우라라의 달리기를 곁에서 지켜보며, 트레이너 ',
      me.get_adult_sex_title(),
      '은(는) 아직 ',
      urara.sex,
      '만의 전용 트레이닝 계획에 대해 고민하는 중입니다.',
    ]);
    era.drawLine();
    await urara.say_and_wait(['앗! ', callname, '! 저기 좀 봐—!']);

    era.printButton('「지금은 트레이닝 중이잖아?」', 1);
    await era.input();

    await urara.say_and_wait('미안해! 그럼 한 바퀴 더 돌고 올게!');
    await era.printAndWait([
      '담당이 다시 트레이닝에 매진하는 모습을 보며, ',
      me.get_colored_name(),
      '은(는) 계속해서 꼬마 ',
      urara.get_uma_sex_title(),
      '의 행동 패턴을 정리해 나갔다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 함께 트레이닝을 시작하고 어느 정도 시간이 흐른 뒤, ',
      me.get_colored_name(),
      '은(는) 점차 ',
      urara.sex,
      '의 현 상태를 구성하는 요소들을 파악하기 시작했다.',
    ]);
    await era.printAndWait([
      '우선, ',
      urara.sex,
      '는 무척이나 침착성이 없었다. 하지만 집중력이 부족하다는 점 또한 ',
      urara.sex,
      '의 성격에서 비롯된 것이었고, 바로 그 때문에……',
    ]);
    await urara.say_and_wait([callname, ', 이쪽에 다들—']);

    era.printButton('「흠흠(헛기침).」', 1);
    await era.input();

    await urara.say_and_wait('앗, 미안해! 지금은 트레이닝 계속해야 하니까, 다음에 또 얘기하자!');
    await era.printAndWait([
      '바로 이런 식이었다. 소리 내어 주의를 주면 ',
      urara.sex,
      '는 즉시 반성하지만, 이내 다시 정신을 팔아 더 재미있는 것에 마음을 빼앗겨 버리고 만다.',
    ]);
    await era.printAndWait(
      '매일같이 트레이닝이 끊기기 일쑤였고 경쟁심도 부족했다. 이대로라면 훈련의 성과를 기대하기 어려울 터였다.',
    );
    await era.printAndWait([
      '실제로 ',
      me.get_colored_name(),
      '이(가) 일부러 ',
      urara.get_colored_name(),
      '와 친한 ',
      urara.get_uma_sex_title(),
      '들에게 물어보았을 때도, ',
      urara.sex,
      '들이 내놓는 대답은 대동소이했다.',
    ]);
    era.println();

    const talk_arr = gacha(
      [
        () =>
          get_chara_talk(61).say_and_wait([
            '일류의 목표를 가지는 건 좋지만, ',
            sys_get_colored_callname(61, 52),
            '가 트레이닝을 지속하지 못하는 건 ',
            urara.sex,
            ' 자신에게도 좋지 않지 않을까?',
          ]),
        () =>
          get_chara_talk(20).say_and_wait([
            '아~ 알 것 같아. ',
            sys_get_colored_callname(20, 0),
            ', 요즘 ',
            sys_get_colored_callname(20, 52),
            '의 나쁜 버릇 때문에 꽤나 고생하고 있나 보네?',
          ]),
        () =>
          get_chara_talk(1).say_and_wait([
            sys_get_colored_callname(1, 52),
            '가 가져온 당근은 정말 맛있어! 다만 자주 덤벙대느라 어디에 뒀는지 잊어버리곤 하지만.',
          ]),
        () =>
          get_chara_talk(30).say_and_wait([
            '에? ',
            sys_get_colored_callname(30, 52),
            ' 말이야? 달리는 건 무척 좋아하지만, 마음 한구석에 인내심이 조금 부족하달까……',
          ]),
        () =>
          get_chara_talk(77).say_and_wait([
            sys_get_colored_callname(77, 52),
            '는 대단해요…… 아무튼 대단하다구요! 그냥 공부를 조금 못할 뿐이에요!',
          ]),
        () =>
          get_chara_talk(15).say_and_wait(
            '음음~ 꽃은 까다롭게 양분을 흡수하지만, 봉오리 상태로 머무는 건 망설임의 일종일지도 모르겠군?',
          ),
        () =>
          get_chara_talk(58).say_and_wait([
            sys_get_colored_callname(58, 52),
            '는 매번 제 뒤처리를 도와주려고 해요. 가끔은 일이 더 커져 버리기도 하지만 말이죠……',
          ]),
      ],
      3,
    );
    for (const talk of talk_arr) {
      await talk();
    }
    era.println();

    await era.printAndWait([
      '동기들 사이에서도 ',
      urara.get_colored_name(),
      '의 크고 작은 문제점들은 이미 유명한 듯했다.',
    ]);
    await era.printAndWait([
      '이론상으로는 ',
      urara.get_colored_name(),
      '의 「재미」만 충족시켜 줄 수 있다면 해결되겠지만, 대체 어떤 내용을 담아야 할 것인가……',
    ]);
    await era.printAndWait([
      '아무래도 상상력이 부족한 모양이다. 대책을 세우기 위해서라도 우선은 자기 자신이 ',
      urara.get_colored_name(),
      '를 더 깊이 이해해야만 했다.',
    ]);
    await era.printAndWait([
      '구매한 필수품들을 봉투에 담으며, ',
      me.get_colored_name(),
      '은(는) 생각에 잠긴 채 상점가의 다음 가게로 향했다.',
    ]);
    await urara.say_and_wait([
      '아, ',
      callname,
      '! 어서 와! 여기 진짜 맛있는 사과가 있어! 좀 사갈래?',
    ]);

    era.printButton('「응, 어라? 우라라? 너…… 여기서 상점가 일 돕고 있는 거야?」', 1);
    await era.input();

    await urara.say_and_wait(
      '응! 시간이 날 때마다 여기서 돕고 있어! 정말 즐겁거든!',
    );
    await era.printAndWait([
      '교복 위에 가볍게 앞치마를 두른 ',
      urara.get_colored_name(),
      '가 환한 미소를 지으며 다가왔다.',
    ]);

    const relation = era.get('relation:52:0');
    if (relation > 150) {
      await urara.say_and_wait([
        callname,
        '도 먹어 볼래? 괜찮아, 점장 아저씨한테 이미 허락받았어!',
      ]);
      await era.printAndWait([
        '다짜고짜 가장 큰 사과를 골라 ',
        me.get_colored_name(),
        '의 손에 쥐여준 ',
        urara.get_colored_name(),
        '는 지금 당장 맛을 보라는 듯한 눈치였다.',
      ]);
      await era.printAndWait([
        '갓 씻어낸 과실 위로 맑은 물방울이 맺혀 있었고, 매끄러운 껍질에는 ',
        urara.get_colored_name(),
        '의 사과보다 탐스럽고 귀여운 얼굴이 비치고 있었다.',
      ]);
      await urara.say_and_wait(
        '오늘 사과는 점장 아저씨가 추천해 준 거야. 정말 달 거라고 내가 보증할게!',
      );
    } else {
      await urara.say_and_wait([
        callname,
        '한테는 좀 더 싸게 해 줄 수 있어! 물론 점장 아저씨 허락도 받았지!',
      ]);
      await era.printAndWait([
        '얼굴의 미소는 진심이었지만, ',
        urara.get_colored_name(),
        '의 말투에는 어딘가 서먹한 구석이 있었다.',
      ]);
      await era.printAndWait([
        '그럼에도 불구하고 ',
        urara.sex,
        '는 아주 큰 사과 하나를 꺼내 ',
        me.get_colored_name(),
        '의 손에 쥐여주었다.',
      ]);
      await urara.say_and_wait([
        '결정하기 힘들면 ',
        callname,
        '가 먼저 맛을 봐도 괜찮아! 정말 맛있거든!',
      ]);
    }
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '오, 어서 오게! 우라라의 친구인가? 그렇다면 덤을 좀 더 챙겨줘야겠구먼!',
    );
    await urara.say_and_wait(['그냥 친구가 아니야, 아저씨! 이분은 우라라의 트레이너야!']);
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '오오, 트레이너였나…… 트레이너?! 우라라의 트레이너 말인가?',
    );
    await era.printAndWait([
      '목소리를 듣고 달려온 점장 아저씨는 ',
      urara.get_colored_name(),
      '의 대답을 듣고 잠시 멍해지더니, 이내 갑자기 거리로 달려 나갔다—',
    ]);
    await era.printAndWait([
      '불과 5분도 지나지 않아, 상점가의 이웃들이 ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '의 주변을 빈틈없이 에워쌌다.',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '세상에, 우라라에게도 드디어 전속 트레이너가 생겼구나! 정말 축하할 일이네!',
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '이제 데뷔도 안심이겠어. 나중에 우리 우라라가 레이스에 나가면 다 같이 응원하러 갈게!',
    );
    await CharaTalk.say_by_passer_by_and_wait('상점가 사람', [
      '트레이너 ',
      me.get_adult_sex_title(),
      '! 이 아이가 조금 덜렁대긴 해도, ',
      urara.sex,
      '는 정말 노력파라니까!',
    ]);

    era.printButton('「네! 앞으로 제게 맡겨주세요!」', 1);
    await era.input();

    await era.printAndWait([
      '주변에서 파도처럼 밀려오는 축복과 기대에 화답하며, ',
      me.get_colored_name(),
      '은(는) 슬며시 옆에 서 있는 ',
      urara.get_colored_name(),
      '를 바라보았다——',
    ]);

    if (relation > 150) {
      await CharaTalk.say_by_passer_by_and_wait(
        '상점가 사람',
        '미래가 보장된 건 좋은데, 우라라가 혹시 속고 있는 건 아니겠지?',
      );
      await CharaTalk.say_by_passer_by_and_wait(
        '상점가 사람',
        '여기서 무슨 재수 없는 소리야? 그보다 봐봐, 우라라가 저렇게 즐거워 보이잖아?',
      );
      await CharaTalk.say_by_passer_by_and_wait('상점가 사람', [
        '하지만 듣기로는 트레센의 트레이너들은 담당 ',
        urara.get_uma_sex_title(),
        '와 그렇고 그런 사이가 되는 경우도 많다던데……',
      ]);
      await CharaTalk.say_by_passer_by_and_wait(
        '상점가 사람',
        '자네가 왜 안달인가? 왜, 우라라가 나중에 좋아하는 사람이 생기면 질투라도 나나?',
      );
      await era.printAndWait('음…… 이럴 때는 대체 뭐라고 해야 좋을까……');
    } else {
      await CharaTalk.say_by_passer_by_and_wait(
        '상점가 사람',
        '우라라가 앞으로도 무사히 잘 풀리면 좋을 텐데, 왠지 꼭 그런 것 같지도 않네?',
      );
      await CharaTalk.say_by_passer_by_and_wait(
        '상점가 사람',
        '무슨 그런 섭섭한 소리를 하나? 우라라의 트레이너님 앞에서 실례잖아!',
      );
      await CharaTalk.say_by_passer_by_and_wait(
        '상점가 사람',
        '하지만 우라라가 별로 기뻐 보이지 않는 것 같아서……',
      );
      await CharaTalk.say_by_passer_by_and_wait('상점가 사람', [
        '무슨 소리야? 그건 자네가 매번 우라라한테 일을 잔뜩 시켜서 지치게 만들었기 때문 아니야?',
      ]);
      await era.printAndWait('……역시 지금은 불필요한 말은 삼가는 게 좋겠어……');
    }

    await era.printAndWait([
      '이 거리의 모든 이들이 정말로 ',
      urara.get_colored_name(),
      '를 아끼고 사랑하고 있었다. ',
      me.get_colored_name(),
      '은(는) 점차 ',
      urara.get_colored_name(),
      '의 강점이 어디에 있는지 알 것 같다는 기분이 들었다.',
    ]);
    await era.printAndWait([
      '그 후, 상점가의 상인들은 「 ',
      urara.get_colored_name(),
      '를 잘 부탁하네」라며 하나둘씩 답례 선물을 건네주었다.',
    ]);
    await me.say_and_wait('그치만, 이 선물들…… 너무 많은 거 아닌가……?', true);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자신이 그 정도로 대단한 일을 했다고 생각지 않았다. 오히려 ',
      urara.get_colored_name(),
      '가 처음부터 ',
      me.get_colored_name(),
      '을(를) 챙겨준 것에 더 가까웠다.',
    ]);
    await era.printAndWait([
      '하지만 아무리 미안한 마음이 들어도, ',
      me.get_colored_name(),
      '은(는) 쉴 새 없이 쏟아지는 이 방대한 호의를 거절할 방법을 당장 떠올리지 못했다.',
    ]);
    await urara.say_and_wait([callname, ', 진짜 많이 받았네! 내가 들어줄게!']);
    await era.printAndWait([
      '상대방의 곤란함을 눈치챈 ',
      urara.get_colored_name(),
      '는 도와주겠다며, ',
      me.get_colored_name(),
      '을(를) 둘러싼 짐들을 하나씩 자신의 몸 위로 쌓아 올리기 시작했다.',
    ]);

    era.printButton('「무리하지 마! 도와줄 거라면 이것들만 들어줘……」', 1);
    await era.input();

    await urara.say_and_wait([
      '괜찮아, 전부 나한테 맡겨! 우라라는 ',
      urara.get_uma_sex_title(),
      '니까…… 으앗, 무거워! 하지만 힘낼게!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 제안을 웃으며 거절하고, ',
      urara.get_colored_name(),
      '는 자기 몸집만 한 짐을 온 힘을 다해 짊어졌다. 그 뒤로는 한 걸음 한 걸음을 내딛는 데 온 신경을 집중하는 듯 보였다.',
    ]);
    await me.say_and_wait('응? 잠깐, 집중하고 있어? 이 상황에서?', true);
    await era.printAndWait([
      '마침내 적절한 트레이닝의 영감을 얻은 ',
      me.get_colored_name(),
      '은(는) 아직 주위를 에워싸고 있는 상점가 사람들에게 가볍게 인사를 건넸다—',
    ]);
    era.println();
    await urara.say_and_wait(
      '응! 이 사과 상자를 저기까지 옮기면 되는 거지? 최대한 빨리! 알았어! 그런데……',
    );

    era.printButton('「그, 그런데?」', 1);
    await era.input();

    await urara.say_and_wait(
      '무리하지 않아도 괜찮아! 짐 나르는 건 우라라 혼자서도 충분하니까!',
    );

    era.printButton(
      '「개, 괜, 괜찮아. 같이 돕기로 약속했으니까. 그리고 나도 이 정도는 할 수 있을 것 같—」',
      1,
    );
    await era.input();

    await CharaTalk.say_by_passer_by_and_wait('상점가 아이들', [
      '우라라 언니! 늦어지면 시간 안에 못 맞춘다고!',
    ]);
    await urara.say_and_wait('아! 다들 천천히 뛰어! 조심해야 해!');
    await era.printAndWait([
      me.get_colored_name(),
      '의 허리가 끊어지기 직전, 상점가 근처에 사는 꼬마 ',
      urara.get_uma_sex_title(),
      '들이 나타나 ',
      me.get_colored_name(),
      '의 짐을 나눠 들어주었다.',
    ]);
    await era.printAndWait([
      '짐상자를 짊어지고, ',
      urara.get_colored_name(),
      '는 꼬마 ',
      urara.get_uma_sex_title(),
      '들의 발걸음을 쫓아 진지하게 달리기 시작했다. ',
      me.get_colored_name(),
      '은(는) 단계별 임무를 완수한 뒤 바닥에 주저앉을 뻔했다.',
    ]);
    await era.printAndWait([
      '상점가 사람들의 협력을 얻은 덕분에, ',
      urara.get_colored_name(),
      '의 주관적인 의욕을 끌어내는 트레이닝 방법이 성공적으로 가동되었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 트레이닝 지속성 문제는 일단 기본적으로 해결된 셈이며, 훈련 성과도 곧 나타날 터였다.',
    ]);
    await era.printAndWait([
      '매일 트레이닝이 끝날 때마다 몸이 녹초가 되는 것에 대해서는…… ',
      me.get_colored_name(),
      '은(는) 이것이 누군가의 운동 부족일 뿐, 그 외에는 아무 문제가 없다고 생각했다.',
    ]);
    await era.printAndWait(
      '그럴 리가. 앞으로 계속 이런 식으로 훈련하다가 운 좋게 병원 신세를 면한다면, 아마 본인이 직접 레이스에 나가도 될 수준일 것이다.',
    );
    await era.printAndWait([
      '다만 ',
      urara.get_colored_name(),
      '의 경쟁심을 어떻게 고취할 것인가 하는 문제는, 아마 또 다른 장기 과제가 될 것 같다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '물론 당신은 아직 모르시겠지만, 이 우려는 머지않은 미래의 어떤 사건을 통해 말끔히 해결될 것입니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '이런 스포일러가 당신을 만족시키지 못할 것임은 잘 알고 있습니다만, 적어도 초기 단계에서만큼은 당신이 안심하기를 바랍니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '당신과 우리의 이야기가 딱히 파란만장하지는 않을지도 모릅니다. 하지만 부디 인내심을 갖고 계속해서 나아가 주시길.',
    );
    get_attr_and_print_in_event(52, [0, 0, 5, 5, 0], 0) &&
      (await era.waitAnyKey());
  };
};