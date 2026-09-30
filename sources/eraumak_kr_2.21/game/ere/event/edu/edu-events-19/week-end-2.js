const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  diamond_lord,
  say_by_diamond_lord,
} = require('#/event/edu/edu-events-19/snippets');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 32] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach &&
      era.get('cflag:0:위치') !== era.get('cflag:19:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('3년차 여름 합숙 종료', digital);
    await era.printAndWait([
      '이번 여름 합숙에서, ',
      digital.get_colored_name(),
      '은 정말로 열심히 노력했다. ',
      me.get_colored_name(),
      '은(는) 이렇게나 진지한 ',
      digital.get_colored_name(),
      '의 모습을 본 적이 없었다.',
    ]);
    await era.printAndWait([
      '선배인 ',
      get_chara_talk(15).get_colored_name(),
      ', ',
      get_chara_talk(58).get_colored_name(),
      '와의 약속, 그리고 후배인 쿠로후네와의 대결. 이 두 가지 요소 덕분에 지금 ',
      digital.get_colored_name(),
      '의 컨디션은 전례 없을 정도로 최고조였다!',
    ]);
    await digital.say_and_wait([
      callname,
      ', 느껴져요. 이 감각, 마치 모든 이의 축복을 받은 용사가 된 기분이에요! 이대로라면 ',
      digital.sex,
      '들과 대결할 수 있겠어요!',
    ]);
    await me.say_and_wait('이길 수 있겠어?');
    await digital.say_and_wait(
      '솔직히 말하면, 불안함뿐이에요! 그 세 명은 누구 하나 제가 이길 수 있다는 확신이 서질 않아서……',
    );
    await digital.say_and_wait(
      '그러니 제가 할 수 있는 건, 지금까지 쌓아온 풍부하고 다양한 경험에 기댈 수밖에 없어요!',
    );
    await era.printAndWait([
      '앞을 가로막는 벽이 아무리 높더라도, ',
      digital.get_colored_name(),
      '에게 망설임은 없었다.',
    ]);
    await era.printAndWait('하지만, 그날 밤……');
    await era.printAndWait('쿠로후네가 레이스에 출주할 수 없다는 소식이 들려왔다.');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 그날 밤, ',
      me.get_colored_name(),
      '을(를) 불러냈다. 심야의 해변에서 그녀는 고개를 떨군 채 아무 말도 하지 않았다.',
    ]);
    await era.printAndWait([
      '한참이 지나서야 ',
      digital.get_colored_name(),
      '이 입을 열었다——',
    ]);
    await digital.say_and_wait([
      callname,
      '……저기, 이런 일이 정말로 일어날 수 있는 건가요?',
    ]);
    await era.printAndWait([
      '골절, 팬 수, 투표수, 추첨, 회피…… 여러 가지 이유로 출주하지 못하는 경우를 ',
      digital.get_colored_name(),
      '은 봐왔다.',
    ]);
    await era.printAndWait([
      '하지만 출주 쿼터가 예상치 못하게 부족해서 출주하지 못하는 상황은, ',
      digital.get_colored_name(),
      '도 처음 겪는 일이었다.',
    ]);
    await digital.say_and_wait(
      '승부의 세계니까, 분명 승리의 미소와 패배의 눈물이 공존하겠죠.',
    );
    await digital.say_and_wait([
      '하지만 눈물 너머에는 반드시 감동이 존재하기에, 그렇기에 ',
      digital.get_uma_sex_title(),
      '들은 또 다른 경기장에서 다시 부딪힐 수 있는 거예요.',
    ]);
    await digital.say_and_wait('……하지만…… 만약, 달리는 것조차 할 수 없다면, 그건 뭐라고 설명해야 할까요……');
    await era.printAndWait('모든 준비를 마쳤음에도 레이스에 나갈 수 없었다.');
    await digital.say_and_wait([
      '만약 저의 출주 때문에…… ',
      digital.sex,
      '의 꿈이 꺾여버린 거라면……',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 몹시 낙담하여 이제 물러나고 싶다는 마음이 생긴 듯했다.',
    ]);
    await me.say_and_wait([
      '너, 설마 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 나가지 않겠다고 말하려는 거야?!',
    ]);
    await digital.say_and_wait('그…… 그럴 리가요.');
    await digital.say_and_wait([
      '저에게도, 저에게도 ',
      sys_get_colored_callname(19, 15),
      '와 ',
      sys_get_colored_callname(19, 58),
      '와의 약속이 있으니까요……',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '도 알고 있었다. ',
      digital.sex,
      '가 아무것도 바꿀 수 없다는 것을.',
    ]);
    await era.printAndWait([
      digital.get_uma_sex_title(),
      '를 좋아하기에, 그 ',
      digital.get_uma_sex_title(),
      '가 겪은 일이 마치 수초처럼 ',
      digital.sex,
      '의 발목을 휘감았다.',
    ]);
    await era.printAndWait('하지만, 이대로 끝난다면……');
    await me.say_and_wait(['쿠로후네를 믿어봐. 동시에, 나도 너를 믿어.']);
    await digital.say_and_wait([
      '그건…… 무슨 뜻인가요? 쿠로후네를 믿으라니……?',
    ]);
    await me.say_and_wait([
      '쿠로후네의 발걸음은 멈추지 않아. ',
      digital.sex,
      '에게는 내년이 있어. 올해 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 출주하지 못하게 된 건 사실이지만……',
    ]);
    await me.say_and_wait([
      '하지만 너는 쿠로후네가 이 정도로 좌절해서 그대로 은퇴할 거라고 생각해?',
    ]);
    await digital.say_and_wait('! 그…… 그럴 리 없죠.');
    await era.printAndWait([
      '훌륭한 ',
      digital.get_uma_sex_title(),
      '는 이런 좌절에 굴하지 않는 법이었다.',
    ]);
    await me.say_and_wait('네가 최고의 답을 보여주는 것, 그것이 쿠로후네에게 줄 수 있는 최고의 도움이야.');
    await digital.say_and_wait([
      '……',
      digital.get_uma_sex_title(),
      '짱들이 고통 속에서 마지막에 거머쥐는 것. 그것들을 거치며 알게 되었어요. 그것은 무엇과도 바꿀 수 없는 소중한 것이라는 걸요.',
    ]);
    await digital.say_and_wait(
      '모든 슬픔도, 심지어 그 후회조차도 내일의 힘이 될 거예요! 깨달았어요! 저 자신이 직접 느꼈으니까요!',
    );
    await digital.say_and_wait([
      '그래서 저는 진심으로 말할 수 있어요. ',
      digital.get_uma_sex_title(),
      '는 정말 최고예요!',
    ]);
    await era.printAndWait([digital.get_colored_name(), '이 일어나 바다를 향해 달려갔다——']);
    await digital.say_and_wait([
      '그렇다면, 어떤 고난이라도 굴하지 않는 의지로 전부 다 날려버려어어어어어어!!!!!',
    ]);
    await digital.say_and_wait([
      '나도, 그리고 쿠로후네도! 반드시 뛰어넘을 수 있어어어어어!!!!',
    ]);
    await digital.say_and_wait('……아아아……');
    await era.printAndWait([
      '한바탕 소리를 지른 뒤, ',
      digital.get_colored_name(),
      '이 정신을 차렸다.',
    ]);
    await me.say_and_wait('아무래도 답을 찾은 모양이네, 디지털.');
    await digital.say_and_wait([
      '……저, 저도 여기서 멈출 수 없어요. 반드시, 반드시 ',
      sys_get_colored_callname(19, 61),
      '에게서 받은 소중한 것을 ',
      digital.sex,
      '에게 보여줄 거예요!',
    ]);
    await digital.say_and_wait([
      '저는 반드시 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 나갈 거예요. 그리고, 그리고! 반드시 압도적인 승리를 거둘 거예요!',
    ]);
    await digital.say_and_wait([
      digital.sex,
      '가 내년 이 대회에서 저를 따라잡기 위해 온 힘을 다할 수 있도록요!',
    ]);
    await digital.say_and_wait('절대로! 반드시요!');
    await digital.say_and_wait([
      '그리고 제가 지금까지 만난 모든 ',
      digital.get_uma_sex_title(),
      '들의 감정을 전부 쏟아내겠어요!',
    ]);
    await digital.say_and_wait('이것이 저의 책임이에요!');
    await era.printAndWait('승리하는 것, 그것도 대승을 거두는 것만이 쿠로후네의 마지막 미련을 끊어낼 수 있었다.');
    await era.printAndWait([
      '이것이 ',
      digital.get_colored_name(),
      '이 스스로에게 부여한 책임이었다.',
    ]);
  };

  handlers[95 + 48] = async (digital, me, callname) => {
    await print_event_name(
      ['그저 평범한 ', digital.get_uma_sex_title(),'로서'],
      digital,
    );
    const dober = get_chara_talk(59);
    await era.printAndWait([
      '서리가 내리는 12월의 마지막 며칠. 얼마 전 관람했던 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '의 열기와 ',
      get_chara_talk(83).get_colored_name(),
      '의 멋진 결승선 통과를 지켜본 여운이 남아 있었지만, ',
      digital.get_colored_name(),
      '은 즉시 코미케 준비에 투신했다.',
    ]);
    await era.printAndWait('부스 참가자로서 미리 입장해 준비할 수 있다고는 해도……');
    await era.printAndWait('부스 참가자만으로도 이렇게 사람이 많다니 감탄하지 않을 수 없었다.');
    await era.printAndWait([
      '전시장으로 끊임없이 이어지는 거대한 뱀 같은 행렬을 보며, ',
      me.get_couple_title(),
      '의 차례가 오려면 얼마나 더 걸릴지 가늠하기 어려웠다.',
    ]);
    await digital.say_and_wait([
      '후후후, ',
      callname,
      ', 당신은 일반 관객의 매운맛을 못 봐서 그래요. 그때가 되면 도쿄 빅 사이트 앞뒤로 발 디딜 틈 없는 파도가 밀려온다고요!',
    ]);
    await era.printAndWait([
      '……다행히 ',
      digital.get_colored_name(),
      '이 부스 참가자였기에 전용 통로로 함께 입장할 수 있었다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '의 등에 매인 특제 배낭에는 고리가 잔뜩 달려 있었고, 온갖 굿즈와 장식품들이 걸려 있었다……',
    ]);
    await era.printAndWait('듣기로는 그 안에 태피스트리 뭉치도 들어 있다고 했다……');
    era.printButton('「저기, 디지털. 이것들 설마 혼자서 다 만든 거야?」', 1);
    await era.input();
    await era.printAndWait([
      '차르륵차르륵, ',
      digital.get_colored_name(),
      '이 몸을 돌릴 때마다 장식품의 금속들이 서로 부딪히며 날카로운 소리를 냈다.',
    ]);
    await digital.say_and_wait([
      '음…… ',
      callname,
      ', 제 작업량에 놀라신 건가요? 사실 여기 있는 것 중 상당수는 재판본, 즉 예전의 작품들이에요.',
    ]);
    await era.printAndWait('예전이라니, 과거를 말하는 건가……');
    await digital.say_and_wait([
      '데뷔한 이후로 사실 제 작품들은 꽤 줄었어요. 기본적으로 참가할 때 얇은 책 한두 권 정도만 내고, 가끔은 불참할 때도 있어서……',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 다시 몸을 돌려 거대한 도쿄 빅 사이트를 응시했다.',
    ]);
    await digital.say_and_wait(['어쩌면…… 나중에는 다시 예전 속도를 회복할 수 있겠죠.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      digital.get_colored_name(),
      '의 말을 이해했고, 그녀가 왜 그렇게…… 무기력해 보였는지도 이해할 수 있었다.',
    ]);
    await era.printAndWait([
      '일찍 일어난 탓에 조금 초점이 흐릿한 ',
      digital.get_colored_name(),
      '의 눈동자를 보며, ',
      me.get_colored_name(),
      '은(는) 과거를 회상했다……',
    ]);
    await era.printAndWait('그것은 비가 내리던 어느 더트 레이스였다.');
    await era.printAndWait([
      '가랑비 섞인 찬바람이 ',
      me.get_colored_name(),
      '의 우비 안으로 사정없이 파고들었다.',
    ]);
    await era.printAndWait([
      '분명 ',
      digital.get_colored_name(),
      '도 무척 춥다고 느꼈을 것이다.',
    ]);
    await era.printAndWait([
      '코스 위의 ',
      digital.get_colored_name(),
      '은 진흙투성이였고, 원래 화려한 색이었던 승부복은 흙빛으로 물들어 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 전광판의 성적을 보지 않았다. 그저 고개를 들어 그 전광판을 바라보고 있는 ',
      digital.get_colored_name(),
      '의 뒷모습을 보았을 뿐이다.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '행렬은 생각보다 길지 않았고, 어느새 회장 안으로 들어와 있었다.',
    ]);
    await era.printAndWait([
      '사람들 사이를 비집고 간신히 도착한 ',
      digital.get_uma_sex_title(),
      ' 전용 구역. 그곳에서 부스를 준비하던 몇몇 참가자들이 ',
      digital.get_colored_name(),
      '을 보더니 멀리서 손을 흔들어 주었다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 이곳에서 인지도가 꽤 높은 모양이었다.',
    ]);
    await digital.say_and_wait('오오오오옷?!');
    await era.printAndWait([
      '음? ',
      digital.get_colored_name(),
      '의 시선을 따라가 보니 마스크와 모자를 쓰고, 옷을 여러 겹 껴입어 조금 부해 보이는 한 명의…… ',
      digital.get_uma_sex_title(),
      '가 있었다.',
    ]);
    await era.printAndWait([
      '평범한 모자를 쓰고 있었지만, 모자 위쪽이 살짝 솟아오른 모양으로 보아 ',
      digital.get_uma_sex_title(),
      '임을 짐작할 수 있었다.',
    ]);
    await era.printAndWait([
      '그리고 사실, 모두가 ',
      digital.sex,
      '가 누구인지 대강 눈치채고 있었지만……',
    ]);
    await digital.say_and_wait([
      '도…… ',
      { color: dober.color, content: '도보메 지로 선생님', fontWeight: 'bold' },
      '! 이번에도 신간을 내셨군요?! 신간 3권 부탁드려요!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 도베르…… 아니, ',
      {
        color: dober.color,
        content: '도보메 지로 선생님',
        fontWeight: 'bold',
      },
      '의 부스로 달려가 즉시 3권을 예약했다.',
    ]);
    await era.printAndWait([
      '그러자 도베르…… 아니, ',
      {
        color: dober.color,
        content: '도보메 지로 선생님',
        fontWeight: 'bold',
      },
      '도 주위를 조심스럽게 살피더니, 다른 사람들이 (의도적으로) 눈길을 피하는 것을 확인하고는……',
    ]);
    await era.printAndWait([
      '가방 속에서 정성스럽게 포장된 무언가를 꺼내 감격한 ',
      digital.get_colored_name(),
      '에게 슬쩍 건네주었다.',
    ]);
    await era.printAndWait('여러 가지 교환이 오간 뒤, 곧 다가올 것은……');
    await era.printAndWait('코믹 마켓의 정식 개막이었다!');
    await era.printAndWait(
      '몇 번을 봐도 감탄하게 된다. 인간은 너무 많고, 지구는 너무 좁다.',
    );
    await me.say_as_unknown_and_wait('오오오오오오오!');
    await era.printAndWait(
      '입구 쪽에서 들려오는 수많은 이들의 영혼이 담긴 함성. 앞줄에 선 사람들이 인기 부스 구역으로 질주하더니, 부스 근처에 도달하자 예의 바르게 멈춰 서서 지폐를 건네고 귀중한 전리품을 챙겼다.',
    );
    await era.printAndWait('뒤이어 인파가 계속 쏟아져 들어왔고, 현장에 도착한 것은……');
    await era.printAndWait(
      ['??? 「에엣! ', sys_get_colored_callname(59, 19), '! 저 왔어요!」'],
      {
        color: diamond_lord.color,
      },
    );
    await era.printAndWait([
      '멀리서 인파를 뚫고 갈색 머리의 ',
      digital.get_uma_sex_title(),
      ' 한 명이 나타났다. ',
      digital.get_uma_sex_title(),
      '다운 각력으로 순식간에 ',
      digital.get_colored_name(),
      '의 앞으로 다가왔다.',
    ]);
    await digital.say_and_wait(['늘 내던 신간이에요, 여기요~']);
    await era.printAndWait([
      '신간을 받아 든 ',
      digital.get_uma_sex_title(),
      '는 깡충깡충 뛰며 퇴장했다. 첫 번째 손님이었지만, 곧바로 이어지는 것은……',
    ]);
    era.printButton('「디지털…… 네 유명세에 대해서는 익히 들었지만……」', 1);
    await era.input();
    await era.printAndWait(
      '정신없이 바빠지기 시작했다. 가방 속에서 둘둘 말린 포스터를 꺼내랴, 받은 현금을 확인하랴……',
    );
    await era.printAndWait(
      '전자 결제가 왜 없느냐고 묻지 마라. 스마트폰은 입장 이후 주머니 속에서 아무런 소리도 내지 않은 채 조용히 잠들어 있었다.',
    );
    await era.printAndWait([
      '한바탕 폭풍 같은 시간이 지나고, 드디어 「완판」 팻말을 세울 수 있었다.',
    ]);
    era.println();
    await era.printAndWait([
      digital.get_colored_name(),
      '과 함께 URA 공식 부스 구역에 구경 가볼까 의논하던 찰나, ',
      {
        color: dober.color,
        content: '도보메 지로 선생님',
        fontWeight: 'bold',
      },
      '이 작별 인사를 하러 왔다.',
    ]);
    await dober.say_and_wait([
      sys_get_colored_callname(59, 19),
      ', 원래는 같이 구역을 둘러보고 싶었지만, 아쉽게도 저는 여기서 이만 가봐야겠네요. 부디 앞으로 더 훌륭한 작품을 만들어 주시길 바랄게요.',
    ]);
    await digital.say_and_wait('에에엣, 과찬이세요! 반드시 목숨 걸고 창작하겠습니다!');
    await digital.say_and_wait(
      '데뷔한 뒤로 작품 활동이 조금 뜸해졌지만, 안심하세요. 곧 예전 페이스로 돌아올 테니까요!',
    );
    await dober.say_and_wait(['!']);
    await era.printAndWait([
      '마스크 너머로 눈매만 보였음에도, ',
      dober.get_colored_name(),
      '의 격렬한 감정 변화를 느낄 수 있었다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 주먹을 꽉 쥐더니, 위장용으로 썼던 모자와 마스크를 벗어 던졌다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 멍해졌다. 그녀는 왜 ',
      dober.get_colored_name(),
      '가 갑자기 이렇게 화를 내는지 알지 못했다.',
    ]);
    await digital.say_and_wait([
      '도보…… ',
      sys_get_colored_callname(19, 59),
      '……?',
    ]);
    await era.printAndWait([
      dober.get_colored_name(),
      '은(는) 가방에서 ',
      digital.get_colored_name(),
      '의 동인지 한 권을 꺼내 그녀의 부스에 다시 내려놓았다.',
    ]);
    await dober.say_and_wait(['이거, 돌아가서 읽으려고 했던 건데…… 미안해.']);
    await era.printAndWait([
      dober.get_colored_name(),
      '는 뒤도 돌아보지 않고 가버렸다. ',
      digital.get_colored_name(),
      '이 붙잡으려 했지만 쳐다보지도 않았다.',
    ]);
    await digital.say_and_wait(['……']);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 고개를 떨군 채, 자신이 정성껏 포장했던 그 동인지를 멍하니 바라보았다.',
    ]);
    await era.printAndWait(
      ['??? 「저기…… ', sys_get_colored_callname(59, 19), '?」'],
      {
        color: diamond_lord.color,
      },
    );
    await era.printAndWait([
      '아까 부스에 가장 먼저 달려왔던 갈색 머리의 ',
      digital.get_uma_sex_title(),
      '였다. 그녀 역시 전리품이 가득 든 커다란 가방을 들고 마지막 인사를 하러 온 모양이었다.',
    ]);
    await digital.say_and_wait(['꼴사나운 모습을 보여드려서 죄송해요, ', diamond_lord, '님. 저는……']);
    await digital.say_and_wait([
      '한 가지 여쭤보고 싶어요. 팬으로서 작가님의 작품을 더 많이 보고 싶어 하는 건…… 당연한 마음 아닌가요?',
    ]);
    await say_by_diamond_lord('그렇죠…… 하지만……');
    await era.printAndWait([
      diamond_lord,
      '라고 불린 ',
      digital.get_uma_sex_title(),
      '. ',
      digital.sex,
      '는 그대로 바닥에 주저앉아 커다란 배낭을 뒤지더니 두꺼운 책 한 권을 꺼냈다.',
    ]);
    await era.printAndWait('펼쳐보니 그것은 두꺼운 보호 표지로 감싸인 동인지였다.');
    await say_by_diamond_lord('이건, 작가님이 데뷔하던 첫해에 냈던 동인지예요……');
    await say_by_diamond_lord(
      '그때 전 아직 팬이 아니었어요. 이건 나중에 다른 사람에게 비싼 값을 치르고 산 거예요……',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 입술을 깨물며 아무 말도 하지 않았다.',
    ]);
    await say_by_diamond_lord([
      '비싸게 샀지만, 제가 산 것 중 가장 가치 있다고 생각하는 책이에요. ',
      sys_get_colored_callname(59, 19),
      ', 그 이유를 아시나요?',
    ]);
    await say_by_diamond_lord([
      '이 책에는 갓 데뷔한 ',
      digital.get_uma_sex_title(),
      '의 레이스가 그려져 있어요. 평소처럼 ',
      digital.get_uma_sex_title(),
      '에 대한 사랑뿐만 아니라, 그 안에는 무언가 다른 것이 들어 있었거든요.',
    ]);
    await say_by_diamond_lord(
      '그리고 제가 하고 싶은 또 다른 말은…… 제가 작가님의 팬이 된 건 바로 당신과의 그 레이스에서였어요. 그 이후로 당신의 모든 레이스를 보러 갔답니다.',
    );
    await era.printAndWait([
      diamond_lord,
      '는 그 동인지를 다시 보물처럼 소중하게 보호 표지로 감싸 가방에 넣었다. 그러고는 배낭을 멘 채 떠나갔다.',
    ]);
    era.drawLine();
    await era.printAndWait([
      digital.get_colored_name(),
      '은 행사장 밖에서 유명한 ',
      digital.get_uma_sex_title(),
      '의 코스프레를 하고 춤을 추는 사람들을 멍하니 바라보았다.',
    ]);
    await era.printAndWait([
      '그중에는 가짜 귀를 단 평범한 ',
      digital.get_phy_sex_title(),
      '도 있었고, 직접 코스프레용 귀를 착용한 ',
      digital.get_uma_sex_title(),
      '도 섞여 있었다.',
    ]);
    await era.printAndWait([
      '그들이 즐겁게 춤추는 모습을 보며, ',
      digital.get_colored_name(),
      '은……',
    ]);
    await digital.say_and_wait([callname, ', 왜일까요?']);
    era.printButton('「도베르를 말하는 거야, 아니면 다이아몬드 로드를 말하는 거야?」', 1);
    await era.input();
    await digital.say_and_wait('……둘 다요.');
    era.printButton(
      `「디지털, 너는 경기장을 가로지르는 레이스 ${digital.get_uma_sex_title()}잖아?`,
      1,
    );
    await era.input();
    await era.printAndWait([
      digital.get_colored_name(),
      '은 뜬금없는 질문에 잠시 멈칫하더니 고개를 끄덕였다.',
    ]);
    await me.say_and_wait([
      '도베르와 로드에게 고마워해야겠네. ',
      digital.sex,
      '들 덕분에 이 ',
      callname,
      '도 다시 깨달았거든.',
    ]);
    era.println();
    await era.printAndWait([
      '경기장 안에서 비록 조금 변태 같긴 해도, 다른 ',
      digital.get_uma_sex_title(),
      '를 뚫어지게 쳐다보던 ',
      digital.get_colored_name(),
      '……',
    ]);
    await me.say_and_wait([
      '만약 네가 레이스 ',
      digital.get_uma_sex_title(),
      '가 아니라면, 나를 포함한 네 팬들이 보고 있는 디지털은 대체 누구겠어?',
    ]);
    await digital.say_and_wait(['그 디지털은…… 그저 아직 현실을 제대로 파악하지 못한 디지털일 뿐이에요……']);
    era.println();
    await era.printAndWait([
      '눈앞에 결승선이 보여도 여전하던 ',
      digital.get_colored_name(),
      '……',
    ]);
    await me.say_and_wait([
      '경기장에 발을 들여놓는 순간 너는 레이스 ',
      digital.get_uma_sex_title(),
      '가 되는 거야. 너는 팬들의 응원을 받는 존재라고!',
    ]);
    await digital.say_and_wait(['경기장에 발을 들여놓기만 하면……?']);
    await me.say_and_wait([
      '그래! 팬인 네가 제일 잘 알고 있잖아! 경기장에 선 모든 ',
      digital.get_uma_sex_title(),
      '는 결과가 어떻든 다 그런 존재라는 걸!',
    ]);
    era.println();
    await era.printAndWait([
      '진흙탕 속에서도 필사적으로 앞으로 나아가던 ',
      digital.get_colored_name(),
      '……',
    ]);
    era.printButton('「너는 이미 팬들에게 추앙받는 존재가 된 거라고!」', 1);
    await era.input();
    await digital.say_and_wait('!');
    await era.printAndWait([
      digital.get_colored_name(),
      '은(는) 그 말을 듣고 온몸을 떨었다.',
    ]);
    era.printButton('「팬 서비스, 뭔지 알지!」', 1);
    await era.input();
    await digital.say_and_wait('알겠어요!');
    era.println();
    await era.printAndWait([digital.get_colored_name(), '은 정말로……']);
    await digital.say_and_wait([
      '우오오오오오오오, 팬들의 기대를 저버릴 수는 없죠…… 아하하하……',
    ]);
    era.println();
    await era.printAndWait([digital.get_uma_sex_title(), '구나.']);
    await digital.say_and_wait('저, 조금만 더 노력해 볼게요.');
    await era.printAndWait(
      '눈썹은 처지고 눈동자는 흐릿하며 눈물까지 맺혀 있었다. 심지어 쓴웃음에 가까운 표정이었다.',
    );
    await era.printAndWait('하지만 이 미소는 분명 팬들의 심금을 울려 눈물을 흘리게 하겠지……');
    await era.printAndWait('아, 앞이 잘 안 보이네……');
  };
};