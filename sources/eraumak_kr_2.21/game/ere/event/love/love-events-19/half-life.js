const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

/**
 * @param {CharaTalk} digital
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (digital, me, callname) => {
  await print_event_name('편지', digital);
  const child = digital.sex_code - 1 ? '딸' : '아들',
    m_call_d = sys_get_colored_callname(0, 19);
  await me.say_as_unknown_and_wait('디지털 선생님의 신간이 발매된다는 소문 들었어?');
  await me.say_as_unknown_and_wait(
    '에? 정말? 그렇게 오랫동안 소식이 없더니, 드디어 신간을 볼 수 있는 거야?',
  );
  await me.say_as_unknown_and_wait('바로 다음 달 도쿄 전시회에서 나온다나 봐!');
  era.println();
  await era.printAndWait('그러니까…… 대체 누가 이런 헛소문을 퍼뜨린 거야!!');
  await era.printAndWait([
    '며칠 지나지 않아 인터넷에서 화제가 되더니, 이제 모든 디지털 선생님의 팬들은 ',
    m_call_d,
    '이 다음 달에 신간을 낼 거라고 믿고 있다.',
  ]);
  await era.printAndWait([
    '그리고 ',
    m_call_d,
    '이 그 트윗들을 보았을 때, 가장 먼저 든 생각은…… 죄책감이었다.',
  ]);
  await digital.say_and_wait(
    '곰곰이 생각해보니…… 제가 신간을 안 낸 지 꽤 오래됐네요…… 아이고, 정말 면목 없습니다.',
  );
  await era.printAndWait('화면을 향해 고개를 숙이며, 화면 너머의 팬들에게 사과했다.');
  await era.printAndWait([
    '이어서 ',
    m_call_d,
    '은 몸을 돌려 ',
    me.get_colored_name(),
    '의 손을 잡았다. 눈에는 눈물이 그렁그렁 맺힌 채, 금방이라도 울 것 같은 표정을 지었다.',
  ]);
  await era.printAndWait(['에휴, 또 시작이군. ', me.get_colored_name(), '은(는) 생각했다.']);
  await era.printAndWait([
    '이것은 ',
    digital.sex,
    '가 집필을 위해 은둔을 시작한다는 뜻이며, 앞으로의 집안일이나 식사 준비 등은 전부 ',
    me.get_colored_name(),
    '의 몫이 된다는 것을 의미한다.',
  ]);
  await era.printAndWait('그다지 힘든 일은 아니지만, 다만 이런 날들 동안에는 조금 부족해지는 게 있다……');
  await era.printAndWait([
    m_call_d,
    '로부터 얻는 에너지. ',
    m_call_d,
    '을 보충할 수도 없고, 머리를 쓰다듬거나 귀를 만지작거리거나 꼬리를 깨물 수도 없게 된다……',
  ]);
  await digital.say_and_wait('부탁드려요!');
  await me.say_and_wait('내가 널 하루 이틀 보나.');
  await era.printAndWait('결국 또 허락하고 말았다. 그러고 보니 거절한 적이 있었던가?');
  era.drawLine();
  await era.printAndWait([
    '청소하는 동안 어깨와 등에 느껴지는 뻐근함이 ',
    me.get_colored_name(),
    '에게 운동이 필요함을 일깨워주었다.',
  ]);
  await era.printAndWait(
    '빗자루질하고, 걸레질하고. 로봇 청소기를 하나 살까 생각도 해봤지만, 진열장은 로봇이 닦아주지 않는다는 사실을 깨달았다.',
  );
  await era.printAndWait([
    '그렇다. ',
    me.get_colored_name(),
    '의 집에서 가장 청소하기 까다로운 곳은 진열장이다. 수많은 진열장과 수많은 굿즈들.',
  ]);
  await era.printAndWait('에휴, 먼지털이로 가볍게 먼지만 털어내자.');
  await era.printAndWait([
    '문득 하얀색 사진 한 장이 ',
    me.get_colored_name(),
    '의 시선을 끌었다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '에게 따뜻한 감정을 불러일으킨 사진은 ',
    me.get_colored_name(),
    '과 ',
    m_call_d,
    '의 결혼사진이었다.',
  ]);
  await era.printAndWait([
    '순백의 ',
    digital.sex_code - 1 ? '웨딩드레스' : '턱시도',
    '로 단장한 분홍색 ',
    digital.get_uma_sex_title(),
    '. 머리 위의 붉은 리본은 여전히 존재감을 뽐내고 있었고, 가느다란 목선, 지켜주고 싶은 마음이 들게 하는 손, 그리고 눈물이 맺힌 회청색 눈동자.',
  ]);
  await era.printAndWait([
    '분명 그리 오래전 일이 아닌 것 같은데, ',
    digital.sex_code - 1 ? '웨딩드레스' : '턱시도',
    ' 차림의 ',
    m_call_d,
    '이 바로 앞에 있는 것 같으면서도 벌써 몇 년이 흐른 것 같은 기분이 든다.',
  ]);
  await era.printAndWait([
    '어쨌든 이 결혼사진을 보는 것만으로도 ',
    me.get_colored_name(),
    '은(는) 꽤 많은 에너지를 보충할 수 있었다.',
  ]);
  await era.printAndWait('소중한 추억이 깃든 물건들 위주로만 청소하기로 했다.');
  await era.printAndWait([
    '수집품실의 문을 열고 들어가니, 안에는 커다란 투명 진열장 몇 개가 놓여 있었고, 온갖 ',
    digital.get_uma_sex_title(),
    '들의 굿즈가 가득 차 있었다.',
  ]);
  await era.printAndWait([
    '이 방은 원래 손님용이었으나, ',
    m_call_d,
    '이 수집하는 물건들이 늘어나면서 거실 진열장만으로는 부족해져 아예 방 하나를 비워 굿즈방으로 만들게 된 것이다.',
  ]);
  await era.printAndWait([
    '참고로 ',
    me.get_colored_name(),
    '이(가) 예전에 모았던 ',
    m_call_d,
    '의 굿즈들은 가장 안쪽 진열장에 보관되어 있다.',
  ]);
  await era.printAndWait([
    '에휴, 예전에 ',
    digital.sex,
    '가 「아와와와! 안 돼요 안 돼, 역시 너무 부끄러워요!」라며 고집을 피우는 바람에 결국 여기까지 밀려나게 된 것이다.',
  ]);
  await era.printAndWait([
    m_call_d,
    '의 굿즈가 놓인 진열장 앞에 서니, 다양한 모습의 ',
    m_call_d,
    '이 예전의 장면들을 떠올리게 해 ',
    me.get_colored_name(),
    '을(를) 미소 짓게 했다.',
  ]);
  await era.printAndWait([
    '응원봉을 치켜들고 침을 흘리고 있는 ',
    m_call_d,
    '. 이런 모습이 굿즈로 나온 ',
    digital.get_uma_sex_title(),
    '는 분명 얘 말고는 없을 거다.',
  ]);
  await era.printAndWait([
    '구경하며 걷다 보니 어느덧 진열장의 끝에 다다랐고, 그곳에서 ',
    me.get_colored_name(),
    '은(는) 발견했다—— 한 더미의 짐들을.',
  ]);
  await era.printAndWait('이건……');
  await era.printAndWait([
    '생각났다. ',
    child,
    '의 짐이다. ',
    digital.sex,
    '의 짐이다.',
  ]);
  era.drawLine();
  await digital.print_and_wait(
    '에헤헤, 드디어 거의 다 완성됐어. 이제 남은 건…… 오오오…… 벌써 밥 먹을 시간이네.',
  );
  await digital.print_and_wait('오늘 메뉴는 뭘까요~');
  await digital.print_and_wait('문을 열었더니 세상에, 식탁 가득 음식이 차려져 있네?!');
  await digital.print_and_wait('오늘 무슨 특별한 날인가요? 디지땅, 바빠서 잊어버린 건가?!');
  await digital.print_and_wait('큰일이다 큰일이야, 디지땅 디지땅, 어떻게 이걸…… 에?');
  await me.say_and_wait([m_call_d, ', 표정을 보니 뭔가 놓친 줄 아나 본데?']);
  await digital.say_and_wait(
    '에에에? 제, 제 잘못이에요! 작업하느라 정신이 없어서 잊어버렸나 봐요! 디지땅은 당장 승천해서 여신님들을 뵈러……',
  );
  await me.say_and_wait('스톱 스톱, 잠시만. 오늘 이런 상을 차린 건 온갖 추억이 깃든 이걸 찾았기 때문이야——');
  await digital.print_and_wait(['어느새 ', callname, '가(이) 들고 있는 건…… 봉투인가?']);
  await digital.say_and_wait(
    '이 시대에 편지를 보다니 정말 신기하네요. 설마 미래에 보내는 편지라거나, 아니면 유령이 보낸 편지 같은 건가요……',
  );
  await me.say_and_wait('비슷해. 하지만 네 생각과는 좀 다를걸.');
  await digital.say_and_wait([
    callname,
    ', 어디 한번 볼까요? 예전에 제가 샀던 트레센 굿즈의 문양이 찍힌 실링 왁스까지 있네요. 보낸 사람 이름이 어디 보자……',
  ]);
  await digital.print_and_wait([
    '오오오오! 이거 정말 깜짝 놀랐네. 설마, ',
    child,
    '이 쓴 편지라니......',
  ]);
  await digital.say_and_wait(
    '설마 이거 저세상에서 온 편지 같은 건가요?! 정말 실존하는 거였나요?!',
  );
  await digital.say_and_wait(
    '열면 막 공포 게임처럼 악령이 씌거나 하는 거 아니겠죠?!',
  );
  await me.say_and_wait('글쎄, 그러면 한번 열어볼까?');
  await digital.say_and_wait(
    '아뇨 아뇨 아뇨, 왠지 먼저 퇴마 의식이라도 해야 할 것 같아요. 예전 할로윈 승부복의 그 부적부터 좀 꺼내오고……',
  );
  await digital.print_and_wait(
    '사실 편지 봉투를 들고 계속 횡설수설하고 있지만, 손에는 힘이 다 빠진 듯 가벼운 편지 한 통조차 제대로 들지 못하고 부들부들 떨리고 있다.',
  );
  await me.say_and_wait('……');
  await digital.print_and_wait([
    callname,
    '를(을) 바라보았다. ',
    callname,
    '도…… ',
    callname,
    '도 분명 같은 기분이겠지.',
  ]);
  await digital.print_and_wait([
    callname,
    '의 옆에, 의자 하나에 둘이서 꼭 붙어 앉았다.',
  ]);
  await digital.print_and_wait([
    callname,
    '가 팔을 뻗어 나를 꽉 안아주었다…… ',
    callname,
    '의 손바닥에서 배어 나오는 식은땀이 느껴질 정도야.',
  ]);
  await digital.print_and_wait('열어보자.');
  await digital.print_and_wait('부스럭…… 안의 종이가 마찰하는 소리가 들린다.');
  await digital.print_and_wait('실링 왁스를 떼어내고, 봉투를 열어, 그 안에 접힌 편지지를 꺼내고……');
  await digital.print_and_wait('펼쳐보자.');
  await digital.print_and_wait('편지지를 펼치자, 그 안에는 이렇게 적혀 있었다——');
  era.println();
  era.printMultiColumns([{ type: 'divider' }], { offset: 8, width: 8 });
  await era.waitAnyKey();
  era.printMultiColumns([{ content: '아빠 엄마에게：', type: 'text' }], {
    offset: 8,
    width: 8,
  });
  await era.waitAnyKey();
  era.printMultiColumns(
    [
      {
        config: { align: 'center', isParagraph: true },
        content: '키워주셔서 감사합니다.',
        type: 'text',
      },
    ],
    {
      offset: 8,
      width: 8,
    },
  );
  await era.waitAnyKey();
  era.printMultiColumns(
    [
      {
        config: { align: 'right' },
        content: ['——당신들의 ', child],
        type: 'text',
      },
    ],
    {
      offset: 8,
      width: 8,
    },
  );
  await era.waitAnyKey();
  era.printMultiColumns([{ type: 'divider' }], { offset: 8, width: 8 });
  await era.waitAnyKey();
  era.println();
  await digital.say_and_wait('으햐하, 뭐야, 역시나네요. 당연히 이런 내용이 적혀 있을 줄 알았다니까요!');
  await me.say_and_wait('당연하지!');
  await digital.say_and_wait(
    '으오오오, 자자, 밥 먹어요 밥! 푹 쉬자구요!',
  );
  await digital.print_and_wait([
    '김이 모락모락 나는 맛있는 요리들, 피어오르는 김, 따뜻한 ',
    callname,
    ', 입가로 가져다주는 부드러운 햄버그 스테이크.',
  ]);
  await digital.print_and_wait([
    callname,
    '가(이) 반찬을 집어 건네줄 때의 그 미소, 당연히 기분 좋게 즐겨야겠지.',
  ]);
  await digital.print_and_wait([
    callname,
    '의 허벅지를 툭툭 쳤다. 흠, 최근에 집안일 하면서 근육 좀 붙었나 본데……',
  ]);
  await me.say_and_wait([m_call_d, '? 지금? 여기서? 밥 다 먹고 하는 게 어때?']);
  await digital.say_and_wait(
    '다 먹기 전이든 후든 결과는 똑같잖아요? 똑같이 먹는 거 아닌가요? 구헤헤…… 츄릅——',
  );
  await digital.print_and_wait('와, 나 방금 정말 위험한 소리를 낸 것 같아.');
  await digital.say_and_wait(
    '으오오오오, 그래요, 맞아요, 바로 지금이에요! 일주일이나 됐다고요, 일주일 동안 참아왔단 말이에요! 으으으, 일주일 동안 제가 어떻게 버텼는지 아세요?!',
  );
  await digital.say_and_wait(
    '세상에, 디지땅은 일주일 내내 동인지만 그렸단 말이에요. 관례대로라면 다 그린 후엔 축하 파티를 해야 하는 거 아닌가요?!',
  );
  await me.say_and_wait([
    '아니 아니, 그건 네 문제잖아! 그리고 ',
    m_call_d,
    ', 너 다 그렸어?',
  ]);
  await digital.say_and_wait(
    '……조, 조금 남았지만, 진짜로 조금 남았어요! 그리고 그게 중요한가요? 제가 더 중요한 거 아니에요?!',
  );
  await me.say_and_wait(
    '아이고, 너 일주일 동안 나 찬밥 신세로 만들었잖아! 그래놓고 지금 바로 먹어 치우겠다고? 나중에 뒷정리도 내 몫이잖아!',
  );
  await digital.print_and_wait('조…… 조금 미안한 기분이 들지만…… 하지만……');
  await digital.say_and_wait('정말 죄송해요! 나중에 뒷정리 좀 부탁드릴게요!');
  await sys_love_uma_in_event(19);
  await quick_into_sex(19);
};