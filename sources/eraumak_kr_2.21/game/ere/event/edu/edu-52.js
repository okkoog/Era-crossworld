/**
 * @file 하루 우라라 - 育成
 * @author 99
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const urara_crazy_fan_end = require('#/event/edu/edu-events-52/crazy-fan-end');
const urara_out_church = require('#/event/edu/edu-events-52/out-church');
const urara_out_start = require('#/event/edu/edu-events-52/out-start');
const urara_train_fail = require('#/event/edu/edu-events-52/train-fail');
const urara_loop1 = require('#/event/edu/edu-events-52/week-start-loop-1');
const urara_loop2 = require('#/event/edu/edu-events-52/week-start-loop-2');
const urara_loop3 = require('#/event/edu/edu-events-52/week-start-loop-3');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-52/week-start-1'),
  require('#/event/edu/edu-events-52/week-start-2'),
  require('#/event/edu/edu-events-52/week-start-3'),
  require('#/event/edu/edu-events-52/week-start-4'),
  require('#/event/edu/edu-events-52/week-start-5'),
].forEach((f) => f(week_start_handlers));

week_start_handlers[95 + 46] = async (
  urara,
  me,
  in_urara,
  callname,
  edu_marks,
  event_object,
) => {
  switch (edu_marks.loop) {
    case 2:
      await urara_loop1(urara, me, in_urara, callname);
      await era.saveData(52);
      add_event(event_hooks.week_end, event_object);
      break;
    case 1:
      await urara_loop2(urara, me, in_urara, callname);
      await era.saveData(52);
      add_event(event_hooks.week_end, event_object);
      break;
    case 0:
      if (await urara_loop3(urara, me, in_urara, callname)) {
        edu_marks.sbuff = 1;
        await era.printAndWait([
          { isBr: true },
          urara.get_colored_name(),
          '는 팬들의 응원으로부터 더 강력한 힘을 얻을 수 있게 되었다!',
        ]);
      } else {
        edu_marks.loop = 2;
        await era.saveData(52);
        add_event(event_hooks.week_end, event_object);
      }
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-52/week-end-1'),
  require('#/event/edu/edu-events-52/week-end-2'),
  require('#/event/edu/edu-events-52/week-end-3'),
  require('#/event/edu/edu-events-52/week-end-4'),
  require('#/event/edu/edu-events-52/week-end-5'),
].forEach((f) => f(week_end_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} */
const office_prepare_handlers = {};

require('#/event/edu/edu-events-52/office-prepare')(office_prepare_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} */
const school_atrium_handlers = {};

require('#/event/edu/edu-events-52/school-atrium')(school_atrium_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} */
const out_shopping_handlers = {};

[
  require('#/event/edu/edu-events-52/out-shopping-1'),
  require('#/event/edu/edu-events-52/out-shopping-2'),
  require('#/event/edu/edu-events-52/out-shopping-3'),
].forEach((f) => f(out_shopping_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},{loc:number},EventObject):Promise<*>>} */
const back_school_handlers = {};

[
  require('#/event/edu/edu-events-52/back-school-1'),
  require('#/event/edu/edu-events-52/back-school-2'),
].forEach((f) => f(back_school_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,HookArg):Promise<*>>} */
const race_start_handlers = {};

[
  require('#/event/edu/edu-events-52/race-start-1'),
  require('#/event/edu/edu-events-52/race-start-2'),
].forEach((f) => f(race_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-52/race-end-1'),
  require('#/event/edu/edu-events-52/race-end-2'),
  require('#/event/edu/edu-events-52/race-end-3'),
].forEach((f) => f(race_end_handlers));

module.exports = class extends CustomizedEdu {
  async back_school(urara, me, callname, hook, extra_flag, event_object) {
    if (back_school_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await back_school_handlers[event_object.arg](
          urara,
          me,
          callname,
          flags,
          extra_flag,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return !ret;
    }
  }

  async crazy_fan_end() {
    await urara_crazy_fan_end();
  }

  async office_prepare(urara, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 52) {
      add_event(hook.hook, event_object);
      return false;
    }
    if (office_prepare_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await office_prepare_handlers[event_object.arg](
          urara,
          me,
          callname,
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return !ret;
    }
  }

  async out_church(urara, me, callname, hook, extra_flag, event_object) {
    return await urara_out_church(
      urara,
      me,
      callname,
      extra_flag,
      event_object,
    );
  }

  async out_shopping(urara, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 52) {
      add_event(hook.hook, event_object);
      return false;
    }
    if (out_shopping_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      await out_shopping_handlers[event_object.arg](
        urara,
        me,
        get_chara_talk(52, chara_colors[1]),
        callname,
        new UraraEduMarks(),
        flags,
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async out_start(urara, me, callname, hook, extra_flag, event_object) {
    return await urara_out_start(urara, me, callname, hook, event_object);
  }

  async race_end(urara, me, callname, hook, extra_flag) {
    const key = `${extra_flag.race}_${era.get('cflag:52:육성턴수합산')}`;
    const handler =
      race_end_handlers[extra_flag.race] || race_end_handlers[key];
    if (handler) {
      return await handler(
        urara,
        me,
        get_chara_talk(52, chara_colors[1]),
        callname,
        extra_flag,
        new UraraEduMarks(),
      );
    } else if (extra_flag.rank === 1) {
      await print_event_name('레이스 승리!', urara);
      let talk_arr = [
        `응? 에…… 해냈어! 이겼어! ${callname}! 봤어? 내가 이겼다구!`,
        '와아……! 나 1등 했어! 나 진짜로 1등 했어!',
        '나 해냈어! 1등을 했다는 건, 모두의 기대가 전해졌다는 뜻이지!',
        `${callname}! 봤어? 방금 슈웅— 하고 결승선을 통과했다구!`,
        `역시 평소처럼 하면 되는 거였어! 이번에도 내가 이겼어 ${callname}!`,
        '해냈어…… 해냈다구! 나 진짜로 해냈어!',
      ];
      await urara.say_and_wait(get_random_entry(talk_arr));
      era.drawLine();
      await era.printAndWait([
        '얼굴의 땀을 닦아내며, ',
        urara.get_colored_name(),
        '는 레이스가 끝나자마자 곧장 종종걸음으로 ',
        me.get_colored_name(),
        '이(가) 기다리는 울타리 앞까지 달려왔다.',
      ]);
      await era.printAndWait([
        '사람들의 환호성 속에서 햇살을 가득 머금은 얼굴을 들고, 작은 ',
        urara.get_uma_sex_title(),
        '는 수건과 물을 건네는 ',
        me.get_colored_name(),
        '에게 승리의 미소를 지어 보였다.',
      ]);
      await urara.say_and_wait(
        '헤헤～ 방금 아저씨들이 만세라고 외치는 소리가 들린 것 같아. 우라라가 정말 그렇게 대단해?',
      );

      await urara.say_and_wait([
        '맞다, ',
        callname,
        '! 방금 봤어? 우라라가 이긴 것 같아!',
      ]);
      era.printButton('「맞아, 우라라가 해냈어. 오늘은 1등이야!」', 1);
      era.printButton('「다들 기뻐하고 있어. 하지만 다음에는 더 중요한 일이 기다리고 있어!」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          '의 긍정에, ',
          urara.get_colored_name(),
          '는 기쁘게 귀와 꼬리를 흔들며, 귀여운 웃는 얼굴이 더욱 찬란해졌다.',
        ]);
        await urara.say_and_wait(
          '역시 그렇구나! 그럼 모두의 미소를 위해서라도, 다음에도 꼭 1등 할래!',
        );
        await urara.say_and_wait([
          callname,
          '도 마찬가지야! 지금 ',
          callname,
          ', 웃는 모습 정말 보기 좋거든!',
        ]);
        await era.printAndWait(
          '승리 후에 반짝이는 벚꽃색 눈동자 속에는, 지금 미소 짓고 있는 모든 이들의 웃음이 비치고 있었다.',
        );
      } else {
        await era.printAndWait([
          '재빨리 얼굴의 땀을 닦아내며, ',
          urara.get_colored_name(),
          '는 힘차게 귀를 세우고는 얼굴의 미소를 더욱 굳건히 했다.',
        ]);
        await urara.say_and_wait(
          '응! 나도 그렇게 생각해! 우라라는 아직 달리는 게 부족하니까!',
        );
        await urara.say_and_wait([
          callname,
          ', 다음에 어떤 레이스에 나갈지 우라라, 기대해도 될까?',
        ]);
        await era.printAndWait([
          '승리 후에 반짝이는 벚꽃색 눈동자 속에서, ',
          me.get_colored_name(),
          '은(는) 그 안의 불꽃이 이전보다 더욱 왕성하게 타오르는 것을 보았다.',
        ]);
      }
      era.drawLine();
      talk_arr = [
        `위닝 라이브가 시작될 거야! ${callname}, 많이 기대돼? 나도 정말 기대돼!`,
        '잠시 후에 꼭 나를 봐줘야 해! 춤도 열심히 출 거니까!',
        '다들 준비가 된 것 같아! 나도 흥분되기 시작했어!',
      ];
      if (era.get('love:52') >= 75) {
        talk_arr.push(
          `나도 다른 사람들에게 지지 않을 거야! 반드시, 반드시 ${callname}를 푹 빠지게 만들 테니까!`,
        );
      }
      if (era.get('love:52') === 100) {
        talk_arr.push(`${callname}! 이따가 무대 위에서도 계속 우라라만 봐줘야 해!`);
      }
      await urara.say_and_wait(get_random_entry(talk_arr));
    } else if (extra_flag.rank <= 5) {
      await print_event_name('레이스 입상!', urara);
      const talk_arr = [
        '다들 정말 대단하네! 하지만 다음에는 절대 지지 않을 거야!',
        '비록 1등은 못 했지만 역시 즐거웠어! 다음에 또 달리자!',
        `헤헤～ 이번에는 1등을 못 했지만 계속 노력할게. ${callname}도 너무 슬퍼하지 마!`,
      ];
      switch (extra_flag.rank) {
        case 2:
          talk_arr.push(`봤어 ${callname}? 내가 무려 2등이라구──!`);
          break;
        case 3:
          talk_arr.push('나 3등 했어! 대단하지!');
      }
      await urara.say_and_wait(get_random_entry(talk_arr));
      await era.printAndWait([
        '사람들의 축하 속에서, ',
        urara.get_colored_name(),
        '는 여전히 미소를 띤 채 빠른 걸음으로 ',
        me.get_colored_name(),
        '이(가) 있는 울타리 곁으로 달려왔다.',
      ]);
      await urara.say_and_wait(
        '헤헤～ 다 같이 레이스하는 건 역시 즐거워. 그리고 정말로 내가 강해진 게 느껴져!',
      );
      await urara.say_and_wait('비록 지금의 우라라는 1등을 하기엔 역시 조금 부족하지만……');

      await urara.say_and_wait([callname, '는 어떻게 생각해? 이번에 나 정말 조금밖에 안 남았었어!']);
      era.printButton('「수고했어 우라라, 이미 충분히 잘했어.」', 1);
      era.printButton('「일단 좀 쉬자. 이번엔 어땠어?」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait([
          '고마워 ',
          callname,
          '! 하지만 이번에는 왠지 좀 아쉬워. 어디가 부족했던 걸까?',
        ]);
        await urara.say_and_wait(
          '그래도 지금 페이스대로 노력하면, 다음엔 1등 할 수 있겠지!',
        );
      } else {
        await urara.say_and_wait(
          '이번엔 정말 즐겁게 달렸어! 그리고 점점 모두를 따라잡고 있어! 아주 조금만 더 남았어!',
        );
        await urara.say_and_wait([
          '하지만 지금 ',
          callname,
          '의 의견을 묻는 건 너무 빠른가? 그럼 돌아가서 말해줄래?',
        ]);
      }
      era.printButton('「그럼, 돌아가서 같이 다음 대책을 세워보자.」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 알겠어! 우라라도 더 열심히 할게, 다음번 1등을 위해서!',
      );
    } else if (extra_flag.rank <= 10) {
      await print_event_name('레이스 패배!', urara);
      await urara.say_and_wait(
        get_random_entry([
          '다들 정말 대단하네! 하지만 다음에는 절대 지지 않을 거야!',
          '비록 1등은 못 했지만 역시 즐거웠어! 다음에 또 달리자!',
          `헤헤～ 이번에는 1등을 못 했지만 계속 노력할게. ${callname}도 너무 슬퍼하지 마!`,
        ]),
      );
      await era.printAndWait([
        '비틀거리며 ',
        me.get_colored_name(),
        '곁으로 다가온 ',
        urara.get_colored_name(),
        '는 피로 때문인지 땀방울이 맺힌 미소가 조금은 억지스러워 보였다.',
      ]);
      await urara.say_and_wait('결국 이번에도 져버렸네. 왠지 좀 부끄러워졌어……');
      await urara.say_and_wait(
        '내가 『오늘은 다들 정말 빠르네～』라고 생각하던 찰나에, 다음 순간 바로 추월당해버렸어!',
      );
      await urara.say_and_wait(
        '그래도 들었어! 우라라를 향한 응원 소리가 계속 이어졌는걸!',
      );

      await urara.say_and_wait(
        '노력해서 결승선까지 오긴 했지만, 우라라가 과연 모두의 기대에 보답했을까……',
      );
      era.printButton('「낙담하지 마, 이번에도 충분히 잘했으니까.」', 1);
      era.printButton('「다음에는 성과로 그들에게 보답해주자.」', 2);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '의 도움으로 수건을 써서 얼굴의 땀을 닦아내며, 작은 ',
        urara.get_uma_sex_title(),
        '는 ',
        me.get_colored_name(),
        '의 격려에 힘차게 고개를 끄덕였다.',
      ]);
      await urara.say_and_wait(
        '맞아! 그냥 한 번 졌을 뿐이야. 계속 달릴 수 있다면 문제없어. 다음 레이스는 이길 수 있도록 노력할래!',
      );
      await era.printAndWait([
        '다음 질주가 찾아오기 전, ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 「다음에는 반드시 모두를 추월하겠다」는 약속을 나눴다.',
      ]);
      await urara.say_and_wait(
        '헤헤～ 사람들이 패배에 익숙해지는 건 좋지 않다고 하지만, 적어도 우라라는 계속 달릴 수 있어!',
      );
    } else {
      await print_event_name('다음엔 지지 않아!', urara);
      await urara.say_and_wait('달리는 건 정말 즐겁지만, 역시 조금 분하네……');

      await era.printAndWait([
        '풀 죽은 모습으로 ',
        me.get_colored_name(),
        '의 곁에 붙어 있는 오늘의 ',
        urara.get_colored_name(),
        '는 레이스 패배 때문인지 평소의 미소를 잃은 듯 보였다.',
      ]);
      await urara.say_and_wait('우라라가 또 졌구나…… 이번엔 꼭 괜찮을 줄 알았는데……');
      await urara.say_and_wait(
        '레이스는 즐겁지만, 1등을 했을 때의 기분은 역시 다른걸!',
      );
      await urara.say_and_wait('가슴이 뜨거우면서도 답답해. 한 번만 더 달릴 수 있다면 좋을 텐데……');

      urara.say([callname, ', 이럴 때는 어떻게 해야 이길 수 있어?']);
      era.printButton('「마음을 추스르고, 다음번에 이 분함을 승리로 되찾아오자.」', 1);
      era.printButton('「서두르지 마. 일단 돌아가서 훈련부터 시작하자.」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait(
          '응! 속상한 마음을 투지로 바꾸면 된다고 다들 그랬어!',
        );
        await urara.say_and_wait([
          '이길 때까지 절대 방심하면 안 돼! ',
          callname,
          '도 같이 나쁜 습관을 고쳐보자!',
        ]);
        await era.printAndWait([
          '결과적으로 돌아온 후, 서로를 독려하기 위해 ',
          me.get_colored_name(),
          '의 간식 또한 ',
          urara.get_colored_name(),
          '에 의해 줄어들고 말았다.',
        ]);
      } else {
        await urara.say_and_wait(
          '듣고 보니 그래. 지금부터 노력하면 다음엔 꼭 이길 수 있어!',
        );
        await urara.say_and_wait([
          '그러니까 ',
          callname,
          ', 지금 빨리 돌아가자! 서두르면 오늘 바로 훈련을 계속할 수도 있을지 몰라!',
        ]);
        await era.printAndWait([
          '결과적으로 돌아온 후, ',
          urara.get_colored_name(),
          '는 정말로 즉시 ',
          me.get_colored_name(),
          '을(를) 데리고 추가 훈련을 진행했다.',
        ]);
      }
    }
  }

  async race_start(urara, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        urara,
        me,
        get_chara_talk(52, chara_colors[1]),
        callname,
        new UraraEduMarks(),
        hook,
      ))
    ) {
      if (extra_flag.race < 0) {
        await print_event_name('무사의 떨림', urara);
        await urara.say_and_wait([
          '오──! ',
          callname,
          '! 오늘 나 기운이 펄펄 넘쳐!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 곁에 서서, ',
          urara.get_colored_name(),
          '는 흥분된 모습으로 전방을 응시했다.',
        ]);

        era.printButton('「이따가 힘내서 가보자고!」', 1);
        era.printButton('「응, 사람들에게 네 성장을 보여주렴.」', 2);
        await era.input();

        await urara.say_and_wait('좋아! 모두의 기대에 꼭 보답할게!');
        await era.printAndWait([
          urara.get_colored_name(),
          '는 신나서 앞으로 폴짝 뛰어오르더니, 이내 경기장으로 돌진했다.',
        ]);
      } else {
        await print_event_name('레이스 전 격려', urara);
        const talk_arr = [
          '좋아! 참가한다──!',
          '다들 엄청 대단해 보여! 그럼 우라라도 질 수 없지!',
          `${callname}! 이번에도 내 달리는 모습을 잘 지켜봐 줘!`,
          '그냥 평소처럼 달리면 되는 거지? 알겠어!',
          `걱정 마 ${callname}, 필사적으로 달리면 분명 해낼 수 있을 거야!`,
        ];
        switch (era.get('cflag:52:컨디션')) {
          case -1:
            talk_arr.push('많은 레이스에 나갈 수 있어서 기쁘긴 한데, 지금 몸이 너무 무거워……');
            break;
          case -2:
            talk_arr.push('또 레이스구나…… 저, 저기…… 열심히 할게……');
        }
        await get_chara_talk(52).say_and_wait(get_random_entry(talk_arr));
      }
    }
  }

  async school_atrium(urara, me, callname, hook, extra_flag, event_object) {
    if (school_atrium_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await school_atrium_handlers[event_object.arg](
        urara,
        me,
        callname,
        flags,
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return !ret;
    }
  }

  async train() {
    const talk_arr = [
      '나한테 맡겨줘! 가자!',
      `오! 가자 ${sys_get_callname(52, 0)}!`,
      '이제 열심히 시작해볼까!',
      '이번엔 왠지 잘될 것 같아! 시작한다!',
      '좋아! 우라라! 힘내자!',
    ];
    return get_chara_talk(52).say_and_wait(get_random_entry(talk_arr));
  }

  async train_fail(urara, me, callname, hook, extra_flag) {
    await urara_train_fail(urara, me, callname, hook, extra_flag);
  }

  async train_success_add(urara, me, callname) {
    const opera = get_chara_talk(15);
    const u_call_o = sys_get_colored_callname(52, 15);
    await era.waitAnyKey();
    await print_event_name('추가 자율 트레이닝!', urara);
    await era.printAndWait([
      '오늘의 훈련이 끝난 후, ',
      urara.get_colored_name(),
      '와 ',
      me.get_colored_name(),
      '은(는) 함께 훈련장 트랙 옆으로 돌아와 휴식을 취했다.',
    ]);
    await urara.say_and_wait([
      '오늘도 정말 열심히 연습했네! ',
      callname,
      ', 이따가 같이 식당에…… 응? 저기 있는 사람?',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 귀를 쫑긋거리는 방향을 따라, ',
      me.get_colored_name(),
      '은(는) 훈련장 한가운데 서 있는 또 다른 형체를 보았다.',
    ]);
    await urara.say_and_wait([
      '아! ',
      u_call_o,
      '이다! ',
      u_call_o,
      '도 이제 쉬러 가는 거야?',
    ]);
    await era.printAndWait([
      '작은 ',
      urara.get_uma_sex_title(),
      '가 상대 앞에 멈춰 서자, 행동거지가 연극적인 패왕도 ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '쪽으로 몸을 돌렸다.',
    ]);
    await opera.say_and_wait([
      '오! 이게 누구야, 우라라와 ',
      sys_get_callname(15, 0),
      '아냐? 나는 지금 막 달리러 가려던 참이었다! 금성과 함께!',
    ]);
    await urara.say_and_wait([
      '금성과 함께 달린다고? 정말 ',
      u_call_o,
      '다운걸. 게다가 엄청 대단해 보여!',
    ]);
    if (era.get('cflag:15:명예의전당')) {
      await opera.say_and_wait(
        '글쎄, 어떠려나? 번뜩이는 별빛 아래에서 다시금 광채를 닦기 위함일까? 아니면 나태함 뒤의 미망을 쫓기 위함일까?',
      );
      await urara.say_and_wait(
        '그렇구나, 우라라도 다 안다구! 어른에게는 어른만의 고충이 있는 법이지～',
      );
    } else {
      await opera.say_and_wait(
        '그래! 별의 광채로 나의 미모와 이 다리를 연마할 생각이다! 내일의 찬란함을 위해!',
      );
      await urara.say_and_wait([
        '그렇구나, 우라라는 알겠어. 노력하는 ',
        u_call_o,
        '은 역시 대단해!',
      ]);
    }
    await urara.say_and_wait([
      '음…… 그렇다면 ',
      callname,
      ', 시간도 좀 남았는데 우리도 한번 해볼까?',
    ]);
    era.printButton('「가자, 한번 해보자.」', 1);
    era.printButton('「푹 쉬는 것도 중요하다구?」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) ',
        urara.get_colored_name(),
        '에게 대답하는 것을 듣자, ',
        opera.get_colored_name(),
        '도 즉시 의도를 파악하고는 손가락을 튕겼다.',
      ]);
      await opera.say_and_wait([
        `환영해! 하지만 가장 빛나는 왕좌${era.get('love:15') >= 90 ? '와 가장 사랑하는 권속': ''}을(를) 양보할 생각은 없으니까── 전력을 다해 뺏으러 오도록!`,
      ]);
      await urara.say_and_wait([
        '응! ',
        u_call_o,
        '이 그렇게 말한다면 우라라도 전력으로 따라잡을 거야!',
      ]);
      await opera.say_and_wait([
        '하── 하하하! 오늘 런닝은 꽤나 즐겁겠는걸! 안 그런가, ',
        sys_get_callname(15, 0),
        '?',
      ]);
      await era.printAndWait([
        '그렇게 예상대로 ',
        opera.get_colored_name(),
        '의 보조를 맞추지는 못했지만, ',
        urara.get_colored_name(),
        '는 끈질기게 추가 훈련의 마지막까지 버텨냈다.',
      ]);
      return true;
    } else {
      await urara.say_and_wait([
        '에? 그래? 난 ',
        callname,
        '가 당연히 찬성할 줄 알았는데?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 의문을 제기하자마자, 곧이어 ',
        opera.get_colored_name(),
        '의 이해심 깊은 설득이 이어졌다.',
      ]);
      await opera.say_and_wait(
        '바로 그거야! 휴식 없이 광채가 흐려지게 둘 순 없지. 나도 마찬가지다, 어제는 느긋하게 장미 꽃잎 목욕을 즐겼거든!',
      );
      await urara.say_and_wait(
        '오! 알겠어! 강해지기 위해 푹 쉴게! 그런데, 장미 꽃잎 목욕……?',
      );
      await era.printAndWait([
        '결국 ',
        opera.get_colored_name(),
        '가 나중에 ',
        urara.sex,
        '에게 장미를 좀 나눠주겠다고 약속했고, ',
        urara.get_colored_name(),
        '는 ',
        opera.get_colored_name(),
        '에게 손을 흔들며 작별 인사를 한 뒤 ',
        me.get_colored_name(),
        '을(를) 이끌고 식당으로 달려갔다……',
      ]);
    }
    return false;
  }

  async week_end(urara, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      return await week_end_handlers[event_object.arg](
        urara,
        me,
        get_chara_talk(52, chara_colors[1]),
        callname,
        new UraraEduMarks(),
        event_object,
      );
    }
  }

  async week_start(urara, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object.arg]) {
      return await super.week_start(
        urara,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    return await week_start_handlers[event_object.arg](
      urara,
      me,
      get_chara_talk(52, chara_colors[1]),
      callname,
      new UraraEduMarks(),
      event_object,
    );
  }
};