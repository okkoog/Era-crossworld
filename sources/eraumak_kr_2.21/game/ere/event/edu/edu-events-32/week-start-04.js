const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 25] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    await print_event_name('A or B', tachyon);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '타키온 선배가 월계배에 나간다는 게 정말인가요!',
    );
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'B',
      '기대돼…… 타키온 선배의 주법은 정말 사람을 매료시킨다니까……',
    );
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'C',
      '꼭, 꼭 보러 갈 거야!',
    );
    era.println();
    await era.printAndWait('현재 학원에서 가장 화제의 중심에 있는 것, 그것은 바로 월계배였다.');
    await era.printAndWait('학생회장이 조직한, URA 파이널스에 필적하는 규모의 레이스인 월계배.');
    await era.printAndWait(
      '학년이나 본격화의 시작 및 종료 여부와 상관없이, 의지만 있다면 누구든 참가할 수 있었다.',
    );
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 역시 이 좋은 데이터 수집 기회를 놓칠 리 없었다.',
    ]);
    await era.printAndWait([
      '최근 몇 주 동안은 훈련에 전력을 다하고 있었다. ',
      tachyon.sex,
      '의 말에 따르면, 자기 자신이 상응하는 수준까지 올라가지 않으면 상대의 가능성을 끌어낼 수 없기 때문이라고 했다.',
    ]);
    era.println();
    await era.printAndWait([
      '오늘도 ',
      tachyon.sex,
      '는 훈련장에서 자신을 단련하는 데 힘쓰고 있었다.',
    ]);
    era.printButton('「타키온! 오늘 훈련 성과도 과거 기록을 대폭 경신했어!」', 1);
    era.printButton('「정말 대단해! 타키온!」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '……하하하! 자네의 그 과장된 화법에는 이제 익숙해졌다만, 들을 때마다 나도 모르게 움찔하게 되는군……',
    );
    await tachyon.say_and_wait('정말이지, 진지하게 묻겠는데 자네는 부끄럽지도 않은 건가?');
    era.printButton('「전부 진심에서 우러나온 말이야!」', 1);
    era.printButton('「타키온을 돕기 위해서라면 내 목숨이라도 아깝지 않아!」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '과장이 심하군…… 그런 달콤한 말보다는 실제로 내 실험을 도와주는 편이 훨씬 의미 있네.',
    );
    era.println();
    await era.printAndWait([
      '그 말을 내뱉으며, ',
      tachyon.get_colored_name(),
      '은 갑자기 가운 아래에서 시험관 몇 개를 꺼냈다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '그러고 보니 마침 잘 됐군…… 이건 오늘 아침에 영감이 떠올라 만든 약이라네……',
    );
    await tachyon.say_and_wait(
      '어떤가? 자네가 지금 이걸 마셔주고, 내가 다음 바퀴를 돌고 올 때까지 약효를 보고해 준다면 성과가 아마 그 어떤 것보다……?',
    );
    era.println();
    await era.printAndWait([
      '말을 다 끝내기도 전에, ',
      tachyon.get_colored_name(),
      '은 멍하니 굳어버렸다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 눈앞에는 이미 약물을 들이켜고 빈 시험관 세 개를 들고 있는 ',
      me.get_colored_name(),
      '이(가) 서 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('자네……');
    era.printButton('「이걸로 타키온이 안심할 수 있겠지?」', 1);
    era.printButton('「이걸로 타키온에게 도움이 되겠지?」', 2);
    await era.input();
    await tachyon.say_and_wait('……');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 왠지 모르게 한참 동안 아무 말도 하지 못했다.',
    ]);
    era.printButton('「타키온?」', 1);
    await era.input();
    await tachyon.say_and_wait('……정말이지…… 자네는 대체 어디까지 모든 것을 뒤흔들어 놓아야 직성이 풀리는 건가……');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 머리를 짚으며 허탈한 표정을 지었다. 마치 무언가 말하고 싶은 것이 있는 듯했다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      ', 잠시 내 실험실로 오게나…… 상의할 일이 있네.',
    ]);

    era.drawLine();

    await tachyon.say_and_wait('그럼…… 이야기를 시작하도록 하지.');
    era.println();
    await era.printAndWait([
      '실험실 안에서 ',
      me.get_colored_name(),
      '은(는) 정자세로 앉아 ',
      tachyon.get_colored_name(),
      '의 이야기를 기다렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait('내 다리는…… 아마도, 다시는 달릴 수 없게 될 거라네.');
    era.println();
    await era.printAndWait('하늘이 무너지는 듯한 내용을 그녀는 덤덤하게 내뱉었다.');
    await era.printAndWait([
      tachyon.sex,
      '는 ',
      me.get_colored_name(),
      '이(가) 받아들일 시간을 주기 위해 잠시 멈췄다가, 이내 말을 이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '나 자신은 이미 각오하고 있었네…… 내 다리는 본래 일반적인 ',
      tachyon.get_uma_sex_title(),
      '보다 약하게 태어났으니까. 그러니 딱히 받아들이지 못할 것도 없지.',
    ]);
    await tachyon.say_and_wait('하지만, 그렇다고 해서 내 꿈을 포기하겠다는 뜻은 아니야.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 꿈…… ',
      tachyon.get_uma_sex_title(),
      '의 한계를 넘어, ',
      tachyon.get_uma_sex_title(),
      '의 가능성을 목격하는 것.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '설령 그 주인공이 내가 아니어도 상관없네. 그저 지켜볼 수만 있다면 아무래도 좋아…… 설령, 누군가를 위한 디딤돌로 남게 된다 하더라도 말이네.',
    );
    await tachyon.say_and_wait([
      '그게 누구든…… 이것이 ',
      tachyon.get_uma_sex_title(),
      '의 한계가 아니라는 것을 증명할 수만 있다면, 이것은 그저 ',
      tachyon.get_colored_name(),
      '이라는 개체의 한계일 뿐이라는 걸 증명할 수 있다면…… 난 그걸로 만족하네.',
    ]);
    await tachyon.say_and_wait(
      '정말로 진심으로 그렇게 생각했어. 이번 월계배도…… 내가 아닌 다른 누군가가 성공할 수 있도록……',
    );
    await tachyon.say_and_wait(
      '가장 많은 데이터를 수집하고, 가장 완벽한 계획을 세우고…… 비록 내 모든 것을 쏟아부어서라도……',
    );
    await tachyon.say_and_wait('하지만…… 그런 내 결심을 뒤흔들어 놓은 건…… 바로 자네야.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 복잡한 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait('슬픔?');
    await era.printAndWait('고통?');
    await era.printAndWait('희망?');
    await era.printAndWait('절망?');
    await era.printAndWait([
      '온갖 감정이 뒤섞인 듯한 시선이 ',
      me.get_colored_name(),
      '에게 향했다.',
    ]);
    era.println();
    await tachyon.say_and_wait('내가 포기하고 싶어질 때마다, 늘 그런 눈으로 나를 바라보던 자네……');
    await tachyon.say_and_wait(
      '정말이지, 솔직히 말해서 포기하려는 사람에게 그 눈빛이 얼마나 끔찍하게 느껴지는지 아나?',
    );
    await tachyon.say_and_wait('그토록 순수하고, 오로지 신뢰만이 담긴 그 눈빛 말이야……');
    era.println();
    await era.printAndWait([
      '입으로는 끔찍하다고 말하면서도, ',
      tachyon.get_colored_name(),
      '의 소용돌이치는 눈빛 속에서 혐오의 감정만은 찾아볼 수 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '그러니, ',
      callname,
      ', 자네는 모든 것을 뒤흔들어 놓은 책임을 져야 하네…… 나아갈 길을 선택해야 할 책임을 말이야.',
    ]);
    const t_call_c = sys_get_colored_callname(32, 25);
    await tachyon.say_and_wait([
      '……내가 예전에 물었던 걸 기억하나? 자네가 ',
      t_call_c,
      '을 어떻게 생각하는지에 대해서 말일세.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 고개를 끄덕였다. ',
      tachyon.get_colored_name(),
      '의 ',
      get_chara_talk(25).get_colored_name(),
      '에 대한 관심은 다른 ',
      tachyon.get_uma_sex_title(),
      '들에 비해 유독 컸다…… ',
      get_chara_talk(9).get_colored_name(),
      '을 제외하면 말이다.',
    ]);
    await era.printAndWait('어쨌든 그 관심은 결코 단순한 실험체에 대한 관찰이 아니었다.');
    await era.printAndWait('그 이유에 대해 스스로도 여러 번 고민해 보았지만, 도무지 답을 알 수 없었다.');
    era.println();
    await tachyon.say_and_wait([
      '만약 내가 계속 달릴 수 없게 될 경우의 플랜 B…… 나는 모든 것을 ',
      t_call_c,
      '에게 맡길 생각이네. ',
      t_call_c,
      '이 나를 대신해 가능성의 세계를 목격하게 하는 거지.',
    ]);
    await tachyon.say_and_wait([
      '그 이후로 나는 모든 레이스 참가를 거부할 걸세…… ',
      t_call_c,
      '이 성장할 때까지. 그리고 ',
      tachyon.sex,
      '가 한계를 돌파할 수 있도록, 나는 남은 모든 힘을 다해 ',
      tachyon.sex,
      '의 디딤돌이 될 것이네.',
    ]);
    await tachyon.say_and_wait(
      '모든 것을 희생해서 가장 성공 가능성이 높은 선택지를 완성한다. 그것이 연구자네. 설령 희생되어야 할 것이 자기 자신이라 하더라도 말이야.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 자신의 감정을 철저히 배제한 선택지를 담담하게 이야기했다.',
    ]);
    await era.printAndWait([
      '마치 수없이 연습해 온 것처럼…… 어쩌면 ',
      tachyon.sex,
      '는 아주 오래전부터 언젠가 이 말을 당신에게 전해야 할 순간을 각오하고 있었을지도 모른다.',
    ]);
    await era.printAndWait(['이어지는 ', tachyon.sex, '의 목소리가 미세하게 떨렸다.']);
    era.println();
    await tachyon.say_and_wait('그리고…… 두 번째 선택지네. 내가 처음부터 포기했던 플랜 A.');
    await tachyon.say_and_wait([
      '이대로 계속 나아가는 거지. ',
      callname,
      ', 자네가 말한 목표인 3관을 향해, 그리고 내 목표인 한계 돌파를 향해 나아가는 거야…',
    ]);
    await tachyon.say_and_wait(
      '……동화처럼 아름답지만, 그만큼 허황된 선택이지. 그리고 자네는 꿈이 실현될 때까지, 혹은…… 모든 것이 시들어버릴 때까지 내 곁을 지켜야 하네.',
    );
    era.println();
    await tachyon.say_and_wait(
      '자, 선택하게나…… 부정하지 않겠어. 이건 책임의 전가야. 모든 책임을 자네에게 떠넘기는 거지. 하지만……',
    );
    await tachyon.say_and_wait(
      '내게 희망을 가져다준 것은 자네니까. 그러니 이것 또한 자네가 져야 할 책임 아니겠나.',
    );
    await tachyon.say_and_wait(['자, ', callname, ', 자네 차례야. 선택을 내리게나.']);
    era.println();
    era.print([me.get_colored_name(), '의 결정은……']);
    era.printButton('플랜 A를 선택한다', 1);
    era.printButton('플랜 B를 선택한다', 2, {
      disabled:
        era.get('cflag:25:육성턴수합산') !== era.get('cflag:32:육성턴수합산'),
    });
    era.print('【경고: 이 선택은 맨하탄 카페의 트레이닝 및 레이스를 고정합니다】', {
      color: buff_colors[3],
      offset: 1,
      width: 23,
    });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '만약 정말로 ',
        tachyon.get_colored_name(),
        '의 말대로 그녀에게 희망을 가져다준 사람이 자신이라면.',
      ]);
      await era.printAndWait([
        '그렇다면 ',
        tachyon.sex,
        '의 꿈을 향한 여정을 함께하는 것 또한 자신의 책임이자 의무일 것이다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 말대로 이 이야기가 자신으로부터 시작된 것이라면, 어떤 결말을 맞이하든 자신은 모든 것이 끝날 때까지 무대 위에 서 있어야 마땅했다.',
      ]);
      era.println();
      await era.printAndWait('그러니까……');
      era.printButton('「……안 돼」', 1);
      era.printButton('「그런 건 아니야」', 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '?']);
      era.println();
      await era.printAndWait([tachyon.sex, '의 곁을 지키는 것뿐만이 아니었다.']);
      await era.printAndWait(['그저 무대 위에 머무르는 것만이 아니었다.']);
      era.println();
      await era.printAndWait([
        '나는, ',
        tachyon.get_colored_name(),
        '의 트레이너다.',
      ]);
      await era.printAndWait([tachyon.sex, '와 2인 3각으로 함께 나아가는 트레이너다.']);
      await era.printAndWait([tachyon.sex, '의 뒤를 따르는 것이 아니라, 어깨를 나란히 하고 걷는 사람이다.']);

      era.printButton('「……난 플랜 A를 고르겠어」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……그런가? 그렇다면 나를 위해 뼈를 깎는 노력을 하게나. 그리고 나를 똑똑히 지켜보게…… 타오르든, 아니면 시들어 사라지든.',
      );
      era.println();
      await era.printAndWait('아니, 틀렸다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 저으며 ',
        tachyon.get_colored_name(),
        '의 말을 가로막았다.',
      ]);
      era.println();
      await me.say_and_wait('지켜보는 게 아니야.');
      era.println();
      await tachyon.say_and_wait('……?');
      era.printButton('「내가 너와 『함께』, 『우리』의 꿈을 실현할 거야」', 1);
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '은 침묵에 빠졌다.']);
      await era.printAndWait([
        tachyon.sex,
        '의 표정에는 분노가 서린 듯도 했고, 한편으로는 일말의 기쁨이 섞인 듯도 했다.',
      ]);
      await era.printAndWait('그리고……');
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait('……모르모트 주제에 인간과 대등한 지위를 얻고 싶다는 건가?');
        era.println();
        await era.printAndWait([
          '변함없이 오만한 말투가 ',
          me.get_colored_name(),
          '을(를) 밑바닥으로 밀어내려 했다.',
        ]);
        await era.printAndWait('어깨를 나란히 하고 걷는다는 것은 상대 또한 동행할 의사가 있어야 성립한다.');
        await era.printAndWait(
          '2인 3각의 과정에서 한쪽만이 끈을 유지하려 한다면 결코 앞으로 나아갈 수 없는 법이다.',
        );
        await era.printAndWait('이런 말투라면, 분명……');
        era.println();
        await tachyon.say_and_wait(
          '그렇다면 내 발걸음을 따라잡으려 필사적으로 노력해 보게나. 내가 무시할 수 없을 정도의 광채를 내뿜으며…… 자네의 가능성을 증명해 보란 말일세!',
        );
      } else if (love < 75) {
        await tachyon.say_and_wait('……후훗, 하하하하!');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          tachyon.get_colored_name(),
          '이 만족스러운 미소를 지었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '그런가, 그렇군. 어깨를 나란히 하는 파트너, 함께 싸우는 전우…… 후후, 이거 꽤나 흥미롭지 않은가!',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 두 팔을 벌리고 고개를 돌려 뒤에 서 있는 ',
          me.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '그럼 따라와 보게나, ',
          callname,
          '! 내 위도 아니고 내 아래도 아닌 동반자여. 자네가 정말 해낼 자신이 있다면, 어디 한번 보여주게나.',
        ]);
      } else {
        await tachyon.say_and_wait([
          '그러니까…… ',
          callname,
          ', 자네 진심인가?',
        ]);
        era.println();
        await era.printAndWait('진심……?');
        await era.printAndWait([
          '정말로 ',
          tachyon.get_colored_name(),
          '과 함께 걷고 싶은가? 그런 뜻이었을까?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 고개를 끄덕여 결의를 보였다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……그리고 동행한다는 것은, 즉, 동거…… 으음……');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 세차게 고개를 저었다.']);
        await era.printAndWait('무슨 일이 일어난 건지는 모르겠지만, 뭔가 착오가 있는 듯한데……?');
        era.println();
        await tachyon.say_and_wait(
          '……흠흠, 알겠네. 그럼 우리의 목표를 향해 함께 노력하도록 하지.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 조금 진정된 듯한 목소리로 말했다.',
        ]);
        await era.printAndWait('자세한 사정은 모르겠지만, 어쨌든 이것으로 인정을 받았다는 증거일 것이다.');
        await era.printAndWait('앞으로 더욱 정진해야겠다고 다짐했다!');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 월계배 참가를 포기했다는 소식이 학원 전체에 퍼졌다.',
      ]);
      await era.printAndWait([
        '트레이너로서 ',
        me.get_colored_name(),
        ' 역시 비난을 피할 수 없었다.',
      ]);
      await era.printAndWait([
        '하지만…… 이것이 ',
        tachyon.sex,
        '와 함께 걷기 위해 지불해야 할 대가일 것이다.',
      ]);
      await print_event_name('Advanced', tachyon);
      edu_marks.uma_limit = 0;
      sys_change_fame(-20);
    } else {
      await era.printAndWait('꿈을 타인에게 맡긴다…… 비록 가혹한 길이라 할지라도.');
      await era.printAndWait('이성적으로 판단했을 때, 이것이 가장 실현 가능한 희망일 것이다.');
      await era.printAndWait([
        tachyon.sex,
        '가 말하는 운명은 차치하더라도, ',
        tachyon.sex,
        '의 다리 상태를 보면…… 트레이너로서도, 그리고 ',
        tachyon.get_colored_name(),
        '을 동경하는 한 명의 팬으로서도.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그 과정에서 ',
        tachyon.sex,
        '가 겪게 될 고통을 차마 무시할 수 없었다.',
      ]);
      await era.printAndWait('가능성이 너무 낮았다.');
      await era.printAndWait('눈앞의 길은 가시밭길로 가득했다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 할 수 없었다. 겁쟁이라 불려도 상관없었다.',
      ]);
      await era.printAndWait([
        '그저 ',
        tachyon.get_colored_name(),
        '이 건강할 수만 있다면 그걸로 충분했다.',
      ]);
      await era.printAndWait('그 외에는 아무것도 바라지 않았다.');
      era.println();
      const coffee = get_chara_talk(25);
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신이 담당하는 또 다른 ',
        tachyon.get_uma_sex_title(),
        '를 떠올렸다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' 못지않게 ',
        me.get_colored_name(),
        '을(를) 매료시켰던 주법과 그 뒷모습을 떠올렸다.',
      ]);
      await era.printAndWait('｢대체｣ 라는 말은 오만하고 이기적인 단어였다.');
      await era.printAndWait(
        '그 누구도 다른 사람을 완전히 대신할 수는 없으며, 누군가를 대신하기 위해 태어난 존재 역시 없기 때문이다.',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          '하지만, 만약 ',
          tachyon.get_colored_name(),
          '의 꿈을 ｢계승｣ 할 수 있는 존재가 있다면, 그것은……',
        ]);
        era.println();
        await era.printAndWait(['필시 ', coffee.get_colored_name(), ' 뿐일 것이다.']);
        era.println();
        await era.printAndWait([
          '아무 말 없는 ',
          me.get_colored_name(),
          '을(를) 보며, ',
          tachyon.get_colored_name(),
          ' 역시 ',
          me.get_colored_name(),
          '의 마음속 결단을 짐작했다.',
        ]);
        await era.printAndWait([
          '그녀는 그저 ',
          me.get_colored_name(),
          '이(가) 먼저 입을 열어주기를 기다리고 있었다.',
        ]);
      } else {
        await era.printAndWait(['특히 ', coffee.get_colored_name()]);
        era.printButton(`「……${coffee.sex}는 누군가의 대용품이 아니야」`, 1);
        await era.input();
        await tachyon.say_and_wait(['후훗, ', tachyon.sex, '를 그렇게까지 감싸다니……']);
        await tachyon.say_and_wait([
          '안심하게나, 나도 ',
          tachyon.sex,
          '가 누군가의 대용품이라고 말하려는 게 아니야……',
        ]);
        await tachyon.say_and_wait([
          '맞네, 그저 지나가던 친절한 ',
          tachyon.get_uma_sex_title(),
          ' 한 명이 ',
          coffee.get_colored_name(),
          '와 그 트레이너에게 제안하는 도움일 뿐이라네.',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          '와 ',
          coffee.get_colored_name(),
          '의 트레이너」. 그 문장을 내뱉을 때, ',
          tachyon.get_colored_name(),
          '의 표정에는 결코 숨길 수 없는 상실감이 스쳐 지나갔다.',
        ]);
        await era.printAndWait([
          '……그래, 이 선택을 내린 이상 자신은 이제 온전히 ',
          coffee.get_colored_name(),
          '의 트레이너가 되는 것이다…… 하지만, 이 선택이 분명 ',
          tachyon.get_colored_name(),
          '에게도 최선의 선택이 될 것이라 믿었다.',
        ]);
      }
      era.printButton('「……난 플랜 B를 선택하겠어」', 1);
      await era.input();
      await tachyon.say_and_wait('……그렇군.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '의 선택을 듣고 별다른 말 없이 고개를 끄덕였다.',
      ]);
      await era.printAndWait([
        '방 안에는 숨이 막힐 듯한 침묵이 흘렀다. ',
        me.get_colored_name(),
        '이(가) 이 침묵을 견디지 못하고 무언가 말을 꺼내려던 찰나.',
      ]);
      era.println();
      await tachyon.say_and_wait('……하하하하!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 갑자기 웃음을 터뜨려 ',
        me.get_colored_name(),
        '을(를) 깜짝 놀라게 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('좋네, 좋아! 역시 자네는 올바른 선택을 내릴 줄 아는군!');
      era.println();
      await era.printAndWait('올바른 선택…… 인가?');
      era.println();
      await tachyon.say_and_wait(
        '솔직히 말하면, 자네가 정말 플랜 A를 고르면 어쩌나 조금 겁이 났거든. 역시 나 같은 인간에게는 훈련이니 레이스니 하는 것보다 무대 뒤에서 연구나 하는 게 훨씬 잘 어울려, 하하하!',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' 본인이 그렇게 말하니, 이것이 정답인 것이리라.',
      ]);
      await era.printAndWait([
        '이것이야말로 ',
        tachyon.sex,
        '에게 가장 어울리는, 지극히 이성적인 선택이 아닌가.',
      ]);
      await era.printAndWait('분명 그럴 것이다.');
      await era.printAndWait('틀림없을 것이다.');
      await era.printAndWait([
        '그렇지 않다면…… 자신이 포기해 버린 것이 된다. 자신의 담당 ',
        tachyon.get_uma_sex_title(),
        ', 자신의 빛을 배신한 셈이 되지 않는가.',
      ]);
      era.println();
      await tachyon.say_and_wait(['맞다, ', callname, ', 내일 잊지 말고 약 실험하러 오게나.']);
      await era.printAndWait('…………에? 이 상황에서도 약 실험을 해야 해?');
      await era.printAndWait([
        me.get_colored_name(),
        '의 얼빠진 표정 때문인지, ',
        tachyon.get_colored_name(),
        '은 웃음을 터뜨렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '후훗…… 당연하지. 다만 내일부터 테스트할 약들은 전부 ',
        t_call_c,
        '에게 쓰일 것들이라네……',
      ]);
      await tachyon.say_and_wait(
        '그러니 각오하게나. 내일부터는 테스트해야 할 약이 훨씬 많아질 테니까.',
      );
      await tachyon.say_and_wait([
        t_call_c,
        '이 한계에 도달하기 위한 기초를 다지게 하려면, 예전보다 할 일이 산더미처럼 많거든.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 호탕하게 웃으며 휴게실을 나갔다. 자신의 선택이 ',
        tachyon.sex,
        '에게 별다른 영향을 주지 않은 것일까……?',
      ]);
      await era.printAndWait([
        '마음 한구석에 여전히 불안함이 남았지만, ',
        me.get_colored_name(),
        '은(는) 서둘러 그 감정을 털어냈다. ',
        coffee.get_colored_name(),
        '를 위해서뿐만 아니라 ',
        tachyon.get_colored_name(),
        '을 위해서라도 자신은 더욱 노력해야만 했다.',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '은 월계배에 참가했다.']);
      await era.printAndWait([
        '이미 본격화를 마친 시니어급 라이벌들도, 동기의 강자들도, 심지어 드림 트로피 리그의 선배들까지도 ',
        tachyon.sex,
        '에 의해 평등하게 추월당했다.',
      ]);
      await era.printAndWait('여전히 눈을 뗄 수 없는 그 눈부신 주법.');
      await era.printAndWait('여전히 빛과도 같은 질주.');
      await era.printAndWait('빛과 같이, 찰나의 순간 사라져버리는 질주였다.');
      era.println();
      await era.printAndWait([
        '이후, ',
        tachyon.get_colored_name(),
        '은 트윙클 시리즈 참가를 반영구적으로 중단한다고 선언했다.',
      ]);
      await era.printAndWait('이 발표는 미디어에 커다란 파장을 불러일으켰다.');
      await era.printAndWait([
        '하지만 그 어떤 것도 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.sex,
        '의 동행을 막을 수는 없었다.',
      ]);
      edu_marks.plan_b = 1;
      edu_marks.glass_leg = 1;
      edu_marks.uma_limit = 0;
      await print_event_name('Betray', tachyon);
    }
  };

  handlers[47 + 29] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('매체 대응 방법', tachyon);
    await era.printAndWait('여름 합숙 중.');
    await era.printAndWait([
      tachyon.get_uma_sex_title(),
      '들에게 있어 합숙은 휴식과 실력 향상을 겸하는 소중한 시간이었다.',
    ]);
    await era.printAndWait([
      '기자들에게 있어서는 평소 레이스 때가 아니면 쉽게 볼 수 없는 ',
      tachyon.get_uma_sex_title(),
      '들을 인터뷰할 수 있는 귀중한 기회였다.',
    ]);
    await era.printAndWait('그 때문에 파파라치들은 일찌감치 합숙소 근처에 모여들었다.');
    await say_by_passer_by_and_wait('기자 A', '보이나요?');
    await say_by_passer_by_and_wait('기자 B', '조급해하지 말게, 아직 다 내리지 않았네.');
    await say_by_passer_by_and_wait(
      '기자 C',
      '왔다, 왔어! 저거 보세요, 트레이너가 빛을 내뿜고 있는 저 팀입니다!',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '은 차에서 내리자마자 기자들에게 포위당했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 아차 싶어 서둘러 몸의 광량을 줄였으나, 이미 때늦은 뒤였다.',
    ]);
    await say_by_passer_by_and_wait('기자 A', [
      '실례합니다, ',
      tachyon.get_colored_name(),
      ' 씨가 월계배 참가를 거부한 이유는 무엇입니까?',
    ]);
    await say_by_passer_by_and_wait('기자 B', '무슨 사정이라도 있는 건가요?');
    await say_by_passer_by_and_wait('기자 C', '학생회장에 대한 불신 때문인가요?');
    await era.printAndWait(
      '우와, 골치 아픈 질문들뿐이네. 특히 마지막 기자는 생각이 아주 위험하잖아. 갈등을 조장하려는 건가?',
    );
    await era.printAndWait([
      '몰려드는 기자들을 향해 ',
      me.get_colored_name(),
      '은(는) 결정했다……',
    ]);
    era.printButton('인내심 있게 설명한다 (아그네스 타키온의 컨디션 하락)', 1);
    era.printButton('쫓아낸다 (명성 하락)', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 기자들에게 팀의 목표는 연말의 국화상이라고 차근차근 설명했다.',
      ]);
      await era.printAndWait(
        '따라서 그전까지는 다른 일정들을 미뤄야 했으며, 현재 회장에 대한 불만 같은 것은 전혀 없다고 덧붙였다.',
      );
      await era.printAndWait([
        '기자들을 상대하느라 시간이 꽤 지체되었고, 타키온의 기분은 눈에 띄게 불쾌해졌다.',
      ]);
      await era.printAndWait([
        '이를 본 ',
        me.get_colored_name(),
        '은(는) 서둘러 적당한 핑계를 대고 인터뷰를 마친 뒤 ',
        tachyon.get_colored_name(),
        '를 데리고 합숙소로 들어갔다.',
      ]);
      flags.wait_flag = sys_change_motivation(32, -1);
    } else {
      await era.printAndWait('아, 정말 시끄럽네.');
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '은 서로 눈빛을 교환했다.',
      ]);
      await era.printAndWait([
        '오랜 시간 호흡을 맞춰온 덕분에, ',
        tachyon.sex,
        '는 즉시 ',
        me.get_colored_name(),
        '이(가) 무엇을 하려는지 이해하고 가방에서 선글라스를 꺼냈다.',
      ]);
      await era.printAndWait('그리고……');
      era.printButton('「진심으로 발광!」', 1);
      era.printButton('「태양권!」', 2);
      await era.input();
      await say_by_passer_by_and_wait('기자 A', '내 눈!');
      await say_by_passer_by_and_wait('기자 B', '너무 눈부셔!');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '의 120% 전력 발광 앞에 태양조차 무색해질 정도였다.',
      ]);
      await era.printAndWait([
        '기자들이 눈을 비비는 틈을 타, ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '를 데리고 재빨리 합숙소 건물 안으로 몸을 숨겼다.',
      ]);
      sys_change_fame(-20);
    }
  };
};