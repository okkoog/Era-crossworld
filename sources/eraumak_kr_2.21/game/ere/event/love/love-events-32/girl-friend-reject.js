const era = require('#/era-electron');

const be_common = require('#/event/love/love-events-32/girl-friend-be-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} _callname
 * @param {TachyonLifeMarks} life_marks
 */
module.exports = async (tachyon, me, _callname, life_marks) => {
  let callname = _callname;
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '이라는 이름의 ',
    tachyon.get_uma_sex_title(),
    '를 처음 만났을 때의 화면을 회상했다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 주법, ',
    tachyon.sex,
    '의 허무함, ',
    tachyon.sex,
    '의 가능성',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '에게 두 눈을 불태워져 버린 ',
    me.get_colored_name(),
    '은(는), 그때부터 이미 ',
    tachyon.sex,
    '를 위해 모든 것을 희생하기로 맹세하지 않았던가.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 별다른 말 없이, ',
    tachyon.sex,
    '의 손에서 직접 시험관을 건네받았다',
  ]);
  await era.printAndWait(['기억하고 있다. ', tachyon.sex, '가 예전에 스스로 미친 눈을 가졌다고 말했던 것을.']);
  await era.printAndWait([
    '그 광기의 기원은, 분명 ',
    tachyon.sex,
    '의 광휘로부터 반사된 것이리라.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 광기는 ',
    tachyon.sex,
    '의 꿈에서 비롯된 것이고, ',
    me.get_colored_name(),
    '의 광기는 ',
    tachyon.sex,
    '로부터 비롯된 것이다.',
  ]);
  await era.printAndWait([
    '그렇다면, ',
    tachyon.sex,
    '의 꿈을 위해서, ',
    tachyon.sex,
    '가 계속해서 그런 빛을 발할 수 있도록 하기 위해서라면, 자신을 희생하는 것쯤이야 아무렴 어떠랴?',
  ]);
  era.println();
  await era.printAndWait([
    '지금의 ',
    me.get_colored_name(),
    '은(는) 마치 한 명의 독실한 신도 같았으며, 실제로도 그러했다.',
  ]);
  await era.printAndWait([
    '그리고 ',
    me.get_colored_name(),
    '의 마음속 신이자 유일한 빛이, 지금 ',
    me.get_colored_name(),
    '(으)로 인해 어둠에 타락하려 하고 있었다.',
  ]);
  await era.printAndWait('그런 일은 당연히 절대 용납될 수 없었다.');
  await era.printAndWait('다행히, 아직 모든 것을 되돌릴 방법은 남아있었다.');
  era.println();
  await era.printAndWait([
    '자기 자신만 사라진다면, ',
    tachyon.sex,
    '는 다시 ',
    me.get_colored_name(),
    '이(가) 보고 싶어 했던 빛을 계속해서 발할 수 있을 것이다.',
  ]);
  era.printButton('「고마워…… 가능성의 저편에서 다시 만나자.」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '를 믿었다. 아니, 맹신이라고 해도 좋을 정도였다.',
  ]);
  await era.printAndWait([
    '하지만 동시에, ',
    me.get_colored_name(),
    '의 내면에는 한 줄기 두려움 또한 존재했다.',
  ]);
  await era.printAndWait([
    '만약 자신이 죽은 뒤에, ',
    tachyon.sex,
    '가 생각만큼 강인하지 못하면 어떡하지?',
  ]);
  await era.printAndWait([
    '만약 ',
    tachyon.sex,
    '가 ',
    tachyon.sex,
    ' 스스로가 생각하는 것만큼 강하지 않다면 어떡하지?',
  ]);
  await era.printAndWait([
    '그래서 이것은 ',
    me.get_colored_name(),
    '이(가) 만약을 대비해 걸어둔 굴레이자 자물쇠였다.',
  ]);
  era.println();
  await era.printAndWait([
    '자신이 ',
    tachyon.sex,
    '에게 정말로 그만큼 중요한 존재라고 생각하지는 않지만, 만약에라도, 설령 ',
    tachyon.sex,
    '가 정말로 무너져버린다면…… 그렇다면 이 굴레가, 아니, 이 저주가',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '가 한때 사랑했던 사람으로부터 온 이 저주가, ',
    tachyon.sex,
    '를 계속해서 밀어붙여 결국 ',
    tachyon.sex,
    '의 이상에 도달하게 만들 것이다.',
  ]);
  await era.printAndWait([
    '만약 모든 것이 자신의 착각이고, ',
    tachyon.sex,
    '의 마음속에 자신이 그 정도의 비중을 차지하지 못했다면,',
  ]);
  await era.printAndWait([
    '그것대로 좋은 일이었다. ',
    tachyon.sex,
    '는 고작 모르모트 따위에게 발목을 잡히지 않고, 굳건하고 단호하게 계속해서 나아갈 테니까.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 그렇게 바라며 시험관을 들어 들이켰다. 그리고……',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 기쁘게도 ',
    tachyon.sex,
    '가 고개를 들고 평소와 다름없는 미소를 짓는 것을 보았다.',
  ]);
  await era.printAndWait([
    '이걸로 됐다. ',
    tachyon.sex,
    '는 분명, 반드시 자신의 길을 계속해서 고수해 나갈 것이다…………',
  ]);
  era.setToBottom();
  await era.printAndWait('다음 순간');
  era.setToBottom();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 무언가가 ',
    me.get_colored_name(),
    '의 입술에 닿는 것을 느꼈다.',
  ]);
  await era.printAndWait('부드럽고, 따스하고, 가냘픈 두 송이의 장미.');
  await era.printAndWait([
    tachyon.get_colored_name(),
    '이(가) ',
    me.get_colored_name(),
    '의 입술에 입을 맞췄다.',
  ]);
  era.println();
  await era.printAndWait([
    '그뿐만이 아니었다. ',
    tachyon.sex,
    '의 혀가 ',
    me.get_colored_name(),
    '의 두 입술을 가르고 들어왔다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 혀는 ',
    me.get_colored_name(),
    '의 입 안을 쉴 새 없이 휘저으며 탐했다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 혀는 미련이 남은 듯 ',
    me.get_colored_name(),
    '의 치아 사이, ',
    me.get_colored_name(),
    '의 혓바닥, ',
    me.get_colored_name(),
    '의 잇몸 안쪽을 핥고 지나갔다————하지만, 이것들은 ',
    tachyon.sex,
    '의 목표가 아니었다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 목표는————너무나도 갑작스러운 전개에 ',
    me.get_colored_name(),
    '이(가) 반응하지 못해 삼키지도 못한 채 입안에 머물러 있던 약이었다.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 그제야 상황을 파악하고 다급히 저지하려 했다.',
  ]);
  await era.printAndWait('하지만 이미 모든 것이 늦어버린 뒤였다.');
  await era.printAndWait([
    me.get_colored_name(),
    '의 입안에 있던 약은 이미 ',
    tachyon.sex,
    '에 의해 절반 이상 빼앗겨버렸다.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '에게 이유를 물을 겨를도 없이 서둘러 혀를 빼내어 ',
    tachyon.sex,
    '의 행동을 막으려 했다.',
  ]);
  await era.printAndWait([
    '하지만 인간은 힘으로는 결국 ',
    tachyon.get_uma_sex_title(),
    '를 이길 수 없는 법이다. 아무리 수많은 실험을 겪어온 ',
    me.get_colored_name(),
    '일지라도 예외는 아니었다.',
  ]);
  era.println();
  await era.printAndWait('마침내, 마치 한 세기처럼 길게 느껴졌던 입맞춤이 끝났다.');
  await era.printAndWait([
    '입술을 뗀 ',
    me.get_couple_title(),
    '은(는) 거칠게 숨을 몰아쉬었다. ',
    me.get_colored_name(),
    '은(는) 숨을 헐떡이면서도 ',
    tachyon.get_colored_name(),
    '의 구토를 도와주기 위해 달려들려 했지만…… 이내 발걸음을 멈출 수밖에 없었다.',
  ]);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '. ',
    tachyon.sex,
    '의 얼굴에 떠오른 표정, 감정은 ',
    me.get_colored_name(),
    '(으)로서는 도저히 이해할 수 없는 것이었다.',
  ]);
  await era.printAndWait('기뻐서라면, 어째서 얼굴 위로 끊임없이 눈물이 흘러내리는 것일까.');
  await era.printAndWait([
    '슬퍼서라면, 어째서 입가에는 ',
    me.get_colored_name(),
    '이(가) 단 한 번도 본 적 없는, 그야말로 완벽한 미소를 띠고 있는 것일까.',
  ]);
  if (life_marks.choco) {
    await era.printAndWait([
      '그때, ',
      me.get_colored_name(),
      '의 입안에 남아있던 약의 맛이 갑자기 변했다. 분명 마실 때는 무색무취였던 약이었는데, 지금의 맛은……',
    ]);
    era.println();
    if (era.get('exp:32:키스횟수')) {
      await tachyon.say_and_wait(
        '설마, 마지막 키스의 맛이 돼지고기 덮밥 맛일 줄이야.',
      );
    } else {
      await tachyon.say_and_wait('설마, 첫 키스의 맛이 돼지고기 덮밥 맛일 줄이야.');
    }
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 발렌타인데이 때 받았던 초콜릿을 떠올렸다.',
    ]);
    await era.printAndWait([
      '매일같이 약을 들이부어지던 자신과, 자신의 반응을 보며 즐거워하던 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait('그 아름다웠던 시간이 영원히 계속되기를 얼마나 바랐던가.');
    await era.printAndWait('그 홍차의 향기가 영원히 변하지 않기를 얼마나 원했던가.');
    await era.printAndWait('분명 결심을 굳혔을 터였는데.');
    await era.printAndWait('어째서 지금에 와서야 그런 날들이 그리워지기 시작한 것일까.');
  }
  era.println();
  await tachyon.say_and_wait([callname, ', 미안하네. 내가 자네를 속였어.']);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 여전히 그 요염한 미소를 유지한 채였지만, 얼굴의 눈물 또한 구슬처럼 계속해서 흘러내리고 있었다.',
  ]);
  era.println();
  await tachyon.say_and_wait([
    tachyon.get_colored_name(),
    '은 말이야, 사실 그렇게 대단한 ',
    tachyon.get_uma_sex_title(),
    '가 아니거든.',
  ]);
  await tachyon.say_and_wait([
    '가능성을 위해서라면 모든 것을 포기할 수 있는 그런 ',
    tachyon.get_uma_sex_title(),
    '도 아니고,',
  ]);
  await tachyon.say_and_wait([
    '꿈을 위해서 사랑하는 사람을 죽게 내버려 둘 수 있는 그런 ',
    tachyon.get_uma_sex_title(),
    '도 아니야.',
  ]);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 고개를 저으며 말했고, ',
    me.get_colored_name(),
    '은(는) 무언가 말을 하려 했지만 왠지 입이 떨어지지 않았다.',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '……아니, 이렇게 말하는 게 맞을지도 모르겠군. ',
    tachyon.sex,
    '도 한때는 그런 ',
    tachyon.get_uma_sex_title(),
    '였어.',
  ]);
  await tachyon.say_and_wait([
    '하지만 방금 말한 대로, 모르모트 군에 의해 변해버린 공주는 이미 사랑이 무엇인지 알아버렸거든. 그래서…… ',
    tachyon.sex,
    '는 더 이상 그럴 수 없게 되었어.',
  ]);
  await tachyon.say_and_wait([
    tachyon.get_colored_name(),
    '도 결국엔, 평범한 한 명의 ',
    tachyon.get_child_sex_title(),
    '일 뿐이니까.',
  ]);
  await tachyon.say_and_wait([
    '그러니까 ',
    tachyon.sex,
    '도 사랑에 빠지고, 노심초사하며, 자신이 좋아하는 사람이 자기를 좋아하는지 걱정하기도 하고……',
  ]);
  await tachyon.say_and_wait(
    '자신이 사랑하는 사람의 눈에 비치는 것이, 사실은 자기 자신이 아닐까 봐 겁내기도 하지.',
  );
  era.println();
  await era.printAndWait([
    '처음부터 끝까지 「',
    callname,
    '」이(가) 보아온 것, 매료된 것은 「',
    tachyon.get_colored_name(),
    '의 주법」이자, 「',
    tachyon.get_colored_name(),
    '의 꿈」이었다.',
  ]);
  await era.printAndWait(['그렇다면…… ', tachyon.get_colored_name(), ' 자신은?']);
  await era.printAndWait(['아니…… ', tachyon.get_colored_name(), '……은 누구지?']);
  era.println();
  await tachyon.say_and_wait('……아아, 약효가 돌기 시작했군………… 원래는 좀 더 길게 말하고 싶었는데 말이야.');
  era.println();
  await era.printAndWait([
    '눈앞의 ',
    tachyon.get_teen_sex_title(),
    '의 얼굴에서 눈물은 더 이상 흐르지 않았지만, 미소는 여전히 찬란했다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '…………뭐, 그래도 말이야. 적어도 차이지는 않았고, 다시 말해 최소한 거절당하지는 않았잖아?',
  );
  await tachyon.say_and_wait('그렇지? 그걸로 충분해…… 음, 그걸로 충분하다고. 하하하!');
  era.println();
  await era.printAndWait('하하하하하');
  await era.printAndWait([
    tachyon.get_teen_sex_title(),
    '가 유쾌하게 웃었고, ',
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '가 크게 웃는 모습에서 뇌리에 어떤 실루엣을 떠올렸다……',
  ]);
  await era.printAndWait([
    '자신이 무언가를 마시고 난 뒤, 「',
    tachyon.sex,
    '」 역시 항상 자신을 보며 하하하 웃고는 했었다.',
  ]);
  await era.printAndWait([
    '「',
    tachyon.sex,
    '」의 이름이 뭐였더라? 「',
    tachyon.sex,
    '」가 바로 눈앞의 ',
    tachyon.get_teen_sex_title(),
    '인가?',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '미안하네, ',
    callname,
    ', 그토록 오랫동안 자네를 고생시켜 놓고, 결국 모든 것을 물거품으로 만들어서…',
  ]);
  await tachyon.say_and_wait([
    '하지만 ',
    tachyon.get_colored_name(),
    '의 마지막 어리광이라고 생각해 주게나…… 다음번엔, 절대로 이렇게 귀찮은 ',
    tachyon.get_phy_sex_title(),
    '에게는 빠지지 말게나.',
  ]);
  era.println();
  await era.printAndWait([
    '「',
    tachyon.get_colored_name(),
    '」, 「',
    callname,
    '」',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 낯익으면서도 무언가 짐작이 가는 이 명칭들을 필사적으로 뇌리에 새기려 노력했다.',
  ]);
  await era.printAndWait(
    '하지만 두뇌는 마치 통돌이 세탁기에 들어간 것처럼, 기억들이 때처럼 계속해서 씻겨 내려갔다.',
  );
  await era.printAndWait([
    '눈앞의 ',
    tachyon.get_teen_sex_title(),
    '의 모습조차, 새벽녘에 사라지는 물거품처럼 허망하게 흐릿해져 갔다.',
  ]);
  era.setToBottom();
  await tachyon.say_and_wait(['잘 자게나, ', callname, '.']);
  era.setToBottom();
  await era.printAndWait([
    '이 말을 끝으로, ',
    me.get_colored_name(),
    '의 의식은 심연으로 가라앉았다.',
  ]);
  era.setToBottom();
  era.drawLine();
  await be_common(tachyon, me);
  await era.printAndWait([
    '이 이름을 듣는 순간, ',
    me.get_colored_name(),
    '의 심장이 마치 한 박자 어긋난 듯이 뛰었다.',
  ]);
  await era.printAndWait('분명 들어본 적 없는 이름일 텐데');
  await era.printAndWait(['분명 모르는 사이일 터인 이 ', tachyon.get_uma_sex_title()]);
  await era.printAndWait('하지만 어째서인지, 묘한 친숙함이 느껴졌다.');
  era.println();
  era.printButton('「우리…… 어디선가 본 적 없어?」', 1);
  await era.input();
  await tachyon.say_and_wait(
    '이런, 요즘 세상에 그런 구닥다리 헌팅 수법은 유행이 지났다고, 트레이너 군.',
  );
  await era.printAndWait([
    tachyon.sex,
    '는 ',
    me.get_colored_name(),
    '을(를) 보며 짓궂은 미소를 지었고, ',
    me.get_colored_name(),
    '은(는) 다급히 그런 게 아니라고 해명했다.',
  ]);
  era.println();
  await tachyon.say_and_wait('농담이라네…… 왠지 모르겠지만, 나도 그런 느낌이 드는군.');
  era.println();
  await era.printAndWait([
    '어째서인지, 트레이너로서의 직감이 ',
    me.get_colored_name(),
    '에게 말해주고 있었다. 이 ',
    tachyon.get_uma_sex_title(),
    '는 반드시 ',
    me.get_colored_name(),
    '을(를) 전율케 할 주법을 보여줄 것이라고.',
  ]);
  await era.printAndWait([
    '하지만 동시에, 어떤 장면이 ',
    me.get_colored_name(),
    '의 뇌리에 끊임없이 떠올랐다. 그것은 이 ',
    tachyon.get_colored_name(),
    '이라고 불리는 ',
    tachyon.get_uma_sex_title(),
    '가……',
  ]);
  await era.printAndWait('끊임없이 도시락을 요구하는 모습이었다???');
  await era.printAndWait([
    '정신을 차렸을 때, ',
    me.get_colored_name(),
    '은(는) 이미 ',
    tachyon.sex,
    '에게 계약을 제안한 뒤였다.',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '…………저기 말이야, 보통 이렇게 갑자기 계약을 제안하나? 이건 ',
    tachyon.get_uma_sex_title(),
    '의 일생이 걸린 문제라고. 좀 더 진지하게 대해야 한다고 생각하지 않나?',
  ]);
  era.printButton('「왠지 느낌이 와. 우리는 반드시 잘 맞을 거야」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 말을 내뱉고 나서야, 모든 것이 끝났다고 생각했다.',
  ]);
  await era.printAndWait(
    '대체 무슨 생각을 한 거지. 상대에게 기시감이 느껴진다고는 해도, 보통 이렇게 뜬금없이 계약을 제안하지는 않잖아!!',
  );
  await era.printAndWait(
    '이제 다 끝났다. 거절당하는 건 물론이고, 심하면 엄청나게 비웃음만 당하겠지…………',
  );
  era.println();
  await era.printAndWait([
    '아니나 다를까, ',
    tachyon.get_colored_name(),
    '이라는 이름의 ',
    tachyon.get_uma_sex_title(),
    '는 말을 듣고 멍하니 있다가, 이내 하하하 크게 웃더니……',
  ]);
  await tachyon.say_and_wait('좋네.');
  era.println();
  await era.printAndWait('거봐, 역시………………');
  await era.printAndWait('?????');
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 의문이 가득한 얼굴로 상대를 바라볼 수밖에 없었다.',
  ]);
  await era.printAndWait(['그러자 ', tachyon.sex, '가 눈가에 맺힌 웃음의 눈물을 닦으며 말했다.']);
  era.println();
  await tachyon.say_and_wait(
    '나도 왠지 모르게 그런 예감이 드는군…… 비록 이 감정의 근원이 무엇인지는 반드시 밝혀내야 하겠지만,',
  );
  await tachyon.say_and_wait(
    '자네는 나쁜 사람은 아닌 것 같아. 그뿐만 아니라, 분명 아주 재미있는 사람일 거야……',
  );
  await tachyon.say_and_wait('후후, 그러니 잘 부탁하네, 트레이너………… 아니, 모르모트 군.');
  era.println();
  await era.printAndWait('「모르모트 군」');
  await era.printAndWait([
    tachyon.sex,
    '가 갑자기 바꿔 부른 호칭은 어딘가 묘했고, 심지어 약간의 공포마저 느껴졌다……',
  ]);
  await era.printAndWait([
    '애당초 모르모트라는 호칭은 보통 좋은 의미로 쓰이지 않는 데다가, ',
    tachyon.sex,
    '의 이 연구광 같은 모습까지 더해지니…………',
  ]);
  await era.printAndWait([
    '하지만 그런 감정 외에도, ',
    me.get_colored_name(),
    '은(는) 한 줄기 친숙함을 느꼈다.',
  ]);
  era.printButton('「잘 부탁해, 아그네스…… 타키온」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_actual_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '을 알게 되었다',
  ]);
  era.set('relation:32:0', 225);
  era.set('love:32', 25);
  life_marks.reset();
  await print_event_name('톱니바퀴가 돌기 시작하다', tachyon);

  era.drawLine();
  const secretary = get_chara_talk(301),
    chairman = get_chara_talk(302);
  await print_event_name('시간 역행', tachyon);
  await era.printAndWait('마치 당연한 수순인 것처럼');
  await era.printAndWait([
    me.get_colored_name(),
    '과(와) 묘하게 친숙한 느낌을 주는 밤색 털의 ',
    tachyon.get_uma_sex_title(),
    '———',
    tachyon.get_colored_name(),
    '은 계약을 체결했다.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 계약을 등록해야 한다는 생각에 ',
    secretary.get_colored_name(),
    '와 ',
    chairman.get_colored_name(),
    '를 찾아갔다.',
  ]);
  await era.printAndWait([
    '…………어째서 ',
    secretary.sex,
    '들이 자신을 슬픈 눈으로 바라보는 것일까?',
  ]);
  await secretary.say_and_wait('이해해요. 또 그 아이의 약 때문이겠죠……');
  await era.printAndWait('무슨 소리지, 그 아이는 누구지?');
  await chairman.say_and_wait([
    '유감! 믿고 있겠네, ',
    me.actual_name,
    ' 트레이너라면 분명 금방 기억을 되찾을 것이라고!',
  ]);
  await era.printAndWait([
    '이건 또 무슨 소리인가…… ',
    secretary.sex,
    '들은 ',
    me.get_colored_name(),
    '이(가) 기억을 잃었다는 걸 알고 있는 건가? 설마 ',
    me.get_colored_name(),
    '에게 기억 상실이나 그에 준하는 사고가 일어나는 건 아주 흔한 일인 건가?',
  ]);
  era.println();
  await era.printAndWait('도무지 알 수가 없다…… 일단은 그런 걸로 치자.');
  await era.printAndWait([
    '어찌 됐든, ',
    me.get_colored_name(),
    '과(와) ',
    tachyon.get_colored_name(),
    '의 3년이 시작되었다!',
  ]);

  era.drawLine();

  callname = era.set('callname:32:0', '모르모트 군');
  await print_event_name('정지된 시계', tachyon);
  await tachyon.say_and_wait([
    '그럼…… 우선 실험 파트너로서의 호흡부터 맞춰보도록 할까. ',
    callname,
    ', 내 주법을 잘 지켜보게나, 후후.',
  ]);
  era.println();
  await era.printAndWait('역시…… 무언가 이상하다.');
  await era.printAndWait([
    tachyon.get_colored_name(),
    '의 주법, ',
    tachyon.sex,
    '가 달리는 모습을 보고 있을 때 깨달았다.',
  ]);
  await era.printAndWait('분명 빠르다. 분명 굉장히 놀라운 주법이다.');
  await era.printAndWait(['하지만 ', me.get_colored_name(), '에게는 그런 것을 생각할 겨를이 없었다.']);
  await era.printAndWait('그래, 빠르고 눈부시다. 하지만 단지 그뿐만이 아닌 것 같았다.');
  await era.printAndWait('마치…… 예전에 비슷한 주법을 본 적이 있는 것만 같았다.');
  await era.printAndWait([
    '수면 위를 비추는 광원처럼, ',
    me.get_colored_name(),
    '의 뇌리 깊은 곳을 계속해서 자극했지만,',
  ]);
  await era.printAndWait([
    '수면 위로 헤엄쳐 올라가려 노력하는 순간마다 다시 흔적도 없이 사라져 버렸다.',
  ]);
  era.println();
  await me.say_and_wait('이상해……', true);
  era.println();
  await era.printAndWait([
    '정작 ',
    me.get_colored_name(),
    '이(가) 머리를 싸매며 괴로워하고 있을 때………',
  ]);
  era.printButton('「!?」', 1);
  await era.input();
  await era.printAndWait('훈련장에서 갑자기 이변이 일어났다.');
  await era.printAndWait([
    '자신의 주법을 보여주겠다던 ',
    tachyon.get_colored_name(),
    '가 점점 더 빠르게 달리기 시작했다.',
  ]);
  await era.printAndWait('방금 그건…… 그저 준비운동이었던 건가?');
  await era.printAndWait([
    '평범한 체육복 차림의 ',
    tachyon.get_colored_name(),
    '이 훈련장 위를 가볍게 질주하고 있었다',
  ]);
  await era.printAndWait('점점 더 빠르게, 점점 더 빠르게.');
  await era.printAndWait([
    '왠지 모르게 ',
    me.get_colored_name(),
    '의 마음속에 알 수 없는 조바심이 일었다.',
  ]);
  await era.printAndWait('일종의 초조함, 그리고 절박함이었다.');
  era.println();
  await era.printAndWait([
    '저렇게 빨리 달리면, ',
    tachyon.sex,
    '의 다리는 괜찮은 건가?',
  ]);
  await era.printAndWait('……? 어째서 문제가 생길 거라고 생각하는 거지?');
  await era.printAndWait(['왜냐하면, ', tachyon.sex, '의 다리는……']);
  await era.printAndWait([tachyon.sex, '의 다리는 분명…… 그렇게나 연약한데.']);
  await era.printAndWait(['어째서 자신이 ', tachyon.sex, '의 다리가 연약하다는 걸 알고 있는 거지?']);
  era.println();
  await era.printAndWait('모르겠다. 하지만, 알고 싶었다.');
  await era.printAndWait([
    '진상을 밝히고 싶다는 절박함이 ',
    me.get_colored_name(),
    '(으)로 하여금 끊임없이 사고하게 만들었다.',
  ]);
  await era.printAndWait([
    '마치 ',
    me.get_colored_name(),
    '의 사고 속도에 맞추기라도 하듯',
  ]);
  await era.printAndWait([tachyon.get_colored_name(), '역시 계속해서 가속했다.']);
  await era.printAndWait(['마침내…… ', me.get_colored_name(), '의 인지적 끝자락에서']);
  await era.printAndWait('뇌리 깊숙이 숨겨져 있던, 가장 중요한 것이 보였다.');
  await era.printAndWait([tachyon.get_uma_sex_title(), '의 한계 속도']);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 알고 있는 ',
    tachyon.get_uma_sex_title(),
    '의 한계.',
  ]);
  await era.printAndWait(['————', tachyon.get_colored_name(), '의 한계 속도']);
  era.println();
  await era.printAndWait([
    '눈앞의 ',
    tachyon.get_colored_name(),
    '와 뇌리 속 그 잡힐 듯 잡히지 않던 광원이 서서히 하나로 겹쳐졌다.',
  ]);
  await era.printAndWait([
    '그리하여 ',
    me.get_colored_name(),
    '은(는) 마지막으로 한 번 더 수면 위를 향해 손을 뻗었다.',
  ]);
  await era.printAndWait('————————닿았다');
  await era.printAndWait('————————기억났다');
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 바로 ',
    me.get_colored_actual_name(),
    '의 담당 ',
    tachyon.get_uma_sex_title(),
    '였다.',
  ]);
  await era.printAndWait('만났을 때의 일, 레이스에서의 일, 그리고……');
  era.println();
  await era.printAndWait('그리고……?');
  await era.printAndWait('모르겠다.');
  await era.printAndWait('잊어버렸다.');
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '는 자신의 담당 ',
    tachyon.get_uma_sex_title(),
  ]);
  await era.printAndWait([
    me.get_colored_actual_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '의 모르모트 군.',
  ]);
  await era.printAndWait('여기까지는 틀린 게 없었다.');
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), '이 레이스에서 보여준 모습들']);
  await era.printAndWait([tachyon.sex, '가 달릴 때의 세세한 모든 것을 자신은 하나하나 기억하고 있었다.']);
  await era.printAndWait('하지만……');
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), '이 무엇을 좋아하는지']);
  await era.printAndWait([tachyon.get_colored_name(), '의 생활 습관']);
  await era.printAndWait([tachyon.get_colored_name(), '의 흥미']);
  await era.printAndWait([tachyon.get_colored_name(), '의 평소 옷차림']);
  await era.printAndWait(
    '뇌리에 왠지 모르게 남아있는, 아마도 레이스 관리와 관련이 있어 남겨진 식습관 이외에는,',
  );
  await era.printAndWait('다른 모든 것들이 마치 한 번도 접해본 적 없는 것처럼 깨끗했다.');
  era.println();
  await era.printAndWait('부자연스러웠다.');
  await era.printAndWait('부자연스럽다는 느낌밖에 들지 않았다.');
  await era.printAndWait('이토록 오랫동안 알고 지냈고, 그 수많은 접촉과 교류가 있었는데.');
  await era.printAndWait([tachyon.sex, '의 레이스와 주법에 대해서는 막힘없이 술술 말할 수 있는데.']);
  await era.printAndWait([
    '그럼에도 여전히 ',
    tachyon.get_colored_name(),
    '이라는 이름의 이 ',
    tachyon.get_uma_sex_title(),
    '에 대해서는 아무것도 모르는 것만 같았다.',
  ]);
  era.println();
  await tachyon.say_and_wait(['후우…… 자, 모르모트 군, 어떤가?']);
  era.printButton('「멋지게 달렸어!」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 기억 속에 몇 번이고 반복해서 대답했던 그 답변을 무의식적으로 내뱉었다.',
  ]);
  await era.printAndWait('무언가 위화감이 느껴졌다.');
  await era.printAndWait('대체 무슨 일이 일어나고 있는 건지 이해할 수 없었다.');
  await era.printAndWait('하지만……');
  era.println();
  await era.printAndWait('그 기억들이 떠오른 찰나의 순간');
  await era.printAndWait('마음속 깊은 곳에서 어떤 한 마디를 분명히 들었다고 확신했다.');
  era.println();
  era.printButton(`「이번에는, 더 이상 ${tachyon.sex}의 마음을 저버리지 마」`, 1);
  await era.input();
  await era.printAndWait('과연 무슨 뜻일까…… 곰곰이 생각해 보기로 했다.');
};