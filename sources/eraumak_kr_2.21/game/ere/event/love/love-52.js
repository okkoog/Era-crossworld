/**
 * @file 하루 우라라 - 애정
 * @author 99
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love52AfterWife = require('#/event/love/love-events-52/after-wife');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

module.exports = class extends Love52AfterWife {
  async 99(urara, me, callname) {
    const { relation, in_urara } = this.get_event_vars();
    await print_event_name('어른의 마음을 여는 열쇠', urara);
    await in_urara.say_as_unknown_and_wait(
      '열쇠란 참 편리한 물건이죠. 무언가를 열 수도 있고, 무언가를 잠글 수도 있으니까요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만 열쇠 하나는 보통 그에 맞는 자물쇠 하나만을 열 수 있답니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      `그래서 열쇠를 직접 ${urara.sex}에게 건네주실 건가요, 아니면 ${urara.sex}가 당신의 열쇠를 조금씩 훔쳐가기를 기다리실 건가요?`,
    );
    await in_urara.say_as_unknown_and_wait('……음? 딱히 큰 차이는 없는 것 같기도 하네요?');
    era.drawLine();

    await era.printAndWait([
      '익숙한 장소에 앉아 조용히 잠든 담당을 발견하고, ',
      me.get_colored_name(),
      '은(는) 적당히 발걸음을 늦추었다.',
    ]);
    await era.printAndWait([
      '긴 머리카락을 늘어뜨린 작은 ',
      urara.get_uma_sex_title(),
      '는 따스한 햇살을 받으며 벤치에 제멋대로 가로누워 평온하게 잠들어 있다.',
    ]);
    await era.printAndWait([
      '최근 또 밤을 새운 것일까? 아니면 너무 과하게 노력한 것일까? ',
      me.get_colored_name(),
      '이(가) ',
      urara.sex,
      '의 곁에 앉아도, 작은 ',
      urara.get_uma_sex_title(),
      '의 축 처진 귀는 쫑긋 세워질 기미가 보이지 않는다.',
    ]);
    await era.printAndWait([
      '처음 만났을 때처럼, 설령 더 이상 순결하지 않더라도 ',
      urara.get_colored_name(),
      '는 여전히 다 자라지 않은 아이처럼 아무런 방비가 없다.',
    ]);
    await era.printAndWait([
      '하지만 설령 「빨간 모자」가 다른 사람이 자신을 해치지 않을 것이라 믿는다 해도, 가장 가까운 트레이너는 이미 ',
      urara.sex,
      '의 순수한 유혹에 의해 「늑대」로 변해버린 지 오래다.',
    ]);
    await era.printAndWait(
      '단정한 교복 아래 가려진, 아직 완전히 성숙하지 않은 어린 몸은 사실 이미 쾌락을 쫓는 본능에 눈을 뜬 상태였다.',
    );
    await era.printAndWait(
      '통통하고 매끄러운 앵두 같은 입술은 호흡에 맞춰 느긋하게 벌어져 있어, 마치 누군가 맛보아 주길 기다리는 잘 익은 열매처럼 보였다.',
    );
    await era.printAndWait([
      '아침저녁으로 함께 지내며 자유롭게 몸을 뽐내는 「나쁜 ',
      urara.get_child_sex_title(),
      '」를 마주하자, 어른으로서의 이성도 점차 통제력을 잃어갔다.',
    ]);
    await era.printAndWait([
      '가느다란 두 손목을 붙잡고, ',
      me.get_colored_name(),
      '은(는) 보복이라도 하듯 ',
      urara.get_colored_name(),
      '를 몸 아래에 깔고는 유혹적인 ',
      urara.sex,
      '를 향해 서서히 몸을 내리눌렀다.',
    ]);
    await urara.say_and_wait([
      '……',
      callname,
      ', 우라라는 상관없지만, 여기서 하면 들켜버린다구?',
    ]);
    era.println();
    if (relation > 150) {
      await era.printAndWait([
        me.get_colored_name(),
        '에게 벤치 위로 짓눌린 ',
        urara.get_colored_name(),
        '는 어느샌가 잠에서 깨어 있었지만, 전혀 저항하지 않은 채 오히려 ',
        me.get_colored_name(),
        '에게 순종하며 다시 눈을 가늘게 떴다.',
      ]);
      await urara.say_and_wait([
        '하지만 ',
        callname,
        '가 정말 하고 싶다면, 우라라의 기분이나 몸 같은 건 전부 신경 쓰지 않아도 괜찮아!',
      ]);
      await era.printAndWait([
        '몽롱한 눈동자가 점차 뜨거워지는 체온 때문에 젖어 들고, 벚꽃색 머리카락을 흩뜨린 ',
        urara.sex,
        '는 마치 ',
        me.get_colored_name(),
        '의 모든 것을 받아들여 줄 것만 같은 모성을 뿜어내고 있다.',
      ]);
      await urara.say_and_wait([
        '지금의 우라라는 언제든 ',
        callname,
        '의 모든 것을 환영해!',
      ]);
    } else {
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '는 자신을 침범하려는 ',
        me.get_colored_name(),
        '을(를) 긴장된 눈빛으로 응시했으나, 아주 형식적인 저항만을 한 뒤 고개를 옆으로 돌려 ',
        me.get_colored_name(),
        '이(가) ',
        urara.sex,
        '의 몸을 마음대로 휘두르도록 내버려 두었다.',
      ]);
      await urara.say_and_wait([
        '……괜찮아, 무슨 짓을 하든 참아낼 테니까, ',
        callname,
        ', 조금만 서둘러 줘.',
      ]);
      await era.printAndWait([
        '긴장으로 눈가에 눈물이 맺혔음에도, 작은 ',
        urara.get_uma_sex_title(),
        '는 억지로 거칠게 침범당할 마음의 준비를 마쳤다.',
      ]);
      await urara.say_and_wait('딱 한 번뿐이라면, 뭐든지 받아들일 수 있어.');
    }

    era.printButton('「!」', 1);
    await era.input();

    await era.printAndWait([
      urara.get_colored_name(),
      '의 헌신적인 속삭임 속에서, 넘쳐흐르는 욕망을 무고한 연인에게 쏟아부으려던 ',
      me.get_colored_name(),
      '은(는) 오히려 이성을 조금 되찾았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 담당에게 무슨 말을 건넬지 망설이고 있을 때, ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 주저를 눈치채고는 안심한 듯 가볍게 웃음을 터뜨렸다.',
    ]);
    await urara.say_and_wait([
      '이제 정신이 좀 들어, ',
      callname,
      '? 요즘 많이 피곤했지? 우라라는 정말로 괜찮다구!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 침묵에 아랑곳하지 않고, 연인에게 눌린 자세 그대로 ',
      urara.get_colored_name(),
      '는 쓸쓸한 표정으로 언뜻 상관없어 보이는 화제를 꺼냈다.',
    ]);
    await urara.say_and_wait([
      '우라라는 아직 제대로 된 어른이 되지 못했지만, ',
      callname,
      '의 『어른의 열쇠』를 우라라에게 줄 수 있을까?',
    ]);

    era.printButton('「『어른의 열쇠』?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 왜냐면 최근에 자기 트레이너랑 그렇게 친하지도 않던 친구가 트레이너의 열쇠를 받았다고 했거든.',
    ]);
    await urara.say_and_wait([
      '우라라도 참 신기하다고 생각했는데, ',
      urara.sex,
      '가 우라라에게 생각지도 못한 말을 했어──',
    ]);
    await urara.say_and_wait(
      '『트레이너와 사이좋은 우라라가 아직 초대받지 못한 거야? 우라라는 아직 어린애 취급받고 있나 보네!』',
    );
    await era.printAndWait([
      '잠시 말을 멈춘 작은 ',
      urara.get_uma_sex_title(),
      '의 미소에는 앳된 얼굴과는 어울리지 않는 복잡한 감정이 섞여 들어갔다.',
    ]);
    await urara.say_and_wait([
      '그래서 우라라는 생각했어. 혹시 지금까지도 우라라는 ',
      callname,
      '에게 그저 어린애일 뿐인 걸까?',
    ]);
    await urara.say_and_wait([
      callname,
      '를 가장 좋아하는 우라라는 언제쯤 ',
      callname,
      '의 방에 들어갈 수 있는 거야?',
    ]);
    await urara.say_and_wait(['아니면 설령 ', callname, '에게 눌려 있더라도, 우라라는……']);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '의 초조하면서도 애상적인 눈빛을 응시하며, ',
      me.get_colored_name(),
      '은(는) 마침내 ',
      urara.get_colored_name(),
      '가 표현하고자 했던 앞뒤 사정을 이해했다.',
    ]);
    await era.printAndWait([
      '체력이 뛰어난 ',
      urara.get_uma_sex_title(),
      '들에게 문이나 창문 따위는 장애물이 되지 않으며, 상대방에게 받은 열쇠는 ',
      urara.sex,
      '들에게 있어 그 이상의 상징적인 의미를 갖는다.',
    ]);
    await era.printAndWait([
      '뒷감당을 생각하지 않고 행동할 수 있음에도 불구하고, ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 선택을 존중하고 싶어 했던 것이다.',
    ]);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '는 가장 좋아하는 ',
      callname,
      '가 자신을 먼저 초대해 줄 날만을 줄곧 기다려 왔고, 지금 ',
      me.get_colored_name(),
      '은(는) ',
      urara.sex,
      '를 너무 오래 기다리게 했다.',
    ]);

    in_urara.say_as_unknown(
      `지금 이 순간, 열쇠는 트레이너 ${me.get_adult_sex_title()} 당신의 손안에 있습니다──`,
    );
    era.printButton(
      `「미안해, 중요한 걸 잊고 있었어. 우라라를 너무 기다리게 했네……」（호감도+10）`,
      1,
    );
    era.printButton('「물론 그런 게 아니야, 하지만 아직은 때가 아닐 뿐이야……」', 2);
    const ret = await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 채 말을 내뱉기도 전에, ',
      urara.get_colored_name(),
      '는 몸을 내밀어 입맞춤으로 ',
      me.get_colored_name(),
      '의 대답을 가로막았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 치열을 가르지도, ',
      me.get_colored_name(),
      '의 두 손에서 벗어나지도 않은 채, 그저 가볍게 입술을 포갠 것만으로 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 모든 퇴로를 차단했다.',
    ]);
    await era.printAndWait([
      '불과 몇 초간의 입맞춤이었음에도 마치 몇 세기가 흐른 듯한 착각이 들었고, ',
      me.get_colored_name(),
      '은(는) 그 긴 찰나의 순간 속에서 ',
      urara.get_colored_name(),
      '의 몸을 놓아주었다.',
    ]);
    await era.printAndWait([
      '두 사람이 약간의 여운을 남기며 천천히 떨어지자, 어느샌가 열쇠가 ',
      me.get_colored_name(),
      '의 손에 쥐어져 있었다.',
    ]);
    await era.printAndWait([
      '짧은 침묵 끝에 ',
      urara.get_colored_name(),
      '와 마음을 나눈 ',
      me.get_colored_name(),
      '은(는) 마침내 결심을 굳히고, 열쇠를 ',
      urara.get_colored_name(),
      '의 앞으로 내밀었다.',
    ]);
    begin_and_init_ero(0, 52);
    await quick_make_love(
      new EroParticipant(52, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    end_ero_and_train();

    if (ret === 1) {
      await urara.say_and_wait(['──고마워, ', callname, '!']);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 열쇠를 건네는 순간, ',
        urara.get_colored_name(),
        '도 약속이라도 한 듯 ',
        me.get_colored_name(),
        '과(와) 동시에 손을 뻗었다.',
      ]);
      await era.printAndWait([
        '웃으며 ',
        me.get_colored_name(),
        '의 열쇠를 받아 든 작은 ',
        urara.get_uma_sex_title(),
        '는 마치 보물을 쥐듯 지극히 평범한 열쇠를 꽉 움켜쥐었다.',
      ]);
      await era.printAndWait([
        '기뻐하는 표정의 ',
        urara.get_colored_name(),
        '를 보며 ',
        me.get_colored_name(),
        '도 긴장을 풀고는 작은 ',
        urara.get_uma_sex_title(),
        '의 흩어진 머릿결을 부드럽게 쓰다듬어 주었다.',
      ]);
      await era.printAndWait(
        '어쩌면 머지않은 미래의 어느 날, 이른 아침부터 주방에서 분주히 움직이는 벚꽃색 뒷모습을 보게 될지도 모른다.',
      );
      await era.printAndWait(
        '어쩌면 머지않은 미래의 어느 날, 집에 돌아왔을 때 자신을 마중 나오는 벚꽃색 웃음을 보게 될지도 모른다……',
      );
      await era.printAndWait([
        '확실히 무척 아름다운 미래임에는 틀림없지만, 현재 유일한 아쉬움이라면 ',
        me.get_colored_name(),
        '은(는) 집문의 여분 열쇠가 아직 원래 자리에 있는지 확신할 수 없다는 것뿐이다……',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 게다가 이렇게 하면 모두에게 자랑도 할 수 있잖아! 그리고 ',
        callname,
        '의 방에는 분명 멋진 것들이 잔뜩 있을 테니까!',
      ]);
      await era.printAndWait('아니, 애초에 그런 목적도 있었던 건가?');
      await era.printAndWait([
        '그 후로 한동안 ',
        me.get_colored_name(),
        '은(는) 열쇠를 ',
        urara.get_colored_name(),
        '에게 건네준 일로 인해 많은 사람의 입방아에 오르내리게 되었다.',
      ]);
      await era.printAndWait('그 이유는…… 마음속에만 담아두기로 하자.');
      await sys_love_uma_in_event(52);
      sys_like_chara(52, 0, 10) && (await era.waitAnyKey());
    } else {
      await urara.say_and_wait([
        callname,
        '도 ',
        callname,
        ' 나름대로 생각이 있다는 거, 우라라는 다 알고 있어! 하지만 앞으로는 우라라랑 더 많이 놀아줘야 해?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 웃으며 ',
        me.get_colored_name(),
        '이(가) 내민 열쇠를 밀어냈고, 작은 손은 어느새 약간 실망한 기색이 역력한 ',
        me.get_colored_name(),
        '의 얼굴을 감싸 쥐었다.',
      ]);
      await urara.say_and_wait(['그리고 말이야, ', callname, '는 역시 웃는 얼굴이 제일 멋져!']);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '는 결국 ',
        callname,
        '에게 거절당한 최초의 결과를 받아들이고는 웃으며 다시 머리를 묶었다.',
      ]);
      await urara.say_and_wait('그럼 이제 훈련하러 가자! 오늘은 무엇을 할 거야?');
      await era.printAndWait([
        '소중한 사람에게 거절당했음에도 불구하고, ',
        urara.get_colored_name(),
        '는 평소처럼 웃으며 좋아하는 사람이 자신을 걱정하지 않도록 배려하고 있다.',
      ]);
      await era.printAndWait(
        '어찌 되었든, 미래에 분명 다시 기회가 오겠지만, 서로에게 무엇보다 소중한 두 사람은 마음의 거리를 좁힐 더할 나위 없는 기회를 놓치고 말았다.',
      );
      await era.printAndWait([
        '혼자서 머리를 묶는 ',
        urara.get_colored_name(),
        '의 뒷모습이 어쩐지 너무나도 쓸쓸해 보였다……',
      ]);
      await era.printAndWait([
        '당연하게도 그 후로 한동안 ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '가 항상 기운이 없어 보이는 이유에 대해 많은 사람에게 질문을 받아야 했다.',
      ]);
      await era.printAndWait('그 이유에 대해서는…… 그때 좀 더 솔직해졌더라면 좋았을 텐데.');
      await sys_love_uma_in_event(52);
    }
  }

  async 101(urara, me, callname) {
    const { chara_self_name, in_urara } = this.get_event_vars();
    await print_event_name('독점력', urara);
    new UraraLifeMarks().want_you = 1;
    await in_urara.say_as_unknown_and_wait(
      '어린 우라라도 질투 정도는 한답니다. 딱 그런 이야기죠.',
    );
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 훈련장 입구에 도착했을 때, 갑자기 달려온 ',
      urara.get_colored_name(),
      '와 정면으로 부딪혔다.',
    ]);
    await urara.say_and_wait([
      '오늘도 나랑 같이 있어 줘! ',
      callname,
      '가 원한다면 우리 뭐든지 할 수 있어!',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 정면에서 두 팔로 ',
      me.get_colored_name(),
      '을(를) 꽉 붙잡았고, 이로 인해 ',
      me.get_colored_name(),
      '은(는) 시선을 돌려 빠져나갈 기회를 완전히 잃어버렸다.',
    ]);
    await era.printAndWait([
      '상황 파악이 채 되지 않은 ',
      me.get_colored_name(),
      '은(는) 그저 약간 긴장한 채로 ',
      urara.get_colored_name(),
      '의 웃는 얼굴을 마주할 뿐이었다.',
    ]);
    await urara.say_and_wait([
      '그러니까, 오늘은 ',
      chara_self_name,
      '랑 조금만 더 같이 있어 줘!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '에게 대답할 틈도 주지 않고, ',
      urara.get_colored_name(),
      '는 어딘가 공허한 미소를 띠며 일방적으로 대화를 끝냈다.',
    ]);
    await era.printAndWait([
      '이어서 ',
      urara.get_colored_name(),
      '는 예상치 못한 힘으로 ',
      me.get_colored_name(),
      '을(를) 거의 끌다시피 하여 훈련장을 벗어났다.',
    ]);
    await era.printAndWait([
      '너무 외로웠던 것일까? 하지만 ',
      urara.get_colored_name(),
      '가 이곳에 나타난 것은…… 그저 우연이겠지?',
    ]);
    await era.printAndWait([
      '적어도 ',
      sys_get_colored_callname(0, 52),
      '에 의해 미리 매복당했다는 상상할 수 없는 사실보다는, ',
      me.get_colored_name(),
      '은(는) 차라리 그렇게 믿고 싶었다.',
    ]);
  }
};