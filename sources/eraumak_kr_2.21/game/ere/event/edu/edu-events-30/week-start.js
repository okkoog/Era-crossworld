const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (rice, me, callname, self_name) => {
    await print_event_name('육성 개시', rice);
    era.drawLine({ content: '훈련장'});
    await rice.say_and_wait('트레이닝 시간까지 조금 남았네……');
    await rice.say_and_wait('……조금만 달려볼까.');
    await rice.say_and_wait([
      '에헤헤…… ',
      self_name,
      ', 환호성 속에서 경기장에 입장합니다—',
    ]);
    await say_by_passer_by(`${rice.get_uma_sex_title()} A`, '와아아아!!!');
    await rice.say_and_wait('엣!?');
    const bourbon = get_chara_talk(26);
    bourbon.name = '실력이 뛰어난 ' + bourbon.get_uma_sex_title()
    await bourbon.say_and_wait('하아…… 하아……!');
    await say_by_passer_by(`${rice.get_uma_sex_title()} A`, '또 기록을 경신했어!');
    await say_by_passer_by(
      `${rice.get_uma_sex_title()} A`,
      '이걸로 내년 클래식 전선의 주역은 확실해졌네!',
    );
    await say_by_passer_by(
      `${rice.get_uma_sex_title()} B`,
      '맞아…… 정말 멋진 달리기였어. 저기, 저 실례지만……',
    );
    await bourbon.say_and_wait('……아직 예정된 스케줄이 남아 있습니다. 실례하겠습니다.');
    await era.printAndWait([bourbon.get_colored_name(), '는 달려나갔다.']);
    await say_by_passer_by(
      `${rice.get_uma_sex_title()}들`,
      '아~~ 잠깐만요~~!',
    );
    await rice.say_and_wait('……대단해. 경기장 주변에 구경하는 사람들도 가득해……');
    await rice.say_and_wait([
      '……지금 ',
      self_name,
      '가 저기서 뛰면 방해만…… 되겠지.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '가 함께 트윙클 시리즈를 향해 도전하는 나날이 시작되었다!',
    ]);
    bourbon.name = undefined;
  };

  handlers[47 + 1] = async (rice, me, callname, self_name, flags) => {
    await print_event_name('새해 포부', rice);
    await era.printAndWait([
      '올해부터는 클래식 레이스에 도전하게 된다. ',
      me.get_colored_name(),
      '이(가) 정보 수집을 위해 TV 프로그램을 시청하고 있을 때—',
    ]);
    await say_by_passer_by(
      'TV',
      '자, 이번 클래식 전선은 아주 흥미로운 얼굴들이 모이고 있군요.',
    );
    await say_by_passer_by('TV', [
      '단거리에서 적수가 없는 ',
      get_chara_talk(41).get_colored_name(),
      ', ',
      rice.get_colored_name(),
      '도 출주 명단에 이름을 올렸습니다만 역시——',
    ]);
    await say_by_passer_by('TV', [
      get_chara_talk(26).get_colored_name(),
      '을 절대 놓칠 수 없죠. ',
      rice.sex,
      '는 차세대 삼관 ',
      rice.get_uma_sex_title(),
      ' 후보니까요!',
    ]);
    await rice.say_and_wait(['새해 복 많이 받아, ', callname, '.']);
    era.printButton(`「라이스!?」`, 1);
    await era.input();
    await rice.say_and_wait(['응. ', self_name, '야.']);
    await rice.say_and_wait([
      '헤헤, 새해 인사를 하러 왔는데, ',
      me.get_colored_name(),
      '에게 폐를 끼친 걸까?',
    ]);
    era.printButton('「전혀 그렇지 않아.」', 1);
    await era.input();
    await rice.say_and_wait('아…… 다행이다.');
    await rice.say_and_wait([
      '에헤헤, 들어봐. 오늘 아침에 ',
      sys_get_colored_callname(30, 52),
      '이 나한테 말했어.',
    ]);
    era.drawLine({ content: '아침'});
    const urara = get_chara_talk(52);
    await urara.say_and_wait('새해니까 슈크림 먹자!');
    await urara.say_and_wait('……슈크림 맛있을까?');
    era.drawLine({ content: '현재'});
    era.printButton('「맛없을 리 있겠어?」', 1);
    await era.input();
    await rice.say_and_wait([
      '후후후, 그렇네. ',
      self_name,
      '도 똑같은 말을 했어.',
    ]);
    await rice.say_and_wait('그리고, 저기……');
    await rice.say_and_wait([
      self_name,
      '는 ',
      callname,
      '와 함께 새해 포부를 정하고 싶어. 올해의 목표를 이야기하고 싶어서……',
    ]);
    await rice.say_and_wait('안…… 될까?');
    era.printButton('「좋아.」', 1);
    await era.input();
    await rice.say_and_wait('헤헤, 신난다! 어떤 목표를 세우는 게 좋을까?');
    await rice.say_and_wait([callname, '는 어떤 목표를 세우고 싶어?']);
    era.printButton(
      `「반드시 라이스를 클래식에서 우승시킬 거야.」`,
      1,
    );
    await era.input();
    await rice.say_and_wait([callname, '……!']);
    await rice.say_and_wait([
      '……',
      self_name,
      '도 똑같이 올해의 목표를 세워도 될까?',
    ]);
    era.printButton('「물론이지.」', 1);
    await era.input();
    await rice.say_and_wait([
      self_name,
      '는 라이스랑 ',
      callname,
      '의 목표를 이루기 위해서 열심히 노력할게!',
    ]);
    era.printButton('바로 그 기세야! (근성 +10)', 1);
    era.printButton('건강도 잘 챙겨야 해. (스태미나 +10)', 2);
    era.printButton('함께 공부하자. (스킬 포인트 +20)', 3);
    switch (await era.input()) {
      case 1:
        await rice.say_and_wait('응! 당장 이루기는 힘들지도 모르지만.');
        await rice.say_and_wait(['하지만 ', self_name, '는 절대 포기하지 않을 거야.']);
        await era.printAndWait([
          rice.get_colored_name(),
          '는 그렇게 새로운 결의를 다졌다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 10], 0);
        break;
      case 2:
        await rice.say_and_wait('아와와…… 레이스 전에 감기라도 걸리면 큰일이지.');
        await rice.say_and_wait([
          '게다가 만약 ',
          self_name,
          '가 쉬게 되면, ',
          callname,
          '의 훈련 계획도——',
        ]);
        await rice.say_and_wait('아우우우, 항상 건강을 유지해야 해!');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 당황하며 혼자 고민에 빠진 ',
          rice.get_colored_name(),
          '를 달래며, 앞으로의 계획을 세우기 시작했다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(30, [0, 10], 0);
        break;
      case 3:
        await rice.say_and_wait('응!');
        await rice.say_and_wait(['왠지 ', callname, ', 선생님 같아.']);
        await rice.say_and_wait('후후…… 오늘 수업도 잘 부탁해…… 선생님.');
        await era.printAndWait([
          '그 후 ',
          me.get_colored_name(),
          '은(는) ',
          rice.get_colored_name(),
          '와 함께 레이스 영상을 보며 연구를 진행했다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(30, undefined, 20);
    }
    era.set('cflag:30:축제이벤트표시', 0);
  };

  handlers[47 + 29] = async (
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
      add_event(event_hooks.week_start, event_object);
      return;
    }
    const bourbon = get_chara_talk(26);
    bourbon.name = '어느 사이보그 우마무스메';
    await print_event_name('여름 합숙 (클래식 시즌) 시작', rice);
    await era.printAndWait('한층 더 실력을 끌어올리기 위해 강화 훈련이 시작되었다.');
    await rice.say_and_wait('……와아, 어쩌지.');
    await rice.say_and_wait([self_name, '도 합숙에 따라오고 말았어.']);
    await rice.say_and_wait([
      '다른 우마무스메들도 여기 있네. 만약 ',
      self_name,
      '가 불행을 불러오면——',
    ]);
    era.printButton('「지금 걱정할 건 그게 아니잖아?」', 1);
    await era.input();
    await rice.say_and_wait('……히익! 응! 저기……');
    await rice.say_and_wait('후후, 좋아…… 합숙도 힘낼게.');
    await rice.say_and_wait([self_name, ' 파이팅……!']);
    await rice.say_and_wait('에이! 에이! 오!');
    await era.printAndWait([
      '그렇게 ',
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '가 함께하는 여름 합숙이 시작되었다!!',
    ]);
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '가 훈련을 마치고 식사하려던 참에—',
    ]);
    await bourbon.say_and_wait('하아…… 하아……!');
    await bourbon.say_and_wait('기록 경신. 이상적인 기록까지 앞으로 5초.');
    await bourbon.say_and_wait('——훈련을 계속합니다.');
    await rice.say_and_wait(['……부탁이야 ', callname, ', 한 번만 더 뛰게 해줘.']);
    era.printButton('「……딱 한 번뿐이야.」', 1);
    await era.input();
    await rice.say_and_wait('응!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 다시 달려나가는 ',
      rice.get_colored_name(),
      '를 지켜보았다.',
    ]);
    const urara = get_chara_talk(52);
    await urara.say_and_wait([
      '아! ',
      sys_get_colored_callname(52, 30),
      ', 뛰어갔어!',
    ]);
    await urara.say_and_wait('세상에! 드디어 말을 걸 수 있다고 생각했는데!');
    await era.printAndWait([rice.get_colored_name(), '가 한 바퀴를 돌고 돌아왔다.']);
    await rice.say_and_wait([
      '……엣? ',
      sys_get_colored_callname(30, 52),
      '……?',
    ]);
    await urara.say_and_wait([
      '안녕! ',
      sys_get_colored_callname(52, 30),
      '! 그럼 같이 출발하자.',
    ]);
    await me.say_and_wait('출발!');
    await rice.say_and_wait('엣!? 두 사람 다……!?');
    era.drawLine();
    await rice.say_and_wait('와아! 구운 당근 야키소바, 스태미나 덮밥, 그리고 특대 사과 사탕……!');
    await urara.say_and_wait([
      sys_get_colored_callname(52, 30),
      '은 뭐부터 먹고 싶어? 나는 일단 당근 아이스크림이야.',
    ]);
    await rice.say_and_wait([
      '저기, ',
      self_name,
      '는…… 으우우. 어떡하면 좋지…… ',
      callname,
      '……',
    ]);
    era.printButton('에너지가 가득한 스태미나 덮밥! (파워 +10)', 1);
    era.printButton('근성으로 먹어치우자! 특대 사과 사탕! (근성 +10)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait('꼬르륵……');
      await rice.say_and_wait('……꺄아!? 아으으으……');
      await rice.say_and_wait([
        callname,
        '는 어떻게 ',
        self_name,
        '의 배가 텅텅 비었다는 걸 알았어?',
      ]);
      await me.say_and_wait('네가 오늘 정말 열심히 했으니까.');
      await rice.say_and_wait([
        '헤헤, ',
        callname,
        '는 늘 ',
        self_name,
        '를 지켜봐 주는구나.',
      ]);
      await era.printAndWait([
        '그렇게 세 사람은 함께 즐겁게 식사하며, 어느덧 소중한 시간을 보냈다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 10], 0);
    } else {
      await rice.say_and_wait('와아…… 사과 사탕! 정말 먹어도 돼?');
      await rice.say_and_wait([
        self_name,
        '에게 사과 사탕은 최고의 보상이야.',
      ]);
      await rice.say_and_wait(
        '레이스에 나갔을 때나 시험이 끝났을 때, 어머니께서 늘 『오늘도 참 잘했구나』라고 말씀해 주셨거든.',
      );
      era.printButton(`「그럼 오늘 라이스도 먹어도 돼.」`, 1);
      era.printButton(`「라이스는 언제나 착한 아이니까.」`, 2);
      await era.input();
      await urara.say_and_wait([
        '응응, ',
        sys_get_colored_callname(52, 30),
        '이라면 100개를 먹어도 문제없어!',
      ]);
      await rice.say_and_wait('정말?');
      await urara.say_and_wait([
        '그럼그럼! ',
        sys_get_colored_callname(52, 30),
        '은 아주 아—주 노력했으니까!',
      ]);
      await rice.say_and_wait([
        '……헤헤, 고마워. ',
        callname,
        '. ',
        sys_get_colored_callname(30, 52),
        '.',
      ]);
      await era.printAndWait([
        '세 사람은 그렇게 즐겁게 식사하며 짧은 휴식 시간을 보냈다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 10], 0);
    }
    bourbon.name = undefined;
  };

  handlers[95 + 6] = async (rice, me, callname, self_name) => {
    await print_event_name('발렌타인', rice);
    await era.printAndWait([
      '오늘도 ',
      me.get_colored_name(),
      '은(는) 평소처럼 트레이닝실에서 업무를 보고 있었다……',
    ]);
    await rice.say_and_wait('……저, 저기, 이거……');
    await rice.say_and_wait([callname, ', 초콜릿 좋아해? 받으면 기쁠까?']);
    await era.printAndWait('「초콜릿」이라는 말을 듣고 나서야 떠올랐다.');
    await era.printAndWait('……그러고 보니 오늘은 발렌타인데이였다.');
    await me.say_and_wait('기쁘게 받을 거야.');
    await rice.say_and_wait('정말! 그렇다면……');
    await era.printAndWait([
      '그 말을 남기고 ',
      rice.get_colored_name(),
      '는 달려나갔다.',
    ]);
    era.drawLine({ content: '잠시 후'});
    await era.printAndWait('쿵!!', { fontSize: '1.875rem'});
    await era.printAndWait([
      '……책상 위에 산더미처럼 ',
      rice.get_colored_name(),
      '가 가져온 초콜릿이 쌓였다.',
    ]);
    await rice.say_and_wait(
      '……많이 준비했어. 단것부터 쌉쌀한 것, 견과류가 든 것과 딸기가 든 것까지.',
    );
    await rice.say_and_wait(['——그러니까 하나 골라봐, ', callname, '!']);
    await me.say_and_wait('고르라고?');
    await rice.say_and_wait('응. 싫어하는 맛을 먹게 하고 싶지 않아서.');
    await rice.say_and_wait('그래서 여러 종류를 만들었어. 분명……');
    await rice.say_and_wait(['이 중에 ', callname, '가 좋아하는 맛이 하나쯤은 있을 거라고 생각해서.']);
    await era.printAndWait([
      rice.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 입맛에 맞추기 위해 여러 종류의 초콜릿을 직접 만든 모양이다.',
    ]);
    await rice.say_and_wait('엣…… 왜 그래?');
    await rice.say_and_wait('설마 이 중에 좋아하는 게 없어?');
    await me.say_and_wait('전부 다 받아도 될까?');
    await rice.say_and_wait('엣!? 배탈 날 텐데!?');
    await me.say_and_wait('괜찮아.');
    await rice.say_and_wait('정말…… 괜찮겠어……?');
    await era.printAndWait([
      rice.get_colored_name(),
      '는 걱정스러운 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await me.say_and_wait([self_name, '의 마음을 전부 다 받고 싶으니까.']);
    await rice.say_and_wait('……으읏!');
    await rice.say_and_wait('왠지 기뻐……');
    await rice.say_and_wait('하지만 그러면 초콜릿을 더 많이 만드는 게 좋았을까.');
    await rice.say_and_wait([callname, '를 향한 마음은 고작 이 정도로는 부족하거든.']);
    await era.printAndWait([
      '그 후 ',
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '는 달콤한 발렌타인 데이를 보냈다.',
    ]);
    era.set('cflag:30:축제이벤트표시', 0);
    era.add('item:발렌타인초콜릿', 1);
  };

  handlers[95 + 14] = async (rice, me, callname, self_name) => {
    const urara = get_chara_talk(52),
      mcqueen = get_chara_talk(13),
      zob_zoy = get_chara_talk(47),
      bourbon = get_chara_talk(26);
    await print_event_name('팬 대감사제', rice);
    await era.printAndWait('트레이닝 코스에서');
    await era.printAndWait(
      '이날은 학원을 일반인에게도 개방하여 다양한 행사를 개최한다.',
    );
    await rice.say_and_wait('으으…… 설마 마라톤에 참가하게 될 줄이야!');
    await urara.say_and_wait([
      '괜찮아! ',
      sys_get_colored_callname(52, 30),
      '이라면 분명 씩씩하게 완주할 수 있을 거야.',
    ]);
    await zob_zoy.say_and_wait([
      '네. ',
      sys_get_colored_callname(47, 30),
      '라면 절대 절대 완주할 수 있으니까요!',
    ]);
    await rice.say_and_wait('아, 아니야. 저기, 그런 문제가 아니라……!');
    era.drawLine();
    await era.printAndWait([
      '결국 ',
      mcqueen.get_colored_name(),
      '이 멋지게 1위로 골인했다.',
    ]);
    await era.printAndWait([
      '기대를 모았던 ',
      rice.get_colored_name(),
      '는…… 끈질기게 뒤를 쫓았으나 2위에 머물렀다.',
    ]);
    await zob_zoy.say_and_wait([
      sys_get_colored_callname(47, 30),
      ', 수고했어요!',
    ]);
    await urara.say_and_wait([
      '응응, ',
      sys_get_colored_callname(52, 30),
      '은 정말 대단해! 2등 했으니까 같이 축하하러 가자!',
    ]);
    await rice.say_and_wait('고, 고마워…… 하지만……');
    await rice.say_and_wait(['지금 ', self_name, '는 도저히……']);
    await bourbon.say_and_wait('……');
    await rice.say_and_wait('……미안해, 축하는 사양할게.');
    await rice.say_and_wait('다음번엔 꼭 너희들의 기대에 보답할게……!');
    await urara.say_and_wait([
      '엣, 잠깐만, ',
      sys_get_colored_callname(52, 30),
      '!',
    ]);
    await bourbon.say_and_wait('……');
    era.drawLine({ content: '밤'});
    await era.printAndWait([
      rice.get_colored_name(),
      '는 홀로 트레이닝 코스에서 자율 트레이닝을 하고 있었다.',
    ]);
    await rice.say_and_wait('……더 노력해야 해.');
    era.set('cflag:30:축제이벤트표시', 0);
  };

  handlers[95 + 24] = async (rice, me, callname, self_name, flags) => {
    const tokino = get_chara_talk(301),
      chairman = get_chara_talk(302);
    await print_event_name('꺾이지 않는 장미', rice);
    await era.printAndWait([
      race_infos[race_enum.takz_kin].get_colored_name(),
      '의 개최가 거의 불가능해졌다는——',
    ]);
    await era.printAndWait('그런 분위기가 곳곳에 감돌고 있었다.');
    await rice.say_and_wait('……');
    await rice.say_and_wait(['괜찮아, ', callname, '.']);
    await rice.say_and_wait([self_name, '는 괜찮아.']);
    await era.printAndWait(['……그렇게 말하는 ', rice.sex, '의 미소에는 힘이 없었다.']);
    await era.printAndWait('역시 그 일 때문일 것이다——');
    await rice.say_and_wait(['미, 미안해, ', callname, '!']);
    await era.printAndWait([
      rice.get_colored_name(),
      '는 메시지를 확인하더니 급히 트레이닝실을 뛰쳐나갔다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 뒤를 쫓아 서둘러 계단을 뛰어 올라갔다.',
    ]);
    await era.printAndWait([
      '마침내 ',
      rice.get_colored_name(),
      '의 목소리가 들리는 곳에 도착했다.',
    ]);
    await chairman.say_and_wait('진정! 하나씩 차근차근 말하게나……');
    await rice.say_and_wait([
      '라이스도 한신의 관계자분들도! 그리고 교토의 관계자분들까지 모두 간절히 바라고 있어요!',
    ]);
    await rice.say_and_wait([
      '그러니까—— 제발 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '을 개최해 주세요!',
    ]);
    await me.say_and_wait(['라이스!?']);
    await chairman.say_and_wait([
      '경악!? ',
      me.actual_name,
      ' 트레이너 자네도 왔는가!!',
    ]);
    await rice.say_and_wait(['엣!? ', callname, '?']);
    await me.say_and_wait('대체 이게 어떻게 된 거야?');
    await rice.say_and_wait(['……', self_name, '는 이사장님께 부탁드리러 왔어.']);
    await rice.say_and_wait([
      '……',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '이 교토 경기장에서 개최될 수 있도록……',
    ]);
    await chairman.say_and_wait('재차! 오늘뿐만 아니라 어제 저녁에도 찾아왔었네.');
    await chairman.say_and_wait('냉정! 해야 할 일이 산더미라네.');
    await chairman.say_and_wait('침착! 우선은 연락망을 확보하는 것이——');
    await rice.say_and_wait([
      '알고 있어요! 그래서 ',
      self_name,
      '는 한신 쪽 사람들과 교토 쪽 사람들 모두에게 연락을 취했어요!',
    ]);
    await rice.say_and_wait('폐가 될지도 모르고 어려울지도 모르지만, 부디 도와주세요!');
    await rice.say_and_wait('나를 응원해 주는 분들을 위해서라면 내가 할 수 있는 모든 것을 다 하고 싶어요.');
    await tokino.say_and_wait('아, 오래 기다리셨습니다! 드디어 허가가 내려왔어요!');
    await chairman.say_and_wait([
      '기대!!! ',
      sys_get_colored_callname(302, 301),
      '~',
    ]);
    await tokino.say_and_wait([
      '네! 이번 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '은 교토 경기장에서 개최하기로 결정되었습니다!',
    ]);
    await rice.say_and_wait('……그럼!');
    await tokino.say_and_wait(
      '맞아요. 한신과 교토, 두 경기장의 관계자분들이 긴밀하게 협력해주셨기에',
    );
    await tokino.say_and_wait('개최가 가능해진 것입니다!');
    await tokino.say_and_wait('어느 쪽 관계자분들도 반드시 전력을 다하겠다고 말씀하셨어요.');
    await tokino.say_and_wait(['……전부 ', self_name, '씨를 위해서 말이죠.']);
    await rice.say_and_wait('……!!');
    era.drawLine({ content: '트레이닝실로 돌아온 뒤'});
    await rice.say_and_wait('으으…… 다행이다……');
    await rice.say_and_wait('개최할 수 있게 되었네……');
    await me.say_and_wait('모두를 위해 정말 많이 노력했구나.');
    await rice.say_and_wait('응…… 응……!');
    await rice.say_and_wait('이번 일을 위해 힘써주신 모든 분들을 위해서.');
    await rice.say_and_wait(['그리고 ', self_name, '를 응원해 주는 모든 분들을 위해서……!']);
    await rice.say_and_wait([self_name, '는 모두가…… 웃어줬으면 좋겠어……!']);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 10], 0);
  };

  handlers[95 + 29] = async (
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
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 시작', rice);
    await era.printAndWait('오늘부터 다시 여름 합숙이 시작되었다.');
    await rice.say_and_wait('에헤헤…… 시끌벅적하네.');
    await rice.say_and_wait('이런 기분…… 오랜만이야.');
    await rice.say_and_wait('그때로부터 벌써 1년이나 지났구나……');
  };

  handlers[95 + 41] = async (rice, me, callname, self_name, flags) => {
    await print_event_name('팬레터', rice);
    await rice.say_and_wait([self_name, '에게 팬레터가 왔어……']);
    await me.say_and_wait('잘됐네.');
    await rice.say_and_wait('응……!');
    await rice.say_and_wait('하지만……');
    await era.printAndWait([
      '기뻐 보이던 ',
      rice.get_colored_name(),
      '의 표정이.',
    ]);
    await era.printAndWait('왠지 모르게 불안하게 변했다.');
    await me.say_and_wait('왜 그래?');
    await rice.say_and_wait(['……가끔 ', self_name, '는 그런 생각을 해.']);
    await rice.say_and_wait(['나 같은 애를 응원해 줘서.']);
    await rice.say_and_wait('이분들이 불행해지기라도 하면 어떡하나 하고——');
    await rice.say_and_wait([self_name, '는 그러고 싶지 않은데……']);
    await rice.say_and_wait('생각하고 싶지 않은데 자꾸만……');
    await rice.say_and_wait([callname, ', ', self_name, '는 어떻게 하면 좋을까?']);
    await me.say_and_wait('팬레터의 내용을 한번 읽어보자.');
    await rice.say_and_wait('내용을…… 응.');
    era.println();
    await me.say_as_unknown_and_wait([
      '경기장에서 ',
      rice.get_colored_name(),
      '가 노력하는 모습이 저에게 큰 용기를 주었어요……',
    ]);
    await me.say_as_unknown_and_wait([
      '……',
      rice.get_colored_name(),
      '의 미소를 보면……',
    ]);
    await me.say_as_unknown_and_wait('……언제든 따뜻함을 느낄 수 있습니다.');
    era.println();
    await rice.say_and_wait([self_name, '가 노력하는 모습……']);
    await rice.say_and_wait([self_name, '의 미소……']);
    await rice.say_and_wait('……그렇구나.');
    await rice.say_and_wait('그걸 보고 기뻐해 주는 분들이 계시는구나.');
    await rice.say_and_wait([callname, '.']);
    await rice.say_and_wait([self_name, ', 계속, 계속 노력할게……!']);
    await rice.say_and_wait([
      self_name,
      '를 응원해 주는 분들이 기쁨을 느끼실 수 있도록!']);
    await era.printAndWait([
      rice.get_colored_name(),
      '의 눈동자에 의욕의 불꽃이 타오르는 듯했다!',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, undefined, 30);
    flags.wait_flag = sys_change_motivation(30, 1) || flags.wait_flag;
  };

  handlers[95 + 48] = async (rice, me, callname, self_name) => {
    await print_event_name('기자 회견', rice);
    const bourbon = get_chara_talk(26),
      mcqueen = get_chara_talk(13);
    await era.printAndWait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '이 다가온 어느 날.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '는 공동 인터뷰에 참석했다.',
    ]);
    await rice.say_and_wait('에, 에엣……!?');
    await rice.say_and_wait([self_name, '가 가운데야?']);
    await say_by_passer_by('스태프A', [
      '그럼요! 인기 투표 1위인 ',
      rice.get_uma_sex_title(),
      ' 이시니까요!'
    ]);
    await say_by_passer_by('스태프A', '중앙은 주인공의 자리니까요!');
    await rice.say_and_wait('하지만…… 오늘 라이스는—');
    await bourbon.say_and_wait([
      sys_get_colored_callname(26, 30),
      ', 신속하고 당당하게 응답하세요.',
    ]);
    await bourbon.say_and_wait('촬영 뒤에 인터뷰도 예정되어 있습니다.');
    await mcqueen.say_and_wait('후후, 맞아요.');
    await mcqueen.say_and_wait('주인공이 없으면 시작할 수 없으니까요.');
    await bourbon.say_and_wait(
      '네. 그리고 당신은 【사상 최고의 레이스를 보게 될 것】이라고 선언하겠죠, 맞습니까?',
    );
    await mcqueen.say_and_wait('어머! 그 정도까지인가요?');
    await mcqueen.say_and_wait('후후…… 그거 참 기대되는군요.');
    await rice.say_and_wait('으으~~ 다들 눈빛이 무서워……');
    await me.say_and_wait('주인공이 된다는 건 쉬운 일이 아니네.');
    await rice.say_and_wait(['으으…… ', callname, '까지 그러기야……']);
    await era.printAndWait([
      '회견이 끝나고…… 열심히 노력한 ',
      rice.get_colored_name(),
      '를 격려하기 위해 거리로 나섰다.',
    ]);
    await rice.say_and_wait('으으…… 긴장돼서 죽는 줄 알았어.');
    await me.say_and_wait('정말 고생 많았어.');
    await rice.say_and_wait('응…… 설마 그 두 사람 사이에 끼게 될 줄은 몰랐거든.');
    await rice.say_and_wait(['저기, ', callname, '.']);
    await rice.say_and_wait('어떤 선물을 받고 싶어?');
    await rice.say_and_wait([self_name, '는 ', callname, '에게 보답하고 싶어.']);
    await rice.say_and_wait('그러니까, 어떤 선물을 주는 게 좋을까?');
    await rice.say_and_wait(['……비록 ', self_name, '가 할 수 있는 건 적지만.']);
    await me.say_and_wait('네가 노력하는 모습을 보고 싶어.');
    await rice.say_and_wait('그거면…… 되는 거야?');
    await me.say_and_wait('물론이지!');
    await rice.say_and_wait(['……', callname, '.']);
    await rice.say_and_wait('안 돼.');
    await rice.say_and_wait(['겨우 그런 거라면 ', self_name, '는 싫어!']);
    await rice.say_and_wait('노력하는 건 당연한 거니까.');
    await rice.say_and_wait([
      '——그러니까, 반드시 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에서 1등을 해서 ',
      callname,
      '에게 선물로 줄 거야!',
    ]);
    await rice.say_and_wait([
      '그건 분명 오직 ',
      self_name,
      '만이 줄 수 있는 선물일 테니까.']);
    await era.printAndWait('결국 휴식은커녕,');
    await era.printAndWait('이 크리스마스 이브는 오히려 정신을 더욱 고양시켰다.');
    await rice.say_and_wait([callname, ', 오늘도 고마워!']);
    await rice.say_and_wait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '이 시작되면, ',
      callname,
      '와 여러분 모두를.',
    ]);
    await rice.say_and_wait([
      self_name,
      '의 달리기로 반드시 행복하게 해줄게!']);
    await era.printAndWait([
      '그렇게 ',
      rice.get_colored_name(),
      '는 가벼운 발걸음으로 앞서 나갔다.',
    ]);
    await era.printAndWait([
      '처음 만났을 때보다 훨씬 늠름해진 뒷모습을, 이제는 ',
      me.get_colored_name(),
      '이(가) 뒤쫓을 차례였다.',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (rice, me, callname, self_name) {
    await CustomizedEdu.common_palace(rice, me);
    era.drawLine();
    era.set('flag:현재위치', location_enum.gate);
    await print_event_name('옛날 옛적 어느 곳에……', rice);
    era.set('flag:현재위치', location_enum.office);
    await era.printAndWait([
      '「첫 3년」은 우마무스메에게 매우 중요한 시기이며, ',
      rice.get_colored_name(),
      '는 이 기간 동안 훌륭하고 눈부신 성적을 거두었다.',
    ]);
    await era.printAndWait([rice.sex, '는 이로 인해 세상의 인정을 받게 되었다.']);
    await rice.say_and_wait('시상식……?');
    await me.say_and_wait('모두를 만나러 가자.');
    await rice.say_and_wait([
      '……응. ',
      self_name,
      '도 모두에게 직접 감사 인사를 드리고 싶어.',
    ]);
    await era.printAndWait([
      '——그리하여 다음 날, ',
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '는 한신 경기장을 찾았다.',
    ]);
    await rice.say_and_wait('사람이 정말 많네…… 오늘은 레이스도 없는데.');
    await say_by_passer_by('관객A', [
      '와아! ',
      rice.get_colored_name(),
      '가 왔다! 꺄아아~ 너무 귀여워~!',
    ]);
    await say_by_passer_by('관객B', [
      '수고했어~ ',
      rice.get_colored_name(),
      '! 오늘도 잘 부탁해~!',
    ]);
    await rice.say_and_wait('어…… 어라?');
    await say_by_passer_by('스태프A', '두 분, 오랜만입니다.');
    await rice.say_and_wait('오랜만이에요. 그런데…… 대체 이게 어떻게 된 일인가요?');
    await say_by_passer_by('스태프A', '아, 원래는 저희 스태프들끼리만 모여서, ');
    await say_by_passer_by('스태프A', '소박하게 축하 파티를 열려고 했는데, 그게……');
    await say_by_passer_by('관객C', [
      rice.get_colored_name(),
      '~! 여기 좀 봐줘~!',
    ]);
    await say_by_passer_by('스태프A', [
      '보시는 대로, 많은 관객분이 ',
      rice.get_colored_name(),
      ' 씨를 꼭 보고 싶어 하셨거든요.',
    ]);
    era.printButton(`모두가 라이스를 제일 좋아하니까.`, 1);
    await era.input();
    await rice.say_and_wait('우와아? 제, 제일 좋아한다니……');
    await say_by_passer_by('스태프A', '아하하, 말씀하신 대로입니다.');
    await say_by_passer_by(
      '스태프A',
      '그래서 예정된 계획을 변경하여 관계자분들의 협조를 얻어……',
    );
    await say_by_passer_by(
      '스태프A',
      '시상식을 일반 관객분들도 참여할 수 있는 축제로 만들었습니다.',
    );
    await rice.say_and_wait(['그럼 이분들 모두 오직 ', self_name, '를 위해서……']);
    await say_by_passer_by('스태프A', '네, 그렇습니다.');
    await say_by_passer_by('스태프A', '그날 끝마치지 못했던 일을 여기서 마무리해 주시겠습니까?');
    era.drawLine();
    await rice.say_and_wait('저기, 여러분 안녕하세요.');
    await rice.say_and_wait([
      '오늘 이렇게 많은 분이 오직 ',
      self_name,
      '를 위해 와줘서 정말 고마워요.',
    ]);
    await rice.say_and_wait([self_name, '는 이렇게 행복한 풍경을 본 적이 없어요.']);
    await rice.say_and_wait('라이스는 지금, 정말로 행복해요.');
    await rice.say_and_wait([self_name, '는 이제 울지 않을 거예요.']);
    await rice.say_and_wait([
      '오늘은 ',
      self_name,
      '가 여러분의 눈을 보며 말하고 싶어요.']);
    await rice.say_and_wait([
      '만약 혼자였다면 ',
      self_name,
      '는 지금처럼 성장하지 못했을 거예요.']);
    await rice.say_and_wait('그저 어두운 자신만의 세계에 웅크리고 있었겠죠.');
    await rice.say_and_wait(['하지만 ', self_name, '는 이제 혼자가 아니에요.']);
    await rice.say_and_wait([
      '라이스가 지금 여기 서 있을 수 있는 건 여러분들 덕분이에요.']);
    await rice.say_and_wait([
      self_name,
      '에게 빛을 주시고, ',
      self_name,
      '가 머물 곳을 주셨어요……']);
    await rice.say_and_wait('여러분, 정말로 고마워요!');
    await rice.say_and_wait(['그러니 부디 앞으로도 ', self_name, '를 응원해 주세요……!!']);
    await say_by_passer_by_and_wait('관객들', '와아아아아아아아아——');
    era.drawLine({ content: '돌아가는 버스 안에서'});
    await rice.say_and_wait(['고마워, ', callname, '. 전부 오라버니 덕분이야.']);
    await me.say_and_wait([
      '정말 열심히 했어, 라이스.',
    ]);
    await rice.print_and_wait([
      '그렇게 늘 자신이 쓸모없다고 생각하던 우마무스메는 누군가의 푸른 장미가 되었다.',
    ]);
    await rice.print_and_wait('그림책과는 다르게, 때로는 불행한 일도 생기겠지만……');
    await rice.print_and_wait([
      '하지만 ',
      rice.sex,
      '는 모두에게 행복을 전하고 싶다는 희망을 품고, 스스로를 아름답게 피워낼 것이다.',
    ]);
    await rice.print_and_wait([
      rice.get_colored_name(),
      '는 세상에서 가장 사랑하는 사람 곁에서 그렇게 기도했다.',
    ]);
  };

  handlers.stay = async (rice, me, callname) => {
    await print_event_name('수면 부족', rice);
    await rice.say_and_wait('하~ 암……');
    era.printButton('잠을 설쳤어?', 1);
    await era.input();
    await rice.say_and_wait('엣!?');
    await rice.say_and_wait(['아, 다행이다, ', callname, '~']);
    await rice.say_and_wait('사실 어제 자기 전에 무서운 책을 읽었거든.');
    await rice.say_and_wait('그랬더니 책상 위 인형이 쳐다보는 것 같아서 신경 쓰이고.');
    await rice.say_and_wait('시계 초침 소리도 평소보다 엄청 크게 들리는 것 같고……');
    await rice.say_and_wait('결국 사소한 게 전부 신경 쓰여서 잠을 하나도 못 잤어……');
    await rice.say_and_wait('하아~');
    await era.printAndWait([
      rice.get_colored_name(),
      '는 아무래도 수면 부족인 모양이다.',
    ]);
    await era.printAndWait('푹 잘 수 있으면 좋으련만.');
  };
};