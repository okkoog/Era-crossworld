// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file ゴールドシップ - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  // [번역 완료] good_morning
  good_morning(gs, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say('용사님, 대단하네. 고루시짱이 눈치채기도 전에 슬쩍 빠져나가다니.');
          gs.say([
            {
              color: gold_color,
              content: ' 흐흐, 다음엔 더 단단히 막아야겠네...',
            },
          ]);
          break;
        case escape_enum.beat:
          gs.say('역시 너야, 정면에서 이 고루시 대마왕을 이기다니.');
          gs.say([
            {
              color: gold_color,
              content: ' 그렇게 강한 용사라면 더 큰 도전도 두렵지 않겠지, 그렇지?',
            },
          ]);
          break;
        case escape_enum.strike:
          gs.say('하하하. 네 손에 당할 줄이야.');
          gs.say([
            { color: gold_color, content: '『다음 번』에는 더 노력해야겠네.' },
          ]);
      }
    } else if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        gs.say('너무 힘들어...2주 지나서 죽을 때 다된 매미처럼 지쳤어...');
      } else {
        gs.say('안 되겠어~ 제발... 오늘만큼은 쉬자.');
      }
    } else {
      const buffer = [
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                'RED・HOT・골드쉽 등장! 이 세상을 불타오르게 하겠어!!!',
            },
          ]),
        () => {
          gs.say('오늘 일정 뭐야? 스모 연습할 거야?');
          gs.say([
            {
              color: gold_color,
              content: ' 좋아, 맡겨둬!',
            },
          ]);
        },
        () => gs.say('다음엔 혀를 내밀고 달려볼까'),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                '아, 쉬는 날이지? 쉬는 날이지?! 나랑 같이 샹티이 숲 탐험 가자!',
            },
          ]),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                '처음 봤을 때『엄청 한가해 보이는 녀석이네……』라고 생각했었어. 나를 만난 후로, 네 인생 좀 재미있어졌지?',
            },
          ]),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   * @param {number|false} b_escape 地下室からの脱出手段。0 は通常、false はプレイヤーが寝ているため該当台詞なし
   */
  // [번역 완료] select_awake
  select_awake(gs, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say([
            callname,
            '은(는) 혼자 밖에 놀러 나갔다가 혼자 돌아오는 애완동물이냐?',
          ]);
          gs.say([{ color: gold_color, content: '뭐, 좋아. 수고를 덜었네.' }]);
          break;
        case escape_enum.beat:
          gs.say('큭큭큭, 설마 네놈한테 당할 줄이야.');
          gs.say([
            { color: gold_color, content: '『다음』에는 더 진심으로 간다.' },
          ]);
          break;
        case escape_enum.strike:
          gs.say('어이 어이, 자기 애마한테 그런 손을 쓰다니 너무 매정한 거 아냐?');
          gs.say([
            {
              color: gold_color,
              content: '그래도 고루시는 배짱 있는 트레이너, 싫지 않다구❤️',
            },
          ]);
      }
    } else {
      if (Math.random() < 0.5) {
        gs.say('오! 고루시 님한테 볼일이냐?');
      } else {
        gs.say('고루시 님을 따라와!');
      }
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_study(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '알고 있어? 어떤 알바는 반죽에 구멍을 뚫어서 도넛을 만드는 게 전부래. 그거 진짜 대단해…… 허무함이라는 면에서……',
      );
    } else {
      await gs.say_and_wait(
        '알고 있어? 연어는 붉게 보이지만, 사실 생물학적으로는 흰살생선이야……',
      );
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_prepare(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '하이야~ 누구나 공부하면 고수가 될 수 있지~ 무술을 알면 겁쟁이가 아니지~',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '오늘, 나는 태양계의 아홉 번째 행성으로 향한다! 가자, 트레이너!',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] talk
  async talk(gs) {
    if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        await gs.say_and_wait(
          '너무 힘들어...2주 지나서 죽을 때 다된 매미처럼 지쳤어...',
        );
      } else {
        await gs.say_and_wait('안 되겠어~ 제발... 오늘만큼은 쉬자.');
      }
    } else {
      const buffer = [];
      switch (era.get('cflag:7:干劲')) {
        case -2:
          buffer.push(
            () => gs.say_and_wait('큰일이다…… 의식이 녹아내려……'),
            () => gs.say_and_wait('우와…… 너무 졸려…… 끝나면 깨워줘……'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              gs.say_and_wait(
                '흠… 아아, 트레이너……? 미안, 『eraUMA』 생각하고 있었어……',
              ),
            () => gs.say_and_wait('흑흑……! 안 돼…… 의욕이 안 나와!'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `어, 싸울래? 좋아, 싸우자!`,
                },
              ]),
            () =>
              gs.say_and_wait(
                '어——? 일정이 있으면 잠깐 듣긴 할게.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `네놈, 아무것도 안 할 거면 ${
                    era.get('cflag:7:性别') === 1 ? '나' : '나'
                  }는 멋대로 시내 구경하러 간다ー!`,
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    `야야, 나 이제 달려도 돼!? 더 이상 안 달리면 내 에너지가 낭비되잖아!`,
                },
              ]),
          );
          break;
        case 2:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    '빨리…… 빨리 나에게 지시 내려줘! 난 이제 참을 수 없어, 빨리 해줘!!!',
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    '골드쉽 대・분・화! 의욕 MAX, 정말 신나 죽겠어!!!',
                },
              ]),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_gift(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('서방님~정말 장난꾸러기네~ 히히히~');
    } else {
      await gs.say_and_wait([
        '어떻게 이럴 수가… 고루시에게 이렇게 값비싼 선물을 주다니…',
        {
          content: ' 좋아! 나도 열심히 달려서 보여줄게!',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_cook(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '음? 트레이너가 밥 쏘게?',
        {
          color: gold_color,
          content: ' 뭐야, 중학교 급식 같은 싸구려 영양식이잖아! 싫어!!!',
        },
      ]);
    } else {
      await gs.say_and_wait([
        '트레이너, 소금 좀 줘봐!',
        {
          color: gold_color,
          content: ' 우와, 야키소바 냄새 개쩌는데?',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_rest(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('트레짱, 나 완전 지쳤어——안아줘——');
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '——헉!!!',
        },
        '개미를 세다가 그만 정신을 잃어버렸어……',
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_game(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '트레짱~ 오늘은 뭘 할까? 《경마소녀 타이쿤》? 《URA2K》? 아니면 ',
        { color: gold_color, content: '작고, 귀여운, 골드쉽?' },
      ]);
    } else {
      await gs.say_and_wait([
        '트레짱，',
        { color: gold_color, content: '세가타 산시로가 창밖에서 우리를 보고 있어.' },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 고목의 구멍으로 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        `${gs.uma_sex_title}은(는) 말이야, 정말 마지막 순간까지 울지 마라……`,
      );
    } else {
      await gs.say_and_wait([
        '세 여신이 듣고 있다면,',
        {
          content: '고막은 아직 멀쩡하냐?',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] s_a_dating
  async s_a_dating(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 데이트하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '추억? ……같이 해저에서 보낸 7일간의 휴가, 그립네~',
      );
    } else {
      await gs.say_and_wait([
        '싫어~ 옷자락이 팔랑팔랑해서 부끄럽잖아~',
        {
          color: gold_color,
          content: '야, 제대로 나를 보라고.',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] s_r_lunch
  async s_r_lunch(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 도시락을 먹었다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '이 감자 샐러드, 맛있지? 가루를 불려서 만든 거다.',
      );
    } else {
      await gs.say_and_wait([
        '봐라, 이 완벽한 고기의 오층탑! 그야말로 정교함의 극치인',
        {
          color: gold_color,
          content: '……우메보시 삼겹살 조림이다.',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] o_r_fishing
  async o_r_fishing(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 낚시하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '낚시에 필요한 건 정신력…… 자기 자신과의 싸움이다! 연못의 주인을 낚아 올렸을 때 내 마음은 『염소』를 이긴 거라고!',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '후후~ 옷 밑에 방탄조끼 입고 있으니까. 하늘에서 작살이 떨어지든 연어가 떨어지든 상처 하나 안 난다구!',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] o_r_walking
  async o_r_walking(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 산책하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '큰일, 방에서 키우는 도화지를 맡겨두는 걸 깜빡했네! 아~ 내가 없으면 외로워할 텐데……',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '코스 너머 하늘을 바라보면 이 몸의 고향・황금성이 보일지도 모르지…… 허허허……',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_arcade
  async o_s_arcade(gs, callname) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 오락실에 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait('오라! 한 번에 이 녀석들 전부 집어서…… 없어졌어!?');
    } else {
      await gs.say_and_wait([
        callname,
        '! 탄 떨어졌다, 엄호해줘! 우왓!',
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_drawing
  async o_s_drawing(gs, callname) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 뽑기를 하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        callname,
        {
          content: '! 돈 내놔, 내 10연차의 마음은 이제 멈출 수 없어!!!',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait(
        '초소형 잠수함으로 타이타닉 잔해를 탐험하는 여행권, 안 걸리려나?',
      );
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_ktv
  async o_s_ktv(gs, callname) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 노래방에 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '누구나 너에게 시선을 빼앗겨~♪ 너야말로 완벽하고 궁극의~',
        {
          content: '겟타!!!',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '요즘 젊은 것들은 니코니코 초조곡도 모른다니까……',
        callname,
        '은(는) 아직 애송이구만……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_movie
  async o_s_movie(gs, callname) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 영화를 보러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '오! 쿠로후네 아빠가 나오는 영화잖아?',
        callname,
        '도 볼래?',
      ]);
    } else {
      await gs.say_and_wait([
        '요즘 히어로 영화, 재미없네……',
        {
          content: '그래, 『돌아온 골드 쉽』이나 찍을까!',
          color: gold_color,
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈りの出目。0-1 の小数、小さいほど良い
   */
  // [번역 완료] o_c_pray
  async o_c_pray(gs, you, dice) {
    await gs.say_and_wait([
      { color: gold_color, content: '핫——호이호이!' },
    ]);
    await era.printAndWait([
      gs.get_colored_name(),
      '은(는) 남의 신사 입구에서 강풍에 흔들리는 풀뿌리처럼 몸을 흔들기 시작하며 입안으로 무언가 중얼거리고 있다.',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: `${gs.uma_sex_title}을(를) 내놔! ${gs.uma_sex_title}을(를) 내놔!`,
      },
    ]);
    era.printButton('「뭐 하는 거야?」', 1);
    await era.input();
    await gs.say_and_wait([
      { color: gold_color, content: '보고도 모르겠냐? 신내림이다.' },
    ]);
    await era.printAndWait([
      gs.sex,
      '의 의기양양한 얼굴에,',
      you.get_colored_name(),
      '은(는) 조금 짜증이 난다. 하지만',
      gs.sex,
      '은(는) 신경도 쓰지 않는다.',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: '예로부터 신 앞에서 춤춰 기쁘게 해드리는 건 상식이잖아!',
      },
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content:
          '신에게 사랑받는 골드 쉽이 디스코를 추는 거다. 신들림 정도는 식은 죽 먹기지!',
      },
    ]);
    await era.printAndWait([
      '그때,',
      gs.get_colored_name(),
      '의 몸이 굳고 눈이 크게 뜨였다!',
    ]);
    if (dice < 0.8) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '예수여! 뜻은 알았다, 『잘 먹고 잘 자고 마음을 밝게 유지하라』는 거구나!',
        },
      ]);
      await era.printAndWait([
        '오른쪽 뺨을 씰룩인 ',
        you.get_colored_name(),
        '은(는) 왜 신사에 예수가 있는지 태클 걸고 싶고 그 계시가 말기 완화의료 같은 것도 태클 걸고 싶다.',
      ]);
      await era.printAndWait(`하지만 ${gs.sex}은(는) 즐거워 보인다. 하고 싶은 대로 두자.`);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '부처여! 왜 나를 버리는 거야! 『트레이너 말을 잘 들어라』고……',
        },
      ]);
      await era.printAndWait([
        gs.get_colored_name(),
        '의 풀이 죽은 모습을 보고,',
        you.get_colored_name(),
        '의 왼쪽 뺨 근육도 씰룩였다.',
      ]);
      await era.printAndWait(
        `하지만 ${gs.sex}이(가) 얌전히 말을 듣는다면 나쁘지는 않다……`,
      );
      await era.printAndWait('……안 돼, 역시 조금 짜증 난다.');
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] o_s_restaurant
  async o_s_restaurant(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 식사하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '커피 마실래?',
        {
          color: gold_color,
          content: '우유는 고・추・기・름으로 바꿔줄게♪',
        },
      ]);
    } else {
      await gs.say_and_wait([
        '그러고 보니 라이스 녀석, 빵파라더라……',
        {
          color: gold_color,
          content: `설마 ${gs.sex}, 자기 안티인 거냐!?`,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  // [번역 완료] o_s_dating
  async o_s_dating(gs) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 데이트하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '야, 100년 뒤에 한가하냐? 한가하면 같이 우주 가자.',
      );
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '고루시에게서 눈 떼지 마! 1초 뒤에 무슨 일이 일어날지는 나도 모르니까!',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_shopping
  async o_s_shopping(gs, callname) {
    await era.printAndWait([
      '와(과) ',
      gs.get_colored_name(),
      '은(는) 쇼핑몰에 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        'なあ ',
        callname,
        ', 손 잡을래?',
        {
          color: gold_color,
          content: '……저 가게, 커플 80% 할인이라는데!',
        },
      ]);
    } else {
      await gs.say_and_wait([
        callname,
        ', 나라도 맥도날드에서 오리지널 치킨을 주문하진 않잖아?',
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async load_talk(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '『그것』을 사용할 거야? 너무 남용하진 마.',
        {
          content: '어쨌든 시공간에 장난치면 결국 시공간 연속성을 깨트린 대가를 받게 되니까.',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '『그것』이 정말 편리한 건 알아. 하지만 가끔은 ',
        {
          content: '자연스럽게 가는 게 더 재밌지 않아?',
          color: gold_color,
        },
      ]);
    }
  },
  // [번역 완료] slave_end
  slave_end: (() => {
    const title = '돈의 노예';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        '사무실에서,',
        you.get_colored_name(),
        '은(는) 책상 앞에 앉아 정장에 안경 차림으로 계산기를 두드리는',
        gs.uma_sex_title,
        '을(를) 어색한 얼굴로 바라보고 있었다.',
      ]);
      await era.printAndWait([
        gs.sex,
        '은(는) TN 액정에 떠오른 숫자를 보고 예쁜 눈썹을 찌푸리며 곤란한 듯',
        you.get_colored_name(),
        '을(를) 바라본다.',
      ]);
      era.println();
      await gs.say_and_wait(
        '손님, 그 우마 코인으로는 이번 달 이자에도 못 미치네요.',
      );
      era.println();
      await gs.say_and_wait(
        '엎드려 울며 반드시 갚겠다고 하셔도 저희 회사는 이미 손실을 보고 있습니다.',
      );
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        '이(가) 입을 열고,',
        gs.sex,
        '의 손에 든 계산기에는 간담이 서늘해지는 숫자가 떠 있었다.',
      ]);
      await era.printAndWait([
        gs.sex,
        '은(는) 펜을 들어 폐지 뒷면에 마구 적는다. 내용은 「매몰비용」「자산 유용」「사무 수수료」 같은 것뿐이다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 어쩔 도리 없이 고개를 숙이고 침묵했다——애초부터 반론의 여지 따위 없었다.',
      ]);
      era.println();
      await gs.say_and_wait(
        '하아, 고루시 은행은 자선사업이 아니니까요.',
      );
      era.println();
      await era.printAndWait([
        '그런데',
        gs.sex,
        '의 말투가 돌변한다. 손님을 배려하는 척하던 담당자는 돌연 눈앞의 먹잇감을 함정으로 유혹하는 달콤한 미끼가 됐다.',
      ]);
      era.println();
      await gs.say_and_wait([
        '「하지만 관심 있으신가요……',
        {
          color: gold_color,
          content: '어쩌면 인생을 한 방에 뒤집을 수 있는, 그런 게임에?',
        },
      ]);
      era.println();
      await era.printAndWait([
        '대출을 단번에 갚을 유일한 생명줄에 매달리기 위해,',
        you.get_colored_name(),
        '은(는) 골드 쉽에게 『호프 고루시호』라는 이름의 유람선으로 끌려갔다……',
      ]);
      await era.printAndWait([
        '목숨을 건 도박에서 어떻게 살아 돌아올지는 이제 흐름에 몸을 맡긴',
        you.get_colored_name(),
        '의 손에 달려 있지 않다.',
      ]);
      era.println();
      await era.printAndWait([
        '돈의 인연에 사로잡혀,',
        you.get_colored_name(),
        '은(는) 결말을 맞았다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  // [번역 완료] basement_end
  basement_end: (() => {
    const title = '사랑의 우리';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 눈을 떴다. 주변은 어둑하고 머리 위의 노란 전구만 열심히 빛나고 있다.',
      ]);
      await era.printAndWait([
        '필사적으로 움직여 보고,',
        you.get_colored_name(),
        '은(는) 손발의 금속 족쇄가 힘만으로는 풀리지 않는다는 걸 깨달았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 정면에서 조금 왼쪽 바닥에는 낡은 진공관 TV가 놓여 있다.',
        you.get_colored_name(),
        '은(는) 이 뒤에 무슨 일이 일어날지 이미 알 것 같은 기분이 들었다.',
      ]);
      era.println();
      await era.printAndWait(
        '예상대로 귀를 찌르는 딸깍 소리와 함께 화면이 켜졌다.',
      );
      await era.printAndWait([
        '화면에 비친 것은 작은',
        gs.uma_sex_title,
        '의 인형. 얼굴에는 섬뜩한 가면이 씌워져 있다.',
      ]);
      await era.printAndWait([
        '인형이 어느 각도로 움직였을 때,',
        you.get_colored_name(),
        '은(는) 그 아래에서 누군가의 손이 조종하고 있는 것을 보았다.',
      ]);
      era.println();
      await gs.say_as_unknown_and_wait([
        '안녕하세요,',
        you.get_colored_actual_name(),
        '. 게임을 하자——',
      ]);
      era.println();
      await era.printAndWait([
        '심하게 변조한',
        gs.sex_code === 1 ? '남성 목소리' : '여성 목소리',
        '다. 하지만',
        you.get_colored_name(),
        '은(는) 소프트웨어의 도움 따위 없이도 범인이 누구인지 짐작할 수 있다.',
      ]);
      era.println();
      await gs.say_and_wait([
        '오랫동안 계약을 맺은',
        gs.uma_sex_title,
        '을(를) 내버려뒀다. 그 탓에',
        gs.sex,
        '의 연심은 갈 곳을 잃었다.',
      ]);
      era.println();
      await gs.say_and_wait([
        {
          color: gold_color,
          content: `이제 그 ${gs.uma_sex_title}이(가) 방으로 들어가 네놈과 사투를 시작한다.`,
        },
      ]);
      era.println();
      await era.printAndWait(
        '화면 속에서 이리저리 흔들리던 인형이 내려놓이고 익숙한 그림자가 그 아래에서 나타났다.',
      );
      await era.printAndWait([
        gs.sex,
        '은(는) 카메라를 향해 활짝 웃더니 우스꽝스러운 표정을 지었다.',
      ]);
      await era.printAndWait([
        gs.sex,
        '은(는) 주먹을 펼쳤다. 콘돔 포장이 폭포처럼 쏟아진 뒤 촬영 범위 밖으로 사라졌다.',
      ]);
      era.println();
      await era.printAndWait('자물쇠가 열렸다.');
      era.println();
      await era.printAndWait([
        '골드 쉽의 마음이 만든 우리에 갇혀,',
        you.get_colored_name(),
        '은(는) 결말을 맞았다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
