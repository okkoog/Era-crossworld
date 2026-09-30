/**
 * @file 토카이 테이오 - 日常
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/daily/daily-3.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { escape_enum } = require('#/data/basement-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const r = {};
    const teio = get_chara_talk(this.id);
    r['대표색'] = teio.color;
    r['당신'] = era.get('callname:0:-2');
    return r;
  }

  async celebration(hook) {
    const me = get_chara_talk(0);
    const teio = get_chara_talk(3);
    const weeks = (era.get('flag:현재턴수') - 1) % 48;
    let ret;
    switch (weeks) {
      case 0:
        await print_event_name('새해', teio);
        await teio.say_and_wait(
          '새해야 트레이너! 준비됐어? 뭐 할까? 오늘은 함께 밤새 신나게 놀자!',
        );
        await era.printAndWait(
          `${me.name}은(는) 서둘러 ${teio.sex}에게 목소리를 낮추라고 손짓했다. ${teio.sex}가 계속 그렇게 소리치면 자신의 평판이 학생을 유혹하는 변태 교사로 전락할까 봐 걱정이었다. 이 아이는 정말 가만히 놔둘 수 없다.`,
        );
        await era.printAndWait(
          `하지만…… 곁에서 즐겁게 뛰어놀며 활력이 넘치는 담당 ${teio.get_uma_sex_title()}를 보고 있자니, ${
            me.name
          }은(는) 문득 1년 동안의 고생이 모두 보답받는 것 같다고 느꼈다.`,
        );
        break;
      case 5:
        await print_event_name('발렌타인데이', teio);
        await teio.say_and_wait('하찌미 하찌미~ 히힛~');
        await era.printAndWait(
          `${me.name}이(가) 책상에서 고개를 들자, 등 뒤로 손을 숨긴 채 싱글벙글 웃으며 바라보는 ${teio.get_uma_sex_title()} ${teio.get_teen_sex_title()}가 보였다.`,
        );
        await teio.say_and_wait('트레이너~ 이건 내가 만든 선물이야~');
        await era.printAndWait(
          `${teio.sex}가 손을 앞으로 내밀자, 아주 정교하지는 않지만 정성껏 포장된 작은 상자가 ${me.name}의 눈앞에 나타났다.`,
        );
        era.print([me.get_colored_name(), '은(는)——']);
        era.printButton('선물을 받는다', 1);
        era.get('love:3') >= 75 && era.printButton(`테이오까지 한꺼번에 먹어버린다`, 2);
        ret = await era.input();
        if (ret === 1) {
          await era.printAndWait(
            `${me.name}은(는) 선물을 건네받아 감사를 표하고, ${teio.sex}가 보는 앞에서 조심스레 포장을 뜯어 안의 초콜릿을 입에 넣었다.`,
          );
          await era.printAndWait(
            `평소 돌봐주던 학생들과 동료들이 보낸 대여섯 개의 초콜릿을 내려놓은 뒤, ${me.name}은(는) 책상 앞에 앉아 업무를 시작했다.`,
          );
        } else {
          await era.printAndWait(
            ` ${me.name}은(는) ${teio.sex}의 손에서 선물 상자를 받았지만 서둘러 먹지 않았다. 대신 ${teio.sex}의 손을 잡은 채로 천천히 다른 한 손을 이용해 포장을 풀기 시작했다.`,
          );
          await era.printAndWait(
            ` ${teio.sex}의 얼굴이 귓가까지 붉어질 때쯤, ${me.name}은(는) 갑자기 ${teio.sex}를 품에 끌어안고 초콜릿을 머금은 채 입을 맞췄다.`,
          );
          await era.printAndWait(
            `꿀과 카카오의 달콤한 향기가 ${teio.get_teen_sex_title()}의 작은 혀를 휘감았다……`,
          );
          await quick_into_sex(3);
        }
        break;
      case 29:
        await print_event_name('축제', teio);
        await era.printAndWait(
          `${me.name}이(가) 초대를 보내자, 곧바로 ${teio.name}에게서 답장이 왔다.`,
        );
        await teio.say_and_wait(`트—레이—너—!`);
        await era.printAndWait(
          `${teio.get_teen_sex_title()}는 앳된 티를 벗어던진 귀여움과 은근한 섹시함이 감도는 유카타로 갈아입고, ${
            me.name
          } 앞에서 한 바퀴 빙그르르 돌았다.`,
        );
        await teio.say_and_wait(`이 옷 어때?`);
        era.printButton('「음……」', 1);
        await era.input();
        await era.printAndWait(`대답하기 곤란하다.`);
        await era.printAndWait(`내면 깊은 곳에서 무언가 툭 끊어지는 소리가 들린 것 같았다.`);
        await era.printAndWait(
          `몸집이 아담한 ${teio.get_teen_sex_title()}가 입은 유카타는, 아직 성장이 덜 끝났음에도 거부할 수 없는 매력을 지닌 몸매를 완벽하게 드러내고 있었다.`,
        );
        await era.printAndWait(
          `가장 윗부분의 하얀 귀 커버는 마치 어린 ${teio.get_uma_sex_title()}의 순수한 학생 신분을 강조하는 듯했으나, 그 아래로 헐렁한 천 사이로 드러난 겨드랑이와 옆구리 선이 눈길을 사로잡았다.`,
        );
        await era.printAndWait(
          `평소엔 숨겨져 있던 매끄럽고 하얀 속살이 ${me.name}의 시야에 완전히 노출되어 있었다. 마음만 먹는다면 손을 뻗어 그 감촉을 직접 확인해 볼 수도 있을 텐데……`,
        );
        await teio.say_and_wait(`으응?`);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          teio.get_teen_sex_title(),
          '의 아름다운 자태에 넋을 잃어 한동안 눈을 떼지 못했다.',
        ]);
        era.printButton('참을 수 없어!', 1, { disabled: era.get('love:3') < 75 });
        era.printButton('강철의 의지!', 2);
        if ((await era.input()) === 1) {
          await era.printAndWait(
            ` ${
              me.name
            }은(는) 크게 숨을 들이켜고, 무거워진 발걸음으로 ${teio.get_uma_sex_title()} 곁으로 다가가 큰 손을 뻗었다——`,
          );
          await quick_into_sex(3);
        }
        break;
      case 39:
        await print_event_name('할로윈', teio);
        await era.printAndWait([
          '오늘의 업무를 정리하고 사무실을 정돈한 뒤, ',
          me.get_colored_name(),
          '은(는) 잠시 쉬며 학원의 종소리를 기다렸다.',
        ]);
        await era.printAndWait('오늘, 무언가 일이 일어날 것이다.');
        await era.printAndWait([me.get_colored_name(), '은(는) 정해진 운명을 기다린다.']);
        era.println();
        await era.printAndWait('「똑——, 똑똑똑, 똑——」');
        await era.printAndWait([
          '기묘한 노크 소리가 들려오자, ',
          me.get_colored_name(),
          '은(는) 숨을 죽이고 문 뒤로 몸을 숨겼다가 그대로 문을 확 열어젖혔다——',
        ]);
        era.println();
        await era.printAndWait('붉은색 덩어리가 안으로 뛰어들어왔다.');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 소리 없이 달려들었다.',
        ]);
        era.println();
        await teio.say_and_wait('와앗!');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '의 기습은 성공하지 못했다. ',
          teio.sex,
          '가 재빨리 몸을 돌리는 바람에 ',
          me.get_colored_name(),
          '와(과) 정면으로 부딪히고 말았다.',
        ]);
        era.println();
        await teio.say_and_wait('테이오 님을 놀라게 할 순 없지!');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '의 담당은 두 손을 허리에 얹은 채 빨간 망토 차림을 하고 한 손에는 바구니를, 다른 한 손으로는 ',
          me.get_colored_name(),
          '을(를) 붙잡았다.',
        ]);
        era.println();
        await teio.say_and_wait('나쁜 어른은 얼른 나랑 놀아줘야 해!');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 연신 고개를 끄덕이며, 약속대로  함께 밖으로 나섰다……',
        ]);
        break;
      case 47:
        await print_event_name('크리스마스', teio);
        await teio.say_and_wait(
          '크리스마스야! 음, 트레이너가 산타 할아버지가 돼서 선물을 주든가, 아니면 밤새도록 나랑 신나게 놀아줘야 해!',
        );
        await era.printAndWait(
          `${me.name}은(는) 항의해 보았지만, 역시나 기운 넘치는 담당의 고집을 꺾을 수는 없었다.`,
        );
        break;
      default:
        return await super.celebration(hook);
    }
    era.set('cflag:3:축제이벤트표시', 0);
  }

  good_morning() {
    const life_marks = LifeEventMarks.get_marks(3),
      me = get_chara_talk(0),
      teio = get_chara_talk(3),
      temp = get_random_value(0, 4);
    if (life_marks.b_escape) {
      switch (life_marks.b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:다리부상')) {
            teio.say('그렇구나…… 하아.');
          } else {
            teio.say('테이오 님의 트레이너…… 하하.');
          }
          break;
        case escape_enum.beat:
          teio.say('정말…… 미안해.');
          era.print([
            teio.sex,
            '가 고개를 숙여 사과하고, 이후 말과 행동으로 진심을 다해 미안함을 표현했다.',
          ]);
          era.print([
            me.get_colored_name(),
            '은(는) 받아들였다. 하지만 ',
            me.get_colored_name(),
            '은(는) 최근 담당이 스태미나 트레이닝에 너무 몰두하는 게 아닌가 하는 기분이 들었다……',
          ]);
          break;
        case escape_enum.strike:
          teio.say('정말…… 미안해.');
          era.print([
            teio.sex,
            '가 고개를 숙여 사과하고, 이후 말과 행동으로 진심을 다해 미안함을 표현했다.',
          ]);
          era.print([
            me.get_colored_name(),
            '은(는) 받아들였다. 하지만 ',
            me.get_colored_name(),
            '은(는) 요즘 어둠 속에서 누군가의 시선이 계속 자신을 쫓는 듯한 기분이 들었다……',
          ]);
      }
      life_marks.b_escape = 0;
      return;
    }
    let talk_arr;
    if (temp === 0) {
      era.print([
        teio.get_colored_name(),
        `가 다른 ${teio.get_uma_sex_title()}들과 이야기를 나누던 중, `,
        me.get_colored_name(),
        `이(가) 이름을 부르는 소리를 듣고 대화를 마치더니 이쪽으로 달려왔다.`,
      ]);
    } else if (temp === 1) {
      era.print([
        teio.get_colored_name(),
        {
          color: teio.color,
          content: '「아…… 좋은 아침이야 트레이너. 뭐? 나 어제 밤 안샜어!」',
        },
        ' (하품)',
      ]);
    } else {
      talk_arr = [
        '오늘 훈련은…… 이런 것들이구나! 제대로 해낼게!',
        `에엑, 벌써 시작하는 거야?`,
        `하치미를 너무 많이 마셨나…… 속이 좀 안 좋네.`,
      ];
      teio.say(get_random_entry(talk_arr));
    }
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(3)) {
      return super.good_night(hook);
    }
    const check = get_custom_check(3).is_want_make_love(),
      me = get_chara_talk(0),
      teio = get_chara_talk(3);
    era.print(`바쁜 하루가 끝나고, ${me.name}은(는) ${teio.name}를 학생 기숙사 앞까지 배웅했다.`);
    if (check > 0) {
      era.print(
        '평소처럼 헤어지려던 찰나, 왠지 모르게 양쪽 다 움직임을 멈췄고 현장에는 짧은 침묵이 흘렀다……',
      );
      era.print([
        teio.get_colored_name(),
        ' / ',
        me.get_colored_name(),
        '「',
        { content: '저기, ', color: teio.color },
        '으음——」',
      ]);
      era.print(
        `침묵 끝에 동시에 말을 꺼내자 분위기가 다시 묘해졌다. 하지만 그 상황이 우스웠는지 ${teio.get_uma_sex_title()}의 눈가에 미소가 번졌고, 용기를 얻은 듯 ${
          teio.sex
        }가 ${me.name}보다 한발 앞서 입을 열었다.`,
      );
      teio.say('그게, 외박 신청을 미리 해뒀거든. 그래서 오늘은……');
      if (
        await select_yes_or_no(
          [
            '목소리가 점점 작아지고 뺨이 붉게 달아올랐다. ',
            me.get_colored_name(),
            '은(는) ',
            teio.sex,
          '의 이런 모습을 보고 더 이상 참지 못하고 결심했다——',
          ],
          '수락한다',
          '거절한다',
        )
      ) {
        hook.arg = 1;
      } else if (check === 2) {
        if (era.get('status:3:다리부상')) {
          await teio.say_and_wait('으음…… 그렇구나.');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 가슴을 펴고 자신을 바라보지만 눈빛이 흐려진 ',
            teio.sex,
            '를 보자 마음이 약해져, 한쪽 손을 뻗어 ',
            teio.sex,
            '의 머리를 쓰다듬었다.',
          ]);
          await era.printAndWait([
            '그런데 갑자기 ',
            teio.sex,
            '가 손을 들어, 가느다란 다섯 손가락으로 ',
            me.get_colored_name(),
            '의 손바닥을 꽉 움켜쥐었다. ',
            me.get_colored_name(),
            '이(가) 힘을 주어 빼내려 했으나 미동조차 하지 않았다——',
          ]);
          await teio.say_and_wait([sys_get_colored_callname(3, 0), '……']);
          await era.printAndWait([teio.sex, '가 더욱 가까이 다가왔다.']);
          await teio.say_and_wait('나는…… 어떤 상황에서도, 절대로 놓아주지 않을 거야.');
        } else {
          await teio.say_and_wait(
            '그—래—? 그럼 가자! 짐이랑 장소는 다 준비해뒀으니까!',
          );
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 무어라 말하기도 전에 뛰어난 체력을 발휘한 ',
            teio.get_uma_sex_title(),
            '에게 이끌려 바람처럼 강제로 이동당했다…… 어쩌면 ',
            me.get_colored_name(),
            '의 의견은 지금 이 순간 중요하지 않을지도 모른다. ',
            teio.get_colored_name(),
            '는 그저 ',
            me.get_colored_name(),
            '에게 다음에 일어날 일을 통보했을 뿐이었다.',
          ]);
        }
        hook.arg = 2;
      } else {
        hook.arg = 0;
      }
    } else {
      teio.say('내일 봐, 트레이너!');
      era.print(
        `피곤한 하루였지만 ${teio.sex}는 여전히 기운이 넘친다. ${me.name}은(는) 그런 생각을 하며 ${teio.sex}에게 손을 흔들어 작별 인사를 했다.`,
      );
    }
  }

  async load_talk() {
    const teio_marks = LifeEventMarks.get_marks(3),
      my_marks = LifeEventMarks.get_marks(0);
    if (
      (era.get('cflag:3:임신단계') !== 1 << pregnant_stage_enum.no &&
        !teio_marks.report) ||
      (my_marks.sperm === 3 &&
        era.get('cflag:0:임신단계') !== 1 << pregnant_stage_enum.no &&
        my_marks.report !== 1) ||
      era.get('exp:3:출산횟수') > 0 ||
      era.get('exp:3:아이숫자') > 0
    ) {
      const teio = get_chara_talk(3);
      await teio.say_and_wait([
        sys_get_colored_callname(3, 0),
        '……이 아이를 버리겠다고? 왜……?',
      ]);
      await era.printAndWait(
        [
          teio.get_colored_name(),
          {
            color: get_gradient_color(teio.color, '#ff0000', 0.5),
            content:
              '「어째서…… 어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
      await era.printAndWait(
        [
          teio.get_colored_name(),
          {
            color: 'red',
            content: '「어째서…… 어째서어——!」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '3rem' },
      );
    }
  }

  async office_cook() {
    const teio = get_chara_talk(3),
      me = get_chara_talk(0);
    await teio.say_and_wait('무적의 테이오 님은…… 응, 이런 것도 잘한다고!');
    await era.printAndWait(
      `${me.name}은(는) ${teio.sex}의 서툰 요리 솜씨를 보고 함께 돕기로 했다. 곧이어 보기 좋고 향기로운 음식들이 식탁 위에 가득 차려졌다.`,
    );
    await era.printAndWait([
      teio.get_colored_name(),
      ' / ',
      me.get_colored_name(),
      '「',
      { content: '잘 ', color: teio.color },
      '(잘) ',
      { content: '먹겠습니다!', color: teio.color },
      '」',
    ]);
    await era.printAndWait(
      `웃으며 눈을 맞춘 뒤, ${me.get_couple_title()}은 직접 만든 맛있는 음식을 즐기기 시작했다.`,
    );
  }

  async office_game() {
    const teio = get_chara_talk(3),
      me = get_chara_talk(0);
    await teio.say_and_wait('아앗! 무적의 테이오 님은 지지 않아!');
    await era.printAndWait(
      `화면 속 캐릭터가 조종자의 모습처럼 정신없이 움직이기 시작했다. ${
        me.name
      }은(는) 옆에서 온 신경을 집중하고 있는 ${
        teio.sex
      }를 힐끗 바라보았다. 어린 ${teio.get_uma_sex_title()}가 진지하게 컨트롤러를 조작하느라 이마에 땀방울까지 맺힌 것을 보고, ${
        me.name
      }은(는) 미소를 지으며 다시 게임 화면으로 시선을 돌렸다.`,
    );
  }

  office_gift() {
    return get_chara_talk(3).say_and_wait([
      '엣! 이거 ',
      sys_get_colored_callname(3, 0),
      '가 나한테 주는 선물이야? 지금 열어봐도 돼? 음…… 돌아갈 때까지 기다리라고? 알았어, 그래도 정말 고마워!',
    ]);
  }

  async office_rest() {
    const teio = get_chara_talk(3),
      me = get_chara_talk(0),
      relation = era.get(`relation:3:0`);
    if (relation > 150) {
      await me.say_and_wait(`자, 일어나렴, 테이오 ${teio.get_adult_sex_title()}.`);
      await teio.say_and_wait(`으응—— 히히~`);
      await era.printAndWait(
        `${teio.get_teen_sex_title()}의 몸이 ${
          me.name
        } 위로 엎어지며, ${me.get_couple_title()}은 함께 소파 속으로 깊숙이 파묻혔다.`,
      );
      await era.printAndWait(
        `${me.name}의 목덜미를 간지럽히는 숨결을 느끼며, ${
          me.name
        }은 담당 ${teio.get_uma_sex_title()}의 등과 꼬리털을 조심스럽게 쓰다듬어 주었다.`,
      );
    } else {
      await era.printAndWait(
        `테이오가 드물게 조용해졌다. ${me.name}은(는) ${teio.sex}와 함께 소파에 앉아 한가로운 시간을 공유했다.`,
      );
    }
  }

  async office_study() {
    const teio = get_chara_talk(3),
      me = get_chara_talk(0);
    await me.say('무적의 테이오 님에게도 모르는 게 다 있네.');
    await era.printAndWait(
      `${me.name}이(가) ${teio.sex}를 조금 놀리자, ${teio.sex}가 입술을 삐죽 내밀며 노려보았다. ${me.name}은(는) 헛기침을 몇 번 한 뒤 본격적인 공부를 가르쳐주기 시작했다.`,
    );
  }

  async out_church() {
    const relation = era.get(`relation:3:0`),
      teio_talk = get_chara_talk(3),
      me = get_chara_talk(0);
    await teio_talk.say_and_wait('트레이너~ 빨리빨리! 같이 점괘 뽑으러 가자!');
    await era.printAndWait(
      `어린 ${teio_talk.get_uma_sex_title()}가 ${me.name}의 손을 잡고 사당으로 달려갔고, ${
        me.name
      }은 보폭을 넓혀 뒤를 쫓았다. 목적지에 도착했을 때 ${me.name}은(는) 이미 땀범벅이 되어 있었다……`,
    );
    await era.printAndWait(
      `손에서 전해지던 부드러운 감촉이 빠져나가고, ${teio_talk.name}가 점괘통을 들어 올려 눈을 가늘게 뜨고 웃으며 마구 흔들었다——`,
    );
    await teio_talk.say_and_wait('히힛—— 하앗!');
    await era.printAndWait(
      `아이처럼 신나게 흔든 끝에 대나무 살 하나가 튀어나왔고, ${me.name}은(는) 손가락 사이에 끼워 잡으며 내용을 확인했다.`,
    );
    switch (get_random_value(0, 3)) {
      case 0:
        await era.printAndWait('(소길)');
        await era.printAndWait(
          `${me.name}이(가) 이를 전해주자 테이오는 만족스러운 듯 웃었다.`,
        );
        break;
      case 1:
        await era.printAndWait('(중길)');
        await era.printAndWait(
          `${me.name}이(가) 내용을 읽어주자, 테이오는 제자리에서 가슴을 펴고 허리에 손을 얹으며 자신의 솜씨를 자랑하는 듯한 포즈를 취했다.`,
        );
        break;
      case 2:
        await era.printAndWait('(대길)');
        if (relation > 225) {
          await era.printAndWait(
            `${me.name}이(가) 다가가 대길 점괘를 보여주자, ${teio_talk.sex}가 그것을 가로채 확인하더니 기쁨에 겨워 환호하며 ${me.name}의 허리를 껴안고 품에 안겨왔다.`,
          );
        } else {
          await era.printAndWait(
            `${me.name}이(가) 크게 대길임을 선언하자, 테이오의 귀가 즐겁게 움찔거렸다. ${teio_talk.sex}는 순식간에 눈앞으로 다가와 ${me.name}의 손을 잡고 점괘를 확인하더니 히히 웃음을 터뜨렸다.`,
          );
        }
        break;
      case 3:
        await era.printAndWait('(흉)');
        await era.printAndWait(
          `${
            me.name
          }이(가) 잠시 머뭇거리며 말을 아끼자, 테이오도 눈치를 챘는지 어색하게 서 있었다. ${me.get_couple_title()}은 이 일을 깨끗이 잊어버리기로 했다.`,
        );
    }
  }

  async out_river(hook) {
    const teio = get_chara_talk(3),
      me = get_chara_talk(0);
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await teio.say_and_wait(`강가를 걷는 건 정말 상쾌해!`);
      await era.printAndWait(
        `${me.name}의 담당은 콧노래를 흥얼거리며 마치 춤을 추는 듯한 발걸음으로 걸어갔다. ${me.name}은(는) 즐거워하는 ${teio.sex}의 모습을 보며 앞으로 자주 와야겠다고 생각했다.`,
      );
    } else {
      await teio.say_and_wait('트레이너, 이쪽으로 와봐!');
      await era.printAndWait(
        `${teio.sex}는 말을 하며 신발을 벗고 얕은 물가로 맨발을 내디뎠다. 물속에서 비치는 매끄럽고 하얀 발이 유난히 귀여워 보였다.`,
      );
      await era.printAndWait(
        `저렇게 뛰어놀면 물고기가 다 도망가겠다고 생각하며 ${me.name}은(는) 쓴웃음을 지으며 낚시 준비를 시작했다.`,
      );
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street(),
      relation = era.get(`relation:3:0`),
      teio = get_chara_talk(3),
      me = get_chara_talk(0);
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await era.printAndWait(
          `${me.name}과(와) ${
            teio.name
          }는 게임 센터에서 한참 동안 즐거운 시간을 보낸 뒤, 나가기 전 남은 코인을 인형 뽑기에 '낭비'하기로 했다.`,
        );
        await era.printAndWait(
          `말은 그렇게 했지만, ${me.get_couple_title()}은 꽤 긴장한 모습으로 레버를 조작하며 신중하게 버튼을 눌렀다……`,
        );
        break;
      case 1:
        if (relation > 225) {
          await teio.say_and_wait('트레이너…… 무적의 테이오 님의 행운을 너한테 나눠줄게!');
          await era.printAndWait(
            `${teio.sex}가 ${me.name}에게 밀착하며 팔을 붙잡았다. 따뜻하고 부드러운 감촉과 기분 좋은 향기가 동시에 전해져오자, ${me.name}은(는) 조금 어색한 몸짓으로 상자 안에 손을 넣었다……`,
          );
        } else {
          await teio.say_and_wait(
            '음…… 무적의 테이오 님은 운으로도 지지 않아! 아마도……?',
          );
          await era.printAndWait(
            `${teio.sex}가 ${me.name}을(를) 바라보자 ${me.name}은(는) 고개를 끄덕였고, ${teio.sex}는 상자 속에 손을 넣었다……`,
          );
        }
        break;
      case 2:
        if (relation > 225) {
          await teio.say_and_wait('트레이너! 나 노래 어땠어?');
          await era.printAndWait(
            `${me.name}은(는) 입가에 가져갔던 컵을 황급히 내려놓고, 기대에 찬 눈빛으로 바라보는 담당을 향해 고민하는 척 포즈를 취했다. 방금 전까지 전력을 다해 《사랑은 더비☆》를 부른 ${teio.sex}의 두 뺨에는 아직 붉은 기가 가시지 않았다.`,
          );
          await era.printAndWait(
            `${me.name}이(가) 머릿속을 쥐어짜 내어 온갖 칭찬을 늘어놓자, 그 모습을 본 ${teio.sex}는 더욱 환하게 웃었다.`,
          );
        } else {
          await era.printAndWait(
            `어느새 들어온 노래방에서 ${
              teio.sex
            }의 강력한 요구로 ${me.get_couple_title()}은 한동안 즐거운 시간을 보냈다. 물론 대부분은 ${
              teio.sex
            }가 노래를 불렀지만 말이다.`,
          );
        }
        break;
      case 3:
        if (relation > 225) {
          await era.printAndWait(
            `테이오가 ${me.name}의 왼팔을 껴안고, 까치발을 들어 귓가에 속삭이며 영화 제목 하나를 말했다.`,
          );
          await era.printAndWait(
            `${me.name}이(가) 확인해보니 아주 달달한 로맨스 영화였다. 조금 우스운 기분이 들어 테이오의 머리를 쓰다듬으려 했으나, 부끄러워하면서도 확신에 찬 ${teio.sex}의 눈빛과 마주쳤다.`,
          );
          await era.printAndWait('음…… 그럼 연인처럼 같이 보러 갈까?');
        } else if (Math.random() < 0.5) {
          await era.printAndWait(
            `테이오의 강력한 주장에 못 이겨 ${me.name}은(는) 『도전적인 공포 스릴러 영화』를 골랐다.`,
          );
          await era.printAndWait(
            `아니나 다를까, 중요한 장면이 나올 때마다 어린 ${teio.get_uma_sex_title()}는 버티지 못했고, ${
              me.name
            }의 팔은 ${teio.sex}에게 꽉 붙잡혀 감각이 무뎌질 정도였다……`,
          );
        } else {
          await era.printAndWait(
            `${me.name}과(와) 테이오는 온 가족이 즐길 수 있는 코미디 영화를 보며 함께 박장대소했다.`,
          );
        }
    }
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(3);
    const teio = get_chara_talk(3),
      me = get_chara_talk(0),
      talk_arr = [];
    switch (hook.arg) {
      case 0:
        talk_arr.push(
          `${me.name}은(는) 평소처럼 ${
            teio.name
          } ${teio.get_adult_sex_title()}를 데리고…… 패밀리 레스토랑에 왔다. 이곳의 분위기는 ${me.get_couple_title()}에게 아주 잘 어울린다.`,
          `${me.name}이(가) 테이오에게 의견을 묻자 여기저기 가고 싶은 곳을 말하다가 결국 고르지 못하고 ${me.name}에게 선택을 맡겼다…… ${me.name}은(는) 적당히 맛있는 식당을 골라 데려갔다.`,
        );
        await era.printAndWait(get_random_entry(talk_arr));
        break;
      case 1:
        talk_arr.push(
          `${teio.name}와 ${me.name}은(는) 아주 자연스럽게 밀착해서 손을 잡고 걸었다. ${me.name}은(는) 문득 자신과 ${teio.sex}가 이전부터 이랬던가 싶어 이게 정말 데이트인지 새삼 고민에 빠졌다.`,
          `천천히 걷는 동안 두 사람의 몸이 닿았다 떨어지기를 반복했다. ${
            me.name
          }은 그 사이에서 느껴지는 ${teio.get_teen_sex_title()}의 미세한 수줍음을 느끼며 지금이 데이트 중임을 실감했다.`,
        );
        await era.printAndWait(get_random_entry(talk_arr));
        break;
      case 2:
        await teio.say_and_wait('트레이너 트레이너! 이것 좀 봐봐!');
        await era.printAndWait(
          `${teio.get_teen_sex_title()}의 외침이 들려오고, ${me.name}은(는) 오늘 벌써 21번째로 ${
            teio.sex
          }가 있는 곳으로 달려갔다. ${teio.get_phy_sex_title()}와 쇼핑하는 것만으로도 충분히 힘든 일인데, 이 ${teio.get_uma_sex_title()}${teio.get_adult_sex_title()}와 백화점에 오는 건 더더욱…… ${
            me.name
          }의 얼굴엔 자신도 모르게 쓴웃음이 걸렸다.`,
        );
        await era.printAndWait(
          `하지만 그러면서도 ${teio.sex}의 밝고 명랑한 모습을 볼 때마다, ${me.name}은(는) 피로를 잊고 기꺼이 몇 번이고 다시 동행해주고 싶어졌다.`,
        );
    }
  }

  async school_atrium(hook) {
    hook.arg = !(await select_action_in_atrium());
    const teio = get_chara_talk(3),
      me = get_chara_talk(0);
    if (hook.arg) {
      await teio.say_and_wait(
        era.get('status:3:다리부상')
          ? '지금의 나는…… 하하, 하하하, 으우우——'
          : '제길…… 정말 이기고 싶어, 이기고 싶다고! 나는 테이오야! 무적이라고! 난 반드시……',
      );
    } else {
      await era.printAndWait(
        `학원에서…… 이러는 게 정말 괜찮을까? ${me.name}의 마음속에 의구심이 생겼지만, 곁에 찰싹 달라붙은 테이오는 얼굴이 빨개졌을 뿐 다른 내색은 하지 않았다.`,
      );
      await era.printAndWait(
        ` ${teio.sex}의 그런 모습을 보자 ${me.name}도 오히려 안심이 되었고, 타인의 시선은 아랑곳하지 않은 채 연인처럼 농담을 주고받으며 시간을 보냈다.`,
      );
    }
  }

  async school_rooftop() {
    await get_chara_talk(3).say_and_wait('여기서 밥 먹으니까 기분이 색다른걸!');
    await era.printAndWait([
      get_chara_talk(0).get_couple_title(),
      '은 도시락을 펼쳐놓고…… 「옥상」에서? 함께 즐거운 점심시간을 보냈다.',
    ]);
  }

  select() {
    if (!sys_check_awake(0) || !sys_check_awake(3)) {
      return super.select();
    }
    const life_marks = LifeEventMarks.get_marks(3),
      teio = get_chara_talk(3);
    if (life_marks.b_escape) {
      switch (life_marks.b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:다리부상')) {
            teio.say('트레이너…… 아아.');
          } else {
            teio.say([
              sys_get_colored_callname(3, 0),
              '도 예전의 나보다 더 장난꾸러기가 된 것 같네.',
            ]);
          }
          break;
        case escape_enum.beat:
        case escape_enum.strike:
          if (era.get('status:3:다리부상')) {
            teio.say('내가 또 당신을…… 그리고 이 모든 것을 저버렸어.');
            era.print([
              teio.sex,
              '가 두 눈을 감고 주먹을 꽉 쥐었다. 손바닥이 붉게 물들어 금방이라도 피가 배어 나올 것 같았다.',
            ]);
          } else {
            teio.say('아, 나는……');
            teio.say('미안해, 트레이너.');
            era.print([teio.sex, '가 예전보다 훨씬 고분고분해진 듯하다.']);
          }
      }
      life_marks.b_escape = 0;
      return;
    }
    teio.say(
      Math.random() < 0.5
        ? `으음~ 무적의 테이오 님께 무슨 용건이라도?`
        : `흐흥, 나는 언제든지 준비됐어!`,
    );
  }

  async talk() {
    if (!sys_check_awake(3)) {
      return await super.talk();
    }
    const teio_talk = get_chara_talk(3),
      me = get_chara_talk(0);
    if (era.get('base:3:체력') < era.get('maxbase:3:체력') * 0.45) {
      if (get_random_value(0, 1)) {
        await teio_talk.say_and_wait('아…… 무적의 테이오 님도 지칠 때가 있구나아……');
      } else {
        await era.printAndWait([
          teio_talk.get_colored_name(),
          '가 고개를 들고 멍한 눈으로 ',
          me.get_colored_name(),
          `를 바라본다. 이제 ${teio_talk.sex}를 좀 쉬게 해줄 때인 것 같다……`,
        ]);
      }
    } else {
      let talk_arr;
      switch (era.get('cflag:3:컨디션')) {
        case -2:
          talk_arr = [
            teio_talk.get_colored_name(),
            `는 초조하게 발을 구르고 털도 부스스해졌다…… 지금은 아무것도 시키지 않는 게 좋겠다.`,
          ];
          break;
        case -1:
          talk_arr = [
            teio_talk.get_colored_name(),
            '의 입가에서 미소가 사라졌다…… 분위기가 좀 좋지 않아 보인다.',
          ];
          break;
        case 0:
          talk_arr = [
            teio_talk.get_colored_name(),
            '의 기운이 평소 같지 않다. 활기차 보이지만 어딘가 허전한 느낌이다.',
          ];
          break;
        case 1:
          talk_arr = [
            teio_talk.get_colored_name(),
            '가 운동장에서 가볍게 뛰며 몸을 풀고 있다. 꽤 의욕이 넘쳐 보인다.',
          ];
          break;
        case 2:
          talk_arr = [
            teio_talk.get_colored_name(),
            '가 신나서 제자리 높이뛰기를 하고 있다. 생기 넘치는 모습이 마치 ',
            me.get_colored_name(),
            '을(를) 초대하는 듯하다.',
          ];
      }
      await era.printAndWait(talk_arr);
    }
  }

  async end_talk() {
    await kojo['end_talk'](this.#dict);
  }
};
