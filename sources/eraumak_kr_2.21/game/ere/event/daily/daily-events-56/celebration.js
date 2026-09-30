const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

/** @param {Record<string,function(CharaTalk,CharaTalk,string):Promise>} handlers */
module.exports = async (handlers) => {
  // 공통 축제(묘회)
  handlers[29] = async (kitaru, me, callname) => {
    await print_event_name('축제', kitaru);
    await era.printAndWait([
      '오늘은 ',
      kitaru.get_colored_name(),
      '와 함께 여름 합숙 중 열린 축제에 참가했다.',
    ]);
    await era.printAndWait([
      '연한 녹색 유카타를 입은 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 앞에서 걷고 있었고, 넉넉하면서도 그리 무겁지 않은 유카타는 활기찬 ',
      kitaru.sex,
      '에게 우아한 분위기를 한껏 더해주었다.',
    ]);
    await era.printAndWait([
      '하얀 발등이 드러나는 나막신은 ',
      kitaru.get_colored_name(),
      '의 가벼운 발걸음에 맞춰 경쾌한 소리를 냈다.',
    ]);
    await era.printAndWait([
      kitaru.get_teen_sex_title(),
      '는 요염한 미소를 지으며 ',
      me.get_colored_name(),
      '을(를) 바라보았고, 몸을 옆으로 돌리자 본래 아름다웠던 골반과 엉덩이 라인이 더욱 도드라져 보였다.',
    ]);
    await kitaru.say_and_wait(['어때요! ', callname, '!']);
    era.printButton('마치카네 후쿠키타루의 허리를 감싸 안는다', 1, {
      disabled: era.get('love:56') < 75,
    });
    era.printButton('「좋아해」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '손을 뻗어 ',
        kitaru.get_colored_name(),
        '의 허리를 짚자, ',
        kitaru.get_teen_sex_title(),
        '는 몸을 미세하게 떨었다.',
      ]);
      await era.printAndWait([
        '오렌지색 꼬리는 오히려 자각이라도 한 듯 바짝 서서, 마치 연인을 껴안듯 ',
        me.get_colored_name(),
        '의 팔뚝을 휘감았다.',
      ]);
      await kitaru.say_and_wait('에엣!');
      await era.printAndWait([
        '이어 손을 들어 ',
        kitaru.sex,
        '의 탄탄하고 둥근 엉덩이를 가볍게 찰싹 때리자, ',
        kitaru.get_teen_sex_title(),
        '는 그에 맞춰 귀여운 비명을 내질렀다.',
      ]);
      await kitaru.say_and_wait('으햣?!');
      await era.printAndWait([
        '엉덩이 골을 따라 안쪽으로 천천히 손을 움직여 ',
        kitaru.sex,
        '의 가랑이 사이를 파고들었고, 속옷 너머로 애태우듯 ',
        kitaru.sex,
        '의 민감한 부위를 반복해서 자극했다.',
      ]);
      await kitaru.say_and_wait('주변에…… 주변에 사람이…… 꺄아앗!');
      await era.printAndWait('소리 내어 제지하려 했으나, 하반신에서 전해지는 자극 때문에 제대로 말을 잇지 못했다.');
      await era.printAndWait([
        '결국 ',
        me.get_colored_name(),
        '의 품에 더욱 기댈 수밖에 없었으며, 주변 사람들이 보기에는 ',
        kitaru.sex,
        '와 트레이너가 그저 사이가 매우 좋은 연인처럼 보이기를 바랄 뿐이었다.',
      ]);
      await kitaru.say_and_wait('으응……!');
      await era.printAndWait([
        '의도적으로 낮게 억눌린 신음과 함께, 축축하고 뜨거운 느낌이 ',
        me.get_colored_name(),
        '의 손끝 천 너머로 전해져 왔다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 완전히 ',
        me.get_colored_name(),
        '의 품에 무너져 내렸고, 두 다리를 가늘게 떨며 눈동자 속의 별에도 물안개가 서렸다.',
      ]);
      await kitaru.say_and_wait([callname, '…… 괜찮으니까……']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '를 껴안은 채, ',
        me.get_colored_name(),
        '은(는) 근처의 인적이 드문 숲속으로 발을 옮겼다.',
      ]);
      await quick_into_sex(56);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '에게 칭찬을 들은 ',
        kitaru.get_teen_sex_title(),
        '는 기쁜 듯 제자리에서 몇 바퀴를 돌았고, 덕분에 적지 않은 이들이 ',
        me.get_couple_title(),
        '에게 시선을 보냈다.',
      ]);
      await era.printAndWait([
        '이토록 정교하고 우아한 옷을 입고 있어도, ',
        kitaru.sex,
        '는 역시나 호들갑스러운 ',
        kitaru.get_colored_name(),
        '가 맞았다.',
      ]);
    }
  };

  // 공통 할로윈
  handlers[39] = async (kitaru, me, callname) => {
    await print_event_name('할로윈', kitaru);
    await era.printAndWait(
      '할로윈 밤, 트레센 학원은 주변 상점가와 함께 할로윈 분위기가 물씬 풍기는 모습으로 장식되었다.',
    );
    await era.printAndWait([
      '거대한 박쥐 장식과 호박머리의 그림자 아래서, 여러 ',
      kitaru.get_uma_sex_title(),
      '들도 팬 감사제 때처럼 가판대를 열고 있었다.',
    ]);
    await kitaru.say_and_wait(['앗! ', callname, '이다!']);
    await kitaru.say_and_wait('해피 할로윈!');
    await era.printAndWait([
      me.get_colored_name(),
      '의 담당 우마무스메가 운영하는 점술 오두막 안에는, 할로윈을 위해 특별히 준비한 의상을 입은 ',
      kitaru.get_colored_name(),
      '가 점술 테이블 뒤에 앉아 있었다.',
    ]);
    await era.printAndWait(
      '순백의 장식이 더해진 칠흑색 수녀복은 소박하면서도 순결한 느낌을 물씬 풍겼다.',
    );
    await era.printAndWait(
      '선명한 오렌지색 머리카락과 별 모양 눈동자는 장엄한 의상이 주는 압박감을 적절히 상쇄시켜 주었고, 오히려 여우처럼 묘한 유혹의 분위기를 은연중에 풍기고 있었다.',
    );
    await kitaru.say_and_wait('아하하');
    await kitaru.say_and_wait('보기 드문 모습이죠!');
    await kitaru.say_and_wait(
      '원래는 여기 인테리어도 고해성사실처럼 꾸미고 싶었는데, 시간이 부족해서 포기했어요!',
    );
    era.printButton('「그 복장, 정말 잘 어울리네.」', 1);
    await era.input();
    await kitaru.say_and_wait('네! 역시 같은 신직에 종사하는 몸이라 그런 걸까요!');
    await kitaru.say_and_wait([
      '그럼! ',
      callname,
      ', 이 후쿠짱에게 참회하고 싶은 것이라도 있나요?',
    ]);
    await era.printAndWait([
      '두 손을 맞잡는 동작을 취하며, 수녀복의 십자가 같은 눈동자로 ',
      me.get_colored_name(),
      '을(를) 빤히 응시했다.',
    ]);
    era.printButton('사탕을 준다', 1);
    era.printButton('마치카네 후쿠키타루에게 키스한다', 2, {
      disabled: era.get('love:56') < 50,
    });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '미리 준비해둔 사탕을 ',
        kitaru.get_colored_name(),
        '에게 건네주고, 수녀의 기도 소리를 뒤로하며 돌아왔다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '의 몸이 살짝 앞으로 기울어지자, 마음이 통한 ',
        kitaru.get_colored_name(),
        '도 그에 맞춰 의자를 앞으로 조금 당겼다.',
      ]);
      await kitaru.say_and_wait('음, 읍……!');
      await era.printAndWait([
        '두 사람의 혀가 얽히기 시작했고, 담당 우마무스메의 혀끝은 ',
        me.get_colored_name(),
        '의 입안을 헤집으며 할로윈의 다양한 사탕 맛을 전해주었다.',
      ]);
      await kitaru.say_and_wait('하아……!');
      await era.printAndWait('타액으로 이어진 실선이 수녀복 위로 떨어졌다.');
      await kitaru.say_and_wait(['……', callname, '.']);
      await kitaru.say_and_wait('우우…… 조금 대담하셨네요.');
    }
  };
};