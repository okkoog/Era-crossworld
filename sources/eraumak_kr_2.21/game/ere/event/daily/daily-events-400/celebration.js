const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const ss = get_chara_talk(400),
    callname = sys_get_callname(400, 0),
    me = get_chara_talk(0);
  await print_event_name('쏘아올린 불꽃', ss);
  await ss.say_and_wait(['그래서... ', callname, ', 내 기모노 잘 어울려?']);
  await era.printAndWait([
    '연초에 입었던 기모노와는 전혀 다르게, 지금의 ',
    ss.get_colored_name(),
    '는 여름의 정취가 물씬 풍기는 기모노 차림이다. ',
  ]);
  await era.printAndWait([
    '긴 머리를 틀어 올린 ',
    ss.get_colored_name(),
    '의 모습은 얌전하고 우아해 보인다.',
  ]);
  await era.printAndWait([
    ss.sex,
    '는 자연스럽게 ',
    me.get_colored_name(),
    '의 손을 잡고, ',
    me.get_colored_name(),
    '의 품에 기댄 채, ',
    me.get_colored_name(),
    '이(가) 이끄는 대로 여름 축제 장소 곳곳을 돌아다녔다.',
  ]);
  await era.printAndWait([
    me.get_couple_title(),
    '은 먹거리부터 놀거리까지 하나도 빠짐없이, 노점상이란 노점상은 거의 다 체험해 보았다.',
  ]);
  await era.printAndWait([
    ss.get_colored_name(),
    '는 운 좋게도 비녀 뽑기에 당첨되었고, 노점 주인이 지켜보는 가운데 ',
    me.get_colored_name(),
    '에게 그 비녀를 자신의 머리에 꽂아달라고 했다.',
  ]);
  await ss.say_and_wait(
    '오늘 정말 재밌었어... 솔직히 너랑 만나지 않았더라면, 불꽃놀이 같은 건 보러 올 생각도 안 했을지도 몰라.',
  );
  await era.printAndWait([
    '성대한 불꽃놀이 아래, ',
    me.get_couple_title(),
    '은 눈에 잘 띄지 않는 구석에 앉아 있었다. 그 모습은 마치 달콤한 연인 같았다.',
  ]);
  era.printButton('「그래? 너한테 줄 선물이 있어, 따라와.」', 1);
  await era.input();
  await era.printAndWait([
    '불꽃놀이가 끝난 후, ',
    me.get_colored_name(),
    '은(는) ',
    ss.sex,
    '의 손을 잡았다. 그리고 ',
    ss.get_colored_name(),
    '의 의아한 표정에도 아랑곳하지 않고, 그녀를 탁 트인 모래사장으로 데려갔다.',
  ]);
  await ss.say_and_wait(['어, ', callname, '의 선물이라니... 뭐... 뭔데?']);
  await era.printAndWait([
    ss.sex,
    '는 약간 불안하면서도 흥분된 기색으로 ',
    me.get_colored_name(),
    '을(를) 바라보더니, 심지어 자기 기모노의 띠로 손을 뻗기까지 했다.',
  ]);
  await era.printAndWait('（펑!!!）');
  await era.printAndWait([
    '하늘로 솟아오른 불꽃이 터지는 소리가 ',
    ss.sex,
    '의 귓가에 들려왔다. ',
    ss.sex,
    '가 놀라 뒤를 돌아보자, ',
  ]);
  await era.printAndWait(
    '저 멀리서 불꽃이 연달아 터지며, 아름답고 환상적인 무늬를 수놓고 있었다.',
  );
  await ss.say_and_wait('이... 이건...?');
  await era.printAndWait([
    ss.sex,
    '의 눈가가 촉촉해진 듯했다. 다시 고개를 돌리자 스파클라를 꺼내든 ',
    me.get_colored_name(),
    '이(가) 보였다.',
  ]);
  await me.say_and_wait(
    '여름엔 역시 같이 불꽃놀이를 해야 제맛이지. 이건 내가 널 위해 준비한 불꽃놀이야. 다 보고 나서 같이 하는 거 어때?',
  );
  await era.printAndWait([
    '그 직후 ',
    me.get_colored_name(),
    '은(는) 강한 바람이 훅 끼치는 걸 느꼈고, 순식간에 ',
    ss.get_colored_name(),
    '에게 덮쳐져 푹신한 모래사장 위로 쓰러졌다.',
  ]);
  await era.printAndWait([
    ss.sex,
    '의 목소리를 들으며, ',
    ss.get_colored_name(),
    '의 머리를 부드럽게 쓰다듬고, 때때로 ',
    ss.sex,
    '의 귀 안쪽 솜털을 간지럽혔다.',
  ]);
  await era.printAndWait([
    '애정이 듬뿍 담긴 눈빛의 ',
    ss.get_colored_name(),
    '는 ',
    me.get_colored_name(),
    '의 몸 위에 엎드린 채, 더없이 아름다운 미소를 지었다.',
  ]);
  await ss.say_and_wait([
    callname,
    '의 선물, 너무 귀중하네... 이 귀중한 선물, 내 몸으로 갚게 해줘.',
  ]);
  await era.printAndWait([
    '결국 ',
    me.get_couple_title(),
    '은 밤바다 모래사장에서 밤이 깊도록 신나게 노는 바람에, 기진맥진해서 방으로 돌아오자마자 침대에 눕고는 잠들어버리는 것으로 끝을 맺었다.',
  ]);
};