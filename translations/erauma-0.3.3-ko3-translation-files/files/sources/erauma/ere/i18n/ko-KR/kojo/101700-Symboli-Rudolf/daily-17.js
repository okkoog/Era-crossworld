// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file 심볼리 루돌프 - 일상
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/daily-17.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] good_morning_emperor
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say("시간을 낭비하지 마라."),
      () => emperor.say("실수를 범하지 마라."),
      () => emperor.say("짐을 실망시키지 마라."),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => emperor.say("잠든 시간이 점점 줄어드는군. 좋다."),
        () => emperor.say("광대여, 내 상태가 좋을 때 사냥을 더 많이 준비해라!"),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => emperor.say('나약함을 지우고, 황제의 이름을 멀리까지 떨쳐라!'),
        () =>
          emperor.say(`누가 짐의 머릿속에서 소란을 피우는가. ${emperor.sex}을(를) 닥치게 하라.`),
      );
    }
    get_random_entry(buffer)();
  },
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}？`),
      () => luna.say("썰렁한 농담이 떠오르지 않네..."),
      () => luna.say("오늘 일정은 어떻게 돼?"),
    ];
    get_random_entry(buffer)();
  },
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say("네놈이냐, 광대여."),
      () => emperor.say("짐은 지금 기분이 좋다, 흥을 깨지 마라."),
      () =>
        emperor.say(
          "만물에는 시작과 끝이 있는 법. 설령 내가 결국 지게 되더라도 후배들에게 향기를 남기리라.",
        ),
    ];
    get_random_entry(buffer)();
  },
  async office_study_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          "당신이 심리학 책을 볼 줄은 몰랐는데. 나도 좀 가르쳐줄래?",
        ),
      () =>
        luna.say_and_wait(
          "트레이너 면허 시험 문제 중 몇 개는 내가 출제한 거야.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait("짐은 실력 없는 교수를 필요로 하지 않는다."),
      () => emperor.say_and_wait("어느 시대든 현자는 마땅히 존경받아야 하는 법."),
    ];
    await get_random_entry(buffer)();
  },
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait("나도 한때는 달리는 것을 참 좋아했었지..."),
      () => luna.say_and_wait("우리의 공통된 이상을 위해서라면, 난 물러서지 않아."),
    ];
    await get_random_entry(buffer)();
  },
  async office_prepare_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait("지금 이 순간, 피가 끓어오르는구나!"),
      () =>
        emperor.say_and_wait(
          "자, 영웅과 용자들의 발버둥을 내게 보여다오!!!",
        ),
    ];
    await get_random_entry(buffer)();
  },
  // [번역 대상] talk_luna
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait("난 아직 더 할 수 있어!"),
        () =>
          luna.say_and_wait(
            "훈련을 한 세션 더 추가하자. 내 실력은 아직 이정도가 아니야.",
          ),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '컨디션은 『매우』 좋습니다. 훈련을 향한 의욕도 『고조』되고 있어요! 후후……',
              ),
            () =>
              luna.say_and_wait('평소보다 컨디션이 좋아요. 좋은 달리기를 할 수 있을 것 같습니다.'),
          );
          break;
        case 1:
          buffer.push(
            () => luna.say_and_wait('매일의 축적이 중요합니다.'),
            () =>
              luna.say_and_wait(
                '훈련이 끝나면 함께 산책이라도…… 시간이 난다면 말이에요.',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              luna.say_and_wait(
                '완벽한 컨디션이라고 할 수는 없지만, 약한 소리를 할 수는 없어요.',
              ),
            () => luna.say_and_wait('한 걸음씩 나아가죠. 저는 견뎌낼게요.'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                '승부복을 입는 것은 신분을 전환하는 일이죠. 다시 황제가 되어야 합니다……',
              ),
            () =>
              luna.say_and_wait(
                '으음…… 아무래도 컨디션이 좋지 않네요. 하지만 이 정도 피로로 약한 소리를 할 수는 없습니다.',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '곤란하네요…… 몸이 무거워요. 그래도 단 하루도 헛되이 보내고 싶지는 않아서……',
              ),
            () =>
              luna.say_and_wait(
                '평소의 감각을 잡을 수가 없네요…… 이대로는 안 된다는 걸 알고 있는데도, 그래도……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  // [번역 대상] talk_emperor
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait("피로가 쌓이는 것이 느껴지는군."),
        () => emperor.say_and_wait("네놈은 믿을 필요 없다, 그저 따르기만 해라."),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('출정의 때가 왔다.'),
            () => emperor.say_and_wait('황제의 이름을 하늘까지 울려 퍼뜨려라!'),
          );
          break;
        case 1:
          buffer.push(
            () => emperor.say_and_wait('제국은 벽돌 한 장, 기와 한 장에서 시작된다.'),
            () =>
              emperor.say_and_wait('음……? 광대여, 우스갯소리 하나라도 들려보아라.'),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('흥이 나지 않는군.'),
            () => emperor.say_and_wait('짐의 흥을 깨지 마라.'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('흥……'),
            () => emperor.say_and_wait('짐의 시야에서 사라져라.'),
          );
          break;
        case -2:
          buffer.push(
            () => emperor.say_and_wait('광대여, 모든 것을 망쳐버렸구나?'),
            () => emperor.say_and_wait('짐에게 무례를 범하지 마라.'),
          );
      }
    }
    await get_random_entry(buffer)();
  },

  // [번역 대상] good_morning_luna
  good_morning_luna(luna, you) {
    const buffer = [
      () =>
        luna.say(
          '누가 생각이나 했을까요. 우리가 이런 관계가 될 줄은…… 이제 되돌아갈 수 없네요.',
        ),
      () =>
        luna.say(
          '저를 믿고 기대해주는 사람들을…… 그 마음을 나무랄 수는 없어요.',
        ),
      () =>
        luna.say(
          '당신이 곁에 있어주는 덕분에, 허황되다고 비웃음받는 에덴에도 한 걸음씩 가까워지고 있어요.',
        ),
      () =>
        luna.say(
          '상대의 입장이 되어 생각하라고요? 제 입장을 이해할 수 있는 사람은 없다고 생각합니다.',
        ),
      () =>
        luna.say(
          '학생회에 바라는 점은 종이에 적어서 건네주세요. 가능한 한 모두의 바람을 이루겠습니다.',
        ),
      () =>
        luna.say(
          '승부복이 멋지다고요? ……감옥을 멋지다고 부르고 싶지는 않네요.',
        ),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => luna.say('요즘 가끔 머리가 너무 아파 견딜 수가 없어요.'),
        () => luna.say('잠드는 시간이 점점 늘고 있지는 않나요?'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () =>
          luna.say(
            '제 시야에서 벗어나지 말아주세요! 당신의 기척이 사라져버릴 것 같아서……!',
          ),
        () =>
          luna.say(
            `${you.actual_name}, 아직 루나를 보고 있어주나요? 저는 이제…… 제가 아니게 될 것 같아서——`,
          ),
      );
    }
    get_random_entry(buffer)();
  },

  // [번역 대상] load_talk
  async load_talk(chara17, you, is_good_end, i_emperor) {
    if (is_good_end) {
      await chara17.say_and_wait(
        '태양과 달이 앞으로도 당신 곁에 함께하기를',
      );
      await chara17.say_and_wait(
        '……하지만 황제를, 그리고 루나를 잊지 말아주세요',
      );
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        '은(는) 뒤돌아보며 떨고 있다',
      ]);
      await chara17.say_and_wait('조심하세요…… 다시 만나요(흐느낌)');
    } else if (i_emperor) {
      await chara17.say_and_wait('광대여, 쓸데없는 일을 몇 번이나 반복할 셈이지?');
    } else if (era.get('love:17') >= 75) {
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        '은(는) 입술을 살짝 열었지만 목소리는 나오지 않는다',
      ]);
      await chara17.say_and_wait('——！');
      await chara17.say_and_wait('——가지 말아주세요……');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        '은(는) 흐느끼고 있다. 하지만 ',
        you.get_colored_name(),
        '은(는) 이미 멀어지고 있다……',
      ]);
      await chara17.say_and_wait(
        '약속했잖아요…… 무슨 일이 있어도 떠나지 않겠다고——',
      );
    }
  },

  // [번역 대상] o_c_pray_emperor
  async o_c_pray_emperor(emperor, you, dice) {
    await era.printAndWait(
      `신사는 ${you.name}와(과) ${emperor.name}에게 특별한 장소는 아니다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 행운에 기대기엔 이미 나이가 들었고, ${emperor.name}은(는) 언제나 실력으로 성적을 거둬왔다.`,
    );
    await era.printAndWait([
      '하지만 ',
      you.get_colored_name(),
      '이(가) 놀란 것은,',
      emperor.get_colored_name(),
      '도 루나와 마찬가지로 새로운 것에 대한 호기심을 끊임없이 품고 있다는 점이다.',
    ]);
    await era.printAndWait(
      `1년에 몇 번 정도 기도하러 오면 ${emperor.sex}에게도 충분히 신선한 경험이 된다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) ${emperor.name}의 곁에 서서, ${emperor.sex}이(가) 『행운』을 뜻하는 제비를 뽑기를 기다렸다.`,
    );
    era.println();
    if (dice < 0.5) {
      await emperor.say_and_wait('절대적인 실력이 있다면 하늘조차도 아군이 된다.');
      await era.printAndWait([
        emperor.get_colored_name(),
        '은(는) 제비를 뒤로 던졌고,',
        you.get_colored_name(),
        '은(는) 황급히 받아 나무에 매달았다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 문득 생각했다. 자신도 길한 제비를 한번 뽑아볼까?`,
      );
      await era.printAndWait(
        `${emperor.name}이(가) 기뻐해준다면 그걸로 됐다. 보이지 않는 앞날의 굴곡에 작은 희망이라도 보태기 위해서.`,
      );
      await era.printAndWait(
        `어떤 도움이라도 좋다. 아아…… 삼여신이여, ${emperor.name}을(를) 지켜주소서!`,
      );
    } else {
      await emperor.say_and_wait('재미있군! 짐은 도전을 좋아한다.');
      await era.printAndWait([
        emperor.get_colored_name(),
        '은(는) 흥미롭다는 듯 손에 든 제비를 치켜들고 호탕하게 웃었다.',
      ]);
      await era.printAndWait([you.get_colored_name(), '의 안색이 조금 어두워진다.']);
      await era.printAndWait([you.get_colored_name(), '은(는) 알고 있다.']);
      await era.printAndWait(
        '보이지 않는 앞날의 굴곡에 신의 질책까지 겹친다면……',
      );
      await era.printAndWait('조금 짜증이 난다.');
    }
  },

  // [번역 대상] o_c_pray_luna
  async o_c_pray_luna(luna, you, dice) {
    await era.printAndWait(
      `신사는 ${you.name}와(과) ${luna.name}에게 특별한 장소는 아니다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 행운에 기대기엔 이미 나이가 들었고, ${luna.name}은(는) 언제나 실력으로 성적을 거둬왔다.`,
    );
    await era.printAndWait([
      '하지만 ',
      you.get_colored_name(),
      '이(가) 안도한 것은,',
      luna.get_colored_name(),
      '이(가) 예전과 다름없이 새로운 것에 대한 호기심을 끊임없이 품고 있다는 점이다.',
    ]);
    await era.printAndWait(
      `1년에 몇 번 정도 기도하러 오면 ${luna.sex}에게도 충분히 신선한 경험이 된다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) ${luna.name}의 곁에 서서, ${luna.sex}이(가) 『행운』을 뜻하는 제비를 뽑기를 기다렸다.`,
    );
    era.println();
    if (dice < 0.5) {
      await luna.say_and_wait('상당히 좋은 계시인 것 같네요.');
      await era.printAndWait([
        luna.get_colored_name(),
        '은(는) 기쁜 듯 길한 제비를 ',
        you.get_colored_name(),
        '에게 보여준 뒤 나무에 매달았다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 문득 생각했다. 자신도 길한 제비를 한번 뽑아볼까?`,
      );
      await era.printAndWait(
        `${luna.name}이(가) 기뻐해준다면 그걸로 됐다. 보이지 않는 앞날의 굴곡에 작은 희망이라도 보태기 위해서.`,
      );
      await era.printAndWait(
        `어떤 도움이라도 좋다. 아아…… 삼여신이여, ${luna.name}을(를) 지켜주소서!`,
      );
    } else {
      await luna.say_and_wait('앞으로도 많은 장애물을 만나게 될 것 같네요.');
      await era.printAndWait([
        luna.get_colored_name(),
        '은(는) 제비에 적힌 문구를 ',
        you.get_colored_name(),
        '에게는 보여주지 않고 조심스럽게 챙겨 넣었다.',
      ]);
      await era.printAndWait([you.get_colored_name(), '의 안색이 조금 어두워진다.']);
      await era.printAndWait([you.get_colored_name(), '은(는) 알고 있다.']);
      await era.printAndWait(
        '보이지 않는 앞날의 굴곡에 신의 질책까지 겹친다면……',
      );
      await era.printAndWait('조금 짜증이 난다.');
    }
  },

  // [번역 대상] o_r_fishing_emperor
  async o_r_fishing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('コースでの狩りも、一種の釣りではないか？'),
      () => emperor.say_and_wait('水中の生霊よ……'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_r_fishing_luna
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '心を動かし性を忍ばせ、能わざるところを益す。釣りは、相当な学問ですね。',
        ),
      () =>
        luna.say_and_wait(
          '魚が釣れても、写真の記念だけにしてください。学園の財産ですから。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_r_walking_emperor
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('疆土を視るのも、皇帝の務めだ。'),
      () => emperor.say_and_wait('前方で何が騒がしい。弄臣よ、調べよ。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_r_walking_luna
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '子供の頃を、少し思い出した気がします。あなたは、いつも私の傍にいましたね。',
        ),
      () =>
        luna.say_and_wait(
          '今は、並んで歩けます——見てください。背が伸びましたでしょう？',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_arcade_emperor
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('騒がしい場所だ。'),
      () =>
        emperor.say_and_wait(
          '虚ろな遊戯が与える慰めも虚ろだ。真の愉しみが欲しければ、勇者と戦え。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_arcade_luna
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('む……もう一局！'),
      () =>
        luna.say_and_wait(
          `あれも、それも！ ${you.actual_name}、全部やってみましょう！`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_dating_emperor
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '弄臣よ、愛想を尽くすと決めたなら、きちんと吾を愉しませよ。',
        ),
      () =>
        emperor.say_and_wait(
          '……ふん。爪先立ちすらできぬなら、随侍する必要もない。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_dating_luna
  async o_s_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('悪夢を見たら教えてください。夜の番をしますから。'),
      () =>
        luna.say_and_wait(
          '沈んだときは『紅葉を賞で』、心を『防風』する……ふふ、傑作です。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_drawing_emperor
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('確率学は、深奥な学問だ。'),
      () =>
        emperor.say_and_wait('温泉へ行くと決めたなら、なぜこの手段を取る？'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_drawing_luna
  async o_s_drawing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'あなたが好きなら……いっそ、温泉ホテルを買い取りますか？',
        ),
      () => luna.say_and_wait('抽選する子たち全員に、幸運が訪れますように。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_ktv_emperor
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('劇場とは違う、別種の風味だ。'),
      () => emperor.say_and_wait('美しき音楽に耳を傾けるのは、極上の享受だ。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_ktv_luna
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('この機会に、少し休みましょう。'),
      () =>
        luna.say_and_wait(
          'あらゆる苦痛を、歌声として吐き出せたら、どれほど良いでしょう。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_movie_emperor
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('退屈だ。'),
      () => emperor.say_and_wait('次はない。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_movie_luna
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '良い作品でした。眠るつもりでしたが、筋が目を引きます。',
        ),
      () =>
        luna.say_and_wait(
          '今の映画は、ここまで本物なのですね。冷や汗をかきました。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_restaurant_emperor
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '征途の大きな愉しみは、足元の土地が育んだ糧を味わうことだ。',
        ),
      () => emperor.say_and_wait('美食と美酒を出せ！'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_restaurant_luna
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `後輩がアイスをご馳走したいと騒いでいます……ふふ、時間を作って${luna.sex}と食べに行かねば。`,
        ),
      () =>
        luna.say_and_wait(
          '最近、食欲の旺盛な子が多い。食材の仕入れ量を、どう増やすか計算しなければ。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_shopping_emperor
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('吾は活力ある街を好む。'),
      () => emperor.say_and_wait('臣民が和やかだ。良い。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_shopping_luna
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '今の店は、こんなに流行っているのですか？ 子供たちが惹かれるのも無理はありません。',
        ),
      () => luna.say_and_wait('あちらが賑やかですね。見に行きましょうか？'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_cook_emperor
  async office_cook_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('食物を成すにも、大いなる学がある。'),
      () => emperor.say_and_wait('汝に与える。畏れをもって食え。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_cook_luna
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '楽しい料理をたくさん作りましょう。ふふ、調理の過程も、愉しいものです。特に、あなたと一緒なら。',
        ),
      () =>
        luna.say_and_wait(
          '午前のうちに生徒会の仕事は済ませました。これで、集中できます。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_game_emperor
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('慰みとしては、合格だ。'),
      () => emperor.say_and_wait('狩りに出る準備は、まだか？'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_game_luna
  async office_game_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '遊び……？ 子供の頃、あなたはいつも私を抱えて遊んでくれましたね。',
        ),
      () =>
        luna.say_and_wait('遊ぶのは構いませんが、時間を無駄にはできません。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_gift_emperor
  async office_gift_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'ほう？ 贈り物か？ ……ふん、欲しいものは、吾が自ら取る。',
        ),
      () => emperor.say_and_wait('貢ぎ物は宝庫へ積め。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_gift_luna
  async office_gift_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'もう子供ではありません……！ えへへ、でも、ありがとう！',
        ),
      () =>
        luna.say_and_wait(
          '私たちは同じ理想を持つ『共犯』です。目標を果たすまで、止まってはいけません……すみません、少し重すぎましたか？',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_rest_emperor
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('……眠れ……'),
      () =>
        emperor.say_and_wait(
          '厄介なことがあれば、弄臣……吾は、起こすことを許す。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_rest_luna
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '……恥ずかしいですね。大人になってから、昔は当たり前だった抱擁も、少し熱を帯びてしまいます。',
        ),
      () => luna.say_and_wait('すぅ……はぁ……'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_dating_emperor
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '吾が眠っているあいだ、吾の意志でこの離宮をきちんと整えたか？',
        ),
      () =>
        emperor.say_and_wait(
          '弄臣よ、吾に正しく仕えよ。さすれば、尽きせぬ栄を許してやろう。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_dating_luna
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '光陰矢の如し、とはこのことでしょう。まだ幼い頃のように、シンボリ家で騒ぎ回っていた気がします。',
        ),
      () =>
        luna.say_and_wait(
          '何年も離れました。今からは、互いから遠く離れないほうがいい。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_tree_hollow_emperor
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '聞こえる……失意と敗北の者が、ここに残した苦恨が。',
        ),
      () =>
        emperor.say_and_wait('帝国が崩れようとも、美景と古跡は残り続ける。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_tree_hollow_luna
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '芽吹く意志は、熱情でしょうか、本能でしょうか。見えない力が、私を前へ促しています。',
        ),
      () =>
        luna.say_and_wait(
          `三女神よ、もし本当にエデンがあるのなら、私はすべての${luna.uma_sex_title}をそこへ導きます。`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] school_rooftop_emperor
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('日常の食事は、腹が満たされればよい。'),
      () => emperor.say_and_wait('食物に、要求はない。'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] school_rooftop_luna
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'ふふふ……生姜がなければ、脱『ショウガ』の馬……ふふ、脱韁、です。ふふふふ！',
        ),
      () =>
        luna.say_and_wait(
          '実は味への要求は高くありません。ですが盛り付けが美しく、香りが良ければ、食欲も湧きます。',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] select_sleep
  select_sleep(chara17) {
    chara17.say('すぅ……はぁ……');
  },
};
