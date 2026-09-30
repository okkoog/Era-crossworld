const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[143 + 1] = async (kitaru, me, callname) => {
    await print_event_name('잘가 마치카네……', kitaru);
    await era.printAndWait([
      '어쩌면 마지막이 될지도 모를, ',
      kitaru.get_colored_name(),
      '의 트레이너라는 신분으로 ',
      kitaru.sex,
      '와 함께하는 이번 새해 첫 참배다.',
    ]);
    await era.printAndWait([
      '그런 마음을 안고, ',
      me.get_colored_name(),
      '은(는) 다시 한번 이 외딴 신사의 토리이 앞에 도착했다.',
    ]);
    era.printButton('토리이 안으로 발을 들인다', 1);

    await era.input();
    await era.printAndWait(
      '이상하게도, 이전처럼 마치 다른 세계로 떨어지는 듯한 이질감은 느껴지지 않았다.',
    );
    await kitaru.say_and_wait([callname, '!']);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) 깊게 생각할 겨를도 없이, 참배길에서 미리 기다리고 있던 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '을(를) 끌고 새해 참배객을 맞이할 준비가 한창인 신사 안으로 이끌었다.',
    ]);
    era.drawLine();
    await kitaru.say_and_wait('네! 맞아요! 조금 더 왼쪽으로 달아주세요.');
    await kitaru.say_and_wait('아, 엣, 에에엣!!!');
    await kitaru.say_and_wait([
      '아! 조심해, ',
      sys_get_colored_callname(56, 58),
      '!',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '은(는) ',
      get_chara_talk(58).get_colored_name(),
      '를 포함해 도움을 주러 온 친구들을 능숙하게 지휘하며 새해의 신사를 꾸미고 있었다.',
    ]);
    await era.printAndWait(
      '한편에 미리 접어둔 공예품들과 매달리기를 기다리는 등롱들이 산더미처럼 쌓여 있어, 앞으로의 작업량이 만만치 않음을 암시했다.',
    );
    era.printButton('「이제 제법 한 사람 몫을 하는걸!」', 1);
    await era.input();
    await era.printAndWait([
      '자신의 담당을 칭찬하는 말을 건네자, 옆에서 사람들을 조율하던 ',
      kitaru.get_teen_sex_title(),
      '의 귀가 미세하게 움찔거렸다.',
    ]);
    await kitaru.say_and_wait('……네.');
    await era.printAndWait([
      '높이를 가늠해 보던 ',
      kitaru.get_colored_name(),
      '는 종이 등롱을 맡은 갈색 머리의 ',
      kitaru.get_uma_sex_title(),
      '가 매달린 줄을 조금 더 높이 올리도록 손짓했다.',
    ]);
    await kitaru.say_and_wait([
      '어릴 적 ',
      kitaru.get_bigger_sibling_sex_title(),
      '와 함께했던 새해 첫 참배 때는 정말 인산인해였거든요!',
    ]);
    await kitaru.say_and_wait('그날을 위해서 계속 준비해 왔으니, 이번에는 도움이 되겠죠?');
    await era.printAndWait([
      '갈색 머리의 ',
      kitaru.get_uma_sex_title(),
      '가 길 위에 종이 등롱을 성공적으로 매다는 것을 지켜본 뒤, 따스한 머리카락 색의 ',
      kitaru.get_uma_sex_title(),
      '는 고개를 돌려 ',
      me.get_colored_name(),
      '의 대답을 기다렸다.',
    ]);
    era.printButton('고개를 끄덕인다', 1);
    era.printButton('「분명 그럴 거야.」', 2);
    await era.input();
    await era.printAndWait([
      '실제로 그랬다. 아리마 기념에서 보여준 ',
      kitaru.get_colored_name(),
      '의 멋진 활약과 인터뷰는 전국의 관객들을 매료시켰다.',
    ]);
    await era.printAndWait([
      'SNS에는 벌써부터 새해 참배를 통해 아리마 기념 우승자인 이 ',
      kitaru.get_teen_sex_title(),
      '에게 행운을 나눠 받고 싶다는 글들이 수없이 올라와 있었다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 뒷이야기도 극성스러운 미디어를 통해 알려졌다. 이렇게나 낙천적인 ',
      kitaru.get_teen_sex_title(),
      '가 그렇게나 무거운 과거를 짊어지고 있었다는 사실에 사람들은 놀라움을 금치 못했고, 이는 곧 큰 감동으로 이어졌다.',
    ]);
    await me.say_and_wait(['운명을 짊어지고 달리는 ', kitaru.get_uma_sex_title()]);
    await era.printAndWait([
      '그 생각을 하니, 최근 ',
      kitaru.get_uma_sex_title(),
      ' 전문 잡지에서 ',
      kitaru.get_colored_name(),
      '에게 붙여준 별명이 무심코 입 밖으로 흘러나왔다.',
    ]);
    await kitaru.say_and_wait('에엣!!!');
    await kitaru.say_and_wait('그건 너무 과장됐어요!');
    await kitaru.say_and_wait([
      '무슨 ',
      kitaru.get_teen_sex_title(),
      '와 ',
      kitaru.sex,
      '의 운명의 사람 어쩌구 하는 가십 기사까지 나오고……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 언급한 지나치게 과장된 별명 때문인지, 아니면 뒤이어 생각난 반쯤 진담 섞인 소문들 때문인지, 침착하게 모두를 지휘하던 ',
      kitaru.get_colored_name(),
      '의 얼굴에 발그레한 홍조가 번졌다.',
    ]);
    await kitaru.say_and_wait('하지만 운명이라…… 정말 오랫동안 저를 괴롭혀 왔네요!');
    await kitaru.say_and_wait('그리고 제 생각엔…… 저도 이제 준비가 된 것 같아요……');
    era.printButton('「무슨 준비가 됐는데?」', 1);

    await era.input();
    await kitaru.say_and_wait([
      '그게, ',
      callname,
      ', 내일 저랑 같이 시외에 있는 묘지에 한 번 더 가주실 수 있나요?',
    ]);
    await era.printAndWait([
      '궁금한 마음을 잠시 억누르고, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 지시에 따라 새해 신사 준비를 돕는 대열에 합류했다.',
    ]);
    era.drawLine({ content: '다음 날 시외 묘원' });
    await era.printAndWait([
      '똑같은 측백나무 아래 묘비 옆, ',
      me.get_colored_actual_name(),
      '(이)라는 이름의 트레이너 곁에 오렌지색 ',
      kitaru.get_uma_sex_title(),
      '가 서 있었다.',
    ]);
    await era.printAndWait([
      '전날 밤의 액막이 의식은 ',
      me.get_colored_name(),
      '의 예상대로 참배객들로 인산인해를 이루었다.',
    ]);
    await era.printAndWait([
      '손님들이 가져온 부적이나 쿠마데 같은 행운 아이템들을 태우는 것만으로도 ',
      kitaru.get_colored_name(),
      '와 ',
      kitaru.sex,
      '가 부른 임시 무녀들은 자정이 넘도록 눈코 뜰 새 없이 바빴다.',
    ]);
    await era.printAndWait([
      '약속을 잊지 않은 ',
      kitaru.get_colored_name(),
      '는 아침 일찍 일어났다. 겨울 햇살 속에서 가느다란 먼지들이 떠다니고, 대리석 묘비는 유리처럼 투명하게 반짝였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_teen_sex_title(),
      '가 묘비 앞에 멍하니 서서 아무 말도 하지 않는 것을 보았다.',
    ]);
    await me.say_and_wait('혼자 있고 싶어?');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 손에 이끌려 이곳에 처음 왔을 때처럼 다시 한번 같은 질문을 던졌다.',
    ]);
    await kitaru.say_and_wait([
      '아니요, 괜찮아요, ',
      me.actual_name[0],
      '…… ',
      me.get_colored_actual_name(),
      ', 잠시만 곁에 있어 주세요……',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 목소리가 젖어 들었다. 평소의 아무렇지 않은 척하던 담담함이 아니었다.',
    ]);
    await kitaru.say_and_wait('……어제 제가 준비됐다고 했던 말 기억하시나요?');
    await kitaru.say_and_wait([
      '미소 짓는 법, 달리기에 대한 집념, 처음 배웠던 달리기 기술, 신사를 운영하는 지식까지. ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 저에게 정말 많은 것을 가르쳐 주었어요.',
    ]);
    await kitaru.say_and_wait([
      '만약 영혼이 존재한다면, 제 몸을 ',
      kitaru.get_bigger_sibling_sex_title(),
      '에게 바친대도 전혀 아깝지 않다고 생각했어요!',
    ]);
    await era.printAndWait([
      '거의 으르렁거리듯 이 말을 내뱉은 ',
      kitaru.get_colored_name(),
      '는 ',
      kitaru.get_bigger_sibling_sex_title(),
      '의 흑백 사진을 바라보았다. 3년 동안 성숙해진 옆모습은 사진 속 ',
      kitaru.get_uma_sex_title(),
      '와 놀라울 정도로 닮아 있었다.',
    ]);
    await kitaru.say_and_wait([
      '하지만 ',
      kitaru.get_bigger_sibling_sex_title(),
      '는 분명 그걸 원하지 않을 테고, 그리고…… ',
      callname,
      '도 원하지 않으시겠죠.',
    ]);
    await kitaru.say_and_wait([
      '……이제 ',
      kitaru.get_bigger_sibling_sex_title(),
      '를 보내줄 준비가 됐어요!',
    ]);
    await kitaru.say_and_wait(
      '하지만 이건 잊어버리는 게 아니라 작별 인사예요…… 저, 저만의 운명을 향해 달려 나갈 준비가 됐거든요!',
    );
    await kitaru.say_and_wait([
      '제가 여기 서 있고, ',
      callname,
      '이 곁에서 저를 지켜봐 주는 게 마치 제 얼굴을 비추는 햇살 같아요……',
    ]);
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      ', 나 지금 정말 행복해……',
    ]);
    await era.printAndWait([
      '산들바람이 불어오고, 나뭇잎이 흔들리는 소리가 공령하게 울려 퍼졌다. 마치 ',
      kitaru.get_colored_name(),
      '가 어젯밤 연주했던 신령스러운 음악처럼……',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (kitaru, me, callname, flags, edu_marks) {
    await CustomizedEdu.common_palace(kitaru, me);
    if (
      edu_marks.good_end === 1 &&
      era.get('love:56') >= 75 &&
      era.get('cflag:56:명예의전당') === 2
    ) {
      // 그리고 전당 입성
      era.drawLine();
      await print_event_name('두 세계의 주인', kitaru);
      await era.printAndWait(
        '아리마 기념의 여파로 신사에 몰려들었던 인기는 화려했던 만큼이나 빠르게 사그라들었다.',
      );
      await era.printAndWait([
        '신사는 다시 ',
        me.get_colored_name(),
        '이(가) 처음 ',
        kitaru.get_colored_name(),
        '를 만났을 때처럼 고요하고 적막한 모습으로 돌아왔다.',
      ]);
      await era.printAndWait([
        '굳이 달라진 점을 꼽자면, 참배객 중에 국화상을 목표로 하는 ',
        kitaru.get_uma_sex_title(),
        '가 부쩍 늘었다는 점일까.',
      ]);
      await era.printAndWait('그리고……');
      await kitaru.say_and_wait(['수고하셨어요, ', callname, '!']);
      await era.printAndWait([
        '무녀 복장을 한 ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 팔을 붙잡았다.',
      ]);
      await kitaru.say_and_wait('이런 잡무까지 도와주시게 해서 정말 죄송해요……');
      await era.printAndWait([
        '본래는 아리마 기념으로 갑자기 늘어난 참배객을 감당하기 위해서였지만, 신사 일을 돕는 습관은 어느새 ',
        me.get_colored_name(),
        '에게 일상이 되어 있었다.',
      ]);
      await era.printAndWait([
        '결국 ',
        kitaru.get_colored_name(),
        '의 트윙클 시리즈도 막을 내렸고, 다음 담당과는 언제 인연이 닿을지 알 수 없는 일이었으니까.',
      ]);
      await kitaru.say_and_wait('이제 좀 쉬러 가요!');
      await era.printAndWait(
        '석양에 물든 신사를 나란히 걷는 동안, 무녀의 나막신 소리가 돌바닥 위에서 또각또각 울려 퍼졌다.',
      );
      await era.printAndWait([
        '그러다 앞서가던 ',
        kitaru.get_colored_name(),
        '가 발걸음을 멈췄다.',
      ]);
      await era.printAndWait([
        '눈앞에는 익숙한 새전함이 있었다. 처음으로 ',
        me.get_colored_name(),
        '과(와) ',
        kitaru.get_colored_name(),
        '가 만났던 바로 그 장소였다.',
      ]);
      await kitaru.say_and_wait([
        '그러고 보니, ',
        callname,
        '도 몇 달 뒤면 새로운 담당을 맞이하시겠네요.',
      ]);
      await kitaru.say_and_wait('제가 행운을 빌어드릴까요?');
      era.printButton('고개를 끄덕인다', 1);
      era.printButton('고개를 저으며 거절한다', 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          kitaru.sex,
          '가 고헤이를 휘두르려다 말고 급히 멈춰 서며 미간을 찌푸렸다.',
        ]);
        await kitaru.say_and_wait(
          '……역시, 그런 일을 위해서라면 도저히 마음이 잡히질 않네요.',
        );
      } else {
        await kitaru.say_and_wait('그럴 줄 알았어요!');
        await kitaru.say_and_wait([
          '하지만 설령 ',
          callname,
          '이 동의하셨어도 전 아마 안 해드렸을 거예요.',
        ]);
      }
      await era.printAndWait([
        '다시 침묵이 찾아왔고, 뉘엿뉘엿 지는 낙조가 ',
        kitaru.get_colored_name(),
        '에게 금빛 면사포를 씌워주었다.',
      ]);
      await era.printAndWait([
        '고헤이를 옆의 새전함 위에 내려놓으며, ',
        kitaru.get_colored_name(),
        '가 침묵을 깨뜨렸다.',
      ]);
      await kitaru.say_and_wait([callname, ', 혹시 봉마시라고 들어보셨나요?']);
      era.printButton('고개를 끄덕인다', 1);
      era.printButton('고개를 젓는다', 2);
      await era.input();
      await kitaru.say_and_wait(
        '네! 바로 황혼 무렵이죠. 이승과 저승이 교차하는 시간이며, 신령이나 마물이 인간 세상에 가장 간섭하기 쉬운 때라고들 해요.',
      );
      await kitaru.say_and_wait('그렇다면……');
      await kitaru.say_and_wait(
        '아리마 기념의 시련을 넘어서 전당에 입성해, 아주 조금은 신령님에 가까워진 제가.',
      );
      await kitaru.say_and_wait('이 순간을 빌려 제 소원을 이룰 수도 있지 않을까요?');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 꽉 쥔 오른손을 ',
        me.get_colored_name(),
        '의 앞으로 내밀더니, 이내 ',
        kitaru.sex,
        '의 새끼손가락을 살며시 폈다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '에게는 익숙한, 손가락 걸고 약속하자는 권유였다.',
      ]);
      await kitaru.say_and_wait('앞으로도 제 곁에서 계속 함께해주실 거죠?');
      await kitaru.say_and_wait(`저의 트레이너 ${me.adult_sex_title}……`);
      await kitaru.say_and_wait('저의 운명의 사람……');
      await kitaru.say_and_wait('그리고……');
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '의 목소리가 점점 모기 소리처럼 가늘어졌다. 따스한 석양과 함께 홍조가 ',
        kitaru.sex,
        '의 뺨을 물들였다.',
      ]);
      await era.printAndWait([kitaru.sex, '가 고개를 들자 눈동자 속에 별빛이 반짝였다.']);
      await kitaru.say_and_wait('제가 사랑하는 사람.');
    } else {
      await CustomizedEdu.common_palace_relation(kitaru, me);
    }
  };
};