const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceStartParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (maya, me, callname) => {
    if (era.get('cflag:24:육성턴수합산') > 48) {
      return true;
    }
    await print_event_name(
      ['출격, ', race_infos[race_enum.begin_race].get_colored_name()],
      maya,
    );
    await era.printAndWait([
      '드디어 ',
      maya.get_colored_name(),
      '의 데뷔전 당일이 밝았다!',
    ]);
    await maya.say_and_wait(['이것 봐, 이것 봐! ', callname, '! 나 오늘 체육복 아니지!']);
    await maya.say_and_wait('왜 그런지 알아~?');
    era.printButton('「데뷔전에 나가야 하니까!」', 1);
    await era.input();
    await maya.say_and_wait('딩동댕, 정답! 약속이랑 내 1등 도장 찍어줄게!');
    await maya.say_and_wait([
      '그러니까…… ',
      callname,
      '! 시선 고정, 나한테서 눈 떼면 안 돼.',
    ]);
    await maya.say_and_wait(
      '반짝이는 시리즈에서 마야가 반짝반짝 빛나는 모습을 눈 크게 뜨고 지켜봐 줘♪',
    );
  };

  handlers[race_enum.kiku_sho] = async (maya, me, callname) => {
    await print_event_name(
      ['출격, ', race_infos[race_enum.kiku_sho].get_colored_name()],
      maya,
    );
    await maya.say_and_wait([
      '안녕, ',
      callname,
      '! 완벽한 비행을 감상할 준비는 됐어?',
    ]);
    await maya.say_and_wait([
      '오늘이 바로 그 『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』이니까! 훈련이 아니라 실전이라구☆',
    ]);
    era.printButton('「지금까지의 노력한 성과를 보여줘!」', 1);
    await era.input();
    await maya.say_and_wait('라져!');
    await maya.say_and_wait('잔디 위에는 안개처럼 금방 사라질 내 달리기 흔적만 남을 거야☆');
    await maya.say_and_wait([callname, '의 눈길도 마음도! 내가 다 뺏어버릴 테니까♪']);
  };

  handlers[race_enum.arim_kin] = async (maya, me, callname) => {
    await print_event_name(
      ['출격, ', race_infos[race_enum.arim_kin].get_colored_name()],
      maya,
    );
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    if (era.get('cflag:24:육성턴수합산') < 96) {
      await maya.say_and_wait([
        '왔어, 드디어 왔어, 『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』~!!',
      ]);
      await maya.say_and_wait([
        '흥흥, ',
        callname,
        '. 똑똑히 봐줘. 마야는 이번 레이스에서──',
      ]);
      await maya.say_and_wait('앗! 저 두 사람은 설마……');
      await amazon.say_and_wait(
        '하! 설마 올해도 너와 겨루게 될 줄이야…… 목은 깨끗이 씻고 기다리고 있었나?',
      );
      await brian.say_and_wait('……');
      await brian.say_and_wait([
        '흥…… 네가 무슨 말을 하려는지 전혀 모르겠군, ',
        sys_get_colored_callname(16, 12),
        '.',
      ]);
      await amazon.say_and_wait(
        '아앙!? 방금 그 말은 작년에 네가 했던 『패배를 준비해라』에 대한 대답──',
      );
      await brian.say_and_wait('에휴…… 네 의도를 설명해달라는 게 아니다.');
      await brian.say_and_wait('이미 알고 있을 텐데. 나를 도발하고 싶다면──');
      await brian.say_and_wait(
        '입이 아니라 경기장에서 보여라. 네 진짜 실력으로 나를 꺾어보라고.',
      );
      await amazon.say_and_wait('……그래, 그러마.');
      await amazon.say_and_wait([
        '그럼 이번 『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』에서 일대일 승부를 내보자고.',
      ]);
      await brian.say_and_wait('흥…… 눈빛은 나쁘지 않군.');
      await era.printAndWait([
        '──',
        maya.get_colored_name(),
        '의 시선 끝에는 「삼관 ',
        maya.get_uma_sex_title(),
        '」 ',
        brian.get_colored_name(),
        ', 그리고 「여걸」 ',
        amazon.get_colored_name(),
        '. 이 두 사람이 서 있었다.',
      ]);
      await maya.say_and_wait('…………');
      era.printButton('「마야?」', 1);
      await era.input();
      await maya.say_and_wait('앗!');
      await maya.say_and_wait(['미안 미안, ', callname, '! 방금 잠깐 멍하게 있었나 봐!']);
      era.printButton('「저렇게 보니 박력이 장난 아니네」', 1);
      await era.input();
      await maya.say_and_wait('아, 싫어 싫어! 그렇게 말하면 안 되지! 마야는 절대 안 질 거니까!');
      await maya.say_and_wait('그러니까 레이스 내내 나만 계속 봐야 해! 알았지?');
    } else {
      await maya.say_and_wait([
        '『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』, 또 왔어.',
      ]);
      await maya.say_and_wait([
        '헤헤, ',
        callname,
        '. 작년에 비해서 나, 성장한 것 같아?',
      ]);
      era.printButton('「많이 성장했어」', 1);
      await era.input();
      await maya.say_and_wait('헤헤…… 그래? 그렇구나, 그렇구나☆');
      await maya.say_and_wait('그래도 변하지 않는 것도 있어.');
      await maya.say_and_wait('마야는 여전히 반짝반짝 빛나고 싶어! 바로 이 시리즈에서!!');
      await maya.say_and_wait(['그러니까 ', callname, ', 마지막까지 나만 지켜봐 줘☆']);
      await maya.say_and_wait('누구보다도 눈부시게 빛나는 마야를♪');
      era.drawLine();
      await maya.say_and_wait([
        '아, ',
        sys_get_colored_callname(24, 16),
        '! 안녕☆',
      ]);
      await brian.say_and_wait([
        '……',
        sys_get_colored_callname(16, 24),
        '인가.',
      ]);
      await maya.say_and_wait('어☆ 내 이름 기억해준 거야!? 와아! 신난다!!');
      await brian.say_and_wait(
        '흥…… 너랑 그렇게 많이 레이스를 치렀는데, 싫어도 외우게 되지 않겠나.',
      );
      await maya.say_and_wait(
        '헤헤, 그렇구나. 그럼 오늘은 나랑 레이스하는 데에만 집중해야 해.',
      );
      await maya.say_and_wait('울적함이나 고통 따윈 잊어버릴 정도로 짜릿하게 만들어줄 테니까!');
      await maya.say_and_wait('네 주의력이 전부 나한테만 쏠리게 할 거야!');
      await brian.say_and_wait('……!');
      await maya.say_and_wait('히히. 마야는 이해력이 빠르거든!');
      await maya.say_and_wait([
        '그치만 말야, 역시 모르는 것도 있어. 왜냐하면 ',
        sys_get_colored_callname(24, 16),
        '은 언제나 눈부시니까.',
      ]);
      await maya.say_and_wait([
        '그래서 마야는 ',
        sys_get_colored_callname(24, 16),
        '을 이길 거야.',
      ]);
      await maya.say_and_wait([
        '마야는 ',
        sys_get_colored_callname(24, 16),
        '보다 더 전력으로, 반짝반짝 빛날 거거든.',
      ]);
      await maya.say_and_wait('그러면 분명 너도 짜릿함을 느끼게 될 거야!');
      await brian.say_and_wait('……흥.');
      await brian.say_and_wait('좋다, 전력으로 덤벼라. 짓뭉개주마.');
      await maya.say_and_wait('흐흥☆ 그 말 그대로 돌려줄게♪');
      await maya.say_and_wait('마야는 절대 지지 않을 거니까!');
    }
  };

  handlers[race_enum.hans_dai] = async (maya, me, callname) => {
    await print_event_name(
      ['출격, ', race_infos[race_enum.hans_dai].get_colored_name()],
      maya,
    );
    const brian = get_chara_talk(16);
    await era.printAndWait([
      '그리고 「',
      race_infos[race_enum.hans_dai].get_colored_name(),
      '」 당일.',
    ]);
    await maya.say_and_wait(['…………가자, ', callname, '.']);
    await maya.say_and_wait('준비는 다 끝났어! 엔진 연료도 꽉꽉 채웠다구!');
    era.printButton('「레이스 힘내」', 1);
    await era.input();
    await maya.say_and_wait('응!');
    era.drawLine();
    await brian.say_and_wait('…………');
    await maya.say_and_wait(['앗! ', sys_get_colored_callname(24, 16), '.']);
    await brian.say_and_wait('……역시 왔군.');
    await maya.say_and_wait('응, 왔어.');
    await maya.say_and_wait('히히, 마야는 약속 잘 지키는 착한 어린이니까.');
    await brian.say_and_wait('……네가 어린애냐.');
    await maya.say_and_wait([
      '에엣!? ',
      sys_get_colored_callname(24, 16),
      ' 너무해!! 어떻게 마야한테 그런 소리를 할 수 있어!',
    ]);
    await brian.say_and_wait('……자신을 아이라고 생각하는 건 너 자신 아닌가. 흥……');
    await brian.say_and_wait('……먼저 가마.');
    await maya.say_and_wait('아, 잠깐 기다려!!');
    await brian.say_and_wait('……하아, 또 무슨 일이지?');
    await maya.say_and_wait('응! 있어!');
    await maya.say_and_wait('너, 오늘 전력을 다해야 해!');
    await maya.say_and_wait([
      '봐주기 없기야. 마야는 전력을 다하는 ',
      sys_get_colored_callname(24, 16),
      '을 이기고 싶으니까.',
    ]);
    await maya.say_and_wait('그래야 내가 더 반짝반짝 빛날 수 있을 것 같거든.');
    await brian.say_and_wait('……전력이라고?');
    await brian.say_and_wait('……농담 마라.');
    await maya.say_and_wait('아! 방금 그건 너무 심했잖아! 마야는 진심으로 말한 건데──!');
  };

  handlers[race_enum.tenn_spr] = async (maya, me, callname) => {
    await print_event_name(
      ['출격, ', race_infos[race_enum.tenn_spr].get_colored_name()],
      maya,
    );
    const teio = get_chara_talk(3);
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await era.printAndWait([
      '드디어 「',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '」 당일──',
    ]);
    await teio.say_and_wait(['하이♪ ', sys_get_colored_callname(3, 24), '!']);
    await maya.say_and_wait([
      '와아, ',
      sys_get_colored_callname(24, 3),
      '! 나 응원하러 와준 거야?',
    ]);
    await teio.say_and_wait([
      '응, ',
      sys_get_colored_callname(3, 12),
      '도 용무가 끝나는 대로 달려온대!',
    ]);
    await teio.say_and_wait('헤헤, 다들 엄청 기대하고 있나 봐! 네 레이스를!');
    await teio.say_and_wait('이것 봐 이것 봐, 이거!');
    await say_by_passer_by_and_wait('뉴스', [
      '『',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '은 양강 구도의 격돌!?』 『',
      brian.get_colored_name(),
      '과 ',
      maya.get_colored_name(),
      ', 과연 승자는 누구인가!』',
    ]);
    await say_by_passer_by_and_wait('뉴스', [
      '『',
      race_infos[race_enum.hans_dai].get_colored_name(),
      '의 격전 끝에 찾아온 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '!』 『빛나는 주인공은 거성 ',
      brian.get_colored_name(),
      '인가, 아니면 신성 ',
      maya.get_colored_name(),
      '인가!』',
    ]);
    await maya.say_and_wait('……!');
    await teio.say_and_wait('히히, 어때? 슬슬 긴장돼?');
    await maya.say_and_wait('………………후후후.');
    await maya.say_and_wait(
      '마야가 겨우 이런 거에 겁먹을 리 없잖아! 벌써부터~ 짜릿함이 느껴지는걸!',
    );
    await teio.say_and_wait([
      '와아~! ',
      sys_get_colored_callname(3, 24),
      ' 역시 대단해~! 정말 본받고 싶다니까~!',
    ]);
    await maya.say_and_wait('하하하! 푸딩 사주면 용서해줄게☆');
    await maya.say_and_wait(['히히. 그럼 ', callname, ', 나 먼저 가볼게!']);
    era.printButton('「오늘은 절대 지면 안 돼」', 1);
    await era.input();
    await maya.say_and_wait('응, 절대 안 져!');
    await maya.say_and_wait('이번에야말로 브라이언을 완벽하게 이길 거야!');
    await maya.say_and_wait(['그러니까 ', callname, '도 기대하고 있으라구!']);
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 출주하는 ',
      maya.get_colored_name(),
      '을 배웅한 뒤에──',
    ]);
    await era.printAndWait('（똑똑）');
    await teio.say_and_wait([
      '어라, ',
      sys_get_colored_callname(3, 12),
      '? ',
      sys_get_colored_callname(3, 24),
      '는 방금 갔는데.',
    ]);
    await amazon.say_and_wait('……너희들, 방금 그 영상 봤어?');
    await teio.say_and_wait([
      '어라, ',
      sys_get_colored_callname(3, 16),
      '의 뉴스 말이야? 그건 ',
      sys_get_colored_callname(3, 24),
      '한테 보여줬는데……',
    ]);
    await amazon.say_and_wait('아니, 지금 막 방송된 거야.');
    await amazon.say_and_wait([
      '……일단 ',
      sys_get_callname(12, 0),
      '도 한번 봐봐.',
    ]);
    await era.printAndWait([
      '……',
      me.get_colored_name(),
      '이(가) 건네받은 휴대폰에는 한 뉴스가 나오고 있었다.',
    ]);
    await say_by_passer_by_and_wait('기자', [
      brian.get_colored_name(),
      '씨, 정말입니까!? 이번 『',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '』를 달린 뒤에──',
    ]);
    await brian.say_and_wait([
      '음, 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』을 대비해 컨디션을 조절할 생각이다.',
    ]);
    await say_by_passer_by_and_wait('기자', [
      '하, 하지만…… ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '은 겨울 레이스잖아요!? 지금 결정하기엔 너무 이른 게──',
    ]);
    await brian.say_and_wait('──이르지 않다.');
    await brian.say_and_wait('확인해야 할 것이 있다. 그러기 위해 시간이 필요해.');
    await brian.say_and_wait([
      '──내가, ',
      brian.get_colored_name(),
      '이 대체 어디까지 달릴 수 있을지 확인해야 하니까……!',
    ]);
  };

  handlers[race_enum.takz_kin] = async (maya) => {
    if (era.get('cflag:24:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name(
      ['출격, ', race_infos[race_enum.takz_kin].get_colored_name()],
      maya,
    );
    const brian = get_chara_talk(16),
      amazon = get_chara_talk(12);
    await era.printAndWait([
      '「',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '」 당일이 밝았다. 그리고 이번에는──',
    ]);
    await maya.say_and_wait([
      '……',
      sys_get_colored_callname(24, 16),
      '은 출주하지 않는구나.',
    ]);
    await maya.say_and_wait('아하하☆ 정말 최고의 기회네! 나만 나가는걸!');
    await maya.say_and_wait('그러니까 지지 않아. ──눈앞에 놓인 할 일을 할 뿐이야.');
    era.printButton('「더욱 성장하고 오렴!」', 1);
    await era.input();
    await maya.say_and_wait('라져☆ 지시대로 쑥쑥 성장하고 올게♪');
    era.drawLine();
    await era.printAndWait('（와아아아아아────!!）');
    await amazon.say_and_wait('오, 왔구나.');
    await brian.say_and_wait('……흥, 거절할 이유도 없으니까.');
    await brian.say_and_wait('그래, 무슨 일이지. 이런 먼 곳까지 불러내다니.');
    await brian.say_and_wait(
      '별일 아니라면, 앞으로는 다시 너와 말을 섞지 않겠다.',
    );
    await amazon.say_and_wait(
      '일단 진정하라고. 너처럼 직감이 날카로운 녀석이라면 눈치챘을 거 아냐?',
    );
    await amazon.say_and_wait([
      '이번 『',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '』에 『',
      sys_get_colored_callname(12, 24),
      '』가 출주한다는 걸.',
    ]);
    await brian.say_and_wait('……그게 어쨌다는 거지.');
    await amazon.say_and_wait('흥, 관심 없는 척하지 말라고.');
    await amazon.say_and_wait([
      '너는 ',
      maya.sex,
      '에게 갈구하고 있잖아. 너의 무언가를 해방해줄 존재를.',
    ]);
    await brian.say_and_wait('……눈치채고 있었나?');
    await amazon.say_and_wait('난 몇 년이나 네 등을 쫓아왔으니까.');
    await amazon.say_and_wait('결국 네가 갈구하는 게 무엇인지는 알아내지 못했지만.');
    await amazon.say_and_wait('그래도 네가 무언가를 참고 있다는 것 정도는 알고 있었어.');
    await amazon.say_and_wait('그리고 계속 이대로 있는 건 전혀 재미없다는 사실도 말이야.');
    await brian.say_and_wait('흥, 그래서 그 녀석에게 희망을 걸고 있다는 건가?');
    await brian.say_and_wait([
      '너는 유독 ',
      maya.sex,
      '를 눈여겨보는 것 같더니, 직접 키우고 있었군.',
    ]);
    await amazon.say_and_wait('오, 이미 알고 있었어?');
    await brian.say_and_wait([
      '포기를 모르는 ',
      maya.sex,
      '의 그 성가신 달리기 방식이 누군가와 꽤나 닮았으니까.',
    ]);
    await amazon.say_and_wait([
      '하하, 그렇지. ',
      maya.sex,
      '는 너랑 닮아서 욕심쟁이거든.',
    ]);
    await brian.say_and_wait('……흥.');
    await amazon.say_and_wait([
      '덧붙여서 말해두지. ',
      maya.sex,
      '는 앞으로도 더 성장할 거다.',
    ]);
    await amazon.say_and_wait([
      '『이게 마지막』이라느니 하는 나약한 소리를 하는 너에게, ',
      maya.sex,
      '가 분명 커다란 따귀 한 대를 날려주겠지.',
    ]);
    await amazon.say_and_wait('그리고 네가 정신을 차린 다음에는──');
    await amazon.say_and_wait('이번에야말로 내가 널 쓰러뜨려 주마.');
    await brian.say_and_wait(
      '……흥, 아마존도 제법 둥글둥글해졌군. 적을 도와주기도 하고 말이야.',
    );
    await amazon.say_and_wait('무슨 소리야. 적이 아니라 라이벌이잖아?');
    await brian.say_and_wait('……훗.');
  };

  handlers[race_enum.tenn_sho] = async (maya, me, callname) => {
    if (era.get('cflag:24:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name(
      ['출격, ', race_infos[race_enum.tenn_sho].get_colored_name()],
      maya,
    );
    const teio = get_chara_talk(3);
    await era.printAndWait([
      '──드디어 「',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '」의 날이 밝았다. 이 레이스를 넘어서면 ',
      maya.get_colored_name(),
      '은……',
    ]);
    await maya.say_and_wait(['……다녀올게! ', callname, '!']);
    await maya.say_and_wait([
      '이번 레이스에서 이겨서 실력을 쌓을 거야! 반드시…… 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에 나갈 거야!!',
    ]);
    era.printButton('「잘 다녀와!」', 1);
    await era.input();
    await maya.say_and_wait('응!');
    await teio.say_and_wait('아, 아아…… 미안해!');
    await maya.say_and_wait(['와앗, ', sys_get_colored_callname(24, 3), '!?']);
    await teio.say_and_wait('맞아! 정답이야!');
    await teio.say_and_wait([
      '나, ',
      sys_get_colored_callname(3, 24),
      '에게 전할 말이 있어! 의뢰인은 ',
      sys_get_colored_callname(3, 12),
      '!',
    ]);
    await teio.say_and_wait([
      { color: get_chara_color(12), content: '『' },
      sys_get_colored_callname(12, 24),
      { color: get_chara_color(12), content: '! 너는 봄부터 내──』' },
      '……이하는 생략~',
    ]);
    era.printButton('「그래도 되는 거야!?」', 1);
    await era.input();
    await teio.say_and_wait('괜찮아, 괜찮아! 중요한 건 마지막 대목이니까!');
    await teio.say_and_wait([
      {
        color: get_chara_color(12),
        content: '『나도 강해진 너와 겨루는 걸 기대하고 있다. 오늘부터 나는── 너의 라이벌이다.』',
      },
    ]);
    await teio.say_and_wait([
      maya.sex,
      '가 그렇게 말했어! 나도 ',
      maya.sex,
      '의 기분을 알 것 같아. 나도 너랑 레이스하고 싶거든!',
    ]);
    await teio.say_and_wait([
      '그러니까 지지 마! 꼭 이겨야 해, ',
      sys_get_colored_callname(3, 24),
      '!',
    ]);
    await teio.say_and_wait('정상에 올라서 모두가 널 뒤쫓게 만들라고!');
    await maya.say_and_wait('아하하, 나더러 모두에게서 도망치라는 거야?');
    await teio.say_and_wait([
      '어라라. 설마 ',
      sys_get_colored_callname(3, 24),
      '은 남을 뒤쫓기만 할 줄 아는 건가?',
    ]);
    await maya.say_and_wait(['후후~ 그럴 리가 없잖아☆ 그치, ', callname, '!']);
    era.printButton(`「마야는 뭐든지 할 수 있어」`, 1);
    await era.input();
    await maya.say_and_wait('헤헤! 말이 잘 통하네☆');
    await maya.say_and_wait(
      '후후. 그러니까 마야가 어떤 모습을 보여줄지, 두 사람 다 눈 크게 뜨고 지켜봐야 해♪',
    );
  };
};