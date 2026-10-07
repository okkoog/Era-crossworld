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
      () => emperor.say_and_wait('코스에서의 사냥도 일종의 낚시가 아니겠는가?'),
      () => emperor.say_and_wait('물속의 생령이여……'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_r_fishing_luna
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '마음을 움직이고 성정을 인내하게 하여, 하지 못하던 바를 더하게 한다. 낚시도 상당한 학문이군요.',
        ),
      () =>
        luna.say_and_wait(
          '물고기를 낚더라도 사진으로 기념만 남겨주세요. 학원의 재산이니까요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_r_walking_emperor
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('영토를 둘러보는 것도 황제의 책무다.'),
      () => emperor.say_and_wait('앞쪽이 왜 소란스럽지. 광대여, 알아보아라.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_r_walking_luna
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '어릴 적 일이 조금 떠오르는 것 같네요. 당신은 언제나 제 곁에 있었죠.',
        ),
      () =>
        luna.say_and_wait(
          '이제는 나란히 걸을 수 있어요——보세요. 키가 많이 컸죠?',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_arcade_emperor
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('시끄러운 곳이군.'),
      () =>
        emperor.say_and_wait(
          '허망한 놀이가 주는 위안도 허망할 뿐이다. 진정한 즐거움을 원한다면 용자와 싸워라.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_arcade_luna
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('으음…… 한 판 더!'),
      () =>
        luna.say_and_wait(
          `저것도, 이것도! ${you.actual_name}, 전부 해봐요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_dating_emperor
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '광대여, 비위를 맞추기로 했다면 제대로 짐을 즐겁게 하라.',
        ),
      () =>
        emperor.say_and_wait(
          '……흥. 발끝으로 서는 것조차 못한다면 곁에서 시중들 필요도 없다.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_dating_luna
  async o_s_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('악몽을 꾸면 말씀해주세요. 밤새 곁을 지켜드릴 테니까요.'),
      () =>
        luna.say_and_wait(
          '기분이 가라앉을 때는 『단풍을 감상하고』, 마음을 『바람막이』한다…… 후후, 걸작이네요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_drawing_emperor
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('확률학은 심오한 학문이다.'),
      () =>
        emperor.say_and_wait('온천에 가기로 했다면, 어째서 이런 수단을 쓰는 것이지?'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_drawing_luna
  async o_s_drawing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '당신이 좋아한다면…… 차라리 온천 호텔을 사버릴까요?',
        ),
      () => luna.say_and_wait('추첨하는 아이들 모두에게 행운이 찾아오기를.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_ktv_emperor
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('극장과는 다른, 또 다른 맛이 있군.'),
      () => emperor.say_and_wait('아름다운 음악에 귀를 기울이는 것은 최상의 향락이다.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_ktv_luna
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('이 기회에 조금 쉬도록 해요.'),
      () =>
        luna.say_and_wait(
          '모든 고통을 노랫소리로 토해낼 수 있다면 얼마나 좋을까요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_movie_emperor
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('지루하군.'),
      () => emperor.say_and_wait('다음은 없다.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_movie_luna
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '좋은 작품이었어요. 잠들 생각이었는데, 이야기에 눈길이 가더군요.',
        ),
      () =>
        luna.say_and_wait(
          '요즘 영화는 이렇게까지 진짜 같군요. 식은땀이 났어요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_restaurant_emperor
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '정복길의 큰 즐거움은 발밑의 땅이 길러낸 양식을 맛보는 것이다.',
        ),
      () => emperor.say_and_wait('미식과 미주를 내오라!'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_restaurant_luna
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `후배가 아이스크림을 사주고 싶다고 성화네요…… 후후, 시간을 내서 ${luna.sex}와(과) 함께 먹으러 가야겠어요.`,
        ),
      () =>
        luna.say_and_wait(
          '요즘 식욕이 왕성한 아이들이 많네요. 식재료 매입량을 얼마나 늘릴지 계산해야겠어요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_shopping_emperor
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('짐은 활기찬 거리를 좋아한다.'),
      () => emperor.say_and_wait('백성들이 화목하군. 좋다.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_shopping_luna
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '요즘 가게들은 이렇게나 유행하는군요? 아이들이 끌리는 것도 무리는 아니겠어요.',
        ),
      () => luna.say_and_wait('저쪽이 떠들썩하네요. 구경하러 갈까요?'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_cook_emperor
  async office_cook_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('음식을 만드는 데에도 큰 학문이 있다.'),
      () => emperor.say_and_wait('네게 하사하마. 경외하는 마음으로 먹어라.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_cook_luna
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '즐거운 요리를 많이 만들어봐요. 후후, 조리 과정도 즐거운 법이죠. 특히 당신과 함께라면.',
        ),
      () =>
        luna.say_and_wait(
          '오전 중에 학생회 일은 끝냈습니다. 이제 집중할 수 있겠네요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_game_emperor
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('소일거리로는 합격이다.'),
      () => emperor.say_and_wait('사냥에 나갈 준비는 아직인가?'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_game_luna
  async office_game_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '놀이……? 어릴 적에는 당신이 언제나 저를 안고 놀아주셨죠.',
        ),
      () =>
        luna.say_and_wait('노는 건 괜찮지만, 시간을 낭비할 수는 없습니다.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_gift_emperor
  async office_gift_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '호오? 선물인가? ……흥, 원하는 것은 짐이 직접 취한다.',
        ),
      () => emperor.say_and_wait('공물은 보물창고에 쌓아두어라.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_gift_luna
  async office_gift_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '이제 어린애가 아니에요……! 에헤헤, 그래도 고마워요!',
        ),
      () =>
        luna.say_and_wait(
          '우리는 같은 이상을 품은 『공범』입니다. 목표를 이루기 전까지 멈춰서는 안 돼요…… 죄송해요, 조금 무거웠나요?',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_rest_emperor
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('……자거라……'),
      () =>
        emperor.say_and_wait(
          '곤란한 일이 생기면, 광대여…… 짐은 깨우는 것을 허락하마.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_rest_luna
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '……부끄럽네요. 어른이 된 뒤로는 예전엔 당연했던 포옹도 조금 열기를 띠게 됩니다.',
        ),
      () => luna.say_and_wait('스으…… 하아……'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_dating_emperor
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '짐이 잠든 동안, 짐의 뜻대로 이 별궁을 제대로 정돈했느냐?',
        ),
      () =>
        emperor.say_and_wait(
          '광대여, 짐을 올바르게 섬겨라. 그러면 끝없는 영화를 허락하마.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_dating_luna
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '세월이 화살처럼 빠르다는 게 이런 뜻이겠죠. 아직 어린 시절처럼 심볼리 가문에서 떠들며 뛰어다니던 때가 엊그제 같아요.',
        ),
      () =>
        luna.say_and_wait(
          '몇 년이나 떨어져 지냈죠. 이제부터는 서로에게서 멀리 떨어지지 않는 편이 좋겠어요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_tree_hollow_emperor
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '들리는군…… 실의와 패배에 빠진 자들이 이곳에 남긴 원한이.',
        ),
      () =>
        emperor.say_and_wait('제국이 무너지더라도 아름다운 풍경과 옛 자취는 계속 남는다.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_tree_hollow_luna
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '싹트는 의지는 열정일까요, 본능일까요. 보이지 않는 힘이 저를 앞으로 나아가게 하고 있어요.',
        ),
      () =>
        luna.say_and_wait(
          `삼여신이여, 정말로 에덴이 존재한다면 저는 모든 ${luna.uma_sex_title}을(를) 그곳으로 이끌겠습니다.`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] school_rooftop_emperor
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('일상의 식사는 배만 채우면 된다.'),
      () => emperor.say_and_wait('음식에 바라는 것은 없다.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] school_rooftop_luna
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '후후후…… 생강이 없다면, 탈『생강』의 말…… 후후, 탈강(脫韁)이네요. 후후후후!',
        ),
      () =>
        luna.say_and_wait(
          '사실 맛에 대한 기준은 높지 않아요. 하지만 담음새가 아름답고 향이 좋으면 식욕도 돋죠.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] select_sleep
  select_sleep(chara17) {
    chara17.say('스으…… 하아……');
  },
};
