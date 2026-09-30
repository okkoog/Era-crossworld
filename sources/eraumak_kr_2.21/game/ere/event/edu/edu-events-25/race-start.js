const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string):Promise<boolean|void>>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[race_enum.begin_race] = async (coffee, me, callname) => {
    if (era.get('cflag:25:육성턴수합산') >= 48) {
      return true;
    }
    await print_event_name('데뷔전을 향해', coffee);
    await coffee.say_and_wait('없어…… 어디에도 없어…… 대체 어디로 간 거야……');
    await era.printAndWait([
      '오늘은 ',
      coffee.get_colored_name(),
      '의 데뷔전이다. 수많은 ',
      coffee.get_uma_sex_title(),
      '들이 긴장으로 몸을 떨고 있지만, ',
      coffee.sex,
      '의 마음은 이곳에 있지 않았다.',
    ]);
    await coffee.say_and_wait([
      callname,
      ', 레이스 시작 전에…… 잠시…… 다녀와도…… 될까요?',
    ]);
    era.printButton('「다녀와, 괜찮아.」', 1);
    await era.input();
    await coffee.say_and_wait('여기도 아니야……');
    await coffee.say_and_wait('여기도 없어……');
    await coffee.say_and_wait('……찾았다……! 결승점 너머, 바로 저기서 저를 기다리고 있어요.');
    await coffee.say_and_wait('무척 즐거워 보여요. 역시 제 결정은 틀리지 않았어요……');
    era.printButton('「전력을 다해 쫓아가렴.」', 1);
    await era.input();
    await coffee.say_and_wait('……네.');
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 지금까지 이어온, 아무도 모르는 추격전이 드디어 경기장에서 정식으로 펼쳐지려 하고 있다.',
    ]);
  };

  handlers[race_enum.hoch_sho] = async (coffee, me) => {
    await print_event_name(
      [race_infos[race_enum.hoch_sho].get_colored_name(), '을 향해'],
      coffee,
    );
    await era.printAndWait([
      '오늘은 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      ' 당일이다. 하지만 대기실 안의 ',
      coffee.get_colored_name(),
      '는 어딘가 초췌해 보였다.',
    ]);
    era.printButton('「많이 긴장돼?」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 물음에, ',
      coffee.get_colored_name(),
      '는 고개를 저었다.',
    ]);
    if (sys_reg_race(32).curr.race === race_enum.hoch_sho) {
      await coffee.say_and_wait([
        '어젯밤부터 지금까지…… 줄곧, 어떻게 해야 ',
        sys_get_colored_callname(25, 32),
        '를 이길 수 있을지 생각했어요……',
      ]);
    } else {
      await coffee.say_and_wait(
        '어젯밤부터 지금까지…… 줄곧, 어떻게 해야 다른 라이벌들을 이길 수 있을지 생각했어요……',
      );
    }
    await era.printAndWait([
      '아마도 ',
      coffee.get_colored_name(),
      '가 초췌해진 것은 ',
      coffee.sex,
      '가 이번 레이스의 성과를 무척 중요하게 여기고 있기 때문일 것이다.',
    ]);
    await era.printAndWait([
      coffee.sex,
      '의 어깨를 가볍게 두드려주었다. 트레이너인 ',
      me.get_colored_name(),
      '이(가) 지금 해줄 수 있는 일은 단 하나뿐이다.',
    ]);
    era.printButton('「힘내.」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 말에 작게 고개를 끄덕인 뒤, ',
      coffee.get_colored_name(),
      '는 경기장으로 향했다.',
    ]);
  };

  handlers[race_enum.toky_yus] = async (coffee, me, callname) => {
    await print_event_name(
      [race_infos[race_enum.toky_yus].get_colored_name(), '를 향해'],
      coffee,
    );
    await era.printAndWait([
      race_infos[race_enum.toky_yus].get_colored_name(),
      '——일생에 단 한 번뿐인 이 레이스를 위해, ',
      coffee.get_colored_name(),
      '는 수많은 가혹한 트레이닝을 견뎌왔다.',
    ]);
    await era.printAndWait('그리고 이제 그 결실을 거둘 시간이 다가왔다.');
    await coffee.say_and_wait([callname, '…… 다녀올게요.']);
    await era.printAndWait([
      '대기실 안, ',
      me.get_colored_name(),
      '은(는) 뒤돌아 경기장으로 향하는 ',
      coffee.get_colored_name(),
      '의 뒷모습을 말없이 지켜보았다.',
    ]);
    await era.printAndWait(
      '더 이상 덧붙일 말도, 해야 할 말도 없다. 불필요한 대화는 이미 수많은 밤낮의 트레이닝 속에서 모두 나누었으니까.',
    );
    await era.printAndWait([
      '지금부터는 ',
      coffee.sex,
      ' 혼자서 다른 참가 ',
      coffee.get_uma_sex_title(),
      '들과——그리고 친구와의 대결에 임해야 한다.',
    ]);
  };

  handlers[race_enum.stli_kin] = async (coffee, me) => {
    await print_event_name(
      [race_infos[race_enum.stli_kin].get_colored_name(), '을 향해'],
      coffee,
    );
    era.printButton('「카페, 몸 상태는 어때?」', 1);
    await era.input();
    await coffee.say_and_wait('기분 탓일까요…… 몸 깊은 곳이 이전과는 달라요……');
    await coffee.say_and_wait(
      '묘하게 술렁거리던 느낌이 없어요…… 마치 몸이, 온전히 제 것인 것만 같은 느낌이에요……',
    );
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '내 영양 지도 아래에 있었으니 당연한 결과지. 게다가…… 봄에 비하면 체중도 제법 늘었어, ',
        t_call_c,
        '……',
      ]);
      await tachyon.say_and_wait(
        '하지만 이 상태는…… 후후후, 괴이함과는 상관없겠군. 단순한 물리적 축적에 의한 것이라면……',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 요리조리 ',
        coffee.get_colored_name(),
        '의 몸을 살피며 손을 대려 하자, ',
        coffee.get_colored_name(),
        '는 가볍게 몸을 피해 버렸다.',
      ]);
      await era.printAndWait('드디어 그 정체 모를 시기를 이겨낸 모양이다……');
      await coffee.say_and_wait([
        '지금의 감각과 상태로 달린다면…… 이번 레이스에서 확실하게 승리할 수 있다면…… ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '에서도 승산이 있는 걸까요……?',
      ]);
      await tachyon.say_and_wait([
        '후후, 실험이 시작되기도 전에 결과를 논하는 건 무의미해, ',
        t_call_c,
        '.',
      ]);
      await tachyon.say_and_wait([
        '경기장에서 직접 확인해 보자고. ',
        coffee.get_colored_name(),
        '——자네라는 리트머스 종이가 과연 어떤 색으로 변할지 말이야.',
      ]);
      await era.printAndWait(
        '부디 밝은 색이기를 바라며…… 어찌 되었든, 오늘은 반드시 승리해야만 한다.',
      );
    } else {
      await era.printAndWait('드디어 그 정체 모를 시기를 이겨낸 모양이다……');
      await coffee.say_and_wait([
        '지금의 감각과 상태로 달린다면…… 이번 레이스에서 확실하게 승리할 수 있다면…… ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '에서도 승산이 있는 걸까요……?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 대답을 하지 못했다. 아직 ',
        coffee.get_colored_name(),
        '의 몸 상태에는 미지의 요소가 너무 많았기 때문이다.',
      ]);
      era.printButton('「우선은 이 레이스에서 승리하는 것만 생각하자.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 고개를 끄덕이고는 경기장을 향해 발을 내디뎠다.',
      ]);
    }
  };

  handlers[race_enum.kiku_sho] = async (coffee, me, callname) => {
    await print_event_name(
      [race_infos[race_enum.kiku_sho].get_colored_name(), '을 향해'],
      coffee,
    );
    await coffee.say_and_wait('…………');
    if (check_tachyon_plan_b()) {
      await get_chara_talk(32).say_and_wait('…………');
    }
    era.printButton('「…………」', 1);
    await era.input();
    await era.printAndWait(
      '대기실 안, 그 자리에 있는 모두가 침묵을 지켰다. 오늘의 레이스가 얼마나 중요한지 서로 잘 알고 있기 때문이다.',
    );
    await era.printAndWait([
      '——',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '. 일생에 단 한 번뿐인 기회이자, 이전의 어떤 레이스와도 다른 3000m 장거리 코스.',
    ]);
    await era.printAndWait([
      '가장 빠른 ',
      coffee.get_uma_sex_title(),
      '가 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '을 제패하고, 가장 운이 좋은 ',
      coffee.get_uma_sex_title(),
      '가 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '를 제패하며, 가장 강한 ',
      coffee.get_uma_sex_title(),
      '가 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '을 제패한다.',
    ]);
    await era.printAndWait([
      '오늘, ',
      coffee.get_colored_name(),
      '의 진정한 실력이 시험대에 오른다.',
    ]);
    await coffee.say_and_wait([callname, ', 이런 기분은 처음이에요.']);
    await era.printAndWait([
      '길었던 침묵 끝에 ',
      coffee.get_colored_name(),
      '가 입을 열었다.',
    ]);
    await coffee.say_and_wait('처음으로 레이스 전에…… 어쩌면 친구를 따라잡을 수 있을지도 모른다는 예감이 들어요……');
    era.printButton('「가서 뛰어넘어!」', 1);
    await era.input();
    await coffee.say_and_wait('……네!');
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 보기 드물게 밝은 미소를 지었다. 이 레이스는 결과와 상관없이 ',
      coffee.get_colored_name(),
      '의 레이스 인생에 전환점이 될 것이다…… 지금 할 수 있는 일은, 그저 곁에서 ',
      coffee.sex,
      '를 위해 기도하는 것뿐이다.',
    ]);
  };

  handlers[race_enum.tenn_spr] = async (coffee, me) => {
    await print_event_name(
      [race_infos[race_enum.tenn_spr].get_colored_name(), '을 향해'],
      coffee,
    );
    await era.printAndWait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 당일.',
    ]);
    await coffee.say_and_wait('이길 거야…… 이길 거야…… 반드시 이기겠어……');
    await coffee.say_and_wait(
      '그게 누구든…… 제 앞을 가로막는다면, 친구를 쫓는 제 길을 방해한다면, 저는……',
    );
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 몸에서 마치 검은 불꽃이 일렁이는 듯했다. ',
      coffee.sex,
      '의 승리에 대한 갈망은 그 어느 때보다도 강렬했다.',
    ]);
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '여어, ',
        sys_get_colored_callname(32, 25),
        '과 ',
        sys_get_callname(32, 0),
        '. 표정이 아주 무시무시하군.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '. ',
        me.get_colored_name(),
        '의 또 다른 담당 우마무스메이자 이번 레이스의 경쟁 상대가 뒤편에서 걸어 나왔다.',
      ]);
      await coffee.say_and_wait([
        sys_get_colored_callname(25, 32),
        '…… 당신이 참가한다 해도 저를 방해하게 두진 않겠어요……',
      ]);
      await tachyon.say_and_wait([
        '하하, 방해라고? …… 레이스가 시작되기도 전에 자네가 이길 거라 확신하지 말게나, ',
        coffee.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('불꽃 튀는 두 사람. 이제 승부는 경기장에서 가려질 것이다.');
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 비장하다 못해 처절해 보이기까지 하는 표정을 묵묵히 지켜보았다.',
      ]);
      await era.printAndWait([
        '할 수만 있다면…… 이제 그만 친구를 쫓는 일은 멈춰도 된다고 말해주고 싶지만—— 그런 말이 입 밖으로 나올 리 없다. 그것은 ',
        me.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '가 계약을 맺을 때, ',
        coffee.sex,
        '와 처음으로 나눈 약속이기 때문이다.',
      ]);
      await era.printAndWait([
        '그러니 오늘 할 수 있는 일은…… 그저 ',
        coffee.sex,
        '가 무사하기를 기도하는 것뿐이다.',
      ]);
    }
  };

  handlers[race_enum.takz_kin] = async (coffee, me) => {
    if (era.get('cflag:25:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.takz_kin].get_colored_name(), '을 향해'],
      coffee,
    );
    await era.printAndWait([
      '비록 공항에서의 일로 ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      ' 사이에 약간의 어색한 냉전기가 있었지만, 서로의 진심을 털어놓고 시간이 흐르면서 두 사람의 관계는 다시 회복되었고, 오히려 이전보다 더욱 깊어졌다.',
    ]);
    await era.printAndWait([
      coffee.sex,
      '는 점차 좌절감에서 벗어나 예전보다 자주 미소를 짓게 되었고, 그리고——',
    ]);
    await era.printAndWait([
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 직전의 대기실.',
    ]);
    await coffee.say_and_wait([
      race_infos[race_enum.takz_kin].get_colored_name(),
      '…… 이곳이…… 저의 새로운 출발점이에요……',
    ]);
    await coffee.say_and_wait('비록 친구는 곁에 없지만…… 저는 반드시——');
    await coffee.say_and_wait('——!?');
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await coffee.say_and_wait('친구! 저기 대기실 출구 쪽에…… 떠나지 않고, 저를 기다려주고 있어요!');
    await era.printAndWait([
      '친구는 분명 프랑스로 떠나 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
      '에서 ',
      coffee.get_colored_name(),
      '의 도전을 기다리고 있어야 하는 게 아니었나?',
    ]);
    await era.printAndWait([
      '이유가 어찌 되었든, 다시 나타난 친구의 모습에 ',
      coffee.get_colored_name(),
      '는 다시금 활기를 찾았다. 어쩌면 이번 레이스에서 최고의 기량을 발휘할 수 있을지도 모른다.',
    ]);
    await coffee.say_and_wait('반드시 이기겠어요……');
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await tachyon.say_and_wait(['너무 장담하지 않는 게 좋을걸, ', t_call_c, '.']);
      await era.printAndWait([
        '준비를 마친 ',
        tachyon.get_colored_name(),
        '이 ',
        coffee.sex,
        '의 상징과도 같은 흰색 승부복을 입고 대기실로 들어섰다.',
      ]);
      await tachyon.say_and_wait([
        '이번 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '에서 자네를 앞지르고…… 그 기세로 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '에서 자네의 친구까지 뛰어넘어 주지.',
      ]);
      await coffee.say_and_wait('……할 수 있다면, 어디 한번 해보시죠……!');
      await era.printAndWait([
        '두 사람 사이에 팽팽한 긴장감이 감돌았다. 이 불꽃 튀는 대결은 이제 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '에서 최후의 승부를 맞이하게 된다.',
      ]);
    }
  };

  handlers[race_enum.japa_cup] = async (coffee, me, callname) => {
    if (era.get('cflag:25:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.japa_cup].get_colored_name(), '을 향해'],
      coffee,
    );
    await era.printAndWait([
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 당일, 대기실 안.',
    ]);
    await era.printAndWait([
      '우연한 계기로 만난 ',
      me.get_couple_title(),
      '은 드디어 이곳까지 도달했다.',
    ]);
    await coffee.say_and_wait('…………');
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) 나란히 걷던 ',
      coffee.get_colored_name(),
      '가 갑자기 발걸음을 멈추었고, 뒤돌아보는 ',
      me.get_colored_name(),
      '과(와) 시선이 마주쳤다.',
    ]);
    era.printButton('「긴장되니?」', 1);
    await era.input();
    await coffee.say_and_wait('…… 긴장한 게 아니라, 그저……');
    if (check_tachyon_plan_b()) {
      await coffee.say_and_wait([
        sys_get_colored_callname(25, 32),
        '의 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '을 보고 나서 생각했어요…… 저도 오늘 ',
        coffee.sex,
        '처럼 멋진 레이스를 보여줄 수 있을까요?',
      ]);
    } else {
      await coffee.say_and_wait('저도 오늘…… 멋진 레이스를 보여줄 수 있을까요?');
    }
    await era.printAndWait([
      '오로지 친구를 뛰어넘는 것만 생각하며 주변을 돌아보지 않았던 ',
      coffee.get_colored_name(),
      '는 수많은 일을 겪으며 어느덧 변화해 있었다.',
    ]);
    era.printButton(
      '「가서 네가 가장 자랑하는 그 라스트 스퍼트를, 전 세계에 똑똑히 보여줘.」',
      1,
    );
    await era.input();
    if (era.get('love:25') >= 75) {
      await coffee.say_and_wait([callname, '…… 입 맞춰도 될까요?']);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 이마를 덮은 앞머리를 살짝 걷어내며 고개를 숙이자, ',
        coffee.get_colored_name(),
        '는 그에 맞춰 까치발을 들고 ',
        me.get_colored_name(),
        '의 입술에 입을 맞췄다.',
      ]);
      await era.printAndWait([
        '마치 상점가 골목길에서의 그날처럼, ',
        coffee.get_colored_name(),
        '의 두 손은 자연스럽게 ',
        me.get_colored_name(),
        '의 목 뒤를 감싸 안았고, 두 입술은 깊은 곳에서 서로의 사랑을 나누었다.',
      ]);
      await era.printAndWait([
        '이윽고 두 사람은 입을 떼고 서로를 마주 보며 미소 지은 뒤, ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        ' 경기장으로 힘차게 달려나갔다.',
      ]);
    } else {
      await coffee.say_and_wait([callname, '…… 한번 안아주실 수 있나요?']);
      await era.printAndWait([
        '두 팔을 벌리자 ',
        coffee.get_colored_name(),
        '가 다가와 ',
        me.get_colored_name(),
        '을(를) 끌어안았고, 두 사람은 아무런 말 없이 그저 서로의 온기를 느꼈다.',
      ]);
      await era.printAndWait([
        '잠시 후 두 사람은 몸을 떼고, 곧장 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        ' 경기장으로 향했다.',
      ]);
    }
  };

  handlers[race_enum.arim_kin] = async (coffee, me, callname) => {
    await print_event_name(
      [race_infos[race_enum.arim_kin].get_colored_name(), '을 향해'],
      coffee,
    );
    if (era.get('cflag:25:육성턴수합산') < 96) {
      await era.printAndWait([
        race_infos[race_enum.arim_kin].get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        '이것은 ',
        coffee.get_colored_name(),
        '의 올해 마지막 레이스이자, ',
        coffee.sex,
        '의 클래식 시즌이 끝남을 알리는 무대다.',
      ]);
      await era.printAndWait([
        '대기실 안, ',
        me.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 어깨를 붙잡고 마지막 당부를 건네고 있었다.',
      ]);
      era.printButton('「정신을 집중하고…… 아드레날린을 마음껏 분출시켜……」', 1);
      await era.input();
      await coffee.say_and_wait('……네.');
      await era.printAndWait([
        '두 눈을 감은 채, ',
        coffee.get_colored_name(),
        '가 나지막이 대답했다.',
      ]);
      await era.printAndWait('다시 눈을 떴을 때, 그 눈빛은 그 어느 때보다 확신에 차 있었다.');
      await coffee.say_and_wait([callname, ', 반드시 이길게요.']);
      await era.printAndWait([coffee.sex, '의 뒷모습이 서서히 빛 속으로 사라져 갔다.']);
    } else {
      era.printButton('「……드디어 마지막이구나.」', 1);
      await era.input();
      await coffee.say_and_wait('……그러게요, 시간이 참 빨라요……');
      await era.printAndWait([
        '대기실 안, ',
        me.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '와 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 전 마지막 대화를 나누고 있었다.',
      ]);
      await coffee.say_and_wait([callname, ', 잠시만 실례할게요……']);
      await era.printAndWait([
        '말을 마친 ',
        coffee.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 손을 잡아 자신의 가슴 위에 올렸다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 힘찬 심장 박동이 부드러운 감촉을 타고 손바닥까지 전해졌다. 이 순간 ',
        me.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '라는 존재가 얼마나 생생하고 아름다운지 온몸으로 느낄 수 있었다.',
      ]);
      await coffee.say_and_wait('…… 정말 따뜻해요…… 조금 안심이 된 것 같아요……');
      await coffee.say_and_wait([
        '이 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '이 끝나더라도…… 우린 계속 함께하는 거예요, ',
        callname,
        '……',
      ]);
      era.printButton('「절대 떨어지지 않을 거야.」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '의 확신에 찬 대답을 듣고 나서야, ',
        coffee.get_colored_name(),
        '는 손을 놓고 미소 지으며 대기실을 나섰다.',
      ]);
      await era.printAndWait([
        '지난 3년 동안 ',
        me.get_colored_name(),
        '과(와) 함께 쌓아온 소중한 추억들을 가슴에 품고, ',
        coffee.get_colored_name(),
        '는 최후의 게이트를 향해 걸어갔다.',
      ]);
    }
  };
};