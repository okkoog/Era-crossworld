// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const location_enum = require('#/data/locations')["location_enum"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/101900-Agnes-Digital/love-19"),

  // [번역 대상] 49
  49: (() => {
    const title = '定番の濡れ、ただし君のほう';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} d_call_t アグネスデジタルのアグネスタキオンへの呼び方
     * @param {PrintedSpan} t_call_d アグネスタキオンのアグネスデジタルへの呼び方
     */
    const f = async (digital, tachyon, you, callname, d_call_t, t_call_d) => {
      await era.printAndWait(
        "트레이너로서 평소의 트레이닝 지도 외에도, 몇 가지 자잘한 업무들이 있다.",
      );
      await era.printAndWait([
        '今日は',
        digital.uma_sex_title,
        'の休日だが、',
        you.get_colored_name(),
        ' は教学棟へ来て、',
        digital.uma_sex_title,
        'の事前出走資料を提出した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 일을 마치고 사무실을 나서자, 창밖에는 어느새 보슬보슬 비가 내리고 있었다.",
      ]);
      await era.printAndWait([
        "다행히 ",
        you.get_colored_name(),
        "은(는) 우산을 챙겨왔다.",
      ]);
      await era.printAndWait([
        "막 돌아가려던 찰나, ",
        you.get_colored_name(),
        "은(는) 복도 아래 서 있는 분홍색 실루엣을 발견했다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "이었다. 귀가 축 처진 채 기운이 없어 보이는 게, 아무래도 우산이 없는 모양이다. 마치 창작물에서 흔히 볼 수 있는 한 장면 같았다.",
      ]);
      await era.printAndWait([
        'だが不思議なことに、',
        you.get_colored_name(),
        ' は少し先の雨のなか、傘を差した ',
        tachyon.get_colored_name(),
        ' を見た。',
      ]);
      await you.say_and_wait("타키온을 부르지 않는 거야?");
      await digital.say_and_wait(["……에, 당신이라면 아시겠죠? ", callname, '？']);
      await era.printAndWait([
        digital.get_colored_name(),
        "이 몇 가지 수신호로 기색을 보였다.",
      ]);
      await era.printAndWait([
        "오랫동안 함께 지내오며, ",
        you.get_colored_name(),
        "도 점차 ",
        digital.get_colored_name(),
        "의 성격을 이해하게 되었다. 아무래도 ",
        digital.sex,
        "는 ",
        tachyon.get_colored_name(),
        "을 방해하고 싶지 않은 모양이다.",
      ]);
      await you.say_and_wait("그래, 알겠어. 그럼 나랑 우산을 같이 쓰고 가지 않을래?");
      await digital.say_and_wait("감사합니다!");
      await era.printAndWait([
        "그렇게 ",
        you.get_colored_name(),
        "은(는) 우산 하나를 받쳐 들었고, 그 아래 ",
        you.get_colored_name(),
        "과(와) ",
        digital.get_colored_name(),
        "이 나란히 섰다.",
      ]);
      await era.printAndWait(
        "빗줄기가 굵어지기 시작했다. 설상가상으로 바람까지 강해졌고, 방향조차 일정치 않았다.",
      );
      await era.printAndWait([
        "마치 비가 살아있는 생물처럼 ",
        you.get_colored_name(),
        "이(가) 우산을 기울인 반대 방향으로 파고들었다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        digital.get_colored_name(),
        "이 젖지 않도록 필사적으로 우산을 ",
        digital.get_colored_name(),
        " 쪽으로 기울였다.",
      ]);
      await digital.say_and_wait([
        callname,
        ", 제가 젖는 것도 안 좋지만, 아무리 생각해도 당신의 몸이 ",
        digital.uma_sex_title,
        "보다는 약하잖아요! 감기라도 걸리시면 큰일이라구요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "이 화가 난 것을 알 수 있었다. 귀가 뒤로 쫑긋 누워버렸다.",
      ]);
      await you.say_and_wait("그건…… 좀 상처인데.");
      await era.printAndWait([
        "분위기를 가라앉히려 ",
        digital.get_colored_name(),
        "과 이런저런 농담을 주고받으며 계속 걸었다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "은(는) 고집을 꺾지 않고 계속해서 ",
        digital.sex,
        "를 가려주었다.",
      ]);
      await era.printAndWait([
        "결국 고집을 부린 결과, 트레이닝실에 도착했을 때 ",
        you.get_colored_name(),
        "의 옷은 흠뻑 젖어버렸지만 다행히 ",
        digital.get_colored_name(),
        "은 거의 젖지 않았다.",
      ]);
      await digital.say_and_wait(["아하하하, ", callname, ", 일단 거기 가만히 계세요."]);
      await era.printAndWait([
        "아니 아니, 이때 ",
        you.get_colored_name(),
        "은(는) 깨달았다. 담당 ",
        digital.uma_sex_title,
        "가 젖는 것도 큰일이지만, 담당 ",
        digital.uma_sex_title,
        " 앞에서 자신이 젖어 있는 것도 꽤 곤란한 상황이라는 것을.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "이 수건을 들고 ",
        you.get_colored_name(),
        "의 머리에 맺힌 물방울을 닦아주었다.",
      ]);
      await era.printAndWait(
        "젖은 옷을 벗고 몸을 닦은 뒤, 마른 수건으로 몸을 덮는 것은 임시방편에 불과했다.",
      );
      await you.say_and_wait("정말 고마워, 나머지는 내가 직접 할게.");
      await era.printAndWait([
        "이렇게 몸을 닦이고 있으니 ",
        you.get_colored_name(),
        "은(는) 내심 쑥스러움을 느꼈다.",
      ]);
      await era.printAndWait([
        'どうせ ',
        you.get_colored_name(),
        ' は大人だ。',
        digital.get_colored_name(),
        ' はうつむき、',
        you.get_colored_name(),
        ' には',
        digital.sex,
        'の表情が見えない。耳から判断する限り、不機嫌ではなさそうだ……',
      ]);
      await era.printAndWait("괜찮은 걸까?");
      era.drawLine();
      await digital.say_and_wait(
        "후아~ 비를 맞고 샤워한 뒤 이불 속으로 쏙 들어가기! 그리고 숙면을 취해야 내일 더 활기차게 덕질을 할 수 있겠지!",
      );
      await digital.print_and_wait([
        "룸메이트인 ",
        d_call_t,
        "는 아직 연구실에 있는 모양이네. 뭐, 평소랑 똑같지만.",
      ]);
      await digital.print_and_wait("아차, 일기 쓰는 걸 깜빡한 것 같은데……");
      await digital.print_and_wait(
        "뭐 됐어! 그냥 누워서 오늘의 덕질을 회상하며 내일을 준비하자구!",
      );
      await digital.print_and_wait([
        "으음, 아침에는 우선 ",
        digital.uma_sex_title,
        "쨩이 달렸던 잔디밭에서 행복을 만끽했고, 점심에는 식당에서 최애 에너지를 섭취, 그리고 오후에는……",
      ]);
      await digital.print_and_wait([
        "오후에는…… ",
        callname,
        "의…… 그…… 뽀얀 피부, 살짝 윤곽이 잡힌 복근, 뚝뚝 떨어지는 머리의 물……",
      ]);
      await digital.print_and_wait("아니 아니 아니! 디지땅, 너 대체 무슨 생각을 하는 거야!");
      await digital.print_and_wait([
        digital.uma_sex_title,
        "들에게 인기 많을 타입의……",
      ]);
      await digital.print_and_wait(
        "안돼 안돼, 디지땅! 일단 기존 지식으로 해석해보자. 디지땅, 너 동인지 많이 봤잖아? 직접 그리기도 했고!",
      );
      await digital.print_and_wait("자자, 그 속에서 답을 찾아보자구!");
      await digital.print_and_wait([
        callname,
        "이(가) ",
        digital.uma_sex_title,
        "를 스카우트해서, ",
        digital.sex,
        "의 재능을 꽃피워주는 그런 스토리지?!",
      ]);
      await digital.print_and_wait("그다음에, 어떻게 됐더라?");
      await digital.print_and_wait([
        digital.uma_sex_title,
        "짱이 눈치채고……",
      ]);
      await digital.print_and_wait("그리고 자가 발전……");
      await digital.say_and_wait(
        "안 돼!! 왜 이런 쪽으로 연결하는 거야, 아무리 그래도 그건 좀……!",
      );
      await tachyon.say_and_wait([
        "이런이런, ",
        t_call_d,
        ", 혼자서 무슨 말을 하고 있는 건가?",
      ]);
      await digital.say_and_wait("히익————?!");
      await digital.print_and_wait([
        "아무래도 ",
        d_call_t,
        "가 돌아온 타이밍이 좋지 않았던 모양이다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 74-after
  '74-after': (() => {
    const title = "한 번으로 안 되면 두 번, 이건 당연한 거 아닌가요!!";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.print_and_wait(
        "디지땅은 디지땅은, 시간이 꽤 흘러서 드디어 고통의 심연에서 빠져나왔지만!",
      );
      await digital.print_and_wait(
        "하지만 그렇게 생각하니 역시! 역시 좋아! 역시 너무너무 좋아!",
      );
      await digital.print_and_wait(
        "그러니까 다시 한 번 더! 이번에야말로 디지땅은 꼭 성공할 거야!",
      );
      era.print(["다시 한 번, ", you.get_colored_name(), "의 선택은 :"]);
      era.printButton("받아들인다", 1);
      era.printButton("거절한다", 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.print_and_wait("우아아아아앙! 해냈어!!");
        await digital.print_and_wait("왜냐고요?");
        await digital.print_and_wait("그건 중요하지 않아. 성공했다는 게 중요한 거지!");
      } else {
        await digital.print_and_wait("아니, 이건 아니지 않아?");
        await digital.print_and_wait("으아아아아, 안 돼!");
        await digital.print_and_wait('デジだって、追求はある！');
        await digital.print_and_wait("반드시, 쟁취하고 말겠어!");
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 74-first
  '74-first': (() => {
    const title = "기록";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.print_and_wait([
        "오늘은 무척이나 기대되던 신인 ",
        digital.uma_sex_title,
        "쨩 선발 레이스날이다! 다시금 여신님들의 끝없는 잠재력에 감탄하게 되네!",
      ]);
      await digital.print_and_wait([
        "그리고…… 이상한 사람을 만났어! 만났다고 해야 할지 이상하다고 해야 할지…… 아무래도 ",
        you.sex,
        "는 동지인 것 같네.",
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        "\n바로 오늘, 디지땅은 드디어 잔디를 달릴지 더트를 달릴지에 대한 문제를 해결했다구! 이따가 작게 자축할 가치가 있지만, 일단 지금은 기록부터 해야겠어.",
      );
      await digital.print_and_wait([
        'あの人だ。',
        you.sex,
        'が完璧な案を出した！ まさに一語で夢から覚めた。',
      ]);
      await digital.print_and_wait([
        "결국, 나는 ",
        you.sex,
        "의 권유에 응해서 ",
        you.sex,
        "의 담당 ",
        digital.uma_sex_title,
        "가 되기로 계약을 맺었어.",
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        "정말 뜻밖이네. 설마 ",
        callname,
        "이(가) 나와 함께 응원 활동을 하러 가주다니!",
      ]);
      await digital.print_and_wait(
        "내 페이스를 따라올 수 있는 사람이 있을 거라고는 전에는 단 한 번도 생각해 본 적 없었는데!",
      );
      await digital.print_and_wait("그리고 정말 많은 곳을 갔었지, 다시 회상해 보면……");
      await digital.print_and_wait([
        "지금 생각하니 역시 마지막에 ",
        callname,
        "의 안색이 그리 좋지 않아 보였지. 엄청 지쳐 보였었어.",
      ]);
      await digital.print_and_wait([
        "하지만 그럼에도 불구하고, ",
        callname,
        "은(는) 「동지」라는 칭호를 받을 자격이 충분해!",
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        "\n그리고 정말 많은 곳을 갔었지, 또 왔다 또 왔어, 성지순례! ……",
      );
      await digital.print_and_wait(
        "최애들이 갔던 장소, 최애들에게 중요한 의미가 있는 장소에 가서 최애들의 행동을 따라 하는 활동!",
      );
      await digital.print_and_wait([
        "세상에나, ",
        callname,
        "가(이) 내 초대에 응해서 나랑 고생해 주다니.",
      ]);
      await digital.print_and_wait(
        "이것은 마치 도버 해협 같은 공명, 심장이 파열될 것 같은 공진!",
      );
      await digital.print_and_wait([
        "게다가 게다가, ",
        callname,
        "가(이) 아는 게 그렇게 많을 줄이야! 내가 전혀 몰랐던 최애들에 관한 지식까지! 역시 난 모두좋아 실격인 걸까……",
      ]);
      await digital.print_and_wait([
        "마지막에는 ",
        callname,
        "에게 한계 돌파 발언을 해버렸어! 우주에 내 한계 발언을 들어줄 사람이 또 있을 줄은 정말 꿈에도 몰랐기에 감동해서 몸 둘 바를 모르겠어……",
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        "여름 합숙이 다가오고 있네. 그때가 되면 수영복을 입은 ",
        digital.uma_sex_title,
        "쨩들을 볼 수 있겠지!",
      ]);
      await digital.print_and_wait([
        "태양빛 아래에서 태양보다 더 눈부신 건—— 바로 ",
        digital.uma_sex_title,
        "쨩이지!",
      ]);
      await digital.print_and_wait("튀어 오르는 수박은 과연 누구의 솜씨일까.");
      await digital.print_and_wait("광속의 배구공은 과연 누가 받아낼까.");
      await digital.print_and_wait([
        "그리고 빙수, 해산물, 이 모든 것들이 ",
        digital.uma_sex_title,
        "쨩들을 더욱 빛나게 해주겠지!",
      ]);
      await digital.print_and_wait([callname, "를(을) 초대해서 같이 놀러 가야겠어!"]);
      await digital.print_and_wait("……아");
      await digital.print_and_wait([
        '（ノートの前のピンクの',
        digital.teen_sex_title,
        "가 펜을 멈췄다.)",
      ]);
      await digital.say_and_wait("나 혹시, 계속 내 생각만 하고 있는 건가……");
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        'もし欲と',
        digital.uma_sex_title,
        "를 저울질한다면, 저울은 분명 오른쪽으로 기울겠지만.",
      ]);
      await digital.print_and_wait([
        "만약 ",
        digital.uma_sex_title,
        "와 ",
        callname,
        "를(을) 저울질한다면?",
      ]);
      await digital.print_and_wait(
        "인정하기 어렵지만 디지땅은, 지금까지의 행동을 보면 마음속의 저울이 전부 왼쪽으로 기울어버려.",
      );
      await digital.print_and_wait([
        "그러니까 적어도 내일 여름 합숙에서는 ",
        callname,
        "가(이) 하고 싶은 일을 해줘야겠어.",
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait("\n어떻게 써야 할까……");
      await digital.print_and_wait("사실 지금 다시 회상해도 너무 부끄러워……");
      await digital.print_and_wait(
        "디지땅은 정말로 처음 알았어. 누군가 나를 이렇게까지 밀어줄 수 있다는 걸, 그것도 다름 아닌 나의 트레이너가.",
      );
      digital.print('——');
      await digital.print_and_wait("사실 그날부터 기분이 좀 이상해진 것 같아……");
      await digital.print_and_wait([
        callname,
        "를(을) 보기만 해도 벌써 안절부절못하게 돼서 어쩌면 좋을지.",
      ]);
      await digital.print_and_wait(
        "알고 있어, 대충은 알고 있다구. 그러니까 심장의 고동을 느끼느냐, 아니면 그 목소리를 무시하느냐겠지?",
      );
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        "\n고백하지 않을 수 없겠어. 나는 ",
        callname,
        "에게 마음이 생겼어. 맞아. 사랑이라는 감정 말이지.",
      ]);
      await digital.print_and_wait("사실 이렇게 자세히 생각해보면 뭔가 좀 이상하지 않나?");
      await digital.print_and_wait([
        "디지땅, 생각해보라구. ",
        callname,
        "와(과) 함께 응원 활동을 하러 가고,",
      ]);
      await digital.print_and_wait(
        "함께 외출하고, 함께 영화를 보고, 함께 축제를 구경하고, 해변에서 감정을 나누고……",
      );
      await digital.print_and_wait("이상하지?");
      await digital.print_and_wait("이거 그냥 데이트잖아?!");
      await digital.print_and_wait("（물론 데이트가 꼭 그런 뜻만은 아니지만.）");
      await digital.print_and_wait([
        "설마 사실 이미 ",
        callname,
        "와(과) 사귀고 있는데, 그냥 잊어버린 것뿐인 걸까?!",
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        "\n큰일이다 큰일이야, 어제 기록을 안 했더니 오늘 생각나서 모든 게 큰일 났다는 걸 깨달았어!",
      );
      await digital.print_and_wait("이제 어쩌면 좋지……");
      digital.print('……');
      era.println();
      await digital.print_and_wait("\n오늘,");
      await digital.print_and_wait([
        "또 ",
        callname,
        "와(과) 함께 성지순례를 갔어. ",
        digital.uma_sex_title,
        "쨩들은 여전히 그렇게나 눈부셨지만,",
      ]);
      await digital.print_and_wait([
        callname,
        "와(과) 함께 앉아 있으면 자꾸만 안절부절못하며 ",
        callname,
        "를(을) 훔쳐보게 돼서……",
      ]);
      await digital.print_and_wait([
        '今思うと、',
        you.sex,
        'はかなり格好いいし、その気概には敬服する！',
      ]);
      await digital.print_and_wait("……결정했어.");
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        "\n오늘은 평소와 다르게 아침에 일기를 쓰고 있어.",
      );
      await digital.print_and_wait(
        "디지땅, 넌 할 수 있어! 아, 아니지, 생각해보니까 나 매력이 전혀 없잖아?",
      );
      await digital.print_and_wait(
        "빈약한 몸매…… 그야말로 자그마한 키…… 평소 행동조차 그저 평범한……",
      );
      await digital.print_and_wait("아니, 평범하기보다 변태 같잖아!");
      await digital.print_and_wait([
        digital.uma_sex_title,
        " 이야기만 나오면 봇물 터지듯 말하고, 익숙한 주제만 나오면 말 속도가 계속 빨라지고, 이거 완전 변태 아닌가?",
      ]);
      await digital.print_and_wait([
        callname,
        " 말고는 정말 내가 다른 사람이랑 사귀는 게 가능이나 할까?",
      ]);
      await digital.print_and_wait([
        'え、',
        callname,
        "를(을) 만난 건 정말이지 최고의 행운. 즉, 이번 기회를 놓치면 다음은 없다는 뜻이지! 나를 이렇게까지 잘 이해해 주고 친절하게 대해줄 사람은 다시는 찾을 수 없을 거야!",
      ]);
      await digital.print_and_wait("디지땅, 디지땅, 너 지금 당장 행동해야 해!");
      await digital.print_and_wait(
        "이번 기회를 놓치면 아마 남은 평생 동안 베개를 붙잡고 이불 뒤집어쓴 채 울부짖게 될걸?",
      );
      await digital.print_and_wait([
        callname,
        "도 나를 좋아하는 거겠지? 그렇지 않다면 저랑 같이 응원하러 가주지도 않았을 거잖아?",
      ]);
      await digital.print_and_wait("좋아 좋아 좋아, 성공 확률이 꽤 높다구!");
      await digital.print_and_wait("가자 가자 가자, 더 이상 기다리지 말자구!");
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 휴대폰을 확인했다. 평소라면 ",
        digital.get_colored_name(),
        "이 한참 전에 트레이닝을 시작했을 시간이다. 비록 정식 트레이닝 시간 전이긴 하지만……",
      ]);
      await era.printAndWait([
        "최근 ",
        digital.get_colored_name(),
        "의 행동을 돌이켜 보았다. 지난번 해변에서의 대화 이후로 ",
        digital.get_colored_name(),
        "은 점차 ",
        you.get_colored_name(),
        "에게 더 신경을 쓰는 듯 보였다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "가 ",
        digital.uma_sex_title,
        "쨩들을 응원하는 것 말고도 고민이 꽤 많은 모양이다.",
      ]);
      await era.printAndWait([
        "생각에 잠겨 있을 때 ",
        digital.get_colored_name(),
        "이 멀리서 달려오고 있었다.",
      ]);
      await era.printAndWait("음? 왜 얼굴이 저렇게 빨갛게 상기되어 있지?");
      await era.printAndWait("설마 어디 다쳐서 저러는 건 아니겠지? 오늘도 평소보다 조금 늦었고.");
      await you.say_and_wait("디지털! 당장 멈춰!");
      await digital.say_and_wait("에?!");
      await era.printAndWait([
        '驚いて止まった ',
        digital.get_colored_name(),
        ' の前まで早足で行った。',
      ]);
      await era.printAndWait([
        "당신은 몸을 숙여 ",
        digital.get_colored_name(),
        "의 다리 상태를 자세히 살폈다.",
      ]);
      await digital.say_and_wait(["저기…… ", callname, '？']);
      await era.printAndWait('うん……少なくとも腫れはない……');
      await you.say_and_wait("혹시 다리를 다친 거니? 보건실에 가야 할까?");
      await digital.say_and_wait("에?");
      await era.printAndWait([
        "큰일이군, ",
        digital.get_colored_name(),
        "은 아직 인지하지 못한 모양이다. 아무래도 먼저 확인을 좀 해봐야겠다.",
      ]);
      await era.printAndWait(
        "먼저 무릎을 확인한다. 왼손으로 튀어나온 외측을 잡고 오른손으로 안쪽 인대를 가볍게 눌러본다. 음, 뻣뻣한 느낌은 없다.",
      );
      await digital.say_and_wait("저기, 그러니까……");
      await era.printAndWait(
        "다음은 허벅지, 대퇴이두근과 대퇴직근 모두 잘 이완된 좋은 상태다.",
      );
      await digital.say_and_wait("일단 좀…… 멈춰주실래요?");
      await you.say_and_wait("어떻게 멈춰!");
      await era.printAndWait("이어서 종아리, 비복근 상태도 완벽해 보이는군.");
      await era.printAndWait(
        "마지막은 발. 이건 일단 신발을 벗어야 한다. 하지만 이대로 그냥 벗겼다가 상처라도 있으면 2차 부상을 초래할 텐데……",
      );
      await digital.say_and_wait([callname, "! 저 아무 문제 없다니까요!"]);
      await you.say_and_wait("그럼 오늘 왜 그렇게 상태가 이상한 거야?");
      await era.printAndWait([
        "반쯤 쪼그려 앉은 채로 고개를 들어 ",
        digital.get_colored_name(),
        "의 얼굴을 쳐다보니, 얼굴이 더욱 붉게 달아오른 것 같았다.",
      ]);
      await digital.say_and_wait("그게 말이죠…… 일단! 일단 트레이닝실에 가서 설명할게요!");
      await you.say_and_wait("하지만……");
      await digital.say_and_wait('……');
      await era.printAndWait([
        digital.get_colored_name(),
        "은 아무 말 없이 ",
        you.get_colored_name(),
        "을(를) 빤히 바라보았다.",
      ]);
      era.drawLine();
      await you.say_and_wait("자, 이제 설명해 줄래? 다리는 정말 괜찮은 거지?");
      await digital.say_and_wait("그게요…… 먼저 말씀드리자면, 다리는 정말 아무 문제 없어요.");
      await you.say_and_wait("……그럼 대체 왜……");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 고개를 숙인 채 손가락을 만지작거리며 한 마디씩 어렵게 내뱉었다.",
      ]);
      await digital.say_and_wait("사실…… 제가…… 그때부터…… 에잇……");
      await era.printAndWait([
        "말을 하다 말고 ",
        digital.get_colored_name(),
        "은 다시 한숨을 내쉬었다.",
      ]);
      await you.say_and_wait("차라리 내가 먼저 이야기를 꺼내볼까.");
      await you.say_and_wait("여기서 말하긴 좀 그러니 같이 밖으로 나가자.");
      await digital.say_and_wait("……아.");
      await era.printAndWait(
        "자리에서 일어나 트레이닝실 문을 열고 경기장으로 나가 관중석으로 올라갔다.",
      );
      await era.printAndWait([
        "코스, 아침 햇살은 부지런히 훈련하는 ",
        digital.uma_sex_title,
        "에게 최고의 커피나 다름없다.",
      ]);
      await digital.say_and_wait(["저기, ", callname, '？']);
      await you.say_and_wait("다음 장소로 가자.");
      await digital.say_and_wait("네?");
      await era.printAndWait([digital.get_colored_name(), "이 뒤따라왔다."]);
      await era.printAndWait("강변, 정오의 햇살 아래 강물이 눈부시게 반짝인다.");
      await digital.say_and_wait([callname, ", 혹시 하려는 말이……"]);
      await era.printAndWait(
        '神社。午後の斑な木陰が、ちょうど参拝の場を隠す。',
      );
      await digital.say_and_wait('……');
      await era.printAndWait("공원, 해가 지기도 전에 가로등이 서둘러 자리를 대신한다.");
      await digital.say_and_wait('……');
      await era.printAndWait("바닷가, 조명 없는 푸른 해안선은 오직 달빛에만 의지하고 있다.");
      await digital.say_and_wait('……');
      await digital.say_and_wait("한 바퀴를 쭉 따라오니, 이제는 아무래도 상관없다는 기분이 드네요.");
      await you.say_and_wait("그럼 됐어.");
      await digital.say_and_wait([callname, '。']);
      await you.say_and_wait("응.");
      await digital.say_and_wait("좋아해요.");
      era.print(["이 순간, ", you.get_colored_name(), "의 선택 :"]);
      era.printButton("받아들인다", 1);
      era.printButton("거절한다", 2);
      const ret = await era.input();
      await digital.print_and_wait([
        "정말 꼴불견이네. 설마 고백까지 ",
        callname,
        "가(이) 유도하게 만들다니.",
      ]);
      if (ret === 1) {
        await digital.print_and_wait("하지만, 성공했어.");
        await digital.print_and_wait("맞아. 성공했다구.");
        await digital.print_and_wait(
          "원래대로라면 더 날뛰며 기뻐해야 할 텐데, 지금은 그저……",
        );
        await digital.print_and_wait("넘쳐흐르는 행복감뿐이야.");
      } else {
        await digital.print_and_wait("아하하하, 결국은 실패네.");
        await digital.print_and_wait([
          "하지만 알 것 같아. 나와 ",
          callname,
          "의 관계가 단순히 남녀 관계 그 이상이라는 걸.",
        ]);
        await digital.print_and_wait("이 안에는 더욱 복잡한 감정이 얽혀 있는 거겠자……");
        await digital.print_and_wait(
          "생각한 건 많고, 쓰고 싶은 것도 정말 많은데 도저히 펜이 움직이질 않아…… 일기장이 다 젖어버렸네……",
        );
        await digital.print_and_wait("역시 좀 분해……");
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 89-after
  '89-after': (() => {
    const title = "결국은, 덧없는 물거품";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     */
    const f = async (digital, you, callname, child) => {
      await you.say_and_wait([
        "주말인데, 바쁜 와중에 잠시라도 ",
        child,
        "을 보러 갈까?",
      ]);
      await you.say_and_wait([
        "학생 기숙사 입구에 도착해서, ",
        child,
        "에게 전화를 걸려던 참에……",
      ]);
      await digital.say_and_wait(["에? ", callname, " 여기서 뭐 하고 계세요?"]);
      era.printButton(`${child}을 기다리고 있잖아.`, 1);
      await era.input();
      await era.printAndWait([
        "그 말을 들은 ",
        digital.get_colored_name(),
        "은, 왠지 모르게 고개를 숙였다.",
      ]);
      await digital.say_and_wait(
        ["……이, 이제 때가 된 건가…… 다, 다시 한 번 ", callname, "에게 진실을 말해야 하는 건가……"],
        true,
      );
      await digital.print_and_wait("난 어떻게 해야……");
      era.printButton('伝える（関係を進める）', 1);
      era.printButton('伝えない（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.say_and_wait(
          "나…… 나는 다시 진실을 알리는 것이 오직…… 눈물만을 가져올 거라 생각했지만——",
          true,
        );
        await digital.say_and_wait(
          [
            "하지만, 이런 기분…… ",
            callname,
            "에게 안겨 청혼받는 이 기분은…… 정말이지 너무나도 좋아……",
          ],
          true,
        );
      } else {
        await digital.say_and_wait([
          "아뇨, 역시 관두죠. ",
          callname,
          "와 ",
          child,
          "과 함께하는 매일매일이, 정말로 행복하니까요.",
        ]);
        await digital.say_and_wait("저는 이런 나날들이 계속 이어지기를 바라요. 부디 저를 용서해 주세요.", true);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 89-first
  '89-first': (() => {
    const title = "동거! 역시 이렇게 되는 거겠죠?";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} machan マチカネタンホイザ
     * @param {CharaTalk} tarumae ホッコータルマエ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     * @param {string} parent プレイヤーと子どもとの関係
     */
    const f = async (
      digital,
      mcqueen,
      coffee,
      tachyon,
      machan,
      tarumae,
      you,
      callname,
      y_call_d,
      child,
      parent,
    ) => {
      await era.printAndWait(
        '忙しい一日を終えて家へ帰り、台所から匂いがして、誰かが鼻歌を歌っているなら、それは大型トラックに轢かれて記憶を消された偶然だ。',
      );
      await era.printAndWait([
        "그러니까, 대체 언제부터 ",
        y_call_d,
        "이 열쇠를 챙겨서 ",
        you.get_colored_name(),
        "의 집에 오게 된 걸까?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' ははっきり覚えている。ある夜、ある浜辺で、',
        y_call_d,
        ' が ',
        you.get_colored_name(),
        ' に告白し、それから順当に、',
        y_call_d,
        ' は ',
        you.get_colored_name(),
        ' の恋人になった。',
      ]);
      await era.printAndWait("사실…… 사귀고 나서도, 평소 하는 행동에는 별 차이가 없었다……");
      await era.printAndWait("여전히 똑같이, 같이 최애를 파고, 같이 성지 순례를 다녔다.");
      await era.printAndWait("그다음은?");
      await digital.say_and_wait("안 돼, 이러면 예전이랑 다를 게 없잖아요?!");
      await digital.say_and_wait("제 이전 추측이 맞았던 걸까요…… 아니야!");
      await era.printAndWait([
        "음…… 그래서 변화를 주기 위해, 듣기로는 ",
        y_call_d,
        "이 어떤 동인지들을 참고해서 ",
        you.get_colored_name(),
        "(으)로부터 열쇠를 빌려 갔다고 한다.",
      ]);
      await era.printAndWait(
        "열쇠를 빌려 가긴 했지만, 처음 며칠 동안은 아무 일도 일어나지 않아서 그냥 일시적인 변덕이었나 생각하며 대수롭지 않게 여기고 있었다.",
      );
      await era.printAndWait([
        "그래서 어느 날, ",
        you.get_colored_name(),
        "이(가) 지친 몸을 이끌고 겨우 열쇠를 구멍에 꽂았을 때, 멍한 정신 속에서 금속 마찰음 이외의 소리를 들었을 때는 꽤 놀랄 수밖에 없었다.",
      ]);
      await era.printAndWait([
        "그 후로 ",
        y_call_d,
        "이 ",
        you.get_colored_name(),
        "의 집에 오는 빈도는 점점 잦아졌다.",
      ]);
      await era.printAndWait(
        "본래 무미건조했던 집안의 공기도 점차 색다른 색채로 물들어갔다.",
      );
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "이(가) 조금 이상하면서도 웃음이 나게 했던 것은, 가장 먼저 ",
        you.get_colored_name(),
        "의 방을 점령한 것이……",
      ]);
      await era.printAndWait([
        "온갖 ",
        digital.uma_sex_title,
        " 굿즈들이었다는 점이다.",
      ]);
      await era.printAndWait([
        'たとえば ',
        tachyon.get_colored_name(),
        ' の紅茶カップ、',
        coffee.get_colored_name(),
        ' のコーヒーカップ、',
        mcqueen.get_colored_name(),
        ' のマウスパッド、',
        machan.get_colored_name(),
        ' のぬいぐるみ……',
      ]);
      await era.printAndWait([
        "그중에서도 ",
        you.get_colored_name(),
        "이(가) 가장 신기하게 생각한 것은, 심지어 토마촙 인형까지 있었다는 것이다. 바로 ",
        tarumae.get_colored_name(),
        "가 있는 토마코마이의 그 마스코트 캐릭터 말이다!",
      ]);
      await era.printAndWait([
        "또 어떤 날은 집에서 ",
        y_call_d,
        "이 건조기를 들고 방에 놓으려 하는 것을 보고, ",
        you.get_colored_name(),
        "은(는) 이대로는 안 되겠다고 생각했다! 강수를 두어야 한다!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "도 세상에서 가장 귀중하다고 여겨지는 ",
        y_call_d,
        "의 굿즈들을 많이 가지고 있다. 예를 들면 승리의 깃발이나 원형 인형 같은 것들…… 하지만 대부분 트레이닝실에 있거나 공식적으로 보관되어 있었다.",
      ]);
      await era.printAndWait([
        "가자 가자! 마트에 가서 ",
        y_call_d,
        "의 모든 굿즈를 몇 개씩 사버리자!",
      ]);
      await era.printAndWait("점원에게 집 앞까지 바로 배달해 달라고 했다!");
      await era.printAndWait([
        "각종 레이스에서 활약하는 ",
        y_call_d,
        "의 늠름한 모습을 만족스럽게 다시 감상한다. 그리고 인형을 소파에 하나, 침대에 하나, 컴퓨터 위에 하나, TV 위에 하나 놓아두고……",
      ]);
      await era.printAndWait([
        "그리고 이전에 소중히 간직해왔던 ",
        y_call_d,
        "의 작품들을 구석진 곳에서 꺼내 소파 옆에 당당히 진열했다……",
      ]);
      await era.printAndWait([
        "하하하하, 완성이다! 이제 ",
        y_call_d,
        "의 표정이 정말 기대되는걸!",
      ]);
      await era.printAndWait("그러나 그 결과는——");
      await era.printAndWait([
        y_call_d,
        ' への衝撃が大きすぎて、',
        you.get_colored_name(),
        ' は',
        digital.sex,
        'の両頬がどんどん赤くなり、どん、と倒れるのを見るしかなかった。',
      ]);
      await era.printAndWait("이런 상대적으로 재미있는 에피소드들 외에, 평소의 삶은 사실 훨씬 더 평온했다.");
      await era.printAndWait(
        "평범하기 그지없는, 마치 밥솥을 열었을 때 피어오르는 하얀 김이 서린 쌀밥과 같았다.",
      );
      await era.printAndWait([
        "그래서 ",
        you.get_colored_name(),
        "과(와) ",
        y_call_d,
        "의 아이가 태어났을 때, 기쁨과 동시에 문득 깨닫게 되었다. 벌써 이렇게 시간이 흘렀구나 하고.",
      ]);
      await era.printAndWait([
        digital.sex_code === 1 ? "자신" : y_call_d,
        "이 임신했다는 사실을 알게 된 기억도, 따스한 흐름과 함께 그저 희미하고 아련하게 남아 있을 뿐이다.",
      ]);
      await era.printAndWait([
        "처음부터 ",
        child,
        "은 참 손이 안 가는 아이였다. ",
        y_call_d,
        "을 보거나 온갖 ",
        digital.uma_sex_title,
        " 굿즈를 보면 얌전해졌고, 그저 아주 가끔 ",
        y_call_d,
        "을 흉내 내며 이상한 소리를 낼 뿐이었다.",
      ]);
      await era.printAndWait([
        child,
        "은 ",
        y_call_d,
        "을 많이 닮았다. 어릴 적부터 ",
        digital.uma_sex_title,
        "를 무척 좋아했고, 특히 TV 앞에 앉아 ",
        y_call_d,
        "의 라이브 영상을 보는 것을 즐겼다.",
      ]);
      await era.printAndWait([
        'というより ',
        you.get_colored_name(),
        "이(가) ",
        parent,
        "로서 ",
        y_call_d,
        "의 녹화 영상을 자주 틀어줬기 때문일까?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        child,
        "이 영상을 보고 있을 때면, ",
        y_call_d,
        "은 처음엔 증기 기관차처럼 얼굴을 붉히며 방으로 도망쳐 가습기 역할을 하곤 했지만, 나중에는 ",
        you.get_colored_name(),
        "의 곁에 기대어 ",
        child,
        "을 품에 안고 함께 보게 되었다.",
      ]);
      await era.printAndWait([
        "어찌 되었든, ",
        child,
        "은 정성 어린 보살핌 속에서 건강하게 자라났다.",
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        "는 성장이 무척 빠르다. 어느덧 ",
        digital.sex,
        "는 벌써 트레센 학원에 입학할 때가 되었다.",
      ]);
      await era.printAndWait([
        y_call_d,
        "과 상의한 결과, ",
        y_call_d,
        "은 ",
        child,
        "이 ",
        digital.uma_sex_title,
        "를 너무 좋아하는 모습을 보며,  혼자 입학식에 보내면 큰일이 날 것 같다고 걱정했다.",
      ]);
      await era.printAndWait([
        "하지만 결국, 이런 일은 ",
        digital.sex,
        " 스스로 겪어보는 것이 좋겠다고 결정했다.",
      ]);
      await era.printAndWait([
        "그렇지만 떠나기 전날 밤, ",
        y_call_d,
        "은 짐을 다시 정리하며 더 많은 물건을 집어넣으려 애썼다.",
      ]);
      await era.printAndWait([
        "집이 트레센과 이렇게 가까운데, ",
        you.get_colored_name(),
        "이(가) 트레센의 트레이너인데, ",
        child,
        "은 언제든 만날 수 있는데도, ",
        you.get_colored_name(),
        " 역시 필수 물품이 빠진 건 아닌지 고심했다.",
      ]);
      await era.printAndWait([
        y_call_d,
        "도 웃으면서, 이게 무슨 영영 이별이라도 되는 거냐며 한마디 했다.",
      ]);
      await era.printAndWait([child, 'は大声で泣き、二人は長いあいだ慰めた。']);
      await era.printAndWait([
        "하지만 내일은 결국 오늘이 되는 법, 이제 ",
        digital.sex,
        "가 등교해야 할 시간이다.",
      ]);
      await era.printAndWait(
        "밤안개가 아직 걷히지 않았고, 먼 하늘가도 그저 희미하게 붉을 뿐이며, 가로등조차 아직 켜져 있는 이른 아침.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        y_call_d,
        "은 짐을 들고 ",
        child,
        "과 함께 집 앞으로 내려왔다.",
      ]);
      await era.printAndWait([
        child,
        "은 끝까지 직접 들고 가겠다고 고집했지만, ",
        you.get_colored_name(),
        "과(와) ",
        y_call_d,
        "은 손을 놓아주지 않았다.",
      ]);
      await era.printAndWait(["고집을 이기지 못한 ", child, "도 결국 포기할 수밖에 없었다."]);
      await era.printAndWait([
        "앞으로 보이는 곳이 바로 ",
        digital.uma_sex_title,
        " 전용도로다. 이 길을 따라가면 트레센에 금방 도착할 수 있고, ",
        digital.uma_sex_title,
        "라면 택시를 부를 필요조차 없다.",
      ]);
      await era.printAndWait([
        "짐을 내려놓았다. 그리 많지는 않았지만, ",
        you.get_colored_name(),
        "에게는 꽤 힘들었고, 그에 비해 ",
        y_call_d,
        "은 훨씬 더 많은 짐을 들고 있었다.",
      ]);
      await era.printAndWait([
        "아이고, 어젯밤에 잠을 설친 데다 이른 아침부터 짐을 날랐더니, ",
        you.get_colored_name(),
        "은(는) 정신이 좀 몽롱하다.",
      ]);
      await era.printAndWait([
        y_call_d,
        "이 걱정스러운 듯 몸으로 ",
        you.get_colored_name(),
        "을(를) 지탱해주었지만, ",
        digital.sex,
        "의 눈을 보니 ",
        you.get_colored_name(),
        "은(는) ",
        digital.sex,
        " 역시 잠을 설쳤다는 것을 알 수 있었다.",
      ]);
      await era.printAndWait([
        "어라? ",
        you.get_colored_name(),
        "은(는) 주위를 둘러보았다. ",
        child,
        "은 어디 갔지?",
      ]);
      await era.printAndWait(["오오오! 바로 ", y_call_d, " 옆에 있었다."]);
      await era.printAndWait([
        child,
        "은 ",
        y_call_d,
        "을(를) 꽉 껴안았고, 이어 ",
        you.get_colored_name(),
        "도 힘껏 안아주었다.",
      ]);
      await era.printAndWait([
        "무척 가녀려서, 꽉 껴안아야만 ",
        digital.sex,
        "의 존재가 느껴졌다. 아직 성장기인 ",
        digital.sex,
        "는 키도 그리 크지 않아, 마치 ",
        y_call_d,
        " 같았다.",
      ]);
      await you.say_as_passer_by_and_wait(child, 'じゃあ、行くね！ さよなら！');
      await era.printAndWait(["손을 흔들며, ", child, "이 달려나갔다."]);
      await era.printAndWait("앗! 잠깐만, 짐을 아직 안 가져갔잖아!");
      await era.printAndWait([
        "급하게 ",
        y_call_d,
        "더러 쫓아가라고 하려던 찰나, ",
        y_call_d,
        "은 그저 ",
        child,
        "이 멀어져가는 방향을 멍하니 바라보고만 있을 뿐이었다.",
      ]);
      await era.printAndWait("잠깐만! 왜 그래?");
      await digital.say_and_wait([
        callname,
        '、',
        child,
        'はトレセンにいるんだから、あとで',
        digital.sex,
        'のところへ届ければいいでしょ？',
      ]);
      await you.say_and_wait([
        '違う、',
        y_call_d,
        '、',
        child,
        digital.sex,
        '！ ',
        digital.sex,
        '……',
      ]);
      await era.printAndWait(
        "마치 매일 지나다니던 교차로, 자주 들르던 가게, 즐겨 하던 게임이 갑자기 폐쇄되고, 망하고, 서비스 종료를 선언한 것 같은……",
      );
      await era.printAndWait([
        "영원히 변하지 않을 거라 믿었던 것이 돌연 사라져 버린 듯한 그 황당함이, 지금 이 순간 ",
        you.get_colored_name(),
        "의 마음을 가득 채웠다.",
      ]);
      await era.printAndWait(["다시 눈을 씻고 보아도, ", child, "의 모습은 이미 온데간데없었다."]);
      await you.say_and_wait([
        y_call_d,
        "! 이, 이게 대체 어떻게 된 거야! 이건…… 왜……",
      ]);
      await digital.say_and_wait(
        "듣기로는, 환상이라거나, 질병이라거나, 혹은 심령 현상이라고도 해요……",
      );
      await digital.say_and_wait([
        "대중적으로는 일종의 정신 질환으로 여겨지죠…… 전염 경로는 불분명하고, 범위는 오직 ",
        digital.uma_sex_title,
        " 및 그들과 접촉하는 사람들뿐……",
      ]);
      await era.printAndWait(
        "그…… 그게 왜…… 단지 이별을 위해서 만들어진 거야?",
      );
      await era.printAndWait([
        "멍하니 있는 사이, ",
        you.get_colored_name(),
        "은(는) ",
        y_call_d,
        "이 트레센 쪽을 바라보며 더 이상 아무 말도 하지 않는다는 것을 깨달았다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 문득, ",
        y_call_d,
        "과 ",
        you.get_colored_name(),
        "의 감정이 똑같다는 것을 깨달았다.",
      ]);
      await era.printAndWait([
        "평소 트레이너로서 언제나 ",
        y_call_d,
        "의 버팀목이 되어주었던 ",
        you.get_colored_name(),
        "(이)였지만, 이번만큼은 ",
        digital.sex,
        "가 지탱해주고 있었다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "는 어떻게든 평온한 어조로 ",
        you.get_colored_name(),
        "의 슬픔을 희석하려 애쓰고 있었다. 뒤에서 ",
        y_call_d,
        "을 안아보니, 비로소 ",
        y_call_d,
        "이 떨고 있다는 사실을 알 수 있었다.",
      ]);
      await era.printAndWait("원래도 가녀린 몸이 더욱 위태로워 보였다.");
      await era.printAndWait("고요한 호수에 던져진 돌멩이가 거대한 파도를 일으켰다.");
      await digital.say_and_wait("……으으윽……");
      await digital.say_and_wait('私……とっくにわかってた……');
      await digital.say_and_wait("사실…… 저…… 디지땅은…… 예전부터 알고 있었어요……");
      await digital.say_and_wait(
        "어느 순간부터 기억의 한 부분이 너무나 희미하다는 걸 깨달았을 때……",
      );
      await digital.say_and_wait("집안의 육아 용품이 전혀 줄어들지 않는다는 걸 눈치챘을 때……");
      await digital.say_and_wait("예전에 그렸던 동인지들을 훑어보았을 때……");
      await digital.say_and_wait("그때 전…… 이미 알고 있었어요……");
      await digital.say_and_wait([
        callname,
        "을(를) 너무나 사랑해서…… 하지만 차마…… 더 깊이 다가갈 용기는 없어서……",
      ]);
      await digital.say_and_wait(["그리고…… ", callname, "도 영향을 받았던 거예요……"]);
      await digital.say_and_wait(["그래서…… ", child, "이 태어난 거예요……"]);
      await digital.say_and_wait(['それが', digital.sex, 'の全部……']);
      await era.printAndWait([
        y_call_d,
        "의 말 속에서, ",
        you.get_colored_name(),
        "은(는) 마침내 이해했다. ",
        child,
        "은 바로 ",
        y_call_d,
        "의 염원이 만들어낸 산물이었다는 것을.",
      ]);
      await digital.say_and_wait([
        "우리가…… 우리가 방금 있었던 일을 잊기만 한다면…… 그러면, 우린 다시 ",
        child,
        "을 만날 수 있어요……",
      ]);
      await digital.say_and_wait([
        "만약…… 우리가 기억한다면, 그러면 ",
        child,
        "은…… 정말로 사라져 버리겠죠……",
      ]);
      await digital.say_and_wait(
        "아하하…… 사실, 이건 현실을 직시할지 말지를 선택하는 것뿐이잖아요…… 이건 그저 정신 질환에 불과하잖아요……",
      );
      era.printButton('覚える（関係を進める）', 1);
      era.printButton('忘れる（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait("아니야!");
        await you.say_and_wait([
          child,
          digital.sex,
          "은 네 상상이 아니야! ",
          digital.sex,
          "은 우리 사랑의 상징이라고!",
        ]);
        await era.printAndWait([
          "두 사람이 제자리에 멈춰 서 있을 때, ",
          child,
          "이 ",
          y_call_d,
          "과 ",
          you.get_colored_name(),
          "의 손을 잡아 이끌어준 것이다.",
        ]);
        await you.say_and_wait([
          child,
          digital.sex,
          "이 나에게 일깨워줬어. 이제 때가 됐다고. 우리가 한 걸음 더 나아가야 할 때라고!",
        ]);
        await era.printAndWait([
          y_call_d,
          "의 몸을 돌려 세우자, 겨우 눈물을 멈췄던 눈가가 다시금 젖어 들었다.",
        ]);
        await digital.say_and_wait("그 말씀은 혹시?");
        await you.say_and_wait([y_call_d, ", 우리 결혼하자."]);
        await digital.say_and_wait(
          "아하하…… 이렇게 보니, 이런 걸 걱정했던 제가 정말 바보 같네요……",
        );
        await era.printAndWait([
          y_call_d,
          "이 웃었다. 눈가의 눈물은 진주가 되어, ",
          you.get_colored_name(),
          "이(가) 세상에서 가장 소중히 여기는 보물이 되었다.",
        ]);
        await era.printAndWait([you.get_colored_name(), "은(는) 입을 맞췄다."]);
        await era.printAndWait("짠맛.");
        await era.printAndWait('興奮の涙だろう。');
        await era.printAndWait("쓴맛.");
        await era.printAndWait('悔しさの涙だろう。');
        await era.printAndWait("……단맛.");
        await era.printAndWait("그것은 분명…… 더 이상 눈물이 아니었으리라.");
        await era.printAndWait("혀가 얽히고, 몸이 밀착되며, 두 손이 깍지를 꼈다.");
        await era.printAndWait(['もう誰も、二人を引き離せない。']);
      } else {
        await era.printAndWait(
          "모든 일은 마치 악몽 같았지만, 사실은 아무 일도 일어나지 않았다.",
        );
        await era.printAndWait([
          '二人の',
          child,
          "은 아무 문제 없이 트레센에 입학했고, ",
          you.get_colored_name(),
          "은(는) ",
          parent,
          "로서 자연스럽게 ",
          child,
          "의 트레이너가 되었다.",
        ]);
        await era.printAndWait([
          y_call_d,
          "은 ",
          digital.sex_code === 1 ? "아버지" : "어머니",
          "로서 종종 ",
          child,
          "과 함께 트레이닝을 하곤 했다.",
        ]);
        await era.printAndWait(
          "큰 쪽과 작은 쪽(비록 큰 쪽도 꽤 작지만)이 나란히 트레이닝하는 모습은 참으로 진귀한 광경이었다.",
        );
        await era.printAndWait([
          child,
          "의 성장을 위해, ",
          you.get_colored_name(),
          "은(는) ",
          digital.sex,
          "를 트레센 기숙사에서 지내게 하고 싶었다.",
        ]);
        await era.printAndWait([
          "하지만 ",
          digital.sex,
          "은 여전히 부모님을 무척 그리워하는 듯했고, 고집을 꺾지 못해 결국 당분간은 집에서 통학시키기로 했다.",
        ]);
        await era.printAndWait([
          "모든 것이 지극히 정상적이었다. 다만 ",
          child,
          "이 예전의 ",
          y_call_d,
          "처럼 자주 「존엄사」하곤 한다는 점만 빼면. 뭐…… 지금의 ",
          y_call_d,
          "도 별반 다르지 않지만 말이다.",
        ]);
        await era.delay(1000);
        era.println();
        await digital.say_and_wait('……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 99
  99: (() => {
    const title = "편지";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     */
    const f = async (digital, you, callname, y_call_d, child) => {
      await you.say_as_unknown_and_wait("디지털 선생님의 신간이 발매된다는 소문 들었어?");
      await you.say_as_unknown_and_wait(
        "에? 정말? 그렇게 오랫동안 소식이 없더니, 드디어 신간을 볼 수 있는 거야?",
      );
      await you.say_as_unknown_and_wait("바로 다음 달 도쿄 전시회에서 나온다나 봐!");
      era.println();
      await era.printAndWait("그러니까…… 대체 누가 이런 헛소문을 퍼뜨린 거야!!");
      await era.printAndWait([
        "며칠 지나지 않아 인터넷에서 화제가 되더니, 이제 모든 디지털 선생님의 팬들은 ",
        y_call_d,
        "이 다음 달에 신간을 낼 거라고 믿고 있다.",
      ]);
      await era.printAndWait([
        y_call_d,
        ' がそれらの投稿を見たときの第一反応は……罪悪感だった。',
      ]);
      await digital.say_and_wait(
        "곰곰이 생각해보니…… 제가 신간을 안 낸 지 꽤 오래됐네요…… 아이고, 정말 면목 없습니다.",
      );
      await era.printAndWait(
        "화면을 향해 고개를 숙이며, 화면 너머의 팬들에게 사과했다.",
      );
      await era.printAndWait([
        "이어서 ",
        y_call_d,
        "은 몸을 돌려 ",
        you.get_colored_name(),
        "의 손을 잡았다. 눈에는 눈물이 그렁그렁 맺힌 채, 금방이라도 울 것 같은 표정을 지었다.",
      ]);
      await era.printAndWait([
        "에휴, 또 시작이군. ",
        you.get_colored_name(),
        "은(는) 생각했다.",
      ]);
      await era.printAndWait([
        "이것은 ",
        digital.sex,
        "가 집필을 위해 은둔을 시작한다는 뜻이며, 앞으로의 집안일이나 식사 준비 등은 전부 ",
        you.get_colored_name(),
        "의 몫이 된다는 것을 의미한다.",
      ]);
      await era.printAndWait(
        "그다지 힘든 일은 아니지만, 다만 이런 날들 동안에는 조금 부족해지는 게 있다……",
      );
      await era.printAndWait([
        y_call_d,
        "로부터 얻는 에너지. ",
        y_call_d,
        "을 보충할 수도 없고, 머리를 쓰다듬거나 귀를 만지작거리거나 꼬리를 깨물 수도 없게 된다……",
      ]);
      await digital.say_and_wait("부탁드려요!");
      await you.say_and_wait("내가 널 하루 이틀 보나.");
      await era.printAndWait("결국 또 허락하고 말았다. 그러고 보니 거절한 적이 있었던가?");
      era.drawLine();
      await era.printAndWait([
        "청소하는 동안 어깨와 등에 느껴지는 뻐근함이 ",
        you.get_colored_name(),
        "에게 운동이 필요함을 일깨워주었다.",
      ]);
      await era.printAndWait(
        "빗자루질하고, 걸레질하고. 로봇 청소기를 하나 살까 생각도 해봤지만, 진열장은 로봇이 닦아주지 않는다는 사실을 깨달았다.",
      );
      await era.printAndWait([
        "그렇다. ",
        you.get_colored_name(),
        "의 집에서 가장 청소하기 까다로운 곳은 진열장이다. 수많은 진열장과 수많은 굿즈들.",
      ]);
      await era.printAndWait("에휴, 먼지털이로 가볍게 먼지만 털어내자.");
      await era.printAndWait([
        "문득 하얀색 사진 한 장이 ",
        you.get_colored_name(),
        "의 시선을 끌었다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "에게 따뜻한 감정을 불러일으킨 사진은 ",
        you.get_colored_name(),
        "과 ",
        y_call_d,
        "의 결혼사진이었다.",
      ]);
      await era.printAndWait([
        '純白の',
        digital.sex_code === 1 ? 'スーツ' : 'ウェディングドレス',
        'がピンクの',
        digital.uma_sex_title,
        'を飾り、頭の赤いリボンは存在感を示し、繊細な首、守りたくなる手、そして涙を含んだ灰青の両目。',
      ]);
      await era.printAndWait([
        'そんなに経っていない気がするのに、',
        digital.sex_code === 1 ? 'スーツ' : 'ウェディングドレス',
        'の ',
        y_call_d,
        ' は目の前にいるようで、何年も過ぎた気もする。',
      ]);
      await era.printAndWait([
        "어쨌든 이 결혼사진을 보는 것만으로도 ",
        you.get_colored_name(),
        "은(는) 꽤 많은 에너지를 보충할 수 있었다.",
      ]);
      await era.printAndWait("소중한 추억이 깃든 물건들 위주로만 청소하기로 했다.");
      await era.printAndWait([
        "수집품실의 문을 열고 들어가니, 안에는 커다란 투명 진열장 몇 개가 놓여 있었고, 온갖 ",
        digital.uma_sex_title,
        "들의 굿즈가 가득 차 있었다.",
      ]);
      await era.printAndWait([
        "이 방은 원래 손님용이었으나, ",
        y_call_d,
        "이 수집하는 물건들이 늘어나면서 거실 진열장만으로는 부족해져 아예 방 하나를 비워 굿즈방으로 만들게 된 것이다.",
      ]);
      await era.printAndWait([
        "참고로 ",
        you.get_colored_name(),
        "이(가) 예전에 모았던 ",
        y_call_d,
        "의 굿즈들은 가장 안쪽 진열장에 보관되어 있다.",
      ]);
      await era.printAndWait([
        "에휴, 예전에 ",
        digital.sex,
        "가 「아와와와! 안 돼요 안 돼, 역시 너무 부끄러워요!」라며 고집을 피우는 바람에 결국 여기까지 밀려나게 된 것이다.",
      ]);
      await era.printAndWait([
        y_call_d,
        ' のグッズの棚の前へ来る。さまざまな姿の ',
        y_call_d,
        ' を見ると、',
        you.get_colored_name(),
        ' は昔の場面を思い出す。',
      ]);
      await era.printAndWait([
        "응원봉을 치켜들고 침을 흘리고 있는 ",
        y_call_d,
        ". 이런 모습이 굿즈로 나온 ",
        digital.uma_sex_title,
        "는 분명 얘 말고는 없을 거다.",
      ]);
      await era.printAndWait([
        "구경하며 걷다 보니 어느덧 진열장의 끝에 다다랐고, 그곳에서 ",
        you.get_colored_name(),
        "은(는) 발견했다—— 한 더미의 짐들을.",
      ]);
      await era.printAndWait("이건……");
      await era.printAndWait([
        "생각났다. ",
        child,
        "의 짐이다. ",
        digital.sex,
        "의 짐이다.",
      ]);
      era.drawLine();
      await digital.print_and_wait(
        "에헤헤, 드디어 거의 다 완성됐어. 이제 남은 건…… 오오오…… 벌써 밥 먹을 시간이네.",
      );
      await digital.print_and_wait("오늘 메뉴는 뭘까요~");
      await digital.print_and_wait("문을 열었더니 세상에, 식탁 가득 음식이 차려져 있네?!");
      await digital.print_and_wait("오늘 무슨 특별한 날인가요? 디지땅, 바빠서 잊어버린 건가?!");
      await digital.print_and_wait("큰일이다 큰일이야, 디지땅 디지땅, 어떻게 이걸…… 에?");
      await you.say_and_wait([y_call_d, ", 표정을 보니 뭔가 놓친 줄 아나 본데?"]);
      await digital.say_and_wait(
        'えええ？ 私の、私のせい、忙しくて忘れちゃった！ デジは昇天して……',
      );
      await you.say_and_wait(
        "스톱 스톱, 잠시만. 오늘 이런 상을 차린 건 온갖 추억이 깃든 이걸 찾았기 때문이야——",
      );
      await digital.print_and_wait([callname, "가(이) 들고 있는 건…… 봉투인가?"]);
      await digital.say_and_wait(
        "이 시대에 편지를 보다니 정말 신기하네요. 설마 미래에 보내는 편지라거나, 아니면 유령이 보낸 편지 같은 건가요……",
      );
      await you.say_and_wait(
        "비슷해. 하지만 네 생각과는 좀 다를걸.",
      );
      await digital.print_and_wait([
        callname,
        ' から渡された手紙には朱肉の印もある。模様は以前買ったトレセングッズそのもの。差出人は……',
      ]);
      await digital.print_and_wait([
        "오오오오! 이거 정말 깜짝 놀랐네. 설마, ",
        child,
        "이 쓴 편지라니......",
      ]);
      await digital.say_and_wait("설마 이거 저세상에서 온 편지 같은 건가요?! 정말 실존하는 거였나요?!");
      await digital.say_and_wait(
        "열면 막 공포 게임처럼 악령이 씌거나 하는 거 아니겠죠?!",
      );
      await you.say_and_wait("글쎄, 그러면 한번 열어볼까?");
      await digital.say_and_wait(
        "아뇨 아뇨 아뇨, 왠지 먼저 퇴마 의식이라도 해야 할 것 같아요. 예전 할로윈 승부복의 그 부적부터 좀 꺼내오고……",
      );
      await digital.print_and_wait(
        "사실 편지 봉투를 들고 계속 횡설수설하고 있지만, 손에는 힘이 다 빠진 듯 가벼운 편지 한 통조차 제대로 들지 못하고 부들부들 떨리고 있다.",
      );
      await you.say_and_wait('……');
      await digital.print_and_wait([
        callname,
        "를(을) 바라보았다. ",
        you.sex,
        '……',
        you.sex,
        "도 분명 같은 기분이겠지.",
      ]);
      await digital.print_and_wait([
        callname,
        "의 옆에, 의자 하나에 둘이서 꼭 붙어 앉았다.",
      ]);
      await digital.print_and_wait([
        you.sex,
        "가 팔을 뻗어 나를 꽉 안아주었다…… ",
        you.sex,
        "의 손바닥에서 배어 나오는 식은땀이 느껴질 정도야.",
      ]);
      await digital.print_and_wait("열어보자.");
      await digital.print_and_wait("부스럭…… 안의 종이가 마찰하는 소리가 들린다.");
      await digital.print_and_wait(
        "실링 왁스를 떼어내고, 봉투를 열어, 그 안에 접힌 편지지를 꺼내고……",
      );
      await digital.print_and_wait("펼쳐보자.");
      await digital.print_and_wait("편지지를 펼치자, 그 안에는 이렇게 적혀 있었다——");
      era.println();
      era.drawLine();
      await era.waitAnyKey();
      era.setOffset(8);
      era.setWidth(8);
      await era.printAndWait("아빠 엄마에게：");
      await era.printAndWait('ありがとう。', {
        align: 'center',
        isParagraph: true,
      });
      await era.printAndWait(["——당신들의 ", child], { align: 'right' });
      era.drawLine();
      await era.waitAnyKey();
      era.setWidth(24);
      era.setOffset(0);
      era.println();
      await digital.say_and_wait(
        "으햐하, 뭐야, 역시나네요. 당연히 이런 내용이 적혀 있을 줄 알았다니까요!",
      );
      await you.say_and_wait("당연하지!");
      await digital.say_and_wait(
        "으오오오, 자자, 밥 먹어요 밥! 푹 쉬자구요!",
      );
      await digital.print_and_wait([
        "김이 모락모락 나는 맛있는 요리들, 피어오르는 김, 따뜻한 ",
        callname,
        ", 입가로 가져다주는 부드러운 햄버그 스테이크.",
      ]);
      await digital.print_and_wait([
        callname,
        "가(이) 반찬을 집어 건네줄 때의 그 미소, 당연히 기분 좋게 즐겨야겠지.",
      ]);
      await digital.print_and_wait([
        callname,
        "의 허벅지를 툭툭 쳤다. 흠, 최근에 집안일 하면서 근육 좀 붙었나 본데……",
      ]);
      await you.say_and_wait([
        y_call_d,
        "? 지금? 여기서? 밥 다 먹고 하는 게 어때?",
      ]);
      await digital.say_and_wait(
        "다 먹기 전이든 후든 결과는 똑같잖아요? 똑같이 먹는 거 아닌가요? 구헤헤…… 츄릅——",
      );
      await digital.print_and_wait("와, 나 방금 정말 위험한 소리를 낸 것 같아.");
      await digital.say_and_wait(
        "으오오오오, 그래요, 맞아요, 바로 지금이에요! 일주일이나 됐다고요, 일주일 동안 참아왔단 말이에요! 으으으, 일주일 동안 제가 어떻게 버텼는지 아세요?!",
      );
      await digital.say_and_wait(
        "세상에, 디지땅은 일주일 내내 동인지만 그렸단 말이에요. 관례대로라면 다 그린 후엔 축하 파티를 해야 하는 거 아닌가요?!",
      );
      await you.say_and_wait([
        "아니 아니, 그건 네 문제잖아! 그리고 ",
        y_call_d,
        ", 너 다 그렸어?",
      ]);
      await digital.say_and_wait(
        "……조, 조금 남았지만, 진짜로 조금 남았어요! 그리고 그게 중요한가요? 제가 더 중요한 거 아니에요?!",
      );
      await you.say_and_wait(
        "아이고, 너 일주일 동안 나 찬밥 신세로 만들었잖아! 그래놓고 지금 바로 먹어 치우겠다고? 나중에 뒷정리도 내 몫이잖아!",
      );
      await digital.print_and_wait("조…… 조금 미안한 기분이 들지만…… 하지만……");
      await digital.say_and_wait("정말 죄송해요! 나중에 뒷정리 좀 부탁드릴게요!");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] oshi
  oshi: (() => {
    const title = "최애";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} palmer メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      teio,
      mcqueen,
      opera,
      doto,
      palmer,
      helios,
      taste,
      you,
      callname,
      y_call_d,
    ) => {
      teio.name = "어린애 같은 면이 있는 " + teio.uma_sex_title;
      opera.name = "전혀 신경 쓰지 않는 듯한 " + opera.uma_sex_title;
      doto.name = "덜렁거려 보이는 " + doto.uma_sex_title;
      mcqueen.name = '薄紫の芦毛の' + mcqueen.uma_sex_title;
      palmer.name = "어느 밤색 털의 " + palmer.uma_sex_title;
      helios.name = "파란 머리로 염색한 듯한 " + helios.uma_sex_title;
      if (era.get('cflag:0:位置') !== location_enum.beach) {
        await taste.say_and_wait("합숙! 그래. 바로 그거네!");
        await era.printAndWait(
          "과연 그 이사장이라고 해야 할까, 지금은 분명 여름 합숙 기간이 아닌데도 갑자기 이런 상황이 벌어졌다.",
        );
      }
      await you.say_and_wait("합숙인가, 나쁘지 않네.");
      await era.printAndWait([
        digital.uma_sex_title,
        "들에게 합숙은 단순한 여행이 아니라 트레이닝이라는 중요한 단계가 포함된 활동이었고, 이는 마치 여름 방학 숙제와도 같았다.",
      ]);
      await era.printAndWait([
        "다행히 대부분의 ",
        digital.uma_sex_title,
        "들은 트레이닝을 사랑했고, ",
        you.get_colored_name(),
        "의 담당 ",
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        " 또한 예외는 아니었다.",
      ]);
      await era.printAndWait([
        "그러고 보면 ",
        digital.get_colored_name(),
        "은 트레이닝 그 자체보다 최애들과 같은 일을 한다는 행위 자체를 더 즐기는 것 같았는데, 과연 ",
        digital.sex,
        "가 정말로 좋아하는 것이 트레이닝 그 자체일까 하는 의문이 들었다.",
      ]);
      await era.printAndWait([
        "목적지에 도착하기 전까지 이런저런 잡생각을 하는 사이, 바퀴가 구르며 초록빛 위로 금빛과 쪽빛이 덮였고, ",
        you.get_colored_name(),
        "은(는) 합숙 장소에 도착했다.",
      ]);
      await era.printAndWait("과연 트레센. 준비된 환경이 꽤 훌륭했다.");
      await era.printAndWait([
        "주변을 둘러보니 곳곳에 수영복 차림의 ",
        digital.uma_sex_title,
        '。',
        digital.get_colored_name(),
        ' は尊さで死にかけるだろう。訓練以前に、',
        digital.sex,
        '……生きて帰れるのか？',
      ]);
      era.drawLine();
      await era.printAndWait([
        "짜잔, ",
        digital.get_colored_name(),
        "이 나타났다. 학교 수영복, 이른바 스쿨미즈라 불리는 수영복 차림이었는데, 적당히 몸에 붙어 트레이닝하기에 가장 편해 보이는 복장이었다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "는 고개를 들어 멀리 펼쳐진 절경을 눈에 담더니, 미친 듯이 숨을 크게 들이마셨다……",
      ]);
      await digital.say_and_wait("푸른 하늘…… 하얀 구름…… 불어오는 청춘의 바람……");
      await digital.say_and_wait([
        "여기에 있는 모든 ",
        digital.uma_sex_title,
        "짱들! 아아! 숨을 쉬는 것조차 신성모독 같아……",
      ]);
      await digital.say_and_wait("이토록 불경한데도 참을 수가 없어서, 흡……!");
      await era.printAndWait([
        you.get_colored_name(),
        "을(를) 발견하고는 숨을 들이마시다 말고 사레가 걸려 쿨럭거렸다.",
      ]);
      await digital.say_and_wait(["콜록콜록, ", callname, "(이)였군요!"]);
      await digital.say_and_wait("아와와, 트레이닝 시작해요! 전 벌써 준비 다 됐다구요!");
      await era.printAndWait([
        "크게 손을 흔들며 평소와 다름없어 보이는 ",
        digital.get_colored_name(),
        "이었지만, 왠지 조금 위화감이 느껴졌다.",
      ]);
      await you.say_and_wait("모처럼 여기까지 왔는데, 먼저 좀 쉬지 않아도 괜찮겠어?");
      await era.printAndWait([
        "마침 사이가 좋아 보이는 두 명의 ",
        digital.uma_sex_title,
        "가 곁을 지나갔다.",
      ]);
      await palmer.say_and_wait("너 얼굴 좀 봐. 아이스크림 다 묻었잖아! 이래서야 원.");
      await helios.say_and_wait("에헤헤, 그럼 네가 닦아주면 되잖아!");
      await era.printAndWait([
        "그야말로 왕도적인 전개에 ",
        digital.get_colored_name(),
        "은 눈을 굴리며 행복한 미소를 지었다.",
      ]);
      await helios.say_and_wait("오늘 밤에 여름 축제가 열린다는데, 구경 고고씽!");
      await palmer.say_and_wait("잠깐, 왜 마음대로 결정하는 거야!");
      await era.printAndWait([
        "배를 어루만지며 잘 먹었다고 중얼거리던 ",
        digital.get_colored_name(),
        "이 갑자기 표정을 싹 바꾸었다.",
      ]);
      await digital.say_and_wait([
        "헤헤…… 좋은 걸 봤네. 아냐 아냐! 흠! ",
        callname,
        "! 이제 트레이닝하러 가요!",
      ]);
      await era.printAndWait([
        '胸を叩いて、必死に真面目に見せている。',
        digital.get_colored_name(),
        '、どうした？',
      ]);
      await era.printAndWait([
        digital.sex,
        "의 그 진지한 눈빛을 보니 ",
        you.get_colored_name(),
        "도 더는 뭐라 할 수 없었고, 트레이닝을 시작하기로 했다.",
      ]);
      era.drawLine();
      await era.printAndWait(
        "스톱워치를 눌렀다. 모래사장에서 달리는 것은 잔디나 더트와는 또 달랐기에, 속도가 떨어지는 것은 당연한 일이었다.",
      );
      await you.say_and_wait("좀 쉬었다 하자.");
      await era.printAndWait([
        digital.sex,
        "에게 물과 수건을 건넸다. 바닷가라 물은 사방에 널려 있었지만, 땀은 닦아내야 했다.",
      ]);
      await era.printAndWait([
        "수건을 받아든 ",
        digital.get_colored_name(),
        "이 얼굴을 닦던 도중, 눈길이 다시 저편의 바다의 집으로 향했다.",
      ]);
      await doto.say_and_wait("죄죄죄죄송해요! 옷에 소스를 묻히다니!");
      await opera.say_and_wait(
        "아아, 나의 광채는 이런 정도로 어두워지지 않아. 오히려 흠집 덕분에 더욱 눈부시게 빛날 뿐이지!",
      );
      await era.printAndWait("음, 확실히 개성 넘치는 콤비였다. 제법 이름난 녀석들이기도 했다.");
      await digital.say_and_wait("꿀꺽꿀꺽…… 으으으응!");
      await era.printAndWait("갑자기 엔진이 돌아가는 듯한 소리가 들렸는데……?");
      await digital.say_and_wait([
        "아! 그럼! ",
        callname,
        "! 전 트레이닝하러 갈게요. 이어서 열 번 왕복할 거라구요!",
      ]);
      await era.printAndWait("한쪽 주먹을 불끈 쥐고 높이 치켜드는 모습이, 혹시 너무 무리하는 건 아닐까 싶었다.");
      await era.printAndWait("그럼 이렇게 하는 건 어떨까.");
      await you.say_and_wait(
        "오늘 밤 근처에서 축제가 있다는데, 같이 구경 가지 않을래?",
      );
      await digital.say_and_wait("오……! 좋네요, 축제! 좋아요, 가요!");
      await era.printAndWait([digital.sex, 'を少し休ませたい。']);
      era.drawLine();
      await era.printAndWait(
        "공중에 매달린 전등들이 보도블록을 색색으로 물들였고, 길 양옆의 노점들도 오렌지빛 조명을 밝히며 호응하고 있었다.",
      );
      await era.printAndWait([
        "바다로 합숙을 온 것이긴 했지만, 꽤 많은 ",
        digital.uma_sex_title,
        "들이 유카타를 챙겨와 이 귀한 축제를 마음껏 즐기고 있었다.",
      ]);
      await digital.say_and_wait([
        "흠흠, 그럼 ",
        callname,
        ", 어디부터 구경해볼까요?",
      ]);
      await era.printAndWait(
        '一目で、りんご飴、たい焼き、チョコバナナなどの軽食、絵馬やお面の土産、それに風船割りなどのゲーム屋台。',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "이 한 곳을 지목했다.",
      ]);
      await era.printAndWait([
        "유카타를 입은 두 명의 ",
        digital.uma_sex_title,
        "가 금붕어를 건지고 있었다.",
      ]);
      await era.printAndWait(
        "그중 한 명이 재빠른 손놀림으로 종이 뜰채를 휘둘러 금붕어 한 마리를 바로 건져 올렸으나, 그 대가로……",
      );
      await teio.say_and_wait(
        "아하하, 금붕어를 낚아야지 물을 낚으면 어떡해. 이것 봐, 옷이 다 젖었잖아.",
      );
      await mcqueen.say_and_wait("에에에엣?!");
      await digital.say_and_wait("쓰읍……");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 길게 숨을 내쉬더니……",
      ]);
      await digital.say_and_wait(
        "그럼 그럼, 어느 가게부터 가볼까요? 맛있어 보이는 노점이 정말 많네요!",
      );
      await era.printAndWait([
        '以前なら',
        digital.sex,
        'は目を輝かせて止まらなかったはずだ。',
      ]);
      await era.printAndWait("그렇다면, 다음엔……");
      await you.say_and_wait("내가 가보고 싶은 곳이 하나 있어.");
      era.drawLine();
      await era.printAndWait("북적이는 축제 인파에서 벗어나, 지금은 한적해진 밤바다로 향했다.");
      await era.printAndWait('後ろはオレンジ、前は青と白。');
      await era.printAndWait("먼지도 없었지만 바지를 털고 모래사장 위에 그대로 주저앉았다.");
      await era.printAndWait(
        "밤의 해변은 시원하다고 하긴 어려웠다. 불어오는 바람은 축축하고 눅눅했으며, 오직 엉덩이로만 서늘함이 느껴졌다.",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 ",
        you.get_colored_name(),
        "을(를) 바라보더니 똑같이 자리에 앉았고, 그렇게 둘은 어색하게 달과 바다를 바라보았다.",
      ]);
      await digital.say_and_wait([
        callname,
        "이(가) 하고 싶었던 일이, 여기 앉아서 바다를 보는 거였나요?",
      ]);
      await era.printAndWait("조금 더 솔직해지기로 했다.");
      await you.say_and_wait([y_call_d, ", 무슨 일 있었어?"]);
      await digital.say_and_wait("에? 아무 일도 없는데 말입죠?");
      await era.printAndWait([
        'そう言うとき、',
        digital.get_colored_name(),
        ' は虚心そうに、無意識に手で胸のやり取りを遮っていた。',
      ]);
      await you.say_and_wait("네가 하고 싶은 일을 억누르고 있는 거야?");
      await era.printAndWait('そうじゃないだろ？');
      await digital.say_and_wait([
        "에! 아녜요! 왜냐면, 오늘 제가 하고 싶은 일은 ",
        callname,
        "과(와) 함께 ",
        callname,
        "이(가) 하고 싶은 일을 하는 거니까요!",
      ]);
      await you.say_and_wait("……왜 그렇게 생각하는 거야?");
      await digital.say_and_wait([
        "왜냐면…… ",
        callname,
        "은(는) 저랑 같이 계속 덕질을 도와주셨으니까요……",
      ]);
      await era.printAndWait([
        "말을 하면서 ",
        digital.get_colored_name(),
        "은 고개를 숙인 채 우물쭈물거렸다.",
      ]);
      await digital.say_and_wait("게다가 제 헛소리까지 계속 들어주시고……");
      await era.printAndWait([
        "고개를 숙인 채 ",
        digital.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "을(를) 힐끗 쳐다보았는다. 얼굴이 발갛게 달아올라 있었다.",
      ]);
      await digital.say_and_wait(
        "덕분에 덕질도 훨씬 더 즐거워졌고, 매일매일이 이렇게 으헤헤할 줄은 저도 몰랐거든요……",
      );
      await digital.say_and_wait([
        "이제 ",
        callname,
        "이(가) 없는 혼자만의 오타쿠 활동으로는 돌아갈 수 없게 됐다구요!",
      ]);
      await era.printAndWait([
        "말을 마친 ",
        digital.get_colored_name(),
        "은 허리에 손을 얹으며, ",
        you.get_colored_name(),
        "(이)라는 동지가 있다는 사실에 자부심을 느끼는 듯 보였다.",
      ]);
      await digital.say_and_wait(["그러니까, ", callname, " 도 제게 소중한 존재라구요!"]);
      await era.printAndWait([
        "모든 ",
        digital.uma_sex_title,
        "를 가슴에 품고 있는 것처럼, ",
        you.get_colored_name(),
        " 또한 가슴 속에 품고 있었다.",
      ]);
      await digital.say_and_wait([
        "수많은 ",
        digital.uma_sex_title,
        "들이 매일 뜨거운 염원을 품고 달리고 있죠.",
      ]);
      await digital.say_and_wait([
        "이 세계는 그야말로, 대 ",
        digital.uma_sex_title,
        "짱 존귀사의 시대!",
      ]);
      await era.printAndWait([
        "멋지게 손가락을 뻗어 ",
        you.get_colored_name(),
        "을(를) 가리켰다.",
      ]);
      await digital.say_and_wait([
        "앞뒤 좌우 어디를 봐도 반짝반짝 빛나는 ",
        digital.uma_sex_title,
        "짱들이 가득해요!",
      ]);
      await digital.say_and_wait("언제 존귀함에 당해 죽을지 모르는 게, 꼭 전쟁터 같달까요.");
      await digital.say_and_wait(
        "이 전장에서 함께 달리며 때로는 감동의 치명타를 입고, 때로는 기쁨을 나누는 것.",
      );
      await digital.say_and_wait("그게 바로, 전우죠!");
      era.drawLine();
      await digital.say_and_wait("하지만, 제가 늘 도움만 받고 있는 건 아닐까요?");
      await digital.say_and_wait(
        'それに甘んじるのは、闇を抱くことにならない？',
      );
      await digital.say_and_wait([
        "그래서 말인데, 저도 ",
        callname,
        "을(를) 위해 뭔가를 하고 싶어요. ",
        callname,
        "이(가) 하고 싶은 일, 제가 이루어 드릴게요!",
      ]);
      await digital.say_and_wait("자, 어서요! 온 힘을 다할 거라구요!");
      await era.printAndWait([
        digital.get_colored_name(),
        "이 자신이 좋아하는 일을 억누르고 있는 게 아니라는 사실에 ",
        you.get_colored_name(),
        "은(는) 안심했고, 동시에 ",
        digital.sex,
        "가 ",
        you.get_colored_name(),
        "을(를) 배려해준다는 점에 기분이 좋아졌다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "는 언제나 ",
        digital.uma_sex_title,
        "들에 대한 대가 없는 사랑을 품고 달려왔다.",
      ]);
      await era.printAndWait([
        "그렇다면 ",
        you.get_colored_name(),
        "이(가) 하고 싶은 일은 무엇일까.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 바로 그 모습을 응원하고 싶어서 ",
        digital.sex,
        "의 트레이너가 된 것이었고, 정말로 하고 싶었던 일은……",
      ]);
      await you.say_and_wait("디지털 네가 생기 넘치는 모습을 보고 싶어.");
      await era.printAndWait([
        digital.sex,
        'が応援で全力を出す姿、レースで誰にも止められない姿、',
      ]);
      await era.printAndWait([
        digital.sex,
        'が',
        digital.uma_sex_title,
        'を推して尊死する姿、',
        you.get_colored_name(),
        ' と',
        digital.uma_sex_title,
        'の話で止まらなくなる姿が見たい。',
      ]);
      await era.printAndWait([
        "수만 가지 말을 한마디로 줄이자면, ",
        digital.sex,
        "가 행복해하는 모습을 보고 싶다는 뜻이었다.",
      ]);
      await digital.say_and_wait("제 생기…… 넘치는 모습요?");
      await digital.say_and_wait("저의 최애에 대한 마음과…… 같은 건가요?");
      await you.say_and_wait("그래.");
      await era.printAndWait([
        "하지만 ",
        digital.get_colored_name(),
        "은 여전히 자신이 없는 듯했다.",
      ]);
      await digital.say_and_wait(
        "꽃의 화분이나 하고, 보컬의 백댄서나 하는 저를요?",
      );
      await digital.say_and_wait("아니, 그러니까, 어째서요? 여전히 믿기지 않지만요.");
      await digital.say_and_wait(
        "음…… 우우, 조금 기쁘기도 하고, 아니 그보다 영광이라고 해야 하나, 왠지 좀 쑥스럽네요.",
      );
      await digital.say_and_wait(
        "꼭 회지를 낸 작가가 감상평을 받았을 때 같은 기분이에요!",
      );
      await era.printAndWait("참으로 적절한 비유였다.");
      await digital.say_and_wait("그러니까…… 이건——");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 부끄러운지 얼굴을 가려버렸다. 이건—— 대체 무엇일까, 참 흥미로웠다.",
      ]);
      await digital.say_and_wait("그게——");
      await digital.say_and_wait("오타쿠 활동 재개! 이제 더는 사양하지 않겠어요!");
      await era.printAndWait("드디어 본모습으로 돌아왔군.");
      await digital.say_and_wait("온 힘을 다해 생기 넘치는 모습을 보여드릴게요!");
      await era.printAndWait([
        "우리가 아는 ",
        digital.get_colored_name(),
        "이었다.",
      ]);
      await digital.say_and_wait([
        "그럼 그럼! 얼른 ",
        digital.uma_sex_title,
        "짱 에너지를 섭취하러 가요!",
      ]);
      await digital.say_and_wait('GOGOGO！');
      await era.printAndWait("달려라!");
      await era.printAndWait(
        "푸른 바다도 아름답지만, 역시 이 축제에는 오렌지빛 조명이 더 잘 어울렸다.",
      );
      await era.printAndWait([
        "아무도 없는 한적한 모래사장이 아니라, ",
        digital.get_colored_name(),
        "과 함께 축제 속을 마음껏 누볐다!",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] shine
  shine: (() => {
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait("우후후, 에헤헤!");
      await era.printAndWait([
        "트레이닝실의 ",
        digital.get_colored_name(),
        "이 눈을 가늘게 뜨고 있었다. 아마도 ",
        digital.uma_sex_title,
        "를 상상하는 모양이었다. 누군가 휴대폰을 꺼내 신고할지도 모를 웃음소리를 내며 무척이나 즐거워 보였다.",
      ]);
      await you.say_and_wait("왜 그래? 뭐가 그렇게 즐거워?");
      await digital.say_and_wait("다음 응원 활동을 어떻게 할지 생각 중이었거든요!");
      await era.printAndWait([
        "그리고 ",
        digital.get_colored_name(),
        "은 장황한 논리를 늘어놓았는다. 요지는 응원이 ",
        digital.get_colored_name(),
        "에게 힘을 주니 응원 또한 트레이닝의 일종이라는 것이었다.",
      ]);
      await era.printAndWait("음? 듣고 보니 꽤 일리가 있는 것 같은데?");
      await you.say_and_wait("그렇게 말하니 나도 같이 가보고 싶네.");
      await era.printAndWait([
        you.get_colored_name(),
        "도 함께 가기로 했다. 겸사겸사 ",
        digital.get_colored_name(),
        "에 대해 더 알아볼 기회이기도 했다.",
      ]);
      await digital.say_and_wait(
        "에? 시험 삼아 가보는 건 괜찮지만…… 이거 상당히 마니아틱하다구요? 많이 힘들 텐데요?",
      );
      era.drawLine();
      await era.printAndWait([digital.sex, "의 말이 맞았다."]);
      await digital.say_and_wait(
        "한신 경기장에 오길 정말 잘했어요!! 멋진 데뷔전이었어!",
      );
      await digital.say_and_wait([
        "1위를 차지한 ",
        digital.uma_sex_title,
        "짱, 작년에 은퇴한 ",
        digital.elder_sibling_sex_title,
        "의 의지를 이어받아 데뷔한 거라구요! 이런 계승되는 서사, 너무 뜨거워요옷!",
      ]);
      await era.printAndWait([
        "그리고 ",
        you.get_colored_name(),
        " 에게는,",
      ]);
      await digital.say_and_wait(
        "한 치의 양보도 없는 두 사람! 나카야마 경기장의 직선은 아주 짧다구요! 와앗!",
      );
      await digital.say_and_wait(
        "으으…… 너무 멋져요. 적성과 이론을 초월해 내면에서 우러나오는 경쟁심이라니, 최고예요……",
      );
      await era.printAndWait("하루 만에,");
      await digital.say_and_wait(
        '大井のダートは、マイルが多い他場より、差し追込の好勝負が見やすい……',
      );
      await digital.say_and_wait([
        "그 이론을 무시하고 도주를 선택한 ",
        digital.sex,
        "는 비록 결과는 졌지만 행복하게 웃고 있네요.",
      ]);
      await era.printAndWait("일본의 경기장 거의 전부를 훑는 일은,");
      await digital.say_and_wait([
        '今回出た芦毛の',
        digital.uma_sex_title,
        '、前走までの成績は良くなかったのに、',
        digital.sex,
        'はまだ闘志を燃やして立ってる！',
      ]);
      await era.printAndWait("확실히 조금…… 고된 일이었다.");
      await digital.say_and_wait([
        "느껴지시나요?! ",
        digital.uma_sex_title,
        "짱들의 뜨거운 열기! 눈부심! 전율의 연속!",
      ]);
      await era.printAndWait("확실히 느껴졌다. 아주 진하고 강렬했다!");
      await era.printAndWait(
        "함께 손을 휘두르다 보니 어느새 팔에는 감각이 없어졌고, 박수를 하도 쳐서 손바닥은 부어올랐으며, 선을 따라 뛰어다니느라 다리 또한 고난을 겪었다.",
      );
      await era.printAndWait([
        "곁에 있는 ",
        digital.get_colored_name(),
        "을 보니 기운이 펄펄 넘쳤고 숨조차 차지 않은 모습이었다. ",
        digital.sex,
        "는…… 혹시 이쪽으로 타고난 걸까?",
      ]);
      await digital.say_and_wait([
        "에? ",
        callname,
        ", 많이 힘드신가요? 음냐, 제가 너무 신난 나머지 배려를 못 했네요. 역시 너무 힘들었나요……",
      ]);
      await era.printAndWait(
        "레이스가 끝난 뒤 관중들이 이미 흩어진 뒤라, 빈자리에 찾아 앉는 것은 어렵지 않았다.",
      );
      await digital.say_and_wait([
        "역시나 ",
        digital.uma_sex_title,
        'ちゃんたちのあの気概が好きなんだ。',
        digital.couple_title,
        'の、元気いっぱいな姿が見たい。',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        "들이 휩쓸고 지나간 빈 경기장을 바라보며, ",
        digital.get_colored_name(),
        "은 줄곧 품어왔던 진심을 내비쳤다.",
      ]);
      await era.printAndWait([
        "경기장 전체의 분위기를 달궈놓고 하늘까지 뒤덮어버릴 수 있는 존재, 그게 바로 ",
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        "양손 가득 응원 굿즈를 들고 있는 ",
        digital.get_colored_name(),
        "에게 오늘은 그야말로 수확이 가득한 날이었다.",
      ]);
      await digital.say_and_wait([
        "정말 너무 행복해요. 설마 ",
        callname,
        "이(가) 제 걸음을 따라와 주실 줄이야! 이제 당신도 핵심 팬이라구요! 역시 동지예요!",
      ]);
      await era.printAndWait([
        "무척이나 기뻐 보이는 ",
        digital.get_colored_name(),
        "을 보자, ",
        you.get_colored_name(),
        "의 하루치 피로도 씻은 듯이 사라졌다.",
      ]);
      await era.printAndWait('明日起きて腰が痛くなければいいが。');
    };
    f.title = "번뜩임, 응원 활동!";
    return f;
  })(),

  // [번역 대상] univ
  univ: (() => {
    const title = "우주에서 서로를 이해하기";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {string} self_call アグネスデジタルの自称
     * @param {PrintedSpan} d_call_u アグネスデジタルのハルウララへの呼び方
     */
    const f = async (digital, you, callname, self_call, d_call_u) => {
      await digital.print_and_wait([
        digital.name,
        '、',
        digital.uma_sex_title,
        "짱들을 위해 세상에 존재하는 ",
        digital.uma_sex_title,
        "로서, 오늘도 온 힘을 다해 최애 활동 중이었다!",
      ]);
      await digital.print_and_wait([
        'いやいや、今日も聖地巡礼だ。',
        digital.uma_sex_title,
        'ちゃんたちが残した聖跡を、もう一度丁寧に磨き直す！',
      ]);
      await digital.say_and_wait([
        "쿠후후, 성지순례 가는 길에 ",
        callname,
        " 선물도 좀 챙겨와야겠네요.",
      ]);
      await you.say_as_unknown_and_wait([
        "잘은 모르겠지만, 너랑 ",
        callname,
        ", 사이가 꽤 좋아 보이는데, 같이 가보는 건 어때?",
      ]);
      await digital.say_and_wait([
        "뭐라구요, ",
        callname,
        "과(와) 함께 성지순례를 가라구요? 오오…… 오오오오!",
      ]);
      await digital.print_and_wait([
        "단 한 번도 생각지 못한 전개였다. ",
        callname,
        "과(와) 함께하는 성지순례라니!",
      ]);
      await digital.print_and_wait(
        "이건 마치 야생 서바이벌 팀에 베어 그릴스가 합류한 격!",
      );
      await digital.say_and_wait("정말 감사합니다! 당장 가서 제안해볼게요!");
      era.drawLine();
      await era.printAndWait([
        "정말로 생각지도 못했는데, ",
        digital.get_colored_name(),
        "이 다가와 ",
        you.get_colored_name(),
        "에게 성지순례를 같이 가자고 제안했다.",
      ]);
      await era.printAndWait([
        "담당 ",
        digital.uma_sex_title,
        "를 위해 지난번처럼 ",
        you.get_colored_name(),
        "도 만반의 준비를 갖췄다.",
      ]);
      await era.printAndWait([
        "약속 시간에 맞춰 집결 장소에 나가니, ",
        digital.sex,
        "가 ",
        you.get_colored_name(),
        "을(를) 향해 손을 흔들고 있었다. 기세가 아주 등등해 보였다.",
      ]);
      await era.printAndWait([
        "평소처럼 분홍색 내의에 회색 겉옷을 입고 있었다. ",
        digital.sex,
        "의 성격상 「I Love UMA」 같은 문구가 적혀 있어도 이상하지 않을 것 같았다.",
      ]);
      await digital.say_and_wait([
        callname,
        "이(가) 정말 오실 줄이야! 전 거절당할 준비 다 하고 있었는데……",
      ]);
      await you.say_and_wait("아니 아니, 아무리 생각해도 거절할 리가 없잖아.");
      await digital.say_and_wait("그럼, 시작하죠! 성지순례!");
      await era.printAndWait("큰 손짓으로 전철역으로 향하는 큰길을 가리켰다.");
      era.drawLine();
      await era.printAndWait(
        "도착한 곳은 아주 평범한 목장이었다. 울타리 안에서 한가롭게 풀을 뜯는 소들이 보였는데, 여기가 성지라고?",
      );
      await digital.say_and_wait([
        "아뇨 아뇨, ",
        callname,
        ", 겉모습만 봐서는 안 된다구요!",
      ]);
      await era.printAndWait("디지털이 위풍당당하게 가리킨 것은……풀숲?");
      await era.printAndWait(
        "목장 주인이 관리를 잘 안 했는지 온갖 잡풀들이 무성하게 자라 있었다.",
      );
      await you.say_and_wait("경화수월? 언제부터!");
      await digital.say_and_wait("사실 제가 보여주고 싶었던 건 이거예요.");
      await era.printAndWait([
        digital.sex,
        "가 집어 든 것은 이슬이 맺힌 네잎클로버였다.",
      ]);
      await digital.say_and_wait([
        "맞아요! 얼마나 많은 ",
        digital.uma_sex_title,
        "들이 행운의 상징인 네잎클로버를 동료나 경쟁자에게 선물했겠어요? 서로 치열하게 다투면서도 서로를 축복해주는 그 마음, 우우우——",
      ]);
      await you.say_and_wait(
        'いやいや、四つ葉と言えば神社だろ？ 雨の日の、鳥居に雨がかかる神社……',
      );
      await era.printAndWait("존재하지 않는 기억을 입 밖으로 내버린 걸까?");
      await digital.say_and_wait("! 세상에!");
      await digital.say_and_wait([
        callname,
        "! 뭘 좀 아시네요! 역시! 이런 성지는 서로 교류하면서 돌아다녀야 해요!",
      ]);
      era.drawLine();
      await digital.say_and_wait("자 그럼 다음 역은 여기예요. 언뜻 보기엔 평범한 공원 같지만, 사실은——");
      await digital.say_and_wait("힘이 넘쳐흐르는 공원이라구요!");
      await era.printAndWait("히, 힘이라니?");
      await digital.say_and_wait([
        "네! 수많은 ",
        digital.uma_sex_title,
        "들이 여기 모여서 쉬기도 하고, 그리고 저 모래사장요!",
      ]);
      await you.say_and_wait(
        "오오? 생각났어. 팀 골드가 트레이닝하던 그 모래사장이구나?",
      );
      await digital.say_and_wait("맞아요! 바로…… 에? 방금……");
      await era.printAndWait("잠깐, 팀 골드가 대체 어느 팀이었더라?");
      await you.say_and_wait([
        "일단, 그건 넘어가고, 저 노점 좀 봐. ",
        d_call_u,
        "가 차렸던 곳 아니야?",
      ]);
      await digital.say_and_wait("오오오오오!");
      era.drawLine();
      await digital.say_and_wait(
        'うまい！ うまい！ これが王者ラーメン?! 王者すぎる！',
      );
      await era.printAndWait(
        "골목 깊숙한 곳에 숨겨진 라멘 가게에 도착했다. 외관이나 내부 인테리어 모두 범상치 않은 고수의 기운이 느껴졌다.",
      );
      await digital.say_and_wait(
        '量も超えてる！ これを征服したのは、やっぱり王者だ！',
      );
      await you.say_and_wait(
        'この王者ラーメンより、秘密メニューのほうが気になる……',
      );
      await you.say_as_passer_by_and_wait('店長', [
        'おっ？ ',
        you.sex_code === 1 ? '兄ちゃん' : 'ねえちゃん',
        'やるな！ 秘密メニューまで知ってるとは！',
      ]);
      await era.printAndWait([
        'そばでざるを持って料理していた店長が、驚いて声をかけてきた。',
      ]);
      await digital.say_and_wait(
        "비밀 메뉴요? 어째서? 어째서 저만 몰랐던 거죠?",
      );
      await era.printAndWait([
        '王者ラーメンを征服して興奮していた ',
        digital.get_colored_name(),
        ' は、それを聞いて毛まで逆立った。',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        "이야, 방금 그 하찌미 드링크 가게까지 해서 모든 성지순례 완료!",
      );
      await era.printAndWait(
        "새벽의 첫 햇살을 맞이하며 시작해 해질녘 노을을 배웅하기까지, 정말 바쁜 하루였다.",
      );
      await you.say_and_wait("이곳저곳 참 많이도 돌아다녔네.");
      await digital.say_and_wait(
        "아이고, 이렇게 긴 시간 동안 응원 활동에 어울려주시다니 정말 고생 많으셨어요. 그 근면함에 경의를 표합니다!",
      );
      await era.printAndWait("아니, 갑자기 거수경례까지 할 것까진 없는데.");
      await digital.say_and_wait(
        "그리고, 에헤헤, 무사히 마칠 수 있어서 정말 다행이에요.",
      );
      await digital.say_and_wait(
        "사실 처음에는 예전처럼 혼자 가려고 했거든요.",
      );
      await digital.say_and_wait("하지만……");
      await era.printAndWait([
        "이어서 ",
        digital.sex,
        "의 뜻밖의 사연을 들었다. 밖에서 우연히 지나가던 행인 ",
        digital.uma_sex_title,
        "의 조언을 듣고 ",
        callname,
        "을(를) 초대했다는 것이었다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 그 이름 모를 ",
        digital.uma_sex_title,
        "에게 진심으로 감사를 표했고, 덕분에 ",
        you.get_colored_name(),
        "은(는) ",
        digital.get_colored_name(),
        "에 대해 더 깊이 알 수 있었다.",
      ]);
      await digital.say_and_wait(
        "무엇보다 다행인 건, 실제로 같이 다녀보니 정말! 정말로 즐거웠다는 거예요!",
      );
      await era.printAndWait("양손을 크게 벌리는 모습이 정말 즐거워 보였다.");
      await digital.say_and_wait(
        "다행이에요, 당신에게 소중한 휴일인데 미리 계획도 안 세우고 불러낸 거라 거절하시면 어쩌나 했거든요……",
      );
      await digital.say_and_wait("하지만 이건 정말 엄청난 발견이라구요!");
      await digital.say_and_wait([
        "제가 발견한 건 바로, ",
        callname,
        "와(과) 함께 최애를 쫓고 오타쿠 활동을 하는 즐거움이에요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "이 이전까지 특이한 취미 때문에 잘 드러내지 않았던 본연의 감정들이 서서히 ",
        you.get_colored_name(),
        "에게 전해지고 있었다.",
      ]);
      await digital.say_and_wait(
        "이 우주에서 저와 함께 응원 활동을 해줄 사람이 있을 줄은 생각지도 못했거든요……",
      );
      await you.say_and_wait("우주급으로 큰 일이었던 거야?!");
      await digital.say_and_wait(
        "아하하, 사실 보셨다시피 전 늘 혼자였잖아요. 제 이런 한계 발언들을 들어주시고 공감해주시는 게 저를 얼마나 행복하게 하는지……",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "의 두 눈이 반짝반짝 빛나고 있었다.",
      ]);
      await digital.say_and_wait([
        "너무 감동적이에요! 지금 이 기분을 당장 ",
        callname,
        "에게 말하고 싶어요!",
      ]);
      await you.say_and_wait("괜찮아, 하고 싶은 말 다 해도 돼.");
      await digital.say_and_wait("에! 정말 아무 말이나 다 해도 되나요!");
      await digital.say_and_wait("정말이죠? 정말이죠! 약속한 거예요!");
      await digital.say_and_wait([self_call, " 이제 폭주 발언 시작할게요!"]);
      await digital.say_and_wait([
        'テレビの大画面で初めて',
        digital.uma_sex_title,
        'ちゃんの姿を見た瞬間にわかったあんなに眩しくて情熱的な',
        digital.sex_code === 1 ? '神さま' : '女神',
        'たちが一生の憧れだってそれから深淵に落ちたというか天国に昇ったというか毎日',
        digital.uma_sex_title,
        'ちゃんたちを奉って',
        digital.couple_title,
        'を応援して',
        digital.couple_title,
        'に喝采して',
        digital.couple_title,
        'の同人誌を作ってみんなに',
        digital.uma_sex_title,
        'ちゃんの素晴らしさを伝えてたまに授かった恵みのおかげでついにこの殿堂に身を置いて',
        digital.sex_code === 1 ? '神さま' : '女神',
        'たちと同じ世界にいられるというか同じ空気を吸う凡人なだけだけど',
        digital.couple_title,
        'は私を嫌わず不可侵のレース場で熱い勝負までさせてくれる高貴なのに汚れを嫌わないすべての全肯定の偉大な',
        digital.sex_code === 1 ? '神さま' : '女神',
        'たちでこんなに話したけどデジたんが言いたいのはただ',
        digital.uma_sex_title,
        'ちゃんは本当に最高だってこと！',
      ]);
      await era.printAndWait([
        '旋回、跳躍、低吟、高唱。',
        digital.get_colored_name(),
        ' は',
        digital.sex,
        'の生涯の力を使って、言いたいことを全部吐き出した。',
      ]);
      await era.printAndWait("그 순수함은 참으로 경외심마저 들게 했다.");
      await digital.say_and_wait(
        "콜록콜록, 하하하하, 다 쏟아내고 나니…… 정말…… 쿨럭…… 속이 다 시원하네요……",
      );
      await era.printAndWait([
        "미친 듯이 숨을 몰아쉬며 가슴이 계속 오르락내리락했다. 너무 무리했는지 ",
        digital.get_colored_name(),
        "은 쿨럭거리다 비틀거리더니 바닥에 주저앉았다.",
      ]);
      await digital.say_and_wait(["어때요, ", callname, "? 헤헤……"]);
      await era.printAndWait([
        "바닥에 주저앉아 손으로 몸을 지탱하고 있었지만, ",
        digital.sex,
        "는 아주 환하게 웃고 있었다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "도 ",
        digital.sex,
        " 곁에 나란히 앉아 ",
        digital.sex,
        "의 몸을 살짝 받쳐주었다.",
      ]);
      await you.say_and_wait(
        'すごくいい。こんなに元気な境界発言、三女神だって驚くよ。',
      );
      await digital.say_and_wait("헤헤헤, 그런가요……");
      await digital.say_and_wait("정말이지, 우주급이네요……");
    };
    f.title = title;
    return f;
  })(),
};
