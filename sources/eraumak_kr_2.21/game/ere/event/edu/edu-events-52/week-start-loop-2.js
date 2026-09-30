const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {CharaTalk} in_urara
 * @param {string} callname
 */
module.exports = async (urara, me, in_urara, callname) => {
  await print_event_name('「허무」의 갈망', urara);
  await urara.say_and_wait([
    callname,
    ', 우라라의 소망이 모두가 달리는 이유에 어울린다고 생각해?',
  ]);
  await urara.say_and_wait([
    callname,
    ', 우라라의 소망이 모두의 도움을 받을 자격이 있다고 생각해?',
  ]);
  await urara.say_and_wait([
    callname,
    '의 손은 우라라보다 훨씬 크네. 한 손만으로도 우라라의 목을 다 감쌀 수 있을 정도야.',
  ]);
  await urara.say_and_wait([
    callname,
    ', 두 손을 우라라의 목 위에 올리고, 그대로 힘껏 눌러버리는 건 어때?',
  ]);
  await urara.say_and_wait([
    callname,
    ', 모두를 마주하기 부끄러워서 도망친 우라라를, 당신 마음대로 다룰 수 있는 인형으로 만들어줘――',
  ]);
  era.drawLine();
  await era.printAndWait([
    '셀 수도 없을 만큼 반복된 악몽에서 깨어나, ',
    me.get_colored_name(),
    '은(는) 세 여신상 앞 벤치에서 지끈거리는 이마를 짚었다.',
  ]);
  await era.printAndWait(
    '오늘도 영문도 모른 채 기이한 장소에서 깨어났고, 주변은 여전히 무서울 정도로 고요했다.',
  );
  await era.printAndWait(
    '다른 사람들이 사라진 것은 아니었지만, 마치 주변 공간이 정지한 듯 모든 소음이 사라져 있었다.',
  );
  await era.printAndWait(
    '무엇보다 괴로운 것은, 이번 주에 들어선 이후로 시간이 문자 그대로 멈춰버렸다는 점이다.',
  );
  await era.printAndWait(
    '길가의 시계뿐만 아니라 손목시계, 스마트폰, 컴퓨터 등 눈에 보이는 모든 시간 표시가 동일한 시각에 멈춰 있었다.',
  );
  await era.printAndWait(
    '그나마 타인에게 시간을 물어보는 수법은 통했기에, 간신히 정상적인 생활 상태를 유지하고 있었다.',
  );
  await era.printAndWait(
    '물론 그렇기에, 정상적인 시공간 감각을 상실한 상태에서도 태연하게 생활하는 주변 사람들이 오히려 극도로 비정상적으로 느껴졌다.',
  );
  await era.printAndWait([
    '상식적인 관점에서는 자신이 미친 것이겠지만, 지금의 ',
    me.get_colored_name(),
    '에게 있어 그것은 아마도 세계가 자신과 함께 미쳐버린 결과일 것이었다.',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '와 관련된 악몽도, 주변의 기괴한 변화도, 모든 것이 잘못되어 있었지만, 어째서 이렇게 되었는지 그 원인은 도무지 떠오르지 않았다……',
  ]);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '이(가) 고민하며 무거운 머리를 들어 올린 순간, 마음속의 미세한 위화감이 급격히 증폭되었다――',
  ]);
  await era.printAndWait([
    '위화감과 동시에 찾아온 것은 기시감이었다. ',
    me.get_colored_name(),
    '의 앞에 서 있는 것은, 얼마나 기다린 것인지 알 수 없으나 여전히 미소를 띠고 있는 ',
    urara.get_colored_name(),
    '였기 때문이다.',
  ]);
  await urara.say_and_wait([
    callname,
    '! 오늘 같이 놀러 가기로 약속했잖아! 왜 또 여기서 잠든 거야? 많이 피곤해?――',
  ]);

  era.printButton('「우라라, 지금 시간이 얼마나 지났지?」', 1);
  await era.input();

  await era.printAndWait([
    '갑자기 고개를 들어 ',
    urara.get_colored_name(),
    '의 말을 가로막으며, 드디어 무언가를 깨달은 ',
    me.get_colored_name(),
    '은(는) 진지한 표정으로 ',
    urara.get_colored_name(),
    '를 바라보았다.',
  ]);
  await urara.say_and_wait([
    '아, ',
    callname,
    ', 요즘 계속 시간을 물어보네. 하지만 그렇게 오래 잔 건 아니야! 음, 어디 보자……',
  ]);

  era.printButton(
    `「오늘의 시간이 아니야, 우라라. 너의 ${callname}가 묻는 건, 『시간이 멈춘 뒤로 얼마나 지났느냐』는 거야.」`,
    1,
  );
  await era.input();

  await urara.say_and_wait('――');
  await era.printAndWait([
    '마치 고요한 폭우가 쏟아진 듯한 긴 침묵 끝에, ',
    urara.get_colored_name(),
    '는 조용히 벤치 반대편에 걸터앉았다.',
  ]);
  await era.printAndWait([
    '이번만큼은 ',
    urara.sex,
    '의 작은 얼굴에 평소의 미소는 없었다. 대신 잘못을 저지른 아이 같은 죄책감이 서려 있었다.',
  ]);
  await urara.say_and_wait('미안해. 사실 우라라도 모르겠어, 이게 벌써 몇 주째인지……');
  await urara.say_and_wait([
    '왜냐하면 『',
    urara.sex,
    '』가 여기서는 얼마든지 머물러도 된다고 했거든. 하지만…… 역시 ',
    callname,
    '는 결국 기억해 버리는구나……',
  ]);
  await urara.say_and_wait(
    '우라라도 이게 잘못된 거라는 건 알고 있었어. 하지만 계속 이 가짜 일상 속에 빠져 있고 싶어서……',
  );
  await era.printAndWait([
    urara.sex,
    '가 이번에 정말 큰 잘못을 저지른 모양이었다. 비록 ',
    me.get_colored_name(),
    '이(가) 무언가를 기억해 냈기에 ',
    urara.sex,
    '에게 질문한 것은 아니었지만 말이다.',
  ]);

  era.printButton(
    '「사실 지금도 아무것도 생각나지 않아. 그저 어딘가 이상하다는 걸 깨달았을 뿐이야. 최근에 또 무슨 일이 있었던 거야?」',
    1,
  );

  await urara.say_and_wait([
    '아무 일도 없었어! 단지 ',
    callname,
    '가 무언가를 기억해 낼 때마다, 『',
    urara.sex,
    '』가 나타나서 ',
    callname,
    '의 기억을 가져가 버렸을 뿐이야. 그래서……',
  ]);
  await era.printAndWait(
    '생각해 보니 그 과보호적인 보호자가 불안 요소를 내버려 둘 리 없었다. 지금은 그저 운 좋게 허점이 생긴 것뿐이리라.',
  );
  await era.printAndWait([
    '그리고 ',
    me.get_colored_name(),
    '은(는) 이 기회를 절대 놓치지 않을 작정이었다. 적어도 지금의 ',
    urara.get_colored_name(),
    '는 「지난달」에 비하면 훨씬 정상적인 상태였다. 지금이라면……',
  ]);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '이(가) 입을 열기도 전에, ',
    urara.get_colored_name(),
    '가 먼저 애처로운 눈빛으로 곁에 있는 가장 친밀한 어른을 바라보았다.',
  ]);
  await urara.say_and_wait([
    '도망치지 말라고, ',
    callname,
    '는 분명 그렇게 말하겠지? 하지만…… 우라라는 여기 조금만 더 있고 싶어……',
  ]);

  era.printButton(
    `「지금의 모든 것이 우라라의 친구가 너를 위해 만들어낸 종이 상자 속 모형 정원이라는 걸 알면서도?」`,
    1,
  );
  await era.input();

  await urara.say_and_wait([
    '하지만 여기는 정말 안심되는걸. ',
    callname,
    '도 느끼고 있지? 설령 그게……',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 말이 끊긴 침묵을 틈타, ',
    me.get_colored_name(),
    '은(는) 한숨을 내쉬며 말을 이어갔다.',
  ]);

  era.printButton(
    '「우라라, 내가 늘 꾸는 그 괴상한 꿈들…… 내용은 말하지 않겠지만, 전부 실제로 일어났던 일이지?」',
    1,
  );
  await era.input();

  await urara.say_and_wait('응……');
  await era.printAndWait([
    '예상이 맞았지만, 막상 ',
    urara.get_colored_name(),
    '가 인정하자 마주하기 괴로워졌다. ',
    urara.get_colored_name(),
    '는 원래 이렇게나…… 「취향」이 뒤틀린 아이였던 걸까?',
  ]);

  era.printButton(
    `「마지막에 매번 자신의 ${callname}에게 상처받더라도 상관없다는 거야? 자신을 그렇게 학대하지 마.」`,
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '그치만 우라라는 너무 무서운걸. 언젠가 우라라가 실패한다면, 언젠가 다시는 일어서지 못하게 된다면……',
  );
  await urara.say_and_wait([
    '그래서 언젠가, 모두가, 그리고 ',
    callname,
    '가 우라라 곁에 없게 된다면……',
  ]);
  await urara.say_and_wait(
    '……아니야, 우라라도 그런 일은 일어나지 않는다는 걸 알고 있어. 하지만 너무 무서워서 도망쳐 버렸어……',
  );
  await urara.say_and_wait('그건……');

  era.printButton(
    '「그건 우라라에게 결코 아무렇지 않은 일이 아니기 때문이잖아? 하지만 우라라는 모든 걸 너무 무겁게 여기고 있어. 이제는 좀 내려놓을 때도 됐어.」',
    1,
  );
  await era.input();

  await urara.say_and_wait([
    '하지만, ',
    callname,
    '는 우라라와 계속 함께하고 싶지 않아? 설령 ',
    callname,
    ' 한 사람만을 만족시킬 수 있다고 해도……',
  ]);

  era.printButton(
    '「그렇게 하는 게, 우라라와 그 소극적인 친구가 하려는 짓이랑 무슨 차이가 있어?」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '금방이라도 울음이 터질 것 같은 ',
    urara.get_colored_name(),
    '의 눈을 직시하며, ',
    me.get_colored_name(),
    '은(는) 마음이 약해지려는 것을 억누르고 다시 입을 열었다.',
  ]);
  await era.printAndWait([
    '적어도 이번은 이전과 다르다. 그리고, ',
    urara.get_colored_name(),
    '의 ',
    callname,
    '는 ',
    urara.get_colored_name(),
    '가 「',
    urara.sex,
    '」와 같은 비관적인 표정을 짓는 것을 더 이상 보고 싶지 않았다.',
  ]);

  era.printButton(
    `「지금의 우라라는 어쩌면 ${callname}가 짊어진 희망만을 생각할지 모르지만, 나의 희망은 우라라의 내일을 보는 거야.」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    '똑같이 햇살 아래 서 있었지만, 이번에는 확신에 찬 ',
    me.get_colored_name(),
    '이(가) 눈빛이 서서히 밝아지는 ',
    urara.get_colored_name(),
    '에게 손을 내밀었다. 언제나 그래오지 않았던가?',
  ]);
  await era.printAndWait(
    '아무리 막막하더라도 미래는 함께 극복할 수 있다. 설령 종말이 다가오더라도 말이다. 결과 없는 침묵보다는, 적어도 한 번만 더 서로를 믿어보기로 했다.',
  );

  era.printButton(
    '「결과가 어떻게 될지는 나중 일이야. 내가 언제나 우라라의 뒤에 서 있을 테니까, 모두에게 보여주자. 우라라가 아리마 기념에서 달리는 모습을.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '자신의 트레이너를 바라보며, ',
    urara.get_colored_name(),
    '는 벤치에서 일어날 용기를 서서히 회복한 듯 보였다. 그녀는 가볍게 ',
    me.get_colored_name(),
    '의 손 위에 손가락을 얹었다.',
  ]);
  await urara.say_and_wait([
    '그럼…… ',
    callname,
    ', 우라라와 같이 가서 『',
    urara.sex,
    '』에게 사과해 줄 수 있어?',
  ]);

  era.printButton(
    `「당연히 문제없지. 나도 사실 ${in_urara.sex}에게 불만이 좀 많았거든.」`,
    1,
  );
  await era.input();

  await urara.say_and_wait('응! 그럼 그렇게……');
  await era.printAndWait([
    '이윽고 시야가 회백색으로 변하며 가해지는 중압감 속에서, ',
    me.get_colored_name(),
    '의 앞에 있던 작은 ',
    urara.get_uma_sex_title(),
    '를 강제로 밀어내고 나타난 「',
    urara.sex,
    '」는 분노한 듯 ',
    me.get_colored_name(),
    '이(가) ',
    urara.get_colored_name(),
    '에게 내밀었던 손을 거칠게 쳐냈다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '정말 한눈만 팔면 바로 튀어나오시는군요. 우라라를 몰아세워서 무슨 의미가 있다는 거죠? 얌전히 ',
    urara.sex,
    '의 소망을 따라주면 안 되는 건가요?',
  ]);

  era.printButton(
    '「나를 무슨 곰팡이처럼 취급하지 말아줄래? 그리고 같이 가서 사과하자고 약속했잖아. 너는 얼마나 속이 좁은 거야.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '살기등등한 「',
    urara.sex,
    '」를 마주하며, ',
    me.get_colored_name(),
    '은(는) 온몸의 털을 곤두세운 이 분홍색 아기 고양이와 어쩔 수 없이 거리를 두었다.',
  ]);

  era.printButton(
    '「그리고 잘 생각해 봐. 지금 현 상황에 대해 가장 불안해하고 있는 건 우라라가 아니라……」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '그래요! 그래서 제가 당신들을 싫어하는 거라고요! 당신도, 우라라도, ',
    urara.sex,
    ' 주변의 사람들도 전부 똑같아요!',
  ]);
  await era.printAndWait([
    '참다못해 폭발하여 앞으로 달려 나와 ',
    me.get_colored_name(),
    '의 옷깃을 힘껏 움켜쥔 ',
    urara.get_teen_sex_title(),
    '는, 눈물을 흘리며 마음속 깊이 눌러두었던 염세적인 감정들을 쏟아냈다.',
  ]);
  await era.printAndWait(
    '어디선가 수많은 유리창이 깨지는 듯한 날카로운 소음이 들려왔고, 눈물이 바닥에 떨어짐에 따라 주변의 세트장 같은 세계도 서서히 산산조각 나기 시작했다.',
  );
  await era.printAndWait([
    '하지만 이상 현상의 중심에 서 있음에도, 이제 와서 멈추기에는 너무 늦었다. 「',
    urara.sex,
    '」가 자신을 흔들어대는 것을 내버려 둔 채, ',
    me.get_colored_name(),
    '은(는) 침착하게 대화를 이어갔다.',
  ]);

  era.printButton('「……분명 혐오 때문이라고 말하면서도, 당신도 줄곧 우라라를 돕고 있었잖아?」', 1);
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '그래요, 대체 왜 그랬을까요? 그냥 ',
    urara.sex,
    '가 패배하는 걸 지켜보면서 ',
    urara.sex,
    '가 자신의 소망을 포기하게 만들었으면 그만이었는데!',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '그랬다면 ',
    urara.sex,
    '는 집으로 돌아가 평범한 삶을 살 수 있었겠죠…… 아니, 애초에 처음부터 ',
    urara.sex,
    '가 말을 걸어왔을 때 거절했더라면 좋았을 텐데!',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '처음부터 ',
    urara.sex,
    '의 미소에 아무런 동요도 느끼지 않았더라면 좋았을 거예요. 하지만 이건, 제 자신의 선택이었으니까……',
  ]);
  await era.printAndWait([
    '지금의 ',
    urara.sex,
    '를 어떻게 표현해야 할까? 모든 것을 거부하는 슬픔과 분노 뒤에는, 방향을 잃은 질투와 허탈함이 섞여 있는 듯했다.',
  ]);
  await era.printAndWait([
    '솔직해지지 못하는 ',
    urara.sex,
    '는 주변에 대한 혐오를 품으면서도, 동시에 아무것도 할 수 없는 자신에 대해 비관하고 있었다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '맞아요, 저는 이제 절대 당신들을 돕지 않을 거예요. 하나같이 바보 같은 짓들만 골라서 하고……',
  );
  await in_urara.say_as_unknown_and_wait(
    '『희망과 빛』이라는 이름의 허무에 모든 걸 걸고 그렇게 필사적으로 매달리다니, 만약 실패하면 모든 게 끝장이잖아요?!',
  );

  era.printButton(
    '「인생은 한 번뿐이고, 내일로 가지 않으면 과거에 머물 수도 없으니까. 지금 당신이 하는 짓처럼 말이야――」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '하! 당신도 아직 만족하지 못한 건가요? 우라라는 이미 당신을 위해 제가 꿈도 꾸지 못했던 1착을 몇 번이나, 몇 번이나 따냈다고요!',
  );
  await in_urara.say_as_unknown_and_wait(
    '이 지경까지 왔는데! 무분별한 소망을 위해 나아가는 게 계속해서 타인에게 상처를 준다면, 조금 이기적으로 굴면 좀 어때서요!',
  );
  await era.printAndWait([
    me.get_colored_name(),
    '의 말을 거칠게 가로막은 ',
    urara.get_teen_sex_title(),
    '가 눈물 속에서 억지로 지어 보인 미소는, 마치 망가진 인형처럼 가슴 아픈 모습이었다.',
  ]);
  await era.printAndWait([
    urara.sex,
    '에게 멱살이 잡혀 숨이 막힐 지경이었지만, ',
    me.get_colored_name(),
    '은(는) 모든 것을 포기하려는 ',
    urara.sex,
    '의 의지에 다시 순응할 생각이 없었다.',
  ]);

  era.printButton(
    `「우라라는 나를 위해 달렸던 게 아니야. 지금 그 점을 이용해 이기적으로 군다면, 우라라의 지금까지의 모든 노력은 물거품이 되고 말 거야.」`,
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '속이지 마세요! 당신이 말하는 물거품이라는 게 우라라를 위한 건가요, 아니면 당신의 커리어를 위한 건가요?',
  );
  await in_urara.say_as_unknown_and_wait(
    '애초에 저는…… 처음부터 당신을 사랑했었는데…… 결국 당신도 다른 사람들과 똑같군요……',
  );
  await in_urara.say_as_unknown_and_wait(
    '우라라를 계속 노력하게 해서 다른 사람들과 자기 자신을 더 상처 입히느니, 차라리 지금 여기서, 지금……',
  );
  await era.printAndWait([
    '자신의 눈물에 목이 메어 말을 잇지 못하고, 무력하게 ',
    me.get_colored_name(),
    '의 옷깃을 놓아준 ',
    urara.get_teen_sex_title(),
    '는 자포자기한 듯 뒤에 있는 벤치로 다시 주저앉았다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '을(를) 위협하기는커녕, 지금의 작은 ',
    urara.get_uma_sex_title(),
    '는 곧 쓰러질 듯한 ',
    urara.get_colored_name(),
    '처럼 자신의 뒤틀림에 짓눌려 있었다.',
  ]);

  era.printButton('「역시, 가장 무서워하고 있는 건 당신이었구나……」', 1);
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '……죄송해요…… 계속 심한 말만 늘어놓고…… 하지만 정말 너무 무섭단 말이에요……',
  );
  await in_urara.say_as_unknown_and_wait(
    '당신은 언제나 올바른 정답만을 말하지만, 혐오스러운 저는 절대로 당신 마음에 드는 모습으로 변할 수 없으니까요……',
  );
  await era.printAndWait(
    '아무것도 믿지 않으면서 오직 사랑만은 비뚤어지게 믿고 있다니, 정말이지 난처한 세계급 난제였다.',
  );
  await era.printAndWait([
    '어떤 반응을 보여야 할까? 이토록 슬프고 염세적인 이에게 사랑받고 있는 자신은, 대체 어떤 약속을 해야 ',
    urara.sex,
    '가 받아들이게 할 수 있을까?',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '역시 아무 말도 없으시군요…… 저는 그래도…… 당신이 마지막엔 제 응석을 조금이라도 받아줘서, 거짓말로라도 곁에 남겠다고 해주길 바랐는데……',
  );
  await urara.say_and_wait([
    '그렇지 않아! 단지 네 감정이 너무 뜨거워서, 원래 『유쾌』하던 ',
    callname,
    '가 『잔소리쟁이』로 변해버린 것뿐이야!',
  ]);
  await era.printAndWait([
    '부서지는 소음들이 정지와 흐름의 경계를 흐리는 가운데, 어느새 나타난 벚꽃색의 그림자가 ',
    me.get_colored_name(),
    '의 곁에 나란히 섰다.',
  ]);
  await era.printAndWait([
    '영웅의 등장인가? 적어도 이번만큼은, ',
    urara.get_colored_name(),
    '는 드디어 ',
    me.get_colored_name(),
    '와(과) 함께 「',
    urara.sex,
    '」의 앞에 섰다.',
  ]);
  await era.printAndWait(
    '옥에 티라면, 왜 어떤 영웅은 달려오자마자 자신의 트레이너를 「잔소리쟁이가 됐다」고 디스하는 걸까?',
  );
  await era.printAndWait([
    urara.get_colored_name(),
    '를 본 「',
    urara.sex,
    '」는 이미 울어서 퉁퉁 부은 눈을 하고서도, 동생 앞에서 허세를 부리는 언니처럼 급히 눈물을 닦았다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '하아…… 결국 우라라는 여전히 모두의 영웅이 되고 싶은 건가요…… 당신 말이에요…… 맨 앞에서 달리는 게 그렇게나 아름답던가요?',
  );
  await in_urara.say_as_unknown_and_wait(
    '처음부터 사람들이 말했던 것처럼 그냥 즐겁게 자기답게 살면 되잖아요. 당신이 정말로 그들을 구할 수 있을 거라 생각하는 거예요?',
  );
  await era.printAndWait([
    '하지만 또 다른 자신의 쏘아붙이는 말에도, ',
    urara.get_colored_name(),
    '는 처음 ',
    me.get_colored_name(),
    '과(와) 대화할 때보다 훨씬 더 확고해져 있었다.',
  ]);
  await urara.say_and_wait(
    '우라라는 그런 거 생각한 적 없어. 모두가 강하니까 우라라도 보답하고 싶을 뿐이야. 그리고……',
  );
  await urara.say_and_wait(
    '방금 다 들었어. 너도 지금까지 많이 힘들었지? 하지만 그렇기 때문에 더 도망칠 수 없어.',
  );
  await urara.say_and_wait(
    '미안해. 네 진심을 들은 건 처음이지만, 그렇다면 우라라는 더욱더 계속 달려 나가야 해!',
  );
  await era.printAndWait([
    '작은 ',
    urara.get_uma_sex_title(),
    '는 주먹을 꽉 쥐었다. 흔들리는 벚꽃빛 눈동자 속에는 마치 ',
    urara.sex_code - 1 ? '언니' : '오빠',
    ' 같은 또 다른 자신의 모습이 비치고 있었다.',
  ]);
  await urara.say_and_wait(
    '왜냐하면, 여기에는 우라라를 누구보다 필요로 하는 사람이 있으니까. 그러니까, 다시 한번 우라라를 믿어줘……?',
  );
  await in_urara.say_as_unknown_and_wait('하…… 이제는 우라라까지 저를 동정하는 건가요……');
  await urara.say_and_wait(
    '다른 사람들 눈에는 보이지 않지만, 우라라를 키워주고 지금까지 지켜봐 준 너도 나의 영웅이니까!',
  );
  await urara.say_and_wait([
    '그러니까 우라라도, ',
    callname,
    '도, 다른 모두가 어떻게 되든 상관없어. 우리와 함께 가자……!',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '의 앞에 서서 마음속 깊이 숨겨져 있던 또 다른 ',
    urara.get_colored_name(),
    '를 마주한 벚꽃색의 ',
    urara.sex,
    '는, 한순간에 예전의 천진난만함을 벗어던진 듯했다.',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 변화를 지켜보던 ',
    me.get_colored_name(),
    '뿐만 아니라, 「',
    urara.sex,
    '」조차 퉁퉁 부은 눈을 크게 뜨며 찰나의 기쁨을 내비쳤다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '하하…… 결국 그렇게 되는 건가요? 우라라가 강해지기 위한 마지막 조각은, 바로 저였군요……',
  );
  await era.printAndWait([
    '하지만 그럼에도 고집 센 ',
    urara.sex,
    '는 갈라져 가는 허무의 세계 속에서 끝내 ',
    urara.get_colored_name(),
    '의 초대에 응하지 않았다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '당신들은 정말 막무가내라니까요. 하지만 저는, 절대로 당신들을 그냥 순순히 보내주지는 않을 거예요……',
  );
  await era.printAndWait([
    '말을 마치자 벤치 위의 「',
    urara.sex,
    '」는 제멋대로인 선언을 남기고 사라졌고, 주변을 감돌던 파열음도 동시에 멈췄다.',
  ]);
  await era.printAndWait([
    '시간이 다시 흐르기 시작했고 새소리와 바람 소리가 두 사람의 곁으로 돌아왔다. 하지만 ',
    urara.sex,
    '의 마지막 발언으로 보아 루프는 아직 계속되고 있는 듯했다.',
  ]);
  await era.printAndWait(
    '문제가 완전히 해결된 것은 아니었으나, 적어도 지금만큼은 남겨진 두 사람의 기분이 평온해졌으며 드디어 서로를 돌볼 여유가 생겼다.',
  );
  await era.printAndWait([
    '시선을 옆으로 돌리자, ',
    me.get_colored_name(),
    '은(는) ',
    urara.get_colored_name(),
    '가 두 손을 뻗어 뺨에서 흘러내리는 눈물을 멍하니 받아내고 있는 모습을 보았다.',
  ]);
  await urara.say_and_wait([
    '어라? ',
    callname,
    ', 우라라 얼굴에 이건…… 우라라 울고 있는 거야? 갑자기 마음이 너무 슬퍼져서 그런 걸까?',
  ]);
  await urara.say_and_wait([
    '이건, ',
    urara.sex,
    '의 마음인 거지? 우라라가 좀 더 일찍 깨달았더라면……',
  ]);

  era.printButton(
    `「괜찮아. 적어도 이번 주는 무사히 끝낼 수 있을 것 같아. 그다음에는 함께 ${in_urara.sex}를 찾으러 가자……」`,
    1,
  );
  await era.input();

  await urara.say_and_wait([
    '……응! 그런데 이제 ',
    urara.sex,
    '가 느껴지지 않아. 대체 어디로 가버린 걸까?',
  ]);

  era.printButton(
    '「친애하는 여신님들께 여쭤보는 건 어때? 내가 알기로 학원 여신상 앞에는 원래 벤치가 없었거든.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '이어 ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '는 모든 것을 지켜본 듯 정적 속에서 미소 짓고 있는 세 여신상을 동시에 올려다보았다――',
  ]);
};