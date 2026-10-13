// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_gradient_color = require('#/utils/gradient-color');
const buff_colors = require('#/data/color-const')["buff_colors"];
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32"),

  ...require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/edu-32-plan-a"),
  ...require("#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/edu-32-plan-b"),
  
  // [번역 완료] be_betray
  be_betray: (() => {
    const title = '그렇게 아그네스 타키온을 다시는 만나지 못했다';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '그날 영문도 모른 채 ',
        tachyon.get_colored_name(),
        '의 연구실에서 쓰러진 뒤.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 트레이너로서 담당할 ',
        tachyon.uma_sex_title,
        '을(를) 찾아야 마땅했다.',
      ]);
      await era.printAndWait([
        '하지만 그 누구도 ',
        you.get_colored_name(),
        '의 마음속 갈망을 채워 주지 못했다.',
      ]);
      await era.printAndWait([
        '가슴속 목소리가 말한다.',
        tachyon.sex,
        '이(가) 아니야.',
        tachyon.couple_title,
        '이(가) 아니야.',
      ]);
      await era.printAndWait([
        '얼마 지나지 않아 ',
        tachyon.uma_sex_title,
        '을(를) 한 명도 모집하지 못한 ',
        you.get_colored_name(),
        '은(는) 트레센 학원에서 해고되었다.',
      ]);
      await era.printAndWait(['하지만 그래도 괜찮다.']);
      await era.printAndWait([you.get_colored_name(), '은(는) 그렇게 낙관했다.']);
      await era.printAndWait([
        '맞지 않는 ',
        tachyon.uma_sex_title,
        '와(과) 억지로 팀을 짜느니 그만두는 편이 낫다.',
      ]);

      era.drawLine();
      await era.printAndWait([
        '학원을 떠난 ',
        you.get_colored_name(),
        '은(는) 트레센에서 멀지 않은 곳에 작은 식당을 열었다.',
      ]);
      await era.printAndWait(['어째서인지 요리 솜씨는 나쁘지 않았다.']);
      await era.printAndWait([
        '기억을 잃기 전에 무슨 일이 있었는지는 모른다. 하지만 누군가 소중한 사람에게 음식을 만들어 주고 싶었던 모양이다. 그렇지 않고서야 이렇게까지 잘할 리 없었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이상하리만치 익숙한 솜씨로 식당의 이름을 알렸다. 트레센 주변 사람들은 물론 트레센 학원의 ',
        tachyon.uma_sex_title,
        '까지도 ',
        you.get_colored_name(),
        '의 식당에 드나들었다.',
      ]);
      await era.printAndWait([
        '기억을 잃기 전에 무슨 일이 있었는지는 모른다. 하지만 누군가 소중한 사람에게 음식을 만들어 주고 싶었던 모양이다. 그렇지 않고서야 이렇게까지 잘할 리 없었다.',
      ]);
      await era.printAndWait([
        '그러나 정작 그 사람이 곁에 없어서일까. 주방에 설 때마다 열정은 솟아오르지 않았다.',
      ]);
      era.println();

      await era.printAndWait(['그렇게 하루하루가 흘러갔다.']);
      await era.printAndWait([
        '좋다고까지는 할 수 없지만 나쁘지도 않다. 크게 불만은 없다.',
      ]);
      await era.printAndWait(['살아간다. 그뿐이다.']);
      era.println();

      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '！ ',
        tachyon.get_colored_name(),
        '의 복귀 첫 경기! 아리마 기념에서 눈부신 승리를 거뒀습니다!',
      ]);

      era.drawLine();
      await era.printAndWait(['突然。']);
      await era.printAndWait([
        '그 ',
        tachyon.uma_sex_title,
        '은(는) 번개처럼 하늘을 갈랐다.',
      ]);
      await era.printAndWait([
        '번개처럼 ',
        you.get_colored_name(),
        '의 가슴을 세차게 때렸다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '. 그, 영문을 알 수 없었던 ',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '그날 연구실에서 헤어진 뒤로 한 번도 만나지 못한 ',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '식당 텔레비전에서 연말의 화제인 아리마 기념을 틀어 놓았을 뿐이었다.',
      ]);
      await era.printAndWait([
        '하지만 그 선수가 달리기 시작한 순간부터 어째서인지 눈을 뗄 수 없었다.',
      ]);
      await era.printAndWait([
        '결승선을 통과한 순간 ',
        you.get_colored_name(),
        '은(는) 깨달았다. 어느새 눈물이 흐르고 있었다.',
      ]);
      era.println();

      await era.printAndWait([
        '경기 후 인터뷰에서 ',
        tachyon.get_colored_name(),
        '은(는) 말했다. 복귀한 이유는 누군가를 찾기 위해서라고.',
        tachyon.sex,
        '에게 무엇과도 바꿀 수 없는, 없어서는 안 될 사람을.',
      ]);
      await era.printAndWait(['누구일까. 사람들은 수군거렸다.']);
      await era.printAndWait([
        '누구일까. 어떤 목소리가 ',
        you.get_colored_name(),
        '의 머릿속에서 물었다.',
      ]);
      await era.printAndWait(['두통이다. 두통이다. 머리가 깨질 것 같다.']);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 달리기 시작했을 때의 눈물은 감동 때문이었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 인터뷰에서 그 말을 했을 때의 눈물은 그저 고통 때문이었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 찾고 있는 사람은 누구인가.',
      ]);
      await era.printAndWait(['자신과 무슨 관계가 있는가.']);
      era.println();

      await era.printAndWait(['하지만 초광속의 입자는 누구를 위해서도 멈추지 않는다.']);
      await era.printAndWait(['大阪杯。']);
      await era.printAndWait(['天皇賞（春）。']);
      await era.printAndWait(['安田記念。']);
      await era.printAndWait(['宝塚記念。']);
      await era.printAndWait(['天皇賞（秋）。']);
      await era.printAndWait(['재팬 컵.']);
      await era.printAndWait([
        '어느 레이스에서나 ',
        tachyon.get_colored_name(),
        '은(는) 압도적인 격차를 벌리며 보는 이들을 매혹하는 달리기로 승리를 거뒀다.',
      ]);
      await era.printAndWait([
        '레이스가 끝날 때마다 ',
        tachyon.sex,
        '은(는) 인터뷰에서 이야기했다.',
      ]);
      await era.printAndWait(['어떤 날은 『그 사람』과 함께 보낸 일상을.']);
      await era.printAndWait(['어떤 날은 『그 사람』에게 전하는 참회를.']);
      await era.printAndWait(['어떤 날은 『그 사람』을 향한 원망을.']);
      await era.printAndWait([
        '어떤 날은 이야기하다가 카메라 앞에서 목이 메어 말을 잇지 못했다.',
      ]);
      era.println();

      await era.printAndWait([
        '어느 레이스에서나 ',
        you.get_colored_name(),
        '은(는) 누구보다 열렬히 지켜보았다.',
      ]);
      await era.printAndWait([
        '레이스가 끝난 뒤마다 ',
        tachyon.sex,
        '의 인터뷰를 들을 때마다 ',
        you.get_colored_name(),
        '의 두통은 ',
        you.get_colored_name(),
        '에게 다음에는 절대로 보지 않겠다, 최소한 인터뷰만큼은 넘기겠다고 다짐하게 만들었다.',
      ]);
      await era.printAndWait(['하지만 단 한 번도 지키지 못했다.']);
      await era.printAndWait(['부풀어 오르는 듯한 통증.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
      });
      await era.printAndWait(['파도처럼 밀려오는 통증.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
      });
      await era.printAndWait(['둔한 통증.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
      });
      await era.printAndWait(['간헐적인 통증.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
      });
      await era.printAndWait(['찌르는 듯한 통증.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
      });
      await era.printAndWait(['격렬한 통증.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
      });
      await era.printAndWait([
        '통증이 찾아올 때마다 ',
        you.get_colored_name(),
        '은(는) 느꼈다.',
      ]);
      await era.printAndWait(['가깝다. 이제 곧이다.']);
      await era.printAndWait([
        '고통이 기억을 가린 베일을 한 장씩 벗겨 내는 듯했다.',
      ]);

      era.drawLine();
      await era.printAndWait(['마침내 마지막 아리마 기념.']);
      era.println();

      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '！ 有馬記念連覇、年間無敗！ ',
        tachyon.get_colored_name(),
        '! 마침내 최후의 승리를 거뒀습니다!',
      ]);
      era.println();

      await era.printAndWait(['아아.']);
      await era.printAndWait(['그 달리기를 본 순간.']);
      await era.printAndWait(['온몸의 힘이 빠져나가는 듯했다.']);
      await era.printAndWait(['이거다. 줄곧 찾아 헤매던 것.']);
      await era.printAndWait([
        '이거다. 줄곧 『',
        tachyon.sex,
        '』와(과) 함께 추구했던 것.',
      ]);
      await era.printAndWait(['한계…… 아니, 한계를 뛰어넘은 완벽한 달리기.']);
      era.println();

      await era.printAndWait([
        '레이스가 끝나자 텔레비전에서는 경기 전 인터뷰가 재방송되기 시작했다.',
      ]);
      era.println();

      await era.printAndWait(
        '(기자 A 「아리마 기념이 끝나면 은퇴를 발표하실 건가요?」)',
      );
      await tachyon.used_to_say_and_wait([
        '그래요…… 이렇게 해도 ',
        you.sex,
        '을(를) 찾지 못한다면…… 방법을 바꿔야겠지요.',
      ]);
      await tachyon.used_to_say_and_wait([
        '이제 저는 은퇴하고 경주장을 떠날 겁니다. 그 뒤에는…… 후후, 모르겠군요…… 1년? 10년? 아니면…… 평생? 아무래도 상관없어요.',
        you.sex,
        '을(를) 찾을 때까지 포기하지 않을 테니까요.',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), '이(가) 은퇴한다고?']);
      await era.printAndWait(['경주장을 떠나 『그 사람』을 찾겠다고……… 『누구』를?']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 걸음을 옮기기 시작했다. 당장 트레센 학원으로 가서 ',
        tachyon.sex,
        '이(가) 떠나기 전에 찾아 만나고, 그리고……',
      ]);
      await era.printAndWait(['어느새 머리가 또 아파 왔다.']);
      era.println();

      await era.printAndWait('??? 「아파……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
      });
      await era.printAndWait('??? 「무서워……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
      });
      await era.printAndWait('??? 「도와줘……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
      });
      await era.printAndWait('??? 「도와줘, 모르모트 군!」', {
        color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
      });
      await era.printAndWait('??? 「모르모트 군, 어디 있어?」', {
        color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
      });
      await era.printAndWait('??? 「모르모트 군? 날 버리지 마……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
      });
      await era.printAndWait('??? 「곁으로 돌아와 줘……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
      });
      await era.printAndWait('??? 「부탁이야, 돌아와 줘……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
      });
      await era.printAndWait('??? 「네가 없으면 안 돼!」', {
        color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
      });
      era.println();

      await era.printAndWait([
        { color: tachyon.color, content: '頭痛' },
        '의 정체가 드러났다.',
      ]);
      await era.printAndWait(['수많은 목소리가 귓가에서 울부짖으며 끊임없이 흐느꼈다.']);
      await era.printAndWait(['누구지.']);
      await era.printAndWait(['누가 울고 있는 거지.']);
      await era.printAndWait(['누가 울부짖고 있는 거지.']);
      await era.printAndWait(['『모르모트 군』………… 누구지.']);
      await era.printAndWait(['걸음이 멈췄다.']);
      await era.printAndWait(['두 다리가 떨리고 온몸이 차가워졌다.']);
      await era.printAndWait(['두려워하고 있다…… 무엇을?']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와(과) 마주하는 것을.',
      ]);
      await era.printAndWait(['진실을 알게 되는 것을.']);
      await era.printAndWait(['자신이 어떤 사람이었는지 알게 되는 것을.']);
      era.println();

      await era.printAndWait(['—————————']);
      await era.printAndWait(['——————']);
      await era.printAndWait(['—————']);
      era.println();

      await era.printAndWait([
        '結局、',
        you.get_colored_name(),
        '은(는) 한 발짝도 움직이지 못했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 다시는 ',
        tachyon.get_colored_name(),
        '을(를) 만나지 못했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 머리도 더는 아프지 않았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] be_crazy_fan
  be_crazy_fan: (() => {
    const title = '멈춰 버린 시계';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     */
    const f = async (tachyon, you, t_call_c, plan_b) => {
      await tachyon.say_and_wait('눈을 떠봐.');
      await tachyon.say_and_wait('정신 차려보게.');
      await tachyon.say_and_wait('제발…… 눈을 떠줘.');
      era.drawLine();
      await era.printAndWait('나는 누구지.');
      era.println();
      await tachyon.say_and_wait(
        '자네는…… 모르모트 군, 나의 전속 트레이너라네.',
      );
      era.println();
      await era.printAndWait('……너는 누구야?');
      era.println();
      await tachyon.say_and_wait([
        '……나는 ',
        tachyon.get_colored_name(),
        '일세. 자네를 담당하는 ',
        tachyon.uma_sex_title,
        '일세.',
      ]);
      await era.printAndWait('…………');
      era.println();
      await tachyon.say_and_wait('……자네, 기억하고 있나?');
      await era.printAndWait('…………');
      await tachyon.say_and_wait([
        '아…… 아무 말도 안 하면 곤란하네. 나를 기억하고 있지? 그렇지? 여기는 트레센 학원 안에 있는 우리 실험실이고, 저쪽은 ',
        t_call_c,
        '의 구역이고……',
      ]);
      era.println();
      if (plan_b) {
        await era.printAndWait('……미안.');
        era.println();
        await era.printAndWait([you.get_colored_name(), '은(는) 고개를 저었다.']);
        await era.printAndWait([
          '눈앞의 ',
          tachyon.teen_sex_title,
          '…… 어째서인지 모르겠지만, 어딘가 그리운 느낌이 든다.',
        ]);
        await era.printAndWait('하지만 분명히, 조금도 알지 못하는 사람이다.');
        era.println();
        await tachyon.say_and_wait(
          '……괜찮네. 기억 상실도 하나의…… 하나의 가능성일 뿐이야…… 그저 기억을 다시 되찾으면 될 일이지.',
        );
        era.println();
        await era.printAndWait('……가능성.');
        await era.printAndWait('그 단어가 진흙탕 같은 의식 속에서 어떤 영감을 깨우는 듯했다.');
        await era.printAndWait('그러나……');
        await era.printAndWait('영감은 언제나 찰나에 불과했다.');
        era.println();
        await era.printAndWait('모르겠다.');
        await era.printAndWait('생각하면 할수록 머릿속의 빈 공간이 늘어만 간다.');
        await era.printAndWait('하지만, 역시 필사적으로 기억해내야만 한다.');
        await era.printAndWait('방금 스쳐 지나간 영감을 다시 붙잡을 수 있기를 기도한다.');
        await era.printAndWait('이유는 단 하나.');
        await era.printAndWait([
          '비록 눈앞의 ',
          tachyon.get_colored_name(),
          '이라는 이름의 ',
          tachyon.teen_sex_title,
          '를 알지는 못하지만.',
        ]);
        await era.printAndWait([
          '잠재의식이 외치고 있다. ',
          tachyon.sex,
          '를 상처 입혀서는 안 된다고, ',
          tachyon.sex,
          '를 슬프게 해서는 안 된다고.',
        ]);
        era.println();
        await era.printAndWait([
          '그렇기에, 주변을 가볍게 둘러보며 기억을 더듬어보자는 ',
          tachyon.sex,
          '의 제안에.',
        ]);
        await era.printAndWait([you.get_colored_name(), '은(는) 거절하지 않았다.']);
        await era.printAndWait([
          tachyon.sex,
          '를 따라 학원(본인의 말에 따르면 그렇다고 한다) 안을 걸었다.',
          tachyon.sex,
          '를 따라, 학원(그녀의 말에 따르면 그렇다고 한다) 안을 걸었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '모르모트 군…… 보게나, 이쪽은 훈련장이라네. 우리가 처음 만난 곳이지.',
        );
        era.println();
        await era.printAndWait('만남……?');
        era.println();
        await tachyon.say_and_wait(
          '그렇다네. 비록 당시의 나는 자네를 제대로 보지 못했지만…… 자네가 내게 말을 걸어주었지.',
        );
        era.println();
        await era.printAndWait('그랬구나……');
        await era.printAndWait(
          '그렇다면, 당시의 나는 분명 타키온의 달리기에 매료되었던 것이겠네.',
        );
        era.println();
        await tachyon.say_and_wait('!…… 자네, 기억이 난 건가!');
        era.println();
        await era.printAndWait('……미안.');
        await era.printAndWait(
          '그저, 어떤 느낌이…… 타키온은, 달리기 시작하면 분명 무척 아름다울 것이라는 생각이 들어서.',
        );
        era.println();
        await tachyon.say_and_wait(
          '………그래, 자네는 몇 번이나 그렇게 말했었지…… 나로서는 잘 이해가 안 가지만 말이야. 그저 평범한 달리기일 뿐인데, 대체 무엇이 그렇게 매력적이라는 건지.',
        );
        era.println();
        await era.printAndWait('……아니.');
        await era.printAndWait(
          '다른 사람들은 어떨지 몰라도, 타키온의 달리기만큼은…… 내게 확신을 줘. 분명 나를 매료시킬 거라고.',
        );
        era.println();
        await tachyon.say_and_wait(
          '……그렇다면, 내가 한 바퀴 뛰는 것을 봐주겠나?',
        );
        era.println();
        await era.printAndWait('!그래도 돼?');
        await era.printAndWait('하지만…… 타키온의 다리는……');
        era.println();
        await tachyon.say_and_wait('……자네, 그걸 기억하고 있는 건가?');
        era.println();
        await era.printAndWait('……');
        era.println();
        await era.printAndWait('침묵이 가장 확실한 대답이 되었다.');
        await era.printAndWait([
          '만약 이 상황에서 ',
          tachyon.sex,
          '에게 거짓말을 해서, 기억이 났다고 말한다면.',
        ]);
        await era.printAndWait([tachyon.sex, '는 분명 아주 기뻐할 것이다.']);
        await era.printAndWait([tachyon.sex, '를 속이는 것이 정말로 옳은 일일까?']);
        era.println();
        await era.printAndWait('어째서인지 가슴 속의 목소리가 다시금 외치기 시작한다.');
        await era.printAndWait([tachyon.sex, '를 「더 이상」 속이지 마라.']);
        await era.printAndWait('「더 이상」 자신을 속이지 마라.');
        await era.printAndWait('……어째서「더 이상」인 걸까.');
        era.println();
        await tachyon.say_and_wait('……괜찮네. 한 바퀴 뛰고 오겠네.');
        await tachyon.say_and_wait(
          '그러면, 혹시 무언가 떠오를지도 모르니까 말이야.',
        );
        era.println();
        await era.printAndWait([tachyon.sex, '는 운동장을 한 바퀴 달렸다.']);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 생각했던 대로, 그것은 몹시도 매혹적인 달리기였다.',
        ]);
        await era.printAndWait('하지만…… 그뿐이었다.');
        era.println();
        await era.printAndWait([tachyon.sex, '는 한 바퀴를 다 돌고 멈추려 했다.']);
        await era.printAndWait([
          '그러나 여전히 멍한 눈을 하고 있는 ',
          you.get_colored_name(),
          '을(를) 보자, ',
          tachyon.sex,
          '는 웬일인지 다시 달리기 시작했다.',
        ]);
        await era.printAndWait([
          '넋을 잃고 보고 있는 ',
          you.get_colored_name(),
          ' 앞에서, ',
          tachyon.sex,
          '는 날이 저물 때까지 몇 바퀴고 계속해서 달렸다.',
        ]);
        era.println();
        await era.printAndWait('……미안.');
        era.println();
        await tachyon.say_and_wait(
          '아니, 아무것도 아니네…… 그저, 갑자기 달리고 싶어졌을 뿐이라네.',
        );
        era.println();
        await era.printAndWait('거짓말이다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그것을 느꼈지만, 굳이 지적하지 않았다.',
        ]);
        await era.printAndWait('지적할 수 있을 리가 없다.');
        await era.printAndWait([
          '그 ',
          tachyon.teen_sex_title,
          '의, 헛수고에 불과한 애처로움을 차마 입에 담을 수는 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……내일, 다시 같이 찾아보세. 반드시, 언젠가는 되찾을 수 있을 걸세.',
        );
        era.println();
        await era.printAndWait('그렇기에, 비록 이것이 헛된 일임을 알면서도.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 끝내 거절의 말을 내뱉지 못했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '모르모트 군…… 보게나, 평소에 우린 여기서 실험을 했다네. 매번 내가 약을 만들면 자네가 마셔주었지.',
        );
        era.println();
        await era.printAndWait('에에…… 그거, 실험체 아니야?');
        era.println();
        await tachyon.say_and_wait(
          '당연하지. 자네는 모르모트 군이 무슨 뜻이라고 생각했나?',
        );
        era.println();
        await era.printAndWait('……정말로 실험 동물을 뜻하는 거였구나.');
        era.println();
        await tachyon.say_and_wait(
          '……그러니 조만간 연구할 걸세. 기억을 되찾아주는 약을…… 자네도 도와줄 거지?',
        );
        era.println();
        await era.printAndWait('……물론이지.');
        era.drawLine();
        await tachyon.say_and_wait([
          '모르모트 군…… 저쪽은 ',
          t_call_c,
          '의 구역이니까 조심해야 하네. 함부로 저기 물건을 건드렸다간 큰일 날 수도 있어……',
        ]);
        era.println();
        await era.printAndWait('에……?');
        await era.printAndWait('……아무 일도 일어나지 않는데.');
        era.println();
        await tachyon.say_and_wait(
          '응? 그럴 리가…… 내가 해보지…… 아악! 연구 자료가 불타고 있네!',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          '모르모트 군, 홍차 타는 법 기억하나?',
        );
        era.println();
        await era.printAndWait('당연하지. 홍차 정도는 탈 줄 알아.');
        era.println();
        await tachyon.say_and_wait('으윽…… 이건 완전히 낙제점이군.');
        era.println();
        await era.printAndWait('에에?');
        era.println();
        await tachyon.say_and_wait('홍차와 설탕의 비율은 최소한 1:1이어야 한단 말일세!');
        era.println();
        await era.printAndWait('그건 너무 달잖아!?');
        era.drawLine();
        await era.printAndWait(
          '타키온…… 기억을 잃기 전의 나와 너는 어떤 관계였어?',
        );
        era.println();
        await tachyon.say_and_wait('……왜 그러나? 갑자기 뭔가를 떠올린 건가?');
        await era.printAndWait([
          '……아뇨, 그냥 네가 말해주는 느낌으로 봐서는, 단순히 트레이너와 ',
          tachyon.uma_sex_title,
          '의 관계…… 혹은 실험자와 실험 동물의 관계만은 아니었던 것 같아서.',
        ]);
        era.println();
        await tachyon.say_and_wait('…………사실 우리, 연인이라네.');
        await era.printAndWait('정말?');
        era.println();
        await tachyon.say_and_wait([
          '……음, 아주 깨가 쏟아지는 연인이었지. 매일 붙어 다니느라 ',
          t_call_c,
          '도, ',
          tachyon.sex,
          '도 혀를 내두를 정도였지.',
        ]);
        await era.printAndWait('…………미안.');
        era.println();
        await tachyon.say_and_wait('사과할 필요 없지 않나?');
        await era.printAndWait('만약…… 내가 기억해낼 수만 있다면.');
        era.println();
        await tachyon.say_and_wait(
          '……무슨 소릴 하는 건가. 기억해낼 수 있다면이 아니라, 아직 기억해내지 못한 것뿐이라네…… 반드시, 반드시 기억날 걸세.',
        );
        await era.printAndWait('……그렇겠네. 고마워, 타키온.');
        era.drawLine();
        await tachyon.say_and_wait(
          '보게나, 여기는 상점가라네…… 우리의 평소 실험 도구들은 다 여기서 샀었지.',
        );
        era.println();
        await era.printAndWait('……저기, 타키온.');
        era.println();
        await tachyon.say_and_wait('응? 왜 그러나?');
        era.println();
        await era.printAndWait(
          '……어째서 주변 사람들이 우리를 귀신이라도 본 듯한 눈빛으로 보는 거야?',
        );
        era.println();
        await tachyon.say_and_wait('그랬나? 아마 지난달 내 실험 때문일 걸세.');
        era.println();
        await era.printAndWait('……지난달?');
        era.println();
        await tachyon.say_and_wait(
          '음, 그때 실험 중에 사고가 나서 거리 전체를 핏빛으로 물들여버렸거든.',
        );
        era.println();
        await era.printAndWait('…………설마, 타키온은 사실 굉장히 위험한 사람인거야?');
        era.println();
        await tachyon.say_and_wait([
          '무례하군. 나는 청렴결백한 청춘의 ',
          tachyon.teen_sex_title,
          '일세.',
        ]);
        await tachyon.say_and_wait(
          '그저 모르모트 군이 곁에 없으면 폭주하는 지구 최종병기가 될 뿐이지.',
        );
        era.println();
        await era.printAndWait('무서워!');
        era.println();
        await tachyon.say_and_wait(
          '……그러니, 절대로 다시는 나를 떠나지 말아주게. 알겠나?',
        );
        era.println();
        await era.printAndWait('…………응.');
        era.drawLine();
        await tachyon.say_and_wait(
          '……모르모트 군, 자네, 내가 원망스럽지 않나?',
        );
        era.println();
        await era.printAndWait('왜?');
        era.println();
        await tachyon.say_and_wait(
          '내가 자네의 인생을 여기에 속박해버렸네. 만약……',
        );
        era.println();
        await era.printAndWait('……어째서?');
        await era.printAndWait('오히려 네가 나를 원망해야 하는 거 아냐?');
        await era.printAndWait(
          '기억도 없는 내가…… 정말로 네 사랑을 받을 자격이 있는 걸까?',
        );
        era.println();
        await tachyon.say_and_wait('! 아니…… 그렇지 않아!');
        await tachyon.say_and_wait(
          '분명 기억해낼 수 있을 거야……! 그러니까, 그러니까…… 제발 그런 말은 하지 말아주게……',
        );
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 모르모트 군의 발자취가, 그들이 함께했던 모든 장소에 새겨졌다.',
        ]);
        await era.printAndWait('훈련장, 경기장, 강변, 신사.');
        await era.printAndWait('마지막까지, 그 무엇도 모르모트 군의 기억을 다시 일깨우지는 못했다.');
        await era.printAndWait('하지만 그들은 그 일을 조금도 슬퍼하지 않았다.');
        await era.printAndWait(
          '왜냐하면 그 장소들에서, 다시금 가장 아름다운 추억을 남겼기 때문이다.',
        );
        era.println();
        await tachyon.say_and_wait('……이런 이야기의 결말, 자네는 마음에 드나?');
        era.println();
        await era.printAndWait('……응, 아주 좋네.');
        era.println();
        await tachyon.say_and_wait('……모르모트 군.');
        era.println();
        await era.printAndWait('됐어, 이제, 이것으로 충분해.');
        await era.printAndWait('나는…… 이제 곧 죽으니까.');
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('타키온…… 고마워.');
        await era.printAndWait('비록 몹시도 짧은 인생이었지만.');
        await era.printAndWait('이 기간 동안 나는 정말 행복했어.');
        await era.printAndWait('설령 과거가 기억나지 않더라도…… 나는 자랑스럽게 말할 수 있어.');
        await era.printAndWait(
          '타키온을 알게 된 것이…… 내 인생에서 가장 아름다운 일이었다고.',
        );
        await era.printAndWait('그러니, 정말 미안해.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 모르모트 군의 이야기는…… 여기서 끝이야.',
        ]);
        era.println();
        await tachyon.say_and_wait('만약 자네가 원한다면……');
        await era.printAndWait('……미안.');
        await era.printAndWait('하지만 나는 더 이상 네 발목을 붙잡고 싶지 않아.');
        await era.printAndWait('이야기는 여기서 끝내기로 하자.');
      } else {
        await era.printAndWait('미안해…… 정말로 기억이 나지 않아.');
        era.println();
        await tachyon.say_and_wait('모르……');
        era.printButton('「——물론, 거짓말이야!」', 1);
        await era.input();
        await tachyon.say_and_wait('…………어?');
        era.printButton(
          '「무슨 생각을 하는 거야, 내가 어떻게 타키온을 잊을 수 있겠어?」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait('…………');

        era.printButton('「……어? 타키온?」', 1);
        await era.input();
        await era.printAndWait('타키온은 갑자기 입을 다물고 고개를 숙였다.');
        await era.printAndWait('돌연, 타키온이 당신의 몸을 억눌렀다.');
        era.println();
        await tachyon.say_and_wait(
          '이 바보 같은 녀석! 내가 얼마나 걱정했는지 아나!',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 고개를 들지 않았다. 하지만 바닥에 떨어지는 물방울로 보아————',
          tachyon.sex,
          '는 울고 있었다.',
        ]);
        era.printButton('「타키온?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '제발…… 다시는 그런 식으로 날 속이지 말게. 부탁이야, 제발…… 정말 무서웠어…… 자네를 잃고 싶지 않아……',
        );
        era.printButton('「…………응, 미안해」', 1);
        await era.input();
        await era.printAndWait('미안하다.');
        await era.printAndWait('정말로 미안하다.');
        await era.printAndWait([
          '무슨 일이 있었는지는 모르겠지만, 자신은 또 ',
          tachyon.sex,
          '를 속이고 말았다.',
        ]);
        await era.printAndWait([
          '속여버렸다——— 눈앞의 이 ',
          tachyon.get_colored_name(),
          '이라는 이름의 낯선 ',
          tachyon.uma_sex_title,
          '를.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '모르모트 군…… 자네, 이전에 무슨 일이 있었는지 기억하나?',
        );
        era.println();
        await era.printAndWait('이것만큼은…… 대답해도 상관없겠지.');
        await era.printAndWait([you.get_colored_name(), '은(는) 고개를 저었다.']);
        await era.printAndWait('솔직히 말해서, 아무것도 모른다.');
        await era.printAndWait([
          '여기가 어디인지, 눈앞의 ',
          tachyon.teen_sex_title,
          '가 누구인지.',
        ]);
        await era.printAndWait('모든 것을, 전혀 알지 못한다.');
        await era.printAndWait('하지만 오직 하나, 마음속 깊은 곳에 변치 않고 박혀 있는 것이 있었다.');
        await era.printAndWait([tachyon.sex, '를 슬프게 하고 싶지 않다.']);
        await era.printAndWait([tachyon.sex, '를 괴롭게 하고 싶지 않다.']);
        await era.printAndWait('그것을 위해서라면, 설령 거짓말로 과거를 덮어버린대도 상관없다.');
        era.println();
        await tachyon.say_and_wait(
          '……아무것도 아니네. 그럼 됐어. 어쨌든 자네가 지금 깨어났으니…… 그거면 된 거야.',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 자세히 설명할 생각이 없는 듯했다.',
        ]);
        await era.printAndWait('그렇다면 어쩔 수 없다.');

        era.printButton('「그나저나, 지금은————」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '모르모트 군, 자네도 피곤하겠지. 자세한 건 내일 얘기하세.',
        );
        era.println();
        await era.printAndWait([
          '지금이 언제인지 물어보려던 찰나, ',
          tachyon.sex,
          '는 다급하게 화제를 돌렸다.',
        ]);
        await era.printAndWait('비록 과거의 기억은 없지만, 인간으로서의 상식은 남아 있었다.');
        await era.printAndWait([
          tachyon.sex,
          '의 표정에서 알 수 있었다. ',
          tachyon.sex,
          '는 이 질문에 대답하고 싶어 하지 않는다.',
        ]);
        await era.printAndWait('……그럼 관두자. 묻지 않기로 했다.');
        await era.printAndWait([
          '만약 이 질문이 ',
          tachyon.sex,
          '에게 저런 당혹스러운 표정을 짓게 만든다면.',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          '자, 모르모트 군. 이제 깨어났으니 가장 먼저 해야 할 일이 무엇인지 알고 있겠지?',
        );
        await you.say_as_passer_by_and_wait('모르모트', '그건……?');
        await tachyon.say_and_wait(
          '당연히 밥이지! 밥! 배고파 죽겠네. 모르모트 군, 빨리 가서 뭐라도 좀 만들어 오게!',
        );
        await you.say_as_passer_by_and_wait('모르모트', '…………알겠어.');
        era.println();
        await you.say_as_passer_by_and_wait('모르모트', '맛은…… 어때?');
        await tachyon.say_and_wait('………음.');
        await tachyon.say_and_wait('우엑…… 맛없어……');
        await tachyon.say_and_wait(
          '어쩜 이렇게 맛이 없을 수가…… 모르모트 군, 자네……',
        );
        await you.say_as_passer_by_and_wait('모르모트', '!?');
        await tachyon.say_and_wait(
          '분명…… 몸이 아직 다 회복되지 않아서 그런 거겠지. 하긴 그렇게 오래 누워 있었으니.',
        );
        await tachyon.say_and_wait(
          '이번만은 봐주겠지만, 다음엔 빨리 감각을 되찾아야 하네.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……아하하, 미안해.',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          '그럼…… 다음은 먼저 운동장으로 트레이닝을 하러 가세.',
        );
        await you.say_as_passer_by_and_wait('모르모트', '…………');
        await tachyon.say_and_wait('………모르모트 군?');
        await you.say_as_passer_by_and_wait('모르모트', '아, 응……');
        await tachyon.say_and_wait(
          '자네, 조금도 놀라지 않는 건가? 내가 무려 자발적으로 트레이닝을 하러 가겠다고 했다고?',
        );
        await you.say_as_passer_by_and_wait('모르모트', '……에.');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……무의식적으로 또 땡땡이치러 가자는 소린 줄 알았어.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '타키온, 너 정말로 트레이닝하러 가는 거야!?',
        );
        await tachyon.say_and_wait('아니, 그건 또 반응이 너무 과하군.');
        await you.say_as_passer_by_and_wait('모르모트', '아하하…… 그렇네.');
        era.drawLine();
        await you.say_as_passer_by_and_wait('모르모트', '상점가……?');
        await tachyon.say_and_wait(
          '그래, 내 실험 기구가 좀 부족해졌거든. 같이 좀 가주게.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '아, 알았어. 당연히 가야지.',
        );
        await tachyon.say_and_wait(
          '모르모트 군? 어디로 가는 건가? 상점가는 그쪽이 아닐세.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……아, 아냐, 아무것도. 그냥 갑자기 챙길 게 생각나서.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '하지만 다시 생각해보니 별로 중요한 것도 아니었어. 아하하하.',
        );
        await tachyon.say_and_wait('……참 이상하군.');
        era.println();
        await tachyon.say_and_wait('흠～ 흠흠흠♪');
        await you.say_as_passer_by_and_wait('모르모트', '……저기, 타키온?');
        await tachyon.say_and_wait('응?');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '…… 상점가 사람들이 널 보는 눈빛이 어쩐지 좀 이상한 것 같은데?',
        );
        await tachyon.say_and_wait(
          '……그, 그런가? 자네 기분 탓이겠지, 모르모트 군.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '아니, 분명해. 마치 위험 인물을 보는 듯한……',
        );
        await tachyon.say_and_wait('자네가 잘못 본 거야.');
        await you.say_as_passer_by_and_wait('모르모트', '그렇지만.');
        await tachyon.say_and_wait('잘못 본 거라니까.');
        await you.say_as_passer_by_and_wait('모르모트', '……알았어.');
        era.drawLine();
        await tachyon.say_and_wait(
          '……저기 말이야, 모르모트 군. 지금 당장, 아주 조심스럽게, 손에 든 걸 내려놓는 게 좋겠네.',
        );
        await you.say_as_passer_by_and_wait('모르모트', '으음…… 왜 그래?');
        await tachyon.say_and_wait([
          '왜 그러냐니, 그게 ',
          t_call_c,
          '의 물건이라는 걸 잊은 건가?',
        ]);
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '에…… 하지만 살짝 만지는 정도는 별일 없겠지.',
        );
        await tachyon.say_and_wait(
          '그럴 리가! 지난번에 내가 살짝 건드리기만 했는데 내 연구 자료가 순식간에 불타버렸단 말일세!',
        );
        await you.say_as_passer_by_and_wait('모르모트', '하지만……');
        await tachyon.say_and_wait('………');
        await you.say_as_passer_by_and_wait('모르모트', '…………');
        await tachyon.say_and_wait(
          '그럼 나도 한번……… 으아아악! 불붙었다! 빨리 자료 구조해! 아아악!',
        );
        era.drawLine();
        await tachyon.say_and_wait('이보게, 모르모트 군.');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '응? 타키온, 왜 그래?',
        );
        await tachyon.say_and_wait(
          '내 말은, 자네 깨어난 뒤로 나랑 전혀 애정 행각을 안 했잖나?',
        );
        await you.say_as_passer_by_and_wait('모르모트', '……에?');
        await tachyon.say_and_wait(
          '연인을 이렇게 방치해두다니. 깨어난 직후에는 회복 중이라 쳐도…… 지금은 정밀 검사에서도 아무 이상 없다는데, 이제 슬슬 예전처럼 알콩달콩 지내야 하지 않겠나?',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '아니, 잠깐만. 타키온은 학생이잖아.',
        );
        await tachyon.say_and_wait('그렇지. 그게 무슨 문제라도?');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '문제가 아주 크지!? 윤리 같은 게……',
        );
        await tachyon.say_and_wait(
          '……왜 갑자기 그렇게 격하게 반응하나. 예전엔 자네가 훨씬 적극적이었으면서♡',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '…과거의 나는 그렇게 쓰레기였던 거야?',
        );
        await tachyon.say_and_wait('? 모르모트 군, 방금 뭐라고 했나?');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……아니, 아무것도 아니야.',
        );
        await tachyon.say_and_wait('그럼 어서, 진하게 사랑을 나누자고♡');
        era.drawLine();
        await tachyon.say_and_wait(
          '오오, 이번 도시락은 꽤 괜찮군! 모르모트 군! 드디어 예전 실력을 되찾았구만!',
        );
        await you.say_as_passer_by_and_wait('모르모트', '그…… 그래?');
        await tachyon.say_and_wait(
          '필사적으로 재활한 보람이 있군 그래!',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '그렇네………… 그 요리책들도 도움이 됐고.',
        );
        await tachyon.say_and_wait(
          '정말…… 오랜만이군, 이 맛………… 정말로, 아주 오래도록………',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……타키온, 질문 하나 해도 될까?',
        );
        await tachyon.say_and_wait('응?');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '내가 대체…… 얼마나 오랫동안 잠들어 있었던 거야?',
        );
        await tachyon.say_and_wait('……………');
        await tachyon.say_and_wait('…………년이라네.');
        await you.say_as_passer_by_and_wait('모르모트', '…………');
        await tachyon.say_and_wait('……모르모트 군?');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '미안해…… 그 긴 세월 동안, 너…… 정말 외로웠겠구나.',
        );
        await tachyon.say_and_wait('!');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……내가 돌아왔어. 이제 됐어. 더 이상은……',
        );
        await tachyon.say_and_wait('……');
        await tachyon.say_and_wait(
          '모르모트 군…… 나 정말로…… 정말로, 거의 무너질 뻔했다네……',
        );
        await tachyon.say_and_wait(
          '만약…… 자네가 깨어나지 못했다면…… 만약…… 나를 완전히 잊어버렸다면…… 만약…… 만약……',
        );
        await tachyon.say_and_wait(
          '정말로…… 너무나 무서웠어…… 마치 악몽 같았지…… 수년간 이어진 악몽 말이야……',
        );
        await you.say_as_passer_by_and_wait('모르모트', '……………');
        await tachyon.say_and_wait(
          '하지만…… 자네가 돌아왔어. 결국 다시 돌아와 주었어.',
        );
        await tachyon.say_and_wait(
          '약속해주게…… 이번엔 절대로 나를 떠나지 않겠다고…… 알겠나?',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '……응, 다시는 떠나지 않을게.',
        );
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '그래서…… 그날 대체 무슨 일이 있었던 거야?',
        );
        await tachyon.say_and_wait(
          '……그날, 자네가 상점가에서…… 내가 잠시 자리를 비운 사이, 어떤…… 자칭 팬이라는 녀석이 달려들어서…… 그래서……',
        );
        await tachyon.say_and_wait('……만약 그때, 내가 조금만 더 빨랐더라면.');
        await tachyon.say_and_wait('아니, 내가 계속 자네 곁에 있었더라면……');
        await tachyon.say_and_wait(
          '절대로, 절대로 그런 일은 일어나지 않았을 텐데…… 미안하네……',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '괜찮아…… 어쨌든, 지금은 이렇게 멀쩡하잖아?',
        );
        await tachyon.say_and_wait(
          '하지만…… 그 사이 자네의 인생은…… 수년간의 세월이 무의미하게………… 나를 원망하지 않나?',
        );
        await tachyon.say_and_wait(
          '나 때문이 아니었다면…… 나를 담당하지 않았더라면…… 자네는 이런 일을 겪지 않아도 됐을 텐데.',
        );
        await you.say_as_passer_by_and_wait('모르모트', '내가 왜 너를 원망하겠어?');
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '타키온 네 잘못도 아니고…… 게다가, 네가 노력해서 나를 살려냈잖아.',
        );
        await you.say_as_passer_by_and_wait(
          '모르모트',
          '고마워해도 모자랄 판에, 원망이라니.',
        );
        await tachyon.say_and_wait(
          '…………그렇군. 과연 자네답군. 분명 그렇게 말할 줄 알았어.',
        );
        await you.say_as_passer_by_and_wait('모르모트', '? 무슨 뜻이야.');
        await tachyon.say_and_wait('아니…… 아무것도 아니야.');
        era.drawLine();
        await era.printAndWait('그렇게.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 모르모트 군의 발자취가, 그들이 함께했던 모든 장소에 새겨졌다.',
        ]);
        await era.printAndWait('훈련장, 경기장, 강변, 신사.');
        await era.printAndWait(
          '과거를 되새기기 위해, 그리고 수년 전 멈춰버린 시간을 다시 움직이기 위해.',
        );
        await era.printAndWait(
          '어쩌면 잃어버린 세월은 메울 수 없을지도 모른다.',
        );
        await era.printAndWait(
          '하지만 그들은 여전히 노력하며, 오직 그들만의 새로운 인생을 만들어나갔다.',
        );
        era.println();
        await tachyon.say_and_wait('……이런 이야기의 결말, 만족하나?');
        era.println();
        await era.printAndWait('……응. 아주 좋네.');
        era.println();
        await tachyon.say_and_wait('……모르모트 군.');
        era.println();
        await era.printAndWait('됐어, 이제, 이것으로 충분해.');
        await era.printAndWait('나는…… 이제 곧 죽으니까.');
        await tachyon.say_and_wait('…………');
        await era.printAndWait('타키온…… 고마워.');
        await tachyon.say_and_wait(
          '나랑 약속했잖나…… 다시는 떠나지 않겠다고, 약속했지 않았나.',
        );
        era.println();
        await era.printAndWait('……미안.');
        await era.printAndWait('내가 또 너를 속였다고 생각해 줘.');
        await era.printAndWait('이 기간 동안 나는 정말 행복했어.');
        await era.printAndWait(
          '하지만 이 행복은…… 내 것이 아니라 「모르모트 군」의 것이야.',
        );
        await era.printAndWait(
          '타키온을 알게 된 것이…… 내 인생에서 가장 아름다운 일이었다고 생각해.',
        );
        await era.printAndWait('그러니 더 이상은 속이고 싶지 않아.');
        await era.printAndWait('그러니, 정말 미안해.');
        await era.printAndWait('그러니, 미안해.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 모르모트 군의 이야기는…… 여기서 끝이야.',
        ]);
        await tachyon.say_and_wait('만약 자네가 원한다면……');
        era.println();
        await era.printAndWait('……미안해.');
        await era.printAndWait('하지만 나는 더 이상 네 발목을 붙잡고 싶지 않아.');
        await era.printAndWait('모르모트 군의 이야기는 여기서 끝내기로 하자.');
      }
      era.println();
      await era.printAndWait('미안해, 타키온. 정말로 졸려…… 이제 됐을까?');
      await tachyon.say_and_wait('……그래, 푹 자게. 내가 곁에 있어 줄테니.');
      era.drawLine();
      await tachyon.print_and_wait('모르모트 군은 평온하게 눈을 감았다.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 울지 않았다. 왜냐하면…… 이번이 처음이 아니었기 때문이다.',
      ]);
      era.println();
      await tachyon.print_and_wait('모르모트 군과의 이별.');
      await tachyon.print_and_wait('첫 번째는, 그날 상점가에서였다.');
      await tachyon.print_and_wait('만약 자신이 떠나지 않았더라면.');
      await tachyon.print_and_wait([
        '만약 강제로라도 ',
        you.sex,
        '를 곁에 두었더라면.',
      ]);
      await tachyon.print_and_wait('만약……');
      await tachyon.print_and_wait('만약이란 건 없다.');
      era.println();
      if (plan_b) {
        await tachyon.print_and_wait('설령 범인을 가루로 만들어 흩뿌렸을지라도.');
        await tachyon.print_and_wait('설령 상점가를 선혈로 물들였을지라도.');
        await tachyon.print_and_wait([you.sex, '는 돌아올 수 없었다.']);
        await tachyon.print_and_wait([
          '그 붉은 빛조차 ',
          you.sex,
          '의 복부에서 흘러나온 피를 채울 수는 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          '는 역시…… 나를 원망하지 않았어.',
        ]);
        era.println();
        await tachyon.print_and_wait('자신에 의해 이런 모습이 되었음에도.');
        await tachyon.print_and_wait(
          '눈앞의 모르모트 군의 얼굴에는 청춘의 흔적이 넘쳐흐르고 있었다.',
        );
        await tachyon.print_and_wait([
          you.sex,
          '는 여기서 떠나선 안 되었다.',
        ]);
        await tachyon.print_and_wait([you.sex, '는 지금 떠나선 안 되었다.']);
        await tachyon.print_and_wait([
          '하지만, ',
          tachyon.get_colored_name(),
          ' 때문에.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '는 잘못된 시간에, 잘못된 장소에서…… 잘못된 사람을 만나고 말았다.',
        ]);
      } else {
        await tachyon.print_and_wait('설령 범인을 가루로 만들어 흩뿌렸을지라도.');
        await tachyon.print_and_wait(
          '설령 상점가에서 자신이 미친 사람처럼 날뛰었을지라도.',
        );
        await tachyon.print_and_wait([you.sex, '는 돌아올 수 없었다.']);
        await tachyon.print_and_wait([
          '응급조치조차 ',
          you.sex,
          '의 복부에서 흘러나온 피를 채울 수는 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '그렇게 오랫동안 속여왔으면서…… 마지막에 한 번 더 속여주는 게 뭐 그리 대수라고……',
        );
        era.println();
        await tachyon.print_and_wait('처음부터 알고 있었다.');
        await tachyon.print_and_wait([
          you.sex,
          '이기도 하고, ',
          you.sex,
          '가 아니기도 하다는 것을.',
        ]);
        await tachyon.print_and_wait(
          '필사적으로 꾸며냈을지 모르나, 기억을 잃은 사람 특유의 그 막막한 눈빛은 결코 쉽게 숨겨지는 것이 아니었다.',
        );
        await tachyon.print_and_wait(
          '하물며…… 그 이후의 거짓말들은 또 얼마나 서툴렀던가.',
        );
        era.println();
        await tachyon.print_and_wait([
          '하지만…… ',
          tachyon.get_colored_name(),
          '은 개의치 않았다.',
        ]);
        await tachyon.print_and_wait([you.sex, '이기만 하면 되었다.']);
        await tachyon.print_and_wait(
          '그저 살아있어 주기만 한다면, 계속 살아만 준다면 그것으로 충분했다.',
        );
        await tachyon.print_and_wait('기억이 없다고? 그게 무슨 상관인가.');
        await tachyon.print_and_wait([
          you.sex,
          '가 계속 곁에 있어 주기만 한다면, ',
          tachyon.get_colored_name(),
          '은 기꺼이 평생이라도 속아줄 용의가 있었다.',
        ]);
        await tachyon.print_and_wait('……하지만.');
        await tachyon.print_and_wait([
          '마찬가지로, 설령 「이번」의 ',
          you.sex,
          '가 자신을 평생토록 속였을지라도.',
        ]);
        await tachyon.print_and_wait([
          '결국 마지막의 마지막 순간만큼은, ',
          tachyon.get_colored_name(),
          '을 속이는 것을 거부하고 말았다.',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('침대 곁에 놓인 홍차를 한 모금 마셨다.');
      await tachyon.print_and_wait([
        '자신이 탄 홍차는 ',
        you.sex,
        '가 탔던 것과 이론적인 성분이 완벽하게 일치한다.',
      ]);
      await tachyon.print_and_wait('그도 그럴 것이, 이미 수년 동안 스스로 타왔기 때문이다.');
      await tachyon.print_and_wait(
        '연구할 수 있는 모든 것, 수정할 수 있는 모든 것을 최상의 상태로 다듬었다.',
      );
      await tachyon.print_and_wait('하지만 맛이 다르다.');
      await tachyon.print_and_wait(
        '같을 수 없다. 영원히 같아질 수 없다.',
      );
      await tachyon.print_and_wait('오늘의 홍차는 결코 어제의 맛을 이길 수 없다.');
      era.println();
      await tachyon.say_and_wait('————그럼, 다음 실험을 시작해볼까.');
      era.drawLine();
      await tachyon.print_and_wait('트레센 학원의 지하실.');
      era.println();
      await tachyon.say_and_wait('마지막으로 여기 온 게…… 언제였더라.');
      era.println();
      await tachyon.print_and_wait('3개월 전? 5개월 전? 아니면……');
      await tachyon.print_and_wait(
        '「이번」에는 모르모트 군과 얼마나 시간을 보냈더라?',
      );
      era.println();
      await tachyon.say_and_wait('됐다. 중요하지 않아.');
      era.println();
      await tachyon.print_and_wait('불을 켰다.');
      await tachyon.print_and_wait('눈이 서서히 빛에 적응하자.');
      await tachyon.print_and_wait('눈앞에 나타난 것은 수천 개에 달하는 배양 수조였다.');
      era.println();
      await tachyon.print_and_wait([
        '아아, 만약 ',
        you.sex,
        '가 알게 된다면, ',
        you.sex,
        '는 절대로 나를 용서하지 않겠지.',
      ]);
      await tachyon.print_and_wait([
        '하지만…… ',
        you.sex,
        '는 결국 나를 원망하지 않았다.',
      ]);
      await tachyon.print_and_wait('그러니 이건 묵인한 셈이나 다름없다.');
      era.println();
      await tachyon.say_and_wait(
        '제56차 실험, 기억 회복 경향 없음, 신체 이상 없음, 생존 기간 5개월……',
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '가 떠난 그날부터 시작된 계획이었다.',
      ]);
      await tachyon.print_and_wait('자신을 수없이 원망했다.');
      await tachyon.print_and_wait('어째서 이렇게 늦게서야 이 방법을 떠올렸느냐고.');
      await tachyon.print_and_wait(
        '물거품 같은 행복에 취해 연구자의 기본인 유비무환조차 잊고 있었단 말인가.',
      );
      await tachyon.print_and_wait('그 결과가 바로 이런 꼴이다.');
      era.println();
      await tachyon.print_and_wait([
        '한 땀 한 땀, 모래성을 쌓듯이 ',
        you.sex,
        '의 신체를 다시 이어 붙여 만들었다.',
      ]);
      await tachyon.print_and_wait(
        '하지만 모든 것을 이어 붙였음에도, 형체 없는 것만은 다시 빚어낼 수 없었다.',
      );
      await tachyon.print_and_wait('인체에서 가장 많은 비밀을 담고 있는 뇌———— 바로 기억이다.');
      await tachyon.print_and_wait(
        '처음부터 존재했는지조차 알 수 없는 것을 대체 어떻게 재구성한단 말인가.',
      );
      await tachyon.print_and_wait('그저 이렇게 할 수밖에 없었다.');
      await tachyon.print_and_wait('반복되는 실험, 반복되는 각성.');
      await tachyon.print_and_wait('그리고 되풀이되는…… 기적을 기다리는 일.');
      era.println();
      await tachyon.say_and_wait(
        '실패 주요 원인, 다발성 장기 부전으로 인한 패혈증…… 생존 의지, 없음.',
      );
      era.println();
      await tachyon.print_and_wait(
        '범인의 흙장난 따위는 역시 여신에게 비길 바가 못 되는 모양이다.',
      );
      await tachyon.print_and_wait([
        '그래서 매번 만들어지는 ',
        you.sex,
        '는 항상 이랬다.',
      ]);
      await tachyon.print_and_wait('길어야 반년, 짧으면…… 고작 2주.');
      await tachyon.print_and_wait('시간이 다 되면, 항상 각양각색의 이유로 영면에 들고 만다.');
      await tachyon.print_and_wait('……물론.');
      await tachyon.print_and_wait(
        '그 질병들은 어디까지나 상식적인 범주 내의 일이다.',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 연구 성과를 이용한다면.',
      ]);
      await tachyon.print_and_wait(
        '생명을 연장하는 것쯤이야 3년에서 5년은 거뜬했고, 심지어…… 그보다 훨씬 오래 살게 할 수도 있었다.',
      );
      await tachyon.print_and_wait(
        '마음만 먹는다면 첫 번째 5년, 그리고 두 번째, 세 번째, 네 번째…… 영원히 이어갈 수도 있었다.',
      );
      era.println();
      await tachyon.say_and_wait([you.sex, '는 끝내 말하지 않았다.']);
      era.println();
      await tachyon.print_and_wait('아무리 반복해도.');
      await tachyon.print_and_wait('아무리 신체를 개조해도.');
      await tachyon.print_and_wait([
        '마지막 순간에 ',
        you.sex,
        '가 내뱉는 말은 늘 비슷했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('이제 끝났어.');
      await tachyon.say_and_wait('이걸로 만족해.');
      era.println();
      await tachyon.say_and_wait(
        '웃기지 마…… 웃기지 말라고!',
      );
      await tachyon.say_and_wait(
        '누가 마음대로 만족하라고 했나! 말하란 말이야! 내게 말해! 살고 싶다고! 계속 나와 함께 살아가고 싶다고 말하란 말이야!',
      );
      await tachyon.say_and_wait(
        '기억이 없어도 상관없어, 평생 기억을 찾아 헤매도 상관없으니까, 제발 말해줘…… 어째서 말하지 않는 거야…… 왜…… 왜 나를 혼자 두는 거냐고……',
      );
      era.println();
      await tachyon.print_and_wait([
        '만약 ',
        you.sex,
        '가 증오 때문에, 자신의 목숨을 앗아가게 만든 ',
        tachyon.get_colored_name(),
        '을 원망하며 죽어서도 ',
        tachyon.get_colored_name(),
        '와 함께 살고 싶지 않다면, 그것은 받아들일 수 있었다.',
      ]);
      await tachyon.print_and_wait([
        '정말로 그렇다면 ',
        tachyon.get_colored_name(),
        '은 군말 없이 ',
        you.sex,
        '의 곁을 떠나, 최소한의 의료적 접촉만을 유지했을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '마지막 순간에 조금이라도 망설이거나, 혹은 ',
        tachyon.get_colored_name(),
        '을 향한 혐오를 드러내 주기만 한다면.',
      ]);
      await tachyon.print_and_wait([
        '설령 심장이 멈추더라도, 마지막 수단을 써서라도 ',
        you.sex,
        '를 다시 살려냈을 것이다.',
      ]);
      await tachyon.print_and_wait('하지만…… 56번의 실험 동안.');
      await tachyon.print_and_wait('그런 일은 단 한 번도 일어나지 않았다.');
      era.println();
      await tachyon.print_and_wait('자신을 끌어들이고 싶지 않아서.');
      await tachyon.print_and_wait('자신을 구속하고 싶지 않아서.');
      await tachyon.print_and_wait('설령 모든 것을 잃었음에도, 생명도, 기억도 잃었음에도.');
      await tachyon.print_and_wait([
        '56번의 기회 속에서 매번 ',
        you.sex,
        '가 마지막까지 생각한 것은 오직 ',
        tachyon.get_colored_name(),
        '의 가능성뿐이었다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.get_colored_name(),
        '의 가능성은 이미 끝났다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 시간은 이미 멈춰버렸다.',
      ]);
      await tachyon.print_and_wait('그 홍차의 맛은 그 순간부터 이미 고정되어버렸다.');
      era.println();
      await tachyon.say_and_wait('제57차 실험, 개시.');
      era.println();
      await tachyon.print_and_wait(
        '배양 수조의 영양액이 빠져나가며, 수조 안의 실루엣이 해방되었다.',
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '를 끝내게 하지 않겠다. 결코 ',
        you.sex,
        '를 끝나게 두지 않을 것이다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '과 모르모트 군의 이야기는 반드시 영원히 계속되어야만 한다.',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '그리하여 과거에 얽매이고, 과거에 갇혀버린 과학자는 다시금 새로운 실험을 시작했다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_begin_race
  before_begin_race: (() => {
    const title = '과제의 실현 가능성';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        tachyon.uma_sex_title,
        '와 트레이너의 첫 만남이 두 사람의 톱니바퀴가 돌아가기 시작한 순간이었다면,',
      ]);
      await era.printAndWait('이날은 바로 그 톱니바퀴가 돌아가는 소리가 세상을 뒤흔드는 순간이었다.');
      await era.printAndWait([
        '…………적어도 다른 ',
        tachyon.uma_sex_title,
        '들에게 있어서는 그러했다.',
      ]);

      era.printButton('「타키온!」', 1);
      await era.input();
      await era.printAndWait([
        '자신의 ',
        tachyon.uma_sex_title,
        '가 정말로 이런 서사시의 서막과 같은 감상을 품고 있었다면, 소중한 레이스 전 준비 시간을 다른 ',
        tachyon.uma_sex_title,
        '들과 잡담을 나누는 데 쓰지는 않았을 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '따라서 시간이란 그저 인위적으로 부여된 정의에 불과하며, 인류가 만들어낸 단위일 뿐이라네. 빠름과 느림 또한 상대적인 개념이지…………',
      );
      await tachyon.say_and_wait(['이런, ', callname, '? 자네 왔나.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 어이가 없었다. 출주하는 ',
        tachyon.uma_sex_title,
        '들의 입장까지 겨우 몇 분밖에 남지 않았고, 이론상 평생 한 번뿐인 메이크 데뷔전이다.',
      ]);
      await era.printAndWait([
        '제1인기 주인공인 ',
        tachyon.sex,
        '는 레이스 시작 직전까지 한가롭게 수다를 떨고 있었고, 심지어 화제도 지극히 사소했다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 논리에 심취해 있던 아이들에게 작별 인사를 건넨 뒤, ',
        tachyon.get_colored_name(),
        '을(를) 이끌고 지하 통로로 내려갔다.',
      ]);
      if (you.sex_code === 1) {
        era.println();
        await tachyon.say_and_wait([
          '남자가 그렇게 성급하면 미움받는다네, ',
          callname,
        ]);
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 여전히 여유로운 태도로 ',
        you.get_colored_name(),
        '의 뒤를 따랐다.',
      ]);
      await era.printAndWait([
        '두 사람의 발소리만이 텅 빈 지하 통로에 울려 퍼졌고, 분위기는 잠시 어색해졌다.',
      ]);

      era.printButton('「……생각보다 붙임성이 좋네.」', 1);
      await era.input();
      await era.printAndWait([
        '분명히 억지로 말을 꺼낸 것이었다. 하지만 ',
        tachyon.get_colored_name(),
        '은(는) 그 어색함을 눈치채지 못했거나, 알고도 모른 척하며 말을 이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '당연하지 않나. 가끔은 개인 이미지를 관리해야 실험체가 끊이지 않는 법이라네.',
      );
      era.println();
      await era.printAndWait(
        '정말 이미지를 생각한다면 평소에 이상한 짓 좀 하지 말라고……',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 자네는 아직 멀었군. 사람들은 악인에게서 이유를 찾고 선인에게서 결점을 찾기를 좋아한다네.',
      ]);
      await tachyon.say_and_wait(
        '완벽한 인격자가 가면을 벗는 것보다, 미친 과학자가 소외받는 이유를 찾아내어 동정하는 쪽을 더 선호하지.',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '는 냉소했다.']);
      era.println();
      await tachyon.say_and_wait([
        '방금 전의 대화는 그저 씨앗을 심은 것뿐이라네. 곧 레이스에서 이기면 오늘의 대화는 ',
        tachyon.couple_title,
        '의 마음속에 뿌리를 내리겠지.',
      ]);
      await tachyon.say_and_wait(
        '훗날 곤란한 일이 생기면 자연스럽게 『친절한 타키온 선배』를 찾아와 답을 구할 것이야.',
      );
      await tachyon.say_and_wait([
        '그리고 자애로운 나는 당연히 무상으로 ',
        tachyon.couple_title,
        '를 도와주겠지.',
      ]);
      await tachyon.say_and_wait(
        '하지만 답례로 실험 데이터를 기록하게 해주는 건 당연한 도리 아니겠나?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 식은땀이 흘렀다. 이미지 관리 때문이라고는 예상했지만, 이렇게까지 먼 미래를 계산하고 있을 줄은 몰랐다.',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait('이런이런, 설마 누가 질투라도 하는 건가?');
        era.println();
        await era.printAndWait([
          '무언가 착각한 것인지, ',
          tachyon.get_colored_name(),
          '은(는) 갑자기 ',
          you.get_colored_name(),
          '에게 몸을 바싹 붙였다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は後ろから ',
          you.get_colored_name(),
          ' を抱き、細い手が不潔に ',
          you.get_colored_name(),
          ' の身体を撫で回り、最後は書類の下の位置に留まった',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await era.printAndWait([
            tachyon.sex,
            'はズボン越しに膨らみの形をゆっくり辿り、',
            you.get_colored_name(),
            ' の身体が目覚めるにつれ、描く手つきは握り、扱くに変わった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '安心しなさい。女性より、満たされる感覚のほうが好みですわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は ',
            you.get_colored_name(),
            ' の耳に寄り、蘭のような息で言った',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ただし……あなたが女性になっても、受け入れられるかもしれませんわね？',
          );
          era.println();
        }
        await era.printAndWait([
          tachyon.sex,
          '는 쿡쿡 웃으며 ',
          you.get_colored_name(),
          '을(를) 놓아주고 혼자 경기장으로 걸어갔다.',
        ]);
      }
      era.printButton(
        '「……아무리 그래도 이기지 못하면 그 계획도 수포로 돌아가는 거 아냐?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 뒤돌아보지 않고 빛이 쏟아지는 곳을 향해 똑바로 걸어갔다.',
      ]);
      await era.printAndWait([
        '어두운 지하 통로에서 갑자기 밖을 바라보자 ',
        you.get_colored_name(),
        '은(는) 눈이 부실 정도의 광채를 느꼈다.',
      ]);
      await era.printAndWait([
        '눈물이 고인 시야 속에서 경기장으로 나아가는 ',
        tachyon.sex,
        '는 마치 빛 속으로 녹아드는 것만 같았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '자네는 여기서 얌전히 나의 승전보를 기다리기만 하면 된다네.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_hoch_sho
  before_hoch_sho: (() => {
    const title = '실험 대조';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} vs_coffee 対戦相手にマンハッタンカフェがいる
     */
    const f = async (tachyon, you, callname, t_call_c, vs_coffee) => {
      await tachyon.say_and_wait(
        '각오는 했지만…… 역시 눈에 띄는 실험 대조군은 없군.',
      );
      era.println();
      await era.printAndWait(['하지만 이번 레이스는 사츠키상 전초전이다.']);
      await era.printAndWait([
        '사츠키상을 목표로 한다면 상대의 강약과 관계없이 이 결과는 놓칠 수 없다.',
      ]);
      era.println();
      if (vs_coffee) {
        await tachyon.say_and_wait([
          '그러고 보니 오늘은 ',
          t_call_c,
          '도 출전했군.',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '……만족할 만한 달리기를 보여 주면 좋겠네. 왜냐하면……',
        ]);
      } else {
        await tachyon.say_and_wait([
          t_call_c,
          '가 출전했다면…… 실험 가치는 더욱 높았을 텐데.',
        ]);
      }
      await tachyon.say_and_wait([
        '그런데 ',
        callname,
        ', 자네는 ',
        t_call_c,
        '을(를) 어떻게 보고 있나?',
      ]);
      era.println();
      await era.printAndWait('응?');
      await era.printAndWait([
        '갑작스러운 질문에 ',
        you.get_colored_name(),
        '은(는) 생각에 잠겼다.',
      ]);
      await era.printAndWait('회색 뇌세포가 돌아가기 시작한다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 이런 질문을 하는 의도는……',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 긴장하는 모습을 보더니 ',
        tachyon.get_colored_name(),
        '은(는) 웃었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그렇게 긴장하지 말게. 그저 질문일 뿐일세. 개인적으로는 자네가 ',
        tachyon.sex,
        '와(과) 좋은 관계를 맺어 준다면 기쁘겠군…… 만일의 경우를 위해서.',
      ]);
      era.printButton('「불안해지는 말투인데……」', 1);
      era.printButton('「난 언제까지나 타키온의 트레이너야!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '무슨 상상을 하는 건가…… 됐네. 출전하지.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은(는) 호프풀 전에 보았던 스프레이를 다리에 뿌리고 출전 준비를 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_hope_sta
  before_hope_sta: (() => {
    const title = '연구 과제의 진전';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     */
    const f = async (tachyon, you, callname, hope_sta) => {
      await era.printAndWait('마침내 그날이 왔다');
      await era.printAndWait([
        hope_sta,
        '——이제 막 데뷔한 ',
        tachyon.uma_sex_title,
        '들에게 하반기 가장 중요한 레이스라고 해도 과언이 아니다.',
      ]);
      await era.printAndWait('삼관 노선을 목표로 한다면 더욱 그렇다.');
      await era.printAndWait([
        '주니어급 유일의 중거리 G1. 재능 있는 ',
        tachyon.uma_sex_title,
        '가 꿈을 향한 여정에 내딛는 첫걸음.',
      ]);
      era.println();
      await era.printAndWait([
        '그토록 중요한 날인데도 ',
        you.get_colored_name(),
        '을(를) 담당하는 ',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        '은(는)……',
      ]);
      era.println();
      await you.say_and_wait('어라?');
      era.println();
      await era.printAndWait([
        '어디선가 뛰어다니고 있을 줄 알았던 ',
        tachyon.get_colored_name(),
        '가 오늘은 드물게 대기실에서 얌전히 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['오호, ', callname, '왔는가.']);
      era.println();
      await era.printAndWait([
        '대기실에서 다리에 어떤 스프레이를 뿌리고 있던 ',
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 한 번 올려다보더니 다시 손에 든 스프레이에 집중했다.',
      ]);

      era.printButton('「그게 전에 말했던 약이야?」', 1);
      await era.input();
      await tachyon.say_and_wait('그렇네. 이번 레이스에 도움이 되면 좋겠군……');
      await tachyon.say_and_wait(
        '이제 와서 숨길 필요도 없지. 이건 다리 근육을 풀어 주는 약으로……',
      );
      await tachyon.say_and_wait(
        '냉각 스프레이와 비슷한 물건일세. 레이스 후 부상을 예방하려고 미리 쓰는 거지. 이번 실험이 성공한다면……',
      );
      era.println();
      await era.printAndWait('그렇군.');
      await era.printAndWait([
        '그 말을 들은 ',
        you.get_colored_name(),
        '은(는) 저도 모르게 숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '을(를) 믿고는 있지만 마음 한구석에 불안이 남는 건 어쩔 수 없었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '본인을 의심하는 건 아니다.',
        tachyon.get_colored_name(),
        '의 약이 매번 정확히 작용하는 것은 아니라는 얘기다…… 그렇지 않다면 지금도 온몸에서 빛이 나고 있을 리 없으니까.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '좋아, 준비는 완벽하네. ',
        callname,
        '출발하세.',
      ]);
      era.println();
      await era.printAndWait('들뜬 목소리는 경기장 분위기 때문일까?');
      await era.printAndWait('반짝이는 눈은 라이벌에 대한 기대 때문일까?');
      await era.printAndWait('아니면……');
      era.println();
      await tachyon.say_and_wait(
        '오늘 상대들이 약효를 최대한 끌어내 주기를.',
      );
      era.println();
      await era.printAndWait('역시 실험 때문이었군.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 언제나처럼 행동하는 ',
        tachyon.sex,
        '가 코스로 향하는 모습을 지켜보았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_sats_sho
  before_sats_sho: (() => {
    const title = '단일 실험과 결과 분석';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('오늘은 클래식 첫 번째 경기, 사츠키상이다.');
      await era.printAndWait(
        '관중은 개막을 손꼽아 기다리고 있었고 출전 선수들도 레이스 전부터 흥분을 감추지 못했다.',
      );
      await era.printAndWait([
        '그렇다. ',
        tachyon.get_colored_name(),
        '도 예외는 아니다.',
      ]);
      await era.printAndWait([
        '다만…… ',
        tachyon.sex,
        '이(가) 흥분한 이유는 주변과 조금 달랐다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! 보게나. 역시…… G1 무대야말로 데이터를 수집할 가치가 있군!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은(는) 들뜬 채 이리저리 오가며 다른 출전자의 대기실에 몰래 들어가 개체 데이터를 모으려 하기까지 했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 필사적으로 말려서야 겨우 진정시킬 수 있었다.',
      ]);
      await era.printAndWait([
        '레이스 전부터 신이 난 ',
        tachyon.get_colored_name(),
        '와(과) 달리 ',
        you.get_colored_name(),
        '은(는) 왠지 마음이 불안했다.',
      ]);
      era.println();
      await era.printAndWait([
        '야요이상 때 『적어도 사츠키상까지는 문제없다』고 말했다.',
      ]);
      await era.printAndWait(['그런데…… 사츠키상 이후는 알 수 없다는 뜻인가?']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 몸에…… 무슨 문제가 있는 걸까?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '? 왜 그러나? 오늘 자네는 평소의 자네답지 않군.',
      ]);
      await era.printAndWait([
        '오히려 ',
        tachyon.get_colored_name(),
        '에게 걱정을 끼치다니. 이래서는 안 된다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 마음을 다잡고 평소의 표정을 되찾았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '뭐, 괜찮네. 오늘은…… 진심으로 달리는 모습을 보여 주겠네. 진정한 ',
        tachyon.uma_sex_title,
        '의 한계를.',
      ]);
      era.println();
      await era.printAndWait('限界……？');
      await era.printAndWait('아니, 분명 괜찮을 거야.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 의심과 불안을 뒤로한 채 ',
        tachyon.get_colored_name(),
        '이(가) 코스로 나아가는 모습을 배웅했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_toky_yus
  before_toky_yus: (() => {
    const title = '실험 결과는 지지를 받지 못한다';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} t_call_p アグネスタキオンがダンツフレームを呼ぶ名
     */
    const f = async (tachyon, you, callname, t_call_p) => {
      await tachyon.say_and_wait([
        '오호, 역시 일본 더비답군……',
        t_call_p,
        '도 출전하겠지. 기대되는군, ',
        tachyon.sex,
        '의 가능성이……',
      ]);
      era.println();
      await era.printAndWait([
        '일본 더비는 가장 운이 좋은 ',
        tachyon.uma_sex_title,
        '이(가) 이기는 레이스라고들 한다.',
      ]);
      await era.printAndWait([
        '가장 빠른 ',
        tachyon.uma_sex_title,
        '이(가) 사츠키상을, 가장 운 좋은 ',
        tachyon.uma_sex_title,
        '이(가) 더비를, 가장 강한 ',
        tachyon.uma_sex_title,
        '이(가) 국화상을 차지한다.',
      ]);
      await era.printAndWait([
        '최속이나 최강처럼 확실한 것보다…… 운이라는 모호한 요소가 ',
        you.get_colored_name(),
        '을(를) 레이스 전부터 ',
        tachyon.sex,
        '에 대해 걱정하게 만들었다.',
      ]);
      era.printButton('「정말 괜찮겠어?」', 1);
      era.printButton('「역시 신사에서 뽑은 대길 부적을 가져갈까……?」', 2);
      await era.input();
      await era.printAndWait([
        '오늘 새벽부터 ',
        tachyon.get_colored_name(),
        '을(를) 위해 백 계단이나 되는 돌계단을 올라 신사에서 뽑아 온 점괘였다.',
      ]);
      await era.printAndWait([
        '어째서인지 ',
        you.get_colored_name(),
        '의 행동을 들은 ',
        tachyon.get_colored_name(),
        '은(는) 묘한 표정을 지었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……아침부터 그런 걸 뽑으러 가다니……',
        callname,
        '이(가) 그렇게 미신을 믿는 사람일 줄은 몰랐네.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말에 ',
        you.get_colored_name(),
        '은(는) 고개를 저었다.',
      ]);
      era.printButton(
        '「신에게 빌든 뭐든 좋아. 타키온이 더 빨리 달릴 수 있다면 뭐든 하겠어!」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '……크후후, 그런 미신은 자네나 가지고 있게. 하지만 그 마음은…… 받아 두겠네. 오늘 실험은 좋은 결과가 나올 걸세.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] begin_race_win
  begin_race_win: (() => {
    const title = '연구 기반과 근로 조건';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      era.printButton('「최고의 달리기였어! 마치 빛 같았어!」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '실험 결과를 검산했을 뿐인데 그렇게 기뻐하다니.',
        callname,
        ', 참 태평하군…… 앗!',
      ]);
      era.printButton('무슨 일이야!', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 갑자기 소리를 지른 ',
        tachyon.get_colored_name(),
        '을(를) 보고 가슴이 철렁했다.',
      ]);
      await you.say_and_wait('레이스가 끝나고…… 설마 다리가……', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 ',
        tachyon.get_colored_name(),
        '의 다리를 확인하려 했지만……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '잠깐! 게이트에 설치한 출발 속도 기록 장치를 회수하는 걸 깜빡했네!',
      );
      era.println();
      if (relation > 225) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 한숨을 내쉬었다. 그것 때문이었나.',
        ]);
        era.printButton('「걱정 마. 출발 속도는 이미 기록해 뒀어.」', 1);
        await era.input();
        await era.printAndWait([
          '서로 마음이 통한다고까지 할 수는 없지만, ',
          tachyon.get_colored_name(),
          '의 트레이너로서 ',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '이(가) 필요로 하는 데이터는 대략 안다. 애초에 직접 레이스를 뛰는 ',
          tachyon.sex,
          '이(가) 신경 쓸 일도 아니다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '오오! 잘했네, ',
          callname,
          '! 당장 확인해 보세!',
        ]);
        era.println();
        await era.printAndWait([
          '막 얻은 승리도 곧 시작될 위닝 라이브도 두 사람의 눈에 들어오지 않았다. 조금 전 레이스를 뛴 것이 아니라 그저 연구를 진행한 듯했다.',
        ]);
        era.println();
        await era.printAndWait([
          '기록한 데이터를 몇 번이고 다시 살펴보고 가설을 세우던 두 사람은 위닝 라이브가 시작되고 밖에서 다급하게 문을 두드리는 소리가 들리고서야 정신을 차렸다.',
        ]);
      } else {
        await era.printAndWait('뭐, 뭐라고!?');
        await era.printAndWait(
          '출발을 기다리는 동안 그런 장치를 설치할 여유가 있었다고?',
        );
        await era.printAndWait(
          '아니, 애초에 게이트에 멋대로 센서를 달지 말라고!',
        );
        await era.printAndWait([you.get_colored_name(), '은(는) 속이 쓰렸다.']);
        era.println();
        await era.printAndWait([
          '그 후 장치를 회수하기 위해 ',
          you.get_colored_name(),
          '와(과) ',
          tachyon.get_colored_name(),
          '은(는) 경마장에 몰래 들어갔다……',
        ]);
        await era.printAndWait([
          '물론 URA에게 들켰고 몇 번이고 사과한 끝에 ',
          tachyon.get_colored_name(),
          '은(는) 장치를 되찾을 수 있었다. 모든 일이 순조로웠다.',
        ]);
        await era.printAndWait([
          '……회수하는 내내 직원들의 따가운 시선을 감수해야 했다는 점만 빼면.',
        ]);
        era.println();
        await era.printAndWait('【명성이 하락했다!】');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] beginning
  beginning: (() => {
    const title = '실험의 시작';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '여기는 후추의 트레센 학원. 오늘도 ',
        you.get_colored_name(),
        '의 꿈은 이곳에서 계속 자라나고 있다.',
      ]);
      await tachyon.say_and_wait('트레이너 군, 입을 벌리게.');
      era.println();
      await era.printAndWait('계속 자라나고 있다.');
      era.println();
      await tachyon.say_and_wait('트레이너 군, 한 바퀴 달려서 속도를 측정해 보게.');
      era.println();
      await era.printAndWait('계속 자라나……');
      era.println();
      await tachyon.say_and_wait(
        '트레이너 군, 알약은 입에 물고 있게. 삼키라고 말하면 그때 삼키도록.',
      );
      era.println();
      await era.printAndWait('자라나……?');
      era.println();
      await era.printAndWait([
        '아침부터 실험실로 불려 와 오전 내내 실험에 동원된 ',
        you.get_colored_name(),
        '의 의심은 이미 극에 달해 있었다.',
      ]);
      era.println();
      await you.say_and_wait(
        ['지금은 수업 시간일 텐데. ', tachyon.sex, '은(는) 수업에 안 가도 되는 건가?'],
        true,
      );
      await you.say_and_wait('나도 지금쯤 사무 작업을 하고 있어야 하는 게 아닌가?', true);
      await you.say_and_wait(
        '왜 난 여기서 수상한 약을 잔뜩 먹으며 실험 대상이 되고 있는 거지?',
        true,
      );
      era.println();
      await tachyon.say_and_wait('트레이너 군? 뭘 그렇게 멍하니 있는 겐가?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 의아한 표정으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다. 얼굴에는 짜증이 떠올라 있었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '은(는) 며칠 전 ',
        you.get_colored_name(),
        '이(가) 훈련장에서 발견했던 ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        '그 당시 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 빛과 같은 속도와 달리기에 매료되어 충동적으로 계약을 맺었다.',
      ]);
      await era.printAndWait('그리고 그 기세로 기묘한 계약서에도 여럿 서명했다.');
      await era.printAndWait('아무래도 그 계약에는 시약 실험도 포함되어 있었던 모양이다.');
      await era.printAndWait('당시의 나는 의심도 없이 서명했던 건가?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그때 자신의 판단력을 의심하지 않을 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 문득 정신을 차렸다.']);
      await era.printAndWait([
        '회상에 너무 오래 빠져 있었다.',
        tachyon.get_colored_name(),
        '이(가) 불렀는데도 대답하지 못하고 있었다.',
      ]);
      await era.printAndWait('큰일이다. 혼나는 건 아닐까.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 어른답지 못하게도 두려운 마음으로 담당 ',
        tachyon.uma_sex_title,
        '을(를) 올려다보았다. 바로 그때 ',
        tachyon.sex,
        '이(가) ',
        you.get_colored_name(),
        '을(를) 바라보던 눈과 마주쳤다.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '그 짙은 붉은색 눈동자는 블라인드처럼 ',
        you.get_colored_name(),
        '의 시선을 빨아들이는 듯했다.',
      ]);
      await era.printAndWait('—————아니, 정확히는 빨아들이고 있지 않았다.');
      await era.printAndWait(
        '그 눈빛은 그저 고요히 그곳에 있을 뿐이다. 하지만 그 자체가 하나의 창문 같았다.',
      );
      await era.printAndWait('창문 너머에 무엇이 있는지 들여다보지 않고는 견딜 수 없다.');
      await era.printAndWait([
        '사람을 이끄는 것은 ',
        tachyon.sex,
        '의 눈빛이 아니라 자신의 호기심이다.',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '의 한계는 어디까지일까?']);
      await era.printAndWait([tachyon.sex, '의 머릿속에는 어떤 생각들이 오갈까?']);
      await era.printAndWait([tachyon.sex, '의 미래는 얼마나 눈부시게 빛날 수 있을까?']);
      await era.printAndWait([tachyon.sex, '의 이상형은?']);
      await era.printAndWait([tachyon.sex, '의 속옷 색깔은?']);
      await era.printAndWait('피임은 도구를 쓰는 쪽일까, 약을 먹는 쪽일까?');
      await era.printAndWait('민감한 부위는 귀일까, 가슴일까?');
      await era.printAndWait('침대에서는 어떤 자세를 좋아할까?');
      era.println();
      await era.printAndWait('모든 것, 그 모든 것을.');
      await era.printAndWait([
        tachyon.sex,
        '의 모든 것을 ',
        you.get_colored_name(),
        '은(는) 알고 싶었다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은(는) ',
        you.get_colored_name(),
        '의 눈을 바라보다 문득 미소를 지었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그 갈망에 찬 눈빛…… 꼭 작은 동물 같군.');
      era.println();
      await era.printAndWait('작은 동물? 내가?');
      await era.printAndWait([you.get_colored_name(), '은(는) 조금 얼굴을 붉혔다.']);
      await era.printAndWait('어른인 내가 작은 동물 취급을 받다니.');
      era.println();
      await tachyon.say_and_wait('그래…… 작은 동물. 이를테면…… 실험동물처럼 말이야.');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은(는) 문득 생각에 잠겼다. 무슨 생각인지는 알 수 없다.',
      ]);
      await era.printAndWait('그리고 문득 고개를 끄덕였다.');
      era.println();
      await tachyon.say_and_wait('……좋아, 결정했네.');
      era.println();
      await era.printAndWait([tachyon.sex, '은(는) 자신만만하게 말했다.']);
      era.println();
      await tachyon.say_and_wait(['이제부터 자네를 모르모트 군이라고 부르겠네!']);
      era.printButton('「모, 모르모트?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '후후, 잘 어울리는군. 모르모트 군…… 모르모트 군……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무언가 말하려다가 다시 입을 다물었다. 호칭이야 마음대로 부르면 된다.',
      ]);
      await era.printAndWait('저 사람을 홀리는 두 눈동자를 위해서라면.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hoch_sho_win
  hoch_sho_win: (() => {
    const title = '대조 결과 분석';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     */
    const f = async (tachyon, you, callname, love, hoch_sho, sats_sho) => {
      await era.printAndWait([
        '당연하다는 듯 ',
        tachyon.get_colored_name(),
        '은(는) ',
        hoch_sho,
        '에서 승리했다.',
      ]);
      era.printButton('「정말 대단한 레이스였어!」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '후우…… 후우…… 크후후, 자네는 매번 반응이 너무 과장되군. 진심으로 달린 것도 아닌데 무엇이 그리 대단하다는 건가?',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '은(는) 재미있다는 듯 말했다.']);
      era.println();
      await you.say_and_wait('과장하는 게 아니야.');
      await you.say_and_wait(
        '진심이든 아니든 타키온의 달리기는 똑같이 사람을 사로잡아. 이를테면…… 그래, 광전자야.',
      );
      era.println();
      await tachyon.say_and_wait('光電子……？');
      era.println();
      await you.say_and_wait(
        '전극에 닿는 빛은 강약에 상관없이 전자를 방출시키지. 주파수, 다시 말해 빛의 성질이 다른 거야.',
      );
      await you.say_and_wait(
        '빛의 강약도 진심인지도 관계없어. 내게 타키온의 달리기는 차원을 넘어 전극에서 전자를 끌어낼 수 있는 유일한 빛이거든.',
      );
      era.println();
      await tachyon.say_and_wait('……그게 무슨 비유인가?');
      era.println();
      await you.say_and_wait('에에…… 별로였나?');
      await you.say_and_wait(
        '나름대로 시간을 들여 생각한 건데 자신 있었거든……',
      );
      era.println();
      if (love > 75) {
        await tachyon.say_and_wait(
          '흠…… 하고 싶은 말은 알겠네. 그러니까 나만 풀 수 있는 정조대를 차고 있다는 뜻인가?',
        );
        await era.printAndWait('아니, 그쪽 비유가 더 심하잖아……');
      } else {
        await tachyon.say_and_wait(
          '뭐…… 뜻은 알겠네. 어떤 달리기를 보여 주든 나라면 자네를 만족시킬 수 있다는 거겠지?',
        );
      }
      await you.say_and_wait('그래도 난 네가 전력으로 달려 줬으면 해.');
      await era.printAndWait([
        '그 순간 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '가 레이스 전에 했던 시험 이야기를 떠올렸다……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……문제없네. 적어도 ',
        sats_sho,
        '까지는 문제없어.',
      ]);
      era.println();
      await era.printAndWait('적어도…… 라니.');
      await era.printAndWait([
        '안심할 수 없는 말에 ',
        you.get_colored_name(),
        '도 입을 다물었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그 이야기는 이제 됐네. 어서 돌아가 실험을 계속하세.',
      );
      era.println();
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '의 ',
        hoch_sho,
        '은(는) 끝났다.',
      ]);
      await era.printAndWait(['다음 목표 ', sats_sho, '이(가) 이제 눈앞이다!']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hope_sta_lose
  hope_sta_lose: (() => {
    const title = '희망';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '레이스가 끝난 뒤 ',
        you.get_colored_name(),
        '은(는) 말없이 대기실로 돌아가는 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait('돌아오는 길에는 아무도 입을 열지 않았다.');
      await era.printAndWait([
        '이번 패배는 ',
        you.get_colored_name(),
        '에게도 ',
        tachyon.sex,
        '에게도 커다란 충격이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……실험은 실패했군.');
      era.println();
      await era.printAndWait([
        '이번 레이스에서 ',
        tachyon.get_colored_name(),
        '은(는) 분명 평소와 달랐다……',
      ]);
      await era.printAndWait([
        '평범한 사람은 눈치채지 못했을 것이다. 하지만 오늘 달리기에는 ',
        tachyon.sex,
        ' 특유의 그…… 빛이 없었다.',
      ]);
      await era.printAndWait([
        '처음부터 희미했던 빛은 후반으로 갈수록 거의 사라졌고 ',
        tachyon.get_colored_name(),
        '은(는) 패배했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        '「……신경 쓰지 마. 실험이 한 번 실패한 것뿐이야. 돌아가자. 실험이 반드시 성공하는 건 아니잖아.」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저도 모르게 ',
        tachyon.sex,
        '을(를) 위로했다.',
      ]);
      await era.printAndWait([
        '하지만 바닥에 앉아 있는 ',
        tachyon.sex,
        '의 표정이 어쩐지 이상했다.',
      ]);
      await era.printAndWait('후회하는 게 아니었다. 오히려…… 무언가를 참고 있는 건가?');

      era.printButton('「타키온……? 몸은 괜찮아……?」', 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait(
          '아무 일도 아니네. 걱정할 필요 없으니…… 돌아가세.',
        );
        era.println();
        await era.printAndWait([
          '아직 ',
          tachyon.sex,
          '의 마음속 벽은 넘지 못한 것일지도 모른다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 아무 말 없이 ',
          tachyon.sex,
          '의 뒤를 따라 떠났다.',
        ]);
      } else {
        await tachyon.say_and_wait([
          '……괜찮네, ',
          callname,
          '. 다리는…… 문제없어. 다음에 조정하면 될 걸세.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 쪽에서 먼저 위로하며 ',
          you.get_colored_name(),
          '을(를) 안심시키려 했다.',
        ]);
        await era.printAndWait([
          '늘 승리를 자신하던 ',
          tachyon.sex,
          '을(를) 떠올리자 ',
          you.get_colored_name(),
          '의 가슴도 조금씩 진정되었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          {
            content: '…………대체할 방법, 이라…… 아니면……',
            fontSize: '0.75rem',
          },
        ]);
        era.println();
        await era.printAndWait([
          '하지만 듣지 못할 거라고 생각하고 중얼거린 그 말은 ',
          you.get_colored_name(),
          '의 가슴을 다시 철렁 내려앉게 했다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hope_sta_win
  hope_sta_win: (() => {
    const title = '희망';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     */
    const f = async (tachyon, you, hope_sta) => {
      era.printButton('「너무 강해!」', 1);
      await era.input();
      await era.printAndWait([
        '첫 G1 레이스였다. 상대가 ',
        tachyon.get_colored_name(),
        '이라 해도 ',
        you.get_colored_name(),
        '은(는) 식은땀을 흘리지 않을 수 없었다.',
      ]);
      await era.printAndWait([
        '하지만 국내 최고 수준의 무대에서도 ',
        tachyon.sex,
        '이(가) 보여 준 것은 상대를 압도하는 강함이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('크후후, 그렇게 흥분하다니…… 호들갑도 심하군.');
      era.println();
      await era.printAndWait([
        '코스에서 내려와 대기실로 돌아온 ',
        tachyon.get_colored_name(),
        '의 목소리에도 기쁨이 묻어났다.',
      ]);
      await era.printAndWait([
        '그 목소리를 듣고 ',
        you.get_colored_name(),
        '도 알 수 있었다.',
      ]);
      era.printButton('「실험은 성공했지?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '그럼, 그럼! 역시 훌륭한 실험 대상이 중요하군! 오늘 실험은 대성공이야!',
      );
      era.println();
      await era.printAndWait([
        '역시 ',
        tachyon.get_colored_name(),
        '에게 G1마저 조금 커다란 실험실일 뿐인 모양이다.',
      ]);
      await era.printAndWait([
        '그런데도 ',
        tachyon.sex,
        '은(는) 주위를 압도하는 달리기를 보여 주었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '그보다 어서 돌아가세. 다음 레이스를 준비해야지!',
      );
      era.println();
      await you.say_and_wait('응? 갑자기 열정이 불타오르는 건가……?');
      await you.say_and_wait(
        '설마 레이스 자체에 대한 열정에 눈뜬 건…… 아니겠지.',
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        '다음 레이스 실험의 청사진이 이미 머릿속에 그려져 있네! 하하하!',
      );
      era.println();
      await era.printAndWait(
        '……뭐, 됐다. 실험에 대한 열정도 열정이기는 하니까.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '의 ',
        hope_sta,
        '은(는) 끝났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_95_3
  os_95_3: (() => {
    const title = '경품 추첨과 대용 효과';
    /**
     * Plan A / B 共通
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {number} dice 抽選結果。1=ティッシュ、2=ニンジン、3=大量のニンジン、4=ニンジンハンバーグ、5=温泉旅行券
     * @param {boolean} plan_b Plan B に入っているか
     * @param {number} cook_times アグネスタキオンに料理した回数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      relation,
      love,
      dice,
      plan_b,
      cook_times,
    ) => {
      await tachyon.say_and_wait('정말이지…… 설마 그렇게 쉽게 폭발할 줄은 몰랐군.');
      await tachyon.say_and_wait([
        call_25,
        '도 참…… 커피 가루에 신체 능력을 높여주는 약을 좀 섞었을 뿐인데, 어째서 그렇게 화를 내는 건지……',
      ]);
      await tachyon.say_and_wait(
        '역시 이번에는 저주를 견뎌낼 수 있는 비커를 사야 하는 걸까?',
      );
      era.printButton('「그런 물건을 누구한테 발주한다는 거야……」', 1);
      era.printButton('「애당초 수요조차 없을 텐데……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '흥, ',
        tachyon.sex,
        '의 저주 원리가 무엇이든 간에 결국은 외부의 힘으로 파괴하는 것일 뿐이라네.',
      ]);
      await tachyon.say_and_wait(
        '바꿔 말하면 어떤 외부의 힘으로도 파괴할 수 없을 정도로 강화하기만 하면 된다는 뜻이지.',
      );
      await tachyon.say_and_wait(
        '그래서 이번에 찾을 물건은 우주 산업 소재로 만들어져 극한의 추위와 열기, 기압을 견딜 수 있는 규격의 비커라네.',
      );
      await tachyon.say_and_wait([
        '아, 찾았군. ',
        callname,
        ', 이것 좀 보게.',
      ]);
      era.println();
      await era.printAndWait('진짜야?! 상점가 정말 대단한걸!');
      era.drawLine({ content: '시간을 조금 거슬러 올라가서' });
      era.println();
      await era.printAndWait([
        '이날, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '와 함께 상점가로 실험 도구를 사러 나갔다.',
      ]);
      await era.printAndWait('구매를 마치고 돌아가려던 찰나……');
      await you.say_as_passer_by_and_wait(
        '상점가 아저씨',
        '골라 골라! 상점가 실험 기구 대방출!',
      );
      await you.say_as_passer_by_and_wait(
        '상점가 아저씨',
        '우주용 특제 유리 비커, 우주 운석 도가니, 로켓 연료 알코올램프를 한꺼번에 구매하시는 분께는 추첨 기회를 한 번 드립니다!',
      );
      await you.say_as_passer_by_and_wait(
        '상점가 아저씨',
        '특별상은 온천 여행권! 1등상은 특대 사이즈 당근 함박스테이크!',
      );
      era.println();
      await era.printAndWait(
        '에에…… 첫 번째는 그렇다 쳐도 뒤의 물건들은 정말 사는 사람이 있긴 한 걸까……',
      );
      era.println();
      await tachyon.say_and_wait([callname, ', 추첨하러 가세.']);
      era.printButton('「설마 전부 다 산 거야!?」', 1);
      era.printButton(
        '「……알코올램프에 로켓 연료를 써도 정말 문제없는 거야?」',
        2,
      );
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '그야 당연하지. 실험실에 보충해야 할 것들이 꽤 많았거든.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 당연하다는 듯이 말했다.',
        ]);
        await era.printAndWait('……도대체 이 상점가는 정체가 뭐야.');
      } else {
        await tachyon.say_and_wait([
          callname,
          ', 자네는 상술이라는 것도 모르는 건가? 당연히 그냥 이름만 붙인 거지.',
        ]);
        era.println();
        await era.printAndWait(
          '……아니, 앞의 것들이 진짜라면 마지막 것도 의심받는 게 당연하잖아.',
        );
      }
      era.printButton(
        '「그나저나 타키온이 이런 추첨에 관심을 보이다니 별일이네.」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '음…… 그렇긴 하군. 사실 이런 경품들은 추첨 대신 돈으로 직접 살 수 있는 것들이니까…… 우리 레이스 상금이라면 부족할 것도 없지.',
      );
      era.println();
      await era.printAndWait('그렇다면……');
      era.println();
      await tachyon.say_and_wait('하지만 내 목적은 경품이 아니라 관찰이라네.');
      era.println();
      await era.printAndWait('관찰……?');
      era.println();
      await tachyon.say_and_wait(
        '지난번 새해에 했던 말 기억하나? 감정의 영향에 대해 연구해 보고 싶다고 했었지……',
      );
      await tachyon.say_and_wait(
        '그렇다면 당연히 대조군이 필요하고, 가장 좋은 대조군은 내 곁에 늘 붙어 있는 자네 아니겠나.',
      );
      await tachyon.say_and_wait('자네가 추첨한 뒤의 반응을 보여 주게나.');
      era.println();
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '은(는) 앞으로 나가 추첨통을 돌렸다……',
      ]);
      switch (dice) {
        case 1:
          await you.say_as_passer_by_and_wait('店主', '꽝입니다, 티슈 한 갑.');
          await era.printAndWait('꽝이라니…… 아쉽지만 어쩔 수 없지.');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('흠…… 자네 별로 반응이 없군 그래.');
            era.println();
            await era.printAndWait('아니…… 애초에 별로 기대도 안 했으니까.');
            era.println();
            await tachyon.say_and_wait(
              '기대를 안 했다는 건 처음부터 당첨될 거라고 생각지도 않았다는 건가? ……결과를 보기도 전에 가능성을 부정하는 태도는 별로 마음에 들지 않는군.',
            );
            era.println();
            await era.printAndWait('아……');
            era.println();
            await tachyon.say_and_wait('가세, 돌아가서 실험을 계속해야겠군.');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 기분이 나빠졌다.',
            ]);
            await era.printAndWait(['두 사람은 묵묵히 학원으로 돌아갔다.']);
          } else {
            await tachyon.say_and_wait(
              '꽝이라니…… 뭐, 사실 상관없네.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '도 맞장구쳤다. 생각해 보면 그저 상점가의 작은 이벤트일 뿐이었다.',
            ]);
            era.println();
            await tachyon.say_and_wait('이런 경품 따위야 우리 돈으로 얼마든지 살 수 있지 않나.');
            await tachyon.say_and_wait(
              '게다가 티슈도 사실 꽤 쓸모가 있지…… 보게나, 뭔가를 닦을 때 쓸 수도 있고 말이야.',
            );
            await tachyon.say_and_wait(
              '그리고, 그러니까…… 그 온천 여행권 같은 건…… 당첨돼도 우린 여행 갈 시간도 없지 않나.',
            );
            era.println();
            await era.printAndWait('음? 왜 갑자기 말이 많아진 거야.');
            await tachyon.say_and_wait([
              '……그건 그렇고, ',
              callname,
              ', 이런 추첨은 가끔 상인들이 조작한다고들 하던데……',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이(가) 직접 추첨통을 분해해서 검사하려 들자 ',
              you.get_colored_name(),
              '은(는) 서둘러 ',
              tachyon.get_colored_name(),
              '을(를) 끌고 상점가를 떠났다.',
            ]);
            await tachyon.say_and_wait([
              '윽…… 이거 놓게, ',
              callname,
              '! 경품 따위는 관심 없지만, 소비자로서 공정성 여부를 확인할 권리와 책임이 있단 말이네……!',
            ]);
            era.println();
            await era.printAndWait([
              '……사실 ',
              tachyon.sex,
              '도 본인이 말한 것만큼 태연하지는 않은 모양이다.',
            ]);
          }
          break;
        case 2:
          await you.say_as_passer_by_and_wait(
            '店主',
            '3등상, 특선 당근 한 개!',
          );
          era.println();
          await era.printAndWait('특선이라니…… 그냥 재고 처리 같은데.');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 어쩔 수 없다는 듯 당근 한 개를 들었다.',
          ]);
          await era.printAndWait('태클을 걸어야 할지 말아야 할지 모르겠지만, 이 경품 구성은……');
          await era.printAndWait([
            '어쩐지 참가상 티슈와 특등 온천 여행권을 빼면 전부 ',
            tachyon.uma_sex_title,
            '를 위해 설계된 것 아닌가?',
          ]);
          era.println();
          if (plan_b) {
            await tachyon.say_and_wait(
              '당근인가…… 그러고 보니 여기 경품들은 꽤 실용적이군 그래.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 별말 없이 자연스럽게 ',
              you.get_colored_name(),
              '의 손에서 당근을 받아 한 입 베어 물었다.',
            ]);
            era.println();
            await tachyon.say_and_wait('나쁘지 않군, 꽤 달아.');
          } else if (relation <= 225) {
            await tachyon.say_and_wait([
              '호오? ',
              callname,
              ', 지금 자네 표정이 아주 좋군.',
            ]);
            era.println();
            await era.printAndWait('에? 표정?');
            era.println();
            await tachyon.say_and_wait('허탈함, 실망감, 위로받고 싶은 마음…… 아주 복잡한 표정일세.');
            era.println();
            await era.printAndWait([
              '아…… 그러고 보니 ',
              tachyon.get_colored_name(),
              '의 감정 연구를 위해 추첨했던 거였지.',
            ]);
            await era.printAndWait(
              '……감정 연구니 뭐니, 가끔 보면 사람 마음을 모르는 로봇 같다니까.',
            );
            await era.printAndWait([
              '하지만 눈앞의 매드 사이언티스트 같은 ',
              tachyon.get_colored_name(),
              ' 을(를) 생각하면……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              '가 지금 당장 사람의 마음 따윈 이해 못 한다고 말해도 전혀 이상하지 않을 것 같다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '오늘 실험은 꽤 성공적이군. 앞으로도 내게 더 다양한 감정을 보여 주게나, ',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 멋대로 ',
              you.get_colored_name(),
              '의 손에서 당근을 빼앗아 끝부분을 조금 베어 물었다.',
            ]);
            era.println();
            await tachyon.say_and_wait('맛있군.');
          } else {
            await tachyon.say_and_wait('이런, 당근이라니 이거 괜찮지 않나?');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이(가) 다가와 ',
              you.get_colored_name(),
              '을(를) 위로했다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '허울만 좋은 것들보다는 영양을 보충할 수 있는 게 훨씬 실속 있지 않겠나.',
            );
            await tachyon.say_and_wait(
              '당근이라…… 돌아가서 당근 달걀볶음을 할까? 아니면 당근 함박스테이크를 만들까? 그냥 즙을 내서 마시는 것도 좋을 것 같군……',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 위로 섞인 말을 듣고 ',
              you.get_colored_name(),
              '도 그만 웃음을 터뜨리고 말았다.',
            ]);
            era.printButton('「그러려면 당근 한 개로는 부족하겠는걸.」', 1);
            era.printButton('「당근을 좀 더 사야겠어.」', 2);
            await era.input();
            await era.printAndWait([
              '그렇게 두 사람은 상점가로 돌아가 저녁 식사를 만들기에 충분한 양의 당근을 샀다.',
            ]);
            await era.printAndWait('……이거 결국 상점가의 상술에 넘어간 거 아냐?');
            await era.printAndWait([
              '돌아오는 길에 ',
              you.get_colored_name(),
              '은(는) 그제야 그 사실을 깨달았다.',
            ]);
          }
          break;
        case 3:
          await you.say_as_passer_by_and_wait(
            '店主',
            '2등상, 산더미처럼 쌓인 당근 더미!',
          );
          era.println();
          await era.printAndWait('우와! 엄청나다!');
          await era.printAndWait('정말 글자 그대로 작은 산처럼 쌓여 있다.');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('이런, 이거 아주 좋지 않나?');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이(가) 기뻐하는 표정을 지었다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '이번 달, 아니 어쩌면 반년 동안은 당근 걱정 없겠군.',
            );
            era.println();
            if (you.race > 0) {
              await era.printAndWait([
                '아니, ',
                tachyon.uma_sex_title,
                '라도 이런 양은 다 못 먹을 텐데……',
              ]);
              era.println();
              await tachyon.say_and_wait([
                '일반적으로 ',
                tachyon.uma_sex_title,
                '에게 있어 소모하는 에너지가 많을수록 보충해야 할 에너지도 많아지는 법이라네. 즉, 많이 먹는 것=강함이라는 공식이 성립될 수 있지.',
              ]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '은(는) 평가하는 듯한 눈빛으로 ',
                you.get_colored_name(),
                '의 몸을 훑어보았다.',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '식욕을 돋우는 약인가? ……후후, 나쁘지 않은 선택이겠군.',
              );
              era.println();
              await era.printAndWait([
                '아무래도 저 당근 더미는 고스란히 ',
                you.get_colored_name(),
                ' 한 사람의 책임이 될 모양이다.',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 축 처진 어깨로 당근 수레를 끌며 ',
                tachyon.get_colored_name(),
                '과 함께 트레센 학원으로 돌아왔다.',
              ]);
            } else {
              await era.printAndWait([
                '하지만 인간으로서 당근이 이렇게 많이 필요할 리가 없는데……',
                you.get_colored_name(),
                '은(는) 자신의 고민을 ',
                tachyon.get_colored_name(),
                '에게 털어놓았다.',
              ]);
              era.println();
              await tachyon.say_and_wait([
                '이런…… 그 말은 인간을 ',
                tachyon.uma_sex_title,
                '로 변화시킬 가능성에 대해 실험해 보고 싶다는 뜻인가? 그런 연구라면…… 뭐, 안 될 것도 없지……',
              ]);
              era.println();
              await you.say_and_wait('…………타키온?');
              era.println();
              await tachyon.say_and_wait([
                '후후…… 새로운 연구 주제를 제안해 주었군, ',
                callname,
                '……이건 일단 만약을 위한 플랜 C로 두도록 하지.',
              ]);
              era.println();
              era.print([
                '매우 위험하고 불길한 말에 ',
                you.get_colored_name(),
                '은(는) 저도 모르게 등골이 서늘해졌다.',
              ]);
              era.printButton('「그…… 그냥 타키온에게 다 줄게.」', 1);
              era.printButton('「어차피 네 추첨권으로 뽑은 거니까.」', 2);
              await era.input();
              await tachyon.say_and_wait(
                '……그렇군. 아쉽구먼, 모처럼 좋은 기회였는데.',
              );
              era.println();
              await era.printAndWait([
                '간신히 또 한 번의 위기를 넘긴 ',
                you.get_colored_name(),
                '은(는) ',
                tachyon.get_colored_name(),
                '과 함께 당근 수레를 끌고 학원으로 돌아갔다.',
              ]);
            }
          } else {
            era.println();
            await era.printAndWait([
              '경품을 본 순간 ',
              you.get_colored_name(),
              '은(는) 생각하기 시작했다. 이 많은 당근으로…… ',
              tachyon.get_colored_name(),
              '에게 몇 끼나 만들어 줄 수 있을지 계산하기 시작했다.',
            ]);
            era.println();
            await tachyon.say_and_wait('정말 많군……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '도 산더미 같은 당근을 보며 입을 다물지 못했다.',
            ]);
            era.println();
            await tachyon.say_and_wait('이렇게 되면…… 방법이 있지……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 깊은 생각에 잠겼다.',
            ]);
            await era.printAndWait([
              tachyon.sex,
              '을(를) 잘 아는 ',
              you.get_colored_name(),
              '은(는) 즉시 불길함을 감지했다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……공짜 당근…… 약…… 오구리 캡이나 스페셜 위크를 불러서……',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 서둘러 ',
              tachyon.sex,
              '의 생각을 가로막았다.',
            ]);
            era.printButton(
              '「그…… 그래, 당근 만찬을 만들자!」',
              1,
            );
            era.printButton(
              '「나 최근에 당근 위주의 요리를 많이 배웠거든!」',
              2,
            );
            await era.input();
            await tachyon.say_and_wait('………………');
            era.println();
            await era.printAndWait('역시…… 안 되는 걸까?');
            era.println();
            await tachyon.say_and_wait([
              '진작 말하지 그랬나! 이런, 찌고 삶고 볶고 튀기고…… 어떻게 만들어 줄 건가~~ ',
              callname,
              ', 마음껏 실력을 발휘해 보게! 식재료는 부족하지 않나? 더 필요하진 않고?!',
            ]);
            era.println();
            await era.printAndWait([
              '이미 충분하다고 ',
              you.get_colored_name(),
              '은(는) 쓴웃음을 지으며 고개를 저었다.',
            ]);
            await era.printAndWait([
              '음식으로 ',
              tachyon.get_colored_name(),
              '의 주의를 돌릴 수 있어서 다행이었다…… 비록 나중에 음식이 맛없으면 벌로 약을 먹게 되겠지만.',
            ]);
            await era.printAndWait(
              '하지만 나 혼자 약을 먹는 게 학원 전체에 소동이 일어나는 것보다야 낫겠지……',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 당근 수레를 끌고 들뜬 ',
              tachyon.get_colored_name(),
              '과 함께 트레센 학원으로 돌아가며, 길에서도 ',
              tachyon.get_colored_name(),
              '가 만족할 만한 요리를 어떻게 만들지 고민했다.',
            ]);
          }
          break;
        case 4:
          await you.say_as_passer_by_and_wait(
            '店主',
            '1등상, 특대 당근 함박스테이크!',
          );
          era.println();
          await era.printAndWait('에……?');
          await era.printAndWait('1등상이 고작 이거야?');
          era.println();
          await era.printAndWait(
            '……그렇군. 유명 셰프가 만든 거라는데 들어 본 적 없는 이름이다.',
          );
          await era.printAndWait(
            '기분 탓일까. 왠지 2등상인 당근 한 수레보다 가치가 떨어지는 것 같은데.',
          );
          era.println();
          await tachyon.say_and_wait([
            '이런, 무려 1등상이라니…… 그런데 ',
            callname,
            ', 자네 표정이 별로 기뻐 보이지 않는군?',
          ]);
          era.printButton('「어차피 이 경품은 타키온밖에 못 먹잖아.」', 1);
          era.printButton('「왠지…… 2등상보다 못한 느낌이라서.」', 2);
          await era.input();
          await tachyon.say_and_wait(
            '호오? ……음, 어떤 의미에서는 확실히 그렇군. 유명 셰프가 만들었든 어쨌든 결국은 당근과 고기일 뿐이니까.',
          );
          await tachyon.say_and_wait(
            '원재료의 측면에서 보면 가치가 2등상인 당근 더미보다 낮은 건 사실이지.',
          );
          if (love >= 75) {
            await tachyon.say_and_wait(
              '그럼 내가 여기에 합당한 가치를 부여해 주도록 하지……',
            );
            era.println();
            await era.printAndWait([
              '말을 마치고 ',
              tachyon.get_colored_name(),
              '은(는) 경품인 함박스테이크를 받아 들었다.',
            ]);
            await era.printAndWait([
              '딱 한 입 크기로 잘라 ',
              you.get_colored_name(),
              '의 입가로 가져왔다.',
            ]);
            await era.printAndWait('어, 이건……');
            era.println();
            await tachyon.say_and_wait(
              '사랑하는 이와 함께 먹는 함박스테이크…… 자, 이제 가치가 좀 올라갔나?',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '이(가) 대답할 틈도 없이 ',
              tachyon.get_colored_name(),
              '은(는) 함박스테이크를 ',
              you.get_colored_name(),
              '의 입안으로 밀어 넣었다.',
            ]);
            await era.printAndWait([
              '다 씹고 나서야 ',
              tachyon.sex,
              '은(는) 포크를 뗐다.',
            ]);
            era.println();
            await tachyon.say_and_wait('이제 자네 차례라네, 여보❤');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 입을 벌리고 ',
              you.get_colored_name(),
              '이(가) 먹여 주기를 기다렸다.',
            ]);
            await era.printAndWait(['두 사람은 그 함박스테이크를 사이좋게 나눠 먹었다.']);
          } else if (love >= 50) {
            await tachyon.say_and_wait('……무엇보다 자네가 만든 것보다 맛없어 보이는군.');
            era.println();
            await era.printAndWait('에……?');
            await era.printAndWait(
              '칭찬은 고맙지만 내 요리 실력이 저런 유명 셰프를 이길 리가 없는데……',
            );
            era.println();
            await tachyon.say_and_wait(
              '후후…… 중요한 건 영양도 맛도 아니라네. 바로 만드는 이의 정성이지…… 이거, 자네가 내게 가르쳐 준 것 아닌가?',
            );
            era.println();
            await era.printAndWait([
              '말을 마치고 ',
              tachyon.get_colored_name(),
              '은(는) 경품인 함박스테이크를 받아 들었다.',
            ]);
            await era.printAndWait([
              '딱 한 입 크기로 잘라 ',
              you.get_colored_name(),
              '의 입가로 가져왔다.',
            ]);
            await era.printAndWait('어, 이건……');
            era.println();
            await tachyon.say_and_wait(
              '하지만 자네 말도 일리가 있군…… 비교 대상이 없으면 확신할 수 없지. 과학은 엄격해야 하니까 말이야.',
            );
            await tachyon.say_and_wait(
              '그러니…… 기술은 좋지만 사랑이 없는 요리와 기술은 좀 부족해도 사랑이 담긴 요리. 과연 어느 쪽이 더 우수한지 확인해 보자고❤',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 함박스테이크를 부드럽게 ',
              you.get_colored_name(),
              '의 입에 넣어 주었다.',
            ]);
            await era.printAndWait('본인도 작은 조각을 하나 입에 넣었다.');
            era.println();
            await tachyon.say_and_wait([
              '비교를 위해 돌아가면 자네가 다시 한 번 만들어 주게나, ',
              callname,
              '❤️',
            ]);
            era.println();
            await era.printAndWait([tachyon.sex, '의 미소 앞에서는……']);
            await era.printAndWait(
              '자신이 정말 실험용 모르모트가 된 것처럼 느껴져 그저 하라는 대로 할 수밖에 없었다.',
            );
          } else if (cook_times === 0) {
            await tachyon.say_and_wait(
              '하지만 나만 먹을 수 있다는 생각은 틀렸네.',
            );
            era.println();
            await era.printAndWait([
              '말을 마치고 ',
              tachyon.get_colored_name(),
              '은(는) 경품인 함박스테이크를 받아 들었다.',
            ]);
            await era.printAndWait([
              '딱 한 입 크기로 잘라 ',
              you.get_colored_name(),
              '의 입가로 가져왔다.。',
            ]);
            await you.say_and_wait('어, 이건……');
            era.println();
            await tachyon.say_and_wait(
              '당근의 영양 성분은 인간에게도 상당히 유익하다네. 함박스테이크 속의 동물성 단백질도 마찬가지고……',
            );
            await tachyon.say_and_wait([
              '오히려 인간의 소화 속도를 생각하면 육류에 대한 요구량은 ',
              tachyon.uma_sex_title,
              '보다 훨씬 높지.',
            ]);
            era.println();
            await era.printAndWait(
              '아니, 그러니까…… 이걸 나보고 먹으라는 소리야?',
            );
            era.println();
            await tachyon.say_and_wait('쯧…… 자, 착하지. 아~~');
            era.println();
            await era.printAndWait('서, 설마 『아~』까지……');
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 감동하며 함박스테이크를 먹었다……',
            ]);
            era.drawLine();
            era.printButton('「…………언제」', 1);
            await era.input();
            await era.printAndWait('그냥 넘어가는 법이 없구나.');
            await era.printAndWait('하지만…… 미인계에는 당해 낼 도리가 없다.');
            await era.printAndWait([
              '상대가 바로 ',
              you.get_colored_name(),
              '에게 먹여 주려고 하는 절세미인 ',
              tachyon.teen_sex_title,
              '이라면 더더욱.',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 몸 여기저기에서 새어 나오는 짙푸른 빛을 보며 어이없다는 듯 물었다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '흥. 내 투약 기술을 자네 따위가 간파할 수 있다면 매일 정성을 다해 ',
              call_25,
              '에게 내가 조제한 약을 먹이던 보람이 없지 않겠나.',
            ]);
            await tachyon.say_and_wait(
              '남은 건…… 자네가 다 먹게나. 난 이런 것에는 별로 관심 없으니까.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '……왠지 모르겠지만 ',
              tachyon.sex,
              '는 식사에 관한 기준이 굉장히 낮았다.',
            ]);
            await era.printAndWait('기준이 낮다기보다는…… 아예 아무런 요구 사항이 없는 것 같았다.');
            await era.printAndWait('그저 영양만 보충할 수 있다면 무엇이든 상관없는 것이다.');
            await era.printAndWait(
              '하지만…… 어쨌든 지금은 아직 새해 연휴니까…… 조금은 기어올라도 괜찮겠지.',
            );
            era.printButton('「……진짜 맛있는데, 타키온도 한 입 먹어 볼래?」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '됐네. 사양하는 게 아니라 정말 필요 없어서 그러는 거야.',
            );
            era.printButton(
              '「그래도 타키온 추첨권으로 뽑은 거니까 직접 맛보지 않으면 불공평하잖아.」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait('……하긴 그렇군. 그럼 한 입만 먹어 보지.');
            era.println();
            await era.printAndWait([
              '정신을 차려 보니 ',
              you.get_colored_name(),
              '의 포크에 꽂혀 있던 고기는 이미 ',
              tachyon.get_colored_name(),
              '이(가) 번개 같은 속도로 물어 간 뒤였다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '됐네, 확실히 맛은 있군. 이 정도면 됐어.',
            );
            era.println();
            await era.printAndWait('……뭐야, 왜 이렇게 빨라!?');
            await era.printAndWait('입을 움직이는 것조차 제대로 보이지 않았는데……!');
            await era.printAndWait([
              '……',
              tachyon.sex,
              '가 정말 식사를 즐기기 시작한다면 식탁 위에서는 누구도 상대할 수 없겠지.',
            ]);
            await era.printAndWait([
              '어째서인지 ',
              you.get_colored_name(),
              '은(는) 그런 엉뚱한 생각을 하기 시작했다.',
            ]);
          } else {
            await tachyon.say_and_wait('그럼…… 내가 여기에 합당한 가치를 부여해 주지.');
            era.println();
            await era.printAndWait([
              '말을 마치고 ',
              tachyon.get_colored_name(),
              '은(는) 경품인 함박스테이크를 받아 들었다.',
            ]);
            await era.printAndWait([
              '딱 한 입 크기로 잘라 ',
              you.get_colored_name(),
              '의 입가로 가져왔다.',
            ]);
            await era.printAndWait('어, 이건……');
            if (relation <= 225) {
              await tachyon.say_and_wait([
                'G1에 출전하는 ',
                tachyon.uma_sex_title,
                '、',
                tachyon.get_colored_name(),
                '이(가) 직접 먹여 주는 함박스테이크라네. 이 정도면 가치가 좀 생겼나?',
              ]);
            } else {
              await tachyon.say_and_wait([
                '超絶美',
                tachyon.teen_sex_title,
                '이자 G1에 출전하는 ',
                tachyon.uma_sex_title,
                '인 ',
                tachyon.get_colored_name(),
                '이(가) 직접 먹여 주는 함박스테이크라네. 이 한 입을 위해 자네라면 얼마를 낼 텐가?',
              ]);
            }
            era.println();
            await tachyon.say_and_wait('자, 착하지. 아~~');
            era.println();
            await era.printAndWait('서, 설마 『아~』까지……');
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 감동하며 함박스테이크를 먹었다……',
            ]);
            era.drawLine();
            era.printButton('「…………언제」', 1);
            await era.input();
            await era.printAndWait('그냥 넘어가는 법이 없구나.');
            await era.printAndWait('하지만…… 미인계에는 당해 낼 도리가 없다.');
            await era.printAndWait([
              '상대가 바로 ',
              you.get_colored_name(),
              '에게 먹여 주려고 하는 절세미인 ',
              tachyon.teen_sex_title,
              '이라면 더더욱.',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 몸 여기저기에서 새어 나오는 짙푸른 빛을 보며 어이없다는 듯 물었다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '흥. 내 투약 기술을 자네 따위가 간파할 수 있다면 매일 정성을 다해 ',
              call_25,
              '에게 내가 조제한 약을 먹이던 보람이 없지 않겠나.',
            ]);
            await tachyon.say_and_wait('남은 건…… 야! 내 것도 좀 남겨 두게나!');
            era.println();
            await era.printAndWait([
              '슬픔과 분노를 식욕으로 승화시킨 ',
              you.get_colored_name(),
              '은(는) 필사적으로 ',
              tachyon.get_colored_name(),
              '과(와) 남은 함박스테이크를 두고 쟁탈전을 벌였다.',
            ]);
            await era.printAndWait(
              '…………인정하긴 싫지만 유명 셰프의 실력이 나보다 훨씬 좋긴 하네.',
            );
          }
          break;
        case 5:
          if (love >= 75) {
            await tachyon.say_and_wait('……그래, 바로 지금이야.');
            await tachyon.say_and_wait('돌려!');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '을(를) 믿는 ',
              you.get_colored_name(),
              '은(는) ',
              tachyon.sex,
              '의 말이 끝나자마자 즉시 추첨기의 손잡이를 돌렸다.',
            ]);
            await you.say_as_passer_by_and_wait('店主', '特等！ 温泉旅行券！');
            era.println();
            await era.printAndWait('상점가 아저씨가 힘차게 종을 흔들었다.');
            await era.printAndWait('오늘의 최고 경품이 주인을 찾았음을 선포했다.');
            era.println();
            await tachyon.say_and_wait(
              '오호라…… 온천 여행권이라니, 꽤 괜찮아 보이는데.',
            );
            era.println();
            await era.printAndWait('기한은…… 내년 4월까지였다.');
            await era.printAndWait('이거라면 URA 파이널스가 끝난 뒤가 딱 적당한 시기였다.');
            era.printButton('「타키온, 같이 갈래?」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '그거야 당연하지. 아니, 애초에 나 말고 또 누가 자네와 함께 가겠나?',
            );
            era.println();
            await era.printAndWait('참으로 가차 없는 대답이었다.');
            era.println();
            await tachyon.say_and_wait(
              '농담일세. 이 온천권은 지난 3년 동안 자네가 보여 준 노력에 대한 보답이라고 생각해 주게나…… 모든 곤란과 부상을 이겨낸 끝에 맞이하는…… 우리의 해피 엔딩이지.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '의 귓가에 밀착해 속삭였다.',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 입에서 나왔다고는 믿기지 않는 다정한 말에 ',
              you.get_colored_name(),
              '은(는) 무심코 놀라 고개를 들려 했지만……',
            ]);
            era.println();
            await tachyon.say_and_wait('움직이지 말게.');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 여전히 ',
              you.get_colored_name(),
              '의 곁에 딱 붙은 채로, 두 사람은 추첨함 앞에서 다정하게 이야기를 나누었다.',
            ]);
            await era.printAndWait('이상하게도…… 왜 추첨함 앞을 떠나려 하지 않는 걸까……?');
            era.println();
            await tachyon.say_and_wait(['자, 이제 갈까, ', callname]);
            era.println();
            await era.printAndWait('어라.');
            await era.printAndWait([
              '줄곧 곁에 머물던 온기가 갑자기 사라지자 ',
              you.get_colored_name(),
              '은(는) 서둘러 ',
              tachyon.get_colored_name(),
              '의 뒤를 따라 상점가를 빠져나갔다.',
            ]);
            await era.printAndWait([
              '상점가를 벗어난 ',
              tachyon.get_colored_name(),
              '이(가) 왼쪽 눈에서 무언가를 빼내는 모습이 보였다.',
            ]);
            era.println();
            await tachyon.say_and_wait('후우, 이제 좀 살 것 같군.');
            era.println();
            await era.printAndWait([
              '…………？',
              tachyon.get_colored_name(),
              '의 눈이……?',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 자세히 살폈다. 원래 ',
              tachyon.sex,
              '의 붉은 그라데이션 눈동자 중 한쪽만 어딘가 미묘하게 옅어 보였다.',
            ]);
            era.println();
            await you.say_and_wait('……컬러 렌즈?');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이(가) 그런 것을 착용할 사람이라고는 생각하기 어려웠다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '후후…… 이건 샤커 군과 내가 공동 개발한 물건이라네.',
            );
            await tachyon.say_and_wait(
              '우선 내 약물 처리를 통해 이 렌즈에 비생물 투시 능력을 부여했지.',
            );
            await tachyon.say_and_wait(
              '그리고 샤커 군이 관측된 정보를 바탕으로 운동 궤적을 분석하는 기능을 넣었어. 본래는 레이스 중 주자들의 움직임을 분석하기 위한 용도였지만.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이(가) 쉴 새 없이 설명을 늘어놓는 통에 ',
              you.get_colored_name(),
              '은(는) 머리가 어질어질했다.',
            ]);
            await era.printAndWait('하지만……');

            era.printButton('「설마…… 이게 그 투시 렌즈 같은 거야?」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '뭐, 비슷하네…… 다만 약간의 결함이 있어서 말이야.',
            );
            await tachyon.say_and_wait(
              '예를 들면 이걸 착용하고 있을 때는 왜곡된 시야에 익숙해지기 전까지 한 발짝도 걷기 힘들다거나,',
            );
            await tachyon.say_and_wait(
              '멋모르고 남용했다간 과도한 정보량 때문에 뇌가 혼수상태에 빠질 수도 있지.',
            );
            await tachyon.say_and_wait(
              '그래서 샤커 군과 나는 이 물건을 봉인해 두기로 했었네만, 후후, 설마 여기서 도움이 될 줄이야……',
            );
            era.println();
            await era.printAndWait('도움이 됐다니……?');
            await era.printAndWait('透視＋軌道解析……');
            await era.printAndWait('움직이지 못하니까 경품 추첨함 앞에 서 있었던 것……');
            await you.say_and_wait('아.');
            era.printButton('「방금 그 뽑기!」', 1);
            era.printButton('「타키온, 설마 네가……」', 2);
            await era.input();
            await tachyon.say_and_wait('쉿.');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '는 입술 위에 손가락을 올리며 조용히 하라는 신호를 보냈다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '내가 말하지 않았나? 이건 자네에게 주는 선물이라고.',
            );
            era.println();
            await tachyon.say_and_wait('신령님도 아니고 정체 모를 운도 아니야.');
            await tachyon.say_and_wait([
              '私、',
              tachyon.get_colored_name(),
              '이(가) 내 사랑하는 이에게 보내는 새해 선물이라네.',
            ]);
            await tachyon.say_and_wait([
              '새해 복 많이 받게나, ',
              you.get_colored_actual_name(),
              ' 君',
            ]);
            era.println();
            await era.printAndWait(
              '이전까지 새해라고 하면 머릿속에 수많은 잊지 못할 추억들이 떠오르곤 했다.',
            );
            await era.printAndWait(
              '가족이 둘러앉은 화롯가, 단란한 모임, 명절 음식 혹은 TV에서 틀어 주는 지루한 신춘 프로그램 같은 것들 말이다.',
            );
            await era.printAndWait(
              '하지만 오늘부터는 새해라는 단어를 들으면 가장 먼저 떠오르는 이미지는 단 하나뿐이게 될 것이다.',
            );
            await era.printAndWait([
              '점점 밝아지는 가로등 아래에서, 마치 장난에 성공한 새끼 고양이처럼 웃고 있는 ',
              tachyon.sex,
            ]);
            era.println();
            await era.printAndWait('그리고 그 입맞춤의 맛.');
            await era.printAndWait([
              '그 입맞춤은 감미로운 맛이었다.',
              tachyon.get_colored_name(),
              '이(가) 타 주는 홍차보다도 달콤했다.',
            ]);
          } else {
            await you.say_as_passer_by_and_wait('店主', '特等！ 温泉旅行券！');
            era.println();
            await era.printAndWait('상점가 아저씨가 힘차게 종을 흔들었다.');
            await era.printAndWait('오늘의 최고 경품이 주인을 찾았음을 선포했다.');
            era.println();
            await era.printAndWait('특별상에 당첨되었다!');
            await era.printAndWait('무려 2인용 온천 여행권이다.');
            era.println();
            await tachyon.say_and_wait(
              '오호라…… 온천 여행권이라니, 꽤 괜찮아 보이는데.',
            );
            era.println();
            await era.printAndWait('기한은…… 내년 4월까지였다.');
            await era.printAndWait('이거라면 URA 파이널스가 끝난 뒤가 딱 적당한 시기였다.');
            era.println();
            if (love >= 50) {
              era.printButton('「타키온, 같이 가자!」', 1);
              await era.input();
              await tachyon.say_and_wait('흐음…… 같이 가겠다고?');
              await tachyon.say_and_wait([
                callname,
                ', 자네는 보통 『함께 온천 여행을 가는』 사람들이 어떤 관계인지 이해하고 나에게 권유하는 건가?',
              ]);
              era.println();
              await era.printAndWait('보통 함께 온천 여행을 가는 사람들은……');
              era.printButton('夫婦', 1);
              era.printButton('恋人', 2);
              era.printButton(
                `「……보통 ${tachyon.uma_sex_title}와 트레이너라면 원래 자주 가는 거 아니야?」`,
                3,
              );
              switch (await era.input()) {
                case 1:
                  await era.printAndWait('보통이라면…… 신혼부부겠지.');
                  await era.printAndWait('신혼여행으로 온천에 가는 경우가 꽤 많지 않은가.');
                  await you.say_and_wait(
                    '……나와 타키온이, 신혼부부……?',
                    true,
                  );
                  break;
                case 2:
                  await era.printAndWait('아마도…… 연인이겠지.');
                  await era.printAndWait(
                    '그 정도로 친밀한 관계가 아니라면 보통 둘이서만 온천 여행을 가지는 않을 테니까.',
                  );
                  await you.say_and_wait('나와 타키온이…… 연인인가?', true);
                  break;
                case 3:
                  await era.printAndWait([
                    '……아니, 보통 ',
                    tachyon.uma_sex_title,
                    '와 트레이너는 원래 자주 가는 거 아닌가?',
                  ]);
                  await era.printAndWait([
                    '해마다 4월이면 많은 선배들이 담당 ',
                    tachyon.uma_sex_title,
                    '와 함께 떠나곤 했다…… 게다가 다들 상점가에서 당첨된 것 같던데, 정말 신기한 일이다.',
                  ]);
                  await era.printAndWait(
                    '하지만…… 역시 단둘이서 온천 여행을 가는 건 조금 이상하게 보일지도 모르나……?',
                  );
                  era.println();
                  await tachyon.say_and_wait([
                    '그렇다면 자네는 그때 우리가 어떤 관계가 되어 있길 바라나?',
                    callname,
                    '……내년 4월이라, 후후, 기대되는군.',
                  ]);
                  era.println();
                  await you.say_and_wait(
                    '내년 4월, 나와 타키온의 관계라……',
                    true,
                  );
              }
            } else if (relation >= 225) {
              await tachyon.say_and_wait(
                '음…… 같이 가겠나? 실험 장소로서는 확실히 나쁘지 않은 곳이군.',
              );
              await tachyon.say_and_wait(
                '온천 여관이라는 건 그거지? 어떤 돌발 사고가 일어나서 설령 사람이 죽는다 해도 전혀 이상하지 않은 장소 말일세.',
              );
              await tachyon.say_and_wait(
                '그런 곳이라면 내가 무해한 실험을 조금 한다 해도 큰 문제는 없겠지……',
              );
              era.printButton('「그게 아니야」', 1);
              await era.input();
              await era.printAndWait('실험이나 연구를 위한 장소로 가려는 게 아니었다.');
              await era.printAndWait(
                '3년 동안의 이인삼각이 끝난 뒤에 갖는 두 사람만의 휴식이었다.',
              );
              era.printButton(
                '「훈련도 아니고 실험도 아닌, 그저 순수한 휴식……은 안 될까?」',
                1,
              );
              await era.input();
              await tachyon.say_and_wait('……내년 4월인가.');
              await tachyon.say_and_wait(
                '후후, 그렇다면 모르모트 군에 대한 포상으로 해 두지.',
              );
              await tachyon.say_and_wait(
                '내년 4월, 우리의 꿈이 일단락되었을 때…… 그때까지 자네가 여전히 내 곁에 남아 있다면 함께 가도록 하세.',
              );
              era.printButton('「응!」', 1);
              await era.input();
              await tachyon.say_and_wait('하지만 포상을 약속했으니……');
              await tachyon.say_and_wait(
                '남은 1년 동안 자네도 제대로 힘내야 할 거야.',
              );
              await tachyon.say_and_wait([
                '고분고분 실험을 받고, 매일 밥을 해 주고, 또 ',
                call_25,
                '이(가) 도망치려 하면 붙잡아서 내 실험실로 데려오는 것까지……',
              ]);
              era.println();
              await era.printAndWait('잠깐 잠깐! 마지막 건 분명히 무리라고!');
              era.println();
              await era.printAndWait([
                '농담을 주고받으며 두 사람은 트레센 학원으로 돌아갔다.',
              ]);
              await era.printAndWait('내년 4월이라…… 정말 기대되는군.');
            } else {
              await era.printAndWait([
                '하지만……',
                tachyon.get_colored_name(),
                '이(가) 나와 같이 가 주려 할까?',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'URA 파이널스가 끝난 뒤의 온천 여행이라…… 괜찮은 제안이군.',
              );
              era.println();
              await era.printAndWait('오? 의외로 흔쾌히 수락했다.');
              await era.printAndWait('번거롭다며 거절할 줄 알았는데 말이다.');
              era.println();
              await tachyon.say_and_wait(
                '온천 여관이라는 건 그거지? 어떤 돌발 사고가 일어나서 설령 사람이 죽는다 해도 전혀 이상하지 않은 장소 말일세. 그런 곳이라면 내가 무해한 실험을 조금 한다 해도 큰 문제는 없겠지……',
              );
              era.println();
              await era.printAndWait('…………그냥 지금 당장 온천권을 돌려주고 올까?');
            }
          }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_win
  race_end_win: (() => {
    const title = '레이스 승리';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {boolean} do_sex 興奮したままの行為か（男/フタナリトレーナー×女/フタナリタキオンのみ）
     */
    const f = async (tachyon, you, callname, do_sex) => {
      era.printButton('「최고의 달리기였어!」', 1);
      era.printButton('「아직 개선할 여지가 있어」', 2);
      const ret = await era.input();
      if (do_sex) {
        await era.printAndWait('ドン');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' が称賛も激励も言い終える前に、',
          tachyon.get_colored_name(),
          ' は詰め寄り、',
          you.get_colored_name(),
          ' を壁へ押し付けた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'はあ……はあ……ごめんなさい、',
          callname,
          '……走りすぎて、興奮が止まらなくて……身体、少し貸してくださいまし',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は右手で壁を押さえ、',
          you.get_colored_name(),
          ' の逃げ道を塞ぎ、左膝を上げて ',
          you.get_colored_name(),
          ' の股間に押し当てた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '大丈夫……大丈夫……一度だけ……少しだけでいい……',
        );
        era.println();
        await era.printAndWait([
          '誰を説得しているのかわからない言葉が続く。',
          you.get_colored_name(),
          ' に逃げる気がないと見極めると、',
          tachyon.sex,
          'はゆっくり蹲り、震える両手で ',
          you.get_colored_name(),
          ' のズボンを下ろした',
        ]);
        era.println();
        await era.printAndWait('ぴん');
        await era.printAndWait([
          '一日こもった熱気と一緒に、肉棒が ',
          tachyon.get_colored_name(),
          ' の顔へ弾ける',
        ]);
        await era.printAndWait(
          '狂っていた両目が、突然焦点を失い、微かに震える生殖器しか映さなくなる',
        );
        await era.printAndWait(
          '猫じゃらしを見た子猫のように、揺れるそれを追い始める',
        );
        await era.printAndWait(
          'だがレースの刺激で発情した身体は、その熟れた匂いを嗅いだ瞬間に力を失い、追えるのは腥い匂いを嗅ぎ続ける鼻だけになった',
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            '身体に力の入らない ',
            tachyon.get_colored_name(),
            ' は、かろうじて懇願の声だけを出せた',
          ]);
          await era.printAndWait('感情では無関心、むしろ嫌悪するこの人');
          await era.printAndWait('身体では渇望し、満たされたいと願うこの人');
          await era.printAndWait('ついには、身体の渇望が感情の冷淡を上回った');
          era.println();
          await era.printAndWait('幸い、相手は悪い意味で期待を裏切らなかった');
          await era.printAndWait([
            'やはり、担当の',
            tachyon.uma_sex_title,
            'に手を出すことを躊躇わない屑だ',
          ]);
          era.println();
          await era.printAndWait([
            '一歩前に出たトレーナーの肉棒で、涎の出るほど飢えた口を満たされながら、',
            tachyon.get_colored_name(),
            ' は幸福にそう思った',
          ]);
        }
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の幸福そうな顔を見て、',
          you.get_colored_name(),
          ' も続けたい気持ちはある……',
        ]);
        era.println();
        era.printButton('「……このあと Winning Live だ」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          'は睨んだが、',
          you.get_colored_name(),
          ' は無情にも肉棒を',
          tachyon.sex,
          'の口から引き抜いた',
        ]);
        await era.printAndWait([
          '先の',
          tachyon.sex,
          'の計画のためにも、少なくとも競馬場にいるあいだは、',
          tachyon.get_colored_name(),
          ' の名声を傷つけることはできない',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は理性と感性のあいだで揺れつつ、ついに情欲を抑え、振り返らずに控え室へ向かった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はようやく息を吐いた。レースの刺激が、健全な精神的昂ぶりだけでなく、そちら方面にまで及ぶとは……',
        ]);
        await era.printAndWait([
          '今後のレースでも、今日のようなことが起きるのか？ ',
          you.get_colored_name(),
          ' は思わず身震いした',
        ]);
      } else if (ret === 1) {
        if (era.get('relation:32:0') > 225) {
          await tachyon.say_and_wait(
            '그렇지, 그렇지? 후후, 이것이 광속을 뛰어넘는 달리기라네.',
          );
        } else {
          await tachyon.say_and_wait([
            '그저 실험 결과를 검산한 것뿐인데 그렇게 기뻐하다니.',
            callname,
            '자네도 참 천진난만하군.',
          ]);
        }
      } else if (era.get('relation:32:0') > 225) {
        if (Math.random() < 0.5) {
          await tachyon.say_and_wait(
            '쳇…… 반박할 순 없지만, 그래도 좀 더 칭찬해 줘도 되지 않나? 그렇게 열심히 뛰어서 이겼는데.',
          );
        } else {
          await tachyon.say_and_wait([
            '너무하군, ',
            callname,
            '담당 우마무스메가 이겼는데 그런 표정을 누구한테 보여주는 건가. 어서 더 칭찬하게, 얼른～～!',
          ]);
        }
      } else if (Math.random() < 0.5) {
        await tachyon.say_and_wait(
          '흥…… 알고 있네. 쓸데없는 말은 필요 없어.',
        );
      } else {
        await tachyon.say_and_wait(
          '좋아. 새로운 발견이 있었다면 이번 실험도 헛된 건 아니겠지.',
        );
      }
      return [];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sats_sho_win
  sats_sho_win: (() => {
    const title = (tachyon) => [tachyon.uma_sex_title, '의 한계'];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (tachyon, you, callname, sats_sho, toky_yus) => {
      await tachyon.say_and_wait([callname, ' 자네도 보았나?']);
      era.println();
      await era.printAndWait([
        sats_sho,
        '을 마친 ',
        tachyon.get_colored_name(),
        '은 지금까지 받은 것 중 가장 뜨거운 환호를 받았다.',
      ]);
      await era.printAndWait([
        '관객들이 흥분한 이유를 ',
        you.get_colored_name(),
        '도 이해할 수 있었다.',
      ]);
      await era.printAndWait([
        '오늘의 ',
        tachyon.get_colored_name(),
        '이 보여준 모습은 완벽 그 자체였다.',
      ]);
      await era.printAndWait([
        '아니, 만약 ',
        tachyon.uma_sex_title,
        '에게 한계라는 것이 존재한다면, 그것은 바로 오늘의 ',
        tachyon.get_colored_name(),
        '일 것이라고 단언할 수 있었다.',
      ]);
      await era.printAndWait(
        '빛과 같은 속도, 빛과 같은 광채, 그리고 빛과 같이…… 덧없는 느낌이었다.',
      );
      era.println();
      await era.printAndWait('마치 질주가 끝나면 빛처럼 사라져 버릴 것만 같은 주법이었다.');
      await era.printAndWait([
        '결승선을 통과하는 순간, 그 누구도 소리 내지 못했다. 언제나 ',
        tachyon.get_colored_name(),
        '의 실력을 믿어 의심치 않던 당신조차 믿기 힘든 광경이었다.',
      ]);
      await era.printAndWait([
        '그런 주법은 오직 ',
        tachyon.uma_sex_title,
        '라는 생물의 한계라고밖에는 설명할 길이 없었다.',
      ]);
      await era.printAndWait(
        '보는 순간 「아아, 저런 달리는 방식은 그 누구도 뛰어넘을 수 없겠구나」라고 느끼게 만드는 주법이었다.',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        '…… 이것이 바로, 우리가 초월해야 할 한계라네.',
      ]);
      era.println();
      await era.printAndWait('자기 자신을 한계로 정의한다.');
      await era.printAndWait('이 얼마나 오만한 발언인가.');
      await era.printAndWait(
        '하지만 방금 전의 레이스를 본 사람이라면, 그 누구라도 그런 오만에 찬성할 수밖에 없었다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '……그래. 이런 속도를 넘어서야만 비로소 한계를 초월했다고 할 수 있지. 그렇지 않으면 모든 것이 공염불에 불과해.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 이 말을 내뱉으며 대답을 기다리듯 당신의 눈을 똑바로 응시했다.',
      ]);
      await era.printAndWait([
        '이 말의 속뜻을 ',
        you.get_colored_name(),
        '은(는) 이해할 수 있었다.',
      ]);
      await era.printAndWait('너는 저런 속도를 뛰어넘을 자신이 있는가?');
      era.printButton('「당연히 가능해」', 1);
      era.printButton('「타키온이니까, 무조건 가능해」', 2);
      await era.input();
      await era.printAndWait('거의 찰나의 순간이었다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 의중을 파악한 ',
        you.get_colored_name(),
        '은(는) 즉각 대답했다.',
      ]);
      await era.printAndWait('생각할 필요도, 더 고민할 이유도 없었다.');
      await era.printAndWait([
        '눈앞의 이 ',
        tachyon.uma_sex_title,
        '는 한계를 초월할 힘을 지니고 있었다.',
      ]);
      await era.printAndWait('그것은 처음 만났을 때부터 이미 확신하고 있던 사실이었다.');
      await era.printAndWait([
        '지금은 그저 ',
        you.get_colored_name(),
        '과(와) ',
        tachyon.sex,
        '의 목표를 눈앞에 두었을 뿐이었다.',
      ]);
      await era.printAndWait('이미 목표가 보인다면, 그것은 반드시 뛰어넘을 수 있는 것이다.');
      era.println();
      await tachyon.say_and_wait(
        '이렇게나 빠른 반응과 사고…… 아니, 본능인가? 자네는……',
      );
      era.println();
      await era.printAndWait([
        '왠지 모르게 ',
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '을(를) 보며 묘한 표정을 지었다.',
      ]);
      await era.printAndWait([
        '잠시 후, ',
        tachyon.sex,
        '는 마치 무언가 결심한 듯 입을 열었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['그럼, 한번 해보도록 하지, ', callname, '……']);
      await tachyon.say_and_wait('하지만 우선, 다음 레이스부터 확실히 확인해 두세……');
      await tachyon.say_and_wait([
        '현재로서는 ',
        toky_yus,
        '에 출주할 수 있다는 건 확실하니, 그걸 목표로 준비함세, ',
        callname,
      ]);
      era.println();
      await era.printAndWait('……또 시작이군.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에 관해서는 ',
        you.get_colored_name(),
        '이(가) 불안해할 만한 것이 있다면 오직 이것뿐이었다.',
      ]);
      await era.printAndWait('……마치 다음 레이스가 마지막인 것처럼 구는 불확실한 태도.');
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '이라면 분명 이 모든 불확실함을 뛰어넘어 주리라.',
      ]);
      await era.printAndWait([you.get_colored_name(), '은(는) 그렇게 낙관적으로 생각했다.']);
      era.println();
      await era.printAndWait(['다음 레이스는 ', toky_yus, '로 결정되었다!']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] second_chance
  second_chance: (() => {
    const title = 'Eureka';
    /**
     * アグネスタキオンを再度育成する選択で発火
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, love) => {
      await era.printAndWait([
        '今日、',
        tachyon.get_colored_name(),
        '은(는) 갑자기 들뜬 모습으로 트레이너실에 뛰어들어 왔다.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '! 알아냈네(Eureka)…… 드디어 알아냈다고!',
      ]);
      era.println();

      await era.printAndWait([
        '이상하게 귀에 익은 표현을 듣고 ',
        you.get_colored_name(),
        '은(는) 긴장한 채 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다. 하지만 ',
        tachyon.sex,
        '은(는) 목욕 수건 차림도 아니었고, 막 목욕을 마친 것 같지도 않아 조금 안심했다.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '! 찾아냈네…… 최대의 가능성을…… 그래…… 왜 지금까지 깨닫지 못했을까?',
      ]);
      era.println();

      await era.printAndWait('대체 무슨 이야기지?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 멍하니 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait([
        '어째서인지 ',
        you.get_colored_name(),
        '은(는) 갑자기 낯선 감각을 느꼈다.',
      ]);
      await era.printAndWait(
        '그렇게 오랫동안 함께 지내며 이제야 첫 3년을 넘겼는데도.',
      );
      await era.printAndWait('서로에 대해 모르는 게 없어야 할 텐데.');
      await era.printAndWait('왜 말로 표현할 수 없는 거리감이 있는 걸까?');
      era.printButton('「무슨 이야기야?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '이런, 설명하지 않았던가? 원…… 너무 흥분한 나머지 완전히 잊었군.',
      );
      await tachyon.say_and_wait('뭐, 간단히 말하면———— 평행세계일세.');
      await tachyon.say_and_wait(
        '시간을 큰 강에 비유한다면, 그 강에는 다양한 지류가 있다네.',
      );
      await tachyon.say_and_wait(
        '그 지류 대부분은 아주 가늘어서 하나의 강으로 자라지 못하지.',
      );
      await tachyon.say_and_wait(
        '하지만…… 특정 조건에서는 강이 어떤 지점에서 커다란 갈래를 만들어 내네. 그 갈림길이 바로 이른바 『가능성』일세.',
      );
      await tachyon.say_and_wait(
        '그렇게 갈라진 물줄기도 강이 되어 흐르지. 새로 생겨난 그 지류가 바로 평행세계라는 존재라네.',
      );
      era.println();

      await era.printAndWait('平行世界');
      await era.printAndWait('SF나 판타지에서 흔히 볼 수 있는 소재다.');
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '이(가) 그것을 믿을 줄은 몰랐다.',
      ]);
      era.printButton('「하지만 결국 진위 여부를 확인할 사람은 없잖아?」', 1);
      await era.input();

      await tachyon.say_and_wait('그래…… 그 말이 맞네.');
      await tachyon.say_and_wait(
        '과학은 신중하게 검증해야 하니까…… 가설이 그렇다 해도 평행세계의 존재를 어떻게 증명할 것인가……',
      );
      await tachyon.say_and_wait(
        '어떻게 증명하지…… 역시 세계를 넘나들면서도 원래의 기억을 잃지 않는 사람이 필요하겠군. 대체 그런 사람이 어디 있단 말인가…… 참으로 고민이네.',
      );
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 이야기하면서 몇 번이나 ',
        you.get_colored_name(),
        '쪽으로 시선을 던졌다.',
      ]);

      era.printButton('「……」', 1);
      era.printButton('「무슨 뜻이야?」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait([
          '후후…… 무슨 말인지 잘 알고 있지 않은가, ',
          callname,
          '……아니면 다른 호칭으로…… 아니, 그만두지. 다른 세계에서는 누구든 이곳에서는 내 ',
          callname,
          '일 뿐이네. 그 외의 신분은 없지.',
        ]);
      } else {
        await tachyon.say_and_wait([
          '이런? 정말 모르겠다는 건가…… 아니면 시치미를 떼는 건가? 뭐 좋네. 이곳에서 자네는 나의 ',
          callname,
          '일세. 다른 신분은 없다네.',
        ]);
      }
      era.println();

      await tachyon.say_and_wait(
        '하지만 궁금하군…… 다른 세계에서 다른 가능성을 지닌 아그네스 타키온은 어떤 모습일까…… 이미 한계를 넘은 자도, 한자리에 갇혀 가능성의 문턱에서 멈춘 자도 있겠지……',
      );
      await tachyon.say_and_wait([
        callname,
        ', 기록은 반드시 제대로 남기게. 이번 출장의 연구 과제일세.',
      ]);
      era.println();

      await you.say_and_wait('……응?', true);
      await era.printAndWait('잠깐, 무슨 뜻이지?');
      await era.printAndWait('아까부터 알아들을 수 없는 이야기뿐이다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 원래 혼잣말이 잦지만 오늘은 정도가 심하다.',
      ]);

      era.printButton(`「타키온?」`, 1);
      await era.input();

      await tachyon.say_and_wait('그리고———— 이런, 시간이 된 모양이군.');
      era.println();

      await era.printAndWait('時間？');
      await era.printAndWait('무슨 시간?');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 뒤돌아보자 모든 것이 사라져 있었다.',
      ]);
      await era.printAndWait('새하얀 공백만이 남았다.');
      await era.printAndWait('창백한 공간 앞에 오래되고 깊은 색의 오동나무 문 하나가 있었다.');
      await era.printAndWait([
        '어디선가 본 듯하다. 형형색색의 빛을 밟고 있던 ',
        tachyon.uma_sex_title,
        '이(가) 문에서 뛰쳐나오던 광경을.',
      ]);
      await era.printAndWait([
        '돌아보니 ',
        tachyon.get_colored_name(),
        '은(는) 어느새 사라지고, 공간에는 ',
        you.get_colored_name(),
        '와(과) 눈앞의 문만 남아 있었다.',
      ]);
      await era.printAndWait([
        '공간에는 아직도 ',
        tachyon.get_colored_name(),
        '의 마지막 말이 남아 있었다.',
      ]);
      era.println();

      if (love < 50) {
        await tachyon.say_and_wait(
          '실험 데이터는 절대로 잊지 말게나!',
        );
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 열에 들뜬 목소리가 ',
          you.get_colored_name(),
          '의 귓가에 맴돌았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 연구에 미쳐 버린 ',
          tachyon.sex,
          '의 얼굴을 본 것만 같았다.',
        ]);
      } else if (love < 90) {
        await tachyon.say_and_wait('실험 데이터는 반드시 가져와 주게나.');
        era.println();

        await era.printAndWait([
          tachyon.sex,
          '의 마지막 말에 ',
          you.get_colored_name(),
          '은(는) 잠시 멈춰 섰다.',
        ]);
        await era.printAndWait([
          '겉으로는 ',
          tachyon.sex,
          '의 실험 데이터에 대한 열정이었다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '은(는) 또 다른 의미를 읽어 냈다.',
        ]);
        await tachyon.say_and_wait('반드시…… 돌아와 주게나.', true);
      } else {
        await tachyon.say_and_wait([
          '고민이로군…… 저 세계의 나 역시 분명 ',
          callname,
          '을(를) 좋아하게 되겠지. 사랑의 경쟁자가 늘어나겠구먼.',
        ]);
        era.println();

        await era.printAndWait('마지막 순간까지 그런 사소한 농담이라니.');
        await era.printAndWait('왜냐하면…… 그 외의 것은 더 이상 설명할 필요가 없으니까.');
        await era.printAndWait([
          '실험 데이터라고? 연인으로서 ',
          tachyon.sex,
          '의 호기심을 채워 주지 않을 이유가 없다.',
        ]);
        await era.printAndWait([
          '반드시 돌아오라고? ',
          tachyon.sex,
          '이(가) 말하지 않아도 돌아올 것이다.',
        ]);
        await era.printAndWait(
          '마치 잠깐 장을 보러 나가는 평범한 일상처럼.',
        );
      }
      era.println();

      await era.printAndWait('그럼……');
      await era.printAndWait([you.get_colored_name(), '은(는) 문을 향해 손을 뻗었다.']);
      await era.printAndWait([
        '다음에 만날 상대는 어떤 ',
        tachyon.get_colored_name(),
        '일까?',
      ]);
      if (era.get('cflag:32:育成次数') > 1) {
        const buffer = [
          () =>
            tachyon.say_and_wait([
              '오호?',
              callname,
              ', 또 새로운 가능성을 찾으러 가는 건가?',
            ]),
          () =>
            tachyon.say_and_wait(
              '오호, 돌아왔으면 우선 실험 데이터부터 내놓게!',
            ),
          async () => {
            await tachyon.say_and_wait('그런가…… 나쁘지 않군.');
            await tachyon.say_and_wait('그럼 슬슬 시간이 된 모양이지?');
            await tachyon.say_and_wait(['다음에 또 이야기하세, ', callname]);
          },
        ];
        if (love >= 75) {
          buffer.push(async () => {
            await tachyon.say_and_wait([
              '좋은 아침이네, ',
              callname,
              '. 아니면…… 오랜만이라고 해야 할까?',
            ]);
            await tachyon.say_and_wait(
              '아니, 역시 이렇게 말하지…… 어서 돌아오게나❤️',
            );
          });
        }
        await get_random_entry(buffer)();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] toky_yus_win
  toky_yus_win: (() => {
    const title = '실험 목적의 조정';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} t_call_p アグネスタキオンがダンツフレームを呼ぶ名
     */
    const f = async (tachyon, you, t_call_c, t_call_p) => {
      era.printButton('「타키온! 정말 멋졌어!」', 1);
      await era.input();
      await tachyon.say_and_wait('으음……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 평소처럼 ',
        tachyon.get_colored_name(),
        '의 달리기를 칭찬하려 했다. 하지만 ',
      ]);
      era.println();
      await tachyon.say_and_wait('……실험은 성공하지 못했네.');
      era.println();
      await era.printAndWait('응?');
      await era.printAndWait('그렇게 훌륭하게 달렸는데 실험이 실패라고?');
      era.println();
      await tachyon.say_and_wait([
        t_call_p,
        '……기대는 했지만 ',
        tachyon.sex,
        '의 가능성은 내가 찾던 것과 맞지 않는군…… 역시 ',
        t_call_c,
        '……',
      ]);
      era.println();
      await era.printAndWait([
        '어째서인지 ',
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 이해하기 힘든 말을 중얼거렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……아무튼 지금은 됐네. 이제부터 실험의 핵심에 들어갈 테니.',
      );
      era.println();
      await era.printAndWait([
        '무슨 뜻인지 알 수 없었지만 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 엄격한 표정을 보고 저도 모르게 자세를 바로잡았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '다음 레이스는…… 당분간…… 정할 수 없네…… 생각할 일이 있어서.',
      );
      era.println();
      await era.printAndWait([
        '모호한 말에 ',
        you.get_colored_name(),
        '의 레이스 승리를 기뻐하던 마음은 순식간에 불안으로 바뀌었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] tr_help_tyr
  tr_help_tyr: (() => {
    const title = '악행에 가담하기(?)';
    /**
     * 好感が熱意以上、やる気中〜高、体力<45%、25%で発動、周回あたり1回
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, c_call_t) => {
      await tachyon.say_and_wait([
        callname,
        ', 어째서 본인이 ',
        tachyon.uma_sex_title,
        '의 힘을 이길 수 있다고 생각하는 겐가?',
      ]);
      era.println();
      await era.printAndWait([
        '実験室内、',
        tachyon.get_colored_name(),
        '은(는) 재미있다는 듯 말했다.',
      ]);
      await era.printAndWait('여유로운 말투에서는 절대적인 자신감이 묻어났다.');
      await era.printAndWait('종족과 타고난 자질의 차이에서 비롯된 자신감이었다.');
      era.println();
      await tachyon.say_and_wait(
        '이제 알겠지? 이것이 우리 사이의 차이라네. 그러니 가능하다면……',
      );
      era.println();
      await era.printAndWait([
        '아무리 힘을 주어도 꿈쩍하지 않는 몸. 저렇게 가냘픈 체구인데도—— 이것이 바로 ',
        tachyon.uma_sex_title,
        '라는 생물의 신비로움이다.',
      ]);
      !you.race &&
        (await era.printAndWait('하지만…… 인간인 이상 자존심이라는 것도 있다.'));
      era.println();
      await tachyon.say_and_wait(
        '호오? 아직도 힘이 남았나? 후후, 끈기만은 인정해 주겠네. 다만 칭찬해 줄 수 있는 건 거기까지일세.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은(는) ',
        you.get_colored_name(),
        '의 헛수고를 비웃었다. 하지만 쉽게 싫증을 내는 ',
        tachyon.sex,
        '에게는 ',
        you.get_colored_name(),
        '이(가) 같은 헛수고를 되풀이하는 모습마저 이제 지루해지고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……저항은 그만두게. 알고 있겠지. 이런 저항은 헛수고에 지나지 않는다는 걸. 그러니……',
      ]);
      era.println();
      await era.printAndWait([
        '아아, ',
        tachyon.sex,
        '은(는) 모든 트레이너를 절망의 나락으로 떨어뜨릴 만한 선언을 내뱉었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '아무리 끌어당겨도 나는 절대로 훈련하러 가지 않을 걸세!',
      );
      era.println();
      await era.printAndWait('그러니까 상황은 이렇다.');
      await era.printAndWait([
        '훈련을 거부하는 ',
        tachyon.get_colored_name(),
        '와(과) 오늘만큼은 반드시 훈련시키겠다며 매달리는 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '의자에 매달려 ',
        you.get_colored_name(),
        '에게 끌려가지 않으려는 자, 그리고 허리를 붙잡고 실험대에서 떼어 내려는 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '그렇다. 두 사람 사이에서 벌어지는 지루하기 짝이 없는 줄다리기였다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 포기하게. 인간에게 가능할 리가…… 아얏!?',
      ]);
      era.println();
      await era.printAndWait([
        '우쭐해진 ',
        tachyon.sex,
        '은(는) 잊고 있었던 모양이다.',
        tachyon.sex,
        '의 개조 덕분에 ',
        you.get_colored_name(),
        '은(는) 이미 ',
        tachyon.uma_sex_title,
        '와 동등하지는 않아도 7~8할 정도의 힘을 갖고 있다는 사실을.',
      ]);
      await era.printAndWait([
        '그 괴력에 더해 ',
        tachyon.get_colored_name(),
        '의 오만함과 방심까지 겹친 탓에 ',
        you.get_colored_name(),
        '은(는) 손쉽게 ',
        tachyon.get_colored_name(),
        '의 하체를 통째로 들어 올렸다. 이제 실험대에 매달린 것은 ',
        tachyon.sex,
        '의 두 손뿐이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '자…… 자네를 여전히 얕봤던 모양이군, ',
        callname,
        '……하지만 다시는 이런 방심을 하지 않겠네. 양손만으로 실험대를 붙잡고 있어도 이 아그네스 타키온은 실험실 안에서 무적일세! 크후후…… 크하하하하! ……으악!?',
      ]);
      era.println();
      await era.printAndWait([
        '이 지루한 싸움이 앞으로도 10~20분쯤 이어지리라 생각한 바로 그 순간, 기묘한 일이 일어났다.',
      ]);
      await era.printAndWait([
        '알 수 없는 힘이 작용하기라도 한 듯 ',
        tachyon.get_colored_name(),
        '에게 실험대 전체가 갑자기 마그마처럼 뜨겁게 느껴졌고 ',
        tachyon.sex,
        '은(는) 손을 놓을 수밖에 없었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와(과) ',
        you.get_colored_name(),
        '은(는) 함께 나동그라졌다.',
        tachyon.get_colored_name(),
        '은(는) 일어나자마자 황급히 손을 살펴봤지만 화상 자국 하나 없었다. 마치 착각이었던 것처럼.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '……빨리 ',
        c_call_t,
        '을(를) 데리고 가 줘……',
        tachyon.sex,
        ', 시끄러워……',
      ]);
      era.println();
      await era.printAndWait([
        '말을 꺼낸 이는 ',
        tachyon.get_colored_name(),
        '와 같은 빈 교실을 이용하는, 영적인 기운을 가진 흑갈색 털의 ',
        tachyon.uma_sex_title,
        '、',
        coffee.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        '상대가 어떻게 ',
        tachyon.get_colored_name(),
        '의 손을 놓게 했는지는 알 수 없다. 하지만 ',
        tachyon.sex,
        '가 다시 실험실에 눌러앉을 틈을 주지 않도록 ',
        you.get_colored_name(),
        '은(는) 인사도 뒤로 미루고 ',
        tachyon.get_colored_name(),
        '을(를) 붙잡아 훈련장으로 서둘러 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tr_incm_cmb
  tr_incm_cmb: (() => {
    const title = '불완전 연소';
    /**
     * やる気低、体力<45%、男T×ウマ娘
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('오늘의 목표……는……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 걱정스러운 눈빛으로 ',
        tachyon.get_colored_name(),
        '의 모습을 바라보았다.',
      ]);
      await era.printAndWait([
        '오늘도 ',
        tachyon.sex,
        '는 한계를 돌파하기 위한 실험, 즉 훈련을 계속하고 있었다.',
      ]);
      await era.printAndWait([
        '만약 ',
        tachyon.sex,
        '의 체력이 충분하고 단지 컨디션만 좋지 않다면 ',
        you.get_colored_name(),
        '은(는) 마음을 독하게 먹고 실험을 강행했을 것이다. 때로는 엄격함도 필요한 법이니까.',
      ]);
      await era.printAndWait([
        '만약 ',
        tachyon.sex,
        '의 체력이 부족하더라도 컨디션이 유난히 좋다면 ',
        you.get_colored_name(),
        '은(는) 고민 끝에 ',
        tachyon.sex,
        '가 단련을 계속하도록 독려했을 것이다.',
      ]);
      await era.printAndWait([
        '선배 트레이너들도 말했었다. ',
        tachyon.uma_sex_title,
        '의 마음 곁에 있어 주는 것이 트레이너에게 가장 중요한 일이라고.',
      ]);
      await era.printAndWait('하지만……');
      era.println();
      era.print([
        '체력이 눈에 띄게 떨어지고 정신도 멍한 ',
        tachyon.sex,
        '에게 ',
        you.get_colored_name(),
        '은(는) 정말로 매정해질 수 있을까?',
      ]);
      era.printButton('「……계속하자」(순종 인자 +100)', 1);
      era.printButton('「……쉬자」(컨디션 상승)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 목표와 꿈…… 그리고, 자신의 아주 작은 사심을 위해.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 현재 모습을 보았다.',
        ]);
        await era.printAndWait([
          '汗に濡れた運動着から透ける白い肌と、走行で付いた泥の斑点が鮮やかに対比し、密着した服が',
          tachyon.sex,
          'の肢体をいっそう際立たせる',
        ]);
        await era.printAndWait(
          '丸みを帯びた胸と尻、疲労の吐息と赤らんだ頬。ただのトレーニングなのに、想像が勝手に走る',
        );
        await era.printAndWait(
          '跳ね続けるその丸みを、自分のものとして掌で思うままに揉めたなら',
        );
        await era.printAndWait(
          '普段はそっけないその口を唇と舌で塞ぎ、甘い吐息しか出せなくできたなら',
        );
        await era.printAndWait(
          'トレーナーとして、一人の大人として、許されるはずのない想念だ',
        );
        await era.printAndWait([
          'だが男としての欲望は、',
          you.get_colored_name(),
          ' に反対を許さない',
        ]);
        await era.printAndWait([
          '망설임과 미안한 마음이 들었지만, ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '에게 훈련을 계속하게 했다.',
        ]);
        await era.printAndWait([
          '…… ',
          you.get_colored_name(),
          '의 불순한 속마음을 눈치챈 것인지, 아니면 그저 훈련이 계속되는 것에 불만을 느낀 것인지, ',
          tachyon.get_colored_name(),
          '은 아무 말 없이 ',
          you.get_colored_name(),
          '을(를) 쏘아보았다.',
        ]);
      } else {
        await era.printAndWait(
          '트레이너로서 부조리한 과잉 훈련은 피해야 마땅했다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이 한 바퀴를 다 돌자마자 즉시 멈춰 세웠다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……종료? 실험은 이제 막 시작된 참이 아닌가. 오늘 끝내야 할 비교 실…… 실험…… 아……',
        );
        await era.printAndWait([
          tachyon.sex,
          '의 강경한 말투는 끝까지 이어지지 못하고 나지막한 신음으로 변했다.',
        ]);
        await era.printAndWait(
          '誰が想像しよう。ふくらはぎの内側を軽く押しただけで、あれほど強気な口から、こんな甘い声が出るとは',
        );
        await era.printAndWait([
          '물론 ',
          you.get_colored_name(),
          '의 마사지가 사람을 즉각 흥분시킬 만큼 신비한 것은 아니었다. 이 모든 것의 주원인은 ',
          tachyon.get_colored_name(),
          ' 본인에게 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 이미 힘이 풀려 주저앉은 ',
          tachyon.get_colored_name(),
          '을 부축하며, 살짝 부어오른 ',
          tachyon.sex,
          '의 다리를 가볍게 눌렀다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……ん……やぁ……そんな……だめ……やめて……あん……');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の口から、酔わせるような嬌声が止まない',
        ]);
        await era.printAndWait([
          '白い肌はすでに赤みを帯び、押す場所が変わるたび',
          tachyon.sex,
          'は想像を誘う声を上げる。まるで ',
          you.get_colored_name(),
          ' がしているのは健全なマッサージではなく、もっと邪悪で下品な行為であるかのように',
        ]);
        await era.printAndWait([
          '神聖な競技場でそんなことをすれば、当然人目は集まる。いつの間にか、まだ鍛えている年下の',
          tachyon.uma_sex_title,
          'たちも ',
          tachyon.get_colored_name(),
          ' の嬌声に引き寄せられていた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '待って……',
          callname,
          '……いっ……だめ……人が……ああ～～♡',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は聞こえないふりをして押し続けた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の脚は、',
          you.get_colored_name(),
          ' の想像以上に細く柔らかい。軽く握った感触は、',
          you.get_colored_name(),
          ' に、',
          tachyon.sex,
          'の生殺与奪を握った錯覚を与えた',
        ]);
        await era.printAndWait([
          'ベッドの上で、不服そうにしながらも喘ぎを抑えられない',
          tachyon.sex,
          'を見て、両脚を掴んで開いたなら——その征服感は、世の何物にも勝るだろう',
        ]);
        era.println();
        await tachyon.say_and_wait('……！ そこはだめですわ！');
        era.println();
        await era.printAndWait([
          'いつの間にか熱を帯びた ',
          you.get_colored_name(),
          ' の手は、腿のほうへ上がっていた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が両脚を強く引き抜いた力が、',
          you.get_colored_name(),
          ' の理性を呼び覚ました。目の前の',
          tachyon.teen_sex_title,
          'は、実際には成人男性の三倍の力を持つ',
          tachyon.uma_sex_title,
          'なのだと',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 서둘러 ',
          tachyon.sex,
          '에게 사과했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……아, 알았네…… 오늘은 여기까지만 하지…… 나, 나도 휴식이 필요할 것 같군……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 말을 마치고 급히 실험실로 돌아가려 했지만, 다리에 힘이 풀리며 ',
          you.get_colored_name(),
          '의 품 안으로 쓰러졌다.',
        ]);
        await era.printAndWait([
          '지금의 두 사람은 평범하게 훈련 중인 트레이너와 ',
          tachyon.uma_sex_title,
          '로 보이지 않았다. 연인의 품에 안겨 어리광을 부리는 그녀와 다정하게 ',
          tachyon.sex,
          '을(를) 안아 주는 연인처럼 보였을 것이다.',
        ]);
        await era.printAndWait([
          '남들이 두려워하는 광기 어린 과학자는 지금은 작은 새처럼 ',
          you.get_colored_name(),
          '에게 기대어 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 자신도 모르게 자부심과 뿌듯함을 느꼈다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……실험실로 데려다주게. 지금 당장.');
        era.println();
        await era.printAndWait([
          '하지만 곧바로 이어진 과학자의 날카로운 눈빛은 ',
          you.get_colored_name(),
          '을(를) 다시 고분고분한 모르모트 군으로 되돌렸다.',
        ]);
        await era.printAndWait([
          '그렇게 두 사람은 주변 ',
          tachyon.uma_sex_title,
          '들의 감탄과 부러움 섞인 시선을 받으며 천천히 실험실로 돌아갔다.',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] train
  async train(tachyon, you, callname, call_25, rel, love, moti, stmn_rat) {
    const buffer = [];
    if (love >= 90 && rel > 75 && stmn_rat > 0.45) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '가세나 가세, ',
            callname,
            '~~ 어서 오늘의 실험을 시작하자고.',
          ]);
          await tachyon.say_and_wait(
            '……아니면, 여보라고 불러줘야 하나?❤',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            '상태가 좋냐고? 훗, ',
            callname,
            ', 자네와 함께라면 내 상태는 언제나 최고라네.',
          ]);
          await tachyon.say_and_wait(
            '……물론, 다른 의미의 상태도 말이야❤',
          );
        },
      );
      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            callname,
            '~~ 오늘의 훈련은 대충 넘길 수 없네.',
          ]);
          await tachyon.say_and_wait(
            '왜냐니…… 정말 기초적인 생물학적 상식도 없는 건가?',
          );
          await tachyon.say_and_wait(
            '모체의 단련 부족은 후대의 건강에 영향을 줄 수도 있다고❤',
          );
          await tachyon.say_and_wait(
            '임신 준비를 위해서라도 절대 봐주면 안 되네, 아이 아빠❤',
          );
        });
      }
    } else if (love >= 75 && rel > 75 && (moti >= 0 || stmn_rat > 0.45)) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '…… 고민 중인 게 하나 있네.',
              ]);
              await tachyon.say_and_wait([
                '최근 훈련할 때, ',
                callname,
                ' 자네가 지켜보고 있다는 생각만 해도 유독 힘이 난단 말이지.',
              ]);
              await tachyon.say_and_wait(
                '음…… 사랑의 영향인가. 꽤 괜찮은 연구 과제로군. 다음엔 다양한 애정 표현이라는 변수가 훈련 결과에 어떤 차이를 주는지 실험해 봐야겠어.',
              );
            },
            async () => {
              await tachyon.say_and_wait([
                '그런 말이 있지. 트레이너란 ',
                tachyon.uma_sex_title,
                '를 『길들이는』 존재라고. 그래서 길들인다는 글자(馴)엔 우마무스메 마 자가 들어가는 걸세.',
              ]);
              await tachyon.say_and_wait([
                '그게 사실이라면, 나를 완전히 길들여 버린 트레이너 군은 오늘 내가 뭘 해줬으면 좋겠나?❤',
              ]);
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait(
                '에에~~ 설마 상태가 좋지 않은 연인에게 몸을 써서 자신을 기쁘게 하라고 강요하는 건가?',
              );
              await tachyon.say_and_wait([
                '……',
                callname,
                ', 자네가 정말 이런 사람일 줄은 몰랐네…… 흑흑……',
              ]);
              await tachyon.say_and_wait(
                '후훗, 농담이라네. 뭘 그렇게 진지하게 받아들이나…… 하지만 자네가 조금 심한 장난을 치고 싶다면 나도 마다하지 않겠네❤',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                '훈련? 그보다 실험이나 제대로 하게…… 오늘의 실험도 아직 안 끝났는데 뭘 그리 서두르나.',
              );
              await tachyon.say_and_wait(
                '음? 봐주지 않겠다고? 호오, 방법이 있다면 어디 써보게나. 기대하고 있지.',
              );
              await tachyon.say_and_wait(
                '잠깐…… 공주님 안기라니…… 이건 너무 부끄럽지 않은가……',
              );
            },
          );
        }
      } else if (moti >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              '휴…… 가끔은 이렇게 진지하게 땀을 흘리는 것도 나쁘지 않군. 휴식? 지금 이렇게 상태가 좋은데 쉬는 건 너무 아깝지 않은가.',
            );
            await tachyon.say_and_wait([
              '잠깐, ',
              callname,
              ', 지금 뭐 하는 건가…… 냄새 맡지 말게…… 지금 지독하단 말이야……',
            ]);
            await tachyon.say_and_wait(
              '아, 알았네…… 들어가서 쉴 테니까 제발 그만 맡게나……',
            );
            await tachyon.say_and_wait([
              '계속해도 된다니 무슨 소린가!? ',
              callname,
              ', 자네…… 정말 변태로군.',
            ]);
            await tachyon.say_and_wait(
              '참 나, 하지만 이런 것에 흥분해버리는 나 또한 명백한 변태겠지❤',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '체력이 다해서 휴식이 필요하다고?',
            );
            await tachyon.say_and_wait(
              '……그건 며칠 전에 누군가가 너무 심하게…… 허리가 아직도 아프네만……',
            );
            await tachyon.say_and_wait(
              '어이! ……정말이지, 허리가 아프다는 건 비유일 뿐이네…… 뭘 그리 놀라나…… 그렇게 내가 걱정되는 건가?❤',
            );
          },
          async () => {
            await tachyon.say_and_wait('하아…… 하아……');
            await tachyon.say_and_wait(
              '아무것도 아니네. 스태미나가 다 떨어지려면 아직 멀었어!',
            );
            await tachyon.say_and_wait([
              '하지만…… 정말 못 버티겠다 싶으면 자네가 스태미나를 보충해주길 바라네, ',
              callname,
              '❤️',
            ]);
          },
        );
      }
    } else if (rel > 225 && (moti >= 0 || stmn_rat > 0.45)) {
      if (moti >= 0) {
        if (stmn_rat > 0.45) {
          buffer.push(
            () =>
              tachyon.say_and_wait(
                '빨리 빨리! 시간은 기다려주지 않네! 오늘의 실험 데이터라면 논문을 다섯 편은 써낼 수 있어! 앞으로 두 달간 연구비 걱정은 없겠군!',
              ),
            async () => {
              await tachyon.say_and_wait([
                '훈련? 문제없네. 하지만 조건이 있어. ',
                callname,
                ', 오늘 자네도 같이 뛰는 거네.',
              ]);
              await tachyon.say_and_wait([
                '걱정 말게. 지금 자네의 신체 능력이라면 단시간 폭발력만큼은 ',
                tachyon.uma_sex_title,
                '에게 뒤지지 않는 속도를 낼 수 있을 테니까.',
              ]);
              await tachyon.say_and_wait(
                '괜찮아, 괜찮아. 음, 단시간이라면 아마…… 5초 정도?',
              );
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                '훈련? 또 운동장인가…… 저기, ',
                callname,
                ', 좀 더 재미있는 훈련은 없는 건가?',
              ]);
              await tachyon.say_and_wait(
                '예를 들면…… 약물 러시안 룰렛? 무작위 효과의 약을 다섯 병씩 마시고 레이스를 시작하는 거지!',
              );
              await tachyon.say_and_wait([
                '먼저 협력해 줄 ',
                tachyon.uma_sex_title,
                '를 찾으라고? ',
                call_25,
                '…… 에이, 안 되나?',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                '이보게 ',
                callname,
                ', 냉정하게 분석해 보세. 매일 이렇게 몸을 굴리는 게 연구보다 효율이 좋겠나?',
              ]);
              await tachyon.say_and_wait(
                '뭐? 내 특수 이벤트는 한 번 터져봤자 겨우 +5라고? 도대체 무슨 근거로 훈련이랑 비교하는 거냐고?',
              );
              await tachyon.say_and_wait([
                '아니, 잠깐만, ',
                callname,
                ' 자네 무슨 소리를 하는 건가…… 도통 못 알아듣겠군……',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                '에휴…… 훈련 귀찮은데. 자네가 대신 뛰면 안 되겠나?',
              );
              await tachyon.say_and_wait([
                '착한 아이라고? 이보게 ',
                callname,
                ', 설마 나를 어린애 취급하는 건 아니겠지?',
              ]);
              await tachyon.say_and_wait(
                '뭐…… 가끔 뛰는 것도 나쁘진 않겠지. 아마도.',
              );
            },
          );
        }
      } else if (stmn_rat > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '…… 빛이 보여…… 조금만 더, 조금만 더 노력하면 닿을 수 있어…… 바로 저기에……',
            ]),
          async () => {
            await tachyon.say_and_wait([
              callname,
              '…… 내게…… 약을…… 어서…… 더는 못 버티겠어……',
            ]);
            await tachyon.say_and_wait(
              '아, 그래그래, 바로 이거야. 이게 없으면 살 수가 없지……',
            );
            await tachyon.say_and_wait(
              '음? 말투가 이상하다고? 그냥 평범한 영양제일 뿐인데 뭐가 이상한가? 중독자 같다고? 머릿속에 그런 생각만 가득한 사람이나 그렇게 생각하는 법이라네.',
            );
          },
        );
      }
    } else if (rel > 75) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            () => tachyon.say_and_wait([callname, '! 우리들의 연구를 시작하세!']),
            () =>
              tachyon.say_and_wait(
                '상태 최고! 오늘은 플랑크 시간에 맞먹는 기록을 낼 수 있을 것 같군!',
              ),
            () =>
              tachyon.say_and_wait(
                '광속을 초월할 때까지! 가능성의 저편에 닿을 때까지!',
              ),
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait('……지루하군.');
              await era.printAndWait([
                tachyon.get_colored_name(),
                '이 중얼거렸다.',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                callname,
                '…… 실험에는 영감이 아주 중요하다고 생각하네. 성공은 99%의 노력과 1%의 영감으로 이루어진다지만, 1%의 영감이 없다면 99%든 99.99%든 아무런 소용이 없는 법이지. 내 말이 무슨 뜻인지 알겠나?',
              ]);
              await tachyon.say_and_wait(
                '아니, 훈련을 빼먹으려고 하는 소리가 아니네. 그저 사실을 말하는 것뿐이야.',
              );
              await tachyon.say_and_wait(
                '하지만 자네가 그 화제를 꺼냈으니 하는 말인데, 그걸 오늘 훈련에 대입해 보면……',
              );
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 고개를 저었다.',
              ]);
              await tachyon.say_and_wait('칫.');
              await era.printAndWait([
                tachyon.get_colored_name(),
                '이 혀를 찼다.',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                '훈련? 오늘의 실험도 아직 안 끝났지 않은가. 에휴…… 됐네, 실험 끝나면 갈 테니.',
              );
              await era.printAndWait([
                '結局、',
                tachyon.get_colored_name(),
                '이 훈련하러 오기까지 ',
                you.get_colored_name(),
                '은(는) 꼬박 세 시간을 기다려야 했다. 해가 지고 나서야 ',
                tachyon.sex,
                '는 훈련장에 모습을 드러냈다.',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '하아 하아…… 체력? 문제없네. 오늘은 반드시 돌파할 수…… 하아, 하아……',
            ),
          () =>
            tachyon.say_and_wait(
              '한계까지…… 체력의 한계에 다다라야 진정한 돌파구를 찾을 수 있어!',
            ),
          () =>
            tachyon.say_and_wait(
              '이성은 이제 쉬어야 한다고 말하지만, 감성은 도저히 멈추고 싶어 하질 않는군…… 참으로 행복한 고민이야, 하하하!',
            ),
        );
      }
    } else if (stmn_rat > 0.45) {
      if (moti >= 0) {
        buffer.push(
          () => tachyon.say_and_wait('그럼, 실험을 시작하지.'),
          () =>
            tachyon.say_and_wait(
              '어서 가서 실험 데이터를 기록할 준비를 하게. 한눈팔지 말고.',
            ),
          async () => {
            await tachyon.say_and_wait('흠……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 말이 없었지만, ',
              you.get_colored_name(),
              '은(는) ',
              tachyon.sex,
              '가 의욕이 넘치고 있다는 것을 알 수 있었다.',
            ]);
          },
        );
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '뭘 그리 멍하니 있나. 어서 실험 데이터를 기록할 준비나 하게. 실수했다간 가만두지 않을 테니.',
            ),
          () =>
            tachyon.say_and_wait(
              '방향이 틀린 건가…… 왜지…… 체력은 충분한데 한계를 넘을 수 있다는 자신이 전혀 생기질 않아……',
            ),
          async () => {
            await tachyon.say_and_wait(
              '……최근 자네가 제안하는 실험들, 점점 지루해지는군.',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이 위험한 눈빛으로 ',
              you.get_colored_name(),
              '을(를) 쳐다보았다.',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……실험을 시작하세.');
          await tachyon.say_and_wait(
            '힘들다고? 그럴 리가. 이번엔, 이번만큼은 반드시 병목 현상을 해결할 수 있을 것 같은 예감이 들어……',
          );
        },
        () => tachyon.say_and_wait('더 빨라져야 해…… 윽…… 몸이…… 움직이지 않아……'),
        async () => {
          await tachyon.say_and_wait(
            '농담하지 말게…… 한계를 돌파하기 위한 첫 번째 조건은 한계에 도달하는 것이야.',
          );
          await tachyon.say_and_wait(
            '더 빨라져야 하네. 한계에조차 닿지 못한다면…… 한계 돌파 따위 논할 가치도 없어……!',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] train_fail
  train_fail: (() => {
    const title = '재정비 & 재출발';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     * @param {boolean} reg_toky_yus 日本ダービーに出走登録しているか
     * @param {number} fail_count 愛欲以上でトレーニング失敗した回数
     * @param {boolean} fail_again 努力を選んだ場合に再失敗するか
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      plan_b,
      reg_toky_yus,
      fail_count,
      fail_again,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 경기장에서 훈련 중인 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait([
        '어쩐지 ',
        you.get_colored_name(),
        '은(는) 줄곧 가슴 한구석이 불안했다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 주법에는 겉보기에 아무런 문제가 없었다. 그래도 걱정이 가시지 않았다.',
      ]);
      await era.printAndWait([
        '제발 사고만은 나지 않기를 바라며 ',
        you.get_colored_name(),
        '은(는) 간절히 기도했다.',
      ]);
      era.println();
      await era.printAndWait('그러나 늘 그렇듯 이런 순간에 예기치 못한 사고가 벌어졌다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 눈앞에서 ',
        tachyon.get_colored_name(),
        '의 발걸음이 돌연 비틀거렸다.',
      ]);
      era.print('금방이라도 고꾸라질 것 같은 찰나————');
      era.printButton('「타키온! 당장 멈춰!」(실패를 받아들인다)', 1);
      era.printButton('—————!(만회하려고 시도한다)', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:32') >= 50) {
          switch (fail_count) {
            case 0:
              await tachyon.say_and_wait([
                '아파라…… ',
                callname,
                ', 미안하지만 잠깐 발 좀 주물러 줄 수 있겠나?',
              ]);
              era.println();
              await era.printAndWait([
                '넘어진 ',
                tachyon.get_colored_name(),
                '의 곁으로 황급히 달려간 ',
                you.get_colored_name(),
                '은(는), 재빠른 손놀림으로 ',
                tachyon.sex,
                '의 신발과 양말을 벗겼다.',
              ]);
              era.println();
              await tachyon.say_and_wait('그래…… 발등…… 그리고 발바닥 쪽을……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 조심스럽게 ',
                tachyon.sex,
                '의 발에 있는 혈자리를 꾹꾹 눌러주었다.',
              ]);
              await era.printAndWait('이것은 분명, 지극히 정상적인 간호 행위여야 했다.');
              await era.printAndWait(
                '그러나…… 방금 막 달리기를 마친 탓에, 양말에 감싸여 후끈해진 발바닥은 땀으로 젖어 있었다.',
              );
              await era.printAndWait([
                you.get_colored_name(),
                '의 마사지가 이어질수록, 끈적한 땀이 ',
                you.get_colored_name(),
                '의 양손을 적셔갔다.',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 이것이 그저 인체의 지극히 평범한 분비물일 뿐이라고 스스로를 다독였다.',
              ]);
              await era.printAndWait(
                '하지만 손길은 자신도 모르게 점점 부드러워졌다.',
              );
              era.println();
              await tachyon.say_and_wait('음…… 으응……');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '이 때때로 내뱉는 얕은 신음은 ',
                you.get_colored_name(),
                '을(를) 더욱 자극했다.',
              ]);
              await era.printAndWait([
                '은(는) 발바닥과 발등의 지압이 끝났으므로 마땅히 손을 떼어야 했지만, 손은 마치 별개의 의지를 가진 것처럼 멈추지 않았다.',
              ]);
              era.println();
              await tachyon.say_and_wait('잠깐…… 발가락 쪽은……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '의 손이 천천히 ',
                tachyon.sex,
                '의 발가락을 매만지기 시작했다.',
              ]);
              await era.printAndWait('보통 지압 마사지라면 오일을 발라 마찰을 줄여야 하겠지만.');
              await era.printAndWait([
                '하지만 ',
                tachyon.get_colored_name(),
                '의 발을 적신 땀방울이 오일을 대신하여 매끄러운 윤활 작용을 하고 있었다.',
              ]);
              era.println();
              await tachyon.say_and_wait(['잠깐만…… ', callname, '……앗, 아파!']);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '의 외침이 ',
                you.get_colored_name(),
                '의 이성을 간신히 붙잡아주었다.',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                '이(가) 고개를 들어 ',
                tachyon.sex,
                '의 얼굴을 바라보자, ',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '……남은 건 실내로 돌아가서 계속해 주지 않겠나?',
              );
              break;
            case 1:
              await tachyon.say_and_wait('아파라~~♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '은 오늘 훈련 중에도 또 「실수로」 넘어지고 말았다.',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 잔디 위에 주저앉자마자 기다렸다는 듯 신발과 양말을 벗는 ',
                tachyon.sex,
                '을(를) 보며, 성욕과 허탈함이 뒤섞인 기분을 느꼈다.',
              ]);
              era.println();
              await tachyon.say_and_wait([
                callname,
                '~~ 어서 마사지해 주게나……♡♡',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '이(가) 움직이지 않자, ',
                tachyon.sex,
                '은(는) 어리광을 부리듯 맨발로 잔디를 툭툭 치며 ',
                you.get_colored_name(),
                '의 주의를 끌었다.',
              ]);
              await era.printAndWait(
                '새하얗고 가냘픈 맨발은 금방이라도 부서질 듯한 예술품 같았다. 튄 흙먼지는 오히려 그 하얀 빛을 돋보이게 했다.',
              );
              era.println();
              await tachyon.say_and_wait('자, 얼른얼른. 기분 좋게 주물러달라고~~');
              era.println();
              await you.say_and_wait(
                '이런 나쁜 습관을 계속 받아 줄 수는 없는데……',
                true,
              );
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 조심스럽게 ',
                tachyon.sex,
                '의 발을 마사지하기 시작했다.',
              ]);
              era.println();
              await tachyon.say_and_wait('응, 응♡…… 바로 거기야…… 아♡ 으윽♡ 하아♡');
              era.println();
              await era.printAndWait('여전히 뇌쇄적인 목소리였다.');
              await era.printAndWait([
                tachyon.get_colored_name(),
                '이 입을 열어 내뱉는 소리는 매번 ',
                you.get_colored_name(),
                '의 욕망을 끝없이 자극하는 교성이었다.',
              ]);
              await era.printAndWait([
                '이대로 ',
                tachyon.sex,
                '을(를) 내버려 두어서는 안 된다.',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 손에 힘을 주는 방식을 바꾸었다.',
              ]);
              era.println();
              await tachyon.say_and_wait([callname, '……히익!?']);
              era.println();
              await era.printAndWait('방금까지의 부드럽고 애무하는 듯한 손길이 아니었다.');
              await era.printAndWait(
                '찰나의 순간, 발을 통째로 으스러뜨릴 것 같은 강렬한 압박으로 바뀌었다.',
              );
              era.println();
              await tachyon.say_and_wait([
                '아파! 잠깐, ',
                callname,
                '! 안 돼! 그만해! 발가락 부러지겠네! 아아아악!',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) ',
                tachyon.sex,
                '의 비명에도 아랑곳하지 않고, 그저 묵묵히 거친 마사지를 이어갔다.',
              ]);
              await era.printAndWait([
                tachyon.uma_sex_title,
                '를 위한 마사지 강도에 대해서라면, 이 세상에 트레이너보다 더 잘 아는 사람은 없었기 때문이다.',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 뼈가 상하지 않으면서도, ',
                tachyon.get_colored_name(),
                '이 충분히 고통을 느낄 수 있는 범위 내에서 힘 조절을 하며 마음껏 주물러댔다.',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '잠깐, 내가 잘못했네! 제발! 살려주게! 안 돼! 놓으라고! 아윽………!',
              );
              await tachyon.say_and_wait('으윽…… 하아…… 하아…… 하아……');
              era.println();
              await era.printAndWait([
                '얼마 지나지 않아 ',
                tachyon.get_colored_name(),
                '은 제대로 된 목소리조차 내지 못하고 고통 섞인 거친 숨소리만 내뱉게 되었다.',
              ]);
              await era.printAndWait([
                '하지만 이 정도로 그쳐선 안 된다. ',
                tachyon.sex,
                '가 철저하게 교훈을 얻게 해야 했다.',
              ]);
              era.println();
              await tachyon.say_and_wait('으음…… 윽…… 하아…… 응♡');
              await tachyon.say_and_wait('우으♡ 응…… 하아♡');
              era.println();
              await era.printAndWait('……기분 탓일까.');
              await era.printAndWait([
                tachyon.get_colored_name(),
                '의 목소리 톤이 어딘가 미묘하게 변한 것 같았다.',
              ]);
              await era.printAndWait([
                '적당히 끝낼 때를 아는 ',
                you.get_colored_name(),
                '은(는) ',
                tachyon.sex,
                '가 충분히 반성했을 거라 판단하고 손아귀의 힘을 풀었다.',
              ]);
              era.println();
              await tachyon.say_and_wait('우으으으……');
              await tachyon.say_and_wait(
                '방금 전까지 그렇게 아프게 하더니 갑자기 이렇게 상냥하게…………',
              );
              await tachyon.say_and_wait('안 돼…… 잠깐…… 가, 가버릴 것 같아……♡');
              era.println();
              await era.printAndWait(
                '……분명히 마사지만 하고 있었을 뿐이다.',
              );
              await era.printAndWait('얼마 뒤, 마사지가 끝났다.');
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 왠지 모르게 탈진해 버린 ',
                tachyon.get_colored_name(),
                '을 데리고 기숙사로 돌아갔다.',
              ]);
              await era.printAndWait([
                '이 정도면 ',
                tachyon.sex,
                '도 확실히 교훈을 얻었을 것이다.',
              ]);
              era.println();
              await era.printAndWait('…………정말로, 깨달았을까?');
              break;
            case 2:
              await tachyon.say_and_wait([
                '음~~ ',
                callname,
                ', 발 마사지 좀 해주게나~~',
              ]);
              await tachyon.say_and_wait('저기…… 「그쪽」 마사지로 말이야♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '은 자신의 다리를 쓰다듬으며 노골적인 태도로 ',
                you.get_colored_name(),
                '에게 속삭였다.',
              ]);
              await era.printAndWait('이 녀석…… 역시 전혀 배우질 못했군.');
              await era.printAndWait([
                '이번에야말로 정말 ',
                tachyon.sex,
                '가 정신을 차리게 해줘야 했다.',
              ]);
              await era.printAndWait([
                '…………그런데, 내「교육」이 ',
                tachyon.sex,
                '에게는 오히려 어떤 의미로 보상이 되고 있는 것 아닐까?',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 황급히 머릿속에 떠오른 불길한 생각을 털어버렸다.',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                '이 설마 그 정도로 망가졌을 리가 없었다.',
              ]);
              await era.printAndWait('…………그렇겠지?');
              break;
            case 3:
              await tachyon.say_and_wait(['아파라…… ', callname]);
              await tachyon.say_and_wait('내가 양말을 벗을 때, 어째서 갑자기 허리를 숙인 건가?♡');
              await tachyon.say_and_wait(
                '하지만 누군가의 하반신은 괜찮을지 모르겠군.',
              );
              await tachyon.say_and_wait(
                '내가 양말을 벗는 걸 보고 갑자기 허리를 굽힌 건 어째서인가♡',
              );
              await tachyon.say_and_wait('상처라도 나면 큰일이지…… 내가 한번 봐주겠네♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '의 말에 ',
                you.get_colored_name(),
                '은(는) 그 자리에 얼어붙었다.',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                '을 살피러 다가가고 싶었지만, ',
                tachyon.sex,
                '가 정말로 무슨 짓을 저지를지 몰라 겁이 났다.',
              ]);
              era.println();
              await tachyon.say_and_wait('음…… 오지 않는 건가? 정말 아쉽구만~~');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                '은 옷에 묻은 먼지를 툭툭 털고 스스로 자리에서 일어났다.',
              ]);
              await era.printAndWait('이 녀석…… 역시 아픈 척 연기했던 것이었다.');
          }
        } else {
          const buffer = [];
          if (era.get('relation:32:0') > 525) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([
                  '못 일어나겠네…… ',
                  callname,
                  ', 업어 주게~~',
                ]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  '은 ',
                  you.get_colored_name(),
                  '의 목소리를 듣자마자 엉덩이를 잔디에 붙이고 주저앉았다.',
                ]);
                await era.printAndWait([
                  '눈물을 글썽이며 ',
                  you.get_colored_name(),
                  '을(를) 향해 소리쳤다.',
                ]);
                await era.printAndWait([
                  '원래 ',
                  tachyon.sex,
                  '가 이렇게 어리광쟁이였던가……?',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 조금 어이가 없었지만, 어찌 됐든 오늘은 훈련을 더 진행할 상태가 아니라고 판단했다.',
                ]);
              },
              async () => {
                await tachyon.say_and_wait('나 원 참…… 분명히 계속 뛸 수 있었는데……');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  '이(가) ',
                  tachyon.get_colored_name(),
                  '의 다리를 살필 때, ',
                  tachyon.get_colored_name(),
                  '은 볼을 부풀리며 툴툴거렸다.',
                ]);
                era.println();
                await you.say_and_wait(
                  '하지만 타키온에게 그런 위험을 감수하게 할 수는 없어…… 나에게는 타키온(의 다리)이 그 무엇보다 소중하니까.',
                );
                await tachyon.say_and_wait('!…………자네가 정 그렇게 말한다면야.');
                era.println();
                await era.printAndWait([
                  '어째서인지 ',
                  tachyon.get_colored_name(),
                  '의 얼굴이 돌연 붉게 달아올랐다.',
                ]);
                await era.printAndWait('그래도 순순히 검사에 협조해주니 다행이었다.');
              },
              async () => {
                await tachyon.say_and_wait([
                  '흐흥, 고작 한 번의 실험 실패일 뿐이네. 설마 이런 걸로 내가 꺾일 거라 생각한 건 아니겠지, ',
                  callname,
                ]);
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 걱정스러운 표정으로 ',
                  tachyon.get_colored_name(),
                  '의 다리를 확인했다.',
                ]);
                await era.printAndWait('결국, 이 지경이 되어서도 걱정하는 건 실험뿐인 건가?');
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 가슴 한구석에서 답답함과 노여움이 동시에 치밀었다.',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  '게다가…… 나는 ',
                  callname,
                  ', 자네를 믿네. 자네는 절대로 나를 망가뜨리지 않을 테니까, 그렇지?',
                ]);
                era.println();
                await you.say_and_wait('…………');
                await era.printAndWait([
                  '가만히 생각해보면, 만약 ',
                  tachyon.sex,
                  '가 이토록 꿈에 미쳐 있는 순수한 ',
                  tachyon.uma_sex_title,
                  '가 아니었다면.',
                ]);
                await era.printAndWait([
                  '자신 또한 ',
                  tachyon.sex,
                  '의 무모한 실험에 끝까지 동참하지 않았을 것이다.',
                ]);
                await era.printAndWait([
                  '오직 꿈밖에 모르는 이 광기 어린 과학자가 폭주할 때마다, ',
                  tachyon.sex,
                  '의 발치에 있는 작은 구덩이를 살피고 막아주는 것.',
                ]);
                await era.printAndWait(
                  '그것이야말로 모르모트로서 자신의 책무였다.',
                );
                era.println();
                await tachyon.say_and_wait(
                  '그러니…… 돌아가서 검토를 마친 뒤, 내일부터 다시 실험을 재개하세!',
                );
                await you.say_and_wait('안 돼, 적어도 사흘은 쉬어야 해.');
                era.println();
                await era.printAndWait(
                  '꿈이니 미래니 하는 거창한 이야기는 제쳐두고, 최소한 이틀은 더 상태를 지켜봐야 했다.',
                );
              },
            );
          } else if (era.get('relation:32:0') > 225) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([callname, '……아파라……']);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  '은 눈가에 눈물을 머금은 채 잔디에 앉아 ',
                  you.get_colored_name(),
                  '에게 위로를 청했다.',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 서둘러 ',
                  tachyon.sex,
                  '의 부상 부위를 살폈고, 큰 이상이 없음을 확인한 뒤에야 안도의 한숨을 내쉬었다.',
                ]);
              },
              async () => {
                await tachyon.say_and_wait(
                  '……상관없네, 고작 한 번의 실패일 뿐이야…… 실험을 처음부터 다시 구성하면……',
                );
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  '은(는) 중얼거렸다.',
                ]);
                await era.printAndWait('……이 와중에도 실험 생각뿐인 건가.');
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 조금 허탈한 기분으로 ',
                  tachyon.sex,
                  '의 다리에 상처가 없는지 꼼꼼히 살폈다.',
                ]);
              },
              async () => {
                await tachyon.say_and_wait([
                  '윽…… ',
                  callname,
                  '……나, 나는 괜찮네.',
                ]);
                await era.printAndWait('잠깐 쉬기만 하면…… 하아.');
                era.println();
                await you.say_and_wait('안 돼.');
                await tachyon.say_and_wait('！？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 가장 안정적인 자세로 ',
                  tachyon.get_colored_name(),
                  '의 목 뒷덜미와 무릎 안쪽을 받쳐 들어 품에 안았다.',
                ]);
                await era.printAndWait([
                  '지금은 ',
                  tachyon.sex,
                  '의 고집을 받아줄 때가 아니었다. 당장 보건실로 가서 정밀 진단을 받아야만 했다.',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  '잠깐! ',
                  callname,
                  '! 알았으니까! 보건실에 가겠네, 그러니 제발 내려주게!',
                ]);
                await you.say_and_wait('하지만 이쪽이 훨씬 효율적이지 않아?');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) ',
                  tachyon.get_colored_name(),
                  '의 저항을 무시하고, 주변의 시선을 한 몸에 받으며 ',
                  tachyon.get_colored_name(),
                  '을 보건실까지 안고 갔다.',
                ]);
              },
            );
          } else {
            buffer.push(
              async () => {
                await tachyon.say_and_wait('윽…… 역시 너무 무리했던 건가?');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  '은 순순히 동작을 멈추었고, ',
                  you.get_colored_name(),
                  '은(는) 급히 다가가 ',
                  tachyon.sex,
                  '의 상태를 확인했다.',
                ]);
                await era.printAndWait('……오늘의 훈련은 여기서 마쳐야 할 것 같았다.');
              },
              async () => {
                await tachyon.say_and_wait('다리가…… 움직이지 않는군.');
                await tachyon.say_and_wait('실험은 실패로군……');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  '은 몇 걸음 비틀거리다 멈춰 섰다.',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 다급히 달려가 ',
                  tachyon.get_colored_name(),
                  '의 상태를 살폈다.',
                ]);
                await era.printAndWait(
                  '다행히 살짝 삐었을 뿐 큰 부상으로 이어지지는 않을 듯했다.',
                );
                await era.printAndWait('다만 보건실로 가서 휴식을 취하는 것이 급선무였다.');
              },
              async () => {
                await tachyon.say_and_wait('나의 한계는…… 겨우 여기까지였던가.');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  '은(는) 지체 없이 달려가, ',
                  tachyon.get_colored_name(),
                  '이 쓰러지기 직전에 몸을 붙잡아 지탱해주었다.',
                  tachyon.sex,
                  '을(를) 부축했다.',
                ]);
                await era.printAndWait([
                  '충동적인 행동이었고 자칫 ',
                  tachyon.get_colored_name(),
                  '에게 꾸지람을 들을 수도 있었지만, ',
                  you.get_colored_name(),
                  '은(는) 망설임 없이 몸을 던졌다.',
                ]);
                await era.printAndWait([
                  '덕분에 ',
                  you.get_colored_name(),
                  '은(는) ',
                  tachyon.get_colored_name(),
                  '이 작게 뇌까리는 소리를 들을 수 있었다.',
                ]);
                era.println();
                await you.say_and_wait(
                  '분명 더 강해질 수 있어…… 타키온의 한계는 절대 여기가 아니야.',
                );
                await tachyon.say_and_wait('…………');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  '은 아무런 대꾸도 하지 않았다. ',
                  you.get_colored_name(),
                  '의 말을 귀담아들었는지조차 알 수 없었다.',
                ]);
                await era.printAndWait([
                  '하지만 ',
                  tachyon.sex,
                  '은(는) 천천히 다시 발을 떼기 시작했고, ',
                  you.get_colored_name(),
                  '은(는) 곁에서 ',
                ]);
              },
            );
          }
          await get_random_entry(buffer)();
        }
      } else if (fail_again) {
        if (plan_b && era.get('cflag:32:育成回合计时') > 95) {
          era.drawLine();
          await tachyon.say_and_wait('아…… 넘어지겠군.', true);
          era.println();
          await tachyon.say_and_wait('역시 이제는 포기하는 편이 낫겠군.', true);
          await tachyon.say_and_wait(
            ['어차피 ', call_25, '도 이미 충분히 성장했지 않나.'],
            true,
          );
          await tachyon.say_and_wait('아쉽긴 하지만……', true);
          era.println();
          await you.say_and_wait('타키온! 괜찮아!?');
          era.println();
          await tachyon.print_and_wait('……이럴 순 없어.');
          await tachyon.print_and_wait(
            '정말로 내 꿈을 믿어 주는 사람이 아무도 없었다면, 그래도 괜찮았겠지.',
          );
          await tachyon.print_and_wait([
            '하지만……',
            you.sex,
            '만큼은, ',
            you.sex,
            '의 기대만큼은……',
          ]);
          await tachyon.print_and_wait(
            '좋아, 조금만 더 힘내 보지…… 이 몸이 어디까지 버틸 수 있을지.',
          );
          // 47+20＝シニア級5月4週＝日本ダービー
        } else if (era.get('cflag:32:育成回合计时') > 47 + 20) {
          era.drawLine();
          await tachyon.say_and_wait('아…… 넘어지겠군.', true);
          era.println();
          await tachyon.say_and_wait('역시 이러면 포기하는 수밖에 없겠군.', true);
          await tachyon.say_and_wait(
            '괜찮네. 예비 계획이 있으니까……',
            true,
          );
          await tachyon.say_and_wait('분하긴 하지만……', true);
          era.println();
          await you.say_and_wait('타키온! 괜찮아!?');
          era.println();
          await tachyon.print_and_wait('이미 돌아갈 수 없는 길을 왔단 말이야.');
          await tachyon.print_and_wait('여기서 포기한다면 그것만큼 우스운 꼴이 어디 있겠어.');
          await tachyon.print_and_wait([
            you.sex,
            '의 지지가 나를 여기까지 이끌었어.',
          ]);
          await tachyon.print_and_wait(
            '이제 와서 물러난다면 웃음거리밖에 되지 않겠지.',
          );
          await tachyon.print_and_wait(
            '나를 믿어 준 사람을 위해서라도…… 조금 더 버텨 보겠네.',
          );
        } else if (reg_toky_yus) {
          era.drawLine();
          await tachyon.say_and_wait('아…… 넘어지겠군.', true);
          era.println();
          await tachyon.say_and_wait('역시 이러면 포기하는 수밖에 없겠군.', true);
          await tachyon.say_and_wait(
            '괜찮네. 예비 계획이 있으니까……',
            true,
          );
          await tachyon.say_and_wait('분하긴 하지만……', true);
          era.println();
          await you.say_and_wait('타키온! 괜찮아!?');
          era.println();
          await tachyon.print_and_wait('나를 믿어주는 사람을 위해서라도…… 조금 더 버텨보겠어.');
          await tachyon.print_and_wait(
            '정말로 내 꿈을 믿어 주는 사람이 아무도 없었다면, 그래도 괜찮았겠지.',
          );
          await tachyon.print_and_wait([
            '하지만……',
            you.sex,
            '만큼은, ',
            you.sex,
            '의 기대만큼은……',
          ]);
          await tachyon.print_and_wait(
            '좋아, 조금만 더 힘내 보지…… 이 몸이 어디까지 버틸 수 있을지.',
          );
        } else {
          await tachyon.say_and_wait('아파라.');
          await tachyon.say_and_wait('무섭군.');
          await tachyon.say_and_wait('역시…… 내 한계는 여기까지인 건가……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 그제야 정신을 차리고 ',
            tachyon.get_colored_name(),
            '에게 달려갔다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            tachyon.sex,
            '는 마치 넋이 나간 듯 혼잣말을 반복할 뿐, 달려온 당신을 보지 못하는 것 같았다.',
          ]);
          await era.printAndWait([
            '한참 뒤에야 간신히 정신을 차린 ',
            you.get_colored_name(),
            '의 부축을 받으며 보건실로 향했다.',
          ]);
          await era.printAndWait('…………정말로 괜찮은 걸까. 몸도, 그리고 마음도.');
          await era.printAndWait([you.get_colored_name(), '은(는) 묻고 싶었다.']);
          await era.printAndWait([
            '하지만…… 사고가 나기 전 ',
          ]);
        }
      } else {
        await era.printAndWait('미처 손을 쓸 틈도 없었다.');
        await era.printAndWait('미처 목소리를 낼 겨를조차 없었다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 이미 다시 발을 단단히 내딛고 있었다.',
        ]);
        await era.printAndWait('마치 마음속 깊이 품고 있던 불안감을 단숨에 씻어내기라도 하려는 듯.');
        await era.printAndWait('다시금 힘차게 앞을 향해 다음 발걸음을 내디뎠다.');
        await era.printAndWait('그렇게 훈련이 끝날 때까지 멈추지 않고 계속 달려나갔다.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] train_kiss
  async train_kiss(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      ', 오늘처럼 내가 기꺼이 훈련에 임하는 날엔, 이런 기특한 애마에게 뭔가 포상이 있어야 하지 않겠나?',
    ]);
    await tachyon.say_and_wait(
      '……훈련이 끝나고 나서? 이런, 난 그렇게 오래 못 기다리네.',
    );
    await tachyon.say_and_wait('우읍…… 츄릅…… 할짝…… 쪽…… 츄우…… 으음.');
    await tachyon.say_and_wait(
      '후우…… 일단 합격점을 주지. 나머지는 훈련이 끝난 뒤에 계속하자고❤',
    );
  },

  // [번역 대상] train_sex
  async train_sex(tachyon, you) {
    await tachyon.say_and_wait(
      'トレーニング？ ええ……今日の薬を飲んでからですわ',
    );
    await tachyon.say_and_wait(
      '全身が熱い？ 意識が霞む？ 大丈夫大丈夫、正常な反応ですわ',
    );
    await tachyon.say_and_wait('ふん……頃合いは、もう来ていますわね、');
    await tachyon.say_and_wait(
      '今日の薬は、雌性ホルモン・雄性ホルモン・コルチゾール・成長ホルモン・バソプレシンを平均以上に引き上げるもの。通俗に言えば、媚薬ですわ❤️',
    );
    await tachyon.say_and_wait('トレーニングなど、終わってからで結構ですわ❤️');
    era.printButton('ここは下半身の声に従う……', 1);
    era.printButton('「ふざけるな、早くトレーニングへ！」', 2, {
      disabled: era.get('talent:0:钢之意志') > 0,
    });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の誘惑に負け、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'を実験室の小さなベッドへ押し倒した……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は学んだ鋼の意志で誘惑を押し切った',
      ]);
      await tachyon.say_and_wait('そんなことが、できるんですの！？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は突っ込む ',
        tachyon.get_colored_name(),
        ' を無視して、',
        tachyon.sex,
        'を無理くりトレーニング場へ担いでいった。',
      ]);
    }
    return ret;
  },

  // [번역 완료] train_success
  async train_success(tachyon, you, callname, call_25, stmn_rat, plan_b) {
    era.print([
      tachyon.get_colored_name(),
      '의 훈련이 무사히 끝났다!',
    ]);
    era.println();
    const buffer = [];
    if (plan_b && era.get('cflag:32:育成回合计时') < 95 + 16) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([' ', call_25, '이…… 한 단계 더 위로 올라설 수 있도록.']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 각별히 노력하며 훈련을 마쳤지만, ',
            tachyon.sex,
            '가 입 밖으로 내뱉는 구호는 대체 어떻게 반응해야 할지 알 수 없었다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '내가 노력해서 ',
            call_25,
            '을 쫓아가야만 해……',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 훈련을 마쳤다.',
          ]);
          await era.printAndWait('그 달리는 모습은 여전히 찬란했다.');
          await era.printAndWait('하지만 어딘가 모르게, 소중한 무언가가 빠져 있는 듯한 느낌을 주었다.');
        },
        async () => {
          await tachyon.say_and_wait('실험의 성공을 위해서라면…… 설령 나라고 해도……');
          era.println();
          await era.printAndWait([
            '훈련을 마친 ',
            tachyon.get_colored_name(),
            '이 나직이 읊조렸다. 비록 내용은 그러하였으나, ',
            tachyon.sex,
            '의 말투에는 어딘가 망설임이 섞여 있는 듯했다.',
          ]);
          await era.printAndWait([
            '……아니, 그것도 어쩌면 ',
            you.get_colored_name(),
            '의 착각일지도 모른다.',
          ]);
        },
      );
    } else if (era.get('love:32') >= 75) {
      if (stmn_rat > 0.45) {
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '！']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 훈련이 끝나자마자 온몸이 땀범벅인 것도 개의치 않고, ',
            you.get_colored_name(),
            '에게 달려들어 안겼다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 당황하며 ',
            tachyon.sex,
            '를 밀어내려 했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '뭐 어떤가, 그저 사랑하는 이의 체액일 뿐인데…… 정 그러면 밤에 자네의 체액으로 되돌려주면 되지 않겠나?♡',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 ',
            you.get_colored_name(),
            '의 반대에도 아랑곳하지 않고 ',
            you.get_colored_name(),
            '을(를) 꼭 껴안은 채, ',
          ]);
        });
      } else {
        buffer.push(async () => {
          await tachyon.say_and_wait(
            '의 귓가에 대고 속삭였다.',
          );
          await tachyon.say_and_wait(
            '후우…… 드디어 훈련이 끝난 건가…… 드디어.',
          );
          await tachyon.say_and_wait([
            '정말이지…… 운동이라면 단순한 달리기보다, 밤에 하는 그런 쪽이 훨씬 더 내 취향인데 말이야……',
            callname,
            '、자네라면 날 만족시켜 주겠지?♡',
          ]);
        });
      }
    } else if (era.get('love:32') >= 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('흥흥, 어떤가?');
          await tachyon.say_and_wait(
            '또다시 나에게 매료되었나? 후훗, 참으로 과장된 표현이군.',
          );
          await tachyon.say_and_wait('하지만, 싫지 않네♡');
        },
        async () => {
          await tachyon.say_and_wait([callname, '！ ', callname, '………아']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 평소처럼 ',
            you.get_colored_name(),
            '에게 달려오려다, 돌연 발걸음을 멈추었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('………아니, 지금은 역시 관두겠네.');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 땀으로 흠뻑 젖은 자신의 트레이닝복을 슬쩍 보더니, 왠지 모르게 ',
            you.get_colored_name(),
            '과(와) 일정한 거리를 유지했다.',
          ]);
          await era.printAndWait('설마…… 몸에서 나는 냄새를 신경 쓰고 있는 건가?');
          await era.printAndWait([
            '아니, 그 ',
            tachyon.get_colored_name(),
            '아라면…… 그럴 리가 없겠지.',
          ]);
        },
      );
    } else if (era.get('relation:32:0') > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '후후훗, ',
            callname,
            ', 오늘 달리기는 어땠나! 좀 더 칭찬해 줘도 괜찮다고!',
          ]);
          era.println();
          await era.printAndWait('三十分後');
          era.println();
          await tachyon.say_and_wait('………아니, 그렇게까지 칭찬할 필요는 없었네만……');
        },
        async () => {
          await tachyon.say_and_wait('후우…… 정말 힘들군……');
          await tachyon.say_and_wait([
            callname,
            '……나를 업고 돌아가 주게나~~~~',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('이대로만 간다면…… 반드시 도달할 수 있겠어.');
          await tachyon.say_and_wait('한계라는 이름의 목표에……');
        },
      );
    } else if (era.get('relation:32:0') > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '흥흥…… 이 정도 속도라면, 꾸준히 향상시킨다는 전제하에 한계 돌파는 문제없겠어.',
          );
          await tachyon.say_and_wait([
            '……그렇게 서두를 필요 없이 조금 쉬어도 되지 않겠냐고? ',
            callname,
            ', 연구라는 것은 제자리에 머무는 순간 퇴보하는 것이네. 자기 자신을 높이기 위해서는 한순간도 늦추지 않고 정진해야만 해.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('푸하하하! 바로 이거야, 바로 이 속도라고!');
          await tachyon.say_and_wait(
            '더 빠르게, 조금 더 빠르게, 마침내…… 광속을 뛰어넘는 거다!',
          );
        },
        () =>
          tachyon.say_and_wait(
            '어디 시간을 좀 볼까…… 흠흠…… 좋군. 이대로라면 우리의 꿈도 머지않은 곳에 있겠어!',
          ),
      );
    } else if (era.get('relation:32:0') > 75) {
      buffer.push(
        () => tachyon.say_and_wait('좋아. 오늘의 주법이야말로 최적의 해답임에 틀림없어!'),
        () =>
          tachyon.say_and_wait([
            '후우…… ',
            callname,
            ', 데이터를 보여주게나…… 후훗, 좋군, 아주 좋아. 지난번 훈련에 비해 대폭 상승했어. 이대로라면 분명 문제없겠군.',
          ]),
        () =>
          tachyon.say_and_wait(
            '좋아 좋아, 이걸로 연구 진척도가 다시 0.02%p 전진했군.',
          ),
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '후우, 과연 그렇군…… 오늘의 실험 성과는 나쁘지 않아.',
          ),
        () =>
          tachyon.say_and_wait(
            '이토록 간단한 훈련이라니, 완수하는 데 아무런 어려움도 없군…… 실력 측정을 위한 대조군인가?',
          ),
        () => tachyon.say_and_wait('지극히 당연한 결과일 뿐이네.'),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 대상] try_drug
  try_drug: (() => {
    const title = '시약';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {1|2|3|4|5} effect 薬効。1=火、2=霊視、3=石化、4=発情、5=発光
     * @param {boolean} do_sex 発情の薬効で行為に至るか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      effect,
      do_sex,
    ) => {
      const colors = [
        '무지개',
        '짙은 빨강',
        '짙은 주황',
        '짙은 노랑',
        '짙은 초록',
        '짙은 파랑',
        '짙은 남',
        '짙은 보라',
        '짙은 회',
        '짙은 은',
        '짙은 금',
        '옅은 빨강',
        '옅은 주황',
        '옅은 노랑',
        '옅은 초록',
        '옅은 파랑',
        '옅은 남',
        '옅은 보라',
        '옅은 회',
        '옅은 은',
        '옅은 금',
      ];
      await tachyon.say_and_wait([
        '이런, ',
        callname,
        ', 마침 잘 왔네. 이건 오늘의 약일세.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) ',
        get_random_entry(colors),
        '색을 띠는 약병을 ',
        you.get_colored_name(),
        '에게 건네주었다.',
      ]);
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 두말없이 약을 들이켰다.']);
      switch (effect) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 약을 마신 뒤 갑자기 목이 몹시 가려워짐을 느꼈다.',
          ]);
          await era.printAndWait('참지 못하고 기침을 내뱉자, 뜻밖에도 입에서 불꽃이 튀어나왔다.');
          era.println();
          await tachyon.say_and_wait('이런이런, 아무래도 드래곤 브레스 약물 효과가 아주 좋은 모양이네.');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 기쁜 표정으로 실험 데이터를 기록했으나, 뒤따라올 결과까지는 예상치 못했다. 뱉어낸 불꽃이 하필 ',
            tachyon.sex,
            '의 곁에 있던 실험 기록에 옮겨붙고 말았다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '어라... 어디선가 탄내가... 내 실험 데이터가!!??',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 서둘러 아직 타지 않은 실험 기록들을 구하기 시작했다. ',
            you.get_colored_name(),
            '도 거들려 했으나, 목이 너무 가려워 움직일 수가 없었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('콜록! 콜록!!');
          era.println();
          await era.printAndWait([
            '약효가 사라지기 전까지, ',
            tachyon.get_colored_name(),
            '은 그저 이리저리 뛰어다니며 자료를 수습할 뿐이었다.',
          ]);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 약을 마신 뒤 눈앞의 세상이 갑자기 선명하게 보이기 시작했다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            you.get_colored_name(),
            '은(는) 환각제가 아닐까 의심하기 시작했다. 눈앞에 기묘한 것들이 보이기 시작했기 때문이다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '오? 뭔가 효과가 있는 모양이군? 이건 ',
            t_call_c,
            '이 말했던 다른 세계를 보는 듯한 느낌을 토대로 만든 영시 물약이야.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 대체 무엇을 만들어 낸 것인가! 이건 이미 정상적인 화학의 영역을 넘어선 게 아닌가!?',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '마침 잘됐네. 지금 보인다면 내 몸 상태를 좀 봐주지 않겠나?',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 그 말을 듣고 무심코 ',
            tachyon.get_colored_name(),
            '을 쳐다보았다.',
          ]);
          await era.printAndWait([
            '그 순간, ',
            you.get_colored_name(),
            '의 의식은 순식간에 정지되었다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '어제 ',
            t_call_c,
            '에게 들러붙었다가 실수로 ',
            coffee.sex,
            '을(를) 화나게 한 모양일세. 돌아온 뒤로 몸이 계속 무겁다네……',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '의 눈에는 어떤 검은 그림자가 두 손으로 ',
            tachyon.get_colored_name(),
            '의 어깨를 짓누르고 있는 것이 보였다.',
          ]);
          await era.printAndWait([
            '그림자는 ',
            you.get_colored_name(),
            '의 시선을 눈치챘는지, 얼굴로 추정되는 부위에 손가락을 대고 "쉿" 하는 포즈를 취했다.',
          ]);
          await era.printAndWait([
            '그 뒤로 ',
            you.get_colored_name(),
            '은(는) 아무 말도 할 수 없게 되었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '...이상하네. 정말 아무것도 없는 건가? 왜 이렇게 몸이 무겁지.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 ',
            you.get_colored_name(),
            '의 이상을 눈치채지 못한 채, 혼잣말을 중얼거리며 방을 나갔다.',
          ]);
          await era.printAndWait([
            '그제야 ',
            you.get_colored_name(),
            '은(는) 겨우 숨을 크게 몰아쉴 수 있었다. 그 검은 그림자의 정체는 대체 무엇이었을까...',
          ]);
          era.println();
          await era.printAndWait([
            '덧붙여서, 다음날 ',
            tachyon.get_colored_name(),
            '은 다시 정상으로 돌아왔다. 아무래도 ',
            coffee.get_colored_name(),
            '가 준 가벼운 징벌이었던 모양이다.',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 약을 마시자마자 전신이 몹시 뻣뻣해짐을 느꼈다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 현재 자신의 몸이 입과 머리를 제외하고는 전혀 움직이지 않는다는 사실을 공포와 함께 깨달았다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '이런... 원래는 신체의 충격 내성을 강화하는 약을 만들려 했는데, 석화와 비슷한 효과가 되어버린 건가...',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '에겐 ',
            tachyon.get_colored_name(),
            '의 실험 후 감상을 들어줄 여유가 없었다.',
          ]);
          await era.printAndWait([you.get_colored_name(), '의 마음은 매우 초조해졌다.']);
          await era.printAndWait('필사적으로 몸을 움직이려 했지만 꿈쩍도 하지 않았다.');
          await era.printAndWait(
            '곧바로 훈련장 시간 분배에 관한 회의가 예정되어 있었다. 오늘 참석하지 못하면 앞으로 한 달 동안 훈련장을 사용할 수 없게 된다.',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 사태의 심각성을 ',
            tachyon.get_colored_name(),
            '에게 알렸다.',
          ]);
          await era.printAndWait([tachyon.sex, '역시 큰일임을 직감했다.']);
          era.println();
          await tachyon.say_and_wait(
            '훈련장을 못 쓰면 내 약물의 효과를 어떻게 확인하라는 거야!?',
          );
          era.println();
          await era.printAndWait([
            '어찌 됐든 원인을 따질 때가 아니었다. 지금 급선무는 ',
            you.get_colored_name(),
            '을(를) 회의실로 옮기는 것이었다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 힘겹게 ',
            you.get_colored_name(),
            '을(를) 들어 올려 회의실로 향했다.',
          ]);
          await era.printAndWait([
            '어째서인지 약을 마신 뒤의 ',
            you.get_colored_name(),
            '의 몸은 유독 무거웠다. ',
            tachyon.get_colored_name(),
            '이 ',
            tachyon.uma_sex_title,
            '의 힘으로 들어 올리는 것도 쉽지 않았다.',
          ]);
          await era.printAndWait([
            '천신만고 끝에 회의실로 옮긴 뒤, 이상을 들키지 않도록 ',
            tachyon.get_colored_name(),
            '은(는) 회의가 끝날 때까지 곁에 동석했다.',
          ]);
          era.println();
          await era.printAndWait([
            '그날 이후, 학원에서는 왠지 모르게 ',
            tachyon.get_colored_name(),
            '과(와) ',
            you.get_colored_name(),
            '의 스캔들이 퍼지기 시작했다.',
          ]);
          await you.say_as_passer_by_and_wait(
            `지나가는 ${tachyon.uma_sex_title} A`,
            '들은 바에 의하면 공주님 안기로 안아서 회의실까지 데려갔다나 봐.',
          );
          await you.say_as_passer_by_and_wait(
            '지나가는 트레이너 A',
            '회의 중에도 곁을 지키면서 차를 타다 주는 등, 완전히 내조하는 아내의 모습이었다더군.',
          );
          await you.say_as_passer_by_and_wait(
            `지나가는 ${tachyon.uma_sex_title} B`,
            ['그 ', tachyon.get_colored_name(), '이(가) 연애를 할 줄이야……'],
          );
          era.println();
          await era.printAndWait('...어째서 그런 스캔들이 생긴 것일까.');
          await era.printAndWait([
            '그리고 왜 그런 소문을 들었을 때, ',
            tachyon.get_colored_name(),
            '의 얼굴이 조금 붉어진 것 같았을까.',
          ]);
          break;
        case 4:
          await era.printAndWait([
            '약은 ',
            you.get_colored_name(),
            '가 마시기도 전에 분홍색의 짙은 안개를 뿜어내어, ',
            you.get_colored_name(),
            '와(과) ',
            tachyon.get_colored_name(),
            '을(를) 감쌌다.',
          ]);
          era.println();
          await tachyon.say_and_wait('콜록! 이게 무슨 일인가요!?');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 고개를 저었다. 약효조차 모르는 자신이 원인을 알 리 없었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '그저 평범한 강장제인데…… 아무튼 창문과 문을 열어 안개를 빼내도록 하죠.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 서둘러 창문으로 다가가 열려고 했다. 하지만 ',
          ]);
          era.println();
          await tachyon.say_and_wait('큭, 힘이 들어가지 않아요……!');
          era.println();
          await era.printAndWait([
            '그동안 ',
            you.get_colored_name(),
            '은(는) 의자에 앉은 채 움직이지 못했다. 여유가 있어서가 아니었다.',
          ]);
          if (you.sex_code !== 1) {
            await era.printAndWait([
              you.get_colored_name(),
              ' のそこが、すでに溢れかえっていたからだ',
            ]);
          } else {
            await era.printAndWait([
              you.get_colored_name(),
              ' の下半身の兄弟が、すでに立ち上がっていたからだ',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이(가) 말했던 강장제를 떠올렸다. 보통 강장제란…… 그런 약을 가리키지 않던가.',
          ]);
          await era.printAndWait([
            '어째서 ',
            tachyon.get_colored_name(),
            '이(가) 그런 약을 만들었는지는 의문이었다. 그러나 지금은 생각할 때가 아니었다. 왜냐하면……',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……身体が……熱いですわ……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はハートになった両目で ',
            you.get_colored_name(),
            ' を見た。わずかな恐慌と、それ以上の情欲が混じっている',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'のその姿を見て、',
            you.get_colored_name(),
            ' は……',
          ]);
          if (!do_sex) {
            era.println();
            await era.printAndWait([
              '안 된다. ',
              tachyon.sex,
              '은(는) ',
              you.get_colored_name(),
              '의 담당 트레이너',
              tachyon.uma_sex_title,
              '다. ',
              you.get_colored_name(),
              '은(는) 그런 행동을 해서는 안 된다.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 침착하게 ',
              tachyon.sex,
              '을(를) 거절했다. 다행히 ',
              tachyon.get_colored_name(),
              '도 어느 정도 이성을 유지하고 있었다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '괜찮아요…… 이 약의 효과는 길어야 한 시간…… 한 시간만 버티면……',
            );
            await era.printAndWait([
              '그 뒤로는 누구도 입을 열지 않았다.',
              you.get_colored_name(),
              '와(과) 힘이 풀려 바닥에 주저앉은 ',
              tachyon.sex,
              '은(는) 말없이 시간이 지나기를 기다렸다.',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 필사적으로 버텼다. 그러나 시선은 자꾸만 ',
              tachyon.get_colored_name(),
              '에게 향했다.',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は全身が汗だくだ——',
              you.get_colored_name(),
              ' も同じだろう——白衣に隠され、透けては見えない',
            ]);
            era.println();
            await era.printAndWait([
              'だが抜けはあった。一回り大きい白衣が汗で湿り、',
              tachyon.get_colored_name(),
              ' の体の線にぴったり沿った。',
            ]);
            if (tachyon.sex_code !== 1) {
              await era.printAndWait([
                '丸い腰と、その奥の深い溝から、胸のさほど大きくないが張りのある峰まで、はっきり ',
                you.get_colored_name(),
                ' の目に描かれた',
              ]);
            }
            era.println();
            await tachyon.say_and_wait([callname, '……']);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '의 시선을 알아차리고 약간 나무라듯 불렀다. 그러나 평소와 다른 그 한마디에 ',
              callname,
              '은(는) 당황했고, ',
              you.get_colored_name(),
              '은(는) 황급히 사과한 뒤 시선을 돌렸다.',
            ]);
            era.println();
            await era.printAndWait('버티고, 또 버티고, 계속 버텼다.');
            await era.printAndWait([
              '마침내 약효가 가라앉자 ',
              tachyon.get_colored_name(),
              '은(는) 겨우 몸을 일으켜 오늘은 여기까지라며 황급히 트레이너실을 떠났다……',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は頭を振り、今日のことを振り落とそうとした。だが ',
              tachyon.get_colored_name(),
              ' の美しい体は、頭の中に残り、忘れられない……',
            ]);
            era.println();
            await era.printAndWait([
              '덧붙여, 사건이 끝난 뒤 ',
              you.get_colored_name(),
              '이(가) 물어보니, 그 강장제는 학원 내 어느 비밀 상점에 납품한다고 했다.',
            ]);
            await era.printAndWait([
              '그것이 ',
              tachyon.sex,
              '의 연구 자금을 대는 주된 수입원인 모양이다. 학원을 돌아다니면 발견할 수 있을지도……?',
            ]);
          }
          break;
        case 5:
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 약을 마시자 전신에서 갑자기 빛이 나기 시작했다. ',
            you.get_colored_name(),
            '은(는) 당황했으나, ',
            tachyon.get_colored_name(),
            '은 여전히 흥분한 기색이었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('빨리, 옷을 벗어.');
          era.println();
          await era.printAndWait(['이 녀석이 대체 무슨 소릴 하는 거지!?']);
          await era.printAndWait([
            '변태인가!? 요즘 트레센에서 유행하는 그 치한인가!?',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 서둘러 제 옷을 여몄으나, 인간은 끝내 ',
            tachyon.uma_sex_title,
            '의 힘을 이길 수 없었다. 3초간 저항했지만 결국 옷이 갈기갈기 찢어지고 말았다.',
          ]);
          era.println();
          await era.printAndWait([
            '저항할 힘을 잃은 ',
            you.get_colored_name(),
            '은(는) 두 눈을 감았다. 반항할 수 없다면 즐기는 수밖에 없으니... 오라, 나를 가련한 꽃처럼 아껴주지 마라!',
          ]);
          era.println();
          await tachyon.say_and_wait('...과연, 그렇군 그렇군.');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 기대했던 일은 아무리 기다려도 일어나지 않았다. 슬며시 눈을 뜨자, ',
            tachyon.get_colored_name(),
            '이 ',
            you.get_colored_name(),
            '의 몸을 빤히 들여다보며 무언가를 기록장에 적고 있는 모습이 보였다.',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 자신의 몸을 보니 정말로 빛이 나고 있었는다. 그 부위들이 일정한 규칙성을 띠고 있었다. 그것은 마치...',
          ]);
          era.println();
          if (you.race > 0) {
            await tachyon.say_and_wait('원래 구체적으로 이렇게 작동하는 거였군...');
          } else {
            await tachyon.say_and_wait(
              `인간의 몸은 구체적으로 이렇게 작동하는군…… 하지만 ${tachyon.uma_sex_title}와의 차이가……`,
            );
          }
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 혼잣말을 듣고서야, 이것이 역시나 ',
            tachyon.uma_sex_title,
            '의 신비를 파헤치기 위한 실험이었음을 깨달았다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 자신의 천박한 착각에 조금 부끄러움을 느꼈다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '좋아, 오늘 관찰은 여기까지 하지. 난 먼저 실험하러 갈 테니, ',
            callname,
            ', 자네는 잊지 말고 옷을 좀 챙겨 입어!',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 기록을 마치고 쏜살같이 트레이닝실을 나갔다. 트레이닝실에는 ',
            you.get_colored_name(),
            '혼자만이 남겨졌다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 바닥에 굴러다니는, 옷이라고 부를 수조차 없는 누더기 조각들을 보며, 어둠을 틈타 집으로 도망쳐야 할지 아니면 동료에게 옷을 좀 빌려달라고 부탁해야 할지 고민했다.',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ts_add_high_rel
  ts_add_high_rel: (() => {
    const title = '술래잡기';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '! ', tachyon.sex, '를 막아 줘!']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 오늘 훈련은 막 끝난 참이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손을 흔들며 ',
        tachyon.get_colored_name(),
        '을(를) 부르려던 순간, ',
        tachyon.get_colored_name(),
        '가 무언가를 ',
        tachyon.uma_sex_title,
        '을(를) 뒤쫓아 ',
        you.get_colored_name(),
        ' 쪽으로 달려오는 모습이 보였다.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        `${tachyon.uma_sex_title}A`,
        '사, 살려 줘!',
      );
      await tachyon.say_and_wait(
        '겁내지 말게…… 괜찮네! 잠깐 시간만 빌려서 조사 몇 가지, 질문 몇 가지, 그리고…… 그리고 약도 조금만 시험해 보면……!',
      );
      era.println();
      await era.printAndWait([
        '그 ',
        tachyon.uma_sex_title,
        '은(는) ',
        you.get_colored_name(),
        '에게 점점 다가오고 있었다.',
      ]);
      era.print([you.get_colored_name(), '은(는) 결심했다……']);
      era.printButton('두 사람을 통과시킨다', 1);
      era.printButton('타키온을 막는다', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          '트레이너',
          you.adult_sex_title,
          ', 왜 보고만 있는 건가요!?',
        ]);
        await tachyon.say_and_wait([
          callname,
          ', 어째서 ',
          tachyon.sex,
          '를 막아 주지 않는 건가!',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몸을 비켜 두 사람을 지나가게 했다.',
        ]);
        await era.printAndWait(
          '두 사람에게서 동시에 따지는 목소리가 터져 나왔다. 하지만 그 내용은 정반대였다.',
        );
        await era.printAndWait([you.get_colored_name(), '은(는) 어깨를 으쓱했다.']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 방식이 옳지 않다는 건 안다. 하지만 ',
          tachyon.sex,
          '의 모르모트인 이상 실험에도 협조해야 한다.',
        ]);
        await era.printAndWait('……진퇴양난이다.');
        await era.printAndWait([
          '그래서 ',
          you.get_colored_name(),
          '은(는) 생각하기를 포기하고 어느 편도 들지 않기로 했다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          '翌日、',
          you.get_colored_name(),
          '이(가) 실험실에 도착하니 평소 책상에 놓인 자신의 약이 두 배로 늘어나 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을(를) 바라보자, ',
          tachyon.sex,
          '은(는) 무표정한 채 ',
          you.get_colored_name(),
          '을(를) 바라보고 있었다.',
        ]);
        await era.printAndWait('…………결국 피해자는 자신이었다.');
      } else {
        await era.printAndWait('실험의 옳고 그름은 일단 제쳐 두자.');
        await era.printAndWait([
          '오늘 훈련에서 ',
          tachyon.get_colored_name(),
          '은(는) 이미 충분히 달렸다. 더 했다간 몸을 다칠 수도 있다.',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          '트레이너',
          you.adult_sex_title,
          '! 감사합니다!',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 은(는) ',
          tachyon.get_colored_name(),
          '을(를) 붙잡았다.',
        ]);
        await era.printAndWait([
          '연하의 ',
          tachyon.uma_sex_title,
          '은(는) 멀어졌고, ',
          tachyon.get_colored_name(),
          '은(는) 더는 따라잡기 어렵다는 걸 깨닫고 원망스럽게 ',
          you.get_colored_name(),
          '을(를) 노려보았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 가슴에 불길한 예감이 스쳤다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          '翌日、',
          you.get_colored_name(),
          '이(가) 실험실에 도착하니 평소 책상에 놓인 자신의 약이 두 배로 늘어나 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을(를) 바라보자, ',
          tachyon.sex,
          '은(는) 무표정한 채 ',
          you.get_colored_name(),
          '을(를) 바라보고 있었다.',
        ]);
        await era.printAndWait('……………어제의 예감은 옳았다.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ts_add_low_rel
  ts_add_low_rel: (() => {
    const title = '추가 실험';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await tachyon.say_and_wait(
        '아직 부족하네. 실험 데이터가 산더미만큼 빠져 있어서……',
      );
      await tachyon.say_and_wait(
        '계속해야 하네…… 계속하고 싶지 않다면 돌아가게. 혼자서도 할 수 있으니까.',
      );
      era.println();
      era.print([you.get_colored_name(), '은(는) 결심했다.']);
      era.printButton('맡긴다', 1);
      era.printButton('중지한다', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '단순한 추가 훈련이었다면 말렸을지도 모른다.',
        );
        await era.printAndWait('하지만 실험 데이터의 부족은……');
        era.println();
        await you.say_and_wait('확실히 치명적이지…… 그렇다면 오늘 조금 더 남자.');
        await tachyon.say_and_wait(
          '……돌아가라고 하지 않았나. 추가 훈련이 아닐세. 내 실험에 데이터가 필요할 뿐이네.',
        );
        you.say('그래, 그러니까.');
        era.printButton('「실험에 조수가 없으면 곤란하지 않겠어?」', 1);
        era.printButton(
          '「트레이너로서가 아니라 퇴근 후의 자유시간이야. 어떻게 쓰든 내 마음이지.」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait('…………후후.');
        await tachyon.say_and_wait('그럼 데이터 기록을 부탁하겠네.');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 고개를 끄덕이고 ',
          tachyon.sex,
          '이(가) 다시 달리기 시작하는 모습을 보았다.',
        ]);
      } else {
        await era.printAndWait('안 돼.');
        await era.printAndWait(
          '명목이 무엇이든 추가 훈련은 허용할 수 없다.',
        );
        await era.printAndWait([
          '게다가 ',
          tachyon.get_colored_name(),
          '도 알고 있을 것이다. 이런 식으로는 효율이 오르지 않는다. 무리해서 서두르면 오히려 실수가 늘어날 뿐이다.',
        ]);
        era.println();
        await tachyon.say_and_wait('…………쳇.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 아무 말 없이 돌아갔다.',
        ]);
        await era.printAndWait([
          '이치에 맞는 설득이라면 순순히 받아들인다. 그것도 ',
          tachyon.sex,
          '의 장점이겠지.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_47_23
  we_47_23: (() => {
    const title = '최속? 최강?';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await tachyon.print_and_wait('더 빠르게.');
      await tachyon.print_and_wait('더욱더 빠르게.');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 밤의 훈련장을 달리고 있었다.',
      ]);
      await tachyon.print_and_wait(
        '앞뒤 가리지 않고 한계를 갈구하며, 속도의 한계와 가능성의 한계를 쫓았다.',
      );
      await tachyon.print_and_wait(
        '마치 광속을 초월하는 입자, 타키온처럼.',
      );
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.say_and_wait('쳇…… 역시 안 되는 건가……');
      era.println();
      await tachyon.print_and_wait('만물에는 대가가 따르는 법이다.');
      await tachyon.print_and_wait([
        '과거에 ',
        tachyon.uma_sex_title,
        '의 한계를 돌파하려다 목숨을 대가로 치른 자가 있었다고 한다.',
      ]);
      await tachyon.print_and_wait(
        '그런 대가를 치러서라도 정말 한계를 돌파할 수 있다면 상관없었을 것이다.',
      );
      await tachyon.print_and_wait([
        '그러나 ',
        tachyon.get_colored_name(),
        '의 두 다리에는 그런 대가를 치를 자격조차 허락되지 않았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '무슨 짓을 해도 한계를 넘을 수 없군…… 평범함에 안주할 것인가, 아니면……',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 발걸음을 멈추었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……나의 한계는 여기까지인 건가?');
      era.println();
      await tachyon.print_and_wait([
        tachyon.uma_sex_title,
        '의 한계가 아닌, ',
        tachyon.get_colored_name(),
        '만의 한계였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…………그렇다면 이 길이 막혔을 때는…… 플랜 B를 선택해야 하는 건가.',
      );
      era.println();
      await tachyon.print_and_wait(
        '「최속」의 한계를 포기하고 「최강」의 한계를 선택하는 것.',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 실패해도 좋다. 실패한 후에 ',
        tachyon.sex,
        '를 대신할 사람이 있다면 그걸로 충분했다.',
      ]);
      await tachyon.print_and_wait('꿈을 타인에게 맡기는, 자기 도피와도 같은 선택이었다.');
      await tachyon.print_and_wait(
        '원래라면 이것이야말로 가장 이성적인 선택이며, 실현 가능성이 더 높은 이에게 가능성을 위탁하는 것이라고 스스로를 설득할 수 있었을 것이다.',
      );
      await tachyon.print_and_wait('하지만……');
      era.println();
      await you.used_to_say_and_wait('나는 타키온을 믿어.');
      await you.used_to_say_and_wait('타키온이라면 분명 문제없을 거야.');
      await you.used_to_say_and_wait([
        '분명 삼관은 물론이고, ',
        tachyon.uma_sex_title,
        '의 가능성마저 뛰어넘을 수 있을 거야……!',
      ]);
      era.println();
      await tachyon.print_and_wait('그 사람이 자신에게 걸어 주는 신뢰.');
      await tachyon.print_and_wait([
        you.sex,
        '에 대한 배신이나 다름없는 행위인데…… 정말 괜찮은 것일까.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……아니, 이건 배신이 아니야. ',
        you.sex,
        '에게 더 나은 선택지를 주는 것뿐이야…… 그러니……',
      ]);
      era.println();
      await tachyon.print_and_wait('망설임.');
      await tachyon.print_and_wait('공포.');
      await tachyon.print_and_wait('혼란.');
      await tachyon.print_and_wait('대체 어떻게 해야 좋을까.');
      era.println();
      await tachyon.say_and_wait('……그렇게 하지.');
      era.println();
      await tachyon.print_and_wait('다음 달의 월계배.');
      await tachyon.print_and_wait(
        '학생회장이 주최하는, 학년이나 본격화 정도에 상관없이 참가할 수 있는 레이스였다.',
      );
      await tachyon.print_and_wait(
        '……만약 참가한다면 더비 이후의 짧은 휴양기 동안……',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 두 다리는 분명 견뎌 내지 못할 것이다.',
      ]);
      await tachyon.print_and_wait(
        '하지만 이런 데이터 수집 기회를 놓친다면 나중에 또 기회가 올까?',
      );
      await tachyon.print_and_wait([
        '아니, 애초에…… ',
        tachyon.get_colored_name(),
        '에게 정말 「나중」이라는 게 있기는 한 건가?',
      ]);
      await tachyon.print_and_wait('차라리…… 이 레이스에서 모든 힘을 쏟아붓는 것은 어떨까?');
      era.println();
      await tachyon.print_and_wait('달빛 아래의 광자는 여전히 방황하고 있었다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_15
  ws_15: (() => {
    const title = '실험 과제 책정';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await tachyon.say_and_wait('나가고 싶은 레이스?');
      era.println();
      await era.printAndWait([
        '옛 이과 준비실, 곧 ',
        tachyon.get_colored_name(),
        '의 실험실에서 ',
        you.get_colored_name(),
        '은(는) 작은 소파에 앉아 실험대 앞에 있는 ',
        tachyon.get_colored_name(),
        '에게 고개를 끄덕였다.',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        '와 계약한 첫날에 물어봤어야 할 일이었지만 당시의 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '에게 너무 매료된 나머지 이를 거의 완전히 잊고 있었다.',
      ]);
      await era.printAndWait([
        '어찌 됐든 트윙클 시리즈에 참가하려면 레이스 일정 계획은 반드시 필요하다. ',
        tachyon.sex,
        '의 선택을 들어야 ',
        tachyon.sex,
        '에게 더 적합한 훈련 방향을 정할 수 있기 때문이다.',
      ]);
      await era.printAndWait('클래식 삼관 노선일까, 아니면 티아라? 그것도 아니면 마일?');
      await era.printAndWait([
        '단거리는…… 아마 안 되겠지. 미안하지만 ',
        tachyon.get_colored_name(),
        '에게는 그쪽 적성이 없을 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……레이스? 흥미 없네.');
      await tachyon.say_and_wait(
        '애당초 내 연구는 나 자신의 가능성을 위한 것. 남이야 어찌 되든 상관없네. 강약을 겨루는 건 어린애들의 놀이에 불과해.',
      );
      await era.printAndWait([
        '매우 ',
        tachyon.get_colored_name(),
        '다운 대답이었다.',
      ]);
      await era.printAndWait([
        '솔직히 말해서 ',
        tachyon.sex,
        '가 그렇게 대답할 것은 충분히 예상한 바였다.',
      ]);
      await era.printAndWait('하지만 트레이너로서 다해야 할 책임이 있었다.');
      await era.printAndWait([
        '게다가…… ',
        tachyon.sex,
        '에게 마음을 빼앗긴 팬으로서 자신이 응원하는 우마무스메가 더 큰 무대에서 빛나길 바라는 건 당연하지 않은가?',
      ]);
      era.println();
      await era.printAndWait([
        '그리하여 ',
        you.get_colored_name(),
        '은(는) 말을 정리하고 입을 열었다.',
      ]);
      era.println();
      if (love >= 50 && relation <= 225 && tachyon.sex_code !== 1) {
        era.printButton(
          `「그건 네게 레이스가 필요하기 때문이야. ${tachyon.uma_sex_title}에게는 레이스가 필요해.」`,
          1,
        );
        await era.input();
        await era.printAndWait('이것은 추측도 허세도 아닌 사실의 진술이었다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게는 레이스가 필요하다. ',
          tachyon.sex,
          '의 실험을 검증하기 위해서.',
        ]);
        await era.printAndWait([
          tachyon.uma_sex_title,
          '에게는 레이스가 필요하다. 그 투쟁심을 발산하기 위해서.',
        ]);
        await era.printAndWait([
          '두 가지 요구를 동시에 만족시킬 수 있으니 ',
          tachyon.sex,
          '에게 거절할 이유는 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……무슨 뜻인지는 알겠지만, 자네 화법은 정말 정이 안 가는군.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 차가운 눈으로 ',
          you.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        era.println();
        await era.printAndWait('아무래도 좀 더 강한 자극이 필요한 걸까? 그렇다면……');
        era.println();
        await you.say_and_wait(
          '아, 만약 타키온이 지는 게 무서워서 출전을 거절하는 거라면 이해할 수 있어.',
        );
        await you.say_and_wait(
          '타키온의 자존심이 걸린 문제이기도 하고, 이번 세대에는 강자도 많으니까.',
        );
        await you.say_and_wait([
          '만약 실력으로 타키온을 능가하는 ',
          tachyon.uma_sex_title,
          '가 나타난다면 한계를 넘었다느니 하던 타키온의 말은 마치……',
        ]);
        era.println();
        await era.printAndWait('우스갯소리처럼 들릴 테니까.');
        await era.printAndWait([
          '양손에 시험관 열 개를 집어 들고 관자놀이에 핏대를 세운 ',
          tachyon.get_colored_name(),
          '을(를) 보고 ',
          you.get_colored_name(),
          '은(는) 뒤에 이어질 말을 삼킬 수밖에 없었다.',
        ]);
        await tachyon.say_and_wait([
          callname,
          ', 자네란 인간은…… 붙임성이 없는 걸 넘어 매를 버는 소리만 골라 하는군. 정말 죽는 게 두렵지 않은 건가?',
        ]);
        await you.say_and_wait('으으으으……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 변명하려 입을 열었지만 ',
          tachyon.get_colored_name(),
          '에게 입을 막혀 아무 말도 할 수 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('어디 보자…… 그래, 이게 좋겠군.');
        era.println();
        await era.printAndWait([
          '계속 손으로 막고 있는 게 번거롭다고 생각했는지 ',
          tachyon.get_colored_name(),
          '의 머릿속에 좋은 생각이 스친 모양이었다.',
        ]);
        await era.printAndWait([
          '동시에 ',
          you.get_colored_name(),
          '의 뇌리에도 나쁜 일이 일어날 것 같은 예감이 스쳤다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は白衣の裾をゆっくり持ち上げた。この時点で ',
          you.get_colored_name(),
          ' の危機の予感は頂点だ。だが逃げたくても、どこへ？',
        ]);
        await era.printAndWait([
          'まして',
          tachyon.uma_sex_title,
          'の手から逃げる？ ',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' に狂気と呼ばれても、愚か者ではない。不可能な妄想はしない',
        ]);
        era.println();
        await era.printAndWait('白衣の下は、潤んだ光を返す黒いパンストだった');
        await era.printAndWait(
          '朝から豊かな尻と細い脚を封じ込めてきた蒸れたパンストは、一日の熟成を経て、内も外も完全に味が沁みている',
        );
        await era.printAndWait([
          'しかも履いているのは、普段から生活がだらしない ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は恐怖で首を振った。だがもう遅い',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'はゆっくりパンストを下ろす。尻から外れた瞬間、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の身体が、その弾む尻の反動で小さく揺れたように見えた',
        ]);
        await era.printAndWait([
          'パンストが股まで下り、今まで醸してきた匂いを逃したくないかのように、黒い絹はまだ',
          tachyon.child_sex_title,
          'の両脚のあいだの神秘な部位と糸を引いていた————',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は今日、下着を履いていないのか？ ',
          you.get_colored_name(),
          ' はふと思った。この糸を見れば、答えは自明だ',
        ]);
        await era.printAndWait(
          '舞台の幕が上がるように、下の白い腿が露出する——それは、惨たらしい悲劇の開演でもあった',
        );
        era.println();
        await tachyon.say_and_wait(['さあ、', callname, '、口を開けて～～']);
        era.printButton('「むぐぐぐ！！」', 1);
        await era.input();
        await era.printAndWait([
          'このままではだめだ。内心に駆られ、',
          you.get_colored_name(),
          ' はそれでも徒労の抵抗を試みた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて四つん這いで実験室から逃げようとしたが、案の定、一歩目で ',
          tachyon.get_colored_name(),
          ' に人間には反応できない速度で背中に跨がれた',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の背に跨がり、パンストで ',
          you.get_colored_name(),
          ' の口を絞めた。口枷のように ',
          you.get_colored_name(),
          ' を固定し、締め付けに耐えかねた ',
          you.get_colored_name(),
          ' が口を開くと、パンストはそのまま頬と口角に食い込んだ',
        ]);
        await era.printAndWait([
          '瞬間、酸っぱく濃い臭いが ',
          you.get_colored_name(),
          ' の口に広がり、濡れた感触と、股間から来る淡い匂いが鼻腔を侵す。猛烈な匂いの襲撃に、',
          you.get_colored_name(),
          ' は四肢の力を失って膝をついた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '흠…… 이제 좀 속이 시원해졌군요. 본론으로 돌아가죠.',
        );
        await tachyon.say_and_wait(
          '레이스 출전은 당연히 필수예요. 어느 경주를 고를지는……',
        );
        await tachyon.say_and_wait(
          '후후, 그렇다면 삼관을 목표로 하죠. 그렇게 큰소리쳐 놓고 발목을 잡는다면 가만두지 않겠어요. 이의는 없겠죠?',
        );
        era.println();
        await era.printAndWait([
          '匂いの目眩で意識が落ちる直前、',
          you.get_colored_name(),
          ' の最後の考えは——意見があっても、口を開かせてくれ、というものだった……',
        ]);
      } else {
        if (
          love >= 50 &&
          relation > 225 &&
          tachyon.sex_code - 1 &&
          you.sex_code > 0
        ) {
          era.printButton('왜냐하면……', 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 입을 열려 했으나, 뒤돌아선 ',
            tachyon.get_colored_name(),
            '이 입술을 손가락으로 누르는 바람에 가로막혔다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 일어서서 소파에 앉아 있는 ',
            you.get_colored_name(),
            '을(를) 내리눌렀고, ',
            you.get_colored_name(),
            '과(와) 시선을 정면으로 마주하며 응시했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '자네가 무슨 말을 하려는지 알고 있네. 공적으로나 사적으로나 내가 레이스에 참가해야 할 이유와 필요성도 알고 있어. 하지만……',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 몸을 돌려 ',
            you.get_colored_name(),
            '의 허벅지 위에 털썩 주저앉더니, ',
            you.get_colored_name(),
            '의 허벅지 바깥쪽을 툭툭 쳤다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '지금은 레이스에 나갈 기분이 아니란 말이지. 그러니 방법을 좀 생각해보게나. 나를 기쁘게 할 만한 말을 해보란 말이야. 기분이 좋아지면…… 레이스에 나갈 마음이 생길지도 모르지 않나?',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 쓴웃음을 지으며 ',
            tachyon.get_colored_name(),
            '의 허리를 껴안았다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 아주 자연스럽게 몸을 밀착시키며 가장 편안한 자세를 잡았다.',
          ]);
          era.println();
          await you.say_and_wait('타키온이 제일 멋져.');
          await you.say_and_wait('타키온은 너무 귀여워.');
          await you.say_and_wait('타키온은 정말 아름다워.');
          await you.say_and_wait([
            '가장 대단하고 강한 ',
            tachyon.uma_sex_title,
          ]);
          await you.say_and_wait([
            '초광속의 ',
            tachyon.sex_code === 1 ? '왕자님' : '공주님',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 계속해서 ',
            tachyon.get_colored_name(),
            '의 귓가에 ',
            tachyon.sex,
            '를 칭찬하는 말을 계속 속삭였다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '의 귀가 쉬지 않고 쫑긋거리는 모습에서 그 말들이 얼마나 효과적인지가 드러났다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 의기양양한 표정을 지으며 ',
            you.get_colored_name(),
            '의 허벅지를 세게 때리며 계속하라는 신호를 보냈다.',
          ]);
          era.println();
          await tachyon.say_and_wait('흐흐…… 더 해보게, 더! 더 많이 말해봐!');
          era.println();
          await era.printAndWait([
            '허벅지가 조금 얼얼해진 ',
            you.get_colored_name(),
            '은(는) 문득 장난기가 발동했다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 안고 있던 손을 풀어 ',
            tachyon.sex,
            '의 허벅지 바깥쪽으로 옮겼다.',
          ]);
          era.println();
          await tachyon.say_and_wait(['……？ ', callname, '？']);
          era.printButton(
            '「タキオンが走るとき、その大きな尻が揺れるのを見たい」',
            1,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'の豊かな尻を強く叩いた',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'の全身が震え、ちょうど密着したパンストに黒い波が幾重も立った',
          ]);
          await you.say_and_wait(
            'レースのあと、控え室でタキオンの中を白く満たしたい',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' の口調はさっきの称賛と同じく柔らかい。中身だけが、ひどく下品だ',
          ]);
          await era.printAndWait([
            '錯覚かもしれないが、',
            tachyon.get_colored_name(),
            ' の耳はかえってピンと立ったように見えた',
          ]);
          era.println();
          await you.say_and_wait(
            'それからバイブで塞いで、そのまま Winning Live に立たせる',
          );
          await you.say_and_wait(
            '衣装を着たタキオンが、腹の膨らみを抱えたまま舞台中央に……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' はゆっくり',
            tachyon.sex,
            'の腹を撫で、言葉を終えようとした……',
          ]);
          await era.printAndWait([
            'だが、',
            you.get_colored_name(),
            ' の手は握られた',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が振り返る。いつの間にか、暗紅色の瞳は情欲に濡れた薄桃色になっていた',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……そんな言葉で私を煽って……末路が何か、わかっていますわね……❤',
          ]);
          era.println();
          await era.printAndWait('ああ、やりすぎた');
          await era.printAndWait([
            'いつからか、',
            tachyon.get_colored_name(),
            ' の尻が ',
            you.get_colored_name(),
            ' の下腹に乗っている',
          ]);
          await era.printAndWait(
            '擦り続けている。主人の調教を待つ子犬のように',
          );
          era.println();
          await era.printAndWait([
            'このまま始めてもいい……だが、最初の ',
            you.get_colored_name(),
            ' の目的は何だったか……？',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'レースは出ますわ❤️三冠❤️目標は三冠でいい❤️さあ……',
            callname,
            '❤️早く❤️来て❤️',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は微笑み、身を翻して ',
            tachyon.get_colored_name(),
            ' を下に敷いた',
          ]);
        } else if (relation <= 225) {
          era.printButton('이익으로 유혹한다', 1);
          await era.input();
          await you.say_and_wait(
            '레이스에 참가하면 상금을 실험에 쓸 수 있잖아. 그러면 연구비 문제도 해결될 거야.',
          );
          era.println();
          await era.printAndWait([
            '먼저 이익으로 유혹해 본다. ',
            tachyon.get_colored_name(),
            ' 같은 연구자에게 감정에 호소하는 것은 우스운 일이다. 논리적으로 상대를 설득하는 것이 최선이다.',
          ]);
          await tachyon.say_and_wait([
            '기각하네, ',
            callname,
            '. 내 연구의 부산물만으로도 충분히 돈을 벌 수 있어. 레이스 준비에 낭비되는 시간의 기회비용을 따져보면 상금이 주는 이득보다 훨씬 크단 말일세.',
          ]);
          era.println();
          await you.say_and_wait(
            '하지만 레이스로 모여드는 팬들은? 팬들의 소비력도 상당한 연구비가 될 텐데?',
          );
          era.println();
          await tachyon.say_and_wait(
            '자네 말이 맞네. 인기를 얻는다면 그 이익이 연구 자체의 이익보다 클지도 모르지……',
          );
          await tachyon.say_and_wait(
            '하지만 그렇게 되면 소위 말하는 팬 서비스에 들어가는 시간도 늘어나게 돼. 위닝 라이브나 이미지 관리 같은 것들 말이야. 시간 비용이 더 늘어난단 소리지.',
          );
          await tachyon.say_and_wait(
            '게다가 자네는 한 가지 잊은 게 있군. 내가 돈이 필요한 이유는 실험을 위해서야. 실험이 근본적인 목적이지, 돈벌이가 목적이 아니란 말일세.',
          );
          era.println();
          await you.say_and_wait(
            '……레이스를 포기하면 트레센 학원의 설립 취지에 어긋나는 행동이 되겠지……',
          );
          await you.say_and_wait(
            '보통은 이렇게까지 심각해지진 않겠지만, 이미 전과가 있는 타키온이라면…… 최악의 경우 퇴학당할 수도 있어.',
          );
          era.println();
          await era.printAndWait('이익 유혹이 통하지 않으니 이번엔 위협을 해본다.');
          await era.printAndWait(
            '사람을 겁주는 건 좋지 않지만, 실제로 일어날 수 있는 가능성이긴 했다.',
          );
          await era.printAndWait([
            '그 이사장님이 그런 일을 허락할 것 같지는 않았지만, 지금은 일단 ',
            tachyon.get_colored_name(),
            '을 설득하기 위한 카드로 썼다.',
          ]);
          era.println();
          await era.printAndWait([
            '하지만 ',
            tachyon.get_colored_name(),
            '의 반응은 마치 재미있는 농담이라도 들은 것 같았다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            ', 우리가 처음 만났을 때를 기억하나? 그때 이미 퇴학 위협은 한 번 겪었네. 내가 정말 그런 걸 신경 쓸 거라 생각하나?',
          ]);
          era.println();
          await you.say_and_wait('！', true);
          await era.printAndWait('순간 허점을 찔리고 말았다.');
          await era.printAndWait([
            '기억을 더듬어 보면, 당시의 자신은 퇴학당할지도 모른다는 소리를 듣고 정신없이 ',
            tachyon.get_colored_name(),
            '을 찾아다녔었다.',
          ]);
          await era.printAndWait([
            '하지만 정작 당사자인 ',
            tachyon.sex,
            '는 평소처럼 실험실에서 자기 할 일을 하고 있었을 뿐이었다.',
          ]);
          await era.printAndWait(
            '자신과 계약할 당시의 태도로 보아, 딱히 대안이 있어 보이지도 않았다.',
          );
          await era.printAndWait([
            '다시 말해…… ',
            tachyon.sex,
            '는 정말로 퇴학 여부 따위는 안중에도 없었던 것이다.',
          ]);
          era.println();
          await era.printAndWait([
            '어떻게 해야 할까. 회유도 위협도 통하지 않는 ',
            tachyon.sex,
            '를 설득할 방법이 대체 뭐가 있을까.',
          ]);
          era.printButton('포기한다', 1);
          era.printButton('계속 생각한다', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              '속수무책. 그것이 지금 ',
              you.get_colored_name(),
              '의 상태였다.',
            ]);
            await era.printAndWait([
              '방법이 없었다. ',
              tachyon.get_colored_name(),
              '에게 있어 ',
              tachyon.sex,
              '가 원하는 것을 레이스에서 얻어야 할 필요가 전혀 없었기 때문이다.',
            ]);
            await era.printAndWait([
              '그리하여 ',
              you.get_colored_name(),
              '은(는) 스스로도 가장 가능성이 없다고 생각했던 최후의 수단을 쓰기로 했다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '그래서, ',
              callname,
              ', 나를 설득할 다른 방법이 더 남아 있나?',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '는 흥미진진한 눈으로 ',
              you.get_colored_name(),
              '을(를) 바라보다가, 다음 순간 표정이 경악으로 바뀌었다.',
            ]);
            await era.printAndWait(
              '이유는 간단했다. 누구라도 눈앞에서 멀쩡히 대화하던 사람이 갑자기 바닥에 무릎을 꿇는다면 놀라지 않을 수 없을 것이다.',
            );
            era.println();
            era.printButton('「왜냐하면…… 보고 싶으니까」', 1);
            await era.input();
            await you.say_and_wait('타키온이 경기장에서 달리는 모습을 보고 싶어.');
            await you.say_and_wait([
              '다른 ',
              tachyon.uma_sex_title,
              '와 경쟁하며 마지막에 승리하는 모습을 보고 싶어.',
            ]);
            await you.say_and_wait(
              '타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶단 말이야!',
            );
            await era.printAndWait(
              '목소리는 갈수록 커졌고 감정도 격해졌다. 마지막 문장은 거의 소리를 지르다시피 했다.',
            );
            await era.printAndWait([
              '마지막 진심을 담은 호소가 ',
              tachyon.get_colored_name(),
              '에게 닿기를 바랄 뿐이었다.',
            ]);
            await era.printAndWait('모든 것이 그저 자신의 독단적인 바람일지도 모르지만 말이다.');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 전전긍긍하며 머리를 바닥에 대고 상대의 대답을 기다렸다.',
            ]);
            era.println();
            await tachyon.say_and_wait('……… 고작 그런 일로…… 도게자를 해?');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 고개를 들지 않고 그대로 엎드려 있었다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '나는 레이스에도, 퇴학에도 관심 없네.',
            );
            await tachyon.say_and_wait([
              '솔직히 말해서, 이런 ',
              tachyon.uma_sex_title,
              '를 담당하는 건 자네에게도 고역이겠지……',
            ]);
            await tachyon.say_and_wait(
              '나라면 지금 당장 협의 불이행을 이유로 계약 해지를 요구했을 텐데…… 자네는……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '는 ',
              you.get_colored_name(),
              '의 행동을 형용할 말을 찾지 못해 잠시 말을 멈췄다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '………… 자네 머릿속엔 대체 뭐가 들어있는 건가. 그럴 만한 가치가 있다고 보나?',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 대답 대신 고개를 들어 ',
              tachyon.sex,
              '를 바라보았다.',
            ]);
          } else {
            await era.printAndWait([
              '문득 ',
              you.get_colored_name(),
              '은(는) ',
              tachyon.sex,
              '의 말 속에서 어떤 영감을 얻었다.',
            ]);
            era.println();
            await era.printAndWait([
              '서로 알고 지낸 시간은 그리 길지 않을지도 모른다.',
            ]);
            await era.printAndWait([
              '하지만 ',
              you.get_colored_name(),
              '이(가) 파악한 ',
              tachyon.get_colored_name(),
              '이라는 ',
              tachyon.uma_sex_title,
              '는……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              '는 결코 무의미한 일에 시간을 낭비할 성격이 아니었다.',
            ]);
            await era.printAndWait('그래, 무의미한 일에는 절대 시간을 쓰지 않는다.');
            await era.printAndWait('그렇다면 말을 뒤집어 보자.');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '가 시간을 내어 하는 일이라면 반드시 그럴 만한 의미가 있다는 뜻이다.',
            ]);
            await era.printAndWait('그렇다면 질문 하나.');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이 트레센 학원에 들어온 이유는?',
            ]);
            era.println();
            await era.printAndWait([
              '정말로 필요가 없다면 ',
              tachyon.sex,
              '는 결코 이런 선택을 하지 않았을 것이다.',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              '타키온이 학원에 들어와서 얻을 수 있는 이득은……',
            ]);
            await era.printAndWait([
              '생각할 것도 없다. ',
              tachyon.sex,
              '의 목표인——',
              tachyon.uma_sex_title,
              '의 가능성을 찾고, 그 한계를 넘어서는 것.',
            ]);
            await era.printAndWait([
              '그러기 위해선 먼저 ',
              tachyon.uma_sex_title,
              '의 모든 것을 철저히 연구해야만 한다.',
            ]);
            await era.printAndWait([
              '그렇다면 고품질의 ',
              tachyon.uma_sex_title,
              '들이 모여 있는 트레센 학원이야말로 최적의 연구 장소임이 분명했다.',
            ]);
            await era.printAndWait([
              '따라서 퇴학은 결코 ',
              tachyon.sex,
              '가 말한 것처럼 가벼운 문제가 아니었다.',
            ]);
            era.println();
            await era.printAndWait('질문 둘.');
            await era.printAndWait([
              '왜 ',
              tachyon.get_colored_name(),
              '은 학생 신분으로 학원에 들어왔는가.',
            ]);
            era.println();
            await era.printAndWait([
              '트레센 학원에는 학생 외에도 여러 지원 직종이 있고, 레이스에 출전하지 않는',
              tachyon.uma_sex_title,
              '관련 학과도 있다. 번거로운 일을 피하고 싶다면 왜 처음부터 그런 길을 선택하지 않았을까?',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 어떤 단서를 포착했다.',
            ]);
            era.println();
            await era.printAndWait([
              '레이스 ',
              tachyon.uma_sex_title,
              '가 된 이유는, 경기장에서 달리기 위해서다.',
            ]);
            await era.printAndWait([
              '레아스에 나갈 생각이 없다면 애당초 레이스 ',
              tachyon.uma_sex_title,
              '를 선택할 이유가 없기 때문이다.',
            ]);
            await era.printAndWait([
              '이쯤 되면 ',
              tachyon.get_colored_name(),
              '이(가) 아까 말했던 레이스에 관심 없다는 말은……',
            ]);
            await era.printAndWait([
              '모르겠다. 왜 그런 거짓말을 했는지는 모르겠지만, ',
              tachyon.sex,
              '가 거짓말을 한 이유는 모르겠지만, ',
            ]);
            await era.printAndWait(
              '일단 눈앞의 난관을 헤쳐 나가는 데는 그 이유까지 알 필요는 없었다.',
            );
            era.println();
            era.printButton('「너는 신경 쓰고 있어. 왜냐하면 실험에는 검증이 필요하니까」', 1);
            await era.input();
            await era.printAndWait('틀림없다.');
            await era.printAndWait('이것이 레이스에 참가해야 하는 이유였다.');
            await era.printAndWait('모든 것은 연구와 최종적인 목적을 위해서였다.');
            era.println();
            await you.say_and_wait([
              '만약 다른 ',
              tachyon.uma_sex_title,
              '들이나 동기들조차 이기지 못한다면, 속도의 한계를 넘겠다는 말은 성립하지 않아.',
            ]);
            await you.say_and_wait([
              '나도 너도 ',
              tachyon.get_colored_name(),
              '이 누구에게든 이길 수 있다는 확신은 있지만, 실험의 검증은 여전히 필수적이야.',
            ]);
            era.println();
            await era.printAndWait('마치 1+1=2라는 사실처럼.');
            await era.printAndWait(
              '설령 모든 사람이 답을 알고 있다 하더라도, 그것을 증명하는 계산식은 존재해야 한다.',
            );
            await era.printAndWait('그것은 불필요한 과정이 아니라 연구의 엄격함이었다.');
            await tachyon.say_and_wait(
              '……말은 잘하는군. 하지만 모의 레이스도 있지 않나?',
            );
            await tachyon.say_and_wait(
              '꼭 공식 레이스가 아니더라도 나는 기회만 있다면 동기나 더 강한 상대와 겨룰 수 있어. 상대를 찾는 게 어렵지도 않을 테고.',
            );
            await tachyon.say_and_wait(
              '만약 내가 압도적인 강함을 보여준다면, 본능에 충실한 맹수들이 나와 겨룰 기회를 놓치지 않을 걸세. 그렇지 않나?',
            );
            era.println();
            await era.printAndWait('매우 설득력 있는 답변이었다.');
            await era.printAndWait([
              '모의 레이스라 할지라도 ',
              tachyon.get_colored_name(),
              '처럼 강력한 ',
              tachyon.uma_sex_title,
              '와 겨룰 기회가 생긴다면, 상대도 반드시 100%의 실력을 발휘할 것이기 때문이다.',
            ]);
            await era.printAndWait('하지만……');
            era.println();
            era.printButton(
              `「120%의 실력을 발휘하는 ${tachyon.uma_sex_title}를 본 적 있어?」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait('………… 호오?');
            await era.printAndWait(
              '모의 레이스에서 보여주는 것은 언제나 평범한 실력일 뿐이다.',
            );
            await era.printAndWait(
              '한계를 넘어서는 것은 오직 진정한 승부의 세계에서만 가능하다.',
            );
            await era.printAndWait('동서고금을 막론하고 일어난 수많은 이변들이 그것을 증명하고 있었다.');
            era.printButton(
              `「${tachyon.uma_sex_title}의 특성이란, 오직 실전 경기장에서만 한계를 넘는 힘을 발휘한다는 거야」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              '………… 과연. 그것이 자네가 트레이너로서 내린 견해인가? 그 외에는? 다른 이유도 있나?',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '는 여전히 알 수 없는 묘한 눈빛으로 ',
              you.get_colored_name(),
              '을(를) 바라보았고, ',
              you.get_colored_name(),
              '은(는) 자기도 모르게 몸이 움츠러들었다.',
            ]);
            await era.printAndWait([
              '하지만 ',
              you.get_colored_name(),
              '은(는) 굴하지 않고 마음 깊은 곳에 담아두었던 진실한 이유를 꺼냈다.',
            ]);
            era.println();
            era.printButton('「………… 보고 싶어」', 1);
            await era.input();
            await tachyon.say_and_wait('응?');
            await tachyon.say_and_wait('…………');
            await you.say_and_wait('나는 타키온이 경기장에서 달리는 모습을 보고 싶어.');
            await you.say_and_wait([
              '다른 ',
              tachyon.uma_sex_title,
              '와 겨루어 마지막에 승리하는 모습을 보고 싶어.',
            ]);
            await you.say_and_wait(
              '타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶어.',
            );
            era.println();
          }
          await era.printAndWait([
            tachyon.sex,
            '는 ',
            you.get_colored_name(),
            '의 표정을 가만히 살피더니, 이내 ',
            you.get_colored_name(),
            '의 눈에 시선을 멈췄다. 마치 ',
            you.get_colored_name(),
            '이 처음 만났을 때처럼, 눈동자 깊은 곳을 꿰뚫어 보는 듯했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '………… 후후, 미치광이와 광인의 조합인가? 이거 재밌군, 재밌어!',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 갑자기 크게 웃기 시작한 ',
            tachyon.sex,
            '를 불안하게 바라보았다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '감정 변화의 이유는 정확히 알 수 없었지만, 상황은 ',
            you.get_colored_name(),
            '에게 유리한 쪽으로 흘러가는 것 같았다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '좋네. 실험 동물의 의욕을 고취하기 위해서라도 가끔은 적절한 보상이 필요한 법이지.',
          );
          await tachyon.say_and_wait(
            '참가하도록 하겠네. 기왕 뛰기로 한 거, 일단 가볍게 클래식 3관부터 따보도록 하지……',
          );
          await tachyon.say_and_wait([
            '설마 못 하겠다는 소린 안 하겠지, ',
            callname,
            '?',
          ]);
          era.println();
          await era.printAndWait(['하지만, ', tachyon.sex, '가 덧붙였다']);
          era.println();
          await tachyon.say_and_wait([
            '그 대가로…… 나를 지루하게 만들지 말게나, ',
            callname,
          ]);
        } else {
          era.printButton('「왜냐하면, 보고 싶으니까」', 1);
          await era.input();
          await tachyon.say_and_wait('…… 하아?');
          await you.say_and_wait('나는 타키온이 경기장에서 달리는 모습을 보고 싶어.');
          await you.say_and_wait([
            '다른 ',
            tachyon.uma_sex_title,
            '와 겨루어 마지막에 승리하는 모습을 보고 싶어.',
          ]);
          await you.say_and_wait(
            '타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶어.',
          );
          await era.printAndWait('그리고, 그 외에도……');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 잠시 생각하더니 다시 덧붙여 말했다.',
          ]);
          era.println();
          await you.say_and_wait(
            '물론, 혹시라도, 정말 만약에라도, 타키온이 레이스에서 지고 바닥에 엎드려서 분해하는 고통스러운 모습도 보고 싶어!',
          );
          await tachyon.say_and_wait('！');
          era.println();
          era.printButton('（오호, 도발이 먹혔나?）', 1);
          await era.input();
          await you.say_and_wait(
            '「하지만, 만약 타키온이 지는 게 무서워서 그런 거라면 이해해. 그럴 거라면 역시 안 나가는 게 낫겠지……」',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 짐짓 ',
            tachyon.get_colored_name(),
            '의 눈치를 살폈다. ',
            tachyon.sex,
            '의 분위기가 심상치 않은 것을 느끼고 서둘러 입을 다물며 물러났다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '…… 감히 칼리굴라 효과를 나에게 써먹다니, ',
            callname,
            ' 자네 간이 배 밖으로 나왔군.',
          ]);
          await you.say_and_wait('아니 난…… 윽푸헉!!?');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 반박하려 했으나, 일어난 ',
            tachyon.get_colored_name(),
            '이 중력 가속도를 실어 배 위로 주저앉는 바람에 마치 눌린 개구리 같은 비명을 내지르고 말았다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '흥…… 고작 자기 사리사욕을 위해 천재인 나의 소중한 시간을 이런 무의미한 투견판에 낭비하게 하려 들다니. 정말 대담하군.',
          ]);
          era.printButton('「그런 뜻이 아니라……」', 1);
          await era.input();
          await you.say_and_wait(
            '게다가 레이스에 참가하면 필요한 실험 데이터도 모을 수 있잖아……',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 자세를 고쳐 앉으며, ',
            you.get_colored_name(),
            '을(를) ',
            tachyon.sex,
            '가 앉기 가장 편한 인간 의자로 만들었다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '도 자연스럽게 손을 올려 ',
            tachyon.sex,
            '의 어깨를 주물러 주었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '후우…… 이거 정말 살 것 같군. 요즘 계속 실험대 앞에만 앉아 있었더니 온몸이 쑤셔서 말이야……',
          );
          await tachyon.say_and_wait('레이스 참가 말인데……');
          await tachyon.say_and_wait(
            '못 할 것도 없지. 목표는 일단 3관으로 정하겠네.',
          );
          await tachyon.say_and_wait(
            '동기들 사이에서 1위조차 못 한다면 확실히 한계를 논할 자격도 없으니까……',
          );
          await tachyon.say_and_wait([
            '그럼, ',
            callname,
            ', 자네가 정성을 다해 나를 보좌해 줄 거지?',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 광기 서린 눈빛을 보며 웃으며 대답했다.',
          ]);
          era.printButton('「물론이지」', 1);
          await era.input();
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '의 목표가 정해졌다',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_36
  ws_36: (() => {
    const title = '연도 연구 계획 수립';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} pocket ダンツフレーム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} hope_sta ホープフルステークス（色付き名）
     */
    const f = async (
      tachyon,
      pocket,
      you,
      callname,
      relation,
      love,
      hope_sta,
    ) => {
      await era.printAndWait([
        '데뷔전이 지나고 두 달 후, ',
        you.get_colored_name(),
        '은(는) 갑자기 ',
        tachyon.get_colored_name(),
        '에게 불려 실험실로 향했다.',
      ]);
      await era.printAndWait('평소처럼 또 약물 실험일 것이라 생각했으나, 예상치 못한 일이 기다리고 있었다……');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 나는 12월 말의 ',
        hope_sta,
        '에 출주할 생각이네. 준비해 주게나.',
      ]);
      era.printButton('「에? 호프풀 스테이크스?」', 1);
      await era.input();
      await tachyon.say_and_wait('음? 무슨 문제라도 있나?');
      era.println();
      await era.printAndWait([
        '방에 들어서자마자 ',
        tachyon.get_colored_name(),
        '은 마치 저녁 메뉴를 정하는 것 같은 가벼운 말투로 ',
        you.get_colored_name(),
        '에게 말했다.',
      ]);
      await era.printAndWait([
        '호프풀 스테이크스…… 그것은 12월 말에 열리는 G1 중거리 레이스로, 주니어급 ',
        tachyon.uma_sex_title,
        '들에게는 가장 중요한 레이스 중 하나였다.',
      ]);
      await era.printAndWait('일정상 아직 두 달이나 남았다. 지금 등록하면 늦지 않을 것이다.');
      await era.printAndWait([
        '승리할 수 있을지…… 솔직히 그런 것을 고민할 필요는 없었다. 세상에서 가장 빠른 속도는 광속이고, 그 광속보다 빠른 존재가 바로 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('유일한 의문은, ｢어째서인가｣ 였다.');
      await era.printAndWait([
        '평소 레이스에 큰 관심을 보이지 않던 ',
        tachyon.get_colored_name(),
        '이 왜 갑자기 특정 레이스에 나가려 하는 것일까.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마음속 의문을 그대로 입 밖에 냈다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 대답 대신 책상 위의 신문을 톡톡 쳤다. 그것은 오늘의 스포츠 뉴스였고, 기억이 맞다면……',
      ]);
      await era.printAndWait([
        '오늘의 가장 큰 뉴스는 「',
        pocket.get_colored_name(),
        '과 쿠로후네, ',
        hope_sta,
        ' 出走確定」',
      ]);
      era.println();
      await era.printAndWait([
        '과연 그렇군…… ',
        pocket.get_colored_name(),
        '이든 쿠로후네든 이 세대를 대표하는 주목받는 강자들이다.',
      ]);
      await era.printAndWait([
        '아무리 ',
        tachyon.get_colored_name(),
        '이라 해도, 같은 세대의 강자들과 겨뤄보고 싶은 생각이 든 것이리라……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '당연히 신약 시험을 위해서라네! 강적이 없는 레이스에서 어떻게 사람을 극한까지 몰아넣겠나. 극한에 닿지도 못한다면 약의 보조 같은 건 더더욱 필요 없지.',
      );
      era.println();
      await era.printAndWait('아…… 역시나 이런 전개일 줄 알았다. 알고 있었…… 음?');
      era.printButton('「잠깐, 레이스 중에 약을 쓰는 건…… 규정 위반이잖아?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '음? 자네는 그걸 걱정하는 건가, ',
        callname,
        '. 안심하게. 설마 자네는 그 어설픈 도핑 테스트 기술로 내 약을 잡아낼 수 있을 거라 생각하나?',
      ]);
      era.println();
      await you.say_and_wait('아니야! 요점은 그게 아니라고!');

      era.printButton(
        '「그건…… 조금…… 스포츠 정신에 어긋나는 게 아닐까……?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 상대의 기분을 상하게 하지 않도록 조심스럽게 단어를 골라가며 말했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '응? ',
        callname,
        '? 설마 자네, 내가 쓰려는 약이 흥분제 같은 거라고 생각하는 건가? 내가 자네 눈에는 고작 그런 사람으로 보였나 보군?',
      ]);
      era.println();
      await era.printAndWait([
        '이걸 적반하장이라고 해야 할까. ',
        you.get_colored_name(),
        '은(는) 서둘러 고개를 저으며 부정했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……안심하게나. 이 약은 흥분제 따위가 아니네. 경기장에서 속도를 높여주는 그런 효과도 아니야……',
      );
      await tachyon.say_and_wait(
        '다만, 효과를 실험하기 위해 충분히 강력한 상대가 필요할 뿐인 약이라네.',
      );
      era.println();
      era.print([tachyon.sex, '의 말을 듣고 ', you.get_colored_name(), '……']);
      era.printButton('믿는다', 1);
      era.printButton('半信半疑', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '그렇구나. ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 설명을 듣고 고개를 끄덕였다. 그리고는 별말 없이 ',
          tachyon.get_colored_name(),
          '의 레이스 참가 절차를 돕기 위해 움직였다. 오히려 이 모습이 ',
          tachyon.get_colored_name(),
          '을 당황하게 만들었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '아니, 아니…… ',
          callname,
          ', 자네는 내 말을 그렇게 쉽게 믿어버리는 건가?',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 고개를 끄덕였다. 오히려 ',
          tachyon.get_colored_name(),
          ' 본인이 왜 그렇게 놀라는지 이해하지 못하는 표정이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '만약 내가, 만약 그게 정말로…… 그러니까, 만약 내가 자네를 속인 거라면 어쩔 셈인가?',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '에게 속았다면……']);
        await era.printAndWait('생각해 본 적 없는 문제였으나, 만약 그렇다 하더라도.');

        era.printButton('「속았다고 해도 상관없어」', 1);
        await era.input();
        await era.printAndWait('그날 이미 결정한 일이었다.');
        await era.printAndWait([tachyon.sex, '의 가능성과 그 모든 것을 믿기로 말이다.']);
        await era.printAndWait([
          tachyon.sex,
          '가 더 먼 세계를 볼 수만 있다면, 속는 것쯤이야 아무것도 아니었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……신뢰, 아니, 맹신인가?');
        era.println();
        await era.printAndWait('盲信');
        await era.printAndWait('생각해 보니 정말 그랬다.');
        await era.printAndWait([
          '자신은 ',
          tachyon.get_colored_name(),
          '에 의해 다른 것은 더 이상 보이지 않게 된 맹인과 같았다.',
        ]);
        await era.printAndWait([
          '눈이 멀었기에, 그렇기에 더욱 광명을 갈구하고, 가장 빛나는 ',
          tachyon.sex,
          '를 갈망하는 것이다.',
        ]);
        era.println();
        if (relation <= 375) {
          await tachyon.say_and_wait([
            '하하하, 좋네. 그렇다면 내 발걸음을 놓치지 말고 잘 따라오게나, ',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 소매를 휘저으며 다시 실험으로 돌아갔다. 이것으로 대화가 끝났음을 선언한 셈이다.',
          ]);
          era.println();
          await era.printAndWait('떠나기 전, 마지막 한 마디를 덧붙였다.');
          era.println();
          await tachyon.say_and_wait(
            '포상으로 약속하지. 자네는 특등석에서 가능성의 저편을 목격하게 될 걸세!',
          );
        } else {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            '어째서인지 ',
            tachyon.get_colored_name(),
            '은 조금 불만스러운 표정이었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '보통의 경우라면 나에 대한 모르모트로서의 충성심을 확인한 셈이니 기뻐해야 하겠지만 말일세.',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 뾰로통한 얼굴로 ',
            you.get_colored_name(),
            '의 가슴팍을 콕콕 찔렀다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '하지만 나는 이런 맹목적인 복종은 싫네. 나는 자네가 내게 조언을 해주고, 내 곁을 함께 걷는 파트너가 되길 원하지. 의견 하나 내지 못하는 실험 동물이 되길 바라는 게 아니란 말일세.',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 질문을 던지기로 했다.',
          ]);
          era.printButton('「그럼, 이렇게 하는 이유는 뭐야……?」', 1);
          await era.input();
          await tachyon.say_and_wait('………… 미안하지만, 지금은 가르쳐 줄 수 없네.');
          await tachyon.say_and_wait(
            '언젠가는 반드시 말해주겠네. 하지만…… 지금은 아니야. 약속할 수 있으니, 지금은 우선 나를 믿어주지 않겠나?',
          );

          era.printButton('「방금 전까지 맹신하지 말라며?」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '이건, 그게…… 다르네! 아까는 아무 근거 없이 믿는 것이고, 지금은 내게 이유가 있지만 말할 수 없다는 점을 믿어달라는 것이니까.',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 현명하게도 말다툼을 하지 않는 쪽을 택했다.',
          ]);
          era.println();
          await era.printAndWait([
            '어쨌든, ',
            you.get_colored_name(),
            '과(와) ',
            tachyon.get_colored_name(),
            '의 다음 목표는 ',
            hope_sta,
            '로 결정되었다.',
          ]);
          await era.printAndWait([
            '별일 없다면 ',
            tachyon.sex,
            '를 출주시키는 것에 큰 문제는 없겠지만……',
          ]);
        }
      } else {
        era.println();
        await you.say_and_wait('정말이야?', true);
        await era.printAndWait([
          you.get_colored_name(),
          '의 마음속에는 여전히 의구심이 남았지만……',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 어깨를 으쓱하고는 ',
          tachyon.get_colored_name(),
          '의 출주 신청 서류를 준비하기 시작했다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '? 내가 말해놓고도 조금 이상하네만, 자네는 조금도 의심하지 않는 건가? 그냥 믿어버리는 거야?',
        ]);
        era.printButton(
          '「믿지는 않아. 하지만 약 없이도 타키온은 승리할 거라고 믿어」',
          1,
        );
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 의중도 모르겠고, 약의 효과도 알 수 없었지만.',
        ]);
        await era.printAndWait([
          '애초에 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이 누군가가  ｢규정상 안 된다｣ 고 말한다고 해서 순순히 그만둘 사람이라고 생각지도 않았다.',
        ]);
        await era.printAndWait('하지만 이 점만큼은 의심할 여지가 없었다.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 약물 같은 외부의 힘 없이도 반드시 승리할 것이다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '에게 흥분제 따위는 필요 없다는 사실을, ',
          you.get_colored_name(),
          '은(는) 그저 믿고 있을 뿐이었다.',
        ]);
        era.println();
        if (relation > 0 && love < 50) {
          await tachyon.say_and_wait(
            '그게 자네의 대답인가? 나를 믿지는 않지만 내 재능은 믿는다? 훌륭하군! 그것이야말로 연구자가 갖춰야 할 태도지!',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '은(는) 자기 대답이 만족스러운 듯 몇 번이고 고개를 끄덕였다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '그렇다면 내 승리를 믿게. 내 뒤를 따라오기만 한다면 자네가 바라던 찬란한 광경을 보여 주겠네.',
          );
          era.println();
          await era.printAndWait([
            '그렇게 ',
            you.get_colored_name(),
            '와(과) ',
            tachyon.get_colored_name(),
            '의 다음 목표는 ',
            hope_sta,
            '로 결정되었다.',
          ]);
          await era.printAndWait(
            '다만…… 멋진 말로 마무리했지만 정말로 이 레이스에 출전해도 괜찮을까. 조금 더 생각해 볼 필요가 있을지도 모른다.',
          );
        } else {
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '……평소에도 그 정도로 멋진 말을 할 수 있다면 좋을 텐데.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 차갑게 말했다. 하지만 ',
              tachyon.sex,
              '의 꼬리가 흔들리는 걸 보니 싫지만은 않은 모양이었다.',
            ]);
          } else {
            era.println();
            await tachyon.say_and_wait([
              callname,
              '……그 말투는 나를 조금도 믿지 않는 것처럼 들리는군.',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 불만스러운 듯 입술을 삐죽이고 홱 고개를 돌렸다.',
            ]);
            era.println();
            await era.printAndWait('믿어도 안 되고 믿지 않아도 안 된다는 건가……');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 이마를 짚고 어린아이를 달래듯 ',
              tachyon.get_colored_name(),
              '에게 얼마나 믿고 사랑하는지를 말해 주었고, 그제야 ',
              tachyon.sex,
              '의 기분이 풀렸다.',
            ]);
          }
          era.println();
          await era.printAndWait([
            '그렇게 ',
            you.get_colored_name(),
            '와(과) ',
            tachyon.get_colored_name(),
            '의 다음 목표는 ',
            hope_sta,
            '로 결정되었다.',
          ]);
          await era.printAndWait([
            '다만…… 말은 그렇게 했지만 이런 상태의 ',
            tachyon.sex,
            '를 레이스에 내보내도 괜찮을까. 역시 조금 더 고민할 필요가 있을지도 모르겠다.',
          ]);
        }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_1
  ws_47_1: (() => {
    const title = '연도 심사';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {boolean} hope_sta_win ホープフルステークスに勝ったか
     */
    const f = async (tachyon, you, callname, relation, hope_sta_win) => {
      await tachyon.say_and_wait([
        '이런, ',
        callname,
        ', 그건…… 새해 다짐을 쓰고 있는 건가?',
      ]);
      era.println();
      await era.printAndWait([
        '노크도 없이 트레이닝실로 들이닥친 ',
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '이(가) 무언가를 쓰는 것을 보고 의문을 표했고, ',
        you.get_colored_name(),
        '은(는) 고개를 끄덕였다.',
      ]);
      era.println();
      await era.printAndWait([
        '오늘은 설날이었고, ',
        you.get_colored_name(),
        '이(가) 하고 있던 것은 새해의 소망을 적어 내려가는 일이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '3관이라…… 내 입으로 말하긴 좀 그렇다만, ',
        callname,
        ', 자네도 참 집요하군. 3관이라는 게 자네에게 그렇게 특별한 의미가 있는 건가?',
      ]);
      era.println();
      await you.say_and_wait('의미라기보다…… 굳이 말하자면');
      era.printButton(
        '「타키온이 출전하겠다고 약속했으니까…… 그리고 난 타키온이 질 거라 생각하지 않아」',
        1,
      );
      await era.input();
      if (hope_sta_win) {
        if (relation > 0) {
          await tachyon.say_and_wait(
            '흐흥, 좋네. 천재인 나는 확실히 무패니까 말이야.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 의기양양하게 말했다.',
          ]);
        } else {
          await tachyon.say_and_wait(
            '승패 따위 실험과는 아무런 상관도 없는 것에 참 잘도 열중하는군.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 차갑게 말했다.',
          ]);
        }
      } else {
        await tachyon.say_and_wait([
          '…………',
          callname,
          ', 자네 내가 이미 패배했다는 사실을 잊은 건가?',
        ]);
        era.println();
        await era.printAndWait('……아, 그러고 보니 확실히 그런 일이 있었지……');
        era.printButton('「그래도, 타키온이 가장 강해!」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '…………그렇게까지 태평하다니, 할 말이 없군.',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 저도 모르게 이마를 짚었다.',
        ]);
      }
      await tachyon.say_and_wait('기왕 그럴 거라면, 꿈을 좀 더 멀리 둬 보는 건 어떤가?');
      era.println();
      await era.printAndWait('더 멀리……?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 잠시 ',
        tachyon.get_colored_name(),
        '의 의도를 파악하지 못했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '꿈을 최우선으로 두게나, ',
        callname,
        '. 자네의 꿈, 나의 꿈. 더 원대한 꿈을 적어보란 말일세!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 두 눈이 반짝이며 열정으로 가득 찼다.',
      ]);
      era.println();
      await era.printAndWait([
        '더 원대한 꿈…… ',
        you.get_colored_name(),
        '은(는) 잠시 고민하다가 종이를 한 장 더 꺼내 그 위에 적었다……',
      ]);
      era.printButton('無敗（全能力+5）', 1, { disabled: !hope_sta_win });
      era.printButton('무한（스킬 포인트 +20）', 2);
      era.printButton('무상（스태미나 +20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            '무패. 광속을 넘어서는 입자가 고작 범인들에게 패배할 리가 없다.',
          );
          era.println();
          await tachyon.say_and_wait(
            '호오? 연간 무패를 말하는 건가? 후후, 좋네. 기대할 만한 목표로군.',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 흥미로운 듯 ',
            you.get_colored_name(),
            '의 목표를 바라보다가, 이내 찬물을 끼얹었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '다만…… 출전할지는 내 기분에 달린 거라는 걸 잊지 말게.',
          );
          era.println();
          await era.printAndWait([
            '레이스에 나가지 않는 것도 일종의 무패니까 말일세. ',
            tachyon.get_colored_name(),
            '은 호탕하게 웃으며, ',
            you.get_colored_name(),
            '에게는 조금도 우습지 않은 농담을 던졌다.',
          ]);
          await era.printAndWait([
            '이런 일…… 정말로 ',
            tachyon.get_colored_name(),
            '이라면 저지를 법한 일이라는 생각이 들었다……',
          ]);
          await era.printAndWait([
            '새해 첫날부터 ',
            you.get_colored_name(),
            '은(는) ',
            tachyon.uma_sex_title,
            '를 담당하느라 위장이 아파오기 시작했다. 올해도 분명 쉽지 않은 한 해가 될 것 같다.',
          ]);
          break;
        case 2:
          await era.printAndWait([
            '무한. 꿈을 꾼다면…… ',
            tachyon.get_colored_name(),
            '의 꿈보다 무한에 어울리는 것은 없었다.',
          ]);
          await era.printAndWait('한계를 넘어서 더 이상의 제한이 없기에, 무한.');
          era.println();
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '…… 후후, 자네 같은 인간이 그런 생각을 한다고? 어린 여자애나 꼬실 법한 화술은 그만두게나. 자네는 그저 나를 보조하는 도구일 뿐이니 자신의 분수를 알게.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 무정하게 ',
              you.get_colored_name(),
              '을(를) 비웃었다.',
            ]);
            await era.printAndWait([
              '…… 비록 자신의 평소 행동 때문에 신뢰를 주지 못한 탓도 있겠지만, ',
              you.get_colored_name(),
              '은(는) 진심으로 그렇게 생각하고 있었다.',
            ]);
            era.println();
            await era.printAndWait([
              '쓴웃음을 지으며 ',
              you.get_colored_name(),
              '은(는) 올해 역시 만만치 않은 한 해가 될 것임을 직감했다.',
            ]);
          } else if (relation <= 225) {
            await tachyon.say_and_wait(
              '오? 무한한 가능성인가? 좋군. 우리에게 참 어울리는 선택지야. 새해에는 이 목표를 향해 전진하도록 하지.',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 꽤 만족스러운 모양이다. 다행이다!',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '그러니 가능성에 도달하기 위해 오늘의 약은……',
            );
            era.println();
            await era.printAndWait('갑작스러운 본색 드러내기라니!?');
            await era.printAndWait([
              '방금 그런 호기로운 다짐을 한 직후라 거절할 수도 없었던 ',
              you.get_colored_name(),
              '은(는) 억지로 약을 삼켰다.',
            ]);
            await era.printAndWait([
              '머리 위에 떠 있는 천사 링을 느끼며, ',
              you.get_colored_name(),
              '은(는) 올해도 필시 평탄치 않으리라 예감했다.',
            ]);
          } else {
            await tachyon.say_and_wait([
              '흐흥! 당연하지, ',
              callname,
              ', 자네라면 당연히 그런 선택을 할 줄 알았네!',
            ]);
            await tachyon.say_and_wait(
              '우리의 꿈, 우리가 함께 쫓는 가능성. 더 넓은 미래를 위해 한계를 돌파하고 무한에 도달하는 것이네!',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 광기 어린 눈빛으로 ',
              you.get_colored_name(),
              '을(를) 바라보았고, 그 시선은 ',
              you.get_colored_name(),
              '을(를) 매료시킬 만큼 강렬했다.',
            ]);
            await era.printAndWait('그래, 우리의 꿈을 위해서……');
            era.println();
            await tachyon.say_and_wait(
              '그러니 오늘 오세치 요리도 잘 부탁하네.',
            );
            era.println();
            await era.printAndWait(
              '잠깐, 오세치까지 직접 만들어야 한다는 소리는 들어본 적 없다고!?',
            );
            await era.printAndWait([
              tachyon.sex,
              '의 기대에 찬 눈빛에 못 이겨, ',
              you.get_colored_name(),
              '은(는) 결국 체념하고 국자를 들었다.',
            ]);
            await era.printAndWait('아무래도 올해도 고생길이 훤한 것 같다……');
          }
          break;
        case 3:
          await era.printAndWait(
            '무상. 레이스 같은 건 아무래도 좋고 가능성도 그저 최선을 다할 뿐. 가장 중요한 것은 아프지도 다치지도 않는 것. 더 먼 미래를 위해서 말이다.',
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('…………');

            era.printButton('「타키온?」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이 웬일인지 침묵에 빠지자, ',
              you.get_colored_name(),
              '은(는) 의아해하며 말을 걸었다.',
            ]);
            era.println();
            await tachyon.say_and_wait('…… 시시한 대답이군.');
            await tachyon.say_and_wait([
              '상처 없이 어떻게 역사를 만들며, 희생 없이 어떻게 창조가 있겠나. 무상이라니…… ',
              callname,
              '. 자네 대답이 이렇게나 지루할 줄은 몰랐군.',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 기분이 갑자기 매우 나빠 보였다. 뭔가 말실수라도 한 것일까?',
            ]);
            era.println();
            await tachyon.say_and_wait('무상이라니…… 만약 그럴 수 있다면…… 만약……');
            era.println();
            await era.printAndWait([
              '하지만 ',
              you.get_colored_name(),
              '은(는) 곧 깨달았다. ',
              tachyon.sex,
              '의 분노는 ',
              you.get_colored_name(),
              '을(를) 향한 것이 아니라, 어떤…… 알 수 없는 대상을 향하고 있었다. 사실 ',
              you.get_colored_name(),
              '은(는) ',
              tachyon.sex,
              '가 화를 내는 이유조차 제대로 파악하지 못하고 있었다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…… 마음대로 하게나. 그런 시시한 소원 따위, 그런 지루한……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '은 화가 난 채 트레이닝실을 나가버렸고, ',
              you.get_colored_name(),
              '은(는) 여전히 멍한 표정으로 남겨졌다.',
            ]);
          } else {
            await tachyon.say_and_wait('………… 음, 그렇군.');
            era.printButton('「타키온?」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 분위기가 묘하게 변하자, ',
              you.get_colored_name(),
              '은(는) 의아해하며 물었다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '아, 아무것도 아니네. 그래, 트레이너라는 입장에서는 ',
              tachyon.uma_sex_title,
              '의 건강이 최우선이겠지. 하지만…… 조금 지루하군.',
            ]);
            era.println();
            await era.printAndWait([
              '지루한가…… 가능성을 추구하는 ',
              tachyon.get_colored_name(),
              '이라면 확실히 그렇게 느낄 수도 있겠지만, 자신에게 가장 소중한 것은 ',
              tachyon.get_colored_name(),
              '의 건강이었다.',
            ]);
            await era.printAndWait([
              '어째서인지 ',
              tachyon.get_colored_name(),
              '의 모습이 조금 슬퍼 보였다. 애써 평정심을 유지하고 있었지만, 왠지 모를 체념 섞인 슬픔이 느껴졌다. 역시 그런 말을 하는 게 아니었을까……',
            ]);
            await era.printAndWait('이런 말을 하지 말았어야 했나……');
            era.println();
            await tachyon.say_and_wait(
              '………… 아무것도 아니네. 후후, 그렇다면 자네의 소원대로 오늘은 일찍 돌아가 푹 쉬도록 하지……',
            );
            await tachyon.say_and_wait('무상이라…… 아아……');
            era.println();
            await era.printAndWait([
              '이 제안은 ',
              you.get_colored_name(),
              '의 본심과 일치하는 것이었으나, 대체 ',
              tachyon.get_colored_name(),
              '에게 무슨 일이 있었던 것일까?',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 떠나가는 ',
              tachyon.sex,
              '의 뒷모습을 바라보며 깊은 생각에 잠겼다.',
            ]);
          }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_5
  ws_47_5: (() => {
    const title = '중기 보고서 제출';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      hope_sta,
      hoch_sho,
      sats_sho,
    ) => {
      await era.printAndWait(
        '새해가 지났지만 2월의 트레센 학원은 여전히 한겨울 추위 속에 잠겨 있었다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 훈련장을 바라보며 하얀 입김을 내뱉었다.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '저 사람 오늘도 저기 서 있네.',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '쉿…… 조용히 해. 저 사람 누구 트레이너라는 소문이 있던데.',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '에…… 진짜? 벌써 사흘째 서 있잖아. 그런데 담당 ',
        tachyon.uma_sex_title,
        '는 한 번도 못 봤어.',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '글쎄…… 다른 학년에 너무 존재감이 없어 눈에 띄지도 않는 ',
        tachyon.uma_sex_title,
        '가 있다던데. 혹시 저 사람의 담당 아닐까?',
      ]);
      era.println();
      await era.printAndWait([
        '아하하…… 존재하지 않는 ',
        tachyon.uma_sex_title,
        ' 취급을 받다니, ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '?',
      ]);
      await era.printAndWait([
        '그렇다고 스스로 담당이 ',
        tachyon.get_colored_name(),
        '라고 밝힌들 아무도 믿어 주지 않을 것이다.',
      ]);
      await era.printAndWait([
        '슬픈 일이지만 빛도 나지 않는 평범한 사람이 ',
        tachyon.get_colored_name(),
        '의 트레이너라고 누가 믿겠는가?',
      ]);
      await era.printAndWait([
        '지난 며칠 동안 ',
        tachyon.get_colored_name(),
        '의 약을 먹지 않은 탓에 며칠째 몸에서 빛이 나지 않았다.',
      ]);
      era.println();
      await era.printAndWait([
        '오늘은 ',
        tachyon.get_colored_name(),
        '가 훈련에 나오지 않은 지 사흘째 되는 날이었다.',
      ]);
      await era.printAndWait([
        '그뿐만 아니라 ',
        you.get_colored_name(),
        '은(는) 사흘 동안 담당 ',
        tachyon.uma_sex_title,
        '의 얼굴조차 보지 못했다.',
      ]);
      await era.printAndWait([
        '시약 실험조차 없던 사흘. ',
        you.get_colored_name(),
        '은(는) 훈련장에 서서 훈련 시간에 나타나야 할 그 사람을 계속 기다렸다.',
      ]);
      era.println();
      await you.say_and_wait('아무래도 오늘도 안 오려나 보네……', true);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 그렇게 생각하던 찰나였다.',
      ]);
      if (relation <= 225) {
        await tachyon.say_and_wait([
          '이런, ',
          callname,
          '? 자네 왜 여기 있나? 한참 찾았지 않은가.',
        ]);
        await you.say_and_wait('……');
        await era.printAndWait([
          '당연하다는 듯 여유롭게 나타난 ',
          tachyon.get_colored_name(),
          '을 보며 지금의 ',
          you.get_colored_name(),
          '은(는) 이제 화를 낼 기운조차 남아 있지 않았다.',
        ]);
        await era.printAndWait(
          '어쨌든 훈련장으로…… 아니, 또 약 때문이겠지……',
        );
        era.println();
        await tachyon.say_and_wait('자, 어서 타임 측정을 도와주게나.');
      } else {
        await tachyon.say_and_wait([
          callname,
          '! 자네 요 며칠간 어디에 있었던 건가! 도시락을 못 먹은 지 한참 됐단 말일세!!!',
        ]);
        await era.printAndWait([
          '정말 적반하장도 유분수다. 지난 며칠간 실험실 문을 잠근 것은 ',
          tachyon.sex,
          '본인이 아니었던가.',
        ]);
        await tachyon.say_and_wait(
          '됐네. 중요한 건 그게 아니야. 빨리 측정이나 도와주게. 새로운 실험 데이터일세.',
        );
      }
      era.println();
      await era.printAndWait('음? 잠깐, 설마……');
      await era.printAndWait([
        '눈앞의 광경이 믿기지 않았던 ',
        you.get_colored_name(),
        '은(는) 멍하니 타이머를 누르고, ',
        tachyon.get_colored_name(),
        '가 한 바퀴 돌아오는 모습을 지켜본 뒤 다시 멍하니 정지 버튼을 눌렀다.',
      ]);
      era.println();
      await tachyon.say_and_wait('시간은?');
      era.printButton('「기…… 기존 기록보다 3초나 빨라.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 흥분을 감출 수 없었다. 훈련을 며칠 쉬었다는 사소한 일쯤은 이제 중요하지 않았다. 이런 속도를 지닌 ',
        tachyon.sex,
        '라면 반드시, 꼭……',
      ]);
      era.println();
      await era.printAndWait([
        '좋군. ',
        tachyon.get_colored_name(),
        '은(는) 만족스러운 듯 손뼉을 쳤다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ', 그럼 기쁜 소식을 알려 주지.']);
      await tachyon.say_and_wait([hoch_sho, '에 출주하기로 했네.']);
      era.println();
      await era.printAndWait([hoch_sho]);
      era.println();
      await era.printAndWait([
        sats_sho,
        '의 전초전이 되는 레이스다. ',
        sats_sho,
        '을 목표로 하는 ',
        tachyon.uma_sex_title,
        '들은 보통 먼저 ',
        hoch_sho,
        '이나 ',
        hope_sta,
        '을(를) 거쳐 인기를 얻은 뒤 ',
        sats_sho,
        '에 도전한다.',
      ]);
      await era.printAndWait([
        '하지만……',
        hoch_sho,
        '은(는) 어디까지나 G2 레이스다. 이미 인기가 충분한 ',
        tachyon.get_colored_name(),
        '가 굳이 여기에 관심을 갖는 이유는 무엇일까?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……몇 가지, ',
        sats_sho,
        ' 전에 확인해야 할 것이 있거든.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 말투에서 ',
        you.get_colored_name(),
        '은(는) 어쩐지 불길한 예감을 느꼈다.',
      ]);
      await era.printAndWait('하지만.');
      era.printButton('「타키온이라면 분명 괜찮을 거야.」', 1);
      await era.input();
      await tachyon.say_and_wait('후훗, 자네는 설마 내가 G2조차 따내지 못할 거라 생각하는 건가?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 쓴웃음을 지으며 그런 뜻이 아니라고 해명했다.',
      ]);
      await era.printAndWait([
        '어쨌든 목표는 일단 ',
        hoch_sho,
        '으로 결정되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_29
  ws_95_29: (() => {
    const title = '잠시 동안의 휴식';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} plan_b Plan B に入っているか
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      plan_b,
      prix_lat,
      arim_kin,
    ) => {
      const ret = [];
      await tachyon.say_and_wait('여름 집중 훈련, 그리고……');
      if (plan_b) {
        await tachyon.say_and_wait(['그다음 단계는…… 바로 ', prix_lat, ' 이겠군.']);
        await tachyon.say_and_wait(
          '음, 세계의 정점을 목표로 삼다니…… 후후, 이거 정말, 더할 나위 없이 어울리는군.',
        );
      } else {
        era.println();
        await tachyon.say_and_wait(['그다음 단계는…… 바로 연말의 ', arim_kin, ' 이겠군.']);
        await tachyon.say_and_wait(
          '음, 가장 영향력 있는 레이스로 우리 이론의 종지부를 찍다니…… 후후, 이거 정말, 더할 나위 없이 어울리는군.',
        );
      }
      era.printButton('「그치만, 그전에……」', 1);
      era.printButton('「우선은 좀 즐기도록 하자」', 2);
      await era.input();
      await era.printAndWait('햇살, 백사장, 비키니.');
      await era.printAndWait([
        '그리고 ',
        tachyon.get_colored_name(),
        '의 수영복.',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), '의, 수영복.']);
      era.println();
      if (love >= 50 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          '見るだけ……で足りるのです？ 自分の手で、確かめたくはありませんの？',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は身を乗り出し、',
          you.get_colored_name(),
          ' の目を見て、誰かが踏み出すのを待った',
        ]);
        era.printButton('手を伸ばして触る', 1);
        era.printButton('拒む', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            ' は我慢できず手を伸ばした。',
            tachyon.get_colored_name(),
            ' の胸元、二枚の薄い布では到底収まらない実へ',
          ]);
          era.println();
          await tachyon.say_and_wait('ん……❤');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は低く鳴いた。だが瞳の色は、ほとんど変わらない',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は緊張した。自分の腕が足りないのか？',
          ]);
          era.println();
          await era.printAndWait('どう頑張っても、もっと強く、と言われる');
          await era.printAndWait([
            'そもそも人間の力で',
            tachyon.uma_sex_title,
            'を満たすのは、難しいのだろう……',
          ]);
          await era.printAndWait([
            'そのとき気づいた。水着の下に、さっきまではなかった、あるいは目立たなかった突起が二つある',
          ]);
          await era.printAndWait([
            '時短のチートボタンのようにも見える。思わず、丸い球体の上で唯一の突起を押した',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ちょっと……ひっ！',
            callname,
            '！ そこ、そこはだめですわ！',
          ]);
          era.println();
          await era.printAndWait([
            'さっきまで指図されていたのだ。止めろと言われて止まる道理はない。',
            you.get_colored_name(),
            ' は構わず、尖った先をいじめ続けた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'わ……私が悪かったですわ……さっきは言うべきではありませんでした……だめ、もう押さないで……だめ、いけません……',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' の反応は、',
            you.get_colored_name(),
            ' の想像よりはるかに大きかった',
          ]);
          await era.printAndWait([
            '好奇心が湧いた ',
            you.get_colored_name(),
            ' は、童心に返り、どうすれば ',
            tachyon.get_colored_name(),
            ' がいちばん激しく反応するか試したくなった',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……はあっ……はあっ……']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は手を少し緩めた。危険を脱したと思ったモルモットさんが油断した、そのあと……',
          ]);
          era.println();
          await tachyon.say_and_wait('ひっ——————い、いきますわ');
          era.println();
          await era.printAndWait('搾乳するように、強く下へ引いた');
          await era.printAndWait([
            '全身が震え、',
            tachyon.get_colored_name(),
            ' は白目を剥き、前へ倒れ、',
            you.get_colored_name(),
            ' の上に覆いかぶさった',
          ]);
          era.println();
          await tachyon.say_and_wait('えへへ……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の背を撫で、',
            tachyon.sex,
            'の痙攣を緩めた',
          ]);
          era.printButton('「情けないな。乳首を摘んだだけでイったのか？」', 1);
          era.printButton(
            `「レースの${tachyon.uma_sex_title}より、繁殖用の牝馬のほうが似合っているな」`,
            2,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' の侮辱を聞き、',
            tachyon.get_colored_name(),
            ' はまた身を震わせた。',
            tachyon.sex,
            'に押し潰された ',
            you.get_colored_name(),
            ' は、',
            tachyon.sex,
            'の股間からわずかな熱が流れ出るのを感じた',
          ]);
        }
      } else if (relation >= 225 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          '왜? 그렇게 넋을 잃고 보는 건가? 후후, 실험을 도와준 보답으로 조금 더 봐도 상관없다네.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 몸을 뒤척이며 풍만한 가슴을 더욱 강조해 보였다.',
        ]);
      } else if (relation > 0 && relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          '허, 이렇게나 노출도 높은 옷을 좋아하는 건가? ……아니, 이런 상황이라면 공기 저항이 줄어들어 확실히 속도가 증가할 가능성이 있겠군……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 말을 하다가 다시 자기만의 생각에 빠져들었다.',
        ]);
        await era.printAndWait([
          '수영복이 달리기에 주는 가중치에 대해서라면…… ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 그 엉성한 핫팬츠와 샌들을 보았다. ',
          you.get_colored_name(),
          '이(가) 생각하기에, 문제는 수영복에 있는 게 아닌 것 같았다.',
        ]);
      } else {
        await tachyon.say_and_wait(
          '……나처럼 이성 지상주의가 되라고 강요하지는 않겠네만, 적어도 그 발정 난 원숭이 같은 눈빛은 좀 거둬주게.',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_6
  ws_95_6: (() => {
    const title = '발렌타인데이';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      if (love >= 75) {
        await tachyon.say_and_wait([
          '자, ',
          callname,
          ', 발렌타인 초콜릿이야.',
        ]);
        era.println();
        await era.printAndWait([
          '갑자기 트레이닝실로 들이닥친 ',
          tachyon.get_colored_name(),
          '이 무심하게 내뱉은 말을 듣고서야, ',
          you.get_colored_name(),
          '은(는) 오늘이 발렌타인데이라는 사실을 깨달았다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 훈련을 위해 온종일 이리저리 뛰어다니느라 시간 가는 줄도 모르고 있었던 것이다.',
        ]);
        era.println();
        await you.say_and_wait('그치만…… 타키온이 주는 초콜릿이라고?', true);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이 등 뒤에서 꺼내 든 하트 모양 상자와, 그 안에 정성스레 담긴 작은 초콜릿들을 바라보았다.',
        ]);
        await era.printAndWait('이 안에 설마……');
        era.println();
        await tachyon.say_and_wait(
          '응? 뭐야, 그 표정은. 설마 내가 여기에 무슨 약이라도 넣었을 거라고 생각하는 건가?',
        );
        era.printButton('고개를 끄덕인다', 1);
        era.printButton('「설마 안 넣었어?」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '……너무한 처사로군. 반박할 순 없지만 말이야.',
        );
        await tachyon.say_and_wait(
          '하지만 오늘만큼은…… 특별한 날이니까. 그런 짓은 하지 않는다고.',
        );
        await tachyon.say_and_wait(
          '못 믿겠다면, 내가 먼저 한 알 먹어볼까?',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이 초콜릿을 천천히 입안으로 밀어 넣는 것을 지켜보았다.',
        ]);
        await era.printAndWait(
          '앞니에 맞닿은 초콜릿이, 살짝 벌어진 앵두 같은 입술 사이로 스며들었다.',
        );
        await era.printAndWait('한 입, 두 입.');
        await era.printAndWait([
          '손가락으로 밀어 넣자, 초콜릿은 점차 ',
          tachyon.get_colored_name(),
          '의 입안으로 사라져 갔다.',
        ]);
        era.println();
        await era.printAndWait('이 정도라면…… 안심하고 먹어도 될 것 같았다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 손을 뻗어 책상 위의 초콜릿을 향했다.',
        ]);
        await era.printAndWait('그러나.');
        era.printButton('「……?」', 1);
        await era.input();
        await era.printAndWait('손을 뻗는 순간, 초콜릿 상자가 휙 치워졌다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 의아해하던 바로 그때.',
        ]);
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait('방심하고 있던 입술을 기습당했다.');
        await era.printAndWait(
          '영리한 혀가 치열을 헤치고 들어오자, 달콤하고 걸쭉한 액체가 흘러들어왔다.',
        );
        await era.printAndWait(
          '꼼짝달싹 못 하게 억눌린 혀와, 자신을 짓누르는 불청객이 가교가 되어 농밀한 액체를 계속해서 흘려보냈다.',
        );
        await era.printAndWait('달다, 너무나도 달다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 취향에 완벽하게 맞춰진 초콜릿이 입안을 가득 채웠다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '에게는 지나치게 달아야 할 그 맛이, ',
          tachyon.get_colored_name(),
          '의 혀가 섞이자 어느덧 익숙해지기 시작했다.',
        ]);
        await era.printAndWait([
          '마치 자신의 신체가 개조되어, ',
          tachyon.get_colored_name(),
          '이 좋아하는 모습으로 조정당하는 듯한 감각이었다.',
        ]);
        await era.printAndWait(
          '……아니, 조정이라는 단어는 그리 적절하지 않을지도 모르겠다.',
        );
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 초콜릿은 아직 많이 남아있어❤',
        ]);
        era.println();
        await era.printAndWait('눈앞에 있는 연인의 정욕과 독점욕이 가득한 눈빛을 바라보았다.');
        await era.printAndWait('아아…… 완벽하게 「요리」된 식재료는 이제 먹힐 준비를 해야 했다.');
      } else if (love >= 50) {
        await tachyon.say_and_wait([
          '이런, ',
          callname,
          ', 발렌타인데이 축하하네!',
        ]);
        era.println();
        await era.printAndWait([
          '화창한 어느 날, 고요한 아침의 정적을 깨고 문을 박차고 들어온 것은 커다란 봉투를 든 ',
          tachyon.get_colored_name(),
          '이었다.',
        ]);
        await era.printAndWait('……이상하군, 오늘이 크리스마스는 아닐 텐데.');
        era.println();
        await tachyon.say_and_wait([
          '응? 이거 말인가? 다른 ',
          tachyon.uma_sex_title,
          '들에게 받은 선물이라네.',
        ]);
        await tachyon.say_and_wait(
          '정말이지…… 필요 없다고 말했는데도. 이런 것보다는 자진해서 실험체가 되어주는 편이 훨씬 기쁠 텐데 말이야……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 이렇게나 인기가 많았던 것인가.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 마음속에서 아주 작은 질투심이 솟아올랐다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '그건 그렇고, 자 ',
          callname,
          ', 어서 내 초콜릿을 받게나!',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 가방 안에서 크기가 제각각인 초콜릿들을 이것저것 뒤적거리기 시작했다.',
        ]);
        await era.printAndWait(
          '설마…… 그냥 다른 사람에게 받은 걸 대충 넘겨주려는 건 아니겠지?',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 그런 관계까지는 아니라고 생각하면서도, 내심 자신만은 특별한 대우를 받길 바라고 있었다.',
        ]);
        era.printButton('「그건…… 의리 초콜릿이야?」', 1);
        await era.input();
        await era.printAndWait('트레이너로서 물어봐서는 안 될 질문이라는 건 알고 있었다.');
        await era.printAndWait('하지만…… 역시.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 진심을 알고 싶었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '의 말을 들은 ',
          tachyon.get_colored_name(),
          '은 봉투를 뒤적이던 손을 멈추었다.',
        ]);
        await era.printAndWait([
          '고개를 들어 ',
          you.get_colored_name(),
          '의 눈을 똑바로 응시했다.',
        ]);
        await era.printAndWait([
          '그 아름다운 붉은 눈동자는 마치 ',
          you.get_colored_name(),
          '의 내면을 꿰뚫어 보는 듯했다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '이런, 그 말은 무슨 뜻일까나, ',
          callname,
          '?',
        ]);
        await tachyon.say_and_wait('만약 의리 초콜릿이라고 한다면, 어쩔 건가?');
        await tachyon.say_and_wait([
          '아니면 자네는…… 어떤 유형의 초콜릿이길 바라는 거지?',
        ]);
        era.printButton('「타키온이 특별히 주는 것이었으면 좋겠어」', 1);
        era.printButton(
          '「타키온이 나에게만 주는 초콜릿이었으면 좋겠어」',
          2,
        );
        await era.input();
        await era.printAndWait('결국, 끝내 그 두 글자는 입 밖으로 내지 못했다.');
        await era.printAndWait([
          '어떻게 그럴 수 있겠는가. 트레이너인 자신이, 담당 ',
          tachyon.uma_sex_title,
          '에게 자신을 향한 마음이 「진심」인지 묻다니.',
        ]);
        era.println();
        await tachyon.say_and_wait('그럼, 이걸 주지.');
        era.println();
        await era.printAndWait(
          '마침내, 봉투 가장 밑바닥에서 절대 잘못 볼 리 없는 무지개색의 작은 포장을 찾아낸 뒤.',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 초콜릿을 가슴팍의 작은 주머니에 찔러 넣었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '자, 사랑스러운 실험 동물에게 주는 지난 1년간의 감사의 표시…… 그리고, 감사 그 이상의 것❤',
        );
        await tachyon.say_and_wait('자네가 직접, 꺼내 가보게나.');
        era.println();
        if (era.get('exp:0:性爱次数') === era.get('exp:0:睡奸次数')) {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が明らかに胸を突き出すのを見た',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は震える手を伸ばした',
          ]);
          await era.printAndWait('胸に触れないよう、慎重にチョコを取り出した');
        } else {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が明らかに胸を突き出すのを見た',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は遠慮なく手を伸ばし、チョコを取った',
          ]);
          await era.printAndWait([
            '途中で摘んだ、眼前の',
            tachyon.uma_sex_title,
            'を甘い声にさせる肉塊は？',
          ]);
          await era.printAndWait(
            '錯覚だろう。チョコを置く棚が、声を出すはずがない',
          );
        }
        era.println();
        await era.printAndWait([
          '초콜릿 포장을 벗기고, ',
          you.get_colored_name(),
          '은(는) 초콜릿을 입에 물었다.',
        ]);
        await era.printAndWait('입안에 넣은 순간, 초콜릿은 곧장 녹아내렸다.');
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait('돼지고기, 양파, 소스……');
        await era.printAndWait([
          '초콜릿에서 도저히 날 리 없는 맛이 ',
          you.get_colored_name(),
          '의 입안에 퍼졌다.',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '? 표정이 왜 그렇게 이상한가?']);
        await tachyon.say_and_wait(
          '어서 어서, 어떤 효과가 있지? ……육체적으로는 변화가 안 보이는데, 설마 내면에서부터 작용하는 건가……',
        );
        await era.printAndWait([
          '조금 전까지의 묘한 분위기는 어디 가고, ',
          tachyon.get_colored_name(),
          '은 신이 나서 ',
          you.get_colored_name(),
          '이(가) 먹은 초콜릿의 반응을 물어왔다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '? 설마 내가 실험실에서 반나절 동안 고생하며 조합해 만든 초콜릿에 대해 평가를 안 해주려는 건 아니겠지?',
        ]);
        era.println();
        await era.printAndWait('…………이 녀석은 정말.');
      } else if (relation > 225) {
        await tachyon.say_and_wait(['하하하! ', callname, '！']);
        era.println();
        await era.printAndWait([
          '호탕한 웃음소리와 함께 트레이닝실 문을 박차고 들어온 것은, 뒤에 커다란 봉투를 든 ',
          tachyon.get_colored_name(),
          '이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '메리 크리스마스? 해피 뉴 이어? 아무튼 무슨 기념일 축하하네. 자 자, 내 선물을 받게나!',
        );
        era.printButton('「……혹시, 발렌타인데이 말이야?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '음…… 중요하지 않아. 어쨌든 합법적으로 다른 이에게 음식을 먹일 수 있는 날 아닌가?',
        );
        era.println();
        await era.printAndWait('……그렇게 해석한다면 틀린 말은 아닐지도?');
        await era.printAndWait([
          '하지만 상대가 ',
          tachyon.get_colored_name(),
          '이라는 걸 생각하면……',
        ]);
        era.printButton('「……무슨 약을 넣었어?」', 1);
        era.printButton('「……몇 명한테나 돌린 거야?」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '그런 건 중요하지 않아! 어서 받게나, 나의 발렌타인 선물일세!',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 가방 안을 뒤적거리더니 유독 큼직한 초콜릿 한 조각을 꺼내, ',
          you.get_colored_name(),
          '의 허락도 구하지 않고 초콜릿을 손에 쥐여주었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 숙련된 동작을 보니, 오는 길에 이미 꽤 많은 사람에게 뿌리고 온 모양이었다.',
        ]);
        await era.printAndWait(
          '……내일 사방팔방으로 사과하러 다녀야겠군. 하지만 우선은 이 고비를 넘겨야 한다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 조심스럽게 초콜릿을 한 입 베어 물었다.',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('발광, 변형, 머리가 두 개 자라남, 등에서 날개가 돋아남, 액체화……');
        await era.printAndWait('그 어떤 변화도……… 일어나지 않았다.');
        await era.printAndWait(
          '말하자면, 아마도, 어쩌면 그냥 평범한 초콜릿인 것 같았다.',
        );
        await era.printAndWait([
          '하지만, 이것은 ',
          tachyon.get_colored_name(),
          ' 기준의 「정상」일 뿐.',
        ]);
        await era.printAndWait('평범한 사람의 기준에서 정상적인 초콜릿인가 하면……');
        era.printButton('왜…… 돼지고기 덮밥 맛이 나는 거야!?', 1);
        await era.input();
        await era.printAndWait('돼지고기, 양파, 소스……');
        await era.printAndWait([
          '초콜릿에는 있을 수 없는 맛이 ',
          you.get_colored_name(),
          '의 입안을 가득 채웠다.',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '? 표정이 왜 그렇게 이상한가?']);
        await tachyon.say_and_wait(
          '어서 어서, 어떤 효과가 있지? ……육체적으로는 변화가 안 보이는데, 설마 내면에서부터 작용하는 건가……',
        );
        era.println();
        await era.printAndWait(
          '이 녀석…… 본인도 약효가 뭔지 모르면서 아무한테나 먹이고 다닌 건가.',
        );
        await era.printAndWait([
          '다른 날이라면 몰라도, 커플들이 사방에서 염장을 지르는 이 날을 ',
          tachyon.get_colored_name(),
          '이 이런 식으로 망쳐놓다니…………',
        ]);
        await era.printAndWait([
          '이상하네, 어째서 갑자기 ',
          tachyon.get_colored_name(),
          '이 잘했다는 생각이 드는 거지.',
        ]);
        await era.printAndWait([
          '…………아무튼, ',
          tachyon.get_colored_name(),
          '에게 교훈을 좀 줘야겠다.',
        ]);
        era.printButton('「아무런 효과도 없는 것 같은데」', 1);
        era.printButton('「타키온도 한번 먹어봐」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 반응하기도 전에, ',
          you.get_colored_name(),
          '은(는) 한 입 베어 문 초콜릿을 ',
          tachyon.get_colored_name(),
          '의 입안에 밀어 넣었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('읍!? 끄윽!?');
        era.println();
        await era.printAndWait([
          '방심하고 있던 ',
          tachyon.get_colored_name(),
          '의 입안에 초콜릿이 가득 찼다.',
        ]);
        await era.printAndWait([
          '입을 열려던 ',
          tachyon.sex,
          '는 얼떨결에 입안의 초콜릿을 삼켜버렸다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '잠깐, 무슨 짓인가! ',
          callname,
          '!?',
        ]);
        await tachyon.say_and_wait('우엑…… 이게 무슨 맛이야!?');
        await tachyon.say_and_wait([
          '정말 이상한 맛이군!! 어째서 초콜릿에서 돼지고기 맛이 나는 건가!',
        ]);
        era.println();
        await era.printAndWait([
          '내일이면 아마 호되게 보복당하겠지만, 지금 이 순간 ',
          tachyon.get_colored_name(),
          '의 경악과 역겨움이 섞인 얼굴을 보니.',
        ]);
        await era.printAndWait([you.get_colored_name(), '은(는) 가슴 한구석이 시원해지는 것을 느꼈다.']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '의 시끌벅적한 발렌타인데이가 끝났다.',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '! 하하하, 발렌타인데이 축하하네!',
        ]);
        era.printButton('「……타키온?」', 1);
        await era.input();
        await era.printAndWait([
          '유난히 들떠 보이는 ',
          tachyon.get_colored_name(),
          '을 보자, ',
          you.get_colored_name(),
          '은(는) 자기도 모르게 경계심이 생겼다.',
        ]);
        await era.printAndWait([
          '다른 이유가 아니라, 평소에는 늘 냉담하던 ',
          tachyon.get_colored_name(),
          '의 태도가 오늘따라 이상하게 고조되어 있었기 때문이다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '응? ',
          callname,
          '? 왜 그러나, 나에게 발렌타인 축하 인사를 안 해줄 텐가? 설마…… 내가 싫어진 건가…… 끄윽……',
        ]);
        await tachyon.say_and_wait('으으…… 윽…… 머리가…… 어지럽군……');
        era.println();
        await era.printAndWait([
          '이상하다, 아무래도 오늘 ',
          tachyon.get_colored_name(),
          '의 상태가…… 좀 이상하다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 얼굴을 자세히 살폈다. 추위나 흥분 탓인 줄 알았던 붉은 뺨과 몽롱한 눈빛이 눈에 들어왔다.',
        ]);
        era.printButton('「……타키온, 너 술 마셨어?」', 1);
        await era.input();
        await tachyon.say_and_wait('으음…… 안 마셨네……');
        await tachyon.say_and_wait(
          '그저…… 그저…… 실수로 아주 조금…… 에탄올 혼합물을 마셨을 뿐……',
        );
        era.println();
        await era.printAndWait('에탄올 혼합물…… 그게 술이잖아!?');
        await era.printAndWait([
          '어쩐지 ',
          tachyon.get_colored_name(),
          '의 텐션이 왜 이렇게 이상한가 했다……',
        ]);
        await era.printAndWait('아무튼, 이래서는 오늘 훈련은 물 건너간 모양이다.');
        await era.printAndWait(['우선 ', tachyon.sex, '를 푹 쉬게 해줘야겠다.']);
        era.println();
        await era.printAndWait([
          '하지만 쉴 생각이 전혀 없어 보이는 ',
          tachyon.get_colored_name(),
          '은 ',
          you.get_colored_name(),
          '의 손을 피하더니.',
        ]);
        await era.printAndWait(
          '품속을 한참 뒤적거리다가, 늘 백의 안쪽 주머니에 넣어두던 약병 사이에서 실험용 여과지에 싸인 무언가를 겨우 찾아냈다.',
        );
        await era.printAndWait('포장을 열어보니, 안에는 무지개색 초콜릿 한 조각이 들어있었다.');
        era.println();
        await tachyon.say_and_wait(['으음…… 마…… 맞다…… ', callname, '……？']);
        await tachyon.say_and_wait('발…… 발렌타인…… 초콜릿이야……');
        era.drawLine();
        await era.printAndWait('이렇게나 불길한 발렌타인 선물은 난생처음 본다.');
        await era.printAndWait('정말로 이렇게 수상한 초콜릿을 먹어야 하는 걸까.');
        era.printButton('「이건…… 뭘로 만든 거야?」', 1);
        await era.input();
        await tachyon.say_and_wait('뭘로……? 음…… 잊어버렸네……');
        await tachyon.say_and_wait(
          '아마…… 아마도…… 코코아 가루…… 우유…… 설탕…… 간장…… 양파…… 생돼지고기?',
        );
        era.println();
        await era.printAndWait(
          '마지막 몇 개는 초콜릿에 절대 들어가선 안 될 재료들 아닌가!?',
        );
        await era.printAndWait('그래도…… 독성 물질은 넣지 않았다는 점을 다행으로 여겨야 하나?');
        await era.printAndWait('맛은 분명 끔찍하겠지만.');
        era.println();
        await tachyon.say_and_wait('왜…… 왜 안 먹는 건가……');
        await tachyon.say_and_wait([
          '먹게나…… ',
          callname,
          '…… 자네…… 내 체면을 안 세워주는 건가……',
        ]);
        era.println();
        await era.printAndWait('왜 갑자기 술 권하는 아저씨 말투가 된 거야!?');
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 좀처럼 손을 대지 않자, 아예 직접 초콜릿을 집어 들었다.',
          tachyon.get_colored_name(),
          '은(는) 직접 초콜릿을 집어 들었다.',
        ]);
        await era.printAndWait('그리고…… 입에 물었다.');
        era.println();
        await tachyon.say_and_wait(
          '음…… 이러케 함 머글 수 이짜나',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 초콜릿을 가볍게 입에 물었다.',
        ]);
        await era.printAndWait([
          '살짝 벌어진 앵두 같은 입술로, ',
          you.get_colored_name(),
          '에게 반대쪽을 베어 물라는 신호를 보냈다.',
        ]);
        await era.printAndWait('……에?');
        era.println();
        await tachyon.say_and_wait(
          '히히…… 이러먼 어쩌먼 뽀뽀할 기해가 잇을지두 모른다구',
        );
        era.println();
        await era.printAndWait('……이것이 술의 마력인가.');
        await era.printAndWait([
          '평소에는 늘 쌀쌀맞게 대하던 ',
          tachyon.get_colored_name(),
          '의 표정이, 믿을 수 없을 만큼 부드럽고 요염하게 변해있었다.',
        ]);
        await era.printAndWait([
          '홀린 듯이, ',
          you.get_colored_name(),
          '은(는) 다가가 초콜릿을 베어 물었다.',
        ]);
        era.println();
        await era.printAndWait('가깝다, 너무 가깝다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 숨결이 느껴질 만큼 가깝다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 눈을 바라보았다.',
        ]);
        await era.printAndWait('사람을 매료시키는, 지금은 조금 취기에 젖은 그 눈동자를.');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 혹시라도 초콜릿을 다 먹으면 이 시간이 사라질까 봐, 아주 조금씩 베어 물었다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '도 천천히 앞으로 다가왔고, 두 사람의 입술은 금방이라도 맞닿을 것 같았다…… 아니, 어쩌면 이미 닿았을지도 모른다.',
        ]);
        await era.printAndWait('하지만…… 초콜릿의 크기는 한정되어 있었다.');
        await era.printAndWait(
          '체온 때문이었을까, 아니면 누군가가 먼저 이 위태로운 연결을 끊어버린 것일까.',
        );
        await era.printAndWait([
          '초콜릿은 두 사람의 입안에서 녹아 끊어지며 각자의 입속으로 사라졌다.',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('……독은 없군.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 위세에 눌려 수차례 생체 실험을 당해온 ',
          you.get_colored_name(),
          '은(는) 확실히 판단할 수 있었다. 적어도 독이 든 물건은 아니라는 것을.',
        ]);
        await era.printAndWait('하지만 이 맛은…… 이 맛은……');
        era.printButton('「어째서…… 돼지고기 덮밥 맛이……?」', 1);
        await era.input();
        await era.printAndWait('마지막의 그 정체불명의 재료들을 들었을 때부터 어느 정도 예상은 했지만.');
        await era.printAndWait('역시나 이 맛은 이해하기 힘들었다.');
        await era.printAndWait('도대체 어떻게 해야 이런 초콜릿을 만들 수 있는 건지……');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 바라보았지만, ',
          tachyon.get_colored_name(),
          '은 한동안 말이 없었다.',
        ]);
        await era.printAndWait('설마…… 무슨 문제라도 있는 건가……');
        era.println();
        await tachyon.say_and_wait('……………푸흡.');
        await tachyon.say_and_wait(
          '하하하하! 이게 대체 무슨 맛이야! 너무 이상하잖아!',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 갑자기 크게 웃기 시작했다.',
        ]);
        await era.printAndWait('나만 모르는 웃음 포인트라도 있는 걸까?');
        await era.printAndWait([you.get_colored_name(), '은(는) 잠시 생각에 잠겼다.']);
        await era.printAndWait('돼지고기 덮밥 맛이 나는 초콜릿이라니.');
        await era.printAndWait('…………다시 생각해보니, 확실히 좀 웃기긴 했다.');
        era.println();
        await era.printAndWait([
          '어느덧 ',
          you.get_colored_name(),
          '도 함께 웃음을 터뜨리고 말았다.',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('드르렁…… 으음…… 푸우……');
        era.println();
        await era.printAndWait('정말이지…… 실컷 소동을 피워놓고는 멋대로 잠들어버리다니.');
        await era.printAndWait([
          '설마 ',
          tachyon.get_colored_name(),
          '에게 이런 술버릇 나쁜 주당의 잠재력이 있었을 줄이야……',
        ]);
        era.println();
        await tachyon.say_and_wait('음…… 모르모트…… 고마…… 푸우……');
        era.println();
        await era.printAndWait('………설마.');
        await era.printAndWait('부끄러워서 차마 말로 못 하니까 일부러……');
        await era.printAndWait([
          '아니, 무슨 생각을 하는 거야. ',
          tachyon.get_colored_name(),
          '이라면…… 십중팔구 정말로 사고였을……까?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 입가에 묻은 침을 닦아주었다.',
        ]);
        await era.printAndWait([
          '일단…… ',
          tachyon.sex,
          '가 깨어나면 나중에 다시 확인해 봐야겠다. 적어도 초콜릿에 넣어야 할 것과 넣지 말아야 할 것 정도는 구분할 줄 알기를 바라며.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_or_b
  ws_a_or_b: (() => {
    const title = 'A or B';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} daiwa ダイワスカーレット
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, daiwa, coffee, you, callname, t_call_c) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배가 월계배에 나간다는 게 정말인가요!',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '기대돼…… 타키온 선배의 주법은 정말 사람을 매료시킨다니까……',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '꼭, 꼭 보러 갈 거야!',
      );
      era.println();
      await era.printAndWait('현재 학원에서 가장 화제의 중심에 있는 것, 그것은 바로 월계배였다.');
      await era.printAndWait('학생회장이 조직한, URA 파이널스에 필적하는 규모의 레이스인 월계배.');
      await era.printAndWait(
        '학년이나 본격화의 시작 및 종료 여부와 상관없이, 의지만 있다면 누구든 참가할 수 있었다.',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 역시 이 좋은 데이터 수집 기회를 놓칠 리 없었다.',
      ]);
      await era.printAndWait([
        '최근 몇 주 동안은 훈련에 전력을 다하고 있었다. ',
        tachyon.sex,
        '의 말에 따르면, 자기 자신이 상응하는 수준까지 올라가지 않으면 상대의 가능성을 끌어낼 수 없기 때문이라고 했다.',
      ]);
      era.println();
      await era.printAndWait([
        '오늘도 ',
        tachyon.sex,
        '는 훈련장에서 자신을 단련하는 데 힘쓰고 있었다.',
      ]);
      era.printButton(
        '「타키온! 오늘 훈련 성과도 과거 기록을 대폭 경신했어!」',
        1,
      );
      era.printButton('「정말 대단해! 타키온!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '……하하하! 자네의 그 과장된 화법에는 이제 익숙해졌다만, 들을 때마다 나도 모르게 움찔하게 되는군……',
      );
      await tachyon.say_and_wait(
        '정말이지, 진지하게 묻겠는데 자네는 부끄럽지도 않은 건가?',
      );
      era.printButton('「전부 진심에서 우러나온 말이야!」', 1);
      era.printButton('「타키온을 돕기 위해서라면 내 목숨이라도 아깝지 않아!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '과장이 심하군…… 그런 달콤한 말보다는 실제로 내 실험을 도와주는 편이 훨씬 의미 있네.',
      );
      era.println();
      await era.printAndWait([
        '그 말을 내뱉으며, ',
        tachyon.get_colored_name(),
        '은 갑자기 가운 아래에서 시험관 몇 개를 꺼냈다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '그러고 보니 마침 잘 됐군…… 이건 오늘 아침에 영감이 떠올라 만든 약이라네……',
      );
      await tachyon.say_and_wait(
        '어떤가? 자네가 지금 이걸 마셔주고, 내가 다음 바퀴를 돌고 올 때까지 약효를 보고해 준다면 성과가 아마 그 어떤 것보다……?',
      );
      era.println();
      await era.printAndWait([
        '말을 다 끝내기도 전에, ',
        tachyon.get_colored_name(),
        '은 멍하니 굳어버렸다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 눈앞에는 이미 약물을 들이켜고 빈 시험관 세 개를 들고 있는 ',
        you.get_colored_name(),
        '이(가) 서 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('자네……');
      era.printButton('「이걸로 타키온이 안심할 수 있겠지?」', 1);
      era.printButton('「이걸로 타키온에게 도움이 되겠지?」', 2);
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 왠지 모르게 한참 동안 아무 말도 하지 못했다.',
      ]);
      era.printButton('「타키온?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……정말이지…… 자네는 대체 어디까지 모든 것을 뒤흔들어 놓아야 직성이 풀리는 건가……',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 머리를 짚으며 허탈한 표정을 지었다. 마치 무언가 말하고 싶은 것이 있는 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 잠시 기다리게. 연구실로 오게나……',
        you.get_colored_name(),
        '와 이야기할 것이 있네.',
      ]);

      era.drawLine();

      await tachyon.say_and_wait('그럼…… 이야기를 시작하도록 하지.');
      era.println();
      await era.printAndWait([
        '실험실 안에서 ',
        you.get_colored_name(),
        '은(는) 정자세로 앉아 ',
        tachyon.get_colored_name(),
        '의 이야기를 기다렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait('내 다리는…… 아마도, 다시는 달릴 수 없게 될 거라네.');
      era.println();
      await era.printAndWait('하늘이 무너지는 듯한 내용을 그녀는 덤덤하게 내뱉었다.');
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        you.get_colored_name(),
        '이(가) 받아들일 시간을 주기 위해 잠시 멈췄다가, 이내 말을 이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '나 자신은 이미 각오하고 있었네…… 내 다리는 본래 일반적인 ',
        tachyon.uma_sex_title,
        '보다 약하게 태어났으니까. 그러니 딱히 받아들이지 못할 것도 없지.',
      ]);
      await tachyon.say_and_wait(
        '하지만, 그렇다고 해서 내 꿈을 포기하겠다는 뜻은 아니야.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 꿈…… ',
        tachyon.uma_sex_title,
        '의 한계를 넘어, ',
        tachyon.uma_sex_title,
        '의 가능성을 목격하는 것.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '설령 그 주인공이 내가 아니어도 상관없네. 그저 지켜볼 수만 있다면 아무래도 좋아…… 설령, 누군가를 위한 디딤돌로 남게 된다 하더라도 말이네.',
      );
      await tachyon.say_and_wait([
        '그게 누구든…… 이것이 ',
        tachyon.uma_sex_title,
        '의 한계가 아니라는 것을 증명할 수만 있다면, 이것은 그저 ',
        tachyon.get_colored_name(),
        '이라는 개체의 한계일 뿐이라는 걸 증명할 수 있다면…… 난 그걸로 만족하네.',
      ]);
      await tachyon.say_and_wait(
        '정말로 진심으로 그렇게 생각했어. 이번 월계배도…… 내가 아닌 다른 누군가가 성공할 수 있도록……',
      );
      await tachyon.say_and_wait(
        '가장 많은 데이터를 수집하고, 가장 완벽한 계획을 세우고…… 비록 내 모든 것을 쏟아부어서라도……',
      );
      await tachyon.say_and_wait(
        '하지만…… 그런 내 결심을 뒤흔들어 놓은 건…… 바로 자네야.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 복잡한 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait('슬픔?');
      await era.printAndWait('고통?');
      await era.printAndWait('희망?');
      await era.printAndWait('절망?');
      await era.printAndWait([
        '온갖 감정이 뒤섞인 듯한 시선이 ',
        you.get_colored_name(),
        '에게 향했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '내가 포기하고 싶어질 때마다, 늘 그런 눈으로 나를 바라보던 자네……',
      );
      await tachyon.say_and_wait(
        '정말이지, 솔직히 말해서 포기하려는 사람에게 그 눈빛이 얼마나 끔찍하게 느껴지는지 아나?',
      );
      await tachyon.say_and_wait('그토록 순수하고, 오로지 신뢰만이 담긴 그 눈빛 말이야……');
      era.println();
      await era.printAndWait([
        '입으로는 끔찍하다고 말하면서도, ',
        tachyon.get_colored_name(),
        '의 소용돌이치는 눈빛 속에서 혐오의 감정만은 찾아볼 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그러니, ',
        callname,
        ', 자네는 모든 것을 뒤흔들어 놓은 책임을 져야 하네…… 나아갈 길을 선택해야 할 책임을 말이야.',
      ]);
      await tachyon.say_and_wait([
        '……내가 예전에 물었던 걸 기억하나? 자네가 ',
        t_call_c,
        '을 어떻게 생각하는지에 대해서 말일세.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 끄덕였다. ',
        tachyon.get_colored_name(),
        '의 ',
        coffee.get_colored_name(),
        '에 대한 관심은 다른 ',
        tachyon.uma_sex_title,
        '들에 비해 유독 컸다…… ',
        daiwa.get_colored_name(),
        '을 제외하면 말이다.',
      ]);
      await era.printAndWait('어쨌든 그 관심은 결코 단순한 실험체에 대한 관찰이 아니었다.');
      await era.printAndWait('그 이유에 대해 스스로도 여러 번 고민해 보았지만, 도무지 답을 알 수 없었다.');
      era.println();
      await tachyon.say_and_wait([
        '만약 내가 계속 달릴 수 없게 될 경우의 플랜 B…… 나는 모든 것을 ',
        t_call_c,
        '에게 맡길 생각이네. ',
        t_call_c,
        '이 나를 대신해 가능성의 세계를 목격하게 하는 거지.',
      ]);
      await tachyon.say_and_wait([
        '그 이후로 나는 모든 레이스 참가를 거부할 걸세…… ',
        t_call_c,
        '이 성장할 때까지. 그리고 ',
        tachyon.sex,
        '가 한계를 돌파할 수 있도록, 나는 남은 모든 힘을 다해 ',
        tachyon.sex,
        '의 디딤돌이 될 것이네.',
      ]);
      await tachyon.say_and_wait(
        '모든 것을 희생해서 가장 성공 가능성이 높은 선택지를 완성한다. 그것이 연구자네. 설령 희생되어야 할 것이 자기 자신이라 하더라도 말이야.',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 자신의 감정을 철저히 배제한 선택지를 담담하게 이야기했다.',
      ]);
      await era.printAndWait([
        '마치 수없이 연습해 온 것처럼…… 어쩌면 ',
        tachyon.sex,
        '는 아주 오래전부터 언젠가 이 말을 당신에게 전해야 할 순간을 각오하고 있었을지도 모른다.',
      ]);
      await era.printAndWait([
        '이어지는 ',
        tachyon.sex,
        '의 목소리가 미세하게 떨렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그리고…… 두 번째 선택지네. 내가 처음부터 포기했던 플랜 A.');
      await tachyon.say_and_wait([
        '이대로 계속 나아가는 거지. ',
        callname,
        ', 자네가 말한 목표인 3관을 향해, 그리고 내 목표인 한계 돌파를 향해 나아가는 거야…',
      ]);
      await tachyon.say_and_wait(
        '……동화처럼 아름답지만, 그만큼 허황된 선택이지. 그리고 자네는 꿈이 실현될 때까지, 혹은…… 모든 것이 시들어버릴 때까지 내 곁을 지켜야 하네.',
      );
      era.println();
      await tachyon.say_and_wait(
        '자, 선택하게나…… 부정하지 않겠어. 이건 책임의 전가야. 모든 책임을 자네에게 떠넘기는 거지. 하지만……',
      );
      await tachyon.say_and_wait(
        '내게 희망을 가져다준 것은 자네니까. 그러니 이것 또한 자네가 져야 할 책임 아니겠나.',
      );
      await tachyon.say_and_wait([
        '자, ',
        callname,
        ', 자네 차례야. 선택을 내리게나.',
      ]);
      era.println();
      era.print([you.get_colored_name(), '의 결정은……']);
      era.printButton('플랜 A를 선택한다', 1);
      era.printButton('플랜 B를 선택한다', 2, {
        disabled:
          era.get('cflag:25:育成回合计时') !== era.get('cflag:32:育成回合计时'),
      });
      era.print(
        '【경고: 이 선택은 아그네스 타키온의 훈련과 레이스를 고정합니다】',
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
};
