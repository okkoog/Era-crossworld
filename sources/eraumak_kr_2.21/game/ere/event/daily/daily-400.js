/**
 * @file 선데이 사일런스 - 日常
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const ss_celebration = require('#/event/daily/daily-events-400/celebration');
const ss_good_morning = require('#/event/daily/daily-events-400/good-morning');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends CustomizedDaily {
  async celebration(hook) {
    if (
      (era.get('flag:현재턴수') - 1) % 48 !== 29 ||
      era.get('cflag:400:육성턴수합산') < 96 ||
      era.get('love:400') < 75
    ) {
      return await super.celebration(hook);
    }
    await ss_celebration();
  }

  select() {
    if (!sys_check_awake(400)) {
      return super.select();
    }
    const love = era.get('love:400'),
      silence = get_chara_talk(400),
      me = get_chara_talk(0),
      buffer = [];
    if (love === 100) {
      buffer.push(() => {
        silence.say(
          `${sys_get_callname(400, 0)}, 내 모습을 반드시 똑똑히 지켜봐 줘. 네 머릿속에 영원히 각인되도록, 언제까지나. 그리고 영원히 내 곁을 떠나지 마.`,
        );
        era.print([
          silence.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '을(를) 향해 두 팔을 벌렸다. 마치 ',
          me.get_colored_name(),
          '을(를) 꼬옥 끌어안고 싶어 하는 것 같았다.',
        ]);
      });
    } else if (love >= 75) {
      buffer.push(() => {
        silence.say(
          '다음엔 조금만 더 일찍 와 줄 수 있어? 널 빨리 보고 싶기도 하고, 그래야 우리 훈련도 더 효과가 있을 테니까.',
        );
        era.print([
          silence.get_colored_name(),
          '는 살짝 붉어진 뺨을 돌리며 ',
          me.get_colored_name(),
          '의 눈을 똑바로 바라보지 못했다.',
        ]);
      });
    } else if (love >= 50) {
      buffer.push(() => {
        silence.say(
          '조금만 더 가까이 와 볼래? 아니, 그냥 내가 선택한 트레이너가 얼마나 뛰어난 녀석인지 확인하고 싶을 뿐이야.',
        );
        era.print([
          silence.get_colored_name(),
          '의 시선이 ',
          me.get_colored_name(),
          '에게서 떨어질 줄 몰랐다.',
        ]);
      });
    } else {
      buffer.push(
        () => {
          silence.say('트레이너로서 오는 시간은 꽤 합리적이네. 적어도 지각은 안 했으니까.');
          era.print([
            silence.get_colored_name(),
            '는 고개를 끄덕였다. 마치 ',
            me.get_colored_name(),
            '을(를) 인정한다는 듯이.',
          ]);
        },
        () => {
          silence.say(
            `딱 맞춰서 왔네, ${sys_get_callname(400, 0)}. 오늘은 일정이 어떻게 돼?`,
          );
          era.print([silence.get_colored_name(), '는 무척 흥미롭다는 표정이다.']);
        },
      );
    }
    get_random_entry(buffer)();
  }

  good_morning = ss_good_morning;

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(400)) {
      return await super.good_night(hook);
    }
    const check = get_custom_check(400).is_want_make_love(),
      me = get_chara_talk(0),
      silence = get_chara_talk(400);
    if (check) {
      silence.say(`같이 들어올래?`);
      era.print(
        `${silence.name}는 두 다리를 꼼지락거리며 비볐고, 당신은 ${silence.sex}의 호흡이 점점 가빠지는 것을 느낄 수 있었다.`,
      );
      era.print(
        `경기장을 호령하며 질주하던 그 탄탄한 다리가 지금은 안절부절못하며 천천히 다가왔다. ${silence.sex}는 손을 뻗어 당신을 ${silence.sex}의 방으로 이끌려 했다.`,
      );
      era.printButton('받아들인다', 1);
      era.printButton('시치미 뗀다', 2);
      hook.arg = (await era.input()) === 1;
      if (check === 2) {
        hook.arg = 2;
      }
    } else {
      era.print([
        '일과가 끝난 후, ',
        me.get_colored_name(),
        '은(는) ',
        silence.get_colored_name(),
        '를 기숙사 앞까지 배웅해 주었다.',
      ]);
      silence.say('이걸로 됐어, 정말 고마워……');
      era.print([
        silence.get_colored_name(),
        '는 고개를 살짝 숙이고 기쁘게 웃으며 ',
        silence.sex,
        '의 기숙사 안으로 들어갔다.',
      ]);
    }
  }

  talk() {
    const buffer = [],
      silence = get_chara_talk(400),
      me = get_chara_talk(0);
    if (era.get('base:400:체력') < era.get('maxbase:400:체력') / 3) {
      buffer.push(() =>
        silence
          .say_and_wait(
            '그다지 현명한 생각 같지는 않네. 그리고 확실히 해두겠는데, 우리 둘은 대등한 관계야. 네 책무를 제대로 기억해 줬으면 좋겠어.',
          )
          .then(() =>
            era.printAndWait([
              silence.get_colored_name(),
              '는 ',
              me.get_colored_name(),
              '의 지시를 따르는 게 그다지 내키지 않는 모양이다.',
            ]),
          ),
      );
      if (era.get('love:400') > 50) {
        buffer.push(() =>
          silence
            .say_and_wait(
              '네가 정 그렇게 하겠다면…… 알았어. 네 생각에 따라잡을 수 있도록 내 온 힘을 다할게.',
            )
            .then(() =>
              era.printAndWait([
                silence.get_colored_name(),
                '는 잠시 생각하더니 ',
                me.get_colored_name(),
                '의 요구를 승낙했다.',
              ]),
            ),
        );
      }
    } else {
      switch (era.get('cflag:400:컨디션')) {
        case -2:
          buffer.push(
            () =>
              silence.say_and_wait(
                '아…… 나 지금 온몸으로 짜증이 치밀어 오르니까, 할 말 있으면 빨리 해.',
              ),
            () =>
              silence.say_and_wait(
                '내가 듣기 좋은 소리만 골라서 하는 게 신상에 좋을 거야. 안 그러면 나도 모르게 주먹이 날아가 버릴지도 모르니까.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              silence.say_and_wait(
                '으음…… 방금 뭐라고 했어? 미안, 좀 의욕이 안 생겨서 그런데 다시 한번 말해 줄래?',
              ),
            () =>
              silence.say_and_wait([
                '콜록콜록, ',
                sys_get_colored_callname(400, 25),
                '가 준 커피를 너무 많이 마셨나 봐…… 목 상태가 좀 이상해.',
              ]),
          );
          break;
        case 0:
          buffer.push(
            () =>
              silence.say_and_wait(
                '지금은 머리가 꽤 맑은 편이니까, 예정된 계획이나 일정이 있다면 빨리 말해 봐.',
              ),
            () =>
              silence.say_and_wait(
                '또 이렇게 평범하기 짝이 없는 날이네. 이런 날이 좀 더 줄어들었으면 좋겠는데.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              silence.say_and_wait(
                '날씨 좋네, 마음에 들어. 그러니까 네 훈련도 내 기분을 이대로 유지해 줄 수 있으면 좋겠어.',
              ),
            () =>
              silence.say_and_wait(
                '이제 슬슬 훈련 시작 안 하면 나 넘치는 체력을 못 이겨서 울타리라도 차 부숴버릴 거야. 뭐, 배상? 당연히 네가 내야지!',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              silence.say_and_wait(
                '나 오늘 활력이 아주 넘쳐흐르거든. 트레이너로서 이런 좋은 기회를 낭비하진 않겠지?',
              ),
            () =>
              silence.say_and_wait(
                '오늘 훈련량은 두 배로 늘려도 돼. 내 컨디션은 네 생각보다 훨씬 좋으니까. 날 곱게 자란 애송이 취급하지 마. 이길 수만 있다면 훈련량이 얼마나 늘어나든 상관없으니까.',
              ),
          );
      }
    }
    return get_random_entry(buffer)();
  }

  async office_gift() {
    const silence = get_chara_talk(400);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        '나한테 주는 선물이야? ……고마워. 근데 이런 선물을 주다니, 나한테 잘 보이려고 아양이라도 떠는 거야?',
      );
      await era.printAndWait([
        '기대에 부풀어 있던 ',
        silence.get_colored_name(),
        '는 Ｓ◯ＧＡ 게임기인 것을 확인하자마자 눈에 띄게 귀를 축 늘어뜨렸다.',
      ]);
    } else {
      await silence.say_and_wait(
        '선물이구나. 난 다른 사람한테 이런 걸 받아본 적이 별로 없는데,',
      );
      await silence.say_and_wait(
        `그보다 왜 너에게 이걸 건네받으니 심장이 이렇게 거세게 뛰는 걸까?`,
      );
    }
  }

  async office_cook() {
    const silence = get_chara_talk(400);
    if (Math.random() < 0.5) {
      await silence.say_and_wait('요리를 배우겠다고? 가정실습 시간 때 나도 이것저것 배우긴 했지만,');
      await silence.say_and_wait(
        '그럼…… 잘 부탁해. 배우기로 한 이상 제대로 배워야지, 마치 훈련처럼 말이야.',
      );
      await era.printAndWait([silence.get_colored_name(), '는 자못 진지한 표정을 지었다.']);
    } else {
      await silence.say_and_wait(
        '사실 나 요리는 별로 소질 없어. 평소에 이런 활동을 접할 기회가 없었거든,',
      );
      await silence.say_and_wait(
        `하지만 ${sys_get_callname(400, 0)} 네가 제안한 거니까, 같이 실력을 키우며 열심히 배워 보자.`,
      );
    }
  }

  async office_study() {
    const silence = get_chara_talk(400);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `공부를 가르쳐 준다니…… 설마 내가 ${sys_get_callname(400, 0)}의 과제를 가르쳐 줘야 하는 거야?`,
      );
      await silence.say_and_wait(
        `농담이야. ${sys_get_callname(400, 0)}. 네가 내 공부를 도와준다니 정말 고마워.`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 기지개를 켜며 즐거운 표정을 지었다.',
      ]);
    } else {
      await silence.say_and_wait(
        '공부라니, 우리 집안엔 학업 성적이 안 좋은 사람이 거의 없는데 말이야,',
      );
      await silence.say_and_wait(
        `아, 맞다! 차라리 ${sys_get_callname(400, 0)} 네가 트레이너에 관한 지식을 내게 가르쳐 주는 건 어때?`,
      );
      await silence.say_and_wait(`어쩌면 언젠가 나 혼자서 날 스스로 훈련할 수 있게 될지도 모르잖아!`);
      await era.printAndWait([
        silence.get_colored_name(),
        '의 말에 ',
        get_chara_talk(0).get_colored_name(),
        '은(는) 실직당하는 비참한 미래를 순간 떠올렸다.',
      ]);
    }
  }

  async office_rest() {
    const silence = get_chara_talk(400);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `미안한데, 쉴 때 커튼은 안 치면 안 될까? 나…… 어두운 건 좀 무서워하거든.`,
      );
      await era.printAndWait([silence.get_colored_name(), '는 다소 부끄러워했다.']);
    } else {
      await silence.say_and_wait('……');
      await era.printAndWait([
        silence.get_colored_name(),
        '는 잠든 후에도 표정이 편안해 보이지 않았다. 마치 악몽이라도 꾸는 것처럼,',
      ]);
      await era.printAndWait([
        '하지만 ',
        get_chara_talk(0).get_colored_name(),
        '의 옷소매를 더듬어 찾아낸 순간, ',
        silence.sex,
        '는 옷소매를 꽉 붙잡았고 그제야 표정이 부드럽게 풀렸다.',
      ]);
    }
  }

  async office_prepare() {
    const silence = get_chara_talk(400);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `걱정할 필요 없어, ${sys_get_callname(400, 0)}…… 처음 네 팀에 들어갔을 때 말했던 것처럼, 넌 내가 승리를 네게 가져다주는 걸 그저 지켜봐 주기만 하면 돼. 나만 바라봐 줘!`,
      );
    } else {
      await silence.say_and_wait(
        `드디어 올 것이 왔네. 우리가 지금까지 쏟아부은 노력이 결실을 맺을 때가 되었어……`,
      );
      await silence.say_and_wait(
        `${sys_get_callname(400, 0)}, 날 똑똑히 지켜봐 줘. 처음 약속했던 것처럼, 날 선택한 너는 그에 걸맞은 영광을 거머쥐게 될 테니까.`,
      );
    }
  }

  async office_game() {
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `오락실에 있는 게임기보다 여기 게임이 훨씬 더 재밌네.`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 익숙하게 캐릭터를 조작했다. 담당 우마무스메로서 ',
        silence.sex,
        '와 ',
        me.get_colored_name(),
        '의 호흡은 그야말로 척척 맞았고, 이는 ',
        me.get_colored_name(),
        '을(를) 무척 기쁘게 했다.',
      ]);
    } else {
      await silence.say_and_wait([
        '흠, 한 번도 안 해본 게임이네…… 무려 ',
        sys_get_colored_callname(400, 67),
        '의 집안에서 출시한 게임이라니, 이건 한번 해볼 수밖에 없겠는걸.',
      ]);
      await era.printAndWait(
        `${silence.name}는 흥미진진한 표정으로 화면에 나타난 로고를 바라보며 컨트롤러를 쥐었다.`,
      );
    }
  }

  async school_atrium(hook) {
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    hook.arg = !(await select_action_in_atrium());
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await silence.say_and_wait(
          `사실 딱히 소리 내어 외칠 만한 건 없는데…… 에이, 몰라. 내가 레이스 우마무스메로서의 길을 더 멀리 나아갈 수 있도록 도와줘!!!`,
        );
        await era.printAndWait([
          silence.sex,
          '는 커다란 고목나무 구멍을 향해 소리치고는, 외침이 끝나자 조금 부끄러운 듯 ',
          me.get_colored_name(),
          '을(를) 쳐다보았다.',
        ]);
      } else {
        await silence.say_and_wait(
          `만약 세 여신님이 정말로 여기서 이런 소리들을 다 듣고 계신다면, 그분들도 꽤 귀찮아하시지 않을까?`,
        );
        await era.printAndWait([
          silence.get_colored_name(),
          '는 흥미롭다는 듯 고목나무 구멍을 바라보며, 정말로 그 가능성을 고민하는 것 같았다.',
        ]);
      }
    } else if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `학원 안에서 나보고 데이트를 하자고? ${sys_get_callname(400, 0)}?! 사제 간의 연애는 엄격히 금지되어 있단 말이야!!`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 영 내키지 않는 내색을 비췄지만, 결국 ',
        me.get_colored_name(),
        '의 손에 이끌려 함께 학원 도서관에서 「데이트」를 마쳤다.',
      ]);
    } else {
      await silence.say_and_wait('아…… 학원 안이라니…… 그럼 카페테리아에 가는 건 어때? 네가 사는 거야.');
      await era.printAndWait([
        '말은 그렇게 퉁명스럽게 했으면서도, ',
        silence.get_colored_name(),
        '는 결국 ',
        me.get_colored_name(),
        ' 대신 이번 식사 비용을 전부 지불했다.',
      ]);
    }
  }

  async school_rooftop() {
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      silence.get_colored_name(),
      '는 옥상에서 도시락을 먹기로 했다.',
    ]);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `나랑 반찬 좀 바꿔 먹을래? ${sys_get_callname(400, 0)} 네 도시락에 내가 아주 좋아하는 반찬이 들어 있어서 말이야.`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 큼직한 고기 한 조각을 당신의 도시락 통에 쏙 집어넣어 주며 향해 미소를 지었다.',
      ]);
    } else {
      await silence.say_and_wait(
        `${sys_get_callname(400, 0)}, 네 도시락은 직접 싸 온 거야? 부럽네,`,
      );
      await silence.say_and_wait(
        `집에서 싸 준 도시락은 양이 너무 많아서 매번 다 못 먹거든, 아깝게시리. 그러니까 같이 먹자. 음식을 낭비하는 건 큰 벌을 받을 짓이니까.`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 어마어마하게 커다랗고 호화로운 도시락 통을 꺼냈다,',
      ]);
      await era.printAndWait([
        '굳이 들여다보지 않아도 그 안에 가득 찬 다채롭고 맛있어 보이는 요리들이 ',
        me.get_colored_name(),
        '의 지갑 사정으로는 감당할 수 없는 수준이라는 걸 알 수 있었다,',
      ]);
      await era.printAndWait([
        '물론 평소에 ',
        silence.get_colored_name(),
        '가 이 거대한 도시락을 어떻게 다 처리해 왔는지는 굳이 캐묻지 않았다.',
      ]);
    }
  }

  async out_river(hook) {
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      const buffer = [];
      buffer.push(
        () =>
          silence
            .say_and_wait('강가 공기가 제법 시원하네. 다음 아침 조깅 코스는 여기로 정하는 거 어때?')
            .then(() =>
              era.printAndWait([
                silence.get_colored_name(),
                '는 강가에서 불어오는 바람을 느끼며 깊게 숨을 들이쉬었다.',
              ]),
            ),
        () =>
          era.printAndWait([
            silence.get_colored_name(),
            '는 말없이 강변을 걸으며, 이따금 뒤따라오는 ',
            me.get_colored_name(),
            '을(를) 힐끗 돌아보았다. 무언가 깊은 생각에 잠긴 듯한 기색이었다.',
          ]),
      );
      if (era.get('love:400') >= 75) {
        buffer.push(() =>
          era.printAndWait([
            silence.get_colored_name(),
            '는 슬며시 ',
            me.get_colored_name(),
            '에게 다가오더니, 조용하지만 완강한 손길로 ',
            me.get_colored_name(),
            '의 손을 맞잡아 깍지를 꼈다. 그리고 가느다란 손가락 끝으로 ',
            me.get_colored_name(),
            '의 손등에 살며시 무언가 낙서를 그렸다.',
          ]),
        );
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        silence.get_colored_name(),
        '와 약속을 잡고 낚시를 하러 가기로 했다……',
      ]);
      switch (get_random_value(0, 2)) {
        case 0:
          await silence.say_and_wait(
            `${sys_get_callname(400, 0)}, 정말로 물고기가 미끼를 물까? 저렇게 뻔히 보이는 함정에 속아 넘어갈 리가 없잖아.`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '가 잔잔한 수면에 번지는 파문을 바라보는 표정이 어딘가 조금 귀여웠다.',
          ]);
          await era.printAndWait(
            `${silence.sex}는 금세 표정을 다잡고 낚싯대에 온 정신을 집중하며, 물속에 있을 고기들과 본격적인 밀고 당기기를 시작했다.`,
          );
          break;
        case 1:
          await silence.say_and_wait(
            `흠흠, 제법 쏠쏠한 재미가 있는 활동이네. 그런데 ${sys_get_callname(400, 0)}, 네 양동이는 왜 텅 비어 있어? 내가 잡은 거라도 좀 나눠 줄까?`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 바늘에서 물고기를 빼내며 ',
            me.get_colored_name(),
            '을(를) 쳐다보았다. 눈빛에는 오직 순수한 배려만이 담겨 있었지만, ',
            me.get_colored_name(),
            '는 내심 마음 한구석에 미미한 내상을 입은 기분이었다.',
          ]);
          break;
        case 2:
          await era.printAndWait([
            silence.sex,
            '가 평화로운 강물이 유유히 흘러가는 모습을 고요히 응시하는 모습은, 평소의 저돌적이고 마이웨이 성향이 강한 레이스 ',
            silence.get_uma_sex_title(),
            '의 모습과는 도저히 매치되지 않았다,',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 평소와는 180도 다른 ',
            silence.sex,
            '의 자태를 가슴 깊이 아로새겼다.',
          ]);
      }
    }
  }

  async out_shopping(hook) {
    const me = get_chara_talk(0),
      silence = get_chara_talk(400),
      love = era.get('love:400'),
      buffer = [];
    let temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        buffer.push(
          () =>
            silence
              .say_and_wait(
                '이 게임 이름이 뭐라고? 저스트 댄스? 그럼 한 판 해보지 뭐. 꽤 재밌어 보이는데……',
              )
              .then(() =>
                era.printAndWait([
                  '결국 ',
                  silence.get_colored_name(),
                  '는 지독한 효율충 모드를 발동해 오락실 기기의 최고 기록을 갈아치워 버렸다.',
                ]),
              ),
          () =>
            silence
              .say_and_wait([
                sys_get_callname(400, 0),
                ', 너 나보다 반응 속도가 한참 느린 것 같은데? 받아라, 받아!',
              ])
              .then(() =>
                era.printAndWait([
                  '화면 속 캐릭터를 현란하게 조작하던 ',
                  silence.get_colored_name(),
                  '는 매끄러운 콤보 한 세트로 ',
                  me.get_colored_name(),
                  '의 캐릭터를 완전히 박살 냈다,',
                ]),
              )
              .then(() =>
                era.printAndWait([
                  '그러고는 ',
                  me.get_colored_name(),
                  '을(를) 향해 살짝 도발적인 미소를 지어 보였다. ',
                  silence.sex,
                  '가 정말 순수하게 즐거워하고 있음이 고스란히 전해졌다.',
                ]),
              ),
        );
        break;
      case 1:
        await era.printAndWait([
          silence.get_colored_name(),
          '와 함께 상점가에서 주최한 경품 추첨 행사에 참여했다……',
        ]);
        buffer.push(
          () =>
            silence
              .say_and_wait(
                '이런 건 그냥 가게 놈들이 돈 벌려고 벌이는 수작에 불과해. 매번 1등상이 펑펑 터지면 진작에 파산해서 문 닫았겠지.',
              )
              .then(() =>
                era.printAndWait([
                  silence.get_colored_name(),
                  '는 툴툴거리면서도, 자신의 손에 들린 참가상 인형을 가만히 내려다보았다.',
                ]),
              ),
          () =>
            silence
              .say_and_wait(
                '뽑기? 정 갖고 싶은 게 있다면 나한테 돈을 줘 봐. 내가 점원한테 가서 적당한 가격에 직거래로 사 올 테니까.',
              )
              .then(() =>
                era.printAndWait([
                  '말은 그렇게 퉁명스럽게 뱉으면서도, ',
                  silence.get_colored_name(),
                  '는 고분고분 버튼을 누른 채 조용히 결과가 나오기를 기다렸다.',
                ]),
              ),
        );
        break;
      case 2:
        buffer.push(
          () =>
            silence
              .say_and_wait(
                '혼자 여기 와서 노래 부르는 건 좀 처량하지만, 네가 같이 있어 주니까 훨씬 살만하네.',
              )
              .then(() =>
                era.printAndWait([
                  silence.get_colored_name(),
                  '는 마이크를 쥐고 나직하게 노래를 부르기 시작했다.',
                ]),
              ),
          () =>
            silence
              .say_and_wait(
                `음, 노래방 책자에 있는 곡들이 죄다 생전 처음 보는 것뿐이네. 차라리 ${sys_get_callname(400, 0)}이 한 곡 멋지게 뽑아 주는 건 어때?`,
              )
              .then(() =>
                silence.say_and_wait(
                  `푸하하핫, 농담이야! 명색이 레이스 ${silence.get_uma_sex_title()} 아이돌인데, 설마 내가 노래를 못 부르겠어?`,
                ),
              ),
        );
        if (love >= 75) {
          buffer.push(() =>
            silence
              .say_and_wait(
                '빨리 나랑 같이 불러!! 바로 이 곡이야!! 전부터 누가 나랑 듀엣으로 불러 주기만을 바랐단 말이야!',
              )
              .then(() =>
                era.printAndWait([
                  silence.get_colored_name(),
                  '는 마이크를 ',
                  me.get_colored_name(),
                  '의 손에 억지로 쥐여주었다. 화면에는 남녀가 주고받으며 부르는 달콤한 사랑 노래가 흘러나왔고, 뮤직비디오 결말부에는 남녀 주인공이 결혼식장에 입장해 영원히 행복하게 살았다는 스토리가 그려지고 있었다.',
                ]),
              ),
          );
        }
        break;
      case 3:
        buffer.push(
          () =>
            silence
              .say_and_wait([
                '공포 영화라고? ',
                sys_get_callname(400, 0),
                ', 설마 내가 저런 귀신이나 유령 따위를 무서워할 거라고 생각한 거야?',
              ])
              .then(() =>
                era.printAndWait([
                  silence.get_colored_name(),
                  '는 자신만만한 미소를 지으며 손에 쥔 영화표를 내려다보았다.',
                ]),
              )
              .then(() =>
                era.printAndWait([
                  '과연 ',
                  silence.sex,
                  '의 말대로였다. 꽤 살벌한 공포 영화가 상영되는 내내 미동조차 없이 평온하게 몰입했고, 상영관을 나설 때 즈음에는 자연스럽게 ',
                  silence.sex,
                  '의 팔을 ',
                  me.get_colored_name(),
                  '의 팔에 살포시 감아 쥐었다.',
                ]),
              )
              .then(() =>
                era.printAndWait([
                  '이딴 허술한 연출은 내가 ',
                  sys_get_colored_callname(400, 25),
                  ' 쪽에서 겪었던 일들에 비하면 지나치게 과장되고 가짜 티가 팍팍 난단 말이지…… 쉿, 더 묻지 마. 방금 내가 한 말은 전부 머릿속에서 포맷해 줘.',
                ]),
              ),
          () =>
            silence
              .say_and_wait(
                `이 영화는…… 아, 꽤 흥미진진해 보이네. ${sys_get_callname(400, 0)} 네가 담당의 취향을 이렇게까지 잘 꿰고 있다면, 나도 모른 척 넘어가 줄 순 없지.`,
              )
              .then(() =>
                era.printAndWait([
                  silence.get_colored_name(),
                  '는 영화표를 건네받았고, ',
                  me.get_couple_title(),
                  '은 함께 간만에 잘 만들어진 고전 SF 영화를 관람했다.',
                ]),
              ),
        );
    }
    await get_random_entry(buffer)();
  }

  async out_church() {
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    await era.printAndWait([
      silence.get_colored_name(),
      '와 ',
      me.get_colored_name(),
      '은(는) 함께 신사로 소원을 빌러 향했다.',
    ]);
    await silence.say_and_wait(`이런 미신 같은 짓이…… 정말 효과가 있긴 한 거야?`);
    await era.printAndWait([
      silence.get_colored_name(),
      '는 반신반의하면서도 손을 씻고 참배를 마친 뒤, 의구심 섞인 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 바라보며 질문을 던졌다.',
    ]);
    await me.say_and_wait(
      '너의 노력과 나의 노력이야말로 성적을 내기 위한 가장 탄탄한 기반이지. 하지만 때로는 그것만으론 부족하고 아주 약간의 운도 따라주어야 하지 않겠어? 그냥 마음의 위안 삼아 가볍게 생각하자.',
    );
    await silence.say_and_wait(
      `그렇단 말이지…… 그럼 나도 눈치 안 보고 대담하게 소원을 빌어 보겠어. 내 금쪽같은 새전을 낼름 삼킨 이상, 신인지 뭔지 하는 녀석들도 밥값은 해야 할 테니까!`,
    );
    await era.printAndWait([
      '새전함에 동전이 떨어지는 기분 좋은 소리가 ',
      silence.get_colored_name(),
      '의 당찬 목소리와 함께 울려 퍼졌다. 아무래도 ',
      me.get_colored_name(),
      '의 말을 믿어보기로 결정한 듯싶었다.',
    ]);
    if (Math.random() < 0.5) {
      await silence.say_and_wait(
        `어라, 진짜로 무슨 반응이 오는데?! ${sys_get_callname(400, 0)}, 장난 아니게 신기한 일이네.`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 조금 놀란 눈치로 ',
        silence.sex,
        '의 귀걸이를 만지작거렸다.',
      ]);
      await silence.say_and_wait(
        `하지만 신령마저 내 소원에 응답해 준 이상…… 훈련을 게을리할 핑계가 완전히 사라져 버렸네. 우리 당장 훈련장으로 복귀해서 뛰자!`,
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 신이 나서 ',
        me.get_colored_name(),
        '의 소매를 잡아끌며 트랙으로 돌아갈 채비를 서둘렀다.',
      ]);
    } else {
      await silence.say_and_wait(
        `칫…… 사람들이 용하다고 떠들어대던 신이라는 존재도 결국 별거 없는 무능한 껍데기였나 보네……`,
      );
      await silence.say_and_wait(
        `${sys_get_callname(400, 0)}, 그냥 예정보다 일찍 가자. 저 무책임한 신령이 내 목소리를 씹겠다면야,`,
      );
      await silence.say_and_wait(
        `그 도움 따위 한 톨도 받지 않고서 우리 스스로 보란 듯이 해내는 모습을 똑똑히 지켜보게 만들면 그만이니까.`,
      );
      await era.printAndWait([
        '그렇게 쏘아붙이며 ',
        silence.get_colored_name(),
        '는 신경질적으로 꼬리를 휙휙 흔들었다. 말로는 덤덤한 척해도 ',
        silence.sex,
        '의 안색은 꽤나 가라앉아 어두운 기색이 완연했다.',
      ]);
      await era.printAndWait([
        '기분 탓인지 ',
        me.get_colored_name(),
        '마저 은근히 가슴 한편이 답답하고 조바심이 나기 시작했고, 두 사람은 그렇게 쫓기듯 신사를 빠져나왔다.',
      ]);
    }
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(400);
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await silence.say_and_wait(
            `커피 주문할 거야? 그럼 내 거엔 설탕이랑 우유 듬뿍 넣어 줘. 커피는 자고로 달달해야 제맛이니까.`,
          );
        } else {
          await silence.say_and_wait(
            `이거 한번 먹어 볼래? 뭐, 나 아직 미성년자라 술 마시면 안 된다고? 걱정 붙들어 매, 제조 과정에서 술 향만 살짝 가미된 조리용일 뿐이니까 아무 문제 없어.`,
          );
        }
        break;
      case 1:
        if (Math.random() < 0.5) {
          await silence.say_and_wait(
            `데이트? 나랑? ${sys_get_callname(400, 0)}, 진심이야? 그럴 바엔 그냥 트랙에서 만나서 빡세게 훈련하는 걸로 데이트를 대신하는 게 어때?`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 황당하다는 표정으로 귀를 만지작거렸다. 방금 들은 제안이 환청이 아닌지 확인하려는 듯했다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            me.get_colored_name(),
            '의 흔들림 없는 올곧은 눈빛을 마주하자, ',
            silence.sex,
            '는 어쩔 수 없다는 듯 곤란해하며 한숨을 푹 내쉬었다.',
          ]);
          await silence.say_and_wait(
            `하아, 알았어, 알았다고…… 속는 셈 치고 가 주겠는데, 나처럼 칙칙하고 재미없는 ${silence.get_uma_sex_title()}랑 다녀봤자 하나도 즐겁지 않을걸.`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 입으로는 연신 핑계를 대며 빼고 있었지만, ',
            silence.sex,
            '의 눈동자 깊은 곳에 서린 은근한 기대감을 단박에 읽어낼 수 있었다.',
          ]);
          era.printButton(
            `너랑 같이 놀러 가고 싶어. 네가 곁에 있어 주기만 해도 무조건 재밌을 테니까.`,
            1,
          );
          await era.input();
          await silence.say_and_wait(
            `무, 무슨 소릴 지껄이는 거야!!! 대낮부터 그런 부끄러운 대사를…… 너 혹시 순진한 ${silence.get_uma_sex_title()}들만 골라 등쳐먹는 바람둥이 아니야?!`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 터질 듯이 새빨개진 얼굴을 푁 돌리며 시선을 마주하지 못했으나, 그러면서도 ',
            me.get_colored_name(),
            '이(가) 슬며시 내민 손을 거절하지 않고 꽉 붙잡았다.',
          ]);
          await era.printAndWait(`이후 두 사람은 아주 만족스러울 때까지 진탕 놀았다.`);
        } else {
          await silence.say_and_wait(
            `데이트 제안? 이거 혹시 술게임 같은 데서 져서 억지로 수행하는 벌칙 게임 같은 거 아니야?`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 의심 가득한 눈초리로 ',
            me.get_colored_name(),
            '을(를) 쏘아보더니, 이내 단념한 듯 한숨을 쉬었다.',
          ]);
          await silence.say_and_wait(
            `뭐가 어찌 됐든, 우리에겐 레이스와 훈련이 최우선이잖아. 그리고 나처럼 음침한 구석이 있는 레이스 ${silence.get_uma_sex_title()}랑 밖을 싸돌아다녀 봐야 지루해서 하품만 나올걸.`,
          );
          await era.printAndWait([
            '말은 그렇게 내뱉으면서도, ',
            silence.get_colored_name(),
            '는 힐끔힐끔 눈치를 보며 ',
            me.get_colored_name(),
            '을(를) 훔쳐보았다. 과연 ',
            me.get_colored_name(),
            '이(가) 정말 진심으로 데이트를 신청한 것인지 떠보려는 심산 같았다.',
          ]);
          await silence.say_and_wait(
            `으음…… 정말로 장난이 아니라 진심이란 말이지? 알았어…… 그럼 지체 말고 출발하자. 길은 내가 안내할 테니까.`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 조금의 동요도 없이 굳건한 ',
            me.get_colored_name(),
            '의 표정에서 진심을 온전히 느낀 듯했다,',
          ]);
          await era.printAndWait(`얼굴에는 여전히 귀찮아 죽겠다는 기색이 역력했지만,`);
          await era.printAndWait([
            '정작 ',
            silence.sex,
            '가 ',
            me.get_colored_name(),
            '의 손을 와락 부여잡을 때 손가락 끝에서 전해지는 들뜬 생동감은 ',
            me.get_colored_name(),
            '에게 숨김없이 고스란히 들통나 버렸다. 그렇게 ',
            silence.sex,
            '는 신이 난 발걸음으로 ',
            me.get_colored_name(),
            '을(를) 서점으로 이끌어 함께 책을 읽었다.',
          ]);
        }
        break;
      case 2:
        if (Math.random() < 0.5) {
          await silence.say_and_wait(
            `여기 기성복 매장에 있는 옷들은 내 체형이나 취향에 통 안 맞아서 말이야. 난 보통 단골 테일러 숍에 가서 맞춤 정장으로 맞추거든. ${sys_get_callname(400, 0)}, 너도 이번 기회에 한 벌 맞춰 볼래? 비용은 전부 내 장부에 달아둘 테니까.`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 생긋 웃어 보였다. 영 장난기가 가득해 보여 이것이 진심 어린 제안인지는 영 분간하기 어려웠다.',
          ]);
        } else {
          await silence.say_and_wait(
            `앗, 여기에 마침 신상 장비가 들어왔잖아! ${sys_get_callname(400, 0)}, 이쪽으로 빨리 와 봐. 슬슬 우리 편자도 새로 갈 때가 됐다고 생각하던 참인데, 신형 모래주머니랑 트레이닝복 세트도 있네!`,
          );
          await era.printAndWait([
            silence.get_colored_name(),
            '는 눈을 반짝이며 스포츠 전문점 진열대에 놓인 도구들을 흥미진진하게 살폈다.',
          ]);
        }
    }
  }
};