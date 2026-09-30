/**
 * @file 골드 쉽 - 애정
 * @author 雞雞
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const { buff_colors } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const yandere_list = require('#/data/event/yandere-list');

module.exports = class extends CustomizedLove {
  async 49(gold_ship, me, callname) {
    await print_event_name(
      [{ color: chara_colors[1], content: '감성과 이성' }],
      gold_ship,
    );
    await gold_ship.print_and_wait(
      `악연의 시작은 ${gold_ship.name}의 그 선발 레이스에 있었다. 바로 그 레이스 이후, ${gold_ship.sex}와 ${callname}은 계약을 맺고 대회에 정식 출주할 수 있는 우마무스메가 되었다.`,
    );
    era.println();
    await gold_ship.say_and_wait(
      '도대체 내가 왜 그 녀석을 마음에 들어 했는지 지금 와서 보니 도저히 이해할 수 없구만.',
    );
    era.println();
    await gold_ship.print_and_wait(
      `${gold_ship.name}은 석양 아래 놀이공원 미끄럼틀 위에 서서 깊은 생각에 잠겨 있었다. ${gold_ship.sex}는 턱을 난간에 기대고 은빛 머리카락이 폭포처럼 흘러내리도록 내버려 두었다. 곁에서 뛰어노는 아이들이 시야 안팎을 오가게 내버려 두면서도, 마음은 여전히 그 자리에 없는 누군가에게만 쏠려 있었다.`,
    );
    era.println();
    await gold_ship.print_and_wait([
      `처음부터 ${gold_ship.sex}는 자신의 행동을 도무지 이해할 수 없었다. 일반적인 우마무스메와 트레이너 사이에서는 트레이너 측이 먼저 우마무스메를 모집한다. 하지만 ${callname}과 계약한 일은 모집당했다고 하기보다는, `,
      {
        content: `오히려 ${gold_ship.name}이 억지로 강매한 것이라고 할 수 있었다.`,
        color: chara_colors[1],
      },
    ]);
    era.println();
    await gold_ship.print_and_wait(
      `${gold_ship.name}은 레이스에 출주하려면 트레이너와 계약을 맺어야 한다. 그렇다.`,
    );
    era.println();
    await gold_ship.print_and_wait(`${me.actual_name}은(는) 트레이너다. 그렇다.`);
    era.println();
    if (era.get('flag:현재명성') < 1000) {
      await gold_ship.print_and_wait(
        `${me.actual_name}은(는) ${gold_ship.name}이 자신만의 에덴을 찾도록 도울 수 있을지도 모른다.`,
      );
    } else {
      await gold_ship.print_and_wait(
        `${me.actual_name}은(는) 실력이 뛰어나니 ${gold_ship.name}이 자신만의 에덴을 찾도록 도울 수 있을지도 모른다.`,
      );
    }
    era.println();
    if (era.get('exp:7:성관계횟수') > 0) {
      await gold_ship.print_and_wait(
        `이제 와서 이미 늦은 분석 같지만 ${me.actual_name}은(는) 침대에서 자신의 뜨거워진 몸을 달래줄 수 있는 사람이 맞다.`,
      );
      era.println();
    }
    await gold_ship.print_and_wait(
      '하지만——젠장, 그렇다고 해서 내 이 황금의 여정에 꼭 그 녀석이 있어야만 하는 건 아니잖아!',
    );
    era.println();
    await gold_ship.print_and_wait(
      '중앙 트레센은 정말 훌륭해. 우마무스메든 트레이너든 훌륭한 선택지가 너무 많아! 무사카 겐지로 트레이너(아마 너무 나이 들었을지도), 나세 후미노 트레이너(아마 너무 엄격할지도), 그리고 키류인 아오이 트레이너(아마 너무 어릴지도), 모두 한때 내 마음속 에덴으로 가는 길의 동반자 후보였어.',
    );
    era.println();
    await gold_ship.print_and_wait([
      '하지만——나는 하필 그 녀석을 보고 ',
      {
        content: '0.0000001초 만에, 두 다리에 명령을 내렸다.',
        color: chara_colors[1],
      },
    ]);

    era.printButton('「이것이 황금별의 계시인가……」(관계 진전)', 1);
    era.printButton('「도대체 내가 뭘 하고 있는 거지……」(관계 진전 중지)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await gold_ship.print_and_wait(
        `이 변명은 ${gold_ship.name} 자신조차 속이지 못했다. ${gold_ship.sex}는 두 눈을 감았지만, 마음에 새겨진 그 사람의 모습은 지워지지 않았다. ${gold_ship.sex}는 그 사람을 보지 않으려 고개를 세차게 저었지만, 머릿속은 그 사람에 대한 생각으로 가득 찼다.`,
      );
    } else {
      await gold_ship.print_and_wait(
        `${gold_ship.sex}는 눈을 감았지만, 마음속에 새겨진 그 사람의 모습은 지워지지 않았다. ${gold_ship.sex}는 그 사람을 보지 않으려고 고개를 세차게 저었지만, 머릿속은 그 사람에 대한 생각을 강제로 떠올리게 했다.`,
      );
    }
    era.println();
    await gold_ship.print_and_wait(
      `지금 이 순간, ${gold_ship.name}의 한쪽은 스스로를 설득하고 있다. 어쩌면 이 세상에 정말 첫눈에 반하는 사랑이 존재할지도 모르고, 고루시짱과 트레짱은 사랑의 화살에 정통으로 맞은 천생연분일지도 모른다.`,
    );
    era.println();
    await gold_ship.print_and_wait(
      `나머지 반의 ${gold_ship.name}은 반론을 펼치고 있다. 어쩌면 이 모든 건 고루시짱과 트레짱의 관계가 좋다는 증거일 뿐, 아무것도 증명할 수 없을지도 모른다.`,
    );
    era.println();
    if (ret === 1) {
      await gold_ship.print_and_wait(
        `드디어, 감성적인 ${gold_ship.name}이 이성을 이겼다. ${gold_ship.name}의 눈빛이 망설임에서 단호함으로 바뀌었고, 그녀는 몸을 일으켜 트레센을 바라보았다.`,
      );
      era.println();
      await gold_ship.say_and_wait('아니, 이건 첫눈에 반한 거야.');
      era.println();
      await sys_love_uma_in_event(7);
    } else {
      await gold_ship.print_and_wait(
        `드디어, 이성적인 ${gold_ship.name}이 우위를 점했다. 하지만 그 억누를 수 없는 생각은 여전히 먹구름이 드리운 그림자처럼 머리 위를 맴돌고 있다. ${gold_ship.name}조차 쉽게 떨쳐낼 수 없는 이 괴로움은, 도대체 언제까지 계속될 것인가?`,
      );
      era.set('cflag:7:호감거절', 49);
    }
  }

  async 74(gold_ship, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name(
        [{ color: chara_colors[1], content: '전술적 결정' }],
        gold_ship,
      );
      await gold_ship.print_and_wait(
        `어느 날 밤, ${gold_ship.name}은 코와 윗입술로 연필 하나를 물고 폭신폭신한 기숙사 침대에 반쯤 누워 있었다. ${gold_ship.sex}는 두 다리와 강력한 허리 힘으로 몸통을 공중에 띄웠지만, 머리는 여전히 매트리스에 밀착되어 있었다. 연필 속 나무 판자와 페인트가 섞인 향기는 ${gold_ship.sex}의 사고 속도를 방해하지 않았다. 지금 이 순간, 세상의 모든 사물이 ${gold_ship.name}의 마음속에서 빠르게 분석되고, 분해되며, 재구성되고 있었다.`,
      );
      era.println();
      await era.printAndWait('상온 초전도체는 과연 가능할까? 아니다.', {
        color: chara_colors[1],
      });
      era.println();
      await era.printAndWait('공룡은 과연 거대한 닭일까? 그렇다.', {
        color: chara_colors[1],
      });
      era.println();
      await era.printAndWait('펩시일까 코카콜라일까? 진짜는 끓인 물이다.', {
        color: chara_colors[1],
      });
      era.println();
      await gold_ship.print_and_wait('……');
      era.println();
      await gold_ship.print_and_wait(
        `${gold_ship.name}은 ${callname}을 정말 좋아할까? 좋아한다.`,
      );
      era.println();
      await gold_ship.print_and_wait(
        `${gold_ship.name}이 다리에 힘을 주며 공중으로 솟구쳐 올랐고 머리와 양손 세 지점으로 침대를 지탱하며 물구나무서기 자세를 취했다! ${gold_ship.name}의 피는 지금 이 순간 ${gold_ship.sex}의 뇌로 끊임없이 공급되어 전략을 세우는 데 필요한 에너지를 공급하고 있다——이미 자신의 마음을 확고히 했으니, 이제 남은 일은 단 하나뿐이다……!`,
      );
      era.println();

      era.printButton('「계획을 세우고, 공격을 시작하자!」(관계 진전)', 1);
      era.printButton('「신중하게, 미래를 내다보며 계획하자!」(관계 진전 중지)', 2);
      const ret = await era.input();
      if (ret === 1) {
        add_event(event_hooks.week_start, event_object);
      } else {
        era.set('cflag:7:호감거절', 74);
      }
    } else if (stage === event_hooks.week_start) {
      if (
        era.get(`cflag:${this.id}:위치`) !== era.get('cflag:0:위치') ||
        era.get('cflag:0:위치') > 0
      ) {
        add_event(stage, event_object);
        return;
      }
      await print_event_name(
        [{ color: chara_colors[1], content: '골드 쉽, 미인의 유혹을 이겨내다' }],
        gold_ship,
      );
      await gold_ship.say_and_wait(
        '골드 쉽은 웅장한 포부와 천하를 삼킬 기세를 지녔으니, 전 세계 인류와 우마무스메들이 아무리 방비한다 해도, 언젠가 황금 화산이 분출하기만 한다면! 모두 최소 120억 우마코인의 재산 손실을 감수할 각오를 해야 한다.',
      );
      era.println();
      await gold_ship.say_and_wait('하지만 골드쉽처럼 영웅이라 해도 미인의 유혹을 이겨내기는...');
      era.println();
      await gold_ship.say_and_wait(
        '지금 골드 쉽은 트레이너 책상 한쪽 구석에 앉아 중얼거리고 있다. 마치 제3자의 시점에서 이 장면을 묘사하는 듯하다.',
      );
      era.println();

      era.printButton(
        '「……설마 스스로 내레이션을 하고 있는 건 아니겠지? 게다가 대사까지 성우처럼 연기해야 한다고?」',
        1,
      );
      await era.input();

      await gold_ship.say_and_wait(
        `${callname}, 정말 분위기 파악 못하네. 좀 더 몰입해 줄 수 없어? 연기 좀 해 봐! 골드 쉽이 약간 화가 난 듯 소리치며, 주먹을 들어 트레이너를 가볍게 톡톡 쳤다. 피해 주사위를 굴려라.`,
      );
      era.println();

      era.printButton(
        '「아니, 갑자기 TRPG 모드로 돌입한 건 너잖아! 난 지금 진지하게 일하고 있다고.」',
        1,
      );
      await era.input();

      await gold_ship.say_and_wait(
        '우우우, 일과 귀여운 담당 우마무스메와 노는 것 중 어느 쪽이 더 중요해~!',
      );
      era.println();
      await era.printAndWait(
        `${gold_ship.name}이 ${me.name}의 의자를 계속 흔들어대서 도저히 일에 집중할 수 없게 되었다. ${me.name}은(는) 어쩔 수 없이 자리에서 일어나 ${gold_ship.name}이 또 무슨 장난을 치려는지 확인하러 갔다.`,
      );
      era.println();
      await era.printAndWait(
        `${gold_ship.name}이 킥킥 웃으며 ${me.name}을(를) 소파 위로 눕혔다.`,
      );
      await quick_into_sex(7, 7, true);
      era.drawLine();
      await era.printAndWait(
        `이 격렬한 우마뾰이 놀이는 틀림없이 시원하고 짜릿한 경험이었다. 원래 상쾌했던 트레이닝실은 이제 정액과 애액의 역한 냄새로 가득 차 있었다. ${me.name}은(는) 숨을 헐떡이며 ${gold_ship.name}의 품에 안겼다. ${gold_ship.sex}가 끊임없이 뿜어내는 페로몬을 들이마시며, 머릿속에서는 방금 무슨 일이 일어났는지 계속 생각하고 있었다.`,
      );
      era.println();
      await gold_ship.say_and_wait(
        `어때, ${callname}…… 최강 미소녀 고루시의 촉촉한 보지는 기분 좋았어?`,
      );
      era.println();
      await era.printAndWait(
        `${gold_ship.name}은 얼굴에 홍조를 띠며 ${me.name}에게 득의양양하게 웃으며 말했다.`,
      );
      era.println();

      era.printButton('「도대체 언제부터 이렇게 음란해진 거야……」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '다 네 탓이잖아…… 후후후. 매일 이 고루시 앞에서 창녀처럼 쇄골도 드러내고 엉덩이도 흔들고, 난 항상 참아왔어!',
      );
      era.println();

      era.printButton('「변태……강간범……」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '네가 뭐라고 하든, 우린 이미 베프사이잖아!',
      );
      era.println();
      await era.printAndWait(
        `${gold_ship.name}이 팔로 ${me.name}의 목을 감싸고 강제로 자신의 가슴에 끌어당기자, 소녀의 체취에 저절로 마음이 흔들린다.`,
      );
      era.println();
      await era.printAndWait(`오랜 침묵 끝에, ${gold_ship.sex}가 입을 열었다.`);
      era.println();
      await gold_ship.say_and_wait('그러니까...내가 책임질게. 그...');
      await gold_ship.say_and_wait(`${callname}，나랑..나랑 사귀어 줘!`);
      era.println();

      era.printButton('「응, 좋아.」（관계 진전）', 1);
      era.printButton('「이건 좀……」（관계 진전 중지）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${gold_ship.name}은 ${me.name}보다 더 놀란 표정을 지었다.`,
        );
        era.println();
        await gold_ship.say_and_wait('정말이야? 난 네가 절대 안 받아줄 줄 알았는데!');
        await gold_ship.say_and_wait('……그래서 차라리 일을 벌여버리는 작전을 택한 거야.');
        era.println();

        era.printButton('고루시짱 엄청 급해 보이네 (웃음) 날 그렇게 못 믿겠어?', 1);
        await era.input();

        await gold_ship.say_and_wait('이런 일에 누가 안 조급해하겠어! 게다가 왜 비웃는 건데!');
        await gold_ship.say_and_wait('어쨌든…… 애초에 성공할 거라고 생각하지도 않았는데……');
        await gold_ship.say_and_wait(
          '난 평소에도 골치 아프고, 엉뚱하고, 또 골치 아프고…… 항상 날 제어하지 못하고, 자꾸만 널 휘말리게 해……',
        );
        era.println();
        await era.printAndWait(
          `${gold_ship.sex}은 말을 하다가 침묵했고, ${me.name}은(는) ${gold_ship.sex}의 거친 숨소리에서 ${gold_ship.sex}가 울음을 참으려 애쓰고 있음을 알아차렸다. `,
        );
        era.println();
        await me.say_and_wait(
          '나는 트레이너야. 우마무스메를 이끌고, 아끼고, 책임지는 것이 나의 사명이지. 그리고 넌 내 담당 우마무스메야. 이 사실은 영원히 변하지 않을 거야.',
        );
        await me.say_and_wait(
          '현실이나 사회에는 여전히 수많은 문제가 있겠지만, 어쩌면 내 머릿속은 이미 너 때문에 엉망진창이 되어버렸을지도 몰라.',
        );
        await me.say_and_wait('지금의 나는 그저 너와 함께 계속 미쳐가고 싶을 뿐이야.');
        await me.say_and_wait('그러니 마음의 준비를 단단히 해둬——');
        era.printButton('「자기야♡」', 1);
        era.printButton('「강간마♡」', 2);
        const ret = await era.input();
        await era.printAndWait(
          `${me.name}과(와) ${gold_ship.name}이 서로를 꼭 껴안고 있다. 지금 이 침대 위에는 ${gold_ship.sex}의 가느다란 흐느낌과, 갓 탄생한 한 쌍의 연인이 함께하고 있다.`,
        );
        era.println();
        if (ret === 1) {
          add_jewel_reward(7, '순종', 100);
        } else {
          add_jewel_reward(7, '가학쾌감', 100);
        }
        await sys_love_uma_in_event(7);
        era.set('flag:현재상호작용캐릭터', 7);
        add_event(
          event_hooks.back_school,
          event_object.set_arg('golden_ship_attack'),
        );
      } else {
        await era.printAndWait(
          `${gold_ship.name}은 ${me.name}이(가) 상상했던 것처럼 떼를 쓰거나 바닥을 구르지 않고, 쓸쓸하게 몸을 일으켰다. 가슴의 두 유방이 축 늘어져 있었다. ${gold_ship.sex}는 무언가를 말하려는 듯 입을 열었지만, 결국 이 사이로 새어 나온 말은 다음과 같았다: `,
        );
        era.println();
        await gold_ship.say_and_wait('응. 알겠어. 미안.');
        era.println();
        await era.printAndWait(
          `${gold_ship.sex}은 침대에서 조용히 일어나, 바닥에 떨어진 옷을 다시 입었다.`,
        );
        era.println();

        era.printButton('「저기, 고루시?」', 1);
        await era.input();

        await era.printAndWait(
          `${me.name}은(는) 아무런 대답도 듣지 못했다. 골드 쉽은 당신에게 고개를 숙여 인사한 뒤, 문을 닫고 떠났다.`,
        );
        era.println();

        era.set('cflag:7:호감거절', 74);
        await punish_rejecting_love(7);
      }
    }
  }

  /**
   * @param {CharaTalk} gold_ship
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async golden_ship_attack(gold_ship, me, callname) {
    await print_event_name(
      [
        {
          color: chara_colors[1],
          content: '기습! 골드 쉽의 초잔혹 양자택일 시험! ~살아남을 수 있을까?~',
        },
      ],
      gold_ship,
    );
    await era.printAndWait(
      `트레이닝실 스피커에서 흘러나오는 유쾌한 예능 프로그램 효과음과 함께, ${gold_ship.name}이 갑자기 ${me.name}을(를) 소파로 초대했다.`,
    );
    await era.printAndWait(`${gold_ship.sex}는 민첩하게 펜을 들어 화이트보드에 적었다:`);
    era.println();

    await era.printAndWait(`기습! ${gold_ship.name}의 `, { align: 'center' });
    await era.printAndWait('초잔혹 양자택일 시험! ', { align: 'center' });
    await era.printAndWait('~살아남을 수 있을까?~', { align: 'center' });
    era.println();

    await era.printAndWait(
      `갑작스럽긴 하지만, ${gold_ship.name}이 ${me.name}에게 심리 테스트를 해보려 하는 것 같다.`,
    );
    await era.printAndWait(
      `갑작스러운 일이라 ${me.name}은(는) 거절할 권리도 없는 것 같다! 용기를 내서 갑작스럽게 받아들일 수밖에 없다.`,
    );

    era.printButton('「이게 뭔데?!」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      `자, 이제 문제를 적을게요~ ${callname} 님은 화이트보드를 봐 주세요~`,
    );
    await gold_ship.say_and_wait(
      '첫 번째 문제는 정말 고전적인 문제예요! 누구나 한 번쯤은 들어본 문제죠!',
    );
    await gold_ship.say_and_wait(
      '【초콜릿 맛 ◯◯】과 【◯◯ 맛 초콜릿】 중 무엇을 선택하시겠어요?',
    );

    let ret = [];
    era.printButton('「초콜릿 맛 ◯◯……」', 1);
    era.printButton('「◯◯ 맛 초콜릿……」', 2);
    ret.push(await era.input());
    era.println();

    await gold_ship.say_and_wait(
      '문제 출제자인 나조차도 【다른 걸 먹을 거야】! 다음 문제!',
    );
    await gold_ship.say_and_wait('두 번째 문제! 보시죠!');
    await gold_ship.say_and_wait(
      '【우마뾰이 영상을 가족에게 실수로 보내는 것】과 【우마뾰이 영상을 담당 우마무스메에게 실수로 보내는 것】 중 무엇을 선택하시겠습니까?',
    );

    era.printButton('「우마뾰이 영상을 가족에게 실수로 보내는 것……」', 1);
    era.printButton('「우마뾰이 영상을 담당 우마무스메에게 실수로 보내는 것……」', 2);
    ret.push(await era.input());
    era.println();

    await gold_ship.say_and_wait('남에게 들키고 싶지 않다면 【안 하면 된다】! 다음 문제!');
    await gold_ship.say_and_wait('세 번째 문제는 좀 까다로워질 거예요!');
    await gold_ship.say_and_wait(
      '여자친구와 술을 마실 때, 그녀가 제3자를 불러 함께 마시고 싶어 한다!',
    );
    await gold_ship.say_and_wait(
      '당신은 【전 여자친구】를 부를 것인가, 아니면 【그녀의 전 남자친구】를 부를 것인가?',
    );

    era.printButton('「전 여자친구……」', 1);
    era.printButton('「그녀의 전 남자친구……」', 2);
    ret.push(await era.input());
    era.println();

    await gold_ship.say_and_wait('왠지 【좀 찝찝한】기분이 드네! 다음 문제!');
    await gold_ship.say_and_wait('네 번째 문제! 많은 사람들이 할 법한 일 같네요!');
    await gold_ship.say_and_wait('당신은 우마무스메 팀의 트레이너입니다!');
    await gold_ship.say_and_wait(
      '【언제든 팀원 우마무스메랑 우마뾰이 하고싶다】와 【언제든 팀원 우마무스메들이 당신과 우마뾰이 하고싶어 한다】 중 무엇을 선택하시겠습니까?',
    );

    era.printButton('「언제든 팀원 우마무스메랑 우마뾰이 하기……」', 1);
    era.printButton('「언제든 팀원 우마무스메들이 나랑 우마뾰이 하고싶어 하기……」', 2);
    ret.push(await era.input());
    era.println();

    await gold_ship.say_and_wait(
      '당신은 정말 개변태네요~ 하지만 가끔은【인내심을 좀 더 가지는】게 좋을지도 몰라요?',
    );
    await gold_ship.say_and_wait('다섯 번째 문제! 생사가 달린 사건이 발생했습니다!');
    await gold_ship.say_and_wait(
      '오, 안 돼! 당신, 당신의 여자친구, 당신의 친구 세 명이 납치당했습니다! 납치범은 아주 기괴하게도 그 중 한 명을 죽여야만 당신과 남은 한 명의 목숨을 구할 수 있다고 요구하고 있습니다!',
    );
    await gold_ship.say_and_wait(
      '【생사를 함께한 절친한 친구】를 죽일 것인가, 아니면 【당신을 위해 기꺼이 희생하려는 여자친구】를 죽일 것인가?',
    );

    era.printButton('「생사를 함께한 절친한 친구를 죽인다……」', 1);
    era.printButton('「나를 위해 기꺼이 희생하려는 여자친구를 죽인다……」', 2);
    await era.input();

    await era.printAndWait(
      '……북소리도, 기묘하고 장난기 넘치는 음악도, 어디서 나온 건지 모를 웃음소리도 없었다.',
    );
    await era.printAndWait('모든 것이 갑자기 멈춰버렸다.');
    await era.printAndWait(
      `${gold_ship.name}의 표정이 무척 평온해졌고, ${gold_ship.sex}의 눈빛은 빛을 잃은 채, 곧장 ${me.name}의 얼굴을 응시했다.`,
    );
    era.println();

    await gold_ship.say_and_wait(
      '이 문제는 매우 중요합니다. 반드시 신중하게 고려한 후 답해 주십시오.',
    );
    era.println();

    era.printButton('「생사를 함께한 절친한 친구를 죽인다……」', 1);
    era.printButton('「나를 위해 기꺼이 희생하려는 여자친구를 죽인다……」', 2);
    await era.input();

    await gold_ship.say_and_wait(
      '이 문제는 매우 중요합니다. 반드시 신중하게 고려한 후 답해 주십시오.',
    );
    era.println();

    await era.printAndWait(`${gold_ship.sex}는 이렇게 말했다`);
    const buffer = [
      {
        accelerator: 1,
        config: { disableWarning: true },
        content: '「생사를 함께한 절친한 친구를 죽인다……」',
        type: 'button',
      },
      {
        accelerator: 2,
        config: { disableWarning: true },
        content: '「나를 위해 기꺼이 희생하려는 여자친구를 죽인다……」',
        type: 'button',
      },
    ];
    era.printInColRows(buffer);
    setTimeout(() => {
      if (ret.length < 5) {
        buffer.push({
          accelerator: 3,
          config: { disableWarning: true },
          content: '「아무것도 고르지 않겠다……!」',
          type: 'button',
        });
        era.replaceInColRows(buffer);
      }
    }, 10000);
    ret.push(await era.input());
    era.println();

    await era.printAndWait(
      `${gold_ship.name}이 다시 평소 모습으로 돌아와, 히죽거리며 음악을 틀기 시작했다.`,
    );
    era.println();
    await gold_ship.say_and_wait(`후후~ ${callname} 수고했어~`);
    if (ret[4] === 3) {
      await gold_ship.say_and_wait(
        `음~ ${callname}은 정말 착한 아이구나. 우마무스메들과 우마뾰이하고 싶다는 건 좀... 뭐랄까.`,
      );
      await gold_ship.say_and_wait(
        '……그거 내가 낸 문제라고? 그럼 왜 세 번째 선택지를 고르지 않았어?',
      );
      await gold_ship.say_and_wait(
        '그나저나 초콜릿 먹을래? 걱정 마, 아무것도 안 넣었고 맛도 아주 평범해.',
      );
      era.println();
      await era.printAndWait([
        me.get_couple_title(),
        '의 트레이닝실에서 웃음꽃이 피는 풍경은, 앞으로도 사라지지 않을 것 같다.',
      ]);
    } else {
      era.println();
      await era.printAndWait(
        `${gold_ship.sex}는 바람처럼 왔다가 바람처럼 떠나버렸고, ${me.name}은(는) 결국 심리 테스트 결과를 듣지 못했다.`,
      );
    }
    era.println();
    get_attr_and_print_in_event(
      7,
      [
        30 - ret[2] * 20 + 30 - ret[3] * 20,
        30 - ret[0] * 20 + 30 - ret[1] * 20,
        ret[2] * 20 - 30 + ret[3] * 20 - 30,
        0,
        ret[0] * 20 - 30 + ret[1] * 20 - 30,
      ],
      0,
    );
    get_skills_and_print_in_event(7, [201151]);
    sys_change_motivation(7, ret[4] === 3 ? 3 : -3);
    if (ret[3] === 1) {
      era.set('talent:7:매도좋아함', 1);
      era.set('talent:7:고통좋아함', 1);
      era.print([
        gold_ship.get_colored_name(),
        '은 ',
        { color: buff_colors[2], content: ' [매도좋아함] ' },
        '과 ',
        { color: buff_colors[2], content: ' [고통좋아함] ' },
        '을 얻었다!',
      ]);
    } else {
      era.set('talent:7:도S', 1);
      era.print([
        gold_ship.get_colored_name(),
        '은 ',
        { color: buff_colors[2], content: ' [도S] ' },
        '를 얻었다!',
      ]);
    }
    if (ret[4] !== 3) {
      yandere_list.push(7);
    }
    await era.waitAnyKey();
    if (ret[1] === 2) {
      era.set(
        'base:7:성욕',
        Math.max(lust_border.want_sex, era.get('base:7:성욕')),
      );
      await era.printAndWait([
        gold_ship.get_colored_name(),
        '은 지금 좀',
        { color: buff_colors[2], content: ' [흥분] ' },
        '했다!',
      ]);
    }
    return true;
  }
};
