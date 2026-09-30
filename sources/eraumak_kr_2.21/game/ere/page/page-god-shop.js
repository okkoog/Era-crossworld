/**
 * @file 三女神祈祷 - 系统提示
 * @author 阿格尼斯数码公司
 */
const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { money_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { attr_names } = require('#/data/train-const');

const button_contents = [
  '「아, 제발 도와주십시오 여신님——」',
  '「신이시여, 자비를 배풀어 주소서……」',
  '「제발 도와주세요. 여신님.」',
];
const pray_random_power_desc = [
  '몸이 더욱 가벼워졌다',
  '호흡이 더욱 차분해졌다',
  '근육이 더욱 탄탄해졌다',
  '가슴속에서 뜨거운 불꽃이 타올랐다',
  '머릿속이 비정상적으로 맑아졌다',
];

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
async function common_finish_pray(aim, me) {
  await era.printAndWait([
    '기도를 마친 후 ',
    ...(aim.id > 0
      ? [
          me.get_colored_name(),
          '과(와) 곁에 있던 ',
          aim.get_colored_name(),
          '은(는) 동시에 눈을 떴다.',
        ]
      : [me.get_colored_name(), '은(는) 천천히 눈을 떴다.']),
  ]);
}

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
async function common_pray_peace(aim, me) {
  await era.printAndWait('트레센 학원의 평안을 기원했다');
  await common_finish_pray(aim, me);
}

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
async function common_pray_power(aim, me) {
  await era.printAndWait([
    '어둠 속에서 희미한 빛이 일렁이며, 서서히 ',
    me.get_colored_name(),
    '의 몸속으로 흘러들어갔다!',
  ]);
  era.println();
  await common_finish_pray(aim, me);
}

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
function get_chara_desc(aim, me) {
  switch (sys_get_chara(aim.id)) {
    case 1:
    case 3:
      return [
        '곁에 있는 ',
        aim.get_colored_name(),
        '은(는) 자신감 넘치는 미소를 지으며 ',
        me.get_colored_name(),
        '에게 신뢰의 시선을 보낸다.',
      ];
    case -1:
    case 0:
    case 2:
      return [
        '곁에 있는 ',
        aim.get_colored_name(),
        '은(는) 세 여신상을 진지하게 응시하다가, 시선을 다시 ',
        me.get_colored_name(),
        '에게 돌렸다. 마치 ',
        me.get_colored_name(),
        '이(가) 무언가 하기를 기다리는 듯하다.',
      ];
    case -3:
    case -2:
      return [
        '곁에 있는 ',
        aim.get_colored_name(),
        '은(는) 조용히 꼬리를 흔들며 ',
        me.get_colored_name(),
        '의 다음 행동을 기다리고 있다.',
      ];
  }
}

module.exports = async () => {
  era.set('flag:현재위치', location_enum.god);
  let flag_god = 1;
  let relation = 0;
  let god_id = sys_get_random_uma_god();
  let god = god_id ? get_chara_talk(god_id) : undefined;
  const cur_id = era.get('flag:현재상호작용캐릭터');
  const aim = get_chara_talk(cur_id);
  const me = cur_id ? get_chara_talk(0) : aim;
  const life_marks = god_id ? LifeEventMarks.get_marks(god_id) : undefined;
  const common_uma_sex_title = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
  while (flag_god > 0) {
    await era.clear();
    print_page_header();
    if (cur_id) {
      print_curr_chara(cur_id);
    }
    era.drawLine();
    if (god_id > 0) {
      if (flag_god === 1) {
        if (cur_id === 0) {
          era.print([me.get_colored_name(), '은(는) 홀로 세 여신상 앞에 섰다.']);
          era.print('엄숙하고 위엄 있는 세 여신상의 어깨의 병 속의 물이 끊임없이 흘러나오고 있다.');
          god.say_as_unknown('……');
        } else {
          era.print([
            me.get_colored_name(),
            '과(와) ',
            aim.get_colored_name(),
            '은(는) 함께 세 여신상 앞에 도착했다.',
          ]);
          era.print(get_chara_desc(aim, me));
        }
      } else {
        god.say_as_unknown('……');
        era.print('세 여신상의 위에서 수수께끼 같은 기운이 감돌고 있다……');
        era.print([
          me.get_colored_name(),
          ...(cur_id > 0 ? ['과(와) ', aim.get_colored_name()] : []),
          '을(를) 누군가 지켜보고 있는 걸까……',
        ]);
      }
      era.drawLine();
      era.printMultiColumns([
        ...[
          { content: '유명해지기를 기원하기（1000 명성）', cost: 1000, type: 'button' },
          { content: '부자가 되기를 기원하기（500 명성）', cost: 500, type: 'button' },
          { content: '즉시 부자가 되기를 기원하기（50+ 명성）', cost: 50, type: 'button' },
          {
            config: {
              disabled:
                cur_id ||
                attr_names.findIndex(
                  (e) => era.get(`base:0:${e}`) < era.get(`maxbase:0:${e}`),
                ) === -1,
            },
            content: '더 강해지기를 기원하기（200 명성）',
            cost: 200,
            type: 'button',
          },
          {
            config: {
              disabled:
                attr_names.filter(
                  (e) =>
                    era.get(`maxbase:${cur_id}:${e}`) -
                      era.get(`base:${cur_id}:${e}`) <
                    50,
                ).length < 3 ||
                attr_names.findIndex(
                  (e) => era.get(`maxbase:${cur_id}:${e}`) < 2000,
                ) === -1,
            },
            content: `${cur_id ? ` ${aim.name} ` : ''}의 한계돌파를 기원하기（50-500 명성）`,
            cost: 0,
            type: 'button',
          },
          {
            content: `${cur_id ? ` ${aim.name} ` : ''}의 건강 회복을 기원하기（800 명성）`,
            cost: 800,
            type: 'button',
          },
          life_marks.get('love') === 1
            ? {
                content: button_contents[god_id - 340],
                config: {
                  buttonType: 'danger',
                },
                type: 'button',
              }
            : {},
        ]
          .filter((e) => e)
          .map((e, i) => {
            e.accelerator = i + 1;
            e.config ||= {};
            e.config.width = 12;
            e.config.disabled ||= era.get('flag:현재명성') <= e.cost;
            delete e.cost;
            return e;
          }),
        { accelerator: 99, content: '돌아가기', type: 'button' },
      ]);
      let temp = await era.input();
      if (temp === 99) {
        era.drawLine();
        if (cur_id === 0) {
          await era.printAndWait([
            flag_god === 1 ? '세 여신상 앞에서 간단히 경의를 표한 뒤 ' : '',
            me.get_colored_name(),
            '은(는) 세 여신상을 떠났다.',
          ]);
        } else {
          await era.printAndWait([
            flag_god === 1 ? '세 여신상 앞에서 간단히 경의를 표한 뒤 ' : '',
            aim.get_colored_name(),
            '과(와) ',
            me.get_colored_name(),
            '은(는) 함께 세 여신상을 떠났다.',
          ]);
        }
        flag_god = 0;
      } else if (temp === 990) {
        switch_image();
      } else {
        flag_god = 2;
        era.print(
          cur_id === 0
            ? [me.get_colored_name(), '은(는) 세 여신상 앞에서 조용히 기도를 올리고 있다……']
            : [
                me.get_colored_name(),
                '의 지시에 따라,',
                aim.get_colored_name(),
                '은(는) 함께 눈을 감고, 세 여신상 앞에서 조용히 기도를 올리고 있다……',
              ],
        );
        switch (temp) {
          case 1:
            if (
              await select_yes_or_no(
                [
                  '（이것이 내가 갈망하는 것인가?）',
                  { isBr: true },
                  '머릿속에, 왠지 모르게 이런 생각이 스쳐 지나갔다……',
                ],
                `그래（명성 획득량+${era.get('global:명성보너스')}%->${era.get('global:명성보너스') + 1}%）`,
                '아마 아닐지도……',
              )
            ) {
              await era.printAndWait('마음속으로 많은 사람들에게 둘러싸여 칭찬받는 장면을 상상했다……');
              await common_finish_pray(aim, me);
              era.println();
              era.add('global:명성보너스', 1);
              const honour = era.add('flag:현재명성', -1000);
              if (honour >= 2000) {
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 휴대폰을 켜고, 자신의 명성이 일본을 벗어나 세계로 뻗어나가지 못한 것을 한탄했다.',
                ]);
              } else if (honour >= 1000) {
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 휴대폰을 켜고, 자신의 명성이 직접적으로 더 많은 우수한 학생을 유치해 주지 못했다는 사실에 한숨을 내쉬었다.',
                ]);
              } else if (honour >= 500) {
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 휴대폰을 켜고, 절친과 가족을 제외하면 자신을 진심으로 신경 써주는 사람이 거의 없다는 사실에 한숨을 내쉬었다.',
                ]);
              } else {
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 휴대폰을 켜고, 절친과 가족을 제외하면 연락처가 거의 없다는 사실에 한숨을 내쉬었다.',
                ]);
              }
              await era.printAndWait(
                '그렇게 생각하고 있을 때, 휴대폰에 낯선 사람으로부터 메시지가 갑자기 도착했다.',
              );
              await era.printAndWait([
                me.get_colored_name(),
                '이(가) 어떻게 ',
                common_uma_sex_title,
                '를 육성하고, 또 ',
                me.get_colored_name(),
                '이(가) 키운 ',
                common_uma_sex_title,
                '의 성적을 보고 싶어 하는 사람이 보낸 것이었다.',
              ]);
              await era.printAndWait('그 후, 예전보다 더 많은 이런 메시지를 받게 되었다……');
              relation += 500;
            } else {
              await common_pray_peace(aim, me);
            }
            break;
          case 2:
            if (
              await select_yes_or_no(
                [
                  '（이것이, 나의 진심인가?）',
                  { isBr: true },
                  '머릿속에, 왠지 모르게 이런 생각이 스쳐 지나갔다……',
                ],
                `그래（우마코인 획득량+${era.get('global:자금보너스')}%->${era.get('global:자금보너스') + 1}%）`,
                '아닐지도',
              )
            ) {
              await era.printAndWait([
                me.get_colored_name(),
                '은(는) 머릿속으로 저금통이 날마다 쌓여 점점 무거워지는 모습을 상상해 봤다……',
              ]);
              await common_finish_pray(aim, me);
              era.println();
              await era.printAndWait(
                '왠지 모르게 머릿속에 당신의 월급과 배당금 숫자가 떠올랐는데, 어렴풋이 예전보다 수치가 높아진 것 같은 느낌이 든다.',
              );
              await era.printAndWait(
                '트레센 월급은 예전부터 이랬으니 아마 착각이겠지……',
              );
              era.add('global:자금보너스', 1);
              era.add('flag:현재명성', -500);
              relation += 250;
            } else {
              await common_pray_peace(aim, me);
            }
            break;
          case 3:
            era.printMultiColumns([
              {
                content: [
                  '（그럼, 대략 얼마 정도가 필요하지?）',
                  { isBr: true },
                  '머릿속에 문득 이런 생각이 스쳤다.',
                ],
                type: 'text',
              },
              ...[
                '250 우마코인 정도면 충분하겠지……',
                '500 우마코인 정도면 충분하겠지……',
                '750 우마코인 정도는 돼야겠지…',
                '1000우마코인 정도는 돼야겠지……',
              ].map((e, i) => ({
                accelerator: i + 1,
                config: {
                  disabled: era.get('flag:현재명성') <= 50 * (i + 1),
                  width: 12,
                },
                content: e,
                type: 'button',
              })),
              { accelerator: 99, content: '还是算了', type: 'button' },
            ]);
            temp = await era.input();
            if (temp === 99) {
              await common_pray_peace(aim, me);
            } else {
              if (temp <= 2) {
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 우마무스메에게 훈련 장비를 사주기 위해 돈을 건네는 모습을 머릿속으로 그려본다...',
                ]);
                await common_finish_pray(aim, me);
                era.println();
                await era.printAndWait([
                  '얼마 지나지 않아',
                  get_chara_talk(301).get_colored_name(),
                  '가 ',
                  me.get_colored_name(),
                  '에게 메세지를 보냈다. 왠지 모르게 ',
                  me.get_colored_name(),
                  '이(가) ',
                  common_uma_sex_title,
                  '를 훈련시키는 방식이',
                  common_uma_sex_title,
                  '를 부상입힐 가능성이 높다고 판단한 모양이다.',
                ]);
                await era.printAndWait([
                  '그 후, ',
                  {
                    color: money_color,
                    content: (250 * temp).toLocaleString(),
                  },
                  '우마코인을 보내며 이 돈으로 ',
                  me.get_colored_name(),
                  '의 훈련 방식을 개선해 달라고 요청했다...',
                ]);
              } else {
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 돈의 바다를 거니는 모습을 머릿속으로 그렸다...',
                ]);
                await common_finish_pray(aim, me);
                era.println();
                await era.printAndWait([
                  '얼마 지나지 않아 ',
                  get_chara_talk(302).get_colored_name(),
                  '이 ',
                  me.get_colored_name(),
                  '에게 메세지를 보냈다. ',
                  me.get_colored_name(),
                  '에게 특별 보조금을 지급한다며 ',
                  {
                    color: money_color,
                    content: (250 * temp).toLocaleString(),
                  },
                  '우마코인을 보내 줬다.',
                ]);
                await era.printAndWait([
                  '그러나 전제 조건이 있었는데, ',
                  me.get_colored_name(),
                  '이(가) 트레센 학원의 트레이너로서 더 이상 이상한 소문을 일으키지 말 것 이었다...',
                ]);
              }
              era.add('flag:현재명성', -50 * temp);
              era.add('flag:현재코인', 250 * temp);
              relation += 25 * temp;
            }
            break;
          case 4:
            era.printMultiColumns([
              {
                content: [
                  '（어떤 부분을 개선해야 할까?）',
                  { isBr: true },
                  '머릿속에 이런 의문이 떠올랐다...',
                ],
                type: 'text',
              },
              ...attr_names.map((e, i) => ({
                accelerator: i,
                content: `${e}（+80）`,
                config: {
                  disabled:
                    era.get(`base:0:${e}`) === era.get(`maxbase:0:${e}`),
                  width: 6,
                },
                type: 'button',
              })),
              {
                accelerator: 5,
                content: '아마 전부……（무작위 능력치+100）',
                type: 'button',
              },
              {
                accelerator: 99,
                content: '더 이상 강해질 필요는 없을지도……',
                type: 'button',
              },
            ]);
            temp = await era.input();
            if (temp < 99) {
              switch (temp) {
                case 0:
                  await era.printAndWait([
                    '조깅하는 담당 ',
                    common_uma_sex_title,
                    '와 나란히 걸으며 지도해 주는 것을 상상했다……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '따뜻한 여운이 여전히 머릿속에 남은 ',
                    me.get_colored_name(),
                    '은(는) 몸이 더 가벼워지는 것을 느꼈다……',
                  ]);
                  break;
                case 1:
                  await era.printAndWait([
                    '지치지 않고 담당 ',
                    common_uma_sex_title,
                    '를 가르치는 모습을 상상했다……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '따뜻한 여운이 여전히 머릿속에 남은 ',
                    me.get_colored_name(),
                    '은(는) 호흡이 더 차분해지는 것을 느꼈다……',
                  ]);
                  break;
                case 2:
                  await era.printAndWait([
                    '자신의 담당 ',
                    common_uma_sex_title,
                    '의 줄다리기 대회 우승을 돕는 모습을 상상했다……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '따뜻한 여운이 여전히 머릿속에 남은 ',
                    me.get_colored_name(),
                    '은(는) 근육이 더 단단해진 것을 느꼈다……',
                  ]);
                  break;
                case 3:
                  await era.printAndWait([
                    '목이 터져라 담당',
                    common_uma_sex_title,
                    '를 응원하는 모습을 상상했다……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '따뜻한 여운이 여전히 머릿속에 남은 ',
                    me.get_colored_name(),
                    '은(는) 마음 속에서 뜨거운 열기가 솟구치는 것을 느꼈다……',
                  ]);
                  break;
                case 4:
                  await era.printAndWait([
                    '담당 ',
                    common_uma_sex_title,
                    '를 위해 완벽한 트레이닝 계획을 짜는 것을 상상했다……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '따뜻한 여운이 여전히 머릿속에 남은',
                    me.get_colored_name(),
                    '은(는)  머릿속이 유난히 맑아지는 것을 느꼈다……',
                  ]);
                  break;
                case 5:
                  temp =
                    get_random_entry(
                      new Array(5)
                        .fill(0)
                        .map((_, i) => i)
                        .filter(
                          (e) =>
                            era.get(`base:0:${attr_names[e]}`) <
                            era.get(`maxbase:0:${attr_names[e]}`),
                        ),
                    ) + 10;
                  await era.printAndWait([
                    '머릿속에 담당 ',
                    common_uma_sex_title,
                    '가 자신을 위로하는 모습이 스쳐 지나갔다……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '따뜻한 여운이 여전히 머릿속에 남은 ',
                    me.get_colored_name(),
                    '은(는) ',
                    pray_random_power_desc[temp - 10],
                    '……',
                  ]);
              }
              if (temp < 10) {
                sys_change_attr_and_print(0, temp, 80);
              } else {
                sys_change_attr_and_print(0, temp - 10, 100);
              }
              era.add('flag:현재명성', -200);
              relation += 100;
            } else {
              await god.say_as_unknown_and_wait('노력하면, 언젠가는…… 될 거야……');
              await era.printAndWait('그런 목소리가 들리는 것 같다.');
              era.println();
              await common_finish_pray(aim, me);
              await era.printAndWait('세 여신상은 여전히 고요하게 서있다……');
            }
            break;
          case 5:
            temp = [
              attr_names.filter(
                (e) =>
                  era.get(`base:${cur_id}:${e}`) ===
                  era.get(`maxbase:${cur_id}:${e}`),
              ).length,
            ];
            temp.push(
              temp >= 3 ? 50 : (3 - temp) * 100 + 200 * (temp[0] === 0),
            );
            if (
              await select_yes_or_no(
                [
                  '（총 ',
                  temp[0].toString(),
                  '개의 능력이 극한에 달한 상황인데, ',
                  aim.get_colored_name(),
                  '은(는) 이대로 멈춰 서도 되는 걸까?',
                  { isBr: true },
                  '머릿속에 잠깐 그런 의문이 떠올랐다...',
                ],
                `동의（${temp[1]} 명성，훈련보너스-10%）`,
                '잠깐 멈춰 서도 될지도',
              )
            ) {
              attr_names.forEach((e) => {
                era.set(
                  `maxbase:${cur_id}:${e}`,
                  Math.min(2000, era.get(`maxbase:${cur_id}:${e}`) + 100),
                );
                era.add(`cflag:${cur_id}:${e}보너스`, -10);
              });
              if (cur_id === 0) {
                await era.printAndWait(
                  '등불을 켜고 밤을 새워가며, 하나하나 새로운 훈련서를 작성하는 모습을 상상해 보았다……',
                );
                await era.printAndWait([
                  '어둠 속에서 희미한 빛이 솟아올라, 천천히 ',
                  me.get_colored_name(),
                  '의 몸 속으로 들어갔다!',
                ]);
                era.println();
                await era.printAndWait('기도를 마친 후 천천히 눈을 뜨자...');
                await era.printAndWait([
                  '따뜻한 여운이 여전히 머릿속에 남아 있는 ',
                  me.get_colored_name(),
                  '은(는) 자신이 한 단계 더 성장할 수 있다는 사실을 확신하게 되었다.',
                ]);
              } else {
                await era.printAndWait([
                  '곁에서 ',
                  common_uma_sex_title,
                  '가 선배들을 끊임없이 뛰어넘고, 경기장에서 기록을 경신하는 모습을 상상했다...',
                ]);
                await era.printAndWait([
                  '기도를 마친 후, 곁에 있던 ',
                  aim.get_colored_name(),
                  '과(와) 동시에 눈을 떴다.',
                ]);
                era.println();
                await era.printAndWait([
                  '눈을 뜬 ',
                  me.get_colored_name(),
                  '은(는), 곁에 있는 ',
                  aim.get_colored_name(),
                  '에게서 드러나는 새로운 잠재력을 분명히 감지했다!',
                ]);
              }
              era.add('flag:현재명성', -temp[1]);
              relation += temp[1] / 2;
            } else if (cur_id === 0) {
              await era.printAndWait([
                common_uma_sex_title,
                '와 함께 보낸 수많은 밤낮을 떠올렸다...',
              ]);
              await era.printAndWait('기도를 마친 후, 천천히 눈을 떴다.');
            } else {
              await era.printAndWait([
                '곁에 있는 ',
                aim.get_colored_name(),
                '이(가) 매일 성실하게 훈련하는 모습을 떠올렸다……',
              ]);
              await era.printAndWait([
                '기도를 마친 후 ',
                me.get_colored_name(),
                '과(와) 곁에 있는 ',
                aim.get_colored_name(),
                '은(는) 동시에 눈을 떴다.',
              ]);
            }
            break;
          case 6:
            if (
              (era.get(`status:${cur_id}:밤샘`) ||
                era.get(`status:${cur_id}:살찜`) ||
                era.get(`status:${cur_id}:편두통`) ||
                era.get(`status:${cur_id}:부상`) ||
                era.get(`status:${cur_id}:피로`)) &&
              (await select_yes_or_no(
                [
                  '（역시, 가장 바라는 건……)',
                  { isBr: true },
                  me.get_colored_name(),
                  '은(는) ',
                  aim.get_colored_name(),
                  '을(를) 걱정하며 건강을 떠올렸다.',
                ],
                '만약, 기도가 소용이 있다면……',
                '기도보다는, 역시 다른 노력이 더 필요하겠지……',
              ))
            ) {
              await era.printAndWait([
                aim.get_colored_name(),
                '가 다시 건강하고 활기차게 변해가는 모습을 그렸다……',
              ]);
              await era.printAndWait([
                '기도를 마친 후 ',
                me.get_colored_name(),
                '은(는) 눈을 떴다.',
              ]);
              era.println();
              if (cur_id === 0) {
                await era.printAndWait([
                  '활력이 넘치는 몸을 느끼며 ',
                  me.get_colored_name(),
                  '은(는) 세 여신상 앞에 온 목적이 무엇인지 문득 의문이 들었다.',
                ]);
              } else {
                await era.printAndWait(get_chara_desc(aim, me));
                era.println();
                await era.printAndWait([
                  '방금 활력이 넘치는 ',
                  aim.get_colored_name(),
                  '과(와) 함께 세 여신상 앞에 온 ',
                  me.get_colored_name(),
                  '은(는) 도대체 뭘 하러 온 걸까?',
                ]);
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 다음에 할 일을 고민해 봤다.',
                ]);
              }
              era.set(`base:${cur_id}:체중 편차`, 0);
              era.set(`base:${cur_id}:약물 잔류량`, 0);
              era.set(`base:${cur_id}:스트레스`, 0);
              era.set(`status:${cur_id}:밤샘`, 0);
              era.set(`status:${cur_id}:살찜`, 0);
              era.set(`status:${cur_id}:편두통`, 0);
              era.set(`status:${cur_id}:부상`, 0);
              era.set(`status:${cur_id}:피로`, 0);
              sys_change_motivation(cur_id, 4) && (await era.waitAnyKey());
              era.set(`status:${cur_id}:연습X서수`, 1);
              era.add('flag:현재명성', -800);
              relation += 400;
            } else {
              await era.printAndWait([
                aim.get_colored_name(),
                '이(가) 휴식을 취한 후 상태가 점점 회복되는 모습을 상상했다……',
              ]);
              era.println();
              await god.say_as_unknown_and_wait('너라면…… 해낼 수 있어……');
              await era.printAndWait('이런 소리가 들린 것 같다.');
              era.println();
              await common_finish_pray(aim, me);
              era.println();
              await era.printAndWait('세 여신상은 여전히 고요히 서 있다……');
            }
            break;
          case 7:
            switch (god_id) {
              case 340:
                await era.printAndWait([
                  '참지 못하고 ',
                  common_uma_sex_title,
                  '처럼 세 여신상 아래에서 기도해 버렸다——그냥 내버려 둬도 상관없을 법한, 투정 섞인 소원을 빌며.',
                ]);
                await era.printAndWait([
                  '……착각인가? 여신님의 저 멀리를 향해 곧게 뻗어 있어야 할 시선이, 아름다운 곡선을 그리며',
                  me.get_colored_name(),
                  ' 쪽으로 향했다.',
                ]);
                await era.printAndWait('게다가 웃고 있는 것 같다.');
                break;
              case 341:
                await era.printAndWait(
                  '기도하는 순간, 혹은 소원이 마음속에서 솟아나는 순간.',
                );
                await era.printAndWait(
                  '주변의 세상은 고요해지고, 병 속의 물이 졸졸 흐르는 소리만 남았다.',
                );
                await era.printAndWait([
                  me.get_colored_name(),
                  '은(는) 눈을 감고, 마치 누군가의 품처럼 따뜻하게 감싸는 안도감을 조용히 느끼고 있다.',
                ]);
                break;
              case 342:
                await era.printAndWait(
                  '고개를 살짝 숙여 세 여신상에 기도를 올렸다. 비록 그 모습은 그저 마음 가는 대로 하는 애교처럼 보이기도 하고, 일어날 리 없다는 걸 알면서도 기적을 기대하는 자신을 비아냥거리는 것 같기도 했다.',
                );
                await era.printAndWait([
                  '하지만 고개를 숙이는 순간, 마치 누군가 뒤에서 살며시 ',
                  me.get_colored_name(),
                  '을(를) 안아주는 듯했고, 단단하고 거부할 수 없는 힘이 ',
                  me.get_colored_name(),
                  '의 귓가에 부드러운 바람을 불어넣으며, 마치 ',
                  me.get_colored_name(),
                  '의 기도에 응답하는 듯했다.',
                ]);
                await era.printAndWait([
                  '주변은 온통 고요했고, 오직 흙의 향기와 촉촉함이 손끝에서 ',
                  me.get_colored_name(),
                  '의 뇌리까지 전해져 왔다. 눈을 떴을 때, ',
                  me.get_colored_name(),
                  '의 손가락 끝에 느껴지는 그 은은한 촉촉함이 마치 방금 있었던 모든 것이 결코 환상이 아니었음을 말해주고 있는 듯했다.',
                ]);
            }
            life_marks.add('love');
            add_event(
              event_hooks.week_end,
              new EventObject(god_id, cb_enum.love).set_arg(50),
            );
        }
      }
    } else {
      flag_god = -1;
      await era.printAndWait('세 여신상이 고요히 서 있다...');
      god_id = get_random_entry(
        new Array(3)
          .fill(0)
          .map((_, i) => 340 + i)
          .filter(
            (e) =>
              era.get(`cflag:${e}:모집상태`) === recruit_flags.yes &&
              sys_check_awake(e) &&
              era.get(`cflag:${e}:위치`) === era.get('cflag:0:위치'),
          ),
      );
      if (god_id > 0) {
        god = get_chara_talk(god_id);
        await era.printAndWait([
          me.get_colored_name(),
          ' 갑자기 뒤에서 누군가 말을 거는 소리가 들려...',
        ]);
        await era.printAndWait([
          '뒤를 돌아보니 ',
          god.get_colored_name(),
          '이(가) 어느새 ',
          me.get_colored_name(),
          '의 뒤에 서 있었다...',
        ]);
        era.set('flag:현재상호작용캐릭터', god_id);
      }
    }
  }
  if (relation && sys_like_chara(god_id, 0, relation)) {
    await era.waitAnyKey();
  }
  era.set('flag:현재위치', location_enum.office);
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.god,
  });
};
