// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const recruit_flags = require('#/data/event/recruit-flags');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100700-Gold-Ship/edu-7"),

  // [번역 완료] arim_kin_win_c
  arim_kin_win_c: (() => {
    const title = '키워드를 모아라';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}에게 남긴 불안과 달리 ${gs.name}은(는) 힘차고 멋진 레이스를 보여줬다!`,
      );
      era.println();
      await gs.say_and_wait('좋아! 수확할 시간이다!');
      era.println();

      era.printButton('「잘 달렸어!」', 1);
      await era.input();

      await era.printAndWait(
        `${flash.name}이(가) 곁에서 다가와,${gs.name}에게 박수를 보냈다.`,
      );
      era.println();
      await flash.say_and_wait(`역시 ${gs.name} 씨네요.`);
      await gs.say_and_wait('오! 플래시!');
      await flash.say_and_wait('우리의 약속, 기억하고 계시죠.');
      era.println();

      era.printButton('「이온 건 말이지?」', 1);
      await era.input();

      await flash.say_and_wait('……에덴입니다.');
      await flash.say_and_wait(
        '이것이 그분께서 당신을 위해 준비한 단서입니다.',
      );
      era.println();

      await era.printAndWait(
        `${flash.name}은(는) 주머니에서 아직 온기가 남은 편지를 꺼내,${
          gs.name
        }에게 건넨 뒤 떠났다. 둘만 남았다.`,
      );
      era.println();
      await gs.say_and_wait('어디 한번 볼까!');
      era.println();
      await gs.say_and_wait('『에덴은 가장 깊은 해저에……』');
      await gs.say_and_wait('『에덴을 얻으려면 네 개의 단서가 필요하다……』');
      await gs.say_and_wait(
        '『수많은 강적과 싸워 그녀들에게서 단서를 얻어라 by 비전의 서.』',
      );
      era.println();

      era.printButton(
        '「게임용 스틱으로 조종하는 미니 잠수함을 타고 잠수하지 않아도 된다면 좋겠는데……」',
        1,
      );
      await era.input();

      await gs.say_and_wait('흥흥, 점점 피가 끓어오르는군!');
      await gs.say_and_wait(
        '그런데 플래시가 계속 말하는 『그분』은 누구지……?',
      );
      era.println();

      await era.printAndWait(
        `なんにせよ、${gs.name}의 레이스를 향한 열정이 더욱 높아졌다. 나쁜 일은 아니다!`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] arim_kin_win_s
  arim_kin_win_s: (() => {
    const title = '마지막 키워드';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, flash, jordan, you, callname) => {
      await flash.say_and_wait('정말로…… 아쉽습니다.');
      await jordan.say_and_wait('젠장, 오늘이야말로 이길 줄 알았는데……!');
      await gs.say_and_wait(
        '고맙다. 내 화산 폭발 하트도 최고 온도까지 올라갔다고!',
      );
      await flash.say_and_wait(`축하드립니다, ${gs.name} 씨.`);
      await flash.say_and_wait('이번이 당신과의 마지막 대결이 되겠군요.');
      await flash.say_and_wait('부디 받아주세요.');
      era.println();
      await era.printAndWait(
        `${flash.name}이(가) 꺼낸 종잇조각, 그것이 에덴으로 이어지는 마지막 단서다!`,
      );
      era.println();
      await gs.say_and_wait('이건……!!');
      await flash.say_and_wait(
        '이것이 당신이 찾아 헤맨 에덴……일까요. 자세히는 모르겠지만 부디 힘내세요.',
      );
      await gs.say_and_wait('고맙다!');
      era.println();
      await era.printAndWait(
        `${flash.name}、${jordan.name}. 고루시의 생애를 함께한 숙적들의 모습이 인파 속으로 멀어져간다……`,
      );
      era.println();
      await gs.say_and_wait(`${callname}, 이게……!`);
      era.println();

      era.printButton('「이게 마지막이다!」', 1);
      await era.input();

      await era.printAndWait('자, 마지막 단서를 밝혀보자!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] begin_race_win
  begin_race_win: (() => {
    const title = '미주';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}에게 남긴 불안과 달리 ${gs.name}은(는) 힘차고 멋진 레이스를 보여줬다!`,
      );
      era.println();
      await era.printAndWait(
        '앞으로의 레이스도 기대할 수 있다. 지금이야말로 나아갈 방향을 바라볼 때다.',
      );
      era.println();

      era.printButton('「수고했어!」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.name}은(는) 곧 두 팔을 높이 치켜들고 의미 불명의 콩 주문을 외우며 오늘이 있는 것은 콩 단백질 덕분이라고 주장했다.`,
      );
      era.println();
      await gs.say_and_wait('오늘도 성실하게 두유를 갈아보자! 콩이다 콩이다 콩이다 콩——!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] crazy_fan_end
  crazy_fan_end: (() => {
    const title = '팬의 습격';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait('쏟아지는 폭우, 길게 울리는 사이렌.');
      await era.printAndWait([
        '끝없이 이어지는 듯한 거리는 호기심 어린 행인들로 가득하고,',
        you.get_colored_name(),
        '은(는) 들것에 고정된 채 절망이 새겨진 두 눈을 크게 뜨고,',
        gs.sex,
        '이(가) 경찰차에 타는 모습을 바라봤다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 찔린 격통을 견디며 목소리를 쥐어짜 「이건',
        gs.sex,
        ' 탓이 아니야!」라고 외친다.',
      ]);
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        '이(가) 피로 온몸을 물들인 모습은 마치',
        gs.sex,
        '이(가) 자랑스럽게 여기는 승부복을 입고 있는 듯했다.',
      ]);
      era.println();
      await era.printAndWait('이렇게 되어서는 안 됐다.');
      await era.printAndWait([
        '트레이너의 실패를,',
        gs.uma_sex_title,
        '이(가) 짊어져서는 안 된다.',
      ]);
      await era.printAndWait([
        gs.uma_sex_title,
        '의 인간을 초월한 육체는 이런 곳에서 쓸 것이 아니다.',
        gs.couple_title,
        '은(는) 코스 위에서 즐겁게 경쟁하기만 하면 됐다.',
      ]);
      await era.printAndWait([
        '예를 들어 ',
        gs.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '을(를) 위해 자제력을 잃고,',
        you.get_colored_name(),
        '을(를) 찌르려던 광인을 때려 길 위에 너무도 아름다운 붉은 융단 한 줄을 만드는 일은 있어서는 안 됐다.',
      ]);
      era.println();
      await era.printAndWait('대체…… 어디서 잘못된 걸까……');
      era.println();
      await era.printAndWait([
        '분노한 팬의 보복을 받아,',
        you.get_colored_name(),
        '은(는) 결말을 맞았다……',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hope_sta_win
  hope_sta_win: (() => {
    const title = '에덴으로 가는 길';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      const ret = [];
      await era.printAndWait('무사히 완주했다!');
      era.println();
      await era.printAndWait(
        '이 기세라면 내년 클래식급에서도 골드 쉽의 활약을 볼 수 있을 것 같다.',
      );
      era.println();

      era.printButton('「수고했어!」', 1);
      await era.input();

      await gs.say_and_wait(
        '이 정도면 가오리 지느러미 장어구이도 질투할 향기다——맡아볼래?',
      );
      era.println();
      await era.printAndWait(
        `땀투성이인 ${gs.name}이(가) 다가와 ${you.name}에게 자기 땀 냄새를 맡게 한다……`,
      );
      era.println();
      await gs.say_and_wait('어때? 육지를 제패한 다음엔 바다까지 손에 넣었다고~');
      era.printButton('「확실히 좋은 냄새네……」 (연모+2)', 1);
      era.printButton('「그런데 이건 육상 레이스잖아……」 (호감+10)', 2);
      ret.push(await era.input());
      await era.printAndWait([
        gs.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 선수 통로 벽으로 밀고, 자신도 ',
        you.get_colored_name(),
        '에게 등을 기댔다.',
        gs.sex,
        '은(는) 힘을 풀어 금방이라도 쓰러질 듯하다.',
        you.get_colored_name(),
        '은(는) 어쩔 수 없이……',
      ]);
      era.println();
      era.printButton('(골드 쉽의 허리를 안아 지탱한다) (연모+2)', 1);
      era.printButton('(어깨를 빌려 골드 쉽을 지탱한다) (호감+10)', 2);
      ret.push(await era.input());
      await gs.say_and_wait(
        `그러고 보니 트윙클 시리즈는 이걸로 전부 방송 종료지. 이 ${
          gs.sex_code === 1 ? '도련님' : '아가씨'
        }의 뜨거운 승부욕도 이제 나설 데가 없네……`,
      );
      era.println();

      era.printButton(
        '「아니 아니, 무슨 소리야. 지금부터가 본격적인 클래식급이잖아!」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `그런 대화를 나눈 끝에 ${you.name}과(와) ${gs.name}은(는) 천천히 대기실로 돌아갔다——`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hoverboard
  hoverboard: (() => {
    const title = '고루시호, 폭탄 탄생!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        '「붕붕붕——붕붕붕——」 하는 소음이 가까워진다. 모기 날갯소리는 아니다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 세그웨이가 눈앞을 가로질러 달리고 그 위에 익숙한 그림자가 서 있는 것을 보았다.',
      ]);
      era.println();
      await gs.say_and_wait(
        '최고 속도 시속 25킬로, 출력 250와트! 이것이 고루시호다!',
      );
      era.println();
      await era.printAndWait(
        '세그웨이는 드리프트하며 멈췄고 차량 위의 아름다운 그림자가 단숨에 뛰어내렸다.',
      );
      await era.printAndWait([
        gs.get_colored_name(),
        '은(는) 의기양양하게 ',
        you.get_colored_name(),
        '에게 엄지를 치켜세웠다.',
      ]);
      era.println();
      era.printButton('「고, 고루시호?」', 1);
      await era.input();
      await gs.say_and_wait('바로 고루시호, 그것이다!');
      await era.printAndWait([
        gs.sex,
        '은(는) 고루시호의 핸들을 가볍게 두드리며 자랑스럽게 ',
        you.get_colored_name(),
        '에게 애차의 전모를 보여줬다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 다가가 살펴보니 형태는 제대로 갖춰져 있다. 위는 은색, 아래는 검은색이며 스포크는 보통 세그웨이보다 한 치수 크다.',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        '은(는) 세그웨이에 대해 잘 몰라 특주품인지 판단할 수 없다.',
      ]);
      await era.printAndWait([
        '다만 이 세그웨이는',
        gs.sex,
        ' 본인과 마찬가지로 금색 부분이 거의 보이지 않는다.',
      ]);
      era.println();
      era.printButton('「그래서 어디가 골드인 거야?」', 1);
      await era.input();
      await gs.say_and_wait('가격.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 돈이라는 말을 듣는 순간 눈썹이 곤두섰다.',
      ]);
      era.println();
      era.printButton('「비싼 건 아니지?」', 1);
      await era.input();

      await era.printAndWait('프로 선수는 돈을 헤프게 쓴다는 말을 자주 듣는다.');
      await era.printAndWait(
        '많은 젊은 선수는 수입을 얻자마자 유행과 사치로 몸을 치장하고,',
      );
      await era.printAndWait('부진이 찾아왔을 때는 안전망이 될 자금조차 남지 않는다.');
      await era.printAndWait('트레이너로서 제대로 감독해야 한다.');
      era.println();
      await era.printAndWait('하지만 그 걱정은 쓸데없었다.');
      era.println();
      await gs.say_and_wait(
        '고루시가 직접 개조한 고루시호는 값을 매길 수가 없지, 당연히 비싸다!',
      );
      era.println();
      await gs.say_and_wait(
        '안에서 밖까지 엄청난 공을 들여 손본 애차니까!',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 조금 놀랐다. 골드 쉽의 사고가 튀는 방식은 역시 대단하다.',
      ]);
      era.println();
      era.printButton('「……내가 부수면 어떡할 거야?」', 1);
      await era.input();
      await gs.say_and_wait(
        '안심해! 고루시호의 장점은 튼튼함이다! 부딪쳐도 안 부서져!',
      );
      era.println();
      await era.printAndWait([
        '이 지식은 무수한 실전에서 얻은 모양이다. 고루시호가 안에서 밖까지',
        gs.sex,
        '에 의해 개조된 이유도 그것으로 설명된다.',
      ]);
      await era.printAndWait([
        '이 뒤 위험을 멀리해야 하는 중요성을 제대로 가르쳐야 한다. 하지만……',
      ]);
      await era.printAndWait([
        gs.get_colored_name(),
        '이(가) 의욕이 넘쳐 당장이라도 ',
        you.get_colored_name(),
        '을(를) 고루시호에 묶어 달려나갈 듯한 모습을 보고,',
        you.get_colored_name(),
        '은(는)',
        gs.sex,
        '의 호의를 고맙게 받아들이기로 했다.',
      ]);
      era.println();
      await era.printAndWait('【고루시호】의 대여증을 손에 넣었다!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] kiku_sho_win
  kiku_sho_win: (() => {
    const title = '에덴으로 가는 힌트';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}에게 남긴 불안과 달리 ${gs.name}은(는) 힘차고 멋진 레이스를 보여줬다!`,
      );
      era.println();
      await era.printAndWait('앞으로의 레이스가 점점 더 기대된다!');
      era.println();
      await gs.say_and_wait('아~ 다 달렸다, 다 달렸어~');
      era.println();
      await era.printAndWait(`${gs.name}은(는) 힘이 빠진 자세로 길게 숨을 내쉬었다.`);
      era.println();
      await gs.say_and_wait(
        '좋아, 모처럼 어깨에 힘도 빠졌으니 이제 위너스 스테이지에서 채소나 키울까. 내 천재력이라면 위너스 스테이지를 초유기농 농원으로 만들 수 있어.',
      );
      era.println();

      era.printButton('「잠깐만.」', 1);
      await era.input();

      await era.printAndWait(
        `하지만 ${gs.name}은(는) 일직선으로 내달리는 기세로 ${you.name}의 목소리를 듣지 않고 점점 멀어져간다——`,
      );
      era.println();
      await flash.say_and_wait(`——그건 정말 유감이군요, ${gs.name} 씨.`);
      era.println();
      await era.printAndWait(
        `${gs.name}의 귀가 쫑긋 움직이며 이쪽을 돌아본다. 그 성실하고 꼼꼼한 우마무스메 「${flash.name}」가 선수 통로 벽에 기대 웃는지 안 웃는지 알 수 없는 표정을 짓고 있었다.`,
      );
      era.println();
      await flash.say_and_wait('당신의 닻은 이미 무뎌진 모양이군요.');
      era.println();

      if (era.get('cflag:37:招募状态') === recruit_flags.yes) {
        era.printButton(`「플래시인가.」`, 1);
      } else {
        era.printButton(`「아, ${flash.name} 씨?」`, 1);
      }
      await era.input();

      await flash.say_and_wait(
        '저는 『그분』의 부탁을 받아 말씀을 전하러 왔습니다.',
      );
      await flash.say_and_wait(
        '하지만 급류에서 물러나실 거라면 이제 그럴 필요도 없겠군요.',
      );
      era.println();

      era.printButton('「무슨 말씀이죠?」', 1);
      await era.input();

      await flash.say_and_wait(
        '당신들이 쫓고 있는 『에덴』으로 이어지는 힌트입니다.',
      );
      await gs.say_and_wait('뭐라고——! 에덴이라고!');
      await gs.say_and_wait('그런데 에덴이 뭐야?');
      era.println();

      era.printButton('「설마 이온 같은 건 아니겠지.」', 1);
      await era.input();

      await flash.say_and_wait('……에덴이란 이른바 우마무스메의 이상향입니다.');
      era.println();

      await era.printAndWait(
        `${you.name} は ${flash.name}이(가) 작게 「그게 뭔데요」라고 중얼거리는 걸 들었지만 못 들은 척했다.`,
      );
      era.println();

      await gs.say_and_wait('오오! 꿈에 나온 그거잖아!');
      await gs.say_and_wait('플래시, 가르쳐줘!');
      era.println();

      await era.printAndWait(`${flash.name}은(는) 작게 웃으며 고개를 저었다.`);
      era.println();

      await flash.say_and_wait(
        '은퇴해 농사짓는 인생에서 복귀하실 모양이군요.',
      );
      await flash.say_and_wait(
        '다만 이런 중요한 정보는 그렇게 쉽게 얻을 수 없습니다.',
      );
      await flash.say_and_wait(
        '알고 싶으시다면 『아리마 기념』 무대에서 저와 한 판 겨루시겠습니까?',
      );
      era.println();

      era.printButton('「아리마 기념에서 당신과 달리면 되는 건가?」', 1);
      await era.input();

      await flash.say_and_wait('그렇습니다. 저는 두말하지 않습니다.');
      era.println();

      await era.printAndWait(
        `『그분』이 누구인지는 아직 모른다——하지만 적어도 고루시가 레이스를 달릴 원동력은 돌아왔다! 고맙다, 플래시!`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] oc_95_1
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('트레——! 또 왔다!');
      await gs.say_and_wait('어때!? 어때 어때 어때!?');
      era.println();

      await era.printAndWait(
        `예상과 달리 ${gs.name}은(는) 평범한 교복이 아니라 세련된 검은 의상을 입고 있었다.`,
      );
      era.println();

      await gs.say_and_wait(
        '이건 고루시가 직접 디자인하고 직접 꿰맨 무대 의상이다!',
      );
      await gs.say_and_wait('목표는 파리 컬렉션 런웨이다!');
      era.println();

      era.printButton('「예쁘냐고 하면, 확실히 예쁘긴 한데……」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.sex}은(는) 씩 웃으며${you.name}의 팔을 잡았다. 풍만한 가슴이${you.name}에게 닿는다.`,
      );
      era.println();

      await gs.say_and_wait('그럼~ 내일은 정장하고 신사에서 새해를 맞는 거다!');
      era.println();

      era.printButton('「……응? 나도 입는 거야?」', 1);
      await era.input();

      await era.printAndWait(
        `다음 날 ${you.name}은(는) 화려한 무사 갑옷을 억지로 입고 서양 귀부인풍의 골드 쉽과 함께 근처 신사에서 호기심 어린 시선에 둘러싸였다.`,
      );
      era.println();

      await era.printAndWait(
        `${gs.name}와(과) 보내는 두 번째 새해도 전혀 방심할 수 없다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_golden_ship_date
  os_golden_ship_date: (() => {
    const title = '고루시식 데이트';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait(
        `어느 날 ${you.name}과(와) ${gs.name}은(는) 교문 근처에서 우연히 마주쳤다——`,
      );
      era.println();

      await gs.say_and_wait('가앗! 열받아!');
      await gs.say_and_wait(
        `${callname}, 조던 녀석이 내가 데이트를 모른다고 지껄였어어어!`,
      );
      await gs.say_and_wait(
        `어차피 한가하지!? 지금부터 ${
          gs.sex_code - 1 ? '나' : '나'
        }랑 데이트다!`,
      );
      era.println();

      await era.printAndWait(
        `결국 ${gs.sex}에게 억지로 번화가까지 끌려나왔다……`,
      );
      await era.printAndWait(
        '하루 종일 떠들썩하게 놀고 난 뒤 두 사람은 돌아가는 길의 공원에서 잠시 쉬고 있었다.',
      );
      era.println();

      await gs.say_and_wait('후우~ 나도 조금 피곤하네. 이제 뭐 할래?');
      era.printButton('「마실 것 좀 사올게.」 (스태미나+20)', 1);
      era.printButton('「연장전! 이길 때까지 한다!」 (파워+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) ${gs.sex}에게 마실 것을 사주고 두 사람은 천천히 걸어 기숙사로 돌아갔다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}와(과) ${gs.name}의 기묘한 게임은 아직 계속된다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_win
  race_end_win: (() => {
    const title = '레이스 승리!';
    /** @param {CharaTalk} gs ゴールドシップ */
    const f = async (gs) => {
      await gs.say_and_wait(
        '어때! 트레이너, 내 뜨거운 달리기 머리에 확실히 새겨졌냐!?',
      );
      era.printButton('「최고였어!」', 1);
      era.printButton('「더 높은 곳을 노리자!」', 2);
      if ((await era.input()) === 1) {
        await gs.say_and_wait('그렇지? 말 안 해도 안다고.');
      } else {
        await gs.say_and_wait('좋아——! 지핵의 중심이 되어주겠어!!');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_47_3
  sa_47_3: (() => {
    const title = '엄마는 신보다 강하다 편';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} gs2 ゴールドシップ（第二配色、ふざけ状態）
     * @param {CharaTalk} creek スーパークリーク
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, gs2, creek, you) => {
      await gs2.say_as_unknown_and_wait('해저에 잠든 황금의 배여……');
      await gs2.say_as_unknown_and_wait('지금이야말로 깨어날 때……');
      await gs2.say_as_unknown_and_wait(
        '그 힘을 발휘해 전인미답의 경지에 이르라……',
      );
      era.println();

      await gs.say_and_wait('……응? 방금 목소리, 뭐지……?');
      era.println();

      era.printButton('「드디어 환청까지 들리냐?」', 1);
      await era.input();

      await gs.say_and_wait(
        '신을 자칭하는 목소리가 들렸어. 아니면 고루시 몸속의 제2인격인가?',
      );
      era.println();
      era.printButton('「정신건강 전문가 예약해둘까……」', 1);
      await era.input();

      await gs.say_and_wait('아니, 그 녀석이 나한테 『에덴』으로 가라고……');
      era.println();

      await era.printAndWait(
        `클래식 삼관의 첫 경기 사츠키상이 벌써 가까워졌다. 푸딩 같은 건 생각하지 않는 편이 좋다…… 하지만 ${gs.name}은(는) 제멋대로 쏜살같이 뛰쳐나가 그 「에덴」을 찾으러 갔다.`,
      );
      era.println();

      await gs.say_and_wait('I AM GODSHIP(나는 신의 금선이다)——!');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 실내에서 방향 전환 선회 속도를 최대로 끌어올려 어떻게든 ${
          gs.name
        }의 뒤를 쫓는다——그러자${
          gs.sex
        }은(는) 다른${gs.uma_sex_title}에게 정면으로 부딪치고 뒤에서 따라붙은 ${
          you.name
        }에게 끼였다.`,
      );
      era.println();

      await gs.say_and_wait('나는…… 금성이 보여…… 금성에 공원이……');
      await gs.say_and_wait(
        '아니, 네놈 누구야! 신금선의 충격을 버티다니……!',
      );
      await creek.say_and_wait(
        `어머어머, 안녕하세요, ${gs.name} 씨. 오늘도 건강하시네요.`,
      );
      era.println();

      await era.printAndWait(
        `그 정도 충격을 버티다니, 정말 가슴…… 아니, 정말 내구력이 뛰어난${creek.uma_sex_title}이(가)군!`,
      );
      era.println();

      era.printButton('「신이라도 엄마한테는 못 이기나 보네……」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) ${creek.name}에게 사과한 뒤 머리가 어질어질한 ${gs.name}을(를) 훈련실로 끌고 돌아갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_95_41
  sa_95_41: (() => {
    const title = '진검승부 편';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, festa, you) => {
      await era.printAndWait(
        `${you.name}와(과) 골드 쉽을 에덴으로 이끄는 수수께끼의 인물……`,
      );
      era.println();

      await era.printAndWait(
        '그 인물은 골드 쉽이 레이스에 나설 의욕을 내게 하려고 이렇게까지 손을 쓰는 것이겠지. 어쨌든 그것이 골드 쉽의 원동력이 된다면…… 세 쪽 모두 이득인 상황이다.',
      );
      era.println();

      era.printButton('(그래서 얘들은 뭐 하는 거지……)', 1);
      await era.input();

      await era.printAndWait(
        `${
          you.name
        }의 눈앞에는 빼닮은${gs.uma_sex_title}의 모습이 둘 서 있다…… 빼닮은 게 아니라 본인들이다.`,
      );
      era.println();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……');
      era.println();

      await era.printAndWait(
        '두 사람은 사람들이 오가는 안뜰에 서 있다. 꼼짝도 하지 않는데 오히려 더 눈에 띈다.',
      );
      era.println();

      await festa.say_and_wait('……');
      await gs.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `또 영문 모를 대결을 하는 모양이다. 움직이면 지는 챌린지 같은 것. 이때 ${you.name}은(는) 재미있는 생각을 떠올렸다.`,
      );
      era.println();

      era.printButton('「와, 다 큰 것들이 무궁화 꽃이 피었습니다냐.」', 1);
      await era.input();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……！');
      era.println();

      era.printButton('「그래, 이 기회에 장난이나 쳐볼까~?」', 1);
      await era.input();

      await festa.say_and_wait('……むっ！');
      await gs.say_and_wait('……');
      era.println();

      era.printButton('「어라, 저니 씨 아니십니까!」', 1);
      era.printButton('두 사람 허리의 민감한 곳을 쓰다듬는다.', 2, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await festa.say_and_wait('칫, 들켰나!? ……거짓말이지!');
        await gs.say_and_wait('좋아, 내 승리!!');
        await festa.say_and_wait(
          '젠장! 골드 쉽 이 자식! 좋아! 다음엔 내가 잘하는 분야에서 정정당당하게 쓰러뜨려주마!',
        );
        await gs.say_and_wait('핫! 그럼 골 옆에서 기다리고 있으마!');
      } else {
        await festa.say_and_wait('……네놈❤️!');
        await gs.say_and_wait('……❤️');
        era.println();

        await era.printAndWait(
          `${you.name}의 노골적인 애무에 두 사람의 마음은 애가 타고 호흡은 거칠어졌으며 향기로운 입술에서 새어나오는 달콤한 목소리는,${you.name}의 손이 금역으로 나아갈수록 더욱 빨라졌다. 승부 결과 따위는 이미 아무래도 좋게 되었다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sa_heroine_red
  sa_heroine_red: (() => {
    const title = '主役の赤！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(`ある日、${you.name} が中庭を歩いていると——`);
      await era.printAndWait(`勝負服を着た ${gs.name} がいた。`);
      era.println();

      await gs.say_and_wait(
        `あ、${you.actual_name} じゃねえか。今日も元気に鰓呼吸しろよ。`,
      );
      era.printButton('「……それより、なんで勝負服なんだ？」', 1);
      await era.input();
      await gs.say_and_wait('これは赤い主役の力を得るためだ。');
      await gs.say_and_wait(
        'その顔は何だ？ よく考えろ、子供のころ見た戦隊ヒーローも熱血漫画の主役も、みんな赤だろ？',
      );
      await gs.say_and_wait('赤を着てるやつが主役で、最後は必ず勝つんだ！');
      era.println();

      await era.printAndWait(
        `少しズレてはいるが、${gs.name} の言うことは間違っていない……この機会に、少し教えておくか？`,
      );
      era.printButton('「世の中には、いろんな赤がある。」（賢さ+20）', 1);
      era.printButton('「自分の信念を貫け！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('色っぽい赤も、悪役の赤もあるって！？');
        await gs.say_and_wait('そっか、赤の力を甘く見てたな……');
        await gs.say_and_wait(
          'アタシは最初から、主役も悪役もこなせる力を得てたんだ！',
        );
        await gs.say_and_wait('しかも……色っぽさつきで魅力は無敵だぜ❤️');
        era.println();

        await era.printAndWait(
          `${gs.name} は妖艶な視線を残し、興奮して去っていった。`,
        );
      } else {
        await gs.say_and_wait(
          `その通りだ！ ${gs.sex_code !== 1 ? 'アタシ' : 'オレ'}、参上！`,
        );
        era.println();

        await era.printAndWait(`${gs.name} は元気よく去っていった。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sa_sudden_look_back
  sa_sudden_look_back: (() => {
    const title = 'ゴルシの突然昔語り編！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `腹が減った。食堂のラーメンが評判らしい。${you.name} はトレセン食堂へ向かい、腹の虫を鎮めることにした。`,
      );
      era.println();

      await era.printAndWait(
        `途中、${you.name} は遠くから中庭に座るゴールドシップを認めた。陽の光が揺れる枝葉の間から、黙った美人の上へ降り、きらめいている。`,
      );
      era.println();

      await gs.say_and_wait(`あ、${you.actual_name} か。`);
      era.println();

      era.printButton('ここで何してるんだ？ 飯は食わないのか？', 1);
      await era.input();

      await gs.say_and_wait('どう言えばいいか、昔を思い出してた。');
      await gs.say_and_wait(
        'ずっと前の吹雪の夜、幼いアタシは家のネジ工場の足しに、一人で街で金属バットを売っててな……',
      );
      era.println();

      era.printButton('ネジを打てよ。', 1);
      await era.input();

      await gs.say_and_wait(
        '途中で骨まで凍る風にやられて、もう人の形じゃなくなって、寒さで泣いちまった。',
      );
      await gs.say_and_wait(
        `それから……アタシの運命を変えた${gs.uma_sex_title}が現れた。`,
      );
      await gs.say_and_wait(
        `${gs.sex}はアタシの前に来て、温かいラーメンスープの雑炊を差し出した。`,
      );
      era.println();

      era.printButton('いま何の話をしてるか、自分で聞いてみろよ。', 1);
      await era.input();

      await gs.say_and_wait(
        `${
          gs.sex
        }はこう言った。『私も${gs.uma_sex_title}だけど走るのは苦手で、いまはラーメン屋をやってる。あなたも、人生の目標は自由に選んでいいのよ』ってな。`,
      );
      await gs.say_and_wait(
        `その${gs.uma_sex_title}の言葉で気づいた。アタシは実家のネジ工場を継がなくていいんだ、って！`,
      );
      era.println();

      await era.printAndWait(
        '他人に左右されず、自分の道を歩く……それは、いかにもゴールドシップだ。',
      );
      era.println();

      era.printButton(
        '「当時のスープを再現してみるか？」（スタミナ＆賢さ+10）',
        1,
      );
      era.printButton('「当時の場所を見に行こうか？」（スピード+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('スープの再現……アタシにできるか？');
        await gs.say_and_wait(
          '……ふん、鍛え上げたアタシにできねえわけがねえ。ニンニクを山ほど入れた味、覚えてる！',
        );
        await gs.say_and_wait(`ついてこい！`);
        era.println();

        await era.printAndWait(
          `${you.name} はゴールドシップに食堂の厨房へ連れて行かれ、衆人環視の中で一角を占領し、ラーメンスープの研究を始めた。`,
        );
        era.println();

        await gs.say_and_wait(
          'よし！ 完成だ！ ニンニクだらけのラーメン！ 一緒に味見しようぜ！',
        );
        era.println();

        era.printButton('「辛すぎる————！！ ニンニク入れすぎで食えねえ！」', 1);
        await era.input();

        await era.printAndWait(
          `${you.name} とゴールドシップはあとで反省し、あの日あれほど濃い雑炊を飲み込めたのは、極寒という極端な事例だったと結論した。`,
        );
      } else {
        await gs.say_and_wait('当時の場所……そうだ！ 堤防のそばだ！');
        await gs.say_and_wait(
          '何も変わってなきゃ、あのラーメン屋台はまだあるはずだ！',
        );
        era.println();

        await era.printAndWait(
          `${you.name} はゴールドシップに堤防へ連れて行かれ、謎のラーメン屋台を探したが、夜まで一粒も得られなかった……`,
        );
      }
      era.println();

      await era.printAndWait(
        `その後のある日、${you.name} はトレーナー室に夜まで残っていた。ゴールドシップのトレーナーとして、${gs.sex}のファンレターを管理するのも自分の務めだ。${you.name} は機械的にその一通を開き、意味深な文面を目にした……`,
      );
      era.println();

      await era.printAndWait(
        '？？？「どうやら、あなたは本当に自由に自分の道を選んでいるようね。私も、ずっと見守っているわ。」',
      );
      era.println();

      era.printButton('この手紙は、ゴルシに見せておこう……', 1);
      await era.input();

      await era.printAndWait(
        `手紙にはその文だけがあり、上書きも下書きもない。だが ${you.name} は、ゴールドシップの、ニンニクだらけの冬の物語を思わず思い出していた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_win
  sats_sho_win: (() => {
    const title = '四月の仇';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('セイヤー！ 五月の仇、討ったぜ！');
      era.println();
      await era.printAndWait(
        `なぜかは分からないが、${gs.sex}は四月開催なのに皐月賞と呼ぶ皐月賞に不服らしく、こうして皐月賞と喧嘩を売っていた。`,
      );
      era.println();
      await gs.say_and_wait('来年も皐月賞に戻って、五月の仇をもう一回討つ！');
      era.println();

      era.printButton(
        '「皐月賞はクラシック級だ、一生に一度しか走れないぞ！」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `だが ${you.name} の声が届く前に、${gs.name} はもう遠くまで走っていた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sr_shoubu
  sr_shoubu: (() => {
    const title = '本気で勝負だ！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_49 ゴールドシップのナカヤマフェスタへの呼び方
     * @param {boolean} success 対決が成功したか
     */
    const f = async (gs, festa, you, call_49, success) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} と ${gs.name} は屋上で小休止を楽しんでいた……本来なら波もなく過ぎる時間だった——だが ${you.name} は ${festa.name} を見た。`,
      );
      era.println();

      await festa.say_and_wait('……よう、今日もご機嫌だな。');
      await gs.say_and_wait([call_49, '……！！']);
      era.println();

      await era.printAndWait(
        `刹那！ 血が凍った！ ${festa.name} から漂う博徒の気迫に、あの ${gs.name} すら圧倒されてるァ……！！`,
      );
      era.println();

      await festa.say_and_wait(
        'ふんふん……そんな顔するなよ。そうされると、今すぐ勝負したくなる。',
      );
      await gs.say_and_wait('勝負……！？');

      era.printButton('「フェスタ、何を……！」', 1);
      await era.input();

      await festa.say_and_wait('もちろん……');
      era.println();
      era.printButton(`${festa.name}「限定じゃんけん……！」`, 1);
      era.printButton(`${festa.name}「エンペラー……！」`, 2);
      era.printButton(`${festa.name}「……えっち❤️」`, 3, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      ret.push(await era.input());
      if (ret[0] === 3) {
        await era.printAndWait(
          `${you.name} とゴールドシップは、突然の行為の誘いにはたと固まった。だがナカヤマフェスタの目の欲の炎は、もう待ちきれないと語っていた……`,
        );
        era.println();
        await festa.say_and_wait(
          'なあ、想像しただけで下、濡れてる……早く勝負しようぜ❤️❤️❤️',
        );
      } else {
        if (ret[0] === 1) {
          await era.printAndWait(
            '限定じゃんけん……！！ カードでじゃんけんし、相手の命を奪う恐ろしいゲーム……一歩間違えれば深淵へ落ちる！！',
          );
        } else {
          await era.printAndWait(
            'エンペラー……！！ カードの大小で生死を決める恐ろしいゲーム……一歩間違えれば深淵へ落ちる！！',
          );
        }
        era.println();
        await era.printAndWait(
          `まずい……${
            gs.couple_title
          }の性格じゃ、片付くころには昼飯が冷めてる！ どうする、止めるべきか……！？`,
        );
        era.printButton('「いや、俺が代わりに立つ！」（体力+100）', 1);
        era.printButton(
          '「頑張れ……！」（【非根幹距離○】習得、スキルPt+60 または スキルPt+15）',
          2,
        );
        ret.push(await era.input());
        if (ret[1] === 1) {
          await festa.say_and_wait(
            'は？ けっこう肝が据わってるじゃねえか……面白え！',
          );
          await festa.say_and_wait('よし！ 今日は付き合ってやる！');
          await gs.say_and_wait('おいおいマジかよ！？ アタシだけ外された！？');
          era.println();

          await era.printAndWait(
            `${you.name} はありったけを出し、どうにか絶体絶命を生き抜いた……`,
          );
          await era.printAndWait('だが昼休みは、気づかぬうちに過ぎていた！');
        } else if (success) {
          await era.printAndWait(
            `${gs.name} はありったけを出し、どうにか絶体絶命を生き抜いた……`,
          );
          await era.printAndWait('だが昼休みは、気づかぬうちに過ぎていた！');
        } else {
          await era.printAndWait(
            `${gs.name} はありったけを出したが、${festa.name} には勝てなかった……`,
          );
          await era.printAndWait('しかも昼休みは、気づかぬうちに過ぎていた！');
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] takz_kin_win_s
  takz_kin_win_s: (() => {
    const title = 'キーワード';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     * @param {boolean} win_takz_kin_c ゴールドシップがクラシック年の宝塚記念に勝っているか
     * @param {boolean} bad_result 悪い結果か（「ゲート難」を習得）
     */
    const f = async (
      gs,
      flash,
      jordan,
      you,
      callname,
      win_takz_kin_c,
      bad_result,
    ) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait(`ははは！ ${jordan.name}！ 勝ったぜ、第三部完！`);
      era.println();
      await era.printAndWait(
        `レース後、${gs.name} は得意げに、敵であり友でもあるギャル・${jordan.name} へ勝ちを見せつけていた。`,
      );
      era.println();
      await jordan.say_and_wait('ぐ——覚えとけよ！');
      await jordan.say_and_wait('あと、これも覚えとけ！');
      era.println();
      await era.printAndWait(
        `${jordan.name} は紙切れを ${gs.name} の手にねじ込み、ぷんすかと去っていった。`,
      );
      era.println();

      era.printButton('「あ、またエデンの手がかりか？」', 1);
      await era.input();

      await gs.say_and_wait('ん……今度は『ゾ』だ。');
      await gs.say_and_wait('全然分かんねえ——！');
      era.println();
      await era.printAndWait(
        `${flash.name} だけでなく、${jordan.name} まで加わっている……裏で糸を引く人物は、いったい何者だ？`,
      );
      if (win_takz_kin_c) {
        await era.printAndWait(
          `帰ろうとしたとき、傍らの観客が ${gs.name} に手を振り、声を上げた。`,
        );
        era.println();
        await era.printAndWait('観客A「ゴールドシップ、すごすぎる！」');
        await era.printAndWait('観客B「連覇おめでとう！」');
        era.println();
        await era.printAndWait(`礼儀として、こちらも観客に応えた。`);
        era.println();
        await gs.say_and_wait('ありがとな！');
        era.println();

        era.printButton('「応援ありがとう～」', 1);
        await era.input();

        await era.printAndWait(
          `${gs.name} は振り返って ${you.name} に尋ねる。`,
        );
        era.println();
        await gs.say_and_wait(`${callname}、連覇って何だ？`);
        era.println();

        era.printButton('「……去年も、このレースで勝ってるだろ。」', 1);
        await era.input();

        await gs.say_and_wait('マジかよ？ じゃあアタシ、超すげえのか？');
        era.println();

        era.printButton('「たしかに超すごい。」', 1);
        era.print('（パワー+18、他ステータス+3）', { offset: 1, width: 23 });
        era.printButton('「歴史に名を残せるすごさだ！」', 2);
        era.print(
          [
            '（全ステータス+3、「ゲート難」習得、スキルPt+45 または 全ステータス+8、スキルPt+75）',
          ],
          { offset: 1, width: 23 },
        );
        const ret = await era.input();
        if (ret === 2 && !bad_result) {
          await gs.say_and_wait(
            'あーはっは～やっぱりゴルシは、褒められるとちゃんとする子なんだよな～',
          );
          await gs.say_and_wait('これからも、ちゃんと甘やかせよ～');
        }
        return [ret];
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_sho_win_s
  tenn_sho_win_s: (() => {
    const title = 'キーワード？';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, jordan, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait('ときに笑い、ときに涙……紆余曲折の旅……');
      await gs.say_and_wait(
        'この旅のすべては無駄じゃなかった！ だって勝利は、もうアタシの手の中だ！',
      );
      await jordan.say_and_wait('くそっ、またてめえに負けたか……！！ ぐ……！！');
      await jordan.say_and_wait(
        '今日はウマも足元すくう日だ、次は絶対取り返す！',
      );
      await gs.say_and_wait('いいぜ！ ゴールでマカロン食いながら待ってる！');
      await jordan.say_and_wait('ふん！');
      era.println();
      await era.printAndWait(
        `こうして ${jordan.name} はまたぷんすかと去っていった。だが……`,
      );
      era.println();
      await gs.say_and_wait('おっ？ なんか落としていきやがった。');
      era.println();
      await era.printAndWait('以前と同じ紙切れだ。また新しい手がかりらしい。');
      era.println();

      era.printButton('「素直じゃないやつだな。」', 1);
      await era.input();

      await gs.say_and_wait('今度は……『ク』。');
      await gs.say_and_wait('『スイ』、『ゾ』、『ク』……');
      await gs.say_and_wait('まだ分かんねえ——！');
      era.println();
      await era.printAndWait(
        'あのお方は今回もきちんと新しい手がかりを残した。生徒をこういうことに使えるとは、よほど位の高い人物なのか？',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_spr_win
  tenn_spr_win: (() => {
    const title = 'キーワード';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait(
        'ほっ！ ほっ！ ほっ！ ほっ！ 今日もよく走れたかしら？',
      );
      await gs.say_and_wait(
        `本${
          era.get('cflag:7:性别') !== 1 ? 'お嬢' : '旦那'
        }の美は、素手で割ったウニのように新鮮、ほっ！ ほっ！ ほっ！ ほっ！`,
      );
      era.println();
      await era.printAndWait(
        `今日の ${gs.name} は作風を変え、まさにアニメ漫画のお嬢様ステレオタイプ総集編のようだった。`,
      );
      era.println();

      era.printButton('「その生臭さは、嗅ぎたくない。」', 1);
      await era.input();

      await flash.say_and_wait(`よくなさいました、${gs.name} さん。`);
      await flash.say_and_wait('では、約束の第一条の手がかりです。どうぞ。');
      await gs.say_and_wait('すぐ逃げるな、前回と全然違う。');
      era.println();

      era.printButton('「飽きたんじゃないか？ 何て書いてある。」', 1);
      await era.input();

      await gs.say_and_wait('字が一つしかねえ、『スイ』。');
      era.println();
      await era.printAndWait(
        `以前 ${
          flash.name
        } が渡した手紙には、エデンへ向かう四つの手がかりを集めろとあった。この『スイ』が第一条だろう。`,
      );
      era.println();
      await gs.say_and_wait(
        'いいぜ！ 面白え！ なら四つの手がかり、全部集めちまおう！',
      );
      era.println();
      await era.printAndWait(
        'ゴールドシップのレースへの熱が、さらに上がった！',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ts_add
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait([
        '今日、',
        gs.get_colored_name(),
        ' との訓練は、どうにか終わった。',
      ]);
      era.println();

      await gs.say_and_wait('お疲れ——！ ばいばーい、ばいばーい！');
      era.println();

      await era.printAndWait([
        gs.get_colored_name(),
        ' は伸びをして小走りに去る——そして戻ってきた。',
      ]);
      era.println();

      await gs.say_and_wait(
        'よし、追加トレだ！ いまアタシ、ハイって感じだぜ！',
      );
      await gs.say_and_wait([
        callname,
        '、追加トレって知らねえのか？ のび太みたいに情報弱者だなー',
      ]);
      await gs.say_and_wait(
        '追加トレは追加トレの略だ——全宇宙一千万人のゴルシ界隈で大流行してるやつ！',
      );
      await gs.say_and_wait(
        'アタシのトレーナーなら、もっと深く研究しろっての。',
      );

      era.printButton('「なら、流行に置いてかれちゃまずいな。」', 1);
      era.printButton('「違う、今の流行はCD（Cool Down）だ！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait([
          'よし！ 元気だ！',
          you.actual_name,
          ' 隊員、ついてこい——！',
        ]);
        era.println();
        await era.printAndWait('夕陽の下でも、二人は走り続けた。');
      } else {
        await gs.say_and_wait(
          'CD……？ なにそれ、流行ってんの？ トレーナー界隈で流行ってんの……？',
        );
        await gs.say_and_wait(
          'CDってクールダウンの意味か……へっ！ 簡単じゃねえか！',
        );
        await gs.say_and_wait(
          'カキ氷食いながらCDすればいい！ 略して『Cool Down CD』！',
        );
        era.println();
        await era.printAndWait('こうして、二人はちゃんと休んだ。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `新しい年、新しい始まり。${gs.name} の活躍が、さらに上へ届いてほしい。${you.name} はそう思っていた。`,
      );
      await era.printAndWait(
        `その当の本人は ${you.name} に向かって両手を合わせ、掌が当たってパシッと音を立てた。`,
      );
      await gs.say_and_wait(
        '新年ありがとな——新しい一年……去年のアタシが、今年のアタシになった。',
      );
      await era.printAndWait(
        `${you.name} はうなずき、技術的には正しい発言に同意した。`,
      );
      await gs.say_and_wait('でもよ、これって大奇跡だと思うんだよな。');
      await gs.say_and_wait(
        '地球がなかったら、宇宙がなかったら……アタシは存在しねえ。',
      );
      await era.printAndWait(
        `${gs.sex} はまた ${you.name} に向かって合掌する。${you.name} は、三度目は勘弁してほしいと思った。`,
      );
      await gs.say_and_wait(
        'だから今年一年は、いろんなものに感謝する年にする。',
      );
      await gs.say_and_wait('地球に感謝、宇宙に感謝、目の前のてめえに感謝。');
      await gs.say_and_wait(
        'それでは一曲、『恭賀新年～寒冬を越え、春へ行け～』',
      );
      await era.printAndWait(
        `${gs.name} は演歌調の謎の曲を歌い始め、${gs.sex} の悠々とした歌声がトレーナー室にいつまでも残った。`,
      );
      await era.printAndWait(
        `伴奏なしのアカペラでも、${you.name} には歌に満ちた本気の気持ちが伝わってきた。`,
      );
      await era.printAndWait(`一曲終わり、${you.name} は思わず拍手した。`);
      await gs.say_and_wait('サンキュー、サンキュー、山頂の友よこんにちは！');
      await era.printAndWait(
        'アイドル歌手は嬉しそうに、いない観客へ手を振っている。',
      );
      era.println();

      era.printButton('「そういえば……」', 1);
      await era.input();

      await gs.say_and_wait('ん？ どうした？ アタシにも何か伝えるか？');
      await era.printAndWait(
        `${gs.name} は期待の顔を作り、腰の尻尾も箒みたいに勢いよく左右へ振っている。`,
      );
      era.println();

      era.printButton('「今年のクラシック級、ちゃんと結果を出せよ。」', 1);
      await era.input();

      await gs.say_and_wait(
        'なんだよ？ クラシック？ 今年は激烈なギターソロを披露したかったんだけど、逆張りでバイオリンもありかもな。',
      );
      era.println();

      era.print('「何言ってるんだ、つまり……」');
      era.printButton('「長距離適性を鍛えよう！」（スタミナ+40）', 1);
      era.printButton('「いま考えよう！」（賢さ+40）', 2);
      era.printButton('「ドームツアーをやろう！」（スキルPt+50）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await gs.say_and_wait(
            'なるほど、長時間演奏に耐えるスタミナを鍛えるってことか！',
          );
          await era.printAndWait(
            `違う。${you.name} は首を振るが、彼女はもう自分の世界に沈んでいた。`,
          );
          await gs.say_and_wait(
            '分かった！ たしかにクラシックなら、長い曲は10時間にもなるもんな！',
          );
          await gs.say_and_wait(
            'よし！ 10時間でも20時間でも、ウマ娘をよこせー！',
          );
          await era.printAndWait(
            `違う。${you.name} がクラシック級とクラシック音楽の違いを説明する前に、${gs.sex} は一目散に楽器を取りに走った。`,
          );
          await era.printAndWait('いまさら、臨機応変に付き合うしかない。');
          break;
        case 2:
          await gs.say_and_wait(
            'なるほど、バンドメンバーの意見を尊重するか！ それはありだ。',
          );
          await gs.say_and_wait(
            'だって解散の原因、音楽路線の食い違いってやつ、多いからな。',
          );
          await gs.say_and_wait('分かった、付き合う……！ さあ、拳で語ろう！');
          await era.printAndWait(
            'そのあと二人は物理的に打ち解け、トレーナー室で川の字になって寝た。',
          );
          await era.printAndWait('よく眠れた。');
          break;
        case 3:
          await gs.say_and_wait('おいおい……ドームツアー！？');
          await gs.say_and_wait(
            'てめえの夢、遠大すぎる！！ アタシ……燃えてきた！！',
          );
          await gs.say_and_wait(
            'よし！！ 今すぐ開演だ！！ ライブやるなら一位を目指せ！！！',
          );
          await era.printAndWait('そのあと、二人はしばらく必死に練習した。');
          await era.printAndWait(
            '学園で開いた小さな野外ライブは、意外と評判が良かった。',
          );
          await era.printAndWait('で、レースは？');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = '夏合宿';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `夏合宿は、${gs.uma_sex_title}にとって学びと遊びが同居する時間だ。夏休みになれば、ほとんどのトレセンの生徒が海へ向かい、陽の光と砂浜、そして少しばかりの地獄の鍛錬を楽しむ。`,
      );
      await era.printAndWait(
        `当然ながら、そういう時期になると、${you.name} の一風変わった愛馬 ${gs.name} は特に調子がいい。`,
      );
      era.println();

      await gs.say_and_wait(
        'おおおおお！ 夏といえば海だ！ 一緒に海へ出発だ！！！',
      );
      await gs.say_and_wait('Zzzzzzz……');
      era.println();

      await era.printAndWait(
        `${you.name} はバスで死んだ豚みたいに眠る ${gs.name} を見ながら、このやつのやる気は ${gs.sex} 本人と同じで、来たと思えば消えると思った。`,
      );
      era.println();

      era.printButton('「起きろ！！！ 陽が尻を焼いてるぞ！！！」', 1);
      await era.input();

      await gs.say_and_wait(
        'うわ～びっくりした！ いまバスで海の合宿を待ってる夢見てたのに！ どう償うんだよ！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は不機嫌に親指で窓の外を示し、もう着いていることを教える。気づいた ${gs.name} はすぐ上機嫌に、ぴょんと跳ねてバスを降りた。`,
      );
      era.println();

      await era.printAndWait(
        `数日は悪くない休暇で、訓練も充実していた。だが今日はもう訓練の時間なのに、${gs.name} は姿を見せない。${gs.sex}を探すため、海辺へ来た。`,
      );
      era.println();

      await era.printAndWait('そして——');
      era.println();

      await gs.say_and_wait(
        'さあ通る人通る人、見逃すなよーおいしい焼きそば大安売りよー！！',
      );
      await gs.say_and_wait(
        '甘いも酸っぱいも苦いも辛いも～人生と同じだよー！！',
      );
      era.println();

      era.printButton('「なんでここで焼きそば売ってるんだ……！！」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} は腹を立てて屋台の前へ行き、サボっているこいつを問い詰めようとした。`,
      );
      era.println();

      await gs.say_and_wait('あー、トレーナーじゃねえか～特辛でいいんだよな？');
      era.println();

      era.printButton('「訓練に呼べって来たんだ。」', 1);
      await era.input();

      await gs.say_and_wait(
        'いやー、店主のおじちゃんの代わりに立ってるだけだって～腰が痛いらしいんだよ、真夏の陽の下で一日焼かせるの、忍びねえだろ？',
      );
      await gs.say_and_wait(
        'だから今日は、この麺を全部売り切る！ さもないとおじちゃんの腰が治らねえ！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は、${gs.sex}の一度決めたら聞かない性格では説得できないと悟り、仕方なく甘酢味の焼きそばを一皿頼み、隣のビーチチェアで食べながら ${gs.name} を監視し、また失踪されないようにした。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_41
  ws_47_41: (() => {
    const title = '目指せパリコレ編';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, opera, you) => {
      await era.printAndWait(
        'ゴールドシップは有馬記念でエイシンフラッシュとぶつかる——',
      );
      era.println();

      await era.printAndWait(
        'たしかに、エイシンフラッシュ自体が強敵だ……だが有馬記念の舞台では、どの選手も実力十分な強者ばかり！',
      );
      era.println();

      era.printButton('（ゴルシを捕まえて、ちゃんと鍛えねえと……）', 1);
      await era.input();

      await era.printAndWait(
        `そう、この大事な局面で、${
          you.name
        } のかわいくて魅力的な担当${gs.uma_sex_title}ゴールドシップは、またどこかへ消えていた。あいつは意気揚々と ${
          you.name
        } の目の前を大股で通り過ぎ、「おほほほほ！ ウマ娘の頂点に立つために必要なのは圧倒的な『美』……！！」などと言いながら、一目散に走り去った。`,
      );
      era.println();

      await era.printAndWait(
        `${
          you.name
        } は急いで追い、ふと、自身の美学を誇る${opera.uma_sex_title}と鉢合わせした……`,
      );
      era.println();

      await gs.say_and_wait('てめえは……！');
      await opera.say_and_wait(
        'その通り！ 我こそ美の化身！ 神に愛されし光の子！ テイエム——',
      );
      await gs.say_and_wait(
        'オペラオー——！！ ふん、ゴールドシップ様はパリコレに楽々立てる存在だ！',
      );
      await opera.say_and_wait(
        'ぐっ、台詞を奪うとは……！ さすがゴールドシップ、一瞬たりとも油断できぬ！ ではどちらがより美しいか、ここで決着をつけよう！',
      );
      era.println();
      await era.printAndWait(
        `それから二人の${opera.uma_sex_title}は、${
          you.name
        } の注視のもと、まる四時間のウォーキング対決を繰り広げた……！ 当人が楽しむのはまだいい。なぜ ${
          you.name
        } まで引きずり込むのか、なんという無慈悲！`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_29
  ws_95_29: (() => {
    const title = '夏合宿';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await gs.say_and_wait('夏だ！ 海だ！ 水着だ！');
      era.println();

      await era.printAndWait('二人は砂浜を歩いていた……');
      await era.printAndWait(
        `${gs.name} は炎天下でも清々しく、${you.name} だけが汗だくだった。`,
      );
      era.println();

      era.printButton('「今年の夏、例年より暑いな……！」', 1);
      await era.input();

      await gs.say_and_wait('暑いなら脱げばいいだろ？');
      era.println();

      await era.printAndWait(
        `${you.name} はその言葉に、目を銅鈴より大きく見開き、水着以外何も着ていない自分を指差した。${you.name} はさらに二本の指を突き出し、まず自分の両目を指し、それから ${gs.name} の目を指した。`,
      );
      era.println();

      await era.printAndWait('「はいはい、冗談だよ——」');
      await era.printAndWait('「氷食べに行こう、氷！ 体温下げよう！」');

      era.printButton(
        '「分かった、買ってくる。」（ウマコイン-5、好感+10、恋慕+2）',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${you.name} は ${gs.name} を砂浜に残し、早足で屋台へカキ氷を買いに行き、帰り際——`,
      );

      era.drawLine();
      await era.printAndWait(
        `通行人A「おや？ この${gs.sex_code !== 1 ? 'お嬢さん' : 'お兄ちゃん'}、お一人？ 」`,
      );
      await era.printAndWait(
        `通行人B「${gs.sex_code !== 1 ? '兄ちゃん' : '姉ちゃん'}と遊ばねえ？」`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name} は元の場所に立ったままだが、花のような美貌は必ず蜂や蝶を呼ぶ。何人もの不逞な連中が${gs.sex}を囲み、しつこく絡んでいた。こういう場でも、${gs.name} はなんとかはぐらかそうとしていて、いつもの威勢は微塵もない……`,
      );
      era.println();

      await gs.print_and_wait(
        `そうか……あいつは名の知れた${gs.uma_sex_title}だ。ここでは簡単に切れない……`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name} は表向きは自分勝手だが、実際は誰より「社会性」というものを分かっている。`,
      );
      era.println();

      era.printButton(
        `「おい、よその${gs.sex_code - 1 ? '女' : '男'}に何してんだ？」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        `${you.actual_name} が言い終わるや、その場の数人が驚いて${you.sex}を見た。`,
      );
      era.println();

      await gs.say_and_wait('ダーリン～来てくれた～');
      era.println();

      if (era.get('love:7') >= 75) {
        await gs.print_and_wait(
          `${gs.name} は好機と見るやチンピラたちを掻き分け、両手を振って ${you.actual_name} へ走り寄り、抱きしめ、熱い口づけを捧げた。${you.actual_name} を含む全員が度肝を抜かれたが、${you.actual_name} はすぐ応えた——双方の舌が口の中で絡み、求め合い、熱を分け合う……チンピラたちは口説きに失敗したと見るや、悪態をついて去った。`,
        );
      } else {
        await gs.print_and_wait(
          `${gs.name} は好機と見るやチンピラたちを掻き分け、両手を振って ${you.actual_name} へ走り寄り、抱きしめ、それから ${you.actual_name} の頬に軽いキスをした——そのキスは顔にリップの冷たさを残し、${you.actual_name} の跳ねる胸には激情の刻印を残した。`,
        );
      }

      era.drawLine();
      await era.printAndWait(
        `一件落着し、${you.name} とゴールドシップは日傘の下でカキ氷の涼しさを味わった。`,
      );
      era.println();

      await gs.say_and_wait('ふぅ、危なかった～ゴルシ、さらわれそうだったぜ～');
      await gs.say_and_wait(`ありがとな、${callname}❤️`);
      await gs.say_and_wait(
        `ところで……アタシは『${gs.sex_code - 1 ? '女' : '男'}』扱いなのか？`,
      );

      await era.printAndWait(
        `${gs.name} は悪賢い顔で ${you.name} の肩に寄りかかり、${you.name} がどう説明しても聞かない……この件は、${gs.sex}に十年は吹聴されそうだ……`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_3
  ws_95_3: (() => {
    const title = '目指せ社会人編';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} ticket ウイニングチケット
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, ticket, you) => {
      await era.printAndWait('年が明け、シニア級のレースが始まった。');
      await era.printAndWait(
        `まもなく天皇賞や宝塚記念といった大レースも迫ってくる。`,
      );
      era.println();

      await era.printAndWait(
        'ところが、ゴールドシップはトレーナー室に来ていない。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は怒りを押さえ、学園中を探し回った——`,
      );
      era.println();

      await gs.say_and_wait(
        `チケゾー、聞いてくれ。後輩の${gs.child_sex_title.substring(
          0,
          1,
        )}がなにより大事なんは、いわゆる社会人力なんだわ。`,
      );
      await ticket.say_and_wait('人材会社？');
      await ticket.say_and_wait(
        'いやいや、社会にうまく溶け込み、決まりどおり素早く動き、周りに迷惑をかけない『社会人・力』だ！',
      );
      await ticket.say_and_wait('『社会人点力』！ なんかすごそう……！！');
      era.println();

      era.printButton(
        '（てめえの『社会人点力』は完全に落第だゴールドシップ——！！）',
        1,
      );
      await era.input();

      await gs.say_and_wait(
        'なんで『社会人・力』を『社会人点力』って読むのか分からねえけど、じゃあ俺たちの『社会人点力』を試すか！',
      );
      await gs.say_and_wait('そこの覗き魔トレーナー、お前も来い！');
      era.println();

      await era.printAndWait(
        `言い終わるか終わらないかのうちに、ゴールドシップとウイニングチケットは勢いよく学園を飛び出し、${you.name} は息を切らして追いすがるしかなかった。`,
      );
      era.println();

      await era.printAndWait(
        'そのあと、ゴールドシップ二人組が電車内で静かにし『社会人点力』を誇示しようとする試みは、開始15秒で失敗に終わった。',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_eden
  ws_eden: (() => {
    const title = 'エデンへの道';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} taste 秋川やよい / ホクホク味
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, taste, you, callname) => {
      await era.printAndWait(
        `晩冬の風が骨まで凍みる。午の刻、真相が道を現す……${you.name} とゴールドシップは四枚の手がかりを携え、最終地点へ向かった。`,
      );
      era.println();
      await gs.say_and_wait(
        '運命の邂逅の前に、右手まで漆黒の影に呪われて痛む……',
      );
      era.println();

      era.printButton('「だが避けられねえ運命だ。進め！」', 1);
      await era.input();

      await gs.say_and_wait(
        '当たり前だ、神でもアタシをあの場所から止められねえ！',
      );
      await gs.say_and_wait(
        `準備はいいか、${callname}？ あそこが俺たちのゴールだ！`,
      );
      era.println();

      era.printButton('「ふん、心配するな！ 行くぞ！」', 1);
      await era.input();

      await era.printAndWait(`薄暗い。それがこの場所への第一印象だった。`);
      await era.printAndWait(`冷たい。それがこの場所からの第一撃だった。`);
      era.println();
      await era.printAndWait(
        `ほとんど五指を見通せない洞窟の中、一点の光だけが二人を導いて先へ進ませる。`,
      );
      era.println();
      await era.printAndWait(
        '傍らの奇妙な生き物たちは二人を気にもせず、のんびりと過ごしている。',
      );
      era.println();
      await gs.say_and_wait('ここが……紙に書いてあった場所だ。');
      await gs.say_and_wait('『スイ』、『ゾ』、『ク』。');
      era.println();

      era.printButton('「最後は『カン』だ！」', 1);
      await era.input();

      await gs.say_and_wait(
        '答えはもう見え見えだ……『スイゾクカン』、つまり水族館だ！',
      );
      await gs.say_and_wait('まさか、エデンがこんなところにあるとは……');
      era.println();
      await era.printAndWait(
        'そのとき、一つの影が傍らから現れた！ 小さな影は拍手しながら、高い笑い声を上げている。',
      );
      era.println();
      await taste.say_and_wait(
        '素晴らしい！ 『エデン計画』を突破してここまで！',
      );
      await taste.say_and_wait(
        '感動！ トレーナーの支えも、決して欠かせません！',
      );
      await gs.say_and_wait(
        'てめえ、トレセンのゴッドファーザー！？ なんでここに！',
      );
      await gs.say_and_wait(`${callname}！ まさか分かってたのか！？`);
      era.println();

      era.printButton(
        '「三条目の時点で見当はついてた。場所も、裏の黒幕も。」',
        1,
      );
      await era.input();

      await gs.say_and_wait('は！？ なら言えよ！');
      await taste.say_and_wait('面白い！ それではつまらない！');
      await taste.say_and_wait('説明！ いわゆる『エデン計画』とは……！');
      era.println();
      await era.printAndWait(
        `もともと「エデン計画」は、情熱的だがしばしば心が他所へ飛ぶ ${gs.name} が、トゥインクルシリーズに集中して挑めるよう立てられた計画だった。`,
      );
      era.println();
      await era.printAndWait(
        '「エデン計画」では、さまざまな手がかりと秘伝の書でゴールドシップの好奇心を煽り、計画の目標へ導く。',
      );
      era.println();
      await era.printAndWait(
        `${taste.name} にとって、「エデン」とはウマ娘の生涯で最も大切な、トゥインクルシリーズそのものだった。`,
      );
      era.println();
      await taste.say_and_wait('以上です！');
      await gs.say_and_wait(
        'なるほど！ じゃあ夢に出てきた声も、てめえらがやったのか？',
      );
      await taste.say_and_wait('え？');
      await gs.say_and_wait('え？');
      era.println();

      era.printButton('「え？」', 1);
      await era.input();

      await taste.say_and_wait(
        '驚愕！ 生徒に紙切れと秘伝の書を用意してもらった以外、隠された禁断技術は使っていないはず！',
      );
      await taste.say_and_wait('あ、これは言ってはいけない。忘れてください。');
      await gs.say_and_wait(
        'まさか、本当にゴルシの体内に第二人格が生まれた！？',
      );
      era.println();

      era.printButton('「あんなものは一つで十分だ！」', 1);
      await era.input();

      await era.printAndWait(
        `こうして、三年の旅は笑いとふざけと、わけの分からなさの中で一段落した。`,
      );

      era.drawLine();
      await era.printAndWait(
        `夜、${you.name} と ${gs.name} は海辺の砂に横たわり、塩辛い潮風が顔を撫でる感触を味わっていた。`,
      );
      era.println();

      era.printButton('「……ありがとう、ゴールドシップ。」', 1);
      await era.input();

      await gs.say_and_wait('ん？ 急だな……あ、もう寝てる？');
      await gs.say_and_wait('まったく、頼れるようで頼れねえやつ。');
      await gs.say_and_wait(
        'この三年、アタシに散々振り回されたくせに、辞表ひとつ出さなかった。',
      );
      await gs.say_and_wait(
        'ときどきは真面目で、ときどきはアタシと一緒に馬鹿をやる。やりすぎたんじゃねえかって思うこともあるのに、てめえはわざわざ大人の顔して止めたりしなかった。',
      );
      await gs.say_and_wait(
        '知ってるか？ 理事長は『エデン』がトゥインクルシリーズだって言った。',
      );
      await gs.say_and_wait(
        'でもアタシの『エデン』は、トレセンでもトゥインクルシリーズでもねえ……',
      );
      await gs.say_and_wait('……');
      await gs.say_and_wait('ちゅ♡');
      era.println();

      if (era.get('love:7') >= 50) {
        era.printButton('「目を開ける。」', 1);
      }
      era.printButton('「寝たフリをする。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('うおっ、起きてた！？');
        await gs.say_and_wait(
          'いや、最初から寝てなかったのか！ シャア、ハメたな！',
        );
      } else {
        await gs.say_and_wait('これからも、逃がさねえからな❤️');
        era.println();
        await era.printAndWait(
          `どうやら ${you.name} がゴルシに使われる生活は、まだまだ長く続きそうだ……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_eden_sex_end
  async ws_eden_sex_end(gs, you) {
    await gs.say_and_wait('はぁ……はぁ……騙しやがって……');
    await gs.say_and_wait('……てめぇ……くそ……');
    era.println();

    era.printButton('「ふふん、いじめられた気分はどうだ？」', 1);
    await era.input();

    await gs.say_and_wait('てめぇ……一つ、勘定が足りねえ……');
    await gs.say_and_wait('トレーナーは、ウマ娘には敵わねえ！');
    era.println();

    era.printButton('「なに！」', 1);
    await era.input();

    await gs.say_and_wait('これからも、逃がさねえからな♡');
    era.println();
    await era.printAndWait(
      `どうやら ${you.name} がゴルシに顔を騎乗される生活は、まだまだ長く続きそうだ……`,
    );
  },
};
