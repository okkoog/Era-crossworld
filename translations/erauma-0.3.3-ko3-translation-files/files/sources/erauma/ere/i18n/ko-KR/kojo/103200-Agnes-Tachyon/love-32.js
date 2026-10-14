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
      await tachyon.say_and_wait('……그렇지 않아……');
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
    await tachyon.print_and_wait('긴장, 초조, 불안, 흥분, 희열, 공포, 혼란');
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
    await tachyon.print_and_wait('불안하다.');
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

  // [번역 완료] 74-accept
  '74-accept': (() => {
    const title = '초광속의 공주';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 손에서 약을 건네받았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([tachyon.sex, '가 고개를 들자, 그 눈동자에는 불안함이 서려 있었다.']);
      await era.printAndWait([
        '자신이 약을 마셔버릴까 봐 걱정하는 것일까, 아니면 자신이…… 마시려 하지 않을까 봐 걱정하는 것일까?',
      ]);
      await era.printAndWait([
        '솔직히 말해, ',
        you.get_colored_name(),
        ' 자신조차 앞으로의 행동이 옳을지 확신할 수 없었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '은(는) 보증할 수 있었다. 이어질 모든 행동은 분명 진심에서 우러나온 것임을.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손에 든 약을…… 옆에 있던 폐기용 약품 처리통에 쏟아버렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait('………………아');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 시험관을 비우는 동안, ',
        tachyon.get_colored_name(),
        '은 아무런 소리도 내지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 전부 쏟아내고 마치 한 세기처럼 긴 시간이 흐른 뒤에야, ',
        tachyon.sex,
        '는 그제야 생각났다는 듯이 작은 목소리로 「아」 소리를 내뱉었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……자네, 이것이 무엇을 의미하는지 알고 있나?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 시험관을 거꾸로 들어, 안의 약제가 한 방울도 남지 않고 비워진 것을 확인했다.',
      ]);
      await era.printAndWait([
        '그제야 ',
        tachyon.get_colored_name(),
        '은 겨우 정신을 차린 듯, 엮어두었던 말들을 쏟아내기 시작했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '나의 꿈…… 내가 추구하던 가능성. 자네의 이 선택은, 즉 이런 뜻이 아닌가.',
      );
      await tachyon.say_and_wait([
        '나, ',
        tachyon.get_colored_name(),
        '이 모든 것을 완전히 포기하고, 철저히 단념하여, 평범한…… 다른 사춘기 ',
        tachyon.teen_sex_title,
        '와 아무런 차이가 없는……',
      ]);
      await tachyon.say_and_wait([
        '사랑에 빠진 평범한 ',
        tachyon.child_sex_title,
        '가 되라는 것 아닌가. 자네의 말은, 내가 다른 가능성을 버리고 자네와 함께할 가능성을 선택하라는……',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '는 말을 매우 빠르게 더듬으며 덧붙였다.']);
      await era.printAndWait(
        '마치 지금이라도 어서 마음을 바꾸라고 스스로를 설득하는 듯했고, 이 결정이 얼마나 어리석은 선택인지 알려주려는 듯했다.',
      );
      await era.printAndWait([
        tachyon.sex,
        '를 위해 희생하기를 바라면서도, 한편으로는 나쁜 사람이 되고 싶지 않아 이토록 이기적이고 뻔뻔한 권고를 늘어놓는 것이었다.',
      ]);
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '와 오랫동안 함께해온 ',
        you.get_colored_name(),
        '의 말속에 숨겨진 진심을 꿰뚫어 볼 수 있었다.',
      ]);
      await era.printAndWait(
        '말을 더듬는 이유는 두려움 때문이었다. 이 모든 것이 자신의 오해일까 봐.',
      );
      await era.printAndWait(
        '말의 속도가 빠른 이유는 상대가 번복하는 것을 듣고 싶지 않기 때문이었다. 마치 어린아이가 상대의 승낙을 유도하기 위해 일부러 말을 흐리는 것과 같았다.',
      );
      await era.printAndWait(
        '계약서에 서명하기 직전, 당사자가 마음을 바꿀까 봐 계약 내용을 반복해서 읊어대는 보험 설계사 같은 모습이었다.',
      );
      await era.printAndWait(
        '이 모든 판단의 근거는, 거절의 말을 내뱉으면서도 쉴 새 없이 흔들리는 꼬리,',
      );
      await era.printAndWait(
        '빳빳하게 곧추선 귀, 그리고 아무도 모를 거라 생각하겠지만 얼굴에 너무나 명확히 드러난—— 안심하는 표정이었다.',
      );
      era.println();
      await tachyon.say_and_wait([
        '알고 있나, ',
        callname,
        '…… 자네는 줄곧 가능성의 저편을 보고 싶어 하지 않았나? 만약 이대로라면 정말로……',
      ]);
      era.println();
      await era.printAndWait('이제 됐다.');
      await era.printAndWait([
        '이대로 ',
        tachyon.sex,
        '가 언제까지 허세를 부릴 수 있을지 지켜보는 것도 꽤 재미있겠지만,',
      ]);
      await era.printAndWait([
        '그랬다가는 나중에 분명 수치심에 눈이 뒤집힌 ',
        tachyon.sex,
        '에게 보복을 당할 것이 뻔했다.',
      ]);
      await era.printAndWait([
        '그리하여 ',
        you.get_colored_name(),
        '은(는) 어떤 방법이 ',
        you.get_colored_name(),
        '의 가장 깊은 각오를 보여줄 수 있을지 고민했다.',
      ]);
      era.print([you.get_colored_name(), '은(는) 결심했다……']);
      era.printButton(`${tachyon.sex}를 껴안는다`, 1);
      era.printButton(`${tachyon.sex}에게 입 맞춘다`, 2);
      era.printButton(`${tachyon.sex}의 귀를 살짝 깨문다`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '사람은 돌발적인 상황에 직면했을 때 두 가지 일을 동시에 수행하지 못한다. ',
            tachyon.uma_sex_title,
            ' 역시 마찬가지였다.',
          ]);
          await era.printAndWait([
            '따라서 당연하게도, ',
            you.get_colored_name(),
            '의 갑작스러운 포옹에 깜짝 놀라 익숙한 수컷의 향기에 휩싸인 채,',
          ]);
          await era.printAndWait([
            '이 온기를 마음껏 만끽하게 된 ',
            tachyon.get_colored_name(),
            '은 더 이상 ',
            tachyon.sex,
            '의 장광설을 이어갈 수 없었다.',
          ]);
          break;
        case 2:
          await era.printAndWait(
            '예로부터 전해 내려오는 사랑의 표현 방식이야말로, 입을 막는 동시에 감정을 전할 수 있는 가장 강력한 기술일지도 모른다.',
          );
          await era.printAndWait([
            tachyon.sex,
            '의 입술은 ',
            tachyon.sex,
            '본인과도 같아서, 강해 보이던 방어선은 접촉하는 순간 무너져 내리며 부드럽고 여린 속살을 드러냈다.',
          ]);
          await era.printAndWait(
            '바위처럼 견고하던 아성은 혀끝의 탐색 한 번에 순식간에 붕괴되어, 적군의 거침없는 진입을 허용할 뿐이었다.',
          );
          await era.printAndWait(
            '충직해 보이던 혀 역시 자신의 굵고 긴 혀가 닿는 순간 수줍은 소녀처럼 변해, 수동적으로 얽혀 들었다.',
          );
          break;
        case 3:
          await era.printAndWait('단절된 말 대신 참지 못한 교성이 터져 나왔다.');
          await era.printAndWait([
            '세간에 잘 알려져 있듯, 대부분의 ',
            tachyon.uma_sex_title,
            '가 가진 인간과는 다른 기관은 ',
            tachyon.couple_title,
            '들에게 있어 가장 민감한 부위였다.',
          ]);
          await era.printAndWait([
            '그러니 ',
            tachyon.get_colored_name(),
            '이 내뱉은 묘한 상상을 불러일으키는 교성을 누가 탓할 수 있겠는가.',
          ]);
          await era.printAndWait([
            '오히려 ',
            you.get_colored_name(),
            '의 품에 안겨 귀가 잡힌 상태에서도 쓰러지지 않고 버티고 있는 ',
            you.get_colored_name(),
            '의 품 안에서도 쓰러지지 않았던 ',
            tachyon.get_colored_name(),
            '이 대단할 정도였다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……아…… 잠시만…… 간지러워……',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 거절보다는 받아들이는 듯한 목소리를 듣고, ',
            you.get_colored_name(),
            '은(는) 손길을 바꿔 좀 더 거칠게 ',
            tachyon.uma_sex_title,
            '의 탄력 있고 민감한 귀끝을 주물렀다.',
          ]);
          era.println();
          await tachyon.say_and_wait('히잇…… 기다려…… 안 돼……');
          era.println();
          await era.printAndWait([
            '장장 30초를 버티던 ',
            tachyon.get_colored_name(),
            '은 결국 패배하여 ',
            you.get_colored_name(),
            '의 품속에 완전히 늘어졌다.',
          ]);
      }
      await era.printAndWait([
        tachyon.sex,
        '가 완전히 저항을 포기한 뒤에야, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 놓아주었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 아직 조금 전의 일에서 헤어나오지 못한 듯 정신을 차리지 못하고 있었다.',
      ]);
      await era.printAndWait([
        '그리고 이 순간, ',
        you.get_colored_name(),
        '은(는) 일생에 단 한 번뿐일 진심 어린 고백을 시작했다.',
      ]);
      era.printButton('「사랑해, 아그네스 타키온」', 1);
      await era.input();
      await tachyon.say_and_wait('！！！！？？？？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 말을 듣자마자 ',
        tachyon.sex,
        '의 꼬리가 순식간에 곤두섰다. 마치 털이 삐죽 선 고양이 같았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname.substring(0, 1).repeat(5),
        callname,
        '!? 지금 뭐라고 한 건가!?',
      ]);
      era.println();
      await era.printAndWait([
        '이런, ',
        tachyon.get_colored_name(),
        '은 의외로 귀가 좋지 않았던 모양이다.',
      ]);
      await era.printAndWait('그렇다면 몇 번이고 더 말해주기로 했다.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 처음 ',
        tachyon.get_colored_name(),
        '을 보았을 때를 회상했다.',
      ]);
      await era.printAndWait([tachyon.sex, '의 주법, ', tachyon.sex, '의 덧없음.']);
      await era.printAndWait([
        '그 무엇이든 ',
        you.get_colored_name(),
        '을(를) 열광하게 했고, ',
        tachyon.sex,
        '에게 매료되게 했다.',
      ]);
      await era.printAndWait(['그래, 그것은 「', tachyon.sex, '」 이었다.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 데뷔전을 회상했다.',
      ]);
      await era.printAndWait(
        '빛처럼 당연하게 레이스에 임하고, 당연하게 모든 것을 초월하며, 당연하게 승리를 거머쥐었다.',
      );
      await era.printAndWait([
        '「레이스는 실험 결과의 검증에 불과하다」고 말하며 차가운 표정으로, 심지어 냉혹한 태도로 레이스에 임하던 ',
        tachyon.sex,
      ]);
      await era.printAndWait(['그래, 그것은 「', tachyon.sex, '」 이었다.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '에게 도시락을 만들어주었을 때를 회상했다.',
      ]);
      await era.printAndWait(
        '자신의 가능성을 증명하기 위해 스스로를 실험체로 삼는 것조차 마다하지 않았다.',
      );
      await era.printAndWait([
        '상상을 초월하고 한계를 돌파하는 가능성을 기대하며 눈동자를 번뜩이던 ',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait(['그래, 그것은 「', tachyon.sex, '」 이었다.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 밤을 지새우며 실험에 몰두하던 ',
        tachyon.sex,
        '를 회상했다.',
      ]);
      await era.printAndWait(
        '연구를 위해서라면 몸을 바치고, 꿈을 위해서라면 건강마저 내던졌다.',
      );
      await era.printAndWait([
        '육체는 초라하고 꾀죄죄했으나, 눈동자만큼은 꿈을 향한 열망으로 빛나던 ',
        tachyon.sex,
      ]);
      await era.printAndWait(['그래, 그것은 「', tachyon.sex, '」 이었다.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 처음으로 함께 외출했을 때의 ',
        tachyon.sex,
        '를 회상했다.',
      ]);
      await era.printAndWait(['변색 양배추 주스 소동과 ', tachyon.sex, '의 심술.']);
      await era.printAndWait([
        '그런 사소한 일로 고집을 피우고, 뽑기 인형 하나에 기뻐하던 그런 평범한 ',
        tachyon.sex,
      ]);
      await era.printAndWait(['그래, 그것은 「', tachyon.sex, '」 이었다.']);
      era.println();
      await era.printAndWait([
        '마지막으로…… 지금 눈앞에, ',
        you.get_colored_name(),
        '의 앞에 서 있는 ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '긴장한 듯 시선을 헤매며 ',
        you.get_colored_name(),
        '의 다음 말을 기다리는 ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '본래 감정이 메말랐던 두 눈이 이제는 행복과 사랑으로 가득 찬 ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '뺨을 붉히며 수줍어하는, 누가 보아도 사랑에 완전히 취해버린 평범한 ',
        tachyon.teen_sex_title,
        '인 ',
        tachyon.sex,
      ]);
      era.printButton(
        '「사랑해, 아그네스 타키온. 내가 사랑하는 건 『너』지, 너의 주법이나 꿈, 가능성이 아니야」',
        1,
      );
      await era.input();
      await era.printAndWait('틀림없다.');
      await era.printAndWait(['모든 것의 주체는 ', tachyon.sex, '에게 있었다.']);
      await era.printAndWait([
        '처음에는 정말로 ',
        tachyon.sex,
        '의 주법과 광기에 이끌렸던 것일지도 모른다.',
      ]);
      await era.printAndWait([
        '하지만 지금, ',
        tachyon.get_colored_name(),
        '이라는 이 ',
        tachyon.uma_sex_title,
        '가 ',
        you.get_colored_name(),
        '의 마음속에서 차지하는 비중은 이미 그런 것들을 넘어섰다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 생각 또한 이미 변한 지 오래였다.',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        '의 꿈을 이루기 위해 헌신한다」 가 아니었다.',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        '을 위해서라면 나의 모든 것을 쏟아부을 수 있다」 는 것이었다.',
      ]);
      await era.printAndWait('그러니……');
      era.printButton(
        '「설령 네가 더 이상 달리지 못하게 되어도, 가능성을 쫓지 않게 되어도, 나는 변함없이 너를 사랑할 거야」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '따지고 보면 처음부터 끝까지 이토록 간단한 문제였다.',
      );
      await era.printAndWait([
        '「어머니와 아내가 물에 빠지면 누구부터 구할 것인가」와 같은 질문의 주인공이 「',
        tachyon.get_colored_name(),
        '」 과 「',
        tachyon.get_colored_name(),
        '의 재능」 으로 바뀌었을 뿐이었다.',
      ]);
      await era.printAndWait([
        '…………이렇게 간단한 문제를 이토록 복잡하게 만들 수 있다니, 이것 또한 ',
        tachyon.sex,
        '의 재주일 것이다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 번거로운 성격에 그만 쓴웃음을 지었다.',
      ]);
      await era.printAndWait('하지만, 이제는 안심할 수 있을 것이다.');
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        '그렇게 생각하던 ',
        you.get_colored_name(),
        '의 눈에 ',
        tachyon.sex,
        '의 얼굴을 타고 흐르는 기쁨의 눈물과 환한 미소가 들어왔다.',
      ]);
      await era.printAndWait(['그것은 마치 소나기가 지나간 뒤의 코스모스처럼 고왔다.']);
      era.drawLine();
      await tachyon.say_and_wait([callname, '~~ 오늘의 약이 왔네!']);
      era.println();
      await era.printAndWait([
        '다음 날, ',
        you.get_colored_name(),
        '은(는) 분명 전날까지만 해도 이제 연구를 계속할 수 없다고 말했던 모 ',
        tachyon.uma_sex_title,
        '를 보았다.',
      ]);
      await era.printAndWait(
        '평소보다 훨씬 위험해 보이는 형광색 약을 들고 룰루랄라 트레이닝실로 들어오는 모습이었다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '어서 어서, 오늘의 약은 지금까지의 발광형 약제 중에서도 집대성이라네. 마시면 2만 4천 가지의 RGB 색상을 낼 수 있지~~',
      );
      await tachyon.say_and_wait(
        '아참, 이번 주말에는 야외 실지 실험을 나갈 거니까 기존 일정은 전부 비워두게. 알겠나?',
      );
      await tachyon.say_and_wait(
        '그리고 오늘 도시락은 30분 일찍 가져오게나. 중요한 실험이 있거든.',
      );
      await tachyon.say_and_wait(
        '아, 가급적이면 국물 있는 건 피해주게. 실험 데이터에 지장을 줄 수도 있으니까.',
      );
      era.println();
      await era.printAndWait(
        '들어오자마자 흥분한 연구자는 실험과 연구에 대해 쉴 새 없이 떠들어대기 시작했다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '(이)라 해도 이 광경에는 잠시 멍해질 수밖에 없었다.',
      ]);
      await era.printAndWait(
        '물론 상대의 무리한 요구 때문은 아니었다. 평소의 요구는 이보다 훨씬 더 무리한 편이었으니까. 하지만……',
      );
      era.printButton('「더 이상 연구는 못 한다고 하지 않았어?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아직 기억하고 있었다. 어제 눈물까지 글썽이며 이제 연구에 집중할 수 없다고, 가능성을 찾을 수 없다고 말하던 ',
        tachyon.get_colored_name(),
        '의 그 가련한 모습을.',
      ]);
      await era.printAndWait([
        '지금의 ',
        tachyon.sex,
        '는 전날의 낙담과 붕괴를 전혀 찾아볼 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……내가 한 말은 진심이라네, ', callname, '. ']);
      await tachyon.say_and_wait(
        '나는 이제 나 자신의 가능성에만 몰두하는 연구는 할 수 없게 되었어.',
      );
      await tachyon.say_and_wait('머릿속이 온통 자네 생각뿐이라서 말이야……');
      await tachyon.say_and_wait(
        '지금 이 순간에도 자네의 기뻐하는 모습, 화내는 모습, 부끄러워하는 모습, 긴장한 모습이 떠오르네……',
      );
      await tachyon.say_and_wait(
        '나를 이렇게 만들어버렸으니, 자네가 끝까지 책임져야 할 거야.',
      );
      era.printButton('「미…… 미안해?」', 1);
      await era.input();
      await era.printAndWait('이게, 이게 내 잘못인가?');
      await era.printAndWait(
        '그나저나 이렇게 직구로 애정을 표현하니 역시 쑥스럽지만……',
      );
      await era.printAndWait('아니, 그보다 조금 전의 이야기와 무슨 상관이야?');
      await era.printAndWait(
        '왜 지금 여전히 평소처럼 연구를 하고 있는지에 대한 설명은 안 됐잖아?',
      );
      era.println();
      await tachyon.say_and_wait(
        '그러니까…… 나는 이제 나 혼자만을 생각할 수는 없게 되었다는 걸세.',
      );
      await tachyon.say_and_wait(
        '내가 상상할 수 있는 모든 가능성에는…… 반드시 자네가 곁에 있어야만 하네. 앞으로 내가 고찰할 수 있는 건, 오직 『자네와 함께하는』 가능성뿐일 테니까.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 순간 ',
        tachyon.sex,
        '의 말을 이해하지 못하고 ',
        tachyon.get_colored_name(),
        '을 뚫어지게 쳐다보았다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 시선에 조금씩 어색함을 느끼기 시작했다.',
      ]);
      await era.printAndWait(
        '그리고 마치 댐이 무너지듯, 아무렇지 않은 척하던 표정은 사랑하는 이의 시선이라는 결정타 한 방에',
      );
      await era.printAndWait(
        '순식간에 뺨을 붉힌 부끄러워하는 표정으로 변했다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '그러니까…… 그게…… 주말 실험은…… 시간을 낼 수 있겠지……?',
      );
      await tachyon.say_and_wait(
        '일반적으로 말하는, 그, 소위 데이트라고 불리는 행위가 우리 둘에게 얼마나 적합한지 측정하기 위함이라네…………',
      );
      await tachyon.say_and_wait(
        '아무튼! 토요일 아침 9시, 늦지 말게! 그리고 내 아침밥도 챙겨오고! 이상이야!',
      );
      await tachyon.say_and_wait(
        '그리고, 오늘 점심 도시락은…… 가능하다면…… 한입에 먹기 편한 것으로 준비해주게……',
      );
      await tachyon.say_and_wait(
        '그게…… 연인 관계에서의 『아~~앙』 이라는 행위가 심박수 지수에 미치는 영향을 측정하고 싶거든…… 괜찮겠지?',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '부끄러움을 참아가며 할 말을 다 하는 ',
        you.get_colored_name(),
        '은(는) 그만 웃음이 터졌다.',
      ]);
      await era.printAndWait('이런 상황에서는 뭐라고 대답해야 할까.');
      await era.printAndWait(
        '이 까다롭고 제멋대로지만, 세상에서 가장 귀여운 광기 어린 과학자에게.',
      );
      await era.printAndWait([
        '이 사랑스럽고 애틋하며, 세상에서 가장 소중한 사랑에 빠진 ',
        tachyon.teen_sex_title,
        '에게.',
      ]);
      era.println();
      await you.say_and_wait([
        '알겠습니다…… 나의 ',
        tachyon.sex_code - 1 ? '공주' : '왕자',
        '님.',
      ]);
      return [];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 74-betray
  '74-betray': (() => {
    const title = [{ color: buff_colors[3], content: '마녀의 약' }];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([you.get_colored_name(), '은(는) 문득 피로를 느꼈다.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 약을 ',
        tachyon.get_colored_name(),
        '의 손에 다시 쥐여주었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['…………', callname, '？']);
      era.printButton('「지쳤어. 마시고 싶으면 너나 마셔.」', 1);
      await era.input();
      await era.printAndWait('언제부터였을까? 원인은 무엇이었을까?');
      await era.printAndWait([
        '어쩌면 ',
        you.get_colored_name(),
        '은(는) 더 이상 ',
        tachyon.get_colored_name(),
        '이라는 이름의 ',
        tachyon.uma_sex_title,
        '의 제멋대로인 행동을 견딜 수 없게 된 것일지도 몰랐다.',
      ]);
      await era.printAndWait([
        '어쩌면 ',
        you.get_colored_name(),
        '은(는) 이미 ',
        tachyon.get_colored_name(),
        '에 대한 인내심을 잃어버린 것일지도 몰랐다.',
      ]);
      await era.printAndWait([
        '혹은 ',
        you.get_colored_name(),
        '은(는) 이것이 그저 ',
        tachyon.sex,
        '의 또 다른 장난에 불과하다고 생각했을지도 몰랐다.',
      ]);
      await era.printAndWait([
        '애당초 ',
        tachyon.sex,
        ' 때문에 죽고 싶어지다니, 무슨 농담인가 싶었다.',
      ]);
      era.println();
      await era.printAndWait([
        '결국, ',
        you.get_colored_name(),
        '은(는) 약을 ',
        tachyon.sex,
        '에게 다시 밀어냈다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이 약이 정말로 사람을 죽게 만드는지 따위는 상관하지 않았다.',
      ]);
      await era.printAndWait(
        '아니, 정말로 사람을 죽이는 것이라면 차라리 그것도 나쁘지 않겠다고 생각했다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 내면에는 그런 음습한 생각까지 싹트고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………아아, 그렇군…… 알겠네.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 딱히 격렬한 반응을 보이지 않았다.',
      ]);
      await era.printAndWait([
        '평소의 ',
        tachyon.sex,
        '에 비하면 이상할 정도로 차분한 거동이 오히려 ',
        you.get_colored_name(),
        '의 흥미를 약간 자극했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 겨우 고개를 든 ',
        tachyon.sex,
        '가 체념한 듯, 무언가에서 해방된 듯한 미소를 짓는 모습을 바라보았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그러고 보니, 이 문제의 정답은 언제나 두 가지만 있는 게 아니었지.',
      );
      await tachyon.say_and_wait(
        '삶과 죽음 이외에도 세 번째 선택지가 존재했어. 즉, 출제자를 죽이는 것, 그렇지?',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 자신도 모르게 미간을 찌푸렸다.']);
      await era.printAndWait('말이 너무 많다. 대체 마실 건가 말 건가?');
      await era.printAndWait([
        '……아니, 애당초 늘 남에게 약을 먹이는 이 ',
        tachyon.phy_sex_title.substring(0, 1),
        '은(는)',
      ]);
      await era.printAndWait('자신이 약을 마시는 것 따위는 조금도 생각하지 않았을 것이다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 또 시작된 이 연극에 한숨을 내쉬며 실험실을 떠날 준비를 했다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '그리고, ',
        you.get_colored_name(),
        '이(가) 몸을 돌려 떠나려던 찰나',
      ]);
      era.println();
      await tachyon.say_and_wait('읍………!');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 강제로 입맞춤을 당했다.']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저항하려 했지만, 인간은 결국 ',
        tachyon.uma_sex_title,
        '의 힘을 당해낼 수 없었다. 약물로 여러 번 개조된 ',
        you.get_colored_name(),
        '일지라도 마찬가지였다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀가 ',
        you.get_colored_name(),
        '의 입술을 가르고 들어와, ',
        you.get_colored_name(),
        '의 입 안을 쉴 새 없이 휘저으며 유도했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀는 미련이 남은 듯 ',
        you.get_colored_name(),
        '의 치아 사이, ',
        you.get_colored_name(),
        '의 혓바닥, ',
        you.get_colored_name(),
        '의 잇몸 안쪽을 핥고 지나갔다————하지만, 이것들은 ',
        tachyon.sex,
        '의 목표가 아니었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 목표는————입안에 머금고 있던, 사람을 「사라지게」 만들기에 충분한 그 약물을 ',
        you.get_colored_name(),
        '의 입안으로 밀어 넣는 것이었다.',
      ]);
      era.println();
      await you.say_and_wait('꿀꺽……! 으으으………!!!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 필사적으로 저항하며 몸을 뒤틀었으나, 상대의 행동을 막을 수는 없었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 헛된 저항 속에서, 약은 결국 ',
        you.get_colored_name(),
        '들 두 사람에게 공평하게 나누어졌다.',
      ]);
      era.println();
      await you.say_and_wait('빌어먹을……!');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 참지 못하고 욕설을 내뱉었다']);
      await era.printAndWait([
        '이 ',
        tachyon.phy_sex_title.substring(0, 1),
        '는 대체 무슨 생각인가. 죽을 거면 혼자 죽지, 물귀신 작전이라도 쓰겠다는 건가?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 매섭게 노려보며 당장이라도 폭언을 퍼부으려 했다…… 그러나 말이 입 밖으로 나오려는 순간 멈칫했다.',
      ]);
      era.println();
      era.println();
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이 울고 있었다']);
      await era.printAndWait([
        '아니…… 정확히 말하자면, ',
        tachyon.sex,
        '는 눈물을 흘리면서도 억지로 미소를 지으려 애쓰고 있었지만, 결국 얼굴에 나타난 것은 우는 것보다 더 보기 흉한 미소였다.',
      ]);
      await era.printAndWait([
        '이것은 ',
        you.get_colored_name(),
        '이(가) ',
        tachyon.sex,
        '를 알게 된 이래, ',
        tachyon.sex,
        '의 이렇게나 초라한 모습은 처음 보았다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '하…… 하하하, ',
        callname,
        ', 미안하네. 자네를 속였어.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 아무렇지 않은 척 연기하려 했으나, 울먹이는 목소리 탓에 그 시도는 무척이나 힘겨워 보였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이건 말이지, 독약 같은 게 아니야………… 반대로, 「다시 시작하는」 약이라네.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 그렇게 말했지만, 여전히 시험관을 들고 있는 ',
        tachyon.sex,
        '의 손은 멈추지 않고 떨리고 있었기에 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 말을 신뢰할 수 없었다.',
      ]);
      era.println();
      await era.printAndWait(
        '…………믿지 못하겠지? 상관없네. 약효가 나타나면 알게 될 테니.',
      );
      era.println();
      await era.printAndWait('지금 장난해……!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 소리를 지르고 싶었지만, 자신의 몸이 이미 움직이지 않게 되었다는 것을 깨달았다.',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          '그때, ',
          you.get_colored_name(),
          '의 입안에 남아있던 약제의 맛이 갑자기 변했다. 분명 마실 때는 무색무취였던 약이었는데, 지금의 맛은……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '설마, 마지막 키스의 맛이 돼지고기 덮밥 맛일 줄이야.',
          );
        } else {
          await tachyon.say_and_wait(
            '설마, 첫 키스의 맛이 돼지고기 덮밥 맛일 줄이야.',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 발렌타인데이 때 받았던 초콜릿을 떠올렸다.',
        ]);
        await era.printAndWait([
          '그때부터 이 ',
          tachyon.uma_sex_title,
          '는 끊임없이 이런 이상한 약들로 자신을 괴롭혀왔다.',
        ]);
        await era.printAndWait(
          '매번 자신이 약을 마신 뒤의 반응을 보며 하하하 웃고 즐거워했었다',
        );
        await era.printAndWait(
          '이제 와서, 더 이상 이 모든 것을 참지 않기로 한 자신에게 무슨 잘못이 있단 말인가?',
        );
      }
      await era.printAndWait([
        '확실히 처음에 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이라는 이름의 이 ',
        tachyon.uma_sex_title,
        '의 주법, 그리고 ',
        tachyon.sex,
        '의 꿈에 흥미를 느꼈었다',
      ]);
      await era.printAndWait([
        '확실히 ',
        you.get_colored_name(),
        '은(는) 진심으로 ',
        tachyon.sex,
        '을(를) 돕고 싶었고, ',
        tachyon.sex,
        '를 돕고 싶어 했고, ',
        tachyon.sex,
        '가 꿈을 이룰 때까지 곁에서 지켜주고 싶어 했다',
      ]);
      await era.printAndWait([
        '하지만, ',
        you.get_colored_name(),
        '은(는) 이제 질려버렸다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '를 향한 분노, 불만, 좌절, 혐오가 쌓이고 쌓여 만들어낸 무게는, 이미 저울 반대편에 있는 ',
        tachyon.sex,
        '에 대한 기대, 애정, 동경을 뛰어넘어 버렸다.',
      ]);
      era.println();
      await era.printAndWait([
        '지금의 ',
        you.get_colored_name(),
        '은(는) 그저 하루빨리 이 ',
        tachyon.uma_sex_title,
        '에게서 벗어나고 싶을 뿐이었는데, 결국 이런 독약까지 먹게 된 셈이었다.',
      ]);
      await you.say_and_wait(
        '난 너 같은 녀석이랑 로미오와 줄리엣 놀이나 하고 있을 시간이 없다고!',
        true,
      );
      await era.printAndWait([
        '그러나 말을 할 수 없게 된 ',
        you.get_colored_name(),
        '은(는) 묵묵히 ',
        tachyon.get_colored_name(),
        '의 말을 들을 수밖에 없었다. 최소한, 불만을 배출하는 창구로서 ',
        tachyon.get_colored_name(),
        '을 매서운 시선으로 노려보는 것밖에는 할 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('솔직히 말하자면, 정말 무서웠다네.');
      await tachyon.say_and_wait(
        '누군가를 좋아하면서도, 상대가 나를 좋아하는지 알 수 없다는 기분은 정말…… 너무나도 무서웠어.',
      );
      await tachyon.say_and_wait(
        '그 어떤 실험 결과보다도 마음을 요동치게 만들고, 그 어떤 레이스 결과보다도 심장을 뛰게 만들었지.',
      );
      await tachyon.say_and_wait('솔직히 정말 무서웠다네.');
      await tachyon.say_and_wait(
        '만약 상대가 좋아하는 게 내가 아니라, 내가 가진 「어떤 것」일 뿐이라면,',
      );
      await tachyon.say_and_wait(
        '그럴 땐 어쩌면 좋을지. 만약 상대의 눈에 비치는 것이 내가 아니라 나의 「꿈」뿐이라면 어떡하나 싶었지.',
      );
      await tachyon.say_and_wait(
        '나는 말이야, 줄곧 그런 것들만 걱정해 왔어…… 정작 가장 중요한 것, 가장 공포스러운 가능성은 잊은 채로 말이지.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 헛웃음을 터뜨리며, 너무나 천진하고 낙관적이었던 자신을 조롱했다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '상대는, 애당초 나를 좋아하지 않는 거였어. 꿈과 가능성을 포함해 나의 모든 것을 좋아하지 않았던 거야.',
      );
      era.println();
      await era.printAndWait([
        '마침내 ',
        tachyon.get_colored_name(),
        '의 얼굴에 떠올라 있던 미소——그것을 미소라고 부를 수 있다면——는 무너져 내렸다',
      ]);
      await era.printAndWait('완전한 울음 섞인 얼굴로 변해버렸다');
      era.println();
      await tachyon.say_and_wait(
        '아아…… 이것이 실연이라는 기분이군…… 으윽…… 너무 괴로워…… 무서워…… 심장이 부서질 것 같아……',
      );
      await tachyon.say_and_wait(
        '그런 거였군…… 나는 차인 거야…… 아파…… 마음이 너무 아파……',
      );
      await tachyon.say_and_wait(
        '왜…… 왜 고작 한 사람에게 사랑받지 못하는 것뿐인데…… 왜 마음이 이렇게나 괴로운 거지…… 으우우…… 싫어……',
      );
      await tachyon.say_and_wait(
        '싫어…… 이렇게 아플 줄 알았으면 사랑 같은 건 하지 않았을 텐데…… 다음에는, 다음에는…… 안 할 거야…… 다시는 안 해…… 너무 아파……',
      );
      await tachyon.say_and_wait([
        callname,
        '……',
        callname,
        '…… 어디 있는 거야…… 왜 자네를 찾을 수가 없지…… 어디로 간 거야……',
      ]);
      await tachyon.say_and_wait([
        '내가 이렇게나 고통스러운데 왜 자네는 내 곁에 없는 거야…… ',
        callname,
        '…… 다시는 자네를 실험 도구로 쓰지 않겠네…… 다 내 잘못이야…… 그러니까…… 그러니까 돌아와 주면 안 될까……',
      ]);
      await tachyon.say_and_wait(
        '여긴 너무 무서워…… 나를 데리고 돌아가 줘, 우리의 실험실로…… 다시는 제멋대로 굴지 않을게……',
      );
      await tachyon.say_and_wait([
        '빨래도 직접 하고…… 도시락통도 다 먹고 아무 데나 버려두지 않을 테니까…… ',
        callname,
        '……',
        callname,
        '…………',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '를 바라보았다. 도중부터 그녀는 마치 자신이 누구인지조차 잊어버린 것 같았다',
      ]);
      await era.printAndWait([
        '분명 눈앞의 자신을 보고 있으면서도 계속해서 ',
        callname,
        '의 이름을 부르고 있었다. 마치 이곳에 없는 누군가를 찾는 것처럼',
      ]);
      await era.printAndWait(['아니…… ', callname, '……?']);
      await era.printAndWait([
        '그게 누구지? ',
        you.get_colored_name(),
        '은(는) 평생 들어본 적도 없는 이름이 아닌가?',
      ]);
      await era.printAndWait([
        '눈앞의 이 ',
        tachyon.uma_sex_title,
        '는 또 누구지? 내가 ',
        tachyon.sex,
        '를 알고 있었나?',
      ]);
      era.println();
      await era.printAndWait('두통이, 두통이 머리를 깨부술 듯이 밀려왔다');
      await era.printAndWait('생각하려 할수록 잊어버리는 것들만 늘어갔다');
      era.println();
      await era.printAndWait([
        '결국, ',
        callname,
        '을 애타게 부르는 저 비명 소리 속에서 ',
        you.get_colored_name(),
        '의 의식은 심연으로 가라앉았다',
      ]);
      era.setToBottom();

      await tachyon.say_as_unknown_and_wait('……눈');
      await tachyon.say_as_unknown_and_wait('………눈을 뜨게');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 깨어났다.']);
      await era.printAndWait([
        '어떤 목소리에 의해 깨어난 ',
        you.get_colored_name(),
        '은(는), 눈을 뜨자마자 낯선 천장이 보인다는 것을 깨달았다.',
      ]);
      era.printButton('「여기는 어디지?」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait('……여기는 나의 실험실이라네.');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 목소리가 들려오는 방향을 바라보았다.']);
      await era.printAndWait([
        '눈앞에는 밤색 털의 ',
        tachyon.uma_sex_title,
        '가 서 있었다. 단정한 숏컷과 몸에 걸친 하얀 가운은 ',
        tachyon.sex,
        '의 연구자로서의 신분을 증명하고 있었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 살피는 듯한 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다. 왠지 모르게 ',
        you.get_colored_name(),
        '은(는) 소름 끼치는 기분을 느꼈다.',
      ]);
      era.printButton('「너는 누구지?」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '그 질문은 내가 자네에게 먼저 해야겠군…… 자네는 누구인가? 왜 나의 실험실에 누워 있는 거지?',
      );
      await era.printAndWait(['밤색 털의 ', tachyon.uma_sex_title, '가 말했다.']);
      await era.printAndWait([
        '그제야 ',
        you.get_colored_name(),
        '은(는) 자신이 여전히 바닥에 누워 있었다는 것을 깨닫고 서둘러 몸을 일으켰다',
      ]);
      era.printButton(`「나는 ${you.actual_name}, 트레이너야.」`, 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '…………호오? 그렇다면 트레이너 군, 자네가 여기에 누워 있는 것에는 어떤 용건이 있는 건가?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이곳에 쓰러지기 전 자신이 무엇을 하고 있었는지 떠올리려 했지만 아무것도 기억나지 않았다.',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait(
        '…………기억나지 않는다면 관두게나. 왠지 나도 기억을 잃은 것처럼, 이전에 무엇을 하고 있었는지 기억나지 않는군……',
      );
      await tachyon.say_as_unknown_and_wait([
        '뭐, 됐네. 그 이야기는 접어두고, 어쨌든 내 이름은 ',
        tachyon.get_colored_name(),
        '이라네. 트레이너 군, 잘 부탁하네',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name()]);
      await era.printAndWait([
        '참으로 이상한 이름이군…… 뭐, 애초에 ',
        tachyon.uma_sex_title,
        '들의 이름은 대부분 그런 식이니 타인의 성명을 차별하는 건 좋지 않겠지',
      ]);
      await era.printAndWait([
        '하지만 어째서인지 직감이 ',
        you.get_colored_name(),
        '에게 경고하고 있었다. 눈앞의 이 ',
        tachyon.uma_sex_title,
        '와는 거리를 두어야 한다고',
      ]);
      era.println();
      era.printButton(
        `「그럼, 오늘은 여기까지 하자. 실험실에 마음대로 들어와서 정말 미안했어. 나중에 다시 정식으로 사과하러 올게. ${tachyon.name} 양」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…………아니, 그럴 필요 없네. 애당초 두 사람이 동시에 기억을 잃는다는 건……',
      );
      await tachyon.say_and_wait(
        '됐네, 없던 일로 하지. 앞으로 딱히 찾아올 필요도 없네, 트레이너 군.',
      );
      era.println();
      await era.printAndWait([
        '그렇게, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 실험실을 떠났다',
      ]);
      await era.printAndWait([
        '문을 나서기 직전, ',
        you.get_colored_name(),
        '은(는) 문득 뒤를 돌아보았다',
      ]);
      era.println();
      await tachyon.say_and_wait('음? 트레이너 군, 무슨 일이라도 남았나?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 예감이 들었다. 만약 지금 이 문을 나선다면, 아마 다시는 이 ',
        tachyon.uma_sex_title,
        '와 엮일 일은 없을 것이라고',
      ]);
      era.println();
      await you.say_and_wait('아무것도 아니야. 내 착각이었나 봐.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 실험실 문을 나섰다. 이번에는 일말의 망설임도 없었다',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 74-reject-1
  '74-reject-1': (() => {
    const title = '톱니바퀴가 돌아가기 시작하다';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이라는 이름의 ',
        tachyon.uma_sex_title,
        '를 처음 만났을 때의 화면을 회상했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 주법, ',
        tachyon.sex,
        '의 허무함, ',
        tachyon.sex,
        '의 가능성',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '에게 두 눈을 불태워져 버린 ',
        you.get_colored_name(),
        '은(는), 그때부터 이미 ',
        tachyon.sex,
        '를 위해 모든 것을 희생하기로 맹세하지 않았던가.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 별다른 말 없이, ',
        tachyon.sex,
        '의 손에서 직접 시험관을 건네받았다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 예전에 스스로 미친 눈을 가졌다고 말했던 것을.',
      ]);
      await era.printAndWait([
        '그 광기의 기원은, 분명 ',
        tachyon.sex,
        '의 광휘로부터 반사된 것이리라.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 광기는 ',
        tachyon.sex,
        '의 꿈에서 비롯된 것이고, ',
        you.get_colored_name(),
        '의 광기는 ',
        tachyon.sex,
        '로부터 비롯된 것이다.',
      ]);
      await era.printAndWait([
        '그렇다면, ',
        tachyon.sex,
        '의 꿈을 위해서, ',
        tachyon.sex,
        '가 계속해서 그런 빛을 발할 수 있도록 하기 위해서라면, 자신을 희생하는 것쯤이야 아무렴 어떠랴?',
      ]);
      era.println();
      await era.printAndWait([
        '지금의 ',
        you.get_colored_name(),
        '은(는) 마치 한 명의 독실한 신도 같았으며, 실제로도 그러했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 마음속 신이자 유일한 빛이, 지금 ',
        you.get_colored_name(),
        '(으)로 인해 어둠에 타락하려 하고 있었다.',
      ]);
      await era.printAndWait('그런 일은 당연히 절대 용납될 수 없었다.');
      await era.printAndWait('다행히, 아직 모든 것을 되돌릴 방법은 남아있었다.');
      era.println();
      await era.printAndWait([
        '자기 자신만 사라진다면, ',
        tachyon.sex,
        '는 다시 ',
        you.get_colored_name(),
        '이(가) 보고 싶어 했던 빛을 계속해서 발할 수 있을 것이다.',
      ]);
      era.printButton('「고마워…… 가능성의 저편에서 다시 만나자.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '를 믿었다. 아니, 맹신이라고 해도 좋을 정도였다.',
      ]);
      await era.printAndWait([
        '하지만 동시에, ',
        you.get_colored_name(),
        '의 내면에는 한 줄기 두려움 또한 존재했다.',
      ]);
      await era.printAndWait([
        '만약 자신이 죽은 뒤에, ',
        tachyon.sex,
        '가 생각만큼 강인하지 못하면 어떡하지?',
      ]);
      await era.printAndWait([
        '만약 ',
        tachyon.sex,
        '가 ',
        tachyon.sex,
        ' 스스로가 생각하는 것만큼 강하지 않다면 어떡하지?',
      ]);
      await era.printAndWait([
        '그래서 이것은 ',
        you.get_colored_name(),
        '이(가) 만약을 대비해 걸어둔 굴레이자 자물쇠였다.',
      ]);
      era.println();
      await era.printAndWait([
        '자신이 ',
        tachyon.sex,
        '에게 정말로 그만큼 중요한 존재라고 생각하지는 않지만, 만약에라도, 설령 ',
        tachyon.sex,
        '가 정말로 무너져버린다면…… 그렇다면 이 굴레가, 아니, 이 저주가',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 한때 사랑했던 사람으로부터 온 이 저주가, ',
        tachyon.sex,
        '를 계속해서 밀어붙여 결국 ',
        tachyon.sex,
        '의 이상에 도달하게 만들 것이다.',
      ]);
      await era.printAndWait([
        '만약 모든 것이 자신의 착각이고, ',
        tachyon.sex,
        '의 마음속에 자신이 그 정도의 비중을 차지하지 못했다면,',
      ]);
      await era.printAndWait([
        '그것대로 좋은 일이었다. ',
        tachyon.sex,
        '는 고작 모르모트 따위에게 발목을 잡히지 않고, 굳건하고 단호하게 계속해서 나아갈 테니까.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그렇게 바라며 시험관을 들어 들이켰다. 그리고……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 기쁘게도 ',
        tachyon.sex,
        '가 고개를 들고 평소와 다름없는 미소를 짓는 것을 보았다.',
      ]);
      await era.printAndWait([
        '이걸로 됐다. ',
        tachyon.sex,
        '는 분명, 반드시 자신의 길을 계속해서 고수해 나갈 것이다…………',
      ]);
      era.setToBottom();
      await era.printAndWait('다음 순간');
      era.setToBottom();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무언가가 ',
        you.get_colored_name(),
        '의 입술에 닿는 것을 느꼈다.',
      ]);
      await era.printAndWait('부드럽고, 따스하고, 가냘픈 두 송이의 장미.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '의 입술에 입을 맞췄다.',
      ]);
      era.println();
      await era.printAndWait([
        '그뿐만이 아니었다. ',
        tachyon.sex,
        '의 혀가 ',
        you.get_colored_name(),
        '의 두 입술을 가르고 들어왔다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀는 ',
        you.get_colored_name(),
        '의 입 안을 쉴 새 없이 휘저으며 탐했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀는 미련이 남은 듯 ',
        you.get_colored_name(),
        '의 치아 사이, ',
        you.get_colored_name(),
        '의 혓바닥, ',
        you.get_colored_name(),
        '의 잇몸 안쪽을 핥고 지나갔다————하지만, 이것들은 ',
        tachyon.sex,
        '의 목표가 아니었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 목표는————너무나도 갑작스러운 전개에 ',
        you.get_colored_name(),
        '이(가) 반응하지 못해 삼키지도 못한 채 ',
        you.get_colored_name(),
        '의 입안에 머물러 있던 약이었다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그제야 상황을 파악하고 다급히 저지하려 했다.',
      ]);
      await era.printAndWait('하지만 이미 모든 것이 늦어버린 뒤였다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 입안에 있던 약은 이미 ',
        tachyon.sex,
        '에 의해 절반 이상 빼앗겨버렸다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이유를 물을 틈도 없이 서둘러 혀를 빼내어 ',
        tachyon.sex,
        '을(를) 막으려 했다.',
      ]);
      await era.printAndWait([
        '하지만 인간은 힘으로는 결국 ',
        tachyon.uma_sex_title,
        '를 이길 수 없는 법이다. 아무리 수많은 실험을 겪어온 ',
        you.get_colored_name(),
        '일지라도 예외는 아니었다.',
      ]);
      era.println();
      await era.printAndWait('마침내, 마치 한 세기처럼 길게 느껴졌던 입맞춤이 끝났다.');
      await era.printAndWait([
        '서로 떨어진 두 사람은 숨을 고르고, ',
        you.get_colored_name(),
        '은(는) 숨을 헐떡이면서도 ',
        tachyon.get_colored_name(),
        '의 구토를 도와주기 위해 달려들려 했지만…… 이내 발걸음을 멈출 수밖에 없었다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        '의 얼굴에 떠오른 표정, 감정은 ',
        you.get_colored_name(),
        '(으)로서는 도저히 이해할 수 없는 것이었다.',
      ]);
      await era.printAndWait('기뻐서라면, 어째서 얼굴 위로 끊임없이 눈물이 흘러내리는 것일까.');
      await era.printAndWait([
        '슬퍼서라면, 어째서 입가에는 ',
        you.get_colored_name(),
        '이(가) 단 한 번도 본 적 없는, 그야말로 완벽한 미소를 띠고 있는 것일까.',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          '그때, ',
          you.get_colored_name(),
          '의 입안에 남아있던 약의 맛이 갑자기 변했다. 분명 마실 때는 무색무취였던 약이었는데, 지금의 맛은……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '설마, 마지막 키스의 맛이 돼지고기 덮밥 맛일 줄이야.',
          );
        } else {
          await tachyon.say_and_wait(
            '설마, 첫 키스의 맛이 돼지고기 덮밥 맛일 줄이야.',
          );
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 발렌타인데이 때 받았던 초콜릿을 떠올렸다.',
        ]);
        await era.printAndWait([
          '매일같이 약을 들이부어지던 자신과, 자신의 반응을 보며 즐거워하던 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('그 아름다웠던 시간이 영원히 계속되기를 얼마나 바랐던가.');
        await era.printAndWait(
          '그 홍차의 향기가 영원히 변하지 않기를 얼마나 원했던가.',
        );
        await era.printAndWait('분명 결심을 굳혔을 터였는데.');
        await era.printAndWait('어째서 지금에 와서야 그런 날들이 그리워지기 시작한 것일까.');
        era.println();
        await tachyon.say_and_wait([callname, ', 미안하네. 내가 자네를 속였어.']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 여전히 그 요염한 미소를 유지한 채였지만, 얼굴의 눈물 또한 구슬처럼 계속해서 흘러내리고 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          '은 말이야, 사실 그렇게 대단한 ',
          tachyon.uma_sex_title,
          '가 아니거든.',
        ]);
        await tachyon.say_and_wait([
          '가능성을 위해서라면 모든 것을 포기할 수 있는 그런 ',
          tachyon.uma_sex_title,
          '도 아니고,',
        ]);
        await tachyon.say_and_wait([
          '꿈을 위해서 사랑하는 사람을 죽게 내버려 둘 수 있는 그런 ',
          tachyon.uma_sex_title,
          '도 아니야.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 고개를 저으며 말했고, ',
          you.get_colored_name(),
          '은(는) 무언가 말을 하려 했지만 왠지 입이 떨어지지 않았다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……아니, 이렇게 말하는 게 맞을지도 모르겠군. ',
          tachyon.sex,
          '도 한때는 그런 ',
          tachyon.uma_sex_title,
          '였어.',
        ]);
        await tachyon.say_and_wait([
          '하지만 방금 말한 대로, 모르모트 군에 의해 변해버린 공주는 이미 사랑이 무엇인지 알아버렸거든. 그래서…… ',
          tachyon.sex,
          '는 더 이상 그럴 수 없게 되었어.',
        ]);
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          '도 결국엔, 평범한 한 명의 ',
          tachyon.child_sex_title,
          '일 뿐이니까.',
        ]);
        await tachyon.say_and_wait([
          '그러니까 ',
          tachyon.sex,
          '도 사랑에 빠지고, 노심초사하며, 자신이 좋아하는 사람이 자기를 좋아하는지 걱정하기도 하고……',
        ]);
        await tachyon.say_and_wait(
          '자신이 사랑하는 사람의 눈에 비치는 것이, 사실은 자기 자신이 아닐까 봐 겁내기도 하지.',
        );
        era.println();
        await era.printAndWait([
          '처음부터 끝까지 「',
          callname,
          '」이(가) 보아온 것, 매료된 것은 「',
          tachyon.get_colored_name(),
          '의 주법」이자, 「',
          tachyon.get_colored_name(),
          '의 꿈」이었다.',
        ]);
        await era.printAndWait(['그렇다면…… ', tachyon.get_colored_name(), ' 자신은?']);
        await era.printAndWait([
          '아니…… ',
          tachyon.get_colored_name(),
          '……은 누구지?',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……아아, 약효가 돌기 시작했군………… 원래는 좀 더 길게 말하고 싶었는데 말이야.',
        );
        era.println();
        await era.printAndWait([
          '눈앞의 ',
          tachyon.teen_sex_title,
          '의 얼굴에서 눈물은 더 이상 흐르지 않았지만, 미소는 여전히 찬란했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…………뭐, 그래도 말이야. 적어도 차이지는 않았고, 다시 말해 최소한 거절당하지는 않았잖아?',
        );
        await tachyon.say_and_wait(
          '그렇지? 그걸로 충분해…… 음, 그걸로 충분하다고. 하하하!',
        );
        era.println();
        await era.printAndWait('하하하하하');
        await era.printAndWait([
          tachyon.teen_sex_title,
          '가 유쾌하게 웃었고, ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '가 크게 웃는 모습에서 뇌리에 어떤 실루엣을 떠올렸다……',
        ]);
        await era.printAndWait([
          '자신이 무언가를 마시고 난 뒤, 「',
          tachyon.sex,
          '」 역시 항상 자신을 보며 하하하 웃고는 했었다.',
        ]);
        await era.printAndWait([
          '「',
          tachyon.sex,
          '」의 이름이 뭐였더라? 「',
          tachyon.sex,
          '」가 바로 눈앞의 ',
          tachyon.teen_sex_title,
          '인가?',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '미안하네, ',
          callname,
          ', 그토록 오랫동안 자네를 고생시켜 놓고, 결국 모든 것을 물거품으로 만들어서…',
        ]);
        await tachyon.say_and_wait([
          '하지만 ',
          tachyon.get_colored_name(),
          '의 마지막 어리광이라고 생각해 주게나…… 다음번엔, 절대로 이렇게 귀찮은 ',
          tachyon.phy_sex_title,
          '에게는 빠지지 말게나.',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          tachyon.get_colored_name(),
          '」, 「',
          callname,
          '」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 낯익으면서도 무언가 짐작이 가는 이 명칭들을 필사적으로 뇌리에 새기려 노력했다.',
        ]);
        await era.printAndWait(
          '하지만 두뇌는 마치 통돌이 세탁기에 들어간 것처럼, 기억들이 때처럼 계속해서 씻겨 내려갔다.',
        );
        await era.printAndWait([
          '눈앞의 ',
          tachyon.teen_sex_title,
          '의 모습조차, 새벽녘에 사라지는 물거품처럼 허망하게 흐릿해져 갔다.',
        ]);
        era.setToBottom();
        await tachyon.say_and_wait(['잘 자게나, ', callname, ' ']);
        era.setToBottom();
        await era.printAndWait([
          '이 말을 끝으로, ',
          you.get_colored_name(),
          '의 의식은 심연으로 가라앉았다.',
        ]);
        era.setToBottom();
        era.drawLine();
        await tachyon.say_as_unknown_and_wait('……눈');
        await tachyon.say_as_unknown_and_wait('………눈을 뜨게');
        era.println();
        await era.printAndWait([you.get_colored_name(), '은(는) 깨어났다.']);
        await era.printAndWait([
          '어떤 목소리에 의해 깨어난 ',
          you.get_colored_name(),
          '은(는), 눈을 뜨자마자 낯선 천장이 보인다는 것을 깨달았다.',
        ]);
        era.printButton('「여기는 어디지?」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait('……여기는 나의 실험실이라네.');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 목소리가 들려오는 방향을 바라보았다.',
        ]);
        await era.printAndWait([
          '눈앞에는 밤색 털의 ',
          tachyon.uma_sex_title,
          '가 서 있었다. 단정한 숏컷과 몸에 걸친 하얀 가운은 ',
          tachyon.sex,
          '의 연구자로서의 신분을 증명하고 있었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 살피는 듯한 눈빛으로 ',
          you.get_colored_name(),
          '을(를) 바라보았다. 왠지 모르게 ',
          you.get_colored_name(),
          '은(는) 소름 끼치는 기분을 느꼈다.',
        ]);
        era.printButton('「너는 누구지?」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '그 질문은 내가 자네에게 먼저 해야겠군…… 자네는 누구인가? 왜 나의 실험실에 누워 있는 거지?',
        );
        await era.printAndWait(['밤색 털의 ', tachyon.uma_sex_title, '가 말했다.']);
        await era.printAndWait([
          '그제야 ',
          you.get_colored_name(),
          '은(는) 자신이 여전히 바닥에 누워 있었다는 것을 깨닫고 서둘러 몸을 일으켰다',
        ]);
        era.printButton(`「나는 ${you.actual_name}, 트레이너야.」`, 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '…………호오? 그렇다면 트레이너 군, 자네가 여기에 누워 있는 것에는 어떤 용건이 있는 건가?',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 이곳에 쓰러지기 전에 무엇을 하고 있었는지 떠올려 보려 했지만 아무것도 기억나지 않았다.',
        ]);
        era.println();
        await tachyon.say_as_unknown_and_wait(
          '…………기억나지 않는다면 관두게나. 왠지 나도 기억을 잃은 것처럼, 이전에 무엇을 하고 있었는지 기억나지 않는군……',
        );
        await tachyon.say_as_unknown_and_wait([
          '뭐, 됐네. 그 이야기는 접어두고, 어쨌든 내 이름은 ',
          tachyon.get_colored_name(),
          '이라네. 트레이너 군, 잘 부탁하네',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name()]);
        await era.printAndWait([
          '이 이름을 듣는 순간, ',
          you.get_colored_name(),
          '의 심장이 마치 한 박자 어긋난 듯이 뛰었다.',
        ]);
        await era.printAndWait('분명 들어본 적 없는 이름일 텐데');
        await era.printAndWait([
          '분명 모르는 사이일 터인 이 ',
          tachyon.uma_sex_title,
          '을(를) 전혀 모를 텐데.',
        ]);
        await era.printAndWait('하지만 어째서인지, 묘한 친숙함이 느껴졌다.');
        era.println();
        era.printButton('「우리…… 어디선가 본 적 없어?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '이런, 요즘 세상에 그런 구닥다리 헌팅 수법은 유행이 지났다고, 트레이너 군.',
        );
        await era.printAndWait([
          tachyon.sex,
          '는 ',
          you.get_colored_name(),
          '을(를) 보며 짓궂은 미소를 지었고, ',
          you.get_colored_name(),
          '은(는) 다급히 그런 게 아니라고 해명했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '농담이라네…… 왠지 모르겠지만, 나도 그런 느낌이 드는군.',
        );
        era.println();
        await era.printAndWait([
          '어째서인지, 트레이너로서의 직감이 ',
          you.get_colored_name(),
          '에게 말해주고 있었다. 이 ',
          tachyon.uma_sex_title,
          '는 반드시 ',
          you.get_colored_name(),
          '을(를) 전율케 할 주법을 보여줄 것이라고.',
        ]);
        await era.printAndWait([
          '하지만 동시에, 어떤 장면이 ',
          you.get_colored_name(),
          '의 뇌리에 끊임없이 떠올랐다. 그것은 이 ',
          tachyon.get_colored_name(),
          '이라고 불리는 ',
          tachyon.uma_sex_title,
          '가……',
        ]);
        await era.printAndWait('끊임없이 도시락을 요구하는 모습이었다???');
        await era.printAndWait([
          '정신을 차렸을 때, ',
          you.get_colored_name(),
          '은(는) 이미 ',
          tachyon.sex,
          '에게 계약을 제안한 뒤였다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…………저기 말이야, 보통 이렇게 갑자기 계약을 제안하나? 이건 ',
          tachyon.uma_sex_title,
          '의 일생이 걸린 문제라고. 좀 더 진지하게 대해야 한다고 생각하지 않나?',
        ]);
        era.printButton('「왠지 느낌이 와. 우리는 반드시 잘 맞을 거야」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 말을 내뱉고 나서야, 모든 것이 끝났다고 생각했다.',
        ]);
        await era.printAndWait(
          '대체 무슨 생각을 한 거지. 상대에게 기시감이 느껴진다고는 해도, 보통 이렇게 뜬금없이 계약을 제안하지는 않잖아!!',
        );
        await era.printAndWait(
          '이제 다 끝났다. 거절당하는 건 물론이고, 심하면 엄청나게 비웃음만 당하겠지…………',
        );
        era.println();
        await era.printAndWait([
          '아니나 다를까, ',
          tachyon.get_colored_name(),
          '이라는 이름의 ',
          tachyon.uma_sex_title,
          '는 말을 듣고 멍하니 있다가, 이내 하하하 크게 웃더니……',
        ]);
        await tachyon.say_and_wait('좋네.');
        era.println();
        await era.printAndWait('거봐, 역시………………');
        await era.printAndWait('?????');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 의문이 가득한 얼굴로 상대를 바라볼 수밖에 없었다.',
        ]);
        await era.printAndWait([tachyon.sex, '가 눈가에 맺힌 웃음의 눈물을 닦으며 말했다.']);
        era.println();
        await tachyon.say_and_wait(
          '나도 왠지 모르게 그런 예감이 드는군…… 비록 이 감정의 근원이 무엇인지는 반드시 밝혀내야 하겠지만,',
        );
        await tachyon.say_and_wait(
          '자네는 나쁜 사람은 아닌 것 같아. 그뿐만 아니라, 분명 아주 재미있는 사람일 거야……',
        );
        await tachyon.say_and_wait(
          '후후, 그러니 잘 부탁하네, 트레이너………… 아니, 모르모트 군.',
        );
        era.println();
        await era.printAndWait('「모르모트 군」');
        await era.printAndWait([
          tachyon.sex,
          '가 갑자기 바꿔 부른 호칭은 어딘가 묘했고, 심지어 약간의 공포마저 느껴졌다……',
        ]);
        await era.printAndWait([
          '애당초 모르모트라는 호칭은 보통 좋은 의미로 쓰이지 않는 데다가, ',
          tachyon.sex,
          '의 이 연구광 같은 모습까지 더해지니…………',
        ]);
        await era.printAndWait([
          '하지만 그런 감정 외에도, ',
          you.get_colored_name(),
          '은(는) 한 줄기 친숙함을 느꼈다.',
        ]);
        era.printButton('「잘 부탁해, 아그네스…… 타키온」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_actual_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 알게 되었다',
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

  // [번역 완료] 89
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
        '…………아, ',
        callname,
        '은 오늘 없었지.',
      ]);
      await tachyon.say_and_wait([
        '큭…… 하지만 이 약은 신선할 때 시험하지 않으면 효과가 사라지는데. 어쩔 수 없군, ',
        t_call_c,
        '～～',
      ]);
      await tachyon.say_and_wait([
        '…………에이, ',
        t_call_c,
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
        t_call_c,
        '마저 없다니…… 아니면 ',
        t_call_p,
        '……',
        t_call_s,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '생각해보니 ',
        coffee.get_colored_name(),
        ' 뿐만이 아니었다.',
      ]);
      await tachyon.print_and_wait([
        pocket.get_colored_name(),
        '、',
        shakur.get_colored_name(),
        '、',
        digital.get_colored_name(),
        ', 심지어 아끼는 후배인 ',
        scarlet.get_colored_name(),
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
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.print_and_wait([
          '만약 그런 화제가 그저 달콤한 밀어나 애매한 감정 수준에 머물렀다면, 적어도 주변 사람들, 특히 ',
          scarlet.get_colored_name(),
          '과 ',
          digital.get_colored_name(),
          '은 기꺼이 들어주었을 것이다.',
        ]);
        await tachyon.print_and_wait([
          '하지만 대화는 언제나 침대 위에서의 은밀한 부분으로 흘러가기 일쑤였으니, 비슷한 주제만 나와도 얼굴을 붉히며 자리를 피하는 ',
          tachyon.couple_title,
          '들을 탓할 수는 없었다.',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '마저 참지 못하고 물었을 정도였다.',
      ]);
      await tachyon.print_and_wait(
        '어째서 그렇게 한시도 쉬지 않고 애정을 과시하느냐고.',
      );
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
      await tachyon.print_and_wait(
        '이런 감정들을, 이런 말들을 누군가에게 털어놓지 않는다면,',
      );
      await tachyon.print_and_wait(
        '자기 자신이 이 거대한 열기에 안팎으로 타버릴 것만 같았다.',
      );
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
        you.sex,
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
      await tachyon.print_and_wait(
        '만약 이성이란 것이 이런 감정을 버려야 하는 것이라면,',
      );
      await tachyon.print_and_wait([
        '만약 객관이란 것이 ',
        you.sex,
        '를 향한 사랑을 줄여야 하는 것이라면,',
      ]);
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
      await tachyon.print_and_wait(
        '하지만, 미쳤는지 아닌지는 진작에 판가름 난 것 아니겠는가.',
      );
      era.println();
      await tachyon.print_and_wait([
        '온 세상이 다 안다. ',
        tachyon.get_colored_name(),
        '은 미친 ',
        tachyon.uma_sex_title,
        '라는 것을.',
      ]);
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 온 세상 따위 신경 쓰지 않았다.',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        '가 안다면 그만이다. ',
        tachyon.get_colored_name(),
        '이 이런 ',
        tachyon.uma_sex_title,
        '라는 것을.',
      ]);
      await tachyon.print_and_wait([
        '그리고 ',
        tachyon.get_colored_name(),
        '이 오로지 신경 쓰는 것은 ',
        you.sex,
        ' 뿐이었다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이 두려워하는 것은 단 한 가지, 바로 ',
        you.sex,
        '에게 미움받는 것이었다.',
      ]);
      await tachyon.print_and_wait(['자신의 행보가 ', you.sex, '와 어울리는가?']);
      await tachyon.print_and_wait(['자신의 애정을 ', you.sex, '가 좋아해 줄 것인가?']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 과연 ',
        you.sex,
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
      await tachyon.print_and_wait(
        '다이아몬드처럼 영원하고도 영롱한 사랑을 원해.',
      );
      await tachyon.print_and_wait([
        you.sex,
        '의 곁을 지키는 사랑을 원해.',
      ]);
      era.println();
      await tachyon.print_and_wait('하지만 이런 내가 정말 괜찮은 걸까.');
      await tachyon.print_and_wait('정말로 일생을 맡길 수 있는 상대인 걸까?');
      await tachyon.print_and_wait([
        you.sex,
        '는 영원히 이런 나를 사랑하겠다고 약속해 줄까.',
      ]);
      await tachyon.print_and_wait([
        '나에게는, 영원히 이런 ',
        you.sex,
        '를 사랑할 방법이 있는 걸까.',
      ]);
      era.println();
      tachyon.say('나는……');
      era.printButton('영원을 선택한다 (관계를 진전시킨다)', 1, {
        buttonType: '',
        color: tachyon.color,
      });
      era.printButton('계속 불타오른다 (아직 진전시키지 않는다)', 2, {
        buttonType: '',
        color: tachyon.color,
      });
      const ret = await era.input();
      if (ret === 1) {
        await tachyon.print_and_wait([you.sex, '와 어깨를 나란히 하고.']);
        await tachyon.print_and_wait([you.sex, '의 손을 잡고.']);
        await tachyon.print_and_wait([you.sex, '와 가정을 꾸리고.']);
        await tachyon.print_and_wait([you.sex, '의 아이를 낳고.']);
        era.println();
        await tachyon.print_and_wait('원하는 것은…… 안정되고 평온한 사랑.');
        await tachyon.print_and_wait('답이 너무나 간단하여 스스로도 놀랄 정도였다.');
        era.println();
        await tachyon.print_and_wait([
          '퇴근하고 집에 돌아왔을 때, 이미 집 앞에서 자신을 기다리고 있는 ',
          you.sex,
          '를 보는 것.',
        ]);
        await tachyon.print_and_wait([
          '만약 자신이 일찍 퇴근한다면 요리를 준비하며 ',
          you.sex,
          '가 돌아오기를 기다리는 것.',
        ]);
        await tachyon.print_and_wait([
          '비록 요리에 소질은 없지만, ',
          you.sex,
          '를 위해서라면 ',
          tachyon.get_colored_name(),
          '은 한때 연구에 바치겠노라 맹세했던 양손을 기꺼이 프라이팬과 냄비를 잡는 데 쓸 용의가 있었다.',
        ]);
        await tachyon.print_and_wait('휴일에는 둘이서 외출한다. 어디라도 상관없었다.');
        await tachyon.print_and_wait(
          '공원, 가구점, 혹은 실험 도구점이나 화학 약품점이라 해도.',
        );
        await tachyon.print_and_wait([
          you.sex,
          '와 소파 배치 같은 사소한 일로 다투는 것.',
        ]);
        await tachyon.print_and_wait(
          '밤이 될 때까지 서로 잘못을 인정하지 않고 고집을 피우다가도, 결국 누군가 먼저 시작한 따스한 포옹 한 번에 다시 화해하는 것.',
        );
        await tachyon.print_and_wait([
          '새집에 입주한 당일에는 분명 몹시 피곤할 것이다. 아무리 ',
          tachyon.uma_sex_title,
          '의 체력이라 해도 버티기 힘들겠지.',
        ]);
        await tachyon.print_and_wait([
          '어렵사리 마련한 새집에서 오붓한 시간을 보내고 싶었으나, 결국 그대로 ',
          you.sex,
          '의 품에 안겨 잠들어버리는 것.',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await tachyon.print_and_wait(
            '임신 사실을 알게 되는 날, 그는 분명 깜짝 놀랄 것이다.',
          );
          await tachyon.print_and_wait(
            '하지만 그렇게 갑작스럽게 말해선 안 된다. 그가 뿜어낼 강렬한 빛 때문에 이웃집에서 민원을 넣을지도 모르니까.',
          );
          await tachyon.print_and_wait('좋은 타이밍을 봐서, 햇살 비치는 아침 식사 시간에.');
          await tachyon.print_and_wait(
            '아무렇지 않은 말투로 말하는 거다.「자기야, 당신 아빠가 될 거야♡」라고.',
          );
          await tachyon.print_and_wait(
            '그때 그는 어떤 표정을 지을까?',
          );
          await tachyon.print_and_wait(
            '아이가 태어난 뒤에는 아이와 함께 우리들의 사진을 보고 싶다.',
          );
          await tachyon.print_and_wait(
            '당시의 내가 어떻게 원조 실험체 군에게 홀딱 반했었는지 말이다.',
          );

          await tachyon.print_and_wait(
            '아마 아이는 아빠가 참 불쌍하다고 생각하겠지. 엄마에게 이렇게나 괴롭힘당하다니 하고.',
          );
          await tachyon.print_and_wait(
            '하지만 침대 위에서 괴롭힘당하는 건 늘 엄마 쪽이었지만 말이야♡',
          );
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
          you.sex,
          '와 함께하기로 선택한 것이 아니었다.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '와 함께하는 매일매일이 너무나 흥미로웠기 때문이었다.',
        ]);
        await tachyon.print_and_wait('설령 그것이 지루하고 평범한 일상이라 할지라도.');
        await tachyon.print_and_wait([
          '곁에 있는 사람이 ',
          you.sex,
          '라는 사실만으로도 벌써부터 참을 수 없이 기대가 되었다.',
        ]);
        era.println();
        await you.say_and_wait('타키온! 나를 찾는다고 들었는데, 무슨 일이야?');
        era.println();
        await tachyon.print_and_wait(
          '어떤 친절한 사람이 알려준 걸까? 아니면 이심전심인가?',
        );
        await tachyon.print_and_wait('그런 건 아무래도 상관없었다.');
        await tachyon.print_and_wait('차분히 생각하자. 어떻게 말을 꺼내야 좋을까?');
        await tachyon.print_and_wait('음…… 이렇게 하면 되겠군.');
        era.println();
        await tachyon.say_and_wait([
          callname,
          ', 나는 말이야, 우리가 이제…… 다음 단계로 넘어갈 때가 된 게 아닐까 생각하고 있었네.',
        ]);
        await tachyon.print_and_wait(
          '말을 내뱉는 순간, 마치 교회당의 종소리가 들려온 듯했다.',
        );
      } else {
        await tachyon.print_and_wait('영원…… 인가?');
        era.println();
        await tachyon.print_and_wait('모르겠다.');
        await tachyon.print_and_wait('생각하기 두렵다.');
        era.println();
        await tachyon.print_and_wait('나에게 그런 동반자가 될 자격이 있을까.');
        await tachyon.print_and_wait([you.sex, '의 곁을 지키며 평생의 시간을 함께 보낼 수 있을까.']);
        era.println();
        await tachyon.print_and_wait([
          '애초에 ',
          tachyon.get_colored_name(),
          '이라는 이 ',
          tachyon.phy_sex_title,
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
        await you.say_and_wait('타키온! 나를 찾는다고 들었는데, 무슨 일이야?');
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
          you.get_colored_name(),
          '은(는) 고개를 저으며 내면의 기묘한 생각을 털어버리고, 망설임 없이 문밖으로 걸음을 옮겼다.',
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
