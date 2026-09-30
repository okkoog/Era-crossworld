const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} handlers */
module.exports = (handlers) => {
  handlers.model_secret = async (maya, me, callname, flags) => {
    await print_event_name('성숙한 모델의 비결!', maya);
    const city = get_chara_talk(40);
    const snow = get_chara_talk(29);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 마야노 탑건에게 자료 정리를 도와달라고 부탁했을 때──',
    ]);
    await maya.say_and_wait([
      '아! 이건 ',
      sys_get_colored_callname(24, 40),
      '가 실린 잡지잖아!',
    ]);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 40),
      '는 역시 정말 예쁘네~♪ 노출이 좀 있는 옷도 정말 잘 어울려!',
    ]);
    await maya.say_and_wait('……맞다! 마야한테 좋은 생각이 났어~!');
    await era.printAndWait([
      '서류 정리를 마친 뒤, ',
      me.get_couple_title(),
      '은(는) 밖을 걷고 있었다──',
    ]);
    await city.say_and_wait([
      '어라, ',
      sys_get_colored_callname(40, 24),
      ' 아냐.',
    ]);
    await snow.say_and_wait('안녕하세요~!');
    await maya.say_and_wait([
      '앗, ',
      sys_get_colored_callname(24, 29),
      '이랑 ',
      sys_get_colored_callname(24, 40),
      '~! 마침 잘 왔어☆',
    ]);
    await maya.say_and_wait([
      '있지 있지~! ',
      sys_get_colored_callname(24, 40),
      '는 독자 모델이지?',
    ]);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 40),
      '는 성숙한 모델들을 많이 아는 멋진 어른이니까──',
    ]);
    await maya.say_and_wait([
      '마야한테 성숙한 ',
      maya.get_phy_sex_title(),
      '이 되는 비결을 가르쳐 줬으면 좋겠어~♪',
    ]);
    await city.say_and_wait([
      '『성숙한 ',
      maya.get_phy_sex_title(),
      '』이라니…… 너 정말 그거 좋아하는구나.',
    ]);
    await snow.say_and_wait([
      '성, 성숙한 ',
      maya.get_phy_sex_title(),
      '!? 와아……!',
    ]);
    await snow.say_and_wait([
      '……그, 그래도 그게 『시티 ',
      maya.get_child_sex_title(),
      '』가 되는 비결이라면…… 저한테도 가르쳐 주세요!',
    ]);
    await city.say_and_wait([
      '어라…… ',
      sys_get_colored_callname(40, 29),
      '까지 그렇게 말하는 거야?',
    ]);
    await city.say_and_wait('……뭐, 괜찮긴 한데. 내 개인적인 생각이니까 참고만 해 둬.');
    await city.say_and_wait(' 내가 독자 모델을 할 때 신경 쓰는 건 두 가지야.');
    await city.say_and_wait('첫 번째는 『컨디션』.');
    await city.say_and_wait('언제나 최고의 상태를 유지해서, 자신의 가장 멋진 모습을 보여주는 것.');
    await maya.say_and_wait('가장 멋진 모습…… 멋지다!! 그다음엔, 그다음엔!?');
    await city.say_and_wait('두 번째는 『스피드』.');
    await city.say_and_wait('최신 유행을 빠르게 파악해서, 트렌드의 최첨단을 걷는 것.');
    await snow.say_and_wait('정, 정말 참고가 되네요~!');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 40),
      '가 언제나 반짝반짝 빛나는 건, 이 두 가지 덕분이었구나~!',
    ]);
    await maya.say_and_wait('마야도 이걸 배우면 어른에 한 걸음 더 가까워질지도♪');
    era.println();
    era.printButton('「컨디션 유지는 확실히 중요해」（스태미나+20）', 1);
    era.printButton('「스피드를 유지하는 건 확실히 중요해」（스피드+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('그치 그치~♪ 컨디션이지~!');
      await maya.say_and_wait('컨디션…… 몸 만들기…… 응! 마야 알 것 같아!');
      await maya.say_and_wait(['체력을 기르면 되는 거지! 그치, ', callname, '♪']);
      era.printButton('「어라?」', 1);
      await era.input();
      await maya.say_and_wait('자, 가자 가자! 마야가 어른스러워지는 모습을 지켜봐 줘♪');
      await city.say_and_wait('내 말은 그런 뜻이 아니었지만…… 뭐, 됐어.');
      await city.say_and_wait([
        '저 아이 나름대로 어른이 되려고 노력하는 거니까 ',
        maya.sex,
        '를 믿어봐야겠네.',
      ]);
      await snow.say_and_wait([
        '머, 멋지다……! 저도 빨리 ',
        sys_get_colored_callname(24, 40),
        ' 처럼 되고 싶어요~',
      ]);
      await era.printAndWait([
        '최상의 컨디션을 유지하기 위해 훈련을 거듭한 ',
        maya.get_colored_name(),
        '은 체력이 꽤 붙었다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    } else {
      await maya.say_and_wait('그치 그치~♪ 스피드지~!');
      await maya.say_and_wait('스피드라면…… 맞다!');
      await maya.say_and_wait(['쌤이 저번에 그랬잖아, 『셔틀런이 도움이 된다』고~!', callname]);
      era.printButton('「그건 그렇지만……」', 1);
      await era.input();
      await maya.say_and_wait([
        '그럼 결정됐네♪ ',
        callname,
        '이 보증한 거니까 틀림없어!',
      ]);
      await maya.say_and_wait('운동장으로 이륙☆ 누구보다 빠르게 달려 보겠어♪');
      await snow.say_and_wait([
        sys_get_colored_callname(29, 40),
        ' 언니…… 저기, 저도 『시티 ',
        maya.get_child_sex_title(),
        '』가 되고 싶어서……!',
      ]);
      await city.say_and_wait('응, 나는 신경 쓰지 말고…… 열심히 해 봐.');
      await snow.say_and_wait('네! 좋아, 열심히 할게요~!');
      await era.printAndWait([
        '스피드를 높이기 위해 실시한 셔틀런은 ',
        maya.get_colored_name(),
        '에게 아주 좋은 훈련이 된 듯하다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    }
  };

  handlers.maya_reading = async (maya, me, callname, flags) => {
    await print_event_name('공부는 마야에게 맡겨줘☆', maya);
    await era.printAndWait([
      '미팅 시간이 되었지만, ',
      maya.get_colored_name(),
      '은 아직 오지 않았다……',
    ]);
    await maya.say_and_wait('헬로 헬로~! 많이 기다렸어~!?');
    era.printButton('「아니, 방금 왔어」', 1);
    await era.input();
    await maya.say_and_wait('와와☆ 방금 그거 꼭 데이트 같았어!? 꺄~~~!');
    await maya.say_and_wait([
      '아니, 이게 아니고! ',
      callname,
      ', 미안해! 반 친구들한테 붙잡혀 있었어~',
    ]);
    era.drawLine();
    await say_by_passer_by_and_wait(
       maya.get_uma_sex_title() + ' A',
      '하아, 내일부터 시험인가~',
    );
    await say_by_passer_by_and_wait(
       maya.get_uma_sex_title() + ' B',
      '정말 우울해~ 그냥 확 쉬어버릴까?',
    );
    await maya.say_and_wait('그 맘 알아 그 맘 알아! 마야도 시험 진짜 싫어~!!');
    await maya.say_and_wait(
      '금방 다 풀어버리는데, 잘 수도 없고 놀 수도 없잖아! 정말이지, 그림이라도 그릴 수밖에 없다니까~!!',
    );
    await say_by_passer_by_and_wait(maya.get_uma_sex_title() + ' A', [
      maya.get_colored_name(),
      ', 넌 정말~!',
    ]);
    await say_by_passer_by_and_wait(
       maya.get_uma_sex_title() + ' B',
      '부럽다~ 이번 시험 문제도 전부 『보여』?',
    );
    await maya.say_and_wait('뭐, 그렇지~');
    await say_by_passer_by_and_wait(maya.get_uma_sex_title() + ' A', [
      '있지, ',
      maya.get_colored_name(),
      '! 어디가 시험에 나올 것 같은지 좀 가르쳐 줘!',
    ]);
    await say_by_passer_by_and_wait(
       maya.get_uma_sex_title() + ' B',
      '부탁할게~! 친구 좋다는 게 뭐야! 응?',
    );
    await maya.say_and_wait('라져☆ 이 마야노 탑건님만 믿으라고♪');
    era.drawLine();
    await maya.say_and_wait([
      '대충 이런 느낌으로, 마야가 아는 부분을 ',
      maya.sex,
      '들에게 가르쳐 줬어! 다들 정말 좋아하더라!',
    ]);
    await maya.say_and_wait([
      maya.sex,
      '들이 『다음에도 부탁해』라고 하더라고! 헤헤, 인기 많은 ',
      maya.get_phy_sex_title(),
      '은 정말 피곤하다니까~♪',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      '은 무척 즐거워 보였지만, ',
      maya.sex,
      '의 트레이너로서 ',
      me.get_colored_name(),
      '은(는) 이것이 ',
      maya.sex,
      '에게 부담이 되지는 않을지 조금 걱정이 되었다……',
    ]);
    era.printButton('「너도 답례를 요구해보는 건 어때?」（파워&근성+10）', 1);
    era.printButton('「하기 싫을 때는 거절해야 해」（지능+20）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '단순히 가르쳐주기만 하는 게 아니라 답례를 받는다면 ',
        maya.sex,
        '의 부담도 덜 수 있을 것이라 생각하여, ',
        me.get_colored_name(),
        '은(는) 그렇게 제안했다──',
      ]);
      await maya.say_and_wait('아!! 마야는 완전히 잊고 있었어!');
      await maya.say_and_wait('답례 말이지~♪ 뭘 해달라고 할까~?');
      await maya.say_and_wait(['……맞다! ', maya.sex, '들한테 마야랑 놀아달라고 해야지!']);
      await maya.say_and_wait('시험 기간에는 다들 공부하느라 아무도 안 놀아준단 말이야~');
      era.printButton(
        '「네가 가르쳐 준 덕분에 ' + maya.sex + '들도 시간이 남겠네」',
        1,
      );
      await era.input();
      await maya.say_and_wait(['맞아 맞아! 내일 가서 물어봐야지♪']);
      era.drawLine();
      await say_by_passer_by_and_wait(
         maya.get_uma_sex_title() + ' A',
        '너한테 줄 답례?',
      );
      await maya.say_and_wait('응! 마야랑 같이 놀아줬으면 좋겠어♪');
      await maya.say_and_wait('요즘 다들 시험 시험 거리면서 나랑 안 놀아줬잖아~');
      await say_by_passer_by_and_wait(maya.get_uma_sex_title() + ' B', [
        '네가 말하는 건 『',
        maya.get_colored_name(),
        ' 캠프』…… 그러니까 지쳐 쓰러질 때까지 다 같이 전력으로 노는 거 말이지?',
      ]);
      await say_by_passer_by_and_wait(
         maya.get_uma_sex_title() + ' A',
        '좋지. 나도 마침 기분 전환이 필요했어!',
      );
      await say_by_passer_by_and_wait(maya.get_uma_sex_title() + ' B', [
        '나도! 얼마든지 와라, ',
        maya.get_colored_name(),
        ' 캠프♪',
      ]);
      await maya.say_and_wait('야호~~~~~! 실컷 놀아보자!!');
      await era.printAndWait([
        '며칠 후, 통금 시간 직전까지 실컷 놀다 온 ',
        maya.get_colored_name(),
        '은 아주 활기찬 모습으로 돌아왔다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 10, 10], 0);
    } else {
      await maya.say_and_wait(['정말이지! ', callname, '은 걱정도 많다니까~♪']);
      await maya.say_and_wait('마야는 의지 받는 게 기쁘고, 친구들도 문제를 이해해서 다들 좋아했는걸!');
      await maya.say_and_wait('그치? 좋은 일뿐이라니까♪');
      era.printButton('「그럼 나도 기쁘게 해 줬으면 좋겠는데」', 1);
      await era.input();
      await maya.say_and_wait('그럼 그럼, 당연하지! 뭐든지 말만 해♪');
      await era.printAndWait([
        '약속을 받아낸 ',
        me.get_colored_name(),
        '은(는) ',
        maya.get_colored_name(),
        '에게 강도 높은 트레이닝 스케줄을 짜주었다.',
      ]);
      await maya.say_and_wait('와아~! 이런 건 마야가 전혀 안 기쁘거든──────!');
      era.drawLine();
      await maya.say_and_wait(['으으~! ', callname, '은 심술쟁이……']);
      await say_by_passer_by_and_wait(maya.get_uma_sex_title() + ' A', [
        '아하하, 고생이 많네, ',
        maya.get_colored_name(),
        '!',
      ]);
      await say_by_passer_by_and_wait(maya.get_uma_sex_title() + ' B', [
        '저 트레이너님도 보통이 아니네~! ',
        maya.get_colored_name(),
        '을 어떻게 다뤄야 하는지 아주 잘 알고 있어.',
      ]);
      await maya.say_and_wait(['그치 그치! 우리 ', callname, '이 얼마나 대단한데♪']);
      await say_by_passer_by_and_wait(
         maya.get_uma_sex_title() + ' A',
        '……너 말이야, 지금 짜증 난 거야, 아니면 즐거운 거야?',
      );
      await maya.say_and_wait('소, 소녀의 마음은 복잡한 거라구~!');
      await era.printAndWait([
        '혹독한 교훈을 얻은 덕분에 ',
        maya.get_colored_name(),
        '은 조금 더 영리한 ',
        maya.get_phy_sex_title(),
        '가 된 모양이다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    }
  };

  handlers.maya_takeoff = async (maya, me, callname, flags) => {
    await print_event_name('마야노 탑건 · 이륙🌟', maya);
    await era.printAndWait([maya.get_colored_name(), '의 승부복이 드디어 도착했다.']);
    await era.printAndWait([
      maya.sex,
      '가 ',
      me.get_colored_name(),
      '에게 「디자인은 도착할 때까지 비밀!」이라고 말했기에, ',
      me.get_colored_name(),
      '은(는) 이것을 처음 보게 되었다.',
    ]);
    await maya.say_and_wait('짠짜잔──☆');
    await maya.say_and_wait(['이것 봐 이것 봐, ', callname, '! 정말 예쁘지~♪']);
    era.printButton('「좀 더 하늘하늘할 줄 알았는데……」', 1);
    await era.input();
    await maya.say_and_wait('응, 그 점에 대해서 마야도 오랫동안 고민했어~');
    await maya.say_and_wait('하지만 이런 느낌도 섹시하고 나한테 잘 어울린다고 생각해! 어때?');
    era.printButton('「멋지고 좋은 것 같아」', 1);
    await era.input();
    await maya.say_and_wait('야호~!!');
    await maya.say_and_wait('우리 아빠랑 엄마도 승부복 디자인 보고 칭찬해 주셨어~♪');
    await maya.say_and_wait('『아빠가 젊었을 때처럼 멋지네』라고 하셨거든!');
    era.printButton('「네 아버지가 하시는 일이……」', 1);
    await era.input();
    await maya.say_and_wait('응! 하늘을 날아다니는 파일럿이셔☆');
    await maya.say_and_wait('마야도 예전에 아빠가 운전하는 소형 제트기를 타본 적 있거든~♪');
    await maya.say_and_wait('하늘은 정말 넓고, 우리가 사는 마을은 멀고 작게 보였어!');
    await maya.say_and_wait(
      '마야는 그렇게 넓은 풍경 속을 『슈웅──!』 하고 날아다니는 기분이 정말 좋아~♪',
    );
    await maya.say_and_wait(
      '하늘을 나는 건 경기장에서 달리는 거랑 똑같아! 정말 두근거리고 자극적이야♪',
    );
    await maya.say_and_wait('그래서 내 승부복도 이렇게 디자인한 거야☆');
    await maya.say_and_wait(
      '이렇게 입고 코스를 달리면, 마치 자유롭고 즐거운 하늘을 나는 것 같은 기분이 들거든~!',
    );
    era.println();
    era.printButton('「많은 레이스를 향해 이륙하자!」（스피드+20）', 1);
    era.printButton('「드디어 너의 원점을 알게 됐어」（스태미나+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('응응! 그럴게~!');
      await maya.say_and_wait('마야의 비행으로 모든 관객에게 아름다운 풍경을 보여줄 거야♪');
      await maya.say_and_wait([callname, '도 늦어서 비행기 놓치지 않게 조심해!']);
      era.printButton('「기대하고 있을게」', 1);
      await era.input();
      await maya.say_and_wait(['고마워, ', callname, '!']);
      await maya.say_and_wait('나 앞으로 훨씬 더 빨라질 테니까, 계속 마야만 지켜봐 줘야 해♪');
      await maya.say_and_wait('알았지?');
      era.printButton('「라져!」', 1);
      await era.input();
      await maya.say_and_wait('헤헤~♪ 이건 우리 둘만의 약속이야!');
      await maya.say_and_wait('OK Smile☆Lucky Peace! 마야노 탑건, 갑니다────♪');
      await era.printAndWait([
        '승부복을 입은 뒤, ',
        maya.get_colored_name(),
        '의 승리에 대한 갈망이 더 커진 듯하다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    } else {
      await maya.say_and_wait('정말? 정말로?');
      await maya.say_and_wait([callname, '이 점점 마야를 더 잘 알게 되는 것 같네~♪']);
      await maya.say_and_wait('나중에는 우리 아빠 엄마보다 나를 더 잘 알게 될지도…… 꺄아~☆');
      era.printButton('「그러고 보니 부모님께는 승부복 보여드렸어?」', 1);
      await era.input();
      await maya.say_and_wait('어? 아니, 아직!');
      await maya.say_and_wait([
        '오래전부터 가장 먼저 ',
        callname,
        '한테 보여주기로 결정했었거든♪',
      ]);
      await maya.say_and_wait('……맞다! 아빠랑 엄마한테 사진 보내줘야지!');
      await maya.say_and_wait([callname, '도 같이 찍자! 응?']);
      era.printButton('「내가 같이 찍어도 돼?」', 1);
      await era.input();
      await maya.say_and_wait('그거야 당연히 문제없지!');
      await maya.say_and_wait(['아빠랑 엄마도 ', callname, '을 보고 싶어 하셨는걸~!']);
      await maya.say_and_wait('자, 조금 더 가까이~! 하나, 둘…… 이륙☆');
      await maya.say_and_wait('헤헤, 잘 찍혔다♪ 전송!');
      await maya.say_and_wait('앗! 아빠한테 답장 왔다! 어디 보자……');
      await maya.say_and_wait('아하하♪ 인상이 정말 좋아 보인대!');
      await maya.say_and_wait([
        '『',
        maya.get_colored_name(),
        '을 잘 부탁합니다』라고 하셨어! 이제 부모님 공인 ',
        callname,
        '이네☆',
      ]);
      await era.printAndWait([
        '조금 쑥스럽긴 했지만, ',
        me.get_colored_name(),
        '은(는) 앞으로도 계속 ',
        maya.sex,
        '의 힘이 되어주겠다고 다시 한번 다짐했다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    }
  };
};