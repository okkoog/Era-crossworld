const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  await print_event_name('나아가기로 결심한 밤', urara);

  await era.printAndWait(
    '크리스마스는 어제인 크리스마스 이브가 지나서야 완전히 찾아왔지만, 밖은 몇 일 전부터 이미 달콤한 축제 분위기로 가득 차 있었다.',
  );
  await era.printAndWait([
    '다만 ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '에게 있어서는 똑같은 연례행사라도, 어제의 ',
    race_infos[race_enum.arim_kin].get_colored_name(),
    '이 오늘의 크리스마스보다 훨씬 중요했다.',
  ]);
  await era.printAndWait([
    '축제를 기대하지 않았다는 뜻은 아니다. 즐거움을 전파하는 축제라면 ',
    urara.get_colored_name(),
    '는 무엇이든 환영했고, ',
    me.get_colored_name(),
    ' 역시 미리 준비를 해두었다.',
  ]);
  const result = RaceHistory.get(52).get_result(47 + 48);
  if (result?.race === race_enum.arim_kin) {
    await era.printAndWait(
      '하지만 아리마 기념에서 너무 격렬하게 불태웠던 탓인지, 지금 이 작은 우마무스메는 필수적인 활동 외에는 줄곧 나른한 모드였다.',
    );
    await era.printAndWait([
      '트레이닝실 소파에 누워 말랑말랑해진 ',
      urara.get_colored_name(),
      '를 주물러주며, ',
      me.get_colored_name(),
      '은(는) 업무의 끝을 알리는 마지막 글자를 키보드에 입력했다.',
    ]);
    if (result.rank === 1) {
      await era.printAndWait([
        '착각 같은 만남 이후 입장 게이트를 박차고 나갔을 때 보았던 광경을 회상하며, 당시의 ',
        me.get_colored_name(),
        '은(는) 한때 자신이 꿈을 꾸고 있는 것이 아닌가 생각했다.',
      ]);
      await era.printAndWait([
        '경악한 사람들에게 둘러싸여 질문 세례를 받고, 얼떨결에 ',
        urara.get_colored_name(),
        '가 라이브의 센터에 선 것을 보고 나서야 비로소 모든 것이 현실임을 확신할 수 있었다.',
      ]);
      await era.printAndWait([
        '그 후로 ',
        urara.get_colored_name(),
        '는 친구들에게 잘 보호받고 있었지만, ',
        me.get_colored_name(),
        '은(는) 혼자 있을 때마다 온갖 번거로운 일들이 쏟아져 들어오고 있었다.',
      ]);
      await era.printAndWait([
        '비록 지금은 「',
        urara.get_colored_name(),
        '를 돌보는 중」이라는 말이 도망치기 위한 핑계처럼 되어버렸을지라도, 그 이상의 압박을 ',
        urara.get_colored_name(),
        '에게 줄 수는 없었다.',
      ]);
      await era.printAndWait([
        '어른의 번거로운 일은 적어도 어른 스스로가 고민해야 할 몫이다. 컴퓨터를 끄며 ',
        me.get_colored_name(),
        '은(는) 가볍게 한숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        '당신의 ',
        callname,
        '의 움직임을 눈치채고 몸을 일으키려는 작은 ',
        urara.get_uma_sex_title(),
        '의 모습에, ',
        me.get_colored_name(),
        '도 부드러운 감촉이 남아있는 손가락을 적절한 때에 거두었다.',
      ]);
    } else {
      await era.printAndWait([
        '사실 아리마 기념 참가에 대해서는 ',
        me.get_colored_name(),
        '의 생각도 다른 이들과 크게 다르지 않았다. ',
        urara.get_colored_name(),
        '가 지금 그 코스에 서 있는 것만으로도 이미 승리나 다름없었다.',
      ]);
      await era.printAndWait([
        '본래라면 기뻐해야 할 일이었지만, 갑작스럽게 ',
        me.get_colored_name(),
        '과(와) 만난 「',
        in_urara.get_colored_name(),
        '」가 했던 말은 대체 무엇이었을까……',
      ]);
      await era.printAndWait([
        '당신의 ',
        callname,
        '의 움직임을 눈치채고 몸을 일으키려는 작은 ',
        urara.get_uma_sex_title(),
        '의 모습에, ',
        me.get_colored_name(),
        '도 부드러운 감촉이 남아있는 손가락을 적절한 때에 거두었다.',
      ]);
    }
  } else {
    await era.printAndWait([
      '오늘의 ',
      urara.get_colored_name(),
      '는 일하고 있는 ',
      callname,
      '의 곁에 조용히 앉아 있었지만, 참을성 없이 흔들거리는 작은 귀는 어느새 슬그머니 ',
      me.get_colored_name(),
      '의 어깨에 닿아 있었다.',
    ]);
    await era.printAndWait([
      '기다림 속에 담긴 작은 ',
      urara.get_uma_sex_title(),
      '의 기대에 즉각 응답하기 위해, ',
      me.get_colored_name(),
      '도 키보드를 두드리는 손가락의 속도를 적절히 높였다……',
    ]);
  }
  await era.printAndWait(
    '생각해보면 이쪽은 본래 크리스마스를 진지하게 챙기는 편은 아니었지만, 특별한 날을 골라 서로 축복을 건네는 것은 언제라도 가치 있는 일이었다.',
  );
  await era.printAndWait([
    '그러니 지금까지 노력해온 작은 ',
    urara.get_uma_sex_title(),
    '에게 감사하는 의미로라도, 오늘의 ',
    urara.sex,
    '는 ',
    me.get_colored_name(),
    '이(가) 준비한 특별한 추억을 받을 자격이 있었다.',
  ]);
  await era.printAndWait([
    '컴퓨터를 닫고, ',
    me.get_colored_name(),
    '은(는) 책상 아래에서 미리 ',
    urara.get_colored_name(),
    '를 위해 준비해둔 크리스마스 선물을 꺼냈다. 오늘의 ',
    urara.sex,
    '는 아마 이 순간만을 기다리고 있었을 것이다.',
  ]);

  if (era.get('relation:52:0') > 150) {
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 갑자기 건넨 선물 상자를 보고, ',
      urara.get_colored_name(),
      '는 처음엔 깜짝 놀라 멍하니 있었으나, 곧이어 기쁨이 섞인 귀여운 미소가 얼굴 가득 번졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 긍정에 힘입어 싱글벙글하며 선물 상자를 열어본 작은 ',
      urara.get_uma_sex_title(),
      '는 상자 안에서 새 분홍색 귀 커버를 발견하고는 무척 기뻐했다.',
    ]);
  } else {
    await era.printAndWait([
      '자신이 선물을 받을 것이라고는 생각지도 못했는지, ',
      urara.get_colored_name(),
      '는 우선 멍하니 있다가 ',
      me.get_colored_name(),
      '의 확답을 듣고서야 상자를 받아 들었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 손짓에 조금 망설이며 선물 포장을 뜯자, ',
      urara.get_colored_name(),
      '의 벚꽃빛 눈동자는 상자 속의 새 귀 커버를 집어 들며 점차 밝게 빛나기 시작했다.',
    ]);
  }

  if (era.get('love:52') >= 75) {
    await era.printAndWait(
      '「연인이 선물한 귀 커버와 꼬리 장식은 사랑의 증표」라는 말은 고사기에는 전혀 기록되어 있지 않지만, 현재 학생들 사이에서는 굉장히 유행하고 있었다.',
    );
    await era.printAndWait([
      '크리스마스를 핑계 삼아 그리 비싸지 않은 장신구를 선물하는 것이 조금 비겁할지도 모르지만, 작은 ',
      urara.get_uma_sex_title(),
      '와 함께 오랫동안 달려온 낡은 귀 커버는 확실히 세탁으로 인해 색이 바래 있었다.',
    ]);
  } else {
    await era.printAndWait([
      '그리 가깝지 않은 사이의 ',
      urara.get_uma_sex_title(),
      '에게 귀 커버나 꼬리 장식을 선물하는 것은 자칫 무례한 행동으로 보일 수 있었지만, ',
      urara.get_colored_name(),
      '라면 그런 점에 크게 개의치 않을 것이었다.',
    ]);
    await era.printAndWait([
      '물론 ',
      me.get_colored_name(),
      ' 역시 불순한 의도가 아니라, 그저 ',
      urara.get_colored_name(),
      '가 언제부터 썼는지 모를 저 귀 커버가 너무 낡았다는 생각에 준비한 것뿐이었다.',
    ]);
  }
  await urara.say_and_wait([
    '어? 이거 ',
    callname,
    '가 준비한 거야? 정말 멋져——! 게다가 우라라가 지금 쓰고 있는 거랑 같은 모델이네!',
  ]);

  era.printButton('「산타클로스가 나한테 선물을 대신 전해달라고 부탁했어.」', 1);
  await era.input();

  await urara.say_and_wait([
    '정말!? 알고 보니 올해의 산타클로스는 ',
    callname,
    '였구나! 헤헤~ 고마워, ',
    callname,
  ]);
  await era.printAndWait([
    '음? 알고 보니 ',
    urara.get_colored_name(),
    '는 산타클로스를 믿지 않는 타입이었나…… 아니, 혹시 산타클로스의 본질을 꿰뚫어 보는 타입인 걸까?',
  ]);
  await era.printAndWait([
    '즐거워 보이면서도 묘한 뜻이 담긴 담당의 미소를 보며, ',
    me.get_colored_name(),
    '은(는) 문득 ',
    urara.get_colored_name(),
    '에 대한 뜻밖의 정보가 또 하나 늘어난 것 같다는 생각이 들었다……',
  ]);
  await urara.say_and_wait(
    '그치만, 크리스마스는 모두가 즐거워지는 날이잖아! 아이들뿐만 아니라 어른들도 말이야!',
  );
  await urara.say_and_wait([
    '그러니까 우라라도 지금 산타클로스가 되어서, ',
    callname,
    '에게 선물을 줄게!',
  ]);
  await era.printAndWait([
    '미소를 띠며 다가온 ',
    urara.get_colored_name(),
    '는 주머니에서 무언가를 꺼내 ',
    me.get_colored_name(),
    '의 손에 쥐여주었다.',
  ]);
  await era.printAndWait([
    '손바닥을 펴보니, 작은 ',
    urara.get_uma_sex_title(),
    '가 ',
    me.get_colored_name(),
    '에게 건네준 것은 낙서가 되어있는 형형색색의 종이 조각이었고, 그 가운데에는 「무엇이든 도와주기 권」이라고 적혀 있었다.',
  ]);
  await urara.say_and_wait(
    '대청소를 돕는 거든, 요리를 돕는 거든, 아니면 대화 상대가 되어주는 거든 뭐든지 말만 해!',
  );
  await urara.say_and_wait([
    '우라라는 앞으로도 더 노력할 거니까, 도움이 필요할 때는 언제든지 나를 불러줘!',
  ]);

  era.printButton('「응! 고마워!」', 1);
  await era.input();

  await urara.say_and_wait([
    '헤헤~ ',
    callname,
    '도 지금 무척 기쁘지? 나 어렸을 때도 아빠한테 이런 쿠폰을 선물했었는데, 아빠도 정말 기뻐하셨어!',
  ]);
  await urara.say_and_wait([
    '나도 ',
    callname,
    '가 우리 아빠만큼 기뻤으면 좋겠어! 비록 아빠는 쿠폰을 너무 아끼느라 지금까지 단 한 장도 안 쓰셨지만……',
  ]);
  await urara.say_and_wait([
    '그러니까! 우라라는 쿠폰을 보관만 하지 말고, 바로 지금 나한테 제대로 써줬으면 좋겠어!',
  ]);
  await era.printAndWait([
    urara.get_teen_sex_title(),
    '다운 장난기 섞인 미소를 지으며 ',
    me.get_colored_name(),
    '의 품에 안겨온, 어느샌가 또 조금 자란 듯한 작은 ',
    urara.get_uma_sex_title(),
    '는 조금 제멋대로 ',
    me.get_colored_name(),
    '을(를) 짓눌렀다.',
  ]);

  await urara.say_and_wait(['그래서 ', callname, ', 이 쿠폰으로 뭘 하고 싶어?']);
  era.printButton(
    '「지금이라면, 우라라가 앞으로 조금 더 빨리 달릴 수 있게 해달라고 빌까?」（스피드&스태미나&지능 +10）',
    1,
  );
  era.printButton(
    '「그럼 다음에 상점가 특훈을 갈 때, 사람들을 더 열심히 도와주겠니?」（파워&근성 +10）',
    2,
  );
  era.printButton(
    '「……이 쿠폰으로 우라라의 몸을 선물로 받을 수 있을까?」（전 능력치 +5）',
    3,
    { disabled: era.get('love:52') < 50 },
  );
  const attr_change = new Array(5).fill(0),
    ret = await era.input();
  if (ret < 3) {
    if (ret === 1) {
      attr_change[attr_enum.speed] =
        attr_change[attr_enum.endurance] =
        attr_change[attr_enum.intelligence] =
          10;
    } else {
      attr_change[attr_enum.strength] = attr_change[attr_enum.toughness] = 10;
    }
    await urara.say_and_wait([
      '에? 설마 이렇게 평범한 소원이야? 나는 ',
      callname,
      '는 어른이니까 우라라가 모르는 걸 원할 줄 알았는데!',
    ]);

    era.printButton(
      `「대체 뭘 기대하고 있는지는 제쳐두고, 우라라는 어른인 ${callname}가 뭘 원할 것 같아?」`,
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '음…… 대체 뭘까? 예를 들어 ',
      callname,
      '가 우라라의 무언가를 원한다든가?',
    ]);
    await era.printAndWait('어?');
    await urara.say_and_wait([
      '예를 들어 ',
      callname,
      '가 우라라가 항상 곁에 있어 주길 원한다든가…… 하지만 이런 건 이미 평소에 하고 있는 거네?',
    ]);
    await era.printAndWait('——후우!');
    await era.printAndWait([
      '작은 ',
      urara.get_uma_sex_title(),
      '의 여전히 때 묻지 않은 얼굴을 보며, ',
      me.get_colored_name(),
      '은(는) 가슴 속으로 깊은 안도의 한숨을 내쉬었다. 다행이다, ',
      urara.get_colored_name(),
      '가 또 누구에게 이상한 지식을 주워들은 줄 알았는데……',
    ]);
    await urara.say_and_wait([
      '하지만 만약 우라라가 내 전부를 ',
      callname,
      '에게 주고 싶어 한다면, 받아줄 거야?',
    ]);
    await era.printAndWait(
      '……결국 방심할 수 없었다. 대체 이런 건 누가 가르친 걸까? 하지만 지금 이 순간, 이 질문은 확실히 대답할 가치가 있었다——',
    );

    era.printButton(
      '「나는 이미 예전에 선물을 받지 않았니? 『우라라가 선물해준 모든 일상』이라는 선물을.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '보답을 바라는 ',
      urara.get_teen_sex_title(),
      '는 이미 가장 적절한 선물을 ',
      me.get_colored_name(),
      '의 손에 건네주었다면, 크리스마스가 찾아왔을 때 굳이 다른 것이 더 필요할까?',
    ]);
    await era.printAndWait([
      '약간의 의문이 섞인 ',
      urara.get_teen_sex_title(),
      '의 미소를 바라보며, ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '는 또다시 선물과도 같은 하루를 함께 보냈다.',
    ]);
  } else {
    await urara.say_and_wait([
      '응! 괜찮아. 왜냐하면 ',
      callname,
      '가 말하지 않았어도, 우라라는 그렇게 하려고 생각했었으니까……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 욕망 가득한 떠보기에 한치의 망설임도 없이 대답하며, 두 작은 손이 수줍게 ',
      me.get_colored_name(),
      '의 민감한 곳으로 올라왔다.',
    ]);
    await urara.say_and_wait([
      '……게다가 ',
      callname,
      '의 여기도 벌써 잔뜩 느낌이 오고 있지?',
    ]);
    await era.printAndWait([
      '천 너머로 손가락을 이용해 ',
      me.get_colored_name(),
      '의 민감한 곳을 부드럽게 매만지자, 작은 ',
      urara.get_uma_sex_title(),
      '의 앳된 뺨은 점차 진홍빛 홍조로 물들어갔다.',
    ]);
    await era.printAndWait([
      '참을 수 없다는 듯 흘러나온 물소리가 이미 ',
      urara.get_teen_sex_title(),
      '의 꽉 죄는 속옷을 적셨고, 발정의 파도는 통제 불능이 된 채 ',
      me.get_colored_name(),
      '의 다리 위로 흩뿌려졌다.',
    ]);
    if (era.get('exp:52:성관계횟수') >= 10) {
      await urara.say_and_wait(
        '헤헤~ 사실 위로 올라탔을 때부터, 우라라는 벌써 축축해져 버렸어……',
      );
      await urara.say_and_wait([
        '이제, 참을 수 없어…… 우라라가 나쁜 아이가 된 건, 아무리 생각해도 ',
        callname,
        ' 때문이야…… 쪽~',
      ]);
      await era.printAndWait([
        '자연스럽게 연인을 껴안으며, ',
        me.get_colored_name(),
        '에게 밤낮으로 조교당한 가녀린 몸은 이제 숙련된 솜씨로 주인의 욕망을 받아들일 전희를 준비하고 있었다.',
      ]);
      await era.printAndWait([
        '질척한 딥키스 속에서 ',
        me.get_colored_name(),
        '과(와) 끈적한 체액을 탐욕스럽게 교환하며, 몰입 상태에 들어간 작은 ',
        urara.get_sex_slave_title(),
        '은 익숙하게 자신의 옷을 벗어 던졌다.',
      ]);
    } else {
      await urara.say_and_wait([
        '하아…… 미안해, ',
        callname,
        '의 옷을 더럽혀버렸어…… 하지만 우라라는 이제, 참을 수 없어……',
      ]);
      await urara.say_and_wait([
        '우라라가 소원을 들어줄게. 그러니까 우라라, 열심히 할게…… 하응~',
      ]);
      await era.printAndWait([
        '본능에 이끌려 연인과 부둥켜안은 채, 주인의 명령에 따라 작은 ',
        urara.get_sex_slave_title(),
        '은 서툴지만 진지하게 주인을 모시기 위한 전희를 시작했다.',
      ]);
      await era.printAndWait([
        '몽롱하게 정신을 놓은 틈을 타 구강을 침범당하며, ',
        me.get_colored_name(),
        '이(가) 제멋대로 몸을 휘두르게 내버려 둔 작은 ',
        urara.get_uma_sex_title(),
        '는 금세 몸에 걸치고 있던 옷가지들을 빼앗겼다.',
      ]);
    }
    await urara.say_and_wait([
      '……',
      callname,
      ', 오늘, 마음껏 즐겨줘…… 크리스마스 선물인 우라라를 말이야~?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 아래에 깔린 마지막 순간, 사랑으로 인해 황홀경에 빠진 ',
      urara.get_colored_name(),
      '는 가볍게 ',
      me.get_colored_name(),
      '의 귓볼을 핥으며, 오직 두 사람만의 음란한 만찬의 시작을 선포했다……',
    ]);
    await quick_into_sex(52);
    attr_change.fill(5);
  }
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    52,
    attr_change,
    0,
    undefined,
    true,
  );
  wait_flag = sys_like_chara(52, 0, 10) && wait_flag;
  wait_flag && (await era.waitAnyKey());
};