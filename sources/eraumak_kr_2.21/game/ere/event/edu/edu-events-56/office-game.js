const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const KitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  const edu_marks = new KitaruEduMarks();
  let wait_flag = false;
  if (event_object?.arg === 'fortune_game_duel_1') {
    edu_marks.game_times = 5;
    await print_event_name('점술사와의 게임 대결! I', kitaru);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 게임, 특히 대전 요소가 강한 장르에서 의외로 재능이 높다고 해야 할까?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      kitaru.sex,
      '를 비디오 게임의 깊은 늪으로 끌어들인 이후, 처음에는 ',
      kitaru.get_colored_name(),
      '의 서툰 솜씨 덕분에 우위를 점할 수 있었으나, 나중에는 ',
      kitaru.sex,
      '의 거의 예지력에 가까운 감각에 일방적으로 짓눌리게 되었다.',
    ]);
    await kitaru.say_and_wait(['자자! ', callname, ', 무슨 생각을 그렇게 하세요?']);
    await era.printAndWait([
      '또다시 게임을 즐기는 한가한 시간이 찾아왔다. 게임기 앞에 앉은 담당 우마무스메가 ',
      me.get_colored_name(),
      '을(를) 향해 컨트롤러를 들어 보이며, 꼬리로 옆 소파의 플레이어 2 자리를 툭툭 쳤다.',
    ]);
    await era.printAndWait([
      '건강미 넘치는 육감적인 두 다리가 소파 팔걸이에 교차된 채 놓여 있고, 드러난 발가락이 나른하게 움직이고 있었다.',
    ]);
    await era.printAndWait(['이번에 할 게임은……']);
    era.printButton('2인 격투 게임', 1);
    era.printButton('레이싱 게임', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        '공방을 주고받았으나, 결국 마지막에 패배하고 말았다…… 이상하다, 대체 왜 지는 거지?',
      );
      await era.printAndWait([
        '분명 처음에는 ',
        me.get_colored_name(),
        '이(가) ',
        kitaru.get_colored_name(),
        '에게 게임을 가르쳐 줬을 텐데. 그 조작 감각은 설령 ',
        kitaru.get_uma_sex_title(),
        '가 가진 반응 속도로 설명하려 해도 앞뒤가 맞지 않았다.',
      ]);
    } else {
      await era.printAndWait('위태로운 승리였다.');
      await era.printAndWait([
        me.get_couple_title(),
        '은(는) 레이싱 게임을 선택했고, 다행히 마지막 바퀴에서 ',
        kitaru.get_colored_name(),
        '가 반응하지 못한 틈을 타 ',
        kitaru.sex,
        '를 추월했다.',
      ]);
      await era.printAndWait([
        '그나저나, 어떻게 백미러도 보지 않고 ',
        me.get_colored_name(),
        '의 진로를 방해할 수 있었던 걸까?',
      ]);
    }
    await kitaru.say_and_wait('으음…… 아마 점술사로서의 예감 덕분이겠죠!');
    await me.say_and_wait('예감?');
    await kitaru.say_and_wait('네!');
    await kitaru.say_and_wait([
      '맞아요! 대충 ',
      callname,
      '이 다음에 어떻게 할지 짐작이 가거든요.',
    ]);
    await kitaru.say_and_wait('아쉽게도 컴퓨터 화면 너머에 있는 다른 플레이어분들께는 통하지 않지만요……');
    era.println();
    wait_flag = get_skills_and_print_in_event(56, [201432]);
  } else if (event_object?.arg === 'fortune_game_duel_2') {
    await print_event_name('점술사와의 게임 대결! II', kitaru);
    await kitaru.say_and_wait('야호!!!');
    await era.printAndWait([
      kitaru.sex,
      '와 게임을 같이 해주겠다고 약속하자, ',
      kitaru.get_colored_name(),
      '는 그제야 조금 잠잠해졌다.',
    ]);
    await kitaru.say_and_wait([
      '그럼요! 역시 ',
      callname,
      '하고 같이 놀아야 재밌다니까요!',
    ]);
    await era.printAndWait([
      '하지만 ',
      kitaru.get_colored_name(),
      '의 능력을 생각하면, ',
      me.get_colored_name(),
      '이(가) ',
      kitaru.sex,
      '와 대결하는 것은 그야말로 사서 고생을 하는 격이었다.',
    ]);
    await kitaru.say_and_wait('에에!?');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '에게 점술 능력을 쓰지 말라고 제안하자, ',
      kitaru.sex,
      '는 약간 불만스러운 표정을 지었다. 아무래도 자신의 이점을 포기하고 싶지 않은 모양이었다.',
    ]);
    await kitaru.say_and_wait('당연히 괜찮죠!');
    await era.printAndWait([
      '이상하게도 ',
      kitaru.sex,
      '는 잠시 고민하더니, ',
      me.get_colored_name(),
      '의 요청을 흔쾌히 수락했다.',
    ]);
    await era.printAndWait(['이번에 할 게임은……']);
    era.printButton('2인 격투 게임', 1);
    era.printButton('레이싱 게임', 2);
    const temp = await era.input();
    if (temp === 1) {
      await era.printAndWait([
        '이전의 패배는 역시 ',
        kitaru.sex,
        '의 그 신비로운 능력 때문이었던 것 같다. ',
        kitaru.get_colored_name(),
        '가 조종하는 닻을 든 캐릭터의 체력이 거의 남지 않은 상황에서 ',
        me.get_colored_name(),
        '에 의해 화면 구석으로 몰렸다.',
      ]);
    } else if (temp === 2) {
      await era.printAndWait([
        '이전의 패배는 역시 ',
        kitaru.sex,
        '의 그 신비로운 능력 때문이었던 것 같다. 적절한 조작 기술 덕분에 ',
        me.get_colored_name(),
        '의 차량은 계속해서 ',
        kitaru.get_colored_name(),
        '의 차량을 앞서 나갔다.',
      ]);
    }
    if (kitaru.sex_code === 1 || me.sex_code === 0) {
      await era.printAndWait('이겼다!');
      return true;
    }
    await era.printAndWait('이겼다……고 생각했지만?');
    await me.say_and_wait('으윽……');
    await era.printAndWait(
      '아직 잠들어 있던 가랑이 사이의 물건이 천 너머로 갑작스럽게 무언가 심상치 않은 감촉을 느꼈다.',
    );
    await kitaru.say_and_wait('에잇!');
    await era.printAndWait('한 번, 두 번, 그리고 연달아 가벼운 접촉이 이어졌다.');
    await era.printAndWait([me.get_colored_name(), '은(는) 무심코 고개를 아래로 떨구었다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '의 두 다리 사이, ',
      kitaru.get_colored_name(),
      '의 오른발이 천 너머로 그곳을 누르고 있었다. 드러난 매끄러운 발가락이 ',
      kitaru.sex,
      '가 조이스틱을 움직이는 동작에 맞춰 리드미컬하게 ',
      me.get_colored_name(),
      '의, 서서히 고개를 들기 시작한 육봉을 톡톡 건드렸다.',
    ]);
    await kitaru.say_and_wait('하압!');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 정신이 팔린 그 짧은 틈을 타, ',
      kitaru.get_colored_name(),
      '는 기회를 놓치지 않았다.',
    ]);
    await era.printAndWait(
      '진주처럼 귀여운 발가락들이 모이고 팽팽해진 발등이 앞을 압박하자, 이미 옷감 때문에 답답함을 느끼던 육봉이 갑작스럽게 더 큰 자극을 받았다.',
    );
    await me.say_and_wait('야! 마치카네 후쿠키타루!');
    await kitaru.say_and_wait(['어라라, ', callname, ', 실수하셨네요!']);
    await me.say_and_wait('으윽……');
    await era.printAndWait([
      '주의를 주자 ',
      kitaru.get_colored_name(),
      '는 오히려 기세등등해졌고, ',
      me.get_colored_name(),
      '은(는) 자신도 모르게 등을 굽혔다. 손에 쥔 스틱은 갑작스러운 자극에 가랑이 사이의 육봉과 함께 ',
      kitaru.sex,
      '의 움직임에 따라 떨리고 있었다.',
    ]);
    if (temp === 1) {
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 미리 준비해둔 연계기가 쏟아진 후, 화면에는 타이밍 좋게 ',
        me.get_colored_name(),
        '의 패배를 상징하는 SLASH가 나타났다!',
      ]);
    } else {
      await era.printAndWait([
        '레이스 ',
        kitaru.get_uma_sex_title(),
        '의 특색 있는 도장이 새겨진 차량이 가드레일을 들이받고 골짜기로 추락했다.',
      ]);
    }
    await kitaru.say_and_wait(['어머나, ', callname, ', 지셨네요?']);
    await era.printAndWait([
      '방금까지 ',
      me.get_colored_name(),
      '의 하반신을 건드리던 발은 이미 쏙 들어가 버린 상태였다.',
    ]);
    await era.printAndWait([
      '옷 속에 갇힌 육봉이 팽창하여 ',
      me.get_colored_name(),
      '은(는) 꽤나 괴로웠지만, 이 모든 일을 저지른 장본인은 아무 일도 없었다는 듯 ',
      me.get_colored_name(),
      '을(를) 바라보고 있었다.',
    ]);
    await kitaru.say_and_wait('한 판 더 하실래요?');
    await era.printAndWait([
      '말투에 약간의 교태가 섞인 ',
      kitaru.get_colored_name(),
      '는 컨트롤러를 내려놓고 몸을 옆으로 돌려 당신을 쳐다보았다.',
    ]);
    await era.printAndWait([
      '셔츠 아래로 드러난 유려한 등 곡선과 엉덩이 선에서 갈라지는 매끄러운 맨다리가 ',
      me.get_colored_name(),
      '의 눈앞에 무방비하게 펼쳐졌다.',
    ]);
    await kitaru.say_and_wait('아니면…… 이 후쿠짱에게 벌을 주고 싶으신가요?');
    era.printButton('예', 1);
    era.printButton('아니오', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 일어났다. 하지만 ',
        me.get_colored_name(),
        '의 움직임을 본 ',
        kitaru.get_colored_name(),
        '는 벌을 받을 생각에 당황하기는커녕, 오히려……',
      ]);
      await era.printAndWait([
        '…… ',
        me.get_colored_name(),
        '이(가) 잘못 본 것이 아니라면, ',
        me.get_colored_name(),
        '의 가랑이 사이에 우뚝 솟은 텐트를 훑어보던 그 눈동자는 분명 침을 꿀꺽 삼키고 있었다.',
      ]);
      await era.printAndWait([
        '방금 전 못된 장난을 치던 가녀린 발을 붙잡아 그대로 소파에 밀쳐버린 후, 자신의 바지를 내리고 후쿠키타루의 장난에 잔뜩 달아올라 있던 육봉을 그녀의 치마 안으로 밀어 넣었다.',
      ]);
      await kitaru.say_and_wait('꺄악!');
      await era.printAndWait(
        '앞으로 닥칠 일을 이미 알고 있었다는 듯한 축축하게 젖어 있는 속옷을 손가락으로 젖혔다. 뜨거워진 구멍 입구를 육봉으로 두어 번 문지른 뒤, 그대로 단숨에 파고들기 시작했다.',
      );
      await era.printAndWait('퍽!');
      await kitaru.say_and_wait('으아아앗!!!');
      await era.printAndWait([
        '체격 차이 덕분에, ',
        kitaru.get_colored_name(),
        '의 부드러운 자궁구는 ',
        me.get_colored_name(),
        '의 육봉이 닿지 못할 곳이 아니었다.',
      ]);
      await era.printAndWait(
        '단 한 번의 충돌만으로도 쾌감을 느낀 후쿠키타루는 참지 못하고 비명을 질렀다.',
      );
      await kitaru.say_and_wait('하아, 읏……');
      await era.printAndWait([
        me.get_colored_name(),
        '의 육봉이 좁은 통로 안을 사정없이 오가며, 방금 전 발로 자신을 농락했던 이 ',
        kitaru.get_uma_sex_title(),
        '를 벌주었다.',
      ]);
      await kitaru.say_and_wait('하아…… 하아……');
      await era.printAndWait([
        '밑에 깔린 연인은 그저 거친 숨을 몰아쉬며, ',
        me.get_colored_name(),
        '의 움직임에 맞춰 붉게 달아오른 엉덩이를 높게 치켜올릴 뿐이었다.',
      ]);
      await era.printAndWait([
        '처음엔 허리를 붙잡다가 점차 위로 올라가 가슴을 애무했고, 나중에는 후쿠키타루의 손목을 잡아 ',
        me.get_colored_name(),
        '의 피스톤질에 맞춰 고개를 뒤로 젖히게 만들었다.',
      ]);
      await kitaru.say_and_wait('아아앗!!!');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 두 발이 곧게 뻗었고, 발가락 끝도 밀려오는 쾌감에 파르르 떨리기 시작했다.',
      ]);
      await kitaru.say_and_wait('가, 가버려요오오옷!!!');
      await era.printAndWait(
        '정액이 주입됨과 동시에 점술사 양반은 고개를 높이 치켜들었고, 쾌감 때문에 입가에서 흘러나온 투명한 타액이 하얀 목덜미를 타고 흘러내려 옷깃을 적셨다.',
      );
      era.println();
      wait_flag = get_skills_and_print_in_event(56, [201431]);
    }
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};