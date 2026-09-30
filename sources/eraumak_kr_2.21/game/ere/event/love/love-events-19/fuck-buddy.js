const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {CharaTalk} digital
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (digital, me, callname) => {
  const tachyon = get_chara_talk(32);
  await print_event_name(['클래식한 젖은 몸, 그저 ', me.get_colored_name()], digital);
  await era.printAndWait(
    '트레이너로서 평소의 트레이닝 지도 외에도, 몇 가지 자잘한 업무들이 있다.',
  );
  await era.printAndWait([
    '오늘은 ',
    digital.get_uma_sex_title(),
    '의 휴일이지만, ',
    me.get_colored_name(),
    '은(는) ',
    digital.get_uma_sex_title(),
    '의 사전 레이스 참가 자료를 제출하기 위해 학원 본관을 찾았다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 일을 마치고 사무실을 나서자, 창밖에는 어느새 보슬보슬 비가 내리고 있었다.',
  ]);
  await era.printAndWait(['다행히 ', me.get_colored_name(), '은(는) 우산을 챙겨왔다.']);
  await era.printAndWait([
    '막 돌아가려던 찰나, ',
    me.get_colored_name(),
    '은(는) 복도 아래 서 있는 분홍색 실루엣을 발견했다.',
  ]);
  await era.printAndWait([
    '그것은 ',
    digital.get_colored_name(),
    '이었다. 귀가 축 처진 채 기운이 없어 보이는 게, 아무래도 우산이 없는 모양이다. 마치 창작물에서 흔히 볼 수 있는 한 장면 같았다.',
  ]);
  await era.printAndWait([
    '하지만 이상하게도 멀지 않은 빗속에서 우산을 쓰고 있는 ',
    tachyon.get_colored_name(),
    '을 보았다.',
  ]);
  await me.say_and_wait('타키온을 부르지 않는 거야?');
  await digital.say_and_wait(['……에, 당신이라면 아시겠죠? ', callname, '?']);
  await era.printAndWait([digital.get_colored_name(), '이 몇 가지 수신호로 기색을 보였다.']);
  await era.printAndWait([
    '오랫동안 함께 지내오며, ',
    me.get_colored_name(),
    '도 점차 ',
    digital.get_colored_name(),
    '의 성격을 이해하게 되었다. 아무래도 ',
    digital.sex,
    '는 ',
    tachyon.get_colored_name(),
    '을 방해하고 싶지 않은 모양이다.',
  ]);
  await me.say_and_wait('그래, 알겠어. 그럼 나랑 우산을 같이 쓰고 가지 않을래?');
  await digital.say_and_wait('감사합니다!');
  await era.printAndWait([
    '그렇게 ',
    me.get_colored_name(),
    '은(는) 우산 하나를 받쳐 들었고, 그 아래 ',
    me.get_colored_name(),
    '과(와) ',
    digital.get_colored_name(),
    '이 나란히 섰다.',
  ]);
  await era.printAndWait(
    '빗줄기가 굵어지기 시작했다. 설상가상으로 바람까지 강해졌고, 방향조차 일정치 않았다.',
  );
  await era.printAndWait([
    '마치 비가 살아있는 생물처럼 ',
    me.get_colored_name(),
    '이(가) 우산을 기울인 반대 방향으로 파고들었다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    digital.get_colored_name(),
    '이 젖지 않도록 필사적으로 우산을 ',
    digital.get_colored_name(),
    ' 쪽으로 기울였다.',
  ]);
  await digital.say_and_wait([
    callname,
    ', 제가 젖는 것도 안 좋지만, 아무리 생각해도 당신의 몸이 ',
    digital.get_uma_sex_title(),
    '보다는 약하잖아요! 감기라도 걸리시면 큰일이라구요!',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    '이 화가 난 것을 알 수 있었다. 귀가 뒤로 쫑긋 누워버렸다.',
  ]);
  await me.say_and_wait('그건…… 좀 상처인데.');
  await era.printAndWait([
    '분위기를 가라앉히려 ',
    digital.get_colored_name(),
    '과 이런저런 농담을 주고받으며 계속 걸었다.',
  ]);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '은(는) 고집을 꺾지 않고 계속해서 ',
    digital.sex,
    '를 가려주었다.',
  ]);
  await era.printAndWait([
    '결국 고집을 부린 결과, 트레이닝실에 도착했을 때 ',
    me.get_colored_name(),
    '의 옷은 흠뻑 젖어버렸지만 다행히 ',
    digital.get_colored_name(),
    '은 거의 젖지 않았다.',
  ]);
  await digital.say_and_wait(['아하하하, ', callname, ', 일단 거기 가만히 계세요.']);
  await era.printAndWait([
    '아니 아니, 이때 ',
    me.get_colored_name(),
    '은(는) 깨달았다. 담당 ',
    digital.get_uma_sex_title(),
    '가 젖는 것도 큰일이지만, 담당 ',
    digital.get_uma_sex_title(),
    ' 앞에서 자신이 젖어 있는 것도 꽤 곤란한 상황이라는 것을.',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    '이 수건을 들고 ',
    me.get_colored_name(),
    '의 머리에 맺힌 물방울을 닦아주었다.',
  ]);
  await era.printAndWait(
    '젖은 옷을 벗고 몸을 닦은 뒤, 마른 수건으로 몸을 덮는 것은 임시방편에 불과했다.',
  );
  await me.say_and_wait('정말 고마워, 나머지는 내가 직접 할게.');
  await era.printAndWait([
    '이렇게 몸을 닦이고 있으니 ',
    me.get_colored_name(),
    '은(는) 내심 쑥스러움을 느꼈다.',
  ]);
  await era.printAndWait([
    '결국 ',
    me.get_colored_name(),
    '도 성인 남성이다. 고개를 숙이고 있어서 표정을 볼 수 없었지만 ',
    digital.get_colored_name(),
    '의 귀의 움직임으로 보아 기분이 나쁜 것은 아닌 듯했다……',
  ]);
  await era.printAndWait('괜찮은 걸까?');
  era.drawLine();
  await digital.say_and_wait(
    '후아~ 비를 맞고 샤워한 뒤 이불 속으로 쏙 들어가기! 그리고 숙면을 취해야 내일 더 활기차게 덕질을 할 수 있겠지!',
  );
  await digital.print_and_wait([
    '룸메이트인 ',
    sys_get_colored_callname(19, 32),
    '는 아직 연구실에 있는 모양이네. 뭐, 평소랑 똑같지만.',
  ]);
  await digital.print_and_wait('아차, 일기 쓰는 걸 깜빡한 것 같은데……');
  await digital.print_and_wait(
    '뭐 됐어! 그냥 누워서 오늘의 덕질을 회상하며 내일을 준비하자구!',
  );
  await digital.print_and_wait([
    '으음, 아침에는 우선 ',
    digital.get_uma_sex_title(),
    '쨩이 달렸던 잔디밭에서 행복을 만끽했고, 점심에는 식당에서 최애 에너지를 섭취, 그리고 오후에는……',
  ]);
  await digital.print_and_wait([
    '오후에는…… ',
    callname,
    '의…… 그…… 뽀얀 피부, 살짝 윤곽이 잡힌 복근, 뚝뚝 떨어지는 머리의 물……',
  ]);
  await digital.print_and_wait('아니 아니 아니! 디지땅, 너 대체 무슨 생각을 하는 거야!');
  await digital.print_and_wait([
    '그건 왠지 ',
    digital.get_uma_sex_title(),
    '들에게 인기 많을 타입의……',
  ]);
  await digital.print_and_wait(
    '안돼 안돼, 디지땅! 일단 기존 지식으로 해석해보자. 디지땅, 너 동인지 많이 봤잖아? 직접 그리기도 했고!',
  );
  await digital.print_and_wait('자자, 그 속에서 답을 찾아보자구!');
  await digital.print_and_wait([
    '이건 ',
    callname,
    '이(가) ',
    digital.get_uma_sex_title(),
    '를 스카우트해서, ',
    digital.sex,
    '의 재능을 꽃피워주는 그런 스토리지?!',
  ]);
  await digital.print_and_wait('그다음에, 어떻게 됐더라?');
  await digital.print_and_wait(['그 감정을 ', digital.get_uma_sex_title(), '짱이 눈치채고……']);
  await digital.print_and_wait('그리고 자가 발전……');
  await digital.say_and_wait('안 돼!! 왜 이런 쪽으로 연결하는 거야, 아무리 그래도 그건 좀……!');
  await tachyon.say_and_wait([
    '이런이런, ',
    sys_get_colored_callname(32, 19),
    ', 혼자서 무슨 말을 하고 있는 건가?',
  ]);
  await digital.say_and_wait('히익————?!');
  await digital.print_and_wait([
    '아무래도 ',
    sys_get_colored_callname(19, 32),
    '가 돌아온 타이밍이 좋지 않았던 모양이다.',
  ]);
  await sys_love_uma_in_event(19);
};