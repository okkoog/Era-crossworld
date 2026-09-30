/**
 * @file 마야노 탑건 - 育成
 * @author 黑奴二号
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_enum, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-24/week-start-1'),
  require('#/event/edu/edu-events-24/week-start-2'),
].forEach((f) => f(week_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-24/week-end')(week_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} */
const office_study_handlers = {};

require('#/event/edu/edu-events-24/office-study')(office_study_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} */
const school_atrium_handlers = {};

require('#/event/edu/edu-events-24/school-atrium')(school_atrium_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} */
const back_school_handlers = {};

require('#/event/edu/edu-events-24/back-school')(back_school_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} */
const out_start_handlers = {};

require('#/event/edu/edu-events-24/out-start')(out_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceStartParams):Promise>} */
const race_start_handlers = {};

require('#/event/edu/edu-events-24/race-start')(race_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-24/race-end-1'),
  require('#/event/edu/edu-events-24/race-end-2'),
].forEach((f) => f(race_end_handlers));

module.exports = class extends CustomizedEdu {
  async back_school(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (back_school_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await back_school_handlers[event_object.arg](
        maya,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
      flags.wait_flag && (await era.waitAnyKey());
    }
  }

  async office_study(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (office_study_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await office_study_handlers[event_object.arg](maya, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async out_church(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:24:축제이벤트표시', 0);
    let wait_flag = false;
    await print_event_name('새해 참배', maya);
    await era.printAndWait([
      '운명의 3년째.',
      maya.get_colored_name(),
      '은 올해 시니어 시즌에 도전한다.',
    ]);
    era.printButton('「시니어 시즌」', 1);
    await era.input();
    await era.printAndWait('──올해는 분명 중요한 한 해가 될 것이다.');
    await maya.say_and_wait(['헤헤♪ ', callname, ', 그렇게 심각한 표정 짓지 마~♪']);
    await maya.say_and_wait('간만에 신사로 데이트하러 온 거잖아? 웃어봐☆');
    era.printButton('「꽤 여유롭네」', 1);
    await era.input();
    await maya.say_and_wait('아하하, 그치만 정말 즐거운걸!');
    await maya.say_and_wait('흐음~ 마야는 말이야, 벌써 올해 목표를 정했어♪');
    await maya.say_and_wait([
      '나 말이야, 반드시…… 전력을 다하는 ',
      sys_get_colored_callname(24, 16),
      '을 뛰어넘을 거야!',
    ]);
    await maya.say_and_wait('이것저것 많이 생각해 봤지만, 나한테는──');
    await maya.say_and_wait('──이게 지금 가장 이루고 싶은 일이야!');
    era.printButton('「너라면 분명 해낼 수 있을 거야」', 1);
    await era.input();
    await maya.say_and_wait('히히…… 마야도 그렇게 생각해♪');
    await era.printAndWait([
      '──',
      me.get_colored_name(),
      '은(는) ',
      maya.sex,
      '의 미소를 보며 다시 한번 생각했다.',
    ]);
    era.println();
    era.printButton(
      '（그녀가 계속 건강하고 활기차기를）（체력 +300）',
      1,
    );
    era.printButton(
      '（그녀가 많은 것을 배우고 성장하기를）（전 능력치 +10）',
      2,
    );
    era.printButton(
      '（그녀가 멋진 어른이 되기를）（스킬 포인트 +70）',
      3,
    );
    const ret = await era.input();
    await maya.say_and_wait(['응? ', callname, ', 방금 뭐라고 했어?']);
    era.printButton('「방금 기도했어」', 1);
    await era.input();
    switch (ret) {
      case 1:
        await maya.say_and_wait('엣!? 치사해, 치사하다고! 혼자서 먼저 기도하기 없기!');
        await maya.say_and_wait([
          '정말이지, 다시 해! ',
          callname,
          '도 나랑 같이 기도해야 해!',
        ]);
        await maya.say_and_wait('그러고 나서 기도 끝나면 우리 계속 데이트하는 거다♪ 알았지☆');
        await era.printAndWait([
          '신년 참배를 마치고 돌아오는 길에, ',
          me.get_couple_title(),
          '은(는) 노점 데이트를 즐긴 뒤 귀가했다.',
        ]);
        wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"체력":300}'),
        );
        break;
      case 2:
        await maya.say_and_wait('하하, 또 그런 표정 짓는다.');
        era.printButton('「……어떤 표정?」', 1);
        await era.input();
        await maya.say_and_wait('헤헤, 그러니까……');
        await maya.say_and_wait(
          '『내가 마야노 탑건을 위해 뭘 할 수 있을까』 하는 표정. 그리고 『마야노 탑건을 소중히 해줘야지』 하는 표정!',
        );
        await maya.say_and_wait('그런 표정을 보면 마야는 기운이 불끈불끈 솟아나♪');
        await maya.say_and_wait('후후, 좋아! 올해 첫 트레이닝을 하러 가자☆');
        await era.printAndWait([
          '그리하여 이날, ',
          me.get_colored_name(),
          '은(는) ',
          maya.get_colored_name(),
          '과 함께 새해 첫 트레이닝을 진행했다.',
        ]);
        wait_flag = get_attr_and_print_in_event(24, new Array(5).fill(10), 0);
        break;
      case 3:
        await maya.say_and_wait(['후후후…… ', callname, ', 미숙해, 아직 멀었어!']);
        await maya.say_and_wait([
          '마야는 멋지고 성숙한 ',
          maya.get_phy_sex_title(),
          '이 될 거라구~☆',
        ]);
        era.printButton('「뭐가 다른데?」', 1);
        await era.input();
        await maya.say_and_wait([
          '완전 다르지~! 정말~!! 『어른』이랑 『성숙한 ',
          maya.get_phy_sex_title(),
          '』의 차이는 말이야……',
        ]);
        await maya.say_and_wait('……뭐가 다르더라?');
        era.printButton('「역시 모르잖아……」', 1);
        await era.input();
        await maya.say_and_wait(
          '아와와!? 아냐, 아니라고!! 이 둘은 정말 다르단 말이야~!!',
        );
        await era.printAndWait([
          '며칠 뒤, ',
          me.get_colored_name(),
          '은(는) 도서관에서 ',
          maya.get_colored_name(),
          '이 사전을 뚫어져라 쳐다보는 것을 발견했다.',
        ]);
        wait_flag = get_attr_and_print_in_event(24, [], 70);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_start(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (out_start_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await out_start_handlers[event_object.arg](maya, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async race_end(maya, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](maya, me, callname, extra_flag))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('레이스 승리!', maya);
        await maya.say_and_wait('Victory☆ 승리한 마야노 탑건, 영광의 개선!');
        era.printButton('「축하해!」', 1);
        await era.input();
        await maya.say_and_wait('헤헤! 즐거웠어?? 마야가 달리는 모습에 두근거렸어??');
        era.printButton('「당연하지」', 1);
        era.printButton('「아직 부족해」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait('와☆ 다행이다, 다행이야!');
          await maya.say_and_wait('그치만 마야는 발견했어♪ 우린 더 많이 두근거릴 수 있다는 걸!');
          await maya.say_and_wait('그·러·니·까! 다음 레이스도…… 각오해야 해☆');
        } else {
          await maya.say_and_wait('……!!');
          await maya.say_and_wait([
            callname,
            '☆ 정말 최고야! 마야도 똑같이 생각했어~!',
          ]);
          await maya.say_and_wait(
            '있지 있지! 마지막 직선…… 골 라인이 엄청나게 눈부셨어!',
          );
          await maya.say_and_wait(
            '하지만…… 골인하고 나니까, 그 눈부심이랑 두근거림이 사라져 버렸어……',
          );
          await maya.say_and_wait('그래서 깨달았지! 마야는 더 두근거릴 수 있어!');
          await maya.say_and_wait([
            '그·러·니·까! ',
            callname,
            ', 내가 훨씬 더~ 많이 두근거리게 해줄게♪',
          ]);
        }
      } else if (extra_flag.rank <= 5) {
        await print_event_name('레이스 입상', maya);
        await maya.say_and_wait([
          '아, ',
          callname,
          ', 드디어 왔구나! 레이스 끝났으니까 얼른 가자~!',
        ]);
        await maya.say_and_wait('있지 있지, 경기장 한정 디저트 같이 먹고 싶어♪');
        era.printButton('「그전에 레이스 복기부터……」', 1);
        await era.input();
        await maya.say_and_wait(
          '에? 이번엔 확실히 졌지만, 다음엔 이길 것 같은걸??',
        );
        await maya.say_and_wait(
          '다들 얼마나 강한지 알았고, 코스 잡는 법도 배웠으니까♪ 괜찮아, 괜찮아!',
        );
        era.printButton('「기대할게」', 1);
        era.printButton('「……연습하자!」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait(
            '나만 믿으라구☆ 기대 이상의 모습을 보여줄 테니까! 왜냐면──',
          );
          await maya.say_and_wait('──좋은 의미로 기대를 배신하는 거, 그게 바로 성숙한 여자니까……');
          await maya.say_and_wait('책에 그렇게 쓰여 있었어♪');
          await maya.say_and_wait([
            '다음엔 꼭 이겨서 ',
            callname,
            '이 내 말을 듣게 만들 거야! 꼭!',
          ]);
        } else {
          await maya.say_and_wait([
            '으음~ ',
            callname,
            '이 그렇게까지 말한다면 열심히 할게……',
          ]);
          await maya.say_and_wait([callname, '은 걱정이 너무 많다니까??']);
          era.printButton('「네가 1등 하는 걸 보고 싶으니까」', 1);
          await era.input();
          await maya.say_and_wait('……에? 그러니까, 나를 위해서야?');
          await maya.say_and_wait('야☆ 나 엄청 사랑받고 있네!');
          await maya.say_and_wait('알았어! 마야, 힘낼게♪');
        }
      } else if (extra_flag.rank <= 10) {
        await print_event_name('레이스 패배', maya);
        await maya.say_and_wait('아~ 졌다~ 이길 줄 알았는데.');
        era.printButton('「다른 애들도 대단했으니까」', 1);
        await era.input();
        await maya.say_and_wait('……다른 애들?');
        await maya.say_and_wait('긴급 사태! 안 돼 안 돼, 지금 그런 말 하면 안 된다구~~!!');
        await maya.say_and_wait(['난 ', callname, '의 눈에 오직 나만 담겼으면 좋겠어!']);
        await maya.say_and_wait(
          '있지 있지! 그렇게 말해도, 역시 LOVE☆마야노 탑건…… 맞지!? 그치!!',
        );
        era.printButton('「당연하지!」', 1);
        era.printButton('「……앞으로의 활약에 달렸을지도」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait('휴…… 살았다……');
          await maya.say_and_wait('……그러니까 말이야, 다음 레이스에선 1등 할 거야.');
          await maya.say_and_wait('그러니까…… 응원해 줘야 해!');
          await maya.say_and_wait(
            '꼭…… 반드시 내가 다른 누구보다 대단하다는 걸 알게 해줄게!',
          );
        } else {
          await maya.say_and_wait(['흥~! ', callname, ' 너무해!']);
          await maya.say_and_wait('좋아! 다음 레이스에선 진짜 엄청난 성적을 낼 거야!');
          await maya.say_and_wait(
            '내가 얼마나 멋진 여자인지, 누구보다 귀여운지 깨닫게 해줄 테니까!',
          );
          await maya.say_and_wait('마음을 뺏어버리는 건 내 전문이라구!!');
        }
      } else {
        await print_event_name('다음엔 지지 않아!', maya);
        await maya.say_and_wait(['또 졌어…… 어떡해, ', callname, '…… 마, 마야는……']);
        era.printButton('「마야……」', 1);
        await era.input();
        await maya.say_and_wait('──완~전 흥분돼~~!!');
        era.printButton('「에!?」', 1);
        await era.input();
        await maya.say_and_wait('뭐랄까, 엔진이 걸린 느낌이야!');
        await maya.say_and_wait(
          '될 줄 알았던 게 안 되다니! 가슴이 터질 것처럼 두근거려!',
        );
        await maya.say_and_wait('좋아! 이대로 『슈웅~!』 하고 트레이닝하러 가버릴까!?');
        era.printButton('「일단 좀 진정해」', 1);
        era.printButton('「트레이닝하자!」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait('에에~~~~~~~~!?');
          await maya.say_and_wait('엔진도 다 달궈졌고 언제든 이륙 준비 완료인데!?');
          era.printButton('「무모한 이륙은 실속의 원인이야!」', 1);
          await era.input();
          await maya.say_and_wait('으으! 확실히! 그러다간 추락하겠지……!');
          await maya.say_and_wait('위험해 위험해! 엔진부터 확실히 정비해야겠지…… 그치!');
          await era.printAndWait([
            '그 후, ',
            me.get_colored_name(),
            '은(는) ',
            maya.get_colored_name(),
            '과 함께 다음 레이스를 위한 준비를 시작했다.',
          ]);
        } else {
          await maya.say_and_wait(['역시 ', callname, '☆! 제일 좋아해!']);
          await maya.say_and_wait('좋아! 마야의 진심을 보여주겠어!');
          await maya.say_and_wait([
            '멋진 곡예비행을 보여줄 테니까, ',
            callname,
            ', 떨어지지 않게 조심해야 해…… 알았지♪',
          ]);
          await era.printAndWait([
            '자신의 선언대로 ',
            maya.get_colored_name(),
            '은 전력을 다해 트레이닝에 임했고…… 실력이 더욱 정교해졌다.',
          ]);
        }
      }
    }
  }

  async race_start(maya, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        maya,
        me,
        callname,
        extra_flag,
      ))
    ) {
      if (
        Math.random() <
        (0.2 * era.get('base:24:체력')) / era.get('maxbase:24:체력')
      ) {
        await print_event_name('레이스 직전', maya);
        await era.printAndWait([
          '레이스 전 대기실을 가보니…… ',
          maya.get_colored_name(),
          '이 머릿속으로 레이스 시뮬레이션을 하는 듯했다.',
        ]);
        await maya.say_and_wait('그러고 나서 앞에 있는 사람이 오면 『슈웅!』 하고 돌파해서……');
        era.printButton('（……엄청난 집중력이네）', 1);
        await era.input();
        await maya.say_and_wait(['……엣!? ', callname, '!?']);
        await maya.say_and_wait(
          '아와와, 깜짝이야! 전혀 몰랐어! 어라 어라!?',
        );
        era.printButton('「방금 엄청 집중하고 있었어」', 1);
        await era.input();
        await maya.say_and_wait('헤헤, 응! 아까부터 심장이 계속 쿵쾅거려.');
        await maya.say_and_wait(['그치만…… 이제 곧 ', callname, ' 차례야!']);
        await maya.say_and_wait('내가 달리는 모습에 푹 빠지게 만들어 줄게♪');
      } else {
        return await super.race_start(maya, me, callname, hook, extra_flag);
      }
    }
  }

  async school_atrium(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (school_atrium_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await school_atrium_handlers[event_object.arg](maya, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async train_fail(maya, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(maya, me, callname, hook, extra_flag);
    }
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      await print_event_name('무리 금지!', maya);
      await maya.say_and_wait('헤헤, 실수했다~');
      await maya.say_and_wait([
        '그치만 ',
        callname,
        '도 너무 호들갑이라니까~ 그렇게 심한 상처도 아닌데!',
      ]);
      await maya.say_and_wait(
        '자, 얼른 다시 훈련하러 가자! 마야는 이제 어른이니까 이 정도 상처쯤은 아무것도──',
      );
      await maya.say_and_wait('……아야야~~!!');
      era.printButton('「괜찮아!?」', 1);
      await era.input();
      await maya.say_and_wait('괜찮아…… 아파도 아프지 않다고 말하는 게 어른스러운 거야.');
      await maya.say_and_wait('그러니까 난 아프다고 안 할 거야!');
      await maya.say_and_wait('어린애처럼 굴면 촌스럽잖아…… 마야는 그러기 싫어~~!');
      era.printButton('「그럼 『어른』답게 행동해」', 1);
      era.printButton('「전혀 안 촌스러워!」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await maya.say_and_wait('어른스러운 거……? 얌전히 쉬는 걸 말하는 거야?');
        await maya.say_and_wait('과연…… 그런 것도 『어른』이구나.');
        await maya.say_and_wait(
          '……알았어! 마야는 하나도 안 아프지만, 어른답게 얌전히 쉴게.',
        );
        await maya.say_and_wait('지, 진짜 하나도 안 아프지만……');
        await era.printAndWait('그렇게 겨우 마야노 탑건을 쉬게 만들었다.');
        era.println();
      } else {
        if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
          await maya.say_and_wait('……사실은 말이야, 솔직히 다친 데가 엄청 아파.');
          await maya.say_and_wait([
            '그치만, 그치만, ',
            callname,
            '이랑 같이 진지하게 훈련하고 싶었단 말이야……!',
          ]);
          era.printButton('「푹 쉬고 나중에 다시 노력하자」', 1);
          await era.input();
          await maya.say_and_wait('……응!');
          await era.printAndWait(
            '부상이 낫기까지는 시간이 꽤 걸렸지만…… 마침내 건강을 되찾았다.',
          );
        } else {
          await maya.say_and_wait([callname, '…… 그치만……']);
          era.printButton('「무리하다가 상처가 덧나는 게 더 촌스러워」', 1);
          await era.input();
          await maya.say_and_wait('아! 확실히 그렇네!');
          await maya.say_and_wait(
            '……괘, 괜찮아! 조금 아플 뿐이고 이 정도는 안 심해질 거야──',
          );
          await maya.say_and_wait('으으윽~~!! 아파────!!');
          await era.printAndWait(
            '괜찮은 척 고집을 부리다 상처가 악화되어, 결국 며칠 동안 쉬게 되었다……',
          );
        }
      }
    } else {
      await print_event_name('몸조심해!', maya);
      await era.printAndWait([
        '훈련 도중 마야노 탑건이 부상을 입어, ',
        me.get_colored_name(),
        '은(는) 서둘러 ',
        maya.sex,
        '를 보건실로 데려갔다.',
      ]);
      await maya.say_and_wait('아~ 아파! 이러면 트레이닝 못 할지도~');
      era.printButton('「푹 쉬어야 해……!」', 1);
      await era.input();
      await maya.say_and_wait('으응…… 그러는 건 상관없지만……');
      await maya.say_and_wait([
        '만약 ',
        callname,
        '이 날 간호해 주면, 기운이 더 날지도 몰라♪',
      ]);
      era.printButton('「알았어」', 1);
      era.printButton('「너 정말 어린애구나」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await maya.say_and_wait('아핫☆ 정말 신난다~!');
        await maya.say_and_wait('그럼 그럼, 우선 이마로 체온부터 재줘……');
        era.printButton('「체온? 너 다친 거 아니었어?」', 1);
        await era.input();
        await maya.say_and_wait(
          '신경 쓰지 마, 신경 쓰지 마! 두근거리는 느낌으로 아픈 걸 『슈웅~!』 하고 날려버리는 거야──',
        );
        await maya.say_and_wait('아우윽!!!! 이, 이상하네? 진짜로…… 좀 아파.');
        await era.printAndWait([
          '당황해서 들뜬 ',
          maya.get_colored_name(),
          '을 보살핀 끝에, 겨우 ',
          maya.sex,
          '를 얌전히 쉬게 했다……',
        ]);
        era.println();
      } else if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
        await maya.say_and_wait(['……설마, ', callname, '의 취향이 아닌 거야?']);
        await maya.say_and_wait([
          '그럼 그럼, ',
          callname,
          '! 마야가 뭘 해야 『심쿵』할 것 같아~?',
        ]);
        era.printButton('「네가 건강한 게 나한텐 가장 기쁜 일이야」', 1);
        await era.input();
        await maya.say_and_wait('건강……? 내가 건강해지기만 하면 기뻐할 거야?');
        await maya.say_and_wait('헤헤, 헤헤헤…… 헤헤헤헤헤!');
        await maya.say_and_wait('알았어! 푹 쉬고 금방 건강해질게~!');
        await maya.say_and_wait('그러고 나서! 그때 다시 같이 트레이닝하자☆');
        await era.printAndWait(
          '자신의 선언대로 ',
           maya.get_colored_name(),
          '은 푹 쉬었고…… 건강하게 트레이닝을 재개했다!',
        );
      } else {
        await maya.say_and_wait('에에!? 그런 거 아냐! 이건 『어른』의 어리광이라구~!');
        await maya.say_and_wait(
          '이상하네, 책에는 이 기술이면 『심장 저격☆』이라고 적혀 있었는데……',
        );
        await maya.say_and_wait(
          '알았다! 열이 안 나서 그런 거야! 내가 열이라도 났으면 책에 나온 것처럼──',
        );
        era.printButton('「얌·전·히·쉬·어!」', 1);
        await era.input();
        await maya.say_and_wait('으으…… 알았어~~');
        await era.printAndWait([
          maya.get_colored_name(),
          '은 못마땅한 표정이었지만, 결국 겨우 ',
          maya.sex,
          '를 얌전히 쉬게 했다……',
        ]);
      }
    }
  }

  async train_success_add(maya, me, callname) {
    await print_event_name('추가 자율 트레이닝', maya);
    const teio = get_chara_talk(3);
    await maya.say_and_wait('있지 있지! 트레이닝도 끝났는데~ 마야랑 좋은 곳에 가지 않을래?');
    era.printButton('「좋은 곳이라니 어디?」', 1);
    await era.input();
    await maya.say_and_wait(
      '있잖아 있지! 엄청나게 반짝이는 야경을 볼 수 있는 곳이 있는데──',
    );
    await teio.say_and_wait([
      '영차, 영차…… 어라? ',
      sys_get_colored_callname(3, 24),
      '이잖아~!',
    ]);
    await maya.say_and_wait([
      '아, ',
      sys_get_colored_callname(24, 3),
      '! 안녕!',
    ]);
    await teio.say_and_wait('딱 마침 찾고 있었어! 나 오늘 좀 늦게 돌아갈 것 같다고 말해주려고!');
    await maya.say_and_wait([
      '와☆ 외박이라니, 뭔가 진전이 있나 보네~! ',
      sys_get_colored_callname(24, 3),
      '도 어른이구나~!',
    ]);
    await teio.say_and_wait([
      '응! 아까 ',
      sys_get_colored_callname(3, 17),
      '의 레이스를 보니까, 갑자기 막 뛰고 싶어져서!',
    ]);
    await teio.say_and_wait([
      sys_get_colored_callname(3, 24),
      '가 말하는 식으로 표현하자면…… 엄청 반짝반짝거린다고 해야 하나?',
    ]);
    await maya.say_and_wait([
      '와아……! 뭔지 알아 뭔지 알아! ',
      sys_get_colored_callname(24, 17),
      '의 달리는 모습은 진짜 멋지지!',
    ]);
    await maya.say_and_wait('으으~~ 나도 막 흥분되기 시작했어……');
    await maya.say_and_wait([
      callname,
      ', 역시 야경은 다음에 보자! 마야는 지금 당장 반짝거리고 싶어!',
    ]);
    era.printButton('「나도 같이할게!」', 1);
    era.printButton('「쉬는 것도 중요해」', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait(['헤헤, 역시 ', callname, '!']);
      await teio.say_and_wait('그럼 같이 병주 연습하자! 그래야 나도 투지가 솟을 것 같으니까!');
      await maya.say_and_wait('문제없지! 마야, 이륙합니다☆');
      await era.printAndWait([
        maya.get_colored_name(),
        '은 전력을 다해 추가 트레이닝에 임했다.',
      ]);
      return true;
    } else {
      await maya.say_and_wait(
        '응! 그것도 그래! 피부처럼, 쉬어야 광채가 나는 법이니까!',
      );
      await maya.say_and_wait(
        '알았어! 그럼 반짝이는 야경을 보면서 마야의 눈부심을 충전해야지♪',
      );
      await teio.say_and_wait('그럼 난 먼저 갈게! 통금 전엔 돌아올 거야~~!');
      await era.printAndWait([
        '그리하여 ',
        me.get_colored_name(),
        '은(는) ',
        maya.get_colored_name(),
        '과 함께 야경을 감상하며 ',
        maya.sex,
        '의 몸을 푹 쉬게 해주었다.',
      ]);
    }
    return false;
  }

  async week_end(maya, me, callname, hook, extra_flag, event_object) {
    if (!week_end_handlers[event_object?.arg]) {
      return await super.week_end(
        maya,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_end_handlers[event_object.arg](
        maya,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }

  async week_start(maya, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return await super.week_start(
        maya,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_start_handlers[event_object.arg](
        maya,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};