const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,HookArg):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.febr_sta] = async (urara, me, in_urara, callname) => {
    await print_event_name(
      [race_infos[race_enum.febr_sta].get_colored_name(), '를 향해!'],
      urara,
    );
    await in_urara.say_as_unknown_and_wait(
      '때로는 저조차도 운이라든가 운명 같은 것들에 정말로 어떤 도리가 있는 건 아닐까 의심하게 될 때가 있어요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '당신은 어떻게 생각하시나요? 하지만 운명을 뛰어넘도록 ',
      urara.get_uma_sex_title(),
      '들을 이끄는 것도 트레이너 ',
      me.get_adult_sex_title(),
      '의 사명이겠죠.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '하지만, 그 운명을 뛰어넘지 못한 ',
      urara.get_uma_sex_title(),
      '들은, ',
      urara.sex,
      '의 소망처럼 함께 행복을 찾을 수 있을까요?',
    ]);
    era.drawLine();
    await era.printAndWait([
      urara.get_colored_name(),
      '와 이미 몇 번째인지 모를 레이스 대기 통로에 서서, ',
      me.get_colored_name(),
      '은(는) ',
      urara.sex,
      '와 습관처럼 레이스 전 대화를 나눴다.',
    ]);
    await era.printAndWait([
      '하지만 이번에는 주변의 분위기에 휩쓸린 것인지, 평소처럼 그렇게 긴장하지는 않았음에도 어린 ',
      urara.get_uma_sex_title(),
      '의 얼굴에는 웃음기가 없었다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 역시 밖에는 사람이 정말 많네. 게다가 여기 있는 사람들, 지난번보다 표정이 더 진지해 보여.',
    ]);

    era.printButton('「하지만 우라라도 지난번처럼 별로 긴장되지는 않지?」', 1);
    await era.input();

    await urara.say_and_wait('응. 우라라가 걱정되는 건 저쪽이야.');
    await era.printAndWait([
      '담당의 시선을 따라가자, ',
      me.get_colored_name(),
      '은(는) 훈련장에서 몇 번 마주친 적이 있는 듯한 ',
      urara.get_uma_sex_title(),
      '를 발견했다.',
    ]);
    await era.printAndWait([
      '마치 주변의 분위기와 격리된 듯, ',
      urara.sex,
      '는 통로 구석에서 혼자 레이스 전 준비 운동을 하고 있었으며, 그 표정은 무서울 정도로 굳어 있었다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '는 ',
      urara.get_colored_name(),
      '의 친구인 모양이지만, 왜 저기에 혼자 서 있는 걸까. 혼자 출주한 걸까? ',
      urara.sex,
      '의 트레이너는 어디에 있는 거지?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 표정에서 의혹을 읽어낸 ',
      urara.get_colored_name(),
      '는 즉시 ',
      me.get_colored_name(),
      '에게 사정을 설명하기 시작했다.',
    ]);
    await urara.say_and_wait([
      '쟤는 우라라의 친구야. 자주 같이 병주 훈련을 하면서 알게 됐어. 우리 거리가 잘 맞는 것 같거든.',
    ]);
    await urara.say_and_wait([
      '하지만 우라라랑 다른 점은, ',
      urara.sex,
      '는 예전부터 정말 대단했어. 트레이너가 없는데도 지금까지 계속 달려온 거야.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 적성이 비슷하다면 훈련을 함께하는 것도 이상한 일은 아니지만, 경기장에서 마주치는 것은 이번이 처음일 것이다.',
    ]);
    await era.printAndWait([
      '그런데 트레이너가 없다고? 설마 데뷔 때부터 지금까지 혼자 훈련하고 홀로 출주해 온 걸까?',
    ]);
    await urara.say_and_wait([
      '저 애는 엄청 승부욕이 강하고 계속 G1을 목표로 삼아왔어. 그래서 이번 레이스를 분명 엄청나게 중요하게 생각하고 있을 거야.',
    ]);
    await urara.say_and_wait([
      '하지만 레이스를 준비하느라 오랫동안 웃지 못했던 것 같아. 만약 이번 레이스에서 ',
      urara.sex,
      '가 이길 수 있다면, 마음이 좀 편해질 수 있을 텐데……',
    ]);
    await era.printAndWait(
      '과연 그렇군. 하지만 지금 당장 해결할 수 있는 문제는 아니었다. 나중에 따로 이야기를 나눠볼 기회를 가질 수는 있겠지만, 지금은……',
    );

    era.printButton('「하지만 지금, 우라라가 친구에게 그냥 1착을 양보할 건 아니지?」', 1);
    await era.input();

    await urara.say_and_wait([
      '당연하지! ',
      callname,
      '가 무슨 말을 하는지 알아. 그리고 우라라는 이미 결정했어. 열심히 해서 이길 거야!',
    ]);
    await urara.say_and_wait([
      '그저 ',
      urara.sex,
      '의 지금 모습이, 우라라는 너무 걱정돼서……',
    ]);

    era.printButton('「알았어. 일단 레이스에 집중하고, 남은 건 나중에 생각할까?」', 1);
    await era.input();

    await urara.say_and_wait([
      '그렇네. 걱정만 한다고 해결되는 건 아무것도 없으니까. 그럼 ',
      callname,
      ', 나 먼저 다녀올게!',
    ]);

    era.printButton('「응! 오늘도 힘내!」', 1);
    await era.input();

    await era.printAndWait([
      '입장 신호가 울림과 동시에 ',
      me.get_colored_name(),
      '에게 가볍게 손을 흔든 뒤, 다시 미소를 머금은 ',
      urara.get_colored_name(),
      '가 먼저 경기장으로 뛰어 나갔다.',
    ]);
    await era.printAndWait([
      '그런데 그 ',
      urara.get_colored_name(),
      '의 친구가 뒤쪽에서 ',
      me.get_colored_name(),
      '과(와) 스쳐 지나갈 때, 공간이 점차 색을 잃어가며 누군가 슬로 모션을 건 듯 느려졌다.',
    ]);
    await era.printAndWait([
      '모습은 보이지 않았지만, 악마의 등장이 늘 속삭임을 동반하듯 익숙한 말투가 다시금 ',
      me.get_colored_name(),
      '의 귓가에 맴돌았다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '걱정하지 마세요. 우라라의 직감처럼, 설령 우라라가 지더라도 ',
      urara.sex,
      '에게 다음은 없을지도 모르니까요.',
    ]);
    await era.printAndWait([
      '오늘 「',
      in_urara.sex,
      '」의 말은 유난히 귀에 거슬렸다. 덕망이라고는 느껴지지 않는 발언에 좋은 대답이 나갈 리 없었다.',
    ]);

    era.printButton(
      '「그게 또 무슨 소리야? 어렵게 출주하는데, 누구에게든 좀 좋은 말을 해줄 수는 없는 거야?」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '오해하지 마세요, 글자 그대로의 의미니까요. 당신은 트레이너이니, 저 학생의 다리가 어떤지 봐주시겠어요?',
    );
    await era.printAndWait([
      '느려진 시간 속에서 ',
      me.get_colored_name(),
      '은(는) 그 ',
      urara.get_teen_sex_title(),
      '를 희망으로 이끄는 두 다리를 바라보았다. 그러나 곧 꿈이 부서지는 미래를 미리 본 것처럼 미간을 찌푸렸다.',
    ]);
    await era.printAndWait([
      '어떻게 표현해야 할까…… 나쁘게 말하지 않더라도, ',
      urara.sex,
      '가 레이스 ',
      urara.get_uma_sex_title(),
      '로서 가질 수 있는 「유통기한」은 거의 끝나가고 있었다.',
    ]);
    await era.printAndWait([
      '과연 트레이너 없이도 ',
      urara.sex,
      '는 모든 면에서 훌륭하게 해내 왔지만, 홀로 데뷔한 그 용기에도 불구하고 ',
      urara.sex,
      '는 세 여신의 가호를 받지 못했다.',
    ]);
    await era.printAndWait(
      '결국 다시 돌아온 화두는 「평범함의 한계」, 「재능의 끝」, 그리고 「소망을 이루지 못하는 대다수」였다.',
    );
    await era.printAndWait([
      '하지만 지금은 이런 논쟁을 벌일 때가 아니었다. ',
      me.get_colored_name(),
      '은(는) 더 이상 ',
      urara.sex,
      '의 페이스에 휘말릴 생각이 없었다.',
    ]);
    await era.printAndWait(
      '아무리 상황이 엄중하다 한들, 오직 세 여신만이 답을 줄 수 있는 이 문제를 일개 트레이너가 답할 수는 없는 노릇이었다.',
    );

    era.printButton(
      `「결국 ${urara.sex}의 상황은 외부인이 주관적으로 판단할 게 아냐. 게다가 ${urara.sex}는 겉보기와는 다를지도……」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '주도권을 잡으려던 ',
      me.get_colored_name(),
      '의 변명은, ',
      in_urara.get_colored_name(),
      '의 맑은 웃음소리로 구성된, 그러나 내용은 지극히 순수한 조롱에 의해 가로막혔다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '당신의 궤변이 싫지는 않아요. 하지만 당신도 제가 가리키는 것이, ',
      urara.sex,
      '와 같은 무대에서 경쟁할 어린 노력가라는 걸 알고 계시잖아요?',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '승리를 선택한 가여운 우라라는, 결승선에 들어오기 전에 모든 것을 잃게 될 친구를 마주할 마음의 준비가 되었을까요?',
    );
    await in_urara.say_as_unknown_and_wait([
      urara.sex,
      '는 곧 추락할 자신의 친구에게, 그 『완벽한 회장님』조차 줄 수 없었던 미소를 가져다줄 수 있을까요?',
    ]);
    await era.printAndWait(
      '가슴 속에서 무언가 치밀어 올랐다. 좋다, 그렇게 묻는단 말이지? 대체 어디서 나타난 꼬맹이냐고——',
    );

    era.printButton(
      '「네 수수께끼에는 대답하지 않겠어. 지금 우라라는 레이스를 해야 하니까, 장난은 그만하고 어서 떠나줘.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '분노 속에서도 최소한의 예의를 지키며, ',
      me.get_colored_name(),
      '은(는) 그 ',
      { color: in_urara.color, content: '「닿을 수 없는 우라라」' },
      '에게 축객령을 내렸다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '아, 그렇겠네요. 우라라는 아직 ',
      urara.sex,
      '의 친구가 어떤 모습이 될지조차 모르고 있으니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      urara.sex,
      '가 후회하는 모습을 아직 보지 못했으니, ',
      urara.sex,
      '의 트레이너 ',
      me.get_adult_sex_title(),
      '께서도 대답할 수 없는 게 당연하겠죠. 화를 내는 것도 이해가 가네요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '그럼 다음에 또 봐요. 우라라를 잘 돌봐주셔야 해요?',
    );

    era.printButton(
      '「몇 번이나 말했잖아, 잘 돌볼 거라고! 그러니까 다음엔 제발 똑바로 말해!」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '점차 흐름을 되찾는 공기 속에서, ',
      me.get_colored_name(),
      '은(는) 분노하며 뒤돌아서서 멀어져가는 목소리를 향해 주먹을 휘둘렀다.',
    ]);
    await era.printAndWait([
      '당연하게도 ',
      me.get_colored_name(),
      '이(가) 서 있는 통로에는 이미 아무도 없었고, 아무 일도 일어나지 않았다……',
    ]);
  };

  handlers[race_enum.elm_sta] = async (urara, me, in_urara, callname) => {
    if (era.get('cflag:52:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name('엘름 스테이크스를 향해!', urara);
    await era.printAndWait([
      '인파를 가로질러 경기장 관중석의 맨 뒷줄에 서서, ',
      me.get_colored_name(),
      '은(는) 어둑해진 하늘 아래 또 다른 벚꽃색의 인물과 함께 관중석 꼭대기에 조용히 서 있었다.',
    ]);
    await era.printAndWait([
      '눈앞의 풍경은 여전히 슬로 모션처럼 흔들리고 있었지만, 「',
      urara.sex,
      '」에게 익숙해진 ',
      me.get_colored_name(),
      '은(는) 그저 차분하게 이어질 대화를 기다렸다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그날 밤에, 당신은 ',
      urara.sex,
      '와 무슨 이야기를 나누었나요?',
    ]);
    await era.printAndWait([
      '대화가 없는 초조함을 더 이상 견디지 못한 듯, 음침한 벚꽃색의 인물은 ',
      me.get_colored_name(),
      '에게 뜻밖의 질문을 던졌다.',
    ]);

    era.printButton(
      `「석 달이나 지났는데 아직도 모를 줄은 몰랐네. 네가 우라라의 『가장 친한』 친구 아니었어?」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '말이 끝나기 무섭게 사람을 꿰뚫을 듯한 시선이 ',
      me.get_colored_name(),
      '을(를) 쏘아보았으나, 결국 ',
      urara.sex,
      '는 관심 없다는 듯 고개를 옆으로 돌렸다.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '……됐어요. 말하고 싶지 않다면 상관없어요. 제가 꼭 알아야 할 필요도 없으니까.',
    );
    await in_urara.say_as_unknown_and_wait([
      '그런데 이번엔 우라라와 같이 있지 않네요? 예전처럼 ',
      urara.sex,
      '의 곁에 가서 배웅해주지 않는 건가요?',
    ]);

    era.printButton(
      '「우라라가 혼자 있고 싶다고 했거든. 그리고 이쪽도 다른 계획이 있어서 말이야. 끝까지 지켜볼 거야?」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '아뇨, 저에게 그 정도 인내심이 있다고 생각하시나요?',
    );

    era.printButton('「그거 정말 유감이네.」', 1);
    await era.input();

    await era.printAndWait([
      '옆자리의 목소리가 뒤도 돌아보지 않고 떠나가고, 다시 색을 되찾는 하늘을 보며 ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 고개를 저었다.',
    ]);
    await era.printAndWait([
      '날씨는 참 좋은데, 왜 또 다른 ',
      in_urara.get_colored_name(),
      '만 있으면 모든 것이 잿빛으로 변하는 걸까?',
    ]);
    await era.printAndWait([
      '아무리 예의 바르게 굴어도 ',
      urara.sex,
      '의 성격이 꼬여있는 건 여전했다. 그러니 다음에 할 일은 어쩌면 ',
      urara.sex,
      '보다 내가 더 잘할 수 있을지도 모른다.',
    ]);
    await era.printAndWait([
      '레이스 참가자들의 입장 시간을 확인하고, ',
      me.get_colored_name(),
      '은(는) 앞줄에 서 있는 「여러분」에게 신호를 보냈다——',
    ]);

    era.drawLine();
    await urara.print_and_wait('곧 입장이야. 지금 내 상태는 어떨까?');
    await urara.print_and_wait(
      '몸 상태는 줄곧 아무 문제 없었어. 우라라도 달리는 걸 갈망하고 있어. 하지만 역시 자꾸 나타나네, 친구의 슬픈 얼굴이……',
    );
    await urara.print_and_wait([
      '망설이며 통로 밖의 빛 속으로 발을 내디뎠다. 습관처럼 뒤돌아 손을 흔들었지만, ',
      callname,
      '가 곁에 없다는 걸 깨달았다.',
    ]);
    await urara.print_and_wait([
      '맞아, 이번엔 혼자서도 괜찮다고 우라라가 말했지. 그래서 ',
      callname,
      '를 보내버렸는데, 아직 마음이 진정되지 않았어……',
    ]);
    await urara.print_and_wait(
      '게다가 모두조차 없어. 나 혼자뿐인 레이스는 항상 무언가 부족한 느낌이야. 하지만 이제 더 이상 생각할 시간은 없어.',
    );
    await urara.print_and_wait(
      '그런데 경기장으로 들어서며 쏟아지는 햇살을 마주했을 때, 우라라는 다시 익숙한 응원 소리를 들었다.',
    );
    await urara.print_and_wait([
      '그건 매 레이스 때마다 들을 수 있었던, 모두의 목소리, ',
      callname,
      '의 목소리였다.',
    ]);
    await era.printAndWait('응원하는 사람들 「어이—— 우라라——!」');
    await urara.print_and_wait(
      '잘못 들은 걸까? 하지만 소리가 바로 옆에서 들리는 것처럼 선명해. 환각이 아닐 거야.',
    );
    await urara.print_and_wait(
      '우라라가 희망을 품고 소리가 들리는 쪽을 바라보자, 환각이라 믿었던 환상은 즉시 현실이 되어 눈앞에 나타났어.',
    );
    await urara.print_and_wait(
      '펼쳐진 응원 현수막 아래, 익숙한 사람들이 익숙한 미소를 지으며 가장 가까운 곳에서 우라라를 기다리고 있었어.',
    );
    await era.printAndWait('응원하는 사람들 「어이—— 우라라—— 여기야——!」');
    await urara.say_and_wait(
      '어라? 모두들…… 잠깐, 여기 홋카이도라고!? 대체 어떻게——',
    );
    await urara.print_and_wait(
      '소란스러운 소음 사이로 우라라의 의문을 읽어낸 듯, 우라라를 지지해주는 사람들이 각자 우라라를 향한 마음을 전하기 시작했어.',
    );
    await era.printAndWait(
      '응원하는 사람들 「홋카이도든 어디든, 우라라에게 도움이 된다면 우리는 달려올 수 있어!」',
    );
    await era.printAndWait(
      '상점가 사람들 「그리고—— 우라라, 미안해! 우라라가 달리는 모습만 봐도 행복하다고 입버릇처럼 말해왔지만……」',
    );
    await era.printAndWait(
      '상점가 사람들 「그건 우라라를 믿지 못했다는 뜻이기도 했어. 제대로 된 응원이 아니었을지도 몰라!」',
    );
    await urara.print_and_wait(
      '정말 괜찮은데. 우라라는 계속 달릴 수만 있다면, 그렇지 않아도 모두들 분명……',
    );
    await era.printAndWait(
      '상점가 사람들 「하지만 이젠 달라……! 우라라, 이겨! 반드시 이겨야 해!」',
    );
    await urara.say_and_wait('……!');
    await era.printAndWait(
      '응원하는 사람들 「힘내라, 우라라! 너는 우리의 꿈을 짊어지고 있다고!」',
    );
    await era.printAndWait(
      '응원하는 사람들 「우라라가 1등을 향해 달려가는 모습을 우리에게 보여줘!」',
    );
    await urara.print_and_wait(
      '지금 우라라를 응원하는 한 사람 한 사람이, 그 일이 있은 후로 보기 힘들었던 미소를 짓고 있었어. 그리고 진심으로 달리는 우라라를 축복하고 있었지.',
    );
    await urara.print_and_wait([
      '그리고 모두의 응원 끝에는, ',
      callname,
      '가 인파 속에서 힘껏 손을 흔드는 모습이 보였어.',
    ]);

    era.printButton('「우라라! 웃음! 두고 갔어!」', 1);
    await era.input();

    await urara.print_and_wait(
      '웃음…… 역시 어딘가 잊어버리고 있었네. 우라라는 웃는 걸 잊고 있었던 걸까?',
    );
    await urara.print_and_wait(
      '그래! 모두가 여전히 우라라를 기다려주고 있어. 설령 해결되지 않은 게 남아있더라도, 적어도 지금 이 순간을 위해 우라라는 멈출 수 없어.',
    );
    await urara.say_and_wait('……응! 알았어. 우라라—— 모두에게 이기는 모습을 보여줄게!');
    await urara.print_and_wait(
      '모두의 기대에 보답하기 위해, 우라라도 모두를 향해 외치듯 감사를 전했어.',
    );
    await urara.print_and_wait([
      '우라라가 웃음을 되찾았을까? 스스로는 보이지 않지만, 모두와 ',
      callname,
      '의 안심하는 표정을 보니——',
    ]);
    await urara.print_and_wait(
      '지금의 우라라는, 다시 모두의 희망을 짊어질 수 있는 모습인 것 같아!',
    );
  };

  handlers[race_enum.jbc_spr] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
  ) => {
    if (era.get('cflag:52:育成回合计시') < 96) {
      return true;
    }
    await print_event_name('지기 싫으니까!', urara);
    await urara.print_and_wait(
      '이 길고 어두운 통로를 벗어나면, 아리마 기념 전의 마지막 몇 걸음일 거야.',
    );
    await urara.print_and_wait([
      '정말로 웃는 얼굴 하나로 ',
      callname,
      '를 믿게 만들었네. 우라라는 이제 나쁜 아이가 된 걸까.',
    ]);
    await urara.print_and_wait([
      '하지만 괜찮아. 이기고 나서 ',
      callname,
      '에게 사과하고, 그러고 나서 푹 자면 될 거야. 이 레이스만 버텨내면 돼.',
    ]);
    await urara.print_and_wait(
      '우라라…… 우라라는 누구에게도 지지 않아! 지금의 우라라는 누구에게도 지고 싶지 않아, 누구에게도 질 수 없어!',
    );
    await urara.print_and_wait(
      '질 수 없어…… 질 수 없어…… 질 수 없어…… 모두가 여전히 우라라를 기대하고 있으니까, 우라라는 스스로를 모두에게 증명해야 해……',
    );
    await urara.print_and_wait(
      '그리고 이렇게 하면 우라라도 용서받을 수 있겠지. 이렇게 하면 모두에게 인정받으며 무대에 설 수 있을 거야……',
    );
    await urara.print_and_wait(
      '몸이 너무 무거워. 하지만 우라라는 분명 달릴 수 있어. 가슴이 너무 아파. 하지만 미소 짓기만 하면 다른 사람들이 걱정하지 않게 할 수 있어.',
    );
    await urara.print_and_wait(
      '너무 무서워…… 나는 어떻게 되는 걸까? 우라라는 지금 정말로 모두를 위해서 여기 서 있는 걸까?',
    );
    await urara.print_and_wait('하지만, 적어도 이번만큼은, 제발 반드시 이기게 해주세요……');
    era.drawLine();
    await me.say_and_wait(
      [
        '어쩌면 ',
        sys_get_colored_callname(0, 52),
        '를 출주시키지 말았어야 했을지도 몰라. 하지만 이제는 너무 늦었을지도.',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '이미 ',
        urara.get_uma_sex_title(),
        '들이 게이트 안으로 들어섰고, 지금 트레이너로서 할 수 있는 일은 담당을 배웅하며 ',
        urara.sex,
        '가 이 난관을 무사히 넘기기를 기도하는 것 뿐이야.',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '왜 ',
        sys_get_colored_callname(0, 52),
        '의 거짓말에 속았을까. 아마 내 마음 한구석에서 여전히 ',
        sys_get_colored_callname(0, 52),
        '가 보여준 겉모습을 믿고 싶었기 때문이겠지……',
      ],
      true,
    );
    await me.say_and_wait(
      [
        sys_get_colored_callname(0, 52),
        '는 여전히 용기를 내지 못한 채, 자신이 선택한 길이 틀리지 않았다는 것을 믿지 못하고 있는 걸까?',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '지나치게 상냥한 ',
        urara.sex,
        '는 여전히 외부의 힘을 빌려야만 점차 닫혀가는 내면을 열 수 있는 걸까? 아니면, 사실 자신의 미래를 두려워하고 있는 걸까……',
      ],
      true,
    );
    if (
      RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin ||
      edu_marks.fans >= 25000
    ) {
      await me.say_and_wait(
        [
          '내 잘못인 걸까? ',
          urara.sex,
          '에게 징조가 나타났을 때 저지하지 못해서, 결국 ',
          sys_get_colored_callname(0, 52),
          '가 스스로를 해치는 것조차 아무렇지 않게 여기게 만든 것이.',
        ],
        true,
      );
      await me.say_and_wait(
        [
          '이미 산 정상 근처까지 다 왔는데 말이야. 어쩌면 나와 ',
          urara.sex,
          ' 모두 변해가는 과정 속에서 「웃음」의 의미를 잊어버린 걸지도 모르겠어……',
        ],
        true,
      );
    } else {
      await me.say_and_wait(
        [
          '내 잘못인 걸까? 내 실수 때문에 ',
          urara.sex,
          '가 거의 스스로를 파괴할 정도로 몰아붙이는 모습이 되어버린 것일까?',
        ],
        true,
      );
      await me.say_and_wait(
        [
          '처음 만났을 때 내가 더 훌륭한 트레이너였다면, 만약 ',
          urara.sex,
          '가 더 뛰어난 트레이너를 만났더라면……',
        ],
        true,
      );
    }
    await me.say_and_wait(
      '하지만 이제 와서 이런 부질없는 망상을 늘어놓는 것은 아무런 의미가 없어.',
      true,
    );
    await me.say_and_wait(
      [
        sys_get_colored_callname(0, 52),
        '가 이미 경기장에 나선 이상, 이제는 위태로운 자신을 스스로 이겨내고 이 레이스를 버텨내기를 믿는 수밖에 없어.',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '일이 이렇게 된 이상 트레이너인 나부터 냉정을 잃어서는 안 된다. 상황이 더 나빠질 수도 있지만, ',
        urara.sex,
        '를 도울 수 있는 사람은 나뿐이니까……',
      ],
      true,
    );
  };
};