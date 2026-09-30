const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.vs = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:현재상호작용캐릭터') > 0) {
      await era.printAndWait(
        '최근 몇몇 학생들이 학원 안뜰에서 팔씨름 대결을 펼친다는 소문이 있다…… 나중에 혼자 외출할 때 확인해 보자.',
      );
      add_event(event_hooks.school_atrium, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.school_atrium);
    await print_event_name('팔씨름 대결', urara);
    const sky = get_chara_talk(20),
      spe = get_chara_talk(1);
    await era.printAndWait([
      '점심시간, ',
      me.get_colored_name(),
      '은(는) 학원 안뜰에서 들려오는 소란스러운 소리에 이끌려 다가갔고, 그곳에서 ',
      urara.get_colored_name(),
      '와 반 친구들의 팔씨름 시합을 목격했다.',
    ]);
    await era.printAndWait([
      '그리고 누가 봐도 알 수 있듯이, 강력한 상대와 마주한 ',
      urara.get_colored_name(),
      '는 열세에 처해 있었다……',
    ]);
    await spe.say_and_wait('우, 우라라짱! 이제 슬슬…… 포기해도 된다고!');
    await urara.say_and_wait([
      sys_get_colored_callname(52, 1),
      '이야말로! 손이 떨리고 있잖아? 오오——!',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '에게는 아직 말대꾸할 기운이 남아 있었지만, ',
      urara.sex,
      '의 손이 점차 눌리면서 곁에 있던 심판이 시합의 결과를 선언했다.',
    ]);
    await sky.say_and_wait(
      '좋아! 종료! 정말 대단해, 스페가 또 이겼네. 이게 벌써 몇 번째지?',
    );
    await spe.say_and_wait(
      '어릴 때 어머니의 농사일을 자주 도와드린 덕분일까? 하지만 이렇게 오래 버티다니 우라라짱도 정말 대단해!',
    );
    await urara.say_and_wait([
      '하지만 결국 또 졌어! 도대체 어떻게 해야 이길 수 있는 걸까…… 아, ',
      callname,
      '! 팔씨름은 어떻게 해야 이길 수 있어?',
    ]);
    await era.printAndWait([
      '응? 들킨 건가? 언제부터? 멀리서 구경하던 ',
      me.get_colored_name(),
      '을(를) 향해 ',
      urara.get_colored_name(),
      '는 손을 흔들었고, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없이 ',
      urara.get_uma_sex_title(),
      '들에게 다가갔다.',
    ]);

    await era.printAndWait([
      urara.get_colored_name(),
      ' 혼자만의 힘으로 ',
      spe.get_colored_name(),
      '를 이기는 것은 무척 어려운 일이지만, ',
      urara.sex,
      '가 물어봤으니……',
    ]);
    era.printButton('「팔씨름에는 기술이 필요해.」（지능+10）', 1);
    era.printButton('「열심히 노력하면 되지 않을까……?」（근력+10）', 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      attr_change[attr_enum.intelligence] = 10;
      await sky.say_and_wait([
        '아~받침점, 힘점, 작용점 같은 건가? 소위 말하는 팔씨름의 요령이네~',
      ]);
      await urara.say_and_wait(
        '받침점 힘점 작용점……? 잘은 모르겠지만, 노력이 담긴 주문 같은 거야?',
      );
      await urara.say_and_wait('좋아! 알겠어! 그럼 지금 다시 한번 시합하자! 스페짱!');
      await era.printAndWait([
        '아니, 그런 의미로 가르쳐준 건 아닌데...딱히 더 해줄 말도 없어서, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '가 정말로 이해했기를 바랄 뿐이었다……',
      ]);
      await spe.say_and_wait(
        '좋아! 그럼, 그럼 나도 노력의 주문! 『이기면 오늘 저녁은 당근 함박스테이크』!',
      );
      await era.printAndWait(
        '아니, 잠깐, 그건 또 뭐야? 진짜 당근 함박스테이크 좋아하네……',
      );
      await sky.say_and_wait(
        '즐거우면 된 거 아닐까~ 자, 준비…… 시작!',
      );
      await era.printAndWait([
        '예상대로 ',
        urara.get_colored_name(),
        '는 결국 지고 말았다. 하지만 ',
        urara.sex,
        '는 기분이 좋아 보였고, 그 「주문」이 꽤 마음에 든 모양이니 나름의 수확은 있었던 셈이다.',
      ]);
    } else {
      attr_change[attr_enum.strength] = 10;
      await era.printAndWait([
        urara.get_colored_name(),
        '가 팔씨름 기술을 알고 있는지는 차치하고서라도, 실력 차이가 너무 큰 상황에서 시도해 볼 수 있는 건 더 힘을 내는 것뿐이었다.',
      ]);
      await urara.say_and_wait(
        '오오, 그렇구나! 즉 레이스랑 똑같다는 거지? 엄청나게 노력하면 반드시 이길 수 있어!',
      );
      await urara.say_and_wait(
        '좋아! 그럼 스페짱, 다시 한번 시합하자! 이번엔 반드시 이길 거야!',
      );
      await spe.say_and_wait(
        '우라라짱이 그렇게 말한다면 나도 레이스 때처럼 의욕을 내야겠네! 간다, 우라라짱!',
      );
      await era.printAndWait([
        '하지만 ',
        spe.get_colored_name(),
        '마저 전력을 다한다면, 시합 결과는 보나 마나 뻔한 일이었는데……',
      ]);
      await sky.say_and_wait(
        '와아~ 우라라가 순간적으로 다시 밀어붙일 줄은 몰랐네~ 깜짝 놀랐어.',
      );
      await spe.say_and_wait(
        '나도 긴장했어! 우라라짱이 이렇게 강할 줄이야, 다음에 또 시합하자!',
      );
      await urara.say_and_wait([
        '헤헤! ',
        callname,
        ', 우라라 역시 대단하지? 다음엔 절대로 안 질 거야——',
      ]);
      await era.printAndWait([
        '결과적으로 시합에는 졌지만, 전력을 다해 부딪친 ',
        urara.get_colored_name(),
        '는 만족스러운 표정이었다.',
      ]);
    }
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
    flags.wait_flag = sys_like_chara(1, 52, 100) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(20, 52, 100) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(52, 1, 50) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(52, 20, 50) || flags.wait_flag;
  };

  handlers.lost_found = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:현재상호작용캐릭터') !== 52) {
      add_event(event_hooks.school_atrium, event_object);
      return true;
    }
    await print_event_name('중요한 분실물', urara);
    const rice = get_chara_talk(30);
    await urara.say_and_wait([
      '응... ',
      sys_get_colored_callname(52, 30),
      '의 리본, 도대체 어디로 가버린 걸까? ',
      callname,
      ', 저쪽에 뭐 있어?',
    ]);
    await era.printAndWait([
      '학원 안 조경용 나무숲에서 고개를 내밀며, ',
      urara.get_colored_name(),
      '는 머리에 붙은 잎사귀를 떼어내며 ',
      me.get_colored_name(),
      '에게 물었다.',
    ]);

    era.printButton('「이쪽도 아무것도 없네, 좀 더 앞쪽을 찾아보자.」', 1);
    await era.input();

    await era.printAndWait([
      '길가 쓰레기통의 뚜껑을 닫으며, ',
      me.get_colored_name(),
      '은(는) 그렇게 말하고는 나무숲 사이에 있던 ',
      urara.get_colored_name(),
      '를 안아 올렸다.',
    ]);
    await rice.say_and_wait([
      '괘, 괜찮아. 그냥 리본 하나일 뿐인걸. ',
      sys_get_callname(30, 30),
      '가 다시 새로 사면 돼……',
    ]);
    await urara.say_and_wait(
      '하지만 그건 네가 정말 아끼던 리본이잖아! 아낀다는 건 소중하다는 뜻이야! 괜찮아, 반드시 찾을 수 있어!',
    );
    await era.printAndWait([
      '포기하려는 ',
      rice.get_colored_name(),
      '의 말을 벌써 몇 번째인지 모를 정도로 가로막으며, ',
      urara.get_colored_name(),
      '는 든든한 미소와 함께 곁에 있는 친구에게 다시 한번 엄지를 치켜세웠다.',
    ]);
    await urara.say_and_wait([
      '문제없어, 우린 꼭 찾을 수 있을 거야! 아 맞다, ',
      callname,
      ', 우리 이제 흩어져서 찾아보자——',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_couple_title(),
      '이 셋이서 분담해 찾으려던 찰나, 발치의 물기가 점차 번지더니 빗방울이 갑작스럽게 쏟아지기 시작했다.',
    ]);
    await rice.say_and_wait([
      '비가 오네!? 서, 설마 전부 ',
      sys_get_callname(30, 30),
      ' 때문에……! 미, 미안해……!',
    ]);

    era.printButton(
      '「아니, 그렇게 자책할 필요 없어. 오늘 일기예보에서 비 소식이 있었거든.」',
      1,
    );
    await era.input();

    await rice.say_and_wait([
      sys_get_colored_callname(30, 0),
      '가 그렇게 말해도…… ',
      sys_get_colored_callname(30, 52),
      ', 정말 안 찾아도 돼! 폐를 끼쳐서 미안!',
    ]);

    await urara.say_and_wait([
      '괜찮아! 소중한 물건은 빨리 찾을수록 좋은 법이잖아! 그치, ',
      callname,
      '?',
    ]);
    era.printButton(
      '「맞아, 조금만 더 힘내보자. 우린 세 명이나 있잖아.」（체력-100 근성+20）',
      1,
    );
    era.printButton('「지금은 비가 오기 시작했으니, 일단 돌아가자.」（지구력+10）', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        callname,
        '의 말이 맞아! 지금 포기하기엔 너무 일러! 같이 찾자!',
      ]);
      await era.printAndWait([
        '그리하여 점차 거세지는 빗줄기 속에서, ',
        me.get_colored_name(),
        '과(와) 두 명의 꼬마 ',
        urara.get_uma_sex_title(),
        '는 옷이 흠뻑 젖기 직전에 마침내 ',
        rice.get_colored_name(),
        '의 리본을 찾는 데 성공했다.',
      ]);
      await urara.say_and_wait(
        '헤헤~ 다들 물에 빠진 생쥐 꼴이 될 뻔했지만, 리본을 찾아서 정말 다행이야!',
      );
      await rice.say_and_wait([
        '미, 미안해. 리본도 잃어버리고 비까지 오게 해서…… ',
        sys_get_callname(30, 30),
        '가 또 모두를 힘들게 했네……',
      ]);
      await urara.say_and_wait([
        '에? ',
        sys_get_colored_callname(52, 30),
        '의 말대로라면, 그러니까…… ',
        sys_get_colored_callname(52, 30),
        '은 하늘에서 비가 내리게 할 수 있다는 거야? 정말 대단해!',
      ]);
      await rice.say_and_wait([
        '아아아, 아니야. ',
        sys_get_callname(30, 30),
        '는 그런 뜻으로 말한게 아니야, ',
        sys_get_colored_callname(30, 52),
        '……',
      ]);
      await era.printAndWait([
        '두 친구가 또 다른 작은 난제에 빠진 것 같았지만, ',
        rice.get_colored_name(),
        '의 굳어있던 표정은 ',
        urara.get_colored_name(),
        ' 덕분에 완전히 풀려 있었다.',
      ]);
      await era.printAndWait([
        '얼마 후, ',
        me.get_colored_name(),
        '의 도움으로 옷을 말린 ',
        urara.get_colored_name(),
        '와 ',
        rice.get_colored_name(),
        '는 다시금 미소를 되찾았다——',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        52,
        [0, 0, 0, 20, 0],
        0,
        JSON.parse('{"체력":-100}'),
        true,
      );
    } else {
      await urara.say_and_wait([
        callname,
        ', 우라라는 괜찮아! 비 오는 것도 재미있으니까! 그것보다 리본을 빨리 찾아야 해!',
      ]);
      await rice.say_and_wait([
        '하지만 비에 젖으면 감기에 걸릴 거야! ',
        sys_get_callname(30, 30),
        '는 ',
        sys_get_colored_callname(30, 52),
        '까지 감기에 걸리는 건 싫어……',
      ]);
      await urara.say_and_wait(
        '음…… 그럼 비가 그치면 다시 와서 찾자. 꼭이야! 약속한 거다?',
      );
      await era.printAndWait([
        '헤어진 뒤, 비는 다음 날 아침이 되어서야 그쳤다. 하지만 ',
        me.get_colored_name(),
        '과(와) ',
        rice.get_colored_name(),
        '가 현장에 도착했을 때, ',
        urara.get_colored_name(),
        '는 이미 리본을 손에 든 채 그곳에서 기다리고 있었다.',
      ]);
      await urara.say_and_wait([
        sys_get_colored_callname(52, 30),
        '! ',
        callname,
        '! 여기야! 우라라가 리본 찾았어——!',
      ]);
      await rice.say_and_wait(['……', sys_get_colored_callname(30, 52), '……!']);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 활기차게 뛰어오는 모습에, 방금까지 걱정 가득한 얼굴이던 ',
        rice.get_colored_name(),
        '도 미소를 지었다.',
      ]);
      await era.printAndWait([
        '역시 ',
        urara.sex,
        '가 아침 일찍 나간 건 리본을 찾기 위해서였다. 마음속의 추측이 사실로 확인되자, ',
        me.get_colored_name(),
        '은(는) 꼬마 ',
        urara.get_uma_sex_title(),
        '의 기숙사 사감과 룸메이트에게 연락을 보냈다……',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        52,
        [0, 10, 0, 0, 0],
        0,
        JSON.parse('{"체력":-100}'),
        true,
      );
    }
    flags.wait_flag = sys_like_chara(30, 52, 200) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(52, 30, 100) || flags.wait_flag;
  };

  handlers.interview = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:현재상호작용캐릭터') !== 52) {
      add_event(event_hooks.school_atrium, event_object);
      return true;
    }
    await print_event_name('친구와 함께 인터뷰', urara);
    const rice = get_chara_talk(30);
    await era.printAndWait([
      '오늘, ',
      urara.get_colored_name(),
      '와 ',
      rice.get_colored_name(),
      '는 온라인 매체의 《단짝 친구 레이스 ',
      urara.get_uma_sex_title(),
      '》 코너에 실릴 특별 인터뷰를 함께 받게 되었다.',
    ]);
    await era.printAndWait([
      '하지만 학원에 자주 출몰하는 ',
      get_chara_talk(303).get_colored_name(),
      '와는 전혀 다른 낯선 사람의 인터뷰라 그런지, 두 명의 꼬마 ',
      urara.get_uma_sex_title(),
      '는 좀처럼 긴장을 풀지 못하는 모양이었다.',
    ]);
    await era.printAndWait(
      '기자A 「그럼, 두 분이 같이 지내면서 가장 인상 깊었던 일이 있나요?」',
    );
    if (
      era.get('cflag:30:모집상태') === recruit_flags.yes &&
      era.get('love:30') >= 50 &&
      era.get('love:52') >= 52
    ) {
      await urara.say_and_wait([
        '인상 깊었던 일? ',
        callname,
        '와 같이 있을 때 말이야?',
      ]);
      await rice.say_and_wait([
        '네, ',
        sys_get_colored_callname(30, 0),
        '와 함께 있을 때는 확실히 인상적이었어요. 독차지하는 것도 좋지만……',
      ]);
      await rice.say_and_wait([
        '하지만 ',
        sys_get_callname(30, 30),
        '와 ',
        sys_get_colored_callname(30, 52),
        '이 한꺼번에 달려들면 ',
        sys_get_colored_callname(30, 0),
        '는 의외로 당황하시더라고요. 그게 정말 귀여워요.',
      ]);
      await urara.say_and_wait(
        '그치! 하지만 우라라는 몰래 간식을 가져가는 건 안 좋다고 생각해. 모두에게 말하고 가져가야지!',
      );
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        '은 아직 어린아이니까. 하지만 ',
        sys_get_callname(30, 30),
        '는 고등부, 벌써 어른이라구……?',
      ]);
      await urara.say_and_wait('에? 그런 거야~?');
      await era.printAndWait(
        '기자가 물어본 의도와는 별개로, 두 단짝 친구 사이의 분위기가 어딘가 이상한 것 같은데……?',
      );
      await era.printAndWait([
        '친구들 사이의 분위기에 압도되어 몸을 떨고 있는 기자님을 본 ',
        me.get_colored_name(),
        '은(는) 이 부분이 방송에 나가지 못할 것임을 직감했다——',
      ]);
    } else {
      await urara.say_and_wait(
        '인상 깊었던 일? 도대체 어떤 게 인상 깊은 거야? 우라라는 매일매일이 그런 것 같아!',
      );
      await rice.say_and_wait([
        '인, 인상 깊었던 일……! 사실 ',
        sys_get_callname(30, 30),
        '도…… 그게……!',
      ]);
      await rice.say_and_wait([
        '인상 깊기는 하지만, ',
        sys_get_callname(30, 30),
        '는 매일 폐만 끼치는 것 같아서 정말 죄송해요……',
      ]);
      await urara.say_and_wait([
        '에? ',
        sys_get_colored_callname(52, 30),
        ', 왜 갑자기 또 풀이 죽은 거야? 정말 괜찮다니까——',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 어쩔 수 없다는 듯 기자를 바라보았고, 그녀 역시 ',
        me.get_colored_name(),
        '에게 이런 상황이 익숙하면서도 씁쓸하다는 눈빛을 보냈다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와 ',
        urara.sex,
        '들의 현재 상황은, 인터뷰 담당자들이 원래 예상했던 방향과는 완전히 딴판으로 흘러가고 있었다.',
      ]);
    }
    await era.printAndWait([
      '인터뷰가 잠시 중단된 사이, ',
      me.get_colored_name(),
      '은(는) 담당 보호자로서 인터뷰 팀과 다음 계획에 대해 의논하기 시작했다.',
    ]);
    await era.printAndWait([
      '기자A 「죄송합니다만, 시간을 조금만 주세요. ',
      urara.sex,
      '들의 매력을 더 잘 보여드리기 위해 인터뷰 방향을 새로 잡아야 할 것 같아요……」',
    ]);

    era.printButton('「수고하십니다. 저도 방법을 한번 고민해 볼게요.」', 1);
    await era.input();

    await era.printAndWait([
      '연신 고개를 숙이는 기자를 배웅한 뒤, ',
      me.get_colored_name(),
      '은(는) 다시 시선을 옮겨 근처에서 대화를 나누는 라이스 샤워와 ',
      urara.get_colored_name(),
      '를 바라보았다.',
    ]);
    await rice.say_and_wait([
      '정말 미안해, 방금 ',
      sys_get_callname(30, 30),
      '가 너무 흥분했어…… 우리 추억이 그렇게나 많은데……',
    ]);
    await rice.say_and_wait([
      sys_get_callname(30, 30),
      ', ',
      sys_get_colored_callname(30, 52),
      '과 함께 인터뷰를 받게 되어서 정말 기뻤거든…… 그냥 솔직하게 말하면 됐을 텐데……',
    ]);
    await urara.say_and_wait([
      '우라라도 그래! ',
      sys_get_colored_callname(52, 30),
      '이랑 함께 특별 보도에 실리다니, 꼭 꿈만 같단 말이야!',
    ]);
    await urara.say_and_wait([
      '그러니까 괜찮아, ',
      sys_get_colored_callname(52, 30),
      '은 그냥 평소대로 하면 돼. 우라라가 ',
      sys_get_colored_callname(52, 30),
      ' 곁에 있을게!',
    ]);
    await rice.say_and_wait('하, 하지만……!');
    await era.printAndWait(
      '한쪽은 평소 생각이 너무 많아 불안해하고, 다른 한쪽은 평소처럼 의욕이 너무 앞서 있었다.',
    );

    era.print([
      '다음 단계에서 ',
      urara.sex,
      '들의 긴장을 풀어줄 좋은 방법이 없을까……',
    ]);
    era.printButton(`${urara.sex}들에게 줄 간식을 가져온다.（근력+20）`, 1);
    era.printButton(`${urara.sex}들과 함께 놀아준다.（지구력+20）`, 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      attr_change[attr_enum.strength] = 20;
      await urara.say_and_wait([
        '에? 간식 먹어도 되는 거야? 고마워, ',
        callname,
        '—— ',
        sys_get_colored_callname(52, 30),
        '! 아~ 해봐!',
      ]);
      await rice.say_and_wait([
        '어라? ',
        rice.get_colored_name(),
        '도 먹어도 되는 거야…… 우와! ',
        sys_get_colored_callname(30, 52),
        ', 너무 적극적이야! ',
        rice.get_colored_name(),
        '가 직접 먹을 수 있는데……!',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 도움으로 ',
        urara.get_colored_name(),
        '와 ',
        rice.get_colored_name(),
        '는 시끌벅적하게 간식을 나눠 먹기 시작했고, 근처의 스태프들도 즉시 카메라를 설치했다.',
      ]);
      await rice.say_and_wait(
        '……음, 역시 간식에는 특별한 마법이 들어가야 행복해지는 맛이 나는 것 같아……',
      );
      await urara.say_and_wait(
        '맞아! 저번에 같이 쿠키 구웠을 때도 그랬잖아? 다들 말한 마법의 레시피를 넣으니까 정말 더 맛있어졌어!',
      );
      await era.printAndWait(
        '기자A 「그 추억 정말 재미있네요! 저도 흥미가 생기는데, 조금만 더 자세히 들려주시겠어요?」',
      );
      await urara.say_and_wait([
        '기자 언니도 흥미가 생겨? 그럼 잠시만 기다려 봐…… ',
        sys_get_colored_callname(52, 30),
        '! 우라라가 가사실습실 좀 빌려도 될까?',
      ]);
      await rice.say_and_wait([
        '에? 지금? 그럼 라이스는 지난번에 남은 재료들을 찾아볼게!',
      ]);
      await era.printAndWait([
        '재조정된 인터뷰에서, 특별 인터뷰 프로그램은 마침내 두 명의 꼬마 ',
        urara.get_uma_sex_title(),
        '가 활약하는 모습을 온전히 담아낼 수 있었다.',
      ]);
      await era.printAndWait(
        '프로그램의 후반부가 갑자기 간식 만들기 채널로 변해버린 것 같지만, 모두가 즐거워 보이니 큰 문제는 없을 것이다.',
      );
    } else {
      attr_change[attr_enum.endurance] = 20;
      await urara.say_and_wait([
        '에? 놀아도 돼? 인터뷰는 괜찮고…… 아! 우라라 알겠어…… ',
        sys_get_colored_callname(52, 30),
        '!',
      ]);
      await rice.say_and_wait([
        '어, 어라!? 지금 뭘 하려고…… 와아! 자, 잠깐만! ',
        sys_get_colored_callname(30, 52),
        ', 이러면 안 돼~!',
      ]);
      await era.printAndWait([
        '하지만 어디서부터 잘못된 걸까? 분명 평범한 꼬마 ',
        urara.get_child_sex_title(),
        '들의 장난이었을 텐데, 왜 들리는 소리는 이렇게 처참한 걸까……',
      ]);
      await era.printAndWait(
        '기자A 「오, 이 장면 정말 좋은데요! 잠시만요, 금방 찍을게요!」',
      );
      await era.printAndWait([
        '두 사람이 서로 쫓고 쫓기며 장난치는 모습을 포착한 기자는 신속하게 카메라를 들고 연사하기 시작했다——',
      ]);
      await rice.say_and_wait([
        '우우~ ',
        sys_get_colored_callname(30, 52),
        '! 자꾸 이러면 라이스도 화낼 거야—— 좋아! ',
        rice.get_colored_name(),
        '도 ',
        sys_get_colored_callname(30, 52),
        '을 따라잡겠어!',
      ]);
      await urara.say_and_wait([
        '잠깐잠깐! ',
        sys_get_colored_callname(52, 30),
        ', 이러지 마! 우라라가 잘못했어~!',
      ]);
      await era.printAndWait('……역시 어딘가 오해를 사고 있는 게 분명하다!');
      await era.printAndWait(
        '며칠 후, 특별 보도에는 두 사람이 노는 사진이 실렸다. 이 사진은 소위 말하는 인생샷으로 불리며 한동안 큰 화제가 되었다고 한다.',
      );
      await era.printAndWait([
        '어째서인지 분위기를 파괴하는 ',
        urara.sex_code - 1 ? '로리' : '쇼타',
        '콘 성향의 코멘트들이 섞여 있는 것 같지만, 결과적으로는 완벽하게 마무리된 셈일까……?',
      ]);
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      attr_change,
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(52, 30, 100) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(30, 52, 100) || flags.wait_flag;
  };
};