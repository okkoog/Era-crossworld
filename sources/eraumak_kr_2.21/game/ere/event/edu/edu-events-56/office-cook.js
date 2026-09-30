const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  if (event_object?.arg !== 'miso_fortune') {
    return;
  }
  await print_event_name('된장국 점괘', kitaru);
  await kitaru.say_and_wait(['그럼! ', callname, '! 오늘은 된장국 점괘를 해봐요!']);
  await era.printAndWait([
    '흥겨워하는 ',
    kitaru.get_colored_name(),
    '가 된장국 한 그릇을 ',
    me.get_colored_name(),
    '의 앞에 놓았다.',
  ]);
  era.printButton('마신다', 1);
  era.printButton('마시지 않는다', 2);
  if ((await era.input()) === 2) {
    await kitaru.say_and_wait('에엣!?');
    await kitaru.say_and_wait([callname, '!']);
    await era.printAndWait([
      '두 손을 모아 합장한 ',
      kitaru.get_teen_sex_title(),
      '는 ',
      me.get_colored_name(),
      ' 앞에서 애처로운 표정을 지었고, 오렌지색 꼬리도 풀이 죽은 듯 축 늘어뜨렸다.',
    ]);
    await era.printAndWait('이래서야 거절할 방법이 없겠지?');
    era.printButton('마신다', 1);
    await era.input();
  }
  await me.say_and_wait('꿀꺽');
  await era.printAndWait([
    '아무래도 ',
    kitaru.get_uma_sex_title(),
    ' 본인의 미각이 너무 민감한 탓인지, 이 국은 간이 좀 심심했다!',
  ]);
  await era.printAndWait([
    '하지만 그 점을 차치하더라도, 감칠맛 속에 은은한 단맛이 도는 것이 ',
    kitaru.get_colored_name(),
    '가 꽤나 정성을 들인 모양이다.',
  ]);
  await kitaru.say_and_wait([callname, '! 맛은 어떤가요?']);
  await era.printAndWait([
    kitaru.get_teen_sex_title(),
    '는 황수정 같은 눈동자를 반짝이며 ',
    me.get_colored_name(),
    '을(를) 바라보았다.',
  ]);
  era.printButton('「간이 좀 심심한데.」', 1);
  await era.input();
  await kitaru.say_and_wait('에에!');
  await era.printAndWait(
    '방금 다 비운 그릇 바닥에 남은 국물을 손가락 끝으로 살짝 찍더니, 분홍빛 혓바닥을 내밀어 핥아 보았다.',
  );
  await kitaru.say_and_wait(['으음! ', callname, '은 조금 진하게 드시는 편이군요……']);
  era.printButton('「점괘 결과는?」', 1);
  await era.input();
  await kitaru.say_and_wait('오! 그걸 잊을 뻔했네요!');
  await era.printAndWait([
    kitaru.sex,
    '는 ',
    me.get_colored_name(),
    '이(가) 내려놓은 사발을 아무렇지 않게 들어 올려 그릇 바닥을 훑어보았다.',
  ]);
  await kitaru.say_and_wait('된장 건더기의 모양으로 보아하니…… 이번 점괘 결과는——');
  await kitaru.say_and_wait('흉!');
  await era.printAndWait('전혀 의외가 아니라고 해야 할까?');
  await kitaru.say_and_wait([
    '그러니까! ',
	callname,
	'액운을 피하기 위해서라도, 후쿠짱이 만든 다른 요리들도 드셔보시겠어요?',
  ]);
  if (kitaru.sex_code !== 1) {
    await kitaru.say_and_wait('무녀가 만든 음식에는 신비한 힘이 깃들어 있으니까요!');
  }
  await era.printAndWait(
    '그리하여 이후로 너무 짠 계란말이와 살짝 타버린 생선구이를 차례로 맛보게 되었다.',
  );
  await era.printAndWait([
    '아무래도 ',
    kitaru.get_colored_name(),
    '의 요리 실력은 아직 갈 길이 먼 듯하다.',
  ]);
  era.println();
  get_skills_and_print_in_event(56, [201442]) && (await era.waitAnyKey());
  return true;
};