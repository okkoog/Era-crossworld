const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1 || era.get('cflag:30:육성턴수합산') >= 48) {
      return true;
    }
    await print_event_name('변화를 향한 첫걸음', rice);
    await rice.say_and_wait([self_name, '……다 달렸어! 데뷔전에서 이겼어!']);
    era.printButton(`「${sys_get_callname(0, 30)}, 정말 노력했네.」（호감도+5）`, 1);
    era.printButton(`${rice.name}의 머리를 쓰다듬어 준다.（애정도+1）`, 2);
    if ((await era.input()) === 1) {
      extra_flag.relation_change = 5;
    } else {
      extra_flag.love_change = 1;
    }
    await rice.say_and_wait(['와아…… 고마워! ', callname, '……']);
    await rice.say_and_wait([
      '에헤헤. 앞으로도 잘 부탁해!',
    ]);
    await era.printAndWait([
      '——그렇게, ',
      me.get_colored_name(),
      '은(는) ',
      self_name,
      '와 함께, 첫걸음을 내디뎠다!',
    ]);
    era.drawLine({ content: '며칠 후'});
    await era.printAndWait([
      '어느 날, ',
      me.get_colored_name(),
      '은(는) 다시 한번 ',
      rice.get_colored_name(),
      '가 뛰었던 경기장을 찾았다.',
    ]);
    await rice.say_and_wait('와아…… 사람이 정말 많네. 마치 G1 레이스 같아.');
    await rice.say_and_wait('……어라? 하지만 오늘은 G2도 G3도 아닐 텐데……?');
    await say_by_passer_by(
      '해설',
      '등장했습니다, 미호노 부르봉! 【Make Debut】 경기장에 모습을 드러냅니다!!',
    );
    await rice.say_and_wait(['……', sys_get_colored_callname(30, 26), '가 보여.']);
    await say_by_passer_by('해설', '격차를 계속 좁히며 단숨에 앞으로 치고 나갑니다!');
    await say_by_passer_by('해설', '속도가 전혀 줄지 않습니다, 그대로 계속해서 스퍼트!');
    await say_by_passer_by('해설', [
      get_chara_talk(26).get_colored_name(),
      '이 이 기세를 유지하며 1착으로! 결승선을——통과합니다!',
    ]);
    await say_by_passer_by('관객A', '아~ 내년 클래식 전선이 정말 기대되는걸.');
    await say_by_passer_by('관객A', '난 무조건 부르봉을 응원할 거야!');
    await say_by_passer_by('관객B', [
      '그래그래! 미래의 삼관 ',
      rice.get_uma_sex_title(),
      '지!',
    ]);
    await say_by_passer_by('관객A', '부르봉의 레이스는 꼭 보러 갈 거야!');
    await rice.say_and_wait([
      '……',
      sys_get_colored_callname(30, 26),
      '가 달리는 걸 보고 다들 웃고 있네.',
    ]);
    await rice.say_and_wait([self_name, '도 그렇게 할 수 있을까?']);
    era.printButton('「할 수 있어!」', 1);
    await era.input();
    await rice.say_and_wait(['엣? ', callname, '!?']);
    await me.say_and_wait(['라이스는 분명 할 수 있을 거야!']);
    await rice.say_and_wait('!');
    await rice.say_and_wait([
      '……에헤헤. ',
      callname,
      '의 목소리는 마치 마법 같아.',
    ]);
    await rice.say_and_wait(
      '절대로 못 할 것 같은 일도, 그렇게 말해주면 왠지 할 수 있을 것만 같은 기분이 들어.',
    );
    await me.say_and_wait([
      '라이스도 클래식 전선에 나가보는 게 어때?',
    ]);
    await rice.say_and_wait('……클래식 전선.');
    await era.printAndWait([
      '——클래식 전선에 참가한다는 것은, 같은 해에 데뷔한 ',
      rice.get_uma_sex_title(),
      '들과 경쟁한다는 것을 의미했다.',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '와 ',
      get_chara_talk(26).get_colored_name(),
      '이 같은 무대 위에——',
    ]);
    await rice.say_and_wait('!');
    era.printButton(`「라이스라면 분명 할 수 있어.」`, 1);
    await era.input();
    await rice.say_and_wait('……!');
    await rice.say_and_wait([
      callname,
      '는 계속 ',
      self_name,
      '를 믿어주고 있었구나……',
    ]);
    await rice.say_and_wait('알겠어. 그렇게 할게.');
    await rice.say_and_wait(
      '조금 무섭기도 하지만, 이제 더 이상 변하지 못하는 나쁜 아이로 남고 싶지 않아.',
    );
    await rice.say_and_wait([
      self_name,
      '…… 열심히 할게. 따라잡을 거야…… ',
      sys_get_colored_callname(30, 26),
      '를!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      rice.get_colored_name(),
      '와 클래식 전선에 도전하기로 약속했다.',
    ]);
    await era.printAndWait([
      '우선은 ',
      race_infos[race_enum.sprg_sta].get_colored_name(),
      '가 기다리고 있다.',
    ]);
    await era.printAndWait('삼관 노선의 전초전으로서, 그 방향을 향해 노력하기로 결심했다.');
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 3),
    );
    extra_flag.pt_change = 30;
  };

  handlers[race_enum.sprg_sta] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    await print_event_name('미래를 향해 멈추지 않는 발걸음', rice);
    await rice.say_and_wait('하아…… 하아……!');
    era.printButton('「수고했어.」', 1);
    await era.input();
    await rice.say_and_wait(['고마워, ', callname, '.']);
    await rice.say_and_wait('하지만 드러난 문제점도 많네.');
    await rice.say_and_wait([self_name, ', 조금 더 노력해야겠어!']);
    if (extra_flag.rank !== 1) {
      era.drawLine({ content: '지하 통로의 또 다른 곳'});
      const bourbon = get_chara_talk(26);
      await say_by_passer_by('기자A', '부르봉 씨! 부르봉 씨!!');
      await bourbon.say_and_wait('……무슨 일이십니까?');
      await say_by_passer_by(
        '기자A',
        '과연 【밤색의 초특급】답군요! 이번 레이스에서도 그 칭호의 일면을 보여주셨습니다!',
      );
      await say_by_passer_by(
        '기자A',
        '모두가 기대하고 있습니다! 부르봉 씨가 삼관을 달성하는 그 영광스러운 순간을요!',
      );
      await bourbon.say_and_wait('응원, 감사합니다. 그럼 실례하겠습니다.');
      await say_by_passer_by('기자A', '아, 잠시만요, 잠깐만 기다려 주세요! 한 마디만 더!');
      await say_by_passer_by('기자A', '질문 하나만 더 허락해 주십시오!');
      await say_by_passer_by(
        '기자A',
        '그러니까…… 이번 레이스에서 부르봉 씨의 강적은 어느 분이라고 생각하시나요?',
      );
      await bourbon.say_and_wait('강적?');
      await bourbon.say_and_wait('판단에 그런 존재는 필요하지 않습니다.');
      await bourbon.say_and_wait(
        '1위를 달성하기 위해 상대는 그곳에 있는 것입니다. 강적이라고 생각할 필요는 없습니다.',
      );
      await rice.say_and_wait('……대단해.');
      await rice.say_and_wait('자신감도 넘치고 실력도 있고, 자신의 길을 나아가고 있어……');
      era.printButton(`「라이스가 힘내야겠네.」`, 1);
      await era.input();
      await era.printAndWait('응!');
    }
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 35;
  };

  handlers[race_enum.toky_yus] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    extra_flag.attr_change = new Array(5);
    if (extra_flag.rank === 1) {
      await print_event_name('따라잡았어', rice);
      await rice.say_and_wait('하아…… 하아……!!');
      era.printButton('「괜찮아!?」', 1);
      await era.input();
      await rice.say_and_wait('괜찮아, 괜찮아.');
      await rice.say_and_wait(['그보다, ', callname, ', 봤어?']);
      await rice.say_and_wait([self_name, '가 드디어 따라잡았어!']);
      await rice.say_and_wait(['에헤헤, 해, 냈어——……']);
      await era.printAndWait([rice.get_colored_name(), '가 쓰러졌다.']);
      await rice.say_and_wait('후우…… 후우……');
      await era.printAndWait(
        '아무래도 온 힘을 다하느라 팽팽하게 당겨졌던 줄이 갑자기 풀려버린 모양이다.',
      );
      await era.printAndWait([
        '……',
        me.get_colored_name(),
        '은(는) 잠시 ',
        rice.get_colored_name(),
        '를 어깨에 기대게 하고 푹 쉴 수 있게 해주었다. 그렇게 발걸음을 옮기려던 찰나……',
      ]);
      const bourbon = get_chara_talk(26);
      await bourbon.say_and_wait(['——', rice.sex, '의 발언은 이해할 수 없습니다.']);
      await bourbon.say_and_wait('이번 레이스 내용대로라면 말입니다.');
      await bourbon.say_and_wait([rice.sex, '는 『부르봉을 이겼다』라고 말해야 정상입니다.']);
      era.printButton('이 아이에게는 승리보다 그게 더 중요했던 거겠지.', 1);
      await era.input();
      await bourbon.say_and_wait('……이해 불능.');
      era.drawLine();
      await rice.say_and_wait([
        '미, 미안해! ',
        self_name,
        '가 또 ',
        callname,
        '한테 폐를 끼쳤네……!',
      ]);
      era.printButton('「지쳐서 그런 거니 어쩔 수 없지.」', 1);
      await era.input();
      await rice.say_and_wait('하지만……');
      era.printButton('「그보다 다음 레이스를 생각하자.」', 1);
      await era.input();
      await rice.say_and_wait('엣? ……다음 레이스?');
      era.printButton('「클래식 전선은 아직 끝나지 않았어.」', 1);
      await era.input();
      await rice.say_and_wait(['……맞아, ', callname, '.']);
      await rice.say_and_wait(
        '이번 레이스를 요행으로 이긴 것뿐인데, 이걸로 만족해 버리면 안 되겠지.',
      );
      await era.printAndWait([
        '삼관 노선의 마지막 레이스, 잔디 3000m 장거리인 ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '이 기다린다.',
      ]);
      await era.printAndWait([
        '스테이어인 ',
        rice.get_colored_name(),
        '에게 있어 그 레이스는 가장 중요한 승부처이다!',
      ]);
      extra_flag.attr_change.fill(3);
    } else {
      await print_event_name('먼 뒷모습', rice);
      await rice.say_and_wait([self_name, ', 역시 너무 무력했어……']);
      await rice.say_and_wait('더, 더 많이 노력해서……');
      await era.printAndWait('（툭……）');
      await era.printAndWait([
        '아무래도 ',
        rice.get_colored_name(),
        '는 온 힘을 다 소진해버려 긴장이 완전히 풀린 듯하다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '를 부축해서 데리고 돌아가 쉬려고 발걸음을 옮겼다.',
      ]);
      await rice.say_and_wait([self_name, ', 정말 바보 같아……']);
      await rice.say_and_wait('다음에는 꼭 지금보다 더 노력할게.');
      extra_flag.attr_change.fill(2);
    }
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.kiku_sho] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    extra_flag.attr_change = new Array(5);
    if (extra_flag.rank === 1) {
      await print_event_name('평온한 선언', rice);
      await rice.say_and_wait([
        callname,
        ' 봐봐. ',
        self_name,
        '가, ',
        self_name,
        '가……!',
      ]);
      await me.say_and_wait(['라이스, 해냈구나.']);
      await rice.say_and_wait('우으…… 응……!');
      await rice.say_and_wait([
        self_name,
        '가, 해냈어……! ',
        self_name,
        '도 할 수 있었어……! ',
      ]);
      const bourbon = get_chara_talk(26);
      await bourbon.say_and_wait([
        '……',
        sys_get_colored_callname(26, 30),
        '.',
      ]);
      await rice.say_and_wait([
        '와아앗! ',
        sys_get_colored_callname(30, 26),
        '!?',
      ]);
      await rice.say_and_wait('아, 아아. 저기, 이번 레이스는……');
      await bourbon.say_and_wait('——네, 『따라잡혔습니다』.');
      await rice.say_and_wait('……으윽.');
      await bourbon.say_and_wait('사실 전 이해할 수 없었습니다.');
      await bourbon.say_and_wait([
        '매번 『따라잡겠다』고 말하던 ',
        sys_get_colored_callname(26, 30),
        '를요.',
      ]);
      await bourbon.say_and_wait('레이스에 존재하는 것은 승리 혹은 패배뿐입니다.');
      await bourbon.say_and_wait('『따라잡는다』는 개념 같은 건 없습니다. 하지만——');
      await bourbon.say_and_wait([
        '지금 전 매우 분합니다. 이번 ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '을 따내지 못한 것이, 이기지 못한 것이 말입니다.',
      ]);
      await bourbon.say_and_wait('……당신에게 따라잡히고 말았군요.');
      await bourbon.say_and_wait([
        sys_get_colored_callname(26, 30),
        ', 들리십니까?',
      ]);
      await rice.say_and_wait('……네.');
      await era.printAndWait('（환호 소리——!!!）');
      await say_by_passer_by_and_wait('관객A', '정말 멋진 레이스였어! 라이스 샤워!');
      await say_by_passer_by_and_wait(
        '관객B',
        '네가 올해의 주인공이야! 내년도 기대할게!!',
      );
      await rice.say_and_wait('……말도 안 돼……');
      await rice.say_and_wait(['지금 ', self_name, '를 위해서 박수를 쳐주고 있는 거야?']);
      await rice.say_and_wait(['하지만 ', self_name, '는 그냥……']);
      await bourbon.say_and_wait('아닙니다. 관객분들은 인정하고 계십니다.');
      await bourbon.say_and_wait([
        sys_get_colored_callname(26, 30),
        '는 올해 클래식 전선의 명실상부한 승리자입니다.',
      ]);
      await bourbon.say_and_wait('저 또한 그분들의 의견에 동의합니다.');
      await bourbon.say_and_wait([
        '다음번에는 절대로 ',
        sys_get_colored_callname(26, 30),
        '에게 지지 않겠습니다.',
      ]);
      await bourbon.say_and_wait('——『라이벌』로서 말입니다.');
      await rice.say_and_wait('……라이, 벌.');
      await bourbon.say_and_wait([
        sys_get_colored_callname(26, 30),
        ', 저의 도전을 받아주시겠습니까?',
      ]);
      await rice.say_and_wait(['……! ', self_name, '도……! ']);
      await rice.say_and_wait([
        self_name,
        '도 지고 싶지 않아! 다음번에도…… 모두를 이길 거야!',
      ]);
      await era.printAndWait([
        '——',
        rice.get_colored_name(),
        '가 내는 목소리는 멀리까지 전달되었다.',
      ]);
      await era.printAndWait('그것은 바로 옆뿐만 아니라 경기장 전체에 울려 퍼졌다.');
      await era.printAndWait('크고 당당한 선언이었다.');
      extra_flag.attr_change.fill(3);
    } else {
      await print_event_name('불타는 마음', rice);
      await rice.say_and_wait('정말 한 끗 차이였어.');
      await rice.say_and_wait('조금만 더 하면 따라잡을 수 있었는데, 아직 부족해!');
      await rice.say_and_wait([self_name, ', 지고 싶지 않아! 다음엔 꼭 이길 거야.']);
      extra_flag.attr_change.fill(2);
    }
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.nikk_sho] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank > 5) {
      return true;
    }
    await print_event_name('꽃잎, 흩날리다', rice);
    await rice.say_and_wait(['에헤헤…… 어때, ', callname, '.']);
    await rice.say_and_wait([self_name, ', 잘 성장하고 있어?']);
    await me.say_and_wait('응, 정말 멋지게 달렸어!');
    await rice.say_and_wait('응! 그럼 다음에도……');
    const zob_zoy = get_chara_talk(47);
    await zob_zoy.say_and_wait('……수, 수고했어요!');
    await rice.say_and_wait('!');
    await zob_zoy.say_and_wait([
      '오, 오늘은…… 저 혼자서 ',
      sys_get_colored_callname(47, 30),
      '를 응원하러 왔어요.',
    ]);
    await rice.say_and_wait('아! 고마워! 저기, 오늘은……');
    await zob_zoy.say_and_wait('정말 멋진 달리기였어요!');
    await zob_zoy.say_and_wait(
      '하나의 목표를 향해 끊임없이 나아가는…… 그 모습은 마치 민중을 이끄는 주인공 같았어요!',
    );
    await zob_zoy.say_and_wait('언젠가 후세에 책으로 쓰여 전해지겠죠……!');
    await rice.say_and_wait('으와아아…… 너무 과찬이야……');
    await zob_zoy.say_and_wait('아, 죄송합니다…… 저도 모르게 그만……');
    await rice.say_and_wait('아니야, 괜찮아. 하지만 정말 고마워.');
    await rice.say_and_wait(['조금 부끄럽지만…… ', self_name, ', 정말 기뻐.']);
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 4).forEach(
      (e) => (extra_flag.attr_change[e] = 3),
    );
    extra_flag.pt_change = 30;
  };

  handlers[race_enum.tenn_spr] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    const bourbon = get_chara_talk(26),
      urara = get_chara_talk(52),
      zob_zoy = get_chara_talk(47),
      mcqueen = get_chara_talk(13);
    await print_event_name('빛 속에 머물며', rice);
    await rice.say_and_wait('하…… 아, 하아……!!');
    await me.say_and_wait('정말 고생 많았어!');
    await rice.say_and_wait(['응! 해냈어! ', self_name, '가——']);
    await urara.say_and_wait([
      sys_get_colored_callname(52, 30),
      '! 대——단해!!',
    ]);
    await rice.say_and_wait([sys_get_colored_callname(30, 52), '!?']);
    await urara.say_and_wait('에헤헤~ 와버렸어~');
    await zob_zoy.say_and_wait('아니예요! 빨리 돌아오세요! 이쪽이에요!');
    await zob_zoy.say_and_wait('비록 우승자의 지인 자격으로 오긴 했지만……');
    await bourbon.say_and_wait([
      '그럼 저도 상관없지 않습니까? 저희는 ',
      sys_get_colored_callname(26, 30),
      '의 관계자니까요.',
    ]);
    await bourbon.say_and_wait([
      '멋진 달리기였습니다, ',
      sys_get_colored_callname(26, 30),
      '. 우선 축하드립니다.',
    ]);
    await bourbon.say_and_wait([
      '레이스 중의 당신은, ',
      sys_get_colored_callname(26, 47),
      '씨가 지어준 『집념의 귀신』이라는 별명이 정말 잘 어울리더군요.',
    ]);
    await rice.say_and_wait('……집념의 귀신?');
    await zob_zoy.say_and_wait([
      '와, 와아! ',
      sys_get_colored_callname(47, 26),
      '!!',
    ]);
    await zob_zoy.say_and_wait('그 별명은 비밀로 해달라고 제가 말씀드렸잖아요!');
    await rice.say_and_wait('……후후.');
    await rice.say_and_wait([
      '에헤헤…… ',
      self_name,
      '가 레이스를 통해 모두에게 제대로 답을 해준 것 같네.',
    ]);
    await me.say_and_wait('모두를 웃게 해줬어.');
    await rice.say_and_wait('응!');
    await urara.say_and_wait([
      '아하하하, ',
      sys_get_colored_callname(52, 30),
      '도 싱글벙글 웃고 있어!',
    ]);
    await urara.say_and_wait('다음 레이스에서도 꼭 웃어줘야 해!');
    await urara.say_and_wait([
      '우리도 열심히 손을 흔들면서 ',
      sys_get_colored_callname(52, 30),
      '을 응원할게!',
    ]);
    await rice.say_and_wait([
      '……그래, ',
      sys_get_colored_callname(30, 52),
      '.',
    ]);
    await rice.say_and_wait('나도 모두를 향해…… 손을 흔들어 줄게.');
    await rice.say_and_wait('아주 크게…… 모두가 볼 수 있게 말이야!');
    era.drawLine({ content: '무대 뒤'});
    await rice.say_and_wait('……말은 그렇게 했지만, 역시 긴장되네……');
    await rice.say_and_wait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '의 위닝 라이브 무대에서 센터라니……',
    ]);
    await me.say_and_wait('당당히 가슴을 펴.');
    await mcqueen.say_and_wait([
      '맞는 말이에요. ',
      sys_get_colored_callname(13, 30),
      '씨는 저를 이겼으니까요, 그러니 조금 더 자신감을 가지세요.',
    ]);
    await rice.say_and_wait(['아, ', sys_get_colored_callname(30, 13), '!!']);
    await mcqueen.say_and_wait('확실히 이 무대는 특별하죠.');
    await mcqueen.say_and_wait('그러니 이 무대에 서는 우리 또한 프로다워야 합니다.');
    await mcqueen.say_and_wait('현장 공연을 기대하고 있는 분들께 감사의 마음을 표현해야 하지 않겠어요?');
    await rice.say_and_wait('응, 맞아.');
    await mcqueen.say_and_wait('그러니 무대를 두려워하지 마세요.');
    await mcqueen.say_and_wait('기대와 염원에 응답하며 무대 위에서 빛나는 것.');
    await mcqueen.say_and_wait('그것이 경기장을 달리는 우리들의 의무니까요.');
    await era.printAndWait([
      '그 후 ',
      mcqueen.get_colored_name(),
      '은 우아하고 고결하게 무대를 향해 걸어갔다.',
    ]);
    await me.say_and_wait('배울 점이 참 많네.');
    await rice.say_and_wait('응, 역시 정말 멋진 분이야.');
    await rice.say_and_wait([self_name, '도 그런 기대와 염원에 보답해야겠어.']);
    await rice.say_and_wait('모두에 대한 감사의 마음을 담아서 말이야.');
    await rice.say_and_wait(['……좋아! ', self_name, ', 다녀올게!!']);
    await era.printAndWait([
      '눈부시게 빛나는 무대를 향해, ',
      rice.sex,
      '는 발걸음을 내디뎠다.',
    ]);
    era.drawLine({ content: '그날 밤'});
    await rice.say_and_wait('저기…… 돌아오자마자 이런 말을 하려니 조금 이상하지만……');
    await rice.say_and_wait([
      callname,
      '! ',
      self_name,
      ', 또 하고 싶은 일이 생겼어.',
    ]);
    await rice.say_and_wait([self_name, '와, 라이스를 믿어준 사람들에게 더 잘 보답하고 싶어.']);
    await rice.say_and_wait([
      '그래서 다음번에는 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '에 참가하고 싶어.',
    ]);
    await rice.say_and_wait(['만약 모두가 ', self_name, '가 나가도 된다고 해준다면……!']);
    await era.printAndWait([
      '——',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ', 그것은 오직 팬들에게 사랑받는 ',
      rice.get_uma_sex_title(),
      '만이 오를 수 있는 무대였다.',
    ]);
    await era.printAndWait(['……처음엔 학원 밖에서 혼자 울고만 있던 ', rice.sex, '가.']);
    await era.printAndWait('이제는 그 자격을 갖추게 된 것이다.');
    await me.say_and_wait([
      '다음엔 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '에 나가자! ',
    ]);
    await rice.say_and_wait(['응! ', self_name, ', 계속 힘낼게.']);
    await rice.say_and_wait('그리고 모두에게 전하고 싶어——');
    await rice.say_and_wait('정말 고맙다고.');
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.takz_kin] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (era.get('cflag:30:육성턴수합산') < 96) {
      return true;
    }
    extra_flag.attr_change = new Array(5);
    if (extra_flag.rank === 1) {
      await print_event_name('만개하는 푸른빛', rice);
      await rice.say_and_wait('하…… 아, 하아……!!');
      await me.say_and_wait('축하해!');
      await rice.say_and_wait(['……에헤헤. 고마워, ', callname, '.']);
      await rice.say_and_wait(['저기, ', self_name, '가 달리는 중에도 다 들렸어.']);
      await rice.say_and_wait('모두의 목소리가.');
      await rice.say_and_wait([
        '……헤헤, 안 되겠네. ',
        self_name,
        '가 모두를 웃게 해주겠다고 약속해놓고서.',
      ]);
      await rice.say_and_wait(['정작 ', self_name, '가 더 기뻐하고 있다니.']);
      await rice.say_and_wait('정말 너무 행복해……');
      await rice.say_and_wait([
        race_infos[race_enum.takz_kin].get_colored_name(),
        '을 달릴 수 있어서 정말 다행이야.',
      ]);
      await me.say_and_wait('모두가 똑같은 생각일 거야.');
      await rice.say_and_wait('모두가?');
      await era.printAndWait([
        '관객A「',
        rice.get_colored_name(),
        '——!! 고마워——!!」',
      ]);
      await era.printAndWait([
        '관객A「올해 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '은 정말 최고였어——!!」',
      ]);
      await rice.say_and_wait('대단해…… 웃는 얼굴이 정말 많아.');
      await me.say_and_wait('네가 모두의 미소를 지켜준 거야.');
      await rice.say_and_wait([self_name, '가...?']);
      await rice.say_and_wait(['정말 그런 거야? ', self_name, '…… 해냈구나.']);
      await rice.say_and_wait('모두에게 행복을 전해주는 걸 해냈어!!');
      await me.say_and_wait([
        '고마워. 모두에게 행복을 전해줘서.',
      ]);
      await rice.say_and_wait('으와아아앙——');
      await era.printAndWait([
        '어깨를 들썩이며 울음을 터뜨린 ',
        rice.sex,
        '에게 관객들이 따뜻한 박수를 보내주었다.',
      ]);
      era.drawLine({ content: '위닝 라이브 무대'});
      await rice.say_and_wait('흡…… 하아……');
      await me.say_and_wait('이제 울지 않는구나.');
      await rice.say_and_wait('헤헤, 계속 울고 있을 순 없으니까.');
      await rice.say_and_wait('이 무대에서 모두에게 웃음을 제대로 전달해 드려야 하니까.');
      await rice.say_and_wait([
        '그럼 ',
        self_name,
        ', 무대에 올라갈게. 모두가 기다리는 곳으로.',
      ]);
      await rice.say_and_wait('잘 다녀와.');
      await rice.say_and_wait('응!');
      await era.printAndWait([
        '이날, ',
        rice.get_colored_name(),
        '는 최고의 라이브를 관객들에게 선사했다.',
      ]);
      await era.printAndWait([
        '다음 날, 신문 1면에는 ',
        rice.sex,
        '의 특집 기사가 실렸다.',
      ]);
      await era.printAndWait([
        '——언덕길 잔디 위에 피어난 주인공, 아름다운 장미: ',
        rice.get_colored_name(),
        '.',
      ]);
      era.drawLine({ content: '그 후'});
      await rice.say_and_wait([
        callname,
        '! ',
        self_name,
        '는 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '에 나가고 싶어!!',
      ]);
      await me.say_and_wait('벌써 새로운 목표를 정한 거야?');
      await rice.say_and_wait([
        '응! 그게 말이지, 이번에 열릴 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '에는 말이야.',
      ]);
      await rice.say_and_wait([
        sys_get_colored_callname(30, 26),
        '와 ',
        sys_get_colored_callname(30, 13),
        '도 참가하신대!!',
      ]);
      await rice.say_and_wait(['그러니까 ', self_name, '도 참가할래!']);
      await rice.say_and_wait('『최고의 레이스』를 하고 싶어!!');
      await me.say_and_wait('알겠어.');
      await rice.say_and_wait(['와아! 고마워, ', callname, '!']);
      await era.printAndWait([
        race_infos[race_enum.arim_kin].get_colored_name(),
        '은 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '과 마찬가지였다.',
      ]);
      await era.printAndWait([
        '둘 다 팬들 사이에서 인기가 많은 ',
        rice.get_uma_sex_title(),
        '만이 참가할 수 있는 레이스다.',
      ]);
      await era.printAndWait([
        '그런 참가 조건을 의식하지도 않은 채, ',
        rice.sex,
        '가 자연스럽게「참가하고 싶다」고 말하게 된 것이다.',
      ]);
      await era.printAndWait('그것은 즉——');
      era.printButton('「많이 컸구나.」', 1);
      await era.input();
      await rice.say_and_wait(['엣? ', self_name, ', 키는 안 컸는데?']);
      await me.say_and_wait('그런 뜻이 아니야.');
      await rice.say_and_wait('그럼 무슨 뜻이야?');
      await rice.say_and_wait(['아! 알려줘~ ', callname, '——!!']);
      await era.printAndWait([
        '그날 하루 종일, ',
        rice.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 곁을 졸졸 따라다녔다.',
      ]);
      extra_flag.attr_change.fill(3);
    } else {
      await print_event_name('작은 푸른 장미', rice);
      await rice.say_and_wait(['저기, ', self_name, '가 달리는 동안에 말이야.']);
      await rice.say_and_wait('다 들렸거든, 모두의 목소리가.');
      await rice.say_and_wait([
        '모두가 『힘내라——』 『',
        rice.get_colored_name(),
        '씨——』라고 외치며 계속 ',
        self_name,
        '를 응원해 줬어.',
      ]);
      await rice.say_and_wait('헤헤, 이러면 안 되는데 말이야.');
      await rice.say_and_wait(['원래는 ', self_name, '가 모두를 웃게 해줘야 하는데.']);
      await rice.say_and_wait(['결과적으로는 모두가 ', self_name, '를 행복하게 해줬어.']);
      await rice.say_and_wait('정말, 너무 행복해.');
      await era.printAndWait([
        rice.get_colored_name(),
        '가 어깨를 들썩이며 울음을 터뜨렸고, 관객들은 그런 ',
        rice.sex,
        '에게 따뜻한 박수를 보내주었다.',
      ]);
      extra_flag.attr_change.fill(2);
    }
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.arim_kin] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1 || era.get('cflag:30:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name('모두의 마음속에 한 송이 꽃이……', rice);
    await rice.say_and_wait('대단해, 이 함성 소리.');
    await rice.say_and_wait('모두가 이쪽을 보고 있어.');
    await rice.say_and_wait('모두가 즐거워하는 모습이 내 눈에도 다 보여……!');
    await me.say_and_wait('정말 고생 많았어.');
    await rice.say_and_wait(['으으…… 응. ', self_name, ', 열심히 했어……']);
    await rice.say_and_wait(['모두가 있어 줬기에 ', self_name, '가 힘낼 수 있었어.']);
    await rice.say_and_wait('정말, 정말로…… 정말 고마워…… 여러분……!');
    await rice.print_and_wait(['이날, ', rice.sex, '가 「주인공」으로서,']);
    await rice.print_and_wait('모두에게,');
    await rice.print_and_wait('미소가 피어나는 최고의 레이스를 선사했다.');
  };
};