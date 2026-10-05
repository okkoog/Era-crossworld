// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file トウカイテイオー - 日常
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {number} b_escape 地下室からの脱出方法
   */
  // [번역 대상] good_morning
  good_morning(teio, you, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('그렇구나…… 하아.');
          } else {
            teio.say('테이오 님의 트레이너…… 하하.');
          }
          break;
        case escape_enum.beat:
          teio.say('정말…… 미안해.');
          era.print([
            teio.sex,
            '가 고개를 숙여 사과하고, 이후 말과 행동으로 진심을 다해 미안함을 표현했다.',
          ]);
          era.print([
            you.get_colored_name(),
            '은(는) 받아들였다. 하지만 ',
            you.get_colored_name(),
            '은(는) 최근 담당이 스태미나 트레이닝에 너무 몰두하는 게 아닌가 하는 기분이 들었다……',
          ]);
          break;
        case escape_enum.strike:
          teio.say('정말…… 미안해.');
          era.print([
            teio.sex,
            '가 고개를 숙여 사과하고, 이후 말과 행동으로 진심을 다해 미안함을 표현했다.',
          ]);
          era.print([
            you.get_colored_name(),
            '은(는) 받아들였다. 하지만 ',
            you.get_colored_name(),
            '은(는) 요즘 어둠 속에서 누군가의 시선이 계속 자신을 쫓는 듯한 기분이 들었다……',
          ]);
      }
    } else if (era.get('status:0:熬夜') > 0) {
      era.print([
        teio.get_colored_name(),
        {
          color: teio.color,
          content:
            '「あ……おはよ、トレーナー。なに、ボク昨日は夜更かししてないよ」',
        },
        `이(가) 이름을 부르는 소리를 듣고 대화를 마치더니 이쪽으로 달려왔다.`,
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => teio.say('「아…… 좋은 아침이야 트레이너. 뭐? 나 어제 밤 안샜어!」'),
        () => teio.say(' (하품)'),
        () => teio.say('오늘 훈련은…… 이런 것들이구나! 제대로 해낼게!'),
      );
      if (era.get('love:3') >= 50) {
        buffer.push(() =>
          era.print([
            teio.get_colored_name(),
            ` は他の${teio.uma_sex_title}と話していたらしい。`,
            you.get_colored_name(),
            `が${teio.sex}の名を呼ぶと、会話を切り上げて駆け寄ってきた。`,
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} b_escape 地下室からの脱出方法
   */
  select(teio, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('트레이너…… 아아.');
          } else {
            teio.say([callname, '도 예전의 나보다 더 장난꾸러기가 된 것 같네.']);
          }
          break;
        case escape_enum.beat:
        case escape_enum.strike:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('내가 또 당신을…… 그리고 이 모든 것을 저버렸어.');
            era.print([
              teio.sex,
              '가 두 눈을 감고 주먹을 꽉 쥐었다. 손바닥이 붉게 물들어 금방이라도 피가 배어 나올 것 같았다.',
            ]);
          } else {
            teio.say('아, 나는……');
            teio.say('미안해, 트레이너.');
            era.print([teio.sex, '가 예전보다 훨씬 고분고분해진 듯하다.']);
          }
      }
    } else {
      teio.say(
        Math.random() < 0.5
          ? `으음~ 무적의 테이오 님께 무슨 용건이라도?`
          : `흐흥, 나는 언제든지 준비됐어!`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] office_study
  async office_study(teio, you) {
    await you.say_and_wait('무적의 테이오 님에게도 모르는 게 다 있네.');
    await era.printAndWait(
      `${you.name} が少しからかうと、${teio.sex}は唇を尖らせて ${you.name} をじっと睨む。咳払いしてから、まともに講義を始めた。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] talk
  async talk(teio, you) {
    if (era.get('base:3:体力') < era.get('maxbase:3:体力') * 0.45) {
      if (Math.random() < 0.5) {
        await teio.say_and_wait(
          '아…… 무적의 테이오 님도 지칠 때가 있구나아……',
        );
      } else {
        await era.printAndWait([
          teio.get_colored_name(),
          '가 고개를 들고 멍한 눈으로 ',
          you.get_colored_name(),
          `를 바라본다. 이제 ${teio.sex}를 좀 쉬게 해줄 때인 것 같다……`,
        ]);
      }
    } else {
      switch (era.get('cflag:3:干劲')) {
        case -2:
          await era.printAndWait([
            teio.get_colored_name(),
            ` は焦って足踏みし、全身の毛並みまで逆立っている……今は${teio.sex}に仕事をさせないほうがいい`,
          ]);
          break;
        case -1:
          await era.printAndWait([
            teio.get_colored_name(),
            '의 입가에서 미소가 사라졌다…… 분위기가 좀 좋지 않아 보인다.',
          ]);
          break;
        case 0:
          await era.printAndWait([
            teio.get_colored_name(),
            '의 기운이 평소 같지 않다. 활기차 보이지만 어딘가 허전한 느낌이다.',
          ]);
          break;
        case 1:
          await era.printAndWait([
            teio.get_colored_name(),
            '가 운동장에서 가볍게 뛰며 몸을 풀고 있다. 꽤 의욕이 넘쳐 보인다.',
          ]);
          break;
        case 2:
          await era.printAndWait([
            teio.get_colored_name(),
            '가 신나서 제자리 높이뛰기를 하고 있다. 생기 넘치는 모습이 마치 ',
            you.get_colored_name(),
            '을(를) 초대하는 듯하다.',
          ]);
      }
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async office_gift(teio, callname) {
    await teio.say_and_wait([
      '엣! 이거 ',
      callname,
      '가 나한테 주는 선물이야? 지금 열어봐도 돼? 음…… 돌아갈 때까지 기다리라고? 알았어, 그래도 정말 고마워!',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] office_cook
  async office_cook(teio, you) {
    await teio.say_and_wait('무적의 테이오 님은…… 응, 이런 것도 잘한다고!');
    await era.printAndWait(
      `${you.name}은(는) ${teio.sex}의 서툰 요리 솜씨를 보고 함께 돕기로 했다. 곧이어 보기 좋고 향기로운 음식들이 식탁 위에 가득 차려졌다.`,
    );
    await era.printAndWait([
      teio.get_colored_name(),
      ' / ',
      you.get_colored_name(),
      '「',
      { content: '잘 ', color: teio.color },
      '(잘) ',
      { content: '먹겠습니다!', color: teio.color },
      '」',
    ]);
    await era.printAndWait(
      `微笑み交わしてから、ふたりは自分たちで作った味に顔を埋める。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] office_rest
  async office_rest(teio, you) {
    if (era.get('relation:3:0') > 150) {
      await you.say_and_wait(`자, 일어나렴, 테이오 ${teio.adult_sex_title}.`);
      await teio.say_and_wait(`으응—— 히히~`);
      await era.printAndWait(
        `${teio.teen_sex_title}の体が ${you.name} のうえへ倒れ込み、ふたりともソファへ沈む。`,
      );
      await era.printAndWait(
        `${you.name}의 목덜미를 간지럽히는 숨결을 느끼며, ${you.name}은 담당 ${teio.uma_sex_title}의 등과 꼬리털을 조심스럽게 쓰다듬어 주었다.`,
      );
    } else {
      await era.printAndWait(
        `테이오가 드물게 조용해졌다. ${you.name}은(는) ${teio.sex}와 함께 소파에 앉아 한가로운 시간을 공유했다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_game(teio, you) {
    await teio.say_and_wait('아앗! 무적의 테이오 님은 지지 않아!');
    await era.printAndWait(
      `화면 속 캐릭터가 조종자의 모습처럼 정신없이 움직이기 시작했다. ${you.name}은(는) 옆에서 온 신경을 집중하고 있는 ${teio.sex}를 힐끗 바라보았다. 어린 ${teio.uma_sex_title}가 진지하게 컨트롤러를 조작하느라 이마에 땀방울까지 맺힌 것을 보고, ${you.name}은(는) 미소를 지으며 다시 게임 화면으로 시선을 돌렸다.`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  // [번역 대상] s_a_tree_hollow
  async s_a_tree_hollow(teio) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('今のボクは……はは、ははは、うっ——');
    } else {
      await teio.say_and_wait(
        'くっ……勝ちたい、勝ちたいんだ！ボクはテイオーだ！無敵なんだ！絶対に……',
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] s_a_dating
  async s_a_dating(teio, you) {
    await era.printAndWait(
      `学園のなかで……これは大丈夫なのか？${you.name} の胸に疑問が湧く。だがそばに張りついているテイオーは、顔がやけに赤いだけで、様子は崩れていない。`,
    );
    await era.printAndWait(
      `${teio.sex}のその顔を見て、${you.name} はかえって安心し、他人の視線など気にせず、恋人同士のように${teio.sex}と戯れ始めた。`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  // [번역 대상] s_r_lunch
  async s_r_lunch(teio) {
    await teio.say_and_wait('ここでご飯、意外といい感じだね！');
    await era.printAndWait(
      '弁当を広げた場所は……「天井」のうえ？ ふたりで、いい昼を味わう。',
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 대상] o_r_fishing
  async o_r_fishing(teio, you, callname) {
    await teio.say_and_wait([callname, '、こっち！']);
    await era.printAndWait(
      `${teio.sex}はそう言いながら靴を脱ぎ、素足で浅瀬へ踏み込む。潤んだ白い両足が水のなかで、いっそう愛らしい。`,
    );
    await era.printAndWait(
      `残念ながら、これだけはしゃげば魚は逃げる。${you.name} は呆れて溜息をつき、${teio.sex}の隣に座って釣り支度を始めた。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] o_r_walking
  async o_r_walking(teio, you) {
    await teio.say_and_wait(`川沿いを歩くの～気持ちいい！`);
    await era.printAndWait(
      `${you.name} の担当は鼻歌を歌いながら、踊るような歩幅を見せる。また来よう、と ${you.name} は${teio.sex}の楽しそうな顔を見て思う。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] o_s_arcade
  async o_s_arcade(teio, you) {
    await era.printAndWait(
      `${you.name} と ${teio.name} はゲームセンターで思いきり遊び、帰る前に余ったコインをクレーンゲームで『浪費』することにした。`,
    );
    await era.printAndWait(
      `そうは言っても、ふたりともかなり真剣にスティックを操作し、何度も考えてからボタンを押す……`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 대상] o_s_drawing
  async o_s_drawing(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '……無敵のテイオー運、分けてあげる！']);
      await era.printAndWait(
        `${teio.sex}は ${you.name} の体に寄り、片腕を掴む。温かく弾力のある感触と、いい匂いが同時に押し寄せ、${you.name} は少しぎこちなくもう一方の手を箱へ入れる……`,
      );
    } else {
      await teio.say_and_wait(
        'うん……運だって、無敵のテイオーさまは負けないよ！たぶん……',
      );
      await era.printAndWait(
        `${teio.sex}が ${you.name} を見る。${you.name} が頷くと、${teio.sex} は手を箱へ入れた……`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 대상] o_s_ktv
  async o_s_ktv(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '！ボクの歌、どうだった！']);
      await era.printAndWait(
        `${you.name} は唇まで持っていった水杯を慌てて置き、満面の笑みの担当へ思案する顔を作る。さっき${teio.sex}は一心に『恋はダービー☆』を歌い切り、今も頬の赤みが残っている。`,
      );
      await era.printAndWait(
        `${you.name} は腹を探って褒め言葉を並べ、${teio.sex}は ${you.name} のその様子を見て、さらに嬉しそうに笑った。`,
      );
    } else {
      await era.printAndWait(
        `気づくとカラオケ店の前にいた。${teio.sex}の強い希望で中へ入り、しばらく楽しむ——ただし歌うのはほとんど${teio.sex}だった。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] o_s_movie
  async o_s_movie(teio, you) {
    if (era.get('relation:3:0') > 225) {
      await era.printAndWait(
        `テイオーは ${you.name} の左腕に絡み、つま先立ちで耳元に作品名を囁く。`,
      );
      await era.printAndWait(
        `${you.name} が見ると甘ったるい恋愛映画で、少しおかしくなり、右手でテイオーの頭を撫でようとして、${teio.sex}の恥ずかしさと決意の混じった目とぶつかる。`,
      );
      await era.printAndWait('うん……なら、恋人同士みたいに見に行こう。');
    } else if (Math.random() < 0.5) {
      await era.printAndWait(
        `テイオーの強い希望で、${you.name} は『挑戦しがいのあるホラー』を選んだ。`,
      );
      await era.printAndWait(
        `案の定、山場になるたび小さな${teio.uma_sex_title}は耐えきれず、${you.name} の${teio.sex}側の腕は、感覚がなくなるまで強く掴まれている……`,
      );
    } else {
      await era.printAndWait(
        `${you.name} はテイオーと家族向けのコメディを見て、内容に思わず笑った。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} dice おみくじの出目。0-1の小数で、小さいほど良い
   */
  // [번역 대상] o_c_pray
  async o_c_pray(teio, you, callname, dice) {
    await teio.say_and_wait([
      callname,
      '～はやくはやく、一緒におみくじ引こう！',
    ]);
    await era.printAndWait(
      `小さな${teio.uma_sex_title}が ${you.name} の手を引き、社へ走る。${you.name} は慌てて大股でついていく。目的地に着くころ、${you.name} はすでに汗だくだ……`,
    );
    await era.printAndWait(
      `柔らかい感触が手から離れ、${teio.name} は筒を掲げ、目を細めて笑いながらでたらめに振る——`,
    );
    await teio.say_and_wait('えへへ——はあっ！');
    await era.printAndWait(
      `子供のようなはしゃぎのあと、一本の竹籤が筒から飛び出す。${you.name} は手を上げて指で挟み、目を凝らす。`,
    );
    if (dice < 0.2) {
      await era.printAndWait('（大吉）');
      if (era.get(`relation:3:0`) > 225) {
        await era.printAndWait(
          `${you.name} は歩み寄り、テイオーへ竹籤を振る。${teio.sex}はそれを奪い取り、驚喜の顔をして ${you.name} へ飛びつき、腰を抱いた。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} は大吉だと声に出して読む。テイオーの耳が嬉しそうに跳ね、${teio.sex}は一歩で前へ出て、${you.name} の竹籤を握る手を掴み、中身を確かめてからくすくす笑う。`,
        );
      }
    } else if (dice < 0.4) {
      await era.printAndWait('（中吉）');
      await era.printAndWait(
        `${you.name} が文字を読むと、テイオーはその場で胸を張り、腰に手を当て、自分の振り方を自慢しているようだ。`,
      );
    } else if (dice < 0.8) {
      await era.printAndWait('（小吉）');
      await era.printAndWait(
        `${you.name} はそれをテイオーへ渡し、${teio.sex}は嬉しそうに笑った。`,
      );
    } else {
      await era.printAndWait('（凶）');
      await era.printAndWait(
        `${you.name} は一瞬迷い、声に出さなかった。テイオーは何かを察し、気まずい顔でその場に立ち、ふたりはこの件を忘れることにした。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 대상] good_night_normal
  async good_night_normal(teio, you, callname) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${teio.name} を学生寮の入口まで送る。`,
    );
    teio.say(['また明日ね！', callname, '！']);
    era.print(
      `疲れる一日だったのに、${teio.sex}は相変わらず元気だ。${you.name} はそう思いながら、${teio.sex}と手を振って別れる。`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] gn_sex_intro
  gn_sex_intro(teio, you) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${teio.name} を学生寮の入口まで送る。`,
    );
    era.print(
      'いつもどおり別れようとしたところで、なぜか双方の動きが止まり、短い沈黙が落ちる……',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: 'ん、', color: teio.color },
      'うん——」',
    ]);
    era.print(
      `沈黙のあと同時に声が出て、また気まずい。だが少し滑稽でもあり、${teio.uma_sex_title}の眉目に笑みが浮かび、${teio.sex}は大胆になって、${you.name} より先に口を開く。`,
    );
    teio.say('あの、外泊届は出してあるから、今日は……');
  },
  // [번역 대상] gn_sex_confirm
  gn_sex_confirm: (teio, you) => [
    '声が徐々に細くなる。血が頬へ上り、',
    you.get_colored_name(),
    ' は',
    teio.sex,
    'のその顔に我慢できなくなり、決めた——',
  ],
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} check 求愛判定。大成功なら拒否しても逆に押し切られる
   */
  // [번역 대상] gn_sex_reject
  async gn_sex_reject(teio, you, callname, check) {
    if (check !== 2) {
      return;
    }
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('ん……そうなんだ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、なお胸を張って自分を見ているのに、目だけが沈んでいく',
        teio.sex,
        'を見て、胸が痛み、片手を',
        teio.sex,
        'の頭へ伸ばす。',
      ]);
      await era.printAndWait([
        'だが突然、',
        teio.sex,
        'が手を上げ、筍のような五本の指が ',
        you.get_colored_name(),
        ' の掌をしっかりと掴む。',
        you.get_colored_name(),
        ' は力を入れて引き抜こうとするが、びくともしない——',
      ]);
      await teio.say_and_wait([callname, '……']);
      await era.printAndWait([
        teio.sex,
        'はますます ',
        you.get_colored_name(),
        ' へ近づく。',
      ]);
      await teio.say_and_wait('ボクは……どこでも、離したくない、離さないよ。');
    } else {
      await teio.say_and_wait(
        'そ——う——な——の？ じゃあ行こ！準備はできてるよ、場所もね！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が何か言い出すより先に、体力で勝る',
        teio.uma_sex_title,
        'に風のように連れていかれた……今この場では、',
        you.get_colored_name(),
        ' の意見は重要ではないのかもしれない。',
        teio.get_colored_name(),
        ' はただ、これから何が起きるかを ',
        you.get_colored_name(),
        ' に知らせただけだ。',
      ]);
    }
  },
  // [번역 대상] cl_new_year
  cl_new_year: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        'お正月だよ！',
        callname,
        '、準備できた？なに遊ぶ？今日は一緒に夜通しはしゃごう！',
      ]);
      await era.printAndWait(
        `${you.name} は慌てて${teio.sex}に声を小さくするよう示す。このまま叫ばせていたら、自分の評判は生徒を誘う変態教師になりかねない。世話が焼ける子だ。`,
      );
      await era.printAndWait(
        `だが……担当${teio.uma_sex_title}がそばで嬉しそうに跳ね、活力に満ちているのを見ると、${you.name} は一年の忙しさも報われる気がした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] cl_valentine
  cl_valentine: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('ハチミツハチミツ～えへへ～');
      await era.printAndWait(
        `${you.name} が机から顔を上げると、両手を後ろに回し、にこにこと ${you.name} を見ている${teio.uma_sex_title}${teio.teen_sex_title}がいた。`,
      );
      await teio.say_and_wait([
        callname,
        '～これ、ボクが作ったプレゼントだよ～',
      ]);
      await era.printAndWait(
        `${teio.sex}が手を前へ出す。あまり洗練されていないが、心のこもった包装の小さな箱が ${you.name} の眼前に現れる。`,
      );
      era.print([you.get_colored_name(), '——']);
      era.printButton('贈り物を受け取る', 1);
      era.printButton(`${teio.sex}ごと食べてしまう`, 2, {
        disabled: era.get('love:3') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は受け取り、礼を言い、${teio.sex}の前で慎重に包装を開け、中のチョコレートを口にする。`,
        );
        await era.printAndWait(
          `担当した生徒や同僚から届いた七、八個のチョコレートを片付けてから、${you.name} は執務机の向こうに座り、仕事の準備をする。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} は${teio.sex}の手から箱を受け取るが、急いで食べず、もう一方の手でゆっくり包装を解きながら、${teio.sex}の手を握ったままにする。`,
        );
        await era.printAndWait(
          `${teio.sex}の顔が耳まで赤くなったところで、${you.name} は突然${teio.sex}を懐へ引き寄せ、チョコレートを含んだまま${teio.sex}の唇へ口づける。`,
        );
        await era.printAndWait(
          `ハチミツとカカオの甘さが、${teio.teen_sex_title}の小さな舌へ絡む……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] cl_temple_fair
  cl_temple_fair: (() => {
    const title = '縁日';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} がメッセージで誘うと、すぐに ${teio.name} から返事が来た。`,
      );
      await teio.say_and_wait(`トレ——ナー——`);
      await era.printAndWait(
        `${teio.teen_sex_title}は、幼さをすべて可愛さへ変え、どこか色気も匂わせる浴衣に着替え、${you.name} の前で一回転する。`,
      );
      await teio.say_and_wait(`この格好、どう？`);
      era.printButton('「うん……」', 1);
      await era.input();
      await era.printAndWait(`答えにくい。`);
      await era.printAndWait(`胸の奥で、何かがプツリと切れた気がする。`);
      await era.printAndWait(
        `小柄な${teio.teen_sex_title}が着ると、まだ育ちきっていないが、それでも充分に色気のある体つきが透けて見える。`,
      );
      await era.printAndWait(
        `いちばん上の純白の耳当てが、小さな${teio.uma_sex_title}を純情な生徒だと指名しているようだ。その下、ゆったりした布は曲線を強調するほど体に密着せず、脇と側腹を透けさせている。`,
      );
      await era.printAndWait(
        `普段は隠れている、滑らかで白い敏感な肌が、今は ${you.name} の視線にさらされている。${you.name} が望めば、手を伸ばして感触を確かめることすらできる……`,
      );
      await teio.say_and_wait(`んっ？`);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        teio.teen_sex_title,
        'の美しさに沈み、しばらく抜けられない。',
      ]);
      era.printButton('我慢できない！', 1, {
        disabled: era.get('love:3') < 75,
      });
      era.printButton('鋼の意志！', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は大きく息を吸い、重くなった体で${teio.uma_sex_title}のそばへ歩み、大きな手を伸ばす——`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] cl_halloween
  cl_halloween: (() => {
    const title = 'ハロウィン';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        '今日の仕事を片付け、執務室を整えた ',
        you.get_colored_name(),
        ' は足を休め、学園の鐘を待つ。',
      ]);
      await era.printAndWait('今日は、何かが起きる。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、定められた運命を待つ。',
      ]);
      era.println();
      await era.printAndWait('「ドン——、トントントン、ドン——」');
      await era.printAndWait([
        '奇妙なノックが届く。',
        you.get_colored_name(),
        ' は息を潜め、扉の陰へ回り、勢いで開ける——',
      ]);
      era.println();
      await era.printAndWait('赤い塊が飛び込む。');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は音もなく飛びかかる。',
      ]);
      era.println();
      await teio.say_and_wait('わあ！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の奇襲は決まらず、',
        teio.sex,
        'は間に合って振り返り、ちょうど ',
        you.get_colored_name(),
        ' と抱き合うようにぶつかる。',
      ]);
      era.println();
      await teio.say_and_wait('テイオーさまは、驚かされないよ！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の担当は腰に手を当て、赤いずきん姿で、片手に籠、もう片方で ',
        you.get_colored_name(),
        ' を掴みに来る。',
      ]);
      era.println();
      await teio.say_and_wait('悪い大人、ボクと遊ぼ！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は連呼して承知し、約束どおり',
        teio.sex,
        'と外出した……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] cl_christmas
  cl_christmas: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        'クリスマス！うん、',
        callname,
        ' はサンタになってプレゼントくれるか、ボクと夜通し遊ぶか、どっちかだよ！',
      ]);
      await era.printAndWait(
        `${you.name} は抗議するが、この気力旺盛な担当には、どうやら敵わない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async load_talk(teio, callname) {
    await teio.say_and_wait([callname, '……이 아이를 버리겠다고? 왜……?']);
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: get_gradient_color(teio.color, '#ff0000', 0.5),
          content:
            '「어째서…… 어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: 'red',
          content: '「어째서…… 어째서어——!」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '3rem' },
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 대상] end_talk
  async end_talk(teio, you) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:3') >= 75) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '一緒に退場するときが、来ちゃったみたい……やっぱり、ちょっと悔しいな。',
          );
        } else {
          await teio.say_and_wait(
            'トレーナー……どんなことがあっても、ボクはずっとそう呼ぶよ。',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait([
          '言葉はない。',
          teio.sex,
          'は最後に ',
          you.get_colored_name(),
          ' を一目見る。青黒い瞳には、涙でも洗い流せない汚れが満ちていた。',
        ]);
      } else {
        await teio.say_and_wait(
          'いつから、ふたりの進む道がずれ始めたんだろう……？',
        );
      }
    } else {
      if (era.get('love:3') >= 50) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            'まさか、こんな結末……だめ！キミもずっとボクのそばにいて！人がどう見ても、キミはボクのトレーナーなんだから！',
          );
        } else {
          await teio.say_and_wait(
            'ひえっ——ば、バレた？じゃ、じゃあこれから、コッソリ……責任、取ってよね！',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await teio.say_and_wait('いつから、お互いの目が逸れたんだろう……');
      } else {
        await teio.say_and_wait('……解約、同意する。');
      }
    }
  },
};
