/**
 * @file 아그네스 타키온 - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/daily/daily-32.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const tachyon_out_church = require('#/event/daily/daily-events-32/out-church');
const tachyon_out_station = require('#/event/daily/daily-events-32/out-station');
const tachyon_school_atrium = require('#/event/daily/daily-events-32/school-atrium');
const tachyon_slave_end = require('#/event/daily/daily-events-32/slave-end');
const tachyon_talk = require('#/event/daily/daily-events-32/talk');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,number,number)>} */
const week_start_handlers = {};

[
  require('#/event/daily/daily-events-32/week-start-punishment'),
  require('#/event/daily/daily-events-32/week-start-hook-hate'),
].forEach((f) => f(week_start_handlers));

function common_escape(tachyon, life_marks) {
  tachyon.say(['정말 신기하군, ', sys_get_colored_callname(32, 0), '.']);
  tachyon.say([
    '분명 지하실에 있을 때 자네의 눈동자는 거의 빛을 잃어 어두웠는데…… 지금은 다시 사람을 빨아들이는 듯한 광채를 뿜어내고 있군.',
  ]);
  tachyon.say([
    '『내 눈에 특별한 점이 있다면, 그건 반드시 타키온의 빛이 반사되었기 때문일 거야』라고? ……후후. ',
    sys_get_colored_callname(32, 0),
    ', 제법 입이 잘 돌아가는군……',
  ]);
  tachyon.say(['그럼…… 만약 내 눈동자가 다시 먼지로 더러워진다면, 그때 다시 한번 닦아주게나.']);
  life_marks.b_escape = 0;
}

module.exports = class extends CustomizedDaily {
  get #dict() {
    const ret = {};
    const tachyon = get_chara_talk(this.id);
    ret['대표색'] = tachyon.color;
    ret['호칭'] = sys_get_callname(this.id, 0);
    ret['그녀'] = tachyon.sex;
    return ret;
  }

  async week_start(_, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg]) {
      return await week_start_handlers[event_object.arg](
        get_chara_talk(32),
        get_chara_talk(0),
        sys_get_callname(32, 0),
        era.get('love:32'),
        era.get('relation:32:0'),
      );
    }
  }

  select() {
    const life_marks = new TachyonLifeMarks();
    if (new TachyonEduMarks().plan_b && life_marks.b_escape) {
      life_marks.b_escape = 0;
      return super.select();
    }
    if (!sys_check_awake(32) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    common_escape(get_chara_talk(32), life_marks);
  }

  good_morning() {
    const tachyon = get_chara_talk(32),
      life_marks = new TachyonLifeMarks();
    if (life_marks.b_escape) {
      return common_escape(get_chara_talk(32), life_marks);
    }
    tachyon.say(
      '왔는가, 그럼 온 김에 문 앞에 있는 쓰레기 봉투 세 개 좀 버려주게…… 실험을 돕겠다고? 자네가 필요해지면 자연스럽게 부를 테니 걱정 말게.',
    );
    era.print([tachyon.get_colored_name(), '은 실험으로 한창 바쁜 모양이었다.']);
  }

  async talk() {
    if (!sys_check_awake(32)) {
      return await super.talk();
    }
    await tachyon_talk();
  }

  async office_cook(hook) {
    const life_marks = new TachyonLifeMarks(),
      tachyon = get_chara_talk(32);
    if (era.get('relation:32:0') <= 150 && life_marks.cook === 0) {
      hook.override = true;
      await tachyon.say_and_wait('나에게 요리를 해주겠다고? 입에 대기도 힘든 음식이라면 거절하겠네.');
      await era.printAndWait('정말 까다로운 식객이었다…… 요리 실력을 좀 더 정진한 뒤에 다시 도전해야 할 것 같았다.');
      return;
    }
    const buffer = [],
      callname = sys_get_callname(32, 0),
      edu_marks = new TachyonEduMarks(),
      me = get_chara_talk(0);
    if (edu_marks.plan_b && era.get('cflag:32:육성턴수합산') <= 47 + 44) {
      const coffee = get_chara_talk(25);
      buffer.push(
        async () => {
          await era.printAndWait([
            '본래 ',
            me.get_colored_name(),
            '과(와) ',
            tachyon.get_colored_name(),
            '은 번갈아 가며 도시락을 준비하기로 약속했었다.',
          ]);
          await era.printAndWait([
            '하지만 최근 ',
            coffee.get_colored_name(),
            '의 훈련량이 늘어난 탓에 ',
            me.get_colored_name(),
            '은(는) 차분히 요리를 할 시간을 내기 어려웠다.',
          ]);
          await era.printAndWait([
            '때문에 요즘은 거의 ',
            tachyon.get_colored_name(),
            '이 도시락을 만들고, ',
            me.get_colored_name(),
            '은(는) 그것을 먹으며 ',
            tachyon.sex,
            '와 정보를 교환하곤 했다.',
          ]);
          era.printButton('「정말 맛있어!」', 1);
          await era.input();
          await tachyon.say_and_wait('후후, 나쁘지 않지?');
          await era.printAndWait([
            '놀라움을 금치 못하는 ',
            me.get_colored_name(),
            '과(와) 달리, ',
            tachyon.get_colored_name(),
            '은 시종일관 담담한 태도를 유지했다.',
          ]);
          await tachyon.say_and_wait('그야, 딱히 다른 할 일도 없으니까 말이야.');
          await era.printAndWait([
            '이 말을 내뱉는 ',
            tachyon.sex,
            '의 목소리에 슬픔이 섞여 있었을까.',
          ]);
          await era.printAndWait([me.get_colored_name(), '은(는) 알 길이 없었다.']);
        },
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            '은 ',
            me.get_colored_name(),
            '이(가) 만든 도시락을 평소처럼 먹고는, 곧바로 ',
            coffee.get_colored_name(),
            '의 잠재력을 끌어낼 약제를 연구하러 돌아갔다.',
          ]),
        async () => {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이 만든 도시락을 먹었다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            tachyon.sex,
            '는 예전보다 훨씬 과묵해졌으며, 사소한 대화를 나누기보다는 어떻게 하면 ',
            coffee.get_colored_name(),
            '를 더 빠르게 달리게 할 수 있을지에만 집중하고 있었다.',
          ]);
          await era.printAndWait([
            '말수가 적고, 전념하며, 요리까지 잘한다. 어떤 의미에서는 지금의 ',
            tachyon.get_colored_name(),
            '이 예전의 ',
            tachyon.sex,
            '보다 세상에서 말하는 현모양처의 이미지에 더 가까울지도 몰랐다.',
          ]);
          await era.printAndWait([
            '하지만 역시…… 열정과 패기가 넘치던 그 시절의 ',
            tachyon.sex,
            '이 그리워지는 것은 어쩔 수 없었다.',
          ]);
        },
      );
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait(['힘내게나, ', callname, '~~']);
        await tachyon.say_and_wait(
          '음? 같이 요리하자는 건 자네가 만들고 내가 옆에서 훈수를 두겠다는 뜻이 아니었나?',
        );
      });
      if (era.get('relation:32:0') > 375) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([
              callname,
              '! 오늘은 내가 직접 달걀 부침을 해봤네! 어서 먹어보게!',
            ]);
            await me.say_and_wait('……');
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 눈앞의 시커멓게 탄, 달걀이 완전히 밖으로 삐져나와 부침이라기보다 달걀 볶음에 가까운 무언가를 바라보았다……',
            ]);
            await era.printAndWait('음…… 그래도 일단, 맛은 먹을 만했다.');
          },
          async () => {
            await tachyon.say_and_wait([
              '……',
              callname,
              ', 자네도 알다시피 학원에서는 안전 문제로 인덕션 같은 것만 사용해서 요리를 해야 하지 않는가.',
            ]);
            await tachyon.say_and_wait(
              '하지만…… 난 인덕션에는 서툴러서 말이야. 그러니까…… 이건 내 문제가 아니라 인덕션이 쓰기 불편한 게 문제네. 가스레인지였다면 절대 이렇지 않았을 거야……',
            );
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 눈앞의 새까맣게 탄 달걀을 바라보았다.',
            ]);
            await era.printAndWait('……조금 쓰고 짜지만, 그럭저럭 먹을 수는 있었다.');
          },
          async () => {
            await tachyon.say_and_wait(
              '생각해보니 트레이닝실에서 요리를 한다는 것 자체가 비합리적인 일이었군.',
            );
            await era.printAndWait([
              '오늘 도시락을 만들기로 약속했던 ',
              tachyon.get_colored_name(),
              '이 배달 음식 용기 두 개를 꺼내 놓았다.',
            ]);
            await era.printAndWait('……분명 먹을 수는 있겠지만, 원래 취지에서는 한참 벗어난 것 같았다.');
          },
        );
      }
    }
    await get_random_entry(buffer)();
    life_marks.cook++;
    life_marks.l_cook = era.get('flag:현재턴수');
  }

  async office_study() {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      tachyon = get_chara_talk(32);
    buffer.push(
      () =>
        tachyon
          .say_and_wait(['아, ', callname, ', 실례지만 이 장을 좀 지도해줄 수 있겠나?'])
          .then(() =>
            tachyon.say_and_wait(
              '『타키온에게도 모르는 게 있을 줄은 몰랐다』라니, 비행기도 정도껏 태우게. 나도 내 지식의 미천함 정도는 스스로 잘 알고 있네.',
            ),
          ),
      async () => {
        await tachyon.say_and_wait([
          '아, ',
          callname,
          ', 미안하지만 이쪽 분야에 대해 가르쳐줄 수 있겠나?',
        ]);
        await tachyon.say_and_wait(
          '음음, 맞네, 바로 이 장이야. 과학 윤리. 왠지 모르게 이건 도무지 외워지질 않는군. 참 이상한 일이야……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '시험을 위해 공부한다니, 그렇게 얻은 지식이 정말 쓸모가 있을까?',
        );
        await tachyon.say_and_wait(['자네도 내 뜻을 이해하겠지, ', callname, '.']);
        await tachyon.say_and_wait('생활에서 전혀 쓸모없는 것을 공부하는 건 시간 낭비일 뿐이네.');
        await tachyon.say_and_wait(
          '그러니까 윤리나 도덕같이 고리타분하고 케케묵은 사상만 가득한 과목은 배우지 않아도 상관없지 않겠나?',
        );
        await tachyon.say_and_wait('……안 되는 건가?');
      },
      async () => {
        await tachyon.say_and_wait([
          '지리? 아니, ',
          callname,
          '…… 자네는 내가 이런 간단한 과목조차 보충이 필요하다고 생각하는 건가?',
        ]);
        await tachyon.say_and_wait(
          '못 믿겠다면 시험해 보게. 스위스의 수도는 베른, 브라질의 공식 언어는 포르투갈어, 미국의 전신은 13개 식민지…… 보게나, 전부 대답하지 않았나?',
        );
        await tachyon.say_and_wait('남쪽이 어디냐고? 흥, 우문이군. 당연히 땅속 아니겠나.');
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          ', 이 작문에 대해서 말인데, 내 글의 어디가 문제인지 도무지 모르겠군.',
        ]);
        await tachyon.say_and_wait('문제가 커튼이 왜 파란색인지를 묻지 않았나?');
        await tachyon.say_and_wait(
          '그래서 색의 생성 원리와 인간이 원추세포를 통해 얻는 정보에 기반해 2만 자 분량의 분석을 썼는데, 이게 뭐가 문제라는 거지?',
        );
        await tachyon.say_and_wait(
          '……과연, 글자 수 초과였군. 다음번엔 2천 자 내외로 조절해 보도록 노력하지.',
        );
      },
    );
    await get_random_entry(buffer)();
  }

  async office_rest() {
    const callname = sys_get_callname(32, 0),
      me = get_chara_talk(0),
      tachyon = get_chara_talk(32);
    if (era.get('cflag:32:컨디션') === -2) {
      await tachyon.say_and_wait('나에게 휴식은 필요 없네.');
      await era.printAndWait([
        '상태가 눈에 띄게 좋지 않은 ',
        tachyon.get_colored_name(),
        '이 억지로 고집을 부리며 말했다.',
      ]);
      await tachyon.say_and_wait('아직 할 일이 산더미처럼 쌓여 있는데, 쉴 여유 따위 있을 리가……');
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 실험대 앞에 고집스럽게 앉아 있는 ',
          tachyon.get_colored_name(),
          '을 뒤에서 껴안았다.',
        ]);
        await era.printAndWait([tachyon.sex, '의 몸이 가볍게 떨렸다.']);
        await tachyon.say_and_wait(['……', callname, ', 미인계를 써도 소용없네.']);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 실험대 앞에 버티고 앉아 있는 ',
          tachyon.sex,
          '를 강제로 일으켜 세웠다.',
        ]);
      }
    } else {
      await get_random_entry([
        () =>
          tachyon.say_and_wait(['피곤하군, 피곤해. ', callname, ', 어서 홍차 한 잔 타 오게나.']),
        () =>
          era.printAndWait([
            me.get_colored_name(),
            '은(는) 직접 내린 홍차를 마시며 ',
            tachyon.get_colored_name(),
            '과 함께 소파에 앉아 한가로운 오후를 보냈다.',
          ]),
        async () => {
          await tachyon.say_and_wait('정말 한가하군.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 평화로운 일상에 대해 짤막한 감상을 남겼다.',
          ]);
        },
      ])();
    }
  }

  async office_prepare() {
    const tachyon = get_chara_talk(32);
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '준비? 준비는 약자나 하는 것이네, ',
        sys_get_callname(32, 0),
        '. 자네는 사자가 훈련하는 걸 본 적이 있는가?',
      ]);
    } else {
      await tachyon.say_and_wait(
        '에이, 왜 굳이 레이스 전에 준비를 해야 하는 거지? 레이스도 시험과 마찬가지로 평소의 실력을 측정하는 것 아닌가……',
      );
      await tachyon.say_and_wait(
        '설마 자네, 시험 직전에야 벼락치기를 해서 낙제를 면하길 바라는 그런 부류인가?',
      );
    }
  }

  async office_game() {
    const tachyon = get_chara_talk(32);
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '쳇…… 이 기체는 너무 느리군. ',
        tachyon.get_uma_sex_title(),
        '의 출력 속도를 전혀 따라오지 못하는구만!',
      ]);
    } else {
      await tachyon.say_and_wait('격투 게임? 진 쪽이 상대의 말을 듣기로 하는 건가?');
      await tachyon.say_and_wait(
        '후후, 커맨드 리스트를 전부 외운 나를 이길 방법이 있을 것 같은가?',
      );
      await tachyon.say_and_wait(
        '……잠깐! 구석에 박혀서 원거리 공격만 계속하는 건 너무 비겁하지 않은가!',
      );
    }
  }

  async school_atrium(hook) {
    return await tachyon_school_atrium(hook);
  }

  async school_rooftop() {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      edu_marks = new TachyonEduMarks(),
      me = get_chara_talk(0),
      relation = era.get('relation:32:0'),
      tachyon = get_chara_talk(32);
    if (edu_marks.plan_b && era.get('cflag:32:육성턴수합산') <= 47 + 44) {
      const coffee = get_chara_talk(25);
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            '은 옥상에서 조용히 선선한 바람을 느끼고 있었다. 무표정한 저 얼굴은, 다시 ',
            coffee.get_colored_name(),
            '의 훈련 플랜을 구상하고 있는 것일까.',
          ]),
        () =>
          era.printAndWait([
            me.get_colored_name(),
            '은(는) 기분 전환을 위해 ',
            tachyon.get_colored_name(),
            '을 데리고 옥상에 올라와 도시락을 먹었다. ',
            tachyon.sex,
            '는 식사 중에도 끊임없이 ',
            coffee.get_colored_name(),
            '에 관한 이야기를 늘어놓았다.',
          ]),
        async () => {
          await era.printAndWait([tachyon.sex, '는 왠지 모르게 난간 너머의 하늘을 뚫어지게 응시하고 있었다.']);
          await era.printAndWait('그 눈동자에는 아무런 감정의 동요도 없이, 그저 하늘의 풍경만이 반사되고 있었다.');
          await tachyon.say_and_wait(['……무슨 일인가, ', callname, '?']);
          await era.printAndWait([
            '까닭 모를 막연한 불안감이 ',
            me.get_colored_name(),
            '을(를) 덮쳤다.',
          ]);
          await era.printAndWait([
            '불안함에 휩싸인 ',
            me.get_colored_name(),
            '은(는) 엉겁결에 ',
            tachyon.sex,
            '의 손을 꽉 쥐었다가, 곧바로 다시 놓았다.',
          ]);
          await tachyon.say_and_wait([
            '……안심하게나, ',
            callname,
            '. 나는 아무 데도 가지 않을 테니.',
          ]);
        },
      );
      if (
        !edu_marks.roof_b &&
        edu_marks.plan_b &&
        era.get('relation:32:0') > 375
      ) {
        buffer.push(async () => {
          edu_marks.roof_b = 1;
          const coffee = get_chara_talk(25);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '를 데리고 머리도 식힐 겸 옥상에서 도시락을 먹기로 했다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 즐거운 듯 ',
            me.get_colored_name(),
            '이(가) 들려주는 ',
            coffee.get_colored_name(),
            '의 최근 훈련 성과를 들으며, 가끔 자신의 의견을 덧붙이기도 했다.',
          ]);
          await era.printAndWait('대화 중에 자신의 이야기는 단 한 마디도 나오지 않았다.');
          await era.printAndWait([
            '트레이닝에 참여할 수 없는 ',
            tachyon.sex,
            '. 아무리 틈을 내어 곁에 있어 준다고 해도, 다른 ',
            tachyon.get_uma_sex_title(),
            '들이 트레이닝할 때면 어쩔 수 없이 떨어져 있어야만 했다.',
          ]);
          await tachyon.say_and_wait(['요즘 ', tachyon.sex, '는 좀 어떤가?']);
          era.printButton('「……」', 1);
          era.printButton('「……너는? 너는 요즘 좀 어때?」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              coffee.get_colored_name(),
              '에 관한 화제가 끊기자 ',
              me.get_couple_title(),
              '은 갑작스러운 침묵에 빠졌고, 식사는 서둘러 마무리되었다.',
            ]);
          } else {
            await tachyon.say_and_wait('나? ……뭐, 늘 똑같지. 특별한 건 없네.');
            await era.printAndWait([tachyon.sex, '는 무심하게 대답했다.']);
            await era.printAndWait([
              tachyon.sex,
              '와 오랜 시간을 보낸 ',
              me.get_colored_name(),
              '은(는) 알 수 있었다. ',
              tachyon.sex,
              '는 적당히 둘러대는 것이 아니라, 진심으로 자신의 일상에 말할 거리가 없다고 느끼고 있다는 것을.',
            ]);
            await era.printAndWait([
              '그 사실을 깨닫자 ',
              me.get_colored_name(),
              '의 가슴 한구석이 아릿하게 저려왔다.',
            ]);
          }
        });
      }
    } else {
      buffer.push(
        () => tachyon.say_and_wait('아, 도시락은 거기 두게나. 풍속 측정이 끝나는 대로 먹을 테니.'),
        async () => {
          await tachyon.say_and_wait([
            '옥상에서 도시락인가…… 그러고 보니, ',
            callname,
            ', 자네는 옥상이 원래 출입 금지 구역이었다는 걸 알고 있나?',
          ]);
          await me.say_and_wait('에, 그런 일이 있었어?');
          await tachyon.say_and_wait([
            '그렇다네. 듣기로는 어떤 ',
            tachyon.get_uma_sex_title(),
            '가 옥상에서 실험을 하다가 실수로 독성 물질을 유출했다더군.',
          ]);
          await tachyon.say_and_wait('……왜 그런 표정으로 보는 건가?');
          await tachyon.say_and_wait('아니 아니, 당연히 내가 아니지.');
          await tachyon.say_and_wait(
            '뭐, 시간이 꽤 지났으니 잔류 물질은 진작에 사라졌겠지만 말이야.',
          );
          await tachyon.say_and_wait([
            '게다가 설사 남아 있다고 해도…… 지금의 내가 만든 약으로 단련된 ',
            callname,
            '이, 과거의 내가 만든 약 따위에 질 리가 없지 않겠나?',
          ]);
          await me.say_and_wait('역시 너였잖아!');
        },
        async () => {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 도시락을 챙겨 ',
            tachyon.get_colored_name(),
            '과 함께 옥상에서 점심을 먹었다.',
          ]);
          await era.printAndWait([
            '미풍이 ',
            tachyon.get_colored_name(),
            '의 머리카락을 간지럽히자, ',
            tachyon.sex,
            '는 킥킥거리며 웃음을 터뜨렸다. 꽤 즐거워 보이는 모양이었다.',
          ]);
          await era.printAndWait([
            '아무래도 ',
            tachyon.get_colored_name(),
            '은 이런 환경을 꽤 좋아하는 모양이었다. 기회가 되면 다시 ',
            tachyon.sex,
            '를 데리고 올라와야겠다고 생각했다.',
          ]);
        },
      );
      if (!edu_marks.roof_a && !edu_marks.plan_b && relation > 375) {
        buffer.push(async () => {
          edu_marks.roof_a = 1;
          await tachyon.say_and_wait('흥흥흥~~');
          await era.printAndWait([
            '오늘도 ',
            me.get_colored_name(),
            '은(는) 도시락을 들고 ',
            tachyon.get_colored_name(),
            '과 함께 옥상에서 점심을 먹었다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 바람을 즐기며 기분 좋게 도시락 속의 가라아게를 집어 들었다.',
          ]);
          await era.printAndWait('그때, 산들바람이 순식간에 강풍으로 변했다.');
          await tachyon.say_and_wait('아');
          await era.printAndWait('젓가락에 들려 있던 가라아게가 갑작스러운 돌풍에 바닥으로 떨어지고 말았다.');
          await era.printAndWait('아…… 정말 아깝게 되었다.');
          await era.printAndWait('하지만 괜찮다. 도시락에는 아직 다른 반찬이……');
          await era.printAndWait([
            '그 순간, ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이 망설임 없이 바닥에 떨어진 가라아게를 집어 드는 것을 보았다.',
          ]);
          await tachyon.say_and_wait('그럼, 잘 먹겠습니다—');
          era.printButton('「잠깐 기다려!?」', 1);
          await era.input();
          await tachyon.say_and_wait([
            '음? 무슨 문제라도 있나, ',
            callname,
            '. 자네는 설마 3초 룰도 모르는 건가?',
          ]);
          await era.printAndWait([
            '아니, 애초에 왜 ',
            tachyon.get_colored_name(),
            '이 그런 근거 없는 헛소문을 믿는지는 차치하고서라도, 방금 건 분명히 3초 넘었거든!?',
          ]);
          await tachyon.say_and_wait([
            '……에휴, ',
            callname,
            ', 과학적으로 말하자면 ',
            tachyon.get_uma_sex_title(),
            '의 위장은 겨우 이런 일로 탈이 날 만큼 나약하지 않다네.',
          ]);
          await me.say_and_wait('지금 그게 문제가 아니잖아!?');
          await tachyon.say_and_wait('어쨌든 난 이 가라아게를 먹겠네!');
          await me.say_and_wait('도시락에 아직 더 남아 있잖아!?');
          await era.printAndWait([
            me.get_colored_name(),
            '의 끈질긴 만류 끝에 결국 ',
            tachyon.get_colored_name(),
            '이 바닥에 떨어진 가라아게를 먹는 사태는 막을 수 있었다.',
          ]);
          await era.printAndWait([
            '그 대가로 그날 오후 내내 ',
            tachyon.sex,
            '는 원망 섞인 눈초리로 ',
            me.get_colored_name(),
            '을(를) 쏘아보았다.',
          ]);
          await era.printAndWait([
            '밤이 되어 잠자리에 들어서도 ',
            me.get_colored_name(),
            '의 귓가에는 ',
            tachyon.get_colored_name(),
            '의 한 맺힌 통곡 소리가 들려오는 듯했다.',
          ]);
          await tachyon.say_and_wait('내 가라아게가……');
          await me.say_and_wait(
            ['……내일 다시 ', tachyon.sex, '에게 가라아게를 만들어 줘야겠군.'],
            true,
          );
        });
      }
    }
    await get_random_entry(buffer)();
  }

  async out_river(hook) {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      me = get_chara_talk(0),
      tachyon = get_chara_talk(32);
    hook.arg = !!(await select_action_around_river());
    if (!hook.arg) {
      buffer.push(
        () => tachyon.say_and_wait('오호라, 낚아 올린 건 내일 도시락 재료로 써먹기로 하지.'),
        () =>
          tachyon.say_and_wait([
            '으으…… 왜 한 마리도 안 잡히는 건가…… ',
            callname,
            ', 만약 이 물고기들이 강물에 섞인 『정체불명의 물질』을 『실수로』 마시고 죽어서 떠오른다면, 그것도 내가 낚은 걸로 쳐주겠나? 안 되나?',
          ]),
      );
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait([
          callname,
          ', 빨리 따라오지 않으면 내일 약은 두 배로 늘릴 걸세.',
        ]);
        if (new TachyonLifeMarks().first) {
          await tachyon.say_and_wait(
            '맞다, 이 장소. 예전에 노점을 열었을 때…… 아니, 아무것도 아니네. 신경 쓰지 말게.',
          );
        }
      });
      const edu_marks = new TachyonEduMarks();
      !edu_marks.river &&
        buffer.push(async () => {
          edu_marks.river = 1;
          await tachyon.say_and_wait([callname, '! 보게나! 오리일세!']);
          await tachyon.say_and_wait('저것도 보게! 나비군!');
          await tachyon.say_and_wait('여기 풍경 정말 아름답군!');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 제방 위를 이곳저곳 뛰어다니는 ',
            tachyon.get_colored_name(),
            '을 어이없다는 듯 바라보았다.',
          ]);
          await era.printAndWait([
            '천진난만한 그 모습은 ',
            tachyon.get_colored_name(),
            '이라기보다 오히려 ',
            get_chara_talk(52).get_colored_name(),
            ', ',
            get_chara_talk(41).get_colored_name(),
            ' 같은 다른 ',
            tachyon.get_uma_sex_title(),
            '들과 닮아 있었으며, 심지어 눈동자의 블라인드 무늬조차 벚꽃 잎처럼 보일 지경이었다.',
          ]);

          await era.printAndWait([
            '사건의 발단은 늘 그렇듯 ',
            tachyon.get_colored_name(),
            '의 약물 때문이었다.',
          ]);
          await tachyon.say_and_wait('지능을 희생하는 대가로 속도를 비약적으로 높이는 약이라네.');
          await era.printAndWait([
            '얼핏 듣기에는 전혀 수지 타산이 맞지 않는 약이었지만, ',
            tachyon.get_colored_name(),
            '은 망설임 없이 그것을 들이켰다.',
          ]);
          await era.printAndWait([
            '그 결과, ',
            tachyon.get_colored_name(),
            '은 ',
            get_chara_talk(25).get_colored_name(),
            ', ',
            get_chara_talk(94).get_colored_name(),
            ' 등과의 모의 레이스에서 압도적으로 승리했으나, 그 대가는……',
          ]);
          await tachyon.say_and_wait([
            callname,
            ', ',
            callname,
            '! 보게나! 달팽이가 기어가는 게 정말 느리군!',
          ]);
          await era.printAndWait([
            '뭐라고 해야 할까, 이것도 일종의 뇌를 쉬게 하는 행위라고 봐야 할지. ',
            me.get_colored_name(),
            '은(는) 그저 너무나도 순수해진 ',
            tachyon.sex,
            '에게 사고가 생기거나…… 혹은 누군가에게 속지 않도록 곁에서 지켜볼 수밖에 없었다.',
          ]);
          era.drawLine();
          await era.printAndWait([
            '하루 종일 뛰어논 탓인지 드디어 ',
            tachyon.get_colored_name(),
            '도 지친 모양이었다. 걷는 폼이 비틀비틀 위태로웠다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 ',
            me.get_colored_name(),
            '을(를) 향해 두 팔을 벌렸다.',
          ]);
          await tachyon.say_and_wait([callname, '~~ 업어주게나 ~~']);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 하루를 마음껏 만끽한 초광속의 ',
            tachyon.sex_code - 1 ? '공주님' : '왕자님',
            '을 등에 업었다. ',
            tachyon.sex,
            '는 정말로 피곤했는지, ',
            me.get_colored_name(),
            '의 등에 업히자마자 곧바로 깊은 잠에 빠져들었다.',
          ]);
          await era.printAndWait(
            '이래저래 휘둘리느라 자신도 기진맥진했다. 돌아가면 푹 쉬어야겠다고 다짐했다.',
          );
          await tachyon.say_and_wait([callname, '…… 고맙네……']);
          await me.say_and_wait('……');
          await era.printAndWait('어쩌면, 가끔은 이런 하루도 나쁘지 않을지도 모르겠다는 생각이 들었다.');
        });
    }
    await get_random_entry(buffer)();
  }

  async out_shopping(hook) {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      tachyon = get_chara_talk(32);
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        buffer.push(
          () =>
            tachyon.say_and_wait([
              '호오? ',
              callname,
              ', 자네는 어째서 이렇게 인형 뽑기를 잘하는 건가? 컨디션 보너스와 체력 회복…… 아니, 미안하네. 무슨 소리를 하는 건지 잘 모르겠군.',
            ]),
          () =>
            tachyon.say_and_wait([
              '호오, 내 인형도 있는 건가? ……본체보다 귀엽다고? 잠깐, ',
              callname,
              ', 그게 대체 무슨 뜻인지 정확히 설명해 보게나.',
            ]),
          async () => {
            await tachyon.say_and_wait('쳇…… 꼭 이렇게 웃음을 지어야 하는 건가?');
            await tachyon.say_and_wait(
              '아니, 내가 까탈스러운 게 아니라, 이 스티커 사진기라는 물건 자체가 비합리적인 요소가 너무 많지 않은가! ………… 하아, 알겠네. 3, 2, 1, 치즈.',
            );
          },
        );
        break;
      case 1:
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '경품 추첨이라…… 운 같은 불확실한 요소에 기대기보다, 자신의 재력이나 다른 힘을 동원해 확실하게 경품을 손에 넣는 것이 더 정당한 방법 아니겠나?',
            ),
          () =>
            tachyon.say_and_wait([
              '에이~~ 이런 조작 가능성이 다분한 랜덤 뽑기에 돈을 쓰려는 건가, ',
              callname,
              '? …… 뭐, 말리지는 않겠네만, 만약을 위해…… 저 경품 상자 안에 정말 1등 당첨권이 들어있는지 확인해 봐도 되겠나?',
            ]),
          async () => {
            await tachyon.say_and_wait(
              '추첨인가. 그럼 준비를 좀 할 테니……… 됐네, 시작하게. 음? 갑자기 왜 안경을 쓰냐고?',
            );
            await tachyon.say_and_wait(
              '별거 아니네, 이건 그저 상자 속을 꿰뚫어 볼 수 있는 투시 안경일 뿐이라네. 설마 자네, 내가 정말로 운 같은 불확실한 요소를 믿을 거라고 생각한 건 아니겠지?',
            );
          },
        );
        break;
      case 2:
        buffer.push(
          async () => {
            await tachyon.say_and_wait('Winning the soul～～');
            await tachyon.say_and_wait([
              '……흐흥, 어떤가, ',
              callname,
              '? 내 가창력도 제법이지 않은가? ……뭐라고? NEXT FRONTIER나 Special Record를 듣고 싶다고?',
            ]);
            await tachyon.say_and_wait(['……', callname, ', 자네 일부러 그러는 건가?']);
          },
          async () => {
            await tachyon.say_and_wait(
              'Выходила на берег Катюша,На высокий берег, на крутой……(카츄샤는 강 기슭으로 나와 높고 가파른 강둑을 걸어가네)',
            );
            await tachyon.say_and_wait(
              '분명 러시아어는 배운 적이 없는데, 어째서인지 노래를 부를 때면 가사를 전부 이해할 수 있게 된단 말이지……',
            );
            await tachyon.say_and_wait(
              '역시 그런 거겠지. 배우지 않아도 깨닫는 것 또한 천재의 고충이라네.',
            );
          },
          async () => {
            await tachyon.say_and_wait([
              '오? ',
              callname,
              ', 제법 잘 부르지 않는가……',
            ]);
            await tachyon.say_and_wait(
              '그런데 부탁이니 하이라이트 부분에서 너무 흥분하지 말아 줄 수 있겠나?',
            );
            await tachyon.say_and_wait(
              '자네가 흥분할 때마다 방 안이 너무 눈부셔서 아무것도 안 보인단 말일세. 그 상태로 화면 가사는 어떻게 보고 있는 건지 참 신기하군……',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '에에…… 왜 자네는 곡 분위기에 맞춰서 몸 색깔을 바꿀 수 있는 겐가? 어째서 무지개 네온 버전까지 있는 건지……',
            );
            await tachyon.say_and_wait(
              '아니, 제작자인 나조차 내가 만든 약에 이런 기능이 있는 줄은 몰랐네. 무섭군……',
            );
          },
        );
        break;
      case 3:
        buffer.push(async () => {
          await tachyon.say_and_wait('…… 이 영화관…… 외관은 참 예쁘게 생겼군……');
          era.printButton('「……」', 1);
          await era.input();
          await tachyon.say_and_wait('이보게, 뭐라고 말 좀 해보게나……');
          await tachyon.say_and_wait(
            '동행인의 몸에서 뿜어져 나오는 빛이 너무 밝아서 입장을 거절당하다니, 이 아그네스 타키온조차 생전 처음 겪는 일이로군……',
          );
          await tachyon.say_and_wait('사과라도 좋으니 한 마디라도 해보게.');
          era.printButton('「애초에 나를 이렇게 만든 게 누구인데 그래!?」', 1);
          await era.input();
          await era.printAndWait('결국 두 사람은 오순도순 실험실로 돌아가 NetFlOx를 보았다.');
        });
    }
    await get_random_entry(buffer)();
  }

  async out_station(hook) {
    return await tachyon_out_station(hook);
  }

  async out_church() {
    return await tachyon_out_church();
  }

  async slave_end() {
    return await tachyon_slave_end();
  }

  async end_talk() {
    await kojo['end_talk'](this.#dict);
  }
};