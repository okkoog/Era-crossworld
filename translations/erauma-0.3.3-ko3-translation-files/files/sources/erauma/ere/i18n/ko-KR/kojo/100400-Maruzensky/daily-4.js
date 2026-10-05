// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/100400-Maruzensky/daily-4.js
// 대상 함수/속성: good_morning, o_r_fishing, o_r_walking, o_s_arcade, o_s_dating, o_s_drawing, o_s_ktv, o_s_movie, o_s_restaurant, o_s_shopping, out_church, s_a_dating, s_a_tree_hollow, select, select_Self_contempt, select_after_recruit, select_by_wind, select_girls_blue, select_good_end, select_happiness_day, select_sister_annoyance, select_true_end, talk
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
  // [번역 대상] good_morning — 함수/속성 전체 문맥에서 남은 원문을 번역
  good_morning(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say('ん〜、もう少し寝かせて');
          maru.say('昨日、つい漫画を遅くまで読んじゃったの');
          era.print([
            you.get_colored_name(),
            ` は仕方なく${maru.name}を揺り起こし、姿見の前で${maru.sex}の髪を整えてあげた`,
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say('頭がくらくら……こんな姿、後輩には見せられないわね');
          era.print([maru.get_colored_name(), ' は、かなり眠そうだ']);
        });
      }
    } else {
      buffer.push(() => {
        maru.say('今日のトレーニングメニューは何かしら？');
        maru.say([
          maru.sex_code === 1 ? 'ハンサム' : 'お嬢さん',
          'の私は、もう準備できてるわよ',
        ]);
        era.print(`${maru.name}は、はやる顔をしている`);
      });
      buffer.push(() => {
        maru.say('芝を走る感じ、本当に気持ちいいわね');
        maru.say(`あら、${callname} だったの。`);
        era.print([
          you.get_colored_name(),
          ' が時間どおりコースへ着くと、',
          maru.get_colored_name(),
          ' はもう何周も走っていた',
        ]);
      });
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname} おはよう⭐`);
          maru.say('……なんで隣の部屋まで起こしに来たかって？');
          maru.say(
            `起こしてくれる優しい大${
              maru.elder_sibling_sex_title
            }がいるなんて、幸せだと思わない？`,
          );
          era.print([
            maru.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の布団を剥がして、早く身支度するよう急かした',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(() => {
          maru.say(`${callname} には、まだ目覚めてない力が眠ってそうね`);
          maru.say('まだ弱いけど、もうすぐ顔を出すんじゃないかしら');
          era.print([
            maru.get_colored_name(),
            ' は考え込むように ',
            you.get_colored_name(),
            ' を値踏みしている',
          ]);
        });
        buffer.push(() => {
          maru.say(
            `${callname}、困ったことがあったら${
              maru.elder_sibling_sex_title
            }に言ってちょうだい`,
          );
          maru.say(
            'ずっと胸にしまっておくと、万能キーでも錆びた鍵穴には入らないわ',
          );
          era.print([
            maru.get_colored_name(),
            'は心配そうに ',
            you.get_colored_name(),
            ' を見ている',
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say(
            '全力で走っていると、妙な感じがするの。ふわふわして、芝の上に浮かんでいるみたい。',
          );
          maru.say(`……あ、${callname}おはよう`);
          era.print(`芝を走っていた ${maru.name} は、考え込んでいる`);
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
  // [번역 대상] select — 함수/속성 전체 문맥에서 남은 원문을 번역
  select(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      buffer.push(() => {
        maru.say('『この程度じゃ足りない。あなたはもっとできる』');
        maru.say(`あちゃー。${callname} の頼みなら……`);
        era.print([
          maru.get_colored_name(),
          ' は複雑な顔で ',
          you.get_colored_name(),
          ' を見ている',
        ]);
      });
    } else {
      buffer.push(
        () => {
          era.print([
            maru.get_colored_name(),
            ' は、走っているときに当たる風を楽しんでいる。',
          ]);
          maru.say(
            `${callname} に悩みがあるなら、${
              maru.elder_sibling_sex_title
            }に言ってちょうだい`,
          );
          era.print([
            maru.get_colored_name(),
            ' は余裕のある笑顔で ',
            you.get_colored_name(),
            ' を見ている',
          ]);
        },
        () => {
          maru.say(
            `今日のメニューは何？何でも${maru.elder_sibling_sex_title}は余裕よ`,
          );
          era.print(
            `いつの間にか周りに${maru.uma_sex_title}が集まっていた。これが ${
              maru.name
            } の魅力だ。`,
          );
        },
      );
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname}、トレーニングのあと、愛車でドライブしない？`);
          maru.say(
            `夜の冷たい風に当たると、${maru.uma_sex_title}も人も、気分が上がるものよ`,
          );
          era.print([
            maru.get_colored_name(),
            ' は体ごと ',
            you.get_colored_name(),
            ' の腕に寄りかかり、いつの間にか尻尾も ',
            you.get_colored_name(),
            ' の太ももに巻きついていた',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(
          () => {
            maru.say(
              'ん〜、四季の風はそれぞれ違うけど、選ぶなら春風がいちばん好き。',
            );
            maru.say(`${callname} は、どの季節の風が好きかしら？`);
            era.print([
              maru.get_colored_name(),
              ' は微笑んで ',
              you.get_colored_name(),
              ' を見ている',
            ]);
          },
          () => {
            maru.say(
              '『春には魔力がある。「もっと良い自分になりたい」と思わせる魔力』',
            );
            maru.say(`${callname} はどう思う？`);
            era.print([
              'ストレッチの前、',
              maru.get_colored_name(),
              ' との雑談で',
              maru.sex,
              'が ',
              you.get_colored_name(),
              ' にそう聞いた',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          maru.say(
            `風の魅力を、私に憧れる後輩たちへ。希望の風の化身、${maru.name}よ〜`,
          );
          maru.say(`ふふ、${callname}、この台詞どうかしら？`);
          era.print(`笑顔の${maru.name}は、機嫌よく尻尾を揺らしている。`);
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
  // [번역 대상] select_after_recruit — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_after_recruit(maru, you, callname) {
    maru.say(
      `ハイ〜${you.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}、私は ${maru.name} よ。`,
    );
    maru.say(
      `レース場で、憧れてくれる後輩たちに${maru.elder_sibling_sex_title}の格好いい背中を見せたいわね。`,
    );
    maru.say(
      `それにしても ${callname}、かわいいわね。夏が人に与える感じそのもの。`,
    );
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  // [번역 대상] select_sister_annoyance — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_sister_annoyance(maru) {
    maru.say('もっと大きな舞台で走ると、気持ちまでキラキラするわね♪');
    maru.say(`何かあったら、必ず${maru.elder_sibling_sex_title}に相談してね？`);
    maru.say('……私たちの間に秘密がなければいいのに。');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_girls_blue — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_girls_blue(maru, callname) {
    maru.say('膝が、前よりずっと痛い。', true);
    maru.say('あとどれくらい持つのかしら。', true);
    maru.say(`少なくとも、${callname} には悟られないように。`, true);
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  // [번역 대상] select_true_end — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_true_end(maru) {
    maru.say('同じ後悔を、二度としないために。');
    maru.say('少なくとも、迷っている後輩たちに、参考になる道を残すために。');
    maru.say('これからも頑張らないと！');
    maru.say('こうして、かっかかっと Back step よ！');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_good_end — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_good_end(maru, you, callname) {
    maru.say(
      `苦しさも、孤独も、${callname} と一緒なら、たいしたものじゃないみたい。`,
    );
    maru.say(
      `ウマ娘の道で${callname}に出会えたのは、一生の幸運かもしれないわね。`,
    );
    maru.say('ずっと、助けてくれてありがとう。');
    maru.say('これからも一緒に頑張らないとね？');
    maru.say(`ん、${callname} に負荷かけすぎかしら？`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {number} wind マルゼンスキー育成用変数 wind の値
   * @returns {boolean} wind が特定値なら本文を出したので true、そうでなければ続行
   */
  // [번역 대상] select_by_wind — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_by_wind(maru, you, callname, wind) {
    switch (wind) {
      case 1:
        maru.say(`これからもよろしくね。${callname}♪`);
        break;
      case 5:
        maru.say(
          `これは${maru.sex_code === 1 ? 'ハンサム' : 'お嬢さん'}の私への？`,
        );
        maru.say(`じゃあ、${callname}、ありがとう♪`);
        maru.say('ふふ〜、きれいね。');
        break;
      case 10:
        maru.say(
          '芝の上を何度走っても、あの頃の感じが戻らない。生きてる甲斐がないわね。',
        );
        maru.say('……');
        maru.say('風が止んだ。');
        break;
      case 15:
        maru.say(`トレセンのあの夜、芝で走っていた${maru.uma_sex_title}たち。`);
        maru.say(`支えてくれる後輩たち、そしてそばにいる${callname}。`);
        maru.say('心から、幸せだと思ったわ。');
        break;
      case 20:
        maru.say('空と、芝と、徘徊する私たち。');
        maru.say('懐かしい湿った夏と、乾いた秋。');
        maru.say(
          `これからも一緒に歩いていきましょう？${you.sex_code === 1 ? 'ト・レ・ー・ナ・ー・くん' : 'ト・レ・ー・ナ・ー・ちゃん'}♪`,
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
  // [번역 대상] select_Self_contempt — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_Self_contempt(maru, callname) {
    maru.say(`どうして、そんなに沈んでるの？`);
    maru.say('早く元気出して！');
    maru.say(`私はずっと ${callname} を待ってるんだから！`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  // [번역 대상] select_happiness_day — 함수/속성 전체 문맥에서 남은 원문을 번역
  select_happiness_day(maru, callname) {
    maru.say(`真っ青な空、新しい芝。なんだか懐かしい感じがするわね。`);
    maru.say(`あら、${callname}、いつ来たの。`);
    maru.say('じゃあ、いい一日を一緒に楽しみましょう。');
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
  // [번역 대상] talk — 함수/속성 전체 문맥에서 남은 원문을 번역
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
                  maru.sex_code === 1 ? 'ハンサム' : 'お嬢さん'
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
  // [번역 대상] s_a_tree_hollow — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] s_a_dating — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] o_r_fishing — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] o_r_walking — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] o_s_arcade — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] o_s_drawing — 함수/속성 전체 문맥에서 남은 원문을 번역
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
          ' を見ている',
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
  // [번역 대상] o_s_ktv — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] o_s_movie — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] out_church — 함수/속성 전체 문맥에서 남은 원문을 번역
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
        maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
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
  // [번역 대상] o_s_restaurant — 함수/속성 전체 문맥에서 남은 원문을 번역
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
          ' は ',
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
  // [번역 대상] o_s_dating — 함수/속성 전체 문맥에서 남은 원문을 번역
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
  // [번역 대상] o_s_shopping — 함수/속성 전체 문맥에서 남은 원문을 번역
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
