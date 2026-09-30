const era = require('#/era-electron');

const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');
const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
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

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 31] = async (maya, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:24:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    await print_event_name('축제', maya);
    const sunday = get_chara_talk(55);
    const nice_nature = get_chara_talk(60);
    await era.printAndWait('이것은 여름 합숙 중에 일어난 일이다──');
    await maya.say_and_wait(['아, ', callname, '! 오늘 밤에 시간 있어?']);
    await maya.say_and_wait('사실은……');
    await sunday.say_and_wait([
      '아, ',
      sys_get_colored_callname(55, 24),
      '☆',
    ]);
    await maya.say_and_wait([
      '이랑 ',
      sys_get_colored_callname(24, 55),
      '! 헬로 헬로☆',
    ]);
    await sunday.say_and_wait([
      '헬로 헬로＆마블러스☆ 아하하, ',
      sys_get_colored_callname(55, 24),
      '★',
    ]);
    await era.printAndWait([maya.sex, '는 ', sunday.get_colored_name(), '이다.']);
    await sunday.say_and_wait([
      '오늘 밤에 같이 축제 구경 가자☆ ',
      sys_get_colored_callname(55, 60),
      '도 불렀어★',
    ]);
    await nice_nature.say_and_wait([
      '잠깐만. 거기 폭주하는 ',
      maya.get_child_sex_title(),
      ', 기다려봐. 난 아직 『권유받은』 단계일 뿐이잖아?',
    ]);
    await sunday.say_and_wait([
      '그런 사소한 건 신경 쓰지 마~☆ 그래서 ',
      sys_get_colored_callname(55, 24),
      ', 우리 몇 시에 모일까?',
    ]);
    await maya.say_and_wait('아, 맞다! 그 일인데……');
    await maya.say_and_wait([
      '나 이번에는 빠질게! 오늘 밤에는 ',
      callname,
      '이랑 비밀 특훈을 하고 싶거든!',
    ]);
    await sunday.say_and_wait('에에에────!?');
    await nice_nature.say_and_wait('호오……?');
    era.printButton('「우리 그런 약속 했었나?」', 1);
    await era.input();
    await maya.say_and_wait('응, 지금 말하려던 참이야!');
    await maya.say_and_wait([
      '그렇게 됐으니까, ',
      sys_get_colored_callname(24, 55),
      '이랑 ',
      sys_get_colored_callname(24, 60),
      '는 축제 가서 재밌게 놀아!',
    ]);
    await maya.say_and_wait(['그럼, ', callname, '. 우리 가자♪']);
    await nice_nature.say_and_wait([
      '호오……? 반짝반짝 ',
      maya.get_child_sex_title(),
      ', 정말 ',
      callname,
      '에게 푹 빠졌네~',
    ]);
    await sunday.say_and_wait('…………');
    await nice_nature.say_and_wait([
      '저기, 야~? ',
      sys_get_colored_callname(60, 55),
      ', 듣고 있어?',
    ]);
    await sunday.say_and_wait([sys_get_colored_callname(60, 55), '────!']);
    await nice_nature.say_and_wait('꺄악!?');
    await sunday.say_and_wait([
      sys_get_colored_callname(55, 24),
      ', 정말 아름다워☆ 나에겐 없는 아름다움을 깨닫게 해줬어★',
    ]);
    await nice_nature.say_and_wait('뭐, 뭐야……?');
    await sunday.say_and_wait([
      sys_get_colored_callname(55, 60),
      '! 우리도 뒤처지면 안 돼! ',
      sys_get_colored_callname(55, 24),
      '에게 지지 않을 특훈을 하는 거야!',
    ]);
    await sunday.say_and_wait('쇠뿔도 단김에 빼야 마블러스☆ 좋아, 가자!!');
    await nice_nature.say_and_wait('뭐, 뭐야~~!? 잠깐만, 잡아당기지 마──!!');
    era.drawLine();
    await maya.say_and_wait('하아…… 후우……');
    await maya.say_and_wait([
      '좋아, 세 세트 끝! ',
      callname,
      ', 다음은 뭐 훈련할 거야?',
    ]);
    await era.printAndWait('（슈웅……）');
    await maya.say_and_wait('응? 방금 그건──');
    await era.printAndWait('（콰앙…… 팡……）');
    await maya.say_and_wait(['와아! 불꽃놀이다! ', callname, ', 불꽃놀이야!!']);
    await maya.say_and_wait('아하하, 크다. 설마 여기서도 보일 줄은 몰랐네.');
    await maya.say_and_wait('헤헤. 행사장에서 보면 얼마나 예쁠까?');
    era.printButton('「역시 축제에 가고 싶어?」', 1);
    await era.input();
    await maya.say_and_wait('……음~ 괜찮아!');
    await maya.say_and_wait('축제는 나중에 가도 되니까.');
    await maya.say_and_wait([
      '내가 『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』에서 우승해서, ',
      callname,
      '의 마음을 꽉 잡은 다음에 갈래!',
    ]);
    era.printButton('「이미 내 마음은 네가 잡고 있어」（파워+20）', 1);
    era.printButton('「그럼 정말 열심히 노력해야겠네」（근성+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('에잇, 정말? 하지만……');
      await maya.say_and_wait('분명 아직 부족할 거야! 마야는 그렇게 생각하거든!');
      await maya.say_and_wait([
        '마야가 ',
        callname,
        '을 완전히 사로잡아서, 나 없이는 안 되게 만들 거야!',
      ]);
      await maya.say_and_wait(['히히, ', callname, ', 각오 단단히 하고 있으라구♪']);
      await era.printAndWait([
        '──그 말을 남긴 채, ',
        maya.get_colored_name(),
        '은 다시 해변을 달리기 시작했다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
    } else {
      await maya.say_and_wait('후후. 나한테 그 정도는 아무것도 아니지♪');
      await maya.say_and_wait('왜냐면 난 아직 성장기인걸! 금방 해낼 수 있어!');
      await maya.say_and_wait([
        '『',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '』이랑 다른 레이스에서도 이겨서, ',
        callname,
        '이 나한테 홀딱 반하게 만들 거야!',
      ]);
      await maya.say_and_wait([
        '나랑 ',
        callname,
        '이 다시 여름을 맞이할 때는, 꼭 바다에서 나한테 어른스러운 상을 줘야 해……',
      ]);
      await era.printAndWait('（슈웅…… 콰앙────!!）');
      await maya.say_and_wait('어, 어어~!? 왜 하필 이 타이밍에 터지는 거야~!?');
      await maya.say_and_wait('불꽃놀이 이 바보바보──! 분위기 좀 파악하라구!');
      await era.printAndWait('（콰앙────!!）');
      await maya.say_and_wait('으으~ 방금 분위기 좋았는데~! 정말이지~!!');
      await era.printAndWait([
        maya.get_colored_name(),
        '은 발을 동동 구르며, 불꽃놀이를 향해 화를 냈다……',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers[95 + 4] = async (maya, me, callname) => {
    await print_event_name('청춘의 반짝임', maya);
    const teio = get_chara_talk(3);
    const amazon = get_chara_talk(12);
    const nice_nature = get_chara_talk(60);
    await era.printAndWait([
      '시니어 시즌의 봄이 찾아왔다. 최근 ',
      maya.get_colored_name(),
      '의 트레이닝 상태는──',
    ]);
    await maya.say_and_wait([callname, '! 코스 세 바퀴는 너무 재미없어!']);
    await maya.say_and_wait('나 이제 서른 바퀴는 달려야 할 것 같아!');
    era.printButton('「그건 다리에 너무 부담이 가」', 1);
    await era.input();
    await maya.say_and_wait('에에──!? 그럼그럼, 얼른 다음에 할 트레이닝 좀 생각해 봐.');
    await maya.say_and_wait([
      '나는 알고 있거든, ',
      callname,
      '은 분명 나를 즐겁게 해줄 거란 걸!',
    ]);
    await maya.say_and_wait(
      '아, 어제 준 과제 리스트는 벌써 전부 마스터했어! 그러니까 거기 없는 걸로 부탁해☆',
    );
    await era.printAndWait([
      '……그렇게 ',
      me.get_colored_name(),
      '은(는) 매일 새로운 트레이닝 메뉴를 요구받았다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      maya.get_colored_name(),
      '은 이미 목표를 정하고 노력하고 있다. ',
      maya.sex,
      '의 목표를 이루어 주는 것이 트레이너의 역할이다──',
    ]);
    await maya.say_and_wait(['좋은 아침! ', callname, '! 오늘도 힘내자!']);
    await maya.say_and_wait(['어라, ', callname, '. 얼굴색이 너무 안 좋은데……']);
    await maya.say_and_wait(['앗, ', callname, '!?']);
    await era.printAndWait('（……털썩）');
    await amazon.say_and_wait('……이런, 위험할 뻔했군.');
    await amazon.say_and_wait('하마터면 쓰러질 뻔했어.');
    era.printButton('「네가 잡아준 거야……?」', 1);
    await era.input();
    await amazon.say_and_wait('하하, 고마워할 거 없어. 별거 아니니까.');
    await amazon.say_and_wait('그나저나 다크서클이 심하군…… 잠을 거의 못 잔 모양이야.');
    await amazon.say_and_wait([
      '내가 말하건데, ',
      sys_get_colored_callname(12, 24),
      '!',
    ]);
    await maya.say_and_wait('아, 아와와……');
    await amazon.say_and_wait([
      sys_get_colored_callname(12, 24),
      '! 겁먹지 말고 대답해!',
    ]);
    await maya.say_and_wait('네, 넵!!');
    await amazon.say_and_wait([
      '……음, 됐어. 그럼 ',
      sys_get_callname(12, 0),
      ', 당신은 여기서 좀 쉬어.',
    ]);
    await amazon.say_and_wait('이 녀석은 내가 맡도록 하지.');
    era.printButton('「에엣!?」', 1);
    await era.input();
    await amazon.say_and_wait([
      '하하, 그렇게 당황하지 마. ',
      maya.sex,
      '를 잡아먹기라도 하겠나.',
    ]);
    if (RaceHistory.get(24).get_result(95)?.race === race_enum.arim_kin) {
      await amazon.say_and_wait([
        '지난번 『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』에서의 선전 포고…… 솔직히 인상 깊었거든.',
      ]);
    }
    await amazon.say_and_wait('그러니 나도 좀 돕게 해줘.');
    await amazon.say_and_wait('이렇게 전도유망한 아이를 당신 혼자 독차지하게 둘 순 없으니까.');
    await maya.say_and_wait([
      '에에──!? ',
      sys_get_colored_callname(24, 12),
      '……!?',
    ]);
    await maya.say_and_wait([
      '아와와와……!? 죄, 죄송해요. 제 마음엔 오로지 ',
      callname,
      ' 뿐이라서……!',
    ]);
    await amazon.say_and_wait(
      '……저기 말이야, 좀 진정할래? 이건 그냥 제안일 뿐이야. 중요한 건 네가 『강해지고 싶은가』 하는 거지.',
    );
    await amazon.say_and_wait([
      '어때, ',
      sys_get_callname(12, 0),
      '. 잠시 ',
      maya.sex,
      '를 나에게 맡기겠나?',
    ]);
    await era.printAndWait([
      '──「여걸」 ',
      amazon.get_colored_name(),
      '. ',
      maya.sex,
      '는 작년과 올해의 「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」에서 ',
      get_chara_talk(16).get_colored_name(),
      '의 강력한 라이벌이었다.',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      '를 위해서라면, ',
      me.get_colored_name(),
      '은(는) 자신의 방식만 고집할 게 아니라 ',
      maya.sex,
      '의 의견도 수용해야 한다……!',
    ]);
    era.printButton('「그럼 부탁할게!」', 1);
    await era.input();
    await amazon.say_and_wait('좋아, 그래야지! 히시 아마존 식 트레이닝 시작이다!');
    era.drawLine();
    await amazon.say_and_wait([
      '자, ',
      sys_get_colored_callname(12, 24),
      '. 넌 쉬지 말고 계속 달려야 해. 내가 꼬리를 잡지 못하도록 말이야.',
    ]);
    await maya.say_and_wait(
      '어라, 이거 그냥 『꼬리잡기 놀이』잖아? 나 유치원 때 해본 적 있는데……',
    );
    await maya.say_and_wait('이게 정말 훈련이 맞아? ……그냥 노는 거 같은데?');
    await amazon.say_and_wait('오호, 여유만만하군. 그럼 시작한다.');
    await maya.say_and_wait('으, 으으……');
    await amazon.say_and_wait('어이 어이, 왜 그래? 벌써 열 번 넘게 잡혔다고!');
    await maya.say_and_wait([
      '그건 ',
      sys_get_colored_callname(24, 12),
      '이 너무 치사해서 그런 거잖아! 갑자기 술래 숫자를 늘리고!',
    ]);
    await teio.say_and_wait([
      '후훗! 이번엔 내가 ',
      sys_get_colored_callname(3, 24),
      '를 잡으러 갈게!',
    ]);
    await nice_nature.say_and_wait('오오, 다들 즐거워 보이네……');
    await nice_nature.say_and_wait([
      '저기, ',
      sys_get_colored_callname(60, 12),
      '. 이렇게 도와주기만 하면 되는 거야?',
    ]);
    await amazon.say_and_wait([
      '응, 충분해! 고마워! ……그나저나 ',
      sys_get_colored_callname(12, 24),
      '.',
    ]);
    await amazon.say_and_wait('간단히 말해서, 너의 약점은 바로 관찰력 부족이야.');
    await maya.say_and_wait('……관찰력?');
    await maya.say_and_wait(
      '관찰한다는 건 상황을 파악하는 거잖아? 그건 이미 알고 있어. 규칙이나 도망치는 방법 같은 거.',
    );
    await maya.say_and_wait([
      '하지만 ',
      sys_get_colored_callname(24, 12),
      '이 바로 술래 숫자랑 규칙을 바꿔버렸잖아! 너무 비겁해──',
    ]);
    await amazon.say_and_wait(
      '정말이지, 그래서 관찰력…… 아니, 네가 관찰하려고 들지 않는다는 거야.',
    );
    await maya.say_and_wait('……어?');
    await amazon.say_and_wait('내가 보기에 넌 아주 훌륭한 재능과 트레이너를 가졌어.');
    await amazon.say_and_wait(
      '넌 정말로 뭐든 해낼 수 있겠지. 그래서 네 주변 어른들도 너에게 많은 걸 해주고 있고.',
    );
    await amazon.say_and_wait('다만 말이야, 넌 타인에게 너무 의지하고 있어.');
    await amazon.say_and_wait(
      '지금도 그래. 넌 일단 이해했다고 생각하면…… 아니, 이해했다고 착각하면……',
    );
    await amazon.say_and_wait(
      '『자신이 모르는 것을 이해하려 들지 않아』…… 너 스스로 그런 습관을 들여버린 거야.',
    );
    await amazon.say_and_wait('난 지금 『꼬리잡기 놀이』를 하는 게 아냐. 이건 레이스를 위한 훈련이야.');
    await amazon.say_and_wait(
      '머리를 더 써서 생각해 봐. 실제 경기장에서는 여러 우마무스메들이 널 노릴 거야. 도중에 전략도 바뀌겠지.',
    );
    await amazon.say_and_wait(
      '그럴 때 넌 어떻게 할 거지? 그때그때 상황에 맞춰 유연하게 빠져나가야 할 거 아냐…… 내 말이 틀려?',
    );
    await maya.say_and_wait('……으음.');
    await amazon.say_and_wait('……덧붙여서 말하자면, 오늘 아침 일도 그래.');
    await amazon.say_and_wait([
      '넌 아까 ',
      sys_get_callname(12, 0),
      '이 널 위해 얼마나 무리하고 있었는지 눈치챘어?',
    ]);
    await maya.say_and_wait('……!');
    await amazon.say_and_wait('모처럼 대단한 재능을 가졌으면 그걸 끝까지 발휘해야지.');
    await amazon.say_and_wait([
      '아니면 계속 『나 이제 안 뛰어!』라고 울면서 ',
      sys_get_callname(12, 0),
      '을 곤란하게 만드는 어린애로 남을 거야?',
    ]);
    await maya.say_and_wait('으으~~! 마야는 절대 안 그래!!');
    await maya.say_and_wait('마야는 어른스러운 여자가 될 거야! 절대 안 울어!');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 12),
      '! 한 번 더 해!! 이번엔 절대 안 잡힐 거니까!',
    ]);
    await amazon.say_and_wait('하하, 좋군. 그럼 시작하자!!');
    await maya.say_and_wait('흥──! 다시 한번! 나 이제 『이해했다구』!!');
    await amazon.say_and_wait('오! 좋아, 바로 그거야! 머리가 아니라 몸이 기억하게 만드는 거다!');
    await era.printAndWait([
      '──찬란한 노을빛 아래에서, ',
      maya.get_teen_sex_title(),
      '들이 땀을 흘리며 코스 위를 끊임없이 달렸다.',
    ]);
  };

  handlers[95 + 6] = async (maya, me, callname) => {
    era.set('cflag:24:축제이벤트표시', 0);
    await print_event_name('발렌타인', maya);
    const snow = get_chara_talk(29);
    era.println();
    await era.printAndWait([
      '점심시간, ',
      me.get_colored_name(),
      '이(가) 교내를 걷고 있을 때──',
    ]);
    await maya.say_and_wait([
      '음~♪ ',
      sys_get_colored_callname(24, 29),
      '의 초콜릿 정말 맛있다~♪',
    ]);
    await snow.say_and_wait([
      '헤헤. ',
      sys_get_colored_callname(29, 24),
      '이 준 초콜릿도 엄청 맛있어~',
    ]);
    await snow.say_and_wait('게다가 포장도 엄청 화려하고 반짝거려! 이건 어디서 산 거야?');
    await maya.say_and_wait([
      '흐흥…… 나는 어른스러운 ',
      maya.get_phy_sex_title(),
      '이니까! 유행하는 가게쯤은 금방 찾아내지☆',
    ]);
    await snow.say_and_wait([
      '와아……! 역시 『시티 ',
      maya.get_child_sex_title(),
      '』네!',
    ]);
    await maya.say_and_wait('에헴! 쇼핑하다 고민될 때는 나한테 맡기라구!');
    await maya.say_and_wait(['……아! ', callname, '이다! 헬로☆']);
    await maya.say_and_wait(
      '히히, 혹시 마야의 초콜릿을 못 기다려서 마중 나온 거야? 못 말려, 정말 어쩔 수 없다니까♪',
    );
    await maya.say_and_wait([
      sys_get_colored_callname(24, 29),
      ', 나 먼저 갈게──! 지금부턴 어·른·의·시·간☆이야',
    ]);
    await snow.say_and_wait(
      '어, 어른…… 어른의 시간!? 너, 너너너희 둘이 뭘 하려고~!?',
    );
    await era.printAndWait([
      '특별히 뭘 할 생각은 없었지만…… 하지만 ',
      me.get_colored_name(),
      '은(는) ',
      snow.get_colored_name(),
      '의 오해를 풀 겨를도 없이 곧장 ',
      maya.get_colored_name(),
      '에게 끌려갔다……',
    ]);
    await maya.say_and_wait('자, 여기! 이건 내가 주는 초콜릿이야.');
    await maya.say_and_wait('헤헤, 얼른 열어봐, 얼른☆');
    await era.printAndWait([
      maya.sex,
      '의 기대에 찬 시선 아래, ',
      me.get_colored_name(),
      '은(는) ',
      maya.sex,
      '가 ',
      me.get_colored_name(),
      '에게 준 작은 상자를 열었다. 그 안에는──',
    ]);
    await era.printAndWait(
      '……이걸 다 채울 수 있나 싶을 정도로 상자에 꽉꽉 눌러 담은 초콜릿이 들어 있었다.',
    );
    await maya.say_and_wait(
      '별 모양이 붙은 건 백화점에서 샀고, 하트 모양은 역 안에 있는 전문점에서 샀어!',
    );
    era.printButton('「정말 많이도 샀네」', 1);
    await era.input();
    await maya.say_and_wait('헤헤, 오늘을 위해서 나 혼자 여러 가게를 돌아다녔거든!');
    await maya.say_and_wait('그·러·니·까……');
    await maya.say_and_wait('초콜릿을 이만큼이나 줬으니까 나랑 꼭 데이트해 줘야 해, 답례로♪');
    era.drawLine();
    await era.printAndWait([
      '이어서 이날 ',
      maya.get_colored_name(),
      '의 바람대로, ',
      me.get_couple_title(),
      '은(는) 함께 초콜릿 전문점으로 향했다.',
    ]);
    await era.printAndWait('……거기에는 수제 느낌이 물씬 풍기는 소박한 초코 컵케이크가 있었다.');
    await era.printAndWait(
      '초콜릿이 종이컵 밖으로 조금 넘쳐흐른 것도 있었지만, 하나하나 정성스럽게 만들어져 있었다──',
    );
    era.printButton('「맛있어 보이네」', 1);
    await era.input();
    await maya.say_and_wait('와아…………!');
    await maya.say_and_wait(['헤헤…… ', callname, '. 다 먹고 나서도 꼭 그렇게 말해줘야 해☆']);
    await maya.say_and_wait([
      '히히, 이건 특별한 ',
      maya.name,
      ' 케이크니까 밖에서는 절대 못 사거든!',
    ]);
    await maya.say_and_wait('……정말 특별하다구.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 기분 좋게 달콤한 초코 컵케이크를 먹으며 하루를 보냈다.',
    ]);
  };

  handlers[95 + 14] = async (maya, me, callname) => {
    era.set('cflag:24:축제이벤트표시', 0);
    await print_event_name('팬 대감사제', maya);
    const amazon = get_chara_talk(12);
    await era.printAndWait([
      '팬 대감사제. 평소 자신들을 응원해 주는 팬들을 초대하여 보답하는 축제다.',
    ]);
    await era.printAndWait('봄철 감사제의 하이라이트는 스포츠 대항전 등의 이벤트다──');
    await maya.say_and_wait(
      '하하, 분위기 진짜 뜨겁다~☆ 얘, 다음 종목은 더트 2000미터래~!',
    );
    await amazon.say_and_wait('……어이, 너도 참가하잖아! 얼른 가봐!');
    await maya.say_and_wait([
      '에에~!? 싫어 싫어! 나 지금 ',
      callname,
      '이랑 데이트 중이란 말이야~!',
    ]);
    era.printButton('「다녀와!」', 1);
    await era.input();
    await maya.say_and_wait(['에잇, 왜 ', callname, '까지 그러는 거야!?']);
    era.drawLine();
    await maya.say_and_wait([
      '정말이지…… ',
      sys_get_colored_callname(24, 12),
      ', 너무해~ 내 소중한 데이트를……',
    ]);
    await amazon.say_and_wait(
      '……못 말리겠군. 오늘이 축제인 건 맞지만 너무 들뜨지는 마.',
    );
    await amazon.say_and_wait('설마 잊은 건 아니겠지? 네 주변을 잘 둘러봐.');
    await amazon.say_and_wait('그리고 집중해서 느껴보는 거다.');
    await maya.say_and_wait('……주변……?');
    await get_chara_talk(40).say_and_wait('……훗. 내 힘을 보여주지.');
    await get_chara_talk(6).say_and_wait('음…… 나쁘지 않군.');
    await get_chara_talk(46).say_and_wait(
      '음~ 다들 팔코를 보고 있네☆ 야호~ 이대로 모두의 시선을 독점해버릴까♪',
    );
    await amazon.say_and_wait('……어때?');
    await maya.say_and_wait('……평소엔 별로 같이 뛸 일이 없는 사람들이네.');
    await amazon.say_and_wait('그래. 네가 좀처럼 만나기 힘든 상대들이 한자리에 모였어.');
    await amazon.say_and_wait('이번 레이스는 정식 레이스는 아니야. 하지만 그렇기에──');
    await amazon.say_and_wait('평소엔 만날 수 없는 상대와 정면 승부를 할 수 있는 거지.');
    await amazon.say_and_wait(
      '그게 어떤 레이스든, 저들과 같은 무대에 설 기회는 인생에 단 한 번뿐일지도 몰라.',
    );
    await amazon.say_and_wait('그러니 매 레이스 전력을 다해…… 마음껏 즐기는 거다.');
    await maya.say_and_wait('……전력을 다해, 즐긴다.');
    await amazon.say_and_wait('그래. 그러면 너는 이 레이스에서 더 성장하겠지! 그리고──');
    await maya.say_and_wait('……성장!? 어른!?');
    await maya.say_and_wait([
      '라져☆ 오늘 내가 ',
      sys_get_colored_callname(24, 12),
      '을 저 멀리 따돌리고 골인할게!',
    ]);
    await amazon.say_and_wait('어이!? 그건 너무 의욕만 앞선 거 아니야!?');
    await era.printAndWait('그렇게 더트 2000미터 레이스가 시작되었다──');
    era.drawLine();
    const chara = sys_get_chara_pseudo(24);
    await simulation_game_in_event(
      chara,
      undefined,
      race_enum.siri_sta,
      '팬 대감사제',
    );
if (chara.rank.curr === 1) {
      await maya.say_and_wait([callname, '────! 나 1등 했어──☆']);
      era.printButton('「정말 대단해!」', 1);
      await era.input();
      await maya.say_and_wait('헤헤…… 나 더 많이 칭찬해 줘☆');
      await amazon.say_and_wait([
        '……정말 앞날이 기대되는 ',
        maya.get_child_sex_title(),
        '군. 나뿐만 아니라 저 녀석들까지 이길 줄이야……',
      ]);
      await maya.say_and_wait([
        '히히. ',
        sys_get_callname(24, 12),
        ', 내가 이 레이스에 진심으로 임하게 해줘서 고마워!',
      ]);
      await maya.say_and_wait('달리면서 정말 즐거웠어! 엄청나게…… 짜릿했어.');
      await maya.say_and_wait(
        '이 레이스라서 할 수 있는 것들을 생각했고, 작전도 많이 고민했거든.',
      );
      await maya.say_and_wait(
        '──마야는 이번 레이스에서 최고의 달리기 방식을 전부 보여줬어.',
      );
      await amazon.say_and_wait('으윽……! 그게 다 현장에서 즉흥적으로 생각한 거란 말이냐?');
      await amazon.say_and_wait([
        '이 ',
        maya.get_child_sex_title(),
        ', 정말로 무서운 재능이군……!',
      ]);
      await era.printAndWait([
        '마야노 탑건은 한 걸음씩 착실하게 강해지고 있었고, ',
        me.get_colored_name(),
        '은(는) 그것을 확실히 체감하며 하루를 보냈다.',
      ]);
    } else {
      await maya.say_and_wait(['으으…… ', callname, '……']);
      await amazon.say_and_wait([
        '하하하! ',
        sys_get_colored_callname(12, 24),
        '! 아주 처참하게 패배했구나.',
      ]);
      await amazon.say_and_wait(
        '하지만 이것도 좋은 기회다. 승자의 얼굴을 똑똑히 봐두고, 그 분함을 원동력으로 삼으라고.',
      );
      await amazon.say_and_wait('나도 그렇게 강해졌으니까…… 하하.');
      await maya.say_and_wait('으으으…… 강해지기 위해서…… 성장하기 위해서……!');
      await get_chara_talk(46).say_and_wait('모두들～～! 고마워～～☆');
      await say_by_passer_by_and_wait('관객', '우오오오오오!! 팔코──!!');
      await maya.say_and_wait('와앙~~ 싫어 싫어 싫어! 분해 분해, 너무 분해~!!');
      await maya.say_and_wait([
        '마야도 저기 서서 ',
        callname,
        '의 환호를 받고 싶단 말이야~!',
      ]);
      await amazon.say_and_wait([
        '에휴…… 넌 정말 머릿속이 온통 ',
        sys_get_callname(12, 0),
        ' 생각뿐이구나.',
      ]);
      await maya.say_and_wait([
        '우우…… 그치만 마야는 ',
        callname,
        '에게 어른스러워진 내 모습을 보여주고 싶은걸.',
      ]);
      era.printButton('「네 성장은 이미 충분히 느끼고 있어」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '.']);
      await maya.say_and_wait('으윽…… 나 한 번 더 할래~! 다음엔 꼭 이길 거야!');
      await amazon.say_and_wait('기회는 딱 한 번뿐이라고 했잖아! ……정말 못 말리겠군!');
      await era.printAndWait([
        '그 후 ',
        me.get_colored_name(),
        '과(와) ',
        amazon.get_colored_name(),
        '은 힘을 합쳐 난동을 부리는 ',
        maya.get_colored_name(),
        '을 진정시켰다.',
      ]);
    }
  };

  handlers[95 + 20] = async (maya, me, callname) => {
    await print_event_name('일몰을 향해', maya);
    const teio = get_chara_talk(3);
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await brian.print_and_wait([
      '처음엔 그저 ',
      maya.sex_code === 1 ? '형' : '언니',
      '와 누가 더 빠른지 내기하는 것뿐이었다.',
    ]);
    await brian.print_and_wait([
      '흔한 ',
      maya.sex_code === 1 ? '형제' : '자매',
      '간의 달리기…… 정말 평범했지.',
    ]);
    await brian.print_and_wait([
      '하지만 나는 필사적으로 ',
      maya.sex_code === 1 ? '형' : '언니',
      '의 등을 뒤쫓았다. 마치 기쁨에 겨운 짐승처럼.',
    ]);
    await brian.print_and_wait(
      '다리를 움직이고, 허파에 공기를 들이마신다. 그리고 다시 다리를 움직인다──',
    );
    await brian.print_and_wait('이것이 바로 나의 호흡.');
    await brian.print_and_wait('──얼마 지나지 않아, 내가 쫓아야 할 등은 사라졌다.');
    await brian.print_and_wait('나는 혼자가 되었다.');
    await brian.print_and_wait('비록 외톨이가 되었어도 나는 나의 호흡을 기억한다.');
    await brian.print_and_wait(
      '그리고 한 가지를 깨달았다. 나의 호흡은 나를 굶주리게 만든다는 것을.',
    );
    await brian.print_and_wait(
      '전력을 다해 숨을 쉴수록 목은 더욱 타오르고, 결코 만족할 수 없다는 것을 깨달았다.',
    );
    await brian.print_and_wait('하지만 호흡을 멈출 수는 없다.');
    await brian.print_and_wait('설령 호흡이 고통을 가져올지라도, 그것은 살아가기 위함이다.');
    await brian.print_and_wait('그러나 만약…… 만약 이 몸이──');
    await brian.print_and_wait('언젠가 나의 호흡을 거부하게 되는 날이 온다면──');
    await brian.print_and_wait('……아마도 그때겠지.');
    await brian.print_and_wait('허억…… 허억……!');
    await brian.print_and_wait('흥…… 나는…… 지지 않는다!');
    era.drawLine();
    await amazon.say_and_wait('저 녀석…… 아직도 더 달릴 수 있는 건가.');
    await amazon.say_and_wait([
      '흥…… ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에 나가는 건 ',
      sys_get_colored_callname(12, 24),
      '뿐만이 아니라고. 나도 반드시 널 따라잡을 거다……!',
    ]);
    await teio.say_and_wait([
      '자 자, ',
      sys_get_colored_callname(3, 12),
      '는 일단 제쳐두고, ',
      sys_get_colored_callname(3, 24),
      '의 다음 레이스는 『',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '』지? 그러니까 푹 쉬어둬.',
    ]);
    await teio.say_and_wait([
      '어라, ',
      sys_get_colored_callname(3, 24),
      '? 듣고 있어?',
    ]);
    await maya.say_and_wait('……알고 있어.');
    await amazon.say_and_wait(['……', sys_get_colored_callname(12, 24), '?']);
    await maya.say_and_wait('그치만, 이건 사실이 아니지…… 어떻게 이런 일이 있을 수 있어……');
    await maya.say_and_wait('왜냐하면, 그럴 리가 없잖아……!');
    await amazon.say_and_wait([sys_get_colored_callname(12, 24), '!?']);
    await maya.say_and_wait('하아…… 하아…… 하아……');
    era.printButton(`「……마야」`, 1);
    await era.input();
    await maya.say_and_wait([callname, '.']);
    era.printButton('「뭔가 알아낸 거야?」', 1);
    await era.input();
    await maya.say_and_wait('……');
    await maya.say_and_wait('한 가지 사실을 알아냈어.');
    await maya.say_and_wait('저 태양은 무척 눈부시지만, 사실은 석양이야.');
    await maya.say_and_wait(
      '서두르지 않으면 가라앉아 버릴 거야. 아무도 닿을 수 없는 곳으로.',
    );
    await maya.say_and_wait(['난 아직 ', maya.sex, '와 어깨를 나란히 해보지도 못했는데……!']);
    era.printButton(`「혹시 ${sys_get_callname(0, 16)}을 말하는 거야?」`, 1);
    await era.input();
    await maya.say_and_wait(['………………', callname, '도 눈치챘구나.']);
    await maya.say_and_wait('지난 일들을 떠올려 봤어.');
    await maya.say_and_wait('──그 사람도 가슴 뛰는 기분을 느끼고 싶어 해.');
    await maya.say_and_wait([
      maya.sex,
      '는 그저 전력으로 달리고 나서, 『즐거워』라는 말을 하고 싶을 뿐이야.',
    ]);
    await maya.say_and_wait([
      '그래서 ',
      maya.sex,
      '는 계속해서 발버둥 치고 있는 거야. 언젠가 그 말을 할 수 있을 거라 믿으면서.',
    ]);
    await maya.say_and_wait(
      '──설령 몸이 반짝이고 싶은 마음을 따라가지 못하더라도, 억지로 버텨가면서 말이야.',
    );
    await maya.say_and_wait(['……', callname, '! 나 이렇게 포기하고 싶지 않아.']);
    await maya.say_and_wait([
      '만약 그 사람이 정말로 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』를 마지막 은퇴 레이스로 생각하고 있다면!',
    ]);
    await maya.say_and_wait([
      '나는 그날 『마야노 탑건』으로서 출주해서, ',
      maya.sex,
      '를 이기고 자랑할 거야!',
    ]);
    await maya.say_and_wait([
      maya.sex,
      '에게 『내 전력이 네 전력보다 더 강하지?』라고 말해줄 거야.',
    ]);
    await maya.say_and_wait('『내가 널 흥분하게 만들었지』라고!');
    era.printButton('「바로 그 기세야!」', 1);
    await era.input();
    await maya.say_and_wait('응! 난 꼭 해낼 거야!');
    await maya.say_and_wait([
      '나는 『',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '』에서 더 강해지고, 『',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '』에서 더 빨라질 거야.',
    ]);
    await maya.say_and_wait([
      '그리고 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에서──',
    ]);
    await maya.say_and_wait(['──만약 ', maya.sex, '를 뛰어넘을 수 있다면……']);
    await maya.say_and_wait([
      '그때 ',
      callname,
      '은 나만 바라보면서, 『네가 그 누구보다 빛나고 있어』라고 칭찬해 줘야 해.',
    ]);
  };

  handlers[95 + 29] = async (maya, me, callname, _, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:24:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    await print_event_name('여름 합숙 (시니어 시즌)', maya);
    await era.printAndWait('오늘부터 「여름 합숙」이 다시 시작된다!');
    await maya.say_and_wait([callname, ', 어서 와♪ 마야와의 휴양지에 온 걸 환영해~☆']);
    await maya.say_and_wait('올해도 둘이서 화끈한 여름을 보내자☆');
    era.printButton('「모두와 함께 뜨거운 여름을 보내는 거지」', 1);
    await era.input();
    await maya.say_and_wait('에잉──! 또 그런 소릴 하고~! ');
    await maya.say_and_wait('그래도 올해는 왠지──');
    await maya.say_and_wait('정말로 지금까지 중에 가장 뜨거운 여름이 될 것 같아. 히히☆');
  };

  handlers[95 + 48] = async (maya, me, callname) => {
    era.set('cflag:24:축제이벤트표시', 0);
    await print_event_name('크리스마스', maya);
    await era.printAndWait([
      '「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」을 앞둔 어느 날, ',
      maya.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '을(를) 불러냈다.',
    ]);
    await maya.say_and_wait([callname, ', 빨리 빨리☆']);
    await maya.say_and_wait('이것 봐, 여기 눈사람도 있고 저기엔 크리스마스트리도 있어♪');
    era.printButton('「정말 즐거워 보이네」', 1);
    await era.input();
    await maya.say_and_wait('응♪ 오늘은 특별한 데이트 날이니까!');
    await maya.say_and_wait('오늘은…… 연인들의 크리스마스이브☆');
    era.printButton('「아직 밤은 아니거든」', 1);
    await era.input();
    await era.printAndWait('게다가 오늘은──');
    await maya.say_and_wait('히히, 알고 있다구~');
    await maya.say_and_wait('오늘은 『크리스마스 당일』도 아니고, 아직 밤도 아니지만…… 그치만 말이야.');
    await maya.say_and_wait('그래서 내가 『예약』해두려고 한 거야!');
    era.printButton('「예약?」', 1);
    await era.input();
    await maya.say_and_wait(
      '맞아! 원래는 크리스마스 이브에 데이트하고 싶었지만…… 그날은 이미 중요한 일정이 있잖아?',
    );
    await maya.say_and_wait(['그러니까…… ', callname, '!']);
    await maya.say_and_wait(['마야 사진 찍어줘☆ ', callname, ' 휴대폰으로!']);
    era.printButton('「내 걸로?」', 1);
    await era.input();
    await maya.say_and_wait('응! 준비됐어? 셔터 찬스 놓치면 안 돼!');
    await maya.say_and_wait('하나, 둘, 셋……');
    await era.printAndWait('（찰칵）');
    await maya.say_and_wait('아하하, 나 귀엽게 찍혔어~? 이 사진 소중히 간직해야 해.');
    await maya.say_and_wait('크리스마스 이브 밤에는 내가 그 포즈 그대로 쌤의 선물이 되어줄 거니까!');
    await era.printAndWait([
      maya.sex,
      '의 말을 듣고, ',
      me.get_colored_name(),
      '은(는) 사진을 확인했다──',
    ]);
    await era.printAndWait([
      '사진 속의 ',
      maya.get_colored_name(),
      '은 환하게 웃으며 활기차게 손을 흔들고 있었다.',
    ]);
    await maya.say_and_wait([
      '헤헤☆ 나는 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에서 무조건 1등 할 거야!',
    ]);
    await maya.say_and_wait([
      '올해 『크리스마스』에는 가장 빛나는 나를 ',
      callname,
      '에게 선물할게!',
    ]);
    await maya.say_and_wait(['그러니까 ', callname, '은 크리스마스이브를 나한테 줘!']);
    await maya.say_and_wait([
      '──내 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에 맡겨달라구!!',
    ]);
    await era.printAndWait([
      '──',
      maya.sex,
      '의 선언을 보며, ',
      me.get_colored_name(),
      '은(는) 올해의 「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」을 더욱 기대하게 되었다.',
    ]);
    await era.printAndWait([
      '……사진 속의 ',
      maya.get_colored_name(),
      '은 카메라를 향해 손키스를 날리고 있었다.',
    ]);
    await maya.say_and_wait([
      '히히, 올해 크리스마스이브…… 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』 레이스 끝난 뒤의 위닝 라이브를 기대하라구.',
    ]);
    await maya.say_and_wait('내가 꼭 센터가 되어서, 쌤에게만 『쪽』 해줄게☆');
    era.printButton('「뭐!?」', 1);
    await era.input();
    await maya.say_and_wait('헤헤, 걱정 마 걱정 마~☆ 다른 사람들한테는 안 들키게 할 거니까!');
    await maya.say_and_wait('히히…… 제법 어른스러운 느낌이지?');
    era.printButton('「야!」', 1);
    await era.input();
    await maya.say_and_wait(
      '에이~ 어때서 그래☆ 무대 조명이 꺼진 틈을 타서 몰래 할 건데!',
    );
    await maya.say_and_wait([
      '그·러·니·까~☆ 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』 라이브에서 센터인 나한테서 절대로 시선을 떼면 안 돼♪',
    ]);
    await maya.say_and_wait([
      '아니면…… ',
      callname,
      '은 내가 무대에서 내려온 다음에 『쪽』 해주는 게 좋아~?']);
    await maya.say_and_wait('……그것도 괜찮을 것 같네. 헤헤☆');
    await era.printAndWait([
      '……그런 말을 하는 ',
      maya.get_colored_name(),
      '에게, ',
      me.get_colored_name(),
      '은(는) 안무를 마음대로 바꾸지 말라고 엄중히 주의를 주기로 했다.',
    ]);
    await era.printAndWait([
      '하지만 올해의 「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」에서──',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      '는 반드시 1착을 거머쥐고…… 센터에 서게 될 것이다.',
    ]);
  };
};