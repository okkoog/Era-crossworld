const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_random_value } = require('#/utils/value-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const base_base_reward = {};
base_base_reward['체력'] = 300;

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (kitaru, me, callname, flags) => {
    await print_event_name('성 발렌타인의 아웃사이더', kitaru);
    await era.printAndWait(
      '성 발렌타인데이의 트레센 학원은 평소처럼 묘한 복숭아색 분위기에 휩싸여 있었다.',
    );
    await era.printAndWait([
      '공기는 과즙을 머금은 듯 달콤했고, 초콜릿의 달콤한 향기와 ',
      kitaru.get_uma_sex_title(),
      '가 무의식중에 뿜어내는 페로몬 향으로 가득했다.',
    ]);
    await era.printAndWait(
      '그리고 발렌타인데이의 주인공은 당연히 트레이너들이라는 것이 학원 내, 나아가 사회적인 약속처럼 되어 있었다.',
    );
    era.printButton('「참 이상하네.」', 1);
    await era.input();
    if (sys_filter_chara('cflag', '모집상태', recruit_flags.yes).length > 2) {
      await era.printAndWait([
        '오늘 하루 동안 담당 우마무스메들이 ',
        me.get_colored_name(),
        '에게 준 초콜릿을 꽤 많이 맛보았다. 어쩌면 담당 본인을 맛본 것일지도 모른다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        kitaru.get_colored_name(),
        '는 아직 나타나지 않았다.',
      ]);
    } else {
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '은(는) 그 예외인 듯했다.',
      ]);
      await era.printAndWait([
        '오늘 하루 종일 ',
        kitaru.get_colored_name(),
        '를 보지 못했다.',
      ]);
    }
    if (era.get('love:56') >= 75) {
      await era.printAndWait([
        '밤늦게까지 기다렸지만, ',
        kitaru.get_colored_name(),
        '에게서는 아무런 소식도 없었다.',
      ]);
      await era.printAndWait([
        '메시지도... 없고, 전화도... 연결되지 않았다. ',
        me.get_colored_name(),
        '은(는) 심지어 ',
        kitaru.sex,
        '의 룸메이트에게 물어보았으나, 룸메이트에게조차 오늘의 행방을 알리지 않았다고 한다.',
      ]);
      await era.printAndWait('조금 낙담한 채 집으로 돌아왔다.');
      era.set('flag:현재위치', location_enum.home);
      era.drawLine({ content: me.name + '의 자택' });
      await era.printAndWait(
        '소파에 기대어 앉아 전자시계의 숫자가 0시로 다가가는 것을 멍하니 바라보았다.',
      );
      await era.printAndWait([
        '조금 실망스럽네... ',
        me.get_colored_name(),
        '은(는) 무심코 ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '에게 선물했던 행운 아이템들을 훑어보며 그런 생각을 했다.',
      ]);
      era.printButton('청력 판정', 1);
      await era.input();
      era.println();
      let result = get_random_value(65, 90);
      if (result > 60) {
        await era.printAndWait([
          '다이스 눈：',
          result,
          '/??',
          { isDivider: true },
          me.get_colored_name(),
          '의 청력 판정: 실패',
        ]);
        await era.printAndWait('아무것도 들리지 않는다. 날씨 탓인지 졸음이 쏟아질 뿐이다.');
      }
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 소파에서 깊은 잠에 빠지려던 찰나, 창문 쪽에서 걸쇠가 열리는 소리가 들리더니...',
      ]);
      await kitaru.say_and_wait('히야앗!');
      await era.printAndWait('눈앞에 익숙한 밤색 그림자가 나타났다.');
      await era.printAndWait([
        '어느샌가 ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 앞에 나타나 있었고, 그보다 더 ',
        me.get_colored_name(),
        '을(를) 동요하게 만든 것은 ',
        kitaru.sex,
        '의 아슬아슬한 자세였다.',
      ]);
      await era.printAndWait([
        '오렌지색 머리카락의 ',
        kitaru.get_teen_sex_title(),
        '가 ',
        me.get_colored_name(),
        '의 허리 위에 올라타 있었다. ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '의 치마에 가려진 엉덩이가 ',
        me.get_colored_name(),
        '의 바지 옷감과 마찰되는 소리를 느낄 수 있었다.',
      ]);
      await era.printAndWait([
        '그저 ',
        kitaru.get_colored_name(),
        ' 특유의 거리감 없는 행동이겠지?',
      ]);
      await kitaru.say_and_wait([callname, ', 해피 발렌타인이에요!']);
      await era.printAndWait(
        '목소리에는 격렬한 운동 뒤에 오는 특유의 피로가 섞여 있었고, 방금 말을 내뱉을 때도 숨을 헐떡이고 있었다. 아무래도 줄곧 달려온 모양이다.',
      );
      await era.printAndWait([
        '교복 위에는, 심지어 ',
        kitaru.sex,
        '의 오렌지색 머리카락 위에도 갈색 얼룩이 잔뜩 묻어 있었다. ',
        kitaru.sex,
        '에게서 풍기는 진한 향기로 보아, 제작 과정에서 실수로 쏟아버린 초콜릿인 듯했다.',
      ]);
      await era.printAndWait([
        kitaru.sex,
        '는 등 뒤에서 구겨진 선물 상자를 꺼내 ',
        me.get_colored_name(),
        '의 가슴 위에 올려놓았다.',
      ]);
      await kitaru.say_and_wait('자, 보세요!');
      await kitaru.say_and_wait('이건 제가 하루 종일 당신을 위해 따온 별들이에요!');
      await era.printAndWait(
        '상자를 열자 그 안에는 별자리를 상징하는 초콜릿이 무려 12개나 들어 있었다. 혼자 먹기에는 아무리 봐도 양이 너무 많았다.',
      );
      era.printButton('「나 혼자 다 먹으라는 거야?」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '안 돼요~ 이런 건 자기 별자리만 골라 먹어야 재밌단 말이에요!',
      );
      await kitaru.say_and_wait('보세요, 저는 쌍둥이자리거든요.');
      await kitaru.say_and_wait('카스토르랑 폴룩스를 합치니까 딱 다른 별들의 두 배 크기가 됐네요!');
      await kitaru.say_and_wait('으으... 역시 처음 해보는 거라 양 조절이 잘 안 돼서...');
      await kitaru.say_and_wait('그래도 늦지 않게 와서 다행이에요. 하마터면 오늘 발렌타인데이를 놓칠 뻔했거든요!');
      era.printButton('「고생했어!」', 1);
      await era.input();
      await kitaru.say_and_wait('제 말이 그 말이에요... 그래서 말인데요!');
      await kitaru.say_and_wait('저기~ 부탁하고 싶은 게 하나 있어요!');
      await kitaru.say_and_wait('괜찮으시다면, 둘이서 같이 먹어주실 수 있나요?');
      await kitaru.say_and_wait('그러니까... 사이좋게 절반씩 나눠서요.');
      await era.printAndWait([
        '말투가 점점 사제 관계에 어울리지 않는 방향으로 흐르자, ',
        kitaru.get_colored_name(),
        '의 얼굴도 점점 붉게 물들어 갔다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신의 가슴 위에 펼쳐진 초콜릿 상자를 바라보며, 마음속 깊은 곳에서 일렁이는 욕망을 느꼈다.',
      ]);
      era.printButton('「보상을 원하는 거야?」', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('그냥 초콜릿을 먹는다 (체력+300)', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('엣!?');
        await era.printAndWait([
          '그렇게 물으며 오른손으로 ',
          kitaru.sex,
          '의 허리 옆구리살을 살짝 쥐었다.',
        ]);
        await era.printAndWait([
          '뒤늦게 자신의 지금 자세가 소위 말하는 기승위와 다를 바 없다는 것을 깨달았는지, ',
          kitaru.get_teen_sex_title(),
          '의 얼굴은 더욱 붉어졌고 꼬리는 의식한 듯 만 듯 ',
          me.get_colored_name(),
          '의 다리를 몇 번 탁탁 쳤다.',
        ]);
        await era.printAndWait('이윽고 모기 소리만큼 가녀린 대답이 돌아왔다.');
        await kitaru.say_and_wait('……네');
        era.printButton('「좀 더 크게 말해야지?」', 1);
        await era.input();
        await kitaru.say_and_wait('으으... 초콜릿도 아직 안 먹었는데……');
        await era.printAndWait([
          '대답을 들은 ',
          me.get_colored_name(),
          '은(는) 오른손을 놓았다.',
        ]);
        await era.printAndWait('찰싹!');
        await kitaru.say_and_wait('꺄앗!');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 손가락을 가지런히 모아 손바닥으로, 너무 세지도 약하지도 않은 강도로 ',
          kitaru.get_teen_sex_title(),
          '의 탄력 있는 엉덩이를 한 대 때렸다.',
        ]);
        await era.printAndWait('하얀 엉덩이 살이 떨리며 저릿한 쾌감이 번져 나갔다.');
        await era.printAndWait([
          '이어서 ',
          kitaru.get_teen_sex_title(),
          '가 멍해진 틈을 타, ',
          me.get_colored_name(),
          '은(는) 두 손을 뻗어 자신의 위에 올라탄 ',
          kitaru.get_teen_sex_title(),
          '의 두 손을 깍지 껴 잡았다.',
        ]);
        era.printButton('「그럼 네가 먹여줘.」', 1);
        await era.input();
        await kitaru.say_and_wait('엣! 하지만……');
        await era.printAndWait([
          kitaru.get_teen_sex_title(),
          '의 가느다란 두 손이 ',
          me.get_colored_name(),
          '에게 붙잡혀 있었기에, 당연히 손으로 ',
          me.get_colored_name(),
          '에게 먹여줄 방법은 없었다.',
        ]);
        await kitaru.say_and_wait('알겠어요……');
        await era.printAndWait('점술가인 만큼 눈치는 확실히 빨랐다.');
        await era.printAndWait([
          kitaru.sex,
          '는 귀여운 강아지처럼 천천히 몸을 숙였다.',
        ]);
        await era.printAndWait([
          '초콜릿 한 조각을 입에 물고, 입술을 앙다문 채 조심스럽게 ',
          me.get_colored_name(),
          '의 입가로 가져왔다.',
        ]);
        await era.printAndWait('오독.');
        await era.printAndWait(
          '초콜릿이 가운데서 나뉘었고, 앞서 말한 대로 두 사람은 한 조각씩 나누어 먹게 되었다.',
        );
        await era.printAndWait([
          '부스러기가 ',
          me.get_colored_name(),
          '의 몸 위에 떨어졌고, ',
          kitaru.get_teen_sex_title(),
          '는 혀끝으로 그것을 정성스럽게 핥아내었다.',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 얼굴은 금방이라도 터질 듯 붉게 달아올랐고, 그 붉은 기운은 가느다란 목선을 따라 쇄골까지 번져 있었다.',
        ]);
        await era.printAndWait([
          '반쯤 누워 있던 ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.get_teen_sex_title(),
          '가 초콜릿에 집중하느라 정신이 팔린 사이 몸을 일으켰다.',
        ]);
        await kitaru.say_and_wait('읍!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 입술을 비집고 들어가자, 반쯤 녹은 초콜릿 액이 혀와 함께 ',
          kitaru.sex,
          '의 구강으로 밀려 들어갔다.',
        ]);
        await kitaru.say_and_wait('으음... 하아……');
        await era.printAndWait([
          '혀가 ',
          kitaru.sex,
          '의 입안을 헤집으며 초콜릿의 맛과 ',
          kitaru.get_teen_sex_title(),
          '의 타액을 뒤섞었고, 질척이는 외설적인 소리를 내며 얽혔다.',
        ]);
        await kitaru.say_and_wait('꿀꺽……');
        await era.printAndWait([
          '카스토르, 그리고 폴룩스. ',
          kitaru.get_colored_name(),
          '를 상징하는 두 조각의 초콜릿은 그렇게 양측의 타액과 섞인 채 두 사람의 배 속으로 사라졌다.',
        ]);
        await era.printAndWait([
          '방금 전의 카카오 향 가득한 키스로 인해 ',
          me.get_colored_name(),
          '에게 완전히 넋을 잃은 ',
          kitaru.get_colored_name(),
          '는 만족스러운 듯 숨을 몰아쉬고 있었다.',
        ]);
        await era.printAndWait(
          '이따금 내미는 작은 혀에는 아직 녹은 초콜릿이 묻어 있어, 검은색과 분홍색이 묘하게 교차하고 있었다.',
        );
        await kitaru.say_and_wait([callname, '…… 하고 싶어요!']);
        await quick_into_sex(56);
      } else {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 호의를 저버릴 수는 없다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 진지하게 초콜릿을 먹기 시작했다.']);
        flags.wait_flag = get_attr_and_print_in_event(
          56,
          undefined,
          0,
          base_base_reward,
        );
        flags.wait_flag =
          get_attr_and_print_in_event(0, undefined, 0, base_base_reward) ||
          flags.wait_flag;
      }
    } else {
      await era.printAndWait([
        '밤이 되어서야 ',
        kitaru.get_colored_name(),
        '에게서 전화가 걸려 왔다.',
      ]);
      await kitaru.say_and_wait('저기, 학원 근처 공원에서 잠깐 만날 수 있을까요?');
      era.drawLine({ content: '공원' });
      await era.printAndWait([
        '한참을 기다린 후에야 입구 쪽에서 서둘러 달려오는 ',
        kitaru.get_colored_name(),
        '를 발견할 수 있었다.',
      ]);
      await kitaru.say_and_wait(['아! ', callname, ', 큰일 났어요! 큰일 났다니까요!']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 오렌지색 머리카락의 ',
        kitaru.get_teen_sex_title(),
        '가 다급하게 ',
        me.get_colored_name(),
        '에게 달려오는 것을 보았다.',
      ]);
      await era.printAndWait([
        '교복에는 갈색 얼룩이 꽤 많이 묻어 있었고, 코끝을 스치는 ',
        kitaru.sex,
        '의 몸에서는 진한 초콜릿 향기가 풍겨왔다.',
      ]);
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await kitaru.say_and_wait('별이 너무 많아서 별자리들이 전부 쏟아져 버렸어요!');
      await kitaru.say_and_wait('이것 좀 보세요!');
      await era.printAndWait([
        kitaru.sex,
        '는 등 뒤에 숨기고 있던 선물 상자를 ',
        me.get_colored_name(),
        '에게 내밀었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 장단에 맞춰 깜짝 놀란 표정을 지어 보였다.',
      ]);
      era.printButton('상자를 받는다', 1);
      await era.input();
      await kitaru.say_and_wait('농담이에요!');
      await kitaru.say_and_wait('이건 제가 심혈을 기울여 만든 12별자리 초콜릿이에요.');
      await kitaru.say_and_wait('오늘은 발렌타인데이잖아요!');
      await kitaru.say_and_wait('점치는 걸 좋아하는 사람으로서, 이런 날은 성실하게 보내야죠!');
      await era.printAndWait([
        kitaru.sex,
        '의 열렬한 시선 속에서 ',
        me.get_colored_name(),
        '은(는) 상자를 열었다.',
      ]);
      await era.printAndWait([
        '별자리를 상징하는 12개의 초콜릿. 비록 솜씨는 조금 투박했지만 ',
        kitaru.get_teen_sex_title(),
        '의 정성이 확실히 담겨 있었다. 다만 혼자 먹기에는 역시 양이 과하게 많았다.',
      ]);
      era.printButton('「나 혼자 다 먹으라는 거야?」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '안 돼요~ 이런 건 자기 별자리만 골라 먹어야 재밌단 말이에요!',
      );
      await kitaru.say_and_wait('보세요, 저는 쌍둥이자리거든요.');
      await kitaru.say_and_wait('카스토르랑 폴룩스를 합치니까 딱 다른 별들의 두 배 크기가 됐네요!');
      await kitaru.say_and_wait('으으... 역시 처음 해보는 거라 양 조절이 잘 안 돼서...');
      await kitaru.say_and_wait('그래도 늦지 않게 와서 다행이에요. 하마터면 오늘 발렌타인데이를 놓칠 뻔했거든요!');
      era.printButton('「고생했어!」', 1);
      await era.input();
      await kitaru.say_and_wait('제 말이 그 말이에요... 그래서 말인데요!');
      await kitaru.say_and_wait('저기~ 부탁하고 싶은 게 하나 있어요!');
      await kitaru.say_and_wait('괜찮으시다면, 둘이서 같이 먹어주실 수 있나요?');
      await era.printAndWait([
        '상자 속의 조금 투박한 수제 초콜릿을 가리키는 ',
        kitaru.get_teen_sex_title(),
        '의 뺨에 옅은 홍조가 감돌았다.',
      ]);
      await kitaru.say_and_wait('그러니까... 사이좋게 절반씩 나눠서요.');
      await era.printAndWait([
        '무의식중에 사제 관계에 어울리지 않는 발언을 해버린 듯, ',
        kitaru.get_colored_name(),
        '는 두 손을 모은 채 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.printButton('고개를 끄덕인다', 1);
      await era.input();
      await era.printAndWait([
        '그 후 ',
        kitaru.get_colored_name(),
        '와 함께 초콜릿을 나누어 먹었다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(
        56,
        undefined,
        0,
        base_base_reward,
      );
      flags.wait_flag =
        get_attr_and_print_in_event(0, undefined, 0, base_base_reward) ||
        flags.wait_flag;
      await kitaru.say_and_wait('후아! 생각보다 훨씬 더 다네요!');
      await kitaru.say_and_wait([callname, ', 해피 발렌타인이에요!']);
    }

    era.set('cflag:56:축제이벤트표시', 0);
  };

  handlers[95 + 11] = async (kitaru, me, callname, flags) => {
    await print_event_name('변광성', kitaru);
    await era.printAndWait([
      '연승을 이어가던 ',
      kitaru.get_colored_name(),
      '는 킨코상 이후 텔레비전 인터뷰 요청을 받게 되었다.',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      ' 중에서도 평범한 태생인 ',
      kitaru.get_colored_name(),
      '가 청엽상에서의 처참한 퍼포먼스 이후 국화상을 포함한 여러 중상 레이스에서 우승을 차지하자, ',
      kitaru.sex,
      '도 드디어 사람들의 주목을 받기 시작한 것이다.',
    ]);
    await era.printAndWait([
      '거절할 수 없었다. 동기들 중 일찌감치 속도의 한계에 도전하겠다고 선언한 밤색 ',
      kitaru.get_uma_sex_title(),
      '나, 메지로 가문의 장거리 ',
      kitaru.get_uma_sex_title(),
      '에 비해, 경기장과 위닝 라이브 외에는 가끔 신사에서나 모습을 드러내는 ',
      kitaru.get_colored_name(),
      '는 그야말로 신비로운 존재였기 때문이다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '의 트레이너로서 당연히 인터뷰에 동석해야 했고, 게다가……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 킨코상 직후 ',
      kitaru.sex,
      '의 모습을 떠올렸다. 그 경기 이후 무언가를 깨달은 듯한 ',
      kitaru.get_colored_name(),
      '는 다시금 불안정한 정신 상태로 돌아가 있었다.',
    ]);
    era.drawLine({ content: '스튜디오 안' });
    await kitaru.say_and_wait('네, 그렇죠.');
    await kitaru.say_and_wait('아마도요.');
    await kitaru.say_and_wait('……');
    await era.printAndWait([
      '경기 후 인터뷰에서 ',
      kitaru.get_colored_name(),
      '는 몹시 힘겹게 대답을 이어갔다. ',
      me.get_colored_name(),
      '이(가) 옆에서 능숙하게 화제를 돌린 덕분에, 세간의 평가는 ',
      kitaru.get_colored_name(),
      '가 침착하고 과묵한 ',
      kitaru.get_uma_sex_title(),
      '라는 쪽으로 흘러갔다.',
    ]);
    await era.printAndWait([
      '냉정함, 과묵함 같은 단어가 ',
      kitaru.get_colored_name(),
      '와 연결되다니. ',
      me.get_colored_name(),
      '(으)로서는 상상조차 하기 힘든 일이었다.',
    ]);
    await era.printAndWait([
      '다행히 이 고난도 끝이 보이는 듯했다. ',
      me.get_colored_name(),
      '은(는) 인터뷰가 끝난 뒤에 할 ',
      kitaru.get_colored_name(),
      '를 위한 정신 치유 계획을 벌써부터 세우기 시작했다.',
    ]);
    await era.printAndWait('아니, 틀렸다!');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 땀에 젖은 오렌지색 머리카락이 이마에 달라붙어 있었고, 귀는 겁에 질린 듯 쫑긋 서 있었다.',
    ]);
    await era.printAndWait('당장 중단시켜야 했지만, 다음 질문이 이미 던져지고 말았다.');
    await say_by_passer_by_and_wait('여성 MC', '그럼, 한 가지 여쭙겠습니다만……');
    await say_by_passer_by_and_wait('여성 MC', [
      kitaru.get_colored_name(),
      ' 씨는 현재 무엇을 위해 달리고 있나요?',
    ]);
    await kitaru.say_and_wait('무엇을 위해?', true);
    await kitaru.say_and_wait('승리?', true);
    await kitaru.say_and_wait('상금?', true);
    await kitaru.say_and_wait('아니면 다른 무언가?', true);
    await kitaru.say_and_wait([kitaru.get_bigger_sibling_sex_title(), '……?']);
    await say_by_passer_by_and_wait('여성 MC', '네? 죄송합니다, 다시 한번 말씀해 주시겠어요?');
    await kitaru.say_and_wait('하지만……', true);
    await kitaru.say_and_wait('하지만 난 이미 도망쳤단 말이야!!!!!', true);
    await era.printAndWait(
      [
        kitaru.get_colored_name(),
        '「',
        {
          color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
          content: '아니야아니야아니야아니야아니야!!!!!',
        },
        '」',
      ],
      {
        align: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    );
    await kitaru.say_and_wait('으윽!');
    await era.printAndWait([
      '의식을 잃은 ',
      kitaru.get_colored_name(),
      '가 뒤로 쓰러지기 직전, ',
      me.get_colored_name(),
      '이(가) 달려나가 기적적으로 ',
      kitaru.sex,
      '를 붙잡았다.',
    ]);
    await era.printAndWait(['인터뷰 중단.']);
    era.drawLine({ content: '며칠 후' });
    await era.printAndWait(['검사 결과 큰 이상은 없으며, 그저 휴식이 필요하다는 진단을 받았다.']);
    await kitaru.say_and_wait(['죄송해요, 또 ', callname, '께 폐를 끼쳤네요.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 소파에 기운 없이 누워 있는 ',
      kitaru.get_colored_name(),
      '가 사과하는 소리를 들었다.',
    ]);
    await era.printAndWait(
      '당연하다. 스튜디오에서 쓰러진 일로 발생한 여론의 폭풍을 처리하느라 지난 며칠간 정신이 하나도 없었다.',
    );
    await era.printAndWait([
      '스튜디오에서 쓰러진 ',
      kitaru.get_colored_name(),
      '의 소식은 의심의 여지 없이 ',
      me.get_colored_name(),
      '을(를) 구설의 중심에 올려놓았다.',
    ]);
    await era.printAndWait([
      '하지만 지금 더 중요한 것은 갈수록 불안정해지는 ',
      kitaru.get_colored_name(),
      '의 상태였다.',
    ]);
    era.set('status:56:흉', 1);
    era.set('status:56:대길', 0);
    era.set('status:56:소길', 0);
    era.set('status:56:중길', 0);
    flags.wait_flag = get_skills_and_print_in_event(56, [200851]);
    flags.wait_flag =
      get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0) || flags.wait_flag;
    flags.wait_flag = sys_change_motivation(56, -3) || flags.wait_flag;
  };

  handlers[95 + 12] = async (kitaru, me, callname, flags) => {
    const suzuka = get_chara_talk(2),
      tannhauser = get_chara_talk(62),
      bright = get_chara_talk(74);
    await print_event_name('고래의 배 속으로', kitaru);
    await era.printAndWait([
      '그 인터뷰 이후, ',
      kitaru.get_colored_name(),
      '는 깊은 침체에 빠졌다.',
    ]);
    await era.printAndWait('오늘은 심지어 훈련까지 빼먹었다.');
    await era.printAndWait('도저히 안심할 수 없었다.');
    await era.printAndWait([
      kitaru.sex,
      '가 ',
      me.get_colored_name(),
      '에게 걱정하지 말라는 메시지를 남기긴 했지만, 불안함은 ',
      me.get_colored_name(),
      '의 마음속에서 떠나지 않았다.',
    ]);

    await bright.say_and_wait([
      sys_get_colored_callname(16, 56),
      '요? ……못 봤는데요.',
    ]);
    await tannhauser.say_and_wait([
      '앗! 오늘 아침에 기숙사를 나간 뒤로 본 적이 없어요.',
    ]);
    await suzuka.say_and_wait([
      '죄송해요…… ',
      sys_get_callname(2, 0),
      ', 저도 못 봤어요.',
    ]);

    await era.printAndWait([
      '몇몇 동급생들에게 물어보았으나 담당의 행방을 아는 이는 없었다. ',
      kitaru.get_colored_name(),
      '라면 지금 어디에 있을까?',
    ]);
    await era.printAndWait([
      '아니, ',
      kitaru.sex,
      '가 자주 참배하던 신사도, 학원 학생들이 자주 가는 나무 구멍도 아닐 것이다.',
    ]);
    era.drawLine({ content: '시 외곽의 묘지' });
    await era.printAndWait([
      '오렌지색 ',
      kitaru.get_uma_sex_title(),
      '가 세상을 떠난 ',
      kitaru.sex,
      '의 ',
      kitaru.get_bigger_sibling_sex_title(),
      '를 기리는 묘비 앞에서 멍하니 서 있었다.',
    ]);
    era.printButton('「마치카네 후쿠키타루?」', 1);
    await era.input();
    await kitaru.say_and_wait(['……', callname, '!']);
    await kitaru.say_and_wait('역시 들키고 만 건가요?');
    await kitaru.say_and_wait('에헤헤……?');
    era.printButton('아이언 클로를 사용한다', 1);
    await era.input();
    await kitaru.say_and_wait('아우우!');
    await era.printAndWait([
      me.get_colored_name(),
      '에게 머리를 눌린 ',
      kitaru.get_teen_sex_title(),
      '가 비명을 질렀다.',
    ]);
    era.printButton('「도움이 필요해?」', 1);
    await era.input();
    await kitaru.say_and_wait('에이, 아니에요!');
    await kitaru.say_and_wait('보세요, 전 이제 멀쩡하다고요!');
    era.printButton('「실제로는?」', 1);
    era.printButton('「솔직하게 말해줘.」', 2);
    await era.input();
    await kitaru.say_and_wait('무서워요……');
    era.printButton('「무서워?」', 1);
    await era.input();
    await kitaru.say_and_wait('……네.');
    await kitaru.say_and_wait(
      '점괘나 길일을 고르는 건 정말 좋은 일이에요. 항상 뒤에서 절 밀어주니까요……',
    );
    await kitaru.say_and_wait('그때부터 줄곧 그랬어요.');
    await era.printAndWait([
      '대리석 묘비의 표면을 쓰다듬는 ',
      kitaru.get_colored_name(),
      '의 눈동자 속 별들에 먹구름이 끼었다.',
    ]);
    await kitaru.say_and_wait('전 아주 어렸을 때부터 점술을 믿기 시작했어요.');
    await kitaru.say_and_wait([
      '그렇게 대길인 날에 ',
      callname,
      '을 만났고, ',
      kitaru.get_bigger_sibling_sex_title(),
      '에게 약속했던 국화상까지 억지로 버티며 달려온 거예요.',
    ]);
    await kitaru.say_and_wait(
      '국화상에서 우승하고 나면, 운명의 사람과 행운 아이템만 곁에 있다면 전 행복해질 수 있을 거라고 생각했는데……',
    );
    await kitaru.say_and_wait([
      '막상 킨코상 이후에 깨달았어요. 전 여전히 ',
      kitaru.get_bigger_sibling_sex_title(),
      '의 그림자에 숨어 있는 작은 ',
      kitaru.get_uma_sex_title(),
      '일 뿐이라는 걸요.',
    ]);
    await kitaru.say_and_wait([
      '레이스 ',
      kitaru.get_uma_sex_title(),
      '가 된 이유조차 모르겠어요. 그저 운명의 사람이 지시하는 대로 경기장에 나갔을 뿐이라……',
    ]);
    await kitaru.say_and_wait('그냥 이대로 은퇴하는 게 낫지 않을까요?');
    era.printButton('「왜 그렇게 생각해?」', 1);
    await era.input();
    await kitaru.say_and_wait('그치만!');
    await era.printAndWait([
      kitaru.sex,
      '는 고개를 끄덕이며, 빛을 잃은 별 눈동자로 묘지의 호수를 멍하니 바라보았다.',
    ]);
    await kitaru.say_and_wait([
      '목표도 없고, 팬들과 ',
      callname,
      '의 기대까지 저버린, 신에게 버림받은 저인데!',
    ]);
    await kitaru.say_and_wait(
      '연못의 이끼나 되어서 둥둥 떠다니다가 결국 물고기 배 속에 처박히는 게 어울린다고요!',
    );
    await kitaru.say_and_wait([
      callname,
      '은 왜 계속 절 지지해 주시는 건가요?',
    ]);
    await kitaru.say_and_wait('전 매번 실수만 하고, 허구한 날 기어오르기만 하는데……');
    era.printButton('「후쿠키타루의 달리기를 좋아하니까」', 1);
    era.printButton('「후쿠키타루의 소원을 이뤄주고 싶으니까」', 2);
    await era.input();
    await kitaru.say_and_wait('에에엣!!!!!!');
    era.printButton('「내가 무슨 이상한 말이라도 했어?」', 1);
    await era.input();
    await kitaru.say_and_wait(
      '아뇨! 그냥... 저도 저렇게 멋있는 말을 할 수 있다면 얼마나 좋을까 해서요.',
    );
    await kitaru.say_and_wait('전 지금 당장 다음 발자국을 어디에 내디뎌야 할지 결정하는 것만으로도 벅차거든요.');
    era.printButton('「정말 그럴까?」', 1);
    await era.input();
    await kitaru.say_and_wait('엣?');
    era.printButton('「난 후쿠짱이 정말 대단하다고 생각해.」', 1);
    await era.input();
    await kitaru.say_and_wait('우웅..');
    era.printButton('「너는 다른 사람이 준 것들 속에서 정답을 찾아낼 수 있는 아이니까.」', 1);
    await era.input();
    await era.printAndWait([
      '눈앞의 ',
      kitaru.get_uma_sex_title(),
      '의 귀가 쫑긋거렸다.',
    ]);
    era.printButton('「내 말이 맞지?」', 1);
    await era.input();
    await kitaru.say_and_wait([callname, '……']);
    await kitaru.say_and_wait('고마워요. 비록 위로일 뿐이라도 정말 기뻐요.');
    await kitaru.say_and_wait([
      '……결국 제가 ',
      callname,
      '과 팬분들을 실망시킨 건 변함없지만요.',
    ]);
    era.printButton('「그럼 타라카즈카 기념에서 모두에게 보답하자!」', 1);
    await era.input();
    await kitaru.say_and_wait('네!');
    await kitaru.say_and_wait('네? 아아악, 안 돼요! 절대 안 된다고요!');
    await kitaru.say_and_wait(
      '타라카즈카 기념이라면... 팬 투표를 받아야만 나갈 수 있는 그 경기잖아요?!',
    );
    await era.printAndWait([
      '목소리가 점점 커지는 ',
      kitaru.get_colored_name(),
      '를 달래며, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '를 위해 팬 대감사제에서 표를 모을 방법을 고민하기 시작했다.',
    ]);
    era.println();
    era.set('status:56:PTSD', 0);
    await era.printAndWait([kitaru.get_colored_name(), '의 PTSD가 일시적으로 사라졌다.']);
    flags.wait_flag = get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
  };

  handlers[95 + 14] = async (kitaru, me, callname) => {
    await print_event_name(
      ['모두의 소원을 짊어진 ', kitaru.get_teen_sex_title()],
      kitaru,
    );
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 지난 인터뷰에서의 실태는 많은 미디어의 비판을 불러일으켰다.',
    ]);
    await kitaru.say_and_wait(['으아아! ', callname, '. 정말 괜찮은 걸까요?']);
    await kitaru.say_and_wait('저기, 신문에 나왔던 말들이 떠올라서……');
    await say_by_passer_by_and_wait('신문', [
      '……',
      kitaru.get_colored_name(),
      '의 모습은 차마 눈 뜨고 볼 수 없는 수준……',
    ]);
    await say_by_passer_by_and_wait(
      '신문',
      '……레이스 우마무스메로서의 긍지와 팬들에 대한 예의가 부족하다……',
    );
    await say_by_passer_by_and_wait('신문', '……레이스를 사랑하지 않는 것인가……');
    await kitaru.say_and_wait('으앗! 굳이 입 밖으로 내지 마세요!');
    await kitaru.say_and_wait('하지만... 됐어요. 어차피 사실이니까요.');
    await kitaru.say_and_wait('정말 귀가 따갑네요... 귀가 뚝 떨어져 나갈 것 같아요.');
    await kitaru.say_and_wait('이러다 경기장에 나가자마자 달걀 세례를 받는 게 아닐지……');
    era.printButton('「자, 이제 나갈 시간이야!」', 1);
    await era.input();
    era.printButton('「나를 믿어. 아무 문제 없을 거야!」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 사전 조사에서 SNS상의 ',
      kitaru.get_colored_name(),
      '의 팬들이 인터뷰 때의 모습에도 불구하고 ',
      kitaru.sex,
      '를 포기하지 않았다는 사실을 알아냈다.',
    ]);
    await era.printAndWait([
      '오히려 ',
      kitaru.sex,
      '의 팬클럽 중 일부는 ',
      me.get_colored_name(),
      '의 유도 하에 ',
      kitaru.sex,
      '의 출주권을 위해 투표 운동을 시작하고 있었다.',
    ]);
    await kitaru.say_and_wait(['으으! ', callname, '이 그렇게 말씀하신다면……']);
    await kitaru.say_and_wait(
      '아무튼! 제가 팬들의 욕설 세례 속에 천국으로 떠나버린다면 제 수정구슬은 당신에게 맡길게요!',
    );
    await era.printAndWait([
      '마치 사형장으로 향하는 듯한 비장함을 품고, ',
      kitaru.get_colored_name(),
      '는 앞으로 걸어 나갔다.',
    ]);
    era.drawLine({ content: '잠시 후' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 URA 문장이 새겨진 인터뷰 백월 앞에 서 있었다.',
    ]);
    await say_by_passer_by_and_wait('여성 MC', [
      kitaru.get_colored_name(),
      ' ',
      kitaru.get_adult_sex_title(),
      ', 이번 봄의 목표를 들려주실 수 있나요?',
    ]);
    await kitaru.say_and_wait('으갹! 시작부터 그런 질문인가요?!');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 이런 반응을 보일 줄은 예상했지만, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 이마를 짚었다.',
    ]);
    await era.printAndWait([
      '직접 조사한 결과에 따르면, ',
      kitaru.get_colored_name(),
      '의 팬들은 ',
      kitaru.sex,
      '의 지난 인터뷰 모습에도 불구하고 ',
      kitaru.sex,
      '를 저버리지 않았다.',
    ]);
    era.printButton('「네 진심을 팬들에게 말해줘.」', 1);
    await era.input();
    await era.printAndWait([
      kitaru.get_teen_sex_title(),
      '의 어깨에 손을 얹고, 여전히 거부하는 ',
      kitaru.sex,
      '를 살짝 힘주어 마이크 앞으로 밀어냈다.',
    ]);
    await kitaru.say_and_wait('으으! 정말로요? ……알겠어요.');
    await kitaru.say_and_wait('여러분, 저의 이번 봄 목표는!');
    await kitaru.say_and_wait('목표라기보다 제 꿈이라고 해야겠네요——!');
    await kitaru.say_and_wait('바로 타라카즈카 기념에 출주하는 것입니다!');
    await era.printAndWait([
      '말이 너무 술술 나온 것에 본인조차 놀란 듯, ',
      kitaru.get_colored_name(),
      '의 얼굴에는 경악이 서렸고 이내 심판을 기다리듯 고개를 푹 숙였다.',
    ]);
    await kitaru.say_and_wait('어라?');
    era.printButton('박수를 친다', 1);
    await era.input();
    await era.printAndWait('객석에서 박수갈채가 쏟아져 나왔다.');
    await kitaru.say_and_wait('박수? 왜요?');
    await say_by_passer_by_and_wait('팬 A', [
      '힘내라! ',
      kitaru.get_colored_name(),
      '!',
    ]);
    await say_by_passer_by_and_wait(
      '팬 B',
      '내가 꼭 투표해 줄게! 반드시 출주해 줘!',
    );
    await kitaru.say_and_wait('다들 어떻게 된 거예요? 그번 인터뷰는 그렇게 엉망진창이었는데……');
    await say_by_passer_by_and_wait('팬 A', [
      '아! 그건 정말 처참했지. 하지만 그게 바로 ',
      kitaru.get_colored_name(),
      ' 다우니까.',
    ]);
    await say_by_passer_by_and_wait(
      '팬 B',
      '사람이라면 가끔 방황할 수도 있는 거잖아? 오히려 친근감이 느껴졌달까?',
    );
    await kitaru.say_and_wait('친근감…… 그럼 다들 절 포기하지 않으신 건가요?');
    await say_by_passer_by_and_wait(
      '팬 C',
      '포기할 리가 없잖아! 국화상에서의 그 필사적인 모습, 정말 잊을 수 없다고!',
    );
    await say_by_passer_by_and_wait('팬 D', '맞아! 타라카즈카 기념, 꼭 힘내라고!');
    await kitaru.say_and_wait('네…… 네……!');
    await kitaru.say_and_wait('다시 한번 도전해 볼게요!');
    await era.printAndWait([
      '설령 신에게 버림받았을지라도 팬들이 다시 거두어준 덕분에, 투표 결과 발표 이후 ',
      kitaru.get_colored_name(),
      '는 간신히 타라카즈카 기념 출주권을 획득했다.',
    ]);
    era.set('cflag:56:축제이벤트표시', 0);
    await era.printAndWait([kitaru.get_colored_name(), '는 더 이상 운세에 의존하지 않게 되었다……']);
    era.set('status:56:운세의존', 0);
    era.set('status:56:대길', 0);
    era.set('status:56:중길', 0);
    era.set('status:56:소길', 0);
    era.set('status:56:흉', 0);
  };
};