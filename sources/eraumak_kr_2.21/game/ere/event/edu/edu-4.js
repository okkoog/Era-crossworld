/**
 * @file 마루젠스키 - 育成
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const maru_race_end = require('#/event/edu/edu-events-4/race-end');
const maru_race_start = require('#/event/edu/edu-events-4/race-start');
const maru_week_end = require('#/event/edu/edu-events-4/week-end');
const maru_week_start = require('#/event/edu/edu-events-4/week-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const { attr_names, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async week_start(maru, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 'palace') {
      return await super.week_start(
        maru,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    return await maru_week_start(maru, me, callname, hook, event_object);
  }

  async week_end(maru, me, callname, hook, extra_flag, event_object) {
    return await maru_week_end(maru, me, hook, event_object);
  }

  async race_start(maru, me, callname, hook, extra) {
    return await maru_race_start(maru, me, hook, extra);
  }

  async race_end(maru, me, callname, hook, extra) {
    if (await maru_race_end(maru, me, callname, hook, extra)) {
      return await super.race_end(maru, me, callname, hook, extra);
    }
  }

  async train_success(zensky, me, callname, hook, extra_flag) {
    era.print(
      `${zensky.name}의 ${attr_names[extra_flag.train]} 트레이닝이 순조롭게 성공했다……`,
    );
    if (Math.random() < 0.9 * extra_flag.stamina_ratio) {
      const me = get_chara_talk(0);
      await print_event_name('추가 자율 트레이닝', zensky);
      await era.printAndWait(`${zensky.name}의 트레이닝이 끝난 뒤.`);
      await zensky.say_and_wait(`헬로? ${callname}, 잠시 시간 있어?`);
      await zensky.say_and_wait('이런 날씨에 달리면 정말 기분 좋지 않을까?');

      await zensky.say_and_wait(
        '튀어 오르는 물보라, 빗속의 흐릿한 시야…… 이런 때는 색다른 바람을 느낄 수 있거든.',
      );

      await zensky.say_and_wait(
        '오늘 나, 아직 기운차게 달리지 않았어! 이대로 연습을 끝내긴 조금 아쉬운걸♪',
      );

      await zensky.say_and_wait(`빗속에서 달리는 것도 꽤 괜찮아♪`);

      await zensky.say_and_wait(`이 정도 비라면 아침 목욕이나 다름없지.`);

      await zensky.say_and_wait('아니, 지금은 저녁 목욕이라고 해야 하려나……?');

      await zensky.say_and_wait('내 몸이 아직 아주 뜨겁거든.');

      await zensky.say_and_wait(
        `어쩌면 지금이야말로 내가 진가를 발휘할 때일지도? ${callname} 생각은 어때?`,
      );
      era.printButton('「알겠어, 그럼 달리자.」', 1);
      era.printButton('「역시 쉬는 게 좋겠어!」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await zensky.say_and_wait(
          `바로 그거야! 오늘은 밤새도록 달릴 거야. 후후, 하늘도 기뻐하는 것 같네.`,
        );

        await zensky.say_and_wait(`그럼 가볼까, 바람의 세계로.`);
        await era.printAndWait('그렇게 추가 트레이닝은 빗속에서 계속 이어졌다.');
      } else {
        await zensky.say_and_wait('어머, 아쉽네.');
        await zensky.say_and_wait('모처럼의 기회였는데……!');
        await zensky.say_and_wait(
          '그래도 어쩔 수 없지. 체력 보존도 중요하니까……!',
        );
        await zensky.say_and_wait('게다가 트레이너가 감기에 걸리면 곤란하잖아.');
        await zensky.say_and_wait(
          `억지 부리는 건 아니지만, 대신 ${me.name}이 나랑 빗속 드라이브 가주기야. 우리 둘이서만 말이지♪`,
        );
        era.println();
        await era.printAndWait(
          `빗속 드라이브로 몸은 지쳤지만, ${zensky.name}는 아주 즐거워 보였다.`,
        );
      }
      era.println();
    }
  }

  async train_fail(zensky, me, callname, hook, extra_flag) {
    const chara_talk = get_chara_talk(4);
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      const me = get_chara_talk(0);
      await print_event_name('무리 금지!', chara_talk);
      await chara_talk.say_and_wait(`으윽, 아파`);
      await era.printAndWait(`${chara_talk.name}는 방금 전 훈련 중에 그만 발목을 삐고 말았다`);
      await chara_talk.say_and_wait(`아무리 나라도 벌써 한계인가 봐`);
      await chara_talk.say_and_wait(
        '하지만 다음 레이스 날짜도 가까워졌는데…… 얼른 기운 차려야지!',
      );
      era.println();

      era.printButton('「서두르지 말고 천천히 치료하자.」', 1);
      era.printButton('「때로는 강한 처방도 필요해!」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await chara_talk.say_and_wait(
          `그래? 조금만 쉬면 금방 나을 수 있을 것 같은데!`,
        );
        era.printButton('「상처가 악화되면 큰일이야.」', 1);
        await era.input();
        await chara_talk.say_and_wait(
          '……알았어. 이왕 치료하기로 했으니 완치를 목표로 해야겠지!',
        );
        await chara_talk.say_and_wait(
          '그럼 기운을 내기 위해서 이탈리안 치즈라도 사러 가볼까.',
        );
        era.printButton('「아, 다리를 또 다치지 않게 조심해.」', 1);
        await era.input();
        await chara_talk.say_and_wait(
          `어머, ${callname}은 정말 다정하네. ${
            era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
          }가 아니라 다른 후배들이었다면 금방 공략당했을지도 모르겠어～`,
        );

        era.printButton(`「${chara_talk.name}, 또 농담을...」`, 1);
        await era.input();
        await chara_talk.say_and_wait('흥흥♪');
        await era.printAndWait(
          `${chara_talk.name}가 완전히 회복될 때까지 훈련은 잠시 미뤄둘 수밖에 없었다`,
        );
        era.println();
        hook.args = -1;
      } else {
        await era.printAndWait(
          `레이스 날짜는 다가오는데 ${chara_talk.name}가 심각한 부상을 입었다. 빨리 낫고 싶다면 비상수단을 쓸 수밖에 없다`,
        );
        await era.printAndWait(`${me.name}은(는) 심사숙고 끝에 강수를 두기로 했다`);
        era.printButton(
          '「기분을 상쾌하게 유지하면 상처도 더 빨리 나을 거야. 정신력으로 버텨보자!」',
          1,
        );
        await era.input();
        await chara_talk.say_and_wait(
          '나랑 생각이 같네! 기분 전환을 위해서라면 시내로 나가서 최신 트렌드를 쫓아봐야지',
        );

        if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await era.printAndWait(
            `그렇게 ${me.name}은(는) 패션 잡지에서 이번 시즌 최신 유행을 확인한 뒤 ${chara_talk.name}를 데리고 백화점으로 향했다.`,
          );
          await era.printAndWait(
            `평일인데도 인파가 상당했고, ${me.name}은(는) 누군가 ${chara_talk.name}의 다친 다리를 치지 않도록 주의를 기울였다.`,
          );
          await era.printAndWait(
            `${me.get_couple_title()} 둘은 화려한 백화점의 모습에 눈이 휘둥그레졌다.`,
          );
          await chara_talk.say_and_wait(
            `에? 요즘 유행은 들어본 적도 없는 것들이네. 혹시 이 ${
              era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
            }가 시대에 뒤처진 걸까?`,
          );
          era.printButton(
            `「지나친 최첨단 트렌드에 충격받은 ${chara_talk.name}의 기분이 나빠졌고, 회복 효과도 대폭 하락했다」`,
            1,
          );
          await era.input();
          hook.arg = -1;
        } else {
          await era.printAndWait(
            `${me.name}은(는) ${chara_talk.name}의 안내를 받아 작은 차를 몰고 구불구불한 길을 지나 연륜이 느껴지는 CD숍에 도착했다.`,
          );
          await chara_talk.say_and_wait(
            '겉보기엔 수수해 보여도 안의 음악은 꽤 트렌디하잖아♪',
          );
          await era.printAndWait(
            `${me.name}은(는) CD 한 장을 집어 들었다. 고등학교 때 반복해서 들었던 노래인지 가물가물했다.`,
          );
          await chara_talk.say_and_wait(
            '호호～ 역시 좋은 노래네♪ 절로 춤이 나올 것 같아.',
          );
          era.printButton(
            `「(${
              chara_talk.sex_code - 1 ? '그녀' : '그'
            }가 기뻐한다면 그걸로 된 걸까?)」`,
            1,
          );
          await era.input();
          await era.printAndWait(
            `음악 덕분인지 ${chara_talk.name}의 부상도 더 빠르게 회복되었다.`,
          );
          hook.arg = 0;
        }
      }
    } else {
      await print_event_name('몸조리 잘해!', chara_talk);
      await chara_talk.say_and_wait(`으음, 발을 삔 것 같네`);
      await era.printAndWait(`${chara_talk.name}는 훈련 중에 발목을 삐고 말았다`);
      await chara_talk.say_and_wait(
        `괜찮아♪ 이 정도 상처라면 금방 나을 거야.`,
      );
      era.println();

      era.printButton('「작은 부상이라도 푹 쉬어야 해!」', 1);
      era.printButton('「이게 바로 청춘이지, 다시 훈련하자!」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await chara_talk.say_and_wait(
          `Ok♪ ${callname}이 이렇게까지 챙겨주다니, 사실 나한테 꽤 관심 있지?`,
        );

        await chara_talk.say_and_wait(
          `하지만 다쳤다는 건 이 ${
            era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
          }답지 못한 모습이네. 스페 일행에게도……`,
        );

        era.printButton('「그렇지 않아!」', 1);
        await era.input();

        await chara_talk.say_and_wait(
          `음…… 맞아. 이 ${
            era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
          }도 깊이 반성했어. 푹 쉰 다음에 꼭 다시 멋진 모습을 보여줄게!`,
        );
        await era.printAndWait(`${chara_talk.name}는 얌전하게 보건실에서 휴식을 취했다`);

        hook.arg = 0;
      } else {
        if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await chara_talk.say_and_wait(`어머, ${callname}은 참 말도 잘해♪`);

          await chara_talk.say_and_wait('나를 좀 더 칭찬해줄래?');

          era.printButton(
            `「${
              chara_talk.name
            }, 아름답고 강한 우마무스메, 붉은 불꽃처럼 쿨하고 멋진 ${
              era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
            }님!」`,
            1,
          );
          await era.input();

          await chara_talk.say_and_wait(
            '어머, 그렇게 말해주니 쑥스러운걸♪ 그럼 휴식은 이 정도로 하고 훈련하러 가자!',
          );

          era.printButton('「바로 그 기세야!」', 1);
          await era.input();

          await chara_talk.say_and_wait('아얏!');

          await era.printAndWait(
            '훈련 도중 상처가 다시 악화되어 결국 다시 병실로 돌아가야 했다.',
          );

          hook.arg = -1;
        } else {
          await chara_talk.say_and_wait('하나, 둘, 셋, 넷, 여유 넘치게♪');
          await chara_talk.say_and_wait('다섯, 여섯, 일곱, 여덟, 전혀 문제없어♪');
          await chara_talk.say_and_wait(
            `${get_chara_talk(0).name}, 내 스텝 어때?`,
          );

          era.printButton('「……눈부셔!」', 1);
          await era.input();
          await chara_talk.say_and_wait(
            '후후♪ 이대로 후배들에게 쿨하고 멋진 모습을 보여줘야지!',
          );

          era.printButton(`「${chara_talk.name}! ${chara_talk.name}!」`, 1);
          await era.input();
          await era.printAndWait(
            `기적적으로 ${chara_talk.name}의 컨디션이 회복되어 다시 훈련에 복귀했다.`,
          );

          hook.arg = 0;
        }
      }
    }
  }

  async out_start(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new MaEduMarks();
    if (event_marks.feel_speed === 1) {
      event_marks.feel_speed++;
      await print_event_name('슈퍼카 드라이브', zensky);
      await era.printAndWait(`어느 날, ${me.name}가 교문을 나서 산책하려던 참에——`);
      await era.printAndWait(`기분이 좋아 보이는 ${zensky.name}가 교외 쪽으로 걸어가고 있는 것을 발견했다.`);
      era.println();

      await zensky.say_and_wait(
        `어라, ${callname} 아냐? 오늘 날씨 정말 좋네. 나랑 같이 드라이브 가지 않을래?`,
      );
      era.printButton('「좋아.」', 1);
      await era.input();
      await zensky.say_and_wait(
        `${zensky.name}의 권유를 거절할 이유가 없었기에, ${me.get_couple_title()}은 교외에 주차된 붉은 스포츠카로 향했다.`,
      );
      await zensky.say_and_wait('그럼, 출발한다!');
      await era.printAndWait(
        `붉은 불꽃색의 슈퍼카가 시동을 걸었을 때, ${me.name}은(는) 문득 오한을 느꼈다. 기분 탓이겠지 하며 스스로를 다독였다.`,
      );
      era.println();
      await era.printAndWait(`10초 뒤`);
      era.printButton('「너무 빠른 거 아냐!」', 1);
      await era.input();
      await zensky.say_and_wait('이 정도 속도는 괜찮아!');
      await zensky.say_and_wait('이제 곧 고속도로야! 이제부터 진가를 보여줄게!');
      await zensky.say_and_wait(
        '타치 가속합니다! 타치 드리프트 합니다! 타치의 속도가 더 빨라집니다!!!',
      );
      await zensky.say_and_wait('후오오! 이 느낌, 정말 참을 수 없네♪');
      await zensky.say_and_wait(
        `어라? ${era.get('callname:0:-1')}! ${me.name}, 무슨 일이야?`,
      );
      await zensky.say_and_wait('후오오! 이 느낌, 정말 참을 수 없네♪');
      await zensky.say_and_wait('여보세요? 여보세요?');
      await zensky.say_and_wait(`${me.name}, 괜찮아? 내가 너무 빨리 달렸나?`);
      era.printButton('「한계까지 계속 도전해보자!」', 1);
      era.printButton('「잠시만 쉬어도 될까?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(
          `${callname}이 그렇게까지 말한다면, 이 ${
            era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
          }도 진지하게 임해야겠는걸!`,
        );
        await zensky.say_and_wait('나랑 같이 한계를 돌파해보자!');
        await zensky.say_and_wait('가자! 음속을 뛰어넘는 거야!');
        await zensky.say_and_wait(
          `${me.name}과(와) 함께라면 어디까지든 갈 수 있어!`,
        );
        era.println();
        await zensky.say_and_wait('이게 바로 소위 말하는 바람이 된다는 걸까?');
        await era.printAndWait(
          `${me.name}의 의식이 어둠 속으로 빠지기 직전, 황홀해하는 마루젠스키의 혼잣말이 들려왔다.`,
        );
        get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`알겠어, 무리하면 안 되지!`);
        era.println();
        await zensky.say_and_wait(`앞에 있는 휴게소로 가자!`);
        await era.printAndWait(`그렇게 ${zensky.name}는 휴게소에 차를 세웠다.`);
        era.println();
        await zensky.say_and_wait(`괜찮아, 트레이너?`);
        await zensky.say_and_wait(`마실 것 좀 사 올게.`);
        await era.printAndWait(`${zensky.name}는 금방 시원한 음료수 두 병을 사 왔다.`);
        await zensky.say_and_wait(`${callname}, ${me.name}. 이제 좀 어때?`);
        await era.printAndWait(
          `음료를 마시고 나니 어지럼증이 서서히 가라앉았다.`,
        );
        await zensky.say_and_wait(
          `이대로 ${
            era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
          } 무릎에서 좀 쉴래?`,
        );
        await era.printAndWait(
          `${zensky.name}는 살며시 ${me.name}의 머리를 자신의 무릎 위에 올렸다.`,
        );
        await era.printAndWait(
          `${zensky.sex}의 손가락이 ${me.name}의 피부에 닿으며 시원한 감촉을 남겼다.`,
        );
        await zensky.say_and_wait(
          `이게 바로『무릎베개』라는 걸까? 나도 처음 해보는 거야. 불편하면 꼭 말해줘야 해, ${
            zensky.elder_sibling_sex_title
          }.`,
        );
        await era.printAndWait(
          `여성 특유의 향기가 뇌를 자극했고, ${me.name}은(는) 무심결에 몽롱한 상상에 빠져들었다.`,
        );
        await zensky.say_and_wait(
          `세 여신님, 부탁입니다. 아주 잠깐이라도 좋으니 이대로 있게 해주세요. 의식이 멀어지는 찰나 ${me.name}은(는) 기도했다.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async school_atrium(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new MaEduMarks();
    if (event_marks.current_trend === 1) {
      event_marks.current_trend++;
      await print_event_name('거리의 유행 선구자', zensky);
      await era.printAndWait(`이것은 어느 날 안뜰에서 있었던 일이다————`);
      await zensky.say_and_wait(
        `${callname}, 상의하고 싶은 게 있는데 ${me.name} 지금 시간 돼?`,
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await zensky.say_and_wait(
        `그게…… 후배들의 초대를 받아서 세련된 시내로 쇼핑을 가기로 했거든. ${me.name}도 패션의 최첨단을 달리는 그 느낌 알지?`,
      );
      await zensky.say_and_wait(
        `……그런데 알다시피 유행은 정말 빨리 변하잖아. 나도 나름 최신 지식을 공부하려고 노력은 하지만, 가끔 후배들이랑 대화할 때 말이 잘 안 통하는 경우가 있더라고.`,
      );
      await zensky.say_and_wait(
        `그러면 분위기가 좀 어색해지잖아. 다들 실망시키고 싶지 않은데, ${me.name}이(가) 좋은 방법 좀 생각해줄 수 있을까?`,
      );
      era.printButton('「감각을 끌어올리는 특훈을 하자!」', 1);
      era.printButton(`「자신감을 가져야 해!」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(`과연, 지금 유행하는 트렌드를 직접 확인하러 가자는 거구나!`);
        await zensky.say_and_wait(
          `그럼 ${callname}, 나랑 같이 유행을 확인하러 가줄 수 있을까?`,
        );
        era.printButton('「물론이지!」', 1);
        await era.input();
        await era.printAndWait(`그렇게 ${me.name}과(와) ${zensky.name}는 시내로 나갔다.`);
        await zensky.say_and_wait(
          `지체할 것 없이 이 거리의 트렌드부터 확인하자. 저기 있는 CD숍이라면 최신 유행을 알 수 있을지도 몰라♪`,
        );
        await era.printAndWait(
          `${zensky.name}가 가리킨 곳은 꽤 연륜이 느껴지는 CD숍이었다. 아무리 그래도 저기서 최신 유행을 찾는 건 좀……`,
        );
        await zensky.say_and_wait(`${callname}, 어디 불편해?`);
        await era.printAndWait(
          `속으로는 태클을 걸고 싶었지만, ${me.name}은(는) 침묵을 지키며 ${
            zensky.sex
          }와 함께 (20년 전) 유행했던 CD숍을 탐방했다.`,
        );
        await era.printAndWait(
          `한참 뒤, ${me.name}과(와) ${zensky.name}는 거리의 모든 상점을 확인했다.`,
        );
        await zensky.say_and_wait(
          `최신 유행을 쫓는 건 정말 어렵네. 엄마는 이런 건 요령만 알면 문제없다고 하셨는데……`,
        );
        era.printButton(`「어머니가 가르쳐주신 걸 말해보는 건 어때?」`, 1);
        await era.input();
        await zensky.say_and_wait(
          `후배들에게 말하라고…… 그렇구나, 그것도 방법이네! 유행을 쫓기보다 내가 먼저 유행을 퍼뜨리는 게 훨씬 즐거울 거야!`,
        );
        await zensky.say_and_wait(
          `그럼 내일 후배들에게 내 스타일을 전파해볼게. ${callname}, 고마워⭐`,
        );
        await era.printAndWait(
          `다음 날, ${zensky.name}는 후배들이 자신의 새로운 스타일을 받아들여 줬다며 신나서 이야기했다.`,
        );
        get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`자신의 감각에 자신감을 가지라고……?`);
        await zensky.say_and_wait(
          `내가 조금 겁을 먹었었나 봐. 머뭇거리는 건 정말 나답지 않은걸.`,
        );
        await zensky.say_and_wait(
          `게다가 다들 내 스타일을 알고 있잖아. 나는 누구보다 패션 트렌드를 잘 알고, 언제나 시대의 최첨단을 달리는 우마무스메니까.`,
        );
        await zensky.say_and_wait(`좋아! 후배들과의 외출을 마음껏 즐기고 올게!`);
        await era.printAndWait(
          `나중에 ${me.name}가 지난 외출에 대해 묻자, ${
            zensky.sex
          }는 후배들과 유행에 관한 많은 정보를 주고받은 듯했다.`,
        );
        await era.printAndWait(`그것이 바로 독특한 매력을 지닌 ${zensky.name}의 모습이었다.`);
        get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async back_school(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new MaEduMarks();
    if (event_marks.favourite_things === 1) {
      event_marks.favourite_things++;
      await print_event_name(`${zensky.name}, 「좋아함」에 대하여`, zensky);
      await era.printAndWait(`오늘의 ${zensky.name}는 인터뷰를 받고 있다.`);
      await era.printAndWait(
        `기자: 그럼 다음은 입고 계신 승부복에 대해 이야기해보고 싶습니다. 이 승부복에서 가장 만족스러운 부분은 어디인가요?`,
      );
      await zensky.say_and_wait(`타오르는 듯한 붉은색은 제가 가장 좋아하는 색이라 타치도 빨간색이거든요♪`);
      await era.printAndWait(`기자: 타치요?`);
      era.printButton(`그건 ${zensky.name}의 애차 별명입니다.`, 1);
      await zensky.say_and_wait(`아, 미안해. 너무 몰입해서 얘기해버렸네♪`);
      await zensky.say_and_wait(
        `사실 어릴 때 모터쇼에 갔다가 새빨간 슈퍼카를 봤는데, 그 멋진 외형에서 눈을 뗄 수가 없었거든요.`,
      );
      await zensky.say_and_wait(
        `그때 나중에 차를 사면 꼭 이걸로 사겠다고 맹세했어요. 그 뒤로 카탈로그 사진을 보면서 운전하는 모습을 상상하며 열심히 노력했죠.`,
      );
      await zensky.say_and_wait(
        `지금은 그 꿈이 이루어졌답니다. 매일 타치를 타고 여기저기 달리고 있어요♪`,
      );
      await era.printAndWait(`인터뷰는 순조롭게 진행되었다……`);
      await era.printAndWait(`기자: 감사합니다. 그럼 마지막으로 사진 촬영 부탁드립니다.`);
      await zensky.say_and_wait(`알겠습니다! 제 매력을 최대한 보여드릴게요.`);
      await zensky.say_and_wait(`맞다! 나를 가장 잘 아는 건 ${callname}지?`);
      await zensky.say_and_wait(
        `${me.name}은(는) 오늘 촬영에서 나의 어떤 점을 홍보하는 게 좋다고 생각해?`,
      );
      era.printButton('「누구에게도 뒤지지 않는 속도」', 1);
      era.printButton('「언제나 여유로운 미소」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(
          `그렇네, 내가 가장 빛날 때는 역시 달리기를 즐기는 순간이니까.`,
        );
        await zensky.say_and_wait(`이왕 이렇게 된 거 아예 타치 위에서 사진을 찍어볼까.`);
        await era.printAndWait(
          `그 뒤 기자까지 휘말리게 한 드라이브에서 ${zensky.name}는 반짝반짝 빛나는 표정을 지어 보였다.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`응, 맞아. 어떤 일이든 즐기는 게 가장 중요하지.`);
        era.printButton('「기대하고 있을게」', 1);
        await era.input();
        await zensky.say_and_wait(
          `나한테 맡겨줘! 꼭 ${me.name}의 기대에 부응해서 최고로 귀여운 미소를 보여줄 테니까!`,
        );
        await era.printAndWait(`기자: 좋아요! 멋진 사진이 찍혔습니다!`);
        await era.printAndWait(
          `며칠 뒤, ${zensky.name}와 함께 인터뷰 기사를 확인하던 중.`,
        );
        await zensky.say_and_wait(
          `정말 예쁜 미소가 찍혔네♪ 그리고 여기…… ${me.name}의 이름도 언급되어 있어.`,
        );
        await zensky.say_and_wait(
          `음…… 『트레이너와의 유대 관계가 만들어낸 인상적인 미소』라고 적혀 있네!`,
        );
        era.printButton('「좀 쑥스러운걸」', 1);
        await era.input();
        await zensky.say_and_wait(
          `아니야. ${me.name}의 지지가 없었다면 나도 이렇게 귀여운 미소는 짓지 못했을 거야.`,
        );
        await era.printAndWait(
          `사진 속에서도, 그리고 눈앞에서도 ${me.name}은(는) ${zensky.name}의 눈부신 미소를 느꼈다.`,
        );
        get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      }
    } else if (event_marks.find_love === 1) {
      event_marks.find_love++;
      await print_event_name(
        `황혼 무렵 해변에서 ${zensky.name}와 노을 감상`,
        zensky,
      );
      await era.printAndWait(`어느 날, 훈련이 끝난 뒤.`);
      era.printButton('「좋아, 오늘 훈련 계획은 전부 달성했어. 수고했어.」', 1);
      await zensky.say_and_wait(
        `후후, 바람의 숨결과 풀내음이 느껴져서 나도 기분이 아주 좋았어♪`,
      );
      await era.printAndWait(
        `${zensky.name}가 몸을 쭉 펴자, 완벽한 신체 곡선이 ${me.name}의 뇌리에 깊이 새겨졌다.`,
      );
      await zensky.say_and_wait(
        `후우— 훈련이 끝나니 조금 피곤하네. ${
          callname
        }, 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}랑 같이 찻집에 가지 않을래?`,
      );
      era.printButton('「물론이지」', 1);
      await era.printAndWait(
        `신사로서 숙녀의 요청을 거절할 이유는 없었기에, 두 사람은 ${zensky.name}가 가장 좋아하는 찻집 근처에 도착했다.`,
      );
      await era.printAndWait(
        `노을빛에 잘게 부서지는 나뭇그늘을 지나 잡초가 무성한 정원을 가로질러 2층으로 올라가서야 찻집 입구를 찾을 수 있었다.`,
      );
      await era.printAndWait(
        `주인은 무뚝뚝해 보이는 노인이었다. 블라인드 사이로 들어오는 빛을 받으며 더욱 굽어 보였고 세월의 흔적이 역력했지만, 그 커다란 손은 여전히 기민하고 힘차 보였다.`,
      );
      await era.printAndWait(
        `${zensky.name}는 익숙하게 앞으로 나가 주문을 했고, 가벼운 대화 끝에 화제를 돌려 ${me.name}를 소개했다.`,
      );
      await era.printAndWait(
        `주인은 하던 일을 멈추고 ${me.name}을(를) 찬찬히 뜯어보았고, ${me.name}은(는) 자신도 모르게 자세를 바로잡았다.`,
      );
      await era.printAndWait(
        `노인은 고개를 끄덕이며 ${me.name}을(를) 인정한 듯, 낡았지만 깨끗한 메뉴판을 건네주었다.`,
      );
      await era.printAndWait(
        `무엇을 주문할지 고민하던 찰나, ${zensky.name}가 말을 걸어왔다.`,
      );
      await zensky.say_and_wait(`${callname}은 이런 가게 처음이지?`);
      await zensky.say_and_wait(
        `주인장 성격이 조금 괴팍하긴 해도 정말 좋은 분이야! 솜씨는 말할 것도 없고. 여기 와서 과일 파르페를 안 먹어보면 정말 손해라니까♪`,
      );
      era.printButton('「과일 파르페 하나 주세요」', 1);
      await era.printAndWait(
        `구식 축음기에서는 지난 세기에 유행했던 재즈가 흘러나왔고, 노을과 어우러져 마치 시간이 멈춘 듯한 아름다운 분위기를 자아냈다.`,
      );
      era.printButton('「(이곳의 시간은 다른 곳보다 느리게 흐르는 것 같아)」', 1);
      await zensky.say_and_wait(`${callname}, 과일 파르페 나왔어. `);
      await era.printAndWait(`${zensky.name}의 말에 정신을 차리자, 나무 쟁반 위에 놓인 정갈한 파르페에 숟가락 두 개가 꽂혀 있었다.`);
      era.printButton('（주인장이 일부러 이렇게 둔 건가）', 1);
      await zensky.say_and_wait(`${callname}, 내가 먹여줄까?`);
      await era.printAndWait(
        `${zensky.name}의 등 뒤로 비치는 빛 때문에 ${
          zensky.sex
        }의 표정은 잘 보이지 않았지만, 파르르 떨리는 귀가 ${zensky.sex}의 긴장을 대변하는 듯했다.`,
      );
      await era.printAndWait(`${zensky.name}는 ${me.name}의 대답을 기다리고 있었다.`);
      era.printButton('「(말없이 입을 벌린다)」', 1);
      era.printButton('「정말 미안하지만 처리해야 할 업무가 있어서」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${zensky.name}는 파르페를 한가득 떠서 ${me.name}의 입에 넣어주었다. 차가운 감촉이 순식간에 뇌를 점령했고, 뒤이어 부드러운 달콤함이 느껴졌다.`,
        );
        await era.printAndWait(
          `${me.name}이(가) 칭찬을 하려던 순간, 풋풋하면서도 달콤한 맛이 입안 가득 퍼져 나갔다.`,
        );
        await zensky.say_and_wait(`${callname}, 맛이 어때?`);
        era.printButton('「정말 맛있어」', 1);
        await era.input();
        await zensky.say_and_wait(`정말! 그럼 ${me.name}도 나 먹여줄래?`);
        await zensky.say_and_wait(`아～앙`);
        await era.printAndWait(
          `${zensky.name}는 재촉하듯 귀를 더 격렬하게 파르르 떨었다.`,
        );
        era.printButton('「할 수밖에 없어!」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 설레는 마음을 진정시키며 파르페를 크게 한 술 떠서 ${zensky.sex}의 앵두 같은 입에 조심스레 넣어주었다.`,
        );
        await era.printAndWait(
          `${zensky.sex}의 밝고 고른 치아가 왠지 모를 깊은 애정을 담고 있는 듯 보였다.`,
        );
        await zensky.say_and_wait(
          `맛있어⭐ ${callname}, 이번엔 내가 다시 먹여줄게♪`,
        );
        await era.printAndWait(
          `입가가 살짝 가라앉은 ${zensky.sex}의 얼굴에 은은한 미소가 번졌다.`,
        );
        await era.printAndWait(
          `그 후 ${me.name}와 ${zensky.sex}는 아무 말 없이 한 입씩 서로에게 파르페를 먹여주었다.`,
        );
        await era.printAndWait(
          `노을이 가져다준 아련한 슬픔조차 ${zensky.sex}의 모습에 씻겨 내려가는 듯했다.`,
        );
        await zensky.say_and_wait(`같이 바다로 드라이브 갈까? 타치도 근질근질한가 봐♪`);
        await era.printAndWait(`${zensky.sex}는 기대 섞인 눈빛으로 ${me.name}을(를) 바라보았다.`);
        era.printButton('「출발하자」', 1);
        await era.input();
        await era.printAndWait(`후후♪ ${callname}이라면 그렇게 말할 줄 알았어.`);
        await zensky.say_and_wait(`그럼, 지금 바로 가자!`);
        await era.printAndWait(
          `무뚝뚝한 주인은 묵묵히 식기와 음료를 정리하며 ${me.name}을(를) 다시 한번 찬찬히 살펴보았다.`,
        );
        await era.printAndWait(
          `잠시 후, 그는 ${me.name}에게 고개를 끄덕여 보였다. 마치 인정했다는 듯이.`,
        );
        await zensky.say_and_wait(`${callname}, 이제 가야지!`);
        await era.printAndWait(`${zensky.name}가 문앞에서 부드럽게 재촉했다.`);
        await era.printAndWait(
          `${me.name}이(가) 지갑에서 돈을 꺼내 계산하려 하자, 주인은 고개를 가볍게 젓고는 다시 잔을 닦기 시작했다.`,
        );
        era.printButton('「……감사합니다」', 1);
        await era.input();
        await era.printAndWait(`그리고 ${me.name}이(가) 막 떠나려 할 때`);
        await era.printAndWait(`주인: 손님, 귀여운 여자친구와 좋은 시간 보내시게.`);
        await era.printAndWait(
          `매력적이고 묵직한 목소리가 ${me.name}의 뒤편에서 들려왔다. ${me.name}은(는) 당황해서 돌아보았고, 주인은 엄숙하면서도 아주 미세한 미소를 띤 채 바라보고 있었다.`,
        );
        await era.printAndWait(`주인: 우리 가게도 이제 문 닫을 시간이라네. 손님, 더 할 일이라도 있는가?`);
        await era.printAndWait(
          `그렇게 ${me.name}은(는) 뒤도 돌아보지 않고 뛰쳐나와 ${zensky.name}가 기다리는 문으로 향했다.`,
        );
        await zensky.say_and_wait(
          `${callname}, 왜 이렇게 늦었어? 내가 데려다줄게. 여긴 잘 아는 사람이 없으면 길 잃기 딱 좋거든!`,
        );
        await era.printAndWait(
          `복잡한 골목을 지나 번잡한 상점가 인파 사이를 뚫고 나온 것은 ${me.name}에게 꽤 놀라운 경험이었다. 타치에 올라탄 뒤, ${me.name}은(는) ${zensky.name}와 잡담을 나누기 시작했다.`,
        );
        await zensky.say_and_wait(
          `흐흥♪ 내 안목 꽤 괜찮지? 여긴 우리 엄마가 추천해주신 가게야!`,
        );
        era.printButton('「주인분이 연세가 꽤 있어 보이더라」', 1);
        await era.input();
        await zensky.say_and_wait(
          `벌써 30년 넘게 운영하셨거든. 나도 어릴 때 부모님이랑 같이 여기 와서 커피랑 디저트 마시고 그랬어.`,
        );
        await zensky.say_and_wait(`주인장이 무서워 보여도 사실 정말 좋은 분이야!`);
        await era.printAndWait(
          `그렇게 문답을 주고받는 사이 산길 고속도로에 진입하자 차량 흐름이 점점 뜸해졌다.`,
        );
        await zensky.say_and_wait(
          `역시 이렇게 트레이너랑 타치랑 같이 드라이브하는 기분은 최고야. 격렬한 비트에 몸을 맡기니 마음이 확 달아오르는걸!`,
        );
        await era.printAndWait(
          `${zensky.name}의 귀가 비트에 맞춰 쫑긋거렸고, ${me.name}은(는) 그 속도를 따라가기 벅차 보였다.`,
        );
        await era.printAndWait(
          `영원 같았던 격렬한 시간이 지나고 서서히 리듬이 완만해질 무렵, 타치이 고속도로를 빠져나오자 ${me.name}은(는) 겨우 안도의 한숨을 내쉬었다.`,
        );
        await zensky.say_and_wait(
          `후후♪ 뺨을 스치는 바람이 정말 가슴 벅차지 않아? 타치도 아주 기뻐해♪`,
        );
        await zensky.say_and_wait(`……${callname}, ${me.name} 괜찮아?`);
        await era.printAndWait(
          `${zensky.name}가 차 속도를 줄이자, ${me.name}의 영혼이 비로소 세 여신에게서 육체로 돌아왔다.`,
        );
        await zensky.say_and_wait(
          `미안해, 트레이너의 상태를 미처 생각 못 했어. ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}로서 정말 실수했네.`,
        );
        await era.printAndWait(
          `${zensky.name}의 두 귀가 축 처졌고, 미안함과 걱정이 섞인 눈빛이 ${me.name}에게 향했다.`,
        );
        era.printButton('「아냐, 바람을 느낄 수 있어서 나도 즐거웠어」', 1);
        await era.input();
        await era.printAndWait(
          `${zensky.name}의 귀가 다시 쫑긋 섰고, 카오디오에서 흘러나오는 노래에 맞춰 다시 리듬을 타기 시작했다.`,
        );
        await zensky.say_and_wait(
          `트레이너는 정말 다정한 사람이네. 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}도 ${me.name}을(를) 좋아하게 된 게 정말 잘한 일이라고 생각해♪`,
        );
        await zensky.say_and_wait(
          `근데 있잖아, ${callname}. 매일 이렇게나 많은 아이들을 돌보느라 몸이 상하지는 않아?`,
        );
        era.printButton('「고개를 젓는다」', 1);
        await era.input();
        await zensky.say_and_wait(
          `응응, 그럼 다행이고. 트레이너도 참 힘든 직업이지.`,
        );
        await zensky.say_and_wait(
          `하지만 아이들이 풋내를 벗고 조금씩 성장하며 자신의 꿈을 쫓는 모습을 지켜보는 건, 나로서도 말로 표현하기 힘든 감동과 즐거움이 있어.`,
        );
        await zensky.say_and_wait(
          `어쩌면 트레이너와 ${zensky.get_uma_sex_title()}의 관계는 스승과 제자 같은 거겠지.`,
        );
        await zensky.say_and_wait(
          `처음의 낯섦과 경계심을 넘어 친밀함과 신뢰로 나아가는 모습을 지켜보고, 3년의 목표가 끝난 뒤에는……`,
        );
        await zensky.say_and_wait(
          `스승인 트레이너와 제자인 ${zensky.get_uma_sex_title()} 사이에 쌓인 깊은 유대가 기적의 힘이 되어, 두 사람이 더 큰 목표를 향해 나아가는 거야.`,
        );
        era.printButton(
          `「트레이너로서 자신이 담당한 ${zensky.get_uma_sex_title()}가 꿈을 쫓는 길이 평탄하기를 진심으로 빌어」`,
          1,
        );
        await era.input();
        era.printButton('「그 너머 한 걸음은 세 여신의 가호에 달린 거겠지」', 1);
        await era.input();
        await zensky.say_and_wait(
          `후후♪ 트레이너는 정말 재미있는 대답을 해주네. 나도 이 3년 동안 ${callname}과 함께 더 많은 아름다운 추억을 쌓고 싶어.`,
        );
        await zensky.say_and_wait(
          `그럼 앞으로도 잘 부탁해, ${era.get('cflag:0:성별') - 1 ? '트·레·이·너·양' : '트·레·이·너·군'}♪`,
        );
        await era.printAndWait(
          `동쪽 하늘은 태양에 물들어 오렌지빛이지만 머리 위는 여전히 짙은 푸른색이다. 태양과 별이 교차하는 그라데이션은 아무리 봐도 질리지 않았다.`,
        );
        await era.printAndWait(`${me.name}은(는) 참지 못하고 하품을 했다.`);
        await zensky.say_and_wait(
          `트레이너, 졸리면 조수석에서 좀 자도 돼. 바다에 도착하면 나랑 타치가 깨워줄게.`,
        );
        await era.printAndWait(
          `지칠 대로 지친 몸은 안심되는 말 한마디에 짐을 내려놓듯 눈을 감았다. 부드러운 산들바람과 마루젠스키에게서 풍겨오는 은은한 향기를 만끽하며.`,
        );
        era.println();
        era.println();
        era.println();
        await era.printAndWait(`10분 뒤`);
        await zensky.say_and_wait(`도착했어, ${callname}. 어서 일어나 봐.`);
        await era.printAndWait(
          `덜 깬 눈을 비비며 만족스러운 하품을 내뱉었다. ${me.name}은(는) 멍한 정신을 가다듬으려 애썼다.`,
        );
        await era.printAndWait(
          `파도가 암초에 부딪혀 잘게 부서지고, 밀물이 가져다준 불가사리와 조개껍데기는 썰물 때 소리 없이 다시 사라졌다.`,
        );
        await era.printAndWait(`달이 반짝이는 별들의 호위를 받으며 서서히 높은 곳으로 떠올랐다.`);
        await era.printAndWait(`지금의 바다는 파도 소리 속에서 더욱 고요하게 느껴졌다.`);
        await era.printAndWait(
          `두 사람은 차 문을 닫고 해변으로 향했다. 바다는 연인들에게 자신의 부드러운 면모를 보여주고 있었다.`,
        );
        await zensky.say_and_wait(`정말 조용하네, ${callname}도 그렇게 생각하지?`);
        await era.printAndWait(
          `${zensky.name}는 신고 있던 하이힐을 벗고 맨발로 파도 속으로 걸어 들어갔다.`,
        );
        await zensky.say_and_wait(`${callname}도 바닷물의 키스를 느껴봐.`);
        await era.printAndWait(
          `${me.name}도 ${zensky.name}의 권유에 신발을 벗고 천천히 파도 쪽으로 걸어갔다.`,
        );
        await era.printAndWait(
          `바닷물이 파도를 일으켰고, 그 파도들은 아이처럼 장난치며 해안가로 밀려와 부드러운 모래사장을 어루만지고는 아쉬운 듯 물러갔다.`,
        );
        await era.printAndWait(
          `끊임없는 어루만짐 끝에 모래사장 위에는 은빛 해안선이 그려졌고, 달빛 아래에서 바다는 반짝이는 은색 테두리를 두른 듯했다.`,
        );
        await era.printAndWait(`대자연은 최고의 화가다. `);
        await era.printAndWait(
          `${zensky.name}는 왼손으로 스커트 자락을 살짝 들어 올린 채 몸을 반쯤 ${me.name} 쪽으로 돌렸다. 달빛은 ${
            zensky.sex
          }에게 범접할 수 없는 성스러운 옷을 입혀주었고, 암초를 때리는 파도가 자아내는 물안개는 몽환적인 유혹을 더했다. 멈추지 않는 파도는 소녀의 마음속 일렁임을 암시하는 듯했다.`,
        );
        await era.printAndWait(
          `아마 ${
            zensky.sex
          } 자신도 모를 것이다. 대자연이라는 무형의 붓 아래, 자신이 이 은색 액자 속 유화의 주인공이 되었다는 것을.`,
        );
        await zensky.say_and_wait(`달이 참 예쁘네, ${callname}.`);
        era.printButton('「바람도 참 부드러워」', 1);
        await era.input();
        await zensky.say_and_wait(`후후♪ ${callname}은 정말 말솜씨도 좋다니까.`);
        await era.printAndWait(
          `말을 나누는 사이 ${me.name}은(는) 살며시 ${zensky.name}의 허리를 감싸 안았다. ${
            zensky.sex
          }는 전기에 닿은 듯 몸을 살짝 떨었지만, 딱히 ${me.name}를 밀어내지는 않았다.`,
        );
        await zensky.say_and_wait(
          `${callname}은 허락 없이 숙녀를 안으면 어떤 벌을 받는지 생각 안 해봤어?`,
        );
        await era.printAndWait(
          `그 청초한 눈동자에는 묘한 흡인력이 있었다. ${zensky.sex}가 ${me.name}을(를) 응시할 때면 시선을 떼기가 힘들었지만, 전혀 압박감은 느껴지지 않았다.`,
        );
        await era.printAndWait(
          `변덕스러운 바람의 요정처럼, ${zensky.sex}는 하늘의 빛, 소리, 바다 혹은 대지의 향기 그 자체였다.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${me.name}의 입술에 부드러운 감촉이 전해졌다.`);
        await zensky.say_and_wait(
          `정말이지, ${
            callname
          }은 참 솔직하지 못하다니까. 이럴 땐 좀 더 능동적으로 굴지 않으면 애가 탄다고.`,
        );
        await era.printAndWait(
          `처음에는 탐색하듯 가벼운 입맞춤이었지만, 점점 리듬이 빨라졌고 마지막에는 깊은 입맞춤으로 끝을 맺었다. ${me.name}이(가) 숨이 가빠질 때까지 둘은 입술을 떼지 않았다.`,
        );
        await era.printAndWait(
          `두 사람의 입술 사이에 은색 실이 길게 늘어졌다. ${
            zensky.sex
          }는 무한한 애정이 담긴 다정한 표정으로 ${me.name}을(를) 바라보았다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 무심결에 ${zensky.sex}를 꽉 껴안았고, ${
            zensky.sex
          } 또한 ${me.name}의 뺨을 어루만지며 화답했다.`,
        );
        await era.printAndWait(
          `차가운 바닷속에서 오직 등대처럼 따스한 감각만이 오랫동안 머물렀다.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], 0) &&
          (await era.waitAnyKey());
      } else {
        era.printButton('「정말 미안하지만 처리해야 할 업무가 있어서」', 1);
        await era.input();
        await zensky.say_and_wait(
          `어머, 그렇다면 얼른 가서 일해야지. ${callname}, 열심히 일해야 나중에 보상을 받을 수 있는 법이야.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 침묵 속에 가방을 들고 뒤도 돌아보지 않고 찻집을 떠났지만, 곧 구불구불한 골목길에서 길을 잃고 말았다.`,
        );
        await era.printAndWait(
          `결국 친절한 아저씨의 차를 얻어타고 나서야 겨우 통금 시간 전에 기숙사에 돌아올 수 있었다.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], 0) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async out_church(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
if (event_object.arg === 95 + 1) {
      await print_event_name('새해 참배', zensky);
      await era.printAndWait(
        `새해를 맞이해 ${me.name}과(와) ${zensky.name}는 함께 새해 참배를 하러 갔다.`,
      );
      await era.printAndWait(
        `사실 전통을 따지기보다는, 단순히 좋은 운을 바라는 마음이 컸다.`,
      );
      await zensky.say_and_wait(
        `역시 신년에는 신사에서 기도를 드려야지, 안 그래? 그래야 새해 기분이 나잖아~!`,
      );
      await zensky.say_and_wait(
        `일 년의 계획은 봄에 달려 있다고들 하지. 세 여신님께 일 년 치 땀방울과 노력을 약속드리자!`,
      );
      era.printButton(`「앞으로의 목표는 뭐야?」`, 1);
      await era.input();
      await zensky.say_and_wait(
        `후후~ 내 목표는—— 올해도 재미있는 레이스에 잔뜩 나가는 거!`,
      );
      await zensky.say_and_wait(
        `그리고 모두가 내 뒷모습만 쫓아오게 만들 수 있도록, 전보다 더~욱 대활약할 거야!`,
      );
      era.printButton(`「내가 ${zensky.name}를 잘 서포트할게!」`, 1);
      await era.input();
      await zensky.say_and_wait(
        `${callname}은 정말 든든하네~ ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}는 이런 느낌, 정말 좋아해♪`,
      );
      await era.printAndWait(`그건 그렇고, 앞으로 노력해야 할 방향은 뭘까?`);
      era.println();
      era.printButton(`「기본적인 건강 관리!」`, 1);
      era.printButton(`「모든 방면에서 균형 잡힌 훈련!」`, 2);
      era.printButton(`「자신의 장점을 갈고닦는 것!」`, 3);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(
          '옛말에 『환경이 기운을 바꾸고, 가꾸는 것이 몸을 바꾼다』고 했지. 건강에 유의하는 건 정말 중요해.',
        );
        await zensky.say_and_wait('결정했어! 다음 목표는 신체 건강 관리야!');
        await zensky.say_and_wait('자, 어서 들어가자!');
        get_attr_and_print_in_event(
          4,
          [0, 0, 0, 0, 0],
          0,
          JSON.parse('{"체력":600}'),
        ) && (await era.waitAnyKey());
      } else if (ret === 2) {
        await zensky.say_and_wait(
          '그렇구나! 모든 면에서 골고루 훈련한다면 전보다 한 층 더 성장할 수 있을 거야!',
        );
        await zensky.say_and_wait(
          '좋아, 나만 믿으라고! 훈련할 때 이 점을 더 신경 써서 할게!',
        );
        await zensky.say_and_wait('그럼, 결정됐으니까 어서 들어가자!');
        era.println();
        get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait('내 장점이라고 하면 역시 드라이빙 테크닉일까?');
        await zensky.say_and_wait('농담이야~! 달리기 실력을 갈고닦으라는 뜻이지?');
        await zensky.say_and_wait('OK! 훈련할 때 그 부분을 중점적으로 신경 쓸게.');
        await zensky.say_and_wait('음, 시간이 조금 지체됐네. 어서 들어가자!');
        era.println();
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 100) &&
          (await era.waitAnyKey());
      }
    }
    era.set('cflag:4:축제이벤트표시', 0);
  }

  async school_rooftop(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_weeks = era.get('cflag:4:육성턴수합산'),
      event_marks = new MaEduMarks();
    if (event_marks.beautiful_winner === 1) {
      event_marks.beautiful_winner++;
      await print_event_name('멋지고 화려한 필승법!', zensky);
      const chara_30 = get_chara_talk(30);
      await era.printAndWait(
        `어느 날, ${me.name}과(와) ${zensky.name}가 점심 회의를 위해 옥상에 올라왔을 때——`,
      );
      await era.printAndWait(`어디선가 희미하게 우는 소리가 들려왔다.`);
      await zensky.say_and_wait(`어라— 이 목소리는?`);
      await zensky.say_and_wait(`여기서 뭐 하고 있니, 라이스?`);
      await chara_30.say_and_wait('라이스는…… 라이스는 쓸모없는 아이에요.');
      await chara_30.say_and_wait(
        '모처럼 친구들이 경찰과 도둑 놀이에 끼워 줬는데……',
      );
      await chara_30.say_and_wait(
        '라이스만 아직 안 잡혔어요…… 친구들은 다들 라이스를 지켜주려다 잡혔는데, 라이스는 이제 어떻게 해야 할까요……',
      );
      await era.printAndWait(
        `라이스 샤워의 말을 듣고 ${zensky.name}와 ${me.name}이(가) 아래를 내려다보니, 안뜰 한가운데에 감옥처럼 만들어진 곳이 보였다.`,
      );
      await era.printAndWait(
        `${me.name}이(가) ${zensky.name}를 쳐다보자, ${zensky.sex}는 좋은 생각이 난 듯했다.`,
      );
      await zensky.say_and_wait(`그럼, 라이스에게 필승법을 가르쳐줄까♪?`);
      await zensky.say_and_wait(
        `체력으로 승부하는 A 플랜과 지혜로 승부하는 B 플랜, 라이스는 어느 쪽이 좋다고 생각해?`,
      );
      await chara_30.say_and_wait('라이스는…… 라이스는 잘 모르겠어요……');
      await era.printAndWait(
        `라이스의 시선이 ${me.name}에게 머물렀다. 마치 구원자라도 만난 듯한 눈빛으로 ${me.name}을(를) 바라보았다.`,
      );
      await era.printAndWait(`${zensky.name}도 ${me.name}의 대답을 기다리고 있는 것 같다.`);
      era.printButton('「체력으로 승부하는 A 플랜」', 1);
      era.printButton('「지혜로 승부하는 B 플랜」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(`OK! 그럼 A 플랜으로 가자!`);
        await zensky.say_and_wait(
          `라이스는 끈기에 자신이 있지 않니? 그럼 라이스가 직접 가서 상대의 주의를 끄는 거야. 그리고 ${
            zensky.sex
          }와 일정한 거리를 유지하면서 계속 달리면, 결국 상대는 체력이 다해 멈춰 서게 될 거야.`,
        );
        await chara_30.say_and_wait('그, 그런 걸…… 라이스가 할 수 있을까요?');
        await zensky.say_and_wait(
          `당빠지! 라이스는 성실하고 노력파인 데다 의지력도 강하잖아. 내 자랑스러운 후배라고!`,
        );
        await zensky.say_and_wait(`절대 문제없어♪`);
        await chara_30.say_and_wait(
          `마루젠 ${
            era.get('cflag:4:성별') - 1 ? '언니' : '오빠'
          }가 그렇게 말해준다면, 라, 라이스…… 저기, 해, 해볼게요……!`,
        );
        await zensky.say_and_wait(
          `후후♪, ${me.name} 덕분에 나도 지구력을 기를 수 있는 좋은 훈련 메뉴가 떠올랐어.`,
        );
        await era.printAndWait(
          `잠시 후, ${me.name}과(와) ${zensky.name}는 라이스가 훌륭하게 친구들을 구출해내는 작은 뒷모습을 지켜보았다.`,
        );
        get_attr_and_print_in_event(4, [0, 10, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`OK! 그럼 B 플랜으로 가자!`);
        await zensky.say_and_wait(
          `간단히 말해서 상대를 복잡한 지형으로 유인하는 거야. 예를 들면 교사 건물 같은 곳 말이지. 그런 다음 갈림길에서 상대를 따돌리는 거야!`,
        );
        await chara_30.say_and_wait('라, 라이스가 그런 걸 할 수 있을까요……!');
        await chara_30.say_and_wait('할 수 있어! 라이스는 생각하는 것도 잘하잖아?');
        await era.printAndWait(`${zensky.name}가 말하며 라이스의 손을 꼬옥 잡아주었다.`);
        await zensky.say_and_wait(
          `차분하게 생각한다면 라이스는 분명 해낼 수 있을 거야! 알았지?`,
        );
        await chara_30.say_and_wait('으음…… 라이스…… 노력해볼게요……!');
        await zensky.say_and_wait(
          `……후후, 후배에게 이렇게까지 말했으니, ${
            era.get('cflag:4:성별') - 1 ? '언니' : '오빠'
          }인 나도 본보기를 보여줘야겠는걸.`,
        );
        await era.printAndWait(
          `잠시 후, ${me.name}과(와) ${zensky.name}는 라이스가 훌륭하게 친구들을 구출해내는 작은 뒷모습을 지켜보았다.`,
        );
      }
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], 0) &&
        (await era.waitAnyKey());
      return true;
    } else if (edu_weeks === 47 + 22 && event_marks.girls_blue === 2) {
      event_marks.girls_blue++;
      await era.printAndWait(`저 우마무스메는 평범한 우마무스메로서 은퇴한다.`);
      await era.printAndWait(
        `마침내 굴레에서 벗어났기 때문인지, 아니면 지금까지 자신을 지지해 준 팬들에게 감사하기 위해서인지. 그녀는 G1 승리 때 입으려고 직접 디자인했던 승부복을 입고 승자의 무대 중앙에 섰다——`,
      );
      await era.printAndWait(
        `한때 자존심 강했던 그녀가 G1에서 승리하고 당당하게 입으려 했던 디자인이었지만,`,
      );
      await era.printAndWait(
        `나중에는 G2 승리로, 그다음에는 입상만이라도 좋으니 입게 해달라고 눈물 흘리며 타협했던 옷이다. 그런 경험 때문인지, 지금의 그녀는 혜성처럼 아름다워 보였다.`,
      );
      await era.printAndWait(`사정을 잘 아는 당신 또한 이 고별 공연에 참석했다.`);
      await say_by_passer_by(`우마무스메A`, `여러분, 정말 감사합니다!`);
      await era.printAndWait(
        `눈물을 글썽이면서도 미소를 지으며 팬들을 바라보는 우마무스메——`,
      );
      await era.printAndWait(
        `그런데 왠지 무언가를 몰래 살피는 듯하기도 하고, 일부러 무언가를 무시하려는 듯한 위화감이 느껴졌다.`,
      );
      await era.printAndWait(`기분 나쁜 위화감.`);
      await era.printAndWait(`그녀가 애써 외면하려는 방향으로 시선을 돌려보자——`);
      await era.printAndWait(`그곳에는 말없이 공연을 지켜보고 있는 ${zensky.name}가 있었다.`);
      await era.printAndWait(`이런 상황에서 그녀에게 말을 걸어야 할까?`);
      era.printButton(`아무리 그래도 분위기를 파악해야지.`, 1);
      era.printButton(`……아니야.`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await era.printAndWait(`지금 말을 거는 건 분위기를 너무 못 읽는 짓이다.`);
        await era.printAndWait(`당신은 조용히 그 자리를 떠났다.`);
      } else {
        await me.say_and_wait(`미안하지만, 잠시 지나갈게.`);
        await era.printAndWait(
          `주변 인파를 헤치고 나아가 당신은 ${zensky.name}의 근처까지 도달했다.`,
        );
        await me.say_and_wait(`……${zensky.name}.`);
        await era.printAndWait(
          `처음부터 물어보고 싶었던 질문이 있었지만, 막상 중요한 순간이 되니 어떤 말을 해야 할지 알 수 없었다.`,
        );
        await zensky.say_and_wait(`어라?`);
        await era.printAndWait(`${zensky.name}가 믿기지 않는다는 표정으로 당신을 바라보았다.`);
        await zensky.say_and_wait(
          `${me.actual_name}이(가) 어떻게 여기까지…… 미안해, 지금 머릿속이 좀 혼란스러워서.`,
        );
        await era.printAndWait(
          `평소보다 훨씬 경쾌한 말투였지만, 그 속에 담긴 억지스러운 느낌이 오히려 당신의 마음을 아프게 했다.`,
        );
        era.printButton(`……${zensky.name}.`, 1);
        era.printButton(`묻고 싶은 게 있어.`, 2);
        const ret2 = await era.input();
        if (ret2 === 1) {
          await zensky.say_and_wait(
            ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 어깨 좀 빌려줄 수 있을까?`,
          );
          await era.printAndWait(
            `당신이 묵묵히 어깨를 내어주자, ${zensky.name}는 당신의 팔을 꽉 껴안았다.`,
          );
          await era.printAndWait(
            `환호와 미소 뒤에 가려진 은퇴라는 굴레와 그로 인한 허탈함 속에서, 두 사람은 침묵하며 이 광경을 지켜보았다.`,
          );
        } else {
          await me.say_and_wait(`잠시만 기다려줘, ${zensky.name}.`);
          await zensky.say_and_wait(
            `미안해, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
          );
          await zensky.say_and_wait(`여긴 소리가 너무 커서 네 질문이 잘 안 들려.`);
          await zensky.say_and_wait(`질문이 있다면 돌아가서 이야기해도 될까?`);
          await era.printAndWait(
            `${zensky.name}는 폭풍 속에 있는 듯 당신의 질문을 전혀 듣지 못하는 것 같았다.`,
          );
          await era.printAndWait(
            `서둘러 떠나는 ${zensky.name}와 우연히 눈이 마주쳤지만, 초점 없는 그녀의 눈동자를 본 당신은 어찌할 바를 모른 채 멀어지는 뒷모습을 바라볼 뿐이었다.`,
          );
        }
      }
      event_marks.wind--;
      event_marks.mygo++;
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) &&
        (await era.waitAnyKey());
      return true;
    }
  }

async crazy_fan_end() {
    const event_marks = new MaEduMarks(),
      zensky = get_chara_talk(4),
      callname = sys_get_callname(this.id, 0),
      me = get_chara_talk(0);
    if (event_marks.Self_contempt === 1) {
      event_marks.Self_contempt++;
      await era.printAndWait(`트레이닝실\n`);
      await zensky.say_and_wait(`${me.actual_name}, 나 먼저 갈게. 내일 봐!`);
      await era.printAndWait(`${zensky.name}가 트레이닝실을 떠났다.`);
      await era.printAndWait(
        `어둑어둑한 하늘, 어제와 다를 바 없는 평범한 평일. 황혼과 밤의 경계에서 뿜어져 나오는 푸른 빛이 트레이닝실 안으로 쏟아져 들어왔다.`,
      );
      await era.printAndWait(`당신은 트레이닝실의 익숙한 좌석에 멍하니 앉아 있다.`);
      await era.printAndWait(`추가 트레이닝을 위해서도, 새로운 계획을 세우기 위해서도 아니었다.`);
      await me.say_and_wait(`어쩌면 내가 여기서 물러나는 게 나을지도 몰라.`);
      await era.printAndWait(
        `${zensky.name}의 능력이 부족해서가 아니다. 오히려 그녀는 모든 계획을 완벽하게 소화해냈고, 때로는 자신의 경험을 바탕으로 당신에게 조언을 해주기까지 했다.`,
      );
      await era.printAndWait(`진짜 문제는…\n`);
      await me.say_and_wait(
        `${zensky.name}라는 최상급 원석은 더 뛰어난 세공사가 다듬어야 한다.`,
      );
      await me.say_and_wait(`내 능력이 부족해. 그뿐이야.`);
      await me.say_and_wait(
        `${zensky.name}를 위해서라도 더 이상 아는 척할 순 없어. 조만간 솔직하게 털어놔야지.`,
        true,
      );
      await era.printAndWait(
        `당신은 바닷가에서 ${zensky.name}와 함께 찍은 사진을 부드럽게 쓰다듬다가, 반으로 찢고, 조각들을 모아 다시 반으로 찢었다.`,
      );
      await me.say_and_wait(
        `최고의 원석은 최고의 장인이 깎아야 해. 난 옳은 일을 하는 거야.`,
      );
      await era.printAndWait(`무표정한 얼굴로 더 이상 찢을 수 없을 때까지 반복했다.`);
      await era.printAndWait(
        `조심스럽게, 아주 세밀하게, 단 하나의 작은 파편조차 손바닥 밖으로 빠져나가지 않도록 모았다.`,
      );
      await era.printAndWait(
        `창문을 열고, 마음이 흔들릴 틈도 없이 손에 든 파편들을 하늘을 향해 힘껏 던졌다.`,
      );
      await era.printAndWait(
        `하늘로 날아오르려던 잔해들이 결국 무력하게 땅으로 떨어지는 모습을 보며, 당신의 마음도 함께 추락했다.`,
      );
      await me.say_and_wait(`슬슬 ${zensky.name}에게 모든 걸 말해야겠어.`, true);
      await era.printAndWait(`눈물과 땀이 서린 정든 트레이닝실을 떠났다.`);
      await era.printAndWait(`그리고 무겁게 문을 닫았다.\n\n\n\n\n\n`);
      await era.printAndWait(`——책상 위에 붙어 있는 포스트잇 한 장`);
      await era.printAndWait(`담당 우마무스메 ${zensky.name}와 옥상에서 만났다.`);
      await era.printAndWait(`……`);
      await era.printAndWait(`데뷔전 종료 후 ${zensky.name}와 예약한 식당에서 축하 파티.`);
      await era.printAndWait(`……`);
      await era.printAndWait(
        `사츠키상 종료 후, ${zensky.name}에게 운전과 요리 배우기(주: ${zensky.name}의 요리는 정말 맛있다!).`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(`그동안 함께해 줘서 고마워. 압박감을 이기지 못했어. 미안해.`);
      await print_event_name('BAD END: 나무가 자라면, 흙이 무너진다', zensky);
      await era.printAndWait(`얼마 후, 당신은 이사장에게 일방적으로 사직서를 제출했다.`);
      await era.printAndWait(
        `그 후로 영양분을 잃어버린 그 땅에서는 더 이상 새로운 싹이 돋아나지 않았다.`,
      );
    } else if (event_marks.happiness_day === 1) {
      event_marks.happiness_day++;
      await era.printAndWait(
        `그 후에 무슨 일이 있었는지는 모르겠지만, ${zensky.name}는 여전했다.`,
      );
      await era.printAndWait(
        `그 후로 세워둔 계획에 따라 모든 과정이 차근차근 마무리되었다.`,
      );
      await era.printAndWait(`얼마 지나지 않아——`);
      await era.printAndWait(`공항\n`);
      await zensky.say_and_wait(`${me.actual_name}, 배웅은 여기까지만 해줘도 돼.`);
      await me.say_and_wait(`파리에 도착하면 꼭 연락해야 해, 알았지?`);
      await zensky.say_and_wait(
        `후후~ 당빠지. 두 달간의 여행일 뿐이지만, 드디어 에펠탑에 가볼 기회가 생겼네.`,
      );
      await zensky.say_and_wait(
        `${me.actual_name}도 내가 없는 동안 다른 우마무스메랑 한눈팔면 안 된다?`,
      );
      await me.say_and_wait(`아하하하.`);
      await zensky.say_and_wait(`이 녀석이 정말!`);
      await era.printAndWait(`그녀가 당신의 이마를 검지로 가볍게 콩 때렸다.`);
      await me.say_and_wait(`아야!`);
      await zensky.say_and_wait(`샘통이다— 정말 눈을 뗄 수 없는 사람이라니까.`);
      await zensky.say_and_wait(`그럼, 나 출발할게.`);
      await me.say_and_wait(`조심해서 잘 다녀와!`);
      await zensky.say_and_wait(`${me.actual_name}도 돌아가는 길 조심해!`);
      await era.printAndWait(`왠지 모르게 ${zensky.name}가 쓸쓸한 표정을 지었다.`);
      await zensky.say_and_wait(`${me.actual_name}…… 아냐, 아무것도. 쪽.`);
      await zensky.say_and_wait(`이제 진짜 갈 시간이네.`);
      await era.printAndWait(`당신은 인파 속으로 사라지는 ${zensky.name}의 뒷모습을 지켜보았다.`);
      era.drawLine();
      await era.printAndWait(
        `3년 동안 서로를 의지해 온 파트너로서 호감은 있었지만, 결국 한 걸음 더 나아가지는 못했다.`,
      );
      await era.printAndWait(`무엇이 부족했던 걸까?`);
      await era.printAndWait(`하지만 이렇게 평온하게 끝을 맺는 것도 하나의 행복이겠지.`);
      await me.say_and_wait(`오늘 정말 날씨 좋다.`, true);
      await era.printAndWait(
        `당신은 가늘게 뜬 눈으로 비행기가 구름을 가르며 하얀 선을 그리는 것을 바라보았다.`,
      );
      await era.printAndWait(
        `언젠가 이런 날씨에 옥상 난간에 기대어 노래를 흥얼거리던 ${zensky.name}의 모습이 떠올랐다. 그녀의 노래가 닿는 곳을 따라 시선을 옮겼던 기억.`,
      );
      await era.printAndWait(`저게 바로 비행운이구나 하고 속으로 생각했다.`);
      await era.printAndWait(`오늘도 이렇게 평화롭게 지나간다.`);
      await era.printAndWait(
        `${zensky.name}도 매일매일 아픈 곳 없이 건강하게 지내기를.`,
      );
      await era.printAndWait(
        `그러고 보니 곧 신입 우마무스메 입학 시기네. 서둘러 새로운 원석을 찾아봐야겠어.`,
      );
      await era.printAndWait(
        `——마치 그 우울했던 시절에도 ${zensky.name}가 결코 포기하지 않았던 것처럼.`,
      );
      await era.printAndWait(
        `이제는 돌아올 수 없는 시간. 그녀가 떠난 방향을 마지막으로 한 번 더 바라본 뒤, 당신은 뒤도 돌아보지 않고 발걸음을 옮겼다.`,
      );
      await print_event_name('NORMAL END: 평범한 나날', zensky);
    } else if (event_marks.crazy_fan === 1) {
      event_marks.crazy_fan++;
      await era.printAndWait(`공항`);
      await zensky.say_and_wait(`배웅은 여기까지만 해줘도 돼.`);
      await era.printAndWait(
        `${zensky.name}는 ${me.actual_name}이(가) 꼭 쥐고 있던 캐리어를 건네받았다.`,
      );
      await me.say_and_wait(`파리에 도착하면 메시지 보내줘.`);
      await zensky.say_and_wait(`너무 걱정하지 마⭐ 그냥 잠시 파리로 여행 가는 거니까.`);
      await era.printAndWait(`${zensky.name}가 웃으며 ${me.actual_name}의 머리를 쓰다듬었다.`);
      await era.printAndWait(
        `그 어느 때보다 부드러운 손길이었지만, ${me.actual_name}는 오히려 공포를 느꼈다.`,
      );
      await me.say_and_wait(`잘 다녀와 라는 말이…… 도저히 입 밖으로 나오지 않아.`, true);
      await zensky.say_and_wait(
        `비록 먼 타국에 떨어져 있어도, 우리 사이의 유대감은 절대 끊어지지 않아.`,
      );
      await zensky.say_and_wait(`그러니까 조금 더 용기를 내, 내가 가장 좋아하는 ${callname}.`);
      await me.say_and_wait(`……그래, 마음속에서 따뜻한 무언가가 차오르는 게 느껴진다.`);
      await me.say_and_wait(`그럼, 이제 출발해야지——`);
      await zensky.say_and_wait(`——그래, 이제 헤어질 시간이네.`);
      await era.printAndWait(`맞잡았던 두 손이 떨어졌다.`);
      await era.printAndWait(
        `${me.actual_name}은(는) 캐리어를 끌고 떠나려는 ${zensky.name}를 지켜보았다.`,
      );
      await me.say_and_wait(`${zensky.name}!`);
      await era.printAndWait(`${me.name}이(가) 행동을 개시했다.`);
      await zensky.say_and_wait(`!`);
      await era.printAndWait(
        `${me.actual_name}은(는) ${zensky.sex}를 꽉 끌어안았다. 주변의 여행객들이 발걸음을 멈추고 ${me.get_couple_title()}을 쳐다보았다.`,
      );
      await zensky.say_and_wait(`${me.actual_name}, 이거 놔줘.`);
      await era.printAndWait(`한 번도 들어본 적 없는 ${zensky.name}의 초조한 목소리.`);
      await me.say_and_wait(`이대로 조금만 더, ${zensky.name}의 온기를 느끼게 해줘.`);
      await me.say_and_wait(`나 자신을 설득할 수가 없어.`);
      await me.say_and_wait(`그 바람이, 그 따뜻한 바람이 내 눈앞에서 사라지려 하고 있단 말이야.`);
      await zensky.say_and_wait(`——${callname}`);
      await era.printAndWait(`슬픔을 억누르려 애쓰는 소녀.`);
      await era.printAndWait(`그리고————`);
      await me.say_and_wait(`${zensky.name}`, true);
      await era.printAndWait(`${me.actual_name}도 꽉 끌어안겨졌다.`);
      await zensky.say_and_wait(`나도 무서워, ${callname}을 잃게 될까 봐.`);
      await zensky.say_and_wait(`고통도 슬픔도, 이제 더 이상 혼자 짊어지고 싶지 않아.`);
      await zensky.say_and_wait(
        `${me.name}과 함께, 같이 바람을 느끼고 같이 아침을 맞이하고 싶어.`,
      );
      await zensky.say_and_wait(
        `있지, ${callname}. 그냥 같이 떠나자. 이 슬픈 곳을 벗어나서.`,
      );
      await me.say_and_wait(`미안해.`);
      await era.printAndWait(`${me.name}의 가슴이 찢어지는 듯했다.`);
      await me.say_and_wait(`내가 저지른 죄에 대해, 지금 속죄하려고 해.`);
      await era.printAndWait(
        `슬픔으로 일그러진 ${zensky.name}의 얼굴을 직시하며 말을 이어갔다.`,
      );
      await me.say_and_wait(
        `이대로 도망친다면 트레이너로서의 나는 죽은 거나 다름없어.`,
      );
      await me.say_and_wait(
        `트레이너라는 신분을 잃으면, 너를 훌륭한 ${zensky.get_uma_sex_title()}로 키우겠다는 이상도 사라져버려.`,
      );
      await me.say_and_wait(`이상을 잃은 난 더 깊은 지옥으로 떨어지겠지.`);
      await me.say_and_wait(`그러니까 가줘, 내 곁에서 떠나줘.`);
      await era.printAndWait(
        `${me.name}은(는) ${zensky.name}의 부드러운 머릿결을 어루만지며 그녀의 심장 소리를 느꼈다.`,
      );
      await me.say_and_wait(`그러니까 ${zensky.name}————`);
      await era.printAndWait(
        `약간의 비릿한 혈향이 섞인 혀가 ${me.name}의 입안으로 강렬하게 파고들었다.`,
      );
      await era.printAndWait(`짧은 접촉 후, 아쉬움을 남기며 두 입술이 떨어졌다.`);
      await zensky.say_and_wait(
        `나 그렇게 쉽게 포기 안 할 거야. 그러니까 ${callname}.`,
      );
      await era.printAndWait([
        zensky.get_colored_name(),
        '/',
        me.get_colored_name(),
        '「',
        {
          content: '어디에 있든,',
          color: zensky.color,
        },
        ' 우리의 마음은 언제나 함께야.」',
      ]);
      await zensky.say_and_wait(`그러니까, 다시 한번 더.`);
      await era.printAndWait(`말은 필요 없었다. 찰나의 행복을 만끽할 뿐.`);
      await era.printAndWait(`————두 사람이 헤어질 때까지.`);
      await print_event_name('비 오는 날', zensky);
    } else if (event_marks.broken_tears === 1) {
      zensky.print(
        ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 이 편지를 읽을 때쯤 난 파리행 비행기 안에 있겠지?`,
      );
      zensky.print(`말도 없이 떠나서 미안해.`);
      zensky.print(
        `솔직히 말하면, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}과 함께한 날들은 매일매일이 행복했어.`,
      );
      zensky.print(
        `그러니까 딱히 원망하는 건 아니야.`,
      );
      zensky.print(`단지, 앞으로 가야 할 길을 마주할 용기가 조금 부족해서 어떻게 해야 할지 몰랐을 뿐이야.`);
      zensky.print(
        `이사장님께는 3개월 휴학 신청을 해뒀어. 프랑스를 여행하면서 기분 전환을 좀 하려고 해.`,
      );
      zensky.print(
        `그러다 보면 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이나 후배들을 어떻게 대해야 할지 답이 나오지 않을까♪`,
      );
      zensky.print(
        `……네 생각대로, 난 꼬리를 말고 도망치는 겁쟁이 우마무스메일지도 몰라.`,
      );
      zensky.print(`……아무리 생각해도 지금은 이 길밖에 없는 것 같네.`);
      zensky.print(
        `남겨진 후배들에게 미안한 마음은 있지만…… 아니, 그녀들은 스스로의 노력으로 분명 나를 뛰어넘을 거야!`,
      );
      zensky.print(
        `그녀들이 더 용기를 내서, 더 높은 곳을 향해 달려 나갈 거라고 진심으로 믿고 있어.`,
      );
      zensky.print(
        `아, 말이 너무 부정적이었지? ${
          era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
        }답지 못하게 말이야.`,
      );
      zensky.print(`프랑스에 도착하면 사진이랑 영상으로 이곳 소식을 전할게.`);
      zensky.print(
        `그때도 예전처럼 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 우마트위터에 대신 올려줄 거지?`,
      );
      zensky.print(`그걸 보면 후배들도 깜짝 놀라겠지!`);
      zensky.print(`그럼 그렇게 알고 있을게!\n\n\n\n\n\n`);
      zensky.print(`미안해.`);
      await era.printAndWait(
        `편지의 마지막 줄은 눈물에 젖어 글자가 뿌옇게 번져 있었다.`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(
        `하지만 ${zensky.name}는 이제 돌아오지 않는다. 당신도 가슴 속 깊이 알고 있었다.`,
      );
      await era.printAndWait(`어찌할 도리가 없었다.`);
      await print_event_name('마루젠스키의 편지', zensky);
    } else {
      await super.crazy_fan_end();
    }
  }
};  