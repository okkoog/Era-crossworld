// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file マルゼンスキー - 日常
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] good_morning
  good_morning(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say('음~ 조금만 더 자게 해줘.');
          maru.say('어제 그만 만화를 늦게까지 읽어버렸거든.');
          era.print([
            you.get_colored_name(),
            `은(는) 어쩔 수 없이 ${maru.name}을(를) 흔들어 깨우고 전신거울 앞에서 ${maru.sex}의 머리를 정돈해 주었다.`,
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say('머리가 어질어질…… 이런 모습은 후배들한테 보여줄 수 없겠네.');
          era.print([maru.get_colored_name(), '은(는) 꽤 졸려 보인다.']);
        });
      }
    } else {
      buffer.push(() => {
        maru.say('오늘 훈련 메뉴는 뭘까?');
        maru.say([
          maru.sex_code === 1 ? '멋진 남자' : '아가씨',
          '인 나는 이미 준비 끝났어.',
        ]);
        era.print(`${maru.name}은(는) 들뜬 표정을 하고 있다.`);
      });
      buffer.push(() => {
        maru.say('잔디 위를 달리는 느낌, 정말 기분 좋네.');
        maru.say(`어머, ${callname}이었구나.`);
        era.print([
          you.get_colored_name(),
          '이(가) 시간 맞춰 코스에 도착하자 ',
          maru.get_colored_name(),
          '은(는) 이미 몇 바퀴나 달리고 있었다.',
        ]);
      });
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname}, 좋은 아침⭐`);
          maru.say('……왜 옆방까지 깨우러 왔냐고?');
          maru.say(
            `깨워주는 다정한 ${
              maru.elder_sibling_sex_title
            }이(가) 있다니, 행복하다고 생각하지 않아?`,
          );
          era.print([
            maru.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '의 이불을 걷어내고 빨리 준비하라고 재촉했다.',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(() => {
          maru.say(`${callname}에게는 아직 깨어나지 않은 힘이 잠들어 있는 것 같네.`);
          maru.say('아직 약하지만 곧 모습을 드러내지 않을까?');
          era.print([
            maru.get_colored_name(),
            '은(는) 골똘히 생각하듯 ',
            you.get_colored_name(),
            '을(를) 평가하듯 바라보고 있다.',
          ]);
        });
        buffer.push(() => {
          maru.say(
            `${callname}, 곤란한 일이 있으면 ${
              maru.elder_sibling_sex_title
            }에게 말해줘.`,
          );
          maru.say(
            '계속 가슴속에만 담아두면 만능 열쇠라도 녹슨 열쇠구멍에는 들어가지 못해.',
          );
          era.print([
            maru.get_colored_name(),
            '은(는) 걱정스러운 듯 ',
            you.get_colored_name(),
            '을(를) 바라보고 있다.',
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say(
            '전력으로 달리다 보면 묘한 느낌이 들어. 둥실둥실해서 잔디 위에 떠 있는 것 같아.',
          );
          maru.say(`……아, ${callname} 좋은 아침.`);
          era.print(`잔디를 달리던 ${maru.name}은(는) 생각에 잠겨 있다.`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select
  select(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      buffer.push(() => {
        maru.say('『이 정도로는 부족해. 너라면 더 할 수 있어.』');
        maru.say(`아차~. ${callname}의 부탁이라면……`);
        era.print([
          maru.get_colored_name(),
          '은(는) 복잡한 표정으로 ',
          you.get_colored_name(),
          '을(를) 바라보고 있다.',
        ]);
      });
    } else {
      buffer.push(
        () => {
          era.print([
            maru.get_colored_name(),
            '은(는) 달릴 때 맞는 바람을 즐기고 있다.',
          ]);
          maru.say(
            `${callname}, 고민이 있다면 ${
              maru.elder_sibling_sex_title
            }에게 말해줘.`,
          );
          era.print([
            maru.get_colored_name(),
            '은(는) 여유로운 미소로 ',
            you.get_colored_name(),
            '을(를) 바라보고 있다.',
          ]);
        },
        () => {
          maru.say(
            `오늘 메뉴는 뭐야? 뭐든 ${maru.elder_sibling_sex_title}인 나는 여유롭지.`,
          );
          era.print(
            `어느새 주변에 ${maru.uma_sex_title}들이 모여 있었다. 이것이 ${
              maru.name
            }의 매력이다.`,
          );
        },
      );
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname}, 훈련 끝나고 내 차로 드라이브하지 않을래?`);
          maru.say(
            `밤의 차가운 바람을 맞으면 ${maru.uma_sex_title}도 사람도 기분이 들뜨는 법이야.`,
          );
          era.print([
            maru.get_colored_name(),
            '은(는) 몸째로 ',
            you.get_colored_name(),
            '의 팔에 기대고, 어느새 꼬리도 ',
            you.get_colored_name(),
            '의 허벅지에 감겨 있었다.',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(
          () => {
            maru.say(
              '음~ 사계절 바람은 저마다 다르지만, 고르라면 봄바람이 제일 좋아.',
            );
            maru.say(`${callname}은(는) 어느 계절 바람을 좋아하려나?`);
            era.print([
              maru.get_colored_name(),
              '은(는) 미소 지으며 ',
              you.get_colored_name(),
              '을(를) 바라보고 있다.',
            ]);
          },
          () => {
            maru.say(
              '『봄에는 마력이 있어. 「더 나은 내가 되고 싶다」고 생각하게 하는 마력.』',
            );
            maru.say(`${callname}은(는) 어떻게 생각해?`);
            era.print([
              '스트레칭을 하기 전, ',
              maru.get_colored_name(),
              '와(과) 잡담을 나누다가 ',
              maru.sex,
              '이(가) ',
              you.get_colored_name(),
              '에게 그렇게 물었다.',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          maru.say(
            `바람의 매력을 나를 동경하는 후배들에게. 희망의 바람의 화신, ${maru.name}이야~`,
          );
          maru.say(`후후, ${callname}, 이 대사 어때?`);
          era.print(`미소 짓는 ${maru.name}은(는) 기분 좋게 꼬리를 흔들고 있다.`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_after_recruit
  select_after_recruit(maru, you, callname) {
    maru.say(
      `하이~ ${you.sex_code !== 1 ? '아가씨' : '멋진 남자'}, 나는 ${maru.name}이야.`,
    );
    maru.say(
      `레이스장에서 나를 동경하는 후배들에게 ${maru.elder_sibling_sex_title}의 멋진 뒷모습을 보여주고 싶네.`,
    );
    maru.say(
      `그나저나 ${callname}, 귀엽네. 여름이 사람에게 주는 느낌 그 자체야.`,
    );
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  // [번역 대상] select_sister_annoyance
  select_sister_annoyance(maru) {
    maru.say('더 큰 무대에서 달리면 기분까지 반짝반짝해지네♪');
    maru.say(`무슨 일 있으면 반드시 ${maru.elder_sibling_sex_title}에게 상담해 줘?`);
    maru.say('……우리 사이에 비밀이 없으면 좋을 텐데.');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_girls_blue
  select_girls_blue(maru, callname) {
    maru.say('무릎이 전보다 훨씬 아파.', true);
    maru.say('앞으로 얼마나 더 버틸 수 있을까.', true);
    maru.say(`적어도 ${callname}에게는 들키지 않도록.`, true);
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  // [번역 대상] select_true_end
  select_true_end(maru) {
    maru.say('같은 후회를 두 번 다시 하지 않기 위해서.');
    maru.say('적어도 길을 잃고 고민하는 후배들에게 참고가 될 길을 남기기 위해서.');
    maru.say('앞으로도 힘내야지!');
    maru.say('이렇게 해서, 캇카캇 하고 Back step이야!');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_good_end
  select_good_end(maru, you, callname) {
    maru.say(
      `괴로움도 외로움도 ${callname}과(와) 함께라면 별것 아닌 것 같아.`,
    );
    maru.say(
      `우마무스메의 길에서 ${callname}을(를) 만난 건 평생의 행운일지도 모르겠네.`,
    );
    maru.say('계속 도와줘서 고마워.');
    maru.say('앞으로도 같이 힘내야겠지?');
    maru.say(`음, ${callname}에게 너무 부담을 주는 걸까?`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {number} wind マルゼンスキー育成用変数 wind の値
   * @returns {boolean} wind が特定値なら本文を出したので true、そうでなければ続行
   */
  // [번역 대상] select_by_wind
  select_by_wind(maru, you, callname, wind) {
    switch (wind) {
      case 1:
        maru.say(`앞으로도 잘 부탁해, ${callname}♪`);
        break;
      case 5:
        maru.say(
          `이건 ${maru.sex_code === 1 ? '멋진 남자' : '아가씨'}인 나한테 주는 거야?`,
        );
        maru.say(`그럼 ${callname}, 고마워♪`);
        maru.say('후후~ 예쁘네.');
        break;
      case 10:
        maru.say(
          '잔디 위를 몇 번을 달려도 그때의 느낌이 돌아오지 않아. 살아 있는 보람이 없네.',
        );
        maru.say('……');
        maru.say('바람이 멈췄어.');
        break;
      case 15:
        maru.say(`트레센의 그 밤, 잔디 위를 달리던 ${maru.uma_sex_title}들.`);
        maru.say(`나를 지지해 주는 후배들, 그리고 곁에 있는 ${callname}.`);
        maru.say('진심으로 행복하다고 생각했어.');
        break;
      case 20:
        maru.say('하늘과 잔디와, 그 위를 떠도는 우리.');
        maru.say('그리운 습한 여름과 건조한 가을.');
        maru.say(
          `앞으로도 함께 걸어가자? ${you.sex_code === 1 ? '트・레・이・너・군' : '트・레・이・너・짱'}♪`,
        );
        break;
      default:
        return false;
    }
    return true;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_Self_contempt
  select_Self_contempt(maru, callname) {
    maru.say(`왜 그렇게 풀이 죽어 있어?`);
    maru.say('빨리 기운 내!');
    maru.say(`나는 계속 ${callname}을(를) 기다리고 있으니까!`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_happiness_day
  select_happiness_day(maru, callname) {
    maru.say(`새파란 하늘, 새 잔디. 왠지 그리운 느낌이 드네.`);
    maru.say(`어머, ${callname}, 언제 왔어?`);
    maru.say('그럼 좋은 하루를 함께 즐기자.');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_study(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          '여러 레이스에 나가려면 다양한 주법을 익히는 것도 중요해…… 아예 파워 슬라이드 주법을 시도해 볼까?',
        ),
      () =>
        maru.say_and_wait(
          '남이 이끄는 위치보다, 이렇게 단숨에 골라인을 끊는 짜릿함이 최고지♪',
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '역대 중상 레이스 영상을 보면서 도주 주법의 핵심을 분석하고 자신을 더 끌어올려 보자.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}의 지도 덕분에 이 ${
              maru.elder_sibling_sex_title
            }도 크게 성장했어. 정말 대단해!`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_prepare(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('후배들에게 내 멋진 모습을 보여주지 않으면 안 되겠지.'),
      () =>
        maru.say_and_wait(
          `${callname}, 조수석에서 바람의 춤을 제대로 느껴보라구.`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}에게서 전달받은 이 열정의 불꽃을 후배들에게 보여주자.`,
          ),
        () =>
          maru.say_and_wait(
            `${callname}, 조금만 더 꽉 안아봐도 될까? 에이, 안 된다구? 치사해라~`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] talk
  async talk(maru, callname) {
    const buffer = [];
    if (era.get('cflag:4:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:4:干劲')) {
        case -2:
          buffer.push(
            () =>
              maru.say_and_wait(
                '손가락에 왜 반창고를 붙였냐구? 어라라. 오늘 아침에 직접 아침밥을 하려다가 음악 소리에 취해서 그만 손가락을 살짝 베었지 뭐야…… 아하하, 정말 괜찮아.',
              ),
            () =>
              maru.say_and_wait(
                `왜 오늘 이렇게 늦게 왔냐구? 머리도 엉망이고……? 아침에 일어나다가 그만 종이 상자를 건드려서 내용물이 쏟아지는 바람에, 그거 정리하느라 늦어버렸어. 하지만 괜찮아! 자, 오늘 훈련은 뭐니?`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `${callname}, 이 휴대폰 어떻게 켜는지 좀 봐줄래? 어머? 이렇게 간단한 거였어?`,
              ),
            () =>
              maru.say_and_wait(
                `어제 만화책 보다가 그만 푹 빠져버렸지 뭐야. ${callname}, 미안해~`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => maru.say_and_wait(`${callname}, 오늘 스케줄은 어떻게 되니?`),
            () =>
              maru.say_and_wait(
                `${callname} に何かあったら、私に話してちょうだい。というか${
                  maru.sex_code === 1 ? '멋진 남자' : '아가씨'
                }の私、大歓迎よ♪`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `오늘 상태 좋은걸! ${callname}이 보기엔 어때?`,
              ),
            () =>
              maru.say_and_wait(
                `노력하는 아이들이 내 뒷모습을 보고, 바람을 가르는 즐거움을 함께 쫓아와 줬으면 좋겠어.`,
              ),
            () =>
              maru.say_and_wait(
                `${callname}, 훈련 끝나고 같이 주스 마시러 갈래?`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              maru.say_and_wait(`하이~! ${callname}의 뜨거운 열정이 여기까지 느껴지는데♪`),
            () =>
              maru.say_and_wait(
                `컨디션 최고! ${callname}, 내가 지난번 기록을 깨는 걸 여기서 지켜봐 줘♪`,
              ),
            () =>
              maru.say_and_wait(
                `${callname}의 마음속에 숨겨진 열정을 내가 불태워줄게. Let's go!`,
              ),
          );
      }
    }
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 봄바람의 기운이 느껴지니? 대지의 속박을 풀고 하늘에서 자유롭게 노니는 봄바람 말이야.`,
          ),
        () =>
          maru.say_and_wait(
            `かわいい後輩たちは、春の花みたいに香りを漂わせてるわね。${
              maru.sex
            }たちの香りが、この世界の隅々まで届いたらいいのに。`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '사계절 중에서 내가 가장 끌리는 건 여름이야. 밤 기온이 딱 적당할 때 카운타크와 함께 자유롭게 달리면, 나 자신도 여름 바람과 하나가 된 기분이거든.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}, 오늘 밤에 시간 있니? 훈련 끝나고 같이 바다에 가지 않을래? 눅눅한 바닷바람이 짜증 나는 건조함을 날려줄 거야. 달빛 아래에서 몸과 마음이 씻겨 내려가는 기분이라구.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '음~ 벌써 가을이네. 가을은 왠지 이대로 잠들고 싶어지는 공기가 있어. 훈련 끝나고 트레이닝실에서 조금 쉬어도 될까?',
          ),
        () =>
          maru.say_and_wait(
            `식욕의 가을, 독서의 가을... 가을은 참 감수성이 풍부해지는 계절이야. 여름의 습기와 열정도 가을이 오면 서서히 물러가네.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '만물이 안식에 든 겨울, 오직 바람의 정령만이 이 하얀 대지 위에서 춤을 추고 있어. 후배들도 잔디 위를 마음껏 달리고 싶어 하는 모양이야.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}, 몸이 참 따뜻해 보이네. 이따 훈련 끝나고 상점가에 가서 따뜻한 음료라도 마실까?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_gift(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(`이 인형 나한테 주는 거니? ${callname}, 고마워.`),
      () =>
        maru.say_and_wait(
          `내가 제일 좋아하는 코코넛 음료네! 고마워, ${callname}.`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `이거 답례를 고민해야겠는걸? 가만있을 수 없지. 오늘 밤엔 이 ${
              maru.elder_sibling_sex_title
            }의 손맛을 보여줄게!`,
          ),
        () =>
          maru.say_and_wait(
            `뭐?! 샴페인 잔에 장식한 과일 초콜릿은 어떠냐고? ${callname}은 가끔 참 기발한 생각을 한단 말이야…… 조만간 한번 해볼까?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_cook(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('정말 그리운 냄새네. 그럼 사양 않고 잘 먹을게?'),
      () =>
        maru.say_and_wait(
          `${callname}은 그냥 여기 앉아서 내가 요리하는 거 구경이나 하렴…… 어머? 나랑 같이 요리하고 싶어?`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 이 오므라이스, 맛이 어떤지 좀 볼래? 어때, 맛있지? ${callname}의 행복한 미소를 보니까 나도 벌써 배가 부른 것 같아.`,
          ),
        () =>
          maru.say_and_wait(
            `이 ${
              maru.elder_sibling_sex_title
            }를 위해 밥을 해주고 싶다니…… 어머나, 이게 바로 행복의 맛인가 봐. 내 심장이 지금 (DokiDoki 멈추질 않아♪`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_rest(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `모처럼의 휴식 시간인데, ${callname} 나랑 같이 최신 유행 잡지라도 볼래?`,
        ),
      () =>
        maru.say_and_wait(
          `${callname}, 고생 많았어. 아, 미안해. 나도 모르게 머리를 쓰다듬어 버렸네.`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 조금만 더 안고 있어도 될까? 너한테선 항상 따스한 기운이 느껴져.`,
          ),
        () =>
          maru.say_and_wait(
            `${callname}은 매일 고생하네. 내가 도와줄 수 있는 건 없을까? 아니면 지난번처럼 내 가슴에 머리를 묻고 쉴래?`,
          ),
        () =>
          maru.say_and_wait(
            '착하지, 착해. 매일 그렇게 지쳐서 어떡하니. 내 품에서 조금 쉬렴.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_game(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `이 ${
            maru.elder_sibling_sex_title
          }가 게임 쪽에는 영 젬병이라 말이야. ${callname}, 추천할 만한 게임 있니?`,
        ),
      () =>
        maru.say_and_wait(
          `트레이닝실에 이렇게 앉아 있는 것보다 밖에서 훈련하는 게…… 내 수영복 차림이 보고 싶다구? ${callname}, 정말 야하네. 그때까지 얌전히 기대하고 있으렴♪`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 『가을의 추억』이란 게임 들어봤니? 나도 해본 적은 없지만, 이번 기회에 같이 해보자!`,
          ),
        () =>
          maru.say_and_wait(
            '그 여름날의 산들바람을 다시 느끼고 싶네. 그 마을에서 소년과 소녀가 처음 만났을 때처럼 말이야.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  // [번역 대상] s_a_tree_hollow
  async s_a_tree_hollow(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `悩みごと？ ふふ、${maru.elder_sibling_sex_title}には、今のところないわ`,
        ),
      () =>
        maru.say_and_wait(
          `私の走りは、${maru.uma_sex_title}たちに希望を届けてるのかしら、それとももっと深い絶望を……ううん、なんでもないわ⭐`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] s_a_dating
  async s_a_dating(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `私もさっき着いたばかり。待たずに ${callname} に会えたわ。`,
        ),
      () =>
        maru.say_and_wait(`手作り弁当、用意したの。ピクニックで食べてみて♪`),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  async school_rooftop(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `옥상에서 도시락을 먹으니까 마음도 바람처럼 자유로워지는 것 같아.`,
        ),
      () =>
        maru.say_and_wait(
          `이렇게 멍하니 머리를 비우고, 포근한 햇살 아래에서 산들바람이 되어 춤추는 상상을 하면 기분도 들뜨게 돼.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_r_fishing
  async o_r_fishing(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `ん、${
            maru.elder_sibling_sex_title
          }は釣りが苦手なの。じゃあ ${callname} にお願いするわね`,
        ),
      () =>
        maru.say_and_wait(
          `ふふ、${callname} の真剣な顔を見ていると、私も嬉しいわ`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_r_walking
  async o_r_walking(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `岸の空気、新鮮ね。${callname} も、気分がよくなったんじゃない？`,
        ),
      () =>
        maru.say_and_wait(
          `岸で歌の練習をしている後輩の熱を見ていると、自分の気分まですごく良くなるわ`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_s_arcade
  async o_s_arcade(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname} も一緒に踊らない？`);
        await era.printAndWait(
          `マルゼンスキーはダンスゲームが初めてなのに、柔らかい体と生まれつきのリズム感で、すぐにこのゲームの法則を掴んだ。`,
        );
      },
      async () => {
        await maru.say_and_wait(`次はあっちの遊び、試してみましょう`);
        await era.printAndWait(
          `${maru.name} は新しいものに出会った子どもみたいに、目を輝かせている`,
        );
      },
      async () => {
        await maru.say_and_wait(`こんなに頑張るトレーナー、かわいいわね`, true);
        await era.printAndWait([
          maru.get_colored_name(),
          ' は笑顔で、クレーンゲームを操作する ',
          you.get_colored_name(),
          ' の緊張した顔を見つめている',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_s_drawing
  async o_s_drawing(maru, you, callname) {
    await maru.say_and_wait(`${callname} も運試し、してみる？`);
    await era.printAndWait(`${maru.name} は商店街近くの抽選機を指した`);
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`大丈夫、次の機会もあるわ`);
        await era.printAndWait([
          maru.get_colored_name(),
          ' はティッシュを引いた ',
          you.get_colored_name(),
          ' を慰めている',
        ]);
      },
      async () => {
        await maru.say_and_wait(`夜はにんじんにしましょう`);
        await era.printAndWait(`${maru.name} は引いたにんじんを見ながら言った`);
      },
      async () => {
        await maru.say_and_wait(
          `うん、にんじんがこんなにあるなら、訓練室でパーティーしましょう`,
        );
        await era.printAndWait(
          `そのあと${maru.name}はテイオー${
            maru.couple_title
          }を訓練室に呼んで、にんじんパーティーを楽しんだ`,
        );
      },
      async () => {
        await maru.say_and_wait(`すごっ！ にんじんバーガー！`);
        await era.printAndWait([
          '夜、',
          you.get_colored_name(),
          ' と ',
          maru.get_colored_name(),
          ' は、この幸運の贈り物を一緒に味わった',
        ]);
      },
      async () => {
        await era.printAndWait(`チリンチリン`);
        await maru.say_and_wait('！', true);
        await era.printAndWait(`抽選箱のそばの店員「おめでとうございます」`);
        await era.printAndWait([
          maru.get_colored_name(),
          ' は、温泉旅行券を引いた ',
          you.get_colored_name(),
          '을(를) 바라보고 있다.',
        ]);
        await maru.say_and_wait(
          `運がいいわね。暇なときに、一緒に温泉へ行きましょう`,
        );
        await era.printAndWait(`そのあと、二人は機嫌よく訓練室へ戻った`);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_s_ktv
  async o_s_ktv(maru, you, callname) {
    await maru.say_and_wait(`${callname}、この最新の流行歌、聞いてみて`);
    await era.printAndWait([
      maru.get_colored_name(),
      ' はかなり懐古的な曲を選んだらしく、',
      you.get_colored_name(),
      ' は懐かしさに浸った',
    ]);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_s_movie
  async o_s_movie(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(
          `最近公開のラブコメが評判らしいわ。${callname}、一緒に見ない？`,
        );
        await era.printAndWait(
          `${maru.name} は映画おすすめの十大クラシック上映を指していた。`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `刺激的なスタント映画、見たい？ あのバンバンパァンって感じ`,
        );
        await era.printAndWait(`二人は最新公開の映画について話していた`);
      },
      async () => {
        await maru.say_and_wait(`${callname}……もうだめ、脚がまだ震えてる`);
        await era.printAndWait(
          `気分でホラーに手を出した二人は、支え合いながら上映室を出た`,
        );
      },
    );
    if (era.get('love:4') >= 75) {
      buffer.push(async () => {
        await maru.say_and_wait(`ん……今日はラブコメにしましょう`);
        await era.printAndWait(
          `おバカなカップルは、映画が山場に来たとき、主人公と同じようにキスした`,
        );
      });
    } else if (era.get('love:4') >= 50) {
      buffer.push(
        async () => {
          await maru.say_and_wait(
            `${callname} は結局、温かいのか、乾いているのかしら？`,
          );
          await era.printAndWait(
            `眠くなる映画の途中、${maru.name} が突然ひとりごとを始めた`,
          );
        },
        async () => {
          await maru.say_and_wait(
            `銀杏が落ち始める秋より、私は湿った夏のほうが好きね`,
          );
          await era.printAndWait(
            `${maru.name} は映画のおすすめを見ながらつぶやいた`,
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} darley ダーレーアラビアン
   * @param {CharaTalk} godolphin ゴドルフィンバルブ
   * @param {CharaTalk} byerley バイアリーターク
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] out_church
  async out_church(maru, darley, godolphin, byerley, you, callname) {
    darley.name = '優しい女神';
    godolphin.name = '賢い女神';
    byerley.name = '厳しい女神';
    await maru.say_and_wait(`${callname}、着いたわよ。`);
    await era.printAndWait(`ある休日、二人は神社へお参りに行くことにした`);
    await era.printAndWait(
      `伝承では、三女神が地上に降りたとき、ここの清水を飲んだという。それでこの山の小川は${
        maru.sex
      }の祝福を受けた`,
    );
    await era.printAndWait(
      `昔の人たちはこの小川を囲んで神社を建て、参拝する人たちは仕事や恋の成就を祈った`,
    );
    await maru.say_and_wait(
      `神社に掛かっている鈴が鳴ると、誠実に祈った人は三女神の祝福を得られるらしいわ。${
        maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
      }の私も、試してみたいの。`,
    );
    await era.printAndWait(
      `早起きして来たのに、前方のまばらな人だかりと、野営用のテントが見えた。`,
    );
    await era.printAndWait(`たぶん、昨夜から待っている人も多いのだろう。`);
    era.printButton(`じゃあ、私たちも急いで並ぼう`, 1);
    await era.input();
    await era.printAndWait(
      `願掛けに来た人たちは、割り込みの混乱で三女神を怒らせたくないのか、列は整っていた。`,
    );
    await era.printAndWait(`鳥居をくぐり、この三女神の神社へ入った`);
    await era.printAndWait([
      you.get_colored_name(),
      ' は前の参拝客を真似て賽銭箱に硬貨を入れ、柏手を打って両手を合わせ、目を閉じて祈り始めた',
    ]);
    await maru.say_and_wait(`……`);
    await era.printAndWait([
      you.get_colored_name(),
      ' はそっと ',
      maru.get_colored_name(),
      ` を見た。${maru.sex}の唇はわずかに開き、何か小さくつぶやいているようだった。`,
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait(`しばらく待っても、鈴の音は聞こえなかった。`);
      await maru.say_and_wait(`残念ね。`);
      await era.printAndWait(
        `${maru.name}は大事な願いをかけたらしく、耳を垂らして、とても惜しそうだ。`,
      );
      era.printButton(`${maru.sex}の手を握る`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ` は${maru.sex}の手を握った`,
      ]);
      await maru.say_and_wait(`……${callname}、ありがとう`);
      await maru.say_and_wait(
        `じゃあ、愛車でドライブして、この気持ちを発散しましょう`,
      );
      await era.printAndWait([
        'そのあと ',
        you.get_colored_name(),
        ' は意識がぼんやりするなか、三女神の笑顔を見た気がした',
      ]);
    } else {
      const buffer = [
        () => darley.say_and_wait('頑張って、子どもたち'),
        () =>
          godolphin.say_and_wait('かわいい子どもたち、幸せでありますように'),
        () => byerley.say_and_wait('走りなさい。希望は疾走の先に'),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait(`チリンチリン`);
      await era.printAndWait(`三女神の低い声が聞こえた気がした。`);
      await era.printAndWait(
        `そっと目を開けて、${maru.name}のほうをちらりと見た。`,
      );
      await maru.say_and_wait(`……三女神さま、ありがとう、`);
      await era.printAndWait(
        `願いが認められたらしく、${maru.name}はほっとした笑顔を見せた。`,
      );
      await maru.say_and_wait(`${callname}`);
      await era.printAndWait(`${maru.name}は鳥居を出てから、後ろで足を止めた`);
      if (era.get('love:4') >= 90) {
        await era.printAndWait(
          `乾いた唇が、もう一枚の唇に潤された。あなたは思わず${maru.sex}の細い体を抱きしめた`,
        );
        await era.printAndWait(`今、二つの鼓動が、ようやく同じ気持ちになった`);
        await era.printAndWait(
          `時間も、名誉も、佳人以外のすべてが、もうどうでもよかった`,
        );
        await era.printAndWait(`今は、この優しさのなかに沈んでいたかった`);
        await era.printAndWait(
          `息が苦しくなるまで、風に踊る二人はやっと、名残惜しそうに離れた`,
        );
        await maru.say_and_wait(
          `${callname}、もしかしてあなたが、違う、あなたが、私がずっと探していた炎よ。`,
        );
        await era.printAndWait(
          `${maru.name}はあなたの手を強く握った。あなたは黙って、その痛みに耐えた`,
        );
        await era.printAndWait(`そして二人は、また唇を重ねた。`);
        await era.printAndWait(`炎は、結局あの乾きに勝った`);
      } else {
        await era.printAndWait(
          `湿った気配を感じた。${maru.name}は後ろを向いて、胸の高鳴りを抑えようとしている`,
        );
        await era.printAndWait(`微妙な空気のまま、二人は学園へ戻った`);
      }
    }
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] o_s_restaurant
  async o_s_restaurant(maru, you) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `このあたりに評判のいいスイーツ店があるらしいわ。次、一緒に行きましょう`,
        ),
      async () => {
        await maru.say_and_wait(`フルーツパフェ、もう一杯♪`);
        await you.say_and_wait(`そんなに食べて大丈夫か？`);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          maru.get_colored_name(),
          ' の胃が持つか、少し心配になった',
        ]);
        await maru.say_and_wait(
          `心配いらないわ。甘いものを食べるときは、甘いもの専用の胃があるのよ⭐`,
        );
        await maru.say_and_wait(
          `${maru.name}は大きな口でフルーツパフェを食べている`,
        );
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_s_dating
  async o_s_dating(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname} の手、温かいわね`);
        await era.printAndWait([
          you.get_colored_name(),
          ' にとって、',
          maru.get_colored_name(),
          ' は何なのだろう？',
        ]);
      },
      () =>
        maru.say_and_wait(
          `できれば ${callname} に、ずっと頼っていてほしいけれど`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] o_s_shopping
  async o_s_shopping(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait(`${callname}、買いたいものはある？`),
      () =>
        maru.say_and_wait(
          `このあたりにスイーツ店が新しくできたらしいわ。あとで寄ってみましょう`,
        ),
    );
    await get_random_entry(buffer)();
  },
};
