const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 2] = async (maya, me, callname, flags) => {
    await print_event_name('경품 추첨으로 운 시험!', maya);
    await era.printAndWait([
      '어느 날 저녁, ',
      me.get_couple_title(),
      '은 상점가를 지나가고 있었다──',
    ]);
    await maya.say_and_wait(['어라어라, ', callname, '. 저기서 뭔가 이벤트를 하고 있어!']);
    await say_by_passer_by_and_wait(
      '상점가 직원',
      '이쪽으로 오세요, 지금 신춘 대추첨회를 개최 중입니다~! 특별상은 무려 『온천 여행권』!',
    );
    await say_by_passer_by_and_wait(
      '상점가 직원',
      '1등상은 『특제 당근 스테이크 버거』, 2등상은 『당근 산더미』, 3등상은 『당근 한 개』입니다!',
    );
    await say_by_passer_by_and_wait(
      '상점가 직원',
      '거기 두 분! 데이트하고 돌아가는 길에, 두 분의 사랑을 시험해 보지 않겠어요?',
    );
    await maya.say_and_wait('꺄☆ 할래 할래♪');
    era.printButton('「바로 결정해 버렸네」', 1);
    await era.input();
    await maya.say_and_wait('재미있을 것 같잖아! 그, 리, 고……');
    await maya.say_and_wait('우리는 이렇게 사랑하니까, 분명 특별상을 뽑을 거야! 그치, 그치♪');
    await era.printAndWait('……하지만 운과 사랑 사이에는 딱히 연관성이 없어 보였다.');
    await era.printAndWait([
      '마야노 탑건의 기세에 밀려, 당신은 상점가에서 물건을 사고 추첨에 도전하기로 했다.',
    ]);
    await maya.say_and_wait([callname, '! 추첨권 한 장 받았어! 기회는 딱 한 번뿐!']);
    await maya.say_and_wait('으음~ 제발 제발, 특별상 뽑게 해 주세요……!');
    await era.printAndWait([
      me.get_couple_title(),
      '은 함께 기도를 하며 추첨기 손잡이를 돌렸다.',
    ]);
    await era.printAndWait('결과는──');
    switch (get_random_value(0, 9)) {
      case 0:
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '세상에! 축하합니다────!! 특별상 『온천 여행권』 당첨이에요~~~~!!',
        );
        await era.printAndWait('【온천 여행권】을 획득했다.');
        await maya.say_and_wait('해냈다~~!! 미션 달성~! 역시 마야야!');
        era.printButton('「정말 잘됐다!」', 1);
        await era.input();
        await maya.say_and_wait('응! 그럼, 당장 온천을 향해 이륙☆');
        era.printButton('「아직 아무것도 준비 안 했어!?」', 1);
        await era.input();
        await maya.say_and_wait('에~? 준비~?');
        await era.printAndWait('지금 당장 출발하려면 짐만 챙겨서 될 일이 아니었다.');
        await era.printAndWait('앞으로의 레이스나 트레이닝 일정을 조정한 뒤에 가는 게──');
        era.printButton('「이게 다 너를 위해서야」', 1);
        await era.input();
        await maya.say_and_wait('마야를 위해서?');
        era.printButton('「너의 목표를 이뤄주고 싶으니까」', 1);
        await era.input();
        await maya.say_and_wait('아──');
        await maya.say_and_wait('흐흥. 마야는 말이야, 이미 올해의 목표를 정해뒀어♪');
        await maya.say_and_wait([
          '마야는 반드시 ',
          maya.sex,
          '를…… 전력을 다하는 ',
          sys_get_colored_callname(24, 16),
          '을 뛰어넘을 거야!',
        ]);
        await maya.say_and_wait(['……고마워, ', callname, '.']);
        await maya.say_and_wait(
          '좋아, 결정했어! 그럼, 마야의 목표를 달성한 뒤에 같이 가자!',
        );
        await maya.say_and_wait('그때가 되면 같이 가 줄 거지?');
        era.printButton('「물론이지!」', 1);
        await era.input();
        await maya.say_and_wait('헤헤, 신난다! 그렇게 정한 거다!');
        await maya.say_and_wait('그때가 되면 마음껏 쉬고, 실컷 즐기자구!');
        await era.printAndWait([
          me.get_couple_title(),
          '은 함께 온천 여행권을 사용할 날을 기대하며 발걸음을 옮겼다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          new Array(5).fill(10),
          0,
          JSON.parse('{"체력":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, 2) || flags.wait_flag;
        break;
      case 1:
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '축하합니다, 1등 당첨이에요~! 경품은 『특제 당근 스테이크 버거』입니다!',
        );
        await era.printAndWait('【특제 당근 스테이크 버거】를 획득했다.');
        await maya.say_and_wait('와아! 1등이다! 대단해!!');
        await maya.say_and_wait('아, 온천 여행권이 아니네~!!');
        era.printButton('「그래도 1등을 뽑았잖아!」', 1);
        await era.input();
        await maya.say_and_wait([
          '그치만 그치만~ 마야는 ',
          callname,
          '이랑 뜨거운 허니문 여행을 가고 싶었단 말이야……',
        ]);
        await maya.say_and_wait([
          '으으으…… 햄버거 패티로는 ',
          callname,
          '의 마음을 사로잡을 수 없겠지.',
        ]);
        era.printButton('「……정말 그렇게 생각해?」', 1);
        await era.input();
        await maya.say_and_wait('어라? 아냐?');
        era.printButton('「사실 나 지금 배가 엄청 고파!」', 1);
        await era.input();
        await maya.say_and_wait('정말!? 그럼 그럼, 마야의 스테이크 버거 줄게!');
        await maya.say_and_wait('……헤헤, 어때? 마야가 더 좋아졌어?');
        era.printButton('「그런 것 같아!」', 1);
        await era.input();
        await maya.say_and_wait('만세!');
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '하하, 두 분 정말 사이가 좋으시네요! 좋아요, 그럼 버거 하나 더 서비스로 드릴 테니 같이 맛있게 드세요!',
        );
        await maya.say_and_wait('와아!! 고마워요, 아저씨!');
        await maya.say_and_wait(
          '헤헤, 우리 사이가 정말 좋아 보인대~! 우리 더 사랑하게 된 것 같지 않아?♪',
        );
        await era.printAndWait([
          '그날 밤, ',
          me.get_colored_name(),
          '은(는) 마야노 탑건과 함께 특제 당근 스테이크 버거를 먹었다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          new Array(5).fill(10),
          0,
          JSON.parse('{"체력":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, 2) || flags.wait_flag;
        break;
      case 2:
      case 3:
      case 4:
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '2등 당첨~!! 경품은 『당근 산더미』입니다!',
        );
        await era.printAndWait('【당근 산더미】를 획득했다.');
        await maya.say_and_wait('와아!? 당근이 한가득~!?');
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '네! 그 바구니에 든 당근 전부 가져가세요!',
        );
        await era.printAndWait(
          '──상점가 직원이 가리킨 곳에는 당근이 꽉 찬 커다란 바구니가 놓여 있었다.',
        );
        await maya.say_and_wait('……마야 혼자서 다 먹을 수 있을까.');
        era.printButton('「나도 도와줄게」', 1);
        await era.input();
        await maya.say_and_wait(['엣! 정말!? 그럼 ', callname, '랑 같이──']);
        await maya.say_and_wait('……아!? 마야한테 좋은 생각이 났어!');
        await maya.say_and_wait([
          '있지, ',
          callname,
          '. 이 당근들, 쌤 방에 둬도 돼?',
        ]);
        await maya.say_and_wait([
          '마야는 ',
          sys_get_colored_callname(24, 3),
          '이랑 방을 같이 쓰는데, 방이 좁아서 다 안 들어갈 것 같아! 그러니까, 괜찮지!?',
        ]);
        era.printButton('「뭐, 그러려무나……」', 1);
        await era.input();
        await maya.say_and_wait('아싸!');
        await maya.say_and_wait(
          '그럼 내일부터 마야가 쌤 방으로 가서 당근 요리 잔뜩 해줄게♪',
        );
        era.printButton('「어라!?」', 1);
        await era.input();
        await maya.say_and_wait('헤헤, 마야가 직접 만든 요리로 쌤의 마음을 사로잡아 버리겠어~♪');
        await era.printAndWait([
          '──이날 이후로 마야노 탑건이 ',
          me.get_colored_name(),
          '의 방을 습격하는 횟수가 늘어났다……',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"체력":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, 1) || flags.wait_flag;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '3등입니다~! 경품은 『당근 한 개』예요!',
        );
        await era.printAndWait('【당근 한 개】를 획득했다.');
        await maya.say_and_wait('에에~!? 거짓말이지!');
        await maya.say_and_wait('아저씨, 특별상을 잘못 본 거 아냐? 그치~?');
        await say_by_passer_by_and_wait('상점가 직원', '음…… 3등상 맞아요.');
        await maya.say_and_wait(['우우! ', callname, '이랑 온천 여행 가려던 계획이……']);
        await maya.say_and_wait('게다가 고작 당근 한 개라니……');
        era.printButton('「네 머리 색이랑 똑같은, 아주 활기찬 색이네」', 1);
        await era.input();
        await maya.say_and_wait('……!');
        await maya.say_and_wait([
          '하하, ',
          callname,
          '은 정말 항상 마야 생각뿐이라니까~!',
        ]);
        await maya.say_and_wait(
          '당근 색깔을 보고 내 머리 색을 떠올리다니, 보통은 그런 생각 바로 안 든다구!',
        );
        await maya.say_and_wait('……헤헤헤♪');
        await era.printAndWait([
          '마야노 탑건의 얼굴에 찬란한 미소가 번졌다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"체력":200}'),
        );
        break;
      case 9:
        await say_by_passer_by_and_wait(
          '상점가 직원',
          '아쉽네요, 꽝입니다! 참가상은 『휴지』예요~',
        );
        await era.printAndWait('【휴지】를 획득했다.');
        await maya.say_and_wait('에에────!?');
        await maya.say_and_wait('당연히 당첨될 줄 알았는데! 왜냐면 왜냐면~!');
        await maya.say_and_wait([
          '마야랑 ',
          callname,
          '은 이렇게나 사이가 좋은걸? 안 그래?',
        ]);
        await era.printAndWait([
          '다시 말하지만, 운과 사랑 사이에는 아무런 연관성이 없었다. ',
          me.get_colored_name(),
          '은(는) 토라진 마야노 탑건을 달래며 학원으로 돌아갔다……',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"체력":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, -1) || flags.wait_flag;
    }
  };

  handlers.kirakira_kessin = async (maya, me, callname, flags) => {
    await print_event_name('마야노 탑건의 반짝반짝☆결심!', maya);
    await era.printAndWait([
      '방송을 시작한 마야노 탑건은 타고난 매력 덕분에 유명 스트리머가 되었다.',
    ]);
    await era.printAndWait([
      '하지만 어째서인지 ',
      maya.sex,
      '는 더 이상 방송을 하지 않게 되었다. 오늘도 이렇게 하루 종일 외출만 하고──',
    ]);
    era.printButton('「……이제 방송 안 하니?」', 1);
    await era.input();
    await maya.say_and_wait('그건…… 이제 질렸어! 밖에서 노는 게 더 재밌는걸!');
    await maya.say_and_wait('다들 칭찬해 주는 건 기쁘지만, 이제 충분하다고 생각해!');
    era.printButton('「그렇게 즐겁게 방송했으면서」', 1);
    await era.input();
    await maya.say_and_wait('지, 진짜라니까! 이제 방송 얘기는 그만해!');
    await maya.say_and_wait('마야는 오늘 발매되는 잡지 사러 가야 하니까, 이만 갈게!');
    await era.printAndWait([
      '마야노 탑건은 막무가내로 화제를 돌리고는 뒤도 돌아보지 않고 가버렸다.',
    ]);
    era.printButton('「그래도 역시 신경 쓰이는데……」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      maya.sex,
      '의 방송 다시보기를 열어 무슨 단서가 없는지 찾아보았다──',
    ]);
    era.printButton('「나를 비난하는 댓글이 늘었네……」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 예전에 ',
      maya.sex,
      '의 촬영을 도와준 적이 있었는데, 그때 이후로 ',
      me.get_colored_name(),
      '을(를) 질투하는 댓글이 점점 늘어나고 있었다.',
    ]);
    await era.printAndWait([
      '마야노 탑건은 그 댓글들을 보고 마음이 상해 방송을 그만둔 것일지도 모른다.',
    ]);
    era.printButton(`「마야랑 얘기를 좀 해봐야겠어……」`, 1);
    await era.input();
    await era.printAndWait([
      maya.sex,
      '가 있을 만한 곳이 너무 많았지만, ',
      me.get_colored_name(),
      '은(는) 하나씩 찾아보기로 했다.',
    ]);
    await maya.say_and_wait(['와앗, ', callname, '!?']);
    era.printButton('「겨우 찾았네……!」', 1);
    await era.input();
    await maya.say_and_wait('설마…… 계속 마야를 찾아다닌 거야?');
    era.printButton('「네가 방송을 그만둔 이유를 알았거든」', 1);
    await era.input();
    await maya.say_and_wait('그, 그 얘기는 이제 안 해도 된다니까. 이유는 아까 말한 대로……');
    era.printButton('「나를 배려해 줘서 고마워」（스피드&스태미나+10）', 1);
    era.printButton('「비난 댓글은 전혀 신경 쓰지 않아」（파워+20）', 2);
    era.printButton('「방송을 포기하는 건 너무 아까워」（지능+20）', 3);
    switch (await era.input()) {
      case 1:
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          maya.sex,
          '에게 자신을 향한 비난 댓글을 확인했다는 사실을 전하며, ',
          maya.sex,
          '의 상냥한 배려에 고마움을 표시했다──',
        ]);
        await maya.say_and_wait('벼, 별로 배려 같은 거 아냐! 마야는 정말로 질린 거라구!');
        await maya.say_and_wait(
          '방송을 그만두고 나니까, 마야가 진짜 빛날 곳은 역시 경기장이라는 걸 깨달았을 뿐이야!',
        );
        await maya.say_and_wait([
          '앞으로도 마야는 ',
          callname,
          ' 곁에서 수많은 레이스에 나가고, 좋은 성적을 거둬서──',
        ]);
        await maya.say_and_wait('지금보다 훨씬 더 많은 사람을 마야한테 홀딱 반하게 만들 거야~!');
        era.printButton(`「마야……」`, 1);
        await era.input();
        await maya.say_and_wait('저, 정말~! 그런 표정 짓지 마!');
        await maya.say_and_wait([
          '마야는 ',
          callname,
          '이랑 같이 있기만 하면 뭐든 다 즐거우니까!',
        ]);
        await era.printAndWait([
          '마야노 탑건의 말을 들으며 ',
          me.get_colored_name(),
          '은(는) 조용히 고개를 끄덕였다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 굳이 ',
          maya.sex,
          '가 자신을 위해 해준 선의의 거짓말을 들춰낼 필요가 없다는 것을 깨달았다.',
        ]);
        await era.printAndWait([
          '대신 트레이너로서 ',
          maya.sex,
          '의 소원을 이뤄주고, ',
          maya.sex,
          '가 반짝반짝 빛날 수 있도록 돕기로 했다──',
        ]);
        era.printButton('「내가 반드시 너를 행복하게 해 줄게!」', 1);
        await era.input();
        await maya.say_and_wait('엣!?');
        await maya.say_and_wait([callname, '! 방금 그 말은……!?']);
        era.printButton(
          '「너를 누구보다 빛나는 ' + maya.get_uma_sex_title() + '로 만들어 줄게!」',
          1,
        );
        await era.input();
        await maya.say_and_wait('아…… 뭐야, 그런 뜻이었구나.');
        await maya.say_and_wait('그럼 마야도 맹세할래!');
        await maya.say_and_wait([
          '마야는 반드시 별보다 더 빛나는 최고의 ',
          era.get('cflag:24:성별') === 1 ? '신사' : '숙녀',
          '가 될 거야!',
        ]);
        await maya.say_and_wait(['──우리 ', callname, '이랑 같이☆']);
        flags.wait_flag = get_attr_and_print_in_event(24, [10, 10], 0);
        break;
      case 2:
        await era.printAndWait([
          '그러니 예전처럼 계속 방송을 해줬으면 좋겠다고 ',
          me.get_colored_name(),
          '이(가) ',
          maya.sex,
          '에게 말하자──',
        ]);
        await maya.say_and_wait('마야는 신경 쓰인단 말이야!');
        await maya.say_and_wait([
          '너무 화나고 분해! ',
          callname,
          '은 항상 이렇게나 노력하고 있는데!',
        ]);
        await maya.say_and_wait([
          '훈련할 때도 촬영할 때도 ',
          callname,
          '이 항상 마야를 도와줬는데──',
        ]);
        await maya.say_and_wait('그런데 마야 때문에…… 마야 탓에 그런 말을 듣고……');
        await maya.say_and_wait([
          callname,
          ' 이 바보! 차라리 마야를 더 혼내란 말이야~~~~~!!',
        ]);
        await maya.say_and_wait('……으윽.');
        era.printButton('「미안해」', 1);
        await era.input();
        await maya.say_and_wait('으으~ 바로 그 점이 문제라구……');
        await maya.say_and_wait([
          '마야는 ',
          callname,
          '의 그런 다정한 점을 좋아하지만, 그런 다정한 건 마야한테만 해 줘!',
        ]);
        await maya.say_and_wait(
          '『방해된다』느니 『꺼지라』느니 하는 댓글에는 마음껏 화내도 된단 말이야!',
        );
        era.printButton('「내가 방해가 되는지는 레이스로 증명하면 돼」', 1);
        await era.input();
        await maya.say_and_wait([callname, '……']);
        await maya.say_and_wait('……못 말려! 정말 어쩔 수 없다니까!');
        await maya.say_and_wait([
          '좋아. 이렇게 다정한 ',
          callname,
          '을 위해서라도, 마야가 꼭 이겨 보일게!',
        ]);
        await maya.say_and_wait('그래서 다들 깜짝 놀라게 해 줄 거야!');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 고개를 끄덕이며 밤하늘을 올려다보았다. 마치 ',
          me.get_couple_title(),
          '의 미래를 보여주듯, 밤하늘엔 수많은 별들이 반짝이고 있었다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
        break;
      case 3:
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 자신을 향한 비난 댓글을 보긴 했지만, 그렇다고 방송을 그만두는 건 너무 아깝다고 생각했다.',
        ]);
        await era.printAndWait([
          '「다들 네 방송을 보며 즐거워하잖아」라고 ',
          me.get_colored_name(),
          '이(가) ',
          maya.sex,
          '에게 말하자──',
        ]);
        await maya.say_and_wait([
          '그건 그렇지만, 마야는 사람들이 ',
          callname,
          '한테 못된 말을 하는 게 싫단 말이야……',
        ]);
        era.printButton('「지금 네 마음을 전한다면 분명 다들 이해해 줄 거야」', 1);
        await era.input();
        await maya.say_and_wait('……알았어. 마야가 다시 한번 제대로 얘기해 볼게.');
        await maya.say_and_wait('저기…… 여러분, 오랜만이에요. 마야 채널에 오신 걸 환영합니다.');
        await say_by_passer_by_and_wait('시청자 A', '마야!? 본인이야!?');
        await say_by_passer_by_and_wait('시청자 B', '못 봐서 너무 외로웠어!');
        await say_by_passer_by_and_wait('시청자 C', '별로 기운이 없어 보이네.');
        await maya.say_and_wait('헤헤, 미안해. 오늘은 여러분께 드리고 싶은 말씀이 있어서──');
        await era.printAndWait([
          '거기까지 말하고 마야노 탑건은 고개를 숙였다. ',
          maya.sex,
          '는 어떻게 말을 꺼내야 할지 무척 고민하는 듯 보였다.',
        ]);
        era.printButton(`（마야, 힘내……!）`, 1);
        await era.input();
        await maya.say_and_wait(
          '……마야는 방송하는 동안 정말 즐거웠어. 여러분이 봐 주시는 것도 정말 기뻤고.',
        );
        await maya.say_and_wait([
          '그치만, ',
          callname,
          '한테 심한 말을 하는 댓글들을 보고 마야는 정말 슬펐어.',
        ]);
        await maya.say_and_wait([
          '마야랑 ',
          callname,
          '은 둘 다 『레이스에서 이기고 싶어~!』라는 생각으로 계속 노력하고 있거든……',
        ]);
        await maya.say_and_wait(
          '마야는 여러분이 우리를 응원해 줬으면 좋겠는데, 여러분은 혹시…… 놀기만 하는 마야가 아니면 싫어하는 거야?',
        );
        await say_by_passer_by_and_wait('시청자 D', '완전 좋아해!!');
        await say_by_passer_by_and_wait('시청자 E', '마야, 정말 미안해.');
        await say_by_passer_by_and_wait('시청자 F', '말이 좀 심했네……');
        await maya.say_and_wait('다행이다…… 하지만, 마야 채널은 잠시 동안 안녕이야.');
        era.printButton('「어라!?」', 1);
        await era.input();
        await maya.say_and_wait(
          '쉬는 시간에 달리기 연습을 하다가 깨달았어! 마야가 가장 빛날 수 있는 곳은 경기장이라는 걸.',
        );
        await maya.say_and_wait(
          '조금 외롭겠지만…… 마야는 여러분께 더 멋진 모습을 보여드리고 싶어!',
        );
        await say_by_passer_by_and_wait('시청자 G', '정말 작별이야?');
        await say_by_passer_by_and_wait('시청자 H', '너무 아쉬워……');
        await maya.say_and_wait('여러분……');
        await say_by_passer_by_and_wait('시청자 I', '마야를 응원할게.');
        await say_by_passer_by_and_wait('시청자 J', '나도!');
        await say_by_passer_by_and_wait('시청자 K', '마야, 꼭 보러 갈게!');
        await maya.say_and_wait(
          '응! 레이스 때는 언제든 만날 수 있어! 마야도 경기장에서 여러분을 기다릴게!',
        );
        await era.printAndWait(
          '그 후 열린 모의 레이스에는 평소보다 훨씬 많은 팬이 응원을 하러 찾아왔다.',
        );
        flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    }
  };
};