// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/timon/others/pregnant-slave.js
// 대상 함수/속성: punish, punish_first
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

const { degeneration_to_evil } = require('#/i18n/ja-JP/snippets');
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
  // [번역 대상] punish_first — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] punish — 함수/속성 전체 문맥에서 남은 원문을 번역
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
