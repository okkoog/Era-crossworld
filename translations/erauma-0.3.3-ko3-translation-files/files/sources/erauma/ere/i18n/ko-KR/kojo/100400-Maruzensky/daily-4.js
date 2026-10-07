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
  // [번역 완료] good_morning
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
  // [번역 완료] select
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
  // [번역 완료] select_after_recruit
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
  // [번역 완료] select_sister_annoyance
  select_sister_annoyance(maru) {
    maru.say('더 큰 무대에서 달리면 기분까지 반짝반짝해지네♪');
    maru.say(`무슨 일 있으면 반드시 ${maru.elder_sibling_sex_title}에게 상담해 줘?`);
    maru.say('……우리 사이에 비밀이 없으면 좋을 텐데.');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] select_girls_blue
  select_girls_blue(maru, callname) {
    maru.say('무릎이 전보다 훨씬 아파.', true);
    maru.say('앞으로 얼마나 더 버틸 수 있을까.', true);
    maru.say(`적어도 ${callname}에게는 들키지 않도록.`, true);
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  // [번역 완료] select_true_end
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
  // [번역 완료] select_good_end
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
  // [번역 완료] select_by_wind
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
  // [번역 완료] select_Self_contempt
  select_Self_contempt(maru, callname) {
    maru.say(`왜 그렇게 풀이 죽어 있어?`);
    maru.say('빨리 기운 내!');
    maru.say(`나는 계속 ${callname}을(를) 기다리고 있으니까!`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] select_happiness_day
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
  // [번역 완료] talk
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
                `${callname}에게 무슨 일이 있으면 나한테 말해줘. 아니, 그보다 ${
                  maru.sex_code === 1 ? '멋진 남자' : '아가씨'
                }인 나는 대환영이야♪`,
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
            `귀여운 후배들은 봄꽃처럼 향기를 풍기고 있네.${
              maru.sex
            }들의 향기가 이 세상 구석구석까지 닿으면 좋겠어.`,
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
  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `고민거리? 후후, ${maru.elder_sibling_sex_title}인 나한테는 지금은 없어.`,
        ),
      () =>
        maru.say_and_wait(
          `내 달리기는 ${maru.uma_sex_title}들에게 희망을 전하고 있는 걸까, 아니면 더 깊은 절망을…… 아니, 아무것도 아니야⭐`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] s_a_dating
  async s_a_dating(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `나도 방금 도착했어. 기다리지 않고 ${callname}을(를) 만났네.`,
        ),
      () =>
        maru.say_and_wait(`수제 도시락 준비했어. 피크닉에서 먹어봐♪`),
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
  // [번역 완료] o_r_fishing
  async o_r_fishing(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `응, ${
            maru.elder_sibling_sex_title
          }은(는) 낚시가 서툴러. 그럼 ${callname}에게 부탁할게.`,
        ),
      () =>
        maru.say_and_wait(
          `후후, ${callname}의 진지한 얼굴을 보고 있으면 나도 기뻐.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] o_r_walking
  async o_r_walking(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `강가 공기, 상쾌하네. ${callname}도 기분이 좋아지지 않았어?`,
        ),
      () =>
        maru.say_and_wait(
          `강가에서 노래 연습을 하는 후배의 열정을 보고 있으면 내 기분까지 무척 좋아져.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_arcade
  async o_s_arcade(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname}도 같이 춤출래?`);
        await era.printAndWait(
          `마루젠스키는 댄스 게임이 처음인데도 유연한 몸과 타고난 리듬감으로 금세 이 게임의 요령을 파악했다.`,
        );
      },
      async () => {
        await maru.say_and_wait(`다음엔 저쪽 게임도 해보자.`);
        await era.printAndWait(
          `${maru.name}은(는) 새로운 것을 발견한 아이처럼 눈을 반짝이고 있다.`,
        );
      },
      async () => {
        await maru.say_and_wait(`이렇게 열심히 하는 트레이너, 귀엽네.`, true);
        await era.printAndWait([
          maru.get_colored_name(),
          '은(는) 미소 지으며 크레인 게임을 조작하는 ',
          you.get_colored_name(),
          '의 긴장한 얼굴을 바라보고 있다.',
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
  // [번역 완료] o_s_drawing
  async o_s_drawing(maru, you, callname) {
    await maru.say_and_wait(`${callname}도 운 시험 한번 해볼래?`);
    await era.printAndWait(`${maru.name}은(는) 상점가 근처의 추첨기를 가리켰다.`);
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`괜찮아, 다음 기회도 있어.`);
        await era.printAndWait([
          maru.get_colored_name(),
          '은(는) 티슈를 뽑은 ',
          you.get_colored_name(),
          '을(를) 위로하고 있다.',
        ]);
      },
      async () => {
        await maru.say_and_wait(`저녁은 당근으로 하자.`);
        await era.printAndWait(`${maru.name}은(는) 뽑은 당근을 보며 말했다.`);
      },
      async () => {
        await maru.say_and_wait(
          `응, 당근이 이렇게 많으면 훈련실에서 파티하자.`,
        );
        await era.printAndWait(
          `그 뒤 ${maru.name}은(는) 테이오 ${
            maru.couple_title
          }을(를) 훈련실로 불러 당근 파티를 즐겼다.`,
        );
      },
      async () => {
        await maru.say_and_wait(`대단해! 당근 버거!`);
        await era.printAndWait([
          '夜、',
          you.get_colored_name(),
          '와(과) ',
          maru.get_colored_name(),
          '은(는) 이 행운의 선물을 함께 맛보았다.',
        ]);
      },
      async () => {
        await era.printAndWait(`딸랑딸랑`);
        await maru.say_and_wait('！', true);
        await era.printAndWait(`추첨함 옆 점원「축하드립니다.」`);
        await era.printAndWait([
          maru.get_colored_name(),
          '은(는) 온천 여행권을 뽑은 ',
          you.get_colored_name(),
          '을(를) 바라보고 있다.',
        ]);
        await maru.say_and_wait(
          `운이 좋네. 한가할 때 같이 온천에 가자.`,
        );
        await era.printAndWait(`그 뒤 두 사람은 기분 좋게 훈련실로 돌아갔다.`);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_ktv
  async o_s_ktv(maru, you, callname) {
    await maru.say_and_wait(`${callname}, 이 최신 유행가 한번 들어봐.`);
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 꽤 복고적인 곡을 고른 모양이라 ',
      you.get_colored_name(),
      '은(는) 추억에 잠겼다.',
    ]);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_movie
  async o_s_movie(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(
          `최근 개봉한 러브 코미디가 평이 좋대. ${callname}, 같이 볼래?`,
        );
        await era.printAndWait(
          `${maru.name}은(는) 영화관 추천 10대 클래식 상영작을 가리키고 있었다.`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `짜릿한 스턴트 영화 볼래? 그 빵빵, 파앙 하는 느낌 있잖아.`,
        );
        await era.printAndWait(`두 사람은 최신 개봉 영화에 대해 이야기하고 있었다.`);
      },
      async () => {
        await maru.say_and_wait(`${callname}…… 이제 안 돼, 다리가 아직도 떨려.`);
        await era.printAndWait(
          `기분 내키는 대로 공포 영화에 도전한 두 사람은 서로 부축하며 상영관을 나왔다.`,
        );
      },
    );
    if (era.get('love:4') >= 75) {
      buffer.push(async () => {
        await maru.say_and_wait(`음…… 오늘은 러브 코미디로 하자.`);
        await era.printAndWait(
          `바보 커플은 영화가 클라이맥스에 이르자 주인공들처럼 입을 맞췄다.`,
        );
      });
    } else if (era.get('love:4') >= 50) {
      buffer.push(
        async () => {
          await maru.say_and_wait(
            `${callname}은(는) 결국 따뜻한 쪽일까, 건조한 쪽일까?`,
          );
          await era.printAndWait(
            `졸음이 오는 영화 도중 ${maru.name}이(가) 갑자기 혼잣말을 시작했다.`,
          );
        },
        async () => {
          await maru.say_and_wait(
            `은행이 떨어지기 시작하는 가을보다 나는 습한 여름이 더 좋아.`,
          );
          await era.printAndWait(
            `${maru.name}은(는) 영화 추천 목록을 보며 중얼거렸다.`,
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
  // [번역 완료] out_church
  async out_church(maru, darley, godolphin, byerley, you, callname) {
    darley.name = '상냥한 여신';
    godolphin.name = '현명한 여신';
    byerley.name = '엄격한 여신';
    await maru.say_and_wait(`${callname}, 도착했어.`);
    await era.printAndWait(`어느 휴일, 두 사람은 신사에 참배하러 가기로 했다.`);
    await era.printAndWait(
      `전승에 따르면 세 여신이 지상에 내려왔을 때 이곳의 맑은 물을 마셨다고 한다. 그래서 이 산의 개울은 ${
        maru.sex
      }의 축복을 받았다.`,
    );
    await era.printAndWait(
      `옛사람들은 이 개울을 둘러 신사를 세웠고, 참배객들은 일과 사랑이 이루어지기를 빌었다.`,
    );
    await maru.say_and_wait(
      `신사에 걸린 방울이 울리면 진심으로 기도한 사람은 세 여신의 축복을 받을 수 있다나 봐.${
        maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
      }인 나도 한번 시험해 보고 싶어.`,
    );
    await era.printAndWait(
      `일찍 일어나 왔는데도 앞에는 드문드문 모인 사람들과 야영용 텐트가 보였다.`,
    );
    await era.printAndWait(`아마 어젯밤부터 기다린 사람도 많을 것이다.`);
    era.printButton(`그럼 우리도 서둘러 줄 서자.`, 1);
    await era.input();
    await era.printAndWait(
      `소원을 빌러 온 사람들은 새치기 소동으로 세 여신을 화나게 하고 싶지 않은지 줄을 질서 있게 서 있었다.`,
    );
    await era.printAndWait(`도리이를 지나 세 여신의 신사 안으로 들어갔다.`);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 앞의 참배객을 따라 새전함에 동전을 넣고 손뼉을 친 뒤 두 손을 모아 눈을 감고 기도하기 시작했다.',
    ]);
    await maru.say_and_wait(`……`);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 살며시 ',
      maru.get_colored_name(),
      `을(를) 바라보았다. ${maru.sex}의 입술은 살짝 벌어져 무언가 작게 중얼거리는 듯했다.`,
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait(`한동안 기다려도 방울 소리는 들리지 않았다.`);
      await maru.say_and_wait(`아쉽네.`);
      await era.printAndWait(
        `${maru.name}은(는) 중요한 소원을 빈 모양이라 귀를 늘어뜨리고 몹시 아쉬워한다.`,
      );
      era.printButton(`${maru.sex}의 손을 잡는다.`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        `은(는) ${maru.sex}의 손을 잡았다.`,
      ]);
      await maru.say_and_wait(`……${callname}, 고마워.`);
      await maru.say_and_wait(
        `그럼 내 차로 드라이브하면서 이 기분을 풀자.`,
      );
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '은(는) 의식이 흐릿해지는 가운데 세 여신의 미소를 본 것 같았다.',
      ]);
    } else {
      const buffer = [
        () => darley.say_and_wait('힘내렴, 아이들아.'),
        () =>
          godolphin.say_and_wait('사랑스러운 아이들이 행복하기를.'),
        () => byerley.say_and_wait('달리거라. 희망은 질주의 끝에 있다.'),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait(`딸랑딸랑`);
      await era.printAndWait(`세 여신의 낮은 목소리가 들린 것 같았다.`);
      await era.printAndWait(
        `살며시 눈을 뜨고 ${maru.name} 쪽을 슬쩍 바라보았다.`,
      );
      await maru.say_and_wait(`……세 여신님, 고마워요.`);
      await era.printAndWait(
        `소원이 받아들여진 모양인지 ${maru.name}은(는) 안도한 미소를 보였다.`,
      );
      await maru.say_and_wait(`${callname}`);
      await era.printAndWait(`${maru.name}은(는) 도리이를 빠져나온 뒤 뒤에서 걸음을 멈췄다.`);
      if (era.get('love:4') >= 90) {
        await era.printAndWait(
          `메마른 입술이 다른 입술에 의해 촉촉해졌다. 당신은 저도 모르게 ${maru.sex}의 가느다란 몸을 끌어안았다.`,
        );
        await era.printAndWait(`지금 두 심장박동이 마침내 같은 마음이 되었다.`);
        await era.printAndWait(
          `시간도 명예도, 사랑하는 사람 이외의 모든 것이 이제 아무래도 좋았다.`,
        );
        await era.printAndWait(`지금은 이 다정함 속에 잠기고 싶었다.`);
        await era.printAndWait(
          `숨이 가빠질 때까지 바람 속에서 춤추던 두 사람은 그제야 아쉬운 듯 떨어졌다.`,
        );
        await maru.say_and_wait(
          `${callname}, 혹시 네가…… 아니, 네가 내가 줄곧 찾던 불꽃이야.`,
        );
        await era.printAndWait(
          `${maru.name}은(는) 당신의 손을 세게 쥐었다. 당신은 말없이 그 아픔을 견뎠다.`,
        );
        await era.printAndWait(`그리고 두 사람은 다시 입술을 포갰다.`);
        await era.printAndWait(`불꽃은 결국 그 메마름을 이겼다.`);
      } else {
        await era.printAndWait(
          `촉촉한 기척이 느껴졌다. ${maru.name}은(는) 등을 돌리고 가슴의 두근거림을 가라앉히려 한다.`,
        );
        await era.printAndWait(`미묘한 분위기 속에서 두 사람은 학원으로 돌아갔다.`);
      }
    }
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] o_s_restaurant
  async o_s_restaurant(maru, you) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `이 근처에 평판 좋은 디저트 가게가 있대. 다음에 같이 가자.`,
        ),
      async () => {
        await maru.say_and_wait(`과일 파르페, 한 잔 더♪`);
        await you.say_and_wait(`그렇게 많이 먹어도 괜찮아?`);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          maru.get_colored_name(),
          '의 위가 버틸지 조금 걱정됐다.',
        ]);
        await maru.say_and_wait(
          `걱정 마. 단 걸 먹을 때는 단것 전용 배가 따로 있는 거야⭐`,
        );
        await maru.say_and_wait(
          `${maru.name}은(는) 큰 입으로 과일 파르페를 먹고 있다.`,
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
  // [번역 완료] o_s_dating
  async o_s_dating(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname}의 손, 따뜻하네.`);
        await era.printAndWait([
          you.get_colored_name(),
          '에게 ',
          maru.get_colored_name(),
          '은(는) 어떤 존재일까?',
        ]);
      },
      () =>
        maru.say_and_wait(
          `가능하면 ${callname}이(가) 계속 나를 의지해 줬으면 하지만.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 완료] o_s_shopping
  async o_s_shopping(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait(`${callname}, 사고 싶은 거 있어?`),
      () =>
        maru.say_and_wait(
          `이 근처에 새 디저트 가게가 생겼대. 이따 들러보자.`,
        ),
    );
    await get_random_entry(buffer)();
  },
};
