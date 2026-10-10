// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103000-Rice-Shower/daily-30"),

  // [번역 완료] good_morning
  good_morning(rice) {
    const buffer = [];
    if (era.get('cflag:30:节日事件标记') === 1) {
      buffer.push(
        () => rice.say("곧 축제가 시작될 것 같아…… 어떤 일을 하게 될까?"),
        () =>
          rice.say(
            "축제가 열리고 있는 것 같아…… 라이스, 민폐를 끼치지 않도록 노력할테니까…… 살짝 구경하러 가도 될까……?",
          ),
      );
    } else {
      buffer.push(
        () => rice.say("부디…… 라이스를 잘 지켜봐 줘."),
        () => rice.say("라이스도…… 분명 빛날 수 있을 거야……"),
      );
      if (!era.get('status:30:熬夜')) {
        buffer.push(
          () => {
            rice.say("어젯밤에 정말 멋진 꿈을 꿨어……!");
            rice.say("오라버니와 함께, 찬란한 별빛이 쏟아지는 초원에서……");
            rice.say("원래는 같이 훈련을 하려고 했는데……");
            rice.say(
              "별이 너무 예뻐서, 도중에 같이 별을 보기로 했어.",
            );
            rice.say(
              "그래서, 일찍 일어나서 제대로 훈련해야겠다고 생각했어!",
            );
          },
          () => {
            rice.say("라이스는 꽃집에 다녀왔어.");
            rice.say(
              "시원한 가게 안에서 꽃들에 둘러싸여 있으니 마음이 정말 차분해졌어.",
            );
            rice.say("후후~ 그래서 오늘의 트레이닝, 라이스는 열심히 노력할 거야!");
          },
        );
      }
    }
    get_random_entry(buffer)();
  },

  // [번역 대상] o_r_fishing
  async o_r_fishing(rice, callname, jpy) {
    if (jpy > 0) {
      await rice.say_and_wait(
        'うわああ！禁漁区でこんなに釣っちゃって、本当にごめんなさい！',
      );
    } else {
      await rice.say_and_wait([callname, ", 지금은 금어기라구?"]);
      await rice.say_and_wait(
        "에…… 한 사람당 낚싯대 하나에 줄 하나 바늘 하나는 괜찮다구? 생태 환경 개선? 에에에?",
      );
    }
  },

  // [번역 완료] o_r_walking
  async o_r_walking(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          "예전에는 혼자 훈련해서 외로움을 느꼈을지도 몰라. 하지만 ",
          callname,
          "와 함께라면 마음이 치유되는 기분이야!",
        ]),
      () =>
        rice.say_and_wait([
          "라이스가 가장 즐거운, 혹은 가장 라이스 자신다워지는 시간은 ",
          callname,
          "와 느긋하게 걷는 바로 지금이야.",
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_arcade
  async o_s_arcade(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          'なんでゲームセンターはコインじゃなくてメダルなんですか？店員さん、大変じゃないですか……',
        ),
      () =>
        rice.say_and_wait([
          callname,
          ", 이 기계는 고장 난 걸지도 몰라. 왜냐하면, 이렇게 느린 탄막을 ",
          callname,
          "가 못 피할 리가 없잖아?",
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_dating
  async o_s_dating(rice, callname) {
    const buffer = [
      () => rice.say_and_wait("헤헤, 라이스는 마치 그림책 속의 여주인공이 된 기분이야."),
      () =>
        rice.say_and_wait([callname, '、そういうタイプの雌が好きなんですね……']),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_drawing
  async o_s_drawing(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          "라이스는 계속 티슈만 뽑히네…… 과정을 즐기라구? 그럼 라이스가 다시 한번 해볼게.",
        ),
      () =>
        rice.say_and_wait([
          "저기, 돈은 라이스가 낼 테니, ",
          callname,
          ' は、ご自身の幸運をください！',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          "에게 바치는 노래라면, 라이스는 얼마든지 부를 수 있어.",
        ]),
      () =>
        rice.say_and_wait([
          "라이스의 작은 기도가 ",
          callname,
          "에게 전해졌을까?",
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_movie
  async o_s_movie(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          ". 왜 누군가를 사랑하면서도, 상대방을 좋아하지 않을 수가 있는 걸까?",
        ]),
      () =>
        rice.say_and_wait(
          "《나O토 극장판》에 라이스와 닮은 멋진 캐릭터가 나온다구? 기대된다!",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          "머머머, 먹고 싶은 게 라이스라니… 아, ",
          callname,
          "는 밥(라이스) 파였지.",
        ]),
      () =>
        rice.say_and_wait(
          "역시 더치페이로 할까? 라이스도 라이스의 식사량이 꽤 많다는 건 알고 있어.",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(rice, callname) {
    const buffer = [
      () => rice.say_and_wait("그림책 코너, 같이 둘러보래?"),
      () =>
        rice.say_and_wait([
          "커플 한정…… 하지만 ",
          callname,
          "는 그냥 ",
          callname,
          "인걸.",
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_cook
  async office_cook(rice) {
    const buffer = [
      () => rice.say_and_wait("에헤헤, 마치 신혼부부 같네."),
      () =>
        rice.say_and_wait(
          "의외야? 라이스는 먹성이 좋은 편이라, 어머니께 요리를 가르쳐 달라고 했었거든.",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_game
  async office_game(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          "《",
          rice.uma_sex_title,
          " 꼬마의 목욕 일기》, 히히, ",
          callname,
          ' も好きなんですね。',
        ]),
      () =>
        rice.say_and_wait([callname, ", 모범생 같은 느낌인데 게임 실력도 정말 대단해!"]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_rest
  async office_rest(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          ", 저기…… 무릎베개…… 와아아, 실은 라이스가 ",
          callname,
          "에게 해주고 싶어서…",
        ]),
      () =>
        rice.say_and_wait("정말로 겉옷을 라이스에게 담요 대신 덮어주지 않아도 괜찮은데…… 좋은 냄새가 나…"),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_study
  async office_study(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          "이건 라이스가 엄선한 그림책이야. ",
          callname,
          "도 읽어 줬으면 좋겠어.",
        ]),
      () =>
        rice.say_and_wait([callname, "는 레이스와 관련된 일에 정말 능숙하네……"]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_dating
  async s_a_dating(rice) {
    const buffer = [
      () =>
        rice.say_and_wait("벤치에 앉아 있는 분들, 정말 대담하시네…… 조금 부럽기도 해."),
      () =>
        rice.say_and_wait(
          "트레센 학원인데도 이렇게 데이트하기 좋은 곳이 있구나.",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          "울면…… 안 돼, ",
          callname,
          "와 약속했으니까, 라이스는 강한 아이가 될 거야.",
        ]),
      () =>
        rice.say_and_wait(
          "세 여신님, 라이스는 이제 스스로를 믿어보려고 해요.",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_r_lunch
  async s_r_lunch(rice) {
    await rice.say_and_wait(
      "라이스는 아침엔 빵을 먹는 쪽이지만, 도시락에는 조금 자신이 있어!",
    );
  },

  // [번역 완료] select
  select(rice, you, awake) {
    if (!awake) {
      era.print([
        rice.get_colored_name(),
        "는 그림책보다 더 예쁜 미소를 지으며 깊이 잠들어 있다.",
      ]);
    } else {
      const buffer = [];
      if (era.get('cflag:30:节日事件标记') === 1) {
        buffer.push(
          () =>
            rice.say("곧 축제가 시작될 것 같아…… 어떤 일을 하게 될까?"),
          () =>
            rice.say(
              "축제가 열리고 있는 것 같아…… 라이스, 민폐를 끼치지 않도록 노력할테니까…… 살짝 구경하러 가도 될까……?",
            ),
        );
      } else {
        buffer.push(
          () =>
            era.print([
              rice.get_colored_name(),
              "는 정전기에 깜짝 놀라 귀를 만지작거리며 ",
              you.get_colored_name(),
              "의 지시를 기다리고 있다.",
            ]),
          () =>
            era.print([
              rice.get_colored_name(),
              "는 앞머리를 옆으로 넘기며 생기 넘치는 눈으로 ",
              you.get_colored_name(),
              "과 시선을 맞춘다.",
            ]),
        );
      }
      get_random_entry(buffer)();
    }
  },

  // [번역 대상] talk
  async talk(rice, callname) {
    const buffer = [];
    if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
      buffer.push(
        () => rice.say_and_wait("후우…… 조금, 지친…… 느낌이 들어……"),
        () => rice.say_and_wait("라이스는 괜찮아요! 지치지…… 않았어……"),
      );
    } else if (era.get('cflag:30:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:30:干劲')) {
        case -2: //やる気極悪
          buffer.push(
            () =>
              rice.say_and_wait([
                "아우우! ",
                callname,
                "에게 폐를 끼치고 싶지 않았는데…… 미안해...",
              ]),
            () => rice.say_and_wait("라이스는…… 다시 쓸모없는 아이로 돌아가는 걸까…"),
          );
          break;
        case -1: //やる気不調
          buffer.push(
            () => rice.say_and_wait("으으…… 힘내자 라이스…… 힘내…"),
            () => rice.say_and_wait("라이스가 도울 수 있는 일은 없을까……"),
          );
          break;
        case 0: //やる気普通
          buffer.push(
            () => rice.say_and_wait("우리 어떤 훈련을 할까?"),
            () =>
              rice.say_and_wait('ライス、がっかりさせないようにがんばります。'),
          );
          break;
        case 1: //やる気好調
          buffer.push(
            () =>
              rice.say_and_wait("힘낼게—! 오늘도 잘 부탁해."),
            () =>
              rice.say_and_wait([
                callname,
                ", 훈련 시작할까? 라이스, 오늘 많은 것을 해낼 수 있을 것 같은 기분이야.",
              ]),
          );
          break;
        case 2: //やる気絶好調
          buffer.push(
            async () => {
              await rice.say_and_wait(
                "라이스는 지금 아주, 아주 많이 노력할 수 있을 것 같아!",
              );
              await rice.say_and_wait([
                "라이스를 믿어줘, ",
                callname,
                ".",
              ]);
            },
            async () => {
              await rice.say_and_wait(
                "저기, 라이스는 벌써 준비 운동 끝났어.",
              );
              await rice.say_and_wait('だから、今から何をしても大丈夫です。');
            },
          );
      }
    } else {
      buffer.push(
        () =>
          rice.say_and_wait(
            "매일, 아주 조금씩이지만…… 이상적인 모습에 점점 가까워지는…… 느낌이야.",
          ),
        () =>
          rice.say_and_wait([
            callname,
            "…… 저기, 할 말이 있는데…… 라이스는 매일 노력할 테니까…… 라이스가 분명 변할 수 있다는 걸 믿어줘.",
          ]),
        () =>
          rice.say_and_wait(
            "지금은…… 라이스도 더 이상 내 자신이 그렇게 밉지 않게 되었어.",
          ),
        () =>
          rice.say_and_wait([
            "……으음, ",
            callname,
            "…… 오늘도 계속 라이스를 돌봐 줄 거야……?",
          ]),
        () =>
          rice.say_and_wait([
            'ほ……本当はライス、チョコレートを作ったんです……ライスのチョコレート、食べてくれますか……？受け取ってくれたら、ライス、嬉しいです。',
          ]),
        () =>
          rice.say_and_wait(
            "별은 모두의 소원을 들어주고, 모두를 행복하게 해주니 정말 대단해. 라이스도…… 노력해야겠어.",
          ),
        () =>
          rice.say_and_wait([
            callname,
            "를 만난 뒤로, 매일 시간이 정말 빠르게 흘러가…… ",
            "라이스는 열심히 할 거야!",
          ]),
        () => rice.say_and_wait("라이스가 교복 입은 모습, 잘 어울려?"),
        () =>
          rice.say_and_wait("계속 빤히 쳐다보면…… 조금 부끄러워."),
      );
    }
    await get_random_entry(buffer)();
  },
};
