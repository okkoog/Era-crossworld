const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (acute, me, callname, flags) => {
    era.set('cflag:100:축제이벤트표시', 0);
    await print_event_name('새해의 포부', acute);
    await era.printAndWait([
      '설날 무렵, ',
      acute.get_colored_name(),
      '와(과) 함께 트레이닝실에 머물며 텔레비전을 보면서 새해가 오기를 기다리고 있다.',
    ]);
    await acute.say_and_wait('우후후~ 코타츠 안은 따끈따끈하구나~');
    await era.printAndWait([
      '코타츠 안에 앉아 있는 ',
      acute.get_colored_name(),
      '는, 귤껍질에 붙은 하얀 귤락을 떼어내며 무심결에 말했다.',
    ]);
    await acute.say_and_wait(['아, 참. ', callname, '~ 하나 물어봐도 될까?']);
    era.printButton('「응? 왜 그래?」', 1);
    await era.input();
    await acute.say_and_wait(
      '실은 말이야... 요즘 또래 애들이랑 이야기할 때면, 젊은 애들이랑 어떻게 대화해야 할지 잘 모르겠다는 느낌이 드는게야.',
    );
    await acute.say_and_wait(
      '좋아하는 거라든지, 자주 산책하는 장소라든지, 요즘 즐겨 듣는 음악이라든지— 뭐 그런 것들. 요즘 젊은이들과는 화제가 많이 안 맞는 것 같구먼.',
    );
    await acute.say_and_wait(
      '그래서 말인데... 새해가 오면, 또래 친구들 눈에 확 달라진 모습으로 변신해 볼까 싶어서...',
    );
    await acute.say_and_wait([
      '그러니까, ',
      callname,
      '. 어떻게 하면 좋을지 조언해 주겠니?',
    ]);
    era.println();
    era.printButton('「요즘 젊은이들의 문화를 열심히 배워보자!」（근성+25）', 1);
    era.printButton('「일단 그런 건 제쳐두는 게 어때?」（스태미나+20）', 2);
    era.printButton(
      '「동년배들의 시선을 끌 만한 더 재미있는 화제를 생각해서 또래의 리더가 되어보자!」（스킬포인트+20）',
      3,
    );
    switch (await era.input()) {
      case 1:
        await acute.say_and_wait('젊은이들의 문화 배우기라... 그렇구나.');
        await acute.say_and_wait('그럼 우선, 핸드폰으로 요즘 유행하는 걸 검색해 봐야겠구먼.');
        await acute.say_and_wait(
          'ㅇㆍㆍㅡㅈㅡㅁㅇㅡ... 오타가 났네, 지우기—',
        );
        await acute.say_and_wait('아, 너무 많이 지웠네... 그럼 다시—');
        await era.printAndWait(
          '검지손가락으로 화면을 톡톡 두드리며, 입력한 글자를 작게 소리 내어 읽고 있다.',
        );
        await era.printAndWait('멀리서 지켜보고 있자니, 그 모습이 무척이나 귀엽게 느껴졌다.');
        await acute.say_and_wait('ㅇㆍㆍㅡㅈㅡㅁㅇㅡㆍㆍㅎㅣㆍㅣㅇ—— 엔터');
        await acute.say_and_wait('………………');
        await acute.say_and_wait('어라? 화면이 왜 안 움직일까?');
        await era.printAndWait([
          acute.get_colored_name(),
          '의 핸드폰 조작 화면은 보이지 않지만.',
        ]);
        await era.printAndWait('옆에서 듣자 하니, 엔터 키를 확인 버튼으로 착각한 모양이다.');
        await era.printAndWait([
          '아무래도 【젊은이들의 문화 배우기】는 ',
          acute.get_colored_name(),
          '에게는 아직 갈 길이 먼 듯하다—',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(100, [0, 0, 0, 25], 0);
        break;
      case 2:
        await acute.say_and_wait('일단 그런 건 제쳐두라... 고?');
        await acute.say_and_wait(
          '음... 하긴 그렇네. 새해인 만큼— 푹 쉬어야겠구먼.',
        );
        await acute.say_and_wait(['그럼— 자, ', callname, '.']);
        await era.printAndWait([
          '느긋한 몸짓의 ',
          acute.get_colored_name(),
          '는, 손에 쥐고 있던 하얀 귤락을 다 떼어낸 귤을 반으로 갈라 건네주었다.',
        ]);
        await era.printAndWait('그중 한 조각을 떼어 입에 넣자—');
        era.printButton('「——————————————」', 1);
        await era.input();
        await era.printAndWait('엄청 셔!!!!');
        await era.printAndWait([
          '옆에서 신맛 때문에 얼굴이 일그러진 ',
          me.get_colored_name(),
          '을(를) 보며, ',
          acute.get_colored_name(),
          '는 무심결에 웃음을 터뜨렸다.',
        ]);
        await era.printAndWait('웃음소리 속에서, 신맛 가득한 새해를 보냈다—');
        flags.wait_flag = get_attr_and_print_in_event(100, [0, 20], 0);
        break;
      case 3:
        await acute.say_and_wait('또래의 리더?');
        await era.printAndWait([
          acute.get_colored_name(),
          '는 무슨 말인지 잘 이해하지 못한 듯하다.',
        ]);
        await acute.say_and_wait(
          '무슨 말인지 잘 모르겠지만... 요컨대, 화제를 열심히 찾아보라는 뜻이려나?',
        );
        await acute.say_and_wait('열심히 화제를 찾는다... 화제라—');
        await acute.say_and_wait(
          '아, 생각났다. 새해 명절 스튜를 만드는 방법— 이걸 화제로 삼으면, 틀림없이 분위기가 화기애애해지겠구먼... 우후후.',
        );
        await era.printAndWait([acute.get_colored_name(), '는 온화하게 웃었다.']);
        await era.printAndWait(
          '그러는 사이, 주방 난로 위에서 끓고 있는 스튜가 보글보글 경쾌한 소리를 내기 시작했다—',
        );
        flags.wait_flag = get_attr_and_print_in_event(100, undefined, 20);
    }
  };

  handlers[47 + 6] = async (acute, me, callname, flags) => {
    const a_call_j = sys_get_colored_callname(100, 48),
      j_call_a = sys_get_colored_callname(48, 100),
      jordan = get_chara_talk(48);
    era.set('cflag:100:축제이벤트표시', 0);
    await print_event_name('세기초 최강 파이터데이', acute);
    await era.printAndWait([
      '봄이 오고 가을이 가며, ',
      acute.get_colored_name(),
      '의 트레이너가 된 지도 어느덧 2년째가 되었다.',
    ]);
    await era.printAndWait(
      '설날 분위기가 채 가시기도 전에, 작년 연말 상점가에 장을 보러 왔을 때 우연히 봤던 크리스마스트리에 다시 새로운 장식이 걸려 상점가 입구에 놓여 있었다.',
    );
    await era.printAndWait(
      '멀리서 트리에 걸린 선물 상자를 바라보며 대체 무슨 기념일 장식인가 의아해하다가, 손가락을 꼽아 날짜를 계산해 보고서야 며칠 뒤가 발렌타인데이라는 사실을 떠올렸다.',
    );
    await era.printAndWait([
      '...뭐, ',
      me.get_colored_name(),
      '과(와)는 상관없는 기념일이지만.',
    ]);
    await era.printAndWait([
      '트레센의 높은 벽 안에서 생활하는 ',
      me.get_colored_name(),
      '에게 평범한 일상이란 전도유망한 신인 ',
      acute.get_uma_sex_title(),
      '와 함께 하루도 빠짐없이 훈련을 계속하는 것이고, 당연히 벽 밖의 동년배 이성과 새콤달콤한 연애를 할 시간적 여유 따윈 없었다.',
    ]);
    await era.printAndWait([
      '듣자 하니 요즘 인기 있는 트레이너들은 발렌타인데이에 가끔 담당 ',
      acute.get_uma_sex_title(),
      '에게서 우정 초콜릿을 받기도 한다지만...',
    ]);
    await era.printAndWait([
      '아무리 생각해도 ',
      acute.get_colored_name(),
      '는 발렌타인데이를 챙길 만한 젊은 감각의 ',
      acute.get_uma_sex_title(),
      '같지는 않아 보인다—',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    era.printButton('「응?」', 1);
    await era.input();
    await era.printAndWait([
      '상점가에서 훈련 용품을 구매하던 중, 우연히 상점가 입구를 지나치던 「',
      acute.get_colored_name(),
      '」와 「',
      jordan.get_colored_name(),
      '」을 발견했다.',
    ]);
    await era.printAndWait('두 사람은 무슨 이야기를 나누는지 거리에서 웃고 떠들며 나란히 걷고 있었다.');
    await era.printAndWait('방향을 보아하니, 아무래도 「역」 근처로 갈 생각인 듯했다—');
    await era.printAndWait('…………한 번 뒤따라가 볼까?');
    await era.printAndWait('왠지 모르게, 무슨 일이 벌어질 것 같은 예감이 들었다.');
    await era.printAndWait(
      '막 사 온 특가 닭가슴살 1kg과 단백질 보충제를 들고, 몰래 자신의 담당 뒤를 밟았다.',
    );
    await era.printAndWait('……');
    await era.printAndWait([
      '……기분 탓인가? 왠지 길가의 경찰관이 ',
      me.get_colored_name(),
      '을(를) 쳐다보는 눈빛이 조금 심상치 않은 것 같다.',
    ]);
    era.drawLine();
    await jordan.say_and_wait([
      '이거야! ',
      j_call_a,
      '—봐봐, 완전 안 되잖아!',
    ]);
    await acute.say_and_wait('...『펀치 기계』?');
    await acute.print_and_wait([
      '역 근처의 오락실, ',
      acute.get_colored_name(),
      '와 ',
      jordan.get_colored_name(),
      ' 두 사람이 새로 들어온 펀치 기계를 둘러싸고 있었다.',
    ]);
    await jordan.say_and_wait([
      '맞아, 이 오락실에서 새로 선보인 건데, 『',
      acute.get_uma_sex_title(),
      '』 급 펀치 기계를 새로 설치했대.',
    ]);
    await jordan.say_and_wait([
      '여기 『',
      acute.get_uma_sex_title(),
      '』 급에서 고득점을 따내면 상품을 받을 수 있다는데—',
    ]);
    await jordan.say_and_wait(
      '내가 아까 와서 여러 번 쳐봤는데, 고득점은커녕 점수가 꿈쩍도 안 해— 분명 기계가 고장 난 거라니까!',
    );
    await acute.say_and_wait('...『펀치 기계』?');
    await acute.print_and_wait([
      '자신의 옆얼굴을 어루만지며, ',
      acute.get_colored_name(),
      '는 눈앞에 있는 처음 보는 기계를 찬찬히 살폈다.',
    ]);
    await jordan.say_and_wait('완전 짜증 나... 상품으로 주는 네일 케어 세트가 꼭 갖고 싶었는데.');
    await acute.say_and_wait(
      '어머어머... 그랬구나, 그래서 그렇게 분했던 거구먼. 으음 으음—',
    );
    await acute.say_and_wait([
      a_call_j,
      ', 한 번만 더 시도해 보겠니? 옆에서 내가 좀 봐줄테니~',
    ]);
    await jordan.say_and_wait('조아, 이번엔 진심으로 갈 거니까. 조금 떨어져 있어.');
    await jordan.say_and_wait('준비—');
    await acute.print_and_wait('╲!쾅~!╱');
    await jordan.say_and_wait(
      '—후우, 봐! 다 쳤는데 랭킹이 미동도 안 하잖아, 이거 분명 기계가 고장 난 거라니까.',
    );
    await acute.say_and_wait('음... 그렇구나.');
    await era.printAndWait([
      '옆에 서 있던 ',
      acute.get_colored_name(),
      '는 무엇이 문제인지 어느 정도 파악한 듯했다.',
    ]);
    await acute.say_and_wait(['이제 내가 말한 대로, 한 번만 더 해보렴, ', a_call_j, '.']);
    await acute.say_and_wait(
      '우선은, 엄지손가락을 주먹 안에 넣지 마렴. 안 그러면 아까처럼 무의식적으로 손톱을 보호하려다 힘이 안 들어가게 되거든.',
    );
    await acute.say_and_wait(
      '그다음은 스탠스야, 주먹을 뻗을 때 반대쪽 다리를 앞으로 내밀고 몸을 틀어봐—',
    );
    await jordan.say_and_wait('어, 어라? ...이렇게?');
    await acute.say_and_wait(
      '그래, 그래... 그런 다음엔, 무릎에 힘을 빼고 겨드랑이를 붙이렴. 주먹을 뻗을 땐 팔과 어깨가 평행을 유지하게 하고, 하반신의 무게 중심에 주의하면서 【황금장방형】을 만들어내는 거야. 그리고 나서—',
    );
    await acute.say_and_wait('있는 힘껏, 뻗는 거란다! ...자, 해보렴?');
    await jordan.say_and_wait([
      '에? 으음... 이렇게? ...진짜 돼, ',
      j_call_a,
      '?',
    ]);
    await acute.say_and_wait([
      '그냥 믿어보렴, ',
      a_call_j,
      '. 황금장방형의 자세를 취할 수만 있다면, 분명 해낼 수 있단다.',
    ]);
    await jordan.say_and_wait('으음...그렇게 말한다면... 준비—');
    await era.printAndWait('╲!!!쾅~!!!╱');
    await era.printAndWait('*~띵~*');
    await era.printAndWait('*~축하합니다! 상품에 당첨되셨습니다~*');
    await jordan.say_and_wait('에!? 거짓말? 진짜 상품이 나왔잖아?');
    await jordan.say_and_wait([
      '난 그냥 ',
      j_call_a,
      '가 말해준 대로 자세만 살짝 바꿨을 뿐인데... 게다가 지금 팔이 찌릿찌릿한 느낌도 들고—',
    ]);
    await jordan.say_and_wait([j_call_a, ', 진짜 대박!']);
    await acute.say_and_wait(
      '우후후... 내가 복싱에 아~주 조금 경험이 있어서 그런 걸지도 모르겠네?',
    );
    await acute.say_and_wait(
      '예전에 복싱을 했을 때는 말이야, 사람들에게 『라이트 스트레이트의 어큐트』라고 불리기도 했단다?',
    );
    await acute.say_and_wait(
      '뭐... 나중에 남O사천왕을 쓰러뜨린 후에는 『전설』로 불리게 됐지만 말이야.',
      true,
    );
    await jordan.say_and_wait([
      '에에에에에~! 그럼 ',
      j_call_a,
      '가 하면, 분명 상품 엄청 탈 수 있겠네?',
    ]);
    await acute.say_and_wait('아하하... 그건 말이지—');
    await acute.print_and_wait('...솔직히 말하자면, 별로 해보고 싶지 않았다.');
    await acute.print_and_wait(
      '복싱을 그만둔 지도 꽤 오래됐고, 예전 전성기 시절의 감각은 이미 잃어버린 지 오래라...',
    );
    await acute.print_and_wait(
      '이 기계로 테스트를 해본다면, 결과가 어떻든 간에 전성기 시절의 감각을 되찾을 수 없어 틀림없이 아쉬움만 남을 테니까.',
    );
    await acute.print_and_wait(
      '손을 내저으며 거절하려던 찰나— 우연히 벽에 걸린 상품 목록을 보게 되었다.',
    );
    await acute.say_and_wait('으음... 3등상, 초콜릿 무스 특대 케이크?', true);
    await acute.say_and_wait(
      ['그러고 보니, 발렌타인데이가 코앞이네. ', callname, '은—'],
      true,
    );
    await acute.say_and_wait('…………');
    await acute.say_and_wait([
      '좋아. 그럼 한 번 해봐야 겠구먼. ',
      a_call_j,
      ', 옆으로 조금 비켜주겠니?',
    ]);
    await acute.print_and_wait([
      '거절하려던 오른손은 주먹으로 변했고, ',
      acute.get_colored_name(),
      '는 결의에 찬 눈빛을 보였다.',
    ]);
    await jordan.say_and_wait('오예!');
    await acute.say_and_wait('으음... 예전의 감각을 떠올려보자.', true);
    await acute.say_and_wait(
      '생각해 내자... 예전에 이집트에서 디O와 싸울 때, 상대방에게 눈이 가려졌을 때 내질렀던 그 주먹—',
      true,
    );
    await acute.say_and_wait('힘점 받침점 작용점... 힘점 받침점 작용점— 하앗!!!');
    await era.printAndWait('╲╲╲!!!!!!!!쾅!!!!!!!!╱╱╱');
    await acute.print_and_wait([
      acute.get_colored_name(),
      '의 일격과 함께, 어디선가 거대한 흙먼지가 사방으로 피어올랐다.',
    ]);
    await era.printAndWait('*~띵~*');
    await era.printAndWait(
      '*~고장, 고장, 고장— 즉시 직원에게 문의해 주시기 바랍니다~*',
    );
    await acute.say_and_wait('아... 어머? 기계를 부숴버린 걸까...');
    await acute.say_and_wait('너무 오랜만에 주먹을 쥐었더니, 역시 녹슬었나 보네—');
    await jordan.say_and_wait('………………진심?');
    await acute.print_and_wait([
      jordan.get_colored_name(),
      '은 어안이 벙벙한 표정으로, 단 일격에 형체를 알아볼 수 없게 찌그러진 기계를 바라보며 깊은 상념에 잠겼다.',
    ]);
    await acute.print_and_wait(
      '머지않아, 이 도시의 지하 격투계에 새로운 전설이 탄생하려 하고 있었다—',
    );
    era.drawLine();
    await acute.print_and_wait([
      '그날 밤, 오락실의 1등상인 당근 주얼 3000개를 거절한 ',
      acute.get_colored_name(),
      '는 초콜릿 무스 특대 케이크를 들고 트레이닝실로 향했다.',
    ]);
    await acute.print_and_wait(
      '케이크를 코타츠 위에 올려두고, 한쪽 구석에 놓인 선물 상자 안에 숨어 일부러 불을 껐다.',
    );
    await acute.say_and_wait(
      ['조던에게 들은 젊은 애들이 좋아한다는 서프라이즈 파티... 분명 이런 느낌이겠지?'],
      true,
    );
    await acute.say_and_wait(
      [
        '이걸 위해서 일부러 조던이 입는... 승부복? 도 입어봤고. ',
        callname,
        '이 돌아오면, 튀어나와서 깜짝 놀라게 해줘야지, 랄까...',
      ],
      true,
    );
    await acute.say_and_wait(
      '우후후... 가만히 생각해 보면, 나답지 않은 행동이긴 하네.',
      true,
    );
    await acute.print_and_wait([
      '왜 ',
      callname,
      '에게 이런 발렌타인 서프라이즈를 해주고 싶은 걸까? 솔직히 ',
      acute.get_colored_name(),
      ' 자신도 잘 몰랐다.',
    ]);
    await acute.print_and_wait([
      '다만 펀치 기계 상품 목록에서 초콜릿 무스 특대 케이크를 봤을 때, 자신도 모르게 ',
      callname,
      '에게 서프라이즈를 해주는 장면이 머릿속에 떠올랐을 뿐이다.',
    ]);
    await acute.print_and_wait([
      '처음 옥상에서 몰래 눈물짓던 ',
      callname,
      '을 봤을 때만 해도, 이성에게 차이고 숨어서 혼자 우는 어린애인 줄 알았지만.',
    ]);
    await acute.print_and_wait([
      '어느새 눈 깜짝할 사이에, 내가 ',
      callname,
      '의 담당 ',
      acute.get_uma_sex_title(),
      '가 된 지도 벌써 꼬박 1년이 지났구나.',
    ]);
    await acute.say_and_wait('...1년이라, 시간 참 빠르네.', true);
    await acute.say_and_wait(
      [
        '처음엔 트레센 학원에서 ',
        acute.get_uma_sex_title(),
        '로서 지루한 훈련만 하게 될 줄 알았는데... 의외로 나쁘지 않은 나날이었어.',
      ],
      true,
    );
    await acute.print_and_wait([
      '눈을 감자, 머릿속에 ',
      callname,
      '의 얼굴이 서서히 떠올랐다.',
    ]);
    await acute.print_and_wait('나약하고, 운도 없고, 늘 전전긍긍하며, 어딘가 은근히 어린애 같은 구석도 있다.');
    await acute.print_and_wait('하지만 상냥하고, 선량하고, 행동력이 뛰어나며, 의외로 듬직한 면도 있다.');
    await acute.print_and_wait('나는, 그런 사람과 꼬박 1년이라는 시간을 함께 보낸 것이다.');
    await acute.print_and_wait('그리고 앞으로, 아직 2년이란 시간이 더 남아있다...');
    await acute.print_and_wait(
      '만약 남은 2년도, 지금껏 함께 보낸 1년처럼 눈 깜짝할 사이에 지나가 버린다면?',
    );
    await acute.say_and_wait('…………');
    await acute.print_and_wait('왠지 모르게, 거기까지 생각이 미치자 묘하게 초조해지기 시작했다.');
    await acute.print_and_wait(
      '고개를 저으며 스스로에게 타일렀다— 「아직 2년이나 남았으니, 초조해하지 않아도 돼.」',
    );
    await acute.print_and_wait([
      callname,
      '이 돌아오길 기다리자— 돌아오면, 깜짝 놀라게 해주는 거야—',
    ]);
    await acute.say_and_wait('하지만—');
    await acute.say_and_wait('——……');
    await acute.say_and_wait('……');
    await acute.print_and_wait('말이 입가에 맴돌 뿐, 밖으로 나오지 않았다.');
    await acute.print_and_wait([
      '자신의 이 초조함이 대체 무엇인지 알지 못하는 ',
      acute.get_colored_name(),
      '는, 어두컴컴한 코타츠 속에 웅크려 있었다.',
    ]);
    await acute.print_and_wait('오직 자신만이 들을 수 있는, 쉴 새 없이 뛰는 심장 소리만이 울려 퍼졌다.');
    await acute.print_and_wait('………………');
    await acute.print_and_wait('…………');
    await acute.print_and_wait('……');
    await acute.print_and_wait(['오늘따라 ', callname, '은, 유난히 늦게 돌아왔다.']);
    era.drawLine({ content: '트레센 외부의 파출소' });
    era.printButton(
      `「경찰관님, 제발 제 말을 믿어주세요. 전 정말이지 제 담당 ${acute.get_uma_sex_title()}가 걱정돼서 뒤에서 몰래 따라가고 있었을 뿐이라고요. 전 절대 스토커가 아닙니다!」`,
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait('경찰', [
      '시끄러워! 내가 모를 줄 알아, 요즘 치한들은 다들 제일 잘나가는 ',
      acute.get_uma_sex_title(),
      '들에게 성적 환상을 품고 있다고. 밖에서는 다들 자기가 트레센 트레이너라고 떠벌리지. 이번 주만 해도 트레이너라고 자칭하는 놈 여덟 명, 선생님이라고 하는 놈 세 명, 의학 박사라고 하는 놈 한 명을 스토커로 잡아넣었어.',
    ]);
    era.printButton(
      '「전 그 사람들과 정말 다릅니다! 번듯한 직업도 있고, 위대한 이상도—」',
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait(
      '경찰',
      '그래서 어쨌다고? 옆 감방에도 제야의 종이 울릴 때 거리에서 이상을 펼치겠다던 뜻있는 청년 두 명이 있는데, 실상은 무허가 폭죽 장수였다니까?',
    );
    era.printButton(
      '「경찰관님, 전 정말이지— 아뇨, 이렇게 말씀드리죠. 제발 절 보내주십시오, 경찰관님. 저 메지로 가문에 아는 사람 있습니다.」',
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait(
      '경찰',
      '하아? 지금 날 협박하는 거냐? 난 평생 살면서 협박 따위에 굴복해 본 적이 없어— 하나 알려주지, 네놈이 메지로 가문에 연줄이 있다고? 이 경찰서— 메지로 가문이 세운 거다!',
    );
    era.printButton(
      '「...네? 메지로 가문이 경찰서 짓는 데까지 손을 뻗쳤다고요? 우아아, 누구라도 좋으니 제발 꺼내주세요! 전 억울하다고요!!!」',
      1,
    );
    await era.input();
    era.drawLine();

    const tokino = get_chara_talk(301);
    await era.printAndWait([
      '그 후, ',
      tokino.get_colored_name(),
      '가 순찰을 하던 중 지역 파출소를 지나다 ',
      me.get_colored_name(),
      '의 살려달라는 외침을 듣고, 마침내 ',
      me.get_colored_name(),
      '을(를) 구출해 냈다.',
    ]);
    await era.printAndWait([
      '「',
      acute.get_uma_sex_title(),
      ' 스토킹」 혐의로 감방에 들어갔었다는 이야기를 들은 뒤, ',
      tokino.get_colored_name(),
      '는 당신을 매섭게 째려보았다.',
    ]);
    await era.printAndWait([
      '돌아오는 길 내내 필사적으로 ',
      tokino.get_colored_name(),
      '에게 자신은 정말 스토커가 아니라고 해명했다. 그리고 사과의 의미로 ',
      acute.sex,
      '를 자신의 휴게실로 초대해 야식을 대접하기로 했다.',
    ]);
    await era.printAndWait([
      '결과적으로 자신의 방에서 보게 된 것은 거대한 초콜릿 무스 케이크, 그리고 어째서인지 노출이 심한 산타복을 입은 채 거대한 선물 상자 안에 누워 잠든 ',
      acute.get_colored_name(),
      '였다.',
    ]);
    await tokino.say_and_wait('………………');
    era.printButton('「………………」', 1);
    await era.input();
    era.printButton('「제가 피해자였다고 하면 믿으시겠습니까?」', 1);
    await era.input();
    era.drawLine();
    await era.printAndWait('그 후, 전신 마취를 당한 채 정원에 거꾸로 꽂혔다.');
    await era.printAndWait('그리고 3개월 치 감봉 처분을 받고 나서야 무마되었다.');
    await era.printAndWait([
      '그날 이후, ',
      get_chara_talk(302).get_colored_name(),
      ', ',
      tokino.get_colored_name(),
      ', ',
      acute.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '을(를) 바라보는 눈빛이 조금 달라졌다.',
    ]);
    await era.printAndWait('부디 좋은 쪽으로 변한 거였으면 좋겠다... 하하. (먼 산)');
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      100,
      [0, 0, 10],
      30,
      undefined,
      true,
    );
    flags.wait_flag =
      get_attr_and_print_in_event(0, [0, 0, 0, 1], 0, undefined, true) ||
      flags.wait_flag;
  };

  handlers[95 + 1] = async (acute, me, callname, flags) => {
    era.set('cflag:100:축제이벤트표시', 0);
    await print_event_name('새해의 선물', acute);
    await era.printAndWait([
      '3년 차의 설날 역시, 트레이닝실에서 ',
      acute.get_colored_name(),
      '와 함께 보내고 있다.',
    ]);
    await acute.say_and_wait([
      '새해 복 많이 받으렴, ',
      callname,
      '~. 떡을 많이 구웠는데, 같이 먹을까?',
    ]);
    await era.printAndWait([
      '능숙하게 쟁반을 들고 주방에서 걸어 나오는 ',
      acute.get_colored_name(),
      '는, ',
      me.get_colored_name(),
      '보다 더 이 트레이너 휴게실의 주인처럼 보였다.',
    ]);
    await era.printAndWait([
      '쟁반을 든 ',
      acute.get_colored_name(),
      '와 극명하게 대비되는 건, 휴일 이후로 코타츠와 거의 한 몸이 되어버린 나태한 자신의 모습이었다.',
    ]);
    await era.printAndWait([
      '...자신에게 변명하자면, ',
      me.get_colored_name(),
      '은(는) 땡땡이를 치는 게 아니라, 휴식 시간을 알차게 활용하고 있는 것 뿐이었다.',
    ]);
    await era.printAndWait([
      '평일에는 주로 각종 훈련과 경기장 답사 같은 일상 업무로 스케줄이 꽉 차 있고, 그나마 조금 자유롭게 쉴 수 있는 시간마저도 주로 ',
      acute.get_colored_name(),
      '와 함께 활동하는 데 쓰인다.',
    ]);
    await era.printAndWait([
      '물론 ',
      acute.get_colored_name(),
      '와 함께 활동하는 게 피곤한 업무는 아니지만... 어찌 됐든 그로 인해 얼마 없는 휴식 시간을 할애하고 있는 건 사실이니까.',
    ]);
    await era.printAndWait([
      '평일 매일 밤 훈련을 마치고 집에 돌아오면 피곤해서 침대에 쓰러지듯 잠들고, 다음 날 눈을 뜨자마자 곧바로 ',
      acute.get_colored_name(),
      '와 훈련을 진행하며, 그렇게 끝이 보이지 않는 훈련을 하루하루 반복하고 있다.',
    ]);
    await era.printAndWait(
      '일주일에 하루 있는 귀중한 휴일마저도, 세탁기에 산더미처럼 쌓여 악취를 풍기는 빨랫감과 끝도 없이 어질러진 휴게실의 집안일을 보고 있노라면, 하늘에 4시간밖에 떠 있지 않은 태양처럼 기분도 어둠 속으로 가라앉곤 한다.',
    );
    await era.printAndWait([
      '솔직히 말해서, ',
      acute.get_colored_name(),
      '가 매끼 식사를 챙겨주지 않았다면, 밥 먹는 방법조차 까먹었을지도 모른다...',
    ]);
    await acute.say_and_wait([callname, ', 입 벌리렴, 아~~~']);
    era.printButton('「아— 앙.」', 1);
    await era.input();
    await era.printAndWait([
      acute.get_colored_name(),
      '가 건네준 구운 떡을 한 입 베어 물자, 뜨겁고 달콤한 맛이 순식간에 입안에 퍼졌다.',
    ]);
    await acute.say_and_wait([
      '우후후~ 아주 잘 먹네, ',
      callname,
      '— 다음부턴 혼자서 먹어야 한단다?',
    ]);
    await era.printAndWait([
      '사랑스러움이 가득한 표정의 ',
      acute.get_colored_name(),
      '는, 떡이 담긴 그릇과 젓가락을 건네주었다.',
    ]);
    await era.printAndWait('그리고 자리에서 일어나, 경쾌한 콧노래를 흥얼거리며 베란다 쪽으로 걸어갔다—');
    await acute.say_and_wait('다음은 빨래~ 빨래를 해야지~~~');
    await era.printAndWait('………………');
    await era.printAndWait('어쩐지 모를 죄책감이 밀려온다.');
    await era.printAndWait([
      '담당 ',
      acute.get_uma_sex_title(),
      '에게 청소, 빨래, 요리 같은 집안일을 다 시키고서, 정작 본인은 코타츠 안에서 빈둥거리고 있다니...',
    ]);
    await era.printAndWait('...이거 너무 꼴불견 아닌가?');
    await era.printAndWait('아니지, 이건 심각하게 꼴불견이다.');
    await era.printAndWait('뭔가 해야 해—');
    era.println();
    era.printButton('「주방 일을 돕자!」 (모든 능력치+5)', 1);
    era.printButton('「내 옷은 내가 빨자!」 (스킬포인트+35)', 2);
    era.printButton(`「${acute.name}의 어깨를 주물러주자!」 (스태미나+30)`, 3);
    switch (await era.input()) {
      case 1:
        await era.printAndWait(
          '늘어지게 있는 것도 행복하긴 하지만, 계속 이 상태에 빠져 있을 수만은 없다.',
        );
        await era.printAndWait('—좋아, 결심했어!');
        await era.printAndWait('자리에서 일어나 늠름하게 주방으로 향했다.');
        await era.printAndWait(
          '적어도 올해 저녁 식사와 설날에 먹을 반찬 정도는 내가 직접 만들어야지.',
        );
        await era.printAndWait('그럼 먼저, 냉동 만두부터 녹여볼까...');
        await era.printAndWait('………………');
        flags.wait_flag = get_attr_and_print_in_event(
          100,
          new Array(5).fill(5),
          0,
        );
        break;
      case 2:
        await era.printAndWait([
          '아무리 그래도 ',
          acute.get_colored_name(),
          ' 혼자서 집안일을 다 하게 놔둘 수는 없다.',
        ]);
        await era.printAndWait('자리에서 일어나 베란다 쪽으로 걸어갔다.');
        await acute.say_and_wait('킁킁————');
        await era.printAndWait('…………응?');
        await era.printAndWait([
          '우연히 ',
          acute.get_colored_name(),
          '가 당신이 어제 벗어둔 셔츠의 냄새를 맡고 있는 것을 보았다.',
        ]);
        era.printButton(`「저기... ${acute.name}?」`, 1);
        await era.input();
        await acute.say_and_wait(['아... ', callname, '이구나~']);
        await era.printAndWait([
          '마치 일상적인 일인 양, ',
          acute.get_colored_name(),
          '는 코에 대고 있던 셔츠를 스윽 내렸다.',
        ]);
        await acute.say_and_wait(['무슨 일 있니, ', callname, '?']);
        era.printButton('「그게... 내 셔츠는 왜?」', 1);
        await era.input();
        await acute.say_and_wait([
          '아... 이거 말이구나. 방금 갑자기 흥미가 생겨서 냄새를 좀 맡아봤단다— 남자다운 향기가 나네, ',
          callname,
          '.',
        ]);
        era.printButton('「………………」', 1);
        await era.input();
        await era.printAndWait('…………');
        await era.printAndWait([
          '일단 ',
          acute.get_colored_name(),
          '를 베란다에서 내보냈다.',
        ]);
        await era.printAndWait([
          '세탁기 안에서 빙글빙글 돌아가는 옷들을 보며, 방금 전 ',
          acute.get_colored_name(),
          '가 셔츠 냄새를 맡던 장면이 떠올라 왠지 모르게 마음이 싱숭생숭해졌다.',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('조금 이따가 방으로 돌아가야겠다.');
        flags.wait_flag = get_attr_and_print_in_event(100, [], 35);
        break;
      case 3:
        await era.printAndWait([
          acute.get_colored_name(),
          '가 빨래를 마치고 방으로 돌아온 후, 일단 ',
          acute.get_colored_name(),
          '를 코타츠 안으로 모셨다.',
        ]);
        await acute.say_and_wait(['으음? 무슨 일이니, ', callname, '?']);
        await era.printAndWait([
          acute.get_colored_name(),
          '는 고개를 들어, 자신의 뒤에 서 있는 당신을 이해할 수 없다는 표정으로 바라보았다.',
        ]);
        await era.printAndWait([
          '하지만 바로 그때, ',
          me.get_colored_name(),
          '의 죄악의 두 손이 ',
          acute.get_colored_name(),
          '의 몸을 향해 뻗어나갔고—',
        ]);
        await era.printAndWait('—가볍게 꽉.');
        await acute.say_and_wait('앗?❤️');
        await era.printAndWait([
          '손으로 가볍게 주무르자, ',
          acute.get_colored_name(),
          '의 꼬리가 순식간에 빳빳해졌다.',
        ]);
        await era.printAndWait([
          '...그렇구나, 여기가 ',
          acute.get_colored_name(),
          '의 성감대였나?',
        ]);
        await acute.say_and_wait(['저, 저기❤️... ', callname, '... 이건?']);
        era.printButton(
          `「가만히 있어, ${acute.name}. 오랫동안 바빴으니까, 내가 마사지로 피로를 풀어줄게.」`,
          1,
        );
        await era.input();
        await acute.say_and_wait('하, 하지만 거기는... 아❤️~');
        await era.printAndWait([
          '살짝 꼬집듯이 주무르자, ',
          acute.get_colored_name(),
          '의 입에서 애원하는 듯한 교태로운 신음이 새어 나왔다.',
        ]);
        await era.printAndWait([
          '힘을 줄 때마다, ',
          acute.get_colored_name(),
          '는 무심결에 짧은 교성을 질렀다.',
        ]);
        await era.printAndWait('왠지 모를 기묘한 흥분감과 배덕감이 느껴졌다.');
        await era.printAndWait([
          '그렇게, 단둘만 있는 트레이닝실 안에서 ',
          acute.get_colored_name(),
          '의 마사지를 원 없이 즐겼다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(100, [0, 30], 0);
    }
  };
};