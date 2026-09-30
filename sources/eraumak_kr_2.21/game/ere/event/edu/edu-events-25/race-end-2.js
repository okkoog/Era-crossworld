const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[race_enum.tenn_spr] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('피안', coffee);
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32);
      await era.printAndWait('숨 막히는 일전.');
      await era.printAndWait([
        '총 길이 3200m의 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '은 결국 ',
        coffee.get_colored_name(),
        '가 ',
        tachyon.get_colored_name(),
        '과 최종 직선에서 벌인 사투 끝에 막을 내렸다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 마치 광속을 초월하는 듯한 모습, ',
        coffee.get_colored_name(),
        '의 마치 사냥을 하는 듯한 야성적인 발걸음은 현장에 있던 모든 이들을 깊이 전율케 했다.',
      ]);
      await era.printAndWait([
        '——하지만 결국, ',
        coffee.get_colored_name(),
        '가 한 수 위였다.',
      ]);
      await era.printAndWait([
        '그녀가 결승선을 통과하는 순간, 교토 경기장의 환호성이 하늘을 찔렀다.',
      ]);
      await era.printAndWait('지하 통로 안.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 레이스가 끝난 직후 행방이 묘연해졌고, ',
        coffee.get_colored_name(),
        '는 평소와 다름없이 ',
        me.get_colored_name(),
        '이(가) 오기를 기다리고 있었다.',
      ]);
      await coffee.say_and_wait([
        '하아, 하아, 하아…… 제가 이겼어요, ',
        callname,
        '…… 마지막 직선에서, 온 힘을 다해 ',
        sys_get_colored_callname(25, 32),
        '를 추월했어요.',
      ]);
    } else {
      await era.printAndWait('숨 막히는 일전.');
      await era.printAndWait([
        '총 길이 3200m의 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '은 결국 ',
        coffee.get_colored_name(),
        '가 최종 직선에서 마치 전방의 ',
        coffee.get_uma_sex_title(),
        '를 사냥하는 듯한 경이로운 스퍼트를 보여주며 끝이 났다. 그녀가 결승선을 통과하는 순간, 교토 경기장의 환호성이 하늘을 찔렀다.',
      ]);
      await era.printAndWait('지하 통로 안.');
      await coffee.say_and_wait(['하아, 하아, 하아…… 이겼어요, ', callname]);
    }
    const edu_marks = new CoffeeEduMarks();
    await coffee.say_and_wait(
      '그리고…… 친구와의 거리도…… 조금 더 가까워진 것 같아요…… 비록 아직 따라잡지는 못했지만.',
    );
    await era.printAndWait([
      '레이스가 끝나고, 레이스에서 모든 것을 쏟아부었던 ',
      coffee.get_colored_name(),
      '는 평소의 모습으로 돌아왔다.',
    ]);
    era.printButton('「완벽한 달리기였어, 축하해.」', 1);
    await era.input();
    await coffee.say_and_wait('고마워요, 하지만 친구를 따라잡기 전까지는, 결코 완벽하다고 할 수 없어요……');
    await coffee.say_and_wait([
      callname,
      ', 이제 다음 레이스를 정해야 할 때죠. 다음 목표에 대해서는——',
    ]);
    await era.printAndWait([
      '다음 목표는…… 일반적으로라면, 대부분 봄에 열리는 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '을 선택하겠지만, ',
      coffee.get_colored_name(),
      '를 잠시 쉬게 하는 것도 나쁘지 않은……',
    ]);
    await coffee.say_and_wait('——프랑스로 원정을 가고 싶어요.');
    await era.printAndWait('!?');
    await era.printAndWait([
      '순간, ',
      me.get_colored_name(),
      '은(는) 자신의 귀를 의심했다. ',
      coffee.get_colored_name(),
      '의 폭탄 발언은 ',
      me.get_colored_name(),
      '의 사고를 마비시켰다.',
    ]);
    era.printButton('「프랑스!? 개선문상 말이야? 개선문상을 뛰러 가겠다고!?」', 1);
    await era.input();
    await coffee.say_and_wait(
      '……더 빠르고, 더 강해지려면, 저편으로 갈 수밖에 없어요…… 바다 건너 프랑스로.',
    );
    era.printButton('「………이유는? 그것도 친구 때문이야?」', 1);
    await era.input();
    await coffee.say_and_wait(
      '네…… 친구가, 곧 떠나거든요…… 혼자서 프랑스로 가버려요…… 그래서 저는 반드시……',
    );
    if (edu_marks.horse) {
      era.println();
      await era.printAndWait('——아니야.');
      await era.printAndWait([
        '갑자기, ',
        me.get_colored_name(),
        '의 뇌리에 마치 허공에서 나타난 듯한 어떤 의념이 스쳤다.',
      ]);
      await era.printAndWait([
        '아니라고? 무엇이 아니라는 거지? ',
        coffee.get_colored_name(),
        '가 프랑스로 가려는 계획이 잘못된 건가…… 아니면 그녀를 프랑스로 이끄는 것이 친구가 아니라는 건가?',
      ]);
    }
    era.println();
    await coffee.say_and_wait([callname, '…… 이 소원, 들어주실 거죠?']);
    await coffee.say_and_wait('친구도 제가 오기를 바라고 있어요. 그러니까……');
    if (edu_marks.horse) {
      era.println();
      await era.printAndWait('——아니야.');
      await era.printAndWait([
        '또다시, 그 의념이 ',
        me.get_colored_name(),
        '의 머릿속에 나타났다.',
      ]);
      await era.printAndWait('대체 뭐가 아니라는 건지, 확실히 말을 해달라고!');
    }
    era.println();
    await coffee.say_and_wait('친구를 따라잡는다——그것은 우리 사이의 중요한 약속이에요.');
    await coffee.say_and_wait('저는 포기하지 않아요…… 우리는 그러기 위해서, 계약을 맺은 거니까……');
    era.printButton('「…………」', 1);
    await era.input();
    await era.printAndWait([
      '반박할 수 없었다. 그것은 확실히 ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '사이의 계약 관계를 지탱하는 초석이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '가 원정을 포기하도록 설득할 수 없었다. 결국, ',
      me.get_couple_title(),
      '은(는) 일단 국내 목표인 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '을 유지하기로 하고, 프랑스 원정 여부는 다음 달 중순에 다시 결정하기로 했다.',
    ]);
    if (edu_marks.horse) {
      era.println();
      await era.printAndWait([
        '다만, 당신은 다시금 뇌리에 직접적으로 나타났던 그 의념을 떠올렸다.',
      ]);
      await era.printAndWait([
        '…… ',
        coffee.get_colored_name(),
        '를 프랑스로 이끄는 것은, 대체 무엇이란 말인가?',
      ]);
    }
  };

  handlers[race_enum.takz_kin] = async (coffee, me, callname, extra_flag) => {
    if (era.get('cflag:25:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('대체품', coffee);
    if (check_tachyon_plan_b()) {
      const c_call_t = sys_get_colored_callname(25, 32);
      await coffee.say_and_wait([
        '하아, 하아, 하아…… ',
        c_call_t,
        '…… 정말 강해요…… 아주 조금만 더하면……',
      ]);
      await coffee.say_and_wait(
        '심지어…… 친구의 어깨에 손이 닿을 것만 같은 기분이었어요…… 하지만 결국, 제가 이겼네요.',
      );
    } else {
      await coffee.say_and_wait(
        '하아, 하아, 하아…… 더 가까워졌어요…… 친구와…… 그 어느 때보다도 가까워졌어요……',
      );
      await coffee.say_and_wait('심지어…… 친구의 어깨에 손이 닿을 것만 같은 기분이었어요……');
    }
    await era.printAndWait([
      '올해 상반기 마지막 제전——',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '은 ',
      coffee.get_colored_name(),
      '의 승리로 막을 내렸다.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 신체는 과거에 비해 많이 개선되었다. 이렇게 격렬한 레이스를 마친 후임에도, 온 힘을 다해 질주한 뒤의 탈진 상태에서 회복하는 데 그리 오랜 시간이 걸리지 않았다.',
    ]);
    era.printButton('「강해졌구나, 카페.」', 1);
    await era.input();
    await era.printAndWait([coffee.get_colored_name(), '는 확실히 많이 강해졌다.']);
    await era.printAndWait([
      '2년 반 전, ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '의 우연한 만남을 기억한다. 당시의 그녀는 밤의 훈련장에서 홀로 형체 없는 무언가를 쫓던 고독한 ',
      coffee.get_uma_sex_title(),
      '였다.',
    ]);
    await era.printAndWait('지금 되돌아보니, 참으로 먼 길을 걸어왔다.');
    await era.printAndWait([
      '비록 해외 원정은 가지 못했지만, 그래도 ',
      coffee.get_colored_name(),
      '의 꿈이 이어지기를 바랐다.',
    ]);
    await era.printAndWait('해외 원정……');
    await coffee.say_and_wait([callname, ', 그럼 우리의 다음 목표는……']);
    era.printButton('「재팬 컵은 어때?」', 1);
    await era.input();
    await coffee.say_and_wait([
      race_infos[race_enum.japa_cup].get_colored_name(),
      '…… ',
      race_infos[race_enum.prix_lat].get_colored_name(),
      '과 같은 2400m 중거리 레이스군요……',
    ]);
    await coffee.say_and_wait([
      '고마워요, ',
      callname,
      '. 그곳이…… 우리에게는 프랑스가 되는 거군요……',
    ]);
    await era.printAndWait([
      '이룰 수 없는 꿈의 연장선으로서, 11월의 도쿄는 ',
      me.get_couple_title(),
      '에게 있어 파리가 되었다.',
    ]);
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await era.printAndWait('그럼 진짜 파리는?');
      await tachyon.say_and_wait(['내가 졌군, ', t_call_c, '.']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 지하 통로로 들어오며, 담담하게 자신의 패배를 인정했다.',
      ]);
      await tachyon.say_and_wait('자네가 지닌 가능성은, 내 상상보다 훨씬 거대하군.');
      await tachyon.say_and_wait('지금까지…… 플랜 B도 나름대로 성과가 있었다고 봐야겠지.');
      await coffee.say_and_wait([
        sys_get_colored_callname(25, 32),
        '…… 고마워요……',
      ]);
      await tachyon.say_and_wait([
        '그럼, 이제 작별을 고할 시간이군, ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '…… 어쩌면 내가 참가하는 마지막 레이스가 될지도 모르겠어. 자네와의 승부는 언제나 즐거웠네, ',
        t_call_c,
        '.',
      ]);
      await coffee.say_and_wait('……저도 당신의 레이스를 보러 갈게요.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 그저 손을 흔들 뿐, ',
        coffee.get_colored_name(),
        '의 말에 정면으로 답하지 않았다.',
      ]);
      await era.printAndWait([
        '그리하여, ',
        coffee.get_colored_name(),
        '의 다음 목표 레이스는 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        '으로 결정되었다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        tachyon.get_colored_name(),
        '또한 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '에서 자신의 광채를 내뿜게 될 것이다.',
      ]);
    } else {
      await era.printAndWait([
        '그리하여, 다음 목표 레이스는 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        '으로 결정되었다.',
      ]);
    }
    extra_flag.attr_change = new Array(5).fill(6);
    extra_flag.pt_change = 45;
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.japa_cup] = async (coffee, me, callname, extra_flag) => {
    if (era.get('cflag:25:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('승부', coffee);
    await era.printAndWait([
      '전 세계에서 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '을 지켜본 관객들은 모두 오늘을 기억하게 될 것이다.',
    ]);
    await era.printAndWait([
      '최종 직선에서, 그 칠흑 같은 그림자가 대열 후미에서 앞으로 쏘아져 나와, 마치 뒤를 물어뜯는 듯한 거침없는 힘과 폭발력으로 앞선 모든 「사냥감」을 사냥했다. 그녀에게 추월당한 ',
      coffee.get_uma_sex_title(),
      '들은 순간적인 공포에 질려 짧게 속력을 잃기까지 했다.',
    ]);
    await era.printAndWait([
      '그녀가 결승선을 통과할 때 고속 카메라에 포착된 흐릿한 잔상은, 훗날 그녀에게 「칠흑의 환영」이라는 칭호를 안겨주게 되었다.',
    ]);
    await era.printAndWait('하지만 그것은 나중의 이야기다.');
    await era.printAndWait([
      '지금, 대기실 안에서는 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '의 우승자인 ',
      coffee.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '에게 안긴 채 마사지를 받고 있었다.',
    ]);
    era.printButton('「오늘은 너무 무리했어, 다치기라도 했으면 어쩔 뻔했어?」', 1);
    await era.input();
    await era.printAndWait([
      '비록 아직 친구를 따라잡지는 못했지만, ',
      coffee.get_colored_name(),
      '는 세계 앞에서 자부심을 느낄 만큼 멋진 레이스를 펼쳤다. 그 대가로 경기장 밖에서 ',
      me.get_colored_name(),
      '을(를) 만나자마자 버티지 못하고 ',
      me.get_colored_name(),
      '의 품으로 쓰러져 버렸다.',
    ]);
    await era.printAndWait([
      '천만다행으로 부상은 없었으며, 단지 체력을 소진한 뒤의 근육 이완 상태일 뿐이었다. ',
      me.get_colored_name(),
      '은(는) 대기실에서 그대로 그녀를 위해 근육 마사지를 시작했다.',
    ]);
    await coffee.say_and_wait(['아, 아파요! …… ', callname, ', 살살 해주세요……']);
    await coffee.say_and_wait('그저…… 관객석의 환호성이 느껴져서…… 발걸음을 멈출 수가 없었어요……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 딱히 그녀를 정말로 나무라려던 것은 아니었기에, 마사지와 함께 가벼운 잔소리를 한 뒤 ',
      coffee.get_colored_name(),
      '의 오늘 행동을 용서해 주었다.',
    ]);
    await coffee.say_and_wait([
      callname,
      '…… 다음 목표는, ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '이겠네요.',
    ]);
    await era.printAndWait([
      '마사지가 끝날 무렵, ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '가 트레센으로 돌아갈 준비를 하던 중, 그녀가 한 달 뒤의 연말 제전인 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '을 언급했다.',
    ]);
    await era.printAndWait([
      '지금 생각해보면, ',
      coffee.get_colored_name(),
      '와 함께한 지도 어느덧 3년이 다 되어간다. 그녀와 때로는 즐거웠고 때로는 다투기도 했으며, 가끔은 기이한 사건으로 위험에 빠지기도 했지만, ',
      me.get_colored_name(),
      '은(는) 단 한 번도 그녀와 계약을 맺은 것을 후회한 적이 없었다.',
    ]);
    await era.printAndWait([
      '이제 이 마지막 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '으로, ',
      me.get_couple_title(),
      '이 지난 3년간 이뤄온 성과를 확인해 보자.',
    ]);
    extra_flag.attr_change = new Array(5).fill(10);
    extra_flag.pt_change = 45;
    extra_flag.relation_change = 20;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.arim_kin] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    if (era.get('cflag:25:육성턴수합산') < 96) {
      await print_event_name('기이', coffee);

      await say_by_passer_by_and_wait('해설', [
        '올해 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '을 제패한 것은——',
        coffee.get_colored_name(),
        '입니다!',
      ]);
      await say_by_passer_by_and_wait('관중들', '오오오오오오오!!!!!」');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 쟁쟁한 시니어급 상대들을 마주하고도 여전히 높은 수준의 퍼포먼스를 선보이며, ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '을 거머쥐었다. 하지만……',
      ]);
      await coffee.say_and_wait('어째서…… 거리가, 벌어졌어……');
      await coffee.say_and_wait([
        race_infos[race_enum.kiku_sho].get_colored_name(),
        ' 때보다…… 거리가 더 멀어…… 어째서……',
      ]);
      await era.printAndWait([
        '지하 통로 안, 분명히 승리했음에도 ',
        coffee.get_colored_name(),
        '는 상실감에 빠진 채 벽에 기대어 있었다—— 아니, 승리라고 할 수 없었다. 그녀는 다시 한번 그녀의 친구에게 패배했기 때문이다.',
      ]);
      era.printButton('「카페……」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그녀를 위로하고 싶었지만, 대체 어디서부터 손을 대야 할지 알 수 없었다.',
      ]);
      await coffee.say_and_wait([
        callname,
        '…… 친구가…… 더 빨라졌어요. 이전보다도 훨씬 더……',
      ]);
      await coffee.say_and_wait(
        '마치…… 제가 빨라진 것에 응답이라도 하듯, 진심을 내기 시작한 것처럼……',
      );
      await coffee.say_and_wait('어째서…… 어째서……');
      await coffee.say_and_wait('어째서, 어째서, 어째……!!');
      await era.printAndWait('——파직!');
      await coffee.say_and_wait('윽……!');
      await era.printAndWait([
        '설마 또!? ',
        me.get_colored_name(),
        '은(는) 즉시 달려가 ',
        coffee.get_colored_name(),
        '를 부축했다. 고통과 눈물이 동시에 그녀의 얼굴을 덮쳤고, 그 모습은 마치 깨지기 쉬운 유리처럼 가련했다.',
      ]);
      await era.printAndWait([
        '그녀의 신발과 양말을 벗기자, 익숙한 발톱 갈라짐 증상이 다시 나타나 있었다. 그녀의 체중이 더 이상 급격하게 변하지는 않았음에도 불구하고, 결국……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 짓누르는 그림자는 아직 사라지지 않았다. 이것은 저주일까…… 아니면 어떤 존재의……',
      ]);
      await coffee.say_and_wait('저는 반드시, 목숨을 걸고서라도 친구를 따라잡을 거예요!');
      await coffee.say_and_wait(
        '내년에는 꼭…… 저는 이제 더 이상 과거의 나약한 제가 아니에요……',
      );
      await coffee.say_and_wait(['…… ', callname, ', 다음 목표는……?']);
      await era.printAndWait(['일단 그녀를 진정시켜야—— 윽!']);
      await era.printAndWait([
        '말을 끝맺지 못했다. ',
        me.get_colored_name(),
        '은(는) 갑자기 명치를 주먹으로 얻어맞은 듯한 충격을 느꼈다. 그것은 마치…… 매우 강렬한 의지 같았다……',
      ]);
      era.printButton('「………… 봄 텐노상이야.」', 1);
      await era.input();
      await coffee.say_and_wait([
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '…… 인가요. 3200m의 장거리 레이스……',
      ]);
      await coffee.say_and_wait('거리가 이만큼 길다면 친구를 따라잡을 수 있다, 그런 뜻인가요?');
      era.printButton('「………… 응.」', 1);
      await era.input();
      await era.printAndWait([
        '방침상으로는 문제가 없었다. 다음 목표를 정한다면 당연히 봄의 대형 G1을 겨냥해야 한다. 그리고 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '은 봄의 핵심 레이스이자 ',
        coffee.get_colored_name(),
        '의 장거리 적성에도 부합했다.',
      ]);
      await era.printAndWait([
        '……하지만 방금 그 말은, 정말로 ',
        me.get_colored_name(),
        ' 자신의 의지로 내뱉은 말이었을까?',
      ]);
      extra_flag.attr_change = new Array(5).fill(10);
      extra_flag.pt_change = 45;
    } else {
      await print_event_name('마천루', coffee);
      await say_by_passer_by_and_wait('해설', [
        coffee.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '입니다——! 결승선을 통과한 후에도 그녀는 여전히 지평선 너머를 응시하고 있습니다!!',
      ]);
      await say_by_passer_by_and_wait('해설', [
        '과연 그녀의 최종 목적지는 어디일까요!? 또 어떤 경지에까지 성장하게 될까요!?',
      ]);
      await era.printAndWait([
        '레이스가 끝난 후 ',
        coffee.get_colored_name(),
        '는 곧바로 떠나지 않고, 그 자리에 서서 코스 너머를 바라보고 있었다.',
      ]);
      await era.printAndWait([
        '혹시 무슨 문제라도 생긴 건 아닐까 걱정되어, ',
        me.get_colored_name(),
        '은(는) 그녀에게 다가갔다.',
      ]);
      era.printButton('「저기…… 카페?」', 1);
      await era.input();
      await coffee.say_and_wait(['………… ', callname, ', 이제 알겠어요……']);
      await coffee.say_and_wait('당신 때문이었군요…… 그래서 친구가, 떠난 거예요……');
      await era.printAndWait('어……?');
      await era.printAndWait([
        me.get_colored_name(),
        '때문에 친구가 가버렸다는 뜻인가?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 사과하려던 찰나——',
      ]);
      await coffee.say_and_wait('그런…… 뜻이 아니에요.');
      await coffee.say_and_wait(
        '그러니까…… 당신 때문에…… 친구의 속도가 제가 따라잡을 수 없을 만큼 빨라졌다는 뜻이에요.',
      );
      await coffee.say_and_wait('그래요…… 친구는 끊임없이 진화하고 있어요……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 얼굴을 보며 엄숙한 표정으로 말했다.',
      ]);
      await coffee.say_and_wait('친구는 나의 이상이 높아짐에 따라, 그 속도도 더욱 빨라져요……');
      await coffee.say_and_wait(
        '제가 계속해서 강해지면…… 친구는 더 먼 곳에서 손을 흔들며 나에게 말하겠죠. 『너는 아직 더 빨라질 수 있잖아』 라고.',
      );
      await coffee.say_and_wait(
        '만약 저 혼자였다면, 진작에 친구를 따라잡았을지도 몰라요. 따라잡은 뒤에는…… 꿈도 거기서 멈췄겠죠. 하지만……',
      );
      await coffee.say_and_wait(
        '저는 지금도 여전히…… 위를 올려다보고 있어요. 끝이 보이지 않는 그 마천루를……',
      );
      await coffee.say_and_wait('당신이…… 친구를 격려했어요. 그리고 당신이…… 저를 격려했어요.');
      await coffee.say_and_wait('혼자서는 절대 닿을 수 없었을…… 그 높이까지 저를 데려왔어요……');
      await era.printAndWait([
        '친구란 과연 무엇인가, ',
        me.get_couple_title(),
        '은(는) 드디어 해답의 실마리를 본 것 같았다.',
      ]);
      await era.printAndWait('친구는 선도, 악도 아니었다. 왜냐하면——');
      await coffee.say_and_wait('분명 더 빨라질 수 있겠죠…… 친구도……');
      await coffee.say_and_wait('그리고 우리도 계속해서 친구를 쫓아 나아갈 수 있겠죠……');
      await coffee.say_and_wait(
        '친구는 이제 저만의 친구가 아니에요…… 이미 우리 두 사람의 의지가 담긴 존재가 되었어요…… 레이스 전의 약속처럼, 당신과 함께 쫓고 싶어요. 세상 끝까지라도.',
      );
      era.printButton('「응…… 세상 끝까지라도.」', 1);
      await era.input();
      await era.printAndWait([
        '앞으로도 ',
        me.get_colored_name(),
        '은(는) 평소처럼 ',
        coffee.get_colored_name(),
        '와 함께 친구의 뒷모습을 쫓으며 끊임없이 전진할 것이다.',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        '은 나란히 하늘을 올려다보며, 두 사람의 이 목표가 얼마나 소중하고 끝없이 펼쳐져 있는지를 깊이 음미했다……',
      ]);
      extra_flag.attr_change = new Array(5).fill(10);
      extra_flag.pt_change = 45;
      extra_flag.relation_change = 30;
      extra_flag.love_change = 5;
    }
  };
};