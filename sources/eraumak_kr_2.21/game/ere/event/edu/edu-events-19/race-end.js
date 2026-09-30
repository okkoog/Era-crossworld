const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  diamond_lord,
  say_by_diamond_lord,
} = require('#/event/edu/edu-events-19/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    digital,
    me,
    callname,
    extra_flag,
  ) => {
    if (era.get('cflag:19:육성턴수합산') >= 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('데뷔전 승리', digital);
    await era.printAndWait([
      '데뷔전, ',
      digital.get_colored_name(),
      '은 이 레이스에서 훌륭하게 1위를 차지했다. 그리고……',
    ]);
    await era.printAndWait([
      '본래라면 존귀함에 정신을 못 차리는 ',
      digital.get_colored_name(),
      '은 평소처럼 ',
      digital.sex,
      '의 애정을 발산할 줄 알았으나, 예상외로 차분한 모습이었다. ',
      digital.sex,
      '에게도 이런 면이 있을 줄이야……',
    ]);
    await digital.say_and_wait('……원점이자, 정점……');
    await digital.say_and_wait(
      '첫 게이트 인, 조절할 수 없었던 타이밍, 서로 뒤엉키는 예쁜 다리들……',
    );
    await digital.say_and_wait(
      '흩날리는 땀방울, 초조함에 하얘진 머릿속. 하지만 관객들의 환호성이 사라지고, 남은 것은 게시판 위의 결과뿐……',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '이 설마 이렇게 확실한 감정을 묘사할 수 있을 줄이야.',
    ]);
    await digital.say_and_wait(
      '너, 너무 감동적이에요! 무엇 하나 눈물이 나지 않는 게 없네요, 그렇죠! 그렇죠!',
    );
    era.printButton('「그러게, 첫 레이스인 데뷔전 우승, 축하해.」', 1);
    await era.input();
    await digital.say_and_wait([
      '아아아, 달리는 동안 디지땅은 다른 ',
      digital.get_uma_sex_title(),
      '짱들의 감정에 휩쓸려 엉망진창이 되어서, 디지땅은……',
    ]);
    await digital.say_and_wait(
      '저는 정말이지 데뷔전을 얕보고 있었어요! 데뷔전은 모두가 승자예요! 모두가!',
    );
    await digital.say_and_wait(
      '이렇게나 풍부한 감정이 뒤섞여 있다면, 누구라도 가슴이 벅차오르겠죠?',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 진심으로 즐거워 보였다. 레이스 중의 발걸음에서도, 레이스 후의 감상에서도 ',
      digital.sex,
      '의 레이스에 대한 애정이 전해져 왔다.',
    ]);
    await digital.say_and_wait([
      callname,
      ', 오늘 레이스는 입문에 불과하죠! 앞으로도 많은 레이스가 남았죠! 더 많은 ',
      digital.get_uma_sex_title(),
      '짱들을 만날 수 있겠죠!',
    ]);
    await me.say_and_wait([
      '그래, 앞으로도 많은 ',
      digital.get_uma_sex_title(),
      '들이 너를 기다리고 있어.',
    ]);
    await digital.say_and_wait(
      '최고예요! 낙원의 문턱을 넘어버렸어요, 정말 어쩌다 보니 넘고 말았어요! 그곳은 제가 감히 발을 들여선 안 되는 영역이라고만 생각했는데!',
    );
    await digital.say_and_wait([
      '다음에도, 이런 ',
      digital.get_uma_sex_title(),
      '짱들을 다시 보고 싶어요!',
    ]);
    await me.say_and_wait('그럼, 다음엔 잔디 레이스를 뛰어보는 건 어때?');
    await digital.say_and_wait(
      '네? 에, 이번엔 더트였는데 다음은 바로 잔디인가요…… 죄송해요, 제가 조금 들떴나 봐요. 너무 즐거워서 정신이 팔려버렸네요.',
    );
    await digital.say_and_wait('전 한 번 더 더트 레이스를 뛰어서, 이 분위기를 다시 느껴보고 싶어요!');
    await era.printAndWait([
      '상의 끝에, ',
      me.get_couple_title(),
      '은(는) 다음 레이스를 새해의 ',
      race_infos[race_enum.hyac_sta].get_colored_name(),
      '로 결정했다.',
    ]);
  };

  handlers[race_enum.hyac_sta] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('히아신스 승리', digital);
    await digital.print_and_wait([
      digital.get_colored_name(),
      '은 역시나 멋지게 결승점에 도착했다. 변함없는 실력이라고 해야 할지……',
    ]);
    await digital.say_and_wait('후우…… 하아…… 디지땅, 해냈어요……');
    await digital.say_and_wait([
      '결승선을 통과하고, 그리고 지켜봤어요. ',
      digital.get_uma_sex_title(),
      '짱들의 광채를!',
    ]);
    await digital.say_and_wait([
      '역시 조금은 의외라고 해야 할까요! 전 ',
      digital.get_uma_sex_title(),
      '짱들이 달리는 그 각오 자체가 존귀하다고만 생각했는데……',
    ]);
    await digital.say_and_wait([
      '하지만 아마 ',
      digital.get_uma_sex_title(),
      '짱들이 레이스에 담은 염원은 그보다 훨씬 깊을 거예요…… 제가 레이스를 계속해 나간다면, 분명 ',
      digital.get_uma_sex_title(),
      '짱들이 빛나는 이유를 알 수 있겠죠!',
    ]);
    await digital.say_and_wait('계속해서 이 방해하지 않는 주의로 밀고 나가죠!');
    await say_by_passer_by_and_wait('???', '으으으…… 윽……');
    await say_by_passer_by_and_wait('???', '으아아아아앙!');
    await digital.print_and_wait([
      '멀지 않은 곳에서 어느 ',
      digital.get_uma_sex_title(),
      '의 통곡 소리가 들려왔다.',
    ]);
    await digital.say_and_wait([
      '저 ',
      digital.get_uma_sex_title(),
      ', 방금 전 레이스에서 본 기억이……',
    ]);
    await digital.print_and_wait([
      '기억이 맞다면 ',
      digital.sex,
      '는 방금 6착이었다. 게시판에도 들지 못한 순위였다.',
    ]);
    await say_by_passer_by_and_wait(
      '???',
      '게시판…… 게시판조차 들지 못하다니…… 중상은커녕 가능성조차 없어……!',
    );
    await digital.print_and_wait([
      '평소라면 ',
      digital.get_uma_sex_title(),
      '의 일거수일투족을 지켜봤을 ',
      digital.get_colored_name(),
      '이었지만, 지금은 도저히 계속 지켜볼 엄두가 나지 않는지 시선을 돌려 등을 돌렸다.',
    ]);
    await digital.print_and_wait([
      '지하 통로를 지날 때, ',
      digital.get_colored_name(),
      '은 줄곧 다른 ',
      digital.get_uma_sex_title(),
      '들을 피했다. 평소처럼 거리를 두는 것이 아니라, 의식적으로 보지 않으려 애쓰고 있었다.',
    ]);
    await digital.say_and_wait('……');
    await digital.print_and_wait([
      '그럼에도 앞쪽에서 두 명의 ',
      digital.get_uma_sex_title(),
      '가 보였다. 방금 2착과 3착을 차지했던 ',
      digital.get_uma_sex_title(),
      '들이었다.',
    ]);
    await digital.print_and_wait([
      digital.get_colored_name(),
      '이 자리를 피하려던 순간……',
    ]);
    await era.printAndWait([digital.get_uma_sex_title(), 'A「으으윽……」'], {
      color: diamond_lord.color,
    });
    await say_by_passer_by_and_wait(
      `${digital.get_uma_sex_title()}B`,
      '아니야, 아니야. 2착이나 했잖아? 왜 울고 그래?',
    );
    await era.printAndWait(
      [
        digital.get_uma_sex_title(),
        'A「분명히, 분명히, 선배님과의 대결이었는데…… 줄곧 당신과 승부를 겨뤄서, 넘어서고 싶다고 생각했는데……」',
      ],
      {
        color: diamond_lord.color,
      },
    );
    await say_by_passer_by_and_wait(
      `${digital.get_uma_sex_title()}B`,
      '그건 이뤄냈잖아? 너, 정말 강해졌어. 나도 이제 슬슬 한계인가 봐~',
    );
    await era.printAndWait(
      [
        digital.get_uma_sex_title(),
        'A「……저는 줄곧…… 선배를 이기기만 하면…… 하지만, ',
        digital.sex,
        '는 정말로 너무 강해서…… 손을 뻗어도 닿지 않아서……」',
      ],
      {
        color: diamond_lord.color,
      },
    );
    await say_by_passer_by_and_wait(`${digital.get_uma_sex_title()}B`, [
      diamond_lord,
      '! 너 노력했잖아! 온 힘을 다했잖아!',
    ]);
    await say_by_diamond_lord('하지만……');
    await say_by_passer_by_and_wait(
      `${digital.get_uma_sex_title()}B`,
      '우리의 성적이 어찌 됐든, 트윙클 시리즈는 계속될 거야. 우리를 기다려주지 않는다고!',
    );
    await say_by_passer_by_and_wait(`${digital.get_uma_sex_title()}B`, [
      '너는 나보다 강하고 잠재력도 있어. 너는 앞으로 분명 중상에 도전하겠지! 분명 G1에도 도전할 거야! ',
      '다른 사람들이 다시 보게 만들어주자고!',
    ]);
    await say_by_passer_by_and_wait(
      `${digital.get_uma_sex_title()}B`,
      '위닝 라이브, 같이 갈 수 있지?',
    );
    await digital.print_and_wait([
      digital.get_uma_sex_title(),
      'B가 손을 들어 ',
      digital.sex,
      '의 눈물을 닦아주었다.',
    ]);
    await say_by_diamond_lord('!');
    await digital.print_and_wait([
      digital.sex,
      '는 흘러내리는 콧물을 세게 들이마시고는 세차게 고개를 끄덕였다.',
    ]);
    await digital.print_and_wait([
      '손을 잡고 멀어지는 ',
      digital.sex,
      '들을 보며, ',
      digital.get_colored_name(),
      '은 이번만큼은 그 어떤 「커플링」 같은 말도 꺼낼 수 없었다.',
    ]);
    era.drawLine();
    await digital.say_and_wait('……');
    await me.say_and_wait('디지털, 괜찮아?');
    await digital.say_and_wait('거짓말이야…… 방해하지 않는다니……');
    await digital.say_and_wait('그런 건 애초에 불가능해요.');
    await digital.say_and_wait(
      '레이스에 나가는 이상 반드시 승자가 있고, 반드시 패자가 있어요…… 져도 존귀하다니, 전부 승자라니, 제가 그런 말을 잘도 지껄였네요……',
    );
    era.printButton(
      '「경기장에 섰기에 만들어진 그 유대감이 너를 그렇게 감동시킨 거잖아. 그건 네가 예전부터 알고 있던 사실 아니었어?」',
      1,
    );
    await era.input();
    await era.printAndWait([
      digital.get_colored_name(),
      '은 이번 레이스를 통해 ',
      digital.get_uma_sex_title(),
      '들이 왜 존귀하고 위대한지, 그 비결을 조금은 엿본 듯했다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      digital.sex,
      '는 자신이 한 명의 라이벌이면서도 스스로를 관객이라 여기며, 비정하게 우승을 가로챘다는 사실을 문득 깨달았다.',
    ]);
    await era.printAndWait('그것은 대단히 무례한 짓이었다.');
    await era.printAndWait([
      '그리하여 ',
      digital.get_colored_name(),
      '이 위닝 라이브를 마치고 트레이닝실로 돌아왔을 때……',
    ]);
    await digital.say_and_wait([
      callname,
      ', 앞으로의 일에 대해 이야기하고 싶어요. 저답지 않은 말을 좀 하려고 하는데, 괜찮을까요??',
    ]);
    await me.say_and_wait('물론이지.');
    await digital.say_and_wait('저, 무슨 일이 있어도…… G1 레이스에 나가고 싶어요.');
    await digital.say_and_wait(
      '현장에 있던 이들 모두에게, 뜨거운 철판 위에서 도게자라도 해야 할 만큼 실례를 저지른 기분이에요.',
    );
    await digital.say_and_wait(
      '그렇다면 제대로 해야만 해요. 출주해서 G1에서 이기고, 다른 사람들이 디지땅은 정말 강하다고 생각하게 만드는 거예요.',
    );
    await era.printAndWait([
      '자신이 진정으로 충분히 강하다는 것을 증명하고 싶어 했다. ',
      digital.sex,
      '에게 패배한 모든 ',
      digital.get_uma_sex_title(),
      '들에게 도리를 다하기 위해서였다.',
    ]);
    await digital.say_and_wait([
      '그리고 ',
      digital.get_uma_sex_title(),
      '짱들이 G1 레이스에 어떤 마음으로 임하는지 제대로 확인하고 싶어요!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '과 ',
      me.get_colored_name(),
      '은(는) 다음 레이스를 5월 전반의 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      '으로 정했다.',
    ]);
    await digital.say_and_wait([
      '출주할 거예요. 그리고—— ',
      digital.sex,
      '들의 몫까지 짊어지고 달릴게요!',
    ]);
    await era.printAndWait([
      '우연한 사건이었으나 결과는 우연이 아니었다. 승리와 패배, 그 안에 담긴 슬픔이 ',
      digital.get_colored_name(),
      '의 미래를 밀어내고 있었다.',
    ]);
  };

  handlers[race_enum.nhk_cup] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.nhk_cup].get_colored_name(), ' 승리'],
      digital,
    );
    await say_by_passer_by_and_wait('해설', [
      digital.get_colored_name(),
      '입니다! ',
      digital.get_colored_name(),
      '! 잔디와 더트를 가리지 않고 모두 자신의 무대임을 증명해 보였습니다!',
    ]);
    await era.printAndWait([
      '결승선을 통과한 ',
      digital.get_colored_name(),
      '의 발걸음은 비틀거리고 있었다.',
    ]);
    await digital.say_and_wait(
      '하아…… 후우…… 쪼아…… 단 한 줌의 에너지도 남지 않았어…… 더 이상 못 걸을 정도로…… 온 힘을 다했어……!',
    );
    await digital.say_and_wait('아아아, 햇살이…… 너무 눈부셔…… 하늘이…… 너무…… 멀어……');
    await digital.say_and_wait('아…… 이것이……');
    await era.printAndWait('（털썩!）');
    await era.printAndWait([digital.get_colored_name(), '은 쓰러졌다!']);
    era.drawLine();
    await era.printAndWait([
      '다행히 달려온 의사의 진단에 따르면, ',
      digital.get_colored_name(),
      '은 그저 과로로 쓰러진 것 뿐이었다. 잠시 쉬면 괜찮아질 것이라고 했다.',
    ]);
    await era.printAndWait([
      '이번에 ',
      digital.get_colored_name(),
      '은 정말로 전력을 다했다. 이번에는 이전과는 다르게 레이스 우마무스메로서의 신념을 짊어지고 있었다.',
    ]);
    await era.printAndWait([
      '그렇기에 모든 힘을 쏟아부은 뒤 ',
      digital.get_colored_name(),
      '은 벅찬 감정 속에 쓰러진 것이었다.',
    ]);
    const opera = get_chara_talk(15),
      dotou = get_chara_talk(58),
      d_call_o = sys_get_colored_callname(19, 15),
      d_call_do = sys_get_colored_callname(19, 58);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      digital.get_colored_name(),
      '을 업고 대기실로 돌아왔을 때, 익숙한 두 명의 모습이 보였다. ',
      opera.get_colored_name(),
      '와 ',
      dotou.get_colored_name(),
      '였다.',
    ]);
    await opera.say_and_wait([
      sys_get_colored_callname(15, 19),
      '? 정신 차리게!',
    ]);
    await me.say_and_wait(['괜찮아, 좀 쉬면 될 거야.']);
    await era.printAndWait([
      '대화하는 사이, ',
      digital.get_colored_name(),
      '을 대기실 소파에 눕혔다.',
    ]);
    await era.printAndWait([
      '얼마 지나지 않아 ',
      digital.get_colored_name(),
      '이 두 눈을 떴다.',
    ]);
    await digital.say_and_wait('으음…… 응…… 에엣?!');
    await digital.say_and_wait([d_call_o, ', ', d_call_do, '?! 어떻게 여기에?!']);
    await me.say_and_wait([
      '이 둘이 너를 무척 걱정해서 대기실까지 찾아왔어…… 라기보다 애초에 대기실 안에 있었지만 말이야.',
    ]);
    await digital.say_and_wait('어쩜 이렇게 갑자기?');
    await opera.say_and_wait([
      '갑자기가 아니네! ',
      sys_get_colored_callname(15, 58),
      '이 말하길, 온갖 무대를 종횡무진하는 무용수가 있다고 하더군. 새로운 배우의 탄생을 지켜보기 위해 내가 왔네.',
    ]);
    await dotou.say_and_wait([
      '으으으, 저는 ',
      sys_get_colored_callname(58, 19),
      '가 해주신 조언에 정말 감사하고 있어요! 그래서 이번 레이스도 응원하러 왔답니다!',
    ]);
    await opera.say_and_wait(
      '우리는 레이스 전부터 패왕의 기운을 숨기고 일반인 관객인 척 자네를 연구하고 있었지!',
    );
    await dotou.say_and_wait('저 같은 사람이 예시장에서 말을 걸면 방해가 될까 봐…… 그래서……');
    await digital.say_and_wait(
      '아니요, 아니요! 방해가 될 리가 없잖아요, 오히려 영광이죠…… 아까 느꼈던 위화감의 정체가 이거였군요.',
    );
    await digital.say_and_wait([
      '그리고 이제 조금씩 알 것 같아요. ',
      d_call_o,
      '와 ',
      d_call_do,
      '가 왜 그렇게 눈부시고 화려한지……',
    ]);
    await digital.say_and_wait('드디어…… 조금은…… 가까워진 것 같아요……');
    await opera.say_and_wait(
      '하하하! 그런가? 하지만 역시 나의 화려함은 타고난 것이니까 말이야!',
    );
    await era.printAndWait([
      opera.get_colored_name(),
      '는 ',
      digital.get_colored_name(),
      '을 꽤 마음에 들어 했고, ',
      dotou.get_colored_name(),
      '는 ',
      digital.get_colored_name(),
      '이 ',
      digital.sex,
      '에게 해 준 격려에 감사하고 있었다.',
    ]);
    await me.say_and_wait('두 사람, 여기 온 김에 하고 싶은 말이 더 있지 않아?');
    await era.printAndWait(['이어지는 순간, ', digital.sex, '들이 선언했다……']);
    await opera.say_and_wait([
      '나와 ',
      sys_get_colored_callname(15, 58),
      '은 다음 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '에서 공연을 가질 예정이라네!',
    ]);
    await dotou.say_and_wait(
      '저, 저도 드디어 G1에 출주하게 되었어요. 비록 아무도 신경 쓰지 않는 구석자리일지도 모르지만……',
    );
    await digital.say_and_wait('! 첫 레뷰, 알겠습니다! 이건 무조건 보러 가야죠!');
    await opera.say_and_wait(
      '하지만 자네에게도 그에 걸맞은 종목이 있겠지? 우리에게 자네의 전천후 재능을 보여주게나!',
    );
    await opera.say_and_wait(
      '자네는 아직 더트 G1 승리가 없지 않나. 그것까지 있어야 완벽하겠지, 안 그런가?',
    );
    await me.say_and_wait([
      '다음으로 적당한 더트 G1은 여름 합숙 기간에 열리는 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '이야.',
    ]);
    await opera.say_and_wait([
      '과연 ',
      sys_get_colored_callname(15, 0),
      '! 자, ',
      digital.get_colored_name(),
      ', 우리의 초대를 받아들이겠나?',
    ]);
    await digital.say_and_wait('받아들일게요!');
    await era.printAndWait([
      '그렇게 ',
      digital.sex,
      '들은 약속했다. ',
      opera.get_colored_name(),
      '와 ',
      dotou.get_colored_name(),
      '는 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '에서 최고의 레이스를 보여주기로, 그리고 ',
      digital.get_colored_name(),
      '은 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '에서 올라운더로서의 실력을 증명하기로.',
    ]);
  };

  handlers[race_enum.japa_dir] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.japa_dir].get_colored_name(), ' 승리'],
      digital,
    );
    await digital.say_and_wait(
      '이 레이스는 이전의 잔디 레이스와는 다르면서도 또 같아.',
      true,
    );
    await digital.say_and_wait('으오오오오오오오!!!!', true);
    await digital.say_and_wait(
      '흩날리는 모래 먼지…… 잘 보이지 않아…… 하지만 광채가…… 스며 나오고 있어……',
      true,
    );
    await digital.say_and_wait(
      ['전혀 다른 코스임에도…… ', digital.sex, '들은 변함없는 광채를 내뿜고 있어……'],
      true,
    );
    await digital.say_and_wait(
      ['여기서 ', digital.sex, '들의 마음을 저버릴 순 없어!!!!'],
      true,
    );
    await digital.say_and_wait('하아아아아아아아!', true);
    era.drawLine();
    await era.printAndWait([
      '레이스가 끝났다. ',
      digital.get_colored_name(),
      '은 정말 훌륭했다. 환경이 완전히 다른 코스에서도 이렇게 우수한 성적을 거두다니.',
    ]);
    await me.say_and_wait('기분이 어때?');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 이전과 전혀 다른, 진지한 표정을 짓고 있었다.',
    ]);
    await digital.say_and_wait([
      '디지땅은, 저 ',
      digital.get_colored_name(),
      '은 이제 알았어요.',
    ]);
    await me.say_and_wait('그래.');
    await digital.say_and_wait([
      '어릴 적부터 저를 사로잡았던 ',
      digital.get_uma_sex_title(),
      '짱들의 존귀함……',
    ]);
    await digital.say_and_wait([
      '오늘 『',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '』에서 달리고 나서 깨달았어요.',
    ]);
    await digital.say_and_wait([digital.get_uma_sex_title(), '짱, 귀여워.']);
    await digital.say_and_wait([digital.get_uma_sex_title(), '짱, 너무 존귀해.']);
    await digital.say_and_wait([
      '그럼 ',
      digital.get_uma_sex_title(),
      '짱은 왜 귀여운 걸까요? ',
      digital.sex,
      '들의 어떤 점이 저를 이토록 속수무책으로 끌리게 만드는 걸까요?',
    ]);
    await digital.say_and_wait([
      '오늘 드디어 깨달았어요. 제가 좋아하는 건 ',
      digital.sex,
      '들이 『자신의 꿈을 위해 앞뒤 가리지 않고 필사적으로 분투하는』 모습이었어요!',
    ]);
    await era.printAndWait([
      '발을 동동 구르며 ',
      digital.get_colored_name(),
      '은 드디어 깨달은 기쁨을 표현했다.',
    ]);
    await digital.say_and_wait(
      '깨닫고 나니, 『중앙의 잔디 G1만이 특별하다』고 생각했던 과거의 저를 찾아가서 패주고 싶을 정도예요!',
    );
    await me.say_and_wait('하하, 그야말로 정석적인 감상이네.');
    await digital.say_and_wait([
      '에이, ',
	  callname,
	  '는(은) 이미 알고 계셨죠? ',
      digital.get_uma_sex_title(),
      '짱들은 언제나 한결같다는걸요.',
    ]);
    await digital.say_and_wait([
      digital.get_uma_sex_title(),
      '짱들은 정말로 원하는 것이 있고, 되고 싶은 모습이 있어서, 그것을 목표로 필사적으로 노력하고 있어요.',
    ]);
    await era.printAndWait(
      '그런 사람은 어디에 있든 눈부신 법이다. 하물며 함께 모여 경쟁한다면 오죽할까.',
    );
    await digital.say_and_wait([
      digital.sex,
      '들은 전력으로 서로 유대하고, 서로 돕고…… 때로는 하나의 승리를 위해 다투기도 하지만 다툼을 두려워하지 않고 늘 앞을 바라보고 있어요.',
    ]);
    await digital.say_and_wait('모든 결판이 난 뒤에는 함께 꽁냥꽁냥대고!');
    await me.say_and_wait('뭐, 그것도 정석적인 전개지.');
    await digital.say_and_wait('바로 그런 정석적인 전개이기에 제 영혼이 이토록 흔들리는 거라고요!');
    await digital.say_and_wait('데뷔하기 전까지는 혼자 잘난 줄 알았는데…… 결과적으로 오늘에서야……');
    await digital.say_and_wait('아와와와, 정말이지……');
    await digital.say_and_wait([
      sys_get_colored_callname(19, 15),
      '와 ',
      sys_get_colored_callname(19, 58),
      '의 그 레이스도 이제야 비로소 이해가 가요.',
    ]);
    await era.printAndWait([
      get_chara_talk(15).get_colored_name(),
      '와 ',
      get_chara_talk(58).get_colored_name(),
      '의 타카라즈카 기념 대결의 광채는 ',
      digital.get_colored_name(),
      '을 더할 나위 없이 부럽게 만들었다.',
    ]);
    await era.printAndWait([
      '그리고 지금, ',
      digital.get_colored_name(),
      '은 드디어 그 빛에 손을 뻗을 수 있게 되었다.',
    ]);
    await digital.say_and_wait(
      '이대로라면…… 안 돼! 디지땅! 움직여야 해!',
    );
    await digital.say_and_wait(
      '이런 저라도, 각오를 다지고 순수한 마음으로 게이트 앞에 설 수 있다면!',
    );
    await digital.say_and_wait([
      callname,
      '…… 저…… 이런 저라도…… 그런 존재가 될 수 있을까요?!',
    ]);
    era.printButton('「당연히 될 수 있지!」', 1);
    await era.input();
    await era.printAndWait([
      digital.get_colored_name(),
      '은 드디어 이 순간, 진정한 한 명의 레이스 우마무스메가 되었다.',
    ]);
  };

  handlers[race_enum.mile_cha] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1 || era.get('cflag:19:육성턴수합산') >= 96) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.mile_cha].get_colored_name(), ' 승리'],
      digital,
    );
    const halo = get_chara_talk(61);
    await digital.print_and_wait([
      '밑바닥에서부터 기어 올라온 ',
      halo.get_colored_name(),
      ', ',
      digital.get_colored_name(),
      '은 ',
      digital.sex,
      '의 생존 전략을 처음부터 끝까지 지켜보았다.',
    ]);
    await halo.say_and_wait([
      '어때, ',
      sys_get_colored_callname(61, 19),
      '? 나와 함께 이 중요한 레이스를 뛰었으니 이해했겠지?',
    ]);
    await halo.say_and_wait([
      halo.get_colored_name(),
      '가 어떤 ',
      digital.get_uma_sex_title(),
      '인지 말이야.',
    ]);
    await digital.say_and_wait('네…… 네……');
    await digital.print_and_wait([
      halo.get_colored_name(),
      '에게서 「',
      digital.get_uma_sex_title(),
      '란 무엇인가」를 배운 ',
      digital.get_colored_name(),
      '은 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '의 승리를 거머쥔 뒤 소리 내어 울었다.',
    ]);
    await digital.print_and_wait([
      halo.get_colored_name(),
      '의 존재는 그토록 ',
      digital.sex,
      '에게 깊은 감동을 주었다.',
    ]);
    await halo.say_and_wait('왜 그래? 계속 울기만 하면 말을 할 수 없잖아.');
    await digital.say_and_wait('온몸으로…… 광채를 머금은 것 같아요……');
    await digital.say_and_wait([
      '그리고 깨달았어요, ',
      digital.get_uma_sex_title(),
      '로서 산다는 것이 무엇을 의미하는지.',
    ]);
    await digital.say_and_wait(
      '굴하지 않는 달리기 속에 영혼이 깃들어 있어요! 본능! 준비가 완벽하든 아니든, 시종일관 일류의 기개를 관철하는 것!',
    );
    await digital.say_and_wait(
      '전에는 도저히 이해할 수 없었지만 이제는 알겠어요. 그저 달리면 되는 거였어요! 약한 소리조차 달리면서 내뱉는 거예요!',
    );
    await digital.say_and_wait([
      '전 이제 ',
      digital.get_uma_sex_title(),
      '가 훨씬 더 좋아졌어요!',
    ]);
    await halo.say_and_wait([
      '후훗, 너는 정말 ',
      digital.get_uma_sex_title(),
      '를 좋아하는구나.',
    ]);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      ', 더 많은 ',
      digital.get_uma_sex_title(),
      '들과 경쟁하는 거야! 모든 것을 흡수하고, 그리고……',
    ]);
    await halo.say_and_wait([
      '진정한 올라운더 우마무스메가 되도록 해! 결국 너 또한 네가 가장 사랑하는 ',
      digital.get_uma_sex_title(),
      ' 중 한 명이니까!',
    ]);
    await digital.print_and_wait([
      halo.get_colored_name(),
      '는 마지막으로 ',
      digital.get_colored_name(),
      '에게 축복을 내렸다. ',
      digital.get_colored_name(),
      '이 앞으로 더 많은 ',
      digital.get_uma_sex_title(),
      '들과 대결하여 진정한 「올라운더」가 되기를.',
    ]);
    era.drawLine({ content: '지하 통로' });
    await digital.say_and_wait([
      callname,
      ', 저의 동지여. 저는 ',
      sys_get_colored_callname(19, 61),
      '에게서 무엇과도 바꿀 수 없는 소중한 것을 얻었어요.',
    ]);
    await digital.say_and_wait([
      '더 많은 ',
      digital.get_uma_sex_title(),
      '짱들과 레이스를 해야 해요. 제가 무엇을 하면 될까요……',
    ]);
    await era.printAndWait('그렇다면 차라리……');
    await era.printAndWait([
      digital.get_colored_name(),
      '과 함께 앞으로 더 많은 G1 레이스에 참가하기로 결정했다.',
    ]);
    await digital.say_and_wait([
      '맞아요, 맞아요. 그리고 나중에, ',
      sys_get_colored_callname(19, 15),
      '와 ',
      sys_get_colored_callname(19, 58),
      '에게 도전장을 내밀 거예요!',
    ]);
    await era.printAndWait([
      '줄곧 동경만 해오던 ',
      digital.get_colored_name(),
      '이 이제야 비로소 용기를 내어 예전의 아이돌들에게 도전하려 하고 있었다.',
    ]);
  };

  handlers[race_enum.tenn_sho] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1 || era.get('cflag:19:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.tenn_sho].get_colored_name(), ' 승리'],
      digital,
    );
    await era.printAndWait('두구두구두구——');
    await era.printAndWait([
      '낮게 깔리는 발소리 속에 ',
      digital.get_uma_sex_title(),
      '들이 점차 관중석으로 다가왔다. 이때, 의외로 바깥쪽 코스를 달리고 있는 것은——',
    ]);
    await say_by_passer_by_and_wait('해설', [
      digital.get_colored_name(),
      '입니다! ',
      digital.get_colored_name(),
      '! 빗속에서, 엉망이 된 잔디 위에서 마군을 뚫고 나와 최적의 경로를 선택했습니다! 그리고——!',
    ]);
    await say_by_passer_by_and_wait('해설', [
      '골인! 믿을 수 없는 주법으로 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '을 정복한 것은—— ',
      digital.get_colored_name(),
      '입니다!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '이 지금까지 쌓아온 지식과 기술, 그리고 감정이 ',
      digital.get_colored_name(),
      '에게 최고의 조건을 만들어주었다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 진흙탕이 된 잔디 위에서 마치 고향에 돌아온 듯 보였다. 코스 선택부터 마지막 스퍼트까지, 트레이너인 ',
      me.get_colored_name(),
      '조차 그 어떤 부족함도 찾아낼 수 없었다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 흔들림 없이 승리를 쟁취했다.',
    ]);
    era.println();
    await digital.say_and_wait('헤헤…… 쿨럭쿨럭…… 아하하하……');
    await digital.say_and_wait('저의 승리, 맞죠?');
    await me.say_and_wait('그래, 네 승리야, 디지털.');
    await era.printAndWait([
      digital.get_colored_name(),
      '이 몸을 돌려 관중석을 향했다.',
    ]);
    await digital.say_and_wait('으오오오오오오오오오오오오오!');
    await say_by_passer_by_and_wait('관중석', '으오오오오오오오오오오오오오!');
    await digital.say_and_wait('헤이야아아아아아아아아아아아!');
    await say_by_passer_by_and_wait('관중석', '헤이야아아아아아아아아아아아!');
    await digital.say_and_wait('이! 히! 오! 오오오오오오!');
    await say_by_passer_by_and_wait('관중석', '이! 히! 오! 오오오오오오!');
    await era.printAndWait('하하하, 목이 쉴 정도로 외쳐댔다.');
    await era.printAndWait([
      '일반적으로 이름을 부르는 것과는 다른, 참으로 ',
      digital.get_colored_name(),
      '다운 특색 있는 응원이었다.',
    ]);
    await era.printAndWait([
      '손을 크게 벌리고 ',
      me.get_colored_name(),
      ' 앞으로 달려와, 울타리 너머로 ',
      me.get_colored_name(),
      '을(를) 끌어안았다.',
    ]);
    await digital.say_and_wait([callname, '! 미지의, 미지의 풍경이에요!']);
    await digital.say_and_wait(
      '무대 위에서 느끼는 콜의 힘! 이 기분은 정말 그 무엇과도 비교할 수 없네요!',
    );
    await me.say_and_wait('그래! 이건 오직 너만을 위한 콜이야, 단 하나뿐인 콜이라고!');
    await digital.say_and_wait('쿠로후네…… 승리를, 그 두 사람에게서 뺏어왔어……');
    await era.printAndWait([
      '쿠로후네가 후회든 슬픔이든 어떤 마음을 품고 있었든지간에, 이 레이스를 본다면 ',
      digital.sex,
      ' 또한 해방감을 느끼리라 생각했다.',
    ]);
    await digital.say_and_wait(
      '나 혼자서는 할 수 없어—— 줄곧 그렇게 생각했어요. 그래서 최애에게 염원을 맡겼던 건데……',
    );
    await digital.say_and_wait('하지만……');
    era.printButton('「나의 첫 번째 최애는 바로 너야!」', 1);
    await era.input();
    await digital.say_and_wait([
      '아하하하, 에헤헤헤…… ',
      callname,
      ', 갑자기 그런 말씀을 하시다니 정말…… 저는, 저는……',
    ]);
    await digital.say_and_wait([
      '드, 드, 드릴게요! 서비스! 그래요, 바로 팬 서비스요! ',
      callname,
      ', 제 꼬리털이라도 드릴까요!',
    ]);
    await era.printAndWait([
      '아무래도 ',
      digital.get_colored_name(),
      '은 너무 기쁜 나머지 의미불명한 말을 내뱉기 시작한 모양이었다.',
    ]);
    era.printButton('「시상대로 가자, 다들 기다리고 있어.」', 1);
    await era.input();
    await digital.say_and_wait('오오오, 이런 무례한 짓을, 깜빡 잊고 있었네요!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 울타리 너머에서 ',
      digital.get_colored_name(),
      '을 끌고 와 시상대에 올랐다.',
    ]);
    era.println();
    await digital.say_and_wait([
      '고고고, 고맙습니다! 저는 ',
      digital.get_colored_name(),
      '입니다! 따지고 보면 저는 그저 ',
      digital.get_uma_sex_title(),
      '짱을 좋아하는……',
    ]);
    await digital.say_and_wait([
      '저는 그저 ',
      digital.get_uma_sex_title(),
      '짱의 엉덩이…… 아니 꼬리를 쫓아서 여기까지 온 것뿐인데……',
    ]);
    await digital.say_and_wait([
      '이 감동, 이해하시나요?! 저는 처음에 평범한 ',
      digital.get_uma_sex_title(),
      '짱이라고도 할 수 없던, 그저 팬이었을 뿐이라고요!',
    ]);
    await digital.say_and_wait(
      '그런데 제가 이 반짝임 속에 섞여서, 이 존귀한 풍경 속에서 가장 먼저 결승선을 통과하다니, 정말…… 감격스러워요……',
    );
    await digital.say_and_wait(
      '승리할 수 있었던 건 분명 저 혼자만의 성과가 아니에요. 지금까지 만난 모든 분과의 결실이죠.',
    );
    await digital.say_and_wait([
      '지금까지 함께한 ',
      digital.get_uma_sex_title(),
      '짱들, 처음엔 없을 거라 생각했던 저의 팬들, 그리고 ',
      callname,
      '!',
    ]);
    await digital.say_and_wait('오늘, 여러분 덕분에 우승할 수 있었습니다.');
    await digital.say_and_wait('정말로…… 진심으로 감사드립니다……');
    await digital.say_and_wait([
      digital.get_uma_sex_title(),
      '짱들은, 팬이었을 때 생각했던 것보다…… 수백 배, 수천 배는 더 눈부시네요……',
    ]);
    await era.printAndWait([
      '말이 트인 듯 ',
      digital.get_colored_name(),
      '은(는) 계속해서 출주 우마무스메들을 소개하기 시작했다.',
    ]);
    await digital.say_and_wait(
      '보셨나요! 용맹하고 늠름한 숏컷, 맹렬하게 대시할 때의 그 흔들림……',
    );
    await digital.say_and_wait('발걸음에 맞춰 흔들리던 그 가방……');
    await digital.say_and_wait(
      '그리고 오늘 이 자리에 함께하지 못한 쿠로후네, 가능하다면 언젠가 꼭 함께 더트를 달리고 싶어요……',
    );
    era.println();
    await era.printAndWait([
      '한창 수다를 떨고 있는 ',
      digital.get_colored_name(),
      '이었지만……',
    ]);
    await say_by_passer_by_and_wait('스태프', [
      digital.get_colored_name(),
      '의 트레이너님, 흥겨운 와중에 죄송합니다만…… 위닝 라이브가……',
    ]);
    await era.printAndWait([
      '아이고, 고개를 숙이며 ',
      digital.get_colored_name(),
      '에게 몇 마디 건넸으나 ',
      digital.sex,
      '는 전혀 알아차리지 못한 듯했다.',
    ]);
    await era.printAndWait('아무래도 강제로 끌고 나가는 수밖에 없겠다.');
    await digital.say_and_wait(['어라어라, ', callname, '?']);
    await digital.say_and_wait('잠깐만요, 적어도 한 마디만 더, 한 마디만 더 하게 해주세요——');
    await digital.say_and_wait([
      digital.get_uma_sex_title(),
      '는 정말—— 최고—— 예요——!!!!',
    ]);
  };
};