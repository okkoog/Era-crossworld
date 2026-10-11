// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103000-Rice-Shower/edu-30"),

  // [번역 완료] arim_kin_win_s
  arim_kin_win_s: (() => {
    const title = "모두의 마음속에 한 송이 꽃이……";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait("대단해, 이 함성 소리.");
      await rice.say_and_wait("모두가 이쪽을 보고 있어.");
      await rice.say_and_wait("모두가 즐거워하는 모습이 내 눈에도 다 보여……!");
      await you.say_and_wait("정말 고생 많았어.");
      await rice.say_and_wait(["으으…… 응. ", self_name, ", 열심히 했어……"]);
      await rice.say_and_wait([
        "모두가 있어 줬기에 ",
        self_name,
        "가 힘낼 수 있었어.",
      ]);
      await rice.say_and_wait(
        "정말, 정말로…… 정말 고마워…… 여러분……!",
      );
      await rice.print_and_wait(["이날, ", rice.sex, "가 「주인공」으로서,"]);
      await rice.print_and_wait("모두에게,");
      await rice.print_and_wait("미소가 피어나는 최고의 레이스를 선사했다.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] begin_race_win
  begin_race_win: (() => {
    const title = "변화를 향한 첫걸음";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} sprg_sta 皐月賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      sprg_sta,
    ) => {
      await rice.say_and_wait([
        self_name,
        "……다 달렸어! 데뷔전에서 이겼어!",
      ]);
      era.printButton(`「${rice.name}, 정말 노력했네.」（호감도+5）`, 1);
      era.printButton(`${rice.name}의 머리를 쓰다듬어 준다.（애정도+1）`, 2);
      const ret = await era.input();
      await rice.say_and_wait(["와아…… 고마워! ", callname, '……']);
      await rice.say_and_wait([
        'え……へへ。これからも、よ、よろしくお願いします、',
        self_name,
        '！',
      ]);
      await rice.say_and_wait([
        '——こうして、',
        you.get_colored_name(),
        ' と ',
        self_name,
        ' は、最初の一歩を踏み出しました！',
      ]);
      era.drawLine({ content: "며칠 후" });
      await era.printAndWait([
        "어느 날, ",
        you.get_colored_name(),
        "은(는) 다시 한번 ",
        rice.get_colored_name(),
        "가 뛰었던 경기장을 찾았다.",
      ]);
      await rice.say_and_wait("와아…… 사람이 정말 많네. 마치 G1 레이스 같아.");
      await rice.say_and_wait("……어라? 하지만 오늘은 G2도 G3도 아닐 텐데……?");
      await you.say_as_passer_by_and_wait(
        "해설",
        "등장했습니다, 미호노 부르봉! 【Make Debut】 경기장에 모습을 드러냅니다!!",
      );
      await rice.say_and_wait(['……', call_26, '']);
      await you.say_as_passer_by_and_wait("해설", "격차를 계속 좁히며 단숨에 앞으로 치고 나갑니다!");
      await you.say_as_passer_by_and_wait(
        "해설",
        "속도가 전혀 줄지 않습니다, 그대로 계속해서 스퍼트!",
      );
      await you.say_as_passer_by_and_wait("해설", [
        bourbon.get_colored_name(),
        "이 이 기세를 유지하며 1착으로! 결승선을——통과합니다!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관객A",
        "아~ 내년 클래식 전선이 정말 기대되는걸.",
      );
      await you.say_as_passer_by_and_wait(
        "관객A",
        "난 무조건 부르봉을 응원할 거야!",
      );
      await you.say_as_passer_by_and_wait("관객B", [
        "그래그래! 미래의 삼관 ",
        rice.uma_sex_title,
        "지!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관객A",
        "부르봉의 레이스는 꼭 보러 갈 거야!",
      );
      await rice.say_and_wait([
        '……',
        call_26,
        "가 달리는 걸 보고 다들 웃고 있네.",
      ]);
      await rice.say_and_wait([self_name, "도 그렇게 할 수 있을까?"]);
      era.printButton("「할 수 있어!」", 1);
      await era.input();
      await rice.say_and_wait(["엣? ", callname, '！？']);
      await you.say_and_wait([rice.name, "는 분명 할 수 있을 거야!"]);
      await rice.say_and_wait('！');
      await rice.say_and_wait([
        "……에헤헤. ",
        callname,
        "의 목소리는 마치 마법 같아.",
      ]);
      await rice.say_and_wait(
        "절대로 못 할 것 같은 일도, 그렇게 말해주면 왠지 할 수 있을 것만 같은 기분이 들어.",
      );
      await you.say_and_wait([rice.name, "도 클래식 전선에 나가보는 게 어때?"]);
      await rice.say_and_wait("……클래식 전선.");
      await era.printAndWait([
        "——클래식 전선에 참가한다는 것은, 같은 해에 데뷔한 ",
        rice.uma_sex_title,
        "들과 경쟁한다는 것을 의미했다.",
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        "와 ",
        bourbon.get_colored_name(),
        "이 같은 무대 위에——",
      ]);
      await rice.say_and_wait('！');
      era.printButton(`「${rice.name}라면 분명 할 수 있어.」`, 1);
      await era.input();
      await rice.say_and_wait('……！');
      await rice.say_and_wait([
        callname,
        "는 계속 ",
        self_name,
        "를 믿어주고 있었구나……",
      ]);
      await rice.say_and_wait("알겠어. 그렇게 할게.");
      await rice.say_and_wait(
        "조금 무섭기도 하지만, 이제 더 이상 변하지 못하는 나쁜 아이로 남고 싶지 않아.",
      );
      await rice.say_and_wait([
        self_name,
        "…… 열심히 할게. 따라잡을 거야…… ",
        call_26,
        "를!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "와 클래식 전선에 도전하기로 약속했다.",
      ]);
      await era.printAndWait(["우선은 ", sprg_sta, '。']);
      await era.printAndWait(
        "삼관 노선의 전초전으로서, 그 방향을 향해 노력하기로 결심했다.",
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] kiku_sho_lose
  kiku_sho_lose: (() => {
    const title = "불타는 마음";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait("정말 한 끗 차이였어.");
      await rice.say_and_wait("조금만 더 하면 따라잡을 수 있었는데, 아직 부족해!");
      await rice.say_and_wait([
        self_name,
        ", 지고 싶지 않아! 다음엔 꼭 이길 거야.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] kiku_sho_win
  kiku_sho_win: (() => {
    const title = "평온한 선언";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      b_call_r,
      kiku_sho,
    ) => {
      await rice.say_and_wait([
        callname,
        '。',
        self_name,
        '、',
        self_name,
        '……！',
      ]);
      await you.say_and_wait([rice.name, ", 해냈구나."]);
      await rice.say_and_wait("우으…… 응……!");
      await rice.say_and_wait([
        self_name,
        "가, 해냈어……! ",
        self_name,
        "도 할 수 있었어……! ",
      ]);
      await bourbon.say_and_wait(['……', b_call_r]);
      await rice.say_and_wait(["와아앗! ", call_26, '！？']);
      await rice.say_and_wait("아, 아아. 저기, 이번 레이스는……");
      await bourbon.say_and_wait("——네, 『따라잡혔습니다』.");
      await rice.say_and_wait("……으윽.");
      await bourbon.say_and_wait("사실 전 이해할 수 없었습니다.");
      await bourbon.say_and_wait(['毎回『追いつく』と言う ', b_call_r]);
      await bourbon.say_and_wait("레이스에 존재하는 것은 승리 혹은 패배뿐입니다.");
      await bourbon.say_and_wait(
        "『따라잡는다』는 개념 같은 건 없습니다. 하지만——",
      );
      await bourbon.say_and_wait([
        "지금 전 매우 분합니다. 이번 ",
        kiku_sho,
        "을 따내지 못한 것이, 이기지 못한 것이 말입니다.",
      ]);
      await bourbon.say_and_wait("……당신에게 따라잡히고 말았군요.");
      await bourbon.say_and_wait([b_call_r, ", 들리십니까?"]);
      await rice.say_and_wait("……네.");
      await era.printAndWait("（환호 소리——!!!）");
      await you.say_as_passer_by_and_wait('観客A', [
        'すごいレースだったよ！',
        rice.name,
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        "관객B",
        "네가 올해의 주인공이야! 내년도 기대할게!!",
      );
      await rice.say_and_wait("……말도 안 돼……");
      await rice.say_and_wait([self_name, "를 위해서 박수를 쳐주고 있는 거야?"]);
      await rice.say_and_wait(["하지만 ", self_name, "는 그냥……"]);
      await bourbon.say_and_wait("아닙니다. 관객분들은 인정하고 계십니다.");
      await bourbon.say_and_wait([
        b_call_r,
        "는 올해 클래식 전선의 명실상부한 승리자입니다.",
      ]);
      await bourbon.say_and_wait("저 또한 그분들의 의견에 동의합니다.");
      await bourbon.say_and_wait([
        '次は、絶対に ',
        you.get_colored_name(),
        ' には負けません',
      ]);
      await bourbon.say_and_wait("——『라이벌』로서 말입니다.");
      await rice.say_and_wait("……라이, 벌.");
      await bourbon.say_and_wait([
        b_call_r,
        ' さん。',
        you.get_colored_name(),
        ' は、私の挑戦を受けますか？',
      ]);
      await rice.say_and_wait(['……！', self_name, '……！']);
      await rice.say_and_wait([
        self_name,
        "도 지고 싶지 않아! 다음번에도…… 모두를 이길 거야!",
      ]);
      await era.printAndWait([
        '——',
        rice.get_colored_name(),
        "가 내는 목소리는 멀리까지 전달되었다.",
      ]);
      await era.printAndWait("그것은 바로 옆뿐만 아니라 경기장 전체에 울려 퍼졌다.");
      await era.printAndWait("크고 당당한 선언이었다.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] nikk_sho_end
  nikk_sho_end: (() => {
    const title = "꽃잎, 흩날리다";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     */
    const f = async (rice, zob_zoy, you, callname, self_name, z_call_r) => {
      await rice.say_and_wait(["에헤헤…… 어때, ", callname]);
      await rice.say_and_wait([self_name, ", 잘 성장하고 있어?"]);
      await you.say_and_wait("응, 정말 멋지게 달렸어!");
      await rice.say_and_wait("응! 그럼 다음에도……");
      await zob_zoy.say_and_wait("……수, 수고했어요!");
      await rice.say_and_wait('！');
      await zob_zoy.say_and_wait([
        "오, 오늘은…… 저 혼자서 ",
        z_call_r,
        "를 응원하러 왔어요.",
      ]);
      await rice.say_and_wait("아! 고마워! 저기, 오늘은……");
      await zob_zoy.say_and_wait("정말 멋진 달리기였어요!");
      await zob_zoy.say_and_wait(
        "하나의 목표를 향해 끊임없이 나아가는…… 그 모습은 마치 민중을 이끄는 주인공 같았어요!",
      );
      await zob_zoy.say_and_wait("언젠가 후세에 책으로 쓰여 전해지겠죠……!");
      await rice.say_and_wait("으와아아…… 너무 과찬이야……");
      await zob_zoy.say_and_wait("아, 죄송합니다…… 저도 모르게 그만……");
      await rice.say_and_wait("아니야, 괜찮아. 하지만 정말 고마워.");
      await rice.say_and_wait([
        "조금 부끄럽지만…… ",
        self_name,
        ", 정말 기뻐.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] oc_95_1
  oc_95_1: (() => {
    const title = "새해 참배";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (rice, you, callname, self_name, tenn_spr) => {
      await era.printAndWait([
        "새해 첫날, ",
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "의 초대를 받아 함께 새해 참배를 하러 갔다.",
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        "는 정해둔 소원이 하나 있어.",
      ]);
      await rice.say_and_wait([
        "그래서 ",
        callname,
        "가 들어줬으면 좋겠는데, 그래도 될까?",
      ]);
      await you.say_and_wait("신님께 비는 게 아니라 나한테 말해주는 거야?");
      await rice.say_and_wait([
        "응! 이 소원은 ",
        callname,
        "에게 말하지 않으면 안 되는 거니까.",
      ]);
      await rice.say_and_wait([
        self_name,
        ", 다음 ",
        tenn_spr,
        "에 나가고 싶어.",
      ]);
      await you.say_and_wait("어째서?");
      await rice.say_and_wait("……그건, 더 강해지고 싶으니까.");
      await rice.say_and_wait("계속 앞으로 나아가지 않으면 안 돼.");
      await rice.say_and_wait("더 이상은…… 무서워하지 않기로 했으니까.");
      await you.say_and_wait("대단한 각오를 했구나.");
      await rice.say_and_wait([
        self_name,
        "는 깨달았어. 생각만 해서는 안 된다는 걸.",
      ]);
      await rice.say_and_wait(
        "눈앞에 있는 분이 슬퍼하지 않도록…… 먼저 행동해야만 한다는 걸…… 알았어.",
      );
      await era.printAndWait([
        rice.get_colored_name(),
        "는 새해를 맞이해 새로운 목표를 세웠다.",
      ]);
      await era.printAndWait([
        rice.sex,
        'のそのやる気に応えるため、',
        you.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' は、新年の抱負を絵馬に書いた。',
      ]);
      await rice.say_and_wait(["신님, ", self_name, "는 열심히 할게요."]);
      await rice.say_and_wait([
        callname,
        "랑 함께 참배하러 올 수 있어서 정말 다행이야!",
      ]);
      await rice.say_and_wait(["후후, 다음은 ", callname, " 차례네."]);
      await rice.say_and_wait([
        self_name,
        "도 같이 기도할게. 신님이 소원을 꼭 들어주시기를……",
      ]);
      era.print([you.get_colored_name(), "의 소원은……"]);
      era.printButton(
        `「${rice.name}가 언제까지나 건강하기를.」（스태미나+20, 호감도+5）`,
        1,
      );
      era.printButton(
        `「언제까지나 ${rice.name}의 달리기를 지켜봐 줄 수 있기를.」（모든 능력치+5, 애정도+2）`,
        2,
      );
      era.printButton("「힘이 필요해……!」（스킬 포인트+30）", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await rice.say_and_wait('！');
          await rice.say_and_wait([
            "헤헤, 알겠어. ",
            self_name,
            '、',
            callname,
            "에게 걱정 끼치지 않도록 조심할게.",
          ]);
          await era.printAndWait([
            "새해 참배 노점에서 영양 보충을 마친 뒤, ",
            you.get_colored_name(),
            "과(와) ",
            rice.get_colored_name(),
            "는 바로 트레이닝을 시작했다.",
          ]);
          break;
        case 2:
          await rice.say_and_wait([
            "후훗, 그렇게 상냥하게 말해 주면 ",
            self_name,
            ", 부끄러워져서 어쩔 줄 모르겠어.",
          ]);
          await rice.say_and_wait([
            "정말이지, 울고 있을 시간 같은 건 없네. ",
            self_name,
            "도 열심히 힘내야겠어……",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "과(와) ",
            rice.get_colored_name(),
            "는 조용히 서로를 응시한 뒤, 훈련에 돌입했다.",
          ]);
          break;
        case 3:
          await rice.say_and_wait("힘이라니…… 그게, 저기……");
          await rice.say_and_wait([self_name, "도 도와줄 수 있을까?"]);
          await rice.say_and_wait("그게, 근력 트레이닝이라든가, 같이 달리기라든가……");
          await you.say_and_wait("그런 뜻이 아니었어.");
          await rice.say_and_wait("호에?");
          await rice.say_and_wait([
            "하지만 정말로 ",
            self_name,
            "가 도와줄 수 있는 일이 있다면 꼭 말해줘.",
          ]);
          await rice.say_and_wait([
            self_name,
            '、',
            callname,
            "를 위해서라면 어떤 일이라도…… 도와줄 거니까.",
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            "은(는) ",
            rice.get_colored_name(),
            "의 사려 깊은 마음씨를 느끼며 학원으로 돌아왔다.",
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] or_letter
  or_letter: (() => {
    const title = "팬레터";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        "어느 날, ",
        rice.get_colored_name(),
        "가 팬레터를 받았다.",
      ]);
      await rice.say_and_wait([self_name, "에게 온, 팬레터……"]);
      await you.say_and_wait("잘됐네.");
      await rice.say_and_wait("응, 응!");
      await rice.say_and_wait("하지만……");
      await era.printAndWait([
        self_name,
        "의 기뻐 보이던 표정이 조금씩 불안하게 변했다.",
      ]);
      await you.say_and_wait("왜 그래?");
      await rice.say_and_wait([self_name, "는 가끔 이런 생각이 들어."]);
      await rice.say_and_wait([
        self_name,
        "를 응원해 주는 분이, 나 때문에 불행해지지는 않을까 하고.",
      ]);
      await rice.say_and_wait([
        self_name,
        "는 그러고 싶지 않은데, 그렇게 생각하고 싶지 않은데, 자꾸만……",
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        "는 어떻게 하는 게 좋을까?",
      ]);
      await you.say_and_wait("팬레터의 내용을 읽어 보자.");
      await rice.say_and_wait("내용을? 응……");
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        "가 레이스에서 노력하는 모습이 저에게 큰 용기를 주었어요.",
      ]);
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        "의 웃는 얼굴을 볼 때마다 마음이 따뜻해지는 기분입니다.",
      ]);
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        "의 노력하는 모습…… ",
        rice.get_colored_name(),
        "의 미소……",
      ]);
      await rice.say_and_wait("그렇구나. 누군가는 라이스 덕분에 기뻐해 주는구나.");
      await rice.say_and_wait([callname, ", 라이스 더욱더, 훨씬 더 많이 노력할게!"]);
      await rice.say_and_wait([
        self_name,
        "를 응원해 주는 분들이 모두 기뻐할 수 있도록 노력할게!",
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        "의 눈동자에 의욕 가득한 불꽃이 타오르는 듯했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] os_95_21
  os_95_21: (() => {
    const title = "만약 실패한다면";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} m_call_r たづなのライスへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      minoru,
      you,
      callname,
      self_name,
      m_call_r,
      takz_kin,
    ) => {
      await era.printAndWait([takz_kin, " 출주를 목표로 정한 뒤……"]);
      await era.printAndWait(
        "행인B「내 팬 투표, 너에게 던졌어! 반드시 1등 해야 해!」",
      );
      await rice.say_and_wait("와아!? 으…… 응원해 주셔서 감사합니다!");
      await era.printAndWait([
        "상점가 주인「아, 설마 자네는…… ",
        rice.get_colored_name(),
        "인가?」",
      ]);
      await rice.say_and_wait("네! 저기, 네 맞아요……");
      await era.printAndWait(
        "상점가 주인「뭐야! 꼭 우리 집 고로케를 먹고 가게!」",
      );
      await era.printAndWait(
        "상점가 주인「우리 집 아이가 자네 팬이라네.」",
      );
      await rice.say_and_wait("에!? 그래도 괜찮나요?");
      era.drawLine();
      await rice.say_and_wait(
        "에헤헤…… 기쁜 일이 이렇게나 많이 생기다니, 정말 괜찮은 걸까?",
      );
      await you.say_and_wait("그 응원만큼 더 노력해야겠네.");
      await rice.say_and_wait("맞는 말이야……");
      await minoru.say_and_wait("아, 두 분 다 여기 계셨군요!");
      await you.say_and_wait("무슨 일입니까?");
      await minoru.say_and_wait("사실은 말이죠!");
      await minoru.say_and_wait("방금 한신 경기장에서 소식이 들려왔는데……!!");
      await minoru.say_and_wait([
        "【팬 인기 투표】에서, ",
        m_call_r,
        "가 압도적인 차이로 1위예요!",
      ]);
      await minoru.say_and_wait("개막식에 참석해 주셨으면 합니다!");
      await rice.say_and_wait("에에에에에?");
      await minoru.say_and_wait("그래서 내일 리허설을 진행할 예정이에요.");
      await rice.say_and_wait([
        "……와아. ",
        self_name,
        "가…… 인기 1위? 개막, 식요?",
      ]);
      await minoru.say_and_wait("아하하…… 죄송해요. 저도 조금 너무 흥분했나 봐요.");
      await minoru.say_and_wait(
        "상세 내용은 서류로 정리해 두었으니, 나중에 확인하시고 의논해 보세요.",
      );
      await minoru.say_and_wait("그럼, 이만 실례하겠습니다.");
      await era.printAndWait([minoru.get_colored_name(), "가 떠난 뒤……"]);
      await rice.say_and_wait(["……대단해, ", self_name, "는, 모두의……"]);
      await you.say_and_wait("리허설하러 가자.");
      await rice.say_and_wait("응!");
      await era.printAndWait([
        "다음 날, 당신은 ",
        rice.get_colored_name(),
        "와 함께 한신 경기장으로 향했다.",
      ]);
      await era.printAndWait([
        "스태프A「",
        rice.get_colored_name(),
        " 씨! 다음은 꽃다발을 증정할 때 서 있을 위치입니다——」",
      ]);
      await rice.say_and_wait("네, 네!");
      await era.printAndWait(
        "스태프B「아, 그게 끝나면 저희도 부탁드리고 싶은 게 하나 있어서——」",
      );
      await rice.say_and_wait("우와…… 알겠습니다~! 귀 기울여 들을게요!");
      await era.printAndWait("이런저런 리허설이 일단락된 후……");
      await rice.say_and_wait("후아……");
      await you.say_and_wait("잠시 쉬자.");
      await rice.say_and_wait("에헤헤, 괜찮아. 왜냐하면……");
      await era.printAndWait([
        "스태프C「죄송합니다, ",
        rice.get_colored_name(),
        " 씨! 마이크 조정을 한 번 더 부탁드리고 싶어서요……」",
      ]);
      await rice.say_and_wait("네! 지, 지금 갈게요!");
      await rice.say_and_wait(
        "……끝까지 해내고 싶어. 모두가 미소 지을 수 있게 만들고 싶어.",
      );
      era.drawLine({ content: "등장 스테이지 위" });
      await rice.say_and_wait([
        "그럼, 여러분…… 부디 ",
        self_name,
        "를 많이 응원해 주세요!!",
      ]);
      await era.printAndWait("스태프A「당연하죠, 문제없습니다!!」");
      await era.printAndWait("그럼 오늘 리허설은 여기까지 하겠습니다!");
      await rice.say_and_wait("후…… 드디어, 끝났……네.");
      await you.say_and_wait("괜찮아?");
      await rice.say_and_wait("응, 괜찮아.");
      await rice.say_and_wait("처음이라 아직 서툰 게 많지만.");
      await rice.say_and_wait("진짜 개막일이 되어서, 모두가 이곳에 모였을 때.");
      await rice.say_and_wait("그때는 잘 해낼 수 있을 것 같아.");
      await rice.say_and_wait("전혀 힘들지 않아.");
      await rice.say_and_wait("더, 더…… 더 열심히 하고 싶어.");
      await era.printAndWait([
        'スタッフB「あ、',
        rice.get_colored_name(),
        ' 選手！忘れ物があるみたいです——」',
      ]);
      await rice.say_and_wait("에!? 죄송해요! 지금 가지러 갈게요!");
      await rice.say_and_wait("꺄악!?");
      await era.printAndWait("콰르릉…… 우드득…… 쾅——!");
      await era.printAndWait([
        "스태프C「어떻게 된 거야!? 문이 쓰러진다——",
        rice.get_colored_name(),
        "씨, 위ㅎ——」",
      ]);
      await era.printAndWait([
        "절체절명의 순간, ",
        you.get_colored_name(),
        "은(는) 가까스로 ",
        rice.get_colored_name(),
        "를 끌어안았다.",
      ]);
      await you.say_and_wait("괜찮아?");
      await era.printAndWait("쾅!", { fontSize: '2.5rem' });
      await rice.say_and_wait([
        callname.substring(0, 1),
        '、',
        callname,
        '！？',
      ]);
      era.drawLine();
      await rice.say_and_wait(["우…… 으…… ", callname, '……']);
      await you.say_and_wait("여기 있어.");
      await rice.say_and_wait([
        "아, ",
        callname,
        '！',
        callname,
        "!! 괜찮아!? 어디 아픈 데는 없어?",
      ]);
      await era.printAndWait([
        "……보아하니 ",
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "를 보호하려다 머리를 부딪힌 모양이었다.",
      ]);
      await you.say_and_wait("이제 괜찮은 것 같아.");
      await rice.say_and_wait("정, 정말? 하…… 하지만 역시 병원에——");
      await era.printAndWait("스태프A「아, 다행이다, 정신이 드셨군요!」");
      await era.printAndWait("스태프A「곧 구급차도 올 겁니다.」");
      await you.say_and_wait("고맙습니다.");
      await era.printAndWait(
        "스태프A「아니요! 저희야말로 정말 죄송합니다. 갑자기 상황이 나빠져서……」",
      );
      await era.printAndWait(
        "스태프A「정말로 죄송합니다, 저희가 병원까지 모시겠습니다.」",
      );
      era.drawLine({ content: "병원 검사 후" });
      await era.printAndWait(
        "스태프A「……그렇습니까. 검사 결과 이상은 발견되지 않았다고요——」",
      );
      await you.say_and_wait("걱정 끼쳐드려 죄송합니다.");
      await era.printAndWait("스태프A「아닙니다! 이건 저희의 실수라……」");
      await era.printAndWait(
        "스태프A「게다가…… 저희가 사과드려야 할 일이 또 있습니다.」",
      );
      await rice.say_and_wait("하지…… 하지만 여러분은 이미 충분히……");
      await era.printAndWait([
        "스태프A「——이번 개막식, 그리고 ",
        takz_kin,
        " 말입니다.」",
      ]);
      await era.printAndWait(
        "스태프A「한신 경기장에서의 개최가 연기될 것이라는 소식이 들어왔습니다.」",
      );
      await rice.say_and_wait('……！');
      await you.say_and_wait("그게 무슨 소립니까?");
      await era.printAndWait(
        "스태프A「사실…… 이번 경기장 내 사고의 원인을 아직 알 수 없습니다.」",
      );
      await era.printAndWait(
        "스태프A「거기에 부상자까지 발생했죠. 이렇게 되면 경기장 전체를 정밀 점검할 필요가 있습니다.」",
      );
      await era.printAndWait(
        "스태프A「점검과 수리를 포함하면, 최소 3주 이상의 시간이 소요될 것으로 보입니다.」",
      );
      await rice.say_and_wait([
        "그렇게 되면, ",
        takz_kin,
        " 일정에 맞출 수 없겠네요……",
      ]);
      await era.printAndWait(
        "스태프A「네. 이런 일이 생기지 않도록 저희도 매일 노력해 왔습니다만……」",
      );
      await era.printAndWait("스태프A「지금까지 단 한 번도 없었던 사례입니다……」");
      await era.printAndWait([
        "스태프A「두 분과 ",
        takz_kin,
        "을 기다려 주신 분들께 정말 면목이 없습니다!」",
      ]);
      await rice.say_and_wait([
        "지금까지 한 번도 없었는데, ",
        self_name,
        "가 오자마자 갑자기……",
      ]);
      await rice.say_and_wait('……');
      await era.printAndWait(
        [rice.get_colored_name(), "「설마, ", self_name, " 때문인 걸까?」"],
        {
          color: rice.color,
          fontSize: '0.75rem',
        },
      );
      await era.printAndWait("그 작은 목소리가 어째서인지 유독 크게 울려 퍼졌다——");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_dance
  os_dance: (() => {
    const title = "댄스 레슨";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait("하나 둘, 하나 둘, 여기서는 발을——");
      await rice.say_and_wait("꺄악!");
      await rice.say_and_wait("아우우, 또 실패했어…… 좀 더 연습해야 해……");
      await you.say_and_wait("정말 열심히 하는구나.");
      await rice.say_and_wait([
        "우앗!? ",
        callname,
        "!? 보, 보고 있었어……?",
      ]);
      await rice.say_and_wait([
        "미안해, 그게…… ",
        self_name,
        "는 아무도 없을 때 연습하려고 했거든.",
      ]);
      await you.say_and_wait("왜 혼자서 연습하고 있어?");
      await rice.say_and_wait(
        "그게, 예전에 다 같이 수업을 들을 때 무용실이…… 정전됐었거든.",
      );
      await rice.say_and_wait([
        "그것 때문에 모두의 수업이 끊겨버렸어. 아마, ",
        self_name,
        " 때문일 거야……",
      ]);
      await rice.say_and_wait([
        self_name,
        "는 더 이상 모두에게 폐를 끼치고 싶지 않아서, 그래서 혼자 연습하고 있었어.",
      ]);
      await rice.say_and_wait([
        callname,
        "도 그래. 여기 있으면 또 나 때문에 무슨 일을 당할지 몰라……",
      ]);
      era.printButton("「내가 같이 있으면 곤란하니?」（스태미나+10, 근성+10）", 1);
      era.printButton("「마음껏 폐 끼쳐도 괜찮아!」（지능+10, 스킬 포인트+10）", 2);
      const ret = await era.input();
      if (ret === 1) {
        await rice.say_and_wait([
          "그, 그럴 리가! ",
          callname,
          "가 같이 있는 건 전혀 곤란하지 않아!",
        ]);
        await you.say_and_wait("그럼 내가 도와주게 해줘.");
        await rice.say_and_wait([callname, '……']);
        await rice.say_and_wait("고마워.");
        await rice.say_and_wait([
          self_name,
          "가 잘 못 하는 부분이 있으면, ",
          callname,
          "가 꼭 말해줬으면 좋겠어.",
        ]);
        await you.say_and_wait("함께 힘내자.");
        await rice.say_and_wait("응!");
        await era.printAndWait([
          "그 후, ",
          you.get_colored_name(),
          "은(는) ",
          rice.get_colored_name(),
          "와 함께, ",
          rice.sex,
          "가 서툰 안무를 철저하게 연습했다.",
        ]);
      } else {
        await rice.say_and_wait([
          "우에!? 그럴 수가, ",
          callname,
          "에게 폐를 끼치고 싶지 않은걸!",
        ]);
        await you.say_and_wait([self_name, "가 혼자 고민하는 게 나한테는 더 큰 폐야."]);
        await rice.say_and_wait([callname, '……']);
        await rice.say_and_wait("그럼 연습 때 생긴 문제를 들어 줄 수 있어?");
        await you.say_and_wait("당연하지!");
        await rice.say_and_wait("고마워! 실은, 정말 어려운 스텝이 하나 있는데……");
        await era.printAndWait([
          "그 후 밤늦게까지, ",
          you.get_colored_name(),
          "은(는) ",
          rice.get_colored_name(),
          "의 댄스 연습 고민을 함께 나누었다.",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_5
  race_end_5: (() => {
    const title = "레이스 입상";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        "후우…… 다행이야. ",
        self_name,
        "도 열심히 노력했어……",
      ]);
      await rice.say_and_wait("다음에는 1등을 해보고 싶네…… 농, 농담이야. 후후.");
      era.printButton("「정말 열심히 했구나.」", 1);
      era.printButton("「다음에는 1등을 노리자!」", 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(["응, 응! 고마워, ", callname, '！']);
        await rice.say_and_wait([
          "하지만 ",
          self_name,
          '、',
          callname,
          "와 함께 있었기에 이렇게 노력할 수 있었다고 생각해.",
        ]);
        await rice.say_and_wait([
          self_name,
          " 혼자서는 아무것도 못 하지만, 같이 있으면 더 힘낼 수 있어……",
        ]);
      } else {
        await rice.say_and_wait("그, 그게…… 응, 응…… 다음에는 꼭 힘낼게!");
        await rice.say_and_wait("여, 역시 1등을 목표로 삼아야겠지……");
        await rice.say_and_wait("더 많이 노력해야겠어!");
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_lose
  race_end_lose: (() => {
    const title = "레이스 패배";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait(["으으…… ", self_name, "가 졌어……"]);
      await rice.say_and_wait([
        "미안해. ",
        self_name,
        " 때문에... ",
        callname,
        ", 실망했지……?",
      ]);
      era.printButton("「다음 기회가 있어.」", 1);
      era.printButton("「패배 원인을 분석해 보자.」", 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          "그게…… 응. ",
          callname,
          " 말이 맞아.",
        ]);
        await rice.say_and_wait([
          self_name,
          "는 다음엔 꼭 이길게. ",
          callname,
          ", 라이스를 꼭 지켜봐 줘.",
        ]);
      } else {
        await rice.say_and_wait(
          "원인…… 맞아, 그냥 열심히만 한다고 이길 수 있는 건 아니니까.",
        );
        await rice.say_and_wait(
          "패배의 원인을 찾아서 다음 레이스에 활용해야 해.",
        );
        await rice.say_and_wait(
          "아무리 못나도 계속 풀죽어 있으면, 영원히 못난 채로 남을 뿐이니까.",
        );
        await rice.say_and_wait([
          self_name,
          "는 이번에 진 원인을 찾을 거야. 그리고 다음에는 꼭 이기고 싶어!",
        ]);
        await era.printAndWait(['そのあと、ふたりで今回の敗因を振り返った。']);
        await era.printAndWait([
          rice.get_colored_name(),
          "는 묘하게 의욕이 넘치고 있었다.",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_love
  race_end_love: (() => {
    const title = "열애";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        "센터 라이브를 마친 ",
        rice.get_colored_name(),
        "과(와) ",
        you.get_colored_name(),
        "의 기분은 매우 고조되어 있었다.",
      ]);
      await era.printAndWait([
        "그런데 지금의 ",
        rice.get_colored_name(),
        "는 묘한 눈빛을 띤 채, 귀엽고 다급한 발걸음으로 ",
        you.get_colored_name(),
        "에게 달려오고 있었다.",
      ]);
      await you.say_and_wait("음……");
      await era.printAndWait([
        "승부복 차림의 ",
        rice.get_colored_name(),
        "가 상기된 기색으로 ",
        you.get_colored_name(),
        "의 허리춤을 두 손으로 껴안았다.",
      ]);
      await era.printAndWait([
        rice.sex,
        "는 알 수 없는 표정으로 ",
        you.get_colored_name(),
        "을(를) 올려다보고 있었으며, 그 눈동자에는 요염함이 가득 차 있었다.",
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        "가 뭔가 잘못했어?",
      ]);
      await rice.say_and_wait([
        "왜…… ",
        self_name,
        "를 안아주지 않는 거야?",
      ]);
      await era.printAndWait([
        "촉촉하게 젖어 드는 눈빛을 이기지 못한 ",
        you.get_colored_name(),
        "은(는) 소녀의 가냘픈 몸을 꽉 껴안았다.",
      ]);
      await era.printAndWait([
        "시간이 흘러 이제 슬슬 옷을 갈아입고 해산해야겠다고 생각한 ",
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "의 어깨를 잡았다.",
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        "는 아쉬운 듯 ",
        you.get_colored_name(),
        "의 손가락을 만지작거리다가, 나중에 보자는 말을 남기고 탈의실로 향했다.",
      ]);
      await era.printAndWait([
        "예전에는 무엇을 하든 조심스럽고 겁이 많았던 ",
        rice.get_colored_name(),
        "였지만, 지금은 마치 소악마처럼 ",
        you.get_colored_name(),
        "에게 응석을 부렸다.",
      ]);
      await era.printAndWait([
        "라이브 이후 트레이닝이 끝난 뒤, ",
        rice.get_colored_name(),
        "가 체육복 차림으로 ",
        you.get_colored_name(),
        "에게 다가왔다.",
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        "는 체육복 번호표 부분을 ",
        you.get_colored_name(),
        "에게 밀착시킨 채, ",
        you.get_colored_name(),
        "의 체취를 만끽하고 있었다.",
      ]);
      await era.printAndWait([
        "딸을 둔 아빠의 마음이 이런 것일까 생각하며, ",
        rice.sex,
        "를 더 세게 껴안아 주었다.",
      ]);
      await you.say_and_wait(["간지러워, ", rice.name]);
      await rice.say_and_wait('え？');
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "에게 어서 옷을 갈아입으라고 재촉했다.",
      ]);
      await era.printAndWait([
        "비틀거리는 뒷모습을 배웅하며, ",
        you.get_colored_name(),
        "은(는) 둘 사이의 관계에 어떤 변화가 생겼음을 깊이 실감했다.",
      ]);
      await era.printAndWait([
        "최근 ",
        rice.get_colored_name(),
        "가 보여주는 애정 표현은 점점 과격해지고 있었다.",
      ]);
      await era.printAndWait([
        "껴안고, 키스하고, ",
        you.get_colored_name(),
        "의 손을 가슴에 갖다 대는 등의 행동조차 이제 아무렇지도 않게 느껴질 정도였다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_win
  race_end_win: (() => {
    const title = "레이스 승리";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        "해냈어, 해냈어, ",
        callname,
        '。',
        self_name,
        "가 이겼어……",
      ]);
      await you.say_and_wait("좀 더 가슴을 펴도 괜찮아.");
      await rice.say_and_wait("가슴을 펴라고? 그게……");
      await rice.say_and_wait(
        "게다가 1등이라니! 정말 감사히 받아야겠어!",
      );
      await rice.say_and_wait([
        "에헤, 에헤헤! 이렇게 하면 될까? ",
        self_name,
        "가 가슴을 좀 펴고 있는 것 같아?",
      ]);
      era.printButton("「네가 정말 자랑스러워.」", 1);
      era.printButton("「다음에도 꼭 이기자.」", 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          self_name,
          "가 자랑스럽다니? 왠, 왠지 조금 쑥스러워……",
        ]);
        await rice.say_and_wait([
          "그래도 ",
          callname,
          "가 자랑스럽게 여겨준다면, ",
          self_name,
          "도 정말 기뻐……",
        ]);
        await rice.say_and_wait("기쁘긴 한데, 너무 부끄러워서……");
        await rice.say_and_wait([
          "으으, ",
          self_name,
          "는 이제 잘 모르겠어~",
        ]);
      } else {
        await rice.say_and_wait(
          "응, 응! 다음 레이스에서도 이겨서 모두를 기쁘게 해주고 싶어.",
        );
        await rice.say_and_wait([
          "그러니까 ",
          callname,
          ", 앞으로도 ",
          self_name,
          " 트레이닝 잘 부탁해!",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_start
  race_start: (() => {
    const title = "레이스 전";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      const buffer = [
        () =>
          rice.say_and_wait(["이제부턴 최선을 다해 달릴 뿐이야, 그렇지? ", callname, '！']),
        () =>
          rice.say_and_wait([self_name, "는 끝까지 포기하지 않고 달릴 거야! 힘낼게——오!"]),
        () =>
          rice.say_and_wait([
            "아직 시작도 안 했는데, 좋은 레이스가 될 것 같은 기분이 들어. ",
            self_name,
            ", 오늘은 정말 기대돼!",
          ]),
        () => rice.say_and_wait("후우, 좋아……! 아직 시작 시간 안 됐어?"),
        () =>
          rice.say_and_wait(
            'ふ、ふるえてきました……あの、お兄ちゃん。ライス、ちょっと手を握ってもいいですか？',
          ),
        () =>
          rice.say_and_wait(
            "모두에게 행복을 전하고 싶으니까…… 라이스는 전력으로 달릴게!",
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_start_moti_add
  race_start_moti_add: (() => {
    const title = "무사의 전율";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait("으으…… 으으……");
      era.printButton("상태가 안 좋아?", 1);
      await era.input();
      await you.say_and_wait("상태가 안 좋아?");
      await rice.say_and_wait("어? 아, 아니야. 그냥 조금 긴장해서 그래……");
      await rice.say_and_wait("하지만 이제 괜찮아.");
      await rice.say_and_wait([
        "이렇게 ",
        callname,
        "와 대화하면 마음이 놓여.",
      ]);
      await rice.say_and_wait([
        self_name,
        "는 힘낼게. 나를 꼭 지켜봐 줘, ",
        callname,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sa_47_46
  sa_47_46: (() => {
    const title = "라이벌의 불행";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      b_call_r,
      kiku_sho,
    ) => {
      await era.printAndWait([
        kiku_sho,
        "이 끝난 후, ",
        rice.get_colored_name(),
        "의 주변에 어떤 변화가 나타났다.",
      ]);
      await era.printAndWait([rice.uma_sex_title, "A「아, 라이스 샤워다!」"]);
      await rice.say_and_wait(["어…… 어라!? ", self_name, "를 부르신 건가요?"]);
      await era.printAndWait([
        rice.uma_sex_title,
        "B「그렇게 긴장하지 않아도 돼! 후후, 지난번 ",
        kiku_sho,
        "은 정말 대단했어!」",
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        "A「응응! 정말 감동받았어!」",
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        "B「정말이라니까! 그때의 라이스 샤워 양, 윽…… 너무 진지해서 정말 멋졌어!」",
      ]);
      await rice.say_and_wait([
        "에에에? ",
        self_name,
        "가 멋지다니……",
      ]);
      await era.printAndWait(
        "그러니까 앞으로도 힘내! 우리도 라이스 샤워를 응원할게.",
      );
      await rice.say_and_wait("에!? 네…… 네!!");
      await you.say_and_wait("응원을 받으니 정말 기쁘네.");
      await rice.say_and_wait(["아, ", callname, '？']);
      await rice.say_and_wait([
        'そ、そんな……',
        call_26,
        ' がすごすぎるから、挨拶しに来ただけです',
      ]);
      await rice.say_and_wait([
        kiku_sho,
        "의 박수 소리도, ",
        call_26,
        "가 있었기 때문에——",
      ]);
      await you.say_and_wait(['お前が', rice.sex, 'のライバルだからだろ']);
      await rice.say_and_wait([
        "으으…… 오, ",
        callname,
        "까지 너무 비행기 태우지 마……",
      ]);
      await rice.say_and_wait("그치만, 멋지다고...? 에헤헤……");
      era.drawLine();
      await era.printAndWait("——하지만 다음날, 상황이 급변했다.");
      era.printButton(`「${rice.name}？」`, 1);
      await era.input();
      await rice.say_and_wait("……가까이 오지 마세요!");
      await era.printAndWait([
        rice.uma_sex_title,
        "A「……라이스 샤워 양, 역시…… 신경 쓰이겠지.」",
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        "B「아~ 당연하겠지. 나라도 기분 안 좋을 거야.」",
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        "B「그 무결점의 부르봉 양이, 자기랑 레이스한 뒤에…… 뭐랄까……」",
      ]);
      await era.printAndWait("교사 옆 그늘 아래.");
      await rice.say_and_wait([
        "……윽…… 왜, ",
        self_name,
        "는 항상 이런 식일까?",
      ]);
      await rice.say_and_wait("항상 주변 사람을 불행하게 만들고, 남에게 폐만 끼치고!");
      await you.say_and_wait(['……', rice.name]);
      await rice.say_and_wait([callname, '……！']);
      await rice.say_and_wait([
        "……안 돼! ",
        self_name,
        "에게 가까이 오면, 불행해질 거야.",
      ]);
      await rice.say_and_wait([
        call_26,
        "는, 지금까지 아무리 힘든 훈련도…… 부상 없이 견뎌왔잖아?",
      ]);
      await rice.say_and_wait([
        'なのに全部、',
        self_name,
        ' のせい……',
        self_name,
        ' が',
        rice.sex,
        'のライバルになったから……',
      ]);
      await rice.say_and_wait("3년 중에 가장 중요한 시기를 망쳐버렸어……");
      await you.say_and_wait("그거 본인한테 직접 들은 거야?");
      await rice.say_and_wait(["……듣지 않아도, ", self_name, "는 알고 있어."]);
      await rice.say_and_wait(["왜냐면…… ", self_name, "는……"]);
      await you.say_and_wait("직접 들은 건 아니라는 거네.");
      await rice.say_and_wait(["에!? ", callname, '？']);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "를 데리고 보건실로 가서 ",
        bourbon.get_colored_name(),
        "을 찾아냈다.",
      ]);
      await bourbon.say_and_wait('……');
      await rice.say_and_wait('……');
      era.printButton("「갑자기 찾아와서 미안해.」", 1);
      await era.input();
      await bourbon.say_and_wait(
        "아니오, 오늘 하루 동안 병문안 오는 분들에겐 이미 익숙해졌습니다.",
      );
      await bourbon.say_and_wait("그래서, 무슨 일로 오셨습니까?");
      await rice.say_and_wait(
        "!…… 죄, 죄송해요. 죄송해요…… 죄송해요……!",
      );
      await rice.say_and_wait([
        "다 ",
        self_name,
        " 때문이에요…… 당신을 다치게 하고, 이렇게 중요한 시기를 헛되게 만들어서.",
      ]);
      await bourbon.say_and_wait("실례합니다.");
      await bourbon.say_and_wait([
        "왜 사과하십니까? 저의 부상과 ",
        b_call_r,
        " 사이에 어떤 인과관계가 있는지 추론할 수 없습니다.",
      ]);
      await rice.say_and_wait([
        "하지만…… ",
        self_name,
        "가 당신의 라이벌이 되기 전까지는 다친 적이 없었잖아요!",
      ]);
      await bourbon.say_and_wait(
        "이해 불능. 부상 발생률은 일정하며, 따라서 그 이론은 물리적 근거가 없다고 판단됩니다.",
      );
      await bourbon.say_and_wait(
        "오히려 당신이 불행을 부른다고 주장한다면, 그것은 제가 검증해야 할 일입니다.",
      );
      await rice.say_and_wait(['', call_26, "가요?"]);
      await bourbon.say_and_wait("네, 저는 당신을 경쟁 상대로 인정했습니다.");
      await bourbon.say_and_wait([
        "그것은 제가 기대하고 있기 때문입니다. ",
        kiku_sho,
        "에서 성장의 가능성을 느꼈습니다.",
      ]);
      await bourbon.say_and_wait(
        "당신이라는 경쟁 상대가 있다면, 더 큰 성장을 예견할 수 있습니다.",
      );
      await bourbon.say_and_wait(
        "또한 당신과 함께라면, 사상 최고의 레이스——『기적』을 달성할 가능성이 존재합니다.",
      );
      await bourbon.say_and_wait(["저의 불행은 ", b_call_r, "와 관련이 없습니다."]);
      await rice.say_and_wait('……');
      await bourbon.say_and_wait([
        b_call_r,
        "는 저를 불행하게 만드는 존재입니까? 아니면 기적을 부르는 존재입니까?",
      ]);
      await rice.say_and_wait("……그건……");
      await era.printAndWait([
        "———기나긴 시간 동안, ",
        rice.get_colored_name(),
        "는 묵묵히 ",
        bourbon.get_colored_name(),
        "의 시선을 받아냈다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_teach
  sa_teach: (() => {
    const title = "명지도";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, zob_zoy, you, callname, self_name) => {
      await rice.say_and_wait("흠…… 흠, 흠……♪");
      await zob_zoy.say_and_wait([self_name, ", 기분이 좋아 보이시네요."]);
      await zob_zoy.say_and_wait("무슨 좋은 일이라도 있나요?");
      await rice.say_and_wait([
        "음…… 있잖아, ",
        self_name,
        "가 수업 시간에 코스를 달렸는데.",
      ]);
      await rice.say_and_wait("이전보다 더 좋은 성적이 나왔어!");
      await rice.say_and_wait("어제 새로운 주법을 배웠거든, 그래서 이것도——");
      await zob_zoy.say_and_wait(['……', callname, " 덕분인가요?"]);
      await rice.say_and_wait("어…… 어어, 어떻게 알았어!?");
      await zob_zoy.say_and_wait("후후, 미안해요.");
      await zob_zoy.say_and_wait("밤늦게 책을 읽다 보면 가끔……");
      await zob_zoy.say_and_wait([
        "아주 행복한 얼굴로 잠꼬대하는 걸 듣게 되거든요. 『고마워, ",
        callname,
        "……』라고.",
      ]);
      await rice.say_and_wait("으, 으아, 와아아, 너무 부끄러워!");
      await zob_zoy.say_and_wait("죄송합니다, 놀리려던 건 아니었어요.");
      await zob_zoy.say_and_wait(
        "그저 그렇게 감사할 정도라면, 분명 멋진 트레이너일 거라고 생각했을 뿐이예요.",
      );
      await rice.say_and_wait([
        "으, 응! ",
        callname,
        "는 최고의 트레이너야!",
      ]);
      await era.printAndWait([
        "그 후로 한참 동안, ",
        rice.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "이(가) 얼마나 멋진지에 대해 끊임없이 이야기했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sprg_sta_lose
  sprg_sta_lose: (() => {
    const title = "미래를 향해 멈추지 않는 발걸음";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, bourbon, you, callname, self_name) => {
      await rice.say_and_wait("하아…… 하아……!");
      era.printButton("「수고했어.」", 1);
      await era.input();
      await rice.say_and_wait(["고마워, ", callname]);
      await rice.say_and_wait("하지만 드러난 문제점도 많네.");
      await rice.say_and_wait([self_name, ", 조금 더 노력해야겠어!"]);
      era.drawLine({ content: "지하 통로의 또 다른 곳" });
      await you.say_as_passer_by_and_wait(
        "기자A",
        "부르봉 씨! 부르봉 씨!!",
      );
      await bourbon.say_and_wait("……무슨 일이십니까?");
      await you.say_as_passer_by_and_wait(
        "기자A",
        "과연 【밤색의 초특급】답군요! 이번 레이스에서도 그 칭호의 일면을 보여주셨습니다!",
      );
      await you.say_as_passer_by_and_wait(
        "기자A",
        "모두가 기대하고 있습니다! 부르봉 씨가 삼관을 달성하는 그 영광스러운 순간을요!",
      );
      await bourbon.say_and_wait("응원, 감사합니다. 그럼 실례하겠습니다.");
      await you.say_as_passer_by_and_wait(
        "기자A",
        "아, 잠시만요, 잠깐만 기다려 주세요! 한 마디만 더!",
      );
      await you.say_as_passer_by_and_wait("기자A", "질문 하나만 더 허락해 주십시오!");
      await you.say_as_passer_by_and_wait(
        "기자A",
        "그러니까…… 이번 레이스에서 부르봉 씨의 강적은 어느 분이라고 생각하시나요?",
      );
      await bourbon.say_and_wait("강적?");
      await bourbon.say_and_wait("판단에 그런 존재는 필요하지 않습니다.");
      await bourbon.say_and_wait(
        "1위를 달성하기 위해 상대는 그곳에 있는 것입니다. 강적이라고 생각할 필요는 없습니다.",
      );
      await rice.say_and_wait("……대단해.");
      await rice.say_and_wait("자신감도 넘치고 실력도 있고, 자신의 길을 나아가고 있어……");
      era.printButton(`「${rice.name}가 힘내야겠네.」`, 1);
      await era.input();
      await era.printAndWait("응!");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sprg_sta_win
  sprg_sta_win: (() => {
    const title = "미래를 향해 멈추지 않는 발걸음";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait("하아…… 하아……!");
      era.printButton("「수고했어.」", 1);
      await era.input();
      await rice.say_and_wait(["고마워, ", callname]);
      await rice.say_and_wait("하지만 드러난 문제점도 많네.");
      await rice.say_and_wait([self_name, ", 조금 더 노력해야겠어!"]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin_lose_s
  takz_kin_lose_s: (() => {
    const title = "작은 푸른 장미";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait(["저기, ", self_name, "가 달리는 동안에 말이야."]);
      await rice.say_and_wait("다 들렸거든, 모두의 목소리가.");
      await rice.say_and_wait([
        "모두가 『힘내라——』 『",
        rice.get_colored_name(),
        "씨——』라고 외치며 계속 ",
        self_name,
        "를 응원해 줬어.",
      ]);
      await rice.say_and_wait("헤헤, 이러면 안 되는데 말이야.");
      await rice.say_and_wait([self_name, "가 모두를 웃게 해줘야 하는데."]);
      await rice.say_and_wait([
        "결과적으로는 모두가 ",
        self_name,
        "를 행복하게 해줬어.",
      ]);
      await rice.say_and_wait("정말, 너무 행복해.");
      await era.printAndWait([
        rice.get_colored_name(),
        "가 어깨를 들썩이며 울음을 터뜨렸고, 관객들은 그런 ",
        rice.sex,
        "에게 따뜻한 박수를 보내주었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] takz_kin_win_s
  takz_kin_win_s: (() => {
    const title = "만개하는 푸른빛";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_13 ライスのマックイーンへの呼び方
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      rice,
      you,
      callname,
      self_name,
      call_13,
      call_26,
      takz_kin,
      arim_kin,
    ) => {
      await rice.say_and_wait("하…… 아, 하아……!!");
      await you.say_and_wait("축하해!");
      await rice.say_and_wait(["……에헤헤. 고마워, ", callname]);
      await rice.say_and_wait([
        "저기, ",
        self_name,
        "가 달리는 중에도 다 들렸어.",
      ]);
      await rice.say_and_wait("모두의 목소리가.");
      await rice.say_and_wait([
        "……헤헤, 안 되겠네. ",
        self_name,
        "가 모두를 웃게 해주겠다고 약속해놓고서.",
      ]);
      await rice.say_and_wait([self_name, ' だけが嬉しいなんて']);
      await rice.say_and_wait("정말 너무 행복해……");
      await rice.say_and_wait([takz_kin, "을 달릴 수 있어서 정말 다행이야."]);
      await you.say_and_wait("모두가 똑같은 생각일 거야.");
      await rice.say_and_wait("모두가?");
      await era.printAndWait([
        "관객A「",
        rice.get_colored_name(),
        "——!! 고마워——!!」",
      ]);
      await era.printAndWait([
        "관객A「올해 ",
        takz_kin,
        "은 정말 최고였어——!!」",
      ]);
      await rice.say_and_wait("대단해…… 웃는 얼굴이 정말 많아.");
      await you.say_and_wait("네가 모두의 미소를 지켜준 거야.");
      await rice.say_and_wait([self_name, "가...?"]);
      await rice.say_and_wait([
        "정말 그런 거야? ",
        self_name,
        "…… 해냈구나.",
      ]);
      await rice.say_and_wait("모두에게 행복을 전해주는 걸 해냈어!!");
      await you.say_and_wait(['ありがとう、', rice.name]);
      await rice.say_and_wait("으와아아앙——");
      await era.printAndWait([
        "어깨를 들썩이며 울음을 터뜨린 ",
        rice.sex,
        "에게 관객들이 따뜻한 박수를 보내주었다.",
      ]);
      era.drawLine({ content: "위닝 라이브 무대" });
      await rice.say_and_wait("흡…… 하아……");
      await you.say_and_wait("이제 울지 않는구나.");
      await rice.say_and_wait("헤헤, 계속 울고 있을 순 없으니까.");
      await rice.say_and_wait("이 무대에서 모두에게 웃음을 제대로 전달해 드려야 하니까.");
      await rice.say_and_wait([
        "그럼 ",
        self_name,
        ", 무대에 올라갈게. 모두가 기다리는 곳으로.",
      ]);
      await rice.say_and_wait('いってきます');
      await rice.say_and_wait("응!");
      await era.printAndWait([
        "이날, ",
        rice.get_colored_name(),
        "는 최고의 라이브를 관객들에게 선사했다.",
      ]);
      await era.printAndWait([
        '翌日、新聞の一面に',
        rice.sex,
        'の顔写真が載った。',
      ]);
      await era.printAndWait([
        "——언덕길 잔디 위에 피어난 주인공, 아름다운 장미: ",
        rice.get_colored_name(),
        '。',
      ]);
      era.drawLine({ content: "그 후" });
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        "는 ",
        arim_kin,
        '！！',
      ]);
      await you.say_and_wait("벌써 새로운 목표를 정한 거야?");
      await rice.say_and_wait(['うん！だって、あの！次の ', arim_kin]);
      await rice.say_and_wait([call_26, "와 ", call_13, "도 참가하신대!!"]);
      await rice.say_and_wait(["그러니까 ", self_name, "도 참가할래!"]);
      await rice.say_and_wait("『최고의 레이스』를 하고 싶어!!");
      await you.say_and_wait("알겠어.");
      await rice.say_and_wait(["와아! 고마워, ", callname, '！']);
      await era.printAndWait([arim_kin, "은 ", takz_kin, "과 마찬가지였다."]);
      await era.printAndWait([
        "둘 다 팬들 사이에서 인기가 많은 ",
        rice.uma_sex_title,
        "만이 참가할 수 있는 레이스다.",
      ]);
      await era.printAndWait([
        "그런 참가 조건을 의식하지도 않은 채, ",
        rice.sex,
        "가 자연스럽게「참가하고 싶다」고 말하게 된 것이다.",
      ]);
      await era.printAndWait("그것은 즉——");
      era.printButton("「많이 컸구나.」", 1);
      await era.input();
      await rice.say_and_wait([
        "엣? ",
        self_name,
        ", 키는 안 컸는데?",
      ]);
      await you.say_and_wait("그런 뜻이 아니야.");
      await rice.say_and_wait("그럼 무슨 뜻이야?");
      await rice.say_and_wait(["아! 알려줘~ ", callname, '——！！']);
      await era.printAndWait([
        "그날 하루 종일, ",
        rice.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 곁을 졸졸 따라다녔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_spr_win
  tenn_spr_win: (() => {
    const title = "빛 속에 머물며";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_13 ライスのマックイーンへの呼び方
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     * @param {PrintedSpan} m_call_r マックイーンのライスへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} b_call_z ブルボンのロブロイへの呼び方
     * @param {PrintedSpan} z_call_b ロブロイのブルボンへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      zob_zoy,
      urara,
      you,
      callname,
      self_name,
      call_13,
      call_52,
      m_call_r,
      b_call_r,
      b_call_z,
      z_call_b,
      u_call_r,
      tenn_spr,
      takz_kin,
    ) => {
      await rice.say_and_wait("하…… 아, 하아……!!");
      await you.say_and_wait("정말 고생 많았어!");
      await rice.say_and_wait(["응! 해냈어! ", self_name, '——']);
      await urara.say_and_wait([u_call_r, "! 대——단해!!"]);
      await rice.say_and_wait([call_52, '！？']);
      await urara.say_and_wait("에헤헤~ 와버렸어~");
      await zob_zoy.say_and_wait("아니예요! 빨리 돌아오세요! 이쪽이에요!");
      await zob_zoy.say_and_wait("비록 우승자의 지인 자격으로 오긴 했지만……");
      await bourbon.say_and_wait([
        "그럼 저도 상관없지 않습니까? 저희는 ",
        b_call_r,
        "의 관계자니까요.",
      ]);
      await bourbon.say_and_wait([
        "멋진 달리기였습니다, ",
        b_call_r,
        ". 우선 축하드립니다.",
      ]);
      await bourbon.say_and_wait([
        "레이스 중의 당신은, ",
        b_call_z,
        "씨가 지어준 『집념의 귀신』이라는 별명이 정말 잘 어울리더군요.",
      ]);
      await rice.say_and_wait("……집념의 귀신?");
      await zob_zoy.say_and_wait(["와, 와아! ", z_call_b, '！！']);
      await zob_zoy.say_and_wait(
        "그 별명은 비밀로 해달라고 제가 말씀드렸잖아요!",
      );
      await rice.say_and_wait("……후후.");
      await rice.say_and_wait([
        "에헤헤…… ",
        self_name,
        "가 레이스를 통해 모두에게 제대로 답을 해준 것 같네.",
      ]);
      await you.say_and_wait("모두를 웃게 해줬어.");
      await rice.say_and_wait("응!");
      await urara.say_and_wait(["아하하하, ", u_call_r, "도 싱글벙글 웃고 있어!"]);
      await urara.say_and_wait("다음 레이스에서도 꼭 웃어줘야 해!");
      await urara.say_and_wait([
        "우리도 열심히 손을 흔들면서 ",
        u_call_r,
        "을 응원할게!",
      ]);
      await rice.say_and_wait(["……그래, ", call_52]);
      await rice.say_and_wait("나도 모두를 향해…… 손을 흔들어 줄게.");
      await rice.say_and_wait("아주 크게…… 모두가 볼 수 있게 말이야!");
      era.drawLine({ content: "무대 뒤" });
      await rice.say_and_wait("……말은 그렇게 했지만, 역시 긴장되네……");
      await rice.say_and_wait([tenn_spr, "의 위닝 라이브 무대에서 센터라니……"]);
      await you.say_and_wait("당당히 가슴을 펴.");
      await mcqueen.say_and_wait([
        "맞는 말이에요. ",
        m_call_r,
        "씨는 저를 이겼으니까요, 그러니 조금 더 자신감을 가지세요.",
      ]);
      await rice.say_and_wait(["아, ", call_13, '！！']);
      await mcqueen.say_and_wait("확실히 이 무대는 특별하죠.");
      await mcqueen.say_and_wait(
        "그러니 이 무대에 서는 우리 또한 프로다워야 합니다.",
      );
      await mcqueen.say_and_wait(
        "현장 공연을 기대하고 있는 분들께 감사의 마음을 표현해야 하지 않겠어요?",
      );
      await rice.say_and_wait("응, 맞아.");
      await mcqueen.say_and_wait("그러니 무대를 두려워하지 마세요.");
      await mcqueen.say_and_wait("기대와 염원에 응답하며 무대 위에서 빛나는 것.");
      await mcqueen.say_and_wait("그것이 경기장을 달리는 우리들의 의무니까요.");
      await era.printAndWait([
        "그 후 ",
        mcqueen.get_colored_name(),
        "은 우아하고 고결하게 무대를 향해 걸어갔다.",
      ]);
      await you.say_and_wait("배울 점이 참 많네.");
      await rice.say_and_wait("응, 역시 정말 멋진 분이야.");
      await rice.say_and_wait([self_name, "도 그런 기대와 염원에 보답해야겠어."]);
      await rice.say_and_wait("모두에 대한 감사의 마음을 담아서 말이야.");
      await rice.say_and_wait(["……좋아! ", self_name, ", 다녀올게!!"]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は輝く舞台へ、',
        rice.sex,
        'の一歩を踏み出した。',
      ]);
      era.drawLine({ content: "그날 밤" });
      await rice.say_and_wait(
        "저기…… 돌아오자마자 이런 말을 하려니 조금 이상하지만……",
      );
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        ", 또 하고 싶은 일이 생겼어.",
      ]);
      await rice.say_and_wait([
        self_name,
        '、期待してくれる人にもっと応えたいです',
      ]);
      await rice.say_and_wait(["그래서 다음번에는 ", takz_kin, "에 참가하고 싶어."]);
      await rice.say_and_wait([
        "만약 모두가 ",
        self_name,
        "가 나가도 된다고 해준다면……!",
      ]);
      await era.printAndWait([
        '——',
        takz_kin,
        ", 그것은 오직 팬들에게 사랑받는 ",
        rice.uma_sex_title,
        "만이 오를 수 있는 무대였다.",
      ]);
      await era.printAndWait([
        "……처음엔 학원 밖에서 혼자 울고만 있던 ",
        rice.sex,
        '。',
      ]);
      await era.printAndWait("이제는 그 자격을 갖추게 된 것이다.");
      await you.say_and_wait(["다음엔 ", takz_kin, "에 나가자! "]);
      await rice.say_and_wait([
        "응! ",
        self_name,
        ", 계속 힘낼게.",
      ]);
      await rice.say_and_wait("그리고 모두에게 전하고 싶어——");
      await rice.say_and_wait("정말 고맙다고.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] toky_yus_lose
  toky_yus_lose: (() => {
    const title = "먼 뒷모습";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([self_name, ", 역시 너무 무력했어……"]);
      await rice.say_and_wait("더, 더 많이 노력해서……");
      await era.printAndWait("（툭……）");
      await era.printAndWait([
        rice.get_colored_name(),
        "는 온 힘을 다 소진해버려 긴장이 완전히 풀린 듯하다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "를 부축해서 데리고 돌아가 쉬려고 발걸음을 옮겼다.",
      ]);
      await era.printAndWait("（툭……）");
      await rice.say_and_wait([self_name, ", 정말 바보 같아……"]);
      await rice.say_and_wait("다음에는 꼭 지금보다 더 노력할게.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_win
  toky_yus_win: (() => {
    const title = "따라잡았어";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (rice, bourbon, you, callname, self_name, kiku_sho) => {
      await rice.say_and_wait("하아…… 하아……!!");
      era.printButton("「괜찮아!?」", 1);
      await era.input();
      await rice.say_and_wait("괜찮아, 괜찮아.");
      await rice.say_and_wait(["그보다, ", callname, ", 봤어?"]);
      await rice.say_and_wait([self_name, "가 드디어 따라잡았어!"]);
      await rice.say_and_wait(["에헤헤, 해, 냈어——……"]);
      await era.printAndWait([rice.get_colored_name(), "가 쓰러졌다."]);
      await rice.say_and_wait("후우…… 후우……");
      await era.printAndWait(
        "아무래도 온 힘을 다하느라 팽팽하게 당겨졌던 줄이 갑자기 풀려버린 모양이다.",
      );
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' は',
        rice.sex,
        'を肩に預け、',
        rice.get_colored_name(),
        ' を休ませようと歩き出した、そのとき——',
      ]);
      await bourbon.say_and_wait(['——', rice.sex, "의 발언은 이해할 수 없습니다."]);
      await bourbon.say_and_wait("이번 레이스 내용대로라면 말입니다.");
      await bourbon.say_and_wait([
        rice.sex,
        "는 『부르봉을 이겼다』라고 말해야 정상입니다.",
      ]);
      era.printButton("이 아이에게는 승리보다 그게 더 중요했던 거겠지.", 1);
      await era.input();
      await bourbon.say_and_wait("……이해 불능.");
      era.drawLine();
      await rice.say_and_wait([
        "미, 미안해! ",
        self_name,
        "가 또 ",
        callname,
        "한테 폐를 끼쳤네……!",
      ]);
      era.printButton("「지쳐서 그런 거니 어쩔 수 없지.」", 1);
      await era.input();
      await rice.say_and_wait("하지만……");
      era.printButton("「그보다 다음 레이스를 생각하자.」", 1);
      await era.input();
      await rice.say_and_wait("엣? ……다음 레이스?");
      era.printButton("「클래식 전선은 아직 끝나지 않았어.」", 1);
      await era.input();
      await rice.say_and_wait(["……맞아, ", callname]);
      await rice.say_and_wait(
        "이번 레이스를 요행으로 이긴 것뿐인데, 이걸로 만족해 버리면 안 되겠지.",
      );
      await era.printAndWait([
        "삼관 노선의 마지막 레이스, 잔디 3000m 장거리인 ",
        kiku_sho,
        '。',
      ]);
      await era.printAndWait([
        "스테이어인 ",
        rice.get_colored_name(),
        "에게 있어 그 레이스는 가장 중요한 승부처이다!",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] train
  async train(rice) {
    const buffer = [
      () => rice.say_and_wait("힘낼게……오!"),
      () => rice.say_and_wait("응, 가자!"),
      () => rice.say_and_wait("정말 기대돼……"),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] train_fail
  async train_fail(rice) {
    const buffer = [
      () => rice.say_and_wait("으으……"),
      () => rice.say_and_wait("응……?"),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] ts_add
  ts_add: (() => {
    const title = "추가 자율 트레이닝";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        rice.get_colored_name(),
        "과(와) 함께 트레이닝을 마친 뒤——",
      ]);
      await rice.say_and_wait([
        "어라? ",
        callname,
        ", 아직 안 갔어?",
      ]);
      era.printButton("「내일 트레이닝을 준비해야 해.」", 1);
      era.printButton(`「${rice.name}를 보느라 넋이 나갔었어.」`, 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          callname,
          '……',
          self_name,
          "를 위해 더 일하려는 거야?",
        ]);
      } else {
        await rice.say_and_wait(["우아아아, ", callname, '！']);
      }
      await you.say_and_wait([rice.name, "는 먼저 들어가서 쉬어."]);
      await rice.say_and_wait("……응, 알겠어.");
      await rice.say_and_wait(['おやすみなさい、', callname, '']);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 내일 트레이닝 준비를 마치고 귀가하려던 참에.",
      ]);
      await era.printAndWait([
        "훈련장에서 여전히 달리고 있는 ",
        rice.get_colored_name(),
        "의 실루엣을 발견했다.",
      ]);
      await rice.say_and_wait("하아…… 하아…… 아, 아직……");
      await rice.say_and_wait([self_name, "는 더 할 수 있어, 노력하지 않으면……"]);
      await you.say_and_wait("자율 트레이닝 중이야?");
      await rice.say_and_wait(["아…… ", callname, '']);
      await rice.say_and_wait("들켜버렸네……");
      await rice.say_and_wait([
        callname,
        "가 ",
        self_name,
        "를 위해 노력하고 있으니까. 그렇다면 ",
        self_name,
        "도 더 힘내야지!",
      ]);
      era.printButton("「그럼 조금만 더 같이 트레이닝해 줄게.」", 1);
      era.printButton("「그 마음만으로도 충분히 기뻐.」", 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(["응, 고마워, ", callname, '！']);
      } else {
        await rice.say_and_wait('その気持ちが嬉しいです');
        await rice.say_and_wait([
          "으으…… 하지만 ",
          self_name,
          "도 ",
          callname,
          "에게 도움이 되고 싶은데.",
        ]);
      }
      await era.printAndWait([
        "그 후, ",
        you.get_colored_name(),
        "은(는) 곁에서 ",
        rice.get_colored_name(),
        "의 추가 트레이닝을 지켜보았다.",
      ]);
      era.drawLine({ content: "트레이닝 종료 후" });
      era.printButton("「혼자 돌아가려니 참 쓸쓸하네——」", 1);
      await era.input();
      await rice.say_and_wait("에?");
      await rice.say_and_wait([
        "그 말은…… ",
        self_name,
        "와 같이 가고 싶다는 뜻이야?",
      ]);
      await rice.say_and_wait([
        self_name,
        ", 얼른 옷 갈아입고 올게! 제발 잠깐만 기다려 줘.",
      ]);
      await era.printAndWait([
        "그 후, ",
        you.get_colored_name(),
        "은(는) 옷을 갈아입고 나온 ",
        rice.get_colored_name(),
        "와 함께 집으로 돌아갔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ts_content
  ts_content(rice, attr) {
    era.print([
      rice.get_colored_name(),
      "의 ",
      attr,
      " 트레이닝이 성공적으로 끝났다……",
    ]);
  },

  // [번역 완료] we_15
  we_15: (() => {
    const title = "호수에서 피어나는 꽃";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bakushin サクラバクシンオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} b_call_r バクシンオーのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (rice, bakushin, you, b_call_r, tenn_spr) => {
      await rice.say_and_wait(
        "와아……! 관객분들이…… 정말 많아……! 게다가 다들 눈빛이 반짝거려.",
      );
      await era.printAndWait([
        "이날, ",
        you.get_colored_name(),
        "은(는) ",
        rice.get_colored_name(),
        "와 함께 ",
        tenn_spr,
        "을 관전하며 배우기 위해 경기장을 찾았다. 그 이유는……",
      ]);
      era.drawLine({ content: "1주일 전" });
      await era.printAndWait(
        "턱을 괴고서 거의 위험하게 느껴질 정도의 눈빛으로, 이 모든 광경을 감상하고 있던 것은——.",
      );
      await bakushin.say_as_unknown_and_wait("허아…… 하아……");
      await bakushin.say_as_unknown_and_wait([b_call_r, "…… 잠깐 기다려 주세요……"]);
      await rice.say_and_wait("엣? 무, 무슨 일이야?");
      await bakushin.say_and_wait(
        "아니요, 사실은 아까부터 반장의 사명을 다하기 위해 멋대로 돌진하고 있었습니다.",
      );
      await bakushin.say_and_wait([
        b_call_r,
        "의 지구력은 정말 대단하군요! 그래서, 제안이 하나 있습니다!",
      ]);

      await bakushin.say_and_wait([
        "함께, ",
        tenn_spr,
        "을 보러 가지 않겠습니까?",
      ]);
      await bakushin.say_and_wait([
        "장거리를 제패할 수 있는 속도를 가진 ",
        rice.uma_sex_title,
        "들이 모두 그곳에 모입니다!",
      ]);
      await rice.say_and_wait("함께? 텐노…… 상?");
      await bakushin.say_and_wait("네, 함께 가요!");
      await bakushin.say_and_wait(
        "친구의 숨겨진 힘을 끌어내는 것 또한 반장의 일인 법!",
      );
      await era.printAndWait([
        "과연 ",
        bakushin.get_colored_name(),
        "가 말한 대로였다.",
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        "의 장거리는…… 그야말로 강철 같은 소질을 지니고 있었다.",
      ]);
      await era.printAndWait([
        tenn_spr,
        " 또한 머지않아 ",
        rice.sex,
        "의 목표가 될 무대의 일부가 되리라.",
      ]);
      era.printButton("「교토로 관전하러 가자.」", 1);
      await era.input();
      await bakushin.say_and_wait("신난다! 혼자 가면 너무 외로울 뻔했어요!");
      await bakushin.say_and_wait("참고로, 그곳의 간식은 딱 300엔에 판답니다!");
      await rice.say_and_wait("……왠지, 소풍 가는 기분이라 즐거워.");
      await rice.say_and_wait("에헤헤, 기대돼!");
      await era.printAndWait("다시 현재.");
      await bakushin.say_and_wait("아~! 정말 치열한 추격전이군요!");
      await bakushin.say_and_wait("저는, 좀 더 앞쪽으로 가서 보고 오겠습니다!!");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_47_32
  we_47_32: (() => {
    const title = "여름 합숙 (클래식 시즌) 종료";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (rice, urara, you, u_call_r) => {
      await era.printAndWait([
        "합숙 마지막 날, ",
        rice.get_colored_name(),
        "가 원한 덕분에 마지막까지 훈련이 이어졌다.",
      ]);
      await rice.say_and_wait("하아…… 하아…… 미안해, 늦어버렸어.");
      await urara.say_and_wait([
        "빨리빨리, ",
        u_call_r,
        "! 버스랑 친구들이 다 기다리고 있어!",
      ]);
      await rice.say_and_wait("으…… 응! 금방 갈게!");
      await rice.say_and_wait("다행이야, 너무 늦지 않았어.");
      await you.say_and_wait("모두가 기다려준 덕분이네.");
      await rice.say_and_wait("응! 모두에게 고맙다고 인사해야겠어—");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_14
  we_95_14: (() => {
    const title = "혼자서는 피어날 수 없기에";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} call_47 ライスのロブロイへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} callname_47 ロブロイのプレイヤーへの呼び方
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      zob_zoy,
      you,
      callname,
      self_name,
      call_26,
      call_47,
      b_call_r,
      callname_47,
      z_call_r,
      tenn_spr,
    ) => {
      await era.printAndWait("트레이닝실 안");
      await era.printAndWait("……똑똑");
      await era.printAndWait("조심스러운 노크 소리가 들려왔다.");
      await zob_zoy.say_as_unknown_and_wait([
        "실례합니다…… 저기, ",
        zob_zoy.get_colored_name(),
        "에요.",
      ]);
      await zob_zoy.say_and_wait([z_call_r, "가 어디 갔는지 혹시 아시나요?"]);
      await zob_zoy.say_and_wait([
        "사실 ",
        rice.sex,
        "가 아직 기숙사에 돌아오지 않았거든요. 곧 점호 시간인데……",
      ]);
      await you.say_and_wait("——설마", true);
      era.drawLine({ content: "트레이닝 코스" });
      await rice.say_and_wait("하아…… 하아…… 하아……!");
      await you.say_and_wait([rice.name, '！']);
      await rice.say_and_wait(["엣. ", callname, ", 그리고…… ", call_47, '？']);
      await rice.say_and_wait('……');
      await you.say_and_wait("너무 무리했어.");
      await rice.say_and_wait("미안해, 하지만……");
      await rice.say_and_wait('……');
      await rice.say_and_wait("응, 미안해. 제대로 쉴게.");
      await zob_zoy.say_and_wait('……');
      await zob_zoy.say_and_wait(["저기, ", z_call_r, '！']);
      await zob_zoy.say_and_wait([
        z_call_r,
        "에게 ",
        callname,
        "는 어떤 의미인가요?",
      ]);
      await zob_zoy.say_and_wait(
        'その……いつも優しくて、絵本から出てきた運命の人みたいで',
      );
      await rice.say_and_wait(["히익!? ", call_47, "? 조…… 조용히 해줘……"]);
      await zob_zoy.say_and_wait(
        'まだ静かにできません。それに、私も応援しています',
      );
      await rice.say_and_wait([call_47, '……']);
      await zob_zoy.say_and_wait(
        "고민되는 게 있다면…… 다 같이 이야기해 보는 게 좋다고 생각해요.",
      );
      await rice.say_and_wait('……');
      await you.say_and_wait(["너는 어떻게 생각해, ", rice.name, '？']);
      await rice.say_and_wait("……하지만, 무서운걸……");
      await rice.say_and_wait("의지할 수 있는 누군가가 있다는 건 나도 잘 알아……");
      await rice.say_and_wait([
        "어렵게 ",
        self_name,
        "를 믿고 기대해 주는데, ",
        self_name,
        "가 해내지 못할까 봐.",
      ]);
      await rice.say_and_wait([
        self_name,
        "는, 이제 더 이상 ",
        callname,
        "를 실망시키고 싶지 않은데……",
      ]);
      await era.printAndWait([
        "말을 마친 ",
        rice.teen_sex_title,
        "는 작은 목소리로 흐느끼기 시작했다.",
      ]);
      await you.say_and_wait("그런 생각은 하지 마.");
      await zob_zoy.say_and_wait([
        "맞아요! 저도 그래요! 절대로 ",
        z_call_r,
        "에게 실망하지 않아요!",
      ]);
      await zob_zoy.say_and_wait([
        z_call_r,
        "를 지지하는 다른 분들도 분명 똑같을 거예요.",
      ]);
      await you.say_and_wait("그러니까 더는 혼자서 무리하지 마.");
      await rice.say_and_wait([callname, "…… 으윽…… 으앙……"]);
      await rice.say_and_wait("으아아앙~~!");
      await era.printAndWait([
        rice.get_colored_name(),
        "의 눈에서 커다란 눈물이 둑이 터진 것처럼 쏟아져 내렸다.",
      ]);
      era.drawLine({ content: "다음 날" });
      await zob_zoy.say_and_wait(["아, ", z_call_r, "! 힘내세요."]);
      await rice.say_and_wait("……으, 으으…… 정말 괜찮을까?");
      await zob_zoy.say_and_wait("괘, 괜찮아요!");
      await zob_zoy.say_and_wait([
        "보세요, ",
        callname_47,
        "도 ",
        z_call_r,
        "를 응원하러 왔잖아요.",
      ]);
      await rice.say_and_wait("응.");
      await bourbon.say_and_wait("그러면, 이동을 시작해도 되겠습니까?");
      await rice.say_and_wait(["아! 미안해! ", call_26, "…… 그게, 저기……!"]);
      await rice.say_and_wait(["부디, 꼭 ", self_name, "를 도와주세요!"]);
      await bourbon.say_and_wait("……? 의사소통에 오해가 발생한 것입니까?");
      await rice.say_and_wait([
        "오해 아니에요! 왜냐하면, ",
        call_26,
        "라면 분명 큰 힘이 되어주실 테니까요!",
      ]);
      await rice.say_and_wait("이런 말을 들으면 실망하실지도 모르겠지만……");
      await rice.say_and_wait([
        self_name,
        "는 지금, ",
        call_26,
        "의 도움 없이는 안 돼요!",
      ]);
      await rice.say_and_wait([
        "지금의 ",
        self_name,
        "는 아직 너무 약해서, 이대로라면……",
      ]);
      await rice.say_and_wait("절대로 이길 수 없어요!");
      await rice.say_and_wait([
        'だから ',
        call_26,
        ' に、',
        self_name,
        ' の走りを教えてほしいです！',
      ]);
      await rice.say_and_wait([
        self_name,
        ' にないものを、全部教えてください！',
      ]);
      await bourbon.say_and_wait('……');
      await you.say_and_wait([rice.name, "가 기적을 일으킬 거라고 믿어보자."]);
      await bourbon.say_and_wait("알겠습니다.");
      await bourbon.say_and_wait(
        "이것이 역사상 최고의 레이스를 만들기 위해 필요한 과정이라면.",
      );
      await bourbon.say_and_wait("신청을 수락합니다. 예정된 스케줄을 변경하겠습니다.");
      await bourbon.say_and_wait([
        '午後より第一段階として、',
        self_name,
        ' の坂道10本に参加します',
      ]);
      await bourbon.say_and_wait("목적은 근력과 속도의 향상입니다.");
      await bourbon.say_and_wait(
        "부하가 더 필요할 경우, 특제 모래주머니를 빌려드릴 수 있습니다.",
      );
      await bourbon.say_and_wait(
        'なお、私のトレーニングを『鬼』と呼ぶ者がいます——',
      );
      await bourbon.say_and_wait(["준비되셨습니까? ", b_call_r]);
      await rice.say_and_wait("……응!");
      await era.printAndWait([
        'それから',
        rice.couple_title,
        'は走り始めた。近づく ',
        tenn_spr,
        ' へ向けて——！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_32
  we_95_32: (() => {
    const title = "여름 합숙 (시니어 시즌) 종료";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait("여전히 엄격한 여름 합숙이었다.");
      await era.printAndWait([
        "여름 합숙 마지막 날, ",
        you.get_colored_name(),
        "은(는) 벤치에 앉아 돌아갈 준비를 하는 ",
        rice.get_colored_name(),
        "를 기다리고 있었는데……",
      ]);
      await rice.say_and_wait(["아아아아아~ ", callname, '！']);
      await rice.say_and_wait([
        you.get_colored_name(),
        " 너무 오래 기다리게 해서 정말 미안해……!",
      ]);
      await rice.say_and_wait("휴우…… 여기저기 일손을 돕다 보니 이렇게 늦어버렸어.");
      await you.say_and_wait("일손을 도와?");
      await rice.say_and_wait(
        "응, 여기 합숙소 분들에게 신세를 많이 졌잖아?",
      );
      await rice.say_and_wait([
        self_name,
        "는 꽃에 물도 주고…… 벤치에 페인트도 새로 칠하고——",
      ]);
      await you.say_and_wait("벤치에 페인트?");
      await rice.say_and_wait([
        "응! 바로, ",
        callname,
        "가 지금 쉬고 있는 그 벤치야——",
      ]);
      await you.say_and_wait('……');
      await rice.say_and_wait([callname, '？']);
      await era.printAndWait("쩌적!!");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 허겁지겁 자리에서 일어났지만, 이미 옷에는 끈적한 페인트가 잔뜩 묻어 있었다.",
      ]);
      await rice.say_and_wait([
        "미, 미안해! 전부 다 ",
        self_name,
        "가 안내문을 붙여놓지 않아서……",
      ]);
      await rice.say_and_wait([
        "와아아아…… 어떡해, ",
        callname,
        ". 으앙~~",
      ]);
      await you.say_and_wait("다시 새로 칠하면 돼.");
      await rice.say_and_wait("으으…… 정말 미안해.");
      await rice.say_and_wait("관리인분께도 사과드리러 가야겠어.");
      await rice.say_and_wait("그리고, 페인트도 빌려와야겠고.");
      await era.printAndWait([
        rice.get_colored_name(),
        "와 함께 관리인분의 일손을 도왔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = "새해 포부";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} bakushin サクラバクシンオー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     */
    const f = async (
      rice,
      bourbon,
      bakushin,
      urara,
      you,
      callname,
      self_name,
      call_52,
    ) => {
      await era.printAndWait([
        "올해부터는 클래식 레이스에 도전하게 된다. ",
        you.get_colored_name(),
        "이(가) 정보 수집을 위해 TV 프로그램을 시청하고 있을 때—",
      ]);
      await you.say_as_passer_by_and_wait(
        'テレビ',
        "자, 이번 클래식 전선은 아주 흥미로운 얼굴들이 모이고 있군요.",
      );
      await you.say_as_passer_by_and_wait('テレビ', [
        "단거리에서 적수가 없는 ",
        bakushin.get_colored_name(),
        '、',
        rice.get_colored_name(),
        "도 출주 명단에 이름을 올렸습니다만 역시——",
      ]);
      await you.say_as_passer_by_and_wait('テレビ', [
        bourbon.get_colored_name(),
        ' は外せません。なんといっても未来の三冠',
        rice.uma_sex_title,
        '候補ですから！',
      ]);
      await rice.say_and_wait([
        "새해 복 많이 받아, ",
        callname,
        '',
      ]);
      era.printButton(`「${rice.name}！？」`, 1);
      await era.input();
      await rice.say_and_wait(["응. ", self_name, "야."]);
      await rice.say_and_wait([
        "헤헤, 새해 인사를 하러 왔는데, ",
        you.get_colored_name(),
        "에게 폐를 끼친 걸까?",
      ]);
      era.printButton("「전혀 그렇지 않아.」", 1);
      await era.input();
      await rice.say_and_wait("아…… 다행이다.");
      await rice.say_and_wait([
        "에헤헤, 들어봐. 오늘 아침에 ",
        call_52,
        "이 나한테 말했어.",
      ]);
      era.drawLine({ content: "아침" });
      await urara.say_and_wait("새해니까 슈크림 먹자!");
      await urara.say_and_wait("……슈크림 맛있을까?");
      era.drawLine({ content: "현재" });
      era.printButton("「맛없을 리 있겠어?」", 1);
      await era.input();
      await rice.say_and_wait([
        "후후후, 그렇네. ",
        self_name,
        "도 똑같은 말을 했어.",
      ]);
      await rice.say_and_wait("그리고, 저기……");
      await rice.say_and_wait([
        self_name,
        '、',
        callname,
        "와 함께 새해 포부를 정하고 싶어. 올해의 목표를 이야기하고 싶어서……",
      ]);
      await rice.say_and_wait("안…… 될까?");
      era.printButton("「좋아.」", 1);
      await era.input();
      await rice.say_and_wait("헤헤, 신난다! 어떤 목표를 세우는 게 좋을까?");
      await rice.say_and_wait([callname, "는 어떤 목표를 세우고 싶어?"]);
      era.printButton(`「반드시 ${rice.name}를 클래식에서 우승시킬 거야.」`, 1);
      await era.input();
      await rice.say_and_wait([callname, '……！']);
      await rice.say_and_wait([
        '……',
        self_name,
        "도 똑같이 올해의 목표를 세워도 될까?",
      ]);
      era.printButton("「물론이지.」", 1);
      await era.input();
      await rice.say_and_wait([
        self_name,
        "는 라이스랑 ",
        callname,
        "의 목표를 이루기 위해서 열심히 노력할게!",
      ]);
      era.printButton("바로 그 기세야! (근성 +10)", 1);
      era.printButton("건강도 잘 챙겨야 해. (스태미나 +10)", 2);
      era.printButton("함께 공부하자. (스킬 포인트 +20)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await rice.say_and_wait("응! 당장 이루기는 힘들지도 모르지만.");
          await rice.say_and_wait(["하지만 ", self_name, "는 절대 포기하지 않을 거야."]);
          await era.printAndWait([
            rice.get_colored_name(),
            "는 그렇게 새로운 결의를 다졌다.",
          ]);
          break;
        case 2:
          await rice.say_and_wait("아와와…… 레이스 전에 감기라도 걸리면 큰일이지.");
          await rice.say_and_wait([
            "게다가 만약 ",
            self_name,
            "가 쉬게 되면, ",
            callname,
            "의 훈련 계획도——",
          ]);
          await rice.say_and_wait("아우우우, 항상 건강을 유지해야 해!");
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 당황하며 혼자 고민에 빠진 ",
            rice.get_colored_name(),
            "를 달래며, 앞으로의 계획을 세우기 시작했다.",
          ]);
          break;
        case 3:
          await rice.say_and_wait("응!");
          await rice.say_and_wait(["왠지 ", callname, ", 선생님 같아."]);
          await rice.say_and_wait(
            "후후…… 오늘 수업도 잘 부탁해…… 선생님.",
          );
          await era.printAndWait([
            "그 후 ",
            you.get_colored_name(),
            "은(는) ",
            rice.get_colored_name(),
            "와 함께 레이스 영상을 보며 연구를 진행했다.",
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = "여름 합숙 (클래식 시즌) 시작";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (
      rice,
      bourbon,
      urara,
      you,
      callname,
      self_name,
      call_52,
      u_call_r,
    ) => {
      bourbon.name = '某サイボーグ' + bourbon.uma_sex_title;
      await era.printAndWait(
        "한층 더 실력을 끌어올리기 위해 강화 훈련이 시작되었다.",
      );
      await rice.say_and_wait("……와아, 어쩌지.");
      await rice.say_and_wait([self_name, "도 합숙에 따라오고 말았어."]);
      await rice.say_and_wait([
        'ほかの',
        rice.uma_sex_title,
        'も、いっぱいいます。',
        self_name,
        ' が不幸を呼んだら——',
      ]);
      era.printButton("「지금 걱정할 건 그게 아니잖아?」", 1);
      await era.input();
      await rice.say_and_wait("……히익! 응! 저기……");
      await rice.say_and_wait("후후, 좋아…… 합숙도 힘낼게.");
      await rice.say_and_wait([self_name, " 파이팅……!"]);
      await rice.say_and_wait('A!A!O!');
      await era.printAndWait([
        "그렇게 ",
        you.get_colored_name(),
        "과(와) ",
        rice.get_colored_name(),
        "가 함께하는 여름 합숙이 시작되었다!!",
      ]);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        rice.get_colored_name(),
        "가 훈련을 마치고 식사하려던 참에—",
      ]);
      await bourbon.say_and_wait("하아…… 하아……!");
      await bourbon.say_and_wait("기록 경신. 이상적인 기록까지 앞으로 5초.");
      await bourbon.say_and_wait("——훈련을 계속합니다.");
      await rice.say_and_wait(["……부탁이야 ", callname, ", 한 번만 더 뛰게 해줘."]);
      era.printButton("「……딱 한 번뿐이야.」", 1);
      await era.input();
      await rice.say_and_wait("응!");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 다시 달려나가는 ",
        rice.get_colored_name(),
        "를 지켜보았다.",
      ]);
      await urara.say_and_wait(["아! ", u_call_r, ", 뛰어갔어!"]);
      await urara.say_and_wait("세상에! 드디어 말을 걸 수 있다고 생각했는데!");
      await era.printAndWait([
        rice.get_colored_name(),
        "가 한 바퀴를 돌고 돌아왔다.",
      ]);
      await rice.say_and_wait(["……엣? ", call_52, '……？']);
      await urara.say_and_wait([
        "안녕! ",
        u_call_r,
        "! 그럼 같이 출발하자.",
      ]);
      await you.say_and_wait("출발!");
      await rice.say_and_wait("엣!? 두 사람 다……!?");
      era.drawLine();
      await rice.say_and_wait(
        "와아! 구운 당근 야키소바, 스태미나 덮밥, 그리고 특대 사과 사탕……!",
      );
      await urara.say_and_wait([
        u_call_r,
        "은 뭐부터 먹고 싶어? 나는 일단 당근 아이스크림이야.",
      ]);
      await rice.say_and_wait([
        "저기, ",
        self_name,
        "는…… 으우우. 어떡하면 좋지…… ",
        callname,
        '……',
      ]);
      era.printButton("에너지가 가득한 스태미나 덮밥! (파워 +10)", 1);
      era.printButton("근성으로 먹어치우자! 특대 사과 사탕! (근성 +10)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait("꼬르륵……");
        await rice.say_and_wait("……꺄아!? 아으으으……");
        await rice.say_and_wait([
          callname,
          "는 어떻게 ",
          self_name,
          "의 배가 텅텅 비었다는 걸 알았어?",
        ]);
        await you.say_and_wait("네가 오늘 정말 열심히 했으니까.");
        await rice.say_and_wait([
          "헤헤, ",
          callname,
          "는 늘 ",
          self_name,
          "를 지켜봐 주는구나.",
        ]);
        await era.printAndWait([
          "그렇게 세 사람은 함께 즐겁게 식사하며, 어느덧 소중한 시간을 보냈다.",
        ]);
      } else {
        await rice.say_and_wait("와아…… 사과 사탕! 정말 먹어도 돼?");
        await rice.say_and_wait([
          self_name,
          "에게 사과 사탕은 최고의 보상이야.",
        ]);
        await rice.say_and_wait(
          "레이스에 나갔을 때나 시험이 끝났을 때, 어머니께서 늘 『오늘도 참 잘했구나』라고 말씀해 주셨거든.",
        );
        era.printButton(`「그럼 오늘 ${rice.name}도 먹어도 돼.」`, 1);
        era.printButton(`「${rice.name}는 언제나 착한 아이니까.」`, 2);
        await era.input();
        await urara.say_and_wait([
          "응응, ",
          u_call_r,
          "이라면 100개를 먹어도 문제없어!",
        ]);
        await rice.say_and_wait("정말?");
        await urara.say_and_wait([
          "그럼그럼! ",
          u_call_r,
          "은 아주 아—주 노력했으니까!",
        ]);
        await rice.say_and_wait([
          "……헤헤, 고마워. ",
          callname,
          '、',
          call_52,
        ]);
        await era.printAndWait([
          "세 사람은 그렇게 즐겁게 식사하며 짧은 휴식 시간을 보냈다.",
        ]);
      }
      bourbon.name = undefined;
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_14
  ws_95_14: (() => {
    const title = "팬 대감사제";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      zob_zoy,
      urara,
      you,
      callname,
      self_name,
      z_call_r,
      u_call_r,
    ) => {
      await era.printAndWait("트레이닝 코스에서");
      await era.printAndWait(
        "이날은 학원을 일반인에게도 개방하여 다양한 행사를 개최한다.",
      );
      await rice.say_and_wait("으으…… 설마 마라톤에 참가하게 될 줄이야!");
      await urara.say_and_wait([
        "괜찮아! ",
        u_call_r,
        "이라면 분명 씩씩하게 완주할 수 있을 거야.",
      ]);
      await zob_zoy.say_and_wait([
        "네. ",
        z_call_r,
        "라면 절대 절대 완주할 수 있으니까요!",
      ]);
      await rice.say_and_wait("아, 아니야. 저기, 그런 문제가 아니라……!");
      era.drawLine();
      await era.printAndWait([
        "결국 ",
        mcqueen.get_colored_name(),
        "이 멋지게 1위로 골인했다.",
      ]);
      await era.printAndWait([
        "기대를 모았던 ",
        rice.get_colored_name(),
        "는…… 끈질기게 뒤를 쫓았으나 2위에 머물렀다.",
      ]);
      await zob_zoy.say_and_wait([z_call_r, ", 수고했어요!"]);
      await urara.say_and_wait([
        "응응, ",
        u_call_r,
        "은 정말 대단해! 2등 했으니까 같이 축하하러 가자!",
      ]);
      await rice.say_and_wait("고, 고마워…… 하지만……");
      await rice.say_and_wait(["지금 ", self_name, "는 도저히……"]);
      await bourbon.say_and_wait('……');
      await rice.say_and_wait("……미안해, 축하는 사양할게.");
      await rice.say_and_wait("다음번엔 꼭 너희들의 기대에 보답할게……!");
      await urara.say_and_wait(["엣, 잠깐만, ", u_call_r, '！']);
      await bourbon.say_and_wait('……');
      era.drawLine({ content: "밤" });
      await era.printAndWait([
        rice.get_colored_name(),
        "는 홀로 트레이닝 코스에서 자율 트레이닝을 하고 있었다.",
      ]);
      await rice.say_and_wait("……더 노력해야 해.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_24
  ws_95_24: (() => {
    const title = "꺾이지 않는 장미";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} t_call_m 秋川のたづなへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      minoru,
      taste,
      you,
      callname,
      self_name,
      t_call_m,
      takz_kin,
    ) => {
      await era.printAndWait([takz_kin, "의 개최가 거의 불가능해졌다는——"]);
      await era.printAndWait("그런 분위기가 곳곳에 감돌고 있었다.");
      await rice.say_and_wait('……');
      await rice.say_and_wait(["괜찮아, ", callname]);
      await rice.say_and_wait([self_name, "는 괜찮아."]);
      await era.printAndWait([
        "……그렇게 말하는 ",
        rice.sex,
        "의 미소에는 힘이 없었다.",
      ]);
      await era.printAndWait("역시 그 일 때문일 것이다——");
      await rice.say_and_wait(["미, 미안해, ", callname, '！']);
      await era.printAndWait([
        rice.get_colored_name(),
        "는 메시지를 확인하더니 급히 트레이닝실을 뛰쳐나갔다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 뒤를 쫓아 서둘러 계단을 뛰어 올라갔다.",
      ]);
      await era.printAndWait([
        "마침내 ",
        rice.get_colored_name(),
        "의 목소리가 들리는 곳에 도착했다.",
      ]);
      await taste.say_and_wait("진정! 하나씩 차근차근 말하게나……");
      await rice.say_and_wait([
        self_name,
        '、阪神のスタッフにも！京都のスタッフにもお願いしました！',
      ]);
      await rice.say_and_wait(["그러니까—— 제발 ", takz_kin, "을 개최해 주세요!"]);
      await you.say_and_wait([rice.name, '！？']);
      await taste.say_and_wait([
        "경악!? ",
        you.actual_name,
        " 트레이너 자네도 왔는가!!",
      ]);
      await rice.say_and_wait(["엣!? ", callname, '？']);
      await you.say_and_wait("대체 이게 어떻게 된 거야?");
      await rice.say_and_wait([
        '……',
        self_name,
        "는 이사장님께 부탁드리러 왔어.",
      ]);
      await rice.say_and_wait([
        '……',
        takz_kin,
        "이 교토 경기장에서 개최될 수 있도록……",
      ]);
      await taste.say_and_wait("재차! 오늘뿐만 아니라 어제 저녁에도 찾아왔었네.");
      await taste.say_and_wait("냉정! 해야 할 일이 산더미라네.");
      await taste.say_and_wait("침착! 우선은 연락망을 확보하는 것이——");
      await rice.say_and_wait([
        "알고 있어요! 그래서 ",
        self_name,
        "는 한신 쪽 사람들과 교토 쪽 사람들 모두에게 연락을 취했어요!",
      ]);
      await rice.say_and_wait(
        "폐가 될지도 모르고 어려울지도 모르지만, 부디 도와주세요!",
      );
      await rice.say_and_wait(
        "나를 응원해 주는 분들을 위해서라면 내가 할 수 있는 모든 것을 다 하고 싶어요.",
      );
      await minoru.say_and_wait(
        "아, 오래 기다리셨습니다! 드디어 허가가 내려왔어요!",
      );
      await taste.say_and_wait([t_call_m, "!!! 기대~"]);
      await minoru.say_and_wait([
        "네! 이번 ",
        takz_kin,
        "은 교토 경기장에서 개최하기로 결정되었습니다!",
      ]);
      await rice.say_and_wait("……그럼!");
      await minoru.say_and_wait(
        "맞아요. 한신과 교토, 두 경기장의 관계자분들이 긴밀하게 협력해주셨기에",
      );
      await minoru.say_and_wait("개최가 가능해진 것입니다!");
      await minoru.say_and_wait(
        "어느 쪽 관계자분들도 반드시 전력을 다하겠다고 말씀하셨어요.",
      );
      await minoru.say_and_wait(['……', self_name, "씨를 위해서 말이죠."]);
      await rice.say_and_wait('……！！');
      era.drawLine({ content: "트레이닝실로 돌아온 뒤" });
      await rice.say_and_wait("으으…… 다행이다……");
      await rice.say_and_wait("개최할 수 있게 되었네……");
      await you.say_and_wait("모두를 위해 정말 많이 노력했구나.");
      await rice.say_and_wait("응…… 응……!");
      await rice.say_and_wait("이번 일을 위해 힘써주신 모든 분들을 위해서.");
      await rice.say_and_wait([
        self_name,
        "를 응원해 주는 모든 분들을 위해서……!",
      ]);
      await rice.say_and_wait([self_name, "는 모두가…… 웃어줬으면 좋겠어……!"]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_29
  ws_95_29: (() => {
    const title = "여름 합숙 (시니어 시즌) 시작";
    /** @param {CharaTalk} rice ライスシャワー */
    const f = async (rice) => {
      await era.printAndWait("오늘부터 다시 여름 합숙이 시작되었다.");
      await rice.say_and_wait("에헤헤…… 시끌벅적하네.");
      await rice.say_and_wait("이런 기분…… 오랜만이야.");
      await rice.say_and_wait("그때로부터 벌써 1년이나 지났구나……");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_41
  ws_95_41: (() => {
    const title = "팬레터";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([self_name, "에게 팬레터가 왔어……"]);
      await you.say_and_wait("잘됐네.");
      await rice.say_and_wait("응……!");
      await rice.say_and_wait("하지만……");
      await era.printAndWait([
        "기뻐 보이던 ",
        rice.get_colored_name(),
        "의 표정이.",
      ]);
      await era.printAndWait("왠지 모르게 불안하게 변했다.");
      await you.say_and_wait("왜 그래?");
      await rice.say_and_wait(["……가끔 ", self_name, "는 그런 생각을 해."]);
      await rice.say_and_wait([self_name, "를 응원해 줘서."]);
      await rice.say_and_wait("이분들이 불행해지기라도 하면 어떡하나 하고——");
      await rice.say_and_wait([self_name, "는 그러고 싶지 않은데……"]);
      await rice.say_and_wait("생각하고 싶지 않은데 자꾸만……");
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        "는 어떻게 하면 좋을까?",
      ]);
      await you.say_and_wait("팬레터의 내용을 한번 읽어보자.");
      await rice.say_and_wait("내용을…… 응.");
      era.println();
      await you.say_as_unknown_and_wait([
        "경기장에서 ",
        rice.get_colored_name(),
        "가 노력하는 모습이 저에게 큰 용기를 주었어요……",
      ]);
      await you.say_as_unknown_and_wait([
        '……',
        rice.get_colored_name(),
        "의 미소를 보면……",
      ]);
      await you.say_as_unknown_and_wait("……언제든 따뜻함을 느낄 수 있습니다.");
      era.println();
      await rice.say_and_wait([self_name, "가 노력하는 모습……"]);
      await rice.say_and_wait([self_name, "의 미소……"]);
      await rice.say_and_wait("……그렇구나.");
      await rice.say_and_wait("그걸 보고 기뻐해 주는 분들이 계시는구나.");
      await rice.say_and_wait([callname]);
      await rice.say_and_wait([self_name, ", 계속, 계속 노력할게……!"]);
      await rice.say_and_wait([
        self_name,
        "를 응원해 주는 분들이 기쁨을 느끼실 수 있도록!",
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        "의 눈동자에 의욕의 불꽃이 타오르는 듯했다!",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_48
  ws_95_48: (() => {
    const title = "기자 회견";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      you,
      callname,
      self_name,
      b_call_r,
      arim_kin,
    ) => {
      await era.printAndWait([arim_kin, "이 다가온 어느 날."]);
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        rice.get_colored_name(),
        "는 공동 인터뷰에 참석했다.",
      ]);
      await rice.say_and_wait("에, 에엣……!?");
      await rice.say_and_wait([self_name, "가 가운데야?"]);
      await you.say_as_passer_by_and_wait("스태프A", [
        "그럼요! 인기 투표 1위인 ",
        rice.uma_sex_title,
        " 이시니까요!",
      ]);
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "중앙은 주인공의 자리니까요!",
      );
      await rice.say_and_wait("하지만…… 오늘 라이스는—");
      await bourbon.say_and_wait([b_call_r, ", 신속하고 당당하게 응답하세요."]);
      await bourbon.say_and_wait("촬영 뒤에 인터뷰도 예정되어 있습니다.");
      await mcqueen.say_and_wait("후후, 맞아요.");
      await mcqueen.say_and_wait("주인공이 없으면 시작할 수 없으니까요.");
      await bourbon.say_and_wait(
        "네. 그리고 당신은 【사상 최고의 레이스를 보게 될 것】이라고 선언하겠죠, 맞습니까?",
      );
      await mcqueen.say_and_wait("어머! 그 정도까지인가요?");
      await mcqueen.say_and_wait("후후…… 그거 참 기대되는군요.");
      await rice.say_and_wait("으으~~ 다들 눈빛이 무서워……");
      await you.say_and_wait("주인공이 된다는 건 쉬운 일이 아니네.");
      await rice.say_and_wait(["으으…… ", callname, "까지 그러기야……"]);
      await era.printAndWait([
        "회견이 끝나고…… 열심히 노력한 ",
        rice.get_colored_name(),
        "를 격려하기 위해 거리로 나섰다.",
      ]);
      await rice.say_and_wait("으으…… 긴장돼서 죽는 줄 알았어.");
      await you.say_and_wait("정말 고생 많았어.");
      await rice.say_and_wait(
        "응…… 설마 그 두 사람 사이에 끼게 될 줄은 몰랐거든.",
      );
      await rice.say_and_wait(["저기, ", callname]);
      await rice.say_and_wait("어떤 선물을 받고 싶어?");
      await rice.say_and_wait([
        self_name,
        '、',
        callname,
        "에게 보답하고 싶어.",
      ]);
      await rice.say_and_wait("그러니까, 어떤 선물을 주는 게 좋을까?");
      await rice.say_and_wait([
        '……',
        self_name,
        "가 할 수 있는 건 적지만.",
      ]);
      await you.say_and_wait("네가 노력하는 모습을 보고 싶어.");
      await rice.say_and_wait("그거면…… 되는 거야?");
      await you.say_and_wait("물론이지!");
      await rice.say_and_wait(['……', callname]);
      await rice.say_and_wait("안 돼.");
      await rice.say_and_wait(["겨우 그런 거라면 ", self_name, "는 싫어!"]);
      await rice.say_and_wait("노력하는 건 당연한 거니까.");
      await rice.say_and_wait([
        "——그러니까, 반드시 ",
        arim_kin,
        "에서 1등을 해서 ",
        callname,
        "에게 선물로 줄 거야!",
      ]);
      await rice.say_and_wait([
        "그건 분명 오직 ",
        self_name,
        "만이 줄 수 있는 선물일 테니까.",
      ]);
      await era.printAndWait("결국 휴식은커녕,");
      await era.printAndWait("이 크리스마스 이브는 오히려 정신을 더욱 고양시켰다.");
      await rice.say_and_wait([callname, ", 오늘도 고마워!"]);
      await rice.say_and_wait([arim_kin, "이 시작되면, ", callname, "와 여러분 모두를."]);
      await rice.say_and_wait([self_name, "의 달리기로 반드시 행복하게 해줄게!"]);
      await era.printAndWait([
        "그렇게 ",
        rice.get_colored_name(),
        "는 가벼운 발걸음으로 앞서 나갔다.",
      ]);
      await era.printAndWait([
        "처음 만났을 때보다 훨씬 늠름해진 뒷모습을, 이제는 ",
        you.get_colored_name(),
        "이(가) 뒤쫓을 차례였다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_6
  ws_95_6: (() => {
    const title = "발렌타인";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        "오늘도 ",
        you.get_colored_name(),
        "은(는) 평소처럼 트레이닝실에서 업무를 보고 있었다……",
      ]);
      await rice.say_and_wait("……저, 저기, 이거……");
      await rice.say_and_wait([
        callname,
        ", 초콜릿 좋아해? 받으면 기쁠까?",
      ]);
      await era.printAndWait("「초콜릿」이라는 말을 듣고 나서야 떠올랐다.");
      await era.printAndWait("……그러고 보니 오늘은 발렌타인데이였다.");
      await you.say_and_wait("기쁘게 받을 거야.");
      await rice.say_and_wait("정말! 그렇다면……");
      await era.printAndWait([
        "그 말을 남기고 ",
        rice.get_colored_name(),
        "는 달려나갔다.",
      ]);
      era.drawLine({ content: "잠시 후" });
      await era.printAndWait("쿵!!", { fontSize: '1.875rem' });
      await era.printAndWait([
        "……책상 위에 산더미처럼 ",
        rice.get_colored_name(),
        "가 가져온 초콜릿이 쌓였다.",
      ]);
      await rice.say_and_wait(
        "……많이 준비했어. 단것부터 쌉쌀한 것, 견과류가 든 것과 딸기가 든 것까지.",
      );
      await rice.say_and_wait(["——그러니까 하나 골라봐, ", callname, '！']);
      await you.say_and_wait("고르라고?");
      await rice.say_and_wait("응. 싫어하는 맛을 먹게 하고 싶지 않아서.");
      await rice.say_and_wait("그래서 여러 종류를 만들었어. 분명……");
      await rice.say_and_wait(["이 중에 ", callname, "가 좋아하는 맛이 하나쯤은 있을 거라고 생각해서."]);
      await era.printAndWait([
        rice.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 입맛에 맞추기 위해 여러 종류의 초콜릿을 직접 만든 모양이다.",
      ]);
      await rice.say_and_wait("엣…… 왜 그래?");
      await rice.say_and_wait("설마 이 중에 좋아하는 게 없어?");
      await you.say_and_wait("전부 다 받아도 될까?");
      await rice.say_and_wait("엣!? 배탈 날 텐데!?");
      await you.say_and_wait("괜찮아.");
      await rice.say_and_wait("정말…… 괜찮겠어……?");
      await era.printAndWait([
        rice.get_colored_name(),
        "는 걱정스러운 눈빛으로 ",
        you.get_colored_name(),
        "을(를) 바라보았다.",
      ]);
      await you.say_and_wait([self_name, "의 마음을 전부 다 받고 싶으니까."]);
      await rice.say_and_wait("……으읏!");
      await rice.say_and_wait("왠지 기뻐……");
      await rice.say_and_wait(
        "하지만 그러면 초콜릿을 더 많이 만드는 게 좋았을까.",
      );
      await rice.say_and_wait([
        callname,
        "를 향한 마음은 고작 이 정도로는 부족하거든.",
      ]);
      await era.printAndWait([
        "그 후 ",
        you.get_colored_name(),
        "과(와) ",
        rice.get_colored_name(),
        "는 달콤한 발렌타인 데이를 보냈다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_beginning
  ws_beginning: (() => {
    const title = "육성 개시";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, bourbon, you, self_name) => {
      await era.printAndWait("훈련장");
      await rice.say_and_wait("트레이닝 시간까지 조금 남았네……");
      await rice.say_and_wait("……조금만 달려볼까.");
      await rice.say_and_wait([
        "에헤헤…… ",
        self_name,
        ", 환호성 속에서 경기장에 입장합니다—",
      ]);
      await you.say_as_passer_by_and_wait(`${rice.uma_sex_title}A`, "와아아아!!!");
      await rice.say_and_wait("엣!?");
      bourbon.name = '実力者の' + bourbon.uma_sex_title;
      await bourbon.say_and_wait("하아…… 하아……!");
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}A`,
        "또 기록을 경신했어!",
      );
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}A`,
        "이걸로 내년 클래식 전선의 주역은 확실해졌네!",
      );
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}B`,
        "맞아…… 정말 멋진 달리기였어. 저기, 저 실례지만……",
      );
      await bourbon.say_and_wait("……아직 예정된 스케줄이 남아 있습니다. 실례하겠습니다.");
      await era.printAndWait([bourbon.get_colored_name(), "는 달려나갔다."]);
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}들`,
        "아~~ 잠깐만요~~!",
      );
      await rice.say_and_wait("……대단해. 경기장 주변에 구경하는 사람들도 가득해……");
      await rice.say_and_wait([
        "……지금 ",
        self_name,
        "가 저기서 뛰면 방해만…… 되겠지.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        rice.get_colored_name(),
        "가 함께 트윙클 시리즈를 향해 도전하는 나날이 시작되었다!",
      ]);
      bourbon.name = undefined;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_palace
  ws_palace: (() => {
    const title = "옛날 옛적 어느 곳에……";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '「最初の三年」は',
        rice.uma_sex_title,
        'にとってとても大切で、',
        rice.get_colored_name(),
        ' はそのあいだに、まばゆい成績を残した。',
      ]);
      await era.printAndWait([rice.sex, "는 이로 인해 세상의 인정을 받게 되었다."]);
      await rice.say_and_wait("시상식……?");
      await you.say_and_wait("모두를 만나러 가자.");
      await rice.say_and_wait([
        "……응. ",
        self_name,
        "도 모두에게 직접 감사 인사를 드리고 싶어.",
      ]);
      await era.printAndWait([
        "——그리하여 다음 날, ",
        you.get_colored_name(),
        "과(와) ",
        rice.get_colored_name(),
        "는 한신 경기장을 찾았다.",
      ]);
      await rice.say_and_wait("사람이 정말 많네…… 오늘은 레이스도 없는데.");
      await you.say_as_passer_by_and_wait("관객A", [
        "와아! ",
        rice.get_colored_name(),
        "가 왔다! 꺄아아~ 너무 귀여워~!",
      ]);
      await you.say_as_passer_by_and_wait("관객B", [
        "수고했어~ ",
        rice.get_colored_name(),
        "! 오늘도 잘 부탁해~!",
      ]);
      await rice.say_and_wait("어…… 어라?");
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "두 분, 오랜만입니다.",
      );
      await rice.say_and_wait("오랜만이에요. 그런데…… 대체 이게 어떻게 된 일인가요?");
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "아, 원래는 저희 스태프들끼리만 모여서, ",
      );
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "소박하게 축하 파티를 열려고 했는데, 그게……",
      );
      await you.say_as_passer_by_and_wait("관객C", [
        rice.get_colored_name(),
        "~! 여기 좀 봐줘~!",
      ]);
      await you.say_as_passer_by_and_wait("스태프A", [
        "보시는 대로, 많은 관객분이 ",
        rice.get_colored_name(),
        " 씨를 꼭 보고 싶어 하셨거든요.",
      ]);
      era.printButton(`모두가 ${rice.name}를 제일 좋아하니까.`, 1);
      await era.input();
      await rice.say_and_wait("우와아? 제, 제일 좋아한다니……");
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "아하하, 말씀하신 대로입니다.",
      );
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "그래서 예정된 계획을 변경하여 관계자분들의 협조를 얻어……",
      );
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "시상식을 일반 관객분들도 참여할 수 있는 축제로 만들었습니다.",
      );
      await rice.say_and_wait([
        "그럼 이분들 모두 오직 ",
        self_name,
        "를 위해서……",
      ]);
      await you.say_as_passer_by_and_wait("스태프A", "네, 그렇습니다.");
      await you.say_as_passer_by_and_wait(
        "스태프A",
        "그날 끝마치지 못했던 일을 여기서 마무리해 주시겠습니까?",
      );
      era.drawLine();
      await rice.say_and_wait("저기, 여러분 안녕하세요.");
      await rice.say_and_wait([
        "오늘 이렇게 많은 분이 오직 ",
        self_name,
        "를 위해 와줘서 정말 고마워요.",
      ]);
      await rice.say_and_wait([
        self_name,
        "는 이렇게 행복한 풍경을 본 적이 없어요.",
      ]);
      await rice.say_and_wait("라이스는 지금, 정말로 행복해요.");
      await rice.say_and_wait([self_name, "는 이제 울지 않을 거예요."]);
      await rice.say_and_wait([
        "오늘은 ",
        self_name,
        "가 여러분의 눈을 보며 말하고 싶어요.",
      ]);
      await rice.say_and_wait([
        "만약 혼자였다면 ",
        self_name,
        "는 지금처럼 성장하지 못했을 거예요.",
      ]);
      await rice.say_and_wait("그저 어두운 자신만의 세계에 웅크리고 있었겠죠.");
      await rice.say_and_wait([
        "하지만 ",
        self_name,
        "는 이제 혼자가 아니에요.",
      ]);
      await rice.say_and_wait([
        self_name,
        ' がここに立てるのは、',
        you.sex,
        'のおかげです',
      ]);
      await rice.say_and_wait([
        self_name,
        "에게 빛을 주시고, ",
        self_name,
        "가 머물 곳을 주셨어요……",
      ]);
      await rice.say_and_wait("여러분, 정말로 고마워요!");
      await rice.say_and_wait([
        "그러니 부디 앞으로도 ",
        self_name,
        "를 응원해 주세요……!!",
      ]);
      await you.say_as_passer_by_and_wait("관객들", "와아아아아아아아아——");
      era.drawLine({ content: "돌아가는 버스 안에서" });
      await rice.say_and_wait([
        'ありがとう、',
        callname,
        '。全部、あなたのおかげです',
      ]);
      await you.say_and_wait(['よくがんばったな、', rice.name]);
      await rice.print_and_wait([
        'こうして、ずっと自分をダメだと思っていた',
        rice.child_sex_title,
        'は、誰かの青い薔薇になった。',
      ]);
      await rice.print_and_wait("그림책과는 다르게, 때로는 불행한 일도 생기겠지만……");
      await rice.print_and_wait([
        "하지만 ",
        rice.sex,
        "는 모두에게 행복을 전하고 싶다는 희망을 품고, 스스로를 아름답게 피워낼 것이다.",
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        "는 세상에서 가장 사랑하는 사람 곁에서 그렇게 기도했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_stay
  ws_stay: (() => {
    const title = "수면 부족";
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     */
    const f = async (rice, you, callname) => {
      await rice.say_and_wait("하~ 암……");
      era.printButton("잠을 설쳤어?", 1);
      await era.input();
      await rice.say_and_wait("엣!?");
      await rice.say_and_wait(["아, 다행이다, ", callname, '～']);
      await rice.say_and_wait("사실 어제 자기 전에 무서운 책을 읽었거든.");
      await rice.say_and_wait('そしたら机の上のぬいぐるみの向きが気になって');
      await rice.say_and_wait("시계 초침 소리도 평소보다 엄청 크게 들리는 것 같고……");
      await rice.say_and_wait("결국 사소한 게 전부 신경 쓰여서 잠을 하나도 못 잤어……");
      await rice.say_and_wait("하아~");
      await era.printAndWait([
        "아무래도 ",
        rice.get_colored_name(),
        "는 수면 부족인 모양이다.",
      ]);
      await era.printAndWait("푹 잘 수 있으면 좋으련만.");
    };
    f.title = title;
    return f;
  })(),
};
