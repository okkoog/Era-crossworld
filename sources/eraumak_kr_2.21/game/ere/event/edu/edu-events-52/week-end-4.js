const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const {
  common_talk_with_in_urara,
  common_talk_with_in_urara_end,
  common_talk_with_urara_48,
} = require('#/event/edu/edu-events-52/snippets');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} urara
 * @param {string|({content:string,[color]:string}|string)[]} content
 */
function urara_say_in_lines(urara, content) {
  return era.printAndWait(
    [
      '「',
      ...(Array.isArray(content) ? content : [content]),
      '」',
      urara.get_colored_name(),
    ],
    { align: 'right', color: urara.color },
  );
}

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 48] = async (urara, me, in_urara, callname, edu_marks) => {
    era.set('cflag:52:축제이벤트표시', 0);
    if (RaceHistory.get(52).get_result(47 + 48)) {
      await in_urara.say_as_unknown_and_wait([
        '부디 저의 마지막을 기억해 주세요, 트레이너',
        me.get_adult_sex_title(),
        '.',
      ]);
      return;
    }
    await print_event_name(
      [
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '의 말, ',
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '의 이름',
      ],
      urara,
    );
    await in_urara.say_as_unknown_and_wait([
      '스스로 쫓는 미래는 어떤 색의 꿈일까요? 트레이너',
      me.get_adult_sex_title(),
      '은 답을 알고 계시나요?',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '……하아, 분명 내가 ',
      urara.sex,
      '를 지켜주겠다고 말했는데……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '어느덧 ',
      urara.get_colored_name(),
      '가 클래식급에 도전하는 날도 저물어 가네. 만난 지 2년, 정말 많은 일이 있었어……',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 손을 잡고 거리를 거닐며 맑은 하늘을 바라보니, 겨울의 공기도 그리 차갑게 느껴지지 않았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 감상에 젖어 있었고, 곁에서 호기심 어린 눈으로 두리번거리던 ',
      urara.get_colored_name(),
      '가 한산한 거리의 풍경에 대해 신선한 감상을 입에 담았다.',
    ]);
    await urara.say_and_wait(
      '오늘은 왠지 조용하네! 거리의 사람들도 많이 줄어든 것 같고, 왠지 상상했던 거랑은 조금 다른 느낌이야.',
    );

    era.printButton(
      '「아리마 기념이 막 끝나서 그런 거 아닐까? 추위와 맞서기보다는 다들 집에서 레이스 이야기를 하는 걸 더 좋아할지도 몰라.」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '헤헤~ ',
      callname,
      '! 올해가 끝나면 나도 더 중요한 레이스에 나갈 수 있는 거지, 그치?',
    ]);

    era.printButton('「우라라, 오늘따라 정말 기분 좋아 보이네.」', 1);
    await era.input();

    await urara.say_and_wait([
      '그야 당연하지! 모두가 우리를 응원해주고 있고, ',
      callname,
      '도 계속 노력해 줬으니까! 나, 내년에는 분명 더 빨리 달릴 수 있을 거야!',
    ]);
    await era.printAndWait([
      '그래. ',
      urara.get_colored_name(),
      '와 함께 지금까지 해온 모든 일은 결코 헛된 것이 아니었다. 앞으로 우리가 멈추지만 않는다면——',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '잠깐, 이 불길한 예감은 뭐지? 당신 설마 이상한 생각 하고 있는 건 아니겠죠?',
    );
    await era.printAndWait([
      '등 뒤에서 어디선가 느껴지는 서늘함과 동시에, 알 수 없는 불길함을 감지한 ',
      me.get_colored_name(),
      '은(는) 서둘러 화제를 돌렸다.',
    ]);

    era.printButton('「그러고 보니, 우라라는 왜 아리마 기념에 끌리게 된 거야?」', 1);
    await era.input();

    await era.printAndWait([
      '담당 우마무스메와 함께 커다란 전광판에서 흘러나오는 레이스 하이라이트를 바라보며, ',
      me.get_colored_name(),
      '은(는) 다시 시선을 빼앗긴 ',
      urara.get_colored_name(),
      '에게 조용히 물었다.',
    ]);
    await era.printAndWait([
      '전광판에는 의심할 여지 없이 어제의 「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」이 상영되고 있었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 직접 ',
      me.get_colored_name(),
      '과(와) 함께 현장에 가고 싶다고 요청했고, 결국 사람들 앞에서 「출주 선언」까지 하게 만들었던 그 레이스였다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '의 질문에 ',
      urara.get_colored_name(),
      '는 시선을 떼지 않은 채, 오히려 「동문서답」 같은 대답을 내놓았다.',
    ]);
    await urara.say_and_wait([
      '으음— ',
      callname,
      '는 처음 우라라랑 만났을 때부터 항상 스트레스가 쌓이기 쉬운 타입이었지!',
    ]);
    await urara.say_and_wait([
      '하지만 어떤 일들은 ',
      callname,
      '만이 해낼 수 있는 거야! 나랑 모두에게는 ',
      callname,
      '가 꼭 필요해. 그건 변하지 않아!',
    ]);
    await urara.say_and_wait([
      '나, 이제 선택했으니까. 그러니까 ',
      callname,
      '도 기운 차려야 해, 알았지?',
    ]);

    era.printButton('「결심한 거야? 아리마에 나가겠다고?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응, 결정했어! 나, ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에 나갈 거야!',
    ]);
    await urara.say_and_wait(
      '트레센의 모두가 투표제로 나갈 수 있다고 가르쳐 줬어. 그러니까 열심히 하면 나도 할 수 있어!',
    );
    await urara.say_and_wait([
      '그리고 나도 알고 싶어. 상점가 사람들, 우라라를 응원해 주는 사람들, 그리고 ',
      callname,
      '……',
    ]);
    await urara.say_and_wait('모두의 기대에 보답하기 위해서, 내가 얼마나 높이 날 수 있는지—');
    await era.printAndWait([
      '옆모습을 뚫어지게 바라보던 ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '의 앳된 얼굴에서 전에는 본 적 없는 날카로운 결의를 보았다.',
    ]);
    await era.printAndWait([
      '그것은 경기장에 서서 게이트가 열리기를 기다리는 「역전의 ',
      urara.get_uma_sex_title(),
      '」에 걸맞은 눈빛이었다.',
    ]);
    await era.printAndWait([
      '아마 지금도 많은 사람이 ',
      urara.get_colored_name(),
      '의 결정을 그저 일시적인 기분 탓이라 의심하겠지만, 지금 이 순간 ',
      me.get_colored_name(),
      '은(는) ',
      urara.sex,
      '가 결코 가벼운 마음으로 정한 게 아니라는 사실을 확신했다.',
    ]);
    await era.printAndWait([
      '더 이상의 말은 필요 없었다. ',
      me.get_colored_name(),
      '은(는) 다시 화면 속에서 빛나며 질주하는 이들에게 시선을 돌렸다.',
    ]);

    era.printButton(
      '「이 길은 아주 힘들 거야. 어쩌면 즐겁지 않을지도 몰라. 각오는 되어 있어?」',
      1,
    );
    await era.input();

    await urara.say_and_wait('응! 지금의 나는 아마 세상에서 가장 용감한 사람일지도 몰라!');
    await era.printAndWait([
      '서로 눈을 맞추지 않아도, 담당 우마무스메의 결의는 ',
      me.get_colored_name(),
      '의 마음속에 고스란히 전해졌다.',
    ]);
    await era.printAndWait([
      '어쩌면 지금 ',
      urara.get_colored_name(),
      '와 눈부시게 빛나는 이들 사이의 거리는, 이 얇은 스크린 한 장 차이일지도 모른다.',
    ]);
    await era.printAndWait(
      '트레이너의 입장으로서, 목표로 삼을 레이스를 정했다는 것은 기쁜 일이다. 비록 그것이 달성하기 어려운 목표일지라도.',
    );
    await era.printAndWait([
      '무엇보다 ',
      urara.get_colored_name(),
      '가 드디어 스스로 도전하고 싶은 목표를 가졌다. ',
      urara.sex,
      '가 내린 결정이라면, 진심을 다해 ',
      urara.sex,
      '를 지지해 주어야 한다.',
    ]);
    await era.printAndWait([
      '진지하게 임하는 ',
      urara.get_colored_name(),
      '가 기적을 불러올 거라 믿는 것? 그것도 나쁘지 않다. 애초에 처음 만났을 때부터 ',
      urara.sex,
      '는 이미……',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '그렇네요. 무슨 일이 있어도 당신은 언제나 우라라를 믿어줄 테니까요, 그렇죠?',
    );
    await in_urara.say_as_unknown_and_wait([
      '설령 ',
      urara.sex,
      '가 당신이 생각하는 것만큼 강하지 않더라도 말이죠.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 닮은 듯 닮지 않은 목소리가 들린 찰나, 주변의 모든 것이 일시정지 버튼을 누른 것처럼 정지했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 깜짝 놀랄 법도 했지만, 몸도 정신도 마치 이 상황에 익숙해진 것처럼 평온했다.',
    ]);
    await era.printAndWait([
      '마치 안개 속에서 수없이 반복했던 꿈처럼, ',
      me.get_colored_name(),
      '은(는) 천천히 고개를 돌려 곁에 선 「',
      in_urara.get_colored_actual_name(),
      '」와 시선을 맞추었다.',
    ]);
    await era.printAndWait(
      '주변의 드문드문한 행인들과 공기는 그대로 굳어버렸지만, 전광판 속 약간 노이즈가 낀 질주의 그림자만은 결말이 정해진 레이스를 계속하고 있었다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '마치 운명 같죠? 이를테면 당신과 내가 처음 만난 게 아니라는 사실처럼요. 당신이 기억하지 못할 뿐.',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      '와 똑같은 얼굴에, 비슷하면서도 성숙하고 서먹한 미소를 띤 채 ',
      urara.sex,
      '는 같은 자리에서 ',
      me.get_colored_name(),
      '와 대화를 이어갔다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '당신과 ',
      urara.sex,
      '가 그것을 바란다면, 저는 계속 기록해 나가겠어요. 그럼 그 전에, 잠시 이야기를 나눠볼까요?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 대답을 기다리지도 않고, 혹은 ',
      urara.get_colored_name(),
      '처럼 ',
      me.get_colored_name(),
      '의 긍정을 읽어낸 듯, ',
      urara.sex,
      '는 관찰자처럼 어느 「이야기」를 들려주기 시작했다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '당신은 이야기를 좋아하시나요? 그건 아주 보잘것없고 작은…… ',
      urara.get_uma_sex_title(),
      '의 이야기랍니다——',
    ]);
    era.drawLine();
    await common_talk_with_in_urara(urara, me, in_urara);
    await in_urara.say_as_unknown_and_wait(
      '그럼 마지막으로 우라라의 현황에 대해 조금만 더 이야기해 볼까요.',
    );
    if (edu_marks.fans < 25000) {
      await in_urara.say_as_unknown_and_wait([
        '지금의 우라라가 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '에 나가려면, 먼저 중상 레이스를 통해 인지도를 쌓아야 해요.',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '당신에겐 우라라와 함께 승리할 각오가 되어 있겠지만, 우라라에겐 경기장에 서기 전의 압박감을 견뎌낼 각오가 되어 있을까요?',
      );
    } else {
      await in_urara.say_as_unknown_and_wait(
        '당신은 제 간청을 들어주셨군요. 당신은 정말 의지가 되는 분이네요. 그래서 우라라가 계속 당신을 의지하는 거겠죠.',
      );
      await in_urara.say_as_unknown_and_wait([
        '그러니 ',
        urara.sex,
        '가 아리마 기념에 나가겠다는 걸, 처음부터 당신이 말려주길 바란 제가 잘못이었네요.',
      ]);
    }
    await common_talk_with_in_urara_end(urara, me, in_urara, callname);
    await era.printAndWait([
      me.get_colored_name(),
      '의 곁에 남은 것은, 여전히 자신의 트레이너와 흥분된 목소리로 미래를 이야기하는 「',
      urara.get_colored_actual_name(),
      '」였다.',
    ]);
    await era.printAndWait('대낮에 귀신이라도 본 기분이다, 세 여신이시여——');
    await era.printAndWait([
      '하지만 ',
      urara.sex,
      '의 말대로, 지금의 ',
      urara.get_colored_name(),
      '는 미래를 위한 준비가 조금 부족할지도 모른다. 하지만 그것이야말로 자신이 존재하는 이유가 아닌가.',
    ]);
    await era.printAndWait([
      '바람에 굳은 손가락을 가볍게 쥐었다 펴며, ',
      me.get_colored_name(),
      '은(는) 다시 곁에 있는 ',
      urara.get_colored_name(),
      '의 웃는 얼굴에 집중했다.',
    ]);
    await urara.say_and_wait(
      '……그리고 말이야, 사실 처음에 그런 레이스를 봤을 때 가슴이 엄청 두근거렸어!',
    );
    await urara.say_and_wait([
      '헤헤~ 근데 이 말은 ',
      sys_get_colored_callname(52, 30),
      '이 『첫사랑 같아서 오해받을지도 모른다』고 비밀로 하라고 했었거든.',
    ]);
    await urara.say_and_wait([
      '그래도 역시 ',
      callname,
      '에게는 말해야 할 것 같아서! 왜냐면 우라라, 트레이너를 처음 봤을 때도 가슴이 엄청 두근거렸거든……',
    ]);
    await era.printAndWait(
      '……방금 뭔가 심상치 않은 내용을 들은 것 같지만, 일단은 모른 척하기로 했다.',
    );
    await common_talk_with_urara_48(urara, me, in_urara, callname);
  };

  handlers[95 + 19] = async (urara, me, in_urara, callname) => {
    await print_event_name('「심야의 채팅방 기록」', urara);
    const rice = get_chara_talk(30);
    era.drawLine({ content: '【5월 XX일 「우라라」와 「라이스 샤워」 10:32】' });
    await rice.say_and_wait([
      sys_get_colored_callname(30, 52),
      ', 아직 접속 중이라고 뜨는데…… 안 자는 거야?',
    ]);
    era.println();
    await urara_say_in_lines(
      urara,
      '응! 요즘 좀 잠이 안 와서, 정신을 차려보면 매번 이 시간이더라고!',
    );
    await urara_say_in_lines(urara, [
      '근데 벌써 이런 시간인데, ',
      sys_get_colored_callname(52, 30),
      ', 무슨 일이야?',
    ]);
    era.println();
    await rice.say_and_wait([
      '지난번 일 때문에, ',
      sys_get_colored_callname(30, 52),
      ', 아직도 마음이 아픈 거야?',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '어? 에헤? 우라라는 그렇지 않아! ',
      sys_get_colored_callname(52, 30),
      ', 왜 그렇게 생각해?',
    ]);
    era.println();
    await rice.say_and_wait([
      '왜냐면 ',
      sys_get_colored_callname(30, 52),
      '은 자신을 속이는 게 서투른걸. 요즘 계속 기운이 없어 보여서, ',
      sys_get_callname(30, 30),
      '가 매일 뒤를 따라다녔는데도 눈치채지 못했잖아?',
    ]);
    era.println();
    await urara_say_in_lines(urara, '엣, 뒤를 따라다녔다고? 그랬어? 전혀 몰랐어!');
    era.println();
    await rice.say_and_wait([
      '미안해! 그게, ',
      sys_get_colored_callname(30, 52),
      '이 요즘 기운이 없어 보였는데, 좀처럼 말을 걸 기회가 없어서……',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '괜찮아! 그리고 ',
      sys_get_colored_callname(52, 30),
      '은 잘못한 게 없는걸! 하지만 나도 잘 모르겠어서, 어떻게 해야 좋을지 모르겠어.',
    ]);
    await urara_say_in_lines(
      urara,
      '나도 이대로는 안 된다고 생각하지만, 그날 일을 떠올리면 자꾸 눈물이 날 것 같아……',
    );
    era.println();
    await rice.say_and_wait([
      '미안해! ',
      sys_get_colored_callname(30, 52),
      ', 정말 괴롭다면 우선 마음을 가라앉히자.',
    ]);
    await rice.say_and_wait([
      '그리고, 비록 ',
      sys_get_callname(30, 30),
      '도 미덥지 못할지도 모르지만, ',
      sys_get_colored_callname(30, 52),
      '만 괜찮다면 ',
      sys_get_callname(30, 30),
      '의 이야기를 들어줄래?',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      sys_get_colored_callname(52, 30),
      '은 정말 침착하네. 혹시 이런 일을 자주 겪는 거야?',
    ]);
    era.println();
    await rice.say_and_wait([
      '자, 자주까지는 아니지만…… 상황은 다를지 몰라도, 라이스도 예전에 아주 심한 말을 들은 적이 있어.',
    ]);
    if (era.get('cflag:30:명예의전당')) {
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        '도 들어본 적 있지? 옛날에 ',
        sys_get_callname(30, 30),
        '가 누군가에게 아주 소중한 레이스를 실수로 이겨버린 적이 있다는걸.',
      ]);
      await rice.say_and_wait(
        '그때 주변은 온통 실망 섞인 한숨뿐이었고, 화를 내는 사람들도 많았어. 정말 너무하지?',
      );
      era.println();
      await urara_say_in_lines(urara, [
        '응, 그때 ',
        sys_get_colored_callname(52, 30),
        ', 정말 속상했겠다……',
      ]);
      era.println();
      await rice.say_and_wait([
        '당시의 ',
        sys_get_callname(30, 30),
        '는 정말 방황했었어. 하지만 그래도, ',
        sys_get_callname(30, 30),
        '는 자신이 틀렸다고 생각하지 않아.',
      ]);
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        '은 놀랐을지도 모르지만, ',
        sys_get_callname(30, 30),
        '의 생각은 그때나 지금이나 변함없어.',
      ]);
      await rice.say_and_wait(
        '한숨 소리는 무서웠지만, 그래도 계속 달려가다 보면 언젠가 모두가 너의 모든 것을 똑바로 봐줄 날이 올 거야.',
      );
      await rice.say_and_wait([
        '그러니 ',
        sys_get_callname(30, 30),
        '는 승리에 대해 사과한 적이 없어. 만약 비난에 쉽게 굴복한다면, 그건 지금까지 응원해 준 사람들의 축복을 저버리는 거니까.',
      ]);
    } else {
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        '도 들어본 적 있지? ',
        sys_get_callname(30, 30),
        '가 누군가에게 아주 소중한 승리를 실수로 빼앗아 버렸던 일.',
      ]);
      await rice.say_and_wait(
        '그 결과, 주변은 온통 실망 섞인 한숨이었고 화내는 사람도 정말 많았어. 참 너무한 일이지……',
      );
      era.println();
      await urara_say_in_lines(urara, [
        '응, 그때 ',
        sys_get_colored_callname(52, 30),
        '는 참 많이 힘들었겠다……',
      ]);
      era.println();
      await rice.say_and_wait([
        '하지만, ',
        sys_get_callname(30, 30),
        '는 역시 승리자라고 생각해.',
      ]);
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        '이 듣기엔 좀 이상할지 모르지만, ',
        sys_get_callname(30, 30),
        '는 진심으로 그렇게 믿어.',
      ]);
      await rice.say_and_wait(
        '한숨 소리에 쓰러질 뻔도 했지만, 계속 달리는 사이에 어느덧 축복해 주는 목소리도 늘어났거든.',
      );
      await rice.say_and_wait([
        '그러니 ',
        sys_get_callname(30, 30),
        '를 축복해 주는 사람들을 위해, 지금의 ',
        sys_get_callname(30, 30),
        '는 앞으로도 계속 이겨나갈 거야.',
      ]);
    }
    await rice.say_and_wait([
      '그러니까 ',
      sys_get_colored_callname(30, 52),
      ', 너무 걱정하지 마. 앞으로도 평소처럼 계속 달려 나가면 돼——',
    ]);

    era.drawLine({ content: '【5월 XX일 「우라라」와 「킹 헤일로」 11:01】' });
    const halo = get_chara_talk(61);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 52),
      ', 이 밤늦게까지 안 자는 거야? 내일 늦잠이라도 자면 ',
      sys_get_colored_callname(61, 0),
      '도 곤란해할걸?',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '하지만 ',
      sys_get_colored_callname(52, 61),
      '도 안 자고 있잖아?',
    ]);
    era.println();
    if (era.get('cflag:61:명예의전당')) {
      await halo.say_and_wait(
        '난 이제 예전처럼 빡빡한 레이스 스케줄이 없으니까. 지금은 그냥 기숙사에 잠시 머무는 상태나 다름없거든.',
      );
      await halo.say_and_wait([
        '그보다 너 말이야, 건너편 침대 이불 밑에서 스마트폰 빛이 다 새어 나오고 있다고.',
      ]);
      era.println();
      await urara_say_in_lines(urara, [
        sys_get_colored_callname(52, 61),
        ', 화난 거야……?',
      ]);
      era.println();
      await halo.say_and_wait([
        '화난 거 아니야. 그냥 요즘 ',
        sys_get_colored_callname(61, 52),
        '가 계속 멍하니 있길래, 아직도 며칠 전 일 때문에 속상해하는 건가 싶어서.',
      ]);
    } else {
      await halo.say_and_wait(
        '사실 잘 자고 있었는데, 빛이 새어 나와서 깼어. 이불 밑의 스마트폰 빛 말이야.',
      );
      await halo.say_and_wait(
        '내가 말했지, 밤에 폰을 볼 거면 밝기라도 좀 낮추라고.',
      );
      era.println();
      await urara_say_in_lines(urara, '미안해……');
      era.println();
      await halo.say_and_wait([
        '사과하라는 게 아니야. 그냥 요즘 ',
        sys_get_colored_callname(61, 52),
        '가 몸 관리도 제대로 안 하는 것 같아서, 아직 마음이 많이 안 좋은가 걱정돼서 그래.',
      ]);
    }
    era.println();
    await urara_say_in_lines(urara, '응, 사실은——');
    await urara_say_in_lines(urara, '——');

    era.drawLine({ content: '【5월 XX일 「우라라」와 「킹 헤일로」 11:13】' });
    await urara_say_in_lines(urara, [
      '그래서, ',
      sys_get_colored_callname(52, 30),
      '이 그렇게 말해줬어……',
    ]);
    await urara_say_in_lines(urara, [
      '킹짱, 내가 더 열심히 하면 사람들도 이제 슬퍼하지 않을까?',
    ]);
    await urara_say_in_lines(
      urara,
      '내가 계속 포기하지 않으면, 더는 『우라라는 레이스에 나오면 안 돼』라고 생각하는 사람이 없어질까?',
    );
    era.println();
    await halo.say_and_wait([
      '……미안, ',
      sys_get_colored_callname(61, 52),
      '. 진작 너에게 말해줬어야 했는데. 그리고 라이스의 방법은 네 상황에 완전히 맞지는 않아.',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '어? ',
      sys_get_colored_callname(52, 61),
      ', 그게 무슨 뜻이야?',
    ]);
    era.println();
    await halo.say_and_wait([
      '하아…… 내가 지금부터 할 말이 ',
      sys_get_colored_callname(61, 52),
      '를 더 힘들게 할지도 모르지만, 부디 끝까지 들어줘.',
    ]);
    await halo.say_and_wait(
      '——사람들이 슬퍼하지 않을 수는 없어. 지고 나서 승자에게 아무렇지 않게 『축하해』라고 말할 수 있는 사람은 그리 많지 않거든.',
    );
    await halo.say_and_wait([
      '지금의 ',
      sys_get_colored_callname(61, 52),
      '도 이미 알겠지만, 대다수의 ',
      urara.get_uma_sex_title(),
      '에게 어떤 레이스는 평생에 단 한 번뿐인 기회야.',
    ]);
    await halo.say_and_wait(
      '염원을 쫓다 쓰러지거나, 목표조차 보지 못한 채 길을 잃는 일은 셀 수 없이 많아.',
    );
    await halo.say_and_wait(
      '야박하게 들릴지 몰라도, 승리를 쟁취하려 한다면 모든 사람을 행복하게 만드는 건 불가능해.',
    );
    era.println();
    await urara_say_in_lines(urara, ['그럴 수가…… 그럼 킹짱도?']);
    era.println();
    await halo.say_and_wait(
      '그래서 나는 타인의 저주조차 받아들이고 당당하게 달려 나가는 거야. 비록 그것이 공정하지 않더라도.',
    );
    await halo.say_and_wait([
      '일류 ',
      urara.get_uma_sex_title(),
      '에게는, 짜증 나긴 해도 타인의 비난이나 원망 따위는 중요하지 않거든.',
    ]);
    await halo.say_and_wait([
      '중요한 건, 자신의 승리를 어떻게 생각하느냐 하는 것이고, 그 답을 낼 수 있는 건 자기 자신뿐이야.',
    ]);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 52),
      ', 너 예전에 이기고 싶다고 했었지.',
    ]);
    era.println();
    await urara_say_in_lines(
      urara,
      '응, 모두를 위해서만이 아니라 지금의 우라라도 이기고 싶어. 그런데 그런 일이 생겨서.',
    );
    era.println();
    await halo.say_and_wait(
      '그렇다면 일단은 지금 그대로도 괜찮아. 계속 고개를 들고 이겨 나가다 보면 분명 답을 찾을 수 있을 거야.',
    );
    await halo.say_and_wait([
      sys_get_colored_callname(61, 52),
      ', 그러니 너무 오랫동안 마음 아파하지 마.',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      sys_get_colored_callname(52, 61),
      '의 말은 항상 어렵네. 하지만 ',
      sys_get_colored_callname(52, 61),
      '이 그렇게 말해줬으니까, 나도 한번 해볼게!',
    ]);
    era.println();
    await halo.say_and_wait([
      '그래, 고마워…… ',
      sys_get_colored_callname(61, 52),
      ', 넌 분명 괜찮을 거야.',
    ]);
    await halo.say_and_wait(['지금의 너도 『일류 우라라』니까——']);

    era.drawLine({ content: '【5월 XX일 「우라라」와 「우라라?」 ??:??】' });
    await in_urara.say_as_unknown_and_wait(
      '또 이러네요. 소위 친구라는 이들은 여전히 걱정뿐인 말들만 늘어놓고.',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '그렇게 말하면 안 돼! 그리고 너도 우라라의 친구잖아.',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait([
      '저도 알아요. 하지만 우라라도 알고 있잖아요? ',
      urara.sex,
      '들은 진정으로 당신을 도와줄 수 없다는걸.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '참고는 할 수 있겠지만, 타인의 답을 베낄 수는 없어. 지금까지 길을 걸어온 건 우라라와 트레이너잖아?',
    );
    await in_urara.say_as_unknown_and_wait(
      '그래도 괴롭다면 나에게 기대도 좋아. 나에겐 마침 한 알의 『해독제』가 있거든.',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '……헤헤~ 또 시작이네. 정말 비겁해, 친구한테 항상 그렇게 심한 진심을 말하다니.',
    );
    await urara_say_in_lines(
      urara,
      '그리고 내가 만약 네 부탁을 들어주면, 너도 정말 행복하게 웃어줄 거야?',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait(
      '당연하지, 내가 몇 번이나 말했잖아. 우라라의 행복이 곧 나의 행복이라고……',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '하지만 우라라가 답을 내야 한다면, 난 네 방법이 옳다고 생각하지 않아.',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait('아하, 유감이네. 또 우라라에게 거절당했구나.');
    await in_urara.say_as_unknown_and_wait(
      '하지만 정말로 우라라를 상처 입힐 생각은 추호도 없었어. 적어도 그 점만은 믿어줘.',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '응, 우린 항상 서로를 믿고 있어. 그러니까 우라라는 언제까지고 네 부탁을 들어줄 수 없는 거야.',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait('역시 이번에도, 아무것도 하지 못한 건가——');

    era.drawLine();
    await urara.print_and_wait([
      '묘한 전자음과 함께 「',
      urara.sex,
      '」는 떠나갔고, 어둠이 다시 좁은 이불 속으로 스며들었다. 차갑고 불안한 공기가 방을 채웠다.',
    ]);
    await urara.print_and_wait(
      '마치 꼬리가 잡힌 기분이다. 지금 바로 잠든다면 분명 악몽을 꿀 것만 같았다.',
    );
    await urara.print_and_wait([
      '하지만 빨리 자지 않으면 다들 걱정할 거야. 더는 ',
      callname,
      '를 걱정하게 만들면 안 돼!',
    ]);
    await urara.say_and_wait([callname, '、', callname, '……'], true);
    await urara.print_and_wait(
      '눈가에서 몰래 빠져나가려던 눈물을 닦아내고 이불을 여미니, 방금 내려놓은 스마트폰의 온기가 느껴졌다.',
    );
    await urara.print_and_wait(
      '이런 행동은 혼날지도 모른다. 내일 수면 부족으로 잘 달리지 못하게 될지도 모른다. 하지만……',
    );
    await urara.print_and_wait(
      '오늘 밤 마지막 남은 어리광을 부리며 귀를 접고, 어둠 속에서 다시 손바닥만 한 화면을 밝혔다.',
    );
    await urara.print_and_wait([
      '채팅방도 아니고, 다른 것도 아니다…… 이 시간에 전화를 하면 분명 ',
      callname,
      '에게 실례가 될 테고, 킹도 화를 낼지도 모른다.',
    ]);
    await urara.print_and_wait([
      '하지만 부탁이야, 설령 혼난다고 해도—— 지금 당장 ',
      callname,
      '를 보고 싶어. 우라라, 지금 당장 ',
      callname,
      '의 목소리를 듣고 싶어!',
    ]);
    await urara.print_and_wait(['그러니까, ', callname, ', 제발 받아줘——']);
    era.drawLine({ content: `【5월 XX일 「우라라」와 「${callname}」 11:50】` });
    await urara_say_in_lines(urara, '——');
    await urara_say_in_lines(urara, [callname, ', 아직 깨어 있어?']);
    let wait_flag = get_attr_and_print_in_event(52, [0, 0, 0, 5, 5], 0);
    wait_flag = sys_like_chara(30, 52, 100) || wait_flag;
    wait_flag = sys_like_chara(61, 52, 100) || wait_flag;
    wait_flag = sys_like_chara(52, 30, 50) || wait_flag;
    wait_flag = sys_like_chara(52, 61, 50) || wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};