const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, event_object) => {
  if (event_object?.arg !== 143 + 1) {
    return;
  }
  await print_event_name('종국', kitaru);
  await era.printAndWait([
    kitaru.get_colored_name(),
    '와의 괴력난신으로 가득했던 3년도 드디어 끝이 나려 하고 있다. 이제 슬슬 새로운 담당 우마무스메를 물색할 계획을 세워야 할 때다.',
  ]);
  await era.printAndWait(['하지만 그전에, 아직 정리해야 할 일들이 남았다.']);
  await era.printAndWait([
    '지난 3년 동안 사무실과 ',
    me.get_colored_name(),
    '의 집에 쌓여있던, ',
    kitaru.get_colored_name(),
    '가 방류한 뒤에도 여전히 남아있던 행운 아이템들을 원래 주인에게 돌려줄 차례다. 1층에 계신 ',
    kitaru.get_colored_name(),
    '의 어머니께 가볍게 인사를 드린 뒤, ',
    me.get_colored_name(),
    '은(는) 후쿠키타루네 집 다락방으로 발을 들였다.',
  ]);
  await kitaru.say_and_wait(['아! ', callname, ', 드디어 오셨군요!']);
  await era.printAndWait([
    '나무 바닥 위에 가부좌를 틀고 앉아 있는 ',
    kitaru.get_colored_name(),
    '는 다락방을 가득 채운 누런 고서들과 온갖 골동품에 둘러싸여 있었다.',
  ]);
  await era.printAndWait([
    '그 사이를 익숙하게 드나드는 ',
    kitaru.sex,
    '의 모습을 보고 있자니, 오히려 이곳이야말로 ',
    kitaru.sex,
    '의 진정한 영역이라는 생각이 들었다.',
  ]);
  await kitaru.say_and_wait('이 물건들은 여기에 두면 돼요!');
  await era.printAndWait([
    kitaru.sex,
    '는 선별된 물건들을 빈 선반 위에 차곡차곡 정리하기 시작했다. 옆에 놓인 문어 얼굴 조각상이나 형광빛을 내는 부등변다면체 같은 기묘한 물건들 사이에 자연스럽게 섞여 들어갔다.',
  ]);
  await me.say_and_wait('물건이 정말 많네.');
  await kitaru.say_and_wait('네에, 제가 직접 모은 것만 있는 게 아니거든요.');
  await kitaru.say_and_wait(
    '참배객들이 액막이를 위해 신사에 맡겨두고 찾아가지 않은 물건들도 결국 이곳으로 흘러 들어온답니다.',
  );
  await kitaru.say_and_wait('그래서 잘 찾아보면 지난 세기의 물건이 나올지도 몰라요!');
  await era.printAndWait([
    kitaru.get_colored_name(),
    '의 수집벽은 아무래도 가족 내력인 모양이다.',
  ]);
  await era.printAndWait([
    '정리가 계속되는 동안, 방 안에는 ',
    kitaru.get_colored_name(),
    '의 발소리만이 고요하게 울려 퍼졌다.',
  ]);
  await kitaru.say_and_wait('그나저나, 운명의 사람과의 계약도 이제 끝이네요.');
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 옆에 놓인 고서의 글자를 해독하며 시간을 때우려던 찰나, 선반 너머에서 ',
    kitaru.get_colored_name(),
    '의 목소리가 들려왔다. 한참이 지나서야 ',
    kitaru.sex,
    '는 다음 말을 이어갔다.',
  ]);
  await kitaru.say_and_wait('저기, 운명의 사람은 이제부터 어떻게 하실 건가요?');
  era.printButton('「계속 트레이너로서 일해야지.」', 1);
  era.printButton('「새로운 담당을 모집할 계획이야.」', 2);
  if ((await era.input()) === 1) {
    await kitaru.say_and_wait('으음…… 전혀 의외가 아니네요.');
  } else {
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 선반 틈새로 ',
      kitaru.get_colored_name(),
      '의 귀가 파르르 떨리는 것을 보았다.',
    ]);
  }
  await me.say_and_wait('그럼 후쿠키타루는?');
  await kitaru.say_and_wait('저는 아마…… 가업인 신사를 물려받게 될까요?');
  await kitaru.say_and_wait('지난 3년 동안 신사의 참배객이 예전보다 훨씬 늘어났으니까요.');
  await kitaru.say_and_wait('아니면 대학에 갈지도 모르겠네요.');
  await kitaru.say_and_wait(
    '미스캐토닉 대학의 민속학부에 지원하거나, 트레센 학원 대학부에 들어가는 것도 그리 어렵지는 않을 거예요.',
  );
  await era.printAndWait('혼잣말하듯 앞날을 점쳐보는 사이, 꼬리가 가볍게 흔들거렸다.');
  await era.printAndWait([
    kitaru.get_colored_name(),
    '의 표정은 평소보다 훨씬 진지해졌고, 특유의 장난기 섞인 모습은 찾아볼 수 없었다.',
  ]);
  await kitaru.say_and_wait('하아……');
  await kitaru.say_and_wait('뭐, 일단은 전당 입성 결과가 나온 뒤에 생각하도록 하죠!');
  await era.printAndWait([
    kitaru.sex,
    '는 선반 위에서 수정구슬 하나를 꺼내 천으로 정성스럽게 감쌌다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 이것이 ',
    kitaru.sex,
    '가 데뷔전 이후 한참을 졸라서 ',
    me.get_colored_name(),
    '이(가) 사주었던 보상이었음을 기억해냈다.',
  ]);
  await kitaru.say_and_wait('저의 운명의 사람, 이건 부디 사무실에 놓아주세요.');
  await kitaru.say_and_wait([
    '졸업하고 제가 ',
    callname,
    ' 곁에 없더라도, 분명 이 수정구가 행운을 가져다줄 거예요!',
  ]);
  await era.printAndWait([
    '그 뒤로 한동안 ',
    kitaru.get_colored_name(),
    '가 들려주는 물건들의 내력에 귀를 기울였다.',
  ]);
  await era.printAndWait(['어쩌면 이렇게 느긋하게 전당 입성 결과를 기다리는 것도 나쁘지 않을 것 같다.']);
};