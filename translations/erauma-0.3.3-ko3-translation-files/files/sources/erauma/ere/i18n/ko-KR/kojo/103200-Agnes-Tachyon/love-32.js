// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/love-32"),

  // [번역 완료] 25
  25: (() => {
    const title = (tachyon) => [
      '「',
      tachyon.name,
      '」？「',
      tachyon.uma_sex_title,
      'A」？',
    ];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      callname_25,
      t_call_c,
      c_call_t,
    ) => {
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '의 실험실. 평소 학원을 소란스럽게 만들던 이곳이 요 며칠 사이 유난히 조용했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '정말이지, 담당을 혼자 학원에 남겨 두고 자기만 출장을 가 버리다니.',
      );
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 실험실에서 실험을 하며 투덜투덜 불평을 늘어놓았다.',
      ]);
      await coffee.print_and_wait(
        '불평의 대상? 물론 출장 때문에 일주일이나 자리를 비우게 된 어느 모르모트였다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '도시락까지 직접 데워 먹어야 하다니…… 이런 태만한 행위는 너무하군.',
      );
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 끊임없이, 끊임없이, 끊임없이 중얼거렸다.',
      ]);
      await coffee.print_and_wait('그저 중얼거리는 것뿐이었다면 어떻게든 견딜 수 있었겠지만……');
      era.println();
      await tachyon.say_and_wait([
        '자네도 이게 학대라고 생각하지 않나? ',
        t_call_c,
      ]);
      await coffee.say_and_wait(
        '…………당신들의 염장질에 저를 끌어들이지 마세요.',
      );
      era.println();
      await coffee.print_and_wait([
        tachyon.sex,
        '가 전혀 멈출 기미를 보이지 않고 자신까지 화제에 끌어들이자, 같은 빈 교실을 공유하던 ',
        coffee.get_colored_name(),
        '는 마침내 참지 못했다.',
      ]);
      await coffee.say_and_wait([c_call_t, '……그 이야기만 벌써 세 번째예요.']);
      await tachyon.say_and_wait('겨우 세 번뿐이네만. 그렇게 많은 것도 아니지 않나.');
      await coffee.say_and_wait([
        callname_25,
        '은(는) 오늘 겨우 출장 첫날인데……',
      ]);
      await tachyon.say_and_wait('…………그렇다 해도 세 번은……');
      await coffee.say_and_wait([
        you.sex,
        '가 학원을 떠난 지 30분도 채 안 지났어요.',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 한숨을 내쉬었다. 과거에는 실험 지상주의였던 이 동급생이 트레이너와 친해지고 나서 완전히 딴사람이 됐다.',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait('……뭐, 이해하지 못할 것도 아니다. 상대가 그 사람이라면.');
      } else {
        await coffee.print_and_wait(
          '원래는 냉혹하고 윤리관도 없으며 인명을 하찮게 여기는…… 아니, 지나친 말이었을지도.',
        );
      }
      await coffee.print_and_wait([
        tachyon.sex,
        '가 여전히 투덜거리는 모습을 보자 ',
        coffee.get_colored_name(),
        '의 마음속에 짜증이 치밀어 자신도 모르게 말이 튀어나왔다.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '애초에…… ',
        callname_25,
        '은(는) ',
        c_call_t,
        '만의 전유물이 아니잖아요.',
      ]);
      await tachyon.say_and_wait('…………그건 무슨 의미인가?');
      await coffee.say_and_wait([
        '무슨 의미인지는 ',
        c_call_t,
        '스스로가 가장 잘 알고 있지 않나요? ',
        callname_25,
        '은(는) 출장이라고만 했지, 어디서 무엇을 하는지 자세히 말해 줬나요?',
      ]);
      await coffee.say_and_wait([
        '…………아니, 처음부터 끝까지 ',
        you.sex,
        '는 내게 출장을 간다는 사실만 전했을 뿐이네.',
      ]);
      era.println();
      await coffee.print_and_wait([
        '그야 당연했다. 출장이라고는 하지만 사실 얼마 전 ',
        c_call_t,
        '가 일으킨 약물 유출 사고의 뒤처리를 위해 긴급히 불려 간 것이었다. 담당의 감정을 지나치게 배려하는 ',
        callname,
        '가 ',
        tachyon.sex,
        '본인에게 사실대로 말했을 리 없었다.',
      ]);
      if (era.get('cflag:25:招募状态') === 1) {
        await coffee.print_and_wait('……조금 질투가 날 정도네.');
      }
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 속으로 생각했다.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '그렇다면…… 이런 가능성도 있지 않을까요? ',
        callname_25,
        '은(는) 사실 출장이 아니라…… 누군가와 밀회를 즐기고 있다면?',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '그도 그럴 게…… ',
        c_call_t,
        '는 너무 번거롭잖아요. 제가 ',
        callname_25,
        '이라면 벌써 진작에 질려 버렸을걸요?',
      ]);
      await tachyon.say_and_wait([
        '……',
        you.sex,
        '는 말했네.',
        you.sex,
        '는 나의 주법과 가능성에 매료되었다고.',
      ]);
      await coffee.say_and_wait('후후……');
      await tachyon.say_and_wait('뭐가 웃긴 거지?');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 커피를 한 모금 마시며 지금 이 순간 ',
        tachyon.get_colored_name(),
        '의 반응을 만끽했다.',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          '최근 들어 「자기」 트레이너와 염장질만 하던 사람이 이렇게 불안한 표정을 짓게 만들다니…… 위험해, 조금 중독될 것 같아.',
        );
      } else {
        await coffee.print_and_wait(
          '최근 들어 트레이너와 염장질만 하던 사람이 이렇게 불안한 표정을 짓게 만들다니…… 위험해, 조금 중독될 것 같아.',
        );
      }
      era.println();
      await coffee.say_and_wait([
        '바꿔 말하면, ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '그 자체는 ',
        you.sex,
        '에게 아무런 매력이 없다는 뜻 아닌가요?',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '주법, 가능성…… ',
        you.sex,
        '가 바라보고 있는 것은 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '일까요, 아니면 『그것들을 지닌 어떤 ',
        tachyon.uma_sex_title,
        'A』일까요?',
      ]);
      await tachyon.say_and_wait('……違……');
      await coffee.say_and_wait([
        '반대로 말하자면, 그것들 말고 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '는 ',
        you.sex,
        '에게 대체 어떤 매력이 있다는 걸까요?',
      ]);
      await tachyon.say_and_wait('…………');
      era.println();
      await coffee.print_and_wait([
        '방금 전의 짜증은 온데간데없이 사라지고 오늘의 즐거움이 절정에 달한 ',
        coffee.get_colored_name(),
        '는 마지막으로 핵폭탄급 한마디를 남기고 교실을 나섰다.',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.say_and_wait([
          '아, 참. ',
          callname_25,
          '의 도시락 정말 맛있었어요…… 앞으로도 ',
          callname_25,
          '에게 만들어 달라고 부탁해 볼까요?',
        ]);
      } else {
        await coffee.say_and_wait([
          '아, 참. ',
          callname_25,
          '의 도시락 정말 맛있었어요…… 기회가 된다면 다시 ',
          you.sex,
          '에게 만들어 달라고 해 보죠.',
        ]);
      }
      era.drawLine();
      await tachyon.say_and_wait('…………');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '가 떠나고 실험실에는 ',
        tachyon.get_colored_name(),
        '혼자만 남았다.',
      ]);
      await tachyon.print_and_wait([
        '두뇌 회전이 빠른 ',
        tachyon.sex,
        '는 알고 있었다. 그 말은 모두 ',
        coffee.get_colored_name(),
        '가 ',
        tachyon.sex,
        '를 도발하기 위해 일부러 내뱉은 것이었다.',
      ]);
      await tachyon.print_and_wait([
        '왜 그랬는지까지 ',
        tachyon.sex,
        '는 짐작하고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('염장질……?');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 말대로라면, 자신과 ',
        callname,
        '은(는) ',
        tachyon.sex,
        '의 눈에 그렇게 보인다는 뜻이었다.',
      ]);
      await tachyon.print_and_wait('하지만 그건 이상하지 않은가?');
      await tachyon.print_and_wait(
        '염장질이란 연인이나 서로 연모하는 두 사람이 타인의 시선도 아랑곳하지 않고 애정을 과시하는 것을 말한다.',
      );
      await tachyon.print_and_wait([
        '하지만 자신과 ',
        callname,
        '은(는) 그런 관계가 아니었다.',
      ]);
      await tachyon.print_and_wait('연인, 혹은 연모하는 관계……');
      await tachyon.print_and_wait([
        '주변 사람들 눈에 비친 자신과 ',
        callname,
        '은(는) 정말 그런 사이였던 건가?',
      ]);
      await tachyon.print_and_wait([callname, '과 내가…… 연애……']);
      era.println();
      await tachyon.say_and_wait('………！？');
      era.println();
      await tachyon.print_and_wait(
        '그 생각이 뇌리를 스친 순간 심장에 강심제를 주입한 듯 고동이 거세졌고, 지나친 혈류 탓에 뺨이 뜨겁게 달아올랐다.',
      );
      await tachyon.print_and_wait('이…… 이건 마치…… 내가………');
      era.println();
      await tachyon.say_and_wait([
        '그그그그럴 리가 없지 않나…… 그저 실험동물일 뿐…… 그래! 애당초 ',
        you.sex,
        '는 고작 모르모트 군에 불과하다고!',
      ]);
      await tachyon.say_and_wait([
        '내가 왜 ',
        you.sex,
        '가 좋아하는 게 나라는 존재인지, 아니면 나의 주법이나 가능성인지 신경 써야 하는 거지!',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '그래, 모르모트라면 그저 같은 목표를 공유하기만 하면 되는 것이다.',
      );
      await tachyon.print_and_wait([
        '불필요한 감정 따위를 섞을 필요는 없다. 감정은 실험에 방해만 될 뿐이다.',
      ]);
      await tachyon.print_and_wait([
        '두 사람의 관계는 연구자와 모르모트, 트레이너와 ',
        tachyon.uma_sex_title,
      ]);
      tachyon.print('그 이상의 관계는 필요 없다.');
      era.printButton('정말로 그런가?', 1);
      era.printButton('맞아, 그럴 뿐이야.', 2);
      if ((await era.input()) === 1) {
        await tachyon.print_and_wait('그렇다. 분명 그럴 터였다.');
        await tachyon.print_and_wait('그런데 어째서');
        await tachyon.print_and_wait(
          '연인 취급을 받았다는 사실에 마음 깊은 곳에서 솟구치는 기쁨과 고양감을 억누를 수 없는 것인가.',
        );
        await tachyon.print_and_wait([
          you.sex,
          '가 ',
          coffee.get_colored_name(),
          '에게 도시락을 만들어 줬다는 사실에 질투와 분노가 가라앉지 않는 것인가.',
        ]);
        await tachyon.print_and_wait([
          '…………',
          coffee.get_colored_name(),
          '가 말한 대로 상대가 나라는 존재를 바라보고 있지 않다는 사실에 왜 이토록 두려움을 느끼는 것인가.',
        ]);
        era.println();
        await tachyon.say_and_wait('…………나에게 대체 무슨 일이 일어난 거지.');
        await tachyon.say_and_wait('이건 마치…… 마치……');
        era.println();
        await tachyon.print_and_wait([
          '마치 내가 ',
          callname,
          '을 좋아하는 것 같지 않은가.',
        ]);
        era.println();
        await tachyon.print_and_wait(
          '당사자조차 갈피를 잡지 못하는 감정이 뜨거운 숨결에 섞여 천장으로 흩어졌고, 이내 고독한 실험실 속으로 사라져 갔다.',
        );
      } else {
        await tachyon.print_and_wait('그렇다.');
        await tachyon.print_and_wait('그걸로 충분하다.');
        await tachyon.print_and_wait(
          '두 사람은 그저 순수한 모르모트와 연구자로 남으면 된다.',
        );
        await tachyon.print_and_wait('그저 지금처럼 계속해서 생활해 나가면 된다.');
        await tachyon.print_and_wait(
          '제멋대로인 천재 과학자와 묵묵히 따르는 조수 겸 실험체.',
        );
        await tachyon.print_and_wait('두 사람의 관계는 그저 지금 이대로 유지되면 된다.');
        await tachyon.print_and_wait('유지된다라…… 언제까지?');
        await tachyon.print_and_wait(
          '1년? 2년? 졸업할 때까지? 대학에 진학할 때까지? 사회에 나가기 전까지?',
        );
        await tachyon.print_and_wait(
          '이런 관계를 그때까지 유지할 수 있을까?',
        );
        era.println();
        await tachyon.say_and_wait('하아……');
        era.println();
        await tachyon.print_and_wait(
          '하지만 어찌 됐든 선택은 내려졌다. 그러니 지금은 이걸로 됐다.',
        );
      }
      era.println();
      await tachyon.say_and_wait([
        '빨리 돌아오게나, ',
        callname,
        '……',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 49
  async 49(tachyon, you, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '릿토 생활관의 어느 침실에서 한 명의 ',
      tachyon.uma_sex_title,
      '가 베개에 얼굴을 묻고 낮은 목소리로 무언가를 웅얼거리고 있었다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '평소 같으면 이 방에서 이런 광경이 벌어지는 것도 딱히 특별할 일은 아니었다.',
    );
    await tachyon.print_and_wait([
      '대개 어느 분홍색 머리의 ',
      tachyon.uma_sex_title,
      '가 베개를 껴안고 ',
      tachyon.uma_sex_title,
      '를 향한 사랑을 조용히 속삭이곤 했으니까.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('하지만 오늘의 주인공은 평소와 조금 달랐다.');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '분홍색 머리의 ',
      tachyon.uma_sex_title,
      '와 같은 방을 쓰는 밤색 머리의 ',
      tachyon.uma_sex_title,
      '가 과거 룸메이트에게서 보고는 당황했던 행동을 지금 그대로 따라 하고 있었다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '당시의 ',
      tachyon.sex,
      '는 그런 행위가 그저 쓸데없는 짓이라고만 생각했다.',
    ]);
    await tachyon.print_and_wait('정말로 하고 싶은 말이라면 어째서 부끄러워하는 거지?');
    await tachyon.print_and_wait('부끄럽다면 차라리 입 밖으로 내뱉지 않으면 그만 아닌가?');
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '지금에 와서야 ',
      tachyon.sex,
      '는 비로소 그 행동의 이유를 깨달았다.',
    ]);
    await tachyon.print_and_wait('부끄러움을 느끼는 건 말속에 담긴 애정 때문이며,');
    await tachyon.print_and_wait(
      '굳이 말을 내뱉는 건 그렇게 하지 않으면 마음속의 뜨거운 감정이 해소되지 않기 때문이다.',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '그리하여 지금의 ',
      tachyon.sex,
      '도 베개를 향해 진심을 털어놓을 수밖에 없었다. 룸메이트가 원정 촬영으로 자리를 비워 방 안에는 아무도 없었다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '……그렇다 해도 이런 감정이 어디서 비롯되는지 ',
      tachyon.sex,
      '는 여전히 확실히 알지 못했다.',
    ]);
    await tachyon.print_and_wait('그저 자신에게 순순히 따르는——');
    await tachyon.print_and_wait([
      '동시에 지금 이 초조함의 원인이기도 한——',
      you.sex,
      '의 이름을 계속 부를 뿐이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '처음 만났을 때는 순전히 실험체에 대한 흥미로 붙였던 호칭.',
    );
    await tachyon.print_and_wait(
      '처음에는 분석과 냉소만이 담겨 있었던 호칭.',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '그것이 지금은 복잡한 감정이 섞여 입에 올릴 때마다 가슴을 떨리게 하는 호칭으로 변해 있었다.',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('이 감정은 대체 무엇이란 말인가.');
    await tachyon.print_and_wait('달콤하면서도 쓰고, 따뜻하면서도 두려웠다.');
    await tachyon.print_and_wait('서로 모순되는 속성들이 하나의 감정 안에 모여 있었다.');
    await tachyon.print_and_wait('이상하다. 뜨겁다. 그리고…… 무섭다?');
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('미지의 영역을 대하는 자신의 태도는 언제나 기대와 희열뿐이었다.');
    await tachyon.print_and_wait(
      '그런데 어째서 이 미지의 감정만큼은 두려움을 불러일으키는 걸까?',
    );
    await tachyon.print_and_wait([
      '무엇이 무서운 거지? 이 감정이? 아니면 ',
      callname,
      '？',
    ]);
    await tachyon.print_and_wait(['내가 두려워한다니…… ', callname, '을(를)?']);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('더욱 크게 요동치는 내면이 해답을 내놓았다.');
    await tachyon.print_and_wait(['내가 ', callname, '을(를) 두려워하고 있다고?']);
    await tachyon.print_and_wait([you.sex, '의 무엇을?']);
    await tachyon.print_and_wait(['고작 ', callname, ' ']);
    await tachyon.print_and_wait('하지만…… 순수한 공포와는 다른 감정이었다.');
    await tachyon.print_and_wait('이 복잡한 감정의 정체는 또 무엇일까?');
    await tachyon.print_and_wait('緊張、焦燥、不安、興奮、喜悦、恐怖、混乱');
    await tachyon.print_and_wait(
      '어떤 감정에도 닿아 있는 듯하면서 어느 하나에도 속하지 않는 것.',
    );
    await tachyon.print_and_wait(['고작 ', callname, ' ']);
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait('……아니, 사실 굳이 추측할 필요도 없지 않은가?');
    await tachyon.print_and_wait([you.sex, '의 이름을 부를 때마다 내면을 훑고 지나가는 전류.']);
    await tachyon.print_and_wait([you.sex, '의 목소리를 들을 때마다 가슴속에서 치밀어 오르는 고동.']);
    await tachyon.print_and_wait([
      you.sex,
      '의 미소를 볼 때마다 정신없이 뒤엉키는 사고.',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('아아, 역시나.');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('아니, 상상 그 이상이었다.');
    era.println();
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('설마 했던 일이다.');
    await tachyon.print_and_wait('그저 「애정」을 담아 이름을 불렀을 뿐인데,');
    await tachyon.print_and_wait('심경이 이토록 극적으로 변하다니.');
    era.println();
    await tachyon.print_and_wait('초조함은 기쁨으로 변했고,');
    await tachyon.print_and_wait('혼란은 안도감으로 변했다.');
    await tachyon.print_and_wait('불안감은 환희로 변했다.');
    await tachyon.print_and_wait('하지만 공포는……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('어째서, 어째서 공포만은 남아 있는 거지?');
    await tachyon.print_and_wait('분명 스스로 인정하지 않았나.');
    await tachyon.print_and_wait([
      '이미 내가 ',
      callname,
      '을 사랑하고 있다는 걸 말이다.',
    ]);
    await tachyon.print_and_wait('그런데 왜 여전히 무서운 거지?');
    await tachyon.print_and_wait('왜 여전히 두려운 거지?');
    era.println();
    await tachyon.print_and_wait('아아……');
    await tachyon.print_and_wait('답은 너무나도 명백하지 않은가.');
    await tachyon.print_and_wait('이 환희가 사랑으로 인해 태어난 것이라면,');
    await tachyon.print_and_wait('두려움을 느끼는 원인 또한');
    await tachyon.print_and_wait('당연히 「사랑받지 못함」에 대한 공포일 테니까.');
    era.println();
    await tachyon.print_and_wait([
      you.sex,
      '가 나를 좋아하지 않는다면 어쩌지?',
    ]);
    await tachyon.print_and_wait([you.sex, '가 나를 싫어하게 된다면 어쩌지?']);
    await tachyon.print_and_wait([
      you.sex,
      '가 다른 누군가를 사랑하게 된다면 어쩌지?',
    ]);
    await tachyon.print_and_wait([
      '만약…… ',
      you.sex,
      '가 사랑하는 게 「나 자신」이 아니라면 어쩌지?',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '주법, 가능성…… ',
      you.sex,
      '가 바라보고 있는 건 과연 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.uma_sex_title,
      '일까, 아니면 「그것들을 가진 어떤 ',
      tachyon.uma_sex_title,
      'A」일까?',
    ]);
    await tachyon.print_and_wait([
      '반대로 말하자면 그런 것들 말고 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.uma_sex_title,
      '가 ',
      you.sex,
      '에게 대체 어떤 매력이 있다는 걸까?',
    ]);
    era.println();
    await tachyon.print_and_wait([you.sex, '의 그 광기 어린 눈빛이 떠올랐다.']);
    await tachyon.print_and_wait([
      you.sex,
      '가 매료된 것은 ',
      tachyon.get_colored_name(),
      '이 아니라, ',
      tachyon.get_colored_name(),
      '의 주법이었다.',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      '가 도와주고 싶은 것은 ',
      tachyon.get_colored_name(),
      '이 아니라, ',
      tachyon.get_colored_name(),
      '의 꿈이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '…………']);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '……그저 부속품에 불과하다.',
    ]);
    await tachyon.print_and_wait([
      '만약 내가 죽을 위기에 처한다면, ',
      you.sex,
      '는 진심으로 슬퍼해 줄까?',
    ]);
    await tachyon.print_and_wait([
      '만약 내가 다시는 달릴 수 없게 된다면, ',
      you.sex,
      '는 가슴 아파해 줄까?',
    ]);
    await tachyon.print_and_wait([
      '만약 내가 꿈을 포기한다면, ',
      you.sex,
      '는 안타까워해 줄까?',
    ]);
    era.println();
    await tachyon.print_and_wait('……아니, 그 질문들에 대한 대답은 분명히 「예」겠지.');
    await tachyon.print_and_wait('하지만, 하지만 말이야.');
    era.println();
    await tachyon.print_and_wait([
      '만약 ',
      tachyon.get_colored_name(),
      '에게서 두 다리도 꿈도 가능성도 모두 사라진다면, ',
      you.sex,
      '는 그래도 ',
      tachyon.get_colored_name(),
      '을 사랑해 줄까?',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '결코 응답받지 못할 의문만이 베갯속 솜 사이로 흩어져 갔다.',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('아아, 안 되겠군.');
    await tachyon.print_and_wait('입을 열 때마다 여전히 벼락 같은 자극이 내달렸다.');
    await tachyon.print_and_wait('이름을 부를 때마다 머릿속이 미쳐 버릴 듯 떨렸다.');
    await tachyon.print_and_wait('하지만');
    await tachyon.print_and_wait('질문을 던질 때마다 마음속 그림자는 한층 짙어졌다.');
    await tachyon.print_and_wait('의심을 품을 때마다 머릿속 공포도 조금씩 커져 갔다.');
    era.println();
    await tachyon.print_and_wait('무섭다.');
    await tachyon.print_and_wait('不安');
    await tachyon.print_and_wait('괴롭다.');
    era.println();
    await tachyon.print_and_wait('이것이 좋아한다는 것인가?');
    await tachyon.print_and_wait('이것이 누군가에게 빠졌다는 것인가?');
    await tachyon.print_and_wait('이것이 연애라는 것인가?');
    era.println();
    tachyon.print('만약 그렇다면…… 그렇다면');
    era.printButton('……무언가 해야만 해 (관계 진전)', 1);
    era.printButton('……아니, 아직은 아니야 (관계 보류)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('무언가를 해야만 한다.');
      await tachyon.print_and_wait('초조해하기만 해서는 아무것도 달라지지 않는다.');
      await tachyon.print_and_wait([
        '애당초 ',
        tachyon.get_colored_name(),
        '은 왕자님이 나타나기만을 기다리는 나약한 ',
        tachyon.uma_sex_title,
        '가 아니다.',
      ]);
      await tachyon.print_and_wait('주어진 변수를 조합하고 실험을 통해 증명한다.');
      await tachyon.print_and_wait('그것이야말로 연구자로서 해야 할 일이다.');
      await tachyon.print_and_wait('제대로 생각해 보는 거다.');
      era.println();
      await tachyon.print_and_wait([
        '유일한 실험 목적. ',
        tachyon.get_colored_name(),
        '가 ',
        callname,
        '의 마음속에서 차지하는 지위를 증명하는 것.',
      ]);
      await tachyon.print_and_wait('실험 방안은…… 있다. 하지만 위험도와 리스크가……');
      era.println();
      await tachyon.say_and_wait('………………후후.');
      era.println();
      await tachyon.print_and_wait('더 고려할 게 남아 있나?');
      await tachyon.print_and_wait([
        '그 사람이 곁에 없는 ',
        tachyon.get_colored_name(),
        '에게 과연 존재 의의가 남아 있기는 한가?',
      ]);
      await tachyon.print_and_wait('이미 이 지경까지 와 놓고 아직도 자신을 속일 셈인가?');
      era.println();
      await tachyon.print_and_wait('아아.');
      await tachyon.print_and_wait([
        '전부 자네 탓이라네. 나를 연구자에서 그저 평범한 ',
        tachyon.teen_sex_title,
        '로 만들어 버렸으니.',
      ]);
      await tachyon.print_and_wait([
        '그러니 책임을 지게나, 나의 사랑스러운 ',
        callname,
      ]);
      await tachyon.print_and_wait('나의 고백을, 나의 「연서」를.');
      await tachyon.print_and_wait('부디 달게 받아 주게나.');
    } else {
      await tachyon.print_and_wait('안 돼……');
      era.println();
      await tachyon.print_and_wait('만약 무언가 변해 버린다면.');
      await tachyon.print_and_wait([you.sex, '와 다시는 만나지 못하게 된다면.']);
      await tachyon.print_and_wait([
        you.sex,
        '가 만들어 준 도시락을 다시는 먹지 못한다면.',
      ]);
      await tachyon.print_and_wait(['그 광기 어린 눈빛을 다시는 볼 수 없게 된다면.']);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 더 이상 살아갈 수 없을 것이다.',
      ]);
      era.println();
      await tachyon.print_and_wait('그런 일은 절대로 싫다.');
      await tachyon.print_and_wait('그런 일은 절대로 용납할 수 없다.');
      era.println();
      await tachyon.print_and_wait([
        callname,
        '과 ',
        tachyon.get_colored_name(),
        '의 일상을 위하여.',
      ]);
      await tachyon.print_and_wait('이 나날들을 지켜 내기 위하여.');
      await tachyon.print_and_wait('억누르자.');
      await tachyon.print_and_wait('가라앉히자.');
      await tachyon.print_and_wait('참아 내는 거다.');
      era.println();
      await tachyon.print_and_wait('가슴속 격동을 억누르고,');
      await tachyon.print_and_wait('마음속 열기를 가라앉히며,');
      await tachyon.print_and_wait('불안한 감정을 참아 내자.');
      era.println();
      await tachyon.print_and_wait('다만……');
      await tachyon.print_and_wait('아무리 강한 스프링이라도 압력에 의해 파괴되는 날은 오는 법이다.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이라는 이름의 이 스프링이 과연 언제까지 버텨 낼 수 있을까.',
      ]);
    }
    return ret;
  },

  // [번역 완료] 74
  74: (() => {
    const title = '마녀의 고백';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        ', 오늘의 약을 마시기 전에 자네에게 할 이야기가 하나 있네.',
      ]);
      era.println();
      await era.printAndWait([
        '오늘도 ',
        you.get_colored_name(),
        '은(는) 평소처럼 ',
        tachyon.get_colored_name(),
        '의 실험실을 찾아왔다.',
        tachyon.sex,
        '는 평소처럼 도시락을 받아 들고 오늘의 약을 ',
        you.get_colored_name(),
        '에게 건넸다.',
      ]);
      await era.printAndWait('마치 물물교환과도 같은 거래였다.');
      era.println();
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '이(가) 약을 마시려던 순간 ',
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 손을 막았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 의아한 표정으로 ',
        tachyon.sex,
        '를 바라보자 ',
        tachyon.sex,
        '는 진지한 눈으로 ',
        you.get_colored_name(),
        '을(를) 마주 보았다.',
      ]);
      era.println();
      await era.printAndWait(
        '…………그 눈빛에는 마치 목숨을 걸 각오가 서린 듯했다.',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 인어공주라는 동화를 알고 있나?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        you.get_colored_name(),
        '의 대답을 기다리지 않았다. 애초에 대답을 들을 생각도 없었던 듯 곧바로 이야기를 이었다.',
      ]);
      await era.printAndWait(
        '……하지만 그 이야기는 안데르센의 인어공주와는 전혀 다른 이야기였다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '옛날 옛적 바닷속에 인어공주가 살고 있었다네. 그녀는 어릴 때부터 두 다리를 갖고 땅 위에서 마음껏 달리고 싶어 했지.',
      );
      await tachyon.say_and_wait(
        '하지만 바다에서 사는 그녀에게는 허리 아래로 물고기 꼬리만 있었네. 달리기는커녕 똑바로 서는 것조차 불가능했지.',
      );
      era.println();
      await era.printAndWait('그녀는 자조하듯 자신의 두 다리를 내려다보았다……');
      await era.printAndWait('유리처럼 연약한 두 다리. 설 수도 달릴 수도 있지만,');
      await era.printAndWait(
        '달리면 부서지는 다리가 물고기 꼬리보다 얼마나 나을까?',
      );
      era.println();
      await tachyon.say_and_wait(
        '공주는 마녀를 만나지 않았네. 믿을 수 없는 마녀에게 자신의 다리를 맡길 생각도 없었지.',
      );
      await tachyon.say_and_wait(
        '정말 원했던 건 온전히 자신의 두 다리였네. 그래서 직접 마법을 배우기 시작했지.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 양손을 흔들자 어디선가 시험관 두 개가 나타났다. 마치 마술처럼, 아니…… 마법처럼.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '공주는 믿고 있었다네. 계속 노력한다면 언젠가 진짜 두 다리를 얻을 수 있다고.',
      );
      await tachyon.say_and_wait(
        '그때는 마음껏 달릴 수 있을 것이고 더 이상 아무것도 두려워하지 않아도 되겠지. 하지만 어느 순간까지의 이야기였다네……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말투가 갑자기 아득하게 멀어졌다. 마치 꿈속에 가라앉은 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그러다 그녀는 한 사람을 만났네.');
      await tachyon.say_and_wait(
        '그는 왕자가 아니었네. 그저 평범한 잠수부였지. 바다에 빠져 구원을 기다리던 왕자가 아니라,',
      );
      await tachyon.say_and_wait(
        '항해하던 중 해수면에서 자료를 수집하는 공주를 우연히 발견하고 세이렌의 매력에 사로잡힌 사람일세.',
      );
      await tachyon.say_and_wait(
        '스스로 바다에 뛰어들어 실험을 도운 평범한 인간이지. 편의상 그를—— 모르모트 군이라고 부르겠네.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 그 대목에서 무슨 농담이라도 떠올린 듯 키득거리며 웃었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '처음에 공주는 모르모트 군에게 아무런 감정도 없었네. 그저 재미있는 실험 대상이 생겼다고 생각했을 뿐이지.',
      );
      await tachyon.say_and_wait(
        '그를 대상으로 각종 실험을 했지. 증식, 발광, 분신, 성별 전환…… 후후.',
      );
      await tachyon.say_and_wait(
        '하지만 순진한 공주는 변한 건 모르모트 군뿐이라고 생각했네.',
      );
      await tachyon.say_and_wait(
        '가장 중요한 기본 원리를 잊고 있었던 걸세—— 반응은 상호작용이라는 사실을.',
      );
      await tachyon.say_and_wait('화학에서나 인간관계에서나 똑같지.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 한숨을 내쉬었다. 눈에는 끝없는 미련과 그리움이 서려 있었다. 여전히 꿈속에 잠겨 있는 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '모르모트 군은 실험을 핑계로 공주에게 세상의 여러 모습을 보여 주었네.',
      );
      await tachyon.say_and_wait(
        '일각고래와 함께 사냥하며 약육강식을 배우고, 흰긴수염고래가 죽어 해저로 가라앉는 모습을 보며 생로병사의 의미를 깨달았지.',
      );
      await tachyon.say_and_wait(
        '돌고래들의 구애와 짝짓기를 보고는 두 사람 모두 얼굴을 붉혔다네.',
      );
      await tachyon.say_and_wait(
        '차츰 공주는 실험 바깥의 세상이 이토록 아름답다는 걸 깨달았지.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 조용히 이야기하며 아름답고 때로는 장대한 풍경을 하나씩 그려 나갔다.',
      ]);
      await era.printAndWait(
        '말투는 여전히 부드러웠지만 가느다란 실 같은 아쉬움이 묻어났다—— 마치 아름다운 꿈에서 깨어나려는 사람처럼.',
      );
      era.println();
      await tachyon.say_and_wait('그러다 마침내 어느 날.');
      await tachyon.say_and_wait(
        '공주는 자신이 더는 실험에 집중할 수 없다는 걸 깨달았다네.',
      );
      await tachyon.say_and_wait(
        '마음을 가라앉히고 연구하려 할 때마다 연구 성과보다',
      );
      await tachyon.say_and_wait(
        '새 연구 이야기를 들은 모르모트 군의 표정을 더 기대하게 되었지.',
      );
      await tachyon.say_and_wait(
        '해수면에서 자료를 수집하려 할 때마다 그곳의 인간들보다',
      );
      await tachyon.say_and_wait(
        '해저에서 기다리는 모르모트 군이 보고 싶어졌네.',
      );
      await tachyon.say_and_wait('새 약을 만들 때마다 약효보다');
      await tachyon.say_and_wait(
        '약을 마신 모르모트 군이 어떤 반응을 보일지가 더 기대되었지.',
      );
      era.println();
      await era.printAndWait([
        '그제야 ',
        tachyon.get_colored_name(),
        '의 표정이 또렷해졌다. 마치 아름다운 꿈에서 드디어 깨어난 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '그녀는 두려워지기 시작했네. 언젠가는 모르모트 군과 함께하는 시간에 완전히 빠져 버리지 않을까 하고.',
      );
      await tachyon.say_and_wait(
        '언젠가…… 두 다리를 얻겠다는 목표마저 텅 빈 말로 변해 버리지 않을까 하고.',
      );
      await tachyon.say_and_wait(
        '그렇게 된 공주는 평범한 과학자는 될 수 있을지 모르지. 하지만 더는 진정한 연구자로 남을 수 없을 걸세……',
      );
      era.println();
      await tachyon.say_and_wait('그때 마녀가 나타났네.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 의자에서 일어나 ',
        you.get_colored_name(),
        '에게 다가갔다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 손이 ',
        you.get_colored_name(),
        '의 손을 덮었다…… 하지만 꽉 쥐지는 않았다.',
        tachyon.sex,
        '가 쓰다듬고 있는 건 ',
        you.get_colored_name(),
        '의 손에 들린 시험관이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '처음부터 끝까지 마녀는 공주의 마음속에 있었네. 마녀는 바로 공주 자신이었던 걸세!',
      );
      await tachyon.say_and_wait(
        '공주의 이성적인 면인 마녀가 속삭였지. 지금 이 모든 변화의 근원은 그 모르모트다. 그가 사라지면 모든 게 원래대로 돌아갈 거라고.',
      );
      await tachyon.say_and_wait(
        '만약 모르모트가 떠난다면…… 아니, 떠나는 것만으로는 부족하네. 여운조차 남겨서는 안 되지……',
      );
      await tachyon.say_and_wait(
        '모르모트를 『없애는』 걸세. 그러면 공주는 원래대로 돌아가 실험에 전념하던 공주가 될 수 있네.',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………그래, 『원래대로 돌아가는 것』뿐이지. 아무도 보장하지 못하네.',
      );
      await tachyon.say_and_wait(
        '원래대로 돌아간 공주가 연구로 두 다리를 얻을 수 있을지는 말이야. 알 수 있는 건 『그럴 가능성이 있다』는 것뿐.',
      );
      await tachyon.say_and_wait(
        '반대로 모르모트 군과 계속 함께한다면…… 그 가능성은',
      );
      await tachyon.say_and_wait(
        '영영 되찾을 수 없다고 마녀가 말했지. 그리고 공주의 손을 움직여 약을 만들게 했네.',
      );
      await tachyon.say_and_wait(
        '마녀는 공주에게 말했네. 늘 그랬듯 모르모트에게 이 약을 먹이기만 하면',
      );
      await tachyon.say_and_wait('모든 것이 끝나고 예전의 삶으로 돌아갈 수 있다고.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 거기까지 이야기하고 ',
        you.get_colored_name(),
        '의 손에서 다시 약을 가져갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('하지만……');
      era.println();
      await era.printAndWait('약을 쥔 손이 문득 조금 떨렸다.');
      era.println();
      await tachyon.say_and_wait(
        '겁 많은 공주는 모르모트 군에게 모든 사실을 털어놓았네.',
      );
      await tachyon.say_and_wait(
        '……애정 때문도, 연민 때문도, 차마 못할 짓이라는 생각 때문도 아닐세.',
      );
      await tachyon.say_and_wait('겁쟁이, 소심하고 배짱 없는 사람이었던 게지.');
      await tachyon.say_and_wait(
        '공주를 선량한 사람이라고 생각하지 말게. 결국 마녀는 공주의 내면일 뿐. 그녀의 본성은 바로 그 냉혹하고 무정한 마녀이니까.',
      );
      await tachyon.say_and_wait(
        '공주가 그런 말을 한 목적은………… 그저 책임지고 싶지 않았기 때문일세.',
      );
      era.println();
      await era.printAndWait([
        '그리고 ',
        tachyon.get_colored_name(),
        '는 다시 손에 든 약을 치켜들었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('사랑하는 사람을 죽였다는 죄를 짊어지고 싶지 않았던 거지.');
      await tachyon.say_and_wait('연모하는 사람을 제 손으로 해쳤다는 책임도 지고 싶지 않았던 걸세.');
      await tachyon.say_and_wait(
        '없애려는 모르모트에게 공주를 위해 자신을 희생해 달라고 요구하는 이기심이지.',
      );
      era.println();
      await era.printAndWait('약이 다시 내밀어졌다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 숙인 ',
        tachyon.get_colored_name(),
        '의 표정이 지금 어떤지 알 수 없었다.',
      ]);
      await era.printAndWait('울고 있는 걸까? 사랑하는 사람의 죽음이 슬퍼서?');
      await era.printAndWait(
        '아니면 자신을 옭아매던 사슬이 끊어질 생각에 비웃고 있는 걸까?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '는 아무 말 없이 상대가 이야기를 마치기를 기다렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그러니……',
        callname,
        ', 이 이기적인 연구자를 위해 선택해 주게.',
      ]);
      era.println();
      await era.printAndWait([
        '그때 ',
        tachyon.sex,
        '가 내뱉은 말은 분명 지독하게 이기적인 말이었다.',
      ]);
      await era.printAndWait('상대에게 자신을 위해 희생해 달라고 바라는 것이니까.');
      await era.printAndWait('그것도 확실한 결과가 아니라 단지 『가능성』을 위해서.');
      await era.printAndWait(
        '다시 말해 『나를 위해 죽어 줘. 하지만 죽어도 성공할지는 몰라』라는 뜻이었다. 참으로 무책임한 말이다.',
      );
      era.println();
      era.print(['그러니 ', you.get_colored_name(), '은(는) 선택한다…………']);
      era.printButton('마시지 않는다 (관계 진전)', 1);
      era.printButton('마신다 (관계 보류)', 2);
      era.printButton('타키온에게 약을 먹인다 【!】', 3);
      era.print(
        [
          '【경고: 이 선택지를 고르면 ',
          tachyon.get_colored_name(),
          '와의 관계는 되돌릴 수 없습니다! 트레센 학원은 담당을 버리는 행위를 용납하지 않습니다!】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 74-accept
  '74-accept': (() => {
    const title = '超光速の姫';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の手から薬を受け取る',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([tachyon.sex, 'は顔を上げ、眼に心配を乗せている']);
      await era.printAndWait([
        '自分が薬を飲むのを心配しているのか、それとも……飲まないことを？',
      ]);
      await era.printAndWait([
        '正直、',
        you.get_colored_name(),
        ' 自身も、次の行いが正しいかどうかは断言できない',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' は保証できる。これからすることは、すべて本心からだ',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は手の薬を……傍の廃棄薬品処理桶へ注ぎ捨てる',
      ]);
      era.println();
      await tachyon.say_and_wait('………………あ');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が試験管を傾ける間、',
        tachyon.get_colored_name(),
        ' は何の声も上げなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がすべて注ぎ終え、一世紀ほども長い時間が過ぎてから、',
        tachyon.sex,
        'は小さな「あ」を漏らした。今になって、反応すべきだったと思い出したかのように',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……これが、何を意味するか、分かっていますの？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は試験管を逆さにし、中の薬が一滴残らず空になったのを確認する',
      ]);
      await era.printAndWait([
        'このとき、',
        tachyon.get_colored_name(),
        ' はやっと言葉を整え、編んだ言葉を吐き出す',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '私の夢……私が追う可能性。あなたのその選択は、つまり、',
      );
      await tachyon.say_and_wait([
        '私、',
        tachyon.get_colored_name(),
        ' に、それらを完全に捨てろと。徹底的に捨てて、ただの、他の思春期の',
        tachyon.teen_sex_title,
        'と何ら変わらない……',
      ]);
      await tachyon.say_and_wait([
        '恋に落ちた普通の',
        tachyon.child_sex_title,
        'になれ、と。他の可能性を捨て、あなたと一緒にいる可能性を選べ、と……',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, 'は早口で、どもりながら言う']);
      await era.printAndWait(
        '今のうちに考えを変えろと自分を説き、この決断がどれほど愚かかを知らせようとしているようで、',
      );
      await era.printAndWait([
        tachyon.sex,
        'のために犠牲になってほしいのに、悪役にはなりたくないから、こうも身勝手で厚顔な忠告をしている',
      ]);
      era.println();
      await era.printAndWait([
        'だが、',
        tachyon.sex,
        'と長く付き合ってきた ',
        you.get_colored_name(),
        ' には、言葉の裏の本音が見える',
      ]);
      await era.printAndWait(
        'どもるのは恐れだ。すべて自分の思い違いではないか、と',
      );
      await era.printAndWait(
        '早口なのは、後悔を聞きたくないからだ。子供がわざと不明瞭に話して、相手を頷かせるようなもの',
      );
      await era.printAndWait(
        '契約書にサインする前、内容を何度も繰り返して相手の後悔を防ぐ保険の営業のように',
      );
      await era.printAndWait(
        'その判断の根拠は、拒む言葉を吐きながらも揺れ続ける尻尾、',
      );
      await era.printAndWait(
        'まっすぐ立った耳、そして本人は気づかれていないつもりだろうが、顔に明らかな——安心の表情',
      );
      era.println();
      await tachyon.say_and_wait([
        '分かりますの、',
        callname,
        '……あなたはずっと、可能性の彼方を見たいと言っていたでしょう？ こうなってしまえば、本当に……',
      ]);
      era.println();
      await era.printAndWait('もういい');
      await era.printAndWait([
        'このまま',
        tachyon.sex,
        'がいつまで虚勢を張れるか見るのも面白いが',
      ]);
      await era.printAndWait([
        'そうすればあとで、羞恥に怒った',
        tachyon.sex,
        'に報復されるだろう',
      ]);
      await era.printAndWait([
        'だから ',
        you.get_colored_name(),
        ' は考える。どうすれば ',
        you.get_colored_name(),
        ' のいちばん深い覚悟を示せるか',
      ]);
      era.print([you.get_colored_name(), ' は決める……']);
      era.printButton(`${tachyon.sex}を抱きしめる`, 1);
      era.printButton(`${tachyon.sex}にキスする`, 2);
      era.printButton(`${tachyon.sex}の耳を軽く噛む`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '人は突発の現象に遭うと、ふたつのことに気を配れない。',
            tachyon.uma_sex_title,
            'も同じだ',
          ]);
          await era.printAndWait([
            'だから当然、',
            you.get_colored_name(),
            ' の突然の抱擁に呆け、馴染みの雄の匂いに沈み、',
          ]);
          await era.printAndWait([
            'この温もりを味わう ',
            tachyon.get_colored_name(),
            ' は、',
            tachyon.sex,
            'の長広舌を続けられなくなった',
          ]);
          break;
        case 2:
          await era.printAndWait(
            '古来伝わる愛情の示し方は、口を塞ぎつつ感情を伝える最強の技なのかもしれない',
          );
          await era.printAndWait([
            tachyon.sex,
            'の唇は',
            tachyon.sex,
            '本人と同じく、見かけは硬い守りだが、触れた瞬間に崩れ、柔らかな内側を晒す。',
          ]);
          await era.printAndWait(
            '岩のような牙城も、舌先の探りであっさり崩れ、敵の長駆直入を許すしかない。',
          );
          await era.printAndWait(
            '忠貞に見えた舌も、自分の太い舌に触れた瞬間、小鳥のように依りかかり、受け身で摘まれる',
          );
          break;
        case 3:
          await era.printAndWait('代わりに漏れたのは、抑えきれない嬌声だった');
          await era.printAndWait([
            '周知の通り、多くの',
            tachyon.uma_sex_title,
            'に特有で、人間と異なる器官は、',
            tachyon.couple_title,
            'のいちばん敏感な部位だ',
          ]);
          await era.printAndWait([
            'だから、',
            tachyon.get_colored_name(),
            ' が漏らした、想像を掻き立てる嬌声を、誰が責められよう',
          ]);
          await era.printAndWait([
            'むしろ、',
            you.get_colored_name(),
            ' に抱かれ耳を摘まれながら、まだ立っていられ、',
            you.get_colored_name(),
            ' の腕の中へ崩れ落ちなかった ',
            tachyon.get_colored_name(),
            ' は、相当なものだ',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……だめ……待って……くすぐったい……',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' の、拒絶というより受け入れるような声を聞き、',
            you.get_colored_name(),
            ' は手を変え、より荒い力で、揉み、擦り、',
            tachyon.uma_sex_title,
            'の弾力のある、敏感な耳先を弄る',
          ]);
          era.println();
          await tachyon.say_and_wait('ひっ……待って……だめですわ……');
          era.println();
          await era.printAndWait([
            'たっぷり三十秒耐えた末、',
            tachyon.get_colored_name(),
            ' はついに敗れ、',
            you.get_colored_name(),
            ' の腕の中へ崩れ落ちた',
          ]);
      }
      await era.printAndWait([
        tachyon.sex,
        'が完全に抗うのをやめてから、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'を離す',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はまださっきの体験に沈み、我に返れていない',
      ]);
      await era.printAndWait([
        'その瞬間、',
        you.get_colored_name(),
        ' は一生に一度の本音を吐き始める',
      ]);
      era.printButton('「愛してる、アグネスタキオン」', 1);
      await era.input();
      await tachyon.say_and_wait('！！！！？？？？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉を聞いた瞬間、',
        tachyon.sex,
        'の尻尾が逆立ち、毛を逆立てた猫のようだった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname.substring(0, 1).repeat(5),
        callname,
        '！？ 何を言っていますの！？',
      ]);
      era.println();
      await era.printAndWait([
        'おや、',
        tachyon.get_colored_name(),
        ' の耳は、あまりよくないのか',
      ]);
      await era.printAndWait('なら、もう何度か言おう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて ',
        tachyon.get_colored_name(),
        ' を見たときを思い出す',
      ]);
      await era.printAndWait([tachyon.sex, 'の走り、', tachyon.sex, 'の儚さ']);
      await era.printAndWait([
        'どちらも ',
        you.get_colored_name(),
        ' を狂気へ沈め、',
        tachyon.sex,
        'へ魅せた',
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'のメイクデビューを思い出す',
      ]);
      await era.printAndWait(
        '光のように、当然のようにレースへ出て、当然のようにすべてを超え、当然のように勝つ',
      );
      await era.printAndWait([
        '「レースなど実験結果の検証にすぎない」と言い、冷たい顔で、冷酷な態度でレースに臨む',
        tachyon.sex,
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて',
        tachyon.sex,
        'に弁当を作ったときを思い出す',
      ]);
      await era.printAndWait(
        '自分の可能性を見たいと、そのために自らを実験体にすることも厭わない',
      );
      await era.printAndWait([
        '想像を超え、限界を破る可能性を期待し、眼を狂わせた',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、夜通し眠らず実験する',
        tachyon.sex,
        'を思い出す',
      ]);
      await era.printAndWait(
        '研究のためなら体を捧げ、夢のためなら健康を捨てられる',
      );
      await era.printAndWait([
        '肉体はみすぼらしく、眼だけが夢への憧れで輝く',
        tachyon.sex,
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて一緒に外出したときの',
        tachyon.sex,
        'を思い出す',
      ]);
      await era.printAndWait(['変色キャベツ汁の騒動と', tachyon.sex, 'の拗ね']);
      await era.printAndWait([
        'そんなことで勝手を言い、挟んだぬいぐるみに喜び、そんな、普通の',
        tachyon.sex,
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        'そして最後……眼前、',
        you.get_colored_name(),
        ' の前にいる',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '緊張して視線を彷徨わせ、',
        you.get_colored_name(),
        ' が再び口を開くのを待つ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'もともと淡い感情の両眼が、今は幸福と愛情で満ちた',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '頬を赤らめ、見るからに……徹底的に恋に酔い、ただの',
        tachyon.teen_sex_title,
        'である',
        tachyon.sex,
      ]);
      era.printButton(
        '「愛してる、アグネスタキオン。愛しているのは『君』だ。走りでも、夢でも、可能性でもない」',
        1,
      );
      await era.input();
      await era.printAndWait('間違いない');
      await era.printAndWait(['すべての主体は', tachyon.sex, 'にある']);
      await era.printAndWait([
        '最初の自分は、たしかに',
        tachyon.sex,
        'の走りと狂気に惹かれただけだったのかもしれない',
      ]);
      await era.printAndWait([
        'だが今、',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の、',
        you.get_colored_name(),
        ' の心における位置は、それらを超えている',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の考えも、とうに変わっていた',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        ' の夢を叶えるために、文句も言わず働く」のではない',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        ' のために、自分のすべてを捧げられる」のだ',
      ]);
      await era.printAndWait('だから……');
      era.printButton(
        '「たとえいつか、君が走らなくなっても、可能性を追わなくなっても、僕はこれまで通り君を愛する」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '所詮、最初から最後まで、こんなに簡単な問題だった',
      );
      await era.printAndWait([
        '「母親と妻が水に落ちたら、どちらを先に助ける」のような問題で、主役が「',
        tachyon.get_colored_name(),
        '」と「',
        tachyon.get_colored_name(),
        ' の才能」に変わっただけだ',
      ]);
      await era.printAndWait([
        '…………こんな簡単な問題を、これほど複雑にできるのも、',
        tachyon.sex,
        'の才なのかもしれない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の厄介さに、苦笑を漏らす',
      ]);
      await era.printAndWait('だが、これで安心できるだろう');
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        'そう思った ',
        you.get_colored_name(),
        ' は、',
        tachyon.sex,
        'の顔に、喜びの涙と、花開く笑顔を見る',
      ]);
      await era.printAndWait(['大雨のあとのコスモスのように、艶やかだった']);
      era.drawLine();
      await tachyon.say_and_wait([callname, '～～今日の薬ですわ']);
      era.println();
      await era.printAndWait([
        '翌日、',
        you.get_colored_name(),
        ' は、前日までもう研究はできないと言っていた某',
        tachyon.uma_sex_title,
        'を見る',
      ]);
      await era.printAndWait(
        'いつもの薬より危うく見える蛍光の薬を手に、跳ねるようにトレーナー室へ入ってきた',
      );
      era.println();
      await tachyon.say_and_wait(
        '早く早く、今日の薬は今までの発光系の集大成ですわ。飲めば二万四千種のRGB色が出せますのよ～～',
      );
      await tachyon.say_and_wait(
        'そうそう、週末は実地実験に出ますから、元の予定は全部潰しなさい。分かりましたわね？',
      );
      await tachyon.say_and_wait(
        'それと今日の弁当は三十分早く持ってきてくださいまし。大事な実験がありますの',
      );
      await tachyon.say_and_wait(
        'だから覚えておいて……ああ、できるだけ液状のは避けて。実験に影響しますわ',
      );
      era.println();
      await era.printAndWait(
        '入るなり、興奮した研究者は実験と研究の話を止めない',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' ですら、その光景にしばらく呆けた',
      ]);
      await era.printAndWait(
        'もちろん、無理な要求のせいではない。普段の要求のほうがよほど無理だ。そうではなく……',
      );
      era.printButton('「研究できない、と言っていたよな？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は覚えている。昨日、涙ぐんで、もう研究できない、もう可能性を見つけられないと言っていた ',
        tachyon.get_colored_name(),
        ' の、あわれな様子を',
      ]);
      await era.printAndWait([
        '今の',
        tachyon.sex,
        'には、前日の落胆も崩壊も、まったく見えない',
      ]);
      era.println();
      await tachyon.say_and_wait(['……本当のことですわよ、', callname, ' ']);
      await tachyon.say_and_wait(
        '今の私は、もう自分の可能性の研究に集中できませんわ。',
      );
      await tachyon.say_and_wait('頭の中は、四六時中あなたのことでいっぱい……');
      await tachyon.say_and_wait(
        '今この瞬間も、心ではあなたの喜ぶ顔、怒る顔、恥じる顔、緊張する顔を……',
      );
      await tachyon.say_and_wait(
        '私をこうしたのですから、責任を取っていただかないと困りますわ',
      );
      era.printButton('「ご……ごめん？」', 1);
      await era.input();
      await era.printAndWait('これは、自分のせいなのか？');
      await era.printAndWait(
        'それに、こんな直球の愛情をぶつけられると、やはり恥ずかしい……',
      );
      await era.printAndWait('違う、それはさっきの話と何の関係がある');
      await era.printAndWait(
        '今も普段どおり研究している理由の説明になっていないではないか？',
      );
      era.println();
      await tachyon.say_and_wait(
        'だから……もう自分のことだけを考えていられませんわ',
      );
      await tachyon.say_and_wait(
        '今思いつくすべての可能性に……あなたが傍にいなければなりません。これから考えられるのも、たぶん『あなたと』一緒の可能性だけでしょう',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は急に',
        tachyon.sex,
        'の意味が分からなくなり、じっと ',
        tachyon.get_colored_name(),
        ' を見る',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' も ',
        you.get_colored_name(),
        ' の視線の下で、落ち着かなくなってくる',
      ]);
      await era.printAndWait(
        'それから、ダムが決壊するように、何事もない顔が、恋人の視線という最後の一押しで',
      );
      await era.printAndWait(
        '一瞬にして、満面を赤らめた恥じらいの表情へ変わる',
      );
      era.println();
      await tachyon.say_and_wait(
        'ですから……つまり……週末の実験……時間は空けられますわね……',
      );
      await tachyon.say_and_wait(
        '一般に言う、あの、つまり、デートと呼ばれる行為が二人にどれほど適するかの検証で…………',
      );
      await tachyon.say_and_wait(
        'とにかく！ 土曜日の朝九時、遅刻は許しませんわ！ それと私の朝食も持ってきて！ 以上ですわ！',
      );
      await tachyon.say_and_wait(
        'それと、今日の昼の弁当……できれば……一口で食べやすいものに……',
      );
      await tachyon.say_and_wait(
        'あの……恋人関係における『あーん』行為の心拍指数測定を……してもよろしいですの？',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'が恥ずかしさを押し切って言い終える様子を見て、',
        you.get_colored_name(),
        ' は思わず笑ってしまう',
      ]);
      await era.printAndWait('こんなとき、どう答えればいいだろう');
      await era.printAndWait(
        'この勝手で、気ままな、いちばん可愛い狂った科学者に',
      );
      await era.printAndWait([
        'このいとおしく、愛おしい、いちばん愛する恋する',
        tachyon.teen_sex_title,
        'に',
      ]);
      era.println();
      await you.say_and_wait([
        'はい……私の',
        tachyon.sex_code - 1 ? '姫' : '王子',
        '様',
      ]);
      return [];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 74-betray
  '74-betray': (() => {
    const title = [{ color: buff_colors[3], content: '魔女の薬' }];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([you.get_colored_name(), ' は、不意に疲れた']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は薬を ',
        tachyon.get_colored_name(),
        ' の手へ押し戻す',
      ]);
      era.println();
      await tachyon.say_and_wait(['…………', callname, '？']);
      era.printButton('「疲れた。飲むなら自分で飲め」', 1);
      await era.input();
      await era.printAndWait('いつからだろう。理由は何だろう。');
      await era.printAndWait([
        'あるいは ',
        you.get_colored_name(),
        ' は、もう ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の勝手に耐えられなくなったのか',
      ]);
      await era.printAndWait([
        'あるいは ',
        you.get_colored_name(),
        ' は、すでに ',
        tachyon.get_colored_name(),
        ' への忍耐を失ったのか',
      ]);
      await era.printAndWait([
        'あるいは ',
        you.get_colored_name(),
        ' は、これも',
        tachyon.sex,
        'のまた一つの冗談だと思ったのか',
      ]);
      await era.printAndWait([
        '所詮、',
        tachyon.sex,
        'の都合で自分に死ねと言うなど、この女は何の冗談を言っているんだ',
      ]);
      era.println();
      await era.printAndWait([
        'とにかく、',
        you.get_colored_name(),
        ' は薬を',
        tachyon.sex,
        'へ押し返した',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、この薬が本当に人を死なせるかどうかなど気にしない',
      ]);
      await era.printAndWait(
        'いいえ、本当に人を死なせるなら、それも悪くないかもしれない',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の内側に、そんな暗い考えまで生まれていた',
      ]);
      era.println();
      await tachyon.say_and_wait('…………ああ、そうですか……分かりましたわ');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、激しい反応を見せなかった',
      ]);
      await era.printAndWait([
        'いつもの',
        tachyon.sex,
        'に比べ、異常なほど落ち着いた様子が、かえって ',
        you.get_colored_name(),
        ' の興味を少し引く',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、やっと顔を上げた',
        tachyon.sex,
        'が、釈然とし、解き放たれたような笑顔を浮かべているのを見る',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……そうですわね。この問題の答えは、もともと二つだけではなかった',
      );
      await tachyon.say_and_wait(
        '生と死の外に、第三の選択肢がある。出題者を死なせる、ということですわね？',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は思わず眉を寄せる']);
      await era.printAndWait('話が長い。飲むのか、飲まないのか');
      await era.printAndWait([
        '……いいえ、所詮この、いつも他人に薬を飲ませる',
        tachyon.phy_sex_title.substring(0, 1),
        'は',
      ]);
      await era.printAndWait('自分が薬を飲むことなど、考えていなかっただろう');
      await era.printAndWait([
        you.get_colored_name(),
        ' はため息をつき、また一つの茶番だと嘆き、実験室を出ようとする',
      ]);
      era.drawLine();
      await era.printAndWait([
        'そして、',
        you.get_colored_name(),
        ' が振り返って出ようとした瞬間',
      ]);
      era.println();
      await tachyon.say_and_wait('ぐっ………！');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は強引に口づけられた']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は抗おうとするが、人間は所詮',
        tachyon.uma_sex_title,
        'の力に敵わない。薬で何度も改造された ',
        you.get_colored_name(),
        ' でも同じだ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が ',
        you.get_colored_name(),
        ' の唇をこじ開け、',
        you.get_colored_name(),
        ' の口の中で掻き混ぜ、導く',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が名残惜しげに ',
        you.get_colored_name(),
        ' の歯間、',
        you.get_colored_name(),
        ' の舌先、',
        you.get_colored_name(),
        ' の歯茎を舐める————だが、それらは',
        tachyon.sex,
        'の目標ではない',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の目標は————まだ飲み込んでいない、人を「消す」に足りる薬を、',
        you.get_colored_name(),
        ' の口へ導くこと',
      ]);
      era.println();
      await you.say_and_wait('ぐっ……！ ううう………！！！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は必死に抗い、体をよじるが、相手を止められない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の徒労の抵抗の末、薬はそれでも ',
        you.get_colored_name(),
        ' たち二人で分け尽くされた',
      ]);
      era.println();
      await you.say_and_wait('くそっ……！');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は思わず大声で罵る']);
      await era.printAndWait([
        'この',
        tachyon.phy_sex_title.substring(0, 1),
        'は何を考えている。死ぬなら道連れまで取るのか',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は険しく',
        tachyon.sex,
        'を睨み、すぐ罵ろうとして……言葉が口へ出る寸前で止まる',
      ]);
      era.println();
      era.println();
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' が泣いていた']);
      await era.printAndWait([
        'いいえ……正確には、',
        tachyon.sex,
        'は涙を流しながら、笑顔を絞り出そうとしている。だが最終的に浮かんだのは、泣くより見苦しい笑顔だった',
      ]);
      await era.printAndWait([
        'これは ',
        you.get_colored_name(),
        ' が',
        tachyon.sex,
        'を知って以来、初めて見る',
        tachyon.sex,
        'の、これほどみすぼらしい姿だ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'は……はははっ、',
        callname,
        '、ごめんなさい、騙しましたわ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は何事もない口調を装おうとするが、噎せる声がその行いをひどく難しくしている',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'これ、毒などではありませんわ…………逆に、『始め直す』薬ですのよ',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はそう言うが、',
        tachyon.sex,
        'が試験管を掲げた手は今も震え続け、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の言葉を信じられない',
      ]);
      era.println();
      await era.printAndWait(
        '…………信じないでしょう？ 構いませんわ。薬が効けば分かります',
      );
      era.println();
      await era.printAndWait('ふざけるな……！');
      await era.printAndWait([
        you.get_colored_name(),
        ' はそう叫びたいが、体がもう動かないことに気づく',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          'それから、',
          you.get_colored_name(),
          ' の口に残った薬が、このとき不意に味を変える。もともと無色無臭だった薬の、今の味は……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '最後のキスの味が、豚丼だなんて、思いませんでしたわ',
          );
        } else {
          await tachyon.say_and_wait(
            '初キスの味が、豚丼だなんて、思いませんでしたわ',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' は、バレンタインにもらったチョコレートを思い出す',
        ]);
        await era.printAndWait([
          'あのときから、この',
          tachyon.uma_sex_title,
          'は奇妙な薬で自分を責め続けてきた',
        ]);
        await era.printAndWait(
          '毎回、自分が薬を飲んだ反応を見て豪快に笑い、楽しむ',
        );
        await era.printAndWait(
          '今となって、もうこれに耐えられない自分の、何が悪い？',
        );
      }
      await era.printAndWait([
        'たしかに、最初 ',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の走りと、',
        tachyon.sex,
        'の夢に興味を持った',
      ]);
      await era.printAndWait([
        'たしかに、',
        you.get_colored_name(),
        ' は心から',
        tachyon.sex,
        'を助け、',
        tachyon.sex,
        'を守り、',
        tachyon.sex,
        'が夢を果たすまで寄り添いたかった',
      ]);
      await era.printAndWait([
        'だが、',
        you.get_colored_name(),
        ' はもう飽きた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'への怒り、不満、落胆、嫌悪が積み重なった重さは、天秤の向こうの、',
        tachyon.sex,
        'への期待、好意、憧れを超えていた',
      ]);
      era.println();
      await era.printAndWait([
        '今の ',
        you.get_colored_name(),
        ' は、早くこの',
        tachyon.uma_sex_title,
        'から逃れたいだけなのに、こんな毒まで飲まされる。',
      ]);
      await you.say_and_wait(
        'お前みたいなやつと、ロミオとジュリエットの真似をする暇はない！',
        true,
      );
      await era.printAndWait([
        'だが口の利けない ',
        you.get_colored_name(),
        ' は、黙って ',
        tachyon.get_colored_name(),
        ' が言い終えるのを聞くしかない。せめて、険しい視線で ',
        tachyon.get_colored_name(),
        ' を睨み、不満の吐き出し口にする',
      ]);
      era.println();
      await tachyon.say_and_wait('正直に申しますと、本当に怖かった');
      await tachyon.say_and_wait(
        '人を好きなのに、相手が自分を好きかどうか分からない感覚は、本当に、怖いですわ',
      );
      await tachyon.say_and_wait(
        'どんな実験結果より心を昂ぶらせ、どんなレースの結果より胸を速く打つ',
      );
      await tachyon.say_and_wait('正直に申しますと、本当に怖かった');
      await tachyon.say_and_wait(
        '相手の好きなのが自分ではなく、自分の持つ『何か』だけだったら、',
      );
      await tachyon.say_and_wait(
        'どうすればいい。相手の眼に映っているのが、自分の『夢』だけで、自分という人間ではなかったら',
      );
      await tachyon.say_and_wait(
        '私は、ずっとそれを心配していました……いちばん大事なこと、いちばん恐ろしい可能性を、忘れて',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は嗤い、あまりに無邪気で楽観的だった自分を嘲る',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '相手は、そもそも自分を好きではなかった。自分のすべてを、夢の可能性すら含めて、好きではなかった',
      );
      era.println();
      await era.printAndWait([
        'ついに、',
        tachyon.get_colored_name(),
        ' の顔の笑顔——もしそれを笑顔と呼べるなら——が崩れる',
      ]);
      await era.printAndWait('徹底した泣き顔になる');
      era.println();
      await tachyon.say_and_wait(
        'これが……失恋の感じなのですね……うっ……辛い……怖い……心が砕けそうですわ……',
      );
      await tachyon.say_and_wait(
        'そうだったのですね……振られたのですね……痛い……心が痛い……',
      );
      await tachyon.say_and_wait(
        'どうして……どうして一人に好かれないだけで……どうして心がこんなに辛い……ううう……いや……',
      );
      await tachyon.say_and_wait(
        'いやですわ……こんなに痛いと分かっていたら、恋などしませんでした……次は、次は……もういや……二度といや……痛い……',
      );
      await tachyon.say_and_wait([
        callname,
        '……',
        callname,
        '……どこにいますの……どうして見つからない……どこへ行ったのです……',
      ]);
      await tachyon.say_and_wait([
        'どうして、こんなに辛いときに傍にいないのです……',
        callname,
        '……もう実験には使いませんわ……全部、私のせいです……だから……だから戻ってきて……',
      ]);
      await tachyon.say_and_wait(
        'ここが怖い……連れて帰って、私たちの実験室へ……もう勝手は言いませんわ……',
      );
      await tachyon.say_and_wait([
        '服は自分で洗います……弁当箱も食べ終わったら散らかしません……',
        callname,
        '……',
        callname,
        '…………',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' を見る。途中から、自分が誰かも忘れたかのようだ',
      ]);
      await era.printAndWait([
        '眼は自分を見ているのに、ずっと ',
        callname,
        ' と呼び、ここにいない誰かを探しているかのようだ',
      ]);
      await era.printAndWait(['いいえ……', callname, '……？']);
      await era.printAndWait([
        'これは誰だ？ ',
        you.get_colored_name(),
        ' は、この名前を聞いたことがないはずでは？',
      ]);
      await era.printAndWait([
        '眼前のこの',
        tachyon.uma_sex_title,
        'は誰だ。自分は',
        tachyon.sex,
        'を知っているのか',
      ]);
      era.println();
      await era.printAndWait('頭痛、頭痛、頭が裂けそうだ');
      await era.printAndWait('考えるほど、忘れるものが増える');
      era.println();
      await era.printAndWait([
        'ついに、',
        callname,
        ' を呼ぶ悲鳴の中で、',
        you.get_colored_name(),
        ' の意識は深淵へ沈む',
      ]);
      era.setToBottom();

      await tachyon.say_as_unknown_and_wait('……起き');
      await tachyon.say_as_unknown_and_wait('………起きて');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は目を覚ました']);
      await era.printAndWait([
        'ある声に起こされた ',
        you.get_colored_name(),
        ' は、眼を開けて見た天井が見知らぬものだと気づく',
      ]);
      era.printButton('「ここはどこだ？」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait('……ここは私の実験室ですわ');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は声のするほうを見る']);
      await era.printAndWait([
        '眼前は栗毛の',
        tachyon.uma_sex_title,
        '。切り揃えた短髪と白衣が、',
        tachyon.sex,
        'の研究者としての身分を語っている。',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は品定めするような眼で ',
        you.get_colored_name(),
        ' を見、なぜか ',
        you.get_colored_name(),
        ' は肌が粟立つ',
      ]);
      era.printButton('「君は誰だ？」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        'その質問は、私がするべきですわ……あなたは何者？ どうして私の実験室に寝ているんですの？',
      );
      await era.printAndWait(['栗毛の', tachyon.uma_sex_title, 'は言う']);
      await era.printAndWait([
        'このとき ',
        you.get_colored_name(),
        ' はやっと、自分がまだ床に寝ていることに気づき、急いで起き上がる',
      ]);
      era.printButton(`「${you.actual_name}だ。トレーナーをしている」`, 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '…………おや？ ではトレーナー君、ここで寝ているのは、何のご用ですの',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、ここに横たわる前に何をしていたか思い出そうとするが、どうしても出てこない',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait(
        '…………思い出せなくても結構ですわ。なぜか私も記憶を失ったようで、さっきまで何をしていたか思い出せません……',
      );
      await tachyon.say_as_unknown_and_wait([
        'まあ、その話は置いておきましょう。とにかく、私は ',
        tachyon.get_colored_name(),
        '。トレーナー君、よろしくですわ',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name()]);
      await era.printAndWait([
        '奇妙な名前だ……まあ、',
        tachyon.uma_sex_title,
        'の名前は大概こういうものだ。他人の名前を差別してもよくない',
      ]);
      await era.printAndWait([
        'だがなぜか、直感が ',
        you.get_colored_name(),
        ' に告げる。眼前のこの',
        tachyon.uma_sex_title,
        'とは距離を置け、と',
      ]);
      era.println();
      era.printButton(
        `「では、今日はここまでに。実験室に入り込んでしまい、大変申し訳ありません。後日、改めてお詫びします、${tachyon.name} さん」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…………いいえ、結構ですわ。所詮、二人が同時に記憶を失うなど……',
      );
      await tachyon.say_and_wait(
        'まあ、これでいいでしょう。あとからわざわざ来る必要もありませんわ、トレーナー君',
      );
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の実験室を出た',
      ]);
      await era.printAndWait([
        '扉を出る前、',
        you.get_colored_name(),
        ' は不意に振り返る',
      ]);
      era.println();
      await tachyon.say_and_wait('ん？ トレーナー君、まだ何か？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' には予感がある。この扉を出たら、たぶん、もうこの',
        tachyon.uma_sex_title,
        'と交わることはない、と',
      ]);
      era.println();
      await you.say_and_wait('なんでもない。気のせいだろう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は実験室の扉を出る。今度は、まったく躊躇しなかった',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 74-reject-1
  '74-reject-1': (() => {
    const title = '歯車が回りだす';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'に会ったときの光景を思い出す',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の走り、',
        tachyon.sex,
        'の儚さ、',
        tachyon.sex,
        'の可能性',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'に両眼を灼かれた ',
        you.get_colored_name(),
        ' は、あのときすでに、',
        tachyon.sex,
        'のためにすべてを捧げることを誓っていたのではないか',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は多くを言わず、直接',
        tachyon.sex,
        'の手から試験管を受け取る',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は以前、自分には狂った眼があると言った',
      ]);
      await era.printAndWait([
        'その狂気の源は、きっと',
        tachyon.sex,
        'の輝きの反射だ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の狂気は',
        tachyon.sex,
        'の夢から生まれ、',
        you.get_colored_name(),
        ' の狂気は',
        tachyon.sex,
        'から生まれた',
      ]);
      await era.printAndWait([
        'なら、',
        tachyon.sex,
        'の夢のために、',
        tachyon.sex,
        'があの光を放ち続けるために、自分を犠牲にして何が悪い？',
      ]);
      era.println();
      await era.printAndWait([
        '今の ',
        you.get_colored_name(),
        ' は、敬虔な信徒のようだ。事実、そうでもある',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の心の神、唯一の光が、今は ',
        you.get_colored_name(),
        ' のために闇へ堕ちている',
      ]);
      await era.printAndWait('そんなことは、絶対に許されない');
      await era.printAndWait('幸い、まだ救いがある');
      era.println();
      await era.printAndWait([
        '自分が消えれば、',
        tachyon.sex,
        'はまた ',
        you.get_colored_name(),
        ' の見たい光を放てる',
      ]);
      era.printButton('「ありがとう……可能性の彼方で、また会おう」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' を信じている。妄信、盲信と言ってもいい',
      ]);
      await era.printAndWait([
        'だが同時に、',
        you.get_colored_name(),
        ' の内側には、一筋の恐れも残っている',
      ]);
      await era.printAndWait([
        'もし自分が死んだあと、',
        tachyon.sex,
        'が自分の思うほど強くなかったら、どうする',
      ]);
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'が、',
        tachyon.sex,
        '自身の思うほど強くなかったら、どうする',
      ]);
      await era.printAndWait([
        'だからこれは、',
        you.get_colored_name(),
        ' が万一のためにかけた枷だ',
      ]);
      era.println();
      await era.printAndWait([
        '自分が',
        tachyon.sex,
        'にとって、それほど大切だとは思わない。だが万一、もし、',
        tachyon.sex,
        'が本当に立ち直れなくなったら……この枷、あるいは、この呪いが',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'がかつて愛した者からの呪いが、',
        tachyon.sex,
        'を前へ押し、',
        tachyon.sex,
        'の理想に届くまで進ませる',
      ]);
      await era.printAndWait([
        'もしすべて自惚れで、自分が',
        tachyon.sex,
        'の心にそれほどの重さを占めていなかったなら、',
      ]);
      await era.printAndWait([
        'それがいちばんだ。',
        tachyon.sex,
        'はただのモルモットに歩みを止められず、堅持し、堅く前へ進むだろう',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はそう願い、試験管を掲げて飲み下し、それから……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は驚きと喜びに目を見開く。',
        tachyon.sex,
        'が顔を上げ、いつもの笑顔を浮かべている',
      ]);
      await era.printAndWait([
        'これでいい。',
        tachyon.sex,
        'はきっと、きっと自分の道を堅持する…………',
      ]);
      era.setToBottom();
      await era.printAndWait('次の瞬間');
      era.setToBottom();
      await era.printAndWait([
        you.get_colored_name(),
        ' は感じる。何かが ',
        you.get_colored_name(),
        ' の唇に触れた',
      ]);
      await era.printAndWait('柔らかく、温かく、瑞々しい、二枚の薔薇');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が、',
        you.get_colored_name(),
        ' の唇に口づけた',
      ]);
      era.println();
      await era.printAndWait([
        'それだけではない。',
        tachyon.sex,
        'の舌が ',
        you.get_colored_name(),
        ' の双唇をこじ開ける',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が ',
        you.get_colored_name(),
        ' の口の中で掻き混ぜ、求める',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が名残惜しげに ',
        you.get_colored_name(),
        ' の歯間、',
        you.get_colored_name(),
        ' の舌先、',
        you.get_colored_name(),
        ' の歯茎を舐める————だが、それらは',
        tachyon.sex,
        'の目標ではない',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の目標は————あまりに突然の展開で、',
        you.get_colored_name(),
        ' が反応できず、呑み込むことすらできなかった、',
        you.get_colored_name(),
        ' の口の中の薬',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はやっと気づき、慌てて止めようとする',
      ]);
      await era.printAndWait('だが、もう遅い');
      await era.printAndWait([
        you.get_colored_name(),
        ' の口の中の薬は、すでに',
        tachyon.sex,
        'に大半を分け取られていた',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、なぜかと問う余裕すらなく、急いで舌を抜き、',
        tachyon.sex,
        'を止めようとする',
      ]);
      await era.printAndWait([
        'だが人間は、力では',
        tachyon.uma_sex_title,
        'に敵わない。これほど実験を重ねた ',
        you.get_colored_name(),
        ' でも、例外ではない',
      ]);
      era.println();
      await era.printAndWait('ついに、一世紀ほども長いキスが終わる');
      await era.printAndWait([
        '離れた二人は息を継ぎ、',
        you.get_colored_name(),
        ' は息を整えながら ',
        tachyon.get_colored_name(),
        ' に吐かせようと駆け寄る……だが、足が止まる',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        'の今の表情、情緒は、',
        you.get_colored_name(),
        ' には理解できない',
      ]);
      await era.printAndWait('喜びなら、なぜ顔を涙が伝うのか');
      await era.printAndWait([
        '悲しみなら、なぜ ',
        you.get_colored_name(),
        ' が見たことのない、完璧と言ってよい笑顔を浮かべているのか',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          'それから、',
          you.get_colored_name(),
          ' の口に残った薬が、このとき不意に味を変える。もともと無色無臭だった薬の、今の味は……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '最後のキスの味が、豚丼だなんて、思いませんでしたわ',
          );
        } else {
          await tachyon.say_and_wait(
            '初キスの味が、豚丼だなんて、思いませんでしたわ',
          );
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は、バレンタインにもらったチョコレートを思い出す',
        ]);
        await era.printAndWait([
          '毎日薬を飲まされる自分と、その反応を楽しむ ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('あの美しい日々が、永遠に続いてほしかった');
        await era.printAndWait(
          'あの紅茶の香りが、いつまでも変わらなければよかった',
        );
        await era.printAndWait('覚悟は固めたはずなのに');
        await era.printAndWait('どうして今、そんな日々を懐かしんでいるのか');
        era.println();
        await tachyon.say_and_wait([callname, '、ごめんなさい。騙しましたわ']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はなおあの艶やかな笑顔を保ち、顔の涙も珠のように落ち続ける',
        ]);
        era.println();
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' は、実は、それほど凄い',
          tachyon.uma_sex_title,
          'ではありませんの',
        ]);
        await tachyon.say_and_wait([
          '可能性のためならすべてを捨てられる',
          tachyon.uma_sex_title,
          'でもありません',
        ]);
        await tachyon.say_and_wait([
          '夢のためなら愛する者を死なせられる',
          tachyon.uma_sex_title,
          'でもありません',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は首を振りながら言う。',
          you.get_colored_name(),
          ' は何か言いたいが、なぜか口が開かない',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……いいえ、そう言うのも違うかもしれません。正しくは、',
          tachyon.sex,
          'はかつて、そういう',
          tachyon.uma_sex_title,
          'でした',
        ]);
        await tachyon.say_and_wait([
          'だが、さっき申し上げた通り、モルモット君に変えられた姫は、愛が何かを知ってしまった。だから……',
          tachyon.sex,
          'には、もうできない',
        ]);
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' も、所詮はただの',
          tachyon.child_sex_title,
          'ですわ',
        ]);
        await tachyon.say_and_wait([
          'だから、',
          tachyon.sex,
          'は恋に落ち、恐れ、自分が好きな人が自分を好きかどうか怖がり……',
        ]);
        await tachyon.say_and_wait(
          '好きな人の眼に映っているのが、実は自分ではないのではないかと恐れる',
        );
        era.println();
        await era.printAndWait([
          '最初から最後まで、「',
          callname,
          '」が見て、魅せられたのは「',
          tachyon.get_colored_name(),
          ' の走り」、「',
          tachyon.get_colored_name(),
          ' の夢」',
        ]);
        await era.printAndWait(['では……', tachyon.get_colored_name(), ' は？']);
        await era.printAndWait([
          'いいえ……',
          tachyon.get_colored_name(),
          '……は、誰？',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……ああ、薬が効いてきましたわ…………もう少し、話したかったのですが',
        );
        era.println();
        await era.printAndWait([
          '眼前の',
          tachyon.teen_sex_title,
          'の顔から、涙はもう落ちない。だが笑顔はなお輝いている',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…………でも、少なくとも振られてはいない。つまり、最低限、拒まれてはいない、',
        );
        await tachyon.say_and_wait(
          'そうですわね？ それで十分……ええ、それで十分、はははっ！',
        );
        era.println();
        await era.printAndWait('ははははは');
        await era.printAndWait([
          tachyon.teen_sex_title,
          'は豪快に笑い、',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の笑う姿に、ある影を思い浮かべる……',
        ]);
        await era.printAndWait([
          '自分が何かを飲んだあと、「',
          tachyon.sex,
          '」もいつも自分を見て豪快に笑っていた。',
        ]);
        await era.printAndWait([
          '「',
          tachyon.sex,
          '」は何という名前だった？ 「',
          tachyon.sex,
          '」は、眼前のこの',
          tachyon.teen_sex_title,
          'なのか？',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ごめんなさいね、',
          callname,
          '、こんなに振り回しておいて、最後はすべて泡になってしまうなんて…',
        ]);
        await tachyon.say_and_wait([
          'ですが、',
          tachyon.get_colored_name(),
          ' の最後の勝手だと思ってくださいまし……次は、こんな面倒な',
          tachyon.phy_sex_title,
          'に、二度と魅せられませんように',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          tachyon.get_colored_name(),
          '」、「',
          callname,
          '」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は必死に、どこか似ていて、印象のあるこれらの名詞を頭へ留めようとする。',
        ]);
        await era.printAndWait(
          'だが脳はドラム式洗濯機に入れられたようで、記憶は汚れのように洗い落とされていく',
        );
        await era.printAndWait([
          '眼前の',
          tachyon.teen_sex_title,
          'の姿すら、朝焼けに消える泡のように儚い',
        ]);
        era.setToBottom();
        await tachyon.say_and_wait(['おやすみなさい、', callname, ' ']);
        era.setToBottom();
        await era.printAndWait([
          'その言葉を聞いたあと、',
          you.get_colored_name(),
          ' の意識は深淵へ沈む',
        ]);
        era.setToBottom();
        era.drawLine();
        await tachyon.say_as_unknown_and_wait('……起き');
        await tachyon.say_as_unknown_and_wait('………起きて');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' は目を覚ました']);
        await era.printAndWait([
          'ある声に起こされた ',
          you.get_colored_name(),
          ' は、眼を開けて見た天井が見知らぬものだと気づく',
        ]);
        era.printButton('「ここはどこだ？」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait('……ここは私の実験室ですわ');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は声のするほうを見る',
        ]);
        await era.printAndWait([
          '眼前は栗毛の',
          tachyon.uma_sex_title,
          '。切り揃えた短髪と白衣が、',
          tachyon.sex,
          'の研究者としての身分を語っている。',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は品定めするような眼で ',
          you.get_colored_name(),
          ' を見、なぜか ',
          you.get_colored_name(),
          ' は肌が粟立つ',
        ]);
        era.printButton('「君は誰だ？」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          'その質問は、私がするべきですわ……あなたは何者？ どうして私の実験室に寝ているんですの？',
        );
        await era.printAndWait(['栗毛の', tachyon.uma_sex_title, 'は言う']);
        await era.printAndWait([
          'このとき ',
          you.get_colored_name(),
          ' はやっと、自分がまだ床に寝ていることに気づき、急いで起き上がる',
        ]);
        era.printButton(`「${you.actual_name}だ。トレーナーをしている」`, 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '…………おや？ ではトレーナー君、ここで寝ているのは、何のご用ですの',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は、ここに横たわる前に何をしていたか思い出そうとするが、どうしても出てこない',
        ]);
        era.println();
        await tachyon.say_as_unknown_and_wait(
          '…………思い出せなくても結構ですわ。なぜか私も記憶を失ったようで、さっきまで何をしていたか思い出せません……',
        );
        await tachyon.say_as_unknown_and_wait([
          'まあ、その話は置いておきましょう。とにかく、私は ',
          tachyon.get_colored_name(),
          '。トレーナー君、よろしくですわ',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name()]);
        await era.printAndWait([
          'その名前を聞いた瞬間、',
          you.get_colored_name(),
          ' の内側は一拍、欠けたような気がする',
        ]);
        await era.printAndWait('聞いたことのない名前のはずなのに');
        await era.printAndWait([
          'この',
          tachyon.uma_sex_title,
          'を知らないはずなのに',
        ]);
        await era.printAndWait('なぜか、馴染みがある');
        era.println();
        era.printButton('「僕たち……どこかで会ったことが？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'おや、近頃はそんな古い口説きは流行りませんわよ、トレーナー君',
        );
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' を見て悪戯な笑顔を浮かべ、',
          you.get_colored_name(),
          ' は慌てて、そういう意味ではないと説明する',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '冗談ですわ……なぜか、私も同じ感じがしますの',
        );
        era.println();
        await era.printAndWait([
          'なぜか、トレーナーとしての直感が ',
          you.get_colored_name(),
          ' に告げる。この',
          tachyon.uma_sex_title,
          'は、きっと ',
          you.get_colored_name(),
          ' を震撼させる走りを見せる、と。',
        ]);
        await era.printAndWait([
          'だが同時に、ある絵が ',
          you.get_colored_name(),
          ' の頭に浮かび続ける。',
          tachyon.get_colored_name(),
          ' というこの',
          tachyon.uma_sex_title,
          'が……',
        ]);
        await era.printAndWait('しきりに弁当をねだる姿？？？');
        await era.printAndWait([
          '気づくと、',
          you.get_colored_name(),
          ' はすでに',
          tachyon.sex,
          'へ契約を申し込んでいた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…………申し上げますが、普通、こんなに突然契約を申し込むものですの？ これは',
          tachyon.uma_sex_title,
          'の一生に関わることですわ。もう少し真剣に扱うべきだと思いませんの？',
        ]);
        era.printButton('「きっと、僕たちは合う気がする」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は言い終え、すべて終わったと思う',
        ]);
        await era.printAndWait(
          '何を考えていたんだ。既視感はあるが、普通はこんなに突然契約を申し込まない！！',
        );
        await era.printAndWait(
          'これで終わりだ。拒まれるだけでなく、さんざん笑われるかもしれない…………',
        );
        era.println();
        await era.printAndWait([
          '案の定、',
          tachyon.get_colored_name(),
          ' という',
          tachyon.uma_sex_title,
          'は聞いて一度呆け、それから豪快に笑い、それから……',
        ]);
        await tachyon.say_and_wait('いいですわ');
        era.println();
        await era.printAndWait('ほら、やはり………………');
        await era.printAndWait('？？？？？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は満面の疑問符を浮かべて相手を見る',
        ]);
        await era.printAndWait([tachyon.sex, 'は目尻に笑った涙を拭い、言う']);
        era.println();
        await tachyon.say_and_wait(
          'なぜか、私も同じ感じがしますわ……その感じの源が何かは、もちろん調べなければなりませんが、',
        );
        await tachyon.say_and_wait(
          'あなたは悪い人ではないと思います。その上、絶対に面白い人になる……',
        );
        await tachyon.say_and_wait(
          'ふふ、ですから、よろしくですわ、トレーナー…………いいえ、モルモット君',
        );
        era.println();
        await era.printAndWait('「モルモット君」');
        await era.printAndWait([
          tachyon.sex,
          'が不意に変えた呼び方が、少し訳が分からず、少し怖い……',
        ]);
        await era.printAndWait([
          'モルモットという呼び方は、普通あまり良い呼び方ではないだろう。それに',
          tachyon.sex,
          'のこの研究狂いの様子…………',
        ]);
        await era.printAndWait([
          'だがそれ以外に、',
          you.get_colored_name(),
          ' は一筋の親しさも感じる',
        ]);
        era.printButton('「よろしく、アグネスタキ…………タキオン」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_actual_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を知った',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 74-reject-2
  '74-reject-2': (() => {
    const title = '시간이 되돌아가다';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, taste, minoru, you) => {
      await era.printAndWait('마치 당연한 수순인 것처럼');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 어째서인지 낯익은 밤색 털의 ',
        tachyon.uma_sex_title,
        '———',
        tachyon.get_colored_name(),
        '와(과) 담당 계약을 맺었다',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 계약을 등록해야겠다고 생각해 ',
        minoru.get_colored_name(),
        '와(과) ',
        taste.get_colored_name(),
        '을(를) 찾아갔다',
      ]);
      await era.printAndWait([
        '…………어째서 ',
        minoru.couple_title,
        '은(는) 저토록 슬픈 눈으로 자신을 바라보는 걸까',
      ]);
      await minoru.say_and_wait('알겠어요. 또 그 아이의 약 때문이겠죠……');
      await era.printAndWait('무슨 뜻이지? 그 아이라는 건 누구를 말하는 거야?');
      await taste.say_and_wait([
        '안타깝게 됐군요! ',
        you.actual_name,
        ' 트레이너라면 곧 기억을 되찾을 거라고 믿어요',
      ]);
      await era.printAndWait([
        '이건 또 무슨 뜻이지……',
        minoru.couple_title,
        '은(는) ',
        you.get_colored_name(),
        '이(가) 기억을 잃었다는 사실을 알고 있는 건가? 설마 ',
        you.get_colored_name(),
        '이(가) 기억상실이나 그와 비슷한 사고를 겪는 일이 흔하다는 건가?',
      ]);
      era.println();
      await era.printAndWait('도무지 영문을 모르겠어…… 뭐, 일단 그런 걸로 해 두자');
      await era.printAndWait([
        '어쨌든 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '의 육성이 시작된다!',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 74-reject-3
  '74-reject-3': (() => {
    const title = '멈춰 버린 시계';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        '그럼…… 우선 실험 파트너로서 호흡부터 맞춰 보도록 하지, ',
        callname,
        ', 내 달리기를 잘 지켜보게나. 후후.',
      ]);
      era.println();
      await era.printAndWait('역시…… 무언가 이상하다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 달리기를, ',
        tachyon.sex,
        '이(가) 달리는 모습을 지켜보던 중 깨달았다.',
      ]);
      await era.printAndWait('빠르다. 눈을 뗄 수 없는 달리기다.');
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '에게는 그것을 생각할 여유가 없다.',
      ]);
      await era.printAndWait(
        '그래, 빠르고 눈부시다. 하지만 그게 전부는 아닌 것 같다.',
      );
      await era.printAndWait('어디선가 비슷한 달리기를 본 적이 있는 듯하다.');
      await era.printAndWait([
        '수면에 비친 빛처럼 ',
        you.get_colored_name(),
        '의 머릿속 깊은 곳을 계속 간질이다가 ',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 수면을 향해 헤엄쳐 나가려는 순간 흔적도 없이 사라진다.',
      ]);
      era.println();
      await you.say_and_wait('이상해……', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 머리를 긁적이며 고민하던 그때………',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('훈련장에서 갑자기 상황이 달라졌다.');
      await era.printAndWait([
        '달리는 모습을 보여 주기만 하겠다던 ',
        tachyon.get_colored_name(),
        '은(는) 점점 더 속도를 높이며 달렸다.',
      ]);
      await era.printAndWait('아까까지는…… 준비운동이었을 뿐인가?');
      await era.printAndWait([
        '평범한 체육복 차림의 ',
        tachyon.get_colored_name(),
        '은(는) 훈련장을 가볍게 내달린다.',
      ]);
      await era.printAndWait('빨라진다. 점점 더 빨라진다.');
      await era.printAndWait([
        '어째서인지 ',
        you.get_colored_name(),
        '의 가슴에 조급함이 차오른다.',
      ]);
      await era.printAndWait('초조함과 절박함.');
      era.println();
      await era.printAndWait([
        '이렇게 빠르게 달려도 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        '의 다리는 괜찮을까?',
      ]);
      await era.printAndWait('……? 어째서 문제가 있겠는가?');
      await era.printAndWait(['왜냐하면 ', tachyon.sex, '의 다리는……']);
      await era.printAndWait([tachyon.sex, '의 다리는 그렇게도 약한데.']);
      await era.printAndWait([
        '어째서 자신은 ',
        tachyon.sex,
        '의 다리가 약하다는 사실을 알고 있는 걸까?',
      ]);
      era.println();
      await era.printAndWait('모르겠다. 하지만 알고 싶다.');
      await era.printAndWait([
        '진실을 알고 싶다는 절박함이 ',
        you.get_colored_name(),
        '을(를) 끊임없이 생각하게 만든다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 사고 속도에 맞추기라도 하듯 ',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), '도 계속 가속한다.']);
      await era.printAndWait([
        '그리고……',
        you.get_colored_name(),
        '의 인식 저편에서 ',
      ]);
      await era.printAndWait('머릿속 깊은 곳에 감춰진 가장 중요한 것.');
      await era.printAndWait([tachyon.uma_sex_title, '의 한계 속도.']);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 알고 있는 ',
        tachyon.uma_sex_title,
        '의 한계.',
      ]);
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        '의 한계 속도.',
      ]);
      era.println();
      await era.printAndWait([
        '눈앞의 ',
        tachyon.get_colored_name(),
        '와(과) 머릿속에서 붙잡을 수 없던 빛이 점차 하나로 겹쳐진다.',
      ]);
      await era.printAndWait([
        '바로 그때 ',
        you.get_colored_name(),
        '은(는) 마지막으로 다시 한번 수면을 향해 손을 뻗었다.',
      ]);
      await era.printAndWait('————————닿았다.');
      await era.printAndWait('————————기억났다.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_actual_name(),
        '의 담당 트레이너.',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('처음 만났을 때, 레이스에서의 일, 그리고……');
      era.println();
      await era.printAndWait('그리고……?');
      await era.printAndWait('모르겠다.');
      await era.printAndWait('잊어버렸다.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 자신이 담당하는 ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        you.get_colored_actual_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 모르모트 군.',
      ]);
      await era.printAndWait('여기까지는 틀림없다.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 레이스 하나하나에 관한 일.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 달리는 모습은 사소한 부분까지도 생생히 기억하고 있다.',
      ]);
      await era.printAndWait('하지만……');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이(가) 무엇을 좋아하는지.']);
      await era.printAndWait([tachyon.get_colored_name(), '의 생활 습관.']);
      await era.printAndWait([tachyon.get_colored_name(), '의 취미.']);
      await era.printAndWait([tachyon.get_colored_name(), '의 평소 옷차림.']);
      await era.printAndWait(
        '어째서인지 기억에 남아 있는, 아마 레이스 관리와 관계된 식성 말고는 ',
      );
      await era.printAndWait('다른 무엇도 접해 본 적이 없는 것만 같다.');
      era.println();
      await era.printAndWait('부자연스럽다.');
      await era.printAndWait('부자연스럽다고밖에 느낄 수 없다.');
      await era.printAndWait(
        '그렇게 오래 알고 지내고 그렇게 많은 시간을 함께했는데도.',
      );
      await era.printAndWait([
        tachyon.sex,
        '의 레이스와 달리기에 대해서는 이토록 막힘없이 말할 수 있는데도.',
      ]);
      await era.printAndWait([
        '그런데도 ',
        tachyon.get_colored_name(),
        '라는 ',
        tachyon.uma_sex_title,
        '에 대해서는 아무것도 모르는 것만 같다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['후우…… 그러면 모르모트 군, 어땠나?']);
      era.printButton('「정말 잘 달렸어!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무의식중에, 기억 속에서 수없이 되풀이했을 대답을 입에 담았다.',
      ]);
      await era.printAndWait('어딘가 이상하다는 기분이 든다.');
      await era.printAndWait('무슨 일이 일어난 건지 모르겠다.');
      await era.printAndWait('하지만……');
      era.println();
      await era.printAndWait('그 일들을 떠올린 순간 ');
      await era.printAndWait('가슴 깊은 곳에서 분명 누군가의 한마디가 들린 듯했다.');
      era.println();
      era.printButton(`「이번에야말로 ${tachyon.sex}의 마음을 배신하지 마라」`, 1);
      await era.input();
      await era.printAndWait('무슨 의미일까…… 곰곰이 생각해 보자.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 89
  89: (() => {
    const title = 'Now or Forever';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} scarlet ダイワスカーレット
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} shakur エアシャカール
     * @param {CharaTalk} pocket ジャングルポケット
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} t_call_s アグネスタキオンがエアシャカールを呼ぶ名
     * @param {PrintedSpan} t_call_p アグネスタキオンがジャングルポケットを呼ぶ名
     */
    const f = async (
      tachyon,
      scarlet,
      digital,
      coffee,
      shakur,
      pocket,
      you,
      callname,
      t_call_c,
      t_call_s,
      t_call_p,
    ) => {
      await tachyon.say_and_wait([callname, '～～']);
      await tachyon.say_and_wait([callname, '～～～？']);
      await tachyon.say_and_wait([callname, '！！']);
      await tachyon.say_and_wait([
        callname,
        '…………ああ、',
        callname,
        ' は今日、いないのでしたわ',
      ]);
      await tachyon.say_and_wait([
        'くっ……だがこの薬、新鮮なうちに効能を試さないとだめですわ。仕方ありません、',
        t_call_c,
        '～～',
      ]);
      await tachyon.say_and_wait([
        '…………えっ、',
        t_call_c,
        ' もいないですの！？',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は実験室で、とぼけたように言う',
      ]);
      await tachyon.print_and_wait([
        '残念なことに、実験室には',
        tachyon.sex,
        'に突っ込む者はいない',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ' はまあいいとして……',
        t_call_c,
        ' までいないなんて……あるいは ',
        t_call_p,
        '……',
        t_call_s,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'よく考えれば、',
        coffee.get_colored_name(),
        ' だけではない',
      ]);
      await tachyon.print_and_wait([
        pocket.get_colored_name(),
        '、',
        shakur.get_colored_name(),
        '、',
        digital.get_colored_name(),
        '、自分の可愛がる後輩の ',
        scarlet.get_colored_name(),
        ' まで、最近ほとんど見ない',
      ]);
      await tachyon.print_and_wait([
        'その理由……賢い ',
        tachyon.get_colored_name(),
        ' は、',
        tachyon.sex,
        'の世を驚かす知恵と、超自我の客観判断力で、楽に当てられる',
      ]);
      await tachyon.print_and_wait('ええ……');
      era.println();
      await tachyon.say_and_wait([
        '……やはり、私がずっと ',
        callname,
        ' の話ばかりしているからでしょう',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '実は、モルモットと呼ぶ愛人の話だけではない。もっと正確には、愛人との情事。率直に言えば、恩愛の見せびらかしだ',
      );
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.print_and_wait([
          'もし話題が甘い言葉と曖昧な感情の段階に留まっていれば、傍の者、少なくとも ',
          scarlet.get_colored_name(),
          ' と ',
          digital.get_colored_name(),
          ' は喜んで聞いただろう。',
        ]);
        await tachyon.print_and_wait([
          'だが話題はいつも床の間の話へ入る。似た話題を聞いただけで顔を赤らめる',
          tachyon.couple_title,
          'を、責められない',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' すら、我慢できずに尋ねた',
      ]);
      await tachyon.print_and_wait(
        'どうして、一刻も止まらず感情を見せびらかすのか、と',
      );
      era.println();
      await tachyon.say_and_wait('……でも、抑えられないんですもの');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は無人の空間で呟く',
      ]);
      era.println();
      await tachyon.print_and_wait('愛する人との口づけの喜悦');
      await tachyon.print_and_wait('宿命の人との抱擁の熱情');
      await tachyon.print_and_wait('良縁の人との纏綿の温もり');
      await tachyon.print_and_wait('守り合う人への名残の愛情');
      era.println();
      await tachyon.print_and_wait(
        'これらの感情、これらの言葉を、誰かに語らなければ',
      );
      await tachyon.print_and_wait(
        'この膨大な熱で、内から外まで焼き尽くされてしまう',
      );
      era.println();
      await tachyon.print_and_wait('好き');
      await tachyon.print_and_wait('可愛い');
      await tachyon.print_and_wait('格好いい');
      await tachyon.print_and_wait('魅惑的');
      await tachyon.print_and_wait('美しい');
      await tachyon.print_and_wait('洒落ている');
      await tachyon.print_and_wait('色っぽい');
      await tachyon.print_and_wait('魔性');
      era.println();
      await tachyon.print_and_wait([
        'どんな形容詞も、',
        you.sex,
        'に当てはめれば過不足ない',
      ]);
      await tachyon.print_and_wait([
        '理性的な ',
        tachyon.get_colored_name(),
        ' にとって、恋に溺れるのは愚かなことだ',
      ]);
      await tachyon.print_and_wait(
        '事実、内側にはずっと、こんな愚かな姿の自分を嗤う声がある',
      );
      await tachyon.print_and_wait('だが……');
      era.println();
      await tachyon.print_and_wait(
        '理性とは、この感情を捨てることだと言うなら',
      );
      await tachyon.print_and_wait([
        '客観とは、',
        you.sex,
        'への愛情を下げることだと言うなら',
      ]);
      era.println();
      await tachyon.print_and_wait('なら、自分は理性を捨てる');
      await tachyon.print_and_wait('情欲の炎の中で踊る道化になる');
      era.println();
      await tachyon.say_and_wait('ああ……私、きっと狂っていますわ');
      era.println();
      await tachyon.print_and_wait('間違いない');
      await tachyon.print_and_wait('こんな自分は、きっと狂っている');
      await tachyon.print_and_wait(
        '以前の自分は言うまでもなく、一般の社会の恋人たちに比べても、自分の愛は狂気の域に達している',
      );
      await tachyon.print_and_wait(
        'だが、狂っているかどうかなど、とうに定まっていたではありませんか',
      );
      era.println();
      await tachyon.print_and_wait([
        '全世界が知っている。',
        tachyon.get_colored_name(),
        ' は狂った',
        tachyon.uma_sex_title,
        'だ',
      ]);
      await tachyon.print_and_wait([
        'だが ',
        tachyon.get_colored_name(),
        ' は全世界など気にしない',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        'は知っている。',
        tachyon.get_colored_name(),
        ' がそういう',
        tachyon.uma_sex_title,
        'だと',
      ]);
      await tachyon.print_and_wait([
        'そして ',
        tachyon.get_colored_name(),
        ' が気にするのは',
        you.sex,
        'だけだ',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' が恐れるのは一事だけ。自分が',
        you.sex,
        'に嫌われること',
      ]);
      await tachyon.print_and_wait(['自分の行いは', you.sex, 'に釣り合うか？']);
      await tachyon.print_and_wait(['自分の愛情を', you.sex, 'は好むか？']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、',
        you.sex,
        'と支え合い、一緒に歩いていける人か',
      ]);
      era.println();
      await tachyon.print_and_wait('ああ、所詮はそういうことですわ');
      era.println();
      await tachyon.print_and_wait('燃える愛は眩しく、同時に儚い');
      await tachyon.print_and_wait('そういう愛は、続かない');
      await tachyon.print_and_wait('今の自分は、火光に囚われた飛蛾にすぎない');
      era.println();
      await tachyon.print_and_wait('欲しい');
      await tachyon.print_and_wait('欲しい');
      await tachyon.print_and_wait('恒久の愛が欲しい、永遠の愛が欲しい');
      await tachyon.print_and_wait(
        'ダイヤモンドのように、永遠で輝く愛が欲しい',
      );
      await tachyon.print_and_wait([
        you.sex,
        'の傍に、当然のようにいる愛が欲しい',
      ]);
      era.println();
      await tachyon.print_and_wait('だが、こんな自分でいいのか');
      await tachyon.print_and_wait('一生を託せる相手なのか？');
      await tachyon.print_and_wait([
        you.sex,
        'は約束してくれるか、こんな自分を永遠に愛すると',
      ]);
      await tachyon.print_and_wait([
        '自分は、こんな',
        you.sex,
        'を永遠に愛せますか',
      ]);
      era.println();
      tachyon.say('私は……');
      era.printButton('永遠を選ぶ（関係を進める）', 1, {
        buttonType: '',
        color: tachyon.color,
      });
      era.printButton('燃え続ける（まだ進めない）', 2, {
        buttonType: '',
        color: tachyon.color,
      });
      const ret = await era.input();
      if (ret === 1) {
        await tachyon.print_and_wait([you.sex, 'と並ぶ']);
        await tachyon.print_and_wait([you.sex, 'と手を取る']);
        await tachyon.print_and_wait([you.sex, 'と家庭を築く']);
        await tachyon.print_and_wait([you.sex, 'と命を産む']);
        era.println();
        await tachyon.print_and_wait('欲しい……安定した、穏やかな愛');
        await tachyon.print_and_wait('答えが簡単すぎて、自分でも驚く');
        era.println();
        await tachyon.print_and_wait([
          '仕事を終えて帰り、家の前で待っている',
          you.sex,
          'を見る',
        ]);
        await tachyon.print_and_wait([
          '自分が早く帰れた日は、料理を用意して',
          you.sex,
          'の帰りを待つ',
        ]);
        await tachyon.print_and_wait([
          '料理は得意ではないが、',
          you.sex,
          'のためなら、',
          tachyon.get_colored_name(),
          ' はかつて研究に捧げる、と誓った両手を、炒め物と炊事に使う',
        ]);
        await tachyon.print_and_wait('休日は二人で出かける。どこでもいい');
        await tachyon.print_and_wait(
          '公園、家具屋、あるいは実験用具店、化学薬品店',
        );
        await tachyon.print_and_wait([
          you.sex,
          'と、ソファの置き場所のような些細なことで喧嘩する',
        ]);
        await tachyon.print_and_wait(
          '夜まで誤りを認めない拗ねた二人が、最後はどちらからともなく温かい抱擁で仲直りする',
        );
        await tachyon.print_and_wait([
          '新居ができた当日は、きっと疲れるだろう。',
          tachyon.uma_sex_title,
          'の体力でも持たないかもしれない',
        ]);
        await tachyon.print_and_wait([
          'せっかくできた新しい家でゆっくり睦みたいのに、',
          you.sex,
          'の腕の中へ倒れ、そのまま眠ってしまう',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await tachyon.print_and_wait(
            '妊娠した日、彼は絶対に大喜びするでしょう',
          );
          await tachyon.print_and_wait(
            'だが突然は言えない。あのとき放つ強光で、隣人が騒音だと怒るでしょうから',
          );
          await tachyon.print_and_wait('いいタイミングを探す。昼、朝食のとき');
          await tachyon.print_and_wait(
            '何事もない口調で「あなた、お父さんになりますわよ♡」と言う',
          );
          await tachyon.print_and_wait(
            'そのときの彼は、どんな顔をするでしょう？',
          );
          await tachyon.print_and_wait(
            '子が生まれたら、子を連れて私たちの写真を見たい',
          );
          await tachyon.print_and_wait(
            '当時の私が、どう元実験体に魅せられたかを',
          );

          await tachyon.print_and_wait(
            'たぶん、子はお父さんがかわいそうだと思うでしょう。お母さんにこんなにいじめられて',
          );
          await tachyon.print_and_wait(
            'ただし床の上でいじめられているのは、お母さんですが♡',
          );
          await tachyon.print_and_wait(
            '子が大きくなって家庭を持ったあと、布団の中で黙って泣く彼を慰めたい',
          );
          await tachyon.print_and_wait(
            '……逆かもしれませんわね。もしかすると、私は意外と子を溺愛する母親かもしれません',
          );
          era.println();
        }
        await tachyon.print_and_wait([
          '面白いから',
          you.sex,
          'と一緒にいるのではない',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'と一緒にいる毎日が、これほど面白いのだ',
        ]);
        await tachyon.print_and_wait('こんな退屈で平坦な日常でも');
        await tachyon.print_and_wait([
          '傍にいるのが',
          you.sex,
          'だと考えるだけで、期待で胸がいっぱいになる',
        ]);
        era.println();
        await you.say_and_wait('タキオン！ 呼んだって聞いたけど、何か用か？');
        era.println();
        await tachyon.print_and_wait(
          '誰か親切な人が知らせたのか？ 心が通じたのか？',
        );
        await tachyon.print_and_wait('どちらでも構わない');
        await tachyon.print_and_wait('よく考えなさい。どう口に出せばいい？');
        await tachyon.print_and_wait('ええ……これにしましょう');
        era.println();
        await tachyon.say_and_wait([
          callname,
          '、思うんですけれど、私たち……次の段階へ進んでもよろしいですかしら？',
        ]);
        await tachyon.print_and_wait(
          '口にした瞬間、教会の鐘が聞こえた気がする',
        );
      } else {
        await tachyon.print_and_wait('永遠……ですの？');
        era.println();
        await tachyon.print_and_wait('分からない');
        await tachyon.print_and_wait('考えられない');
        era.println();
        await tachyon.print_and_wait('自分は、そういう傍にいる者になれるのか');
        await tachyon.print_and_wait([you.sex, 'の一生に寄り添えるのか']);
        era.println();
        await tachyon.print_and_wait([
          '所詮、',
          tachyon.get_colored_name(),
          ' というこの',
          tachyon.phy_sex_title,
          'に、そういう傍にいる者、そういう伴侶、そういう……',
        ]);
        await tachyon.print_and_wait('恋人になれるのか？');
        era.println();
        await tachyon.print_and_wait('料理のできない自分');
        await tachyon.print_and_wait('自分に没頭する自分');
        await tachyon.print_and_wait('性格の怠惰な自分');
        await tachyon.print_and_wait('忍耐のない自分');
        era.println();
        await tachyon.print_and_wait('今なら、まだ受け入れられるでしょう');
        await tachyon.print_and_wait('では未来は');
        await tachyon.print_and_wait('十年後は？');
        await tachyon.print_and_wait('二十年後は？');
        await tachyon.print_and_wait('六十年、七十年後は？');
        era.println();
        await tachyon.print_and_wait('この感情は、本当に永遠へ続きますか？');
        era.println();
        await tachyon.print_and_wait('分からない');
        await tachyon.print_and_wait('考えられない');
        era.println();
        await you.say_and_wait('タキオン！ 呼んだって聞いたけど、何か用か？');
        era.println();
        await tachyon.print_and_wait(
          '誰か余計な人が知らせたのか。たまたま心が通じたのか',
        );
        await tachyon.print_and_wait('……どちらでも構わない');
        await tachyon.print_and_wait('抑えなさい、冷やしなさい、封じなさい');
        await tachyon.print_and_wait('自分の滑稽な考えを封じる');
        era.println();
        await tachyon.say_and_wait('……なんでもありませんわ');
        era.println();
        await tachyon.print_and_wait(
          '愛情という燃え盛る炎を、自分の心配と不安を燃料に、燃やし続ける',
        );
        await tachyon.print_and_wait(
          'それが、優柔不断な自分が負うべき永遠の罰なのでしょう',
        );
        era.drawLine();
        await tachyon.print_and_wait([
          you.get_colored_name(),
          ' は首を振り、内側の奇妙な考えを散らし、躊躇なく扉の外へ踏み出す',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 99
  99: (() => {
    const title = 'Tachyon';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        ', 내 이름을 한 번 불러주겠나?',
      ]);
      era.println();

      await era.printAndWait(['이름?']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 궁금하다는 듯 ',
        tachyon.get_colored_name(),
        '을 바라보았다.',
      ]);
      await era.printAndWait([
        '오늘 트레이닝실에 들어오자마자 ',
        tachyon.get_colored_name(),
        '에게 억지로 소파에 눕혀졌다.',
      ]);
      await era.printAndWait([
        '이어서 ',
        tachyon.sex,
        '는 훈련 계획을 쓰는 작은 화이트보드를 꺼내 들고는, 마치 선생님이 수업을 시작하려는 듯한 모습이었다. 이건 또 무슨 놀이인지 알 수가 없었다.',
      ]);
      era.println();

      await tachyon.say_and_wait(['자, 어서 어서, 불러보게.']);

      era.printButton('「아그네스 타키온」', 1);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ', 자신에게 있어 유일무이한 담당 우마무스메의 이름.',
      ]);
      await era.printAndWait([
        '이름을 듣자 ',
        tachyon.get_colored_name(),
        '은 눈을 가늘게 뜨며, 무척 만족스러운 듯한 표정을 지었다.',
      ]);
      era.println();

      await tachyon.say_and_wait(['음…… 좋군.']);
      await tachyon.say_and_wait([
        '그럼…… 타키온이 무슨 뜻인지 알고 있나?',
      ]);
      era.println();

      await era.printAndWait(['타키온?']);

      era.printButton('「모르겠는데……」', 1);
      era.printButton('「그거…… 초광속 입자 아니야?」', 2);

      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '으음…… 내 모르모트라면 적어도 그 정도는 가슴속에 새겨두어야 하지 않겠나.',
        );
      } else {
        await tachyon.say_and_wait('정답이네. 합격점을 주도록 하지.');
      }

      await tachyon.say_and_wait([
        '타키온이란, 빛보다 빠른 속도로 허수의 시간 속을 항행하는 입자라네.',
      ]);
      await tachyon.say_and_wait([
        '특수 상대성 이론에서 타키온은 공간꼴의 4차원 운동량과 허수의 상대 시간을 가지며, 일반적인 물질과의 상호작용이 뚜렷하지 않아 현재로서는 관측할 수 없는 가상 입자라네. 전자기 복사 메커니즘에 근거하여 가정해 본다면……',
      ]);

      era.printButton('「잠, 잠깐만!」', 1);
      await era.input();

      await tachyon.say_and_wait([
        '정숙하게, ',
        callname,
        '. 내 말을 끝까지 듣게나.',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '화이트보드에 적히는 온갖 공식들에 머리가 어질어질해진 ',
        you.get_colored_name(),
        '은(는) 서둘러 설명을 멈추고 소화할 시간을 벌려 했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 화이트보드를 툭툭 치며, 아랑곳하지 않고 설명을 이어갔다.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '그리고…… 시간성과 공간성의 차이 때문에 타키온의 존재에는 두 가지 넘을 수 없는 장벽이 존재한다네.',
      ]);
      era.println();

      await era.printAndWait([
        '그 말을 내뱉고 ',
        tachyon.get_colored_name(),
        '은 말을 멈추었다.',
      ]);
      await era.printAndWait([
        '착한 학생이라면 선생님이 대놓고 뜸을 들일 때 적절한 질문을 던져야 하는 법이다.',
      ]);
      await era.printAndWait([
        '어느샌가 ',
        you.get_colored_name(),
        '도 이 상황에 몰입하기 시작했다.',
      ]);

      era.printButton('「장벽?」', 1);
      await era.input();

      await tachyon.say_and_wait([
        '그렇다네…… 만약 타키온이 실제로 존재한다면 마주하게 될 제약이지.',
      ]);
      await tachyon.say_and_wait([
        '간단히 말하자면…… 『광속 이하의 물질과는 접촉할 수 없다』는 것과, 『광속 이하로 속도를 줄일 수 없다』는 것이야. 우선 첫 번째부터 설명하자면, 접촉할 수 없는 이유는 인과율 위배에 따른……',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), '의 설명이 다시 시작되었다.']);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 머릿속에는 ',
        tachyon.sex,
        '의 지식으로 뇌를 강간당하는 듯한 난해한 해석들이 더 이상 들어오지 않았다.',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 함께 지내온 탓인지, 타키온이 초광속 입자를 뜻한다는 것을 알면서도 자꾸만 곁에 있는 ',
        tachyon.get_colored_name(),
        '을 떠올리게 되었다.',
      ]);
      await era.printAndWait([
        '점차 ',
        you.get_colored_name(),
        '의 머릿속에 어떤 장면 하나가 떠올랐다.',
      ]);
      era.println();

      await era.printAndWait([
        '광속 너머의 어느 세계, 광속 이하의 물질은 도달할 수 없는 공간 속.',
      ]);
      await era.printAndWait([
        '시간조차 너무나 느리다고 무시당하는 그 세계 속에서, 유일하게 존재하는 ',
        { color: tachyon.color, content: '타키온' },
        '.',
      ]);
      await era.printAndWait([
        '광속 이하의 세계와는 상호작용할 수 없고, 오직 초광속의 형태로만 존재할 수 있는 ',
        { color: tachyon.color, content: '타키온' },
        '.',
      ]);
      await era.printAndWait(['절대적인 속도, 그리고 절대적인 고독.']);
      era.println();

      await tachyon.say_and_wait(['…………']);
      era.println();

      await era.printAndWait([
        '어느샌가 ',
        you.get_colored_name(),
        '은(는) 배경음악처럼 깔리던 설명 소리가 멈췄다는 것을 깨달았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 정신을 차려보니, ',
        tachyon.get_colored_name(),
        '이 자신을 뚫어지게 쳐다보고 있었다. 언제부터 그러고 있었는지 알 수 없었다.',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '? 무슨 생각을 하고 있나?']);

      era.printButton('「아무것도 아니야……」', 1);
      era.printButton('「그냥, 그렇게 생각하니 타키온이 너무 외로울 것 같아서……」', 2);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 질문에 ',
        you.get_colored_name(),
        '은(는) 자신의 생각을 솔직하게 털어놓았다.',
      ]);
      await era.printAndWait([
        '어떤 의미에서 예전의 ',
        tachyon.get_colored_name(),
        '도 조금은 그런 면이 있었다.',
      ]);
      await era.printAndWait([
        '지나치게 뛰어난 재능 탓에, 주변 사람들은 ',
        tachyon.sex,
        '와 같은 세계를 바라볼 수 없었다.',
      ]);
      await era.printAndWait([
        '세상으로부터 고립되어, 눈앞의 목표만을 쫓던 ',
        { color: tachyon.color, content: '타키온' },
        '.',
      ]);
      await era.printAndWait([
        '하지만…… 그런 ',
        tachyon.get_colored_name(),
        '조차 결국 타인과 접촉하고, 영향을 주고받을 수 있었다.',
      ]);
      await era.printAndWait([
        '만약 물리적인 공간마저 격절되어 버린다면, ',
        { color: tachyon.color, content: '타키온' },
        '은……',
      ]);
      await era.printAndWait([
        '아니, 지금 이야기하는 건 초광속 입자이지 ',
        tachyon.get_colored_name(),
        '이 아니지 않은가.',
      ]);
      await era.printAndWait([
        '이렇게 엉뚱한 소리를 하면 ',
        tachyon.get_colored_name(),
        '이 화를 내겠지?',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이 장난스럽게 나무라며 생각을 정정해 줄 것을 기다렸다.',
      ]);
      await era.printAndWait(['하지만……']);
      era.println();

      await tachyon.say_and_wait(['호오? ', callname, ', 자네는 그렇게 생각하는가?']);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 평온하게 말하며 화이트보드를 밀어두고, 소파에 앉아 있는 ',
        you.get_colored_name(),
        '에게 다가왔다.',
      ]);
      await era.printAndWait([
        '탁한 붉은 눈동자가 ',
        you.get_colored_name(),
        '을(를) 응시했다. 여느 때처럼 ',
        tachyon.sex,
        '이 대체 무슨 생각을 하는지 읽어낼 수 없었다.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '하지만, 만약 그것이 한계를 넘어서기 위한 대가라면 어떡하겠나? 만약…… 가정이긴 하지만, 현재의 모든 것을 잃고 절대적인 고독이 되는 것이 한계를 넘기 위해 지불해야 할 대가라면…… 자네는 그것을 받아들일 수 있겠나, ',
        callname,
        '?',
      ]);
      era.println();

      await era.printAndWait(['기묘했다.']);
      await era.printAndWait(['참으로 이상했다.']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과의 거리는 가까워지지도, 멀어지지도 않았다.',
      ]);
      await era.printAndWait([
        '하지만 눈앞의 ',
        tachyon.get_colored_name(),
        '은 갑자기 어떤 착각을 불러일으켰다.',
      ]);
      await era.printAndWait(['가까우면서도 먼 듯한 느낌.']);
      await era.printAndWait(['손을 뻗으면 닿을 것 같으면서도.']);
      await era.printAndWait(['다음 순간이면 속세를 떠나 사라져 버릴 것만 같은.']);
      await era.printAndWait([
        '하지만 그런 생각보다 지금 중요한 것은 대답을 하는 것이었다.',
      ]);
      await era.printAndWait(['신중하게 생각해야 한다……']);
      era.println();

      await era.printAndWait([you.get_colored_name(), '은(는) 생각했다……']);

      era.printButton('「괜찮아」(관계 진전)', 1);
      era.printButton('「안 돼」(관계 유지)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(['만약 한계를 넘는 대가가 정녕 그러하다면……']);
        await era.printAndWait([
          '그렇다면 그 실험을 지원하는 사람으로서 해야 할 일은 ',
          tachyon.sex,
          '의 결정을 긍정하고, 목표를 향해 나아가는 ',
          tachyon.sex,
          '를 배웅하는 것뿐이리라.',
        ]);
        await era.printAndWait([
          '그것이 「모르모트」로서 자신의 책임이었다.',
        ]);
        await era.printAndWait([
          '그러므로 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 방식을 존중하기로 했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그렇게 ',
          tachyon.get_colored_name(),
          '에게 설명했다.',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '…………그런가. 그것이 자네의 선택인가?',
        ]);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 여전히 ',
          tachyon.sex,
          '속마음을 드러내지 않았고, 말투 또한 평소처럼 덤덤했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 혹시 자신이 말실수를 한 것은 아닐까 걱정되기 시작했다.',
        ]);
        await era.printAndWait(['하지만 선택은 이미 내려졌다.']);
        era.println();

        era.printButton('「타키온의 모르모트라면, 응당 그래야 하니까……」', 1);
        era.printButton('「……하지만, 반드시 타키온을 따라잡고 말겠어!」', 2);
        await era.input();

        await era.printAndWait([
          '자신은 ',
          tachyon.get_colored_name(),
          '의 성장을 가로막아서는 안 된다.',
        ]);
        await era.printAndWait([
          '오히려 그 반대로, 자신이 노력해서 ',
          tachyon.get_colored_name(),
          '을 따라잡아야만 한다.',
        ]);
        await era.printAndWait([
          '광속을 넘는 것이 영원한 고독을 의미한다면.',
        ]);
        await era.printAndWait([
          '자신이 해야 할 일은 ',
          tachyon.sex,
          '가 더 이상 외롭지 않게 만드는 것이다.',
        ]);
        await era.printAndWait([
          '설령 자신 한 사람뿐이라 할지라도, 온 힘을 다해 ',
          tachyon.sex,
          '의 곁을 지키겠노라고.',
        ]);
        await era.printAndWait([
          '이것이 ',
          tachyon.get_colored_name(),
          '의 「모르모트」이자…… ',
          tachyon.get_colored_name(),
          '의 연인으로서 내린 진심 어린 소망이었다.',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait([
          '그러고 보니, 아직 말하지 않았군.',
        ]);
        await tachyon.say_and_wait(['나의 선택을———']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 표정은 공포스러울 정도로 평온했다.',
        ]);
        await era.printAndWait(['마치 폭풍전야의 바다처럼 고요했다.']);
        era.println();

        await tachyon.say_and_wait([
          '나는 그 선을 넘어, 광속을 넘고, 한계를 초월할 걸세———',
        ]);
        era.println();

        await era.printAndWait(['아아, 역시 그랬던가.']);
        await era.printAndWait([
          '이것이 바로 ',
          you.get_colored_name(),
          '이(가) 동경해 마지않는 ',
          tachyon.uma_sex_title,
          '이 내놓을 법한 대답이었다.',
        ]);
        await era.printAndWait(['의외라기보다는 오히려 당연한 결과였다.']);
        await era.printAndWait(['하지만…… 가슴 한구석에서 느껴지는 이 묘한 상실감은 무엇일까?']);
        await era.printAndWait([
          '그러나 ',
          tachyon.get_colored_name(),
          '의 말은 아직 끝나지 않았다.',
        ]);
        era.println();

        await tachyon.say_and_wait(['————자네와 함께.']);
        era.println();

        await era.printAndWait(['순간.']);
        await era.printAndWait(['폭풍전야 같던 고요함이 뒤집혔다.']);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 방금 전 자신의 비유가 틀렸음을 깨달았다.',
        ]);
        await era.printAndWait(['폭풍 전의 고요함이 아니라—— 심해였다.']);
        await era.printAndWait([
          '폭풍이 몰아치려는 것이 아니라, 이미 그 심연 속에 깊이 빠져버린 것이었다.',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '둘이서 함께 한계를 넘어——— 타키온이 되는 거라네.',
        ]);
        era.println();

        await era.printAndWait([
          '자신도 모르게 ',
          you.get_colored_name(),
          '은(는) 고개를 끄덕이며 약속했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 빛나는 ',
          tachyon.sex,
          '의 두 눈을 바라보았다.',
        ]);
        await era.printAndWait([
          '마치 심해에 잘못 들어온 작은 물고기가, 심해어에게 잡아먹히기 직전 마지막으로 본 미끼의 빛처럼.',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['그녀는 ', you.sex, '의 눈을 응시했다.']);
        await tachyon.print_and_wait(['그 안에는 알 듯 말 듯한 망설임이 서려 있었다.']);
        await tachyon.print_and_wait(['가슴속에는 절반의 노여움과 절반의 다행스러움이 교차했다.']);
        await tachyon.print_and_wait([
          '어째서 ',
          you.sex,
          '는 이해하지 못하는 걸까?',
        ]);
        await tachyon.print_and_wait([
          '아니, 다행히도 ',
          you.sex,
          '는 여전히 이해하지 못했다.',
        ]);
        era.println();

        await tachyon.print_and_wait([you.sex, '「도」 있는 것이 아니다.']);
        await tachyon.print_and_wait([you.sex, '「만」 있으면 되는 것이지.']);
        await tachyon.print_and_wait(['고독 따위는 두렵지 않다.']);
        await tachyon.print_and_wait([
          '내가 두려운 것은 오직 내 곁에 더 이상 ',
          you.sex,
          '의 모습이 보이지 않는 것뿐.',
        ]);
        await tachyon.print_and_wait(['그러니까……']);
        era.println();

        await tachyon.print_and_wait(['한계의 저편.']);
        await tachyon.print_and_wait([
          '그 누구도 도달할 수 없는, 초광속의 끝.',
        ]);
        await tachyon.print_and_wait(['그리고……']);
        await tachyon.print_and_wait([
          '우리 두 사람 외에는 그 누구도 방해할 수 없는 세계.',
        ]);
        era.println();

        await tachyon.say_and_wait(
          ['설령 초광속의 저편이라 해도, 육체와 정신이 모두 타버려 재가 된다 해도……'],
          true,
        );
        await tachyon.say_and_wait(
          '영원히, 영원토록 내 곁에 있어주게나.',
          true,
        );
        await tachyon.say_and_wait(['나의 사랑스러운 ', callname, '❤️'], true);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '을 고독한 영원 속에 홀로 남겨두어야 한다면, 그것만은 절대로 허락할 수 없었다.',
        ]);
        await era.printAndWait([
          '하지만…… 천칭의 반대편에 놓인 것이 ',
          tachyon.get_colored_name(),
          '의 꿈이라면 어떡해야 할까?',
        ]);
        await era.printAndWait([
          '아니, 그런 영원이야말로 ',
          tachyon.get_colored_name(),
          '이 갈망해오던 결실이 아닌가?',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 분명 모든 것을 알고, 그 토대 위에서 한계를 쫓는다는 목표를 세웠을 터였다.',
        ]);
        await era.printAndWait([
          '그렇다면 ',
          tachyon.sex,
          '의 ',
          callname,
          '로서, ',
          tachyon.sex,
          '의 연인으로서……',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 꿈을 추구하는 것을 지지해야 하지 않겠는가?',
        ]);
        era.println();

        await era.printAndWait(['그리하여……']);

        era.printButton('「거절한다」', 1);
        await era.input();

        await era.printAndWait([
          '모르모트로서의 책임은 다했을지도 모른다. 그렇다면 ',
          tachyon.get_colored_name(),
          '의 연인으로서 다해야 할 책임은 무엇인가?',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '와 이인삼각으로 함께 전진하며 온갖 일을 겪은 끝에, 겨우 결실을 맺은 이 사랑을 간직한 나는……',
        ]);
        await era.printAndWait([
          '그런 결말을 용납할 수 있는가? ',
          tachyon.get_colored_name(),
          '과 영영 이별하게 되는 상황을 받아들일 수 있는가?',
        ]);
        await era.printAndWait(['답은 당연히…… 「아니오」였다.']);

        era.printButton('「설령 이기적이라 해도.」', 1);
        era.printButton('「타키온이 영원히 내 곁에 있어줬으면 좋겠어.」', 2);
        await era.input();

        await era.printAndWait(['상대방이 떠나가는 것이 두렵다.']);
        await era.printAndWait(['단지 그뿐인 이기적인 이유였다.']);
        await era.printAndWait(['이미 지금의 당신은 예전으로 돌아갈 수 없게 되었다.']);
        await era.printAndWait([
          '밤에 잠들기 전, 누군가를 위해 준비하는 도시락이 없는 삶.',
        ]);
        await era.printAndWait([
          '아침에 연구실에 도착했을 때, 실험에 몰두하는 그 뒷모습을 볼 수 없는 삶.',
        ]);
        await era.printAndWait([
          '점심때면 누군가가 사랑스럽고 가련하게 밥을 보채는 모습을 볼 수 없는 삶.',
        ]);
        await era.printAndWait([
          '오후 훈련 때 그 찬란한 달리기 모습을 볼 수 없는 삶.',
        ]);
        await era.printAndWait([
          '지금의 당신은, 이미 예전의 그 지루했던 나날로 되돌아갈 수 없었다.',
        ]);
        await era.printAndWait(['그러니까, 그러니 제발.']);

        era.printButton(
          '「가능하다면…… 타키온과 함께 초광속의 저편에 도달하고 싶어.」',
          1,
        );
        era.printButton('「하지만…… 그럴 방법이 없다면……」', 2);
        await era.input();

        await era.printAndWait(['스스로 그 선을 넘지 못할까 봐 두렵기에.']);
        await era.printAndWait(['그러니 ', tachyon.sex, '의 손을 붙잡고 싶었다.']);
        await era.printAndWait([tachyon.sex, '이 광속 이하의 세계에 머물러 주기를 바랐다.']);
        await era.printAndWait(['오직 나를 위해서 남아달라고.']);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['…………훗, 후후.']);
        era.println();

        await era.printAndWait(['평온한 미소였다.']);
        await era.printAndWait(['의중을 알 수 없는 웃음이었다.']);
        await era.printAndWait(['어딘가 모르게 두려움마저 느껴졌다.']);
        await era.printAndWait([tachyon.sex, '의 대답은, 과연……']);
        era.println();

        await tachyon.say_and_wait(['이것이…… 자네의 대답인가?']);
        await tachyon.say_and_wait([
          '……자네는 역시, 항상 내 예상을 뛰어넘는군……',
        ]);
        era.println();

        await era.printAndWait([tachyon.sex, '는 대체 무슨 생각을 하고 있는 걸까?']);
        await era.printAndWait([
          '지금 이 순간 ',
          tachyon.sex,
          '의 미소는 조소일까, 아니면 비웃음일까. 그것도 아니라면 자신의 기대를 깨뜨린 것에 대한 기쁨의 미소일까.',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '그렇다면…… 나의 사랑스러운 ',
          callname,
          '을 위해서라도.',
        ]);
        await tachyon.say_and_wait([
          '영원히, 영원토록, 이곳에 남아 자네 곁을 지키도록 하지.',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['가슴속에 소용돌이치는 이 감정은 말로 다 표현하기 어렵군.']);
        await tachyon.print_and_wait([
          '하지만 분명한 건, 환희라는 감정이 훨씬 더 우세하다는 것이겠지.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '언제나 내 예상을 뛰어넘는 이가 이번에도 다시금, 좋은 의미로 나의 기대를 충족시켜 주었네.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '라면 분명 타키온의 꿈을 위해서라면 자신은 기꺼이 물러나겠다느니 하는 어리석은 소리를 할 줄 알았는데 말이야.',
        ]);
        await tachyon.print_and_wait(['정말이지……']);
        await tachyon.print_and_wait([
          '그런 가능성을 떠올릴 때마다 ',
          tachyon.get_colored_name(),
          '은 저도 모르게 기운이 빠지곤 했다.',
        ]);
        await tachyon.print_and_wait([
          '어째서 ',
          you.sex,
          '는 항상 모르는 걸까?',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '은 욕심이 아주 많은 ',
          tachyon.uma_sex_title,
          '다.',
        ]);
        await tachyon.print_and_wait([
          '둘 중 하나를 선택하라고? 아니, ',
          tachyon.sex,
          '는 둘 다 가질 것이다.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '가 정말로 그런 소리를 했다면.',
        ]);
        await tachyon.print_and_wait([
          '설령 강압적인 방법을 써서라도, 누군가의 곁에서 ',
          you.sex,
          '를 빼앗아왔을 것이다.',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '는 제멋대로 굴어서라도 ',
          you.sex,
          '를 그 초광속 너머, 단둘만이 지낼 수 있는 세계로 납치했을 것이다.',
        ]);
        await tachyon.print_and_wait(['하지만……']);
        era.println();

        await tachyon.print_and_wait(['만약 이 사람이.']);
        await tachyon.print_and_wait([
          '사랑스러울 정도로 순진한 ',
          callname,
          '이 설마……',
        ]);
        await tachyon.print_and_wait([
          '드물게도 자신의 탐욕을, 욕망을 드러내다니.',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '을 곁에 두고 싶다는 욕망.',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '에게 꿈을 포기하라고 강요하는 욕망.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          you.sex,
          '이 없이는 살아갈 수 없게 된 나 역시 진심으로 그 뜻을 따를 수밖에 없겠지.',
        ]);
        await tachyon.print_and_wait([
          '지배하고 지배받는 관계는 대체 언제부터 뒤바뀐 것일까?',
        ]);
        await tachyon.print_and_wait(['아니, 뒤바뀐 것이 아니야……']);
        await tachyon.print_and_wait(['속박하는 동시에 나 또한 그에게 속박당하고 있는 것이니.']);
        await tachyon.print_and_wait([
          '아아, 이것이야말로 정녕 사랑이라는 감정이겠지.',
        ]);
        await tachyon.print_and_wait([
          callname,
          '은 ',
          tachyon.get_colored_name(),
          '을 사랑하고, ',
          tachyon.get_colored_name(),
          '또한 ',
          callname,
          '을 사랑한다.',
        ]);
        await tachyon.print_and_wait([
          '초광속 이상의 세계 같은 건 없어도 좋다. 한계 너머에 아무것도 없다 해도 상관없다……',
        ]);
        await tachyon.print_and_wait([
          '그저 서로를 깊이 사랑하는 평범한 인간과 평범한 ',
          tachyon.uma_sex_title,
          ', 그것만으로도 충분하니까.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
