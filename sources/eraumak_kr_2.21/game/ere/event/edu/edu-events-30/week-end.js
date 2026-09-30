const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[15] = async (rice, me, callname, self_name, flags) => {
    await print_event_name('호수에서 피어나는 꽃', rice);
    await rice.say_and_wait('와아……! 관객분들이…… 정말 많아……! 게다가 다들 눈빛이 반짝거려.');
    await era.printAndWait([
      '이날, ',
      me.get_colored_name(),
      '은(는) ',
      rice.get_colored_name(),
      '와 함께 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '을 관전하며 배우기 위해 경기장을 찾았다. 그 이유는……',
    ]);
    era.drawLine({ content: '1주일 전'});
    await era.printAndWait(
      '턱을 괴고서 거의 위험하게 느껴질 정도의 눈빛으로, 이 모든 광경을 감상하고 있던 것은——.',
    );
    const bakushin = get_chara_talk(41);
    await bakushin.say_as_unknown_and_wait('허아…… 하아……');
    await bakushin.say_as_unknown_and_wait([
      sys_get_colored_callname(41, 30),
      '…… 잠깐 기다려 주세요……',
    ]);
    await rice.say_and_wait('엣? 무, 무슨 일이야?');
    await bakushin.say_and_wait(
      '아니요, 사실은 아까부터 반장의 사명을 다하기 위해 멋대로 돌진하고 있었습니다.',
    );
    await bakushin.say_and_wait([
      sys_get_colored_callname(41, 30),
      '의 지구력은 정말 대단하군요! 그래서, 제안이 하나 있습니다!',
    ]);

    await bakushin.say_and_wait([
      '함께, ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '을 보러 가지 않겠습니까?',
    ]);
    await bakushin.say_and_wait([
      '장거리를 제패할 수 있는 속도를 가진 ',
      rice.get_uma_sex_title(),
      '들이 모두 그곳에 모입니다!',
    ]);
    await rice.say_and_wait('함께? 텐노…… 상?');
    await bakushin.say_and_wait('네, 함께 가요!');
    await bakushin.say_and_wait(
      '친구의 숨겨진 힘을 끌어내는 것 또한 반장의 일인 법!',
    );
    await era.printAndWait(['과연 ', bakushin.get_colored_name(), '가 말한 대로였다.']);
    await era.printAndWait([
      rice.get_colored_name(),
      '의 장거리는…… 그야말로 강철 같은 소질을 지니고 있었다.',
    ]);
    await era.printAndWait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 또한 머지않아 ',
      rice.sex,
      '의 목표가 될 무대의 일부가 되리라.',
    ]);
    era.printButton('「교토로 관전하러 가자.」', 1);
    await era.input();
    await bakushin.say_and_wait('신난다! 혼자 가면 너무 외로울 뻔했어요!');
    await bakushin.say_and_wait('참고로, 그곳의 간식은 딱 300엔에 판답니다!');
    await rice.say_and_wait('……왠지, 소풍 가는 기분이라 즐거워.');
    await rice.say_and_wait('에헤헤, 기대돼!');
    await era.printAndWait('다시 현재.');
    await bakushin.say_and_wait('아~! 정말 치열한 추격전이군요!');
    await bakushin.say_and_wait('저는, 좀 더 앞쪽으로 가서 보고 오겠습니다!!');
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 5], 0);
  };

  handlers[47 + 32] = async (
    rice,
    me,
    callname,
    self_name,
    flags,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:30:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 종료', rice);
    await era.printAndWait([
      '합숙 마지막 날, ',
      rice.get_colored_name(),
      '가 원한 덕분에 마지막까지 훈련이 이어졌다.',
    ]);
    await rice.say_and_wait('하아…… 하아…… 미안해, 늦어버렸어.');
    await get_chara_talk(52).say_and_wait([
      '빨리빨리, ',
      sys_get_colored_callname(52, 30),
      '! 버스랑 친구들이 다 기다리고 있어!',
    ]);
    await rice.say_and_wait('으…… 응! 금방 갈게!');
    await rice.say_and_wait('다행이야, 너무 늦지 않았어.');
    await me.say_and_wait('모두가 기다려준 덕분이네.');
    await rice.say_and_wait('응! 모두에게 고맙다고 인사해야겠어—');
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 5));
    flags.wait_flag = get_attr_and_print_in_event(30, change_list, 0);
  };

  handlers[95 + 14] = async (rice, me, callname, self_name, flags) => {
    const zob_zoy = get_chara_talk(47),
      bourbon = get_chara_talk(26);
    await print_event_name('혼자서는 피어날 수 없기에', rice);
    await era.printAndWait('트레이닝실 안');
    await era.printAndWait('……똑똑');
    await era.printAndWait('조심스러운 노크 소리가 들려왔다.');
    await zob_zoy.say_as_unknown_and_wait([
      '실례합니다…… 저기, ',
      zob_zoy.get_colored_name(),
      '에요.',
    ]);
    await zob_zoy.say_and_wait([
      sys_get_colored_callname(47, 30),
      '가 어디 갔는지 혹시 아시나요?',
    ]);
    await zob_zoy.say_and_wait([
      '사실 ',
      sys_get_colored_callname(47, 30),
      '가 아직 기숙사에 돌아오지 않았거든요. 곧 점호 시간인데……',
    ]);
    await me.say_and_wait('——설마', true);
    era.drawLine({ content: '트레이닝 코스'});
    await rice.say_and_wait('하아…… 하아…… 하아……!');
    await me.say_and_wait(['라이스!']);
    await rice.say_and_wait([
      '엣. ',
      callname,
      ', 그리고…… ',
      sys_get_colored_callname(30, 47),
      '?',
    ]);
    await rice.say_and_wait('……');
    await me.say_and_wait('너무 무리했어.');
    await rice.say_and_wait('미안해, 하지만……');
    await rice.say_and_wait('……');
    await rice.say_and_wait('응, 미안해. 제대로 쉴게.');
    await zob_zoy.say_and_wait('……');
    await zob_zoy.say_and_wait([
      '저기, ',
      sys_get_colored_callname(47, 30),
      '!',
    ]);
    await zob_zoy.say_and_wait([
      sys_get_colored_callname(47, 30),
      '에게 ',
      callname,
      '는 어떤 의미인가요?',
    ]);
    await zob_zoy.say_and_wait(
      '분명 이렇게 말하셨죠. 『그게…… 언제나 너무 상냥해서, 마치 그림책 속에서 튀어나온 운명의 주인공 같아.』',
    );
    await rice.say_and_wait([
      '히익!? ',
      sys_get_colored_callname(30, 47),
      '? 조…… 조용히 해줘……',
    ]);
    await zob_zoy.say_and_wait(['조용히 못 해요. 저도 ',
		sys_get_colored_callname(47, 30),
		'를 응원하고 있단 말이예요.']);
    await rice.say_and_wait([sys_get_colored_callname(30, 47), '……']);
    await zob_zoy.say_and_wait(
      '고민되는 게 있다면…… 다 같이 이야기해 보는 게 좋다고 생각해요.',
    );
    await rice.say_and_wait('……');
    await me.say_and_wait(['너는 어떻게 생각해, 라이스?']);
    await rice.say_and_wait('……하지만, 무서운걸……');
    await rice.say_and_wait('의지할 수 있는 누군가가 있다는 건 나도 잘 알아……');
    await rice.say_and_wait([
      '어렵게 ',
      self_name,
      '를 믿고 기대해 주는데, ',
      self_name,
      '가 해내지 못할까 봐.',
    ]);
    await rice.say_and_wait([
      self_name,
      '는, 이제 더 이상 ',
      callname,
      '를 실망시키고 싶지 않은데……',
    ]);
    await era.printAndWait([
      '말을 마친 ',
      rice.get_teen_sex_title(),
      '는 작은 목소리로 흐느끼기 시작했다.',
    ]);
    await me.say_and_wait('그런 생각은 하지 마.');
    await zob_zoy.say_and_wait([
      '맞아요! 저도 그래요! 절대로 ',
      sys_get_colored_callname(47, 30),
      '에게 실망하지 않아요!',
    ]);
    await zob_zoy.say_and_wait([
      sys_get_colored_callname(47, 30),
      '를 지지하는 다른 분들도 분명 똑같을 거예요.',
    ]);
    await me.say_and_wait('그러니까 더는 혼자서 무리하지 마.');
    await rice.say_and_wait([callname, '…… 으윽…… 으앙……']);
    await rice.say_and_wait('으아아앙~~!');
    await era.printAndWait([
      rice.get_colored_name(),
      '의 눈에서 커다란 눈물이 둑이 터진 것처럼 쏟아져 내렸다.',
    ]);
    era.drawLine({ content: '다음 날'});
    await zob_zoy.say_and_wait([
      '아, ',
      sys_get_colored_callname(47, 30),
      '! 힘내세요.',
    ]);
    await rice.say_and_wait('……으, 으으…… 정말 괜찮을까?');
    await zob_zoy.say_and_wait('괘, 괜찮아요!');
    await zob_zoy.say_and_wait([
      '보세요, ',
      sys_get_colored_callname(47, 0),
      '도 ',
      sys_get_colored_callname(47, 30),
      '를 응원하러 왔잖아요.',
    ]);
    await rice.say_and_wait('응.');
    await bourbon.say_and_wait('그러면, 이동을 시작해도 되겠습니까?');
    await rice.say_and_wait([
      '아! 미안해! ',
      sys_get_colored_callname(30, 26),
      '…… 그게, 저기……!',
    ]);
    await rice.say_and_wait(['부디, 꼭 ', self_name, '를 도와주세요!']);
    await bourbon.say_and_wait('……? 의사소통에 오해가 발생한 것입니까?');
    await rice.say_and_wait([
      '오해 아니에요! 왜냐하면, ',
      sys_get_colored_callname(30, 26),
      '라면 분명 큰 힘이 되어주실 테니까요!',
    ]);
    await rice.say_and_wait('이런 말을 들으면 실망하실지도 모르겠지만……');
    await rice.say_and_wait([
      self_name,
      '는 지금, ',
      sys_get_colored_callname(30, 26),
      '의 도움 없이는 안 돼요!',
    ]);
    await rice.say_and_wait([
      '지금의 ',
      self_name,
      '는 아직 너무 약해서, 이대로라면……',
    ]);
    await rice.say_and_wait('절대로 이길 수 없어요!');
    await rice.say_and_wait([
      '그러니까 ',
      sys_get_colored_callname(30, 26),
      '가 라이스에게 달리는 법을 가르쳐 줬으면 좋겠어요!']);
    await rice.say_and_wait(['라이스에게 없는 것들을, 전부 ', self_name, '에게 가르쳐 주세요!']);
    await bourbon.say_and_wait('……');
    await me.say_and_wait([
      sys_get_callname(0, 30),
      '가 기적을 일으킬 거라고 믿어보자.',
    ]);
    await bourbon.say_and_wait('알겠습니다.');
    await bourbon.say_and_wait('이것이 역사상 최고의 레이스를 만들기 위해 필요한 과정이라면.');
    await bourbon.say_and_wait('신청을 수락합니다. 예정된 스케줄을 변경하겠습니다.');
    await bourbon.say_and_wait([
      '오후부터 제1단계로, ',
      sys_get_colored_callname(26, 30),
      '의 언덕 훈련 10세트를 시작합니다.',
    ]);
    await bourbon.say_and_wait('목적은 근력과 속도의 향상입니다.');
    await bourbon.say_and_wait('부하가 더 필요할 경우, 특제 모래주머니를 빌려드릴 수 있습니다.');
    await bourbon.say_and_wait('아, 누군가는 제 훈련을 『지옥』이라 부르기도 합니다만——');
    await bourbon.say_and_wait([
      '준비되셨습니까? ',
      sys_get_colored_callname(26, 30),
      '.',
    ]);
    await rice.say_and_wait('……응!');
    await era.printAndWait([
      '그렇게 ',
      rice.sex,
      '들은 다가올 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '을 향해 함께 달리기 시작했다——!',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 10], 0);
  };

  handlers[95 + 32] = async (
    rice,
    me,
    callname,
    self_name,
    flags,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:30:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 종료', rice);
    await era.printAndWait('여전히 엄격한 여름 합숙이었다.');
    await era.printAndWait([
      '여름 합숙 마지막 날, ',
      me.get_colored_name(),
      '은(는) 벤치에 앉아 돌아갈 준비를 하는 ',
      rice.get_colored_name(),
      '를 기다리고 있었는데……',
    ]);
    await rice.say_and_wait(['아아아아아~ ', callname, '!']);
    await rice.say_and_wait(['너무 오래 기다리게 해서 정말 미안해……!']);
    await rice.say_and_wait('휴우…… 여기저기 일손을 돕다 보니 이렇게 늦어버렸어.');
    await me.say_and_wait('일손을 도와?');
    await rice.say_and_wait('응, 여기 합숙소 분들에게 신세를 많이 졌잖아?');
    await rice.say_and_wait([
      self_name,
      '는 꽃에 물도 주고…… 벤치에 페인트도 새로 칠하고——',
    ]);
    await me.say_and_wait('벤치에 페인트?');
    await rice.say_and_wait(['응! 바로, ', callname, '가 지금 쉬고 있는 그 벤치야——']);
    await me.say_and_wait('……');
    await rice.say_and_wait([callname, '?']);
    await era.printAndWait('쩌적!!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 허겁지겁 자리에서 일어났지만, 이미 옷에는 끈적한 페인트가 잔뜩 묻어 있었다.',
    ]);
    await rice.say_and_wait([
      '미, 미안해! 전부 다 ',
      self_name,
      '가 안내문을 붙여놓지 않아서……',
    ]);
    await rice.say_and_wait(['와아아아…… 어떡해, ', callname, '. 으앙~~']);
    await me.say_and_wait('다시 새로 칠하면 돼.');
    await rice.say_and_wait('으으…… 정말 미안해.');
    await rice.say_and_wait('관리인분께도 사과드리러 가야겠어.');
    await rice.say_and_wait('그리고, 페인트도 빌려와야겠고.');
    await era.printAndWait([
      rice.get_colored_name(),
      '와 함께 관리인분의 일손을 도왔다.',
    ]);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 5));
    flags.wait_flag = get_attr_and_print_in_event(30, change_list, 0);
  };
};