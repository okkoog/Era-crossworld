// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const recruit_flags = require('#/data/event/recruit-flags');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32-plan-b"),

  // [번역 완료] before_arim_kin_b
  before_arim_kin_b: (() => {
    const title = '最終実験、準備完了';
    /**
     * Plan B 専用、シニア年有馬記念の前
     * 注意：Plan B ではアグネスタキオンはシニア年有馬記念に出走できないため、このイベントは機制上マンハッタンカフェの同段階の前イベントに属する
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {string} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      arim_kin,
    ) => {
      await tachyon.print_and_wait('有馬記念');
      await tachyon.print_and_wait([
        callname,
        '의 말대로 이번 레이스가 끝나면 스스로에 대한 답을 얻을 것이다.',
      ]);
      await tachyon.print_and_wait('조금 두렵지만 동시에 조금 기대된다.');
      await tachyon.print_and_wait('맞이할 결말이 두렵고');
      await tachyon.print_and_wait('밝혀질 진실이 기대된다.');
      await tachyon.print_and_wait([you.sex, '은(는) 대체 무슨 말을 하려는 걸까?']);
      await tachyon.print_and_wait('오늘 아리마 기념에서 그 뜻이 분명해질까?');
      era.println();
      await coffee.say_and_wait(['……', c_call_t, '？']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '！']);
      await tachyon.say_and_wait('……응?');
      era.println();
      await era.printAndWait([
        '정신을 차려 보니 눈앞의 ',
        call_25,
        '이(가) 곤란하다는 듯 이쪽을 바라보고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait(
        '몇 번이나 불렀는데…… 또 무슨 생각에 정신이 팔려 있던 거야?',
      );
      await tachyon.say_and_wait('……아무것도 아닐세. 괜찮네.');
      await coffee.say_and_wait('……이상하네.');
      await tachyon.print_and_wait([
        call_25,
        '을(를) 위해서가 아니라면 자신은 절대 이런 꼴이 되지 않았을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '애초부터 ',
        call_25,
        '을(를) 위해 힘쓰지 않았다면 좋았을 텐데. 적어도 자신은 ',
        callname,
        '의 마음속에서 가장 밝게 빛나는 존재로 남았을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '……하지만 그런 생각은 단 한 조각도 ',
        tachyon.get_colored_name(),
        '의 머릿속에 떠오르지 않았다.',
      ]);
      await tachyon.print_and_wait([
        '그렇게 생각한다면 과거의 ',
        tachyon.get_colored_name(),
        '을(를) 전부 부정하는 셈이니까.',
      ]);
      await tachyon.print_and_wait([
        '무엇보다 ',
        call_25,
        ' 자신은 아무 잘못도 하지 않았다.',
      ]);
      await tachyon.print_and_wait(
        '단지…… 모든 일이 예상과 다르게 흘러갔을 뿐이다.',
      );
      await tachyon.print_and_wait([
        '그래서 ',
        tachyon.get_colored_name(),
        '은(는) 몹시 복잡한 눈빛으로 ',
        call_25,
        '을(를) 바라볼 수밖에 없었다.',
      ]);
      era.println();
      await coffee.say_and_wait('이제 슬슬 나갈 시간이야.');
      await tachyon.say_and_wait('……그래, 힘내게.');
      await coffee.say_and_wait([c_call_t, '……목소리가 좀 이상한데.']);
      era.println();
      await tachyon.print_and_wait([
        '너무 많은 기대를 걸었던 탓일까. ',
        tachyon.get_colored_name(),
        '의 목소리가 조금 쉬어 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……아무것도 아닐세. 어제 ',
        callname,
        '와(과) 거리에 나갔다가 조금 추웠을 뿐이네.',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '잠깐만. 너희 둘, 크리스마스에 거리에 나갔어? ……레이스가 끝나면 자세히 설명해 줘.',
        );
      } else {
        await coffee.say_and_wait([
          '또 ',
          callname_25,
          '와(과) 쏘다니다니…… 오늘은 ',
          arim_kin,
          '인데.',
        ]);
      }
      era.println();
      await era.printAndWait('그 뒤에 이어진 말은 이제 아무래도 좋았다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 기다리고 있었다. 레이스가 끝나고 수수께끼가 풀릴 순간을.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_takz_kin_b
  before_takz_kin_b: (() => {
    const title = '마음을 하나로';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('피가 끓어오른다.');
      await era.printAndWait('얼마 만일까. 레이스가 주는 이 뜨거운 열기는.');
      era.println();
      await tachyon.say_and_wait([callname, '……다녀오겠네.']);
      era.printButton(
        `「가라! ${tachyon.uma_sex_title}의 한계를 보여 줘!」`,
        1,
      );
      era.printButton('「안심하고 이기고 와. 다시 한번 내 가슴을 뜨겁게 해 줘!」', 2);
      await era.input();
      await tachyon.say_and_wait('그래…… 그리고 다카라즈카가 끝나면……');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 고개를 끄덕였다.']);
      await era.printAndWait('그날 약속했던 더욱 넓은 세계.');
      era.printButton('「우리의 한계를 세계의 정상에 새기자!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ending_b
  ending_b: (() => {
    const title = (tachyon, coffee) => [
      { color: 'white', content: '최강의 ' },
      {
        color: coffee.color,
        content: coffee.uma_sex_title,
        fontWeight: 'bold',
      },
      { color: 'white', content: ', 최속의 ' },
      { color: tachyon.color, content: '주법', fontWeight: 'bold' },
    ];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await tachyon.print_and_wait([
        '最初、',
        tachyon.get_colored_name(),
        '은 그저 기다리고 있었다.',
      ]);
      await tachyon.print_and_wait([
        '레이스가 끝나기를, ',
        callname,
        '이 ',
        you.sex,
        '의 대답을 들려주기를.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        '는 이 레이스에 도대체 무슨 의미가 있는지 이해할 수 없었다.',
      ]);
      await tachyon.print_and_wait([
        '설마 지금의 자신과 ',
        call_25,
        ' 사이의 격차를 뼈저리게 느끼게 하려는 것인가?',
      ]);
      await tachyon.print_and_wait(
        '지금의 자신을 더 비참하게 만들려는 속셈인가 하는 자포자기하는 생각마저 들었다.',
      );
      await tachyon.print_and_wait([
        '그렇기에 ',
        tachyon.sex,
        '는 경기장에 제대로 집중하지 않았다.',
      ]);
      await tachyon.print_and_wait('그저 시간이 흐르기만을 기다릴 뿐이었다.');
      era.println();
      await you.say_as_passer_by_and_wait('해설', [
        '레이스 시작되었습니다! 모든 ',
        tachyon.uma_sex_title,
        '들이 안정적으로 게이트를 빠져나갑니다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '먼저, 해설의 목소리가 ',
        tachyon.sex,
        '의 호기심을 자극했다.',
      ]);
      await tachyon.print_and_wait([
        '비록 직접 달릴 수는 없어도, ',
        tachyon.get_colored_name(),
        '은 여전히 모든 것에 호기심을 품고 있었다.',
      ]);
      await tachyon.print_and_wait([
        '특히 그 상대가 이론상 자신이 속속들이 알고 있어야 할 ',
        call_25,
      ]);
      era.println();
      await tachyon.print_and_wait('그다음 찾아온 것은, 위화감이었다.');
      await tachyon.print_and_wait(
        '사실 위화감은 지금 처음 느낀 것이 아니었다.',
      );
      await tachyon.print_and_wait([
        '재팬 컵이 끝났을 때부터 그런 기분이 들었다.',
      ]);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 주법은…… 처음에 ',
        tachyon.sex,
        '가 알던 주법과 아주 미세한 차이점이 있었다.',
      ]);
      await tachyon.print_and_wait([
        '만약 자신이 계속해서 ',
        call_25,
        '을 주시하고 있었다면, 오히려 결코 눈치채지 못했을 정도로 아주 작은 차이였다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 재팬 컵 이후 단 한 번도 진지하게 ',
        call_25,
        '의 질주를 보지 않았던 자신에게는, 그 아주 미세한 변화조차 너무나도 명확하게 보였다.',
      ]);
      await tachyon.print_and_wait('특히……');
      await tachyon.print_and_wait([
        '그것은 여전히 ',
        call_25,
        ' 본인의 주법이었지만……',
      ]);
      await tachyon.print_and_wait('세부적인 부분…… 게이트를 나가는 자세…… 호흡하는 방식……');
      await tachyon.print_and_wait([
        '그런 디테일들은…… ',
        tachyon.get_colored_name(),
        ' 자신조차 눈치채지 못했던, 본인만이 가진 고유한 습관이었다.',
      ]);
      await tachyon.print_and_wait('그것은……');

      era.printButton(
        `「이건…… 내가 아는 가장 빠르고 강한 두 명의 ${tachyon.uma_sex_title}가 보여 준 주법을 융합한 거야.」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        '마음을 사로잡았던 그 사람은, 어느새 자신의 곁에 서 있었다.',
      );
      await tachyon.print_and_wait([
        '그 눈 속의 빛은 여전히 반짝이며, 경기장을 달리는 그 ',
        tachyon.uma_sex_title,
        '를 바라보고 있었다.',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '의 눈 속의 빛은, 과연 누구를 향하고 있는 것인가.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '을 위한 것인가, 아니면 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '이전의 자신은 당연하게도, 자신이 더 이상 경기장에 설 수 없으니 바라보는 대상은 당연히 ',
        call_25,
        '일 것이라 생각했다.',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.printButton(
        '「그뿐만 아니라 나는 확신해. 이것보다 더 찬란하고, 눈부시며, 사람을 매료시키는 주법은 없다는 걸」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('해설', [
        coffee.get_colored_name(),
        '! 광속을 초월한 칠흑의 환영! 연말의 나카야마 경기장을 제패한 것은 바로 ',
        coffee.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '황홀경 속에서, 타키온은 마치 ',
        tachyon.get_colored_name(),
        '과 ',
        coffee.get_colored_name(),
        '가 동시에 결승선을 통과하는 듯한 순간을 보았다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '친구를 뛰어넘고 싶다는 그 ',
        tachyon.teen_sex_title,
        '의 꿈을 이루어주기 위해.',
      ]);
      await era.printAndWait(
        '자신의 마음을 사로잡은 그 모습이 계속해서 눈앞에서 달릴 수 있게 하기 위해.',
      );
      await era.printAndWait([
        '최강의 ',
        tachyon.uma_sex_title,
        '와 최속의 속도를 결합시켰다.',
      ]);
      await era.printAndWait(
        '머릿속으로 이 순간에 해줄 멋진 말들을 수없이 떠올렸다.',
      );
      await era.printAndWait('하지만 입을 여는 순간…… 그 말들은 다시 막혀버리고 말았다.');
      await tachyon.say_and_wait('쮸웁…… 웁…… 쮸웁……');
      await era.printAndWait('이토록 많은 관중 앞에서, 이토록 대담한 입맞춤이라니.');
      await era.printAndWait([
        '……주변 사람들이 모두 경기장 중앙의 ',
        coffee.get_colored_name(),
        '에게 집중하고 있지 않았다면, 분명 또 다른 비난의 폭풍이 일었을 것이다.',
      ]);
      await era.printAndWait([
        '어떤 의미에서는 정말 ',
        tachyon.sex,
        '다운 행동이었다.',
      ]);
      era.println();
      await era.printAndWait([
        '얼마나 시간이 흘렀을까. ',
        you.get_colored_name(),
        '이(가) 자신의 생명의 위협을 느끼기 시작하고, 진정한 관객들이 ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 그제야 인간에게나 ',
        tachyon.uma_sex_title,
        '에게나 산소가 가장 중요하다는 사실을 떠올렸다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 얼굴은 산소 부족 때문인지, 아니면 어떤 감정 때문인지 발갛게 달아올라 있었다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        you.get_colored_name(),
        '이(가) 사랑해 마지않는, 광기 어린 빛을 내뿜는 암적색 눈동자는 여전히 ',
        you.get_colored_name(),
        '의 얼굴을 정면으로 응시하고 있었다.',
      ]);
      await era.printAndWait('그리고 나서……');
      await era.printAndWait([
        '이것은 ',
        you.get_colored_name(),
        '이(가) 처음으로 본, 세상에서 ',
        tachyon.get_colored_name(),
        '의 주법보다 더 빛나는 것이었다.',
      ]);
      await era.printAndWait([
        '그것은 바로 지금 ',
        tachyon.get_colored_name(),
        '의 얼굴에 핀 미소였다.',
      ]);
      era.drawLine({ content: '트레센 학원으로 돌아온 후' });
      await coffee.say_and_wait('……오늘 아리마에서 이긴 건, 저 맞죠?');
      await tachyon.say_and_wait([
        '그럼 당연하지, ',
        call_25,
        '. 레이스는 정말 멋졌네.',
      ]);
      await coffee.say_and_wait([
        '그럼…… 설명해 주겠나요? 왜 ',
        c_call_t,
        '가 승리자라도 된 양 의기양양한 표정으로 ',
        callname_25,
        ' 옆에 찰딱 붙어 있는 건가요?',
      ]);
      era.println();
      await era.printAndWait([
        '경기장에서 돌아온 이후로, ',
        tachyon.get_colored_name(),
        '은 계속해서 당신을 놓아주지 않았다.',
      ]);
      await era.printAndWait([
        '지금도 ',
        you.get_colored_name(),
        '을(를) 소파에 앉혀두고는 계속해서 당신의 왼팔을 껴안고 있었다.',
      ]);
      await era.printAndWait([
        '게다가 모든 것이 자신의 공로라는 듯한 득의양양한 눈빛으로 ',
        coffee.get_colored_name(),
        '를 바라보고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('흥흥~~ 뭐 어때, 뭐 어때서 그런가.');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 시대극 악역 같은 말투를 듣고',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 우선 온몸을 부르르 떨었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '가 충동적으로 무슨 일이라도 저지르지 않을까 걱정하던 찰나.',
        ]);
        await coffee.say_and_wait('————그럼 저도 할래요.');
        era.println();
        await era.printAndWait([
          '마치 오기라도 부리듯, ',
          coffee.get_colored_name(),
          '는 순식간에 소파로 비집고 들어와 ',
          you.get_colored_name(),
          '의 두 다리 사이에 자리를 잡고 앉았다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '이봐— ',
          call_25,
          ', 이건 너무 치사하잖아!',
        ]);
        await coffee.say_and_wait(
          '……치사하지 않아요. 그리고…… 치사하면 좀 어떤가요. 오늘의 승자는 분명 저인데……',
        );
        await tachyon.say_and_wait('제길, 나도 앉을 걸세!');
        era.println();
        await era.printAndWait([
          '아이들처럼 말다툼하는 두 사람을 보고,',
          you.get_colored_name(),
          '은(는) 자기도 모르게 쓴웃음을 지었다.',
        ]);
        await era.printAndWait('————어쩐지 갑자기 커피와 홍차를 섞어 마시고 싶어졌다.');
        await coffee.say_and_wait([
          '……맞다, ',
          callname_25,
          '……',
          c_call_t,
          '가 레이스 전에 했던 말…… 나중에 제대로 설명해 주실 거죠?',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '지리적 이점을 이용해 ',
          you.get_colored_name(),
          '의 귓가에 속삭이는 ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 쓴웃음이 얼굴 위에서 그대로 굳어버렸다.',
        ]);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 탐관오리 같은 미소를 지으며, ',
          you.get_colored_name(),
          '의 몸 위에 올린 손을 가만히 두지 못하고 꼼지락거렸다.',
        ]);
        await era.printAndWait('그리고……');
        era.println();
        await tachyon.say_and_wait('끄악————');
        era.println();
        await era.printAndWait([
          '突然、',
          tachyon.get_colored_name(),
          '은 마치 정체 모를 힘에 머리를 맞은 듯, 순식간에 기절해버리고 말았다.',
        ]);
        await coffee.say_and_wait('……정말이지.');
        await coffee.say_and_wait([
          '이제야 좀 조용해졌네요…… 그럼, ',
          callname_25,
          ', 커피 한 잔 드릴까요?',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 살짝 쓴웃음을 지으며, ',
          coffee.get_colored_name(),
          '에게 「부탁해」라고 답했다.',
        ]);
        await era.printAndWait(
          '하지만 어째선지 지금은 단순한 커피가 조금 너무 쓰게 느껴졌다.',
        );
        await era.printAndWait('겨울 햇살이 내리쬐는 트레이닝실 안에서, 왠지 지금 이 순간은.');
        await era.printAndWait('다른 무언가를 조금 더 섞는 것이 어울릴 것 같았다……');
        era.printButton('「……저기, 커피에 홍차를 섞어서 마셔 봐도 될까?」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '을 바라보던 눈에는 처음엔 약간의 불만이 떠올랐지만, 이내 무언가 떠올랐는지 난처한 표정으로 바뀌었다.',
        ]);
        await coffee.say_and_wait([
          '……오늘뿐이에요. 그리고 꼭 ',
          c_call_t,
          '에게는 비밀로 해야 해요. 안 그러면 ',
          tachyon.sex,
          '가 또 시끄럽게 굴 테니까.',
        ]);
        await era.printAndWait('커피와 홍차를 섞어 한 모금 마셨다.');
        await era.printAndWait(
          '커피의 쓴맛과 홍차의 떫은맛은 옅어졌지만, 향기는 줄어들지 않고 오히려 서로의 풍미를 더욱 돋보이게 했다.',
        );
        await era.printAndWait([
          '어째서인지 ',
          you.get_colored_name(),
          '은(는) 지금 이 맛이 딱 적당하다고 느꼈다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hot_spring_b
  hot_spring_b: (() => {
    const title = 'ほかの可能性';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} win_prix_lat アグネスタキオンがシニア年凱旋門賞を勝ったか
     * @param {number} chris_count クリスマスイベントで 1 を選んだ回数
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      love,
      win_prix_lat,
      chris_count,
    ) => {
      await tachyon.say_and_wait(
        'そういえば、まだこんなものがありましたわね……',
      );
      await tachyon.say_and_wait([
        '無駄にするのも惜しいですし、どうです、',
        callname,
        '？ 一緒に行きます？',
      ]);
      era.println();
      await era.printAndWait('偶然、実験室を整理していたとき');
      await era.printAndWait(['隅に隠されていた封筒を見つけた']);
      if (love >= 75) {
        await era.printAndWait('ん……？');
        await era.printAndWait('なぜか、違和感がひどく重い');
        await era.printAndWait([
          you.get_colored_name(),
          ' がよく見ると、すぐに尻尾が見えた',
        ]);
        await era.printAndWait(
          '大掃除で見つかったはずなのに、封筒には皺ひとつなく、むしろ丁寧にしまわれていたように見える',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が「見つけた」ものだと結びつけて、',
          you.get_colored_name(),
          ' はだいたい真相を察した',
        ]);
        era.println();
        await tachyon.say_and_wait(['ん？ ', callname, '？ どうしましたの？']);
        era.println();
        await era.printAndWait('……言わないでおこう');
        await era.printAndWait([
          'さもなくば、',
          tachyon.get_colored_name(),
          ' が羞恥で怒るのはまだいい。問題は',
          tachyon.sex,
          'が怒ったあと、夜の自分が絶対に楽をしないことだ',
        ]);
      }
      era.println();
      await era.printAndWait('ちょうど、急ぐ用事もほぼ片付いている');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' のURA決勝も、もう終わった',
      ]);
      await era.printAndWait('機会があるなら、一緒に行こう');
      era.drawLine();
      await era.printAndWait('十時間近く車に揺られたあと');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は、ようやく温泉宿に着いた',
      ]);
      era.println();
      await tachyon.say_and_wait('ふう……やっと着きましたわ');
      await tachyon.say_and_wait('ねえ……本当に、道を間違えていませんの？');
      era.printButton('「……地図には、たしかにここだと書いてある」', 1);
      await era.input();
      await era.printAndWait(['二人がためらうのも無理はない']);
      await era.printAndWait(
        '今いる場所は、原生林と呼んでも差し支えない深山だ',
      );
      await era.printAndWait('こんなところに、本当に温泉があるのか……');
      era.println();
      await tachyon.say_and_wait(
        '探しますわ……待ちなさい、ここ電波もないのですか！？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が携帯を出すと、深山には本当に電波がなかった',
      ]);
      await era.printAndWait('これは……まずい');
      era.println();
      await tachyon.say_and_wait([callname, '……いっそ、戻りません？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' も退散しようと考えた、まさにそのとき',
      ]);
      await era.printAndWait('茂みを一枚払うと、目の前に温泉宿が現れた');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' がフロントでチェックインしたあと、',
        you.get_colored_name(),
        ' はすぐ露天風呂へ入った',
      ]);
      await era.printAndWait(
        'まだ完全には暖まらない冬に、十数時間の車と山越え。本当に骨が折れた',
      );
      await era.printAndWait(
        'だが深山にも利点はある。宿には自分たち以外の客がおらず、いわば一人で宿を独占している',
      );
      await era.printAndWait('だから今の湯は、格別に気持ちいい');

      era.printButton('「……ん？」', 1);
      await era.input();
      await era.printAndWait('そのとき、脱衣所の暖簾に人の気配がした');
      await era.printAndWait(
        'ん？ 今だれもいないと言ったばかりなのに、ほかの客が来たのか？',
      );
      era.println();
      await tachyon.say_and_wait([callname, '？ 中にいますの？']);
      era.println();
      await era.printAndWait('……は？');
      era.printButton('「タキ……タキオン！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'おお、いましたわね。では、遠慮なく入りますわ',
      );
      era.println();
      await era.printAndWait([
        '言い終わるや、',
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' の返事を待たず、脱衣所の扉を押して入ってきた',
      ]);
      await era.printAndWait([
        '……',
        tachyon.sex,
        'がバスタオルを巻いているのを見て、',
        you.get_colored_name(),
        ' の胸は安堵か失望か、わからない',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ははは！ その顔、素っ裸で入ってくると思いましたの？',
      );
      await tachyon.say_and_wait('いくらなんでも、その程度の常識はありますわ');
      era.println();
      await era.printAndWait([
        '口調はからかっているようだが、',
        you.get_colored_name(),
        ' には',
        tachyon.sex,
        'が何か言いたげに感じられる',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '先ほどフロントの女将と少し話しまして……',
        tachyon.sex,
        '、私のことをまったく知りませんの',
      ]);
      await tachyon.say_and_wait([
        'というより、競走',
        tachyon.uma_sex_title,
        'の ',
        tachyon.get_colored_name(),
        ' を知りませんの',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が誤解しないよう、',
        tachyon.get_colored_name(),
        ' は急いで補足した',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' を見分けられないのは理解できる。誰もが',
        tachyon.uma_sex_title,
        'のレースに熱を上げて、選手一人ひとりの顔まで覚えているわけではない',
      ]);
      if (win_prix_lat) {
        await era.printAndWait([
          'だが競走',
          tachyon.uma_sex_title,
          'の ',
          tachyon.get_colored_name(),
          ' を知らない……世界の頂点、凱旋門賞を制した',
          tachyon.uma_sex_title,
          'を知らないのは、この世では確かに珍しい',
        ]);
      } else {
        await era.printAndWait([
          'だが競走',
          tachyon.uma_sex_title,
          'の ',
          tachyon.get_colored_name(),
          ' を知らないのは、この世では確かに珍しい',
        ]);
      }
      await era.printAndWait(
        'だが、これほど辺鄙な宿だと考えると、まあ普通かもしれないと思えてくる',
      );
      era.println();
      await tachyon.say_and_wait(
        '正直、驚きますわ……本当に、まったく知らない、見知らぬ人がいるなんて……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' が続けるのを待った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も一瞬は驚いた。だが ',
        tachyon.get_colored_name(),
        ' は名利を好む',
        tachyon.uma_sex_title,
        'ではない。名声など、',
        tachyon.sex,
        'が最も気にしないもののひとつだ',
      ]);
      await era.printAndWait(
        'わざわざこれを持ち出すなら、ほかの理由があるのだろう',
      );
      era.println();
      if (chris_count < 2) {
        await tachyon.say_and_wait('クリスマスの日のことは、覚えていますの？');
        era.println();
        await era.printAndWait([
          'クリスマス……',
          you.get_colored_name(),
          ' はあの小さな居酒屋を思い出した',
        ]);
        await era.printAndWait(
          'レース場の世界は、本当にあそことは無縁のようだった',
        );
        await era.printAndWait(
          'レースがなくても、あの人たちの人生は同じように回っている',
        );
        await era.printAndWait('今この瞬間も、あのときのまま');
        await era.printAndWait([
          '……当時、自分は ',
          tachyon.get_colored_name(),
          ' の出した可能性を拒んだ',
        ]);
        await era.printAndWait([
          'あのときの',
          tachyon.sex,
          'は、逃げるためにレース場を離れようとしていたからだ',
        ]);
        await era.printAndWait('では、今は？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は黙って、',
          tachyon.get_colored_name(),
          ' が言い終わるのを待った',
        ]);
        era.println();
        await era.printAndWait(['岸に座る', tachyon.sex, 'は、一言も発さない']);
        await era.printAndWait(
          '月明かりの下では、絵の中にいるように静かに見える',
        );
        await era.printAndWait([
          tachyon.sex,
          'を知り、',
          tachyon.get_colored_name(),
          ' という',
          tachyon.uma_sex_title,
          'を知る者なら、想像しがたい光景だ',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が、「静か」という言葉とこれほど似合うなんて',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……あの日の答え、まだもらっていませんわね',
        ]);
        await tachyon.say_and_wait('こういう可能性は、存在してよいのですか？');
        await tachyon.say_and_wait(
          '可能性を追い続けた科学者が、ある日ふと疲れた。きっかけもなく、',
        );
        await tachyon.say_and_wait(
          'もう十分だと思い、先の道は後に続く者へ委ねよう、と……',
        );
        await tachyon.say_and_wait(
          '大切に思う者、自分を大切にしてくれる者と、ただ一緒に暮らしたい……',
        );
        await tachyon.say_and_wait(
          'そんな者にとって……こういう場所は、とても向いていると思いませんの？',
        );
        era.println();
        await era.printAndWait([
          '誰も ',
          tachyon.get_colored_name(),
          ' を知らない場所',
        ]);
        await era.printAndWait('もう可能性を探らなくていい');
        await era.printAndWait(
          '立ち止まって一息つける。あるいは……このまま、穏やかに暮らすこともできる',
        );
        await era.printAndWait('そういう可能性……');
      } else {
        await tachyon.say_and_wait('この場所、静かですわね');
        era.println();
        await era.printAndWait('……風と湯の音以外、人の声ひとつない温泉宿');
        await era.printAndWait([
          'あまりの静けさは、別のときは怖くもあるだろう。だが ',
          tachyon.get_colored_name(),
          ' がいれば、この空間も耐えられないものではない',
        ]);
        era.println();
        await tachyon.say_and_wait('それに、広いですわ');
        era.println();
        await era.printAndWait(
          '……温泉宿なのだから当然だ。今は二人だけでも、もともと数百人の客を入れる造りだ',
        );
        era.println();
        await tachyon.say_and_wait('それに、人もいませんわ');
        era.println();
        await era.printAndWait('……こんな深山なのだから');
        await era.printAndWait([
          '脈絡のない言葉が続き、',
          you.get_colored_name(),
          ' はますます ',
          tachyon.get_colored_name(),
          ' が何を言いたいのかわからなくなる',
        ]);
        era.println();
        era.println();
        await tachyon.say_and_wait([
          'これほど広く、静かで、穏やかな場所……凱旋門賞の',
          tachyon.uma_sex_title,
          'と、',
          tachyon.sex,
          'のトレーナーくらい、収まるでしょう',
        ]);
        await tachyon.say_and_wait(
          'こうして……誰にも知られず、静かで穏やかに暮らす……それも、ひとつの可能性ですか？',
        );
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, 'の可能性']);
        await era.printAndWait([
          'それは ',
          tachyon.get_colored_name(),
          ' がいつも口にする言葉だ',
        ]);
        await era.printAndWait([
          'だが',
          tachyon.uma_sex_title,
          'は、一生走り続けられるわけではない',
        ]);
        await era.printAndWait([
          '競走',
          tachyon.uma_sex_title,
          'であっても、いずれレース場を離れ、速度の追求から離れる道へ進む',
        ]);
        era.println();
        await era.printAndWait([
          'では、その可能性は ',
          tachyon.get_colored_name(),
          ' にも当てはまるのか？',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' にとって、そんな可能性はあるのか？',
        ]);
        await era.printAndWait([
          '喫茶店の店主になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '研究の道へ進み、科学者になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '普通の生徒として進学し、大学生になり、社会へ出て会社員になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          'にもあるのか。普通の人と同じように、レース場を離れ、自分の暮らしを生きる日々',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '、私についてきてくれますの？',
        ]);
        await tachyon.say_and_wait(
          'もし……私が、そういう可能性を選んだとしたら',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' と一緒に、レースとも、',
          tachyon.uma_sex_title,
          'の速度とも無縁の、淡く穏やかな日常を送る',
        ]);
        await era.printAndWait('そんな暮らしは、きっととても美しいだろう');
        await era.printAndWait([
          '平凡な日々でも、',
          tachyon.get_colored_name(),
          ' がいれば、絶対に退屈しない',
        ]);
      }
      era.printButton('「悪くない……気がする」', 1);
      era.printButton('「もう少し……考えてみてもいいか」', 2);
      await era.input();
      await tachyon.say_and_wait('……ふふ');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の答えに、',
        tachyon.get_colored_name(),
        ' は多くを言わなかった',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は足で水面を撫で、波紋を幾重にも広げている',
      ]);
      await era.printAndWait([
        'ふと風が立ち、',
        you.get_colored_name(),
        ' は森全体がまた息を吹き返したのを聞いた',
      ]);
      await era.printAndWait(
        '葉がさらさら落ち、夜に眠っていた小鳥が驚いて飛び立つ',
      );
      await era.printAndWait([
        '夜の静けさは、',
        tachyon.sex,
        'の一時の撹乱で、一瞬にして破られたようだった',
      ]);
      era.println();
      await era.printAndWait([
        'こんな',
        tachyon.sex,
        'が、本当にあんな暮らしをできるのか？',
      ]);
      await era.printAndWait([
        'できるにせよできないにせよ、そこから生まれる可能性を考えて、',
        you.get_colored_name(),
        ' はふと興奮する',
      ]);
      await era.printAndWait([
        'だが、できるにせよできないにせよ、自分は必ず',
        tachyon.sex,
        'に付き添う。最後まで',
      ]);
      era.println();
      await tachyon.say_and_wait('ところで');
      era.println();
      await era.printAndWait('周囲が冬の夜の静けさと喧騒を取り戻したあと');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、ふと思い出したように口を開いた',
      ]);
      await era.printAndWait(
        '言いながら、バスタオルの裾をコッソリ巻き上げ、太腿の付け根近くまで上げる',
      );
      era.println();
      await tachyon.say_and_wait(
        'バスタオルを巻いたままなのは、少々申し訳ないですけれど……',
      );
      await tachyon.say_and_wait(
        'でも、下は本当に何も履いていませんのよ……見ます？',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は遊び心のある目で ',
        you.get_colored_name(),
        ' を見ながら、手でバスタオルの結び目をゆっくりほどいていく',
      ]);
      if (tachyon.sex_code !== 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は、タオルの下にほのかに見える、少し湿った隙間を見た',
        ]);
        await era.printAndWait('……たぶん、温泉水だろう');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はまだ湯に入っていないとわかっていても、',
          you.get_colored_name(),
          ' はそう自分を欺くことにした',
        ]);
      }
      era.printButton('「温泉の中は、まずいだろう……」', 1);
      era.printButton('「部屋に戻ってから、では……？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '確認済みですわ……この数日、予約は私たちだけ。だからここで何をしても問題ありませんの',
      );
      await tachyon.say_and_wait(
        'それに……誰も来ませんから、抵抗しようとしても無駄ですわよ♡',
      );
      await tachyon.say_and_wait('力を抜いて、楽しむことですわ');
      era.println();

      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait([
          'いつタオルを脱いだのか、裸で湯に入った ',
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に覆いかぶさり、湯に入る前から完全に濡れていた淡い隙間を、太い棒へ合わせる……',
        ]);
      } else {
        await era.printAndWait([
          'いつタオルを脱いだのか、裸で湯に入った ',
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に覆いかぶさり、',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hot_spring_b_sex_end
  async hot_spring_b_sex_end(tachyon, you) {
    await era.printAndWait([
      '事が済むと、',
      tachyon.get_colored_name(),
      ' が先に湯を出た',
    ]);
    if (tachyon.sex_code !== 1 && you.sex_code > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、満足げにやや膨らんだ腹を撫でる',
        tachyon.sex,
        'の姿と、太腿を伝って流れ落ちる、温泉水か何かの透明な液体を見る',
      ]);
      await era.printAndWait(
        '一文字だったものが双唇のように開き、唇の間にさっき盗み食いした白い液が残る穴口も',
      );
      await era.printAndWait('股間が、また硬くなった');
      await era.printAndWait([tachyon.sex, 'は察したように、尻を少し揺する']);
    }
    await era.printAndWait('部屋に戻れば、また一戦になりそうだ……');
    await era.printAndWait([
      'その前に、',
      you.get_colored_name(),
      ' は空を見上げ、戦いの前の最後の静けさを味わう',
    ]);
  },

  // [번역 완료] palace_b
  palace_b: (() => {
    const title = 'Plan B의 미래';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와 함께한 3년이 끝났다',
      ]);
      era.println();
      await era.printAndWait([
        '졸업식이 끝난 뒤, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 장래 계획도 물었다',
      ]);
      await era.printAndWait([
        '「또 만날 수 있을 걸세, ',
        callname,
        '」',
        tachyon.sex,
        '은(는) 그 말만 남겼다',
      ]);
      era.println();
      await era.printAndWait([
        '그리고 ',
        tachyon.get_colored_name(),
        '은(는) 떠났다',
      ]);
      await era.printAndWait('트레센 학원을 떠나고, 이 나라까지 떠났다');
      await era.printAndWait('마치 세상에서 사라진 것처럼');
      await era.printAndWait([
        '지금 ',
        tachyon.sex,
        '은(는) 대체 어디에 있을까',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 그런 생각을 해 본 적이 있다',
      ]);
      await era.printAndWait('밥은 제대로 먹고 있을까');
      await era.printAndWait('잠은 제대로 자고 있을까');
      await era.printAndWait([
        '혼자 지내는 ',
        tachyon.sex,
        '이(가) 정말 제 몸을 제대로 돌볼 수 있을까',
      ]);
      era.println();
      await era.printAndWait(
        '상대는 이미 성인인데도 걱정을 멈출 수 없었다',
      );
      await era.printAndWait('하지만…… 사실은 스스로도 알고 있다');
      await era.printAndWait('그런 걱정은 쓸데없다는 것을');
      await era.printAndWait([tachyon.get_colored_name(), '은(는) 천재다']);
      await era.printAndWait('틀림없이 타고난 천재다');
      await era.printAndWait([
        '그런 ',
        tachyon.sex,
        '이라면 어디에 있든 반드시 빛을 발할 것이다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 행방도 알 수 없는 ',
        tachyon.get_colored_name(),
        '을(를) 향한 기대를 품고 집 문을 열었다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오호, ',
        callname,
        ', 오늘은 일찍 돌아왔군',
      ]);
      era.println();
      await era.printAndWait([
        '소파에 드러누워 다리를 꼬고 있는 게으름뱅이 ',
        tachyon.uma_sex_title,
        '을(를) 무시한다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '맞다, 저녁 식사부터……',
        callname,
        ', 오늘은 자네 차례라네～～',
      ]);
      era.println();
      await era.printAndWait([
        '마음속에 그리던 천재 ',
        tachyon.uma_sex_title,
        ', 초광속의 입자 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '은(는) 틀림없이 세계 어딘가에서 ',
        tachyon.uma_sex_title,
        '의 미래와 관련된 연구를 계속하고 있으리라',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '아, 맞다. 오늘 새 메일이 왔더군…… 트레이너 연수회…… 3일이나!? 삭제, 삭제. 이런 데 참가해서 무슨 의미가 있겠나',
      );
      era.println();
      await era.printAndWait(
        '절대 아니다. 졸업한 뒤에도 학원의 빈 교실에 눌러앉아 있을 리는 없다',
      );
      await era.printAndWait(
        '사는 곳이라면, 졸업하던 날 짐을 들고 제멋대로 내 집에 굴러들어 왔다',
      );
      await era.printAndWait('지금은 아예 내 집을 자기 영역으로 삼았다');
      await era.printAndWait([
        '지금도 멋대로 사생활을 침범하는 이 게으름뱅이 ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '？ ',
        callname,
        '～～～～나 좀 상대해 주게나～～～～',
      ]);
      await you.say_and_wait('그러니까 타키온은 왜 내 집에 눌러앉아 있는 거냐!');
      era.println();
      await era.printAndWait('결국 더는 무시할 수 없었다');
      await era.printAndWait(
        '첫날부터 품었던 의문이었다. 상대가 너무 당연하다는 듯 굴어서 말하지 못했지만, 마침내 입 밖으로 꺼냈다',
      );
      era.println();
      await tachyon.say_and_wait('에에—— 무슨 문제라도 있나?');
      await tachyon.say_and_wait(
        '게다가 집안일을 전혀 안 하는 것도 아니잖나. 쓸고 닦는 청소도 하고, 저녁 식사도 분담하고 있네만～～',
      );
      era.println();
      await era.printAndWait([
        '확실히 지금의 ',
        tachyon.get_colored_name(),
        '이(가) 예전보다 나아진 점이 있다면',
      ]);
      await era.printAndWait('생활 능력이 향상됐다는 것이다');
      await era.printAndWait([
        '무엇이든 내게 대신 시키던 예전의 ',
        tachyon.get_colored_name(),
        '와는 다르다',
      ]);
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '은(는) 확실히 발전했다',
      ]);
      await era.printAndWait(
        '식후 설거지부터 평소의 쓸고 닦는 청소까지 거든다',
      );
      await era.printAndWait('아주 사소한 차이라도 분명한 발전이다……');
      await era.printAndWait(
        '그런데 왠지 집안일을 시작한 딸을 보는 늙은 아버지처럼 은근한 안도감이 든다',
      );
      await era.printAndWait(
        '아니, 또 말이 샐 뻔했다…… 중요한 건 왜 여기서 살고 있느냐는 거다!',
      );
      era.println();
      await tachyon.say_and_wait(
        '그런 사소한 일은 신경 쓰지 말게. 괜찮아, 괜찮네',
      );
      await tachyon.say_and_wait('오호, 아니면 돈 문제인가?');
      await tachyon.say_and_wait(
        '확실히 생활을 분담하려면 집안일만으로는 안 되겠지…… 생활비도 나눠 내야겠군',
      );
      await tachyon.say_and_wait('그럼 이번 달 생활비부터 분담하겠네, ');
      await tachyon.say_and_wait(
        '다행히 상금은 둘째치고 예전에 출원했던 특허가 있지…… 특허료라면 충분할 걸세',
      );
      era.println();
      await era.printAndWait(
        '문제는 돈이 아니야…… 아니, 돈도 중요하지. 하지만 지금 중요한 건 돈이 아니라고',
      );
      await era.printAndWait([
        '애초에……',
        tachyon.get_colored_name(),
        '은(는) 진학하지 않는 건가? 유학 같은 건……?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '이보게, ',
        callname,
        ', 형식에 맞춘 진학이 내게 무슨 도움이 된다고 생각하나?',
      ]);
      await tachyon.say_and_wait(
        '그런 집단 교육은 자기 진로를 정하지 못한 평범한 사람에겐 편리하겠지. 하지만 나 같은 천재에게는 스스로 내린 판단이 최선의 선택일세',
      );
      era.println();
      await era.printAndWait('인정하기 싫지만 예상한 그대로다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 확실히 천재다',
      ]);
      await era.printAndWait([
        '나에게는 ',
        tachyon.sex,
        '의 선택을 의심할 자격이 없을지도 모른다',
      ]);
      await era.printAndWait(
        '그래도 다른 문제도 있지 않나. 예를 들면…… 가족이라든가……?',
      );
      era.println();
      await tachyon.say_and_wait([
        '이보게, ',
        callname,
        '……난 이미 성인일세. 법적으로도 완전한 행위능력자지. 사는 곳을 스스로 고를 권리가 있지 않겠나?',
      ]);
      await you.say_and_wait(
        '법률이 남의 집을 자기 거처로 삼는 행위까지 보장해 주지는 않을 것 같다',
      );
      await tachyon.say_and_wait(
        '뭐, 공간은 넓으니까. 내가 조금 끼어 산다고 큰 문제는 없잖나',
      );
      await tachyon.say_and_wait('……게다가 자네, 나를 내쫓을 수는 있겠나?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 장난기 어린 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다',
      ]);
      await era.printAndWait('언제나 이렇다');
      await era.printAndWait('뱀에게 노려지는 모르모트처럼');
      await era.printAndWait('모든 것을 삼키는 심연처럼');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에게 그 눈동자로 응시당하면 반박할 말이 나오지 않는다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '나를 이렇게 사랑하는 자네가 정말로 나를 내쫓을 수 있겠나?',
      );
      await tachyon.say_and_wait(
        '내게 이렇게 사랑받는 자네가 정말로 내 사랑을 거부할 셈인가?',
      );
      era.println();
      await era.printAndWait('입안이 바싹 말랐다');
      await era.printAndWait([
        '어느새 ',
        tachyon.get_colored_name(),
        '은(는) 바로 눈앞까지 다가와 있었다',
      ]);
      await era.printAndWait(['국화상 때의 ', tachyon.sex, '와 같았다']);
      await era.printAndWait('하지만 그때와 달리 이번에는 분명한 예감이 있다');
      await era.printAndWait('『잡아먹힌다』는 실감');
      era.println();
      await era.printAndWait('아아');
      await era.printAndWait('결국 이것 또한 스스로 선택한 길이겠지');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 온천 여행 때 ',
        tachyon.get_colored_name(),
        '와 나눈 대화를 떠올렸다',
      ]);
      era.println();
      await era.printAndWait([
        '그때 나는 결심했다. ',
        tachyon.sex,
        '이(가) 마지막에 어떤 가능성을 선택하든 반드시 끝까지 따라가겠다고',
      ]);
      await era.printAndWait('심연을 들여다보는 자는 심연에 삼켜진다');
      await era.printAndWait([
        you.get_colored_actual_name(),
        '은(는) 아마 평생 ',
        tachyon.sex,
        '의 눈동자에 깃든 심연에서 벗어날 수 없을 것이다',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] prix_lat_win_b
  prix_lat_win_b: (() => {
    const title = '한계에 머무르다';
    /**
     * Plan B 専用。マンハッタンカフェは同時出走できない
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 세계의 정상에 올랐다.',
      ]);
      await era.printAndWait([
        '일본에서 온 ',
        tachyon.uma_sex_title,
        '이(가) 세계 기록을 경신했다.',
      ]);
      await era.printAndWait(
        '자신의 두 눈을 태우던 그 달리기가 처음이자 마지막으로 세상에서 가장 눈부신 빛을 내뿜었다.',
      );
      era.println();
      await era.printAndWait([
        '레이스를 마치고 선수 대기실로 돌아온 ',
        tachyon.get_colored_name(),
        '은(는) 말수가 적었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 늘 그랬듯 먼저 ',
        tachyon.sex,
        '의 다리 상태를 살폈다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……이제 필요 없겠지, ', callname]);
      await tachyon.say_and_wait('자네도 알고 있을 걸세.');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 아무 말도 하지 않았다.']);
      await era.printAndWait('결말은 이미 알고 있다. 그러면서도 기적을 기다리고 만다.');
      await era.printAndWait('하지만……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 말없이 그저 ',
        tachyon.get_colored_name(),
        '의 다리를 약으로 식혀 부담을 덜어 주었다.',
      ]);
      await era.printAndWait([
        '주최 측에서 시상 준비가 끝났다는 연락이 올 때까지 기다린 뒤, 두 사람은 천천히 무대로 향했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그래서, 어떤가? 이번 레이스에 만족했나?',
      );
      era.println();
      await era.printAndWait('모든 것을 쏟아붓고 두 다리를 불태웠다.');
      await era.printAndWait('그렇게 얻어 낸 승리.');
      await era.printAndWait(
        '사람들을 매료시키지 않을 리 없다. 열광하게 하지 않을 리 없다.',
      );
      era.println();
      await era.printAndWait('나는 틀림없이 좋은 트레이너는 아니다.');
      await era.printAndWait([
        '트레이너라면 이성적으로 ',
        tachyon.uma_sex_title,
        '을(를) 위해 ',
        tachyon.couple_title,
        '에게 최선의 선택을 찾아 줬어야 한다.',
      ]);
      await era.printAndWait([
        '하지만 나는 그저 가장 아름답고 강한 달리기를 보고 싶다는 이유로 담당 ',
        tachyon.uma_sex_title,
        '에게 이런 일을 시켰다.',
      ]);
      await era.printAndWait(
        '다행히 지금의 질문에는 트레이너로서 대답할 필요가 없다.',
      );
      await era.printAndWait([
        '그저 한 명의 팬으로서, ',
        tachyon.get_colored_name(),
        '의 가장 광적인 신봉자로서.',
      ]);
      era.printButton('「내가 본 것 중 가장 대단한 레이스였어.」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 아침 햇살 같은 미소를 지었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 빛보다 희미하지만 훨씬 부드럽고 따뜻한 빛.',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('다리가 둔하게 욱신거린다.');
      await tachyon.print_and_wait('발뒤꿈치에는 날카로운 통증이 느껴진다.');
      await tachyon.print_and_wait('하지만 그보다 더 크게 남은 것은 아쉬움이다.');
      era.println();
      await tachyon.print_and_wait('알고 있던 일이네. 하지만 역시……');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 끝내 한계를 넘지 못했다.',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '실망할 일은 아니네. 처음 세운 계획대로 진행됐을 뿐이니까.',
      );
      era.println();
      await you.say_as_passer_by_and_wait('記者A', [
        '타키온 ',
        tachyon.adult_sex_title,
        '! 오늘 개선문상 우승을 축하드립니다! 게다가 이번에는 역대 기록까지 경신하셨습니다!',
      ]);
      await you.say_as_passer_by_and_wait(
        '記者A',
        '이번 승리에 관해 경쟁 상대나 일본에 있는 가까운 분들에게 한 말씀 부탁드립니다.',
      );
      era.println();
      await tachyon.say_and_wait('……후후.');
      await tachyon.say_and_wait('그럼 마지막으로…… 한마디만 하겠네.');
      await you.say_as_passer_by_and_wait('記者A', '最後……？');
      await tachyon.say_and_wait([
        '나는 모든 ',
        tachyon.uma_sex_title,
        '에게 저마다의 가능성이 있다고 믿고 있네.',
      ]);
      await tachyon.say_and_wait('아무리 높은 벽이라도 반드시 넘어설 수 있지.');
      await tachyon.say_and_wait(
        '그러니…… 이번 기록은 시작일 뿐, 끝이 아닐세.',
      );
      await tachyon.say_and_wait([
        '앞으로는 훨씬 더 많은 ',
        tachyon.uma_sex_title,
        '들이 세계무대에 서서…… 한계를 넘어서겠지.',
      ]);
      await tachyon.say_and_wait(
        '나는 그렇게 믿고 있네. 여러분에게도, 그리고…… 기대하고 있겠네.',
      );
      era.println();
      await tachyon.print_and_wait(
        '뒤따라올 이들에게 기대를 품은 말이면서도, 자신을 한계의 기준으로 내세우는 오만한 선언이었다.',
      );
      await tachyon.print_and_wait([
        '무대 아래 있는 이들은 투지를 불태우며 무대 위의 ',
        tachyon.sex,
        '을(를) 바라보았다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.sex,
        '의 시선은 지금도 관중석 어딘가에 숨어 있는 그 사람을 향하고 있었다.',
      ]);
      await tachyon.print_and_wait('무대는 준비됐다.');
      await tachyon.print_and_wait('전초전은 끝났네.');
      await tachyon.print_and_wait('다음에는 자네가 이것을 넘어설 수 있겠나?');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 말없는 도전장을 던졌다.',
      ]);
      era.drawLine();
      await era.printAndWait(['개선문상은 끝났다.']);
      await era.printAndWait([
        '레이스가 끝난 뒤 ',
        you.get_colored_name(),
        '은(는) 곧바로 ',
        tachyon.get_colored_name(),
        '을(를) 병원으로 데려가 검사를 받게 했다.',
      ]);
      await era.printAndWait('예상한 결과인 동시에 예상 밖의 결과였다.');
      await era.printAndWait('예상대로 은퇴를 피할 수 없는 다리 부상이었다.');
      await era.printAndWait('뜻밖인 것은 부상의 정도가 생각만큼 심하지 않았다는 점이다.');
      await era.printAndWait('달릴 수 없게 된 것 외에는 더 심각한 증상이 없었다.');
      await era.printAndWait([
        '……하지만 ',
        tachyon.uma_sex_title,
        '에게 이보다 더 무거운 고통은 없을 것이다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 은퇴 소식은 순식간에 전 세계를 뒤흔들었다.',
      ]);
      await era.printAndWait([
        '담당 트레이너인 ',
        you.get_colored_name(),
        '도 전 세계의 주목을 받았고, 그 속에는 불만과 험담도 뒤섞여 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin_end_b
  takz_kin_end_b: (() => {
    const title = '한계를 향해';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await tachyon.say_and_wait(['하아…… 하아…… 카……', call_25, '……！']);
      era.println();
      await tachyon.print_and_wait('전력을 다해 짜낸 외침');
      await tachyon.print_and_wait('레이스 도중 말을 건다는 것은');
      await tachyon.print_and_wait(
        '실험의 관점에서나 경주의 관점에서나 지극히 상식을 벗어난 행동일세.',
      );
      await tachyon.print_and_wait([
        '그럼에도 ',
        tachyon.get_colored_name(),
        '은(는) 목소리를 높였다.',
      ]);
      era.println();
      await tachyon.print_and_wait('마지막 직선에 들어서기 직전, 최후의 스퍼트를 시작하기 직전');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이(가) 던진 상식을 벗어난 선언이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('따라잡을 수 있다면…… 한번 해 보게!');
      era.println();
      await tachyon.print_and_wait(['앞서 달리는 ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait('뒤를 바짝 쫓는 사냥개를 향해 도발을 던졌다.');
      era.drawLine();
      await coffee.say_and_wait('……退屈');
      await coffee.say_and_wait('그런 짓을 해서 누가 기뻐하겠어?');
      await coffee.say_and_wait(
        '양보받지 않아도 난 정면에서 널 넘어서겠어…… 그리고 친구들도.',
      );
      era.println();
      await tachyon.print_and_wait(
        '레이스 전의 잘못을 털어놓았더니 예상대로 호되게 야단을 맞았네.',
      );
      await tachyon.print_and_wait('하지만…… 뭐, 덕분에 훨씬 홀가분해졌지.');
      await tachyon.print_and_wait([
        callname,
        '처럼 무조건 긍정해 주는 편이 오히려 걱정될 지경이니까.',
      ]);
      await tachyon.print_and_wait('그래서 오늘은 망설임 없이 전력으로 달릴 수 있네.');
      era.println();
      await tachyon.print_and_wait('상대를 향한 경의');
      await tachyon.print_and_wait('스스로를 향한 갈망');
      await tachyon.print_and_wait('응원해 준 이들에 대한 보답');
      era.println();
      await tachyon.say_and_wait([
        '이 모든 것을 바치는 ',
        tachyon.get_colored_name(),
        '의 일본 국내 마지막 무대일세.',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '! 아니면 ',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '! 지금 두 사람이 결승선에 들어옵니다——————————!',
      ]);
      era.println();
      await tachyon.print_and_wait('누가 이겼는지');
      await tachyon.print_and_wait('누가 졌는지');
      await tachyon.print_and_wait('아니, 이젠 어느 쪽이든 상관없다.');
      era.println();
      await tachyon.print_and_wait('이걸로 모든 것이 끝났다.');
      await tachyon.print_and_wait([
        '오늘의 레이스에서 ',
        tachyon.get_colored_name(),
        '은(는) 자신의 최선을 다했다.',
      ]);
      await tachyon.print_and_wait('다음 레이스도 이미 사정거리 안에 들어왔네.');
      era.drawLine();
      era.printButton('「강해, 빨라! 카페도…… 타키온도……!」', 1);
      era.printButton(
        '「너희들의 트레이너로 있을 수 있어서…… 정말…… 다행이야!」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '후후, 갑자기 그렇게 감상적인 말을 하다니. 마치 대단원의 막을 내리는 것 같군. 하지만 우리 레이스는 아직 끝나지 않았네, ',
        callname,
      ]);
      era.println();
      await era.printAndWait('아, 맞다.');
      era.println();
      await tachyon.say_and_wait('……기자회견이 곧 시작될 걸세.');
      era.println();
      await era.printAndWait([
        '上半期最強',
        tachyon.uma_sex_title,
        '의 총결산이니, 이런 레이스에 기자들이 몰리지 않을 리 없다.',
      ]);
      era.print('이 자리에서 앞으로의 목표를 발표하자.');
      era.printButton('「가라, 타키온.」', 1);
      era.printButton('「난 언제까지나 네 뒤에 있을 거야.」', 2);
      await era.input();
      await tachyon.say_and_wait('……그래, 다녀오겠네.');
      era.drawLine();
      await tachyon.say_and_wait([
        '그런 까닭에 다음 출전 예정은 세계 최고의 무대, 개선문상일세. 이상, 기자 여러분 질문은?',
      ]);
      era.println();
      await era.printAndWait('물이 끼얹어진 듯한 침묵');
      await era.printAndWait([
        '회견 전부터 오늘 ',
        tachyon.get_colored_name(),
        '진영에서 중대 발표를 한다고 들었던 기자들조차',
      ]);
      await era.printAndWait('그 무게에 저도 모르게 숨을 삼켰다.');
      era.println();
      await tachyon.say_and_wait('———질문이 없다면 오늘 취재는 여기까지……');
      era.println();
      await era.printAndWait(
        '그제야 기자들은 꿈에서 깨어난 듯 일제히 질문을 쏟아 내기 시작했다.',
      );
      await era.printAndWait(
        '하지만 전개가 너무 갑작스러워 준비한 질문을 하나도 쓰지 못하고 그 자리에서 새 화제를 찾는 모습이 역력했다.',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 당황하지 않고 담담하게 대답해 나갔다.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        '記者A',
        '왜 이렇게 갑작스럽게 결정하셨나요? 충분히 숙고한 뒤 내린 출전 결정입니까?',
      );
      await tachyon.say_and_wait(
        '트레이너 군과 말다툼한 끝에 내린 결정일세. 몇 달 전에 이미 정했지. 갑작스러운 일도 뜬금없는 일도 아니네. 그동안 언론에 알리지 않았을 뿐일세.',
      );
      await you.say_as_passer_by_and_wait('記者B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '이(가) 지난해 이유를 밝히지 않고 트윙클 시리즈를 중단했던 까닭은……? 올해 개선문상 출전은 설마……',
      ]);
      await tachyon.say_and_wait([
        '그 점은 말씀드릴 수 없지만 한 가지는 보장하겠네. 올해 개선문상에는 반드시 출전할 걸세.',
      ]);
      await you.say_as_passer_by_and_wait('記者B', [
        '……저기, 오늘 레이스는 정말 훌륭했습니다.',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '에게서 경쟁 상대인 ',
        coffee.get_colored_name(),
        '에게 하고 싶은 말은 없습니까?',
      ]);
      await tachyon.say_and_wait(
        '음…… 그렇군. 그렇다면 『자네도, 자네 친구들도, 개선문에서 한꺼번에 뛰어넘겠네』 정도면 되겠나?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무대 뒤에서 기자회견장에 별처럼 빛나는 ',
        tachyon.sex,
        '을(를) 지켜보고 있었다.',
      ]);
      await era.printAndWait(
        '한때 빛을 잃었던 광자가 지금은 누구보다 눈부신 빛을 내뿜고 있었다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] tenn_spr_end
  tenn_spr_end: (() => {
    const title = '알고 있어요';
    /**
     * Plan B かつマンハッタンカフェ同時出走
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} tachyon_win アグネスタキオンが勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tachyon_win,
    ) => {
      await era.printAndWait('아아, 그런 거였구나');
      era.println();
      await era.printAndWait(['天皇賞（春）']);
      await era.printAndWait('마지막 직선에서 경쟁하는 두 사람을 보며');
      await era.printAndWait('드디어 깨달았다');
      era.println();
      await era.printAndWait([
        '왜 처음부터 ',
        tachyon.get_colored_name(),
        '의 성과를 발판으로 삼을 것임을 알면서도 ',
        coffee.get_colored_name(),
        '을(를) 지원하는지',
      ]);
      await era.printAndWait([
        '왜 그날 밤 ',
        tachyon.get_colored_name(),
        '의 대답에 기뻐했던 것인지',
      ]);
      era.println();
      await era.printAndWait([
        '광속을 뛰어넘는 질주와 칠흑의 사냥개처럼 그 앞선 빛을 물어뜯는 주행을 보며 비로소 이해했다',
      ]);
      await era.printAndWait([
        '처음으로 ',
        tachyon.couple_title,
        '이(가) 달리는 모습을 본 순간부터',
      ]);
      await era.printAndWait([
        '나는 이미 깊이 ',
        tachyon.couple_title,
        '',
        era.get('love:25') >= 75 && love >= 75 ? '' : '의 달리기를',
        '사랑하고 있었던 것이다',
      ]);
      era.println();
      await era.printAndWait(['빛처럼 번쩍이는 ', tachyon.get_colored_sex()]);
      await era.printAndWait(['그림자처럼 새까만 ', coffee.get_colored_sex()]);
      await era.printAndWait(['처음부터 이렇게 단순한 일이었다']);
      era.println();
      await era.printAndWait('아이처럼 천진한 소망');
      await era.printAndWait(
        '누가 강하고 약한지 가리고 싶은 게…… 아니, 그저 같은 무대에서 맞붙는 모습을 보고 싶었던 것이다',
      );
      await era.printAndWait([
        '강하든 약하든 상관없다. 그저 ',
        tachyon.couple_title,
        '이(가) 달리는 모습을 보고 싶다',
      ]);
      era.println();
      await era.printAndWait('결승선 앞 이 직선 주로가 영원히 끝나지 않았으면');
      await era.printAndWait([
        '영원히 ',
        tachyon.couple_title,
        '이(가) 코스를 질주하는 이 광경을 바라볼 수만 있다면',
      ]);
      await era.printAndWait([
        '정신을 차리고 보니 ',
        you.get_colored_name(),
        '은(는) 울고 있었다',
      ]);
      era.println();
      await era.printAndWait('빛인가, 그림자인가');
      await era.printAndWait('모든 것을 비추는 빛이 그림자의 도피처를 빼앗을 것인가');
      await era.printAndWait('모든 것을 집어삼키는 어둠이 빛을 삼켜 버릴 것인가');
      era.println();
      await you.say_as_passer_by_and_wait('実況', [
        '마지막 순간까지 서로 물고 늘어지는 대접전!',
        coffee.get_colored_name(),
        '! 아니면 ',
        tachyon.get_colored_name(),
        '! 초광속의 도주인가, 마천루의 추격인가! 지금 결승선을 통과한 것은……!',
      ]);
      era.drawLine();
      if (tachyon_win) {
        await tachyon.say_and_wait('………이겼……나요?');
      } else {
        await tachyon.say_and_wait('………졌……나요?');
      }
      era.println();
      await tachyon.print_and_wait('이해할 수 없군요');
      await tachyon.print_and_wait('불합리해요');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 출전은 ',
        coffee.get_colored_name(),
        '을(를) 성공시키기 위한 것',
      ]);
      await tachyon.print_and_wait([
        coffee.sex,
        '을(를) 정점에 올리기 위해 레이스에서 ',
        coffee.sex,
        '이(가) 가장 힘겨워하는 약점을 자극하여 ',
        coffee.sex,
        '에게 발전을 강요한다',
      ]);
      await tachyon.print_and_wait([
        '그러고는…… 조용히 뒤로 물러나 ',
        tachyon.sex,
        '에게 승리라는 보상을 안겨 준다',
      ]);
      if (tachyon_win) {
        await era.printAndWait('結果');
        await you.say_as_passer_by_and_wait('実況', [
          tachyon.get_colored_name(),
          '! 초광속을 넘어 요도 언덕에 선 방패의 영광은 ',
          tachyon.get_colored_name(),
          '에게!',
        ]);
      } else {
        await tachyon.print_and_wait('분명 그럴 예정이었는데, 그렇다면……');
        era.println();
        await you.say_as_passer_by_and_wait('実況', [
          coffee.get_colored_name(),
          '! 초광속을 집어삼키고 요도 언덕에 선 방패의 영광은 ',
          coffee.get_colored_name(),
          '에게!',
        ]);
        era.println();
        await tachyon.print_and_wait('왜…… 지금 이렇게까지…… 분한 것입니까!');
      }
      era.println();
      await tachyon.print_and_wait('처음에는 제대로 되어 있었습니다');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 장점이자 단점은 그 안정성입니다',
      ]);
      await tachyon.print_and_wait([
        '극단적인 안정성 덕분에 ',
        tachyon.sex,
        '은(는) 지구력이 가장 중요시되는 장거리에서 늘 우위를 차지할 수 있습니다',
      ]);
      await tachyon.print_and_wait([
        '하지만 너무 안정적인 탓에 ',
        tachyon.sex,
        '에게는 승부처에서 폭발력이 부족합니다',
      ]);
      await tachyon.print_and_wait([
        '그래서 ',
        tachyon.sex,
        '의 편안한 주행 범위를 무너뜨리고 ',
        tachyon.sex,
        '에게 한계 돌파를 요구했습니다',
      ]);
      era.println();
      await tachyon.print_and_wait('그런데 예상을 벗어나 ');
      await tachyon.print_and_wait([
        tachyon.sex,
        '은(는) 리듬을 되찾았을 뿐 아니라 한층 더 진화하여 주행을 완성했습니다',
      ]);
      await tachyon.print_and_wait(
        '여기까지 왔다면 이번 레이스의 목적은 이미 달성됐어야 합니다',
      );
      await tachyon.print_and_wait('그런데……');
      era.println();
      await tachyon.print_and_wait('이유는 생각할 필요조차 없습니다');
      await tachyon.print_and_wait('그날 밤 후배와 나눴던 대화가 주된 원인입니다');
      await tachyon.print_and_wait([
        '하지만…… 후배 ',
        tachyon.sex,
        '에게는 잘못이 없습니다',
      ]);
      await tachyon.print_and_wait([
        '문제는 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.print_and_wait(
        '마음속에 망설임이 없었다면 그때 정확히 대답할 수 있었을 겁니다',
      );
      await tachyon.print_and_wait('적당히 넘기는 말이든 솔직한 답변이든');
      await tachyon.print_and_wait('마음에 의심이 없었다면 입 밖으로 꺼낼 수 있었을 테지요');
      era.println();
      await tachyon.say_and_wait('저는……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 결국 한 명의 ',
        tachyon.uma_sex_title,
        '입니다',
      ]);
      await tachyon.print_and_wait('달리고 싶은 본능과 이기고 싶은 본능에는 저항할 수 없습니다');
      await tachyon.print_and_wait([
        tachyon.uma_sex_title,
        '의 가능성에는 다른 길도 얼마든지 있는데',
      ]);
      await tachyon.print_and_wait('굳이 코스에 집착할 필요는 없습니다');
      await tachyon.print_and_wait([
        '그럼에도 ',
        call_25,
        '을(를) 선택하고, 다른 이가 달리는 모습을 고통스럽게 지켜보는 길밖에 남지 않더라도 다른 선택을 하지 않은 이유',
      ]);
      await tachyon.print_and_wait([
        '그건……',
        tachyon.get_colored_name(),
        '이(가) 달리기를 사랑하기 때문입니다',
      ]);
      era.println();
      await tachyon.print_and_wait('거기까지 생각하고 문득 어깨에서 힘이 빠졌습니다');
      await tachyon.print_and_wait(
        '아무리 그럴싸한 핑계와 이유로 감추어도 마찬가지입니다',
      );
      await tachyon.print_and_wait([
        '아무리 저항해도 ',
        tachyon.uma_sex_title,
        '의 본능에서는 벗어날 수 없습니다',
      ]);
      await tachyon.print_and_wait('……벗어나고 싶지도 않고요');
      await tachyon.print_and_wait([
        '가장 빠르고 가장 강한 ',
        tachyon.uma_sex_title,
        '이(가) 되고 싶습니다',
      ]);
      await tachyon.print_and_wait('라이벌과 마지막 순간까지 맞붙어 사력을 다해 싸우고 싶습니다');
      await tachyon.print_and_wait('저 자신을…… 증명하고 싶습니다');
      era.println();
      await tachyon.print_and_wait([
        '……하지만 그러면 어떻게 ',
        you.sex,
        '의 얼굴을 보아야 할까요',
      ]);
      await tachyon.print_and_wait(
        '줄곧 도와주고 언제나 곁에서 지지해 준 사람',
      );
      await tachyon.print_and_wait(['어떤 표정으로 ', you.sex, '을(를) 만나야 할까요']);
      await tachyon.print_and_wait(['……', you.sex, '분명 화를 낼 겁니다']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '와(과) ',
        coffee.get_colored_name(),
        '의 전속 트레이너로서',
      ]);
      await tachyon.print_and_wait([
        '처음에 정한 계획은 레이스를 ',
        call_25,
        '에게 양보하고 자신은 뒤로 물러나는 것',
      ]);
      era.println();
      await tachyon.print_and_wait('結果……');
      if (tachyon_win) {
        await tachyon.print_and_wait('이 통제 불가능하고 불안정한 문제아는');
        await tachyon.print_and_wait(
          '순간의 열기에 휩쓸려 모든 것을 엉망으로 만들었습니다',
        );
      } else {
        await tachyon.print_and_wait([
          '이제 와서 ',
          you.sex,
          '에게 사실은…… 아직 달리고 싶다고 말하라는 건가요',
        ]);
        await tachyon.print_and_wait('사람을 우롱하는 데도 정도가 있습니다');
      }
      era.println();
      await tachyon.print_and_wait('정신을 차렸을 때는 ');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 코스에서 달아난 뒤였습니다',
      ]);
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 선수 대기실로 돌아오지 않았습니다',
      ]);
      await era.printAndWait(['경마장 어디에도 ', tachyon.sex, '의 모습은 없었습니다']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 걱정스러운 마음에 기숙사장에게 전화를 걸었고 ',
        tachyon.get_colored_name(),
        '이(가) 이미 트레센으로 돌아갔다는 말을 듣고서야 한숨을 돌렸습니다',
      ]);
      await era.printAndWait('……아니, 한숨을 돌렸다고 할 수는 없었습니다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 대체 어떻게 된 걸까…… 왜 혼자 학원으로 돌아간 걸까',
      ]);
      await era.printAndWait(['기회를 봐서 ', tachyon.sex, '와(과) 이야기를 나누자']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_47_47
  we_b_47_47: (() => {
    const title = '희미해진 광채';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} coffee_arim_kin マンハッタンカフェが有馬記念に出走するか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_arim_kin,
    ) => {
      await tachyon.say_and_wait([
        '그나저나 내일은 아리마 기념이군, ',
        callname,
      ]);
      era.println();
      await era.printAndWait([
        '달빛 아래서 훈련하던 ',
        tachyon.get_colored_name(),
        '이(가) 문득 ',
        you.get_colored_name(),
        '에게 말했다.',
      ]);
      await era.printAndWait([
        '국화상이 끝난 뒤로 두 사람은 이렇게 밤마다 훈련과 지도를 이어 왔다.',
      ]);
      await era.printAndWait([
        '어색하던 대화도 두 달 동안 함께하면서 예전의 친숙함을 조금씩 되찾아 갔다.',
      ]);
      await era.printAndWait(
        '말이 이상할지도 모르지만 지금 상황에 대한 자신의 감정을 묻는다면',
      );
      await era.printAndWait('아마 즐기고 있는 것 같다.');
      await era.printAndWait([
        '낮에는 ',
        coffee.get_colored_name(),
        '을(를) 위해 움직이고, 밤에는 ',
        tachyon.get_colored_name(),
        '의 회복을 돕는다.',
      ]);
      await era.printAndWait([
        '할 일은 늘어났지만 국화상 이전의 ',
        you.get_colored_name(),
        '과(와) 비교하면 마음의 짐은 나날이 가벼워졌다.',
      ]);
      await era.printAndWait([
        '…………그러다 보니 ',
        you.get_colored_name(),
        '은(는) 시간 가는 줄도 모르고 있었다.',
      ]);
      era.println();
      if (coffee_arim_kin) {
        await tachyon.say_and_wait([
          '내일은 ',
          call_25,
          '의 올해 마지막 레이스일세.',
        ]);
      } else {
        await tachyon.say_and_wait('내일이면 올해 시즌도 끝나는군.');
      }
      era.println();
      await era.printAndWait(['아리마 기념이 끝나면']);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 줄곧 마주하지 못했던 내년이 찾아온다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '来年……',
        call_25,
        '이(가) 출전하는 레이스라면…… 최선을 다해 한 경기도 빠짐없이 따라가겠네.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 눈동자를 바라봤다. 그 안에는 ',
        coffee.get_colored_name(),
        '을(를) 위해 불타는 각오와 열정이 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그러니 내년에도 잘 부탁하네.',
      );
      era.println();
      await era.printAndWait('빛이 보이지 않는다.');
      await era.printAndWait([
        '줄곧 ',
        you.get_colored_name(),
        '의 양쪽 눈을 태울 듯 빛나던 ',
        tachyon.get_colored_name(),
        '의 눈빛은 이제 거의 보이지 않는다.',
      ]);
      era.printButton('「내년에도…… 잘 부탁해.」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 아리마 기념 직후 기자회견을 열 예정이다.',
      ]);
      await era.printAndWait('복귀 발표는 세상을 크게 뒤흔들 것이다.');
      await era.printAndWait('하지만 그 뒷이야기는 지금 두 사람과는 상관없다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_95_15
  we_b_95_15: (() => {
    const title = '깜빡이는 광자';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {string} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25, callname_25) => {
      await era.printAndWait('심야의 훈련장.');
      await era.printAndWait('아무도 없어야 할, 아니 있어서는 안 될 이 시간에……');
      era.println();
      await tachyon.say_and_wait('……하하, 사람이 정말 많군 그래……');
      era.println();
      await era.printAndWait('의외로 경기장에는 자율 트레이닝을 하는 사람들로 가득했다.');
      await era.printAndWait([
        'G1 전선이 시작되면서 긴장한 ',
        tachyon.uma_sex_title,
        '들이 제멋대로 훈련에 매진하는 것은 이 시기 트레센의 흔한 풍경이었다.',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '아, 타키온 선배…… 어라, 트레이너 ',
        you.adult_sex_title,
        '!?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '멀리서 ',
        tachyon.sex,
        '의 등 뒤에 숨어있던 ',
        you.get_colored_name(),
        '을(를) 발견하자마자 걸음을 멈추고 굳어버렸다.',
      ]);
      await era.printAndWait('아무리 그래도 자율 트레이닝은 권장되는 행위가 아니니까……');
      await era.printAndWait([
        '하지만 담당 ',
        tachyon.uma_sex_title,
        '의 자율 트레이닝에 동행한 ',
        you.get_colored_name(),
        ' 역시 ',
        tachyon.couple_title,
        '들을 나무랄 자격은 딱히 없었다.',
      ]);
      era.printButton('「쉬잇.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 쓴웃음을 지으며 ',
        tachyon.sex,
        '에게 조용히 하라는 손짓을 보내자, ',
        tachyon.sex,
        '도 눈치껏 ',
        you.get_colored_name(),
        '을(를) 못 본 척하며 다시 ',
        tachyon.get_colored_name(),
        '과 대화를 이어갔다.',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배! 저 올해 드디어 클래식에 들어갔어요! 사츠키상은 아쉽게 나가지만, 더비는 정말 열심히 할게요!',
      );
      await tachyon.say_and_wait('하하, 그거 참 열심히 노력해야겠군.');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '으아~~ 본격화가 너무 늦는 바람에 트레이너님이 사츠키상은 회피하자고 하셔서…… 본격화 속도를 앞당길 방법 같은 건 없을까요?',
      );
      await tachyon.say_and_wait(
        '순리에 맡기는 게 가장 좋네…… 억지로 발육시키면 어떻게든 후유증이 남기 마련이니까……',
      );
      era.println();
      await era.printAndWait([
        '후배와 대화할 때의 ',
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 예상보다 훨씬 온화했다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '심지어 ',
      ]);
      await era.printAndWait('……하지만 곰곰이 생각해보면, 그 또한 타키온다운 일이었다.');
      await era.printAndWait([
        '가능성을 무엇보다 소중히 여기는 ',
        tachyon.get_colored_name(),
        '이 눈앞의 성적을 위해 ',
        tachyon.uma_sex_title,
        '의 가능성을 희생하는 것을 용납할 리 없었다.',
      ]);
      await era.printAndWait('특히 상대가 더 큰 가능성을 품은 후배라면 더더욱.');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '아…… 벌써 시간이 이렇게 됐네요, 타키온 선배! 저 먼저 들어갈게요!',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '그리고…… 봄 텐노상 말이에요, 카페 선배가 정말 강하긴 하지만, 저는 타키온 선배가 꼭 이길 거라고 믿어요!',
      ]);
      era.println();
      await era.printAndWait([
        '동경으로 가득 찬 ',
        tachyon.sex,
        '의 눈동자가 반짝이며 빛났다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 강하다. 그것은 당연한 사실이었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 자신의 보조가 없더라도, ',
        coffee.get_colored_name(),
        '는 충분히 강했다.',
      ]);
      await era.printAndWait([
        '정상적으로 경쟁한다 해도 ',
        tachyon.get_colored_name(),
        '은 분명 고전해야 할 상대였다.',
      ]);
      await era.printAndWait('그뿐만 아니라……');
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await era.printAndWait([
          '능력치는 충분할지 모르나, 레이스 경험이나 수개월간 전선을 이탈해 있던 공백을 생각하면 ',
          tachyon.get_colored_name(),
          '은 결코 ',
          coffee.get_colored_name(),
          ' 보다 우위에 있지 않았다.',
        ]);
      } else {
        await era.printAndWait([
          '능력 면에서 지금의 ',
          tachyon.get_colored_name(),
          '은 사츠키상이나 더비 시절의 ',
          tachyon.sex,
          '보다도 못했다.',
        ]);
      }
      await era.printAndWait('전력을 다해 회복하려 해도, 능력의 한계는 분명 존재했다.');
      era.println();
      await era.printAndWait([
        '게다가, ',
        tachyon.get_colored_name(),
        '이 출주하는 목적은…… 승리하기 위함이 아니었다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '오직 ',
      ]);
      await era.printAndWait(
        '승패가 중요하지 않은 것이 아니라…… 이겨서는 안 되고, 이기기를 바라지도 않는 상태였다.',
      );
      await era.printAndWait([
        '만약 이겨버린다면, 그것은 ',
        tachyon.get_colored_name(),
        '의 꿈이자 마지막 희망인 ',
        coffee.get_colored_name(),
        '조차 ',
        tachyon.get_colored_name(),
        '의 한계에 패배했다는 뜻이 되기 때문이었다.',
      ]);
      await era.printAndWait('그러니까……');
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('그래서, 대답하기 어려웠을 것이다.');
      await era.printAndWait('자신을 신뢰하는 후배에게 그런 말을 할 수 있을까?');
      await era.printAndWait(['텐노상(봄)은 결코 이길 수 없노라고.']);
      await era.printAndWait(
        '갑자기 얼어붙은 분위기에 동경하던 눈빛이 점차 당혹감으로 변해가는 후배를 앞에 두고, 정말 그렇게 말할 수 있을까?',
      );
      era.println();
      await era.printAndWait([
        '이론적으로는 이때 나서서 ',
        tachyon.get_colored_name(),
        '의 난처함을 풀어주어야 할 ',
        you.get_colored_name(),
        '(이)였지만, 어째서인지 그 자리에서 못박힌 듯 움직일 수도, 입을 뗄 수도 없었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '어쩌면 ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 정말 승부에 관심이 없는 걸까?',
      ]);
      await era.printAndWait('정말로 승리를 기꺼이 양보할 생각인 걸까?');
      await era.printAndWait(
        '자신이 중시하는 가능성 앞에서 포기라는 말을 내뱉을 수 있을까?',
      );
      era.println();
      await era.printAndWait('얼마나 시간이 흘렀을까.');
      await era.printAndWait([
        '자율 트레이닝을 하던 다른 ',
        tachyon.uma_sex_title,
        '들이 모두 돌아가고, 침묵이 밤의 일상이 되었을 무렵.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        call_25,
        '은(는) ',
        tachyon.sex,
        '은 정말로 강력한 상대라네.',
      ]);
      era.println();
      await era.printAndWait('……역시나.');
      await era.printAndWait('그것이 당연한 반응이었다.');
      era.println();
      await era.printAndWait([
        '애당초 ',
        tachyon.get_colored_name(),
        '이 정말로 이번 승부를 따내려 했다면, 가장 골치가 아파질 사람은 당신이었을 터였다.',
      ]);
      await era.printAndWait([
        '이런 소동 같은 제안에 처음 응했던 것도, 결국 이것이 ',
        coffee.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        ' 모두에게 윈-윈인 방안이었기 때문이 아니었던가.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 영광을 얻고, ',
        tachyon.get_colored_name(),
        '은 ',
        tachyon.sex,
        '가 원하던 실험 결과를 얻는다.',
      ]);
      await era.printAndWait([
        '만약 ',
        tachyon.get_colored_name(),
        '이 이제 와서 마음을 바꾼다면, 진퇴양난에 빠지는 것은 바로 ',
        you.get_colored_name(),
        ' 자신이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '하지만…… 내가 이길 걸세. ',
        call_25,
        '이(가) ',
        tachyon.sex,
        '이 아무리 강하다 해도, 승리하는 것은 바로 나야.',
      ]);
      era.println();
      await era.printAndWait('!');
      await era.printAndWait('설마…… 뒤통수를 치는 건가?');
      await era.printAndWait('이거 상황이 좋지 않은데……');
      await era.printAndWait([
        '비록 후배를 달래기 위한 빈말이라 할지라도, 이런 대답은 분명 ',
        tachyon.get_colored_name(),
        '의 마음이 흔들리고 있다는 증거였다.',
      ]);
      await era.printAndWait('게다가 단순히 둘러대기 위한 말이었다면, 왜 아까 그렇게 오랫동안 침묵했겠는가.');
      await era.printAndWait('이렇게 되면…… 자신은 대체 어떻게 해야 한단 말인가.');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 ',
        callname_25,
        ', ',
        tachyon.get_colored_name(),
        '의 ',
        callname,
      ]);
      await era.printAndWait('대체 어느 쪽을 선택해야 하는가?');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '네! 저 그날 꼭 타키온 선배 응원하러 갈게요!',
      );
      era.println();
      await era.printAndWait([
        '경쾌한 발소리가 멀어지고, 고요한 훈련장에는 별빛을 벗 삼아 ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '만약 ',
      ]);
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          '계속해서 ',
          tachyon.get_colored_name(),
          '을 돕는다면, 온 힘을 다해 지지해 주었던 그 ',
          tachyon.teen_sex_title,
          '에게 면목이 서는 일인가? ',
          tachyon.sex,
          '가 타준 커피에 보답하는 길인가?',
        ]);
      }
      era.println();
      await era.printAndWait([
        '그러니, ',
        coffee.get_colored_name(),
        '를 도와야 한다.',
      ]);
      await era.printAndWait([
        '그러니, ',
        tachyon.get_colored_name(),
        '에게 확인해야 한다. ',
      ]);
      await era.printAndWait('그러니…… 이런 상황에서 마음이 기뻐해서는 안 되는 것 아닌가?');
      era.println();
      await era.printAndWait('어째서, 지금 이토록 마음이 설레는 것일까.');
      await era.printAndWait(
        '설마, 자신이 처음부터 진심으로 선택하고 싶었던 것은 플랜 A였던 것일까?',
      );
      await era.printAndWait([
        '설마, ',
        coffee.get_colored_name(),
        '를 돕는 것이 본심에 어긋나는 행위였던 걸까.',
      ]);
      await era.printAndWait('……아니, 그것만은 절대 아니라고 단언할 수 있었다.');
      await era.printAndWait(
        '그런데 왜…… 분명 무척이나 곤혹스러워야 할 상황인데도, 심장 박동은 멈출 줄을 모르는 것일까.',
      );
      await era.printAndWait([
        '불현듯, ',
        you.get_colored_name(),
        '이(가) 입을 열어 물었다.',
      ]);
      era.printButton('「타키온…… 방금 한 말, 진심은 아니지?」', 1);
      era.printButton('「타키온…… 방금 한 말은 당연히 농담이었겠지?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '물론이네. 승패에 연연하는 것은 어린아이의 권리지…… 우리에게 필요한 것은 오직 실험 데이터, 그뿐이라네.',
      );
      await era.printAndWait('말은 사람을 속인다.');
      await era.printAndWait('목소리도 사람을 속인다.');
      await era.printAndWait(
        '영원히 이성적이라 자부하는 사람일수록, 자신의 이익을 위해 타인을 속인다.',
      );
      await era.printAndWait('하지만…… 감정은 거짓말을 하지 않는다.');
      era.println();
      await era.printAndWait([
        '방금 그 말의 몇 퍼센트가 진실이고 거짓인지, ',
        you.get_colored_name(),
        '은(는) 알 수 없었다.',
      ]);
      await era.printAndWait([
        '하지만…… ',
        tachyon.sex,
        '의 눈동자 속에서 수개월 전 거의 사라졌던 광채가.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 눈을 멀게 할 만큼 강렬했다가, 감동 속에 꺼져버렸던 그 빛이.',
      ]);
      await era.printAndWait('오늘 밤, 다시금 희미한 불꽃을 지피고 있었다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_95_18
  we_b_95_18: (() => {
    const title = '다시 피어나는 광자';
    /**
     * 天皇賞（春）でカフェに勝ったあと
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait('이대로는 안 된다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 몇 번째인지도 모를 만큼 ',
        you.get_colored_name(),
        '와(과) 대화를 피한 끝에 ',
        you.get_colored_name(),
        '은(는) 결심했다',
      ]);
      await era.printAndWait('훈련에는 나오고 실험도 평소처럼 한다');
      await era.printAndWait([
        '하지만 잠시 숨을 돌리며 천황상(봄) 이야기를 꺼내려 하면 ',
        tachyon.sex,
        '은(는) 곧바로 자리를 피한다',
      ]);
      await era.printAndWait('언제 어디서나, 심지어 실험 중에도');
      era.println();
      await era.printAndWait('이대로 둘 수는 없다');
      await era.printAndWait([
        tachyon.sex,
        '의 표정은 날이 갈수록 어두워져, 움츠러들기까지 했다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 이래서는 안 된다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 이런 모습이어서는 안 된다',
      ]);
      era.println();
      await era.printAndWait('애써 되찾은 눈동자의 빛을');
      await era.printAndWait('이런 일로 꺼뜨리게 내버려 둘 수는 없다');
      await era.printAndWait('도망치는 이유는 대강 짐작할 수 있다');
      if (relation <= 75) {
        await era.printAndWait('아직 이해하지 못한 부분도 있지만');
      }
      await era.printAndWait('그러니……');
      era.printButton(`${tachyon.sex}에게는 분명히 말해야 한다`, 1);
      await era.input();
      era.drawLine();
      await tachyon.print_and_wait('……벌써 몇 주째 도망치고 있군요');
      await tachyon.print_and_wait([
        '천황상(봄)이 끝난 뒤부터 줄곧 ',
        you.sex,
        '을(를) 피하고 있습니다',
      ]);
      await tachyon.print_and_wait('저를 위해 모든 것을 희생한 사람을');
      await tachyon.print_and_wait([
        '이성적으로 생각하면 달릴 생각도 없고 미래도 없는 ',
        tachyon.uma_sex_title,
        '을(를) 계속 담당하는 건 무의미합니다. 출전 기회도 자원도 시간도 낭비하는 일이니까요',
      ]);
      await tachyon.print_and_wait([
        '감정적으로 생각하면 ',
        you.sex,
        '의 꿈을, ',
        you.sex,
        '이(가) 매료됐던 주행을 부숴 놓고는 우스꽝스러운 Plan B에까지 끌어들여 그 꿈마저 희생시키고 ',
        you.sex,
        '에게 맞추도록 했습니다',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '그런데도 ',
        you.sex,
        '은(는) 뒤돌아보지 않고 따라왔습니다',
      ]);
      await tachyon.print_and_wait('제 연구를 위해 스스로 실험체가 되어 주었지요');
      await tachyon.print_and_wait([
        '제 고집 때문에 ',
        call_25,
        '까지 끌어들였습니다',
      ]);
      await tachyon.print_and_wait([
        '그래서 그 대가로 ',
        you.sex,
        '와(과) ',
        call_25,
        '에게 명성을 안겨 주고, 보잘것없지만 보답하고 싶었습니다',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.say_and_wait('……응?');
      era.println();
      await tachyon.print_and_wait([
        '오늘도 마찬가지입니다. 일부러 ',
        you.sex,
        '와(과) 대화를 피하고 필요한 순간 외에는 마주치지 않은 채 연구실 앞까지 돌아왔습니다',
      ]);
      await tachyon.print_and_wait(
        '그런데…… 연구실 밖에는 이미 누군가 기다리고 있었습니다',
      );
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await tachyon.print_and_wait('아니');
      await tachyon.print_and_wait('안 됩니다');
      await tachyon.print_and_wait('지금은 안 됩니다');
      era.println();
      await tachyon.print_and_wait('간단한 일입니다');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 다카라즈카 기념에서 지기만 하면 됩니다',
      ]);
      await tachyon.print_and_wait(['다카라즈카 기념에서 승리를 양보한다면 다시……']);
      era.println();
      await tachyon.print_and_wait('아니, 이제는 불가능합니다');
      await tachyon.print_and_wait('달리고 싶은 본능은 억누를 수 없습니다');
      await tachyon.print_and_wait('이건 그저 자기기만이자 현실 도피입니다');
      era.println();
      await tachyon.print_and_wait('눈앞의 그림자가 복도 한가운데 서 있습니다');
      await tachyon.print_and_wait('온몸이 떨립니다…… 당연히 화를 내겠지요');
      await tachyon.print_and_wait('잘못을 저지르고도 계속 도망친 어리석은 사람에게');
      await tachyon.print_and_wait('좋습니다, 각오는 됐습니다');
      await tachyon.print_and_wait('쌓인 분노를 모두…… 쏟아 내세요');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.drawLine();
      await era.printAndWait('먼저 무슨 말을 해야 하지');
      await era.printAndWait([
        '우선 말해야 한다. ',
        tachyon.sex,
        '을(를) 탓할 생각은 없다고',
      ]);
      await era.printAndWait([
        '상대가 봐주어서 얻은 승리 따위 ',
        coffee.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '결코 기뻐하지 않을 것이다',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '을(를) 더 높은 정상으로 이끈다는 목표는 무너지지 않았다',
      ]);
      await era.printAndWait([
        '오히려 ',
        coffee.get_colored_name(),
        '을(를) 완전히 자기 뜻대로 움직일 수 있다고 믿은 쪽이 지나치게 오만했다',
      ]);
      await era.printAndWait(
        '앞으로도 전력을 다해 레이스에 나가 서로를 단련시키는 것이야말로 Plan B를 가장 잘 실행하는 방법이다',
      );
      await era.printAndWait('그러니……');
      await era.printAndWait('그래, 이렇게 말하자');
      era.printButton('「타키온……」', 1);
      era.printButton('「천황상에서 정말 대단했어!」', 2);
      await era.input();
      await tachyon.say_and_wait('……네?');
      era.println();
      await era.printAndWait('맞아');
      await era.printAndWait('이론이나 논리보다 이런 말이 내게는 더 어울린다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 달리기에 매료되어 그를 위해 모든 것을 바치는 모르모트',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 어째서인지 갑자기 내 눈동자를 빤히 바라보았다',
      ]);
      await era.printAndWait(
        '처음 만났을 때와 같다. 사츠키상이나 더비를 앞뒀을 때와도',
      );
      await era.printAndWait([
        '내 눈은 대체 무슨 색이기에 ',
        tachyon.sex,
        '은(는) 매번 그렇게 감탄하는 걸까',
      ]);
      era.println();
      await tachyon.say_and_wait('……하지만 그러면 Plan B는……');
      era.printButton(
        `「타키온이 봐줘야만 겨우 이길 수 있는 카페가 정말 ${tachyon.uma_sex_title}의 한계를 뛰어넘을 수 있을까?」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait('꿈에 눈이 멀어서일까');
      await era.printAndWait([
        '아니면 ',
        coffee.get_colored_name(),
        '을(를) 향한 집착일까',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 가장 중요한 사실을 잊고 있었던 모양이다',
      ]);
      if (love >= 75) {
        await era.printAndWait([
          '이렇게 보니 결혼한 뒤의 ',
          tachyon.get_colored_name(),
          '는 의외로 아이들을 무척 아끼는 성격일지도 모른다',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        '……그 말은 ',
        tachyon.get_colored_name(),
        '의 트레이너로서 하는 말이군요? 그렇다면 ',
        coffee.get_colored_name(),
        '의 트레이너로서는 어떻게 하실 건가요',
      ]);
      if (relation <= 75) {
        era.println();
        await era.printAndWait([
          '……순간적인 충격에 ',
          you.get_colored_name(),
          '은(는) 할 말을 잃었다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이(가) 자신을 피해 다니는 이유를 이해할 수 없었다',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '을(를) 향한 죄책감이라면 알겠다. 그런데 왜 나를 피하는 거지',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '……나를 걱정해서……?',
        ]);
      }
      await era.printAndWait([
        '그렇다면 ',
        coffee.get_colored_name(),
        '의 트레이너로서 응답해야 한다',
      ]);
      era.printButton('「분해…… 카페를 이기게 해 주지 못했어.」', 1);
      era.printButton(
        '「그러니 다카라즈카에서는 카페가 지금보다 강해져서 타키온을 넘어설 거야!」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait('……분하……다고요?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 그 말을 곱씹고 있었다. 하지만 아직 해야 할 말이 남아 있다',
      ]);
      era.printButton('「하지만 타키온의 트레이너로서!」', 1);
      era.printButton(
        '「타키온이 카페에게 지도록 내버려 두지 않을 거야. 다카라즈카도 타키온의 승리다!」',
        2,
      );
      await era.input();
      await era.printAndWait('틀림없다');
      await era.printAndWait([
        '이것이 ',
        tachyon.get_colored_name(),
        '의 트레이너『이자』 ',
        coffee.get_colored_name(),
        '의 트레이너로서 내놓는 답이다',
      ]);
      await era.printAndWait('이유라고? 천황상(봄) 때 이미 말했잖아');
      await era.printAndWait([
        '나는 깊이 ',
        tachyon.couple_title,
        '의 달리기를 사랑한다',
      ]);
      if (love >= 75 && era.get('love:25') >= 75) {
        await era.printAndWait([
          '나는 깊이 ',
          tachyon.couple_title,
          '을(를) 사랑한다',
        ]);
      }
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait('낮게 부르는 목소리');
      await era.printAndWait('그리고 팽팽하게 이어진 침묵');
      await era.printAndWait('얼마나 시간이 흘렀는지 모를 침묵 끝에……');
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 자네는 내 달리기가 그렇게도 좋은 건가?',
      ]);
      era.println();
      await era.printAndWait(
        '말로 대답할 필요도 없다. 얼굴과 눈동자가 모든 것을 말해 주고 있다',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………그렇다면 관심이 있나? 나와 조금 더 이 길을 걸어갈 생각이',
      );
      await tachyon.say_and_wait(
        '함께해 주게. 프랑스로 떠나는 낭만적인 여행에',
      );
      era.println();
      await era.printAndWait('……뭐?');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_95_36
  we_b_95_36: (() => {
    const title = '決意';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (tachyon, you, callname, prix_lat) => {
      await tachyon.say_and_wait('하아…… 하아……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 프랑스의 훈련장을 달리고 있다.',
      ]);
      await tachyon.print_and_wait([
        '요 며칠은 ',
        callname,
        '이(가) 일본으로 돌아가는 날이다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['다음은 세계 최고봉인 개선문상……']);
      era.println();
      await tachyon.print_and_wait([
        '지금의 ',
        you.sex,
        '은(는) 아직도 망설이고 있을 테지.',
      ]);
      await tachyon.print_and_wait(['어째서 개선문상을 선택했는가.']);
      await tachyon.print_and_wait([
        '한계 너머에 도달하는 것. 그것이 ',
        tachyon.get_colored_name(),
        '의 꿈이었다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '은(는) 줄곧 그 목표에 모든 것을 걸 수 있으리라 믿었다. 목표에 닿기만 한다면 그게 자신이 아니더라도 괜찮다고.',
      ]);
      await tachyon.print_and_wait([
        '……하지만 ',
        tachyon.sex,
        '은(는) 스스로 생각한 것만큼 무관심하지는 않았네.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '본질적으로 ',
        tachyon.sex,
        '은(는) 달리고 싶은 ',
        tachyon.uma_sex_title,
        '이라네.',
      ]);
      await tachyon.print_and_wait([
        '그러나 ',
        tachyon.sex,
        '은(는) 한계를 뛰어넘겠다는 꿈도 버리고 싶지 않다.',
      ]);
      await tachyon.print_and_wait('그렇다면 어떻게 해야 하는가? 두 가지를 모두 얻을 방법은?');
      await tachyon.print_and_wait([
        '간단하네. ',
        tachyon.get_colored_name(),
        '이(가) 스스로 『한계』가 되면 되지.',
      ]);
      era.println();
      await tachyon.print_and_wait(['그래서 ', prix_lat, '를 선택했네.']);
      await tachyon.print_and_wait('세계 최고봉이자 한계를 가장 잘 나타내는 레이스를.');
      await tachyon.print_and_wait([
        '그 무대에서 스스로 ',
        tachyon.uma_sex_title,
        '의 한계를 정의하는 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……후후.');
      era.println();
      await tachyon.print_and_wait('남들을 뛰어넘어 한계 그 자체가 된다고 생각하니');
      await tachyon.print_and_wait('몸이 참을 수 없을 만큼 뜨거워지는군.');
      era.println();
      await tachyon.say_and_wait('역시 달리고 싶네…… 나는.');
      era.println();
      await tachyon.print_and_wait('결심은 이미 불타오르고 있었다.');
      await tachyon.print_and_wait(
        '라면 다른 것은 모두 내려놓고 눈앞의 승리에 집중하세.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_cf_japa_cup
  we_b_cf_japa_cup: (() => {
    const title = '한계를 넘어서';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await you.say_as_passer_by_and_wait('実況', [
        coffee.get_colored_name(),
        '! 재팬컵 기록을 경신했습니다…… 아니, 세계 기록입니다! 불과 몇 달 전 ',
        tachyon.get_colored_name(),
        '이(가) 세운 세계 2400m 기록을 칠흑의 환영이 다시 넘어섰습니다!',
      ]);
      era.println();
      await tachyon.print_and_wait('정말로 넘어섰군.');
      await tachyon.print_and_wait(['', call_25, '이(가) 결승선을 통과하는 순간,']);
      await tachyon.print_and_wait('나도 다른 사람들처럼 흥분하고 있었다.');
      era.println();
      await tachyon.print_and_wait('당연한 일이지.');
      await tachyon.print_and_wait([
        '조금 자화자찬 같지만 ',
        tachyon.sex,
        '은(는) 스스로 한계에 가장 가까이 다가간 ',
        tachyon.uma_sex_title,
        '라고 생각했으니까.',
      ]);
      await tachyon.print_and_wait(
        '한계에 가장 가깝다는 것과 그 한계를 넘어선다는 것은 큰 차이가 있지.',
      );
      await tachyon.print_and_wait([
        '하지만……',
        tachyon.sex,
        '은(는) 정말 해냈네!',
      ]);
      await tachyon.print_and_wait(
        '왠지 달리는 모습에서 설명하기 힘든 위화감이 느껴지지만, 이제 그런 건 상관없네.',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 한계에 도달한 ',
        tachyon.uma_sex_title,
        '였지. 그리고 ',
        coffee.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '지금 그 한계를 넘어섰네.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '！',
        call_25,
        '은(는) ',
        tachyon.sex,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait('너무 흥분해서 곁에 있는 사람과 이 기쁨을 나누고 싶었다.');
      await tachyon.print_and_wait('온갖 고생을 감수한 연구가 마침내 성과를 낸 것이다.');
      await tachyon.print_and_wait('그런데……');
      era.println();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await tachyon.print_and_wait('대답이 없다.');
      await tachyon.print_and_wait([
        '곁에 있는 ',
        you.sex,
        '도, 관중석의 관객들도 모두 시선을 ',
      ]);
      await tachyon.print_and_wait(['중앙의 ', tachyon.sex, '에게 집중하고 있었다.']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 외침은 귀가 찢어질 듯한 환호와 박수갈채에 묻혀 버렸다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_limited_tachyon
  we_limited_tachyon: (() => {
    const title = '한계에 멈춰 선 광자';
    /**
     * Plan B 専用。カフェが菊花賞に出走したあと発動
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait(['국화상이 끝났다.']);
      await era.printAndWait([
        '레이스가 끝나고 며칠 뒤, ',
        you.get_colored_name(),
        '은(는) 밤늦게까지 훈련하던 ',
        coffee.get_colored_name(),
        '를 기숙사까지 배웅하며 ',
        tachyon.sex,
        '에게 푹 쉬라고 당부한 뒤... 자신은 학원으로 돌아왔다.',
      ]);
      await era.printAndWait(
        '본인도 푹 쉬어야 하건만... 역시 아직 끝내지 못한 일이 남아 있었다.',
      );
      era.println();
      await era.printAndWait([
        '칠흑 같은 트레이닝실에 들어서는 순간, ',
        you.get_colored_name(),
        '은(는) 방 안에 누군가 있음을 즉시 알아챘다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 감각이 예리해서가 아니라, 그 사람이 손에 빛을 내뿜는 약병을 들고 있었기 때문이었다.',
      ]);
      era.printButton('「...타키온인가.」', 1);
      await era.input();
      await era.printAndWait([
        '지난 몇 달 동안 ',
        coffee.get_colored_name(),
        '를 돕기 위해 협조해 온 것은 역시 ',
        you.get_colored_name(),
        '이(가) 담당하는 ',
        tachyon.uma_sex_title,
        '——',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 손에 든 약병이 달빛 아래에서 일곱 빛깔 광채를 발하고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('국화상도 끝나버렸군 그래.');
      era.printButton('「...그러게.」', 1);
      await era.input();
      await era.printAndWait('사이가 나쁜 것은 아니었다.');
      await era.printAndWait([
        '애초에 ',
        tachyon.sex,
        '는 여전히 ',
        you.get_colored_name(),
        '의 담당 ',
        tachyon.uma_sex_title,
        '였고, 두 사람은 일상적으로 접촉하고 있었다.',
      ]);
      await era.printAndWait('그러니 정상적인 대화는 문제가 없었을 터였다.');
      await era.printAndWait([
        '하지만 지난 몇 달 동안 ',
        coffee.get_colored_name(),
        '에 관한 이야기를 뺀 적이 거의 없었다.',
      ]);
      await era.printAndWait('거기에 합숙 때 있었던 일까지 겹쳐지니...');
      await era.printAndWait([
        '순식간에 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '와 나눌만한 화젯거리를 찾을 수 없게 되었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(callname);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 밤색 짧은 머리카락이 어두운 달빛 아래에서 마치 술처럼 진한 갈색으로 비쳤고, 암적색의 눈동자는 마치 피를 갈구하는 맹수처럼 탐욕스럽게 ',
        you.get_colored_name(),
        '을(를) 주시하고 있었다.',
      ]);
      await era.printAndWait([
        '그 순간 ',
        you.get_colored_name(),
        '은(는) 많은 것을 떠올렸다. 선배 트레이너들이 말했던 ',
        tachyon.uma_sex_title,
        '와의 안전한 거리감 유지.',
      ]);
      await era.printAndWait([
        '트레이너 강좌에서 들었던 ',
        tachyon.uma_sex_title,
        '의 독점욕.',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        ' 생리학 수업에서 배웠던 ',
        tachyon.uma_sex_title,
        '의 발정기...',
      ]);
      await era.printAndWait([
        '하지만 그런 지식들은 지금 무방비하게 담당 ',
        tachyon.uma_sex_title,
        '를 마주하고 있는 자신에게 아무런 도움이 되지 않았다.',
      ]);
      await era.printAndWait([
        '비록 눈앞의 ',
        tachyon.get_colored_name(),
        '이 준 약물 덕분에 어느 정도 저항할 수 있는 힘을 갖게 되었을지 모르지만.',
      ]);
      await era.printAndWait('그것은 정말 아주 미미한 힘에 불과했다.');
      await era.printAndWait([
        tachyon.sex,
        '가 천천히 다가오자, 무의식적으로 ',
        you.get_colored_name(),
        '도 조금씩 뒤로 물러났다.',
      ]);
      await era.printAndWait('그렇게 한 걸음씩 밀고 당기다 보니 결국 벽에 부딪혔다.');
      await era.printAndWait([
        tachyon.sex,
        '는 벽 구석에 몰린 ',
        you.get_colored_name(),
        '을(를) 압박하며 담담하게 한마디를 내뱉었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 혹시... 나와 함께 달려주겠나?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 예상했던 일이지만, 실제로는 예상보다 훨씬 더 가혹한 부탁이었다.',
      ]);
      era.drawLine();
      await era.printAndWait('밤 아래의 훈련장, 텅 빈 주로.');
      await era.printAndWait([
        '경기장 전체에는 오직 ',
        tachyon.get_colored_name(),
        ' 한 사람만이 달리고 있었다.',
      ]);
      await era.printAndWait([
        '달빛 아래의 ',
        tachyon.sex,
        '는 매우 엉망인 폼으로 달리고 있었다.',
      ]);
      await era.printAndWait([
        '그것도 무리는 아니었다. 이미 거의 석 달 동안 훈련을 받지 못한 ',
        tachyon.sex,
        '였다. ',
      ]);
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '이라면 어쩌면 ',
        you.get_colored_name(),
        '이(가) 이길 수도 있을 것 같았다.',
      ]);
      await era.printAndWait([
        '허황된 소리처럼 들리겠지만, 매일 약물로 단련된 몸이라면 오랫동안 단련을 쉰 ',
        tachyon.uma_sex_title,
        '를 정말로 이길 수 있을지도 몰랐다.',
      ]);
      era.println();
      await era.printAndWait('그런데 어째서...');
      await era.printAndWait([you.get_colored_name(), '은(는) 괴로운 마음으로 생각했다.']);
      era.println();
      await era.printAndWait([
        '어째서, 저토록 볼품없는 달리기임에도 불구하고 ',
        you.get_colored_name(),
        '의 눈에는 처음 보았던 그날처럼 찬란하게 빛나 보이는 것일까.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '...']);
      era.println();
      await era.printAndWait([
        '어느덧 ',
        tachyon.sex,
        '는 주행을 마치고 ',
        you.get_colored_name(),
        '의 곁에 서서 어깨를 들썩이며 숨을 헐떡이고 있었다.',
      ]);
      await era.printAndWait(['예전의 ', tachyon.sex, '는 이렇지 않았다.']);
      await era.printAndWait([
        '아무리 다리 부상이 있다고 해도 ',
        tachyon.sex,
        '가 이렇게까지 망가질 리 없었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '를 이렇게 만든 것은, 마땅히 ',
        tachyon.sex,
        '의 곁에 머물며 ',
      ]);
      await era.printAndWait(['그것은 바로 ', you.get_colored_name()]);
      era.println();
      await tachyon.say_and_wait('이었다.');
      era.println();
      await era.printAndWait([
        '그렇지 않다고, ',
        you.get_colored_name(),
        '은(는) ',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '의 눈빛은 ',
        you.get_colored_name(),
        '이(가) 거짓말을 하도록 내버려 두지 않았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 자네 기억하나? 월계배 당시에 내가 했던 말을.',
      ]);
      era.println();
      await era.printAndWait('기억하느냐고? 아니, 잊을 수 있을 리가 없었다.');
      await era.printAndWait('지금까지도 그것은 한밤중에 문득 나타나 자신을 괴롭히는 악몽이었다.');
      await era.printAndWait([
        '자신의 꿈과 타인의 꿈을 모두 짊어진 ',
        tachyon.uma_sex_title,
        '가 눈앞에서 시들어버린 그 순간을 말이다.',
      ]);
      await era.printAndWait(
        '그다음이 비난이든, 원망이든, 혹은 애처로운 탄식이든 간에 자신은 마주할 준비가 되어 있었다.',
      );
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '가 말하려던 것은 그런 것이 아니었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '온 힘을 다해 달릴 수 있는 남은 몇 번의 기회... 지금, 그 기회가 왔네.',
      );
      await tachyon.say_and_wait([
        '국화상에서 ',
        call_25,
        '는 이미 ',
        tachyon.sex,
        '만의 빛을 피워냈어... 그 아이는 명실상부한 「최강」의 ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait([
        '가장 빠른 ',
        tachyon.uma_sex_title,
        '가 사츠키상을 이긴다.',
      ]);
      await era.printAndWait([
        '가장 강한 ',
        tachyon.uma_sex_title,
        '가 국화상을 이긴다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아주 오래전부터 전해 내려오던 격언을 떠올렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '이어서... 연말까지, ',
        tachyon.sex,
        '는 필시 거침없이 정점에 도달하게 되겠지.',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '는 자신이 꿈꾸던 가능성을 상상하고 있었다.']);
      await era.printAndWait('...이제는 더 이상 자신의 것이 아닌 가능성을 말이다.');
      era.println();
      await tachyon.say_and_wait([
        '하지만 ',
        tachyon.sex,
        '가 한계를 초월하기 위해서는 더욱 날카롭게 갈아낸 디딤돌이 필요해...',
      ]);
      era.println();
      await era.printAndWait(
        '분명 자신의 가능성을 잃어버렸음에도 불구하고, 눈동자 속의 광채는 여전히 눈부셨다.',
      );
      await era.printAndWait([
        '만약 이런 ',
        tachyon.sex,
        '라면 자신은 분명 승낙하고 말 것이다. 만약 ',
        tachyon.sex,
        '마저 꿈을 위해 모든 것을 불태우려 한다면, 끝까지 함께해 주는 것도 어렵지 않을 것이다.',
      ]);
      await era.printAndWait('자신은 분명 전과 다름없이, 기쁜 마음으로 그 부림을 받아들일 것이었다.');
      await era.printAndWait('하지만...');
      era.println();
      await tachyon.say_and_wait([
        '그러니, ',
        callname,
        ', 자네의 도움이 필요하네.',
      ]);
      await tachyon.say_and_wait([
        '나는 내년에 복귀할 걸세. ',
        call_25,
        '을 더 높은 한계로 이끌기 위해서 말이야. 오직 나만이 ',
        tachyon.sex,
        '에게 가장 치명적인 전술을 짜내어, ',
        tachyon.sex,
        '를 한계까지 몰아붙일 수 있으니까.',
      ]);
      await tachyon.say_and_wait('...나를 도와주겠지?');
      era.println();
      await era.printAndWait(
        '정말로 타인을 빛내기 위해 모든 것을 희생할 생각이라면, 어째서 얼굴에는 저토록 억울함이 서려 있는 것일까.',
      );
      await era.printAndWait('어째서 눈가에는 눈물이 맺혀 있는 것일까.');
      era.println();
      await tachyon.say_and_wait('침묵은 긍정의 의미로 받아들이겠네.');
      era.println();
      await era.printAndWait('애초에 거절할 이유도 없지 않은가.');
      await era.printAndWait([
        coffee.get_colored_name(),
        '저 ',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '저 ',
      ]);
      await era.printAndWait([
        '거절할 이유는 딱히 없었다. 다만 ',
        you.get_colored_name(),
        '은(는) 그저 궁금할 뿐이었다.',
      ]);
      await era.printAndWait(
        '눈앞의 이 갈색 머리 천사는 지금 머릿속으로 대체 무슨 생각을 하고 있는 것일까.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_47_31
  ws_b_47_31: (() => {
    const title = '달빛';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, t_call_c, relation) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배, 요즘…… 한밤중에 모래사장을 달리고 계신 것 같아요.',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '큰일은 아닐지도 모르지만, 타키온 선배의 달리는 모습이…… 왠지 괴로워 보여요.',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'C', [
        '타키온 선배께 신세도 많이 졌는데…… 선배 ',
        tachyon.sex,
        '는 정말 괜찮으신 걸까요?',
      ]);
      era.println();
      await era.printAndWait([
        '여러 ',
        tachyon.uma_sex_title,
        '들이 걱정해 준 덕분에 ',
        you.get_colored_name(),
        '은(는) 한밤중에 트레이너 기숙사를 나와 합숙소의 모래사장으로 향했다.',
      ]);
      await era.printAndWait([
        '다른 ',
        tachyon.uma_sex_title,
        '들의 말을 듣고서야 담당의 이상을 알아차리다니…… 트레이너 실격이다.',
      ]);
      await era.printAndWait([
        '하지만 도움에 대한 감사 때문일까…… ',
        tachyon.sex,
        '는 실험이라고 생각했겠지만, ',
        tachyon.sex,
        '의 약 덕분에 도움받은 이들도 분명히 있었다.',
      ]);
      await era.printAndWait([
        '그 이유도 감정도 제대로 이름 붙일 수 없었다. ',
        you.get_colored_name(),
        '은(는) 이상하게 가슴이 뜨거워졌다.',
      ]);
      era.println();
      await tachyon.say_and_wait('하아…… 하아…… 하아……');
      era.println();
      await era.printAndWait([
        '모래사장에 도착한 ',
        you.get_colored_name(),
        '의 눈앞에 있던 것은 합숙 내내 자신과 나란히 ',
        coffee.get_colored_name(),
        '의 주법을 개선하려 연구를 계속하던 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '달리는 데 몰두한 ',
        tachyon.sex,
        '은(는) 어둠에 묻힌 ',
        you.get_colored_name(),
        '이(가) 다가온 것도 눈치채지 못했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 말없이 바라보며 이 고요함을 깨뜨리지 않았다.',
      ]);
      era.println();
      await era.printAndWait(['모래사장에서 ', tachyon.sex, '의 달리기는 완벽하지 않았다.']);
      await era.printAndWait([
        '사츠키상 때와 비교할 것도 없이, 더 오래전 ',
        tachyon.get_colored_name(),
        '의 달리기와 비교해도 몹시 어색했다.',
      ]);
      await era.printAndWait([
        '다리에 무리가 갈까 봐 제대로 발을 내딛지 못하는 모습도 있었다. 그런 주법은 애초에 ',
        tachyon.get_colored_name(),
        '이(가) 원래 잘하던 것도 아니었다.',
      ]);
      await era.printAndWait([
        '그런데도 달빛 아래 ',
        tachyon.sex,
        '의 모습에서 ',
        you.get_colored_name(),
        '은(는) 눈을 뗄 수 없었다.',
      ]);
      await era.printAndWait([
        '완벽한지는 중요하지 않았다. ',
        tachyon.get_colored_name(),
        '이(가) 달리는 모습 그 자체가 ',
        you.get_colored_name(),
        '을(를) 매료시켰다. 빛이었다. 아무리 희미한 빛이어도 사람들은 열광하며 뒤쫓는다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저도 모르게 한 걸음을 내디뎌 그 빛을 붙잡으려 했다……',
      ]);
      era.println();
      await tachyon.say_and_wait(['누구인가? ……어라, ', callname]);
      era.println();
      await era.printAndWait([
        '달리기를 멈춘 ',
        tachyon.sex,
        '은(는) 바로 곁에 선 사람의 그림자를 알아보고 말을 걸었다.',
      ]);
      era.printButton('「이 늦은 밤에 뭘 하고 있는 거야?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '별일 아닐세. ',
        t_call_c,
        '를 위해 새로운 주법을 시험하고 있을 뿐이지……',
      ]);
      await tachyon.say_and_wait([
        '지금도 봤겠지. 내 달리기는 영 엉성하네. 하지만 ',
        t_call_c,
        '의 주법을 이 방향으로 바꿀 수 있다면……',
      ]);
      era.println();
      await era.printAndWait('하려던 말을 삼켰다.');
      await era.printAndWait([
        '틀린 선택은 아니다. 이 모든 것은 ',
        tachyon.get_colored_name(),
        '의 플랜 B를 위한 일이다.',
      ]);
      await era.printAndWait([
        '동시에 ',
        coffee.get_colored_name(),
        '을(를) 정상에 올려놓기 위한 일이기도 하다.',
      ]);
      if (relation <= 225) {
        await era.printAndWait('처음부터 결정했던 일이다.');
        await era.printAndWait(
          '합리적으로 생각해 보면 이보다 더 타당한 선택이 어디 있겠는가.',
        );
        await era.printAndWait('그러니까.');
      } else {
        await era.printAndWait('처음부터 결정했던 일이다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 다시는 ',
          tachyon.get_colored_name(),
          '에게 그런 고통을 겪게 하고 싶지 않았다. 그렇지 않은가?',
        ]);
        await era.printAndWait('그러니까.');
      }
      era.printButton('「……그래도 휴식은 취해야 해.」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '알고 있네. 자네도 마찬가지야. 이 시간까지 깨어 있다가 내일 ',
        t_call_c,
        '의 훈련은 어떻게 할 생각인가?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그저 형식적인 걱정만 입 밖에 낼 수 있었고, 모래사장을 떠났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_47_40
  ws_b_47_40: (() => {
    const title = '또 다른 가능성';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '그날 밤 ',
        you.get_colored_name(),
        '은(는) 꿈을 꾸었다.',
      ]);
      await era.printAndWait([
        '국화상을 제패한 ',
        tachyon.sex,
        '이(가) 경기장에서 하얀 연구복 소매로 손을 흔들고 있었다.',
      ]);
      await era.printAndWait(['모두가 ', tachyon.sex, '의 이름을 부르고 있다.']);
      await era.printAndWait([
        tachyon.sex,
        '은(는) 돌아서서 관중석의 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait('얼굴만 새까맣다.');
      await you.say_as_passer_by_and_wait(
        '관중들.',
        '⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！',
      );
      await era.printAndWait(['주변 관중들이 ', tachyon.sex, '의 이름을 부른다.']);
      await era.printAndWait([tachyon.sex, '의 이름은 무엇이었지?']);
      await era.printAndWait([tachyon.sex, '은(는)…… 누구지?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 꿈에서 벌떡 일어났지만 한동안 진정할 수 없었다.',
      ]);
      await era.printAndWait([
        '너무나도 현실 같은 꿈이라 ',
        you.get_colored_name(),
        '은(는) 그 여운에서 벗어나지 못했다.',
      ]);
      await era.printAndWait([
        '남은 밤에도 ',
        you.get_colored_name(),
        '은(는) 뒤척이느라 아침까지 잠들지 못했다.',
      ]);
      era.println();
      await era.printAndWait([
        '동이 틀 무렵 ',
        you.get_colored_name(),
        '은(는) 서둘러 트레이너 기숙사를 나섰다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 언론에 출전 중단을 발표했다는 사실은 알고 있다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 자신에게 알리지도 않고 레이스에 신청할 리 없다는 것도 알고 있다.',
      ]);
      await era.printAndWait('그래도 걱정된다. 그래도 두렵다.');
      await era.printAndWait([
        '그럼에도 ',
        tachyon.sex,
        '을(를) 두 눈으로 확인하지 않으면 그 꿈이 현실이 아니라고 확신할 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오호, ',
        callname,
        '? 오늘은 굉장히 일찍 왔군.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 실험실로 뛰어들자 아침부터 느긋하게 홍차를 마시는 ',
        tachyon.get_colored_name(),
        '이(가) 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '뭐, 오늘은 국화상 날이니…… 긴장하는 것도 당연하겠지.',
      );
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait(
          '이따가 같이 가세. 후후…… 내가 달리지 않고 관중석에서 다른 사람의 경주를 보는 건 이번이 처음이군.',
        );
      } else {
        await tachyon.say_and_wait([
          '자네는 가서 최선을 다하게. 다만 ',
          call_25,
          ' ',
          tachyon.sex,
          '은(는) 출전하지 않을 생각이니 난 여기서 중계만 봐도 충분하네. 멋진 모습을 보여 주게.',
        ]);
      }
      era.println();
      await tachyon.say_and_wait('……아니면 다른 할 말이라도 있나?');
      era.println();
      await era.printAndWait('이렇게 갑작스럽게 실험실로 들이닥쳤는데도');
      await era.printAndWait('악몽 이야기를 털어놓으려 했는데도');
      await era.printAndWait([tachyon.sex, '을(를) 본 순간 모든 말이 사라졌다.']);
      era.println();
      await era.printAndWait('대체 뭐라고 말해야 할까?');
      await era.printAndWait([
        '자신이 ',
        you.get_colored_name(),
        '이(가) 국화상에서 우승하는 꿈을 꾸었다고?',
      ]);
      await era.printAndWait([
        '꿈속의 ',
        you.get_colored_name(),
        '에게는 얼굴도 이름도 없었다고?',
      ]);
      await era.printAndWait('자신이 후회하고 있다고……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 세차게 고개를 젓고 괜찮다는 말만 남긴 채 볼품없이 실험실을 빠져나왔다.',
      ]);
      await era.printAndWait('무슨 말을 해야 할까?');
      await era.printAndWait('무슨 말을 할 수 있단 말인가?');
      await era.printAndWait(
        '스스로 결정한 일을 이제 와서 후회하다니, 농담에도 정도가 있다.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 실험실을 떠나 오늘 국화상 준비를 하러 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_1
  ws_b_95_1: (() => {
    const title = '다짐의 새해';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('설날.');
      await era.printAndWait('본래라면 묵은 해를 보내고 새해를 맞이하는 기쁜 날이었다.');
      await era.printAndWait(
        '신사 참배는 작년의 모든 것을 씻어내고 새로운 해를 맞이한다는 상징이기도 했다.',
      );
      era.println();
      await era.printAndWait('하지만…… 악연이란 대체로 씻어내기 어려운 법이었다.');
      await era.printAndWait(
        '그것이 누구든, 어떤 장소든, 설령 신사라 할지라도 예외는 없었다.',
      );
      await era.printAndWait(
        '그림자처럼 달라붙어 끈질기게 곁을 맴도는 혐오스러운 존재.',
      );
      await era.printAndWait('그렇다, 이른바 악연이란 바로————.');
      era.println();
      await tachyon.say_and_wait(['이런, ', callname, '…… 정말 우연이군.']);
      era.printButton('「타…… 타키온!」', 1);
      era.printButton('「그 이야기는 나중에 하고, 일단 뛰어!」', 2);
      await era.input();
      await tachyon.say_and_wait('아, 잠ㄲ……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 대답을 기다리지 않고, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 끌고 신사 안으로 파고들어 곧 군중 속으로 사라졌다.',
      ]);
      await you.say_as_passer_by_and_wait('기자A', '큭…… 놓쳤나.');
      await you.say_as_passer_by_and_wait(
        '記者B',
        '빛나고 있지 않을 때는 생각보다 찾기 힘들군요……',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '記者C',
        '……이쪽에서 대기해라. 절대 놓쳐선 안 돼.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '을 끌고 인파 속에 숨어, 카메라를 든 기자가 쫓아오지 않는 것을 확인한 뒤에야 안심했다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 아리마 기념 이후 돌연 발표한 복귀는 미디어에게 있어 그야말로 최고의 관심사였다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '의 상태를 걱정했기에, ',
        you.get_colored_name(),
        '은(는) 이와 관련된 모든 인터뷰를 거절해왔다.',
      ]);
      await era.printAndWait('설마 여기까지 직접 쫓아올 줄이야……!');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait([
        '그제서야 ',
        you.get_colored_name(),
        '은(는) 자신이 방금 아무 생각 없이 ',
        tachyon.get_colored_name(),
        '의 손을 잡고 달렸다는 사실을 깨달았다.',
      ]);
      era.printButton('「타키온, 다리는 괜찮아?」', 1);
      await era.input();
      await era.printAndWait(
        '……별것 아니네. 그저 조금 놀랐을 뿐이야, 후후.',
      );
      await era.printAndWait([
        '아무리 그래도 ',
        tachyon.uma_sex_title,
        '라 할지라도 신체 능력은 인간보다 훨씬 강했다. 하물며 올해 레이스에 복귀할 전 G1 ',
        tachyon.uma_sex_title,
        '였다.',
      ]);
      era.println();
      await you.say_and_wait('……그래, 레이스 복귀.', true);
      era.printButton('「타키온.」', 1);
      era.printButton('「올해의 레이스 일정은……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '그거야 당연히…… ',
        call_25,
        '과 같겠지. 굳이 말할 필요도 없지 않나.',
      ]);
      era.println();
      await era.printAndWait('역시 그랬다.');
      await era.printAndWait([you.get_colored_name(), '은(는) 고개를 끄덕였다.']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 레이스를 떠났던, 그리고 다시 돌아온 이유 모두 ',
        coffee.get_colored_name(),
        '———',
        you.get_colored_name(),
        '이(가) 담당하는 또 다른 ',
        tachyon.uma_sex_title,
        'のためだ',
      ]);
      await era.printAndWait([
        '그렇다면 한정된 선택지 속에서, 당연히 ',
        coffee.get_colored_name(),
        '가 출주하는 레이스를 최우선으로 고려해야만 했다…………',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 무슨 일인가?']);
      era.println();
      await era.printAndWait('가슴 한구석에서 자꾸만 떠오르는 것들이 있었다.');
      await era.printAndWait([
        '여름 합숙 때 ',
        tachyon.get_colored_name(),
        '의 얼굴에 서렸던 표정.',
      ]);
      await era.printAndWait([
        '국화상 이후 ',
        tachyon.get_colored_name(),
        '의 눈빛.',
      ]);
      await era.printAndWait([
        '아리마 전…… ',
        tachyon.get_colored_name(),
        '이 결의를 다졌을 때의 기색.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はそこで気づいた。',
        tachyon.get_colored_name(),
        '이 꽤 오랫동안 자신을 빤히 바라보고 있었다는 사실을 깨닫고 서둘러 정신을 차리며 무슨 일이냐고 물었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……아무것도 아니야. 그저 곧 우리 차례가 올 것 같아서 말이지.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 신사를 가리켰다. 그제서야 ',
        you.get_colored_name(),
        '이 황급히 뛰어든 곳이 본전 앞에서 신의 가호를 빌기 위한 긴 줄이었다는 사실을 알게 되었다.',
      ]);
      era.printButton(
        '「타키온, 너는 이런 거 안 믿지 않아?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '말을 내뱉자마자 ',
        you.get_colored_name(),
        '은(는) 아차 싶었다.',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '……호오, 의외군. 자네가 언제부터 내 의사를 신경 썼다고 그러나.',
        );
        era.println();
        await era.printAndWait(['역시나, ', tachyon.sex, '의 빈정거림이 돌아왔다.']);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          '……나를 여기로 끌고 온 건 자네 아닌가?',
        );
        era.println();
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 제대로 설명하지 못했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 서둘러 기자들에 대해 이야기했다.',
        ]);
        await era.printAndWait([
          '이야기를 들은 뒤 ',
          tachyon.sex,
          '는 별다른 반응 없이 그저 ｢그렇군｣ 한마디만을 남겼다.',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          '믿지는 않네만…… 자네의 정성이라 생각하고 받아들이도록 하지. 애초에 나를 이리로 끌고 온 것도 자네 아닌가?',
        );
        era.println();
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 제대로 설명하지 못했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 서둘러 기자들에 대해 이야기했다.',
        ]);
        await era.printAndWait([
          '이야기를 들은 ',
          tachyon.sex,
          '의 눈에 조금 미안한 기색이 서렸다.',
        ]);
      } else {
        await tachyon.say_and_wait(
          '내가 믿는 것은 신이 아니라, 나를 이곳으로 데려온 자네라네.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 갑자기 부끄러운 소리를 아무렇지 않게 내뱉었다.',
        ]);
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 제대로 설명하지 못했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 서둘러 기자들에 대해 이야기했다.',
        ]);
        await tachyon.say_and_wait(
          '훗, 평범하고 어리석은 파리 떼들이군. 감히 우리를 의심하다니.',
        );
        await era.printAndWait([tachyon.get_colored_name(), '은 가소롭다는 듯 비웃었다.']);
      }
      era.println();
      await era.printAndWait(['이야기하는 사이 어느덧 줄의 맨 앞까지 와 있었다.']);
      await era.printAndWait([you.get_colored_name(), '은(는) 눈앞의 신상을 바라보았다.']);
      await era.printAndWait('그럼…… 무엇을 빌어야 할까.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 수많은 생각을 거쳐, 빌고 싶은 소원들을 정리했다.',
      ]);
      await era.printAndWait('두 손을 모으고 신에게 기도를 올렸다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 다리에 아무런 문제가 없기를, 건강하게 완주하기를.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 레이스가 언제나처럼 눈부시게 빛나기를.',
      ]);
      await era.printAndWait([
        '그리고…… ',
        coffee.get_colored_name(),
        '의 트레이닝 또한 무사히 진행되기를.',
      ]);
      era.println();
      await era.printAndWait([
        '기도를 마치고 ',
        you.get_colored_name(),
        '은(는) 고개를 들어 옆에 선 ',
        tachyon.get_colored_name(),
        '을 보았다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 이미 진작에 건성으로 기도를 마치고 ',
        you.get_colored_name(),
        '을(를) 기다리고 있었다.',
      ]);
      await era.printAndWait([
        ' 두 사람은 인파를 빠져나와, 아직 포기하지 못한 기자들을 조심스레 피해 학원으로 돌아갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그래서…… 무엇을 빌었나?');
      era.println();
      await era.printAndWait([
        '어째서인지 ',
        tachyon.get_colored_name(),
        '은 꽤 궁금해하는 눈치였다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '에게 말해주었다……',
      ]);
      era.printButton('타키온의 건강 (체력 +20%)', 1);
      era.printButton('타키온의 레이스 (랜덤 능력치 +20)', 2);
      era.printButton('카페의 트레이닝 (스킬 포인트 +30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '에게 말했다. 자신이 빈 소원은 ',
            tachyon.sex,
            '의 다리가 건강하기를 빌었다고 말했다.',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('……시시한 소원이군.');
            await tachyon.say_and_wait(
              '그저 신체 건강만을 바란다면…… 내가 레이스에 복귀하지 않는 게 더 낫지 않겠나?',
            );
            await tachyon.say_and_wait([
              '모든 것을 버리기로 해놓고 이제 와서 그런 소원을 빌다니…… ',
              callname,
              ', 자네는 각오가 부족하군.',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 대답은 매우 신랄했다.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '이(가) 말한 소원을 진심으로 가소롭게 여기는 듯했다.',
            ]);
          } else {
            await tachyon.say_and_wait('……신체 건강이라.');
            await tachyon.say_and_wait('아니, 아무것도 아니야. 그저…… 후후.');
            await tachyon.say_and_wait(
              '그렇지. 건강하게 완주할 수 있다면 좋겠군.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 대수롭지 않게 말했다.',
            ]);
            await era.printAndWait('그것은 마치 평범한 일상의 대화처럼—실제로도 그랬지만—느껴졌다.');
          }
          era.println();
          await era.printAndWait([
            '하지만 ',
            you.get_colored_name(),
            '은(는) 놓치지 않았다.',
          ]);
          await era.printAndWait([
            '소원을 말하는 순간 ',
            tachyon.get_colored_name(),
            ' の目に咲いた希望と渇望を',
          ]);
          await era.printAndWait('……見えて、何ができるというのか');
          await era.printAndWait([
            'その可能性を追う道は、数ヶ月前、',
            you.get_colored_name(),
            ' 自身が封じた',
          ]);
          await era.printAndWait([
            '今の ',
            you.get_colored_name(),
            ' と',
            tachyon.sex,
            'は、自壊へ向かって走り続けているだけだ',
          ]);
          era.println();
          await era.printAndWait('だから祈るしかない');
          await era.printAndWait('せめて、この最期の時間だけは');
          await era.printAndWait([tachyon.sex, 'が痛みと傷病から免れるように']);
          era.println();
          await tachyon.say_and_wait('……用はないので、戻りますわ');
          era.printButton('「休みは取れよ」', 1);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'に告げた。祈ったのは',
            tachyon.sex,
            'と ',
            coffee.get_colored_name(),
            ' のレースが無事であることだと',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'はっは、悪くない願いではありませんこと？',
          );
          await tachyon.say_and_wait([
            call_25,
            ' はもう',
            tachyon.sex,
            'の可能性を証明しました……次は、私の番ですわ',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            'の踏み台になると口にしながら、私がその場に留まってはいけませんわ。でなければ、たかが川原の石ころですもの',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は口では ',
            coffee.get_colored_name(),
            ' のためだと繰り返す',
          ]);
          await era.printAndWait([
            'それでも ',
            you.get_colored_name(),
            ' は見逃さなかった……',
          ]);
          await era.printAndWait([
            'レースの話になったとき、',
            tachyon.get_colored_name(),
            ' の目をよぎった闘志を',
          ]);
          await era.printAndWait([
            'やはり、',
            tachyon.get_colored_name(),
            ' はレースへ戻りたがっている',
          ]);
          await era.printAndWait('……だが、欲しがって、何ができるというのか');
          await era.printAndWait([
            'その可能性を追う道は、数ヶ月前、',
            you.get_colored_name(),
            ' 自身が封じた',
          ]);
          await era.printAndWait([
            '今の ',
            you.get_colored_name(),
            ' と',
            tachyon.sex,
            'は、自壊へ向かって走り続けているだけだ',
          ]);
          era.println();
          await era.printAndWait('だから祈るしかない');
          await era.printAndWait('せめて、この最期の時間だけは');
          await era.printAndWait([
            '残された時間を、',
            tachyon.sex,
            'が思う存分味わえますように',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'フフ、あなたの期待に応えるためにも、すぐにトレーニングを始めませんと',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は楽しげにトレーニング場へ向かった',
          ]);
          era.printButton('……トレーニングには気をつけろ', 1);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'に告げた。祈ったのは ',
            coffee.get_colored_name(),
            ' のトレーニングが無事であることだと',
          ]);
          era.println();
          await tachyon.say_and_wait('……ええ');
          await tachyon.say_and_wait([
            '当然ですわ……私たちのすべては、',
            call_25,
            ' がさらに先へ、限界を超えるためですもの',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            'のトレーニングに問題が出れば……すべてが無駄になりますわ',
          ]);
          await tachyon.say_and_wait(
            'だからこそ、これが最優先……優先順位を忘れないあなたは、頼もしいですわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は口では ',
            coffee.get_colored_name(),
            ' のためだと繰り返す',
          ]);
          await era.printAndWait([
            'それでも ',
            you.get_colored_name(),
            ' は見逃さなかった……',
            coffee.get_colored_name(),
            ' の名が出たとき、',
            tachyon.sex,
            'の目に宿った寂しさを',
          ]);
          await era.printAndWait([
            'やはり、',
            coffee.get_colored_name(),
            ' の話は出すべきではなかった',
          ]);
          await era.printAndWait([
            'いま ',
            tachyon.get_colored_name(),
            ' のトレーナーである自分は、',
            tachyon.sex,
            'のために考えるべきなのだろう',
          ]);
          await era.printAndWait([
            'だが……',
            tachyon.sex,
            'を案じる資格は、数ヶ月前に自分で捨てた',
          ]);
          await era.printAndWait([
            '今の ',
            you.get_colored_name(),
            ' と',
            tachyon.sex,
            'は、自壊へ向かって走り続けているだけだ',
          ]);
          era.println();
          await era.printAndWait('だから祈るしかない');
          await era.printAndWait('外の条件が、すべて守られるように');
          await era.printAndWait([
            tachyon.sex,
            'を満たし、',
            tachyon.get_colored_name(),
            ' の「遺志」を叶えるために',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'フフ、あなたの期待に応えるためにも、私は負けられませんわ。',
            call_25,
            ' と同じ舞台に立てるところまで、戻らねば',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は淡く言い終え、実験室へ向かった',
          ]);
          era.printButton('「……実験には気をつけろ」', 1);
      }
      await era.input();
      await era.printAndWait([tachyon.sex, 'は手を振って、わかったと示した']);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_14
  ws_b_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '몸 상태가 아직 완전히 회복되지 않았기에 ',
        tachyon.get_colored_name(),
        '은(는) 팬 감사제 기획과 취재 요청을 거절했다.',
      ]);
      await era.printAndWait([
        '그 때문에 주변에는 『',
        tachyon.get_colored_name(),
        '의 복귀』를 둘러싼 불안과 의심이 퍼져 나갔다.',
      ]);
      await era.printAndWait([
        '하지만 그것은 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '에게는 상관없는 일이었다. 의혹이라……',
      ]);
      await era.printAndWait(
        '아니, 두 사람의 계획대로 진행된다면 의심이 많을수록 오히려 계획에 유리할 터였다.',
      );
      await era.printAndWait([
        '……그렇기에 ',
        tachyon.get_colored_name(),
        '에 대한 비난을 들으면서도 ',
        you.get_colored_name(),
        '은(는) 이를 악물고 그 자리를 떠날 수밖에 없었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_31
  ws_b_95_31: (() => {
    const title = '다시 빛나는 광자';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tenn_spr,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 홀로 모래사장을 달리고 있었다.',
      ]);
      await era.printAndWait('1년 전 이맘때와 어딘가 닮은 풍경이었다.');
      await era.printAndWait([
        '거기까지 생각하자 ',
        tachyon.get_colored_name(),
        '은(는) 갑자기 걸음을 멈췄다.',
      ]);
      era.println();
      await era.printAndWait('바로 지금이 그때와 같은 순간이다.');
      era.println();
      await tachyon.say_and_wait('……왔군요.');

      era.printButton('「왔어.」', 1);
      await era.input();
      await tachyon.say_and_wait('오지 말았어야 했는데요.');

      era.printButton('「그래도 왔어.」', 1);
      era.println();
      await era.printAndWait([
        '약속한 적도 없었지만 ',
        you.get_colored_name(),
        '은(는) 1년이 지난 오늘 다시 이 모래사장을 찾았다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……됐어요. 장난은 그만하고 본론으로 가죠.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) 농담을 주고받을 생각이 없던 ',
        tachyon.get_colored_name(),
        '은(는) 곧장 본론을 꺼내려다 말을 가로막혔다.',
      ]);
      era.printButton('「그보다.」', 1);
      era.printButton('「먼저 한 번 달리는 걸 보여 주지 않을래?」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('작년 이맘때와 비교하면');
      await era.printAndWait([
        '훈련을 재개한 ',
        tachyon.get_colored_name(),
        '의 달리기는 당연히 어제와도 비교할 수 없을 만큼 좋아졌다.',
      ]);
      await era.printAndWait('하지만 차이는 훈련량만이 아니었다.');
      era.println();
      await era.printAndWait(
        '작년에도 오랫동안 훈련하지 않아 자세가 무너진 상태였지만, 그 달리기에서는 사람을 끌어당기는 빛이 뿜어져 나왔다.',
      );
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '이(가) 지금껏 본 그 어느 때보다 눈부신 빛을 발하고 있었다.',
      ]);
      await era.printAndWait(['너무 밝아 착각마저 일어날 정도다.']);
      await era.printAndWait('——지금 여기서 사라져도 한 점 후회가 없을 만큼.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、',
        prix_lat,
        '이(가) 끝나면 저는 트윙클 시리즈에서 물러나겠어요.',
      ]);
      era.println();
      await era.printAndWait(
        '휴식이 아니다. 은퇴다. 즉 현역 생활을 끝내겠다는 뜻이다.',
      );
      await era.printAndWait('한 번 물러나면 만회할 기회는 없다.');
      era.println();
      await tachyon.say_and_wait(
        '제 다리는…… 반년 동안 무리를 했으니 이제 충분해요.',
      );
      await tachyon.say_and_wait([
        '텐노상(봄), 그리고 타카라즈카 기념…… 마지막으로 개선문상.',
      ]);
      await tachyon.say_and_wait([
        '……그래서 마지막으로 묻고 싶어요.',
        callname,
        '……후회는 없나요?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말을 듣고 ',
        you.get_colored_name(),
        '은(는) 지난날을 되짚기 시작했다.',
      ]);
      await era.printAndWait('후회라니. 무엇을?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에게 ',
        takz_kin,
        '에서 전력을 다하도록 한 일?',
      ]);
      await era.printAndWait([
        tenn_spr,
        '의 전날 밤에 ',
        tachyon.get_colored_name(),
        '을(를) 말리지 않은 일?',
      ]);
      await era.printAndWait('플랜 B를 선택한 일?');
      await era.printAndWait([
        '아니면…… ',
        tachyon.get_colored_name(),
        '을(를) 담당으로 영입한 일?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 그 질문을 입 밖에 내자 ',
        tachyon.get_colored_name(),
        '은(는) 잠시 침묵했다.',
      ]);
      await era.printAndWait('그리고 대답했다.');
      era.println();
      await tachyon.say_and_wait('……전부예요.');
      await tachyon.say_and_wait([
        '후회하지 않나요? 이렇게 다루기 힘들고, 말을 뒤집고, 다른 마음을 품은 ',
        tachyon.uma_sex_title,
        '을(를) 담당으로 삼은 일을요.',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          '처음부터 ',
          call_25,
          '만 담당했더라면 좋았겠다고 생각하지 않나요?',
        ]);
        era.println();
        await era.printAndWait(
          '질문처럼 들렸지만 어딘지 질투 어린 투정에 가까웠다.',
        );
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '에게 그런 말을 듣고 ',
        you.get_colored_name(),
        '은(는) 진지하게 되돌아보았다.',
      ]);
      await era.printAndWait([
        '타카라즈카 기념을 떠올리면 머릿속에 남는 것은 ',
        tachyon.get_colored_name(),
        '와(과) ',
        coffee.get_colored_name(),
        '이(가) 정상에서 맞붙었던 승부뿐이다.',
      ]);
      await era.printAndWait([
        '텐노상(봄)을 떠올리면 생각나는 것은 ',
        coffee.get_colored_name(),
        '의 기묘한 주행과…… ',
        tachyon.get_colored_name(),
        '이(가) 다시 피워 낸 섬광뿐이다.',
      ]);
      await era.printAndWait([
        '플랜 B를 선택한 날을 떠올린다…… ',
        tachyon.get_colored_name(),
        '이(가) 무사하기를 진심으로 바랐던 마음.',
      ]);
      await era.printAndWait([
        '마지막으로 떠오르는 것은 훈련장에서 ',
        tachyon.sex,
        '의 달리기에 두 눈을 태워 영원히 낫지 않을 상처가 남았던 그날이다.',
      ]);
      era.printButton('「후회하지 않아.」', 1);
      era.printButton(
        '「후회하는 게 있다면 타키온을 더 일찍 만나지 못한 거야.」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait('……흐음, 그렇군요.');
      await tachyon.say_and_wait('그럼 이대로 따라오세요……');
      await tachyon.say_and_wait([
        '함께 세계의 정상에 오른 뒤 제 연구 성과를 보여 드리겠어요——가장 만족스러운 ',
        tachyon.get_colored_name(),
        '의 달리기를!',
      ]);
      await era.printAndWait(
        '지금껏 가장 만족스럽고 가장 눈부신 달리기를 펼친다.',
      );
      await era.printAndWait(
        '줄곧 곁에서 지켜본 가장 열렬한 팬을 만족시킬 한 번의 레이스.',
      );
      await era.printAndWait('어느새 입술이 바싹 말랐다.');
      await era.printAndWait('더 굉장한 레이스, 더 눈부신 모습을 기대하고 있다.');
      await era.printAndWait([
        '아이돌인 ',
        tachyon.sex,
        '이(가) 그렇게까지 말했는데, 그 달리기에 매료된 모르모트가 고개를 끄덕이는 것 외에 무슨 말을 할 수 있을까?',
      ]);
      era.printButton('「달려, 타키온.」', 1);
      await era.input();
      await era.printAndWait('과거를 후회하지 않는다. 지금도, 앞으로도.');
      await era.printAndWait(['두 사람은 프랑스를 향해 발을 내디뎠다——개선문상을 향해.']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_35
  ws_b_95_35: (() => {
    const title = '프랑스(?)';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, call_25) => {
      await tachyon.say_and_wait('여기가…… 프랑스인가.');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 창밖을 바라보았다. 하늘과 하나가 된 야경이었다.',
      ]);
      await tachyon.print_and_wait('이곳이 프랑스……');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '이(가) 줄곧 동경해 온 장소.',
      ]);
      await tachyon.print_and_wait([
        '수많은 일본 ',
        tachyon.uma_sex_title,
        '가 좌절한 장소.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '가 마침내 정상에 발을 내디딜 장소.',
      ]);
      era.println();
      await tachyon.print_and_wait('그런데……');
      await tachyon.print_and_wait('별을 올려다보는 자는 발밑의 구덩이를 잊는다.');
      await tachyon.print_and_wait('너무 높은 곳만 바라보지 말라는 선인들의 지혜가 담긴 말이지.');
      era.drawLine();
      era.printButton('「……아니야. 여긴 두바이야.」', 1);
      await era.input();
      await tachyon.say_and_wait('…………뭐라고?');
      await era.printAndWait([
        '머릿속이 개선문상 생각으로 가득 찬 것이 분명한 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게 일주일 전에 두바이를 경유한다고 말했지만, 전혀 듣지 않은 모양이다.',
      ]);
      era.printButton(
        '「그래도 두바이의 레이스는 세계적으로 유명해. 기회가 된다면……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '거기까지 말하고 ',
        you.get_colored_name(),
        '은(는) 갑자기 입을 다물었다.',
      ]);
      await era.printAndWait('두바이의 레이스가 세계적으로 유명한 것은 사실이다.');
      await era.printAndWait(
        '유명한 가장 큰 이유는 상금이다. 세상에서 가장 많은 『돈』이 걸린 레이스라고 해도 과언이 아니다.',
      );
      await era.printAndWait('하지만……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에게는 더 이상 그런 『기회』가 없다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '흠, 기회가 된다면 두바이의 레이스도 구경해 두겠네. 나중에……',
        call_25,
        '의 훈련 계획에 넣어 보면 어떻겠나?',
      ]);
      era.println();
      await era.printAndWait([
        '그런데 ',
        tachyon.sex,
        '는 그 사실을 전혀 알아차리지 못한 듯하다.',
      ]);
      await era.printAndWait('피하려 했던 화제를 아무렇지 않게 스스로 꺼낸 것이다.');

      era.printButton(
        '「……일본으로 돌아가면 타키온은 카페의 훈련 계획도 계속 맡을 거야?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('당연하지 않나……');
      await tachyon.say_and_wait([
        '이번 개선문상은 내 개인적인 고집에 지나지 않네. 진정한 가능성도, 진정한 희망도 아직 ',
        call_25,
        '에게 있으니까.',
      ]);
      await tachyon.say_and_wait([
        '그러고 보니 ',
        call_25,
        '는 어떻게 할 생각인가?',
      ]);
      era.printButton(
        '「걱정하지 마. 카페와는 태블릿으로 연락할 거야. 매달 일본에도 일 때문에 돌아갈 거고.」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……毎月？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 조금 놀란 표정으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait([you.get_colored_name(), '은(는) 고개를 끄덕여 대답했다.']);
      await era.printAndWait('아, 돈이 걱정되는 건가?');
      era.printButton(
        '「출장으로 처리할 테니 항공권은 학원에서 부담해. 그건 걱정하지 마.」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……미안하네.');
      era.printButton('「신경 쓰지 마.」', 1);
      era.printButton('「내가 그러고 싶은 거야.」', 2);
      await era.input();
      await era.printAndWait('이 말은 진심이면서 동시에 거짓말이기도 했다.');
      await era.printAndWait('……사실 해외와 국내 중 하나를 선택할 수도 있었다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 원정에만 온전히 매달릴 수도 있었고, 일본에 남아 ',
        coffee.get_colored_name(),
        '을(를) 돌볼 수도 있었다.',
      ]);
      await era.printAndWait(
        '트레센 학원이 인력 부족이라고 해도 트레이너 한 명을 이렇게까지 쪼개 써야 할 정도는 아니다.',
      );
      await era.printAndWait('하지만……');
      era.printButton('「난 내버려 둘 수 없어.」', 1);
      era.printButton('「타키온도 카페도 마찬가지야.」', 2);
      await era.input();
      await era.printAndWait([
        '친구의 등을 쫓는 ',
        tachyon.teen_sex_title,
        '을(를) 혼자 내버려 둘 수 없다.',
      ]);
      await era.printAndWait([
        '낯선 땅에서 막다른 길을 향해 달려가는 ',
        tachyon.teen_sex_title,
        '을(를) 혼자 내버려 둘 수 없다.',
      ]);
      await era.printAndWait(
        '그래서 자기 자신을 희생하는 우유부단한 선택밖에 할 수 없었다.',
      );
      era.println();
      await tachyon.say_and_wait('……참으로 사람 좋은 양반이군.');
      era.printButton('「나쁜 점만 있는 건 아니야.」', 1);
      era.printButton('「이렇게 하면 너와 카페가 달리는 모습을 동시에 볼 수 있잖아.」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '그런 이유로 십수 시간씩 비행기를 타고 왕복한다니, 제정신이 아니군.',
      );
      era.println();
      await you.say_and_wait('칭찬으로 받아들이지.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 웃으며 ',
        tachyon.get_colored_name(),
        '의 탄식에 답했다.',
      ]);
      await era.printAndWait(
        '아까 분위기를 망친 것에 대한 보상이라고 생각하자.',
      );
      era.println();
      await tachyon.say_and_wait(
        '……그렇다면 내 달리기를 끝까지 지켜봐 주게.',
      );
      era.println();
      await era.printAndWait('세계라는 이름의 무대에서 ');
      await era.printAndWait([
        tachyon.sex,
        '은(는) ',
        you.get_colored_name(),
        '에게 손을 내밀었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '을(를) ',
        tachyon.get_colored_name(),
        '의 마지막 무대로 초대하고 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_37
  ws_b_95_37: (() => {
    const title = '한계의 기준';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await era.printAndWait('개선문상 전날');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 묵고 있는 호텔에 초대받지 않은 손님이 찾아왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', call_25, '? 어째서……']);
      await coffee.say_and_wait(['…………', c_call_t]);
      era.println();
      await era.printAndWait([
        '일본에 남아 있어야 할 ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait(['개선문상 전날, 프랑스에 도착한 것이다.']);
      era.println();
      await coffee.say_and_wait(['……', callname_25, '에게 데려다 달라고 부탁했어.']);
      await coffee.say_and_wait([callname_25, '이(가) 말해 줬어……']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 조용히 침대 가장자리에 앉아 입을 열지 않았다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '이(가) 말을 마치기를 기다리고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait(['말할게.', c_call_t, ', 자네 다리……']);
      await tachyon.say_and_wait(
        '……그래, 이미 한계에 도달했네. 그렇지 않더라도 내일 레이스에서는 모든 것을 쏟아부을 생각일세…… 한 치도 남기지 않겠네.',
      );
      await coffee.say_and_wait('……왜?');
      era.println();
      await era.printAndWait([
        '왠지 당사자인 ',
        tachyon.get_colored_name(),
        '보다 ',
        coffee.get_colored_name(),
        '쪽이 더 초조해 보였다.',
      ]);
      await coffee.say_and_wait([
        '……또 다카라즈카 기념 때처럼 나를 위해, 나와 친구들을 위해 출전하려는 거라면……',
      ]);
      await coffee.say_and_wait('절대로 인정할 수 없어. 여기서—— 출전을 막아서라도.');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 두 눈이 갑자기 커졌다.',
      ]);
      await era.printAndWait([
        '순간 보이지 않는 거대한 손이 ',
        tachyon.get_colored_name(),
        '의 움직임을 막은 듯했다.',
      ]);
      await era.printAndWait([tachyon.sex, '는 그 자리에서 몸이 묶인 듯 움직일 수 없었다.']);
      await era.printAndWait([
        '그런데도 ',
        tachyon.sex,
        '의 눈빛은 여전히 평온했다.',
      ]);
      await era.printAndWait('그러고는……');
      era.println();
      await tachyon.say_and_wait('………후후.');
      await coffee.say_and_wait([c_call_t, '……？']);
      await tachyon.say_and_wait('후후후…… 하하하!');
      era.println();
      await era.printAndWait([
        '정신이 나간 듯한 상황인데도 ',
        tachyon.get_colored_name(),
        '은(는) 시원스럽게 소리 내어 웃었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '있지, ',
        call_25,
        '……자네, 조금 자의식이 과한 것 아닌가?',
      ]);
      await coffee.say_and_wait('！？');
      await tachyon.say_and_wait(
        '자네를 위해 달린다고? ……지나친 생각일세.',
      );
      await tachyon.say_and_wait([
        '내 목적은 처음부터 끝까지 단 하나.',
        tachyon.uma_sex_title,
        '의 한계를 뛰어넘는 것……',
        tachyon.uma_sex_title,
        '의 가능성을 증명하는 것.',
      ]);
      era.println();
      await era.printAndWait([
        '어느새 ',
        tachyon.get_colored_name(),
        '을(를) 옭아매던 힘은 풀려 있었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 여유롭게 일어서서 있지도 않은 먼지를 털었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그 목적을 위해서라면 무엇을 희생해도 상관없네. 나 자신조차도.',
      );
      await tachyon.say_and_wait([
        '오히려 자네는 ',
        call_25,
        '……그런 각오가 있나? 지금 자네가 나를 넘어설 수 있겠나?',
      ]);
      await coffee.say_and_wait('…………！');
      await tachyon.say_and_wait(
        '……나머지 이야기는 레이스가 끝난 뒤에 하겠네. 그때 전부 말해 주지.',
      );
      era.println();
      await era.printAndWait([
        '대답을 기다리지 않고 ',
        tachyon.get_colored_name(),
        '은(는) 방을 나갔다.',
      ]);
      await era.printAndWait([
        '맞은편에는 두 사람의 대화가 끝나기를 방 밖에서 기다리던 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 자네 방으로 가겠네.',
      ]);
      era.println();
      await era.printAndWait('……뭐?');
      era.println();
      await tachyon.say_and_wait('뭔가?');
      era.printButton('「이성의 방에 들어가는 건 아무래도 좀 곤란하지 않나……」', 1);
      era.printButton('「타키온, 나를 유혹하는 거야?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '멍청이! ……그렇게 폼 잡는 대사를 해 놓고 곧장 자기 방으로 돌아가면 모양이 빠지지 않나. 그러니까 자네 방에서 기다리게 해 주게.',
      );
      await tachyon.say_and_wait(
        '그나저나…… 자네 방에 실험 도구는 있겠지?',
      );
      await tachyon.say_and_wait([
        '방금 ',
        call_25,
        '의 그 표정을 보니 왠지 또 영감이 떠올랐네……',
      ]);
      await tachyon.say_and_wait(
        '내일은 레이스에 출전하니 오늘 이상한 걸 먹을 수는 없네. 대신 자네가 먹어 주겠지~~?',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 과장스러운 모습을 보며 ',
        you.get_colored_name(),
        '은(는) 저도 모르게 웃었다.',
      ]);
      await era.printAndWait(
        '내일 결과가 어떻게 되든 적어도 오늘만큼은 이 시간을 즐기자.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_39
  ws_b_95_39: (() => {
    const title = '한계를 넘어서……?';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 은퇴한 뒤로 연구실에서는 언제나 ',
        tachyon.sex,
        '의 밝은 목소리가 들려왔다.',
      ]);
      await tachyon.say_and_wait([
        '하하하!',
        call_25,
        '！',
        call_25,
        '! 어서 내 신약을 시험해 보게!',
      ]);
      await coffee.say_and_wait('……시끄러워.');
      era.println();
      await era.printAndWait([
        '은퇴와 동시에 모든 부담을 내려놓은 듯한 ',
        tachyon.sex,
        '은(는) 온 힘을 신약 개발에 쏟고 있었다.',
      ]);
      await era.printAndWait([
        '첫 번째 피해자는 당연히 ',
        tachyon.sex,
        '와 가장 가까운 ',
        you.get_colored_name(),
        '와 ',
        coffee.get_colored_name(),
        '였다.',
      ]);
      await era.printAndWait([
        '은퇴한 뒤 ',
        tachyon.sex,
        '이(가) 다시 일어서지 못할까 봐 걱정하던 ',
        you.get_colored_name(),
        '도 조금은 마음을 놓았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! 자네도 빠져나갈 수는 없네! 자네 몫은 여기 있네!',
      ]);
      era.printButton('말없이 약을 받아 마신다', 1);
      era.printButton('「타키온이 기뻐한다면 뭐든 마실게!」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('이런, 오늘따라 상당히 적극적이군?');
        await coffee.say_and_wait([
          '……또 ',
          callname_25,
          '에게 뭘 먹인 거야. 솔직하게 말해.',
        ]);
        await tachyon.say_and_wait(
          '음…… 어제 약은 영양 흡수 효율을 높이는 것이었고 푸른빛이 났지. 오늘은……',
        );
        await coffee.say_and_wait([
          '거짓말…… 분명 무슨 사랑의 묘약일 거야. 그렇지 않고서야 ',
          callname_25,
          '이(가) 그런 수상한 걸 순순히 마실 리 없잖아.',
        ]);
        await tachyon.say_and_wait('말이 너무 심하군!');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait('뭐…… 바보…… 갑자기 왜 그런 달콤한 말을……');
        } else if (relation <= 225) {
          await tachyon.say_and_wait(
            '……아니, 갑자기 왜 그런 낯간지러운 소리를 하는 건가……',
          );
        } else if (relation >= 225) {
          await tachyon.say_and_wait(
            '에…… 아니, 갑자기 왜 그런 달콤한 말을……',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 어이없다는 표정으로 ',
            you.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
          await era.printAndWait('너무하잖아.');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '？',
            callname_25,
            '? 두 사람 관계를 좀 설명해 줄래? ……지금 나는 그다지 침착하지 못할지도 몰라.',
          ]);
        } else {
          await coffee.say_and_wait('……그런 애정 행각은 여기서 하지 마.');
        }
      }
      era.drawLine();
      await coffee.say_and_wait(['……아, 맞다. ', callname_25, ', 이제 슬슬……']);
      era.println();
      await era.printAndWait([
        '소란이 가라앉고 나니 ',
        coffee.get_colored_name(),
        '의 훈련 시간이 되었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 끄덕이고 ',
        coffee.get_colored_name(),
        '와 훈련장으로 향하려 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오호? 또 훈련인가? 요즘 ',
        call_25,
        '는 상당히 성실해 보이는군.',
      ]);
      await coffee.say_and_wait([
        '……난 언제나 성실하게 훈련해.',
        c_call_t,
        '와 같은 취급하지 마.',
      ]);
      await coffee.say_and_wait('게다가 연말이 가까워지고 있어…… 반드시 친구를 뛰어넘을 거야.');
      await coffee.say_and_wait('그것 말고도……');
      await coffee.say_and_wait('누군가의 도전도……');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '은(는) 가만히 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        prix_lat,
        '에서 ',
        tachyon.get_colored_name(),
        '이(가) 했던 말을 떠올렸다.',
      ]);
      await coffee.say_and_wait(['난 반드시 ', c_call_t, '를 뛰어넘겠어.']);
      await tachyon.say_and_wait('……흠흠, 할 수 있다면 한번 해 보게.');
      await tachyon.say_and_wait(['한계를 뛰어넘게!', call_25, '！']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 눈동자에는 지금도 광기에 가까운 열정이 깃들어 있었다.',
      ]);
      await era.printAndWait([
        '다만……',
        you.get_colored_name(),
        '의 착각일지도 모르지만, 그 빛이 조금 흔들리는 듯했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_47
  ws_b_95_47: (() => {
    const title = '넘어선 한계';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, coffee, you, callname, call_25, love) => {
      await tachyon.print_and_wait([
        '꿈속의 ',
        tachyon.get_colored_name(),
        '은(는) 또다시 그날로 돌아갔다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '경기장의 함성도, ',
        you.sex,
        '의 시선도 결승선을 넘어 희미하게 손을 흔드는 ',
        tachyon.uma_sex_title,
        '에게 쏠려 있다.',
      ]);
      await tachyon.print_and_wait([
        '당연한 일이네. 오늘의 주인공은 ',
        coffee.get_colored_name(),
        '이니까.',
      ]);
      await tachyon.print_and_wait([
        '주인공은 내가 아니다. 주변 사람들이 ',
        tachyon.sex,
        '을(를) 바라보는 것도 당연하다.',
      ]);
      await tachyon.print_and_wait('하지만……');
      await tachyon.print_and_wait('어째서……');
      era.println();
      await tachyon.say_and_wait('줄곧 나를 바라보겠다고 약속했지 않은가.', true);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 이제 더는 달릴 수 없네.',
      ]);
      await tachyon.print_and_wait([
        '그래서 시선을 ',
        coffee.get_colored_name(),
        '에게로 옮긴 건가?',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '주변 관객들 중에는 『',
        tachyon.get_colored_name(),
        '보다 ',
        coffee.get_colored_name(),
        '이(가) 더 강하다』고 외치는 이도 있다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 그런 비교의 말보다도 ',
        you.sex,
        '의 눈빛이 나를 더 아프게 한다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '예전에는 나를 바라볼 때만 나타나던 그 눈빛이, 이제는 ',
        you.sex,
        '가 ',
        call_25,
        '을(를) 바라보는 눈동자에 깃들어 있다.',
      ]);
      await tachyon.say_and_wait('그 눈빛은 나만을 위한 게 아니었나?');
      await tachyon.say_and_wait('내가 태워 버린 그 두 눈은 이제 다 나은 건가?');
      await tachyon.say_and_wait('나를 혼자 남겨 두려는 건가?');
      era.println();
      await tachyon.print_and_wait([
        '꿈속의 ',
        you.sex,
        '은(는) ',
        call_25,
        '와 함께 멀어져 간다.',
      ]);
      await tachyon.print_and_wait('나만 칠흑 같은 공간에 남겨 둔 채.');
      era.println();
      await tachyon.say_and_wait('싫어…… 잠깐, 잠깐만 기다려 주게……');
      era.println();
      await tachyon.print_and_wait('뒤쫓고 싶다.');
      await tachyon.print_and_wait('하지만…… 두 다리가 말을 듣지 않는다.');
      await tachyon.print_and_wait('고개를 숙이고서야 깨달았다…… 아아.');
      await tachyon.print_and_wait(
        '망가진 두 다리로는 달리는 이를 따라잡을 수 없다는 것을.',
      );
      era.println();
      await tachyon.print_and_wait('내 목소리가 들린 것인지, 멀어지던 등이 돌아본다.');
      await tachyon.print_and_wait('그 눈에 더는 빛이 없다.');
      await tachyon.print_and_wait(
        '아니, 빛이 사라진 게 아니라———— 다른 누군가에게 옮겨 간 것이다.',
      );
      era.println();
      await tachyon.print_and_wait('싫어.');
      await tachyon.print_and_wait('나를 봐 주게.');
      await tachyon.print_and_wait('예전처럼 나를 바라봐 주게.');
      await tachyon.print_and_wait('날 두고 가지 말게. 혼자 두지 말게.');
      era.println();
      await tachyon.print_and_wait('하지만……');
      await tachyon.print_and_wait([
        '달릴 수 없는 ',
        tachyon.get_colored_name(),
        '에게 상대를 붙잡아 둘 자격이 있을까?',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 꿈에서 깨어났다.',
      ]);
      await tachyon.print_and_wait('무엇을 보았는지는 이제 잘 기억나지 않는다.');
      await tachyon.print_and_wait([
        '……하지만 몸 상태를 생각하면 십중팔구 재팬컵 때의 꿈이겠지.',
      ]);
      await tachyon.print_and_wait([call_25, '은(는) 이미 한계를 넘어섰다.']);
      await tachyon.print_and_wait([tachyon.get_colored_name(), '을(를) 넘어섰다.']);
      await tachyon.print_and_wait([
        '그러니……',
        you.sex,
        '가 ',
        call_25,
        '에게 매료되는 것도 당연한 일이네.',
      ]);
      await tachyon.print_and_wait([
        '무엇보다 ',
        tachyon.get_colored_name(),
        '을(를) 넘어선 달리기니까.',
      ]);
      era.println();
      await tachyon.say_and_wait('……아니.');
      if (love <= 50) {
        await tachyon.print_and_wait('이제야 깨닫다니 너무 늦은 걸까?');
        await tachyon.print_and_wait(
          '이렇게 오랫동안 곁에 있으면서도 줄곧 당연하게 여겼다.',
        );
        await tachyon.print_and_wait([
          '잃을 뻔하고서야 내가 ',
          you.sex,
          '에게서 떠날 수 없다는 사실을 깨달았다.',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '이라면 앞으로도 예전처럼 나를 돌봐 주겠지.',
      ]);
      await tachyon.print_and_wait([
        '지금까지 그랬듯 ',
        tachyon.get_colored_name(),
        '의 부탁도 들어줄 것이다.',
      ]);
      await tachyon.print_and_wait([you.sex, '은(는) 그만큼 다정한 사람이니까.']);
      await tachyon.print_and_wait([
        '……하지만 그것만으로는 ',
        tachyon.get_colored_name(),
        '에게 충분하지 않다.',
      ]);
      await tachyon.print_and_wait([you.sex, '의 빛이 나를 따뜻하게 해 주었다.']);
      await tachyon.print_and_wait('희망을, 레이스를 향한 갈망을 일깨웠다.');
      await tachyon.print_and_wait(
        '그러니 제발…… 나에게서 그 빛을 빼앗지 말아 주게.',
      );
      era.println();
      await tachyon.print_and_wait(
        'Jingle bell Jingle bell Jingle all the way～～',
      );
      era.println();
      await tachyon.print_and_wait('갑자기 창밖에서 크리스마스 노래가 들려왔다.');
      await tachyon.print_and_wait([
        '성탄절이 다가오지만 ',
        tachyon.get_colored_name(),
        '의 가슴은 여전히 어둠에 잠겨 있다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_48
  ws_b_95_48: (() => {
    const title = '聖夜の約束';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} vega アドマイヤベガ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {boolean} tachyon_win_prix_lat アグネスタキオンがシニア級凱旋門賞を勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      vega,
      you,
      callname,
      call_25,
      callname_25,
      tachyon_win_prix_lat,
    ) => {
      let ret = 0;
      await era.printAndWait([
        '最近の ',
        tachyon.get_colored_name(),
        ' は、様子がおかしい',
      ]);
      await era.printAndWait([
        '一人で塞ぎ込み、',
        coffee.get_colored_name(),
        ' のトレーニングにも付いてこない。実験すら、ほとんどしなくなった',
      ]);
      await era.printAndWait([
        '実験の最大の被害者である ',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' にとっては、悪いことばかりでもない。だが、心配ではある',
      ]);
      await era.printAndWait([
        '突然、商店街のクリスマスソングが ',
        you.get_colored_name(),
        ' の耳に入った',
      ]);
      await era.printAndWait([
        'そうだ。クリスマスを口実に、',
        tachyon.sex,
        'を連れ出して話そう',
      ]);
      era.drawLine();
      await era.printAndWait('聖夜の商店街は、普段より灯が明るく、熱気も高い');
      await era.printAndWait('理由はクリスマスだけではない。それ以上に……');
      await you.say_as_passer_by_and_wait('商店街のおじさん', [
        '有馬記念予想！ 明日の有馬記念、レース前予想！',
      ]);
      await you.say_as_passer_by_and_wait('観光客A', [
        '明日の有馬記念、どうなるかな……まあ、勝つのは ',
        coffee.get_colored_name(),
        ' だろうな',
      ]);
      await you.say_as_passer_by_and_wait('観光客B', [
        'ジャパンカップの走りは本当に強かった！……史上最強と言ってもいいんじゃないか',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('黙り続けるわけにもいかない。ここでは何か言おう');
      era.printButton('「明日は有馬記念だ。カフェは大丈夫だ」', 1);
      era.printButton('「向こうのハチミツ特飲、クリスマス特売みたいだ」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, 'は、やはり何も言わない']);
        await era.printAndWait([
          '空気が重い。',
          you.get_colored_name(),
          ' は仕方なく、',
          coffee.get_colored_name(),
          ' の最近のトレーニングの話を続ける',
        ]);
      } else {
        await tachyon.say_and_wait('……では、一杯いただきましょう');
        era.println();
        await era.printAndWait([
          'いちばん甘いハチミツを飲んだあと、',
          tachyon.get_colored_name(),
          ' の機嫌は少し緩んだ',
        ]);
        await era.printAndWait([
          'ついでに、',
          you.get_colored_name(),
          ' も合わせたいちばん甘いのを頼んだが……',
        ]);
        await era.printAndWait([
          '一口吸っただけで、',
          you.get_colored_name(),
          ' は歯が痛くなった',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が嬉しそうにハチミツを飲むのを見て、',
          you.get_colored_name(),
          ' は機会を見て',
          tachyon.sex,
          'の歯を診せたほうがいいのではないかと考え始める',
        ]);
      }
      era.println();
      await era.printAndWait([
        'ほどなく、商店街の中央のクリスマスツリーの前まで来た',
      ]);
      await era.printAndWait([
        '突然の強風が、周囲の有馬記念の報道を二人の前へ吹き寄せた',
      ]);
      await era.printAndWait([
        '新聞にはジャパンカップのときの ',
        coffee.get_colored_name(),
        '。威風堂々としている',
      ]);
      era.printButton(
        '「ジャパンカップ……あのときのカフェは本当に強かった。場違いかもしれないが、タキオンと……」',
        1,
      );
      era.printButton('「タキオン！ 向こうの綿菓子屋、すごそうだ！」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait([
          'さっき有馬記念を出したとき、',
          tachyon.get_colored_name(),
          ' の機嫌は悪かった',
        ]);
        await era.printAndWait([
          'だから ',
          you.get_colored_name(),
          ' は話題をジャパンカップへ変えた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の宿願が叶った日なら、',
          tachyon.get_colored_name(),
          ' の気も上がるだろう',
        ]);
        await era.printAndWait('ところが……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は、やはり何も言わない',
        ]);
        await era.printAndWait('まだ違うのか……');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' はツリー脇の綿菓子屋を見る。職人の手で、ふわふわの動物が次々と形になる',
        ]);
        era.println();
        await tachyon.say_and_wait('……いいえ、私は……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が言い終える前に、店主は大きくてふわふわの綿菓子モルモットを ',
          tachyon.get_colored_name(),
          ' の手へ押し込んだ',
        ]);
        await vega.say_as_unknown_and_wait(
          '機嫌が悪いときは覚えておきなさい。ふわふわだけは、あなたを裏切らない',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('店主が、なぜか妙に見覚えがある');
          await era.printAndWait('……錯覚、だろう');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はぼんやりと綿菓子モルモットを受け取り、返さず、多くも言わない',
        ]);
        await era.printAndWait([
          'それから',
          tachyon.sex,
          'は小さく口を開け、一口かじった',
        ]);
        era.println();
        await tachyon.say_and_wait('……ふわふわ、ですわ');
        era.println();
        await era.printAndWait([
          'なぜか、それを聞いた店主は得意げに胸を張った',
        ]);
      }
      era.println();
      await era.printAndWait(['最後に、商店街の端まで歩いた']);
      await era.printAndWait([
        '路傍の書店。店内でいちばん目立つ場所に、期限切れの雑誌が数冊並んでいる',
      ]);
      await era.printAndWait('期限切れ……とも言い切れない');
      await era.printAndWait(
        'レース情報としては古いが、時期としては二ヶ月前の雑誌にすぎない',
      );
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        ' の凱旋門賞後の取材雑誌だ',
      ]);
      await you.say_as_passer_by_and_wait('書店の店主', 'いらっしゃいませ！');
      era.printButton('「これは……」', 1);
      era.printButton('「凱旋門賞の雑誌か？」', 2);
      await era.input();
      await era.printAndWait([
        '店主は、',
        you.get_colored_name(),
        ' の後ろで頭を下げている ',
        tachyon.get_colored_name(),
        ' に気づいていない',
      ]);
      await era.printAndWait('雑誌を見て、自慢げに話し始める');
      await you.say_as_passer_by_and_wait('書店の店主', [
        'おお！ この雑誌はな、わしがわざわざここに置いてるんだ！',
      ]);
      if (tachyon_win_prix_lat) {
        await you.say_as_passer_by_and_wait('書店の店主', [
          'やっとだよ、日本の',
          tachyon.uma_sex_title,
          'が世界の凱旋門を取ったんだ！ 記念に置かねばならん！',
        ]);
      }
      await you.say_as_passer_by_and_wait('書店の店主', [
        '外の連中は何もわかっとらん。',
        tachyon.get_colored_name(),
        ' が一番強い！ 引退してなけりゃ、あの ',
        coffee.get_colored_name(),
        ' なんぞ',
        tachyon.sex,
        'の相手にもならん！',
      ]);
      era.printButton('「そうとも言い切れない……」', 1);
      era.printButton('「もちろん、タキオンが一番強い」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait(['ジャパンカップ前なら、たしかにそうだ']);
        await era.printAndWait([
          'だがジャパンカップ後の ',
          coffee.get_colored_name(),
          ' は、すでに ',
          tachyon.get_colored_name(),
          ' が認めた完成体だ',
        ]);
        await era.printAndWait([
          'その状態の ',
          coffee.get_colored_name(),
          ' が、もう一度 ',
          tachyon.get_colored_name(),
          ' と走ったら……勝敗はわからない',
        ]);
        await era.printAndWait([
          'そうだ。',
          coffee.get_colored_name(),
          ' が限界を超えても……自分の中では、',
          tachyon.get_colored_name(),
          ' なら',
          tachyon.sex,
          'と渡り合えると信じている',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '自身が言うような足枷では、絶対にない',
        ]);
        await you.say_as_passer_by_and_wait(
          '書店の店主',
          'ちっ、通が来たかと思ったら、何もわかっとらん奴だったか',
        );
        era.println();
        await era.printAndWait([
          '店主にそう言われ、',
          you.get_colored_name(),
          ' は苦笑するしかなかった',
        ]);
        await era.printAndWait([
          'ふと、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' がその雑誌の山へ近づくのを見た',
        ]);
        era.println();
        await tachyon.say_and_wait('……店主、一冊くださいまし');
        await you.say_as_passer_by_and_wait('書店の店主', [
          'おお、',
          tachyon.sex_code === 1 ? '兄ちゃん' : '嬢ちゃん',
          'は目が高いな',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はわざと声を落とし、',
          tachyon.sex,
          '本来の音色がわからないようにしている',
        ]);
        await era.printAndWait(
          'だがこの雑誌……当時サンプルは受け取っていたはずだ。なぜもう一度買う？',
        );
        era.println();
        await tachyon.say_and_wait(
          '……仕方ありませんわ。この雑誌の価値がわからない人がいるので、私自身で大切にするしか',
        );
        era.println();
        await era.printAndWait('え');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' がコッソリ、苛立ち混じりの目を ',
          you.get_colored_name(),
          ' へ向ける',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は思わず考える。また何か間違えたか？',
        ]);
      } else {
        await tachyon.say_and_wait('……！');
        era.println();
        await era.printAndWait('聞くまでもない');
        await era.printAndWait('もし、に意味はないとしても');
        await era.printAndWait([
          'それでももしを考えずにはいられない',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          '無限の可能性と想像を連れてくる',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait(['それが ', tachyon.get_colored_name()]);
        await you.say_as_passer_by_and_wait('書店の店主', [
          'ほら見ろ！',
          you.sex_code === 1 ? '兄ちゃん' : '嬢ちゃん',
          'が入ってきたときから感じてた。この人は通だ！',
        ]);
        await you.say_as_passer_by_and_wait('書店の店主', [
          'だから言ったろ、',
          tachyon.get_colored_name(),
          ' が一番強い！ あの ',
          coffee.get_colored_name(),
          ' なんぞ相手にもならん！',
        ]);
        await you.say_as_passer_by_and_wait('書店の店主', [
          '実はな、わしは去年の皐月賞から ',
          tachyon.get_colored_name(),
          ' を見てるんだ！ あの走り……',
          tachyon.uma_sex_title,
          'の限界と言っても、誇張じゃないぜ！',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' と店主は、興に乗って ',
          tachyon.get_colored_name(),
          ' のレースを語る',
        ]);
        await era.printAndWait([
          '後ろの ',
          tachyon.get_colored_name(),
          ' が耐えきれなくなり、',
          you.get_colored_name(),
          ' の手を引いて店の外へ出ようとするまで',
        ]);
        await era.printAndWait([
          'なぜか',
          tachyon.sex,
          'の顔は少し赤い……照明の錯覚だろう',
        ]);
      }
      era.println();
      if (ret >= 2) {
        await era.printAndWait(['いつの間にか、堤防のそばまで歩いていた']);
        await era.printAndWait(
          '暗く静かな川岸は、遠く商店街の灯とクリスマスソングと対照をなしている',
        );
        era.println();
        await tachyon.say_and_wait('……雪ですわ');
        era.println();
        await era.printAndWait('たしかに、周囲に綿のような雪が舞い始めた');
        await era.printAndWait(
          '……こんな夜更けに、雪の中でこんな場所へ来るのは、やはり危ないだろう',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が沈んでいる理由は聞けなかったが、今日はもう遅すぎる',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が、今日はここまでにしようと切り出そうとしたとき……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………ふっ');
        era.println();
        await era.printAndWait([
          '突然、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' に抱きつかれた',
        ]);
        await era.printAndWait('まったく予兆のない、唐突な抱擁');
        era.printButton('「タキオン……？」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は何か言おうとしたが、腕の中で微かに震える体、',
          you.get_colored_name(),
          ' の肩に預けられた頭、そして理由のわからない肩の湿りに、今は口を開くべきではないと悟る',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'ごめんなさい……でも……少しだけ、少しだけでいいのです……',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は呆然と、',
          tachyon.get_colored_name(),
          ' が自分の腕の中で泣くのを許した',
        ]);
        await era.printAndWait('胸の中は疑問ばかりだ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' に、いったい何があったのか',
        ]);
        era.drawLine();
        await tachyon.print_and_wait('実は、もう察していた');
        await tachyon.print_and_wait(
          '今日連れ出したのは、自分の推測をもう一度確かめるためでしかない',
        );
        await tachyon.print_and_wait(
          'だが実際に耳にすれば、胸が刺されるのを止められなかった',
        );
        era.println();
        await tachyon.print_and_wait('先ほどの世間話からも、もうわかっていた');
        await tachyon.print_and_wait([
          you.sex,
          'の話題は三言となく ',
          call_25,
          ' に戻り、目にも',
          tachyon.sex,
          'への期待が満ちている',
        ]);
        await tachyon.print_and_wait([
          'かつての、何事も ',
          tachyon.get_colored_name(),
          ' を優先していた ',
          callname,
          ' は、もういない',
        ]);
        await tachyon.print_and_wait([
          '今の',
          you.sex,
          'は、',
          call_25,
          ' の「',
          callname_25,
          '」だ',
        ]);
        await tachyon.print_and_wait('情でも理でも、それが最も正しい選択だ');
        await tachyon.print_and_wait(
          '自分は走りで惑わして、便利な道具として扱った卑しい魔女にすぎない',
        );
        await tachyon.print_and_wait([
          'さまざまな障害を越え、ついには限界を超えた',
          coffee.uma_sex_title,
        ]);
        await tachyon.print_and_wait([
          '自らの走りで、魔女が',
          you.sex,
          'にかけた呪いを解き、最後は二人が幸せに暮らす',
        ]);
        await tachyon.print_and_wait('それがきっと、物語として最良の結末だ');
        era.println();
        await tachyon.print_and_wait('だから……');
        era.println();
        await tachyon.say_and_wait(
          '最後に一度……私を、最後に一度だけ愛してくださいまし',
        );
        await tachyon.say_and_wait([
          '一度だけでいい……そのあとは、あなたと ',
          call_25,
          ' にはもう干渉しませんわ',
        ]);
        era.println();
        await tachyon.print_and_wait(
          'さまざまな口実を並べて、一夜の歓びだけを乞う',
        );
        await tachyon.print_and_wait(
          '哀れなことに、最後まで自分はこうした口実しか使えない',
        );
        await tachyon.print_and_wait([
          '脅しのような口調で、',
          you.sex,
          'に最後の慈悲を願う',
        ]);
        await tachyon.print_and_wait('一度だけでいい');
        await tachyon.print_and_wait([
          'そうすれば自分は諦め、心から ',
          you.couple_title,
          ' を祝福できる',
        ]);
        await tachyon.print_and_wait(
          '頭の中の「本当に諦められると思っているの」という囁きを無視し',
        );
        await tachyon.print_and_wait('そんな言葉で自分を説得する');
        era.println();
        await era.printAndWait([
          'そんな ',
          tachyon.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' は選ぶ',
        ]);
        era.printButton('「抱きしめる」', 1);
        era.printButton('「キスする」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait(
            '突然、まだ口にしようとしていた言葉が塞がれた',
          );
          await tachyon.print_and_wait(['……', you.sex, 'に、逆に抱き返された']);
          await tachyon.print_and_wait('言いたいことが喉に詰まり、出ない');
        } else {
          await tachyon.print_and_wait(
            '突然、まだ口にしようとしていた言葉が塞がれた',
          );
          await tachyon.print_and_wait('……優しく、温かな感触');
          await tachyon.print_and_wait(
            '冬の寒さをすっかり取り去るような、聖夜のキス',
          );
        }
        era.println();
        await tachyon.print_and_wait(
          '違う……自分の意図は、そういうものではない',
        );
        await tachyon.print_and_wait([
          'それとも……',
          tachyon.get_colored_name(),
          ' には、愛される資格すらもうないというの？',
        ]);
        await tachyon.print_and_wait(
          '自暴自棄の末に、そんな考えが浮かんでしまう',
        );
        era.println();
        await tachyon.say_and_wait(['ん……', callname]);
        era.println();
        await tachyon.print_and_wait('そう思った、まさにそのとき');
        await tachyon.print_and_wait([
          '心の雑念を追い出すように、',
          you.sex,
          'は抱擁の力を強めた',
        ]);
        era.printButton('「少なくとも、明日の有馬記念は見てくれ」', 1);
        era.printButton('「必ずタキオンにけじめはつける」', 2);
        await era.input();
        await tachyon.print_and_wait('けじめ……どんなけじめ');
        await tachyon.print_and_wait('関係を終わらせる、けじめなのか？');
        await tachyon.print_and_wait([
          you.sex,
          'の両目を真っすぐに見つめても、何の意味も読み取れない',
        ]);
        era.println();
        await tachyon.print_and_wait('……それでも、悪くはない');
        await tachyon.print_and_wait([
          '最後に、',
          you.sex,
          'のあの熱狂した目をもう一度見られるなら',
        ]);
        await tachyon.print_and_wait([
          '……その視線の先が、もう ',
          tachyon.get_colored_name(),
          ' ではなくても',
        ]);
      } else {
        await tachyon.say_and_wait('……ああ、雪ですわ');
        era.println();
        await era.printAndWait('ふと、空から白い雪が舞い始めた');
        await era.printAndWait([
          'もう帰ったほうがいいか……そう考えた ',
          you.get_colored_name(),
          ' の服を、',
          tachyon.get_colored_name(),
          ' が軽く引く',
        ]);
        era.println();
        await tachyon.say_and_wait('どこかで、少し座りましょう');
        era.println();
        await era.printAndWait('そうだ。今日の目的は、まだ果たしていない');
        await era.printAndWait([
          '店に腰を下ろして、',
          tachyon.get_colored_name(),
          ' が不機嫌な理由を聞き出そう',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は自分に気合を入れた',
        ]);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '？ 座らないのですか？']);
        era.printButton('「……いや、その」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'そんなに口ごもるなんて、あなたらしくありませんわ……それとも、言いづらい事情でも？',
        );
        era.println();
        await era.printAndWait('いや、言いづらい事情というより、問題は……');
        era.printButton('「生徒と一緒に居酒屋は、NGだろう」', 1);
        era.printButton('「미성년자와 함께 이자카야에 가는 건 불법이지」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' を引っ張って入ろうとしているのは、商店街の外れの居酒屋だった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'もう引退したのですから、大丈夫でしょう……私もこういう場所は初めてですけれど、問題はないはずですわ',
        );
        await tachyon.say_and_wait([
          'それとも ',
          callname,
          '、もうそんな歳なのに、居酒屋にも入れないのですか？',
        ]);
        era.printButton('「問題は引退かどうかじゃなく、生徒だ！」', 1);
        era.printButton('「……挑発は通じない」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' が断って ',
          tachyon.get_colored_name(),
          ' を引き戻そうとしたとき、',
          tachyon.get_colored_name(),
          ' はもう店の中へ入っていた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'ほらほら、来なさい。夜食……というようなものですわ',
        );
        await you.say_as_passer_by_and_wait('店主', 'いらっしゃい～～');
        era.println();
        await era.printAndWait([
          '扉が開くと、店内の暖かさと外の冷気が対比になり、',
          you.get_colored_name(),
          ' はもう足が動かなくなった',
        ]);
        era.printButton('「……少し座るくらいなら、まあ」', 1);
        await era.input();
        await era.printAndWait([
          '店に入って、',
          you.get_colored_name(),
          ' は意外なものを見た',
        ]);
        await era.printAndWait(
          '店内を忙しく動き回る店主の後ろに、栗色の長い尻尾がある',
        );
        era.println();
        await tachyon.say_and_wait('……おや、まさか……');
        era.println();
        await you.say_as_passer_by_and_wait(
          '店主',
          'いらっしゃい！ ……ねえお客さん、あんた、学生でしょう？',
        );
        era.println();
        await tachyon.say_and_wait(
          'あら、そう見えますの？ でも私はもう引退した身分ですわよ',
        );
        era.println();
        await era.printAndWait(
          'いや、引退したからといって生徒でなくなるわけではない',
        );
        await era.printAndWait(
          '突っ込みたかったが、店主は頷いて「じゃあ問題ない」と言う',
        );
        await era.printAndWait('いや……何が問題ないのだ');
        era.println();
        await you.say_as_passer_by_and_wait(
          '店主',
          'それに、隣の人はあんたのトレーナーでしょう。トレーナーが一緒なら大丈夫よ',
        );
        await tachyon.say_and_wait('……ほう、わかりますの？');
        era.println();
        await era.printAndWait([
          '問題は大きいだろう……だがそれより、',
          you.get_colored_name(),
          ' も、なぜ自分がトレーナーだとわかったのか気になる',
        ]);
        await you.say_as_passer_by_and_wait('店主', [
          you.sex,
          'の目よ。うちの亭主とそっくり。担当を見たら足が止まっちゃう、あの目',
        ]);
        era.println();
        await era.printAndWait('な、なんという言い草だ');
        await era.printAndWait('自分は変態なのか');
        await you.say_as_passer_by_and_wait(
          '店主',
          'ふふ、その目は良い亭主の必須条件よ～～逃しちゃだめ',
        );
        era.println();
        await era.printAndWait('店主はそう言うと、他の客の相手へ向かった');
        await era.printAndWait([
          you.get_colored_name(),
          ' は恐る恐る ',
          tachyon.get_colored_name(),
          ' を見る。今度こそ',
          tachyon.sex,
          'に笑われる……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('何を考えているのかわからない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の表情は、どこか上の空だ',
        ]);
        era.printButton('「タキオン？」', 1);
        await era.input();
        await tachyon.say_and_wait('……あ、ええ、コホン、何でもありませんわ');
        era.println();
        await era.printAndWait([
          '我に返ると、',
          tachyon.get_colored_name(),
          ' の顔は遅延起動の発熱弁当のように',
        ]);
        await era.printAndWait([
          '一瞬で真っ赤になり、',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の顔から湯気が立つように見えた',
        ]);
        await era.printAndWait([
          '気まずい空気を隠すように、',
          tachyon.sex,
          'は店内の様子へ注意を移す',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' も視線をそちらへ向けた',
        ]);
        era.println();
        await era.printAndWait('店主は忙しく客をもてなしている');
        await era.printAndWait([
          '店の客の中には有馬記念の話をする者もいるが、主流ではない',
        ]);
        await era.printAndWait(
          '毎日の天気と同じで、暇つぶしに二言三言交わす話題だ',
        );
        await era.printAndWait([
          '証拠に、今も誰も ',
          tachyon.get_colored_name(),
          ' を認めていない',
        ]);
        await era.printAndWait([
          'トレセン学園近くの商店街で、上半期もっとも名を馳せた',
          tachyon.uma_sex_title,
          'を知らないなど、極めて異例だ',
        ]);
        era.println();
        await era.printAndWait([
          'それを見て、',
          you.get_colored_name(),
          ' は',
          tachyon.uma_sex_title,
          'である店主を思い出す',
        ]);
        await era.printAndWait([
          '亭主がトレーナーだと言うなら、',
          tachyon.sex,
          'もかつてはレースの',
          tachyon.uma_sex_title,
          'だったのだろう',
        ]);
        await era.printAndWait(
          '引退後は、レースとほとんど縁のないこんな暮らしをしている',
        );
        await era.printAndWait(
          'これほど淡々として、これほど退屈で、これほど……穏やかだ',
        );
        era.println();
        await tachyon.say_and_wait('……これも、ひとつの可能性、ですの？');
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, 'の可能性']);
        await era.printAndWait([
          'それは ',
          tachyon.get_colored_name(),
          ' がいつも口にする言葉だ',
        ]);
        await era.printAndWait([
          '……だが、',
          tachyon.uma_sex_title,
          'は誰もが競走',
          tachyon.uma_sex_title,
          'になれるわけではない',
        ]);
        await era.printAndWait([
          '競走',
          tachyon.uma_sex_title,
          'であっても、レース場ではない道を選ぶことはできる',
        ]);
        era.println();
        await era.printAndWait([
          'では、その可能性は ',
          tachyon.get_colored_name(),
          ' にも当てはまるのか？',
        ]);
        await era.printAndWait([
          'ふと、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' が沈んでいる理由を理解した',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' にとって、そんな可能性はあるのか？',
        ]);
        await era.printAndWait([
          '喫茶店の店主になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '研究の道へ進み、科学者になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '普通の生徒として進学し、大学生になり、社会へ出て会社員になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          'にもあるのか。普通の人と同じように、レース場を離れ、自分の暮らしを生きる日々',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '、私についてきてくれますの？',
        ]);
        await tachyon.say_and_wait(
          'もし……私が、そういう可能性を選んだとしたら',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' と一緒に、レースとも、',
          tachyon.uma_sex_title,
          'の速度とも無縁の、淡く穏やかな日常を送る',
        ]);
        await era.printAndWait('そんな暮らしは、きっととても美しいだろう');
        await era.printAndWait([
          '平凡な日々でも、',
          tachyon.get_colored_name(),
          ' がいれば、絶対に退屈しない',
        ]);
        await era.printAndWait([tachyon.sex, 'と一緒に、二人だけの生活を築く']);
        await era.printAndWait('……だが、今はだめだ');
        era.printButton('「……明日の有馬のあとでもいいか」', 1);
        era.printButton('「明日、有馬を見てからもう一度聞いてくれ」', 2);
        await era.input();
        await era.printAndWait(
          'レース場を離れたいというのも、選べる可能性のひとつだ',
        );
        await era.printAndWait([
          'だが、今の ',
          tachyon.get_colored_name(),
          ' のように、逃避のように離れるのは絶対に違う',
        ]);
        await era.printAndWait(
          '……明日の有馬が、その目を変えさせてくれればいい',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_betray
  ws_b_betray: (() => {
    const title = 'Betray';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('꿈을 다른 사람에게 맡긴다는 건…… 잔혹한 길이다. 하지만');
      await era.printAndWait('이성적으로 생각하면 희망에 가장 가까이 다가갈 수 있는 선택일 것이다.');
      await era.printAndWait([
        tachyon.sex,
        '이(가) 말하는 운명은 차치하고 ',
        tachyon.sex,
        '의 두 다리는…… 트레이너로서든 ',
        tachyon.get_colored_name(),
        '을(를) 동경하는 팬으로서든',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그 과정에서 ',
        tachyon.sex,
        '이(가) 입을지도 모를 상처를 보고도 못 본 척할 수 없다.',
      ]);
      await era.printAndWait('가능성이 지나치게 낮다.');
      await era.printAndWait('눈앞에 놓인 길조차 가시밭길이다.');
      await era.printAndWait([
        you.get_colored_name(),
        '에게는 그렇게 할 수 없다. 겁쟁이라고 비난받아도 상관없다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 무사하기만 하면 된다.',
      ]);
      await era.printAndWait('그 외에는……');
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 또 다른 담당 ',
        tachyon.uma_sex_title,
        '을(를) 떠올렸다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 주행도 모습도 마찬가지로 ',
        you.get_colored_name(),
        '을(를) 매료시켰다.',
      ]);
      await era.printAndWait('『대신』이라는 말은 오만하고 제멋대로인 표현이다.');
      await era.printAndWait(
        '누구도 다른 누군가를 대신할 수 없다. 누구도 대체품으로 태어나지 않는다.',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          '하지만 누군가 ',
          tachyon.get_colored_name(),
          '의 꿈을 『이어받을』 수 있다면……',
        ]);
        era.println();
        await era.printAndWait([
          '그 사람은 바로 ',
          coffee.get_colored_name(),
          '밖에 없다.',
        ]);
        era.println();
        await era.printAndWait([
          '말없이 서 있는 ',
          you.get_colored_name(),
          '을(를) 바라보고 ',
          tachyon.get_colored_name(),
          '역시 상대가 마음속으로 내린 결정을 알아챘다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 입을 열기만을 기다리고 있었다.',
        ]);
      } else {
        await era.printAndWait(['특히 ', coffee.get_colored_name()]);
        era.printButton(`「……카페${coffee.sex}는 누구의 대체품도 아니야.」`, 1);
        await era.input();
        await tachyon.say_and_wait(['후후, 꽤 감싸 주시는군요……']);
        await tachyon.say_and_wait([
          '안심하세요.',
          tachyon.sex,
          '을(를) 누군가의 대체품이라고 말한 적은 없으니까요……',
        ]);
        await tachyon.say_and_wait([
          '네, 그저 지나가던 친절한 ',
          tachyon.uma_sex_title,
          '이(가) ',
          coffee.get_colored_name(),
          '와(과) 그 트레이너에게 손을 빌려주는 것뿐이에요.',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          '와(과) ',
          coffee.get_colored_name(),
          '의 트레이너』——그 말을 입에 담자 ',
          tachyon.get_colored_name(),
          '의 얼굴에는 놓칠 수 없을 만큼 뚜렷한 실망감이 떠올랐다.',
        ]);
        await era.printAndWait([
          '……그렇다. 이 선택을 한 이상 자신은 정말로 ',
          coffee.get_colored_name(),
          '의 트레이너가 된다…… 하지만 그것이야말로 ',
          tachyon.get_colored_name(),
          '을(를) 위한 최선의 선택일 것이다.',
        ]);
      }
      era.printButton('「……난 플랜 B를 선택하겠어.」', 1);
      await era.input();
      await tachyon.say_and_wait('……그렇군요.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 선택을 듣고 긴말 없이 그저 고개를 끄덕였다.',
      ]);
      await era.printAndWait([
        '방 안은 숨 막히는 침묵에 잠겼다.',
        you.get_colored_name(),
        '이(가) 더는 견디지 못하고 무슨 말이라도 꺼내려던 순간',
      ]);
      era.println();
      await tachyon.say_and_wait('……하하하하!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 갑자기 웃음을 터뜨렸고 ',
        you.get_colored_name(),
        '은(는) 어깨를 움찔했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '좋아요, 아주 좋아요! 올바른 선택을 하셨군요!',
      );
      era.println();
      await era.printAndWait('올바른 선택……이라고?');
      era.println();
      await tachyon.say_and_wait(
        '솔직히 플랜 A를 선택하실까 봐 조금 두려웠어요. 저 같은 사람은 훈련이나 레이스보다 뒤에서 연구하는 편이 더 적성에 맞거든요. 하하하!',
      );
      era.println();
      await era.printAndWait([
        '……',
        tachyon.sex,
        '이(가) 그렇다니 이게 옳은 선택일 것이다. 그렇겠지?',
      ]);
      await era.printAndWait([
        '이것이 ',
        tachyon.sex,
        '에게 가장 적합하고 가장 합리적인 선택일 것이다. 그렇겠지?',
      ]);
      await era.printAndWait('분명 그럴 것이다.');
      await era.printAndWait('틀림없이 그렇다.');
      await era.printAndWait([
        '그렇지 않다면…… 자신은 담당인 ',
        tachyon.uma_sex_title,
        '을(를), 자신의 빛(Tachyon)을 버리고 배신한 것이 된다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그러고 보니 ',
        callname,
        ', 내일도 시험약을 받으러 오세요.',
      ]);
      await era.printAndWait('…………응? 아직도 약을 시험해야 해?');
      await era.printAndWait([
        you.get_colored_name(),
        '의 얼빠진 얼굴을 보고 ',
        tachyon.get_colored_name(),
        '은(는) 웃었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '후후…… 당연하죠. 다만 내일부터의 약은 전부 ',
        call_25,
        '에게 사용할 약이에요……',
      ]);
      await tachyon.say_and_wait(
        '각오해 두세요. 내일부터는 시험할 약이 더 많아질 테니까요.',
      );
      await tachyon.say_and_wait([
        call_25,
        '이(가) 한계에 도달할 기반을 보완하려면 예전보다 훨씬 할 일이 많아요.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 웃으며 대기실을 떠났다. 내가 내린 선택은 ',
        tachyon.sex,
        '에게 아무런 영향을 주지 않은…… 걸까?',
      ]);
      await era.printAndWait([
        '마음속의 불안은 아직 가라앉지 않았다. 그래도 ',
        you.get_colored_name(),
        '은(는) 그 걱정을 재빨리 떨쳐 냈다.',
        coffee.get_colored_name(),
        '을(를) 위해서도 ',
        tachyon.get_colored_name(),
        '을(를) 위해서도, 더 열심히 해야 한다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 월계배에 출전했다.',
      ]);
      await era.printAndWait([
        '전성기를 마무리한 시니어급 강자도, 동기의 실력자도, 드림컵의 선배마저 ',
        tachyon.sex,
        '은(는) 공평하게 뛰어넘었다.',
      ]);
      await era.printAndWait('여전히 시선을 빼앗는 달리기다.');
      await era.printAndWait('여전히 빛과 같은 달리기다.');
      await era.printAndWait('빛처럼 한순간에 사라지는 달리기다.');
      era.println();
      await era.printAndWait([
        '그 후 ',
        tachyon.get_colored_name(),
        '은(는) 트윙클 시리즈 출전을 사실상 무기한 중단한다고 발표했다.',
      ]);
      await era.printAndWait('그 발표는 언론을 크게 뒤흔들었다.');
      await era.printAndWait([
        '하지만 그 어떤 반응도 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.sex,
        '의 동행을 막지는 못했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
