const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 31] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치') ||
      (edu_marks.plan_b && era.get('cflag:25:위치') !== era.get('cflag:0:위치'))
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (edu_marks.plan_b) {
      const t_call_c = sys_get_colored_callname(32, 25);
      await print_event_name('월광', tachyon);
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' A',
        '타키온 선배 말이야, 최근…… 아무래도 심야에 계속 백사장에서 달리고 있는 모양이야.',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' B',
        '그다지 큰일은 아닐지도 모르겠지만, 왠지 타키온 선배, 달리는 게 무척…… 힘겨워 보여.',
      );
      await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + ' C', [
        '나름 타키온 선배에게 도움도 많이 받았으니까…… 타키온 선배, 정말 괜찮은 걸까?',
      ]);
      era.println();
      await era.printAndWait([
        '많은 ',
        tachyon.get_uma_sex_title(),
        '의 걱정 덕분에, ',
        me.get_colored_name(),
        '은(는) 심야에 트레이너 숙소를 나와 합숙소의 백사장으로 향했다.',
      ]);
      await era.printAndWait([
        '다른 ',
        tachyon.get_uma_sex_title(),
        '의 조언이 있고 나서야 겨우 담당 ',
        tachyon.get_uma_sex_title(),
        '의 이상을 눈치채다니, 정말로…… 트레이너 실격이다.',
      ]);
      await era.printAndWait([
        '그건 그렇고, ',
        tachyon.sex,
        '의 도움에 대한 감사인가…… 비록 ',
        tachyon.sex,
        ' 본인은 그저 실험으로 여겼을지라도, ',
        tachyon.sex,
        '의 약물 덕분에 혜택을 본 이들은 확실히 존재하고 있었다.',
      ]);
      await era.printAndWait([
        '어떤 이유에서인지, 어떤 감정인지는 알 수 없으나 ',
        me.get_colored_name(),
        '은(는) 묘한 감상에 젖었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('하아…… 하아…… 하아……');
      era.println();
      await era.printAndWait([
        '백사장 근처에 도달한 ',
        me.get_colored_name(),
        '의 눈앞에는, 합숙 기간 중에도 끊임없이 ',
        me.get_colored_name(),
        '과(와) 함께 ',
        get_chara_talk(25).get_colored_name(),
        '의 주법 개선 연구를 계속해 온 ',
        tachyon.get_colored_name(),
        '이 있었다.',
      ]);
      await era.printAndWait([
        '달리기에 열중한 ',
        tachyon.sex,
        '는 밤의 어둠에 가려진 채 ',
        me.get_colored_name(),
        '이(가) 온 것을 알아차리지 못했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '역시 정적을 깨뜨리지 않고 조용히 그 모습을 지켜보았다.',
      ]);
      era.println();
      await era.printAndWait(['백사장 위의 ', tachyon.sex, ', 그 주법은 완벽하지 않았다.']);
      await era.printAndWait([
        '사츠키상 때는 말할 것도 없고, 아주 오래전 ',
        tachyon.get_colored_name(),
        '의 주법과 비교해 보아도 무척이나 부자연스럽게 느껴졌다.',
      ]);
      await era.printAndWait([
        '다리의 내구성을 고려해 마음껏 달리지 못하는 기색도 있었지만, 애초에 그 주법 자체가 ',
        tachyon.get_colored_name(),
        '이 평소 잘 구사하던 것이 아니었다.',
      ]);
      await era.printAndWait([
        '그럼에도 불구하고 달빛 아래 비친 ',
        tachyon.sex,
        '의 모습은 ',
        me.get_colored_name(),
        '의 시선을 강렬하게 잡아끌었다.',
      ]);
      await era.printAndWait([
        '완벽함과는 무관하게, ',
        tachyon.get_colored_name(),
        '의 주법 그 자체가 ',
        me.get_colored_name(),
        '의 눈길을 빼앗았다. 마치 빛처럼, 제아무리 희미할지라도 그것은 사람을 열광케 하여 뒤쫓게 만드는 빛이었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신도 모르게 그 빛을 붙잡으려 한 걸음 내디뎠다……',
      ]);
      era.println();
      await tachyon.say_and_wait(['누구지? ……아아, ', callname, '인가.']);
      era.println();
      await era.printAndWait([
        '달리기를 멈춘 ',
        tachyon.sex,
        '는 금세 주변의 기척을 감지하고 말을 걸어왔다.',
      ]);
      era.printButton('「이 밤중에 뭘 하고 있는 거야?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '아무것도 아니야. 그저 ',
        t_call_c,
        '을 위해 새로운 주법을 실험하고 있었을 뿐이지……',
      ]);
      await tachyon.say_and_wait([
        '방금 전에도 대충 보았겠지? 내가 달리는 모습은 영 어설프기 짝이 없지만, 만약 ',
        t_call_c,
        '의 주법을 이 방향으로 개선할 수만 있다면……',
      ]);
      era.println();
      await era.printAndWait('나오려던 말이 멈췄다.');
      await era.printAndWait([
        '틀림없다. 모든 것은 ',
        tachyon.get_colored_name(),
        '의 플랜 B를 위해서다.',
      ]);
      await era.printAndWait([
        '동시에, 그것은 ',
        get_chara_talk(25).get_colored_name(),
        '를 정점의 높이로 이끌기 위함이기도 했다.',
      ]);
      if (relation <= 225) {
        await era.printAndWait('이것은 처음에 이미 내린 결정이었다.');
        await era.printAndWait('합리성 측면에서 보아도 이것이 가장 이성적인 선택이지 않은가?');
        await era.printAndWait('그러니까.');
      } else {
        await era.printAndWait('이것은 처음에 이미 내린 결정이었다.');
        await era.printAndWait([
          '결국, ',
          me.get_colored_name(),
          '은(는) 더 이상 ',
          tachyon.get_colored_name(),
          '이 그런 고통을 겪는 모습을 보고 싶지 않았던 것뿐이지 않은가?',
        ]);
        await era.printAndWait('그러니까.');
      }
      era.printButton('「……그래도, 휴식은 잊지 마.」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '알고 있어. 자네도 마찬가지야. 이렇게 늦게까지 깨어 있으면 내일 ',
        t_call_c,
        '의 트레이닝은 어쩌려고 그러나?',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그저 아무런 영향가 없는 작위적인 걱정만을 남긴 채 백사장을 떠났다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(32, [10], 0);
    } else {
      await print_event_name('여름의 데이터 채집', tachyon);
      await tachyon.say_and_wait('하아…… 하아…… 하아……');
      era.println();
      await era.printAndWait([
        '합숙 기간 동안 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '은 국화상을 향한 특훈에 매진했다. 적절한 휴식을 병행한 훈련 덕분에 그 성과는 무척 훌륭했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('데이터는…… 어때?');

      era.printButton(
        '「이미 주법을 바꾸기 전의 속도까지 회복했어…… 이대로라면 국화상은 틀림없어!」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 다리 부담을 최소화하기 위해 개량한 주법은 이제 거의 완성에 이르렀다. 두 사람의 노력이라면 국화상은 분명……',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) ',
        tachyon.get_colored_name(),
        '의 미래를 그리며 상상에 빠져 있을 때, 숨을 고른 ',
        tachyon.get_colored_name(),
        '이 입을 열었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('좋아, 내 트레이닝은 끝났어. 다음은 자네 차례야.');
      era.println();
      await era.printAndWait('…………올 것이 왔군.');
      await era.printAndWait([
        '소위 말하는 휴식 병행 훈련이란, 구체적으로 말하자면 ',
        tachyon.get_colored_name(),
        '이 훈련할 때 ',
        me.get_colored_name(),
        '이(가) 쉬고, ',
        tachyon.get_colored_name(),
        '이 쉴 때는…… 당연히 ',
        me.get_colored_name(),
        '의 순서가 된다는 의미였다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 조제한 약의 도움으로, 현재의 ',
        me.get_colored_name(),
        '은(는) 단거리 폭발력에 있어서는 이미 오픈급 ',
        tachyon.get_uma_sex_title(),
        '에게도 뒤지지 않을 정도가 되어 있었다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        me.get_colored_name(),
        '을(를) 통한 약물 실험 데이터를 측정하는 것 또한 ',
        tachyon.get_colored_name(),
        '이 합숙 기간 동안 성실히 트레이닝에 임하기 위한 전제 조건 중 하나였다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오늘은 특별히 자네가 직접 고르게 해주지, ',
        callname,
        '. 파워 트레이닝과 스태미나 트레이닝 중 어느 쪽을 선택하겠나?',
      ]);
      era.println();
      await era.printAndWait('음…… 어느 쪽이든 비슷해 보이지만.');
      era.printButton('파워 트레이닝 (파워 & 근성 +10)', 1);
      era.printButton('스태미나 트레이닝 (스태미나 & 파워 +10)', 2);
      era.printButton('스피드 트레이닝 (스피드 & 지능 +10)', 3);
      switch (await era.input()) {
        case 1:
          await era.printAndWait('이러쿵저러쿵해서.');
          await era.printAndWait([
            '결국 ',
            me.get_colored_name(),
            '은(는) 사람 키의 3배나 되는 거대한 타이어를 끌며 백사장을 걸었다.',
          ]);
          await era.printAndWait(
            '대체 어떤 차에 쓰이는 타이어인지, 옆으로 뉘어 놓아도 사람 키의 3배는 족히 되어 보였다.',
          );
          await era.printAndWait([
            '그동안 ',
            tachyon.get_colored_name(),
            '은(는) 타이어 위에 앉아 ',
            me.get_colored_name(),
            '에게 응원을 보내주었다……',
          ]);
          era.println();
          await tachyon.say_and_wait(['좀 더 빨리 걷게나, ', callname, '.']);
          await tachyon.say_and_wait('왜 이렇게 느린 거야? 속도를 내라고, 속도를!');
          await tachyon.say_and_wait('정 안 되면 옷이라도 찢고 헐크로 변신해 보지 그래?');
          era.println();
          await era.printAndWait('응원…… 인가?');
          era.println();
          await era.printAndWait([
            '응원이라기보다는 인내심 테스트에 가까운 외침 속에서, ',
            me.get_colored_name(),
            '은(는) 오늘의 훈련을 마쳤다.',
          ]);
          flags.wait_flag = get_attr_and_print_in_event(
            32,
            [0, 0, 10, 10, 0],
            0,
          );
          flags.wait_flag = get_attr_and_print_in_event(
            0,
            [0, 0, 10, 10, 0],
            0,
            JSON.parse('{"체력":-200}'),
          );
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait('들어가게.');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 경악한 표정으로 ',
            tachyon.get_colored_name(),
            '을 바라보았다. 훈련이 힘들어서가 아니라……',
          ]);
          era.printButton('「……그냥 들어가서 수영만 하면 돼?」', 1);
          await era.input();
          await tachyon.say_and_wait('음음, 평소처럼 정해진 바퀴 수만큼 돌고 오면 돼~~.');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 표정을 보니 분명 꿍꿍이가 있는 듯했지만, 도무지 짐작이 가지 않았다……',
          ]);
          await era.printAndWait([
            '아니, 오히려 ',
            tachyon.sex,
            '라면 무슨 짓이든 할 가능성이 너무 많아서, 대체 이번엔 어떤 수작을 부린 건지 알 수가 없었다.',
          ]);
          await era.printAndWait([
            '여기서 멍하니 있어 봤자 소용없기에 ',
            me.get_colored_name(),
            '은(는) 일단 물속으로 뛰어들었다.',
          ]);
          era.println();
          await era.printAndWait('앗 차가워!');
          await era.printAndWait('바닷물의 온도가 평소와는 확연히 다를 정도로 차가웠다. 굳이 비유하자면……');
          await era.printAndWait([
            '이전에 ',
            tachyon.get_colored_name(),
            '이 내한 약물 테스트를 한다며 억지로 밀어 넣었던 얼음물 수조 같았다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 황급히 주변을 둘러보았으나, 다른 학생들은 여느 때처럼 즐겁게 바다에서 놀고 있었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '흐흥, 지금 무척 춥지? 그게 바로 들어가기 전에 마시게 한 약의 효과야. 지각 능력을 증폭시키는 약이지. 그래, 대마O에 나올 법한 그런 종류의 약이야!',
          );
          era.println();
          await era.printAndWait('대마O 이라 하지 마!?');
          await era.printAndWait(
            '하지만 이상하게도 체감 온도가 마치 한겨울의 얼음 목욕을 하는 듯한 것 외에는 별다른 감각의 변화는 없었다. 대마O이었다면 이 상황에서 분명……',
          );
          era.println();
          await tachyon.say_and_wait(
            '물론 아직 미완성이라 추위에 대한 신경의 민감도만 높여둔 상태야. 자, 그럼 정해진 목표 거리만큼 열심히 헤엄쳐 보게나.',
          );
          era.println();
          await era.printAndWait('너무 추워……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 지시가 없었더라도 추위를 이기기 위해 ',
            me.get_colored_name(),
            '은(는) 필사적으로 몸을 움직여 열을 내야 했고, 마침내 수영 목표를 완수했다.',
          ]);
          era.drawLine({ content: '여담'});
          await tachyon.say_and_wait([
            '……단순히 신경 민감도만 높였을 뿐인데 왜 감기에 걸리는 건가, ',
            callname,
            '.',
          ]);
          era.println();
          await me.say_and_wait('……그건 내가 아니라 너한테 물어야 할 질문 아니야?');
          flags.wait_flag = get_attr_and_print_in_event(
            32,
            [0, 10, 10, 0, 0],
            0,
          );
          flags.wait_flag = get_attr_and_print_in_event(
            0,
            [0, 10, 10, 0, 0],
            0,
            JSON.parse('{"체력":-200}'),
          );
          break;
        case 3:
          await era.printAndWait('어느 쪽을 골라도 좋지 않은 예감이 들어……');
          await era.printAndWait(['기지를 발휘한 ', me.get_colored_name(), '은(는) 선택했다.']);
          era.printButton('「……갑자기 숙소 가스 불을 안 끈 게 생각났어, 먼저 실례!」', 1);
          await era.input();
          await era.printAndWait('삼십육계 중 줄행랑이 으뜸이라지!');
          era.println();
          await tachyon.say_and_wait([
            '호오, 나랑 레이스를 하겠다는 건가? 최근 체력이 좀 붙었다고 제법 기세등등해졌군, ',
            callname,
            '.',
          ]);
          await tachyon.say_and_wait(
            '좋아, 10초 먼저 가보게나. 만약 나한테 따라잡히면 오늘 마셔야 할 약은 두 배가 될 테니.',
          );
          await tachyon.say_and_wait('자, 나를 좀 더 즐겁게 해달라고, 아하하하하하!');
          era.println();
          await era.printAndWait([
            '10초의 유예가 끝나자마자 ',
            tachyon.get_colored_name(),
            '의 발소리가 순식간에 귓가까지 다가왔다.',
          ]);
          await era.printAndWait(
            '빨리, 더 빨리! 트레이너 양성 학원에서 이럴 땐 어떻게 하라고 가르쳤는지 잘 생각해 보자.',
          );
          await me.say_and_wait(
            ['장애물을 찾아서 ', tachyon.get_uma_sex_title(), '의 움직임을 방해해야 해!'],
            true,
          );
          await era.printAndWait(
            '좋아, 어서……… 백사장에 장애물이 어디 있어어어어어!!!',
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            '쯧쯧, 너무 느리군, ',
            callname,
            '. 자, 그럼 오늘치는 두 개…… 아니, 한 번 더 하지. 똑같이 10초 줄게. 잡히면 약을 2배로 늘리지…… 계속하자고~~.',
          ]);
          await me.say_and_wait('또 한다고!?');
          await era.printAndWait([
            '결국 ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '에게 네 번이나 잡혔다 놓아지기를 반복하며, 16개의 약물을 들이켜야 했다.',
          ]);
          flags.wait_flag = get_attr_and_print_in_event(
            32,
            [10, 0, 0, 0, 10],
            0,
          );
          flags.wait_flag = get_attr_and_print_in_event(
            0,
            [10, 0, 0, 0, 10],
            0,
            JSON.parse('{"체력":-400}'),
          );
          break;
      }
    }
  };

  handlers[47 + 40] = async (tachyon, me, callname) => {
    await print_event_name('다른 가능성', tachyon);
    await era.printAndWait([
      '그날 밤, ',
      me.get_colored_name(),
      '은(는) 꿈을 꾸었다.',
    ]);
    await era.printAndWait([
      '국화상에서 승리한 ',
      tachyon.sex,
      '가 경기장에 서서 하얀 가운을 두른 손을 흔들고 있었다.',
    ]);
    await era.printAndWait(['모든 이들이 ', tachyon.sex, '의 이름을 연호하고 있었다.']);
    await era.printAndWait([
      tachyon.sex,
      '이 고개를 돌려 관객석의 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait('하지만 그 얼굴은 칠흑 같은 어둠에 싸여 있었다.');
    await say_by_passer_by_and_wait('관중들', '⬛⬛⬛⬛! ⬛⬛⬛⬛! ⬛⬛⬛⬛!');
    await era.printAndWait(['주변의 관중들이 ', tachyon.sex, '의 이름을 외치고 있었다.']);
    await era.printAndWait([tachyon.sex, '의 이름은 무엇이었지?']);
    await era.printAndWait([tachyon.sex, '……는 누구지?']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 꿈에서 깨어나 한동안 평정을 되찾지 못했다.',
    ]);
    await era.printAndWait([
      '꿈이 너무나도 생생하여 ',
      me.get_colored_name(),
      '은(는) 가슴이 두근거리는 것을 멈출 수 없었다.',
    ]);
    await era.printAndWait([
      '남은 밤 동안 ',
      me.get_colored_name(),
      '은(는) 아침이 밝을 때까지 잠을 이루지 못하고 뒤척였다.',
    ]);
    era.println();
    await era.printAndWait([
      '하늘이 겨우 밝아올 무렵, ',
      me.get_colored_name(),
      '은(는) 서둘러 트레이너 숙소를 나섰다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '가 이미 언론에 출주 정지를 발표했다는 것을 알고 있었음에도.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '가 절대로 자신 몰래 레이스에 나갈 리 없다는 것을 알고 있었음에도.',
    ]);
    await era.printAndWait('여전히 걱정되고, 여전히 두려웠다.');
    await era.printAndWait([
      '직접 ',
      tachyon.sex,
      '를 눈으로 확인해야만 꿈속의 일이 현실이 아니라는 것을 확신할 수 있을 것 같았다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['이런, ', callname, '? 오늘은 일찍 왔군.']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 실험실로 뛰어 들어갔을 때 보인 것은, 이른 아침부터 여유롭게 홍차를 마시고 있는 ',
      tachyon.get_colored_name(),
      '이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['하지만 오늘은 국화상이니까, 긴장하는 것도 당연하겠지.']);
    if (sys_reg_race(25).curr.race === race_enum.kiku_sho) {
      await tachyon.say_and_wait(
        '나중에 같이 출발하세나, 후후…… 내가 직접 뛰는 게 아니라 관객석에서 다른 이가 달리는 걸 지켜보는 건 처음이군.',
      );
    } else {
      await tachyon.say_and_wait([
        '자네, 힘내라고. 뭐, 애초에 ',
        sys_get_colored_callname(32, 25),
        '은 출주할 생각이 없으니, 나는 여기서 생중계나 보고 있겠어. 잘 해보라고.',
      ]);
    }
    era.println();
    await tachyon.say_and_wait('……그게 아니라면, 달리 하고 싶은 말이라도 있나?');
    era.println();
    await era.printAndWait('이토록 갑작스럽게 실험실에 들이닥쳐 놓고서.');
    await era.printAndWait('악몽의 내용을 쏟아내고 싶었음에도.');
    await era.printAndWait([
      tachyon.sex,
      '를 마주한 순간, 모든 말이 목구멍 뒤로 넘어갔다.',
    ]);
    era.println();
    await era.printAndWait('뭐라고 말해야 할까?');
    await era.printAndWait([
      '내가 타키온이 국화상에서 이기는 꿈을 꾸었다고?',
    ]);
    await era.printAndWait([
      '꿈속의 타키온은 얼굴도, 이름도 없었다고?',
    ]);
    await era.printAndWait('자신이 후회하고 있다고……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 세차게 고개를 저으며 아무 일도 아니라고 대답한 뒤, 황급히 실험실을 빠져나왔다.',
    ]);
    await era.printAndWait('무슨 할 말이 있겠는가.');
    await era.printAndWait('무슨 말을 할 수 있겠는가.');
    await era.printAndWait(
      '이제 와서 자신이 내린 결정을 후회하다니, 농담도 정도가 있다.',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 오늘 있을 국화상을 준비하기 위해 실험실을 떠났다.',
    ]);
  };

  handlers[47 + 41] = async (tachyon, me, callname, flags) => {
    await print_event_name('두 번째 연도 심사', tachyon);
    await tachyon.say_and_wait('그러면…… 이제 진지한 이야기를 좀 해볼까.');
    era.println();
    await era.printAndWait(['때는 국화상이 끝난 후.']);
    await era.printAndWait([
      '장소는 ',
      tachyon.get_colored_name(),
      '의 실험실이었다.',
    ]);
    era.println();
    await era.printAndWait([tachyon.sex, '는 엄숙하게 커튼을 치고 조명을 밝혔다.']);
    await era.printAndWait([me.get_colored_name(), '은(는) 긴장하며 마른침을 삼켰다.']);
    await era.printAndWait([
      '이토록 긴박한 분위기라니…… ',
      tachyon.get_colored_name(),
      '의 성격으로 미루어 보건대.',
    ]);
    await era.printAndWait(
      '설마 실험 실패인가? 위험한 실험 동물이 탈출했나? 아니면 위험한 약물을 수원지에 살포하기라도 한 건가? 그것도 아니면……',
    );
    era.printButton('「알겠어, 내가 책임지고 잡아올게.」', 1);
    era.printButton('「알겠어, 죄는 내가 뒤집어쓸게.」', 2);
    era.printButton('「알겠어, 자수하자, 타키온.」', 3);
    await era.input();
    await tachyon.say_and_wait(
      '……아니, 자네 대체 무슨 뚱딴지같은 소리를 하는 건가. 도무지 이해할 수가 없군. 내가 하고 싶은 말은, 클래식 3관도 끝났으니 슬슬 앞으로의 목표에 대해 의논하자는 거야.',
    );
    await era.printAndWait('…………에!?');
    await era.printAndWait([
      '예상보다 훨씬 건전하고 진지한 주제에 ',
      me.get_colored_name(),
      '은(는) 할 말을 잃고 경악했다.',
    ]);
    era.printButton('「목표라니……」', 1);
    era.printButton('「아아, 연구 목표를 말하는 거구나.」', 2);
    await era.input();
    await era.printAndWait([
      '분명 그거겠지. 실험 말이다. 확실히 ',
      tachyon.get_colored_name(),
      '의 다리는 국화상 이후 이전보다 훨씬 안정된 것처럼 느껴졌고, 적어도 당분간은 부상을 크게 걱정하지 않아도 될 상태였으니까.',
    ]);
    await era.printAndWait(
      '그러니 다음 단계의 실험으로 넘어가겠다는 소리겠지. 틀림없어. 그게 아니라면 마치……',
    );
    era.println();
    await tachyon.say_and_wait(
      '실험의 목표…… 물론 그것도 포함되지만, 지금 내가 말하고자 하는 건 레이스 목표야. 처음엔 3관까지라고 약속했지만, 이제 3관이 끝났으니 다음 단계로 나아갈 때가 되었지 않나.',
    );
    era.println();
    await era.printAndWait('에에에에!!!!????');
    await era.printAndWait([
      '이번에야말로 ',
      me.get_colored_name(),
      '은(는) 진심으로 경악했고, 그 놀라움은 거의 《절규》에 가까운 포즈로 나타났다.',
    ]);
    await era.printAndWait([
      '그 모습에 눈앞의 ',
      tachyon.get_colored_name(),
      '도 참지 못하고 웃음을 터뜨렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '후후…… 내가 먼저 레이스 이야기를 꺼내는 게 그렇게나 놀랄 일인가?',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 태도를 보며, 예전에는 레이스를 그저 실험 검증의 부속물로만 여겼던 ',
      tachyon.get_colored_name(),
      '을 떠올렸다.',
    ]);
    era.printButton('「……타키온…… 변했구나.」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '따지고 보면 영원히 변하지 않는 건 없지. 연구에 있어서 독선과 아집은 가장 경계해야 할 것이기도 하고……',
    );
    await tachyon.say_and_wait(
      '뭐, 변화에도 좋은 쪽과 나쁜 쪽이 있겠지만, 적어도 지금의 나는 현재의 변화가 무척 마음에 들어. 이 점은 자네에게 감사해야겠군.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 보기 드물게 솔직한 심정을 고백하자, ',
      me.get_colored_name(),
      '은(는) 잠시 당황했다.',
    ]);
    await era.printAndWait([
      '오늘 하루는 ',
      me.get_colored_name(),
      '에게도, ',
      tachyon.get_colored_name(),
      '에게도 너무나 많은 일이 일어나고 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '정말로, 그 당시의 일시적인 충동만으로 여기까지 오게 될 줄은 몰랐어……',
    );
    await tachyon.say_and_wait(
      '나조차 조금 두려워질 정도야. 이른바 가능성이라는 건 마치 독약 같아서, 사람으로 하여금 이성을 잊게 만드니까……',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 자신의 다리를 바라보며 몸을 가늘게 떨었다.',
    ]);
    await era.printAndWait([tachyon.sex, '가 무슨 뜻으로 하는 말인지는 잘 몰랐지만, 그래도.']);
    era.printButton('「타키온, 계속해서 한계에 도전하고 싶어?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '계속? 아니, ',
      callname,
      '. 나는 단 한 번도 한계에 도전하는 길에서 멈춰 선 적이 없어.',
    ]);
    await tachyon.say_and_wait([
      '국화상은 그저 시작점일 뿐이야. 국화상 이후에야말로 진정으로 한계를 향해 나아가는 여정이 시작되는 거라고!',
    ]);
    await tachyon.say_and_wait([
      '중거리 최강의 오사카배, 모든 현역 ',
      tachyon.get_uma_sex_title(),
      '중 상반기와 하반기 최강을 가리는 타카라즈카 기념과 아리마 기념……',
    ]);
    await tachyon.say_and_wait('뛰어넘어야 할 목표와 도달해야 할 정점이 도처에 널려 있지 않나?');
    era.println();
    await era.printAndWait('그러니까.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '의 눈을 똑바로 응시했다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '3관이 끝난 후의 세계에서도 나와 함께 걸어가 주게, ',
      callname,
      '.',
    ]);
    await tachyon.say_and_wait('보답으로 자네에게 훨씬 더 넓은 세상을 보여주지.');
    era.printButton('「응.」', 1);
    era.printButton('「말이라고 해? 기꺼이 동참할게.」', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '의 클래식 전선이 막을 내렸다.',
    ]);
    await era.printAndWait('시니어 전선이 곧 시작된다!');
    flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 0, 10], 0);
  };
};