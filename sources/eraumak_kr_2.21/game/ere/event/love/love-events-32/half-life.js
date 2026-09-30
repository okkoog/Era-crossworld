const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (tachyon, me, callname) => {
  await print_event_name('타키온', tachyon);
  await tachyon.say_and_wait([callname, ', 내 이름을 한 번 불러주겠나?']);
  era.println();

  await era.printAndWait(['이름?']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 궁금하다는 듯 ',
    tachyon.get_colored_name(),
    '을 바라보았다.',
  ]);
  await era.printAndWait([
    '오늘 트레이닝실에 들어오자마자 ',
    tachyon.get_colored_name(),
    '에게 억지로 소파에 눕혀졌다.',
  ]);
  await era.printAndWait([
    '이어서 ',
    tachyon.sex,
    '는 훈련 계획을 쓰는 작은 화이트보드를 꺼내 들고는, 마치 선생님이 수업을 시작하려는 듯한 모습이었다. 이건 또 무슨 놀이인지 알 수가 없었다.',
  ]);
  era.println();

  await tachyon.say_and_wait(['자, 어서 어서, 불러보게.']);

  era.printButton('「아그네스 타키온」', 1);
  await era.input();

  await era.printAndWait([
    tachyon.get_colored_name(),
    ', 자신에게 있어 유일무이한 담당 우마무스메의 이름.',
  ]);
  await era.printAndWait([
    '이름을 듣자 ',
    tachyon.get_colored_name(),
    '은 눈을 가늘게 뜨며, 무척 만족스러운 듯한 표정을 지었다.',
  ]);
  era.println();

  await tachyon.say_and_wait(['음…… 좋군.']);
  await tachyon.say_and_wait(['그럼…… 타키온이 무슨 뜻인지 알고 있나?']);
  era.println();

  await era.printAndWait(['타키온?']);

  era.printButton('「모르겠는데……」', 1);
  era.printButton('「그거…… 초광속 입자 아니야?」', 2);

  if ((await era.input()) === 1) {
    await tachyon.say_and_wait(
      '으음…… 내 모르모트라면 적어도 그 정도는 가슴속에 새겨두어야 하지 않겠나.',
    );
  } else {
    await tachyon.say_and_wait('정답이네. 합격점을 주도록 하지.');
  }

  await tachyon.say_and_wait([
    '타키온이란, 빛보다 빠른 속도로 허수의 시간 속을 항행하는 입자라네.',
  ]);
  await tachyon.say_and_wait([
    '특수 상대성 이론에서 타키온은 공간꼴의 4차원 운동량과 허수의 정지 질량을 가지며, 일반적인 물질과의 상호작용이 뚜렷하지 않아 현재로서는 관측할 수 없는 가상 입자라네. 전자기 복사 메커니즘에 근거하여 가정해 본다면……',
  ]);

  era.printButton('「잠, 잠깐만!」', 1);
  await era.input();

  await tachyon.say_and_wait(['정숙하게, ', callname, '. 내 말을 끝까지 듣게나.']);
  era.println();

  await era.printAndWait([
    '화이트보드에 적히는 온갖 공식들에 머리가 어질어질해진 ',
    me.get_colored_name(),
    '은(는) 서둘러 설명을 멈추고 소화할 시간을 벌려 했다.',
  ]);
  await era.printAndWait([
    '하지만 ',
    tachyon.get_colored_name(),
    '은 화이트보드를 툭툭 치며, 아랑곳하지 않고 설명을 이어갔다.',
  ]);
  era.println();

  await tachyon.say_and_wait([
    '그리고…… 시간성과 공간성의 차이 때문에 타키온의 존재에는 두 가지 넘을 수 없는 장벽이 존재한다네.',
  ]);
  era.println();

  await era.printAndWait(['그 말을 내뱉고 ', tachyon.get_colored_name(), '은 말을 멈추었다.']);
  await era.printAndWait([
    '착한 학생이라면 선생님이 대놓고 뜸을 들일 때 적절한 질문을 던져야 하는 법이다.',
  ]);
  await era.printAndWait([
    '어느샌가 ',
    me.get_colored_name(),
    '도 이 상황에 몰입하기 시작했다.',
  ]);

  era.printButton('「장벽?」', 1);
  await era.input();

  await tachyon.say_and_wait(['그렇다네…… 만약 타키온이 실제로 존재한다면 마주하게 될 제약이지.']);
  await tachyon.say_and_wait([
    '간단히 말하자면…… 『광속 이하의 물질과는 접촉할 수 없다』는 것과, 『광속 이하로 속도를 줄일 수 없다』는 것이야. 우선 첫 번째부터 설명하자면, 접촉할 수 없는 이유는 인과율 위배에 따른……',
  ]);
  era.println();

  await era.printAndWait([tachyon.get_colored_name(), '의 설명이 다시 시작되었다.']);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '의 머릿속에는 ',
    tachyon.sex,
    '의 지식으로 뇌를 강간당하는 듯한 난해한 해석들이 더 이상 들어오지 않았다.',
  ]);
  era.println();

  await era.printAndWait([
    tachyon.get_colored_name(),
    '과 함께 지내온 탓인지, 타키온이 초광속 입자를 뜻한다는 것을 알면서도 자꾸만 곁에 있는 ',
    tachyon.get_colored_name(),
    '을 떠올리게 되었다.',
  ]);
  await era.printAndWait([
    '점차 ',
    me.get_colored_name(),
    '의 머릿속에 어떤 장면 하나가 떠올랐다.',
  ]);
  era.println();

  await era.printAndWait([
    '광속 너머의 어느 세계, 광속 이하의 물질은 도달할 수 없는 공간 속.',
  ]);
  await era.printAndWait([
    '시간조차 너무나 느리다고 무시당하는 그 세계 속에서, 유일하게 존재하는 ',
    { color: tachyon.color, content: '타키온'},
    '.',
  ]);
  await era.printAndWait([
    '광속 이하의 세계와는 상호작용할 수 없고, 오직 초광속의 형태로만 존재할 수 있는 ',
    { color: tachyon.color, content: '타키온'},
    '.',
  ]);
  await era.printAndWait(['절대적인 속도, 그리고 절대적인 고독.']);
  era.println();

  await tachyon.say_and_wait(['…………']);
  era.println();

  await era.printAndWait([
    '어느샌가 ',
    me.get_colored_name(),
    '은(는) 배경음악처럼 깔리던 설명 소리가 멈췄다는 것을 깨달았다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 정신을 차려보니, ',
    tachyon.get_colored_name(),
    '이 자신을 뚫어지게 쳐다보고 있었다. 언제부터 그러고 있었는지 알 수 없었다.',
  ]);
  era.println();

  await tachyon.say_and_wait([callname, '? 무슨 생각을 하고 있나?']);

  era.printButton('「아무것도 아니야……」', 1);
  era.printButton('「그냥, 그렇게 생각하니 타키온이 너무 외로울 것 같아서……」', 2);
  await era.input();

  await era.printAndWait([
    tachyon.get_colored_name(),
    '의 질문에 ',
    me.get_colored_name(),
    '은(는) 자신의 생각을 솔직하게 털어놓았다.',
  ]);
  await era.printAndWait([
    '어떤 의미에서 예전의 ',
    tachyon.get_colored_name(),
    '도 조금은 그런 면이 있었다.',
  ]);
  await era.printAndWait([
    '지나치게 뛰어난 재능 탓에, 주변 사람들은 ',
    tachyon.sex,
    '와 같은 세계를 바라볼 수 없었다.',
  ]);
  await era.printAndWait([
    '세상으로부터 고립되어, 눈앞의 목표만을 쫓던 ',
    { color: tachyon.color, content: '타키온'},
    '.',
  ]);
  await era.printAndWait([
    '하지만…… 그런 ',
    tachyon.get_colored_name(),
    '조차 결국 타인과 접촉하고, 영향을 주고받을 수 있었다.',
  ]);
  await era.printAndWait([
    '만약 물리적인 공간마저 격절되어 버린다면, ',
    { color: tachyon.color, content: '타키온'},
    '은……',
  ]);
  await era.printAndWait([
    '아니, 지금 이야기하는 건 초광속 입자이지 ',
    tachyon.get_colored_name(),
    '이 아니지 않은가.',
  ]);
  await era.printAndWait([
    '이렇게 엉뚱한 소리를 하면 ',
    tachyon.get_colored_name(),
    '이 화를 내겠지?',
  ]);
  era.println();

  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '이 장난스럽게 나무라며 생각을 정정해 줄 것을 기다렸다.',
  ]);
  await era.printAndWait(['하지만……']);
  era.println();

  await tachyon.say_and_wait(['호오? ', callname, ', 자네는 그렇게 생각하는가?']);
  era.println();

  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 평온하게 말하며 화이트보드를 밀어두고, 소파에 앉아 있는 ',
    me.get_colored_name(),
    '에게 다가왔다.',
  ]);
  await era.printAndWait([
    '탁한 붉은 눈동자가 ',
    me.get_colored_name(),
    '을(를) 응시했다. 여느 때처럼 ',
    tachyon.sex,
    '이 대체 무슨 생각을 하는지 읽어낼 수 없었다.',
  ]);
  era.println();

  await tachyon.say_and_wait([
    '하지만, 만약 그것이 한계를 넘어서기 위한 대가라면 어떡하겠나? 만약…… 가정이긴 하지만, 현재의 모든 것을 잃고 절대적인 고독이 되는 것이 한계를 넘기 위해 지불해야 할 대가라면…… 자네는 그것을 받아들일 수 있겠나, ',
    callname,
    '?',
  ]);
  era.println();

  await era.printAndWait(['기묘했다.']);
  await era.printAndWait(['참으로 이상했다.']);
  await era.printAndWait([
    tachyon.get_colored_name(),
    '과의 거리는 가까워지지도, 멀어지지도 않았다.',
  ]);
  await era.printAndWait([
    '하지만 눈앞의 ',
    tachyon.get_colored_name(),
    '은 갑자기 어떤 착각을 불러일으켰다.',
  ]);
  await era.printAndWait(['가까우면서도 먼 듯한 느낌.']);
  await era.printAndWait(['손을 뻗으면 닿을 것 같으면서도.']);
  await era.printAndWait(['다음 순간이면 속세를 떠나 사라져 버릴 것만 같은.']);
  await era.printAndWait(['하지만 그런 생각보다 지금 중요한 것은 대답을 하는 것이었다.']);
  await era.printAndWait(['신중하게 생각해야 한다……']);
  era.println();

  await era.printAndWait([me.get_colored_name(), '은(는) 생각했다……']);

  era.printButton('「괜찮아」(관계 진전)', 1);
  era.printButton('「안 돼」(관계 유지)', 2);

  if ((await era.input()) === 1) {
    await era.printAndWait(['만약 한계를 넘는 대가가 정녕 그러하다면……']);
    await era.printAndWait([
      '그렇다면 그 실험을 지원하는 사람으로서 해야 할 일은 ',
      tachyon.sex,
      '의 결정을 긍정하고, 목표를 향해 나아가는 ',
      tachyon.sex,
      '를 배웅하는 것뿐이리라.',
    ]);
    await era.printAndWait(['그것이 「모르모트」로서 자신의 책임이었다.']);
    await era.printAndWait([
      '그러므로 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 방식을 존중하기로 했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그렇게 ',
      tachyon.get_colored_name(),
      '에게 설명했다.',
    ]);
    era.println();

    await tachyon.say_and_wait(['…………그런가. 그것이 자네의 선택인가?']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 여전히 속마음을 드러내지 않았고, 말투 또한 평소처럼 덤덤했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 혹시 자신이 말실수를 한 것은 아닐까 걱정되기 시작했다.',
    ]);
    await era.printAndWait(['하지만 선택은 이미 내려졌다.']);
    era.println();

    era.printButton('「타키온의 모르모트라면, 응당 그래야 하니까……」', 1);
    era.printButton('「……하지만, 반드시 타키온을 따라잡고 말겠어!」', 1);
    await era.input();

    await era.printAndWait([
      '자신은 ',
      tachyon.get_colored_name(),
      '의 성장을 가로막아서는 안 된다.',
    ]);
    await era.printAndWait([
      '오히려 그 반대로, 자신이 노력해서 ',
      tachyon.get_colored_name(),
      '을 따라잡아야만 한다.',
    ]);
    await era.printAndWait(['광속을 넘는 것이 영원한 고독을 의미한다면.']);
    await era.printAndWait([
      '자신이 해야 할 일은 ',
      tachyon.sex,
      '가 더 이상 외롭지 않게 만드는 것이다.',
    ]);
    await era.printAndWait([
      '설령 자신 한 사람뿐이라 할지라도, 온 힘을 다해 ',
      tachyon.sex,
      '의 곁을 지키겠노라고.',
    ]);
    await era.printAndWait([
      '이것이 ',
      tachyon.get_colored_name(),
      '의 「모르모트」이자…… ',
      tachyon.get_colored_name(),
      '의 연인으로서 내린 진심 어린 소망이었다.',
    ]);
    era.println();

    await tachyon.say_and_wait(['…………']);
    await tachyon.say_and_wait(['그러고 보니, 아직 말하지 않았군.']);
    await tachyon.say_and_wait(['나의 선택을———']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 표정은 공포스러울 정도로 평온했다.',
    ]);
    await era.printAndWait(['마치 폭풍전야의 바다처럼 고요했다.']);
    era.println();

    await tachyon.say_and_wait(['나는 그 선을 넘어, 광속을 넘고, 한계를 초월할 걸세———']);
    era.println();

    await era.printAndWait(['아아, 역시 그랬던가.']);
    await era.printAndWait([
      '이것이 바로 ',
      me.get_colored_name(),
      '이(가) 동경해 마지않는 ',
      tachyon.get_uma_sex_title(),
      '이 내놓을 법한 대답이었다.',
    ]);
    await era.printAndWait(['의외라기보다는 오히려 당연한 결과였다.']);
    await era.printAndWait(['하지만…… 가슴 한구석에서 느껴지는 이 묘한 상실감은 무엇일까?']);
    await era.printAndWait([
      '그러나 ',
      tachyon.get_colored_name(),
      '의 말은 아직 끝나지 않았다.',
    ]);
    era.println();

    await tachyon.say_and_wait(['————자네와 함께.']);
    era.println();

    await era.printAndWait(['순간.']);
    await era.printAndWait(['폭풍전야 같던 고요함이 뒤집혔다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 방금 전 자신의 비유가 틀렸음을 깨달았다.',
    ]);
    await era.printAndWait(['폭풍 전의 고요함이 아니라—— 심해였다.']);
    await era.printAndWait(['폭풍이 몰아치려는 것이 아니라, 이미 그 심연 속에 깊이 빠져버린 것이었다.']);
    era.println();

    await tachyon.say_and_wait(['둘이서 함께 한계를 넘어——— 타키온이 되는 거라네.']);
    era.println();

    await era.printAndWait([
      '자신도 모르게 ',
      me.get_colored_name(),
      '은(는) 고개를 끄덕이며 약속했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 빛나는 ',
      tachyon.sex,
      '의 두 눈을 바라보았다.',
    ]);
    await era.printAndWait([
      '마치 심해에 잘못 들어온 작은 물고기가, 심해어에게 잡아먹히기 직전 마지막으로 본 미끼의 빛처럼.',
    ]);

    era.drawLine();

    await tachyon.print_and_wait(['그녀는 ', me.sex, '의 눈을 응시했다.']);
    await tachyon.print_and_wait(['그 안에는 알 듯 말 듯한 망설임이 서려 있었다.']);
    await tachyon.print_and_wait(['가슴속에는 절반의 노여움과 절반의 다행스러움이 교차했다.']);
    await tachyon.print_and_wait(['어째서 ', me.sex, '는 이해하지 못하는 걸까?']);
    await tachyon.print_and_wait(['아니, 다행히도 ', me.sex, '는 여전히 이해하지 못했다.']);
    era.println();

    await tachyon.print_and_wait([me.sex, '「도」 있는 것이 아니다.']);
    await tachyon.print_and_wait([me.sex, '「만」 있으면 되는 것이지.']);
    await tachyon.print_and_wait(['고독 따위는 두렵지 않다.']);
    await tachyon.print_and_wait([
      '내가 두려운 것은 오직 내 곁에 더 이상 ',
      me.sex,
      '의 모습이 보이지 않는 것뿐.',
    ]);
    await tachyon.print_and_wait(['그러니까……']);
    era.println();

    await tachyon.print_and_wait(['한계의 저편.']);
    await tachyon.print_and_wait(['그 누구도 도달할 수 없는, 초광속의 끝.']);
    await tachyon.print_and_wait(['그리고……']);
    await tachyon.print_and_wait([
      '우리 두 사람 외에는 그 누구도 방해할 수 없는 세계.',
    ]);
    era.println();

    await tachyon.say_and_wait(
      ['설령 초광속의 저편이라 해도, 육체와 정신이 모두 타버려 재가 된다 해도……'],
      true,
    );
    await tachyon.say_and_wait('영원히, 영원토록 내 곁에 있어주게나.', true);
    await tachyon.say_and_wait(['나의 사랑스러운 ', callname, '❤️'], true);

    await sys_love_uma_in_event(32);
  } else {
    await era.printAndWait([
      '만약 ',
      tachyon.get_colored_name(),
      '을 고독한 영원 속에 홀로 남겨두어야 한다면, 그것만은 절대로 허락할 수 없었다.',
    ]);
    await era.printAndWait([
      '하지만…… 천칭의 반대편에 놓인 것이 ',
      tachyon.get_colored_name(),
      '의 꿈이라면 어떡해야 할까?',
    ]);
    await era.printAndWait([
      '아니, 그런 영원이야말로 ',
      tachyon.get_colored_name(),
      '이 갈망해오던 결실이 아닌가?',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '는 분명 모든 것을 알고, 그 토대 위에서 한계를 쫓는다는 목표를 세웠을 터였다.',
    ]);
    await era.printAndWait([
      '그렇다면 ',
      tachyon.sex,
      '의 ',
      callname,
      '로서, ',
      tachyon.sex,
      '의 연인으로서……',
    ]);
    await era.printAndWait(['자신의 욕심 때문에 ', tachyon.sex, '의 꿈을 가로막아도 되는 것일까?']);
    era.println();

    await era.printAndWait(['그리하여……']);

    era.printButton('「거절한다」', 1);
    await era.input();

    await era.printAndWait([
      '모르모트로서의 책임은 다했을지도 모른다. 그렇다면 ',
      tachyon.get_colored_name(),
      '의 연인으로서 다해야 할 책임은 무엇인가?',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '와 이인삼각으로 함께 전진하며 온갖 일을 겪은 끝에, 겨우 결실을 맺은 이 사랑을 간직한 나는……',
    ]);
    await era.printAndWait([
      '그런 결말을 용납할 수 있는가? ',
      tachyon.get_colored_name(),
      '과 영영 이별하게 되는 상황을 받아들일 수 있는가?',
    ]);
    await era.printAndWait(['답은 당연히…… 「아니오」였다.']);

    era.printButton('「설령 이기적이라 해도.」', 1);
    era.printButton('「타키온이 영원히 내 곁에 있어줬으면 좋겠어.」', 2);
    await era.input();

    await era.printAndWait(['상대방이 떠나가는 것이 두렵다.']);
    await era.printAndWait(['단지 그뿐인 이기적인 이유였다.']);
    await era.printAndWait(['이미 지금의 당신은 예전으로 돌아갈 수 없게 되었다.']);
    await era.printAndWait(['밤에 잠들기 전, 누군가를 위해 준비하는 도시락이 없는 삶.']);
    await era.printAndWait(['아침에 연구실에 도착했을 때, 실험에 몰두하는 그 뒷모습을 볼 수 없는 삶.']);
    await era.printAndWait(['점심때면 누군가가 사랑스럽고 가련하게 밥을 보채는 모습을 볼 수 없는 삶.']);
    await era.printAndWait(['오후 훈련 때 그 찬란한 달리기 모습을 볼 수 없는 삶.']);
    await era.printAndWait([
      '지금의 당신은, 이미 예전의 그 지루했던 나날로 되돌아갈 수 없었다.',
    ]);
    await era.printAndWait(['그러니까, 그러니 제발.']);

    era.printButton('「가능하다면…… 타키온과 함께 초광속의 저편에 도달하고 싶어.」', 1);
    era.printButton('「하지만…… 그럴 방법이 없다면……」', 2);
    await era.input();

    await era.printAndWait(['스스로 그 선을 넘지 못할까 봐 두렵기에.']);
    await era.printAndWait([tachyon.sex, '의 손을 붙잡고 싶었다.']);
    await era.printAndWait([tachyon.sex, '이 광속 이하의 세계에 머물러 주기를 바랐다.']);
    await era.printAndWait(['오직 나를 위해서 남아달라고.']);
    era.println();

    await tachyon.say_and_wait(['…………']);
    await tachyon.say_and_wait(['…………훗, 후후.']);
    era.println();

    await era.printAndWait(['평온한 미소였다.']);
    await era.printAndWait(['의중을 알 수 없는 웃음이었다.']);
    await era.printAndWait(['어딘가 모르게 두려움마저 느껴졌다.']);
    await era.printAndWait([tachyon.sex, '의 대답은, 과연……']);
    era.println();

    await tachyon.say_and_wait(['이것이…… 자네의 대답인가?']);
    await tachyon.say_and_wait(['……자네는 역시, 항상 내 예상을 뛰어넘는군……']);
    era.println();

    await era.printAndWait([tachyon.sex, '는 대체 무슨 생각을 하고 있는 걸까?']);
    await era.printAndWait([
      '지금 이 순간 ',
      tachyon.sex,
      '의 미소는 조소일까, 아니면 비웃음일까. 그것도 아니라면 자신의 기대를 깨뜨린 것에 대한 기쁨의 미소일까.',
    ]);
    era.println();

    await tachyon.say_and_wait(['그렇다면…… 나의 사랑스러운 ', callname, '을 위해서라도.']);
    await tachyon.say_and_wait(['영원히, 영원토록, 이곳에 남아 자네 곁을 지키도록 하지.']);

    era.drawLine();

    await tachyon.print_and_wait(['가슴속에 소용돌이치는 이 감정은 말로 다 표현하기 어렵군.']);
    await tachyon.print_and_wait([
      '하지만 분명한 건, 환희라는 감정이 훨씬 더 우세하다는 것이겠지.',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '언제나 내 예상을 뛰어넘는 이가 이번에도 다시금, 좋은 의미로 나의 기대를 충족시켜 주었네.',
    ]);
    await tachyon.print_and_wait([
      '만약 ',
      me.sex,
      '라면 분명 타키온의 꿈을 위해서라면 자신은 기꺼이 물러나겠다느니 하는 어리석은 소리를 할 줄 알았는데 말이야.',
    ]);
    await tachyon.print_and_wait(['정말이지……']);
    await tachyon.print_and_wait([
      '그런 가능성을 떠올릴 때마다 ',
      tachyon.get_colored_name(),
      '은 저도 모르게 기운이 빠지곤 했다.',
    ]);
    await tachyon.print_and_wait(['어째서 ', me.sex, '는 항상 모르는 걸까?']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 욕심이 아주 많은 ',
      tachyon.get_uma_sex_title(),
      '다.',
    ]);
    await tachyon.print_and_wait(['둘 중 하나를 선택하라고? 아니, ', tachyon.sex, '는 둘 다 가질 것이다.']);
    await tachyon.print_and_wait(['만약 ', me.sex, '가 정말로 그런 소리를 했다면.']);
    await tachyon.print_and_wait([
      '설령 강압적인 방법을 써서라도, 누군가의 곁에서 ',
      me.sex,
      '를 빼앗아왔을 것이다.',
    ]);
    await tachyon.print_and_wait([
      tachyon.sex,
      '는 제멋대로 굴어서라도 ',
      me.sex,
      '를 그 초광속 너머, 단둘만이 지낼 수 있는 세계로 납치했을 것이다.',
    ]);
    await tachyon.print_and_wait(['하지만……']);
    era.println();

    await tachyon.print_and_wait(['만약 이 사람이.']);
    await tachyon.print_and_wait(['사랑스러울 정도로 순진한 ', callname, '이 설마……']);
    await tachyon.print_and_wait(['드물게도 자신의 탐욕을, 욕망을 드러내다니.']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '을 곁에 두고 싶다는 욕망.',
    ]);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '에게 꿈을 포기하라고 강요하는 욕망.',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '이미 ',
      me.sex,
      ' 없이 살 수 없게 된 나는, 그저 기쁜 마음으로 그 처분에 따를 수밖에 없지 않겠지.',
    ]);
    await tachyon.print_and_wait([
      '지배하고 지배받는 관계는 대체 언제부터 뒤바뀐 것일까?',
    ]);
    await tachyon.print_and_wait(['아니, 뒤바뀐 것이 아니야……']);
    await tachyon.print_and_wait(['속박하는 동시에 나 또한 그에게 속박당하고 있는 것이니.']);
    await tachyon.print_and_wait(['아아, 이것이야말로 정녕 사랑이라는 감정이겠지.']);
    await tachyon.print_and_wait([
      callname,
      '은 ',
      tachyon.get_colored_name(),
      '을 사랑하고, ',
      tachyon.get_colored_name(),
      '또한 ',
      callname,
      '을 사랑한다.',
    ]);
    await tachyon.print_and_wait([
      '초광속 이상의 세계 같은 건 없어도 좋다. 한계 너머에 아무것도 없다 해도 상관없다……',
    ]);
    await tachyon.print_and_wait([
      '그저 서로를 깊이 사랑하는 평범한 인간과 평범한 ',
      tachyon.get_uma_sex_title(),
      ', 그것만으로도 충분하니까.',
    ]);
    era.set('cflag:32:호감거절', 99);
  }
};