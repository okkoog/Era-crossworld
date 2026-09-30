/**
 * @file 하루 우라라 - 日常
 * @author 99
 */
const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const urara_basement_end = require('#/event/daily/daily-events-52/basement-end');
const urara_celebration = require('#/event/daily/daily-events-52/celebration');
const urara_good_morning = require('#/event/daily/daily-events-52/good-morning');
const urara_good_night = require('#/event/daily/daily-events-52/good-night');
const urara_office_gift = require('#/event/daily/daily-events-52/office-gift');
const urara_office_rest = require('#/event/daily/daily-events-52/office-rest');
const urara_out_church = require('#/event/daily/daily-events-52/out-church');
const urara_out_river = require('#/event/daily/daily-events-52/out-river');
const urara_out_shopping = require('#/event/daily/daily-events-52/out-shopping');
const urara_out_station = require('#/event/daily/daily-events-52/out-station');
const urara_school_atrium = require('#/event/daily/daily-events-52/school-atrium');
const urara_school_rooftop = require('#/event/daily/daily-events-52/school-rooftop');
const urara_week_start = require('#/event/daily/daily-events-52/week-start');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

module.exports = class extends CustomizedDaily {
  select() {
    const call_me = sys_get_callname(52, 0),
      urara = get_chara_talk(52),
      callname = urara.get_colored_name(),
      self_call = sys_get_callname(52, 52),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [];
    if (sys_check_awake(52)) {
      if (era.get('base:52:체력') < 0.4 * era.get('maxbase:52:체력')) {
        talk_arr.push([
          `으아아…… ${call_me}, ${self_call}는…… 더 이상 못 움직이겠어……`,
          ['바닥에 쓰러진 채, ', callname, '는 거의 움직이지 못하고 있다.'],
        ]);
        if (love > 0) {
          talk_arr.push([
            '체력, 체력이 이미 날아가 버렸어…… 이제 안 돼……',
            ['바닥에 엎드린 ', callname, '가 어질어질한지 거칠게 숨을 몰아쉬고 있다.'],
          ]);
        }
        if (love >= 25) {
          talk_arr.push([
            '지면 안 돼…… 지면 안 된다구……',
            [callname, '는 몇 번이나 몸을 일으키려 애썼지만, 결국 실패했다.'],
          ]);
        }
        if (love >= 50) {
          talk_arr.push([
            `트레, ${call_me}…… 한 번만 더 끌어올려 줘……`,
            [
              '바닥에 주저앉은 ',
              callname,
              '가 얼굴을 붉히며 ',
              me.get_colored_name(),
              '에게 손을 뻗어 도움을 요청하고 있다.',
            ],
          ]);
        }
        if (love >= 75) {
          talk_arr.push([
            `조금만 더 쉬게 해줘…… 금방 괜찮아질 거야! 하아……`,
            ['지쳐서 주저앉아 있으면서도, ', callname, '는 여전히 다시 일어서려고 노력한다.'],
          ]);
        }
        if (love >= 90) {
          talk_arr.push([
            `나, 나는 아직 더 할 수 있다구……`,
            [
              '귀를 바짝 뒤로 젖히고, ',
              me.get_colored_name(),
              '의 몸을 지지대 삼아, ',
              callname,
              '는 바닥에 쓰러지지 않으려고 안간힘을 쓰고 있다.',
            ],
          ]);
        }
        if (love === 100) {
          talk_arr.push([
            `후우…… 후우…… 문제없어! ${call_me}가 곁에 있다면, 계속 힘낼 수 있어……`,
            ['제대로 서 있기도 힘든 상태임에도, ', callname, '는 필사적으로 몸을 일으켰다.'],
          ]);
        }
      } else if (
        era.get('relation:52:0') > 150 &&
        new UraraEduMarks().loop < 2
      ) {
        talk_arr.push(
          [
            '분명 내가 먼저 집에서 나왔는데, 왜 다들 나보다 먼저 도착한 걸까? 정말 신기해!',
            ['지각했음에도 불구하고, ', callname, '는 여전히 즐거운 기색이다.'],
          ],
          [
            `${call_me}! 오늘은 딱 맞춰서 늦지 않았어! 어쩌면 지난번보다 더 빨리 달렸을지도 몰라!`,
            ['겨우 시간을 맞췄을 뿐이지만, ', callname, '는 매우 만족스러워 보인다.'],
          ],
          [
            `이쪽이야, ${call_me}! 얼른 이리로 와! 오늘도 ${call_me}에게 들려줄 좋은 일이 잔뜩 있다구!`,
            [
              me.name,
              '과(와) 동시에 도착한 ',
              callname,
              '가 웃으며 ',
              me.name,
              '에게 손을 흔들고 있다.',
            ],
          ],
        );
        if (love >= 50) {
          talk_arr.push([
            `${call_me}…… 우으…… 에헤? ${call_me}?! 오, 오늘도 같이 힘내자!`,
            [
              callname,
              '는 몰래 무언가를 하고 있었던 듯하며, ',
              me.get_colored_name(),
              `이(가) ${urara.sex}의 뒤에 올 때까지 모르고 있다가 얼굴을 붉히며 반응했다.`,
            ],
          ]);
        }
        if (love >= 75) {
          talk_arr.push([
            `${call_me}를 볼 수 있어서 정말 다행이야! 만약 이런 날이 계속 이어진다면…… 아! ${call_me}! 오늘은 무엇을 할 거야?`,
            [
              '생각보다 일찍 도착한 ',
              callname,
              '가 기쁜 듯이 ',
              me.get_colored_name(),
              '의 곁으로 다가왔다.',
            ],
          ]);
        }
        if (love === 100) {
          talk_arr.push([
            `${call_me}를 조금이라도 일찍 보고 싶어서, 오늘도 일찍 일어났다구! ${self_call}를 보면, ${call_me}도 행복해질까?`,
            ['한참을 기다린 듯한 ', callname, '가 꼬리를 흔들며 얼굴에 행복한 미소를 띠고 있다.'],
          ]);
        }
      } else {
        talk_arr.push(
          [
            `미안해, ${call_me}. 오늘 ${self_call}는 또 늦어버렸어……`,
            [
              '지각에 대해 화낼 생각은 없었지만, ',
              callname,
              '는 ',
              me.get_colored_name(),
              '과(와) 마주치자 귀를 푹 숙였다.',
            ],
          ],
          [
            `세이프야! 아, ${call_me} 좋은 아침……`,
            [
              '숨을 헐떡이며 달려온 ',
              callname,
              '는, ',
              me.get_colored_name(),
              '을(를) 발견하자 어째서인지 뒤로 조금 물러났다.',
            ],
          ],
        );
        if (love >= 50) {
          talk_arr.push([
            `${call_me}! ${self_call}는…… 아니, ${call_me}에게 폐를 끼치면 안 되지! 에헤…… 정말 아무것도 아니야?`,
            [
              me.get_colored_name(),
              '을(를) 등지고 있을 때 ',
              callname,
              '는 무언가를 하고 있었던 것 같지만, ',
              `${urara.sex}는 끝까지 인정하고 싶지 않은 표정이다.`,
            ],
          ]);
        }
        if (love >= 75) {
          talk_arr.push([
            `${self_call}는 도대체 왜…… 아, ${call_me}가 곧 도착하니까, 얼른 준비해야 해……!`,
            [
              '일찍 와 있었던 ',
              callname,
              '는 ',
              me.get_colored_name(),
              '을(를) 보자마자 서둘러 일어나 기운을 차리고 ',
              me.get_colored_name(),
              '에게 미소를 지어 보였다.',
            ],
          ]);
        }
        if (love === 100) {
          talk_arr.push([
            `${call_me}! 오늘, 그게…… ${self_call}에게 조금만 더 상냥하게 대해줄 수 있어? 아주 조금이면 돼!`,
            [
              '여전히 조금은 위축된 모습이지만, ',
              me.get_colored_name(),
              '의 뒤를 따르던 ',
              callname,
              '는 미소 지으며 ',
              me.get_colored_name(),
              '의 옷자락을 꽉 쥐었다.',
            ],
          ]);
        }
      }
    } else if (
      era.get('status:52:우마뾰이S') ||
      era.get('status:52:우마뾰이Z') ||
      era.get('status:52:슈퍼우마뾰이Z') ||
      era.get('status:52:펄롱K') ||
      era.get('status:52:펄롱P') ||
      era.get('base:52:성욕') >= lust_border.absent_mind
    ) {
      talk_arr.push([
        '……으응, 아……',
        ['몸은 욕정하지만 깨어나지 못한 채, ', callname, '는 꿈속에서 얼굴을 붉히며 가쁜 숨을 내뱉고 있다.'],
      ]);
    } else {
      talk_arr.push(
        ['헤헤…… 당근……', ['작게 잠꼬대를 하며, ', callname, '는 가볍게 몸을 뒤척였다.']],
        [
          '……',
          ['그저 작은 숨소리만을 내며, 오늘 푹 잠든 ', callname, '는 의외로 조용하다.'],
        ],
      );
    }
    const temp = get_random_entry(talk_arr);
    urara.say(temp[0]);
    era.print(temp[1]);
  }

  good_morning = urara_good_morning;

  good_night = urara_good_night;

  async talk() {
    const love = era.get('love:52'),
      talk_arr = [],
      urara = get_chara_talk(52);
    if (sys_check_awake(52)) {
      const callname = sys_get_callname(52, 0);
      switch (era.get('cflag:52:컨디션')) {
        case 2:
          talk_arr.push(
            [callname, '! 오늘의 우라라는 엄청 대단할 거야! 그렇게 느껴진다구!'],
            ['지금의 우라라는 슈퍼 우라라야! 왜냐면 컨디션이 최고니까!'],
            ['매일 이렇게 즐거우면, 레이스에서 분명 1착을 할 수 있을 거야!'],
          );
          if (love >= 75) {
            talk_arr.push([
              '에헤헤~ ',
              callname,
              '가 곁에 있다면, 뭐든지 할 수 있을 것 같은 기분이 들어!',
            ]);
          }
          if (love === 100) {
            talk_arr.push([
              '잘 봐둬, ',
              callname,
              '! 지금이라면 하루 종일 달려도 우라라는 지지 않을 거라구!',
            ]);
          }
          break;
        case 1:
          talk_arr.push(
            ['『우라라~』 하게 나갈게! ', callname, '도 같이 힘내자!'],
            ['좋아! 오늘의 계획도 제대로 완수할 거야! 워밍업 시작이라구!'],
            ['몸이 마치 새처럼 가벼워! 지금 당장 뭐라도 하고 싶어!'],
          );
          if (love >= 75) {
            talk_arr.push([
              callname,
              '와 함께라면, 우라라는 최고의 컨디션이 될 수 있어!',
            ]);
          }
          if (love === 100) {
            talk_arr.push([
              '오늘 만약 일찍 끝난다면, ',
              callname,
              ', 나랑 같이 놀아줄 수 있어?',
            ]);
          }
          break;
        case 0:
          talk_arr.push(
            ['노력하면 분명 할 수 있어! 다음번엔 1착을 하기 위해서!'],
            ['재미있는 연습을 하고 싶어. ', callname, ', 그런 거 없을까──?'],
            [callname, '! 오늘의 일정, 지금 바로 알려줘!'],
          );
          if (love >= 75) {
            talk_arr.push(['끝나고 나서, 같이 맛있는 거 먹으러 가자!']);
          }
          if (love === 100) {
            talk_arr.push(['오늘도 나를 지켜봐 줄 거야? 응! 알고 있다구!']);
          }
          break;
        case -1:
          talk_arr.push(
            ['아우으…… 하지만 훈련은 중요하니까, 괜찮아, 힘낼게!'],
            ['음…… 조금 즐겁지가 않네, 즐거운 생각을 잔뜩 해야겠어……!'],
            ['에헤? 나는 사실 엄청 기운차다구! 귀랑 꼬리는 축 처져 있지만……!'],
          );
          if (love >= 75) {
            talk_arr.push([callname, '가 계속 지켜봐 준다면, 문제없을 거야……!']);
          }
          if (love === 100) {
            talk_arr.push(['기운은 안 나지만, 어리광 부리면 안 돼……!']);
          }
          break;
        case -2:
          talk_arr.push(
            ['분명 즐거워야 할 텐데, 즐겁지가 않아……'],
            [callname, '…… 오늘…… 오늘은 쉬는 걸 훈련으로 치면 안 될까?'],
            ['몸이 너무 무거워, 힘이 하나도 안 나……'],
          );
          if (love >= 75) {
            talk_arr.push([callname, ', 혹시 간식 가져왔어? 당분을 좀 보충하고 싶어서……']);
          }
          if (love === 100) {
            talk_arr.push([
              callname,
              ', 내 의욕이 또 어디론가 도망간 것 같아, 같이 찾아줄 수 있을까……',
            ]);
          }
      }
      await urara.say_and_wait(get_random_entry(talk_arr));
    } else {
      if (
        era.get('status:52:우마뾰이S') ||
        era.get('status:52:우마뾰이Z') ||
        era.get('status:52:슈퍼우마뾰이Z') ||
        era.get('status:52:펄롱K') ||
        era.get('status:52:펄롱P')
      ) {
        talk_arr.push(
          [
            '약효의 영향으로, ',
            urara.get_colored_name(),
            '의 잠든 숨소리는 점차 요염하고 유혹적으로 변해간다.',
          ],
          [
            '비겁한 약물에 굴복하여, 의식을 잃은 ',
            urara.get_teen_sex_title(),
            '는 지금 그저 사용되기를 기다리는 오나홀에 불과하다.',
          ],
          [
            '사지는 꿈속에서 거부하며 뒤척이고 있지만, 꼬마 ',
            urara.get_uma_sex_title(),
            '의 가랑이는 이미 순종적으로 흠뻑 젖어 엉망이 되어 있다.',
          ],
        );
      } else {
        talk_arr.push(
          [
            '작은 숨소리와 함께, 꼬마 ',
            urara.get_uma_sex_title(),
            '가 잠결에 몸을 뒤척였다.',
          ],
          ['당신의 곁에 평온하게 기대어, ', urara.get_colored_name(), '는 편안히 잠들어 있다.'],
          [
            '잠든 ',
            urara.get_colored_name(),
            '가 행복한 표정을 짓고 있다. 꿈속에서 좋은 일이라도 있는 것일까?',
          ],
        );
      }
      await era.printAndWait(get_random_entry(talk_arr));
    }
  }

  office_gift = urara_office_gift;

  out_church = urara_out_church;

  out_river = urara_out_river;

  out_shopping = urara_out_shopping;

  out_station = urara_out_station;

  school_atrium = urara_school_atrium;

  school_rooftop = urara_school_rooftop;

  async office_cook() {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait(
          '식재료는 다 넣었어, 우라라는 밥이 잘 됐는지 확인하러 갈게!',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '는 말을 마치자마자 전기밥솥이 있는 곳으로 달려갔다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '! 나도 채소 써는 걸 도울게! 에헤? 안 된다구?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 그 서투른 칼질을 떠올린 ',
          me.get_colored_name(),
          '은(는) 망설임 없이 꼬마 ',
          urara.get_uma_sex_title(),
          '의 도움을 거절했다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '먹고 싶은 거? 걱정하지 마! 비록 맛없는 게 좀 섞여 있어도, 우라라는 편식하지 않으니까!',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '의 질문에 대한 ',
          urara.get_colored_name(),
          '의 대답은 여느 때처럼 안심이 된다.',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait('에헤헤~ 실수로 쏟아버렸어…… 아음~');
        await era.printAndWait([
          '전혀 개의치 않고 작은 혀를 내밀어, ',
          urara.get_colored_name(),
          '는 마치 새끼 고양이처럼 소스가 묻은 손가락을 핥았다. 혀와 손가락 사이로 가느다란 은사가 끊임없이 이어진다……',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '나중에 어른이 되어서 우라라와 ',
          callname,
          '가 나란히 서게 되면, 그때 우린 분명 부부 같겠지!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) 함께 손안의 고기 패티를 다져가며, ',
          urara.get_colored_name(),
          '는 어쩌면 그리 멀지 않았을지도 모를 미래를 상상하고 있다.',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '이렇게 하면 ',
          callname,
          '에게 우라라의 냄새가 배어든다고 들었어. 하지만 ',
          callname,
          '가 나중에 알게 되면 우라라를 용서해줄까……?',
        ]);
        await era.printAndWait([
          '억누를 수 없는 뜨거운 생각을 품은 채, 꼬마 ',
          urara.get_uma_sex_title(),
          '는 떨리는 혀를 내밀어 자신의 타액을 몰래 ',
          me.get_colored_name(),
          '의 음료에 섞어 넣었다……',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }

  office_study = async () => {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait([
          '으으…… 이 수학 문제는 역시 모르겠어! ',
          callname,
          ', 다시 한번 가르쳐줄 수 있을까?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 울상을 지으며 책상 위에 머리를 파묻고는 학습 의욕을 거의 상실한 상태다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '사실 나 꽤 잘하는 과목도 있다구! 심지어 ',
          sys_get_colored_callname(52, 61),
          ' 조차 다른 과목들도 이 정도만 된다면 좋을 텐데, 라고 말했을 정도야!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 매우 자랑스러운 듯하지만, 그것은 아무리 봐도 ',
          `${urara.sex}를 칭찬하는 말은 아닐 것이다.`,
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '영어…… 단어는 다 외웠는데, 문법이 너무 어려워…… ',
          callname,
          ', 다시 한번 도와줘──',
        ]);
        await era.printAndWait([
          '영어 숙제에 항복한 ',
          urara.get_colored_name(),
          '를 마주하며, ',
          me.get_colored_name(),
          '은(는) 어쩔 수 없이 다시 ',
          `${urara.sex}와 함께 교과서를 복습하기 시작했다.`,
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '가까워…… ',
          callname,
          '가 바로 옆에 있어…… 아! 미안해! 집중해야 하는데…… 으으……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 가랑이 사이를 차지한 ',
          urara.get_colored_name(),
          '는 여전히 들떠 있으며, 오늘의 보충 수업도 묘한 방향으로 흘러가기 시작했다……',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '공부가 중요하다는 건 알지만, 역시 달리는 게 훨씬 재밌어! 그래도 ',
          callname,
          '가 곁에 있어준다면 어려운 문제도 눈에 들어온다구!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 곁에 착 달라붙은 ',
          urara.get_colored_name(),
          '는 평소보다 훨씬 더 공부할 의지가 생겨난 듯하다.',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          callname,
          '! 만약 다음번에 내가 좋은 성적을 받는다면! 혹시…… 특별한 보상을 요구해도 될까?',
        ]);
        await era.printAndWait([
          '그냥 들어줘도 상관없는 부탁이었지만, ',
          urara.get_colored_name(),
          '의 그 붉어진 얼굴과 흔들리는 눈빛을 보고 ',
          me.get_colored_name(),
          '은(는) 이 폭탄을 받아들여야 할지 망설이기 시작했다.',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  };

  office_rest = urara_office_rest;

  async office_prepare() {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait(
          '응응! 그때가 되면 여느 때처럼 『우라라~』 하게 튀어나가면 되는 거지!',
        );
        await era.printAndWait(
          '화이트보드 위의 주의사항을 보며 고개를 갸웃거리는 꼬마 담당의 이해력은 여전히 참으로 「한결같다」.',
        );
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '! 나도 같이 편자 박는 거 도울래! 응! 손가락은 안 때릴 거야!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 걱정 어린 시선 속에서, ',
          urara.get_colored_name(),
          '는 아슬아슬하게 자신의 편자를 박는 작업을 완수했다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '에? 이번엔 이렇게 달리는구나…… 이렇게만 달리면 1착을 할 수 있다는 거지! 알았어!',
        );
        await era.printAndWait([
          urara.sex,
          '의 전술 수행에는 늘 결함이 뒤따랐으나, ',
          me.get_colored_name(),
          '은(는) 이번의 ',
          urara.sex,
          '라면 괜찮을지도 모른다고 생각했다.',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '그렇구나…… 그럼 다음에 또 이기면, ',
          callname,
          ', 우라라와 함께…… 아, 아무것도 아니야!',
        ]);
        await era.printAndWait([
          '자신의 입에서 공격적인 욕망이 흘러나올 뻔했다는 사실을 방금 깨달은 듯, ',
          urara.get_colored_name(),
          '는 당황하며 시선을 회피했다.',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '이제 더 이상 『져도 상관없는 우라라』가 아니야! 레이스는 힘들겠지만, ',
          callname,
          '를 위해서라도 우라라는 이제 지고 싶지 않아!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 진지하게 준비를 하며, 평소에는 보기 드문 투지를 드러냈다.',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '알고 있어! 어떤 레이스라도 상관없어. 나는 ',
          callname,
          '의 시선이 오직 우라라에게만 머물게 할 거야!',
        ]);
        await urara.say_and_wait([
          '그러니까, 우라라에게 좀 더 빠져줄 수 있어, ',
          callname,
          '?',
        ]);
        await era.printAndWait([
          '분홍색 꼬마 우마무스메라고는 믿기지 않을 정도의 놀라운 기세를 뿜어내며, ',
          me.get_colored_name(),
          '에게 밀착한 ',
          urara.get_colored_name(),
          '의 벚꽃색 눈동자가 마치 붉게 타오르는 것만 같았다.',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }

  async office_game() {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait(
          '으으…… 왜 앞지르지 못하는 걸까…… 다시 한번 더! 이번엔 꼭 해낼 거야!',
        );
        await era.printAndWait([
          '레이싱 게임에서 몇 번이나 연속해서 패배한 후에도, ',
          urara.get_colored_name(),
          '는 포기하지 않고 다시 컨트롤러를 꽉 쥐었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '흥흥! ',
          callname,
          ', 이번에야말로 ',
		  callname,
		  '를 이길 방법을 찾아냈어! 우라라의 필살기를 보시라──',
        ]);
        await era.printAndWait([
          '격투 게임에서 ',
          me.get_colored_name(),
          '에게 처참하게 패배하기 직전까지, ',
          urara.get_colored_name(),
          '는 이렇게 자신만만하게 웃으며 말했었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '오, 오늘도 계속 이걸로 놀자! 헤? 우, 우라라는 무섭지 않다구!',
        );
        await era.printAndWait([
          '목소리는 파르르 떨리고 있지만, ',
          urara.get_colored_name(),
          '는 용기를 내어 예전에 끝까지 깨지 못했던 공포 게임을 꺼내 들었다.',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '우, 우라라는 모르는 일이야? 이 게임…… 디지땅이 빌려준 거라구?',
        ]);
        await era.printAndWait([
          '자동으로 재생되는 부끄러운 화면에 시선을 빼앗기지 않으려 애쓰며, ',
          urara.get_colored_name(),
          '는 얼굴을 붉힌 채 침묵을 지키는 ',
          me.get_colored_name(),
          '에게 더듬거리며 변명하고 있다.',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(() =>
        urara
          .say_and_wait([
            '게임할 때는 집중해야지…… 얏! 하하~ ',
            callname,
            ', ',
            callname,
            '~ 간지러워! 우라라가 잘못했어~',
          ])
          .then(() =>
            era.printAndWait([
              '간지럽히기 같은 장외 전술로 끊임없이 방해하는 ',
              urara.get_colored_name(),
              '에 맞서, ',
              me.get_colored_name(),
              '은(는) 결국 컨트롤러를 내려놓고 담당과 함께 웃으며 뒹굴기 시작했다.',
            ]),
          ),
      );
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          callname,
          '는 뭐 하고 싶어? 우라라는 뭐든지 좋아! ',
          callname,
          '와 함께 노는 거라면……',
        ]);
        await era.printAndWait([
          '순수한 미소를 띤 ',
          urara.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '의 품에 안겨와, 귓가에 가볍게 숨결을 내뱉었다.',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }

  async load_talk() {
    const callname = sys_get_callname(52, 0),
      in_urara = get_chara_talk(52, chara_colors[52][1]),
      love = era.get('love:52'),
      pregnant =
        era.get('exp:52:출산횟수') +
        (era.get('cflag:52:妊娠状态') >> pregnant_stage_enum.embryo > 0),
      talk_arr = [],
      urara = get_chara_talk(52);
    if (pregnant) {
      if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
        if (love >= 75) {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                callname,
                ', 다음에 다시 만날 때는, 부디 ',
                pregnant > 1 ? '아이들을' : '이 아이를',
                ' 많이 안아줘!',
              ]),
            () =>
              urara.say_and_wait(
                '괜찮아, 우라라가 모두를 잘 달래줄게. 만약 다음에 다시 만날 수 있다면, 그때 다시 함께──',
              ),
          );
        } else {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                '아무래도 ',
                callname,
                '와 우라라는, 아직 준비가 되지 않았나 봐…… 미안해……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                ', 우라라는 ',
                pregnant > 1 ? '아이들을' : '이 아이를',
                ' 남기고 싶어. 아니면 다음에 다시 만날 수 있다면──',
              ]),
          );
        }
      } else if (love >= 75) {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              '우리는 다시 만날 수 있는 거지? ',
              pregnant > 1 ? '아이들도' : '이 아이도',
              ' 만나볼 수…… 미안해, 하지만 우린 분명 다시──',
            ]),
          () =>
            urara.say_and_wait([
              pregnant > 1 ? '아이들을' : '이 아이를',
              ' 버리지 말아줘! 부탁이야, ',
              callname,
              '! 약속해줘, 적어도 다음에 우리를 다시──',
            ]),
        );
      } else {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              callname,
              '는 ',
              pregnant > 1 ? '아이들' : '이 아이',
              '을 어떻게 생각해? 우라라는 아직 떠나고 싶지 않아……',
            ]),
          () =>
            urara.say_and_wait([
              '그저 버림받는 거라면 우라라 혼자서도 괜찮지만, ',
              pregnant > 1 ? '아이들' : '이 아이',
              '까지 영영 보지 못하게 된다면──',
            ]),
        );
      }
      await get_random_entry(talk_arr)();
      await in_urara.say_as_unknown_and_wait(
        '……하아, 당신에게 해줄 위로의 말이 단 한 마디도 떠오르지 않네요……',
      );
    } else {
      if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
        if (love >= 75) {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                '우라라는 아직 헤어지고 싶지 않아. 그러니까 ',
                callname,
                ', 다음에도 우라라와 함께 있어 줄래……?',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                ', 다시 만날 수 있다면, 무슨 일이 있어도 우린 분명 다시 서로를 좋아하게 되겠지──',
              ]),
          );
        } else {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                '내 걱정은 하지 마! 우라라는 ',
                callname,
                '의 선택을 믿고 싶어! 그러니까──',
              ]),
            () =>
              urara.say_and_wait([
                '다음에 또 함께할 수 있다면, 그때도 ',
                callname,
                '와 기분 좋은 일을 할 수 있다면 좋겠어──',
              ]),
          );
        }
      } else if (love >= 75) {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              callname,
              ', 우라라를 버리는 게 아니지……? 미안해, 무슨 일이 있어도 우라라는 ',
              callname,
              '를 원망하지 않아……',
            ]),
          () =>
            urara.say_and_wait(
              '역시 질려버린 걸까, 아니면 우라라가 또 뭘 잘못했을까? 미안해, 우라라는 역시…… 미안해……',
            ),
        );
      } else {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              callname,
              '가 저번의 우라라를 다시 만나게 된다면, 그 아이에게…… 조금만 더 잘해줄 수 있어?',
            ]),
          () =>
            urara.say_and_wait([
              callname,
              ', 다음번에는, 다시 ',
              callname,
              '와 함께…… 미안해, 아무것도 아니야……',
            ]),
        );
      }
      await get_random_entry(talk_arr)();
      await in_urara.say_as_unknown_and_wait(
        '……일단은 아직 괜찮지만, 다음번에는 너무 심하게 굴지 마세요?',
      );
    }
  }

  async celebration(hook) {
    const edu_weeks = era.get('cflag:52:육성턴수합산'),
      weeks = (era.get('flag:현재턴수') - 1) % 48;
    if (
      weeks !== 47 ||
      edu_weeks !== 47 + 48 ||
      sys_reg_race(52).curr.race !== -1
    ) {
      return await super.celebration(hook);
    }
    await urara_celebration();
  }

  week_start = urara_week_start;

  basement_end = urara_basement_end;
};