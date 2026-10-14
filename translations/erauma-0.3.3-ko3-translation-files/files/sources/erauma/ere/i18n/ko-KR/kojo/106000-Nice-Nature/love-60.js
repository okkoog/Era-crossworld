// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/106000-Nice-Nature/love-60"),

  // [번역 완료] 49
  async 49(nature, you, callname, self_call) {
    const ret = [];
    await nature.print_and_wait([
      '어느 날 밤, ',
      nature.get_colored_name(),
      '는 서서히 ',
      you.get_colored_actual_name(),
      '에게 단순한 관계 이상의 미묘한 감정을 품고 있음을 깨닫기 시작했다.',
    ]);
    await nature.print_and_wait([
      you.sex,
      '와 함께 보냈던 시간들을 떠올리자, 무심결에 가슴 한구석에서 따스한 온기가 피어올랐다.',
    ]);
    await nature.say_and_wait([callname, '……']);
    await nature.print_and_wait(
      '그저 혼잣말로 이름을 불렀을 뿐인데도, 그 사람의 얼굴이 눈앞에 선명하게 떠올랐다.',
    );
    await nature.print_and_wait(
      '하지만 이것이 정말 철없는 시절의 풋사랑일까, 아니면 일상을 함께하며 생긴 감정의 착각일까?',
    );
    era.println();

    era.printButton(
      `「나, 아무래도 ${callname}을(를) 좋아하는 것 같아……」（관계 진전）`,
      1,
    );
    era.printButton(
      `「아냐 아냐, ${self_call}가 그런 감정을 가질 리 없잖아?」(관계 진전 중지)`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '등불 아래서, ',
        nature.teen_sex_title,
        '는 소중히 여기는 종이 트로피를 만지작거리며 자기도 모르게 중얼거렸다.',
      ]);
      await nature.say_and_wait([
        '잠깐! 나 지금 무슨 소리를 하는 거야! 마치 사랑에 빠진 ',
        nature.teen_sex_title,
        '같잖아! 난 그런 캐릭터가 아니라고!',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '는 자신의 말을 필사적으로 부정하려 했지만, 그 마음속에 심어진 연심의 씨앗은 이미 소리 없이 싹을 틔우고 있었다……',
      ]);
      era.drawLine({ content: '얼마 후……', position: 'left' });
      await nature.print_and_wait([
        nature.get_colored_name(),
        '은(는) 자신의 방 침대에 홀로 앉아 있었다. 평소에도 가볍게 입는 ',
        nature.sex,
        '은(는) 회색 반바지에 손을 대고 속옷과 함께 내렸다.',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '의 손에는 티셔츠가 들려 있었다. 마음에 두고 있는 그 사람의 옷이었다.',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '은(는) 티셔츠에 코를 묻은 채 이미 젖기 시작한 은밀한 곳으로 손을 뻗었다. 입구를 문지르고 때로는 돌기를 손가락 사이에 끼우며 조금씩 더 깊이 빠져들었다.',
      ]);
      nature.say(['트레이너, ', you.adult_sex_title, '……조금만 더……원해……']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '의 손은 이미 새빨갛게 달아올라 분비물이 흘러내리는 은밀한 부위를 어지럽게 자극하며 한 단계씩 더 나아갔다.',
      ]);
      await nature.print_and_wait([
        '충분히 느슨해졌다고 판단했는지,',
        nature.sex,
        '은(는) 더 큰 쾌감을 얻을 수 있는 곳으로 손가락을 밀어 넣었다. 빨려 들어간 손가락이 안쪽 벽과 마찰하며 끈적한 소리를 냈다.',
      ]);
      await nature.say_and_wait('으으으～～～～!!');
      await nature.print_and_wait([
        '분명하게 절정에 도달한 ',
        nature.get_colored_name(),
        '은(는) 목소리도 되지 않는 신음을 흘리며 거칠게 숨을 몰아쉬었다. 호흡을 가다듬으려고,',
        nature.sex,
        '은(는) 잠시 손을 멈췄다가 다시 손가락을 움직이기 시작했다.',
      ]);
      nature.say([
        callname,
        '、',
        callname,
        '……이렇게 음란한 짓을 하고 있는 건,',
        callname,
        '을(를) 생각하다가 이렇게 되어 버렸으니까……',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '의 안쪽을 휘젓는 손가락이 점점 빨라졌다. 질척질척한 소리가 울릴 때마다,',
        nature.sex,
        '의 의식도 흐트러져 갔다.',
      ]);
      nature.say([
        '나…… 나는,',
        callname,
        '을(를) 좋아해, 정말 좋아해! 그러니까, 좀 더 격하게……!',
      ]);
      nature.say(['가, 가버려,', callname, '……가버려～～～～!!']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '은(는) 몸을 뒤로 젖히고 허리를 쉴 새 없이 떨며 액체를 뿜어냈다. 시트가 더러워지지 않도록 깔아 둔 수건을 넘어 침대 시트까지 흠뻑 젖었다. 길게 이어진 절정에 ',
        nature.sex,
        '의 온몸이 떨렸고, 충족감에 젖은 여운 속에서,',
        nature.sex,
        '은(는) 깊은 잠에 빠져들었다.',
      ]);
    } else {
      await nature.print_and_wait([
        '밤이라서 감상적이 된 것뿐이라 생각하며, ',
        nature.get_colored_name(),
        '는 이불을 머리 끝까지 덮고 잠을 청해 잡념을 떨쳐내기로 했다.',
      ]);
    }
    return ret;
  },

  // [번역 완료] 74-1
  async '74-1'(nature, you, callname) {
    const ret = [];
    await nature.print_and_wait([
      '어느 날 밤, ',
      nature.get_colored_name(),
      '은(는) 자신의 ',
      you.get_colored_actual_name(),
      '을(를) 향한 감정이 사랑이라는 사실을 깨닫기 시작했다.',
    ]);
    await nature.print_and_wait(
      '창가에 엎드려 길 건너편에 아직 불이 켜진 트레이너실을 바라보자 따스한 감정이 가슴을 감쌌다.',
    );
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '의 세심한 보살핌을 떠올리며 ',
      nature.get_colored_name(),
      '은(는) 가슴속 감정의 이름을 이해한 듯했다.',
    ]);
    era.println();

    era.printButton(`「나…… ${callname}을(를) 좋아해!」 (관계를 발전시킨다)`, 1);
    era.printButton(
      `「아니, 아니! 우린 ${nature.uma_sex_title}와 담당 트레이너 사이잖아! 밤만 되면 왜 이렇게 감상적이 되는 거야. 어서 자자!」 (아직 발전시키지 않는다)`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '목소리는 가늘게 떨렸지만 ',
        nature.teen_sex_title,
        '의 결심은 확고했다.',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '은(는) 자신의 마음을 받아들였고 무엇을 원하는지도 알게 되었다. 남은 건 마지막 한 가지……',
      ]);
    }
    return ret;
  },

  // [번역 완료] 74-2
  async '74-2'(nature, you, callname, call_55) {
    const ret = [];
    await nature.say_and_wait('하아～～～～');
    await nature.print_and_wait([
      '트레이너실에서 ',
      nature.get_colored_name(),
      '는 오늘만 몇 번째인지 모를 한숨을 내쉬었다.',
    ]);
    await nature.print_and_wait([
      '원인은 ',
      nature.sex,
      '의 손에 들린 편지지 한 장이었다.',
    ]);
    await nature.print_and_wait(
      '분홍색 봉투에 하트 스티커까지 붙어 있었다. 누가 보아도 러브레터라는 걸 알 수 있었다.',
    );
    await nature.print_and_wait([
      '오늘 아침 이름도 모르는 ',
      nature.uma_sex_title,
      '에게 건네받은 것이라고 ',
      nature.sex,
      '는 말했다.',
      callname,
      '에게 전해 달라면서.',
    ]);
    await nature.print_and_wait([
      '부탁받은 이상 ',
      you.sex,
      '에게 전해 줄 수밖에 없다. 사랑에 빠진 ',
      nature.uma_sex_title,
      nature.child_sex_title,
      '의 마음은 ',
      nature.get_colored_name(),
      ' 자신이 누구보다 잘 알고 있었다.',
    ]);
    await nature.say_and_wait('하지만…… 그래도', true);
    await nature.say_and_wait(
      '트레이너와 그 애가 만약 잘되기라도 한다면——',
      true,
    );
    await nature.say_and_wait(
      [
        '차라리 버려 버릴까…… 아니, 그럴 순 없어. 하지만 ',
        callname,
        '를 빼앗기고 싶지는 않아……',
      ],
      true,
    );
    await nature.print_and_wait([
      '붉은 머리의 ',
      nature.teen_sex_title,
      '는 몇 번이고 고민했다. 올바른 답을 필사적으로 찾아보지만 도무지 나오지 않았다.',
    ]);
    nature.say(['하아～～～', callname, '……']);
    era.printButton('「왜 그래, 네이처? 무슨 일 있어?」', 1);
    await era.input();
    nature.say(['아, ', callname, ', 들어 봐. 사실은 말이야……']);
    await nature.print_and_wait([
      nature.get_colored_name(),
      '는 말을 꺼내다 무언가 깨달은 듯 비명을 지르며 펄쩍 뛰었다.',
    ]);
    await nature.say_and_wait('으아아아아아!?');
    nature.say([
      callname[0],
      callname[0],
      callname[0],
      callname,
      '! 언제부터 거기 있었던 거야!?',
    ]);
    era.printButton('「방금 왔어. 응? 그 편지는……?」', 1);
    await era.input();
    await nature.say_and_wait(
      '이제 와서 숨겨 봤자 늦었다. 이런 디자인이면 러브레터라는 걸 금방 알아챌 텐데……',
      true,
    );
    era.printButton('「예쁜 편지지네. 팬레터야?」', 1);
    await era.input();
    await nature.say_and_wait('설마, 눈치채지 못했어.', true);
    await nature.say_and_wait('아니야, 팬레터가 아니라……');
    era.printButton('「아니라고? 그럼 무슨 편지인데?」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '에게 두 번째 직구를 맞고 ',
      nature.get_colored_name(),
      '는 방금 반사적으로 부정했던 자신을 후회했다. 더는 도망칠 곳이 없었다.',
    ]);
    await nature.say_and_wait('응, 이건……');
    await nature.say_and_wait(
      [you.sex, '에게 이런 식으로 전해 주게 될 줄은 몰랐어.'],
      true,
    );
    await nature.print_and_wait([
      '자업자득이라고 ',
      nature.teen_sex_title,
      '는 생각하면서도 각오를 다지고 편지를 ',
      callname,
      '에게 건넸다.',
    ]);
    await nature.say_and_wait('그게…… 러브레터야……');
    era.printButton('「어? 러브레터? 역시 네이처는 인기 많구나.」', 1);
    await era.input();
    await nature.say_and_wait([
      '잠깐! 남자애가 이런 편지지로 러브레터를 쓸 리 없잖아! ',
      callname,
      ' 앞으로 온 거야, 너한테!',
    ]);
    await nature.print_and_wait([
      nature.get_colored_name(),
      '는 너무 당황한 나머지 편지를 책상 위에 거칠게 내려놓았다.',
    ]);
    era.printButton('「나한테 온…… 러브레터?」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '는 편지지를 찬찬히 들여다보았다. 얼굴에 떠오른 미소가 ',
      nature.get_colored_name(),
      '의 가슴을 조여 왔다.',
    ]);
    era.printButton('「고마워. 정말 기쁘다.」', 1);
    await era.input();
    await nature.say_and_wait('역시 이런 편지를 받으면 기쁜 거구나?');
    era.printButton(
      `「귀여운 ${nature.uma_sex_title}${nature.child_sex_title}, 가능하다면 내가 좋아하는 ${nature.uma_sex_title}${nature.child_sex_title}에게 받는 편지라면 정말 기쁘지.」`,
      1,
    );
    await era.input();
    await nature.say_and_wait(
      ['좋아하는 ', nature.uma_sex_title, nature.child_sex_title, '……그렇구나'],
      true,
    );
    await nature.say_and_wait(
      [
        callname,
        '가 좋아하는 ',
        nature.uma_sex_title,
        nature.child_sex_title,
        '가',
        nature.sex,
        '에게 러브레터를 건넸다. 서로의 마음을 확인한 두 사람은 맺어지고……',
      ],
      true,
    );
    await nature.say_and_wait(
      '애초에 나한테는 승산 같은 게 없었구나……',
      true,
    );
    await nature.print_and_wait([
      nature.get_colored_name(),
      '의 가슴이 한계까지 아팠지만 그래도 대화를 이어 갔다……',
    ]);
    await nature.say_and_wait([
      '그렇구나, ',
      callname,
      ', 좋아하는 ',
      nature.uma_sex_title,
      nature.child_sex_title,
      '、',
      nature.sex,
      '도 귀여우니까 둘이 잘 어울리는 거 아니야?',
    ]);
    era.println();

    era.printButton(
      '「어……? 이 러브레터, 네이처가 준 거 아니었어?」 (관계 진전)',
      1,
    );
    era.printButton(
      '「그런 사람이 있으면 좋겠지만, 아쉽게도 지금은 없어.」 (관계 진전 없음)',
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.say_and_wait('뭐?');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        '의 말에 ',
        nature.get_colored_name(),
        '는 순간 머릿속이 새하얘졌다.',
      ]);
      await nature.say_and_wait(
        [callname, ', 내가 쓴 러브레터라고 생각했던 거야?'],
        true,
      );
      await nature.say_and_wait(
        [callname, ', 러브레터를 받아서 기쁜 거야?'],
        true,
      );
      await nature.say_and_wait(
        [
          callname,
          '는 자신이 좋아하는 ',
          nature.uma_sex_title,
          nature.child_sex_title,
          '에게 온 러브레터라고 생각해서 기뻐했던 거야?',
        ],
        true,
      );
      await nature.say_and_wait(
        [
          '——그 말은, ',
          callname,
          '가 좋아하는 ',
          nature.uma_sex_title,
          nature.child_sex_title,
          '는……',
        ],
        true,
      );
      await nature.print_and_wait([
        '앞뒤 상황을 겨우 맞춰 본 ',
        nature.get_colored_name(),
        '는 순식간에 얼굴이 새빨개졌다.',
      ]);
      await nature.say_and_wait([
        '아! 그러고 보니 ',
        call_55,
        '에게 볼일이 있었지~! 미안!',
        callname,
        '! 잠깐 다녀올게! 저녁 만들어 줄 테니까 그때 보자!',
      ]);
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        '의 말을 끊고 ',
        nature.get_colored_name(),
        '는 트레이너실에서 뛰쳐나갔다.',
      ]);
      await nature.print_and_wait(
        '정신없이 달리다가 상점가에서 멈춰 선 뒤 힘없이 주저앉았다.',
      );
      await nature.say_and_wait(
        '나 바보야? 왜 도망쳤지? 그냥 받아들이면 됐잖아! 아아! 아까 저녁도 만들어 준다고 해 버렸는데!',
      );
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 머리를 쥐어뜯었다. 이런 상황에서 밤에 ',
        you.get_colored_actual_name(),
        '를 만나러 돌아가면 대답할 준비가 됐다는 뜻이 되어 버리잖아……',
      ]);
      await nature.say_and_wait([
        '이제 뒤돌아보지 말자. 앞으로 나아가는 거야.',
        callname,
        '가 내게 준 모든 것에 보답하기 위해.',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 각오를 다졌다. 몸을 일으켜 문구점을 향해 돌아섰다.',
      ]);
      await nature.print_and_wait('자신의 진심을 담을 편지지를 사기 위해.');
      await nature.say_and_wait(
        '그리고…… 혹시 모르니까 속옷도 갈아입자…… 저, 정말 만약을 위해서야……',
      );
    } else {
      await nature.say_and_wait('어? 정말?');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        '의 대답은 ',
        nature.get_colored_name(),
        '의 예상을 벗어났고, 조이던 가슴이 단숨에 풀어졌다.',
      ]);
      await nature.say_and_wait('그렇구나…… 에헤헤, 그럼…… 아직 기회는 있겠네.');
      era.printButton('「응? 무슨 기회?」', 1);
      await era.input();
      await nature.say_and_wait('비밀!');
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 장난스러운 미소를 띠고 가볍게 뛰듯 트레이너실을 나갔다.',
      ]);
      await nature.say_and_wait(
        '하지만 이대로 느긋하게 있을 수는 없지. 움직여야 해……',
      );
    }
    return ret;
  },

  // [번역 완료] 89
  async 89(nature, you) {
    await nature.print_and_wait([
      '밤이 되자 ',
      nature.get_colored_name(),
      '은(는) 벽장에서 조금 낡은 쿠키 통을 꺼내 소중히 탁자 위에 올려놓았다.',
    ]);
    await nature.print_and_wait([
      '통 안에는 종이로 접은 트로피들이 가지런히 쌓여 있었다. 하나하나 모두 ',
      you.get_colored_actual_name(),
      '와 함께해 온 발자취이자 둘도 없는 추억이었다. 달려온 레이스뿐 아니라 두 사람이 함께 보낸 행복한 시간까지 그 안에 담겨 있었다.',
    ]);
    await nature.print_and_wait([
      '앞으로 이 수집품이 더 늘어날 거라고 생각하자 저절로 미소가 ',
      nature.sex,
      '의 뺨에 떠올랐다.',
    ]);
  },
};
