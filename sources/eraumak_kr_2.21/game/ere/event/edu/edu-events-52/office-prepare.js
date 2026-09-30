const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.fans_letr = async (urara, me, callname, flags) => {
    await print_event_name('팬레터', urara);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 ',
      me.get_colored_name(),
      '은(는) 함께 팬들이 보낸 선물을 정리하던 중, 대부분 아는 사람들이 보낸 것들 사이에 끼어 있는 작은 편지 봉투 하나를 발견했다.',
    ]);
    await era.printAndWait([
      '평소처럼 모든 편지를 소중히 대하는 ',
      urara.get_colored_name(),
      '는 눈에 띄지 않는 그 편지도 조심스레 펴 보았고, 이내 기쁜 듯 눈을 크게 떴다……',
    ]);
    await urara.say_and_wait([
      callname,
      '! 이건 아주 멀리 사는 아이가 보낸 편지인가 봐!',
    ]);
    await urara.say_and_wait(
      '『포기하지 않는 모습을 보고 용기를 얻었어요』……라고 적혀 있어. 왠지 조금 부끄러운걸!',
    );
    await urara.say_and_wait(
      '그러니까 다음에는 꼭 이겨야겠어! 그때가 되면 이 아이가 나를 보며 더 기뻐해 줄까?',
    );

    era.printButton('「당연하지, 우라라가 승리하는 모습을 보면 그 아이도 분명 기뻐할 거야.」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 확신에 찬 대답에, ',
      urara.get_colored_name(),
      '는 웃으며 답장을 쓰기 시작했다. 멀리서 도착한 응원 덕분인지, ',
      urara.get_colored_name(),
      '의 의욕도 한층 더 솟아올랐다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, undefined, 30);
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.race_clothe = async (urara, me, callname, flags) => {
    await print_event_name('승부복에 대하여', urara);
    await era.printAndWait([
      '오늘, ',
      urara.get_colored_name(),
      '는 얼마 전 사고로 파손되어 수리를 맡겼던 승부복을 드디어 돌려받았다.',
    ]);
    await urara.say_and_wait(
      '헤헤~ 우라라의 승부복이 드디어 돌아왔어! 승부복을 입고 레이스에 나가는 건 역시 정말 멋진 일이라고 생각해──!',
    );
    await era.printAndWait([
      '소박하지만 처음부터 ',
      urara.sex,
      '와 함께해 온 첫 승부복을 품에 안자, ',
      urara.get_colored_name(),
      '의 기분이 눈에 띄게 좋아졌다.',
    ]);
    await era.printAndWait([
      '그러고 보면 승부복의 디자인은 보통 ',
      urara.get_uma_sex_title(),
      '가 직접 참여하여 완성되기에, 모든 승부복은 세상에 단 하나뿐인 존재다.',
    ]);
    await era.printAndWait([
      '타인이 아름다움과 추함을 어떻게 평가하든, 각자의 개성이 담긴 이 옷들은 「',
      urara.get_teen_sex_title(),
      '들의 꿈을 담은 예복」이라 불릴 자격이 충분했다.',
    ]);
    await era.printAndWait([
      '다만 ',
      urara.get_colored_name(),
      '가 스스로 그려낸 「꿈의 첫 형태」는, 비록 ',
      urara.sex,
      '답기는 하지만 어딘가 너무 「평범」해 보이기도 했는데……',
    ]);

    era.printButton(
      '「……그러고 보니, 우라라는 처음에 이 옷을 어떻게 디자인하게 된 건지 물어봐도 될까?」',
      1,
    );
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 조심스러운 질문에, ',
      urara.get_colored_name(),
      '는 평소처럼 활기찬 미소로 답했다.',
    ]);
    await urara.say_and_wait(
      '응? 사실 별거 아냐! 이 옷의 디자인은 어릴 때 처음으로 달리기를 했을 때 입었던 체육복을 참고했거든!',
    );
    await urara.say_and_wait(
      '비록 이기지는 못했지만, 엄마랑 아빠가 나를 칭찬해 주셨어. 그래서 이 옷을 입으면 우라라도 강해질 수 있을 것 같은 기분이 들어!',
    );
    await urara.say_and_wait(
      '그리고 강해진 다음에는, 이 옷을 입었을 때의 기분을 전해서 모두를 즐겁게 해주고 싶어!',
    );
    await era.printAndWait([
      '그렇구나, ',
      urara.get_colored_name(),
      '의 꿈은 언제나 이토록 순수하고 소박했기에 승부복 또한 그러했던 것이다. 그리고, 「강해진 다음에」라니……',
    ]);
    await era.printAndWait([
      '어찌 모를 수 있겠는가. 승부복을 가졌다고 해서 생애 동안 그것을 입을 기회가 반드시 주어지는 것은 아니라는 사실을, ',
      urara.get_colored_name(),
      '또한 잘 알고 있었다.',
    ]);
    await era.printAndWait([
      '아직 미숙할지언정, ',
      urara.get_colored_name(),
      '는 처음부터 나름의 각오를 다지고 있었던 모양이다——',
    ]);

    urara.say(['맞다, ', callname, '! 어렵게 수리한 거니까…… 오늘 이걸 입고 훈련해도 돼?']);
    era.printButton('「옷이 또 망가지면 곤란해.」（속도+20）', 1);
    era.printButton('「우라라가 즐겁다면 안 될 것도 없지.」（스테미나+20）', 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      await urara.say_and_wait(
        '——그렇네, 또 망가지면 큰일이니까. 승부복인 만큼 소중히 아껴야겠어.',
      );
      await urara.say_and_wait([
        '우라라는 계속 이겨나갈 거야! 그러니까 ',
        callname,
        ', 내가 이 옷을 입을 때가 아닐 때는 우라라 대신 잘 보관해 줄 수 있어?',
      ]);
      await era.printAndWait([
        '언젠가 승부복을 당당히 입을 날을 기대하며, ',
        urara.get_colored_name(),
        '는 자신의 「꿈」을 정성껏 접어 웃으며 ',
        me.get_colored_name(),
        '의 손에 맡겼다.',
      ]);
      attr_change[attr_enum.speed] = 20;
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        '의 가득한 기대를 마주하자, ',
        me.get_colored_name(),
        '은(는) 차마 어린 ',
        urara.get_uma_sex_title(),
        '의 그 찬란한 미소에 반대 의견을 내놓지 못했다.',
      ]);
      await urara.say_and_wait([
        '정말? 고마워, ',
        callname,
        '! 정말 열심히 훈련해서, 나중에도 계속 이 옷을 입을 수 있게 할게!',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '는 만족한 듯 웃더니, 이내 「다음에 입기 전까지 소중히 아껴야지!」라며 스스로 승부복의 보관을 ',
        me.get_colored_name(),
        '에게 부탁했다.',
      ]);
      attr_change[attr_enum.strength] = 20;
    }
    await era.printAndWait([
      '그렇다, 트레이너는 달리기를 선택한 「',
      urara.sex,
      '들」의 꿈을 함께 짊어지는 직업이며, ',
      me.get_colored_name(),
      '역시 ',
      urara.get_colored_name(),
      '가 「신뢰」하는 트레이너인 것이다——',
    ]);
    await era.printAndWait([
      '반드시 ',
      urara.get_colored_name(),
      '가 마지막까지 달릴 수 있게 하겠어. 가슴 속에 어린 ',
      urara.get_uma_sex_title(),
      '와 처음 만났을 때와 비슷한 고동을 느끼며, ',
      me.get_colored_name(),
      '은(는) 손에 든 승부복을 보며 결의를 다졌다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
  };
};