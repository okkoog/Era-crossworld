/**
 * @file 라이스 샤워 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {CharaTalk} rice */
function report_celebration(rice) {
  rice.say(
    Math.random() < 0.5
      ? '곧 축제가 시작될 것 같아…… 어떤 일을 하게 될까?'
      : [
          '축제가 열리고 있는 것 같아…… ',
          sys_get_callname(30, 30),
          ', 민폐를 끼치지 않도록 노력할테니까…… 살짝 구경하러 가도 될까……?',
        ],
  );
}

module.exports = class extends CustomizedDaily {
  select() {
    const rice = get_chara_talk(30);
    if (sys_check_awake(30)) {
      if (era.get('cflag:30:축제이벤트표시') === 1) {
        report_celebration(rice);
      } else {
        era.print(
          Math.random() < 0.5
            ? [
                rice.get_colored_name(),
                '는 정전기에 깜짝 놀라 귀를 만지작거리며 당신의 지시를 기다리고 있다.',
              ]
            : [
                rice.get_colored_name(),
                '는 앞머리를 옆으로 넘기며 생기 넘치는 눈으로 당신과 시선을 맞춘다.',
              ],
        );
      }
    } else {
      era.print([rice.get_colored_name(), '는 그림책보다 더 예쁜 미소를 지으며 깊이 잠들어 있다.']);
    }
  }

  good_morning() {
    const rice = get_chara_talk(30);
    if (era.get('cflag:30:축제이벤트표시') === 1) {
      report_celebration(rice);
    } else {
      const buffer = [
        () => rice.say(['부디…… ', sys_get_callname(30, 30), '를 잘 지켜봐 줘.']),
        () => rice.say([sys_get_callname(30, 30), '도…… 분명 빛날 수 있을 거야……']),
      ];
      if (!era.get('status:30:밤샘')) {
        buffer.push(
          () => {
            rice.say('어젯밤에 정말 멋진 꿈을 꿨어……!');
            rice.say('오라버니와 함께, 찬란한 별빛이 쏟아지는 초원에서……');
            rice.say('원래는 같이 훈련을 하려고 했는데……');
            rice.say('별이 너무 예뻐서, 도중에 같이 별을 보기로 했어.');
            rice.say('그래서, 일찍 일어나서 제대로 훈련해야겠다고 생각했어!');
          },
          () => {
            rice.say([sys_get_callname(30, 30), '는 꽃집에 다녀왔어.']);
            rice.say('시원한 가게 안에서 꽃들에 둘러싸여 있으니 마음이 정말 차분해졌어.');
            rice.say([
              '후후~ 그래서 오늘의 트레이닝, ',
              sys_get_callname(30, 30),
              '는 열심히 노력할 거야!',
            ]);
          },
        );
      }
      get_random_entry(buffer)();
    }
  }

  async talk() {
    if (!sys_check_awake(30)) {
      return super.talk();
    }
    const rice = get_chara_talk(30),
      callname = sys_get_callname(30, 0),
      motivation = era.get('cflag:30:컨디션'),
      self_name = era.get('callname:30:30');
    const buffer = [];
    if (era.get('base:30:체력') < era.get('maxbase:30:체력') / 3) {
      buffer.push(
        () => rice.say_and_wait('후우…… 조금, 지친…… 느낌이 들어……'),
        () => rice.say_and_wait([self_name, '는 괜찮아요! 지치지…… 않았어……']),
      );
    } else if (era.get('cflag:30:육성턴수합산') < 3 * 48) {
      switch (motivation) {
        case -2: // 컨디션 최악
          buffer.push(
            () =>
              rice.say_and_wait([
                '아우우! ',
                callname,
                '에게 폐를 끼치고 싶지 않았는데…… 미안해...',
              ]),
            () => rice.say_and_wait([self_name, '는…… 다시 쓸모없는 아이로 돌아가는 걸까…']),
          );
          break;
        case -1: // 컨디션 나쁨
          buffer.push(
            () => rice.say_and_wait(['으으…… 힘내자 ', self_name, '…… 힘내…']),
            () =>
              rice.say_and_wait([
                sys_get_callname(30, 30),
                '가 도울 수 있는 일은 없을까……',
              ]),
          );
          break;
        case 0: // 컨디션 보통
          buffer.push(
            () => rice.say_and_wait('우리 어떤 훈련을 할까?'),
            () => rice.say_and_wait([self_name, '를 실망시키지 않도록 노력할게.']),
          );
          break;
        case 1: // 컨디션 양호
          buffer.push(
            () => rice.say_and_wait('힘낼게—! 오늘도 잘 부탁해.'),
            () =>
              rice.say_and_wait([
                callname,
                ', 훈련 시작할까? ',
                self_name,
                ', 오늘 많은 것을 해낼 수 있을 것 같은 기분이야.',
              ]),
          );
          break;
        case 2: // 컨디션 최상
          buffer.push(
            () =>
              rice
                .say_and_wait([self_name, '는 지금 아주, 아주 많이 노력할 수 있을 것 같아!'])
                .then(() =>
                  rice.say_and_wait([
                    self_name,
                    '를 믿어줘, ',
                    callname,
                    '.',
                  ]),
                ),
            () =>
              rice
                .say_and_wait(['저기, ', self_name, '는 벌써 준비 운동 끝났어.'])
                .then(() =>
                  rice.say_and_wait('그러니까 지금 당장 시작해도 괜찮아.'),
                ),
          );
      }
    } else {
      buffer.push(
        () =>
          rice.say_and_wait(
            '매일, 아주 조금씩이지만…… 이상적인 모습에 점점 가까워지는…… 느낌이야.',
          ),
        () =>
          rice.say_and_wait([
            callname,
            '…… 저기, 할 말이 있는데…… ',
            self_name,
            '는 매일 노력할 테니까…… ',
            self_name,
            '가 분명 변할 수 있다는 걸 믿어줘.',
          ]),
        () =>
          rice.say_and_wait([
            '지금은…… ',
            self_name,
            '도 더 이상 내 자신이 그렇게 밉지 않게 되었어.',
          ]),
        () =>
          rice.say_and_wait([
            '……으음, ',
            callname,
            '…… 오늘도 계속 ',
            self_name,
            '를 돌봐 줄 거야……?',
          ]),
        () =>
          rice.say_and_wait([
            '사실…… ',
            self_name,
            '가 초콜릿을 만들었는데…… ',
            self_name,
            '가 만든 초콜릿, 받아 줄래……? 받아 준다면 ',
            self_name,
            '는 정말 기쁠 거야.',
          ]),
        () =>
          rice.say_and_wait([
            '별은 모두의 소원을 들어주고, 모두를 행복하게 해주니 정말 대단해. ',
            self_name,
            '도…… 노력해야겠어.',
          ]),
        () =>
          rice.say_and_wait([
            callname,
            '를 만난 뒤로, 매일 시간이 정말 빠르게 흘러가…… ',
            self_name,
            '는 열심히 할 거야!',
          ]),
        () => rice.say_and_wait([self_name, '가 교복 입은 모습, 잘 어울려?']),
        () => rice.say_and_wait('계속 빤히 쳐다보면…… 조금 부끄러워.'),
      );
    }
    await get_random_entry(buffer)();
  }

  office_cook() {
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? '에헤헤, 마치 신혼부부 같네.'
        : [
            '의외야? ',
            sys_get_callname(30, 30),
            '는 먹성이 좋은 편이라, 어머니께 요리를 가르쳐 달라고 했었거든.',
          ],
    );
  }

  office_study() {
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? [
            '이건 ',
            sys_get_callname(30, 30),
            '가 엄선한 그림책이야. ',
            sys_get_callname(30, 0),
            '도 읽어 줬으면 좋겠어.',
          ]
        : [sys_get_callname(30, 0), '는 레이스와 관련된 일에 정말 능숙하네……'],
    );
  }

  office_rest() {
    const callname = sys_get_callname(30, 0);
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? [
            callname,
            ', 저기…… 무릎베개…… 와아아, 실은 ',
            sys_get_callname(30, 30),
            '가 ',
            callname,
            '에게 해주고 싶어서…',
          ]
        : [
            '정말로 겉옷을 ',
            sys_get_callname(30, 30),
            '에게 담요 대신 덮어주지 않아도 괜찮은데…… 좋은 냄새가 나…',
          ],
    );
  }

  office_game() {
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? [
            '《',
            get_chara_talk(30).get_uma_sex_title(),
            ' 꼬마의 목욕 일기》, 히히, 라이스도 아주 좋아해.',
          ]
        : [
            sys_get_callname(30, 0),
            ', 모범생 같은 느낌인데 게임 실력도 정말 대단해!',
          ],
    );
  }

  async school_atrium(hook) {
    const callname = sys_get_callname(30, 0),
      rice = get_chara_talk(30),
      self_name = sys_get_callname(30, 30);
    hook.arg = !(await select_action_in_atrium(30));
    if (hook.arg) {
      await rice.say_and_wait(
        Math.random() < 0.5
          ? [
              '울면…… 안 돼, ',
              callname,
              '와 약속했으니까, ',
              self_name,
              '는 강한 아이가 될 거야.',
            ]
          : ['세 여신님, ', self_name, '는 이제 스스로를 믿어보려고 해요.'],
      );
    } else {
      await rice.say_and_wait(
        Math.random() < 0.5
          ? '벤치에 앉아 있는 분들, 정말 대담하시네…… 조금 부럽기도 해.'
          : '트레센 학원인데도 이렇게 데이트하기 좋은 곳이 있구나.',
      );
    }
  }

  school_rooftop() {
    return get_chara_talk(30).say_and_wait([
      sys_get_callname(30, 30),
      '는 아침엔 빵을 먹는 쪽이지만, 도시락에는 조금 자신이 있어!',
    ]);
  }

  async out_river(hook, extra_flag) {
    const callname = era.get('callname:30:0'),
      rice = get_chara_talk(30);
    hook.arg = !!(await select_action_around_river());
    if (!hook.arg) {
      if (Math.random() < 0.1) {
        await rice.say_and_wait('으와아아! 금어기인데 물고기가 이렇게나 많이 잡히다니, 정말 미안해!');
        extra_flag.jpy = 10;
      } else {
        await rice.say_and_wait([callname, ', 지금은 금어기라구?']);
        await rice.say_and_wait('에…… 한 사람당 낚싯대 하나에 줄 하나 바늘 하나는 괜찮다구? 생태 환경 개선? 에에에?');
      }
    } else {
      await rice.say_and_wait(
        Math.random() < 0.5
          ? [
              '예전에는 혼자 훈련해서 외로움을 느꼈을지도 몰라. 하지만 ',
              callname,
              '와 함께라면 마음이 치유되는 기분이야!',
            ]
          : [
              sys_get_callname(30, 30),
              '가 가장 즐거운, 혹은 가장 라이스 자신다워지는 시간은 ',
              callname,
              '와 느긋하게 걷는 바로 지금이야.',
            ],
      );
    }
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(30, 0),
      rice = get_chara_talk(30),
      self_name = sys_get_callname(30, 30),
      temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? '왜 오락실은 현금을 안 쓰고 코인을 쓰는 걸까? 직원분들이 번거롭지 않을까…'
            : [
                callname,
                ', 이 기계는 고장 난 걸지도 몰라. 왜냐하면, 이렇게 느린 탄막을 ',
                callname,
                '가 못 피할 리가 없잖아?',
              ],
        );
        break;
      case 1:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [
                self_name,
                '는 계속 티슈만 뽑히네…… 과정을 즐기라구? 그럼 ',
                self_name,
                '가 다시 한번 해볼게.',
              ]
            : [
                '저기, 돈은 ',
                self_name,
                '가 낼 테니, ',
                callname,
                '는 행운을 빌어 줘!',
              ],
        );
        break;
      case 2:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [callname, '에게 바치는 노래라면, ', self_name, '는 얼마든지 부를 수 있어.']
            : [self_name, '의 작은 기도가 ', callname, '에게 전해졌을까?'],
        );
        break;
      case 3:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [callname, '. 왜 누군가를 사랑하면서도, 상대방을 좋아하지 않을 수가 있는 걸까?']
            : [
                '《나O토 극장판》에 ',
                self_name,
                '와 닮은 멋진 캐릭터가 나온다구? 기대된다!',
              ],
        );
    }
  }

  async out_station(hook) {
    const callname = sys_get_callname(30, 0),
      rice = get_chara_talk(30),
      self_name = sys_get_callname(30, 30);
    hook.arg = await select_action_in_station(30);
    switch (hook.arg) {
      case 0:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [
                '머머머, 먹고 싶은 게 ',
                self_name,
                '라니… 아, ',
                callname,
                '는 밥(라이스) 파였지.',
              ]
            : ['역시 더치페이로 할까? ', self_name, '도 라이스의 식사량이 꽤 많다는 건 알고 있어.'],
        );
        break;
      case 1:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [
                '헤헤, ',
                rice.get_colored_name(),
                '는 마치 그림책 속의 여주인공이 된 기분이야.',
              ]
            : [callname, '는 그런 타입의 ', rice.get_uma_sex_title(), '를 좋아하는구나……'],
        );
        break;
      case 2:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? '그림책 코너, 같이 둘러보래?'
            : ['커플 한정…… 하지만 ', callname, '는 그냥 ', callname, '인걸.'],
        );
    }
  }
};