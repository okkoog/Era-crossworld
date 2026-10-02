/**
 * @file 골드 쉽 - 모집
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} gold_ship
   * @param {CharaTalk} you
   * @param {string} title
   * @param {string} color2
   */
  async rec(gold_ship, you, title, color2) {
    await era.printAndWait([
      '맑고 화창한 아침, ',
      you.get_colored_name(),
      '은(는) 단정한 트레이너 복장을 차려입고 훈련장에 도착했다.',
    ]);
    await era.printAndWait([
      title,
      '로서, ',
      you.get_colored_name(),
      '의 임무는 젊고 유능한 ',
      gold_ship.uma_sex_title,
      '들을 더 높은 수준으로 이끄는 것이다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 운동복을 입고 키가 큰 은발의 ',
      gold_ship.uma_sex_title,
      '를 발견했다. ',
      gold_ship.sex,
      '의 얼굴은 마치 얼음처럼 무표정한, 소위 포커 페이스였다. 이 ',
      gold_ship.uma_sex_title,
      '는 헤드폰과 모자를 합쳐놓은 기묘한 물건을 쓰고 있었지만 ',
      you.get_colored_name(),
      '은(는) 경험상 이것이 ',
      gold_ship.uma_sex_title,
      '의 전통적인 장식품이라는 것을 알고 있었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 가늘게 뜨고 그녀를 자세히 관찰했다. ',
      gold_ship.sex,
      '는 다가오는 선발 레이스를 위해 준비 운동을 하는 것처럼 보였다. ',
      gold_ship.sex,
      '의 몸은 꽤 유연했고, 허리를 숙이고 스트레칭하는 동작을 쉽게 해냈다.',
    ]);
    if (gold_ship.sex_code !== 1) {
      await era.printAndWait([
        '가슴 앞의 두 개의 부드러운 아이스크림은 은발 미인의 동작에 맞춰 흔들렸고, 운동복 바지로 감싸인 건강하고 탄탄한 엉덩이와 그늘 속의 신비한 정원은 ',
        you.get_colored_name(),
        '의 시선을 사로잡았다. 우마무스메의 성숙한 몸매는 ',
        you.get_colored_name(),
        '의 눈길을 끌었다...하지만 잠깐, ',
        you.get_colored_name(),
        '은(는) 프로 트레이너인데 이런 생각을 해도 되는 걸까.',
      ]);
    }
    await era.printAndWait([
      '하지만 ',
      gold_ship.sex,
      '의 허벅지는 정말로 둥글고 탄력 있어 보였다! 통통한 살결 아래 희미하게 드러나는 근육의 곡선은 ',
      you.get_colored_name(),
      '에게 그 부드러움 아래의 단단함을 만지고 맛보고 싶은 욕구를 불러일으켰다.',
    ]);
    await era.printAndWait([
      '이때 은발의 ',
      gold_ship.uma_sex_title,
      '가 ',
      you.get_colored_name(),
      '의 시선을 느꼈는지, ',
      you.get_colored_name(),
      '을(를) 쳐다보았다. ',
      you.get_colored_name(),
      '은(는) 즉시 이런 나쁜 생각을 머릿속에서 떨쳐내고, 태블릿을 들여다보며 집중하려고 했다.',
    ]);

    era.printButton('（음..이 애는...）', 1);
    await era.input();
    await era.printAndWait([
      '이런 은색 털은 분류상 회색에 속한다. ',
      you.get_colored_name(),
      '은(는) 공용 태블릿의 데이터베이스를 뒤져, 털색깔 분류를 통해 이 학생의 이름을 금방 찾아냈다.',
    ]);

    era.printButton('（골드...쉽...뭐야, 분명 은색인데.）', 1);
    await era.input();
    await era.printAndWait([
      '은색의 ',
      gold_ship.get_colored_name(),
      '. 이 말장난에 ',
      you.get_colored_name(),
      '은(는) 웃음을 터뜨렸다.',
    ]);
    await era.printAndWait([
      '이때 갑자기 ',
      you.get_colored_name(),
      '의 등골이 오싹해졌고, 고개를 숙인 채로 꼼짝도 할 수 없게 되었다. 오직 눈만이, 그 저주받은 눈만이 호기심에 위를 올려다보았다.',
    ]);
    await gold_ship.say_and_wait('……');

    await era.printAndWait([
      you.get_colored_name(),
      '의 시선은 태블릿을 넘어, 크고도 정교한 아름다운 얼굴을 마주했다. 얼굴의 주인은 고개를 갸우뚱하며 눈을 동그랗게 뜨고 ',
      you.get_colored_name(),
      '과(와) 시선을 마주쳤지만, 초점 없는 그 눈은 마치 ',
      you.get_colored_name(),
      '을(를) 보지 않는 듯했다.',
    ]);
    await era.printAndWait([
      gold_ship.sex,
      '의 눈은 초점이 없었다. ',
      you.get_colored_name(),
      '은(는) 이 미인이 자신을 보고 있는지, 아니면 자신의 뒤를 보고 있는지, 자신의 내면을 보고 있는지, 자신의 영혼을 보고 있는지 알 수 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 깜빡이지도 못하고, ',
      gold_ship.sex,
      '의 바늘 같은 시선이 눈에 꽂히는 것을 느꼈다. 눈이 마르기 시작할 때 쯤이야 생리현상으로 눈을 감았다.',
    ]);
    await era.printAndWait([
      '그 한 순간이 지나고, ',
      you.get_colored_name(),
      '은(는) 약간 젖은 눈을 다시 떴지만, 그 ',
      gold_ship.uma_sex_title,
      '는 이미 원래 자리로 돌아가 있었다. ',
      gold_ship.sex,
      '는 더 이상 ',
      you.get_colored_name(),
      '을(를) 보고 있지 않았지만, 머릿속이 뒤죽박죽이 된 이상한 느낌은 여전히 사라지지 않았다.',
    ]);

    era.printButton('（이건 대체...）', 1);
    await era.input();
    await era.printAndWait([
      '선발 레이스가 끝났다. ',
      gold_ship.get_colored_name(),
      '은 기록을 깨며 1위를 차지했다. ',
      you.get_colored_name(),
      '은(는) 주변의 다른 트레이너들이 수군거리는 소리를 들었다. 분명히 이 유망주를 스카우트하기 위해 준비하고 있을 터였다.',
    ]);
    era.printButton(
      `가까이 다가가 ${gold_ship.name}을 스카우트하려는 무리에 합류한다`,
      1,
    );
    era.printButton('「불길한 예감이 드는데...」', 2);
    await era.input();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '은 무리 속에서 ',
      you.get_colored_name(),
      '을(를) 단번에 발견했다——아니면 처음부터 ',
      gold_ship.sex,
      '는 다른 열성적인 트레이너들을 눈여겨보지도 않았던 것일까? ',
      gold_ship.sex,
      '는 몰려든 군중을 힘껏 헤쳐나와, 마치 사냥감을 본 표범처럼 사나운 미소를 지으며 ',
      you.get_colored_name(),
      '의 방향으로 가볍게 뛰기 시작하다...속도를 높이고, 더 높였다!',
    ]);
    await gold_ship.say_and_wait([
      { content: '야생의 트레이너를 발견했다아아아아——!', color: color2 },
    ]);
    await era.printAndWait([
      '이것이 ',
      you.get_colored_name(),
      '이(가) 기절하기 전에 들은 마지막 말이었다.',
    ]);

    era.println();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '에게 성공적으로 스카우트되었다!',
    ]);
  },
};
