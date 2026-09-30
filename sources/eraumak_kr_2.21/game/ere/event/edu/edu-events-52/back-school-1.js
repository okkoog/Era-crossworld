const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { common_out_check } = require('#/event/edu/edu-events-52/snippets');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},{loc:number},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.teach = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (
      era.get('flag:현재상호작용캐릭터') !== 52 ||
      extra_flag.loc !== location_enum.shopping
    ) {
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(52).sub(event_hooks.out_shopping);
    await print_event_name('명지도', urara);
    await era.printAndWait([
      '상점가에서 장보기를 마치고 돌아오는 길, 옆에서 ',
      me.get_colored_name(),
      '의 짐을 들어주고 있는 ',
      urara.get_colored_name(),
      '는 즐거운 듯 콧노래를 흥얼거리고 있었다.',
    ]);

    era.printButton('「기분이 무척 좋아 보이네, 방금 좋은 일이라도 있었어?」', 1);
    await era.input();

    await urara.say_and_wait(
      '헤헤~ 맞아! 상점가 사람들이 나한테 『열심히 하고 있구나』라면서 선물도 줬어! 대단하지!',
    );
    await urara.say_and_wait(
      '예전에는 다들 나한테 『너무 무리하지 마』라고만 했었는데, 요즘은 『열심히 하네』라고 말해주는 사람이 늘었어!',
    );
    await era.printAndWait([
      '폴짝폴짝 뛰며 손에 든 봉투를 바스락거리는 어린 ',
      urara.get_uma_sex_title(),
      '가 ',
      me.get_colored_name(),
      '을(를) 향해 감사의 미소를 지었다.',
    ]);
    await urara.say_and_wait(
      '분명 내가 예전보다 더 빨리 달리게 돼서, 우라라를 인정해 주는 사람도 많아진 걸 거야!',
    );
    await urara.say_and_wait([
      '하지만 ',
      callname,
      '가 없었다면, 우라라는 여기까지 오지 못했을 거야! 그러니까 고마워, ',
      callname,
      '!',
    ]);

    era.printButton('「그렇다면 다음 레이스에서도——」', 1);
    await era.input();

    await urara.say_and_wait('응! 다음 레이스에서도 우라라는 계속 힘낼게!');
    await era.printAndWait([
      '햇살을 머금은 ',
      urara.get_colored_name(),
      '의 웃는 얼굴 속에서, ',
      me.get_colored_name(),
      '은(는) ',
      urara.sex,
      '와 함께 다음 목표를 향한 의욕을 다졌다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, [0, 0, 0, 10, 0], 0);
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.dance = async (urara, me, callname, flags, ___, event_object) => {
    if (era.get('flag:현재상호작용캐릭터')) {
      await era.printAndWait([
        '듣자 하니 ',
        urara.get_colored_name(),
        '는 방과 후에 혼자 댄스 연습을 한다고 한다…… 다음에 혼자 외출할 때 한번 가보도록 하자.',
      ]);
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.back_school);
    await print_event_name('댄스 연습', urara);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 잊고 온 물건을 찾으러 무용실에 갔을 때, ',
      urara.get_colored_name(),
      '가 오늘도 수업이 끝난 뒤 홀로 댄스 연습을 이어가는 것을 발견했다.',
    ]);
    await urara.say_and_wait([
      '——좋아, 끝! 후우~ 정말 그립네…… 아! ',
      callname,
      ', 왔구나!',
    ]);
    await era.printAndWait([
      '음악이 끝나고 얼굴의 땀을 닦던 중, 트레이너가 오는 것을 본 ',
      urara.get_colored_name(),
      '는 웃으며 ',
      me.get_colored_name(),
      '에게 다가왔다.',
    ]);

    era.printButton('「응! 우라라도 수고했어! 그런데 그립다는 건 무슨 뜻이야?」', 1);
    await era.input();

    await urara.say_and_wait(
      '아, 그건 내가 어렸을 때 집의 작업실에서 자주 춤을 췄었거든! 고향 친구들이 나무로 마이크도 만들어 줬었어!',
    );
    await urara.say_and_wait(
      '트레센에 올 때도 다들 우라라랑 약속했어. 나중에 다 같이 내 위닝 라이브를 보러 오겠다고 말이야!',
    );
    await urara.say_and_wait(
      '그러니까 나도 연습을 열심히 해야 해. 친구들을 실망하게 할 수는 없으니까!',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      '의 고향인 고치에 있는 친구들을 말하는 걸까? 그래서 ',
      urara.sex,
      '가 이렇게 열심히 위닝 라이브를 준비하고 있었던 모양이다.',
    ]);

    era.printButton('「음…… 우라라가 연습한 걸 보여줄 수 있을까?」', 1);
    await era.input();

    await urara.say_and_wait([
      '당연하지! 그럼 ',
      callname,
      ', 우라라를 위해서 카세트 버튼 좀 눌러줄래?',
    ]);
    await era.printAndWait([
      '익숙한 음악이 흐르기 시작하자, ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 시선 속에서 그동안 갈고닦은 실력을 당당하게 뽐냈다.',
    ]);
    await era.printAndWait([
      '가끔 가사를 틀리기도 했지만, ',
      urara.sex,
      '의 몸짓에는 감정이 충분히 실려 있어 무척이나 훌륭한 퍼포먼스였다.',
    ]);

    await urara.say_and_wait([
      callname,
      ', 우라라 어때? 다들 보면 기뻐해 줄까?',
    ]);
    era.printButton('「응, 다들 정말 기뻐할 거야.」（속도+10）', 1);
    era.printButton('「가사를 완벽히 외우면 더 좋을 것 같아.」（지능+10）', 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      attr_change[attr_enum.speed] = 10;
      await urara.say_and_wait(
        '역시 그렇겠지! 우라라도 분명 그럴 거라고 생각해! 그러니까 실전에서는 더 열심히 공연할게!',
      );
      await urara.say_and_wait(
        '지금도, 그리고 예전부터 나를 응원해 주는 모두에게 우라라의 성장을 보여줄 거야!',
      );
      await era.printAndWait([
        '의욕이 넘치는 ',
        urara.get_colored_name(),
        '가 다시 자율 연습을 시작했다. 저렇게 노력하는 ',
        urara.sex,
        '라면 무대 위에서 결코 실패하지 않을 것이다.',
      ]);
    } else {
      attr_change[attr_enum.intelligence] = 10;
      await urara.say_and_wait(
        '맞는 말이야, 내가 가사를 자주 틀리는 것 같아! 하지만 가사만 제대로 외우면 콘서트가 훨씬 멋져지겠지?',
      );
      await urara.say_and_wait('좋아! 그럼 우라라는 이제부터 가사 외우기에 집중할게!');
      await era.printAndWait([
        '가사를 완벽히 숙지하자 ',
        urara.sex,
        '의 노랫소리에 감정이 더 정확하게 실렸고, 무대 위에서도 더욱 이목을 끌 수 있을 것 같았다.',
      ]);
    }
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.stair = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (extra_flag.loc !== location_enum.chairman) {
      await era.printAndWait(
        '학생들 사이에서 계단 수에 관한 괴담이 돌고 있다고 한다…… 다음에 홀로 이사장실에 갈 때 주의 깊게 살펴보자.',
      );
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.school_chairman);
    await print_event_name('계단 훈련과 학생들의 소문', urara);
    await era.printAndWait([
      '이사장실에서 돌아오는 길, ',
      me.get_colored_name(),
      '은(는) 교사 내 어느 계단 입구 근처에서 웬일인지 위아래로 뛰어다니고 있는 ',
      urara.get_colored_name(),
      '와 마주쳤다.',
    ]);
    await urara.say_and_wait('허억…… 후우…… 역시 이번에도…… 열두 계단이야……');

    era.printButton(
      '「우라라, 여기서 뭐 하고 있어? 자율 트레이닝이라면 훈련장에서 하는 게 좋아.」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '아, ',
      callname,
      '! 다들 그러는데 이 계단은 저녁마다 한 계단씩 늘어난대! 마치 마법처럼 말이야!',
    ]);
    await urara.say_and_wait(
      '재밌을 것 같아서 세어보러 왔는데, 벌써 한 시간 넘게 왔다 갔다 하면서 세고 있어……',
    );
    await era.printAndWait([
      '결국 학원 괴담이었나. 트레센의 ',
      urara.get_uma_sex_title(),
      '들도 결국 사춘기 ',
      urara.get_teen_sex_title(),
      '들인 만큼, 이런 일에 관심을 갖는 것도 당연한 일이다.',
    ]);
    await era.printAndWait([
      '트레이너인 ',
      me.get_colored_name(),
      '의 입장에서도, 불확실한 심령 소문보다는 여전히 수수께끼로 가득 찬 ',
      urara.get_uma_sex_title(),
      '들이 훨씬 흥미로웠다.',
    ]);

    era.printButton('「그나저나 한 시간이나 세고 있다니, 너무 길지 않아?」', 1);
    await era.input();

    await urara.say_and_wait('응! 몇 번을 세어봐도…… 계단은 계속 열두 개뿐이라서……');
    await urara.say_and_wait(
      '하지만 우라라는 아직 포기하고 싶지 않아. 다들 진짜라고 했으니까, 조금만 더 세어보고 싶어……',
    );
    await era.printAndWait(
      '아니, 그건 좀 아니지 않을까? 그 괴담의 끝이 불운이 닥치는 것이라는 점은 차치하더라도, 심령 현상을 운 좋게 만나길 바랄 수는 없는 노릇이다.',
    );
    await era.printAndWait([
      '어디 보자, 다섯, 열, 열하나, 열둘, 열셋…… 잠깐?! 갑자기 무언가 잘못되었음을 직감한 ',
      me.get_colored_name(),
      '은(는) 서늘해진 뒷덜미를 부여잡았다……',
    ]);
    await urara.say_and_wait(['……어? ', callname, ', 갑자기 왜 그래…… 으와아——']);
    await era.printAndWait([
      '사태의 심각성을 깨달은 ',
      me.get_colored_name(),
      '은(는) 즉시 어린 ',
      urara.get_uma_sex_title(),
      '를 옆구리에 끼고, 인간의 한계를 넘는 속도로 그 기분 나쁜 장소를 탈출했다.',
    ]);
    await era.printAndWait([
      '결국 이상 현상은 피했지만, 그 후 ',
      urara.get_colored_name(),
      '는 과도한 운동으로 인한 피로 때문에 활기를 잃고 말았다. 어쩌면…… 이것도 불운의 일종일지도 모르겠다.',
    ]);
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      [0, 0, 0, 0, 20],
      0,
      JSON.parse('{"체력":-100}'),
      true,
    );
    flags.wait_flag = sys_change_motivation(52, -1) || flags.wait_flag;
  };

  handlers.mother = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (extra_flag.loc !== location_enum.chairman) {
      await era.printAndWait(
        '최근 이사장실 근처에서 낯선 사람이 목격되었다고 한다…… 다음에 홀로 이사장실에 갈 때 접촉해 보자.',
      );
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.school_chairman);
    const in_urara = get_chara_talk(52, chara_colors[1]);
    await print_event_name('「그 사람」과의 조우', urara);
    await in_urara.say_as_unknown_and_wait([
      '아~ 저 사람이네. 트레이너 ',
      me.get_adult_sex_title(),
      ', 비록 우연한 만남일지라도 마음의 준비를 해두는 게 좋을 겁니다.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '아니, 어쩌면 저 사람에게 이건 우연이 아닐지도 모르겠네요.',
    );
    era.drawLine();
    await era.printAndWait([
      '이사장실 문앞, ',
      me.get_colored_name(),
      '이(가) 눈앞의 검은 옷을 입은 우마무스메를 관찰하는 동안, 그녀 또한 길을 지나던 ',
      me.get_colored_name(),
      '을(를) 차분하게 살피고 있었다.',
    ]);
    await era.printAndWait(
      '처음 보는 얼굴이다. 예전 졸업생일까? 학원을 방문한 학부모? 아니면 이사장의 지인? 그것도 아니면……',
    );
    await era.printAndWait([
      '무슨 말을 꺼내야 할지 망설이는 ',
      me.get_colored_name(),
      '을(를) 향해, 단아한 외모의 성숙한 우마무스메가 노크하려던 손을 거두고 돌아서며 친근한 미소를 지었다.',
    ]);
    await era.printAndWait(
      '성숙한 우마무스메 「실례가 많았습니다. 이곳의 트레이너 분이시죠? 저기, 혹시 실례가 안 된다면 저를 훈련장으로 안내해 주실 수 있을까요?」',
    );

    era.printButton('「네? 아, 실례지만 누구신지……?」', 1);
    await era.input();

    await era.printAndWait([
      '성숙한 우마무스메 「일단은 학생의 학부모라고 해두죠. 제 ',
      urara.sex_code - 1 ? '딸' : '아들',
      '도 이곳에 다니고 있거든요. 지금은 이미 데뷔도 했답니다.」',
    ]);
    await era.printAndWait([
      '비록 ',
      me.get_colored_name(),
      '과(와) 그녀는 초면이었으나, 기품 있는 여인의 미소는 ',
      me.get_colored_name(),
      '에게 마치 오래전부터 알고 지낸 듯한 친근감을 주었다.',
    ]);

    era.printButton('「……훈련장이라면 저쪽입니다. 이쪽으로 오시죠……」', 1);
    await era.input();

    await era.printAndWait([
      '어리둥절한 만남 끝에 묘한 부탁을 수락한 ',
      me.get_colored_name(),
      '은(는) 갑자기 나타난 신비로운 여인과 함께 훈련장으로 향했다.',
    ]);
    await era.printAndWait([
      '간단한 대답밖에 못 할 정도로 긴장한 ',
      me.get_colored_name(),
      '과(와) 달리, 그녀는 오늘 처음 본 ',
      me.get_colored_name(),
      '에게 묘한 관심을 보였다.',
    ]);
    if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
      await era.printAndWait([
        me.get_colored_name(),
        '에게 ',
        urara.get_uma_sex_title(),
        '와 트레센에 관련된 여러 질문을 던진 뒤, 그녀의 친근한 미소에는 감사함이 조금 더 섞인 듯했다.',
      ]);
      await era.printAndWait(
        '성숙한 우마무스메 「트레이너님도 참 고생이 많으시겠어요. 담당을 위해 매 순간 헌신한다는 건 정말 쉬운 일이 아니니까요.」',
      );
      await era.printAndWait([
        '성숙한 우마무스메 「사실 제 ',
        urara.sex_code - 1 ? '딸': '아들',
        '도 참 운이 좋답니다. ',
        urara.sex,
        '가 그리 강하지는 않지만, 당신처럼 훌륭한 트레이너를 만났으니까요.」',
      ]);
      await era.printAndWait([
        '훈련장 전망대에서 ',
        me.get_colored_name(),
        '과(와) 함께 나란히 서서, 모든 것을 다 안다는 듯 그녀는 달리고 있는 ',
        urara.get_teen_sex_title(),
        '들을 향해 흐뭇한 미소를 지었다.',
      ]);
    } else {
      await era.printAndWait([
        '마치 문제아를 둔 부모의 면담처럼 이것저것 질문을 쏟아낸 뒤, 그녀는 날카로워진 눈빛을 다시 ',
        me.get_colored_name(),
        '에게 돌렸다.',
      ]);
      await era.printAndWait(
        '성숙한 우마무스메 「지식의 수준은 확실히 중앙에 걸맞으시네요. 하지만 담당의 마음을 보살피는 데에는 조금 소홀하신 게 아닐까 싶군요……」',
      );
      await era.printAndWait([
        '성숙한 우마무스메 「하지만 그렇게 생각해도 이미 늦었겠죠. 경기장에 발을 들인 ',
        urara.get_uma_sex_title(),
        '는 한 번 달리기 시작하면 쉽게 포기하지 않으니까요.」',
      ]);
      await era.printAndWait([
        '훈련장 전망대에서 ',
        me.get_colored_name(),
        '과(와) 함께 나란히 선 그녀의 얼굴에는 어딘가 모를 수심이 가득했다.',
      ]);
    }
    if (era.get('love:52') >= 50) {
      await era.printAndWait([
        '성숙한 우마무스메 「그건 그렇고, 트레이너님을 사모하는 우마무스메가 얼마나 될까요…… 갑자기 이런 질문을 드리면 당황스러우시겠죠.」',
      ]);
      await era.printAndWait(
        '성숙한 우마무스메 「하지만 꿈을 향해 달리는 시기에, 자신의 뒤에서 언제나 지탱해 주는 어른을 사랑하게 되는 건……」',
      );
      await era.printAndWait([
        '성숙한 우마무스메 「결코 올바른 일은 아니겠지만, 청춘을 보내는 ',
        urara.sex,
        '들 중에 거기서 자유로울 수 있는 아이가 몇이나 될까요? 그 시절의 저조차 예외는 아니었으니까요……」',
      ]);
    }
    era.printButton('「저기…… 실례지만 아까부터 대체 누구신지……?」', 1);
    await era.input();

    await era.printAndWait(
      '성숙한 우마무스메 「그저 아이를 보러 온 평범한 학부모일 뿐이랍니다.」',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 질문에 직접적으로 답하지 않은 채, 저 멀리서 달려오는 벚꽃색 꼬마를 바라보며 신비로운 여인은 ',
      me.get_colored_name(),
      '에게 마지막 미소를 남겼다.',
    ]);
    await era.printAndWait([
      '성숙한 우마무스메 「저 아이가 당신의 담당이죠? 참으로 귀엽고도 멋진 아이네요. 어서 가서 ',
      urara.sex,
      '를 맞이해 주지 않으시겠어요?」',
    ]);

    era.printButton('「아, 네…… 어?」', 1);
    await era.input();

    await era.printAndWait(
      '눈을 깜빡인 찰나, 검은 옷을 입은 신비로운 우마무스메는 이미 십여 미터 밖으로 멀어진 뒷모습만을 남기고 있었다.',
    );
    await era.printAndWait([
      '그리고 반대편에서 전망대로 뛰어 올라온 ',
      urara.get_colored_name(),
      '가 흥분한 채 ',
      me.get_colored_name(),
      '의 품으로 뛰어들었고, 무언가를 떠올리려던 ',
      me.get_colored_name(),
      '의 생각은 다시 뒤죽박죽이 되어버렸다.',
    ]);
    await urara.say_and_wait([
      callname,
      '! 오늘 우라라 상태가 정말 최고야! 심지어 모의 레이스에서도 이겼다구! 어때? 대단하지!',
    ]);
    await era.printAndWait([
      '하지만 고개를 들어 ',
      me.get_colored_name(),
      '의 멍한 얼굴을 바라보자, 활짝 웃고 있던 어린 ',
      urara.get_uma_sex_title(),
      '의 표정에 점차 의아함이 서리기 시작했다.',
    ]);
    await urara.say_and_wait([
      '……어라? 이상하네. 왜 ',
      callname,
      '한테서 엄마 냄새가 나는 거지——',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '어때요? 참 기묘한 조우였죠? 하지만 이게 정말 우연일까요? 아니면 모든 것이 필연인 걸까요?',
    );
    await in_urara.say_as_unknown_and_wait(
      '당신과 우라라, 심지어는 그 사람과 나에게 있어서도, 트레센에 발을 들인 순간 주사위는 이미 던져진 셈입니다.',
    );
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      new Array(5).fill(5),
      100,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.challenge = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (era.get('flag:현재상호작용캐릭터') > 0) {
      await era.printAndWait(
        '듣자 하니 요즘 학생들이 특별한 도전을 하고 있다고 한다. 다음에 혼자 행동할 때 주의 깊게 살펴보자……',
      );
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.back_school);
    await print_event_name('「전설」의 도전', urara);
    const grass = get_chara_talk(11);
    await era.printAndWait([
      '어느 날 오후, ',
      me.get_colored_name(),
      '이(가) 트레이닝실로 향하던 중 복도에서 누군가와 열띤 토론을 벌이고 있는 ',
      urara.get_colored_name(),
      '를 발견했다.',
    ]);
    await urara.say_and_wait([
      sys_get_colored_callname(52, 11),
      '! 이번 기회에 우리 같이 ',
      sys_get_colored_callname(52, 1),
      '을 쓰러뜨리자!',
    ]);
    await grass.say_and_wait(
      '그 마음은 잘 알겠습니다만…… 하지만, 저기…… 이번 싸움은 격이 완전히 다르달까요……',
    );
    await grass.say_and_wait([
      '아, ',
      era.get('cflag:11:모집상태') === recruit_flags.yes
        ? sys_get_colored_callname(11, 0)
        : '우라라의 '+ sys_get_callname(11, 0),
      ', 마침 잘 오셨습니다. 당신도 좀 말려주세요.',
    ]);

    era.printButton(
      `「무슨 일이야? ${sys_get_callname(0, 1)}랑 달리기 시합이라도 하는 거야?」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '그게 아니라! 상점가에서 이번에 아주 엄청난 대회를 연대! 이름하여——',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      '가 펼쳐 든 포스터에는 소박한 디자인으로 ',
      get_chara_talk(1).get_colored_name(),
      '가 특대 라면을 정복했던 당시의 「위업」이 그려져 있었다.',
    ]);
    await era.printAndWait([
      '과장된 포스터를 본 뒤, 미소 지으면서도 난감해하는 ',
      grass.get_colored_name(),
      '와 눈이 마주친 ',
      me.get_colored_name(),
      '은(는) 대략 어떤 상황인지 짐작이 갔다.',
    ]);
    await urara.say_and_wait(
      '『전설☆스페셜 위크에게 도전하라! 산더미 특대 라면을 먹어 치워라!』 어때? 멋지지!',
    );
    await urara.say_and_wait(
      '내가 라면 가게에 가서 직접 물어봤는데, 마침 참가자 두 명을 더 모집하고 있대!',
    );
    await urara.say_and_wait([
      '그러니까 ',
      sys_get_colored_callname(52, 11),
      '~ 같이 도전하러 가자! 우리라면 분명 ',
      sys_get_colored_callname(52, 1),
      '을 이길 수 있을 거야~',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 애교 섞인 공세에도 불구하고, 철벽 같은 야마토 나데시코는 전혀 동요하지 않는 듯 보였다.',
    ]);
    await grass.say_and_wait([
      '하지만 우라라 씨…… 다 먹을 수 있겠어요? 제 기억으론 당신, 점심마다 저보다도 적게 먹는 것 같았는데……',
    ]);
    if (era.get('cflag:11:모집상태') === recruit_flags.yes) {
      await me.say_and_wait(
        [
          '그렇긴 해도 ',
          grass.get_colored_name(),
          '는 사실 먹는 양이 꽤 많은 편이잖아? 한 번에 많이 가져오지는 않지만, 몰래 몇 번씩 다시 받으러 가는 것 같던데……',
        ],
        true,
      );
      await me.say_and_wait(
        [
          '그리고 ',
          grass.get_colored_name(),
          ', 사실은 먹으러 가고 싶은 거지? ',
          grass.get_teen_sex_title(),
          '로서의 체면과 체중 조절 때문에 망설이고는 있지만, 침 삼키는 소리가 다 들린다구?',
        ],
        true,
      );
      await era.printAndWait([
        '하지만…… 이상의 말들은 머릿속으로만 생각했을 뿐이다. ',
        grass.get_colored_name(),
        '의 여전히 온화한 미소를 보고, ',
        me.get_colored_name(),
        '은(는) 목숨이 위태로울 법한 말을 다시 삼켜버렸다.',
      ]);
    }
    await urara.say_and_wait(
      '걱정 마! 대회 전에 몇 끼 정도 굶어두면 문제없어! 이게 대식가 대회의 비결이라구!',
    );
    await grass.say_and_wait([
      '으음…… 정말 괜찮을까요? 겨우 그 정도로 ',
      sys_get_colored_callname(11, 1),
      '을 이길 수 있을 것 같지는 않은데요……?',
    ]);
    await urara.say_and_wait([
      '하긴 그렇네, ',
      sys_get_colored_callname(52, 1),
      '은 전설적인 인물이니까. 하지만…… 지금 이 기회를 놓치면 너무 아깝지 않을까?',
    ]);
    await grass.say_and_wait([sys_get_colored_callname(11, 52), '……']);
    era.print([
      '아까부터 ',
      grass.get_colored_name(),
      '로부터 계속해서 눈짓 신호를 받고 있던 ',
      me.get_colored_name(),
      '은(는) 드디어 적절한 타이밍에 대화에 끼어들었다.',
    ]);

    era.printButton(
      `「그냥 레이스로 이기도록 하자.」（체력+100 스킬 포인트+5）`,
      1,
    );
    era.printButton(
      '「우리 한번…… 도전해 볼까?」（체력+300 스킬 포인트+10 체중 증가）',
      2,
    );
if ((await era.input()) === 1) {
      await grass.say_and_wait([
        sys_get_colored_callname(11, 0),
        '의 말이 맞아요. 먹기 대결보다는 경기장에서 승부를 보는 게 훨씬 즐거울 거예요.',
      ]);
      await urara.say_and_wait(
        '다들 그렇게 말한다면…… 응! 우라라 알았어! 나중에 레이스에서 더 대단한 전설이 될게!',
      );
      await era.printAndWait([
        '결국 ',
        me.get_colored_name(),
        '과(와) ',
        grass.get_colored_name(),
        '의 도움 덕분에, 오늘 ',
        urara.get_colored_name(),
        '는 체중이 늘어날 위기를 무사히 넘겼다.',
      ]);
      await era.printAndWait(
        '그나저나 「경기장에서 전설이 된다」라, 정말 듣기 좋은 말이네……',
      );
      flags.wait_flag = get_attr_and_print_in_event(
        52,
        undefined,
        5,
        JSON.parse('{"체력":100}'),
      );
    } else {
      await era.printAndWait([
        '승산은 희박해 보이지만, 그래도 ',
        urara.get_colored_name(),
        '가 이번 경험을 통해 무언가 배울 수 있다면 그것대로 나쁘지 않겠지. 그래서……',
      ]);
      await urara.say_and_wait([
        '응! ',
        callname,
        '가 그렇게 말해준다면, 우라라는 꼭 갈래——',
      ]);
      await grass.say_and_wait(
        '후훗, 그 굳은 의지는 정말 대단하네요. 그럼 두 분 모두 부디 힘내세요, 아시겠죠?',
      );

      era.printButton(
        '「응? 잠깐, 뭔가 이상한데. 『두 분』이라니 그게 무슨 소리야?」',
        1,
      );
      await era.input();

      await grass.say_and_wait(
        '방금 당신이 『우리 도전해 볼까』라고 말했잖아요. 그러니까 저도 두 분을 열심히 응원해 드릴게요.',
      );
      await era.printAndWait([
        '과연 강력한 ',
        urara.get_uma_sex_title(),
        '답군. 눈 깜짝할 새에 포위망을 빠져나가다니…… 아니, 그게 아니지! 다른 누군가를 억지로 끼워 넣은 것 같은데!',
      ]);
      await urara.say_and_wait([
        '에헤? ',
        callname,
        '가 ',
        urara.get_uma_sex_title(),
        '급의 대회에 나가는 거야? 정말 대단하다! 그럼 같이 힘내자, ',
        callname,
        '!',
      ]);
      await era.printAndWait([
        '눈을 반짝이는 어린 ',
        urara.get_uma_sex_title(),
        '와, 「부드러운 눈빛」으로 자신을 지켜보는 ',
        grass.get_colored_name(),
        '를 마주하며……',
      ]);
      await era.printAndWait([
        '식은땀을 흘리던 ',
        me.get_colored_name(),
        '은(는) 결국 변명하려던 손을 내리고, 최대한 「부담스럽지 않은」 표정을 지으려 애썼다.',
      ]);
      await era.printAndWait([
        '그리고 며칠 뒤…… 전설적인 인물이 진심을 내면 얼마나 무서운지 깨닫게 되었고, ',
        me.get_colored_name(),
        '은(는) 당분간 라면 근처에도 가고 싶지 않다고 생각했다……',
      ]);
      sys_change_weight(0, 100);
      sys_change_weight(52, 100);
      flags.wait_flag = get_attr_and_print_in_event(
        52,
        undefined,
        10,
        JSON.parse('{"체력":300}'),
      );
      flags.wait_flag = sys_like_chara(11, 52, 100) || flags.wait_flag;
      flags.wait_flag = sys_like_chara(52, 11, 50) || flags.wait_flag;
    }
  };

  handlers.farthest = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (await common_out_check(urara, me, extra_flag.loc, event_object)) {
      return true;
    }
    await print_event_name('조금 돌아가 볼까?', urara);
    await era.printAndWait([
      '외출을 마치고 돌아오는 길, 너무 신나게 논 탓인지 ',
      urara.get_colored_name(),
      '가 조금 지쳐 보였다. ',
      me.get_couple_title(),
      '은 가까운 곳에서 쉬어가기로 했다.',
    ]);
    await era.printAndWait([
      '근처 공원 벤치에 앉아 다음에 무엇을 하고 놀지 잠시 계획을 세운 뒤, ',
      me.get_colored_name(),
      '은(는) 근처 자판기에서 음료수 두 캔을 뽑아왔다.',
    ]);
    await era.printAndWait([
      '하지만 따뜻한 음료를 들고 공원으로 돌아왔을 때, 방금 전까지 기운이 조금 남아있던 ',
      urara.get_colored_name(),
      '는 이미 벤치에 기댄 채 잠들어 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 팔을 꼭 껴안고 벤치 위에서 몸을 웅크린 어린 ',
      urara.get_uma_sex_title(),
      '는 꿈속에서 무언가 중얼거리며 점차 ',
      me.get_colored_name(),
      '의 품을 파고들었다.',
    ]);
    await urara.say_and_wait([
      '헤헤~ ',
      callname,
      '…… 같이 먹자…… 이건 우라라가 제일 좋아하는 과자야……',
    ]);

    era.print([
      urara.get_colored_name(),
      '는 지금 행복한 꿈을 꾸고 있는 걸까? ',
      me.get_colored_name(),
      '은(는) 잠든 ',
      urara.get_colored_name(),
      '를 깨워야 할지 잠시 고민에 빠졌다……',
    ]);
    era.printButton('「그럼…… 우라라 몫까지 내가 다 먹어버린다?」（스킬 포인트+30）', 1);
    era.printButton(
      `방해하지 않고, 잠든 우라라를 등에 업고 돌아간다.（스태미나+10）`,
      2,
    );
    if ((await era.input()) === 1) {
      await era.printAndWait([
        urara.get_colored_name(),
        '의 귓가에 조용히 다가가, ',
        me.get_colored_name(),
        '은(는) 어린 ',
        urara.get_uma_sex_title(),
        '의 귀 근처 솜털을 매만지며 살며시 ',
        urara.get_colored_name(),
        '의 꿈나라를 흔들었다.',
      ]);
      await urara.say_and_wait(['에에? 안 돼! 혼자 다 먹으면 치사해, ', callname, '!']);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 과자를 독차지했다는 말에 깜짝 놀라 꿈에서 깬 ',
        urara.get_colored_name(),
        '는 꼬리 털까지 쭈뼛 세우며 벤치에서 튀어 올랐다.',
      ]);
      await era.printAndWait([
        '하지만 비몽사몽한 상태에서 정신을 차린 어린 ',
        urara.get_uma_sex_title(),
        '의 멍한 눈동자 앞에는, 똑같이 깜짝 놀란 트레이너의 눈동자만이 마주 보고 있었다.',
      ]);
      await urara.say_and_wait('어라? 과, 과자가…… 아, 설마 꿈이었나……?');

      era.printButton('「맞아, 우라라는 꿈속에서도 기세가 아주 대단하더라?」', 1);
      await era.input();

      await urara.say_and_wait([
        '하긴 그래, ',
        callname,
        '가 우라라의 과자를 뺏어 먹을 리 없지…… 그래도 좋은 꿈이었으니까 괜찮아!',
      ]);
      await urara.say_and_wait([
        '그치만 ',
        callname,
        ', 다음에 또 기회가 생기면 그때는 우라라랑 같이 과자 먹어줄 거지?',
      ]);

      era.printButton('「당연하지.」', 1);
      await era.input();

      await era.printAndWait([
        '아직 온기가 남아있는 음료를 ',
        urara.get_colored_name(),
        '에게 건네주며, ',
        me.get_colored_name(),
        '은(는) 「약속한 거다!」라고 외치는 ',
        urara.get_colored_name(),
        '와 또 하나의 약속을 맺었다.',
      ]);
      await era.printAndWait([
        '그 후 다 마신 캔을 분리수거함에 버린 뒤, ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 노을을 등지고 다시 귀갓길에 올랐다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, undefined, 30);
    } else {
      await era.printAndWait([
        '품 안의 ',
        urara.get_colored_name(),
        '를 조심스럽게 등으로 옮겨 업으며, ',
        me.get_colored_name(),
        '은(는) 최대한 ',
        urara.get_colored_name(),
        '가 깨지 않도록 주의하며 천천히 일어났다.',
      ]);
      await urara.say_and_wait(['으응……? ', callname, '…… 우라라 방금 무슨 일 있었어?']);

      era.printButton('「깼어? 이제 일찍 돌아가서 쉬어야지, 괜찮겠어?」', 1);
      await era.input();

      await era.printAndWait([
        '걸을 때의 흔들림 때문에 ',
        urara.get_colored_name(),
        '는 의외로 빨리 깨어난 듯 보였지만, ',
        me.get_colored_name(),
        '은(는) 당연히 ',
        urara.get_colored_name(),
        '를 바로 내려놓을 생각이 없었다.',
      ]);
      await urara.say_and_wait('에헤…… 우라라가 잠들었었구나…… 후아……');
      await era.printAndWait([
        '어린 ',
        urara.get_uma_sex_title(),
        '를 등에 업은 채로 조금 더 걸어가자, ',
        urara.get_colored_name(),
        '는 금세 다시 아까의 달콤한 꿈나라로 돌아갔다.',
      ]);
      await urara.say_and_wait([
        '헤헤…… 맛있지? 여기 더 많이 있어…… ',
        callname,
        '는 어른이니까…… 너무 부끄러워하지 마……',
      ]);
      await era.printAndWait(
        '도대체 무슨 내용의 꿈을 꾸길래 저런 말을 하는 건지 궁금하지 않다면 거짓말이겠지만……',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '가 깨지 않도록 ',
        me.get_colored_name(),
        '은(는) 천천히 걸어 기숙사에 도착했다. 결국 당번 학생에게 ',
        urara.get_colored_name(),
        '를 인계할 때까지도 ',
        urara.get_colored_name(),
        '는 한 번도 깨어나지 않았다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, [0, 10, 0, 0, 0], 0);
    }
  };
};