const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},cb:function)>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (ss, me, callname, flags) => {
    await print_event_name('초기 조율', ss);
    await ss.say_and_wait('그렇구나, 알겠어.');
    await ss.say_and_wait(
      '내 안목을 믿고, 네 재능도 믿어. 그래서 우리가 함께 앞으로 나아갔으면 좋겠어.',
    );
    await ss.say_and_wait(
      '하지만 쓴소리를 먼저 해둘게. 내 목표는 오직 승리뿐이야. 만약 내가 목표를 달성할 수 없다면,',
    );
    await ss.say_and_wait(
      '트레이너를 바꾸는 것도 개의치 않을 거야. 그러니까 우리 서로 발목 잡는 일은 없었으면 해.',
    );
    await ss.say_and_wait(
      '물론 내가 네 페이스를 따라가지 못한다고 생각되면 날 쳐내도 상관없어.',
    );
    await era.printAndWait([
      ss.sex,
      '는 정말 그렇게 생각하는 듯, ',
      me.get_colored_name(),
      '의 생각은 전혀 신경 쓰지 않고 그렇게 적나라한 말을 내뱉었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '가 ',
      me.get_colored_name(),
      '도 ',
      ss.sex,
      '를 쳐낼 수 있다고 말할 때, ',
      ss.get_colored_name(),
      '의 꼬리가 조금 빠르게 흔들리는 것을 눈치챘다.',
    ]);
    await ss.say_and_wait(
      '시작은 스피드 훈련이야, 아니면 스태미나 훈련이야? 워밍업이 끝나면 확실한 대답을 들려줘.',
    );
    await era.printAndWait([
      ss.get_colored_name(),
      '는 햇살 아래 서서 몸을 풀기 시작했고, 햇빛을 받아 ',
      ss.sex,
      '의 이마에는 금세 송글송글 땀방울이 맺히며 얼굴에도 옅은 홍조가 띄었다.',
    ]);
    era.printButton(
      '「지금 네 상황을 보면, 파워와 스태미나를 먼저 길러야 해. 그래서 이 부분을 특별히 훈련할 거야.」',
      1,
    );
    await era.input();
    await ss.say_and_wait([
      callname,
      ', 지금 그 자신감, 꽤 맘에 드네. 그럼 모든 건 네 지시에 따를게.',
    ]);
    await era.printAndWait([
      '신호총 소리와 함께, ',
      ss.get_colored_name(),
      '는 힘찬 발걸음을 내디뎠고, 런닝화가 잔디 위에 얕은 발자국을 남겼다. ',
      ss.get_colored_name(),
      '는 서두르지 않고 워밍업인 2000미터 달리기를 마치는 듯했다.',
    ]);
    await era.printAndWait([
      '누가 봐도 눈앞의 소녀에게는 평범한 ',
      ss.get_uma_sex_title(),
      '와는 비교하기 힘든 재능이 있었고, 스스로 그 재능의 일부를 초보적으로 파악하고 있었다. 마치 광맥 표면에 드러난 황금처럼. ',
      me.get_colored_name(),
      '이(가) 본격적으로 채굴해 봐야만 그 아래 묻힌 황금이 얼마나 무서운 가치를 지녔는지 알 수 있을 터였다.',
    ]);
    await era.printAndWait(
      '그럼에도 불구하고, 강자들이 득실거리는 중앙에서는 재능만으로는 결코 충분하지 않았다. 충분한 훈련과 전술이 없다면 이른바 재능이라는 것은 영원히 레이스를 이길 수 있는 능력으로 바뀔 수 없다.',
    );
    await era.printAndWait([
      '그렇기에 이것이 ',
      me.get_colored_name(),
      '과(와) ',
      ss.sex,
      '가 해야 할 일이었다. ',
      ss.sex,
      '를 ',
      ss.sex,
      '가 원하는, 레이스를 이길 수 있는 ',
      ss.get_uma_sex_title(),
      '로 만들어 내는 것.',
    ]);
    flags.wait_flag =
      get_attr_and_print_in_event(400, [0, 5, 0, 5, 0], 0) || flags.wait_flag;
  };

  handlers[31] = async (ss, me, callname, flags) => {
    await print_event_name('적란운', ss);
    await era.printAndWait([
      '오늘 날씨가 썩 좋지 않아서인지, ',
      ss.get_colored_name(),
      '의 기분도 꽤나 짜증스러워 보였다. 휴게실 소파에 걸친 꼬리가 이리저리 흔들리고 있었다.',
    ]);
    era.printButton('「왜 그래? 비 오는 날이 싫어?」', 1);
    await era.input();
    await era.printAndWait([ss.get_colored_name(), '는 단호하게 고개를 저었다.']);
    await ss.say_and_wait([
      '아니, 그냥 이런 폭우가 좀 싫을 뿐이야. 야외 훈련을 할 수 없게 되니까. ',
      callname,
      '은 폭우가 좋아?',
    ]);
    era.printButton('「좋아해」', 1);
    era.printButton('「안 좋아해」', 2);
    await era.input();
    await ss.say_and_wait([
      '그렇구나. 난 폭우가 안 좋아. 그게 다야. 사람이든 ',
      ss.get_uma_sex_title(),
      '든 가끔은 이유 없이 뭔가가 싫어질 때가 있잖아.',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 그렇게 말하며 조금은 짜증이 가라앉은 듯했지만, ',
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '가 일부러 이 화제를 피하고 있다는 것을 눈치챘다.',
    ]);
    await ss.say_and_wait([
      '하지만 우리에겐 실내 훈련이 있잖아. ',
      callname,
      ', 괜찮다면 훈련을 좀 감독해 주지 않을래?',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 휴게실에 놓인 아령을 집어 들고 워밍업을 시작했다. 단 일분일초도 허비하고 싶지 않은 게 분명해 보였다.',
    ]);
    flags.wait_flag =
      get_attr_and_print_in_event(400, [0, 0, 0, 10, 0], 0) || flags.wait_flag;
  };

  handlers[39] = async (ss, me, callname, flags) => {
    await print_event_name('시작 · 약속', ss);
    await ss.say_and_wait(
      '올해도 벌써 다 지나가려는 것 같네. 어쩐지 시간감각이 둔해진 기분이야.',
    );
    await era.printAndWait([
      ss.get_colored_name(),
      '는 커피를 든 채 천천히 입을 열었다. ',
      ss.sex,
      '는 이미 동복으로 갈아입었고, 풍만한 허벅지는 검은색 스타킹으로 감싸져 있었다.',
    ]);
    await era.printAndWait([
      '소파에 기댄 채 검은 스타킹을 신은 작은 두 발을 꼬리 근처에 웅크리고, 이따금 자신의 꼬리를 끼우며 장난치는 모습은 ',
      me.get_colored_name(),
      '이(가) 마른침을 삼키게 만들었다.',
    ]);
    await ss.say_and_wait([
      '응. ',
      callname,
      ', 난 아주 만족해. 네 담당이 된 것, 그건 아마 내게 가장 행운인 일일 거야.',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 예전의 투지 넘치던 모습과 달리 소파에 기대어 조금 나른해 보였다. 그러고는 ',
      me.get_colored_name(),
      '에게는 들리지 않을 작은 목소리로 입을 열었다.',
    ]);
    await ss.say_and_wait(
      '이게 아마 그 일을 해낼 마지막 기회일지도 몰라. 반드시 이뤄야 할 일…… 가장 높은 무대에 서는 것.',
    );
    await era.printAndWait([
      '어째서인지, ',
      ss.sex,
      '는 ',
      me.get_colored_name(),
      '에게 조금 다가왔다. 마치 ',
      me.get_colored_name(),
      '의 품에 기대려는 것처럼.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) ',
      ss.get_colored_name(),
      '를 바라보자마자 ',
      ss.sex,
      '는 곧바로 거리를 두며 ',
      me.get_colored_name(),
      '을(를) 쳐다보지도 못했다.',
    ]);
    await ss.say_and_wait('난 정말 여전히 운이 좋네…… 얘들아.', true);
    flags.wait_flag =
      get_attr_and_print_in_event(400, [0, 0, 0, 10, 0], 0) || flags.wait_flag;
  };

  handlers[47] = async (ss, me, callname, flags) => {
    await print_event_name('첫걸음', ss);
    await ss.say_and_wait('등록은 끝났어?');
    era.printButton(
      '「응, 다른 문제가 없다면 이제 3관을 향해 나아갈 수 있어.」',
      1,
    );
    await era.input();
    await ss.say_and_wait([
      '좋아, 참. ',
      sys_get_colored_callname(400, 25),
      ' 쪽에서 새로운 커피콩을 샀길래,',
    ]);
    await ss.say_and_wait(
      '조금 얻어왔어. 다 마시고 나랑 같이 훈련장으로 가자. 지난번 수영장에선 하마터면 발을 삘 뻔했는데, 이번엔 훨씬 나을 거야.',
    );
    await era.printAndWait([ss.sex, '는 김이 모락모락 나는 커피 한 잔을 가져왔다.']);
    await ss.say_and_wait([callname, ', 나 어때 보여?']);
    era.printButton('「굉장하고 노력하는 아이」', 1);
    await era.input();
    await ss.say_and_wait(
      '그거 말고, 내 지금 상태가 어떤 거 같냐고 묻는 거야. 앞으로 함께 3관을 두고 경쟁할 동기들과 비교해서 말이야.',
    );
    era.printButton(`「네가 ${ss.sex}들보다 강하다고 생각해」`, 1);
    era.printButton('「넌 훈련을 더 계속해야 한다고 생각해」', 2);
    await era.input();
    await ss.say_and_wait(['어쨌든 간에, ', callname, ', 난 언제나 널 믿을게.']);
    flags.wait_flag =
      get_attr_and_print_in_event(400, [5, 0, 5], 0) || flags.wait_flag;
  };

  handlers[47 + 29] = async (ss, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:400:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    await print_event_name('유쾌하고 무더운 여름의 시작', ss);
    await era.printAndWait([
      '끝없이 펼쳐진 수평선과 새파란 바닷물이 ',
      me.get_couple_title(),
      '의 마음을 탁 트이게 해주었다.',
    ]);
    await ss.say_and_wait([
      '음, 난 아직 해변에서 훈련해 본 적이 없는데, ',
      callname,
      '. 이거 정말 효과가 있는 거야?',
    ]);
    era.printButton(
      '「날 믿기 싫다 해도, 트레센 학원은 좀 믿어주라. 이건 선배들로부터 전해져 내려오는 경험담이라고」',
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '듣고 보니 그렇네. 그럼 이번 두 달 동안 잘 부탁할게. 아무래도 해변 훈련은 경험이 전혀 없으니까.',
    );
    await ss.say_and_wait([
      '무슨 웃음거리가 되거나 사고라도 나면 안 되잖아. 이런 부분은 ',
      callname,
      '이 잘 통제해 줬으면 해.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 눈을 가늘게 떴다. 차가운 겉모습을 벗겨내자, 차분하고 단정하면서도 활기 넘치는 ',
      ss.get_uma_sex_title(),
      '가 ',
      me.get_colored_name(),
      ' 앞에 나타났다.',
    ]);
    await era.printAndWait([
      '말로는 단 일 분도 낭비할 수 없으니 훈련에 박차를 가해야 한다고 했지만, ',
      ss.get_colored_name(),
      '는 여전히 즐겁게 해변에서 여러 가지 활동을 시도했다.',
    ]);
    await era.printAndWait([
      '비치발리볼, 서핑보드, 모래성 쌓기. 햇빛을 받아 ',
      ss.sex,
      '가 입은 새까만 비키니는 눈부신 몸매를 완벽하게 받쳐주었다.',
    ]);
    ss.sex_code - 1 &&
      (await era.printAndWait([
        '비키니 수영복에 묶인 채 출렁이는 새하얀 가슴은 누가 봐도 ',
        ss.sex,
        '의 친척인 ',
        get_chara_talk(25).get_colored_name(),
        '보다 훨씬 발육이 좋아 보였다.',
      ]));
    await era.printAndWait([
      '그리고 그날 오후, ',
      me.get_colored_name(),
      '은(는) 비치 체어에 엎드려 축 늘어진 ',
      ss.get_colored_name(),
      '를 보게 되었다.',
    ]);
    await ss.say_and_wait([
      '후우, ',
      callname,
      ', 날씨 진짜 너무 덥다. 훈련할 때 웬만하면 물속이나 그늘진 곳으로 일정을 잡아줄 수 있을까? 미안해.',
    ]);
    const race_history = RaceHistory.get(400).get(),
      crowns =
        check_aim_race(race_history, race_enum.kent_der, 1, 1) +
        check_aim_race(race_history, race_enum.prea_sta, 1, 1) +
        check_aim_race(race_history, race_enum.belm_sta, 1, 1);
    if (crowns >= 2) {
      await era.printAndWait([
        '아무리 강력한 ',
        crowns === 2 ? '2' : '3',
        '관왕이라도 대자연과 싸우기는 힘든 모양이군, ',
        me.get_colored_name(),
        '은(는) 무심코 그런 생각을 했다.',
      ]);
    }
    flags.wait_flag =
      get_attr_and_print_in_event(400, new Array(5).fill(3), 30) ||
      flags.wait_flag;
  };

  handlers[47 + 48] = async (ss, me, callname, flags) => {
    era.set('cflag:400:축제이벤트표시', 0);
    await print_event_name('크리스마스를 위한 준비', ss);
    await ss.say_and_wait('으으음, 원래 크리스마스엔 트레이너에게도 선물을 준비해야 하는 거였어?');
    await era.printAndWait([
      '가정 실습실 안에서, ',
      ss.get_colored_name(),
      '는 ',
      get_chara_talk(25).get_colored_name(),
      '와 귓속말을 나누고 있었다. 마치 ',
      ss.sex,
      '들 사이에 거울 하나를 두고 그중 한 명이 그림자인 것처럼 보였다.',
    ]);
    await ss.say_and_wait([
      '알았어, 알았어. 네 말이 맞아. 나도 ',
      callname,
      '한테 무슨 선물을 줄지 고민해 봐야겠다.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 고개를 돌려 가느다란 눈으로 ',
      me.get_colored_name(),
      '을(를) 보며 뭔가 생각하는 듯하더니, 기지개를 켰다.',
    ]);
    await ss.say_and_wait(['됐어, 일단 감사의 의미로 ', callname, '한테 밥이나 한 끼 사야지.']);
    await era.printAndWait([
      '그리하여 ',
      ss.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 끌고 식당에 가서 푸짐한 식사를 했다. 다만 ',
      ss.sex,
      '가 주문한 음식에는 부추 같은 것들이 유난히 많은 것 같았다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(
      400,
      [0, 10],
      0,
      JSON.parse('{"체력":200}'),
    );
  };

  handlers[95 + 13] = async (ss, me, callname) => {
    const coffee = get_chara_talk(25);
    await print_event_name('다가오는 폭우', ss);
    await ss.say_and_wait('또 비가 오려나 보네…… 이 날씨 진짜 맘에 안 들어.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 조심스레 수건을 ',
      ss.get_colored_name(),
      '의 머리에 얹었고, ',
      ss.sex,
      '는 고개를 들어 ',
      me.get_colored_name(),
      '이(가) 얼굴을 닦아주는 것을 무척이나 즐겼다.',
    ]);
    await era.printAndWait([
      '그 표정은 ',
      me.get_colored_name(),
      '에게 목욕을 마친 아기 고양이를 떠올리게 했지만, 차마 그 말을 입 밖으로 꺼내지는 못했다.',
    ]);
    await era.printAndWait([
      '문 두드리는 소리가 났고, ',
      me.get_colored_name(),
      '이(가) 가볍게 들어오라고 대답하자, ',
      coffee.get_colored_name(),
      '가 문을 열고 들어왔다.',
    ]);
    await coffee.say_and_wait('오랜만이네, 잘 지냈어?');
    await ss.say_and_wait('아, 꽤 잘 지내. 특히 얘랑 같이 있을 때는 말이야.');
    await era.printAndWait([
      ss.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 가리켰다.',
    ]);
    await coffee.say_and_wait(
      '올 거야? 아직 보름 남았어. 장마는 다음 달에나 끝날 것 같지만.',
    );
    await ss.say_and_wait([
      '있잖아? 거센 비바람이 몰아쳐도, ',
      callname,
      '만 있으면 난 아무 문제 없을 것 같아.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 한 번 쳐다보더니, 고개를 끄덕이고는 떠났다.',
    ]);
    await ss.say_and_wait([
      '어휴, 이거 귀찮게 됐네. ',
      sys_get_colored_callname(400, 25),
      '는 엄청 고지식한 성격이거든. 더 큰 문제는 나도 그렇다는 거지.',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 뒤에서 ',
      me.get_colored_name(),
      '을(를) 끌어안았고, ',
      me.get_colored_name(),
      '은(는) 정말 고양이를 만난 것 같은 기분이 들었다.',
    ]);
    await ss.say_and_wait([
      callname,
      ', 나 도와줄 거지? 아무리 그래도 ',
      sys_get_colored_callname(400, 25),
      '는 장거리 레이스에서는 적수가 없는 천재 ',
      ss.get_uma_sex_title(),
      '니까.',
    ]);
    await era.printAndWait([
      '창밖에는 다시 폭우가 쏟아지기 시작했고, ',
      ss.get_colored_name(),
      '의 목소리는 한없이 차분하게 들렸다.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 그대로 ',
      me.get_colored_name(),
      '을(를) 껴안았고, 마치 시간이 멈춘 듯, ',
      ss.sex,
      '는 그 순간을 마음껏 즐기고 있었다.',
    ]);
  };

  handlers[95 + 29] = async (ss, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:400:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    await print_event_name('다시 돌아온 여름 합숙', ss);
    await era.printAndWait([
      '다시 돌아온 해변, ',
      ss.get_colored_name(),
      '가 입은 수영복은 학원에서 나눠준 것에서 ',
      ss.sex,
      '가 좋아하는 무척이나 대담한 블랙 비키니로 바뀌어 있었다.',
    ]);
    await era.printAndWait([
      '균형 잡히고 풍만한 육체가 ',
      me.get_colored_name(),
      ' 앞에서 어른거리는 것은 젊은 트레이너의 마음속에 늘 타오르는 불꽃을 지피기 마련이었지만, ',
      ss.get_colored_name(),
      '는 전혀 눈치채지 못한 듯 무심한 동작 하나하나에서도 ',
      ss.sex,
      '만의 매력을 뿜어내고 있었다.',
    ]);
    await ss.say_and_wait(
      '뭘 그렇게 봐? 계획대로라면 우리 지금 당장 자리부터 잡아야 하지 않아?',
    );
    await era.printAndWait([
      '모래를 밟는 탄탄하고 힘찬 허벅지, 쏟아지는 햇살 아래의 ',
      ss.get_colored_name(),
      '는 매우 아름다워 보였다.',
    ]);
    await era.printAndWait([
      '말이 떨어지기가 무섭게 ',
      ss.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 손을 이끌고 모래사장으로 걸어 들어갔고, 올해 여름 합숙의 훈련과 놀이가 시작되었다.',
    ]);
  };
};