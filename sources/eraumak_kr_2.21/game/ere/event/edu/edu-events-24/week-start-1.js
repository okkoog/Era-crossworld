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

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers[16] = async (maya, me, callname) => {
    await print_event_name('나도 반짝이고 싶어!', maya);
    await era.printAndWait(
      '이것은 데뷔전을 위해, 계속해서 트레이닝을 진행하던 어느 날에 일어난 일이다──',
    );
    await maya.say_and_wait([callname, '☆나 더트 코스 세 바퀴 다 돌았어!']);
    era.printButton('「수고했어!」', 1);
    await era.input();
    await maya.say_and_wait('헤헤~♪ 마야는 아직 지치지 않았다구~!');
    await maya.say_and_wait('저기저기, 다음은 뭐 트레이닝할 거야?');
    await maya.say_and_wait('평소 트레이닝 메뉴로 봐서는, 이번에는 좀 가벼운 트레이닝인가?');
    await era.printAndWait([
      '──방금 ',
      maya.sex,
      '가 말한 대로, 이번에는 부드러운 모래 위주로 트레이닝 내용을 짰다.',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      '의 몸은 아직 성장하는 중이다. ',
      me.get_colored_name(),
      '은(는) 원래 ',
      maya.sex,
      '의 다리에 너무 부담을 주지 않으려고 생각했지만……',
    ]);
    era.printButton('「조금 더 노력해 보고 싶어?」', 1);
    await era.input();
    await maya.say_and_wait('아니! 겨우 『조금』으로는 부족해!');
    await maya.say_and_wait('왜냐면 내가 나갈 곳은 트윙클 시리즈라구!');
    await maya.say_and_wait(
      '두근거리고, 알고 싶은 것투성이에, 경기장의 모두가 반짝반짝거리고……',
    );
    await maya.say_and_wait('만약 트윙클 시리즈에 나갈 수 있다면, 먼저 나를 더 빨리 달리게 하고 싶어!');
    await maya.say_and_wait('헤헤, 그·리·고~');
    await maya.say_and_wait([
      callname,
      '도 마야가 아직 『더 할 수 있다』고 생각하지? 그치?',
    ]);
    era.printButton('「그야 당연하지!」', 1);
    await era.input();
    await maya.say_and_wait('예이, 정답이야~☆');
    await era.printAndWait([
      '그리하여, ',
      me.get_colored_name(),
      '은(는) 기본 방침을 바꾸지 않는 선에서, ',
      maya.get_colored_name(),
      '에게 여러 가지 다양한 트레이닝을 시도해 보았다──',
    ]);
    await maya.say_and_wait('……레이스 연구. 연구……인가……!');
    await maya.say_and_wait('아하하♪ 왠지 어른의 계단을 향해, 대시하며 올라가는 기분이야☆');
    era.printButton('「이것도 일종의 트레이닝이야」', 1);
    await era.input();
    await maya.say_and_wait('네에 네에, 알고 있다구☆ 게다가 이런 건 마야가 전공이지!');
    await maya.say_and_wait('……응?');
    await maya.say_and_wait('어라, 비디오 벌써 끝난 거야? 겨우 30분밖에 안 지났는데?');
    await maya.say_and_wait('아, 알겠다! 이런 방식으로 마야를 애태우려는 작전이구나~');
    await maya.say_and_wait('이·것·이…… 어른들이 쓰는 밀당☆……인가☆');
    await era.printAndWait('그렇긴 하지만──');
    await maya.say_and_wait(['아, ', callname, '. 이 비디오는 이제 안 봐도 돼!']);
    await maya.say_and_wait(
      '제3 코너에 들어가면, 1번인 애가 『슈웅──!』 하고 일찌감치 치고 올라올걸?',
    );
    era.printButton('「그래?」', 1);
    await era.input();
    await maya.say_and_wait('응, 마야는 그냥 알 수 있거든. 내가 말한 게 맞는지 봐봐.');
    await era.printAndWait([
      maya.get_colored_name(),
      '이 재촉하는 바람에, ',
      me.get_colored_name(),
      '은(는) 비디오를 빨리 감기 하며 확인했다……',
    ]);
    await maya.say_and_wait('봐봐~☆ 마야가 말한 대로지~!');
    await maya.say_and_wait('헤헤, 그럼 다음 거 보자! 다음 거!!');
    await era.printAndWait([
      maya.get_colored_name(),
      '은 그 기세를 몰아, ',
      me.get_colored_name(),
      '이(가) 준비한 모든 레이스 비디오를 다 보았다……',
    ]);
    await maya.say_and_wait(['어라? ', callname, '. 설마 벌써 끝이야?']);
    era.printButton('「……다른 트레이닝을 하러 가자」', 1);
    await era.input();
    await maya.say_and_wait('아! 그렇구나~! 계속 트레이닝하는 것도 마야는 대환영이야☆');
    await era.printAndWait('──그리하여 심폐 기능을 단련하기 위해, 이어서 수영장에 왔다.');
    await maya.say_and_wait(
      '그러니까, 내가 숨을 참은 채로 얼마나 멀리 헤엄칠 수 있는지 재는 거지!',
    );
    await maya.say_and_wait(
      '참고로 물어보는데! 대충 얼마나 헤엄쳐야 마야를 엄청 잘했다고 칭찬해 줄 거야?',
    );
    await era.printAndWait(
      '……보통 연습을 한다면, 대략 75미터 정도. 그렇다면 처음에는…… 100미터 정도면 적당하겠지.',
    );
    await era.printAndWait([
      '하지만 예전에 어느 우마무스메가 300미터를 헤엄친 적이 있었다. 기왕 여기까지 와서 테스트하는 거라면──',
    ]);
    era.printButton('「한번 300미터를 목표로 해보자」', 1);
    await era.input();
    await maya.say_and_wait('라져! 그럼 마야, 출발한다!');
    await maya.say_and_wait('하아……');
    await maya.say_and_wait('분해~ 왜~!? 절반밖에 못 갔는데 벌써 한계야~!');
    await era.printAndWait(
      '하지만 절반인 150미터도 대단한 기록이다. 나중에 조금씩 계속 연습하다 보면, 조만간 300미터도 가능하겠지……',
    );
    await maya.say_and_wait('으~ 한 번 더 할래!');
    await maya.say_and_wait('이번에는 꼭 300미터 갈 거야☆');
    era.printButton('「이제 겨우 두 번째인데!?」', 1);
    await era.input();
    await maya.say_and_wait('응, 벌써 두 번째야.');
    await maya.say_and_wait(
      '게다가, 힘을 쓰는 요령이라고 해야 하나? 헤엄치는 중간에 이미 깨달았다구☆',
    );
    await maya.say_and_wait('헤헤♪ 얼른 다시 해볼래!');
    await maya.say_and_wait('아!!');
    await maya.say_and_wait([
      callname,
      '! 내가 해내면, 또 새로운 과제 줘야 해! 알았지♪',
    ]);
    await maya.say_and_wait('히히☆ 알아들었어?');
    await era.printAndWait([
      '……그리하여, ',
      maya.get_colored_name(),
      '의 요구를 충족시켜 주기 위해, ',
      me.get_colored_name(),
      '은(는) 필사적으로 머리를 쥐어짰다.',
    ]);
  };

  handlers.date = async (maya, me, callname) => {
    await print_event_name('데이트하자', maya);
    await era.printAndWait(
      '데뷔전이 끝나고 몇 달이 지났다. 다들 평소처럼 트레이닝하고 있을 때──',
    );
    await maya.say_and_wait('……');
    await maya.say_and_wait('……아.');
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await maya.say_and_wait(['우와앗!? ', callname, '!?']);
    await maya.say_and_wait('아무것도 아냐, 진짜 아무 일도 없다구……');
    await maya.say_and_wait('……하아.');
    await era.printAndWait('──입으로는 아무 일 없다고 하면서도, 깊은 한숨을 내쉬었다.');
    era.printButton('「기분 전환하러 가자」', 1);
    await era.input();
    await maya.say_and_wait('기분 전환…… 그건 데이트하자는 거야?');
    era.printButton('「그래」', 1);
    await era.input();
    await maya.say_and_wait('진짜!?');
    await maya.say_and_wait([
      '야호! 그럼 딱 1분만 기다려줘! ',
      callname,
      '이랑 데이트, 데이트☆',
    ]);
    await maya.say_and_wait([
      '헤헤, ',
      callname,
      '은 나에게 어떤 어른스러운 데이트를 시켜 주려나~♪',
    ]);
    await era.printAndWait([
      '……그렇게 밖으로 나가 기분을 전환하기로 했다. ',
      maya.get_colored_name(),
      '이 기뻐할 만한 장소라면──',
    ]);
    await maya.say_and_wait('데이트의 마무리는 역시 마야가 가장 반짝일 수 있는 곳이어야지!');
    await era.printAndWait('──역시 그곳뿐인가.');
    await era.printAndWait('(와아아아아아아────!!)');
    await maya.say_and_wait('여기는……');
    era.printButton('「네가 가장 반짝일 수 있는 곳이야」', 1);
    await era.input();
    await maya.say_and_wait('…………');
    await maya.say_and_wait(['……', callname, '은 지금도 그렇게 생각해?']);
    await maya.say_and_wait(
      '『사실은 내가 생각했던 거랑 좀 다른 것 같아』 만약 마야가 지금 이런 말을 한다면…… 너는 화낼 거야?',
    );
    era.printButton('「갑자기 왜 그래?」', 1);
    await era.input();
    await maya.say_and_wait('음…………');
    await maya.say_and_wait(
      '……마야는 말이야, 레이스에 나가기만 하면 분명히 계속 가슴 뛰는 기분을 느낄 수 있을 줄 알았어.',
    );
    await maya.say_and_wait([
      '경기장에서 달리는 애들은, 하나같이 전부 반짝반짝 빛나잖아?',
    ]);
    await maya.say_and_wait('그래서 데뷔전이든 다른 레이스든 계속 엄청나게 기대했었어.');
    await maya.say_and_wait('그런데, 실제로 레이스에 나가 보니까, 뭐랄까…… 좀 다르더라고.');
    await maya.say_and_wait('……아, 겨우 이 정도였나. 왠지 좀 재미없네, 하고.');
    await maya.say_and_wait('나도 이런 말 하면 안 된다는 거 잘 알아. 하지만……');
    await maya.say_and_wait('…………역시 그냥 지루하다고 느껴져.');
    era.printButton('「그렇구나」', 1);
    await era.input();
    await maya.say_and_wait('…………응.');
    await maya.say_and_wait('………………');
    era.printButton('「오히려 좋은 소식을 들었네!」', 1);
    await era.input();
    await maya.say_and_wait('어……?');
    await era.printAndWait([
      '트윙클 시리즈에서 ',
      maya.get_colored_name(),
      '이 경험한 것은 아직 데뷔전 수준에 불과하니까.',
    ]);
    await era.printAndWait([
      '단순히 그 정도 수준으로는 ',
      maya.get_colored_name(),
      '을 만족시킬 수 없었을 뿐이다. 그렇다면, 더 높은 목표를 향해 나아가면 된다.',
    ]);
    await era.printAndWait([
      '앞으로 강자들과 경쟁할 기회는 더 많아질 것이고, 아직 ',
      maya.sex,
      '가 모르는 레이스도 잔뜩 남아 있다.',
    ]);
    await era.printAndWait([
      '그러니 만약 현재 ',
      maya.get_colored_name(),
      '을 괴롭히는 원인이 「지루함」이라면──',
    ]);
    era.printButton('「앞으로 더 재미있게 만들면 돼!」', 1);
    await era.input();
    await maya.say_and_wait('……재미있게?');
    await maya.say_and_wait('정말…… 그게 가능할까? 나는 벌써──');
    era.printButton('「네가 반짝일 수 있도록, 내가 힘낼게」', 1);
    await era.input();
    await maya.say_and_wait(['……', callname, '.']);
    await era.printAndWait([
      maya.get_colored_name(),
      '에게는 분명 ',
      maya.sex,
      '만의, 유일무이한 반짝이는 방식이 있을 것이다.',
    ]);
    await era.printAndWait([
      '기왕 어렵게 ',
      maya.get_colored_name(),
      '처럼 재능 넘치는 우마무스메의 전담 트레이너가 되었으니──',
    ]);
    await era.printAndWait([
      '──',
      maya.sex,
      '를 위해 재능을 마음껏 발휘할 무대를 준비하고, ',
      maya.sex,
      '에게 딱 맞는 성장 방법을 찾아내는 것, 그것이 바로 트레이너의 책무겠지.',
    ]);
  };

  handlers[47 + 1] = async (maya, me, callname, flags) => {
    era.set('cflag:24:축제이벤트표시', 0);
    await print_event_name('새해 포부', maya);
    await era.printAndWait([
      '올해부터는 클래식 시즌에 도전하게 된다. ',
      me.get_couple_title(),
      '은(는) 새해 포부를 정하기 위해 약속 장소에서 만났다──',
    ]);
    await maya.say_and_wait('…………');
    await maya.say_and_wait([callname, ', 꼭 포부를 정해야만 해?']);
    era.printButton('「하기 싫어?」', 1);
    await era.input();
    await maya.say_and_wait('……응.');
    await maya.say_and_wait(
      '보통은 『힘내야지!』라거나 『꼭 해내겠어!』라고 생각될 때 포부를 세우는 거 아니야?',
    );
    await maya.say_and_wait(
      '그래서 마야는 여기 오는 길에 계속 생각했어. 클래식 시즌이 된 이후의 일들에 대해서.',
    );
    era.printButton('「마야」', 1);
    await era.input();
    await maya.say_and_wait([
      '그런데 나랑 같이 레이스를 뛸 애들은, 어차피 나랑 같은 해에 데뷔한 애들이잖아?',
    ]);
    await maya.say_and_wait('……그럼 예전이랑 다를 게 없잖아.');
    await maya.say_and_wait('나, 또 지루해지면 어쩌지……');
    era.printButton('「그럼 레이스 말고 다른 포부는 어때?」', 1);
    await era.input();
    await maya.say_and_wait('……어?');
    await maya.say_and_wait('레이스 말고 다른 거…… 그래도 돼?');
    era.printButton('「괜찮아, 이건 『새해』 포부니까」', 1);
    await era.input();
    await maya.say_and_wait('!');
    await maya.say_and_wait('그, 그럼! 마야는 데이트를 자주 하고 싶어!');
    await maya.say_and_wait([' ', callname, '이 나한테 어른스러운 걸 잔뜩 가르쳐 줬으면 좋겠어!']);
    era.printButton('「그렇게 말할 줄 알았어」', 1);
    await era.input();
    await maya.say_and_wait(['응, 헤헤! ', callname, '이 뭐든 괜찮다고 했으니까☆']);
    await maya.say_and_wait('좋아, 결정했어! 마야의 포부는 『데이트 자주 하기』로 할래!');
    await maya.say_and_wait(['하하, 나 ', callname, '이 정말 좋아♪']);
    await era.printAndWait([
      '……',
      maya.get_colored_name(),
      '은 방금 전과는 딴판으로, 얼굴에 미소를 띠고 있다.',
    ]);
    await era.printAndWait([
      '이렇게 사물을 다른 시각으로 바라보는 경험은, 분명 ',
      maya.get_colored_name(),
      '에게 큰 도움이 될 것이다. 그것 또한 언젠가 가슴 뛰는 순간을 만나기 위함이다.',
    ]);
    await era.printAndWait('그러니 지금은──');
    era.printButton('「지금 당장 데이트하러 가자!」', 1);
    await era.input();
    await maya.say_and_wait('와아……! 진짜!?');
    era.printButton('「소원을 들어줄게!」', 1);
    await era.input();
    await maya.say_and_wait('야호──! 가자 가자!');
    await maya.say_and_wait([
      '헤헤! 새해 데이트, 데이트☆ ',
      callname,
      ', 우리 어디 가♪',
    ]);
    era.printButton('「새해 첫 쇼핑 데이트」（스태미나+20）', 1);
    era.printButton('「설날 음식 데이트」（체력+400）', 2);
    era.printButton('「새해 참배 데이트」（스킬 포인트+40）', 3);
    switch (await era.input()) {
      case 1:
        await maya.say_and_wait('와, 찬성!!');
        await maya.say_and_wait('그럼 빨리 가자~♪ 같이 복주머니 사러 가자☆');
        await maya.say_and_wait(['헤헤~♪ 오늘은 ', callname, '이랑 밤까지 데이트할 거야☆']);
        await era.printAndWait([maya.get_colored_name(), '이 쇼핑을 시작하면, 정말로 밤까지 돌아다닐 것 같다──']);
        await maya.say_and_wait([
          '이야☆ ',
          sys_get_colored_callname(24, 5),
          '한테 『나 오늘 안 돌아가』라고 말해버릴까☆',
        ]);
        await era.printAndWait([
          '……',
          me.get_colored_name(),
          '은(는) 당연하다는 듯이 ',
          maya.get_colored_name(),
          '을 말린 뒤, 나중에 ',
          maya.get_colored_name(),
          '을 기숙사까지 바래다주었다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
        break;
      case 2:
        await maya.say_and_wait('설날 음식 데이트……? 설날 음식으로…… 데이트를……?');
        await maya.say_and_wait([
          '뭐 어때, 괜찮아! ',
          callname,
          '이랑 같이 있다면, 뭘 해도 즐거울 것 같으니까♪',
        ]);
        await maya.say_and_wait('…………');
        await maya.say_and_wait('여기는 나한테 너무 어른스러운 곳 아닐까……? 괜찮을까?');
        await say_by_passer_by_and_wait(
          '일식집 여주인',
          '어머나 어머나, 아주 귀여운 손님이 오셨네. 어서 오렴, 후훗.',
        );
        await maya.say_and_wait('우, 우와앗!?');
        await era.printAndWait([
          '그리하여 ',
          me.get_colored_name(),
          '은(는) 긴장한 ',
          maya.get_colored_name(),
          '과 함께 설날 음식 데이트를 즐겼다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          undefined,
          0,
          JSON.parse('{"체력":400}'),
        );
        break;
      case 3:
        await maya.say_and_wait([
          '아, ',
          callname,
          ' 진짜 센스 있다♪ 진짜 새해 느낌 나네☆',
        ]);
        await maya.say_and_wait('나 착륙할게♪');
        await maya.say_and_wait(['그래서 그래서? ', callname, '은 뭐 빌 거야?']);
        era.printButton('「비밀이야」', 1);
        await era.input();
        await maya.say_and_wait('에이, 치사해 치사해. 가르쳐 줘!');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 마음속 깊이 빌었다. ',
          maya.get_colored_name(),
          '이 나중에 ',
          maya.sex,
          '의 진짜 꿈을 이룰 수 있게 해달라고.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(24, [], 40);
    }
  };

  handlers[47 + 3] = async (maya, me, callname) => {
    await print_event_name('목표 고정', maya);
    const teio = get_chara_talk(3);
    const brian = get_chara_talk(16);
    await era.printAndWait('드디어 봄철 클래식 시즌이 왔다.');
    await era.printAndWait([
      '……삼관 노선, 트리플 티아라 노선. 우마무스메와 트레이너가 인생에 단 한 번뿐인 이 시기를 어떻게 보내느냐는 매우 중요한 일이다──',
    ]);
    await maya.say_and_wait(['……', callname, '. 또 그 자료 보고 있어~']);
    await maya.say_and_wait('슬슬 나랑 좀 놀아주면 안 돼?');
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '은(는) ',
      maya.get_colored_name(),
      '과 이미 약속한 바가 있다. 특히 출주할 레이스를 정하는 것에 있어서는, ',
      me.get_colored_name(),
      '이(가) 신중하게 평가해야만 한다.',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      '이 흥미를 느낄 만한 레이스이면서 라이벌들이 있는 환경에서, 다양한 기회를 접하게 해줘야 한다──',
    ]);
    await era.printAndWait('(똑똑)');
    await maya.say_and_wait('응? 누구지……');
    await teio.say_and_wait(['안녕! ', sys_get_colored_callname(3, 24), '!']);
    await maya.say_and_wait([
      '아! ',
      sys_get_colored_callname(24, 3),
      '이잖아♪ 웬일이야 웬일이야? 놀러 온 거야?',
    ]);
    await era.printAndWait([
      teio.get_colored_name(),
      '는 학생회장 심볼리 루돌프를 동경하는 우마무스메이자, ',
      maya.get_colored_name(),
      '의 룸메이트다.',
    ]);
    await teio.say_and_wait('응, 뭐 그런 셈이지! 사실 회장님이 나한테 비디오를 하나 주셨거든.');
    await get_chara_talk(17).used_to_say_and_wait([
      sys_get_colored_callname(17, 3),
      ', 네가 나를 앙모한다면 나만 보지 말고, 내 주변도 좀 둘러보렴.',
    ]);
    await get_chara_talk(17).used_to_say_and_wait([
      '예를 들면── ',
      brian.get_colored_name(),
      '의 주법이라든가.',
    ]);
    await teio.say_and_wait(['라고 말씀하시더라고. 근데 혼자 보긴 좀 심심하잖아?']);
    era.printButton('（……나리타 브라이언）', 1);
    await era.input();
    await era.printAndWait([
      brian.get_colored_name(),
      '──',
      maya.sex,
      '는 압도적인 실력을 갖춘 우마무스메다.',
    ]);
    await era.printAndWait([
      '클래식 삼관 노선을 전부 휩쓸며 우승한 것으로 유명한 「삼관 우마무스메」다.',
    ]);
    await era.printAndWait([
      maya.sex,
      '는 ',
      maya.get_colored_name(),
      '보다 한 세대 앞서 있어, 정식 레이스에서 만날 가능성은 낮지만, 앞으로 클래식 시즌에 도전한다면──',
    ]);
    era.printButton('「미리 봐 두는 게 좋을지도 모르겠어」', 1);
    await era.input();
    await teio.say_and_wait([
      '오, 좋은데~! ',
      sys_get_callname(3, 0),
      '도 관심이 좀 있나 본데?',
    ]);
    await maya.say_and_wait([
      '익!? ',
      callname,
      '!? 내가 바람피우는 건 안 된다고 했잖아!?',
    ]);
    await teio.say_and_wait([
      '아하하, 괜찮아 괜찮아! ',
      sys_get_callname(3, 24),
      '도 궁금하면 다 같이 보자!',
    ]);
    await era.printAndWait([
      '그리하여 ',
      me.get_colored_name(),
      '은(는) ',
      maya.get_colored_name(),
      '과 친구들과 함께 ',
      brian.get_colored_name(),
      '의 레이스 비디오를 시청했다……',
    ]);
    era.drawLine();
    await say_by_passer_by_and_wait('해설', [
      '선두는 ',
      brian.get_colored_name(),
      '! 완전히 거리를 벌립니다!',
    ]);
    await say_by_passer_by_and_wait('해설', [
      '다리 힘이 역시 강렬합니다! 그야말로 괴물! 경기장을 압도합니다!! 다른 우마무스메들을 따돌리고 결승선에──!!',
    ]);
    await say_by_passer_by_and_wait('해설', [
      '──제4 코너를 지나, 역시 또 ',
      maya.sex,
      '입니다! 단숨에 외곽에서 모두를 추월합니다!',
    ]);
    await say_by_passer_by_and_wait('해설', [
      '누가 ',
      brian.get_colored_name(),
      '을 쫓아올 수 있겠습니까!? 독주, 압도적인 독주로 골인!',
    ]);
    await say_by_passer_by_and_wait('해설', [maya.sex, '에게는 이제 이 길뿐입니다!']);
    await say_by_passer_by_and_wait('해설', [
      '정말이지 삼관 우마무스메라는 칭호가 아깝지 않은 레이스입니다! ',
      brian.get_colored_name(),
      ', 정말 멋진 활약입니다!',
    ]);
    await say_by_passer_by_and_wait('아나운서', [
      '방송석! 방송석입니다! 지금 만나볼 분은 바로 ',
      brian.get_colored_name(),
      '씨 입니다!',
    ]);
    await say_by_passer_by_and_wait(
      '아나운서',
      '이번에도 멋진 승리를 거두셨습니다! 혹시 달리기 전부터 이미 본인이 이길 거라는 확신이 있었나요──',
    );
    await brian.say_and_wait('네 눈에는 그렇게 보였나?');
    await say_by_passer_by_and_wait('아나운서', [
      '그, 그야 당연하죠! 아무래도 그 ',
      brian.get_colored_name(),
      ' 이니까요!',
    ]);
    await brian.say_and_wait('……흥.');
    await brian.say_and_wait('설령 안다고 한들, 뭐가 달라지지?');
    await brian.say_and_wait('나는 그저 나를 만족시키기 위해 달릴 뿐이다.');
    await brian.say_and_wait([
      '경기장에는 오로지 이기길 갈망하는 우마무스메들뿐이지.',
    ]);
    await brian.say_and_wait([
      '그렇기에 나는 그들을 꺾는다. 나의 갈증을 채우기 위해서.',
    ]);
    await brian.say_and_wait('──다음 레이스도 마찬가지다.');
    era.drawLine();
    await say_by_passer_by_and_wait('두 사람', '……');
    await era.printAndWait([
      '──삼관 우마무스메를 목표로 하는 노선에서, 각 G1 레이스에는 저마다의 격언이 있다.',
    ]);
    await era.printAndWait([
      '「',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '」──가장 빠른 우마무스메가 이긴다. 「',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '」──가장 운이 좋은 우마무스메가 이긴다. 「',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '」──가장 강한 우마무스메가 이긴다.',
    ]);
    await era.printAndWait([
      '하지만 이번에 본 ',
      brian.get_colored_name(),
      '의 모습은, 「규격 외의 실력」으로 그런 격언들조차 초월해 있었다…… ',
      maya.sex,
      '는 그토록 강했다.',
    ]);
    await maya.say_and_wait(['………………', callname, '.']);
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await maya.say_and_wait('아무것도 아냐, 그냥 불러봤어!');
    await era.printAndWait([
      maya.get_colored_name(),
      '은 그 말을 남기고 다시 텔레비전을 뚫어지게 쳐다보았다.',
    ]);
    await era.printAndWait([
      '──만약 올해의 클래식 도전에서, ',
      brian.get_colored_name(),
      '에게 맞설 만한 호적수가 나타난다면 그때는 상황이 달라질지도 모른다.',
    ]);
    era.drawLine({ content: '다음 날' });
    await say_by_passer_by_and_wait('텔레비전', [
      '어떻게 이렇게나 강한 우마무스메가 있을 수 있습니까! ──',
      brian.get_colored_name(),
      ', 먼저 1관을 차지합니다!!',
    ]);
    await maya.say_and_wait([
      '……',
      callname,
      ', 아직도 ',
      sys_get_colored_callname(24, 16),
      '의 레이스를 보고 있는 거야?',
    ]);
    await maya.say_and_wait([
      '어차피 ',
      sys_get_colored_callname(24, 3),
      '한테 다음 주에 돌려주기로 했잖아, 지금 그렇게 급하게 안 봐도 되는데?',
    ]);
    era.printButton('「그렇긴 하네」', 1);
    await era.input();
    await maya.say_and_wait('으으으……!!');
    await era.printAndWait([
      '──하지만 ',
      me.get_colored_name(),
      '은(는) 도저히 눈을 뗄 수가 없었다.',
    ]);
    await era.printAndWait([
      '만약 ',
      maya.get_colored_name(),
      '에게 지금 저렇게 강한 라이벌이 있다면……',
    ]);
    await era.printAndWait('（──팟）');
    await maya.say_and_wait([
      '싫어──! 싫어 싫어 싫어 싫어──!! ',
      callname,
      ', 마야를 봐달란 말이야!',
    ]);
    era.printButton('「어?」', 1);
    await era.input();
    await maya.say_and_wait('마야 지금 엄청 기분 안 좋거든!');
    await maya.say_and_wait(['지금 ', callname, ' 가슴 뛰고 있지? 그치?']);
    await maya.say_and_wait(['나 그런 거 싫어! ', callname, '은 마야의 트레이너니까!']);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 16),
      '의 레이스보다, 마야의 레이스를 보고 더 가슴 설레했으면 좋겠어!',
    ]);
    era.printButton('「마야……」', 1);
    await era.input();
    await maya.say_and_wait([
      sys_get_colored_callname(24, 16),
      '이 진짜 강하긴 해!',
    ]);
    await maya.say_and_wait([
      '같이 달리면 가슴 뛰고, 반짝거릴 거라는 거! 그런 거 마야도 다 안다구!',
    ]);
    await maya.say_and_wait('데뷔 전에는 나도 똑같이 생각했었으니까.');
    await maya.say_and_wait('……하지만 마야는 이제 데뷔했어! 예전보다 훨씬 더 많은 걸 알게 됐다구!');
    await maya.say_and_wait([
      '지금의 나는! 더 강해질 수 있어, ',
      sys_get_colored_callname(24, 16),
      '을 『슈웅──!』 하고 앞지를 수 있을 정도로!',
    ]);
    era.printButton('（……『추월』.）', 1);
    await era.input();
    await era.printAndWait('……맞아, 비록 지금 당장 직접 맞붙을 순 없어도.');
    await era.printAndWait([
      brian.get_colored_name(),
      '을 따라잡는 것을 하나의 목표로 삼는다면, ',
      maya.get_colored_name(),
      '에게 좋은 자극제가 될지도 모른다.',
    ]);
    await maya.say_and_wait([
      '마야는 진심이야! 금방 ',
      sys_get_colored_callname(24, 16),
      '을 이겨 보일 거니까!',
    ]);
    await maya.say_and_wait(
      '이긴 뒤에는, 마야만 바라보면서 『정말 가슴 뛰는 레이스였어!』라고 칭찬해 줄 거지?',
    );
    await maya.say_and_wait(
      '나한테 『너 정말 반짝거려』, 『마야노 탑건이 최고야』라고 말해줄 거지?',
    );
    era.printButton('「당연하지!」', 1);
    await era.input();
    await maya.say_and_wait('그럼 결정된 거다!!');
    await maya.say_and_wait(
      '마야는 엄청 진지하니까! 꼭 약속 지켜야 해! 각오하고 있으라구! 알아들었어!?',
    );
    await era.printAndWait(['……', maya.get_colored_name(), '은 묘하게 의욕이 넘쳤고, 그리하여──']);
    await era.printAndWait([
      '바로 이날, ',
      maya.get_colored_name(),
      '의 마음속에는 「',
      brian.get_colored_name(),
      '」이라는 목표가 생겨났다.',
    ]);
  };

  handlers[47 + 29] = async (maya, me, callname, _, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:24:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    await print_event_name('여름 합숙（클래식 시즌）', maya);
    await era.printAndWait(
      '오늘부터는 「여름 합숙」── 실력 향상을 위한 강화 트레이닝이 시작된다.',
    );
    await maya.say_and_wait('와아……☆ 빨간 집 귀여워~! ');
    await maya.say_and_wait([
      '나랑 ',
      callname,
      '이랑 여기서 어른의 여름을 보내는 거지!',
    ]);
    era.printButton('「모두와 함께 보내는 『여름 합숙』이야」', 1);
    await era.input();
    await maya.say_and_wait('쳇──! 알고 있다구!');
    await maya.say_and_wait('흥! 나를 어린애 취급할 수 있는 건 지금뿐이라니까!');
    await era.printAndWait([
      '그렇게, ',
      me.get_colored_name(),
      '은(는) ',
      maya.get_colored_name(),
      '과 함께 여름 합숙을 시작했다.',
    ]);
  };

  handlers[47 + 30] = async (maya, me, callname, _, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:24:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    await print_event_name('코드 : 버닝!', maya);
    await era.printAndWait(
      '오늘부터 「여름 합숙」── 실력 향상을 위한 강화 트레이닝이 시작된다.',
    );
    await era.printAndWait('그리고 여름 합숙의 첫째 주를 맞이했다.');
    await era.printAndWait([
      '바다, 산, 축제 등 온갖 유혹 속에서도, ',
      maya.get_colored_name(),
      '은──',
    ]);
    await maya.say_and_wait('하아…… 하아…… 후우……☆');
    await maya.say_and_wait('헤헤, 마야 진짜로 예전보다 더 빨라진 거 같지 않아?');
    await maya.say_and_wait([
      '이대로라면 올해 우마무스메 중에서 내가 제일 빠를지도! 아니, 그냥 모든 우마무스메 중에 최고로 빠른 거 아니야?',
    ]);
    era.printButton('「너무 과장하는 거 아냐?」', 1);
    await era.input();
    await maya.say_and_wait('뭐 어때! 그냥 해본 말이지!');
    await maya.say_and_wait([
      '게다가 마야는 꼭 ',
      callname,
      '이 『마야노 탑건이 제일 반짝거려』라고 말하게 만들 거니까!',
    ]);
    await maya.say_and_wait('그날 봤던──');
    await maya.say_and_wait([
      '──',
      sys_get_colored_callname(24, 16),
      '보다 훨씬 더 반짝이게 말이야.',
    ]);
    era.printButton(`「${sys_get_callname(0, 16)} 말이구나」`, 1);
    await era.input();
    await maya.say_and_wait([
      '아, 싫어 싫어! ',
      callname,
      ', 그 이름 금지!',
    ]);
    await maya.say_and_wait('……정말, 한시도 방심할 수가 없다니까!');
    await maya.say_and_wait([
      '아~ 왜 아직 클래식 급인 거야. 시니어 급이 되면 바로 ',
      sys_get_colored_callname(24, 16),
      '이랑──',
    ]);
    await maya.say_and_wait('아!!');
    await maya.say_and_wait([callname, '. 삼관 노선에 이제 남은 레이스가 뭐뭐 있지?']);
    await era.printAndWait([
      '──삼관 노선. 그것은 ',
      get_chara_talk(16).get_colored_name(),
      '이(가) 「삼관 우마무스메」가 되었을 때 걸었던 길이다.',
    ]);
    await era.printAndWait([
      '이미 봄철의 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '과 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '는 끝났고, 삼관 노선의 마지막 레이스는……',
    ]);
    era.printButton('「남은 건 『국화상』이야」', 1);
    await era.input();
    await maya.say_and_wait('문제없지☆ 그러니까 그게 다음 목표라는 거지!');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 16),
      '이 그때 보여줬던 것보다 훨씬 더 가슴 뛰는 모습을 보여줄게!',
    ]);
    era.printButton('「투지가 정말 대단하네」', 1);
    await era.input();
    await maya.say_and_wait('히히☆ 그래?');
    await maya.say_and_wait('근데 이렇게 의욕 넘치는 마야, 싫지 않지? 그치♪');
    await era.printAndWait([
      '그리하여, 새로운 목표는 「',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '」으로 결정되었다──!',
    ]);
  };
};