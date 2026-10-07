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
  // [번역 완료] good_morning
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
            '「아…… 좋은 아침, 트레이너. 뭐야, 나 어제 밤늦게까지 안 깨어 있었어.」',
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
            `은(는) 다른 ${teio.uma_sex_title}와 이야기하고 있었던 모양이다.`,
            you.get_colored_name(),
            `이(가) ${teio.sex}의 이름을 부르자 대화를 마치고 달려왔다.`,
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
  // [번역 완료] office_study
  async office_study(teio, you) {
    await you.say_and_wait('무적의 테이오 님에게도 모르는 게 다 있네.');
    await era.printAndWait(
      `${you.name}이(가) 조금 놀리자 ${teio.sex}은(는) 입술을 삐죽 내밀고 ${you.name}을(를) 빤히 노려봤다. 헛기침을 한 뒤 제대로 설명을 시작했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] talk
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
            `은(는) 초조하게 발을 구르며 온몸의 털까지 곤두서 있다…… 지금은 ${teio.sex}에게 일을 시키지 않는 편이 좋겠다.`,
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
  // [번역 완료] office_cook
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
      `서로 미소를 주고받은 뒤 두 사람은 직접 만든 음식에 푹 빠졌다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] office_rest
  async office_rest(teio, you) {
    if (era.get('relation:3:0') > 150) {
      await you.say_and_wait(`자, 일어나렴, 테이오 ${teio.adult_sex_title}.`);
      await teio.say_and_wait(`으응—— 히히~`);
      await era.printAndWait(
        `${teio.teen_sex_title}의 몸이 ${you.name} 위로 쓰러지며 둘 다 소파에 파묻혔다.`,
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
  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(teio) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('지금의 나는…… 하하, 하하하, 윽——');
    } else {
      await teio.say_and_wait(
        '큭…… 이기고 싶어, 이기고 싶단 말이야! 나는 테이오야! 무적이라고! 반드시……',
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] s_a_dating
  async s_a_dating(teio, you) {
    await era.printAndWait(
      `학원 안에서…… 이래도 괜찮은 건가? ${you.name}의 가슴에 의문이 떠올랐다. 하지만 곁에 딱 붙어 있는 테이오는 얼굴이 유난히 붉을 뿐, 태도는 흐트러지지 않았다.`,
    );
    await era.printAndWait(
      `${teio.sex}의 그 표정을 보고 ${you.name}은(는) 오히려 안심해 다른 사람의 시선은 신경 쓰지 않고 연인처럼 ${teio.sex}와 장난치기 시작했다.`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  // [번역 완료] s_r_lunch
  async s_r_lunch(teio) {
    await teio.say_and_wait('여기서 밥 먹는 거, 의외로 괜찮네!');
    await era.printAndWait(
      '도시락을 펼친 장소는…… 「천장」 위? 두 사람은 즐거운 점심을 만끽했다.',
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 완료] o_r_fishing
  async o_r_fishing(teio, you, callname) {
    await teio.say_and_wait([callname, '、 이쪽!']);
    await era.printAndWait(
      `${teio.sex}은(는) 그렇게 말하며 신발을 벗고 맨발로 얕은 물에 들어갔다. 촉촉해진 하얀 두 발이 물속에서 더욱 사랑스러워 보였다.`,
    );
    await era.printAndWait(
      `안타깝게도 이렇게 떠들어대면 물고기는 달아난다. ${you.name}은(는) 어이없다는 듯 한숨을 쉬고 ${teio.sex} 옆에 앉아 낚시 준비를 시작했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] o_r_walking
  async o_r_walking(teio, you) {
    await teio.say_and_wait(`강가를 걷는 거~ 기분 좋아!`);
    await era.printAndWait(
      `${you.name}의 담당은 콧노래를 부르며 춤추듯 걸음을 옮긴다. 또 오자고, ${you.name}은(는) ${teio.sex}의 즐거운 얼굴을 보며 생각했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] o_s_arcade
  async o_s_arcade(teio, you) {
    await era.printAndWait(
      `${you.name}과(와) ${teio.name}은(는) 오락실에서 실컷 놀고, 돌아가기 전에 남은 코인을 크레인 게임에 『낭비』하기로 했다.`,
    );
    await era.printAndWait(
      `그렇다 해도 두 사람 모두 꽤 진지하게 스틱을 조작하고, 몇 번이나 고민한 끝에 버튼을 눌렀다……`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 완료] o_s_drawing
  async o_s_drawing(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '……무적의 테이오 운, 나눠줄게!']);
      await era.printAndWait(
        `${teio.sex}은(는) ${you.name}의 몸에 바짝 붙어 한쪽 팔을 붙잡는다. 따뜻하고 탄력 있는 감촉과 좋은 향기가 동시에 밀려와 ${you.name}은(는) 조금 어색하게 다른 손을 상자 안에 넣는다……`,
      );
    } else {
      await teio.say_and_wait(
        '응…… 운에서도 무적의 테이오 님은 지지 않아! 아마도……',
      );
      await era.printAndWait(
        `${teio.sex}이(가) ${you.name}을(를) 바라본다. ${you.name}이(가) 고개를 끄덕이자 ${teio.sex}은(는) 손을 상자 안에 넣었다……`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 완료] o_s_ktv
  async o_s_ktv(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '! 내 노래 어땠어!']);
      await era.printAndWait(
        `${you.name}은(는) 입술까지 가져갔던 물잔을 황급히 내려놓고 활짝 웃는 담당을 향해 고민하는 표정을 지었다. 조금 전 ${teio.sex}은(는) 혼신의 힘을 다해 『사랑은 더비☆』를 끝까지 불렀고, 아직도 뺨에 붉은 기운이 남아 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 머리를 굴려 칭찬을 늘어놓았고, ${teio.sex}은(는) 그런 ${you.name}의 모습을 보고 더욱 기쁜 듯 웃었다.`,
      );
    } else {
      await era.printAndWait(
        `정신을 차리니 노래방 앞이었다. ${teio.sex}의 강한 요청으로 안에 들어가 한동안 즐겼다——다만 노래는 거의 전부 ${teio.sex}이(가) 불렀다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] o_s_movie
  async o_s_movie(teio, you) {
    if (era.get('relation:3:0') > 225) {
      await era.printAndWait(
        `테이오는 ${you.name}의 왼팔에 매달려 발끝을 세우고 귓가에 작품명을 속삭였다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 보니 달달한 로맨스 영화였다. 조금 웃음이 나와 오른손으로 테이오의 머리를 쓰다듬으려다, 부끄러움과 결의가 뒤섞인 ${teio.sex}의 눈과 마주쳤다.`,
      );
      await era.printAndWait('응…… 그럼 연인처럼 보러 가자.');
    } else if (Math.random() < 0.5) {
      await era.printAndWait(
        `테이오의 강한 요청으로 ${you.name}은(는) 『도전할 만한 공포 영화』를 골랐다.`,
      );
      await era.printAndWait(
        `예상대로 클라이맥스가 올 때마다 작은 ${teio.uma_sex_title}은(는) 견디지 못해, ${you.name}의 ${teio.sex} 쪽 팔을 감각이 사라질 정도로 세게 붙잡았다……`,
      );
    } else {
      await era.printAndWait(
        `${you.name}은(는) 테이오와 가족용 코미디를 보며 내용에 저도 모르게 웃었다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} dice おみくじの出目。0-1の小数で、小さいほど良い
   */
  // [번역 완료] o_c_pray
  async o_c_pray(teio, you, callname, dice) {
    await teio.say_and_wait([
      callname,
      '~빨리 빨리, 같이 오미쿠지 뽑자!',
    ]);
    await era.printAndWait(
      `작은 ${teio.uma_sex_title}이(가) ${you.name}의 손을 잡아끌고 신사로 달려간다. ${you.name}은(는) 황급히 큰 걸음으로 따라간다. 목적지에 도착할 즈음에는 이미 땀범벅이다……`,
    );
    await era.printAndWait(
      `부드러운 감촉이 손에서 떨어지고, ${teio.name}은(는) 통을 치켜들어 눈을 가늘게 뜨고 웃으며 마구 흔든다——`,
    );
    await teio.say_and_wait('에헤헤——하앗!');
    await era.printAndWait(
      `아이처럼 신나게 흔든 뒤 대나무 제비 하나가 통에서 튀어나온다. ${you.name}은(는) 손을 들어 손가락으로 낚아채고 눈을 가늘게 뜬다.`,
    );
    if (dice < 0.2) {
      await era.printAndWait('（大吉）');
      if (era.get(`relation:3:0`) > 225) {
        await era.printAndWait(
          `${you.name}은(는) 다가가 테이오에게 대나무 제비를 흔들어 보였다. ${teio.sex}은(는) 그것을 낚아채더니 놀랍고 기쁜 표정으로 ${you.name}에게 달려들어 허리를 끌어안았다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}은(는) 대길이라고 소리 내어 읽었다. 테이오의 귀가 기쁘게 쫑긋 뛰고, ${teio.sex}은(는) 한 걸음에 앞으로 다가와 ${you.name}이(가) 제비를 쥔 손을 붙잡고 내용을 확인한 뒤 킥킥 웃었다.`,
        );
      }
    } else if (dice < 0.4) {
      await era.printAndWait('（中吉）');
      await era.printAndWait(
        `${you.name}이(가) 글자를 읽자 테이오는 그 자리에서 가슴을 펴고 허리에 손을 얹어, 자신의 뽑는 솜씨를 자랑하는 듯했다.`,
      );
    } else if (dice < 0.8) {
      await era.printAndWait('（小吉）');
      await era.printAndWait(
        `${you.name}은(는) 그것을 테이오에게 건넸고 ${teio.sex}은(는) 기쁜 듯 웃었다.`,
      );
    } else {
      await era.printAndWait('（凶）');
      await era.printAndWait(
        `${you.name}은(는) 잠시 망설이다 소리 내어 읽지 않았다. 테이오는 무언가를 눈치채고 어색한 표정으로 서 있었고, 두 사람은 이 일은 잊기로 했다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  // [번역 완료] good_night_normal
  async good_night_normal(teio, you, callname) {
    era.print(
      `바쁜 하루가 끝나고 ${you.name}은(는) ${teio.name}을(를) 학생 기숙사 입구까지 바래다준다.`,
    );
    teio.say(['내일 또 봐!', callname, '！']);
    era.print(
      `피곤한 하루였는데도 ${teio.sex}은(는) 여전히 활기차다. ${you.name}은(는) 그렇게 생각하며 ${teio.sex}와 손을 흔들고 헤어졌다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  // [번역 완료] gn_sex_intro
  gn_sex_intro(teio, you) {
    era.print(
      `바쁜 하루가 끝나고 ${you.name}은(는) ${teio.name}을(를) 학생 기숙사 입구까지 바래다준다.`,
    );
    era.print(
      '평소처럼 헤어지려던 순간, 어째서인지 두 사람 모두 움직임을 멈추고 짧은 침묵이 흘렀다……',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: '응, ', color: teio.color },
      '응——」',
    ]);
    era.print(
      `침묵 뒤 동시에 목소리가 나와 또 어색해졌다. 하지만 조금 우습기도 해서 ${teio.uma_sex_title}의 얼굴에 미소가 떠올랐고, ${teio.sex}은(는) 용기를 내 ${you.name}보다 먼저 입을 열었다.`,
    );
    teio.say('저기, 외박 신청서는 이미 냈으니까 오늘은……');
  },
  // [번역 완료] gn_sex_confirm
  gn_sex_confirm: (teio, you) => [
    '목소리가 점점 가늘어진다. 피가 뺨으로 몰리고 ',
    you.get_colored_name(),
    '은(는) ',
    teio.sex,
    '의 그 얼굴을 더는 참지 못하고 결심했다——',
  ],
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} check 求愛判定。大成功なら拒否しても逆に押し切られる
   */
  // [번역 완료] gn_sex_reject
  async gn_sex_reject(teio, you, callname, check) {
    if (check !== 2) {
      return;
    }
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('응…… 그렇구나.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 여전히 가슴을 펴고 자신을 바라보고 있지만 눈빛만은 가라앉아 가는 ',
        teio.sex,
        '을(를) 보며 가슴이 아파 한 손을 ',
        teio.sex,
        '의 머리로 뻗는다.',
      ]);
      await era.printAndWait([
        '하지만 갑자기 ',
        teio.sex,
        '이(가) 손을 들어 죽순처럼 뻗은 다섯 손가락으로 ',
        you.get_colored_name(),
        '의 손바닥을 단단히 붙잡는다.',
        you.get_colored_name(),
        '은(는) 힘을 줘 빼내려 하지만 꼼짝도 하지 않는다——',
      ]);
      await teio.say_and_wait([callname, '……']);
      await era.printAndWait([
        teio.sex,
        '은(는) 점점 더 ',
        you.get_colored_name(),
        '에게 가까이 다가간다.',
      ]);
      await teio.say_and_wait('나는…… 어디서든, 놓고 싶지 않아. 놓지 않을 거야.');
    } else {
      await teio.say_and_wait(
        '그——렇——구——나? 그럼 가자! 준비는 다 됐어, 장소도 말이야!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 무언가 말하기도 전에 체력에서 앞서는 ',
        teio.uma_sex_title,
        '에게 바람처럼 끌려갔다…… 지금 이 자리에서는 ',
        you.get_colored_name(),
        '의 의견은 중요하지 않을지도 모른다.',
        teio.get_colored_name(),
        '은(는) 그저 앞으로 무슨 일이 일어날지를 ',
        you.get_colored_name(),
        '에게 알려줬을 뿐이다.',
      ]);
    }
  },
  // [번역 완료] cl_new_year
  cl_new_year: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        '새해야!',
        callname,
        '、 준비됐어? 뭐 하고 놀까? 오늘은 같이 밤새 신나게 놀자!',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 황급히 ${teio.sex}에게 목소리를 낮추라고 신호했다. 이대로 소리 지르게 두면 학생을 꼬드기는 변태 교사라는 평판이 생길지도 모른다. 손이 많이 가는 아이다.`,
      );
      await era.printAndWait(
        `하지만…… 담당 ${teio.uma_sex_title}이(가) 곁에서 기쁜 듯 뛰며 활력 넘치는 모습을 보니 ${you.name}은(는) 한 해의 바쁨도 보상받는 기분이 들었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  // [번역 완료] cl_valentine
  cl_valentine: (() => {
    const title = '밸런타인';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('꿀 꿀~ 에헤헤~');
      await era.printAndWait(
        `${you.name}이(가) 책상에서 고개를 들자 두 손을 뒤로 감추고 방긋방긋 ${you.name}을(를) 바라보는 ${teio.uma_sex_title}${teio.teen_sex_title}이(가) 있었다.`,
      );
      await teio.say_and_wait([
        callname,
        '~이거, 내가 만든 선물이야~',
      ]);
      await era.printAndWait(
        `${teio.sex}이(가) 손을 앞으로 내민다. 아주 세련되진 않았지만 정성이 담긴 포장의 작은 상자가 ${you.name}의 눈앞에 나타난다.`,
      );
      era.print([you.get_colored_name(), '——']);
      era.printButton('선물을 받는다', 1);
      era.printButton(`${teio.sex}까지 함께 먹어버린다`, 2, {
        disabled: era.get('love:3') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) 받아 들고 감사 인사를 한 뒤 ${teio.sex} 앞에서 조심스럽게 포장을 열어 안의 초콜릿을 입에 넣었다.`,
        );
        await era.printAndWait(
          `담당 학생이나 동료에게 받은 일곱, 여덟 개의 초콜릿을 정리한 뒤 ${you.name}은(는) 업무용 책상 너머에 앉아 일을 준비했다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}은(는) ${teio.sex}의 손에서 상자를 받았지만 서둘러 먹지 않고, 다른 손으로 천천히 포장을 풀면서도 ${teio.sex}의 손을 계속 잡고 있었다.`,
        );
        await era.printAndWait(
          `${teio.sex}의 얼굴이 귀까지 붉어졌을 때 ${you.name}은(는) 갑자기 ${teio.sex}을(를) 품으로 끌어당기고, 초콜릿을 머금은 채 ${teio.sex}의 입술에 입맞췄다.`,
        );
        await era.printAndWait(
          `꿀과 카카오의 달콤함이 ${teio.teen_sex_title}의 작은 혀에 얽힌다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  // [번역 완료] cl_temple_fair
  cl_temple_fair: (() => {
    const title = '縁日';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}이(가) 메시지로 권하자 곧 ${teio.name}에게서 답장이 왔다.`,
      );
      await teio.say_and_wait(`트레——이너——`);
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 앳된 느낌을 전부 귀여움으로 바꾸면서도 어딘가 묘한 분위기를 풍기는 유카타로 갈아입고 ${you.name} 앞에서 한 바퀴 돌았다.`,
      );
      await teio.say_and_wait(`이 차림, 어때?`);
      era.printButton('「응……」', 1);
      await era.input();
      await era.printAndWait(`대답하기 어렵다.`);
      await era.printAndWait(`가슴 깊은 곳에서 무언가가 툭 끊어진 기분이 들었다.`);
      await era.printAndWait(
        `작은 체구의 ${teio.teen_sex_title}이(가) 입으니 아직 완전히 성숙하지 않은 체형이지만 그래도 충분히 매력적인 몸선이 비쳐 보였다.`,
      );
      await era.printAndWait(
        `가장 위의 새하얀 귀 장식은 작은 ${teio.uma_sex_title}을(를) 순진한 학생이라고 강조하는 듯했다. 그 아래 느슨한 천은 굴곡을 강조할 정도로 몸에 달라붙지는 않지만 겨드랑이와 옆구리를 비쳐 보이게 했다.`,
      );
      await era.printAndWait(
        `평소에는 가려져 있는 매끄럽고 하얀 민감한 피부가 지금은 ${you.name}의 시선에 그대로 드러나 있다. ${you.name}이(가) 원한다면 손을 뻗어 감촉을 확인하는 것조차 가능하다……`,
      );
      await teio.say_and_wait(`응?`);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.teen_sex_title,
        '의 아름다움에 빠져 한동안 헤어나오지 못했다.',
      ]);
      era.printButton('참을 수 없어!', 1, {
        disabled: era.get('love:3') < 75,
      });
      era.printButton('강철 같은 의지!', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) 크게 숨을 들이쉬고 무거워진 몸으로 ${teio.uma_sex_title} 곁에 다가가 큰 손을 뻗는다——`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  // [번역 완료] cl_halloween
  cl_halloween: (() => {
    const title = '할로윈';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        '오늘 일을 마치고 집무실을 정리한 ',
        you.get_colored_name(),
        '은(는) 다리를 쉬며 학원의 종소리를 기다린다.',
      ]);
      await era.printAndWait('오늘은 무언가가 일어난다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 정해진 운명을 기다린다.',
      ]);
      era.println();
      await era.printAndWait('「쿵——, 톡톡톡, 쿵——」');
      await era.printAndWait([
        '기묘한 노크 소리가 들린다.',
        you.get_colored_name(),
        '은(는) 숨을 죽이고 문 뒤로 돌아가 힘껏 열어젖힌다——',
      ]);
      era.println();
      await era.printAndWait('붉은 덩어리가 뛰어든다.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 소리 없이 달려든다.',
      ]);
      era.println();
      await teio.say_and_wait('와아!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 기습은 실패했고 ',
        teio.sex,
        '은(는) 제때 돌아서 마침 ',
        you.get_colored_name(),
        '와(과) 서로 끌어안듯 부딪힌다.',
      ]);
      era.println();
      await teio.say_and_wait('테이오 님은 안 놀라거든!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 담당은 허리에 손을 얹고 빨간 두건 차림으로 한 손에는 바구니를, 다른 손으로는 ',
        you.get_colored_name(),
        '을(를) 붙잡으러 온다.',
      ]);
      era.println();
      await teio.say_and_wait('나쁜 어른, 나랑 놀자!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 연거푸 알겠다고 대답하고 약속대로 ',
        teio.sex,
        '와(과) 외출했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  // [번역 완료] cl_christmas
  cl_christmas: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        '크리스마스! 응, ',
        callname,
        '은(는) 산타가 돼서 선물을 주든지, 나랑 밤새 놀든지 둘 중 하나야!',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 항의했지만 이 활력 넘치는 담당에게는 아무래도 당해낼 수 없었다.`,
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
  // [번역 완료] end_talk
  async end_talk(teio, you) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:3') >= 75) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '함께 퇴장할 때가 와버린 것 같네…… 역시 조금 분하다.',
          );
        } else {
          await teio.say_and_wait(
            '트레이너…… 무슨 일이 있어도 나는 계속 그렇게 부를 거야.',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait([
          '말이 없다.',
          teio.sex,
          '은(는) 마지막으로 ',
          you.get_colored_name(),
          '을(를) 한 번 바라본다. 푸른빛 도는 검은 눈동자에는 눈물로도 씻어낼 수 없는 얼룩이 가득했다.',
        ]);
      } else {
        await teio.say_and_wait(
          '언제부터 두 사람이 나아갈 길이 어긋나기 시작한 걸까……?',
        );
      }
    } else {
      if (era.get('love:3') >= 50) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '설마 이런 결말이라니…… 안 돼! 너도 계속 내 곁에 있어! 남들이 어떻게 보든 너는 내 트레이너니까!',
          );
        } else {
          await teio.say_and_wait(
            '히익——드, 들켰어? 그, 그럼 앞으로는 몰래…… 책임져야 해!',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await teio.say_and_wait('언제부터 서로의 시선이 엇갈리기 시작한 걸까……');
      } else {
        await teio.say_and_wait('……계약 해지, 동의할게.');
      }
    }
  },
};
