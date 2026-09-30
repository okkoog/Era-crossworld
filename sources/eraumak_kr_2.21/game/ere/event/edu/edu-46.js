/**
 * @file 스마트 팔콘 - 育成
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const falcon_crazy_fan_end = require('#/event/edu/edu-events-46/crazy-fan-end');
const falcon_race_end = require('#/event/edu/edu-events-46/race-end');
const falcon_race_start = require('#/event/edu/edu-events-46/race-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_names, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,FalconEduMarks,EventObject):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-46/week-start-0'),
  require('#/event/edu/edu-events-46/week-start-1'),
  require('#/event/edu/edu-events-46/week-start-2'),
].forEach((f) => f(week_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,FalconEduMarks,EventObject):Promise>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-46/week-end'),
  require('#/event/edu/edu-events-46/week-end-1'),
  require('#/event/edu/edu-events-46/week-end-2'),
].forEach((f) => f(week_end_handlers));

module.exports = class extends CustomizedEdu {
  async race_start(falcon, me, callname, hook, extra_flag) {
    return await falcon_race_start(hook, extra_flag);
  }

  async race_end(falcon, me, callname, hook, extra_flag) {
    return await falcon_race_end(hook, extra_flag);
  }

  async week_start(falcon, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg] !== void 0) {
      const flags = { wait_flag: false },
        ret = await week_start_handlers[event_object.arg].call(
          this,
          falcon,
          me,
          callname,
          flags,
          new FalconEduMarks(),
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
    return await super.week_start(
      falcon,
      me,
      callname,
      hook,
      extra_flag,
      event_object,
    );
  }

  async week_end(falcon, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await week_end_handlers[event_object.arg](
        falcon,
        me,
        callname,
        flags,
        new FalconEduMarks(),
        era.get('relation:46:0'),
        era.get('love:46'),
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async train_success(falcon, me, callname, hook, extra_flag) {
    era.print(
      `${falcon.name}의 ${attr_names[extra_flag.train]} 트레이닝이 순조롭게 성공했다……`,
    );
    if (Math.random() < 0.3 * extra_flag.stamina_ratio) {
      await print_event_name('추가 자율 트레이닝', falcon);
      await era.printAndWait(`예정된 계획이 전부 종료된 후`);
      await falcon.say_and_wait(
        `${callname}! 반짝반짝 빛나는 팔코가 보여?`,
      );
      await era.printAndWait(
        `더트 위에서 땀을 흘리며 먼지투성이가 된 ${falcon.name}의 눈동자는 반짝반짝 빛나고 있었다.`,
      );
      await me.say_and_wait(`예정된 계획은 다 순조롭게 끝났어. 팔코, 수고했어.`);
      await falcon.say_and_wait(
        `${callname}도 팔코가 빛나고 있다고 생각해? 다행이야⭐`,
      );
      await era.printAndWait(
        `${me.name}의 손에서 깨끗한 수건을 받아 얼굴의 흙먼지를 닦아내고는, 데이터를 정리하던 ${me.name}에게 슬며시 다가왔다.`,
      );
      await falcon.say_and_wait(
        `응, 저기, ${callname}.`,
      );
      await era.printAndWait(
        `미풍이 길가에 자란 풀을 흔들고, ${falcon.name}의 표정은 석양빛에 가려졌다.`,
      );
      await falcon.say_and_wait(
        `조금만 더 연습해도 될까? 팔코는 아직 이루고 싶은 목표가 있어!`,
      );
      await falcon.say_and_wait(
        `게다가, 우마돌이라면 목표는 조금~ 높게 잡아도 괜찮잖아?`,
      );
      await falcon.say_and_wait(
        `그럼, ${callname}은 어떻게 생각해?`,
      );
      era.printButton(`그렇다면..`, 1);
      await era.input();
      await era.printAndWait(
        `지금 팔코의 컨디션이 좋아서 추가 트레이닝을 할 수는 있지만, 훈련량을 갑자기 늘리면 다음 날 트레이닝에 지장이 생기지 않을까?`,
      );
      await falcon.say_and_wait(`${callname}?`);
      await era.printAndWait(`길가에 핀 작은 풀이라도 쑥쑥 자라기를 갈망하는 걸까?`);
      era.printButton(
        `「그럼 힘내봐, 미래의 우마돌.」`,
        1,
      );
      era.printButton('「......오늘은 여기까지만 하자.」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await falcon.say_and_wait(
          `응! 추가 트레이닝도 잘 부탁해, ${callname}!`,
        );
        era.printButton(
          `팔코가 톱 우마돌의 길로 한 걸음씩 나아가는 걸 지켜볼 수 있어서 나도 기뻐.`,
          1,
        );
        await era.input();
        await me.say_and_wait(`그럼 계속하자.`);
        await era.printAndWait(
          `통금 시간 직전까지 트레이닝을 계속한 끝에, ${me.name}은(는) 더 이상 뛰지 못하는 팔코를 안고 기숙사 입구까지 데려다주었다.`,
        );
      } else {
        await falcon.say_and_wait(`하지만......`);
        await me.say_and_wait(
          `우마돌이 되는 길은 하루아침에 이루어지는 게 아니야. 과도한 훈련은 오히려 독이 될 뿐이야!`,
        );
        await falcon.say_and_wait('에?');
        await me.say_and_wait(
          `오버 트레이닝을 하면 피로 때문에 주의력이 떨어져서 다리를 다치거나 골절될 수도 있어.`,
        );
        await me.say_and_wait(
          `그러니까 ${falcon.name}의 트레이너로서 그런 위험한 일은 허락할 수 없어.`,
        );
        await falcon.say_and_wait(
          `팔코는 정말 바보네, 그렇게 간단한 것도 생각 못 하고.`,
        );
        await era.printAndWait(
          `고개를 숙인 채 ${me.name}을(를) 똑바로 쳐다보지 못하는 팔코를 보며, ${me.name}은(는) 한숨을 내쉬고 ${falcon.sex}의 머리를 쓰다듬어 주었다.`,
        );
        await me.say_and_wait(`일단 트레이닝실로 돌아가서 좀 쉬자.`);
        await falcon.say_and_wait(`응!`);
        await era.printAndWait(
          `그 후 ${me.name}은(는) 트레이닝실에서 팔코의 다리를 마사지해주며 최근 유행하는 트렌드에 대해 이야기를 나누었다.`,
        );
      }
      era.println();
    }
  }

  async train_fail(falcon, me, callname, hook, extra_flag) {
    extra_flag['args'] = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      await print_event_name('무리 금물!', falcon);
      await falcon.say_and_wait(`${callname}.......`);
      await era.printAndWait(`팔코가 훈련 도중 발을 삐끗하고 말았다.`);
      await falcon.say_and_wait(`미안해, 팔코가 너무 지쳐서 그만......`);
      await era.printAndWait(`연이은 게릴라 라이브가 팔코의 체력을 크게 소모시킨 모양이었다.`);
      era.printButton('「당분간 거리 라이브는 중단해야겠어.」', 1);
      era.printButton('「거리 공연을 해볼까?」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await falcon.say_and_wait(`으앙~ 팔코를 기다려주는 팬들은 어떡해?`);
        era.printButton(
          '「이렇게 다친 다리로 억지로 공연하면 팬들도 걱정할 거야.」',
          1,
        );
        await era.input();
        await falcon.say_and_wait('.....그렇네, 당분간은 쉬어야겠어.');
        await falcon.say_and_wait(
          '그럼 기운을 차리기 위해서 트레이닝실에서 아리마 기념 위닝 라이브 영상을 같이 보자!',
        );
        era.printButton('「다친 부위에 힘 들어가지 않게 조심해.」', 1);
        await era.input();
        await falcon.say_and_wait(
          `알았어! ${callname}, 팔코 안아줄래?`,
        );
        era.printButton(`「영차!」`, 1);
        await era.input();
        await falcon.say_and_wait(`우와, 정말 안아줬네.`, true);
        await falcon.say_and_wait(`좋은 냄새도 나고 엄청 가까워……`, true);
        await era.printAndWait(`다리 부상으로 휴식이 필요했기에 컨디션을 회복하기까지는 시간이 좀 걸릴 것 같았다.`);
        era.println();
        hook.args = -1;
      } else {
        await era.printAndWait(
          `음악 비트에 몸을 맡기면 팔코가 더 빨리 나을지도 모른다.`,
        );
        await era.printAndWait('잠시 고민한 끝에 시도해보기로 했다.');
        era.printButton(
          '「기분이 즐거우면 상처도 빨리 나을 거야, 그러니까 라이브 하러 가자!」',
          1,
        );
        await era.input();
        await falcon.say_and_wait(`에, 그런 방법도 있어? 팔코 힘낼게!`);
        if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await era.printAndWait(
            `평소처럼 녹색 악마(타즈나)가 ${me.name}에게 붙잡혀 있는 동안, 팔코의 정기 공연이 시작되었다.`,
          );
          await falcon.say_and_wait(
            `여러분! 여기 보세요! 팔코의 라이브가 지금 시작됩니다!`,
          );
          await era.printAndWait(
            `리듬에 맞춰 춤을 추는 팔코는 마치 전혀 다치지 않은 사람처럼 보였다.`,
          );
          await falcon.say_and_wait(`나이스! 드디어 팬들이 모이기 시작했어!`, true);
          await era.printAndWait(
            `하지만 생각이 너무 많았던 탓인지 반응이 한 박자 늦었고, 그만 발을 헛디뎌 넘어지고 말았다.`,
          );
          await falcon.say_and_wait(`으으, 팔코는 괜찮아⭐`);
          await era.printAndWait(
            `${me.name}이(가) 겨우 타즈나 씨를 따돌리고 왔을 때, 팔코의 상처는 악화된 상태였다.`,
          );
          hook.args = -1;
        } else {
          await era.printAndWait(`공연 효과는 의외로 좋았다.`);
          await falcon.say_and_wait('여러분! 이쪽이야! 다들 모여줘!');
          await era.printAndWait(
            `평지를 무대 삼아 휴대용 마이크를 꺼내 들자, 팔코의 작은 스테이지가 완성되었다.`,
          );
          await falcon.say_and_wait(`♪`);
          await era.printAndWait(
            `처음에는 아무도 없었지만, 서서히 사람들이 모이더니 어느덧 인산인해를 이루었다.`,
          );
          await era.printAndWait(`강변 풀밭이 관객들로 가득 찼다.`);
          era.printButton('「효과가 아주 좋은데?」', 1);
          await era.input();
          await era.printAndWait(
            `${me.name}도 환호하는 군중 사이에 서서 팔코의 공연을 묵묵히 지켜보았다.`,
          );
          await era.printAndWait(
            `라이브 작전은 대성공이었고, ${falcon.name}의 상처도 훨씬 빠르게 회복되었다.`,
          );
          hook.args = 0;
        }
      }
    } else {
      await print_event_name('건강 조심!', falcon);
      await falcon.say_and_wait(`......${callname}`);
      await era.printAndWait(`팔코.`);
      await era.printAndWait(
        `보건 교사 「당신은 ${falcon.sex}의 트레이너죠? 왜 ${falcon.sex}가 이렇게 지쳐 있는데도 무리하게 놔둔 거죠?」`,
      );
      await era.printAndWait(
        `할 말이 없었다. ${me.name}은(는) 그저 묵묵히 ${falcon.sex}의 꾸중을 들을 수밖에 없었다.`,
      );
      await falcon.say_and_wait(`아니야, 내가 하고 싶다고 한 거야.`);
      await era.printAndWait(
        `보건 교사 「트레이너 선생님, 부상이 후유증을 남길 수 있다는 걸 모르나요?」`,
      );
      await era.printAndWait(
        `트레이너 매뉴얼에도 평소 훈련 중 입은 부상 때문에 후유증이 생겨 은퇴해야 했던 사례들이 적혀 있었다.`,
      );
      await era.printAndWait(`그럼에도 불구하고. 실수를 하고 말았다.`);
      await me.say_and_wait(`죄송합니다. 다음부터는 주의하겠습니다.`);
      await era.printAndWait(`보건 교사 「환자가 쉬어야 하니 방해하지 마세요.」`);
      await era.printAndWait(
        `보건 교사가 한숨을 내쉬며 문을 닫자, 보건실 안에는 침묵 속에 서로를 마주 보는 두 사람만 남았다.`,
      );
      era.printButton('「괜찮아, 팔코. 그냥 푹 쉬어.」', 1);
      era.printButton('「......」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await falcon.say_and_wait(`......응, 팔코는 금방 나을 거야.`);
        await falcon.say_and_wait(
          `팔코도 가끔 너무 서두를 때가 있어서, 전부 ${callname}의 잘못은 아니야.`,
        );
        await era.printButton(`고마워, 팔코.`, 1);
        await era.input();
        await falcon.say_and_wait(
          `응. ${callname}, 트레이닝실에 있는 잡지 좀 가져다줄 수 있어?`,
        );
        await me.say_and_wait(`알았어. 팔코는 푹 쉬고 있어.`);
        await falcon.say_and_wait(`응.`);
        await era.printAndWait(`조심스럽게 보건실 문을 닫았다. 팔코는 이미 잠든 것 같았다.`);
        hook.arg = 0;
      } else {
        if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await falcon.say_and_wait(`${callname}.`);
          await era.printAndWait(`팔코가 ${me.name}보다 먼저 침묵을 깼다.`);
          await falcon.say_and_wait(`내 손 좀 잡아줄래?`);
          await era.printAndWait(`팔코의 시선이 천장에서 창밖으로 천천히 옮겨졌다.`);
          await falcon.say_and_wait(`친구들과 헤어졌던 것도, 바로 이런 석양이 질 때였어.`);
          await falcon.say_and_wait('아야!');
          await me.say_and_wait(`팔코!`);
          await falcon.say_and_wait(
            `${callname}, 조금만 더 가까이 와줄래?`,
          );
          await falcon.say_and_wait(
            `이미 너무 많은 친구와 헤어졌어. 더 이상 ${callname}까지 잃고 싶지 않아.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 흐느끼는 팔코를 꼭 안아주며 거대한 황금빛 태양이 지평선 너머로 서서히 사라지는 것을 지켜보았다.`,
          );
          await era.printAndWait(`긴 밤이 오려 하고 있었다.`);
          hook.arg = -1;
        } else {
          await falcon.say_and_wait(`${callname}.`);
          await era.printAndWait(`팔코가 ${me.name}을(를) 불렀다.`);
          await era.printAndWait(
            `어느샌가 ${me.name}은(는) ${falcon.sex}의 손을 꽉 쥐고 있었다.`,
          );
          await falcon.say_and_wait(
            `${callname}의 크고 따뜻한 손이 느껴져.`,
          );
          await falcon.say_and_wait(`기분이 좀 나아진 것 같아.`);
          await me.say_and_wait(`여기 있을게. 아무 데도 안 가.`);
          await falcon.say_and_wait(
            `${callname}은(는) 정말 상냥하네.`,
          );
          await era.printAndWait(`팔코가 그 커다란 손을 자신의 뺨에 가져다 댔다.`);
          await falcon.say_and_wait(`이대로 조금만 쉴게.`);
          await era.printAndWait(`얼마 지나지 않아 팔코는 그대로 잠이 들었다.`);
          await era.printAndWait(`조용히 문을 닫고 ${me.name}은(는) 보건실을 나왔다.`);
          await era.printAndWait(`팔코는 금방 활력을 되찾았다.`);
          hook.arg = 0;
        }
      }
    }
  }

  async out_start(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new FalconEduMarks();
    if (event_marks.idol_ice_cream === 1) {
      event_marks.idol_ice_cream++;
    }
    await print_event_name('팔코·데이트 대작전', falcon);
    await falcon.say_and_wait(`${callname}!`);
    await era.printAndWait(`문을 열기도 전부터 팔코의 활기찬 목소리가 들려왔다.`);
    await falcon.say_and_wait(
      `팔코를 응원해주는 팬들에게 가성비 좋은 디저트를 추천해주고 싶은데, ${callname}은 어디가 좋은지 알아?`,
    );
    await era.printAndWait(`그러고 보니 우마돌도 팬들에게 감사의 마음을 전해야 할 때가 있는 법이다.`);
    await me.say_and_wait(`디저트라면 근처 쇼핑몰에 가볼까?`);
    await me.say_and_wait(`아니면 SNS에서 유명한 가게라도 찾아볼까?`);
    await era.printAndWait(`팔코도 생각에 잠겼다.`);
    await falcon.say_and_wait(`음...... 팔코는 역시 직접 가보고 결정하는 게 좋겠어!`);
    await falcon.say_and_wait(`그러니까 ${callname}......`);
    await era.printAndWait(`${me.name}의 반응을 살며시 살피는 팔코.`);
    await falcon.say_and_wait(`......그냥 팔코 혼자 다녀올게⭐`);
    await me.say_and_wait(`아, 그래.`);
    await era.printAndWait(`일부러 못 알아챈 척 대답했다.`);
    await falcon.say_and_wait(`에엣?! 어떻게 그럴 수가 있어!`);
    await era.printAndWait(
      `자기가 판 함정에 자기가 빠져서 당황하는 팔코가 드디어 본심을 드러냈다.`,
    );
    await me.say_and_wait(`미안, 방금 잘 못 들었어. 다시 말해줄래?`);
    await falcon.say_and_wait(
      `팔코는 ${callname}이랑 같이 가고 싶어!`,
    );
    await me.say_and_wait(`귀여운 팔코의 부탁인데 당연히 가야지.`);
    await falcon.say_and_wait(`야호⭐`);
    await era.printAndWait(`그 후 두 사람은 함께 근처 디저트 가게들을 돌아다니며 시식했다.`);
    return true;
  }

  async office_study(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new FalconEduMarks();
    if (event_marks.deadline_fight === 1) {
      event_marks.deadline_fight++;
    }
    await print_event_name('기말고사 대작전!', falcon);
    await falcon.say_and_wait(`으아앙——— 너무 어려워`);
    await era.printAndWait(`낙제점이 찍힌 시험지를 보며 팔코는 침묵에 빠졌다.`);
    await falcon.say_and_wait(
      `이대로라면 방과 후 보충 수업 정도가 아니라, 아예 유급할지도 몰라.`,
    );
    await era.printAndWait(
      `팔코는 안절부절못하며 발을 동동 구르다가 갑자기 ${me.name}을(를) 떠올렸다.`,
    );
    await era.printAndWait(`${callname}에게 물어보는 게 좋겠어!`);
    era.drawLine({ content: '트레이닝실' });
    await era.printAndWait(
      `눈앞의 점수를 본 ${me.name}도 팔코와 함께 침묵에 빠졌다.`,
    );
    await me.say_and_wait(`......팔코?`);
    await era.printAndWait(
      `고개를 푹 숙인 채 부끄러워하는 팔코를 보며, ${me.name}은(는) 길게 한숨을 내쉬었다.`,
    );
    await me.say_and_wait(`자, 같이 틀린 문제들을 분석해보자.`);
    await era.printAndWait(
      `팔코를 ${me.name}의 자리에 앉히고, ${me.name}은(는) 따로 의자를 가져와 ${falcon.sex}의 옆에 앉았다.`,
    );
    await me.say_and_wait(
      `낙제를 면하려면 세세한 부분보다 줄기가 되는 핵심 원리나 흐름을 이해하는 게 중요해.`,
    );
    await me.say_and_wait(
      `무엇을 우선해야 할지, 무엇을 나중에 해도 될지 냉정하게 판단해야 해.`,
    );
    await me.say_and_wait(`자, 이 부분은 말이야......`);
    await era.printAndWait(`오후 내내 ${me.name}들은 오답과의 사투를 벌였다.`);
    era.drawLine({ content: '황혼 무렵' });
    await me.say_and_wait(`대충 이런 식이야...... 팔코?`);
    await falcon.say_and_wait(`...아, 응.`);
    await era.printAndWait(`어느샌가 팔코의 정신은 딴 데로 가 있는 것 같았다.`);
    await me.say_and_wait(`......됐다, 오늘은 여기까지 하자.`);
    await era.printAndWait(
      `길게 한숨을 쉰 뒤, ${me.name}은(는) 팔코의 시험지를 자신의 폴더에 챙겨 넣었다.`,
    );
    await me.say_and_wait(
      `앞으로 재시험 합격하기 전까지 팔코의 콘서트는 금지야.`,
    );
    await falcon.say_and_wait(`에엣?`);
    await falcon.say_and_wait(`${callname}, 제발 그것만은 안 돼!!!`);
    await era.printAndWait(`팔코의 비명이 교사 전체에 울려 퍼졌다.`);
    return true;
  }

  async out_river(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(event_hooks.out_river, event_object);
      return;
    }
    const event_marks = new FalconEduMarks();
    if (event_marks.loneliness_girl === 1) {
      event_marks.loneliness_girl++;
    }
    await print_event_name(`강변의 우마돌`, falcon);
    await era.printAndWait(`강가 풀밭 위에서`);
    await falcon.say_and_wait(
      `${callname}, 여기 공기 정말 상쾌하다`,
    );
    await falcon.say_and_wait(`강변 풀밭의 맑은 공기는 기분 전환하기에 딱 좋은 것 같아.`);
    await falcon.say_and_wait(
      `아! 맞아, 이런 곳에서 콘서트를 열어서 SNS에 올리면 팬들이 순식간에 늘어나겠지?`,
    );
    await falcon.say_and_wait(
      `${callname}은 어떻게 생각해?`,
    );
    await era.printAndWait(`심호흡하며 미래를 꿈꾸는 팔코의 모습을 지켜보았다.`);
    await me.say_and_wait(`응, 맑은 공기를 마시면 팬들도 정말 좋아할 거야.`);
    await falcon.say_and_wait(
      `......${callname}도 좋아?`,
    );
    await me.say_and_wait(`? 응, 물론이지.`);
    await falcon.say_and_wait(`팔코도 너무 좋아⭐`);
    await era.printAndWait(
      `입을 가리고 살짝 웃는 팔코와 강변을 거닐었다. 수면에서 불어오는 미풍을 느끼며, 강가에 자란 식물들이 바람을 따라 몸을 흔들고 있었다.`,
    );
    await era.printAndWait(`식물들도 바람과 물을 기다리는 것 같았다.`);
    await falcon.say_and_wait(`${callname}, 이것 봐!`);
    await era.printAndWait(`새로운 것을 발견한 팔코가 강가로 달려가더니 쪼그려 앉았다.`);
    await era.printAndWait(`팔코를 따라 강가로 다가간 ${me.name}도 팔코의 시선을 따라갔다.`);
    await era.printAndWait(`강가에 끈질기게 핀 하얀 꽃무더기가 바람에 흔들리고 있었다.`);
    await falcon.say_and_wait(`이 꽃, 왠지 팔코 같아.`);
    await era.printAndWait(
      `살짝 만져보고 싶지만, 너무 힘을 주어 꺾어버릴까 봐 하얀 꽃잎에 보호받는 노란 꽃술을 그저 가만히 지켜볼 뿐이었다.`,
    );
    era.printButton(`캐모마일이라고 하던가?`, 1);
    await era.input();
    await me.say_and_wait(
      `고대 이집트인들은 캐모마일을 『달의 풀』이라고 불렀대. 진정 효과가 있다고 하더라고.`,
    );
    await me.say_and_wait(`꽃말은 아마......`);
    await era.printAndWait(`몰래 스마트폰을 켜서 캐모마일을 검색했다.`);
    await me.say_and_wait(`『역경에 굴하지 않는 강인함』 이야.`);
    await falcon.say_and_wait(`팔코도 캐모마일처럼 피어나고 싶어.`);
    await era.printAndWait(`팔코는 강물에 씻겨 젖어있는 땅을 바라보았다.`);
    await falcon.say_and_wait(`뿌리를 땅속 깊이 박고, 활짝 핀 꽃을 모두에게 바치는 거야.`);
    await falcon.say_and_wait(`그러니까 팔코도 더 열심히 노력해야겠지?`);
    await era.printAndWait(
      `팔코의 머리를 쓰다듬으려 손을 뻗었지만, 팔코는 교묘하게 몸을 피했다.`,
    );
    await falcon.say_and_wait(`도망가는 팔코를 잡고 싶으면, 한번 쫓아와 보시지!`);
    await me.say_and_wait(`팔코! 거기 서! 잡고 말 거야!`);
    await falcon.say_and_wait(
      `${callname}은 평생 팔코를 못 잡을걸⭐`,
    );
    await era.printAndWait(
      `왁자지껄하던 풀밭은 서서히 정적에 잠겼고, 바람에 흔들리는 꽃들의 속삭임만이 귓가에 맴돌았다.`,
    );
    return true;
  }

  async out_station(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(event_hooks.out_station, event_object);
      return;
    }
    const maru = get_chara_talk(4),
      event_marks = new FalconEduMarks();
    if (event_marks.shine_girl === 1) {
      event_marks.shine_girl++;
    }
    await print_event_name(`역 앞 홍보`, falcon);
    await era.printAndWait(`어느 휴일`);
    await falcon.say_and_wait(`여기는 최고의 우마돌을 꿈꾸는 ${falcon.name}!`);
    await falcon.say_and_wait(`우마돌 팔코를 많이 많이 응원해줘♪`);
    await era.printAndWait(
      `휴일에 ${me.name}은(는) 팔코에게 이끌려 역으로 왔다.`,
    );
    await me.say_and_wait(`유동 인구가 많은 역에서 팬을 늘리려는 작전이야?`);
    await me.say_and_wait(`그 열정을 공부에 좀 쏟았으면 좋았을 텐데.`);
    await era.printAndWait(`하지만 대부분의 사람은 이상한 눈으로 한 번 쳐다보고는 그냥 지나쳐 갔다.`);
    era.drawLine({ content: '점심 무렵' });
    await falcon.say_and_wait(`으앙~ 점심때가 됐는데 팬이 전혀 안 늘었어.`);
    await era.printAndWait(
      `다들 자기 할 일이 바쁘니, 아무 고민 없이 팬이 되어줄 수 있는 건 학생들뿐일지도 모른다.`,
    );
    await era.printAndWait(`게다가`);
    await maru.say_and_wait(`어라, 팔코 아니니?`);
    await era.printAndWait(`예상치 못한 인물이 등장했다.`);
    await falcon.say_and_wait(`에? 마루젠 선배가 여긴 어쩐 일이야?`);
    await era.printAndWait(
      `트레센 교복 차림의 마루젠스키가 여유로운 미소를 지으며 ${me.name}들을 바라보았다.`,
    );
    if (
      era.get('cflag:4:모집상태') === recruit_flags.yes &&
      era.get('cflag:4:육성턴수합산') >= 47
    ) {
      await maru.say_and_wait(`트레이너 군을 한참 찾았는데, 여기 있었네?`);
      await era.printAndWait(`${me.name}은(는) 당연히 이 친근한 누님을 기억하고 있었다.`);
      await maru.say_and_wait(`한동안 트레이너 군을 못 봐서 이 누나는 정말 섭섭했다구?`);
      era.printButton(`같이 할래?`, 1);
      await era.input();
      await maru.say_and_wait(
        `귀여운 후배를 돕는 건 내 기쁨이지. 자, 내가 뭘 하면 될까?`,
      );
      await era.printAndWait(
        `달리는 즐거움을 만끽하며, 더 많은 ${falcon.get_uma_sex_title()}들이 자신의 뒤를 쫓아오게 하려는 그녀.`,
      );
    }
    await falcon.say_and_wait(`팔코는 지금 역에서 팬들을 모으고 있어⭐`);
    await falcon.say_and_wait(`그래서 마루젠 선배도 홍보를 좀 도와줬으면 좋겠어.`);
    await maru.say_and_wait(
      `이렇게 귀여운 후배의 부탁인데 당연히 도와줘야지. 이 누님의 홍보 방식을 한번 보렴.`,
    );
    await era.printAndWait(`다음 열차가 도착했을 때`);
    await maru.say_and_wait(
      `하이루! 멋쟁이 오빠 언니들 여기 좀 보세요~ 이렇게 귀여운 아가씨의 1호 팬이 되어주지 않을래?`,
    );
    await maru.say_and_wait(`부담 가질 필요 없어! 어차피 인생은 한 방, 즐기는 게 장땡이라구~`);
    await falcon.say_and_wait(`......정말 그리운 말투네.`);
    await era.printAndWait(
      `${me.name}은(는) 자신이 중학생 때 인터넷 서핑을 하며 보았던 옛날 유행어들을 떠올렸다.`,
    );
    await era.printAndWait(
      `그 한마디에 모든 사람의 발걸음이 빨라졌고, 몇몇은 얼굴을 붉히며 외면했다.`,
    );
    await maru.say_and_wait(`어머~ 반응이 영 시원찮네.`);
    await era.printAndWait(`아쉬워하는 마루젠스키에게 팔코가 다가가 위로했다.`);
    await falcon.say_and_wait(`아, 아니야! 도와준 것만으로도 팔코는 정말 고마워.`);
    await falcon.say_and_wait(`아무튼 정말 고마워!`);
    await maru.say_and_wait(
      `그렇다면...... 나도 팔코의 팬이 되어도 될까?`,
    );
    await falcon.say_and_wait(`에? 마루젠 선배가 팔코의 팬이라고? ......너무 기뻐!`);
    await era.printAndWait(
      `팬을 얻고 기뻐하는 팔코를 보며 ${me.name}도 덩달아 기분이 좋아졌다.`,
    );
    if (
      era.get('cflag:4:모집상태') === recruit_flags.yes &&
      era.get('cflag:4:육성턴수합산') >= 96
    ) {
      await maru.say_and_wait(`팔코, 부탁 하나만 해도 될까?`);
      await era.printAndWait(
        `여유로운 표정의 마루젠스키가 ${me.name}과(와) ${falcon.name}을 보며 말했다.`,
      );
      await falcon.say_and_wait(`팔코가 도울 수 있는 일이라면 뭐든 좋아!`);
      await maru.say_and_wait(
        `잘됐다! 근처 쇼핑몰에 가서 요즘 유행하는 코코넛 티 한 잔만 사다 줄래?`,
      );
      await falcon.say_and_wait(`당연하지! 그런데 팔코는 지금 팬들을 모으는 중이라서……`);
      await maru.say_and_wait(
        `홍보는 나도 도와줄게. 그러니까 부탁이야, 팔코. 방금 가입한 팬의 첫 번째 요청을 들어주지 않겠니?`,
      );
      await falcon.say_and_wait(
        `음—— 알았어! 마루젠 선배의 부탁이라면 팔코가 힘내야지!`,
      );
      await falcon.say_and_wait(`그럼, 팔코 다녀올게!`);
      await era.printAndWait(
        `멀어지는 팔코를 보며, 역에는 이제 ${me.name}과(와) 마루젠스키만 남았다.`,
      );
      await maru.say_and_wait(`자, 방해꾼도 없으니 이제 트레이너 군은 내 거야♪`);
      await era.printAndWait(
        `${me.name}을(를) 품에 안고 부드럽게 쓰다듬는 마루젠스키는 아주 즐거워 보였다.`,
      );
    }
    return true;
  }

  async out_shopping(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(event_hooks.out_shopping, event_object);
      return;
    }
    const event_marks = new FalconEduMarks();
    if (event_marks.curiosity_girl === 1) {
      event_marks.curiosity_girl++;
    }
    await print_event_name(`황금국화`, falcon);
    await era.printAndWait(`어느 휴일`);
    await falcon.say_and_wait(
      `${callname}, 이쪽으로 와볼래?`,
    );
    await era.printAndWait(`팔코가 트레이닝실에 있는 전신 거울을 보며 자신을 꾸미고 있었다.`);
    await falcon.say_and_wait(
      `저기, 팔코는 머리를 내려서 포니테일을 만들고 리본으로 고정해보고 싶어.`,
    );
    await era.printAndWait(
      `뒷모습이 잘 보이지 않아서 ${me.name}의 손을 빌리고 싶은 모양이었다.`,
    );
    await me.say_and_wait(`——이렇게?`);
    await falcon.say_and_wait(`음—— 조금 더 위로.`);
    await era.printAndWait(`조심스럽게 리본 핀을 조금 높은 위치에 꽂아주었다.`);
    await me.say_and_wait(`——이 정도면 괜찮아?`);
    await falcon.say_and_wait(`응—— 딱 좋아.`);
    await era.printAndWait(`헤어스타일을 바꾼 팔코를 보니, 평소와는 또 다른 느낌이었다.`);
    await falcon.say_and_wait(`근데 왠지 모르게 2% 부족한 느낌이야.`);
    await era.printAndWait(`팔코는 다시 거울을 보며 고민에 빠졌다.`);
    await falcon.say_and_wait(
      `${callname}! 팔코랑 같이 상점가에 가주지 않을래?`,
    );
    await falcon.say_and_wait(`작은 액세서리를 사고 싶어.`);
    await era.printAndWait(`자신의 매력이 어디까지 통할지 시험해보고 싶은 걸까?`);
    await me.say_and_wait(`좋아!`);
    era.drawLine({ content: '상점가' });
    await era.printAndWait(
      `주말이라 그런지 상점가에는 평일보다 훨씬 많은 사람이 붐비고 있었다.`,
    );
    await falcon.say_and_wait(`그럼 이 가게에 들어가 보자!`);
    await era.printAndWait(
      `최근 SNS에서 핫한 가게인지, 액세서리를 구경하는 커플들의 비율이 의외로 높았다.`,
    );
    await me.say_and_wait(`커플들이 정말 많네.`);
    await falcon.say_and_wait(
      `팔코랑 ${callname}이 섞여 있어도 전혀 위화감이 없네!`,
    );
    await era.printAndWait(
      `${me.name}의 팔을 붙잡고 한 바퀴 돌던 팔코가 머리끈 코너에서 발걸음을 멈췄다.`,
    );
    await falcon.say_and_wait(`다 너무 귀여워! 어떤 게 좋을까?`);
    await era.printAndWait(`팔코는 이 머리끈들이 꽤 마음에 든 모양이었다.`);
    await me.say_and_wait(`그렇게 고민되면 마음에 드는 거 다 사줄까?`);
    await era.printAndWait(
      `최근 월급을 받은 ${me.name}의 목소리에 힘이 실렸다(아마도?).`,
    );
    await falcon.say_and_wait(
      `정말? ${callname}은 역시 최고야!`,
    );
    await falcon.say_and_wait(
      `그럼, ${callname}은 어떤 게 좋아?`,
    );
    era.printButton(`초록색 리본이 달린 하얀색 머리끈`, 1);
    era.printButton(`하얀 토끼 장식이 달린 초록색 머리끈`, 2);
    era.printButton(`하얀 장미 장식이 달린 검은색 머리끈`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`음—— 팔코도 이런 상쾌한 느낌이 좋아.`);
      await falcon.say_and_wait(`푸른 벌판을 뛰어다니는 것처럼 활기차 보여⭐`);
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`귀여운 스타일? 사실 팔코도 그렇게 생각했어!`);
      await falcon.say_and_wait(`토끼는 사랑을 갈구한다는 숨은 의미도 있다고 하더라고.`);
      await falcon.say_and_wait(`팔코는 아무 말도 안 했어⭐.`);
    } else {
      await falcon.say_and_wait(`오호호! 팔코도 소악마계 우마돌이니까!`);
      await era.printAndWait(`아무리 봐도 그렇게는 안 보였지만.`);
      await falcon.say_and_wait(`트레이너가 골라준 거니까 진지하게 고려해볼게.`);
      await era.printAndWait(
        `${falcon.sex}의 작은 머리를 가볍게 꿀밤 때리자 비명이 터져 나왔다.`,
      );
      await falcon.say_and_wait(`미안해! 다음부터는 그런 소리 안 할게!`);
    }
    await era.printAndWait(
      `고른 머리끈을 쇼핑백에 담고, ${me.name}들은 계속해서 쇼핑을 즐겼다.`,
    );
    return true;
  }

async school_atrium(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new FalconEduMarks();
    if (event_marks.petrichor_girl === 1) {
      event_marks.petrichor_girl++;
    }
    await print_event_name(
      `풀내음 가득한 ${falcon.get_uma_sex_title()}들`,
      falcon,
    );
    await era.printAndWait(`오늘은 교내 개방의 날이었다.`);
    await falcon.say_and_wait(
      `안녕! 팔코 언니야! 지금부터 팔코가 모두를 데리고 트레센 학원을 안내해 줄게♪`,
    );
    await era.printAndWait(
      `근처 초등학교의 어린 ${falcon.get_uma_sex_title()}들이 트레센 학원을 견학하러 왔다.`,
    );
    era.printButton(
      `어쩌면 나중에 이 어린 ${falcon.get_uma_sex_title()}들 중에서 내 담당 ${falcon.get_uma_sex_title()}가 나올지도 모르겠네.`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}A 「여기가 트레센이야?」`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}B 「와! 진짜 큰 학원이다!」`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}C 「팔코 언니, 트레센 학원의 역사에 대해서 알려줄 수 있어?」`,
    );
    await falcon.say_and_wait(
      `우마돌 팔코는 당연히 팬들에게 친절하게 설명해 줄 거야♪ 우선은 말이지……`,
    );
    await era.printAndWait(
      `활기 넘치는 ${falcon.name}은 트레센과 관련된 일들을 인내심 있게 설명해 주었다.`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}A 「저기 있는 사람은 누구야?」`,
    );
    await era.printAndWait(
      `${falcon.name}의 주위에 모여 깡충깡충 뛰던 어린 ${falcon.get_uma_sex_title()}들이 ${me.name}을(를) 발견했다.`,
    );
    await falcon.say_and_wait(
      `트레센 학원의 ${falcon.get_uma_sex_title()}들이라도 G1에서 우승하는 건 정말 힘든 일이야…… 어? 잠깐만!`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}A 「저기 있는 트레이너, 왠지 멋있어 보이는데?」`,
    );
    await era.printAndWait(
      `방금까지 ${falcon.name}의 곁에 있던 ${falcon.get_uma_sex_title()}들이 우르르 ${me.name}의 곁으로 몰려들었다.`,
    );
    await falcon.say_and_wait(`트, 트레이너!`);
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}B 「내가 트레센에 입학하면 내 전속 트레이너가 되어 줄래?」`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}A 「안 돼! 분명히 내가 먼저 봤단 말이야!」`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}B 「내가 먼저 말했으니까, 나랑 같이 있어야 해!」`,
    );
    await era.printAndWait(
      `어린 ${falcon.get_uma_sex_title()}들은 마치 아끼는 장난감을 서로 차지하려는 것처럼 ${me.name}의 양손을 잡아당겼다.`,
    );
    era.printButton(`아, 아파!`, 1);
    await era.input();
    await era.printAndWait(
      `세간에 알려진 대로 ${falcon.get_uma_sex_title()}의 힘은 성인 남성의 3배에 달했다.`,
    );
    await era.printAndWait(
      `스스로 힘을 조절하지 못해 생길 위험을 방지하기 위해, ${falcon.get_uma_sex_title()}들에게는 필수 과목이 하나 있었다.`,
    );
    await era.printAndWait(`바로 자신의 힘을 조절하는 법을 배우는 것이었다.`);
    await era.printAndWait(
      `대부분의 ${falcon.get_uma_sex_title()}들은 중학생 무렵부터 의식적으로 힘을 조절하기 시작했다.`,
    );
    await era.printAndWait(
      `하지만 심지어 정신 연령조차 아직 발달 단계에 있는 어린 ${falcon.get_uma_sex_title()}들에게는 무리였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 마치 두 명의 근육질 거구에게 장난감처럼 이리저리 끌려다니는 꼴이 되었다.`,
    );
    await falcon.say_and_wait(`${callname}!`);
    await era.printAndWait(`다행히 ${falcon.name}이 제때 도착했다.`);
    await falcon.say_and_wait(`너희 둘! 대체 무슨 일인지 팔코에게 제대로 설명해 봐!`);
    await era.printAndWait(
      `두 명의 어린 ${falcon.get_uma_sex_title()}들은 갑자기 엄청난 힘에 의해 공중으로 들어 올려졌고, 무슨 일인지 확인하려 고개를 돌리자 수라와도 같은 표정을 한 ${falcon.name}과 마주했다.`,
    );
    await era.printAndWait(`어린 ${falcon.get_uma_sex_title()}A 「으아아아앙!」`);
    await era.printAndWait(`어린 ${falcon.get_uma_sex_title()}B 「나 잡아먹지 마!」`);
    await era.printAndWait(
      `방금까지 다투던 두 아이는 이제 서로 꼭 껴안은 채 벌벌 떨며 ${falcon.name}의 훈계를 들었다.`,
    );
    await falcon.say_and_wait(
      `${callname}! 괜찮아? 어디 다친 데는 없어?`,
    );
    await era.printAndWait(
      `설교가 끝난 뒤, ${falcon.name}은 걱정스러운 표정으로 ${me.name}에게 물었다.`,
    );
    era.printButton(`괜찮아, 그냥 애들이 좀 장난친 것뿐이야.`, 1);
    await era.input();
    await era.printAndWait(`욱신거리는 통증을 참으며 아이들 곁으로 다가갔다.`);
    await era.printAndWait(`어린 ${falcon.get_uma_sex_title()}A 「우으……」`);
    await era.printAndWait(`어린 ${falcon.get_uma_sex_title()}B 「응?」`);
    era.printButton(
      `인간은 ${falcon.get_uma_sex_title()}에 비해 아주 나약한 생물이니까, 다음부터는 꼭 힘을 조절해야 해.`,
      1,
    );
    await era.input();
    era.printButton(
      `괜찮다면, 나중에 트레센에서 너희의 활기찬 모습을 다시 볼 수 있으면 좋겠네.`,
      1,
    );
    await era.input();
    await era.printAndWait(`어린 ${falcon.get_uma_sex_title()}A 「응, 응.」`);
    await era.printAndWait(`어린 ${falcon.get_uma_sex_title()}B 「알겠어요.」`);
    await era.printAndWait(
      `그제야 인솔 교사가 뒤늦게 달려와 사정을 듣고 ${me.name}들에게 사과했다.`,
    );
    era.drawLine({ content: '잠시 후' });
    await falcon.say_and_wait(
      `자기 자신보다 남의 기분을 더 걱정하다니, 그러다간 금방 다치고 말 거야!`,
    );
    await era.printAndWait(`팔코의 설교를 얌전히 들으며 ${me.name}은(는) 양손을 움직여 보았다.`);
    await me.say_and_wait(`팔코, 나를 그렇게나 걱정해 준 거야?`);
    await falcon.say_and_wait(`우마돌이니까 당연히 팬을 걱정해야지!`);
    await falcon.say_and_wait(`게다가 ${callname}은 팔코의……`);
    await era.printAndWait(`무언가 깨달은 듯, 팔코의 얼굴이 점점 붉게 물들었다.`);
    await falcon.say_and_wait(
      `아앗! ${callname}, 팔코를 놀렸어! 너무해!`,
    );
    await era.printAndWait(`서로 티격태격하는 사이, 오늘의 일과가 마무리되었다.`);
    return true;
  }

  async crazy_fan_end() {
    if (era.get('flag:강제배드엔딩') !== 46) {
      return await super.crazy_fan_end();
    }
    await falcon_crazy_fan_end();
  }

  async out_church(falcon, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 46) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_weeks = era.get('cflag:46:육성턴수합산');
    if (edu_weeks === 95 + 1) {
      await print_event_name('신사 참배', falcon);
      await falcon.say_and_wait(`몇 번을 와도 여기는 참 조용하네⭐`);
      await falcon.say_and_wait(
        `음— 차라리 신령님도 팔코의 콘서트를 보러 오게 할까!`,
      );
      era.printButton(`엉뚱한 소리는 거기까지 해!`, 1);
      await era.input();
      await era.printAndWait(
        `${me.name}이(가) ${falcon.name}의 머리를 가볍게 콩 쥐어박자, 팔코가 '으으' 소리를 내며 조용해졌고 잔잔한 수면처럼 다시 평화가 찾아왔다.`,
      );
      await era.printAndWait(
        `길게 줄을 선 참배객들을 다시 올려다보자, 온몸에 알 수 없는 무력감이 엄습했다.`,
      );
      era.printButton(`참배하러 온 사람들이 생각보다 훨씬 많네.`, 1);
      await era.input();
      await falcon.say_and_wait(`다들 시간을 들여서라도 꼭 이루고 싶은 소원이 있어서 그런 거겠지?`);
      await falcon.say_and_wait(
        `하지만 팔코가 미래의 팬이 될 모두를 위해서 열심히 응원해 줄게!`,
      );
      await era.printAndWait(
        `같은 곳을 향해 나아가는 수많은 인파를 보자, 본능처럼 각인된 우마돌 의식이 발동했는지 ${falcon.name}은 순식간에 들뜬 모습이 되었다.`,
      );
      await me.say_and_wait(`……일단 참배부터 끝내고 말해.`);
      await era.printAndWait(
        `옆에서 에너지가 전혀 줄어들 기미가 보이지 않는 ${falcon.get_uma_sex_title()}를 보며, ${me.name}은(는) 살짝 머리가 아파왔다.`,
      );
      await era.printAndWait(
        `제멋대로 게릴라 콘서트를 열어서 생기는 곤란함 때문도 아니고, 앞으로 있을 더트 G1 레이스 전승이라는 가혹한 목표 때문도 아니었다.`,
      );
      await me.say_and_wait(`저 미소, 아무리 봐도 억지로 쥐어짜 낸 것 같단 말이지.`, true);
      era.drawLine();
      await era.printAndWait(`긴 기다림 끝에 ${me.name}들은 새전함 앞에 섰다.`);
      await era.printAndWait(
        `눈앞의 세 여신상을 바라보자, 세 여신에게 번영을 빌었다는 시냇물의 신령의 전설이 머릿속에 떠올랐다.`,
      );
      await era.printAndWait(`……번영을 빌었던 시냇물의 신령인가?`);
      await era.printAndWait(`생각은 시간의 흐름 속에서 이리저리 맴돌았다.`);
      await falcon.say_and_wait(`세 여신님——`);
      await era.printAndWait(`몸이 옆에 있는 팔코를 따라 똑같은 동작을 취했다.`);
      await era.printAndWait(`그 찰나의 순간, ${me.name}이(가) 내린 결론은……`);
      era.printButton(`시냇물의 신령이 이 땅의 사람들의 건강을 기원했다`, 1);
      era.printButton(`시냇물의 신령이 이 땅의 사람들의 용기를 기원했다`, 2);
      era.printButton(`시냇물의 신령이 이 땅의 사람들의 지혜를 기원했다`, 3);
      const ret1 = await era.input();
      if (ret1 === 1) {
        get_attr_and_print_in_event(
          46,
          [0, 0, 0, 0, 0],
          0,
          JSON.parse('{"체력":600}'),
        ) && (await era.waitAnyKey());
      } else if (ret1 === 2) {
        get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 0) &&
          (await era.waitAnyKey());
      } else {
        get_attr_and_print_in_event(46, [0, 0, 10, 0, 0], 100) &&
          (await era.waitAnyKey());
      }
      await era.printAndWait(`그 후, ${me.name}의 귓가에 세 여신의 속삭임이 들려왔다.`);
      era.set('cflag:46:축제이벤트표시', 0);
    }
  }
};
