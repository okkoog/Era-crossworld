/**
 * @file 아그네스 타키온 - 애정
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const girl_friend_accept = require('#/event/love/love-events-32/girl-friend-accept');
const girl_friend_betray = require('#/event/love/love-events-32/girl-friend-betray');
const girl_friend_reject = require('#/event/love/love-events-32/girl-friend-reject');
const half_life = require('#/event/love/love-events-32/half-life');
const Love32Base = require('#/event/love/love-events-32/until-fuck-buddy');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

module.exports = class extends Love32Base {
  async 74(tachyon, me, callname) {
    await print_event_name('마녀의 고백', tachyon);
    await tachyon.say_and_wait([
      callname,
      ', 오늘의 약을 마시기 전에 자네에게 해줄 이야기가 하나 있네.',
    ]);
    era.println();
    await era.printAndWait([
      '오늘도 ',
      me.get_colored_name(),
      '은(는) 평소와 다름없이 ',
      tachyon.get_colored_name(),
      '의 실험실을 찾았고, ',
      tachyon.sex,
      '는 평소처럼 도시락을 건네받은 뒤 ',
      me.get_colored_name(),
      '에게 오늘의 약물을 건네주었다.',
    ]);
    await era.printAndWait('마치 물물교환과도 같은 거래 행위였다.');
    era.println();
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) 막 약을 마시려던 찰나, ',
      tachyon.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '의 행동을 저지했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 의아한 듯 ',
      tachyon.sex,
      '를 바라보았으나, ',
      tachyon.sex,
      '는 매우 진지한 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 마주 보고 있었다.',
    ]);
    era.println();
    await era.printAndWait('…………그 눈빛은 마치 목숨을 건 각오를 품은 듯했다.');
    era.println();
    await tachyon.say_and_wait([
      callname,
      ', 자네는 혹시 인어공주라는 동화를 들어본 적이 있나?',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 ',
      me.get_colored_name(),
      '의 대답을 기다리지 않았다. 애초에 ',
      me.get_colored_name(),
      '이(가) 대답할 틈을 줄 생각이 없었던 것처럼 말을 이어갔다.',
    ]);
    await era.printAndWait(
      '……그것은 안데르센의 동화 속 인어공주와는 사뭇 다른, 또 다른 이야기였다.',
    );
    era.println();
    await tachyon.say_and_wait(
      '옛날 옛적에 바닷속에 살던 인어공주가 있었네. 그녀는 어릴 적부터 두 다리를 갖기를 갈망했지. 지상 위에서 마음껏 달릴 수 있기를 바라면서 말이야.',
    );
    await tachyon.say_and_wait(
      '하지만 바다에 사는 그녀에게는 허리 아래로 물고기 꼬리뿐이었으니, 달리기는커녕 제대로 서 있을 수도 없었네.',
    );
    era.println();
    await era.printAndWait('그녀는 자조 섞인 눈으로 자신의 다리를 내려다보았다……');
    await era.printAndWait('유리처럼 깨지기 쉬운 다리. 설령 서 있을 수 있다 해도, 설령 달릴 수 있다 해도,');
    await era.printAndWait('한 번 달리면 망가져 버릴 다리라면 물고기 꼬리보다 나을 게 무엇이겠는가?');
    era.println();
    await tachyon.say_and_wait(
      '공주는 마녀를 만나지 않았네. 믿을 수 없는 마녀의 손에 자신의 다리를 맡기고 싶지 않았던 거지.',
    );
    await tachyon.say_and_wait(
      '그녀가 원한 것은 진정으로 자신의 것이 될 두 다리였기에, 그녀는 스스로 마술을 배우기 시작했네.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 양손을 가볍게 흔들자, 손 안에서 어느샌가 두 개의 시험관이 나타났다. 마치 마술 같기도, 혹은…… 주술 같기도 한 모습이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '공주는 계속 노력한다면 언젠가 자신만의 다리를 얻을 수 있을 거라 믿었네.',
    );
    await tachyon.say_and_wait(
      '그렇게 되면 그 무엇도 두려워하지 않고 마음껏 달릴 수 있을 거라 생각했지. 그러던 어느 날……',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 목소리가 갑자기 아련해졌다. 마치 꿈결을 헤매는 듯한 말투였다.',
    ]);
    era.println();
    await tachyon.say_and_wait('그녀는 어떤 사람을 만났네.');
    await tachyon.say_and_wait(
      '그 사람은 왕자가 아니었어. 그저 평범한 잠수부였지. 바다에 빠져 구조가 필요한 왕자님 같은 게 아니었다는 걸세.',
    );
    await tachyon.say_and_wait(
      '바다로 나갔다가 우연히 해수면에서 데이터를 수집하던 공주를 보게 되었고, 부주의하게 인어의 유혹에 빠진 셈이지.',
    );
    await tachyon.say_and_wait(
      '스스로 바다에 뛰어들어 실험을 돕겠다고 자처한 평범한 인간. 그를 편의상—— 모르모트 군이라고 부르기로 하세.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 이 대목에서 갑자기 큭큭거리며 웃음을 터뜨렸다. 어떤 우스운 농담이라도 떠오른 모양이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '공주는 처음에 모르모트 군에게 아무런 감정도 없었네. 그저 흥미로운 실험 대상이 나타났다고 생각했을 뿐이지.',
    );
    await tachyon.say_and_wait(
      '그를 이용해 수많은 실험을 진행했어. 증식, 발광, 분신, 성전환 등을 포함해서 말이야……… 후후.',
    );
    await tachyon.say_and_wait('하지만 천진한 공주는 변화를 겪는 것이 모르모트 군뿐이라고 생각했네.');
    await tachyon.say_and_wait(
      '가장 중요한 기본 정리 하나를 잊고 있었던 거지———— 반응은, 상호적이라는 것을.',
    );
    await tachyon.say_and_wait('화학이든 인간관계든, 모두 마찬가지라네.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 한숨을 내쉬었으나, 그 눈빛에는 형언할 수 없는 애착과 그리움이 담겨 있었다. 여전히 꿈속에 잠겨 있는 듯한 모습이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '모르모트 군은 공주를 데리고 실험이라는 명목하에 수많은 것들을 보여주었네.',
    );
    await tachyon.say_and_wait(
      '일각고래와 함께 사냥하며 생물의 약육강식을 느꼈고, 대왕고래가 죽어 바다 밑으로 가라앉는 것을 보며 생로병사의 의미를 깨달았지.',
    );
    await tachyon.say_and_wait(
      '돌고래가 구애하고 교미하는 장면을 보며 두 사람 모두 얼굴을 붉히기도 했어.',
    );
    await tachyon.say_and_wait(
      '점차 공주는 깨닫게 되었네. 실험 너머의 세상이 얼마나 아름다운지를.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 조곤조곤 말을 이어가며 아름답고도 장엄한 광경들을 묘사했다.',
    ]);
    await era.printAndWait(
      '말투는 여전히 부드러웠으나, 그 속에는 실낱같은 아쉬움이 섞여 있었다. 마치 꿈에서 깨어날 시간을 직감한 것처럼.',
    );
    era.println();
    await tachyon.say_and_wait('그리고 마침내, 어느 날.');
    await tachyon.say_and_wait('공주는 자신이 더 이상 실험에 집중할 수 없다는 사실을 깨달았네.');
    await tachyon.say_and_wait(
      '마음을 가다듬고 연구하려 할 때마다, 연구 성과보다는,',
    );
    await tachyon.say_and_wait('새로운 연구를 들었을 때 모르모트 군이 지을 표정을 더 기대하게 되었지.');
    await tachyon.say_and_wait(
      '해수면으로 데이터를 수집하러 갈 때마다, 지상에서 마주칠 인간들보다는,',
    );
    await tachyon.say_and_wait('바닷속에서 자신을 기다릴 모르모트 군을 더 보고 싶어 하게 되었어.');
    await tachyon.say_and_wait(
      '새로운 약물을 만들려고 할 때마다, 약물의 효과보다는,',
    );
    await tachyon.say_and_wait('모르모트 군이 약을 마신 뒤 보일 반응을 더 기대하게 되었단 말일세.');
    era.println();
    await era.printAndWait([
      '마침내 ',
      tachyon.get_colored_name(),
      '의 표정이 맑게 돌아왔다. 마치 기나긴 꿈에서 드디어 깨어난 것 같았다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '그녀는 두려움을 느끼기 시작했네. 언젠가 자신이 모르모트 군과 함께하는 시간에 완전히 침식될까 봐.',
    );
    await tachyon.say_and_wait(
      '언젠가…… 두 다리를 얻겠다는 목표가 한낱 빈말이 되어버릴까 봐 말이야.',
    );
    await tachyon.say_and_wait(
      '그렇게 된다면 그녀는 그저 평범한 과학자일 뿐, 더 이상 연구자가 될 수 없을 테니까……',
    );
    era.println();
    await tachyon.say_and_wait('그때, 마녀가 나타났네.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 의자에서 일어나 ',
      me.get_colored_name(),
      '에게 다가왔다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 손이 ',
      me.get_colored_name(),
      '의 손을 덮었다…… 하지만 움켜쥐는 것이 아니었다.',
      tachyon.sex,
      '가 어루만지는 것은 ',
      me.get_colored_name(),
      '의 손에 들린 그 시험관이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '알고 보니 마녀는 처음부터 공주의 마음속에 존재하고 있었어. 마녀가 곧 공주였던 셈이지!',
    );
    await tachyon.say_and_wait(
      '내면의 이성을 대변하는 마녀는 공주에게 말했네. 현재 이 모든 소동의 근원은 저 모르모트이니, 그가 사라지면 모든 것이 원래대로 돌아갈 것이라고.',
    );
    await tachyon.say_and_wait(
      '그 모르모트가 떠난다면…… 아니, 떠나는 것만으로는 부족해. 미련을 남겨선 안 되니까……',
    );
    await tachyon.say_and_wait(
      '그저 저 모르모트를 『소멸』시키기만 하면, 공주는 원래의 모습으로, 실험에만 몰두하던 공주로 돌아갈 수 있다고 말이네.',
    );
    era.println();
    await tachyon.say_and_wait(
      '…………그래, 단지 『원래대로 돌아갈 뿐』이네. 누구도 보장할 수 없지.',
    );
    await tachyon.say_and_wait(
      '원래대로 돌아간 공주가 정말로 실험을 통해 두 다리를 얻을 수 있을지는 모르지만, 유일하게 알 수 있는 것은 『그럴 가능성이 생긴다』는 점이야.',
    );
    await tachyon.say_and_wait(
      '반대로, 계속해서 모르모트 군과 함께한다면…… 그런 가능성은,',
    );
    await tachyon.say_and_wait(
      '영원히 되찾을 수 없겠지. 마녀는 이 말을 마친 뒤 공주의 손을 빌려 한 종류의 약물을 만들어냈네.',
    );
    await tachyon.say_and_wait(
      '그녀는 공주에게 말했지. 평소처럼 모르모트에게 이 약을 마시게 하면,',
    );
    await tachyon.say_and_wait('모든 것이 끝나고, 원래의 생활로 돌아갈 수 있다고 말이네.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 이 말을 하며 ',
      me.get_colored_name(),
      '의 손에서 다시 약제를 낚아채듯 가져갔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('하지만……');
    era.println();
    await era.printAndWait('약제를 쥔 그 손이 미세하게 떨리고 있었다.');
    era.println();
    await tachyon.say_and_wait('겁쟁이 공주는 모든 사실을 모르모트 군에게 털어놓았네.');
    await tachyon.say_and_wait('……이것은 사랑 때문도, 연민 때문도, 차마 그럴 수 없어서도 아니야.');
    await tachyon.say_and_wait('그저 겁이 나서, 나약해서, 비겁해서일 뿐이지.');
    await tachyon.say_and_wait(
      '공주가 무슨 선량한 사람이라고 생각하지 말게. 결국 마녀는 그녀 내면의 일면일 뿐이고, 그녀의 본질은 저 냉혹하고 무정한 마녀와 다를 바 없으니까.',
    );
    await tachyon.say_and_wait(
      '이렇게 입을 연 공주의 목적은………… 그저 책임을 지고 싶지 않았을 뿐이라네.',
    );
    era.println();
    await era.printAndWait([
      '그리고 ',
      tachyon.get_colored_name(),
      '은 다시 한번 손에 든 약을 치켜들었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('자신이 사랑하는 사람을 죽였다는 죄책감을 짊어지고 싶지 않아서.');
    await tachyon.say_and_wait('자신이 아끼는 사람을 손수 없앴다는 책임을 지고 싶지 않아서.');
    await tachyon.say_and_wait(
      '곧 죽을 모르모트가, 공주를 위해 스스로 희생해주길 바라는 이기심 때문이지.',
    );
    era.println();
    await era.printAndWait('약이 다시 건네졌다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 고개를 떨군 ',
      tachyon.get_colored_name(),
      '이 현재 어떤 표정을 짓고 있는지 알 수 없었다.',
    ]);
    await era.printAndWait('울고 있는 것일까? 사랑하는 사람의 죽음 때문에?');
    await era.printAndWait('조소하고 있는 것일까? 자신을 옭아매던 사슬이 곧 풀릴 것이기에?');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그저 묵묵히 상대의 말이 끝나기를 기다렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '그러니…… ',
      callname,
      ', 이 이기적인 연구자를 위해 선택을 내려주겠나.',
    ]);
    era.println();
    await era.printAndWait([
      '지금 ',
      tachyon.sex,
      '가 내뱉은 말은 분명 지독하게 이기적인 말이었다.',
    ]);
    await era.printAndWait('상대방이 자신을 위해 희생해주기를 바라고 있다.');
    await era.printAndWait('그것도 절대적인 확신이 아닌, 고작 하나의 「가능성」을 위해서.');
    await era.printAndWait(
      '바꾸어 말하자면 「나를 위해 죽어줘야겠어. 하지만 네가 죽는다 해도 내가 성공할지는 모르겠군」이라는, 정말이지 무책임한 발언이었다.',
    );
    era.println();
    era.print(['그리하여, ', me.get_colored_name(), '은(는) …………']);
    era.printButton('마시지 않는다 (관계 진전)', 1);
    era.printButton('마신다 (관계 유지)', 2);
    era.printButton('타키온에게 약을 마시게 한다 [!]', 3);
    era.print(
      [
        '【경고: 이 선택지를 선택할 경우, ',
        tachyon.get_colored_name(),
        '과의 관계는 돌이킬 수 없게 됩니다! 트레센 학원은 담당을 저버리는 행위를 용납하지 않습니다!】',
      ],
      {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      },
    );
    switch (await era.input()) {
      case 1:
        await girl_friend_accept(tachyon, me, callname);
        break;
      case 2:
        await girl_friend_reject(tachyon, me, callname, new TachyonLifeMarks());
        break;
      case 3:
        await girl_friend_betray(tachyon, me, callname, new TachyonLifeMarks());
    }
  }

  async 89(tachyon, me, callname) {
    await print_event_name('Now or Forever', tachyon);
    await tachyon.say_and_wait([callname, '~~']);
    await tachyon.say_and_wait([callname, '~~~?']);
    await tachyon.say_and_wait([callname, '!!']);
    await tachyon.say_and_wait([
      callname.substring(0, 1),
      '…………아, ',
      callname,
      '은 오늘 없었지.',
    ]);
    await tachyon.say_and_wait([
      '큭…… 하지만 이 약은 신선할 때 시험하지 않으면 효과가 사라지는데. 어쩔 수 없군, ',
      sys_get_colored_callname(32, 25),
      '~~',
    ]);
    await tachyon.say_and_wait([
      '…………에이, ',
      sys_get_colored_callname(32, 25),
      '도 없는 건가!?',
    ]);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 실험실에서 시치미를 떼듯 중얼거렸다.',
    ]);
    await tachyon.print_and_wait([
      '안타깝게도 실험실 안에는 ',
      tachyon.sex,
      '에게 츳코미를 걸어줄 사람이 아무도 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '은 그렇다 치고…… ',
      sys_get_colored_callname(32, 25),
      '마저 없다니…… 아니면 ',
      sys_get_colored_callname(32, 94),
      '…… ',
      sys_get_colored_callname(32, 36),
      '…… ',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '생각해보니 ',
      get_chara_talk(25).get_colored_name(),
      ' 뿐만이 아니었다.',
    ]);
    await tachyon.print_and_wait([
      get_chara_talk(94).get_colored_name(),
      ', ',
      get_chara_talk(36).get_colored_name(),
      ', ',
      get_chara_talk(19).get_colored_name(),
      ', 심지어 아끼는 후배인 ',
      get_chara_talk(9).get_colored_name(),
      '조차 최근에는 보기가 힘들어졌다.',
    ]);
    await tachyon.print_and_wait([
      '그 원인은…… 영리한 ',
      tachyon.get_colored_name(),
      '이라면, ',
      tachyon.sex,
      '의 놀라운 지혜와 객관적인 판단력으로 아주 쉽게 유추해낼 수 있었다.',
    ]);
    await tachyon.print_and_wait('그렇다……');
    era.println();
    await tachyon.say_and_wait([
      '……역시, 내가 계속 ',
      callname,
      '의 이야기만 해서 그런 거겠지.',
    ]);
    era.println();
    await tachyon.print_and_wait(
      '사실, 단순히 모르모트라는 애칭으로 부르는 연인에 대한 이야기뿐만이 아니었다. 정확히는 연인과의 정사, 노골적으로 말하자면 닭살 돋는 애정 행각을 끊임없이 자랑했기 때문이었다.',
    );
    if (era.get('exp:32:성관계횟수') > era.get('exp:32:수면간횟수')) {
      await tachyon.print_and_wait([
        '만약 그런 화제가 그저 달콤한 밀어나 애매한 감정 수준에 머물렀다면, 적어도 주변 사람들, 특히 ',
        get_chara_talk(9).get_colored_name(),
        '과 ',
        get_chara_talk(19).get_colored_name(),
        '은 기꺼이 들어주었을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 대화는 언제나 침대 위에서의 은밀한 부분으로 흘러가기 일쑤였으니, 비슷한 주제만 나와도 얼굴을 붉히며 자리를 피하는 ',
        tachyon.sex,
        '들을 탓할 수는 없었다.',
      ]);
    }
    era.println();
    await tachyon.print_and_wait([
      get_chara_talk(25).get_colored_name(),
      '마저 참지 못하고 물었을 정도였다.',
    ]);
    await tachyon.print_and_wait('어째서 그렇게 한시도 쉬지 않고 애정을 과시하느냐고.');
    era.println();
    await tachyon.say_and_wait('……하지만, 멈출 수가 없는걸.');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 아무도 없는 공간에서 나직이 읊조렸다.',
    ]);
    era.println();
    await tachyon.print_and_wait('사랑하는 이와 나누는 입맞춤의 기쁨.');
    await tachyon.print_and_wait('운명의 상대와 껴안는 열정.');
    await tachyon.print_and_wait('좋은 인연과 맺어지는 감미로운 온기.');
    await tachyon.print_and_wait('함께할 이에게 느끼는 깊은 애정.');
    era.println();
    await tachyon.print_and_wait('이런 감정들을, 이런 말들을 누군가에게 털어놓지 않는다면,');
    await tachyon.print_and_wait('자기 자신이 이 거대한 열기에 안팎으로 타버릴 것만 같았다.');
    era.println();
    await tachyon.print_and_wait('너무나 좋아.');
    await tachyon.print_and_wait('너무나 사랑스러워.');
    await tachyon.print_and_wait('너무나 멋져.');
    await tachyon.print_and_wait('너무나 매혹적이야.');
    await tachyon.print_and_wait('너무나 늠름해.');
    await tachyon.print_and_wait('너무나 세련됐어.');
    await tachyon.print_and_wait('너무나 섹시해.');
    await tachyon.print_and_wait('너무나 마성적이야.');
    era.println();
    await tachyon.print_and_wait([
      '그 어떤 형용사를 ',
      me.sex,
      '에게 갖다 붙여도 부족함이 없었다.',
    ]);
    await tachyon.print_and_wait([
      '이지적인 ',
      tachyon.get_colored_name(),
      '에게 있어 연애에 빠져 허우적거리는 것은 의심할 여지 없이 어리석은 짓이었다.',
    ]);
    await tachyon.print_and_wait(
      '사실 내면에서도 끊임없이 목소리가 들려오고 있었다. 이렇게 어리석은 몰골을 한 자신을 비웃는 목소리가.',
    );
    await tachyon.print_and_wait('하지만……');
    era.println();
    await tachyon.print_and_wait('만약 이성이란 것이 이런 감정을 버려야 하는 것이라면,');
    await tachyon.print_and_wait(['만약 객관이란 것이 ', me.sex, '를 향한 사랑을 줄여야 하는 것이라면,']);
    era.println();
    await tachyon.print_and_wait('그렇다면 차라리 이성을 포기하겠다.');
    await tachyon.print_and_wait('정욕의 불꽃 속에서 춤추는 광대가 되리라.');
    era.println();
    await tachyon.say_and_wait('아아…… 나, 분명 미친 거겠지.');
    era.println();
    await tachyon.print_and_wait('틀림없다.');
    await tachyon.print_and_wait('이런 자신은 분명 미쳐버린 것이다.');
    await tachyon.print_and_wait(
      '과거의 자신은 고사하고, 일반적인 사회 통념상의 연인들과 비교해 보아도 자신의 사랑은 광기 어린 수준에 도달해 있었다.',
    );
    await tachyon.print_and_wait('하지만, 미쳤는지 아닌지는 진작에 판가름 난 것 아니겠는가.');
    era.println();
    await tachyon.print_and_wait([
      '온 세상이 다 안다. ',
      tachyon.get_colored_name(),
      '은 미친 ',
      tachyon.get_uma_sex_title(),
      '라는 것을.',
    ]);
    await tachyon.print_and_wait([
      '하지만 ',
      tachyon.get_colored_name(),
      '은 온 세상 따위 신경 쓰지 않았다.',
    ]);
    await tachyon.print_and_wait([
      me.sex,
      '가 안다면 그만이다. ',
      tachyon.get_colored_name(),
      '이 이런 ',
      tachyon.get_uma_sex_title(),
      '라는 것을.',
    ]);
    await tachyon.print_and_wait([
      '그리고 ',
      tachyon.get_colored_name(),
      '이 오로지 신경 쓰는 것은 ',
      me.sex,
      ' 뿐이었다.',
    ]);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '이 두려워하는 것은 단 한 가지, 바로 ',
      me.sex,
      '에게 미움받는 것이었다.',
    ]);
    await tachyon.print_and_wait(['자신의 행보가 ', me.sex, '와 어울리는가?']);
    await tachyon.print_and_wait(['자신의 애정을 ', me.sex, '가 좋아해 줄 것인가?']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 과연 ',
      me.sex,
      '와 서로 의지하며 함께 걸어갈 수 있는 사람인가.',
    ]);
    era.println();
    await tachyon.print_and_wait('아아, 결국은 그렇게 귀결되는 문제였다.');
    era.println();
    await tachyon.print_and_wait('타오르는 사랑은 눈부시지만, 찰나에 사라진다.');
    await tachyon.print_and_wait('그런 사랑은 지속되지 않는다.');
    await tachyon.print_and_wait('지금의 자신은 그저 불꽃에 뛰어드는 불나방에 불과했다.');
    era.println();
    await tachyon.print_and_wait('원해.');
    await tachyon.print_and_wait('원해.');
    await tachyon.print_and_wait('영원한 사랑을 원해, 불변의 사랑을 원해.');
    await tachyon.print_and_wait('다이아몬드처럼 영원하고도 영롱한 사랑을 원해.');
    await tachyon.print_and_wait(['당연하게 ', me.sex, '의 곁을 지키는 사랑을 원해.']);
    era.println();
    await tachyon.print_and_wait('하지만 이런 내가 정말 괜찮은 걸까.');
    await tachyon.print_and_wait('정말로 일생을 맡길 수 있는 상대인 걸까?');
    await tachyon.print_and_wait([me.sex, '는 영원히 이런 나를 사랑하겠다고 약속해 줄까.']);
    await tachyon.print_and_wait(['나에게는, 영원히 이런 ', me.sex, '를 사랑할 방법이 있는 걸까.']);
    era.println();
    tachyon.say('나는……');
    era.printButton('영원을 선택한다', 1);
    era.printButton('계속 불타오른다', 2);
    if ((await era.input()) === 1) {
      await tachyon.print_and_wait([me.sex, '와 어깨를 나란히 하고.']);
      await tachyon.print_and_wait([me.sex, '의 손을 잡고.']);
      await tachyon.print_and_wait([me.sex, '와 가정을 꾸리고.']);
      await tachyon.print_and_wait([me.sex, '의 아이를 낳고.']);
      era.println();
      await tachyon.print_and_wait('원하는 것은…… 안정되고 평온한 사랑.');
      await tachyon.print_and_wait('답이 너무나 간단하여 스스로도 놀랄 정도였다.');
      era.println();
      await tachyon.print_and_wait([
        '퇴근하고 집에 돌아왔을 때, 이미 집 앞에서 자신을 기다리고 있는 ',
        me.sex,
        '를 보는 것.',
      ]);
      await tachyon.print_and_wait([
        '만약 자신이 일찍 퇴근한다면 요리를 준비하며 ',
        me.sex,
        '가 돌아오기를 기다리는 것.',
      ]);
      await tachyon.print_and_wait([
        '비록 요리에 소질은 없지만, ',
        me.sex,
        '를 위해서라면 ',
        tachyon.get_colored_name(),
        '은 한때 연구에 바치겠노라 맹세했던 양손을 기꺼이 프라이팬과 냄비를 잡는 데 쓸 용의가 있었다.',
      ]);
      await tachyon.print_and_wait('휴일에는 둘이서 외출한다. 어디라도 상관없었다.');
      await tachyon.print_and_wait(
        '공원, 가구점, 혹은 실험 도구점이나 화학 약품점이라 해도.',
      );
      await tachyon.print_and_wait([
        me.sex,
        '와 소파 배치 같은 사소한 일로 다투는 것.',
      ]);
      await tachyon.print_and_wait(
        '밤이 될 때까지 서로 잘못을 인정하지 않고 고집을 피우다가도, 결국 누군가 먼저 시작한 따스한 포옹 한 번에 다시 화해하는 것.',
      );
      await tachyon.print_and_wait([
        '새집에 입주한 당일에는 분명 몹시 피곤할 것이다. 아무리 ',
        tachyon.get_uma_sex_title(),
        '의 체력이라 해도 버티기 힘들겠지.',
      ]);
      await tachyon.print_and_wait([
        '어렵사리 마련한 새집에서 오붓한 시간을 보내고 싶었으나, 결국 그대로 ',
        me.sex,
        '의 품에 안겨 잠들어버리는 것.',
      ]);
      if (tachyon.sex_code - 1 && me.sex_code === 1) {
        await tachyon.print_and_wait('임신 사실을 알게 되는 날, 그는 분명 깜짝 놀랄 것이다.');
        await tachyon.print_and_wait(
          '하지만 그렇게 갑작스럽게 말해선 안 된다. 그가 뿜어낼 강렬한 빛 때문에 이웃집에서 민원을 넣을지도 모르니까.',
        );
        await tachyon.print_and_wait('좋은 타이밍을 봐서, 햇살 비치는 아침 식사 시간에.');
        await tachyon.print_and_wait(
          '아무렇지 않은 말투로 말하는 거다.「자기야, 당신 아빠가 될 거야♡」라고.',
        );
        await tachyon.print_and_wait('그때 그는 어떤 표정을 지을까?');
        await tachyon.print_and_wait(
          '아이가 태어난 뒤에는 아이와 함께 우리들의 사진을 보고 싶다.',
        );
        await tachyon.print_and_wait('당시의 내가 어떻게 원조 실험체 군에게 홀딱 반했었는지 말이다.');

        await tachyon.print_and_wait(
          '아마 아이는 아빠가 참 불쌍하다고 생각하겠지. 엄마에게 이렇게나 괴롭힘당하다니 하고.',
        );
        await tachyon.print_and_wait('하지만 침대 위에서 괴롭힘당하는 건 늘 엄마 쪽이었지만 말이야♡');
        await tachyon.print_and_wait(
          '아이가 자라 가정을 꾸려 떠나간 뒤, 이불 속에서 몰래 흐느끼는 그를 위로해주고 싶다.',
        );
        await tachyon.print_and_wait(
          '……어쩌면 반대일지도 모르겠군. 의외로 내가 아이를 지극히 아끼는 어머니가 될지도 모르니까.',
        );
        era.println();
      }
      await tachyon.print_and_wait([
        '단순히 흥미롭기 때문에 ',
        me.sex,
        '와 함께하기로 선택한 것이 아니었다.',
      ]);
      await tachyon.print_and_wait([
        me.sex,
        '와 함께하는 매일매일이 너무나 흥미로웠기 때문이었다.',
      ]);
      await tachyon.print_and_wait('설령 그것이 지루하고 평범한 일상이라 할지라도.');
      await tachyon.print_and_wait([
        '곁에 있는 사람이 ',
        me.sex,
        '라는 사실만으로도 벌써부터 참을 수 없이 기대가 되었다.',
      ]);
      era.println();
      await me.say_and_wait('타키온! 나를 찾는다고 들었는데, 무슨 일이야?');
      era.println();
      await tachyon.print_and_wait('어떤 친절한 사람이 알려준 걸까? 아니면 이심전심인가?');
      await tachyon.print_and_wait('그런 건 아무래도 상관없었다.');
      await tachyon.print_and_wait('차분히 생각하자. 어떻게 말을 꺼내야 좋을까?');
      await tachyon.print_and_wait('음…… 이렇게 하면 되겠군.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 나는 말이야, 우리가 이제…… 다음 단계로 넘어갈 때가 된 게 아닐까 생각하고 있었네.',
      ]);
      await tachyon.print_and_wait('말을 내뱉는 순간, 마치 교회당의 종소리가 들려온 듯했다.');
      await sys_love_uma_in_event(32);
    } else {
      await tachyon.print_and_wait('영원…… 인가?');
      era.println();
      await tachyon.print_and_wait('모르겠다.');
      await tachyon.print_and_wait('생각하기 두렵다.');
      era.println();
      await tachyon.print_and_wait('나에게 그런 동반자가 될 자격이 있을까.');
      await tachyon.print_and_wait([
        me.sex,
        '의 곁을 지키며 평생의 시간을 함께 보낼 수 있을까.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '애초에 ',
        tachyon.get_colored_name(),
        '이라는 이 ',
        tachyon.get_phy_sex_title(),
        '가, 정말로 그런 동반자가, 그런 반려가, 그런……',
      ]);
      await tachyon.print_and_wait('연인이 될 수 있는 것일까?');
      era.println();
      await tachyon.print_and_wait('요리도 못 하는 나.');
      await tachyon.print_and_wait('자기중심적인 나.');
      await tachyon.print_and_wait('게으른 성격의 나.');
      await tachyon.print_and_wait('인내심 없는 나.');
      era.println();
      await tachyon.print_and_wait('지금은 받아들일 수 있을지도 모른다.');
      await tachyon.print_and_wait('그럼 미래에는?');
      await tachyon.print_and_wait('10년 뒤에는?');
      await tachyon.print_and_wait('20년 뒤에는?');
      await tachyon.print_and_wait('60년, 70년 뒤에는?');
      era.println();
      await tachyon.print_and_wait('이런 감정이 정말로 영원히 지속될 수 있을까?');
      era.println();
      await tachyon.print_and_wait('모르겠다.');
      await tachyon.print_and_wait('생각하기 두렵다.');
      era.println();
      await me.say_and_wait('타키온! 나를 찾는다고 들었는데, 무슨 일이야?');
      era.println();
      await tachyon.print_and_wait(
        '어떤 참견하기 좋아하는 사람이 알린 걸까? 아니면 운 나쁜 이심전심인가.',
      );
      await tachyon.print_and_wait('……그런 건 아무래도 상관없었다.');
      await tachyon.print_and_wait('억누르자. 냉각시키자. 봉인하자.');
      await tachyon.print_and_wait('자신의 이 우스꽝스러운 생각을 봉인하는 거다.');
      era.println();
      await tachyon.say_and_wait('……아무것도 아니네.');
      era.println();
      await tachyon.print_and_wait(
        '사랑이라는 이름의 이 활활 타오르는 불꽃이, 자신의 걱정과 불안을 연료 삼아 계속 타오르게 내버려 두었다.',
      );
      await tachyon.print_and_wait(
        '이것이 아마도 우유부단한 자신이 짊어져야 할 영원한 형벌일 것이다.',
      );
      era.drawLine();
      await tachyon.print_and_wait([
        me.get_colored_name(),
        '은(는) 고개를 저으며 내면의 기묘한 생각을 털어버리고, 망설임 없이 문밖으로 걸음을 옮겼다.',
      ]);
      era.set('cflag:32:호감거절', 89);
    }
  }

  async 99(tachyon, me, callname) {
    await half_life(tachyon, me, callname);
  }
};