const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{flags:wait_flag})>} handlers */
module.exports = (handlers) => {
  handlers[47 + 46] = async (rice, me, callname, self_name, flags) => {
    const bourbon = get_chara_talk(26);
    await print_event_name('라이벌의 불행', rice);
    await era.printAndWait([
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '이 끝난 후, ',
      rice.get_colored_name(),
      '의 주변에 어떤 변화가 나타났다.',
    ]);
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'A「아, 라이스 샤워다!」',
    ]);
    await rice.say_and_wait(['어…… 어라!? ', self_name, '를 부르신 건가요?']);
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'B「그렇게 긴장하지 않아도 돼! 후후, 지난번 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '은 정말 대단했어!」',
    ]);
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'A「응응! 정말 감동받았어!」',
    ]);
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'B「정말이라니까! 그때의 라이스 샤워 양, 윽…… 너무 진지해서 정말 멋졌어!」',
    ]);
    await rice.say_and_wait(['에에에? ', self_name, '가 멋지다니……']);
    await era.printAndWait('그러니까 앞으로도 힘내! 우리도 라이스 샤워를 응원할게.');
    await rice.say_and_wait('에!? 네…… 네!!');
    await me.say_and_wait('응원을 받으니 정말 기쁘네.');
    await rice.say_and_wait(['아, ', callname, '?']);
    await rice.say_and_wait([
      '아, 아니야…… 그건 ',
      sys_get_colored_callname(30, 26),
      '가 정말 대단하니까, 그래서 ',
      self_name,
      '에게 말을 걸어주신 것 뿐이야.',
    ]);
    await rice.say_and_wait([
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '의 박수 소리도, ',
      sys_get_colored_callname(30, 26),
      '가 있었기 때문에——',
    ]);
    await me.say_and_wait(['너는 부르봉의 라이벌이니까 당연하지.']);
    await rice.say_and_wait(['으으…… 오, ', callname, '까지 너무 비행기 태우지 마……']);
    await rice.say_and_wait('그치만, 멋지다고...? 에헤헤……');
    era.drawLine();
    await era.printAndWait('——하지만 다음날, 상황이 급변했다.');
    era.printButton(`「라이스?」`, 1);
    await era.input();
    await rice.say_and_wait('……가까이 오지 마세요!');
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'A「……라이스 샤워 양, 역시…… 신경 쓰이겠지.」',
    ]);
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'B「아~ 당연하겠지. 나라도 기분 안 좋을 거야.」',
    ]);
    await era.printAndWait([
      rice.get_uma_sex_title(),
      'B「그 무결점의 부르봉 양이, 자기랑 레이스한 뒤에…… 뭐랄까……」',
    ]);
    await era.printAndWait('교사 옆 그늘 아래.');
    await rice.say_and_wait(['……윽…… 왜, ', self_name, '는 항상 이런 식일까?']);
    await rice.say_and_wait('항상 주변 사람을 불행하게 만들고, 남에게 폐만 끼치고!');
    await me.say_and_wait(['……라이스.']);
    await rice.say_and_wait([callname, '……!']);
    await rice.say_and_wait([
      '……안 돼! ',
      self_name,
      '에게 가까이 오면, 불행해질 거야.',
    ]);
    await rice.say_and_wait([
      sys_get_colored_callname(30, 26),
      '는, 지금까지 아무리 힘든 훈련도…… 부상 없이 견뎌왔잖아?',
    ]);
    await rice.say_and_wait([
      '그런데 다 ',
      self_name,
      ' 때문에…… ',
      self_name,
      '가 ',
      sys_get_colored_callname(30, 26),
      '의 라이벌이 되는 바람에……',
    ]);
    await rice.say_and_wait('3년 중에 가장 중요한 시기를 망쳐버렸어……');
    await me.say_and_wait('그거 본인한테 직접 들은 거야?');
    await rice.say_and_wait(['……듣지 않아도, ', self_name, '는 알고 있어.']);
    await rice.say_and_wait(['왜냐면…… ', self_name, '는……']);
    await me.say_and_wait('직접 들은 건 아니라는 거네.');
    await rice.say_and_wait(['에!? ', callname, '?']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      rice.get_colored_name(),
      '를 데리고 보건실로 가서 ',
      bourbon.get_colored_name(),
      '을 찾아냈다.',
    ]);
    await bourbon.say_and_wait('……');
    await rice.say_and_wait('……');
    era.printButton('「갑자기 찾아와서 미안해.」', 1);
    await era.input();
    await bourbon.say_and_wait('아니오, 오늘 하루 동안 병문안 오는 분들에겐 이미 익숙해졌습니다.');
    await bourbon.say_and_wait('그래서, 무슨 일로 오셨습니까?');
    await rice.say_and_wait('!…… 죄, 죄송해요. 죄송해요…… 죄송해요……!');
    await rice.say_and_wait([
      '다 ',
      self_name,
      ' 때문이에요…… 당신을 다치게 하고, 이렇게 중요한 시기를 헛되게 만들어서.',
    ]);
    await bourbon.say_and_wait('실례합니다.');
    await bourbon.say_and_wait([
      '왜 사과하십니까? 저의 부상과 ',
      sys_get_colored_callname(26, 30),
      ' 사이에 어떤 인과관계가 있는지 추론할 수 없습니다.',
    ]);
    await rice.say_and_wait([
      '하지만…… ',
      self_name,
      '가 당신의 라이벌이 되기 전까지는 다친 적이 없었잖아요!',
    ]);
    await bourbon.say_and_wait(
      '이해 불능. 부상 발생률은 일정하며, 따라서 그 이론은 물리적 근거가 없다고 판단됩니다.',
    );
    await bourbon.say_and_wait(
      '오히려 당신이 불행을 부른다고 주장한다면, 그것은 제가 검증해야 할 일입니다.',
    );
    await rice.say_and_wait([
      '부, ',
      sys_get_colored_callname(30, 26),
      '가요?',
    ]);
    await bourbon.say_and_wait('네, 저는 당신을 경쟁 상대로 인정했습니다.');
    await bourbon.say_and_wait([
      '그것은 제가 기대하고 있기 때문입니다. ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '에서 성장의 가능성을 느꼈습니다.',
    ]);
    await bourbon.say_and_wait(
      '당신이라는 경쟁 상대가 있다면, 더 큰 성장을 예견할 수 있습니다.',
    );
    await bourbon.say_and_wait(
      '또한 당신과 함께라면, 사상 최고의 레이스——『기적』을 달성할 가능성이 존재합니다.',
    );
    await bourbon.say_and_wait([
      '저의 불행은 ',
      sys_get_colored_callname(26, 30),
      '와 관련이 없습니다.',
    ]);
    await rice.say_and_wait('……');
    await bourbon.say_and_wait([
      sys_get_colored_callname(26, 30),
      '는 저를 불행하게 만드는 존재입니까? 아니면 기적을 부르는 존재입니까?',
    ]);
    await rice.say_and_wait('……그건……');
    await era.printAndWait([
      '———기나긴 시간 동안, ',
      rice.get_colored_name(),
      '는 묵묵히 ',
      bourbon.get_colored_name(),
      '의 시선을 받아냈다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 5, 0], 0);
  };

  handlers.teach = async (rice, me, callname, self_name, flags) => {
    const zob_zoy = get_chara_talk(47);
    await print_event_name('명지도', rice);
    await rice.say_and_wait('흠…… 흠, 흠……♪');
    await zob_zoy.say_and_wait([self_name, ', 기분이 좋아 보이시네요.']);
    await zob_zoy.say_and_wait('무슨 좋은 일이라도 있나요?');
    await rice.say_and_wait(['음…… 있잖아, ', self_name, '가 수업 시간에 코스를 달렸는데.']);
    await rice.say_and_wait('이전보다 더 좋은 성적이 나왔어!');
    await rice.say_and_wait('어제 새로운 주법을 배웠거든, 그래서 이것도——');
    await zob_zoy.say_and_wait(['다…… ', callname, ' 덕분인가요?']);
    await rice.say_and_wait('어…… 어어, 어떻게 알았어!?');
    await zob_zoy.say_and_wait('후후, 미안해요.');
    await zob_zoy.say_and_wait('밤늦게 책을 읽다 보면 가끔……');
    await zob_zoy.say_and_wait([
      '아주 행복한 얼굴로 잠꼬대하는 걸 듣게 되거든요. 『고마워, ',
      callname,
      '……』라고.',
    ]);
    await rice.say_and_wait('으, 으아, 와아아, 너무 부끄러워!');
    await zob_zoy.say_and_wait('죄송합니다, 놀리려던 건 아니었어요.');
    await zob_zoy.say_and_wait(
      '그저 그렇게 감사할 정도라면, 분명 멋진 트레이너일 거라고 생각했을 뿐이예요.',
    );
    await rice.say_and_wait(['으, 응! ', callname, '는 최고의 트레이너야!']);
    await era.printAndWait([
      '그 후로 한참 동안, ',
      rice.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '이(가) 얼마나 멋진지에 대해 끊임없이 이야기했다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 0, 10], 10);
  };
};