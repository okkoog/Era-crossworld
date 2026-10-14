// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const recruit_flags = require('#/data/event/recruit-flags');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32-plan-b"),

  // [번역 완료] before_arim_kin_b
  before_arim_kin_b: (() => {
    const title = '최종 실험, 준비 완료';
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
      await tachyon.print_and_wait('아리마 기념');
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
        '처음에는, ',
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
          '갑자기, ',
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

  // [번역 완료] hot_spring_b
  hot_spring_b: (() => {
    const title = '또 다른 가능성';
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
        '그러고 보니 이런 것도 아직 남아 있었군……',
      );
      await tachyon.say_and_wait([
        '버리기엔 아까우니 어떤가, ',
        callname,
        '? 같이 가 보겠나?',
      ]);
      era.println();
      await era.printAndWait('우연히 실험실을 정리하던 중');
      await era.printAndWait(['구석에 숨겨진 봉투 하나를 발견했다.']);
      if (love >= 75) {
        await era.printAndWait('응……?');
        await era.printAndWait('어쩐지 상당한 위화감이 든다.');
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 자세히 살펴보자 금세 실마리가 보였다.',
        ]);
        await era.printAndWait(
          '대청소 중에 우연히 발견한 물건이라기엔 봉투에 주름 하나 없다. 오히려 누군가 소중히 보관한 듯했다.',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이(가) 『발견했다』는 상황과 연결해 보니,',
          you.get_colored_name(),
          '은(는) 대강 진상을 눈치챘다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['응? ', callname, '? 무슨 일인가?']);
        era.println();
        await era.printAndWait('……입 밖에 내지는 말자.');
        await era.printAndWait([
          '그랬다가는 ',
          tachyon.get_colored_name(),
          '이(가) 부끄러워서 화내는 건 둘째 치더라도 문제는',
          tachyon.sex,
          '가 화를 낸 뒤에는 오늘 밤이 절대 편하지 않으리라는 점이다.',
        ]);
      }
      era.println();
      await era.printAndWait('마침 급한 일도 거의 마무리된 참이다.');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 URA 결승도 이미 끝났다.',
      ]);
      await era.printAndWait('기회가 생겼으니 함께 가기로 하자.');
      era.drawLine();
      await era.printAndWait('자동차를 타고 거의 열 시간을 달린 끝에');
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '은(는) 마침내 온천 여관에 도착했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('후우…… 드디어 도착했군.');
      await tachyon.say_and_wait('이보게…… 정말 길을 잘못 든 건 아닌가?');
      era.printButton('「……지도에는 분명 여기라고 적혀 있어.」', 1);
      await era.input();
      await era.printAndWait(['두 사람이 망설이는 것도 무리는 아니다.']);
      await era.printAndWait(
        '지금 서 있는 곳은 원시림이라 불러도 될 만큼 깊은 산속이었으니까.',
      );
      await era.printAndWait('이런 곳에 정말 온천이 있기는 한 걸까……');
      era.println();
      await tachyon.say_and_wait(
        '찾아보겠네…… 잠깐, 여기엔 휴대전화 신호조차 없단 말인가!?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 휴대전화를 꺼내 보았지만 깊은 산속에는 정말 신호가 잡히지 않았다.',
      ]);
      await era.printAndWait('이건…… 곤란한데.');
      era.println();
      await tachyon.say_and_wait([callname, '……차라리 돌아가는 게 어떤가?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '도 포기하고 돌아가려던 바로 그때,',
      ]);
      await era.printAndWait('덤불을 헤치자 눈앞에 온천 여관이 나타났다.');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '이(가) 프런트에서 체크인을 마친 뒤,',
        you.get_colored_name(),
        '은(는) 곧장 노천탕에 들어갔다.',
      ]);
      await era.printAndWait(
        '아직 추위가 가시지 않은 겨울에 긴 자동차 여행에다 산길까지 넘었으니, 정말 고생스러웠다.',
      );
      await era.printAndWait(
        '하지만 깊은 산속에도 장점은 있다. 여관에는 둘 외에 손님이 없어 사실상 통째로 빌린 셈이었다.',
      );
      await era.printAndWait('그래서인지 지금 몸을 담근 온천물은 유난히 기분 좋았다.');

      era.printButton('「……응?」', 1);
      await era.input();
      await era.printAndWait('그때 탈의실의 발 너머로 누군가의 인기척이 느껴졌다.');
      await era.printAndWait(
        '응? 방금 이곳엔 다른 손님이 없다고 하지 않았던가?',
      );
      era.println();
      await tachyon.say_and_wait([callname, '? 안에 있나?']);
      era.println();
      await era.printAndWait('……뭐?');
      era.printButton('「타키…… 타키온!?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '오, 거기 있었군. 그럼 실례하겠네.',
      );
      era.println();
      await era.printAndWait([
        '말을 마치자마자 ',
        tachyon.sex,
        '는 ',
        you.get_colored_name(),
        '의 대답도 기다리지 않고 탈의실 문을 밀고 들어왔다.',
      ]);
      await era.printAndWait([
        '……',
        tachyon.sex,
        '가 목욕 수건을 두르고 있는 것을 보자 ',
        you.get_colored_name(),
        '의 가슴에는 안도인지 실망인지 모를 감정이 스쳤다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '하하하! 그 표정은 뭔가? 내가 아무것도 안 걸치고 들어올 줄 알았나?',
      );
      await tachyon.say_and_wait('아무리 그래도 그 정도의 상식은 있네.');
      era.println();
      await era.printAndWait([
        '놀리는 듯한 말투였지만 ',
        you.get_colored_name(),
        '에게는 ',
        tachyon.sex,
        '가 무언가 할 말이 있어 보였다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '조금 전 프런트의 여주인과 이야기를 나눴는데……',
        tachyon.sex,
        ', 나를 전혀 모르더군.',
      ]);
      await tachyon.say_and_wait([
        '정확히는 경주 ',
        tachyon.uma_sex_title,
        '인 ',
        tachyon.get_colored_name(),
        '을(를) 모른다는 뜻일세.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 오해하지 않도록 ',
        tachyon.get_colored_name(),
        '은(는) 서둘러 설명을 덧붙였다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '을(를) 알아보지 못하는 건 이해할 수 있다. 누구나 ',
        tachyon.uma_sex_title,
        '의 레이스에 열광하거나 선수 하나하나의 얼굴을 기억하는 건 아니니까.',
      ]);
      if (win_prix_lat) {
        await era.printAndWait([
          '하지만 경주 ',
          tachyon.uma_sex_title,
          '인 ',
          tachyon.get_colored_name(),
          '을(를) 모른다니…… 세계 정상인 개선문상을 제패한 ',
          tachyon.uma_sex_title,
          '를 모른다는 건 이 세상에서 확실히 드문 일이다.',
        ]);
      } else {
        await era.printAndWait([
          '하지만 경주 ',
          tachyon.uma_sex_title,
          '인 ',
          tachyon.get_colored_name(),
          '을(를) 모른다는 건 이 세상에서 확실히 드문 일이다.',
        ]);
      }
      await era.printAndWait(
        '하지만 이토록 외진 여관이라면 그럴 수도 있겠다는 생각이 들었다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '솔직히 놀랍군…… 나를 전혀 모르는 낯선 사람이 정말로 있다니……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이(가) 말을 이어 가기를 기다렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 순간 놀랐다. 그러나 ',
        tachyon.get_colored_name(),
        '은(는) 명예나 이익에 집착하는 ',
        tachyon.uma_sex_title,
        '가 아니다. 명성 따위는 ',
        tachyon.sex,
        '가 가장 신경 쓰지 않는 것 중 하나였다.',
      ]);
      await era.printAndWait(
        '굳이 이 이야기를 꺼내는 데는 다른 이유가 있을 것이다.',
      );
      era.println();
      if (chris_count < 2) {
        await tachyon.say_and_wait('크리스마스에 있었던 일을 기억하나?');
        era.println();
        await era.printAndWait([
          '크리스마스……',
          you.get_colored_name(),
          '은(는) 그 작은 선술집을 떠올렸다.',
        ]);
        await era.printAndWait(
          '레이스장의 세계는 정말로 그곳과 동떨어져 있었다.',
        );
        await era.printAndWait(
          '레이스가 없어도 그 사람들의 삶은 변함없이 흘러간다.',
        );
        await era.printAndWait('지금 이 순간에도 그때와 다르지 않다.');
        await era.printAndWait([
          '……그 당시 자신은 ',
          tachyon.get_colored_name(),
          '이(가) 제시한 가능성을 거절했다.',
        ]);
        await era.printAndWait([
          '그때의 ',
          tachyon.sex,
          '은(는) 도망치기 위해 레이스장을 떠나려 했기 때문이다.',
        ]);
        await era.printAndWait('그렇다면 지금은?');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 말없이 ',
          tachyon.get_colored_name(),
          '이(가) 말을 마치기를 기다렸다.',
        ]);
        era.println();
        await era.printAndWait(['물가에 앉아 있는 ', tachyon.sex, '은(는) 한마디도 하지 않았다.']);
        await era.printAndWait(
          '달빛 아래의 모습은 한 폭의 그림처럼 고요했다.',
        );
        await era.printAndWait([
          tachyon.sex,
          '을(를) 알고 ',
          tachyon.get_colored_name(),
          '라는 ',
          tachyon.uma_sex_title,
          '을(를) 아는 사람이라면 상상하기 어려운 광경이었다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게 『고요하다』라는 말이 이토록 어울릴 줄이야.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……그날의 답은 아직 듣지 못했군.',
        ]);
        await tachyon.say_and_wait('이런 가능성도 존재해도 괜찮은 걸까?');
        await tachyon.say_and_wait(
          '가능성을 끊임없이 좇던 과학자가 어느 날 문득 지쳤다고 해 보세. 특별한 계기도 없이 말이야.',
        );
        await tachyon.say_and_wait(
          '이 정도면 충분하다며 앞으로 나아갈 길은 후학에게 맡기기로 마음먹는 거지……',
        );
        await tachyon.say_and_wait(
          '소중히 여기는 사람, 그리고 자신을 소중히 여겨 주는 사람과 그저 함께 살아가고 싶어진다면……',
        );
        await tachyon.say_and_wait(
          '그런 사람에게는…… 이런 장소가 정말 잘 어울린다고 생각하지 않나?',
        );
        era.println();
        await era.printAndWait([
          '아무도 ',
          tachyon.get_colored_name(),
          '을(를) 모르는 장소.',
        ]);
        await era.printAndWait('더 이상 가능성을 탐구하지 않아도 된다.');
        await era.printAndWait(
          '잠시 멈춰 숨을 고를 수도 있고, 어쩌면…… 이대로 평온하게 살아갈 수도 있다.',
        );
        await era.printAndWait('그런 가능성이라니……');
      } else {
        await tachyon.say_and_wait('이곳은 참 조용하군.');
        era.println();
        await era.printAndWait('……바람 소리와 온천물 소리 말고는 사람 목소리 하나 들리지 않는 온천 여관.');
        await era.printAndWait([
          '이 정도로 조용하면 평소에는 무서울 수도 있겠지만, ',
          tachyon.get_colored_name(),
          '이(가) 함께 있다면 이 공간도 견디지 못할 곳은 아니다.',
        ]);
        era.println();
        await tachyon.say_and_wait('게다가 꽤 넓군.');
        era.println();
        await era.printAndWait(
          '……온천 여관이니 당연하다. 지금은 둘뿐이지만 원래 수백 명의 손님을 받을 수 있는 시설이다.',
        );
        era.println();
        await tachyon.say_and_wait('게다가 사람도 없네.');
        era.println();
        await era.printAndWait('……이렇게 깊은 산속이니 그럴 만하지.');
        await era.printAndWait([
          '두서없는 말이 계속되자 ',
          you.get_colored_name(),
          '은(는) 더욱더 ',
          tachyon.get_colored_name(),
          '이(가) 무슨 말을 하려는지 알 수 없게 되었다.',
        ]);
        era.println();
        era.println();
        await tachyon.say_and_wait([
          '이렇게 넓고 조용하며 평온한 장소라면…… 개선문상의 ',
          tachyon.uma_sex_title,
          '와(과) ',
          tachyon.sex,
          '의 트레이너 정도는 충분히 지낼 수 있겠지.',
        ]);
        await tachyon.say_and_wait(
          '이렇게…… 아무에게도 알려지지 않은 채 조용하고 평온하게 살아가는 것…… 그것도 하나의 가능성일까?',
        );
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, '의 가능성.']);
        await era.printAndWait([
          '그것은 ',
          tachyon.get_colored_name(),
          '이(가) 언제나 입에 담는 말이다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          tachyon.uma_sex_title,
          '은(는) 평생 달릴 수 있는 것은 아니다.',
        ]);
        await era.printAndWait([
          '경주 ',
          tachyon.uma_sex_title,
          '라 해도 언젠가는 경기장을 떠나 속도를 추구하는 삶에서 벗어나 다른 길로 나아간다.',
        ]);
        era.println();
        await era.printAndWait([
          '그렇다면 그런 가능성은 ',
          tachyon.get_colored_name(),
          '에게도 적용될 수 있을까?',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게도 그런 가능성이 있을까?',
        ]);
        await era.printAndWait([
          '카페의 주인이 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '연구의 길을 걸어 과학자가 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '평범한 학생으로 진학해 대학을 졸업하고 직장인이 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '에게도 있을까? 보통 사람들처럼 경기장을 떠나 자신의 삶을 살아가는 날들이.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 나를 따라와 주겠나?',
        ]);
        await tachyon.say_and_wait(
          '만약…… 내가 그런 가능성을 선택한다면 말일세.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '와 함께 레이스와도, ',
          tachyon.uma_sex_title,
          '의 속도와도 관계없는 조용하고 평온한 일상을 보낸다.',
        ]);
        await era.printAndWait('그런 삶은 분명 무척 아름다울 것이다.');
        await era.printAndWait([
          '평범한 나날이라도 ',
          tachyon.get_colored_name(),
          '이(가) 함께한다면 결코 지루하지 않으리라.',
        ]);
      }
      era.printButton('「나쁘지…… 않을 것 같아.」', 1);
      era.printButton('「조금 더…… 생각해 봐도 될까?」', 2);
      await era.input();
      await tachyon.say_and_wait('……후후.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 대답을 듣고 ',
        tachyon.get_colored_name(),
        '은(는) 많은 말을 하지 않았다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '은(는) 발끝으로 수면을 가볍게 저어 여러 겹의 파문을 만들었다.',
      ]);
      await era.printAndWait([
        '문득 바람이 불어오자 ',
        you.get_colored_name(),
        '은(는) 숲 전체가 다시 숨을 쉬기 시작하는 소리를 들었다.',
      ]);
      await era.printAndWait(
        '나뭇잎이 사락사락 떨어지고, 밤에 잠들었던 작은 새가 놀라 날아올랐다.',
      );
      await era.printAndWait([
        '밤의 정적은 ',
        tachyon.sex,
        '의 잠깐의 소란으로 순식간에 깨진 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        '이런 ',
        tachyon.sex,
        '이(가) 정말 그런 삶을 살 수 있을까?',
      ]);
      await era.printAndWait([
        '가능하든 아니든 그로부터 생겨날 가능성을 생각하니 ',
        you.get_colored_name(),
        '은(는) 문득 가슴이 뛰었다.',
      ]);
      await era.printAndWait([
        '하지만 가능하든 아니든 자신은 반드시 ',
        tachyon.sex,
        '의 곁을 지킬 것이다. 끝까지.',
      ]);
      era.println();
      await tachyon.say_and_wait('그런데 말일세.');
      era.println();
      await era.printAndWait('주변이 다시 겨울밤 특유의 고요함과 소란을 되찾은 뒤');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 무언가 떠올랐다는 듯 입을 열었다.',
      ]);
      await era.printAndWait(
        '말하면서 목욕 수건 자락을 슬쩍 말아 올려 허벅지 위쪽까지 끌어올렸다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '목욕 수건을 두른 채인 건 조금 실례지만……',
      );
      await tachyon.say_and_wait(
        '하지만 그 안에는 정말 아무것도 입지 않았답니다…… 보시겠어요?',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 장난기 어린 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보며 천천히 수건의 매듭을 풀기 시작했다.',
      ]);
      if (tachyon.sex_code !== 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 수건 아래로 희미하게 드러난, 조금 젖어 있는 틈을 보았다.',
        ]);
        await era.printAndWait('……아마 온천물일 것이다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이(가) 아직 탕에 들어가지 않았다는 걸 알면서도,',
          you.get_colored_name(),
          '은(는) 그렇게 스스로를 속이기로 했다'
        ]);
      }
      era.printButton('「온천 안에서는 좀 곤란하지 않을까……」', 1);
      era.printButton('「방에 돌아가서 하는 건……?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '이미 확인했답니다…… 며칠 동안 예약한 손님은 우리뿐이에요. 그러니 여기서 무엇을 하든 문제없어요.',
      );
      await tachyon.say_and_wait(
        '게다가…… 아무도 오지 않으니 저항해 봐야 소용없답니다♡',
      );
      await tachyon.say_and_wait('긴장을 풀고 즐기세요.');
      era.println();

      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait([
          '언제 수건을 벗었는지, 알몸으로 탕에 들어간 ',
          tachyon.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '에게 몸을 포개며, 탕에 들어오기 전부터 이미 흠뻑 젖어 있던 틈을 굵은 성기에 맞댄다……',
        ]);
      } else {
        await era.printAndWait([
          '언제 수건을 벗었는지, 알몸으로 탕에 들어간 ',
          tachyon.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '에게 몸을 포개고,',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hot_spring_b_sex_end
  async hot_spring_b_sex_end(tachyon, you) {
    await era.printAndWait([
      '일이 끝나자, ',
      tachyon.get_colored_name(),
      '가 먼저 온천에서 나왔다.',
    ]);
    if (tachyon.sex_code !== 1 && you.sex_code > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 만족스러운 듯 살짝 부풀어 오른 배를 쓰다듬고 있는 ',
        tachyon.sex,
        '의 모습과 허벅지를 타고 흘러내리는, 온천물인지 다른 것인지 모를 투명한 액체를 보았다.',
      ]);
      await era.printAndWait(
        '한 줄기 틈이었던 곳은 두 입술처럼 벌어져 있었고, 그 사이에는 조금 전 삼킨 흰 액체가 남아 있었다.',
      );
      await era.printAndWait('사타구니가 다시 단단해졌다.');
      await era.printAndWait([tachyon.sex, '은(는) 눈치챈 듯 엉덩이를 살짝 흔들었다.']);
    }
    await era.printAndWait('방에 돌아가면 다시 한바탕 소동이 벌어질 것 같았다……');
    await era.printAndWait([
      '그 전에, ',
      you.get_colored_name(),
      '은(는) 하늘을 올려다보며 다음 소동이 시작되기 전 마지막 고요함을 만끽했다.',
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
      await you.say_as_passer_by_and_wait('기자 A', [
        '타키온 ',
        tachyon.adult_sex_title,
        '! 오늘 개선문상 우승을 축하드립니다! 게다가 이번에는 역대 기록까지 경신하셨습니다!',
      ]);
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '이번 승리에 관해 경쟁 상대나 일본에 있는 가까운 분들에게 한 말씀 부탁드립니다.',
      );
      era.println();
      await tachyon.say_and_wait('……후후.');
      await tachyon.say_and_wait('그럼 마지막으로…… 한마디만 하겠네.');
      await you.say_as_passer_by_and_wait('기자 A', '마지막……?');
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
      await tachyon.say_and_wait(['하아…… 하아…… 카……', call_25, '……!']);
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
      await coffee.say_and_wait('……지루해');
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
      await you.say_as_passer_by_and_wait('실황', [
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
        '상반기 최강 ',
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
        '기자 A',
        '왜 이렇게 갑작스럽게 결정하셨나요? 충분히 숙고한 뒤 내린 출전 결정입니까?',
      );
      await tachyon.say_and_wait(
        '트레이너 군과 말다툼한 끝에 내린 결정일세. 몇 달 전에 이미 정했지. 갑작스러운 일도 뜬금없는 일도 아니네. 그동안 언론에 알리지 않았을 뿐일세.',
      );
      await you.say_as_passer_by_and_wait('기자 B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '이(가) 지난해 이유를 밝히지 않고 트윙클 시리즈를 중단했던 까닭은……? 올해 개선문상 출전은 설마……',
      ]);
      await tachyon.say_and_wait([
        '그 점은 말씀드릴 수 없지만 한 가지는 보장하겠네. 올해 개선문상에는 반드시 출전할 걸세.',
      ]);
      await you.say_as_passer_by_and_wait('기자 B', [
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
      await era.printAndWait(['천황상(봄)']);
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
      await you.say_as_passer_by_and_wait('실황', [
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
        await era.printAndWait('결과');
        await you.say_as_passer_by_and_wait('실황', [
          tachyon.get_colored_name(),
          '! 초광속을 넘어 요도 언덕에 선 방패의 영광은 ',
          tachyon.get_colored_name(),
          '에게!',
        ]);
      } else {
        await tachyon.print_and_wait('분명 그럴 예정이었는데, 그렇다면……');
        era.println();
        await you.say_as_passer_by_and_wait('실황', [
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
      await tachyon.print_and_wait('결과……');
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
        '내년……',
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
    const title = '결의';
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
      await you.say_as_passer_by_and_wait('실황', [
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

  // [번역 완료] ws_b_95_1
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
        '기자 B',
        '빛나고 있지 않을 때는 생각보다 찾기 힘들군요……',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '기자 C',
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
        '를 위해서였다',
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
        '은(는) 그제서야 깨달았다.',
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
            '의 눈동자에서 피어오른 희망과 갈망을.',
          ]);
          await era.printAndWait('……하지만, 보았다고 해서 무엇을 할 수 있단 말인가.');
          await era.printAndWait([
            '그런 가능성을 쫓는 길은 이미 몇 달 전 ',
            you.get_colored_name(),
            '의 손으로 직접 닫아버렸다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            you.get_colored_name(),
            '과(와) ',
            tachyon.sex,
            '는 그저 파멸을 향한 길을 광속으로 질주하고 있을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait('그렇기에 기도를 올릴 수밖에 없었다.');
          await era.printAndWait('적어도, 이 마지막 시간 동안만큼은.');
          await era.printAndWait([tachyon.sex, '가 고통과 부상에서 자유로울 수 있기를.']);
          era.println();
          await tachyon.say_and_wait('……별일 없으면, 난 이만 가보겠네.');
          era.printButton('「푹 쉬어.」', 1);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '에게 말했다. 빈 소원은 ',
            tachyon.sex,
            '와 ',
            coffee.get_colored_name(),
            '의 레이스가 순조롭기를 빌었다고 말했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '하하, 제법 괜찮은 소원이군.',
          );
          await tachyon.say_and_wait([
            call_25,
            '은(는) 이미 ',
            tachyon.sex,
            '의 가능성을 증명했지…… 다음은 내 차례일세.',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            '의 디딤돌이 되겠다고 호언장담해놓고 제자리걸음만 할 수는 없지 않나. 안 그러면 기껏해야 조약돌 정도밖에 안 될 테니 말이야.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 입버릇처럼 ',
            coffee.get_colored_name(),
            '를 위해서라고 말하고 있었지만.',
          ]);
          await era.printAndWait([
            '그렇지만 ',
            you.get_colored_name(),
            '은(는) 역시 놓치지 않았다……',
          ]);
          await era.printAndWait([
            '레이스 이야기를 꺼낼 때 ',
            tachyon.get_colored_name(),
            '의 눈에 스친 투지를.',
          ]);
          await era.printAndWait([
            '역시 ',
            tachyon.get_colored_name(),
            '도 레이스로 돌아가기를 갈망하고 있었던 것이다.',
          ]);
          await era.printAndWait('……하지만, 갈망한다고 해서 무엇을 할 수 있단 말인가.');
          await era.printAndWait([
            '그런 가능성을 쫓는 길은 이미 몇 달 전 ',
            you.get_colored_name(),
            '의 손으로 직접 닫아버렸다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            you.get_colored_name(),
            '과(와) ',
            tachyon.sex,
            '는 그저 파멸을 향한 길을 광속으로 질주하고 있을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait('그렇기에 기도를 올릴 수밖에 없었다.');
          await era.printAndWait('적어도, 이 마지막 시간 동안만큼은.');
          await era.printAndWait([
            '남겨진 시간 속에서 ',
            tachyon.sex,
            '가 그 시간을 마음껏 만끽할 수 있기를.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '후후, 자네의 기대에 부응하려면 곧장 트레이닝을 시작해야겠군.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 즐거운 듯 훈련장을 향해 걸어갔다.',
          ]);
          era.printButton('……훈련 조심해.', 1);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '에게 말했다. 빈 소원은 ',
            coffee.get_colored_name(),
            '의 트레이닝이 순조롭기를 빌었다고 말했다.',
          ]);
          era.println();
          await tachyon.say_and_wait('……음.');
          await tachyon.say_and_wait([
            '당연하지…… 우리가 하는 모든 일은 결국 ',
            call_25,
            '이 한계를 뛰어넘어 더 높은 곳에 닿게 하기 위함이니까.',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            '의 트레이닝에 문제라도 생긴다면…… 모든 것이 허사가 되겠지.',
          ]);
          await tachyon.say_and_wait(
            '그러니 이것이야말로 가장 중요한 일이야…… 우선순위를 잊지 않아주니 나도 기쁘군.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 입버릇처럼 ',
            coffee.get_colored_name(),
            '를 위해서라고 말하고 있었지만.',
          ]);
          await era.printAndWait([
            '그렇지만 ',
            you.get_colored_name(),
            '은(는) 역시 놓치지 않았다…… ',
            coffee.get_colored_name(),
            '의 이야기가 나올 때 ',
            tachyon.sex,
            '의 눈동자에 서린 쓸쓸함을.',
          ]);
          await era.printAndWait([
            '역시 ',
            coffee.get_colored_name(),
            '의 이야기는 꺼내지 말았어야 했나.',
          ]);
          await era.printAndWait([
            '지금 ',
            tachyon.get_colored_name(),
            '의 트레이너로서의 자신은 마땅히 ',
            tachyon.sex,
            '만을 생각해야 할 텐데.',
          ]);
          await era.printAndWait([
            '하지만…… ',
            tachyon.sex,
            '를 위할 권리는 이미 몇 달 전 스스로 내던져버렸다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            you.get_colored_name(),
            '과(와) ',
            tachyon.sex,
            '는 그저 파멸을 향한 길을 광속으로 질주하고 있을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait('그러니 그저 기도를 올릴 수밖에.');
          await era.printAndWait('부디 모든 외부 요인들이 지켜지기를.');
          await era.printAndWait([
            tachyon.sex,
            '를 만족시키기를, ',
            tachyon.get_colored_name(),
            '의 「유언」을 이룰 수 있기를.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '후후, 자네의 기대를 위해서라도 나 또한 질 수는 없겠어. ',
            call_25,
            '과 같은 무대에 서기에 부족함이 없도록 회복해야겠지.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 담담하게 말을 마치고 실험실을 향해 걸어갔다.',
          ]);
          era.printButton('「……실험 조심해.」', 1);
      }
      await era.input();
      await era.printAndWait([tachyon.sex, '가 손을 흔들며 알겠다는 표시를 했다.']);
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
      await tachyon.say_and_wait('……매달?');
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
      await tachyon.say_and_wait(['한계를 뛰어넘게!', call_25, '!']);
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

  // [번역 완료] ws_b_95_48
  ws_b_95_48: (() => {
    const title = '성탄 전야의 약속';
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
        '최근 ',
        tachyon.get_colored_name(),
        '의 상태가 어딘지 모르게 평소와 달랐다.',
      ]);
      await era.printAndWait([
        '줄곧 혼자서 울적해 보였고, ',
        coffee.get_colored_name(),
        '의 훈련에도 따라오지 않았으며, 심지어 실험조차 거의 하지 않았다.',
      ]);
      await era.printAndWait([
        '실험의 최대 피해자인 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '의 입장에서는 딱히 나쁜 일이라고는 할 수 없었지만, 그래도 역시 조금 걱정이 되었다.',
      ]);
      await era.printAndWait([
        '문득, 상점가에서 흘러나오는 캐럴 소리가 ',
        you.get_colored_name(),
        '의 귀에 닿았다.',
      ]);
      await era.printAndWait([
        '좋아, 크리스마스를 핑계 삼아 ',
        tachyon.sex,
        '에게 외출해서 이야기 좀 하자고 불러내 보자.',
      ]);
      era.drawLine();
      await era.printAndWait('성탄 전야의 상점가는 평소보다 훨씬 밝게 빛나며 열기로 가득했다.');
      await era.printAndWait('그 이유는 단순히 크리스마스 때문만이 아니라……');
      await you.say_as_passer_by_and_wait('상점가 아저씨', [
        '아리마 기념 예측! 내일 열릴 아리마 기념의 직전 예측입니다!',
      ]);
      await you.say_as_passer_by_and_wait('관광객 A', [
        '내일 아리마 기념은 어떻게 되려나…… 그래도 이기는 건 역시 ',
        coffee.get_colored_name(),
        '겠지?',
      ]);
      await you.say_as_passer_by_and_wait('관광객 B', [
        '재팬 컵 때의 모습은 정말 너무 강했어! ……사상 최강이라고 해도 과언이 아니지.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('계속 침묵을 지키는 것도 방법은 아니었다. 이럴 때는 뭐라도 말을 거는 게 좋겠지.');
      era.printButton('「내일이 아리마 기념이네. 하지만 카페라면 문제없을 거야.」', 1);
      era.printButton('「저쪽의 하치미가 크리스마스 특가 판매를 하는 모양이야.」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, '는 여전히 아무 말도 하지 않았다.']);
        await era.printAndWait([
          '분위기가 어색해진 것을 느낀 ',
          you.get_colored_name(),
          '은(는) 어쩔 수 없이 ',
          coffee.get_colored_name(),
          '의 최근 훈련 상황에 대해 계속 이야기를 이어갔다.',
        ]);
      } else {
        await tachyon.say_and_wait('……그럼, 한 잔 마셔볼까.');
        era.println();
        await era.printAndWait([
          '가장 달콤한 하치미를 마시자 ',
          tachyon.get_colored_name(),
          '의 기분이 조금은 풀린 듯 보였다.',
        ]);
        await era.printAndWait([
          '덧붙여서 ',
          you.get_colored_name(),
          '도 분위기를 맞추기 위해 가장 단 것을 주문했지만……',
        ]);
        await era.printAndWait([
          '단 한 모금만으로 ',
          you.get_colored_name(),
          '은(는) 이가 아려오는 것을 느꼈다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '기쁘게 하치미를 마시는 ',
          you.get_colored_name(),
          '은(는) 조만간 기회를 봐서 ',
          tachyon.sex,
          '를 치과에 데려가야 할지 고민하기 시작했다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '은 상점가 중앙의 크리스마스트리 앞에 도착했다.',
      ]);
      await era.printAndWait([
        '갑자기 불어온 강풍이 주변에 있던 아리마 기념 관련 보도 기사를 ',
      ]);
      await era.printAndWait([
        '신문에는 재팬 컵 당시의 ',
        coffee.get_colored_name(),
        '의 모습이 늠름하게 실려 있었다.',
      ]);
      era.printButton(
        '「재팬 컵…… 그때의 카페는 정말 대단했지. 가당치 않은 생각이지만, 만약 타키온과……」',
        1,
      );
      era.printButton('「타키온! 저기 솜사탕 가게가 정말 대단해 보여!」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait([
          '방금 전 아리마 기념 이야기를 꺼냈을 때 ',
          tachyon.get_colored_name(),
          '의 기분이 별로 좋지 않아 보였다.',
        ]);
        await era.printAndWait([
          '그래서 ',
          you.get_colored_name(),
          '은 화제를 돌려 재팬 컵 이야기를 꺼냈다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 숙원이 이루어진 날의 이야기라면 분명 ',
          tachyon.get_colored_name(),
          '의 기운을 북돋아 줄 수 있을 것이라 생각했다.',
        ]);
        await era.printAndWait('하지만……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 여전히 아무 말도 하지 않았다.',
        ]);
        await era.printAndWait('이것도 아니었던 걸까……');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 크리스마스트리 옆의 솜사탕 가게를 바라보았다. 장인의 솜씨 아래에서 여러 가지 모양의 푹신푹신한 동물들이 순식간에 만들어지고 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……아니, 나는……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이(가) 말을 마치기도 전에 가게 주인은 크고 푹신한 모르모트 모양 솜사탕을 ',
          tachyon.get_colored_name(),
          '의 손에 쥐여 주었다.',
        ]);
        await vega.say_as_unknown_and_wait(
          '기분이 좋지 않을 때는 기억해 둬. 오직 푹신푹신한 것만이 너를 배신하지 않아.',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('가게 주인이 왠지 모르게 낯이 익었다.');
          await era.printAndWait('……아마 그냥 착각이겠지.');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 멍하니 솜사탕 모르모트를 받아 들었고, 돌려주지도 무엇이라 말하지도 않았다.',
        ]);
        await era.printAndWait([
          '그러고는 ',
          tachyon.sex,
          '는 입술을 살짝 열어 아주 조금 베어 물었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……푹신푹신하군.');
        era.println();
        await era.printAndWait([
          '어째서인지 그 말을 들은 가게 주인은 자랑스럽게 가슴을 폈다.',
        ]);
      }
      era.println();
      await era.printAndWait(['마침내 상점가 끝자락까지 걸어갔다.']);
      await era.printAndWait([
        '길가의 서점. 가게 안에서 가장 눈에 띄는 곳에 지난 잡지 몇 권이 진열되어 있었다.',
      ]);
      await era.printAndWait('지난 잡지라고 해도…… 아주 오래된 것은 아니었다.');
      await era.printAndWait(
        '레이스 정보로서는 유효 기간이 지났겠지만, 시간상으로는 고작 두 달 전의 잡지였다.',
      );
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        '의 개선문상 우승 후 인터뷰가 실린 잡지였다.',
      ]);
      await you.say_as_passer_by_and_wait('서점 주인', '어서 오세요!');
      era.printButton('「이건……」', 1);
      era.printButton('「개선문상 특집 잡지인가요?」', 2);
      await era.input();
      await era.printAndWait([
        '서점 주인은 ',
        you.get_colored_name(),
        '의 뒤에서 고개를 숙이고 있는 ',
        tachyon.get_colored_name(),
        '을(를) 눈치채지 못했다.',
      ]);
      await era.printAndWait('주인은 잡지를 보며 신나게 떠들기 시작했다.');
      await you.say_as_passer_by_and_wait('서점 주인', [
        '오! 이 잡지들 말인가요? 제가 특별히 여기에 진열해 둔 겁니다!',
      ]);
      if (tachyon_win_prix_lat) {
        await you.say_as_passer_by_and_wait('서점 주인', [
          '드디어 일본의 ',
          tachyon.uma_sex_title,
          '가 세계의 개선문상을 제패했으니까요! 당연히 기념으로 장식해 둬야죠!',
        ]);
      }
      await you.say_as_passer_by_and_wait('서점 주인', [
        '바깥 사람들은 아무것도 몰라요. ',
        tachyon.get_colored_name(),
        '이야말로 최강이라고요! 은퇴하지만 않았어도 저 ',
        coffee.get_colored_name(),
        ' 같은 애들은 ',
        tachyon.sex,
        '의 상대도 안 됐을 텐데!',
      ]);
      era.printButton('「그건 모르는 일이죠……」', 1);
      era.printButton('「당연하죠, 타키온이 최강입니다.」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait(['재팬컵 이전이었다면 확실히 그랬을지도 모른다.']);
        await era.printAndWait([
          '하지만 재팬컵 이후의 ',
          coffee.get_colored_name(),
          '는 이미 ',
          tachyon.get_colored_name(),
          '조차 인정한 완성체였다.',
        ]);
        await era.printAndWait([
          '그런 상태의 ',
          coffee.get_colored_name(),
          '가 다시 한번 ',
          tachyon.get_colored_name(),
          '와 다시 한번 승부를 겨룬다면…… 승패는 정말 알 수 없었을 것이다.',
        ]);
        await era.printAndWait([
          '그렇다.',
          coffee.get_colored_name(),
          '가 한계를 뛰어넘었다 해도…… 마음속으로는 ',
          tachyon.get_colored_name(),
          '이라면 ',
          tachyon.sex,
          '와 대등하게 겨룰 수 있으리라 믿고 있다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '스스로 말하던 그런 걸림돌 같은 존재는 결코 아니다.',
        ]);
        await you.say_as_passer_by_and_wait(
          '서점 주인',
          '쳇, 뭘 좀 아는 손님이 온 줄 알았더니 이 사람도 아무것도 모르는구먼.',
        );
        era.println();
        await era.printAndWait([
          '가게 주인의 말을 들으며 ',
          you.get_colored_name(),
          '은(는) 쓴웃음을 지을 수밖에 없었다.',
        ]);
        await era.printAndWait([
          '그때 문득 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이(가) 잡지 더미로 다가가는 것을 보았다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……아저씨, 이거 한 권 주세요.');
        await you.say_as_passer_by_and_wait('서점 주인', [
          '오오, ',
          tachyon.sex_code === 1 ? '총각' : '아가씨',
          ', 보는 눈이 있네!',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 일부러 목소리를 낮게 깔아 ',
          tachyon.sex,
          '본래 목소리가 들키지 않도록 했다.',
        ]);
        await era.printAndWait(
          '하지만 이 잡지는…… 분명 당시에 샘플을 받았을 텐데 왜 굳이 다시 사는 걸까?',
        );
        era.println();
        await tachyon.say_and_wait(
          '……어쩔 수 없지. 이 잡지의 가치를 모르는 사람이 있으니 나라도 소중히 간직해야겠어.',
        );
        era.println();
        await era.printAndWait('에?');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 몰래 짜증 섞인 눈길을 ',
          you.get_colored_name(),
          '에게 보냈다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 자신이 또 무엇을 잘못 말한 것인지 고민하기 시작했다.',
        ]);
      } else {
        await tachyon.say_and_wait('……！');
        era.println();
        await era.printAndWait('그걸 굳이 물어볼 필요가 있을까?');
        await era.printAndWait('비록 가정이 무의미하다 할지라도.');
        await era.printAndWait([
          '그렇기에 더욱 가정을 멈출 수 없게 만드는 ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          '무한한 가능성과 상상을 불러일으키는 ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait(['그것이 바로 ', tachyon.get_colored_name()]);
        await you.say_as_passer_by_and_wait('서점 주인', [
          '역시! 내 말이 맞지! ',
          you.sex_code === 1 ? '총각' : '아가씨',
          '가 들어왔을 때부터 느꼈어. 이분은 진짜 뭘 좀 아는 분이라고!',
        ]);
        await you.say_as_passer_by_and_wait('서점 주인', [
          '내 말이 그 말이지, ',
          tachyon.get_colored_name(),
          '이야말로 최강이지! 저 ',
          coffee.get_colored_name(),
          ' 따위는 상대도 안 돼!',
        ]);
        await you.say_as_passer_by_and_wait('서점 주인', [
          '사실 난 작년 사츠키상 때부터 ',
          tachyon.get_colored_name(),
          '을(를) 지켜봤지! 그 주법은……',
          tachyon.uma_sex_title,
          '의 한계라고 해도 과언이 아닐 정도였어!',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '와(과) 주인은 흥에 겨워 ',
          tachyon.get_colored_name(),
          '의 레이스에 대해 한참 동안 이야기를 나누었다.',
        ]);
        await era.printAndWait([
          '뒤에 서 있던 ',
          tachyon.get_colored_name(),
          '이(가) 참다못해 ',
          you.get_colored_name(),
          '의 손을 붙잡고 가게 밖으로 나가려 할 때까지.',
        ]);
        await era.printAndWait([
          '어째서인지 ',
          tachyon.sex,
          '의 얼굴이 조금 붉어 보였지만…… 아마 조명 탓이겠지.',
        ]);
      }
      era.println();
      if (ret >= 2) {
        await era.printAndWait(['어느덧 강둑 근처까지 걸어왔다.']);
        await era.printAndWait(
          '어둡고 고요한 강가는 멀리 보이는 상점가의 불빛, 그리고 캐럴 소리와 대조를 이루고 있었다.',
        );
        era.println();
        await tachyon.say_and_wait('……눈이 내리네.');
        era.println();
        await era.printAndWait('확실히 주변에는 솜털 같은 눈송이가 흩날리기 시작했다.');
        await era.printAndWait(
          '……이렇게 늦은 밤, 눈 내리는 날에 이런 곳까지 오는 건 역시 조금 위험할지도 모르겠다.',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이(가) 우울해하던 이유는 알아내지 못했지만, 오늘은 이미 너무 늦었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 오늘은 이만 돌아가자고 제안하려던 찰나……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………후우.');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '에게 포옹당했다.',
        ]);
        await era.printAndWait('아무런 전조도 없는, 너무나도 갑작스러운 포옹이었다.');
        era.printButton('「타키온……?」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 무언가 말하려 했지만, 품 안에서 미세하게 떨리는 몸과 ',
          you.get_colored_name(),
          '의 어깨에 기댄 머리, 어딘지 모르게 젖어 오는 어깨의 감촉을 느끼고 지금은 입을 열지 말아야 한다는 것을 깨달았다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '미안하네…… 하지만…… 잠시만, 아주 잠시만이라도 좋으니……',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 멍한 상태로 ',
          tachyon.get_colored_name(),
          '이(가) 자신의 품 안에서 흐느끼게 두었다.',
        ]);
        await era.printAndWait('머릿속은 온통 의문으로 가득했다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게 대체 무슨 일이 있었던 것일까.',
        ]);
        era.drawLine();
        await tachyon.print_and_wait('사실 이미 짐작하고 있었다.');
        await tachyon.print_and_wait(
          '이번 외출은 그저 자신의 짐작을 다시 한번 확인하기 위함이었다.',
        );
        await tachyon.print_and_wait(
          '하지만 실제로 마주하니 가슴 한구석이 찌릿하게 아파 왔다.',
        );
        era.println();
        await tachyon.print_and_wait('조금 전까지 나누었던 대화만 보더라도 알 수 있었다.');
        await tachyon.print_and_wait([
          you.sex,
          '의 화제는 세 마디를 넘기지 못하고 늘 ',
          call_25,
          '의 이야기로 돌아갔고, 눈동자에도 ',
          tachyon.sex,
          '에 대한 기대감이 가득 차 있었다.',
        ]);
        await tachyon.print_and_wait([
          '예전의, 모든 일에서 ',
          tachyon.get_colored_name(),
          '을(를) 최우선으로 생각하던 ',
          callname,
          '은 이제 더 이상 존재하지 않았다.',
        ]);
        await tachyon.print_and_wait([
          '지금의 ',
          you.sex,
          '은(는) ',
          call_25,
          '의 「',
          callname_25,
          '」인 것이다.',
        ]);
        await tachyon.print_and_wait('이성적으로나 도의적으로나 그것이 가장 올바른 선택이었다.');
        await tachyon.print_and_wait(
          '자신은 그저 주법으로 사람을 현혹하고 편리한 도구처럼 대했던 비겁한 마녀일 뿐이니까.',
        );
        await tachyon.print_and_wait([
          '온갖 역경을 딛고 끝내 한계를 넘어선 ',
          coffee.uma_sex_title,
        ]);
        await tachyon.print_and_wait([
          '자신의 달리기로 마녀가 ',
          you.sex,
          '에게 걸었던 저주를 풀고, 마침내 두 사람이 행복하게 살아가는 이야기.',
        ]);
        await tachyon.print_and_wait('이것이야말로 이야기의 가장 완벽한 결말일 것이다.');
        era.println();
        await tachyon.print_and_wait('그러니……');
        era.println();
        await tachyon.say_and_wait(
          '마지막으로…… 나를, 마지막으로 한 번만 사랑해 주게.',
        );
        await tachyon.say_and_wait([
          '단 한 번이면 되네…… 그 후로는 자네와 ',
          call_25,
          '의 사이를 절대 간섭하지 않을 테니.',
        ]);
        era.println();
        await tachyon.print_and_wait(
          '온갖 핑계와 이유를 대며 그저 하룻밤의 행복만을 갈구한다.',
        );
        await tachyon.print_and_wait(
          '비참하게도 마지막까지 자신은 이런 식의 핑계밖에 댈 수 없었다.',
        );
        await tachyon.print_and_wait([
          '마치 협박과도 같은 어조로 ',
          you.sex,
          '에게 마지막 자비를 베풀어 주기를 바랐다.',
        ]);
        await tachyon.print_and_wait('딱 한 번이면 충분했다.');
        await tachyon.print_and_wait([
          '그러면 자신은 깨끗이 포기하고 진심으로 ',
          you.couple_title,
          '을(를) 축복할 수 있을 것이다.',
        ]);
        await tachyon.print_and_wait(
          '머릿속에서 들려오는 「정말 네가 포기할 수 있을 것 같으냐」라는 속삭임을 무시한 채.',
        );
        await tachyon.print_and_wait('그런 식으로 스스로를 설득하고 있었다.');
        era.println();
        await era.printAndWait([
          '그런 ',
          tachyon.get_colored_name(),
          '을(를) 보며 ',
          you.get_colored_name(),
          '은(는) 선택했다.',
        ]);
        era.printButton('「껴안는다」', 1);
        era.printButton('「입을 맞춘다」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait(
            '순간, 더 뱉어 내려던 말들이 가로막혔다.',
          );
          await tachyon.print_and_wait(['……', you.sex, '가 자신을 역으로 껴안아 주었다.']);
          await tachyon.print_and_wait('하고 싶었던 말들이 목구멍에 걸려 나오지 않았다.');
        } else {
          await tachyon.print_and_wait(
            '순간, 더 뱉어 내려던 말들이 가로막혔다.',
          );
          await tachyon.print_and_wait('……다정하고 따스한 감촉이었다.');
          await tachyon.print_and_wait(
            '마치 겨울의 추위를 완전히 녹여 버리는 듯한 크리스마스의 입맞춤이었다.',
          );
        }
        era.println();
        await tachyon.print_and_wait(
          '아니…… 자신의 뜻은 이런 것이 아니었다.',
        );
        await tachyon.print_and_wait([
          '아니면…… ',
          tachyon.get_colored_name(),
          '에게는 이제 사랑받을 자격조차 남지 않은 것일까?',
        ]);
        await tachyon.print_and_wait(
          '자포자기하는 심정으로 그런 생각이 문득 머릿속을 스쳤다.',
        );
        era.println();
        await tachyon.say_and_wait(['으응…… ', callname]);
        era.println();
        await tachyon.print_and_wait('그렇게 생각하던 바로 그 순간.');
        await tachyon.print_and_wait([
          '마치 마음속의 잡념을 쫓아 버리려는 듯 ',
          you.sex,
          '는 포옹의 힘을 더욱 굳건히 했다.',
        ]);
        era.printButton('「적어도 내일 아리마 기념까지는 지켜봐 줘.」', 1);
        era.printButton('「반드시 타키온에게 제대로 설명해 줄게.」', 2);
        await era.input();
        await tachyon.print_and_wait('설명…… 대체 어떤 설명인가.');
        await tachyon.print_and_wait('관계의 종말을 알리는…… 그런 설명인 것일까?');
        await tachyon.print_and_wait([
          you.sex,
          '의 눈동자를 똑바로 바라보았지만 그 어떤 의미도 읽어낼 수 없었다.',
        ]);
        era.println();
        await tachyon.print_and_wait('……그것도 나쁘지 않겠지.');
        await tachyon.print_and_wait([
          '마지막으로 다시 한번 ',
          you.sex,
          '의 그 뜨거운 눈빛을 볼 수만 있다면.',
        ]);
        await tachyon.print_and_wait([
          '……비록 그 시선이 향하는 대상이 더 이상 ',
          tachyon.get_colored_name(),
          '이(가) 아닐지라도.',
        ]);
      } else {
        await tachyon.say_and_wait('……아, 눈이 내리는군.');
        era.println();
        await era.printAndWait('문득 하늘에서 하얀 눈송이가 흩날리기 시작했다.');
        await era.printAndWait([
          '이제 그만 돌아가야 하는 건 아닐까…… 그런 생각을 하던 ',
          you.get_colored_name(),
          '의 옷자락을 ',
          tachyon.get_colored_name(),
          '이(가) 살짝 잡아당겼다.',
        ]);
        era.println();
        await tachyon.say_and_wait('어디 가서 좀 앉아 있지.');
        era.println();
        await era.printAndWait('그렇지, 오늘의 목표는 아직 달성하지 못했다.');
        await era.printAndWait([
          '가게를 찾아 잠시 앉아서 ',
          tachyon.get_colored_name(),
          '이(가) 기분이 좋지 않은 이유를 물어보자.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 스스로를 다독였다.',
        ]);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '? 안 앉는 건가?']);
        era.printButton('「……아니, 저기 말이야.」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '그렇게 우물쭈물하는 건 자네답지 않은걸…… 아니면 무슨 말 못 할 사정이라도 있는 건가?',
        );
        era.println();
        await era.printAndWait('아니, 말 못 할 사정이라기보다는……');
        era.printButton('「학생이랑 같이 선술집에 들어가는 건 역시 NG겠지.」', 1);
        era.printButton('「미성년자와 함께 이자카야에 가는 건 불법이지」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '을(를) 데리고 들어가려는 곳은 다름 아닌 상점가 끝자락의 선술집이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '이미 은퇴했으니 상관없지 않나…… 나도 이런 곳은 처음이긴 하지만 별문제 없을 걸세.',
        );
        await tachyon.say_and_wait([
          '아니면 ',
          callname,
          ', 자네는 그 나이 먹도록 선술집에 들어갈 용기도 없는 건가?',
        ]);
        era.printButton('「문제는 은퇴 여부가 아니라 학생이라는 점이라고!」', 1);
        era.printButton('「……도발해도 소용없어.」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 거절하고 ',
          tachyon.get_colored_name(),
          '을(를) 데리고 돌아가려 했을 때, ',
          tachyon.get_colored_name(),
          '은(는) 이미 주저 없이 가게 안으로 들어가 버렸다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '자자, 어서 오게. 야식이라도 먹는 셈 치고…… 뭐 그런 거지.',
        );
        await you.say_as_passer_by_and_wait('점주', '어서 오세요~~');
        era.println();
        await era.printAndWait([
          '가게 문이 열리자 안쪽의 온기가 바깥의 찬 공기와 대비되며 ',
          you.get_colored_name(),
          '의 발길을 붙잡았다.',
        ]);
        era.printButton('「……잠시 앉아 있는 정도는 괜찮을지도.」', 1);
        await era.input();
        await era.printAndWait([
          '가게 안으로 들어온 ',
          you.get_colored_name(),
          '은(는) 뜻밖의 사실을 발견했다.',
        ]);
        await era.printAndWait(
          '바쁘게 움직이는 주인장의 뒤편으로 길고 밤색인 꼬리가 보였다.',
        );
        era.println();
        await tachyon.say_and_wait('……호오, 이런 곳에……');
        era.println();
        await you.say_as_passer_by_and_wait(
          '점주',
          '어서 오세요! ……근데 손님, 아무래도 학생 같은데?',
        );
        era.println();
        await tachyon.say_and_wait(
          '어라, 그렇게 보이나? 하지만 난 이미 은퇴한 몸이라네.',
        );
        era.println();
        await era.printAndWait(
          '아니, 은퇴했다고 해서 학생이 아닌 건 아니잖아.',
        );
        await era.printAndWait(
          '태클을 걸고 싶었지만 점주는 고개를 끄덕이며 그럼 괜찮다고 말했다.',
        );
        await era.printAndWait('아니…… 뭐가 괜찮다는 건데.');
        era.println();
        await you.say_as_passer_by_and_wait(
          '점주',
          '게다가 옆에 계신 분은 트레이너인 것 같네. 트레이너가 동행한다면 문제없지.',
        );
        await tachyon.say_and_wait('……오, 딱 보면 아는 건가?');
        era.println();
        await era.printAndWait([
          '문제투성이지만…… 그것보다 ',
          you.get_colored_name(),
          '도 주인이 어떻게 자신이 트레이너라는 걸 알아챘는지 궁금했다.',
        ]);
        await you.say_as_passer_by_and_wait('점주', [
          you.sex,
          '의 눈빛 말이야. 우리 남편이랑 똑같거든. 자기 담당 우마무스메만 보면 정신을 못 차리는 그 눈빛.',
        ]);
        era.println();
        await era.printAndWait('그, 그게 무슨 소리야?');
        await era.printAndWait('내가 무슨 변태라도 된다는 건가.');
        await you.say_as_passer_by_and_wait(
          '점주',
          '후후, 그런 눈빛이야말로 좋은 남편의 필수 조건이지~~ 절대 놓치지 말라고.',
        );
        era.println();
        await era.printAndWait('점주는 말을 마치고 다른 손님을 맞이하러 갔다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 전전긍긍하며 ',
          tachyon.get_colored_name(),
          '을(를) 바라보았다. 분명 ',
          tachyon.sex,
          '에게 비웃음을 살 것이라 생각하며……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('무슨 생각을 하고 있는 것일까.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 표정은 마치 넋이 나간 것처럼 보였다.',
        ]);
        era.printButton('「타키온?」', 1);
        await era.input();
        await tachyon.say_and_wait('……아, 응, 흠흠. 아무것도 아니네.');
        era.println();
        await era.printAndWait([
          '정신을 차린 뒤 ',
          tachyon.get_colored_name(),
          '의 얼굴은 마치 시간차로 가열되는 도시락처럼 ',
        ]);
        await era.printAndWait([
          '순식간에 붉게 달아올랐고, ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 얼굴에서 증기가 뿜어져 나오는 것만 같았다.',
        ]);
        await era.printAndWait([
          '민망함을 감추기 위해 ',
          tachyon.sex,
          '는 가게 안의 분위기로 시선을 돌렸다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '도 그쪽으로 눈길을 보냈다.',
        ]);
        era.println();
        await era.printAndWait('점주는 이리저리 바쁘게 움직이며 손님들을 대접하고 있었다.');
        await era.printAndWait([
          '가게 안의 손님들은 아리마 기념 이야기를 나누기도 했지만, 그것이 주된 화제는 아니었다.',
        ]);
        await era.printAndWait(
          '매일의 날씨처럼 심심할 때 한두 마디 주고받는 가벼운 주제일 뿐이었다.',
        );
        await era.printAndWait([
          '그 증거로, 지금까지 그 누구도 ',
          tachyon.get_colored_name(),
          '을(를) 알아보지 못했다.',
        ]);
        await era.printAndWait([
          '트레센 학원 근처의 상점가이면서 올해 상반기 가장 유명했던 ',
          tachyon.uma_sex_title,
          '을(를) 알아보지 못한다는 것은 지극히 이례적인 상황이었다.',
        ]);
        era.println();
        await era.printAndWait([
          '그 모습을 보며 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.uma_sex_title,
          '인 점주를 떠올렸다.',
        ]);
        await era.printAndWait([
          '남편이 트레이너라고 했다면 아마 ',
          tachyon.sex,
          '도 예전에는 레이스 ',
          tachyon.uma_sex_title,
          '였을 것이다.',
        ]);
        await era.printAndWait(
          '은퇴 후에는 이렇게 레이스와 거의 무관한 삶을 살아가고 있다.',
        );
        await era.printAndWait(
          '참으로 평범하고 지루하며 그리고…… 평온한 삶이다.',
        );
        era.println();
        await tachyon.say_and_wait('……이것도 하나의 가능성인 걸까?');
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, '의 가능성.']);
        await era.printAndWait([
          '그것은 ',
          tachyon.get_colored_name(),
          '이(가) 늘 입에 담던 말이었다.',
        ]);
        await era.printAndWait([
          '……하지만, ',
          tachyon.uma_sex_title,
          '라고 해서 모두가 레이스 ',
          tachyon.uma_sex_title,
          '가 되는 것은 아니다.',
        ]);
        await era.printAndWait([
          '경주 ',
          tachyon.uma_sex_title,
          '였다 하더라도 경기장이 아닌 다른 길을 걷는 것을 선택할 수 있다.',
        ]);
        era.println();
        await era.printAndWait([
          '그렇다면 이런 가능성도 ',
          tachyon.get_colored_name(),
          '에게 적용될 수 있는 것일까?',
        ]);
        await era.printAndWait([
          '문득 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이(가) 소침해졌던 이유를 이해할 수 있었다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게도 그런 가능성이 존재하는 것일까?',
        ]);
        await era.printAndWait([
          '카페 점주가 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '연구의 길로 나아가 과학자가 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '평범하게 진학하고 대학생이 되어 사회로 나가 회사원이 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '에게도 있을까. 평범한 사람처럼 경기장을 떠나 자신의 삶을 살아가는 나날이.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 나와 함께해 줄 텐가?',
        ]);
        await tachyon.say_and_wait(
          '만약…… 내가 그런 가능성을 선택한다면 말일세.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '와 함께, 레이스와도 ',
          tachyon.uma_sex_title,
          '의 속도와도 무관한 잔잔하고 평온한 일상을 보내는 것이다.',
        ]);
        await era.printAndWait('그런 삶은 분명 아주 아름다울 것이다.');
        await era.printAndWait([
          '평범한 나날이라 해도 ',
          tachyon.get_colored_name(),
          '이(가) 있다면 결코 지루하지 않을 것이다.',
        ]);
        await era.printAndWait([tachyon.sex, '와 함께 둘만의 생활을 꾸려 나간다.']);
        await era.printAndWait('……하지만 지금은 안 된다.');
        era.printButton('「……내일 아리마 기념이 끝날 때까지 기다려 줄래?」', 1);
        era.printButton('「내일 아리마를 다 보고 다시 한번 물어봐 줘.」', 2);
        await era.input();
        await era.printAndWait(
          '경기장을 떠나는 것 자체도 선택할 수 있는 하나의 가능성이다.',
        );
        await era.printAndWait([
          '하지만 결코 지금의 ',
          tachyon.get_colored_name(),
          '처럼 도망치듯 멀어지는 식이어서는 안 된다.',
        ]);
        await era.printAndWait(
          '……부디 내일의 아리마 기념이 그 눈빛을 바꿔 놓기를 바랄 뿐이었다.',
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
