const era = require('#/era-electron');

const { common_out_check } = require('#/event/edu/edu-events-52/snippets');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},{loc:number},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.park = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (
      era.get('flag:현재상호작용캐릭터') !== 52 ||
      extra_flag.loc !== location_enum.shopping
    ) {
      await era.printAndWait([
        urara.get_colored_name(),
        '는 최근 ',
        me.get_colored_name(),
        '과(와) 함께 상점가에 가고 싶어 하는 모양이다……',
      ]);
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(52).sub(event_hooks.out_shopping);
    await print_event_name('옥상 위의 「놀이공원」', urara);
    await urara.say_and_wait([
      callname,
      ', 우라라랑 같이 어디 좀 가줄 수 있어? 괜찮아, 금방이면 돼!',
    ]);
    await era.printAndWait([
      '상점가에서 특훈을 마치고 돌아오는 길, 옆에 있던 ',
      urara.get_colored_name(),
      '는 근처의 건물을 바라보더니 ',
      me.get_colored_name(),
      '의 소맷자락을 붙잡았다.',
    ]);
    await era.printAndWait([
      '그 후, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '를 따라 새로 생긴 근처 복합 쇼핑몰 앞으로 향했다. 외벽에 설치된 전망 엘리베이터를 타고 옥상까지 단숨에 올라갔다.',
    ]);
    await era.printAndWait(
      '경쾌한 벨 소리와 함께 철문이 서서히 열리자, 유리 지붕으로 덮인 옥상 위에 자리 잡은 작은 놀이공원이 두 사람의 눈앞에 나타났다.',
    );
    await era.printAndWait(
      '평일이라 그런지 작은 놀이공원에는 사람의 흔적이 없었고, 오직 자동 매표기와 시설물들의 화려한 전등만이 외롭게 반짝이고 있었다.',
    );
    await era.printAndWait([
      '그나저나 ',
      urara.get_colored_name(),
      '가 갑자기 놀이공원에서 놀고 싶어진 걸까…… 아무래도 그건 아닌 듯했다.',
    ]);

    era.printButton('「무슨 생각이라도 난 거야?」', 1);
    await era.input();

    await era.printAndWait([
      '함께 유원지 안으로 발을 들이자, ',
      urara.get_colored_name(),
      '는 광장 중앙에 놓인 미니 회전 찻잔을 응시하며 작은 목소리로 입을 열었다.',
    ]);
    await urara.say_and_wait(
      '주말에는 상점가 아이들이 다 여기로 놀러 와. 가깝기도 하고, 큰 놀이공원보다 요금도 싸거든.',
    );
    await urara.say_and_wait(
      '그리고 상점가를 다시 살리고 싶어 하는 아저씨나 아주머니들은 싫어할지도 모르지만, 여기는 뭐든 하기 참 편해.',
    );
    await urara.say_and_wait([
      '그래서 우라라는 생각했어. 상점가 사람들에게 필요한 건 다들 말하는 상권 부흥이 아니라, 변할 수 있는 계기가 아닐까 하고……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 귀여운 찻잔들과 함께 조용히 ',
      urara.get_teen_sex_title(),
      '의 고민을 경청했다. 번갈아 반짝이는 전등 빛은 ',
      urara.get_teen_sex_title(),
      '의 벚꽃색 눈동자를 더욱 다채로운 색으로 물들였다.',
    ]);
    await urara.say_and_wait(
      '환경은 바꿀 수 있어. 여러 문제가 생길 수도 있겠지만, 노력한다면 분명 다 괜찮아질 거야.',
    );
    await era.printAndWait([
      '맞는 말이다. 아마 그 모든 것들이 서로 충돌하는 건 아닐 것이다. 사람이 여전히 그곳에 있고, ',
      urara.get_colored_name(),
      '가 여전히 ',
      urara.get_colored_name(),
      '로 남아있는 한, 모든 것은 원래의 모습 그대로일 테니까.',
    ]);
    await era.printAndWait([
      '참으로 뜻밖이었다. 겉모습은 앳돼 보이지만, ',
      urara.get_colored_name(),
      '의 생각은 점점 깊어지고 있었다. 어쩌면 ',
      urara.sex,
      '의 다른 친구들보다도 훨씬 더 깊을지도 모르겠다……',
    ]);

    urara.say(['맞다, ', callname, '! 여기까지 왔는데 우라라랑 같이 타볼래?']);
    era.printButton('「우라라만 힘들지 않다면 괜찮아.」（속도+10）', 1);
    era.printButton('「나는 됐어, 우라라 혼자 다녀와.」（파워+10）', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        '응! 오늘 하루는 평소보다 조금 늦게 돌아가도 괜찮은 거지? 그치, ',
        callname,
        '?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 대답을 들은 어린 ',
        urara.get_uma_sex_title(),
        '는 ',
        me.get_colored_name(),
        '를 향해 활짝 미소를 지었다. 이윽고 ',
        me.get_colored_name(),
        '과(와) 함께 아기자기한 놀이 시설 안으로 들어갔다.',
      ]);
      await era.printAndWait([
        '음악과 함께 찻잔이 부드럽게 회전하기 시작했다. 유리 천장을 투과한 노을빛이 먼 곳을 바라보는 어린 ',
        urara.get_uma_sex_title(),
        '의 얼굴을 비추었다.',
      ]);
      await era.printAndWait([
        '지금 이 작은 사상가는 무슨 생각을 하고 있을까? 어쩌면, ',
        urara.sex,
        '의 얼굴에 띤 미소처럼 그저 조금 즐거운 상태일지도 모르겠다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, [10, 0, 0, 0, 0], 0);
    } else {
      await urara.say_and_wait([
        '왜? ',
        callname,
        '는 이제 어른이라서 그래?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 어쩔 수 없다는 듯한 대답을 듣자, ',
        urara.get_teen_sex_title(),
        '는 조금 실망한 듯했으나 금세 웃으며 곁에 있는 어른에게 농담을 건넸다.',
      ]);

      era.printButton('「이미 어른이 되어버렸으니까.」', 1);
      await era.input();

      await urara.say_and_wait([
        '그럼 이제 같이 돌아가자, ',
        callname,
        '? 우라라도 얼른 어른이 되어야겠어!',
      ]);
      await era.printAndWait([
        '정말로 그래도 괜찮은 걸까? 웃음 띤 ',
        urara.get_colored_name(),
        '의 두 눈을 바라보며, ',
        me.get_colored_name(),
        '은(는) 끝내 그 질문을 입 밖으로 내뱉지 못했다.',
      ]);
      await era.printAndWait([
        '지는 해를 뒤로하고 엘리베이터에 올라탄 ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 다시 귀갓길에 올랐다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, [0, 0, 10, 0, 0], 0);
    }
  };

  handlers.forget = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (await common_out_check(urara, me, extra_flag.loc, event_object)) {
      return true;
    }
    await print_event_name('먹는 걸 깜빡했어?', urara);
    await era.printAndWait([
      '하루의 외출 특훈을 마치고, ',
      me.get_colored_name(),
      '이(가) ',
      urara.get_colored_name(),
      '를 학원 정문까지 바래다주었을 때──',
    ]);
    await urara.say_and_wait([
      '아! ',
      callname,
      '! 나 정말 중요한 걸 잊어버린 것 같아!',
    ]);

    era.printButton(
      '「무슨 일이야?! 갑자기 왜 그렇게 크게 소리를 질러? 훈련 장소에 중요한 물건이라도 두고 온 거야?」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '그게 아냐! 돌아올 때 사는 걸 깜빡했어! 새로운 맛 붕어빵이랑 특제 허니 드링크!',
    );
    await urara.say_and_wait([
      callname,
      '도 깜빡하고 말 안 해준 것 같지만, 지금 가면 아직 문 안 닫았을 거야. 둘 중 하나만 산다면……',
    ]);

    era.printButton('「에? 아── 응, 그래…」', 1);
    await era.input();

    await era.printAndWait([
      '본래라면 이미 익숙해졌어야 했지만, ',
      urara.get_colored_name(),
      '가 호들갑을 떨며 늘어놓는 고민을 듣자 ',
      me.get_colored_name(),
      '은(는) 저도 모르게 맥 빠진 대답을 내뱉고 말았다.',
    ]);
    await urara.say_and_wait([
      callname,
      '! 그 반응은 뭐야! 우라라도 화낼 줄 안다구!',
    ]);

    urara.say([
      '그래도 지금 가면 아직 늦지 않았을 거야! ',
      callname,
      ' 생각은 어때……?',
    ]);
    era.printButton('「특제 허니 드링크가 더 가까우니까 지금 뛰어가면 늦지 않을 거야!」（근성+10）', 1);
    era.printButton('「붕어빵은 좀 멀긴 해도 절대 매진되지는 않았을 거야!」（지구력+10）', 2);
    const attr_change = new Array(5).fill(0),
      ret = await era.input();
    if (ret === 1) {
      attr_change[attr_enum.toughness] = 10;
    } else {
      attr_change[attr_enum.endurance] = 10;
    }

    await urara.say_and_wait([
      '좋아! ',
      callname,
      '가 그렇게 말한다면 우라라, 얼른 다녀올게! 여기서 잠깐만 기다려줘──!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '을(를) 학원 정문에 남겨둔 채, 어린 ',
      urara.get_uma_sex_title(),
      '는 지금까지 본 적 없는 속도로 상점가 방향을 향해 돌진했다.',
    ]);

    era.printButton('「천천히 가! 차 조심하고!」', 1);
    await era.input();

    await era.printAndWait([
      '자신의 외침보다도 더 빨리 시야 끝으로 사라지는 작은 뒷모습을 보며, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 고개를 저었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 간식에 쏟는 저 집중력을 평소 훈련이나 모의 레이스에 조금이라도 나누어 주었다면 좋았을 텐데.',
    ]);
    await era.printAndWait([
      '잠시 후, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '가 웃으며 건네준 ',
      ret === 1 ? '특제 허니 드링크': '붕어빵',
      '을(를) 받아 들고 기쁘게 맛을 보기로 했다……',
    ]);
    await era.printAndWait([
      '……다만 ',
      me.get_colored_name(),
      '의 입맛에는, 이미 여러 번 먹어봤음에도 불구하고 이 간식들은 여전히 너무나도 달았다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
  };
};