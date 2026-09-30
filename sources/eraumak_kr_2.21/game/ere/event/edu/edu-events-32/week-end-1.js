const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (tachyon, me) => {
    await print_event_name('실험의 시작', tachyon);
    await era.printAndWait([
      '이곳은 중앙 트레센 학원, 오늘도 ',
      me.get_colored_name(),
      '의 꿈이 이곳에서 쑥쑥 자라나고 있었다.',
    ]);
    await tachyon.say_and_wait('트레이너 군, 입 벌리게.');
    era.println();
    await era.printAndWait('쑥쑥 자라나고 있었다.');
    era.println();
    await tachyon.say_and_wait('트레이너 군, 가서 한 바퀴 뛰고 속도를 측정해 보게.');
    era.println();
    await era.printAndWait('쑥쑥 자라나고...');
    era.println();
    await tachyon.say_and_wait('트레이너 군, 약을 머금고 있게. 삼키라고 할 때까지 삼키면 안 되네.');
    era.println();
    await era.printAndWait('자라나고 있는 건가...?');
    era.println();
    await era.printAndWait([
      '이른 아침부터 실험실로 불려 나와 오전 내내 실험에 동원된 후, ',
      me.get_colored_name(),
      '의 내면 속 의구심은 이미 정점에 달해 있었다.',
    ]);
    era.println();
    await me.say_and_wait(
      ['지금 이 시간은 수업 시간일 텐데, ', tachyon.sex, '는 수업에 안 가도 되는 건가?'],
      true,
    );
    await me.say_and_wait('나도 지금 이 시간에는 서류 업무를 하고 있어야 하는 거 아닐까?', true);
    await me.say_and_wait(
      '왜 내가 여기서 정체불명의 약을 먹으며 온갖 실험을 당하고 있는 거지?',
      true,
    );
    era.println();
    await tachyon.say_and_wait('트레이너 군? 뭘 멍하니 있는 건가?');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 의아한 듯 ',
      me.get_colored_name(),
      '을(를) 바라보았다. 그 얼굴에는 짜증이 가득했다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '는 ',
      me.get_colored_name(),
      '이(가) 며칠 전 훈련장에서 보았던 ',
      tachyon.get_uma_sex_title(),
      '였다.',
    ]);
    await era.printAndWait([
      '당시의 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 빛과도 같은 속도와 주법에 매료되어, 충동적으로 ',
      tachyon.sex,
      '와 계약을 맺었다.',
    ]);
    await era.printAndWait('그리고 충동적으로 여러 가지 이상한 계약서에도 서명하고 말았다.');
    await era.printAndWait('아마 그중에는 시약 실험 같은 것도 포함되어 있었던 모양이다.');
    await era.printAndWait(
      '그러고 보니, 당시의 자신은 어째서 그렇게 아무런 의심도 없이 서명했던 것일까.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득 당시 자신의 정신 상태를 의심하기 시작했다.',
    ]);
    era.println();
    await tachyon.say_and_wait('............');
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 문득 정신을 차렸다.']);
    await era.printAndWait([
      '방금 회상에 너무 많은 시간을 쓴 모양이다. ',
      tachyon.get_colored_name(),
      '이 방금 자신을 불렀는데도 대답을 하지 못했다.',
    ]);
    await era.printAndWait('망했다, 혼나는 거 아닐까.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 어른스럽지 못한 태도로 벌벌 떨며 담당 ',
      tachyon.get_uma_sex_title(),
      '를 올려다보았다. 마침 ',
      tachyon.sex,
      '가 ',
      me.get_colored_name(),
      '을(를) 빤히 들여다보는 눈과 마주쳤다.',
    ]);
    era.println();
    await tachyon.say_and_wait('............');
    era.println();
    await era.printAndWait([
      '그 암적색의 눈동자가 마치 블라인드처럼 ',
      me.get_colored_name(),
      '의 시선을 빨아들였다.',
    ]);
    await era.printAndWait('—————아니, 정확히 말하자면 빨아들이는 것이 아니었다.');
    await era.printAndWait(
      '그 시선은 그저 그곳에 조용히 존재하고 있었지만, 그 자체로 마치 창문과도 같았다.',
    );
    await era.printAndWait('사람으로 하여금 그 창문 너머의 모든 것을 파헤치고 싶게 만들었다.');
    await era.printAndWait([
      '사람을 끌어들이는 것은 ',
      tachyon.sex,
      '의 시선이 아니라, 자신의 호기심이었다.',
    ]);
    era.println();
    await era.printAndWait([tachyon.sex, '의 한계는 어디까지일까?']);
    await era.printAndWait([tachyon.sex, '의 머릿속에는 대체 무슨 생각이 들어있을까?']);
    await era.printAndWait([tachyon.sex, '의 미래는 얼마나 찬란하게 빛날 수 있을까?']);
    await era.printAndWait([tachyon.sex, '가 좋아하는 타입은?']);
    await era.printAndWait([tachyon.sex, '가 입고 있는 속옷은 무슨 색일까?']);
    await era.printAndWait('콘돔파인가, 아니면 피밈약파인가?');
    await era.printAndWait('성감대는 귀일까, 아니면 가슴일까?');
    await era.printAndWait('침대 위에서는 어떤 체위를 선호할까?');
    era.println();
    await era.printAndWait('모든 것, 모든 것을.');
    await era.printAndWait([
      tachyon.sex,
      '의 모든 것을 ',
      me.get_colored_name(),
      '은(는) 알고 싶어졌다.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 ',
      me.get_colored_name(),
      '의 눈을 바라보더니, 문득 미소 지었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('그런 갈구하는 듯한 눈빛이라니... 마치 소동물 같군 그래.');
    era.println();
    await era.printAndWait('소동물? 내가?');
    await era.printAndWait([me.get_colored_name(), '은(는) 내심 수치심을 느꼈다.']);
    await era.printAndWait('명색이 성인인 자신이 소동물 취급을 당하다니.');
    era.println();
    await tachyon.say_and_wait('그래... 소동물, 마치... 실험 동물 같아.');
    era.println();
    await era.printAndWait([tachyon.sex, '는 갑자기 깊은 생각에 빠져 무엇인가를 고민하기 시작했다.']);
    await era.printAndWait('그러더니 문득 고개를 끄덕였다.');
    era.println();
    await tachyon.say_and_wait('...음, 결정했네.');
    era.println();
    await era.printAndWait([tachyon.sex, '가 자신만만하게 선언했다.']);
    era.println();
    await tachyon.say_and_wait(['앞으로 자네를 모르모트 군이라고 부르도록 하지!']);
    era.printButton('「모, 모르모트?」', 1);
    await era.input();
    await tachyon.say_and_wait('후후, 제법 잘 어울리지 않나? 모르모트 군... 모르모트 군...');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 입을 열어 무언가 말하려다 다시 닫았다. 뭐, 호칭이야 부르고 싶은 대로 부르라고 하지.',
    ]);
    await era.printAndWait('사람을 미치게 만드는 저 두 눈동자를 봐서라도 말이다.');
    era.set('callname:32:0', '모르모트 군');
    if (era.get('cflag:25:모집상태') !== recruit_flags.yes) {
      era.set('callname:25:0', `모르모트 ${me.get_adult_sex_title()}`);
    }
  };

  handlers[47 + 23] = async (tachyon, me, callname, flags) => {
    await print_event_name('최속? 최강?', tachyon);
    await tachyon.print_and_wait('더 빠르게.');
    await tachyon.print_and_wait('더욱더 빠르게.');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '이 밤의 훈련장을 달리고 있었다.',
    ]);
    await tachyon.print_and_wait(
      '앞뒤 가리지 않고 한계를 갈구하며, 속도의 한계를, 가능성의 한계를 쫓았다.',
    );
    await tachyon.print_and_wait('마치 광속을 초월하는 입자처럼.');
    await tachyon.print_and_wait('하지만...');
    era.println();
    await tachyon.say_and_wait('쳇... 역시, 안 되는 건가...');
    era.println();
    await tachyon.print_and_wait('만물에는 대가가 따르는 법이다.');
    await tachyon.print_and_wait([
      '듣기로는, 과거에 ',
      tachyon.get_uma_sex_title(),
      '의 한계를 돌파하려다 목숨을 대가로 치른 ',
      tachyon.get_uma_sex_title(),
      '도 있다고 했다.',
    ]);
    await tachyon.print_and_wait('만약 그런 대가를 치러서라도 정말 한계를 돌파할 수 있다면 상관없었을 것이다.');
    await tachyon.print_and_wait([
      '그러나 ',
      tachyon.get_colored_name(),
      '의 두 다리에는 그런 대가조차 허락되지 않았다.',
    ]);
    era.println();
    await tachyon.say_and_wait('무슨 짓을 해도 한계를 넘을 수 없군... 평범함에 안주할 것인가, 아니면...');
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), '이 발걸음을 멈추었다.']);
    era.println();
    await tachyon.say_and_wait('...나의 한계는, 여기까지인 건가?');
    era.println();
    await tachyon.print_and_wait([
      '일반적인 ',
      tachyon.get_uma_sex_title(),
      '의 한계가 아닌, ',
      tachyon.get_colored_name(),
      '만의 한계였다.',
    ]);
    era.println();
    await tachyon.say_and_wait('............그렇다면, 이 길이 막혔을 때는... 플랜 B를 선택해야 하는 건가.');
    era.println();
    await tachyon.print_and_wait('「최속」의 한계를 포기하고, 「최강」의 한계를 선택하는 것.');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 실패해도 좋다. 실패한 후에 자신을 대신할 사람이 있다면 그걸로 충분했다.',
    ]);
    await tachyon.print_and_wait('꿈을 타인에게 맡기는, 자기 도피와도 같은 선택이었다.');
    await tachyon.print_and_wait(
      '원래라면 이것이야말로 가장 이성적인 선택이며, 실현 가능성이 더 높은 이에게 가능성을 위탁하는 것이라고 스스로를 설득할 수 있었을 것이다.',
    );
    await tachyon.print_and_wait('하지만...');
    era.println();
    await me.used_to_say_and_wait('나는 타키온을 믿어.');
    await me.used_to_say_and_wait('타키온이라면 분명 문제없을 거야.');
    await me.used_to_say_and_wait([
      '분명 삼관은 물론이고, ',
      tachyon.get_uma_sex_title(),
      '의 가능성마저 뛰어넘을 수 있을 거야...!',
    ]);
    era.println();
    await tachyon.print_and_wait('그 사람이 자신에게 걸어주는 신뢰.');
    await tachyon.print_and_wait([
      '이것은 ',
      me.sex,
      '에 대한 배신이나 다름없는 행위인데... 정말, 괜찮은 것일까.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '...아니, 이건 배신이 아니야. 그저 ',
      me.sex,
      '에게 더 나은 선택지를 주는 것뿐이야... 그러니...',
    ]);
    era.println();
    await tachyon.print_and_wait('망설임.');
    await tachyon.print_and_wait('공포.');
    await tachyon.print_and_wait('혼란.');
    await tachyon.print_and_wait('대체 어떻게 해야 좋을까.');
    era.println();
    await tachyon.say_and_wait('...그렇게 하지.');
    era.println();
    await tachyon.print_and_wait('다음 달의 월계배.');
    await tachyon.print_and_wait(
      '학생회장이 주최하는, 학년이나 본격화 정도에 상관없이 참가할 수 있는 레이스였다.',
    );
    await tachyon.print_and_wait('...만약 참가한다면 더비 이후의 이 짧은 휴양기 동안...');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '의 두 다리는 분명 견뎌내지 못할 것이다.',
    ]);
    await tachyon.print_and_wait(
      '하지만 이런 데이터 수집 기회를 놓친다면, 나중에 또 기회가 올까?',
    );
    await tachyon.print_and_wait([
      '아니, 애초에... ',
      tachyon.get_colored_name(),
      '에게 정말 「나중」이라는 게 있기는 한 건가?',
    ]);
    await tachyon.print_and_wait('차라리... 이 레이스에서 모든 힘을 쏟아붓는 것은 어떨까?');
    era.println();
    await tachyon.print_and_wait('달빛 아래의 광자는 여전히 방황하고 있었다.');
    flags.wait_flag = get_attr_and_print_in_event(32, [20, 0, 0, 0, 0], 0);
  };

  handlers.triple_crown = async (tachyon, _, callname, flags) => {
    await print_event_name('삼관의 꿈', tachyon);
    await tachyon.say_and_wait('...여기는?');
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), '은 문득 정신이 아득해졌다.']);
    await tachyon.print_and_wait('눈앞에 나타난 것은 푸른 잔디가 깔린, 텅 빈 경기장이었다.');
    era.println();
    await tachyon.say_and_wait('...꿈인가?');
    era.println();
    await tachyon.print_and_wait([
      '기억하기로는 지금쯤 국화상이 끝나고, 방금 ',
      callname,
      '과 헤어진 뒤 피곤에 지쳐 침대에 쓰러졌을 터였다.',
    ]);
    await tachyon.print_and_wait([
      '국화상은 확실히 지금까지의 자신이 겪어온 것 중 가장 힘든 전투였다.',
    ]);
    await tachyon.print_and_wait('하지만 결국 이겨냈다.');
    await tachyon.print_and_wait(
      '그런데 눈앞에 펼쳐진 것은 그 강렬한 인상을 남겼던 경기장이 아니라...',
    );
    era.println();
    await tachyon.print_and_wait('나카야마 경기장?');
    await tachyon.print_and_wait('만약 나카야마라면, 그렇다는 건...');
    era.println();
    await tachyon.print_and_wait([
      '예상대로 뒤를 돌아 전광판을 보니, 화면에는 사츠키상의 로고가 재생되고 있었다.',
    ]);
    await tachyon.print_and_wait([
      '그러나 게시판의 성적은 이미 레이스가 끝났음을 알리고 있었다. 1위는 ',
      tachyon.get_colored_name(),
      '. 당연한 결과였다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['...사츠키상 때로 돌아온 건가?']);
    era.println();
    await tachyon.print_and_wait([
      '아무도 없는 경기장, 주자도 없는데 이미 종료된 사츠키상.',
    ]);
    await tachyon.print_and_wait(
      '아무리 논리가 통하지 않는 꿈이라지만, 이 모든 것은 지나치게 상식에서 벗어나 있었다.',
    );
    era.println();
    await tachyon.print_and_wait('그러자...');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 어느새 눈앞에 나타난 빛의 구체를 응시했다.',
    ]);
    era.println();
    await tachyon.say_and_wait('자네... 누구지? 나를 이 꿈속으로 끌어들인 게 자네인가?');
    era.println();
    await tachyon.print_and_wait([
      '꿈속으로 끌어들였다는 말은 그리 과학적인 표현은 아닐지도 모르지만, 만약... ',
      sys_get_colored_callname(32, 25),
      '의 말대로 생각한다면...',
    ]);
    await say_by_passer_by_and_wait('???', '............');
    era.println();
    await tachyon.print_and_wait('빛의 구체는 아무런 대답 없이 그저 제자리에 떠 있었다.');
    era.println();
    await tachyon.say_and_wait('...말하기 싫은 건가?');
    await tachyon.say_and_wait('그럼 내 나름대로 추측을 말해보도록 하지...');
    await tachyon.say_and_wait([
      '자네... 바로 「',
      tachyon.get_colored_name(),
      '」이로군.',
    ]);
    era.println();
    await tachyon.print_and_wait('그것을 알아채는 것은 그리 어렵지 않았다.');
    await tachyon.print_and_wait([
      '그저 ',
      sys_get_colored_callname(32, 25),
      '이 말했던 「또 다른 자신」이라는 말을 연결해 보기만 하면 될 뿐이었다.',
    ]);
    await tachyon.print_and_wait([
      '전설에 따르면... ',
      tachyon.get_uma_sex_title(),
      '는 이세계의 영혼을 몸에 깃들게 한 존재라고 한다.',
    ]);
    await tachyon.print_and_wait([
      '...뭐, 그런 설화보다는 ',
      tachyon.get_colored_name(),
      ' 자신은 생물의 자연스러운 진화 결과라고 믿고 싶지만 말이다.',
    ]);
    await tachyon.print_and_wait('하지만 만약 그 전설이 사실이라면...');
    era.println();
    await tachyon.print_and_wait('「또 다른 자신」이란, 분명 이것을 말하는 것이리라.');
    await tachyon.print_and_wait(
      '이세계에서 온 영혼, 혹은 「우마 소울(Uma Soul)」이라 불리는 존재.',
    );
    era.println();
    await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
    await tachyon.say_and_wait('뭐라고?');
    era.println();
    await tachyon.print_and_wait(
      '갑자기 빛의 구체에 파문이 일더니, 마치 온 힘을 다해 짜낸 듯한 몇 마디 소리가 들려왔다.',
    );
    await tachyon.print_and_wait([
      '저도 모르게 ',
      tachyon.get_colored_name(),
      '은 그 소리를 듣기 위해 점점 가까이 다가갔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('………!');
    era.println();
    await tachyon.print_and_wait('닿았다.');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '의 머릿속에 존재하지 않는 기억이 순식간에 흘러들어왔다.',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '그것은 저쪽 세계에서 「',
      tachyon.get_colored_name(),
      '」이라 불린 생물의 기억이었다.',
    ]);
    await tachyon.print_and_wait([
      '처음 예상했던 대로, 「',
      tachyon.get_colored_name(),
      '」의 두 다리는 사츠키상 이후 한계에 도달해 강제로 은퇴해야만 했다.',
    ]);
    await tachyon.print_and_wait([
      '그 세계에서 ',
      tachyon.get_colored_name(),
      '은 가능성의 상징으로 여겨지며 「만약의 ⬛」, 「환상의 삼관⬛」이라 불렸다.',
    ]);
    await tachyon.print_and_wait(
      '만약 그에게 기회가 주어졌다면, 분명 삼관을 따냈을 것이라는 사실을 의심하는 이는 아무도 없었다.',
    );
    await tachyon.print_and_wait('만약 다리 부상이 없었다면, 분명 역사에 이름을 남길 명⬛가 되었을 것이다.');
    await tachyon.print_and_wait(
      '만약 은퇴하지 않았다면, 동세대의 다른 ⬛들은 그에 비해 빛이 바랬을 것이다.',
    );
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 삼관에 가장 근접했던 존재였다.',
    ]);
    await tachyon.print_and_wait('하지만 만약은 결국 만약일 뿐이다.');
    await tachyon.print_and_wait('실현되지 못한 만약이란 결국 한 장의 종잇조각에 불과하다.');
    await tachyon.print_and_wait('동기들이 각자의 분야에서 빛을 발함에 따라.');
    await tachyon.print_and_wait('그러한 확신조차 의문으로 변해갔다.');
    await tachyon.print_and_wait([
      '도쿄 2400미터에서, 정말 저 ',
      get_chara_talk(94).get_colored_name(),
      '을 이길 수 있었을까?',
    ]);
    await tachyon.print_and_wait([
      '교토 3000미터에서, 정말 저 ',
      get_chara_talk(25).get_colored_name(),
      '를 이길 수 있었을까?',
    ]);
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), '은 과연 삼관인가...?']);
    era.println();
    await tachyon.print_and_wait([
      '거기까지 생각이 미치자 ',
      tachyon.get_colored_name(),
      '은 정신을 차렸다.',
    ]);
    await tachyon.print_and_wait([
      '어느덧 ',
      tachyon.sex,
      '는 자신이 구체의 말을 알아들을 수 있게 되었음을 깨달았다.',
    ]);
    await tachyon.say_as_unknown_and_wait('……고마워…… 정말 고마워……');
    await tachyon.say_and_wait('............');
    era.println();
    await tachyon.print_and_wait('만약이라는 가정을 현실로 증명해 내는 것.');
    await tachyon.print_and_wait('허무한 가능성을 실재하는 현실로 바꾸는 것.');
    era.println();
    await tachyon.print_and_wait([
      '비록 이계의 「',
      tachyon.get_colored_name(),
      '」은 성공하지 못했지만.',
    ]);
    await tachyon.print_and_wait([
      '하지만 이곳의 ',
      tachyon.get_colored_name(),
      '은 해냈다.',
    ]);
    await tachyon.print_and_wait('자신의 가능성을 증명해 보인 것이다.');
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), '은 삼관⬛이다.']);
    await tachyon.print_and_wait([tachyon.get_colored_name(), '은 삼관⬛인가?']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 삼관 ',
      tachyon.get_uma_sex_title(),
      '이다.',
    ]);
    era.println();
    await tachyon.say_and_wait('...그렇군. 그래.');
    era.println();
    await tachyon.print_and_wait('과거의 자신을 뛰어넘었다.');
    await tachyon.print_and_wait('또 다른 세계의 자신마저 뛰어넘었다.');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 새로운 한 걸음을 내디뎠다.',
    ]);
    era.println();
    await tachyon.say_and_wait('그럼, 이제 가봐야겠군.');
    await tachyon.say_as_unknown_and_wait('............?');
    era.println();
    await tachyon.print_and_wait([
      '말은 없었지만 어쩐지 ',
      tachyon.get_colored_name(),
      '에게는 구체의 의아함이 전해져 왔다.',
    ]);
    await tachyon.print_and_wait('어디로 가는 거야?');
    await tachyon.print_and_wait('꿈은 이미 이루어진 것 아니야?');
    await tachyon.print_and_wait('목표는 이미 달성한 것 아니야?');
    await tachyon.print_and_wait('이제 와서 또 뭘 더 하려는 거야?');
    era.println();
    await tachyon.say_and_wait([
      '흥, 「',
      tachyon.get_colored_name(),
      '」의 가능성이 고작 클래식 시즌의 종료까지만이라고 생각하나?',
    ]);
    await tachyon.say_and_wait('...아니, 이렇게 말하니 왠지 내 욕을 하는 것 같군... 흠흠, 다시 하지.');
    await tachyon.say_and_wait([
      '「',
      tachyon.get_colored_name(),
      '」의 가능성은 어쩌면 클래식 시즌이 끝날 때까지만일지도 모르지...',
    ]);
    await tachyon.say_and_wait([
      '아니, 기껏해야 사츠키상까지였을지도 몰라. ',
      tachyon.get_colored_name(),
      '의 가능성이란 건 말이야...',
    ]);
    await tachyon.say_and_wait('어쩌면 정말 그랬을지도 모르지.');
    era.println();
    await tachyon.print_and_wait('하지만.');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 자신을 위해 모든 것을 불태워 주었던, 눈동자 속에 광기가 서려 있던 그 사람을 떠올렸다.',
    ]);
    era.println();
    const relation = era.get('relation:32:0'),
      love = era.get('love:32');
    if (relation <= 0) {
      await tachyon.say_and_wait([
        '비록... 인격적으로는 아주 형편없어서, ',
        get_chara_talk(0).sex,
        '를 소멸시키는 게 인류에 더 공헌하는 길일 것 같은 인간이지만 말이야.',
      ]);
    } else if (love >= 75) {
      await tachyon.say_and_wait('내가 가장 사랑하고, 나를 가장 사랑해 주는 나의 연인.');
    } else if (relation <= 225) {
      await tachyon.say_and_wait('나와 함께 걷는, 뜻을 같이하는 동료.');
    } else {
      await tachyon.say_and_wait(
        '나의 모든 것을 이해하고, 목숨을 맡기는 것조차 추호의 망설임도 없을 그 사람.',
      );
    }
    era.println();
    await tachyon.print_and_wait('만약... 그 사람이 없었더라면.');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 이후에 완전히 연소되어 버렸을지도 모른다.',
    ]);
    era.println();
    await tachyon.print_and_wait('만약... 그 사람이 없었더라면.');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 이후에 자신의 한계를 깨닫고 스스로 물러났을지도 모른다.',
    ]);
    era.println();
    await tachyon.print_and_wait('만약... 그 사람이 없었더라면.');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 결코 미래를 꿈꾸지도 못했을 것이다.',
    ]);
    era.println();
    await tachyon.print_and_wait('하지만 만약이라는 가정은 의미가 없다.');
    await tachyon.print_and_wait('게다가 그 만약은 영원히 실현되지 않을 테니까.');
    await tachyon.print_and_wait('그러니...');
    era.println();
    await tachyon.say_and_wait([
      '똑똑히 지켜보게나, 「',
      tachyon.get_colored_name(),
      '」이여. 「우리」는 이미 과거를 넘어 현재에 서 있네. 이제는 미래를 개척할 시간이야!',
    ]);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 경기장 출구를 향해 걸어갔다.',
    ]);
    await tachyon.print_and_wait(['문을 나서기 전, ', tachyon.sex, '는 뒤를 한 번 돌아보았다.']);
    era.println();
    await tachyon.print_and_wait('경기장 안의 스크린에서 사츠키상의 로고는 이미 사라져 있었다.');
    await tachyon.print_and_wait('스크린 속 화면은 텅 비어 있었다.');
    await tachyon.print_and_wait('지난 레이스는 이미 끝났다.');
    await tachyon.print_and_wait(
      '다음번에 이 경기장에 열릴 레이스는 대체 어떤 레이스가 될까?',
    );
    era.println();
    await tachyon.print_and_wait('알 수 없다. 하지만 이미 약속했다, 함께 나아가기로.');
    await tachyon.print_and_wait('그러니.');
    era.println();
    await tachyon.say_and_wait('실험을 계속하도록 하지... 가능성이 도달할 수 있는 그 피안을 보기 위해서 말일세.');
    flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 20], 0);
  };

  handlers.limited_tachyon = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
  ) => {
    const t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('한계에 멈춰 선 광자', tachyon);
    era.println();
    await era.printAndWait(['국화상이 끝났다.']);
    const coffee = get_chara_talk(25);
    await era.printAndWait([
      '레이스가 끝나고 며칠 뒤, ',
      me.get_colored_name(),
      '은(는) 밤늦게까지 훈련하던 ',
      coffee.get_colored_name(),
      '를 기숙사까지 배웅하며 ',
      tachyon.sex,
      '에게 푹 쉬라고 당부한 뒤... 자신은 학원으로 돌아왔다.',
    ]);
    await era.printAndWait('본인도 푹 쉬어야 하건만... 역시 아직 끝내지 못한 일이 남아 있었다.');
    era.println();
    await era.printAndWait([
      '칠흑 같은 트레이닝실에 들어서는 순간, ',
      me.get_colored_name(),
      '은(는) 방 안에 누군가 있음을 즉시 알아챘다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 감각이 예리해서가 아니라, 그 사람이 손에 빛을 내뿜는 약병을 들고 있었기 때문이었다.',
    ]);
    era.printButton('「...타키온인가.」', 1);
    await era.input();
    await era.printAndWait([
      '지난 몇 달 동안 ',
      coffee.get_colored_name(),
      '를 돕기 위해 협조해 온 것은 역시 ',
      me.get_colored_name(),
      '이(가) 담당하는 ',
      tachyon.get_uma_sex_title(),
      '인 ',
      tachyon.get_colored_name(),
      '이였다.',
    ]);
    await era.printAndWait([tachyon.sex, '의 손에 든 약병이 달빛 아래에서 일곱 빛깔 광채를 발하고 있었다.']);
    era.println();
    await tachyon.say_and_wait(['국화상도 끝나버렸군 그래.']);
    era.printButton('「...그러게.」', 1);
    await era.input();
    await era.printAndWait('사이가 나쁜 것은 아니었다.');
    await era.printAndWait([
      '애초에 ',
      tachyon.sex,
      '는 여전히 ',
      me.get_colored_name(),
      '의 담당 ',
      tachyon.get_uma_sex_title(),
      '였고, 두 사람은 일상적으로 접촉하고 있었다.',
    ]);
    await era.printAndWait('그러니 정상적인 대화는 문제가 없었을 터였다.');
    await era.printAndWait([
      '하지만 지난 몇 달 동안 ',
      me.get_couple_title(),
      '의 대화 중에서 ',
      coffee.get_colored_name(),
      '에 관한 이야기를 뺀 적이 거의 없었다.',
    ]);
    await era.printAndWait('거기에 합숙 때 있었던 일까지 겹쳐지니...');
    await era.printAndWait([
      '순식간에 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '와 나눌만한 화젯거리를 찾을 수 없게 되었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '의 밤색 짧은 머리카락이 어두운 달빛 아래에서 마치 술처럼 진한 갈색으로 비쳤고, 암적색의 눈동자는 마치 피를 갈구하는 맹수처럼 탐욕스럽게 ',
      me.get_colored_name(),
      '을(를) 주시하고 있었다.',
    ]);
    await era.printAndWait([
      '그 순간 ',
      me.get_colored_name(),
      '은(는) 많은 것을 떠올렸다. 선배 트레이너들이 말했던 ',
      tachyon.get_uma_sex_title(),
      '와의 안전한 거리감 유지.',
    ]);
    await era.printAndWait([
      '트레이너 강좌에서 들었던 ',
      tachyon.get_uma_sex_title(),
      '의 독점욕.',
    ]);
    await era.printAndWait([
      tachyon.get_uma_sex_title(),
      ' 생리학 수업에서 배웠던 ',
      tachyon.get_uma_sex_title(),
      '의 발정기...',
    ]);
    await era.printAndWait([
      '하지만 그런 지식들은 지금 무방비하게 담당 ',
      tachyon.get_uma_sex_title(),
      '를 마주하고 있는 자신에게 아무런 도움이 되지 않았다.',
    ]);
    await era.printAndWait([
      '비록 눈앞의 ',
      tachyon.get_colored_name(),
      '이 준 약물 덕분에 어느 정도 저항할 수 있는 힘을 갖게 되었을지 모르지만.',
    ]);
    await era.printAndWait('그것은 정말 아주 미미한 힘에 불과했다.');
    await era.printAndWait([
      tachyon.sex,
      '가 천천히 다가오자, 무의식적으로 ',
      me.get_colored_name(),
      '도 조금씩 뒤로 물러났다.',
    ]);
    await era.printAndWait('그렇게 한 걸음씩 밀고 당기다 보니 결국 벽에 부딪혔다.');
    await era.printAndWait([
      tachyon.sex,
      '는 벽 구석에 몰린 ',
      me.get_colored_name(),
      '을(를) 압박하며 담담하게 한마디를 내뱉었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, ', 혹시... 나와 함께 달려주겠나?']);
    era.println();
    await era.printAndWait([
      '그것은 ',
      me.get_colored_name(),
      '의 예상 범위 안에 있었지만, ',
      me.get_colored_name(),
      '의 예상보다 훨씬 더 가혹한 부탁이었다.',
    ]);
    era.drawLine();
    await era.printAndWait('밤 아래의 훈련장, 텅 빈 주로.');
    await era.printAndWait([
      '경기장 전체에는 오직 ',
      tachyon.get_colored_name(),
      ' 한 사람만이 달리고 있었다.',
    ]);
    await era.printAndWait(['달빛 아래의 ', tachyon.sex, '는 매우 엉망인 폼으로 달리고 있었다.']);
    await era.printAndWait([
      '그것도 무리는 아니었다. 이미 거의 석 달 동안 훈련을 받지 못한 ',
      tachyon.sex,
      '였다. ',
      '아무리 천재라고 해도 시간을 거스를 수는 없었다. 근육의 퇴화, 감각의 무뎌짐 등은 레이스 우마무스메에게는 치명적인 상처나 다름없었다.',
    ]);
    await era.printAndWait([
      '지금의 ',
      tachyon.get_colored_name(),
      '이라면 어쩌면 ',
      me.get_colored_name(),
      '이(가) 이길 수도 있을 것 같았다.',
    ]);
    await era.printAndWait([
      '허황된 소리처럼 들리겠지만, 매일 약물로 단련된 몸이라면 오랫동안 단련을 쉰 ',
      tachyon.get_uma_sex_title(),
      '를 정말로 이길 수 있을지도 몰랐다.',
    ]);
    era.println();
    await era.printAndWait('그런데 어째서...');
    await era.printAndWait([me.get_colored_name(), '은(는) 괴로운 마음으로 생각했다.']);
    era.println();
    await era.printAndWait([
      '어째서, 저토록 볼품없는 달리기임에도 불구하고 ',
      me.get_colored_name(),
      '의 눈에는 처음 보았던 그날처럼 찬란하게 빛나 보이는 것일까.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '...']);
    era.println();
    await era.printAndWait([
      '어느덧 ',
      tachyon.sex,
      '는 주행을 마치고 ',
      me.get_colored_name(),
      '의 곁에 서서 어깨를 들썩이며 숨을 헐떡이고 있었다.',
    ]);
    await era.printAndWait(['예전의 ', tachyon.sex, '는 이렇지 않았다.']);
    await era.printAndWait(['아무리 다리 부상이 있다고 해도 ', tachyon.sex, '가 이렇게까지 망가질 리 없었다.']);
    await era.printAndWait([
      tachyon.sex,
      '를 이렇게 만든 것은, 마땅히 ',
      tachyon.sex,
      '의 곁에 머물며 ',
      tachyon.sex,
      '를 믿어주어야 했던 그 사람이었다.',
    ]);
    await era.printAndWait(['그것은 바로 ', me.get_colored_name(), '이었다.']);
    era.println();
    await tachyon.say_and_wait('...후후, 참 볼품없는 달리기였지?');
    era.println();
    await era.printAndWait([
      '그렇지 않다고, ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '를 위로하고 싶었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      tachyon.sex,
      '의 눈빛은 ',
      me.get_colored_name(),
      '이(가) 거짓말을 하도록 내버려 두지 않았다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      ', 자네 기억하나? 월계배 당시에 내가 했던 말을.',
    ]);
    era.println();
    await era.printAndWait('기억하느냐고? 아니, 잊을 수 있을 리가 없었다.');
    await era.printAndWait('지금까지도 그것은 한밤중에 문득 나타나 자신을 괴롭히는 악몽이었다.');
    await era.printAndWait([
      '자신의 꿈과 타인의 꿈을 모두 짊어진 ',
      tachyon.get_uma_sex_title(),
      '가 눈앞에서 시들어버린 그 순간을 말이다.',
    ]);
    await era.printAndWait(
      '그다음이 비난이든, 원망이든, 혹은 애처로운 탄식이든 간에 자신은 마주할 준비가 되어 있었다.',
    );
    era.println();
    await era.printAndWait(['하지만 ', tachyon.sex, '가 말하려던 것은 그런 것이 아니었다.']);
    era.println();
    await tachyon.say_and_wait('온 힘을 다해 달릴 수 있는 남은 몇 번의 기회... 지금, 그 기회가 왔네.');
    await tachyon.say_and_wait([
      '국화상에서 ',
      t_call_c,
      '는 이미 ',
      tachyon.sex,
      '만의 빛을 피워냈어... 그 아이는 명실상부한 「최강」의 ',
      tachyon.get_uma_sex_title(),
      '라네.',
    ]);
    era.println();
    await era.printAndWait(['가장 빠른 ', tachyon.get_uma_sex_title(), '가 사츠키상을 이긴다.']);
    await era.printAndWait(['가장 강한 ', tachyon.get_uma_sex_title(), '가 국화상을 이긴다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 아주 오래전부터 전해 내려오던 격언을 떠올렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '이어서... 연말까지, ',
      tachyon.sex,
      '는 필시 거침없이 정점에 도달하게 되겠지.',
    ]);
    era.println();
    await era.printAndWait([tachyon.sex, '는 자신이 꿈꾸던 가능성을 상상하고 있었다.']);
    await era.printAndWait('...이제는 더 이상 자신의 것이 아닌 가능성을 말이다.');
    era.println();
    await tachyon.say_and_wait([
      '하지만 ',
      tachyon.sex,
      '가 한계를 초월하기 위해서는 더욱 날카롭게 갈아낸 디딤돌이 필요해...',
    ]);
    era.println();
    await era.printAndWait(
      '분명 자신의 가능성을 잃어버렸음에도 불구하고, 눈동자 속의 광채는 여전히 눈부셨다.',
    );
    await era.printAndWait([
      '만약 이런 ',
      tachyon.sex,
      '라면 자신은 분명 승낙하고 말 것이다. 만약 ',
      tachyon.sex,
      '마저 꿈을 위해 모든 것을 불태우려 한다면, 자신도 ',
      tachyon.sex,
      '와 함께 끝까지 가보는 것도 나쁘지 않으리라.',
    ]);
    await era.printAndWait('자신은 분명 전과 다름없이, 기쁜 마음으로 그 부림을 받아들일 것이었다.');
    await era.printAndWait('하지만...');
    era.println();
    await tachyon.say_and_wait(['그러니, ', callname, ', 자네의 도움이 필요하네.']);
    await tachyon.say_and_wait([
      '나는 내년에 복귀할 걸세. ',
      t_call_c,
      '을 더 높은 한계로 이끌기 위해서 말이야. 오직 나만이 ',
      tachyon.sex,
      '에게 가장 치명적인 전술을 짜내어, ',
      tachyon.sex,
      '를 한계까지 몰아붙일 수 있으니까.',
    ]);
    await tachyon.say_and_wait('...나를 도와주겠지?');
    era.println();
    await era.printAndWait(
      '정말로 타인을 빛내기 위해 모든 것을 희생할 생각이라면, 어째서 얼굴에는 저토록 억울함이 서려 있는 것일까.',
    );
    await era.printAndWait('어째서 눈가에는 눈물이 맺혀 있는 것일까.');
    era.println();
    await tachyon.say_and_wait('침묵은 긍정의 의미로 받아들이겠네.');
    era.println();
    await era.printAndWait('애초에 거절할 이유도 없지 않은가.');
    await era.printAndWait([
      '저 ',
      coffee.get_colored_name(),
      '가 정점에 오를 수 있도록 하기 위해서.',
    ]);
    await era.printAndWait([
      '저 ',
      tachyon.get_colored_name(),
      '의 「유언」을 들어주기 위해서.',
    ]);
    await era.printAndWait([
      '거절할 이유는 딱히 없었다. 다만 ',
      me.get_colored_name(),
      '은(는) 그저 궁금할 뿐이었다.',
    ]);
    await era.printAndWait(
      '눈앞의 이 갈색 머리 천사는 지금 머릿속으로 대체 무슨 생각을 하고 있는 것일까.',
    );
    edu_marks.glass_leg = 0;
    edu_marks.limited = 1;
    flags.wait_flag = get_attr_and_print_in_event(32, new Array(5).fill(10), 0);
  };
};