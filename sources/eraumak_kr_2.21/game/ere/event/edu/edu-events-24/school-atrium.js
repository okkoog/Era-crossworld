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

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} handlers */
module.exports = (handlers) => {
  handlers.adventure_game = async (maya, me, callname, flags) => {
    await print_event_name('마야노 탑건의 두근두근☆담력 시험!', maya);
    const teio = get_chara_talk(3);
    await era.printAndWait([
      '통금 시간이 지나 정적만이 흐르는 교내. ',
      me.get_colored_name(),
      '이(가) 트레이닝실에 두고 온 물건을 찾으러 가던 도중──',
    ]);
    await maya.say_and_wait(['앗! ', callname, '이잖아! 정말 우연이네♪']);
    era.printButton('「이런 늦은 시간에 여기서 뭐 하니?」', 1);
    await era.input();
    await maya.say_and_wait('우리 말이야~ 유령을 보러 왔어☆');
    await maya.say_and_wait(
      'TV에서 심령 프로그램을 봤는데, 우리 학원에도 괴담이 있다고 하길래──',
    );
    await teio.say_and_wait([
      '아, 아무리 생각해도 거짓말 같은데, ',
      sys_get_colored_callname(3, 24),
      '가 도무지 믿질 않아서……',
    ]);
    era.printButton('「이미 통금 시간도 지났으니 그만 돌아가렴」', 1);
    await era.input();
    await teio.say_and_wait(
      '그, 그그그그치!? 궁금한 곳은 다 둘러봤고, 난 이제 충분해!',
    );
    await maya.say_and_wait('에에~!? 딱 한 군데만 더 가보자~! 마야는 트레이닝실에 가보고 싶어!');
    await maya.say_and_wait([
      '아주 먼 옛날, 어떤 ',
      maya.get_uma_sex_title(),
      '가 승부복이 도착하기 전날에 교통사고로 세상을 떠났대……',
    ]);
    await maya.say_and_wait([
      maya.sex,
      '의 유령은 밤마다 트레이닝실에 나타나서, 슬프게 물어본대. 『내 승부복은 어디에……』라고!',
    ]);
    await teio.say_and_wait('히이익────!?');
    await teio.say_and_wait('와, 아…… 그, 그건 분명 지어낸 이야기일 거야!');
    await maya.say_and_wait(['에이, 아닐지도 모르지! ', callname, ', 우리 데려다줘~!']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 막무가내인 마야노 탑건을 이기지 못하고, 세 사람이 함께 트레이닝실로 향했다.',
    ]);
    await maya.say_and_wait('이봐요~ 유령님~! 어디 있나요~?');
    await teio.say_and_wait([
      '일부러 부르지 마, ',
      maya.sex,
      '! 만약 진짜로 나오면 어떡할 건데~!',
    ]);
    await era.printAndWait(
      '단 한 번도 입어보지 못한 승부복을 찾아 이곳을 떠도는 유령이라니……',
    );

    era.printButton('「그 유령도 분명 아쉬웠겠지」 (파워 +20)', 1);
    era.printButton('「마야노 일행의 뒤에서……」 (근성 +20)', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_couple_title(),
        '은(는) 그 유령도 분명 승부복을 입고 경기장을 달리고 싶었을 것이라며 이야기를 꺼냈다──',
      ]);
      await maya.say_and_wait(['그렇지. ', maya.sex, '는 분명 달리는 걸 아주 좋아했을 거야……']);
      await maya.say_and_wait([
        '만약 내가 ',
        maya.sex,
        '였다면, 분명 외롭고 분해서라도 여기로 달려왔을 거야!',
      ]);
      era.printButton('「그 유령의 한을 풀어주고 싶네」', 1);
      await era.input();
      await maya.say_and_wait('응……');
      await maya.say_and_wait('맞다! 마야가 유령 몫까지 대신 달릴래!');
      await maya.say_and_wait(
        '레이스에 나가지 못한 유령을 위해서, 내가 엄청 많이 나가서 좋은 성적을 낼게♪',
      );
      await era.printAndWait('(덜컹덜컹)');
      await teio.say_and_wait('히익!? 창문이 갑자기 소리를 냈어!!');
      era.printButton('「' + maya.sex + '에게 고맙다고 인사하는 걸지도 몰라」', 1);
      await era.input();
      await teio.say_and_wait(
        '으으으~! 싫어, 이제 그만 돌아갈래~! 혹시라도 씌여버리면 어떡해~!!',
      );
      await maya.say_and_wait('에? 유령이랑 친구가 되면 재밌을 것 같은데♪');
      await maya.say_and_wait('그치, 유령님☆');
      await maya.say_and_wait('좋아! 유령님, 마야가 힘낼게!');
      await era.printAndWait([
        maya.get_colored_name(),
        '은 마치 등 뒤에서 순풍이 부는 것처럼 경쾌하게 달려 나갔다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
    } else {
      await teio.say_and_wait('꺄아아아!! 귀신이야~~~~~!!');
      await teio.say_and_wait('와아아아!! 사~ 람~ 살~ 려~!!');
      era.printButton('「쫓아가자!」', 1);
      await era.input();
      await maya.say_and_wait('아, 알았어!');
      await era.printAndWait([
        me.get_couple_title(),
        '은(는) 급히 ',
        teio.get_colored_name(),
        '의 뒤를 쫓았으나, 완전히 놓치고 말았다.',
      ]);
      await maya.say_and_wait([
        sys_get_colored_callname(24, 3),
        '은 사실 유령을 엄청 무서워하는구나……',
      ]);
      era.printButton('「' + maya.sex + '는 어디로 간 걸까?」', 1);
      await era.input();
      await maya.say_and_wait('음…… 적어도 어둡고 무서운 곳으로는 안 갔겠지?');
      await maya.say_and_wait('그럼 답은 간단해! 가자!');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        teio.get_colored_name(),
        '의 도주 경로를 파악하고 있는 ',
        maya.get_colored_name(),
        '의 뒤를 따랐다──',
      ]);
      await maya.say_and_wait([
        '다행이다! 찾았어, ',
        sys_get_colored_callname(24, 3),
        '!!',
      ]);
      await teio.say_and_wait('……………………');
      era.printButton('「미안해, 방금 놀라게 하려던 건 아니었어」', 1);
      await era.input();
      await era.printAndWait([
        '왜인지 침묵을 지키는 ',
        teio.get_colored_name(),
        '를 데리고, ',
        me.get_couple_title(),
        ' 세 사람은 함께 돌아갔다.',
      ]);
      era.drawLine();
      await maya.say_and_wait(['후아~ ', callname, ', 안녕~']);
      await maya.say_and_wait('결국 어제는 유령을 못 만났네~ 재미없게.');
      await teio.say_and_wait('안 만난 게 다행이지! 정말이지, 내가 얼마나 걱정했다고!?');
      await teio.say_and_wait('너 계속 방에도 안 돌아오고, 핸드폰도 안 받았잖아!');
      await maya.say_and_wait([
        '에? ',
        sys_get_colored_callname(24, 3),
        ', 너 우리랑 같이 돌아왔잖아, 그치?',
      ]);
      await teio.say_and_wait('에? 나 혼자 돌아왔는데.');
      await maya.say_and_wait([
        '……그럼 어제 우리 곁에 있었던 ',
        sys_get_colored_callname(24, 3),
        ' 는──',
      ]);
      await say_by_passer_by_and_wait('두 사람', '으아아아아아아악────!?');
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.star_wish = async (maya, me, callname, flags) => {
    await print_event_name('별에 소원을', maya);
    const sunday = get_chara_talk(55);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) 함께 돌아가던 길에, ',
      maya.sex,
      '가 가고 싶은 곳이 있다고 하여 ',
      me.get_couple_title(),
      '은 이곳에 오게 되었다……',
    ]);
    era.printButton('「교실에 뭐 두고 온 거라도 있니?」', 1);
    await era.input();
    await maya.say_and_wait([
      '아니! 있지 있지, 내가 오늘 ',
      sys_get_colored_callname(24, 55),
      '한테서 엄청난 소문을 들었어~!',
    ]);
    await sunday.used_to_say_and_wait(
      '별이 빛나는 밤, 옥상에서 가슴이 두근거리는 두 사람은 행복해질 수 있대'
    );
    await maya.say_and_wait('꺄☆ 너무 낭만적이고 멋지다!');
    await maya.say_and_wait('그치? 그치? 분명 재밌을 거야, 같이 가자!');
    era.printButton('「정말 못 말리겠구나」', 1);
    await era.input();
    await maya.say_and_wait(['신난다! 이제 ', callname, '이랑…… 헤헤!']);
    await maya.say_and_wait('아, 맞다! 가다가 다른 사람한테 들키면 실패한대!');
    await maya.say_and_wait('알았지?');
    era.printButton('「라져!」', 1);
    await era.input();
    await maya.say_and_wait('좋아! 그럼, 스텔스 모드 가동…… 이륙☆');
    await maya.say_and_wait('──대장기, 각 부대에 알림! 적기 그림자 없음…… 이상!');
    await maya.say_and_wait('헤헤! 이대로라면 『슈우웅~!』 하고 옥상까지 갈 수 있겠어……');
    await era.printAndWait('(다다닥…… 다다닥……!)');
    await maya.say_and_wait(['……!! ', callname, ', 방금 저건……']);
    era.printButton('「발소리야」', 1);
    await era.input();
    await maya.say_and_wait('게다가…… 이쪽으로 오는 거 아냐!? 어, 어떡하지!');
    era.printButton('「숨어서 상대가 가기를 기다리자」 (지능 +20)', 1);
    era.printButton('「옥상으로 대시하자!」 (스피드 +20)', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('아, 알았어! 그럼 저기 있는 교실로──');
      await era.printAndWait('(……뚜벅뚜벅…… 뚜벅……)');
      await maya.say_and_wait('……헤헤, 꼭 숨바꼭질하는 것 같아서 스릴 넘치기 시작했어♪');
      era.printButton('「조금만 조용히 해!」', 1);
      await era.input();
      await maya.say_and_wait('아와와! 안 돼 안 돼! 조용히 해야지, 쉿……');
      await maya.say_and_wait(
        ['후후…… ', callname, '은 속눈썹이 살짝 말려 있어서 참 귀엽네♪'],
        true,
      );
      await maya.say_and_wait('게다가 평소보다 훨씬…… 멋있어……', true);
      await maya.say_and_wait('……후와…… 하와와.', true);
      era.printButton('「마야?」', 1);
      await era.input();
      await maya.say_and_wait('……아~~ 이제 한계야────!!');
      await sunday.say_and_wait([
        '와☆ 깜짝이야! ',
        maya.get_colored_name(),
        '도 교실에 뭐 두고 왔어??',
      ]);
      await maya.say_and_wait([
        '머, 뭐야? ',
        sys_get_colored_callname(24, 55),
        '이었어!?',
      ]);
      era.printButton('「들켜버렸네」', 1);
      await era.input();
      await maya.say_and_wait('아────!! 맞다! 너무 긴장해서 깜빡 잊어버렸어~~!');
      await sunday.say_and_wait('그렇구나! 그 마법을 써보려고 했던 거야?? 하지만 하지만……');
      await sunday.say_and_wait('심장이 쿵쾅쿵쾅 뛰었다면 그것만으로도 아름다운 거야☆ 그치★');
      await maya.say_and_wait('으음………… 아마 확실히 그럴지도. 마법 같은 건 안 써도……');
      era.printButton('「무슨 소리니?」', 1);
      await era.input();
      await maya.say_and_wait(
        '아와와!! 아무것도 아냐, 아무 일도 없었어! 어차피 실패했으니까 빨리 돌아가자!!',
      );
      await era.printAndWait(
        '마야노의 재촉에 밀려, 당신은 마법의 진정한 의미를 이해하지 못한 채 돌아갔다……',
      );
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    } else {
      await maya.say_and_wait('그렇구나! 그냥 안 들키게 뛰어서 도망치면 되겠네!');
      await maya.say_and_wait(['그럼 ', callname, '! 손 내밀어 봐.']);
      era.printButton('「응?」', 1);
      await era.input();
      await maya.say_and_wait('마야가 훨씬 빠르니까 그렇지! 자자, 어서, 빨리빨리!');
      await era.printAndWait([
        '점점 다가오는 발소리에 쫓기듯, ',
        maya.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '의 손을 꽉 잡았다──',
      ]);
      await maya.say_and_wait([callname, ', 힘내 힘내! 조금만 더──!']);
      await maya.say_and_wait(['도착!! 해냈어, ', callname, '!']);
      era.printButton('「다, 다행이다……」', 1);
      await era.input();
      await maya.say_and_wait('마지막은 여기서 별을 구경하고……');
      await maya.say_and_wait(['와……! ', callname, ', 하늘 봐! 하늘!!']);
      await maya.say_and_wait('대단해, 완전 대단해! 밤하늘이 원래 이렇게 눈부셨나!?');
      era.printButton('「우리의 노력이 보상을 받은 거야!」', 1);
      await era.input();
      await maya.say_and_wait(
        '그렇구나…… 맞아! 별이 이렇게 예쁜 건, 우리가 열심히 노력했기 때문일 거야!',
      );
      await maya.say_and_wait('……좋아! 그럼 이제 슬슬 돌아가자!');
      era.printButton('「벌써 돌아가게?」', 1);
      await era.input();
      await era.printAndWait(
        '소문에 따르면 「별이 빛나는 밤 옥상에서 가슴이 두근거려야」 한다고 했는데……',
      );
      await maya.say_and_wait('응! 돌아갈래! 마야는 방금 알았거든.');
      await maya.say_and_wait('굳이 아무것도 안 해도, 우리들은……');
      await maya.say_and_wait('아, 아무튼! 그렇게 된 거야! 그러니까 얼른 가자, 응?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 부끄러워하는 ',
        maya.get_colored_name(),
        '을 보며 미소 지었다…… 쏟아지는 별빛 아래, ',
        me.get_couple_title(),
        '은 함께 돌아갔다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    }
  };

  handlers.sweet_present = async (maya, me, callname, flags) => {
    await print_event_name('당신에게 전하는 달콤한 마음♪', maya);
    const flower = get_chara_talk(51);
    const hishi = get_chara_talk(28);
    era.println();
    await era.printAndWait('식당 근처를 지나가던 도중──');
    await maya.say_and_wait('오늘은 과자 만들기를 열심히 할 거야~♪ 두 분 다 잘 부탁드려요!');
    await flower.say_and_wait('네……♪ 지도 선생님으로서 저도 최선을 다할게요.');
    await hishi.say_and_wait('나도 과자 만드는 건 자신 있어~ 크고 맛있는 과자를 만들어 보자~♪');
    era.printButton('「식당에서 과자를 만드는 거니?」', 1);
    await era.input();
    await maya.say_and_wait(['앗, ', callname, '이다~!']);
    await maya.say_and_wait([
      '있지 있지, 평소에 지도해 주시는 ',
      callname,
      ' 한테 고마워서 과자를 선물하고 싶어!',
    ]);
    await maya.say_and_wait([
      '주방 아주머니께 말씀드렸더니, 마야가 주방을 써도 좋다고 하셨어♪',
    ]);
    await maya.say_and_wait([
      '맛있는 케이크를 만들면, ',
      callname,
      '의 마음도──',
    ]);
    era.printButton('「내 마음도?」', 1);
    await era.input();
    await maya.say_and_wait([
      '아, 아무것도 아냐! 괜찮다면 마야가 만드는 거 지켜봐 줘, ',
      callname,
      '♪',
    ]);
    await flower.say_and_wait('그다음에 백설탕을 넣고 잘 저어주면……');
    await maya.say_and_wait('으응~♪');
    await era.printAndWait([
      maya.get_colored_name(),
      '은 익숙하지 않은 요리에 고전하고 있었으나, 무척 즐거워 보였다.',
    ]);
    era.printButton(`「힘내라, ${sys_get_callname(0, 24)}!」 (스태미나 +20)`, 1);
    era.printButton('「나도 한번 만들어 볼까」 (지능 +20)', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '열심히 노력하는 ',
        maya.sex,
        '의 모습을 보며, ',
        me.get_colored_name(),
        '은(는) 절로 ',
        maya.sex,
        '를 응원하게 되었다.',
      ]);
      await era.printAndWait('──동시에, 배가 너무 고픈 나머지 꼬르륵 소리가 크게 울려 퍼졌다.');
      await hishi.say_and_wait('아하하♪ 금방 다 되니까 조금만 더 기다려 줘~');
      await flower.say_and_wait(
        '저기, 이건 방금 틈틈이 만든 머랭 쿠키인데…… 하나 드셔보실래요?',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        flower.get_colored_name(),
        '와 ',
        hishi.get_colored_name(),
        '이 만든 머랭 쿠키를 감사히 받아 들었다.',
      ]);
      era.printButton('「정말 맛있어! 내가 딱 좋아하는 맛이야!」', 1);
      await era.input();
      await flower.say_and_wait('정, 정말요? 다행이다…… 입에 맞으셔서.');
      await maya.say_and_wait('흥!!');
      await maya.say_and_wait(
        '맛있다니…… 좋아하는 맛이라니…… 그런 건 원래 마야가 듣고 싶었던 말인데!',
        true,
      );
      await maya.say_and_wait('이렇게 된 이상……', true);
      await maya.say_and_wait([
        sys_get_colored_callname(24, 51),
        ', ',
        sys_get_colored_callname(24, 28),
        '! 마야, 이제 혼자서 케이크 만들래!',
      ]);
      await hishi.say_and_wait('에? 혼자서 괜찮겠어~?');
      await maya.say_and_wait([
        '완전 괜찮아! ',
        callname,
        '의 취향을 제일 잘 아는 건 마야란 말이야!',
      ]);
      await maya.say_and_wait(
        ['둘한테 지지 않기 위해서라도, 꼭 내 힘으로 더 대단한 요리를 만들 거야!'],
        true,
      );
      await maya.say_and_wait('으, 으으으으~');
      await era.printAndWait([
        maya.get_colored_name(),
        '의 케이크가 완성되긴 했으나, 색깔과 모양이 참으로 형언하기 어려웠다……',
      ]);
      await maya.say_and_wait([
        '맛은 분명 마음에 쏙 들 거야! ',
        callname,
        '이 좋아하는 음식들을 참고했거든!',
      ]);
      await maya.say_and_wait('마야의 사랑도 듬뿍 담았는데…… 안 먹어줄 거야?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 각오를 다지고, ',
        maya.get_colored_name(),
        '이 만든 케이크를 입에 넣었다──',
      ]);
      era.printButton('「마, 맛있어!」', 1);
      await era.input();
      await maya.say_and_wait('정말!?');
      await maya.say_and_wait([
        '정말 맛있어!? ',
        callname,
        '이 좋아하는 맛이야!?',
      ]);
      era.printButton(`「응, 역시 ${sys_get_callname(0, 24)}야!」`, 1);
      await era.input();
      await maya.say_and_wait('와아~♪ 최고야, 정말 최고야~~~~~!!');
      await era.printAndWait([
        '자신의 요리를 칭찬받은 ',
        maya.get_colored_name(),
        '은 그 뒤로 내내 기분이 좋아 싱글벙글 웃으며 훈련을 마쳤다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    } else {
      await era.printAndWait([
        maya.sex,
        '들이 요리하는 모습을 지켜보니, ',
        me.get_colored_name(),
        ' 자신도 한번 요리를 해보고 싶어졌다. ',
        me.get_colored_name(),
        '이(가) 그렇게 말하자──',
      ]);
      await flower.say_and_wait(
        '앗, 관심 있으시면 같이 만들어 보실래요? 제가 순서를 알려드릴게요……!',
      );
      await maya.say_and_wait([
        '잠깐잠깐! ',
        callname,
        '은 마야가 요리하는 걸 지켜봐 줘야지~!',
      ]);
      era.printButton('「나도 너에게 고마운 마음을 전하고 싶어서 그래」', 1);
      await era.input();
      await maya.say_and_wait([callname, '……!']);
      await maya.say_and_wait('라져☆ 그렇다면 대환영이야♪');
      await hishi.say_and_wait('다 같이 사이좋게 요리하기~ 그러면 과자가 더 맛있어지는 법이지♪');
      await era.printAndWait(
        '우여곡절 끝에 케이크가 완성되었으나, 겉이 조금 타버리고 말았다……',
      );
      await maya.say_and_wait(['와아~! ', callname, '이 나한테 케이크를 줬어~♪']);
      await maya.say_and_wait('먹어볼래 먹어볼래…… 냠!');
      await maya.say_and_wait('조, 조금 쓰긴 하지만, 이게 바로 어른의 맛이라는 거겠지♪');
      era.printButton('「그냥 탄 거야! 억지로 안 먹어도 돼!」', 1);
      await era.input();
      await maya.say_and_wait('싫어~!');
      await maya.say_and_wait([
        '마야는 하나도 남김없이 ',
        callname,
        '의 마음을 다 먹어치울 거야!',
      ]);
      await maya.say_and_wait(['그러니까 ', callname, '도 마야가 만든 케이크 먹어봐.']);
      await maya.say_and_wait('아~ 해봐♪');
      await maya.say_and_wait('헤헤~! 마야의 고마운 마음이 전해졌어?');
      era.printButton('「당연하지!」', 1);
      await era.input();
      await maya.say_and_wait('신난다~♪');
      await flower.say_and_wait('이, 이렇게나 가깝다니…… 옆에서 보는 것만으로도 가슴이 두근거려요!');
      await hishi.say_and_wait('좋아 좋아. 경사로세, 경사야~♪');
      await era.printAndWait([
        '두 친구의 도움을 받아, ',
        maya.get_colored_name(),
        '의 과자 만들기는 대성공으로 끝났다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    }
  };
};