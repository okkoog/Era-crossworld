// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/love-25"),

  // [번역 완료] 49
  async 49(coffee, you) {
    await coffee.print_and_wait([
      "어느 날 밤, ",
      coffee.get_colored_name(),
      "는 평소와 다른 꿈을 꾸었다.",
    ]);
    await coffee.print_and_wait([
      "꿈속의 자신은…… 아무래도 ",
      you.get_colored_actual_name(),
      "과(와) 말로 표현하기 힘든 부끄러운 일을 하고 있었던 모양이다……",
    ]);
    await coffee.print_and_wait([
      "멋대로 떠올리고 말다니, ",
      coffee.get_colored_name(),
      "의 얼굴에 수줍은 홍조가 번졌다. 그녀는 약간의 통증이 느껴지는 아랫배를 양손으로 훑으며 잠옷 안으로 손을 집어넣었다.",
    ]);
    if (you.sex_code === 1) {
      await coffee.say_and_wait("트레이너  선생님……");
    } else {
      await coffee.say_and_wait("트레이너  씨……");
    }
    if (coffee.sex_code === 0) {
      await coffee.print_and_wait(
        "입으로는 꿈속의 사람을 중얼거리며, 중지와 검지는 쉴 새 없이 음핵 위에 원을 그렸다. 환상 속의 커다란 손에 부드럽게 문질러져 이미 흥분한 젖꼭지는 붉게 부어올랐다.",
      );
      await coffee.print_and_wait([
        "거친 숨소리와 함께, ",
        coffee.get_colored_name(),
        "는 절정에 도달했다.",
      ]);
    }
  },

  // [번역 대상] 74-1
  async '74-1'(coffee, you, callname) {
    await coffee.print_and_wait([
      "어느 날 오후, ",
      coffee.get_colored_name(),
      "는 트레이닝 피로로 인해 쓰러졌고, 기숙사로 옮겨져 휴식을 취하게 되었다.",
    ]);
    await coffee.print_and_wait([
      "텅 빈 기숙사 방에서, ",
      coffee.get_colored_name(),
      "는 문득 고독함을 느꼈다.",
    ]);
    await coffee.say_and_wait(["만약 ", callname, "이 지금 내 곁에 있어 준다면……"]);
    await coffee.print_and_wait([
      "쓰러진 뒤 허약해진 탓인지, 아니면 지금 홀로 있는 상황 때문인지, 평소보다 솔직한 마음이 ",
      coffee.get_colored_name(),
      "의 입술 사이로 흘러나와 텅 빈 기숙사 안에 감돌았다.",
    ]);
    await coffee.print_and_wait(
      "언제부터 이렇게 혼자 있는 것을 두려워하게 된 걸까……",
    );
    await coffee.print_and_wait([
      "말로 설명하기 힘든 감정이지만, ",
      coffee.get_colored_name(),
      "는 자신과 ",
      you.get_colored_actual_name(),
      "의 관계가 조금은 특별해졌음을 어렴풋이 깨달았다.",
    ]);
    era.println();
    era.printButton(`「보고 싶어요, ${callname}……」（관계 진전）`, 1);
    era.printButton("「그저 착각일 뿐이야……」（진전 보류）", 2);
    const ret = await era.input();
    if (ret === 1) {
      await coffee.print_and_wait([
        '目を閉じ、眠れば今の迷いと寂しさも消えると思った。だが ',
        you.get_colored_actual_name(),
        ' の顔が、幽霊のように目の前の闇へ這い上がってくる。',
      ]);
      await coffee.print_and_wait([
        "잠들 수 없었고, 평온해질 수도 없었다. 다시 생각해보면, ",
        you.get_colored_actual_name(),
        "과(와) 만난 이후로 자신의 마음은 매 순간 그에게 사로잡혀 있었다.",
      ]);
      await coffee.say_and_wait([
        "나, ",
        callname,
        "을 좋아하게 된 걸까……",
      ]);
      await coffee.print_and_wait([
        "말이 떨어지기 무섭게, 마치 막혔던 생각이 뚫린 듯 마음속에서부터 따뜻한 기운이 솟구쳐 ",
        coffee.get_colored_name(),
        "의 온몸을 가득 채웠다.",
      ]);
      await coffee.print_and_wait([
        you.sex,
        "와 만난 이후, 했던 말 한마디 한마디, 함께 했던 모든 시간이 이제 새로운 의미를 갖게 되었다.",
      ]);
      if (era.get('cflag:25:育成回合计时') < 96) {
        await coffee.print_and_wait(
          'まだひとりで呟いているだけでも、このはっきりした恋心は、いつか花開くだろう。',
        );
        await coffee.print_and_wait("언젠가는……");
        await era.printAndWait([
          '（',
          coffee.get_colored_name(),
          "는 아마 시니어 시즌에 진입한 후에 이 감정을 다시 고려해 볼 것이다……）",
        ]);
      } else {
        await coffee.print_and_wait("꽃이 피었다……");
      }
    } else {
      await coffee.print_and_wait("그저 몸이 약해졌을 때 해본 헛된 생각일 뿐이야……");
      await coffee.print_and_wait([
        "억지로 생각을 멈추고, ",
        coffee.get_colored_name(),
        "는 천천히 꿈의 세계로 빠져들었다.",
      ]);
    }
    return ret;
  },

  // [번역 대상] 74-2
  async '74-2'(coffee, you, callname) {
    await coffee.say_and_wait([callname, ", 오늘 밤 시간 있으신가요……?"]);
    await era.printAndWait([
      "어느 날, ",
      coffee.get_colored_name(),
      "가 드물게 먼저 ",
      you.get_colored_name(),
      "에게 제안을 건넸다.",
    ]);
    era.println();
    era.printButton("「응, 시간 있어. 하고 싶은 거라도 있어?」（관계 진전）", 1);
    era.printButton("「미안, 오늘 밤은 좀 바빠서……」（진전 보류）", 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        "긍정적인 대답을 듣고, ",
        coffee.get_colored_name(),
        "는 잠시 머뭇거렸다.",
      ]);
      await coffee.say_and_wait([
        "어떤 곳에…… ",
        callname,
        "과 함께 가보고 싶어서요……",
      ]);
      era.drawLine();
      await era.printAndWait([
        "길 잃은 아이처럼 왠지 모르게 들뜬 기색인 ",
        coffee.get_colored_name(),
        "의 손에 이끌려 몇 개의 골목과 거리를 지난 뒤, 눈에 들어온 것은 어느 눈에 띄지 않는 작은 가게였다.",
      ]);
      await era.printAndWait(
        "빛바랜 유리창 너머로 복고풍 식기들과 다양한 도구들이 진열되어 있는 것이 보였다.",
      );
      era.printButton("「커피 내리는 도구들도 있네…… 여기 골동품점이야?」", 1);
      await era.input();
      await coffee.say_and_wait("네…… 제가 우연히 발견한, 아주 흥미로운 곳이에요……");
      await era.printAndWait([
        coffee.get_colored_name(),
        "를 따라 들어간 가게 안은 주인 없이 무인으로 운영되는 듯했고, 꽤 깔끔하게 정돈되어 있어 누군가 주기적으로 청소하는 흔적이 느껴졌다.",
      ]);
      await coffee.say_and_wait(
        "여기는 평소에 사람들의 발길이 닿지 않는 곳이라…… 가끔 들르곤 해요.",
      );
      await era.printAndWait([
        '確かに ',
        coffee.get_colored_name(),
        ' の好みそうな場所だ。意匠の変わったコーヒーカップ、ロココ調のポット。人のいない午後、黒髪の ',
        coffee.teen_sex_title,
        ' がひとり棚の間を歩き、時にはそっと手に取って眺め、時には腰を屈めて足を止める。陽がガラスを通して店いっぱいに降り、すべてを夢のような金色に塗る——そんな光景が目に浮かぶ。',
      ]);
      await coffee.say_and_wait([
        "……하지만 ",
        callname,
        "과 이렇게 둘이서 온 건 처음이에요……",
      ]);
      await era.printAndWait([
        "어느새 ",
        coffee.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 코앞까지 다가와 있었고, 홍조 띤 섬세한 얼굴이 시야의 절반 이상을 차지했다.",
      ]);
      await coffee.say_and_wait(['……', callname, ", 저는——"]);
      await you.say_as_passer_by_and_wait("팬 A", [
        "아, 정말로 ",
        coffee.get_colored_name(),
        "잖아! 빨리 들어와 봐!",
      ]);
      await you.say_as_passer_by_and_wait("팬 B", "와, 진짜 가깝다! 데이트 중인 건가?");
      await era.printAndWait([
        coffee.get_colored_name(),
        "의 말을 가로막은 것은 갑작스러운 목소리였다. 돌아보니 ",
        coffee.get_colored_name(),
        "를 알아본 팬 두 명이 가게로 들어오고 있었고, 그들의 목소리에 거리의 행인들도 관심을 보이기 시작했다. 이대로라면 더 많은 사람이 몰려올 것 같았다.",
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        "도 당황했는지, 가게 문을 향해 멍하니 선 채 굳어버렸다.",
      ]);
      await you.say_as_passer_by_and_wait("팬 A", "얼굴 진짜 빨갛다!");
      await you.say_as_passer_by_and_wait("팬 B", [
        "연애 중인 ",
        coffee.teen_sex_title,
        "의 얼굴인 건가!",
      ]);
      era.printButton("「여러분! 지금은 사적인 시간이라, 제발——」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "의 말이 끝나기도 전에, ",
        coffee.get_colored_name(),
        "가 갑자기 ",
        you.get_colored_name(),
        "의 손을 꽉 잡았다.",
      ]);
      era.printButton("「앗?! 어, 왜 그래 카페?」", 1);
      await era.input();
      await coffee.say_and_wait('……');
      await era.printAndWait([
        coffee.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 질문에 대답하지 않은 채, 가게 안팎에서 말을 걸려던 팬들을 무시하고 억지로 ",
        you.get_colored_name(),
        "을(를) 끌고 밖으로 비집고 나갔다.",
      ]);
      await era.printAndWait([
        'それからまた、迷子の子供みたいに ',
        coffee.get_colored_name(),
        ' に手を引かれて走らされた。',
      ]);
      era.drawLine();
      await era.printAndWait("마지막으로 도착한 곳은 상점가 한구석의 으슥한 골목이었다.");
      await era.printAndWait(
        "상점가의 대부분 가게는 낮에만 영업하기 때문에, 멀리 보이는 이자카야 몇 곳을 제외하면 이곳엔 사람의 흔적이 거의 없었다.",
      );
      era.printButton("「무슨 일이야, 카페……」", 1);
      await era.input();
      await era.printAndWait([
        "이끌려 달려오느라 거칠어진 숨을 고르는 동안, 옆에 있던 ",
        coffee.get_colored_name(),
        "는 한동안 고개를 떨군 채 침묵을 지켰다.",
      ]);
      await coffee.say_and_wait("……다 당신 때문이에요……");
      await era.printAndWait("잠시 후, 약간 떨리는 목소리가 들려왔다.");
      await coffee.say_and_wait(
        "전 분명 눈에 띄지 않는 사람이었는데…… 누구도 저라는 존재를 신경 쓰지 않았는데……",
      );
      await coffee.say_and_wait("하지만 당신과 만났어요.");
      await coffee.say_and_wait("언제부터인가, 제 마음은 당신에게 사로잡히고 말았죠.");
      await coffee.say_and_wait(
        "저라는 존재가 이렇게 당신이라는 존재로 가득 채워져서, 견딜 수 없을 만큼 부풀어 올랐어요.",
      );
      era.println();
      await coffee.say_and_wait(
        "전, 원래 혼자서도 잘 지낼 수 있었어요.",
      );
      await coffee.say_and_wait("친구들이 곁에 있었으니까요.");
      era.println();
      await coffee.say_and_wait("그런데 당신이 제 곁으로 찾아왔어요.");
      await coffee.say_and_wait(
        "원래라면 견딜 수 있었던 고독이, 어느덧 심장을 찌르는 독약으로 변해버렸어요.",
      );
      era.println();
      await coffee.say_and_wait(
        "마지막에는…… 겨우 용기를 내서, 당신과 둘만 있고 싶었던 공간마저…… 빼앗겨 버리고……",
      );
      await coffee.say_and_wait("저…… 도대체 어떻게 해야 하나요……");
      await era.printAndWait(
        "사랑을 깨달은 그날부터 마음속 깊이 묻어두었던 생각들이 한꺼번에 쏟아져 나왔다.",
      );
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' への恋慕だけではない。自分が一度も感じたことのない、周囲に侵食されることへの苛立ちと迷いだ。',
      ]);
      await era.printAndWait("눈가에서 속수무책으로 눈물이 한 방울씩 흘러내렸다.");
      await era.printAndWait([
        "이런 ",
        coffee.get_colored_name(),
        "를 바라보며, ",
        you.get_colored_name(),
        "은(는) 한 걸음 다가갔다.",
      ]);
      era.printButton("「카페.」", 1);
      await era.input();
      await coffee.say_and_wait("……네?");
      await era.printAndWait([
        "붉어진 눈가로 ",
        coffee.get_colored_name(),
        "가 고개를 들어 ",
        you.get_colored_name(),
        "을(를) 올려다보았다.",
      ]);
      era.printButton(
        "「지금 여기는 나랑 카페 둘뿐이야…… 이제 도망가지 않을 거지?」",
        1,
      );
      await era.input();
      await era.printAndWait([
        'そう言われて、',
        coffee.get_colored_name(),
        ' はつい周囲を見回し、すぐに自分の行動の不適切さに気づいて視線を戻し、',
        you.get_colored_name(),
        ' に頷いた。',
      ]);
      era.printButton(
        "「카페, 계속 그렇게 생각하고 있었구나…… 네 마음을 눈치채지 못한 건 확실히 내 잘못이야.」",
        1,
      );
      await era.input();
      await coffee.say_and_wait("아…… 엣……!?");
      await era.printAndWait([
        "그제야 자신이 기세에 눌려 무슨 말을 내뱉었는지 깨달은 모양이었다. 마음속 작은 비밀을 스스로 밝혀버린 ",
        coffee.get_colored_name(),
        "는 「연애 중인 ",
        coffee.teen_sex_title,
        "의 얼굴」을 한 채, ",
        you.get_colored_name(),
        "을(를) 멍하니 바라볼 뿐이었다.",
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}, 몇 가지 물어봐도 될까.」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait("……좋아요.");
      era.printButton("「나와 함께 있으면 즐거워?」", 1);
      await era.input();
      await coffee.say_and_wait("……네.");
      era.printButton("「그럼, 나와 함께 있으면 행복해?」", 1);
      await era.input();
      await coffee.say_and_wait("……행복해요.");
      await era.printAndWait([
        "마지막으로 각오를 다진 듯, ",
        you.get_colored_name(),
        "은(는) 깊게 숨을 들이켰다.",
      ]);
      era.println();
      era.printButton(
        "「……나, 조금 자만하고 있었을지도 몰라. 처음부터 네 도움에만 의지하고.」",
        1,
      );
      era.printButton("「그 이후로도 여러 가지 사건 속에서 계속……」", 2);
      era.printButton("「하지만, 이런 나와 사귀어 주지 않을래?」", 3);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        "의 표정은 아직 꿈에서 깨어나지 못한 듯했지만, 그 너머로 번져 나오는 감정이 이미 답을 말해주고 있었다——",
      ]);
      await era.printAndWait("갑자기.");
      era.printButton("「우왁?!」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "의 무릎에 어떤 충격이 가해지며 바닥에 꿇어앉게 되었다.",
      ]);
      await coffee.say_and_wait("꺄앗?!");
      await era.printAndWait([
        coffee.get_colored_name(),
        "의 등에도 어떤 충격이 가해지며 앞으로 쓰러지듯 쏠렸다.",
      ]);
      await era.printAndWait("그렇게 두 사람의 그림자가 하나로 겹쳐졌다.");
      await era.printAndWait([
        you.get_colored_name(),
        '＆',
        coffee.get_colored_name(),
        "「……으음……!?」",
      ]);
      await era.printAndWait("서로의 입술이 맞닿았다.");
      await era.printAndWait([
        "십여 초가 지난 뒤에야 ",
        coffee.get_colored_name(),
        "의 얼굴이 놀라 굳어있던 ",
        you.get_colored_name(),
        "에게서 떨어졌다.",
      ]);
      await coffee.say_and_wait([
        "……친구의 장난이 정말…… 하지만 이것도 제 대답이에요. ",
        callname,
        '……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 입술에 실처럼 늘어진 타액을 뜨거운 손가락 끝으로 닦아내었다.",
      ]);
      await coffee.say_and_wait("조금 자만하고 있다니…… 그런 말을 잘도 하시네요……");
      await era.printAndWait([
        "작게 투덜거리며, ",
        coffee.get_colored_name(),
        "는 몸을 당신의 가슴에 기대어 왔다.",
      ]);
      await coffee.say_and_wait("맞아요, 당신 말이에요.");
      await coffee.say_and_wait("저를, 혼자서도 충분했던 저를.");
      await coffee.say_and_wait("이렇게나 미치게 만들어놓고.");
      era.println();
      await coffee.say_and_wait("이제 와서…… 도망가겠다고 해도…… 절대 허락하지 않을 거예요……");
      await era.printAndWait([
        "그렇게 말하며 ",
        coffee.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 옷깃을 힘주어 움켜쥐었다.",
      ]);
      era.printButton("「……도망치지 않아.」", 1);
      await era.input();
      await era.printAndWait([
        coffee.sex,
        "와 만난 이후로, 이제 퇴로 따위는 존재하지 않았다.",
      ]);
      await coffee.say_and_wait("그럼…… 앞으로 잘 부탁드려요.");
      await era.printAndWait("아무도 없는 골목길.");
      await era.printAndWait("지금은 누구도 들어올 수 없는, 오직 두 사람만의 공간이다.");
      await coffee.say_and_wait(
        "……누구에게도 빼앗기지 않도록…… 표식이라도 남겨둘까요……?",
      );
      era.printButton("「어떤 표식을 하고 싶은데?」", 1);
      await era.input();
      await coffee.say_and_wait("……이렇게요……");
      await era.printAndWait(
        "이번에는 누군가의 장난이 아닌, 두 사람 자신의 의지였다.",
      );
      await era.printAndWait("양손을 목 뒤로 돌려 감싸며, 얼굴을 서서히 가까이 가져갔다.");
      await coffee.say_and_wait("……더는 누구에게도 빼앗기지 않을 거예요……");
      await era.printAndWait('噛むように、甘く口づけた。');
      await era.printAndWait('また十数秒、その快い時間に沈んだ。');
    } else {
      await era.printAndWait([
        '少し落ち込む ',
        coffee.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は「次は必ず」と',
        coffee.sex,
        'と約束するしかなかった。',
      ]);
    }
    return ret;
  },

  // [번역 완료] 89
  async 89(coffee, you, callname) {
    await era.printAndWait([
      "어느 날, ",
      you.get_colored_name(),
      "과(와) ",
      coffee.get_colored_name(),
      "는 평소처럼 트레이닝실에서 일상적인 업무를 보고 있었다.",
    ]);
    await era.printAndWait([
      "갑자기 코끝을 스치는 커피 향기와 함께, ",
      coffee.get_colored_name(),
      "가 어느샌가 다가와 무릎 위에 올라앉았다.",
    ]);
    era.printButton("「무슨 일이야?」", 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      "는 무언가 고심하는 듯 대답 없이 ",
      you.get_colored_name(),
      "의 가슴팍에 머리를 묻고 비벼댔다. 하얀 바보털이 목 언저리를 간지럽혔다.",
    ]);
    await era.printAndWait([
      "그렇게 한참의 시간이 흐르고, ",
      coffee.get_colored_name(),
      "는 무언가에 찔린 듯 ",
      you.get_colored_name(),
      "의 품에서 움찔하며 튀어 오르더니 고개를 들어 ",
      you.get_colored_name(),
      "을(를) 빤히 바라보았다.",
    ]);
    await coffee.say_and_wait([
      callname,
      ", 아니, ",
      you.get_colored_actual_name(),
      "…… 저와 결혼해 주시겠어요?",
    ]);
    era.printButton("「안 돼.」（관계 진전）", 1);
    era.printButton("「우리에게는…… 아직 좀 이른 것 같아.」（진전 보류）", 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        "의 단호한 거절에 품 안의 ",
        coffee.get_colored_name(),
        "는 멍해졌다.",
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        "의 반응에 아랑곳하지 않고, ",
        you.get_colored_name(),
        "은(는) 재빨리 서랍을 열어 오랫동안 준비해온 것을 꺼냈다.",
      ]);
      era.printButton("「청혼은 내가 먼저 해야지.」", 1);
      await era.input();
      await era.printAndWait([
        "손안의 작은 상자를 열어 ",
        coffee.get_colored_name(),
        "에게 보여주었다.",
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}, 나와 결혼해 줄래?」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        "반지가 조명 아래서 반짝였고, ",
        you.get_colored_name(),
        "은(는) ",
        coffee.get_colored_name(),
        "의 대답을 기다렸다.",
      ]);
      await coffee.say_and_wait("……정말 심술궂은 사람이네요.");
      await era.printAndWait([
        "「쿵」 소리와 함께 ",
        coffee.get_colored_name(),
        "가 ",
        you.get_colored_name(),
        "을(를) 의자째로 바닥에 밀어 넘어뜨렸다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 정신을 차리기도 전에 ",
        coffee.get_colored_name(),
        "가 다가와 조금은 강하게 ",
        you.get_colored_name(),
        "의 입술을 깨물었다.",
      ]);
      await era.printAndWait(
        "배어 나온 피가 두 사람의 타액과 섞여 입안에서 달콤 쌉싸름한 쇠맛이 감돌았다.",
      );
      await coffee.say_and_wait(
        "……무슨 『청혼은 내가 먼저 해야지』 인가요…… 자신이 아주 멋있다고 생각하나 보죠?",
      );
      await era.printAndWait([
        "피맛 섞인 키스가 끝난 후에도 ",
        coffee.get_colored_name(),
        "는 멈추지 않고 ",
        you.get_colored_name(),
        "의 소매를 걷어올려 팔뚝에 자신의 잇자국을 남겼다.",
      ]);
      await era.printAndWait([
        "그 후에도 목과 쇄골 주위를 ",
        coffee.get_colored_name(),
        "가 끊임없이 빨아들이며 수많은 붉은 반점을 남겼다.",
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        "에게 눌려있는 ",
        you.get_colored_name(),
        "은(는) 아무 말 없이 눈을 감고 ",
        coffee.get_colored_name(),
        "가 하고 싶은 대로 내버려 두었다.",
      ]);
      await coffee.say_and_wait(
        "당신은 제 것이에요…… 당신의 입장…… 앞으로의 시간 동안 제가 잘 교육해 드릴게요……",
      );
      era.printButton("「……기대하고 있을게.」", 1);
      await era.input();
      await era.printAndWait(
        "한쪽 구석에서 제 역할을 다하지 못한 반지가 두 사람의 모습을 비추며 이 특별한 서약을 기록하고 있었다.",
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        coffee.get_colored_name(),
        "를 거절하자마자 ",
        coffee.sex,
        "의 안색을 살폈다. 혹시라도 ",
        coffee.sex,
        "의 표정이 자신의 거절로 인해 어둡게 가라앉지는 않았을지 걱정했기 때문이다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "의 예상과 달리, ",
        coffee.get_colored_name(),
        "의 얼굴에는 실망이나 슬픔이 보이지 않았다.",
      ]);
      await coffee.say_and_wait([
        "전 ",
        you.get_colored_actual_name(),
        "을(를) 믿으니까요…… 준비가 될 그날까지 기다릴게요.",
      ]);
    }
    return ret;
  },

  // [번역 대상] 99
  async 99(coffee, callname) {
    await coffee.say_and_wait("저 사람은……");
    await coffee.print_and_wait([
      "어느 날 훈련이 끝난 후, ",
      coffee.get_colored_name(),
      "는 깜빡한 물건을 찾으러 트레이닝실로 돌아왔다.",
    ]);
    await coffee.print_and_wait([
      'ドアを叩こうとしたとき、見知らぬ',
      coffee.phy_sex_title,
      'の声が聞こえた。',
    ]);
    await coffee.print_and_wait([
      "귀를 조심스럽게 문에 가져다 대었다. ",
      coffee.uma_sex_title,
      "의 강력한 청력에 비하면 이런 평범한 문 따위는 없는 것이나 마찬가지였다.",
    ]);
    await coffee.say_and_wait([
      '知らない',
      coffee.phy_sex_title,
      'が、',
      callname,
      ' の傍に座って、くつろいで話している……',
    ]);
    await coffee.print_and_wait("——내 소중한 것이 빼앗길지도 몰라.");
    await coffee.print_and_wait(
      "당장 들어가서 따지고 싶은 충동을 억누르며 심호흡을 했다. 그리고 누가 지나가다 이런 이상한 모습을 보면 어쩌나 하는 걱정은 접어둔 채 계속해서 엿들었다.",
    );
    era.drawLine();
    await coffee.say_and_wait([
      "결국 ",
      callname,
      "의 후배였구나…… 게다가 내 팬이라니……",
    ]);
    await coffee.print_and_wait([
      "스토커처럼 문밖에서 15분 동안 엿들은 뒤에야 ",
      coffee.get_colored_name(),
      "는 겨우 안도의 한숨을 내쉬었다. 동시에 자신의 과잉 반응에 대해 약간의 민망함을 느꼈다.",
    ]);
    await coffee.print_and_wait("떠나려던 순간, 갑자기 머리를 콩 하고 맞았다.");
    await coffee.say_and_wait("……감정이 너무 무겁다니 무슨 소리야, 매번 갑자기 때리지 마……");
    await coffee.print_and_wait([
      "——하지만 ",
      callname,
      "이 언젠가 나를 떠나갈지도 모른다고 생각하면……",
    ]);
    await coffee.print_and_wait("심장이 꽉 조여오는 것 같고 가슴 한구석이 아릿해.");
    await coffee.print_and_wait("그저 생각만 해도 이렇게 되다니……");
    await coffee.say_and_wait([
      '本当に',
      coffee.sex_code === 1 ? '重い男' : '重い女',
      'なのでしょうか、私……',
    ]);
  },
};
