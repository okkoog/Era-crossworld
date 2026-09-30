/**
 * @file 골드 쉽 - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const lines = require('#/event/daily/daily-7.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const { escape_enum } = require('#/data/basement-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const o = {};
    const gold_ship = get_chara_talk(this.id);
    o['그녀'] = gold_ship.sex;
    o['우마무스메'] = gold_ship.get_uma_sex_title();
    o['대표색'] = gold_ship.color;
    o['당신'] = era.get('callname:0:-2');
    o['플레이어이름'] = era.get('callname:0:-1');
    return o;
  }

  good_morning() {
    const gold_ship = get_chara_talk(7);
    const life_marks = LifeEventMarks.get_marks(7);
    if (life_marks.b_escape) {
      switch (life_marks.b_escape) {
        case escape_enum.sneak:
          gold_ship.say('용사님, 대단하네. 고루시짱이 눈치채기도 전에 슬쩍 빠져나가다니.');
          gold_ship.say([
            { color: chara_colors[1], content: ' 흐흐, 다음엔 더 단단히 막아야겠네...' },
          ]);
          break;
        case escape_enum.beat:
          gold_ship.say('역시 너야, 정면에서 이 고루시 대마왕을 이기다니.');
          gold_ship.say([
            {
              color: chara_colors[1],
              content: ' 그렇게 강한 용사라면 더 큰 도전도 두렵지 않겠지, 그렇지?',
            },
          ]);
          break;
        case escape_enum.strike:
          gold_ship.say('하하하. 네 손에 당할 줄이야.');
          gold_ship.say([
            { color: chara_colors[1], content: '『다음 번』에는 더 노력해야겠네.' },
          ]);
      }
      life_marks.b_escape = 0;
    } else if (era.get('base:7:체력') < 0.45 * era.get('maxbase:7:체력')) {
      gold_ship.say(
        Math.random() < 0.5
          ? '너무 힘들어...2주 지나서 죽을 때 다된 매미처럼 지쳤어...'
          : '안 되겠어~ 제발... 오늘만큼은 쉬자.',
      );
    } else {
      gold_ship.say(
        get_random_entry([
          [
            {
              color: chara_colors[1],
              content: 'RED・HOT・골드쉽 등장! 이 세상을 불타오르게 하겠어!!!',
            },
          ],
          [
            {
              content: '오늘 일정 뭐야? 스모 연습할 거야?',
            },
            {
              color: chara_colors[1],
              content: ' 좋아, 맡겨둬!',
            },
          ],
          '다음엔 혀를 내밀고 달려볼까',
          [
            {
              color: chara_colors[1],
              content:
                '아, 쉬는 날이지? 쉬는 날이지?! 나랑 같이 샹티이 숲 탐험 가자!',
            },
          ],
          [
            {
              color: chara_colors[1],
              content:
                '처음 봤을 때『엄청 한가해 보이는 녀석이네……』라고 생각했었어. 나를 만난 후로, 네 인생 좀 재미있어졌지?',
            },
          ],
        ]),
      );
    }
  }

  office_cook() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        [
          { content: '음? 트레이너가 밥 쏘게?' },
          {
            color: chara_colors[1],
            content: ' 뭐야, 중학교 급식 같은 싸구려 영양식이잖아! 싫어!!!',
          },
        ],
        [
          { content: '트레이너, 소금 좀 줘봐!' },
          {
            color: chara_colors[1],
            content: ' 우와, 야키소바 냄새 개쩌는데?',
          },
        ],
      ]),
    );
  }

  office_game() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        [
          '트레짱~ 오늘은 뭘 할까? 《경마소녀 타이쿤》? 《URA2K》? 아니면 ',
          { color: chara_colors[1], content: '작고, 귀여운, 골드쉽?' },
        ],
        [
          '트레짱，',
          { color: chara_colors[1], content: '세가타 산시로가 창밖에서 우리를 보고 있어.' },
        ],
      ]),
    );
  }

  async office_gift() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        '서방님~정말 장난꾸러기네~ 히히히~',
        [
          {
            content: '어떻게 이럴 수가… 고루시에게 이렇게 값비싼 선물을 주다니…',
          },
          {
            content: ' 좋아! 나도 열심히 달려서 보여줄게!',
            color: chara_colors[1],
          },
        ],
      ]),
    );
  }

  office_prepare() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        [
          {
            color: chara_colors[1],
            content: '하이야~ 누구나 공부하면 고수가 될 수 있지~ 무술을 알면 겁쟁이가 아니지~',
          },
        ],
        [
          {
            color: chara_colors[1],
            content: '오늘, 나는 태양계의 아홉 번째 행성으로 향한다! 가자, 트레이너!',
          },
        ],
      ]),
    );
  }

  office_rest() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        '트레짱, 나 완전 지쳤어——안아줘——',
        [
          {
            content: '——헉!!!',
            color: chara_colors[1],
          },
          {
            content: '개미를 세다가 그만 정신을 잃어버렸어……',
          },
        ],
      ]),
    );
  }

  office_study() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        '알고 있어? 어떤 알바는 반죽에 구멍을 뚫어서 도넛을 만드는 게 전부래. 그거 진짜 대단해…… 허무함이라는 면에서……',
        '알고 있어? 연어는 붉게 보이지만, 사실 생물학적으로는 흰살생선이야……',
      ]),
    );
  }

  async school_atrium(hook) {
    const gold_ship = get_chara_talk(7);
    hook.arg = !(await select_action_in_atrium());
    let buffer;
    if (hook.arg) {
      await era.printAndWait(`${gold_ship.name}과 함께 고목의 구멍으로 갔다...`);
      buffer = [
        `${
          era.get('cflag:7:성별') === 1 ? '우마무스코' : '우마무스메'
        }여, 마지막 순간이 되어서야 눈물을 흘릴 수 있겠구나...」`,
        [
          '만약 세 여신이 듣고 있다면,',
          {
            content: ' 여신들의 고막은 무사하려나?',
            color: chara_colors[1],
          },
        ],
      ];
    } else {
      await era.printAndWait(`${gold_ship.name}과 함께 데이트를 갔다……`);
      buffer = [
        '추억이라고? …우리 함께 바닷속에서 보낸 7일간의 휴가가 그립네~',
        [
          {
            content: '싫어~ 옷자락이 이리저리 펄럭이는 거 창피해~',
          },
          {
            content: ' 야, 제대로 나를 바라봐.',
            color: chara_colors[1],
          },
        ],
      ];
    }
    await gold_ship.say_and_wait(get_random_entry(buffer));
  }

  async school_rooftop() {
    const gold_ship = get_chara_talk(7);
    await era.printAndWait(`${gold_ship.name}과 함께 도시락을 먹었다……`);
    await gold_ship.say_and_wait(
      get_random_entry([
        '이 매쉬드 포테이토 맛있지? 감자가루에 물타서 만든 거야.',
        [
          {
            content: '봐, 이 완벽한 스테이크! 정말 정성스럽게 만든',
          },
          {
            content: '……냉동삽겹살이야.',
            color: chara_colors[1],
          },
        ],
      ]),
    );
  }

  select() {
    const life_marks = LifeEventMarks.get_marks(7);
    if (sys_check_awake(7)) {
      const gold_ship = get_chara_talk(7);
      if (sys_check_awake(0) && life_marks.b_escape) {
        switch (life_marks.b_escape) {
          case escape_enum.sneak:
            gold_ship.say([
              sys_get_colored_callname(this.id, 0),
              '은(는) 혼자 몰래 나가서 놀다 알아서 집에 돌아오는 애완동물이야?',
            ]);
            gold_ship.say([
              { color: chara_colors[1], content: '그래도 좋네, 귀찮은 일이 줄어드니까.' },
            ]);
            break;
          case escape_enum.beat:
            gold_ship.say('하하하. 네 손에 당할 줄이야.');
            gold_ship.say([
              { color: chara_colors[1], content: '『다음 번』에는 더 노력해야겠네.' },
            ]);
            break;
          case escape_enum.strike:
            gold_ship.say('야, 사랑하는 우마무스메를 그렇게 심하게 대하다니 너무 무정한 거 아니야?');
            gold_ship.say([
              {
                color: chara_colors[1],
                content: '그런데 고루시쨩은 결단력 있는 트레이너를 좋아할지도❤️',
              },
            ]);
        }
        life_marks.b_escape = 0;
      } else {
        gold_ship.say(
          Math.random() < 0.5
            ? '오! 이 골드쉽님께 무슨 볼 일이라도?'
            : '이 골드쉽님을 따라와!',
        );
      }
    } else {
      return super.select();
    }
  }

  talk() {
    if (!sys_check_awake(7)) {
      return super.talk();
    }
    const gold_ship = get_chara_talk(7);
    let talk_arr;
    if (era.get('base:7:체력') < 0.45 * era.get('maxbase:7:체력')) {
      return gold_ship.say_and_wait(
        Math.random() < 0.5
          ? '너무 힘들어...2주 지나서 죽을 때 다된 매미처럼 지쳤어...'
          : '안 되겠어~ 제발... 오늘만큼은 쉬자.',
      );
    } else {
      switch (era.get('cflag:7:컨디션')) {
        case 2:
          talk_arr = [
            {
              color: chara_colors[1],
              content: '빨리…… 빨리 나에게 지시 내려줘! 난 이제 참을 수 없어, 빨리 해줘!!!',
            },
            {
              color: chara_colors[1],
              content: '골드쉽 대・분・화! 의욕 MAX, 정말 신나 죽겠어!!!',
            },
          ];
          break;
        case 1:
          talk_arr = [
            {
              color: chara_colors[1],
              content: `너 더 이상 아무것도 안 하면，나 그냥 길거리에 나가버릴 거야——!`,
            },
            {
              color: chara_colors[1],
              content: `야야, 나 이제 달려도 돼!? 더 이상 안 달리면 내 에너지가 낭비되잖아!`,
            },
          ];
          break;
        case 0:
          talk_arr = [
            {
              color: chara_colors[1],
              content: `어, 싸울래? 좋아, 싸우자!`,
            },
            { content: '어——? 일정이 있으면 잠깐 듣긴 할게.' },
          ];
          break;
        case -1:
          talk_arr = [
            { content: '흠… 아아, 트레이너……? 미안, 『eraUMA』 생각하고 있었어……' },
            { content: '흑흑……! 안 돼…… 의욕이 안 나와!' },
          ];
          break;
        case -2:
          talk_arr = [
            { content: '큰일이다…… 의식이 녹아내려……' },
            { content: '우와…… 너무 졸려…… 끝나면 깨워줘……' },
          ];
      }
      return gold_ship.say_and_wait([get_random_entry(talk_arr)]);
    }
  }

  async out_church(hook) {
    const gold_ship = get_chara_talk(7);
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '하——앗! 핫!' },
    ]);
    await era.printAndWait(
      `${gold_ship.name}이 신사 입구에서 마치 바람에 흔들리는 풀뿌리처럼 몸을 흔들며 중얼거리고 있었다.`,
    );
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '우마무스메여, 이리 오라! 우마무스메여, 이리 오라!' },
    ]);
    era.printButton('「뭐 하는 거야?」', 1);
    await era.input();
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '보고도 모르겠어? 내가 무녀인 거야.' },
    ]);
    await era.printAndWait(
      `${gold_ship.sex}의 뻔뻔한 표정이 좀 짜증 나지만, ${gold_ship.sex}는 신경 쓰지 않는 것 같다`,
    );
    await gold_ship.say_and_wait([
      {
        color: chara_colors[1],
        content: '예로부터 신 앞에서 춤을 추어 신을 기쁘게 하는 건 상식 아니겠어!',
      },
    ]);
    await gold_ship.say_and_wait([
      {
        color: chara_colors[1],
        content: '신께서 사랑하시는 골드쉽인 내가 춤추러 왔으니, 신도 함께 춤추시며 신나게 즐겨주세요!',
      },
    ]);
    await era.printAndWait(`이때, ${gold_ship.name}은 온 몸이 굳어지고 두 눈을 크게 떴다!`);
    hook.arg = Math.random() < 0.5;
    if (hook.arg) {
      await gold_ship.say_and_wait([
        {
          color: chara_colors[1],
          content:
            '예수님! 이제 당신의 뜻을 알았어요. 당신은 『잘 먹고, 잘 자고, 마음을 밝게 유지하라』고 하셨군요!',
        },
      ]);
      await era.printAndWait([
        '오른쪽 뺨이 경련을 일으키고 있는 ',
        get_chara_talk(0).get_colored_name(),
        '은(는) 왜 일본 신사에 예수가 있는지 태클 걸고 싶고, 예수님의 지시가 마치 임종을 앞둔 자에게 하는 말 같다는 것도 정말 태클 걸고 싶어졌다.',
      ]);
      await era.printAndWait(
        `하지만 ${gold_ship.sex}가 꽤 행복해 보이니 마음대로 하게 두자.`,
      );
    } else {
      await gold_ship.say_and_wait([
        {
          color: chara_colors[1],
          content: '부처님! 왜 저를 버리시나요?! 제게『트레이너의 말을 잘 들으라』고 하시다니……',
        },
      ]);
      await era.printAndWait(
        `${gold_ship.name}의 낙담한 모습을 보니, 당신의 왼쪽 얼굴 근육도 저절로 경련을 일으킨다.`,
      );
      await era.printAndWait(
        `하지만 ${gold_ship.sex}가 얌전히 말을 잘 듣기만 한다면, 그것도 나쁘지 않은 일이겠지.`,
      );
      await era.printAndWait('...아니, 역시 좀 짜증나네.');
    }
  }

  async out_river(hook) {
    const gold_ship = get_chara_talk(7);
    let talk_arr;
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      await era.printAndWait(`${gold_ship.name}과 함께 산책하러 갔다……`);
      talk_arr = [
        {
          color: chara_colors[1],
          content:
            '아차, 방에 키우고 있던 도화지를 다른 사람에게 맡기는 걸 깜빡했어! 아아, 내가 없으면 그 녀석이 외로워할 텐데……',
        },
        {
          color: chara_colors[1],
          content:
            '경기장의 뒤편 하늘만 바라보면 내 고향인 황금별을 볼 수 있어…흐흐흐…',
        },
      ];
    } else {
      await era.printAndWait(`${gold_ship.name}과 함께 낚시하러 갔다……`);
      talk_arr = [
        {
          color: chara_colors[1],
          content:
            '낚시는 정신력이 중요해…… 바로 자신과의 싸움이지! 그리고 내가 이 노련한 연못의 주인을 낚아 올렸을 때, 내 마음은 이미 이미 『염소』를 이겨낸 거야!',
        },
        {
          color: chara_colors[1],
          content:
            '후후~ 옷 아래에 방탄 조끼까지 입었으니, 하늘에서 작살이 떨어지든 연어가 떨어지든 나에게 전혀 상처를 줄 수 없지!',
        },
      ];
    }
    await gold_ship.say_and_wait([get_random_entry(talk_arr)]);
  }

  async out_shopping(hook) {
    const gold_ship = get_chara_talk(7),
      temp = await select_action_in_shopping_street();
    let talk_arr;
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await era.printAndWait(`${gold_ship.name}과 함께 아케이드 게임장에 갔다……`);
        talk_arr = [
          '오라! 한 방에 이 녀석들을 전부 잡아… 다 떨어져버렸어?!',
          '트레짱! 나 총알 없어, 빨리 엄호해줘! 어어!',
        ];
        break;
      case 1:
        await era.printAndWait(`${gold_ship.name}과 함께 복권을 뽑으러 갔다……`);
        talk_arr = [
          [
            {
              content: '트레짱! 빨리 돈 줘. 내 10연차 도전정신을 멈출 수가 없어!!!',
              color: chara_colors[1],
            },
          ],
          '우리, 초소형 잠수정을 타고 타이타닉 잔해를 탐험하는 여행권을 뽑을 수 있을까?',
        ];
        break;
      case 2:
        await era.printAndWait(`${gold_ship.name}과 함께 노래방에 갔다…`);
        talk_arr = [
          [
            {
              content: '누구든지 너에게 시선을 빼앗길 거야～♪너는 완벽하고 궁극적인～',
            },
            {
              content: '겟타!!!',
              color: chara_colors[1],
            },
          ],
          '요즘 젊은이들은 니코니코 조곡도 못 들어봤다고……트레짱 아직 어린애구나……',
        ];
        break;
      case 3:
        await era.printAndWait(`${gold_ship.name}과 함께 영화를 보러 갔다…`);
        talk_arr = [
          '오! 이건 마야노 탑건의 아빠가 출연한 영화잖아? 트레짱, 같이 볼래?',
          [
            {
              content: '요즘 슈퍼히어로 영화들은 다 너무 지루해…',
            },
            {
              content: '좋아! 우리《돌아온 골드쉽》을 찍자!!',
              color: chara_colors[1],
            },
          ],
        ];
    }
    await gold_ship.say_and_wait(get_random_entry(talk_arr));
  }

  async out_station(hook) {
    const gold_ship = get_chara_talk(7);
    hook.arg = await select_action_in_station(7);
    let talk_arr;
    switch (hook.arg) {
      case 0:
        await era.printAndWait(`${gold_ship.name}과 함께 식사를 하러 갔다..`);
        talk_arr = [
          [
            {
              content: '커피 한잔 할래?',
            },
            {
              color: chara_colors[1],
              content: '우유 대신 고추・기름 넣어줄게♪',
            },
          ],
          [
            {
              content: '그러고 보니, 라이스 샤워 그 녀석은 의외로 빵파더라…',
            },
            {
              color: chara_colors[1],
              content: '설마 자기자신의 안티테제인 건가?!',
            },
          ],
        ];
        break;
      case 1:
        await era.printAndWait(`${gold_ship.name}과 데이트하러 갔다...`);
        talk_arr = [
          '저기, 100년 뒤에 시간 좀 돼? 시간 된다면 같이 우주로 가자.',
          [
            {
              color: chara_colors[1],
              content:
                '고루시짱에게서 시선을 떼면 안 돼! 안 그러면 1초 뒤에 무슨 일이 일어날지 나도 몰라!',
            },
          ],
        ];
        break;
      case 2:
        await era.printAndWait(`${gold_ship.name}과 쇼핑몰에 갔다……`);
        talk_arr = [
          [
            {
              content: '트레짱, 손 잡을래?',
            },
            {
              color: chara_colors[1],
              content: '……저기 가게는 커플 20% 할인이야!',
            },
          ],
          '트레짱, 아무리 나라도 맥도날드에서 프라이드 치킨 시키는 건 안 할거야?',
        ];
    }
    await gold_ship.say_and_wait(get_random_entry(talk_arr));
  }

  load_talk() {
    const gold_ship = get_chara_talk(7);
    if (Math.random() < 0.5) {
      return gold_ship.say_and_wait([
        { content: '『그것』을 사용할 거야? 너무 남용하진 마.' },
        {
          content: '어쨌든 시공간에 장난치면 결국 시공간 연속성을 깨트린 대가를 받게 되니까.',
          color: chara_colors[1],
        },
      ]);
    } else {
      return gold_ship.say_and_wait([
        { content: '『그것』이 정말 편리한 건 알아. 하지만 가끔은 ' },
        {
          content: '자연스럽게 가는 게 더 재밌지 않아?',
          color: chara_colors[1],
        },
      ]);
    }
  }

  async basement_end() {
    await lines['basement_end'](this.#dict);
  }

  async slave_end() {
    await lines['slave_end'](this.#dict);
  }
};
