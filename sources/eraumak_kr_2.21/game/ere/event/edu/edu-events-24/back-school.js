const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const MayaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-24');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers.dokidoki_live = async (maya, me, callname, flags) => {
    new MayaEduMarks().dokidoki_live++;
    await print_event_name('마야노 탑건의 두근두근☆라이브!', maya);
    const sunday = get_chara_talk(55);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) 함께 외출하고 돌아오는 길──',
    ]);
    await maya.say_and_wait(['에헤헤! ', callname, ', 인터넷 방송 봐?']);
    era.printButton('「갑자기 왜 물어봐?」', 1);
    await era.input();
    await maya.say_and_wait('있잖아, 마야도 방송 시작했어!');
    await maya.say_and_wait([
      '요즘 유행하는 춤을 추기도 하고, ',
      sys_get_colored_callname(24, 3),
      '이랑 같이 게임도 하고~',
    ]);
    await maya.say_and_wait('즐거운 일을 잔뜩 할 거야!');
    await maya.say_and_wait([callname, '도 봐주면 안 돼? 응? 응?']);
    era.printButton('「알았어」', 1);
    await era.input();
    await era.printAndWait([
      maya.get_colored_name(),
      '의 열렬한 부탁에, ',
      me.get_colored_name(),
      '은(는) 그녀의 다음 방송을 보기로 약속했다.',
    ]);
    era.drawLine({ content: '며칠 후' });
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      maya.get_colored_name(),
      '의 방송 채널을 켰다──',
    ]);
    await maya.say_and_wait('모두의 마음속에 착륙☆ 마야 채널 시작할게~♪');
    await maya.say_and_wait([
      '오늘의 게스트는 내 친구, ',
      sys_get_colored_callname(24, 55),
      '이야!',
    ]);
    await sunday.say_and_wait('하이☆ 다들 아름답게 지내고 있니?');
    await say_by_passer_by_and_wait('시청자A', '마야, 기다리고 있었어!!');
    await say_by_passer_by_and_wait('시청자B', '잘은 모르겠지만 마블러스☆하네!');
    await maya.say_and_wait('다들 댓글 고마워~! 마야도 다들 기다리고 있었어♪');
    await sunday.say_and_wait('오늘은 우리 둘이서 아름다운 장소에 돌격해 볼 거야☆');
    await maya.say_and_wait('간다~! 커피컵으로 초고속 회전 챌린지!');
    await sunday.say_and_wait('아하하하하~☆ 뱅글뱅글 도는 게 참 아름다워★');
    await maya.say_and_wait([
      '다음은 게임 센터! ',
      sys_get_colored_callname(24, 3),
      '의 점수를 넘어버릴 거야!',
    ]);
    await sunday.say_and_wait('예이☆ 엄청난 고점, 아름다워★');
    await era.printAndWait(
      '그 후 두 사람은 여러 명소를 돌아다니며 활기차게 노는 모습으로 시청자들에게 즐거움을 선사했다.',
    );
    await era.printAndWait('마치 태양 같은 밝음과 사람들을 끌어당기는 개인적인 매력──');
    await era.printAndWait([
      '방송을 보며, ',
      me.get_colored_name(),
      '은(는) ',
      maya.get_colored_name(),
      '의 매력을 다시금 깨달은 듯했다.',
    ]);
    await maya.say_and_wait('아, 슬슬 작별 인사를 할 시간이야. 다들 즐거웠어?');
    await era.printAndWait([
      maya.get_colored_name(),
      '가 던진 질문에, ',
      me.get_colored_name(),
      '은(는) 정신을 차려보니 이미 댓글을 보내고 있었다.',
    ]);
    era.printButton('「나도 아주 즐거웠어!」 (스태미나 & 파워 +10)', 1);
    era.printButton('「계속 응원할게. 레이스 힘내!」 (근성 +20)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('헤헤, 고마워!');
      await maya.say_and_wait(
        '이 흥분과 두근거리는 마음이 화면 너머의 당신에게도 전달됐네♪',
      );
      await maya.say_and_wait('모두의 댓글을 받아서 마야도 정말정말 기뻐☆');
      await era.printAndWait([
        '웃으며 말하는 ',
        maya.get_colored_name(),
        '은(는) 매우 눈부시게 빛나고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 다짐했다── 앞으로도 이 미소를 보기 위해, 계속 그녀의 힘이 되어주기로.',
      ]);
    } else {
      await maya.say_and_wait([
        '당연하지! 마야는 그냥 귀엽기만 한 ',
        maya.get_phy_sex_title(),
        '이 아니니까♪',
      ]);
      await maya.say_and_wait([
        '레이스에서도 성숙한 ',
        maya.get_phy_sex_title(),
        '의 여러 가지 모습을 보여줄게!',
      ]);
      await maya.say_and_wait('그·러·니·까☆ 레이스도 방송도 전부 응원해줘야 해♪');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 레이스 우마무스메로서 ',
        maya.get_colored_name(),
        '이 가진 매력을 충분히 알고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 방송으로만 그녀를 아는 시청자들도, 경기장에서 빛나는 그녀의 모습을 봐주길 바랐다.',
      ]);
    }
    era.drawLine();
    await maya.say_and_wait(['와~! ', callname, ', 어제 방송 봤어?']);
    era.printButton('「댓글도 달았는걸」', 1);
    await era.input();
    await maya.say_and_wait('에엣~!? 설마 이 사람이야~!?');
    await era.printAndWait([
      maya.get_colored_name(),
      '이 가리키고 있는 댓글은 확실히 ',
      me.get_colored_name(),
      '이(가) 남긴 것이었다.',
    ]);
    await maya.say_and_wait('있지, 마야가 맞혔지?');
    era.printButton('「대단해! 그걸 알아봤네」', 1);
    await era.input();
    await maya.say_and_wait([
      '이 댓글, ',
      callname,
      '이 옆에 있을 때랑 똑같이 마음이 편안하고 따뜻해지는 느낌이었거든!',
    ]);
    await maya.say_and_wait('그나저나 우리 계속 같이 있는데, 그냥 직접 말해줘도 됐을 텐데~♪');
    await era.printAndWait([
      '말은 그렇게 하면서도, ',
      maya.get_colored_name(),
      '은(는) 기쁜 표정을 지었다.',
    ]);
    if (ret === 1) {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 10, 10], 0);
    } else {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.excited_live = async (maya, me, callname, flags) => {
    new MayaEduMarks().excited_live++;
    await print_event_name('마야노 탑건의 싱글벙글☆라이브!', maya);
    await era.printAndWait([
      maya.get_colored_name(),
      '과 외출하고 돌아오는 길──',
    ]);
    await maya.say_and_wait([
      '맞다, ',
      callname,
      '! 저번에 인터넷 방송 얘기했었지?',
    ]);
    await maya.say_and_wait('그 뒤로 시청자가 점점 늘어서, 마야 채널 지금 인기 폭발이야♪');
    await era.printAndWait('스마트폰으로 방송 다시보기를 확인하자, 확실히──');
    await say_by_passer_by_and_wait('시청자A', '마야는 언제 봐도 귀여워!!');
    await say_by_passer_by_and_wait('시청자B', '마야가 제일 좋아☆');
    await era.printAndWait('열정적인 댓글들이 가득 보였다.');
    await maya.say_and_wait('그치? 마야의 인기는 수직 상승 중☆');
    await maya.say_and_wait(
      '그래서 말인데! 마야는 다음 방송에서 평소랑 다른 모습을 보여주고 싶어!',
    );
    await maya.say_and_wait([
      '……근데 뭘 하면 좋을까~? ',
      callname,
      ', 뭐 좋은 아이디어 없어?',
    ]);
    era.printButton('「연습하는 모습을 보여주는 건 어때?」', 1);
    await era.input();
    await maya.say_and_wait(['바로 그거야! 역시 ', callname, '는 머리 회전이 빠르다니까!']);
    await maya.say_and_wait('마야의 진지한 모습을 보면, 다들 분명 마야를 더 좋아하게 될 거야!');
    await maya.say_and_wait([
      '그·러·니·까☆ 아이디어를 낸 ',
      callname,
      '이 촬영해줄 수 있을까~?',
    ]);
    await maya.say_and_wait(
      '방송 인기가 많아지면 레이스에서의 활약도 주목받을 수 있을 테니까~',
    );

    era.printButton('「알았어. 노래하는 모습을 찍자!」 (스피드 +20)', 1);
    era.printButton('「알았어. 달리는 모습을 찍자!」 (근성 +20)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('응! 바로 스테이지로 이륙☆');
      era.drawLine();
      await maya.say_and_wait('모두의 마음속에 착륙☆ 마야 채널 시작할게~♪');
      await say_by_passer_by_and_wait('시청자C', '오오오오오오오오!!');
      await say_by_passer_by_and_wait('시청자D', '마야 오늘도 기운차네~☆');
      await say_by_passer_by_and_wait('시청자E', '여긴 어디야~?');
      await maya.say_and_wait('헤헤♪ 다들 댓글 고마워!');
      await maya.say_and_wait('오늘은 말이야, 라이브 연습하는 모습을 보여줄게!');
      await maya.say_and_wait([
        '촬영을 도와주시는 분은 바로 그분! 마야가 안심하고 신뢰하는 파트너, 트레이너 ',
        callname,
        '이야!',
      ]);
      await maya.say_and_wait(['나를 트레이닝시켜주고, 또 칭찬도 해준다구♪']);
      await say_by_passer_by_and_wait('시청자F', '라이브 기대된다~');
      await say_by_passer_by_and_wait('시청자G', '나도 트레이너 하고 싶어!!');
      await say_by_passer_by_and_wait('시청자H', '진짜 부럽다.');
      await maya.say_and_wait(
        '어머, 다들 정말~♪ 그럼 마야의 라이브 시작한다!',
      );
      await maya.say_and_wait('하나, 둘☆ 반짝☆하게☆ 섹시☆하게☆');
      await maya.say_and_wait('마지막은 귀엽게 마무리!');
      await say_by_passer_by_and_wait('시청자I', '너~무~ 귀~여~워~!!');
      await say_by_passer_by_and_wait('시청자J', '노래랑 춤 전부 최고야!');
      await maya.say_and_wait('역시 꽤…… 괜찮지?♪');
      await maya.say_and_wait(
        '마야가 레이스에서 우승하면, 위닝 라이브에서 진짜 마야를 보여줄게☆',
      );
      await maya.say_and_wait('그러니까 다들 응원해줘야 해!');
    } else {
      await maya.say_and_wait('응! 바로 운동장으로 이륙☆');
      era.drawLine();
      await maya.say_and_wait('모두의 마음속에 착륙☆ 마야 채널 시작할게~♪');
      await say_by_passer_by_and_wait('시청자C', '야후우우우우!!');
      await say_by_passer_by_and_wait('시청자D', '착륙 확인☆');
      await say_by_passer_by_and_wait('시청자E', '설마 체육복!?');
      await maya.say_and_wait('헤헤~♪ 다들 댓글 고마워!');
      await maya.say_and_wait('오늘은 말이야, 마야의 훈련 모습을 보여줄게!');
      await maya.say_and_wait([
        '촬영을 도와주시는 분은 바로 그분! 마야가 안심하고 신뢰하는 파트너, 트레이너 ',
        callname,
        '이야!',
      ]);
      await maya.say_and_wait(['나를 트레이닝시켜주고, 또 칭찬도 해준다구♪']);
      await say_by_passer_by_and_wait('시청자F', '트레이닝 힘내~');
      await say_by_passer_by_and_wait('시청자G', '나도 마야의 파트너야!');
      await say_by_passer_by_and_wait('시청자H', '트레이너 나랑 교체하자.?');
      await maya.say_and_wait('어머, 다들 정말~♪ 그럼 트레이닝 시작할게!');
      await maya.say_and_wait('후우…… 후우……!');
      await maya.say_and_wait('골인! 다들, 마야 달리는 거 어땠어?');
      await say_by_passer_by_and_wait('시청자I', '엄청 빨라!');
      await say_by_passer_by_and_wait('시청자J', '진심으로 멋져!');
      await maya.say_and_wait('역시 꽤…… 괜찮지?♪');
      await maya.say_and_wait(
        '이왕 이렇게 된 거, 오늘은 마야의 멋진 모습을 실컷 보여줄게!',
      );
      await maya.say_and_wait('다들 눈 감으면 안 돼♪');
      await era.printAndWait([
        '본인도 의욕이 넘치기에, ',
        me.get_colored_name(),
        '은(는) 기회를 놓치지 않고 그녀에게 평소보다 더 많은 훈련을 시켰다.',
      ]);
    }
    era.drawLine({ content: '다음 날' });
    await maya.say_and_wait('와~! 시청자가 또 늘었어♪');
    await maya.say_and_wait('댓글 수도 지금까지 중에 제일 많아!');
    era.printButton(`「잘됐네, 마야!」`, 1);
    await era.input();
    await maya.say_and_wait(['응♪ ', callname, '도 싱글벙글하니까 마야도 기뻐♪']);
    await maya.say_and_wait('좋아! 이대로 더 인기인이 될 거야!');
    await era.printAndWait([
      '인기가 점점 치솟는 ',
      maya.get_colored_name(),
      '은(는) 더욱 방송에 몰두하게 되었다.',
    ]);
    if (ret === 1) {
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    } else {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.taisecu_hito = async (maya, me, callname, flags) => {
    await print_event_name('마야노 탑건의 소중한 사람!', maya);
    const fuji = get_chara_talk(5);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 외출을 마친 ',
      maya.get_colored_name(),
      '을 기숙사 앞까지 배웅했다.',
    ]);
    await maya.say_and_wait([
      '헤헤! 오늘도 정말 즐거웠어! ',
      callname,
      '과의…… 데, 이트♪',
    ]);
    era.printButton('「즐거웠다니 다행이야」', 1);
    await era.input();
    await maya.say_and_wait(
      '맞다! 마야 방으로 와~! 드라마에 나오는 것처럼 같이 차라도 마시면서──',
    );
    await fuji.say_and_wait('어머어머, 기숙사장으로서 그냥 지나칠 수가 없겠는걸.');
    await maya.say_and_wait('앗! 아빠한테 들켰다~');
    era.printButton('「아빠……?」', 1);
    await era.input();
    await maya.say_and_wait(
      '그거 있잖아! 드라마에서 집 앞에서 아빠랑 딱 마주치는 장면 자주 나오잖아!',
    );
    await fuji.say_and_wait('하하하, 아빠라니~ 기숙사장은 확실히 양부모 같은 존재이긴 하지.');
    await maya.say_and_wait('그럼…… 아빠, 소개할게! 이 사람은 나의 소중한 사람이야☆');
    await fuji.say_and_wait([
      '뭐라고? 내 ',
      era.get('cflag:24:성별') === 1 ? '아들' : '딸',
      '의 소중한 사람이라고~? 그거 정말이니?',
    ]);
    era.printButton('「그게……」 (스피드 +20)', 1);
    era.printButton('「……실은 다른 소중한 사람이 있어」 (근성 +20)', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait(['꺄☆ ', callname, '이 부끄러워하고 있어! 귀여워!']);
      await fuji.say_and_wait('후후, 장난은 여기까지 하자. 너희 정말 사이가 좋구나.');
      await fuji.say_and_wait([
        sys_get_colored_callname(5, 24),
        '가 저렇게 활기찬 것도, 다 그 때문일까?',
      ]);
      await maya.say_and_wait('헤헤! 우린 미래를 약속한 사이니까~♪');
      era.printButton('「계약이라고 해야겠지」', 1);
      await era.input();
      await maya.say_and_wait([
        '흥~! ',
        callname,
        '도 참, 이럴 때는 『응』이라고…… 해줘야지?',
      ]);
      await fuji.say_and_wait([
        '하하하, 그렇구나. ',
        sys_get_colored_callname(5, 24),
        '의 말이 맞네.',
      ]);
      await fuji.say_and_wait([
        '앞으로도 ',
        sys_get_colored_callname(5, 24),
        '를 잘 부탁할게.',
      ]);
      await fuji.say_and_wait('……농담이야. 이러니까 진짜 아버지 같지? 후후.');
      await fuji.say_and_wait([
        '그럼 난 이만 가볼게. 곧 저녁 시간이니 ',
        sys_get_colored_callname(5, 24),
        '도 같이 가자.',
      ]);
      await maya.say_and_wait('응! ……아, 가기 전에.');
      await maya.say_and_wait([
        callname,
        ', 칭찬받았네! 이걸로 정식 인사 때도 문제없겠어☆',
      ]);
      era.printButton('「정식 인사……?」', 1);
      await era.input();
      await maya.say_and_wait('나 먼저 갈게! 내일 봐~♪');
      await era.printAndWait([
        '……어찌 됐든, 앞으로도 ',
        maya.get_colored_name(),
        '과 함께 노력할 생각을 하니, ',
        me.get_colored_name(),
        '은(는) 의욕이 솟구쳤다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    } else {
      await maya.say_and_wait('에에에에에엑~~~!?');
      await maya.say_and_wait(
        '그게 무슨 소리야!? 마야는 모르는 일인데! 도대체 어떻게 된 거야──!?',
      );
      await fuji.say_and_wait('그렇게 된 거였구나. 너도 참 짓궂네~?');
      await maya.say_and_wait('거, 거짓말…… 나랑은 그냥 장난이었던 거야……!?');
      era.printButton('「농담이야」', 1);
      await era.input();
      await maya.say_and_wait('……어? 농담?');
      await fuji.say_and_wait('하하하하! 그래. 놀리는 건 여기까지 하자구.');
      await maya.say_and_wait('엣!? 둘 다 방금 마야 놀린 거야!?');
      await maya.say_and_wait('흥! 너무해, 진짜 너무해! 마야 방금 진심으로 슬펐다구~!');
      era.printButton('「미안 미안」', 1);
      await era.input();
      await maya.say_and_wait('흥──! 아무리 사과해도 마야는 안 풀어질 거야!');
      await fuji.say_and_wait([
        '어머어머, ',
        maya.sex,
        '는 정말 널 좋아하는구나. 나도 너희 사이가 틀어지는 건 원치 않는데……',
      ]);
      await fuji.say_and_wait([
        '맞다! ',
        sys_get_colored_callname(5, 24),
        ', 식당에서 지금 케이크 카니발 하고 있는 거 아니?',
      ]);
      await maya.say_and_wait('……알고 있지? 마야도 가고 싶었지만 표를 못 구해서……');
      await fuji.say_and_wait(
        '나한테 마침 방에 남는 표가 두 장 있거든. 어때? 둘이서 화해의 차라도 한잔하러 가는 건.',
      );
      await maya.say_and_wait([
        '와아~~!! 갈래 갈래! 마야는 ',
        callname,
        '이랑 가고 싶어!',
      ]);
      await fuji.say_and_wait(
        '그것참 잘됐네. 표는 문 열고 바로 앞 탁자에 두었으니 가져가렴.',
      );
      await maya.say_and_wait('응♪');
      await fuji.say_and_wait('후우…… 좋아, 어떻게든 해결됐네.');
      era.printButton('「고마워……」', 1);
      await era.input();
      await fuji.say_and_wait('별말씀을, 오히려 내가 고맙지. 사실 계속 감사를 표하고 싶었거든.');
      await fuji.say_and_wait([
        '아무래도 ',
        sys_get_colored_callname(5, 24),
        '는 호기심이 왕성하니까…… 여러모로 걱정이 많았거든.',
      ]);
      await maya.say_and_wait([callname, '! 빨리빨리~! 안 그러면 식당 닫겠어!']);
      await fuji.say_and_wait('후후. 꼭 즐거운 시간 보내.');
      await era.printAndWait('그 후 두 사람은 함께 차를 마시며…… 무사히 화해했다.');
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.race_lesson = async (maya, me, callname, flags) => {
    await print_event_name('마야의 레이스 강좌☆', maya);
    const urara = get_chara_talk(52);
    await era.printAndWait([
      maya.get_colored_name(),
      '과 함께 모의 레이스를 구경하고 돌아오는 길──',
    ]);
    await urara.say_and_wait([
      '아, ',
      sys_get_colored_callname(52, 24),
      '랑 ',
      sys_get_callname(52, 0),
      '이다~! 너희 혹시 나 응원하러 온 거야!?',
    ]);
    await maya.say_and_wait([
      '응! ',
      sys_get_colored_callname(24, 52),
      '는 정말 노력파라니까~☆',
    ]);
    await urara.say_and_wait('헤헤, 고마워~!');
    await urara.say_and_wait(
      '오늘도 정말 즐겁게 달렸어! 비록 꼴찌였지만 난 만족해♪',
    );
    await maya.say_and_wait([
      '그래? ',
      sys_get_colored_callname(24, 52),
      '는 대단해~! 마야는 지면 삐져버리는데☆',
    ]);
    await urara.say_and_wait('난 언제나 즐거워! 달리는 게 제일 좋으니까!');
    await urara.say_and_wait([
      '그치만…… 이기는 건 참 어렵네! ',
      sys_get_colored_callname(52, 24),
      '은 어떻게 레이스에서 이기는 거야?',
    ]);
    await maya.say_and_wait('나?');
    await urara.say_and_wait('응! 넌 항상 엄청 빠르잖아~?');
    await urara.say_and_wait([
      '우라라도 만약 ',
      sys_get_colored_callname(52, 24),
      '처럼 될 수 있다면, 이길 수 있을지도 몰라!',
    ]);
    era.printButton('「함께 연습해볼래?」', 1);
    await era.input();
    await maya.say_and_wait('좋은 생각이야☆');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 52),
      ', 우리 같이 연습해서 다음에는 꼭 이기자!!',
    ]);
    await maya.say_and_wait([
      '마야와 ',
      callname,
      '의 레이스 강좌~☆ 학생은 ',
      sys_get_colored_callname(24, 52),
      ' 어린이♪',
    ]);
    await urara.say_and_wait('네! 하루 우라라입니다!');
    await maya.say_and_wait([
      '그럼 바로 시작하자~! 먼저 ',
      callname,
      '에게 질문할게☆',
    ]);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 52),
      '에게 지금 필요한 건 뭐야!?',
    ]);
    era.println();
    era.printButton('「지치지 않도록 체력을 기른다!」 (스태미나 +20)', 1);
    era.printButton('「상대를 앞지르는 요령을 익힌다!」 (파워 +20)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait(['정답☆ ', callname, '는 역시 대단해♪']);
      await maya.say_and_wait([
        '……흠흠! 저기, ',
        sys_get_colored_callname(24, 52),
        ' 학생!',
      ]);
      await maya.say_and_wait(
        '딱 잘라 말해서☆ 지난번 레이스 때, 너 중간에 힘 다 빠졌었지!?',
      );
      await urara.say_and_wait('응! 즐겁게 달렸지만 나중엔 정말 힘들었어~');
      await maya.say_and_wait('체력이 더 있다면 훨씬 편하게 끝까지 달릴 수 있을 거야~☆');
      await urara.say_and_wait([
        '그렇구나! ',
        sys_get_colored_callname(52, 24),
        '은 정말 똑똑해~♪',
      ]);
      await maya.say_and_wait('뿌뿌! 오늘은 선생님이니까 『마야노 선생님』이라고 불러야지!');
      await urara.say_and_wait(['네, ', maya.get_colored_name(), ' 선생님!']);
      await era.printAndWait([
        '그렇게 ',
        maya.get_colored_name(),
        '의 지도 아래, ',
        urara.get_colored_name(),
        '의 훈련이 진행되었다──',
      ]);
    } else {
      await maya.say_and_wait(
        '야~☆ 이게 바로 이심전심!? 마야도 똑같은 생각을 하고 있었어~♪',
      );
      await maya.say_and_wait([
        sys_get_colored_callname(24, 52),
        ', 너 평소에 어떻게 달려?',
      ]);
      await urara.say_and_wait('평소에? 난 항상 온 힘을 다해서 달려!');
      await maya.say_and_wait('응, 그렇구나…… 그럼 뭐 고민되는 건 없어?');
      await urara.say_and_wait(
        '음~ 앞질러 나가는 게 너무 어려워~ 다른 사람이랑 부딪칠 것 같으면 막 당황하게 돼!',
      );
      await maya.say_and_wait('오호, 그렇구나~!');
      await maya.say_and_wait('그럼 다음 레이스에선 앞만 보고 달려봐!');
      await maya.say_and_wait('앞만 뚫어지게 보고 있으면, 언젠가 앞에 아무도 없을 때가 올 거야──');
      await maya.say_and_wait('그때가 되면 그냥 쭉 앞으로 돌진☆');
      await urara.say_and_wait('알았어! 그렇게 해볼게♪');
    }
    era.drawLine({ content: '다음 날' });
    await urara.say_and_wait('내 말 좀 들어봐! 나 한 명 앞질렀어!');
    await maya.say_and_wait('와, 대단해~! 한 명을 앞지르다니──');
    await maya.say_and_wait('한 명!?');
    await urara.say_and_wait(
      '헤헤~! 그렇게 한 명씩 다 앞질러서, 마지막엔 꼭 1등 할 거야~♪',
    );
    await maya.say_and_wait(
      '계속 앞지르다 보면 언젠가 꼭 1등이 되겠지! 반드시 1등을 따내는 거야~!!',
    );
    await urara.say_and_wait('오오~!!');
    await era.printAndWait([
      urara.get_colored_name(),
      '를 가르친 것이 ',
      maya.get_colored_name(),
      '에게도 긍정적인 영향을 준 듯했다.',
    ]);
    if (ret === 1) {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    } else {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
    }
  };
};