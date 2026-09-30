/**
 * @file 키타산 블랙 - 育成
 * @author 小黑
 */
const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const kita_back_school = require('#/event/edu/edu-events-68/back-school');
const kita_out_start = require('#/event/edu/edu-events-68/out-start');
const kita_race_end = require('#/event/edu/edu-events-68/race-end');
const kita_week_end = require('#/event/edu/edu-events-68/week-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const { location_enum } = require('#/data/locations');
const { attr_enum, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async back_school(kita, me, callname, hook, extra_flag, event_object) {
    return await kita_back_school(kita, me, hook, event_object);
  }

  async crazy_fan_end() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    if (new KitaEduMarks().crazy_fan) {
      await kita.say_and_wait(`죄송해요, 트레이너님.`);
      await era.printAndWait(
        `고향으로 돌아가는 기차역 앞에 서서, ${kita.name}은 ${me.name}에게 깊이 고개를 숙였다.`,
      );
      await era.printAndWait(
        `평소 활기차던 ${kita.get_teen_sex_title()}의 모습은 온데간데없고, 안색은 창백했으며 눈가는 울었는지 붉게 부어올라 있었다.`,
      );
      await era.printAndWait(
        `레이스 패배를 이유로 분노한 팬들이 학원에 난입하여, ${me.name}을(를) 「원흉」이라 부르며 처단하려 했던 사건 때문이었다.`,
      );
      await era.printAndWait(
        `사건은 결국 어찌저찌 진정되었지만, 키타산은 더 이상 트레센 학원에서 트레이닝을 계속할 수 없게 되었다.`,
      );
      era.println();
      era.printButton(`「미안해, 키타산.」`, 1);
      await era.input();
      await kita.say_and_wait(
        `아니요, 제가 더 죄송해요. 트레이너님은 아무 잘못도 없으신걸요.`,
      );
      await era.printAndWait(
        `억지로 씁쓸한 미소를 지어 보였으나, ${kita.name}은 참지 못하고 다시 눈물을 흘렸다.`,
      );
      await era.printAndWait(
        `지난 며칠 동안, 이 ${kita.get_teen_sex_title()}는 대체 몇 번이나 울었던 것일까.`,
      );
      await kita.say_and_wait(
        `역시, 키타산은 승리할 수 있는 우마무스메가 아니었나 봐요.`,
      );
      await kita.say_and_wait(
        '외모도 평범하고, 튼튼하다는 것 말고는 장점도 없어서... 정말 죄송해요. 당신의 귀중한 시간을 너무 많이 뺏어버렸네요.',
      );
      await kita.say_and_wait(
        `제가 책임지고 물러날게요. 안녕히 계세요, 트레이너님.`,
      );
      await era.printAndWait(
        `고향행 버스에 올라타며, ${kita.name}은 웅웅거리는 휴대전화 너머로 무언가 속삭였다.`,
      );
      await era.printAndWait(`그 소리는 바람에 흩어져, ${me.name}의 귀에는 닿지 못했다.`);
      await era.printAndWait(`하지만 그날 이후, ${kita.name}에 대한 화제는 거짓말처럼 사그라들었다.`);
      await era.printAndWait(
        `${me.name}의 트레이너 인생에서 마치 ${kita.name}이라는 존재가 없었던 것처럼, 일상은 담담하게 흘러갔다.`,
      );
      await era.printAndWait(
        `그러나 가끔, ${
          me.name
        }은(는) 그 ${kita.get_teen_sex_title()}의 마지막 뒷모습—위태롭고 창백했던 그 뒷모습을 떠올리곤 한다.`,
      );
      await print_event_name(
        [
          {
            content: `귀향하는 ${kita.name}`,
            color: buff_colors[3],
          },
        ],
        kita,
      );
    } else if (era.get('love:68') < 75 && era.get('relation:68:0') > 75) {
      await era.printAndWait(`${kita.name}이 졸업한 뒤로 얼마나 시간이 흘렀을까.`);
      await era.printAndWait(
        `정확한 시간은 기억나지 않지만, 그 검은 ${me.get_teen_sex_title()}가 떠난 후에도 ${
          me.name
        }은(는) 여전히 트레이너로서의 삶을 살고 있었다.`,
      );
      await era.printAndWait(
        `새로운 아이들의 트레이너가 되어, 때로는 조금 엄격한 방식으로 훈련시키기도 했다.`,
      );
      await era.printAndWait(`그리고 결국 3년 뒤에는 아이들이 떠나가는 것을 배웅했다.`);
      await era.printAndWait(
        `어떤 아이들은 가끔 연락을 해오기도 하고 어떤 아이들은 소식이 끊기기도 했지만, 매년 한결같이 ${kita.name}는 당신이 한가할 때면 전화를 걸어오곤 했다.`,
      );
      await kita.say_and_wait(
        `트레이너님, 요즘 어떻게 지내세요?`,
      );
      await kita.say_and_wait(
        `새 담당요? 많이 힘들진 않으세요? 생각해보면 키타산은 그때 정말 말 잘 듣는 편이었잖아요~`,
      );
      await kita.say_and_wait(
        `저요? 아~ 저는 가수 데뷔를 준비하고 있어요. 에헤헤~ 역시 아버지도 이제 연세가 있으시니까요.`,
      );
      await era.printAndWait(
        `그렇게 서로의 근황을 묻고, 즐거운 이야기를 나누며, 함께했던 3년의 시간을 추억했다.`,
      );
      await era.printAndWait(
        `${kita.name}은 해맑게 웃으며 ${me.name}과(와) 축복의 말을 나누고는, 평소처럼 전화를 마쳤다.`,
      );
      await me.say_and_wait(`이걸로 됐어.`);
      await me.say_and_wait(`이걸로 충분해.`);
      await print_event_name(
        [
          {
            content: `트레이너님, 잘 지내시죠!`,
            color: buff_colors[3],
          },
        ],
        kita,
      );
    } else {
      return await super.crazy_fan_end();
    }
  }

  async out_church(kita, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 47 + 1) {
      return;
    }
    if (era.get('flag:현재상호작용캐릭터') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait_flag = false;
    await print_event_name('새해의 포부', kita);
    await era.printAndWait(
      `신사의 토리이 옆 구석에서, ${me.name}은(는) 열의에 가득 찬 ${kita.name}을 발견했다. 꽤나 오랫동안 ${me.name}을(를) 기다린 듯한 기색이었다.`,
    );
    await kita.say_and_wait(
      `트레이너님, 새해 복 많이 받으세요! 에헤헤~`,
    );
    await era.printAndWait(
      `${kita.name}은 ${me.name}에게 인사를 건네며 다다다 달려왔다. 작은 부츠가 돌바닥에 부딪히며 경쾌한 소리를 냈다.`,
    );
    await era.printAndWait(
      '매년 클래식 시즌의 무사 평탄을 기원하는 참배 전통 때문인지, 이 아이는 무척이나 들떠 있는 듯했다.',
    );
    await kita.say_and_wait(
      '그럼 지체할 것 없이, 올해의 성공을 위해 얼른 참배하러 가요!',
    );
    await era.printAndWait(
      `짙은 색 유카타를 입은 ${kita.name}은 귀여운 귀를 쫑긋거리며, 당신의 소매를 끌어당겨 싱글벙글 재촉했다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 키타산의 머리를 쓰다듬어 주고는, 그녀와 함께 신사에서 들려오는 북소리를 들으며 이끼 낀 긴 계단을 올랐다.`,
    );
    await era.printAndWait('탁, 탁, 탁……');
    await era.printAndWait(
      `두 사람의 조용하고 단조로운 발소리를 들으며, ${me.name}과(와) ${kita.name}은 약간 둥글게 마모된 88개의 계단을 밟았다.`,
    );
    await era.printAndWait(
      `앞서 달려나가는 ${kita.get_teen_sex_title()}를 쫓아 마지막 계단을 올라서자, ${me.get_couple_title()}의 앞에는 웃음소리가 가득한 활기찬 광경이 펼쳐졌다.`,
    );
    await kita.say_and_wait('우와아~ 도쿄의 신사도 고향 신사랑 느낌이 비슷하네요~');
    await era.printAndWait(
      `${kita.name}은 화려한 종이 등불이 수놓아진 길을 지나 새전함 앞으로 달려갔다. 그리고 정중하게 두 번 손뼉을 치고 고개를 숙였다.`,
    );
    await kita.say_and_wait(
      '음음음…… 내년 3월 레이스에 충분한 팬분들이 모일 수 있도록, 부디 많은 분이 제 레이스를 보러 오게 해 주세요……',
    );
    await era.printAndWait(
      `우마무스메다운 소박한 소원을 읊조리는 소리를 들으며, ${
        me.name
      } 역시 손뼉을 치고 기도를 시작했다.`,
    );
    era.printButton('（키타산이 더 빠르게 달릴 수 있기를）', 1);
    era.printButton('（키타산이 더 긴 레이스를 견딜 수 있기를）', 2);
    era.printButton('（키타산이 더 많은 기술을 익힐 수 있기를）', 3);
    const ret = await era.input();
    if (ret === 1) {
      wait_flag =
        get_attr_and_print_in_event(68, [25, 0, 0, 0, 0], 0) || wait_flag;
    } else if (ret === 2) {
      wait_flag =
        get_attr_and_print_in_event(68, [0, 20, 0, 0, 0], 0) || wait_flag;
    } else {
      wait_flag = get_attr_and_print_in_event(68, undefined, 20) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(kita, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 14) {
      return;
    }
    await print_event_name('팬 대감사제!', kita);
    await era.printAndWait(
      `팬들의 성원에 보답하기 위해, ${me.name}과(와) 키타산은 상점가 식당에서 감사 이벤트를 열었다.`,
    );
    await era.printAndWait(
      `박스를 쌓아 만든 임시 무대 뒤에서, 키타산은 마이크를 잡고 경쾌한 목소리로 트레센 타령을 부르고 있었다.`,
    );
    await kita.say_and_wait(`흔ー들흔들 하ー늘하늘 휘날리는 유카타~♪`);
    await era.printAndWait(
      `박자에 맞춰 몸을 흔들며 즐겁게 노래하는 키타산의 모습을, ${me.name}은(는) 무대 뒤에 앉아 묵묵히 지켜보았다. 오직 ${me.name}만이 볼 수 있는 소중한 모습이었다.`,
    );
    await era.printAndWait(
      `키타산이 평소 도와주던 상점가 사람들의 응원 덕분에, 이번 감사제도 무사히 막을 내렸다.`,
    );
    era.println();
    get_attr_and_print_in_event(68, [0, 0, 0, 0, 10], 10) &&
      (await era.waitAnyKey());
    era.set('cflag:68:축제이벤트표시', 0);
    return true;
  }

  async out_start(kita, me, callname, hook, extra_flag, event_object) {
    return await kita_out_start(kita, me, hook, event_object);
  }

  async race_end(kita, me, callname, hook, extra_flag) {
    await kita_race_end(kita, me, hook, extra_flag);
  }

  async school_atrium(kita, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 42) {
      return false;
    }
    await print_event_name('평온한 오후의 시간', kita);
    await era.printAndWait(
      `수업도 훈련 계획도 없던 어느 오후, ${me.name}은(는) 식당 옆 쪽문 근처에서 키타산을 발견했다.`,
    );
    await kita.say_and_wait(`아~ ${callname}, 안녕하세요!`);
    await era.printAndWait(
      `키타산은 캔음료 박스 두 개를 번쩍 들고, 꼬리를 살랑거리며 이쪽을 향해 인사했다.`,
    );
    await era.printAndWait(
      `${
        me.name
      }은(는) ${kita.get_teen_sex_title()}의 등 뒤로, 닫혀 있어야 할 식당 쪽문이 나무 막대기로 고정되어 있고 그 옆에 음료 상자 일곱 여덟 개가 산처럼 쌓여 있는 것을 보았다. 대체 뭘 하는 걸까.`,
    );
    await kita.say_and_wait(
      '아, 식당 매점 아주머니께서 음료 상자를 옮기다가 허리를 삐끗하셨거든요. 그래서 제가 대신 창고까지 옮겨 드리려고요.',
    );
    await kita.say_and_wait(
      `에헤헤…… ${callname}께 이런 모습을 들키다니, 조금 부끄럽네요……`,
    );
    await era.printAndWait(
      `${me.name}의 놀란 얼굴을 보고, ${kita.name}은 쑥스러운 듯 에헤헤 웃으며 상자로 얼굴을 가렸다.`,
    );
    await kita.say_and_wait(
      `${callname}, 나중에 다시 이야기해요! 저 마저 옮겨야 해서요.`,
    );
    await era.printAndWait(
      `그렇게 말하며 키타산은 박스 몇 개를 겹쳐 들고는, 아주 가뿐하게 쪽문 안으로 들어갔다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 키타산의 작지만 듬직한 뒷모습을 보며, 묘한 생각에 잠겼다.`,
    );
    era.println();
    get_attr_and_print_in_event(68, [0, 0, 0, 0, 5], 0) &&
      (await era.waitAnyKey());
    return true;
  }

  async train_fail(kita, me, callname, hook, extra_flag) {
    await CustomizedEdu.print_fail_info_in_train(
      kita,
      extra_flag.train,
      extra_flag.fumble,
    );
    if (extra_flag.train !== attr_enum.intelligence) {
      extra_flag['args'] = extra_flag.fumble
        ? fumble_result.fumble
        : fumble_result.fail;
      if (extra_flag.fumble) {
        await print_event_name('무리는 금물!', kita);
        await kita.say_and_wait(`아야야…… 이번엔 정말 좀 아픈데요……`);
        await era.printAndWait(
          `${kita.name}은 보건실 침대에 앉아 허리를 부여잡으며 잔뜩 일그러진 표정을 지었다.`,
        );
        await era.printAndWait(
          `오늘은 푹 쉬어야겠다고 ${me.name}이(가) ${kita.name}에게 일러주었다.`,
        );
        await kita.say_and_wait(
          `에엣, 쉬라고요? 하지만…… 지금 다들 한창 트레이닝 중일 텐데……?`,
        );
        await kita.say_and_wait(
          `정말…… 쉬어도 괜찮을까요? 가벼운 훈련이라도 좋으니까, 쉬고 싶지 않아요……`,
        );
        await era.printAndWait(
          `${me.name}은(는) 키타산의 부어오른 환부를 살폈다. 이건 누가 봐도 휴식이 우선이었다. 아니, 억지로 계속했다간 상황만 악화될 뿐이었다.`,
        );
        await kita.say_and_wait(
          `그렇네요…… 그럼 아쉽지만 마음을 가다듬고 푹 쉬도록 할게요……`,
        );
        await era.printAndWait(
          `${kita.name}은 조금 쓸쓸한 표정으로 이불 속에 들어가 멍하니 천장을 바라보았다.`,
        );
        await kita.say_and_wait(`보건실은 원래 이렇게 조용한 곳이었나요…… 조금 외롭네요……`);
      } else {
        await print_event_name('몸조심하기!', kita);
        await kita.say_and_wait(`아야야야…… 발목을 삐었나 봐요……`);
        await era.printAndWait(
          `보건실 의자에 앉아, ${kita.name}은 발목에 붙은 파스를 손가락으로 쿡쿡 찌르며 불만 가득한 표정으로 입술을 내밀었다.`,
        );
        await era.printAndWait(
          `오늘은 여기서 훈련을 중단하고 쉬어야 한다고 ${me.name}이(가) 말해주었다.`,
        );
        await kita.say_and_wait(`휴식인가요…… 정말 분해요……`);
        await kita.say_and_wait(
          `하지만 트레이너님께서 그렇게 말씀하신다면, 어쩔 수 없죠……`,
        );
        await era.printAndWait(
          `${kita.name}은 몸을 돌려 이불을 뒤집어쓰고는 잠을 청했다.`,
        );
      }
      hook.arg = 0;
    }
  }

  async train_success_add(kita, me, callname) {
    await print_event_name('추가 자율 트레이닝!', kita);
    await era.printAndWait([
      '훈련이 끝난 후에도, ',
      kita.get_colored_name(),
      '은 여전히 의욕이 넘치는 듯 보였다.',
    ]);
    await era.printAndWait([
      kita.sex,
      '는 저 멀리 지평선을 바라보았다. 석양이 지고 마지막 잔광이 대지를 적시고 있었다.',
    ]);
    await era.printAndWait(`곧 날이 어두워지겠지만, 아직 부족하다. 아직 한계에 도달하지 않았다.`);
    era.printButton('「계속 훈련하자!」', 1);
    era.printButton('「오늘은 여기까지 하자.」', 2);
    if ((await era.input()) === 1) {
      await kita.say_and_wait(['알겠습니다! 그럼 ', callname, ', 지켜봐 주세요!']);
      return true;
    } else {
      await kita.say_and_wait(`그렇군요, 좋아요~ 그럼 푹 쉬고 내일 다시 힘낼게요!`);
    }
    return false;
  }

  async week_end(kita, me, callname, hook, extra_flag, event_object) {
    return await kita_week_end(kita, me, hook, event_object);
  }

  async week_start(kita, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg,
      event_marks = new KitaEduMarks();
    let wait_flag = false;
    if (event_arg === 'beginning') {
      await print_event_name(
        `그저 평범하기 그지없는 ${kita.get_teen_sex_title()}`,
        kita,
      );
      era.println();
      await kita.say_and_wait(
        `${callname}! 오늘도 잘 부탁드립니다!`,
      );
      await era.printAndWait(
        `${me.name}에게 정중히 인사한 뒤, ${kita.name}은 울타리를 훌쩍 넘어 활기찬 어린 사슴처럼 트랙으로 뛰어들어 오늘의 훈련을 시작했다.`,
      );
      await era.printAndWait(
        `함께 훈련을 진행하며, 트레이너인 ${me.name}은(는) 담당 우마무스메의 소질을 대략 파악할 수 있었다.`,
      );
      await era.printAndWait(
        `우선, 무엇보다 중요한 사실은 ${kita.name}의 신체가 굉장히 튼튼하다는 점이다.`,
      );
      await era.printAndWait(
        `트랙에 들어선 지 겨우 20분 만에, ${kita.name}은 예상했던 30분 분량의 워밍업을 가뿐히 끝마쳤다.`,
      );
      await kita.say_and_wait(
        `${callname}, 준비 운동 끝났어요! 다음 계획은 뭔가요!?`,
      );
      await kita.say_and_wait('스피드 트레이닝인가요? 아니면 스태미나? 뭐든지 자신 있어요!');
      await era.printAndWait(
        `트랙 한복판에 서서, 열기 때문에 발그레해진 얼굴로 이쪽을 향해 외치는 우마무스메.`,
      );
      await era.printAndWait(`두 번째 특징은, 이 아이가 체계적인 계획 수립에는 서툴다는 것이다.`);
      await era.printAndWait(
        '집중력이 흐트러지는 것까지는 아니었지만, 좋게 말하면 상황에 따라 유연하게 움직이는 타입이었다.',
      );
      await era.printAndWait(
        `그러나 ${
          kita.name
        }이라는 우마무스메는 스스로의 조건을 분석해 정밀한 전략을 세우는 스타일은 아니었다.`,
      );
      era.println();

      era.printButton('「키타산의 달리기 소질을 평가하는 훈련이야.」', 1);
      await era.input();
      await era.printAndWait(
        `말을 건네며 ${me.name}은(는) 다시 시선을 노트로 옮겼다. 사실, 가장 큰 문제가 하나 남아 있었다.`,
      );
      await kita.say_and_wait(
        '제 신체 소질을 평가하시는 거군요? 알겠습니다! 전력을 다해 제 실력을 보여드릴게요!',
      );
      await era.printAndWait(
        '잔뜩 신이 난 키타산은 꼬리를 살랑거리며 흰 페인트로 칠해진 스타트 라인 뒤로 달려갔다.',
      );
      await era.printAndWait(
        `고막을 울리는 출발 신호와 함께, 검은 우마무스메는 힘차게 지면을 차고 앞으로 달려 나갔다.`,
      );
      await era.printAndWait(
        `짙은 색 러닝슈즈가 잔디 위에 얕은 발자국을 남기고, ${kita.name}은 몸을 낮게 깔며 맹렬히 돌진했다.`,
      );
      await era.printAndWait(
        `만약 실제 레이스 대열이었다면, 그녀는 필히 선행 대열의 앞쪽을 차지하고 있었을 것이다.`,
      );
      era.println();

      era.printButton('「하지만……」', 1);
      await era.input();
      await era.printAndWait(`하지만, 압도적인 승리를 거머쥘 「결정적인 요소」가 보이지 않았다.`);
      await era.printAndWait(
        `${
          me.name
        }은(는) 걱정스러운 눈빛으로 키타산의 검은 실루엣을 바라보며, 저 작은 몸 안에 숨겨진 무언가 특별한 재능을 찾아내려 애썼다.`,
      );
      await era.printAndWait(
        `신체 조건 자체는 나무랄 데 없이 훌륭했지만, 실력자들이 즐비한 중앙에서는 그것만으론 부족했다. 타인을 압도할 수 있는 그녀만의 무기가 없다면……`,
      );
      await kita.say_and_wait('하아, 하아, 하아……');
      await era.printAndWait(
        `${
          me.name
        }은(는) ${kita.get_teen_sex_title()}의 고른 숨소리를 들었다. 잔디 위에서 탄탄하게 긴장된 저 하얀 종아리의 곡선은 경이로울 정도였고, 어느새 ${
          kita.sex
        }의 모습이 망막 안에서 점점 가까워졌다.`,
      );
      await era.printAndWait('하지만 신체 능력만으로는 멀리 갈 수 없다.');
      await era.printAndWait(`${me.name}은(는) 스톱워치를 눌렀다. 지극히 평범하고 표준적인 기록이었다.`);
      await era.printAndWait(
        `반드시 ${kita.name}에게 그녀만의 독자적인 무기를 찾아줘야 한다.`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [5, 0, 5, 0, 0], 0) || wait_flag;
    } else if (event_arg === 38) {
      const nature = get_chara_talk(60);
      await print_event_name('나이스 네이처 등장', kita);
      await era.printAndWait('10월 후반의 어느 날 오전.');
      await era.printAndWait(
        `데뷔전 이후 3개월 반 정도가 지났을 무렵, ${me.name}과(와) 키타산은 평소처럼 트랙에서 병주 훈련을 진행하고 있었다.`,
      );
      await era.printAndWait(`그리고 오늘 훈련의 파트너는……`);
      await kita.say_and_wait(`아, 네이처 선생님!`);
      await nature.say_and_wait(
        `야호~ ${callname}, 나 왔어~ 키타산, 많이 기다렸어?`,
      );
      await era.printAndWait(
        `이쪽을 향해 손을 흔들며 여유롭게 뛰어오는 네이처. 마침 시간이 비어 있던 그녀는 나른하게 웃으며 키타산과 담소를 나누기 시작했다.`,
      );
      await era.printAndWait(
        `오늘의 훈련 목표는 악조건 속에서의 의지와 인내력을 기르는 것. 내용은 진흙탕 트랙에서의 레이스 훈련이었다.`,
      );
      await era.printAndWait(
        `${kita.name}은 딱히 더트 적성이 있는 것은 아니었지만, 그렇기에 오히려 훈련 효과는 더 높을 것이다.`,
      );
      await kita.say_and_wait(
        `오늘 잘 부탁드려요, 네이처 선생님!`,
      );
      await nature.say_and_wait(`에이, 너무 격식 차리지 마. 그냥 네이처라고 불러도 돼~`);
      await era.printAndWait(
        `10분간의 워밍업을 마친 뒤, ${nature.name}와 ${kita.name}은 앞서거니 뒤서거니 트랙으로 들어서며 오늘의 훈련을 시작했다.`,
      );
      era.drawLine({ content: '잠시 후' });
      await era.printAndWait(`결론부터 말하자면, 상황이 좋지 않았다.`);
      await nature.say_and_wait(`우와아~ 키타산! 괜찮아?! 다리는 괜찮아?`);
      await kita.say_and_wait(
        `하아, 하아…… 괘, 괜찮아요…… 네이처 선생님!`,
      );
      await nature.say_and_wait(`그러니까 그냥 네이처라고 부르라니까……`);
      await era.printAndWait(
        `${nature.name}의 부축을 받으며, 진흙탕에서 크게 넘어진 ${kita.name}이 트랙 밖으로 나왔다. 그녀는 누가 봐도 억지로 참는 듯한 미소를 짓고 있었다.`,
      );
      await era.printAndWait(
        `담당 우마무스메가 지나치게 의욕을 앞세웠던 것인지, 아니면 트레이너의 훈련 방식에 무리가 있었던 것인지, 키타산은 훈련 종료 직전에 크게 고꾸라지고 말았다.`,
      );
      await era.printAndWait(
        `훈련 자체는 성과가 있었으나, 정규 훈련 이외의 추가 근성 훈련 계획은 당분간 중단하기로 했다.`,
      );
      await era.printAndWait(
        `간신히 몸을 일으켜 이쪽으로 걸어오는 ${kita.name}을 바라보며, ${me.name}은(는) 노트의 해당 항목에 굵게 엑스표를 쳤다.`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [0, 0, 0, 10, 0], 0) || wait_flag;
    } else if (event_arg === 47 + 10) {
      await print_event_name('악의 없는 작은 장난 ', kita);
      await era.printAndWait(
        `화이트 데이 아침, ${me.name}은(는) 일찍부터 잔디 트랙에서 ${kita.name}을 기다리고 있었다.`,
      );
      await kita.say_and_wait(
        `${callname}! 정말 일찍 오셨네요~`,
      );
      await era.printAndWait(`얼마 지나지 않아 키타산이 잔디 위를 달려왔다.`);
      await era.printAndWait(
        `상쾌한 공기를 들이마시며, ${
          me.name
        }은(는) 운동복 차림의 ${kita.get_teen_sex_title()}를 바라보았다. 그녀가 선물을 전혀 예상치 못하고 있다는 사실에 묘한 즐거움을 느끼며 천천히 다가갔다.`,
      );
      await kita.say_and_wait(
        `? ${callname}? 왜 그렇게 이상한 웃음을 짓고 계세요?`,
      );
      await era.printAndWait(
        `마치 경계심 많은 어린 사슴처럼 ${me.name} 앞에서 멈춰 선 ${kita.name}은, 허리를 숙이고 조심조심 다가왔다.`,
      );
      await era.printAndWait(
        `후후후, 도망치기는커녕 오히려 가까이 오겠다고? 역시 키타산답다. 하지만 이미 늦었어!`,
      );
      era.println();
      era.printButton('「해피 화이트 데이, 키타산~ 이건 트레이너가 주는 선물이야~」', 1);
      await era.input();
      await era.printAndWait(
        `큰 소리로 말하며 ${
          me.name
        }은(는) 선물을 쑥 내밀었다. 깜짝 놀란 ${kita.get_teen_sex_title()}는 반사적으로 가라테 대련 포즈를 취했다.`,
      );
      await era.printAndWait(
        `한참 동안 키타산을 놀려준 뒤, ${me.name}은(는) 흐뭇한 미소를 지으며 그녀가 포장을 뜯고 초콜릿을 먹는 모습을 지켜봤다.`,
      );
      await kita.say_and_wait(
        `감사합니다 ${callname}, 잘 먹을게ㅇ…… 윽, 셔! 이거 우메보시잖아요…… 아앗! 침 고여!`,
      );
      await era.printAndWait(
        `입에 넣는 순간, 자극적인 신맛에 ${kita.get_teen_sex_title()}의 표정이 반사적으로 일그러졌다.`,
      );
      await era.printAndWait(
        `침이 대량으로 분비되기 시작했다. 이것이 바로 ${me.name}이(가) 준비한 작은 장난—수많은 초콜릿 중에 딱 두 개 섞어놓은 우메보시 사탕 초콜릿이었다.`,
      );
      await era.printAndWait(
        `물론 그 후에 잔뜩 화가 난 키타산의 보복으로, ${me.name} 역시 남은 우메보시 사탕을 한입에 다 털어 넣고 침을 흘려야 했지만……`,
      );
      await era.printAndWait(`그건 뭐, 딱히 신경 쓸 일은 아니겠지~`);
      era.println();
      wait_flag = sys_like_chara(68, 0, 5, true, 1) || wait_flag;
    } else if (event_arg === 47 + 7) {
      await print_event_name('가족은 소중하니까', kita);
      await era.printAndWait(
        `어느 날 오전, ${me.name}과(와) ${kita.name}은 트레이닝실에 함께 있었다.`,
      );
      await era.printAndWait(
        `훈련 계획이 없던 터라, ${me.name}이(가) 내일의 교안을 정리하는 동안 키타산은 소파에 엎드려 무료한 듯 가족과 통화를 하고 있었다.`,
      );
      await kita.say_and_wait(`에엣, 최근에 그런 일도 있었어요? 대단하네 진짜……`);
      await kita.say_and_wait(`우헤헤. 엄마도 참, 애들을 너무 오냐오냐하면 안 된다니까요~`);
      await era.printAndWait(
        `가족과 즐겁게 대화하는 ${kita.name}을 보며, ${me.name}은(는) 문득 키타산의 어머니가 어떤 분인지 궁금해졌다.`,
      );
      await era.printAndWait(`${kita.name}의 어머니는 어떤 분이야?`);
      await kita.say_and_wait(`에, 저희 엄마요?`);
      await era.printAndWait(
        `그런 호기심을 담아, ${me.name}은(는) 키타산이 전화를 끊자마자 질문을 건넸다.`,
      );
      await kita.say_and_wait(
        `글쎄요, 음음…… 엄마가 어떤 분이냐고 물으신다면…… 그냥 평범하세요.`,
      );
      await kita.say_and_wait(
        `비록 엄마도 은퇴한 우마무스메 출신이시고 몸매도 아주 좋으시긴 하지만, 느낌은 그냥 평범하달까? 딱히 특별한 점은 없는 것 같아요.`,
      );
      await kita.say_and_wait(
        `아, 그래도 엔카는 정말 잘 부르세요! ${callname}도 기회가 되면 나중에 같이 불러보세요.`,
      );
      await era.printAndWait(
        `${kita.name}이 들려주는 엄마와의 일상 이야기를 들으며, ${me.name}은(는) 자기도 모르게 그녀의 가족과 만날 날을 기대하게 되었다.`,
      );
      await era.printAndWait(
        `그러는 사이 어느덧 ${me.name}의 교안 정리도 모두 끝이 났다.`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [0, 0, 5, 0, 0], 0) || wait_flag;
    } else if (event_arg === 47 + 11) {
      await print_event_name('듬직한 지원과 사츠키의 먹구름', kita);
      const teio = get_chara_talk(3);
      await kita.say_and_wait(
        `${callname}! 서류는 다 작성하셨죠! 틀린 곳은 없나요? 예를 들면 이름이라든가 나이라든가……`,
      );
      await kita.say_and_wait(
        `아아, 확인 시작까지 2분밖에 안 남았어! 무서워! 테이오 님도 예전에 이러셨나요!?`,
      );
      await era.printAndWait(
        `트레이닝실 안을 초조하게 왔다 갔다 하며, ${kita.name}은 손에 든 신청서를 몇 번이고 뒤적이며 걱정하고 있었다.`,
      );
      await era.printAndWait(
        `그럴 만도 했다. 팬 수를 충족했다고 해도 G1 레이스의 등록 심사는 무척이나 까다롭기 때문이다.`,
      );
      await era.printAndWait(
        `생애 첫 G1 등록을 앞둔 키타산에게 긴장되는 것은 당연한 일일 것이다.`,
      );
      await teio.say_and_wait(
        `걱정 마, 키타산~ 이 테이오 님께서 ${me.name}과(와) 함께 열 번도 넘게 확인했으니까. 너무 긴장하지 마.`,
      );
      await era.printAndWait(
        `소파에 앉아 여유롭게 하치미 드링크를 마시며, ${kita.name}의 아이돌인 ${teio.name}가 다리를 까닥거렸다.`,
      );
      await kita.say_and_wait(
        `하지만 테이오 님! 신청이 곧 시작인데, 제일 먼저 접수하지 않으면—`,
      );
      await teio.say_and_wait(
        `그치만 신청 기간은 오늘부터 일주일 정도잖아. 지금 서둘러봤자 어차피 일주일 뒤에 한꺼번에 심사한다고.`,
      );
      await era.printAndWait(
        `말을 마친 ${teio.name}는 손짓으로 ${kita.name}을 불러, 마시던 하치미 드링크를 자신의 작은 팬에게 쥐여주었다.`,
      );
      await teio.say_and_wait(
        `됐으니까~ 마음 편히 먹고 푹 쉬어~ 이런 건 트레이너 ${me.get_adult_sex_title()}에게 맡기면 된다니까.`,
      );
      await kita.say_and_wait(`으음…… 으으으으…… 그래도 역시 불안해요……`);
      await era.printAndWait(
        `그 모습을 지켜보던 ${me.name}은(는) 조용히 엔터 키를 눌러 신청을 마쳤다. 이미 접수되었다는 사실은 조금 나중에 말해주는 게 좋을 것 같았다.`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [3, 3, 3, 3, 3], 20) || wait_flag;
    } else if (event_arg === 47 + 29 || event_arg === 95 + 29) {
      if (
        era.get('cflag:0:위치') !== location_enum.beach ||
        era.get('cflag:68:위치') !== era.get('cflag:0:위치')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('여름 합숙', kita);
      await era.printAndWait(
        `어린 우마무스메들에게 있어, 중앙 학원이 매년 8월에 주최하는 여름 합숙은 휴가 다음으로 가장 기다려지는 날이다.`,
      );
      await era.printAndWait(
        `트레센 합숙이라고 하면 태양, 모래사장, 남쪽의 쾌적한 온도와 짭조름한 바다 내음이 떠오르기 마련이니까.`,
      );
      await era.printAndWait(
        `하지만 노련한 트레이너들에게 여름 합숙은 우마무스메의 능력을 비약적으로 향상할 수 있는 최적의 기회다.`,
      );
      await era.printAndWait(
        `합숙지의 완벽한 장비, 발목 부상을 방지해 주는 부드러운 모래사장, 수영 훈련에 최적인 투명한 바다. 아무리 엄격한 트레이너라도 절로 미소가 지어지는 환경이다.`,
      );
      await era.printAndWait(
        `그리고 ${kita.name}에게도 이번 여름 합숙은 자신의 힘을 효과적으로 다질 수 있는 최고의 시간이었다.`,
      );
      await kita.say_and_wait(
        `우와아! 모래사장이 정말 부드러워요! ${callname}, 보세요! 발이 푹푹 들어가요!`,
      );
      await era.printAndWait(
        `하얀 모래 위를 맨발로 이리저리 뛰며, 검은 우마무스메는 두 팔을 높이 들고 활짝 웃어 보였다.`,
      );
      await kita.say_and_wait(
        `하하, 기분 최고예요! 이 정도라면 어떤 힘든 훈련이라도 다 견뎌낼 수 있을 것 같아요~`,
      );
      await era.printAndWait(
        `어린아이처럼 좋아하는 ${kita.name}을 보니, ${me.name} 역시 왠지 모르게 들뜬 기분이 되었다.`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [0, 0, 10, 10, 0], 0) || wait_flag;
    } else if (event_arg === 47 + 48) {
      await print_event_name('크리스마스 이브의 저녁 식사', kita);
      await era.printAndWait(
        `크리스마스의 트레센은 지난 수십 년 동안 그랬듯 여느 때처럼 시끌벅적했다.`,
      );
      await era.printAndWait(
        `지금 ${me.name}과(와) ${kita.name}은 다른 이들처럼 식당에서 축제를 즐기며, 식당에서 준비한 크리스마스 특별 메뉴를 만끽하고 있었다.`,
      );
      await kita.say_and_wait(
        `음~ 감자튀김 곱빼기로 두 개랑, 치킨 텐더 네 개, 그리고 치킨버거에…… 콜라도 두 잔 주세요!`,
      );
      await era.printAndWait(
        `${me.name}의 곁에서, 담당 우마무스메는 발꿈치를 들고 카운터 뒤의 메뉴판을 살피며 고칼로리 음식들을 거침없이 주문했다.`,
      );
      await era.printAndWait(
        `앞으로 훈련 강도를 좀 더 높여야겠군…… ${me.name}은(는) 마음속 노트에 슬쩍 메모를 남겼다.`,
      );
      await kita.say_and_wait(
        `으헤헤~ 고마워요, ${callname}. 귀중한 크리스마스에 저랑 같이 놀아주셔서요.`,
      );
      await era.printAndWait(
        `음식이 한가득 담긴 쟁반을 들고 자리에 앉은 ${kita.name}은 쑥스러운 듯 웃으며 콜라를 ${me.name}에게 건넸다.`,
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 콜라를 마시며 주위를 둘러보았다. 드문드문 다른 아이들도 엄청나게 먹어치우는 모습이 보였다. 확실히 젊은 아이들에게 이 정도 양은 그리 이상한 일도 아닌 모양이다……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 시선을 돌리자, ',
        kita.get_colored_name(),
        '은 눈앞에서 감자튀김을 야금야금 먹고 있었다. 그저 평범한 서민 음식을 먹으면서도 참 행복해 보였다.',
      ]);
      era.println();
      era.printButton('「키타산은 감자튀김이 정말 잘 어울리는구나.」', 1);
      era.printButton('「키타산은 햄버거가 정말 잘 어울리는구나.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait(`에? 감자튀김이 잘 어울린다는 게 무슨 뜻이에요?`);
        await era.printAndWait(
          `따끈따끈한 감자튀김을 두 입에 쏙 집어넣으며, ${kita.name}이 궁금한 듯 물었다.`,
        );
        await era.printAndWait(
          `${
            me.name
          }은(는) 묘한 망설임을 느끼며 우마무스메의 입술을 빤히 바라보았다. 건강한 붉은빛이 도는 얇고 부드러운 입술이 립밤 때문인지 투명하게 반짝이고 있었다.`,
        );
        await me.say_and_wait(
          `아니, 그냥 감자튀김을 물고 있는 모습이 어린아이 같아서 귀엽다고.`,
        );
        await kita.say_and_wait(`헤에? 정말요…?`);
        await era.printAndWait(
          `${me.name}의 말대로 감자튀김 한 개를 입에 물자, 손가락 길이만 한 황금빛 조각이 자연스럽게 늘어졌다. ${kita.name}은 고개를 약간 숙여 얼굴을 가까이 가져왔다.`,
        );
        await era.printAndWait(
          `${kita.get_teen_sex_title()}의 천진난만하고 무방비한 얼굴이 ${
            me.name
          }의 눈앞에 바짝 다가왔다. 여전히 앳된 티가 가시지 않은 ${kita.name}은 눈을 깜빡이며 ${
            me.name
          }의 반응을 흥미진진하게 살폈다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 시선을 아래로 내렸다. 교복 깃 사이로 키타산의 하얀 목덜미와 매끈한 쇄골이 살짝 엿보였다.`,
        );
        await kita.say_and_wait(`음음음……`);
        await era.printAndWait(
          `감자튀김을 몇 입 만에 다 먹어치우고는, ${kita.get_teen_sex_title()}는 다시 의자에 등을 기대며 활기차게 남은 음식을 먹기 시작했다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 콜라를 마시며, 키타산과 함께하는 이 멋진 크리스마스를 즐기기 시작했다.`,
        );
        era.println();
        wait_flag = sys_like_chara(68, 0, 50) || wait_flag;
      } else {
        await kita.say_and_wait(`햄버거요?`);
        await era.printAndWait(
          `입안에 있던 감자튀김을 꿀꺽 삼키며, ${kita.name}이 궁금한 듯 물었다.`,
        );
        await era.printAndWait(
          `……아뿔싸, 말을 잘못 했나…… ${
            me.name
          }은(는) 망설이며 우마무스메의 투명하고 붉은 입술을 빤히 바라보았다.`,
        );
        await me.say_and_wait(
          `아니, 그러니까 키타산은 입을 크게 벌리고 햄버거를 복스럽게 먹는 게 잘 어울릴 것 같아서.`,
        );
        await era.printAndWait(
          `${me.name}의 대답을 들은 키타산은 볼을 부풀리며 뾰로통한 표정을 지었다.`,
        );
        await era.printAndWait(
          `당연한 반응이었다. 어떤 ${kita.get_child_sex_title()}가 그런 말을 듣고 좋아하겠는가……`,
        );
        await kita.say_and_wait(
          `${callname}…… 모처럼 즐거운 크리스마스인데, 절 화나게 해도 괜찮으신 거예요?`,
        );
        await era.printAndWait(
          `볼을 빵빵하게 부풀린 채 감자튀김을 바삭바삭 씹으며, ${kita.name}은 장난 섞인 위협을 건넸다.`,
        );
        era.println();
        era.printButton(`「미안해, 내가 잘못했어…… 부디 키타산 님께서 한 번만 용서해 주십시오……」`, 1);
        await era.input();
        await era.printAndWait(`흥~`);
        await era.printAndWait(
          `귀를 쫑긋거리는 ${kita.name}은 고개를 홱 돌리고는, 눈을 감고 손으로 더듬거려 감자튀김을 입에 넣었다.`,
        );
        await kita.say_and_wait(
          `음음음…… 어떻게 그런 말씀을 하실 수가 있어요. 저, ${callname}에게 정말 실망했다고요.`,
        );
        await era.printAndWait(
          `백번 천번 맞는 말이었다…… 아니, 이렇게 엉뚱한 소리를 했는데도 화를 안 내는 것만으로도 키타산의 아량이 넓은 것이리라……`,
        );
        await era.printAndWait(
          `${me.name}은(는) 두 손을 모아 기분이 상한 키타산에게 계속해서 사과의 말을 건넸다.`,
        );
        await era.printAndWait(
          `하지만 ${me.name}이(가) 사과하는 사이, 키타산은 슬쩍 고개를 돌려 그의 태도를 살피며 회심의 미소를 짓고 있었다.`,
        );
        await era.printAndWait(
          `결국 ${callname}도 햄버거가 잘 어울린다는 사실을 증명해야 한다며 억지로 입에 버거를 밀어 넣어진 뒤에야, 키타산은 만족한 듯 활짝 웃어 보였다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 햄버거를 씹으며 '벌'을 받았지만, 동시에 키타산과 함께하는 시간을 마음껏 즐겼다.`,
        );
        era.println();
        wait_flag = sys_like_chara(68, 0, 10, true, 2) || wait_flag;
      }
      era.set('cflag:68:축제이벤트표시', 0);
    } else if (event_arg === 95 + 1) {
      await print_event_name('키타산의 지인?', kita);
      await era.printAndWait('눈 깜짝할 사이에 1년이 지나고, 다시 새로운 해가 밝았다.');
      await era.printAndWait(
        `${me.name}의 담당 ${kita.name}에게 있어, 훈련 강도의 강화와 레이스 일정 조정으로 가득할 다가올 1년은 무척이나 중요한 시기였다.`,
      );
      await kita.say_and_wait(`음흐음~ 음흐음~ 흐음~음흐음~♪`);
      await era.printAndWait(
        `파자마 차림의 ${kita.name}이 문밖에서 콧노래를 부르며 무언가 준비하고 있었고, 그동안 ${me.name}은(는) 방 안에서 신년맞이 나베 요리를 준비했다.`,
      );
      await era.printAndWait(
        '어찌 됐든 새해는 즐겁게 보내야 한다. 기대감 때문에 키타산이 너무 압박을 느끼게 해서는 안 되니까.',
      );
      await era.printAndWait(
        '물론 트레이닝실에서 나베를 먹고 이불을 깔고 자는 게 조금 이상하긴 하지만 말이다.',
      );
      await era.printAndWait(
        `코타츠와 귤을 준비하고 있을 때, ${
          me.name
        }은(는) ${kita.get_teen_sex_title()}가 문을 여는 소리와 함께 묵직한 발소리를 들었다.`,
      );
      era.println();
      era.printButton('「어서 와, 키…… 키타산!?」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}이(가) 뒤를 돌아보자, 그곳에는 체격이 아주 건장한 사내 두 명이 서 있었다.`,
      );
      await era.printAndWait(
        '두 사람 모두 몸집이 엄청나게 컸고 흰색 양복을 입고 있었다. 안경을 쓴 한 남자는 얼굴에 흉터가 가득했고, 다른 남자는 턱에 수염이 나 있었다.',
      );
      await era.printAndWait(
        `냉혹한 표정, 상대를 꿰뚫어 보는 듯한 눈빛…… 아무리 봐도 야쿠자잖아! 하야카와 씨, 어째서 이런 사람들을 들여보낸 거야!?`,
      );
      await kita.say_and_wait(
        `아, 하나야마 오빠, 키류 오빠! 이분이 바로 제 ${callname}이에요~`,
      );
      await era.printAndWait(
        `거구의 사내들 등 뒤에서 담당 우마무스메가 쏙 빠져나오더니, 선물이 든 종이봉투를 안고 ${me.name}을(를) 소개하기 시작했다.`,
      );
      await kita.say_and_wait(
        `${callname}, 예전에 말씀드렸던 하나야마 오빠랑 키류 오빠예요.`,
      );
      await kita.say_and_wait(
        `히히, 인상은 좀 무서워 보여도 키타산이랑 정말 친한 좋은 분들이니까 겁먹지 마세요.`,
      );
      await era.printAndWait('하나야마 「아.」');
      await era.printAndWait('키류 「음.」');
      await era.printAndWait(
        `두 사내는 동시에 고개를 끄덕이더니, 키타산의 뒤에서 ${me.name}에게 의외로 사람 좋아 보이는 미소를 지어 보였다. 그리고 상점가에서 사 온 양고기 봉투를 들어 올렸다.`,
      );
      await era.printAndWait(
        `그렇게 ${me.name}은(는) 전설적인 사나이들과 함께 야쿠자식 휴식을 즐기며 여유로운 시간을 보냈다.`,
      );
      era.drawLine({ content: '잠시 후' });
      await kita.say_and_wait(`내년에 또 보자! 키류 오빠, 하나야마 오빠!`);
      await era.printAndWait(
        `나베를 먹으며 전설적인 무용담을 몇 시간 동안 나눈 뒤, ${me.name}과(와) 키타산은 두 형님이 교문을 향해 걸어가는 모습을 배웅했다.`,
      );
      await era.printAndWait(
        `……그리고 두 사람은 정자에 앉아 있던 하야카와 ${kita.get_adult_sex_title()}에게 아주 깊숙이 고개를 숙여 인사했다.`,
      );
      await era.printAndWait(
        `마지막 장면은 못 본 걸로 하자. ${me.name}은(는) 그렇게 생각하며 몸을 돌려 이 아름다운 밤을 만끽했다.`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [10, 10, 10, 10, 10], 0) || wait_flag;
      era.set('cflag:68:축제이벤트표시', 0);
    } else if (event_arg === 95 + 6) {
      await print_event_name('약간 깨진 달콤한 술 맛', kita);
      await era.printAndWait(
        `시니어 시즌의 발렌타인데이, ${kita.name}과 트레이닝실에서 만나기로 약속했다.`,
      );
      await era.printAndWait(
        `초콜릿을 선물하는 날이지만, 문을 열고 들어가니 평소와 달리 한껏 꾸민 키타산의 모습이 보였다.`,
      );
      await kita.say_and_wait(
        `앗! ${callname}, 벌써 오셨어요!`,
      );
      await era.printAndWait(
        `고급스러운 기모노를 입은 ${kita.name}은 허둥지둥 테이블을 정리하더니, ${me.name}에게 긴장한 듯 깊이 고개를 숙였다.`,
      );
      await kita.say_and_wait(
        `${callname}, 해피 발렌타인! 그, 저기, 이거요! 키타산이 ${callname}께 드리는 진상품이에요. 부디 기쁘게 받아주세요!`,
      );
      era.println();
      era.printButton(`「선물이야? 고마워, 키타산.」`, 1);
      await era.input();
      await era.printAndWait(
        `기대를 품고 선물 상자를 열자, 고급스러운 상자 안에는 형체를 알 수 없을 정도로 부서진 초콜릿들이 들어 있었다.`,
      );
      await era.printAndWait(
        `그리고 상자 구석에서는 투명한 액체가 스며 나오고 있었다…… 이건 감주잖아!`,
      );
      await kita.say_and_wait(
        `우우…… ${callname}을 깜짝 놀라게 해 드리고 싶었는데, 왜 초콜릿이 다 부서져 버렸을까요……`,
      );
      await era.printAndWait(
        `상자 안의 처참한 광경을 확인한 ${kita.name}은 잔뜩 불안한 표정을 지었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 초콜릿 하나를 집어 입에 넣었다. 부서진 초콜릿 사이로 은은한 술맛이 감도는 달콤한 필링이 느껴졌다.`,
      );
      await era.printAndWait(
        `음, 담당 우마무스메가 발렌타인에 주는 최고의 초콜릿이었다. 키타산의 머리를 쓰다듬자, 부드러운 머릿결이 손바닥 사이로 기분 좋게 흘러내렸다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) ${kita.name}을 이끌어 테이블 앞에 앉히고, 함께 발렌타인 초콜릿을 즐기기 시작했다.`,
      );
      era.println();
      wait_flag = sys_like_chara(68, 0, 100) || wait_flag;
      event_marks.senior_valentine++;
      era.set('cflag:68:축제이벤트표시', 0);
    } else {
      return await super.week_start(
        kita,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    wait_flag && (await era.waitAnyKey());
  }
}