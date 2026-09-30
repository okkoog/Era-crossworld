const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.hans_dai] = async (maya, me, callname, extra_flag) => {
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    if (extra_flag.rank === 1) {
      await print_event_name('조종간은 아직 손안에', maya);
      await maya.say_and_wait('하아…… 하아……!');
      await era.printAndWait('（와아아아아아아아────!!）');
      await maya.say_and_wait('히히, 내가 이겼어! 승리 잡았다~☆');
      await maya.say_and_wait('후후, 이걸로──');
      await brian.say_and_wait('……');
      await brian.say_and_wait('……아직 부족한가.');
      await maya.say_and_wait('…………');
      await maya.say_and_wait('……어라?');
      await maya.say_and_wait('…………');
      era.drawLine();
      await amazon.say_and_wait([
        sys_get_colored_callname(12, 24),
        '! 멋진 달리기였어! 마지막 직선은 정말 대단했어!',
      ]);
      await maya.say_and_wait([
        '……어라, ',
        sys_get_colored_callname(24, 12),
        '? 혹시 내 레이스 보러 와 준 거야?',
      ]);
      await amazon.say_and_wait(
        '응! 너희 둘의 보기 드문 결전의 날이니까, 응원하러 왔지──',
      );
      await maya.say_and_wait('그럼 나한테 가르쳐 줬으면 하는 게 있어.');
      await maya.say_and_wait([
        sys_get_colored_callname(24, 16),
        '은 다음엔 어떤 레이스에 나가? ',
        sys_get_colored_callname(24, 12),
        '은 알고 있지?',
      ]);
      await amazon.say_and_wait('!');
      await amazon.say_and_wait('정말 못 말리겠네. 아직도 만족 못 한 거야?');
      await maya.say_and_wait('응. 왜냐면……');
      await maya.say_and_wait([
        '그 사람이 아직 분해하지 않고 있는걸. 오히려 슬퍼 보여.',
      ]);
      await maya.say_and_wait([
        '……난 그런 거 싫어. 모처럼 ',
        maya.sex,
        '와 대결했는데──',
      ]);
      await maya.say_and_wait([
        '마야는 좀 더 눈부시게 빛나서, ',
        maya.sex,
        '가 분해할 정도로 만들고 싶어.',
      ]);
      await amazon.say_and_wait('……그렇구나.');
      await amazon.say_and_wait([
        '하, 처음 ',
        maya.sex,
        '를 봤을 때가 생각나네. 그때도 레이스가 끝났는데 ',
        maya.sex,
        '는 전혀 만족하지 못한 표정이었거든.',
      ]);
      await amazon.say_and_wait([
        '그럼 가르쳐 주지. 내 직감으로는 『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』이야.',
      ]);
      await amazon.say_and_wait('그 녀석은 강자들이 모이는 무대를 갈망하고 있어.');
      await amazon.say_and_wait([
        maya.sex,
        '에게 이번 『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』도 원래는 『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』으로 가기 위한 과정이었을 뿐이겠지.',
      ]);
      await era.printAndWait([
        '──「',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '」. 그것은 유구한 역사를 지닌, 장거리 최고봉을 가리는 레이스였다.',
      ]);
      await maya.say_and_wait(['……', callname, '.']);
      era.printButton(
        `「응, 『${race_infos[race_enum.tenn_spr].name_zh}』에 나가자」`,
        1,
      );
      await era.input();
      await maya.say_and_wait('라져!');
      await amazon.say_and_wait('허…… 이 둘은 정말 대단하네.');
      await amazon.say_and_wait('좋아, 도와주기로 한 거 끝까지 도와주지! 나도 끼워줘!');
      await amazon.say_and_wait([
        sys_get_colored_callname(24, 12),
        ', 오늘 돌아가면 아주 빡세게 단련시켜 줄 테니까! 각오해 둬!',
      ]);
      await maya.say_and_wait('히히, 당연히 오케이지☆');
    } else {
      await print_event_name('즉시 상승', maya);
      await maya.say_and_wait('하아…… 하아……!');
      await maya.say_and_wait('으으…… 분명 조금만 더 가면 됐는데……!!');
      await era.printAndWait('（와아아아아아아아────!!）');
      await brian.say_and_wait('흥……');
      await brian.say_and_wait('……겨우 이 정도인가?');
      await maya.say_and_wait('분해라~~! 저 표정은 뭐야~!?!');
      await maya.say_and_wait('완전히 마야를 무시하는 느낌이야~!!');
      await maya.say_and_wait('으으…… 하지만──');
      era.drawLine();
      await maya.say_and_wait('……다녀왔어!!');
      era.printButton('「어서 와」', 1);
      await era.input();
      await amazon.say_and_wait('오, 벌써 돌아온 거야?');
      await maya.say_and_wait([
        '에엣!? 왜 ',
        sys_get_colored_callname(24, 12),
        '이 여기 있어!?',
      ]);
      await amazon.say_and_wait('왜냐니, 응원하러 온 거지……');
      await maya.say_and_wait('그렇구나! 그럼 잘됐다!');
      await maya.say_and_wait('마야를 좀 더 단련시켜 줘! 오늘부터라도 상관없어!');
      await amazon.say_and_wait('뭐!? 내 사정도 좀 봐달라고──');
      await maya.say_and_wait('싫어! 마야는 강해지고 싶단 말이야! 더 강해질 수 있다는 걸 안단 말이야!');
      await maya.say_and_wait([
        '왜냐면 너무 분한걸! ',
        maya.sex,
        ' 때문에 또 두근거리기 시작했단 말이야!',
      ]);
      await maya.say_and_wait([
        sys_get_colored_callname(24, 16),
        '은 아직도 번쩍번쩍 빛나고 있단 말이야!',
      ]);
      await maya.say_and_wait(
        '이대로 계속 지고 싶지 않아! 스스로 「끝났다」고 말하고 싶지 않아!!',
      );
      era.printButton('「나도 부탁할게!」', 1);
      await era.input();
      await amazon.say_and_wait('하아…… 이 고집불통 녀석들은 대체 뭐야.');
      await amazon.say_and_wait('……뭐, 대결이란 건 이런 뜨거움이 있어야지.');
      await amazon.say_and_wait('좋아, 도와주기로 한 거 끝까지 도와주지! 나도 끼워줘!');
      await amazon.say_and_wait([
        sys_get_colored_callname(12, 24),
        ', 아주 빡세게 단련시켜 줄 테니까! 각오해 둬!',
      ]);
      await maya.say_and_wait('응! 고마워!');
      await amazon.say_and_wait('대답 좋네! 그 기세 꺾이지 말고 유지해!');
      await amazon.say_and_wait(
        '언제라도 전력을 다하라고! 미래를 생각하느라 제대로 주먹도 못 휘두르는 녀석은, 처음부터 기권하는 놈이랑 다를 바 없으니까!',
      );
      await maya.say_and_wait('네!');
      await amazon.say_and_wait([
        '훗! 그럼 다음 작전 회의를 시작해 볼까. 그러니까, ',
        sys_get_colored_callname(12, 24),
        '.',
      ]);
      await amazon.say_and_wait([
        '다음번에 ',
        maya.sex,
        '와 맞붙게 될 무대는 『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』이야.',
      ]);
      await maya.say_and_wait([
        '『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』……!',
      ]);
      await era.printAndWait([
        '──「',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '」. 그것은 유구한 역사를 지닌, 장거리 최고봉을 가리는 레이스였다.',
      ]);
      await amazon.say_and_wait('그 녀석은 강자들이 모이는 무대를 갈망하고 있어.');
      await amazon.say_and_wait([
        maya.sex,
        '에게 이번 『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』도 원래는 『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』으로 가기 위한 과정이었을 뿐이겠지.',
      ]);
      await maya.say_and_wait(['……알겠어. 그럼, ', callname, '.']);
      era.printButton(
        `「응, 『${race_infos[race_enum.tenn_spr].name_zh}』에 나가자」`,
        1,
      );
      await era.input();
      await maya.say_and_wait('라져!');
    }
    await era.printAndWait([
      '그리하여 다음 목표는 「',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '」로 결정되었다!',
    ]);
  };

  handlers[race_enum.tenn_spr] = async (maya, me, callname, extra_flag) => {
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await print_event_name('긴급 상황', maya);
    if (extra_flag.rank === 1) {
      await maya.say_and_wait('하아…… 하아……! ……좋아!');
      await maya.say_and_wait([
        '이걸로…… ',
        sys_get_colored_callname(24, 16),
        '에게……!',
      ]);
      await brian.say_and_wait('──어째서지?');
      await brian.say_and_wait('흥……! 역시 겨우 이 정도인가……!');
    } else {
      await maya.say_and_wait('하아…… 하아……! ……으윽!');
      await maya.say_and_wait([
        sys_get_colored_callname(24, 16),
        '…… 역시…… 빠르네……!!',
      ]);
      await brian.say_and_wait('──어째서지?');
      await brian.say_and_wait('어째서…… 아직도 안 되는 건가……!');
    }
    await maya.say_and_wait('……정말이지, 역시 마야를 안중에도 두지 않는 느낌이야.');
    era.drawLine();
    await maya.say_and_wait([
      sys_get_colored_callname(24, 16),
      '은 도대체 어딜 보고 있는 걸까……',
    ]);
    era.printButton('……어라?', 1);
    await era.input();
    await maya.say_and_wait([
      '……',
      sys_get_colored_callname(24, 16),
      '은 대체 어딜 보고 있는 걸까……?',
    ]);
    await maya.say_and_wait(['……', callname, ', 저기 말이야. 부탁이 하나 있어.']);
    await maya.say_and_wait([
      '한 번만 더, 되도록 빨리 ',
      sys_get_colored_callname(24, 16),
      '과 레이스를 하게 해 줘.',
    ]);
    era.printButton(
      extra_flag.rank === 1
        ? '「이번에는 이겼는데도?」'
        : '「아직 ' + maya.sex + '에게 도전할 생각이야?」',
      1,
    );
    await era.input();
    await maya.say_and_wait('응, 다시 한번 겨뤄봐야 할 것 같아…… 이유는 잘 모르겠지만.');
    await maya.say_and_wait('게다가 이번엔 왠지, 서둘러야 할 것 같다는 예감이 들어……');
    await amazon.say_and_wait([
      '윽! ',
      sys_get_colored_callname(12, 24),
      '…… 이번 레이스가 너를 그렇게 생각하게 만든 거냐?',
    ]);
    await maya.say_and_wait('……그, 맞아.');
    await amazon.say_and_wait('그런가. 그렇다면 더더욱 그냥 내버려 둘 순 없겠네.');
    await amazon.say_and_wait([
      '──『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』이 분명 마지막이 되겠지.',
    ]);
    era.printButton('「……마지막?」', 1);
    await era.input();
    await amazon.say_and_wait([
      '그래, 그 녀석은 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '을 『마지막 레이스』로 정하고, 레이스 우마무스메 생활을 은퇴할 생각이야.',
    ]);
    await amazon.say_and_wait('흥…… 너무 이른 종막이군……!');
    await maya.say_and_wait([sys_get_colored_callname(24, 12), '!?']);
    await maya.say_and_wait('……어째서? 이상해.');
    await maya.say_and_wait([
      '마지막일 리가 없잖아…… ',
      sys_get_colored_callname(24, 16),
      '은 오늘도 그렇게 강했는데!',
    ]);
    if (extra_flag.rank === 1) {
      await maya.say_and_wait('벌써 끝내버리다니. 싫어…… 난 인정 못 해!');
      await maya.say_and_wait([
        '왜냐면 레이스에서 이겼는데도, 나는 ',
        sys_get_colored_callname(24, 16),
        '에게 이겼다는 기분이 전혀 안 드는걸!',
      ]);
      await maya.say_and_wait([
        '마야 혼자만 그런 게 아니라, ',
        maya.sex,
        '도 내 실력을 보고 두근거리게 만들고 싶어!',
      ]);
      era.printButton('「' + maya.sex + '를 두근거리게 만들고 싶어?」', 1);
      await era.input();
      await maya.say_and_wait('……응, 맞아. 너무 분하니까.');
    } else {
      await maya.say_and_wait([maya.sex, '가 또 마야를 두근거리게 만들었단 말이야!']);
      await maya.say_and_wait('그런데 벌써 끝이라니. 싫어…… 난 인정 못 해!');
      await maya.say_and_wait(['마야는 ', maya.sex, '에게 계속 지기만 하는 건 싫어!']);
      era.printButton('「……이기고 싶어?」', 1);
      await era.input();
      await maya.say_and_wait('이기고 싶어.');
      await maya.say_and_wait([
        '……그리고 마야뿐만 아니라, 이번에야말로 ',
        maya.sex,
        '도 두근거리게 만들 거야.',
      ]);
    }
    await maya.say_and_wait([
      '경기장에서 반짝반짝 빛나는 ',
      maya.get_uma_sex_title(),
      '는, 같이 달리는 라이벌과 관객들, 모두의 마음을 설레게 만드는 존재야.',
    ]);
    await maya.say_and_wait([
      '그래서 마야도 ',
      maya.sex,
      '를 설레게 만들 수 있는 사람이 되고 싶어……!',
    ]);
    await maya.say_and_wait(['저기, ', callname, '. 그러니까……']);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 12),
      '이 방금, 아리마 기념이 ',
      sys_get_colored_callname(24, 16),
      '의 마지막 레이스라고 했잖아?',
    ]);
    await maya.say_and_wait([
      '그래서 마야는 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』 전까지 마야를 완벽하게 단련시켜 줬으면 좋겠어.',
    ]);
    era.printButton('「알겠어」', 1);
    await era.input();
    await maya.say_and_wait('……고마워. 헤헤, 기대하고 있을게.');
    await era.printAndWait([
      '──「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」를 목표로 삼으면서, 동시에 ',
      maya.sex,
      '가 원하는 강적과 겨룰 수 있도록…… 그런 방향으로 G1 출주 계획을 짠다면──',
    ]);
    await era.printAndWait(
      '여름과 가을에 최소 한 번씩은 레이스에 나가야 한다. 아리마와 가까운 중장거리나 중거리 G1으로.',
    );
    era.printButton('「『타카라즈카 기념』, 『가을 텐노상』……」', 1);
    await era.input();
    await maya.say_and_wait(
      '알겠어, 마야도 나갈게. 레이스에 나가서…… 누구보다 빠르게 강해질 거야.',
    );
    await maya.say_and_wait('──그러지 않으면 안 될 것 같은 기분이 들어.');
  };

  handlers[race_enum.takz_kin] = async (maya, me, callname, extra_flag) => {
    if (era.get('cflag:24:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('조종석으로', maya);
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await era.printAndWait('（와아아아아아────!!）');
    await brian.say_and_wait('……');
    await amazon.say_and_wait('어때?');
    await brian.say_and_wait('……별로.');
    await brian.say_and_wait('볼일 끝났으니 학원으로 돌아가겠어.');
    await amazon.say_and_wait('훈련하러 가는 거야?');
    await brian.say_and_wait('……시끄러워.');
    era.drawLine();
    await maya.say_and_wait(['하아…… 하아…… 후우. ', callname, ', 어때?']);
    await maya.say_and_wait('마야, 확실히 성장했어? 내가 낼 수 있는 최고의 속도로.');
    era.printButton('「확실히 성장했어!」', 1);
    await era.input();
    await maya.say_and_wait('헤헤, 다행이다♪ 역시 마야는 대단하다니까☆');
    await maya.say_and_wait(
      '후후. 다른 사람의 기류에 휘말리는 평범한 조종 기술 같은 건 이제 딱 질색이야♪',
    );
    await maya.say_and_wait('그럼! 이미 다음 목표는 정해졌어! 목표는──');
    era.printButton(`「『${race_infos[race_enum.tenn_sho].name_zh}』!」`, 1);
    await era.input();
    await maya.say_and_wait('라져☆');
    await maya.say_and_wait('좋아, 다음에도 전속전진이야♪');
  };

  handlers[race_enum.tenn_sho] = async (maya, me, callname, extra_flag) => {
    if (era.get('cflag:24:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('하늘로 통하는 활주로', maya);
    const teio = get_chara_talk(3),
      brian = get_chara_talk(16),
      luna = get_chara_talk(17);
    await era.printAndWait('（와아아아아아아아────!!）');
    await maya.say_and_wait([callname, '! 마야가 1등 했어! 1등!']);
    era.printButton('「정말 노력했구나!」', 1);
    await era.input();
    await maya.say_and_wait('응! 마야 엄청 노력했어! 하지만 아직 더 할 수 있어!');
    await maya.say_and_wait('헤헤, 왜냐면──');
    await teio.say_and_wait([
      '오오! ',
      sys_get_colored_callname(3, 24),
      ' 정말 대단해! 다음은 드디어 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』이구나!',
    ]);
    await era.printAndWait('（와아아아아아아아────!!）');
    await maya.say_and_wait('모두들 분명 마야가 훨씬 더 빛날 수 있을 거라 생각할 거야♪');
    era.drawLine({ content: '며칠 후' });
    await maya.say_and_wait('후우…… 후우…… 응, 또 기록 경신이야!');
    await maya.say_and_wait([
      '이걸로 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』도──',
    ]);
    await maya.say_and_wait('……아.');
    await luna.say_and_wait([
      '……',
      sys_get_colored_callname(17, 16),
      ', 방금 한 말은 정말인가?',
    ]);
    await luna.say_and_wait([
      '네가 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에서──',
    ]);
    await brian.say_and_wait([
      sys_get_colored_callname(16, 17),
      ', 미래 이야기를 하는 건 의미가 없다.',
    ]);
    await brian.say_and_wait('나는 네게 병주 연습을 도와달라고 했을 뿐이다. 내 말이 틀린가?');
    await luna.say_and_wait('그…… 그건 맞지만.');
    await brian.say_and_wait('……내가 저물 시기는 내가 정한다.');
    await brian.say_and_wait('내게 할 말이 있다면 곁에서 지켜보기나 해라.');
    await brian.say_and_wait('……그때가 오면 모두를 따돌리고 승리를 거머쥐는 건 나일 테니까.');
    await luna.say_and_wait('어이, 잠깐!');
    await luna.say_and_wait('……자기 갈 길만 고집스럽게 가겠다는 건가. 하지만──');
    await luna.say_and_wait('모두가 네 뒤에만 있을 거라 생각하지 마라!');
    await maya.say_and_wait(['……', maya.sex, '가 또 반짝반짝 빛나고 있어.']);
    await maya.say_and_wait([
      '볼수록 분해. 어째서 ',
      maya.sex,
      '는 계속 저렇게 빛날 수 있는 걸까.',
    ]);
    await maya.say_and_wait('그 사람은 이제── 곧 가라앉으려고 하는데 말이야.');
    era.printButton('「……석양은 붉은 빛을 내뿜으니까」', 1);
    await era.input();
    await maya.say_and_wait('……어라?');
    await era.printAndWait('저녁의 태양은 아침이나 낮보다 훨씬 더 붉게 타오른다.');
    await era.printAndWait(
      '석양이 지기 직전, 그 찰나의 눈부신 광채는 사람들의 마음을 사로잡는 법이다.',
    );
    era.printButton('「저 빛에 지지 마」', 1);
    await era.input();
    await maya.say_and_wait('……응.');
    await maya.say_and_wait('저 빛에 진다면, 평생 이기지 못할 것 같은 기분이 들어.');
    await maya.say_and_wait([
      '전력을 다할게. 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에서──',
    ]);
    await maya.say_and_wait('전력을 다해서…… 그 사람을 이길 거야!!');
  };
};