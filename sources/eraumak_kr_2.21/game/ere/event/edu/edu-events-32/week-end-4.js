const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.japa_cup = async (tachyon, me, callname) => {
    await print_event_name('한계를 초월하여', tachyon);
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await say_by_passer_by_and_wait('해설', [
      coffee.get_colored_name(),
      '! 재팬 컵의 기록을 경신했습니다…… 아니! 세계 기록입니다! 불과 몇 달 전 ',
      tachyon.get_colored_name(),
      '에 의해 경신되었던 세계 2400m 기록이, 칠흑의 환영에 의해 다시 한번 추월당합니다!',
    ]);
    era.println();
    await tachyon.print_and_wait('정말로 초월했다.');
    await tachyon.print_and_wait([' ', t_call_c, '이 결승선을 통과하는 순간.']);
    await tachyon.print_and_wait('자신도 다른 이들과 마찬가지로 흥분하고 말았다.');
    era.println();
    await tachyon.print_and_wait('이것은 당연한 결과였다.');
    await tachyon.print_and_wait([
      '자화자찬 같지만, ',
      tachyon.sex,
      '는 자신이 보기에 한계를 초월할 가능성이 가장 높은 ',
      tachyon.get_uma_sex_title(),
      '였으니까.',
    ]);
    await tachyon.print_and_wait('단순히 근접한 것과 실제로 초월하는 것은 천지차이다.');
    await tachyon.print_and_wait(['하지만…… ', tachyon.sex, '는 정말로 해냈다!']);
    await tachyon.print_and_wait(
      '어째서인지 달리는 모습에 알 수 없는 위화감이 느껴졌지만, 그런 것은 아무래도 좋았다.',
    );
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '이 한계의 ',
      tachyon.get_uma_sex_title(),
      '라면, ',
      coffee.get_colored_name(),
      '는 지금, 그 한계를 뛰어넘은 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '!',
      callname,
      '!',
      t_call_c,
      '이……',
    ]);
    era.println();
    await tachyon.print_and_wait('곁에 있는 이와 이 기쁨을 나누고 싶었다.');
    await tachyon.print_and_wait('수많은 고난 끝에 이뤄낸 연구가 드디어 결실을 보았다.');
    await tachyon.print_and_wait('그러나.');
    era.println();
    await tachyon.say_and_wait(['……', callname, '?']);
    era.println();
    await tachyon.print_and_wait('대답이 없었다.');
    await tachyon.print_and_wait([
      '곁에 있는 ',
      me.sex,
      '도, 관객석의 관중도, 모든 이의 시선은.',
    ]);
    await tachyon.print_and_wait(['전부 중앙에 있는 ', tachyon.sex, '에게 집중되어 있었다.']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '의 부름은, 귀를 찢는 듯한 환호와 갈채 속에 파묻혀 버렸다.',
    ]);
  };

  handlers.ending = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    const c_call_m = sys_get_colored_callname(25, 0),
      c_call_t = sys_get_colored_callname(25, 32),
      coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    if (edu_marks.plan_b) {
      await print_event_name(
        [
          { color: 'white', content: '최강의 ' },
          {
            color: coffee.color,
            content: coffee.get_uma_sex_title(),
            fontWeight: 'bold',
          },
          { color: 'white', content: ', 최속의 ' },
          { color: tachyon.color, content: '주법', fontWeight: 'bold' },
        ],
        tachyon,
      );
      await tachyon.print_and_wait([
        '처음에, ',
        tachyon.get_colored_name(),
        '은 그저 기다리고 있었다.',
      ]);
      await tachyon.print_and_wait([
        '레이스가 끝나기를, ',
        callname,
        '이 ',
        me.sex,
        '의 대답을 들려주기를.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        '는 이 레이스에 도대체 무슨 의미가 있는지 이해할 수 없었다.',
      ]);
      await tachyon.print_and_wait([
        '설마 지금의 자신과 ',
        t_call_c,
        ' 사이의 격차를 뼈저리게 느끼게 하려는 것인가?',
      ]);
      await tachyon.print_and_wait(
        '지금의 자신을 더 비참하게 만들려는 속셈인가 하는 자포자기하는 생각마저 들었다.',
      );
      await tachyon.print_and_wait([
        '그렇기에 ',
        tachyon.sex,
        '는 경기장에 제대로 집중하지 않았다.',
      ]);
      await tachyon.print_and_wait('그저 시간이 흐르기만을 기다릴 뿐이었다.');
      era.println();
      await say_by_passer_by_and_wait('해설', [
        '레이스 시작되었습니다! 모든 ',
        tachyon.get_uma_sex_title(),
        '들이 안정적으로 게이트를 빠져나갑니다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '먼저, 해설의 목소리가 ',
        tachyon.sex,
        '의 호기심을 자극했다.',
      ]);
      await tachyon.print_and_wait([
        '비록 직접 달릴 수는 없어도, ',
        tachyon.get_colored_name(),
        '은 여전히 모든 것에 호기심을 품고 있었다.',
      ]);
      await tachyon.print_and_wait([
        '특히 그 상대가 이론상 자신이 속속들이 알고 있어야 할 ',
        t_call_c,
        '이라면 더더욱 그랬다.',
      ]);
      era.println();
      await tachyon.print_and_wait('그다음 찾아온 것은, 위화감이었다.');
      await tachyon.print_and_wait('사실 위화감은 지금 처음 느낀 것이 아니었다.');
      await tachyon.print_and_wait(['재팬 컵이 끝났을 때부터 그런 기분이 들었다.']);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 주법은…… 처음에 ',
        tachyon.sex,
        '가 알던 주법과 아주 미세한 차이점이 있었다.',
      ]);
      await tachyon.print_and_wait([
        '만약 자신이 계속해서 ',
        t_call_c,
        '을 주시하고 있었다면, 오히려 결코 눈치채지 못했을 정도로 아주 작은 차이였다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 재팬 컵 이후 단 한 번도 진지하게 ',
        t_call_c,
        '의 질주를 보지 않았던 자신에게는, 그 아주 미세한 변화조차 너무나도 명확하게 보였다.',
      ]);
      await tachyon.print_and_wait('특히……');
      await tachyon.print_and_wait([
        '그것은 여전히 ',
        t_call_c,
        ' 본인의 주법이었지만……',
      ]);
      await tachyon.print_and_wait('세부적인 부분…… 게이트를 나가는 자세…… 호흡하는 방식……');
      await tachyon.print_and_wait([
        '그런 디테일들은…… ',
        tachyon.get_colored_name(),
        ' 자신조차 눈치채지 못했던, 본인만이 가진 고유한 습관이었다.',
      ]);
      await tachyon.print_and_wait('그것은……');

      era.printButton(
        `「이건…… 내가 아는 가장 빠르고, 가장 강한 두 명의 ${tachyon.get_uma_sex_title()}의 주법을 융합한 거야」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        '마음을 사로잡았던 그 사람은, 어느새 자신의 곁에 서 있었다.',
      );
      await tachyon.print_and_wait([
        '그 눈 속의 빛은 여전히 반짝이며, 경기장을 달리는 그 ',
        tachyon.get_uma_sex_title(),
        '를 바라보고 있었다.',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.print_and_wait([me.sex, '의 눈 속의 빛은, 과연 누구를 향하고 있는 것인가.']);
      await tachyon.print_and_wait([
        '그것은 ',
        tachyon.get_colored_name(),
        '을 위한 것인가, 아니면 ',
        coffee.get_colored_name(),
        '를 위한 것인가.',
      ]);
      await tachyon.print_and_wait([
        '이전의 자신은 당연하게도, 자신이 더 이상 경기장에 설 수 없으니 바라보는 대상은 당연히 ',
        t_call_c,
        '일 것이라 생각했다.',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.printButton(
        '「그뿐만 아니라 나는 확신해. 이것보다 더 찬란하고, 눈부시며, 사람을 매료시키는 주법은 없다는 걸」',
        1,
      );
      await era.input();
      await say_by_passer_by_and_wait('해설', [
        coffee.get_colored_name(),
        '! 광속을 초월한 칠흑의 환영! 연말의 나카야마 경기장을 제패한 것은 바로 ',
        coffee.get_colored_name(),
        '입니다!',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '황홀경 속에서, 타키온은 마치 ',
        tachyon.get_colored_name(),
        '과 ',
        coffee.get_colored_name(),
        '가 동시에 결승선을 통과하는 듯한 순간을 보았다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '친구를 뛰어넘고 싶다는 그 ',
        tachyon.get_teen_sex_title(),
        '의 꿈을 이루어주기 위해.',
      ]);
      await era.printAndWait('자신의 마음을 사로잡은 그 모습이 계속해서 눈앞에서 달릴 수 있게 하기 위해.');
      await era.printAndWait([
        '최강의 ',
        tachyon.get_uma_sex_title(),
        '와 최속의 속도를 결합시켰다.',
      ]);
      await era.printAndWait('머릿속으로 이 순간에 해줄 멋진 말들을 수없이 떠올렸다.');
      await era.printAndWait('하지만 입을 여는 순간…… 그 말들은 다시 막혀버리고 말았다.');
      await era.printAndWait('쮸웁…… 웁…… 쮸웁……');
      await tachyon.say_and_wait('이토록 많은 관중 앞에서, 이토록 대담한 입맞춤이라니.');
      await era.printAndWait([
        '……주변 사람들이 모두 경기장 중앙의 ',
        coffee.get_colored_name(),
        '에게 집중하고 있지 않았다면, 분명 또 다른 비난의 폭풍이 일었을 것이다.',
      ]);
      await era.printAndWait([
        '어떤 의미에서는 정말 ',
        tachyon.sex,
        '다운 행동이었다.',
      ]);
      era.println();
      await era.printAndWait([
        '얼마나 시간이 흘렀을까. ',
        me.get_colored_name(),
        '이(가) 자신의 생명의 위협을 느끼기 시작하고, 진정한 관객들이 ',
        me.get_couple_title(),
        ' 두 사람의 이상함을 눈치채기 시작했을 때쯤.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 그제야 인간에게나 ',
        tachyon.get_uma_sex_title(),
        '에게나 산소가 가장 중요하다는 사실을 떠올렸다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 얼굴은 산소 부족 때문인지, 아니면 어떤 감정 때문인지 발갛게 달아올라 있었다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        me.get_colored_name(),
        '이(가) 사랑해 마지않는, 광기 어린 빛을 내뿜는 암적색 눈동자는 여전히 ',
        me.get_colored_name(),
        '의 얼굴을 정면으로 응시하고 있었다.',
      ]);
      await era.printAndWait('그리고 나서……');
      await era.printAndWait([
        '이것은 ',
        me.get_colored_name(),
        '이(가) 처음으로 본, 세상에서 ',
        tachyon.get_colored_name(),
        '의 주법보다 더 빛나는 것이었다.',
      ]);
      await era.printAndWait([
        '그것은 바로 지금 ',
        tachyon.get_colored_name(),
        '의 얼굴에 핀 미소였다.',
      ]);
      era.drawLine({ content: '트레센 학원으로 돌아온 후' });
      await coffee.say_and_wait('……오늘 아리마에서 이긴 건, 저 맞죠?');
      await tachyon.say_and_wait(['그럼 당연하지, ', t_call_c, '. 레이스는 정말 멋졌네.']);
      await coffee.say_and_wait([
        '그럼…… 설명해 주겠나요? 왜 ',
        c_call_t,
        '가 승리자라도 된 양 의기양양한 표정으로 ',
        c_call_m,
        ' 옆에 찰딱 붙어 있는 건가요?',
      ]);
      era.println();
      await era.printAndWait([
        '경기장에서 돌아온 이후로, ',
        tachyon.get_colored_name(),
        '은 계속해서 당신을 놓아주지 않았다.',
      ]);
      await era.printAndWait([
        '지금도 ',
        me.get_colored_name(),
        '을(를) 소파에 앉혀두고는 계속해서 당신의 왼팔을 껴안고 있었다.',
      ]);
      await era.printAndWait([
        '게다가 모든 것이 자신의 공로라는 듯한 득의양양한 눈빛으로 ',
        coffee.get_colored_name(),
        '를 바라보고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('흥흥~~ 뭐 어때, 뭐 어때서 그런가.');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          '마치 시대극의 악역 같은 말투로 대답하는 ',
          tachyon.get_colored_name(),
          '의 목소리가 들렸다.',
        ]);
        await era.printAndWait([coffee.get_colored_name(), '는 우선 온몸을 부르르 떨었다.']);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 혹시 ',
          tachyon.sex,
          '가 충동적으로 무슨 일이라도 저지르지 않을까 걱정하던 찰나.',
        ]);
        await coffee.say_and_wait('————그럼 저도 할래요.');
        era.println();
        await era.printAndWait([
          '마치 오기라도 부리듯, ',
          coffee.get_colored_name(),
          '는 순식간에 소파로 비집고 들어와 ',
          me.get_colored_name(),
          '의 두 다리 사이에 자리를 잡고 앉았다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['이봐— ', t_call_c, ', 이건 너무 치사하잖아!']);
        await coffee.say_and_wait(
          '……치사하지 않아요. 그리고…… 치사하면 좀 어떤가요. 오늘의 승자는 분명 저인데……',
        );
        await tachyon.say_and_wait('제길, 나도 앉을 걸세!');
        era.println();
        await era.printAndWait([
          '어린아이처럼 투닥거리는 두 사람을 보며, ',
          me.get_colored_name(),
          '은(는) 자기도 모르게 쓴웃음을 지었다.',
        ]);
        await era.printAndWait('————어쩐지 갑자기 커피와 홍차를 섞어 마시고 싶어졌다.');
        await coffee.say_and_wait([
          '……맞다, ',
          c_call_m,
          '…… 어제저녁에 외출했던 일에 대해서 ',
          c_call_t,
          '가 레이스 전에 했던 말…… 나중에 제대로 설명해 주실 거죠?',
        ]);
        await era.printAndWait([
          '지리적 이점을 이용해 ',
          me.get_colored_name(),
          '의 귓가에 속삭이는 ',
          coffee.get_colored_name(),
          '의 말이 들렸다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '의 쓴웃음이 얼굴 위에서 그대로 굳어버렸다.']);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 탐관오리 같은 미소를 지으며, ',
          me.get_colored_name(),
          '의 몸 위에 올린 손을 가만히 두지 못하고 꼼지락거렸다.',
        ]);
        await era.printAndWait('그리고……');
        era.println();
        await tachyon.say_and_wait('으음————');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          tachyon.get_colored_name(),
          '은 마치 정체 모를 힘에 머리를 맞은 듯, 순식간에 기절해버리고 말았다.',
        ]);
        await coffee.say_and_wait('……정말이지.');
        await coffee.say_and_wait([
          '이제야 좀 조용해졌네요…… 그럼, ',
          c_call_m,
          ', 커피 한 잔 드릴까요?',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 살짝 쓴웃음을 지으며, ',
          coffee.get_colored_name(),
          '에게 「부탁해」라고 답했다.',
        ]);
        await era.printAndWait('하지만 어째선지 지금은 단순한 커피가 조금 너무 쓰게 느껴졌다.');
        await era.printAndWait('겨울 햇살이 내리쬐는 트레이닝실 안에서, 왠지 지금 이 순간은.');
        await era.printAndWait('다른 무언가를 조금 더 섞는 것이 어울릴 것 같았다……');
        era.printButton('「……저기, 홍차랑 섞어서 마셔봐도 될까?」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '을 보며 처음엔 조금 의아해하더니, 곧 무언가 생각난 듯 어이없다는 미소를 지었다.',
        ]);
        await coffee.say_and_wait([
          '……오늘뿐이에요. 그리고 꼭 ',
          c_call_t,
          '에게는 비밀로 해야 해요. 안 그러면 ',
          tachyon.sex,
          '가 또 시끄럽게 굴 테니까.',
        ]);
        await era.printAndWait('커피와 홍차를 섞어 한 모금 마셨다.');
        await era.printAndWait(
          '커피의 쓴맛과 홍차의 떫은맛은 옅어졌지만, 향기는 줄어들지 않고 오히려 서로의 풍미를 더욱 돋보이게 했다.',
        );
        await era.printAndWait([
          '어째서인지 ',
          me.get_colored_name(),
          '은(는) 지금 이 맛이 딱 적당하다고 느꼈다.',
        ]);
      }
    } else {
      await print_event_name('축하회', tachyon);
      await era.printAndWait('아리마 기념 다음 날.');
      await era.printAndWait([
        '목표를 달성했다는 안도감 때문인지, ',
        me.get_colored_name(),
        '은(는) 지난 3년 만에 처음으로 지각을 하고 말았다.',
      ]);
      await era.printAndWait('하지만 두 사람의 목표는 이미 이루어졌다.');
      await era.printAndWait('이제는 편안한 마음으로 URA 파이널스를 맞이하자.');
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait('도대체 뭘 하느라 이제 오는 건가? 늦었어, 실험은 이미 시작된 지 오래라고.');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) ',
          tachyon.get_colored_name(),
          '의 실험실에 도착했을 때, 그곳에는 평소와 다름없이 연구에 몰두하고 있는 ',
          tachyon.get_colored_name(),
          '의 모습이 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '어제는 레이스를 통해 한계 초월의 가능성을 증명했을 뿐이야. 다음 목표는 상시화다!',
        );
        await tachyon.say_and_wait(
          '단 한 번의 돌파는 우연일 수 있고, 두 번은 요행일 수 있어. 그것을 상시 유지할 수 있어야만 진정한 돌파라고 할 수 있는 법이지!',
        );
        await tachyon.say_and_wait('빨리 실험복으로 갈아입고 와서 도와주게!');
        await coffee.say_and_wait([c_call_t, '……, 너무 시끄러워요.']);
        await tachyon.say_and_wait([
          '이런 이런, 어제 아리마 기념에서 나에게 패배한 ',
          t_call_c,
          ' 아닌가?',
        ]);
        await tachyon.say_and_wait(
          '하고 싶은 말이 있다면 경청해 주지. 패자의 광적인 짖음마저 받아주는 것이 승리자의 아량이니까————',
        );
        await coffee.say_and_wait('쳇……');
        await tachyon.say_and_wait('와악! 내 실험 자료가———— 타…… 안 탔네?');
        era.println();
        await era.printAndWait([
          '순식간에 ',
          tachyon.get_colored_name(),
          '의 실험 자료에 불이 붙었으나, ',
          tachyon.get_colored_name(),
          '이 허겁지겁 자료를 구하려 달려들자마자 불꽃은 거짓말처럼 사라졌다.',
        ]);
        era.println();
        await coffee.say_and_wait([
          '……이번 한 번만은 인정할게요…… 어제의 ',
          c_call_t,
          '는 확실히, 잘 달렸어요……',
        ]);
        await coffee.say_and_wait(
          '분하긴 하지만…… 당신을 그 『친구』와 겹쳐보고 말았으니까요……',
        );
        await tachyon.say_and_wait([
          '친구? 오호? 그거…… 아주 흥미로운걸! ',
          t_call_c,
          ', 그 부분에 대해 자세히 좀 들려주게나!',
        ]);
        await coffee.say_and_wait('시끄러우니까……저리 가세요……',);
        era.println();
        await era.printAndWait([
          '티격태격하는 두 사람을 보며, ',
          me.get_colored_name(),
          '은(는) 실험복을 걸치고 앞으로도 계속될 이 소란스러운 일상 속으로 고소한 쓴웃음과 함께 합류했다.',
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          '그러나 ',
          me.get_colored_name(),
          '이(가) 실험실 문 앞에 도착했을 때.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 안에서 들려오는 대화 소리를 들었다.']);
        era.println();
        await tachyon.say_and_wait([
          t_call_c,
          '…… 어쩌지…… ',
          callname,
          '이 정말로 안 오면 어떡하지……',
        ]);
        await coffee.say_and_wait('……그게 저랑 무슨 상관인가요.');
        await tachyon.say_and_wait([
          '어제 내가 목표를 달성했다고 말해버려서…… ',
          me.sex,
          '가 이제 볼일이 끝났다고 생각해서 안 오는 건 아닐까……',
        ]);
        await tachyon.say_and_wait([
          '애초에 3년 동안 쌓아온 유대라는 게 전부 내 망상이었던 건 아닐까. 어쩌면 ',
          me.sex,
          '는 처음부터 끝까지 아무런…… 아무런 감정도 없었을지도……',
        ]);
        await coffee.say_and_wait('……정말로 그렇다면 어떻게 할 건가요?');
        await tachyon.say_and_wait([
          '……역시, 약을 써서라도 ',
          me.sex,
          '가 내 곁을 떠나지 못하게 만들어야겠지. 생각해보니 이건 너무 불공평하잖아?',
        ]);
        await tachyon.say_and_wait([
          '나만 ',
          me.sex,
          ' 없이는 못 사는 몸이 됐는데, ',
          me.sex,
          '는 나 없이도 잘 살 수 있다는 건 말이 안 돼. 역시 중독성 높은 약을 빨리 완성해서 ',
          me.sex,
          '가 다시는 나를 떠나지 못하게……',
        ]);
        await tachyon.say_and_wait(
          '아니면 소설에 나오는 고독 같은 것도 좋겠군…… 주기적으로 내가 만든 해독제를 마시지 않으면 발작하게 만드는 거야……',
        );
        await coffee.say_and_wait('……진짜 무겁네요.');
        const coffee_check =
          era.get('cflag:25:모집상태') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            '미리 경고해두는데, 제 ',
            c_call_m,
            '에게 그런 짓 하면 가만 안 둘 줄 알아요.',
          ]);
        }
        era.println();
        await era.printAndWait([
          '등골이 서늘해지는 대화를 들은 ',
          me.get_colored_name(),
          '은(는) 서둘러 문을 밀고 들어갔다.',
        ]);

        era.printButton('「미안해! 늦잠을 잤어!」', 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          '! ……도대체 뭘 한 건가? 왜 이렇게 늦어, 실험은 이미 한참 전부터 시작됐다고!',
        ]);
        era.println();
        await era.printAndWait([
          '엄격한 척 얼굴을 굳히고 있었지만, ',
          tachyon.get_colored_name(),
          '의 등 뒤에서 미친 듯이 흔들리는 꼬리는 도저히 숨길 수 없었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' 자신도 눈치챘는지 꼬리를 몇 번 억누르려 애쓰더니, 결국 포기하고 아무 일도 없었다는 듯 다시 잔소리를 시작했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '어제는 레이스를 통해 한계 초월의 가능성을 증명했을 뿐이야. 다음 목표는 상시화다!',
        );
        await tachyon.say_and_wait(
          '단 한 번의 돌파는 우연일 수 있고, 두 번은 요행일 수 있어. 그것을 상시 유지할 수 있어야만 진정한 돌파라고 할 수 있는 법이지!',
        );
        era.println();
        await tachyon.say_and_wait(
          '……그러니까, 빨리 실험복으로 갈아입고 와서 도와주게! ……알았나?',
        );
        era.println();
        await era.printAndWait([
          '엄한 척 허세를 부리면서도 불안한 눈빛으로 ',
          me.get_colored_name(),
          '을(를) 바라보는 ',
          tachyon.get_colored_name(),
          '의 모습.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 참지 못하고 다가가 ',
          tachyon.sex,
          '를 꽉 껴안았다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['! ', callname, '……!']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 ',
          tachyon.sex,
          '의 실험동물은, 3년이 지난 뒤에도 두 번째, 세 번째 3년을 맞이하며 영원히 같이 있을 것이다……',
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait(['……적당히 좀 하세요. ', c_call_m, ' 이리 오세요.']);
          era.println();
          await era.printAndWait([
            '두 사람의 쟁탈전 속에서, ',
            me.get_colored_name(),
            '은(는) 쓴웃음을 지으며 다시 시끌벅적한 일상으로 돌아갔다.',
          ]);
        } else {
          await coffee.say_and_wait('……제 앞에서 닭살 돋는 짓 좀 그만해 줄래요?');
          era.println();
          await era.printAndWait(
            '방 안에 염장질의 습격을 견디고 있는 또 다른 동거인이 있다는 사실을 잠시 잊고 있었다.',
          );
        }
      }
    }
  };
};