// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100400-Maruzensky/love-4"),

  // [번역 완료] 49
  async 49(maru, you, callname, m_call_m, m_call_t, y_call_m) {
    await maru.print_and_wait('요즘 뭔가 부족한 것 같아.');
    await maru.print_and_wait([
      maru.get_colored_name(),
      '은(는) 고민하고 있었다. 평소처럼 귀여운 후배들의 성장을 지켜보며,',
      maru.couple_title,
      '이(가) 자신을 따라잡기를 기대하고 있는데도.',
    ]);
    await maru.print_and_wait([
      callname,
      '와(과) 함께 훈련 성과도 확인했다. 그래도 조금 기운이 없다.',
    ]);
    await maru.print_and_wait([
      'それは',
      callname,
      '의 눈에도 그 변화는 숨길 수 없었다. 이유는 모르지만 다음 레이스까지 시간이 있으니 트레이너에게 상태를 보여보자는 모양이다.',
    ]);
    await maru.print_and_wait([
      '평소 후배들을 잘 챙기는 탓인지,',
      maru.get_colored_name(),
      '이(가) 최근 고민하고 있다는 사실은,',
      maru.uma_sex_title,
      '들이 만든 작은 무리 안에서 조용히 퍼지고 있었다.',
    ]);
    await maru.print_and_wait([
      '시간이 지나면서,',
      m_call_t,
      '까지 몇 번이고 트레이너에게 ',
      maru.get_colored_name(),
      '의 상태를 물어왔다.',
    ]);
    await maru.print_and_wait([
      '어느 날 카페테리아에서 이야기하던 중,',
      m_call_m,
      'が ',
      maru.get_colored_name(),
      '에게 연애 이야기를 물었다.',
    ]);
    await maru.say_and_wait([
      '……그런 거였구나. 고마워,',
      m_call_m,
      '。',
    ]);
    era.println();
    await maru.print_and_wait([
      maru.get_colored_name(),
      '은(는) 트레이너를 향한 호감을 깨달았다.',
    ]);
    await maru.print_and_wait([callname, '을(를) 불러내자']);
    era.drawLine();
    await era.printAndWait([
      '어느 이른 아침,',
      you.get_colored_name(),
      '이(가) 트레이너실에 들어가 신발장을 열자 옅은 파란색 봉투가 들어 있었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 조심스럽게 봉투를 집어 들었다. 촉감이 좋고 봉인되지 않았으며 접힌 부분에는 일부러 작은 틈이 남겨져 있었다.',
    ]);
    await era.printAndWait('봉투를 열자 안에는 한 줄만 적혀 있었다.');
    await era.printAndWait([
      maru.elder_sibling_sex_title,
      ', 옥상에서 기다리고 있을게~',
    ]);
    await era.printAndWait(
      '오시, 즉 오전 11시부터 오후 1시 사이인가. 일단 이 편지는 먼저 챙겨두자.',
    );
    await era.printAndWait([
      '정각 11시,',
      you.get_colored_name(),
      '은(는) 트레센 학원 옥상에 도착했다.',
    ]);
    await era.printAndWait([
      '햇빛이 옥상 가득 내리고 산들바람이 ',
      you.get_colored_name(),
      '의 머리카락을 부드럽게 쓰다듬는다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 자신을 옥상으로 부른 수수께끼의 인물을 찾기 시작했다. 갑자기 옥상으로 이어지는 문이 닫혔다.',
    ]);
    era.printButton('「카페에서 말하던 심령현상인가?」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 떨면서 문손잡이를 잡고 힘껏 열었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 예상과 달리 문은 열렸다.',
    ]);
    await era.printAndWait('옥상으로 이어지는 계단은 평소처럼 조용하다.');
    era.printButton('「대체 누구 장난이지?」', 1);
    await era.input();
    await era.printAndWait([
      '몇 초 만에 문을 닫을 수 있는 건,',
      maru.uma_sex_title,
      '뿐이겠지.',
    ]);
    await era.printAndWait([
      '담당 트레이너를 찾으면서도 부끄러워하는 내성적인 ',
      maru.uma_sex_title,
      '을(를) 만난 건가?',
    ]);
    await era.printAndWait([
      '그리운 향기가 나서,',
      you.get_colored_name(),
      '은(는) 여름의 기척을 떠올렸다.',
    ]);
    await era.printAndWait([
      '그 향기의 주인은 근처에 있는 모양이다.',
      you.get_colored_name(),
      '은(는) 이 유일한 단서를 따라가기 시작했다.',
    ]);
    await era.printAndWait([
      '하지만 현실은 실망스러웠다.',
      you.get_colored_name(),
      '은(는) 옥상을 샅샅이 찾아도 향기의 주인을 만나지 못했다.',
    ]);
    era.printButton('「설마?!」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 옥상의 물탱크로 시선을 돌렸다. 그곳에 ',
      maru.uma_sex_title,
      '이(가) 앉아 있다.',
    ]);
    await era.printAndWait([
      '하얀 원피스를 입고 다정한 표정으로 운동장의 ',
      maru.uma_sex_title,
      '들을 내려다보고 있다.',
    ]);
    era.printButton(`${y_call_m}？`, 1);
    await era.input();
    await maru.say_and_wait([callname, ', 드디어 찾아줬네.']);
    era.printButton('「그렇게 다리를 꼬고 있으면 치마 안이 보이는데?」', 1);
    await era.input();
    await maru.say_and_wait('꺅! 변태! 치한! 야해!');
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 당황해 치맛자락을 누르며 물탱크에서 옥상으로 뛰어내렸다.',
    ]);
    await maru.say_and_wait([
      '좀 더 ',
      maru.elder_sibling_sex_title,
      '답게 보이고 싶었는데,',
      callname,
      '은(는) 그렇게 야하다니.',
    ]);
    era.printButton('「이런 날씨면 여기서 점심 회의하자.」', 1);
    await era.input();
    await maru.say_and_wait('음~ 좋은 생각이지만 더 중요한 일이 먼저야.');
    await maru.say_and_wait(['……', callname, ', 나와 데이트해 주지 않을래?']);
    era.printButton('「데이트할 때 좀 더 다정하게 해준다면 좋아.」', 1);
    await era.input();
    await maru.say_and_wait('응! 그럼 결정됐네!');
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 얼굴을 새빨갛게 붉히고 ',
      you.get_colored_name(),
      '을(를) 바라보고 있다.',
    ]);
    await era.printAndWait(
      '이 새로운 감정은 흙에 묻은 씨앗처럼 잘 싹틀 것이다.',
    );
  },

  // [번역 완료] 74-1
  async '74-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait([
      callname,
      ', 이번엔 수영장에서 데이트해 보지 않을래?',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 소파에 누워 손에 든 만화를 보면서 다음 훈련을 계획하고 있는 ',
      you.get_colored_name(),
      '에게 제안했다.',
    ]);
    await era.printAndWait([
      '옥상에서 ',
      maru.get_colored_name(),
      '와(과)의 데이트를 받아들인 뒤 두 사람의 거리는 더욱 가까워져 있었다.',
    ]);
    await era.printAndWait([
      '한가한 잡담과 매일의 일정을 소화하는 동안,',
      you.get_colored_name(),
      ' は',
      maru.sex,
      '이(가) 예전보다 ',
      you.get_colored_name(),
      '을(를) 신경 쓰는 것 같았다.',
    ]);
    era.printButton('「왜 수영장이야?」', 1);
    await era.input();
    await maru.say_and_wait([
      '소녀만화에는 그렇게 적혀 있어. 주인공이 학원에 입학한 뒤 자신에게 호감을 가진 멋진 트레이너를 만나.',
    ]);
    await maru.say_and_wait(
      '그리고 같은 팀의 명문가 아가씨가 트레이너를 좋아하지만 트레이너는 주인공만 바라보지.',
    );
    await maru.say_and_wait(
      '소꿉친구에 약혼까지 정해진 자존심 때문에 명문가 아가씨는 주인공에게 사츠키상에서 승부를 걸어.',
    );
    await maru.say_and_wait(
      '명문가 아가씨의 압도적인 강함에 맞서 주인공은 트레이너의 격려로 수영장 특훈을 시작하고.',
    );
    await maru.say_and_wait(
      '원래 서로 호감이 있던 두 사람이 수영장에서 두근두근한 사고를 겪고! 마지막에는 수영장 한가운데서 키스하는 거야.',
    );
    await era.printAndWait([
      maru.sex,
      '은(는) 소파에서 몸을 일으켜 손에 든 소녀만화를 가리켰다.',
    ]);
    await maru.say_and_wait([callname, ', 로맨틱하다고 생각하지 않아?']);
    era.printButton('「나쁘지 않네.」', 1);
    await era.input();
    await maru.say_and_wait('그렇지~ 그러니까 내일은 수영장에서 데이트야.');
    era.printButton('「수영장, 너무 일찍 가면 안 열었을 텐데.」', 1);
    await era.input();
    await maru.say_and_wait([
      'あとで',
      m_call_t,
      '에게 말해둘 테니 그건 걱정하지 않아도 돼.',
    ]);
    era.printButton(`데이트가 너무 길어지면 ${maru.uma_sex_title}들이 오지 않을까?`, 1);
    await era.input();
    await maru.say_and_wait([
      '아침 일찍이면 ',
      maru.uma_sex_title,
      '들은 아침 달리기를 하고 있고, 수영 수업도 내일은 10시까지 없어.',
    ]);
    await maru.say_and_wait([callname, ', 더 물어볼 거 있어?']);
    era.printButton('「지금은 없어.」', 1);
    await era.input();
    await maru.say_and_wait([
      '그럼 결정! 이렇게 다정한 ',
      maru.elder_sibling_sex_title,
      '와(과) 데이트할 수 있다니,',
      callname,
      ', 밤에 너무 설레서 잠 못 이루지는 마♪',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      '의 머리를 쓰다듬고 훈련실을 나갔다.',
      you.get_colored_name(),
      '은(는) 내일의 데이트를 몹시 기대했다.',
    ]);
  },

  // [번역 완료] 74-2
  async '74-2'(maru, you, callname, y_call_m) {
    await you.say_and_wait('물, 아직 차갑네.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 한쪽 무릎을 꿇고 수영장 가장자리에 앉아 손을 넣어보니 물이 서늘했다.',
    ]);
    await era.printAndWait([
      '아침 6시. 성급한 태양이 땅을 비추고 있지만 아침 수영장에는 생기가 전혀 없다. 있는 것은 ',
      you.get_colored_name(),
      '와(과), 친구 이상 연인 미만인 ',
      maru.get_colored_name(),
      '뿐이다.',
    ]);
    await era.printAndWait(
      '두 사람의 거리를 좁히려 하고 있지만 여러 사정 때문에 이 감정은 좀처럼 뜨거워지지 않는다.',
    );
    await maru.say_and_wait([callname, ', 이쪽 봐⭐']);
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 수영복으로 갈아입고 ',
      you.get_colored_name(),
      '에게 손을 흔들며 팔다리를 움직여 준비운동을 하고 있다.',
    ]);
    await era.printAndWait(
      '곡선을 돋보이게 하는 수영복이 새파란 수면에 은빛 윤곽을 비춘다.',
    );
    await maru.say_and_wait('응. 이런 조용한 분위기도 나쁘지 않네.');
    await era.printAndWait([
      '얼마 전,',
      maru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      '을(를) 옥상으로 불러 마침내 두 사람의 관계를 확인했다.',
    ]);
    await maru.say_and_wait(
      '드디어 둘만의 공간이네. 이런 아침이면 테이오 일행도 아직 자고 있겠지?',
    );
    await maru.say_and_wait([callname, '♪ 내려와서 같이 수영하지 않을래?']);
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 수영장 중앙에서 ',
      you.get_colored_name(),
      '을(를) 부르고 있다.',
    ]);
    await era.printAndWait([
      '평범한 인간에게는 애매한 수온이지만 체온이 사람보다 조금 높은 ',
      maru.uma_sex_title,
      '에게는 딱 좋을지도 모른다.',
    ]);
    await maru.say_and_wait([callname, '! 내려와서 같이 수영하지 않을래?']);
    await era.printAndWait([
      maru.get_colored_name(),
      '의 권유가 ',
      you.get_colored_name(),
      '의 생각을 깨뜨렸다.',
    ]);
    era.printButton(
      '「여기서 보기만 해도 눈이 즐겁네」 (관계를 진행한다)',
      1,
    );
    era.printButton('급한 일을 떠올렸다 (아직 진행하지 않는다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait([
        callname,
        ', 야하네~ 그래도 솔직한 ',
        callname,
        '도 좋아해♪',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' 쪽으로 손키스를 날리고 머리부터 물속으로 잠수했다.',
      ]);
      await era.printAndWait([
        '바닥까지 비쳐 보이는 물속에서,',
        maru.sex,
        '의 모습은 물고기처럼 즐겁게 헤엄치고 있다.',
      ]);
      era.printButton(`${y_call_m}, 수영 잘하네.`, 1);
      await era.input();
      await era.printAndWait([
        maru.sex,
        '이(가) 수면 위로 나와 다음 목표로 향하려던 순간,',
        maru.sex,
        '의 몸이 저도 모르게 굳었다.',
      ]);
      era.printButton('「다리에 쥐가 난 거야?」', 1);
      await era.input();
      await era.printAndWait([
        '지금은 생각할 여유가 없다.',
        you.get_colored_name(),
        '은(는) 재빨리 수영장으로 뛰어들어 필사적으로 머리를 내밀며 허우적대는 ',
        maru.sex,
        ' 쪽으로 헤엄쳤다.',
      ]);
      era.printButton('「기다려, 금방 갈게!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '도 수영이 능숙하지는 않지만 그래도 힘을 다해 ',
        maru.sex,
        ' 쪽으로 헤엄쳤다.',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await maru.say_and_wait([callname, ', 괜찮아.']);
      await era.printAndWait(['아무래도 ', maru.sex, '에게 속은 모양이다.']);
      await maru.say_and_wait('……미안. 조금 심했나 봐.');
      await era.printAndWait('이런 장난은 너무 심해.');
      await maru.say_and_wait([
        '정말 미안해. 하지만 ',
        callname,
        ', 드디어 내려왔고 이 각도에서 보니 분위기도 나쁘지 않지?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        maru.get_colored_name(),
        '이(가) 무사하다는 걸 알고서야 겨우 안도의 숨을 내쉬었다. 분위기는 둘째치고 이 고요함은 확실히 드물다.',
      ]);
      await era.printAndWait(
        '방금 소동으로 거칠게 흔들리던 수면도 지금은 잔잔하다.',
      );
      era.printButton('「추워.」', 1);
      await era.input();
      await era.printAndWait([
        maru.uma_sex_title,
        '에게는 딱 좋은 수온이어도 평범한 인간에게는 아직 차갑다.',
      ]);
      await maru.say_and_wait([
        '그럼 ',
        maru.elder_sibling_sex_title,
        '이(가) 따뜻하게 해줄까?',
      ]);
      era.printButton('「싫어.」', 1);
      await era.input();
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 문답무용으로 아직 토라져 있는 ',
        you.get_colored_name(),
        '을(를) 끌어안았다. "사실 전부 ',
        maru.get_colored_name(),
        ' 탓이잖아?" 그렇게 생각하면서도 ',
      ]);
      await era.printAndWait([
        maru.sex,
        '의 체온을 느낀 순간 그 불만은 말끔히 사라졌다.',
      ]);
      await maru.say_and_wait(
        '이렇게 얼굴이 붉어지는 분위기인데 아무것도 안 할 생각이야?',
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '의 암시는 이미 분명했다.',
        you.get_colored_name(),
        '도 ',
        maru.sex,
        '의 목에 팔을 두르고 천천히 ',
        maru.sex,
        '의 뺨으로 다가갔다.',
      ]);
      await maru.say_and_wait('만화 전개랑 똑같네♪');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 혀를 ',
        maru.sex,
        '의 입 안으로 밀어 넣었고,',
        maru.sex,
        '도 크게 저항하지 않고 그 불만을 부드럽게 받아들였다.',
      ]);
      await era.printAndWait(
        '수영장 물은 아직 차가운데 두 사람 주변만은 봄처럼 따뜻하다.',
      );
      await maru.say_and_wait([
        '우리 집 옆에 계속 비어 있는 방이 하나 있어.',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '입술이 떨어진 뒤 두 사람은 수영장에서 나와 마른 수건으로 몸을 닦던 중,',
        maru.get_colored_name(),
        '이(가) 갑자기 ',
        you.get_colored_name(),
        '에게 제안했다.',
      ]);
      era.printButton('「그럼 앞으로 잘 부탁해.」', 1);
      await era.input();
      await era.printAndWait([
        '나야말로 잘 부탁해.',
        callname,
        ', 오늘 밤 짐 가져와♪',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        maru.get_colored_name(),
        '와(과) 동거를 시작했다.',
      ]);
    } else {
      await maru.say_and_wait([
        callname,
        ', 짓궂네! 그럼 먼저 혼자 수영할게.',
      ]);
      era.drawLine();
      await era.printAndWait('따르릉따르릉!!!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 알람에 잠에서 깼다. 이상한 꿈을 꾼 모양이다.',
      ]);
      era.printButton('「오늘 훈련 계획이나 세울까.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 하품하며 방금 꾼 이상한 꿈을 잊으려 했다.',
      ]);
      await maru.say_as_unknown_and_wait(
        '계속 망설이다 보면 결국 후회할 거야.',
      );
      await era.printAndWait([
        '가슴 깊은 곳의 또 다른 목소리가 ',
        you.get_colored_name(),
        '에게 말하고 있다.',
      ]);
    }
    return ret;
  },

  // [번역 대상] 89-1
  async '89-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait(
      'あなたが言ってくれたあの一言が好き。「風を追うマルゼンスキーは、本当に楽しそうだ」って。',
    );
    await maru.say_and_wait(
      '嫌になっちゃう。歳は私より上なのに、立ち居振る舞いが高校生みたい。',
    );
    await maru.say_and_wait([
      '……でも、だからこそ',
      callname,
      'は余計にかわいいの。',
    ]);
    await maru.say_and_wait([
      '初めて会ったとき、私はあなたを何歳か下の',
      you.younger_sibling_sex_title,
      'みたいに思った。',
    ]);
    await maru.say_and_wait(
      'だから無意識に抱きしめて頭を撫でて、顔が真っ赤なのを見て、やっと手を離した。',
    );
    await maru.say_and_wait('悪いと思ったけど、謝らないわ。ふん〜');
    await maru.say_and_wait(
      'あなたが興奮した顔で、私の走るときの笑顔を話してくれたとき、本当に嬉しかった。',
    );
    await maru.say_and_wait([
      '契約した夜、私は',
      m_call_t,
      'を近くのバーに誘って祝ったの。',
    ]);
    await maru.say_and_wait(['興奮した顔であなたの様子を話したら。']);
    await maru.say_and_wait([
      '『相性のいいトレーナーに出会えたみたいね』、グラスを揺らしながら',
      maru.sex,
      'はふらふらと相槌を打った。',
    ]);
    await maru.say_and_wait(
      '『レースの栄光より、風を楽しむほうが好きなの』。口ではそう言っても',
    );
    await maru.say_and_wait(
      '胸の奥では、あなたが私の背中に追いつけるか、静かに期待していた',
    );
    await maru.say_and_wait(
      '初めてのトレーニングのとき、あなたはすごく緊張してた。',
    );
    await maru.say_and_wait('トレーナーの正装まで着て、握手までした。');
    await maru.say_and_wait('……上から二番目のボタン、掛け違えてたわ。');
    await maru.say_and_wait(
      '指摘されたとき、慌ててボタンを外して、顔を真っ赤にした。',
    );
    await maru.say_and_wait([
      '何歳か下の',
      you.younger_sibling_sex_title,
      'が目の前に立って、「',
      maru.elder_sibling_sex_title,
      '、今の私は大人よ」と言ってるみたい。',
    ]);
    await maru.say_and_wait([
      'そんなにかわいい',
      you.younger_sibling_sex_title,
      'の頭を撫でて励まさないのは、もったいないわね。',
    ]);
    await maru.say_and_wait([
      'あら、また無意識に',
      you.younger_sibling_sex_title,
      '扱いしてしまった。',
    ]);
    await maru.say_and_wait('そのあと、私たちは目標を一つずつ片付けた。');
    await maru.say_and_wait(
      'いつの間にか、あなたは今、私の隣の部屋に住んでいる。',
    );
    await maru.say_and_wait('毎朝起こすのも、私の日課になった。');
    await maru.say_and_wait(
      'うんうんと二つ返事して、また寝返りを打って寝ようとするとき。',
    );
    await maru.say_and_wait('『今は起きる時間よ』。');
    await maru.say_and_wait('抗議を無視して、あなたと布団を無理やり引き離す。');
    await maru.say_and_wait('あなたがあくびをしながら今日の計画を始めるとき。');
    await maru.say_and_wait('そよ風が私の心を撫でるみたい。');
    await maru.say_and_wait('毎日が、いい天気。');
    await maru.say_and_wait('トレーニングのときも同じ。');
    await maru.say_and_wait('毎回、私の姿に心を奪われてるわね');
    await maru.say_and_wait(
      '緊張しながら毎回のタイムを記録して、限界に一つずつ挑む',
    );
    await maru.say_and_wait('私が前の記録を破るたび、子どもみたいにはしゃぐ。');
    await maru.say_and_wait('その子どもっぽい顔……抱きしめて頭を撫でたくなるわ');
    await maru.say_and_wait('風が止まるときもあった');
    await maru.say_and_wait(
      'トレーニングの失敗で怪我して、保健室まで支えられたとき',
    );
    await maru.say_and_wait(
      'あなたがそばで最近の学園の面白い話をして、痛みを逸らそうとしてくれたとき。',
    );
    await maru.say_and_wait(
      '退屈な時間は、愛車に置いていかれた車みたいに、跡形もなく消えた。',
    );
    await maru.say_and_wait(
      '新年の挨拶、ファン感謝祭の祝福、一緒に見た日没、クリスマスの約束。',
    );
    await maru.say_and_wait('見えないリボンみたいに、私とあなたを固く結んだ。');
    await maru.say_and_wait([
      'いつの間にか、',
      callname,
      'も世話が要る',
      you.younger_sibling_sex_title,
      'くんから、頼れる大人になったわね',
    ]);
    await maru.say_and_wait(
      'この宝石みたいに輝く記憶、私はいつまでも大切にする。',
    );
    await maru.say_and_wait(
      '……そろそろ、胸の奥のこの気持ちと向き合わないとね。',
    );
    await maru.say_and_wait([
      '私も',
      maru.elder_sibling_sex_title,
      'としての矜持はある。後輩たちに流行と',
      maru.elder_sibling_sex_title,
      'の知恵を分けている。',
    ]);
    await maru.say_and_wait([
      'でも、いちばん好きで好きな',
      callname,
      'の前では、だめ！',
    ]);
    await maru.say_and_wait(
      '流行はずっと変わる。でも、こんなにかわいいトレーナーは一人だけ。',
    );
    await maru.say_and_wait(['じゃあ、そろそろ', callname, 'を呼び出さないと']);
    await maru.say_and_wait([
      callname,
      'が私を好きかどうかは別として、私はいつまでもあなたが好き。',
    ]);
  },

  // [번역 대상] 89-2
  async '89-2'(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      maru.get_colored_name(),
      ' の同棲は、もうしばらく続いている。',
    ]);
    await era.printAndWait('起きて、食べて、一緒に学園へ行く。');
    await era.printAndWait(
      '出る前に互いの身だしなみを確認して、車で一緒に学園へ着く。',
    );
    await era.printAndWait([
      maru.sex,
      'が授業のあいだ、',
      you.get_colored_name(),
      ' は次のレースの基準で午後のメニューを組む。行き詰まったときは、もっとベテランのトレーナーに聞くこともある。',
    ]);
    await era.printAndWait([
      '屋上はもう ',
      you.get_colored_name(),
      ' たちの黙契の拠点だ。',
      you.get_colored_name(),
      ' が屋上の最後の段を踏むころ、制服の ',
      maru.get_colored_name(),
      ' はもうそこで ',
      you.get_colored_name(),
      ' を待っている。',
    ]);
    await era.printAndWait([
      '天気がいい日は、校庭で群れをなす',
      maru.uma_sex_title,
      'たちを見下ろしながら、今日の学園の面白い話をする。',
    ]);
    await era.printAndWait(
      '雨が続く日は、訓練室のソファに寄りかかって身を寄せ合う。',
    );
    await era.printAndWait([
      '黄昏の最後の陽が ',
      maru.get_colored_name(),
      ' の裾に当たるころ、',
      you.get_colored_name(),
      ' は最後の書類を整え、門外で長く待っていた',
      maru.sex,
      'と一緒にアパートへ戻る。',
    ]);
    await era.printAndWait([
      '夜、ざあざあの水音とテレビのお笑い芸人の笑い声のなか、',
      you.get_colored_name(),
      ' は炒めた料理を皿に盛る。',
    ]);
    await era.printAndWait([
      '簡単な食前の挨拶のあと、',
      you.get_colored_name(),
      ' は黙って',
      maru.sex,
      'の少し自慢げな話を聞く。テイオー',
      maru.couple_title,
      'がもうすぐ',
      maru.sex,
      'を超える、と言いながら、大根を口へ運ぶ。',
    ]);
    await era.printAndWait([
      'おやすみを交わしたあと、',
      you.get_colored_name(),
      ' はなんとか、同じ部屋で寝たがる ',
      maru.get_colored_name(),
      ' を自分の部屋へ戻した。',
    ]);
    await era.printAndWait([
      '消灯前、',
      maru.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      ' に勧めた少女漫画を何ページかめくって、それから眠る。',
    ]);
    await era.printAndWait(
      '穏やかな日々は、晴れた空に浮かぶ白い雲のようで、雲が目的もなく漂うあいだに、時間まで遅くなった。',
    );
    await maru.say_and_wait([
      callname,
      '、今度の日曜、海へ行かない？ 海で遊ぶのは久しぶりね。',
    ]);
    await era.printAndWait([
      'ある日の夕食で、',
      maru.sex,
      'が ',
      you.get_colored_name(),
      ' に海へ行きたいと頼んだ。',
    ]);
    era.printButton('「海か。久しぶりだな。」', 1);
    await era.input();
    await maru.say_and_wait(
      '前に海へ行ったのは、夏季合宿で理事長のほうの浜だったわ。でも今度は、あなたと私だけがいい。',
    );
    era.printButton('「日曜は特に用事もない。じゃあ一緒に出よう」', 1);
    await era.input();
    await maru.say_and_wait('よかった♪ じゃあ私も海の用意をするわ。');
    era.printButton(
      `（${y_call_m} が無邪気な顔を見せるのは、こういうときだけだな）`,
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は最後の青菜を口へ運びながら、そう思った。',
    ]);
    era.println();
    await era.printAndWait([
      '時間は、',
      you.get_colored_name(),
      ' と ',
      maru.get_colored_name(),
      ' の期待のなか、すぐに日曜になった。',
    ]);
    await era.printAndWait([
      '愛車を飛ばして、',
      you.get_colored_name(),
      ' は予定より早くここに着いた。',
    ]);
    await era.printAndWait(
      '観光の最盛期ではないのに、この浜にはまだ多くの客が名前を聞いて来ていた。',
    );
    await maru.say_and_wait([callname, '、この格好、どうかしら？']);
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' の手の袋を受け取り、中のビキニを見た。',
    ]);
    await maru.say_and_wait('この浜の視線、全部私に集まるわね。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' の水着姿を想像して、妙に楽しみになった。',
    ]);
    await maru.say_and_wait([callname, '、砂浜で会いましょう。']);
    await era.printAndWait([
      '更衣室の前で、',
      you.get_colored_name(),
      ' はいったん ',
      maru.get_colored_name(),
      ' と別れた。',
    ]);
    era.println();
    await maru.say_and_wait(['じゃーん♪ ', callname, '、この格好どう？']);
    // Do not translate this
    era.printWholeImage('姥爷_泳_半身', {
      width: 8,
      offset: 8,
    });
    await era.printAndWait([
      maru.get_colored_name(),
      ' は見せびらかすように ',
      you.get_colored_name(),
      ' を見ている。',
    ]);
    era.printButton('「なんだか、面白くないな」', 1);
    await era.input();
    await maru.say_and_wait([
      callname,
      'は、こんなにいい',
      maru.sex_code === 1 ? '彼氏' : '彼女',
      'を独り占めしたいんでしょ♪ ふんふん。',
    ]);
    await era.printAndWait(
      '人の少ない場所にパラソルを立てた。今日の天気は特別に気持ちいい。',
    );
    await maru.say_and_wait([
      callname,
      '、日焼け止め塗ってくれる？ 籠のなかよ。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は籠から日焼け止めを取り、手に出して',
      maru.sex,
      'の背中へ均一に塗った。',
    ]);
    await maru.say_and_wait('ありがとう。');
    await era.printAndWait([
      '小刻みに動く耳が音楽のリズムで拍を取っている。',
      you.get_colored_name(),
      ' は急に、',
      maru.sex,
      'に悪戯したくなった。',
    ]);
    era.printButton(
      `${maru.sex}の耳にそっと近づいて大声を出す（まだ進めない）`,
      1,
    );
    era.printButton('……いや、やめよう（関係を進める）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' はそっと',
        maru.sex,
        'の耳へ近づいた。これから何が起きるか知らない',
        maru.sex,
        'は、手の動きが止まった理由を不思議がっている。',
      ]);
      era.printButton('「わっ！」', 1);
      await era.input();
      await maru.say_and_wait('きゃっ！');
      await era.printAndWait([
        maru.get_colored_name(),
        ' は驚いて体をびくりとさせ、しばらくしてから我に返った。',
      ]);
      await maru.say_and_wait([callname, '！']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は深呼吸して、気持ちを落ち着かせようとしている。',
      ]);
      era.printButton(
        `${y_call_m} の耳が魅力的に見えて、つい悪戯したくなった。`,
        1,
      );
      await era.input();
      await maru.say_and_wait([
        'はぁ〜、',
        callname,
        'ったら子どもみたい。他の人にもこんなことするの？',
      ]);
      era.printButton('「君にだけだ」', 1);
      await era.input();
      await maru.say_and_wait('つまり私は、最初の犠牲者を光栄に思うべき？');
      era.printButton('「あ、違う、聞いてくれ。」', 1);
      await era.input();
      await maru.say_and_wait('私も今の驚き、味わわせてあげる！');
      era.printButton('「うわあああああ！」', 1);
      await era.input();
      await era.printAndWait([
        'そのあと、',
        maru.sex,
        'が完全に機嫌を直すまで、かなり時間がかかった。',
      ]);
    } else {
      await era.printAndWait([
        '二つの激しい考えの争いの末、',
        you.get_colored_name(),
        ' は悪戯を諦め、',
        maru.get_colored_name(),
        ' のマッサージに集中した。',
      ]);
      await era.printAndWait('湿った気配の風が、海面から大地へ来た。');
      await era.printAndWait('砂浜に名残惜しそうに、なかなか去らない。');
      await maru.say_and_wait(['風が止んだわね、', callname, '。']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は長いあいだ、その海を見つめていた。',
      ]);
      await maru.say_and_wait('……。日没のあと、月も昇るわ。');
      await era.printAndWait(['突然', maru.sex, 'が口を開いた。']);
      era.printButton(
        '「日が昇っても月が沈んでも、風はそっと踊り始める。」',
        1,
      );
      await era.input();
      await maru.say_and_wait(['……', callname, '、もう少し近づいていい？']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' は体の重みを全部 ',
        you.get_colored_name(),
        ' の腕に預け、',
        you.get_colored_name(),
        ' は',
        maru.sex,
        'の手を強く握った。',
      ]);
      await era.printAndWait('二人は黙って、月が空の中ほどまで昇るのを見た。');
    }
    return ret;
  },

  // [번역 대상] 99
  async 99(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      maru.get_colored_name(),
      ' はさまざまな困難を経て、ようやく互いの気持ちを確かめた。',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' から役所へ出す書類を受け取り、それぞれ記入する欄に、大切に自分の名前を書いた。',
    ]);
    await era.printAndWait(
      '結婚式の日時を決めたあと、習わしどおり、しばらく会ってはいけない。',
    );
    await era.printAndWait([
      '式の前夜、',
      you.get_colored_name(),
      ' はどうしても眠れず、枕元の ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'の写真アルバムを手に取った。',
    ]);
    await you.say_and_wait(
      'これはメイクデビュー勝利後、サイゼリヤで祝ったときの写真だ',
      true,
    );
    await era.printAndWait([
      '携帯が苦手な',
      maru.sex,
      'は、写真で ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'の思い出を残すほうが好きだ。',
      you.get_colored_name(),
      ' は二ページ目をめくった。',
    ]);
    await you.say_and_wait(
      [maru.sex, 'の代わりに車展で愛車の模型を取ってきたときの写真'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は顔を上げ、棚の愛車模型をちらりと見てから次のページへ進んだ。',
    ]);
    await you.say_and_wait(
      'これはトレーニング失敗のとき、医務室で撮った写真だ',
      true,
    );
    await era.printAndWait([
      maru.get_colored_name(),
      ' はそばの懐古曲を聞きながら休養していて、',
      maru.sex,
      'の耳が音楽のリズムで拍を取っている。',
    ]);
    await you.say_and_wait(
      [
        'あのときの',
        maru.sex,
        'は、まだ',
        maru.elder_sibling_sex_title,
        'の構えを下ろしていなかったのか',
      ],
      true,
    );
    await era.printAndWait([
      '妙に苛立った ',
      you.get_colored_name(),
      ' は、ページをざらざらとめくり、最後に ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'が夏季合宿で撮った写真で止まった。',
    ]);
    await you.say_and_wait(
      [maru.sex, 'はあのとき、もう私をかなり近い人だと思っていたのか'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は、',
      you.get_colored_name(),
      ' が',
      maru.sex,
      'に腕を掴まれて無理に撮られた写真を見た。慌てた ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'の笑顔が、鮮やかに対比している。',
    ]);
    await you.say_and_wait('変な噂を避けるのに、本当に骨が折れたな', true);
    await era.printAndWait('ため息をついて、機嫌よく次のページをめくった');
    await era.printAndWait([
      '冬服の ',
      you.get_colored_name(),
      ' と',
      maru.sex,
      'が、ここから遠くない山で撮った写真',
    ]);
    await you.say_and_wait(
      [
        'あのとき',
        maru.sex,
        'と、来年のクリスマスに樺の並木道を歩く約束をした',
      ],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' が次のページをめくろうとしたとき。',
    ]);
    await era.printAndWait('トントントン');
    era.printButton(`${y_call_m}?!`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' が扉を開けると、普段着の',
      maru.sex,
      'が立っていた。',
    ]);
    await maru.say_and_wait('こんなにいい夜、一緒にドライブしましょう');
    era.printButton('「うん、出よう」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      maru.get_colored_name(),
      ' の手を強く握り、愛車を停めた場所へ走った。',
    ]);
    await maru.say_and_wait([
      callname,
      '、あなたに出会えて本当によかった。ありがとう。',
    ]);
    await era.printAndWait('静かな深夜の道路に、また湿った自然の風が吹いた。');
  },
};
