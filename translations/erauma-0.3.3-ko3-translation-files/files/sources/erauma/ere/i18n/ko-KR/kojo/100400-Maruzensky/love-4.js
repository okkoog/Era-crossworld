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
      '그건',
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
      '이(가) ',
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
      '은(는)',
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
      '나중에',
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
      '은(는) ',
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
      '은(는) ',
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
        '은(는) ',
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
        '은(는) ',
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
        '은(는) ',
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

  // [번역 완료] 89-1
  async '89-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait(
      '네가 해준 그 말이 좋아. 「바람을 쫓는 마루젠스키는 정말 즐거워 보여」라고 했던 말.',
    );
    await maru.say_and_wait(
      '정말 못 말리겠어. 나보다 나이는 많은데 행동거지는 고등학생 같아.',
    );
    await maru.say_and_wait([
      '……하지만 그렇기 때문에 ',
      callname,
      '은(는) 더 귀여운 거야.',
    ]);
    await maru.say_and_wait([
      '처음 만났을 때 나는 너를 몇 살 어린 ',
      you.younger_sibling_sex_title,
      '처럼 생각했어.',
    ]);
    await maru.say_and_wait(
      '그래서 무심코 끌어안고 머리를 쓰다듬다가 얼굴이 새빨개진 걸 보고서야 손을 뗐지.',
    );
    await maru.say_and_wait('미안하긴 했지만 사과는 안 할 거야. 흥~');
    await maru.say_and_wait(
      '네가 신난 얼굴로 내가 달릴 때의 미소를 이야기해 줬을 때 정말 기뻤어.',
    );
    await maru.say_and_wait([
      '계약한 날 밤, 나는 ',
      m_call_t,
      '을(를) 근처 바에 불러 축하했어.',
    ]);
    await maru.say_and_wait(['신난 얼굴로 네 이야기를 들려줬더니.']);
    await maru.say_and_wait([
      '『잘 맞는 트레이너를 만난 모양이네』라며 잔을 흔들면서 ',
      maru.sex,
      '은(는) 비틀거리며 맞장구쳤어.',
    ]);
    await maru.say_and_wait(
      '『레이스의 영광보다 바람을 즐기는 게 더 좋아』. 입으로는 그렇게 말했지만 ',
    );
    await maru.say_and_wait(
      '마음 깊은 곳에서는 네가 내 등을 따라잡을 수 있을지 조용히 기대하고 있었어.',
    );
    await maru.say_and_wait(
      '첫 훈련 때 너는 정말 긴장했어.',
    );
    await maru.say_and_wait('트레이너 정장까지 차려입고 악수까지 했지.');
    await maru.say_and_wait('……위에서 두 번째 단추를 잘못 끼웠지만.');
    await maru.say_and_wait(
      '지적받자 당황해서 단추를 다시 풀고 얼굴이 새빨개졌지.',
    );
    await maru.say_and_wait([
      '몇 살 어린 ',
      you.younger_sibling_sex_title,
      '이(가) 눈앞에 서서 「',
      maru.elder_sibling_sex_title,
      ', 지금 나는 어른이야」라고 말하는 것 같았어.',
    ]);
    await maru.say_and_wait([
      '그렇게 귀여운 ',
      you.younger_sibling_sex_title,
      '의 머리를 쓰다듬으며 격려하지 않는 건 아깝잖아.',
    ]);
    await maru.say_and_wait([
      '어머, 또 무심코 ',
      you.younger_sibling_sex_title,
      ' 취급을 해버렸네.',
    ]);
    await maru.say_and_wait('그 뒤 우리는 목표를 하나씩 해치워 나갔어.');
    await maru.say_and_wait(
      '어느새 지금은 네가 내 옆방에 살고 있네.',
    );
    await maru.say_and_wait('매일 아침 깨우는 것도 내 일과가 됐고.');
    await maru.say_and_wait(
      '응응 하고 대충 대답한 뒤 다시 돌아누워 자려 할 때.',
    );
    await maru.say_and_wait('『이제 일어날 시간이야』.');
    await maru.say_and_wait('항의를 무시하고 너와 이불을 억지로 떼어놓지.');
    await maru.say_and_wait('네가 하품하면서 오늘 계획을 시작할 때.');
    await maru.say_and_wait('산들바람이 내 마음을 쓰다듬는 것 같아.');
    await maru.say_and_wait('매일이 좋은 날씨야.');
    await maru.say_and_wait('훈련할 때도 마찬가지.');
    await maru.say_and_wait('매번 내 모습에 마음을 빼앗기잖아.');
    await maru.say_and_wait(
      '긴장한 채 매번 기록을 적고 한계에 하나씩 도전해.',
    );
    await maru.say_and_wait('내가 이전 기록을 깰 때마다 아이처럼 들뜨고.');
    await maru.say_and_wait('그 아이 같은 얼굴…… 끌어안고 머리를 쓰다듬고 싶어져.');
    await maru.say_and_wait('바람이 멈추는 때도 있었어.');
    await maru.say_and_wait(
      '훈련 실패로 다쳐서 보건실까지 부축받았을 때.',
    );
    await maru.say_and_wait(
      '네가 곁에서 최근 학원의 재미있는 이야기를 해주며 통증을 잊게 해주려 했을 때.',
    );
    await maru.say_and_wait(
      '지루한 시간은 애차에게 뒤처진 차처럼 흔적도 없이 사라졌어.',
    );
    await maru.say_and_wait(
      '새해 인사, 팬 감사제의 축복, 함께 본 일몰, 크리스마스의 약속.',
    );
    await maru.say_and_wait('보이지 않는 리본처럼 나와 너를 단단히 묶었지.');
    await maru.say_and_wait([
      '어느새 ',
      callname,
      '도 보살핌이 필요한 ',
      you.younger_sibling_sex_title,
      '군에서 의지할 수 있는 어른이 됐네.',
    ]);
    await maru.say_and_wait(
      '이 보석처럼 빛나는 기억, 나는 언제까지나 소중히 간직할 거야.',
    );
    await maru.say_and_wait(
      '……슬슬 마음 깊은 곳의 이 감정과 마주해야겠네.',
    );
    await maru.say_and_wait([
      '나도 ',
      maru.elder_sibling_sex_title,
      '로서의 자부심은 있어. 후배들에게 유행과 ',
      maru.elder_sibling_sex_title,
      '의 지혜를 나눠주고 있지.',
    ]);
    await maru.say_and_wait([
      '하지만 가장 좋아하고 사랑하는 ',
      callname,
      ' 앞에서는 안 돼!',
    ]);
    await maru.say_and_wait(
      '유행은 계속 바뀌어. 하지만 이렇게 귀여운 트레이너는 단 한 명뿐이야.',
    );
    await maru.say_and_wait(['그럼 슬슬 ', callname, '을(를) 불러내야겠네.']);
    await maru.say_and_wait([
      callname,
      '이(가) 나를 좋아하든 아니든, 나는 언제까지나 너를 좋아해.',
    ]);
  },

  // [번역 완료] 89-2
  async '89-2'(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      '와(과) ',
      maru.get_colored_name(),
      '의 동거 생활은 어느 정도 이어지고 있다.',
    ]);
    await era.printAndWait('일어나고, 먹고, 함께 학원에 간다.');
    await era.printAndWait(
      '나가기 전 서로의 차림새를 확인하고 차를 타고 함께 학원에 도착한다.',
    );
    await era.printAndWait([
      maru.sex,
      '이(가) 수업을 듣는 동안,',
      you.get_colored_name(),
      '은(는) 다음 레이스를 기준으로 오후 훈련 메뉴를 짠다. 막힐 때는 더 베테랑인 트레이너에게 묻기도 한다.',
    ]);
    await era.printAndWait([
      '옥상은 이미 ',
      you.get_colored_name(),
      '들의 말없는 약속 장소다.',
      you.get_colored_name(),
      '이(가) 옥상의 마지막 계단을 밟을 즈음 교복 차림의 ',
      maru.get_colored_name(),
      '은(는) 이미 그곳에서 ',
      you.get_colored_name(),
      '을(를) 기다리고 있다.',
    ]);
    await era.printAndWait([
      '날씨가 좋은 날에는 운동장에 모여 있는 ',
      maru.uma_sex_title,
      '들을 내려다보며 오늘 학원에서 있었던 재미있는 이야기를 나눈다.',
    ]);
    await era.printAndWait(
      '비가 이어지는 날에는 훈련실 소파에 기대 서로 몸을 붙인다.',
    );
    await era.printAndWait([
      '황혼의 마지막 햇빛이 ',
      maru.get_colored_name(),
      '의 옷자락에 닿을 즈음,',
      you.get_colored_name(),
      '은(는) 마지막 서류를 정리하고 문밖에서 오래 기다린 ',
      maru.sex,
      '와(과) 함께 아파트로 돌아간다.',
    ]);
    await era.printAndWait([
      '밤, 쏴아 하는 물소리와 TV 속 코미디언의 웃음소리 사이에서,',
      you.get_colored_name(),
      '은(는) 볶은 요리를 접시에 담는다.',
    ]);
    await era.printAndWait([
      '간단히 식전 인사를 한 뒤,',
      you.get_colored_name(),
      '은(는) 말없이 ',
      maru.sex,
      '의 조금 자랑스러운 이야기를 듣는다. 테이오 ',
      maru.couple_title,
      '이(가) 곧 ',
      maru.sex,
      '을(를) 넘어설 거라고 말하며 무를 입에 넣는다.',
    ]);
    await era.printAndWait([
      '잘 자라는 인사를 나눈 뒤,',
      you.get_colored_name(),
      '은(는) 어떻게든 같은 방에서 자고 싶어 하는 ',
      maru.get_colored_name(),
      '을(를) 자기 방으로 돌려보냈다.',
    ]);
    await era.printAndWait([
      '소등 전,',
      maru.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      '에게 권한 소녀만화를 몇 페이지 넘겨본 뒤 잠든다.',
    ]);
    await era.printAndWait(
      '평온한 나날은 맑은 하늘에 떠 있는 흰 구름 같아서, 구름이 목적 없이 떠다니는 동안 시간마저 느려진 듯했다.',
    );
    await maru.say_and_wait([
      callname,
      ', 이번 일요일에 바다 갈래? 바다에서 노는 건 오랜만이네.',
    ]);
    await era.printAndWait([
      '어느 날 저녁 식사 중,',
      maru.sex,
      '이(가) ',
      you.get_colored_name(),
      ' 에게 바다에 가고 싶다고 말했다.',
    ]);
    era.printButton('「바다라. 오랜만이네.」', 1);
    await era.input();
    await maru.say_and_wait(
      '전에 바다에 간 건 여름 합숙 때 이사장 쪽 해변이었지. 하지만 이번에는 너와 나 둘만이 좋겠어.',
    );
    era.printButton('「일요일엔 별일 없으니 같이 가자.」', 1);
    await era.input();
    await maru.say_and_wait('다행이다♪ 그럼 나도 바다 갈 준비를 할게.');
    era.printButton(
      `（${y_call_m}이(가) 천진한 얼굴을 보여주는 건 이럴 때뿐이네.）`,
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 마지막 채소를 입에 넣으며 그렇게 생각했다.',
    ]);
    era.println();
    await era.printAndWait([
      '시간은 ',
      you.get_colored_name(),
      '와(과) ',
      maru.get_colored_name(),
      '의 기대 속에서 금세 일요일이 됐다.',
    ]);
    await era.printAndWait([
      '애차를 몰아,',
      you.get_colored_name(),
      '은(는) 예정 시간보다 일찍 이곳에 도착했다.',
    ]);
    await era.printAndWait(
      '관광 성수기는 아닌데도 이 해변에는 여전히 이름을 듣고 찾아온 손님이 많았다.',
    );
    await maru.say_and_wait([callname, ', 이 차림 어때?']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '의 손에 들린 봉투를 받아 안의 비키니를 보았다.',
    ]);
    await maru.say_and_wait('이 해변의 시선이 전부 나한테 모이겠네.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '의 수영복 차림을 상상하니 묘하게 기대되기 시작했다.',
    ]);
    await maru.say_and_wait([callname, ', 모래사장에서 만나자.']);
    await era.printAndWait([
      '탈의실 앞에서,',
      you.get_colored_name(),
      '은(는) 일단 ',
      maru.get_colored_name(),
      '와(과) 헤어졌다.',
    ]);
    era.println();
    await maru.say_and_wait(['짜잔♪ ', callname, ', 이 차림 어때?']);
    // Do not translate this
    era.printWholeImage('姥爷_泳_半身', {
      width: 8,
      offset: 8,
    });
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 자랑하듯 ',
      you.get_colored_name(),
      '을(를) 바라보고 있다.',
    ]);
    era.printButton('「왠지 마음에 안 드는데.」', 1);
    await era.input();
    await maru.say_and_wait([
      callname,
      '은(는) 이렇게 멋진 ',
      maru.sex_code === 1 ? '彼氏' : '彼女',
      '을(를) 독차지하고 싶은 거지♪ 흥흥.',
    ]);
    await era.printAndWait(
      '사람이 적은 곳에 파라솔을 세웠다. 오늘 날씨는 유난히 상쾌하다.',
    );
    await maru.say_and_wait([
      callname,
      ', 선크림 발라줄래? 바구니 안에 있어.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 바구니에서 선크림을 꺼내 손에 덜고 ',
      maru.sex,
      '의 등에 고르게 발랐다.',
    ]);
    await maru.say_and_wait('고마워.');
    await era.printAndWait([
      '잘게 움직이는 귀가 음악 리듬에 맞춰 박자를 타고 있다.',
      you.get_colored_name(),
      '은(는) 갑자기,',
      maru.sex,
      '에게 장난을 치고 싶어졌다.',
    ]);
    era.printButton(
      `${maru.sex}의 귀에 살며시 다가가 큰 소리를 낸다 (아직 진행하지 않는다)`,
      1,
    );
    era.printButton('……아니, 그만두자 (관계를 진행한다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 살며시 ',
        maru.sex,
        '의 귀에 다가갔다. 앞으로 무슨 일이 일어날지 모르는 ',
        maru.sex,
        '은(는) 손의 움직임이 멈춘 이유를 의아해한다.',
      ]);
      era.printButton('「왁!」', 1);
      await era.input();
      await maru.say_and_wait('꺅!');
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 놀라 몸을 움찔했고 잠시 뒤 정신을 차렸다.',
      ]);
      await maru.say_and_wait([callname, '！']);
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 깊게 숨을 쉬며 마음을 진정시키려 한다.',
      ]);
      era.printButton(
        `${y_call_m}의 귀가 매력적으로 보여서 나도 모르게 장난치고 싶어졌어.`,
        1,
      );
      await era.input();
      await maru.say_and_wait([
        '하아~ ',
        callname,
        '은(는) 아이 같네. 다른 사람한테도 이런 짓 해?',
      ]);
      era.printButton('「너한테만 그래.」', 1);
      await era.input();
      await maru.say_and_wait('그럼 내가 첫 번째 희생자라는 걸 영광으로 생각해야 해?');
      era.printButton('「아, 아니야. 들어봐.」', 1);
      await era.input();
      await maru.say_and_wait('나도 방금 그 놀라움, 똑같이 맛보게 해줄게!');
      era.printButton('「으아아아아아!」', 1);
      await era.input();
      await era.printAndWait([
        '그 뒤,',
        maru.sex,
        '이(가) 완전히 기분을 풀 때까지 꽤 시간이 걸렸다.',
      ]);
    } else {
      await era.printAndWait([
        '두 격렬한 생각이 충돌한 끝에,',
        you.get_colored_name(),
        '은(는) 장난을 포기하고,',
        maru.get_colored_name(),
        '의 마사지를 계속했다.',
      ]);
      await era.printAndWait('습기를 머금은 바람이 바다에서 육지로 불어왔다.');
      await era.printAndWait('모래사장을 아쉬워하듯 좀처럼 떠나지 않는다.');
      await maru.say_and_wait(['바람이 멎었네, ', callname, '。']);
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 오랫동안 그 바다를 바라봤다.',
      ]);
      await maru.say_and_wait('……. 해가 지면 달도 떠오르겠지.');
      await era.printAndWait(['갑자기 ', maru.sex, '이(가) 입을 열었다.']);
      era.printButton(
        '「해가 떠도 달이 져도, 바람은 조용히 춤추기 시작해.」',
        1,
      );
      await era.input();
      await maru.say_and_wait(['……', callname, ', 조금 더 가까이 가도 돼?']);
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 몸의 무게를 전부 ',
        you.get_colored_name(),
        '의 팔에 맡겼고,',
        you.get_colored_name(),
        '은(는)',
        maru.sex,
        '의 손을 꽉 잡았다.',
      ]);
      await era.printAndWait('두 사람은 말없이 달이 하늘 한가운데까지 떠오르는 것을 바라봤다.');
    }
    return ret;
  },

  // [번역 완료] 99
  async 99(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      '와(과) ',
      maru.get_colored_name(),
      '은(는) 여러 어려움을 겪은 끝에 마침내 서로의 마음을 확인했다.',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      '에게서 관공서에 제출할 서류를 받아 각자 작성란에 소중히 자신의 이름을 적었다.',
    ]);
    await era.printAndWait(
      '결혼식 날짜와 시간을 정한 뒤 관습대로 당분간 서로 만나서는 안 된다.',
    );
    await era.printAndWait([
      '결혼식 전날 밤,',
      you.get_colored_name(),
      '은(는) 도저히 잠들지 못하고 머리맡의 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '의 사진 앨범을 집어 들었다.',
    ]);
    await you.say_and_wait(
      '이건 메이크 데뷔 우승 뒤 사이제리야에서 축하했을 때 찍은 사진이다.',
      true,
    );
    await era.printAndWait([
      '휴대폰을 잘 다루지 못하는 ',
      maru.sex,
      '은(는) 사진으로 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '의 추억을 남기는 편을 좋아한다.',
      you.get_colored_name(),
      '은(는) 두 번째 페이지를 넘겼다.',
    ]);
    await you.say_and_wait(
      [maru.sex, ' 대신 자동차 전시회에서 애차 모형을 받아왔을 때 찍은 사진'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 고개를 들어 선반 위 애차 모형을 슬쩍 본 뒤 다음 페이지로 넘어갔다.',
    ]);
    await you.say_and_wait(
      '이건 훈련에 실패했을 때 의무실에서 찍은 사진이다.',
      true,
    );
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 곁에서 흘러나오는 옛 노래를 들으며 쉬고 있었고,',
      maru.sex,
      '의 귀가 음악 리듬에 맞춰 박자를 타고 있다.',
    ]);
    await you.say_and_wait(
      [
        '그때의 ',
        maru.sex,
        '은(는) 아직 ',
        maru.elder_sibling_sex_title,
        '에 대한 경계를 풀지 않았던 걸까.',
      ],
      true,
    );
    await era.printAndWait([
      '묘하게 짜증이 난 ',
      you.get_colored_name(),
      '은(는) 페이지를 거칠게 넘기다가 마지막에 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '이(가) 여름 합숙에서 찍은 사진에서 멈췄다.',
    ]);
    await you.say_and_wait(
      [maru.sex, '은(는) 그때 이미 나를 꽤 가까운 사람으로 여기고 있었던 걸까.'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '이(가) ',
      maru.sex,
      '에게 팔을 붙잡혀 억지로 찍힌 사진을 보았다. 당황한 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '의 미소가 선명하게 대비된다.',
    ]);
    await you.say_and_wait('이상한 소문을 피하느라 정말 고생했지.', true);
    await era.printAndWait('한숨을 내쉬고 기분 좋게 다음 페이지를 넘겼다.');
    await era.printAndWait([
      '겨울옷 차림의 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '이(가) 여기서 멀지 않은 산에서 찍은 사진.',
    ]);
    await you.say_and_wait(
      [
        '그때 ',
        maru.sex,
        '와(과) 내년 크리스마스에 자작나무 가로수길을 걷기로 약속했다.',
      ],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 다음 페이지를 넘기려던 순간.',
    ]);
    await era.printAndWait('똑똑똑.');
    era.printButton(`${y_call_m}?!`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 문을 열자 평상복 차림의 ',
      maru.sex,
      '이(가) 서 있었다.',
    ]);
    await maru.say_and_wait('이렇게 좋은 밤인데 같이 드라이브하자.');
    era.printButton('「응, 나가자.」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '의 손을 꽉 잡고 애차를 세워둔 곳으로 달려갔다.',
    ]);
    await maru.say_and_wait([
      callname,
      ', 너를 만나서 정말 다행이야. 고마워.',
    ]);
    await era.printAndWait('고요한 한밤중의 도로에 다시 촉촉한 자연의 바람이 불었다.');
  },
};
