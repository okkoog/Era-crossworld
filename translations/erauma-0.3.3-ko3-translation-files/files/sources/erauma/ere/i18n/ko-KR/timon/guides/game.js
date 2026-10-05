// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file 初心者ガイド
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} new_save 新規セーブかどうか
   */
  // [번역 완료] game_start
  async game_start(minoru, you, new_save) {
    await era.printAndWait([
      you.get_colored_name(),
      "이(가) 부임할 아카데미에 도착하니, 에메랄드 그린 톤의 옷을 입은 ",
      minoru.sex_code === 1 ? "단정한 인간 남성" : "아름다운 인간 여성",
      "이 교문 앞에서 기다리고 있었다.",
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 최종 면접의 면접관 중 한 명이었다는 것을 곧 알아차렸다.',
    ]);
    era.println();
    if (!new_save) {
      await minoru.say_as_unknown_and_wait("안녕하세요. 새...");
      era.println();

      await era.printAndWait([
        "그 ",
        minoru.phy_sex_title,
        "은 ",
        you.get_colored_name(),
        "과(와) 시선이 마주치자 순간 의아한 표정을 지었으나, 이내 정신을 차린 듯 했다.",
      ]);
    } else {
      await era.printAndWait([
        "그 ",
        minoru.phy_sex_title,
        "은 ",
        you.get_colored_name(),
        "과(와) 시선이 마주치자 환하게 웃었다.",
      ]);
    }
    era.println();

    await minoru.say_as_unknown_and_wait([
      "안녕하세요. 새 트레이너 ",
      you.adult_sex_title,
      ".",
    ]);
    await minoru.say_as_unknown_and_wait('이사장 비서 하야카와 타즈나입니다.');
    await minoru.say_and_wait("트레센 학원에 오신 것을 환영합니다.");
    await minoru.say_and_wait(
      "업무에 더 빨리 적응하실 수 있도록 조언과 지원을 아끼지 않겠습니다.",
    );

    if (!new_save) {
      era.println();

      await era.printAndWait([minoru.sex, "은 눈을 가늘게 뜨며 말을 이어갔다."]);
      era.println();

      await minoru.say_and_wait(
        "하지만, 경험이 풍부하신 듯 하니 분명 금방 적응하시겠죠.",
      );
    }
    era.drawLine();
    await minoru.say_and_wait([
      "트레이너로서, 당연히 함께할 전속 ",
      minoru.uma_sex_title,
      " 파트너를 찾으셔야 할 거예요.",
    ]);
    await minoru.say_and_wait(
      "마침 트레센 학원에 잠재력 있는 유망주들이 꽤 많이 들어왔어요.",
    );
    await minoru.say_and_wait("그럼, 훈련장으로 같이 가 볼까요?");
  },
  /**
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} you プレイヤー
   */
  async recruit(minoru, you) {
    await era.printAndWait([
      '훈련장 밖에서 ',
      minoru.get_colored_name(),
      '가 잠시 발걸음을 멈췄다.',
    ]);
    await minoru.say_and_wait(
      '중앙 트레센 학원은 매년 약 2천 명 정도의 학생을 모집합니다. 대부분의 학생들은 정상에 오르고자 하는 꿈을 품고, 수많은 난관을 뚫고 이곳에 온 엘리트들이에요.',
    );
    await minoru.say_and_wait(
      '하지만, 때로는 뜻대로 되지 않을 때가 있습니다. 치열한 경쟁이나 부상, 혹은 단순히 운이 나빴기 때문일 수도 있고...',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      '가 가볍게 한숨을 내쉬었다.',
    ]);
    await minoru.say_and_wait([
      '저마다의 이유로 인해, 오픈 레이스(OP)를 순조롭게 완수할 수 있는 ',
      minoru.uma_sex_title,
      '는 10%도 채 되지 않아요.',
    ]);
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '에게 시선을 돌리며 진지하고 엄격한 표정을 지었다.',
    ]);
    await minoru.say_and_wait([
      '트레이너로서, 당신은 ',
      minoru.uma_sex_title,
      '들을 대신에 레이스에 나설 수는 없어요.',
    ]);
    await minoru.say_and_wait(
      '그러니 경기장 밖에서, 자신이 맡은 담당 우마무스메를 전력으로 지원해 줘야 합니다.',
    );
    await minoru.say_and_wait([
      '몸과 마음의 관리나 레이스 트레이닝 등, ',
      minoru.couple_title,
      '들이 꿈을 향해 달려가는 과정에서는 『트레이너』라는 어른의 인도와 도움이 필요합니다.',
    ]);
    await minoru.say_and_wait(
      '그러니, 당신이 짊어져야 할 책임을 분명히 인지해 주세요.',
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 자신의 넥타이를 바로잡으며, 자신이 품고 있는 각오를 드러냈다.',
    ]);
    await minoru.say_and_wait('좋아요.');
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 고개를 끄덕이며 ',
      you.get_colored_name(),
      '을(를) 데리고 훈련장에 있는 학생들 쪽으로 걸어갔다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {boolean} has_recruit
   */
  // [번역 완료] recruit_end
  async recruit_end(minoru, you, has_recruit) {
    era.drawLine();
    if (has_recruit) {
      await era.printAndWait([
        "모집을 순조롭게 끝마친 ",
        you.get_colored_name(),
        "은(는) 새로 결성한 파트너와 함께 ",
        minoru.get_colored_name(),
        "의 앞으로 왔다.",
      ]);
      await minoru.say_and_wait([
        "트레이너 ",
        you.adult_sex_title,
        "님도 무사히 담당 우마무스메를 찾으셨군요. 그럼...",
      ]);
      await era.printAndWait([minoru.get_colored_name(), "가 살짝 고개를 숙였다."]);
      await minoru.say_and_wait(
        '하야카와는 트레이너님과 담당 우마무스메의 3년 동안 무운이 함께하기를 진심으로 기원하겠습니다.',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 적당한 파트너를 찾지 못한 채 혼자서 ",
        minoru.get_colored_name(),
        "의 앞으로 돌아왔다.",
      ]);
      await minoru.say_and_wait([
        "트레이너 ",
        you.adult_sex_title,
        "님, 적당한 파트너를 찾으셨나요?",
      ]);
      era.printButton("「적당한 파트너는 이미 다른 분께 배정되었어요.」", 1);
      era.printButton("「부끄럽지만 아무도 저에게 관심이 없는 것 같아요.」", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 일부러 양손을 벌리며 매우 괴로워하는 표정을 지었다.",
        ]);
        await era.printAndWait(
          "그것이 진실인지, 거짓인지는 그다지 중요하지 않을지도 모른다.",
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 약간 어색하게 양손을 펴며 매우 곤란해하는 표정을 지었다.",
        ]);
      }
      era.println();

      await minoru.say_and_wait("그렇군요...");
      await minoru.say_and_wait(
        "그럼 잠시 후에 다시 와 보세요. 어쩌면 담당할 만한 학생을 찾을 수 있을지도 모르니까요.",
      );
      await minoru.say_and_wait(
        "이미 마음에 둔 학생이 있으시다면 이사장님께 부탁해 보셔도 되겠네요.",
      );
      await era.printAndWait('두 사람은 트레이닝장을 떠났다.');
    }
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_train(minoru, you) {
    await minoru.say_and_wait(
      '파트너를 모집한 후에, 파트너를 훈련장으로 데리고 가 트레이닝을 진행할 수 있습니다.',
    );
    await minoru.say_and_wait(
      '트레이닝은 대체로 다섯 종류로 나눌 수 있으며, 각각 스피드, 스태미나, 파워, 근성 그리고 지능에 해당해요.',
    );
    await minoru.say_and_wait(
      '담당 우마무스메의 기초 능력치는 주로 트레이닝을 통해 향상되지만, 그 외의 상황을 배제할 수는 없겠죠.',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      '가 ',
      you.get_colored_name(),
      '이(가) 집중하도록 손뼉을 쳤다.',
    ]);
    await minoru.say_and_wait(
      '...트레이닝은 체력과 기력을 소모하기 때문에, 만약 피곤한 상태에서 무리하게 훈련한다면 담당 우마무스메가 다칠 수도 있어요.',
    );
    await minoru.say_and_wait('...이 점에 특히 주의해 주시길 바랍니다.');
    await era.printAndWait([
      '이 말을 하는 ',
      minoru.get_colored_name(),
      '의 표정에는 잠시 어두운 기색이 스쳤지만, 이내 여유를 되찾고 다소 억지스러운 미소를 지었다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_register(minoru, you) {
    await minoru.say_and_wait(
      '이건 앞으로 있을 레이스 정보를 기록한 표입니다. 확인해 주세요.',
    );
    await minoru.say_and_wait(
      '만약 이 중에 담당 우마무스메가 출주했으면 하는 레이스가 있다면, 해당 항목을 선택하시면 됩니다.',
    );
    await minoru.say_and_wait(
      '각 레이스마다 트랙의 길이와 재질이 다르기에, 파트너의 적성에 맞는 적절한 레이스를 선택하는 게 보다 유리할 거예요.',
    );
    await minoru.say_and_wait(
      '또한 레이스에 출주하면 체력과 기력을 소모하며, 레이스가 끝난 직후에는 일정 기간 동안 피로 상태에 빠지게 된답니다.',
    );
    await minoru.say_and_wait(
      '...이전에 담당 우마무스메의 몸 상태를 아랑곳하지도 않고, 강도 높은 연전 레이스를 강행했던 악질 트레이너도 있었어요...',
    );
    await minoru.say_and_wait([
      '이러한 행위는 레이스를 이기게 할 수 없을 뿐만 아니라, 담당 우마무스메를 다치게 할 수도 있어요. 트레이너 ',
      you.adult_sex_title,
      '님께선 가능한 한 이런 전략을 사용하지 말아 주세요.',
    ]);
    await minoru.say_and_wait(
      '또한, 레이스 전에 부상이나 일정 충돌과 같은 돌발 상황이 발생하면, 레이스를 피하는 것도 하나의 선택지입니다.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_trainer_office(minoru, you) {
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '을(를) 이끌고 어느 사무실로 향했다. 안을 들여다보니 온통 동료 트레이너들뿐이었다.',
    ]);
    era.println();
    await minoru.say_and_wait(
      '이곳이 평소 업무를 보실 곳입니다. 다른 트레이너분들도 이곳에 자주 모습을 드러내실 거예요.',
    );
    await minoru.say_and_wait(
      '부디 동료분들과 원만한 관계를 맺으시길 바랄게요.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {PrintedSpan} call_305
   */
  async school_clinic(minoru, call_305) {
    await minoru.say_and_wait([
      '여기는 본교의 보건실입니다. 본교의 의사인 ',
      call_305,
      '가 이곳에 출몰할 거예요...네. 출몰한다는 표현이 맞겠네요.',
    ]);
    era.println();
    await era.printAndWait([
      minoru.sex,
      '가 난처한 표정으로 뺨을 긁적인다. 설마 ',
      call_305,
      '는 문제아인 건가?',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_god(minoru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      minoru.get_colored_name(),
      '는 세 명의 우마무스메 여신상이 조각된 분수 앞에 도착했다. 여신상이 어깨 위에 메고 있는 항아리 속에서 물이 흘러 나오고 있었다.',
    ]);
    era.println();

    await minoru.say_and_wait(
      '훈련하는 도중 이 세 여신상을 이미 보셨겠죠.',
    );
    await minoru.say_and_wait(
      '시대가 발전함에 따라 신앙은 점점 쇠퇴하고 있지만,',
    );
    await minoru.say_and_wait('저희에게 그분들은 실제로 존재하는...');
    await minoru.say_and_wait('...세 여신들은...반드시 존재해야만 해요.');
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      '는 작은 목소리로 몇 마디 중얼거렸지만 갑자기 불어온 거센 바람에 ',
      minoru.sex,
      '의 말은 허공으로 흩어졌다.',
    ]);
    era.println();

    await minoru.say_and_wait(
      '아무튼, 고민거리가 있다면 이곳에 와서 기도를 드려보세요.',
    );
    await minoru.say_and_wait(
      '매년 3월에 이곳에서 기도를 하면 특별한 효과가 있다는 소문도 있답니다.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_atrium(minoru, you) {
    await minoru.say_and_wait(
      '여기는 안뜰이에요. 많은 교사와 학생들이 쉬는 시간에 이곳에 와서 쉬곤 한답니다.',
    );
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      '가 안뜰의 한 모퉁이를 가리켰고, ',
      you.get_colored_name(),
      '이(가) 그쪽 방향을 보니 사람 키의 절반 정도 되는 고목의 구멍이 보였다.',
    ]);
    era.println();

    await minoru.say_and_wait(
      '일부 실의에 빠진 이들은 고목의 구멍 속에 소리를 지르며 응어리를 내뱉기도 한답니다.',
    );
    await minoru.say_and_wait([
      '그러니 만약 트레이너 ',
      you.adult_sex_title,
      '님께서 근처를 지나가다가 누군가 소리지르는 것을 듣게 되더라도 크게 놀라지 말아주세요?',
    ]);
  },
  /** @param {CharaTalk} minoru */
  async school_rooftop(minoru) {
    await minoru.say_and_wait(
      '영화나 드라마 같은 데서 보면 학생들이 옥상에 올라가 도시락을 먹거나 비밀 회의를 하곤 하잖아요.',
    );
    await minoru.say_and_wait(
      '하지만 실제로는 이 『명소』가 너무 인기가 많아서, 트레센의 옥상에서는 도저히 혼자 있을 수가 없답니다, 후훗.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {PrintedSpan} chairman
   */
  async school_chairman(minoru, you, chairman) {
    await minoru.say_and_wait([
      "여기는 본교 이사장님의 사무실입니다. 필요하시다면 보통 여기서",
      chairman,
      "을 만나실 수 있습니다.",
    ]);
    await minoru.say_and_wait([
      "이사장님과 좋은 관계를 맺으면 트레이너 ",
      you.adult_sex_title,
      "님의 승진에 꽤 도움이 될 거예요.",
    ]);
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      "가 ",
      you.get_colored_name(),
      "에게 윙크를 날렸다.",
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_visitors(minoru, you) {
    await minoru.say_and_wait(
      '교외에서 방문객이 올 때마다 학원 측에서는 이 방들에서 면담을 주선합니다.',
    );
    await minoru.say_and_wait([
      '앞으로도 트레이너 ',
      you.adult_sex_title,
      '님을 인터뷰하러 오는 기자들이 끊이지 않겠네요.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async out(minoru, you) {
    await minoru.say_and_wait([
      '트레센 학원의 정문으로 나가서 강둑을 산책하거나, 쇼핑거리, 신사 혹은 역 앞 등등의 장소를 구경하거나 하실 수 있어요. 구체적인 곳은...트레이너 ',
      you.adult_sex_title,
      ' 님이 직접 찾아 보길 바래요.',
    ]);
    await minoru.say_and_wait(
      '전 학원 업무를 처리하지 않을 때에는 보통 학원 정문 쪽에 있을 거예요. 만약 무슨 일이 있다면, 여기로 찾아와 주시면 됩니다.',
    );
    await minoru.say_and_wait(
      '...하지만 담당 우마무스메와 함께 다닐 때에는 그러지 말아 주세요?',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      '가 ',
      you.get_colored_name(),
      '에게 손을 흔들며 학원 정문 쪽으로 향했다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_sex(minoru, you) {
    await minoru.say_and_wait('어라, 설마 이런 요구일줄은......');
    await era.printAndWait([
      minoru.get_colored_name(),
      '의 눈빛이 칼날처럼 ',
      you.get_colored_name(),
      '의 달아오른 얼굴을 찔러 갔다...',
    ]);
  },
};
