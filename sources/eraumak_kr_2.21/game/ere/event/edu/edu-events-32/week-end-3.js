const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 35] = async (tachyon, me, callname, flags) => {
    await print_event_name('요소 · 방관자 설정', tachyon);
    await tachyon.say_and_wait(
      '하지만 가만히 생각해보니…… 이건 내가 관객석에서 레이스를 보는 첫 번째 경험일지도 모르겠군.',
    );
    era.println();
    await era.printAndWait(['오늘은 고베 신문배가 열리는 날이다.']);
    await era.printAndWait([
      '오늘은 ',
      tachyon.get_colored_name(),
      '이 후배의 초대를 받아 관전하러 온 날이다.',
    ]);
    era.printButton('「보통은 본인이 직접 달리니까」', 1);
    era.printButton('「보통은 레이스 녹화본을 보니까」', 2);
    await era.input();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '에게 있어, 자신의 레이스를 제외하면 경기장에 직접 올 필요가 있는 상황은 거의 없었을 것이다.',
    ]);
    await era.printAndWait(
      '레이스 데이터 분석 같은 것은, 관객석에서 보는 것보다 레이스가 끝난 후의 녹화 영상을 보는 편이 얻을 수 있는 데이터가 더 많기 때문이다.',
    );
    await era.printAndWait(
      '따라서 오늘은 정말로 처음으로, 혹은 연구의 관점이 아닌 관객의 신분으로 레이스를 관람하는 첫 번째 날이었다.',
    );
    era.println();
    await tachyon.say_and_wait('……실제로 현장에 와보니…… 역시 무척 시끄럽군.');
    era.println();
    await say_by_passer_by_and_wait('팬 A', '힘내라!');
    await say_by_passer_by_and_wait('팬 B', '반드시 이겨야 해!');
    await say_by_passer_by_and_wait('팬 C', [
      '고베 신문배가 국화상의 전초전이라고는 하지만, 실제로는 2400m라는 거리와 한신 경기장에서 개최된다는 점이 국화상에 대한 검증 효과로는 부족하다고 봐……',
    ]);
    await say_by_passer_by_and_wait('팬 C', [
      '……그렇기에 고베 신문배에서 승리한 ',
      tachyon.get_uma_sex_title(),
      '가 반드시 국화상에서 이긴다고 단정 짓기는 어렵지.',
    ]);
    await say_by_passer_by_and_wait('팬 D', '갑자기 왜 그런 소릴 하고 그래.');
    era.println();
    await tachyon.say_and_wait('이것이 평소 내가 레이스하기 전의 관객석 풍경인가?');
    era.printButton('「비슷해.오히려 훨씬 더 시끌벅적하지」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '……그렇겠지, 아무래도 G1이니까. 뭐, 그들의 심정은 이해하지만, 이 타이밍에 응원하는 건 아무 소용도 없지 않나.',
    );
    era.printButton('「소용이 있고 없고의 문제가…… 아니야」', 1);
    era.printButton('「계속 지켜보면 알게 될 거야」', 2);
    await era.input();
    await tachyon.say_and_wait('계속 지켜보라니…… 오? 게이트 입장이 시작되었군.');
    era.drawLine();
    await tachyon.print_and_wait('그 아이가 게이트에 들어섰다.');
    await tachyon.print_and_wait([
      '하지만 솔직히 말해서, 이번 레이스는 ',
      tachyon.get_colored_name(),
      '에게 있어 주목할 만한 점이 그리 많지 않았다.',
    ]);
    await tachyon.print_and_wait('가능성을 지닌 그 아이야말로 가장 중요한 관찰 대상이다.');
    await tachyon.print_and_wait(
      '……하지만 그 외에, 이 레이스는 그저 클래식급 한정 G2 레이스에 불과하다.',
    );
    era.println();
    await tachyon.say_and_wait('말하자면, 질 가능성은 전혀 없다고 봐도 되겠지.');
    era.println();
    await tachyon.print_and_wait('레이스 전 인기도 당연히 1번 인기였다.');
    await tachyon.print_and_wait('조건이 모두 갖춰졌으니 질 리가 없다.');
    await tachyon.print_and_wait('레이스 전 분석한 승률은 무려 97.46%.');
    era.println();
    await tachyon.print_and_wait('그러나……');
    era.println();
    await say_by_passer_by_and_wait('관중 A', '지지 마!');
    await say_by_passer_by_and_wait('관중 B', [
      '힘내! 아직 기회는 있어! 외곽에서 추월해!',
    ]);
    await say_by_passer_by_and_wait('관중 C', '포기하지 마! 반드시 따라잡을 수 있어!');
    era.println();
    await tachyon.print_and_wait([
      '어째서 아직 뒤처진 ',
      tachyon.get_uma_sex_title(),
      '에게 응원을 보내는 거지?',
    ]);
    await tachyon.print_and_wait('명백하게, 이미 따라잡을 수 없지 않은가.');
    await tachyon.print_and_wait('……이해할 수 없다.');
    await tachyon.print_and_wait([
      '아니, 이해는 할 수 있다. 비록 헛수고일지라도 자신이 지지하는 ',
      tachyon.get_uma_sex_title(),
      '를 위해 목소리를 높이는 행위 자체는 자신도 이해하고 있었다.',
    ]);
    await tachyon.print_and_wait(
      '비록 매드 사이언티스트라고는 해도, 나 역시 인성을 모르는 로봇은 아니니까.',
    );
    await tachyon.print_and_wait('하지만, 왜 내가……');
    era.println();
    await say_by_passer_by_and_wait('해설', [
      '따라잡습니다! 지금 뒤쪽의 ',
      tachyon.get_uma_sex_title(),
      '가 무서운 기세로 추격합니다!',
    ]);
    era.println();
    await tachyon.say_and_wait('!');
    await tachyon.say_and_wait('……힘내라.');
    await tachyon.say_and_wait('힘내! 지지 마라!');

    era.printButton('「!」', 1);
    await era.input();
    await say_by_passer_by_and_wait(
      '해설',
      '골—————인! 1착은 1번 게이트—————!',
    );
    era.drawLine();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 응원 소리는 전장의 환호와 응원 속에 파묻혔다.',
    ]);
    await era.printAndWait([
      '경기장 전체에서 그 소리를 들을 수 있었던 것은 아마도 ',
      tachyon.sex,
      '의 곁에 있던 ',
      me.get_colored_name(),
      '뿐이었을 것이다. 그리고……',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '선배! 선배의 응원 소리 들었어요! 응원해 주셔서 감사합니다…… 그때, 온몸에 갑자기 힘이 솟구치는 기분이었어요!',
    );
    era.println();
    await tachyon.say_and_wait('……후후, 아주 훌륭한 달리기였다. 앞으로도 계속 정진하도록 하게.');
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', '네!');
    era.println();
    await era.printAndWait([
      '고베 신문배가 끝나고, ',
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '은 경기장을 떠났다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……이론적으로는 이미 확립되어 있었지만, 실제로 외부인…… 혹은 당사자의 시선에서 본 것은 처음이었군.',
    );
    await tachyon.say_and_wait(
      '다른 아이들도, 그리고 그 아이도, 결국…… 정말로 한계를 초월했어.',
    );
    era.println();
    await era.printAndWait([
      '오늘 레이스에서 몇 명의 ',
      tachyon.get_uma_sex_title(),
      '는 모두,',
    ]);
    await era.printAndWait('한계를 초월했다.');
    await era.printAndWait([
      '레이스 전에 측정되었던 ',
      tachyon.sex,
      '들의 이론적 최대 속도를 뛰어넘은 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      ', 자네는 예전 팬 대감사제 때의 일을 기억하나?',
    ]);

    era.printButton('「타키온은 보답을 바라고 그 아이를 응원한 거야?」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), '은(는) 대답하지 않고, 그저 되물었다.']);
    era.println();
    await tachyon.say_and_wait('……후후.');
    await tachyon.say_and_wait('누군가에게 들려주기 위해서도, 상호작용을 기대한 행위도 아니었지……');
    await tachyon.say_and_wait(
      '그저 순수하게, 자신의 마음과 감정을 쏟아내기 위해 외친 소리였네.',
    );
    await tachyon.say_and_wait('바꿔 말하자면, 그것이 바로 『감동』이라는 것이겠지.');
    await tachyon.say_and_wait([
      '관객은 ',
      tachyon.get_uma_sex_title(),
      '에게 감동하여 환호를 보내고, ',
      tachyon.get_uma_sex_title(),
      ' 역시 관객에게 감동하여 자신의 한계를 초월한다……',
    ]);
    await tachyon.say_and_wait(
      '마치 왼쪽 발을 디디며 오른쪽 발을 올리는 식의, 영구기관 같은 비합리적인 개념이지만 실제로 벌어지고 말았어.',
    );
    await tachyon.say_and_wait(
      '정말로, 역시 이런 것들은 실험실 안에서는 도저히 체험할 수 없는 것이로군, 하하하하!',
    );

    era.printButton('「이걸로 레이스가『좋아』졌다고 할 수 있을까?」', 1);
    await era.input();
    await tachyon.say_and_wait('……글쎄, 나도 잘 모르겠네.');
    era.println();
    await era.printAndWait('……그럴 만도 하다.');
    await era.printAndWait('결국 말 그대로 자신이 직접 경기장에 서서 달린 것은 아니기 때문이다.');
    await era.printAndWait('좋아하는지 싫어하는지, 아직은 명확히 설명하기 어려울지도 모른다.');
    await era.printAndWait([
      '하지만 어찌 됐든, 고베 신문배가 끝나면서 아리마 기념도 이제 눈앞으로 다가왔다.',
    ]);
    await era.printAndWait('마감 기한이 바로 코앞이다.');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
  };

  handlers[95 + 36] = async (tachyon, me, callname, flags) => {
    await print_event_name('결의', tachyon);
    era.println();
    await tachyon.say_and_wait('하아…… 하아……');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '이 프랑스의 훈련장을 달리고 있다.',
    ]);
    await tachyon.print_and_wait(['요 몇 일은 ', callname, '이 일본으로 돌아가 있는 시기이다.']);
    era.println();
    await tachyon.say_and_wait(['다음은 세계의 최고봉, 개선문상인가……']);
    era.println();
    await tachyon.print_and_wait(['지금 ', me.sex, '는 아마 의아해하고 있겠지.']);
    await tachyon.print_and_wait(['도대체 왜 개선문상을 선택했는지 말이야.']);
    await tachyon.print_and_wait([
      '한계의 저편에 도달하는 것, 그것은 ',
      tachyon.get_colored_name(),
      '의 꿈이다.',
    ]);
    await tachyon.print_and_wait([
      tachyon.sex,
      ' 본인도 줄곧 믿어왔다. 자신이 이 목표를 위해 모든 것을 걸 수 있으며, 도달할 수만 있다면 그 주인공이 자신이 아니어도 상관없다고.',
    ]);
    await tachyon.print_and_wait([
      '……하지만, ',
      tachyon.sex,
      '는 사실 자신이 생각했던 것만큼 초연한 존재가 아니었다.',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '본질적으로, ',
      tachyon.sex,
      ' 역시 달리고 싶어 하는 ',
      tachyon.get_uma_sex_title(),
      '였던 것이다.',
    ]);
    await tachyon.print_and_wait([
      '하지만, ',
      tachyon.sex,
      '는 한계를 초월하겠다는 꿈 역시 포기하고 싶지 않았다.',
    ]);
    await tachyon.print_and_wait(
      '그렇다면 어떻게 해야 할까, 어떻게 해야 양립할 수 있는 최선의 방법이 나올까.',
    );
    await tachyon.print_and_wait([
      '답은 간단하다. 그저, ',
      tachyon.get_colored_name(),
      ' 스스로가 「한계」가 되면 그만이다.',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '그렇기에 선택한 것이다. ',
      race_infos[race_enum.prix_lat].get_colored_name(),
      '을.',
    ]);
    await tachyon.print_and_wait('세계의 최고봉이자, 한계를 상징하는 가장 위대한 무대를.');
    await tachyon.print_and_wait([
      '이 무대에서, 스스로의 몸으로 정의하겠다. ',
      tachyon.get_uma_sex_title(),
      '의 한계를.',
    ]);
    era.println();
    await tachyon.say_and_wait('……후후.');
    era.println();
    await tachyon.print_and_wait('모두를 앞지르고 스스로 한계가 되겠다는 생각을 하자,');
    await tachyon.print_and_wait('몸이 주체할 수 없을 정도로 뜨거워졌다.');
    era.println();
    await tachyon.say_and_wait('역시, 나도 갈망하고 있었던 거군…… 달리는 것을.');
    era.println();
    await tachyon.print_and_wait('결의는 이미 타올랐다.');
    await tachyon.print_and_wait('그렇다면 모든 것을 떨쳐버리고, 눈앞의 승리에만 집중하자.');
    flags.wait_flag = get_attr_and_print_in_event(32, new Array(5).fill(5), 0);
  };

  handlers[95 + 43] = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    await print_event_name('완전히 타오른 승부욕', tachyon);
    era.println();
    await tachyon.say_and_wait('후우…… 후우……');
    era.println();
    await era.printAndWait([
      '고베 신문배가 끝난 후부터 오늘까지, ',
      tachyon.get_colored_name(),
      '의 훈련은 양호한 상태를 유지하고 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……오늘도, 역시 마찬가지군.');
    era.println();
    await era.printAndWait('그러나…… 유지한다는 것은, 곧 진보가 없다는 뜻이기도 했다.');
    await era.printAndWait([
      '아리마 기념이 다가올수록, ',
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '의 기색에는 어쩔 수 없는 초조함이 깃들기 시작했다.',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '타키온 선배! 오늘도 제가 왔어요!',
    );
    era.println();
    await era.printAndWait([
      '그때 두 사람의 긴장을 풀어준 것은, 고베 신문배 때의 그 후배 ',
      tachyon.get_uma_sex_title(),
      '였다.',
    ]);
    await era.printAndWait([
      '그 후배 ',
      tachyon.get_uma_sex_title(),
      '는 요즘 들어 자주 ',
      tachyon.get_colored_name(),
      '과 함께 훈련에 참여하곤 했다.',
    ]);
    await era.printAndWait([
      '트레이너인 ',
      me.get_colored_name(),
      ' 역시 때때로 ',
      tachyon.sex,
      '에게 조언을 건네주었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 멍하니 상대를 바라보고 있을 때, 눈앞에 갑자기 익숙한 얼굴이 나타났다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '왜 그러나? 남의 애를 그렇게 열심히 쳐다보다니, 설마 저 아이에게 마음이라도 있는 건 아니겠지?',
    );
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 황급히 고개를 저었다.']);
    era.println();
    if (relation >= 0) {
      await tachyon.say_and_wait('후후…… 저 아이는 확실히 상당한 가능성을 지니고 있지.');
      await tachyon.say_and_wait([
        '……예전의 나였다면, 아마 ',
        tachyon.sex,
        '를 플랜 B의 예비 후보로 삼았을지도 몰라.',
      ]);
      await tachyon.say_and_wait('하지만 플랜 B는 어디까지나 플랜 A가 불가능할 때를 대비한 대체품일 뿐이야.');
      await tachyon.say_and_wait(['본질을 잊고 지엽적인 것에 매달리지 말게나, ', callname, '.']);
    } else {
      await tachyon.say_and_wait('내가 지켜보는 후배를 그런 눈으로 쳐다보지 말게.');
      await tachyon.say_and_wait('……자네 같은 녀석은, 다른 사람까지 망치지 않는 게 좋아.');
      await tachyon.say_and_wait('내 곁에 있게 해주는 것만으로도 자네에게는 과분한 자비니.');
    }
    if (love >= 75) {
      era.println();
      await tachyon.say_and_wait('만약 잊어버린다면, 다시 한번 자네의 눈을 멀게 해주지……');
      await tachyon.say_and_wait([
        '이번에는 눈부시다 못해 타버릴 정도로…… 다시는 다른 ',
        tachyon.get_uma_sex_title(),
        '의 모습 따위는 보이지 않을 때까지 말이야.',
      ]);
    }
    era.println();
    await era.printAndWait([
      '이것은 어떤 의미에서 ',
      tachyon.get_colored_name(),
      '의 독점욕인 것일까?',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 쓴웃음을 지으며 넘길 수밖에 없었다.']);
    era.println();
    await era.printAndWait([
      '그러나 오늘의 손님은 후배 ',
      tachyon.get_uma_sex_title(),
      '뿐만이 아니었다.',
    ]);
    era.println();
    const coffee = get_chara_talk(25),
      c_call_m = sys_get_colored_callname(25, 0),
      c_call_t = sys_get_colored_callname(25, 32),
      t_call_c = sys_get_colored_callname(32, 25);
    await tachyon.say_and_wait('……이런.');
    await coffee.say_and_wait([c_call_t, '……']);
    era.println();
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 ',
      tachyon.get_colored_name(),
      '의 플랜 B의 주요 핵심 인물이었다.',
    ]);
    if (era.get('cflag:25:모집상태') === recruit_flags.yes) {
      await era.printAndWait([
        '또한 ',
        me.get_colored_name(),
        '이(가) 담당하는 ',
        tachyon.get_uma_sex_title(),
        '이기도 했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) 함께 친구를 따라잡겠다고 맹세한, 소중한 담당이었다.',
      ]);
    }
    era.println();
    await era.printAndWait(['그녀가 무슨 이유에서인지 갑자기 ', tachyon.get_colored_name(), '을 찾아왔다.']);
    era.println();
    await tachyon.say_and_wait([
      t_call_c,
      '? 내 실험을 받으러 온 건가? 원한다면 언제든지 환영……',
    ]);
    await coffee.say_and_wait('아뇨…… 그게 아니라, 저와 모의 레이스를 한 번 해주시겠어요?');
    await tachyon.say_and_wait('……모의 레이스라고?');
    await coffee.say_and_wait('네…… 어떻게 해서든, 부디 꼭 부탁드립니다.');
    era.println();
    await era.printAndWait('……모의 레이스 신청 절차는 아주 간단했다.');
    if (era.get('cflag:25:모집상태') === recruit_flags.yes) {
      await era.printAndWait([
        '무엇보다 ',
        me.get_colored_name(),
        '이(가) ',
        tachyon.sex,
        '들 두 사람 모두의 트레이너였기 때문이다.',
      ]);
    }
    await era.printAndWait('특별한 수배도 필요 없이, 그저 경기장을 대여하기만 하면 그만이었다.');
    era.println();
    await era.printAndWait('신청 서류는 얼마 지나지 않아 승인되었다.');
    await era.printAndWait([
      '단둘만이 서 있는 코스 위에서, ',
      me.get_colored_name(),
      '은(는) 출발 신호원으로서 코스 옆에 섰다.',
    ]);
    await era.printAndWait('마음속에는 불안과 떨림이 교차했다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ', ',
      tachyon.sex,
      '의 목표는 ',
      tachyon.get_uma_sex_title(),
      '의 한계를 뛰어넘는 것.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ', ',
      coffee.sex,
      '의 목표는 친구의 발자취를 따라잡는 것.',
    ]);
    era.println();
    await era.printAndWait('운명의 장난인지 혹은 악취미 같은 우연인지,');
    await era.printAndWait(['이 두 사람 모두 최종 목표를 아리마 기념으로 잡고 있었다.']);
    await era.printAndWait(
      '오늘의 모의 레이스는…… 이유는 알 수 없으나, 아마도 그날의 예행연습이라고 봐도 무방할 것이다.',
    );
    await era.printAndWait([
      '복잡한 심경을 뒤로하고, ',
      me.get_colored_name(),
      '은(는) 깃발을 내렸다.',
    ]);
    era.drawLine();
    await tachyon.print_and_wait('제3코너, 그리고…… 마지막 직선.');
    await tachyon.print_and_wait([t_call_c, '이 왼쪽에? 아니, 오른쪽인가.']);
    await tachyon.print_and_wait([t_call_c, '의 주법은 여전하군…… 종잡을 수가 없어.']);
    await tachyon.print_and_wait('하지만, 규칙성만 있다면 충분히 파악할 수 있다.');
    era.println();
    await tachyon.say_and_wait('바로 여기…… 뭐!?');
    era.println();
    await tachyon.print_and_wait('인정해야만 했다.');
    await tachyon.print_and_wait('레이스 전의 자기 자신이 확실히 방심하고 있었다는 것을.');
    await tachyon.print_and_wait('플랜 B를 위한 대용품.');
    if (edu_marks.beat_c) {
      await tachyon.print_and_wait('게다가 이미 한 번 꺾어본 적이 있는 패배자.');
    }
    await tachyon.print_and_wait('입으로는 아무리 그럴듯하게 떠들어댔어도.');
    await tachyon.print_and_wait([
      '뭐라더라, ',
      coffee.get_colored_name(),
      '는 독립적인 개체라느니.',
    ]);
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      '는 나에게 뒤지지 않는 재능을 가지고 있다느니.',
    ]);
    await tachyon.print_and_wait('마음 한구석에서는 오만이라고조차 부를 수 없을 정도의 가벼운 경시가 싹트고 있었다.');
    await tachyon.print_and_wait([
      '가짜인 ',
      coffee.sex,
      '가 어떻게 최상의 상태인 진짜를 이길 수 있겠느냐고.',
    ]);
    era.println();
    await tachyon.say_and_wait('주법도, 속도도…… 낯설어.');
    era.println();
    await tachyon.print_and_wait('그것도 당연한 일이다.');
    await tachyon.print_and_wait([
      '결국 마지막으로 ',
      tachyon.get_colored_name(),
      '이 ',
      coffee.get_colored_name(),
      '의 주법과 속도를 자세히 관찰했던 것은 이미 1년 전 7월의 일이었으니까.',
    ]);
    era.println();
    await tachyon.print_and_wait(
      '자신이 진보하는 동안 상대는 제자리에 머물러 있을 것이라 믿었던 천진난만한 이론가는, 상대를 얕본 대가를 치러야만 했다.',
    );
    await tachyon.print_and_wait('……라이벌, 인가?');
    era.println();
    await tachyon.print_and_wait('가짜가 아니다.');
    await tachyon.print_and_wait('대체품도 아니다.');
    await tachyon.print_and_wait('칠흑의 사냥개는 오만한 연구자의 목덜미를 향해 날카로운 송곳니를 드러냈다.');
    await tachyon.print_and_wait('고통으로, 패배로 자신의 존재를 증명한다.');
    await tachyon.print_and_wait([
      '자신이 ',
      tachyon.sex,
      '와 같은 무대에 설 수 있는 대등한 「라이벌」임을 증명해 보인 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……후후, 상대를 이기고 싶다, 상대를 앞지르고 싶다, 누군가를 초월하고 싶다…… 과연, 이런 기분이었나?',
    );
    era.println();
    await tachyon.print_and_wait('좋아, 인정하지.');
    await tachyon.print_and_wait([
      '이번에는 ',
      tachyon.get_colored_name(),
      '의 패배다.',
    ]);
    await tachyon.print_and_wait('각오가 부족했고, 연구가 부족했으며, 진지함이 부족했다.');
    await tachyon.print_and_wait(
      '이런 상황에서 만약 이겼다면, 그것이야말로 상대의 노력을 모욕하는 일이겠지.',
    );
    await tachyon.print_and_wait(['오히려 ', t_call_c, '에게 감사해야 할지도 모르겠군.']);
    await tachyon.print_and_wait([
      '이대로 방치했다가 아리마 기념 당일에야 이 부족한 「마지막 요소」를 발견했다면, 다시 시작할 기회 따위는 없었을 테니까.',
    ]);
    await tachyon.print_and_wait('그러니……');
    era.println();
    await tachyon.say_and_wait('아아…… 이번에는 내가———');
    era.printButton('「타키온, 지지 마!」', 1);
    era.printButton('「카페, 힘내!」', 2, {
      disabled: era.get('cflag:25:모집상태') !== recruit_flags.yes,
    });
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('말이 목구멍까지 차올랐으나, 차마 내뱉지 못했다.');
      await tachyon.print_and_wait([
        '만약 순수한 의미에서의 ',
        tachyon.get_colored_name(),
        '이었다면, 눈앞의 패배를 인정하는 것쯤은 그리 어려운 일이 아니었을 것이다.',
      ]);
      await tachyon.print_and_wait('레이스는 실험과 같아서, 반드시 성공하리라는 법은 없으니까.');
      await tachyon.print_and_wait(
        '실패하더라도 상관없다. 교훈을 얻고 다시 시작하면 된다, 그뿐인 일이다.',
      );
      await tachyon.print_and_wait('하물며 이건 그저 모의 레이스에 불과하지 않은가.');
      era.println();
      await tachyon.print_and_wait('자신을 설득하여 포기하게 만들 이유는 얼마든지 있었다.');
      await tachyon.print_and_wait('하지만 계속해서 나아가야 할 이유는 단 하나뿐이었다.');
      await tachyon.print_and_wait('그리고 그 하나의 이유가, 다른 모든 이유를 압도했다.');
      era.println();
      await tachyon.say_and_wait('이기고 싶어…… 이기고 싶단 말이다!');
      era.println();
      await tachyon.print_and_wait('스스로조차 놀랄 정도의 집착이었다.');
      await tachyon.print_and_wait([
        '만약 순수한 ',
        tachyon.get_colored_name(),
        '이었다면, 이때 깔끔하게 포기했을 터였다.',
      ]);
      await tachyon.print_and_wait(
        '하지만 외부의 영향을 받지 않는, 순수하고 냉혹한 연구자는 이제 더 이상 존재하지 않았다.',
      );
      era.println();
      await tachyon.print_and_wait('타인의 응원을 받아들이고, 타인의 감정에 전염된 순간.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 이미 순수하지 않게 되었다.',
      ]);
      await tachyon.print_and_wait([
        '현재의 ',
        tachyon.get_colored_name(),
        '은 연구를 위해, 한계를 초월하기 위해 달린다.',
      ]);
      await tachyon.print_and_wait('그리고……');
      await tachyon.print_and_wait('어떤 레이스에서든 언제나 자신의 곁을 지켜주었던 사람을 위해.');
      await tachyon.print_and_wait([
        '언제라도 ',
        tachyon.get_colored_name(),
        '의 요구를 최우선으로 생각해주었던 그 사람을 위해.',
      ]);
      era.println();
      if (love >= 50) {
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '은 자신의 유일한 연인을 위해 달리고 있었다.',
        ]);
      } else if (relation > 225) {
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '은 자신과 뜻을 함께하는 동지를 위해 달리고 있었다.',
        ]);
      } else {
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '은 자신의 유일한 실험동물을 위해 달리고 있었다.',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('반응은 상호적이다. 이것은 화학의 기본 정리이다.');
      await tachyon.print_and_wait([
        me.get_colored_actual_name(),
        '이라는 이름의 모르모트가 ',
        tachyon.get_colored_name(),
        '의 주법에 눈을 태우는 동안.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 역시 ',
        me.sex,
        '의 응원을 받으며, ',
        me.sex,
        '에 의해 변화하고 있었던 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        me.sex,
        ' 앞에서 지고 싶지 않아…… ',
        me.sex,
        '의 신뢰를 배신하고 싶지 않아…… 그리고……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '지고 싶지 않아, ',
        coffee.get_colored_name(),
        '에게만큼은!',
      ]);
    } else {
      era.println();
      await tachyon.say_and_wait('————내가, 졌다.');
      era.println();
      await tachyon.print_and_wait('하지만, 영원히 진 것은 아니다.');
      await tachyon.print_and_wait('오직 지금, 이 순간에만 인정하겠다.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이 ',
        coffee.get_colored_name(),
        '보다 뒤처졌음을.',
      ]);
      await tachyon.print_and_wait('다음번 아리마 기념에서는.');
      await tachyon.print_and_wait('내 쪽에서 도전자의 신분으로 돌아가.');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 목덜미를 찢어 발기고, 씹어주마.',
      ]);
      era.println();
      await tachyon.print_and_wait('아아…… 쉼 없이 타오르는 이 열기.');
      await tachyon.print_and_wait('도무지 식을 줄을 모르는군.');
    }
    era.println();
    await tachyon.print_and_wait('연구자로서의 자존심 때문인가?');
    await tachyon.print_and_wait('보조 계획에 대한 경시 때문인가?');
    await tachyon.print_and_wait('아니, 그렇지 않다.');
    await tachyon.print_and_wait('그저 승리하고 싶을 뿐이다. 철저하게 초월하고 싶을 뿐이다.');
    await tachyon.print_and_wait(['지고 싶지 않다, ', coffee.get_colored_name(), '에게는.']);
    await tachyon.print_and_wait(['이기고 싶다, ', coffee.get_colored_name(), '를 상대로.']);
    era.println();
    if (ret === 1) {
      await tachyon.say_and_wait('반드시…… 이길 것이다!');
      era.drawLine();
      await era.printAndWait([tachyon.get_colored_name(), '이 모의 레이스에서 승리했다.']);
      await era.printAndWait('하지만…… 정말로 아주 간발의 차이였다.');
      era.println();
      await tachyon.say_and_wait([
        '하아…… 하아…… 후우…… 후하하하! 어떤가? ',
        t_call_c,
        ', 결국 마지막에 이긴 건 나로군!',
      ]);
      await coffee.say_and_wait(
        '……지금 게 제 진정한 실력이라고 생각하지 말아 주세요…… 이건 그저 모의 레이스일 뿐이니까요.',
      );
      await tachyon.say_and_wait(
        '하하하! 유쾌하군, 유쾌해. 패배한 개의 분한 울음소리는 제법 듣기 좋군…… 윽!',
      );
      await coffee.say_and_wait('…………기억해 두세요.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 짐짓 거드름을 피우며 웃음을 터뜨리다 말고, ',
        coffee.get_colored_name(),
        '의 서슬 퍼런 눈총에 갑자기 입을 다물었다. 마치 보이지 않는 손에 입과 코가 막힌 듯한 모습이었다.',
      ]);
      if (era.get('cflag:25:모집상태') === recruit_flags.yes) {
        await coffee.say_and_wait([
          c_call_m,
          '……아리마 때…… 저를 응원해 주신다면, 기쁠 거예요.',
        ]);
      }
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 뒤도 돌아보지 않고 훈련장을 떠났다. 남겨진 것은 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        ', 그리고 내내 비중은 없었지만 확실히 자리에 있었던 ',
        tachyon.get_uma_sex_title(),
        ' 후배뿐이었다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '타키온 선배! 정말 대단하세요!',
      );
      await tachyon.say_and_wait([
        '……에헴, 이 정도는 아무것도 아니야. 아리마 기념을 기대하게나. 그때는 자네들 모두에게 가장 극치에 달한 주법을 보여줄 테니까!',
      ]);
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '타키온 선배~~~~!',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 후배와 몇 마디 말을 주고받은 후, 후배 역시 경기장을 떠났다.',
      ]);
      await era.printAndWait('그제야……');
      era.printButton(`「……이제 됐어. 다 갔네.」`, 1);
      await era.input();
      await tachyon.say_and_wait('하아~~~~');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 마치 참고 있던 숨을 한꺼번에 내뱉듯 ',
        me.get_colored_name(),
        '에게 몸을 기댄 채 바닥에 주저앉았다.',
      ]);
      await era.printAndWait([
        '보통 이런 상황이라면 ',
        me.get_colored_name(),
        '은(는) 걱정스러운 표정으로 ',
        tachyon.sex,
        '의 몸 상태가 좋지 않은지 물었을 것이다.',
      ]);
      await era.printAndWait('하지만 지금은……');
      era.printButton('「수고했어」', 1);
      era.printButton('「많이 힘들지」', 2);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '만이 알아볼 수 있었다. 방금 전의 레이스에서 ',
        tachyon.get_colored_name(),
        '이 정말로 전력을 다했다는 것을.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 주법과 가능성에 압박받으며, 온 힘을 쏟아부어 간신히, 정말로 간신히,',
      ]);
      await era.printAndWait('거의 오차 범위라고 할 수 있을 정도의 차이로 승리했음을 말이다.');
      era.println();
      await tachyon.say_and_wait([
        '음…… ',
        t_call_c,
        '…… 내가 상상했던 것 이상으로 성장해 있었군……',
      ]);
      await tachyon.say_and_wait([
        '그런데도 나는…… 여전히 예전과 같은 태도로 ',
        tachyon.sex,
        '를 대하고 있었어……',
      ]);
    } else {
      await tachyon.print_and_wait('아아…… 이런 기분이 바로……');
      era.drawLine();
      await era.printAndWait([tachyon.get_colored_name(), '이 모의 레이스에서 패배했다.']);
      await era.printAndWait('하지만, 정말로 아주 미세한 차이의 패배였다.');
      era.println();
      await coffee.say_and_wait('……고작 이 정도 수준이라면, 조금 실망스럽네요.');
      await coffee.say_and_wait([
        '이런 모습의 ',
        c_call_t,
        '는, 친구를 뛰어넘겠다는 제 목표에 아무런 도움도 되지 않아요……',
      ]);
      if (love >= 75) {
        await coffee.say_and_wait([
          '이해가 안 가네요…… 어째서 ',
          c_call_m,
          '이 당신 같은 사람에게 시간을 낭비하고 있는지.',
        ]);
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '의 곁에 착 달라붙었다. 다정한 몸짓과는 대조적인 가차 없는 비판에 ',
          me.get_colored_name(),
          '은(는) 묘한 괴리감을 느꼈다.',
        ]);
        await era.printAndWait([
          '방금 막 달리기를 마친 몸에서 풍겨오는 은은한 풀꽃 향기와 옅은 땀 냄새가 ',
          me.get_colored_name(),
          '의 후각을 자극했다.',
        ]);
        await era.printAndWait([
          '살짝 젖은 머리카락과 거친 숨을 내쉬며 붉게 상기된 얼굴이 ',
          me.get_colored_name(),
          '의 시각을 자극했다.',
        ]);
        await era.printAndWait([
          '저도 모르게, ',
          me.get_colored_name(),
          '은(는) 자신의 손을 주체하기 어려워졌다.',
        ]);
        era.println();
        await coffee.say_and_wait([
          c_call_m,
          '……여기서 하실 건가요? ',
          c_call_t,
          ' 앞에서……?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 눈앞의 잔디밭에 엎드려 여전히 숨을 헐떡이고 있는 ',
          tachyon.get_colored_name(),
          '을 보고 정신을 차렸다.',
        ]);
        await coffee.say_and_wait([
          c_call_m,
          ', 방금 그건…… 괜찮으시다면 잠시 후에 꼭……',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 묘한 여운이 남는 말을 남기고 떠나갔다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 ',
          me.get_colored_name(),
          '을(를) 무섭게 노려보았다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 시선을 피하며, 차마 ',
          tachyon.sex,
          '를 똑바로 바라보지 못했다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 떠난 후에도, ',
        tachyon.get_colored_name(),
        '은 여전히 잔디밭에서 일어나지 못했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 잔디 위에 엎드린 ',
        tachyon.get_colored_name(),
        '을 걱정스럽게 바라보았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '…… ',
        t_call_c,
        '은 정말로…… 내가 상상했던 것 이상으로 성장해 있었군……',
      ]);
      await tachyon.say_and_wait([
        '그런데도 나는…… 여전히 예전과 같은 태도로 ',
        tachyon.sex,
        '를 대하고 있었어……',
      ]);
    }
    await tachyon.say_and_wait('……정말로…… 부끄럽군……');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '가 거친 숨을 몰아쉬며 내뱉은 말들은, 오늘 이전까지의 ',
      tachyon.get_colored_name(),
      '이라면 입 밖으로 낼 거라고는 상상도 할 수 없는 것들이었다.',
    ]);
    if (
      RaceHistory.get(32)
        .get_values()
        .findIndex((e) => e.rank !== 1) === -1
    ) {
      await era.printAndWait([
        '단 한 번도 패배를 겪어본 적 없던 ',
        tachyon.get_colored_name(),
        '은, 그 순간 정말로 패배의 가능성을 온몸으로 실감했다.',
      ]);
    } else {
      await era.printAndWait('비록 이전에 졌던 레이스가 있었다 하더라도, 이토록 압도적인 압박감을 느껴본 적은 없었다.');
    }
    era.println();
    await tachyon.say_and_wait([
      '만약…… 만약 방금, 내가 정말로 ',
      t_call_c,
      '에게 졌더라면.',
    ]);
    await tachyon.say_and_wait(
      '그 가능성을 떠올리는 것만으로도 온몸이 떨리는군…… 나는 거부하고 있어, 그런 가능성을.',
    );
    await tachyon.say_and_wait([
      '지고 싶지 않아, ',
      t_call_c,
      '에게는…… 분해, ',
      t_call_c,
      '에게 지는 것은.',
    ]);
    await tachyon.say_and_wait([
      '하지만…… 가슴 속은 여전히 타오르고 있네. 다시 한번 ',
      t_call_c,
      '과 승부를 가리고 싶다고, 정면에서 철저하게 꺾어버리고 싶다고 말일세.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '가 고개를 들어 ',
      me.get_colored_name(),
      '의 눈을 마주 보았다.',
    ]);
    await era.printAndWait([
      '사람을 홀려 광기에 빠뜨리던 예전의 광자 같은 눈빛과는 달리, 지금 ',
      tachyon.sex,
      '의 눈동자에는 감정의 소용돌이가 치고 있었다.',
    ]);
    await era.printAndWait([
      '마치 타오르는 횃불처럼, 그 왕성한 불꽃은 공허했던 예전의 빛보다 훨씬 더 밝고 눈부셨으며, ',
      me.get_colored_name(),
      '의 시선을 더욱 강렬하게 사로잡았다.',
    ]);
    era.println();
    await tachyon.say_and_wait('이것이 바로…… 호적수라는 기분인가?');
    await tachyon.say_and_wait([
      '그저 지는 것이 분한 게 아니야…… 『',
      coffee.get_colored_name(),
      '』에게 지는 것이 분한 것이었군.',
    ]);
    await tachyon.say_and_wait('분명 그럴 거야. 그렇지 않다면 이 주체할 수 없는 열기를 설명할 길이 없으니까……');
    await tachyon.say_and_wait([
      '……지금 당장 돌아가자! ',
      callname,
      '! 바로 이거야! 이거라고! 이것이 바로 내게 부족했던 마지막 조각이었어!',
    ]);
    era.println();
    await era.printAndWait(['한 해가 저물어간다. 이제 다음은, 아리마 기념이다.']);
    flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 5], 10);
  };
};