const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const { buff_colors } = require('#/data/color-const');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    m_call_u = sys_get_callname(0, 52),
    in_urara = get_chara_talk(52, chara_colors[1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);

  await era.printAndWait(['……']);
  await era.printAndWait([
    '지금이 몇 시인가? 지난번 시간을 물은 뒤로 얼마나 흘렀는가? 낮과 밤의 구분이 없는 밀실 속에서, ',
    me.get_colored_name(),
    '은(는) 시간 감각을 상실했다.',
  ]);
  await era.printAndWait(['다만, 이제 시간이 중요하기는 한 것인가?']);
  await era.printAndWait([
    '원래 음침했던 실내는 부드럽고 따스한 빛으로 채워졌고, 생활감이 넘치는 가구들이 방을 가득 메웠으며, 한쪽 벽면에는 자연광이 비치는 가짜 창문까지 걸렸다.',
  ]);
  await era.printAndWait([
    '침대 옆 책상에는 컴퓨터와 서류가 놓여 있고, 방 중앙의 낮은 탁자 위에는 간식과 과일 접시가 놓여 있으며, 심지어 다른 쪽 벽면에는 독립된 욕실까지 갖춰져 있다……',
  ]);
  await era.printAndWait([
    '평범한 거실처럼 아늑하고 밝게 꾸며진 주변 환경을 둘러보며, ',
    me.get_colored_name(),
    '은(는) 그저 어안이 벙벙할 뿐이었다.',
  ]);
  await urara.say_and_wait(['헤헤～ 여기는 마치 둘만의 작은 집 같네!']);
  await era.printAndWait(['처음에는 농담처럼 들렸던 말들이, 이제는 점차 현실로 변해갔다.']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    urara.get_colored_name(),
    '가 다른 사람들에게 ',
    urara.sex,
    '의 트레이너가 어디로 갔는지 어떻게 설명했는지, 그리고 ',
    urara.get_colored_name(),
    '가 어디서 가구들을 옮겨왔는지, 심지어 수도와 전기까지 어떻게 끌어왔는지 알지 못한다.',
  ]);
  await era.printAndWait([
    '본래라면 매우 중요했을 질문들이었으나, 이제는 손을 뻗으면 닿을 곳에 있는 작은 ',
    urara.get_uma_sex_title(),
    '의 부드러운 분홍빛 머리카락을 쓰다듬고 있노라면, 그런 것들은 아무래도 상관없어졌다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '의 곁에 기대어 평온하게 잠든 ',
    urara.get_colored_name(),
    '은(는) 꿈속에서 어느덧 행복한 미소를 짓고 있었다.',
  ]);
  await era.printAndWait([
    '언제나 떠나고 싶어 하면서도 결국 포기를 선택한 트레이너와, 감금이라는 선택을 했으나 점점 상냥해져 가는 ',
    urara.get_uma_sex_title(),
    '중 과연 누가 누구를 길들인 것인가?',
  ]);
  await era.printAndWait(['그 답은, 아마도 이곳에 있는 두 사람만이 알고 있을 것이다.']);
  await urara.say_and_wait([callname, ', ', callname, ', 오늘은……']);
  await era.printAndWait([
    '어느덧 낮잠에서 깨어난 ',
    urara.get_colored_name(),
    '가 자신이 기대고 있던 사람을 올려다보고 있었고, 다시금 맑고 투명해진 두 눈동자에는 벚꽃색이 피어나고 있었다.',
  ]);

  era.printButton('「오늘은…… 밖으로 나가는 날이니?」', 1);
  await era.input();

  await urara.say_and_wait([
    '응, 오늘은 ',
    callname,
    '를 데리고 나가서 기분 전환도 하고 햇볕도 쬐는 날이라구!',
  ]);
  await era.printAndWait([
    '「연인」이 도망가는 것이 두렵지는 않은가? 그런 질문은 이제 더 이상 의미가 없었다. 정말로 떠나고 싶었다면, ',
    me.get_colored_name(),
    '은(는) 이미 수없이 떠날 기회가 있었을 것이기에.',
  ]);
  await era.printAndWait([
    '오랜만에 다시 선 인파가 북적이는 거리 위에서, 두 사람이 맞잡은 손가락은 그 어떤 수갑이나 사슬보다도 견고하게 느껴졌다.',
  ]);
  await era.printAndWait([
    '푸른 하늘 아래에서 봄꽃이 만개하듯 되찾은 ',
    urara.get_colored_name(),
    '의 미소를 바라보며, 몇 번째인지 모를 황홀한 감각이 다시금 ',
    me.get_colored_name(),
    '의 머릿속을 스쳐 지나갔다.',
  ]);
  await era.printAndWait(['사실, 어떤 일들은 이미 예전부터 알고 있었던 것이 아닌가?']);
  await era.printAndWait([
    '상냥한 ',
    urara.sex,
    '가 왜 「감금」이라는 선택을 했는지, 배덕적인 몸으로 ',
    me.get_colored_name(),
    '과(와) 하나가 되어 녹아들던 그 수많은 혼탁한 밤들이 무엇을 위해서였는지.',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '는 그저 독점하고 싶었던 것만이 아니었다. ',
    urara.sex,
    '는 여전히 자신의 트레이너를 교정하고, 나아가 보호하고 싶었던 것이다.',
  ]);
  await era.printAndWait([
    urara.sex,
    '는 진심으로 ',
    me.get_colored_name(),
    '가 자신으로 인해 행복해지기를 바랐다. ',
    urara.get_colored_actual_name(),
    '라는 이름의 작은 ',
    urara.get_uma_sex_title(),
    '에게 사랑받는 트레이너로서 행복하기를 바랐던 것이다.',
  ]);
  await era.printAndWait([
    '그렇기에 ',
    urara.sex,
    '도 트레이너가 진심으로 자신만을 바라봐 주기를 원했다. 그래서 ',
    urara.get_colored_actual_name(),
    '라는 이름의 작은 ',
    urara.get_uma_sex_title(),
    '는 더 이상 ',
    me.get_colored_name(),
    '을(를) 누구에게도 넘겨주고 싶지 않았다.',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '는 이미 오래전에 자신의 트레이너를 원망하기를 그만두었다. ',
    urara.sex,
    '는 단 한 번도 ',
    me.get_colored_name(),
    '을(를) 상처 입히고 싶지 않았고, ',
    urara.sex,
    '는 그저 ',
    me.get_colored_name(),
    '이(가) 언제까지나 자신의 곁에 머물러 주기를 바랐을 뿐이다.',
  ]);
  await era.printAndWait(['어쩌면, 이런 것도 나쁘지 않을지도 모르겠다……']);
  await era.printAndWait([
    '비록 이야기의 전개는 결코 아름답다고 할 수 없었으나, 서로를 구속한 두 사람에게는 행복한 결말을 남겨줄 수 있을지도 모른다.',
  ]);

  era.printButton(`「어쩌면, 나는 줄곧 ${m_call_u}를 사랑하고 있었던 걸지도 모르겠구나.」`, 1);
  await era.input();

  await era.printAndWait([
    '이것은 결코 당연한 선언이 아니었다. 누군가를 사랑하게 되는 것은 결코 당연한 일이 아니지만, 지금의 ',
    me.get_colored_name(),
    '은 예전에 늘 잊고 지냈던 한 가지 사실을 더욱 확신하게 되었다.',
  ]);
  await era.printAndWait([
    '어쩌면 과거에 ',
    me.actual_name,
    '(이)라는 이름의 ',
    me.sex,
    '는 수많은 사람과 수많은 ',
    urara.get_uma_sex_title(),
    '를 좋아했을지도 모른다. 하지만 지금, 그 선택들은 이제 아무런 의미가 없다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '의 곁에 서 있는 이 작은 ',
    urara.get_uma_sex_title(),
    '가, 기꺼이 ',
    me.get_colored_name(),
    '의 전부가 되어 주려 하기 때문이다.',
  ]);
  await era.printAndWait([
    '그렇기에 오늘은 특별한 날이 될 것이며, 작은 ',
    urara.get_uma_sex_title(),
    '또한 과거에 나쁜 아이가 되기로 결심했을 때처럼 굳게 마음을 먹었다.',
  ]);
  await urara.say_and_wait([callname, ', 나, 결정했다구──!']);
  await era.printAndWait([
    me.get_colored_name(),
    '의 나지막한 속삭임을 들은 것인지, 작은 ',
    urara.get_uma_sex_title(),
    '는 이와 같은 선언을 내뱉었다.',
  ]);
  await urara.say_and_wait([
    '조금 아쉬운 마음도 들지만, 우리 같이 거기서 나와서 햇볕이 잘 드는 곳으로 이사 가자!',
  ]);

  era.printButton('「하지만……」', 1);
  await era.input();

  await urara.say_and_wait([
    callname,
    '랑 우라라는 이제 그런 관계는 필요 없잖아, 그치?',
  ]);
  await urara.say_and_wait([
    '우라라는 이제 더 이상 어린애가 아니니까! 그러니까 ',
    callname,
    '도 힘내서 따라와 줘! 여기 햇살이 정말 기분 좋다구!',
  ]);
  await era.printAndWait([
    '눈부신 햇살이 ',
    me.get_colored_name(),
    '의 얼굴 위로 쏟아졌고, 곁에서 ',
    me.get_colored_name(),
    '을(를) 끌어안은 ',
    urara.get_colored_name(),
    '의 미소는 그 햇살만큼이나 밝게 빛났다.',
  ]);
  await era.printAndWait(['과연, 이제 더 이상 「하지만」이라고 덧붙일 말은 없었다……']);
  await era.printAndWait([
    '「용서받을 수 없는 죄인」은 가장 자유로운, 「',
    urara.get_colored_actual_name(),
    '의 사랑」이라는 이름의 「감옥」 속에 감금되었다──',
  ]);
  await era.printAndWait([
    '이것은 세상에서 가장 행복한 「종신형」일까? 지금의 ',
    me.get_colored_name(),
    '은(는) 아직 그 답을 알지 못한다.',
  ]);
  await era.printAndWait([
    '이제 햇살 아래에 선 ',
    me.get_colored_name(),
    '은(는) 남은 생애 동안 자신을 가장 사랑해 주는 「작은 간수님」과 함께, 영원히 계속될 이「옥중 일기」를 써 내려갈 것이다.',
  ]);

  era.drawLine();
  await in_urara.say_as_unknown_and_wait([
    '……하아, ',
    urara.get_colored_name(),
    '가 바란다면 이것이 최선의 결말이겠죠. 다만 당신에겐 과분한 행운이라는 생각이 드네요.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '저 역시 마음이 좁은 사람은 아닙니다만, 약간의 불쾌함은 지울 수 없군요.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '당신은 처음에 우라라와 맺었던 약속들이 무엇이었는지 기억하고 있습니까? 너무 많은 것을 생략해버린 것 아닌가요?',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '당신과 다투고 싶지는 않습니다만, 이런 환상 같은 결말로 매듭짓는 것은 조금 무책임하지 않나요?',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '만약 다음에 다시 만날 기회가 있다면, 그때는 부디 정신 바짝 차려주시길 바랍니다.',
  ]);

  await print_event_name(
    [{ color: buff_colors[3], content: '종신형의 자유'}],
    urara,
  );
};