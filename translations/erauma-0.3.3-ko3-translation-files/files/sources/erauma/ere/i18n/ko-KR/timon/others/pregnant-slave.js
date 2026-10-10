// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * Partial Korean reuse from EraUmaK 2.21.
 * Only scenes with confirmed structural matches are overridden here.
 * Unmatched/new 3.113 scenes inherit from ja-JP.
 */
/**
 * @file 孕袋関連イベント
 * @author 幽白書
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  setColor,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { akuochi, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const { degeneration_to_evil } = require("#/i18n/ko-KR/snippets");
const ja = require('#/i18n/ja-JP/timon/others/pregnant-slave');
const ko = Object.create(ja);

Object.assign(ko, {
  work(you, uma, sex, they, slave) {
    print(["【오늘도 ", you.get_colored_name(), "은(는) ", slave, "의 업무를 요구받았다】"]);
    const buffer = [
      () => {
        print([you.get_colored_name(), "은(는) 경기장의 대기실로 끌려가, 시합에서 패배한 ", uma, "들을 위로하게 되었다."]);
        print(["대기실 문이 닫히자마자 ", you.get_colored_name(), "의 입으나 마나 한 옷은 완전히 찢겨나갔고, 신체는 격렬한 육봉의 충격에 끊임없이 몸부림쳤다."]);
        print([uma, "들은 패배의 슬픔을 마음껏 발산하며, ", you.get_colored_name(), "의 몸 위에 수많은 손톱 자국과 잇자국을 남겼다……"]);
      },
      () => {
        print([you.get_colored_name(), "은(는) 경기장의 대기실로 이끌려가, 멋진 레이스를 펼쳐준 ", uma, "들을 위로하게 되었다."]);
        print(["다른 이들보다 먼저 우승한 ", uma, "가 뛰어들어왔고, ", you.get_colored_name(), "을(를) 쓰러뜨리기 전에 인사까지 건네는 여유를 보였다."]);
        print([sex, "는 웃으며 허리를 흔들었고, ", you.get_colored_name(), "의 자궁 속에 오줌과 함께 정액을 사정했다……"]);
      },
      () => {
        print(["업무를 하러 가기 전, ", you.get_colored_name(), "은(는) 화장실에 들르기로 했다."]);
        print(["볼일을 보기도 전에, 대여섯 개의 육봉이 ", you.get_colored_name(), "의 앞길을 가로막았다."]);
        print([you.get_colored_name(), "은(는) 억지로 오줌을 참으며 ", uma, "님들에게 봉사해야 했고, 이내 백탁액 속에서 격렬한 실금을 선보였다……"]);
      },
      () => {
        print([you.get_colored_name(), "은(는) 무척 사이가 좋아 보이는 ", uma, " 한 쌍에게 지명받았다."]);
        print([they, "들은 육봉을 세운 채, 앞뒤로 ", you.get_colored_name(), "의 하반신을 범했다."]);
        print(["이중의 강렬한 자극 아래, ", you.get_colored_name(), "은(는) 익숙한 질내사정의 감각과 함께 성대한 절정을 맞이하며 의식을 잃었다……"]);
      },
      () => {
        print([you.get_colored_name(), "은(는) ", uma, "의 출주식에 참여하라는 요구를 받았다."]);
        print(["행사의 일환으로, ", uma, "들은 줄을 서서 안팎으로 ", you.get_colored_name(), "의 모든 음탕한 구멍을 사용할 준비를 하고 있었다."]);
        print(["매 순간 한 개에서 세 개에 달하는 육봉이 체내를 들락날락했고, 완전히 채워지기도 전에 ", you.get_colored_name(), "은(는) 이미 혼이 빠져나갈 듯한 쾌감을 느꼈다……"]);
      },
      () => {
        print([you.get_colored_name(), "은(는) 훈련장에서 함께 훈련하던 ", uma, "를 접대했다."]);
        print([sex, "는 ", you.get_colored_name(), "의 옷을 발가벗기고, 얼룩덜룩해진 하반신은 신경 쓰지도 않은 채 단숨에 쑤셔 넣었다."]);
        print([uma, "가 피스톤질을 하며 매일 훈련 전에 담당에게 하루 치의 재고를 듬뿍 주입받는 거냐고 나지막이 묻는 와중에, "]);
        print([you.get_colored_name(), "은(는) 의식을 잃었다……"]);
      },
      () => {
        print([you.get_colored_name(), "은(는) 업무를 하러 가는 길에 초등부 ", uma, "에게 가로막혔다."]);
        print(["거절할 틈도 없이, 아직 앳된 ", uma, "는 나이와는 전혀 어울리지 않는 거대한 육봉을 꺼내 들었다."]);
        print(["개조된 신체의 본능에 굴복한 채, ", you.get_colored_name(), "은(는) 반항하는 척 초등학생에게 바닥에 눕혀져 음혈에 거물이 들락거리는 감각을 만끽했다……"]);
      },
    ];
    if (
      get('talent:0:泌乳') > 0 &&
      get('cflag:0:胸围') - get('cflag:0:下胸围') >= 20
    ) {
      buffer.push(() => {
        print([you.get_colored_name(), "은(는) ", uma, "들에게 형틀에 묶였고, 몸을 앞으로 숙인 채 구멍 뚫린 나무판자에 머리와 손, 그리고 거대한 유방이 고정되었다."]);
        print([you.get_colored_name(), "의 신체는 ", they, "들에게 마음껏 유린당했고, 특히 유방은 세게 짓눌려 새하얀 모유를 뿜어냈다."]);
        print([uma, "들은 조를 나누어 번갈아 가며 구멍을 범하고 젖을 짰으며, 마지막에야 비로소 ", you.get_colored_name(), "의 가슴과 얼굴에 일제히 정액을 사정했다……"]);
      });
    }
    get_random_entry(buffer)();
  },
  // 한국어 작업 모듈 연결: punish_first
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} taste 秋川やよい / キタサンブラック
     * @param {CharaTalk} minoru 駿川たづな / ライスシャワー
     */
    const f = async (you, taste, minoru) => {
      await you.say_and_wait(["으으……윽……으아……"]);
      println();
      await printAndWait([
        "트레센 학원 내에는, 평소에 늘 사람의 발길이 닿지 않는 곳이 있다.",
      ]);
      await printAndWait(["건초더미가 가득 쌓여 있고, 울타리로 둘러싸인 어느 한구석."]);
      await printAndWait([
        "무언가 동물을 기르기 위한 장소처럼 보이지만, 정작 이곳에서 생물이 활동한 흔적은 한 번도 보이지 않았다.",
      ]);
      await printAndWait(["이곳은 무얼 하는 곳일까?"]);
      await printAndWait([you.get_colored_name(), "도 한때 의문을 품은 적이 있었다."]);
      println();
      await printAndWait([
        "이제야, ",
        you.get_colored_name(),
        "은(는) 이곳이 도대체 무얼 하는 장소인지 확실히 알게 되었다.",
      ]);
      println();
      await taste.say_as_unknown_and_wait([
        "징벌! 임신주머니로서 책무를 회피하다니, 엄벌에 처해야 마땅하네!",
      ]);
      await minoru.say_as_unknown_and_wait([
        "본래 임신주머니가 되는 것 자체가 가장 무거운 형벌이었습니다만…… 트레센과 ",
        taste.uma_sex_title,
        "의 미래를 위해 이바지하는 동시에, 트레이너 씨가 자신의 잘못을 깊이 반성하기를 바랐건만. 아무래도 아직 약효가 부족했던 모양이네요.",
      ]);
      println();
      await printAndWait(["두 사람의 말이 끝나기 무섭게,"]);
      await printAndWait([
        'すでに二人に使われ、白い液がまだ細く流れている、赤く腫れた ',
        you.get_colored_name(),
        ' の秘部へ、新しい客が来た。',
      ]);
      const ret = await degeneration_to_evil('服従する', '屈しない', false);
      await printAndWait([
        "안대와 재갈이 채워진 ",
        you.get_colored_name(),
        "은(는) 들어온 이가 누구인지 알 길이 없었다.",
      ]);
      await printAndWait([
        "목소리라도 들으려 애써보지만, 노이즈 캔슬링 헤드폰으로 막혀버린 두 귀로는 설령 ",
        taste.uma_sex_title,
        "의 그 뛰어난 청력이라 할지라도 체내에서 울리는 소리밖에 들을 수 없었다.",
      ]);
      println();
      await printAndWait(["쮸웁…… 쨔읍……"]);
      println();
      await printAndWait(["끈적하게 얽히는 육체의 충돌음,"]);
      await printAndWait([
        "그리고 마치 등 뒤의 육봉이 떠나가는 것을 아쉬워하는 듯한, 질 입구가 빨아당기는 입맞춤 소리.",
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            'そのちゅ、という音は大きく、',
            you.get_colored_name(),
            ' は、この肉棒こそ体の支配者だと思いかけた——不思議ではない。今夜、一本が入るたびに、',
            you.get_colored_name(),
            ' は同じことを考えていた。',
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            'そのちゅ、という音は大きく、',
            you.get_colored_name(),
            ' は、この肉棒こそ体の支配者だと思いかけた——',
            you.get_colored_name(),
            ' はそう思いたくなかったが、薬で昏い頭は、その事実を受け入れさせた。',
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(["철퍽…… 철퍽……"]);
      println();
      await printAndWait(["모든 방어는 언젠가 무너지기 마련이다."]);
      await printAndWait([
        "그렇다면, 방어란 오직 파괴되기 위해 존재한다는 등식도 대개 성립하는 셈이다.",
      ]);
      await printAndWait([
        "그러므로 내숭을 떨며 굳게 닫혀 있던 좁은 보지는, 분명 ",
        taste.uma_sex_title,
        "님의 웅장한 육봉에 정복감을 선사하기 위해 일부러 차갑게 굴었던 것이 틀림없다. 육봉 님이 닿는 순간 기다렸다는 듯 착 달라붙어 정숙한 여인에서 음탕한 암캐로 완벽하게 돌변하는 모습과, 조여들 때마다 새어 나오는 살소리는 그 자체로 이 몸의 주인이 품은 진심을 대변하고 있었다.",
      ]);
      await printAndWait([
        "속으로는 임신하고 싶어서, 미치도록 임신하고 싶어서 안달이 났으면서. 겉으로는 짐짓 고결한 트레이너인 척 내숭을 떨었던 것은, 오직 ",
        taste.uma_sex_title,
        "님이 자신을 탐하실 때 한층 더 짜릿한 정서적 충족감을 만끽하게 해드리기 위함이었을 터.",
      ]);
      await printAndWait([
        'そのせいで、',
        taste.uma_sex_title,
        'さまの精子に犯され、自分がどれほど卑しい雌かを教えられる機会を失った。なんと損なことか。',
      ]);
      println();
      await printAndWait([
        "다행히도, 자비로우신 ",
        taste.uma_sex_title,
        "님께서는 어리석은 임신주머니에게 다시금 기회를 베풀어 주신다.",
      ]);
      println();
      await printAndWait(["쿵, 쿵…… 콕, 콕……"]);
      println();
      await printAndWait([
        "자궁경부를 정중하게 두드리는 육봉은, 마지막 관문이 스스로 무너지기를 느긋하게 기다리고 있다.",
      ]);
      await printAndWait([
        "온몸의 모든 장기, 모든 조직, 모든 세포가 이미 철저하게 굴복해 버린 지금.",
      ]);
      await printAndWait([
        "지금의 충돌음은 최후의 방어선을 뚫기 위한 돌격이라기보다, 그저 형식적인 문노크에 가까웠다.",
      ]);
      await printAndWait([
        "저항? 임신주머니의 육체가 어떻게 감히 ",
        taste.uma_sex_title,
        "님의 침범에 저항할 수 있겠는가? 그것은 이미 유전자 깊은 곳에 각인된 절대적인 법칙이다.",
      ]);
      println();
      await printAndWait(["마침내, 가장 기다려온 소리가 찾아온다."]);
      await printAndWait([
        "아아, ",
        you.get_colored_name(),
        "은(는) 자신도 모르게 다리를 더욱 넓게 벌렸다.",
      ]);
      await printAndWait([
        "어느샌가 ",
        you.get_colored_name(),
        "을(는) 교배대에 결박하고 있던 가죽 벨트가 풀려 있었다.",
      ]);
      await printAndWait(["애초에 이런 구속 벨트 따위는 아무런 의미가 없었다."]);
      await printAndWait([
        "세상에 어떤 임신주머니가 감히 ",
        taste.uma_sex_title,
        "님의 육봉에 반항하겠는가?",
      ]);
      await printAndWait([
        "어떤 임신주머니가 감히 ",
        taste.uma_sex_title,
        "님의 하사품을 거부하겠는가?",
      ]);
      println();
      await printAndWait(["드디어, 레이스를 달릴 때보다 훨씬 더 심장이 요동치고, 첫사랑보다 더 격렬하게 마음을 뒤흔드는,"]);
      await printAndWait([
        taste.uma_sex_title,
        "님의 유린이 대단원의 막을 내리려 하고 있다.",
      ]);
      println();
      await printAndWait(["퓨퓻…… 푸루루루룹……"]);
      println();
      await printAndWait(["온다."]);
      await printAndWait(["바로 이것이다."]);
      await printAndWait([you.get_colored_name(), "은(는) 가슴 깊이 확신했다."]);
      await printAndWait(["이것이야말로 자신의 자궁 속으로 들어가,"]);
      await printAndWait(["원래 그곳의 주인이었던 난자를 철저히 굴복시키고,"]);
      await printAndWait([
        "납작 엎드려 절하고, 발을 핥으며, 모체의 모든 것을 바쳐서라도 아첨해야 마땅할 ",
        taste.uma_sex_title,
        "님의 고귀한 교배 정액이다.",
      ]);
      await printAndWait(["정액이 끊임없이 울컥울컥 뿜어져 나와,"]);
      await printAndWait([
        you.get_colored_name(),
        ' の体の隅々を蹂躙し、犯していく。',
      ]);
      await printAndWait(["이것이 바로 임신주머니로서 누리는 최상의 행복이구나."]);
      println();
      await printAndWait(["——————"]);
      println();
      await printAndWait(["안타깝게도, 즐거운 시간은 영원히 지속되지 않는다."]);
      await printAndWait(["아무리 길고 격렬한 사정이라도 끝은 있는 법."]);
      await printAndWait([
        "여전히 절정과 수태의 기쁨에 도취해 있는 고작 쓰레기 같은 임신주머니의 뇌보다도, 육봉 님과 직접 맞닿아 있는 질벽이 훨씬 더 조급하게 기둥을 감싸 쥐며 제발 떠나지 말아 달라고 애원하고 있었다.",
      ]);
      await printAndWait(["아니, 적어도…… 상대의 형상만이라도 기억해 두고 싶어서."]);
      await printAndWait([
        "…………설령 그것이, 단 5초 뒤 다음 육봉이 사정없이 꽂혀 들어올 때 허망하게 지워질 기억일지라도.",
      ]);
      println();
      await printAndWait(
        '【精液に灌がれ、妖しいピンクの光を帯びた淫紋が、そっと形を変えた】',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: '임신주머니 직무의 징벌' }];
    return f;
  })(),
  // 한국어 작업 모듈 연결: punish
  punish: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {string} uma_sex_title
     * @param {boolean} is_teammate
     */
    const f = async (you, uma_sex_title, is_teammate) => {
      await printAndWait(["쮸웁…… 쨔읍……"]);
      println();
      await printAndWait(["또다시 깊어가는 밤, 익숙한 장소로 돌아왔다."]);
      await printAndWait([
        you.get_colored_name(),
        "은(는) 다시 한번 안대와 재갈을 착용했고, 익숙한 밤의 막이 또다시 올랐다.",
      ]);
      await printAndWait([
        "임신주머니로서의 의무와 책임을 계속 회피하면 또다시 이곳으로 끌려오게 된다는 걸 뻔히 알면서도,",
      ]);
      await printAndWait([
        '担当も、学園の生徒も先生も、この「一手間」なら喜んで手伝ってくれるとわかっていた。',
      ]);
      await printAndWait([
        "그 단계에서 멈추었더라면 적어도 제 아이의 아버지가 누가 될지 스스로 선택할 기회라도 있었을 텐데.",
      ]);
      if ((await degeneration_to_evil('服従する', '屈しない')) === 1) {
        await printAndWait([
          "그러니 굳이 이 막다른 길을 자처한 ",
          you.get_colored_name(),
          "의 목적은 보나 마나 뻔하지 않은가.",
        ]);
        await printAndWait([
          "그날의 질퍽했던 정사를 잊지 못해서, 자신의 모든 것이 타인에게 완벽히 지배당하던 그 쾌감을 잊지 못해서.",
        ]);
        await printAndWait([
          "그저 순수한 성욕 처리 도구로 전락해 버리던 그 감각을 잊지 못하는 것이다.",
        ]);
      } else {
        await printAndWait([
          'だから、ここまで来た ',
          you.get_colored_name(),
          ' の末路も、明らかだろう——',
          you.get_colored_name(),
          ' はぼんやりと考えた。',
        ]);
        await printAndWait([
          'あの日の交わりを忘れられないのか。すべてを他人に握られる快感を忘れられないのか。',
        ]);
        await printAndWait(['それとも、性処理の道具として扱われる感覚か。']);
        await printAndWait(['——薬で熱を持った耳元に、そんな囁きが聞こえる。']);
      }
      setColor();
      println();
      await printAndWait(["구뉵"]);
      await printAndWait([
        "묵직하게 짓눌러오는 고통과 그보다 더한 쾌감이 유두를 통해 ",
        you.get_colored_name(),
        "의 뇌리로 사정없이 흘러들었다. 앗, 안 되지. 봉사하는 도중에 딴청을 피우다니?",
      ]);
      if (is_teammate) {
        await printAndWait([
          'だが、後ろの',
          uma_sex_title,
          'さまの肉棒には、どこか見覚えがある。',
        ]);
        await printAndWait([
          "보통이라면 별문제가 되지 않을 터였다. 어차피 임신주머니 신세인 만큼 학원의 모든 ",
          uma_sex_title,
          "가 자신을 마음껏 탐했을 테니까.",
        ]);
        await printAndWait(["하지만…… 이 지독하리만치 친숙한 촉감은,"]);
        await printAndWait(["설마, 등 뒤의 ", uma_sex_title, "가 다름 아닌 자신의 담당인 것인가?"]);
        await printAndWait(["서로 신분을 완전히 숨긴 채, 오직 육체만으로 담당에게 유린당한다."]);
        await printAndWait([
          "어째선지 ",
          you.get_colored_name(),
          "은(는) 마치 현장에서 간통을 들킨 것마저 같은 짜릿한 긴장감…… 그리고 주체할 수 없는 흥분에 휩싸였다.",
        ]);
        await printAndWait(["분명 엄청나게 화가 났겠지, 머리끝까지 분노가 치밀었겠지,"]);
        await printAndWait(["자신의 트레이너이자, 자신의 성노예이자, 자신의 임신주머니가,"]);
        await printAndWait([
          "정작 제 아이는 배려 하지 않으면서, 누구인지도 모를 무리에게 무참히 윤간당하는 길을 택했으니.",
        ]);
      } else {
        await printAndWait([
          "그러나 등 뒤에서 박아대는 ",
          uma_sex_title,
          "님의 육봉은 어째선지 유독 조급하고 거칠었다.",
        ]);
        await printAndWait([
          "보통이라면 별문제가 되지 않을 터였다. 어차피 임신주머니이자 배설용 도구에 불과하니, 아무리 난폭하게 다루어진다 한들 당연한 처사였으니까.",
        ]);
        await printAndWait(["하지만…… 이토록 다급하다 못해 분노마저 느껴지는 감각은,"]);
        await printAndWait([
          "설마, 등 뒤의 ",
          uma_sex_title,
          "가 나를 동경하던 팬이란 말인가?",
        ]);
        await printAndWait(["정체를 숨긴 채, 오직 성욕의 분출구로서 팬에게 범해진다."]);
        await printAndWait([
          "어째선지 ",
          you.get_colored_name(),
          "은(는) 마치 불륜 현장이라도 들킨 듯한 기묘한 긴장감…… 그리고 깊은 흥분을 느꼈다.",
        ]);
        await printAndWait(["분명 엄청나게 화가 났겠지, 몹시 분노하고 있겠지."]);
        await printAndWait(["우러러보던 트레이너가, 그토록 동경하던 대상이,"]);
        await printAndWait([
          "이토록 천박한 몰골로 추락해, 어린 ",
          uma_sex_title,
          "의 순수한 연심을 무참히 짓밟고 있으니.",
        ]);
      }
      println();
      await printAndWait(["정말 화가 나겠지, 분노가 치밀겠지."]);
      await printAndWait([
        "그러니 이 아무에게나 가랑이를 벌리는 걸레 암돼지의 깊은 곳에 사정없이 씨를 뿌려,",
      ]);
      await printAndWait([
        "암돼지의 헐거운 보지를 완전히 작살내고 임신시키고, 임신시키고, 또 임신시켜서,",
      ]);
      await printAndWait(["기필코 제 육봉의 비참한 노예로 길들여 버리고 싶을 것이다."]);
      println();
      if (is_teammate) {
        await printAndWait([
          "거기까지 생각이 미치자, ",
          you.get_colored_name(),
          "의 허리는 더욱 격렬하고 요염하게 흔들리기 시작했다.",
        ]);
        await printAndWait([
          "얼마 지나지 않아, 그 육봉이 잠시 빳빳하게 굳어지더니 ",
          you.get_colored_name(),
          "가 그토록 고대하던 하얀 정액을 거침없이 뿜어냈다.",
        ]);
        await printAndWait(["아아…… 정말 아쉬워라,"]);
        await printAndWait([
          "어떤 아련한 허탈감이 ",
          you.get_colored_name(),
          "의 가슴속에 스쳤지만,",
        ]);
        await printAndWait([
          "이내 밀려 들어오는 다음 육봉의 묵직한 감각이 또다시 ",
          you.get_colored_name(),
          "의 정신을 아득하게 만들어, 쓸데없는 잡념 따위는 모두 날려버렸다.",
        ]);
        println();
        await printAndWait([
          "다음번 아이만큼은, 반드시 내가 사랑하는 ",
          uma_sex_title,
          "의 씨로 배어야지.",
        ]);
        await printAndWait([
          "의식이 흐릿해지는 와중에도 ",
          you.get_colored_name(),
          "은(는) 지켜질지조차 알 수 없는 다짐을 마음속으로 속삭였다.",
        ]);
      } else {
        await printAndWait([
          "거기까지 생각이 미치자, ",
          you.get_colored_name(),
          "의 허리는 더욱 격렬하고 요염하게 흔들리기 시작했다.",
        ]);
        await printAndWait(["하지만 너무 거세게 몰아붙이느라 방심했던 탓일까,"]);
        await printAndWait(["아니면 그저 타이밍이 절묘하게 맞아떨어진 것뿐일까."]);
        await printAndWait([
          "이제 막 제대로 달아오르려던 찰나, 등 뒤의 육봉이 잘게 떨리더니 보지 깊은 곳에 엄청난 양의 하얀 정액을 쏟아내 버렸다.",
        ]);
        await printAndWait(["아아…… 정말 아쉬워라,"]);
        await printAndWait([
          "기묘한 공허함과 실망감이 ",
          you.get_colored_name(),
          "의 가슴속에 가득 피어올랐다.",
        ]);
        await printAndWait([
          "하지만 이내 사정없이 밀려드는 다음 육봉의 감각이 또다시 ",
          you.get_colored_name(),
          "의 머릿속을 새하얗게 비워버려 더는 무의미한 생각을 이어갈 수 없게 만들었다.",
        ]);
        println();
        await printAndWait(["다음번에는 좀 더 분발해 줘야 해."]);
        await printAndWait([
          "방금 사정된 정액이 한층 더 사나운 다음 육봉에 의해 허망하게 긁혀 나오는 감각을 생생히 느끼며, ",
          you.get_colored_name(),
          "은(는) 마음속으로 조용한 응원을 건넸다.",
        ]);
      }
      println();
      await printAndWait(
        '【精液に灌がれ、妖しいピンクの光を帯びた淫紋が、そっと形を変えた】',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: '임신주머니 직무의 징벌' }];
    return f;
  })(),
});

module.exports = ko;

module.exports = {
  ...module.exports,

  // [번역 대상] be_awake_as_slave
  async be_awake_as_slave(chara, child, you, callname_c) {
    await printAndWait(['夜半、', you.get_colored_name(), ' は飛び起きた']);
    await printAndWait('孕袋である以上、眠りの時間も務めを忘れてはならない');
    await printAndWait('ただ、今夜の客が少し特殊なだけだ');
    println();
    await printAndWait([
      you.get_colored_name(),
      ' は、前と後ろで違うリズムの衝撃を受けていた',
    ]);
    await printAndWait([
      child.get_colored_name(),
      ' は ',
      callname_c,
      ' と低く呼びながら腰を揺らし、突くたびに ',
      you.get_colored_name(),
      ' のいちばん奥へ届く',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' はベッドに跪き、自分の子に獣のような姿勢で犯される感覚を、恥ずかしさとともに味わった',
    ]);
    await printAndWait(
      '母としての矜持——そんなものがあったとして——は、いま完全に消えた',
    );
    await printAndWait([
      '雌犬のように尻を揺らし、いじめられたい様子は、口で奉仕している ',
      chara.get_colored_name(),
      ' の笑いものにもなった',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' は口の肉棒をより深く含み、濃い匂いのなかへ顔を埋めて現実から逃れた',
    ]);
    println();
    await printAndWait([
      'ほどなく、',
      chara.get_colored_name(),
      ' と ',
      child.get_colored_name(),
      ' は濃い精を放った',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' は口の精を吐き、手に塗り、指を秘部へ入れてゆっくり掻き混ぜ、溢れた白濁をもう一方の手で掬って飲み込んだ',
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        ' の精と ',
        child.get_colored_name(),
        ' の精が混ざる。どちらが先に孕ませるのだろう？',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' は想像に耽り、目の前の ',
        chara.get_colored_name(),
        ' と ',
        child.get_colored_name(),
        ' の肉棒が、その仕草で再び起き上がっているのに気づかなかった',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' の仕草を見て、',
        chara.get_colored_name(),
        ' と ',
        child.get_colored_name(),
        ' の肉棒は再び起き上がった',
      ]);
    }
    await printAndWait('夜は、まだ続く……');
  },

  // 한국어 작업 모듈 연결: have_baby_dedicate
  have_baby_dedicate: (() => {
    const title = '新しい命';
    /**
     * 孕袋が自ら身を捧げて子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' は子を抱き上げた——']);
      const ret = await degeneration_to_evil('歓びを思い出す', '母性が湧く');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、胸に激しいものが湧いた',
        ]);
        await printAndWait([
          'これは ',
          you.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' が結ばれて生まれた子だ',
        ]);
        await printAndWait('……違う。結ばれたのではない');
        await printAndWait([
          you.get_colored_name(),
          ' の遺伝子が自ら服し、',
          father.get_colored_name(),
          ' の遺伝子の下に跪いて生まれた産物だ',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' の体は、相性に抗えず、遺伝子の奥の渇望に抗えない',
        ]);
        await printAndWait([
          'この子の顔を見て、',
          you.get_colored_name(),
          ' の胸はさまざまな慈しみでいっぱいになる',
        ]);
        await printAndWait([
          'そこに見える ',
          father.get_colored_name(),
          ' の影の一つひとつが、強く容赦のない甘い侵犯を何度も思い出させる',
        ]);
        await printAndWait([
          'この子を連れて外へ出る絵を思うと、自分が ',
          father.get_colored_name(),
          ' の専属孕袋である証明を持ち歩いているようで……',
        ]);
        await printAndWait([you.get_colored_name(), ' の下は、思わず震えた']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、胸に波が立った',
        ]);
        await printAndWait([
          'これは ',
          you.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' が結ばれて生まれた子だ',
        ]);
        await printAndWait('違う。結ばれたのではない');
        await printAndWait([
          father.get_colored_name(),
          ' の遺伝子が ',
          you.get_colored_name(),
          ' の遺伝子を侵して生まれた産物だ',
        ]);
        await printAndWait([
          'この体に生まれつきの奴隷性に抗いがたい。心底では受け入れられず、嫌悪していても、改造された体は子のための部屋を自ら開き、',
          father.get_colored_name(),
          ' に種を播かれる準備を整える',
        ]);
        await printAndWait([
          '胸の子を見て、',
          you.get_colored_name(),
          ' は恨むべきだった',
        ]);
        await printAndWait([
          'そこに見える ',
          father.get_colored_name(),
          ' の影の一つひとつが、強く容赦のない侵犯を何度も思い出させる',
        ]);
        await printAndWait([
          'この子を宿した夜、',
          father.get_colored_name(),
          ' の求めで、',
          you.get_colored_name(),
          ' は子犬のように四つん這いになり、精で満たされ、両手が体を支えられなくなるまで続き、',
          father.get_colored_name(),
          ' はやっと肉棒を抜き、',
          you.get_colored_name(),
          ' の口へ入れて終わりにした',
        ]);
        await printAndWait([
          'だが二人の遺伝子はそれほど相性がよかったのか、',
          you.get_colored_name(),
          ' は憎しみきれず、胸に湧いたのは母と呼ばれる感情だけだった',
        ]);
        await printAndWait([
          '——ただ、',
          you.get_colored_name(),
          ' はまだ知らない。この子が育ったあと、その感情は再び遺伝子上の屈服へと変わる……',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // 한국어 작업 모듈 연결: have_baby_in_sleep
  have_baby_in_sleep: (() => {
    const title = '新しい命';
    /**
     * 孕袋が睡姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([you.get_colored_name(), ' は子を抱き上げた——']);
      const ret = await degeneration_to_evil('慈しんで撫でる', '無言で抗う');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' の胸は愛情でいっぱいだった',
        ]);
        await printAndWait('子の父が誰かは、もうどうでもいい');
        await printAndWait([
          'むしろ、孕袋のいつもの仕事をしているだけで、こんなに可愛い子が得られる……',
          you.get_colored_name(),
          ' は心のなかで、顔も知らない父へ礼を言った',
        ]);
        await printAndWait('これから、この子をきちんと育て上げよう……');
        await printAndWait([
          'いつのまにか、かつて ',
          you.get_colored_name(),
          ' の胸にあった、トレーナーとしての責任と誇りが、また芽を出した……',
        ]);
        printButton('「！」', 1);
        await input();
        await printAndWait([
          '突然の水が、',
          you.get_colored_name(),
          ' を幻想から叩き起こした',
        ]);
        await printAndWait('抱き上げた子が、母へ人生最初の尿をかけた');
        await printAndWait([
          '自分の子に便所にされたこと——たとえ偶然でも——に、',
          you.get_colored_name(),
          ' は言いようのない快感を覚えた。この子が自分を便所として使えるように生まれてきたのだ、とさえ思えた',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は優しく子の秘部を舐め、体にかかった液を残らず口へ運び、満足げに指を舐めた',
        ]);
        println();
        await printAndWait('これほど卑しい姿は、最下等の孕袋でもこの程度だ');
        await printAndWait('こんな自分が、元の生活へ戻れるはずがない');
        await printAndWait('そんな生活へ戻ることなど、もう耐えられない');
        await printAndWait([
          you.get_colored_name(),
          ' は胸の子を優しく見ている。表情は変わらない',
        ]);
        await printAndWait('だが、胸のなかはもう違う');
        await printAndWait(
          '————どうすれば、この子を、自分を調教するのにいちばん向いた主人に育てられるだろう？',
        );
      } else {
        await printAndWait(
          'この子へ、理論上は母として持つべき感情が、薄れてしまっている',
        );
        await printAndWait(
          '生まれたばかりの子に罪はないと、わかっているのに……',
        );
        printButton('「！」', 1);
        await printAndWait(['突然、', you.get_colored_name(), ' は声を上げた']);
        await printAndWait([
          '子の最初の尿は、狙いを定めたように噴き、',
          you.get_colored_name(),
          ' の顔を濡らした',
        ]);
        await printAndWait(
          '看護師も善意の笑いをこぼした。子の健康を喜ぶかのように',
        );
        await printAndWait([
          'だが ',
          you.get_colored_name(),
          ' の胸に喜びはなく、頭のなかには過去が蘇る',
        ]);
        println();
        await printAndWait(
          `朝、両脚を開いて蹲り、眠気の残る${father.uma_sex_title}の朝勃ちを口で処理し、一日の初精と初尿を腹へ飲み込んだ経験`,
        );
        await printAndWait(
          `夕方、トレーニング場で練習を終えた${father.uma_sex_title}たちに欲の処理を懇願され、一日分の汗と垢のついた肉棒を口に含み、${father.couple_title}の疲れを口のなかへ吐き出させた経験`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            ' は悲しげに、数日前の夜を思い出した',
          ]);
          await printAndWait([
            '自分の',
            children_count > 0 ? '子' : `担当${father.uma_sex_title}`,
            'が夢遊で部屋へ入り、半睡のなかで秘部を満たしたあと、眠っている唇を無理に開いて掃除したときも、自分は目覚められなかった',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            ' は、この生活に慣れ始めているのではないかと疑い始めた……',
          ]);
          await printAndWait([
            'だめだ、そう思ってはいけない、と ',
            you.get_colored_name(),
            ' は我に返ったように首を振った',
          ]);
        }
        println();
        await printAndWait('……やはり、思い出すのは辛い記憶ばかり。だが……');
        await printAndWait(
          '胸のなかの、何も知らず、母の顔に尿をかけても気にせず、けらけら笑う子を見る',
        );
        await printAndWait('子の天性は、善悪とは無縁だ……');
        await printAndWait('あるいは、まだ機会はある……？');
        println();
        await printAndWait('子が周囲の行いを学ぶ力を、忘れている');
        await printAndWait(
          `孕袋が奉仕する相手が、身分を問わない「すべての${father.uma_sex_title}」であることも、忘れている`,
        );
        await printAndWait(
          '傍らの看護師が、もう孕袋の口奉仕を欲しがっていることにも気づかない',
        );
        await printAndWait(
          '無意識に、実の子がかけた尿を舐め取っていることにも気づかない',
        );
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、看護師のスカートの下の太いものを吸わされても、瞳の光は消えなかった',
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            'また空虚な夢を抱き、',
            you.get_colored_name(),
            ' は今度こそこの子をきちんと育てると決意した',
          ]);
        } else {
          await printAndWait([
            '空虚な夢を抱き、',
            you.get_colored_name(),
            ' はこの子をきちんと育てると決意した',
          ]);
        }
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // 한국어 작업 모듈 연결: morning_duty
  morning_duty: (() => {
    /**
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {string} your_title 現在の肩書（XX性奴隷 / XX孕袋）
     * @param {string} penis_desc 陰茎の形容
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([
        you.get_colored_name(),
        ' は、頬を叩く温もりで目を覚ました。',
      ]);
      if (chara.sex_code === 0) {
        await printAndWait([
          '一晩中 ',
          you.get_colored_name(),
          ' を苛んだ ',
          chara.get_colored_name(),
          ' は、また薬を飲み、わざわざ',
          chara.sex,
          'の高貴な',
          penis_desc,
          '肉棒を目覚ましにした。',
        ]);
      } else {
        await printAndWait([
          '一晩中 ',
          you.get_colored_name(),
          ' を苛んだ ',
          chara.get_colored_name(),
          ' は、またわざわざ',
          chara.sex,
          'の高貴な',
          penis_desc,
          '肉棒を目覚ましにした。',
        ]);
      }
      await printAndWait([
        '——',
        you.get_colored_name(),
        ' に、まだ果たしていない務めがあることを思い出させる。朝から夜まで、同じことの繰り返しだ。',
      ]);
      ret.push(
        await degeneration_to_evil('素直に含む', '嫌そうに顔をそむける'),
      );
      if (ret[0] === 1) {
        await printAndWait([
          '手間をかけるまでもなく、',
          you.get_colored_name(),
          ' が唇を少し開いた瞬間、肉棒は待ちきれずに入ってきた。',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' の好き放題のなか、',
          you.get_colored_name(),
          ' は従順に唇と舌で奉仕した。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ' は、今日も自分の務めを忘れない……',
        ]);
      } else {
        await printAndWait([
          'ここまで落ちても、',
          you.get_colored_name(),
          ' には矜持、少なくとも気位はある——',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' がわずかに顔をそらし、そう主張しようとしたとき、すでに我慢の切れた主人 ',
          chara.get_colored_name(),
          ' は平手打ちを食らわせ、いまの立場を思い出させた。',
        ]);
        await printAndWait([
          'それから ',
          chara.get_colored_name(),
          ' は、',
          you.get_colored_name(),
          ' の協力など期待せず、この朝食を独りで取り始めた。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ' は、今日も務めを叩き込まれた……',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = '翌朝の務め';
    return f;
  })(),

  // [번역 대상] office_study
  async office_study(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' の学業を指導したあと、',
      chara.get_colored_name(),
      ' は頬を赤らめて ',
      you.get_colored_name(),
      ' を見つめた。次は、性教育の時間だ。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' が指導する側なのに、',
      chara.get_colored_name(),
      ' のほうが ',
      you.get_colored_name(),
      ' の体をよく知っている。',
      chara.get_colored_name(),
      ' の手のなかで、',
      you.get_colored_name(),
      ' は自分の敏感な場所と、触れたときの恥ずかしい反応を、否応なく教え込まれた。',
    ]);
  },

  // [번역 대상] oyakodon
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await printAndWait([
        you.get_colored_name(),
        ' は ',
        child.get_colored_name(),
        ' と ',
        father.get_colored_name(),
        ' に、ぴったり挟まれていた。',
      ]);
      await printAndWait([
        '二本の灼熱の肉棒が、',
        you.get_colored_name(),
        ' の前後を同時に攻め、突くたびに新しい快感が走る。',
      ]);
      await printAndWait([
        '朦朧のなか、',
        you.get_colored_name(),
        ' は ',
        child.get_colored_name(),
        ' が生まれたときのことを思い出した——',
      ]);
      await you.used_to_say_and_wait(
        'いつか子が大きくなったら……子と、子の父に一緒に使われ、挟まれて、雄の肉棒に溺れる……',
        true,
      );
      await printAndWait('あの妄想が、いま現実になっている……');
    };
    f.title = '親子丼';
    return f;
  })(),

  // [번역 대상] race_start
  race_start: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await printAndWait([
        `ほかのトレーナーが担当${chara.uma_sex_title}へ最後の言葉をかけているあいだ、`,
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' の肉棒を口に含んでいた。',
      ]);
      await printAndWait([
        'レース前の熱に酔った ',
        chara.get_colored_name(),
        // FLAGNAME:35 = 惩戒力度
        ' の硬い下は当然処理が要る。それも',
        get('flag:35') === 2 ? '性奴隷' : '孕袋',
        'である ',
        you.get_colored_name(),
        ' に欠かせない務めだ。',
      ]);
      await printAndWait([
        '精をすべて飲み込んだあと、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' の肉棒へ、レースの無事を祈る口づけを落とした。',
      ]);
    };
    f.title = 'レースの前に';
    return f;
  })(),

  // [번역 대상] s_a_dating
  async s_a_dating(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の手を引き、中庭へデートに出た。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' は両脚を閉じ、太ももから白い液がゆっくり流れ落ちている。マスクは何かの液に濡れ、口と鼻に張りついていた。発情の匂いに、通りかかった',
      chara.uma_sex_title,
      'たちまで頬を赤らめて鼻を摘まんだ。',
    ]);
  },

  // [번역 대상] s_a_tree_hollow
  async s_a_tree_hollow(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を枯れ木の洞のそばへ連れていった。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ` は、${chara.sex}が最近のストレスを吐き出したいだけだと思った瞬間、切り株へ押し倒された。`,
    ]);
    await printAndWait([
      'それから ',
      you.get_colored_name(),
      ' の下半身の衣がゆっくり剥がれ、熱い肉柱が入り口に当たった。',
    ]);
    await printAndWait([
      '声を出せば、洞の反響で ',
      you.get_colored_name(),
      ' の声が学園中に響くだろう。',
    ]);
    await printAndWait([
      `担当の${chara.uma_sex_title}に枯れ木の洞で犯されたと知れれば、`,
      you.get_colored_name(),
      ' のトレーナーとしての名声は終わりだ……',
    ]);
    await printAndWait('もっとも、そんなものはとうに残っていない。');
    await printAndWait([
      you.get_colored_name(),
      ' は枯れ木の洞のそばで喘いだ。',
      get('flag:35') === 2 ? '性奴隷' : '孕袋',
      'である ',
      you.get_colored_name(),
      ' にとって、これもいつもの一日にすぎない。',
    ]);
  },

  // [번역 대상] school_rooftop
  async school_rooftop(chara, you) {
    await printAndWait([
      '屋上での公開露出……このとき誰かが顔を上げれば、',
      you.get_colored_name(),
      ' は耐えきれないだろう。',
    ]);
    await printAndWait(
      `屋上の下、トレーニング場を走る${chara.uma_sex_title}たち。`,
    );
    await printAndWait(
      '見られたら、きっと果ててしまう。潮が雨のように下の者へ落ちる……',
    );
    await printAndWait([
      'だが、',
      chara.get_colored_name(),
      ' に片脚を上げられ、力の入れようのない体勢の ',
      you.get_colored_name(),
      ' は、屋上の防護ネットに頼るしかなく、鉄線が胸に赤い痕を残した。',
    ]);
    // TALENTNAME:32 = 泌乳
    if (get('talent:0:32') > 0) {
      await printAndWait('ああ、出てしまった……');
      await printAndWait([
        `秘部の潮が溢れるより先に、下の${chara.uma_sex_title}の頭へ落ちたのは、`,
        you.get_colored_name(),
        ' の乳首から細い流れとなって出た乳だった。',
      ]);
    }
  },
  // [번역 완료] report_preg_duty
  report_preg_duty: (() => {
    const title = '직무';
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} edu_count
     * @param {number} children_count
     */
    const f = async (you, father, edu_count, children_count) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 아랫배 음문에 나타난 임신의 문양을 바라보다가 세면대로 달려가 토했다.',
      ]);
      await printAndWait([
        '자신의 계획을 어지럽히는 이 작은 생명에 대해, ',
        you.get_colored_name(),
        ' 은 결심했다——',
      ]);
      const ret = await degeneration_to_evil(
        '기쁘게 아이를 기다린다',
        '어쩔 수 없이 사실을 받아들인다',
      );
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' 은 기쁜 마음으로']);
        await printAndWait('아이가 생긴 뒤의 미래와 태어난 뒤의 교육을 상상했다……');
        await printAndWait([
          '하지만, ',
          you.get_colored_name(),
          ' 의 마음속에서 가장 고민되는 것은 역시',
        ]);
        println();
        await printAndWait('아이의 아버지는 누구일까 하는 점이었다.');
        await printAndWait(
          `며칠 전 레이스에서 지고 분풀이로 온몸에 잇자국을 남겼던 그 ${father.uma_sex_title}일까?`,
        );
        await printAndWait(
          `아니면 레이스에서 이기고 기뻐서 자궁 안에 소변까지 쏟아부었던 그 ${father.uma_sex_title}일까?`,
        );
        if (edu_count > 0) {
          await printAndWait(
            `\n그것도 아니라면, 매일 훈련 시간마다 보지에 하루치 정액을 가득 채워줘서, 복도에 우윳빛 액체를 뚝뚝 흘리며 훈련장까지 가게 만들었던 그 담당 ${father.uma_sex_title}일까?`,
          );
        }
        if (children_count > 0) {
          await printAndWait(
            '\n그것도 아니라면, 기억 속엔 아직 어린아이인데도 마치 엄마 배 속에서 어떻게 나왔는지 기억이라도 하듯, 매번 못난 엄마를 아헤가오 암컷 돼지로 만들어버리는 그 착한 자식일까?',
          );
        }
        println();
        await printAndWait('\n누구든 간에, 새로운 생명의 탄생은 기쁜 일이다.');
        await printAndWait([
          '하지만 역시 ',
          you.get_colored_name(),
          ' 가 가장 걱정하는 것은……',
        ]);
        println();
        await printAndWait('（아이를 낳기 전까지, 임신 주머니로서의 직무……）');
        println();
        await printAndWait([
          '생각을 채 마치기도 전에 뒤에서 전해진 충격이 ',
          you.get_colored_name(),
          ' 의 사고를 끊어놓았다.',
        ]);
        await printAndWait(
          `상대는 그녀의 의사는 안중에도 없었고, 밑이 젖었는지 확인조차 하지 않았다———물론 육체 개조 덕분에 젖었는지 확인할 필요도 없이, 24시간 내내 젖은 상태로 ${father.uma_sex_title} 님을 환영하고 있지만———그는 그대로 삽입했다.`,
        );
        await printAndWait([
          '격렬한 충돌 속에 ',
          you.get_colored_name(),
          ' 를 의식을 잃을 정도로 범한 뒤에야, 뒤에 있던 ',
          father.uma_sex_title,
          ' 는 겨우 사정했고, ',
          you.get_colored_name(),
          ' 의 얼굴에 육봉을 닦고는 그대로 떠났다.',
        ]);
        await printAndWait([
          '그 과정에서 ',
          you.get_colored_name(),
          ' 은 상대의 얼굴조차 알 수 없었다.',
        ]);
        println();
        await printAndWait('\n임신했다는 말은 꺼내지도 못했다.');
        await printAndWait(
          `설령 배가 남산만 하게 불러와도 ${father.uma_sex_title} 주인님에게는 그저 가지고 놀 부위가 하나 더 늘어난 것뿐이겠지.`,
        );
        await printAndWait([
          '그 사실을 깨달은 ',
          you.get_colored_name(),
          ' 는 아래가 다시 한번 경련하며 억제할 수 없는 조수를 뿜어냈고, 햇빛 아래 만들어진 무지개는 마치 그녀의 임신을 축하하는 듯했다.',
        ]);
      } else {
        await printAndWait('딱히 놀랄 일도 아니었다.');
        await printAndWait(
          '———매일 화장실에 갈 때조차 대여섯 개의 육봉에 가로막혀, 결국 조수와 정액, 그리고 실금한 소변이 섞인 바닥을 스스로 깨끗이 핥아 치워야 하는 삶에서, 임신이 그렇게 상상하기 힘든 일일까?',
        );
        println();
        await printAndWait('아이의 아버지는 누구일까?');
        await printAndWait([
          you.get_colored_name(),
          ' 은 다시 한번 생각했다——',
        ]);
        await printAndWait(
          `어제 사이좋게 임신 주머니를 공유하던 그 두 명의 ${father.uma_sex_title}일까?`,
        );
        await printAndWait(
          '아니면 자신의 앞에서 출정식을 하던 팀원 중 누군가가, 모든 구멍에 정액을 가득 채워 숨결에서조차 진한 정액 냄새가 나게 했던…… 마지막에 몸에 묻은 정액을 하나하나 핥아 삼키고 보지에 밀어 넣었을 때——그때 임신한 것일지도 모른다.',
        );
        println();
        await printAndWait([
          '어느덧 ', 
          you.get_colored_name(),
          ' 의 마음속에는 아이의 미래에 대한 막연한 공포와 두려움이 피어올랐다.',
        ]);
        if (children_count > 0) {
          await printAndWait(
            `그 아이의 어린 시절이 엊그제 같은데, 어느새 성인이 된 ${father.sex}은(는) 순진했던 눈망울을 지운 채 자신을 낳아준 구멍을 성욕 어린 눈으로 바라보는 짐승이 되어 있었다`,
          );
          await printAndWait([
            you.get_colored_name(),
            ' 은 자신이 다시 한번 성인이 된 아이에게 유린당해 차마 어머니라 부를 수 없는 수치스러운 모습이 되지 않을까 두려워졌다.',
          ]);
        } else {
          await printAndWait(
            `태어날 이 아이도 훗날 성인이 되면 다른 ${father.uma_sex_title}들처럼 나를 그저 임신 주머니로 취급하게 될까……`,
          );
          await printAndWait(
            '……안 돼, 직무를 다해야 해. 적어도 이 아이만큼은 제대로 훌륭하게 키워내야 해.',
          );
        }
        println();
        await printAndWait('임신 주머니에 의해 길러진 아이가 정말 제대로 된 어른이 될 수 있을까?');
        await printAndWait(
          `매일같이 자신의 엄마가 온갖 ${father.elder_sibling_sex_title}들에게 범해져 침을 흘리며 품위 없이 용서를 구하는 모습을 보며`,
        );
        await printAndWait('그런 아이가 정말 굴하지 않고 꿋꿋하게 자라날 수 있을까?');
        await printAndWait('하지만 비웃을 처지도 아니었다.');
        await printAndWait([
          '지금도 화장실을 지나가던 ',
          father.uma_sex_title,
          '에게 바닥에 깔려 육봉을 수발들고 있는 ',
          you.get_colored_name(),
          ' 는, 그저 그런 희박한 희망에 기댈 수밖에 없었다.',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] have_baby_after_raped
  have_baby_after_raped: (() => {
    const title = '새로운 생명';
    /**
     * 孕袋が強姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' 은(는) 아이를 품에 안았다——']);
      const ret = await degeneration_to_evil(
        '아이에게는 아빠가 필요해',
        '아니, 나 혼자서도 충분히 키울 수 있어',
      );
      if (ret === 1) {
        await printAndWait(
          '……어찌 됐든, 나 혼자서 살아갈 수는 있을지 몰라도',
        );
        await printAndWait('적어도 아이만큼은 온전한 가정을 갖게 해주고 싶었다.');
        println();
        await printAndWait(`아이의 아버지를 바라보며, 품 안의 아이를 ${father.sex}에게 보여주었다`);
        await printAndWait(`이 아이가 ${father.sex}의 책임감을 일깨워주기를 바랐다`);
        await printAndWait([
          father.get_colored_name(),
          ' 은(는) ', 
          you.get_colored_name(),
          ' 과(와) 아이를 꼭 안으며, 앞으로 두 사람을 소중히 대하겠다고 맹세했다.',
        ]);
        await printAndWait('개과천선한 아버지와 곁을 지키는 어머니.');
        await printAndWait(
          '방금 전까지 품었던 세 가족의 환상이 그대로 현실이 된 것 같았다.',
        );
        println();
        await printAndWait('하지만……');
        await printAndWait([
          '임신 주머니로서의 직업적 본능은 ', 
          you.get_colored_name(),
          ' 가 놓치지 않았다.',
        ]);
        await printAndWait([
          '자신이 아이에게 젖을 먹이는 모습을 보며 ', 
          father.get_colored_name(),
          ' 의 가랑이가 움찔거리는 것을.',
        ]);
        println();
        await printAndWait('가정생활…… 참 좋은 핑계다.');
        await printAndWait(
          '그렇다면 아이에게 젖을 먹이는 것과 동시에 입안에 육봉이 박히더라도, 「영양 보충」이라는 명분으로 한마디면 넘어갈 수 있겠지.',
        );
        await printAndWait([
          '남편으로서 ', 
          father.get_colored_name(),
          ' 가 아이를 안은 자신을 다정하게 품에 안는 모습은 누구라도 가정에 대한 의심을 거두게 하겠지…… 애액을 흘리는 아래에 굵직한 육봉이 박혀 있다는 사실만 들키지 않는다면.',
        ]);
        await printAndWait(
          '그렇게 아이가 성인이 된 뒤에는…… 아이와 아이의 아버지에게 동시에 사용당하며 그사이에 끼어 수컷의 육봉에 탐닉하는……',
        );
        println();
        await printAndWait([
          '그런 미래를 상상하자 ', 
          you.get_colored_name(),
          ' 는 자신도 모르게 입술을 핥았다……',
        ]);
        await printAndWait('그런 내일을 기대하기 시작했다.');
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 은(는) 자신의 몸에 욕망만 쏟아붓고 아무 책임감 없이 안에 사정한 ', 
          father.get_colored_name(),
          ' 을(를) 노려보았다.',
        ]);
        await printAndWait(`이런 ${father.sex}이(가) 아버지로서의 책임을 다할 리가 없다고 생각했다.`);
        await printAndWait(
          '자신에게 필요한 것은 모욕당할 때 자신과 아이를 부축해주고 보호해줄 사람이다.',
        );
        await printAndWait(
          '자신이 욕망의 처리 도구로 취급당할 때 마지막 목소리의 출구까지 육봉으로 틀어막는 쓰레기가 아니라.',
        );
        println();
        await printAndWait('설령 혼자라 해도, 이 아이를 잘 돌볼 것이다.');
        await printAndWait([
          '지금 이 순간 ', 
          you.get_colored_name(),
          ' 는 의심할 여지 없이 가장 험난한 길을 선택했다.',
        ]);
        println();
        await printAndWait('갑자기 품 안의 아이가 울음을 터뜨렸다.');
        await printAndWait('배가 고픈가? 젖을 먹여야 하나?');
        await printAndWait('그렇다면…… 지금의 나, 이 조교로 단련된 몸은');
        await printAndWait(
          `유두가 빨릴 때, 분명 자신의 유두를 깨물고 핥았던 그 ${father.uma_sex_title}들을 떠올리겠지.`,
        );
        await printAndWait(
          '가슴이 물리는 순간, 분명 가슴이 주물리고 착유당했던 그 밤들을 떠올리며 순식간에 절정에 달하겠지.',
        );
        await printAndWait(
          '아이가 젖을 다 먹고 가슴 사이에 누워 있을 때…… 아기 체온과 비슷한 육봉이 가슴 위에서 소유권을 선언하며 입안에 진한 백탁액을 쏟아붓던 때를 떠올리게 되지 않을까?',
        );
        println();
        await printAndWait(
          '그리고 이 모든 것을 견뎌내고 겨우 이 아이를 성인으로 키워냈다 하더라도…………',
        );
        await printAndWait(
          '성인이 된 아이가 아직 사랑이 무엇인지 알기도 전에, 본능적으로 성을 이해한 눈빛을 자신에게 보내온다면',
        );
        await printAndWait('나는 대체 어떻게 해야 할까.');
        println();
        await printAndWait('눈앞의 길이 마치 칠흑처럼 캄캄해졌다……');
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),

};
