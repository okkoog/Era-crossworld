const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 35] = async (
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
      era.get('cflag:0:위치') !== location_enum.paris ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (era.get('cflag:25:위치') === location_enum.paris) {
      return false;
    }
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('프랑스(?)', tachyon);
    await tachyon.say_and_wait('여기……가 프랑스인가.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 창밖으로 하늘과 맞닿은 야경을 바라보았다.',
    ]);
    await era.printAndWait('여기가, 프랑스……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 그토록 갈망하던 곳.',
    ]);
    await era.printAndWait([
      '수많은 일본의 ',
      tachyon.get_uma_sex_title(),
      '들이 좌절했던 곳.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이, 마지막 정점에 발을 내디딜 곳.',
    ]);
    era.println();
    await era.printAndWait('그러나……');
    await era.printAndWait('별을 올려다보는 자는, 발밑의 웅덩이를 잊어버리기 마련이다.');
    await era.printAndWait('높은 곳만 바라보다 일을 그르친다는 건, 선인들의 지혜가 담긴 말이다.');
    era.drawLine();
    era.printButton('「……아니, 여기 두바이인데」', 1);
    await era.input();
    await tachyon.say_and_wait('…………어?');
    await era.printAndWait([
      '분명히, 머릿속이 개선문상으로 가득 차 버린 ',
      tachyon.get_colored_name(),
      '은, ',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 일주일 전부터 말했던, 도중에 두바이를 경유한다는 사실을 듣지 못한 모양이었다.',
    ]);
    era.printButton('「그치만 두바이 레이스도 세계적으로 유명하니까, 기회가 된다면……」', 1);
    await era.input();
    await era.printAndWait([
      '그 말을 내뱉고, ',
      me.get_colored_name(),
      '은(는) 문득 입을 다물었다.',
    ]);
    await era.printAndWait('두바이의 레이스는 확실히 세계적으로 유명했다.');
    await era.printAndWait(
      '유명한 이유는 주로 그 상금에 있었으며, 세계에서 가장 「자본」력이 높은 레이스임에 틀림없었다.',
    );
    await era.printAndWait('하지만……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '에게는, 더 이상 「기회」가 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '음, 기회가 된다면 두바이 레이스도 볼 수 있겠군…… 나중에 ',
      t_call_c,
      '의 훈련 계획에 넣어볼까?',
    ]);
    era.println();
    await era.printAndWait(['하지만, ', tachyon.sex, '는 전혀 눈치채지 못한 듯했다.']);
    await era.printAndWait('일부러 피했던 화제를 아무렇지 않게 먼저 꺼내 들었다.');

    era.printButton(
      '「……일본으로 돌아간 뒤에도, 타키온은 계속해서 카페의 훈련 계획을 짜 줄 거야?」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait('그건 말할 필요도 없지……');
    await tachyon.say_and_wait([
      '이번 개선문상은 그저 내 개인적인 고집일 뿐이네. 진정한 가능성, 진정한 희망은 여전히 ',
      t_call_c,
      '에게 걸고 있으니까.',
    ]);
    await tachyon.say_and_wait(['그나저나, 그렇게 되면 ', t_call_c, '은 어떻게 되는 거지?']);
    era.printButton(
      '「걱정 마, 카페와는 태블릿으로 연락할 거고, 매달 일본으로 날아가서 밀린 일들을 처리할 테니까」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait('……매달?');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 조금 놀란 눈으로 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 대답 대신 고개를 끄덕였다.']);
    await era.printAndWait('아, 설마 돈 문제를 걱정하는 건가?');
    era.printButton(
      '「어차피 출장이니까 비행기 값 같은 건 학원에서 나올 거야. 그 부분은 걱정하지 마」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait('……미안하군.');
    era.printButton('「별거 아니야」', 1);
    era.printButton('「내가 원해서 하는 일인걸」', 2);
    await era.input();
    await era.printAndWait('이것은 진실이자, 거짓이었다.');
    await era.printAndWait('……사실, 해외든 국내든 한쪽을 선택할 수는 있었다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 원정에만 전념할 수도 있었고, 일본에 남아 ',
      coffee.get_colored_name(),
      '의 곁을 지킬 수도 있었다.',
    ]);
    await era.printAndWait(
      '트레센 학원이 아무리 일손이 부족하다 해도, 트레이너가 이렇게까지 몸을 혹사해야 할 정도는 아니었다.',
    );
    await era.printAndWait('하지만……');
    era.printButton('「그냥 마음이 놓이지 않아서 그래」', 1);
    era.printButton('「타키온도, 카페도 소중해」', 2);
    await era.input();
    await era.printAndWait([
      '친구의 뒷모습을 쫓는 그 ',
      tachyon.get_teen_sex_title(),
      '가 홀로 남겨지는 것을 차마 볼 수 없었다.',
    ]);
    await era.printAndWait([
      '타향 만리에서 막다른 길을 향해 달려가는 ',
      tachyon.get_teen_sex_title(),
      '의 외로움을 차마 외면할 수 없었다.',
    ]);
    await era.printAndWait('그래서, 스스로를 고달프게 만드는 이런 우유부단한 선택을 내릴 수밖에 없었다.');
    era.println();
    await tachyon.say_and_wait('……정말 구제 불능인 참견쟁이로군.');
    era.printButton('「하지만 장점도 있어」', 1);
    era.printButton('「이렇게 하면 너와 카페의 주법을 동시에 지켜볼 수 있으니까」', 2);
    await era.input();
    await tachyon.say_and_wait('고작 그런 일로 왕복 열 몇 시간이나 비행기를 타다니, 제정신이 아니군.');
    era.println();
    await me.say_and_wait('칭찬 고마워.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 웃으며 ',
      tachyon.get_colored_name(),
      '의 감탄에 화답했다.',
    ]);
    await era.printAndWait('방금 분위기를 망쳤던 것에 대한 보상이라고 생각하기로 했다.');
    era.println();
    await tachyon.say_and_wait('……그렇다면, 내 주법을 마지막까지 지켜봐 주게나.');
    era.println();
    await era.printAndWait('세계라는 이름의 무대 위에서.');
    await era.printAndWait([
      tachyon.sex,
      '는 ',
      me.get_colored_name(),
      '에게 손을 내밀었다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 마지막 춤에, ',
      me.get_colored_name(),
      '은(는) 함께 출연자로 초대되었다.',
    ]);
    flags.wait_flag = sys_like_chara(32, 0, 100, true, 10);
  };

  handlers[95 + 37] = async (
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
      era.get('cflag:0:위치') !== location_enum.paris ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (era.get('cflag:25:위치') === location_enum.paris) {
      return false;
    }
    const c_call_m = sys_get_colored_callname(25, 0),
      c_call_t = sys_get_callname(25, 32),
      coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('한계의 기준', tachyon);
    await era.printAndWait('개선문상 전날.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 묵고 있는 호텔에 불청객이 찾아왔다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['……', t_call_c, '? 자네가 어떻게……?']);
    await coffee.say_and_wait(['…………', c_call_t, '.']);
    era.println();
    await era.printAndWait(['일본에 남아 있어야 할 ', coffee.get_colored_name(), '가']);
    await era.printAndWait(['개선문상 전날, 프랑스에 도착했다.']);
    era.println();
    await coffee.say_and_wait(['……', c_call_m, '에게 부탁해서 데려와 달라고 했어요.']);
    await coffee.say_and_wait([c_call_m, '이 말하기를, 말하기를……!']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 침대 머리에 정좌한 채, 입을 열지 않았다.',
    ]);
    await era.printAndWait([coffee.get_colored_name(), '가 말을 끝마치기를 기다렸다.']);
    era.println();
    await coffee.say_and_wait(['말하기를, ', c_call_t, ', 당신의 다리……!']);
    await tachyon.say_and_wait(
      '……음, 이미 한계라네. 설령 그렇지 않더라도, 나는 내일 레이스에 모든 것을 쏟아부을 거야…… 어떤 여지도 남기지 않고 말이지.',
    );
    await coffee.say_and_wait('……어째서인가요?');
    era.println();
    await era.printAndWait([
      '어째서인지 당사자인 ',
      tachyon.get_colored_name(),
      '보다, ',
      coffee.get_colored_name(),
      '쪽이 더 절박해 보였다.',
    ]);
    await coffee.say_and_wait([
      '……만약 또 타카라즈카 전처럼, 저를 위해서라느니, 저와 친구를 위해서 출주한다느니 하는 생각이라면……!',
    ]);
    await coffee.say_and_wait(
      '전 절대로 받아들이지 않겠어요. 설령———— 여기서 당신의 출주를 강제로 막는 한이 있더라도요!',
    );
    era.println();
    await era.printAndWait([coffee.get_colored_name(), '의 두 눈이 갑자기 크게 떠졌다.']);
    await era.printAndWait([
      '순간, 마치 보이지 않는 거대한 손이 ',
      tachyon.get_colored_name(),
      '의 움직임을 제어하는 듯한 감각이 일었다.',
    ]);
    await era.printAndWait([tachyon.sex, '는 제자리에 묶인 듯 움직일 수 없었다.']);
    await era.printAndWait([
      '하지만 그럼에도 불구하고, ',
      tachyon.sex,
      '의 눈빛은 여전히 평온했다.',
    ]);
    await era.printAndWait('그리고……');
    era.println();
    await tachyon.say_and_wait('………후후.');
    await coffee.say_and_wait([c_call_t, '……?']);
    await tachyon.say_and_wait('후후후…… 하하하하!');
    era.println();
    await era.printAndWait([
      '마치 정신이 나간 사람처럼, 이런 상황에서도 ',
      tachyon.get_colored_name(),
      '은 유쾌하게 웃음을 터뜨렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '이보게, ',
      t_call_c,
      '…… 자네, 자의식 과잉이 좀 심한 거 아닌가?',
    ]);
    await coffee.say_and_wait('!?');
    await tachyon.say_and_wait('자네를 위해 달린다니…… 착각하지 말게나.');
    await tachyon.say_and_wait([
      '내 목적은 처음부터 끝까지 단 하나, ',
      tachyon.get_uma_sex_title(),
      '의 한계를 초월하고…… ',
      tachyon.get_uma_sex_title(),
      '의 가능성을 증명하는 것이었어.',
    ]);
    era.println();
    await era.printAndWait([
      '어느샌가, ',
      tachyon.get_colored_name(),
      '을 속박하던 힘이 풀려 있었다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 여유롭게 일어나 몸에 묻지도 않은 먼지를 털어냈다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……그 목적을 달성하기 위해서라면, 무엇을 희생하든 상관없네. 설령 그게 나 자신이라 할지라도.',
    );
    await tachyon.say_and_wait([
      '오히려 자네는 어떤가, ',
      t_call_c,
      '…… 그만한 각오가 되어 있나? 지금의 자네가, 나를 초월할 수 있겠냐는 말일세.',
    ]);
    await coffee.say_and_wait('…………!');
    await tachyon.say_and_wait(
      '……나머지는 레이스가 끝난 뒤에…… 그때 전부 말해주도록 하지.',
    );
    era.println();
    await era.printAndWait([
      '대답을 기다리지 않고, ',
      tachyon.get_colored_name(),
      '은 방을 나섰다.',
    ]);
    await era.printAndWait([
      '방 밖에서 두 사람의 대화가 끝나기를 기다리던 ',
      me.get_colored_name(),
      '과(와) 정면으로 마주쳤다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['……', callname, ', 자네 방에 가서 좀 쉬어야겠군.']);
    era.println();
    await era.printAndWait('……어?');
    era.println();
    await tachyon.say_and_wait('왜 그러나?');
    era.printButton('「이성의 방에 들어가는 건 역시 좀 그렇지 않을까……」', 1);
    era.printButton('「타키온, 지금 나를 유혹하는 거야?」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '바보 같은 소리! ……방금 그렇게 멋있게 말하고 나왔는데, 바로 내 방으로 돌아가면 모양 빠지지 않나. 그러니까 자네 방에 잠시 신세 좀 지겠네.',
    );
    await tachyon.say_and_wait('참…… 자네 방에 실험 기구들은 있지?');
    await tachyon.say_and_wait([
      '방금 ',
      t_call_c,
      '의 그 모습을 보니까, 왠지 갑자기 머릿속에 영감이 떠올라서 말이야……',
    ]);
    await tachyon.say_and_wait(
      '난 내일 레이스에 나가야 하니 오늘 이상한 걸 마실 수는 없고, 자네가 대신 마셔줄 거지? 후후.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '의 과장된 행동을 보며, ',
      me.get_colored_name(),
      '은(는) 자신도 모르게 웃음을 지었다.',
    ]);
    await era.printAndWait('내일이 어떻게 되든, 적어도 오늘의 이 시간만큼은 즐기도록 하자.');
    flags.wait_flag = get_attr_and_print_in_event(32, [5, 5], 0);
  };

  handlers[95 + 39] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    if (edu_marks.plan_b) {
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25),
        c_call_t = sys_get_colored_callname(25, 32),
        c_call_m = sys_get_colored_callname(25, 0);
      await print_event_name('한계를 초월해서……?', tachyon);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 은퇴한 이후로, 실험실에서는 늘 ',
        tachyon.sex,
        '의 유쾌한 목소리가 들려왔다.',
      ]);
      await tachyon.say_and_wait([
        '하하하! ',
        t_call_c,
        '! ',
        t_call_c,
        '! 어서 와서 내 신약을 시험해보게나!',
      ]);
      await coffee.say_and_wait('……시끄러워요.');
      era.println();
      await era.printAndWait([
        '은퇴와 동시에 모든 압박감을 떨쳐버린 듯한 ',
        tachyon.sex,
        '는, 온 에너지를 신약 제조에 쏟아붓고 있었다.',
      ]);
      await era.printAndWait([
        '당연히 그 첫 번째 피해자는 ',
        tachyon.sex,
        '와 가장 가까운 ',
        me.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '였다.',
      ]);
      await era.printAndWait([
        '은퇴 후에 ',
        tachyon.sex,
        '가 상실감에 빠져 기운을 차리지 못하면 어쩌나 걱정했던 ',
        me.get_colored_name(),
        '도, 이제야 조금 안심할 수 있게 되었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '! 자네도 도망갈 생각 말게! 자네 몫은 여기 있네!']);
      era.printButton('군말 없이 약을 받아 마신다', 1);
      era.printButton('「타키온만 즐거울 수 있다면 뭐든 마실게!」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('오호라, 오늘은 웬일로 이렇게 능동적인가?');
        await coffee.say_and_wait([
          '……또 ',
          c_call_m,
          '에게 무슨 약을 먹인 건가요? 솔직히 말하세요.',
        ]);
        await tachyon.say_and_wait(
          '음…… 어제의 것은 영양 흡수 효율을 높이는 거라 파란색 빛이 났고, 오늘의 것은……',
        );
        await coffee.say_and_wait([
          '거짓말…… 분명 무슨 정신개조약이라도 먹인 거겠죠. 안 그러면 ',
          c_call_m,
          '이 저렇게 고분고분하게 그런 이상한 걸 마실 리가 없잖아요.',
        ]);
        await tachyon.say_and_wait('너무 심한 처사로군!');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait('바…… 바보…… 왜 갑자기 그런 낯간지러운 소리를 하는 건가……');
        } else if (relation <= 225) {
          await tachyon.say_and_wait('……아니, 왜 갑자기 그런 기분 나쁜 소릴……');
        } else if (relation >= 225) {
          await tachyon.say_and_wait('에…… 아니, 왜 갑자기 그런 낯간지러운 소리를 하는 거야?');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 어이없다는 표정으로 ',
            me.get_colored_name(),
            '을(를) 빤히 쳐다보았다.',
          ]);
          await era.printAndWait('너무한 반응이었다.');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '? ',
            c_call_m,
            '? 두 분 사이가 어떤 관계인지 조금 설명해주시겠어요? ……저 지금, 별로 침착하지 못할지도 모르겠네요.',
          ]);
        } else {
          await coffee.say_and_wait('……부탁이니까 여기서 꽁냥거리지 좀 말아줄래요?');
        }
      }
      era.drawLine();
      await coffee.say_and_wait(['……맞다, ', c_call_m, ', 슬슬……']);
      era.println();
      await era.printAndWait([
        '한바탕 소란이 지나가고, 드디어 ',
        coffee.get_colored_name(),
        '의 훈련 시간이 되었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 끄덕이며 ',
        coffee.get_colored_name(),
        '와 함께 훈련장으로 향할 준비를 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오? 또 훈련인가? 요즘 ',
        t_call_c,
        '은 왠지 유독 부지런해진 느낌이군.',
      ]);
      await coffee.say_and_wait([
        '……전 언제나 훈련에 진심이었어요. 저를 ',
        c_call_t,
        '와 같은 취급 하지 마세요.',
      ]);
      await coffee.say_and_wait('게다가 연말이 다가오고 있으니까요…… 반드시 친구를 초월해야만 해요.');
      await coffee.say_and_wait('그것 말고도……');
      await coffee.say_and_wait('누군가의 도전장도 받았으니까요……');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '을 똑바로 쏘아보았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 당시 ',
        tachyon.get_colored_name(),
        '이 했던 말을 떠올렸다.',
      ]);
      await coffee.say_and_wait(['전 반드시, ', c_call_t, '를 뛰어넘을 거예요.']);
      await tachyon.say_and_wait('……흥, 할 수 있다면 어디 한번 해보게나.');
      await tachyon.say_and_wait(['한계를 뛰어넘어 보라고! ', t_call_c, '!']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 눈에는 여전히 광기 어린 빛이 일렁이고 있었다.',
      ]);
      await era.printAndWait([
        '다만…… ',
        me.get_colored_name(),
        '의 착각일지도 모르겠지만, 그 눈빛이 조금은 흔들리는 것 같기도 했다.',
      ]);
    } else {
      await print_event_name('최종 요소의 탐구', tachyon);
      await era.printAndWait('가을이 깊어짐에 따라, 연말의 가장 중요한 레이스가 대중의 이목을 끌기 시작했다.');
      era.println();
      await say_by_passer_by_and_wait('기자A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        ', 올해 연말 아리마 기념에서 인기 1위로 꼽히신 것에 대해 소감이 어떠신가요?',
      ]);
      await tachyon.say_and_wait([
        '인기 1위? 딱히…… 아니, 여러분의 성원에 감사드리지. 아리마 기념은……',
      ]);
      await tachyon.say_and_wait('자신의 한계를 뛰어넘는 것을 목표로 전력을 다해 달릴 생각이라네.');
      await say_by_passer_by_and_wait('기자B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '의 목표가 ',
        tachyon.get_uma_sex_title(),
        '의 한계를 넘는 것이라고 하셨는데, 구체적으로 어떤 의미인가요?',
      ]);
      await tachyon.say_and_wait([
        '후후후…… 모든 일이 순조롭게 풀린다면, 아리마 기념에서 직접 확인하실 수 있을 걸세.',
      ]);
      await say_by_passer_by_and_wait('기자C', [
        '현재 아리마 기념을 대비해 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '는 어떤 준비를 하고 계시는지요?',
      ]);
      await tachyon.say_and_wait(
        '경기장 적응이나 육체적 돌파는 말할 것도 없지만, 그 외에도…… 사실, 정신적인 측면의 돌파구를 찾는 중이라네.',
      );
      era.println();
      await era.printAndWait('정신적인 측면의 돌파구.');
      await era.printAndWait('이 화두는 현장의 기자들을 당혹케 했다.');
      await era.printAndWait('그녀가 평소 보여주는 이미지나 이따금 들려오는 소문으로 보아.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 결코 정신론을 입에 담을 법한 ',
        tachyon.get_uma_sex_title(),
        '가 아니었기 때문이었다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait('기자A', [
        '정…… 정신적인 돌파구라고요? ……역시 다음 레이스 상대가 그 ',
        get_chara_talk(25).get_colored_name(),
        '라서 정신적인 도움을 구하시는 건가요?',
      ]);
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 25),
        '가…… 내 상대라고……?',
      ]);
      await say_by_passer_by_and_wait('기자A', '아, 아니신가요?');
      await tachyon.say_and_wait('……아니, 아주 깊이 탐구해볼 만한 가능성이로군, 후후후.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 의미심장한 말을 남긴 채 더 이상의 설명을 덧붙이지 않았다.',
      ]);
      if (love >= 50 && love < 75) {
        await say_by_passer_by_and_wait('기자A', [
          '아, 참…… 그리고 ',
          tachyon.get_colored_name(),
          '님과 트레이너님 사이에 도는 소문에 대해서도 묻고 싶습니다.',
        ]);
        await say_by_passer_by_and_wait('기자A', '두 분께 여쭙겠습니다만……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '을(를) 힐끗 쳐다보았다. 왠지 모르게 ',
          me.get_colored_name(),
          '은(는) 등골이 서늘해지는 기분이 들었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '질문의 의도는 나와 ',
          me.sex,
          ' 사이에…… 어떤 연애 감정 같은 게 있느냐는 것이겠지?',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 다시 한번 ',
          me.get_colored_name(),
          '을(를) 쳐다보았다. 이번에는 ',
          me.get_colored_name(),
          '도 그 의미를 알아챘다. ',
          tachyon.sex,
          '의 눈빛은 「어떻게 대답해줬으면 좋겠나?」라고 묻고 있었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 기자들에게 보이지 않는 각도로 미세하게 고개를 가로저으며 ',
          tachyon.sex,
          '가 알아차려 주기를 바랐다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……이렇게 말해두지. ',
          me.sex,
          '는 나에게 있어 가장 소중한……',
        ]);
        await say_by_passer_by_and_wait('기자A', '가장 소중한……?');
        era.println();
        await era.printAndWait([
          '현장의 모든 시선이 ',
          tachyon.get_colored_name(),
          '의 입술에 집중되었다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '도 마른침을 꿀꺽 삼켰다.']);
        era.println();
        await tachyon.say_and_wait('가장 소중한…… 실험동물이라네.');
        era.println();
        await era.printAndWait('기자들은 그 대답을 듣고 김이 빠진 듯 한숨을 내쉬었다.');
        await era.printAndWait([
          me.get_colored_name(),
          '역시 안도의 한숨을 내쉬었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 몰래 입 모양으로 ',
          me.get_colored_name(),
          '에게 「한 번 빚진 걸세」라고 속삭였다.',
        ]);
        await era.printAndWait([
          '하지만 지금의 ',
          me.get_colored_name(),
          '에게는 그런 걸 신경 쓸 겨를이 없었다.',
        ]);
        era.println();
        await era.printAndWait('여담으로, 그날 이후 다음 날 신문 1면의 헤드라인은……');
        await me.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          ', 소문에 정면 대응! 트레이너는 가장 소중한 존재라고 선언!',
        ]);
        await era.printAndWait('…………이거, 결국 아무것도 회피하지 못한 거 아닌가?');
      }
    }
  };

  handlers[95 + 47] = async (tachyon, me, callname, flags, relation, love) => {
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('추월당한 한계', tachyon);
    await era.printAndWait([
      '꿈속의 ',
      tachyon.get_colored_name(),
      '은 다시 그날로 돌아가 있었다.',
    ]);
    era.println();
    await era.printAndWait([
      '경기장의 환호성, 그리고 ',
      me.sex,
      '의 시선은 결승선을 통과하며 담담히 손을 흔드는 그 ',
      tachyon.get_uma_sex_title(),
      '에게 집중되어 있었다.',
    ]);
    await era.printAndWait([
      '당연한 일이었다. 오늘의 주인공은 다름 아닌 ',
      coffee.get_colored_name(),
      ' 였으니까.',
    ]);
    await era.printAndWait([
      '자신이 주인공이 아닌 이상, 주변 사람들이 ',
      tachyon.sex,
      '에게서 시선을 떼는 것은 지극히 이성적인 결과였다.',
    ]);
    await era.printAndWait('하지만……');
    await era.printAndWait('어째서일까.');
    era.println();
    await tachyon.say_and_wait('약속하지 않았나? 계속 나를 지켜봐 주겠다고.', true);
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), '은 더 이상 달릴 수 없었다.']);
    await era.printAndWait([
      '그래서 그 시선을 ',
      coffee.get_colored_name(),
      '에게로 옮겨버린 것인가?',
    ]);
    era.println();
    await era.printAndWait([
      '관중들 사이에서는 「 ',
      tachyon.get_colored_name(),
      '보다 ',
      coffee.get_colored_name(),
      '가 훨씬 강하다」고 외치는 목소리들이 들려왔다.',
    ]);
    await era.printAndWait([
      '하지만 그런 비교질보다도, ',
      me.sex,
      '의 눈빛이 자신을 더 아프게 찔러왔다.',
    ]);
    era.println();
    await era.printAndWait([
      '한때 오직 자신을 바라볼 때만 머금었던 그 특유의 눈빛이, 어느새 ',
      me.sex,
      '가 ',
      t_call_c,
      '을 바라보는 두 눈동자에 깃들어 있었다.',
    ]);
    await tachyon.say_and_wait('그 눈빛은, 내 전유물이 아니었던가?');
    await tachyon.say_and_wait('나에게 화상을 입었던 자네의 두 눈은 벌써 다 나은 것인가?');
    await tachyon.say_and_wait('나를, 홀로 남겨두려는 건가?');
    era.println();
    await era.printAndWait([
      '꿈속의 ',
      me.sex,
      '와 ',
      t_call_c,
      '은 점점 멀어져만 갔다.',
    ]);
    await era.printAndWait('자신을 칠흑 같은 공간 속에 내버려 둔 채로.');
    era.println();
    await tachyon.say_and_wait('안 돼…… 기다려, 기다려주게……!');
    era.println();
    await era.printAndWait('그들을 뒤쫓고 싶었다.');
    await era.printAndWait('하지만…… 다리가 말을 듣지 않았다.');
    await era.printAndWait('고개를 숙이고서야 깨달았다…… 아아.');
    await era.printAndWait(
      '이미 바스러진 다리로, 앞을 향해 달려가는 사람을 어떻게 뒤쫓을 수 있겠는가.',
    );
    era.println();
    await era.printAndWait('마치 자신의 목소리를 들은 듯, 그 뒷모습이 뒤를 돌아보았다.');
    await era.printAndWait('하지만 그 눈 속의 빛은, 이미 사라진 뒤였다.');
    await era.printAndWait(
      '아니, 사라진 게 아니었다———— 그저 다른 사람에게 옮겨갔을 뿐이었다.',
    );
    era.println();
    await era.printAndWait('싫어.');
    await era.printAndWait('나를 봐줘.');
    await era.printAndWait('예전처럼 나를 바라봐달란 말이야.');
    await era.printAndWait('나를 버리지 마, 나를 혼자 두지 마.');
    era.println();
    await era.printAndWait('하지만.');
    await era.printAndWait([
      '달릴 수 없는 ',
      tachyon.get_colored_name(),
      '에게, 상대의 발걸음을 붙잡아둘 자격 따위가 있을 리 없었다.',
    ]);
    era.drawLine();
    await era.printAndWait([tachyon.get_colored_name(), '은 꿈에서 깨어났다.']);
    await era.printAndWait('무슨 꿈을 꿨는지 이제는 잘 기억나지 않았다.');
    await era.printAndWait([
      '……하지만 몸에 남은 이 불쾌한 감각으로 보아, 보나마나 재팬 컵 때의 일이겠지.',
    ]);
    await era.printAndWait([t_call_c, '는 이미 한계를 뛰어넘었다.']);
    await era.printAndWait([tachyon.get_colored_name(), '을 초월했다.']);
    await era.printAndWait([
      '그러니…… 설령 ',
      me.sex,
      '가 ',
      t_call_c,
      '에게 매료되었다 해도, 그건 지극히 당연한 일이겠지.',
    ]);
    await era.printAndWait([
      '결국, 그것은 ',
      tachyon.get_colored_name(),
      '을 넘어선 주법이었으니까.',
    ]);
    era.println();
    await tachyon.say_and_wait('……싫어.');
    if (love <= 50) {
      await era.printAndWait('이제 와서 깨닫는 건, 너무 늦은 걸까.');
      await era.printAndWait(
        '그토록 오랜 시간 곁에 있어 준 것을 언제나 당연하게만 여겨왔다.',
      );
      await era.printAndWait([
        '잃기 직전이 되어서야 비로소 깨달았다. 자신이 이미 ',
        me.sex,
        ' 없이는 살 수 없게 되었다는 것을.',
      ]);
    }
    era.println();
    await era.printAndWait([
      me.sex,
      '라면, 여느 때처럼 자신을 돌봐줄 것이다.',
    ]);
    await era.printAndWait([
      '여전히 예전처럼, ',
      tachyon.get_colored_name(),
      '의 요구를 묵묵히 들어줄 것이다.',
    ]);
    await era.printAndWait(['왜냐하면 ', me.sex, '는 그런 상냥한 사람이니까.']);
    await era.printAndWait([
      '……하지만, 고작 그런 것만으로는 ',
      tachyon.get_colored_name(),
      '을 만족시킬 수 없었다.',
    ]);
    await era.printAndWait(['자신을 따스하게 비추었던 건 ', me.sex, '의 빛이었다.']);
    await era.printAndWait('그 빛이 희망을 갖게 했고, 레이스에 대한 갈망을 싹트게 했다.');
    await era.printAndWait('그러니 제발…… 오직 나의 것이었던 그 빛을 빼앗아가지 말아다오.');
    era.println();
    await era.printAndWait(
      'Jingle bell Jingle bell Jingle all the way～～',
    );
    era.println();
    await era.printAndWait('문득, 창밖에서 크리스마스 캐럴 소리가 울려 퍼졌다.');
    await era.printAndWait([
      '크리스마스가 다가오고 있었지만, ',
      tachyon.get_colored_name(),
      '의 마음은 여전히 어둠 속에 잠겨 있었다.',
    ]);
    if (love < 75) {
      era.set('love:32', 75);
    }
  };
};