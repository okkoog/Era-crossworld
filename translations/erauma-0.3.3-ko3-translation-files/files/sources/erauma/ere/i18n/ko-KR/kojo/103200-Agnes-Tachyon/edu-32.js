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

  // [번역 대상] be_crazy_fan
  be_crazy_fan: (() => {
    const title = '止まった時計';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     */
    const f = async (tachyon, you, t_call_c, plan_b) => {
      await tachyon.say_and_wait('起きて');
      await tachyon.say_and_wait('起きて');
      await tachyon.say_and_wait('お願い……目を開けてくださいまし');
      era.drawLine();
      await era.printAndWait('俺は誰だ');
      era.println();
      await tachyon.say_and_wait(
        'あなたは……モルモット君。私の専属トレーナーですわ',
      );
      era.println();
      await era.printAndWait('……あなたは誰だ');
      era.println();
      await tachyon.say_and_wait([
        '……私は ',
        tachyon.get_colored_name(),
        '。あなたの担当',
        tachyon.uma_sex_title,
        'です',
      ]);
      await era.printAndWait('…………');
      era.println();
      await tachyon.say_and_wait('……覚えていますか？');
      await era.printAndWait('…………');
      await tachyon.say_and_wait([
        'だめ……黙らないで。私を覚えていますわよね？ 覚えていますか？ ここはトレセン学園の、私たちの研究室。あちらは ',
        t_call_c,
        ' の領域……',
      ]);
      era.println();
      if (plan_b) {
        await era.printAndWait('……すまない');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' は首を横に振った']);
        await era.printAndWait([
          '眼前の',
          tachyon.teen_sex_title,
          '……なぜか、馴染みがある',
        ]);
        await era.printAndWait('だが自分は、本当に知らない');
        era.println();
        await tachyon.say_and_wait(
          '……構いませんわ。記憶喪失も、一つの……一つの可能性……思い出せばいいだけです',
        );
        era.println();
        await era.printAndWait('……可能性');
        await era.printAndWait('その言葉が、泥の中の閃きを起こした気がした');
        await era.printAndWait('だが……');
        await era.printAndWait('閃きは、いつも一瞬だけだ');
        era.println();
        await era.printAndWait('わからない');
        await era.printAndWait('考えるほど、頭の空白は増える');
        await era.printAndWait('それでも、思い出さねばならない');
        await era.printAndWait('さっきの閃きに、もう一度届くように');
        await era.printAndWait('理由は一つだけ');
        await era.printAndWait([
          '眼前の、',
          tachyon.get_colored_name(),
          ' という名の',
          tachyon.teen_sex_title,
          'を知らない',
        ]);
        await era.printAndWait([
          'だが潜在意識が叫ぶ。',
          tachyon.sex,
          'を傷つけていけない。',
          tachyon.sex,
          'を悲しませてはいけない',
        ]);
        era.println();
        await era.printAndWait([
          'だから、',
          tachyon.sex,
          'が周りを見て思い出してみよう、と言ったとき',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は拒まなかった']);
        await era.printAndWait([
          tachyon.sex,
          'について、学園（',
          tachyon.sex,
          'によればそうらしい）を歩いただけだ',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'モルモット君……見てくださいまし。こちらがグラウンド。私たちが出会った場所ですわ',
        );
        era.println();
        await era.printAndWait('出会い……か');
        era.println();
        await tachyon.say_and_wait(
          'ええ。当時の私は、あなたを本当には見ていませんでしたけれど……あなたがそう言ったのです',
        );
        era.println();
        await era.printAndWait('そうか……');
        await era.printAndWait(
          'なら当時の自分は、タキオンの走りに魅せられたのだろう',
        );
        era.println();
        await tachyon.say_and_wait('！……思、思い出しましたの！');
        era.println();
        await era.printAndWait('……すまない');
        await era.printAndWait(
          'ただ、何かの感触で……タキオンが走れば、きっと綺麗だと思った',
        );
        era.println();
        await tachyon.say_and_wait(
          '………ええ、何度も言いましたわ……私にはわかりません。ただ走るだけなのに、何が人を惹きつけるのか',
        );
        era.println();
        await era.printAndWait('……違う');
        await era.printAndWait(
          '他人はそうかもしれない。だがタキオンの走りは……自分を必ず魅せる、という感触がある',
        );
        era.println();
        await tachyon.say_and_wait(
          '……そうですか。では、一度走って見せましょうか？',
        );
        era.println();
        await era.printAndWait('！ いいのか！');
        await era.printAndWait('だが……タキオンの脚は……');
        era.println();
        await tachyon.say_and_wait('……覚、覚えていますの？');
        era.println();
        await era.printAndWait('……');
        era.println();
        await era.printAndWait('沈黙が、いちばんの答えだった');
        await era.printAndWait([
          'ここで',
          tachyon.sex,
          'を欺き、思い出したと言えば',
        ]);
        await era.printAndWait([tachyon.sex, 'はきっと喜ぶ']);
        await era.printAndWait([tachyon.sex, 'を欺いて、いいのか']);
        era.println();
        await era.printAndWait('なぜか、胸の声がまた高く叫ぶ');
        await era.printAndWait([tachyon.sex, 'を「また」欺くな']);
        await era.printAndWait('自分を「また」欺くな');
        await era.printAndWait('……なぜ「また」だ');
        era.println();
        await tachyon.say_and_wait('……構いませんわ。一周走ってきます');
        await tachyon.say_and_wait(
          'そうすれば、何か思い出せるかもしれませんわ',
        );
        era.println();
        await era.printAndWait([tachyon.sex, 'は一周走り終えた']);
        await era.printAndWait([
          you.get_colored_name(),
          ' が思ったとおり、心を動かす走りだった',
        ]);
        await era.printAndWait('だが……それだけだ');
        era.println();
        await era.printAndWait([tachyon.sex, 'は一周を終え、止まろうとした']);
        await era.printAndWait([
          'だが、なお茫然とした ',
          you.get_colored_name(),
          ' の目を見て、',
          tachyon.sex,
          'はなぜか、また走り出した',
        ]);
        await era.printAndWait([
          '呆然とする ',
          you.get_colored_name(),
          ' の前で、',
          tachyon.sex,
          'は一周また一周、暗くなるまで走った',
        ]);
        era.println();
        await era.printAndWait('……すまない');
        era.println();
        await tachyon.say_and_wait(
          'いいえ、なんでも……ただ、走りたくなっただけですわ',
        );
        era.println();
        await era.printAndWait('嘘だ');
        await era.printAndWait([
          you.get_colored_name(),
          ' にはわかる。だが、指摘しなかった',
        ]);
        await era.printAndWait('指摘できるはずがない');
        await era.printAndWait([
          'その',
          tachyon.teen_sex_title,
          'の、徒労の哀しみを',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……明日も、一緒に探しましょう。必ず、いつか取り戻せますわ',
        );
        era.println();
        await era.printAndWait('だから、徒労だとわかっていても');
        await era.printAndWait([
          you.get_colored_name(),
          ' は、拒む言葉を吐けなかった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'モルモット君……見てくださいまし。普段はここで実験しています。毎回、私が薬を作って、あなたに飲ませるのですわ',
        );
        era.println();
        await era.printAndWait('ええ……それ、実験対象じゃないか？');
        era.println();
        await tachyon.say_and_wait(
          '当然ですわ。モルモット君が何の意味だと思いましたの',
        );
        era.println();
        await era.printAndWait('……本当に実験動物のことだったのか');
        era.println();
        await tachyon.say_and_wait(
          '……ですので、近いうちに研究しますわ。記憶を戻す薬を……手伝ってくれますわね？',
        );
        era.println();
        await era.printAndWait('……もちろん');
        era.drawLine();
        await tachyon.say_and_wait([
          'モルモット君……あちらは ',
          t_call_c,
          ' の領域です。気をつけなさい。不用意に触ると、事故になりますわ……',
        ]);
        era.println();
        await era.printAndWait('え……？');
        await era.printAndWait('……何も起きないな');
        era.println();
        await tachyon.say_and_wait(
          'ん？ そんなはずは……私も試しますわ……ああ！ 研究資料が燃えていますわ！',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          'モルモット君、紅茶の淹れ方は覚えていますか？',
        );
        era.println();
        await era.printAndWait('もちろん、紅茶くらいは淹れられる');
        era.println();
        await tachyon.say_and_wait('しっ……これでは全然だめですわ');
        era.println();
        await era.printAndWait('ええ？');
        era.println();
        await tachyon.say_and_wait('紅茶と砂糖の比は、最低でも1対1ですわ！');
        era.println();
        await era.printAndWait('甘すぎるだろ！？');
        era.drawLine();
        await era.printAndWait(
          'タキオン……記憶を失う前の俺と、どんな関係だった',
        );
        era.println();
        await tachyon.say_and_wait('……どうしましたの？ 何か思い出しましたか？');
        await era.printAndWait([
          '……ない。ただ、話を聞いていると、トレーナーと',
          tachyon.uma_sex_title,
          '、あるいは実験と実験動物だけでは足りない気がする',
        ]);
        era.println();
        await tachyon.say_and_wait('…………実は、恋人ですわ');
        await era.printAndWait('本当か？');
        era.println();
        await tachyon.say_and_wait([
          '……ええ。とても仲のいい恋人で、毎日くっついて、甘すぎて ',
          t_call_c,
          ' も',
          tachyon.sex,
          'も参っていたほどですわ',
        ]);
        await era.printAndWait('…………すまない');
        era.println();
        await tachyon.say_and_wait('謝ることはありませんわ');
        await era.printAndWait('もし……思い出せたら');
        era.println();
        await tachyon.say_and_wait(
          '……何を言っていますの。思い出せたら、ではありません。まだ思い出していないだけです……必ず、必ず思い出しますわ',
        );
        await era.printAndWait('……そうだな。ありがとう、タキオン');
        era.drawLine();
        await tachyon.say_and_wait(
          '見てくださいまし。ここが商店街……普段の実験器具は、ここで買っていますわ',
        );
        era.println();
        await era.printAndWait('……なあ、タキオン');
        era.println();
        await tachyon.say_and_wait('ん？ どうしましたの？');
        era.println();
        await era.printAndWait(
          '……なぜ、周りの人が幽霊を見るような目で俺たちを見る',
        );
        era.println();
        await tachyon.say_and_wait('そうですか？ 先月の実験かもしれませんわ');
        era.println();
        await era.printAndWait('……先月？');
        era.println();
        await tachyon.say_and_wait(
          'ええ、あのときの実験で、通りを血の赤に染めてしまいましたわ',
        );
        era.println();
        await era.printAndWait('…………タキオンは、危険な人なのか？');
        era.println();
        await tachyon.say_and_wait([
          '失礼ですわ。私は清廉潔白な青春美',
          tachyon.teen_sex_title,
          'ですもの',
        ]);
        await tachyon.say_and_wait(
          'モルモット君がそばにいなければ、暴走する地球最終兵器になるだけですわ',
        );
        era.println();
        await era.printAndWait('怖い！');
        era.println();
        await tachyon.say_and_wait(
          '……ですので、もう離れないでくださいまし。いいですわね？',
        );
        era.println();
        await era.printAndWait('…………ああ');
        era.drawLine();
        await tachyon.say_and_wait(
          '……モルモット君。あなたは、私を責めませんの？',
        );
        era.println();
        await era.printAndWait('なぜだ');
        era.println();
        await tachyon.say_and_wait(
          '私ですわ。あなたの人生をここに縛ったのは。もし……',
        );
        era.println();
        await era.printAndWait('……なぜ');
        await era.printAndWait('責めるべきは、あなたのほうではないのか');
        await era.printAndWait(
          '記憶のない俺に……あなたの愛を受ける資格があるのか',
        );
        era.println();
        await tachyon.say_and_wait('！ 違います……そんなことはありません！');
        await tachyon.say_and_wait(
          '必ず思い出せますわ……！ ですから、ですから……そんなことは言わないで……',
        );
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の足跡は、かつて辿った場所をすべて踏んだ',
        ]);
        await era.printAndWait('グラウンド、レース場、河原、神社');
        await era.printAndWait('最後まで、モルモット君の記憶は戻らなかった');
        await era.printAndWait('だが、二人はそれを悲しまなかった');
        await era.printAndWait(
          'その場所に、いちばん美しい思い出を、新たに残したからだ',
        );
        era.println();
        await tachyon.say_and_wait('……こんな物語の終わり、気に入りましたか？');
        era.println();
        await era.printAndWait('……ああ、いい話だ');
        era.println();
        await tachyon.say_and_wait('……モルモット君');
        era.println();
        await era.printAndWait('もういい。これで、十分だ');
        await era.printAndWait('俺は……もう死ぬ');
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('タキオン……ありがとう');
        await era.printAndWait('短い人生だった');
        await era.printAndWait('だがこの日々は、幸せだった');
        await era.printAndWait('過去を覚えていなくても……胸を張って言える');
        await era.printAndWait(
          'タキオンと出会えたこと……それが、人生でいちばん美しいことだ',
        );
        await era.printAndWait('だから、すまない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の物語は……ここで終わる',
        ]);
        era.println();
        await tachyon.say_and_wait('もし、あなたが望むなら……');
        await era.printAndWait('……すまない');
        await era.printAndWait('だが、もうあなたの足を引っ張るのはやめたい');
        await era.printAndWait('物語は、ここで終わらせよう');
      } else {
        await era.printAndWait('すまない……本当に、覚えていない');
        era.println();
        await tachyon.say_and_wait('モル……');
        era.printButton('「——もちろん、嘘だ！」', 1);
        await era.input();
        await tachyon.say_and_wait('…………え？');
        era.printButton(
          '「何を考えている。タキオンを忘れるわけがないだろう？」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait('…………');

        era.printButton('「……え？ タキオン？」', 1);
        await era.input();
        await era.printAndWait('タキオンは急に黙り、頭を下げた');
        await era.printAndWait('突然、タキオンがあなたの身体を押さえた');
        era.println();
        await tachyon.say_and_wait(
          'この……！ どれほど心配したか、わかりますの！',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は顔を上げない。だが床に落ちた水滴が示す————',
          tachyon.sex,
          'は泣いている',
        ]);
        era.printButton('「タキオン？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'だめ……もう欺かないで。お願い、いいですわね。本当に、怖い……失いたくない……',
        );
        era.printButton('「…………わかった。すまない」', 1);
        await era.input();
        await era.printAndWait('すまない');
        await era.printAndWait('本当にすまない');
        await era.printAndWait([
          '何が起きたかはわからない。だが、また',
          tachyon.sex,
          'を欺いた',
        ]);
        await era.printAndWait([
          '欺いた——眼前の、',
          tachyon.get_colored_name(),
          ' という名の、見知らぬ',
          tachyon.uma_sex_title,
          'を',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'モルモット君……覚えていますか。以前、何があったか',
        );
        era.println();
        await era.printAndWait('これは……頷いてもいいだろう');
        await era.printAndWait([you.get_colored_name(), ' は首を横に振った']);
        await era.printAndWait('正直、何も知らない');
        await era.printAndWait([
          'ここはどこか、眼前の',
          tachyon.teen_sex_title,
          'は誰か',
        ]);
        await era.printAndWait('すべて、わからない');
        await era.printAndWait('だが一点だけ、胸に埋まって動かない');
        await era.printAndWait([tachyon.sex, 'を悲しませたくない']);
        await era.printAndWait([tachyon.sex, 'を苦しませたくない']);
        await era.printAndWait('そのためなら、嘘で過去を覆っても構わない');
        era.println();
        await tachyon.say_and_wait(
          '……なんでもありませんわ。もういいです。あなたは目を覚ました……それで、十分ですわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は、詳しく説明する気がなさそうだ',
        ]);
        await era.printAndWait('なら、仕方ない');

        era.printButton('「そうだ、今は————」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'モルモット君、疲れているでしょう。続きは明日ですわ',
        );
        era.println();
        await era.printAndWait([
          '今の時刻を聞こうとしたところで、',
          tachyon.sex,
          'に慌てて話題を変えられた',
        ]);
        await era.printAndWait('過去の記憶はないが、人としての常識はある');
        await era.printAndWait([
          tachyon.sex,
          'の顔を見れば、',
          tachyon.sex,
          'はこの問いを答えたくない',
        ]);
        await era.printAndWait('……なら、聞かない');
        await era.printAndWait([
          'この問いが、',
          tachyon.sex,
          'にそんな慌てた顔をさせるなら',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'さあ、モルモット君。目が覚めたのですから、まず最初にすべきこと、わかりますわね？',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……なに、だ？');
        await tachyon.say_and_wait(
          '決まっていますわ、ご飯です！ ご飯！ お腹が空いて死にそうですわ。モルモット君、早く何か作ってきなさい！',
        );
        await you.say_as_passer_by_and_wait('モルモット', '…………わかった');
        era.println();
        await you.say_as_passer_by_and_wait('モルモット', '味は……どうだ？');
        await tachyon.say_and_wait('………ん');
        await tachyon.say_and_wait('ぐえっ……まずいですわ……');
        await tachyon.say_and_wait(
          'どうしてこんなにまずいの……モルモット君、あなた……',
        );
        await you.say_as_passer_by_and_wait('モルモット', '！？');
        await tachyon.say_and_wait(
          'きっと……身体がまだ完全に戻っていないのでしょう。あんなに長く寝ていたのですもの',
        );
        await tachyon.say_and_wait(
          '今回は見逃してあげますわ。でも、早く元に戻りなさいな',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……あはは、すまないな',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          'では……次は、グラウンドでトレーニングですわ',
        );
        await you.say_as_passer_by_and_wait('モルモット', '…………');
        await tachyon.say_and_wait('………モルモット君？');
        await you.say_as_passer_by_and_wait('モルモット', 'あ、どうした……');
        await tachyon.say_and_wait(
          '驚かないのですか？ この私が、自らトレーニングに行くと言ったのですよ？',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……え');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……つい、またサボるつもりだと思った',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'タキオンが、本気でトレーニングに行くのか！？',
        );
        await tachyon.say_and_wait('いえ、それは大袈裟ですわ');
        await you.say_as_passer_by_and_wait('モルモット', 'あはは……そうか');
        era.drawLine();
        await you.say_as_passer_by_and_wait('モルモット', '商店街……？');
        await tachyon.say_and_wait(
          'ええ。実験器具が足りなくなってきましたもの。付き合ってくださいまし',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'ああ、いい。もちろん',
        );
        await tachyon.say_and_wait(
          'モルモット君？ どちらへ行くのですの？ 商店街はあちらではありませんわ',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……あ、いや、なんでもない。ちょっと取りに行くものがあっただけだ',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'よく考えたら、大した用事じゃなかった。あははは',
        );
        await tachyon.say_and_wait('……変ですわね');
        era.println();
        await tachyon.say_and_wait('ふん～ふんふんふん');
        await you.say_as_passer_by_and_wait('モルモット', '……なあ、タキオン？');
        await tachyon.say_and_wait('ん？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'なぜ……商店街の人が、お前を見る目が妙なんだ',
        );
        await tachyon.say_and_wait(
          '……そ、そんなことありますの？ 気のせいですわよ、モルモット君',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'いや、明らかにそうだ。危険人物でも見るような……',
        );
        await tachyon.say_and_wait('見間違いですわ');
        await you.say_as_passer_by_and_wait('モルモット', 'でも');
        await tachyon.say_and_wait('見間違いですわ');
        await you.say_as_passer_by_and_wait('モルモット', '……わかった');
        era.drawLine();
        await tachyon.say_and_wait(
          '……モルモット君。今は、慎重に、手のものを下ろしなさい',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'え……どうした？');
        await tachyon.say_and_wait([
          'どうしたもこうしたも、それが ',
          t_call_c,
          ' のものですのよ？',
        ]);
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'え……でも、ちょっと触ったくらいなら大丈夫だろう',
        );
        await tachyon.say_and_wait(
          'そんなはずが！ この前、私が研究資料に軽く触れただけで、一瞬で燃え上がったのですわ！',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'でも……');
        await tachyon.say_and_wait('………');
        await you.say_as_passer_by_and_wait('モルモット', '…………');
        await tachyon.say_and_wait(
          'では私も試しますわ………わああ！ 燃えていますわ！ 早く資料を救いなさいあああ！',
        );
        era.drawLine();
        await tachyon.say_and_wait('ねえねえ、モルモット君');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'ん？ タキオン、どうした？',
        );
        await tachyon.say_and_wait(
          '言いますけれど、目が覚めてから、一度も私と親しんでいませんわよね？',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……え？');
        await tachyon.say_and_wait(
          '恋人を放ったらかしですわ。さっきまでは回復していないからだと思っていましたけれど……身体検査も問題ないのですから、そろそろちゃんと甘えなさいな？',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '待て、タキオンはまだ学生だろう',
        );
        await tachyon.say_and_wait('ええ、何か問題ですの？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '大問題だろう！？ 倫理とか……',
        );
        await tachyon.say_and_wait(
          '……急に何を興奮しているのですの。当初は、あなたからあんなに積極的だったのに♡',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '…昔の俺は、そんなに最低だったのか',
        );
        await tachyon.say_and_wait('？ モルモット君、今、何か言いました？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……いや、なんでもない',
        );
        await tachyon.say_and_wait('では早く。ちゃんと親しみましょう♡');
        era.drawLine();
        await tachyon.say_and_wait(
          'おお、今回の弁当は上出来ですわ！ モルモット君！ ようやく昔の水準に戻りましたわね！',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'そ……そうか？');
        await tachyon.say_and_wait(
          'あんなに必死にリハビリした甲斐がありましたわ！',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'ああ…………レシピ本のおかげでもある',
        );
        await tachyon.say_and_wait(
          'まったく……こんな味、久しぶりですわ…………本当に、久しぶり………',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……タキオン、一つ聞いてもいいか？',
        );
        await tachyon.say_and_wait('ん？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '俺は一体……どれだけ眠っていた',
        );
        await tachyon.say_and_wait('……………');
        await tachyon.say_and_wait('……………年ですわ');
        await you.say_as_passer_by_and_wait('モルモット', '…………');
        await tachyon.say_and_wait('……モルモット君？');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'すまない……そんなに長いあいだ、お前は……孤独だっただろう',
        );
        await tachyon.say_and_wait('！');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……もう戻った。もう大丈夫だ。もう、これ以上……',
        );
        await tachyon.say_and_wait('……');
        await tachyon.say_and_wait(
          'モルモット君……本当に……本当に、もう支えきれないところでしたわ……',
        );
        await tachyon.say_and_wait(
          'もし……目が覚めなかったら……もし……私を完全に忘れていたら……もし……もし……',
        );
        await tachyon.say_and_wait(
          '本当に……怖かった……悪夢のよう……何年も続いた悪夢……',
        );
        await you.say_as_passer_by_and_wait('モルモット', '……………');
        await tachyon.say_and_wait(
          'でも……戻ってきましたわ。あなたは、戻ってきました',
        );
        await tachyon.say_and_wait(
          '約束してくださいまし……今度は、もう離れないで……いいですわね？',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '……ああ、もう離れない',
        );
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'それで……あの日は、いったい……',
        );
        await tachyon.say_and_wait(
          '……あの日、あなたは商店街で……私は、ほんの少し席を外しただけ。なのに……自称ファンの者が、飛びかかって……それから……',
        );
        await tachyon.say_and_wait('……あのとき、もう少し早く戻れていれば、');
        await tachyon.say_and_wait('いいえ、ずっとそばにいれば……');
        await tachyon.say_and_wait(
          '絶対に、あんなことにはならなかった……ごめんなさい……',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'いいんだ……今は、もう無事なんだろう？',
        );
        await tachyon.say_and_wait(
          'でも……あいだの、あなたの人生……何年も…………恨まないのですか？',
        );
        await tachyon.say_and_wait(
          '私が原因でなければ……私が担当でなければ……あなたは、こんな目に遭わなかったかもしれませんわ',
        );
        await you.say_as_passer_by_and_wait('モルモット', 'なぜ恨む必要がある');
        await you.say_as_passer_by_and_wait(
          'モルモット',
          'タキオンのせいじゃない……それなのに、タキオンは俺を救い出してくれた',
        );
        await you.say_as_passer_by_and_wait(
          'モルモット',
          '感謝しても足りない。恨むわけがない',
        );
        await tachyon.say_and_wait(
          '…………そうですね。あなたなら、そう言いますわ',
        );
        await you.say_as_passer_by_and_wait('モルモット', '？ どういう意味だ');
        await tachyon.say_and_wait('いいえ……なんでもありませんわ');
        era.drawLine();
        await era.printAndWait('こうして');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の足跡は、かつて辿った場所をすべて踏んだ',
        ]);
        await era.printAndWait('グラウンド、レース場、河原、神社');
        await era.printAndWait(
          '過去を味わい直し、何年も前に止まった時計を、また歩ませるために',
        );
        await era.printAndWait(
          'あいだに失った歳月は、埋められないかもしれない',
        );
        await era.printAndWait(
          'それでも二人は、自分たちだけの新しい人生を、懸命に作った',
        );
        era.println();
        await tachyon.say_and_wait('……こんな物語の終わり、気に入りましたか？');
        era.println();
        await era.printAndWait('……ああ、いい話だ');
        era.println();
        await tachyon.say_and_wait('……モルモット君');
        era.println();
        await era.printAndWait('もういい。これで、十分だ');
        await era.printAndWait('俺は……もう死ぬ');
        await tachyon.say_and_wait('…………');
        await era.printAndWait('タキオン……ありがとう');
        await tachyon.say_and_wait(
          '約束したでしょう……もう離れない、と。約束したのですわ',
        );
        era.println();
        await era.printAndWait('……すまない');
        await era.printAndWait('また、お前を欺いたと思え');
        await era.printAndWait('この日々は、幸せだった');
        await era.printAndWait(
          'だが、この幸福は……俺のものではない。「モルモット君」のものだ',
        );
        await era.printAndWait(
          'タキオンと出会えたこと……それが、人生でいちばん美しいことだ',
        );
        await era.printAndWait('だから、もう欺きたくない');
        await era.printAndWait('だから、すまない');
        await era.printAndWait('だから、許してくれ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' とモルモット君の物語は……ここで終わる',
        ]);
        await tachyon.say_and_wait('もし、あなたが望むなら……');
        era.println();
        await era.printAndWait('……すまない');
        await era.printAndWait('だが、もうお前の足を引っ張りたくない');
        await era.printAndWait('モルモット君は、ここで終わらせよう');
      }
      era.println();
      await era.printAndWait('すまない、タキオン。本当に眠い……もう、いいか？');
      await tachyon.say_and_wait('……ええ。ゆっくり休みなさい。そばにいますわ');
      era.drawLine();
      await tachyon.print_and_wait('モルモット君は穏やかに目を閉じた');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は泣かなかった。なぜなら……これが初めてではないから',
      ]);
      era.println();
      await tachyon.print_and_wait('モルモット君との別れ');
      await tachyon.print_and_wait('最初は、あの日の商店街だった');
      await tachyon.print_and_wait('自分が席を外さなければ');
      await tachyon.print_and_wait([
        '無理にでも',
        you.sex,
        'をそばに留めていれば',
      ]);
      await tachyon.print_and_wait('もし……');
      await tachyon.print_and_wait('もし、などない');
      era.println();
      if (plan_b) {
        await tachyon.print_and_wait('犯人を骨まで砕いて灰にしても');
        await tachyon.print_and_wait('商店街を真っ赤に染めても');
        await tachyon.print_and_wait([you.sex, 'は戻らなかった']);
        await tachyon.print_and_wait([
          'その赤では、',
          you.sex,
          'の腹から溢れた血は埋まらない',
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          'は、やはり……私を責めませんでしたわ',
        ]);
        era.println();
        await tachyon.print_and_wait('自分がこうしてしまっても');
        await tachyon.print_and_wait(
          '眼前のモルモット君の顔は、青春の名残に溢れている',
        );
        await tachyon.print_and_wait([
          you.sex,
          'は、ここで去るべきではなかった',
        ]);
        await tachyon.print_and_wait([you.sex, 'は、今去るべきではなかった']);
        await tachyon.print_and_wait([
          'なのに、',
          tachyon.get_colored_name(),
          ' のせいだ',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'が、誤った時間に、誤った場所で、出会ってしまった……誤った人に',
        ]);
      } else {
        await tachyon.print_and_wait('犯人を骨まで砕いて灰にしても');
        await tachyon.print_and_wait(
          '商店街で、自分が狂人のように駆け回っても',
        );
        await tachyon.print_and_wait([you.sex, 'は戻らなかった']);
        await tachyon.print_and_wait([
          '応急の処置では、',
          you.sex,
          'の腹から溢れた血は埋まらない',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'あんなに長く欺いてきたのですもの……もう一度欺いたところで、何ですの……',
        );
        era.println();
        await tachyon.print_and_wait('最初から、わかっていた');
        await tachyon.print_and_wait([
          you.sex,
          'であり、',
          you.sex,
          'ではない',
        ]);
        await tachyon.print_and_wait(
          '懸命に取り繕っても、記憶を失った者の顔の茫然は、そう簡単には隠せない',
        );
        await tachyon.print_and_wait(
          'まして……そのあとの嘘は、あまりに拙かった',
        );
        era.println();
        await tachyon.print_and_wait([
          'だが……',
          tachyon.get_colored_name(),
          ' は構わない',
        ]);
        await tachyon.print_and_wait([you.sex, 'でありさえすればいい']);
        await tachyon.print_and_wait(
          '生きてくれればいい。生き続けてくれればいい',
        );
        await tachyon.print_and_wait('記憶がない？ それが何だというの');
        await tachyon.print_and_wait([
          you.sex,
          'が続いてくれるなら、',
          tachyon.get_colored_name(),
          ' は一生欺かれても甘んじる',
        ]);
        await tachyon.print_and_wait('……なのに');
        await tachyon.print_and_wait([
          'また同じだ。「今度」も、',
          you.sex,
          'は自分を、一生分欺いた',
        ]);
        await tachyon.print_and_wait([
          'それでも最後の最後に、もう一度だけ ',
          tachyon.get_colored_name(),
          ' を欺くことは、しなかった',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('ベッド脇の紅茶を一口飲む');
      await tachyon.print_and_wait([
        '自分で淹れた紅茶は、',
        you.sex,
        'が淹れたものと、理論上の成分はまったく同じだ',
      ]);
      await tachyon.print_and_wait('何年も、自分で淹れてきたのだから');
      await tachyon.print_and_wait(
        '工夫できること、変えられることは、すでに最善まで研究し尽くした',
      );
      await tachyon.print_and_wait('だが、味は違う');
      await tachyon.print_and_wait(
        '同じにはならない。永遠に、同じにはならない',
      );
      await tachyon.print_and_wait('今日の紅茶は、永遠に昨日の味には勝てない');
      era.println();
      await tachyon.say_and_wait('————では、次の実験を始めますわ');
      era.drawLine();
      await tachyon.print_and_wait('トレセン学園の地下室');
      era.println();
      await tachyon.say_and_wait('前回ここに来たのは……いつでしたかしら');
      era.println();
      await tachyon.print_and_wait('三ヶ月？ 五ヶ月？ それとも……');
      await tachyon.print_and_wait(
        '「今度」は、モルモット君とどれだけ過ごした？',
      );
      era.println();
      await tachyon.say_and_wait('いいですわ。もう、どうでも');
      era.println();
      await tachyon.print_and_wait('灯を入れる');
      await tachyon.print_and_wait('目が光に慣れるのを待って');
      await tachyon.print_and_wait('眼前に現れたのは、数千に及ぶ培養槽だった');
      era.println();
      await tachyon.print_and_wait([
        'ああ、',
        you.sex,
        'が知ったら、',
        you.sex,
        'は絶対に許さないでしょうね',
      ]);
      await tachyon.print_and_wait([
        'でも……',
        you.sex,
        'は、やはり私を責めなかった',
      ]);
      await tachyon.print_and_wait('なら、それは黙認ですわ');
      era.println();
      await tachyon.say_and_wait(
        '第五十六回。記憶の回復傾向なし、身体に異状なし、生存期間五ヶ月……',
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'が去った日から、ようやく動き出した計画',
      ]);
      await tachyon.print_and_wait('何度自分を呪ったかわからない');
      await tachyon.print_and_wait('なぜ、こんなに遅く気づいたのか');
      await tachyon.print_and_wait(
        '泡のような幸福に麻痺して、研究者として最低限の備えすら忘れたのか？',
      );
      await tachyon.print_and_wait('だから、こうなった');
      era.println();
      await tachyon.print_and_wait([
        '一滴ずつ、砂の城を積むように、',
        you.sex,
        'の身体を組み直した',
      ]);
      await tachyon.print_and_wait(
        'だが、すべてを組み直しても、形のないものは、もう一度は作れない',
      );
      await tachyon.print_and_wait('人体でもっとも秘密を孕む脳————記憶');
      await tachyon.print_and_wait(
        '最初から、あったかどうかすらわからないものを、どう形を取り戻すというの',
      );
      await tachyon.print_and_wait('こうするしかない');
      await tachyon.print_and_wait('何度も実験し、何度も目覚めさせ');
      await tachyon.print_and_wait('何度も……奇跡を待つ');
      era.println();
      await tachyon.say_and_wait(
        '失敗主因、多臓器不全による敗血症……生存意志、なし',
      );
      era.println();
      await tachyon.print_and_wait(
        '凡人の泥遊びでは、女神様には永遠に届かないのでしょうね',
      );
      await tachyon.print_and_wait([
        'だから、毎回造り上げた',
        you.sex,
        'は、いつもこうなる',
      ]);
      await tachyon.print_and_wait('長くて半年、短くて……二週間');
      await tachyon.print_and_wait('時が来れば、必ず何らかの理由で永眠する');
      await tachyon.print_and_wait('……もちろん');
      await tachyon.print_and_wait(
        'これらの病は、どれほど言っても、常人の範囲だ',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の研究成果があれば',
      ]);
      await tachyon.print_and_wait(
        '延命するなら、三年から五年は絶対に問題ない。それ以上も……可能だ',
      );
      await tachyon.print_and_wait(
        '望むなら、三年から五年が一つあれば、二つ目、三つ目、四つ目と、永久に続けられる',
      );
      era.println();
      await tachyon.say_and_wait([you.sex, 'は、やはり……言いませんでしたわ']);
      era.println();
      await tachyon.print_and_wait('何度繰り返しても');
      await tachyon.print_and_wait('身体をどう改変しても');
      await tachyon.print_and_wait([
        '最後の最後、',
        you.sex,
        'の言葉は、いつも大同小異だ',
      ]);
      era.println();
      await tachyon.say_and_wait('もう終わりです');
      await tachyon.say_and_wait('もう、十分です');
      era.println();
      await tachyon.say_and_wait(
        '冗談じゃありませんわ……冗談じゃありませんわ！',
      );
      await tachyon.say_and_wait(
        '誰が勝手に満足していいと言いましたの！ 言いなさい！ 私に言いなさい！ 生きたいと言いなさい！ 私と暮らし続けたいと言いなさい！',
      );
      await tachyon.say_and_wait(
        '記憶がなくても構いません。一生かけて思い出しても構いません。言って……なぜ言わないの……なぜ……私を一人にするの……',
      );
      era.println();
      await tachyon.print_and_wait([
        'もし、',
        you.sex,
        'が憎んでいたなら。自分の命を奪った ',
        tachyon.get_colored_name(),
        ' を憎み、死んでも ',
        tachyon.get_colored_name(),
        ' と暮らしたくないというなら、それなら受け入れられる',
      ]);
      await tachyon.print_and_wait([
        '本当にそうなら、',
        tachyon.get_colored_name(),
        ' は二言なく',
        you.sex,
        'の生活から離れ、最低限の医療接触だけにする',
      ]);
      await tachyon.print_and_wait([
        '最後に、ほんの少しの迷いがあれば、あるいは ',
        tachyon.get_colored_name(),
        ' への、ほんの少しの嫌悪を見せれば',
      ]);
      await tachyon.print_and_wait([
        '心拍が止まっても、最後の瞬間に',
        you.sex,
        'を救い出せる',
      ]);
      await tachyon.print_and_wait('だが……五十六回のなかで');
      await tachyon.print_and_wait('そんなことは、一度も起きなかった');
      era.println();
      await tachyon.print_and_wait('足を引っ張りたくない');
      await tachyon.print_and_wait('縛りたくない');
      await tachyon.print_and_wait('すべてを失っても、命も、記憶も');
      await tachyon.print_and_wait([
        '五十六回、毎回、',
        you.sex,
        'が最後まで想っていたのは ',
        tachyon.get_colored_name(),
        ' の可能性だった',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'だが、',
        tachyon.get_colored_name(),
        ' の可能性は、もう終わっている',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の時間は、もう止まっている',
      ]);
      await tachyon.print_and_wait('あの紅茶の味は、あの瞬間から固定された');
      era.println();
      await tachyon.say_and_wait('第五十七回、開始');
      era.println();
      await tachyon.print_and_wait(
        '培養槽が栄養液を排出し、槽のなかの人影が解き放たれる',
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'を終わらせてはならない。',
        you.sex,
        'を終わらせはしない',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' とモルモット君の物語は、永遠に続けなければならない',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'こうして、過去を縛り、過去に縛られた科学者は、新たな実験を始めた',
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
        ' は、',
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
          '何か勘違いしたのか、',
          tachyon.get_colored_name(),
          ' は突然 ',
          you.get_colored_name(),
          ' に身体を寄せた',
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
          'はくっくと笑い、',
          you.get_colored_name(),
          ' を離し、一人で競馬場へ歩いていった',
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
    const title = '実験対照';
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
    const title = '希望';
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
    const title = '希望';
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

  // [번역 대상] os_95_3
  os_95_3: (() => {
    const title = '抽選と代償剤の効果';
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
      await tachyon.say_and_wait('まったく……あんなに簡単に爆発するとは');
      await tachyon.say_and_wait([
        call_25,
        ' もですわ……コーヒー粉に身体能力を上げる薬を少し足しただけですのに。なぜそこまで怒るのです……',
      ]);
      await tachyon.say_and_wait(
        'やはり今回は、呪いにも耐えるビーカーを買うべきですわね？',
      );
      era.printButton('「そんなもの、どこから仕入れるんだ……」', 1);
      era.printButton('「そもそも需要がないだろう……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'ふん、',
        tachyon.sex,
        'の呪いの原理が何であれ、結局は外力で壊すしかないのですわ',
      ]);
      await tachyon.say_and_wait(
        'つまり、外力をどう使っても壊れない強度まで上げればいい、ということですわ',
      );
      await tachyon.say_and_wait(
        'ですので今回探すのは、宇宙用素材で、極寒・極熱・気圧に耐える高規格ビーカーですわよ',
      );
      await tachyon.say_and_wait([
        'ああ、見つかりましたわ。',
        callname,
        '、見てくださいまし',
      ]);
      era.println();
      await era.printAndWait('本当か！ 商店街、すごいな！');
      era.drawLine({ content: '時間を、少しだけ戻す' });
      era.println();
      await era.printAndWait([
        'この日、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' と街へ実験器具を買いに出た',
      ]);
      await era.printAndWait('買い終えて帰るとき……');
      await you.say_as_passer_by_and_wait(
        '商店街のおじさん',
        'さあさあ！ 商店街、実験器具大放出！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街のおじさん',
        '宇宙特製ガラスビーカー、宇宙隕石るつぼ、ロケット燃料アルコールランプをまとめて買えば、抽選に一回参加できるぞ！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街のおじさん',
        '特等は温泉旅行券！ 一等は特大ニンジンハンバーグ！',
      );
      era.println();
      await era.printAndWait(
        'ええ……最初はともかく、後ろのいくつか、本当に買う人いるのか……',
      );
      era.println();
      await tachyon.say_and_wait([callname, '、抽選に行きましょう']);
      era.printButton('「全部買ったのか！？」', 1);
      era.printButton(
        '「……アルコールランプにロケット燃料は、本当に大丈夫か？」',
        2,
      );
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '当然ですわ。研究室で補充すべきものは多いのです',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は当然だと言った',
        ]);
        await era.printAndWait('……この商店街は、いったい何なんだ');
      } else {
        await tachyon.say_and_wait([
          callname,
          '、キャッチコピーもわかりませんの？ 当然、宣伝文句ですわよ、宣伝',
        ]);
        era.println();
        await era.printAndWait(
          '……いや、前が本物なら、最後を疑うのは普通だろう',
        );
      }
      era.printButton(
        '「それにしても、タキオンが抽選に興味を持つのは珍しいな」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        'ええ……そうですわね。抽選より、賞品は金で買えますもの……私たちのレース賞金なら、この程度は困りませんわ',
      );
      era.println();
      await era.printAndWait('それなら……');
      era.println();
      await tachyon.say_and_wait('ですが目的は賞品ではありません。観察ですわ');
      era.println();
      await era.printAndWait('観察……？');
      era.println();
      await tachyon.say_and_wait(
        '正月に言ったのを覚えていますか？ 感情の影響を研究し始めたい、と……',
      );
      await tachyon.say_and_wait(
        'なら対照が必要ですわ。最良の対照は、ずっとそばにいるあなたです',
      );
      await tachyon.say_and_wait('見せなさい。抽選のあとの反応を');
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は前へ出て、抽選機を回した……',
      ]);
      switch (dice) {
        case 1:
          await you.say_as_passer_by_and_wait('店主', '残念賞、ティッシュ一袋');
          await era.printAndWait('残念賞か……惜しいが、仕方ない');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('む……あまり反応がありませんわね');
            era.println();
            await era.printAndWait('いや……最初から期待していなかったし');
            era.println();
            await tachyon.say_and_wait(
              '期待しない、とは、最初から当たらないと思っていた、ですの？……結果を見る前に可能性を否定するやり方は、あまり好みではありませんわ',
            );
            era.println();
            await era.printAndWait('ああ……');
            era.println();
            await tachyon.say_and_wait('行きましょう。実験の続きですわ');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の機嫌が悪くなった',
            ]);
            await era.printAndWait(['二人は黙って学園へ戻った']);
          } else {
            await tachyon.say_and_wait(
              '残念賞ですわね……まあ、どうでもいいですわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' も相槌を打った。所詮、商店街の小さな催しだ',
            ]);
            era.println();
            await tachyon.say_and_wait('賞品など、私たちなら買えますもの');
            await tachyon.say_and_wait(
              'それに、ティッシュも役に立ちますわ……ほら、ものを拭けますでしょう？',
            );
            await tachyon.say_and_wait(
              'それから……その温泉旅行券……当たっても、旅行する暇はありませんわよね',
            );
            era.println();
            await era.printAndWait('ん？ なぜ急にそんなに言う');
            await tachyon.say_and_wait([
              '……そういえば、',
              callname,
              '。こういう抽選は、店によっては細工をするそうですわ……',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が抽選箱まで調べようとするのを見て、',
              you.get_colored_name(),
              ' は慌てて ',
              tachyon.get_colored_name(),
              ' を商店街から連れ出した',
            ]);
            await tachyon.say_and_wait([
              'くっ……離しなさい、',
              callname,
              '。賞品などどうでもいいですわ。ですが消費者として、公平かを確かめる権利と責任があります……！',
            ]);
            era.println();
            await era.printAndWait([
              '……実際は、',
              tachyon.sex,
              'も言っているほどどうでもよくないらしい',
            ]);
          }
          break;
        case 2:
          await you.say_as_passer_by_and_wait(
            '店主',
            '三等、特選ニンジン一本！',
          );
          era.println();
          await era.printAndWait('特選とは……在庫処分だろう');
          await era.printAndWait([
            you.get_colored_name(),
            ' は仕方なくニンジンを一本持った',
          ]);
          await era.printAndWait('突っ込むべきか迷うが、この抽選の賞品は');
          await era.printAndWait([
            '残念賞のティッシュと特等の温泉旅行券以外、全部',
            tachyon.uma_sex_title,
            '向けではないか？',
          ]);
          era.println();
          if (plan_b) {
            await tachyon.say_and_wait(
              'ニンジンですわ……そういえば、賞品はどれも実用的ですわね',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は多くを言わず、自然に ',
              you.get_colored_name(),
              ' の手からニンジンを受け取り、小さく折って口に入れた',
            ]);
            era.println();
            await tachyon.say_and_wait('よろしい、甘いですわ');
          } else if (relation <= 225) {
            await tachyon.say_and_wait([
              'おや？',
              callname,
              '、今の顔、悪くありませんわ',
            ]);
            era.println();
            await era.printAndWait('え？ 顔？');
            era.println();
            await tachyon.say_and_wait('呆れ、落胆、慰め。複雑な顔ですわね');
            era.println();
            await era.printAndWait([
              'ああ……そういえば、',
              tachyon.get_colored_name(),
              ' の感情研究のために抽選したのだった',
            ]);
            await era.printAndWait(
              '……感情の研究とは、人の心がわからないロボットみたいだ',
            );
            await era.printAndWait([
              'だが目の前の、マッドサイエンティストのような ',
              tachyon.get_colored_name(),
              ' を思えば……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'が今「人心などわからない」と言っても、驚かないだろう',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '今日の実験はまず成功ですわ。次は別の感情も見せてくださいまし、',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は勝手に ',
              you.get_colored_name(),
              ' の手からニンジンを奪い、先の細いところを折って口に含んだ',
            ]);
            era.println();
            await tachyon.say_and_wait('味は悪くありませんわ');
          } else {
            await tachyon.say_and_wait('おや、ニンジン。悪くありませんわよ？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が寄ってきて、',
              you.get_colored_name(),
              ' を慰めた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '見栄えだけの品より、栄養を補えるもののほうが現実的ですわ',
            );
            await tachyon.say_and_wait(
              'ニンジンなら……戻って炒め卵にします？ それともニンジンハンバーグ？ ジュースにしても悪くありませんわ……',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の慰めを聞き、',
              you.get_colored_name(),
              ' も笑ってしまった',
            ]);
            era.printButton('「それなら一本じゃ足りないな」', 1);
            era.printButton('「もう少し買わないと」', 2);
            await era.input();
            await era.printAndWait([
              'こうして二人は商店街へ戻り、夕飯分のニンジンを買った',
            ]);
            await era.printAndWait('……商店街の売り込みに乗っただけではないか');
            await era.printAndWait([
              '帰り道で、',
              you.get_colored_name(),
              ' は遅れて気づいた',
            ]);
          }
          break;
        case 3:
          await you.say_as_passer_by_and_wait(
            '店主',
            '二等、山ほど積んだニンジンの山！',
          );
          era.println();
          await era.printAndWait('うわ！ 多い！');
          await era.printAndWait('文字どおり、小山のように積んである');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('おや、悪くありませんわね？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は嬉しそうな顔をした',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '今月、いいえ、半年はニンジンに困りませんわ',
            );
            era.println();
            if (you.race > 0) {
              await era.printAndWait([
                'いや、',
                tachyon.uma_sex_title,
                'でも、こんな量は食べきれないだろ……',
              ]);
              era.println();
              await tachyon.say_and_wait([
                '一般に、',
                tachyon.uma_sex_title,
                'は消費エネルギーが多いほど補給も要ります。つまり、食べる量＝強さ、は成立しうるのですわ',
              ]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は値踏みする目で ',
                you.get_colored_name(),
                ' の身体を見た',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '食欲を増す薬、ですの？……くふふ、悪くない選択かもしれませんわ',
              );
              era.println();
              await era.printAndWait([
                'このニンジンの山は、逃れようもなく ',
                you.get_colored_name(),
                ' 一人の責任になりそうだ',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は肩を落とし、一車のニンジンを引いて ',
                tachyon.get_colored_name(),
                ' とトレセン学園へ戻った',
              ]);
            } else {
              await era.printAndWait([
                'だが、人間がこんなにニンジンをどうする……',
                you.get_colored_name(),
                ' はその悩みを ',
                tachyon.get_colored_name(),
                ' に伝えた',
              ]);
              era.println();
              await tachyon.say_and_wait([
                'おや……人間を',
                tachyon.uma_sex_title,
                'へ変える可能性を実験する、という意味ですの？ その研究……やれなくもありませんわ……',
              ]);
              era.println();
              await you.say_and_wait('…………タキオン？');
              era.println();
              await tachyon.say_and_wait([
                'くふふ……新しい研究の可能性ですわ、',
                callname,
                '……これは、万一の Plan C にしておきましょう',
              ]);
              era.println();
              era.print([
                '危険で不穏な言葉に、',
                you.get_colored_name(),
                ' は背筋が凍った',
              ]);
              era.printButton('「や……やっぱりタキオンに渡す」', 1);
              era.printButton('「抽選券はタキオンのだから」', 2);
              await era.input();
              await tachyon.say_and_wait(
                '……まあいいですわ。惜しい。せっかくの機会なのに',
              );
              era.println();
              await era.printAndWait([
                'また危ういところを逃れた ',
                you.get_colored_name(),
                ' は、',
                tachyon.get_colored_name(),
                ' と一車のニンジンを引いてトレセン学園へ戻った',
              ]);
            }
          } else {
            era.println();
            await era.printAndWait([
              '賞品を見た瞬間、',
              you.get_colored_name(),
              ' は考え始めた。こんなにニンジンがあれば……',
              tachyon.get_colored_name(),
              ' に何食分作れるか',
            ]);
            era.println();
            await tachyon.say_and_wait('多いですわね……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' も、この山に目を見開いた',
            ]);
            era.println();
            await tachyon.say_and_wait('これなら……閃きましたわ……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は考え込んだ',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'をよく知る ',
              you.get_colored_name(),
              ' は、すぐ危険を察した',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……無料のニンジン……薬……オグリキャップかスペシャルウィークを……',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は慌てて',
              tachyon.sex,
              'の思考を遮った',
            ]);
            era.printButton(
              '「そ……そうだ、ニンジンのフルコースを作ろう！」',
              1,
            );
            era.printButton(
              '「こ、最近ニンジン主役の料理をたくさん覚えたんだ！」',
              2,
            );
            await era.input();
            await tachyon.say_and_wait('………………');
            era.println();
            await era.printAndWait('やっぱり……だめか');
            era.println();
            await tachyon.say_and_wait([
              'なぜ早く言わないのです！ まあ、蒸す、煮る、炒める、揚げる……どう作りますの～～',
              callname,
              '、好きに作りなさい！ 食材は足りていますわね？ もっと要ります？',
            ]);
            era.println();
            await era.printAndWait([
              'もう十分だ、と ',
              you.get_colored_name(),
              ' は苦笑して首を横に振った',
            ]);
            await era.printAndWait([
              '食べ物で ',
              tachyon.get_colored_name(),
              ' の注意を逸らせたのは幸いだ……下手をすれば罰は受けるだろうが',
            ]);
            await era.printAndWait(
              '自分で薬を飲むほうが、学園中を巻き込むよりマシだ……',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は一車のニンジンを引き、浮き立つ ',
              tachyon.get_colored_name(),
              ' とトレセンへ戻った。道中も、',
              tachyon.get_colored_name(),
              ' が満足する料理をどう作るか考えていた',
            ]);
          }
          break;
        case 4:
          await you.say_as_passer_by_and_wait(
            '店主',
            '一等、特大ニンジンハンバーグ！',
          );
          era.println();
          await era.printAndWait('え……？');
          await era.printAndWait('一等がこれか？');
          era.println();
          await era.printAndWait(
            '……なるほど、有名シェフの作だ。聞いたことのない人だが',
          );
          await era.printAndWait(
            '錯覚か。二等の一車のニンジンのほうが得な気がする',
          );
          era.println();
          await tachyon.say_and_wait([
            'おや、一等ですわ……ですが、',
            callname,
            '、あまり嬉しそうではありませんわね？',
          ]);
          era.printButton('「この賞品、タキオンしか食べられないだろ」', 1);
          era.printButton('「なんか……二等のほうがマシだ」', 2);
          await era.input();
          await tachyon.say_and_wait(
            'おや？……ええ、ある意味ではそうですわ。シェフが作ったとて、要するにニンジンと肉ですもの',
          );
          await tachyon.say_and_wait(
            '原料だけで見れば、価値は二等のニンジン量に及びませんわ',
          );
          if (love >= 75) {
            await tachyon.say_and_wait(
              'では、相応の価値を私が付けてあげますわ……',
            );
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した',
            ]);
            await era.printAndWait('え、これは……');
            era.println();
            await tachyon.say_and_wait(
              '愛する人と食べるハンバーグ……これで価値は上がりましたかしら？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' が答える前に、',
              tachyon.get_colored_name(),
              ' はハンバーグを ',
              you.get_colored_name(),
              ' の口へ押し込んだ',
            ]);
            await era.printAndWait([
              '噛み終わるまで、',
              tachyon.sex,
              'はフォークを引き抜かなかった',
            ]);
            era.println();
            await tachyon.say_and_wait('次はあなたですわ、ダーリン❤');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は口を開け、',
              you.get_colored_name(),
              ' の給餌を待った',
            ]);
            await era.printAndWait(['二人はそのハンバーグを分け合った']);
          } else if (love >= 50) {
            await tachyon.say_and_wait('……それに、味もあなたには及びませんわ');
            era.println();
            await era.printAndWait('え……？');
            await era.printAndWait(
              '褒められて嬉しいが、自分の腕がこの有名シェフに勝つとは思えない……',
            );
            era.println();
            await tachyon.say_and_wait(
              'くふふ……大事なのは栄養でも味でもなく、作る気持ち……それを教えたのは、あなたではありませんの？',
            );
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した',
            ]);
            await era.printAndWait('え、これは……');
            era.println();
            await tachyon.say_and_wait(
              'ですが、あなたの言う通りですわ……比較なしでは確定できません。科学は厳密でなければ',
            );
            await tachyon.say_and_wait(
              'ですから……技術はあるが愛はないものと、技術は劣るが愛があるもの。どちらが上か……❤',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はハンバーグを優しく ',
              you.get_colored_name(),
              ' の口へ入れた',
            ]);
            await era.printAndWait('そして小さく切り、自分の口へ入れた');
            era.println();
            await tachyon.say_and_wait([
              '戻ったらもう一枚作って比較してくださいまし、',
              callname,
              '❤️',
            ]);
            era.println();
            await era.printAndWait([tachyon.sex, 'の笑顔の前では']);
            await era.printAndWait(
              '自分は本当にモルモットになったようで、されるがままだった',
            );
          } else if (cook_times === 0) {
            await tachyon.say_and_wait(
              'ですが、私しか食べられない、は誤りですわ',
            );
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した。',
            ]);
            await you.say_and_wait('え、これは……');
            era.println();
            await tachyon.say_and_wait(
              'ニンジンの栄養は人間にも有益ですわ。ハンバーグの動物性たんぱくも……',
            );
            await tachyon.say_and_wait([
              'むしろ人間の消化速度なら、肉への需要は',
              tachyon.uma_sex_title,
              'より高いほどですわ',
            ]);
            era.println();
            await era.printAndWait(
              'いや、違う。つまりこれは……自分に食べさせたいのか？',
            );
            era.println();
            await tachyon.say_and_wait('ちっ……いい子ですから、あーん');
            era.println();
            await era.printAndWait('ま、まさか「あーん」まで');
            await era.printAndWait([
              you.get_colored_name(),
              ' は感動しながらハンバーグを食べた……',
            ]);
            era.drawLine();
            era.printButton('「…………いつ」', 1);
            await era.input();
            await era.printAndWait('ただでは転ばない');
            await era.printAndWait('だが……色仕掛けには防ぎようがない');
            await era.printAndWait([
              '相手が、',
              you.get_colored_name(),
              ' に食べさせようとする絶世の美',
              tachyon.teen_sex_title,
              'ならなおさらだ',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は、身体から点々と出る深い青の光を見て、呆れて尋ねた',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'ふん、私の投薬があなたに見破られるようでは、毎日苦労して ',
              call_25,
              ' に調合を飲ませている甲斐がありませんわ',
            ]);
            await tachyon.say_and_wait(
              '残りは……あなたが食べなさい。こういうものに興味はありませんわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '……なぜか、',
              tachyon.sex,
              'の食事への要求は極端に低い',
            ]);
            await era.printAndWait('低いというより……要求がない');
            await era.printAndWait('栄養が取れれば、何でもいい');
            await era.printAndWait(
              'だが……まだ正月のうちだ……少しだけ図に乗ってもいいだろう',
            );
            era.printButton('「……本当にうまいぞ。タキオンも一口どうだ？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '結構ですわ。遠慮ではなく、本当に要りません',
            );
            era.printButton(
              '「でも、抽選券はタキオンのだ。自分で味見しなければ不公平だろ」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait('……そうですね。一口だけ');
            era.println();
            await era.printAndWait([
              '気づいたとき、',
              you.get_colored_name(),
              ' のフォークの肉は、',
              tachyon.get_colored_name(),
              ' に電光石火で噛み取られていた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'よろしい、味は悪くありませんわ。それで十分です',
            );
            era.println();
            await era.printAndWait('……速すぎ！？');
            await era.printAndWait('口を動かすのも見えなかった……！');
            await era.printAndWait([
              '……',
              tachyon.sex,
              'が本気で食事を楽しんだら、食卓の争奪戦では無敵だろう',
            ]);
            await era.printAndWait([
              'なぜか、',
              you.get_colored_name(),
              ' はそんな見当違いのことを考え始めた',
            ]);
          } else {
            await tachyon.say_and_wait('では……相応の価値を私が付けましょう');
            era.println();
            await era.printAndWait([
              'そう言って、',
              tachyon.get_colored_name(),
              ' は賞品のハンバーグを受け取った',
            ]);
            await era.printAndWait([
              '一口分を切り、',
              you.get_colored_name(),
              ' の口元へ差し出した',
            ]);
            await era.printAndWait('え、これは……');
            if (relation <= 225) {
              await tachyon.say_and_wait([
                'G1を走る',
                tachyon.uma_sex_title,
                '、',
                tachyon.get_colored_name(),
                ' が自ら食べさせるハンバーグ。これで相応の価値はつきましたかしら？',
              ]);
            } else {
              await tachyon.say_and_wait([
                '超絶美',
                tachyon.teen_sex_title,
                'であり、G1を走る',
                tachyon.uma_sex_title,
                'である ',
                tachyon.get_colored_name(),
                ' が自ら食べさせるハンバーグ。一口にいくら払えますの？',
              ]);
            }
            era.println();
            await tachyon.say_and_wait('さあ、いい子ですから、あーん');
            era.println();
            await era.printAndWait('ま、まさか「あーん」まで');
            await era.printAndWait([
              you.get_colored_name(),
              ' は感動しながらハンバーグを食べた……',
            ]);
            era.drawLine();
            era.printButton('「…………いつ」', 1);
            await era.input();
            await era.printAndWait('ただでは転ばない');
            await era.printAndWait('だが……色仕掛けには防ぎようがない');
            await era.printAndWait([
              '相手が、',
              you.get_colored_name(),
              ' に食べさせようとする絶世の美',
              tachyon.teen_sex_title,
              'ならなおさらだ',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は、身体から点々と出る深い青の光を見て、呆れて尋ねた',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'ふん、私の投薬があなたに見破られるようでは、毎日苦労して ',
              call_25,
              ' に調合を飲ませている甲斐がありませんわ',
            ]);
            await tachyon.say_and_wait('残りは……ちょっと！ 一口は残しなさい！');
            era.println();
            await era.printAndWait([
              '悲憤を食欲に変えた ',
              you.get_colored_name(),
              ' は、必死に ',
              tachyon.get_colored_name(),
              ' と残りのハンバーグを奪い合った',
            ]);
            await era.printAndWait(
              '…………認めざるを得ない。有名シェフの腕は、自分より上だ',
            );
          }
          break;
        case 5:
          if (love >= 75) {
            await tachyon.say_and_wait('……そうですわ。今です');
            await tachyon.say_and_wait('回しなさい！');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' を信じる ',
              you.get_colored_name(),
              ' は、',
              tachyon.sex,
              'の言葉を聞いてすぐ抽選機を回した',
            ]);
            await you.say_as_passer_by_and_wait('店主', '特等！ 温泉旅行券！');
            era.println();
            await era.printAndWait('商店街のおじさんが鈴を激しく振った');
            await era.printAndWait('今日の一等が、いま出たと告げる');
            era.println();
            await tachyon.say_and_wait(
              'おや……温泉旅行券ですわね。悪くありませんわ',
            );
            era.println();
            await era.printAndWait('期限は……来年四月まで');
            await era.printAndWait('なら、URA決勝が終わったあとがちょうどいい');
            era.printButton('「タキオン、一緒に行くか？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '当然ですわ。私以外に、誰があなたと行くというのです？',
            );
            era.println();
            await era.printAndWait('容赦ない言い方だ');
            era.println();
            await tachyon.say_and_wait(
              '冗談ですわ。この券は、三年分のあなたへの褒美です……あらゆる困難と怪我を越えた先の……私たちの happy ending',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の耳元で言った',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の口から出るとは思えない言葉に、',
              you.get_colored_name(),
              ' は驚いて目を上げようとした……',
            ]);
            era.println();
            await tachyon.say_and_wait('動かないで');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はなお ',
              you.get_colored_name(),
              ' のそばに寄り、二人は抽選箱の前で親しげに話した',
            ]);
            await era.printAndWait('おかしい……なぜ抽選箱から離れない……？');
            era.println();
            await tachyon.say_and_wait(['よろしい、行きましょう、', callname]);
            era.println();
            await era.printAndWait('え');
            await era.printAndWait([
              '傍らの熱が急に消え、',
              you.get_colored_name(),
              ' は慌てて ',
              tachyon.get_colored_name(),
              ' について商店街を出た',
            ]);
            await era.printAndWait([
              '商店街を出た ',
              tachyon.get_colored_name(),
              ' が、左目から何かを取り出すのが見えた',
            ]);
            era.println();
            await tachyon.say_and_wait('ふぅ、やっと楽になりましたわ');
            era.println();
            await era.printAndWait([
              '…………？',
              tachyon.get_colored_name(),
              ' の目……？',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' はよく見た。もともと',
              tachyon.sex,
              'の赤のグラデーションの両目のうち、片方だけがわずかに薄い',
            ]);
            era.println();
            await you.say_and_wait('……カラコン？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' がそんなものを着ける人とは思えない',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'くふふ……これは、シャカールと共同で作ったものですわ',
            );
            await tachyon.say_and_wait(
              'まず、私の薬剤で、このレンズに非生物を透視する能力を持たせます',
            );
            await tachyon.say_and_wait(
              'シャカールは見たものの軌道を解析できます。もともとはレースの走者解析用ですわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' が立て続けに話し、',
              you.get_colored_name(),
              ' は少し目が回った',
            ]);
            await era.printAndWait('だが……');

            era.printButton('「つまり……透視レンズか？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              'まあ、そんなところですわ……ただし、小さな欠陥がありまして',
            );
            await tachyon.say_and_wait(
              'たとえば着けていると、変わった視界に慣れるまで一歩も歩けません',
            );
            await tachyon.say_and_wait(
              '乱用すれば、情報量過多で脳が昏倒することもあります',
            );
            await tachyon.say_and_wait(
              'ですのでシャカールと、これは封印するつもりでした。くふふ、ここで役立つとは……',
            );
            era.println();
            await era.printAndWait('役立つ……？');
            await era.printAndWait('透視＋軌道解析……');
            await era.printAndWait('動けないから、福引の抽選箱の前に立つ……');
            await you.say_and_wait('ああ');
            era.printButton('「さっきの福引！」', 1);
            era.printButton('「タキオン、お前……」', 2);
            await era.input();
            await tachyon.say_and_wait('しっ');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は唇に指を当て、静かに、と合図した',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '言いましたわ。これは、あなたへの贈り物です',
            );
            era.println();
            await tachyon.say_and_wait('神でも、冥々たる運でもありません');
            await tachyon.say_and_wait([
              '私、',
              tachyon.get_colored_name(),
              ' が、愛する人へ贈る正月の祝いですわ',
            ]);
            await tachyon.say_and_wait([
              '明けましておめでとう、',
              you.get_colored_actual_name(),
              ' 君',
            ]);
            era.println();
            await era.printAndWait(
              '以前、正月と言えば、忘れがたい思い出がいくつも浮かんだ',
            );
            await era.printAndWait(
              '囲炉裏、一家団欒、おせち、テレビのつまらない新春番組',
            );
            await era.printAndWait(
              'だが今日から、正月の第一印象は一つだけになる',
            );
            await era.printAndWait([
              '灯り始めた街灯の下、悪戯が成功した子猫のように笑う',
              tachyon.sex,
            ]);
            era.println();
            await era.printAndWait('そして、あのキスの味');
            await era.printAndWait([
              'あのキスは甘かった。',
              tachyon.get_colored_name(),
              ' の紅茶より甘い',
            ]);
          } else {
            await you.say_as_passer_by_and_wait('店主', '特等！ 温泉旅行券！');
            era.println();
            await era.printAndWait('商店街のおじさんが鈴を激しく振った');
            await era.printAndWait('今日の一等が、いま出たと告げる');
            era.println();
            await era.printAndWait('特等だ！');
            await era.printAndWait('二人用の温泉旅行券ではないか');
            era.println();
            await tachyon.say_and_wait(
              'おや……温泉旅行券ですわね。悪くありませんわ',
            );
            era.println();
            await era.printAndWait('期限は……来年四月まで');
            await era.printAndWait('なら、URA決勝が終わったあとがちょうどいい');
            era.println();
            if (love >= 50) {
              era.printButton('「タキオン、一緒に行こう！」', 1);
              await era.input();
              await tachyon.say_and_wait('ふむ……一緒に、ですの？');
              await tachyon.say_and_wait([
                callname,
                '、一般に『温泉旅行へ一緒に行く』関係が何か、理解したうえで誘っていますの？',
              ]);
              era.println();
              await era.printAndWait('一般に、温泉へ一緒に行く関係……');
              era.printButton('夫婦', 1);
              era.printButton('恋人', 2);
              era.printButton(
                `「……普通の${tachyon.uma_sex_title}とトレーナーは、もともと行くものでは？」`,
                3,
              );
              switch (await era.input()) {
                case 1:
                  await era.printAndWait('一般的には……新婚夫婦だろう');
                  await era.printAndWait('新婚旅行で温泉はよくある');
                  await you.say_and_wait(
                    '……俺とタキオンが、新婚夫婦……？',
                    true,
                  );
                  break;
                case 2:
                  await era.printAndWait('たぶん……恋人だろう');
                  await era.printAndWait(
                    'それほど親しくなければ、二人だけで温泉へは行かない',
                  );
                  await you.say_and_wait('俺とタキオンが……恋人か？', true);
                  break;
                case 3:
                  await era.printAndWait([
                    '……いや、普通',
                    tachyon.uma_sex_title,
                    'とトレーナーはよく行くのでは？',
                  ]);
                  await era.printAndWait([
                    '毎年四月、先輩たちが担当',
                    tachyon.uma_sex_title,
                    'と行く……しかも商店街の抽選らしい。不思議だ',
                  ]);
                  await era.printAndWait(
                    'だが……二人だけで温泉は、やはり少し変か……？',
                  );
                  era.println();
                  await tachyon.say_and_wait([
                    'では、そのとき私とどんな関係になっていたいのです？',
                    callname,
                    '……来年四月、くふふ。楽しみですわ',
                  ]);
                  era.println();
                  await you.say_and_wait(
                    '来年四月、自分とタキオンの関係か……',
                    true,
                  );
              }
            } else if (relation >= 225) {
              await tachyon.say_and_wait(
                'ええ……一緒に行きます？ 実験場としては、悪くない場所ですわ',
              );
              await tachyon.say_and_wait(
                '温泉旅館といえば、事故が起きても、人が死んでもおかしくない場所ですわね',
              );
              await tachyon.say_and_wait(
                'なら、無害な小さな実験くらい、問題ないでしょう……',
              );
              era.printButton('「違う」', 1);
              await era.input();
              await era.printAndWait('実験や研究の場ではない');
              await era.printAndWait(
                '三年の二人三脚が終わったあとの、二人の休みだ',
              );
              era.printButton(
                '「トレーニングも実験も関係ない。ただ休むだけ……だめか？」',
                1,
              );
              await era.input();
              await tachyon.say_and_wait('……来年四月、ですの');
              await tachyon.say_and_wait(
                'くふふ、ではモルモットへの労いとしましょう',
              );
              await tachyon.say_and_wait(
                '来年四月、私たちの夢に一段落がついたとき……そのときもまだそばにいるなら、一緒に行きましょう',
              );
              era.printButton('「ああ！」', 1);
              await era.input();
              await tachyon.say_and_wait('ただし、褒美を出した以上……');
              await tachyon.say_and_wait(
                '残りの一年、あなたも頑張らねばなりませんわ',
              );
              await tachyon.say_and_wait([
                '実験を素直に受け、毎日料理をし、それから ',
                call_25,
                ' が逃げるときは捕まえて、私の実験に……',
              ]);
              era.println();
              await era.printAndWait('待て待て！ 最後のは明らかに無理だ！');
              era.println();
              await era.printAndWait([
                '笑いながら、二人はトレセン学園へ戻った',
              ]);
              await era.printAndWait('来年四月か……楽しみだ');
            } else {
              await era.printAndWait([
                'だが……',
                tachyon.get_colored_name(),
                ' は自分と行くだろうか',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'URA決勝のあと温泉旅行……悪くありませんわね',
              );
              era.println();
              await era.printAndWait('おや？ あっさり承諾した？');
              await era.printAndWait('面倒だと断ると思ったのに');
              era.println();
              await tachyon.say_and_wait(
                '温泉旅館といえば、事故が起きても、人が死んでもおかしくない場所ですわ。なら、無害な小さな実験くらい問題ないでしょう……',
              );
              era.println();
              await era.printAndWait('…………今のうちに券を返したほうがいいか？');
            }
          }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_win
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {boolean} do_sex 興奮したままの行為か（男/フタナリトレーナー×女/フタナリタキオンのみ）
     */
    const f = async (tachyon, you, callname, do_sex) => {
      era.printButton('「最高の走りだった！」', 1);
      era.printButton('「まだ改良の余地がある」', 2);
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
            'でしょうでしょう？ フフ、これが光速を超える走りですわ',
          );
        } else {
          await tachyon.say_and_wait([
            '実験の検算にすぎないのに、そんなに喜んで。',
            callname,
            '、おめでたいですわね',
          ]);
        }
      } else if (era.get('relation:32:0') > 225) {
        if (Math.random() < 0.5) {
          await tachyon.say_and_wait(
            'ちっ……反論はできませんわ。でも、もう少し褒めてもいいでしょう？ あれだけ頑張って勝ったのですもの',
          );
        } else {
          await tachyon.say_and_wait([
            'ひどいですわ、',
            callname,
            '。愛馬が勝ったのに、そんな顔をして誰に見せるの。早く早く、もっと褒めて、早～～く～～！',
          ]);
        }
      } else if (Math.random() < 0.5) {
        await tachyon.say_and_wait(
          'ふん……わかっていますわ。余計な口は不要です',
        );
      } else {
        await tachyon.say_and_wait(
          'よろしい。新しい発見があれば、今回の実験も無駄ではありませんわ',
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
    const title = '不完全燃焼';
    /**
     * やる気低、体力<45%、男T×ウマ娘
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('今日の目標は……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は心配そうに ',
        tachyon.get_colored_name(),
        ' の様子を見た',
      ]);
      await era.printAndWait([
        '今日も',
        tachyon.sex,
        'は限界突破のための実験——言い換えれば、トレーニング——を続けている',
      ]);
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'の体力が十分で、調子だけが悪いなら、',
        you.get_colored_name(),
        ' は心を鬼にして実験へ押しやるだろう。厳しさも、時には必要だからだ',
      ]);
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'の体力が足りなくても、調子がやけに良いなら、',
        you.get_colored_name(),
        ' は考えた末、',
        tachyon.sex,
        'に鍛錬を続けさせるだろう、',
      ]);
      await era.printAndWait([
        '先輩トレーナーたちも言っていた。',
        tachyon.uma_sex_title,
        'の心に寄り添うことこそ、トレーナーの最も大切な仕事だと',
      ]);
      await era.printAndWait('だが……');
      era.println();
      era.print([
        '体力が明らかに持たず、意識も上の空な',
        tachyon.sex,
        'に、',
        you.get_colored_name(),
        ' は本当に鬼になれるのか？',
      ]);
      era.printButton('「……続けよう」（従順因子+100）', 1);
      era.printButton('「……休もう」（やる気上昇）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の目標と夢のため……そして、自分のほんの少しの私心のため',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は今の ',
          tachyon.get_colored_name(),
          ' を見た',
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
          '迷い、惜しみながらも、',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の不調を見て見ぬふりをして、トレーニングを続けさせた',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' の内心の汚さを察したのか、あるいはトレーニングの続行自体が気に入らないのか、',
          tachyon.get_colored_name(),
          ' は何も言わず、それでも ',
          you.get_colored_name(),
          ' を一睨みした',
        ]);
      } else {
        await era.printAndWait(
          'トレーナーとして、理不尽な過度トレーニングは避けるべきだ',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' が一周走り終えると、すぐ停止を告げた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……終わり、ですの？ 実験は始まったばかりですわ。今日やる対照実……実験がまだ……あっ……',
        );
        await era.printAndWait([
          tachyon.sex,
          'の強気な言葉は途中で途切れ、抑えきれない吐息が漏れた',
        ]);
        await era.printAndWait(
          '誰が想像しよう。ふくらはぎの内側を軽く押しただけで、あれほど強気な口から、こんな甘い声が出るとは',
        );
        await era.printAndWait([
          'もちろん、',
          you.get_colored_name(),
          ' の指圧に即発情させる魔法があるわけではない。主因は ',
          tachyon.get_colored_name(),
          ' 自身だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はもう力が抜けた ',
          tachyon.get_colored_name(),
          ' を支え、腫れ始めた',
          tachyon.sex,
          'のふくらはぎを優しく押した',
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
          ' は慌てて',
          tachyon.sex,
          'に謝った',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……わ、わかりましたわ……今日は、ここまでに……わ、私、少し休みが必要ですわ……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は早口で言い終えると実験室へ戻ろうとしたが、力の抜けた膝が折れ、',
          you.get_colored_name(),
          ' の胸へ倒れ込んだ',
        ]);
        await era.printAndWait([
          '今の二人は、まともなトレーニング中のトレーナーと',
          tachyon.uma_sex_title,
          'には見えなかった。恋人の胸に甘える彼女と、優しく',
          tachyon.sex,
          'を抱く伴侶——そう見えたはずだ',
        ]);
        await era.printAndWait([
          '人に恐れられる狂気の科学者は、今は小鳥のように ',
          you.get_colored_name(),
          ' に寄りかかっている',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、思わず誇りと得意を覚えた',
        ]);
        era.println();
        await tachyon.say_and_wait('……実験室へ連れていって。今すぐ');
        era.println();
        await era.printAndWait([
          'だが直後、科学者の睨みが ',
          you.get_colored_name(),
          ' を従順なモルモットへ戻した',
        ]);
        await era.printAndWait([
          'こうして二人は、周囲の',
          tachyon.uma_sex_title,
          'たちから半分は感心、半分は羨望の視線を浴びながら、実験室へ戻っていった',
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

  // [번역 대상] train_fail
  train_fail: (() => {
    const title = '立て直し＆再出発';
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
        ' は場を走る ',
        tachyon.get_colored_name(),
        ' を見ていた',
      ]);
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' はずっと落ち着かない',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の走りに見た目の問題はない。それでも心配が消えない',
      ]);
      await era.printAndWait([
        '事故だけは起きないでくれ、と ',
        you.get_colored_name(),
        ' は祈った',
      ]);
      era.println();
      await era.printAndWait('だが、案の定、こういうときの事故は起きる');
      await era.printAndWait([
        you.get_colored_name(),
        ' の眼前で、',
        tachyon.get_colored_name(),
        ' の足取りがふらついた',
      ]);
      era.print('このままでは転びそうだ————');
      era.printButton('「タキオン！ 止まれ！」（失敗を受け入れる）', 1);
      era.printButton('—————！（挽回を試みる）', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:32') >= 50) {
          switch (fail_count) {
            case 0:
              await tachyon.say_and_wait([
                '痛い……',
                callname,
                '、少し押してくれませんこと？',
              ]);
              era.println();
              await era.printAndWait([
                '倒れた ',
                tachyon.get_colored_name(),
                ' の傍へ駆け寄った ',
                you.get_colored_name(),
                ' は、手早く',
                tachyon.sex,
                'の靴と靴下を脱がせた',
              ]);
              era.println();
              await tachyon.say_and_wait('そうです……甲……裏……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' はそっと',
                tachyon.sex,
                'の足のつぼを押した',
              ]);
              await era.printAndWait('本来なら、ごく普通の行為のはずだ');
              await era.printAndWait(
                'だが……走り終えたばかりで、靴下に蒸された足裏は汗に濡れている',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' のマッサージにつれ、粘つく汗が ',
                you.get_colored_name(),
                ' の両手にもついた',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は自分に言い聞かせた。ただの人体分泌物だ、と',
              ]);
              await era.printAndWait(
                'それでも手つきは、自然と優しくなっていく',
              );
              era.println();
              await tachyon.say_and_wait('ん……ぅ……');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' が時折漏らす吐息が、さらに ',
                you.get_colored_name(),
                ' を昂ぶらせた',
              ]);
              await era.printAndWait([
                '足裏と甲を押せば、理屈の上では手を止めるべきだった。だが手には、まだ別の考えがあるらしい',
              ]);
              era.println();
              await tachyon.say_and_wait('待って……つま先は……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' の指が、ゆっくり',
                tachyon.sex,
                'のつま先を摘まんだ',
              ]);
              await era.printAndWait('普通の指圧なら、油を塗って行うものだ');
              await era.printAndWait([
                'だが ',
                tachyon.get_colored_name(),
                ' の滴る汗が、油の代わりになった',
              ]);
              era.println();
              await tachyon.say_and_wait(['待って……', callname, '……痛っ！']);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' の呼び声が、',
                you.get_colored_name(),
                ' の理性を呼び戻した',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' が顔を上げると、',
                tachyon.sex,
                'の頬は上気し、スイッチが入ったように見えた',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '……続きは、室内に戻ってから、いいですわね？',
              );
              break;
            case 1:
              await tachyon.say_and_wait('痛い～～♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は今日のトレーニングでもまた「うっかり」転んだ',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' は、芝に触れた瞬間に靴と靴下を脱ぎたがる',
                tachyon.sex,
                'を見て、半ば欲情し、半ば呆れた',
              ]);
              era.println();
              await tachyon.say_and_wait([
                callname,
                '～～早くマッサージして……♡♡',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' が動かないと、',
                tachyon.sex,
                'は甘えるように裸足で芝を踏み、',
                you.get_colored_name(),
                ' の注意を引いた',
              ]);
              await era.printAndWait(
                '白く細く、壊れそうな芸術品のような裸足。跳ねた土がかえって白さを際立たせる',
              );
              era.println();
              await tachyon.say_and_wait('早く早く、揉んでくださいまし～～');
              era.println();
              await you.say_and_wait(
                'この悪習は、もう続けさせられない……',
                true,
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' は優しく',
                tachyon.sex,
                'の足を押した',
              ]);
              era.println();
              await tachyon.say_and_wait('んん♡～～そうです……あ♡っ♡は♡');
              era.println();
              await era.printAndWait('相変わらず、媚びた声だ');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' が口を開くたび、',
                you.get_colored_name(),
                ' の欲情を煽る嬌声が漏れる',
              ]);
              await era.printAndWait([
                'このまま',
                tachyon.sex,
                'を放置してはおけない',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' は手の圧し方を変えた',
              ]);
              era.println();
              await tachyon.say_and_wait([callname, '……いっ———']);
              era.println();
              await era.printAndWait('さっきまでの、優しい愛撫の力加減が');
              await era.printAndWait(
                '一瞬で、足を碾き潰すかのような猛烈な圧力に変わった',
              );
              era.println();
              await tachyon.say_and_wait([
                '痛い！ 待って、',
                callname,
                '！ だめ！ やめて！ 折れる、あああああ！',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は',
                tachyon.sex,
                'の言葉を聞かず、厳しく押し続けた',
              ]);
              await era.printAndWait([
                tachyon.uma_sex_title,
                'へのマッサージと、その力加減について、トレーナー以上に知る者はいない',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' は骨を折らず、なおかつ ',
                tachyon.get_colored_name(),
                ' に痛みを与える範囲で、思うままに押した',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '待って、私が悪かった！ お願い！ 助けて！ いや！ 離して！ だめ！ っ………！',
              );
              await tachyon.say_and_wait('っ……は……はあっ……は……');
              era.println();
              await era.printAndWait([
                'ほどなく ',
                tachyon.get_colored_name(),
                ' は声にならず、痛みの吐息だけになった',
              ]);
              await era.printAndWait([
                'まだ足りない。',
                tachyon.sex,
                'にきちんと教訓を叩き込まねば',
              ]);
              era.println();
              await tachyon.say_and_wait('ん……っ……はあっ……ん♡');
              await tachyon.say_and_wait('ぅ♡ん……はあっ♡');
              era.println();
              await era.printAndWait('……錯覚か');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' の声が、どこか色を変えた気がする',
              ]);
              await era.printAndWait([
                '引き際を知る ',
                you.get_colored_name(),
                ' は、',
                tachyon.sex,
                'がほぼ学んだと判断し、力を緩めた',
              ]);
              era.println();
              await tachyon.say_and_wait('う～～～～～');
              await tachyon.say_and_wait(
                'さっきまであんなに痛かったのに、急に優しく…………',
              );
              await tachyon.say_and_wait('だめ……待って……もう……もうだめ……♡');
              era.println();
              await era.printAndWait(
                '……自分は、マッサージをしているだけのはずだ',
              );
              await era.printAndWait('ほどなく、マッサージは終わった');
              await era.printAndWait([
                you.get_colored_name(),
                ' は、なぜか全身の力が抜けた ',
                tachyon.get_colored_name(),
                ' を連れて寮へ戻った',
              ]);
              await era.printAndWait([
                'これで',
                tachyon.sex,
                'も、教訓はわかったはずだ',
              ]);
              era.println();
              await era.printAndWait('…………わかった、はずだよな？');
              break;
            case 2:
              await tachyon.say_and_wait([
                'ん～～',
                callname,
                '、マッサージして～～',
              ]);
              await tachyon.say_and_wait('……そっちの、ですわよ♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は自分の両脚を撫で、暗示的に ',
                you.get_colored_name(),
                ' へ言った',
              ]);
              await era.printAndWait('こいつ……やっぱり懲りていない');
              await era.printAndWait([
                '今度こそ、本当に',
                tachyon.sex,
                'へ教訓を叩き込まねば',
              ]);
              await era.printAndWait([
                '…………だが、自分の「教訓」は、',
                tachyon.sex,
                'にとって別の意味のご褒美になっていないか？',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' は慌てて頭の中の考えを引っ込めた',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' がそこまで落ちているはずはない',
              ]);
              await era.printAndWait('…………ないよな？');
              break;
            case 3:
              await tachyon.say_and_wait(['痛い……', callname]);
              await tachyon.say_and_wait('いいえ、脚は大丈夫ですわ……');
              await tachyon.say_and_wait(
                'ですが、誰かの下半身が無事かは、わかりませんわね',
              );
              await tachyon.say_and_wait(
                '私が靴下を脱いだのを見て、急に腰を折ったのはなぜですの♡',
              );
              await tachyon.say_and_wait('怪我をしていたら大変……見せなさいな♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' の言葉を聞き、',
                you.get_colored_name(),
                ' はその場で固まった',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' を診に行きたいのに、',
                tachyon.sex,
                'が本当に何かをしかねないと恐れた',
              ]);
              era.println();
              await tachyon.say_and_wait('ん……来ないですの？ 残念ですわ～～');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' は埃を払い、自分で立ち上がった',
              ]);
              await era.printAndWait('こいつ……やっぱり演技だった');
          }
        } else {
          const buffer = [];
          if (era.get('relation:32:0') > 525) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([
                  '立てませんわ……',
                  callname,
                  '、おんぶして～～',
                ]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は ',
                  you.get_colored_name(),
                  ' の声を聞くなり、芝にどかりと座り込んだ',
                ]);
                await era.printAndWait([
                  '潤んだ目で ',
                  you.get_colored_name(),
                  ' に呼びかけた',
                ]);
                await era.printAndWait([
                  '元々の',
                  tachyon.sex,
                  'は、こんなに甘えん坊だったか……？',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は呆れつつも、今日はもう続けられないと認めた',
                ]);
              },
              async () => {
                await tachyon.say_and_wait('まったく……まだ走れたのに……');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' が ',
                  tachyon.get_colored_name(),
                  ' の両脚を診ていると、',
                  tachyon.get_colored_name(),
                  ' は頬を膨らませて言った',
                ]);
                era.println();
                await you.say_and_wait(
                  'だがタキオンにそんな危険は冒させない……タキオン（の脚）は、俺にとって何より大事なんだ',
                );
                await tachyon.say_and_wait('！…………そこまで言うなら');
                era.println();
                await era.printAndWait([
                  'なぜか、',
                  tachyon.get_colored_name(),
                  ' の顔が赤くなった',
                ]);
                await era.printAndWait('検査に応じてくれたのは、ありがたい');
              },
              async () => {
                await tachyon.say_and_wait([
                  'ふんふん、実験失敗ひとつで私が倒れるとでも？ ',
                  callname,
                ]);
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は心配そうに ',
                  tachyon.get_colored_name(),
                  ' の両脚を診た',
                ]);
                await era.printAndWait('この期に及んで、気になるのは実験か');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は呆れと苛立ちを覚えた',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  'それに……私は ',
                  callname,
                  ' を信じていますわ。あなたが私を危うくするはずがない、でしょう？',
                ]);
                era.println();
                await you.say_and_wait('…………');
                await era.printAndWait([
                  'よく考えれば、',
                  tachyon.sex,
                  'がこれほど夢に純な',
                  tachyon.uma_sex_title,
                  'でなければ',
                ]);
                await era.printAndWait([
                  '自分も',
                  tachyon.sex,
                  'の無茶に付き合いはしなかった',
                ]);
                await era.printAndWait([
                  '夢しか見えない狂想者が暴走するとき、',
                  tachyon.sex,
                  'の足元の窪みに気を配る',
                ]);
                await era.printAndWait(
                  'それが、モルモットとしての自分の務めだ',
                );
                era.println();
                await tachyon.say_and_wait(
                  'ですから……戻って反省して、明日また実験ですわ！',
                );
                await you.say_and_wait('いや、少なくとも三日後だ');
                era.println();
                await era.printAndWait(
                  '夢も遠方もいったん置く。最低でも、あと二日は様子を見ねばならない',
                );
              },
            );
          } else if (era.get('relation:32:0') > 225) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([callname, '……痛い……']);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は涙を浮かべて芝に座り、',
                  you.get_colored_name(),
                  ' に慰めを求めた',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は慌てて',
                  tachyon.sex,
                  'の傷を確認し、大事ないとわかってから息を吐いた',
                ]);
              },
              async () => {
                await tachyon.say_and_wait(
                  '……構いませんわ。一時の失敗です……実験は最初から……',
                );
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は呟いた',
                ]);
                await era.printAndWait('……この期に及んで実験か');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は呆れつつ、',
                  tachyon.sex,
                  'の両脚に異常がないか診た',
                ]);
              },
              async () => {
                await tachyon.say_and_wait([
                  'くっ……',
                  callname,
                  '……だ、大丈夫ですわ',
                ]);
                await era.printAndWait('少し休めば……はあ');
                era.println();
                await you.say_and_wait('だめだ');
                await tachyon.say_and_wait('！？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は一番運びやすい体勢で、',
                  tachyon.get_colored_name(),
                  ' の首と膝の内側を抱え、抱き上げた',
                ]);
                await era.printAndWait([
                  '今は',
                  tachyon.sex,
                  'の我儘を聞く時ではない。すぐ保健室で診てもらわねば',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  '待って！ ',
                  callname,
                  '！ わかりましたわ！ 行きます、下ろしてくださいまし！',
                ]);
                await you.say_and_wait('だが、こうするほうが効率的だろう？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は ',
                  tachyon.get_colored_name(),
                  ' の制止を無視し、衆人環視の中で ',
                  tachyon.get_colored_name(),
                  ' を保健室へ運んだ',
                ]);
              },
            );
          } else {
            buffer.push(
              async () => {
                await tachyon.say_and_wait('くっ……やはり無理でしたか');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は言われるままに止まり、',
                  you.get_colored_name(),
                  ' は慌てて',
                  tachyon.sex,
                  'の脚を診た',
                ]);
                await era.printAndWait('……今日のトレーニングは、ここまでだ');
              },
              async () => {
                await tachyon.say_and_wait('脚が……動きませんわ');
                await tachyon.say_and_wait('実験、失敗ですわね……');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' はよろけながら数歩歩いてから止まった',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は慌てて ',
                  tachyon.get_colored_name(),
                  ' の状態を診た',
                ]);
                await era.printAndWait(
                  '幸い……少し捻った程度で、大事にはならないだろう',
                );
                await era.printAndWait('ただし、まず保健室で休ませねば……');
              },
              async () => {
                await tachyon.say_and_wait('私の限界……これだけ、ですの');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' は駆け寄り、',
                  tachyon.get_colored_name(),
                  ' がよろける瞬間に',
                  tachyon.sex,
                  'を支えた',
                ]);
                await era.printAndWait([
                  '衝動の行動で、かえって ',
                  tachyon.get_colored_name(),
                  ' に咎められるかもしれない。それでも ',
                  you.get_colored_name(),
                  ' は迷わず前に出た',
                ]);
                await era.printAndWait([
                  'そのおかげで、',
                  you.get_colored_name(),
                  ' は ',
                  tachyon.get_colored_name(),
                  ' の呟きを聞いた',
                ]);
                era.println();
                await you.say_and_wait(
                  'まだ強くなれる……タキオンの限界は、絶対にそんなものじゃない',
                );
                await tachyon.say_and_wait('…………');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' は黙ったまま、',
                  you.get_colored_name(),
                  ' の言葉を聞いたかどうかもわからない',
                ]);
                await era.printAndWait([
                  'だが',
                  tachyon.sex,
                  'はゆっくり歩き出し、',
                  you.get_colored_name(),
                  ' は傍で支えて保健室へ向かった',
                ]);
              },
            );
          }
          await get_random_entry(buffer)();
        }
      } else if (fail_again) {
        if (plan_b && era.get('cflag:32:育成回合计时') > 95) {
          era.drawLine();
          await tachyon.say_and_wait('ああ……転びそうですわ', true);
          era.println();
          await tachyon.say_and_wait('やはり、諦めたほうがいいのかしら', true);
          await tachyon.say_and_wait(
            ['どうせ、', call_25, ' ももう育っているではありませんか'],
            true,
          );
          await tachyon.say_and_wait('残念ですけれど……', true);
          era.println();
          await you.say_and_wait('タキオン！ 大丈夫か！');
          era.println();
          await tachyon.print_and_wait('……なぜ、そんなに焦るの');
          await tachyon.print_and_wait(
            '本当に、私の夢を信じる者がいなければ、それでもよかった',
          );
          await tachyon.print_and_wait([
            'でも……',
            you.sex,
            'だけは、',
            you.sex,
            'の期待は……',
          ]);
          await tachyon.print_and_wait(
            'いいわ、もう少し頑張ってみましょう……この身体が、どこまで持つか',
          );
          // 47+20＝シニア級5月4週＝日本ダービー
        } else if (era.get('cflag:32:育成回合计时') > 47 + 20) {
          era.drawLine();
          await tachyon.say_and_wait('ああ……転びそうですわ', true);
          era.println();
          await tachyon.say_and_wait('やはり、こうなったら諦めましょう', true);
          await tachyon.say_and_wait(
            '構いませんわ、予備計画がありますもの……',
            true,
          );
          await tachyon.say_and_wait('悔しいですけれど……', true);
          era.println();
          await you.say_and_wait('タキオン！ 大丈夫か！');
          era.println();
          await tachyon.print_and_wait('……だめですわ');
          await tachyon.print_and_wait('もう、引き返せない');
          await tachyon.print_and_wait([
            you.sex,
            'の支えが、私をここまで連れてきた',
          ]);
          await tachyon.print_and_wait(
            '今さら身を引いたら、笑い話にもなりませんわ',
          );
          await tachyon.print_and_wait(
            '私を信じた人のために……もう少し、持ちこたえます',
          );
        } else if (reg_toky_yus) {
          era.drawLine();
          await tachyon.say_and_wait('ああ……転びそうですわ', true);
          era.println();
          await tachyon.say_and_wait('やはり、こうなったら諦めましょう', true);
          await tachyon.say_and_wait(
            '構いませんわ、予備計画がありますもの……',
            true,
          );
          await tachyon.say_and_wait('悔しいですけれど……', true);
          era.println();
          await you.say_and_wait('タキオン！ 大丈夫か！');
          era.println();
          await tachyon.print_and_wait('……なぜ、そんなに焦るの');
          await tachyon.print_and_wait(
            '本当に、私の夢を信じる者がいなければ、それでもよかった',
          );
          await tachyon.print_and_wait([
            'でも……',
            you.sex,
            'だけは、',
            you.sex,
            'の期待は……',
          ]);
          await tachyon.print_and_wait(
            'いいわ、もう少し頑張ってみましょう……この身体が、どこまで持つか',
          );
        } else {
          await tachyon.say_and_wait('痛い');
          await tachyon.say_and_wait('怖い');
          await tachyon.say_and_wait('やはり……私の限界は……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はここで我に返り、',
            tachyon.get_colored_name(),
            ' へ走った',
          ]);
          await era.printAndWait([
            'だが',
            tachyon.sex,
            'は独り言を繰り返すばかりで、自分を見ていないようだった',
          ]);
          await era.printAndWait([
            'しばらくしてから正気に戻り、',
            you.get_colored_name(),
            ' に支えられて保健室で手当てを受けた',
          ]);
          await era.printAndWait('…………本当に大丈夫なのか。身体も、心も');
          await era.printAndWait([you.get_colored_name(), ' は問いたかった']);
          await era.printAndWait([
            'だが……あのとき止められなかった自分に、今さら口を出す資格があるだろうか',
          ]);
        }
      } else {
        await era.printAndWait('間に合わない');
        await era.printAndWait('声を出す暇もない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はもう、足を踏みしめ直していた',
        ]);
        await era.printAndWait('自分の胸にずっとあった不安を、消すように');
        await era.printAndWait('前方へ、次の一歩を踏む');
        await era.printAndWait('そのまま、トレーニングが終わるまで');
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
    const title = '試薬';
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
        '虹色',
        '深い赤',
        '深い橙',
        '深い黄',
        '深い緑',
        '深い青',
        '深い藍',
        '深い紫',
        '深い灰',
        '深い銀',
        '深い金',
        '淡い赤',
        '淡い橙',
        '淡い黄',
        '淡い緑',
        '淡い青',
        '淡い藍',
        '淡い紫',
        '淡い灰',
        '淡い銀',
        '淡い金',
      ];
      await tachyon.say_and_wait([
        'おや、',
        callname,
        '、ちょうどいいですわ。今日の薬です',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は',
        get_random_entry(colors),
        'の薬を ',
        you.get_colored_name(),
        ' に渡した',
      ]);
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は言われるまま飲んだ']);
      switch (effect) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだ直後、喉がひどく痒くなった',
          ]);
          await era.printAndWait('咳き込んだら、出てきたのは火花だった');
          era.println();
          await tachyon.say_and_wait('おやおや、竜息の薬、効果は上々ですわね');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は嬉しそうにデータを記録していた。次の結果は予想していなかった。咳の火花が、',
            tachyon.sex,
            'のそばの実験記録に落ちたのだ',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'なんです…………焦げ臭い……………私の実験データですわ！！？？',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'はまだ燃えていない記録を救い始めた。',
            you.get_colored_name(),
            ' も手伝おうとしたが、喉の痒みが収まらない',
          ]);
          era.println();
          await tachyon.say_and_wait('こっほっ！！');
          era.println();
          await era.printAndWait([
            '薬効が消えるまで、',
            tachyon.get_colored_name(),
            ' は資料を救うため、走り回り続けた',
          ]);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだあと、目に映る世界が急に鮮明になった。',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' は幻覚剤ではないか疑い始めた。目の前に、妙なものが見え始めたからだ',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'おや？ 効果が出たようですわね。これは ',
            t_call_c,
            ' の言う、もう一つの世界を見る感覚を基に作った霊視の薬ですわ',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は何を作ったのだ！ 普通の化学の領域を超えている！？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ついでに、今見えるなら、私の身体も見てくださいまし',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はその言葉で、無意識に ',
            tachyon.get_colored_name(),
            ' を見た',
          ]);
          await era.printAndWait([
            '直後、',
            you.get_colored_name(),
            ' の意識は一瞬止まった',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '昨日 ',
            t_call_c,
            ' にまとわりついて、うっかり',
            coffee.sex,
            'を怒らせたようですわ。戻ってから、身体が重い……',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は見た。黒い影が両手で ',
            tachyon.get_colored_name(),
            ' の肩を押さえている',
          ]);
          await era.printAndWait([
            '影は ',
            you.get_colored_name(),
            ' の視線に気づき、顔らしき部分に指を当て、静かに、と示した',
          ]);
          await era.printAndWait([
            'それから ',
            you.get_colored_name(),
            ' は、何も言えなくなった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '………おかしいですわ。本当に何もないのですか。なぜこんなに重い',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の異常に気づかず、独りごちて部屋を出た',
          ]);
          await era.printAndWait([
            'そのときようやく ',
            you.get_colored_name(),
            ' は大きく息ができた。あの黒い影は、いったい……',
          ]);
          era.println();
          await era.printAndWait([
            'ちなみに翌日、',
            tachyon.get_colored_name(),
            ' は普通に戻っていた。たぶん ',
            coffee.get_colored_name(),
            ' の軽いお仕置きだったのだろう',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだあと、身体がひどく硬くなった',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は恐怖した。口と頭以外、全身が動かない',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'あら………身体の耐打性を上げる薬のつもりが、石化に近い効果になってしまいましたわ………',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' に、',
            tachyon.get_colored_name(),
            ' の実験後感想を聞いている暇はない',
          ]);
          await era.printAndWait([you.get_colored_name(), ' は焦っていた']);
          await era.printAndWait('必死に動かそうとしても、動かない');
          await era.printAndWait(
            'このあとグラウンドの時間割り会議がある。今日出なければ、一ヶ月グラウンドが使えない',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' はその重大さを ',
            tachyon.get_colored_name(),
            ' に伝えた',
          ]);
          await era.printAndWait([tachyon.sex, 'も、大変だと悟った']);
          era.println();
          await tachyon.say_and_wait(
            'グラウンドに出られなければ、薬の効果をどう確認するのです！？',
          );
          era.println();
          await era.printAndWait([
            'とにかく、理由はさておき、今は ',
            you.get_colored_name(),
            ' を会議室へ運ぶのが先だ',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は懸命に ',
            you.get_colored_name(),
            ' を抱え、会議室へ向かった',
          ]);
          await era.printAndWait([
            'なぜか薬を飲んだ ',
            you.get_colored_name(),
            ' は異常に重い。',
            tachyon.get_colored_name(),
            ' が',
            tachyon.uma_sex_title,
            'の力で持ち上げるのも一苦労だった',
          ]);
          await era.printAndWait([
            'ようやく会議室へ運び、様子を見られないよう、',
            tachyon.get_colored_name(),
            ' はそばで会議に同席した',
          ]);
          era.println();
          await era.printAndWait([
            'その日以降、なぜか学園では ',
            tachyon.get_colored_name(),
            ' と ',
            you.get_colored_name(),
            ' の噂が流れた',
          ]);
          await you.say_as_passer_by_and_wait(
            `通りがかりの${tachyon.uma_sex_title}A`,
            'お姫様抱っこで会議に行ったらしいわよ',
          );
          await you.say_as_passer_by_and_wait(
            '通りがかりのトレーナーA',
            '会議もずっと付き添って、お茶まで。完全に内助の功だな',
          );
          await you.say_as_passer_by_and_wait(
            `通りがかりの${tachyon.uma_sex_title}B`,
            ['あの ', tachyon.get_colored_name(), ' が恋をするなんて…………'],
          );
          era.println();
          await era.printAndWait('……………なぜそんな噂になる');
          await era.printAndWait([
            'そして、その噂を聞いた ',
            tachyon.get_colored_name(),
            ' の顔が、少し赤いのはなぜだ',
          ]);
          break;
        case 4:
          await era.printAndWait([
            '薬は ',
            you.get_colored_name(),
            ' が飲む前に桃色の濃霧を噴き、',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' を包んだ',
          ]);
          era.println();
          await tachyon.say_and_wait('こっほっ！ なんですの！？');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は首を横に振った。薬効すら知らない自分が、理由を知るはずがない',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ただの普通の精力剤ですのに……まあいいですわ。窓と扉を開けて霧を出しましょう',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は急いで窓へ向かい、開けようとした。だが',
          ]);
          era.println();
          await tachyon.say_and_wait('くっ、力が入りません……！');
          era.println();
          await era.printAndWait([
            'その間、',
            you.get_colored_name(),
            ' は椅子に座ったまま動けなかった。余裕があるからではない。',
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
            ' は ',
            tachyon.get_colored_name(),
            ' の言う精力剤を思い出した。一般に精力剤とは……そちらの薬だろう',
          ]);
          await era.printAndWait([
            'なぜ ',
            tachyon.get_colored_name(),
            ' がそんな薬を作るのか、疑問は残る。だが今は考えるときではない。なぜなら……',
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
              'だめだ。',
              tachyon.sex,
              'は ',
              you.get_colored_name(),
              ' の担当',
              tachyon.uma_sex_title,
              'だ。',
              you.get_colored_name(),
              ' は、そんなことをしてはいけない',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は冷静に',
              tachyon.sex,
              'を拒んだ。幸い、',
              tachyon.get_colored_name(),
              ' も一定の冷静は保っていた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '大丈夫ですわ……この薬の効きは、せいぜい一時間……一時間耐えれば……',
            );
            await era.printAndWait([
              'それ以上は誰も言わなかった。',
              you.get_colored_name(),
              ' と、力が抜けて床に座った',
              tachyon.sex,
              'は、黙って時を待った',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は必死に耐えた。だが視線は、どうしても ',
              tachyon.get_colored_name(),
              ' へ向く',
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
              ' は ',
              you.get_colored_name(),
              ' の視線に気づき、少し責めるように呼んだ。だが情欲に染まったその一声の ',
              callname,
              ' は色っぽく、',
              you.get_colored_name(),
              ' は慌てて謝り、視線を戻した',
            ]);
            era.println();
            await era.printAndWait('耐える、耐える、耐える');
            await era.printAndWait([
              'ようやく薬効が薄れ、',
              tachyon.get_colored_name(),
              ' は辛うじて立ち上がり、今日はここまで、と置いてトレーナー室を慌てて出ていった……',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は頭を振り、今日のことを振り落とそうとした。だが ',
              tachyon.get_colored_name(),
              ' の美しい体は、頭の中に残り、忘れられない……',
            ]);
            era.println();
            await era.printAndWait([
              'ちなみに事後、',
              you.get_colored_name(),
              ' が尋ねると、その精力剤は学内のある秘密の店に卸しているのだという。',
            ]);
            await era.printAndWait([
              'それが',
              tachyon.sex,
              'の研究資金の主な出所らしい。学園を歩けば、見つかるかもしれない……？',
            ]);
          }
          break;
        case 5:
          await era.printAndWait([
            you.get_colored_name(),
            ' は飲んだあと、全身が光り始めた。',
            you.get_colored_name(),
            ' は少し恐れたが、',
            tachyon.get_colored_name(),
            ' は相変わらず興奮していた',
          ]);
          era.println();
          await tachyon.say_and_wait('早く、服を脱ぎなさい');
          era.println();
          await era.printAndWait(['この人は何を言っている！？']);
          await era.printAndWait([
            '変態か！？ トレセンで流行りの嫌がらせか！？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて服を掴んだ。だが人間は',
            tachyon.uma_sex_title,
            'の力に敵わない。三秒の抵抗のあと、引っ張られて服は裂けた',
          ]);
          era.println();
          await era.printAndWait([
            '抗えない ',
            you.get_colored_name(),
            ' は目を閉じた。抗えないなら楽しむしかない。さあ、か弱い花だと思って手加減するな！',
          ]);
          era.println();
          await tachyon.say_and_wait('…………なるほど、なるほどですわ');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' が待っていたことは、いつまでも起きなかった。そっと目を開けると、',
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の身体を見つめ、呟きながら記録帳に何か書いていた',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は自分の身体に視線を戻した。たしかに光っている。だが光る部位には一定の規則があり、まるで…………',
          ]);
          era.println();
          if (you.race > 0) {
            await tachyon.say_and_wait('具体的には、こう動いていたのですわ……');
          } else {
            await tachyon.say_and_wait(
              `人間の身体は、具体的にはこう動いていたのですわ……ですが……${tachyon.uma_sex_title}との違いが…………`,
            );
          }
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の独り言を聞き、これも',
            tachyon.uma_sex_title,
            'の神秘を探る実験だと察した',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は、浅はかな想像を少し恥ずかしく思った',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'よろしい、今日の観察はここまでですわ。戻って実験します。',
            callname,
            '、服を着なさい！',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は記録を終え、急いでトレーナー室を出て、',
            you.get_colored_name(),
            ' 一人を残した',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は床の、もはや服とは呼べない破片を見て、夜にまぎれて帰るか、同僚に服を頼むか考えた',
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
    const title = '追加実験';
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
    const title = '実験課題の策定';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await tachyon.say_and_wait('走りたいレース、ですの？');
      era.println();
      await era.printAndWait([
        'かつての理科準備室、すなわち ',
        tachyon.get_colored_name(),
        ' の実験室で、',
        you.get_colored_name(),
        ' は小さなソファに座り、実験机の前の ',
        tachyon.get_colored_name(),
        ' に頷いた',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        'と契約した初日に聞くべきことだった。だが当時の ',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' に魅了されすぎて、ほぼ完全に忘れていた',
      ]);
      await era.printAndWait([
        'いずれにせよ、トゥインクル・シリーズに出るなら日程の設計は必須だ。',
        tachyon.sex,
        'の選択を聞いてこそ、',
        tachyon.sex,
        '向けのトレーニング方針が立てられる',
      ]);
      await era.printAndWait('三冠路線か、牝馬三冠か、あるいはマイルか');
      await era.printAndWait([
        '短距離……たぶん無理だろう。申し訳ないが、',
        tachyon.get_colored_name(),
        ' にその適性はないはずだ',
      ]);
      era.println();
      await tachyon.say_and_wait('……レース？ 興味ありませんわ');
      await tachyon.say_and_wait(
        'そもそも私の研究は自身の可能性のため。他人がどうあろうと関係ありません。強弱の比較など、子どもの遊びですわ',
      );
      await era.printAndWait([
        'いかにも ',
        tachyon.get_colored_name(),
        ' らしい答えだ',
      ]);
      await era.printAndWait([
        '正直、',
        tachyon.sex,
        'がそう答えることに驚きはない',
      ]);
      await era.printAndWait('だがトレーナーとして、果たすべき責務はある');
      await era.printAndWait([
        'それに……',
        tachyon.sex,
        'に視線を奪われたファンとして、自分の推しがより大きな舞台で輝くのを見たいのも、当然ではないか？',
      ]);
      era.println();
      await era.printAndWait([
        'だから ',
        you.get_colored_name(),
        ' は言葉を整え、口を開いた',
      ]);
      era.println();
      if (love >= 50 && relation <= 225 && tachyon.sex_code !== 1) {
        era.printButton(
          `「だって、君にはレースが要る。${tachyon.uma_sex_title}にはレースが要る」`,
          1,
        );
        await era.input();
        await era.printAndWait('推測でも虚勢でもない。事実の陳述だ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' にはレースが要る。',
          tachyon.sex,
          'の実験の検証として',
        ]);
        await era.printAndWait([
          tachyon.uma_sex_title,
          'にはレースが要る。闘争心の発散として',
        ]);
        await era.printAndWait([
          '二つの必要を一度に満たせるなら、',
          tachyon.sex,
          'に拒む理由はない',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……言いたいことはわかりますわ。ですが、その言い方、まったく愛想がありませんわね',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は冷たく ',
          you.get_colored_name(),
          ' を見た',
        ]);
        era.println();
        await era.printAndWait('やはり、猛薬が要るか。それなら……');
        era.println();
        await you.say_and_wait(
          'ああ、タキオンが負けを恐れて出走を拒むなら、理解できる、',
        );
        await you.say_and_wait(
          'タキオンの矜持に関わるし、今期には強者も多い、',
        );
        await you.say_and_wait([
          'もし実力でタキオンを上回る',
          tachyon.uma_sex_title,
          'が出たら、限界超越などと言っていたタキオンは……',
        ]);
        era.println();
        await era.printAndWait('笑い話だ');
        await era.printAndWait([
          '両手を一振りして試験管を十本取り出し、こめかみに筋を浮かべた ',
          tachyon.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' は続きを腹へ飲み込んだ',
        ]);
        await tachyon.say_and_wait([
          callname,
          '、あなたという人は……愛想がないだけならまだしも、自ら殴られにいくようなことを言う。死ぬのが怖くないのですか',
        ]);
        await you.say_and_wait('むぐぐぐ……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は弁解しようとしたが、',
          tachyon.get_colored_name(),
          ' に口を押さえられて声が出ない',
        ]);
        era.println();
        await tachyon.say_and_wait('考えさせて……ええ、これですわ');
        era.println();
        await era.printAndWait([
          'ずっと押さえておくのも面倒と思ったのか、',
          tachyon.get_colored_name(),
          ' に閃きが走った',
        ]);
        await era.printAndWait([
          '同時に、',
          you.get_colored_name(),
          ' の脳裏にも電流が走った。何か良くないことが起きる予告のように',
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
          'ふん……少しは気が晴れましたわ。本題に戻りましょう。',
        );
        await tachyon.say_and_wait(
          'レースへの出走はもちろん必須ですわ。選ぶ競走は……',
        );
        await tachyon.say_and_wait(
          'フフ、では三冠を目標にしましょう。あれだけ言っておいて足を引っ張ったら、皮を剥ぎますわよ。異議はありませんね？',
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
          era.printButton('だって……', 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' が口を開こうとした瞬間、振り返った ',
            tachyon.get_colored_name(),
            ' に唇を押さえられ、声が出なかった',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は立ち上がり、ソファの ',
            you.get_colored_name(),
            ' を押さえ、',
            you.get_colored_name(),
            ' と目を合わせた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '言いたいことはわかっていますわ。公にも私にも、レースに出る理由と必要性があることも。ですが……',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'は向きを変え、どかりと ',
            you.get_colored_name(),
            ' の腿に座り、',
            you.get_colored_name(),
            ' の腿の外側を叩いた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '今はレースに出る気がありませんの。だからうまく考えて、私を機嫌取る言葉を探しなさい。機嫌が良くなれば……出てもいいかもしれませんわよ？',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は苦笑し、',
            tachyon.get_colored_name(),
            ' の腰を抱いた',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'はごく自然に身を寄せ、いちばん楽な姿勢に直した',
          ]);
          era.println();
          await you.say_and_wait('タキオンはいちばんかっこいい');
          await you.say_and_wait('タキオンはかわいい');
          await you.say_and_wait('タキオンは美しい');
          await you.say_and_wait([
            'いちばん強くてすごい',
            tachyon.uma_sex_title,
          ]);
          await you.say_and_wait([
            '超光速の',
            tachyon.sex_code === 1 ? '王子' : '姫',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' の耳元で、',
            tachyon.sex,
            'を称える言葉を止めなかった',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'の耳も揺れ続け、その言葉が効いていることを示していた',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は得意げな顔で、',
            you.get_colored_name(),
            ' の腿を強く叩き、続きを促した',
          ]);
          era.println();
          await tachyon.say_and_wait('ふんふん……もっと、もっと、言いなさい！');
          era.println();
          await era.printAndWait([
            '叩かれて少し痛い ',
            you.get_colored_name(),
            ' は心変わりし、悪戯を思いついた',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は抱いていた手を放し、',
            tachyon.sex,
            'の腿の外側へ移した',
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
          era.printButton('利で誘う', 1);
          await era.input();
          await you.say_and_wait(
            'レースに出れば、賞金を実験に回せる。研究費の問題はそれで片づくはずだ',
          );
          era.println();
          await era.printAndWait([
            'まず利で誘う。',
            tachyon.get_colored_name(),
            ' のような研究者に感情論は笑われる。道理で説くのが最善だ',
          ]);
          await tachyon.say_and_wait([
            '却下ですわ、',
            callname,
            '。私の研究の副産物はそれ自体が売れる。レース準備に費やす時間の機会費用は、賞金の利益をすでに大きく上回っています',
          ]);
          era.println();
          await you.say_and_wait(
            'だがレースが呼ぶファンは？ ファンの消費力も、かなりの資金になるだろう？',
          );
          era.println();
          await tachyon.say_and_wait(
            'その通りですわ。本当に人気が取れれば、利益は研究単体を上回るかもしれません……',
          );
          await tachyon.say_and_wait(
            'ですが、そうなればいわゆるファンサービス——Winning Live や社会的イメージの維持——に割く時間も増え、時間コストはさらに上がります',
          );
          await tachyon.say_and_wait(
            'それに、あなたは一事を忘れていますわ。私が金を要するのは実験費のため。根本の目的は実験であって、稼ぐことではありません',
          );
          era.println();
          await you.say_and_wait(
            '……レースを放棄すれば、トレセン学園の建学方針に反する行為になる…',
          );
          await you.say_and_wait(
            '普通ならそこまで深刻ではないが、前科のあるタキオンなら……最悪、退学もあり得る',
          );
          era.println();
          await era.printAndWait('利が効かないなら、威で押す');
          await era.printAndWait(
            '脅しは気持ちのいい手段ではない。だが、あり得ない話でもない……',
          );
          await era.printAndWait([
            'あの理事長が許すとは思えないが、今は ',
            tachyon.get_colored_name(),
            ' を脅す材料にはなる',
          ]);
          era.println();
          await era.printAndWait([
            'だが ',
            tachyon.get_colored_name(),
            ' の反応は、面白い冗談を聞いたかのようだった',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '、初めて会ったときを覚えていますか？ あのときすでに退学で脅されていますわ。私が気にすると、本気で思っていますの？',
          ]);
          era.println();
          await you.say_and_wait('！', true);
          await era.printAndWait('一瞬で盲点を突かれた');
          await era.printAndWait([
            '当時の自分は、退学の話を聞くなり飛んで ',
            tachyon.get_colored_name(),
            ' を探しに行った',
          ]);
          await era.printAndWait([
            '逆に当時の',
            tachyon.sex,
            'は、いつも通り実験室で実験をしていた',
          ]);
          await era.printAndWait(
            '契約を結んだときの態度を見ても、代替案があるようには見えなかった',
          );
          await era.printAndWait([
            'つまり……',
            tachyon.sex,
            'は本当に、退学を気にしていない',
          ]);
          era.println();
          await era.printAndWait([
            'どうする……利も威も通じない',
            tachyon.sex,
            'に、まだ手はあるのか……',
          ]);
          era.printButton('諦める', 1);
          era.printButton('考え続ける', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              '手も足も出ない——今の ',
              you.get_colored_name(),
              ' は、たぶんそれだ',
            ]);
            await era.printAndWait([
              'もう手はない。',
              tachyon.get_colored_name(),
              ' にとって、',
              tachyon.sex,
              'の必要なものはレースから得る必要がない',
            ]);
            await era.printAndWait([
              'そんな ',
              you.get_colored_name(),
              ' に残るのは、自分が最も受け入れられないと思っていた手だけだ',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'では、',
              callname,
              '、まだ私を説得する手はありますの？',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は面白がるように ',
              you.get_colored_name(),
              ' を見たが、次の瞬間、興味は驚きに変わった',
            ]);
            await era.printAndWait(
              '理由は簡単だ。目の前で話していた人間が突然跪けば、誰でも驚く',
            );
            era.println();
            era.printButton('「だって……見たい」', 1);
            await era.input();
            await you.say_and_wait('タキオンが競馬場を走る姿が見たい');
            await you.say_and_wait([
              'タキオンが他の',
              tachyon.uma_sex_title,
              'と競り合った末に勝つ姿が見たい',
            ]);
            await you.say_and_wait(
              'タキオンが Winning Live のセンターで輝く姿が見たい！',
            );
            await era.printAndWait(
              '声はだんだん強くなり、人も熱を帯び、最後の一句はほとんど叫びだった',
            );
            await era.printAndWait([
              '最後の情による説得。胸の内をそのまま出し、',
              tachyon.get_colored_name(),
              ' に届いてほしいと願う',
            ]);
            await era.printAndWait('……たぶん、自分の独りよがりにすぎない');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は恐る恐る額を床に付け、答えを待った',
            ]);
            era.println();
            await tachyon.say_and_wait('………そんなことで……跪く？');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は顔を上げず、跪いたままだった',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '私はレースを気にしない。退学も気にしない',
            );
            await tachyon.say_and_wait([
              '率直に言えば、こんな',
              tachyon.uma_sex_title,
              'に付いていくのは迷惑でしょう……',
            ]);
            await tachyon.say_and_wait(
              '私があなたなら、協議が合わない今、担当契約の解除を出しますわ……なのにあなたは……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は ',
              you.get_colored_name(),
              ' の行為をどう形容すればいいかわからず、言葉が途切れた',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…………あなたの頭は何を考えていますの。それほどの必要がある？ 見合う？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は黙ったまま顔を上げ、',
              tachyon.sex,
              'を見た',
            ]);
          } else {
            await era.printAndWait([
              'ふと、',
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の言葉から何かを掴んだ気がした',
            ]);
            era.println();
            await era.printAndWait([
              '知り合ってから、たぶん、おそらく、それほど長くはない',
            ]);
            await era.printAndWait([
              'だが ',
              you.get_colored_name(),
              ' の、',
              tachyon.get_colored_name(),
              ' という',
              tachyon.uma_sex_title,
              'への理解によれば……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は、無意味なことに時間を使わない',
            ]);
            await era.printAndWait('そう、無意味なことには使わない');
            await era.printAndWait('つまり');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'が時間を割くことには、必ず意味がある',
            ]);
            await era.printAndWait('では、問い1');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' がトレセン学園に入った理由は？',
            ]);
            era.println();
            await era.printAndWait([
              '本当に必要がなければ、',
              tachyon.sex,
              'はそう選ばない',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' がトレセン入学で得る利益……',
            ]);
            await era.printAndWait([
              '考えるまでもない。',
              tachyon.sex,
              'の目標から十分だ——',
              tachyon.uma_sex_title,
              'の可能性を探し、可能性の境界を超えること',
            ]);
            await era.printAndWait([
              'ならば、まず',
              tachyon.uma_sex_title,
              'のすべてを解き明かしてから、限界を語る',
            ]);
            await era.printAndWait([
              'だから、質の高い',
              tachyon.uma_sex_title,
              'が最も集まるトレセン学園は、最良の研究場だ。他にない',
            ]);
            await era.printAndWait([
              'したがって退学は、',
              tachyon.sex,
              'が言うほどどうでもいい話ではない',
            ]);
            era.println();
            await era.printAndWait('問い2');
            await era.printAndWait([
              'なぜ ',
              tachyon.get_colored_name(),
              ' は生徒として学園に入ったのか',
            ]);
            era.println();
            await era.printAndWait([
              'トレセンには生徒以外の支援職もあり、非競走',
              tachyon.uma_sex_title,
              '学科もある。面倒を避けるなら、最初からそちらへ行けばよかったのではないか？',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は閃きを掴んだ気がした',
            ]);
            era.println();
            await era.printAndWait([
              '競走',
              tachyon.uma_sex_title,
              'になる理由は、レースに出るためだ',
            ]);
            await era.printAndWait([
              'レースに出ないなら、競走',
              tachyon.uma_sex_title,
              'を選ぶ必要はない',
            ]);
            await era.printAndWait([
              'ここまで来れば、',
              tachyon.get_colored_name(),
              ' が先ほど言った「レースに出たくない」は……',
            ]);
            await era.printAndWait([
              'わからない。',
              tachyon.sex,
              'が嘘をつく理由はわからない。だが',
            ]);
            await era.printAndWait(
              '目の前の関門を越えるだけなら、そこまで知る必要はない',
            );
            era.println();
            era.printButton('「気にしている。実験に検証が要るからだ」', 1);
            await era.input();
            await era.printAndWait('間違いない');
            await era.printAndWait('それがレースに出る理由だ');
            await era.printAndWait('すべては研究と、最終目的のため');
            era.println();
            await you.say_and_wait([
              '他の',
              tachyon.uma_sex_title,
              '、同期すら勝てないなら、速度の限界超越など語れない',
            ]);
            await you.say_and_wait([
              '君も俺も、',
              tachyon.get_colored_name(),
              ' が誰にでも勝てると信じている。それでも実験の検証は必須だ',
            ]);
            era.println();
            await era.printAndWait('1+1=2 と同じだ');
            await era.printAndWait(
              '誰もが答えを知っていても、検算と式は必要だ',
            );
            await era.printAndWait('余分な手順ではない。研究の厳密さだ');
            await tachyon.say_and_wait(
              '……よく言いましたわ。ですが、模擬レースは？',
            );
            await tachyon.say_and_wait(
              'レースでなくても、同期やより強い相手と競う機会は探せます。相手不足の心配もありません',
            );
            await tachyon.say_and_wait(
              '私が本当に強さを示せるなら、本能に沈む獣たちは、私との勝負を逃しませんわ。違いますか？',
            );
            era.println();
            await era.printAndWait('聞く分には、説得力がある');
            await era.printAndWait([
              '模擬でも、',
              tachyon.get_colored_name(),
              ' ほど強い',
              tachyon.uma_sex_title,
              'と競えるなら、相手が100%を出さない心配はない',
            ]);
            await era.printAndWait('だが……');
            era.println();
            era.printButton(
              `「120%を出した${tachyon.uma_sex_title}を、見たことがありますか？」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait('…………おや？');
            await era.printAndWait(
              '模擬レースが出せるのは、いつも日常の実力だけだ',
            );
            await era.printAndWait(
              '限界を超えるなら、本物の競馬場でしかできない',
            );
            await era.printAndWait('古今の大穴は、みなそうではなかったか？');
            era.printButton(
              `「${tachyon.uma_sex_title}の特性は、競馬場でしか限界を超える実力を出せないことだ」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              '…………なるほど。それがトレーナーとしての見解ですの？ 他には？ まだ理由はありますか？',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              'は相変わらず、言い切れない遊び心の目で ',
              you.get_colored_name(),
              ' を見る。',
              you.get_colored_name(),
              ' は少し落ち着かない',
            ]);
            await era.printAndWait([
              'それでも ',
              you.get_colored_name(),
              ' は、胸のいちばん奥に埋めていた理由を出した',
            ]);
            era.println();
            era.printButton('「…………見たい」', 1);
            await era.input();
            await tachyon.say_and_wait('ん？');
            await tachyon.say_and_wait('…………');
            await you.say_and_wait('タキオンが競馬場を走る姿が見たい、');
            await you.say_and_wait([
              'タキオンが他の',
              tachyon.uma_sex_title,
              'と競り合った末に勝つ姿が見たい',
            ]);
            await you.say_and_wait(
              'タキオンが Winning Live のセンターで輝く姿が見たい',
            );
            era.println();
          }
          await era.printAndWait([
            tachyon.sex,
            'は ',
            you.get_colored_name(),
            ' の表情を仔細に見つめ、それから ',
            you.get_colored_name(),
            ' の目に留まった。初めて会ったときと同じように、',
            you.get_colored_name(),
            ' の瞳の奥を凝視する',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…………フフ、狂人に狂人、ですの？ 面白い、面白いですわ！',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は、突然笑い出した',
            tachyon.sex,
            'を落ち着かない目で見た',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'の気分がなぜこれほど激しく動いたのかはよくわからない。だが……事態は ',
            you.get_colored_name(),
            ' に有利なほうへ傾いている？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'それなら、実験動物の積極性のため、適度な褒美も時には必要ですわね。',
          );
          await tachyon.say_and_wait(
            '承知しました。レースには出ますわ。走るなら、まずはクラシック三冠を軽く取ってから……',
          );
          await tachyon.say_and_wait([
            'できない、などとは言いませんわね、',
            callname,
            '？',
          ]);
          era.println();
          await era.printAndWait(['だが、', tachyon.sex, 'は付け加えた']);
          era.println();
          await tachyon.say_and_wait([
            'その代わり……私を退屈させないでくださいまし、',
            callname,
          ]);
        } else {
          era.printButton('「だって、見たい」', 1);
          await era.input();
          await tachyon.say_and_wait('……は？');
          await you.say_and_wait('タキオンが競馬場を走る姿が見たい、');
          await you.say_and_wait([
            'タキオンが他の',
            tachyon.uma_sex_title,
            'と競り合った末に勝つ姿が見たい',
          ]);
          await you.say_and_wait(
            'タキオンが Winning Live のセンターで輝く姿が見たい',
          );
          await era.printAndWait('それに、それ以外にも……');
          await era.printAndWait([
            you.get_colored_name(),
            ' は考え、さらに付け加えた',
          ]);
          era.println();
          await you.say_and_wait(
            'もちろん、もし、本当に、万一なら、タキオンが負けて地面に伏せ、悔しがる姿も見てみたい！',
          );
          await tachyon.say_and_wait('！');
          era.println();
          era.printButton('（おや、逆効果が効いた？）', 1);
          await era.input();
          await you.say_and_wait(
            '「ただし、タキオンが負けを恐れるなら理解もできる。それなら出ないほうがいい……」',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' はわざと ',
            tachyon.get_colored_name(),
            ' を一瞥し、',
            tachyon.sex,
            'の態度がおかしいと見て、急いで口を閉じ、引き際を守った',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……カリギュラ効果を私に使うとは、',
            callname,
            '、ずいぶん大胆ですわね',
          ]);
          await you.say_and_wait('違う……ぐぷっ！！？');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は反論しようとしたが、立ち上がった ',
            tachyon.get_colored_name(),
            ' に重力加速度で腹の上へ座られ、蛙を潰したような声を上げた',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ふん……一己の私欲のために、天才である私の貴重な時間を、こんな退屈な獣同士の争いに使えと？ 大胆不敵ですわね',
          ]);
          era.printButton('「そういう意味じゃない……」', 1);
          await era.input();
          await you.say_and_wait(
            'それに、レースに出れば必要な実験データも集められるだろう……',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は体勢を直し、',
            you.get_colored_name(),
            ' を',
            tachyon.sex,
            'がいちばん楽に座れる人肉の椅子に整えた',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' も自然に手を上げ、',
            tachyon.sex,
            'の肩を揉んだ',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ふぅ……助かりますわ。最近はずっと実験机の前で、全身が痛くて……',
          );
          await tachyon.say_and_wait('レースへの出走は……');
          await tachyon.say_and_wait(
            'できなくはありませんわ。目標は、まず三冠にしておきましょう、',
          );
          await tachyon.say_and_wait(
            '同期の第一にもなれないなら、限界を語る資格はありませんわ……',
          );
          await tachyon.say_and_wait([
            'では、',
            callname,
            '、私を全力で補佐しますわね？',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'の狂気じみた目を見て、笑って言った',
          ]);
          era.printButton('「当然だ」', 1);
          await era.input();
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' の目標が決まった',
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
    const title = '年度審査';
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
    const title = '束の間の休息';
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
      await tachyon.say_and_wait('夏合宿、そして……');
      if (plan_b) {
        await tachyon.say_and_wait(['その次は……', prix_lat, ' ですわ']);
        await tachyon.say_and_wait(
          'ええ、世界の頂点を頂点の目標に……くふふ、これ以上ふさわしいものはありませんわ',
        );
      } else {
        era.println();
        await tachyon.say_and_wait(['その次は……年末の ', arim_kin, ' ですわ']);
        await tachyon.say_and_wait(
          'ええ、最も影響力のあるレースで理論の締めくくり……くふふ、これ以上ふさわしいものはありませんわ',
        );
      }
      era.printButton('「だが、その前に……」', 1);
      era.printButton('「まずは、しっかり楽しもう」', 2);
      await era.input();
      await era.printAndWait('陽射し、砂浜、ビキニ');
      await era.printAndWait([
        'そして ',
        tachyon.get_colored_name(),
        ' の水着',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), ' の、水着']);
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
          'どうしましたの？ そんなに見惚れて。くふふ、実験を手伝った褒美ですわ。もっと見ていいですわよ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は体をくねらせ、胸の大きさをさらに強調した',
        ]);
      } else if (relation > 0 && relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          'ふん、そんなに露出の多い服が好きですの？……いいえ、これなら空気抵抗は減り、速度は上がりうる……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は途中で、また自分の思考に沈んだ',
        ]);
        await era.printAndWait([
          '水着が走りに効くかどうか……',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の揃っていないホットパンツとサンダルを見た……問題は水着ではないだろう、と ',
          you.get_colored_name(),
          ' は思った',
        ]);
      } else {
        await tachyon.say_and_wait(
          '……私と同じく理性至上である必要はありませんわ。ですが、発情した猿のような目は、少し収めてくださいまし',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_6
  ws_95_6: (() => {
    const title = 'バレンタイン';
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
          'さあ、',
          callname,
          '、バレンタインのチョコレートですわ',
        ]);
        era.println();
        await era.printAndWait([
          'トレーナー室に突然入ってきた ',
          tachyon.get_colored_name(),
          ' の淡々とした言葉で、',
          you.get_colored_name(),
          ' は今日がバレンタインだと気づいた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' のトレーニングに一日中追われ、日付すら忘れていた',
        ]);
        era.println();
        await you.say_and_wait('それにしても……タキオンからのチョコか', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          tachyon.get_colored_name(),
          ' が後ろから出したハート型の箱を見た。小さな仕切りに、小粒のチョコが並んでいる',
        ]);
        await era.printAndWait('中身は、まさか……');
        era.println();
        await tachyon.say_and_wait(
          'ん？ なんです、その顔。中に薬を入れたと思いましたの？',
        );
        era.printButton('頷く', 1);
        era.printButton('「入っていないのか？」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '……ひどい言い方ですわ。反論はできませんけれど',
        );
        await tachyon.say_and_wait(
          'ですが今日は……特別な日ですもの。そんなことはしませんわよ',
        );
        await tachyon.say_and_wait(
          '信じられないなら、先に一つ食べましょうか？',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          tachyon.get_colored_name(),
          ' がチョコをゆっくり口へ押し入れるのを見た',
        ]);
        await era.printAndWait(
          '前歯に当たったチョコは、桜色の唇がわずかに開くにつれ',
        );
        await era.printAndWait('一口、二口');
        await era.printAndWait([
          '指に押され、チョコは ',
          tachyon.get_colored_name(),
          ' の口の中へ消えていった',
        ]);
        era.println();
        await era.printAndWait('これなら……安心して食べられるかもしれない');
        await era.printAndWait([
          you.get_colored_name(),
          ' は手を伸ばし、机のチョコへ向かった',
        ]);
        await era.printAndWait('だが');
        era.printButton('「……？」', 1);
        await era.input();
        await era.printAndWait('手が伸びた瞬間、チョコの箱は引き抜かれた');
        await era.printAndWait([
          you.get_colored_name(),
          ' が首を傾げた、そのとき',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('無防備な唇が襲われた');
        await era.printAndWait(
          '器用な舌が歯をこじ開けると、流れ込んだのは甘い粘液',
        );
        await era.printAndWait(
          '押さえつけられ、押し当てられた舌が橋になり、濃い、濃い液体が流れ落ちる',
        );
        await era.printAndWait('甘い、甘い');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の好みどおりのチョコが口腔に染みる',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' には甘すぎるはずの味が、',
          tachyon.get_colored_name(),
          ' の舌に掻き混ぜられ、だんだん慣れていった',
        ]);
        await era.printAndWait([
          '身体から改造され、',
          tachyon.get_colored_name(),
          ' の好みへ整えられていくようだ',
        ]);
        await era.printAndWait(
          '……いや、整える、という言い方は適切ではないかもしれない',
        );
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '、チョコは、まだたくさんありますわよ❤️',
        ]);
        era.println();
        await era.printAndWait('目の前の恋人の、情欲と獣欲に満ちた目を見る');
        await era.printAndWait('ああ……「料理」された食材は、食べられる番だ');
      } else if (love >= 50) {
        await tachyon.say_and_wait([
          'おや、',
          callname,
          '、ハッピーバレンタイン！',
        ]);
        era.println();
        await era.printAndWait([
          '晴れた朝を破り、扉を開けて入ってきたのは、大きな袋を背負った ',
          tachyon.get_colored_name(),
          ' だった',
        ]);
        await era.printAndWait('……おかしい。今日はクリスマスではないはずだ');
        era.println();
        await tachyon.say_and_wait([
          'ん？ これらですの？ 他の',
          tachyon.uma_sex_title,
          'たちからの贈り物ですわよ？',
        ]);
        await tachyon.say_and_wait(
          'まったく……要らないと言ったのに。こんなものより、実験に自ら身を提供してくれたほうが嬉しいですわ……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は……そんなに人気なのか',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の胸に、わずかな嫉妬が湧いた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'その話はいいですわ。とにかく ',
          callname,
          '、私のチョコを受け取りなさい！',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は袋の中を漁り、大きさは少しずつ違うが似たようなチョコを探した',
        ]);
        await era.printAndWait(
          'まさか……他人からもらったチョコを、そのまま回しているだけか？',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' との関係はそこまでではないのに、自分は違うはずだ、特別に扱われるはずだ、と思ってしまう',
        ]);
        era.printButton('「それは……義理チョコか？」', 1);
        await era.input();
        await era.printAndWait('指導者として、聞くべきではない質問だ');
        await era.printAndWait('だが……やはり');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の本音が知りたい',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' の言葉に、',
          tachyon.get_colored_name(),
          ' は袋を漁る手を止めた',
        ]);
        await era.printAndWait([
          '顔を上げ、',
          you.get_colored_name(),
          ' の目をじっと見た',
        ]);
        await era.printAndWait([
          'その美しい赤瞳は、',
          you.get_colored_name(),
          ' の内側を見透かすようだった',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'おや、その言葉はどういう意味ですの、',
          callname,
          '？',
        ]);
        await tachyon.say_and_wait('義理だとしたら、どうしますの？');
        await tachyon.say_and_wait([
          'それとも、あなたは……どんなチョコを望むのです？',
        ]);
        era.printButton('「タキオンが特別にくれたものであってほしい」', 1);
        era.printButton(
          '「タキオンが自分一人にだけくれるチョコであってほしい」',
          2,
        );
        await era.input();
        await era.printAndWait('最後まで、あの二字は言えなかった');
        await era.printAndWait([
          'トレーナーである自分が、担当',
          tachyon.uma_sex_title,
          'に「本命」かどうかを聞くなど、できるはずがない',
        ]);
        era.println();
        await tachyon.say_and_wait('では、差し上げますわ');
        era.println();
        await era.printAndWait(
          'ようやく袋の底から、七色で絶対に見間違えない小さな包装を取り出したあと',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はチョコを胸元の小さなポケットへ押し込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'さあ、愛しい実験動物へ。一年分の感謝……そして、感謝以外の❤',
        );
        await tachyon.say_and_wait('ご自身の手で、取り出してくださいまし');
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
          '包装を剥き、',
          you.get_colored_name(),
          ' はチョコを口に含んだ',
        ]);
        await era.printAndWait('口に入れた瞬間、チョコは溶けた');
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('豚肉、玉ねぎ、ソース……');
        await era.printAndWait([
          'チョコにあるはずのない味が、',
          you.get_colored_name(),
          ' の口に広がった',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '？ その顔、おかしいですわよ？']);
        await tachyon.say_and_wait(
          '早く早く、効果は？……肉体に変化は見えません。内面に出るのですかしら……',
        );
        await era.printAndWait([
          'さっきまでの曖昧な空気を一転させ、',
          tachyon.get_colored_name(),
          ' は興奮して ',
          you.get_colored_name(),
          ' の反応を尋ねた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '？ 研究室で半日かけて調合したチョコの評価を、しないつもりですの？',
        ]);
        era.println();
        await era.printAndWait('…………この人は');
      } else if (relation > 225) {
        await tachyon.say_and_wait(['ははは！ ', callname, '！']);
        era.println();
        await era.printAndWait([
          '明るい笑い声とともにトレーナー室の扉を開けたのは、大きな袋を背負った ',
          tachyon.get_colored_name(),
          ' だった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Merry Christmas？ Happy New Year？ とにかく何かの祝日ですわ。早く早く、私の贈り物を受け取りなさい！',
        );
        era.printButton('「……バレンタイン、ということか？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'む……どうでもいいですわ。要するに、合法的に他人へ食物を押し込める日ですわよね？',
        );
        era.println();
        await era.printAndWait('……その解釈も、間違いではない？');
        await era.printAndWait([
          'だが相手が ',
          tachyon.get_colored_name(),
          ' だと考えると……',
        ]);
        era.printButton('「……何の薬を入れた」', 1);
        era.printButton('「……何人に配った」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'そんなことはどうでもいいですわ！ 受け取りなさい、私のバレンタイン！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は袋を漁り、とりわけ大きなチョコを取り出し、',
          you.get_colored_name(),
          ' の許可も聞かず手に押し込んだ',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'の手つきは慣れている。道中、すでに何人にも配ったのだろう',
        ]);
        await era.printAndWait(
          '……明日は各方面へ謝らねばならない。だがまず、この場を生き抜け',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は恐る恐るチョコを齧った',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('発光、変形、頭が二つ、背に翼、液化……');
        await era.printAndWait('どれも……起きなかった');
        await era.printAndWait(
          '言うなれば、たぶん、おそらく、ただの普通のチョコだ',
        );
        await era.printAndWait([
          'だが、これは ',
          tachyon.get_colored_name(),
          ' 基準の「正常」だ',
        ]);
        await era.printAndWait('普通の人にとってのチョコかどうかは……');
        era.printButton('なぜ……カツ丼味なんだ！？', 1);
        await era.input();
        await era.printAndWait('豚肉、玉ねぎ、ソース……');
        await era.printAndWait([
          'チョコにあるはずのない味が、',
          you.get_colored_name(),
          ' の口に広がった',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '？ その顔、おかしいですわよ？']);
        await tachyon.say_and_wait(
          '早く早く、効果は？……肉体に変化は見えません。内面に出るのですかしら……',
        );
        era.println();
        await era.printAndWait(
          'この人は……自分でも薬効がわからないものを、他人に押しつけるのか',
        );
        await era.printAndWait([
          '他の日ならまだしも、カップルがきらめくこの日を ',
          tachyon.get_colored_name(),
          ' に壊されるとは…………',
        ]);
        await era.printAndWait([
          'おかしい。急に、',
          tachyon.get_colored_name(),
          ' が正しい気がしてきた',
        ]);
        await era.printAndWait([
          '…………とにかく、',
          tachyon.get_colored_name(),
          ' には少しお灸が必要だ',
        ]);
        era.printButton('「効果は出ていないみたいだ」', 1);
        era.printButton('「タキオンも食べてみろ」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の返事を待たず、',
          you.get_colored_name(),
          ' は一口齧ったチョコを ',
          tachyon.get_colored_name(),
          ' の口へ押し込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait('む！？ ぐうっ！？');
        era.println();
        await era.printAndWait([
          '不意を突かれた ',
          tachyon.get_colored_name(),
          ' は、口いっぱいにチョコを詰められた',
        ]);
        await era.printAndWait([
          '口を開こうとして、',
          tachyon.sex,
          'は仕方なく飲み込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ちょっと、何をするのです！ ',
          callname,
          '！？',
        ]);
        await tachyon.say_and_wait('うえ……なんです、この味は！？');
        await tachyon.say_and_wait([
          '変な味ですわ！！ なぜチョコにカツの味があるのです！',
        ]);
        era.println();
        await era.printAndWait([
          '明日は報復されるだろう。だが今、',
          tachyon.get_colored_name(),
          ' の驚愕と吐き気の顔を見て',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は、胸がすっとした']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' の、騒がしいバレンタインは終わった',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '！ ははは、ハッピーバレンタイン！',
        ]);
        era.printButton('「……タキオン？」', 1);
        await era.input();
        await era.printAndWait([
          'これほど高揚した ',
          tachyon.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' は警戒した',
        ]);
        await era.printAndWait([
          '理由は単純だ。普段は冷たい ',
          tachyon.get_colored_name(),
          ' が、今日は異常に浮かれていた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ん？',
          callname,
          '？ どうしましたの。バレンタインおめでとうと言わないのですか？ もしかして……私のことが嫌い……ぐうっ……',
        ]);
        await tachyon.say_and_wait('うう……む……頭……くらくらしますわ……');
        era.println();
        await era.printAndWait([
          'おかしい。今日の ',
          tachyon.get_colored_name(),
          ' は……どこか変だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の顔をよく見た。寒さや興奮だと思っていた薄い赤と、とろんとした両目を捉えた',
        ]);
        era.printButton('「……タキオン、酒を飲んだな？」', 1);
        await era.input();
        await tachyon.say_and_wait('む……飲んでませんわ……');
        await tachyon.say_and_wait(
          'ただ……ただ……うっかり、エタノールの混合物を……少し……',
        );
        era.println();
        await era.printAndWait('エタノール混合物……それは酒だろう！？');
        await era.printAndWait([
          'だから ',
          tachyon.get_colored_name(),
          ' の様子がおかしいのか……',
        ]);
        await era.printAndWait('とにかく、今日のトレーニングは無理だ');
        await era.printAndWait(['まず', tachyon.sex, 'を休ませよう']);
        era.println();
        await era.printAndWait([
          'だが休む気のない ',
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の手をかわし',
        ]);
        await era.printAndWait(
          '懐を探り、白衣の内ポケットにいつも隠している薬瓶の中から、実験用ろ紙に包んだものをようやく見つけた',
        );
        await era.printAndWait('開ければ、七色のチョコが一枚');
        era.println();
        await tachyon.say_and_wait(['む……そ……そうだ……', callname, '……？']);
        await tachyon.say_and_wait('バ……バレンタインの、チョコ……');
        era.drawLine();
        await era.printAndWait('これほど不穏なバレンタインは、初めて見る');
        await era.printAndWait('こんな怪しいチョコを、本当に食べるのか');
        era.printButton('「これは……何で作った？」', 1);
        await era.input();
        await tachyon.say_and_wait('何……で？ む……忘れましたわ……');
        await tachyon.say_and_wait(
          'たしか……たしか……ココアパウダー……牛乳……砂糖……醤油……玉ねぎ……生の豚肉？',
        );
        era.println();
        await era.printAndWait(
          '後ろのいくつかは、チョコに入るものではないだろう！？',
        );
        await era.printAndWait('だが……毒は入っていない、と喜ぶべきか');
        await era.printAndWait('味は、絶対に変だろうが');
        era.println();
        await tachyon.say_and_wait('な……なぜ食べないのです……');
        await tachyon.say_and_wait([
          '食べなさい……',
          callname,
          '……私の顔を……潰すつもりですの……',
        ]);
        era.println();
        await era.printAndWait('なぜ急に、酒を勧めるおじさん口調に！？');
        await era.printAndWait([
          you.get_colored_name(),
          ' がいつまでも手を出さないのを見て、',
          tachyon.get_colored_name(),
          ' は自分でチョコを取った',
        ]);
        await era.printAndWait('そして……口にくわえた');
        era.println();
        await tachyon.say_and_wait(
          'む……こゆすれば食べれるでしょ（こうすれば食べられるでしょう）',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はチョコを軽く歯で挟んだ',
        ]);
        await era.printAndWait([
          '桜色の唇がわずかに開き、',
          you.get_colored_name(),
          ' に、反対側から齧れと示した',
        ]);
        await era.printAndWait('……え？');
        era.println();
        await tachyon.say_and_wait(
          'ふふ……こゆすればチューできるかも（こうすればキスできるかもしれませんわよ）',
        );
        era.println();
        await era.printAndWait('……これが酒の魔力か');
        await era.printAndWait([
          'いつも自分に冷たい顔を向ける ',
          tachyon.get_colored_name(),
          ' が、こんなに柔らかく、色っぽい',
        ]);
        await era.printAndWait([
          '思わず、',
          you.get_colored_name(),
          ' は前へ出てチョコを齧った',
        ]);
        era.println();
        await era.printAndWait('近い、近い');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の吐息が、そのまま届く距離だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の目を見た',
        ]);
        await era.printAndWait('惹きつける、今は少し酔ったその瞳を');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は小さく齧った。チョコが終われば、この時間が消える気がして',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' もゆっくり近づき、蝶のような唇がほとんど触れそうになる……いや、もう触れているのかもしれない',
        ]);
        await era.printAndWait('だが……チョコの大きさは、それだけだ');
        await era.printAndWait(
          '温度のせいか、それともどちらかが先に、危うい繋がりを切ったのか',
        );
        await era.printAndWait([
          'チョコは二人の口で溶け、折れ、それぞれの口へ入った',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('……毒はない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の威圧の下で何度も試薬してきた ',
          you.get_colored_name(),
          ' なら、断言できる。毒ではない',
        ]);
        await era.printAndWait('だがこの味……この味は……');
        era.printButton('「なぜ……豚丼なんだ……？」', 1);
        await era.input();
        await era.printAndWait('最後の妙な材料を聞いた時点で、予感はあった');
        await era.printAndWait('それでも、この味は理解しがたい');
        await era.printAndWait('というより、どうやってこのチョコを作った……');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を見た。',
          tachyon.get_colored_name(),
          ' は黙ったままだ',
        ]);
        await era.printAndWait('まさか……何か問題が……');
        era.println();
        await tachyon.say_and_wait('……………ぷ');
        await tachyon.say_and_wait(
          'はははは！ なんです、この味は！ おかしいですわ！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が突然笑い出した',
        ]);
        await era.printAndWait('自分の知らない落ちがあるのか？');
        await era.printAndWait([you.get_colored_name(), ' は少し考えた']);
        await era.printAndWait('カツ丼味のチョコ');
        await era.printAndWait('…………よく考えれば、たしかに面白い');
        era.println();
        await era.printAndWait([
          'いつの間にか、',
          you.get_colored_name(),
          ' も笑っていた',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('zzz……むにゃ……すぅ……');
        era.println();
        await era.printAndWait('まったく……騒ぎ終わると、勝手に眠る');
        await era.printAndWait([
          'まさか、',
          tachyon.get_colored_name(),
          ' には酒癖の悪い酔っ払いの素質があるのか……？',
        ]);
        era.println();
        await tachyon.say_and_wait('ん……モルモット……あ……り……が……すぅ……');
        era.println();
        await era.printAndWait('………まさか');
        await era.printAndWait('恥ずかしくて言えず、だから……');
        await era.printAndWait([
          'いや、何を考えている。',
          tachyon.get_colored_name(),
          ' なら……八割、本当に事故……か？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の口元のよだれを拭った',
        ]);
        await era.printAndWait([
          'とりあえず……',
          tachyon.sex,
          'が目覚めたら確認しよう。せめて、チョコに入れていいものと、いけないものくらいは……',
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
