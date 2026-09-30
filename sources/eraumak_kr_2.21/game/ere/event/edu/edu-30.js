/**
 * @file 라이스 샤워 - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const rice_out_shopping = require('#/event/edu/edu-events-30/out-shopping');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-30/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-30/week-end')(week_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-30/race-end')(race_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{flags:wait_flag})>} */
const school_atrium_handlers = {};

require('#/event/edu/edu-events-30/school-atrium')(school_atrium_handlers);

module.exports = class extends CustomizedEdu {
  async office_rest(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 30) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 'letter') {
      return;
    }
    const self_name = sys_get_callname(30, 30);
    await print_event_name('팬레터', rice);
    await era.printAndWait([
      '어느 날, ',
      rice.get_colored_name(),
      '가 팬레터를 받았다.',
    ]);
    await rice.say_and_wait([self_name, '에게 온, 팬레터……']);
    await me.say_and_wait('잘됐네.');
    await rice.say_and_wait('응, 응!');
    await rice.say_and_wait('하지만……');
    await era.printAndWait([self_name, '의 기뻐 보이던 표정이 조금씩 불안하게 변했다.']);
    await me.say_and_wait('왜 그래?');
    await rice.say_and_wait([self_name, '는 가끔 이런 생각이 들어.']);
    await rice.say_and_wait([
      self_name,
      '를 응원해 주는 분이, 나 때문에 불행해지지는 않을까 하고.',
    ]);
    await rice.say_and_wait([
      self_name,
      '는 그러고 싶지 않은데, 그렇게 생각하고 싶지 않은데, 자꾸만……',
    ]);
    await rice.say_and_wait([callname, ', ', self_name, '는 어떻게 하는 게 좋을까?']);
    await me.say_and_wait('팬레터의 내용을 읽어 보자.');
    await rice.say_and_wait('내용을? 응……');
    await me.say_as_unknown_and_wait([
      rice.get_colored_name(),
      '가 레이스에서 노력하는 모습이 저에게 큰 용기를 주었어요.',
    ]);
    await me.say_as_unknown_and_wait([
      rice.get_colored_name(),
      '의 웃는 얼굴을 볼 때마다 마음이 따뜻해지는 기분입니다.',
    ]);
    await me.say_as_unknown_and_wait([
      rice.get_colored_name(),
      '의 노력하는 모습…… ',
      rice.get_colored_name(),
      '의 미소……',
    ]);
    await rice.say_and_wait('그렇구나. 누군가는 라이스 덕분에 기뻐해 주는구나.');
    await rice.say_and_wait([callname, ', 라이스 더욱더, 훨씬 더 많이 노력할게!']);
    await rice.say_and_wait([
      self_name,
      '를 응원해 주는 분들이 모두 기뻐할 수 있도록 노력할게!',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '의 눈동자에 의욕 가득한 불꽃이 타오르는 듯했다.',
    ]);
    sys_change_motivation(30, 1) && (await era.waitAnyKey());
    return true;
  }

  async office_study(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 30) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 'dance') {
      return;
    }
    const self_name = sys_get_callname(30, 30);
    await print_event_name('댄스 레슨', rice);
    await rice.say_and_wait('하나 둘, 하나 둘, 여기서는 발을——');
    await rice.say_and_wait('꺄악!');
    await rice.say_and_wait('아우우, 또 실패했어…… 좀 더 연습해야 해……');
    await me.say_and_wait('정말 열심히 하는구나.');
    await rice.say_and_wait(['우앗!? ', callname, '!? 보, 보고 있었어……?']);
    await rice.say_and_wait([
      '미안해, 그게…… ',
      self_name,
      '는 아무도 없을 때 연습하려고 했거든.',
    ]);
    await me.say_and_wait('왜 혼자서 연습하고 있어?');
    await rice.say_and_wait('그게, 예전에 다 같이 수업을 들을 때 무용실이…… 정전됐었거든.');
    await rice.say_and_wait([
      '그것 때문에 모두의 수업이 끊겨버렸어. 아마, ',
      self_name,
      ' 때문일 거야……',
    ]);
    await rice.say_and_wait([
      self_name,
      '는 더 이상 모두에게 폐를 끼치고 싶지 않아서, 그래서 혼자 연습하고 있었어.',
    ]);
    await rice.say_and_wait([
      callname,
      '도 그래. 여기 있으면 또 나 때문에 무슨 일을 당할지 몰라……',
    ]);
    era.printButton('「내가 같이 있으면 곤란하니?」（스태미나+10, 근성+10）', 1);
    era.printButton('「마음껏 폐 끼쳐도 괜찮아!」（지능+10, 스킬 포인트+10）', 2);
    if ((await era.input()) === 1) {
      await rice.say_and_wait([
        '그, 그럴 리가! ',
        callname,
        '가 같이 있는 건 전혀 곤란하지 않아!',
      ]);
      await me.say_and_wait('그럼 내가 도와주게 해줘.');
      await rice.say_and_wait([callname, '……']);
      await rice.say_and_wait('고마워.');
      await rice.say_and_wait([
        self_name,
        '가 잘 못 하는 부분이 있으면, ',
        callname,
        '가 꼭 말해줬으면 좋겠어.',
      ]);
      await me.say_and_wait('함께 힘내자.');
      await rice.say_and_wait('응!');
      await era.printAndWait([
        '그 후, ',
        me.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '와 함께, ',
        rice.sex,
        '가 서툰 안무를 철저하게 연습했다.',
      ]);
      get_attr_and_print_in_event(30, [0, 10, 0, 10, 0], 0) &&
        (await era.waitAnyKey());
    } else {
      await rice.say_and_wait([
        '우에!? 그럴 수가, ',
        self_name,
        '는 ',
        callname,
        '에게 폐를 끼치고 싶지 않은걸!',
      ]);
      await me.say_and_wait([self_name, '가 혼자 고민하는 게 나한테는 더 큰 폐야.']);
      await rice.say_and_wait([callname, '……']);
      await rice.say_and_wait('그럼 연습 때 생긴 문제를 들어 줄 수 있어?');
      await me.say_and_wait('당연하지!');
      await rice.say_and_wait('고마워! 실은, 정말 어려운 스텝이 하나 있는데……');
      await era.printAndWait([
        '그 후 밤늦게까지, ',
        me.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '의 댄스 연습 고민을 함께 나누었다.',
      ]);
      get_attr_and_print_in_event(30, [0, 0, 0, 0, 10], 10) &&
        (await era.waitAnyKey());
    }
    return true;
  }

  async out_church(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 30) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 95 + 1) {
      return;
    }
    const self_name = sys_get_callname(30, 30);
    era.set('cflag:30:축제이벤트표시', 0);
    await print_event_name('새해 참배', rice);
    await era.printAndWait([
      '새해 첫날, ',
      me.get_colored_name(),
      '은(는) ',
      rice.get_colored_name(),
      '의 초대를 받아 함께 새해 참배를 하러 갔다.',
    ]);
    await rice.say_and_wait([
      callname,
      ', ',
      self_name,
      '는 정해둔 소원이 하나 있어.',
    ]);
    await rice.say_and_wait(['그래서 ', callname, '가 들어줬으면 좋겠는데, 그래도 될까?']);
    await me.say_and_wait('신님께 비는 게 아니라 나한테 말해주는 거야?');
    await rice.say_and_wait(['응! 이 소원은 ', callname, '에게 말하지 않으면 안 되는 거니까.']);
    await rice.say_and_wait([
      self_name,
      ', 다음 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '에 나가고 싶어.',
    ]);
    await me.say_and_wait('어째서?');
    await rice.say_and_wait('……그건, 더 강해지고 싶으니까.');
    await rice.say_and_wait('계속 앞으로 나아가지 않으면 안 돼.');
    await rice.say_and_wait('더 이상은…… 무서워하지 않기로 했으니까.');
    await me.say_and_wait('대단한 각오를 했구나.');
    await rice.say_and_wait([self_name, '는 깨달았어. 생각만 해서는 안 된다는 걸.']);
    await rice.say_and_wait(
      '눈앞에 있는 분이 슬퍼하지 않도록…… 먼저 행동해야만 한다는 걸…… 알았어.',
    );
    await era.printAndWait([
      rice.get_colored_name(),
      '는 새해를 맞이해 새로운 목표를 세웠다.',
    ]);
    await era.printAndWait([
      rice.sex,
      '의 이 의욕에 보답하기 위해, ',
      me.get_colored_name(),
      '과(와) ',
      rice.get_colored_name(),
      '는 신춘 휘호를 종이에 적었다.',
    ]);
    await rice.say_and_wait(['신님, ', self_name, '는 열심히 할게요.']);
    await rice.say_and_wait([callname, '랑 함께 참배하러 올 수 있어서 정말 다행이야!']);
    await rice.say_and_wait(['후후, 다음은 ', callname, ' 차례네.']);
    await rice.say_and_wait([
      self_name,
      '도 같이 기도할게. 신님이 소원을 꼭 들어주시기를……',
    ]);
    era.print([me.get_colored_name(), '의 소원은……']);
    era.printButton(
      `「${sys_get_callname(0, 30)}가 언제까지나 건강하기를.」（스태미나+20, 호감도+5）`,
      1,
    );
    era.printButton(
      `「언제까지나 ${sys_get_callname(0, 30)}의 달리기를 지켜봐 줄 수 있기를.」（모든 능력치+5, 애정도+2）`,
      2,
    );
    era.printButton('「힘이 필요해……!」（스킬 포인트+30）', 3);
    let wait_flag;
    switch (await era.input()) {
      case 1:
        await rice.say_and_wait('!');
        await rice.say_and_wait([
          '헤헤, 알겠어. ',
          self_name,
          ', ',
          callname,
          '에게 걱정 끼치지 않도록 조심할게.',
        ]);
        await era.printAndWait([
          '새해 참배 노점에서 영양 보충을 마친 뒤, ',
          me.get_colored_name(),
          '과(와) ',
          rice.get_colored_name(),
          '는 바로 트레이닝을 시작했다.',
        ]);
        wait_flag = get_attr_and_print_in_event(30, [0, 20], 0);
        wait_flag = sys_like_chara(30, 0, 5) || wait_flag;
        era.set('status:30:부상', Math.floor(era.get('status:30:부상') / 2));
        break;
      case 2:
        await rice.say_and_wait([
          '후훗, 그렇게 상냥하게 말해 주면 ',
          self_name,
          ', 부끄러워져서 어쩔 줄 모르겠어.',
        ]);
        await rice.say_and_wait([
          '정말이지, 울고 있을 시간 같은 건 없네. ',
          self_name,
          '도 열심히 힘내야겠어……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          rice.get_colored_name(),
          '는 조용히 서로를 응시한 뒤, 훈련에 돌입했다.',
        ]);
        wait_flag = get_attr_and_print_in_event(30, [5, 5, 5, 5, 5], 0);
        wait_flag = sys_love_uma(30, 5) || wait_flag;
        break;
      case 3:
        await rice.say_and_wait('힘이라니…… 그게, 저기……');
        await rice.say_and_wait([self_name, '도 도와줄 수 있을까?']);
        await rice.say_and_wait('그게, 근력 트레이닝이라든가, 같이 달리기라든가……');
        await me.say_and_wait('그런 뜻이 아니었어.');
        await rice.say_and_wait('호에?');
        await rice.say_and_wait([
          '하지만 정말로 ',
          self_name,
          '가 도와줄 수 있는 일이 있다면 꼭 말해줘.',
        ]);
        await rice.say_and_wait([
          self_name,
          '는 ',
          callname,
          '를 위해서라면 어떤 일이라도…… 도와줄 거니까.',
        ]);
        await era.printAndWait([
          '……',
          me.get_colored_name(),
          '은(는) ',
          rice.get_colored_name(),
          '의 사려 깊은 마음씨를 느끼며 학원으로 돌아왔다.',
        ]);
        wait_flag = get_attr_and_print_in_event(30, undefined, 30);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(rice, me, callname, hook, extra_flag, event_object) {
    return await rice_out_shopping(rice, me, callname, event_object);
  }

  async race_end(rice, me, callname, hook, extra_flag) {
    const self_name = sys_get_callname(30, 30);
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        rice,
        me,
        callname,
        self_name,
        extra_flag,
      ))
    ) {
      if (extra_flag.rank === 1) {
        const edu_marks = new RiceEduMarks();
        if (!edu_marks.love && era.get('love:30') >= 75) {
          edu_marks.love = 1;
          await print_event_name('열애', rice);
          await era.printAndWait([
            rice.get_colored_name(),
            '가 센터 라이브를 마친 뒤, ',
            me.get_colored_name(),
            '과(와) ',
            rice.sex,
            '의 기분은 매우 고조되어 있었다.',
          ]);
          await era.printAndWait([
            '그런데 지금의 ',
            rice.get_colored_name(),
            '는 묘한 눈빛을 띤 채, 귀엽고 다급한 발걸음으로 ',
            me.get_colored_name(),
            '에게 달려오고 있었다.',
          ]);
          await me.say_and_wait('음……');
          await era.printAndWait([
            '승부복 차림의 ',
            rice.get_colored_name(),
            '가 상기된 기색으로 ',
            me.get_colored_name(),
            '의 허리춤을 두 손으로 껴안았다.',
          ]);
          await era.printAndWait([
            rice.sex,
            '는 알 수 없는 표정으로 ',
            me.get_colored_name(),
            '을(를) 올려다보고 있었으며, 그 눈동자에는 요염함이 가득 차 있었다.',
          ]);
          await rice.say_and_wait([
            callname,
            ', ',
            self_name,
            '가 뭔가 잘못했어?',
          ]);
          await rice.say_and_wait(['왜…… 라이스를 안아주지 않는 거야?']);
          await era.printAndWait([
            '촉촉하게 젖어 드는 ',
            rice.get_colored_name(),
            '의 눈빛을 이기지 못한 ',
            me.get_colored_name(),
            '은(는) 소녀의 가냘픈 몸을 꽉 껴안았다.',
          ]);
          await era.printAndWait([
            '시간이 흘러 이제 슬슬 옷을 갈아입고 해산해야겠다고 생각한 ',
            me.get_colored_name(),
            '은(는) ',
            rice.get_colored_name(),
            '의 어깨를 잡았다.',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            '는 아쉬운 듯 ',
            me.get_colored_name(),
            '의 손가락을 만지작거리다가, 나중에 보자는 말을 남기고 탈의실로 향했다.',
          ]);
          await era.printAndWait([
            '예전에는 무엇을 하든 조심스럽고 겁이 많았던 ',
            rice.get_colored_name(),
            '였지만, 지금은 마치 소악마처럼 ',
            me.get_colored_name(),
            '에게 응석을 부렸다.',
          ]);
          await era.printAndWait([
            '라이브 이후 어느 날의 트레이닝이 끝난 뒤, ',
            rice.get_colored_name(),
            '가 체육복 차림으로 ',
            me.get_colored_name(),
            '에게 다가왔다.',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            '는 체육복 번호표 부분을 ',
            me.get_colored_name(),
            '에게 밀착시킨 채, ',
            me.get_colored_name(),
            '의 체취를 만끽하고 있었다.',
          ]);
          await era.printAndWait([
            '딸을 둔 아빠의 마음이 이런 것일까 생각하며, ',
            rice.sex,
            '를 더 세게 껴안아 주었다.',
          ]);
          await me.say_and_wait([
            '간지러워, 라이스.',
          ]);
          await rice.say_and_wait('에헤?');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            rice.get_colored_name(),
            '에게 어서 옷을 갈아입으라고 재촉했다.',
          ]);
          await era.printAndWait([
            rice.sex,
            '의 비틀거리는 뒷모습을 배웅하며, ',
            me.get_colored_name(),
            '은(는) 둘 사이의 관계에 어떤 변화가 생겼음을 깊이 실감했다.',
          ]);
          await era.printAndWait([
            '최근 ',
            rice.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '에게 보여주는 애정 표현은 점점 과격해지고 있었다.',
          ]);
          await era.printAndWait([
            '껴안고, 키스하고, 실수인 척 ',
            me.get_colored_name(),
            '의 손을 가슴에 갖다 대는 등의 행동조차 이제 ',
            me.get_colored_name(),
            '은(는) 아무렇지도 않게 느껴질 정도였다.',
          ]);
        } else {
          await print_event_name('레이스 승리', rice);
          await rice.say_and_wait([
            '해냈어, 해냈어, ',
            callname,
            '. ',
            self_name,
            '가 이겼어……',
          ]);
          await me.say_and_wait('좀 더 가슴을 펴도 괜찮아.');
          await rice.say_and_wait('가슴을 펴라고? 그게……');
          await rice.say_and_wait('게다가 1등이라니! 정말 감사히 받아야겠어!');
          await rice.say_and_wait([
            '에헤, 에헤헤! 이렇게 하면 될까? ',
            self_name,
            '가 가슴을 좀 펴고 있는 것 같아?',
          ]);
          era.printButton('「네가 정말 자랑스러워.」', 1);
          era.printButton('「다음에도 꼭 이기자.」', 2);
          if ((await era.input()) === 1) {
            await rice.say_and_wait([
              self_name,
              '가 자랑스럽다니? 왠, 왠지 조금 쑥스러워……',
            ]);
            await rice.say_and_wait([
              '그래도 ',
              callname,
              '가 자랑스럽게 여겨준다면, ',
              self_name,
              '도 정말 기뻐……',
            ]);
            await rice.say_and_wait('기쁘긴 한데, 너무 부끄러워서……');
            await rice.say_and_wait([
              '으으, ',
              self_name,
              '는 이제 잘 모르겠어~',
            ]);
          } else {
            await rice.say_and_wait(
              '응, 응! 다음 레이스에서도 이겨서 모두를 기쁘게 해주고 싶어.',
            );
            await rice.say_and_wait([
              '그러니까 ',
              callname,
              ', 앞으로도 내 트레이닝 잘 부탁해!',
            ]);
          }
        }
      } else if (extra_flag.rank <= 5) {
        await print_event_name('레이스 입상', rice);
        await rice.say_and_wait([
          '후우…… 다행이야. ',
          self_name,
          '도 열심히 노력했어……',
        ]);
        await rice.say_and_wait('다음에는 1등을 해보고 싶네…… 농, 농담이야. 후후.');
        era.printButton('「정말 열심히 했구나.」', 1);
        era.printButton('「다음에는 1등을 노리자!」', 2);
        if ((await era.input()) === 1) {
          await rice.say_and_wait(['응, 응! 고마워, ', callname, '!']);
          await rice.say_and_wait([
            '하지만 ',
            self_name,
            '는 ',
            callname,
            '와 함께 있었기에 이렇게 노력할 수 있었다고 생각해.',
          ]);
          await rice.say_and_wait([
            self_name,
            ' 혼자서는 아무것도 못 하지만, 같이 있으면 더 힘낼 수 있어……',
          ]);
        } else {
          await rice.say_and_wait('그, 그게…… 응, 응…… 다음에는 꼭 힘낼게!');
          await rice.say_and_wait('여, 역시 1등을 목표로 삼아야겠지……');
          await rice.say_and_wait('더 많이 노력해야겠어!');
        }
      } else {
        await print_event_name('레이스 패배', rice);
        await rice.say_and_wait(['으으…… ', self_name, '가 졌어……']);
        await rice.say_and_wait([
          '미안해. 라이스 때문에... ',
          callname,
          ', 실망했지……?',
        ]);
        era.printButton('「다음 기회가 있어.」', 1);
        era.printButton('「패배 원인을 분석해 보자.」', 2);
        if ((await era.input()) === 1) {
          await rice.say_and_wait(['그게…… 응. ', callname, ' 말이 맞아.']);
          await rice.say_and_wait([
            self_name,
            '는 다음엔 꼭 이길게. ',
            callname,
            ', 라이스를 꼭 지켜봐 줘.',
          ]);
        } else {
          await rice.say_and_wait(
            '원인…… 맞아, 그냥 열심히만 한다고 이길 수 있는 건 아니니까.',
          );
          await rice.say_and_wait('패배의 원인을 찾아서 다음 레이스에 활용해야 해.');
          await rice.say_and_wait(
            '아무리 못나도 계속 풀죽어 있으면, 영원히 못난 채로 남을 뿐이니까.',
          );
          await rice.say_and_wait([
            self_name,
            '는 이번에 진 원인을 찾을 거야. 그리고 다음에는 꼭 이기고 싶어!',
          ]);
          await era.printAndWait([
            '그 후 ',
            me.get_couple_title(),
            '은 이번 레이스 패배의 요인을 다시 검토했다.',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            '는 묘하게 의욕이 넘치고 있었다.',
          ]);
        }
      }
    }
  }

  async race_start(rice, me, callname, hook, extra_flag) {
    const self_name = sys_get_callname(30, 30),
      buffer = [
        async () => {
          await rice.say_and_wait('으으…… 으으……');
          era.printButton('상태가 안 좋아?', 1);
          await era.input();
          await me.say_and_wait('상태가 안 좋아?');
          await rice.say_and_wait('어? 아, 아니야. 그냥 조금 긴장해서 그래……');
          await rice.say_and_wait('하지만 이제 괜찮아.');
          await rice.say_and_wait([
            '이렇게 ',
            callname,
            '와 대화하면 마음이 놓여.',
          ]);
          await rice.say_and_wait([
            self_name,
            '는 힘낼게. 나를 꼭 지켜봐 줘, ',
            callname,
            '!',
          ]);
          extra_flag.motivation_change = 1;
        },
        () =>
          rice.say_and_wait(['이제부턴 최선을 다해 달릴 뿐이야, 그렇지? ', callname, '!']),
        () => rice.say_and_wait([self_name, '는 끝까지 포기하지 않고 달릴 거야! 힘낼게——오!']),
        () =>
          rice.say_and_wait([
            '아직 시작도 안 했는데, 좋은 레이스가 될 것 같은 기분이 들어. ',
            self_name,
            ', 오늘은 정말 기대돼!',
          ]),
        () => rice.say_and_wait('후우, 좋아……! 아직 시작 시간 안 됐어?'),
        () =>
          rice.say_and_wait(
            `모, 몸이 떨리기 시작했어…… 저기, ${callname}. 라이스, 잠깐만 손을 잡아도 될까?`,
          ),
        () => rice.say_and_wait('모두에게 행복을 전하고 싶으니까…… 라이스는 전력으로 달릴게!'),
      ];
    const handler = get_random_entry(buffer);
    await print_event_name(
      buffer.indexOf(handler) === 0 ? '무사의 전율' : '레이스 전',
      rice,
    );
    await handler();
  }

  async school_atrium(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 30) {
      add_event(event_hooks.school_atrium, event_object);
      return;
    }
    if (!school_atrium_handlers[event_object.arg]) {
      return;
    }
    const flags = { wait_flag: false };
    await school_atrium_handlers[event_object.arg](
      rice,
      me,
      callname,
      sys_get_callname(30, 30),
      flags,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return true;
  }

  async train() {
    await get_chara_talk(30).say_and_wait(
      get_random_entry(['힘낼게……오!', '응, 가자!', '정말 기대돼……']),
    );
  }

  async train_fail(rice, me, callname, hook, extra_flag) {
    await get_chara_talk(30).say_and_wait(
      Math.random() < 0.5 ? '으으……' : '응……?',
    );
    return await super.train_fail(rice, me, callname, hook, extra_flag);
  }

  async train_success(rice, me, callname, hook, extra_flag) {
    era.print([
      rice.get_colored_name(),
      '의 ',
      attr_names[extra_flag.train],
      ' 트레이닝이 성공적으로 끝났다……',
    ]);
    if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
      await era.waitAnyKey();
      const me = get_chara_talk(0),
        callname = sys_get_callname(30, 0),
        self_name = sys_get_callname(30, 30);
      await print_event_name('추가 자율 트레이닝', rice);
      await era.printAndWait([
        rice.get_colored_name(),
        '과(와) 함께 트레이닝을 마친 뒤——',
      ]);
      await rice.say_and_wait(['어라? ', callname, ', 아직 안 갔어?']);
      era.printButton('「내일 트레이닝을 준비해야 해.」', 1);
      era.printButton(`「라이스를 보느라 넋이 나갔었어.」`, 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          callname,
          '…… ',
          self_name,
          '를 위해 더 일하려는 거야?',
        ]);
      } else {
        await rice.say_and_wait(['우아아아, ', callname, '!']);
      }
      await me.say_and_wait([
        '라이스는 먼저 들어가서 쉬어.',
      ]);
      await rice.say_and_wait('……응, 알겠어.');
      await rice.say_and_wait(['잘 있어, ', callname, '.']);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 내일 트레이닝 준비를 마치고 귀가하려던 참에.',
      ]);
      await era.printAndWait([
        '훈련장에서 여전히 달리고 있는 ',
        rice.get_colored_name(),
        '의 실루엣을 발견했다.',
      ]);
      await rice.say_and_wait('하아…… 하아…… 아, 아직……');
      await rice.say_and_wait([self_name, '는 더 할 수 있어, 노력하지 않으면……']);
      await me.say_and_wait('자율 트레이닝 중이야?');
      await rice.say_and_wait(['아…… ', callname, '.']);
      await rice.say_and_wait('들켜버렸네……');
      await rice.say_and_wait([
        callname,
        '가 나를 위해 노력하고 있으니까. 그렇다면 나도 더 힘내야지!',
      ]);
      era.printButton('「그럼 조금만 더 같이 트레이닝해 줄게.」', 1);
      era.printButton('「그 마음만으로도 충분히 기뻐.」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['응, 고마워, ', callname, '!']);
      } else {
        await rice.say_and_wait('그 마음만으로도 충분히 기쁘다니...');
        await rice.say_and_wait([
          '으으…… 하지만 나도 ',
          callname,
          '에게 도움이 되고 싶은데.',
        ]);
      }
      await era.printAndWait([
        '그 후, ',
        me.get_colored_name(),
        '은(는) 곁에서 ',
        rice.get_colored_name(),
        '의 추가 트레이닝을 지켜보았다.',
      ]);
      era.drawLine({ content: '트레이닝 종료 후' });
      era.printButton('「혼자 돌아가려니 참 쓸쓸하네——」', 1);
      await era.input();
      await rice.say_and_wait('에?');
      await rice.say_and_wait(['그 말은…… 나와 같이 가고 싶다는 뜻이야?']);
      await rice.say_and_wait([self_name, ', 얼른 옷 갈아입고 올게! 제발 잠깐만 기다려 줘.']);
      await era.printAndWait([
        '그 후, ',
        me.get_colored_name(),
        '은(는) 옷을 갈아입고 나온 ',
        rice.get_colored_name(),
        '와 함께 집으로 돌아갔다.',
      ]);
      hook.arg = true;
    }
  }

  async week_end(rice, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_end_handlers[event_object.arg](
          rice,
          me,
          callname,
          sys_get_callname(30, 30),
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(rice, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_start_handlers[event_object.arg].call(
          this,
          rice,
          me,
          callname,
          sys_get_callname(30, 30),
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }
};