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

  // [번역 완료] sa_heroine_red
  sa_heroine_red: (() => {
    const title = '주역의 빨강!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(`어느 날 ${you.name}이(가) 안뜰을 걷고 있는데——`);
      await era.printAndWait(`승부복을 입은 ${gs.name}이(가) 있었다.`);
      era.println();

      await gs.say_and_wait(
        `아, ${you.actual_name} 아니냐. 오늘도 힘차게 아가미 호흡해라.`,
      );
      era.printButton('「……그보다 왜 승부복이야?」', 1);
      await era.input();
      await gs.say_and_wait('이건 붉은 주역의 힘을 얻기 위해서다.');
      await gs.say_and_wait(
        '그 표정은 뭐냐? 잘 생각해봐, 어릴 때 본 전대 히어로도 열혈 만화의 주인공도 다 빨강이잖아?',
      );
      await gs.say_and_wait('빨강을 입은 녀석이 주역이고 마지막에는 반드시 이긴다!');
      era.println();

      await era.printAndWait(
        `조금 엇나가긴 했지만 ${gs.name}이(가) 하는 말이 틀린 건 아니다…… 이 기회에 조금 가르쳐줄까?`,
      );
      era.printButton('「세상에는 여러 가지 빨강이 있어.」 (지능+20)', 1);
      era.printButton('「자기 신념을 관철해!」 (근성+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('섹시한 빨강도, 악역의 빨강도 있다고!?');
        await gs.say_and_wait('그렇구나, 빨강의 힘을 얕봤네……');
        await gs.say_and_wait(
          '나는 처음부터 주역도 악역도 소화할 수 있는 힘을 얻고 있었던 거야!',
        );
        await gs.say_and_wait('게다가…… 섹시함까지 붙어서 매력은 무적이다❤️');
        era.println();

        await era.printAndWait(
          `${gs.name}은(는) 요염한 시선을 남기고 흥분한 채 떠나갔다.`,
        );
      } else {
        await gs.say_and_wait(
          `그렇다! ${gs.sex_code !== 1 ? '나' : '나'}, 등장!`,
        );
        era.println();

        await era.printAndWait(`${gs.name}은(는) 기운차게 떠나갔다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_sudden_look_back
  sa_sudden_look_back: (() => {
    const title = '고루시의 갑작스런 옛날이야기 편!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `배가 고프다. 식당의 라멘이 평이 좋다. ${you.name}은(는) 트레센 식당으로 가 허기를 달래기로 했다.`,
      );
      era.println();

      await era.printAndWait(
        `도중에 ${you.name}은(는) 멀리 안뜰에 앉아 있는 골드 쉽을 알아봤다. 햇빛이 흔들리는 나뭇잎 사이로 말없는 미인의 몸 위에 내려앉아 반짝인다.`,
      );
      era.println();

      await gs.say_and_wait(`아, ${you.actual_name}인가.`);
      era.println();

      era.printButton('여기서 뭐 해? 밥은 안 먹어?', 1);
      await era.input();

      await gs.say_and_wait('뭐라고 해야 하나, 옛날 생각을 하고 있었어.');
      await gs.say_and_wait(
        '아주 오래전 눈보라 치던 밤, 어린 나는 집의 나사 공장에 보탬이 되려고 혼자 거리에서 금속 배트를 팔고 있었지……',
      );
      era.println();

      era.printButton('나사를 팔라고.', 1);
      await era.input();

      await gs.say_and_wait(
        '도중에 뼈까지 얼어붙는 바람에 당해서 거의 사람 꼴도 아니게 됐고 추워서 울어버렸어.',
      );
      await gs.say_and_wait(
        `그리고…… 내 운명을 바꾼 ${gs.uma_sex_title}이(가) 나타났지.`,
      );
      await gs.say_and_wait(
        `${gs.sex}은(는) 내 앞에 와서 따뜻한 라멘 국물 죽을 내밀었어.`,
      );
      era.println();

      era.printButton('지금 무슨 이야기를 하는지 스스로 한번 들어봐.', 1);
      await era.input();

      await gs.say_and_wait(
        `${
          gs.sex
        }은(는) 이렇게 말했어. 『나도${gs.uma_sex_title}이지만 달리는 건 서툴러서 지금은 라멘 가게를 하고 있어. 너도 인생의 목표는 자유롭게 골라도 돼』라고.`,
      );
      await gs.say_and_wait(
        `その${gs.uma_sex_title}의 말을 듣고 깨달았어. 나는 본가의 나사 공장을 물려받지 않아도 된다는 걸!`,
      );
      era.println();

      await era.printAndWait(
        '타인에게 휘둘리지 않고 자기 길을 걷는다…… 정말 골드 쉽답다.',
      );
      era.println();

      era.printButton(
        '「그때의 국물을 재현해볼까?」 (스태미나&지능+10)',
        1,
      );
      era.printButton('「그때의 장소를 보러 갈까?」 (스피드+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('국물 재현…… 내가 할 수 있을까?');
        await gs.say_and_wait(
          '……흥, 단련된 내가 못할 리가 없지. 마늘을 산더미처럼 넣었던 맛, 기억난다!',
        );
        await gs.say_and_wait(`따라와!`);
        era.println();

        await era.printAndWait(
          `${you.name}은(는) 골드 쉽에게 식당 주방으로 끌려가 많은 사람이 지켜보는 가운데 한쪽을 점거하고 라멘 국물 연구를 시작했다.`,
        );
        era.println();

        await gs.say_and_wait(
          '좋아! 완성이다! 마늘투성이 라멘! 같이 맛보자!',
        );
        era.println();

        era.printButton('「너무 매워————!! 마늘을 너무 넣어서 못 먹겠어!」', 1);
        await era.input();

        await era.printAndWait(
          `${you.name}와(과) 골드 쉽은 나중에 반성하며 그날 그렇게 진한 죽을 먹을 수 있었던 건 혹한이라는 극단적인 상황 때문이었다고 결론 내렸다.`,
        );
      } else {
        await gs.say_and_wait('그때의 장소…… 맞다! 제방 근처야!');
        await gs.say_and_wait(
          '아무것도 안 변했다면 그 라멘 포장마차는 아직 있을 거야!',
        );
        era.println();

        await era.printAndWait(
          `${you.name}은(는) 골드 쉽에게 제방으로 끌려가 수수께끼의 라멘 포장마차를 찾아봤지만 밤이 될 때까지 아무것도 찾지 못했다……`,
        );
      }
      era.println();

      await era.printAndWait(
        `그 뒤 어느 날 ${you.name}은(는) 밤까지 트레이너실에 남아 있었다. 골드 쉽의 트레이너로서 ${gs.sex}의 팬레터를 관리하는 것도 자신의 업무다. ${you.name}은(는) 기계적으로 한 통을 열었다가 의미심장한 문구를 보게 됐다……`,
      );
      era.println();

      await era.printAndWait(
        '???「아무래도 너는 정말 자유롭게 자기 길을 선택하고 있는 모양이네. 나도 계속 지켜보고 있어.」',
      );
      era.println();

      era.printButton('이 편지는 고루시에게 보여두자……', 1);
      await era.input();

      await era.printAndWait(
        `편지에는 그 문장만 있고 덧글도 초안도 없다. 하지만 ${you.name}은(는) 골드 쉽의 마늘투성이 겨울 이야기를 저도 모르게 떠올리고 있었다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sats_sho_win
  sats_sho_win: (() => {
    const title = '4월의 원수';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('세이야ー! 5월의 원수, 갚았다!');
      era.println();
      await era.printAndWait(
        `왜인지는 모르겠지만 ${gs.sex}은(는) 4월에 열리는데도 사츠키상이라고 부르는 사츠키상이 마음에 들지 않는 듯 이렇게 사츠키상에 싸움을 걸고 있었다.`,
      );
      era.println();
      await gs.say_and_wait('내년에도 사츠키상으로 돌아와 5월의 원수를 한 번 더 갚는다!');
      era.println();

      era.printButton(
        '「사츠키상은 클래식급이야, 평생 한 번밖에 못 달려!」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `하지만 ${you.name}의 목소리가 닿기도 전에 ${gs.name}은(는) 이미 멀리까지 달려가 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sr_shoubu
  sr_shoubu: (() => {
    const title = '진심으로 승부다!';
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
        `${you.name} と ${gs.name}은(는) 옥상에서 잠시 휴식을 즐기고 있었다…… 원래라면 아무 일 없이 지나갈 시간이었다——하지만 ${you.name} は ${festa.name}을(를) 보았다.`,
      );
      era.println();

      await festa.say_and_wait('……여어, 오늘도 기분 좋아 보이네.');
      await gs.say_and_wait([call_49, '……！！']);
      era.println();

      await era.printAndWait(
        `찰나! 피가 얼어붙었다! ${festa.name}에게서 풍겨 나오는 도박꾼의 기백에, 그 ${gs.name}조차 압도당하고 있어……!!`,
      );
      era.println();

      await festa.say_and_wait(
        '흐음…… 그런 얼굴 하지 마. 그러면 지금 당장 승부하고 싶어지잖아.',
      );
      await gs.say_and_wait('승부……!?');

      era.printButton('「페스타, 뭘 하려고……!」', 1);
      await era.input();

      await festa.say_and_wait('물론……');
      era.println();
      era.printButton(`${festa.name}「한정 가위바위보……!」`, 1);
      era.printButton(`${festa.name}「엠퍼러……!」`, 2);
      era.printButton(`${festa.name}「……야한 거❤️」`, 3, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      ret.push(await era.input());
      if (ret[0] === 3) {
        await era.printAndWait(
          `${you.name}와(과) 골드 쉽은 갑작스러운 제안에 그대로 굳어버렸다. 하지만 나카야마 페스타의 눈에 타오르는 욕망은 더는 기다릴 수 없다고 말하고 있었다……`,
        );
        era.println();
        await festa.say_and_wait(
          '야, 상상만 했는데도 아래가 젖었어…… 빨리 승부하자고❤️❤️❤️',
        );
      } else {
        if (ret[0] === 1) {
          await era.printAndWait(
            '한정 가위바위보……!! 카드로 가위바위보를 해서 상대의 목숨을 빼앗는 무시무시한 게임…… 한 발만 잘못 디디면 심연으로 떨어진다!!',
          );
        } else {
          await era.printAndWait(
            '엠퍼러……!! 카드의 대소로 생사를 가르는 무시무시한 게임…… 한 발만 잘못 디디면 심연으로 떨어진다!!',
          );
        }
        era.println();
        await era.printAndWait(
          `まずい……${
            gs.couple_title
          }의 성격이라면 끝날 즈음엔 점심이 다 식어버린다! 어떡하지, 말려야 하나……!?`,
        );
        era.printButton('「아니, 내가 대신 나선다!」(체력+100)', 1);
        era.printButton(
          '「힘내……!」(【비근간거리○】 습득, 스킬 Pt+60 또는 스킬 Pt+15)',
          2,
        );
        ret.push(await era.input());
        if (ret[1] === 1) {
          await festa.say_and_wait(
            '하? 제법 배짱 있잖아…… 재밌는데!',
          );
          await festa.say_and_wait('좋아! 오늘은 상대해 주지!');
          await gs.say_and_wait('어이 어이, 진짜냐!? 나만 빠진 거야!?');
          era.println();

          await era.printAndWait(
            `${you.name}은(는) 있는 힘을 다해 어떻게든 절체절명의 위기를 살아남았다……`,
          );
          await era.printAndWait('하지만 점심시간은 어느새 지나가 버렸다!');
        } else if (success) {
          await era.printAndWait(
            `${gs.name}은(는) 있는 힘을 다해 어떻게든 절체절명의 위기를 살아남았다……`,
          );
          await era.printAndWait('하지만 점심시간은 어느새 지나가 버렸다!');
        } else {
          await era.printAndWait(
            `${gs.name}은(는) 있는 힘을 다했지만, ${festa.name}에게는 이기지 못했다……`,
          );
          await era.printAndWait('しかも昼休みは、気づかぬうちに過ぎていた！');
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin_win_s
  takz_kin_win_s: (() => {
    const title = '키워드';
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
        `레이스 전에 ${you.name}에게 남긴 불안과는 달리, ${gs.name}은(는) 힘차고 훌륭한 레이스를 보여줬다!`,
      );
      era.println();
      await gs.say_and_wait(`하하하! ${jordan.name}! 이겼다, 제3부 완!`);
      era.println();
      await era.printAndWait(
        `레이스 후, ${gs.name}은(는) 의기양양하게, 적이자 친구이기도 한 갸루 ${jordan.name}에게 승리를 과시하고 있었다.`,
      );
      era.println();
      await jordan.say_and_wait('크윽——두고 봐!');
      await jordan.say_and_wait('그리고 이것도 기억해 둬!');
      era.println();
      await era.printAndWait(
        `${jordan.name}은(는) 종잇조각을 ${gs.name}의 손에 억지로 쥐여주고 씩씩거리며 떠나갔다.`,
      );
      era.println();

      era.printButton('「아, 또 에덴의 단서인가?」', 1);
      await era.input();

      await gs.say_and_wait('음…… 이번엔 『조』다.');
      await gs.say_and_wait('전혀 모르겠어——!');
      era.println();
      await era.printAndWait(
        `${flash.name}뿐만 아니라, ${jordan.name}까지 끼어 있다…… 뒤에서 조종하는 인물은 대체 누구지?`,
      );
      if (win_takz_kin_c) {
        await era.printAndWait(
          `돌아가려던 때, 옆에 있던 관객이 ${gs.name}에게 손을 흔들며 소리쳤다.`,
        );
        era.println();
        await era.printAndWait('관객A「골드 쉽, 너무 대단해!」');
        await era.printAndWait('관객B「연패 축하해!」');
        era.println();
        await era.printAndWait(`예의상 이쪽도 관객에게 화답했다.`);
        era.println();
        await gs.say_and_wait('고맙다!');
        era.println();

        era.printButton('「응원 고마워~」', 1);
        await era.input();

        await era.printAndWait(
          `${gs.name}은(는) 뒤돌아 ${you.name}에게 물었다.`,
        );
        era.println();
        await gs.say_and_wait(`${callname}, 연패가 뭐야?`);
        era.println();

        era.printButton('「……작년에도 이 레이스에서 이겼잖아.」', 1);
        await era.input();

        await gs.say_and_wait('진짜냐? 그럼 나, 엄청 대단한 거야?');
        era.println();

        era.printButton('「확실히 엄청 대단하지.」', 1);
        era.print('(파워+18, 다른 스테이터스+3)', { offset: 1, width: 23 });
        era.printButton('「역사에 이름을 남길 정도로 대단해!」', 2);
        era.print(
          [
            '(모든 스테이터스+3, 「게이트 난항」 습득, 스킬 Pt+45 또는 모든 스테이터스+8, 스킬 Pt+75)',
          ],
          { offset: 1, width: 23 },
        );
        const ret = await era.input();
        if (ret === 2 && !bad_result) {
          await gs.say_and_wait(
            '아하하~ 역시 고루시는 칭찬받으면 제대로 하는 애라니까~',
          );
          await gs.say_and_wait('앞으로도 제대로 오냐오냐해 줘~');
        }
        return [ret];
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] tenn_sho_win_s
  tenn_sho_win_s: (() => {
    const title = '키워드?';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, jordan, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}에게 남긴 불안과는 달리, ${gs.name}은(는) 힘차고 훌륭한 레이스를 보여줬다!`,
      );
      era.println();
      await gs.say_and_wait('때로는 웃고, 때로는 울고…… 우여곡절의 여행……');
      await gs.say_and_wait(
        '이 여행의 모든 것은 헛되지 않았어! 승리는 이미 내 손안에 있으니까!',
      );
      await jordan.say_and_wait('젠장, 또 너한테 졌냐……!! 크윽……!!');
      await jordan.say_and_wait(
        '오늘은 우마무스메도 발이 미끄러지는 날이 있지, 다음엔 반드시 되갚아주겠어!',
      );
      await gs.say_and_wait('좋아! 골인 지점에서 마카롱 먹으면서 기다릴게!');
      await jordan.say_and_wait('흥!');
      era.println();
      await era.printAndWait(
        `그렇게 ${jordan.name}은(는) 또 씩씩거리며 떠나갔다. 하지만……`,
      );
      era.println();
      await gs.say_and_wait('어? 뭔가 떨어뜨리고 갔는데.');
      era.println();
      await era.printAndWait('전과 같은 종잇조각이다. 또 새로운 단서인 모양이다.');
      era.println();

      era.printButton('「솔직하지 못한 녀석이네.」', 1);
      await era.input();

      await gs.say_and_wait('이번엔…… 『쿠』.');
      await gs.say_and_wait('『스이』, 『조』, 『쿠』……');
      await gs.say_and_wait('아직도 모르겠어——!');
      era.println();
      await era.printAndWait(
        '그분은 이번에도 꼼꼼히 새 단서를 남겼다. 학생을 이런 일에 동원할 수 있다니, 상당히 높은 지위의 인물인가?',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] tenn_spr_win
  tenn_spr_win: (() => {
    const title = '키워드';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}에게 남긴 불안과는 달리, ${gs.name}은(는) 힘차고 훌륭한 레이스를 보여줬다!`,
      );
      era.println();
      await gs.say_and_wait(
        '호호! 호호! 호호! 호호! 오늘도 잘 달렸는지 몰라?',
      );
      await gs.say_and_wait(
        `本${
          era.get('cflag:7:性别') !== 1 ? '아가씨' : '도련님'
        }의 아름다움은 맨손으로 깬 성게처럼 신선하답니다, 호호! 호호! 호호! 호호!`,
      );
      era.println();
      await era.printAndWait(
        `오늘의 ${gs.name}은(는) 작풍을 바꿔, 그야말로 애니·만화 속 아가씨 스테레오타입 총집편 같았다.`,
      );
      era.println();

      era.printButton('「그 비린내는 맡고 싶지 않은데.」', 1);
      await era.input();

      await flash.say_and_wait(`수고하셨습니다, ${gs.name} 씨.`);
      await flash.say_and_wait('그럼 약속한 첫 번째 단서입니다. 받으세요.');
      await gs.say_and_wait('바로 도망치지 마, 지난번이랑 완전히 다르잖아.');
      era.println();

      era.printButton('「질린 거 아냐? 뭐라고 쓰여 있어?」', 1);
      await era.input();

      await gs.say_and_wait('글자 하나뿐이야, 『스이』.');
      era.println();
      await era.printAndWait(
        `以前 ${
          flash.name
        }이(가) 건넨 편지에는 에덴으로 향하는 네 가지 단서를 모으라고 적혀 있었다. 이 『스이』가 첫 번째겠지.`,
      );
      era.println();
      await gs.say_and_wait(
        '좋아! 재밌는데! 그럼 네 가지 단서, 전부 모아버리자!',
      );
      era.println();
      await era.printAndWait(
        '골드 쉽의 레이스에 대한 열기가 더욱 뜨거워졌다!',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ts_add
  ts_add: (() => {
    const title = '추가 자율 훈련';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait([
        '오늘, ',
        gs.get_colored_name(),
        '와(과)의 훈련은 어떻게든 끝났다.',
      ]);
      era.println();

      await gs.say_and_wait('수고했어——! 바이바이, 바이바이!');
      era.println();

      await era.printAndWait([
        gs.get_colored_name(),
        '은(는) 기지개를 켜고 종종걸음으로 떠났다——그리고 돌아왔다.',
      ]);
      era.println();

      await gs.say_and_wait(
        '좋아, 추가 훈련이다! 지금 나 완전 하이한 기분이야!',
      );
      await gs.say_and_wait([
        callname,
        ', 추가 훈련도 모르냐? 노비타처럼 정보 약자네~',
      ]);
      await gs.say_and_wait(
        '추가 훈련은 추가 훈련의 줄임말이다——전 우주 천만 명의 고루시계에서 대유행 중인 거지!',
      );
      await gs.say_and_wait(
        '내 트레이너라면 좀 더 깊이 연구하라고.',
      );

      era.printButton('「그럼 유행에 뒤처지면 안 되겠네.」', 1);
      era.printButton('「아니, 요즘 유행은 CD(Cool Down)다!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait([
          '좋아! 기운 좋다!',
          you.actual_name,
          ' 대원, 따라와——!',
        ]);
        era.println();
        await era.printAndWait('석양 아래에서도 두 사람은 계속 달렸다.');
      } else {
        await gs.say_and_wait(
          'CD……? 그게 뭐야, 유행하는 거야? 트레이너계에서 유행하는 거야……?',
        );
        await gs.say_and_wait(
          'CD가 쿨다운이라는 뜻이냐…… 흥! 간단하잖아!',
        );
        await gs.say_and_wait(
          '빙수 먹으면서 CD 하면 돼! 줄여서 『Cool Down CD』!',
        );
        era.println();
        await era.printAndWait('그렇게 두 사람은 제대로 휴식을 취했다.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_1
  ws_47_1: (() => {
    const title = '새해의 포부';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `새로운 해, 새로운 시작. ${gs.name}의 활약이 한층 더 높은 곳까지 닿기를. ${you.name}은(는) 그렇게 생각했다.`,
      );
      await era.printAndWait(
        `정작 본인은 ${you.name}을(를) 향해 두 손을 맞대며 짝 소리를 냈다.`,
      );
      await gs.say_and_wait(
        '새해 고맙다——새로운 한 해…… 작년의 내가 올해의 내가 됐어.',
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕이며, 엄밀히 말하면 틀리지 않은 말에 동의했다.`,
      );
      await gs.say_and_wait('근데 말이야, 이거 엄청난 기적이라고 생각하지 않냐?');
      await gs.say_and_wait(
        '지구가 없었다면, 우주가 없었다면…… 나도 존재하지 않았을 거야.',
      );
      await era.printAndWait(
        `${gs.sex}은(는) 다시 ${you.name}을(를) 향해 합장했다. ${you.name}은(는) 세 번째만큼은 사양하고 싶다고 생각했다.`,
      );
      await gs.say_and_wait(
        '그러니까 올해는 여러 가지에 감사하는 해로 만들 거야.',
      );
      await gs.say_and_wait('지구에 감사, 우주에 감사, 눈앞의 너에게도 감사.');
      await gs.say_and_wait(
        '그럼 한 곡, 『근하신년~한겨울을 넘어 봄으로 가자~』',
      );
      await era.printAndWait(
        `${gs.name}은(는) 엔카풍의 수수께끼 같은 노래를 부르기 시작했고, ${gs.sex}의 느긋한 노랫소리가 트레이너실에 오래도록 남았다.`,
      );
      await era.printAndWait(
        `반주 없는 아카펠라였지만, ${you.name}에게는 노래에 담긴 진심이 전해졌다.`,
      );
      await era.printAndWait(`노래가 끝나자 ${you.name}은(는) 저도 모르게 박수를 쳤다.`);
      await gs.say_and_wait('땡큐, 땡큐, 산 정상의 친구여 안녕!');
      await era.printAndWait(
        '아이돌 가수는 기쁜 듯 아무도 없는 관객석을 향해 손을 흔들고 있다.',
      );
      era.println();

      era.printButton('「그러고 보니……」', 1);
      await era.input();

      await gs.say_and_wait('응? 왜 그래? 나한테도 뭔가 전할 말 있어?');
      await era.printAndWait(
        `${gs.name}은(는) 기대에 찬 표정을 짓고, 허리의 꼬리도 빗자루처럼 힘차게 좌우로 흔들고 있었다.`,
      );
      era.println();

      era.printButton('「올해 클래식급에서는 제대로 결과를 내자.」', 1);
      await era.input();

      await gs.say_and_wait(
        '뭐야? 클래식? 올해는 격렬한 기타 솔로를 보여주고 싶었는데, 역으로 바이올린도 괜찮겠네.',
      );
      era.println();

      era.print('「무슨 소리야, 그러니까……」');
      era.printButton('「장거리 적성을 단련하자!」(스태미나+40)', 1);
      era.printButton('「지금부터 생각해보자!」(지능+40)', 2);
      era.printButton('「돔 투어를 하자!」(스킬 Pt+50)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await gs.say_and_wait(
            '과연, 장시간 연주를 버틸 스태미나를 기르자는 거구나!',
          );
          await era.printAndWait(
            `아니다. ${you.name}은(는) 고개를 저었지만, 그녀는 이미 자기 세계에 빠져 있었다.`,
          );
          await gs.say_and_wait(
            '알겠어! 확실히 클래식이라면 긴 곡은 10시간도 넘으니까!',
          );
          await gs.say_and_wait(
            '좋아! 10시간이든 20시간이든, 우마무스메를 데려와라ー!',
          );
          await era.printAndWait(
            `아니다. ${you.name}이(가) 클래식급과 클래식 음악의 차이를 설명하기도 전에, ${gs.sex}은(는) 악기를 가지러 쏜살같이 달려갔다.`,
          );
          await era.printAndWait('이제 와서는 임기응변으로 맞춰주는 수밖에 없다.');
          break;
        case 2:
          await gs.say_and_wait(
            '과연, 밴드 멤버의 의견을 존중하자는 거구나! 그건 괜찮네.',
          );
          await gs.say_and_wait(
            '밴드 해체 원인으로 음악 노선 차이 같은 게 많으니까 말이지.',
          );
          await gs.say_and_wait('알겠어, 상대해주지……! 자, 주먹으로 이야기하자!');
          await era.printAndWait(
            '그 뒤 두 사람은 물리적으로 친해진 끝에 트레이너실에서 나란히 드러누워 잠들었다.',
          );
          await era.printAndWait('푹 잤다.');
          break;
        case 3:
          await gs.say_and_wait('어이 어이…… 돔 투어!?');
          await gs.say_and_wait(
            '네 꿈, 너무 원대하잖아!! 나…… 불타오르기 시작했어!!',
          );
          await gs.say_and_wait(
            '좋아!! 지금 당장 공연 시작이다!! 라이브를 할 거면 1위를 노려야지!!!',
          );
          await era.printAndWait('그 뒤 두 사람은 한동안 필사적으로 연습했다.');
          await era.printAndWait(
            '학원에서 연 작은 야외 라이브는 의외로 평판이 좋았다.',
          );
          await era.printAndWait('그래서, 레이스는?');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_29
  ws_47_29: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `여름 합숙은 ${gs.uma_sex_title}에게 배움과 놀이가 함께하는 시간이다. 여름방학이 되면 대부분의 트레센 학생이 바다로 향해 햇빛과 모래사장, 그리고 약간의 지옥 같은 훈련을 즐긴다.`,
      );
      await era.printAndWait(
        `당연히 이런 시기가 되면 ${you.name}의 독특한 애마 ${gs.name}은(는) 특히 신이 난다.`,
      );
      era.println();

      await gs.say_and_wait(
        '오오오오오! 여름 하면 바다지! 같이 바다로 출발이다!!!',
      );
      await gs.say_and_wait('Zzzzzzz……');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 버스에서 죽은 돼지처럼 잠든 ${gs.name}을(를) 보며, 이 녀석의 의욕은 ${gs.sex} 본인처럼 생겼다 싶으면 금세 사라진다고 생각했다.`,
      );
      era.println();

      era.printButton('「일어나!!! 해가 엉덩이를 굽고 있다고!!!」', 1);
      await era.input();

      await gs.say_and_wait(
        '우와~ 깜짝 놀랐잖아! 방금 버스에서 바다 합숙을 기다리는 꿈을 꾸고 있었는데! 어떻게 책임질 거야!',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 못마땅한 표정으로 엄지손가락을 창밖으로 가리켜 이미 도착했다는 걸 알려줬다. 알아챈 ${gs.name}은(는) 금세 기분이 좋아져 폴짝 뛰어 버스에서 내렸다.`,
      );
      era.println();

      await era.printAndWait(
        `며칠 동안은 나쁘지 않은 휴가였고 훈련도 충실했다. 하지만 오늘은 이미 훈련 시간이 됐는데도 ${gs.name}은(는) 모습을 보이지 않았다. ${gs.sex}을(를) 찾으러 해변으로 왔다.`,
      );
      era.println();

      await era.printAndWait('그리고——');
      era.println();

      await gs.say_and_wait(
        '자, 지나가는 사람들 놓치지 마세요ー 맛있는 야키소바 대할인입니다ー!!',
      );
      await gs.say_and_wait(
        '달고 시고 쓰고 매운맛까지~ 인생과 똑같아요ー!!',
      );
      era.println();

      era.printButton('「왜 여기서 야키소바를 팔고 있는 거야……!!」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) 화가 나서 포장마차 앞으로 가, 농땡이를 피우는 이 녀석을 추궁하려 했다.`,
      );
      era.println();

      await gs.say_and_wait('아, 트레이너잖아~ 아주 맵게 하면 되지?');
      era.println();

      era.printButton('「훈련하러 오라고 부르러 왔어.」', 1);
      await era.input();

      await gs.say_and_wait(
        '아니~ 그냥 가게 아저씨 대신 봐주고 있는 것뿐이야~ 허리가 아프다던데, 한여름 햇볕 아래 하루 종일 굽게 두는 건 너무하잖아?',
      );
      await gs.say_and_wait(
        '그러니까 오늘은 이 면을 전부 팔아치운다! 안 그러면 아저씨 허리가 안 나아!',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) ${gs.sex}의 한번 정하면 말을 듣지 않는 성격상 설득은 불가능하다고 깨닫고, 어쩔 수 없이 새콤달콤한 야키소바 한 접시를 주문했다. 그리고 옆 비치체어에서 먹으며 ${gs.name}을(를) 감시해 또 실종되지 않게 했다.`,
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
