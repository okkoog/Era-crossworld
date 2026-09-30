const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const AgLifeMarks = require('#/data/event/life-event-marks/life-event-marks-19');

/**
 * @param {CharaTalk} digital
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (digital, me, callname) => {
  const life_marks = new AgLifeMarks();
  const child = digital.sex_code - 1 ? '딸' : '아들';
  const parent = digital.sex_code === 1 ? '어머니' : '아버지';
  if (life_marks.again_89) {
    await print_event_name('결국은, 덧없는 물거품', digital);
    await me.say_and_wait(['주말인데, 바쁜 와중에 잠시라도 ', child, '을 보러 갈까?']);
    await me.say_and_wait([
      '학생 기숙사 입구에 도착해서, ',
      child,
      '에게 전화를 걸려던 참에……',
    ]);
    await digital.say_and_wait(['에? ', callname, ' 여기서 뭐 하고 계세요?']);
    era.printButton(`무슨 소리야, ${child}을 기다리고 있잖아.`, 1);
    await era.input();
    await era.printAndWait([
      '그 말을 들은 ',
      digital.get_colored_name(),
      '은, 왠지 모르게 고개를 숙였다.',
    ]);
    await digital.say_and_wait(
      ['……이, 이제 때가 된 건가…… 다, 다시 한 번 ', callname, '에게 진실을 말해야 하는 건가……'],
      true,
    );
    await digital.print_and_wait('난 어떻게 해야……');
    era.printButton('말한다', 1);
    era.printButton('말하지 않는다', 2);
    const ret = await era.input();
    if (ret === 1) {
      await digital.say_and_wait(
        '나…… 나는 다시 진실을 알리는 것이 오직…… 눈물만을 가져올 거라 생각했지만——',
        true,
      );
      await digital.say_and_wait(
        ['하지만, 이런 기분…… ', callname, '에게 안겨 청혼받는 이 기분은…… 정말이지 너무나도 좋아……'],
        true,
      );
      await sys_love_uma_in_event(19);
    } else {
      await digital.say_and_wait([
        '아뇨, 역시 관두죠. ',
        callname,
        '와 ',
        child,
        '과 함께하는 매일매일이, 정말로 행복하니까요.',
      ]);
      await digital.say_and_wait(
        '저는 이런 나날들이 계속 이어지기를 바라요. 부디 저를 용서해 주세요.',
        true,
      );
      era.set('cflag:19:호감거절', 89);
      await punish_rejecting_love(19);
    }
  } else {
    life_marks.again_89 = 1;
    const m_call_d = sys_get_colored_callname(0, 19);
    await print_event_name('동거! 역시 이렇게 되는 거겠죠?', digital);
    await era.printAndWait(
      '매일 바쁜 업무를 끝내고 집에 돌아왔을 때, 주방에서 풍겨오는 맛있는 냄새와 누군가 콧노래를 부르는 소리가 들린다면, 그건 분명 우연히 트럭에 치여 이세계로 보내졌거나 기억이 지워진 것일 터다.',
    );
    await era.printAndWait([
      '그러니까, 대체 언제부터 ',
      m_call_d,
      '이 열쇠를 챙겨서 ',
      me.get_colored_name(),
      '의 집에 오게 된 걸까?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 어느 날 밤, 어느 해변에서 ',
      m_call_d,
      '이 ',
      me.get_colored_name(),
      '에게 고백했고, 그렇게 자연스럽게 ',
      m_call_d,
      '이 ',
      me.get_colored_name(),
      '의 여자친구가 되었던 일을 생생하게 기억하고 있다.',
    ]);
    await era.printAndWait('사실…… 사귀고 나서도, 평소 하는 행동에는 별 차이가 없었다……');
    await era.printAndWait('여전히 똑같이, 같이 최애를 파고, 같이 성지 순례를 다녔다.');
    await era.printAndWait('그다음은?');
    await digital.say_and_wait('안 돼, 이러면 예전이랑 다를 게 없잖아요?!');
    await digital.say_and_wait('제 이전 추측이 맞았던 걸까요…… 아니야!');
    await era.printAndWait([
      '음…… 그래서 변화를 주기 위해, 듣기로는 ',
      m_call_d,
      '이 어떤 동인지들을 참고해서 ',
      me.get_colored_name(),
      '(으)로부터 열쇠를 빌려 갔다고 한다.',
    ]);
    await era.printAndWait(
      '열쇠를 빌려 가긴 했지만, 처음 며칠 동안은 아무 일도 일어나지 않아서 그냥 일시적인 변덕이었나 생각하며 대수롭지 않게 여기고 있었다.',
    );
    await era.printAndWait([
      '그래서 어느 날, ',
      me.get_colored_name(),
      '이(가) 지친 몸을 이끌고 겨우 열쇠를 구멍에 꽂았을 때, 멍한 정신 속에서 금속 마찰음 이외의 소리를 들었을 때는 꽤 놀랄 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '그 후로 ',
      m_call_d,
      '이 ',
      me.get_colored_name(),
      '의 집에 오는 빈도는 점점 잦아졌다.',
    ]);
    await era.printAndWait('본래 무미건조했던 집안의 공기도 점차 색다른 색채로 물들어갔다.');
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) 조금 이상하면서도 웃음이 나게 했던 것은, 가장 먼저 ',
      me.get_colored_name(),
      '의 방을 점령한 것이……',
    ]);
    await era.printAndWait(['온갖 ', digital.get_uma_sex_title(), ' 굿즈들이었다는 점이다.']);
    await era.printAndWait([
      '예를 들면 ',
      get_chara_talk(32).get_colored_name(),
      '의 홍차 잔, ',
      get_chara_talk(25).get_colored_name(),
      '의 커피 잔, ',
      get_chara_talk(13).get_colored_name(),
      '의 마우스 패드, ',
      get_chara_talk(87).get_colored_name(),
      '의 인형……',
    ]);
    await era.printAndWait([
      '그중에서도 ',
      me.get_colored_name(),
      '이(가) 가장 신기하게 생각한 것은, 심지어 토마촙 인형까지 있었다는 것이다. 바로 ',
      get_chara_talk(99).get_colored_name(),
      '가 있는 토마코마이의 그 마스코트 캐릭터 말이다!',
    ]);
    await era.printAndWait([
      '또 어떤 날은 집에서 ',
      m_call_d,
      '이 건조기를 들고 방에 놓으려 하는 것을 보고, ',
      me.get_colored_name(),
      '은(는) 이대로는 안 되겠다고 생각했다! 강수를 두어야 한다!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '도 세상에서 가장 귀중하다고 여겨지는 ',
      m_call_d,
      '의 굿즈들을 많이 가지고 있다. 예를 들면 승리의 깃발이나 원형 인형 같은 것들…… 하지만 대부분 트레이닝실에 있거나 공식적으로 보관되어 있었다.',
    ]);
    await era.printAndWait([
      '가자 가자! 마트에 가서 ',
      m_call_d,
      '의 모든 굿즈를 몇 개씩 사버리자!',
    ]);
    await era.printAndWait('점원에게 집 앞까지 바로 배달해 달라고 했다!');
    await era.printAndWait([
      '각종 레이스에서 활약하는 ',
      m_call_d,
      '의 늠름한 모습을 만족스럽게 다시 감상한다. 그리고 인형을 소파에 하나, 침대에 하나, 컴퓨터 위에 하나, TV 위에 하나 놓아두고……',
    ]);
    await era.printAndWait([
      '그리고 이전에 소중히 간직해왔던 ',
      m_call_d,
      '의 작품들을 구석진 곳에서 꺼내 소파 옆에 당당히 진열했다……',
    ]);
    await era.printAndWait([
      '하하하하, 완성이다! 이제 ',
      m_call_d,
      '의 표정이 정말 기대되는걸!',
    ]);
    await era.printAndWait('그러나 그 결과는——');
    await era.printAndWait([
      '이것은 ',
      m_call_d,
      '에게 너무나 큰 충격이었고, ',
      me.get_colored_name(),
      '은(는) 그저 ',
      m_call_d,
      '의 얼굴이 점점 붉어지다가 결국 둔탁한 소리를 내며 바닥에 쓰러지는 것을 지켜볼 수밖에 없었다.',
    ]);
    await era.printAndWait(
      '이런 상대적으로 재미있는 에피소드들 외에, 평소의 삶은 사실 훨씬 더 평온했다.',
    );
    await era.printAndWait(
      '평범하기 그지없는, 마치 밥솥을 열었을 때 피어오르는 하얀 김이 서린 쌀밥과 같았다.',
    );
    await era.printAndWait([
      '그래서 ',
      me.get_colored_name(),
      '과(와) ',
      m_call_d,
      '의 아이가 태어났을 때, 기쁨과 동시에 문득 깨닫게 되었다. 벌써 이렇게 시간이 흘렀구나 하고.',
    ]);
    await era.printAndWait([
      digital.sex_code === 1 ? '자신' : m_call_d,
      '이 임신했다는 사실을 알게 된 기억도, 따스한 흐름과 함께 그저 희미하고 아련하게 남아 있을 뿐이다.',
    ]);
    await era.printAndWait([
      '처음부터 ',
      child,
      '은 참 손이 안 가는 아이였다. ',
      m_call_d,
      '을 보거나 온갖 ',
      digital.get_uma_sex_title(),
      ' 굿즈를 보면 얌전해졌고, 그저 아주 가끔 ',
      m_call_d,
      '을 흉내 내며 이상한 소리를 낼 뿐이었다.',
    ]);
    await era.printAndWait([
      child,
      '은 ',
      m_call_d,
      '을 많이 닮았다. ',
      digital.sex,
      '는 어릴 적부터 ',
      digital.get_uma_sex_title(),
      '를 무척 좋아했고, 특히 TV 앞에 앉아 ',
      m_call_d,
      '의 라이브 영상을 보는 것을 즐겼다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      parent,
      '로서 ',
      m_call_d,
      '의 녹화 영상을 자주 틀어줬기 때문일까?',
    ]);
    await era.printAndWait([
      '매번 ',
      me.get_colored_name(),
      '과(와) ',
      child,
      '이 영상을 보고 있을 때면, ',
      m_call_d,
      '은 처음엔 증기 기관차처럼 얼굴을 붉히며 방으로 도망쳐 가습기 역할을 하곤 했지만, 나중에는 ',
      me.get_colored_name(),
      '의 곁에 기대어 ',
      child,
      '을 품에 안고 함께 보게 되었다.',
    ]);
    await era.printAndWait([
      '어찌 되었든, ',
      child,
      '은 정성 어린 보살핌 속에서 건강하게 자라났다.',
    ]);
    await era.printAndWait([
      digital.get_uma_sex_title(),
      '는 성장이 무척 빠르다. 어느덧 ',
      digital.sex,
      '는 벌써 트레센 학원에 입학할 때가 되었다.',
    ]);
    await era.printAndWait([
      m_call_d,
      '과 상의한 결과, ',
      m_call_d,
      '은 ',
      child,
      '이 ',
      digital.get_uma_sex_title(),
      '를 너무 좋아하는 모습을 보며, ',
      digital.sex,
      ' 혼자 입학식에 보내면 큰일이 날 것 같다고 걱정했다.',
    ]);
    await era.printAndWait([
      '하지만 결국, 이런 일은 ',
      digital.sex,
      ' 스스로 겪어보는 것이 좋겠다고 결정했다.',
    ]);
    await era.printAndWait([
      '그렇지만 떠나기 전날 밤, ',
      m_call_d,
      '은 짐을 다시 정리하며 더 많은 물건을 집어넣으려 애썼다.',
    ]);
    await era.printAndWait([
      '집이 트레센과 이렇게 가까운데, ',
      me.get_colored_name(),
      '이(가) 트레센의 트레이너인데, ',
      child,
      '은 언제든 ',
      me.get_couple_title(),
      '을 만날 수 있는데도, ',
      me.get_colored_name(),
      ' 역시 필수 물품이 빠진 건 아닌지 고심했다.',
    ]);
    await era.printAndWait([m_call_d, '도 웃으면서, 이게 무슨 영영 이별이라도 되는 거냐며 한마디 했다.']);
    await era.printAndWait([
      child,
      '이 오히려 아주 크게 울어서 ',
      me.get_couple_title(),
      '이 한참을 달래줘야 했다.',
    ]);
    await era.printAndWait([
      '하지만 내일은 결국 오늘이 되는 법, 이제 ',
      digital.sex,
      '가 등교해야 할 시간이다.',
    ]);
    await era.printAndWait(
      '밤안개가 아직 걷히지 않았고, 먼 하늘가도 그저 희미하게 붉을 뿐이며, 가로등조차 아직 켜져 있는 이른 아침.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      m_call_d,
      '은 짐을 들고 ',
      child,
      '과 함께 집 앞으로 내려왔다.',
    ]);
    await era.printAndWait([
      child,
      '은 끝까지 직접 들고 가겠다고 고집했지만, ',
      me.get_colored_name(),
      '과(와) ',
      m_call_d,
      '은 손을 놓아주지 않았다.',
    ]);
    await era.printAndWait([
      me.get_couple_title(),
      '의 고집을 이기지 못한 ',
      child,
      '도 결국 포기할 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '앞으로 보이는 곳이 바로 ',
      digital.get_uma_sex_title(),
      ' 전용도로다. 이 길을 따라가면 트레센에 금방 도착할 수 있고, ',
      digital.get_uma_sex_title(),
      '라면 택시를 부를 필요조차 없다.',
    ]);
    await era.printAndWait([
      '짐을 내려놓았다. 그리 많지는 않았지만, ',
      me.get_colored_name(),
      '에게는 꽤 힘들었고, 그에 비해 ',
      m_call_d,
      '은 훨씬 더 많은 짐을 들고 있었다.',
    ]);
    await era.printAndWait([
      '아이고, 어젯밤에 잠을 설친 데다 이른 아침부터 짐을 날랐더니, ',
      me.get_colored_name(),
      '은(는) 정신이 좀 몽롱하다.',
    ]);
    await era.printAndWait([
      m_call_d,
      '이 걱정스러운 듯 몸으로 ',
      me.get_colored_name(),
      '을(를) 지탱해주었지만, ',
      digital.sex,
      '의 눈을 보니 ',
      digital.sex,
      ' 역시 잠을 설쳤다는 것을 알 수 있었다.',
    ]);
    await era.printAndWait([
      '어라? ',
      me.get_colored_name(),
      '은(는) 주위를 둘러보았다. ',
      child,
      '은 어디 갔지?',
    ]);
    await era.printAndWait(['오오오! 바로 ', m_call_d, ' 옆에 있었다.']);
    await era.printAndWait([
      child,
      '은 ',
      m_call_d,
      '을(를) 꽉 껴안았고, 이어 ',
      me.get_colored_name(),
      '도 힘껏 안아주었다.',
    ]);
    await era.printAndWait([
      '무척 가녀려서, 꽉 껴안아야만 ',
      digital.sex,
      '의 존재가 느껴졌다. 아직 성장기인 ',
      digital.sex,
      '는 키도 그리 크지 않아, 마치 ',
      m_call_d,
      ' 같았다.',
    ]);
    await say_by_passer_by_and_wait(child, '그럼, 저 갈게요! 안녕히 계세요!');
    await era.printAndWait(['손을 흔들며, ', child, '이 달려나갔다.']);
    await era.printAndWait('앗! 잠깐만, 짐을 아직 안 가져갔잖아!');
    await era.printAndWait([
      '급하게 ',
      m_call_d,
      '더러 쫓아가라고 하려던 찰나, ',
      m_call_d,
      '은 그저 ',
      child,
      '이 멀어져가는 방향을 멍하니 바라보고만 있을 뿐이었다.',
    ]);
    await era.printAndWait('잠깐만! 왜 그래?');
    await digital.say_and_wait([
      callname,
      ', 어차피 ',
      child,
      '은 트레센에 있으니까, 나중에 직접 가져다주는 게 더 편하지 않을까요?',
    ]);
    await me.say_and_wait([
      '아니, ',
      m_call_d,
      ', ',
      child,
      '이! ',
      child,
      '이……',
    ]);
    await era.printAndWait(
      '마치 매일 지나다니던 교차로, 자주 들르던 가게, 즐겨 하던 게임이 갑자기 폐쇄되고, 망하고, 서비스 종료를 선언한 것 같은……',
    );
    await era.printAndWait([
      '영원히 변하지 않을 거라 믿었던 것이 돌연 사라져 버린 듯한 그 황당함이, 지금 이 순간 ',
      me.get_colored_name(),
      '의 마음을 가득 채웠다.',
    ]);
    await era.printAndWait(['다시 눈을 씻고 보아도, ', child, '의 모습은 이미 온데간데없었다.']);
    await me.say_and_wait([m_call_d, '! 이, 이게 대체 어떻게 된 거야! 이건…… 왜……']);
    await digital.say_and_wait(
      '듣기로는, 환상이라거나, 질병이라거나, 혹은 심령 현상이라고도 해요……',
    );
    await digital.say_and_wait([
      '대중적으로는 일종의 정신 질환으로 여겨지죠…… 전염 경로는 불분명하고, 범위는 오직 ',
      digital.get_uma_sex_title(),
      ' 및 그들과 접촉하는 사람들뿐……',
    ]);
    await era.printAndWait('그…… 그게 왜…… 단지 이별을 위해서 만들어진 거야?');
    await era.printAndWait([
      '멍하니 있는 사이, ',
      me.get_colored_name(),
      '은(는) ',
      m_call_d,
      '이 트레센 쪽을 바라보며 더 이상 아무 말도 하지 않는다는 것을 깨달았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득, ',
      m_call_d,
      '과 ',
      me.get_colored_name(),
      '의 감정이 똑같다는 것을 깨달았다.',
    ]);
    await era.printAndWait([
      '평소 트레이너로서 언제나 ',
      m_call_d,
      '의 버팀목이 되어주었던 ',
      me.get_colored_name(),
      '(이)였지만, 이번만큼은 ',
      digital.sex,
      '가 ',
      me.get_colored_name(),
      '을(를) 지탱해주고 있었다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 어떻게든 평온한 어조로 ',
      me.get_colored_name(),
      '의 슬픔을 희석하려 애쓰고 있었다. 뒤에서 ',
      m_call_d,
      '을 안아보니, 비로소 ',
      m_call_d,
      '이 떨고 있다는 사실을 알 수 있었다.',
    ]);
    await era.printAndWait('원래도 가녀린 몸이 더욱 위태로워 보였다.');
    await era.printAndWait('고요한 호수에 던져진 돌멩이가 거대한 파도를 일으켰다.');
    await digital.say_and_wait('……으으윽……');
    await digital.say_and_wait('저…… 전 진작 알고 있었어야 했는데……');
    await digital.say_and_wait('사실…… 저…… 디지땅은…… 예전부터 알고 있었어요……');
    await digital.say_and_wait('어느 순간부터 기억의 한 부분이 너무나 희미하다는 걸 깨달았을 때……');
    await digital.say_and_wait('집안의 육아 용품이 전혀 줄어들지 않는다는 걸 눈치챘을 때……');
    await digital.say_and_wait('예전에 그렸던 동인지들을 훑어보았을 때……');
    await digital.say_and_wait('그때 전…… 이미 알고 있었어요……');
    await digital.say_and_wait([
      '제가 ',
      callname,
      '을(를) 너무나 사랑해서…… 하지만 차마…… 더 깊이 다가갈 용기는 없어서……',
    ]);
    await digital.say_and_wait(['그리고…… ', callname, '도 영향을 받았던 거예요……']);
    await digital.say_and_wait(['그래서…… ', child, '이 태어난 거예요……']);
    await digital.say_and_wait(['이게 전부예요……']);
    await era.printAndWait([
      '흐느끼는 ',
      m_call_d,
      '의 말 속에서, ',
      me.get_colored_name(),
      '은(는) 마침내 이해했다. ',
      child,
      '은 바로 ',
      m_call_d,
      '의 염원이 만들어낸 산물이었다는 것을.',
    ]);
    await digital.say_and_wait([
      '우리가…… 우리가 방금 있었던 일을 잊기만 한다면…… 그러면, 우린 다시 ',
      child,
      '을 만날 수 있어요……',
    ]);
    await digital.say_and_wait([
      '만약…… 우리가 기억한다면, 그러면 ',
      child,
      '은…… 정말로 사라져 버리겠죠……',
    ]);
    await digital.say_and_wait(
      '아하하…… 사실, 이건 현실을 직시할지 말지를 선택하는 것뿐이잖아요…… 이건 그저 정신 질환에 불과하잖아요……',
    );
    era.printButton('기억한다', 1);
    era.printButton('잊는다', 2);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait('아니야!');
      await me.say_and_wait([
        child,
        '은 네 상상이 아니야! ',
        child,
        '은 우리 사랑의 상징이라고!',
      ]);
      await era.printAndWait([
        '두 사람이 제자리에 멈춰 서 있을 때, ',
        child,
        '이 ',
        m_call_d,
        '과 ',
        me.get_colored_name(),
        '의 손을 잡아 이끌어준 것이다.',
      ]);
      await me.say_and_wait([
        child,
        '이 나에게 일깨워줬어. 이제 때가 됐다고. 우리가 한 걸음 더 나아가야 할 때라고!',
      ]);
      await era.printAndWait([
        m_call_d,
        '의 몸을 돌려 세우자, 겨우 눈물을 멈췄던 ',
        m_call_d,
        '의 눈가가 다시금 젖어 들었다.',
      ]);
      await digital.say_and_wait('그 말씀은 혹시?');
      await me.say_and_wait([m_call_d, ', 우리 결혼하자.']);
      await digital.say_and_wait('아하하…… 이렇게 보니, 이런 걸 걱정했던 제가 정말 바보 같네요……');
      await era.printAndWait([
        m_call_d,
        '이 웃었다. 눈가의 눈물은 진주가 되어, ',
        me.get_colored_name(),
        '이(가) 세상에서 가장 소중히 여기는 보물이 되었다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 입을 맞췄다.']);
      await era.printAndWait('짠맛.');
      await era.printAndWait('분명 기쁨이 섞인 눈물이었으리라.');
      await era.printAndWait('쓴맛.');
      await era.printAndWait('분명 서러움이 섞인 눈물이었으리라.');
      await era.printAndWait('……단맛.');
      await era.printAndWait('그것은 분명…… 더 이상 눈물이 아니었으리라.');
      await era.printAndWait('혀가 얽히고, 몸이 밀착되며, 두 손이 깍지를 꼈다.');
      await era.printAndWait(['이제 그 무엇도 ', me.get_couple_title(), '을 갈라놓을 수 없다.']);
      await sys_love_uma_in_event(19);
    } else {
      await era.printAndWait(
        '모든 일은 마치 악몽 같았지만, 사실은 아무 일도 일어나지 않았다.',
      );
      await era.printAndWait([
        me.get_couple_title(),
        '의 ',
        child,
        '은 아무 문제 없이 트레센에 입학했고, ',
        me.get_colored_name(),
        '은(는) ',
        parent,
        '로서 자연스럽게 ',
        child,
        '의 트레이너가 되었다.',
      ]);
      await era.printAndWait([
        m_call_d,
        '은 ',
        digital.sex_code === 1 ? '아버지' : '어머니',
        '로서 종종 ',
        child,
        '과 함께 트레이닝을 하곤 했다.',
      ]);
      await era.printAndWait(
        '큰 쪽과 작은 쪽(비록 큰 쪽도 꽤 작지만)이 나란히 트레이닝하는 모습은 참으로 진귀한 광경이었다.',
      );
      await era.printAndWait([
        child,
        '의 성장을 위해, ',
        me.get_colored_name(),
        '은(는) ',
        digital.sex,
        '를 트레센 기숙사에서 지내게 하고 싶었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        child,
        '은 여전히 부모님을 무척 그리워하는 듯했고, 고집을 꺾지 못해 결국 당분간은 ',
        digital.sex,
        '를 집에서 통학시키기로 했다.',
      ]);
      await era.printAndWait([
        '모든 것이 지극히 정상적이었다. 다만 ',
        child,
        '이 예전의 ',
        m_call_d,
        '처럼 자주 「존엄사」하곤 한다는 점만 빼면. 뭐…… 지금의 ',
        m_call_d,
        '도 별반 다르지 않지만 말이다.',
      ]);
      await punish_rejecting_love(19);
      era.set('cflag:19:호감거절', 89);
    }
  }
};