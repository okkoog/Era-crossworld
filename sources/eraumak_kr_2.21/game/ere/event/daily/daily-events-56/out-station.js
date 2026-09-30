const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.arg = await select_action_in_station(56);
  const callname = sys_get_callname(56, 0),
    edu_marks = new FukuEventMarks(),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    message = [];
  switch (hook.arg) {
    case 0:
      message.push(
        async () => {
          await kitaru.say_and_wait([
            callname,
            ', 저 가게 사과 파이가 정말 맛있어 보여요!',
          ]);
          await kitaru.say_and_wait('한번 드셔보실래요?');
        },
        async () => {
          await kitaru.say_and_wait('지금은 식사를 하기에 딱 좋은 행운의 시각이네요!');
          await kitaru.say_and_wait('같이 먹으러 갈까요?');
        },
      );
      break;
    case 1:
      message.push(
        async () => {
          await kitaru.say_and_wait('으음! 역시 너무 격식을 차린 옷은 저랑 안 맞는 것 같아요!');
          await kitaru.say_and_wait('물론! 무녀복은 예외지만요!');
          await kitaru.say_and_wait('이 옷은 어떤가요?');
          switch (get_random_value(0, 3) - !(kitaru.sex_code - 1)) {
            case 0:
              await era.printAndWait([
                '귀여운 무늬가 그려진 원피스를 입고 탈의실에서 나온 ',
                kitaru.get_colored_name(),
                '가 ',
                me.get_colored_name(),
                '에게 물었다.',
              ]);
              await era.printAndWait([
                '살짝 노출이 있는 복장 덕분에 ',
                kitaru.sex,
                '의 매끄럽고 하얀 어깨가 고스란히 드러났다.',
              ]);
              break;
            case 1:
              await era.printAndWait([
                '직장인처럼 셔츠에 넥타이를 매고 탈의실에서 나온 ',
                kitaru.get_colored_name(),
                '가 ',
                me.get_colored_name(),
                '에게 물었다.',
              ]);
              await era.printAndWait(
                '오피스 룩에 어울리는 검은색 스타킹을 신은 다리는, 적당한 올의 굵기 덕분에 살결이 은은하게 비치고 있었다.',
              );
              break;
            case 2:
              await era.printAndWait([
                '공식 석상에서 입을 법한 드레스를 입고 탈의실에서 나온 ',
                kitaru.get_colored_name(),
                '가 ',
                me.get_colored_name(),
                '에게 물었다.',
              ]);
              await era.printAndWait([
                kitaru.sex,
                '가 몸을 돌릴 때마다 드레스 자락이 휘날렸고, 그 아래로 드러난 가터링이 육감적인 허벅지를 파고들어 선명한 자국을 남기고 있었다.',
              ]);
              break;
            case 3:
              await era.printAndWait([
                '어디선가 찾아낸 치파오를 입고 탈의실에서 나온 ',
                kitaru.get_colored_name(),
                '가 ',
                me.get_colored_name(),
                '에게 물었다.',
              ]);
              await era.printAndWait([
                '몸에 딱 붙는 치파오 너머로, 가슴 부분의 천이 비명을 지르는 듯한 소리가 들려올 것만 같았다.',
              ]);
          }
          await kitaru.say_and_wait(['잠깐! ', callname, ', 어딜 보고 계신 건가요?']);
        },
        async () => {
          await kitaru.say_and_wait('이얍!');
          await kitaru.say_and_wait('손 잡기!');
          await kitaru.say_and_wait('이렇게 하면 상대방에게 행운을 나눠줄 수 있다고 하더라고요!');
          await era.printAndWait('그 후, 두 사람은 주변의 시선을 아랑곳하지 않고 연인처럼 밀착한 채 걸음을 옮겼다.');
        },
      );
      if (era.get('love:56') >= 50 && era.get('exp:56:키스횟수')) {
        message.push(async () => {
          await kitaru.say_and_wait(['저기…… ', callname, '!']);
          await kitaru.say_and_wait('쪽!');
          await era.printAndWait([
            kitaru.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '에게 입을 맞췄다.',
          ]);
          await era.printAndWait(
            '입맞춤이라기보다는, 서로의 입술이 가볍게 충돌했다는 느낌에 더 가까웠다.',
          );
        });
      }
      break;
    case 2:
      message.push(async () => {
        let branch;
        if (era.get('love:56') >= 75) {
          if (edu_marks.haircut === 0) {
            edu_marks.haircut = 1;
            await print_event_name('후쿠키타루의 헤어스타일', kitaru);
            await era.printAndWait([
              '다시 한번 ',
              kitaru.get_colored_name(),
              '와 함께 상가에 있는 미용실 앞을 지나게 되었다.',
            ]);
            await era.printAndWait(
              '가게 문을 지나던 중, 벽에 붙은 포스터들에 절로 시선이 머물렀다.',
            );
            await kitaru.say_and_wait(['어라! ', callname, ', 뭘 보고 계시나요?']);
            await era.printAndWait([
              kitaru.get_colored_name(),
              '는 ',
              me.get_colored_name(),
              '의 시선을 따라가다 포스터 속 정성스럽게 관리된 헤어스타일을 한 ',
              kitaru.get_uma_sex_title(),
              '모델들을 발견하자, 무의식적으로 평소 부스스한 자신의 머리카락을 만지작거렸다.',
            ]);
            await kitaru.say_and_wait(
              '어라라! 평소에는 제 헤어스타일에 딱히 신경 써본 적이 없어서……',
            );
            await kitaru.say_and_wait([
              sys_get_colored_callname(56, 62),
              '이나, ',
              sys_get_colored_callname(56, 74),
              ', 그리고 ',
              sys_get_colored_callname(56, 2),
              '의 헤어스타일은……',
            ]);
            await kitaru.say_and_wait([
              sys_get_colored_callname(56, 58),
              ' 씨는 저랑 비슷한 느낌이긴 하네요.',
            ]);
            await era.printAndWait([
              '확실히 ',
              me.get_colored_name(),
              '의 담당인 ',
              kitaru.get_colored_name(),
              '는 머릿결 관리에 큰 관심을 두지 않는 편이었고, ',
              kitaru.get_uma_sex_title(),
              '특유의 모질 덕분에 대강의 형태가 유지되고 있을 뿐이었다.',
            ]);
            await kitaru.say_and_wait([
              '그나저나 ',
              callname,
              '은 제가 머리를 기른 모습이 보고 싶으신가요?',
            ]);
            await kitaru.say_and_wait([
              '초등학생 때는 길러본 적이 있었는데, 거울을 볼 때마다 사진 속의 ',
              kitaru.get_bigger_sibling_sex_title(),
              '가 생각나서 말이죠……',
            ]);
            await kitaru.say_and_wait(['하지만 만약 ', callname, '이 원하신다면!']);
            await era.printAndWait([
              kitaru.get_colored_name(),
              '는 ',
              me.get_colored_name(),
              '의 무심한 행동에 묘한 위기감을 느낀 듯했다.',
            ]);
            branch = 1;
          } else {
            branch = await select_yes_or_no(
              [kitaru.get_colored_name(), '를 미용실에 데려가시겠습니까?'],
              '네',
              '아니오',
            );
            if (branch) {
              await kitaru.say_and_wait([callname, ', 또 헤어스타일을 바꾸고 싶으신 건가요?']);
              switch (era.get('cstr:56:뒷머리')) {
                case '긴 생머리':
                  await era.printAndWait([
                    '폭포처럼 곧게 뻗은 오렌지색 긴 생머리를 한 ',
                    kitaru.get_colored_name(),
                    '가 고개를 돌려 ',
                    me.get_colored_name(),
                    '을(를) 바라보았다.',
                  ]);
                  break;
                case '齐肩直发':
                  await era.printAndWait([
                    kitaru.get_colored_name(),
                    '가 고개를 돌려 ',
                    me.get_colored_name(),
                    '을(를) 바라보았다. 우아한 오렌지빛 머리카락이 어깨 위로 찰랑였다.',
                  ]);
                  break;
                case '날개형':
                  await era.printAndWait([
                    kitaru.get_colored_name(),
                    '가 고개를 돌려 ',
                    me.get_colored_name(),
                    '을(를) 바라보았다. 뺨 근처에 땀방울과 함께 머리카락이 살짝 달라붙어 있었다.',
                  ]);
              }
              branch = 1;
            } else {
              branch = 2;
            }
          }
        } else {
          branch = 2 + (Math.random() < 0.5);
        }
        switch (branch) {
          case 1:
            hook.override = true;
            await era.printAndWait([
              '그럼, 어떤 헤어스타일을 추천할까?',
            ]);
            era.printButton('어깨까지 오는 단발 생머리', 1);
            era.printButton('허리까지 내려오는 긴 생머리', 2);
            era.printButton('「지금 스타일이 후쿠키타루한테 딱이야」', 3);
            switch (await era.input()) {
              case 1:
                era.set('cstr:56:뒷머리', '齐肩直发');
                await era.printAndWait([
                  me.get_colored_name(),
                  '의 제안에 따라, ',
                  kitaru.get_colored_name(),
                  '는 어깨까지 오는 생머리로 스타일을 바꾸었다.',
                ]);
                await kitaru.say_and_wait('어떤가요?');
                await era.printAndWait([
                  kitaru.get_colored_name(),
                  '가 고개를 살짝 돌려 ',
                  me.get_colored_name(),
                  '을(를) 바라보았다. 부드러운 단발머리가 꿀 같은 오렌지빛 광택을 내뿜었다.',
                ]);
                break;
              case 2:
                era.set('cstr:56:뒷머리', '긴 생머리');
                era.set('cflag:56:머리길이', 2);
                await era.printAndWait([
                  me.get_colored_name(),
                  '의 제안에 따라, ',
                  kitaru.get_colored_name(),
                  '는 허리까지 내려오는 긴 생머리로 스타일을 바꾸었다.',
                ]);
                await kitaru.say_and_wait('긴 머리는…… 역시 좀 익숙하지 않네요!');
                await era.printAndWait([
                  kitaru.get_colored_name(),
                  '가 무심결에 허리까지 내려온 머리카락을 손가락으로 훑었다.',
                ]);
                await era.printAndWait('확실히 평소보다 훨씬 차분하고 어른스러워 보였다.');
                break;
              case 3:
                await era.printAndWait([
                  me.get_colored_name(),
                  '의 의견을 존중하여, ',
                  kitaru.get_colored_name(),
                  '는 헤어스타일을 바꾸지 않기로 했다.',
                ]);
                await kitaru.say_and_wait('음! 역시 이게 제일 마음이 편하네요!');
                await era.printAndWait([
                  '기뻐하는 ',
                  kitaru.get_colored_name(),
                  '의 모습을 보며, ',
                  me.get_colored_name(),
                  '은(는) 슬쩍 손을 뻗어 ',
                  kitaru.sex,
                  '의 푹신한 오렌지색 머리카락의 부드러운 촉감을 만끽했다.',
                ]);
            }
            break;
          case 2:
            await kitaru.say_and_wait('오오! 새로운 점술 도구예요!');
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 역대 명문 ',
              kitaru.get_uma_sex_title(),
              '들을 테마로 한 타로 카드를 가리키는 ',
              kitaru.get_colored_name(),
              '를 바라보았다.',
            ]);
            break;
          case 3:
            await kitaru.say_and_wait('제가 머리를 기른 모습이 보고 싶으신가요?');
            await kitaru.say_and_wait('……죄송해요.');
            await era.printAndWait([
              '미용실 앞을 지날 때, ',
              kitaru.get_colored_name(),
              '는 우물쭈물하며 ',
              me.get_colored_name(),
              '이(가) 꺼낸 화제를 슬쩍 피했다.',
            ]);
        }
      });
  }
  await get_random_entry(message)();
};