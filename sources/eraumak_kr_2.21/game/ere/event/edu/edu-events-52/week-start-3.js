const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 6] = async (urara, me, in_urara, callname) => {
    await print_event_name('깜짝 선물!', urara);
    await in_urara.say_as_unknown_and_wait(
      '발렌타인데이와 초콜릿은, 결국 마케팅 수단과 상품의 관계일 뿐이지만, 의외로 나쁘지는 않네요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '오해하지 마세요. 축제 분위기에 젖어 있는 바보 커플들을 관찰하는 것보다, 저는 초콜릿 자체에 더 관심이 있을 뿐이니까요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '네? 아니에요. 딱히 초콜릿 맛을 특별히 좋아하는 건 아니랍니다.',
    );
    era.drawLine();
    await era.printAndWait(
      '이른 아침, 일어나 세수하고 옷을 입었다. 아침 식사를 서둘러 마치고, 현관에 서서 무심하게 달력을 훑어보았다.',
    );
    await era.printAndWait([
      '오늘은 발렌타인데이다. 하지만 그렇다 해도 정해진 일정은 있다. 가볍게 옷매무새를 정리하고, ',
      me.get_colored_name(),
      '은(는) 숙소의 방문을 열었다.',
    ]);
    await era.printAndWait([
      '그러자, 생각지도 못한 소동물이 즉시 문밖에서 두 귀를 쫑긋 내밀며, ',
      me.get_colored_name(),
      '의 오늘 일정에 너무 일찍 침입해 들어왔다.',
    ]);
    await era.printAndWait([
      '방금 막 도착한 듯 주변에 짐꾸러미를 가득 내려놓은 ',
      urara.get_colored_name(),
      '가 막 문을 두드리려던 손을 내리고, 한 걸음 다가와 미소를 지으며 ',
      me.get_colored_name(),
      '을(를) 껴안았다.',
    ]);
    await urara.say_and_wait([callname, '! 날이 밝았어, 안녕——!']);

    era.printButton('「오! 안녕…… 우라라?!」', 1);
    await era.input();

    await urara.say_and_wait('헤헤~ 방해해서 미안해——!');
    await era.printAndWait([
      urara.get_colored_name(),
      '에게 꽉 껴안긴 채, 인간보다 체온이 약간 높은 작은 ',
      urara.get_uma_sex_title(),
      '가 겨울옷 너머로 자신의 ',
      callname,
      '에게 특유의 온기를 전달하고 있었다.',
    ]);
    await era.printAndWait([
      '2월의 기온은 여전히 따뜻하다고 할 수 없었지만, 달려온 직후라 그런지 지금 작은 ',
      urara.get_uma_sex_title(),
      '의 몸에서는 따스하고 활기찬 향기가 풍겨왔다.',
    ]);
    await era.printAndWait([
      '그리고 오늘의 첫 번째 친밀한 접촉 속에서, 담당 우마무스메의 약간 어린아이 같은 포옹에 감싸인 ',
      me.get_colored_name(),
      '은(는) 평소와는 다른 미묘한 분위기를 감지했다.',
    ]);

    era.printButton('「잠깐, 너 왜 갑자기 달려온 거야?」', 1);
    await era.input();

    if (era.get('relation:52:0') > 150) {
      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '왜 그럴까? ',
          callname,
          ', 맞춰볼래? 맞추지 않아도 알 수 있겠지만, 오늘은 특별한 날이니까!',
        ]);
        await era.printAndWait([
          '포옹을 풀고, 상기된 얼굴의 작은 ',
          urara.get_uma_sex_title(),
          '가 발꿈치를 들고 장난스럽게 ',
          me.get_colored_name(),
          '의 입술 위에 작고 달콤한 입맞춤을 남겼다.',
        ]);
        await urara.say_and_wait([
          callname,
          '가 가장 좋아하는 뽀뽀야! 그리고 우라라 특제 『진심 초콜릿』…… 이렇게 말하는 거 맞지?',
        ]);
        await era.printAndWait([
          '옷 안에서 정성스럽게 포장된 작은 선물 상자를 꺼내며, ',
          urara.get_colored_name(),
          '는 아직 몸의 온기가 남아있는 초콜릿을 ',
          me.get_colored_name(),
          '의 손에 건네주었다.',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          '도 분명 알고 있지? 우라라조차 오늘 뭘 해야 하는지 기억하고 있는걸?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '을(를) 놓아준 작은 ',
          urara.get_uma_sex_title(),
          '가 외투 주머니 속을 한참 뒤적거리더니 정성껏 포장된 작은 선물 상자를 꺼냈다.',
        ]);
        await urara.say_and_wait([
          '짠——! ',
          callname,
          ', 이 안에 뭐가 들었는지 알아? 이 안에는 모두를 행복하게 만드는 게 들어있어!',
        ]);
        await urara.say_and_wait([
          '오늘은 ',
          callname,
          '에게 우라라표 초콜릿을 줄게! 지금 바로 열어봐!',
        ]);
      }
    } else if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '어? ',
        callname,
        ', 오늘이 무슨 날인지 잊어버린 거야? 음…… 그럼 우라라가 ',
        callname,
        '에게 알려줄게!',
      ]);
      await era.printAndWait([
        '약간 수줍게 품 안에서 정성스러운 작은 선물 상자를 꺼내며, ',
        urara.get_colored_name(),
        '는 아직 몸의 온기가 남아있는 초콜릿을 ',
        me.get_colored_name(),
        '의 손에 건네주었다.',
      ]);
      await urara.say_and_wait([
        '발렌타인데이의 『진심 초콜릿』……? 이렇게 말하는 거 맞나? 어쨌든 ',
        callname,
        '에게 주는 거야! 그리고 이것도……',
      ]);
      await era.printAndWait([
        '초콜릿을 밀어 넣음과 동시에, 작은 ',
        urara.get_uma_sex_title(),
        '가 살며시 발꿈치를 들어 방심한 틈을 타 ',
        me.get_colored_name(),
        '의 뺨에 살짝 입을 맞췄다.',
      ]);
    } else {
      await urara.say_and_wait(
        '왜냐하면 오늘은 발렌타인데이니까! 그래서 내가 모두에게 줄 초콜릿을 많이 만들었어! 잠깐만……',
      );
      await era.printAndWait([
        '옆에 둔 가방 안을 한참 뒤진 끝에, ',
        urara.get_colored_name(),
        '는 정성스럽게 포장된 초콜릿 한 상자를 ',
        me.get_colored_name(),
        '의 손에 건네주었다.',
      ]);
      await urara.say_and_wait(
        '음…… 응! 의리야! 의리 초콜릿…… 다들 그렇게 말하라고 했어!',
      );
      await urara.say_and_wait([
        '그래도 우라라는 ',
        callname,
        '에게 정말 고마워하고 있으니까, 이것도 특제야! ',
        callname,
        ', 지금 열어볼래?',
      ]);
    }
    await era.printAndWait([
      urara.get_colored_name(),
      '의 재촉하는 눈빛 속에서 포장지를 열자, 그 안에는 분명히 주황색…… 아니, 진한 오렌지빛을 띠는 초콜릿이 나타났다.',
    ]);
    await era.printAndWait(
      '이게 정말 초콜릿에 어울리는 색인가? 도대체 뭘 넣었길래 초콜릿이 이렇게 컬러풀해진 거지……',
    );

    era.printButton('「색이 참 신기하네……」', 1);
    await era.input();

    await urara.say_and_wait('어때? 맛있어 보이지?');
    await urara.say_and_wait(
      '발렌타인데이는 평소에 돌봐주는 사람에게 초콜릿을 주는 날이잖아! 그래서 어젯밤에 열심히 만들었어!',
    );
    await era.printAndWait([
      '작은 ',
      urara.get_uma_sex_title(),
      '의 마음을 지켜주기 위해, ',
      me.get_colored_name(),
      '은(는) 「마치 독이 있는 동식물의 경계색 같아」라는 뒷말을 억지로 삼켰다.',
    ]);

    era.printButton('「고마워, 그런데 이건…… 오렌지 맛이야?」', 1);
    await era.input();

    await urara.say_and_wait(
      '아니, 당근 맛이야! 성공적으로 잘 만들었지? 우라라가 아껴둔 당근도 썼어!',
    );

    era.printButton('「당근……?」', 1);
    await era.input();

    await urara.say_and_wait('응, 당근! 그것도 내가 특별히 골라낸 거야!');
    await urara.say_and_wait([
      '내 생각에 ',
      callname,
      '도 당근이 들어간 초콜릿을 좋아할 것 같아서, 이렇게 시도해 봤어!',
    ]);
    await era.printAndWait([
      '뭐라고 해야 할까, 예상 밖이면서도 납득이 가는 해답이랄까? 상자 속에서 주황색으로 번쩍이는 물질을 보며, ',
      me.get_colored_name(),
      '은(는) 깊은 생각에 잠겼다.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      '가 당근을 무척 좋아하는 생물이라는 건 알지만, 이 물질의 생성 과정은 이미 연금술의 영역이 아닐까……',
    ]);
    await era.printAndWait([
      '뭐, ',
      urara.get_colored_name(),
      '에게 놀라는 건 진작에 익숙해졌어야 했다. 게다가 발렌타인데이에 초콜릿을 받는 것 자체는 기쁜 일이다.',
    ]);

    era.printButton('「저기, 초콜릿, 지금 먹어봐도 될까?」', 1);
    await era.input();

    await urara.say_and_wait('헤헤~ 천만에! 한꺼번에 다 먹어도 괜찮아!');
    await era.printAndWait([
      urara.get_colored_name(),
      '의 허락을 받은 후, ',
      me.get_colored_name(),
      '은(는) 조심스럽게 상자 안의 내용물을 한 귀퉁이 떼어냈다. 색깔은 특별하지만 초콜릿은 평범한 소리를 내며 부러졌다.',
    ]);
    await era.printAndWait(
      '초콜릿을 입에 넣자, 먼저 당근 특유의 「채소 맛」이 느껴졌고, 그 뒤를 이어 약간 씁쓸하면서도 맑은 단맛이 따라왔다.',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      '가 만든 수제 쿠키와는 달리, 이 초콜릿은 맛있다기보다는 「말차 맛 마파두부」 같은 비주류의 느낌이 강했지만……',
    ]);
    await era.printAndWait(
      '그렇다고는 해도, 색과 미각을 설명하기 힘들 뿐이지, 먹는 데 거부감이 없을 정도의 맛은 유지하고 있었다.',
    );
    await era.printAndWait([
      '……그런데 다시 생각해 보니, 짧은 시간 안에 이런 논외의 소재로 먹을 만한 맛을 조율해내다니, 설마 ',
      urara.get_colored_name(),
      '는 정말 천재인 건가……?',
    ]);

    await urara.say_and_wait([callname, ', 우라라 특제 초콜릿 맛이 어때?']);
    era.printButton(
      '「와…… 약간 묘하긴 한데, 이 초콜릿 의외로 맛이 괜찮네……」（호감도+20）',
      1,
    );
    era.printButton(
      '「음…… 응! 이런 맛의 초콜릿은 처음 먹어봐, 꽤 신선한걸……」（애정도+10）',
      2,
    );
    const ret = await era.input();

    await urara.say_and_wait([
      '그렇지! 나 이제 상점가 분들한테 주러 갈 거야! ',
      callname,
      '도 같이 갈래? 다들 분명 기뻐할 거야!',
    ]);

    era.printButton('「안 갈 이유가 없지, 그런데 우라라, 초콜릿을 얼마나 준비한 거야?」', 1);
    await era.input();

    await urara.say_and_wait(
      '모두에게 줄 초콜릿은 진작에 준비해 뒀어! 전부 우라라가 직접 만든 거야!',
    );
    await era.printAndWait([
      '미리 준비해 둔 듯 등 뒤에서 커다란 가방 몇 개를 꺼내며, ',
      urara.get_colored_name(),
      '는 미소를 지으며 ',
      me.get_colored_name(),
      '에게 자랑했다.',
    ]);
    await urara.say_and_wait(
      '그리고! 모두에게 줄 초콜릿도 정말 대단하게 만들었어! 가게마다 전부 다른 맛이야!',
    );
    await era.printAndWait([
      '응, 다른 맛…… 잠깐? 우라라의 천진난만한 미소를 보며, 불길한 예감이 ',
      me.get_colored_name(),
      '의 마음속에서 끊임없이 소용돌이치기 시작했다.',
    ]);
    await urara.say_and_wait(
      '바로 이거야! 채소 가게에는 채소를 넣고, 생선 가게에는 생선을 넣고, 정육점에는 고기를 넣고……',
    );
    await era.printAndWait([
      '말할 수 없는 무언가가 들어있을 것 같은 가방을 ',
      urara.get_colored_name(),
      '의 손에서 떨리는 손으로 건네받으며, ',
      me.get_colored_name(),
      '은(는) 결국 그 안의 상자를 열어 확인할 용기를 내지 못했다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '를 믿지 못하는 것은 아니지만, 그런 기묘한 소재와 초콜릿의 혼합물은 들으면 들을수록 정말 불길했다.',
    ]);
    await era.printAndWait([
      '당근 맛까지는 예상 범위 내였지만, 그것들까지 맛을 보장해야 한다니…… ',
      urara.get_colored_name(),
      '는 정말 연금술사일지도 모른다……',
    ]);
    await era.printAndWait([
      '결국, ',
      me.get_colored_name(),
      '은(는) 무의미한 사고를 포기했다——어쨌든 ',
      urara.get_colored_name(),
      '는 천재라는 걸로 치자!',
    ]);

    era.printButton('「응, 뭐, 우, 우라라 정말, 정말 대단해!」', 1);
    await era.input();

    await urara.say_and_wait('그렇지? 다들 기뻐하는 모습이 정말 기대돼——');
    await era.printAndWait([
      '분명 볼 수 있을 것이다. 다들 ',
      urara.get_colored_name(),
      '를 위해서라도 필사적으로 미소를 지어 보이겠지만, 그 후의 위장 건강은 신의 가호가 필요할지도 모른다……',
    ]);
    await era.printAndWait([
      '복잡하면서도 비장한 마음을 품고, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '와 함께 상점가로 향하며, 「매우 소란스러운」 발렌타인데이를 보낼 준비를 마쳤다.',
    ]);
    await era.printAndWait(
      '원래 계획했던 오늘 일정은…… 뭐, 「계획은 언제나 변하는 법」이라고 생각하기로 했다.',
    );
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '음…… 하지만 여러 가지 맛의 초콜릿이라니, 초콜릿이라, 초콜릿……',
    );
    await in_urara.say_as_unknown_and_wait(
      '왜요, 그 눈빛은 무슨 의미죠? 간식에 대해서라면, 저는 우라라처럼 유치한 입맛이 아니라고요?',
    );
    await in_urara.say_as_unknown_and_wait('에? 아직 안 물어보셨다고요? 아…… 쳇, 당신이란 사람은……');
    era.println();
    sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) &&
      (await era.waitAnyKey());
    era.add('item:발렌타인초콜릿', 1);
    era.set('cflag:52:축제이벤트표시', 0);
  };

  handlers[47 + 29] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:52:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    edu_marks.summer1 = 1;
    await print_event_name('여름 합숙 (클래식 시즌) 시작', urara);
    await in_urara.say_as_unknown_and_wait(
      '마치 학교 소풍 같네요. 하지만 결국은 훈련하러 가는 거죠?',
    );
    await in_urara.say_as_unknown_and_wait(
      '그래도 즐거울 수만 있다면 괜찮겠죠. 즐거울 수만 있다면……',
    );
    era.drawLine();
    await era.printAndWait([
      '중앙 트레센은 매년 ',
      urara.get_uma_sex_title(),
      '들의 능력을 강화하기 위해 여름 합숙을 개최하며, 이번에 ',
      me.get_colored_name(),
      '도 ',
      urara.get_colored_name(),
      '를 위해 참가 신청을 했다.',
    ]);
    await era.printAndWait([
      '이것은 ',
      urara.get_colored_name(),
      '의 실력을 키울 수 있는 절호의 기회다. 비록 작은 ',
      urara.get_uma_sex_title(),
      '의 기분상으로는 여행의 흥분이 훨씬 앞서 보이지만 말이다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      urara.get_colored_name(),
      '가 이런 상태를 유지하는 것도 나쁘지 않다. 양호한 정신 상태와 건강한 신체는 강압적인 훈련보다 훨씬 효과적이기 때문이다.',
    ]);
    await era.printAndWait([
      '애초에 ',
      urara.sex,
      '는 아직 다 자라지 않은 아이이기도 하고……',
    ]);
    await urara.say_and_wait([
      callname,
      '! 저기 하늘이 엄청 멀어 보여! 대체 어디까지 이어져 있는 걸까?',
    ]);
    await urara.say_and_wait([
      '아! 바다가 조금 보여! ',
      callname,
      ', 해변에서 달리면 기분 좋아?',
    ]);
    await era.printAndWait([
      '차창 밖을 바라보며, ',
      me.get_colored_name(),
      '의 곁에 앉은 ',
      urara.get_colored_name(),
      '가 흥분을 감추지 못하고 계속해서 ',
      me.get_colored_name(),
      '에게 질문을 던졌다.',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait('헤헤~ 다 같이 하는 외박이네! 우라라, 엄청 기대했어!');
      await urara.say_and_wait([
        callname,
        '도 즐거워? 우라라는 ',
        callname,
        '랑 매일 바다에서 물놀이하고 싶어!',
      ]);
      await era.printAndWait([
        '부드러운 몸을 ',
        me.get_colored_name(),
        '의 곁에 밀착시키며, ',
        urara.get_colored_name(),
        '는 마치 분홍색 꼬마 새처럼 ',
        me.get_colored_name(),
        '의 귓가에서 즐겁게 지저귀었다.',
      ]);
    } else {
      await urara.say_and_wait('우라라는 다 같이 외박하는 게 처음이야!');
      await urara.say_and_wait([
        callname,
        '도 다른 사람이랑 외박해 본 적 있지? 그때 즐거웠어?',
      ]);
      await era.printAndWait([
        '겉으로 보기엔 말하는 것만큼 즐거워 보이지 않았지만, ',
        urara.get_colored_name(),
        '의 몸은 솔직하게 ',
        me.get_colored_name(),
        '에게 달라붙어 있었다.',
      ]);
    }
    if (era.get('love:52') >= 50) {
      era.println();
      await urara.say_and_wait([
        '그리고 또! 쓸 일이 있을지는 모르겠지만, 우라라는 ',
        callname,
        '랑 꽁냥꽁냥할 준비도 다 마쳤다고?',
      ]);
      await urara.say_and_wait([
        '백사장에서든, 밤에 단둘이 있을 때든, 우라라는 다 괜찮아~ ',
        callname,
        ', 기대돼?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 좀 자제해줬으면 좋겠다고 생각했다. ',
        urara.get_colored_name(),
        '의 천진난만하면서도 요염한 미소와 마주하기 힘들었던 ',
        me.get_colored_name(),
        '은(는) 묵묵히 고개를 돌렸다.',
      ]);
    }
    era.println();
    await era.printAndWait([
      '이 나이대의 어린 ',
      urara.get_uma_sex_title(),
      '가 놀고 싶은 마음이 강한 건 좋은 일이지만, 너무 흥분한 것 같은데 정말 괜찮을까?',
    ]);
    await era.printAndWait([
      '불안을 느낀다 해도 시간과 작은 ',
      urara.get_uma_sex_title(),
      '는 기다려주지 않는다. 전력을 다해 부딪히기로 했다.',
    ]);
    await era.printAndWait('여름 합숙 시작!');
  };

  handlers[47 + 43] = async (urara, me, in_urara, callname, edu_marks) => {
    await print_event_name('「변화」&「선택」', urara);
    await in_urara.say_as_unknown_and_wait([
      '우라라라는 이름의 ',
      urara.get_uma_sex_title(),
      '가 있었는데, 몇 번을 져도 계속해서 노력한다는 이야기를 들었어요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '경기장 곳곳에서 그런 소문이 들려오던 어느 날——',
    );
    era.drawLine();
    await urara.say_and_wait(
      '으음—— 나름대로 생각은 해봤는데, 역시 이기는 건 너무 어려워! 다들 『슈슉』 하고 앞으로 치고 나가버려——',
    );
    await era.printAndWait([
      '모의 레이스 경기장 안, 안심과 신뢰를 저버리지 않고(?) 다시 최하위로 들어온 ',
      urara.get_colored_name(),
      '가 약간 부루퉁한 표정으로 ',
      me.get_colored_name(),
      '의 품속으로 뛰어들었다.',
    ]);
    await era.printAndWait(
      '레이스 패배에 대한 분함을 표현할 줄 알게 된 후로, 이 분홍색 털뭉치는 더욱 소동물 같아졌다는 느낌이 든다.',
    );
    if (!edu_marks.summer1) {
      await era.printAndWait([
        urara.get_colored_name(),
        '는 도대체 언제부터 이렇게 의욕이 넘치게 된 걸까? 여름 합숙 기간에 무슨 일이라도 있었나?',
      ]);
      await era.printAndWait([
        '그래도 다행히 큰 문제는 없었던 것 같다. ',
        urara.get_colored_name(),
        ' 스스로도 잘 성장할 수 있다니, 참 착한 아이네……',
      ]);
    }
    era.println();
    await era.printAndWait([
      urara.get_colored_name(),
      '의 몸을 조심스레 쓰다듬으며 치유 받는 표정의 ',
      me.get_colored_name(),
      '과(와), 품 안에서 아직 투정을 부리는 귀여운 생물은 선명한 대조를 이루었다.',
    ]);
    await era.printAndWait([
      '물론 ',
      me.get_colored_name(),
      '도 이제는 알고 있다. ',
      urara.sex,
      '가 평소에 늘 꼴찌를 하는 이유를. 원래 집중력이 부족한 데다, 일상적인 레이스에서는 힘을 제대로 쓰지 못하기 때문이다.',
    ]);
    await era.printAndWait([
      '무작정 다그칠 필요는 없다. ',
      urara.get_uma_sex_title(),
      '의 신체에는 한계가 있고, 평소에 너무 긴장할 필요도 없다. ',
      urara.get_colored_name(),
      '에게는 그것이 더욱 중요하다.',
    ]);
    await era.printAndWait(
      '처음에는 가끔 해결해야 할 문제라고 생각한 적도 있었지만, 이제는 우리 작은 담당에게 가장 적합한 성장 모델을 거의 파악했다.',
    );
    await era.printAndWait([
      '지금은 그저 본 레이스 전까지 승리의 조건을 조금씩 쌓아가고, 본 레이스에서 성적을 내기만 한다면 ',
      urara.get_colored_name(),
      '에게는 성공인 셈이다.',
    ]);

    era.printButton(
      '「서두를 것 없어, 우선 진정하고. 우라라는 어떻게 해야 이길 수 있을 것 같아?」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '그냥 우라라 혼자서만 레이스에 나가면 돼! 나 혼자서만 달린다면 1등도 무조건 나일 거야!',
    );
    await era.printAndWait([
      '뭐? 뭐라고? 순간 ',
      urara.get_colored_name(),
      '가 농담을 하는 건지 분간이 안 되어, ',
      me.get_colored_name(),
      '은(는) 하마터면 훈련장가에서 발을 헛디뎌 넘어질 뻔했다.',
    ]);

    await in_urara.say_as_unknown_and_wait('당신, 아하하…… 아무튼 뭐라도 말 좀 해보세요……');
    era.printButton('「그 제안은, 아마 부회장님이 뒷목 잡고 쓰러질 소리네.」（호감도+15）', 1);
    era.printButton('「호, 혹시 우라라 너 정말 천재야?」（애정도+8）', 2);
    const ret = await era.input();

    await urara.say_and_wait([
      '에헤헤~ ',
      callname,
      '한테 놀림당했다! 하지만 그건 그렇네, 그러면 더 이상 레이스가 아니니까.',
    ]);
    await urara.say_and_wait(
      '하지만 역시 스스로에게 조금 화가 나. 자신을 너무 몰아붙일 필요가 없다는 건 알지만, 그래도 난 너무 느린걸……',
    );
    await urara.say_and_wait(
      '내가 아무리 져도 변함없는 모두는 나를 탓하지 않겠지만, 그렇기에 내가 더 빨리 변해야만 해.',
    );

    era.printButton('「하지만 자신을 제대로 알게 된 후로, 우라라는 분명 더 강해졌잖아?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응, ',
      callname,
      '가 말한 대로 우라라도 강해졌어. 레이스 때 응원하러 오는 사람들도 더 많아졌는걸.',
    ]);
    await urara.say_and_wait(
      '상점가 사람들이 그러는데, 응원회 사람들도 점점 늘어나고 있대! 많은 새 팬들이 내가 마음껏 달릴 수 있게 응원해 주고 있어!',
    );
    await era.printAndWait([
      '실제로 최근 레이스에서는 낯선 얼굴들이 ',
      urara.get_colored_name(),
      '의 응원에 많이 합류했으며, 일상적인 활동 레이스 때조차 ',
      urara.sex,
      '를 보러 오는 사람들이 매우 많아졌다.',
    ]);
    await era.printAndWait([
      '그리고 ',
      urara.get_colored_name(),
      '의 기량이 불안정할 수 있다는 걸 알면서도, 응원해 주는 사람들은 매번 ',
      urara.sex,
      '에게 필승의 축복을 보낸다.',
    ]);
    await era.printAndWait([
      '아마 사람들은 ',
      urara.get_colored_name(),
      '의 열정에 감동한 것뿐만 아니라, ',
      urara.sex,
      '가 수많은 실패 속에서 가장 결정적인 승리를 거머쥐는 순간을 보고 싶은 것일지도 모른다.',
    ]);
    await urara.say_and_wait(
      '하지만 내가 전력을 다해 이기고 싶다고 말했을 때, 상점가의 많은 아저씨, 아주머니들은 걱정스러운 표정을 지으셨어.',
    );
    await urara.say_and_wait(
      '나를 아껴주시는 분들은 내가 다칠까 봐 걱정하시지만, 이제 난 더 이상 망설이지 않을 거야. 그러니까……',
    );
    await era.printAndWait([
      '아, 그분들이구나. ',
      urara.get_colored_name(),
      '의 설명을 들으며, ',
      me.get_colored_name(),
      '은(는) 지난 홍보 활동을 하던 오후에 자신과 대화를 나눴던 여성을 떠올렸다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      urara.get_colored_name(),
      '가 더 이상 망설이지 않는다면, 갈등을 해결하는 것도 시간 문제일 것이다.',
    ]);

    era.printButton(
      '「그러니까 만화 같은 대사를 빌리자면, 다음 레이스에서 우라라의 결의를 보여주기만 하면 돼.」',
      1,
    );
    await era.input();

    await urara.say_and_wait('응! 바로 그거야! 계속해서 힘낼게——!');
    await era.printAndWait([
      '말은 그렇게 했지만, 지금은 아직 계기가 부족하다. 결의를 어떻게 보여줄지 고민하며, ',
      me.get_colored_name(),
      '은(는) 다시 깊은 생각에 빠졌다.',
    ]);
    await era.printAndWait([
      '어쩌면 미래의 어느 날 ',
      urara.get_colored_name(),
      '가 스스로 참여하고 싶은 중요한 레이스가 생길 수도 있다. 그때 ',
      urara.sex,
      '는 어떤 레이스를 선택하게 될까?',
    ]);
    await era.printAndWait([
      '그리고 그런 이야기가 나온 김에, 시니어급 일정도 정해야겠지? 미래에 대한 구상을 따라가며, ',
      me.get_colored_name(),
      '은(는) 고개를 숙여 자신의 노트를 뒤적였다.',
    ]);
    await era.printAndWait([
      '연말에 구체적으로 무엇을 할지 정하는 건 어렵지만, 내년의 첫 번째 단계적 목표는…… 꼭 그것이어야 할 필요는 없지만 일단 ',
      race_infos[race_enum.negi_sta].get_colored_name(),
      ' 부터 시도해 볼까?',
    ]);
    era.println();
    const best_mvp = Math.min(
      ...RaceHistory.get(52)
        .get_values()
        .filter((e) => race_infos[e.race].race_class <= class_enum.G3)
        .map((e) => e.rank),
    );
    if (best_mvp === Infinity) {
      await era.printAndWait([
        '1년 넘게 조율을 거친 지금의 ',
        urara.get_colored_name(),
        '라면 이제 중상을 노려볼 실력을 갖추었을 것이다.',
      ]);
      await era.printAndWait([
        '우선 간을 보는 셈 치고, 이런 종류의 레이스를 ',
        urara.get_colored_name(),
        '의 중상 도전 기점으로 삼을 수도 있겠다.',
      ]);
    } else if (best_mvp === 1) {
      await era.printAndWait([
        urara.get_uma_sex_title(),
        '의 신체는 끊임없이 변화한다. 시니어 시즌의 ',
        urara.get_colored_name(),
        '는 변화된 상태에 맞춰 조정이 필요할지도 모른다.',
      ]);
      await era.printAndWait([
        '이미 ',
        urara.get_colored_name(),
        '가 중상에서 경쟁할 실력을 갖춘 만큼, 중상 레이스로 새해를 가늠해 보는 것도 나쁘지 않다.',
      ]);
    } else {
      await era.printAndWait([
        '예전에 중상에 도전해 본 적은 있지만, ',
        urara.get_colored_name(),
        '가 아무리 애를 써도 이기지 못했다. 역시 그때는 너무 일렀던 모양이다.',
      ]);
      await era.printAndWait([
        '하지만 지금의 ',
        urara.get_colored_name(),
        '라면 충분히 준비가 되었을 테니, 지금부터 다시 도전하는 것도 괜찮을 것이다.',
      ]);
    }
    if (edu_marks.fans >= 25000) {
      era.println();
      await era.printAndWait(
        '게다가, 이전에 쌓아둔 팬과 명성 전략이 여기서 빛을 발할 수도 있다. 예를 들면 팬 투표제 같은 것 말이다.',
      );
      await era.printAndWait(
        '공식 규정 내에서 팬 지지도가 충분히 높다면, 투표제를 통해 출주 가능한 레이스의 범위를 넓힐 수 있다.',
      );
      await era.printAndWait([
        '이전에도 언급했듯이, 경기장에서 ',
        urara.sex,
        '를 응원하는 사람이 충분히 많다면, ',
        urara.get_colored_name(),
        '는 확실히 평소보다 더 빠르게 달릴 수 있다.',
      ]);
      await era.printAndWait([
        '부정행위처럼 들릴지도 모르겠지만, 이것 또한 ',
        urara.get_colored_name(),
        '의 실력의 일부다. 적어도 「세 여신」이 허용한 부분일 것이다.',
      ]);
      await era.printAndWait([
        '그러고 보니, ',
        urara.get_colored_name(),
        '의 지금 팬 수가 구체적으로 얼마나 되더라? 아, 찾았다…… 음?!',
      ]);
      await era.printAndWait(
        '중상 정도가 아니다…… 만약 이 정도의 지지력이라면, 일반적인 중상은 물론이고 「아리마 기념」조차……',
      );
      await era.printAndWait([
        '핸드폰의 정보를 하나씩 훑어보며, ',
        me.get_colored_name(),
        '은(는) 점차 대담한 구상을 하기 시작했다.',
      ]);
    }
    era.println();
    await era.printAndWait(
      '어떤 계획을 세우든, 그전에 당사자의 의사를 먼저 물어봐야 한다.',
    );
    await era.printAndWait([
      '노트와 핸드폰을 내려놓고, ',
      me.get_colored_name(),
      '은(는) 아까부터 훈련장을 질주하는 동기들을 넋 놓고 바라보던 ',
      urara.get_colored_name(),
      '를 바라보았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 시선을 느낀 작은 ',
      urara.get_uma_sex_title(),
      '도 즉시 기다렸다는 듯 ',
      me.get_colored_name(),
      '에게 긍정적인 신호를 보냈다.',
    ]);
    await urara.say_and_wait([
      callname,
      '! 나 이제 다 쉬었어! 지금이라면 훈련 시작해도 될 것 같아!',
    ]);

    era.printButton(
      '「그래. 하지만 그전에, 우라라는 내년 계획에 대해 어떻게 생각해?」',
      1,
    );
    await era.input();

    urara.say(['내년 계획? 헤헤~ ', callname, '가 언제 물어보나 생각하고 있었어!']);
    era.printButton('더 먼 거리 (중&장거리 적성 상승)', 1);
    era.printButton('잔디 도전 (잔디 적성 상승)', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait('더 멀리까지 달릴 수 있다면, 더 많은 사람이 나를 봐주겠지?');
      edu_marks.dad++;
    } else {
      await urara.say_and_wait('잔디에서 달릴 수 있게 된다면, 더 많은 레이스에 도전할 수 있겠지?');
      edu_marks.gad++;
    }

    await era.printAndWait('음? 대답이 아주 거침없네. 언제부터 생각하고 있었던 거야? 잠깐……?');
    await era.printAndWait([
      urara.get_colored_name(),
      '의 거침없는 대답에 ',
      me.get_colored_name(),
      '은(는) 내심 뿌듯하면서도 무언가 위화감을 느꼈다. 「',
      callname,
      '가 언제 물어보나 생각했다」라니, 그건 무슨 의미일까?',
    ]);
    await era.printAndWait([
      '비록 이 꼬마 ',
      urara.get_colored_name(),
      '에게 마음을 읽힌 것 같지만, 그리 큰일은 아닐……지도?',
    ]);
    await era.printAndWait([
      '곁에 있는 담당의 미소에 깊은 의미가 담겨 있는지 없는지 차마 확인하지 못한 채, ',
      me.get_colored_name(),
      '은(는) 도망치듯 트레이너 모드로 들어갔다.',
    ]);

    era.printButton(
      '「좋아, 그럼 이따가 같이 상점가에 가기로 하고, 지금은 일단 한 바퀴 달려보자!」',
      1,
    );
    await era.input();

    await urara.say_and_wait('오! 우라라 GO——!');
    await era.printAndWait([
      me.get_colored_name(),
      '의 지시에 따라, 이미 만반의 준비를 마친 작은 ',
      urara.get_uma_sex_title(),
      '가 성장한 모습으로 훈련장에서 달리고 있는 인파 속으로 힘차게 뛰어들었다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '——비록 미래를 쉽게 예견할 수는 없지만, 지금 ',
      urara.sex,
      '의 성장은 절대 틀리지 않았어요.',
    ]);
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait([
      '설마 우라라조차 때에 맞는 선택을 해야 할 줄이야. 정말이지, 당신은 ',
      urara.sex,
      '의 트레이너잖아요?',
    ]);
    await in_urara.say_as_unknown_and_wait([
      urara.sex,
      '가 영원히 당신에게 보호받아야 한다는 뜻은 아니에요. 그저 저는, 그런 것도 나쁘지 않다고 생각했을 뿐이랍니다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '언젠가 ',
      urara.sex,
      '에게도 스스로 능동적으로 쫓고 싶은 목표가 생기겠죠……',
    ]);
    await in_urara.say_as_unknown_and_wait('……');

    if (edu_marks.fans >= 25000) {
      era.println();
      await in_urara.say_as_unknown_and_wait(
        '죄송하지만, 떠나기 전에 제 이야기를…… 잠시만 들어주세요.',
      );
      await in_urara.say_as_unknown_and_wait([
        '우라라가 중상에 도전하면 안 된다는 건 아니지만, 단지 계기를 만들기 위해 ',
        urara.sex,
        '에게 이룰 수 없는 기대를 품게 할 필요는 없어요.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '지금까지 우라라를 이렇게 많이 이기게 해주신 것에는 감사하고 있고, ',
        urara.sex,
        '가 승리하는 모습에 저도 뿌듯해요.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '심지어 당신이 ',
        urara.sex,
        '를 이용해 이득을 취하려 해도 저는 눈감아줄 수 있어요. 하지만……',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '하지만 정점에 서려 한다면 그 무게를 견뎌낼 각오가 필요해요. 그리고 ',
        urara.sex,
        '는…… 당신이 생각하는 것만큼 강하지 않답니다.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '설령 그동안 계속해서 노력해 온 당신에게 충분한 여력이 있다 해도, ',
        urara.sex,
        '가 짊어진 깃털 하나조차 대신 들어줄 수는 없어요.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        urara.sex,
        '에게 과한 희망을 주지 마세요. ',
        urara.sex,
        '가 원하는 건, 그저 모두와 작은 행복을 나누는 것뿐이잖아요?',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '아무튼, 부디 다시 한번 잘 생각헤 주세요. 부탁드릴게요……',
      );
    }
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(
        52,
        new Array(5).fill(3),
        0,
        undefined,
        true,
      ) || wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 15 * (ret === 1), true, 8 * (ret === 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};