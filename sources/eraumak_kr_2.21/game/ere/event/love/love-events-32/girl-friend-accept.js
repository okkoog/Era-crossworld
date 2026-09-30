const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (tachyon, me, callname) => {
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '의 손에서 약을 건네받았다.',
  ]);
  era.println();
  await tachyon.say_and_wait([callname, '……']);
  era.println();
  await era.printAndWait([tachyon.sex, '가 고개를 들자, 그 눈동자에는 불안함이 서려 있었다.']);
  await era.printAndWait([
    '자신이 약을 마셔버릴까 봐 걱정하는 것일까, 아니면 자신이…… 마시려 하지 않을까 봐 걱정하는 것일까?',
  ]);
  await era.printAndWait([
    '솔직히 말해, ',
    me.get_colored_name(),
    ' 자신조차 앞으로의 행동이 옳을지 확신할 수 없었다.',
  ]);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '은(는) 보증할 수 있었다. 이어질 모든 행동은 분명 진심에서 우러나온 것임을.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 손에 든 약을…… 옆에 있던 폐기용 약품 처리통에 쏟아버렸다.',
  ]);
  era.println();
  await tachyon.say_and_wait('………………아');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 시험관을 비우는 동안, ',
    tachyon.get_colored_name(),
    '은 아무런 소리도 내지 않았다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 전부 쏟아내고 마치 한 세기처럼 긴 시간이 흐른 뒤에야, ',
    tachyon.sex,
    '는 그제야 생각났다는 듯이 작은 목소리로 「아」 소리를 내뱉었다.',
  ]);
  era.println();
  await tachyon.say_and_wait([callname, '……자네, 이것이 무엇을 의미하는지 알고 있나?']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 시험관을 거꾸로 들어, 안의 약제가 한 방울도 남지 않고 비워진 것을 확인했다.',
  ]);
  await era.printAndWait([
    '그제야 ',
    tachyon.get_colored_name(),
    '은 겨우 정신을 차린 듯, 엮어두었던 말들을 쏟아내기 시작했다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '나의 꿈…… 내가 추구하던 가능성. 자네의 이 선택은, 즉 이런 뜻이 아닌가.',
  );
  await tachyon.say_and_wait([
    '나, ',
    tachyon.get_colored_name(),
    '이 모든 것을 완전히 포기하고, 철저히 단념하여, 평범한…… 다른 사춘기 ',
    tachyon.get_teen_sex_title(),
    '와 아무런 차이가 없는……',
  ]);
  await tachyon.say_and_wait([
    '사랑에 빠진 평범한 ',
    tachyon.get_child_sex_title(),
    '가 되라는 것 아닌가. 자네의 말은, 내가 다른 가능성을 버리고 자네와 함께할 가능성을 선택하라는……',
  ]);
  era.println();
  await era.printAndWait([tachyon.sex, '는 말을 매우 빠르게 더듬으며 덧붙였다.']);
  await era.printAndWait(
    '마치 지금이라도 어서 마음을 바꾸라고 스스로를 설득하는 듯했고, 이 결정이 얼마나 어리석은 선택인지 알려주려는 듯했다.',
  );
  await era.printAndWait([
    '자신이 ',
    tachyon.sex,
    '를 위해 희생하기를 바라면서도, 한편으로는 나쁜 사람이 되고 싶지 않아 이토록 이기적이고 뻔뻔한 권고를 늘어놓는 것이었다.',
  ]);
  era.println();
  await era.printAndWait([
    '하지만 ',
    tachyon.sex,
    '와 오랫동안 함께해온 ',
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '의 말속에 숨겨진 진심을 꿰뚫어 볼 수 있었다.',
  ]);
  await era.printAndWait('말을 더듬는 이유는 두려움 때문이었다. 이 모든 것이 자신의 오해일까 봐.');
  await era.printAndWait(
    '말의 속도가 빠른 이유는 상대가 번복하는 것을 듣고 싶지 않기 때문이었다. 마치 어린아이가 상대의 승낙을 유도하기 위해 일부러 말을 흐리는 것과 같았다.',
  );
  await era.printAndWait(
    '계약서에 서명하기 직전, 당사자가 마음을 바꿀까 봐 계약 내용을 반복해서 읊어대는 보험 설계사 같은 모습이었다.',
  );
  await era.printAndWait(
    '이 모든 판단의 근거는, 거절의 말을 내뱉으면서도 쉴 새 없이 흔들리는 꼬리,',
  );
  await era.printAndWait(
    '빳빳하게 곧추선 귀, 그리고 아무도 모를 거라 생각하겠지만 얼굴에 너무나 명확히 드러난—— 안심하는 표정이었다.',
  );
  era.println();
  await tachyon.say_and_wait([
    '알고 있나, ',
    callname,
    '…… 자네는 줄곧 가능성의 저편을 보고 싶어 하지 않았나? 만약 이대로라면 정말로……',
  ]);
  era.println();
  await era.printAndWait('이제 됐다.');
  await era.printAndWait([
    tachyon.sex,
    '가 언제까지 허세를 부릴 수 있을지 지켜보는 것도 꽤 재미있겠지만,',
  ]);
  await era.printAndWait([
    '그랬다가는 나중에 분명 수치심에 눈이 뒤집힌 ',
    tachyon.sex,
    '에게 보복을 당할 것이 뻔했다.',
  ]);
  await era.printAndWait([
    '그리하여 ',
    me.get_colored_name(),
    '은(는) 어떤 방법이 ',
    me.get_colored_name(),
    '의 가장 깊은 각오를 보여줄 수 있을지 고민했다.',
  ]);
  era.print([me.get_colored_name(), '은(는) 결심했다……']);
  era.printButton(`${tachyon.sex} 를 껴안는다`, 1);
  era.printButton(`${tachyon.sex} 에게 입 맞춘다`, 2);
  era.printButton(`${tachyon.sex} 의 귀를 살짝 깨문다`, 3);
  const temp = await era.input();
  await era.printAndWait([tachyon.sex, '의 횡설수설이 뚝 끊겼다.']);
  switch (temp) {
    case 1:
      await era.printAndWait([
        '사람은 돌발적인 상황에 직면했을 때 두 가지 일을 동시에 수행하지 못한다. ',
        tachyon.get_uma_sex_title(),
        ' 역시 마찬가지였다.',
      ]);
      await era.printAndWait([
        '따라서 당연하게도, ',
        me.get_colored_name(),
        '의 갑작스러운 포옹에 깜짝 놀라 익숙한 수컷의 향기에 휩싸인 채,',
      ]);
      await era.printAndWait([
        '이 온기를 마음껏 만끽하게 된 ',
        tachyon.get_colored_name(),
        '은 더 이상 ',
        tachyon.sex,
        '의 장광설을 이어갈 수 없었다.',
      ]);
      break;
    case 2:
      await era.printAndWait(
        '예로부터 전해 내려오는 사랑의 표현 방식이야말로, 입을 막는 동시에 감정을 전할 수 있는 가장 강력한 기술일지도 모른다.',
      );
      await era.printAndWait([
        tachyon.sex,
        '의 입술은 ',
        tachyon.sex,
        '본인과도 같아서, 강해 보이던 방어선은 접촉하는 순간 무너져 내리며 부드럽고 여린 속살을 드러냈다.',
      ]);
      await era.printAndWait(
        '바위처럼 견고하던 아성은 혀끝의 탐색 한 번에 순식간에 붕괴되어, 적군의 거침없는 진입을 허용할 뿐이었다.',
      );
      await era.printAndWait(
        '충직해 보이던 혀 역시 자신의 굵고 긴 혀가 닿는 순간 수줍은 소녀처럼 변해, 수동적으로 얽혀 들었다.',
      );
      break;
    case 3:
      await era.printAndWait('단절된 말 대신 참지 못한 교성이 터져 나왔다.');
      await era.printAndWait([
        '세간에 잘 알려져 있듯, 대부분의 ',
        tachyon.get_uma_sex_title(),
        '가 가진 인간과는 다른 기관은 ',
        tachyon.sex,
        '들에게 있어 가장 민감한 부위였다.',
      ]);
      await era.printAndWait([
        '그러니 ',
        tachyon.get_colored_name(),
        '이 내뱉은 묘한 상상을 불러일으키는 교성을 누가 탓할 수 있겠는가.',
      ]);
      await era.printAndWait([
        '오히려 ',
        me.get_colored_name(),
        '의 품에 안겨 귀가 잡힌 상태에서도 쓰러지지 않고 버티고 있는 ',
        tachyon.get_colored_name(),
        '이 대단할 정도였다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……아…… 잠시만…… 간지러워……']);
      era.println();
      await era.printAndWait([
        '거절이라기보다는 거절하는 척 받아들이는 듯한 ',
        tachyon.get_colored_name(),
        '의 목소리를 듣고, ',
        me.get_colored_name(),
        '은(는) 손길을 바꿔 좀 더 거칠게 ',
        tachyon.get_uma_sex_title(),
        '의 탄력 있고 민감한 귀끝을 주물렀다.',
      ]);
      era.println();
      await tachyon.say_and_wait('히잇…… 기다려…… 안 돼……');
      era.println();
      await era.printAndWait([
        '장장 30초를 버티던 ',
        tachyon.get_colored_name(),
        '은 결국 패배하여 ',
        me.get_colored_name(),
        '의 품속에 완전히 늘어졌다.',
      ]);
  }
  await era.printAndWait([
    tachyon.sex,
    '가 완전히 저항을 포기한 뒤에야, ',
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '를 놓아주었다.',
  ]);
  era.println();
  await tachyon.say_and_wait([callname, '……']);
  era.println();
  await era.printAndWait([
    tachyon.sex,
    '는 아직 조금 전의 체험에서 헤어 나오지 못한 듯, 정신을 차리지 못하고 있었다.',
  ]);
  await era.printAndWait([
    '그리고 이 순간, ',
    me.get_colored_name(),
    '은(는) 일생에 단 한 번뿐일 진심 어린 고백을 시작했다.',
  ]);
  era.printButton('「사랑해, 아그네스 타키온」', 1);
  await era.input();
  await tachyon.say_and_wait('!!!!??????');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '의 말을 듣자마자 ',
    tachyon.sex,
    '의 꼬리가 순식간에 곤두섰다. 마치 털이 삐죽 선 고양이 같았다.',
  ]);
  era.println();
  await tachyon.say_and_wait([
    new Array(5).fill(callname.substring(0, 1)).join(''),
    callname,
    '!? 지금 뭐라고 한 건가!?',
  ]);
  era.println();
  await era.printAndWait([
    '이런, ',
    tachyon.get_colored_name(),
    '은 의외로 귀가 좋지 않았던 모양이다.',
  ]);
  await era.printAndWait('그렇다면 몇 번이고 더 말해주기로 했다.');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 처음 ',
    tachyon.get_colored_name(),
    '을 보았을 때를 회상했다.',
  ]);
  await era.printAndWait([tachyon.sex, '의 주법, ', tachyon.sex, '의 덧없음.']);
  await era.printAndWait([
    '그 무엇이든 ',
    me.get_colored_name(),
    '을(를) 열광하게 했고, ',
    tachyon.sex,
    '에게 매료되게 했다.',
  ]);
  await era.printAndWait(['그래, 그것은 「아그네스 타키온」 이었다.']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '의 데뷔전을 회상했다.',
  ]);
  await era.printAndWait(
    '빛처럼 당연하게 레이스에 임하고, 당연하게 모든 것을 초월하며, 당연하게 승리를 거머쥐었다.',
  );
  await era.printAndWait([
    '「레이스는 실험 결과의 검증에 불과하다」고 말하며 차가운 표정으로, 심지어 냉혹한 태도로 레이스에 임하던 ',
    tachyon.sex,
  ]);
  await era.printAndWait(['그래, 그것은 「아그네스 타키온」 이었다.']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    me.get_colored_name(),
    '이(가) 처음으로 ',
    tachyon.sex,
    '에게 도시락을 만들어주었을 때를 회상했다.',
  ]);
  await era.printAndWait('자신의 가능성을 증명하기 위해 스스로를 실험체로 삼는 것조차 마다하지 않았다.');
  await era.printAndWait([
    '상상을 초월하고 한계를 돌파하는 가능성을 기대하며 눈동자를 번뜩이던 ',
    tachyon.sex,
  ]);
  era.println();
  await era.printAndWait(['그래, 그것은 「아그네스 타키온」 이었다.']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 밤을 지새우며 실험에 몰두하던 ',
    tachyon.sex,
    '를 회상했다.',
  ]);
  await era.printAndWait('연구를 위해서라면 몸을 바치고, 꿈을 위해서라면 건강마저 내던졌다.');
  await era.printAndWait([
    '육체는 초라하고 꾀죄죄했으나, 눈동자만큼은 꿈을 향한 열망으로 빛나던 ',
    tachyon.sex,
  ]);
  await era.printAndWait(['그래, 그것은 「아그네스 타키온」 이었다.']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 처음으로 함께 외출했을 때의 ',
    tachyon.sex,
    '를 회상했다.',
  ]);
  await era.printAndWait(['변색 양배추 주스 소동과 ', tachyon.sex, '의 심술.']);
  await era.printAndWait([
    '그런 사소한 일로 고집을 피우고, 뽑기 인형 하나에 기뻐하던 그런 평범한 ',
    tachyon.sex,
  ]);
  await era.printAndWait(['그래, 그것은 「아그네스 타키온」 이었다.']);
  era.println();
  await era.printAndWait([
    '마지막으로…… 지금 눈앞에, ',
    me.get_colored_name(),
    '의 앞에 서 있는 ',
    tachyon.sex,
    '이다.',
  ]);
  await era.printAndWait([
    '긴장한 듯 시선을 헤매며 ',
    me.get_colored_name(),
    '의 다음 말을 기다리는 ',
    tachyon.sex,
    '.',
  ]);
  await era.printAndWait([
    '본래 감정이 메말랐던 두 눈이 이제는 행복과 사랑으로 가득 찬 ',
    tachyon.sex,
  ]);
  await era.printAndWait([
    '뺨을 붉히며 수줍어하는, 누가 보아도 사랑에 완전히 취해버린 평범한 ',
    tachyon.get_teen_sex_title(),
    '인 ',
    tachyon.sex,
    '. ',
  ]);
  era.printButton(
    '「사랑해, 아그네스 타키온. 내가 사랑하는 건 『너』지, 너의 주법이나 꿈, 가능성이 아니야」',
    1,
  );
  await era.input();
  await era.printAndWait('틀림없다.');
  await era.printAndWait(['모든 것의 주체는 ', tachyon.sex, '에게 있었다.']);
  await era.printAndWait([
    '처음에는 정말로 ',
    tachyon.sex,
    '의 주법과 광기에 이끌렸던 것일지도 모른다.',
  ]);
  await era.printAndWait([
    '하지만 지금, ',
    tachyon.get_colored_name(),
    '이라는 이 ',
    tachyon.get_uma_sex_title(),
    '가 ',
    me.get_colored_name(),
    '의 마음속에서 차지하는 비중은 이미 그런 것들을 넘어섰다.',
  ]);
  await era.printAndWait([me.get_colored_name(), '의 생각 또한 이미 변한 지 오래였다.']);
  await era.printAndWait([
    '「',
    tachyon.get_colored_name(),
    '의 꿈을 이루기 위해 헌신한다」 가 아니었다.',
  ]);
  await era.printAndWait([
    '「',
    tachyon.get_colored_name(),
    '을 위해서라면 나의 모든 것을 쏟아부을 수 있다」 는 것이었다.',
  ]);
  await era.printAndWait('그러니……');
  era.printButton(
    '「설령 네가 더 이상 달리지 못하게 되어도, 가능성을 쫓지 않게 되어도, 나는 변함없이 너를 사랑할 거야」',
    1,
  );
  await era.input();
  await era.printAndWait('따지고 보면 처음부터 끝까지 이토록 간단한 문제였다.');
  await era.printAndWait([
    '「어머니와 아내가 물에 빠지면 누구부터 구할 것인가」와 같은 질문의 주인공이 「',
    tachyon.get_colored_name(),
    '」 과 「',
    tachyon.get_colored_name(),
    '의 재능」 으로 바뀌었을 뿐이었다.',
  ]);
  await era.printAndWait([
    '…………이렇게 간단한 문제를 이토록 복잡하게 만들 수 있다니, 이것 또한 ',
    tachyon.sex,
    '의 재주일 것이다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '의 번거로운 성격에 그만 쓴웃음을 지었다.',
  ]);
  await era.printAndWait('하지만, 이제는 안심할 수 있을 것이다.');
  era.println();
  await tachyon.say_and_wait([callname, '……']);
  era.println();
  await era.printAndWait([
    '그렇게 생각하던 ',
    me.get_colored_name(),
    '의 눈에 ',
    tachyon.sex,
    '의 얼굴을 타고 흐르는 기쁨의 눈물과 환한 미소가 들어왔다.',
  ]);
  await era.printAndWait(['그것은 마치 소나기가 지나간 뒤의 코스모스처럼 고왔다.']);
  era.drawLine();
  await tachyon.say_and_wait([callname, '~~ 오늘의 약이 왔네!']);
  era.println();
  await era.printAndWait([
    '다음 날, ',
    me.get_colored_name(),
    '은(는) 분명 전날까지만 해도 이제 연구를 계속할 수 없다고 말했던 모 ',
    tachyon.get_uma_sex_title(),
    '를 보았다.',
  ]);
  await era.printAndWait(
    '평소보다 훨씬 위험해 보이는 형광색 약을 들고 룰루랄라 트레이닝실로 들어오는 모습이었다.',
  );
  era.println();
  await tachyon.say_and_wait(
    '어서 어서, 오늘의 약은 지금까지의 발광형 약제 중에서도 집대성이라네. 마시면 2만 4천 가지의 RGB 색상을 낼 수 있지~~',
  );
  await tachyon.say_and_wait(
    '아참, 이번 주말에는 야외 실지 실험을 나갈 거니까 기존 일정은 전부 비워두게. 알겠나?',
  );
  await tachyon.say_and_wait(
    '그리고 오늘 도시락은 30분 일찍 가져오게나. 중요한 실험이 있거든.',
  );
  await tachyon.say_and_wait(
    '아, 가급적이면 국물 있는 건 피해주게. 실험 데이터에 지장을 줄 수도 있으니까.',
  );
  era.println();
  await era.printAndWait(
    '들어오자마자 흥분한 연구자는 실험과 연구에 대해 쉴 새 없이 떠들어대기 시작했다.',
  );
  await era.printAndWait([
    '아무리 ',
    me.get_colored_name(),
    '(이)라 해도 이 광경에는 잠시 멍해질 수밖에 없었다.',
  ]);
  await era.printAndWait(
    '물론 상대의 무리한 요구 때문은 아니었다. 평소의 요구는 이보다 훨씬 더 무리한 편이었으니까. 하지만……',
  );
  era.printButton('「더 이상 연구는 못 한다고 하지 않았어?」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 아직 기억하고 있었다. 어제 눈물까지 글썽이며 이제 연구에 집중할 수 없다고, 가능성을 찾을 수 없다고 말하던 ',
    tachyon.get_colored_name(),
    '의 그 가련한 모습을.',
  ]);
  await era.printAndWait([
    '지금의 ',
    tachyon.sex,
    '는 전날의 낙담과 붕괴를 전혀 찾아볼 수 없었다.',
  ]);
  era.println();
  await tachyon.say_and_wait(['……내가 한 말은 진심이라네, ', callname, '. ']);
  await tachyon.say_and_wait(
    '나는 이제 나 자신의 가능성에만 몰두하는 연구는 할 수 없게 되었어.',
  );
  await tachyon.say_and_wait('머릿속이 온통 자네 생각뿐이라서 말이야……');
  await tachyon.say_and_wait(
    '지금 이 순간에도 자네의 기뻐하는 모습, 화내는 모습, 부끄러워하는 모습, 긴장한 모습이 떠오르네……',
  );
  await tachyon.say_and_wait('나를 이렇게 만들어버렸으니, 자네가 끝까지 책임져야 할 거야.');
  era.printButton('「미…… 미안해?」', 1);
  await era.input();
  await era.printAndWait('이게, 이게 내 잘못인가?');
  await era.printAndWait('그나저나 이렇게 직구로 애정을 표현하니 역시 쑥스럽지만……');
  await era.printAndWait('아니, 그보다 조금 전의 이야기와 무슨 상관이야?');
  await era.printAndWait(
    '왜 지금 여전히 평소처럼 연구를 하고 있는지에 대한 설명은 안 됐잖아?',
  );
  era.println();
  await tachyon.say_and_wait('그러니까…… 나는 이제 나 혼자만을 생각할 수는 없게 되었다는 걸세.');
  await tachyon.say_and_wait(
    '내가 상상할 수 있는 모든 가능성에는…… 반드시 자네가 곁에 있어야만 하네. 앞으로 내가 고찰할 수 있는 건, 오직 『자네와 함께하는』 가능성뿐일 테니까.',
  );
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 순간 ',
    tachyon.sex,
    '의 말을 이해하지 못하고 ',
    tachyon.get_colored_name(),
    '을 뚫어지게 쳐다보았다.',
  ]);
  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 ',
    me.get_colored_name(),
    '의 시선에 조금씩 어색함을 느끼기 시작했다.',
  ]);
  await era.printAndWait(
    '그리고 마치 댐이 무너지듯, 아무렇지 않은 척하던 표정은 사랑하는 이의 시선이라는 결정타 한 방에',
  );
  await era.printAndWait('순식간에 뺨을 붉힌 부끄러워하는 표정으로 변했다.');
  era.println();
  await tachyon.say_and_wait('그러니까…… 그게…… 주말 실험은…… 시간을 낼 수 있겠지……?');
  await tachyon.say_and_wait(
    '일반적으로 말하는, 그, 소위 데이트라고 불리는 행위가 우리 둘에게 얼마나 적합한지 측정하기 위함이라네…………',
  );
  await tachyon.say_and_wait(
    '아무튼! 토요일 아침 9시, 늦지 말게! 그리고 내 아침밥도 챙겨오고! 이상이야!',
  );
  await tachyon.say_and_wait(
    '그리고, 오늘 점심 도시락은…… 가능하다면…… 한입에 먹기 편한 것으로 준비해주게……',
  );
  await tachyon.say_and_wait(
    '그게…… 연인 관계에서의 『아~~앙』 이라는 행위가 심박수 지수에 미치는 영향을 측정하고 싶거든…… 괜찮겠지?',
  );
  era.println();
  await era.printAndWait([
    '부끄러움을 참아가며 할 말을 다 하는 ',
    tachyon.sex,
    '의 모습에 ',
    me.get_colored_name(),
    '은(는) 그만 웃음이 터졌다.',
  ]);
  await era.printAndWait('이런 상황에서는 뭐라고 대답해야 할까.');
  await era.printAndWait('이 까다롭고 제멋대로지만, 세상에서 가장 귀여운 광기 어린 과학자에게.');
  await era.printAndWait([
    '이 사랑스럽고 애틋하며, 세상에서 가장 소중한 사랑에 빠진 ',
    tachyon.get_teen_sex_title(),
    '에게.',
  ]);
  era.println();
  await me.say_and_wait([
    '알겠습니다…… 나의 ',
    tachyon.sex_code - 1 ? '공주': '왕자',
    '님.',
  ]);
  await print_event_name('초광속의 공주', tachyon);
  await sys_love_uma_in_event(32);
};